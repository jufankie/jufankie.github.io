import{_ as t,e,n as i}from"./property-8b64881f.js";import{s as r,r as s,p as n}from"./lit-element-9a022b11.js";const o=["nul","een","twee","drie","vier","vijf","zes","zeven","acht","negen","tien","elf","twaalf","dertien","veertien"];let u=t([i("sentence-clock")],(function(t,i){class r extends i{constructor(...e){super(...e),t(this)}}return{F:r,d:[{kind:"field",static:!0,key:"widthHeightRatio",value:()=>1.5},{kind:"field",decorators:[e({type:Number})],key:"hours",value:()=>0},{kind:"field",decorators:[e({type:Number})],key:"minutes",value:()=>0},{kind:"field",decorators:[e({type:Boolean})],key:"useWords",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return s`
      line.segment {
        stroke: blue;
        stroke-width: 5;
        stroke-linecap: round;
      }
    `}},{kind:"method",key:"numberAsStringOrDigits",value:function(t){let e="";return e=this.useWords?o[t]:`${t}`,e}},{kind:"method",key:"capitalize",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{kind:"method",key:"render",value:function(){let t=(this.hours<24?this.hours:12)%12;0===t&&(t=12);const e=this.minutes<60?this.minutes:0;let i=(t+1)%12;0===i&&(i=12);let s="onbekend",o="";return 0===e?s=`${this.numberAsStringOrDigits(t)} uur`:15===e?(s="Kwart over",o=`${this.numberAsStringOrDigits(t)}`):30===e?s=`Half ${this.numberAsStringOrDigits(i)}`:45===e?(s="Kwart voor",o=`${this.numberAsStringOrDigits(i)}`):e>0&&e<15?(s=`${this.numberAsStringOrDigits(e)} over`,o=`${this.numberAsStringOrDigits(t)}`):e>15&&e<30?(s=`${this.numberAsStringOrDigits(30-e)} voor`,o=`half ${this.numberAsStringOrDigits(i)}`):e>30&&e<45?(s=`${this.numberAsStringOrDigits(e-30)} over`,o=`half ${this.numberAsStringOrDigits(i)}`):e>45&&e<60&&(s=`${this.numberAsStringOrDigits(60-e)} voor`,o=`${this.numberAsStringOrDigits(i)}`),s=this.capitalize(s),n`
      <svg
        viewBox="0 0 ${200*r.widthHeightRatio} 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          stroke="grey"
          stroke-width="1"
          fill="lightgrey"
          x="10"
          y="10"
          width="280"
          height="140"
        ></rect>
        <text x="20" y="67" font-size="40">
          <tspan x="20" dy="0">${s}<tspan>
          <tspan x="20" dy="50">${o}<tspan>
        </text>
      </svg>
    `}}]}}),r);export{u as SentenceClock};
