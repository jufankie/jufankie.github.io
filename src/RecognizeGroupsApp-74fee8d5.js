import{_ as e,e as i,a as t,b as n,n as s}from"./property-8b64881f.js";import{s as r,r as o,p as l}from"./lit-element-9a022b11.js";import{t as a}from"./state-47f777cb.js";import{T as d}from"./TimeLimitedGame2-428eeada.js";import{r as u,a as h}from"./Randomizer-a9177b86.js";import{G as c}from"./GameLogger-170cb2bc.js";import{a as m,r as g}from"./ResizeObserver-8ea02421.js";import"./DigitFillin-bbc6ff11.js";import"./RealHeight-abceab19.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";const p=new Map([["box",{name:"box",url:new URL(new URL("../assets/red-box-e8588c1e.png",import.meta.url).href,import.meta.url),aspectRatio:674/671}],["balloon",{name:"balloon",url:new URL(new URL("../assets/balloon-blue-85ba45f7.png",import.meta.url).href,import.meta.url),aspectRatio:110/150}],["star",{name:"star",url:new URL(new URL("../assets/star-green-e982b9c5.png",import.meta.url).href,import.meta.url),aspectRatio:213/181}],["tractor",{name:"cherries",url:new URL(new URL("../assets/tractor-2f115314.png",import.meta.url).href,import.meta.url),aspectRatio:250/183}],["strawberry",{name:"strawberry",url:new URL(new URL("../assets/strawberry-5debde66.png",import.meta.url).href,import.meta.url),aspectRatio:227/242}]]);function b(e){const i=p.get(e);if(!i)throw new Error("Non existing image information requested");return i}let f=e([s("group-of-images")],(function(e,s){class r extends s{constructor(...i){super(...i),e(this)}}return{F:r,d:[{kind:"field",decorators:[i({type:String})],key:"image",value:()=>"box"},{kind:"field",decorators:[i({type:Number})],key:"numberInGroup",value:()=>1},{kind:"field",decorators:[a()],key:"perRow",value:()=>0},{kind:"field",decorators:[a()],key:"perColumn",value:()=>0},{kind:"field",decorators:[a()],key:"tallWideFlexItem",value:()=>"tall"},{kind:"field",static:!0,key:"possibleImages",value:()=>["box","balloon","star","tractor","strawberry"]},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }

      .flexItem {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% / var(--perRow));
        height: calc(100% / var(--perColumn));
        align-content: center;
        justify-content: center;
        text-align: center;
      }

      img.tall {
        height: auto;
        width: 90%;
        aspect-ratio: var(--aspectRatio);
      }

      img.wide {
        height: 90%;
        width: auto;
        aspect-ratio: var(--aspectRatio);
      }
    `}},{kind:"method",key:"connectedCallback",value:function(){t(n(r.prototype),"connectedCallback",this).call(this),m(this)}},{kind:"method",key:"disconnectedCallback",value:function(){t(n(r.prototype),"disconnectedCallback",this).call(this),g(this)}},{kind:"method",key:"willUpdate",value:function(e){e.has("numberInGroup")&&this.determineNumberRowsAndColumns()}},{kind:"method",key:"handleResize",value:function(){this.determineNumberRowsAndColumns()}},{kind:"method",key:"determineNumberRowsAndColumns",value:function(){const e=b(this.image).aspectRatio,i=this.clientWidth/this.clientHeight/e,t=Math.ceil(Math.sqrt(this.numberInGroup/i)),n=Math.floor(Math.sqrt(this.numberInGroup/i)),s=Math.ceil(this.numberInGroup/t)/t,r=Math.ceil(this.numberInGroup/n)/n;Math.abs(s-i)>Math.abs(r-i)?this.perColumn=n:this.perColumn=t,this.perRow=Math.ceil(this.numberInGroup/this.perColumn);const o=this.clientWidth/this.perRow/(this.clientHeight/this.perColumn);this.tallWideFlexItem=o>e?"wide":"tall"}},{kind:"method",key:"render",value:function(){const e=[];for(let i=0;i<this.numberInGroup;i++)e.push(l`<div class="flexItem">
        <img
          class="${this.tallWideFlexItem}"
          src="${b(this.image).url}"
          alt="${b(this.image).name}"
        />
      </div>`);return l`
      <style>
        :host {
          --perRow: ${this.perRow};
          --perColumn: ${this.perColumn};
          --aspectRatio: ${b(this.image).aspectRatio};
        }
      </style>
      ${e}
    `}}]}}),r),k=e([s("recognize-groups-app")],(function(e,i){class s extends i{constructor(){super(),e(this),this.parseUrl()}}return{F:s,d:[{kind:"field",key:"gameLogger",value:()=>new c("F","")},{kind:"field",decorators:[a()],key:"numberOfGroups",value:()=>0},{kind:"field",decorators:[a()],key:"groupSize",value:()=>0},{kind:"field",decorators:[a()],key:"image",value:()=>f.possibleImages[0]},{kind:"field",decorators:[a()],key:"activeFillIn",value:()=>0},{kind:"field",decorators:[a()],key:"usedFillIns",value:()=>[]},{kind:"field",key:"groupsSize1Seen",value:()=>!1},{kind:"field",key:"numberOfGroups1Seen",value:()=>!1},{kind:"field",decorators:[a()],key:"includeAnswer",value:()=>!0},{kind:"field",decorators:[a()],key:"includeLongAddition",value:()=>!0},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);this.includeAnswer=!0,e.has("excludeAnswer")&&(this.includeAnswer=!1),e.has("includeAnswer"),this.includeLongAddition=!1,e.has("includeLongAddition")&&(this.includeLongAddition=!0),e.has("excludeLongAddition"),!this.includeAnswer&&this.includeLongAddition&&this.gameLogger.setSubCode("a"),this.includeAnswer||this.includeLongAddition||this.gameLogger.setSubCode("b"),this.includeAnswer&&!this.includeLongAddition&&this.gameLogger.setSubCode("c"),this.includeAnswer&&this.includeLongAddition&&this.gameLogger.setSubCode("d")}},{kind:"method",key:"getUpdateComplete",value:async function(){return await t(n(s.prototype),"getUpdateComplete",this).call(this)}},{kind:"method",key:"startNewGame",value:function(){this.groupsSize1Seen=!1,this.numberOfGroups1Seen=!1,t(n(s.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"welcomeMessage",value:function(){return l`<p>
      Tel het aantal groepjes en hoeveel er in een groepje zit.
    </p>`}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Herken groepjes van"}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"newRound",value:function(){let e=this.numberOfGroups;for(;e===this.numberOfGroups;)e=u(this.numberOfGroups1Seen?2:1,9);1===e&&(this.numberOfGroups1Seen=!0),this.numberOfGroups=e;let i=this.groupSize;for(;i===this.groupSize;)i=u(this.groupsSize1Seen?2:1,9);1===i&&(this.groupsSize1Seen=!0),this.groupSize=i;let t=this.image;for(;t===this.image;)t=h(f.possibleImages);if(this.image=t,this.usedFillIns=[],this.includeLongAddition)for(let e=0;e<this.numberOfGroups;e++)this.usedFillIns.push(`longAddition${e}`);this.usedFillIns.push("numberGroups"),this.usedFillIns.push("groupSize"),this.includeAnswer&&this.usedFillIns.push("result"),this.activeFillIn=0;for(const e of this.usedFillIns)this.getElement(`#${e}`).resetVisible();this.getElement("digit-keyboard").enableAllDigits()}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameLogger.logGameOver()}},{kind:"method",key:"firstUpdated",value:async function(){return await this.getUpdateComplete(),window.navigator.userAgent.toLowerCase().includes("firefox")&&this.renderRoot.querySelectorAll("img[draggable=false]").forEach((e=>{e.addEventListener("mousedown",(e=>e.preventDefault()))})),t(n(s.prototype),"firstUpdated",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(n(s),"styles",this),o`
        #totalGame {
          position: absolute;
          width: calc(var(--vw) * 100);
          height: calc(var(--vh) * 100 - 20px);
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 65% 35%;
          grid-template-rows: 75% 25%;
        }

        #groups {
          grid-column: 1 / span 2;
          grid-row: 1 / span 1;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: space-around;
        }

        group-of-images {
          width: calc(90% / var(--groupsPerRow));
          height: calc(90% / var(--numberRows));
          border: 4px dotted orange;
        }

        #excersize {
          grid-column: 1 / span 1;
          grid-row: 2 / span 1;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: space-evenly;
        }

        .subexcersize {
          display: flex;
          align-content: center;
          justify-content: center;
        }

        .smallText {
          font-size: calc(0.5 * min(5vw, 9vh));
        }

        .largeText {
          font-size: min(5vw, 9vh);
        }

        #keyboard {
          grid-column: 2 / span 1;
          grid-row: 2 / span 1;
          box-sizing: border-box;
        }

        digit-keyboard {
          width: 100%;
          height: 100%;
        }

        .text {
          margin-top: auto;
          margin-bottom: auto;
          text-align: center;
        }

        digit-fillin {
          margin-top: auto;
          margin-bottom: auto;
        }

        .larger {
          font-size: 150%;
        }

        .fillInSingleDigit {
          border: 2px solid black;
          height: 2ex;
          width: 1em;
          margin-left: 0.2em;
          margin-right: 0.2em;
        }

        .fillInDoubleDigitLeft {
          width: 1em;
          height: 2ex;
          border-left: 2px solid black;
          border-bottom: 2px solid black;
          border-top: 2px solid black;
          border-right: 1px solid lightgrey;
          margin-left: 0.2em;
          margin-right: 0;
        }

        .fillInDoubleDigitRight {
          width: 1em;
          height: 2ex;
          border-right: 2px solid black;
          border-bottom: 2px solid black;
          border-top: 2px solid black;
          border-left: 1px solid lightgrey;
          margin-left: 0;
          margin-right: 0.2em;
        }

        .fillInActive {
          border-color: blue;
        }
      `]}},{kind:"method",key:"getActiveFillin",value:function(){return this.getElement(`#${this.usedFillIns[this.activeFillIn]}`)}},{kind:"method",key:"handleDigit",value:function(e){const i=this.getActiveFillin().processInput(e);"inputNok"===i?(this.getElement("digit-keyboard").disable(e),this.handleWrongAnswer()):"inputOk"===i?this.getElement("digit-keyboard").enableAllDigits():"fillinComplete"===i&&(this.activeFillIn===this.usedFillIns.length-1?this.handleCorrectAnswer():(this.getElement("digit-keyboard").enableAllDigits(),this.activeFillIn+=1))}},{kind:"method",key:"renderGameContent",value:function(){const e=[0,1,2,2,2,3,2,3,3,3],i=[];for(let e=0;e<this.numberOfGroups;e++)i.push(l` <group-of-images
          numberInGroup="${this.groupSize}"
          image="${this.image}"
        ></group-of-images>`);const t=[];t.push(l`<digit-fillin
        id="longAddition0"
        desiredNumber="${this.groupSize}"
        numberDigits="1"
        ?fillinActive=${"longAddition0"===this.usedFillIns[this.activeFillIn]}
      ></digit-fillin>`);for(let e=1;e<9;e++)t.push(l`<div class="text" ?hidden=${e>=this.numberOfGroups}>
            <span class="larger">+ </span>
          </div>
          <digit-fillin
            id="longAddition${e}"
            desiredNumber="${this.groupSize}"
            numberDigits="1"
            ?fillinActive=${this.usedFillIns[this.activeFillIn]===`longAddition${e}`}
            ?hidden=${e>=this.numberOfGroups}
          ></digit-fillin>`);const n=l`
      <digit-fillin
        id="numberGroups"
        desiredNumber="${this.numberOfGroups}"
        numberDigits="1"
        ?fillinActive=${"numberGroups"===this.usedFillIns[this.activeFillIn]}
      ></digit-fillin>

      <div class="text">
        groepjes van <br />
        <span class="larger">x </span>
      </div>

      <digit-fillin
        id="groupSize"
        desiredNumber="${this.groupSize}"
        numberDigits="1"
        ?fillinActive=${"groupSize"===this.usedFillIns[this.activeFillIn]}
      ></digit-fillin>

      ${!0===this.includeAnswer?l` <digit-fillin
            id="result"
            desiredNumber="${this.groupSize*this.numberOfGroups}"
            numberDigits="2"
            ?fillinActive=${"result"===this.usedFillIns[this.activeFillIn]}
          ></digit-fillin>`:l``}
    `;return l`
      <style>
        #groups {
          --groupsPerRow: ${e[this.numberOfGroups]};
          --numberRows: ${Math.ceil(this.numberOfGroups/e[this.numberOfGroups])};
        }
      </style>
      <div id="totalGame">
        <div id="groups">${i}</div>
        <div
          id="excersize"
          class="${this.includeLongAddition?"smallText":"largeText"}"
        >
          ${this.includeLongAddition?l`<div class="subexcersize">${t}</div>`:l``}
          <div class="subexcersize">${n}</div>
        </div>
        <div id="keyboard">
          <digit-keyboard
            @digit-entered="${e=>this.handleDigit(e.detail)}"
          ></digit-keyboard>
        </div>
      </div>
    `}}]}}),d);export{k as RecognizeGroupsApp};
