let version = '0.1';
var CACHE_NAME = 'grandcolline-cache-v0.1';
var urlsToCache = [
	'/',
	'./img/icon/grandcolline_128.png',
	'./img/icon/grandcolline_144.png',
	'./img/icon/grandcolline_152.png',
	'./img/icon/grandcolline_192.png',
	'./img/icon/grandcolline_480.png',
	'https://cdn.ampproject.org/v0.js ',
	'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
	'https://fonts.gstatic.com/s/jura/v9/x6RZE5IaGzhqlvflqX29zvesZW2xOQ-xsNqO47m55DA.ttf'
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

