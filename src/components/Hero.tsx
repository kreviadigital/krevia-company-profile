"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, HardHat, TrendingUp, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"project" | "budget" | "procurement">("project");

  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-300/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#24D6B0]" />
              <span>Sistem Bisnis Terintegrasi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101D35] leading-[1.12]">
              Hubungkan Seluruh Operasional Bisnis ke Dalam Satu Sistem.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Krevia Digital membangun solusi ERP modular untuk membantu bisnis menghubungkan alur kerja, meningkatkan visibilitas operasional, dan mengelola informasi secara terpadu.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-lg shadow-sm cursor-pointer group"
              >
                <span>Lihat Paket Harga</span>
                <ArrowRight className="w-4 h-4 text-[#24D6B0] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#101D35] font-semibold text-sm sm:text-base border border-slate-300/80 transition-colors cursor-pointer"
              >
                Konsultasi Kebutuhan Bisnis
              </a>
            </div>

            {/* Credibility Micro-Bar */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#24D6B0]" />
                <span>Logika operasional teruji lapangan</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#24D6B0]" />
                <span>Arsitektur modular fleksibel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Carefully Composed ERP Interface Preview */}
          <div className="lg:col-span-6 relative">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-[#24D6B0]/15 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Interactive ERP Preview Window */}
            <div className="relative bg-[#101D35] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-700/80">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 ml-2">
                    Krevia ERP • Ruang Kerja Operasional
                  </span>
                </div>
                
                {/* Status indicator: Explicitly labelled illustrative concept */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#24D6B0]/15 text-[#24D6B0] text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#24D6B0] animate-pulse" />
                  Konsep Ilustratif
                </span>
              </div>

              {/* Module Switcher Tabs */}
              <div className="flex items-center gap-2 mb-5 p-1 bg-[#0B1322] rounded-xl border border-slate-800 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab("project")}
                  className={`flex-1 py-1.5 px-3 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === "project"
                      ? "bg-[#1C2E4F] text-white font-bold shadow-xs border border-slate-700/80"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Operasional Proyek
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("budget")}
                  className={`flex-1 py-1.5 px-3 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === "budget"
                      ? "bg-[#1C2E4F] text-white font-bold shadow-xs border border-slate-700/80"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  RAB & Biaya
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("procurement")}
                  className={`flex-1 py-1.5 px-3 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === "procurement"
                      ? "bg-[#1C2E4F] text-white font-bold shadow-xs border border-slate-700/80"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Pengadaan
                </button>
              </div>

              {/* Tab 1: Project Operations */}
              {activeTab === "project" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-[#182844] rounded-2xl p-4 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Proyek Aktif</p>
                      <h4 className="text-base font-bold text-white mt-0.5">Menara Niaga Sudirman Tahap 2</h4>
                      <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                        <span>Pekerjaan Struktur Lantai 4</span>
                        <span>•</span>
                        <span className="text-[#24D6B0]">Sesuai Jadwal</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-[#24D6B0]">68%</span>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Total Progres</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Milestone: Pengecoran Plat & Kolom</span>
                      <span className="font-semibold text-slate-200">92 / 120 Hari</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-[#24D6B0] rounded-full w-[68%]" />
                    </div>
                  </div>

                  {/* Recent Site Activity */}
                  <div className="bg-[#0B1322] rounded-xl p-3.5 border border-slate-800/80 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <HardHat className="w-3.5 h-3.5 text-[#24D6B0]" />
                        Log Harian Lapangan #142
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" /> Hari ini, 14:30
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Pengecoran beton ready-mix zona B selesai tanpa kendala. Uji kuat tekan silinder telah diambil; 24 pekerja aktif di lokasi.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: RAB & Cost Control */}
              {activeTab === "budget" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#182844] rounded-2xl p-4 border border-slate-700/60">
                      <p className="text-xs text-slate-400 font-medium">Anggaran Rencana (RAB)</p>
                      <p className="text-lg sm:text-xl font-bold text-white mt-1">Rp 4.850.000.000</p>
                      <p className="text-xs text-slate-400 mt-1">Baseline Disetujui</p>
                    </div>
                    <div className="bg-[#182844] rounded-2xl p-4 border border-slate-700/60">
                      <p className="text-xs text-slate-400 font-medium">Realisasi Biaya Saat Ini</p>
                      <p className="text-lg sm:text-xl font-bold text-white mt-1">Rp 3.120.000.000</p>
                      <p className="text-xs text-[#24D6B0] mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Efisiensi -3.4% dari Target
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0B1322] rounded-xl p-3.5 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">Sewa Alat Berat & Crane</span>
                      <span className="text-slate-300 font-bold">94% terserap</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[94%]" />
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-300 font-medium">Pengadaan Besi Beton & Material Pokok</span>
                      <span className="text-slate-300 font-bold">61% terserap</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#24D6B0] rounded-full w-[61%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Procurement & Inventory */}
              {activeTab === "procurement" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-[#182844] rounded-2xl p-3.5 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Pesanan Pembelian #PO-2026-089</p>
                      <p className="text-xs text-slate-300">500 Sak Semen Portland Tipe I</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#24D6B0]/15 text-[#24D6B0] text-xs font-bold">
                      <CheckCircle2 className="w-3 h-3" /> Terkirim
                    </span>
                  </div>

                  <div className="bg-[#182844] rounded-2xl p-3.5 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Permintaan Pengadaan #REQ-2026-114</p>
                      <p className="text-xs text-slate-300">Besi Ulir 12mm (8 Ton)</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold">
                      <Clock className="w-3 h-3" /> Menunggu Persetujuan PM
                    </span>
                  </div>

                  <div className="bg-[#0B1322] rounded-xl p-3 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Saldo Gudang Material Proyek:</span>
                    <span className="text-slate-200 font-semibold">1.240 Item Terekonsiliasi</span>
                  </div>
                </div>
              )}

              {/* Sub-card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Alur Data Lapangan ke Kantor</span>
                <span className="text-[#24D6B0] font-semibold">Sinkronisasi Real-Time</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
