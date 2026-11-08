import type { ReactNode } from "react";
import {
  DISPLAY_LINE_PAD,
  DISPLAY_LINE_PULL,
} from "@/lib/typography";

/**
 * Satu baris headline display di dalam masker.
 *
 * Dipakai oleh `ErpOverview` (beranda) dan `ErpHero` (katalog ERP) supaya
 * keduanya memakai geometri masker yang persis sama.
 *
 * Kenapa tidak cukup `overflow-hidden` saja: masker memotong apa pun yang
 * keluar dari kotak baris. Pada Archivo bobot 800, tinta glyph lebih tinggi
 * daripada kotak baris (`leading` < 1), jadi tepi atas huruf kapital dan
 * descender `g`/`y`/`p` terpotong — sebelumnya masing-masing ~12px di 1440px.
 *
 * Solusinya padding vertikal `0.2em` pada masker, lalu margin negatif sebesar
 * itu juga untuk mengembalikan tinggi layout. Hasilnya ruang tinta aman tetapi
 * jarak antar-baris tidak berubah.
 *
 * `data-line` dipertahankan: hook GSAP di kedua halaman menargetkan atribut
 * itu untuk menganimasikan baris naik dari bawah masker.
 */
export function DisplayLine({ children }: { children: ReactNode }) {
  return (
    <span className={`${DISPLAY_LINE_PULL} block overflow-hidden ${DISPLAY_LINE_PAD}`}>
      <span data-line className="block">
        {children}
        {/* Spasi di akhir baris: baris ini `display:block`, jadi spasinya tidak
            terlihat, tetapi `textContent` tetap terbaca "…menopang
            operasional…" alih-alih menempel menjadi satu kata. */}
        {" "}
      </span>
    </span>
  );
}
