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
const CACHE = 'anerita-v1';
const ASSETS = [
  '/', '/index.html', '/styles/site.css',
  '/404.html', '/images/hero-voiced.jpg'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    fetch(e.request).then(resp=>{
      // If the network says 404, show our 404 page
      if (resp.status === 404) return caches.match('/404.html');
      return resp;
    }).catch(()=> caches.match(e.request).then(r => r || caches.match('/404.html')))
  );
});
