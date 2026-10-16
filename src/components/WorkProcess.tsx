"use client";

import React from "react";
import { Search, Compass, Code, Rocket, CheckCircle2 } from "lucide-react";

export function WorkProcess() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Analisis",
      desc: "Kami membedah tantangan operasional, kebutuhan sistem, dan target bisnis Anda untuk menyusun ruang lingkup proyek yang jelas dan terukur.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Arsitektur & Desain",
      desc: "Merancang skema database, arsitektur integrasi sistem, dan antarmuka UI/UX interaktif di Figma sebelum baris kode pertama ditulis.",
    },
    {
      step: "03",
      icon: Code,
      title: "Pengembangan & Uji",
      desc: "Pembangunan modul software secara agile, pengujian fungsional dan keamanan menyeluruh demi menjamin sistem bebas hambatan saat rilis.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Peluncuran & Support",
      desc: "Implementasi ke cloud produksi, transfer pengetahuan ke tim internal Anda, serta dukungan teknis berkelanjutan pasca-peluncuran.",
    },
  ];

  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50/60 px-3.5 py-1.5 rounded-full border border-blue-100">
            Metodologi Kerja
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Alur Pengerjaan Transparan & Terarah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Setiap proyek dikelola dengan metodologi terstruktur untuk memastikan hasil selesai tepat waktu, sesuai anggaran, dan memenuhi ekspektasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#101D35] group-hover:bg-[#1D4ED8] text-white flex items-center justify-center shadow-md shadow-[#101D35]/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#101D35] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Tahap #{i + 1} Tervalidasi</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
