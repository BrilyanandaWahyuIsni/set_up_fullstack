
# Setup Full Stack Website
Pakage ini adalah sebuah paket untuk pengembangan full stack dengan menggunakan sejumlah teknologi canggih. Paket ini memanfaatkan `TypeScript` sebagai bahasa pemrograman inti, memberikan keamanan tipe dan peningkatan kemudahan pemeliharaan kode. Dalam sisi frontend, Anda menggunakan `Next.js` sebagai kerangka kerja React yang memungkinkan pengembangan web yang responsif dan cepat dengan memanfaatkan rendering sisi server. Untuk pengaturan tata letak dan desain, paket ini mengintegrasikan `Tailwind CSS`, sebuah alat utilitas CSS yang memungkinkan styling yang efisien dan mudah dikonfigurasi.

Sementara itu, di sisi server, paket ini menggunakan `Express` sebagai kerangka kerja back-end yang ringan dan fleksibel untuk membangun API dan menangani logika server. Untuk interaksi dengan database, Anda telah memilih `Prisma`, sebuah ORM (Object-Relational Mapping) yang mempermudah akses dan manipulasi data dalam database relasional.

Paket ini menciptakan fondasi untuk pengembangan web modern dengan menggunakan teknologi-teknologi tersebut, memungkinkan pengembang untuk fokus pada logika bisnis dan antarmuka pengguna tanpa harus khawatir tentang konfigurasi yang rumit atau integrasi yang sulit. Dengan kombinasi `TypeScript`, `Next.js`, `Tailwind CSS`, `Prisma`, dan `Express`, paket ini dapat menjadi solusi yang efisien dan kuat untuk pengembangan full stack.
__________________
## Package yang digunakan
|Package | Deskripsi|
|----|----|
|Next Js|`Next.js` adalah kerangka `React` untuk membangun aplikasi web `full-stack`. Anda menggunakan React Components untuk membangun antarmuka pengguna dengan `Next.js` untuk fitur dan pengoptimalan tambahan. `Next js` disini saya gunakan sebagai `frontend` nya saja, sebenarnya bisa digunakan sebagai `server` tapi saya lebih nyaman dengan pakage `express`.|
|Express Js| Express.js, adalah kerangka aplikasi web `backend` untuk membangun `RESTful API` dengan `Node.js`, dirilis sebagai perangkat lunak gratis dan sumber terbuka di bawah Lisensi MIT. Ini dirancang untuk membangun aplikasi web dan API. `Express` disebut sebagai kerangka server standar de facto untuk `Node.js`.|
|Typescript| `TypeScript` adalah suatu bahasa pemrograman yang berfungsi sebagai superset dari `JavaScript`, artinya, ia memperluas dan memperkaya fitur yang dimiliki oleh `JavaScript` dengan menyediakan konsep tipe data statis, dukungan untuk fitur-fitur terbaru `ECMAScript`, dan penggunaan konsep seperti `interface`, `class`, dan `module`. Dengan menggunakan `TypeScript`, pengembang dapat menulis kode yang lebih aman dan mudah dipelihara, serta memanfaatkan fitur-fitur modern bahasa pemrograman dalam lingkungan pengembangan web atau aplikasi.|
|Tailwind css |`Tailwind CSS` adalah sebuah kerangka kerja `(framework)` CSS yang dirancang untuk mempermudah styling dan desain dalam pengembangan web. Berbeda dengan pendekatan tradisional CSS yang mungkin melibatkan penulisan sejumlah besar aturan khusus dan pembuatan kelas-kelas CSS yang spesifik, `Tailwind CSS` mengadopsi gaya pendekatan "utility-first." Artinya, kerangka kerja ini menyediakan sejumlah besar kelas utilitas yang dapat digunakan langsung dalam markup HTML, tanpa perlu menulis CSS tambahan. |
|Prisma| `Prisma` adalah sebuah perpustakaan (library) yang digunakan untuk mengakses dan memanipulasi database dalam aplikasi web dan server. `Prisma` memudahkan interaksi dengan database melalui sebuah API yang bersih dan deklaratif, serta menyediakan `Object-Relational Mapping (ORM)` untuk memetakan model data aplikasi ke struktur database.|
________________________________
## Cara Penggunaan
1. Clone package ini dengan mengetikan kode berikut ini dalam terminal:
```git
git clone https://github.com/BrilyanandaWahyuIsni/set_up_fullstack.git
```
sebelum itu pastikan bahwa git telah terinstall pada terminal anda. Jika belum terinstall silahkan pergi ke [installasi git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2.	Setelah terinstall buka folder tempat install aplikasi tadi, lalu buka terminal dengan target folder tempat terinstall aplikasi tersebut. Lalu silahkan ketikan
```Javascript
npm install
```
Pastikan dalam komputer anda telah terinstall [node js](https://nodejs.org/). Jika [node js](https://nodejs.org/) belum terinstall di komputer anda silahkan install terlebih dahulu pada [tautan ini](https://nodejs.org/en/download).
3. Selesai, sekarang anda dapat mengembangkan aplikasi dimana pakage yang telah terinstall pada pakage ini. 
_________
Beberapa hal yang harus anda perhatikan penggunaan terhadap penggunaa [Prisma](https://www.prisma.io/), yaitu pastikan anda membaca [dokumentasi Prisma](https://www.prisma.io/docs/getting-started) untuk memulai atau menghubungkan server dengan database.
`.env` digunakan untuk prisma dan configurasi lainya dapat anda tambahkan. untuk server gunakan `server.env`.