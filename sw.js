if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let c={};const o=e=>r(e,l),t={module:{uri:l},exports:c,require:o};i[l]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"detect-color-scheme.js",revision:"90ff158ffcd6edef3f0c11e3a30b9939"},{url:"index.html",revision:"032c94209a2822c9adf78a0e43229aaa"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"src/card-examples-BvTR_qVk.js",revision:null},{url:"src/chart-examples-DBG9w0wI.js",revision:null},{url:"src/detail-page-CfR7Kz6R.js",revision:null},{url:"src/home-page-BjEE4kU2.js",revision:null},{url:"src/index-CaA5KKYp.js",revision:null},{url:"src/index-D_xq7DiN.css",revision:null},{url:"src/view.mixin-BxK416ym.js",revision:null},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"manifest.webmanifest",revision:"6618954f453b50ad7353c1e79e001980"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/assets/]}))}));
