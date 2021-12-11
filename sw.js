let version = '0.24';
var CACHE_NAME = 'grandcolline-cache-v97';

var urlsToCache = [
  '/',
  '/manifest.json',
  '/img/icons/grandcolline_128.png',
  '/img/icons/grandcolline_152.png',
  '/img/icons/grandcolline_144.png',
  '/img/icons/grandcolline_192.png',
  '/img/icons/grandcolline_512.png',
  '/img/icons/grandcolline_maskable_192.png'
];

self.addEventListener('install', function(event) {
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        //console.log("match cacches: " + event.request.url);
        return response;
      }
      //console.log("don't match cacches: " + event.request.url);
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return (cacheName != CACHE_NAME);
        }).map(function(cacheName) {
          return caches['delete'](cacheName);
        })
      );
    })
  );
});

