---
title: "John Chen's Personal Site - A Simple Server-Rendered Website with Node.js"
description: 'a simple site with next.js'
siteurl: '/'
source: 'https://github.com/jglchen/nextjs-projects'
priority: 80
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. For demonstration purposes, in this site we predominantly employ Static Generation to pre-render pages.
Therefore **getStaticProps** are employed to fetch the data into pages, **getStaticPaths** are used to generate pages with dynamic routes.
