# PLAN.md

Ikuti aturan di `AGENT.md`. Breakpoint: mobile ≤767, tablet 768-1024, desktop ≥1025.

## Fase 0: Setup
- [ ] Kebutuhan: sitemap, halaman, fitur, desain
- [ ] Pilih stack & hosting
- [ ] Init repo, ESLint, Stylelint (kebab-case), Prettier, `.env.example`
- [ ] Library optional (jika perlu): Swiper.js, FsLightbox
- [ ] Folder: `styles/ components/ layouts/ pages/ content/ config/ lib/ tests/`

## Fase 1: Global Settings (`tokens.css`)
- [ ] Font family & weight
- [ ] Skala font (px, desktop/tablet/mobile): h1 64/48/40, h2 48/40/32, h3 32/32/24, h4 24, h5-h6 & body 16
- [ ] Line-height kelipatan 8
- [ ] Warna: primary, secondary, accent, text, muted, bg, surface, border, success, warning, error
- [ ] Spacing `--space-1` (8) s/d `--space-15` (120)
- [ ] Section: `--section-py` 120/72/72, `--section-px` container/24/16
- [ ] Container, radius, shadow, z-index, transition
- [ ] Reset + base style + halaman style guide

## Fase 2: Komponen
- [ ] Layout: header, nav, mobile menu, footer, page-layout, section, container, grid
- [ ] UI: button, heading, section-heading, card, faq, testimonial, slider (Swiper), lightbox (FsLightbox), tabs, modal, breadcrumb, pagination, cta
- [ ] Form: input, select, textarea, checkbox, form-field
- [ ] Media: image (lazy, alt), icon
- [ ] Dokumentasi/demo komponen

## Fase 3: Halaman
- [ ] Home, About, Services, Products, Portfolio, Blog, Contact, FAQ
- [ ] Privacy, Terms, 404, 500, Thank You
- [ ] Backend/API: form, email, integrasi
- [ ] Animasi (hormati `prefers-reduced-motion`)

## Fase 4: Responsive
- [ ] Cek 1440, 1280, 1024, 768, 414, 375, 360
- [ ] Section spacing sesuai aturan
- [ ] No horizontal scroll, gambar responsive, touch target ≥48px
- [ ] Tes device asli Android & iOS

## Fase 5: Bug Check
- [ ] Link, tombol, form (validasi client & server)
- [ ] Console & log bersih
- [ ] Layout: overlap, z-index, overflow, state kosong/loading/error
- [ ] Audit hardcode style/teks
- [ ] Cek lazyload & library hanya load di halaman yang butuh

## Fase 6: Security
- [ ] Audit dependency
- [ ] Validasi/sanitasi input, escape output (XSS), prepared statement (SQLi), CSRF
- [ ] Rate limit + anti-spam
- [ ] Auth: hash password, cookie HttpOnly/Secure/SameSite, cek otorisasi per endpoint
- [ ] HTTPS, security headers (CSP, HSTS, X-Frame-Options, nosniff), CORS ketat
- [ ] Secret di env, upload tervalidasi, error tidak bocorkan detail
- [ ] Scan OWASP ZAP, backup + tes restore

## Fase 7: QC
- [ ] 9 aturan `AGENT.md` terpenuhi di semua halaman
- [ ] Validasi W3C, heading map benar
- [ ] Konten: typo, no lorem ipsum, alt gambar, favicon, OG image
- [ ] SEO: title/meta unik, sitemap, robots, canonical, structured data
- [ ] Lighthouse ≥90 desktop / ≥80 mobile, LCP <2.5s, CLS <0.1, INP <200ms
- [ ] A11y: keyboard, focus, kontras AA, label form

## Fase 8: Unit Test
- [ ] Setup Vitest/Jest + Testing Library (backend: PHPUnit/Pytest)
- [ ] Test logic `lib/`, komponen (props, heading-level, state), validasi form, API (mock)
- [ ] Coverage ≥80% logic, ≥70% komponen
- [ ] CI: lint + test tiap push ke `main`

## Fase 9: Test Lanjutan
- [ ] Integration (API, DB, email, payment)
- [ ] E2E Playwright (alur utama)
- [ ] Visual regression 3 device
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] A11y (axe), load test (k6)
- [ ] UAT + sign-off client

## Fase 10: Deploy
- [ ] Staging & production, CI/CD
- [ ] Domain, SSL, CDN, env production, debug off
- [ ] Analytics, Search Console, Sentry, uptime monitor
- [ ] Jadwal maintenance & serah terima
