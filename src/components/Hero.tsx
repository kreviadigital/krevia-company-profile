"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Workflow,
  Layers,
  Cpu,
  MapPin,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "100% Hak Milik Klien",
      desc: "Source code & data sepenuhnya milik Anda tanpa lock-in.",
    },
    {
      icon: Zap,
      title: "Eksekusi Cepat & Terukur",
      desc: "Metodologi agile dengan pemantauan progress berkala.",
    },
    {
      icon: MapPin,
      title: "Mitra Lokal Terpercaya",
      desc: "Tim berbasis di Pekanbaru, responsif dan siap berkolaborasi.",
    },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-subtle-grid">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/15 to-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Location & Credibility Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-500/5 mb-8">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Startup Teknologi Pekanbaru, Riau • Melayani Seluruh Indonesia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
            Mitra Rekayasa Perangkat Lunak &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Transformasi Digital
            </span>{" "}
            Bisnis Anda
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Krevia Digital membantu korporasi, instansi, dan bisnis modern merancang custom software berstandar enterprise, mengintegrasikan sistem multi-platform, dan mengotomatisasi alur operasional.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Konsultasikan Kebutuhan Proyek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-colors"
            >
              <span>Jelajahi 4 Layanan Utama</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase Card: Modern Digital Architecture Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-blue-950/5 p-6 sm:p-10 relative overflow-hidden">
            {/* Top Showcase Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Krevia Digital Enterprise Suite
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                  Ekosistem Solusi Digital Terpadu
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Sistem Siap Skala
                </span>
              </div>
            </div>

            {/* 4 Pillars Interactive Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 hover:border-blue-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Custom Software</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Web & mobile app bespoke berkinerja tinggi sesuai alur bisnis spesifik.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-white border border-indigo-100 hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">System Integration</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Sinkronisasi ERP, CRM, payment gateway, dan database secara real-time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50/70 to-white border border-sky-100 hover:border-sky-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">UI/UX Design</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Riset pengalaman pengguna, wireframing, dan desain Figma berstandar global.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-white border border-emerald-100 hover:border-emerald-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Process Digitization</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Automasi alur kerja, paperless approval, dan dashboard monitoring bisnis.
                </p>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{h.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
