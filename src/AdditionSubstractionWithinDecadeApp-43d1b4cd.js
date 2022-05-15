import{_ as e,a as t,b as s,n}from"./property-8b64881f.js";import{r as i,p as o}from"./lit-element-9a022b11.js";import{t as r}from"./state-47f777cb.js";import{T as a}from"./TimeLimitedGame2-428eeada.js";import{a as l,r as d,b as c}from"./Randomizer-a9177b86.js";import"./AscendingBalloons-e6d28717.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";let h=e([n("addition-substraction-within-decade-app")],(function(e,n){class a extends n{constructor(){super(),e(this),this.parseUrl()}}return{F:a,d:[{kind:"field",decorators:[r()],key:"firstNumber",value:()=>1},{kind:"field",decorators:[r()],key:"secondNumber",value:()=>1},{kind:"field",decorators:[r()],key:"operator",value:()=>"+"},{kind:"field",decorators:[r()],key:"answers",value:()=>({correct:1,incorrect:[2,3,4]})},{kind:"field",decorators:[r()],key:"gameElementsDisabled",value:()=>!0},{kind:"field",key:"decades",value:()=>[]},{kind:"field",key:"operators",value:()=>[]},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);e.getAll("decade").forEach((e=>{const t=parseInt(e,10);!Number.isNaN(t)&&t>=0&&t%10==0&&t<100&&!this.decades.find((e=>e===t))&&this.decades.push(t)})),0===this.decades.length&&this.decades.push(0);e.getAll("operator").forEach((e=>{"plus"!==e||this.operators.find((e=>"+"===e))?"minus"!==e||this.operators.find((e=>"-"===e))||this.operators.push("-"):this.operators.push("+")})),0===this.operators.length&&this.operators.push("+")}},{kind:"get",key:"ascendingBalloons",value:function(){return this.getElement("#ascendingBalloons")}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(s(a),"styles",this),i`
        .exercise {
          font-size: calc(1em + 4vmin);
        }
      `]}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await t(s(a.prototype),"getUpdateComplete",this).call(this);return await this.ascendingBalloons.updateComplete,e}},{kind:"method",key:"startNewGame",value:function(){t(s(a.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"exerciseExamplesAsScentence",value:function(){const e=[];let t="";if(this.operators.find((e=>"+"===e))&&this.decades.forEach((t=>e.push(`${t+3}+4`))),this.operators.find((e=>"-"===e))&&this.decades.forEach((t=>e.push(`${t+7}-5`))),e.length<=0)throw new Error("Internal error");return 1===e.length?t=t.concat(`${e[0]}.`):e.forEach(((s,n)=>{t=0===n?t.concat(s):n===e.length-1?t.concat(` en ${s}.`):t.concat(`, ${s}`)})),t}},{kind:"get",key:"welcomeMessage",value:function(){return o`<p>Sommen als ${this.exerciseExamplesAsScentence}</p>
      <p>Klik op de ballon met het juiste antwoord.</p> `}},{kind:"get",key:"gameOverText",value:function(){return o`
      <p>
        Je hebt ${this.getGameTimeString()} gespeeld met sommen als
        ${this.exerciseExamplesAsScentence}
      </p>
      ${this.numberOkForGameOverText} ${this.numberNokForGameOverText}
    `}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Sommen binnen het tiental"}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"handleAscensionComplete",value:function(){this.numberNok+=1,this.newRound()}},{kind:"method",key:"newRound",value:function(){this.operator=l(this.operators);const e=l(this.decades);let t;if("+"===this.operator)this.firstNumber=d(0+e,9+e),this.secondNumber=d(0,10-(this.firstNumber-e)),t=this.firstNumber+this.secondNumber;else{if("-"!==this.operator)throw new Error("Unsupported operator found");this.firstNumber=d(1+e,10+e),this.secondNumber=d(0,this.firstNumber-e),t=this.firstNumber-this.secondNumber}const s=[];for(let n=0+e;n<=10+e;n++)n!==t&&s.push(n);this.answers={correct:t,incorrect:[c(s),c(s),c(s)]},this.ascendingBalloons.restartAscension(),this.gameElementsDisabled=!1}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameElementsDisabled=!0}},{kind:"method",key:"renderGameContent",value:function(){return o`
      <ascending-balloons
        id="ascendingBalloons"
        style="position: absolute; top: 0; left: 0; height: 100%; width:100%;"
        imageType="kite"
        @correct-balloon-clicked="${()=>this.handleCorrectAnswer()}"
        @wrong-balloon-clicked="${()=>this.handleWrongAnswer()}"
        @ascension-complete="${()=>this.handleAscensionComplete()}"
        .answers=${this.answers}
        ?disabled=${this.gameElementsDisabled}
      ></ascending-balloons>
      <div
        class="exercise"
        style="display: ${this.gameElementsDisabled?"none":"block"}; position: absolute; top: 20%; width: 100%; text-align: center;"
      >
        ${this.firstNumber} ${this.operator} ${this.secondNumber} = ?
      </div>
    `}}]}}),a);export{h as AdditionSubstractionWithinDecadeApp};
