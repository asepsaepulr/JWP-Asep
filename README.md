# Aplikasi - To-Do List App

Proyek ini merupakan aplikasi **To-Do List sederhana** berbasis web menggunakan **PHP, JavaScript, CSS, dan Bootstrap**.  
Selain itu, project ini sudah dikonfigurasi untuk berjalan di **Docker** agar lebih mudah dalam proses setup lingkungan pengembangan.

---
## Struktur Folder
```
│
├── asset/ # Folder untuk file aset aplikasi
│ ├── script.js # File JavaScript (logika aplikasi To-Do List)
│ └── style.css # File CSS (custom styling tambahan)
│
├── Screenshot/ # Dokumentasi screenshot hasil pengerjaan
│ ├── Pekerjaan 1 Phpmyadmin.png
│ ├── Pekerjaan 1 Web Server.png
│ ├── Pekerjaan 2 Halaman Utama.png
│ ├── Pekerjaan 3 Checkbox dan Hapus.png
│ └── Pekerjaan 4 Tidak ada Error.png
│
├── docker-compose.yml # Konfigurasi Docker untuk menjalankan project
├── index.php # Halaman utama aplikasi
└── README.md # Dokumentasi project
```


## Fitur Utama
- Menampilkan daftar to-do dengan nomor urut.
- Menambahkan tugas baru tanpa duplikasi.
- Checkbox untuk menandai tugas yang selesai.
- Edit data tugas
- Hapus data dari daftar to-do.
- Tampilan rapi menggunakan **Bootstrap 5** + CSS custom.
- Default data akan muncul saat aplikasi pertama kali dijalankan.

## Berikut beberapa dokumentasi dari hasil pengerjaan:
- Pekerjaan 1: Setup PhpMyAdmin & Web Server
- Pekerjaan 2: Halaman Utama To-Do List
- Pekerjaan 3: Checkbox & Hapus Data
- Pekerjaan 4: Aplikasi berjalan tanpa error

## Cara Menjalankan
1. **Clone Repository**
   ```bash
   git clone https://github.com/username/JWP-ASEP.git
   cd JWP-ASEP
2. **Jalankan dengan Docker**
   ```bash
   docker-compose up -d
4. **Buka browser dan masuk ke:**
http://localhost:8080
5. **Akses PhpMyAdmin**
http://localhost:8081
