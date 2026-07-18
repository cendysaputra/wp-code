# WP Code — Snippet CSS, JS & PHP untuk WordPress + Elementor

Kumpulan **kode custom** (CSS, JavaScript, dan PHP) yang biasa dipakai untuk
project berbasis **WordPress** dan **Elementor**. Isinya mulai dari CSS default
awal project, perbaikan bug tampilan, sampai fungsi-fungsi tambahan seperti
mega menu WooCommerce dan form repeater.

Snippet-snippet ini bisa ditempel lewat:
- **Elementor** → Custom CSS / HTML Widget
- **WordPress** → Customizer (Additional CSS), Code Snippets plugin, atau `functions.php`

---

## Struktur Folder

```
wp-code/
├── css/       → Snippet CSS (default project, fix bug, styling slider/tab/dll)
├── js/        → Snippet JavaScript (animasi, slider, tab, accordion)
├── php/       → Snippet PHP (mega menu, WooCommerce, ACF)
├── custom/    → Kode gabungan untuk fitur tertentu (mis. form produk repeater)
└── README.md  → File ini
```

- **`css/`** — mulai dari `css-wajib-awal-project.css` sebagai CSS default awal,
  lalu berbagai perbaikan bug dan styling komponen.
- **`js/`** — script untuk animasi teks, custom arrow slider, tab filter, accordion FAQ.
- **`php/`** — fungsi WordPress/WooCommerce (mega menu, disable single post, dll).
- **`custom/`** — kumpulan file yang dipakai bareng untuk satu fitur (HTML + JS + PHP).

---

## Cara Pakai

1. Buka folder sesuai jenis kode yang dibutuhkan (`css/`, `js/`, atau `php/`).
2. Buka file snippet, salin isinya.
3. Tempel ke tempat yang sesuai di WordPress/Elementor (lihat opsi di atas).

> **Catatan:** Sesuaikan class/selector dengan struktur project kamu, karena
> sebagian snippet dibuat untuk kasus/website tertentu.

---

## Screenshot / Contoh Hasil

Simpan gambar di folder `screenshots/`, lalu tampilkan di sini seperti ini:

```markdown
![Deskripsi gambar](screenshots/nama-file.png)
```

Contoh:

<!-- ![Contoh hasil slider](screenshots/slider-example.png) -->

*(Hapus tanda `<!-- -->` di atas dan ganti path gambar setelah kamu menambahkan screenshot.)*
