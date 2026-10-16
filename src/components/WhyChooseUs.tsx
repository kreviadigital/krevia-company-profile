"use client";

import React from "react";
import { Lock, Clock, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function WhyChooseUs() {
  const points = [
    {
      icon: Users,
      title: "Tim Responsif di Pekanbaru",
      desc: "Kemudahan koordinasi langsung tanpa terhalang birokrasi. Diskusi teknis cepat, tatap muka, dan pemahaman mendalam atas karakter bisnis lokal maupun nasional.",
    },
    {
      icon: Lock,
      title: "100% Kepemilikan Kode (No Lock-in)",
      desc: "Seluruh kode sumber, dokumentasi arsitektur, dan hak kekayaan intelektual sepenuhnya menjadi milik Anda. Anda memegang kendali penuh tanpa keterikatan lisensi.",
    },
    {
      icon: Clock,
      title: "Estimasi Jelas & Tepat Waktu",
      desc: "Kami menerapkan roadmap kerja bertahap (milestone-based) yang transparan, memastikan setiap modul fungsional selesai sesuai kesepakatan waktu yang direncanakan.",
    },
    {
      icon: ShieldCheck,
      title: "Keamanan Standar Industri",
      desc: "Perlindungan data perusahaan melalui enkripsi modern, proteksi celah keamanan ketat, dan Role-Based Access Control (RBAC) untuk menjaga kerahasiaan bisnis Anda.",
    },
  ];

  return (
    <section id="why-us" className="scroll-mt-20 py-24 sm:py-32 relative overflow-hidden bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50/60 px-3.5 py-1.5 rounded-full border border-blue-100">
            Nilai Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Mengapa Krevia Digital Pilihan Tepat?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami memprioritaskan ketenangan pikiran Anda dengan memberikan transparansi proses, keamanan sistem, dan hasil kerja yang nyata.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <SpotlightCard
                key={idx}
                className="flex flex-col justify-between p-7 sm:p-8 bg-white border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#101D35] group-hover:bg-[#101D35] group-hover:text-white flex items-center justify-center mb-6 shadow-xs transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#101D35] mb-2.5 group-hover:text-[#1D4ED8] transition-colors">{pt.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8]">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Jaminan Standar Krevia</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
