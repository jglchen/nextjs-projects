---
title: 'Web Scraping Demonstrations'
description: 'A next.js framework site to demonstrate web scraping cases using node.js'
siteurl: 'https://web-scrape.vercel.app'
source: 'https://github.com/jglchen/web-scrape'
nativepub: 'https://exp.host/@jglchen/web-scrape'
nativesource: 'https://github.com/jglchen/react-native-web-scrape'
docker: 'docker run -p 3000:3000 jglchen/web-scrape'
siteimg: 'pc-web-scrape.png'
mobileimg: 'm-web-scrape.png'
priority: 170
---

This is a **[next.js](https://nextjs.org/)** framework site to demonstrate web scraping cases and my expertise in web scraping. Totally 9 scraping cases are presented at this moment, they are handled in API routes with **[node.js](https://nodejs.org/en/)**.

There are two main approaches to scraping the web: 
1. HTTP clients to query the web and data extraction
2. headless browsers

For the first approach, we use [Cheerio](https://www.npmjs.com/package/cheerio), a library using jQuery on the server side, to crawl web pages. Sites, however, now become increasingly complex, and often regular HTTP crawling won't suffice anymore, but one needs a full-fledged browser engine, to get the necessary information from a site. This is particularly true for single-page applications which heavily rely on JavaScript and dynamic and asynchronous resources. Browser automation and headless browsers come to deal with the issues. Therefore we use [Puppeteer](https://pptr.dev/) to manipulate the browser programmatically. For the cases in this demonstration, we use either way depending on the actual situations of the target pages.

In addition, **iOS** and **Android** mobile apps are also delivered for the scraping demonstrations. The apps are developed with **React Native**, anyone who is interested can test the apps through **[the Expo Publish Link](https://exp.host/@jglchen/web-scrape)** as above with **[Expo Go](https://expo.dev/client)** app.