import{_ as e,a as t,b as r}from"./property-8b64881f.js";import{r as i,p as n}from"./lit-element-9a022b11.js";import{t as o}from"./state-47f777cb.js";import{P as s}from"./ProgressBar-3d7ba932.js";import{P as a}from"./GametimeParameters-56ecf730.js";import{G as m}from"./GameSkeleton-b0b13d41.js";let d=0,l=0;function u(){return d}function c(){return l}function h(){d=document.querySelector("html")?.clientHeight??1,l=document.querySelector("html")?.clientWidth??1;const e=.01*d,t=.01*l;document.documentElement.style.setProperty("--vh",`${e}px`),document.documentElement.style.setProperty("--vhWithoutUnit",`${e}`),document.documentElement.style.setProperty("--vw",`${t}px`),document.documentElement.style.setProperty("--vwWithoutUnit",`${t}`)}h(),window.addEventListener("resize",(()=>{h()}));let p=e(null,(function(e,m){class d extends m{constructor(){super(),e(this),this.gameTime=a(60)}}return{F:d,d:[{kind:"field",decorators:[o()],key:"gameTime",value:()=>0},{kind:"get",key:"progressBar",value:function(){return this.getElement("#progressBar")}},{kind:"method",key:"additionalFirstUpdatedActions",value:function(){t(r(d.prototype),"additionalFirstUpdatedActions",this).call(this)}},{kind:"method",key:"getGameTimeString",value:function(){const e=Math.floor(this.gameTime/60),t=this.gameTime%60;let r;return r=0===t?`${e} ${1===e?"minuut":"minuten"}`:`${e}:${t.toString().padStart(2,"0")} minuten`,r}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await t(r(d.prototype),"getUpdateComplete",this).call(this);return await this.progressBar.updateComplete,e}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(r(d),"styles",this),i`
        .fullGame {
          display: grid;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          grid-template-rows: ${s.height}px 1fr;
        }
        .gameContent {
          width: calc(var(--vw) * 100);
          height: calc(var(--vh) * 100 - 20px);
          box-sizing: border-box;
        }
      `]}},{kind:"method",key:"renderGameContent",value:function(){return n``}},{kind:"method",key:"renderGame",value:function(){return n`
      <div class="fullGame">
        <progress-bar
          style="--progress-bar-gametime: ${this.gameTime}s; width:calc(100 * var(--vw));"
          id="progressBar"
          @timeUp="${()=>this.handleGameOver()}"
          integrateScoreBox
          numberOk="${this.numberOk}"
          numberNok="${this.numberNok}"
        ></progress-bar>
        <div class="gameContent">${this.renderGameContent()}</div>
      </div>
    `}},{kind:"method",key:"startNewGame",value:function(){t(r(d.prototype),"startNewGame",this).call(this),this.progressBar.restart()}}]}}),m);export{p as T,u as a,c as g};
