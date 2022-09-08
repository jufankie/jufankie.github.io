import{_ as e,a as t,b as i,n as a}from"./property-8b64881f.js";import{s as n,r as o,p as r}from"./lit-element-9a022b11.js";import{t as s}from"./state-47f777cb.js";import{N as m}from"./NumberLine-505affe2.js";import"./ProgressBar-3d7ba932.js";import{r as h}from"./Randomizer-a9177b86.js";import"./ScoreBox-75691a05.js";import"./MessageDialog-be053afa.js";import{C as l}from"./ChildNotFoundError-35e8e684.js";import{P as d}from"./GametimeParameters-56ecf730.js";customElements.define("numberline-platform",class extends n{constructor(...e){super(...e),this.dragDisabled=!1,this.cummulativeDeltaX=0,this.mouseDrag=!1,this.touchDrag=!1,this.touchPreviousScreenX=0,this.maxDeltaX=0}static get styles(){return o`
      :host {
        transform: translate(var(--cummulativeDeltaX, 0), 0);
      }
    `}static get properties(){return{location:{type:Number},maxDeltaX:{type:Number},cummulativeDeltaX:{type:Number},dragDisabled:{type:Boolean}}}get width(){return this.getBoundingClientRect().width/window.innerWidth*100}get height(){return this.getBoundingClientRect().height/window.innerHeight*100}mouseDown(){this.dragDisabled||(this.mouseDrag=!0)}touchStart(e){this.dragDisabled||(this.touchDrag=!0),this.touchPreviousScreenX=e.changedTouches[0].screenX}mouseMove(e){this.mouseDrag&&(this.cummulativeDeltaX+=e.movementX/window.innerWidth*100,this.cummulativeDeltaX>this.maxDeltaX?this.cummulativeDeltaX=this.maxDeltaX:this.cummulativeDeltaX<0&&(this.cummulativeDeltaX=0),this.style.setProperty("--cummulativeDeltaX",`${this.cummulativeDeltaX}vw`))}touchMove(e){this.touchDrag&&(this.cummulativeDeltaX+=(e.changedTouches[0].screenX-this.touchPreviousScreenX)/window.innerWidth*100,this.touchPreviousScreenX=e.changedTouches[0].screenX,this.cummulativeDeltaX>this.maxDeltaX?this.cummulativeDeltaX=this.maxDeltaX:this.cummulativeDeltaX<0&&(this.cummulativeDeltaX=0),this.style.setProperty("--cummulativeDeltaX",`${this.cummulativeDeltaX}vw`))}mouseUp(){this.mouseDrag=!1}touchEnd(){this.touchDrag=!1}async firstUpdated(){await this.updateComplete,this.addEventListener("mousedown",(()=>this.mouseDown())),this.addEventListener("touchstart",(e=>this.touchStart(e))),window.addEventListener("mousemove",(e=>this.mouseMove(e))),window.addEventListener("touchmove",(e=>this.touchMove(e))),window.addEventListener("mouseup",(()=>this.mouseUp())),window.addEventListener("touchend",(()=>this.touchEnd()))}render(){return r`
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style="width: 100%; height: 100%; display: block;"
      >
        <!--  -->
        <g>
          <!--
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="grey"
            fill-opacity="25%"
          ></rect>
  -->
          <line x1="0" y1="0" x2="100" y2="0" stroke="red" stroke-width="5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="red" stroke-width="5" />
        </g>
      </svg>
    `}});let u=e([a("jump-on-numberline-app")],(function(e,a){class n extends a{constructor(){super(),e(this),this.numberLineProperties=function(){const e=new URLSearchParams(window.location.search);let t=0,i=100,a=!0,n=!1,o=!1,r=!1;if(e.has("minimum")){const i=parseInt(e.get("minimum")||"",10);i%10==0&&(t=i)}if(e.has("maximum")){const t=parseInt(e.get("maximum")||"",10);t%10==0&&(i=t)}return e.has("show10TickMarks")?a=!0:e.has("hide10TickMarks")&&(a=!1),e.has("show5TickMarks")?n=!0:e.has("hide5TickMarks")&&(n=!1),e.has("show1TickMarks")?o=!0:e.has("hide1TickMarks")&&(o=!1),e.has("showAll10Numbers")?r=!0:e.has("hideAll10Numbers")&&(r=!1),{minimum:t,maximum:i,show10TickMarks:a,show5TickMarks:n,show1TickMarks:o,showAll10Numbers:r}}(),this.gameTime=d(60)}}return{F:n,d:[{kind:"field",static:!0,key:"janImage",value:()=>new URL(new URL("../assets/Mompitz Jan_Ballon-84b8de10.png",import.meta.url).href,import.meta.url)},{kind:"field",decorators:[s()],key:"numberOk",value:()=>0},{kind:"field",decorators:[s()],key:"numberNok",value:()=>0},{kind:"field",decorators:[s()],key:"numberToSet",value:()=>0},{kind:"field",decorators:[s()],key:"showNumber",value:()=>!1},{kind:"field",decorators:[s()],key:"desiredPosition",value:()=>0},{kind:"field",decorators:[s()],key:"numberLineProperties",value:void 0},{kind:"field",decorators:[s()],key:"hideJan",value:()=>!0},{kind:"field",decorators:[s()],key:"janAnimation",value:()=>"none"},{kind:"field",decorators:[s()],key:"dragDisabled",value:()=>!1},{kind:"field",decorators:[s()],key:"gameTime",value:void 0},{kind:"field",static:!0,key:"numberLineWidth",value:()=>94},{kind:"field",static:!0,key:"numberLineTop",value:()=>60},{kind:"field",static:!0,key:"numberLineLeft",value:()=>3},{kind:"field",static:!0,key:"checkButtonTop",value:()=>70},{kind:"field",static:!0,key:"checkButtonLeft",value:()=>70},{kind:"field",static:!0,key:"checkButtonWidth",value:()=>10},{kind:"field",static:!0,key:"checkButtonHeight",value:()=>5},{kind:"field",static:!0,key:"platformWidthFraction",value:()=>.035},{kind:"field",static:!0,key:"janWidthFraction",value:()=>.04},{kind:"field",static:!0,key:"janAspectRatio",value:()=>591/214},{kind:"field",static:!0,key:"janLeftOfFootFraction",value:()=>80/214},{kind:"field",static:!0,key:"janFootFraction",value:()=>9/214},{kind:"field",static:!0,key:"janMiddleOfFootFraction",value:()=>102/214},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        --numberLineWidth: ${n.numberLineWidth}vw;
        --numberLineTop: ${n.numberLineTop}vh;
        --numberLineLeft: ${n.numberLineLeft}vw;

        --checkButtonTop: ${n.checkButtonTop}vh;
        --checkButtonLeft: ${n.checkButtonLeft}vw;
        --checkButtonWidth: ${n.checkButtonWidth}vw;
        --checkButtonHeight: ${n.checkButtonHeight}vw;

        --platformWidthFraction: ${n.platformWidthFraction};

        --janWidthFraction: ${n.janWidthFraction};
        --janLeftOfFootFraction: ${n.janLeftOfFootFraction};
        --janMiddleOfFootFraction: ${n.janMiddleOfFootFraction};
        --janFootFraction: ${n.janFootFraction};

        --janAspectRatio: ${n.janAspectRatio};

        --janWidth: calc(var(--janWidthFraction) * var(--numberLineWidth));
        --janMiddleOfFootWidth: calc(
          var(--janMiddleOfFootFraction) * var(--janWidth)
        );
        --janHeight: calc(var(--janWidth) * var(--janAspectRatio));

        /* desiredPosition is set in javaScript based on where number to set */
        --janLeft: calc(var(--desiredPosition) - var(--janMiddleOfFootWidth));

        --platformTop: calc(
          var(--numberLineTop) - 0.5 * ${m.heightWidthAspectRatio} *
            var(--numberLineWidth)
        );
        --platformWidth: calc(
          var(--platformWidthFraction) * var(--numberLineWidth)
        );
        --platformLeft: calc(
          var(--numberLineLeft) + ${m.widthFractionMinimum} *
            var(--numberLineWidth) - 0.5 * var(--platformWidth)
        );
        --platformHeight: calc(
          ${m.heightWidthAspectRatio} * var(--numberLineWidth)
        );
      }

      #numberLine {
        position: absolute;
        left: var(--numberLineLeft);
        top: var(--numberLineTop);
        width: var(--numberLineWidth);
      }

      #numberLinePlatform {
        position: absolute;
        top: var(--platformTop);
        left: var(--platformLeft);
        width: var(--platformWidth);
        height: var(--platformHeight);
        display: block;
        border: none;
        padding: 0;
      }

      #jan {
        position: absolute;
        width: var(--janWidth);
        top: 0;
        left: var(--janLeft);
      }

      #spring {
        position: absolute;
        top: var(--checkButtonTop);
        left: var(--checkButtonLeft);
        width: var(--checkButtonWidth);
        height: var(--checkButtonHeight);
        font-size: 2vw;
        background-color: #0f0;
      }

      .moveDownAlmostCorrectRightSide {
        animation: MoveDownAlmostCorrectRightSide linear 3s forwards;
      }

      @keyframes MoveDownAlmostCorrectRightSide {
        0% {
          transform: translate(0px, 0px);
        }
        55% {
          transform: translate(
            0px,
            calc(var(--platformTop) - 0.7 * var(--janHeight))
          );
        }
        65% {
          transform: translate(calc(0.7 * var(--janWidth)), var(--platformTop));
        }
        100% {
          transform: translate(calc(0.5 * var(--janWidth)), 99vh);
        }
      }

      .moveDownAlmostCorrectLeftSide {
        animation: MoveDownAlmostCorrectLeftSide linear 3s forwards;
      }

      @keyframes MoveDownAlmostCorrectLeftSide {
        0% {
          transform: translate(0px, 0px);
        }
        55% {
          transform: translate(
            0px,
            calc(var(--platformTop) - 0.75 * var(--janHeight))
          );
        }
        65% {
          transform: translate(
            calc(-0.6 * var(--janWidth)),
            var(--platformTop)
          );
        }
        100% {
          transform: translate(calc(0.5 * var(--janWidth)), 99vh);
        }
      }

      .moveDownCorrect {
        animation: MoveDownCorrect linear 1.4s forwards;
      }

      @keyframes MoveDownCorrect {
        from {
          transform: translate(0, 0);
        }
        to {
          transform: translate(0, calc(var(--platformTop) - var(--janHeight)));
        }
      }

      .moveDownInCorrect {
        animation: MoveDownInCorrect linear 3s forwards;
      }

      @keyframes MoveDownInCorrect {
        from {
          transform: translate(0px, 0px);
        }
        to {
          transform: translate(0px, 99vh);
        }
      }
    `}},{kind:"method",key:"getElement",value:function(e){const t=this.renderRoot.querySelector(e);if(null===t)throw new l(e,"FindOnNumberApp");return t}},{kind:"get",key:"jan",value:function(){return this.getElement("#jan")}},{kind:"get",key:"gameOverDialog",value:function(){return this.getElement("#gameOverDialog")}},{kind:"get",key:"messageDialog",value:function(){return this.getElement("#messageDialog")}},{kind:"get",key:"progressBar",value:function(){return this.getElement("#progressBar")}},{kind:"get",key:"scoreBox",value:function(){return this.getElement("#scoreBox")}},{kind:"get",key:"numberLine",value:function(){return this.getElement("#numberLine")}},{kind:"get",key:"numberLinePlatform",value:function(){return this.getElement("#numberLinePlatform")}},{kind:"method",key:"handleTimeUp",value:function(){this.showNumber=!1,this.gameOverDialog.show(r` <p>
            Jan is ${0===this.numberOk?"nooit":`${this.numberOk} keer`} op
            het platform geland.
          </p>
          <p>
            Je hebt ${0===this.numberNok?"geen":this.numberNok}
            ${1===this.numberNok?"fout":"fouten"} gemaakt.
          </p>`).then((e=>{"again"===e?this.startNewGame():window.location.href="index.html"}))}},{kind:"method",key:"startNewGame",value:function(){this.progressBar.restart(),this.showNumber=!0,this.hideJan=!0,this.janAnimation="none",this.numberNok=0,this.numberOk=0,this.newRound()}},{kind:"method",key:"newRound",value:function(){this.numberToSet=h(this.numberLineProperties.minimum,this.numberLineProperties.maximum)}},{kind:"method",key:"checkAnswer",value:async function(){if(!1===this.hideJan)return;this.dragDisabled=!0,this.desiredPosition=n.numberLineLeft+this.numberLine.translatePostionToWidthFraction(this.numberToSet)*n.numberLineWidth,this.hideJan=!1,await this.performUpdate();const e=this.numberLinePlatform.getBoundingClientRect(),t=this.jan.getBoundingClientRect(),i=t.x,a=t.x+t.width,o=t.x+t.width*n.janLeftOfFootFraction,r=o+t.width*n.janFootFraction,s=e.x,m=e.x+e.width;let h=0;this.jan.addEventListener("animationend",(()=>{"moveDownCorrect"===this.janAnimation?this.numberOk+=1:this.numberNok+=1,setTimeout((()=>{this.hideJan=!0,this.dragDisabled=!1,this.janAnimation="none",this.newRound()}),h)}),{once:!0}),r>s&&o<m?(this.janAnimation="moveDownCorrect",h=500):this.janAnimation=r<s&&a>s?"moveDownAlmostCorrectLeftSide":o>m&&i<m?"moveDownAlmostCorrectRightSide":"moveDownInCorrect"}},{kind:"method",key:"firstUpdated",value:async function(){await this.updateComplete,await this.showWelcomeMessage(),this.startNewGame()}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await t(i(n.prototype),"getUpdateComplete",this).call(this);return await this.progressBar.updateComplete,await this.numberLine.updateComplete,await this.numberLinePlatform.updateComplete,await this.scoreBox.updateComplete,await this.gameOverDialog.updateComplete,await this.messageDialog.updateComplete,e}},{kind:"method",key:"showWelcomeMessage",value:async function(){return this.messageDialog.show("Spring op de getallenlijn",r`<p>
          Zet het platform op de juiste plek op de getallenlijn, zodat Jan erop
          kan springen.
        </p>
        <p>Dit spel kun je op de telefoon het beste horizontaal spelen.</p>`)}},{kind:"method",key:"renderJanClass",value:function(){let e;return e="none"===this.janAnimation?"":this.janAnimation,e}},{kind:"method",key:"render",value:function(){return r`
      <style>
        :host {
          --desiredPosition: ${this.desiredPosition}vw;
        }
      </style>

      <progress-bar
        style="--progress-bar-gametime: ${this.gameTime}s;"
        id="progressBar"
        @timeUp="${()=>this.handleTimeUp()}"
      ></progress-bar>
      <score-box
        id="scoreBox"
        numberOk="${this.numberOk}"
        numberNok="${this.numberNok}"
        style="width: 12vmin;--scoreBoxWidth: 12vmin; position: absolute; top: calc(1em + 22px); right: 1em;"
      >
      </score-box>

      <number-line
        id="numberLine"
        ?show10TickMarks=${this.numberLineProperties.show10TickMarks}
        ?show5TickMarks=${this.numberLineProperties.show5TickMarks}
        ?show1TickMarks=${this.numberLineProperties.show1TickMarks}
        ?showAll10Numbers=${this.numberLineProperties.showAll10Numbers}
        minimum=${this.numberLineProperties.minimum}
        maximum=${this.numberLineProperties.maximum}
      >
      </number-line>
      <numberline-platform
        id="numberLinePlatform"
        ?dragDisabled=${this.dragDisabled}
        maxDeltaX=${m.lineLength/m.viewBoxWidth*100}
      ></numberline-platform>

      <div style="text-align: center; font-size: 8vw;">
        ${this.showNumber?this.numberToSet:""}
      </div>

      <img
        id="jan"
        alt="Mompitz"
        src="${n.janImage}"
        style="display: ${this.hideJan?"none":"block"};"
        class="${this.renderJanClass()}"
      />
      <button id="spring" @click="${()=>this.checkAnswer()}">Spring</button>
      <message-dialog id="messageDialog"></message-dialog>
      <gameover-dialog id="gameOverDialog"></gameover-dialog>
    `}}]}}),n);export{u as JumpOnNumberLineApp};
