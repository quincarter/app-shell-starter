if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let c={};const o=e=>i(e,l),t={module:{uri:l},exports:c,require:o};r[l]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"detect-color-scheme.js",revision:"90ff158ffcd6edef3f0c11e3a30b9939"},{url:"index.html",revision:"f490581b0819bf56554e1492ee1b0721"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"registerSW.js",revision:"f0d0717fc720de6513c7feab6412945c"},{url:"src/card-examples-BbX1lcdH.js",revision:null},{url:"src/chart-examples-DofXjrp0.js",revision:null},{url:"src/detail-page-DOJvoBD7.js",revision:null},{url:"src/home-page-Dxy1rP_3.js",revision:null},{url:"src/index-BQyQH-2I.js",revision:null},{url:"src/index-D_xq7DiN.css",revision:null},{url:"src/view.mixin-C7NFIbRz.js",revision:null},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"manifest.webmanifest",revision:"8310fa0edca0d09e2c31919f4f81d665"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/assets/]}))}));
