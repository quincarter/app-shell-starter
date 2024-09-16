import{k as n,i as p,t as f,h as l}from"./index-CqTP5K9d.js";import{V as o}from"./view.mixin-BD5Sgazr.js";var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=(c,r,a,t)=>{for(var e=t>1?void 0:t?b(r,a):r,s=c.length-1,i;s>=0;s--)(i=c[s])&&(e=(t?i(r,a,e):i(e))||e);return t&&e&&u(r,a,e),e};let h=class extends o(l){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1}render(){return this.renderMfe(n` isMfe = ${this.isMfe}
        <h2>Basic Bar chart</h2>
        <base-chart chart-type="bar"></base-chart>
        <h2>Pie and Doughnut</h2>
        <div class="pie-container">
          <base-chart chart-type="pie"></base-chart>
          <base-chart chart-type="doughnut"></base-chart>
        </div>`)}};h.styles=[p`
      .pie-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    `];h=v([f("chart-examples")],h);export{h as ChartExamples};
