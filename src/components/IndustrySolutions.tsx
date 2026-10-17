"use client";

import React from "react";

export function IndustrySolutions() {
  return (
    <section id="solutions" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-8 sm:mb-12">
          Solusi untuk bisnis lokal.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Hotel & Penginapan (Featured Deep Navy Card) */}
          <div className="bg-[#0D1829] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800 transition-transform duration-200 hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-bold leading-tight mb-6">
                Hotel & <br />
                penginapan
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1.5">
                    Masalah
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Reservasi dari chat dan telepon bentrok, kamar kosong tidak terpantau.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#D4A373] uppercase mb-1.5">
                    Solusi
                  </p>
                  <p className="text-sm text-white font-medium leading-relaxed">
                    Satu sistem reservasi, status kamar real-time, laporan okupansi harian.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Bengkel (White Card) */}
          <div className="bg-white text-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm border border-slate-200/90 transition-transform duration-200 hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1829] leading-tight mb-6">
                Bengkel
              </h3>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Masalah:</strong> riwayat servis tercecer di nota.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Solusi:</strong> catatan per kendaraan, stok suku cadang, pengingat servis berkala.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: UMKM & retail (White Card) */}
          <div className="bg-white text-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm border border-slate-200/90 transition-transform duration-200 hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1829] leading-tight mb-6">
                UMKM & retail
              </h3>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Masalah:</strong> stok dan penjualan dicatat tangan.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Solusi:</strong> kasir digital sederhana dan website profil usaha yang terjangkau.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
