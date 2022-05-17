import{_ as e,a as t,b as s,n as o}from"./property-8b64881f.js";import{r as i,p as r}from"./lit-element-9a022b11.js";import{t as a}from"./state-47f777cb.js";import{T as n}from"./TimeLimitedGame2-428eeada.js";import{r as l,a as h,b as c}from"./Randomizer-a9177b86.js";import"./AscendingBalloons-e6d28717.js";import{G as d}from"./GameLogger-170cb2bc.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";let m=e([o("mutiplication-tables-balloon-game-app")],(function(e,o){class n extends o{constructor(){super(),e(this),this.parseUrl()}}return{F:n,d:[{kind:"field",decorators:[a()],key:"firstNumber",value:()=>1},{kind:"field",decorators:[a()],key:"secondNumber",value:()=>1},{kind:"field",decorators:[a()],key:"answers",value:()=>({correct:1,incorrect:[2,3,4]})},{kind:"field",decorators:[a()],key:"gameElementsDisabled",value:()=>!0},{kind:"field",decorators:[a()],key:"operator",value:()=>"×"},{kind:"field",decorators:[a()],key:"image",value:()=>"balloon"},{kind:"field",key:"operators",value:()=>[]},{kind:"field",key:"tablesToUse",value:()=>[]},{kind:"field",key:"gameLogger",value:()=>new d("C","")},{kind:"method",key:"parseUrl",value:function(){const e=new URLSearchParams(window.location.search);e.getAll("table").forEach((e=>{const t=parseInt(e,10);!Number.isNaN(t)&&t>=1&&t<=10&&!this.tablesToUse.find((e=>e===t))&&this.tablesToUse.push(t)})),0===this.tablesToUse.length&&(this.tablesToUse=[2,3,4,5,6,7,8,9,10]);e.getAll("operator").forEach((e=>{"times"!==e||this.operators.find((e=>"×"===e))?"divide"!==e||this.operators.find((e=>":"===e))||this.operators.push(":"):this.operators.push("×")})),0===this.operators.length&&this.operators.push("×");const t=e.get("image");"rocket"===t?(this.image="rocket",this.welcomeDialogImageUrl=new URL(new URL("../assets/rocket-blue-3b82c1d1.svg",import.meta.url).href,import.meta.url)):this.image="balloon",1===this.operators.length&&"×"===this.operators[0]&&"balloon"===this.image?this.gameLogger.setSubCode("a"):1===this.operators.length&&"×"===this.operators[0]&&"rocket"===this.image?this.gameLogger.setSubCode("b"):1===this.operators.length&&":"===this.operators[0]&&"rocket"===this.image?this.gameLogger.setSubCode("c"):2===this.operators.length&&"rocket"===this.image?this.gameLogger.setSubCode("d"):this.gameLogger.setSubCode("z")}},{kind:"get",key:"ascendingBalloons",value:function(){return this.getElement("#ascendingBalloons")}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(s(n),"styles",this),i`
        .exercise {
          font-size: calc(1em + 4vmin);
        }
      `]}},{kind:"method",key:"getUpdateComplete",value:async function(){const e=await t(s(n.prototype),"getUpdateComplete",this).call(this);return await this.ascendingBalloons.updateComplete,e}},{kind:"method",key:"startNewGame",value:function(){t(s(n.prototype),"startNewGame",this).call(this),this.newRound()}},{kind:"get",key:"tablesAsScentence",value:function(){let e="";this.tablesToUse.forEach(((t,s)=>{let o="";s===this.tablesToUse.length-2?o=" en ":s<this.tablesToUse.length-2&&(o=", "),e=e.concat(`${t}${o}`)})),e=e.concat(".");let t="";return 1===this.operators.length&&"×"===this.operators[0]?t="":1===this.operators.length&&":"===this.operators[0]?t="deelsommen van de":2===this.operators.length&&(t="deel- en keersommen van de"),r`${t} tafel${1===this.tablesToUse.length?"":"s"}
    van ${e}`}},{kind:"get",key:"welcomeMessage",value:function(){return r`
      <p>Oefenen met de ${this.tablesAsScentence}</p>
      <p>
        Klik op de ${"balloon"===this.image?"ballon":"raket"} met het
        juiste antwoord.
      </p>
    `}},{kind:"get",key:"welcomeDialogTitle",value:function(){let e="";if(1===this.operators.length&&"×"===this.operators[0])e="Tafeltjes oefenen";else if(1===this.operators.length&&":"===this.operators[0])e="Deelsommen met de tafeltjes";else{if(2!==this.operators.length)throw new Error("Wrong number of operators, there is a problem in de software");e="Deel- en keersommen met de tafeltjes"}return e}},{kind:"get",key:"gameOverText",value:function(){return r`
      <p>
        Je hebt ${this.getGameTimeString()} gespeeld met de
        ${this.tablesAsScentence}
      </p>
      ${this.numberOkForGameOverText} ${this.numberNokForGameOverText}
    `}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"handleAscensionComplete",value:function(){this.numberNok+=1,this.newRound()}},{kind:"method",key:"createExcerciseDivide",value:function(){let e=l(1,10);for(;e===this.answers.correct;)e=l(1,10);this.secondNumber=h(this.tablesToUse),this.firstNumber=e*this.secondNumber;const t=[];for(let e=1;e<=10;e++)e*this.secondNumber!==this.firstNumber&&t.push(e);this.answers={correct:e,incorrect:[c(t),c(t),c(t)]}}},{kind:"method",key:"createExcerciseTimes",value:function(){let e=l(1,10);for(;e===this.firstNumber;)e=l(1,10);this.firstNumber=e,this.secondNumber=h(this.tablesToUse);const t=this.firstNumber*this.secondNumber,s=[];for(let e=1;e<=10;e++)e*this.secondNumber!==t&&s.push(e*this.secondNumber);this.answers={correct:t,incorrect:[c(s),c(s),c(s)]}}},{kind:"method",key:"newRound",value:function(){if(this.operator=h(this.operators),"×"===this.operator)this.createExcerciseTimes();else{if(":"!==this.operator)throw new Error("A invalid operator was selected for this excercise");this.createExcerciseDivide()}this.ascendingBalloons.restartAscension(),this.gameElementsDisabled=!1}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameElementsDisabled=!0,this.gameLogger.logGameOver()}},{kind:"method",key:"renderGameContent",value:function(){return r`
      <ascending-balloons
        id="ascendingBalloons"
        style="position: absolute; top: 0; left: 0; height: 100%; width:100%;"
        @correct-balloon-clicked="${()=>this.handleCorrectAnswer()}"
        @wrong-balloon-clicked="${()=>this.handleWrongAnswer()}"
        @ascension-complete="${()=>this.handleAscensionComplete()}"
        .answers=${this.answers}
        ?disabled=${this.gameElementsDisabled}
        imageType=${this.image}
      ></ascending-balloons>
      <div
        class="exercise"
        style="display: ${this.gameElementsDisabled?"none":"block"}; position: absolute; top: 20%; width: 100%; text-align: center;"
      >
        ${this.firstNumber} ${this.operator} ${this.secondNumber} = ?
      </div>
    `}}]}}),n);export{m as MultiplicationTablesBalloonGameApp};
