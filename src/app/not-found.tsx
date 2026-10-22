import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ArrowLeft, Layers, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#101D35] flex flex-col justify-between">
      <Navbar />

      <section className="pt-36 pb-20 px-4 sm:px-6 my-auto">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-[#101D35] mx-auto">
            <Compass className="w-8 h-8 text-[#24D6B0]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Error 404 • Halaman Tidak Ditemukan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
              Tautan yang Anda Tuju Tidak Tersedia.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
              Halaman mungkin telah dipindahkan ke struktur rute baru atau alamat URL yang Anda masukkan kurang tepat.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#24D6B0]" />
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              href="/produk/erp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#101D35] font-semibold text-xs sm:text-sm transition-colors"
            >
              <Layers className="w-4 h-4 text-[#24D6B0]" />
              <span>Katalog ERP Modular</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
