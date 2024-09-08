---
title: 'Debian 11 Online Repository Bullseye'
publishedAt: '2024-08-06T00:00:00.0502'
author: 'pajri'
image: 'https://github.com/user-attachments/assets/0534899f-b7bf-4d3c-9a75-58d6eb904614'
category: 'Networking'
isPinned: false
excerpt: 'Jaringan peer to peer, sesuai namanya peer to peer simpelnya adalah sebuah jaringan komputer yang mengbungkan dua komputer secara langsung tanpa melalui swith atau hub.'
---

## Debian 11 Online Repository Bullseye

 1. Type :
 ``` bash
 nano /etc/apt/sources.list
 ```

2. Enter this repository

``` bash
    deb http://deb.debian.org/debian bullseye main contrib non-free
    deb-src http://deb.debian.org/debian bullseye main contrib non-free
    
    deb http://deb.debian.org/debian bullseye-updates main contrib non-free
    deb-src http://deb.debian.org/debian bullseye-updates main contrib non-free
    
    deb http://deb.debian.org/debian bullseye-backports main contrib non-free
    deb-src http://deb.debian.org/debian bullseye-backports main contrib non-free
    
    deb http://security.debian.org/debian-security/ bullseye-security main contrib non-free
    deb-src http://security.debian.org/debian-security/ bullseye-security main contrib non-free
```

3. Quit and save **Cntrl X > y &#x003C;enter&#x003E;**

4. Update and upgrade repository
```bash
apt update && apt upgrade
```

