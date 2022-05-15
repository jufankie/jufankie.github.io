import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as l,r as o,y as s,p as a}from"./lit-element-9a022b11.js";const i=new URL(new URL("../assets/ball-yellow-4464463b.svg",import.meta.url).href,import.meta.url),n=new URL(new URL("../assets/ball-blue-a9681c59.svg",import.meta.url).href,import.meta.url),m=new URL(new URL("../assets/ball-green-514d89e0.svg",import.meta.url).href,import.meta.url),d=new URL(new URL("../assets/ball-red-a8ec0f14.svg",import.meta.url).href,import.meta.url),u=[[i,n,m,d],[i,n,d,m],[i,d,m,n],[i,d,n,m],[i,m,d,n],[i,m,n,d],[n,i,m,d],[n,i,d,m],[n,d,m,i],[n,d,i,m],[n,m,d,i],[n,m,i,d],[m,n,i,d],[m,n,d,i],[m,d,i,n],[m,d,n,i],[m,i,d,n],[m,i,n,d],[d,n,m,i],[d,n,i,m],[d,i,m,n],[d,i,n,m],[d,m,i,n],[d,m,n,i]];let c=e([r("ballgame-icon")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t({type:Number})],key:"colorPermutation",value:()=>0},{kind:"field",decorators:[t({type:String})],key:"alt",value:()=>""},{kind:"field",decorators:[t({type:String})],key:"text",value:()=>""},{kind:"field",decorators:[t({type:Boolean})],key:"twoBalls",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"smallFont",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return o``}},{kind:"method",key:"render",value:function(){const e=[];let t;t=this.twoBalls?[{x:5,y:5},{x:167,y:5}]:[{x:5,y:5},{x:86,y:5},{x:167,y:5}];for(let r=0;r<t.length;r++){const l=s`
        <image
          height="78"
          href="${u[this.colorPermutation][r]}"
          x="${t[r].x}"
          y="${t[r].y}"
        ></image>`;e.push(l)}const r=s`
        <text
          font-size = "${this.smallFont?40:57}"
          x="50%"
          y="50%"
          dominant-baseline="central"
          text-anchor="middle"    
        >${this.text}</text>`;return a`
      <svg viewBox="0 0 250 88" style="width: 100%">
        <title>${this.alt}</title>
        <rect
          x="0"
          y="0"
          width="250"
          height="88"
          rx="10"
          ry="10"
          fill="none"
          stroke="black"
          stroke-width="3"
        ></rect>
        ${e}${r}
      </svg>
    `}}]}}),l);export{c as BalloonIndex};
