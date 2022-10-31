import{_ as e,e as t,a as o,b as s,n as i}from"./property-8b64881f.js";import{s as n,r as l,p as r}from"./lit-element-9a022b11.js";import{t as a}from"./state-47f777cb.js";import{T as d}from"./TimeLimitedGame2-b30b69d8.js";import{b as c,a as u,r as h,s as m}from"./Randomizer-227ccb40.js";import{G as p}from"./GameLogger-04cfe145.js";import"./AnalogClock-0691af0e.js";import"./DigitalClock-60a2ff98.js";import"./SentenceClock-79fbfb91.js";import{a as k,r as g}from"./ResizeObserver-8ea02421.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-b0b13d41.js";import"./MessageDialog-17909aa3.js";e([i("dynamic-grid")],(function(e,i){class n extends i{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[t({type:Number})],key:"padding",value:()=>2},{kind:"field",decorators:[t({type:Number})],key:"contentAspectRatio",value:()=>1},{kind:"field",decorators:[a()],key:"perRow",value:()=>0},{kind:"field",decorators:[a()],key:"perColumn",value:()=>0},{kind:"get",static:!0,key:"styles",value:function(){return l`
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }

      ::slotted(*) {
        width: calc(100% / var(--perRow));
        height: calc(100% / var(--perColumn));
        box-sizing: border-box;
        padding: var(--padding);
      }
    `}},{kind:"method",key:"connectedCallback",value:function(){o(s(n.prototype),"connectedCallback",this).call(this),k(this)}},{kind:"method",key:"disconnectedCallback",value:function(){o(s(n.prototype),"disconnectedCallback",this).call(this),g(this)}},{kind:"method",key:"handleResize",value:function(){this.determineNumberRowsAndColumns()}},{kind:"method",key:"handleSlottedElementsChange",value:function(){this.determineNumberRowsAndColumns()}},{kind:"method",key:"determineNumberRowsAndColumns",value:function(){const e=this.clientWidth/this.clientHeight/this.contentAspectRatio,t=Math.ceil(Math.sqrt(this.numberSlottedChildren/e)),o=Math.floor(Math.sqrt(this.numberSlottedChildren/e)),s=Math.ceil(this.numberSlottedChildren/t)/t,i=Math.ceil(this.numberSlottedChildren/o)/o;Math.abs(s-e)>Math.abs(i-e)?this.perColumn=o:this.perColumn=t,this.perRow=Math.ceil(this.numberSlottedChildren/this.perColumn)}},{kind:"get",key:"numberSlottedChildren",value:function(){const e=this.shadowRoot?.querySelector("slot");let t=0;return e&&(t=e.assignedElements({flatten:!0}).length),t}},{kind:"method",key:"render",value:function(){return r`
      <style>
        :host {
          --perRow: ${this.perRow};
          --perColumn: ${this.perColumn};
          --padding: ${this.padding}%;
        }
      </style>
      <slot @slotchange=${this.handleSlottedElementsChange}></slot>
    `}}]}}),n);const f=[new URL(new URL("../assets/Mompitz Anne-c8e32aa4.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz Frank-7c1a0d32.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz Jan-500-bd20af4a.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz Johannes-a7db58a8.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz Otto-031ac535.png",import.meta.url).href,import.meta.url)];let y=e([i("clock-pairing-app")],(function(e,t){class i extends t{constructor(){super(),e(this),this.parseUrl()}}return{F:i,d:[{kind:"field",key:"gameLogger",value:()=>new p("L","")},{kind:"field",key:"numberOfClockPairs",value:()=>7},{kind:"field",key:"selectedTimeTypes",value:()=>[]},{kind:"field",key:"selectedClockTypes",value:()=>[]},{kind:"field",decorators:[a()],key:"clockLocations",value:()=>[]},{kind:"field",decorators:[a()],key:"clockInformation",value:()=>[]},{kind:"field",decorators:[a()],key:"selectedClock",value:()=>null},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);this.selectedTimeTypes=[],e.has("hour")&&(this.selectedTimeTypes.push("Hour"),this.gameLogger.appendSubCode("u")),e.has("halfhour")&&(this.selectedTimeTypes.push("HalfHour"),this.gameLogger.appendSubCode("h")),e.has("quarterhour")&&(this.selectedTimeTypes.push("QuarterHour"),this.gameLogger.appendSubCode("q")),e.has("10minute")&&(this.selectedTimeTypes.push("10Minute"),this.gameLogger.appendSubCode("t")),e.has("minute")&&(this.selectedTimeTypes.push("Minute"),this.gameLogger.appendSubCode("m")),0===this.selectedTimeTypes.length&&(this.selectedTimeTypes=["Hour","HalfHour","QuarterHour"],this.gameLogger.appendSubCode("uhq")),this.gameLogger.appendSubCode("-"),this.selectedClockTypes=[],e.has("analog")&&(this.selectedClockTypes.push("Analog"),this.gameLogger.appendSubCode("a")),e.has("digital")&&(this.selectedClockTypes.push("Digital"),this.gameLogger.appendSubCode("d")),e.has("sentence")&&(this.selectedClockTypes.push("Sentence"),this.gameLogger.appendSubCode("s")),0===this.selectedClockTypes.length&&(this.selectedClockTypes=["Analog","Sentence"],this.gameLogger.appendSubCode("as"))}},{kind:"method",key:"startNewGame",value:function(){o(s(i.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"welcomeMessage",value:function(){return r`<p>Klik twee klokken aan die dezelfde tijd aangeven.</p>`}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Combineer klokken"}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.numberOk%this.numberOfClockPairs*2==0&&this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"determineTimeAlreadyExists",value:function(e,t){let o=!1;for(let s=0;s<this.clockInformation.length&&!o;s++)o=o||this.clockInformation[s].hours%12==e%12&&this.clockInformation[s].minutes===t;return o}},{kind:"method",key:"newRound",value:function(){this.clockInformation=[];const e=[...Array(2*this.numberOfClockPairs).keys()],t=[];t.push(c(e)),t.push(c(e)),t.push(c(e));const o=[...f];for(let e=0;e<this.numberOfClockPairs;e++){let s=0,i=0,n=!1;do{s=h(0,23);const e=u(this.selectedTimeTypes);"Hour"===e?i=0:"HalfHour"===e?i=30:"QuarterHour"===e?i=u([15,45]):"10Minute"===e?i=u([10,20,40,50]):"Minute"===e&&(i=u([1,2,3,4,5,6,7,8,9,11,12,13,14,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,41,42,43,44,46,47,48,49,51,52,53,54,55,56,57,58,59])),n=this.determineTimeAlreadyExists(s,i)}while(n);const l=[...this.selectedClockTypes];this.clockInformation.push({hours:s,minutes:i,clockNumber:2*e,pairNumber:2*e+1,clockType:c(l),enabled:!0,left:h(0,20),top:h(0,20),addImage:t.includes(2*e)?{url:c(o),posLeft:h(5,25),posTop:h(5,25),size:75}:null}),this.clockInformation.push({hours:s,minutes:i,clockNumber:2*e+1,pairNumber:2*e,clockType:c(l),enabled:!0,left:h(0,20),top:h(0,20),addImage:t.includes(2*e+1)?{url:c(o),posLeft:h(5,25),posTop:h(5,25),size:75}:null})}m(this.clockInformation)}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameLogger.logGameOver()}},{kind:"method",key:"firstUpdated",value:async function(){return await this.getUpdateComplete(),window.navigator.userAgent.toLowerCase().includes("firefox")&&this.renderRoot.querySelectorAll("img[draggable=false]").forEach((e=>{e.addEventListener("mousedown",(e=>e.preventDefault()))})),o(s(i.prototype),"firstUpdated",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[...o(s(i),"styles",this),l`
        button {
          border: 0px;
          background-color: transparent;
        }
        button.selected {
          background-color: lightblue;
        }
      `]}},{kind:"method",key:"createClock",value:function(e){let t=r`FOUT`;return"Analog"===e.clockType?t=r`
        <analog-clock
          id="clock${e.clockNumber}"
          hours="${e.hours}"
          minutes="${e.minutes}"
          showQuarterNumbers
          showAllTickMarks
        ></analog-clock>
      `:"Digital"===e.clockType?t=r` <digital-clock
        id="clock${e.clockNumber}"
        hours="${e.hours}"
        minutes="${e.minutes}"
      ></digital-clock>`:"Sentence"===e.clockType&&(t=r` <sentence-clock
        id="clock${e.clockNumber}"
        hours="${e.hours}"
        minutes="${e.minutes}"
        useWords
      ></sentence-clock>`),t}},{kind:"method",key:"handleButtonClick",value:function(e){null===this.selectedClock?this.selectedClock=e:this.selectedClock===e?this.selectedClock=null:this.selectedClock.pairNumber===e.clockNumber?(this.selectedClock.enabled=!1,e.enabled=!1,this.selectedClock=null,this.handleCorrectAnswer()):(this.selectedClock=null,this.handleWrongAnswer())}},{kind:"method",key:"createButton",value:function(e){let t="";e===this.selectedClock&&(t="selected");let o=r``,s=r``;if(e.enabled&&(o=r`
        <button
          style="position: relative; left: ${e.left}%; top: ${e.top}%; width: 80%; height: 80%;"
          class="${t}"
          @click=${()=>this.handleButtonClick(e)}
        >
          ${this.createClock(e)}
        </button>
      `),null!==e.addImage){const t=e.addImage;s=r`<div>
        <img
          src="${t.url}"
          alt="Mompitz figure"
          style="width: ${t.size}%; 
                 height: ${t.size}%; 
                 object-fit: contain; 
                 position:relative; 
                 top: ${t.posTop}%; 
                 left: ${t.posLeft}%;"
        />
      </div>`}return r`<div>${o}</div>
      ${s}`}},{kind:"method",key:"renderGameContent",value:function(){return r`
      <dynamic-grid
        numberInGroup="12"
        contentAspectRatio="1"
        padding="0"
        style="width: 100%; height: 100%; top: 0;"
      >
        ${this.clockInformation.map((e=>this.createButton(e)))}
      </dynamic-grid>
    `}}]}}),d);export{y as ClockPairingApp};
