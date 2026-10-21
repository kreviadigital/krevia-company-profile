/**
 * Centralized, typed pricing and comprehensive modular ERP catalog configuration for Krevia ERP.
 * Modeled after enterprise ERP suites (Odoo, Mekari, SAP Business One) for businesses across industries.
 */

export type PlanId = "basic" | "pro" | "custom";

export type ModuleStatus = "available" | "planned" | "custom";

export interface ErpModule {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  status: ModuleStatus;
  statusLabel: string;
  includedIn: PlanId[];
  isHighlight?: boolean;
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
      "Untuk bisnis yang mulai menata operasional dengan fondasi ERP yang praktis, rapi, dan terstruktur.",
    userLimit: "Hingga 5 Pengguna",
    projectLimit: "Hingga 3 Unit Usaha / Proyek Aktif",
    storageLimit: "Penyimpanan Standar Cloud Terkelola",
    supportLevel: "Dukungan Teknis Standar (Email & Chat)",
    features: [
      "Workspace operasional terpusat & dasbor kontrol harian",
      "Manajemen pengguna & hak akses dasar (Role-Based Access Control)",
      "Pencatatan master data kontak pelanggan, vendor & inventaris dasar",
      "Pencatatan kas masuk, kas keluar & laporan keuangan standar",
      "Manajemen pesanan penjualan & faktur standar (Invoicing)",
      "Manajemen proyek atau tugas dasar dengan status milestone",
      "Laporan operasional siap ekspor format Excel dan PDF",
      "Pembaruan keamanan sistem otomatis tanpa biaya server terpisah",
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
      "Untuk bisnis berkembang yang membutuhkan integrasi lintas departemen, kontrol biaya ketat, dan alur persetujuan.",
    userLimit: "Hingga 20 Pengguna",
    projectLimit: "Kapasitas Unit Usaha / Proyek Diperluas",
    storageLimit: "Penyimpanan Prioritas & Riwayat Dokumen Lengkap",
    supportLevel: "Dukungan Respons Cepat & Sesi Pendampingan Teknis",
    features: [
      "Semua fitur yang tercakup dalam Paket Basic",
      "Pilihan modul standar terintegrasi yang lebih luas (Keuangan, Proyek, Pengadaan, Inventaris)",
      "Mesin alur persetujuan bertingkat (multi-level approval workflows)",
      "Buku Besar (General Ledger), Laporan Laba Rugi & Arus Kas real-time",
      "Perencanaan RAB & kontrol varian pengeluaran aktual vs anggaran",
      "Surat Permintaan Pembelian (PR) & Surat Pesanan (PO) terhubung ke gudang",
      "Manajemen multi-gudang, transfer stok & peringatan minimum stok",
      "Visibilitas lintas unit usaha atau multi-proyek dalam satu dasbor",
      "Jejak audit (audit trail) lengkap & notifikasi alur kerja otomatis",
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
      "Konfigurasi ERP komprehensif yang dirancang khusus mengikuti proses bisnis unik, multi-cabang, dan integrasi API pihak ketiga.",
    userLimit: "Kapasitas Pengguna Fleksibel Sesuai Kebutuhan",
    projectLimit: "Multi-Cabang, Multi-Pabrik & Multi-Proyek Tanpa Batas",
    storageLimit: "Kapasitas Khusus / Opsi On-Premise / Private Cloud",
    supportLevel: "Dedicated Account Manager & Perjanjian Layanan Terkelola (SLA)",
    features: [
      "Kombinasi modul bebas sesuai seluruh rantai nilai bisnis Anda",
      "Kustomisasi aturan logika bisnis, rumus kalkulasi, dan approval matriks",
      "Integrasi API pihak ketiga (sistem perbankan, POS eksternal, e-faktur pajak, ERP legacy)",
      "Ekstensi khusus industri (Konstruksi, Distribusi Grosir, Manufaktur, Rumah Sakit/Klinik, Perhotelan)",
      "Arsitektur multi-perusahaan, holding, multi-cabang dengan konsolidasi otomatis",
      "Pendampingan implementasi langsung di lokasi, migrasi data lama, dan pelatihan intensif seluruh tim",
    ],
    ctaText: "Konsultasi ERP Kustom",
    featured: false,
    prefilledMessage:
      "Halo Krevia Digital, saya ingin mendiskusikan implementasi ERP Kustom dengan spesifikasi dan kebutuhan alur kerja unik untuk perusahaan saya.",
  },
];

export interface ErpSuiteMetadata {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  summary: string;
  odooMekariEquivalent: string;
  highlights: string[];
}

export const ERP_SUITE_METADATA: ErpSuiteMetadata[] = [
  {
    id: "finance",
    name: "Keuangan & Akuntansi",
    shortName: "Finansial",
    badge: "Fondasi Fiskal",
    summary: "Buku besar otomatis, rekonsiliasi kas, arus kas real-time, dan kepatuhan faktur pajak Indonesia.",
    odooMekariEquivalent: "Setara Mekari Jurnal & Odoo Invoicing/Accounting",
    highlights: ["Buku Besar & Jurnal Otomatis", "Piutang & Hutang Usaha", "Laporan Keuangan Terpadu", "Kalkulasi Pajak & e-Faktur"],
  },
  {
    id: "hr",
    name: "SDM & Payroll",
    shortName: "SDM",
    badge: "Manajemen Karyawan",
    summary: "Pengelolaan data pegawai, absensi GPS, alur cuti & lembur, payroll PPh 21 TER, dan portal mandiri karyawan.",
    odooMekariEquivalent: "Setara Mekari Talenta & Odoo Employees/Payroll",
    highlights: ["Database Karyawan & Kontrak", "Payroll PPh 21 & BPJS", "Presensi GPS Mobile", "Portal Mandiri Karyawan (ESS)"],
  },
  {
    id: "procurement",
    name: "Pengadaan & Pembelian",
    shortName: "Pengadaan",
    badge: "Kontrol Belanja",
    summary: "Standarisasi permintaan pembelian (PR), pesanan resmi (PO), evaluasi kinerja vendor, dan validasi 3-way matching.",
    odooMekariEquivalent: "Setara Odoo Purchase & Mekari Invoicing/Expense",
    highlights: ["Surat Permintaan Pembelian (PR)", "Pesanan Pembelian (PO)", "Evaluasi Rekanan Vendor", "3-Way Matching Invoice"],
  },
  {
    id: "inventory",
    name: "Inventaris & Gudang",
    shortName: "Gudang & SCM",
    badge: "Rantai Pasok",
    summary: "Visibilitas stok multi-gudang dan transit proyek, peringatan safety stock, serta pelacakan batch & serial.",
    odooMekariEquivalent: "Setara Odoo Inventory/Barcode & Mekari Jurnal SCM",
    highlights: ["Multi-Gudang & Lokasi Proyek", "Mutasi Stok & Stock Opname", "Reorder Alerts & Safety Stock", "Pelacakan Batch & Serial"],
  },
  {
    id: "sales",
    name: "Penjualan & CRM",
    shortName: "Penjualan",
    badge: "Pertumbuhan Omzet",
    summary: "Pipeline prospek klien, konversi quotation ke SO, notifikasi WhatsApp Business API, POS kasir, dan helpdesk tiket.",
    odooMekariEquivalent: "Setara Mekari Qontak & Odoo CRM/Point of Sale",
    highlights: ["Pipeline CRM Prospek Klien", "Quotation to Sales Order", "Integrasi WhatsApp Business", "POS Kasir & Helpdesk"],
  },
  {
    id: "project",
    name: "Proyek & Lapangan",
    shortName: "Proyek",
    badge: "Eksekusi Proyek",
    summary: "Pengendalian WBS, kurva S deviasi biaya anggaran RAB, log cuaca dan mandor harian, serta work order teknisi.",
    odooMekariEquivalent: "Setara Odoo Project/Timesheets & Field Service",
    highlights: ["Struktur WBS & Milestone", "RAB Kurva S Real-time", "Log Harian Lapangan", "Servis Teknisi (Work Order)"],
  },
  {
    id: "manufacturing",
    name: "Manufaktur & Produksi",
    shortName: "Produksi",
    badge: "Pabrikasi & QC",
    summary: "Struktur resep multi-level BOM, perintah kerja SPK pabrik, uji mutu QC material/output, dan servis preventif mesin.",
    odooMekariEquivalent: "Setara Odoo Manufacturing (MRP) & Maintenance",
    highlights: ["Formula Bill of Materials (BOM)", "SPK & Alokasi Bahan Baku", "Inspeksi Kontrol Kualitas QC", "Pemeliharaan Mesin Preventif"],
  },
  {
    id: "governance",
    name: "Tata Kelola & Alur Kerja",
    shortName: "Tata Kelola",
    badge: "Kepatuhan & Integrasi",
    summary: "Mesin alur persetujuan bertingkat, audit trail tidak terhapus, repositori dokumen terenkripsi, dan webhook API terbuka.",
    odooMekariEquivalent: "Setara Odoo Studio/Automation & Enterprise Security",
    highlights: ["Alur Persetujuan Bertingkat", "Jejak Audit (Audit Trail)", "Arsip Dokumen Terenkripsi", "API Terbuka & Multi-Cabang"],
  },
];

export const ERP_MODULE_CATEGORIES = [
  { id: "all", label: "Semua Modul" },
  { id: "finance", label: "Keuangan & Akuntansi" },
  { id: "hr", label: "SDM & Payroll" },
  { id: "procurement", label: "Pengadaan & Pembelian" },
  { id: "inventory", label: "Inventaris & Gudang" },
  { id: "sales", label: "Penjualan & CRM" },
  { id: "project", label: "Proyek & Lapangan" },
  { id: "manufacturing", label: "Manufaktur & Produksi" },
  { id: "governance", label: "Tata Kelola & Alur Kerja" },
] as const;

export const ERP_MODULE_CATALOG: ErpModule[] = [
  // 1. Keuangan & Akuntansi (Finance & Accounting)
  {
    id: "mod-gl",
    name: "Buku Besar & Jurnal Otomatis",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "General Ledger real-time, pencatatan ayat jurnal otomatis dari transaksi harian, dan Chart of Accounts (COA) hierarkis.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-ar-invoicing",
    name: "Manajemen Piutang & Faktur Penjualan",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Penerbitan faktur tagihan pelanggan, pemantauan umur piutang (Aging AR), dan pencatatan pembayaran cicilan/pelunasan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-ap-bills",
    name: "Manajemen Hutang & Tagihan Vendor",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Pencatatan tagihan tagihan masuk dari pemasok, jadwal jatuh tempo pembayaran (Aging AP), dan rekonsiliasi bukti potong.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-financial-reports",
    name: "Laporan Keuangan Terpadu",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Laporan Laba Rugi, Neraca Keuangan, Arus Kas (Metode Langsung & Tidak Langsung), dan laporan perubahan ekuitas.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-bank-reconciliation",
    name: "Rekonsiliasi Bank Otomatis",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Penyelarasan mutasi rekening koran bank dengan catatan kas internal untuk mencegah selisih pembukuan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-fixed-assets",
    name: "Manajemen Aset Tetap & Depresiasi",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Pencatatan aset perusahaan, perhitungan beban penyusutan otomatis garis lurus/saldo menurun, dan nilai sisa buku.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-tax-indonesia",
    name: "Kalkulasi Pajak & Ekspor e-Faktur (PPN/PPh)",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Perhitungan otomatis PPN 11%/12%, bukti potong PPh 23/Final, serta ekspor skema file CSV e-Faktur DJP resmi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },

  // 2. SDM & Penggajian (HRM & Payroll)
  {
    id: "mod-employee-database",
    name: "Database Karyawan & Kontrak Kerja",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Pusat data induk profil pegawai, struktur jabatan, riwayat kepangkatan, dan masa berlaku kontrak kerja.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-payroll-id",
    name: "Penggajian Otomatis (Payroll Indonesia)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Kalkulasi gaji pokok, tunjangan, lembur, serta pemotongan otomatis PPh 21 (TER terbaru) dan BPJS Ketenagakerjaan/Kesehatan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-leave-attendance",
    name: "Manajemen Cuti, Izin & Lembur",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Alur pengajuan cuti tahunan, izin sakit, dan persetujuan lembur staf langsung dari gawai dengan verifikasi atasan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-mobile-gps-attendance",
    name: "Presensi Mobile Berbasis Radius GPS",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Absensi kehadiran harian tim lapangan dan proyek dengan validasi titik koordinat GPS dan foto verifikasi (anti fake-GPS).",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-claims-reimbursement",
    name: "Klaim Biaya Operasional (Reimbursement)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Pengajuan klaim bensin, akomodasi, dan konsumsi lapangan dengan unggah foto struk serta alur persetujuan bagian keuangan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-employee-portal-ess",
    name: "Portal Mandiri Karyawan (Employee Self-Service)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Akses gawai mandiri untuk karyawan: unduh slip gaji digital terenkripsi, cek sisa kuota cuti, dan pembaruan data profil.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-kpi-performance",
    name: "Manajemen Kinerja & Penilaian KPI",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Penyusunan target indikator kinerja utama (KPI) bertingkat, evaluasi performa kerja berkala, dan penilaian 360 derajat.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 3. Pengadaan & Pembelian (Procurement & Purchasing)
  {
    id: "mod-purchase-request",
    name: "Permintaan Pembelian (Purchase Requisition)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Formulir permintaan barang dari staf kantor atau lapangan dengan alur persetujuan kepala departemen sebelum PO diterbitkan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-purchase-order",
    name: "Pesanan Pembelian (Purchase Order / PO)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Penerbitan dokumen PO resmi dengan syarat pembayaran, jadwal kirim, dan pengiriman otomatis via PDF/Email ke pemasok.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-vendor-management",
    name: "Manajemen & Evaluasi Kinerja Vendor",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Database profil rekanan pemasok, daftar harga rujukan (price list), dan riwayat ketepatan waktu pengiriman barang.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-3way-matching",
    name: "Pencocokan 3-Arah (3-Way Matching)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Verifikasi otomatis kesesuaian antara jumlah di PO, surat jalan penerimaan gudang (GRN), dan tagihan invoice dari vendor.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },

  // 4. Inventaris & Pergudangan (Inventory & SCM)
  {
    id: "mod-multi-warehouse",
    name: "Manajemen Multi-Gudang & Multi-Lokasi",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pengelolaan stok tersebar di berbagai gudang utama, gudang proyek lapangan, maupun armada transit.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-stock-movement",
    name: "Mutasi Stok, Transfer & Stock Opname",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Perekaman mutasi barang masuk/keluar, transfer antar cabang, dan penyesuaian selisih fisik saat stock opname periodik.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-reorder-alerts",
    name: "Aturan Pemesanan Ulang & Safety Stock",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pemberitahuan otomatis saat stok material menipis mencapai titik batas minimum aman guna mencegah kehabisan barang.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-batch-serial",
    name: "Pelacakan Batch, Expired & Nomor Seri",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pengendalian barang berdasarkan lot produksi, tanggal kedaluwarsa (FEFO/FIFO), dan serial number unit peralatan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-barcode-qr",
    name: "Pemindaian Barcode & Kode QR",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pencetakan label dan pemindaian cepat menggunakan kamera gawai atau scanner barcode saat penerimaan barang.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 5. Penjualan & CRM (Sales & Customer Management)
  {
    id: "mod-crm-leads",
    name: "Manajemen Prospek & Saluran Penjualan (CRM)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Pelacakan alur prospek calon klien dari tahap kontak awal, negosiasi penawaran, hingga kesepakatan final (deal closed).",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-quotation-so",
    name: "Penawaran Harga (Quotation) & Sales Order",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Pembuatan surat penawaran harga resmi dengan sekali klik yang langsung dapat dikonversi menjadi Sales Order (SO).",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-pos-retail",
    name: "Kasir Digital Multi-Outlet (Point of Sale)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Sistem kasir cepat untuk gerai ritel atau toko cabang, mendukung pembayaran tunai/QRIS dan integrasi stok kasir.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-sales-commission",
    name: "Kalkulasi Komisi Sales & Target Tim",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Perhitungan otomatis komisi perwakilan penjualan berdasarkan pencapaian target omzet atau margin laba transaksi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-whatsapp-omnichannel",
    name: "Integrasi WhatsApp Business API & Notifikasi",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Kirim tagihan invoice, konfirmasi pembayaran, dan pembaruan status pengiriman langsung ke WhatsApp pelanggan secara otomatis.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-helpdesk-tickets",
    name: "Helpdesk & Tiket Layanan Pelanggan",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Sentralisasi tiket keluhan pelanggan, Service Level Agreement (SLA) waktu respon, dan eskalasi otomatis ke tim terkait.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-pos-shift-cashier",
    name: "Manajemen Shift Kasir & Laci Kas (Cash Drawer)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Rekonsiliasi modal awal kasir, pencatatan kas masuk/keluar harian, dan verifikasi selisih fisik saat pergantian shift.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 6. Proyek & Lapangan (Project & Field Operations)
  {
    id: "mod-project-wbs",
    name: "Manajemen Proyek & Tahapan Milestone",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Struktur rincian kerja (WBS), penetapan manajer proyek, penjadwalan fase pekerjaan, dan penugasan tim pelaksana.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-rab-construction",
    name: "RAB & Kontrol Biaya Proyek (Kurva S)",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Perencanaan Rencana Anggaran Biaya baseline, pemantauan pengeluaran upah/alat, dan grafik Kurva S progres fisik vs biaya.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-site-daily-log",
    name: "Log Harian Lapangan & Foto Progres",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Pelaporan harian kondisi cuaca, jumlah tukang aktif, utilisasi alat, kendala lapangan, dan dokumentasi foto real-time.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-subcon-registry",
    name: "Registri & Evaluasi Subkontraktor",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Perekaman data mandor/subkon, Surat Perintah Kerja (SPK), progres penagihan termin (opname), dan retensi garansi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-field-service-order",
    name: "Perintah Kerja Servis Lapangan (Work Order)",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Penugasan teknisi servis lapangan, jadwal kunjungan berkala, pencatatan suku cadang terpakai, dan tanda tangan klien.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 7. Manufaktur & Produksi (Manufacturing & MRP)
  {
    id: "mod-bill-of-materials",
    name: "Formula Resep & Bill of Materials (BOM)",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Definisi struktur bahan baku bertingkat (multi-level BOM), takaran komponen, dan estimasi biaya standar produksi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-production-order",
    name: "Perintah Kerja Produksi & Penjadwalan",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Penerbitan Surat Perintah Kerja produksi (SPKP), alokasi bahan baku dari gudang, dan pemantauan output hasil jadi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-quality-control",
    name: "Kontrol Kualitas (QC Inspection)",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Pemeriksaan standar mutu bahan baku masuk (incoming QC) serta pengujian produk sebelum masuk ke gudang barang jadi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-preventive-maintenance",
    name: "Perawatan Mesin & Aset Produksi",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Jadwal pemeliharaan preventif mesin pabrik atau alat operasional, riwayat servis suku cadang, dan pencatatan jam kerja mesin.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 8. Tata Kelola, Dokumen & Alur Kerja (Governance & Workflows)
  {
    id: "mod-approval-engine",
    name: "Mesin Alur Persetujuan Bertingkat",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Konfigurasi alur verifikasi dokumen transaksi (PR, PO, Pembayaran, Cuti) berdasarkan nominal dan hirarki manajerial.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-audit-trail-sec",
    name: "Jejak Audit (Audit Trail) & Log Keamanan",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Perekaman jejak digital tidak terhapus untuk setiap pembuatan, perubahan, persetujuan, maupun pembatalan data transaksi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-document-archive",
    name: "Manajemen Dokumen & Arsip Digital",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Penyimpanan digital terenkripsi untuk berkas kontrak, scan nota, gambar teknik, dan sertifikasi operasional.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-custom-integration-api",
    name: "Integrasi API Terbuka & Webhook Kustom",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Konektor data terbuka untuk sinkronisasi dengan sistem legacy, platform perbankan, payment gateway, atau e-commerce.",
    status: "custom",
    statusLabel: "Pengembangan Kustom",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-multi-branch-holding",
    name: "Konsolidasi Multi-Cabang & Holding",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Struktur multi-entitas anak perusahaan dengan pembukuan terpisah serta laporan konsolidasi grup usaha otomatis.",
    status: "custom",
    statusLabel: "Pengembangan Kustom",
    includedIn: ["custom"],
  },
];
