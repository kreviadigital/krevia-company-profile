"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Compass, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#101D35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Ambient subtle glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#24D6B0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#24D6B0] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Krevia Digital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Purpose-Built Business Systems.
            </h2>

            <p className="text-sm font-medium text-slate-400">
              Pekanbaru, Riau, Indonesia • Operating Online & On-Site
            </p>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Krevia Digital is building integrated software products to help businesses manage complex operations with greater clarity and control. We focus on understanding business workflows, developing practical systems, and growing our products through structured implementation and continuous improvement.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              As an early-stage technology company, we prioritize engineering depth, system interoperability, and honest communication over surface-level marketing claims. We believe modern businesses deserve software that solves real operational bottlenecks without excessive complexity or prohibitive vendor lock-in.
            </p>

            {/* Core Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="p-4 rounded-2xl bg-[#0B1322] border border-slate-800">
                <span className="block text-sm font-bold text-[#24D6B0] mb-1">
                  Practical
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Designed around real field and office operational workflows.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B1322] border border-slate-800">
                <span className="block text-sm font-bold text-[#24D6B0] mb-1">
                  Transparent
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explicit scope, clear milestones, and realistic timelines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B1322] border border-slate-800">
                <span className="block text-sm font-bold text-[#24D6B0] mb-1">
                  Iterative
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Start with core modules, validate with users, and scale safely.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
