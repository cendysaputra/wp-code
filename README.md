# wp-code

Kumpulan kode dan panduan web development:

1. **Snippet WordPress + Elementor**: CSS, JS, PHP siap tempel.
2. **Planning custom programming**: aturan, design system, dan roadmap untuk project dari nol.

## Struktur

```
wp-code/
├── wordpress/
│   ├── css/     snippet CSS
│   ├── js/      snippet JavaScript
│   ├── php/     snippet PHP (functions.php / Code Snippets)
│   ├── html/    snippet HTML (HTML widget)
│   └── custom/  fitur gabungan multi-file
└── planning/    panduan project custom programming
```

## Snippet WordPress + Elementor

| Jenis | Tempel di |
|---|---|
| CSS | Elementor Custom CSS / Customizer > Additional CSS |
| JS, HTML | Elementor HTML widget |
| PHP | `functions.php` child theme / plugin Code Snippets |

Semua ada di folder `wordpress/`. Fitur di `custom/` terdiri dari beberapa file, pasang sesuai urutan nomor (`1-`, `2-`, `3-`).

> Sesuaikan class/selector dengan project, sebagian snippet dibuat untuk kasus tertentu.

## Planning Custom Programming

| File | Isi |
|---|---|
| [`AGENT.md`](planning/AGENT.md) | Aturan wajib coding untuk developer / AI agent |
| [`DESIGN.md`](planning/DESIGN.md) | Nilai desain: breakpoint, spacing, font, warna |
| [`PLAN.md`](planning/PLAN.md) | Roadmap per fase, dari setup sampai testing |

Cara pakai: salin folder `planning/` ke project baru, isi nilai `TBD` di `DESIGN.md`, lalu kerjakan `PLAN.md` dari Fase 0.
