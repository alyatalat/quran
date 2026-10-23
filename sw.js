/* Barakat Al-Quran service worker: keeps the app working offline.
   Raise CACHE each time you publish a new version so devices fetch the update. */
const CACHE='baraka-v491';
const FILES=['./','index.html','privacy.html','manifest.webmanifest','Sortable.min.js','fonts/fonts.css','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png','icons/favicon-32.png','icons/favicon-48.png'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(FILES);const css=await (await c.match('fonts/fonts.css')).text();const urls=[...css.matchAll(/url\(\.\/([^)]+)\)/g)].map(m=>'fonts/'+m[1]);await c.addAll(urls);self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 if(r.mode==='navigate'){const root=new URL('./',location).pathname,main=u.pathname===root||u.pathname===root+'index.html'||u.pathname.endsWith('privacy.html');if(!main){e.respondWith(fetch(r).catch(()=>caches.match('index.html')));return}e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r.url.split('#')[0].split('?')[0].endsWith('privacy.html')?'privacy.html':'index.html',cp));return res}).catch(()=>caches.match(u.pathname.endsWith('privacy.html')?'privacy.html':'index.html')));return}
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>hit);return hit||net}))});
