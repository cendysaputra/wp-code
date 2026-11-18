# PLAN.md — Roadmap Development Web (Custom Programming)

Kerjakan berurutan per fase; centang `[x]` saat selesai.
Semua pekerjaan **wajib mengikuti 6 Aturan Utama** di [`AGENT.md`](./AGENT.md).

| Fase | Fokus | Output |
|---|---|---|
| 0 | Persiapan & Setup | Repo, stack, struktur folder siap |
| 1 | Global Settings (Design Tokens) | Font, warna, size, spacing terpusat |
| 2 | Komponen Reusable | Library komponen + layout global |
| 3 | Development Semua Halaman | Semua halaman jadi |
| 4 | Responsive | Rapi di desktop, tablet, mobile |
| 5 | Bug Checking | Bug fungsional & visual beres |
| 6 | Security Check | Celah keamanan ditutup |
| 7 | QC (Quality Control) | Standar, konten, SEO, performa, a11y |
| 8 | Unit Test | Logic & komponen teruji |
| 9 | Testing Lanjutan | Integration, E2E, cross-browser, load, UAT |
| 10 | Deploy & Maintenance | Live + monitoring |

---

## Fase 0 — Persiapan & Setup

- [ ] Kumpulkan kebutuhan: sitemap, daftar halaman, fitur, desain (Figma)
- [ ] Tentukan stack (frontend, backend, database, hosting)
- [ ] Init repo, linter (ESLint/Stylelint), formatter (Prettier), `.editorconfig`, `.env.example`
- [ ] Struktur folder, contoh:
  ```
  src/
  ├── styles/       → tokens, base, utilities
  ├── components/   → komponen reusable
  ├── layouts/      → header, footer, page layout
  ├── pages/        → halaman
  ├── content/      → teks/konten terpusat (JSON / i18n)
  ├── config/       → konfigurasi (URL, kontak, API)
  └── lib/          → helper & logic
  tests/
  ```

## Fase 1 — Global Settings (Design Tokens)

Semua nilai di satu tempat (mis. `src/styles/tokens.css`). **Tidak ada nilai hardcode di luar file ini.**

### Typography
- [ ] Font family heading & body (load lokal / `font-display: swap`)
- [ ] Font weight yang dipakai (batasi, mis. 400 / 500 / 700)
- [ ] Skala font (kelipatan 8):
  | Token | Desktop | Tablet | Mobile |
  |---|---|---|---|
  | `--fs-h1` | 64px | 48px | 40px |
  | `--fs-h2` | 48px | 40px | 32px |
  | `--fs-h3` | 32px | 32px | 24px |
  | `--fs-h4` | 24px | 24px | 24px |
  | `--fs-h5`, `--fs-h6` | 16px | 16px | 16px |
  | `--fs-body` | 16px | 16px | 16px |
- [ ] Line-height kelipatan 8 (mis. body 16/24, h2 48/56)
- [ ] Class utilitas tampilan heading: `.text-h1` … `.text-h6` (lepas dari tag)

### Color
- [ ] Brand: `--color-primary`, `--color-secondary`, `--color-accent`
- [ ] Netral: `--color-text`, `--color-text-muted`, `--color-bg`, `--color-surface`, `--color-border`
- [ ] Status: `--color-success`, `--color-warning`, `--color-error`
- [ ] Varian hover/active per warna brand
- [ ] Cek kontras min. WCAG AA (4.5:1)

### Size & Spacing (kelipatan 8)
- [ ] Spacing: `--space-1: 8px` s/d `--space-15: 120px`
- [ ] Section spacing:
  | Token | Desktop | Tablet | Mobile |
  |---|---|---|---|
  | `--section-py` | 120px | 72px | 72px |
  | `--section-px` | container | 24px | 16px |
- [ ] Container max-width (mis. `--container: 1200px`)
- [ ] Breakpoint: mobile ≤767px, tablet 768–1024px, desktop ≥1025px
- [ ] Radius (8, 16, 24), shadow, z-index scale, durasi transisi

### Base
- [ ] Reset/normalize CSS
- [ ] Style dasar elemen: heading, paragraf, link, list, gambar, form
- [ ] Halaman **style guide** internal untuk menampilkan semua token

## Fase 2 — Komponen Reusable

Semua UI = komponen, walau dipakai 1x. Data via props, style via token.

### Layout
- [ ] `Header` (`<header>` + `<nav>`, logo, menu, CTA, sticky)
- [ ] Mobile menu (hamburger / off-canvas)
- [ ] `Footer` (`<footer>`)
- [ ] `PageLayout` (header + `<main>` + footer)
- [ ] `Section` (`<section>` + padding token + container)
- [ ] `Container`, `Grid`/`Stack`

### UI
- [ ] `Button` (primary, secondary, outline, link; state hover/focus/disabled/loading)
- [ ] `Heading` (prop `level` h1–h6 + prop `size` tampilan)
- [ ] `SectionHeading` (eyebrow, judul, deskripsi)
- [ ] `Card` (prop `headingLevel`)
- [ ] `FAQ` / `Accordion`
- [ ] `Testimonial`, `Slider`/`Carousel`
- [ ] `Tabs`, `Modal`, `Breadcrumb`, `Pagination`
- [ ] Form: `Input`, `Select`, `Textarea`, `Checkbox`, `FormField` (label + error)
- [ ] `Image` (responsive, lazy, wajib `alt`), `Icon`
- [ ] `CTA`, floating WhatsApp/chat (jika perlu)
- [ ] Dokumentasi pemakaian komponen (Storybook / halaman demo)

## Fase 3 — Development Semua Halaman

Rakit halaman dari komponen; konten dari `content/`, config dari `config/`.

- [ ] Home
- [ ] About
- [ ] Services / Layanan (list + detail)
- [ ] Products / Produk (list, kategori, detail)
- [ ] Portfolio / Project (jika ada)
- [ ] Blog (list + detail)
- [ ] Contact (form, maps, info)
- [ ] FAQ
- [ ] Privacy Policy, Terms & Conditions
- [ ] 404, 500, Thank You
- [ ] Backend/API: form submit, email, integrasi pihak ketiga
- [ ] Animasi & interaksi secukupnya (hormati `prefers-reduced-motion`)
- [ ] Cek per halaman: 1 `h1`, heading berurutan, semantik HTML5 benar

## Fase 4 — Responsive

- [ ] Cek setiap halaman di: 1440, 1280, 1024, 768, 414, 375, 360px
- [ ] Section spacing sesuai: desktop 120px, tablet 72px / 24px, mobile 72px / 16px
- [ ] Tidak ada horizontal scroll
- [ ] Font & spacing ikut token per breakpoint, tetap kelipatan 8
- [ ] Gambar responsive (`srcset`/`sizes`, WebP/AVIF), tidak pecah/terpotong
- [ ] Menu, slider, tab, accordion jalan dengan touch
- [ ] Touch target min. 48×48px
- [ ] Landscape mobile/tablet
- [ ] Tes di device asli (Android & iOS)

## Fase 5 — Bug Checking

- [ ] Semua link & tombol berfungsi (tidak ada broken link)
- [ ] Semua form: validasi client & server, pesan sukses/gagal
- [ ] Console browser & log server bersih dari error/warning
- [ ] Layout bug: overlap, z-index, overflow
- [ ] State kosong, loading, error tampil benar
- [ ] Audit hardcode: cari nilai warna/px/teks mentah di luar token & content (`grep`/Stylelint rule)
- [ ] Catat bug di issue tracker (langkah reproduksi, device, screenshot) → fix → retest

## Fase 6 — Security Check

- [ ] Dependency audit (`npm audit` / `composer audit` / Snyk), update paket rentan
- [ ] Validasi & sanitasi semua input (client **dan** server)
- [ ] Escape output, cegah XSS (hindari `innerHTML` dari input user)
- [ ] Cegah SQL injection (prepared statement / ORM)
- [ ] CSRF token untuk form & request yang mengubah data
- [ ] Rate limiting + anti-spam (captcha / honeypot) di form & login
- [ ] Auth: hash password (bcrypt/argon2), session/JWT aman, cookie `HttpOnly` `Secure` `SameSite`
- [ ] Otorisasi: cek hak akses di setiap endpoint
- [ ] HTTPS + security headers: CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`
- [ ] CORS dibatasi ke domain yang diizinkan
- [ ] Secret hanya di env variable; tidak ada di repo
- [ ] Upload file: validasi tipe & ukuran, simpan di luar web root
- [ ] Error message tidak membocorkan detail sistem
- [ ] Scan OWASP Top 10 (OWASP ZAP)
- [ ] Backup database terjadwal + tes restore

## Fase 7 — QC (Quality Control)

### Standar kode (6 Aturan Utama)
- [ ] Section spacing sesuai spesifikasi di semua halaman & breakpoint
- [ ] Tidak ada hardcode teks/style
- [ ] Semua size kelipatan 8
- [ ] Hierarki heading benar (cek dengan HeadingsMap / Lighthouse)
- [ ] Semantik HTML5 benar (validasi W3C)
- [ ] Semua UI pakai komponen, tidak ada duplikasi markup

### Konten
- [ ] Typo, konsistensi istilah, tidak ada lorem ipsum
- [ ] Semua gambar punya `alt`; favicon & OG image ada

### SEO
- [ ] Title & meta description unik per halaman
- [ ] Sitemap XML, `robots.txt`, canonical
- [ ] Structured data (Organization, Breadcrumb, Article/Product)
- [ ] URL rapi + redirect 301 jika perlu

### Performa
- [ ] Lighthouse ≥90 (desktop), ≥80 (mobile)
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms
- [ ] Optimasi gambar, lazy load, code splitting, minify, caching/CDN

### Aksesibilitas
- [ ] Navigasi keyboard & focus visible
- [ ] Kontras WCAG AA, label form, ARIA seperlunya

## Fase 8 — Unit Test

- [ ] Setup test runner (Jest / Vitest + Testing Library; PHPUnit / Pytest untuk backend)
- [ ] Test helper & logic (`lib/`): input valid, invalid, edge case
- [ ] Test komponen: render sesuai props, `headingLevel` benar, state (open/close, disabled, error)
- [ ] Test validasi form & sanitasi input
- [ ] Test endpoint/service backend (dengan mock)
- [ ] Target coverage ≥80% untuk logic, ≥70% komponen
- [ ] CI (GitHub Actions): lint + test otomatis setiap push ke `main`

## Fase 9 — Testing Lanjutan

- [ ] **Integration test**: frontend ↔ API ↔ database, email, payment, API pihak ketiga
- [ ] **E2E test** (Playwright): navigasi, submit form, alur utama (login/checkout jika ada)
- [ ] **Visual regression**: screenshot desktop/tablet/mobile dibandingkan tiap perubahan
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge (desktop & mobile)
- [ ] **Accessibility test** otomatis (axe-core)
- [ ] **Load/stress test** (k6) untuk halaman & endpoint utama
- [ ] **UAT** bersama client + sign-off

## Fase 10 — Deploy & Maintenance

- [ ] Setup environment staging & production
- [ ] Pipeline CI/CD (build → test → deploy)
- [ ] Domain, SSL, CDN
- [ ] Env variable production, matikan mode debug
- [ ] Analytics & Search Console
- [ ] Monitoring error (Sentry) & uptime
- [ ] Jadwal maintenance: update dependency, backup, security scan
- [ ] Dokumentasi & serah terima ke client
