---
title: Deploy Project Website Nodejs Gh-pages
published: 2024-09-25
description: 'Cara Deploy Project Website Nodejs Ke Github'
image: '/images/Hifumi_Takimoto_NodeJs.png'
tags: [Examples,NodeJS,NPM,Tutorial,PNPM,Catatan,github,deploy]
category: 'Github'
draft: false 
---
### Deploy Project Website JS ke Gh-pages

> Apa sih sebenarnya Github Pages itu? 
> Github Pages merupakan layanan dari github (sebuah platform berbagi kode program) yang berguna untuk meng-host halaman statis web. Halaman statis merupakan halaman web yang di dalamnya tidak memerlukan server-side code (seperti PHP, Python, dll.). namun, cukup dengan client-side language (seperti HTML, CSS, Javascript, Markdown, dll.) Github pages dapat menampilkan website pribadi kita lengkap dengan alamat cantiknya!

#### Prasyarat 
1. Sudah memilik akun github atau daftar dulu di github jika belum memiliki akun github!
2. Menyiapkan Project website pribadi !
3. Membuat repositori website di github!

#### Deploy To Github Pages
> Saya asumsikan kalian telah memenuhi presayarat di atas (^_^)
> karena kita akan mendeploy menggunakan nodejs atau mendeploy project web nodejs

#### Install gh-pages

```
npm install -g pnpm
pnpm install gh-pages

```
#### Reedit Package.json
1. Menambah script homepage example : "homepage": "https://fuwari-chan.github.io/"
2. Menambah script nama exanple :  "name": "fuwari-chan",
3. Menambah script predeploy example :  "predeploy": "npm run build"
4. Menambah sxript deploy example : "deploy": "gh-pages -d dist"

:::note[Catatan]
dist adalah folder hasil build untuk di expose ke gh-pages
:::
#### Contoh final !!!

```
GNU nano 8.2                     package.json
{
  "homepage": "https://fuwari-chan.github.io/",
  "name": "fuwari-chan",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build && pagefind --site dist",
    "preview": "astro preview",
    "astro": "astro",
    "new-post": "node scripts/new-post.js",
    "format": "biome format --write ./src",
    "lint": "biome check --apply ./src"
  },
```
#### Deploy 

> Build duly untuk di review (optional)

```
git init
git add .
git commit -m "test deploy nodejs"
git branch -M main
git remote add origin https://github.com/{user-name}/{repo}.git
pnpm run deploy
atau
npm run deploy
```
:::note[Catatan]
Tunggu sambil ngopi (^_^)
nanti akan diminta login github via cli
masukusan usename dan password
password buat dulu token github di settingan -> developer
jika berhasil bisa akses https://repo.github.io example : https://fuwari-chan.github.io
:::

> Sekian semoga bermanfaat (^_^)
