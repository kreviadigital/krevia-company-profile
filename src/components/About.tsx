"use client";

import React from "react";
import { MapPin, ShieldCheck, Users, Zap, CheckCircle2, Award } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function About() {
  const values = [
    {
      icon: Users,
      title: "Kolaborasi Langsung & Transparan",
      desc: "Anda berkomunikasi langsung dengan software engineer dan arsitek sistem kami di Pekanbaru. Tanpa rantai perantara, memastikan setiap detail teknis dipahami secara presisi.",
    },
    {
      icon: ShieldCheck,
      title: "100% Hak Cipta & Kepemilikan Sistem",
      desc: "Seluruh kode sumber, basis data, dan aset desain adalah milik penuh Anda. Kami menjamin kebebasan Anda tanpa jebakan lisensi terikat atau ketergantungan sepihak.",
    },
    {
      icon: Zap,
      title: "Arsitektur Skalabel Berstandar Enterprise",
      desc: "Kami menerapkan standar kode yang bersih, terdokumentasi, dan modular, sehingga sistem siap menampung lonjakan traffic dan penambahan fitur bisnis di masa mendatang.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Tentang Krevia Digital
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Startup Teknologi dari Pekanbaru untuk Kemajuan Bisnis Indonesia
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Krevia Digital hadir sebagai mitra rekayasa perangkat lunak dan transformasi digital strategis bagi perusahaan regional di Sumatra maupun nasional. Kami memadukan kedekatan komunikasi lokal di Pekanbaru dengan standar eksekusi teknologi berstandar internasional.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bagi kami, setiap sistem yang dibangun harus memberikan dampak nyata—memangkas biaya operasional, mengeliminasi pekerjaan repetitif, dan memberikan visibilitas penuh bagi para pemimpin bisnis untuk mengambil keputusan dengan data yang akurat.
            </p>

            {/* Quick Stat Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">100%</span>
                <p className="text-xs font-semibold text-slate-700 mt-1">Milik Klien</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600">4 Pilar</span>
                <p className="text-xs font-semibold text-slate-700 mt-1">Layanan Utama</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Pekanbaru</span>
                <p className="text-xs font-semibold text-slate-700 mt-1">Pusat Tim</p>
              </div>
            </div>
          </div>

          {/* Right Column: Values Cards */}
          <div className="lg:col-span-6 space-y-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
