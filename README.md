# Company Profile Website

Project **Company Profile Website** dibangun menggunakan **Laravel** dengan dukungan **Inertia.js (React/JSX)** dan modularisasi dengan **Nwidart Modules**.  
Website ini berfungsi sebagai profil perusahaan, dengan halaman produk, layanan, blog, dan form kontak yang terkoneksi ke database serta email (via Mailtrap).

### ⚡ Fitur
- **Landing page dinamis**
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
![Landing Page](./public/screenshots/landing_page.png)

### Contact Page
![Contact Page](<img width="1905" height="1677" alt="contact_page" src="https://github.com/user-attachments/assets/57feee7e-c398-47da-831c-b261929a5c1d" />
)

### Email Service
![Email Service](./public/screenshots/email.png)

### Authentication Page
![Email Service](./public/screenshots/list_contact.png)


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

# Import database
mysql -u root -p your_database < db_landingpage.sql

# Linux User
composer global require cpriego/valet-linux
valet install

#The link command may also be used to serve your Laravel sites
valet link 


# Jalankan Vite (development)
pnpm run dev
```

## 🔑 Akun Demo
```bash
Gunakan akun berikut untuk login ke sistem:

http://company-profile.test

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

