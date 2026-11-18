# AGENT.md

Panduan wajib untuk AI agent / developer yang mengerjakan project ini.
Project ini **custom programming** (bukan CMS/page builder). Roadmap ada di [`PLAN.md`](./PLAN.md).

---

## ⚠️ Aturan Utama (WAJIB)

### 1. Jarak antar section

| Device | Breakpoint | Padding atas-bawah section | Padding kanan-kiri |
|---|---|---|---|
| Desktop | ≥ 1025px | **120px** | mengikuti container (max-width, di tengah) |
| Tablet | 768px – 1024px | **72px** | **24px** |
| Mobile | ≤ 767px | **72px** | **16px** |

Wajib lewat token global, contoh:

```css
:root {
  --section-py: 120px;
  --section-px: 0;
}
@media (max-width: 1024px) {
  :root { --section-py: 72px; --section-px: 24px; }
}
@media (max-width: 767px) {
  :root { --section-py: 72px; --section-px: 16px; }
}

.section {
  padding: var(--section-py) var(--section-px);
}
```

### 2. Tidak boleh hardcode (teks & style)

- **Style**: semua warna, font, ukuran, spacing, radius, shadow, z-index, durasi animasi **harus dari token global** (CSS variables / design tokens). Dilarang menulis nilai mentah seperti `#1a1a1a`, `padding: 40px`, `font-size: 18px` di komponen.
- **Teks**: semua teks UI (label, tombol, judul, pesan error, dll) disimpan terpusat di file konten/i18n (mis. `content/*.json` atau `locales/id.json`), bukan ditulis langsung di markup komponen.
- **Konfigurasi**: URL, nomor WhatsApp, email, API endpoint → file config / environment variable.
- Tujuannya: ganti satu nilai di global = berubah di seluruh web.

### 3. Semua size kelipatan 8

- Spacing, padding, margin, gap, width/height elemen, radius, ukuran ikon, font-size, line-height → **kelipatan 8** (8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120, ...).
- Pengecualian satu-satunya: `border-width` (1px / 2px).
- Token spacing: `--space-1: 8px; --space-2: 16px; --space-3: 24px; ...`

### 4. Hierarki heading

- **Satu `<h1>` per halaman**, berisi judul utama halaman.
- Urutan tidak boleh loncat: `h1 → h2 → h3 → ...` (jangan dari `h2` langsung `h4`).
- Pilih tag heading berdasarkan **struktur konten**, bukan ukuran tampilan. Kalau butuh tampilan beda, pakai class utilitas (mis. `.text-h3` pada `<h2>`).
- Komponen reusable (card, FAQ, dll) menerima prop level heading (mis. `headingLevel="h3"`) agar hierarki tetap benar di mana pun dipakai.

### 5. Semantik HTML5

Struktur dasar setiap halaman:

```html
<body>
  <header>…navigasi (<nav>)…</header>
  <main>
    <section>…</section>
    <section>…</section>
  </main>
  <footer>…</footer>
</body>
```

- Gunakan `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` sesuai fungsinya.
- `div` hanya untuk wrapper/layout yang tidak punya makna semantik.
- Setiap `<section>` punya heading.
- Pakai `<button>` untuk aksi, `<a>` untuk navigasi; `<ul>/<ol>` untuk list; `<form>` + `<label>` untuk form.

### 6. Komponen reusable

- **Semua elemen UI dibuat sebagai komponen**, walaupun saat ini hanya dipakai di 1 tempat (card, FAQ/accordion, button, section heading, testimonial, form field, modal, dll).
- Komponen menerima data lewat props/parameter — tidak ada konten hardcode di dalamnya.
- Satu komponen = satu folder/file + style-nya sendiri, memakai token global.
- Sebelum membuat komponen baru, **cek dulu apakah sudah ada** komponen yang bisa dipakai/di-extend.

---

## Aturan Kerja

1. Ikuti fase di `PLAN.md` secara berurutan; update checklist `[ ]` → `[x]` setiap task selesai.
2. Commit kecil & jelas, format: `<tipe>: <ringkasan>` — tipe: `feat`, `fix`, `style`, `refactor`, `docs`, `test`, `chore`, `security`.
3. **Push setiap perubahan langsung ke branch `main`** (sesuai instruksi owner).
4. Jangan commit rahasia (`.env`, API key, kredensial).

## Konvensi Kode

- **CSS**: mobile-first boleh, tapi breakpoint wajib sama dengan tabel di atas. Penamaan class BEM (`.card__title--active`).
- **JS/TS**: modular, tidak ada variabel global, cek elemen/data ada sebelum dipakai.
- **Backend**: validasi & sanitasi semua input, escape output, query pakai prepared statement/ORM.
- **Aksesibilitas**: `alt` pada gambar, label pada form, focus state terlihat, kontras min. WCAG AA.

## Definition of Done (per task)

- [ ] Lolos 6 Aturan Utama di atas
- [ ] Rapi di desktop, tablet, mobile
- [ ] Tidak ada error di console / log server
- [ ] Lint & test lolos
- [ ] Checklist PLAN.md di-update
- [ ] Commit & push ke `main`
