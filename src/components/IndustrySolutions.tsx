"use client";

import React from "react";

export function IndustrySolutions() {
  const industries = [
    {
      title: "Hotel & penginapan",
      featured: true,
      problem: "Reservasi dari chat dan telepon bentrok, kamar kosong tidak terpantau.",
      solution: "Satu sistem reservasi, status kamar real-time, laporan okupansi harian.",
    },
    {
      title: "Bengkel",
      featured: false,
      problem: "Riwayat servis tercecer di nota.",
      solution: "Catatan per kendaraan, stok suku cadang, pengingat servis berkala.",
    },
    {
      title: "UMKM & retail",
      featured: false,
      problem: "Stok dan penjualan dicatat tangan.",
      solution: "Kasir digital sederhana dan website profil usaha yang terjangkau.",
    },
  ];

  return (
    <section id="solutions" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-8 sm:mb-12">
          Solusi untuk bisnis lokal.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
                ind.featured
                  ? "bg-[#0D1829] text-white shadow-xl border border-slate-800"
                  : "bg-white text-slate-800 shadow-sm border border-slate-200/90"
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold leading-tight mb-6 ${
                    ind.featured ? "text-white" : "text-[#0D1829]"
                  }`}
                >
                  {ind.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p
                      className={`text-xs font-semibold tracking-wider uppercase mb-1 ${
                        ind.featured ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Masalah
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        ind.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {ind.problem}
                    </p>
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold tracking-wider uppercase mb-1 ${
                        ind.featured ? "text-[#D4A373]" : "text-[#0D1829]"
                      }`}
                    >
                      Solusi
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        ind.featured
                          ? "text-white font-medium"
                          : "text-slate-700 font-medium"
                      }`}
                    >
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
