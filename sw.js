const CACHE='leitor-omr-v9-cache-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./sw.js','./opencv.js','./xlsx.full.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached) return cached;
      return fetch(e.request).then(resp=>{
        const copy=resp.clone();
        const url=e.request.url;
        if(url.includes('opencv.js') || url.includes('xlsx.full.min.js') || url.startsWith(self.location.origin)){
          caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
        }
        return resp;
      }).catch(()=>cached);
    })
  );
});
