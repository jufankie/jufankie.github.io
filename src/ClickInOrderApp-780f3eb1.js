import{_ as e,e as l,a as t,b as i,n as s}from"./property-8b64881f.js";import{p as a,s as n,r}from"./lit-element-9a022b11.js";import{t as o}from"./state-47f777cb.js";import{TimeCountingGame as d}from"./TimeCountingGame-b2b06aa5.js";import{a as h,r as c}from"./ResizeObserver-8ea02421.js";import{a as b,r as u}from"./Randomizer-a9177b86.js";import{G as m}from"./GameLogger-2c24be00.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";import"./ChildNotFoundError-35e8e684.js";function k(e,l=1,t=50){return a`
    <svg
      viewBox="0 0 ${100*l} 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        style="font-size: ${t}px"
        x="50%"
        y="50%"
        dominant-baseline="central"
        text-anchor="middle"
      >
        ${e}
      </text>
    </svg>
  `}const g=["ballBlue","ballRed","ballYellow","ballGreen"];e([s("ball-field-entry")],(function(e,s){class n extends s{constructor(...l){super(...l),e(this)}}return{F:n,d:[{kind:"field",decorators:[l({attribute:!1})],key:"ballLabels",value:()=>[]},{kind:"field",decorators:[l({attribute:!1})],key:"disabledBallLabels",value:()=>[]},{kind:"field",decorators:[l({attribute:!1})],key:"invisibleBallLabels",value:()=>[]},{kind:"field",decorators:[l({type:String})],key:"exercise",value:()=>""},{kind:"field",decorators:[l({type:Number})],key:"minimumExerciseAspectRatio",value:()=>2},{kind:"field",decorators:[l({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[o()],key:"selectedExerciseAspectRatio",value:()=>0},{kind:"field",decorators:[o()],key:"randomizedBallInfoList",value:()=>[]},{kind:"field",decorators:[o()],key:"ballHeightWidth",value:()=>0},{kind:"field",decorators:[o()],key:"perRow",value:()=>0},{kind:"field",decorators:[o()],key:"perColumn",value:()=>0},{kind:"field",decorators:[o()],key:"exerciseIndex",value:()=>0},{kind:"field",decorators:[o()],key:"numberExerciseCells",value:()=>0},{kind:"get",static:!0,key:"styles",value:function(){return r`
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        background-color: #cd86e3;
      }

      .fadeOut {
        animation: FadeOut 0.75s;
        animation-fill-mode: forwards;
      }

      @keyframes FadeOut {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.3);
          opacity: 0;
          visibility: hidden;
        }
      }

      .flexItem {
        display: flex;
        display: flex;
        flex-wrap: wrap;
        width: calc(100% / var(--perRow));
        height: calc(100% / var(--perColumn));
        box-sizing: border-box;
        border: none;
      }

      .exerciseFlexItem {
        display: flex;
        display: flex;
        flex-wrap: wrap;
        width: calc((100% / var(--perRow)) * var(--exerciseCellWidth));
        height: calc(100% / var(--perColumn));
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        border: none;
      }

      .ball {
        background-color: transparent;
        outline: none;
        padding: 0;
        position: relative;
        width: var(--ballHeightWidth);
        height: var(--ballHeightWidth);
        border: none;
      }

      .ballBlue {
        background-image: url('images/ball-blue.svg');
      }

      .ballRed {
        background-image: url('images/ball-red.svg');
      }

      .ballGreen {
        background-image: url('images/ball-green.svg');
      }

      .ballYellow {
        background-image: url('images/ball-yellow.svg');
      }
    `}},{kind:"method",key:"connectedCallback",value:function(){t(i(n.prototype),"connectedCallback",this).call(this),h(this)}},{kind:"method",key:"disconnectedCallback",value:function(){t(i(n.prototype),"disconnectedCallback",this).call(this),c(this)}},{kind:"method",key:"handleBallClick",value:function(e){if(this.invisibleBallLabels.includes(e)||this.disabledBallLabels.includes(e))throw Error("A invisible or disabled ball was clicked, this should not happen");{const l=new CustomEvent("ball-clicked",{detail:{label:e}});this.dispatchEvent(l)}}},{kind:"method",key:"willUpdate",value:function(e){e.has("ballLabels")&&(this.determineNumberRowsAndColumns(),this.shuffleBalls())}},{kind:"method",key:"handleResize",value:function(){this.determineNumberRowsAndColumns()}},{kind:"method",key:"shuffleBalls",value:function(){const e=[...this.ballLabels];for(this.randomizedBallInfoList=[];e.length>0;){const l=u(0,e.length-1);this.randomizedBallInfoList.push({label:e[l],imageClass:b(g),deltaXFactor:Math.random(),deltaYFactor:Math.random()}),e.splice(l,1)}}},{kind:"method",key:"ballDisabled",value:function(e){return this.disabledBallLabels.includes(e)}},{kind:"method",key:"ballVisible",value:function(e){return!this.invisibleBallLabels.includes(e)}},{kind:"method",key:"determineNumberRowsAndColumns",value:function(){const e=this.clientWidth/this.clientHeight,l=""===this.exercise?0:1,t=l+this.ballLabels.length,i=Math.ceil(Math.sqrt(t/e)),s=Math.floor(Math.sqrt(t/e)),a=Math.ceil(t/i)/i,n=Math.ceil(t/s)/s;Math.abs(a-e)>Math.abs(n-e)?this.perColumn=s:this.perColumn=i,this.perRow=Math.ceil(t/this.perColumn),this.perColumn=Math.ceil(t/this.perRow);const r=this.perColumn*this.perRow-this.ballLabels.length;if(l>0){this.perRow%2==0&&r>1?this.numberExerciseCells=2:this.numberExerciseCells=1;const e=Math.ceil(this.perColumn/2)-1,l=Math.ceil(this.perRow/2)-1;this.exerciseIndex=this.perRow*e+l}else this.exerciseIndex=0,this.numberExerciseCells=0;const o=this.clientWidth/this.perRow,d=this.clientHeight/this.perColumn,h=o*this.numberExerciseCells;this.selectedExerciseAspectRatio=Math.max(this.minimumExerciseAspectRatio,h/d),this.ballHeightWidth=o>d?.4*d:.4*o}},{kind:"method",key:"render",value:function(){const e=[];for(let l=0;l<this.randomizedBallInfoList.length;l++){const t=this.randomizedBallInfoList[l];let i=a``;const s=this.ballVisible(t.label)?"":"fadeOut";i=this.disabled?a``:a`
            <button
              ?disabled=${this.ballDisabled(t.label)}
              class="${s} ball  ${t.imageClass}"
              @click=${()=>this.handleBallClick(t.label)}
              style="top: calc(${t.deltaYFactor} * (100% - var(--ballHeightWidth)));; left: calc(${t.deltaXFactor} * (100% - var(--ballHeightWidth)));"
            >
              ${k(this.ballDisabled(t.label)?"✗":t.label)}
            </button>
          `,l===this.exerciseIndex&&this.numberExerciseCells>0&&e.push(a`<div class="exerciseFlexItem">
            ${this.disabled?"":k(this.exercise,this.selectedExerciseAspectRatio,70)}
          </div>`),e.push(a`<div class="flexItem">${i}</div>`)}return a`
      <style>
        :host {
          --ballHeightWidth: ${this.ballHeightWidth}px;
          --exerciseCellWidth: ${this.numberExerciseCells};
          --perColumn: ${this.perColumn};
          --perRow: ${this.perRow};
        }
      </style>
      ${e}
    `}}]}}),n);let f=e([s("click-in-order-app")],(function(e,l){class s extends l{constructor(){super(),e(this),this.parseUrl()}}return{F:s,d:[{kind:"field",decorators:[o()],key:"labelsInOrder",value:()=>[]},{kind:"field",decorators:[o()],key:"disabledBallLabels",value:()=>[]},{kind:"field",decorators:[o()],key:"invisibleBallLabels",value:()=>[]},{kind:"field",decorators:[o()],key:"showSum",value:()=>!1},{kind:"field",decorators:[o()],key:"tables",value:()=>[1]},{kind:"field",decorators:[o()],key:"multipliersInOrder",value:()=>[]},{kind:"field",decorators:[o()],key:"tablesInOrder",value:()=>[]},{kind:"field",key:"nmbrBalls",value:()=>10},{kind:"field",key:"welcomeMessageString",value:()=>""},{kind:"field",decorators:[o()],key:"gameElementsDisabled",value:()=>!0},{kind:"field",key:"nextBallToClick",value:()=>0},{kind:"field",key:"gameLogger",value:()=>new m("H","")},{kind:"get",key:"welcomeMessage",value:function(){return a`<p>${this.welcomeMessageString}</p>`}},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);if(this.labelsInOrder=[],this.nmbrBalls=parseInt(e.get("nmbrBalls")||"",10),Number.isNaN(this.nmbrBalls)&&(this.nmbrBalls=10),e.has("start")){let l=parseInt(e.get("start")||"",10);if(Number.isNaN(l)&&(l=1),e.has("descending")){for(let e=l;e>l-this.nmbrBalls;e--)this.labelsInOrder.push(`${e}`),this.welcomeMessageString=`Klik de getallen aan, van groot naar klein, begin bij ${l}.`;this.gameLogger.setSubCode("b")}else{for(let e=l;e<l+this.nmbrBalls;e++)this.labelsInOrder.push(`${e}`),this.welcomeMessageString=`Klik de getallen aan, van klein naar groot, begin bij ${l}.`;this.gameLogger.setSubCode("b")}}else if(e.has("tableOfMultiplication")){this.tables=[];const l=e.getAll("tableOfMultiplication");for(const e of l){const l=parseInt(e,10);Number.isNaN(l)||this.tables.push(l)}if(0===this.tables.length&&this.tables.push(10),e.has("showSum"))this.showSum=!0,this.welcomeMessageString="Kies het juiste getal bij de keersommen.",this.gameLogger.setSubCode("e");else{for(let e=1;e<=this.nmbrBalls;e++)this.labelsInOrder.push(""+e*this.tables[0]);this.welcomeMessageString=`Klik de getallen aan, van klein naar groot,\n          met sprongen van ${this.tables[0]}.`,this.gameLogger.setSubCode("d")}}else if(e.has("random")){const e=u(20,80);for(let l=e;l<e+this.nmbrBalls;l++)this.labelsInOrder.push(`${l}`);this.welcomeMessageString=`Klik de getallen aan, van klein naar groot,\n      begin bij ${e}.`,this.gameLogger.setSubCode("c")}}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(i(s),"styles",this),r`
        #ballFieldEntry {
          height: 100%;
          width: 100%;
        }
      `]}},{kind:"method",key:"getUpdateComplete",value:async function(){return await t(i(s.prototype),"getUpdateComplete",this).call(this)}},{kind:"method",key:"startNewGame",value:function(){if(t(i(s.prototype),"startNewGame",this).call(this),this.showSum){let e=[];for(let l=1;l<10||e.length<this.nmbrBalls;l++)for(const t of this.tables){const i=t*l,s=e.find((e=>e.answer===i));void 0===s?e.push({answer:i,sums:[{table:t,multiplier:l}]}):s.sums.push({table:t,multiplier:l})}this.multipliersInOrder=[],this.tablesInOrder=[],this.labelsInOrder=[];for(let l=0;l<this.nmbrBalls;l++){const l=b(e),t=b(l.sums);this.multipliersInOrder.push(t.multiplier),this.tablesInOrder.push(t.table),this.labelsInOrder.push(`${l.answer}`),e=e.filter((e=>e.answer!==l.answer))}}else this.labelsInOrder=[...this.labelsInOrder];this.disabledBallLabels=[],this.invisibleBallLabels=[],this.nextBallToClick=0,this.gameElementsDisabled=!1}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Klik aan in de juiste volgorde"}},{kind:"method",key:"handleBallClick",value:function(e){e===this.labelsInOrder[this.nextBallToClick]?this.handleCorrectAnswer(e):this.handleWrongAnswer(e)}},{kind:"get",key:"ballFieldEntry",value:function(){return this.getElement("ball-field-entry")}},{kind:"method",key:"handleCorrectAnswer",value:function(e){this.numberOk+=1,this.invisibleBallLabels=this.invisibleBallLabels.concat(e),this.disabledBallLabels=[],this.nextBallToClick+=1,this.nextBallToClick===this.labelsInOrder.length&&this.handleGameOver()}},{kind:"method",key:"handleWrongAnswer",value:function(e){this.numberNok+=1,this.disabledBallLabels=this.disabledBallLabels.concat(e)}},{kind:"method",key:"executeGameOverActions",value:function(){t(i(s.prototype),"executeGameOverActions",this).call(this),this.gameElementsDisabled=!0,this.gameLogger.logGameOver()}},{kind:"method",key:"renderGameContent",value:function(){let e="";return this.showSum&&(e=`${this.multipliersInOrder[this.nextBallToClick]}×${this.tablesInOrder[this.nextBallToClick]}`),a`
      <ball-field-entry
          id="ballFieldEntry"
          ?disabled=${this.gameElementsDisabled}
          .ballLabels=${this.labelsInOrder}
          .disabledBallLabels=${this.disabledBallLabels}
          .invisibleBallLabels=${this.invisibleBallLabels}
          exercise="${e}"
          @ball-clicked=${e=>this.handleBallClick(e.detail.label)}
        ></ball-field-entry>
      </button>
    `}}]}}),d);export{f as ClickInOrderApp};
