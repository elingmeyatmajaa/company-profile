@component('mail::message')
# 📩 Pesan Baru dari Website

Anda menerima pesan baru melalui formulir kontak:

@component('mail::panel')
**👤 Nama:** {{ $data['first_name'] }} {{ $data['last_name'] ?? '' }}  
**📧 Email:** {{ $data['email'] }}  
**📞 Telepon:** {{ $data['phone_number'] ?? '-' }}  
@endcomponent

**💬 Pesan:**  
{{ $data['message'] }}

---

✨ Email ini dikirim otomatis oleh sistem website Anda.  

Thanks,  
{{ config('app.name') }}
@endcomponent
