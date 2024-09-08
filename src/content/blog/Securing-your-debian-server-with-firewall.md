---
title: 'Securing Your Debian Server with Firewall'
publishedAt: '2024-03-10T00:00:00.0502'
author: 'pajri'
image: 'https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
category: 'Security'
isPinned: false
excerpt: 'Learn how to secure your Debian server using the built-in firewall (UFW).'
---
# Securing Your Debian Server with Firewall

Using UFW (Uncomplicated Firewall) on Debian is essential for server security.

## Steps to Secure Server
1. Enable UFW:
    ```bash
    sudo ufw enable
    ```
2. Set default rules:
    ```bash
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    ```
3. Allow SSH:
    ```bash
    sudo ufw allow ssh
    ```