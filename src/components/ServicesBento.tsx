"use client";

import React, { useState } from "react";
import {
  Code2,
  Workflow,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Server,
  Box,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Badge } from "./ui/Badge";

export function ServicesBento() {
  const [activeFilter, setActiveFilter] = useState<"all" | "engineering" | "operations">("all");

  const services = [
    {
      id: "custom-software",
      tag: "[01 // CORE_ENGINEERING]",
      title: "Custom Software Development",
      category: "engineering",
      icon: Code2,
      span: "lg:col-span-7",
      spotlightColor: "rgba(6, 182, 212, 0.16)",
      problem:
        "SaaS kaku dan template CMS instan gagal menampung kompleksitas proses bisnis Anda, membatasi skalabilitas, dan memicu biaya langganan per-user yang mencekik.",
      architecture:
        "Arsitektur cloud-native modular (Next.js, Node.js/Python/Go), skema database teroptimasi (PostgreSQL), dan scalable REST/gRPC APIs yang siap menangani volume data tinggi.",
      deliverables: [
        "100% Hak Cipta & Source Code Repository Klien",
        "Production-Grade Docker Container & CI/CD Pipeline",
        "Dokumentasi API Standar OpenAPI / Swagger",
        "Automated Unit & Integration Test Suites",
      ],
      techChips: ["Next.js", "TypeScript", "Python / Go", "PostgreSQL", "Docker"],
    },
    {
      id: "system-integration",
      tag: "[02 // DATA_INTEROPERABILITY]",
      title: "System Integration",
      category: "engineering",
      icon: Workflow,
      span: "lg:col-span-5",
      spotlightColor: "rgba(59, 130, 246, 0.16)",
      problem:
        "Silo data antar departemen—ERP, CRM, payment gateway, dan legacy database tidak terhubung, memaksa tim melakukan input data ganda yang rawan human-error.",
      architecture:
        "Event-driven webhook pipelines, middleware connectors, dan idempotent transaction processors yang menyinkronkan data antar-sistem secara instan dan aman.",
      deliverables: [
        "Live Synchronization Engine antar Database & Platform",
        "Automated Error Alerting & Dead-Letter Queue Monitoring",
        "Webhook Verification & Idempotency Handlers",
        "Integrasi Payment Gateway, Logistik, atau ERP Perusahaan",
      ],
      techChips: ["REST / GraphQL", "RabbitMQ", "Webhook Brokers", "ERP Sync"],
    },
    {
      id: "ui-ux-design",
      tag: "[03 // PRODUCT_EXPERIENCE]",
      title: "UI/UX Design & Prototyping",
      category: "operations",
      icon: Layers,
      span: "lg:col-span-5",
      spotlightColor: "rgba(168, 85, 247, 0.16)",
      problem:
        "Mockup visual yang sekadar cantik di gambar namun pecah saat di-coding, tata letak membingungkan operator internal, dan menghambat konversi transaksi klien.",
      architecture:
        "Sistem desain modular berbasis Design Tokens (sinkron 1:1 antara Figma dan Tailwind/CSS variables), information architecture berorientasi alur kerja, dan pengujian kegunaan.",
      deliverables: [
        "Interactive Clickable Prototype (Figma Enterprise)",
        "Tokenized Component Library & Guidelines",
        "User Journey Mapping & Information Architecture Blueprint",
        "Laporan Usability Testing & Audit Aksesibilitas (WCAG)",
      ],
      techChips: ["Figma Enterprise", "Design Tokens", "Wireframing", "WCAG 2.1"],
    },
    {
      id: "business-process-digitization",
      tag: "[04 // OPERATIONAL_EFFICIENCY]",
      title: "Business Process Digitization",
      category: "operations",
      icon: Cpu,
      span: "lg:col-span-7",
      spotlightColor: "rgba(16, 185, 129, 0.16)",
      problem:
        "Alur approval dokumen fisik memakan waktu berhari-hari, form kertas tercecer tanpa jejak audit, dan laporan operasional lambat disajikan ke level manajemen.",
      architecture:
        "State-machine workflow automation, Role-Based Access Control (RBAC) bertingkat, dan digital signature log untuk memastikan akuntabilitas operasional.",
      deliverables: [
        "Portal Operasional & Dashboard Monitoring Real-Time",
        "Paperless Approval Workflow dengan Notifikasi Otomatis",
        "Jejak Audit Digital Terverifikasi (Immutable Audit Logs)",
        "Reporting Tools dengan Export Data Terenkripsi",
      ],
      techChips: ["State Machine Engines", "RBAC Security", "Audit Trail", "Analytics"],
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeFilter === "all") return true;
    return s.category === activeFilter;
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070A11] bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/80 text-cyan-400 font-mono-code text-xs mb-4">
            <span className="text-cyan-500 font-bold">// 01</span>
            <span>CORE_SERVICES_BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            4 Pilar Layanan Tanpa Slop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Setiap pilar layanan dirancang dengan spesifikasi arsitektur teruji untuk memecahkan bottleneck bisnis nyata. Tidak ada template rapuh.
          </p>

          {/* Filter Pills */}
          <div className="mt-7 inline-flex items-center p-1 rounded-lg bg-slate-900 border border-slate-800 font-mono-code text-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "all" ? "bg-slate-800 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              ALL_PILLARS ({services.length})
            </button>
            <button
              onClick={() => setActiveFilter("engineering")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "engineering" ? "bg-slate-800 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              SOFTWARE & INTEGRATION
            </button>
            <button
              onClick={() => setActiveFilter("operations")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeFilter === "operations" ? "bg-slate-800 text-cyan-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              UI/UX & DIGITIZATION
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <SpotlightCard
                key={svc.id}
                spotlightColor={svc.spotlightColor}
                className={`${svc.span} flex flex-col justify-between group`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-xs text-slate-400">{svc.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>

                  {/* Problem & Architecture Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-900/30">
                      <div className="flex items-center gap-1.5 text-rose-400 font-mono-code text-xs font-semibold mb-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>BOTTLENECK BISNIS YANG DISELESAIKAN:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {svc.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-mono-code text-xs font-semibold mb-1">
                        <Server className="w-3.5 h-3.5" />
                        <span>PENDEKATAN ARSITEKTUR TEKNIS:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {svc.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <p className="font-mono-code text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Tangible Deliverables Klien:
                    </p>
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.techChips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                  >
                    <span>KONSULTASI_LAYANAN</span>
                    <ChevronRight className="w-3.5 h-3.5" />
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
