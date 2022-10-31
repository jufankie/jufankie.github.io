import{_ as e,e as t,n as r}from"./property-8b64881f.js";import{s as a,r as i,y as o,p as s}from"./lit-element-9a022b11.js";let n=e([r("analog-clock")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[t({type:Number})],key:"hours",value:()=>0},{kind:"field",decorators:[t({type:Number})],key:"minutes",value:()=>0},{kind:"field",decorators:[t({type:Boolean})],key:"showAllTickMarks",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"showHourTickMarks",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"showQuarterTickMarks",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"showAllNumbers",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"showQuarterNumbers",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"useRomanNumerals",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return i``}},{kind:"method",key:"renderHourTickMark",value:function(e){return o`
      <line 
        x1="${125+105*Math.sin(e%12/12*2*Math.PI)}"
        x2="${125+115*Math.sin(e%12/12*2*Math.PI)}"
        y1="${125-105*Math.cos(e%12/12*2*Math.PI)}"
        y2="${125-115*Math.cos(e%12/12*2*Math.PI)}"
        stroke="black"
        stroke-width="5"
    ></line>
    `}},{kind:"method",key:"renderMinuteTickMark",value:function(e){return o`
      <line 
        x1="${125+110*Math.sin(e%60/60*2*Math.PI)}"
        x2="${125+115*Math.sin(e%60/60*2*Math.PI)}"
        y1="${125-110*Math.cos(e%60/60*2*Math.PI)}"
        y2="${125-115*Math.cos(e%60/60*2*Math.PI)}"
        stroke="black"
        stroke-width="3"
    ></line>
    `}},{kind:"method",key:"renderHourNumber",value:function(e){return o`
    <text
      x="${125+90*Math.sin(e%12/12*2*Math.PI)}"
      y="${125-90*Math.cos(e%12/12*2*Math.PI)}"
      dominant-baseline="central" text-anchor="middle" font-size="20"
    >
      ${e}
    </text>
`}},{kind:"method",key:"renderHourRoman",value:function(e){return o`
    <text
      x="${125+90*Math.sin(e%12/12*2*Math.PI)}"
      y="${125-90*Math.cos(e%12/12*2*Math.PI)}"
      dominant-baseline="central" text-anchor="middle" font-size="20"
      transform="rotate(${e%12/12*360}, ${125+90*Math.sin(e%12/12*2*Math.PI)}, ${125-90*Math.cos(e%12/12*2*Math.PI)})"
    >
      ${["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"][e%12]}
    </text>
`}},{kind:"method",key:"render",value:function(){const e=this.hours%12/12*2*Math.PI+this.minutes/60*2*Math.PI/12,t=this.minutes/60*2*Math.PI;let r=[];this.showAllTickMarks||this.showHourTickMarks?r=[1,2,3,4,5,6,7,8,9,10,11,12]:this.showQuarterTickMarks&&(r=[3,6,9,12]);let a=[];this.showAllTickMarks&&(a=[1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19,21,22,23,24,26,27,28,29,31,32,33,34,36,37,38,39,41,42,43,44,46,47,48,49,51,52,53,54,56,57,58,59]);let i=[];return this.showAllNumbers?i=[1,2,3,4,5,6,7,8,9,10,11,12]:this.showQuarterNumbers&&(i=[3,6,9,12]),s`
      <svg
        viewBox="0 0 250 250"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          stroke="black"
          stroke-width="10"
          fill="none"
          cx="125"
          cy="125"
          r="120"
        ></circle>
        ${r.map((e=>this.renderHourTickMark(e)))}
        ${a.map((e=>this.renderMinuteTickMark(e)))}
        ${i.map((e=>this.renderHourNumber(e)))}
        <line
          x1="125"
          y1="125"
          x2="${125+100*Math.sin(t)}"
          y2="${125-100*Math.cos(t)}"
          stroke="red"
          stroke-width="5"
        ></line>
        <line
          x1="125"
          y1="125"
          x2="${125+75*Math.sin(e)}"
          y2="${125-75*Math.cos(e)}"
          stroke="grey"
          stroke-width="5"
        ></line>
        <circle fill="black" cx="125" cy="125" r="5"></circle>
      </svg>
    `}}]}}),a);export{n as AnalogClock};
