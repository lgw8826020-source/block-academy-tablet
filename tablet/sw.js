const CACHE='block-tablet-github-58c05fd75222';const BASE=new URL('./',self.location).pathname;const CORE=[BASE,BASE+'manifest.webmanifest',BASE+'icons/icon-192.png',BASE+'icons/icon-512.png',BASE+'icons/apple-touch-icon.png'];const FILES=[...CORE,...["art/home-atlas-v4.webp","art/partner-atlas-v4.webp","art/gear-atlas-v4.webp","art/hero-atlas-v6.webp","art/camp-scene-v8.webp"].map(path=>BASE+path),...["../learning/ATTRIBUTION.md","../learning/math-reference.json"].map(path=>new URL(path,self.location).pathname),...["audio/ATTRIBUTION.md","audio/KOKORO-LICENSE.txt","audio/answer-again.m4a","audio/answer-right.m4a","audio/catalog.json","audio/challenge-finished.m4a","audio/forest-morning.m4a","audio/habit-focus.m4a","audio/habit-ready.m4a","audio/habit-tidy.m4a","audio/nav-adventure.m4a","audio/nav-bag.m4a","audio/nav-home.m4a","audio/nav-shop.m4a","audio/nav-sport.m4a","audio/nav-study.m4a","audio/play-color-intro.m4a","audio/play-count-intro.m4a","audio/play-nature-intro.m4a","audio/play-talk-intro.m4a","audio/q-0-play-color-0.m4a","audio/q-0-play-color-1.m4a","audio/q-0-play-color-2.m4a","audio/q-0-play-count-0.m4a","audio/q-0-play-count-1.m4a","audio/q-0-play-count-2.m4a","audio/q-1-chinese-0.m4a","audio/q-1-chinese-1.m4a","audio/q-1-chinese-2.m4a","audio/q-1-english-0.m4a","audio/q-1-english-1.m4a","audio/q-1-english-2.m4a","audio/q-1-math-0.m4a","audio/q-1-math-1.m4a","audio/q-1-math-2.m4a","audio/q-1-science-0.m4a","audio/q-1-science-1.m4a","audio/q-1-science-2.m4a","audio/q-2-chinese-0.m4a","audio/q-2-chinese-1.m4a","audio/q-2-chinese-2.m4a","audio/q-2-english-0.m4a","audio/q-2-english-1.m4a","audio/q-2-english-2.m4a","audio/q-2-math-0.m4a","audio/q-2-math-1.m4a","audio/q-2-math-2.m4a","audio/q-2-science-0.m4a","audio/q-2-science-1.m4a","audio/q-2-science-2.m4a","audio/q-3-chinese-0.m4a","audio/q-3-chinese-1.m4a","audio/q-3-chinese-2.m4a","audio/q-3-english-0.m4a","audio/q-3-english-1.m4a","audio/q-3-english-2.m4a","audio/q-3-math-0.m4a","audio/q-3-math-1.m4a","audio/q-3-math-2.m4a","audio/q-3-science-0.m4a","audio/q-3-science-1.m4a","audio/q-3-science-2.m4a","audio/q-4-chinese-0.m4a","audio/q-4-chinese-1.m4a","audio/q-4-chinese-2.m4a","audio/q-4-english-0.m4a","audio/q-4-english-1.m4a","audio/q-4-english-2.m4a","audio/q-4-math-0.m4a","audio/q-4-math-1.m4a","audio/q-4-math-2.m4a","audio/q-4-science-0.m4a","audio/q-4-science-1.m4a","audio/q-4-science-2.m4a","audio/q-5-chinese-0.m4a","audio/q-5-chinese-1.m4a","audio/q-5-chinese-2.m4a","audio/q-5-english-0.m4a","audio/q-5-english-1.m4a","audio/q-5-english-2.m4a","audio/q-5-math-0.m4a","audio/q-5-math-1.m4a","audio/q-5-math-2.m4a","audio/q-5-science-0.m4a","audio/q-5-science-1.m4a","audio/q-5-science-2.m4a","audio/q-6-chinese-0.m4a","audio/q-6-chinese-1.m4a","audio/q-6-chinese-2.m4a","audio/q-6-english-0.m4a","audio/q-6-english-1.m4a","audio/q-6-english-2.m4a","audio/q-6-math-0.m4a","audio/q-6-math-1.m4a","audio/q-6-math-2.m4a","audio/q-6-science-0.m4a","audio/q-6-science-1.m4a","audio/q-6-science-2.m4a","audio/school-sport-play.m4a","audio/school-sport-stretch.m4a","audio/school-sport-walk.m4a","audio/sport-play.m4a","audio/sport-stretch.m4a","audio/sport-walk.m4a","audio/task-pending.m4a","audio/why-play-color-0.m4a","audio/why-play-color-1.m4a","audio/why-play-color-2.m4a","audio/why-play-count-0.m4a","audio/why-play-count-1.m4a","audio/why-play-count-2.m4a"].map(path=>BASE+path)];
// CACHE, BASE, CORE and FILES are injected by the tablet build.
const PREFIX='block-tablet-github-';
async function download(path,timeout=15000){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeout);
 try{const address=new URL(path,self.location);if(address.pathname===BASE)address.searchParams.set('__block_release',CACHE);const response=await fetch(new Request(address.href,{cache:'reload',credentials:'same-origin',signal:controller.signal}));
  if(!response.ok||response.redirected)throw Error('资源尚未就绪');
  await response.clone().arrayBuffer();
  return response;
 }finally{clearTimeout(timer)}
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 // Only the interface is required to activate. A slow voice file must not block entry.
 for(const path of CORE)await cache.put(path,await download(path));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith(PREFIX)&&name!==CACHE)await caches.delete(name);
 await self.clients.claim();
})()));
let warming;
async function warmOptional(){
 if(warming)return warming;
 warming=(async()=>{const cache=await caches.open(CACHE);let cursor=0;
  await Promise.all(Array.from({length:3},async()=>{while(cursor<FILES.length){const path=FILES[cursor++];if(await cache.match(path))continue;try{await cache.put(path,await download(path,10000))}catch{/* Retry missing resources on the next visit or reconnection. */}}}));
 })();
 try{await warming}finally{warming=null}
}
self.addEventListener('message',event=>{if(event.data?.type==='block-cache-optional')event.waitUntil(warmOptional())});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==location.origin||url.pathname.startsWith('/api/'))return;
 if(event.request.mode==='navigate'&&url.pathname.startsWith(BASE)){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE),saved=await cache.match(BASE);
   // Cached navigation never waits for an unreachable server. Updates use the worker lifecycle.
   if(saved)return saved;
   try{const response=await download(event.request.url,12000);if((response.headers.get('content-type')||'').includes('text/html')){await cache.put(BASE,response.clone());return response}}catch{}
   return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>方块学园 · 连接提示</title><main style="max-width:560px;margin:15vh auto;padding:28px;font:20px/1.8 sans-serif;color:#365d51"><h1>这次还没连接上学园</h1><p>网络可能比较慢。已保存的学习记录仍在本机，请稍后再打开。</p><a href="'+BASE+'" style="display:inline-block;padding:14px 22px;background:#dcefe2;border-radius:15px;color:#365d51">重新打开学园</a></main>',{status:503,headers:{'content-type':'text/html; charset=utf-8'}});
  })());return;
 }
 if(FILES.includes(url.pathname))event.respondWith((async()=>{
  const cache=await caches.open(CACHE),saved=await cache.match(url.pathname);
  if(saved)return saved;
  const response=await fetch(event.request);
  if(response.status===200&&!response.redirected)event.waitUntil(cache.put(url.pathname,response.clone()).catch(()=>{}));
  return response;
 })());
});
