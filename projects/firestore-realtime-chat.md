---
title: 'Chat Applications with Cloud Firestore'
description: 'A real-time chat application with Next.js using Firebase Cloud FireStore'
siteurl: 'https://firestore-realtime-chat.vercel.app'
source: 'https://github.com/jglchen/firestore-realtime-chat'
nativepub: 'https://exp.host/@jglchen/firestore-realtime-chat'
nativesource: 'https://github.com/jglchen/firestore-realtime-chat-mobile'
docker: 'docker run -p 3000:3000 jglchen/firestore-realtime-chat'
siteimg: 'pc-firestore-realtime-chat.png'
mobileimg: 'm-firestore-realtime-chat.png'
priority: 140
---

We can successfully build a real-time chat application with [Next.js](https://nextjs.org/) using [Socket.IO](https://socket.io/). The real-time communication however was found not to function well once the package is deployed to Vercel, which is a serverless platform. It is suggested by Vercel two main approaches to applying a real-time model to stateless serverless functions.

1. Serverless Functions have maximum execution limits and should respond as quickly as possible. They should not subscribe to data events. Instead, we need a client that subscribes to data events (such as [Alby](https://ably.com/), [Pusher](https://pusher.com/), etc.) and a serverless function that publishes new data.
2. Rather than pushing data, we can fetch real-time data on-demand. For example, the Vercel dashboard delivers realtime updates using [SWR](https://swr.vercel.app/).

In this demonstration, we build a real-time chat application with [Firebase Cloud FireStore](https://firebase.google.com/products/firestore). 

**iOS** and **Android** mobile apps are also delivered. The apps are developed with **React Native**, anyone who is interested can test the apps through the [Expo Publish Link](https://expo.dev/@jglchen/firestore-realtime-chat) with [Expo Go](https://expo.dev/client) app.
