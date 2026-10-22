"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";
import { SITE_CONFIG } from "@/lib/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-8 pt-4 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto bg-[#101D35] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Beranda Krevia Digital">
              <Image
                src="/logo-horizontal.png"
                alt="Krevia Digital"
                width={375}
                height={90}
                className="h-8 w-auto object-contain brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Solusi platform ERP modular untuk bisnis modern. Menghubungkan alur operasional, anggaran, dan visibilitas proyek ke dalam satu sistem terpadu.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Bangun Lebih Cerdas. Beroperasi Lebih Baik.
            </p>
          </div>

          {/* Col 2: ERP Solutions */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#24D6B0]">
              Produk & Navigasi
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="#construction-erp"
                  onClick={(e) => handleNavClick(e, "#construction-erp")}
                  className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Konstruksi ERP</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#24D6B0]/15 text-[#24D6B0] font-bold">Akses Awal</span>
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  onClick={(e) => handleNavClick(e, "#capabilities")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kapabilitas Modul
                </a>
              </li>
              <li>
                <a
                  href="#why-krevia"
                  onClick={(e) => handleNavClick(e, "#why-krevia")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mengapa Krevia
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  onClick={(e) => handleNavClick(e, "#how-we-work")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Alur Implementasi
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, "#pricing")}
                  className="hover:text-white transition-colors cursor-pointer font-semibold text-white"
                >
                  Paket Langganan ERP
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Website Company Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#24D6B0]">
              Kontak Resmi
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#24D6B0] shrink-0" />
                <a
                  href={SITE_CONFIG.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#24D6B0] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#24D6B0] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {SITE_CONFIG.location}
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@{SITE_CONFIG.instagramUsername}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Krevia Digital. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi & Tata Kelola Data
            </Link>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="hover:text-white transition-colors"
            >
              Kembali ke Atas ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
