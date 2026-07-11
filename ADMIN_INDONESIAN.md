# Setup Admin dengan Upload Gambar - Bahasa Indonesia

## 🎉 Yang Baru Ditambahkan

### ✨ Fitur Baru:
1. **Upload Gambar dari Desktop** 📤
   - Drag & drop gambar ke area upload
   - Klik untuk browse file
   - Preview gambar sebelum simpan
   - Support JPG, PNG, WebP (max 5MB)

2. **Interface Bahasa Indonesia** 🇮🇩
   - Semua label, button, dan pesan dalam Bahasa Indonesia
   - Lebih user-friendly dan mudah dipahami

3. **Layout Lebih Jelas** 📐
   - Form dibagi menjadi beberapa section
   - Input field lebih besar dan mudah dibaca
   - Visual yang lebih menarik dengan emoji dan warna

4. **Real-time Update** ⚡
   - Artikel baru langsung muncul di daftar
   - Form otomatis clear setelah simpan
   - Tab otomatis switch ke daftar artikel

## 📋 Struktur Form Admin

```
┌─ 📝 KELOLA BLOG ────────────────────────────┐
│                                             │
│ [📋 Daftar Artikel]  [➕ Buat Artikel Baru] │
│                                             │
│ ┌─ 📄 INFORMASI DASAR ────────────────────┐ │
│ │  Judul Artikel *                        │ │
│ │  [__________________________________]   │ │
│ │                                         │ │
│ │  Slug URL *                             │ │
│ │  [__________________________________]   │ │
│ │                                         │ │
│ │  Ringkasan Singkat *                    │ │
│ │  [__________________________________]   │ │
│ │  [__________________________________]   │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─ ✍️ KONTEN ARTIKEL ─────────────────────┐ │
│ │  Isi Artikel *                          │ │
│ │  [____________________________________] │ │
│ │  [____________________________________] │ │
│ │  [____________________________________] │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─ 🖼️ GAMBAR SAMPUL ──────────────────────┐ │
│ │  Unggah Gambar                          │ │
│ │  ╔═══════════════════════════════════╗  │ │
│ │  ║   📤 Klik atau seret gambar      ║  │ │
│ │  ║   JPG, PNG, WebP (Max 5MB)       ║  │ │
│ │  ╚═══════════════════════════════════╝  │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─ ⚙️ PENGATURAN ──────────────────────────┐ │
│ │  Waktu Baca (menit) | ⭐ Jadikan Unggulan│ │
│ │  [___________________]                   │ │
│ │                                         │ │
│ │  Tag (Pisahkan dengan koma)              │ │
│ │  [__________________________________]   │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│  [💾 Simpan Artikel] [🔄 Bersihkan Form]  │
│                                             │
└─────────────────────────────────────────────┘
```

## 🚀 Cara Menggunakan

### 1. Akses Admin
```
URL: http://localhost:3000/admin
Password: admin123 (default)
```

### 2. Membuat Artikel Baru
1. Klik tab **➕ Buat Artikel Baru**
2. Isi **Judul Artikel** (contoh: "Belajar Astro")
3. **Slug** akan auto-generate (tapi bisa diubah)
4. Isi **Ringkasan Singkat** (preview di halaman blog)
5. Isi **Isi Artikel** (konten lengkap)
6. Upload **Gambar Sampul** dengan drag & drop atau klik
7. Atur **Waktu Baca** (default 5 menit)
8. Pilih **Tag** (pisahkan dengan koma)
9. Klik ⭐ untuk jadikan **Unggulan** (opsional)
10. Klik **💾 Simpan Artikel**
11. ✅ Artikel langsung tampil di daftar!

### 3. Edit Artikel
1. Di tab **📋 Daftar Artikel**, klik **✏️ Edit**
2. Form akan ter-populate dengan data artikel
3. Ubah data sesuai kebutuhan
4. Upload gambar baru atau tetap yang lama
5. Klik **💾 Simpan Artikel**

### 4. Hapus Artikel
1. Di tab **📋 Daftar Artikel**, klik **🗑️ Hapus**
2. Confirm di dialog yang muncul
3. ✅ Artikel terhapus permanen

## 📁 File-File Penting

```
src/
├── pages/
│   ├── admin.astro                   ← Admin Dashboard (Bahasa Indo)
│   └── api/
│       ├── upload.ts                 ← Upload image endpoint
│       ├── posts.ts                  ← CRUD posts
│       └── posts/[id].ts             ← Single post CRUD
├── lib/
│   └── db.ts                         ← Database queries
└── public/
    └── uploads/                      ← Folder gambar (auto-create)
```

## 🖼️ Gambar Upload

### Upload Folder
- Semua gambar disimpan di: `public/uploads/`
- Nama file: `[timestamp]-[random]-[original-name]`
- Contoh: `1720000000000-a1b2c3-belajar-astro.jpg`

### Validasi
- ✅ Support: JPG, PNG, WebP, GIF, dll
- ❌ Max size: 5MB
- ❌ File tidak valid: akan ditolak

## 🎨 Fitur UI

### Section Clarity
- Setiap bagian form dipisah dengan warna berbeda
- Title section dengan emoji untuk visual clarity
- Label field yang jelas dan deskriptif

### Form Input
- Input besar dan mudah dibaca
- Placeholder yang membantu user
- Focus state dengan shadow/color change

### Upload Area
- Drag & drop dengan visual feedback
- Progress bar saat upload
- Preview image setelah upload

### Post List
- Grid card dengan responsive design
- Image preview, title, date
- Badge untuk artikel unggulan
- Edit & Delete buttons

## 🔄 Real-time Features

✅ **Setelah Simpan Artikel:**
1. Alert sukses muncul
2. Form otomatis clear
3. Daftar artikel update otomatis
4. Tab switch ke daftar artikel
5. Page scroll ke atas

✅ **Setelah Delete Artikel:**
1. Alert konfirmasi
2. Alert sukses
3. Daftar artikel update otomatis

✅ **Setelah Edit Artikel:**
1. Form ter-populate otomatis
2. Tab switch ke create
3. Gambar preview muncul

## 🔐 Security

- ✅ Password protection di admin page
- ✅ Auth header di semua API call
- ✅ File upload validation
- ✅ SQL injection safe (menggunakan parameterized queries)

## 💡 Tips

1. **Gambar Optimal**
   - Ukuran: 1200x600 atau lebih
   - Format: JPG (lebih ringan)
   - Optimasi: gunakan image compressor

2. **Slug Best Practices**
   - Gunakan lowercase
   - Pisahkan dengan dash (-)
   - Contoh: "belajar-astro-framework"

3. **Tags**
   - Gunakan tag yang konsisten
   - Pisahkan dengan koma
   - Contoh: "astro, framework, javascript, tutorial"

4. **Reading Time**
   - 1 menit = ~200 kata
   - Hitung manual atau auto-calculated

## 🐛 Troubleshooting

### Upload error
- Pastikan ukuran file < 5MB
- Pastikan format file adalah gambar
- Cek permissions folder `public/uploads/`

### Form tidak submit
- Pastikan semua field required sudah diisi
- Cek browser console untuk error message

### Article tidak muncul
- Reload page admin
- Cek database connection
- Lihat browser console

## 📞 Support

Jika ada masalah, check:
- Browser console (F12)
- Server logs
- Network tab (untuk API call)
- Database untuk verify data

---

**✨ Sistem Admin Bahasa Indonesia siap digunakan!** 🎉
