import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as i,r as n,p as s}from"./lit-element-9a022b11.js";import"./GameIconWithTextOverlay-100da9ac.js";let a=e([r("icon-hourglass-button")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t()],key:"time",value:()=>"1min"},{kind:"field",decorators:[t()],key:"title",value:()=>""},{kind:"field",decorators:[t()],key:"href",value:()=>""},{kind:"get",static:!0,key:"styles",value:function(){return n`
      a {
        text-decoration: none;
        color: black;
        border: 1px solid black;
        padding: 2px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgrey;
        border-radius: 15px;
      }

      .hourglass {
        vertical-align: middle;
        height: 75px;
        margin: 2px;
      }
    `}},{kind:"method",key:"render",value:function(){let e,t,r,i;return"1min"===this.time?(e="(1 minuut)",t="",r=new URL(new URL("../assets/hourglass_1min-b0971005.png",import.meta.url).href,import.meta.url),i=this.href.concat("&time=60")):"3min"===this.time?(e="(3 minuten)",t="",r=new URL(new URL("../assets/hourglass_3min-0ecb1171.png",import.meta.url).href,import.meta.url),i=this.href.concat("&time=180")):(e="(5 minuten)",t="",r=new URL(new URL("../assets/hourglass_5min-590ea3eb.png",import.meta.url).href,import.meta.url),i=this.href.concat("&time=300")),s`
      <a href="${i}" title="${this.title} ${e}">
        <slot></slot>
        <img
          class="hourglass"
          alt="${t}"
          src="${r}"
        />${t}
      </a>
    `}}]}}),i);export{a as IconHourglassButton};
