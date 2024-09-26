---
title: Tutorial Install dan Run Astro
published: 2024-09-14
description: 'Astro Static Site'
image: './60864_1_other_anime_anime_characters_in_real_world.jpg'
tags: [Tutorial,NodeJS,NPM,PNPM,Basic Linux,Termux Basic,Blogging,Fuwari]
category: 'Catatan'
draft: false 
---
## Astro Static Site

> - Astro adalah static website generator nodejs

### Installasi

1. Prepare OS yang digunakan pilihan windows,linux,dll
2. Install Package NPM
3. Source Astro bisa di download di websitenya atau mengcloneingnya
4. Installasi Dan Running Astro

:::note[Prepare OS]

> - Saya menggunakan OS linux yaitu alpine linux via linux deploy di android bisa juga menggunakan termux !

:::note

> - Mengapa menggunkan linux deploy ? di termux juga bisa!!!
> - Karena Android yang di gunakan android kentang dengan versi android 13 jadi lumyan menyebalkan jika menggunakan termux ,baik proot-distro ketikan menjalankan server astro,system wakelock termux  pun salalu force,jadi system yang sangat ampuh wakelock meski dengan kinerja yang berat saya memilih linux deploy tentu dengan merunning secara background!

:::note[Install NPM]

> - Example Menggunakan OS Alpine Linux

```
apk update 
apk upgrade
apk add npm --no-cache -y
```

:::note

> - Menginstall NPM atomatis akan menginstall NodeJS

:::note[Medndownload Source Astro]

> - Download Via Website atau mengclone via Github

1. Via site [Astro](https://astro.build/)
2. Via Official github 

::github["withastro/astro"]

3. Via Unofficial Github

::github["saicaca/fuwari]

`command`

```
git clone https://github.com/saicaca/fuwari
```

:::note[Install dan Running Astro]

### Installasi Astro

`Command`

```
cd [direktori/folder astro]
npm install -g pnpm
pnpm install
pnpm add sharp
```
:::note[Running Astro]

`command`

```
pnpm start
```
:::note

> - Default Server http://localhost:4321
> - Open Di Browser atau Chrome

:::note[Stop Server Astro]

`command`

1. Stop via pnpm
> - Open new session Terminal

```
pnpm server stop
```
2. Stop Kombinasi Keyboard

`command`

```
CTRL+c
```
3. Stop Via KILLALL

`command`

```
sudo killall -9 node
```

> - Sekian Semoga bermanfaat !

