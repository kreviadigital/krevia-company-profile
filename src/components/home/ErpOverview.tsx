"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Briefcase, Check, Truck, Users, Wallet } from "lucide-react";

/**
 * Empat pilar ERP Krevia — versi redesign.
 *
 * Dependensi baru: `npm i gsap` (ScrollTrigger sudah ikut di paketnya).
 *
 * Bahasa visual diambil dari flomodia.com: tipografi display yang sangat
 * besar, hairline tipis sebagai pemisah, numerasi besar ala daftar "9 good
 * reasons", label kategori kecil di atas judul, tepi atas bertangga dari band
 * Stats, kartu ber-notch (mask asli flomodia — lihat `CARD_SHAPE`), dan
 * tombol dengan kurung siku. Tidak ada glow, gradien, blur, maupun bayangan —
 * hanya bidang warna datar, garis, dan tipe.
 *
 * Susunan, dari atas ke bawah:
 *   1. Header   — eyebrow + garis, headline raksasa (reveal per baris), satu
 *                 paragraf pengantar, dan tiga fakta bergaya "impact".
 *   2. Tumpukan — empat kartu pilar, semuanya memakai satu mask "notch" yang
 *                 sama dari flomodia (`CARD_SHAPE`). Di layar
 *                 lebar dan cukup tinggi kartu menempel (sticky) dan saling
 *                 menimpa; kartu di bawahnya mengecil dan menggelap sedikit saat
 *                 tertimpa. Di layar kecil atau pendek kartu jadi daftar biasa,
 *                 jadi tidak ada konten yang terpotong.
 *   3. Marquee  — label keempat pilar berjalan; melaju lebih cepat saat scroll.
 *                 Sengaja di LUAR container supaya mentok kiri-kanan layar.
 *   4. Penutup  — pernyataan besar + tombol ke katalog (nuansa footer).
 *
 * Animasi seluruhnya GSAP + ScrollTrigger lewat `gsap.matchMedia()`:
 *   - `prefers-reduced-motion: reduce` -> semua reveal, hitung-naik, scale,
 *     dan marquee mati; konten tampil apa adanya.
 *   - Sticky hanya aktif di `min-width: 1024px` dan `min-height: 680px`,
 *     karena kartu yang lebih tinggi dari layar akan terpotong kartu berikutnya.
 *
 * Catatan: sticky tidak bekerja kalau ada leluhur dengan `overflow: hidden`
 * atau `overflow-x: hidden`. Kalau layout kamu memakainya, ganti jadi
 * `overflow-x: clip` (Tailwind: `overflow-x-clip`).
 *
 * Isi teks hanya memakai fakta dari PRODUCT.md / GLOSSARY.md — 44 modul ERP,
 * 4 pilar operasional, satu basis data. Tidak ada angka klien atau
 * pencapaian yang belum terverifikasi (lihat ADR-0001).
 */

const PILLARS = [
  {
    no: "01",
    label: "Proyek & Lapangan",
    title: "Operasional & Proyek",
    icon: Briefcase,
    desc: "Menghubungkan catatan harian lapangan, realisasi RAB, dan approval progres fisik agar deviasi anggaran terdeteksi sejak dini.",
    points: ["Site Daily Log Terpadu", "Kontrol Deviasi RAB", "Persetujuan Bertingkat"],
    theme: {
      card: "bg-gray-100 text-gray-900",
      muted: "text-gray-600",
      rule: "border-gray-300",
      ctaHover:
        "group-hover/cta:border-primary group-hover/cta:bg-primary group-hover/cta:text-white",
    },
  },
  {
    no: "02",
    label: "Arus Kas & Buku Besar",
    title: "Keuangan & Akuntansi",
    icon: Wallet,
    desc: "Rekonsiliasi transaksi kasir, pencatatan invoice, dan laporan laba-rugi otomatis tanpa perlu rekap ulang manual di akhir bulan.",
    points: ["Pencatatan Multi-Rekening", "Invoice & Pelunasan Cepat", "Laporan Keuangan Otomatis"],
    theme: {
      card: "bg-gray-200 text-gray-900",
      muted: "text-gray-700",
      rule: "border-gray-400/50",
      ctaHover:
        "group-hover/cta:border-primary group-hover/cta:bg-primary group-hover/cta:text-white",
    },
  },
  {
    no: "03",
    label: "Logistik & Inventaris",
    title: "Supply Chain & Gudang",
    icon: Truck,
    desc: "Sinkronisasi pesanan pembelian (PO), surat jalan penerimaan barang, dan peringatan batas minimum stok secara real-time.",
    points: ["Kontrol Stok Multi-Gudang", "Pencocokan PO & Faktur", "Peringatan Stok Kritis"],
    theme: {
      card: "bg-secondary text-white",
      muted: "text-white/90",
      rule: "border-white/30",
      ctaHover:
        "group-hover/cta:border-white group-hover/cta:bg-white group-hover/cta:text-primary",
    },
  },
  {
    no: "04",
    label: "Karyawan & Payroll",
    title: "SDM & Penggajian",
    icon: Users,
    desc: "Manajemen data karyawan, presensi berbasis lokasi GPS untuk staf lapangan, serta perhitungan lembur dan slip gaji digital.",
    points: ["Presensi GPS Lapangan", "Kalkulasi Lembur Otomatis", "Distribusi Slip Gaji"],
    theme: {
      card: "bg-primary text-white",
      muted: "text-gray-300",
      rule: "border-white/20",
      ctaHover:
        "group-hover/cta:border-white group-hover/cta:bg-white group-hover/cta:text-primary",
    },
  },
] as const;

/** Tiga fakta di header. Semuanya sudah ada di PRODUCT.md. */
const STATS = [
  { value: 44, label: "Modul ERP" },
  { value: 4, label: "Pilar operasional" },
  { value: 1, label: "Basis data bersama" },
] as const;

const MARQUEE_ITEMS = PILLARS.map((p) => p.label);

/**
 * Mask "notch" kartu dari flomodia, disalin dari `page-masks`.
 *
 * Memakai `clipPathUnits="objectBoundingBox"` + `transform: scale(...)` persis
 * seperti di flomodia: koordinat path dibagi ukuran viewBox-nya sendiri, jadi
 * bentuknya mengikuti ukuran kartu apa pun tanpa angka viewBox tetap.
 *
 * **Konsekuensinya kedalaman takik ikut berskala terhadap TINGGI kartu.** Itu
 * aman di desktop (kartu pendek), tapi di ponsel kartu jauh lebih tinggi
 * sehingga takiknya membesar sampai memotong isi. Karena itu ada dua varian
 * dengan siluet yang sama, hanya beda proporsi:
 *
 * - `CARD_SHAPE`    (409×231, landscape) — dipakai mulai `lg`.
 * - `CARD_SHAPE_SM` (409×620, portrait)  — dipakai di bawah `lg`.
 *
 * Varian portrait dibuat dengan meregangkan **hanya bagian tengah yang lurus**
 * dari path aslinya; kedalaman fitur yang digambar flomodia (takik atas, sudut
 * kanan-atas, step bawah) dibiarkan apa adanya. Hasilnya takik di ponsel tetap
 * ~18–24px berapa pun tinggi kartunya, bukan ~63px.
 *
 * Bentuk `events`: sudut kiri-atas terpotong diagonal, tepi atas punya takik
 * dangkal yang turun, tepi bawah bertingkat.
 */
const CARD_SHAPE = {
  id: "erp-card-notch",
  w: 409,
  h: 231,
  scale: "0.0024449878, 0.0043290043",
  d: "M4.21873 20.9876L20.9876 4.21872C23.6888 1.51752 27.3524 0 31.1725 0H99.475C104.198 0 108.027 3.82893 108.027 8.55215C108.027 13.2754 111.856 17.1043 116.579 17.1043H343.436C348.16 17.1043 351.989 13.2754 351.989 8.55215C351.989 3.82893 355.818 0 360.541 0H394.299C402.254 0 408.703 6.44872 408.703 14.4036V202.551C408.703 210.506 402.254 216.955 394.299 216.955H214.819C210.999 216.955 207.335 218.472 204.634 221.173L199.568 226.239C196.867 228.94 193.203 230.458 189.383 230.458H14.4036C6.44872 230.458 0 224.009 0 216.054V31.1725C0 27.3524 1.51753 23.6888 4.21873 20.9876Z",
} as const;

/** Varian portrait dari bentuk yang sama, untuk kartu tinggi di ponsel/tablet. */
const CARD_SHAPE_SM = {
  id: "erp-card-notch-sm",
  w: 409,
  h: 620,
  scale: "0.0024449878, 0.0016129032",
  d: "M4.219 20.988L20.988 4.219C23.689 1.518 27.352 0 31.173 0H99.475C104.198 0 108.027 3.829 108.027 8.552C108.027 13.275 111.856 17.104 116.579 17.104H343.436C348.16 17.104 351.989 13.275 351.989 8.552C351.989 3.829 355.818 0 360.541 0H394.299C402.254 0 408.703 6.449 408.703 14.404V591.551C408.703 599.506 402.254 605.955 394.299 605.955H214.819C210.999 605.955 207.335 607.472 204.634 610.173L199.568 615.239C196.867 617.94 193.203 619.458 189.383 619.458H14.404C6.449 619.458 0 613.009 0 605.054V31.173C0 27.352 1.518 23.689 4.219 20.988Z",
} as const;

/** Container isi section. Marquee sengaja di luar ini supaya mentok layar. */
const CONTAINER = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10";

/** Jarak sticky kartu pertama dari atas layar (px). Sama dengan `top-28` versi lama. */
const STACK_TOP = 112;
/** Selisih sticky antar kartu (px) — lebar "tab" kartu sebelumnya yang masih mengintip. */
const STACK_STEP = 14;

/**
 * Transisi bertangga "impact" versi BAWAH dari flomodia (viewBox 0 0 1280 76).
 * Digambar di tepi ATAS section supaya band `Stats` di atasnya terlihat
 * menetes bertangga ke kanvas terang. `fill` navy karena yang digambar adalah
 * perpanjangan band Stats.
 */
const IMPACT_BOTTOM_PATH =
  "M870.331 -779.154H429.264C421.953 -779.154 414.943 -782.058 409.773 -787.227L312.073 -884.927C306.904 -890.096 299.893 -893 292.583 -893H24.4464C9.22371 -893 -3.11671 -880.66 -3.11671 -865.437V-728.233V-629.913C-3.11671 -622.332 -6.23873 -615.086 -11.7483 -609.88L-18.6924 -603.318L-25.2155 -597.153C-30.725 -591.946 -33.847 -584.701 -33.847 -577.12V-442.142C-33.847 -434.562 -36.969 -427.316 -42.4786 -422.109L-48.3685 -416.543C-53.878 -411.337 -57 -404.091 -57 -396.51V-49.1462C-57 -41.5657 -53.878 -34.3198 -48.3685 -29.1132L19.2244 34.7634C24.3416 39.5992 31.1153 42.2935 38.156 42.2935H193.034C200.074 42.2935 206.848 44.9878 211.965 49.8237L230.969 67.7824C236.086 72.6183 242.86 75.3126 249.901 75.3126H464.134C471.175 75.3126 477.948 72.6183 483.066 67.7824L546.691 7.65491C551.808 2.81903 558.582 0.124756 565.623 0.124756H852.683C859.724 0.124756 866.497 2.81903 871.615 7.65491L873.78 9.70081C878.897 14.5367 885.671 17.231 892.711 17.231H1065.69C1072.73 17.231 1079.5 19.9252 1084.62 24.761L1101.1 40.3328C1106.22 45.1687 1112.99 47.863 1120.03 47.863H1275.75C1282.79 47.863 1289.57 45.1686 1294.68 40.3328L1394.27 -53.7781C1399.78 -58.9847 1402.9 -66.2306 1402.9 -73.8111V-506.706C1402.9 -514.287 1406.02 -521.532 1411.53 -526.739L1420.37 -535.09C1425.88 -540.297 1429 -547.542 1429 -555.123V-739.43C1429 -747.011 1425.88 -754.257 1420.37 -759.463L1349.09 -826.821L1236.07 -713.803C1230.9 -708.633 1223.89 -705.729 1216.58 -705.729H966.589C959.279 -705.729 952.268 -708.633 947.099 -713.803L889.821 -771.08C884.652 -776.25 877.641 -779.154 870.331 -779.154Z";

/**
 * Geser vertikal bentuk transisi di bawah band Stats, dalam px.
 * Positif -> turun (menutupi lebih banyak kanvas putih); negatif -> naik.
 */
const STATS_SEAM_OFFSET = 0;

/** Empat kurung siku tombol, sama dengan tombol di Footer. viewBox 0 0 17 17. */
const BUTTON_CORNER_PATHS = [
  { className: "top-[-0.25rem] left-[-0.25rem]", d: "M1 16C1 8 8 1 16 1" },
  { className: "top-[-0.25rem] right-[-0.25rem]", d: "M16 16C16 8 9 1 1 1" },
  { className: "bottom-[-0.25rem] left-[-0.25rem]", d: "M1 1C1 9 8 16 16 16" },
  { className: "bottom-[-0.25rem] right-[-0.25rem]", d: "M16 1C16 9 9 16 1 16" },
];

/**
 * Satu baris headline dengan masker. Teks naik dari bawah garis masker saat
 * reveal. Padding + margin negatif menjaga descender (y, g, p) tidak terpotong
 * tanpa mengubah tinggi baris.
 */
function Line({ children }: { children: ReactNode }) {
  return (
    <span className="-my-[0.08em] block overflow-hidden py-[0.08em]">
      <span data-line className="block">
        {children}
      </span>
    </span>
  );
}

/** Tombol utama dengan kurung siku ala flomodia. */
function BracketButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none sm:px-9 sm:text-base"
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(.28,1.78,.16,.93)] group-hover:scale-110"
      >
        {BUTTON_CORNER_PATHS.map((corner) => (
          <span
            key={corner.d}
            className={`absolute flex h-4 w-4 items-center justify-center text-accent ${corner.className}`}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 17 17"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d={corner.d} stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </span>
    </Link>
  );
}

export function ErpOverview() {
  const rootRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const list = listRef.current;
    if (!root || !list) return;

    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray<HTMLElement>("[data-item]", list);
    const header = root.querySelector<HTMLElement>("[data-header]");
    const meta = root.querySelector<HTMLElement>("[data-meta]");
    const marquee = root.querySelector<HTMLElement>("[data-marquee]");
    const track = root.querySelector<HTMLElement>("[data-marquee-track]");
    const closing = root.querySelector<HTMLElement>("[data-closing]");

    /**
     * Posisi kartu ke-`index` DI ALUR NORMAL, relatif ke atas `<ol>` (px).
     * Dihitung dari tinggi kartu sebelumnya, bukan dari posisi kartu itu
     * sendiri: kartu yang sedang menempel (sticky) bergeser dari posisi
     * alurnya, dan ScrollTrigger yang mengukur elemen sticky akan salah
     * menghitung titik mulainya.
     */
    const flowTop = (index: number) => {
      let y = 0;
      for (let j = 0; j < index; j++) {
        y += items[j].offsetHeight + (parseFloat(getComputedStyle(items[j]).marginBottom) || 0);
      }
      return y;
    };

    const mm = gsap.matchMedia();

    mm.add(
      {
        motionOk: "(prefers-reduced-motion: no-preference)",
        canStack: "(min-width: 1024px) and (min-height: 680px)",
      },
      (context) => {
        const { motionOk, canStack } = context.conditions as unknown as {
          motionOk: boolean;
          canStack: boolean;
        };
        const cleanups: Array<() => void> = [];

        /* ---------- Tumpukan kartu (layout) ---------- */
        if (canStack) {
          items.forEach((item, i) => {
            gsap.set(item, { position: "sticky", top: STACK_TOP + i * STACK_STEP });
          });

          if (motionOk) {
            // Kartu i mengecil dan menggelap selama kartu i+1 naik menimpanya.
            items.slice(0, -1).forEach((item, i) => {
              const card = item.querySelector<HTMLElement>("[data-card]");
              const dim = item.querySelector<HTMLElement>("[data-card-dim]");
              if (!card || !dim) return;

              const range = {
                trigger: list,
                start: () => `top+=${flowTop(i + 1)} bottom`,
                end: () =>
                  `top+=${flowTop(i + 1)} top+=${STACK_TOP + (i + 1) * STACK_STEP}`,
                scrub: true,
              };
              gsap.to(card, { scale: 0.94, ease: "none", scrollTrigger: { ...range } });
              gsap.to(dim, { opacity: 0.5, ease: "none", scrollTrigger: { ...range } });
            });
          }
        }

        if (!motionOk) return;

        /* ---------- Header ---------- */
        if (header) {
          gsap.from(header.querySelectorAll("[data-rule]"), {
            scaleX: 0,
            transformOrigin: "0% 50%",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: header, start: "top 88%", once: true },
          });
          gsap.from(header.querySelectorAll("[data-line]"), {
            yPercent: 110,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: { trigger: header, start: "top 80%", once: true },
          });
        }

        if (meta) {
          gsap.from(meta.querySelectorAll("[data-fade]"), {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: meta, start: "top 88%", once: true },
          });

          // Hitung naik 0 -> nilai akhir. Teks akhir sudah ada di HTML server,
          // jadi tanpa JS atau saat reduced motion angkanya tetap benar.
          meta.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
            const target = Number(el.dataset.count);
            if (!Number.isFinite(target)) return;
            const proxy = { v: 0 };
            el.textContent = "0";
            cleanups.push(() => {
              el.textContent = String(target);
            });
            gsap.to(proxy, {
              v: target,
              duration: 1.6,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
              onUpdate: () => {
                el.textContent = String(Math.round(proxy.v));
              },
            });
          });
        }

        /* ---------- Isi kartu: masuk saat kartunya mulai terlihat ---------- */
        items.forEach((item, i) => {
          const parts = item.querySelectorAll("[data-card-reveal]");
          if (!parts.length) return;
          gsap.from(parts, {
            y: 40,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: list,
              start: () => `top+=${flowTop(i)} 82%`,
              once: true,
            },
          });
        });

        /* ---------- Marquee ---------- */
        if (marquee && track) {
          const loop = gsap.to(track, {
            xPercent: -50,
            duration: 42,
            ease: "none",
            repeat: -1,
          });

          ScrollTrigger.create({
            trigger: marquee,
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
            // Scroll cepat -> marquee melaju, lalu pelan-pelan kembali normal.
            onUpdate: (self) => {
              const speed = gsap.utils.clamp(0, 6, Math.abs(self.getVelocity()) / 500);
              gsap.to(loop, {
                timeScale: 1 + speed,
                duration: 0.25,
                overwrite: true,
                onComplete: () => {
                  gsap.to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out" });
                },
              });
            },
          });
        }

        /* ---------- Penutup ---------- */
        if (closing) {
          gsap.from(closing.querySelectorAll("[data-line]"), {
            yPercent: 110,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: { trigger: closing, start: "top 82%", once: true },
          });
          gsap.from(closing.querySelectorAll("[data-fade]"), {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: closing, start: "top 78%", once: true },
          });
        }

        return () => cleanups.forEach((fn) => fn());
      },
    );

    // Tinggi kartu bergantung pada font; ukur ulang setelah font siap.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="erp-overview"
      aria-label="Empat pilar sistem Krevia Digital"
      className="relative scroll-mt-24 bg-white pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36"
    >
      <div className={CONTAINER}>
        {/* ============ 1. HEADER ============ */}
        <header data-header>
          <div className="flex items-end justify-between gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
            <span>Sistem Krevia Digital</span>
            <span className="tabular-nums">(01 — 04)</span>
          </div>
          <div data-rule className="mt-4 h-px w-full bg-primary" />

          <h2 className="mt-10 text-[clamp(2.75rem,9vw,9rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-gray-900 sm:mt-14">
            <Line>Empat pilar</Line>
            <Line>yang menopang</Line>
            <Line>
              <span className="text-secondary">operasional.</span>
            </Line>
          </h2>
        </header>

        <div
          data-meta
          className="mt-10 grid gap-10 sm:mt-14 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-14"
        >
          <p
            data-fade
            className="max-w-[40ch] text-lg leading-relaxed text-gray-700 sm:text-xl lg:col-span-5"
          >
            Krevia Digital menyusun sistem sebagai fondasi modular. Semua pilar berjalan di atas
            satu basis data yang sama.
          </p>

          <dl className="grid grid-cols-3 lg:col-span-7">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                data-fade
                className="flex flex-col gap-3 border-l border-gray-300 pl-4 sm:pl-6"
              >
                <dt className="order-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gray-600 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="order-1 text-4xl font-extrabold leading-none tracking-[-0.04em] text-gray-900 tabular-nums sm:text-5xl lg:text-7xl">
                  <span data-count={stat.value}>{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ============ 2. TUMPUKAN PILAR ============ */}
        {/* Definisi clipPath untuk kedua varian notch. Keempat kartu merujuk ke
            bentuk yang sama; varian mana yang dipakai diatur lewat <style> di
            bawah. */}
        <svg width="0" height="0" aria-hidden="true" className="absolute">
          <defs>
            {[CARD_SHAPE_SM, CARD_SHAPE].map((shape) => (
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

        {/* `clip-path: url(#id)` TIDAK bisa dipasang lewat utility arbitrary
            Tailwind — nilainya tidak ter-generate sama sekali (dicek langsung:
            tidak ada aturan CSS yang dihasilkan, `clip-path` dihitung jadi
            `none`, sehingga kartu sempat tampil tanpa potongan). Jadi dipasang
            lewat <style> kecil ini, sekaligus memilih varian sesuai breakpoint:
            portrait di bawah `lg`, landscape mulai `lg`. */}
        <style>{`
          #erp-overview [data-card] { clip-path: url(#${CARD_SHAPE_SM.id}); }
          @media (min-width: 1024px) {
            #erp-overview [data-card] { clip-path: url(#${CARD_SHAPE.id}); }
          }
        `}</style>

        <ol ref={listRef} className="mt-16 sm:mt-24 lg:mt-32">
          {PILLARS.map((pil, i) => {
            const Icon = pil.icon;
            return (
              <li key={pil.no} data-item className="mb-4 last:mb-0 sm:mb-5">
                {/* Padding atas/bawah menyesuaikan kedalaman notch tiap varian:
                    varian portrait punya takik ~3% tinggi (~20px di ponsel),
                    varian landscape ~7.4% (~31px di desktop). `pb` diberi
                    cadangan lebih karena tepi bawah kartu juga bertingkat. */}
                <div
                  data-card
                  className={`relative isolate origin-top px-5 pt-9 pb-14 sm:px-8 sm:pt-12 sm:pb-16 lg:px-12 lg:pt-12 lg:pb-12 ${pil.theme.card}`}
                >
                  {/* Garis tepi mengikuti bentuk notch yang sama. `clip-path`
                      memotong border, jadi tepinya digambar sebagai path
                      bergaris (stroke) dengan bentuk yang persis sama; lapisan
                      ini sendiri ikut ter-clip supaya stroke-nya tidak
                      melewati tepi. `preserveAspectRatio="none"` membuat
                      gambarnya mengikuti ukuran kartu. Warna garis mengikuti
                      tema kartu supaya tetap terbaca di atas tiap latar.
                      Dua <svg> karena tiap varian punya viewBox sendiri; yang
                      tidak aktif disembunyikan lewat `hidden`. */}
                  <svg
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 -z-10 h-full w-full lg:hidden ${pil.theme.rule}`}
                    viewBox={`0 0 ${CARD_SHAPE_SM.w} ${CARD_SHAPE_SM.h}`}
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d={CARD_SHAPE_SM.d}
                      stroke="currentColor"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block ${pil.theme.rule}`}
                    viewBox={`0 0 ${CARD_SHAPE.w} ${CARD_SHAPE.h}`}
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d={CARD_SHAPE.d}
                      stroke="currentColor"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-0">
                    {/* Kiri: nomor, label, judul, deskripsi */}
                    <div className="flex flex-col justify-between gap-8 sm:gap-12 lg:col-span-7 lg:gap-16 lg:pr-12">
                      <div data-card-reveal className="flex items-start justify-between gap-6">
                        <span className="text-[clamp(3.75rem,9vw,8rem)] font-extrabold leading-[0.8] tracking-[-0.06em] tabular-nums">
                          {pil.no}
                        </span>
                        <div className="pt-1 text-right">
                          <span className="block text-xs font-semibold uppercase tracking-[0.2em]">
                            Pilar {pil.no} / 04
                          </span>
                          <span aria-hidden="true" className="mt-3 flex justify-end gap-1.5">
                            {PILLARS.map((p, k) => (
                              <span
                                key={p.no}
                                className={`h-1 w-8 rounded-full bg-current ${k <= i ? "" : "opacity-25"}`}
                              />
                            ))}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p
                          data-card-reveal
                          className="text-xs font-semibold uppercase tracking-[0.2em]"
                        >
                          {pil.label}
                        </p>
                        <h3
                          data-card-reveal
                          className="mt-3 text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.03em]"
                        >
                          {pil.title}
                        </h3>
                        <p
                          data-card-reveal
                          className={`mt-5 max-w-[48ch] text-base leading-relaxed sm:text-lg ${pil.theme.muted}`}
                        >
                          {pil.desc}
                        </p>
                      </div>
                    </div>

                    {/* Kanan: ikon, daftar kapabilitas, tautan */}
                    <div
                      className={`flex flex-col justify-between gap-6 border-t pt-6 sm:gap-10 sm:pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 ${pil.theme.rule}`}
                    >
                      <div>
                        <div
                          data-card-reveal
                          className="flex items-center justify-between gap-4"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                            Contoh kapabilitas
                          </span>
                          <span
                            aria-hidden="true"
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl border sm:h-14 sm:w-14 ${pil.theme.rule}`}
                          >
                            <Icon className="h-6 w-6" />
                          </span>
                        </div>

                        <ul className="mt-5 sm:mt-6">
                          {pil.points.map((pt, k) => (
                            <li
                              key={pt}
                              data-card-reveal
                              className={`group/pt flex items-center gap-3 border-t py-3 sm:gap-4 sm:py-4 ${pil.theme.rule} ${
                                k === pil.points.length - 1 ? "border-b" : ""
                              }`}
                            >
                              <span
                                aria-hidden="true"
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${pil.theme.rule}`}
                              >
                                <Check className="h-3.5 w-3.5" />
                              </span>
                              <span className="text-base font-semibold transition-transform duration-300 group-hover/pt:translate-x-1.5 sm:text-lg">
                                {pt}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        data-card-reveal
                        href="/produk/erp"
                        aria-label={`Lihat modul pilar ${pil.title}`}
                        className="group/cta flex items-center justify-between gap-4 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current focus-visible:outline"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
                          Lihat modul pilar ini
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${pil.theme.rule} ${pil.theme.ctaHover}`}
                        >
                          <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover/cta:rotate-0" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Peredup: menggelap saat kartu berikutnya menimpa. Ikut
                      ter-clip oleh `clip-path` di induknya, jadi tidak perlu
                      radius sendiri. */}
                  <span
                    data-card-dim
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gray-900 opacity-0"
                  />
                </div>
              </li>
            );
          })}
        </ol>

      </div>

      {/* ============ 3. MARQUEE ============ */}
      {/* Di LUAR container: lebarnya mengikuti section, jadi garis dan teksnya
          mentok kiri-kanan layar. Section-nya tidak punya padding horizontal
          (`px` hanya ada di container), jadi tidak ada sisa gutter. */}
      <div
        data-marquee
        aria-hidden="true"
        className="mt-20 overflow-hidden border-y border-primary py-6 sm:mt-28 sm:py-8"
      >
        <div data-marquee-track className="flex w-max will-change-transform">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((text, k) => (
                <span key={text} className="flex items-center">
                  <span
                    className={`whitespace-nowrap px-6 text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-none tracking-[-0.04em] sm:px-10 ${
                      k % 2 === 0
                        ? "text-primary"
                        : "text-transparent [-webkit-text-stroke:2px_var(--color-primary)]"
                    }`}
                  >
                    {text}
                  </span>
                  <span className="h-3 w-3 shrink-0 rotate-45 bg-secondary sm:h-4 sm:w-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={CONTAINER}>
        {/* ============ 4. PENUTUP ============ */}
        <div
          data-closing
          className="mt-20 grid gap-10 sm:mt-28 lg:grid-cols-12 lg:items-end lg:gap-14"
        >
          <h3 className="text-[clamp(2.25rem,5.6vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-900 lg:col-span-8">
            <Line>Aktifkan satu pilar dulu,</Line>
            <Line>
              sisanya <span className="text-secondary">menyusul.</span>
            </Line>
          </h3>

          <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:items-end">
            <p
              data-fade
              className="max-w-[34ch] text-base leading-relaxed text-gray-700 sm:text-lg lg:text-right"
            >
              Setiap pilar dapat diaktifkan bertahap, sesuai kesiapan tim Anda.
            </p>
            <div data-fade>
              <BracketButton href="/produk/erp">Buka katalog modul &amp; harga</BracketButton>
            </div>
          </div>
        </div>
      </div>

      {/* Transisi bertangga "impact" di tepi ATAS section, perpanjangan band Stats. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-1 h-10 sm:h-16"
        style={{ transform: `translateY(${STATS_SEAM_OFFSET}px)` }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 76"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={IMPACT_BOTTOM_PATH}
            fill="var(--color-primary)"
          />
        </svg>
      </div>
    </section>
  );
}