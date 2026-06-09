<div align="center">
  <img src="https://jiyjgrzbxqwdxbevusxp.supabase.co/storage/v1/object/public/imgs/favicon.png" alt="DJ RMS Logo" width="100"/>
  <h1>DJ RAMOS | Brutalist Sound Architecture</h1>
  <p>
    <strong>A high-performance, brutalist-inspired portfolio built with Vanilla JS, CSS3, and Serverless Architecture.</strong>
  </p>
  <p>
    <a href="https://djramos.vercel.app">View Live Site</a>
  </p>
</div>

<br />

## 🚀 Project Overview

This project is a modern digital portfolio for **DJ RAMOS**, designed to break away from traditional corporate web templates. It adopts a **Brutalist Design** philosophy—characterized by stark contrasts, massive typography, raw monochromatic aesthetics, and micro-interactions—to visually reflect the raw energy of underground electronic music.

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3 (Grid/Flexbox, CSS Variables, Fluid Typography), Vanilla JavaScript (ES6+)
- **Cloud Storage:** Supabase (S3-compatible) for zero-latency multimedia delivery
- **Form Handling:** Web3Forms API for serverless form submissions
- **Deployment:** Vercel (CI/CD)

## ⚡ Key Technical Highlights

As a developer, I focused heavily on performance, accessibility, and unique UI/UX patterns without relying on heavy frameworks like React or Tailwind.

### 1. Zero-Dependency & Framework-Agnostic
Built entirely with Vanilla JS and raw CSS to guarantee maximum performance and minimal payload size. The site scores highly on Lighthouse metrics.

### 2. S3 Asset Offloading (Supabase)
To keep the GitHub repository lightweight and Vercel build times under 2 seconds, all heavy multimedia files (high-res images, MP3 tracks) are offloaded to **Supabase Storage**. The frontend asynchronously fetches these assets via public bucket URLs.

### 3. Brutalist UI / UX
- **Custom Blend-Mode Cursors:** Implemented a custom JavaScript cursor with `mix-blend-mode: difference` that reacts dynamically to interactive elements. (Automatically disabled on touch devices via `@media (hover: none)`).
- **Asymmetric Parallax Scrolling:** Engineered a lightweight intersection-based parallax scrolling effect for gallery images.
- **Fluid Typography:** Utilized CSS `clamp()` functions to ensure massive header texts scale perfectly from 4K displays down to 320px mobile screens without media query breakpoints snapping.

### 4. Serverless API Integration
Integrated **Web3Forms** using the `fetch()` API to handle contact form submissions silently in the background, bypassing default mailto behaviors and providing real-time UI feedback (success/error states).

## 📱 Responsive Design
The application is fully responsive. Mobile optimizations include collapsing complex CSS Grids into stacked layouts, adjusting viewport-height margins (`vh`), and disabling expensive JavaScript animations on low-power/touch devices to save battery life.

---

<div align="center">
  <i>Designed and coded by Pablo García López</i>
</div>
