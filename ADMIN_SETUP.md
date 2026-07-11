# Database-Driven Blog Admin System

Sistem admin lengkap dengan CRUD untuk mengelola konten blog langsung dari database MySQL.

## 🚀 Fitur

- ✅ Admin Dashboard dengan password protection
- ✅ Create, Read, Update, Delete blog posts
- ✅ Featured posts support
- ✅ Reading time calculator
- ✅ Image upload support (URL-based)
- ✅ Tag management
- ✅ Database-driven blog display
- ✅ Responsive design dengan glassmorphism UI

## 📋 Setup Database

### 1. Create Database dan Table

```sql
CREATE DATABASE IF NOT EXISTS blog;

USE blog;

CREATE TABLE blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content LONGTEXT NOT NULL,
  cover_image VARCHAR(500),
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read_time INT DEFAULT 5,
  is_featured BOOLEAN DEFAULT FALSE,
  tags TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 2. Configure Environment Variables

Edit file `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog
ADMIN_PASSWORD=your_secure_password
```

## 🔐 Admin Access

1. Akses halaman admin: `http://localhost:3000/admin`
2. Masukkan password admin saat diminta
3. Kelola blog posts dengan UI yang user-friendly

### Default Admin Password
```
admin123
```

**⚠️ JANGAN LUPA GANTI PASSWORD ADMIN DI `.env` SEBELUM PRODUCTION!**

## 📝 CRUD Operations

### Create Post
1. Klik tab "Create New Post"
2. Isi semua field yang diperlukan
3. Klik "Save Post"

### Read Posts
- Semua posts ditampilkan di tab "Manage Posts"
- Halaman blog public (http://localhost:3000/blog) mengambil dari database

### Update Post
1. Klik tombol "Edit" pada post di tab "Manage Posts"
2. Form akan ter-populate dengan data post
3. Ubah data sesuai kebutuhan
4. Klik "Save Post"

### Delete Post
1. Klik tombol "Delete" pada post
2. Confirm deletion
3. Post akan dihapus dari database

## 🎨 UI Components

### Admin Page
- Tab navigation untuk list dan create/edit
- Form dengan validation
- Responsive grid layout

### Blog Pages
- Posts diambil dari database secara real-time
- Featured posts section
- Individual post pages dengan full content
- Social sharing buttons

## 🔌 API Endpoints

### GET /api/posts
Mengambil semua blog posts

```bash
curl http://localhost:3000/api/posts
```

### POST /api/posts
Membuat post baru (memerlukan admin password)

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -H "x-admin-password: admin123" \
  -d '{
    "title": "My Post",
    "slug": "my-post",
    "excerpt": "Short description",
    "content": "Full content here",
    "cover_image": "https://...",
    "read_time": 5,
    "is_featured": false,
    "tags": "astro,web"
  }'
```

### GET /api/posts/[id]
Mengambil single post

```bash
curl http://localhost:3000/api/posts/1
```

### PUT /api/posts/[id]
Update post (memerlukan admin password)

```bash
curl -X PUT http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -H "x-admin-password: admin123" \
  -d '{ "title": "Updated title", ... }'
```

### DELETE /api/posts/[id]
Delete post (memerlukan admin password)

```bash
curl -X DELETE http://localhost:3000/api/posts/1 \
  -H "x-admin-password: admin123"
```

## 📁 File Structure

```
src/
├── lib/
│   └── db.ts                 # Database connection & queries
├── pages/
│   ├── admin.astro           # Admin dashboard
│   ├── api/
│   │   ├── posts.ts          # GET/POST endpoints
│   │   └── posts/[id].ts     # GET/PUT/DELETE endpoints
│   └── blog/
│       ├── index.astro       # Blog list (from DB)
│       └── [...slug].astro   # Individual post (from DB)
```

## 🔄 Migration dari Markdown

Jika sebelumnya menggunakan markdown, Anda bisa:

1. Buat script untuk mengimport markdown ke database
2. Atau copy-paste content dari file markdown ke admin form

## 🛡️ Security Notes

- Admin password dienkripsi dalam localStorage (client-side saja)
- Semua API calls memerlukan header `x-admin-password`
- Gunakan HTTPS di production
- Ganti ADMIN_PASSWORD dengan yang kuat
- Gunakan environment-specific passwords

## 🚀 Deployment

### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  functions = "dist/functions"

[build.environment]
  DB_HOST = "your-db-host"
  DB_USER = "your-db-user"
  DB_PASSWORD = "your-db-password"
  DB_NAME = "your-db-name"
  ADMIN_PASSWORD = "your-secure-password"
```

### Vercel

Gunakan environment variables di Vercel dashboard.

## 📚 Troubleshooting

### Database connection error
- Check `.env` configuration
- Ensure MySQL server is running
- Verify database credentials

### Admin page shows 404
- Make sure `output: 'hybrid'` di `astro.config.mjs`
- Server-side pages butuh full rebuild

### Posts tidak tampil di blog
- Check database memiliki posts
- Lihat console untuk error messages

## 📞 Support

Untuk issues lebih lanjut, silakan check:
- Astro docs: https://docs.astro.build
- MySQL docs: https://dev.mysql.com/doc/
