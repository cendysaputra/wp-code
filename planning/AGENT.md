# AGENT.md

Berlaku untuk project custom programming maupun WordPress. Roadmap: `PLAN.md`. Nilai desain: `DESIGN.md`.

## Aturan Wajib

1. **Ikuti `DESIGN.md`**: breakpoint, section spacing, font, warna, spacing semua dari sana.
2. **No hardcode**: style dari token global (`tokens.css`), teks dari `content/`, config dari `config/`/env.
3. **Size kelipatan 8**. Kecuali border 1-2px.
4. **Heading**: 1 `h1` per halaman, urut tanpa loncat. Tag sesuai struktur, ukuran via class (`.text-h3`). Komponen terima prop `heading-level`.
5. **HTML5 semantik**: `header`, `nav`, `main`, `section`, `article`, `footer`. `div` hanya untuk wrapper. `button` untuk aksi, `a` untuk link.
6. **Komponen reusable**: semua UI jadi komponen walau dipakai sekali (card, faq, button, dll). Data via props.
7. **Class kebab-case**: `card-title-active`. Dilarang PascalCase, camelCase, snake_case, BEM. Berlaku juga untuk CSS variable, `id`, `data-*`.
8. **Optimize & clean code**: fungsi kecil & satu tugas, nama jelas, no duplikasi, no dead code/console.log. Minify & tree-shake saat build.
9. **Lazyload**: gambar/iframe `loading="lazy"` (kecuali hero/LCP), komponen & library berat di-load hanya di halaman yang butuh (dynamic import).

## Library Optional

Install hanya jika halaman butuh, load via dynamic import.

| Library | Untuk | Install |
|---|---|---|
| Swiper.js | slider/carousel | `npm i swiper` |
| FsLightbox | lightbox gambar/video | `npm i fslightbox` |

## Workflow

- Kerjakan fase `PLAN.md` berurutan, centang `[x]` saat selesai.
- Commit: `<feat|fix|style|refactor|docs|test|chore|security>: ringkasan`
- Push langsung ke `main` setiap perubahan.
- Jangan commit secret (`.env`, key).

## Done

Lolos 9 aturan, rapi di 3 device, console/log bersih, lint & test lolos, PLAN.md di-update, sudah push.
