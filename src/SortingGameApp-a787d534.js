import{_ as e,e as t,n as i,a,b as r}from"./property-8b64881f.js";import{s as n,r as s,o,p as m}from"./lit-element-9a022b11.js";import{t as l}from"./state-47f777cb.js";import{T as u}from"./TimeLimitedGame2-428eeada.js";import{r as d}from"./Randomizer-a9177b86.js";import"./AscendingBalloons-e6d28717.js";import{G as h}from"./GameLogger-170cb2bc.js";import{g as c,a as g}from"./RealHeight-abceab19.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";e([i("drop-target-box")],(function(e,i){return{F:class extends i{constructor(){super(),e(this),window.addEventListener("resize",(()=>{this.updateViewPortDimensions()}))}},d:[{kind:"field",decorators:[t({type:String})],key:"size",value:()=>"Smallest"},{kind:"field",decorators:[l()],key:"tallWide",value:()=>"Tall"},{kind:"field",decorators:[l()],key:"highlighted",value:()=>"none"},{kind:"method",key:"highlightForDrop",value:function(e){this.highlighted=e}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      .box {
        display: flex;
        background-image: url('${o(new URL(new URL("../assets/red-box-e8588c1e.png",import.meta.url).href,import.meta.url))}');
        background-repeat: no-repeat;
        background-position: center center;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .highlightDroppable {
        background-color: transparent;
      }

      .highlightWrong {
        background-color: transparent;
      }

      .boxSmallestTall {
        background-size: 30% auto;
      }

      .boxSmallTall {
        background-size: 50% auto;
      }

      .boxBigTall {
        background-size: 70% auto;
      }

      .boxBiggestTall {
        background-size: 90% auto;
      }

      .boxSmallestWide {
        background-size: auto 30%;
      }

      .boxSmallWide {
        background-size: auto 50%;
      }

      .boxBigWide {
        background-size: auto 70%;
      }

      .boxBiggestWide {
        background-size: auto 90%;
      }
    `}},{kind:"method",key:"updateViewPortDimensions",value:function(){this.clientWidth>this.clientHeight?this.tallWide="Wide":this.tallWide="Tall"}},{kind:"method",key:"firstUpdated",value:async function(){await this.getUpdateComplete(),this.updateViewPortDimensions()}},{kind:"method",key:"render",value:function(){return m`
      <div
        alt="smallest box"
        class="box box${this.size}${this.tallWide} ${"droppable"===this.highlighted?"highlightDroppable":""} ${"wrong"===this.highlighted?"highlightWrong":""}"
      >
        <slot></slot>
      </div>
    `}}]}}),n),e([i("draggable-element")],(function(e,i){return{F:class extends i{constructor(){super(),e(this),window.addEventListener("mousemove",(e=>this.mouseMove(e))),window.addEventListener("touchmove",(e=>this.touchMove(e))),window.addEventListener("mouseup",(()=>this.mouseUp())),window.addEventListener("touchend",(()=>this.touchEnd()))}},d:[{kind:"field",decorators:[t({type:Boolean})],key:"resetDragAfterDrop",value:()=>!1},{kind:"field",decorators:[t({type:Number})],key:"dropAreaPercentage",value:()=>20},{kind:"field",decorators:[l()],key:"cummulativeDeltaX",value:()=>0},{kind:"field",decorators:[l()],key:"cummulativeDeltaY",value:()=>0},{kind:"field",key:"dragActive",value:()=>!1},{kind:"field",key:"touchPreviousScreenX",value:()=>0},{kind:"field",key:"touchPreviousScreenY",value:()=>0},{kind:"field",key:"maxCummulativeDeltaX",value:()=>0},{kind:"field",key:"minCummlativeDeltaX",value:()=>0},{kind:"field",key:"maxCummalativeDeltaY",value:()=>0},{kind:"field",key:"minCummalativeDeltaY",value:()=>0},{kind:"field",key:"dropTargets",value:()=>[]},{kind:"method",key:"resetDrag",value:function(){this.cummulativeDeltaX=0,this.cummulativeDeltaY=0}},{kind:"method",key:"addDropElement",value:function(e){this.dropTargets.push({element:e,dropType:"dropOk",minDeltaX:0,maxDeltaX:0,minDeltaY:0,maxDeltaY:0})}},{kind:"method",key:"markAsWrongDrop",value:function(e){const t=this.dropTargets.find((t=>e===t.element));void 0!==t&&(t.dropType="dropWrong")}},{kind:"method",key:"markAllTargetsAsDropOk",value:function(){for(const e of this.dropTargets)e.dropType="dropOk"}},{kind:"method",key:"mouseDown",value:function(){this.determineDragBoundaries(),this.dragActive=!0}},{kind:"method",key:"touchStart",value:function(e){this.determineDragBoundaries(),this.dragActive=!0,this.touchPreviousScreenX=e.changedTouches[0].screenX,this.touchPreviousScreenY=e.changedTouches[0].screenY}},{kind:"method",key:"mouseMove",value:function(e){this.dragActive&&this.drag(e.movementX,e.movementY)}},{kind:"method",key:"touchMove",value:function(e){if(this.dragActive){const t=e.changedTouches[0].screenX-this.touchPreviousScreenX,i=e.changedTouches[0].screenY-this.touchPreviousScreenY;this.touchPreviousScreenX=e.changedTouches[0].screenX,this.touchPreviousScreenY=e.changedTouches[0].screenY,this.drag(t,i)}}},{kind:"method",key:"mouseUp",value:function(){this.dragActive&&(this.handleEndOfDrag(),this.dragActive=!1)}},{kind:"method",key:"touchEnd",value:function(){this.dragActive&&(this.handleEndOfDrag(),this.dragActive=!1)}},{kind:"method",key:"determineDragBoundaries",value:function(){const e=this.getBoundingClientRect();this.minCummlativeDeltaX=-e.left/c()*100+this.cummulativeDeltaX,this.maxCummulativeDeltaX=(window.innerWidth-e.right)/c()*100+this.cummulativeDeltaX,this.minCummalativeDeltaY=-e.top/g()*100+this.cummulativeDeltaY,this.maxCummalativeDeltaY=(window.innerHeight-e.bottom)/g()*100+this.cummulativeDeltaY;const t={left:0,right:0,top:0,bottom:0};t.left=e.left+(1-this.dropAreaPercentage/100)/2*(e.right-e.left),t.right=e.right-(1-this.dropAreaPercentage/100)/2*(e.right-e.left),t.top=e.top+(1-this.dropAreaPercentage/100)/2*(e.bottom-e.top),t.bottom=e.bottom-(1-this.dropAreaPercentage/100)/2*(e.bottom-e.top);for(const e of this.dropTargets){const i=e.element.getBoundingClientRect();e.maxDeltaX=(i.right-t.left)/c()*100+this.cummulativeDeltaX,e.minDeltaX=(i.left-t.right)/c()*100+this.cummulativeDeltaX,e.maxDeltaY=(i.bottom-t.top)/g()*100+this.cummulativeDeltaY,e.minDeltaY=(i.top-t.bottom)/g()*100+this.cummulativeDeltaY}}},{kind:"method",key:"handleEndOfDrag",value:function(){for(const e of this.dropTargets)if(e.element.highlightForDrop("none"),this.cummulativeDeltaX>e.minDeltaX&&this.cummulativeDeltaX<e.maxDeltaX&&this.cummulativeDeltaY>e.minDeltaY&&this.cummulativeDeltaY<e.maxDeltaY){const t=new CustomEvent("dropped",{detail:{draggableId:this.id,dropTargetId:e.element.id,dropType:e.dropType}});this.dispatchEvent(t)}this.resetDragAfterDrop&&this.resetDrag()}},{kind:"method",key:"drag",value:function(e,t){const i=e/c()*100,a=t/g()*100;this.cummulativeDeltaX+=i,this.cummulativeDeltaY+=a,this.cummulativeDeltaX<this.minCummlativeDeltaX?this.cummulativeDeltaX=this.minCummlativeDeltaX:this.cummulativeDeltaX>this.maxCummulativeDeltaX&&(this.cummulativeDeltaX=this.maxCummulativeDeltaX),this.cummulativeDeltaY<this.minCummalativeDeltaY?this.cummulativeDeltaY=this.minCummalativeDeltaY:this.cummulativeDeltaY>this.maxCummalativeDeltaY&&(this.cummulativeDeltaY=this.maxCummalativeDeltaY);for(const e of this.dropTargets)this.cummulativeDeltaX>e.minDeltaX&&this.cummulativeDeltaX<e.maxDeltaX&&this.cummulativeDeltaY>e.minDeltaY&&this.cummulativeDeltaY<e.maxDeltaY?"dropOk"===e.dropType?e.element.highlightForDrop("droppable"):"dropWrong"===e.dropType&&e.element.highlightForDrop("wrong"):e.element.highlightForDrop("none")}},{kind:"method",key:"firstUpdated",value:async function(){await this.updateComplete,this.determineDragBoundaries(),this.addEventListener("mousedown",(()=>this.mouseDown())),this.addEventListener("touchstart",(e=>this.touchStart(e)))}},{kind:"get",static:!0,key:"styles",value:function(){return s`
      :host {
        display: block-inline;
        );
      }
    `}},{kind:"method",key:"render",value:function(){return m`
      <style>
        :host {
          transform: translate(
            calc(${this.cummulativeDeltaX} * var(--vw, 1vw)),
            calc(${this.cummulativeDeltaY} * var(--vh, 1vh))
          );
        }
      </style>
      <slot> </slot>
    `}}]}}),n),e([i("mompitz-number")],(function(e,i){class a extends i{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[t({type:Number})],key:"number",value:()=>23},{kind:"field",decorators:[t({type:Number})],key:"minimumNumberDigitsForSize",value:()=>1},{kind:"field",static:!0,key:"digitImagesNormal",value:()=>[new URL(new URL("../assets/Mompitz0-e75648eb.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz1-93f45da6.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz2-e58dc924.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz3-70ad6c20.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz4-98a5f9b4.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz5-bc6cacfe.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz6-27290e54.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz7-12f2c5e0.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz8-f444120f.png",import.meta.url).href,import.meta.url),new URL(new URL("../assets/Mompitz9-3f499c6e.png",import.meta.url).href,import.meta.url)]},{kind:"field",static:!0,key:"digit1NarrowImage",value:()=>new URL(new URL("../assets/Mompitz1narrow-1c036f33.png",import.meta.url).href,import.meta.url)},{kind:"get",static:!0,key:"styles",value:function(){return s`
      .digit {
        display: inline;
        max-height: 100%;
      }

      .normal {
        max-width: calc(85% / var(--numberDigits));
      }

      .narrow {
        max-width: calc((85% / var(--numberDigits)) / 2);
      }
      .numberDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    `}},{kind:"method",key:"updated",value:function(){window.navigator.userAgent.toLowerCase().includes("firefox")&&this.renderRoot.querySelectorAll("img[draggable=false]").forEach((e=>{e.addEventListener("mousedown",(e=>e.preventDefault()))}))}},{kind:"method",key:"render",value:function(){const e=[];let t=0,i=this.number;for(0===this.number&&(e[0]={digit:0,narrow:"normal"});0!==i;)e.push({digit:i%10,narrow:"normal"}),i=Math.floor(i/10),t+=1;e.reverse(),t>this.minimumNumberDigitsForSize&&1===e[0].digit&&(e[0].narrow="narrow",t-=.5);const r=Math.max(t,this.minimumNumberDigitsForSize);return m`
      <style>
        :host {
          --numberDigits: ${r};
        }
      </style>

      <div class="numberDiv">
        ${e.map((e=>m`
            <img
              draggable="false"
              alt="${e.digit}"
              class="digit ${e.narrow}"
              src="${"narrow"===e.narrow?a.digit1NarrowImage:a.digitImagesNormal[e.digit]}"
            />
          `))}
      </div>
    `}}]}}),n);let p=e([i("sorting-game-app")],(function(e,t){class i extends t{constructor(){super(),e(this),this.welcomeDialogImageUrl=new URL(new URL("../assets/Mompitz7-12f2c5e0.png",import.meta.url).href,import.meta.url),this.parseUrl()}}return{F:i,d:[{kind:"field",static:!0,key:"boxSizes",value:()=>new Map([[4,["Smallest","Small","Big","Biggest"]],[3,["Small","Big","Biggest"]],[2,["Small","Biggest"]]])},{kind:"field",decorators:[l()],key:"numbers",value:()=>[]},{kind:"field",decorators:[l()],key:"boxes",value:()=>[]},{kind:"field",key:"minimumValue",value:()=>1},{kind:"field",key:"maximumValue",value:()=>10},{kind:"field",decorators:[l()],key:"maxNumberDigits",value:()=>1.5},{kind:"field",key:"gameLogger",value:()=>new h("E","a")},{kind:"field",key:"numberCorrectDrag",value:()=>0},{kind:"method",key:"getNumber",value:function(e){return this.getElement(e)}},{kind:"method",key:"getBox",value:function(e){return this.getElement(e)}},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);let t=4;e.has("numberBoxes")&&(t=parseInt(e.get("numberBoxes")||"",10),(!t||t<2||t>4)&&(t=4));for(let e=0;e<t;e++)this.numbers.push({id:`number${e}`,visible:!1,value:e}),this.boxes.push({id:`box${e}`,numberVisible:!1,intendedValue:e,size:i.boxSizes.get(t)?.[e]??"Smallest"});e.has("minimumValue")&&(this.minimumValue=parseInt(e.get("minimumValue")??"",10),Number.isNaN(this.minimumValue)&&(this.minimumValue=1)),e.has("maximumValue")&&(this.maximumValue=parseInt(e.get("maximumValue")??"",10),Number.isNaN(this.maximumValue)&&(this.maximumValue=10)),this.minimumValue+5>=this.maximumValue&&(this.maximumValue=this.minimumValue+5),this.maximumValue<10?this.maxNumberDigits=1:10===this.maximumValue?this.maxNumberDigits=1.5:this.maximumValue<100?this.maxNumberDigits=2:100===this.maximumValue?this.maxNumberDigits=2.5:this.maximumValue<1e3?this.maxNumberDigits=3:1e3===this.maximumValue&&(this.maxNumberDigits=3.5)}},{kind:"get",static:!0,key:"styles",value:function(){return[...a(r(i),"styles",this),s`
        .hidden {
          visibility: hidden;
        }
        .numbersAndBoxes {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: calc(100 * var(--vh));
          width: calc(100 * var(--vw));
        }

        .numbers,
        .boxes {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
        }

        .number {
          display: inline-block;
          width: calc(80 / var(--numberNumbers) * var(--vw));
          height: calc(30 * var(--vh));
        }

        .box {
          display: inline-block;
          width: calc(80 / var(--numberNumbers) * var(--vw));
          height: calc(60 * var(--vh));
        }
      `]}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await a(r(i.prototype),"getUpdateComplete",this).call(this),t=[];for(const e of this.numbers)t.push(this.getNumber(`#${e.id}`).updateComplete);for(const e of this.boxes)t.push(this.getBox(`#${e.id}`).updateComplete);return await Promise.all(t),e}},{kind:"method",key:"startNewGame",value:function(){a(r(i.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"welcomeMessage",value:function(){return m`<p>
      Verplaats het kleinste getal naar de kleinste doos en het grootste getal
      naar de grootste doos
    </p>`}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Sorteer de getallen"}},{kind:"method",key:"handleCorrectDrag",value:function(){this.numberCorrectDrag+=1,this.numberCorrectDrag===this.numbers.length&&this.handleCorrectAnswer()}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"newRound",value:function(){this.numberCorrectDrag=0;for(const e of this.boxes)e.numberVisible=!1;const e=[];for(;e.length!==this.numbers.length;){const t=d(this.minimumValue,this.maximumValue);void 0===e.find((e=>e===t))&&e.push(t)}this.numbers.forEach(((t,i)=>{t.value=e[i],this.getNumber(`#${t.id}`).resetDrag(),this.getNumber(`#${t.id}`).markAllTargetsAsDropOk(),t.visible=!0})),e.sort(((e,t)=>e-t)),this.boxes.forEach(((t,i)=>{t.intendedValue=e[i],t.numberVisible=!1})),this.requestUpdate()}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameLogger.logGameOver()}},{kind:"method",key:"firstUpdated",value:async function(){return await this.getUpdateComplete(),this.renderRoot.querySelectorAll(".draggableNumber").forEach((e=>{this.renderRoot.querySelectorAll("drop-target-box").forEach((t=>{e.addDropElement(t)})),e.addEventListener("dropped",(e=>this.handleDropped(e)))})),window.navigator.userAgent.toLowerCase().includes("firefox")&&this.renderRoot.querySelectorAll("img[draggable=false]").forEach((e=>{e.addEventListener("mousedown",(e=>e.preventDefault()))})),a(r(i.prototype),"firstUpdated",this).call(this)}},{kind:"method",key:"handleDropped",value:function(e){const t=this.numbers.find((t=>t.id===e.detail.draggableId));if(void 0!==t){const i=this.boxes.find((t=>t.id===e.detail.dropTargetId));if(void 0!==i)if(t.value===i.intendedValue){t.visible=!1,i.numberVisible=!0;for(const t of this.numbers)this.getNumber(`#${t.id}`).markAsWrongDrop(this.getBox(`#${e.detail.dropTargetId}`));this.handleCorrectDrag(),this.requestUpdate()}else"dropOk"===e.detail.dropType?(this.handleWrongAnswer(),this.getNumber(`#${t.id}`).resetDrag(),this.getNumber(`#${t.id}`).markAsWrongDrop(this.getBox(`#${e.detail.dropTargetId}`))):this.getNumber(`#${t.id}`).resetDrag()}}},{kind:"method",key:"renderGameContent",value:function(){return m`
      <style>
        :host {
          --numberNumbers: ${this.numbers.length};
        }
      </style>

      <div class="numbersAndBoxes">
        <div class="numbers" id="numbersContainer">
          ${this.numbers.map((e=>m` <draggable-element
                class="draggableNumber ${!1===e.visible?"hidden":""}"
                id="${e.id}"
              >
                <mompitz-number
                  number="${e.value}"
                  minimumNumberDigitsForSize="${this.maxNumberDigits}"
                  class="number"
                ></mompitz-number>
              </draggable-element>`))}
        </div>

        <div class="boxes">
          ${this.boxes.map((e=>m`<drop-target-box
              class="box"
              id="${e.id}"
              size="${e.size}"
            >
              <mompitz-number
                number="${e.intendedValue}"
                class="number ${!1===e.numberVisible?"hidden":""}"
                minimumNumberDigitsForSize="${this.maxNumberDigits}"
              ></mompitz-number>
            </drop-target-box>`))}
        </div>
      </div>
    `}}]}}),u);export{p as SortingGameApp};
