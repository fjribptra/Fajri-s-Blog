---
title: 'Cara Membuat Jaringan Peer to Peer di Cisco Packet Tracer'
publishedAt: '2024-08-06T00:00:00.0502'
author: 'pajri'
image: 'https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-111720.png?w=464'
category: 'Networking'
isPinned: false
excerpt: 'Jaringan peer to peer, sesuai namanya peer to peer simpelnya adalah sebuah jaringan komputer yang mengbungkan dua komputer secara langsung tanpa melalui swith atau hub.'
---
## Cara Membuat Jaringan Peer to Peer di Cisco Packet Tracer
![enter image description here](https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-111720.png?w=464)

Jaringan _peer to peer_, sesuai namanya **_peer to peer_** simpelnya adalah sebuah jaringan komputer yang mengbungkan dua komputer secara langsung tanpa melalui swith atau hub.Contohnya, seperti gambar diatas.

Berikut panduan singkat membuat jaringan peer to peer di cisco packet tracer:

1.  Siapkan dua PC

![enter image description here](https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-113606.png?w=468)

2. Hubungkan dengan  _cross cable_

![enter image description here](https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-111720-1.png?w=464)

3.  Konfigurasikan Ip address nya

Pastikan ip address nya satu segmen. Contohnya, disini untuk PC 1 ip addressnya **( 192.168.10.1 )** dengan subnetmask **(**  **255.255.255.0 )** dan untuk PC 2 ip addressnya **( 192.168.10.2 )** dengan subnetmask **( 255.255.255.0 ).**

![enter image description here](https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-113832.png?w=695)
![enter image description here](https://fjribptra.wordpress.com/wp-content/uploads/2024/08/screenshot-2024-08-01-113858.png?w=697)

4. Tes koneksi

Ping dari PC 1 ke PC 2 ataupun seballiknya. Kalau hasilnya  **_reply from …_** itu tanda nya koneksi berhasil, kedua PC sudah bisa saling berkomunikasi. Tapi kalau hasilnya  **_Request timed out_** artinya kedua PC belum saling terhubung, cek kembali konfigurasi ip address dan pemilihan kabel.