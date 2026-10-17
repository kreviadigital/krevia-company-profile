"use client";

import React from "react";

export function WorkProcess() {
  const steps = [
    {
      number: "1",
      title: "Konsultasi",
      desc: "Kami pahami kendala, target, dan anggaran Anda.",
    },
    {
      number: "2",
      title: "Perancangan",
      desc: "Alur dan desain disusun, lalu disetujui bersama.",
    },
    {
      number: "3",
      title: "Pengembangan",
      desc: "Dibangun bertahap, progres dilaporkan berkala.",
    },
    {
      number: "4",
      title: "Peluncuran",
      desc: "Pelatihan tim dan pendampingan setelah berjalan.",
    },
  ];

  return (
    <section id="process" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-10 sm:mb-12">
          Cara kami bekerja.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((st) => (
            <div key={st.number} className="space-y-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#D4A373]">
                {st.number}
              </span>

              <h3 className="text-xl font-bold text-[#0D1829] pt-1">
                {st.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
