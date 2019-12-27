// const VERSION = 'v1';
//
// self.addEventListener('install', event => {
//   event.waitUntil(precache());
// });
//
// self.addEventListener('fetch', event =>{
//   const request = event.request;
//   // Get
//   if (request.method != 'GET') {
//     return;
//   }
//   // uscar en Cache
//   event.respondWith(cachedResponse(request))
// })
//
// async function precache() {
//   const cache = await caches.open(VERSION);
//   return cache.addAll([
//     '/',
//    './idex.html',
//    './assets/idex.js',
//    './assets/MediaPlayer.js',
//    './assets/plugins/AutoPause.js',
//    './assets/plugins/AutoPlay.js',
//    './assets/idex.css',
//    './assets/BigBuckBunny.mp4',
//  ]);
// }
//
// async function cachedResponse(request) {
//   const cache = await caches.open(VERSION)
//   const response = await cache.match(request)
//   return response || fetch(request);
// }
