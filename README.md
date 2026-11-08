<div align="center">
  <img src="public/media/favicon.png" alt="DJ RMS Logo" width="100"/>
  <h1>DJ RAMOS | Brutalist Sound Architecture</h1>
  <p>
    <strong>A high-performance, brutalist-inspired portfolio built with Vanilla JS, CSS3, Netlify and Cloudflare Workers.</strong>
  </p>
  <p>
    <a href="https://djramos.es">View Live Site</a>
  </p>
</div>

<br />

## 🚀 Project Overview

This project is a modern digital portfolio for **DJ RAMOS**, designed to break away from traditional corporate web templates. It adopts a **Brutalist Design** philosophy—characterized by stark contrasts, massive typography, raw monochromatic aesthetics, and micro-interactions—to visually reflect the raw energy of underground electronic music.

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3 (Grid/Flexbox, CSS Variables, Fluid Typography), Vanilla JavaScript (ES6+)
- **Hosting:** **Netlify** serves the static site (`public/`) on djramos.es. Cloudflare's shared IPs get blocked by Spanish ISPs during LaLiga matches, so the domain is DNS-only in Cloudflare and points to Netlify
- **API:** a **Cloudflare Worker** (`src/index.js`) serves `/api/*`. Netlify proxies `/api/*` to its workers.dev URL (`netlify.toml`), signing each request so the Worker can trust the visitor IP Netlify forwards
- **Database:** **Cloudflare D1** (SQLite) for client reviews, with anti-spam checks and per-IP rate limiting
- **Form Handling:** Web3Forms API, called from the browser (the access key is public by design; Web3Forms rate-limits per visitor IP)
- **Cost:** everything runs on the Netlify and Cloudflare free tiers, always on, no cold "paused database" issues

## 🗂️ Structure

```
public/          static site (index.html, script.js, style.css, media/, _headers)
src/index.js     Worker: /api/reviews (GET, POST)
schema.sql       D1 schema (idempotent)
netlify.toml     Netlify: publish public/, proxy /api/* to the Worker
wrangler.jsonc   Worker + assets + D1 configuration
```

## 🛠️ Development

```bash
npm install
npm run db:local                       # create the local D1 database (first time only)
npm run dev                            # http://127.0.0.1:8787
```

## 🚢 Deployment

```bash
npm run db:remote                                  # first time only: create the reviews table
npm run deploy                                     # Worker (API)
```

The site deploys to Netlify automatically on every push to `main`. The Netlify environment variable `NETLIFY_PROXY_SECRET` and the Worker secret of the same name (`npx wrangler secret put NETLIFY_PROXY_SECRET`) must hold the same value.

## ⚡ Key Technical Highlights

As a developer, I focused heavily on performance, accessibility, and unique UI/UX patterns without relying on heavy frameworks like React or Tailwind.

### 1. Zero-Dependency & Framework-Agnostic
Built entirely with Vanilla JS and raw CSS to guarantee maximum performance and minimal payload size. The site scores highly on Lighthouse metrics.

### 2. Edge Delivery
Images and audio are served from Netlify's CDN with long-lived cache headers, next to the HTML, CSS and JS. No third-party storage bucket, no cross-origin requests.

### 3. Brutalist UI / UX
- **Custom Blend-Mode Cursors:** Implemented a custom JavaScript cursor with `mix-blend-mode: difference` that reacts dynamically to interactive elements. (Automatically disabled on touch devices via `@media (hover: none)`).
- **Asymmetric Parallax Scrolling:** Engineered a lightweight intersection-based parallax scrolling effect for gallery images.
- **Fluid Typography:** Utilized CSS `clamp()` functions to ensure massive header texts scale perfectly from 4K displays down to 320px mobile screens without media query breakpoints snapping.

### 4. Reviews API on D1
Visitors can leave reviews. The Worker validates every submission (honeypot field, minimum fill time, length limits, link and repeated-character detection), strips HTML, and enforces a limit of 3 reviews per IP per hour before writing to D1.

### 5. Hardened Static Assets
`public/_headers` ships a Content-Security-Policy, HSTS, `nosniff`, `X-Frame-Options` and a restrictive `Permissions-Policy` with every static response.

## 📱 Responsive Design
The application is fully responsive. Mobile optimizations include collapsing complex CSS Grids into stacked layouts, adjusting viewport-height margins (`vh`), and disabling expensive JavaScript animations on low-power/touch devices to save battery life.

---

<div align="center">
  <i>Designed and coded by Pablo García López</i>
</div>
