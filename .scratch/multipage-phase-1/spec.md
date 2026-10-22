# PRD: Evolusi Multi-Page Modular & Refinement Beranda (Fase 1)

**Status:** resolved
**Tanggal:** 2026-10-22
**Peminta:** Founder Krevia Digital
**Slug fitur:** `multipage-phase-1`

---

## 1. Problem Statement

Website Krevia Digital saat ini menumpuk seluruh 11 seksi dalam satu halaman beranda (`page.tsx`), menggabungkan katalog 44 modul ERP, simulasi harga, jasa website profil kilat, hingga profil tim. Hal ini menyebabkan:
- Beban kognitif tinggi (*cognitive overload*) bagi pengunjung korporat.
- Halaman beranda terlalu panjang dan berat pada *first paint*.
- Fitur solusi industri lokal Riau sempat terhapus (melanggar ADR-0002).
- Penilaian profesionalitas perusahaan di mata klien enterprise terdistorsi karena tidak adanya pemisahan jelas antara platform produk ERP dengan profil entitas resmi perusahaan.

## 2. Tujuan & Keberhasilan

**Tujuan:** Mentransformasikan arsitektur situs menjadi multi-halaman modular Next.js App Router (Fase 1): Beranda Ringkas, Katalog ERP Modular (`/produk/erp`), dan Profil Perusahaan (`/tentang-kami`), dengan navigasi global yang tangguh dan restorasi solusi industri lokal.

**Indikator Keberhasilan:**
1. Rute `/produk/erp` aktif dan memuat katalog 44 modul, kalkulator langganan modular, serta kartu simulasi industri lokal (Hotel, Bengkel, Ritel/UMKM) sesuai ADR-0002.
2. Rute `/tentang-kami` aktif memuat profil Krevia Digital, prinsip Anti-Slop, transparansi domisili Pekanbaru, dan kepatuhan entitas.
3. Halaman Beranda (`/`) menjadi ringkas dengan *high-level 4-pillar ERP overview*, bento *on-ramp* Website Company Profile, FAQ, dan form RFQ.
4. Navigasi Navbar & Footer bekerja mulus antar-halaman dengan transisi `next/link` dan fallback anchor hash (`/#services`, `/#contact`).
5. `npx tsc --noEmit` lolos dan build produksi Next.js lolos tanpa error.

## 3. Ruang Lingkup

### In Scope
1. **Navigasi Global (`Navbar.tsx` & `Footer.tsx`)**: Integrasi `next/link` untuk link rute (`/`, `/produk/erp`, `/tentang-kami`) dan hash anchor (`/#services`, `/#pricing`, `/#contact`).
2. **Halaman `/produk/erp` (`src/app/produk/erp/page.tsx`)**:
   - Arsitektur sistem ERP modular.
   - Restorasi kartu simulasi sektor riil lokal Riau (Hotel, Bengkel plat BM, Kontraktor/UMKM).
   - Katalog interaktif 44 modul ERP dengan filter kategori dan status transparan.
   - Simulasi paket harga (Basic Rp 399rb, Pro Rp 999rb, Custom).
3. **Halaman `/tentang-kami` (`src/app/tentang-kami/page.tsx`)**:
   - Visi & identitas Krevia Digital sebagai startup rekayasa perangkat lunak enterprise.
   - Manifesto Anti-Slop (kejujuran teknis, penolakan template murahan).
   - Informasi domisili operasional Pekanbaru, Riau, dan transparansi entitas hukum.
4. **Refinement Beranda (`src/app/page.tsx`)**:
   - Hero executive value proposition.
   - Product Spotlight & Ringkasan 4 Pilar Inti ERP dengan CTA *"Eksplorasi 44 Modul Lengkap →"* menuju `/produk/erp`.
   - Section Bento Layanan On-ramp (Website Company Profile).
   - Section Kenapa Krevia & Alur Kerja.
   - Section FAQ & Formulir Konsultasi RFQ (`ContactSection`).
5. **Kepatuhan Anti-Slop & Design System**:
   - Menghilangkan klaim waktu atau harga paket yang tidak terverifikasi (menghapus klaim "Selesai 7-14 hari" tanpa scoping).
   - Menggunakan token warna resmi dari `DESIGN.md`.

### Out of Scope
- Integrasi kalender booking otomatis (Cal.com / Google Calendar) — ditunda sesuai arahan user.
- Dokumen PDF Company Profile siap unduh — ditunda sesuai arahan user.
- Halaman dedicated `/layanan` (masuk ke Fase 2).

## 4. User Stories

1. Sebagai calon klien enterprise, saya ingin membuka `/produk/erp` untuk melihat katalog 44 modul ERP lengkap dan simulasi harganya secara terpisah tanpa terganggu seksi lain.
2. Sebagai pemilik bisnis di Riau, saya ingin melihat simulasi studi kasus operasional lokal (Hotel, Bengkel BM, UMKM) di halaman produk agar saya yakin Krevia memahami medan bisnis nyata.
3. Sebagai tim procurement, saya ingin membuka `/tentang-kami` untuk memverifikasi domisili kantor, legalitas, dan prinsip kerja Krevia Digital.
4. Sebagai pengunjung mobile, saya ingin navigasi navbar dan footer dapat berpindah mulus antara Beranda, Produk ERP, dan Tentang Kami tanpa halaman macet atau anchor rusak.
5. Sebagai calon klien yang berada di `/produk/erp`, saat saya mengklik tombol "Konsultasi", saya ingin langsung diarahkan ke form kontak di Beranda (`/#contact`).

## 5. Acceptance Criteria

- [x] Rute `/produk/erp` dapat diakses dan responsif di desktop & mobile.
- [x] Rute `/tentang-kami` dapat diakses dan responsif di desktop & mobile.
- [x] Navbar dan Footer memiliki tautan aktif ke Beranda, Produk ERP, Layanan Web, Tentang Kami, dan Kontak.
- [x] Beranda menampilkan ringkasan 4 pilar arsitektur ERP dengan link ke `/produk/erp`, serta layanan on-ramp Web Profile.
- [x] Solusi industri lokal (Hotel, Bengkel, UMKM) terpasang di `/produk/erp` sesuai ADR-0002.
- [x] Build produksi Next.js lolos tanpa error (`npm run build`).
