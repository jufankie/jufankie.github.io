import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as l,r as o,o as a,p as n}from"./lit-element-9a022b11.js";let i=e([r("game-icon-with-text-below")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t()],key:"iconcolor",value:()=>"yellow"},{kind:"field",decorators:[t()],key:"image",value:()=>"balloon"},{kind:"field",decorators:[t()],key:"textM",value:()=>""},{kind:"field",decorators:[t()],key:"textB",value:()=>""},{kind:"get",static:!0,key:"styles",value:function(){return o`
      .balloon,
      .kite,
      .rocket {
        display: flex;
        justify-content: center;
        align-items: center;
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

      .kiteBlue {
        background-image: url('${a(new URL(new URL("../assets/kite-blue-6058e104.svg",import.meta.url).href,import.meta.url))}');
      }

      .kitePurple {
        background-image: url('${a(new URL(new URL("../assets/kite-purple-f83e1d42.svg",import.meta.url).href,import.meta.url))}');
      }

      .kiteGreen {
        background-image: url('${a(new URL(new URL("../assets/kite-green-efbf3a82.svg",import.meta.url).href,import.meta.url))}');
      }

      .kiteYellow {
        background-image: url('${a(new URL(new URL("../assets/kite-yellow-27826c11.svg",import.meta.url).href,import.meta.url))}');
      }

      .balloonBlue {
        background-image: url('${a(new URL(new URL("../assets/balloon-blue-85ba45f7.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonPurple {
        background-image: url('${a(new URL(new URL("../assets/balloon-purple-2de82f00.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonGreen {
        background-image: url('${a(new URL(new URL("../assets/balloon-green-636574e7.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonYellow {
        background-image: url('${a(new URL(new URL("../assets/balloon-yellow-bda8f1b2.png",import.meta.url).href,import.meta.url))}');
      }

      .balloonYellowPurple {
        background-image: url('${a(new URL(new URL("../assets/balloon-yellow-purple-eeb2143e.png",import.meta.url).href,import.meta.url))}');
      }

      .rocketBlue {
        background-image: url('${a(new URL(new URL("../assets/rocket-blue-3b82c1d1.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketPurple {
        background-image: url('${a(new URL(new URL("../assets/rocket-purple-18d11229.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketGreen {
        background-image: url('${a(new URL(new URL("../assets/rocket-green-00fb764a.svg",import.meta.url).href,import.meta.url))}');
      }

      .rocketYellow {
        background-image: url('${a(new URL(new URL("../assets/rocket-yellow-da041111.svg",import.meta.url).href,import.meta.url))}');
      }

      .textM,
      .textB {
        position: relative;
        line-height: normal;
        text-align: center;
      }

      .textM {
        width: 20%;
      }

      .rocket .textM {
        top: -0.2em;
      }

      .textB {
        width: 90px;
      }
    `}},{kind:"method",key:"render",value:function(){const e=this.iconcolor.charAt(0).toUpperCase()+this.iconcolor.slice(1);return n`
      <div class="${this.image} ${this.image}${e}">
        <span class="textM">${this.textM}</span>
      </div>
      <div class="textB">${this.textB}</span>
    `}}]}}),l);export{i as GameIconWithTextOnBelow};
