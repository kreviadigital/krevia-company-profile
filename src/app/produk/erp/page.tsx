import React from "react";
import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ErpHero } from "@/components/erp/ErpHero";
import { IndustrySolutions } from "@/components/erp/IndustrySolutions";
import { ErpCapabilities } from "@/components/erp/ErpCapabilities";
import { ErpClosing } from "@/components/erp/ErpClosing";
import { PricingSection } from "@/components/pricing/PricingSection";

export const metadata: Metadata = {
  title: "Katalog Platform ERP Modular Indonesia | Krevia Digital",
  description:
    "Eksplorasi 44 modul ERP modular terpadu Krevia Digital. Didesain untuk menghubungkan alur operasional proyek, akuntansi, supply chain, dan SDM bisnis Indonesia tanpa vendor lock-in.",
  keywords: [
    "ERP Modular Indonesia",
    "Software ERP Pekanbaru",
    "Sistem ERP Konstruksi",
    "ERP Distribusi dan Manufaktur",
    "Aplikasi Akuntansi Bisnis",
    "Krevia Digital ERP",
  ],
};

/**
 * Katalog platform ERP.
 *
 * Susunan dan alasannya:
 *
 *   ErpHero            terang — Navbar transparan berteks gelap butuh latar terang
 *   IndustrySolutions  terang — masalah/solusi per sektor, dibaca sebagai daftar
 *   ErpCapabilities    NAVY   — jantung halaman; notch di kedua tepi
 *   PricingSection     terang — lembah di antara dua blok gelap
 *   ErpClosing         NAVY   — menyambung langsung ke Footer navy
 *
 * Tiap section memakai `id` yang stabil: `#capabilities` dan `#pricing` dipakai
 * tautan di dalam halaman (dan dipanggil `handleNavClick` untuk gulir halus),
 * `#solusi` untuk navigasi bagian di hero.
 *
 * Catatan penting: `<main>` sengaja TIDAK diberi `z-*` maupun `overflow-hidden`.
 * `globals.css` menaikkan `main` ke `z-10` saat footer reveal aktif, dan notch
 * tepi bawah `ErpCapabilities` bergantung pada `z-20` miliknya sendiri supaya
 * bisa menimpa section berikutnya — keduanya rusak kalau ada stacking context
 * tambahan di antaranya.
 */
export default function ErpProductPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <ErpHero />
      <IndustrySolutions />
      <ErpCapabilities />
      <PricingSection />
      <ErpClosing />
      <FloatingWhatsApp />
    </main>
  );
}
