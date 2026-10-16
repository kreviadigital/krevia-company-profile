"use client";

import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  Terminal,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Custom Software Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Custom Software Development",
    "System Integration & APIs",
    "UI/UX Design & Prototyping",
    "Business Process Digitization",
    "Konsultasi Arsitektur Enterprise Lengkap",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Template pesan WhatsApp terstruktur untuk technical discovery call
    const text = `Halo Systems Architect Krevia Digital,
Saya ingin menginisiasi technical discovery call untuk proyek sistem:

• Nama Pengirim: ${formData.name || "-"}
• Perusahaan / Bisnis: ${formData.company || "-"}
• Layanan Terkait: ${formData.service}
• Kontak HP/WA: ${formData.phone || "-"}

Gambaran Kendala / Kebutuhan Sistem:
${formData.message || "Ingin mendiskusikan kebutuhan arsitektur sistem lebih lanjut."}

Mohon informasi jadwal diskusi teknisnya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    // Nomor WhatsApp resmi Krevia Digital
    const waUrl = `https://wa.me/6282283000000?text=${encodedText}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070A11] bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/80 text-cyan-400 font-mono-code text-xs mb-4">
            <span className="text-cyan-500 font-bold">// 05</span>
            <span>TECHNICAL_DISCOVERY_CALL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Konsultasikan Kebutuhan Sistem Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Diskusikan bottleneck operasional dan target digitalisasi perusahaan Anda langsung dengan engineer kami di Pekanbaru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office & Operations Card */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-7 sm:p-8">
              <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>OFFICE_AND_OPERATIONS // PKU</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pusat Rekayasa Pekanbaru</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Krevia Digital berbasis di Pekanbaru, Riau, siap melayani kemitraan teknologi di seluruh kawasan Sumatra dan nasional.
              </p>

              <div className="space-y-4 font-mono-code text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block">LOKASI KANTOR</span>
                    <span className="text-slate-200 font-medium">Kota Pekanbaru, Riau, Indonesia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block">EMAIL KEMITRAAN</span>
                    <span className="text-slate-200 font-medium">halo@kreviadigital.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block">JAM RESPON TEKNIS</span>
                    <span className="text-slate-200 font-medium">Senin – Sabtu, 08:30 – 17:30 WIB</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-300 font-mono-code">
                  <strong className="text-white">SLA 1x24 JAM:</strong> Setiap pengajuan formulir akan dianalisis langsung oleh Systems Architect kami.
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono-code text-xs text-slate-400 uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Hartono"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-600 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-slate-400 uppercase tracking-wider mb-2">
                      Perusahaan / Organisasi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Maju Bersama Riau"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-600 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono-code text-xs text-slate-400 uppercase tracking-wider mb-2">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-600 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-slate-400 uppercase tracking-wider mb-2">
                      Layanan yang Diperlukan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono-code text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-slate-950 text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono-code text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Deskripsi Masalah / Target Sistem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan alur kerja yang ingin diotomatisasi, sistem lama yang ingin diintegrasikan, atau aplikasi yang ingin dibangun..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-600 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono-code font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>DISPATCH_TO_WHATSAPP()</span>
                </button>

                {submitted && (
                  <p className="text-center font-mono-code text-xs text-emerald-400 mt-2">
                    ✓ Pesan terformat! WhatsApp terbuka di tab baru. Tim engineer kami siap merespons Anda.
                  </p>
                )}
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
