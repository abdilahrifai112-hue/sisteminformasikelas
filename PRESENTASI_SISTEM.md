# 🎓 CATATAN PRESENTASI: SISTEM INFORMASI KELAS (SIK)
**Versi Bahasa Santai & Mudah Dimengerti**

Dokumen ini dibuat khusus agar kamu bisa menjelaskan sistem ini ke siapa saja (teman, guru, atau orang tua) tanpa pusing dengan istilah coding yang rumit.

---

## 1. Apa Itu Web SIK? (Analogi Sederhana)
Bayangkan **Buku Jurnal Kelas** yang biasanya ada di meja guru, tapi versinya **Digital/Online**.

*   **Dulu:** Kalau mau lihat nilai atau absen, siswa harus tanya ke guru atau lihat papan pengumuman.
*   **Sekarang:** Cukup buka website ini lewat HP/Laptop masing-masing. Hemat kertas, cepat, dan modern.

---

## 2. Fitur Keren (Bahasa Orang Awam)

### A. Satu Website, Dua Wajah (Siswa vs Guru)
Sistem ini pintar membedakan siapa yang datang:
1.  **Jika Siswa (Tamu):**
    *   Ibarat masuk museum, cuma bisa **"Lihat-lihat"**.
    *   Bisa cek nilai sendiri dan lihat ranking teman.
    *   *Nggak bisa iseng ubah nilai.*
2.  **Jika Guru (Admin):**
    *   Ibarat pengelola museum, punya **"Kunci Master"**.
    *   Bisa ubah nilai, ganti status hadir/alpa, dan data itu langsung tersimpan.

### B. "Ranking Otomatis" (Juaranya Siapa?)
Di Dashboard depan, ada daftar **Top 3 Siswa**.
*   Ini **bukan ditulis manual**.
*   Sistem punya kalkulator otomatis. Setiap kali Guru mengubah nilai Matematika atau Fisika seseorang, sistem langsung menghitung ulang rata-ratanya dan menyusun ulang rankingnya saat itu juga. Canggih kan?

---

## 3. Bedah "Kalkulator Ajaib" (Cara Hitung Nilai) ✨
*Bagian ini wajib dijelaskan kalau ditanya "Gimana cara dia tau ranking 1 nya?"*

Sistem ini punya **Otak Matematika** sendiri di balik layar.
Rumusnya sederhana tapi kerjanya kilat:

1.  **Mengumpulkan Angka**: Sistem mengambil 6 nilai pelajaran (MTK, Fisika, Kimia, Biologi, B.Indo, B.Inggris).
2.  **Menjumlahkan**: `Total = MTK + FIS + KIM + BIO + IND + ING`.
3.  **Membagi Rata**: `Rata-rata = Total / 6`.
4.  **Mengurutkan (Sorting)**:
    *   Setelah semua nilai rata-rata siswa dihitung, sistem mengurutkan dari yang **TERBESAR** ke **TERKECIL**.
    *   Siswa dengan rata-rata paling tinggi otomatis ditaruh di Ranking 1.

**Contoh Kasus:**
Kalau Guru mengubah nilai MTK Budi dari 50 jadi 100, sistem langsung:
1.  Hapus rata-rata lama Budi.
2.  Hitung rata-rata baru.
3.  Cek lagi, apakah Budi sekarang lebih pintar dari Ranking 1 sebelumnya?
4.  Kalau iya, **geser!** Budi naik ke atas. Semua terjadi dalam kedipan mata (0.01 detik).

---

## 4. Pertanyaan Teknis: "Kok Bisa Nilainya Kesimpen?"

Kalau ada yang tanya: *"Ini datanya disimpan di mana? Server mana?"*
Jawab dengan santai:

> "Sistem ini menggunakan **Teknologi Penyimpanan Browser** (Local Storage)."

**Penjelasan Gampangnya:**
*   Bayangkan browser (Chrome/Edge) kamu punya **Buku Catatan Kecil** tersembunyi.
*   Saat Bu Guru klik "Simpan Nilai", sistem menulis nilai itu ke Buku Catatan Kecil di dalam browser tersebut.
*   Jadi, meskipun laptop dimatikan, besoknya pas dibuka lagi, nilainya masih ada di situ. Nggak hilang!

*(Catatan: Ini disebut "Client-Side Database". Jadi nggak butuh server mahal, cukup browser aja).*

---

## 5. Cara Demo (Biar Kelihatan Wow! ✨)

Pas presentasi, ikuti langkah drama ini:

**Adegan 1: Si Murid Penasaran**
1.  Buka web, Login sebagai **Siswa** (pilih nama sembarang, misal: Budi).
2.  Tunjukkan: "Lihat, Budi ranking-nya masih bawah. Nilainya pas-pasan."
3.  Logout.

**Adegan 2: Guru Beraksi**
1.  Login lagi sebagai **Guru** (klik link di bawah).
2.  Masuk ke menu **Nilai**.
3.  Cari nama Budi. Ubah nilainya jadi 100 semua. Klik **Simpan**.
4.  Logout.

**Adegan 3: Pembuktian**
1.  Login ulang sebagai **Siswa (Budi)**.
2.  Langsung tunjuk ke Dashboard: "TARA! Budi sekarang tiba-tiba jadi Ranking 1!".
3.  Jelaskan: "Inilah bukti **Kalkulator Otomatis** bekerja. Nggak perlu ngitung manual pake kalkulator beras lagi!".

---

## 6. Kesimpulan
Web SIK ini adalah solusi modern buat kelas XI MIPA 1. Tampilannya keren, hitungannya otomatis, dan praktis. Guru senang, siswa tenang!
