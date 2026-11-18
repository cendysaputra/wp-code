# PLAN.md — Roadmap Development Web

Stack: WordPress + Elementor. Kerjakan berurutan per fase; centang `[x]` saat selesai.

| Fase | Fokus | Output |
|---|---|---|
| 0 | Persiapan & Setup | Environment siap, struktur halaman jelas |
| 1 | Global Settings (Design System) | Font, warna, ukuran terpusat |
| 2 | Komponen Global | Header, footer, komponen reusable |
| 3 | Development Semua Halaman | Semua halaman jadi (desktop) |
| 4 | Responsive | Tampilan rapi di tablet & mobile |
| 5 | Bug Checking | Bug fungsional & visual beres |
| 6 | Security Check | Celah keamanan ditutup |
| 7 | QC (Quality Control) | Konten, SEO, performa, aksesibilitas |
| 8 | Unit Test | Kode custom (PHP/JS) teruji |
| 9 | Testing Lanjutan | Cross-browser, E2E, load, UAT |
| 10 | Launch & Maintenance | Live + monitoring |

---

## Fase 0 — Persiapan & Setup

- [ ] Kumpulkan kebutuhan: sitemap, daftar halaman, fitur, referensi desain
- [ ] Siapkan environment: local/staging (LocalWP / Docker) + production
- [ ] Install WordPress, theme (Hello Elementor / child theme), Elementor (Pro)
- [ ] Install plugin wajib (SEO, cache, security, form, backup) — seminimal mungkin
- [ ] Aktifkan `WP_DEBUG` + `WP_DEBUG_LOG` di local/staging
- [ ] Setup Git & struktur folder kode custom

## Fase 1 — Global Settings (Design System)

Semua diatur di **Elementor → Site Settings** dan diekspos sebagai CSS variables.

### Typography
- [ ] Tentukan font family (heading & body), load via Google Fonts / local font (`font-display: swap`)
- [ ] Global Fonts: Primary, Secondary, Text, Accent
- [ ] Skala ukuran font (contoh, pakai `clamp()` agar fluid):
  | Token | Desktop | Mobile |
  |---|---|---|
  | `--fs-h1` | 48px | 32px |
  | `--fs-h2` | 40px | 28px |
  | `--fs-h3` | 32px | 24px |
  | `--fs-h4` | 24px | 20px |
  | `--fs-body` | 16px | 15px |
  | `--fs-small` | 14px | 13px |
- [ ] Line-height & letter-spacing per level heading/body
- [ ] Font weight yang dipakai (batasi, mis. 400/500/700)

### Color
- [ ] Global Colors: Primary, Secondary, Text, Accent
- [ ] Warna tambahan: background, surface, border, success, warning, error
- [ ] Cek kontras warna teks vs background (min. WCAG AA 4.5:1)

### Size & Spacing
- [ ] Skala spacing: `4, 8, 12, 16, 24, 32, 48, 64, 96px`
- [ ] Container width (mis. 1200px / 1320px) & padding samping per device
- [ ] Border radius, shadow, transition duration standar
- [ ] Breakpoint: mobile ≤767px, tablet 768–1024px, desktop ≥1025px

### Komponen Dasar
- [ ] Style button (primary, secondary, outline, link) + state hover/focus/disabled
- [ ] Style form field (input, select, textarea, checkbox) + state error
- [ ] Style link, list, blockquote, image caption

### Output
- [ ] File `css/global-variables.css` berisi semua token `:root { ... }`
- [ ] Dokumentasi token singkat di README / halaman style guide

## Fase 2 — Komponen Global

- [ ] Header (logo, menu, mega menu/dropdown, CTA, sticky)
- [ ] Mobile menu (hamburger / off-canvas)
- [ ] Footer (menu, kontak, sosial media, copyright)
- [ ] Template: Single Post, Archive/Blog, Search, 404
- [ ] Template WooCommerce (jika ada): Shop, Single Product, Cart, Checkout, My Account
- [ ] Komponen reusable (Elementor Global Widget / Template): CTA section, card, testimonial, FAQ, form
- [ ] Floating WhatsApp / chat button (jika diperlukan)

## Fase 3 — Development Semua Halaman

Kerjakan dari desktop, pakai komponen & token global (jangan hardcode).

- [ ] Home
- [ ] About / Tentang Kami
- [ ] Services / Layanan (list + detail)
- [ ] Products / Produk (list, kategori, detail)
- [ ] Portfolio / Project (jika ada)
- [ ] Blog (list + detail)
- [ ] Contact / Kontak (form, maps, info)
- [ ] FAQ
- [ ] Halaman legal: Privacy Policy, Terms & Conditions
- [ ] 404 & Thank You page
- [ ] Integrasi form (Elementor Form → email / WhatsApp / CRM)
- [ ] Animasi & interaksi (scroll, parallax, reveal) — secukupnya

## Fase 4 — Responsive

- [ ] Cek & perbaiki setiap halaman di breakpoint: 1440, 1280, 1024, 768, 414, 375, 360px
- [ ] Tidak ada horizontal scroll di semua device
- [ ] Ukuran font & spacing sesuai token mobile/tablet
- [ ] Gambar responsive (`srcset`, ukuran tepat, tidak pecah/terpotong)
- [ ] Menu mobile, slider, tab, accordion berfungsi dengan sentuhan
- [ ] Touch target min. 44×44px
- [ ] Cek orientasi landscape di mobile/tablet
- [ ] Tes di device asli (Android & iOS), bukan hanya DevTools

## Fase 5 — Bug Checking

- [ ] Klik semua link & tombol (tidak ada 404 / broken link)
- [ ] Tes semua form: validasi, pesan sukses/gagal, email terkirim
- [ ] Console browser bersih dari error JS
- [ ] `debug.log` bersih dari PHP error/warning/notice
- [ ] Cek konflik plugin (nonaktifkan satu per satu jika ada bug aneh)
- [ ] Cek layout bug: elemen overlap, z-index, overflow, slider loop
- [ ] Catat bug di issue tracker (judul, langkah reproduksi, device, screenshot)
- [ ] Retest setelah fix

## Fase 6 — Security Check

- [ ] Update WordPress core, theme, plugin ke versi terbaru
- [ ] Hapus plugin/theme yang tidak dipakai
- [ ] Username admin bukan `admin`, password kuat, aktifkan 2FA
- [ ] Batasi login attempt, ubah URL login (opsional)
- [ ] Nonaktifkan XML-RPC jika tidak dipakai
- [ ] `DISALLOW_FILE_EDIT = true` di `wp-config.php`
- [ ] Permission file: folder 755, file 644, `wp-config.php` 600/640
- [ ] SSL aktif + redirect HTTP → HTTPS
- [ ] Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`, `HSTS`
- [ ] Review kode custom PHP: sanitize input, escape output, nonce, capability check, `$wpdb->prepare()`
- [ ] Review kode JS: tidak ada `innerHTML` dari input user tanpa escape (XSS)
- [ ] Anti-spam form (reCAPTCHA / honeypot)
- [ ] Scan malware & vulnerability (Wordfence / WPScan)
- [ ] Backup otomatis terjadwal + tes restore

## Fase 7 — QC (Quality Control)

### Konten
- [ ] Typo, grammar, konsistensi istilah
- [ ] Semua placeholder/lorem ipsum sudah diganti
- [ ] Gambar punya `alt` text, favicon & OG image terpasang

### SEO
- [ ] Title & meta description unik per halaman
- [ ] Struktur heading benar (1 `H1` per halaman)
- [ ] Sitemap XML & `robots.txt`; submit ke Google Search Console
- [ ] Schema markup (Organization, Breadcrumb, Product/Article)
- [ ] Permalink rapi & redirect 301 untuk URL lama

### Performa
- [ ] PageSpeed Insights / Lighthouse: target ≥90 (desktop), ≥80 (mobile)
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms
- [ ] Kompres gambar (WebP/AVIF), lazy load
- [ ] Caching, minify CSS/JS, hapus aset tidak terpakai
- [ ] Batasi font & widget Elementor yang berat

### Aksesibilitas
- [ ] Navigasi keyboard (Tab) & focus visible
- [ ] Kontras warna lolos WCAG AA
- [ ] Label form & ARIA pada elemen interaktif

## Fase 8 — Unit Test

Fokus ke **kode custom** (PHP di `php/`/`custom/`, JS di `js/`).

### PHP
- [ ] Setup PHPUnit + WP test suite (`wp scaffold plugin-tests` / `wp-env`)
- [ ] Test function custom: input valid, input invalid, edge case
- [ ] Test sanitasi & escape (input berbahaya tidak lolos)
- [ ] Test hook/filter terpasang dengan benar
- [ ] Static analysis: PHPCS (WordPress Coding Standards), PHPStan

### JavaScript
- [ ] Setup Jest / Vitest + jsdom
- [ ] Test function JS custom (share button, accordion, tab filter, dll)
- [ ] Test perilaku saat elemen target tidak ada (tidak error)
- [ ] Lint: ESLint

### CI
- [ ] GitHub Actions: jalankan lint + unit test otomatis setiap push ke `main`
- [ ] Target coverage kode custom ≥70%

## Fase 9 — Testing Lanjutan

- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge (desktop & mobile)
- [ ] **E2E test** (Playwright): navigasi utama, submit form, alur checkout (jika WooCommerce)
- [ ] **Visual regression**: screenshot perbandingan sebelum/sesudah perubahan
- [ ] **Integration test**: form → email/WhatsApp/CRM, payment gateway, API pihak ketiga
- [ ] **Load/stress test** (k6 / Loader.io) untuk halaman utama & checkout
- [ ] **Accessibility test** otomatis (axe / Lighthouse a11y)
- [ ] **UAT** (User Acceptance Test) bersama client + sign-off

## Fase 10 — Launch & Maintenance

- [ ] Migrasi staging → production (Duplicator / All-in-One WP Migration / manual)
- [ ] Ganti URL, cek mixed content, flush permalink & cache
- [ ] Matikan `WP_DEBUG` di production
- [ ] Aktifkan "Search engine visibility" (index)
- [ ] Pasang Google Analytics / Tag Manager & Search Console
- [ ] Uptime monitoring & notifikasi error
- [ ] Jadwal maintenance: update, backup, cek keamanan (bulanan)
- [ ] Serah terima: akses, dokumentasi, panduan edit konten untuk client
