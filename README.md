<div align="center">

# WP Code

**Snippet WordPress + Elementor siap tempel & panduan project custom programming.**

![WordPress](https://img.shields.io/badge/WordPress-21759B?style=flat-square&logo=wordpress&logoColor=white)
![Elementor](https://img.shields.io/badge/Elementor-92003B?style=flat-square&logo=elementor&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)

[Snippet WordPress](#snippet-wordpress) · [Planning](#planning-custom-programming) · [Struktur](#struktur)

</div>

---

## Struktur

```
wp-code/
├── wordpress/
│   ├── css/     snippet CSS
│   ├── js/      snippet JavaScript
│   ├── php/     snippet PHP
│   ├── html/    snippet HTML
│   └── custom/  fitur gabungan multi-file
└── planning/    panduan project custom programming
```

## Snippet WordPress

| Jenis | Jumlah | Tempel di |
|---|:---:|---|
| CSS | 25 | Elementor Custom CSS / Customizer > Additional CSS |
| JS | 6 | Elementor HTML widget (dalam `<script>`) |
| HTML | 2 | Elementor HTML widget |
| PHP | 6 | `functions.php` child theme / plugin Code Snippets |
| Custom | 1 | Ikuti urutan nomor file (`1-`, `2-`, `3-`) |

<details>
<summary><b>CSS</b></summary>

- [`btn-line.css`](wordpress/css/btn-line.css)
- [`bug-slider-loop.css`](wordpress/css/bug-slider-loop.css)
- [`bug-video-uae-mobile.css`](wordpress/css/bug-video-uae-mobile.css)
- [`content-posts.css`](wordpress/css/content-posts.css)
- [`dropdown-menu.css`](wordpress/css/dropdown-menu.css)
- [`gtranslate-dropdown-float.css`](wordpress/css/gtranslate-dropdown-float.css)
- [`hide-recaptcha-google.css`](wordpress/css/hide-recaptcha-google.css)
- [`hide-snap-scroll-tablet-mobile.css`](wordpress/css/hide-snap-scroll-tablet-mobile.css)
- [`icon-custom-sitemap-widget.css`](wordpress/css/icon-custom-sitemap-widget.css)
- [`image-gradient.css`](wordpress/css/image-gradient.css)
- [`image-png-white.css`](wordpress/css/image-png-white.css)
- [`joinchat-shortcode.css`](wordpress/css/joinchat-shortcode.css)
- [`loop-pagination.css`](wordpress/css/loop-pagination.css)
- [`loop-title-line.css`](wordpress/css/loop-title-line.css)
- [`outline-element.css`](wordpress/css/outline-element.css)
- [`padding-margin-loop.css`](wordpress/css/padding-margin-loop.css)
- [`play-video-uae-icon-backdrop.css`](wordpress/css/play-video-uae-icon-backdrop.css)
- [`sitemap-active-elementor.css`](wordpress/css/sitemap-active-elementor.css)
- [`slider-pagination-animation.css`](wordpress/css/slider-pagination-animation.css)
- [`slider-running-image-carousel.css`](wordpress/css/slider-running-image-carousel.css)
- [`submenu-arrow.css`](wordpress/css/submenu-arrow.css)
- [`testimonial-slider-rata-bawah.css`](wordpress/css/testimonial-slider-rata-bawah.css)
- [`text-list.css`](wordpress/css/text-list.css)
- [`value-scroll-absolute.css`](wordpress/css/value-scroll-absolute.css)
- [`video-post-wordpress-bug.css`](wordpress/css/video-post-wordpress-bug.css)

</details>

<details>
<summary><b>JavaScript</b></summary>

- [`accordion-active-faq-uae.js`](wordpress/js/accordion-active-faq-uae.js)
- [`custom-arrow-slider.js`](wordpress/js/custom-arrow-slider.js)
- [`loading-screen.js`](wordpress/js/loading-screen.js)
- [`share-button.js`](wordpress/js/share-button.js)
- [`tab-filter-item-active-pertama.js`](wordpress/js/tab-filter-item-active-pertama.js)
- [`text-reveal-animation-heading.js`](wordpress/js/text-reveal-animation-heading.js)

</details>

<details>
<summary><b>HTML</b></summary>

- [`image-anim-parallax.html`](wordpress/html/image-anim-parallax.html)
- [`smooth-scroll.html`](wordpress/html/smooth-scroll.html)

</details>

<details>
<summary><b>PHP</b></summary>

- [`disable-single-post-acf.php`](wordpress/php/disable-single-post-acf.php)
- [`disable-single-woocommerce.php`](wordpress/php/disable-single-woocommerce.php)
- [`list-produk-kategori-terbawah.php`](wordpress/php/list-produk-kategori-terbawah.php)
- [`mega-menu-kategori-woocommerce.php`](wordpress/php/mega-menu-kategori-woocommerce.php)
- [`mega-menu-woocommerce-dari-menu-appearance.php`](wordpress/php/mega-menu-woocommerce-dari-menu-appearance.php)
- [`redirect-whatsapp-form-elementor.php`](wordpress/php/redirect-whatsapp-form-elementor.php)

</details>

<details>
<summary><b>Custom</b></summary>

- [`form-produk-repeater`](wordpress/custom/form-produk-repeater)

</details>

> **Catatan:** sesuaikan class/selector dengan project, sebagian snippet dibuat untuk kasus tertentu.

## Planning Custom Programming

Template panduan untuk project web dari nol.

| File | Isi |
|---|---|
| [`AGENT.md`](planning/AGENT.md) | Aturan wajib coding untuk developer / AI agent |
| [`DESIGN.md`](planning/DESIGN.md) | Design system: breakpoint, spacing, font, warna |
| [`PLAN.md`](planning/PLAN.md) | Roadmap per fase, dari setup sampai testing |

**Cara pakai**

1. Salin folder `planning/` ke project baru.
2. Isi nilai `TBD` di `DESIGN.md`.
3. Kerjakan `PLAN.md` mulai Fase 0.
