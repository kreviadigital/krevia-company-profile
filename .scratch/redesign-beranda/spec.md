Status: ready-for-agent

# Specification: Krevia Digital Beranda Redesign (Based on Design PDF)

## Problem Statement

Pemilik bisnis lokal dan pembuat keputusan di Pekanbaru (seperti pengelola hotel, pemilik bengkel, dan pelaku UMKM/retail) menghadapi kekacauan operasional akibat pencatatan manual di buku nota atau percakapan chat. Ketika mencari solusi teknologi, mereka sering dihadapkan pada website vendor perangkat lunak yang rumit, penuh jargon teknis asing (*slop*), dan terkesan jauh dari realitas operasional mereka. Website Krevia Digital perlu menyajikan solusi yang membumi, elegan, transparan, dan langsung menjawab masalah operasional nyata mereka dalam satu layar.

## Solution

Merombak tampilan antarmuka dan struktur halaman beranda Krevia Digital agar 100% presisi mengikuti dokumen desain resmi `Krevia Digital – Beranda.pdf`:
1. Menerapkan estetika editorial berstandar *high craft* dengan palet warna bersih: kanvas *off-white*, kontainer aksen *soft lavender-gray*, blok *Deep Navy*, dan aksen *warm amber*.
2. Memperkenalkan Hero Section dengan narasi tegas: *"Berhenti mencatat di buku. Jalankan bisnis dari satu layar."*, dilengkapi visual grafis dan dua kartu status simulasi interaktif (Reservasi Hotel dan Servis Bengkel).
3. Menampilkan seksi *"Empat hal yang kami kerjakan"* dengan baris bernomor horizontal (Custom Software, System Integration, UI/UX Design, Digitalisasi Proses Bisnis).
4. Menyajikan kartu perbandingan *"Solusi untuk bisnis lokal"* yang membedah masalah dan solusi nyata untuk Hotel, Bengkel, dan UMKM.
5. Menampilkan *Brand Story & Value Banner* (*"Dari Pekanbaru, bekerja online."*) yang menegaskan nilai Sederhana, Transparan, dan Bertahap.
6. Memvisualisasikan 4 langkah alur kerja (*Konsultasi*, *Perancangan*, *Pengembangan*, *Peluncuran*).
7. Menyajikan komparasi paket transparan (*Dasar*, *Usaha*, *Kustom*) dan daftar Accordion Pertanyaan Umum (FAQ).
8. Menyediakan formulir konsultasi terstruktur *"Ceritakan masalah bisnis Anda"* dengan integrasi direct action WhatsApp.

## User Stories

1. As an operational manager or business owner, I want to see a direct, relatable value proposition on the Hero section, so that I immediately understand Krevia Digital can solve my bookkeeping and coordination headaches.
2. As a visitor browsing on desktop or mobile, I want a clean, responsive navigation bar with direct links to Layanan, Industri, Tentang, Harga, FAQ, and a "Konsultasi Gratis" CTA, so that I can easily explore the page.
3. As a hotel owner, I want to see a live simulation card of a room reservation confirmation, so that I can visualize how my bookings will be handled in one system.
4. As an automotive workshop owner, I want to see a live simulation card of vehicle service history and maintenance reminders, so that I know my customer records won't be lost in paper receipts.
5. As a prospective client, I want to browse the four core services formatted cleanly in a dedicated numbered container (01 to 04), so that I can quickly assess their specific technical offerings.
6. As a local business owner in Pekanbaru, I want to read the "Solusi untuk bisnis lokal" section comparing problems and solutions across hotels, workshops, and retail, so that I feel Krevia genuinely understands my industry.
7. As a business stakeholder, I want to read the company background banner "Dari Pekanbaru, bekerja online" and its three core pillars (Sederhana, Transparan, Bertahap), so that I can trust their working ethos and local accountability.
8. As a first-time client, I want to see the 4-step workflow (Konsultasi, Perancangan, Pengembangan, Peluncuran), so that I know exactly what to expect from kickoff to launch.
9. As a business owner evaluating budget, I want to compare the three service tiers (Dasar, Usaha, Kustom) side-by-side, so that I can select an engagement model fitting my budget.
10. As a visitor with common questions, I want to expand and collapse interactive FAQ accordion items, so that I can get answers regarding project duration, consultation fees, in-person meetings, and post-launch support.
11. As a prospective client ready to consult, I want to fill in my name, contact, business type, and project needs in a dedicated form, so that Krevia can follow up directly.
12. As a mobile visitor, I want a one-tap WhatsApp trigger, so that I can immediately start a live chat with the Krevia engineering team.

## Implementation Decisions

- **Visual Architecture & Color System**: Menetapkan warna tema baru di Tailwind CSS: Kanvas lembut (`#F8FAFC`), Soft Card Lavender-Gray (`#F3F4F9`), Deep Navy Slate (`#0A1324` / `#0D1829`), dan Warm Amber/Gold (`#D4A373` / `#E5C287`).
- **Typography & Rhythm**: Mengadopsi tipografi berbobot tegas dengan tanda titik penegas di akhir setiap tajuk seksi (*editorial headline style*), didukung *spacing* yang lapang (`p-8 md:p-12`, `rounded-3xl`).
- **Interactive Componentry**:
  - Simulasi kartu operasional pada Hero dengan badge status real-time.
  - Kartu industri terfokus dengan kartu aktif bertema Deep Navy dan kartu sekunder bertema terang.
  - Accordion FAQ dengan transisi buka-tutup mulus (animasi height/opacity).
  - Formulir konsultasi yang memvalidasi input sebelum meneruskan data ke WhatsApp endpoint.
- **Modularity**: Memecah halaman menjadi modul-modul independen (Navbar, Hero, ServicesList, IndustrySolutions, ValueBanner, ProcessSteps, PricingCards, FaqAccordion, RfqForm, Footer) dengan antarmuka props yang ramping.

## Testing Decisions

- **Testing Seams**: Pengujian antarmuka behavior-driven pada level halaman beranda (`/`) dan komponen form.
- **External Behavior Tested**:
  - Seluruh teks dan salinan resmi dari PDF ter-render dengan akurat tanpa placeholder yang hilang.
  - Interaksi accordion FAQ membuka dan menutup jawaban yang relevan tanpa mengganggu tata letak sekitarnya.
  - Interaksi form konsultasi menghasilkan pesan berformat valid untuk WhatsApp.
  - Responsivitas visual pada layar mobile (< 640px), tablet, dan desktop (> 1024px).
- **Prior Art**: Pengujian build production Next.js dan verifikasi validitas tipe TypeScript di seluruh proyek.

## Out of Scope

- Autentikasi dan login portal klien khusus.
- Integrasi payment gateway instan (pembayaran tetap melalui kesepakatan B2B invoice).
- Halaman blog dinamis multi-penulis.

## Further Notes

- Seluruh salinan teks, struktur seksi, dan penekanan warna berpedoman langsung pada dokumen [Krevia Digital – Beranda.pdf](file:///D:/Download/Krevia%20Digital%20–%20Beranda.pdf).
- Tiket implementasi dipecah menjadi 6 tiket berurutan di `.scratch/redesign-beranda/issues/`.
