import{_ as e,e as r,n as t}from"./property-8b64881f.js";import{s as o,r as i,p as s}from"./lit-element-9a022b11.js";import{C as a}from"./ChildNotFoundError-35e8e684.js";let n=e([t("progress-bar")],(function(e,t){class o extends t{constructor(...r){super(...r),e(this)}}return{F:o,d:[{kind:"field",decorators:[r({type:Number})],key:"numberOk",value:()=>0},{kind:"field",decorators:[r({type:Number})],key:"numberNok",value:()=>0},{kind:"field",decorators:[r({type:Boolean})],key:"integrateScoreBox",value:()=>!1},{kind:"field",static:!0,key:"height",value:()=>20},{kind:"get",static:!0,key:"styles",value:function(){return i`
      .GreenText {
        color: green;
      }

      .RedText {
        color: red;
      }

      #ProgressBarOutline {
        margin: 0;
        padding: 0;
        width: 100%;
        height: ${o.height}px;
        border-style: none;
        background-color: lightgrey;
        text-align: right;
      }

      #ProgressBar {
        background-color: aquamarine;
        transform-origin: left;
        height: 100%;
        border-style: none;
      }

      #ScoreBox {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 1em;
        margin-top: auto;
        margin-bottom: auto;
      }

      .TransitionToZeroWidth {
        animation: MakeZeroWidth linear var(--progress-bar-gametime, 60s);
        animation-fill-mode: forwards;
      }

      @keyframes MakeZeroWidth {
        from {
          transform: scaleX(1);
        }
        to {
          transform: scaleX(0);
        }
      }

      @keyframes MakeFullWidth {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    `}},{kind:"method",key:"firstUpdated",value:function(){this._progressBar.addEventListener("animationend",(()=>this.timeUp()))}},{kind:"get",key:"_progressBar",value:function(){const e=this.renderRoot.querySelector("#ProgressBar");if(null===e)throw new a("ProgressBar","ProgressBar");return e}},{kind:"method",key:"restart",value:function(){this._progressBar.classList.remove("TransitionToZeroWidth"),this._progressBar.offsetWidth,this._progressBar.classList.add("TransitionToZeroWidth")}},{kind:"method",key:"timeUp",value:function(){const e=new CustomEvent("timeUp",{detail:{message:"time's up"}});this.dispatchEvent(e)}},{kind:"method",key:"render",value:function(){return s`<div id="ProgressBarOutline">
      <div id="ProgressBar"></div>
      ${this.integrateScoreBox?s` <div id="ScoreBox">
            <span class="GreenText">✓</span> : ${this.numberOk}
            <span class="RedText">✗</span> : ${this.numberNok}
          </div>`:""}
    </div>`}}]}}),o);export{n as P};
