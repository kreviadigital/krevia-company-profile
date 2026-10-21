/**
 * Centralized, typed pricing and module catalog configuration for Krevia ERP.
 * Easily editable by the Krevia team without altering presentation layout components.
 */

export type PlanId = "basic" | "pro" | "custom";

export type ModuleStatus = "available" | "planned" | "custom";

export interface ErpModule {
  id: string;
  name: string;
  category: string;
  description: string;
  status: ModuleStatus;
  statusLabel: string;
  includedIn: PlanId[];
}

export interface PricingPlan {
  id: PlanId;
  name: string;
  badge?: string;
  priceFormatted: string;
  billingPeriod: string;
  description: string;
  userLimit: string;
  projectLimit: string;
  storageLimit: string;
  supportLevel: string;
  features: string[];
  ctaText: string;
  featured: boolean;
  prefilledMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceFormatted: "Rp 399.000",
    billingPeriod: "/ bulan",
    description:
      "Untuk bisnis yang mulai menata operasional dengan fondasi ERP yang praktis dan terstruktur.",
    userLimit: "Hingga 5 Pengguna",
    projectLimit: "Hingga 3 Unit Operasional / Proyek",
    storageLimit: "Penyimpanan Standar Cloud Terkelola",
    supportLevel: "Dukungan Teknis Standar (Email & Chat)",
    features: [
      "Dasbor utama & workspace operasional terpusat",
      "Manajemen pengguna dan hak akses dasar",
      "Pencatatan master data (kontak, inventaris dasar, aset)",
      "Pilihan modul standar terdefinisi",
      "Laporan operasional standar & ekspor data (Excel/PDF)",
      "Pembaruan keamanan sistem otomatis",
    ],
    ctaText: "Konsultasi Paket Basic",
    featured: false,
    prefilledMessage:
      "Halo Krevia Digital, saya tertarik berdiskusi mengenai Paket Basic ERP (Rp399.000/bln) untuk kebutuhan operasional bisnis saya.",
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Paling Populer",
    priceFormatted: "Rp 999.000",
    billingPeriod: "/ bulan",
    description:
      "Untuk bisnis berkembang yang membutuhkan alur kerja terhubung dan visibilitas operasional lebih mendalam.",
    userLimit: "Hingga 20 Pengguna",
    projectLimit: "Kapasitas Unit Operasional / Proyek Diperluas",
    storageLimit: "Penyimpanan Prioritas & Riwayat Dokumen",
    supportLevel: "Dukungan Respons Cepat & Sesi Pendampingan",
    features: [
      "Semua kapabilitas dalam Paket Basic",
      "Pilihan modul standar yang lebih luas & saling terhubung",
      "Alur persetujuan bertingkat (multi-level approval workflows)",
      "Kontrol akses berbasis peran lebih terperinci",
      "Laporan analitik operasional & perbandingan anggaran mendalam",
      "Visibilitas lintas unit usaha atau multi-proyek",
      "Jejak audit (audit trail) & notifikasi alur kerja otomatis",
    ],
    ctaText: "Konsultasi Paket Pro",
    featured: true,
    prefilledMessage:
      "Halo Krevia Digital, saya ingin berdiskusi mengenai Paket Pro ERP (Rp999.000/bln) untuk mengintegrasikan alur operasional bisnis saya yang sedang berkembang.",
  },
  {
    id: "custom",
    name: "Custom",
    badge: "Solusi Skala Penuh",
    priceFormatted: "Kustom",
    billingPeriod: "Berdasarkan Cakupan",
    description:
      "Konfigurasi ERP yang dirancang khusus mengikuti proses bisnis, struktur organisasi, dan kebutuhan integrasi unik Anda.",
    userLimit: "Kapasitas Pengguna Fleksibel",
    projectLimit: "Multi-Cabang & Multi-Proyek Skala Penuh",
    storageLimit: "Kapasitas Khusus / On-Premise / Private Cloud",
    supportLevel: "Pendampingan Khusus & Perjanjian Layanan Terkelola (SLA)",
    features: [
      "Kombinasi modul kustom bebas sesuai kebutuhan operasional",
      "Rekayasa aturan bisnis & alur kerja spesifik (bespoke business logic)",
      "Integrasi API pihak ketiga (sistem bank, ERP legacy, e-commerce)",
      "Ekstensi khusus industri (konstruksi, distribusi, perhotelan, dll.)",
      "Struktur multi-cabang atau arsitektur organisasi kompleks",
      "Sesi implementasi, migrasi data, dan pelatihan langsung tim Anda",
    ],
    ctaText: "Konsultasi ERP Kustom",
    featured: false,
    prefilledMessage:
      "Halo Krevia Digital, saya ingin mendiskusikan implementasi ERP Kustom dengan spesifikasi dan kebutuhan alur kerja unik untuk perusahaan saya.",
  },
];

export const ERP_MODULE_CATALOG: ErpModule[] = [
  // Core & Access
  {
    id: "mod-core",
    name: "Workspace Inti & Hak Akses",
    category: "Inti & Tata Kelola",
    description: "Dasbor kendali, otentikasi peran (RBAC), dan struktur organisasi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-audit",
    name: "Jejak Audit & Log Aktivitas",
    category: "Inti & Tata Kelola",
    description: "Perekaman riwayat modifikasi data, login, dan jejak persetujuan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },

  // Project & Operations
  {
    id: "mod-project",
    name: "Manajemen Proyek & Pekerjaan",
    category: "Proyek & Operasional",
    description: "Master proyek, tahapan milestone, penugasan tim, dan jadwal target.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-site-log",
    name: "Laporan Harian Lapangan",
    category: "Proyek & Operasional",
    description: "Catatan harian progres lapangan, kondisi cuaca, dan dokumentasi foto.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },

  // Budget & Finance
  {
    id: "mod-rab",
    name: "RAB & Perencanaan Anggaran",
    category: "Keuangan & Anggaran",
    description: "Penyusunan Rencana Anggaran Biaya baseline dan alokasi pos pengeluaran.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-cost-control",
    name: "Kontrol Biaya & Varian Realisasi",
    category: "Keuangan & Anggaran",
    description: "Pemantauan realisasi pengeluaran vs anggaran untuk mencegah pembengkakan dana.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-invoicing",
    name: "Faktur, Kas Masuk & Pembayaran",
    category: "Keuangan & Anggaran",
    description: "Pencatatan penagihan klien, tanda terima, dan rekonsiliasi pembayaran.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // Procurement & Inventory
  {
    id: "mod-procurement",
    name: "Pengadaan & Pembelian (Purchase Order)",
    category: "Pengadaan & Material",
    description: "Pengajuan pembelian dari lapangan, verifikasi persetujuan, dan status pesanan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-inventory",
    name: "Inventaris & Manajemen Gudang",
    category: "Pengadaan & Material",
    description: "Pencatatan stok material, mutasi antar lokasi, dan minimum safety stock.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },

  // Human Resources
  {
    id: "mod-subcontractor",
    name: "Registri Mitra & Subkontraktor",
    category: "SDM & Mitra",
    description: "Database tenaga kerja lepas, spesialisasi keahlian, dan riwayat penugasan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-attendance-gps",
    name: "Presensi Lapangan Berbasis Lokasi",
    category: "SDM & Mitra",
    description: "Pencatatan absensi tim lapangan dengan verifikasi titik koordinat GPS.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // Industry Specific
  {
    id: "mod-construction-pack",
    name: "Paket Khusus Konstruksi & Kontraktor",
    category: "Ekstensi Industri",
    description: "Integrasi menyeluruh: RAB, progres fisik kurva S, log material & subkontraktor.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-custom-workflows",
    name: "Alur Kerja & Integrasi API Kustom",
    category: "Ekstensi Industri",
    description: "Penyesuaian logika bisnis khusus (Ritel, Perhotelan, Distribusi, Jasa).",
    status: "custom",
    statusLabel: "Pengembangan Kustom",
    includedIn: ["custom"],
  },
];
