import{_ as e,e as t,n}from"./property-8b64881f.js";import{s as o,r as a,p as i}from"./lit-element-9a022b11.js";import{t as s}from"./state-47f777cb.js";import{b as r}from"./Randomizer-a9177b86.js";e([n("ascending-balloons")],(function(e,n){class o extends n{constructor(){super(),e(this),this.updateBalloonInfo()}}return{F:o,d:[{kind:"field",static:!0,key:"ascendingImage",value:()=>new Map([["balloon",new Map([["blue",new URL(new URL("../assets/balloon-blue-85ba45f7.png",import.meta.url).href,import.meta.url)],["yellow",new URL(new URL("../assets/balloon-yellow-bda8f1b2.png",import.meta.url).href,import.meta.url)],["purple",new URL(new URL("../assets/balloon-purple-2de82f00.png",import.meta.url).href,import.meta.url)],["green",new URL(new URL("../assets/balloon-green-636574e7.png",import.meta.url).href,import.meta.url)]])],["star",new Map([["blue",new URL(new URL("../assets/star-blue-55c688e7.png",import.meta.url).href,import.meta.url)],["yellow",new URL(new URL("../assets/star-yellow-5b0261aa.png",import.meta.url).href,import.meta.url)],["purple",new URL(new URL("../assets/star-purple-74437e2f.png",import.meta.url).href,import.meta.url)],["green",new URL(new URL("../assets/star-green-e982b9c5.png",import.meta.url).href,import.meta.url)]])],["kite",new Map([["blue",new URL(new URL("../assets/kite-blue-6058e104.svg",import.meta.url).href,import.meta.url)],["yellow",new URL(new URL("../assets/kite-yellow-27826c11.svg",import.meta.url).href,import.meta.url)],["purple",new URL(new URL("../assets/kite-purple-f83e1d42.svg",import.meta.url).href,import.meta.url)],["green",new URL(new URL("../assets/kite-green-efbf3a82.svg",import.meta.url).href,import.meta.url)]])],["rocket",new Map([["blue",new URL(new URL("../assets/rocket-blue-3b82c1d1.svg",import.meta.url).href,import.meta.url)],["yellow",new URL(new URL("../assets/rocket-yellow-da041111.svg",import.meta.url).href,import.meta.url)],["purple",new URL(new URL("../assets/rocket-purple-18d11229.svg",import.meta.url).href,import.meta.url)],["green",new URL(new URL("../assets/rocket-green-00fb764a.svg",import.meta.url).href,import.meta.url)]])]])},{kind:"field",decorators:[t({attribute:!1})],key:"answers",value:()=>({correct:12,incorrect:[1,3,74]})},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[s()],key:"ascension",value:()=>!1},{kind:"field",decorators:[s()],key:"balloonInfoList",value:()=>[]},{kind:"field",decorators:[t()],key:"imageType",value:()=>"balloon"},{kind:"method",key:"updateBalloonInfo",value:function(){this.balloonInfoList=[];const e=["blue","green","yellow","purple"],t=[this.answers.correct,...this.answers.incorrect];for(;t.length>0;)this.balloonInfoList.push({color:r(e),label:r(t),disabled:!1});this.requestUpdate()}},{kind:"method",key:"willUpdate",value:function(e){e.has("answers")&&this.updateBalloonInfo()}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      .MoveUp {
        animation-name: MoveUp;
        animation-duration: 10s;
        animation-delay: 0.05s; /* Needed to ensure iOS safari has sufficient time to process restarts of the animation */
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      @keyframes MoveUp {
        from {
          transform: translate(0px, -0px);
        }
        to {
          transform: translate(0px, calc(-100vh + 2em));
        }
      }

      .star,
      .kite,
      .balloon,
      .rocket {
        border: none;
        outline: none;
        color: black;
        text-align: center;
        padding: 0;
      }

      .star {
        background-size: 3.5em 3.5em;
        background-color: Transparent;
        font-size: calc(0.9em + 2vmin);
        width: 3.5em;
        height: 3.5em;
        line-height: 3.8em;
      }

      .kite {
        display: inline-block;
        background-size: 2em 3em;
        background-color: Transparent;
        font-size: calc(0.9em + 4vmin);
        width: 2em;
        height: 3em;
      }

      .kite span {
        position: relative;
        top: -0.4em;
      }

      .rocket {
        display: inline-block;
        background-size: 3.5em 3.5em;
        background-color: Transparent;
        font-size: calc(0.9em + 3vmin);
        width: 3.5em;
        height: 3.5em;
      }

      .rocket span {
        position: relative;
        top: -0.2em;
      }

      .balloon {
        background-size: 1.76em 2em;
        background-color: Transparent;
        font-size: calc(1em + 4vmin);
        width: 1.76em;
        height: 2em;
      }

      .balloon span {
        position: relative;
        top: -0.15em;
      }

      #balloons {
        position: absolute;
        width: 100%;
        border: none;
        display: flex;
        justify-content: space-around;
        bottom: 0px;
      }
    `}},{kind:"method",key:"restartAscension",value:async function(){await this.reset(),this.startAscension()}},{kind:"method",key:"reset",value:async function(){this.updateBalloonInfo(),this.ascension=!1,await this.performUpdate(),this.offsetWidth}},{kind:"method",key:"startAscension",value:function(){this.ascension=!0}},{kind:"method",key:"balloonClicked",value:function(e){if(e!==this.answers.correct){const t=this.balloonInfoList.find((t=>t.label===e));if(null==t)throw Error("Balloon label not found in balloonInfoList, this should not happen");t.disabled=!0,this.requestUpdate();const n=new Event("wrong-balloon-clicked");this.dispatchEvent(n)}else{const e=new Event("correct-balloon-clicked");this.dispatchEvent(e)}}},{kind:"method",key:"ascensionComplete",value:function(){const e=new Event("ascension-complete");this.dispatchEvent(e)}},{kind:"method",key:"renderTextBalloon",value:function(e){let t;return t=this.disabled?"":e.disabled?"✗":`${e.label}`,t}},{kind:"method",key:"render",value:function(){return i`
      <div
        id="balloons"
        class="${this.ascension&&!this.disabled?"MoveUp":""}"
        @animationend=${()=>this.ascensionComplete()}
      >
        ${this.balloonInfoList.map((e=>i`
              <button
                type="button"
                class="${this.imageType}"
                style="background-image: url('${o.ascendingImage.get(this.imageType)?.get(e.color)}');"
                @click="${()=>this.balloonClicked(e.label)}"
                ?disabled="${e.disabled||this.disabled}"
              >
                <span>${this.renderTextBalloon(e)}</span>
              </button>
            `))}
      </div>
    `}}]}}),o);
