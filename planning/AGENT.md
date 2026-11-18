# AGENT.md

Panduan untuk AI agent / developer yang bekerja di project ini.

## Konteks Project

- Stack: **WordPress + Elementor** (opsional WooCommerce, ACF, Code Snippets).
- Kode custom disimpan per jenis: `css/`, `js/`, `php/`, `custom/`, `html/`.
- Roadmap development ada di [`PLAN.md`](./PLAN.md). Selalu cek fase aktif sebelum mulai kerja.

## Aturan Kerja

1. **Ikuti fase di PLAN.md secara berurutan.** Jangan lompat fase sebelum checklist fase sebelumnya selesai, kecuali diminta.
2. **Update checklist** di PLAN.md (`[ ]` → `[x]`) setiap kali satu task selesai.
3. **Satu perubahan = satu commit** dengan pesan jelas, format:
   ```
   <tipe>: <ringkasan singkat>
   ```
   Tipe: `feat`, `fix`, `style`, `refactor`, `docs`, `test`, `chore`, `security`.
4. **Push langsung ke branch `main`** setelah setiap perubahan (sesuai instruksi owner).
5. Jangan commit file rahasia (`wp-config.php`, `.env`, API key, kredensial).

## Konvensi Kode

### CSS
- Pakai **CSS variables** dari Global Settings (Fase 1), jangan hardcode warna/font/ukuran.
- Penamaan class: prefix project + BEM, contoh `.wpc-card__title--active`.
- Mobile-first: style dasar untuk mobile, lalu `@media (min-width: ...)`.
- Breakpoint mengikuti Elementor: mobile `≤767px`, tablet `768–1024px`, desktop `≥1025px`.

### JavaScript
- Vanilla JS, bungkus dalam IIFE atau `DOMContentLoaded` agar tidak bentrok global scope.
- Cek elemen ada sebelum dipakai (`if (!el) return;`).
- Hindari jQuery kecuali memang sudah dipakai di halaman.

### PHP
- Prefix semua function: `wpc_` (contoh `wpc_redirect_whatsapp()`).
- Selalu cek `defined('ABSPATH') || exit;` di file yang bisa diakses langsung.
- **Sanitize input** (`sanitize_text_field`, `absint`, dll), **escape output** (`esc_html`, `esc_url`, `esc_attr`).
- Gunakan **nonce** untuk form/AJAX dan cek `current_user_can()` untuk aksi admin.
- Query database lewat `$wpdb->prepare()`.

## Definition of Done (per task)

- [ ] Berfungsi di desktop, tablet, mobile
- [ ] Tidak ada error di console browser & `debug.log`
- [ ] Mengikuti konvensi di atas
- [ ] Checklist PLAN.md sudah di-update
- [ ] Sudah di-commit & push ke `main`
