
Project **Company Profile Website** dibangun menggunakan **Laravel** dengan dukungan **Inertia.js (React/JSX)** dan modularisasi dengan **Nwidart Modules**.  
Website ini berfungsi sebagai profil perusahaan, dengan halaman produk, layanan, blog, dan form kontak yang terkoneksi ke database serta email (via Mailtrap).

### ⚡ Fitur
- **Landing page responsive**
- **Manajemen Authentication**
- **Manajemen Blog**
- **Manajemen Produk & Layanan**
- **Form Kontak (integrasi Mailtrap)**
- **Autentikasi Laravel Breeze/Inertia**


---


## 🚀 Tech Stack
- **Backend**: [Laravel](https://laravel.com/)  
- **Frontend**: [Inertia.js](https://inertiajs.com/) + React (JSX)  
- **Database**: MySQL 
- **Webserver**: Nginx
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Modularisasi**: [Nwidart Laravel Modules](https://nwidart.com/laravel-modules)  
- **Mail**: Mailtrap (untuk testing email)  


---

## 📸 Preview

### Landing Page
<img width="200" height="800" alt="company-profile test_ (4)" src="https://github.com/user-attachments/assets/a1f5181a-c4ff-445b-9585-9447d57efaa7" />


### Contact Page
<img width="200" height="200" alt="contact_page" src="https://github.com/user-attachments/assets/a8dd2e2c-eccb-496e-b12c-7d399aab2651" />


### Email Service
<img width="200" height="200" alt="email" src="https://github.com/user-attachments/assets/e481f6db-f2e9-40c8-8996-0f50fab3ef6c" />

### Authentication Page
<img width="200" height="200" alt="list_contact" src="https://github.com/user-attachments/assets/bc3ae44c-f3cc-43f8-a2f8-28da5ea74879" />


---

## ⚙️ Instalasi

Clone repository ini:
```bash
git clone https://github.com/elingmeyatmajaa/company-profile.git
cd company-profile

# Install PHP dependencies
composer install

# Install frontend dependencies
pnpm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Import database in file company-profile
mysql -u root -p your_database < db_landingpage.sql

# Linux User
composer global require cpriego/valet-linux
valet install

#The link command may also be used to serve your Laravel sites company-profile.test
valet link 


# Jalankan Vite (development)
pnpm run dev
```

## 🔑 Akun Demo
```bash

#Landing Page
http://company-profile.test


Gunakan akun berikut untuk login ke sistem:

http://company-profile.test/login

Email: developer@developer.com
Password: 12345678
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

