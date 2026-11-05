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
