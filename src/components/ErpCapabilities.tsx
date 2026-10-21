"use client";

import React from "react";
import { 
  FolderKanban, 
  Coins, 
  Truck, 
  Users, 
  LineChart, 
  Check, 
  Clock, 
  Compass, 
  MapPin 
} from "lucide-react";

export function ErpCapabilities() {
  const capabilityGroups = [
    {
      id: "project-ops",
      title: "Project Operations",
      status: "In Active Development",
      statusVariant: "active",
      icon: FolderKanban,
      summary:
        "Centralize project records, task assignments, and daily site logs in a single operational repository.",
      items: [
        "Project master records, contractual timelines, and key milestones",
        "Site daily logs (weather conditions, equipment usage, active personnel)",
        "Progress photo uploads and site inspection documentation",
      ],
    },
    {
      id: "budget-control",
      title: "Budget & Cost Control",
      status: "In Active Development",
      statusVariant: "active",
      icon: Coins,
      summary:
        "Maintain continuous visibility between initial RAB budget estimates and real-time field expenditures.",
      items: [
        "RAB (Rencana Anggaran Biaya) structural baseline imports",
        "Direct recording of field labor, material, and equipment disbursements",
        "Dynamic variance tracking to identify budget overruns before month-end",
      ],
    },
    {
      id: "procurement",
      title: "Materials & Procurement",
      status: "Prototype & Architecture",
      statusVariant: "design",
      icon: Truck,
      summary:
        "Streamline purchasing workflows from initial site requisition to warehouse receipt verification.",
      items: [
        "Material catalogs with standardized item codes and specifications",
        "Purchase request (PR) approval chains and Purchase Order generation",
        "Warehouse inventory tracking and site dispatch reconciliations",
      ],
    },
    {
      id: "workforce",
      title: "Workforce & Field Operations",
      status: "Proposed / Early Spec",
      statusVariant: "proposed",
      icon: Users,
      summary:
        "Coordinate subcontractor teams, site specialists, and daily attendance logs across multiple locations.",
      items: [
        "Subcontractor registry, trade specialties, and rate cards",
        "Personnel assignment across active project zones",
        "Proposed GPS-verified field attendance logging (Subject to rollout)",
      ],
    },
    {
      id: "reporting",
      title: "Reporting & Executive Insights",
      status: "Planned Roadmap",
      statusVariant: "planned",
      icon: LineChart,
      summary:
        "Generate audit-ready progress dossiers and executive financial summaries without repetitive spreadsheet assembly.",
      items: [
        "Consolidated multi-project dashboard for corporate directors",
        "Automated PDF progress summaries for client and stakeholder reviews",
        "Historical cost analysis to refine future project tender bids",
      ],
    },
  ];

  return (
    <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <span>Modular ERP Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Designed for Real Construction Workflows.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our capabilities are structured around tangible operational domains. We distinguish clearly between actively developed modules and planned capabilities to uphold total engineering integrity.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            
            // Status badge styling
            let badgeBg = "bg-emerald-50 text-emerald-700 border-emerald-200";
            let StatusIcon = Check;
            if (group.statusVariant === "design") {
              badgeBg = "bg-blue-50 text-blue-700 border-blue-200";
              StatusIcon = Clock;
            } else if (group.statusVariant === "proposed" || group.statusVariant === "planned") {
              badgeBg = "bg-slate-100 text-slate-700 border-slate-200";
              StatusIcon = Compass;
            }

            return (
              <div
                key={group.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F7FB] border border-slate-200 flex items-center justify-center text-[#101D35]">
                      <Icon className="w-6 h-6 text-[#101D35]" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badgeBg}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      <span>{group.status}</span>
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#101D35]">
                      {group.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {group.summary}
                    </p>
                  </div>

                  {/* Bulleted Capabilities */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#24D6B0] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Scope validation</span>
                  <span className="text-[#101D35] font-semibold">Krevia Modular Spec</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
