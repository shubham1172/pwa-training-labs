## Lab: Offline Quickstart

In this lab you learn how to audit websites for progressive web app (PWA)
standards using [Lighthouse](https://developers.google.com/web/tools/lighthouse/).
You also learn how to add offline functionality to a website.

## Getting started

To get started, check out the instructions in
[GitBook](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-codelabs/content/docs/lab_offline_quickstart.html)
or on [developers.google.com](https://developers.google.com/web/ilt/pwa/lab-offline-quickstart).

## Note

This is not an official Google product.

All images are are licensed CC0 - no attribution required.

## My notes

- ServiceWorker is a network proxy that can intercept fetch requests and thus provide caching.
- Caching resources allows the app to work offline by avoiding network requests. 
- The app can respond with a 200 status code when offline!

In this lab, we
- configured a simple service worker and cached files
- added a manifest file for the application
- added A2HS (Add to home screen) feature and installed the app on a mobile device