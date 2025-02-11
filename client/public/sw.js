const CACHE_NAME = 'tarot-app-v1';
const BASE_URL = '/mystic-tarot';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        `${BASE_URL}/`,
        `${BASE_URL}/index.html`,
        `${BASE_URL}/assets/index.css`,
        `${BASE_URL}/assets/index.js`,
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});