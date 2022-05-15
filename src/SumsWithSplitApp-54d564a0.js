import{_ as i,a as t,b as e,n as s}from"./property-8b64881f.js";import{p as l,r}from"./lit-element-9a022b11.js";import{t as a}from"./state-47f777cb.js";import{T as n}from"./TimeLimitedGame2-428eeada.js";import{a as h,r as d}from"./Randomizer-a9177b86.js";import{G as o}from"./GameLogger-2c24be00.js";import"./DigitFillin-2f692e97.js";import"./RealHeight-abceab19.js";import"./ProgressBar-3d7ba932.js";import"./ChildNotFoundError-35e8e684.js";import"./GametimeParameters-56ecf730.js";import"./GameSkeleton-34c44bc0.js";import"./MessageDialog-db2c0757.js";import"./ResizeObserver-8ea02421.js";function p(i,t){const e=document.createElement("canvas").getContext("2d");if(!e)throw Error("Context cannot be retrieved");return e.font=t||getComputedStyle(document.body).font,e.measureText(i).width}let g=i([s("sums-with-split-app")],(function(i,s){class n extends s{constructor(){super(),i(this),this.slashWidth=p("/"),this.digitWidth=p("0"),this.parseUrl()}}return{F:n,d:[{kind:"field",key:"gameLogger",value:()=>new o("G","")},{kind:"field",decorators:[a()],key:"activeFillIn",value:()=>0},{kind:"field",decorators:[a()],key:"usedFillIns",value:()=>["split1Left","split1Right","result"]},{kind:"field",decorators:[a()],key:"leftOperand",value:()=>0},{kind:"field",decorators:[a()],key:"rightOperand",value:()=>0},{kind:"field",decorators:[a()],key:"result",value:()=>0},{kind:"field",decorators:[a()],key:"left1Split",value:()=>0},{kind:"field",decorators:[a()],key:"right1Split",value:()=>0},{kind:"field",decorators:[a()],key:"left2Split",value:()=>0},{kind:"field",decorators:[a()],key:"right2Split",value:()=>0},{kind:"field",decorators:[a()],key:"operators",value:()=>[]},{kind:"field",decorators:[a()],key:"selectedOperator",value:()=>"+"},{kind:"field",decorators:[a()],key:"game",value:()=>"split1Till20"},{kind:"field",decorators:[a()],key:"gameEnabled",value:()=>!1},{kind:"field",decorators:[a()],key:"slashWidth",value:()=>0},{kind:"field",decorators:[a()],key:"digitWidth",value:()=>0},{kind:"method",key:"parseUrl",value:function(){const i=new URLSearchParams(window.location.search);if(this.operators=[],i.has("plus")&&this.operators.push("+"),i.has("minus")&&this.operators.push("-"),0===this.operators.length&&this.operators.push("+"),i.has("game")){const t=i.get("game");"split1Till20"===t?(this.game="split1Till20",this.usedFillIns=["split1Left","split1Right","result"]):"split1Till100"===t?(this.game="split1Till100",this.usedFillIns=["split1Left","split1Right","result"]):"split2Till100"===t?(this.game="split2Till100",this.usedFillIns=["split1Left","split1Right","split2Left","split2Right","result"],this.gameLogger.setSubCode("c")):(this.game="split1Till20",this.usedFillIns=["split1Left","split1Right","result"])}else this.game="split1Till20",this.usedFillIns=["split1Left","split1Right","result"];"split1Till20"===this.game&&1===this.operators.length&&"+"===this.operators[0]?this.gameLogger.setSubCode("a"):"split1Till20"===this.game&&1===this.operators.length&&"-"===this.operators[0]?this.gameLogger.setSubCode("b"):"split1Till20"===this.game&&2===this.operators.length?this.gameLogger.setSubCode("c"):"split1Till100"===this.game&&1===this.operators.length&&"+"===this.operators[0]?this.gameLogger.setSubCode("d"):"split1Till100"===this.game&&1===this.operators.length&&"-"===this.operators[0]?this.gameLogger.setSubCode("e"):"split1Till100"===this.game&&2===this.operators.length?this.gameLogger.setSubCode("f"):"split2Till100"===this.game&&1===this.operators.length&&"+"===this.operators[0]?this.gameLogger.setSubCode("g"):"split2Till100"===this.game&&1===this.operators.length&&"-"===this.operators[0]?this.gameLogger.setSubCode("h"):"split2Till100"===this.game&&2===this.operators.length&&this.gameLogger.setSubCode("i")}},{kind:"method",key:"getUpdateComplete",value:async function(){return await t(e(n.prototype),"getUpdateComplete",this).call(this)}},{kind:"method",key:"startNewGame",value:function(){t(e(n.prototype),"startNewGame",this).call(this),this.newRound(),this.gameEnabled=!0}},{kind:"get",key:"possibleSums",value:function(){const i=[];let t;return"split1Till20"===this.game&&(this.operators.includes("+")&&i.push("6+8"),this.operators.includes("-")&&i.push("12-3")),"split1Till100"===this.game&&(this.operators.includes("+")&&i.push("36+8"),this.operators.includes("-")&&i.push("53-7")),"split2Till100"===this.game&&(this.operators.includes("+")&&i.push("47+38"),this.operators.includes("-")&&i.push("65-49")),t=1===i.length?`${i[0]}`:`${i[0]} en ${i[1]}`,t}},{kind:"get",key:"welcomeMessage",value:function(){return l`<p>Maak sommen zoals ${this.possibleSums}</p>`}},{kind:"get",key:"welcomeDialogTitle",value:function(){return"Sommen met splitsen"}},{kind:"get",key:"gameOverText",value:function(){return l`<p>Je hebt sommen zoals ${this.possibleSums} geoefend.</p>
      ${this.resultsForGameOverText}`}},{kind:"method",key:"handleCorrectAnswer",value:function(){this.numberOk+=1,this.newRound()}},{kind:"method",key:"handleWrongAnswer",value:function(){this.numberNok+=1}},{kind:"method",key:"newRound",value:function(){if(this.selectedOperator=h(this.operators),"split1Till20"===this.game||"split1Till100"===this.game){if("+"===this.selectedOperator){const i=d(2,9),t="split1Till20"===this.game?0:d(0,8);this.leftOperand=10*t+i,this.rightOperand=d(11-i,9),this.result=this.leftOperand+this.rightOperand,this.left1Split=10-i,this.right1Split=this.rightOperand-this.left1Split}if("-"===this.selectedOperator){const i=d(1,8),t="split1Till20"===this.game?1:d(1,9);this.leftOperand=10*t+i,this.rightOperand=d(i+1,9),this.result=this.leftOperand-this.rightOperand,this.left1Split=i,this.right1Split=this.rightOperand-this.left1Split}}if("split2Till100"===this.game){if("+"===this.selectedOperator){const i=d(2,9),t=d(0,7);this.leftOperand=10*t+i;const e=d(11-i,9),s=d(1,8-t);this.rightOperand=10*s+e,this.result=this.leftOperand+this.rightOperand,this.left1Split=10*s,this.right1Split=e,this.left2Split=10-i,this.right2Split=this.right1Split-this.left2Split}if("-"===this.selectedOperator){const i=d(1,8),t=d(2,9);this.leftOperand=10*t+i;const e=d(i+1,9),s=d(1,t-1);this.rightOperand=10*s+e,this.result=this.leftOperand-this.rightOperand,this.left1Split=10*s,this.right1Split=e,this.left2Split=i,this.right2Split=e-this.left2Split}}this.activeFillIn=0;for(const i of this.usedFillIns)this.getElement(`#${i}`).resetVisible();this.getElement("digit-keyboard").enableAllDigits()}},{kind:"method",key:"executeGameOverActions",value:function(){this.gameEnabled=!1,this.gameLogger.logGameOver()}},{kind:"method",key:"getActiveFillin",value:function(){return this.getElement(`#${this.usedFillIns[this.activeFillIn]}`)}},{kind:"method",key:"handleDigit",value:function(i){if(this.gameEnabled){const t=this.getActiveFillin().processInput(i);"inputNok"===t?(this.getElement("digit-keyboard").disable(i),this.handleWrongAnswer()):"inputOk"===t?this.getElement("digit-keyboard").enableAllDigits():"fillinComplete"===t&&(this.activeFillIn===this.usedFillIns.length-1?this.handleCorrectAnswer():(this.getElement("digit-keyboard").enableAllDigits(),this.activeFillIn+=1))}}},{kind:"get",static:!0,key:"styles",value:function(){return[...t(e(n),"styles",this),r`
        :host {
          --spaceBetweenSlashesWidth: 0.4em;
          --operatorWidth: 0.8em;
          --fillInWidth: 1em;
          --fillInMargin: 0.2em;

          --fontMagnification: calc(
            (16 + (4 * min(var(--vhWithoutUnit), var(--vwWithoutUnit)))) / 16
          );

          --preSplit1Slashes1DigitWidth: calc(
            (2.5 * var(--singleDigitWidth) + var(--operatorWidth)) -
              var(--slashWidth) - (0.5 * var(--spaceBetweenSlashesWidth))
          );

          --preSplit1DigitEntry1DigitWidthBackup: calc(
            (2.5 * var(--singleDigitWidth) + var(--operatorWidth)) -
              var(--slashWidth) - (0.5 * var(--spaceBetweenSlashesWidth)) -
              var(--fillInWidth)
          );

          --preSplit1DigitEntry1DigitWidth: calc(
            var(--preSplit1Slashes1DigitWidth) + var(--slashWidth) -
              (1 * var(--fillInWidth)) - var(--fillInMargin)
          );

          --preSplit1Slashes2DigitWidth: calc(
            (3 * var(--singleDigitWidth) + var(--operatorWidth)) -
              var(--slashWidth) - (0.5 * var(--spaceBetweenSlashesWidth))
          );

          --preSplit1DigitEntry2DigitWidth: calc(
            var(--preSplit1Slashes2DigitWidth) + var(--slashWidth) -
              (2 * var(--fillInWidth)) - var(--fillInMargin)
          );

          --preSplit2SlashesWidth: calc(
            (2.5 * var(--fillInWidth)) + (3 * var(--fillInMargin)) -
              var(--slashWidth) - (0.5 * var(--spaceBetweenSlashesWidth)) +
              var(--preSplit1DigitEntry2DigitWidth)
          );

          --preSplit2DigitEntryWidth: calc(
            var(--preSplit2SlashesWidth) + var(--slashWidth) -
              (1 * var(--fillInWidth)) - var(--fillInMargin)
          );
        }
        digit-fillin {
          box-sizing: border-box;
        }

        .totalGame {
          position: absolute;
          width: calc(var(--vw) * 100);
          height: calc(var(--vh) * 100 - 20px);
          box-sizing: border-box;
          font-size: calc(16px * var(--fontMagnification));
          display: grid;
        }

        .totalGame1Split {
          grid-template-rows: [sum-row]1.2em [split1-lines-row] 1.2em [split1-answers-row] 1.2em [keyboard-row] 1fr;
        }

        .totalGame2Split {
          grid-template-rows: [sum-row]1.2em [split1-lines-row] 1.2em [split1-answers-row] 1.2em [split2-lines-row] 1.2em [split2-answers-row] 1.2em [keyboard-row] 1fr;
        }

        #sum-row {
          grid-row-start: sum-row;
        }

        #split1-lines-row {
          grid-row-start: split1-lines-row;
        }

        #split1-answers-row {
          grid-row-start: split1-answers-row;
        }

        #split2-lines-row {
          grid-row-start: split2-lines-row;
        }

        #split2-answers-row {
          grid-row-start: split2-answers-row;
        }

        .row {
          position: relative;
          width: 100%;
          height: 1.4em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .excersize {
          position: relative;
          width: calc(
            4 * var(--singleDigitWidth) + 2 * var(--operatorWidth) + 2 *
              var(--fillInWidth) + 2 * var(--fillInMargin) + 10px
          );
        }

        span {
          box-sizing: border-box;
        }

        .leftOperand {
          display: inline-block;
          text-align: right;
          min-width: calc(2 * var(--singleDigitWidth));
        }

        .rightOperand1Digit {
          display: inline-block;
          text-align: left;
          min-width: var(--singleDigitWidth);
        }

        .rightOperand2Digit {
          display: inline-block;
          text-align: left;
          min-width: calc(2 * var(--singleDigitWidth));
        }

        .preSplit1Slashes1Digit {
          display: inline-block;
          width: var(--preSplit1Slashes1DigitWidth);
        }

        .preSplit1DigitEntry1Digit {
          display: inline-block;
          width: var(--preSplit1DigitEntry1DigitWidth);
        }

        .preSplit1Slashes2Digit {
          display: inline-block;
          width: var(--preSplit1Slashes2DigitWidth);
        }

        .preSplit1DigitEntry2Digit {
          display: inline-block;
          width: var(--preSplit1DigitEntry2DigitWidth);
        }

        .spaceBetweenSlashes {
          display: inline-block;
          width: var(--spaceBetweenSlashesWidth);
        }

        .preSplit2Slashes {
          display: inline-block;
          width: var(--preSplit2SlashesWidth);
        }

        .preSplit2DigitEntry {
          display: inline-block;
          width: var(--preSplit2DigitEntryWidth);
        }

        .split2 {
          display: inline-block;
          text-align: center;
          width: calc(
            2 * (2.5 * var(--singleDigitWidth) + var(--operatorWidth))
          );
        }

        .operator {
          display: inline-block;
          text-align: center;
          min-width: var(--operatorWidth);
        }

        .keyboardArea {
          grid-row-start: keyboard-row;
          min-height: 0;
          width: 100%;
          min-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        digit-keyboard {
          height: min(calc(45 * var(--vh)), 90%);
          aspect-ratio: 3/4;
        }

        .hidden {
          visibility: hidden;
        }
      `]}},{kind:"method",key:"renderGameContent",value:function(){let i="totalGame1Split";"split2Till100"===this.game&&(i="totalGame2Split");const t=l`
      <div class="row" id="sum-row">
        <div class="excersize">
          <span class="leftOperand">${this.leftOperand}</span
          ><span class="operator">${this.selectedOperator}</span
          ><span class="rightOperand1Digit">${this.rightOperand}</span
          ><span class="operator">=</span
          ><digit-fillin
            id="result"
            desiredNumber="${this.result}"
            numberDigits="2"
            ?fillinActive=${"result"===this.usedFillIns[this.activeFillIn]}
          ></digit-fillin>
        </div>
      </div>
    `;let e=1,s="preSplit1Slashes1Digit",r="preSplit1DigitEntry1Digit";"split2Till100"===this.game&&(e=2,s="preSplit1Slashes2Digit",r="preSplit1DigitEntry2Digit");const a=l`
      <div class="row">
        <div class="excersize">
          <span class="${s}"></span><span>/</span
          ><span class="spaceBetweenSlashes"></span><span>&#92;</span>
        </div>
      </div>

      <div class="row">
        <div class="excersize">
          <span class="${r}"></span
          ><digit-fillin
            id="split1Left"
            desiredNumber="${this.left1Split}"
            numberDigits="${e}"
            ?fillinActive=${"split1Left"===this.usedFillIns[this.activeFillIn]}
          ></digit-fillin
          ><digit-fillin
            id="split1Right"
            desiredNumber="${this.right1Split}"
            numberDigits="1"
            ?fillinActive=${"split1Right"===this.usedFillIns[this.activeFillIn]}
          ></digit-fillin>
        </div>
      </div>
    `;let n=l``;return"split2Till100"===this.game&&(n=l`
        <div class="row">
          <div class="excersize">
            <span class="preSplit2Slashes"></span><span>/</span
            ><span class="spaceBetweenSlashes"></span><span>&#92;</span>
          </div>
        </div>

        <div class="row">
          <div class="excersize">
            <span class="preSplit2DigitEntry"></span
            ><digit-fillin
              id="split2Left"
              desiredNumber="${this.left2Split}"
              numberDigits="1"
              ?fillinActive=${"split2Left"===this.usedFillIns[this.activeFillIn]}
            ></digit-fillin
            ><digit-fillin
              id="split2Right"
              desiredNumber="${this.right2Split}"
              numberDigits="1"
              ?fillinActive=${"split2Right"===this.usedFillIns[this.activeFillIn]}
            ></digit-fillin>
          </div>
        </div>
      `),l`
      <style>
        :host {
          --slashWidth: calc(${this.slashWidth}px * var(--fontMagnification));
          --singleDigitWidth: calc(
            ${this.digitWidth}px * var(--fontMagnification)
          );
        }
      </style>
      <div
        class="totalGame ${i} ${this.gameEnabled?"":"hidden"}"
        id="totalGame"
      >
        ${t} ${a} ${n}
        <div class="keyboardArea">
          <digit-keyboard
            @digit-entered="${i=>this.handleDigit(i.detail)}"
          >
          </digit-keyboard>
        </div>
      </div>
    `}}]}}),n);export{g as SumsWithDoubleSplitApp,p as getTextWidth};
