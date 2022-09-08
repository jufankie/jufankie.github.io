import{_ as t,e,n as i}from"./property-8b64881f.js";import{s as n,r,o,p as l}from"./lit-element-9a022b11.js";let a=t([i("elli-star-with-text-overlay")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[e()],key:"imageColor",value:()=>"yellow"},{kind:"field",decorators:[e()],key:"text1",value:()=>""},{kind:"field",decorators:[e()],key:"text2",value:()=>""},{kind:"field",decorators:[e()],key:"text3",value:()=>""},{kind:"field",decorators:[e()],key:"text4",value:()=>""},{kind:"get",static:!0,key:"styles",value:function(){return r`
      .elliStar {
        display: inline-block;
        background-size: 115px 90px;
        width: 115px;
        height: 90px;
        line-height: 90px;
        background-color: transparent;
        border: none;
        outline: none;
        color: black;
        text-align: center;
        margin: 2px;
        padding: 0;
      }

      .image-blue {
        background-image: url('${o(new URL(new URL("../assets/Mompitz Elli star-blue-ae1b8af5.png",import.meta.url).href,import.meta.url))}');
      }

      .image-yellow {
        background-image: url('${o(new URL(new URL("../assets/Mompitz Elli star-yellow-650d5e78.png",import.meta.url).href,import.meta.url))}');
      }

      .image-green {
        background-image: url('${o(new URL(new URL("../assets/Mompitz Elli star-green-034d23d3.png",import.meta.url).href,import.meta.url))}');
      }

      .oneLineFont {
        font-size: 17px;
      }

      .twoLineFont {
        font-size: 13px;
      }

      .threeLineFont {
        font-size: 12px;
      }

      .fourLineFont {
        font-size: 9px;
      }

      .text {
        display: inline-block;
        position: relative;
        left: 12px;
        vertical-align: middle;
        line-height: normal;
        margin: 0;
      }
    `}},{kind:"method",key:"render",value:function(){const t=+(""!==this.text1)+ +(""!==this.text2)+ +(""!==this.text3)+ +(""!==this.text4);let e="";t<=1?e="oneLineFont":2===t?e="twoLineFont":3===t?e="threeLineFont":4===t&&(e="fourLineFont");let i=l``,n=l``,r=l``;""===this.text1||""===this.text2&&""===this.text3&&""===this.text4||(i=l`<br />`),""===this.text2||""===this.text3&&""===this.text4||(n=l`<br />`),""!==this.text2&&""!==this.text4&&(r=l`<br />`);const o=l`${this.text1}${i}${this.text2}${n}${this.text3}${r}${this.text4}`;return l`
      <div class="elliStar ${e} image-${this.imageColor}">
        <span class="text">${o}</span>
      </div>
    `}}]}}),n);export{a as BalloonIndex};
