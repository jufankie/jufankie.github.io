import{s as e,r as t,p as i}from"./lit-element-9a022b11.js";import{_ as r,e as s,n}from"./property-8b64881f.js";import{t as a}from"./state-47f777cb.js";import{G as o}from"./GameSkeleton-b0b13d41.js";import"./MessageDialog-17909aa3.js";import"./ChildNotFoundError-35e8e684.js";let d=r([n("timer-bar")],(function(e,r){class n extends r{constructor(){super(),e(this),setInterval((()=>this.increaseTime()),1e3)}}return{F:n,d:[{kind:"field",static:!0,key:"height",value:()=>20},{kind:"field",decorators:[s({type:Number})],key:"numberOk",value:()=>0},{kind:"field",decorators:[s({type:Number})],key:"numberNok",value:()=>0},{kind:"field",decorators:[s({type:Boolean})],key:"paused",value:()=>!1},{kind:"field",decorators:[a()],key:"minutes",value:()=>0},{kind:"field",decorators:[a()],key:"seconds",value:()=>0},{kind:"method",key:"increaseTime",value:function(){this.paused||(this.seconds+=1,60===this.seconds&&(this.seconds=0,this.minutes+=1))}},{kind:"method",key:"getTimeAsString",value:function(){return`${this.minutes}:${this.seconds.toString().padStart(2,"0")}`}},{kind:"method",key:"resetTime",value:function(){this.minutes=0,this.seconds=0,this.paused=!1}},{kind:"get",static:!0,key:"styles",value:function(){return t`
      .RedText {
        color: red;
      }

      .GreenText {
        color: green;
      }

      #ProgressBarOutline {
        margin: 0;
        padding: 0;
        width: 100%;
        height: ${n.height}px;
        border-style: none;
        background-color: lightgrey;
        text-align: right;
      }

      #ScoreBox {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 1em;
        margin-top: auto;
        margin-bottom: auto;
      }
    `}},{kind:"method",key:"render",value:function(){return i` <div id="ProgressBarOutline">
      <div id="ScoreBox">
        Speeltijd ${this.getTimeAsString()}
        <span class="GreenText">✓</span> : ${this.numberOk}
        <span class="RedText">✗</span> : ${this.numberNok}
      </div>
    </div>`}}]}}),e);class m extends o{constructor(...e){super(...e),this.timerPaused=!0}get timerBar(){return this.getElement("#timerBar")}additionalFirstUpdatedActions(){super.additionalFirstUpdatedActions()}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.timerBar.updateComplete,e}static get styles(){return[...super.styles,t`
        .fullGame {
          display: grid;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          grid-template-rows: ${d.height}px 1fr;
        }
        div {
        }
      `]}getGameTimeString(){return`${this.timerBar.getTimeAsString()} minuut`}renderGameContent(){return i``}renderGame(){return i`
      <div class="fullGame">
        <timer-bar
          width:100%
          id="timerBar"
          numberOk="${this.numberOk}"
          numberNok="${this.numberNok}"
          ?paused="${this.timerPaused}"
        ></timer-bar>
        <div>${this.renderGameContent()}</div>
      </div>
    `}executeGameOverActions(){super.executeGameOverActions(),this.timerPaused=!0}startNewGame(){this.timerBar.resetTime(),this.timerPaused=!1,super.startNewGame()}}export{m as TimeCountingGame};
