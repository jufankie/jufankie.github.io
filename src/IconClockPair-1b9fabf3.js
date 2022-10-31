import{_ as e,e as t,n as i}from"./property-8b64881f.js";import{s as o,r as s,p as l}from"./lit-element-9a022b11.js";import"./AnalogClock-0691af0e.js";import"./DigitalClock-60a2ff98.js";import"./SentenceClock-79fbfb91.js";let n=e([i("icon-clock-pair")],(function(e,i){return{F:class extends i{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t({type:Boolean})],key:"analog",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"digital",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"sentence",value:()=>!1},{kind:"field",decorators:[t({type:Number})],key:"hours",value:()=>7},{kind:"field",decorators:[t({type:Number})],key:"minutes",value:()=>10},{kind:"get",static:!0,key:"styles",value:function(){return s`
      div.icon {
        height: 95px;
        width: 95px;
        background-color: white;
        border-radius: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
      }

      .pair {
        height: 45%;
      }
      .triplet {
        height: 33%;
      }

      analog-clock sentence-clock digital-clock {
        display: block;
        position: relative;
      }
    `}},{kind:"method",key:"render",value:function(){let e=0;this.analog&&(e+=1),this.digital&&(e+=1),this.sentence&&(e+=1);let t="";return e<=2&&(t="pair"),3===e&&(t="triplet"),l`
      <div class="icon">
        ${this.analog?l`<analog-clock
              hours="${this.hours}"
              minutes="${this.minutes}"
              showHourTickmarks
              style="top: 5%"
              class=${t}
            ></analog-clock>`:""}
        ${this.sentence?l` <sentence-clock
              hours="${this.hours}"
              minutes="${this.minutes}"
              useWords
              style="top: 10%"
              class=${t}
            ></sentence-clock>`:""}
        ${this.digital?l`
        <digital-clock
          hours="${this.hours}"
          minutes="${this.minutes}"
          useWords
          style="top: 10%"
          class=${t}
        ></digitak-clock>`:""}
      </div>
    `}}]}}),o);export{n as IconClockPair};
