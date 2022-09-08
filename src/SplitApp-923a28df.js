import{_ as e,e as t,n,a as i,b as s}from"./property-8b64881f.js";import{s as o,r,p as a}from"./lit-element-9a022b11.js";import{t as l}from"./state-47f777cb.js";import{T as d}from"./TimeLimitedGame2-3a5f96b4.js";import{a as u,b as m}from"./Randomizer-a9177b86.js";import"./AscendingBalloons-e6d28717.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-88857693.js";import"./MessageDialog-be053afa.js";e([n("split-digit")],(function(e,n){return{F:class extends n{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"numberToSplit",value:()=>1},{kind:"field",decorators:[t({attribute:!1})],key:"firstNumber",value:()=>7},{kind:"field",decorators:[t({type:Boolean})],key:"disabled",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return r`
      div {
        font-size: calc(1em + 6vmin);
        text-align: center;
      }
      span {
        display: inline-block;
      }
    `}},{kind:"method",key:"render",value:function(){return this.disabled?a``:a`
      <div>${this.numberToSplit}</div>
      <div>
        <span>╱</span><span style="min-width: 0.7em;"></span><span>╲</span>
      </div>
      <div>
        <span>${this.firstNumber}</span><span style="min-width: 1.3em;"></span>
        <span>?</span>
      </div>
    `}}]}}),o);let c=e([n("split-app")],(function(e,t){class n extends t{constructor(){super(),e(this),this.parseUrl()}}return{F:n,d:[{kind:"field",key:"numbersToSplit",value:()=>[]},{kind:"field",decorators:[l()],key:"numberToSplit",value:()=>7},{kind:"field",decorators:[l()],key:"firstNumber",value:()=>3},{kind:"field",decorators:[l()],key:"answers",value:()=>({correct:1,incorrect:[2,3,4]})},{kind:"field",decorators:[l()],key:"gameElementsDisabled",value:()=>!0},{kind:"method",key:"parseUrl",value:function(){new URLSearchParams(window.location.search).getAll("number").forEach((e=>{const t=parseInt(e,10);Number.isNaN(t)||2!==t&&3!==t&&4!==t&&5!==t&&6!==t&&7!==t&&8!==t&&9!==t&&10!==t||this.numbersToSplit.find((e=>e===t))||this.numbersToSplit.push(t)})),0===this.numbersToSplit.length&&this.numbersToSplit.push(10)}},{kind:"get",key:"ascendingBalloons",value:function(){return this.getElement("#ascendingBalloons")}},{kind:"get",static:!0,key:"styles",value:function(){return[...i(s(n),"styles",this)]}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await i(s(n.prototype),"getUpdateComplete",this).call(this);return await this.ascendingBalloons.updateComplete,e}},{kind:"method",key:"startNewGame",value:function(){i(s(n.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"welcomeMessage",value:function(){let e="";if(this.numbersToSplit.length<=0)throw new Error("Internal error");return 1===this.numbersToSplit.length?e=e.concat(`${this.numbersToSplit[0]}.`):this.numbersToSplit.forEach(((t,n)=>{e=0===n?e.concat(`${t}`):n===this.numbersToSplit.length-1?e.concat(` en ${t}.`):e.concat(`, ${t}`)})),a`<p>Splitsen van ${e}</p>
      <p>Klik op de ballon met het juiste antwoord.</p> `}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Splitsen van getallen"}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"handleAscensionComplete",value:function(){this.numberNok+=1,this.newRound()}},{kind:"method",key:"newRound",value:function(){const e=[0,1,2,3,4,5,6,7,8,9,10];this.numberToSplit=u(this.numbersToSplit);const t=e.slice(0,e.findIndex((e=>e===this.numberToSplit))+1);this.firstNumber=u(t);const n=this.numberToSplit-this.firstNumber,i=[];e.forEach((e=>{e!==n&&i.push(e)})),this.answers={correct:n,incorrect:[m(i),m(i),m(i)]},this.ascendingBalloons.restartAscension(),this.gameElementsDisabled=!1}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameElementsDisabled=!0}},{kind:"method",key:"renderGameContent",value:function(){return a`
      <ascending-balloons
        id="ascendingBalloons"
        style="position: absolute; top: 0; left: 0; height: 100%; width:100%;"
        @correct-balloon-clicked="${()=>this.handleCorrectAnswer()}"
        @wrong-balloon-clicked="${()=>this.handleWrongAnswer()}"
        @ascension-complete="${()=>this.handleAscensionComplete()}"
        .answers=${this.answers}
        ?disabled=${this.gameElementsDisabled}
      ></ascending-balloons>
      <split-digit
        ?disabled=${this.gameElementsDisabled}
        .firstNumber=${this.firstNumber}
        .numberToSplit=${this.numberToSplit}
      ></split-digit>
    `}}]}}),d);export{c as SplitApp};
