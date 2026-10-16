"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Layers, 
  Server, 
  BarChart3, 
  Smartphone, 
  Building2,
  CheckCircle2,
  Activity
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
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "erp" | "analytics" | "mobile" | "gov">("all");

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
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
            Portofolio & Studi Kasus
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Bukti Kinerja Solusi Digital Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ringkasan arsitektur sistem nyata yang kami rancang untuk memecahkan hambatan operasional dan meningkatkan efisiensi bisnis mitra.
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
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-5 mb-6 text-white overflow-hidden shadow-inner">
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

                <h3 className="text-xl sm:text-2xl font-bold text-[#101D35] mb-2.5 group-hover:text-blue-900 transition-colors">
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

              {/* Footer: Tags & Action */}
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

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("#contact", { offset: 80, duration: 1500 });
                    window.history.pushState(null, "", "#contact");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101D35] hover:text-[#1D4ED8] group/link transition-colors cursor-pointer"
                >
                  <span>Bahas Solusi Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
