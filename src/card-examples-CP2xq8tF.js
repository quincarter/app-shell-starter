import{O as d,k as o,i as n,t as f,h}from"./index-CqTP5K9d.js";import{V as p}from"./view.mixin-BD5Sgazr.js";const m=d`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>`;var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,Z=(t,e,r,a)=>{for(var i=a>1?void 0:a?v(e,r):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(i=(a?l(e,r,i):l(i))||i);return a&&i&&g(e,r,i),i};let s=class extends p(h){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1}render(){return this.renderMfe(o`isMfe = ${this.isMfe}
        <div class="card-container">
          <generic-card
            img-src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg"
            img-alt="doggo"
            img-width="90%"
          >
            <div slot="card-title">
              <h2>This is a Default Card</h2>
            </div>
            This is in the default slot
            <div slot="card-footer">
              <p>This is in the card-footer</p>
            </div>
          </generic-card>
          <generic-card
            img-src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg"
            img-alt="doggo"
            img-width="90%"
            card-variant="no-outline-column"
            card-interactive
            @card-clicked="${this.listenForClicks}"
          >
            <div slot="card-title">
              <h2>This is a default image</h2>
            </div>
            With a no-outline-column (default slot)
            <div slot="card-footer">
              <p>This is in the card-footer</p>
            </div>
          </generic-card>
          <generic-card
            .litSvg="${m}"
            card-disabled
            card-interactive
            img-src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg"
            img-alt="doggo"
            img-width="5rem"
            img-height="5rem"
            card-variant="no-outline-row"
            img-avatar
            @card-clicked="${this.listenForClicks}"
          >
            <div slot="card-title">
              <h2>This is an avatar image card with a lit svg passed in</h2>
            </div>
            with a no-outline-row variant (default slot)
            <div slot="card-footer">This is in the card-footer</div>
          </generic-card>
          <generic-card
            card-variant="no-outline-column"
            img-src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg"
            img-alt="doggo"
            img-height="5rem"
            img-width="5rem"
            img-avatar
            card-navigation
            card-navigation-href="/chart-examples"
            @card-clicked="${this.listenForClicks}"
          >
            <div slot="card-title">
              <h2>This is a Card with an Avatar Image</h2>
            </div>
            with no-outline-column variant (default slot)
            <div slot="card-footer">
              <p>This is in the card-footer</p>
            </div>
          </generic-card>
        </div>`)}listenForClicks(t){console.log("item clicked",t.detail)}};s.styles=[n`
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
      }
    `];s=Z([f("card-examples")],s);export{s as CardExamples};
