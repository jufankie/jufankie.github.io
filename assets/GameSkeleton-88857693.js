import{_ as e,a as t,b as i}from"./property-8b64881f.js";import{s as a,p as o,r as n}from"./lit-element-9a022b11.js";import{t as r}from"./state-47f777cb.js";import"./MessageDialog-be053afa.js";import{C as s}from"./ChildNotFoundError-35e8e684.js";let m=e(null,(function(e,a){class m extends a{constructor(...t){super(...t),e(this)}}return{F:m,d:[{kind:"field",decorators:[r()],key:"numberOk",value:()=>0},{kind:"field",decorators:[r()],key:"numberNok",value:()=>0},{kind:"field",decorators:[r()],key:"welcomeDialogImageUrl",value:()=>new URL(new URL("../assets/Mompitz Otto-031ac535.png",import.meta.url).href,import.meta.url)},{kind:"method",key:"getElement",value:function(e){const t=this.renderRoot.querySelector(e);if(null===t)throw new s(e,"TimeLimitedGame");return t}},{kind:"get",key:"gameOverDialog",value:function(){return this.getElement("#gameOverDialog")}},{kind:"get",key:"messageDialog",value:function(){return this.getElement("#messageDialog")}},{kind:"method",key:"resetCounters",value:function(){this.numberNok=0,this.numberOk=0}},{kind:"method",key:"additionalFirstUpdatedActions",value:function(){}},{kind:"method",key:"firstUpdated",value:async function(){await this.updateComplete,this.additionalFirstUpdatedActions(),await this.showWelcomeMessage(),this.startNewGame()}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await t(i(m.prototype),"getUpdateComplete",this).call(this);return await this.gameOverDialog.updateComplete,await this.messageDialog.updateComplete,e}},{kind:"method",key:"showWelcomeMessage",value:async function(){return this.messageDialog.show(this.welcomeDialogTitle,this.welcomeMessage)}},{kind:"method",key:"renderGame",value:function(){return o``}},{kind:"get",static:!0,key:"styles",value:function(){return[n`
        .wholeScreen {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      `]}},{kind:"method",key:"render",value:function(){return o`
      <message-dialog
        id="messageDialog"
        .imageUrl=${this.welcomeDialogImageUrl}
      ></message-dialog>

      <gameover-dialog id="gameOverDialog"></gameover-dialog>
      <div class="wholeScreen">${this.renderGame()}</div>
    `}},{kind:"get",key:"timePlayedForGameOverText",value:function(){return o`<p>Je hebt ${this.getGameTimeString()} gespeeld.</p>`}},{kind:"get",key:"numberOkForGameOverText",value:function(){return o`
      <p>
        Je hebt ${0===this.numberOk?"geen":`${this.numberOk}`}
        ${1===this.numberOk?"goed antwoord":"goede antwoorden"} gegeven.
      </p>
    `}},{kind:"get",key:"numberNokForGameOverText",value:function(){return o` <p>
      Je hebt ${0===this.numberNok?"geen":this.numberNok}
      ${1===this.numberNok?"fout":"fouten"} gemaakt.
    </p>`}},{kind:"get",key:"resultsForGameOverText",value:function(){return o`${this.timePlayedForGameOverText}
    ${this.numberOkForGameOverText} ${this.numberNokForGameOverText}`}},{kind:"get",key:"gameOverText",value:function(){return this.resultsForGameOverText}},{kind:"method",key:"startNewGame",value:function(){this.resetCounters()}},{kind:"method",key:"handleGameOver",value:function(){this.executeGameOverActions(),this.gameOverDialog.show(this.gameOverText).then((e=>{"again"===e?this.startNewGame():window.location.href="index.html"}))}},{kind:"method",key:"executeGameOverActions",value:function(){}}]}}),a);export{m as G};
