"use client";

import Link from "next/link";
import { cubicBezier, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Hammer,
  MessageSquareCheck,
  Milestone,
  Workflow,
} from "lucide-react";
import { FLOMODIA_SHAPES } from "@/lib/flomodia-notches";

/* -------------------------------------------------------------------------- */
/*  Geometri notch                                                            */
/* -------------------------------------------------------------------------- */

type ShapeGeometry = {
  w: number;
  h: number;
  scale: string;
  d: string;
};

type CardShape = ShapeGeometry & {
  id: string;
  /** Padding aman terhadap potongan siluet di tiap breakpoint. */
  pad: string;
};

/**
 * Lima siluet landscape asli dari flomodia.com, satu bentuk per kartu:
 *
 * - `event` — chamfer kiri-atas, takik atas, langkah bawah (bentuk awal).
 * - `review` — takik melengkung di tengah tepi kiri dan kanan.
 * - `channels` — takik lebar di tepi atas dan bawah.
 * - `vision` — step kecil kiri-atas, tepi kanan-bawah terangkat.
 * - `post` — chamfer di kanan-atas dan kiri-bawah.
 *
 * Bentuk wide dipakai di semua breakpoint. Kartu WhyKrevia hanya ±360px di
 * ponsel, jadi kedalaman takik tetap ±21–27px dan tidak perlu varian portrait
 * terpisah seperti di `ErpOverview`. Padding tiap bentuk disesuaikan supaya
 * teks tidak pernah masuk ke area yang terpotong.
 */
const CARD_SHAPES: readonly CardShape[] = [
  {
    id: "why-shape-event",
    ...FLOMODIA_SHAPES.event,
    pad: "px-5 pt-7 pb-9 sm:px-8 sm:pt-10 sm:pb-12 lg:px-9 lg:pt-10 lg:pb-11",
  },
  {
    id: "why-shape-review",
    ...FLOMODIA_SHAPES.review,
    // Takik samping ±24px (ponsel) sampai ±52px (desktop); padding harus lebih
    // dalam dari takik supaya judul tidak terpotong.
    pad: "px-7 pt-7 pb-9 sm:px-14 sm:pt-10 sm:pb-12 lg:px-14 lg:pt-10 lg:pb-11",
  },
  {
    id: "why-shape-channels",
    ...FLOMODIA_SHAPES.channels,
    pad: "px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-12 lg:px-9 lg:pt-10 lg:pb-11",
  },
  {
    id: "why-shape-vision",
    ...FLOMODIA_SHAPES.vision,
    // Tepi kanan-bawah naik ±10% tinggi; pb-12/14 menjaga garis penutup.
    pad: "px-5 pt-7 pb-12 sm:px-8 sm:pt-10 sm:pb-14 lg:px-9 lg:pt-10 lg:pb-12",
  },
  {
    id: "why-shape-post",
    ...FLOMODIA_SHAPES.post,
    pad: "px-5 pt-7 pb-9 sm:px-8 sm:pt-10 sm:pb-12 lg:px-9 lg:pt-10 lg:pb-11",
  },
];

const CALLOUT_SHAPE = {
  id: "why-shape-next-event",
  ...FLOMODIA_SHAPES.nextEvent,
} as const;

/**
 * Outline mengikuti bentuk notch. `clip-path` memotong border, jadi tepi
 * digambar ulang sebagai `<path>` bergaris dengan bentuk yang sama persis.
 * `preserveAspectRatio="none"` mengikuti ukuran kartu, dan
 * `vectorEffect="non-scaling-stroke"` menjaga tebal garis tetap 2px.
 *
 * Warna lewat `text-*` karena `stroke="currentColor"` membaca `color`, bukan
 * `border-color`.
 */
function NotchOutline({
  shape,
  className,
}: {
  shape: ShapeGeometry;
  className: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      viewBox={`0 0 ${shape.w} ${shape.h}`}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={shape.d}
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Konten — tidak diubah                                                     */
/* -------------------------------------------------------------------------- */

const PRINCIPLES = [
  {
    icon: Workflow,
    title: "Alur Terhubung Menggantikan Data Terisolasi",
    description:
      "Alih-alih mengelola file spreadsheet terpisah untuk RAB, pengadaan, dan log lapangan, platform kami menghubungkan data secara dinamis sehingga perubahan di lapangan langsung memperbarui kalkulasi anggaran.",
  },
  {
    icon: Hammer,
    title: "Dirancang Sesuai Realitas Kerja Lapangan",
    description:
      "Software yang baik harus beradaptasi dengan ritme kerja manusia. Kami mengutamakan input data cepat, visual yang jernih, dan laporan harian ringkas daripada menu birokrasi yang membingungkan.",
  },
  {
    icon: Blocks,
    title: "Penerapan Modular & Bertahap",
    description:
      "Anda tidak perlu mengubah seluruh sistem kerja dalam satu malam. Mulai dari modul utama yang paling mendesak, buktikan kenyamanan tim, lalu perluas modul seiring kesiapan organisasi.",
  },
  {
    icon: MessageSquareCheck,
    title: "Cakupan Jelas & Akuntabilitas Terbuka",
    description:
      "Kami menetapkan ekspektasi yang jujur terkait jadwal implementasi, batasan teknis sistem, dan transparansi biaya sejak awal. Tanpa biaya tersembunyi atau janji berlebihan.",
  },
  {
    icon: Milestone,
    title: "Pola Pikir Sistem Berkelanjutan",
    description:
      "Membangun perangkat lunak perusahaan membutuhkan perbaikan berkala. Kami memperlakukan sistem ERP Anda sebagai aset jangka panjang yang terus berevolusi mendukung skala bisnis Anda.",
  },
] as const;

/**
 * Tone permukaan bergantian supaya tiap kartu punya bobot visual sendiri,
 * tanpa mengubah hierarki konten. Warna outline dan garis ikut latar.
 */
const TONES = [
  {
    card: "bg-white",
    outline: "text-gray-300",
    border: "sm:border-gray-300/80",
    line: "bg-gray-300/80",
    bigIndex: "text-gray-300",
    body: "text-gray-600",
  },
  {
    card: "bg-gray-100",
    outline: "text-gray-300",
    border: "sm:border-gray-300",
    line: "bg-gray-300",
    bigIndex: "text-gray-300",
    body: "text-gray-600",
  },
  {
    card: "bg-white",
    outline: "text-gray-300",
    border: "sm:border-gray-300/80",
    line: "bg-gray-300/80",
    bigIndex: "text-gray-300",
    body: "text-gray-600",
  },
  {
    card: "bg-gray-200",
    outline: "text-gray-400",
    border: "sm:border-gray-400/70",
    line: "bg-gray-400/70",
    bigIndex: "text-gray-400/60",
    body: "text-gray-700",
  },
  {
    card: "bg-gray-100",
    outline: "text-gray-300",
    border: "sm:border-gray-300",
    line: "bg-gray-300",
    bigIndex: "text-gray-300",
    body: "text-gray-600",
  },
] as const;

const CONTAINER = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10";

/** Irama masuk yang sama untuk rail dan kartu. */
const REVEAL_EASE = cubicBezier(0.22, 1, 0.36, 1);

export function WhyKrevia() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: REVEAL_EASE },
  };

  const calloutShape = CALLOUT_SHAPE;

  return (
    <section
      id="why-krevia"
      aria-labelledby="why-krevia-title"
      className="scroll-mt-24 border-y border-gray-200 bg-gray-100/50 py-16 sm:py-24"
    >
      {/* Satu clipPath per siluet. Prefix `why-shape-` menjaga id tetap unik
          di halaman yang juga memakai notch `ErpOverview` dan `ServicesBento`. */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          {[...CARD_SHAPES, calloutShape].map((shape) => (
            <clipPath
              key={shape.id}
              id={shape.id}
              clipPathUnits="objectBoundingBox"
              transform={`scale(${shape.scale})`}
            >
              <path d={shape.d} />
            </clipPath>
          ))}
        </defs>
      </svg>

      <div className={CONTAINER}>
        {/* Garis indeks full-width: penanda “dossier” sebelum grid. */}
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-secondary" />
          <span aria-hidden="true" className="h-px flex-1 bg-gray-300" />
          <span className="font-mono text-[10px] tabular-nums uppercase tracking-[0.24em] text-gray-500">
            (01 — 05)
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          {/* ===================== RAIL EDITORIAL ===================== */}
          <motion.aside
            {...reveal}
            className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
          >
            <h2
              id="why-krevia-title"
              className="text-[clamp(2.25rem,3.8vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-gray-900"
            >
              Mengapa Memilih{" "}
              <span className="block">
                <span className="text-secondary">Krevia Digital</span>.
              </span>
            </h2>

            <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-gray-700 lg:mt-6">
              Kami menghindari jargon pemasaran kosong dan klaim sepihak.
              Perangkat lunak kami dikembangkan dengan prinsip kejujuran
              rekayasa teknis dan keandalan operasional nyata.
            </p>

            {/* Penanda scroll — hanya dekoratif, tidak menambah konten. */}
            <div aria-hidden="true" className="mt-10 hidden items-center gap-4 lg:flex">
              <span className="h-px w-12 bg-secondary" />
              <ArrowDown className="h-4 w-4 text-gray-400" />
            </div>
          </motion.aside>

          {/* ===================== TUMPUKAN PRINSIP ===================== */}
          <div className="space-y-4 lg:col-span-7">
            {PRINCIPLES.map((principle, i) => {
              const Icon = principle.icon;
              const shape = CARD_SHAPES[i];
              const tone = TONES[i];

              return (
                <motion.article
                  key={principle.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: reduceMotion ? 0 : i * 0.06 }}
                  style={{ clipPath: `url(#${shape.id})` }}
                  className={`group relative isolate ${shape.pad} ${tone.card}`}
                >
                  <NotchOutline shape={shape} className={tone.outline} />

                  <div className="grid gap-5 sm:grid-cols-12 sm:gap-8 lg:gap-10">
                    {/* Kiri: indeks, ikon, judul */}
                    <div className="flex flex-col justify-between gap-5 sm:col-span-5 sm:gap-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-baseline gap-3 pt-1">
                          <span
                            className={`text-[2.75rem] font-extrabold leading-none tracking-[-0.06em] tabular-nums ${tone.bigIndex}`}
                          >
                            0{i + 1}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-px w-8 translate-y-[-0.35rem] bg-secondary"
                          />
                        </div>

                        <span
                          aria-hidden="true"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent transition-colors duration-500 group-hover:bg-secondary group-hover:text-white sm:h-12 sm:w-12"
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>

                      <h3 className="max-w-[17ch] text-[1.35rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-gray-900 sm:text-[1.6rem] lg:text-[1.9rem]">
                        {principle.title}
                      </h3>
                    </div>

                    {/* Kanan: deskripsi + garis penutup */}
                    <div
                      className={`flex flex-col justify-between gap-5 sm:col-span-7 sm:gap-7 sm:border-l sm:pl-8 lg:pl-10 ${tone.border}`}
                    >
                      <p className={`max-w-[54ch] text-sm leading-relaxed sm:text-[15px] lg:text-base ${tone.body}`}>
                        {principle.description}
                      </p>

                      <div aria-hidden="true" className="flex items-center gap-3">
                        <span className={`h-px flex-1 ${tone.line}`} />
                        <span className="h-1.5 w-1.5 rotate-45 bg-secondary/80" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ===================== CALLOUT PENUTUP ===================== */}
        <motion.div
          {...reveal}
          style={{ clipPath: `url(#${calloutShape.id})` }}
          className="relative isolate mt-4 bg-primary text-white lg:mt-6"
        >
          <NotchOutline shape={calloutShape} className="text-white/20" />

          <div className="grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-14">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
                  Integritas Rekayasa
                </span>
              </div>

              <h3 className="mt-5 max-w-[15ch] text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Kejujuran Maturitas Produk
              </h3>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-12">
              <p className="max-w-[52ch] text-sm leading-relaxed text-gray-300 sm:text-base">
                Sebagai entitas teknologi tahap awal, kami berkolaborasi erat
                dengan pemilik usaha untuk menguji dan memvalidasi sistem yang
                memecahkan hambatan bisnis secara nyata.
              </p>

              <Link
                href="/tentang-kami"
                className="group/cta flex items-center justify-between gap-6 border-t border-white/15 pt-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:outline"
              >
                <span className="max-w-[34ch] text-xs font-semibold leading-snug tracking-[0.01em] text-white transition-colors duration-300 group-hover/cta:text-accent sm:text-sm">
                  Baca manifesto rekayasa &amp; profil entitas kami
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-accent transition-colors duration-300 group-hover/cta:border-accent group-hover/cta:bg-accent group-hover/cta:text-primary sm:h-11 sm:w-11"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
