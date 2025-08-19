self.addEventListener('install', e => {
  e.waitUntil(caches.open('anerita-v1').then(cache => cache.addAll([
    './ANERITA_master_nextgen_PWA.html',
    './anerita_manifest.json',
    './icon-192.png',
    './icon-512.png',
    './emergency_tina.html',
    './emergency_gia.html'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
