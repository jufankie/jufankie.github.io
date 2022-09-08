import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as i,r as o,p as n}from"./lit-element-9a022b11.js";import"./GameIconWithTextOverlay-703bdbb0.js";let l=e([r("icon-label-button")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t()],key:"title",value:()=>""},{kind:"field",decorators:[t()],key:"href",value:()=>""},{kind:"get",static:!0,key:"styles",value:function(){return o`
      a {
        text-decoration: none;
        color: black;
        border: 1px solid black;
        padding: 2px 8px;
        display: grid;
        grid-template-columns: 140px auto;
        background-color: lightgrey;
        align-items: center;
        border-radius: 20px;
      }

      p {
        font-size: 25px;
        margin: 0;
        padding: 0;
      }
    `}},{kind:"method",key:"render",value:function(){return n`
      <a href="${this.href}" title="${this.title}">
        <slot></slot>
        <p>${this.title}</p>
      </a>
    `}}]}}),i);export{l as IconLabelButton};
