"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    { label: "Solusi ERP", href: "#construction-erp" },
    { label: "Keunggulan", href: "#why-krevia" },
    { label: "Cara Kerja", href: "#how-we-work" },
    { label: "Harga", href: "#pricing" },
    { label: "Layanan Web", href: "#services" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <Link href="/" className="shrink-0 flex items-center group py-1" aria-label="Beranda Krevia Digital">
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigasi Utama">
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
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => onNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white text-sm font-semibold transition-all duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24D6B0]"
            >
              <span>Konsultasi Sekarang</span>
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2.5" aria-label="Navigasi Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#101D35] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#101D35] text-white text-sm font-bold shadow-sm"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowUpRight className="w-4 h-4 text-[#24D6B0]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
