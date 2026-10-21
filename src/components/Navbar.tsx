"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solusi ERP", href: "#solutions" },
    { label: "Konstruksi ERP", href: "#construction-erp" },
    { label: "Kapabilitas", href: "#capabilities" },
    { label: "Paket Harga", href: "#pricing" },
    { label: "Mengapa Krevia", href: "#why-krevia" },
    { label: "Cara Kerja", href: "#how-we-work" },
    { label: "Tentang", href: "#about" },
  ];

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    handleNavClick(e, href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center group py-1" aria-label="Beranda Krevia Digital">
            <Image
              src="/logo-horizontal.png"
              alt="Krevia Digital"
              width={375}
              height={90}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-[#101D35] transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24D6B0] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => onNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white text-xs sm:text-sm font-semibold transition-all duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24D6B0]"
            >
              <span>Konsultasi ERP</span>
              <ArrowUpRight className="w-4 h-4 text-[#24D6B0]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24D6B0]"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 px-4 bg-white/98 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="block py-2.5 text-base font-semibold text-slate-700 hover:text-[#101D35] border-b border-slate-100 last:border-b-0 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#101D35] text-white text-sm font-semibold hover:bg-[#1C2E4F] transition-colors"
              >
                <span>Konsultasi ERP</span>
                <ArrowUpRight className="w-4 h-4 text-[#24D6B0]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
