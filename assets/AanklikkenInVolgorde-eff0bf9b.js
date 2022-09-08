import{s as e,r as l,p as t}from"./lit-element-9a022b11.js";import{r as i}from"./Randomizer-a9177b86.js";import"./MessageDialog-be053afa.js";import"./ChildNotFoundError-35e8e684.js";customElements.define("ballfield-entry",class extends e{static get properties(){return{ignoreKeyboard:{type:Boolean},labels:{type:Array}}}static get styles(){return l`
      .FadeOut {
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
      .BallBlock {
        height: var(--ballFieldHeight);
        width: var(--ballFieldWidth);
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        border: none;
      }

      .Cell12,
      .Cell20 {
        border: none;
        margin: 0;
        padding: 0;
        height: var(--cellHeight);
        width: var(--cellWidth);
        --ballWidth: calc(min(var(--cellWidth) / 2.5, var(--cellHeight) / 2.5));
        --ballHeight: calc(
          min(var(--cellWidth) / 2.5, var(--cellHeight) / 2.5)
        );
      }

      .Ball {
        background-size: 100%;
        background-color: Transparent;
        border: none;
        outline: none;
        position: absolute;
        padding: 0;
        color: black;
        font-size: calc(0.6 * var(--ballWidth));
        width: var(--ballWidth);
        height: var(--ballHeight);
      }

      @media (min-aspect-ratio: 5/2) {
        .Cell12 {
          --cellWidth: calc(var(--ballFieldWidth) / 6 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 2 - 2px);
        }
        .Cell20 {
          --cellWidth: calc(var(--ballFieldWidth) / 7 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 3 - 2px);
        }
      }

      @media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 5/2) {
        .Cell12 {
          --cellWidth: calc(var(--ballFieldWidth) / 4 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 3 - 2px);
        }
        .Cell20 {
          --cellWidth: calc(var(--ballFieldWidth) / 5 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 4 - 2px);
        }
      }

      @media (min-aspect-ratio: 2/5) and (max-aspect-ratio: 1/1) {
        .Cell12 {
          --cellWidth: calc(var(--ballFieldWidth) / 3 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 4 - 2px);
        }
        .Cell20 {
          --cellWidth: calc(var(--ballFieldWidth) / 4 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 5 - 2px);
        }
      }

      @media (max-aspect-ratio: 2/5) {
        .Cell12 {
          --cellWidth: calc(var(--ballFieldWidth) / 2 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 6 - 2px);
        }
        .Cell20 {
          --cellWidth: calc(var(--ballFieldWidth) / 3 - 2px);
          --cellHeight: calc(var(--ballFieldHeight) / 7 - 2px);
        }
      }
    `}constructor(){super(),this.preventCollisionElements=void 0,this.labels=void 0,this.balls=void 0,this.preventCollisionElements=[],this.labels=[],this.balls=[]}initializeBalls(){if(this.balls=[],this.labels.length>12)for(let e=0;e<20;e++)this.balls.push({show:!1});else for(let e=0;e<12;e++)this.balls.push({show:!1});this.shuffleBalls()}setPreventCollisionElements(e){this.preventCollisionElements=e}shuffleBalls(){let e=[];e=this.labels.length<=12?[0,1,2,3,4,5,6,7,8,9,10,11]:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];const l=[new URL(new URL("../assets/ball-blue-a9681c59.svg",import.meta.url).href,import.meta.url),new URL(new URL("../assets/ball-red-a8ec0f14.svg",import.meta.url).href,import.meta.url),new URL(new URL("../assets/ball-green-514d89e0.svg",import.meta.url).href,import.meta.url),new URL(new URL("../assets/ball-yellow-4464463b.svg",import.meta.url).href,import.meta.url)];for(let t=0;t<this.labels.length;t++){const a=i(0,e.length-1);this.balls[e[a]]={label:this.labels[t],disabled:!1,show:!0,removed:!1,factorX:Math.random(),factorY:Math.random(),cell:e[a],image:l[i(0,3)]},e.splice(a,1)}e.forEach((e=>{this.balls[e]={show:!1}})),this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.onresize=()=>{this.preventOverlapForBalls()},this.initializeBalls()}setBallLabels(e){this.labels=e,this.initializeBalls()}handleBall(e){const l=this.balls[e];if(!0===l.show){const t=new CustomEvent("input-clicked",{detail:{label:l.label,cell:e}});this.dispatchEvent(t)}}disableBall(e){const l=this.balls[e];!0===l.show&&(l.disabled=!0),this.requestUpdate()}enableBall(e){const l=this.balls[e];!0===l.show&&(l.disabled=!1),this.requestUpdate()}enableAllPresentBalls(){let e=0;e=this.labels.length<=12?12:20;for(let l=0;l<e;l++){const e=this.balls[l];!0===e.show&&(e.disabled=!1)}this.requestUpdate()}removeBall(e){const l=this.balls[e];!0===l.show&&(l.removed=!0),this.requestUpdate()}makeBall(e){if(e.show){let l;return l=e.disabled?"✗":e.label,t` <button
        style="position: relative;
                      top: calc(${e.factorX} * (100% - var(--ballWidth)));
                      left: calc(${e.factorY} * (100% - var(--ballHeight)));
                      background-image: url('${e.image}');"
        ?disabled=${e.disabled}
        class="Ball ${e.removed?"FadeOut":""}"
        id="Ball${e.label}"
        @click="${()=>this.handleBall(e.cell)}"
      >
        ${l}
      </button>`}return t``}makeCell20(e){return t`<div class="Cell20">${this.makeBall(e)}</div>`}makeCell12(e){return t`<div class="Cell12">${this.makeBall(e)}</div>`}makeCells(){return this.labels.length<=12?t`${this.balls.map((e=>t`${this.makeCell12(e)}`))}`:t`${this.balls.map((e=>t`${this.makeCell20(e)}`))}`}render(){return t` <div class="BallBlock">${this.makeCells()}</div> `}updated(){this.preventOverlapForBalls()}preventOverlapForBalls(){const e=this.renderRoot.querySelectorAll(".Ball");this.preventCollisionElements.forEach((l=>{e.forEach((e=>{this.preventOverlapForBall(e,l)}))}))}rectangleIntersect(e,l){return e.left<l.right&&e.right>l.left&&e.top<l.bottom&&e.bottom>l.top}preventOverlapForBall(e,l){let t=e.getBoundingClientRect();const i=l.getBoundingClientRect();let a=0;for(;a<10&&this.rectangleIntersect(t,i);){const l=Math.random(),i=Math.random();e.style.top=`calc(${i} * (100% - var(--ballWidth)))`,e.style.left=`calc(${l} * (100% - var(--ballHeight)))`,t=e.getBoundingClientRect(),a+=1}}});customElements.define("timed-score-box",class extends e{static get properties(){return{minutes:{type:Number},seconds:{type:Number},numberNok:{type:Number}}}static get styles(){return l`
      #scoreBox {
        border-style: solid;
        border-color: black;
        padding: 10% 10% 10% 10%;
        display: inline-block;
        width: calc(100% - 6px);
        font-size: calc(0.25 * var(--scoreBoxWidth));
      }

      .ScoreSign {
        display: inline-block;
        width: 1em;
      }

      .RedText {
        color: red;
      }
    `}constructor(){super(),this.paused=void 0,this.numberNok=void 0,this.minutes=void 0,this.seconds=void 0,this.paused=!0,this.numberNok=0,this.minutes=0,this.seconds=0,setInterval((()=>this.increaseTime()),1e3)}increaseNok(){this.numberNok+=1}increaseTime(){this.paused||(this.seconds+=1,60===this.seconds&&(this.seconds=0,this.minutes+=1))}getTimeAsString(){return`${this.minutes}:${this.seconds.toString().padStart(2,"0")}`}pause(){this.paused=!0}resume(){this.paused=!1}resetScore(){this.numberNok=0,this.minutes=0,this.seconds=0,this.paused=!1}render(){return t`
      <div id="scoreBox">
        <div style="text-align: center;">${this.getTimeAsString()}</div>
        <div><span class="ScoreSign RedText">✗</span> : ${this.numberNok}</div>
      </div>
    `}});class a{constructor(){this.labelsInOrder=void 0,this.scoreBox=void 0,this.ballFieldEntry=void 0,this.gameOverDialog=void 0,this.messageDialog=void 0,this.ballToFindIndex=void 0,this.startGameText=void 0,this.updateViewPortHeight(),window.addEventListener("resize",(()=>{this.updateViewPortHeight()})),this.labelsInOrder=[],this.startGameText=t``,this.scoreBox=document.getElementById("scoreBox"),this.ballFieldEntry=document.getElementById("ballFieldEntry"),this.gameOverDialog=document.getElementById("gameOverDialog"),this.messageDialog=document.getElementById("messageDialog"),this.ballFieldEntry.setPreventCollisionElements([this.scoreBox]),this.ballFieldEntry.addEventListener("input-clicked",(e=>this.inputClicked(e))),this.parsePossibleNumbersFromUrl(),this.ballFieldEntry.setBallLabels(this.labelsInOrder.slice(0)),this.ballToFindIndex=0,this.initiateGame()}async initiateGame(){await this.scoreBox.updateComplete,await this.ballFieldEntry.updateComplete,await this.gameOverDialog.updateComplete,await this.messageDialog.updateComplete,this.scoreBox.pause(),this.messageDialog.show("Ballen knallen",this.startGameText).then((()=>{this.scoreBox.resetScore()}))}inputClicked(e){e.detail.label===this.labelsInOrder[this.ballToFindIndex]?(this.ballFieldEntry.removeBall(e.detail.cell),this.ballFieldEntry.enableAllPresentBalls(),this.ballToFindIndex+=1,this.ballToFindIndex===this.labelsInOrder.length&&this.gameOver()):(this.scoreBox.increaseNok(),this.ballFieldEntry.disableBall(e.detail.cell))}gameOver(){this.scoreBox.pause(),this.gameOverDialog.show(t` <p>
            Je hebt alle ballen weggeklikt in ${this.scoreBox.getTimeAsString()}
            minuten!
          </p>
          <p>
            Je hebt
            ${0===this.scoreBox.numberNok?"geen":this.scoreBox.numberNok}
            ${1===this.scoreBox.numberNok?"fout":"fouten"} gemaakt.
          </p>`).then((e=>{"again"===e?this.resetGame():window.location.href="index.html"}))}resetGame(){this.ballFieldEntry.shuffleBalls(),this.ballToFindIndex=0,this.scoreBox.resetScore()}parsePossibleNumbersFromUrl(){const e=new URLSearchParams(window.location.search);if(this.labelsInOrder=[],e.has("tableOfMultiplication")){const l=parseInt(e.get("tableOfMultiplication")||"",10);if(!Number.isNaN(l)){for(let e=1;e<=10;e++)this.labelsInOrder.push(""+e*l);this.startGameText=t`Klik de getallen aan, van klein naar groot,
        met sprongen van ${l}.`}}else if(e.has("random")){const l=parseInt(e.get("random")||"",10);let a=i(20,80);Number.isNaN(l)||(a=l);for(let e=a;e<a+20;e++)this.labelsInOrder.push(`${e}`);this.startGameText=t`Klik de getallen aan, van klein naar groot,
      begin bij ${a}.`}else{const l=e.getAll("number");for(let e=0;e<l.length;e++){const t=parseInt(l[e],10);Number.isNaN(t)||this.labelsInOrder.push(`${t}`)}this.startGameText=t`Klik de getallen aan van klein naar groot.`}0===this.labelsInOrder.length&&(this.labelsInOrder=["1","2","3","4","5","6","7","8","9","10"],this.startGameText=t`Klik de getallen aan van klein naar groot.`),e.has("introText")&&(this.startGameText=t`${e.get("introText")}`)}updateViewPortHeight(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}}document.addEventListener("DOMContentLoaded",(()=>{new a}));
