import{_ as e,e as t,n as i}from"./property-8b64881f.js";import{s as r,r as n,y as l,p as o}from"./lit-element-9a022b11.js";let s=e([i("numbers-in-order-index-icon")],(function(e,i){return{F:class extends i{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t({type:String})],key:"text",value:()=>""},{kind:"field",decorators:[t({type:String})],key:"title",value:()=>""},{kind:"field",decorators:[t({type:Boolean})],key:"die",value:()=>!1},{kind:"field",key:"dieImage",value:()=>new URL(new URL("../assets/die200-8194e7b4.png",import.meta.url).href,import.meta.url)},{kind:"get",static:!0,key:"styles",value:function(){return n``}},{kind:"method",key:"render",value:function(){let e;return e=this.die?l`<image x="90" y="10" height="70" href="${this.dieImage}"></image>`:l`
        <text
          font-size="45px"
          font-style="italic"
          x="50%"
          y="50%"
          dominant-baseline="central"
          text-anchor="middle"
        >
          ${this.text}
        </text>
`,o` <svg viewBox="0 0 250 90" style="width: 300px">
      <title>${this.title}</title>
      <rect
        x="12"
        y="5"
        width="225"
        height="80"
        ry="20"
        rx="20"
        fill="white"
        stroke="purple"
        stroke-width="5"
      ></rect>
      ${e}
    </svg>`}}]}}),r);export{s as NumbersInOrderIndexIcon};
