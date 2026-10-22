# PRD: Penambahan Jasa Pembuatan Website Company Profile

**Status:** ready-for-agent
**Tanggal:** 2026-10-22
**Peminta:** Founder Krevia Digital
**Slug fitur:** `jasa-web-profile`

---

## 1. Problem Statement

Website Krevia Digital saat ini hanya memposisikan perusahaan sebagai penyedia platform ERP modular dan layanan pendukungnya. Founder meminta menambahkan **jasa pembuatan website company profile** sebagai layanan resmi baru, agar prospek yang belum butuh ERP tetap bisa masuk sebagai klien melalui layanan yang lebih ringan.

Kendala saat ini:

- Tidak ada mention layanan web profile di mana pun di situs (hero, layanan, form, SEO).
- Form konsultasi hanya berbicara soal ERP, sehingga lead web profile tidak punya jalur konversi yang jelas.
- Metadata SEO hanya menarget kata kunci ERP, kehilangan traffic pencarian jasa pembuatan website.

## 2. Tujuan & Keberhasilan

**Tujuan:** Menambahkan jasa pembuatan website company profile sebagai layanan pelengkap ERP di halaman beranda, tanpa mengubah design system yang sudah ada.

**Indikator keberhasilan:**

- Layanan web profile terlihat di section layanan beranda dengan status kesiapan jelas.
- Prospek bisa langsung menghubungi via WhatsApp atau form konsultasi dengan konteks "web profile".
- Form konsultasi membedakan lead ERP vs web profile dalam pesan WhatsApp yang terkirim.
- Build produksi lolos tanpa error.

## 3. Keputusan yang Sudah Dikonfirmasi

Dari sesi konfirmasi dengan tim:

| Pertanyaan | Jawaban |
|---|---|
| Penempatan | Halaman Beranda saja |
| Posisi layanan | Layanan pelengkap ERP (bobot lebih kecil dari ERP) |
| Harga | Belum ada harga; arahkan ke konsultasi, tanpa angka |
| Sumber konten | Disusun mengikuti nada situs (Anti-Slop) |
| Lokasi di beranda | Di section layanan yang sudah ada |
| CTA | Keduanya: WhatsApp langsung + form konsultasi |
| Status kesiapan | Perlu ditandai jelas (badge "Tersedia") |

## 4. Ruang Lingkup

### In Scope

1. **Entry layanan baru** di komponen section layanan (`ServicesBento`): judul, deskripsi, badge status "Tersedia", dual CTA (WhatsApp + form).
2. **Form konsultasi** (`ContactSection`): field pemilih jenis layanan, template pesan WhatsApp menyertakan layanan yang dipilih.
3. **Navigasi**: link "Layanan" di navbar dan footer menuju anchor section layanan.
4. **SEO/metadata**: deskripsi dan keywords di `layout.tsx` mencakup jasa website company profile.
5. **Render section layanan** di beranda (`page.tsx`) jika sebelumnya belum terpasang.

### Out of Scope

- Halaman detail terpisah (mis. `/layanan/web-profile`).
- Skema harga/paket untuk jasa web profile.
- Perubahan palet warna, tipografi, atau komponen visual (design system tidak disentuh).
- Portofolio/studi kasus web profile (belum ada bukti nyata; dilarang fabrikasi sesuai R-18/R-36/R-38).
- Perubahan pricing ERP yang sudah ada.

## 5. User Stories

1. Sebagai pemilik bisnis, saya ingin melihat bahwa Krevia juga mengerjakan website company profile, supaya saya bisa mulai dari layanan yang lebih ringan sebelum ERP.
2. Sebagai calon klien, saya ingin tahu status kesiapan layanan web profile, supaya ekspektasi saya jelas sejak awal.
3. Sebagai calon klien, saya ingin tombol WhatsApp langsung dari section layanan, supaya saya bisa bertanya tanpa mengisi form panjang.
4. Sebagai calon klien, saya ingin memilih "Pembuatan Website Company Profile" di form konsultasi, supaya pesan saya tidak tertukar dengan lead ERP.
5. Sebagai tim Krevia, saya ingin pesan WhatsApp masuk menyebut jenis layanan, supaya follow-up lebih cepat dan tepat.
6. Sebagai pengunjung mobile, saya ingin section layanan tetap rapi tanpa overflow, supaya nyaman dibaca di ponsel.
7. Sebagai pengunjung dari mesin pencari, saya ingin menemukan situs Krevia lewat kata kunci jasa website, supaya layanan baru ini bisa ditemukan organik.

## 6. Kebijakan Konten (Anti-Slop)

Mengacu `GLOSSARY.md`, `PRODUCT.md`, dan aturan antislop yang aktif di repo ini:

- Bahasa Indonesia profesional, lugas; tanpa buzzword ("Revolutionary", "Cutting Edge", dll.).
- Tanpa harga, angka, statistik, testimoni, atau klaim sertifikasi yang belum ada buktinya (R-17, R-18, R-36).
- Deskripsi fokus pada masalah nyata: kredibilitas bisnis, narasi jujur, kecepatan akses, konversi.
- Status ditandai jujur: badge "Tersedia" untuk layanan yang memang sudah bisa dikerjakan.
- Setiap CTA punya tujuan nyata: `wa.me` dengan pesan terformat, atau anchor `#contact` (R-26).
- Tidak menambah warna, font, radius, atau komponen visual baru di luar `DESIGN.md`.

## 7. Spesifikasi Fungsional

### 7.1 Section Layanan (`ServicesBento`)

- Tambah item ke-5: **"Website Company Profile"**.
- Deskripsi (draft, boleh disesuaikan): *"Website profil perusahaan profesional untuk memperkuat kredibilitas bisnis Anda. Fokus pada narasi yang jujur, kecepatan akses, dan konversi nyata tanpa jargon pemasaran yang berlebihan."*
- Badge status: **"Tersedia"** (mengikuti gaya badge status modul ERP: emerald).
- CTA pada item ini:
  - **"Chat WhatsApp"**: membuka `SITE_CONFIG.getWhatsappUrl()` dengan pesan konteks web profile, `target="_blank" rel="noopener noreferrer"`.
  - **"Isi Form Konsultasi"**: anchor ke `#contact` via `handleNavClick`.
- Judul section disesuaikan dari "Empat hal yang kami kerjakan." menjadi netral jumlah ("Hal yang kami kerjakan.") agar tidak stale saat layanan bertambah.
- Item layanan lain tidak berubah.

### 7.2 Form Konsultasi (`ContactSection`)

- Tambah field **"Jenis Layanan"** (select, required), opsi:
  1. Implementasi ERP Modular (default)
  2. Pembuatan Website Company Profile
  3. Custom Software
  4. System Integration
  5. UI/UX Design
  6. Digitalisasi Proses Bisnis
- Template pesan WhatsApp menyertakan baris `• Jenis Layanan: <pilihan>`.
- Judul form dan tombol submit diubah dari spesifik ERP menjadi inklusif: "Diskusikan Kebutuhan Bisnis Anda" / "Diskusikan Kebutuhan Bisnis".
- Validasi, sanitasi input, dan alur submit yang ada tidak berubah.

### 7.3 Navigasi

- Navbar: tambah `{ label: "Layanan", href: "#services" }` sebagai item pertama.
- Footer: tambah link "Layanan Kami" ke `#services` di kolom Produk & Navigasi.

### 7.4 SEO (`layout.tsx`)

- `description` (metadata, OpenGraph, Twitter): menyebut "jasa pembuatan website company profile profesional".
- `keywords` tambahan: "Jasa Website Company Profile", "Website Profil Perusahaan Pekanbaru", "Jasa Pembuatan Website Profesional".
- Title tidak berubah (tetap menonjolkan ERP sebagai identitas utama).

### 7.5 Perakitan Beranda (`page.tsx`)

- Pastikan `<ServicesBento />` ter-render antara `<Hero />` dan `<ProductSpotlight />`.

## 8. Acceptance Criteria

- [x] Item "Website Company Profile" tampil di section layanan dengan badge "Tersedia".
- [x] CTA "Chat WhatsApp" membuka WhatsApp dengan pesan berkonteks web profile.
- [x] CTA "Isi Form Konsultasi" scroll ke `#contact`.
- [x] Form konsultasi punya dropdown "Jenis Layanan" dan pilihan tersimpan di pesan WhatsApp.
- [x] Navbar dan footer punya link ke `#services` dan anchor tersebut ada di halaman.
- [x] Metadata SEO menyebut jasa website company profile.
- [x] Tidak ada konten harga, statistik, atau testimoni baru yang difabrikasi.
- [x] Mobile: tidak ada overflow horizontal; CTA wrap rapi (R-03).
- [x] `npx tsc --noEmit` lolos; build produksi lolos tanpa error (R-35).

## 9. Risiko & Catatan

- Section layanan diimplementasikan bersih hanya berfokus pada Jasa Website Company Profile tanpa menyertakan artefak 4 layanan agensi lama agar konsisten dengan `DESIGN.md` dan arsitektur produk utama ERP.
- Alur beranda menempatkan section ini setelah `PricingSection` agar menjadi jalur konversi alami bagi prospek yang belum siap mengadopsi ERP skala penuh.

## Comments

- 2026-10-22: Pengerjaan ulang telah selesai sesuai arahan (hanya menampilkan jasa website company profile tanpa mengubah design system website yang ada). 6 file terverifikasi: `ServicesBento.tsx`, `page.tsx`, `ContactSection.tsx`, `Navbar.tsx`, `Footer.tsx`, dan `layout.tsx`. Build produksi Turbopack lolos 100% tanpa error.
