/* ------------------------------------------------------------------------- */
/*  Skala tipografi display                                                  */
/* ------------------------------------------------------------------------- */

/**
 * Ukuran headline display halaman.
 *
 * Dua tempat memakai ini dan **wajib** tetap sama supaya halaman beranda dan
 * halaman katalog ERP terasa satu keluarga:
 *
 *   - `ErpOverview`  -> "Empat pilar yang menopang operasional."
 *   - `ErpHero`      -> "Sistem operasional tanpa keterikatan vendor."
 *
 * Sebelumnya keduanya ditulis terpisah dan kebetulan berbeda (9vw/9rem vs
 * 8,4vw/7,5rem), sehingga headline yang isinya sama-sama tiga baris tampil
 * dengan tinggi berbeda di lebar layar yang sama. Sekarang satu sumber.
 *
 * Batas atasnya diturunkan dari 9rem ke 6,5rem: pada 1440px itu berarti
 * ~92px, bukan ~130px. Tiga baris headline tidak lagi memakan sepertiga
 * layar, dan baris terakhir tidak lagi mendesak konten di bawahnya.
 */
export const DISPLAY_HEADLINE = "text-[clamp(2.25rem,6.4vw,6.5rem)]";

/**
 * `leading` untuk `DISPLAY_HEADLINE`.
 *
 * 1.02 memberi ruang untuk ascender/descender Archivo pada bobot 800. Dengan
 * `leading-[0.92]` sebelumnya, kotak baris lebih pendek daripada tinta huruf,
 * jadi masker `overflow-hidden` di `DisplayLine` memotong bagian atas dan
 * bawah glyph.
 */
export const DISPLAY_HEADLINE_LEADING = "leading-[1.02]";

/**
 * Padding vertikal masker baris headline, relatif terhadap ukuran font.
 *
 * Masker memotong tinta yang keluar dari kotak baris. Archivo 800 punya tinta
 * ~1,26x tinggi kotak barisnya, jadi tiap sisi butuh ~0,13em ruang lebih.
 * `0.2em` memberi sisa aman untuk descender (`g`, `y`, `p`) dan ascender
 * sekaligus tetap menutup teks saat animasi reveal — animasi menggeser tiap
 * baris sejauh 115% tinggi barisnya, dan 0,2em masih lebih besar dari 15%
 * tinggi baris yang perlu disembunyikan.
 *
 * Angka negatif di `DISPLAY_LINE_PULL` mengembalikan tinggi layout, jadi
 * padding ini tidak menambah jarak antar-baris.
 */
export const DISPLAY_LINE_PAD = "py-[0.2em]";
export const DISPLAY_LINE_PULL = "-my-[0.2em]";
