"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  Layers, 
  Server, 
  BarChart3, 
  Smartphone, 
  Building2,
  CheckCircle2,
  Activity,
  X,
  ShieldCheck,
  Cpu,
  MessageCircle,
  Database,
  Lock,
  Workflow,
  Sparkles
} from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { SpotlightCard } from "./ui/SpotlightCard";

interface ProjectItem {
  id: string;
  category: "all" | "erp" | "analytics" | "mobile" | "gov";
  categoryLabel: string;
  title: string;
  clientType: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  mockup: {
    status: string;
    headline: string;
    subline: string;
    statLeft: { label: string; val: string };
    statRight: { label: string; val: string };
  };
  deepDive: {
    problemStatement: string;
    architectureTitle: string;
    architecturePoints: { title: string; desc: string }[];
    securityHighlights: string[];
    businessImpact: string;
  };
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "erp" | "analytics" | "mobile" | "gov">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const projects: ProjectItem[] = [
    {
      id: "omnilogix-erp",
      category: "erp",
      categoryLabel: "Supply Chain & ERP",
      title: "OmniLogix: Cloud ERP & Multi-Warehouse",
      clientType: "Distributor Regional",
      description: "Sistem rantai pasok dan inventori multi-gudang terdistribusi dengan sinkronisasi batch barcode real-time untuk memangkas selisih stok fisik.",
      metrics: [
        { value: "+72%", label: "Kecepatan Order" },
        { value: "< 150ms", label: "Latensi Antar-Gudang" },
      ],
      tags: ["Next.js", "PostgreSQL", "Go", "Docker"],
      mockup: {
        status: "5 Gudang Aktif • Real-time Sync",
        headline: "Sinkronisasi Inventori Batch #TX-9042",
        subline: "Stok fisik cabang Riau & Sumbar terverifikasi",
        statLeft: { label: "Discrepancy", val: "0.0%" },
        statRight: { label: "Throughput", val: "1.2k req/s" },
      },
      deepDive: {
        problemStatement:
          "Distributor regional dengan 5 cabang gudang di Riau & Sumatera Barat mengalami selisih stok fisik 4-7% setiap bulan akibat input manual berbasis spreadsheet dan delay rekonsiliasi data hingga 24 jam.",
        architectureTitle: "Event-Driven Ledger & Multi-Node Synchronization",
        architecturePoints: [
          {
            title: "Atomic Mutation Ledger (PostgreSQL 16)",
            desc: "Setiap mutasi stok dicatat sebagai transaksi buku besar atomik dengan row-level lock untuk mencegah race condition saat pemindaian serentak dari 5 gudang.",
          },
          {
            title: "Go Microservice & Redis Sync Engine",
            desc: "Pipeline pemrosesan mutasi barang berbasis Go mampu menangani lonjakan throughput hingga 1.200 req/s dengan latensi sub-150ms.",
          },
          {
            title: "Automated Barcode Batch Ingestion",
            desc: "Integrasi langsung ke scanner mobile dengan validasi checksum instan untuk mengeliminasi kekeliruan varian SKU barang.",
          },
        ],
        securityHighlights: [
          "Role-Based Access Control (RBAC) ketat per gudang & supervisor",
          "Enkripsi data transit TLS 1.3 & token sesi aman",
          "Immutable Audit Log untuk verifikasi audit kepatuhan berkala",
        ],
        businessImpact:
          "Menghilangkan selisih stok fisik (0.0% discrepancy), memangkas siklus pemenuhan order pelanggan sebesar 72%, serta menghemat ratusan jam kerja rekonsiliasi manual setiap bulan.",
      },
    },
    {
      id: "finpulse-analytics",
      category: "analytics",
      categoryLabel: "Corporate Governance",
      title: "FinPulse: Multi-Entity Executive Intelligence",
      clientType: "Holding 8 Unit Usaha",
      description: "Platform konsolidasi data kasir dan arus kas otomatis multi-perusahaan dengan audit trail terverifikasi dan dashboard margin laba per detik.",
      metrics: [
        { value: "5 Menit", label: "Waktu Rekonsiliasi" },
        { value: "100%", label: "Kepatuhan Audit" },
      ],
      tags: ["TypeScript", "FastAPI", "ClickHouse", "Tailwind"],
      mockup: {
        status: "8 Unit Bisnis Terkonsolidasi",
        headline: "Audit Rekonsiliasi Arus Kas Otomatis",
        subline: "Integrasi mutasi perbankan & POS cabang",
        statLeft: { label: "Efisiensi Waktu", val: "94%" },
        statRight: { label: "Audit Match", val: "100%" },
      },
      deepDive: {
        problemStatement:
          "Holding dengan 8 unit usaha kesulitan mengawasi likuiditas harian dan potensi kebocoran dana karena masing-masing cabang menggunakan software kasir dan rekening bank yang terpisah.",
        architectureTitle: "Columnar OLAP Storage & Automated Ingestion Pipeline",
        architecturePoints: [
          {
            title: "Universal Ingestion Pipeline (FastAPI & Python)",
            desc: "Menerima dan menormalisasi mutasi rekening perbankan serta webhook POS cabang ke skema data keuangan tunggal terstandarisasi.",
          },
          {
            title: "ClickHouse Columnar Database",
            desc: "Mengagregasi puluhan juta baris histori transaksi keuangan dalam hitungan milidetik untuk query margin laba per detik tanpa membebani database transaksional.",
          },
          {
            title: "Automated Cash Discrepancy Detection",
            desc: "Sistem mendeteksi deviasi secara otomatis antara setoran kasir fisik dan mutasi rekening koran harian.",
          },
        ],
        securityHighlights: [
          "Enkripsi AES-256 pada level kolom rekening bank",
          "Zero-Knowledge View untuk staf non-eksekutif",
          "Two-Factor Authentication (2FA) pada portal pengeluaran kas",
        ],
        businessImpact:
          "Waktu konsolidasi laporan keuangan holding terpangkas drastis dari 3 hari menjadi 5 menit, dengan tingkat kepatuhan audit mencapai 100%.",
      },
    },
    {
      id: "lapanganku-pos",
      category: "mobile",
      categoryLabel: "FMCG Field Mobility",
      title: "Lapanganku: Offline-First Mobile Sales POS",
      clientType: "Grosir & Distribusi FMCG",
      description: "Aplikasi mobile tim kanvaser lapangan dengan basis data lokal terenkripsi, toleran terhadap blank spot seluler, dan cetak struk Bluetooth instan.",
      metrics: [
        { value: "0 Data Loss", label: "Toleransi Blank Spot" },
        { value: "+45%", label: "Kunjungan Toko / Hari" },
      ],
      tags: ["React Native", "SQLite", "Node.js", "WebSockets"],
      mockup: {
        status: "Mode Offline Aktif • Auto-Sync",
        headline: "Faktur Penjualan Toko #INV-4418",
        subline: "Verifikasi koordinat GPS kunjungan valid",
        statLeft: { label: "Nota Tercetak", val: "Instant" },
        statRight: { label: "Data Integrity", val: "100%" },
      },
      deepDive: {
        problemStatement:
          "Tenaga sales kanvaser di daerah pelosok Sumatera kerap kehilangan sinyal 4G/3G, mengakibatkan transaksi penjualan tertunda, nota fisik tercecer, dan stok kanvas tidak sinkron.",
        architectureTitle: "Offline-First SQLite Engine & Two-Way Sync Protocol",
        architecturePoints: [
          {
            title: "Local Embedded SQLite Storage",
            desc: "Seluruh data katalog produk, tier harga grosir, dan riwayat piutang toko tersimpan lokal di perangkat, memungkinkan transaksi berjalan lancar tanpa sinyal.",
          },
          {
            title: "Deterministic Conflict Resolution",
            desc: "Saat mendeteksi kembali jaringan internet, background sync engine mengirimkan batch faktur dengan algoritma timestamp-vector untuk mencegah duplikasi order.",
          },
          {
            title: "Native Bluetooth Thermal Driver",
            desc: "Pencetakan nota fisik langsung ke printer thermal portabel melalui protokol Bluetooth BLE tanpa bergantung pada server internet.",
          },
        ],
        securityHighlights: [
          "Enkripsi database lokal (SQLCipher) untuk proteksi bila gawai hilang",
          "Validasi anti-spoofing koordinat GPS pada saat check-in toko",
          "PIN otorisasi limit kredit toko per kanvaser",
        ],
        businessImpact:
          "Menghilangkan risiko kehilangan data (0 data loss), serta meningkatkan kapasitas kunjungan toko harian sales kanvaser sebesar 45%.",
      },
    },
    {
      id: "silayanan-gov",
      category: "gov",
      categoryLabel: "Public Sector Portal",
      title: "SiLayanan: Single-Window Licensing Portal",
      clientType: "Instansi Layanan Publik",
      description: "Transformasi proses perizinan manual menjadi portal satu pintu dengan e-Sign bersertifikat dan notifikasi tiket otomatis via WhatsApp.",
      metrics: [
        { value: "2 Hari", label: "Durasi Terbit Izin" },
        { value: "99.98%", label: "SLA Uptime Sistem" },
      ],
      tags: ["Next.js", "PostgreSQL", "MinIO", "Redis"],
      mockup: {
        status: "Tanda Tangan Digital Sah (e-Sign)",
        headline: "Penerbitan Dokumen Izin Usaha #SK-819",
        subline: "Alur verifikasi multi-tier 100% paperless",
        statLeft: { label: "Pemrosesan", val: "2 Hari" },
        statRight: { label: "SLA Uptime", val: "99.98%" },
      },
      deepDive: {
        problemStatement:
          "Pemohon izin usaha harus melewati 5 loket tatap muka dengan tumpukan map fisik, memakan waktu hingga 14 hari kerja dan minimnya transparansi status bagi pemohon.",
        architectureTitle: "State-Machine Workflow Engine & Tamper-Proof Digital Verification",
        architecturePoints: [
          {
            title: "Finite State-Machine Engine",
            desc: "Berkas permohonan bergerak secara terprogram antar-meja verifikator dengan SLA countdown ketat yang dapat dipantau langsung oleh pimpinan dinas.",
          },
          {
            title: "Certified e-Sign & Secure Object Storage",
            desc: "Surat Keputusan (SK) dibubuhi sertifikat digital resmi X.509 dan disimpan di storage terenkripsi MinIO yang terlindungi dari manipulasi berkas.",
          },
          {
            title: "Dynamic QR Verification",
            desc: "Masyarakat dan petugas pemeriksa dapat memvalidasi keaslian dokumen SK izin cukup dengan memindai kode QR dinamis melalui kamera smartphone.",
          },
        ],
        securityHighlights: [
          "Sertifikasi tanda tangan digital anti-pemalsuan",
          "Watermark dinamis pada dokumen pratinjau berkas",
          "Audit log terdistribusi yang tidak dapat dimanipulasi",
        ],
        businessImpact:
          "Durasi pemrosesan izin terpangkas drastis dari 14 hari menjadi 2 hari kerja, dengan sistem beroperasi stabil pada SLA Uptime 99.98%.",
      },
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="scroll-mt-20 py-24 sm:py-32 relative overflow-hidden bg-[#FAFCFF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50/60 px-3.5 py-1.5 rounded-full border border-blue-100">
            Portofolio & Studi Kasus
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Bukti Kinerja & Rekayasa Solusi Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Klik pada setiap solusi untuk membedah tantangan operasional, arsitektur teknis, dan alasan pemilihan teknologi yang kami gunakan.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { key: "all", label: "Semua Solusi" },
              { key: "erp", label: "Supply Chain & ERP" },
              { key: "analytics", label: "Financial Intelligence" },
              { key: "mobile", label: "Field Mobility & POS" },
              { key: "gov", label: "Public Sector Portal" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.key
                    ? "bg-[#101D35] text-white shadow-sm shadow-[#101D35]/20"
                    : "bg-white text-slate-600 hover:text-[#101D35] hover:bg-slate-100/80 border border-slate-200/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <SpotlightCard
              key={item.id}
              className="flex flex-col justify-between p-7 sm:p-9 border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:border-slate-300 transition-all group"
            >
              <div>
                {/* Visual Minimalist Software UI Preview */}
                <div 
                  onClick={() => setSelectedProject(item)}
                  className="rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-5 mb-6 text-white overflow-hidden shadow-inner cursor-pointer group-hover:border-slate-700 transition-colors"
                >
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{item.mockup.status}</span>
                    </div>
                  </div>

                  {/* Mockup Data Display */}
                  <div className="space-y-1">
                    <div className="text-sm sm:text-base font-bold text-slate-100 tracking-tight">
                      {item.mockup.headline}
                    </div>
                    <div className="text-xs text-slate-400">
                      {item.mockup.subline}
                    </div>
                  </div>

                  {/* Micro Metric Telemetry */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-800/80 text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                        {item.mockup.statLeft.label}
                      </span>
                      <span className="text-slate-200 font-bold text-sm">
                        {item.mockup.statLeft.val}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
                        {item.mockup.statRight.label}
                      </span>
                      <span className="text-slate-200 font-bold text-sm">
                        {item.mockup.statRight.val}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta & Title */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.clientType}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(item)}
                  className="text-xl sm:text-2xl font-bold text-[#101D35] mb-2.5 group-hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Minimalist 2-Metric Strip */}
                <div className="grid grid-cols-2 gap-4 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className={idx !== 0 ? "border-l border-slate-200 pl-4" : ""}>
                      <span className="text-base sm:text-lg font-extrabold text-[#101D35] block">
                        {metric.value}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 block">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags & Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100/90 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#101D35] transition-colors cursor-pointer py-1"
                  >
                    <span>Bedah Solusi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Technical Deep-Dive Modal */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          {/* Backdrop with Blur */}
          <div 
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-[#0A1120]/75 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/70">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101D35] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedProject.clientType}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
              {/* Problem Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101D35] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Tantangan Bisnis Klien</span>
                </div>
                <p className="p-4 rounded-2xl bg-red-50/50 border border-red-100 text-slate-700 text-sm sm:text-base">
                  {selectedProject.deepDive.problemStatement}
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101D35] uppercase tracking-wider">
                  <Workflow className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Pendekatan Rekayasa Arsitektur</span>
                </div>
                <h4 className="text-lg font-bold text-[#101D35]">
                  {selectedProject.deepDive.architectureTitle}
                </h4>

                <div className="space-y-3">
                  {selectedProject.deepDive.architecturePoints.map((pt, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <p className="font-bold text-[#101D35] text-sm">
                        {pt.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & Governance */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101D35] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Tata Kelola Keamanan & Integritas</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.deepDive.securityHighlights.map((sec, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium flex items-start gap-2 shadow-xs">
                      <Lock className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact Box */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101D35] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Dampak Nyata bagi Operasional</span>
                </div>
                <p className="text-sm font-semibold text-[#101D35]">
                  {selectedProject.deepDive.businessImpact}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                Tutup
              </button>

              <a
                href={`https://wa.me/6282283000000?text=${encodeURIComponent(
                  `Halo Krevia Digital, saya membaca studi kasus arsitektur "${selectedProject.title}" di website Anda dan ingin berkonsultasi mengenai solusi serupa untuk kebutuhan bisnis kami.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan Solusi Serupa</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
