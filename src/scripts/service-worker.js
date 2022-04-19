self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker ...', event);

  // TODO: Caching App Shell Resources.
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker ...', event);

  // TODO: Delete old caches.
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));

  // TODO: Add/get fetch requests to/from caches.
});
