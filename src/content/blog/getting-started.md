---
title: 'Memulai dengan SeminarKit'
description: 'Panduan cepat untuk memahami struktur konten dan menyesuaikan SeminarKit dengan acara Anda.'
pubDate: 2026-07-01
heroImage: '../../assets/images/blog/getting-started.jpg'
tags: ['seminar', 'panduan', 'setup']
author: 'Tim SeminarKit'
featured: true
---

Selamat datang di SeminarKit. Panduan ini membantu Anda memahami struktur halaman, paket, dan cara menyesuaikan penawaran untuk acara Anda.

## Mulai cepat

Untuk melihat konten SeminarKit secara lokal, jalankan perintah berikut:

```bash
# Masuk ke folder proyek
cd seminar-kit

# Pasang dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka `http://localhost:3000` untuk melihat tampilan awal situs.

## Struktur proyek

```
seminar-kit/
├── src/
│   ├── components/    # Komponen UI yang dapat digunakan ulang
│   ├── content/       # Artikel, produk, dan data galeri
│   ├── layouts/       # Tata letak halaman
│   ├── pages/         # Rute halaman utama
│   └── styles/        # Variabel warna dan gaya global
├── public/            # Aset statis seperti gambar
└── astro.config.mjs   # Konfigurasi Astro
```

## Menyesuaikan konten

### Theme Colors

The theme uses CSS custom properties for easy customization. Edit `src/styles/tokens.css`:

```css
:root {
  --color-accent: hsl(280, 70%, 60%);
  --aurora-1: hsl(280, 100%, 70%);
  --aurora-2: hsl(200, 100%, 60%);
}
```

### Site Configuration

Sesuaikan nama dan deskripsi di `src/site.config.ts`:

```typescript
export default {
  name: 'SeminarKit',
  title: 'SeminarKit — Perlengkapan Seminar Profesional',
  description: 'SeminarKit menyediakan paket perlengkapan seminar lengkap untuk acara Anda.',
  // ... opsi lainnya
};
```

## Fitur utama

- **Paket seminar siap pakai**: Paket terstruktur untuk acara kecil hingga besar
- **Panduan acara**: Artikel dan checklist operasional
- **Galeri penggunaan**: Contoh paket dalam acara nyata
- **Konten fleksibel**: Data mudah disesuaikan tanpa mengubah markup
- **Performa cepat**: Render server dengan JavaScript minimal

## Langkah berikutnya

- Perbarui data paket di `src/content/landing/demo.json`
- Tambahkan artikel baru untuk topik acara
- Sesuaikan halaman produk dan galeri dengan koleksi Anda

SeminarKit dirancang untuk membantu tim Anda fokus pada penyelenggaraan acara yang sukses.