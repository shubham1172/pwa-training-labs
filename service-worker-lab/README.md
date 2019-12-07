## Lab: Scripting the Service Worker

In this lab you learn how to create a basic service worker script, install it, and do simple debugging.

## Getting started

To get started, check out the instructions on [developers.google.com](https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker).

## Note

This is not an official Google product.

## My notes

- On changing the service-worker script, browser detects a change and reinstalls the worker
- One one service-worker can be active at a given time, so the new one doesn't activate
- We can use the skipWaiting() method in the installation to instantly activate the new worker
- service-worker can have different scopes. Only fetch calls inside those scopes can be intercepted.


## References
- [Service worker lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)