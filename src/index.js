// Cloudflare Worker + D1 (plan gratuito, siempre encendido).
// En producción la web la sirve Netlify en djramos.es y reenvía /api/* aquí (netlify.toml);
// el Worker sigue sirviendo también public/ en workers.dev y en local (npm run dev).
// API bajo /api/*:
//   GET  /api/reviews  → últimas 50 reseñas
//   POST /api/reviews  → nueva reseña (anti-spam + límite por IP)
// El formulario de contacto habla directamente con Web3Forms desde el navegador
// (Web3Forms limita por IP y las IPs de salida de Workers son compartidas).

const URL_PATTERN = /https?:\/\/|www\.|\.com|\.net|\.org|\.ru|\.cn|bit\.ly|tinyurl/i;
const REPEAT_PATTERN = /(.)\1{6,}/;
const MIN_FILL_MS = 4000;
const MAX_REVIEWS_PER_IP_PER_HOUR = 3;

const strip = (str) => String(str).replace(/<[^>]*>/g, '').trim();

function json(data, status = 200, headers = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store',
            ...headers,
        },
    });
}

/**
 * La web y la API viven en el mismo origen, así que en producción no hace falta CORS.
 * Aun así se comprueba el Origin para rechazar envíos desde otras webs.
 * ALLOWED_ORIGINS (wrangler.jsonc) admite orígenes extra separados por comas.
 */
function resolveOrigin(req, env) {
    const origin = req.headers.get('Origin');
    if (!origin) return { ok: true, origin: null };
    const self = new URL(req.url).origin;
    const extra = String(env.ALLOWED_ORIGINS || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    const ok =
        origin === self ||
        extra.includes(origin) ||
        origin.startsWith('http://localhost') ||
        origin.startsWith('http://127.0.0.1');
    return { ok, origin };
}

function corsHeaders(origin, methods) {
    const h = {
        'Access-Control-Allow-Methods': methods,
        'Access-Control-Allow-Headers': 'Content-Type',
        Vary: 'Origin',
    };
    if (origin) h['Access-Control-Allow-Origin'] = origin;
    return h;
}

async function readBody(req) {
    try {
        const parsed = await req.json();
        return typeof parsed === 'object' && parsed !== null ? parsed : {};
    } catch {
        return {};
    }
}

const b64urlToBytes = (s) =>
    Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

/**
 * ¿Viene la petición del proxy de Netlify (netlify.toml, `signed`)? Netlify añade
 * x-nf-sign: un JWT HS256 firmado con NETLIFY_PROXY_SECRET (secreto del Worker y
 * variable de entorno en Netlify con el mismo valor).
 */
async function isSignedByNetlify(req, env) {
    const token = req.headers.get('x-nf-sign');
    if (!token || !env.NETLIFY_PROXY_SECRET) return false;
    const [header, payload, signature] = token.split('.');
    if (!signature) return false;
    try {
        const key = await crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(env.NETLIFY_PROXY_SECRET),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['verify']
        );
        const valid = await crypto.subtle.verify(
            'HMAC',
            key,
            b64urlToBytes(signature),
            new TextEncoder().encode(`${header}.${payload}`)
        );
        if (!valid) return false;
        const claims = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload)));
        if (claims.iss !== 'netlify') return false;
        if (claims.exp && claims.exp * 1000 < Date.now()) return false;
        return true;
    } catch {
        return false;
    }
}

/**
 * IP del visitante. Detrás del proxy de Netlify, CF-Connecting-IP es la IP de Netlify;
 * la del visitante va en x-nf-client-connection-ip, que solo se acepta si la petición
 * está firmada (si no, cualquiera podría inventársela llamando directamente a workers.dev).
 */
async function clientIP(req, env) {
    if (await isSignedByNetlify(req, env)) {
        const viaNetlify = req.headers.get('x-nf-client-connection-ip');
        if (viaNetlify) return viaNetlify.trim();
    }
    return req.headers.get('CF-Connecting-IP') || 'unknown';
}

// ── /api/reviews ─────────────────────────────────────────────────────────────

async function listReviews(env, cors) {
    const { results } = await env.DB.prepare(
        'SELECT id, author, event, text, created_at FROM reviews ORDER BY created_at DESC LIMIT 50'
    ).all();
    return json(results, 200, cors);
}

async function createReview(req, env, cors) {
    const { author, event, text, _hp, _ts } = await readBody(req);

    // 1. Honeypot: los bots rellenan el campo oculto
    if (_hp) return json({ success: false, message: 'Bad request.' }, 400, cors);

    // 2. Tiempo mínimo de relleno
    const fillTime = Date.now() - Number(_ts || 0);
    if (!_ts || fillTime < MIN_FILL_MS) return json({ success: false, message: 'Bad request.' }, 400, cors);

    // 3. Campos obligatorios
    if (
        typeof author !== 'string' || typeof event !== 'string' || typeof text !== 'string' ||
        !author || !event || !text
    ) {
        return json({ success: false, message: 'All fields are required.' }, 400, cors);
    }

    // 4. Longitud máxima
    if (author.length > 80 || event.length > 100 || text.length > 500) {
        return json({ success: false, message: 'Input too long.' }, 400, cors);
    }

    // 5. Longitud mínima
    if (text.trim().length < 20) {
        return json({ success: false, message: 'Review too short (min 20 characters).' }, 400, cors);
    }

    // 6. Enlaces
    if (URL_PATTERN.test(text) || URL_PATTERN.test(author) || URL_PATTERN.test(event)) {
        return json({ success: false, message: 'Links are not allowed.' }, 400, cors);
    }

    // 7. Caracteres repetidos (aaaaaaa)
    if (REPEAT_PATTERN.test(text)) return json({ success: false, message: 'Invalid content.' }, 400, cors);

    // 8. Límite: 3 reseñas por IP y hora
    const ip = await clientIP(req, env);
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const recent = await env.DB
        .prepare('SELECT COUNT(*) AS n FROM reviews WHERE ip_address = ? AND created_at >= ?')
        .bind(ip, oneHourAgo)
        .first('n');
    if (Number(recent) >= MAX_REVIEWS_PER_IP_PER_HOUR) {
        return json(
            { success: false, message: 'Too many reviews. Try again later.' },
            429,
            { ...cors, 'Retry-After': '3600' }
        );
    }

    const row = {
        id: crypto.randomUUID(),
        author: strip(author).toUpperCase(),
        event: strip(event).toUpperCase(),
        text: strip(text),
        created_at: new Date().toISOString(),
    };
    await env.DB
        .prepare('INSERT INTO reviews (id, author, event, text, ip_address, created_at) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(row.id, row.author, row.event, row.text, ip, row.created_at)
        .run();

    return json({ success: true, data: row }, 201, cors);
}

// ── Router ───────────────────────────────────────────────────────────────────

export default {
    async fetch(req, env) {
        const url = new URL(req.url);

        // Una sola URL canónica: siempre https y sin www. Ambas correcciones en un solo salto.
        const forceHttps = url.protocol === 'http:' && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1';
        const stripWww = url.hostname.startsWith('www.');
        if (forceHttps || stripWww) {
            if (forceHttps) url.protocol = 'https:';
            if (stripWww) url.hostname = url.hostname.slice(4);
            return Response.redirect(url.toString(), 301);
        }

        if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(req);

        const { ok, origin } = resolveOrigin(req, env);
        if (!ok) return json({ success: false, message: 'Forbidden' }, 403);

        const route = url.pathname.replace(/\/+$/, '');
        const methods = 'GET, POST, OPTIONS';
        const cors = corsHeaders(origin, methods);

        if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

        try {
            if (route === '/api/reviews') {
                if (req.method === 'GET') return await listReviews(env, cors);
                if (req.method === 'POST') return await createReview(req, env, cors);
                return json({ success: false, message: 'Method Not Allowed' }, 405, cors);
            }
            return json({ success: false, message: 'Not found' }, 404, cors);
        } catch (err) {
            console.error(`${req.method} ${route} error:`, err);
            return json({ success: false, message: 'Server error.' }, 500, cors);
        }
    },
};
