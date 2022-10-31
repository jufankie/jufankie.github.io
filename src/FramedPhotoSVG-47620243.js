import{y as t}from"./lit-element-9a022b11.js";const o={Anne:{url:new URL(new URL("../assets/Mompitz Anne-c8e32aa4.png",import.meta.url).href,import.meta.url),width:434,height:449,color:"#97cdb4"},Jan:{url:new URL(new URL("../assets/Mompitz Jan-500-bd20af4a.png",import.meta.url).href,import.meta.url),width:500,height:479,color:"#f6d435"},Johannes:{url:new URL(new URL("../assets/Mompitz Johannes-a7db58a8.png",import.meta.url).href,import.meta.url),width:469,height:556,color:"#f2444e"},Frank:{url:new URL(new URL("../assets/Mompitz Frank-7c1a0d32.png",import.meta.url).href,import.meta.url),width:584,height:579,color:"#9c6ccf"},Disabled:{url:new URL(new URL("../assets/cross-out-black-500-a014d4c1.png",import.meta.url).href,import.meta.url),width:500,height:459,color:"#000000"}};class h{static getFrameColor(t){return o[t].color}constructor(){this.photoId=void 0,this.photoSize=38,this.x=1,this.y=1,this.disabled=void 0,this.photoId="Frank",this.disabled=!1}get photoInfo(){return this.disabled?o.Disabled:o[this.photoId]}render(){let o=0,h=0;return this.photoInfo.width<=this.photoInfo.height?(o=this.photoInfo.width/this.photoInfo.height*this.photoSize,h=this.photoSize):(o=this.photoSize,h=this.photoInfo.height/this.photoInfo.width*this.photoSize),t`
          <g>
            <rect
              x="${this.x}"
              y="${this.y}"
              width="${this.photoSize+4}"
              height="${this.photoSize+4}"
              fill="none"
              style="fill: white; stroke: ${this.photoInfo.color}; stroke-width: 2"
            />
            <image
              alt="Anne"
              x="${(this.photoSize+4-o)/2+this.x}"
              y="${(this.photoSize+4-h)/2+this.y}"
              width="${o}"
              height="${h}"
              href="${this.photoInfo.url}"
            />
          </g>
    `}}export{h as F};
