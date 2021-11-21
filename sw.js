let version = '0.18';
var CACHE_NAME = 'grandcolline-cache-v89';

var urlsToCache = [
  '/',
  '/manifest.json',
  '/img/icons/grandcolline_192.png',
  '/img/icons/grandcolline_480.png',
  '/img/icons/grandcolline_512.png',
  '/img/icons/grandcolline_maskable_192.png',
  'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css'
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
      // キャッシュがあったのでそのレスポンスを返す
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

