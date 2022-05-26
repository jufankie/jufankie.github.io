import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as o,r as i,o as l,p as n}from"./lit-element-9a022b11.js";let a=e([r("game-icon-with-text-overlay")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t()],key:"iconcolor",value:()=>"yellow"},{kind:"field",decorators:[t()],key:"image",value:()=>"balloon"},{kind:"field",decorators:[t()],key:"text1",value:()=>""},{kind:"field",decorators:[t()],key:"text2",value:()=>""},{kind:"field",decorators:[t()],key:"text3",value:()=>""},{kind:"field",decorators:[t()],key:"text4",value:()=>""},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .balloon,
      .kite,
      .rocket {
        display: inline-block;
        background-color: transparent;
        border: none;
        outline: none;
        color: black;
        text-align: center;
        margin: 2px;
        padding: 0;
      }

      .balloon {
        background-size: 75px 90px;
        width: 75px;
        height: 90px;
        line-height: 78px;
      }

      .kite {
        background-size: 70px 105px;
        width: 70px;
        height: 105px;
        line-height: 80px;
      }

      .rocket {
        background-size: 90px 90px;
        width: 90px;
        height: 90px;
        line-height: 90px;
      }

      .oneLineFont {
        font-size: 23px;
      }

      .twoLineFont {
        font-size: 21px;
      }

      .threeLineFont {
        font-size: 18px;
      }

      .fourLineFont {
        font-size: 15px;
      }

      .kiteBlue {
        background-image: url('${l(new URL(new URL("../assets/kite-blue-6058e104.svg",import.meta.url).href,import.meta.url))}');
      }

      .kitePurple {
        background-image: url('${l(new URL(new URL("../assets/kite-purple-f83e1d42.svg",import.meta.url).href,import.meta.url))}');
      }

      .kiteGreen {
        background-image: url('${l(new URL(new URL("../assets/kite-green-efbf3a82.svg",import.meta.url).href,import.meta.url))}');
      }

      .kiteYellow {
        background-image: url('${l(new URL(new URL("../assets/kite-yellow-27826c11.svg",import.meta.url).href,import.meta.url))}');
      }

      .balloonBlue {
        background-image: url('${l(new URL(new URL("../assets/balloon-blue-85ba45f7.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonPurple {
        background-image: url('${l(new URL(new URL("../assets/balloon-purple-2de82f00.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonGreen {
        background-image: url('${l(new URL(new URL("../assets/balloon-green-636574e7.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonYellow {
        background-image: url('${l(new URL(new URL("../assets/balloon-yellow-bda8f1b2.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonYellowPurple {
        background-image: url('${l(new URL(new URL("../assets/balloon-yellow-purple-eeb2143e.png",import.meta.url).href,import.meta.url))}');
      }

      .rocketBlue {
        background-image: url('${l(new URL(new URL("../assets/rocket-blue-3b82c1d1.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketPurple {
        background-image: url('${l(new URL(new URL("../assets/rocket-purple-18d11229.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketGreen {
        background-image: url('${l(new URL(new URL("../assets/rocket-green-00fb764a.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketYellow {
        background-image: url('${l(new URL(new URL("../assets/rocket-yellow-da041111.svg",import.meta.url).href,import.meta.url))}');
      }

      .text {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
      }

      .rocket .text {
        position: relative;
        top: -0.3em;
      }
    `}},{kind:"method",key:"render",value:function(){const e=+(""!==this.text1)+ +(""!==this.text2)+ +(""!==this.text3)+ +(""!==this.text4);let t="";e<=1?t="oneLineFont":2===e?t="twoLineFont":3===e?t="threeLineFont":4===e&&(t="fourLineFont");let r=n``,o=n``,i=n``;""===this.text1||""===this.text2&&""===this.text3&&""===this.text4||(r=n`<br />`),""===this.text2||""===this.text3&&""===this.text4||(o=n`<br />`),""!==this.text2&&""!==this.text4&&(i=n`<br />`);const l=n`${this.text1}${r}${this.text2}${o}${this.text3}${i}${this.text4}`,a=this.iconcolor.charAt(0).toUpperCase()+this.iconcolor.slice(1);return n`
      <div class="${this.image} ${this.image}${a} ${t}">
        <span class="text">${l}</span>
      </div>
    `}}]}}),o);export{a as BalloonIndex};
