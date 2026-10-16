"use client";

import React from "react";
import {
  Code2,
  Workflow,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function ServicesBento() {
  const services = [
    {
      id: "custom-software",
      number: "01",
      title: "Custom Software Development",
      category: "Rekayasa Perangkat Lunak",
      icon: Code2,
      gradient: "from-blue-600 to-indigo-600",
      description:
        "Pengembangan aplikasi web, mobile, dan sistem backend enterprise bespoke yang dirancang khusus dari nol sesuai alur kerja unik bisnis Anda tanpa batasan template.",
      features: [
        "Aplikasi Web Skala Enterprise (Next.js, React, Node.js)",
        "Aplikasi Mobile Multiplatform (iOS & Android via Flutter)",
        "Arsitektur Cloud-Native Backend & REST/GraphQL API Skalabel",
        "Optimasi Basis Data Relasional & Keamanan Standar Tinggi",
      ],
      impact: "Eliminasi biaya langganan SaaS yang mahal dan miliki 100% kontrol atas sistem Anda.",
    },
    {
      id: "system-integration",
      number: "02",
      title: "System Integration & APIs",
      category: "Interoperabilitas Data",
      icon: Workflow,
      gradient: "from-indigo-600 to-violet-600",
      description:
        "Menghubungkan berbagai platform terfragmentasi, API pihak ketiga, ERP, CRM, dan sistem database warisan (legacy) menjadi satu ekosistem data yang terpadu dan sinkron secara real-time.",
      features: [
        "Integrasi Payment Gateway, Perbankan, & Logistik Nasional",
        "Sinkronisasi Dua Arah Data ERP (SAP/Odoo), CRM, & POS",
        "Event-Driven Webhook Pipelines & Data Pipeline Otomatis",
        "Modernisasi Sistem Warisan Tanpa Mengganggu Operasional Aktif",
      ],
      impact: "Meniadakan duplikasi input manual antar-divisi dan mempercepat pertukaran data.",
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "UI/UX Design & Prototyping",
      category: "Pengalaman Produk",
      icon: Layers,
      gradient: "from-sky-600 to-blue-600",
      description:
        "Perancangan antarmuka digital berbasis riset mendalam yang memadukan estetika modern, kemudahan navigasi bagi pengguna internal maupun pelanggan, serta konversi bisnis tinggi.",
      features: [
        "Riset Pengguna, User Persona, & Customer Journey Mapping",
        "Interactive Clickable High-Fidelity Prototype (Figma)",
        "Design System Modular & Spesifikasi Token Desain Siap Coding",
        "Pengujian Aksesibilitas (WCAG) & Audit Kegunaan Antarmuka",
      ],
      impact: "Mempercepat adopsi sistem oleh karyawan dan meningkatkan kepuasan pengguna akhir.",
    },
    {
      id: "business-process-digitization",
      number: "04",
      title: "Business Process Digitization",
      category: "Efisiensi Operasional",
      icon: Cpu,
      gradient: "from-teal-600 to-emerald-600",
      description:
        "Mentransformasi proses bisnis manual, formulir kertas, dan birokrasi approval bertingkat menjadi alur kerja digital otomatis yang terstruktur, cepat, dan memiliki jejak audit transparan.",
      features: [
        "Automasi Alur Persetujuan Bertingkat (Multi-level Approval)",
        "Portal Operasional & Dashboard Monitoring Kinerja Real-Time",
        "Pemberantasan Dokumen Fisik Menuju Sistem Paperless yang Aman",
        "Jejak Audit Digital Terverifikasi & Laporan Analitik Otomatis",
      ],
      impact: "Memangkas waktu approval dari hitungan hari menjadi menit dengan visibilitas penuh.",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Layanan Utama Kami
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Solusi Rekayasa Digital dari Hulu ke Hilir
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami mengombinasikan keahlian rekayasa perangkat lunak, pemahaman alur bisnis yang mendalam, dan desain intuitif untuk menghadirkan sistem yang benar-benar memajukan bisnis Anda.
          </p>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <SpotlightCard
                key={svc.id}
                className="flex flex-col justify-between p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${svc.gradient} text-white flex items-center justify-center shadow-lg shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {svc.number}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                    {svc.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Cakupan & Kapabilitas:
                    </p>
                    {svc.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Highlight Box */}
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 mb-6">
                    <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-900 font-medium leading-relaxed">
                      <strong>Manfaat Bisnis:</strong> {svc.impact}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group/link transition-colors"
                  >
                    <span>Konsultasikan Kebutuhan Ini</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
