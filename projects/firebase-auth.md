---
title: 'Firebase Authentication Illustration'
description: 'An authentication system with Firebase using a signed and encrypted cookie to store session data'
siteurl: 'https://firebase-auth-rust.vercel.app'
source: 'https://github.com/jglchen/firebase-auth'
nativepub: 'https://exp.host/@jglchen/firebase-auth'
nativesource: 'https://github.com/jglchen/react-native-firebase-auth'
docker: 'docker run -p 3000:3000 jglchen/firebase-auth'
siteimg: 'pc-firebase-auth.png'
mobileimg: 'm-firebase-auth.png'
priority: 160
---

This example creates an authentication system that uses a signed and encrypted cookie to store session data. It uses current best practices as for authentication in the Next.js ecosystem, we use **useUser** custom hook together with **[SWR](https://swr.vercel.app/)** for data fetching.

* Firebase Authentication with Email/Password, Google Sign In, Facebook Sign In, GitHub Sign, and Email Sign available to authenticate users.
* The emails registered in Firebase Authentication are saved in a separate database for future data development of individual users, for this illustration Firestore Database.
* Session data is signed and encrypted in a cookie.

**iOS** and **Android** mobile apps are also delivered for authentication demonstration. The apps are developed with **React Native**, anyone who is interested can test the apps through **[the Expo Publish Link](https://exp.host/@jglchen/firebase-auth)** as above with **[Expo Go](https://expo.dev/client)** app.
