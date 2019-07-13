let version = '0.12';
// insert CACHE_NANE when build

var urlsToCache = [
	'/',
	'/manifest.json',
	'/img/icons/grandcolline_192.png',
	'/img/icons/grandcolline_480.png',
	'/img/icons/grandcolline_512.png',
	'https://cdn.ampproject.org/v0.js ',
	'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
	'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
	'https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUtiYySUhiCXABTV.woff'
	'https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUJiYySUhiCXABTV.woff'
	'https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUliYySUhiCXABTV.woff'
	'https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUhiYySUhiCXABTV.woff'
	'https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUZiYySUhiCXAA.woff'
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

