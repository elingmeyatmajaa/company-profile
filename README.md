# Company Profile Website

Project **Company Profile Website** dibangun menggunakan **Laravel** dengan dukungan **Inertia.js (React/JSX)** dan modularisasi dengan **Nwidart Modules**.  
Website ini berfungsi sebagai profil perusahaan, dengan halaman produk, layanan, blog, dan form kontak yang terkoneksi ke database serta email (via Mailtrap).

---

## 🚀 Tech Stack
- **Backend**: [Laravel 11](https://laravel.com/)  
- **Frontend**: [Inertia.js](https://inertiajs.com/) + React (JSX)  
- **Database**: MySQL / PostgreSQL  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Modularisasi**: [Nwidart Laravel Modules](https://nwidart.com/laravel-modules)  
- **Mail**: Mailtrap (untuk testing email)  

---

## 📸 Preview

### Landing Page
![Landing Page](./public/screenshots/landing-page.png)

### Contact Page
![Contact Page](./public/screenshots/contact-page.png)

---

## ⚙️ Instalasi

Clone repository ini:
```bash
git clone https://github.com/elingmeyatmajaa/company-profile.git
cd company-profile
composer install
pnpm install
cp .env.example .env
php artisan key:generate
php artisan migrate
pnpm run dev
```

## 📧 Konfigurasi Email (Mailtrap)
```bash
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="Company Profile"
```

