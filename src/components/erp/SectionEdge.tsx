import type { SectionEdgeSpec } from "@/lib/erp-visual";

/**
 * Pita transisi section — satu-satunya cara sebuah section "menonjol" ke
 * tetangganya di halaman ERP.
 *
 * Cara kerjanya sama dengan pita di `FaqSection` dan notch di `Footer`:
 *
 * 1. Pita diposisikan **di luar** kotak section (`bottom: calc(100% - 1px)`
 *    untuk tepi atas, `top: calc(100% - 1px)` untuk tepi bawah), jadi ia
 *    tidak menambah tinggi layout sama sekali.
 * 2. Pita diisi **warna section pemiliknya**, bukan warna tetangganya. Jadi
 *    yang terlihat adalah section ini yang naik/turun menimpa tetangga, bukan
 *    tetangga yang memotong section ini.
 * 3. `-1px` pada offset menutup garis rambut di sambungan antara pita dan
 *    badan section — tanpa itu, sub-piksel rendering menyisakan garis tipis
 *    berwarna latar di antara keduanya.
 *
 * `role` menentukan sisi mana yang dipakai, dan itu **tidak** boleh ditebak
 * dari nama path: nilainya hasil pengukuran piksel (lihat `erp-visual.ts`).
 *
 * Catatan z-index: komponen ini butuh `z-20` supaya pita tepi bawah tidak
 * tertutup section berikutnya yang datang belakangan di DOM. Itu hanya bekerja
 * kalau section pemiliknya `relative` TANPA z-index — kalau section diberi
 * z-index, ia membentuk stacking context sendiri dan `z-20` si pita jadi
 * terkurung di dalamnya. Jadi jangan tambahkan `z-*` ke `<section>` pemilik.
 */
export function SectionEdge({
  spec,
  fill = "var(--color-primary)",
  className = "",
}: {
  spec: SectionEdgeSpec;
  /** Warna isi pita. Harus sama dengan latar section pemiliknya. */
  fill?: string;
  className?: string;
}) {
  const atTop = spec.role === "top";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-20 ${
        atTop ? "bottom-[calc(100%-1px)]" : "top-[calc(100%-1px)]"
      } ${className}`}
      style={{ height: spec.height }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={spec.viewBox}
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={spec.d} fill={fill} fillRule={spec.fillRule} />
      </svg>
    </div>
  );
}
