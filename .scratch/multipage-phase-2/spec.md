# PRD: Evolusi Multi-Page Modular (Fase 2) - Layanan, Kontak, & Legalitas SLA

**Status:** resolved
**Tanggal:** 2026-10-22
**Peminta:** Founder Krevia Digital
**Slug fitur:** `multipage-phase-2`

---

## 1. Problem Statement

Meskipun Fase 1 telah berhasil memisahkan katalog ERP dan profil perusahaan, website Krevia Digital masih memiliki keterbatasan:
1. Layanan rekayasa perangkat lunak lainnya (Custom Software, System Integration, Digitalisasi Alur Kerja) belum memiliki wadah eksplorasi mendalam di luar satu bento card di beranda.
2. Form kontak masih berstatus seksi tempelan di bawah halaman beranda (`/#contact`), belum memiliki halaman mandiri (`/kontak`) yang menyediakan panduan pra-konsultasi dan rincian kanal resmi.
3. Klien enterprise dan instansi yang melakukan evaluasi vendor membutuhkan dokumen legalitas operasional dan Service Level Agreement (`/syarat-ketentuan`) untuk memastikan keamanan data dan keandalan sistem.

## 2. Tujuan & Keberhasilan

**Tujuan:** Menyelesaikan arsitektur multi-halaman enterprise Krevia Digital secara paripurna dengan menghadirkan rute dedicated `/layanan`, `/kontak`, dan `/syarat-ketentuan`, serta memperbarui sistem navigasi dan sitemap.

**Indikator Keberhasilan:**
1. Rute `/layanan` aktif memuat 5 spektrum layanan resmi, tech stack transparan, dan metodologi 4-tahap sprint rekayasa.
2. Rute `/kontak` aktif sebagai pusat konsultasi mandiri dengan form RFQ terstruktur, verifikasi domisili Pekanbaru, dan FAQ pra-konsultasi.
3. Rute `/syarat-ketentuan` aktif memuat Terms of Service, SLA ketersediaan platform ERP, kepemilikan data 100% di tangan klien, dan kerahasiaan informasi (NDA default).
4. Navigasi global (Navbar & Footer) mencakup tautan rute mandiri yang konsisten.
5. `npx tsc --noEmit` dan `npm run build` lolos 100% tanpa error.

## 3. Ruang Lingkup

### In Scope
1. **Halaman `/layanan` (`src/app/layanan/page.tsx`)**:
   - Spektrum 5 pilar layanan rekayasa sesuai GLOSSARY.md: Website Company Profile, Custom Software, System Integration, Business Process Digitization, UI/UX Design.
   - Metodologi sprint 4 tahap (Konsultasi → Arsitektur → Sprint Rekayasa → Serah Terima & Pelatihan).
   - Tech stack & arsitektur performa tinggi (Next.js, TypeScript, PostgreSQL, REST/GraphQL API).
2. **Halaman `/kontak` (`src/app/kontak/page.tsx`)**:
   - Form RFQ konsultasi terstruktur.
   - Detail operasional kantor Pekanbaru & direct WhatsApp/Email terverifikasi.
   - FAQ Pra-Konsultasi (waktu respon, persiapan data, jaminan kerahasiaan NDA).
3. **Halaman `/syarat-ketentuan` (`src/app/syarat-ketentuan/page.tsx`)**:
   - Ketentuan umum layanan langganan platform ERP modular dan jasa rekayasa perangkat lunak.
   - Klausul kepemilikan data (klien memegang hak cipta dan kepemilikan data penuh).
   - Komitmen SLA (Service Level Agreement) ketersediaan sistem dan pencadangan harian.
4. **Navigasi & Sitemap**:
   - Update `Navbar.tsx` (Beranda, Produk ERP, Layanan, Tentang Kami, Kontak).
   - Update `Footer.tsx` (tambahkan link `/syarat-ketentuan` dan `/layanan`).
   - Update `src/app/sitemap.ts` (indeks `/layanan`, `/kontak`, `/syarat-ketentuan`).

### Out of Scope
- Integrasi kalender otomatis Cal.com (tetap ditunda sesuai arahan user).
- Aset PDF download Company Profile (tetap ditunda sesuai arahan user).

## 4. Acceptance Criteria
- [x] `/layanan` dapat diakses, responsif, dan bebas klaim slop.
- [x] `/kontak` dapat diakses dan form RFQ berfungsi membuka WhatsApp dengan format pesan rapi.
- [x] `/syarat-ketentuan` dapat diakses dengan klausul B2B yang jelas.
- [x] Navbar dan Footer menghubungkan seluruh rute tanpa tautan rusak.
- [x] `npm run build` lolos tanpa error.
