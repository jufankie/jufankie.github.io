import{_ as e,e as i,n}from"./property-8b64881f.js";import{s as r,r as t,o as a,p as l}from"./lit-element-9a022b11.js";import"./NumberLine-505affe2.js";let o=e([n("jumping-jan-with-text-overlay")],(function(e,n){return{F:class extends n{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[i()],key:"text1",value:()=>""},{kind:"field",decorators:[i()],key:"text2",value:()=>""},{kind:"field",decorators:[i()],key:"smallestTickmark",value:()=>"noTickMark"},{kind:"get",static:!0,key:"styles",value:function(){return t`
      .container {
        display: grid;
        grid-template-columns: 40px 60px;
      }
      .numberline {
        display: inline-block;
        background-size: 55px 90px;
        width: 55px;
        height: 90px;
        background-color: transparent;
        border: none;
        outline: none;
        margin: 2px;
        padding: 0;
        color: black;
        font-size: 20px;
        line-height: 78px;
        text-align: center;
      }

      .numberlineNoTickMark {
        background-image: url('${a(new URL(new URL("../assets/numberline-icon-no-tickmarks-5f5ff298.png",import.meta.url).href,import.meta.url))}');
      }
      .numberlineTickMark1 {
        background-image: url('${a(new URL(new URL("../assets/numberline-icon-one-five-ten-tickmarks-c0f02eae.png",import.meta.url).href,import.meta.url))}');
      }
      .numberlineTickMark5 {
        background-image: url('${a(new URL(new URL("../assets/numberline-icon-five-ten-tickmarks-6462e8aa.png",import.meta.url).href,import.meta.url))}');
      }
      .numberlineTickMark10 {
        background-image: url('${a(new URL(new URL("../assets/numberline-icon-ten-tickmarks-916c8f61.png",import.meta.url).href,import.meta.url))}');
      }

      .jan {
        display: inline-block;
        background-size: 35px 90px;
        width: 35px;
        height: 90px;
        line-height: 78px;
        background-color: transparent;
        font-size: 25px;
        border: none;
        outline: none;
        color: black;
        text-align: center;
        margin: 2px;
        padding: 0;
        background-image: url('${a(new URL(new URL("../assets/Mompitz Jan_Ballon-84b8de10.png",import.meta.url).href,import.meta.url))}');
      }

      .text {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
      }
    `}},{kind:"method",key:"render",value:function(){let e=l``;""!==this.text1&&""!==this.text2&&(e=l`<br />`);const i=l`${this.text1}${e}${this.text2}`;let n="";return n="noTickMark"===this.smallestTickmark?"numberlineNoTickMark":"tickMark1"===this.smallestTickmark?"numberlineTickMark1":"tickMark5"===this.smallestTickmark?"numberlineTickMark5":"tickMark10"===this.smallestTickmark?"numberlineTickMark10":"numberlineNoTickMark",l`
      <div class="container">
        <div class="jan"></div>
        <div class="numberline ${n}">${i}</div>
      </div>
    `}}]}}),r);export{o as JumpingJanWithTextOverlay};
