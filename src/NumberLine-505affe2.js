import{s as i,r as t,y as e,p as s}from"./lit-element-9a022b11.js";class r extends i{static get properties(){return{show10TickMarks:{type:Boolean},show5TickMarks:{type:Boolean},show1TickMarks:{type:Boolean},showAll10Numbers:{type:Boolean},minimum:{type:Number},maximum:{type:Number}}}static get styles(){return t``}constructor(){super(),this.show1TickMarks=void 0,this.show5TickMarks=void 0,this.show10TickMarks=void 0,this.showAll10Numbers=void 0,this.minimum=void 0,this.maximum=void 0,this.yPosLine=void 0,this.show1TickMarks=!1,this.show5TickMarks=!1,this.show10TickMarks=!1,this.showAll10Numbers=!1,this.minimum=0,this.maximum=100,r.margin=15,this.yPosLine=8}get width(){return this.getBoundingClientRect().width/window.innerWidth*100}static get viewBoxWidth(){return r.lineLength+2*r.margin}static get heightWidthAspectRatio(){return r.viewBoxHeight/r.viewBoxWidth}static get marginAsWidthPercentage(){return r.margin/r.viewBoxWidth}static get widthFractionMinimum(){return r.margin/r.viewBoxWidth}static get widthFractionMaximum(){return(r.viewBoxWidth-r.margin)/r.viewBoxWidth}translateDeltaWidthFractionToDeltaPosition(i){return r.viewBoxWidth/r.lineLength*i*(this.maximum-this.minimum)}translateWidthFractionToPosition(i){return this.translateDeltaWidthFractionToDeltaPosition(i-r.widthFractionMinimum)+this.minimum}translatePostionToWidthFraction(i){return(r.margin+(i-this.minimum)/(this.maximum-this.minimum)*r.lineLength)/r.viewBoxWidth}translatePosition(i){return r.lineLength/(this.maximum-this.minimum)*(i-this.minimum)+r.margin}numberDistanceToViewportDistance(i){return r.lineLength/(this.maximum-this.minimum)*i}renderTickMark(i,t=10){const s={1:{y1:this.yPosLine-2,y2:this.yPosLine+2,strokeWidth:1},5:{y1:this.yPosLine-5,y2:this.yPosLine+5,strokeWidth:1},10:{y1:this.yPosLine-8,y2:this.yPosLine+8,strokeWidth:2}};return e`
        <line 
          x1 = "${i}"
          y1 = "${s[t].y1}"
          x2 = "${i}"
          y2 = "${s[t].y2}"
          style="stroke:rgb(0, 26, 255);stroke-width: ${s[t].strokeWidth}" 
        />`}render10TickMarks(){const i=[],t=(this.maximum-this.minimum)/10+1;for(let e=0;e<t;e++)i.push(this.translatePosition(this.minimum)+e*this.numberDistanceToViewportDistance(10));return e`
        ${i.map((i=>this.renderTickMark(i,10)))}
      `}render5TickMarks(){const i=[];for(let t=this.translatePosition(this.minimum+5);t<this.translatePosition(this.maximum);t+=this.numberDistanceToViewportDistance(10))i.push(t);return e`
        ${i.map((i=>this.renderTickMark(i,5)))}
      `}render1TickMarks(){const i=[];for(let t=this.translatePosition(this.minimum+1);t<this.translatePosition(this.maximum);t+=this.numberDistanceToViewportDistance(1))i.push(t);return e`
        ${i.map((i=>this.renderTickMark(i,1)))}
      `}renderNumberLine(){return e`
        <line
          x1="${this.translatePosition(this.minimum)}"
          y1="${this.yPosLine}"
          x2="${this.translatePosition(this.maximum)}"
          y2="${this.yPosLine}"
          style="stroke:rgb(0, 26, 255);stroke-width: 2"
        />`}renderNumbers(){const i=[];if(this.showAll10Numbers){const t=(this.maximum-this.minimum)/10+1;for(let e=0;e<t;e++)i.push(this.minimum+10*e)}else i.push(this.minimum,this.maximum);return e`
        ${i.map((i=>this.renderNumber(i)))}
      `}renderNumber(i){return e`
        <text x="${this.translatePosition(i)}" y="${this.yPosLine+10}" dominant-baseline="hanging" text-anchor="middle">${i}</text>
      `}render(){return s` <div>
      <svg
        style="width:${this.width}vw; height:${this.width*r.heightWidthAspectRatio}vw;"
        viewBox="0 0 ${r.viewBoxWidth} ${r.viewBoxHeight}"
      >
        ${this.renderNumberLine()} ${this.renderNumbers()}
        ${this.show10TickMarks?this.render10TickMarks():""}
        ${this.show5TickMarks?this.render5TickMarks():""}
        ${this.show1TickMarks?this.render1TickMarks():""}
      </svg>
    </div>`}}r.margin=15,r.viewBoxHeight=35,r.lineLength=1e3,customElements.define("number-line",r);export{r as N};
