<div align="center">
  <img src="public/media/favicon.png" alt="DJ RMS Logo" width="100"/>
  <h1>DJ RAMOS | Brutalist Sound Architecture</h1>
  <p>
    <strong>A high-performance, brutalist-inspired portfolio built with Vanilla JS, CSS3 and Cloudflare Workers.</strong>
  </p>
  <p>
    <a href="https://djramos.pablo-mdm.workers.dev">View Live Site</a>
  </p>
</div>

<br />

## 🚀 Project Overview

This project is a modern digital portfolio for **DJ RAMOS**, designed to break away from traditional corporate web templates. It adopts a **Brutalist Design** philosophy—characterized by stark contrasts, massive typography, raw monochromatic aesthetics, and micro-interactions—to visually reflect the raw energy of underground electronic music.

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3 (Grid/Flexbox, CSS Variables, Fluid Typography), Vanilla JavaScript (ES6+)
- **Hosting + API:** a single **Cloudflare Worker** serves the static site (`public/`) and the `/api/*` endpoints (`src/index.js`)
- **Database:** **Cloudflare D1** (SQLite) for client reviews, with anti-spam checks and per-IP rate limiting
- **Form Handling:** Web3Forms API, proxied through the Worker so the access key never reaches the browser
- **Cost:** everything runs on Cloudflare's free tier, always on, no cold "paused database" issues

## 🗂️ Structure

```
public/          static site (index.html, script.js, style.css, media/, _headers)
src/index.js     Worker: /api/reviews (GET, POST) and /api/contact (POST)
schema.sql       D1 schema (idempotent)
wrangler.jsonc   Worker + assets + D1 configuration
```

## 🛠️ Development

```bash
npm install
npm run db:local                       # create the local D1 database (first time only)
cp .dev.vars.example .dev.vars         # fill in WEB3FORMS_ACCESS_KEY for the contact form
npm run dev                            # http://127.0.0.1:8787
```

## 🚢 Deployment

```bash
npm run db:remote                                  # first time only: create the reviews table
npx wrangler secret put WEB3FORMS_ACCESS_KEY       # first time only
npm run deploy
```

## ⚡ Key Technical Highlights

As a developer, I focused heavily on performance, accessibility, and unique UI/UX patterns without relying on heavy frameworks like React or Tailwind.

### 1. Zero-Dependency & Framework-Agnostic
Built entirely with Vanilla JS and raw CSS to guarantee maximum performance and minimal payload size. The site scores highly on Lighthouse metrics.

### 2. Edge Delivery
Images and audio are served as Worker static assets from Cloudflare's edge network with long-lived cache headers, next to the HTML, CSS and JS. No third-party storage bucket, no cross-origin requests.

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
