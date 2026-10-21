"use client";

import React, { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Clock, 
  Wrench, 
  Users, 
  Briefcase,
  Search,
  X,
  SlidersHorizontal
} from "lucide-react";
import { 
  PRICING_PLANS, 
  ERP_MODULE_CATALOG, 
  ERP_MODULE_CATEGORIES, 
  PricingPlan,
  ModuleStatus,
  ErpModule
} from "@/lib/pricingData";
import { SITE_CONFIG } from "@/lib/constants";
import { handleNavClick } from "@/lib/smoothScroll";

export function PricingSection() {
  const [showModuleCatalog, setShowModuleCatalog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter modules based on search query, category, and status
  const filteredModules: ErpModule[] = ERP_MODULE_CATALOG.filter((mod) => {
    const matchesCategory = 
      selectedCategory === "all" || mod.categorySlug === selectedCategory;
    const matchesStatus = 
      selectedStatus === "all" || mod.status === selectedStatus;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = 
      !q || 
      mod.name.toLowerCase().includes(q) ||
      mod.category.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q);
    return matchesCategory && matchesStatus && matchesQuery;
  });

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSearchQuery("");
  };

  const hasActiveFilters = 
    selectedCategory !== "all" || selectedStatus !== "all" || searchQuery.trim() !== "";

  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-[#24D6B0]" />
            <span>Skema Langganan Modular</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            ERP yang Menyesuaikan dengan Bisnis Anda.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Mulai dari modul yang dibutuhkan bisnis Anda saat ini, lalu kembangkan sistem seiring pertumbuhan operasional tanpa harus mengganti seluruh platform.
          </p>
        </div>

        {/* 3 Subscription Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isFeatured = plan.featured;
            const waUrl = SITE_CONFIG.getWhatsappUrl(plan.prefilledMessage);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                  isFeatured
                    ? "bg-[#101D35] text-white shadow-2xl border-2 border-[#24D6B0]/60 ring-4 ring-[#24D6B0]/10"
                    : "bg-white text-slate-800 shadow-sm border border-slate-200/90"
                }`}
              >
                {/* Featured Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#24D6B0] text-[#101D35] text-xs font-extrabold tracking-wide shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <h3 className={`text-2xl font-black ${isFeatured ? "text-white" : "text-[#101D35]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isFeatured ? "text-slate-300" : "text-slate-500"}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-2 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isFeatured ? "text-white" : "text-[#101D35]"}`}>
                        {plan.priceFormatted}
                      </span>
                      <span className={`text-xs font-semibold ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.billingPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Usage Limits Box */}
                  <div className={`p-4 rounded-2xl text-xs space-y-2 border ${
                    isFeatured 
                      ? "bg-[#182844] border-slate-700/80 text-slate-200" 
                      : "bg-[#F4F7FB] border-slate-200/80 text-slate-700"
                  }`}>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#24D6B0] shrink-0" />
                      <span className="font-semibold">{plan.userLimit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#24D6B0] shrink-0" />
                      <span>{plan.projectLimit}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1 border-t border-slate-200/40 dark:border-slate-700/60 text-slate-400">
                      <span>{plan.storageLimit}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? "text-[#24D6B0]" : "text-slate-500"}`}>
                      Fitur & Layanan Termasuk:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isFeatured ? "text-[#24D6B0]" : "text-emerald-600"}`} />
                          <span className={isFeatured ? "text-slate-300" : "text-slate-700"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-8 mt-6 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                      isFeatured
                        ? "bg-[#24D6B0] hover:bg-[#1AB895] text-[#101D35] shadow-lg shadow-[#24D6B0]/20"
                        : "bg-[#101D35] hover:bg-[#1C2E4F] text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-center mt-2.5 text-slate-400">
                    Konsultasi langsung tanpa komitmen awal
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modular Customization Policy Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35]">
              <ShieldCheck className="w-4 h-4 text-[#24D6B0]" />
              <span>Transparansi Implementasi & Kustomisasi</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Semua paket langganan mencakup infrastruktur cloud terkelola dan pembaruan sistem. Anda dapat mengeksplorasi seluruh katalog 44+ modul kami untuk merancang konfigurasi yang paling tepat bagi bisnis Anda.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModuleCatalog(!showModuleCatalog)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#101D35] text-xs sm:text-sm font-bold transition-colors cursor-pointer shrink-0"
          >
            <span>{showModuleCatalog ? "Tutup Katalog Modul" : `Lihat Katalog Lengkap (${ERP_MODULE_CATALOG.length} Modul)`}</span>
            {showModuleCatalog ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Module Catalog Breakdown */}
        {showModuleCatalog && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md space-y-6 animate-in fade-in duration-200">
            
            {/* Catalog Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101D35]">
                  Daftar & Status Kesiapan {ERP_MODULE_CATALOG.length} Modul Krevia ERP
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Kami secara transparan memisahkan modul yang telah siap digunakan, modul dalam perencanaan, dan modul pengembangan kustom.
                </p>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-[#101D35] hover:text-rose-600 underline cursor-pointer shrink-0"
                >
                  Reset Semua Filter
                </button>
              )}
            </div>

            {/* Search and Status Filters Toolbar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari modul (misal: General Ledger, PPh 21, PO, Kurva S, POS)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#24D6B0]/40 focus:border-[#24D6B0]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label="Hapus pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 shrink-0">
                <span className="text-xs text-slate-400 font-semibold mr-1 hidden sm:inline">Status:</span>
                {[
                  { id: "all", label: "Semua Status" },
                  { id: "available", label: "Tersedia" },
                  { id: "planned", label: "Direncanakan" },
                  { id: "custom", label: "Kustom" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedStatus(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedStatus === s.id
                        ? "bg-[#101D35] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {ERP_MODULE_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = cat.id === "all"
                  ? ERP_MODULE_CATALOG.length
                  : ERP_MODULE_CATALOG.filter((m) => m.categorySlug === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#24D6B0] text-[#101D35]"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-xs font-semibold ${
                      isSelected ? "bg-[#101D35]/15 text-[#101D35]" : "bg-slate-200 text-slate-500"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>
                Menampilkan <strong className="text-slate-800">{filteredModules.length}</strong> dari {ERP_MODULE_CATALOG.length} modul
              </span>
              {hasActiveFilters && (
                <span className="text-[#24D6B0] font-semibold">Filter Aktif</span>
              )}
            </div>

            {/* Table of Modules */}
            {filteredModules.length > 0 ? (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-xs tracking-wider">
                      <th className="py-3 px-4">Nama Modul</th>
                      <th className="py-3 px-4">Kategori</th>
                      <th className="py-3 px-4">Deskripsi Kapabilitas</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-right">Paket</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredModules.map((mod) => {
                      let badgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
                      let IconComponent = Check;
                      if (mod.status === "planned") {
                        badgeClass = "bg-amber-50 text-amber-700 border-amber-200";
                        IconComponent = Clock;
                      } else if (mod.status === "custom") {
                        badgeClass = "bg-purple-50 text-purple-700 border-purple-200";
                        IconComponent = Wrench;
                      }

                      return (
                        <tr key={mod.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-[#101D35] whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <span>{mod.name}</span>
                              {mod.isHighlight && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#24D6B0]" title="Pilar Utama" />
                              )}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                            {mod.category}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 min-w-[260px] leading-relaxed">
                            {mod.description}
                          </td>
                          <td className="py-3.5 px-4 text-center whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeClass}`}>
                              <IconComponent className="w-3 h-3" />
                              <span>{mod.statusLabel}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap font-medium text-slate-700">
                            {mod.includedIn.map((p) => p.toUpperCase()).join(", ")}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200 space-y-3">
                <p className="text-sm font-semibold text-slate-700">
                  Tidak ada modul yang cocok dengan kriteria pencarian &quot;{searchQuery}&quot;.
                </p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Perusahaan Anda membutuhkan alur kerja atau modul yang belum tercantum? Tim perekayasa Krevia dapat mengembangkannya secara kustom.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Reset Filter
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="px-4 py-2 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Diskusikan Modul Kustom
                  </a>
                </div>
              </div>
            )}

            {/* Catalog Drawer Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
              <span>Modul dapat dikombinasikan dan ditambahkan sesuai skala bisnis Anda tanpa migrasi ulang database.</span>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="font-bold text-[#101D35] underline hover:text-[#24D6B0] transition-colors"
              >
                Diskusikan Kebutuhan Modul Bisnis Anda &rarr;
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
