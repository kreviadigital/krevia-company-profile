# Issue 01: Sistem Navigasi Global Antar-Rute & Layout Header/Footer

**Status:** resolved
**Type:** task
**Blocked by:** none

## Deskripsi
Perbarui `Navbar.tsx` dan `Footer.tsx` untuk mendukung navigasi multi-halaman (`/`, `/produk/erp`, `/tentang-kami`) dengan komponen `next/link` dan `usePathname()`. Pastikan anchor hash seperti `#contact` dan `#services` secara otomatis beralih ke `/#contact` atau `/#services` ketika pengguna berada di luar Beranda.

## Task
1. Di `Navbar.tsx`:
   - Ganti link navigasi statis agar mengarah ke `/`, `/produk/erp`, `/#services`, `/tentang-kami`, dan `/#contact`.
   - Deteksi `pathname` saat ini dengan `usePathname()` dari `next/navigation`.
   - Jika pengguna di halaman non-beranda dan mengklik anchor (`#services`, `#contact`), arahkan ke root (`/#services`, `/#contact`).
2. Di `Footer.tsx`:
   - Sinkronkan tautan kolom produk (`/produk/erp`, `/#pricing`), perusahaan (`/tentang-kami`, `/kebijakan-privasi`), dan layanan (`/#services`).
3. Verifikasi mobile navigation menu bekerja mulus saat berpindah halaman.
