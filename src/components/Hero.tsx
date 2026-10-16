"use client";

import React, { useState } from "react";
import {
  Terminal,
  ArrowRight,
  Activity,
  Server,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "architecture" | "manifesto">("telemetry");

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden bg-grid">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Engineering Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono-code mb-8 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">Pekanbaru, Riau, ID</span>
            <span className="text-slate-300">|</span>
            <span className="text-sky-700 font-medium">Anti-Slop Software Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Rekayasa Perangkat Lunak & Digitalisasi Sistem Bisnis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Tanpa Kompromi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Krevia Digital membangun software bespoke, integrasi API sistem, dan otomatisasi alur kerja
            yang langsung menyelesaikan bottleneck operasional perusahaan Anda. Tanpa template rapuh, tanpa vendor lock-in.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-mono-code text-xs font-semibold hover:from-sky-500 hover:to-blue-500 shadow-md shadow-sky-600/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>INIT_CONSULTATION()</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-mono-code text-xs font-medium hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-colors"
            >
              <span>VIEW_4_SERVICES //</span>
            </a>
          </div>
        </div>

        {/* Live System Architecture Console (High-Contrast Developer Frame) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-xl border border-slate-800 bg-[#0B1120] shadow-2xl overflow-hidden">
            {/* Console Header Bar */}
            <div className="px-4 py-3 bg-[#0F172A] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono-code text-[11px] text-slate-400">
                  krevia-telemetry // node-pku-01.local
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 font-mono-code text-[11px]">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === "telemetry"
                      ? "bg-slate-800 text-sky-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  system_status.log
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === "architecture"
                      ? "bg-slate-800 text-sky-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  stack_blueprint.json
                </button>
                <button
                  onClick={() => setActiveTab("manifesto")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === "manifesto"
                      ? "bg-slate-800 text-sky-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  anti_slop_rules.md
                </button>
              </div>
            </div>

            {/* Console Body */}
            <div className="p-5 font-mono-code text-xs sm:text-[13px] leading-relaxed bg-[#060911]/95 text-slate-300 overflow-x-auto min-h-[175px]">
              {activeTab === "telemetry" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Activity className="w-4 h-4 shrink-0" />
                    <span>[SYS_ONLINE] 99.98% Service Availability across Client Clusters</span>
                  </div>
                  <div className="text-slate-400 pl-6">
                    <span className="text-slate-500">&gt;</span> REGION: Pekanbaru, Riau, ID (0°32&apos;N 101°27&apos;E)
                  </div>
                  <div className="text-slate-400 pl-6">
                    <span className="text-slate-500">&gt;</span> CORE PILLARS: [01_CustomSoftware, 02_SystemIntegration, 03_UIUXDesign, 04_ProcessDigitization]
                  </div>
                  <div className="text-slate-400 pl-6">
                    <span className="text-slate-500">&gt;</span> DATA INTEGRITY: Idempotent API Pipelines • Full Audit Trails Active
                  </div>
                  <div className="text-sky-400 pl-6 font-semibold">
                    <span className="text-slate-500">&gt;</span> STATUS: Ready for client architecture discovery calls.
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <pre className="text-slate-300">
{`{
  "enterprise_architecture": {
    "frontend": ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    "backend_apis": ["Node.js", "Python / FastAPI", "Go", "REST / gRPC"],
    "persistence": ["PostgreSQL", "Redis", "Document DBs"],
    "cloud_infrastructure": ["Docker Containers", "CI/CD Automations", "VPS / Cloud"],
    "intellectual_property": "100% Client Ownership (Zero Vendor Lock-in)"
  }
}`}
                </pre>
              )}

              {activeTab === "manifesto" && (
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-sky-400 font-bold"># KREVIA DIGITAL ANTI-SLOP MANIFESTO</p>
                  <p className="text-slate-400">1. Kami tidak menjual template generik atau WordPress borongan yang mudah jebol.</p>
                  <p className="text-slate-400">2. Setiap baris kode dirancang untuk menyelesaikan beban kerja operasional spesifik.</p>
                  <p className="text-slate-400">3. Seluruh source code, database schema, dan aset desain adalah hak cipta penuh klien.</p>
                  <p className="text-slate-400">4. Komunikasi langsung dengan lead architect di Pekanbaru tanpa birokrasi sales.</p>
                </div>
              )}
            </div>

            {/* Console Footer Status */}
            <div className="px-4 py-2 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                PEKANBARU_CLUSTER: READY
              </span>
              <span>UTF-8 // NEXT.JS v16</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
