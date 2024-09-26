---
title: Run Process On Background
published: 2024-09-13
description: 'Linux Basic command Run background'
image: './4149_anime.jpg'
tags: ['Examples','Basic Linux','Termux Basic','Tutorial']
category: 'Tutorial'
draft: false 
---
## Basic Run Background Linux

```
nohup (command) 2> /dev/null &
```
:::note[example]

```
nohup pnpm start 2> /dev/null &
```
:::
## Check Log Dinamis
```
tail -f [path]nohup.out
```
:::note[example]
```
tail -f ~/my-blog/nohup.out
```
> - Sekian Semoga Bermanfaat (^_^)
