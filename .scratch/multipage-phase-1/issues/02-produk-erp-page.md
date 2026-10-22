# Issue 02: Halaman Dedicated Katalog ERP Modular & Restorasi Solusi Lokal

**Status:** resolved
**Type:** task
**Blocked by:** 01

## Deskripsi
Buat halaman dedicated `/produk/erp` (`src/app/produk/erp/page.tsx`) yang menampung katalog interaktif 44 modul ERP, kalkulator langganan modular, serta restorasi kartu solusi industri lokal Riau (Hotel & Penginapan, Bengkel & Otomotif, Kontraktor/UMKM) sesuai ADR-0002.

## Task
1. Restorasi komponen `IndustrySolutions.tsx` dari git history atau rancang ulang dengan standar token `DESIGN.md` dan kasus bisnis lokal (Hotel di Pekanbaru, Bengkel BM, Ritel/UMKM).
2. Buat `src/app/produk/erp/page.tsx` dengan menyusun:
   - Header Hero Produk ERP (Arsitektur ERP modular, tanpa vendor lock-in).
   - `IndustrySolutions` (solusi sektor riil Pekanbaru/Riau).
   - `ErpCapabilities` (katalog interaktif 44 modul dengan filter).
   - `PricingSection` (kalkulator paket langganan modular).
   - CTA konsultasi menuju `/#contact`.
3. Lengkapi metadata SEO di `src/app/produk/erp/page.tsx` atau `layout.tsx` khusus untuk kata kunci ERP Indonesia.
