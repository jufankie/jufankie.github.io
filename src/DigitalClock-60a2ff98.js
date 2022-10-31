import{_ as t,e,n as r}from"./property-8b64881f.js";import{s as o,r as i,y as l,p as n}from"./lit-element-9a022b11.js";const s=["lt","lb","rt","rb","top","middle","bottom"],d=[{lt:!0,lb:!0,rt:!0,rb:!0,top:!0,middle:!1,bottom:!0},{lt:!1,lb:!1,rt:!0,rb:!0,top:!1,middle:!1,bottom:!1},{lt:!1,lb:!0,rt:!0,rb:!1,top:!0,middle:!0,bottom:!0},{lt:!1,lb:!1,rt:!0,rb:!0,top:!0,middle:!0,bottom:!0},{lt:!0,lb:!1,rt:!0,rb:!0,top:!1,middle:!0,bottom:!1},{lt:!0,lb:!1,rt:!1,rb:!0,top:!0,middle:!0,bottom:!0},{lt:!0,lb:!0,rt:!1,rb:!0,top:!0,middle:!0,bottom:!0},{lt:!1,lb:!1,rt:!0,rb:!0,top:!0,middle:!1,bottom:!1},{lt:!0,lb:!0,rt:!0,rb:!0,top:!0,middle:!0,bottom:!0},{lt:!0,lb:!1,rt:!0,rb:!0,top:!0,middle:!0,bottom:!0}],m=[{x:25},{x:65},{x:125},{x:165}];let b=t([r("digital-clock")],(function(t,r){class o extends r{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[e({type:Number})],key:"hours",value:()=>0},{kind:"field",decorators:[e({type:Number})],key:"minutes",value:()=>0},{kind:"field",static:!0,key:"segmentXYOffsets",value:()=>({lt:{x1:0,x2:0,y1:27.5,y2:47.5},lb:{x1:0,x2:0,y1:52.5,y2:72.5},rt:{x1:25,x2:25,y1:27.5,y2:47.5},rb:{x1:25,x2:25,y1:52.5,y2:72.5},top:{x1:4,x2:21,y1:25,y2:25},middle:{x1:4,x2:21,y1:50,y2:50},bottom:{x1:4,x2:21,y1:75,y2:75}})},{kind:"get",static:!0,key:"styles",value:function(){return i`
      line.segment {
        stroke: blue;
        stroke-width: 5;
        stroke-linecap: round;
      }
    `}},{kind:"method",key:"renderSegment",value:function(t,e){return l`<line
      class="segment"
      x1="${e+o.segmentXYOffsets[t].x1}"
      x2="${e+o.segmentXYOffsets[t].x2}"
      y1="${o.segmentXYOffsets[t].y1}"
      y2="${o.segmentXYOffsets[t].y2}"
    ></line>`}},{kind:"method",key:"renderDigit",value:function(t,e){const r=m[e].x,o=[];for(const e of s)d[t][e]&&o.push(this.renderSegment(e,r));return l`
      ${o}
    `}},{kind:"method",key:"renderColon",value:function(){return l`
      <line class="segment" x1="108" x2="108" y1="37" y2="37"></line>
      <line class="segment" x1="108" x2="108" y1="63" y2="63"></line>
    `}},{kind:"method",key:"render",value:function(){const t=this.hours<24?this.hours:0,e=this.minutes<60?this.minutes:0,r=Math.floor(t/10),o=t%10,i=Math.floor(e/10),l=e%10;return n`
      <svg
        viewBox="0 0 220 100"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          stroke="black"
          stroke-width="10"
          fill="none"
          x="10"
          y="10"
          rx="15"
          width="200"
          height="80"
        ></rect>
        ${0===r?"":this.renderDigit(r,0)}
        ${this.renderDigit(o,1)} ${this.renderColon()}
        ${this.renderDigit(i,2)}
        ${this.renderDigit(l,3)}
      </svg>
    `}}]}}),o);export{b as DigitalClock};
