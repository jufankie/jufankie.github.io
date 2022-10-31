import{_ as e,n as t}from"./property-8b64881f.js";import{s as o,p as n}from"./lit-element-9a022b11.js";import{t as s}from"./state-47f777cb.js";import"./AscendingBalloons-9f0795a2.js";import{C as i}from"./ChildNotFoundError-35e8e684.js";import"./Randomizer-227ccb40.js";let l=e([t("ascending-balloons-test-app")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[s()],key:"disabled",value:()=>!0},{kind:"field",decorators:[s()],key:"answers",value:()=>({correct:13,incorrect:[67,45,3]})},{kind:"method",key:"getElement",value:function(e){const t=this.renderRoot.querySelector(e);if(null===t)throw new i(e,"FindOnNumberApp");return t}},{kind:"get",key:"ascendingBalloons",value:function(){return this.getElement("ascending-balloons")}},{kind:"method",key:"firstUpdated",value:async function(){}},{kind:"method",key:"render",value:function(){return n`
      <ascending-balloons
        style="position: absolute; height: 100%; width:100%; border: 1px black solid"
        @correct-balloon-clicked="${()=>this.ascendingBalloons.restartAscension()}"
        @wrong-balloon-clicked="${()=>console.log("wrong balloon clicked")}"
        @ascension-complete="${()=>console.log("ascension complete event received")}"
        .answers=${this.answers}
        ?disabled=${this.disabled}
      ></ascending-balloons>

      <button
        style="position:absolute; left: 0; top:0;"
        id="ascendButton"
        @click="${()=>{this.ascendingBalloons.startAscension()}}"
      >
        Ascend
      </button>

      <button
        style="position:absolute; left: 0; top:50px;"
        id="resetButton"
        @click="${()=>{this.ascendingBalloons.reset()}}"
      >
        Reset
      </button>

      <button
        style="position:absolute; left: 0; top:75px;"
        id="toggleDisabledButton"
        @click="${()=>{this.disabled=!this.disabled}}"
      >
        Toggle disabled
      </button>
    `}}]}}),o);export{l as AscendingBalloonsTestApp};
