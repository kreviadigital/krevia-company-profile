"use client";

import React from "react";
import { 
  Building2, 
  FileSpreadsheet, 
  Calculator, 
  Eye, 
  PackageSearch, 
  FileCheck, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2 
} from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";

export function ProductSpotlight() {
  const challenges = [
    {
      icon: FileSpreadsheet,
      problem: "Fragmented Project Data",
      description:
        "Project updates, material approvals, and site logs get buried across messy spreadsheets and chaotic WhatsApp group chats.",
    },
    {
      icon: Calculator,
      problem: "Budget Variance Blind Spots",
      description:
        "Discrepancies between approved RAB (Budget Plan) and field expenses only surface after invoices arrive, causing costly budget overruns.",
    },
    {
      icon: Eye,
      problem: "Limited Site-to-Office Visibility",
      description:
        "Management struggles to verify actual daily progress on distant job sites without waiting for delayed manual reporting.",
    },
    {
      icon: PackageSearch,
      problem: "Reconciliation Delays in Procurement",
      description:
        "Purchasing orders, delivery receipts, and warehouse inventories fail to reconcile seamlessly, leading to material waste or work stoppages.",
    },
    {
      icon: FileCheck,
      problem: "Repetitive Manual Reporting",
      description:
        "Site engineers and project managers spend hours preparing manual progress dossiers instead of managing actual construction execution.",
    },
  ];

  return (
    <section id="construction-erp" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6">
      <div id="solutions" className="scroll-mt-24 max-w-6xl mx-auto">
        
        {/* Main Dark Editorial Card */}
        <div className="bg-[#101D35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#24D6B0]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#24D6B0] text-xs font-bold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Flagship Direction • Early Access / In Development</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Construction Management, Connected.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We are developing <strong className="text-white font-semibold">Krevia Construction ERP</strong> to eliminate operational disconnects between site teams, project estimators, and executive leadership.
            </p>
          </div>

          {/* Core Outcome Banner */}
          <div className="my-10 p-6 rounded-2xl bg-[#182844] border border-slate-700/70 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#24D6B0]">
                The Intended Outcome
              </span>
              <p className="text-base sm:text-lg font-semibold text-white">
                &ldquo;A more connected view of projects, budgets, field activities, and operational data.&rdquo;
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#24D6B0] hover:bg-[#1AB895] text-[#101D35] font-bold text-xs sm:text-sm shrink-0 transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* The Operational Gaps We Are Solving */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Operational problems we are engineering to resolve:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0B1322] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1C2E4F] flex items-center justify-center text-[#24D6B0]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {item.problem}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-[#24D6B0] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Targeted in ERP Architecture</span>
                    </div>
                  </div>
                );
              })}

              {/* Status & Validation Card */}
              <div className="p-5 rounded-2xl bg-[#182844]/60 border border-dashed border-slate-700 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Validated with Field Practitioners
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Module workflows are mapped alongside contractors, civil engineers, and project accountants to ensure practical site adoption.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                  Status: Active Prototype & Scope Validation
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
