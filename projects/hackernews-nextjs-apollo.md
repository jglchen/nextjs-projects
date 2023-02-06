---
title: 'Hackernews Clone - Apollo GraphQL'
description: 'A Hackernews clone site built with next.js implementing GraphQL APIs and Firebase Cloud Firestore to substitute GraphQL subscriptions.
'
siteurl: 'https://hackernews-nextjs-apollo.vercel.app'
source: 'https://github.com/jglchen/hackernews-nextjs-apollo'
nativepub: 'https://exp.host/@jglchen/hackernews-apollo'
nativesource: 'https://github.com/jglchen/react-native-hackernews-apollo'
docker: 'docker run -p 3000:3000 jglchen/hackernews-nextjs-apollo'
siteimg: 'pc-hackernews-nextjs-apollo.png'
mobileimg: 'm-hackernews-apollo.png'
priority: 180
---

This is a [Hackernews](https://news.ycombinator.com/) clone site built with **next.js** implementing GraphQL APIs, for which Apollo Client is adopted in the frontend and Apollo Server in the backend server. We can successfully build a full functionality of GraphQL server with **next.js**, including **queries**, **mutations**, and **subscriptions**. 

The real-time communication of subscriptions however was found not to function well once the package is deployed to Vercel, which is a serverless platform. Therefore real-time [Firebase Cloud Firestore](https://firebase.google.com/products/firestore) is used to substitute GraphQL subscriptions.


In addition, **iOS** and **Android** mobile apps are also delivered for the clone site. The apps are developed with **React Native**, anyone who is interested can test the apps through **[the Expo Publish Link](https://exp.host/@jglchen/hackernews-apollo)** as above with **[Expo Go](https://expo.dev/client)** app.
