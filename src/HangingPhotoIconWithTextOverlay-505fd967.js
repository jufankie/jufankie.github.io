import{_ as e,e as t,n as i}from"./property-8b64881f.js";import{s as r,r as n,y as o,p as d}from"./lit-element-9a022b11.js";import{t as s}from"./state-47f777cb.js";import{F as a}from"./FramedPhotoSVG-47620243.js";let k=e([i("hanging-photo-icon-with-text-overlay")],(function(e,i){return{F:class extends i{constructor(){super(),e(this),this.framedPhoto.photoId=this.photoId,this.framedPhoto.photoSize=35,this.framedPhoto.x=51,this.framedPhoto.y=30}},d:[{kind:"field",decorators:[t({type:Number})],key:"numberLeft",value:()=>0},{kind:"field",decorators:[t({type:Number})],key:"numberMiddle",value:()=>10},{kind:"field",decorators:[t({type:Number})],key:"numberRight",value:()=>20},{kind:"field",decorators:[t({type:String})],key:"smallestTickmark",value:()=>"noTickMark"},{kind:"field",decorators:[t({type:Boolean})],key:"showNumberMiddle",value:()=>!1},{kind:"field",decorators:[t({type:Boolean})],key:"brokenLine",value:()=>!1},{kind:"field",decorators:[t({type:String})],key:"photoId",value:()=>"Frank"},{kind:"field",decorators:[s()],key:"framedPhoto",value:()=>new a},{kind:"get",static:!0,key:"styles",value:function(){return n`
      .digits {
        font: 10px sans-serif;
      }
    `}},{kind:"method",key:"willUpdate",value:function(e){e.has("photoId")&&(this.framedPhoto.photoId=this.photoId,this.requestUpdate())}},{kind:"method",key:"render10TickMark",value:function(e){return o`
      <line x1="${e}" x2="${e}" y1="1" y2="11" width="3" stroke="blue"/>
    `}},{kind:"method",key:"render5TickMark",value:function(e){return o`
      <line x1="${e}" x2="${e}" y1="3" y2="9" width="2" stroke="blue"/>
    `}},{kind:"method",key:"render1TickMark",value:function(e){return o`
      <line x1="${e}" x2="${e}" y1="4" y2="8" width="1" stroke="blue"/>
    `}},{kind:"method",key:"renderConnectingLine",value:function(){return o`
      <line x1="70" x2="70" y1="6" y2="30" width="1" stroke = "${this.framedPhoto.photoInfo.color}">
    `}},{kind:"method",key:"renderLeftDigit",value:function(){return o`
      <text
        x="0"
        y="12"
        dominant-baseline="hanging"
        text-anchor="start"
        class="digits"
      >
        ${this.numberLeft}
      </text>
    `}},{kind:"method",key:"renderRightDigit",value:function(){return o`
      <text
        x="100"
        y="12"
        dominant-baseline="hanging"
        text-anchor="end"
        class="digits"
      >
        ${this.numberRight}
      </text>
    `}},{kind:"method",key:"renderMiddleDigit",value:function(){let e=o``;return this.showNumberMiddle&&(e=o`
        <text
          x="50"
          y="12"
          dominant-baseline="hanging"
          text-anchor="middle"
          class="digits"
        >
          ${this.numberMiddle}
        </text>
      `),e}},{kind:"method",key:"renderNumberLine",value:function(){let e=o``;return e=this.brokenLine?o`
        <line x1="1" x2="12" y1="6" y2="6" stroke="blue" width="3" />
        <line x1="18" x2="22" y1="6" y2="6" stroke="blue" width="3" />
        <line x1="28" x2="32" y1="6" y2="6" stroke="blue" width="3" />
        <line x1="38" x2="99" y1="6" y2="6" stroke="blue" width="3" />
      `:o`<line x1="1" x2="99" y1="6" y2="6" stroke="blue" width="3" />`,e}},{kind:"method",key:"render",value:function(){let e=[],t=[],i=[];return e="tickMark1"===this.smallestTickmark||"tickMark5"===this.smallestTickmark||"tickMark10"===this.smallestTickmark?[1,50,99]:[1,99],"tickMark1"!==this.smallestTickmark&&"tickMark5"!==this.smallestTickmark||(t=[75],this.brokenLine||t.push(25)),"tickMark1"===this.smallestTickmark&&(i=[5,10,40,45,55,60,65,70,80,85,90,95],this.brokenLine||(i=i.concat([15,20,30,35]))),d`
      <div style="width: 110px; height: 70px; position; absolute;">
        <svg viewBox="0 0 110 70">
          ${this.renderNumberLine()}
          ${e.map((e=>this.render10TickMark(e)))}
          ${t.map((e=>this.render5TickMark(e)))}
          ${i.map((e=>this.render1TickMark(e)))}
          ${this.renderLeftDigit()} ${this.renderMiddleDigit()}
          ${this.renderRightDigit()} ${this.renderConnectingLine()}
          ${this.framedPhoto.render()}
        </svg>
      </div>
    `}}]}}),r);export{k as HangingPhotoIconWithTextOverlay};
