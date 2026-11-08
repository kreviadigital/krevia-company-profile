/* ------------------------------------------------------------------------- */
/*  Sistem visual halaman katalog ERP                                        */
/* ------------------------------------------------------------------------- */

/**
 * Pita transisi section untuk `/produk/erp`.
 *
 * Semua path diambil apa adanya dari aset yang **sudah ada di repo** — katalog
 * Flomodia di `src/lib/flomodia-transitions.ts` dan notch kartu di
 * `Footer.tsx`. Tidak ada geometri baru yang dikarang di sini.
 *
 * Pemilihan ketiganya bukan berdasarkan selera. Tiap pita di katalog diukur
 * pada lebar 1440 dengan tinggi aslinya (cssHeight), lalu disaring:
 *
 *   1. salah satu tepinya tertutup >= 97%, supaya pita benar-benar menyambung
 *      ke section-nya dan tidak menyisakan lubang;
 *   2. kontur bebasnya punya amplitudo 10–80px, supaya ada bentuk yang terbaca
 *      tapi tidak menjadi potongan diagonal selebar layar;
 *   3. tidak ada kolom kosong sama sekali.
 *
 * Dari 23 pita, hanya tiga ini yang lolos. Sisanya gagal karena alasan yang
 * terukur, bukan karena selera:
 *   - terisi penuh (tidak membentuk siluet sama sekali): auth-bottom,
 *     calendar-*, component-top, creator-*, impact-*, partner-*, dst;
 *   - menjadi baji raksasa karena amplitudonya selebar tingginya:
 *     hero-bottom (127px), member-bottom (94px), footer-top (94px);
 *   - berlubang 93px di ujung kanan karena koordinat path keluar viewBox:
 *     calendar-top pada peran "top".
 *
 * `role` adalah hasil pengukuran piksel, **bukan** nama filenya, dan itu
 * penting: `calendar-top` justru berperilaku sebagai pita tepi BAWAH (badannya
 * menempel di atas), sedangkan `calendar-bottom` juga pita tepi bawah. Nama
 * sumbernya menyesatkan kalau dipakai sebagai penanda peran.
 *
 *   - `"bottom"` — badan pita menempel di tepi ATAS, kontur di bawah,
 *     jadi pita ini menggambar TEPI BAWAH section pemiliknya.
 *   - `"top"`    — badan pita menempel di tepi BAWAH, kontur di atas,
 *     jadi pita ini menggambar TEPI ATAS section pemiliknya.
 */
export type SectionEdgeRole = "top" | "bottom";

export type SectionEdgeSpec = {
  slug: string;
  role: SectionEdgeRole;
  /** Tinggi pita di layar (px). Sama dengan cssHeight asli Flomodia. */
  height: number;
  viewBox: string;
  fillRule: "nonzero" | "evenodd";
  d: string;
};

/**
 * Tiga batas antarsection halaman ERP.
 *
 * Aturannya satu dan berlaku untuk semuanya: **section navy yang menonjol,
 * section terang yang digigit.** Karena itu semua pita diisi
 * `--color-primary`. Kalau tiap section menonjol ke tetangganya, sambungannya
 * jadi zigzag bolak-balik yang ramai; dan pita terang di atas navy praktis
 * tidak terlihat bedanya dari garis lurus, jadi tidak ada yang didapat.
 *
 * Susunan halaman yang dihasilkan:
 *
 *   hero (terang)  ->  [capabilitiesTop]  ->  capabilities (navy)
 *                  ->  [capabilitiesBottom] ->  pricing (terang)
 *                  ->  [closingTop]      ->  penutup (navy)
 *
 * Pricing diapit dua notch navy, jadi ia terbaca sebagai lembah terang di
 * antara dua blok gelap — bukan dua section terang yang menempel tanpa batas.
 */
export const SECTION_EDGES = {
  /** Tepi atas capabilities: navy naik menimpa hero. */
  capabilitiesTop: {
    slug: "footer-card-top",
    role: "top",
    height: 48,
    viewBox: "0 0 1152 51",
    fillRule: "evenodd",
    d:
      "M510.716 0.000976562H20C8.95431 0.000976562 0 8.95529 0 20.001V354.501C0 365.547 8.9543 374.501 20 374.501H211.716C217.02 374.501 222.107 376.608 225.858 380.359L249.642 404.143C253.393 407.894 258.48 410.001 263.784 410.001H1104.22C1109.52 410.001 1114.61 407.894 1118.36 404.143L1146.14 376.359C1149.89 372.608 1152 367.521 1152 362.217V52.001C1152 40.9553 1143.05 32.001 1132 32.001H559.284C553.98 32.001 548.893 29.8938 545.142 26.1431L524.858 5.85884C521.107 2.10811 516.02 0.000976562 510.716 0.000976562Z",
  },
  /** Tepi bawah capabilities: navy turun menimpa pricing. */
  capabilitiesBottom: {
    slug: "footer-card-bottom",
    role: "bottom",
    height: 48,
    viewBox: "0 0 1152 56",
    fillRule: "evenodd",
    d:
      "M510.716 -355H20C8.95431 -355 0 -346.046 0 -335V-0.5C0 10.5457 8.9543 19.5 20 19.5H211.716C217.02 19.5 222.107 21.6071 225.858 25.3578L249.642 49.1421C253.393 52.8929 258.48 55 263.784 55H1104.22C1109.52 55 1114.61 52.8929 1118.36 49.1422L1146.14 21.3579C1149.89 17.6071 1152 12.5201 1152 7.21573V-303C1152 -314.046 1143.05 -323 1132 -323H559.284C553.98 -323 548.893 -325.107 545.142 -328.858L524.858 -349.142C521.107 -352.893 516.02 -355 510.716 -355Z",
  },
  /** Tepi atas penutup: navy naik menimpa pricing. */
  closingTop: {
    slug: "calendar-top",
    role: "top",
    height: 40,
    viewBox: "0 0 1280 39",
    fillRule: "nonzero",
    d:
      "M227.065 30.2033H9C-13.0914 30.2033 -31 48.1119 -31 70.2033V485C-31 507.091 -13.0914 525 8.99997 525H1268C1290.09 525 1308 507.091 1308 485V78.8315C1308 56.7402 1290.09 38.8315 1268 38.8315H1200.96C1194.96 38.8315 1189.19 36.444 1184.95 32.1944C1180.7 27.9449 1174.94 25.5573 1168.93 25.5573H867.849C857.236 25.5573 847.059 21.3402 839.557 13.8342L838.446 12.7231C830.944 5.21715 820.767 1 810.155 1H477.897C471.889 1 466.127 3.38756 461.879 7.63711C457.632 11.8867 451.87 14.2742 445.862 14.2742H265.507C258.297 14.2742 251.383 17.1393 246.286 22.2388C241.189 27.3382 234.275 30.2033 227.065 30.2033Z",
  },
} as const satisfies Record<string, SectionEdgeSpec>;

/**
 * Container isi section. Lebih lebar dari `max-w-6xl` milik halaman lain
 * karena halaman ini memakai tipografi display besar ala `ErpOverview` di
 * beranda; pada 85rem jarak antar-kolom masih terbaca.
 */
export const ERP_CONTAINER = "mx-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-10";

/* ------------------------------------------------------------------------- */
/*  Token tampilan bersama                                                   */
/* ------------------------------------------------------------------------- */

/**
 * Gaya bidang gelap (section capabilities & penutup).
 *
 * Hairline memakai `white/12` — cukup untuk memisahkan sel di atas navy tanpa
 * berubah menjadi garis putih yang berisik. Angka dan label memakai
 * `tracking` lebar + `tabular-nums`, pola yang sama dengan `ErpOverview`.
 */
export const DARK_SURFACE = {
  section: "bg-primary text-white",
  hairline: "border-white/12",
  muted: "text-gray-300",
  faint: "text-gray-400",
  accent: "text-accent",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.2em] text-gray-300",
  panel: "bg-navy-card",
} as const;
