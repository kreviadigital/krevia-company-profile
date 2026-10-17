# 06: RFQ Consultation Form & WhatsApp Integration

**What to build:** Seksi konversi utama *"Ceritakan masalah bisnis Anda."* dalam kontainer Deep Navy dengan rincian kontak konsultasi awal di sebelah kiri dan formulir permintaan di sebelah kanan (field: Nama, WhatsApp/Email, Jenis Usaha [dropdown/select], Kebutuhan Anda [textarea], dan tombol aksi "Kirim Permintaan" berwarna warm amber). Form terhubung ke generator pesan WhatsApp resmi serta float/direct button WhatsApp yang selalu mudah dijangkau.

**Blocked by:** 01: Design Tokens & Global Shell (Navbar & Footer)

**Status:** resolved

- [x] Kontainer formulir mengadopsi tema Deep Navy dengan kontras teks putih dan input fields yang nyaman diakses.
- [x] Field form mencakup: Nama, WhatsApp/Email, Pilihan Jenis Usaha (misal: Hotel/Penginapan, Bengkel, UMKM/Retail, dsb.), dan Deskripsi Kebutuhan.
- [x] Tombol CTA "Kirim Permintaan" memiliki styling warna warm amber dengan teks kontras gelap.
- [x] Validasi form sederhana untuk memastikan data pengirim terisi dengan benar.
- [x] Aksi submit memformat pesan secara otomatis dan mengarahkan pengguna ke chat WhatsApp Krevia Digital (`wa.me/...`).
- [x] Tombol pintas "Chat WhatsApp" di footer atau floating berfungsi mengarahkan langsung ke nomor admin.
- [x] Seluruh seksi di halaman terintegrasi secara harmonis dengan transisi scroll mulus dan build lolos verifikasi tanpa error.
