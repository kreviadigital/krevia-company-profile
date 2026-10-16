"use client";

import React, { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
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
    "Konsultasi Transformasi Digital Komprehensif",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo Krevia Digital,
Saya ingin berkonsultasi mengenai kebutuhan proyek sistem:

• Nama: ${formData.name || "-"}
• Perusahaan / Bisnis: ${formData.company || "-"}
• Layanan Terkait: ${formData.service}
• Kontak HP/WA: ${formData.phone || "-"}

Catatan / Deskripsi Kebutuhan:
${formData.message || "Ingin berdiskusi lebih lanjut mengenai solusi sistem."}

Mohon informasi jadwal diskusi berikutnya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6282283000000?text=${encodedText}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32 relative overflow-hidden bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Konsultasikan Kebutuhan Proyek Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tim Krevia Digital di Pekanbaru siap membantu menganalisis kebutuhan sistem dan memberikan rekomendasi solusi teknis terbaik tanpa komitmen awal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Office & Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold text-[#101D35] uppercase tracking-wider block mb-1">
                Kantor Pusat & Operasional
              </span>
              <h3 className="text-2xl font-bold text-[#101D35] mb-3">
                Krevia Digital Pekanbaru
              </h3>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Kami siap menyambut diskusi tatap muka di Pekanbaru maupun pertemuan virtual untuk klien di seluruh Indonesia.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#101D35]/10 text-[#101D35] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">LOKASI KANTOR</span>
                    <span className="text-sm font-semibold text-[#101D35] mt-0.5 block">
                      Kota Pekanbaru, Riau, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#101D35]/10 text-[#101D35] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">EMAIL RESMI</span>
                    <span className="text-sm font-semibold text-[#101D35] mt-0.5 block">
                      halo@kreviadigital.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#101D35]/10 text-[#101D35] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">JAM OPERASIONAL</span>
                    <span className="text-sm font-semibold text-[#101D35] mt-0.5 block">
                      Senin – Sabtu, 08:30 – 17:30 WIB
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  <strong className="text-[#101D35]">Respons Cepat 1x24 Jam:</strong> Setiap formulir ditinjau langsung oleh tim teknis kami.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-[#101D35] mb-6">
                Formulir Permintaan Konsultasi
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#101D35] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Perusahaan / Bisnis *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Kreasi Maju Bersama"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#101D35] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#101D35] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#101D35] focus:bg-white transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Ceritakan Kebutuhan atau Hambatan Sistem Anda
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan proses operasional yang ingin diotomatisasi, sistem yang ingin dibangun, atau target yang ingin dicapai..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#101D35] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-lg shadow-[#101D35]/25 hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Permintaan Konsultasi via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-600 font-semibold mt-2">
                    ✓ Pesan terformat! WhatsApp terbuka di tab baru. Tim kami siap merespons Anda.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
