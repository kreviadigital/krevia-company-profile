"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Server, 
  Smartphone, 
  BarChart3, 
  Building2 
} from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

interface CaseStudy {
  id: string;
  category: "all" | "erp" | "analytics" | "mobile" | "gov";
  categoryLabel: string;
  categoryIcon: React.ElementType;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  systemHighlights: string[];
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "erp" | "analytics" | "mobile" | "gov">("all");

  const caseStudies: CaseStudy[] = [
    {
      id: "omnilogix-erp",
      category: "erp",
      categoryLabel: "Supply Chain & Logistik",
      categoryIcon: Server,
      title: "OmniLogix: Multi-Warehouse ERP & Automated Inventory Sync",
      clientType: "Perusahaan Distribusi Komoditas Regional",
      challenge: "Keterlambatan sinkronisasi data antar 5 gudang cabang menyebabkan stock discrepancy 14% dan proses pemenuhan pesanan memakan waktu hingga 48 jam dengan kertas kerja manual.",
      solution: "Membangun sistem ERP cloud terintegrasi dengan arsitektur event-driven, batch-tracking barcode, manajemen armada otomatis, dan rekonsiliasi inventori real-time.",
      metrics: [
        { value: "+72%", label: "Kecepatan Pemenuhan Pesanan" },
        { value: "0%", label: "Selisih Stok Fisik vs Sistem" },
        { value: "< 150ms", label: "Latensi Antar-Cabang" },
      ],
      tags: ["Next.js", "PostgreSQL", "Go / Golang", "Redis", "Docker"],
      systemHighlights: [
        "Sinkronisasi multi-warehouse terdistribusi",
        "Pencatatan mutasi barcode scanner real-time",
        "Audit trail perubahan stok anti-tamper",
      ],
    },
    {
      id: "finpulse-analytics",
      category: "analytics",
      categoryLabel: "Corporate Finance & Holding",
      categoryIcon: BarChart3,
      title: "FinPulse: Multi-Entity Financial Governance & Executive Intelligence",
      clientType: "Grup Usaha Holding Multi-Sektor (8 Unit Bisnis)",
      challenge: "Manajemen eksekutif membutuhkan 12 jam setiap akhir pekan hanya untuk menyusun laporan konsolidasi keuangan dari berbagai database toko dan cabang yang terpisah.",
      solution: "Pengembangan data pipeline otomatis yang mengekstraksi transaksi kasir harian dari 8 unit usaha, mengotomasi rekonsiliasi bank, dan menyajikan dashboard margin laba per detik.",
      metrics: [
        { value: "5 Menit", label: "Waktu Rekonsiliasi Kas (dari 12 Jam)" },
        { value: "100%", label: "Kepatuhan Audit Finansial" },
        { value: "8 Entitas", label: "Terkonsolidasi Otomatis" },
      ],
      tags: ["Next.js", "TypeScript", "Python / FastAPI", "ClickHouse", "TailwindCSS"],
      systemHighlights: [
        "Otomasi rekonsiliasi arus kas harian",
        "Role-based access control (RBAC) granular",
        "Ekspor laporan berstandar akuntansi PSAK",
      ],
    },
    {
      id: "lapanganku-pos",
      category: "mobile",
      categoryLabel: "FMCG & Sales Lapangan",
      categoryIcon: Smartphone,
      title: "Lapanganku: Offline-First Field Mobility & Direct Store Delivery POS",
      clientType: "Distributor FMCG & Grosir Retail",
      challenge: "Ratusan tim kanvaser di wilayah rural sering kehilangan data transaksi order akibat titik blank spot seluler, mengakibatkan double booking dan komplain pelanggan.",
      solution: "Aplikasi mobile sales lapangan berbasis offline-first dengan database lokal terenkripsi, sinkronisasi otomatis background saat internet pulih, serta cetak struk thermal Bluetooth.",
      metrics: [
        { value: "0 Data Hilang", label: "Toleransi Blank Spot Area" },
        { value: "+45%", label: "Volume Kunjungan Toko / Hari" },
        { value: "Instant", label: "Cetak Nota Thermal Lapangan" },
      ],
      tags: ["React Native", "SQLite", "Node.js", "PostgreSQL", "REST & WebSockets"],
      systemHighlights: [
        "Mekanisme antrean offline & conflict resolution",
        "Verifikasi GPS radius saat kunjungan toko",
        "Katalog produk dengan kalkulasi diskon bertingkat",
      ],
    },
    {
      id: "silayanan-gov",
      category: "gov",
      categoryLabel: "Layanan Publik & E-Gov",
      categoryIcon: Building2,
      title: "SiLayanan: Single-Window Licensing & Verification Portal",
      clientType: "Instansi Layanan Publik Terpadu",
      challenge: "Antrean fisik verifikasi dokumen izin usaha memicu keluhan publik dengan waktu proses hingga 14 hari kerja dan resiko human error berkas fisik.",
      solution: "Mendigitalkan seluruh alur perizinan menjadi portal web responsif dengan integrasi e-Sign digital, notifikasi progres via WhatsApp gateway, dan tracking tiket permohonan transparan.",
      metrics: [
        { value: "2 Hari", label: "Rata-rata Terbit Izin (dari 14 Hari)" },
        { value: "99.98%", label: "Uptime Selama Peak Traffic" },
        { value: "100%", label: "Paperless Digital Workflow" },
      ],
      tags: ["Next.js", "PostgreSQL", "MinIO Storage", "Redis Queue", "TailwindCSS"],
      systemHighlights: [
        "Tanda tangan digital tersertifikasi",
        "Notifikasi real-time via WhatsApp bot",
        "Penyimpanan berkas terenkripsi enterprise",
      ],
    },
  ];

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  const handleDiscussSimilar = (e: React.MouseEvent<HTMLAnchorElement>, projectTitle: string) => {
    e.preventDefault();
    smoothScrollTo("#contact", { offset: 80, duration: 1500 });
    window.history.pushState(null, "", "#contact");
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FAFCFF] relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Portofolio & Rekayasa Arsitektur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Studi Kasus Solusi Digital Berkelanjutan
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dari digitalisasi operasional hingga platform cloud enterprise terdistribusi, inilah gambaran standar arsitektur sistem yang kami bangun untuk mengakselerasi performa bisnis mitra.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: "all", label: "Semua Solusi" },
            { key: "erp", label: "Enterprise ERP & Logistik" },
            { key: "analytics", label: "Finance & Analytics" },
            { key: "mobile", label: "Mobile Field POS" },
            { key: "gov", label: "Public Service & E-Gov" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.key
                  ? "bg-[#101D35] text-white shadow-md shadow-[#101D35]/20 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-[#101D35] hover:bg-slate-100/80 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study) => {
            const Icon = study.categoryIcon;
            return (
              <div
                key={study.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Category & Client Type */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                          {study.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {study.clientType}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Full IP Ownership
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#101D35] tracking-tight mt-6 group-hover:text-blue-700 transition-colors">
                    {study.title}
                  </h3>

                  {/* Problem & Solution Comparison */}
                  <div className="mt-5 space-y-3.5 text-sm text-slate-600">
                    <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100/80">
                      <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1">
                        Tantangan Awal:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/80">
                      <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                        Solusi Rekayasa Krevia:
                      </span>
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key System Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Pilar Arsitektur Kunci:
                    </span>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-slate-600">
                      {study.systemHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Metrics, Tech Stack & CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  {/* Measurable ROI Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 text-center">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className={idx !== 0 ? "border-l border-slate-200" : ""}>
                        <div className="text-base sm:text-lg font-black text-[#101D35] tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips & Action Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      onClick={(e) => handleDiscussSimilar(e, study.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-[#101D35] group/link cursor-pointer"
                    >
                      <span>Konsultasikan Kebutuhan Serupa</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101D35]">
                Punya proses bisnis unik yang membutuhkan arsitektur kustom?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Kami siap merancang solusi arsitektur perangkat lunak dari nol sesuai alur kerja eksklusif perusahaan Anda.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact", { offset: 80, duration: 1500 });
              window.history.pushState(null, "", "#contact");
            }}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-[#101D35]/20 transition-all duration-200 cursor-pointer"
          >
            Minta Blueprint Sistem
          </a>
        </div>
      </div>
    </section>
  );
}
