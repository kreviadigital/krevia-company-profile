/* ------------------------------------------------------------------------- */
/* Geometri kartu ber-notch — siluet flomodia                                 */
/* ------------------------------------------------------------------------- */

/**
 * Dua proporsi dari **satu siluet yang sama** dengan kartu pilar di
 * `ErpOverview` (bentuknya disalin persis dari `CARD_SHAPE`/`CARD_SHAPE_SM` di
 * sana): chamfer diagonal di kiri-atas, takik dangkal di tepi atas, dan tepi
 * bawah bertingkat. Dengan begitu section Beranda memakai bahasa bentuk yang
 * sama, bukan siluet kedua yang berbeda.
 *
 * - `NOTCH_WIDE` (409×231) — proporsi landscape, dipakai mulai `lg`.
 * - `NOTCH_TALL` (409×620) — proporsi portrait, dipakai di bawah `lg`.
 *
 * Kenapa dua varian: kedalaman takik ikut tinggi elemen lewat
 * `objectBoundingBox`. Kalau proporsi landscape dipakai di kartu portrait yang
 * tinggi, takiknya membesar sampai ~63px. Dengan varian portrait, takik tetap
 * ~18–24px berapa pun tinggi kartunya.
 *
 * Angka `scale` memetakan viewBox ke 0–1 di kedua sumbu, jadi bentuk selalu
 * mengisi elemen tanpa memedulikan rasio aslinya.
 *
 * Modul ini **hanya berisi geometri**. `id` elemen `<clipPath>` sengaja tidak
 * disimpan di sini, karena beberapa komponen bisa hidup di halaman yang sama —
 * id harus unik per komponen dan ditetapkan oleh pemakainya.
 */
export const NOTCH_WIDE = {
  w: 409,
  h: 231,
  scale: "0.0024449878, 0.0043290043",
  d: "M4.21873 20.9876L20.9876 4.21872C23.6888 1.51752 27.3524 0 31.1725 0H99.475C104.198 0 108.027 3.82893 108.027 8.55215C108.027 13.2754 111.856 17.1043 116.579 17.1043H343.436C348.16 17.1043 351.989 13.2754 351.989 8.55215C351.989 3.82893 355.818 0 360.541 0H394.299C402.254 0 408.703 6.44872 408.703 14.4036V202.551C408.703 210.506 402.254 216.955 394.299 216.955H214.819C210.999 216.955 207.335 218.472 204.634 221.173L199.568 226.239C196.867 228.94 193.203 230.458 189.383 230.458H14.4036C6.44872 230.458 0 224.009 0 216.054V31.1725C0 27.3524 1.51753 23.6888 4.21873 20.9876Z",
} as const;

/** 409×620 — siluet sama, proporsi portrait (lihat catatan di atas). */
export const NOTCH_TALL = {
  w: 409,
  h: 620,
  scale: "0.0024449878, 0.0016129032",
  d: "M4.219 20.988L20.988 4.219C23.689 1.518 27.352 0 31.173 0H99.475C104.198 0 108.027 3.829 108.027 8.552C108.027 13.275 111.856 17.104 116.579 17.104H343.436C348.16 17.104 351.989 13.275 351.989 8.552C351.989 3.829 355.818 0 360.541 0H394.299C402.254 0 408.703 6.449 408.703 14.404V591.551C408.703 599.506 402.254 605.955 394.299 605.955H214.819C210.999 605.955 207.335 607.472 204.634 610.173L199.568 615.239C196.867 617.94 193.203 619.458 189.383 619.458H14.404C6.449 619.458 0 613.009 0 605.054V31.173C0 27.352 1.518 23.689 4.219 20.988Z",
} as const;

/* ------------------------------------------------------------------------- */
/* Varian khusus: langkah di tepi bawah dicerminkan vertikal                  */
/* ------------------------------------------------------------------------- */

/**
 * Sama seperti `NOTCH_WIDE`, tetapi **langkah di tepi bawah dicerminkan
 * vertikal**: sisi kiri naik 13,5 unit dan sisi kanan turun, kebalikan dari
 * bentuk aslinya. Tepi atas, chamfer, dan takik tidak berubah.
 *
 * Dipakai hanya untuk tile pertama `ServicesBento` — bukan bentuk umum, supaya
 * tile lain tetap memakai siluet flomodia yang sama dengan `ErpOverview`.
 *
 * Cara menurunkannya: kedua level bawah (216,955 dan 230,458) dipertukarkan,
 * termasuk titik kontrol kurva-S di antaranya; titik ujung sisi kiri/kanan ikut
 * bertukar sehingga radius sudut tetap 14,4 unit. Bbox tinggi tetap 231, jadi
 * `scale` tidak berubah.
 */
export const NOTCH_WIDE_FLIP = {
  w: 409,
  h: 231,
  scale: "0.0024449878, 0.0043290043",
  d: "M4.21873 20.9876L20.9876 4.21872C23.6888 1.51752 27.3524 0 31.1725 0H99.475C104.198 0 108.027 3.82893 108.027 8.55215C108.027 13.2754 111.856 17.1043 116.579 17.1043H343.436C348.16 17.1043 351.989 13.2754 351.989 8.55215C351.989 3.82893 355.818 0 360.541 0H394.299C402.254 0 408.703 6.44872 408.703 14.4036V216.054C408.703 224.009 402.254 230.458 394.299 230.458H214.819C210.999 230.458 207.335 228.941 204.634 226.24L199.568 221.174C196.867 218.473 193.203 216.955 189.383 216.955H14.4036C6.44872 216.955 0 210.506 0 202.551V31.1725C0 27.3524 1.51753 23.6888 4.21873 20.9876Z",
} as const;

/** `NOTCH_TALL` dengan langkah bawah dicerminkan vertikal — pasangan dari `NOTCH_WIDE_FLIP`. */
export const NOTCH_TALL_FLIP = {
  w: 409,
  h: 620,
  scale: "0.0024449878, 0.0016129032",
  d: "M4.219 20.988L20.988 4.219C23.689 1.518 27.352 0 31.173 0H99.475C104.198 0 108.027 3.829 108.027 8.552C108.027 13.275 111.856 17.104 116.579 17.104H343.436C348.16 17.104 351.989 13.275 351.989 8.552C351.989 3.829 355.818 0 360.541 0H394.299C402.254 0 408.703 6.449 408.703 14.404V605.054C408.703 613.009 402.254 619.458 394.299 619.458H214.819C210.999 619.458 207.335 617.941 204.634 615.24L199.568 610.174C196.867 607.473 193.203 605.955 189.383 605.955H14.404C6.449 605.955 0 599.506 0 591.551V31.173C0 27.352 1.518 23.689 4.219 20.988Z",
} as const;

/* ------------------------------------------------------------------------- */
/* Varian `_XN`: cermin horizontal penuh, lalu takik atas dicerminkan lagi    */
/* ------------------------------------------------------------------------- */

/**
 * Cermin **dua tahap**, dipakai tile 1 dan tile 2 `ServicesBento`:
 *
 * 1. `X` — seluruh siluet dicerminkan horizontal (`x → w − x`). Chamfer yang
 *    semula di kiri-atas pindah ke **kanan-atas**, langkah tepi bawah pindah ke
 *    sisi seberangnya.
 * 2. `N` — **hanya blok takik tepi atas** yang dicerminkan horizontal sekali
 *    lagi, sehingga plateau takik kembali ke orientasi semula sementara chamfer
 *    dan langkah bawah tetap pada hasil tahap 1.
 *
 * Jadi hasil akhirnya: chamfer kanan-atas, langkah bawah seperti `_X`, takik
 * atas dengan arah hadap kebalikan dari `_X`.
 *
 * **Cara menurunkan tahap 2.** Traversal tepi atas berjalan kanan → kiri, jadi
 * blok takik harus ditulis sebagai **kebalikan arah** dari blok takik aslinya,
 * dan titik kontrol tiap cubic ikut **ditukar** (`c1 ↔ c2`). Kalau arah
 * dibalik tanpa menukar titik kontrol, kurvanya membelok ke sisi yang salah dan
 * path-nya menyilang sendiri — saat dirender hasilnya runtuh jadi garis tipis.
 * Selain blok itu, seluruh perintah path **identik byte-per-byte** dengan
 * `_X` (kepala dan ekor sudah diverifikasi sama saat generate).
 *
 * **Kenapa path dicerminkan, bukan memakai `transform`?** `clipPath` dengan
 * `clipPathUnits="objectBoundingBox"` **tidak merender apa pun** bila
 * `transform`-nya memuat pencerminan — diuji langsung di Chromium:
 * `scale(-1 1)`, `matrix(… a=-sx …)`, dan kombinasi `translate` + `scale`
 * semuanya menghasilkan bidang kosong. Jadi pencerminan ditulis ke data path
 * dan `transform` tetap murni `scale`.
 */
export const NOTCH_WIDE_XN = {
  w: 409,
  h: 231,
  scale: "0.0024449878, 0.0043290043",
  d: "M404.78127 20.9876L388.0124 4.21872C385.3112 1.51752 381.6476 0 377.8275 0H360.541C355.818 0 351.989 3.82893 351.989 8.55215C351.989 13.2754 348.16 17.1043 343.436 17.1043H116.579C111.856 17.1043 108.027 13.2754 108.027 8.55215C108.027 3.82893 104.198 0 99.475 0H14.701C6.746 0 0.297 6.44872 0.297 14.4036V202.551C0.297 210.506 6.746 216.955 14.701 216.955H194.181C198.001 216.955 201.665 218.472 204.366 221.173L209.432 226.239C212.133 228.94 215.797 230.458 219.617 230.458H394.5964C402.55128 230.458 409 224.009 409 216.054V31.1725C409 27.3524 407.48247 23.6888 404.78127 20.9876Z",
} as const;

/** `NOTCH_TALL` versi `_XN` (409×620). */
export const NOTCH_TALL_XN = {
  w: 409,
  h: 620,
  scale: "0.0024449878, 0.0016129032",
  d: "M404.781 20.988L388.012 4.219C385.311 1.518 381.648 0 377.827 0H360.541C355.818 0 351.989 3.829 351.989 8.552C351.989 13.275 348.16 17.104 343.436 17.104H116.579C111.856 17.104 108.027 13.275 108.027 8.552C108.027 3.829 104.198 0 99.475 0H14.701C6.746 0 0.297 6.449 0.297 14.404V591.551C0.297 599.506 6.746 605.955 14.701 605.955H194.181C198.001 605.955 201.665 607.472 204.366 610.173L209.432 615.239C212.133 617.94 215.797 619.458 219.617 619.458H394.596C402.551 619.458 409 613.009 409 605.054V31.173C409 27.352 407.482 23.689 404.781 20.988Z",
} as const;

/** `NOTCH_WIDE_FLIP` versi `_XN` (langkah bawah sudah dicerminkan vertikal). */
export const NOTCH_WIDE_FLIP_XN = {
  w: 409,
  h: 231,
  scale: "0.0024449878, 0.0043290043",
  d: "M404.78127 20.9876L388.0124 4.21872C385.3112 1.51752 381.6476 0 377.8275 0H360.541C355.818 0 351.989 3.82893 351.989 8.55215C351.989 13.2754 348.16 17.1043 343.436 17.1043H116.579C111.856 17.1043 108.027 13.2754 108.027 8.55215C108.027 3.82893 104.198 0 99.475 0H14.701C6.746 0 0.297 6.44872 0.297 14.4036V216.054C0.297 224.009 6.746 230.458 14.701 230.458H194.181C198.001 230.458 201.665 228.941 204.366 226.24L209.432 221.174C212.133 218.473 215.797 216.955 219.617 216.955H394.5964C402.55128 216.955 409 210.506 409 202.551V31.1725C409 27.3524 407.48247 23.6888 404.78127 20.9876Z",
} as const;

/** `NOTCH_TALL_FLIP` versi `_XN` (langkah bawah sudah dicerminkan vertikal). */
export const NOTCH_TALL_FLIP_XN = {
  w: 409,
  h: 620,
  scale: "0.0024449878, 0.0016129032",
  d: "M404.781 20.988L388.012 4.219C385.311 1.518 381.648 0 377.827 0H360.541C355.818 0 351.989 3.829 351.989 8.552C351.989 13.275 348.16 17.104 343.436 17.104H116.579C111.856 17.104 108.027 13.275 108.027 8.552C108.027 3.829 104.198 0 99.475 0H14.701C6.746 0 0.297 6.449 0.297 14.404V605.054C0.297 613.009 6.746 619.458 14.701 619.458H194.181C198.001 619.458 201.665 617.941 204.366 615.24L209.432 610.174C212.133 607.473 215.797 605.955 219.617 605.955H394.596C402.551 605.955 409 599.506 409 591.551V31.173C409 27.352 407.482 23.689 404.781 20.988Z",
} as const;
