# Issue 04: Refinement Beranda Menjadi Executive Summary & On-ramp Hub

**Status:** resolved
**Type:** task
**Blocked by:** 02, 03

## Deskripsi
Rampingkan `src/app/page.tsx` agar tidak lagi menumpuk 44 modul penuh dan simulasi pricing panjang. Beranda bertindak sebagai executive summary berkinerja tinggi, memuat ringkasan 4 pilar ERP dengan link ke `/produk/erp`, layanan on-ramp Website Company Profile, FAQ, dan form RFQ.

## Task
1. Di `src/app/page.tsx`:
   - Pertahankan `Hero`, `ProductSpotlight`, `ServicesBento` (Website Company Profile), `WhyKrevia`, `HowWeWork`, `FaqSection`, `ContactSection`, dan `Footer`.
   - Gantikan komponen 44 modul yang berat di Beranda dengan kartu ringkasan 4 Pilar Arsitektur ERP yang elegan, lengkap dengan tombol CTA *"Lihat Seluruh 44 Modul ERP →"* menuju `/produk/erp`.
2. Pastikan urutan seksi di Beranda logis:
   - Hero → ProductSpotlight (Arsitektur 4 Pilar + Link ke /produk/erp) → ServicesBento (On-ramp Web Profile) → WhyKrevia → HowWeWork → FaqSection → ContactSection.
3. Hapus klaim waktu yang tidak terverifikasi (seperti "Selesai 7-14 hari" tanpa scoping) dari komponen Beranda agar patuh pada kebijakan Anti-Slop.
