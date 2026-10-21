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
  Compass
} from "lucide-react";

export function ErpCapabilities() {
  const capabilityGroups = [
    {
      id: "project-ops",
      title: "Operasional Proyek & Pekerjaan",
      status: "Pengembangan Aktif",
      statusVariant: "active",
      icon: FolderKanban,
      summary:
        "Sentralisasi data proyek, penugasan tim, milestone, dan log harian dalam satu repositori terpadu.",
      items: [
        "Master data proyek, jadwal kontrak, dan pelacakan tahapan milestone",
        "Log harian lapangan (kondisi cuaca, utilisasi alat berat, absensi personel)",
        "Dokumentasi foto progres dan verifikasi berita acara pemeriksaan fisik",
      ],
    },
    {
      id: "budget-control",
      title: "Kontrol Biaya & Anggaran (RAB)",
      status: "Pengembangan Aktif",
      statusVariant: "active",
      icon: Coins,
      summary:
        "Visibilitas berkesinambungan antara estimasi rencana anggaran awal dan pengeluaran aktual di lapangan.",
      items: [
        "Penyusunan dan impor baseline struktur RAB (Rencana Anggaran Biaya)",
        "Pencatatan langsung pengeluaran upah tenaga kerja, material, dan sewa alat",
        "Pemantauan varian dinamis untuk mendeteksi potensi pembengkakan biaya lebih dini",
      ],
    },
    {
      id: "procurement",
      title: "Manajemen Pengadaan & Material",
      status: "Arsitektur & Prototipe",
      statusVariant: "design",
      icon: Truck,
      summary:
        "Efisiensi alur pembelian mulai dari permintaan dari lapangan hingga verifikasi penerimaan di gudang.",
      items: [
        "Katalog material dengan kode barang terstandar dan spesifikasi mutu",
        "Alur persetujuan surat permintaan pembelian (PR) dan pembuatan Purchase Order",
        "Pelacakan saldo inventaris gudang dan rekonsiliasi surat jalan pengiriman",
      ],
    },
    {
      id: "workforce",
      title: "Manajemen SDM & Tim Lapangan",
      status: "Spesifikasi Awal",
      statusVariant: "proposed",
      icon: Users,
      summary:
        "Koordinasi tenaga kerja, tim spesialis, dan mitra subkontraktor di berbagai lokasi kerja.",
      items: [
        "Registri subkontraktor, spesialisasi keahlian kerja, dan kartu tarif dasar",
        "Alokasi penempatan personel ke zona proyek yang aktif",
        "Rencana presensi lapangan berbasis verifikasi titik GPS (Tahap Implementasi)",
      ],
    },
    {
      id: "reporting",
      title: "Laporan Operasional & Analitik Eksekutif",
      status: "Peta Jalan Produk",
      statusVariant: "planned",
      icon: LineChart,
      summary:
        "Hasilkan berkas progres siap audit dan ringkasan keuangan tanpa proses rekapitulasi spreadsheet yang melelahkan.",
      items: [
        "Dasbor multi-proyek terkonsolidasi untuk jajaran direksi dan manajemen",
        "Ekspor laporan ringkasan berkala otomatis format PDF untuk klien dan pemangku kepentingan",
        "Analisis historis efisiensi biaya untuk memperkuat akurasi penawaran tender berikutnya",
      ],
    },
  ];

  return (
    <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <span>Mesin ERP Modular</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Dirancang untuk Berbagai Kebutuhan Industri.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Platform ERP Krevia dirancang secara modular agar mudah disesuaikan bagi kontraktor, bisnis berbasis proyek, ritel, distribusi, hingga perhotelan. Kami membedakan status kesiapan modul secara jujur demi integritas rekayasa.
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
                  <span>Cakupan Arsitektur</span>
                  <span className="text-[#101D35] font-semibold">Spesifikasi Modular Krevia</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
