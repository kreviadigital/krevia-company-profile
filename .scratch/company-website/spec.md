Status: ready-for-agent

# Specification: Krevia Digital Anti-Slop Company Profile Website

## Problem Statement

Calon klien B2B (perusahaan enterprise, instansi, dan UKM berkembang di Pekanbaru, Sumatra, maupun nasional) kerap kesulitan menemukan mitra teknologi terpercaya karena mayoritas website agensi IT dipenuhi *marketing slop*—jargon pemasaran klise, template rapuh, dan janji muluk tanpa transparansi arsitektur teknis riil. Selain itu, ada keraguan apakah software house lokal mampu menghadirkan standar rekayasa kelas dunia tanpa vendor *lock-in*.

## Solution

Website profil perusahaan berstandar tinggi untuk Krevia Digital yang menerapkan prinsip **Anti-Slop**:
1. Menampilkan narasi rekayasa teknis yang jujur, tajam, dan berorientasi solusi masalah bisnis nyata.
2. Membedah 4 pilar layanan utama (Custom Software, System Integration, UI/UX Design, Business Process Digitization) dengan format *Core Problem → Technical Architecture → Tangible Deliverables*.
3. Menyajikan estetika *high-craft engineering UI* dengan diagram konsol sistem langsung di Hero section.
4. Menyediakan formulir Discovery Call / RFQ yang langsung terhubung ke WhatsApp engineer Krevia Digital dengan pesan terstruktur.
5. Menonjolkan posisi strategis Pekanbaru sebagai sentra teknologi responsif berstandar enterprise global.

## User Stories

1. As a corporate decision-maker, I want to immediately see what Krevia Digital stands for without wading through generic marketing buzzwords, so that I can quickly assess their technical competence.
2. As a business owner in Sumatra/Indonesia, I want to verify Krevia Digital's physical presence in Pekanbaru and commitment to open standards, so that I know I have a reachable, accountable technology partner.
3. As a prospective client for Custom Software, I want to see the specific technical architectures and real deliverables (e.g., cloud APIs, offline-first mobile apps, PostgreSQL schemas), so that I know my complex requirements can be handled.
4. As a CTO/IT manager needing System Integration, I want to understand how Krevia handles legacy systems, ERP sync, and API webhooks, so that I can evaluate integration feasibility.
5. As a product owner looking for UI/UX Design, I want to see design system deliverables (Figma tokens 1:1, accessibility testing), so that I know the design won't break during frontend implementation.
6. As an operations director needing Business Process Digitization, I want to see how paperless workflows and approval dashboards are structured, so that I can plan operational cost savings.
7. As a visitor browsing the 4 services, I want an interactive Bento Grid with high information density, so that I can digest technical capabilities smoothly.
8. As a client ready to consult, I want a structured RFQ form where I can specify my operational bottleneck and project scope, so that my first discussion with the engineering team is productive.
9. As a mobile visitor, I want the form submission to seamlessly open WhatsApp with a clean, pre-formatted message, so that I can chat directly without typing long redundant explanations.
10. As a visitor evaluating engineering credibility, I want to see a live architecture/system status console on the Hero section, so that I experience their craftmanship firsthand.
11. As a technical evaluator, I want to see the modern open-source tech stack (Next.js, TypeScript, Flutter, Python, Go, Docker) Krevia specializes in, so that I know there is zero vendor lock-in.
12. As a visitor navigating sections, I want smooth, lightning-fast scroll transitions and instant load times, so that the website feels lightweight and polished.

## Implementation Decisions

- **Architectural Shape**: Single-page application modular dengan Server-side Rendering & Static Generation via Next.js App Router.
- **Visual Design Standard**: High-craft dark tech theme (deep slate palette `#070A11`, crisp 1px borders, subtle monochromatic grids, monospace metadata accents, zero cartoon vectors/generic 3D slop).
- **Hero Module**: Memuat headline lugas, badge lokasi Pekanbaru, dual CTA, dan visual *Live System Console* interaktif.
- **Services Bento Module**: Menampilkan 4 pilar layanan utama dengan kartu interaktif yang membedah *Problem*, *Technical Architecture*, dan *Tangible Deliverables*.
- **Tech Stack & Why Us Modules**: Matriks kapabilitas teknologi modern dan 4 keunggulan kompetitif (Local anchor, 100% code ownership, modular scalability, enterprise security).
- **Conversion Form Module**: Controlled component formulir konsultasi yang memformat data menjadi URL WhatsApp `https://wa.me/...` terenkripsi rapi.
- **Performance & Asset Loading**: Tidak menggunakan aset berat atau script pihak ketiga yang tidak perlu demi skor Core Web Vitals 100/100.

## Testing Decisions

- **Seam**: Pengujian antarmuka end-to-end pada route utama (`/`).
- **Behavior Tested**: Verifikasi rendering seluruh data pilar layanan tanpa teks placeholder, respon form WhatsApp generator terhadap berbagai input, dan integritas metadata SEO.
- **Quality Standard**: Zero-error pada kompilasi TypeScript dan Next.js production build.

## Out of Scope

- Sistem autentikasi / login portal klien (dialokasikan untuk fase produk internal di rilis mendatang).
- Payment gateway checkout langsung (proyek Krevia bersifat bespoke B2B contracts, bukan e-commerce retail).
- Halaman blog/artikel CMS multi-penulis (bisa ditambahkan di V2).

## Further Notes

- Seluruh kode sumber mematuhi prinsip anti-slop: clean code, semantic HTML, dan arsitektur komponen modular.
- Konfigurasi status issue tracker lokal berada di `.scratch/company-website/`.
