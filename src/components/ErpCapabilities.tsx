"use client";

import React, { useState } from "react";
import { 
  Coins, 
  Users, 
  Truck, 
  Warehouse, 
  TrendingUp, 
  FolderKanban, 
  Factory, 
  ShieldCheck, 
  Check, 
  Clock, 
  Wrench, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Building2,
  FileSpreadsheet,
  BadgeCheck
} from "lucide-react";
import { 
  ERP_SUITE_METADATA, 
  ERP_MODULE_CATALOG, 
  ErpSuiteMetadata, 
  ErpModule,
  ModuleStatus
} from "@/lib/pricingData";
import { handleNavClick } from "@/lib/smoothScroll";

// Map suite ID to Lucide icon component
const SUITE_ICONS: Record<string, React.ElementType> = {
  finance: Coins,
  hr: Users,
  procurement: Truck,
  inventory: Warehouse,
  sales: TrendingUp,
  project: FolderKanban,
  manufacturing: Factory,
  governance: ShieldCheck,
};

export function ErpCapabilities() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>("finance");

  const activeSuite: ErpSuiteMetadata = 
    ERP_SUITE_METADATA.find((s) => s.id === activeSuiteId) || ERP_SUITE_METADATA[0];

  const activeModules: ErpModule[] = ERP_MODULE_CATALOG.filter(
    (m) => m.categorySlug === activeSuiteId
  );

  const SuiteIcon = SUITE_ICONS[activeSuite.id] || Layers;

  // Module status styling helper
  const getStatusBadge = (status: ModuleStatus, label: string) => {
    if (status === "available") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <Check className="w-3 h-3 text-emerald-600" />
          <span>{label}</span>
        </span>
      );
    }
    if (status === "planned") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>{label}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
        <Wrench className="w-3 h-3 text-purple-600" />
        <span>{label}</span>
      </span>
    );
  };

  return (
    <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-[#24D6B0]" />
            <span>Mesin ERP Modular Terintegrasi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Ekosistem 44+ Modul Bisnis. Selengkap Odoo & Mekari, Fleksibel untuk Anda.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Krevia menghadirkan 8 rumpun kapabilitas enterprise siap pakai—mulai dari akuntansi dan pajak, payroll SDM, manajemen pengadaan, inventaris multi-gudang, CRM & kasir POS, hingga manufaktur dan operasional proyek lapangan. Aktifkan modul yang Anda perlukan sekarang, kembangkan bertahap tanpa kendala migrasi ulang.
          </p>
        </div>

        {/* Enterprise Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101D35]">44+ Modul Terintegrasi</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                8 pilar modular saling terhubung tanpa silo data antar divisi.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101D35]">Kepatuhan Fiskal RI</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Faktur Pajak PPN 11/12%, PPh 21 skema TER 2024, dan BPJS.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <BadgeCheck className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101D35]">Tanpa Vendor Lock-in</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Arsitektur terbuka dengan akses basis data & ekspor data lengkap.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101D35]">Pendampingan Lokal</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Tim implementasi & perekayasa sistem berbasis di Pekanbaru, Riau.
              </p>
            </div>
          </div>
        </div>

        {/* 8-Suite Interactive Navigation Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pilih Rumpun Modul Enterprise:
            </h3>
            <span className="text-xs text-slate-500">
              {ERP_MODULE_CATALOG.length} Total Modul Terpetakan
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {ERP_SUITE_METADATA.map((suite) => {
              const Icon = SUITE_ICONS[suite.id] || Layers;
              const isActive = suite.id === activeSuiteId;
              const moduleCount = ERP_MODULE_CATALOG.filter((m) => m.categorySlug === suite.id).length;

              return (
                <button
                  key={suite.id}
                  type="button"
                  onClick={() => setActiveSuiteId(suite.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#101D35] text-white shadow-md shadow-[#101D35]/15 ring-2 ring-[#24D6B0]/50"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#24D6B0]" : "text-slate-400"}`} />
                  <span>{suite.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {moduleCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Suite Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md space-y-8">
          
          {/* Active Suite Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F4F7FB] border border-slate-200 flex items-center justify-center text-[#101D35] shrink-0">
                <SuiteIcon className="w-7 h-7 text-[#101D35]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-2xl font-black text-[#101D35]">
                    {activeSuite.name}
                  </h3>
                  <span className="px-3 py-0.5 rounded-full bg-[#24D6B0]/15 text-[#101D35] text-xs font-extrabold tracking-wide">
                    {activeSuite.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {activeSuite.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end justify-center shrink-0">
              <span className="text-xs text-slate-400 font-medium">Standar Tolok Ukur:</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {activeSuite.odooMekariEquivalent}
              </span>
            </div>
          </div>

          {/* Module Cards Grid in Active Suite */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeModules.map((module) => {
              const isHighlight = module.isHighlight;

              return (
                <div
                  key={module.id}
                  className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-200 hover:shadow-sm ${
                    isHighlight
                      ? "bg-[#F9FBFC] border-slate-300 ring-1 ring-slate-200"
                      : "bg-white border-slate-200/90"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#101D35] leading-snug">
                        {module.name}
                      </h4>
                      {isHighlight && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#24D6B0]/20 text-[#101D35] text-xs font-extrabold">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                          <span>Pilar</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>{getStatusBadge(module.status, module.statusLabel)}</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Paket: {module.includedIn.join(", ")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Suite Footer with Highlights */}
          <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Fitur Kunci:
              </span>
              {activeSuite.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#24D6B0]" />
                  <span>{highlight}</span>
                </span>
              ))}
            </div>

            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#101D35] hover:text-[#24D6B0] transition-colors shrink-0"
            >
              <span>Lihat Paket & Harga Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Engineering Transparency & Custom Module Advisory Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-100/80 border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-base font-bold text-[#101D35]">
              Butuh Modul Khusus atau Integrasi dengan Sistem yang Sudah Berjalan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Krevia tidak membatasi bisnis Anda pada modul kaku. Jika perusahaan Anda memiliki mesin pabrik khusus, sistem timbangan armada, integrasi marketplace, atau portal perbankan lokal, tim perekayasa kami siap membangun modul kustom yang menyatu ke dalam satu database terpusat.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Konsultasi Modul Kustom</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#101D35] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Katalog Semua Modul</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
