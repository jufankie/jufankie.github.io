import{_ as i,a as t,b as e,n,e as l}from"./property-8b64881f.js";import{s,r as d,o,p as r}from"./lit-element-9a022b11.js";import{t as a}from"./state-47f777cb.js";import{a as h,r as g}from"./ResizeObserver-8ea02421.js";i([n("digit-keyboard")],(function(i,n){class l extends n{constructor(...t){super(...t),i(this)}}return{F:l,d:[{kind:"field",decorators:[a()],key:"wideTallClass",value:()=>"WideContainer"},{kind:"field",decorators:[a()],key:"disabled",value:()=>[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},{kind:"get",static:!0,key:"styles",value:function(){return d`
      :host {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        padding: 0;
      }

      .KeyboardBox {
        aspect-ratio: 3/4;
        box-sizing: border-box;
      }

      .WideContainer {
        height: 100%;
        width: auto;
      }

      .TallContainer {
        height: auto;
        width: 100%;
      }

      .DigitRow {
        display: flex;
        justify-content: center;
        align-content: center;
        height: calc(100% / 4);
        padding: 0;
      }

      .Digit {
        background-size: contain;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        border: none;
        outline: none;
        width: calc(100% / 3);
        height: calc (100%);
        color: black;
        background-image: url(${o(new URL(new URL("../assets/ball-blue-a9681c59.svg",import.meta.url).href,import.meta.url))});
        padding: 0;
      }

      text {
        font-size: 70px;
      }
    `}},{kind:"method",key:"handleResize",value:function(){this.clientHeight/4>=this.clientWidth/3?this.wideTallClass="TallContainer":this.wideTallClass="WideContainer"}},{kind:"field",key:"boundHandleKeyDown",value(){return this.handleKeyDown.bind(this)}},{kind:"method",key:"handleKeyDown",value:function(i){const t=i.key,e=new Map([["0",0],["1",1],["2",2],["3",3],["4",4],["5",5],["6",6],["7",7],["8",8],["9",9]]).get(t);void 0!==e&&this.handleDigit(e)}},{kind:"method",key:"connectedCallback",value:function(){t(e(l.prototype),"connectedCallback",this).call(this),h(this),document.addEventListener("keydown",this.boundHandleKeyDown)}},{kind:"method",key:"disconnectedCallback",value:function(){t(e(l.prototype),"disconnectedCallback",this).call(this),g(this),document.removeEventListener("keydown",this.boundHandleKeyDown)}},{kind:"method",key:"disable",value:function(i){this.disabled[i]=!0,this.requestUpdate()}},{kind:"method",key:"enableAllDigits",value:function(){for(let i=0;i<10;i++)this.disabled[i]=!1;this.requestUpdate()}},{kind:"method",key:"renderDigitAsSvg",value:function(i){return r`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <text x="30" y="73">${"disabled"===i?"✗":i}</text>
      </svg>
    `}},{kind:"method",key:"handleDigit",value:function(i){if(!this.disabled[i]){const t=new CustomEvent("digit-entered",{detail:i});this.dispatchEvent(t)}}},{kind:"method",key:"render",value:function(){const i=[],t=[0,1,2,3,4,5,6,7,8,9];for(let e=0;e<4;e++){const n=[],l=3===e?0:3*e+1,s=3===e?0:3*e+3;for(let i=l;i<=s;i++){const e=t[i];if(void 0===l||void 0===s)throw new Error("Out of bounds in determining digit");n.push(r`
          <button
            class="Digit"
            id="Digit${e}"
            @click="${()=>this.handleDigit(e)}"
          >
            ${this.disabled[e]?this.renderDigitAsSvg("disabled"):this.renderDigitAsSvg(e)}
          </button>
        `)}i.push(r`<div class="DigitRow">${n}</div>`)}return r` <div class="KeyboardBox ${this.wideTallClass}">${i}</div> `}}]}}),s),i([n("digit-fillin")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[l({type:Number})],key:"desiredNumber",value:()=>0},{kind:"field",decorators:[l({type:Number})],key:"numberDigits",value:()=>1},{kind:"field",decorators:[l({type:Boolean})],key:"fillinActive",value:()=>!1},{kind:"field",decorators:[a()],key:"digitVisible",value:()=>-1},{kind:"field",decorators:[a()],key:"digits",value:()=>[]},{kind:"field",key:"firstPossibleVisible",value:()=>0},{kind:"get",static:!0,key:"styles",value:function(){return d`
      .fillinDigit {
        box-sizing: border-box;
        display: inline-block;
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
        height: 2ex;
        width: 1em;
      }

      .fillinSingleDigit {
        border: 2px solid black;
        margin-left: 0.2em;
        margin-right: 0.2em;
      }

      .fillinMultiDigitMid {
        border-bottom: 2px solid black;
        border-top: 2px solid black;
        border-right: 0.5px solid lightgrey;
        border-left: 0.5px solid lightgrey;
        margin-left: 0;
        margin-right: 0;
      }

      .fillinMultiDigitLeft {
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        border-top: 2px solid black;
        border-right: 0.5px solid lightgrey;
        margin-left: 0.2em;
        margin-right: 0;
      }

      .fillinMultiDigitRight {
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        border-top: 2px solid black;
        border-left: 0.5px solid lightgrey;
        margin-left: 0;
        margin-right: 0.2em;
      }

      .fillinActive {
        border-color: blue;
      }
    `}},{kind:"method",key:"processInput",value:function(i){let t;if(!this.fillinActive)throw Error("DigitFillin: processInput called while fillin not active");return i===this.digits[this.digitVisible+1]?(this.digitVisible+=1,this.digitVisible===this.numberDigits-1?(this.fillinActive=!1,t="fillinComplete"):t="inputOk"):t="inputNok",t}},{kind:"method",key:"resetVisible",value:function(){this.digitVisible=this.firstPossibleVisible-1}},{kind:"method",key:"willUpdate",value:function(i){i.has("desiredNumber")&&this.splitIntoDigits()}},{kind:"method",key:"splitIntoDigits",value:function(){this.digits=[];let i=this.desiredNumber;for(;0!==i;)this.digits.push(i%10),i-=this.digits[this.digits.length-1],i/=10;this.digits.length>this.numberDigits&&(this.numberDigits=this.digits.length),this.firstPossibleVisible=this.numberDigits-this.digits.length;for(let i=this.digits.length;i<this.numberDigits;i++)this.digits[i]=NaN;this.digits.reverse(),this.resetVisible()}},{kind:"method",key:"render",value:function(){const i=[];return this.digits.forEach(((t,e)=>{let n;n=1===this.numberDigits?"fillinSingleDigit":0===e?"fillinMultiDigitLeft":e===this.numberDigits-1?"fillinMultiDigitRight":"fillinMultiDigitMid",i.push(r`<div
        class="fillinDigit ${n} ${e===this.digitVisible+1&&this.fillinActive?"fillinActive":""}"
      >
        ${e<=this.digitVisible&&!Number.isNaN(t)?t:r`&nbsp;`}
      </div>`)})),r`${i}`}}]}}),s);
