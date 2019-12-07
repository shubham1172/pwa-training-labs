self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // allows immediate activation of new service worker
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
});