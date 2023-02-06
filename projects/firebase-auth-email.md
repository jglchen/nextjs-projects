---
title: 'Firebase Email Passwordless Link Authentication'
description: 'An authentication system with Firebase Email Passwordless Link using a signed and encrypted cookie to store session data.'
siteurl: 'https://firebase-auth-email.vercel.app'
source: 'https://github.com/jglchen/firebase-auth-email'
nativepub: 'https://exp.host/@jglchen/firebase-auth-email'
nativesource: 'https://github.com/jglchen/react-native-firebase-auth-email'
docker: 'docker run -p 3000:3000 jglchen/firebase-auth-email'
siteimg: 'pc-firebase-auth-email.png'
mobileimg: 'm-firebase-auth-email.png'
priority: 155
---

This example creates an authentication system that uses a **signed and encrypted cookie to store session data**. It uses current best practices as for authentication in the Next.js ecosystem, we use **`useUser` custom hook**  together with [swr](https://swr.vercel.app/) for data fetching.
   
* Firebase Authentication with Email Passwordless Link is used to authenticate users.
* Session data is signed and encrypted in a cookie.
      
**iOS** and **Android** mobile apps are also delivered. The apps are developed with **React Native**, anyone who is interested can test the apps through the [Expo Publish Link](https://expo.dev/@jglchen/firebase-auth-email) with [Expo Go](https://expo.dev/client) app. 
