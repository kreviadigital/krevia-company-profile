"use client";

import React from "react";

export function ServicesBento() {
  const services = [
    {
      number: "01",
      title: "Custom Software",
      description:
        "Aplikasi web dan mobile yang dibuat mengikuti cara kerja bisnis Anda, bukan sebaliknya. Kasir, reservasi, stok, dan dasbor laporan.",
    },
    {
      number: "02",
      title: "System Integration",
      description:
        "Pembayaran, stok, dan akuntansi yang saling terhubung. Data mengalir otomatis, tidak perlu input dua kali.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Riset kebutuhan pengguna, wireframe, dan prototipe. Tampilan yang bisa dipakai staf baru dalam sehari.",
    },
    {
      number: "04",
      title: "Digitalisasi Proses Bisnis",
      description:
        "Memetakan alur kerja manual lalu mengubahnya menjadi formulir dan pencatatan digital, lengkap dengan pelatihan tim.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#F2F4F8] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xs">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-8 sm:mb-12">
          Empat hal yang kami <br className="hidden sm:inline" />
          kerjakan.
        </h2>

        <div className="divide-y divide-slate-200/90">
          {services.map((item) => (
            <div
              key={item.number}
              className="py-7 sm:py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start gap-3 sm:gap-6 lg:gap-10"
            >
              <span className="text-xl sm:text-2xl font-bold text-[#D4A373] shrink-0 md:w-12">
                {item.number}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0D1829] md:w-72 shrink-0">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
