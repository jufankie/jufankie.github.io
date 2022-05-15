import{s as e,r,p as s}from"./lit-element-9a022b11.js";customElements.define("score-box",class extends e{static get properties(){return{numberOk:{type:Number},numberNok:{type:Number}}}static get styles(){return r`
      div {
        border-style: solid;
        border-color: black;
        padding: 0;
        display: inline-block;
        width: calc(100% - 6px);
        font-size: calc(0.25 * var(--scoreBoxWidth));
        box-sizing: border-box;
      }

      .ScoreSign {
        display: inline-block;
        width: 1em;
      }

      .GreenText {
        color: lightgreen;
      }

      .RedText {
        color: red;
      }
    `}constructor(){super(),this.numberOk=void 0,this.numberNok=void 0,this.numberOk=0,this.numberNok=0}increaseOk(){this.numberOk+=1}increaseNok(){this.numberNok+=1}resetScore(){this.numberOk=0,this.numberNok=0}render(){return s`
        <div>
          <span class="ScoreSign GreenText">✓</span> : ${this.numberOk}
          </br>
          <span class="ScoreSign RedText">✗</span> : ${this.numberNok}
        </div>
    `}});
