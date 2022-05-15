import{s as t,p as i,r as e,y as s}from"./lit-element-9a022b11.js";import"./NumberLine-505affe2.js";import{r as o}from"./Randomizer-a9177b86.js";import"./ProgressBar-3d7ba932.js";import"./ScoreBox-75691a05.js";import"./MessageDialog-db2c0757.js";import{C as h}from"./ChildNotFoundError-35e8e684.js";import"./property-8b64881f.js";const r={Anne:{url:new URL(new URL("../assets/Mompitz Anne-c8e32aa4.png",import.meta.url).href,import.meta.url),width:434,height:449,color:"#97cdb4"},Jan:{url:new URL(new URL("../assets/Mompitz Jan-500-bd20af4a.png",import.meta.url).href,import.meta.url),width:500,height:479,color:"#f6d435"},Johannes:{url:new URL(new URL("../assets/Mompitz Johannes-a7db58a8.png",import.meta.url).href,import.meta.url),width:469,height:556,color:"#f2444e"},Frank:{url:new URL(new URL("../assets/Mompitz Frank-7c1a0d32.png",import.meta.url).href,import.meta.url),width:584,height:579,color:"#9c6ccf"},Disabled:{url:new URL(new URL("../assets/cross-out-black-500-a014d4c1.png",import.meta.url).href,import.meta.url),width:500,height:459,color:"#000000"}};class a extends t{static get properties(){return{photoId:{type:String},label:{type:Number},disabled:{type:Boolean}}}static getFrameColor(t){return r[t].color}constructor(){super(),this.photoId=void 0,this.label=void 0,this.disabled=void 0,this.photoId="Frank",this.label=10,this.disabled=!1}get photoInfo(){return this.disabled?r.Disabled:r[this.photoId]}get width(){return this.getBoundingClientRect().width/window.innerWidth*100}render(){let t=0,e=0;return this.photoInfo.width<=this.photoInfo.height?(t=this.photoInfo.width/this.photoInfo.height*38,e=38):(t=38,e=this.photoInfo.height/this.photoInfo.width*38),i`
      <div>
        <svg
          style="position:absolute; width: 100%; height: 1px; padding-bottom: calc(100% - 1px); overflow: visible;"
          viewBox="0 0 44 44"
          preserveAspectRatio="xMidYMin slice"
        >
          <g>
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              fill="none"
              style="fill: white; stroke: ${this.photoInfo.color}; stroke-width: 2"
            />
            <image
              alt="Anne"
              x="${(42-t)/2+1}"
              y="${(42-e)/2+1}"
              width="${t}"
              height="${e}"
              href="${this.photoInfo.url}"
            />
          </g>
        </svg>
      </div>
    `}}customElements.define("framed-photo",a);customElements.define("number-line-hanging-photos",class extends t{static get properties(){return{show10TickMarks:{type:Boolean},show5TickMarks:{type:Boolean},show1TickMarks:{type:Boolean},showAll10Numbers:{type:Boolean},minimum:{type:Number},maximum:{type:Number},photoPositions:{type:Array},disabledPositions:{type:Array}}}static get styles(){return e``}constructor(){super(),this.show1TickMarks=void 0,this.show5TickMarks=void 0,this.show10TickMarks=void 0,this.showAll10Numbers=void 0,this.minimum=void 0,this.maximum=void 0,this.margin=void 0,this.lineWidth=void 0,this.photoPositions=void 0,this.disabledPositions=void 0,this.photoMetaData=void 0,this.minimum=0,this.maximum=100,this.margin=15,this.lineWidth=1e3,this.show1TickMarks=!1,this.show5TickMarks=!1,this.show10TickMarks=!0,this.showAll10Numbers=!1,this.photoPositions=[12,18,3,2,56,38],this.disabledPositions=[],this.photoMetaData=[],this.calcPhotoMetaData()}minDistance(){return(this.maximum-this.minimum)/95*4}get width(){return this.getBoundingClientRect().width/window.innerWidth*100}connectedCallback(){super.connectedCallback(),this.calcPhotoMetaData()}shouldUpdate(t){return t.has("photoPositions")&&this.calcPhotoMetaData(),!0}calcPhotoMetaData(){let t=["Frank","Anne","Johannes","Jan"];this.photoMetaData=[],this.photoPositions.sort(((t,i)=>t-i)),this.photoPositions.forEach(((i,e)=>{const s=o(0,t.length-1);0===e||i-this.photoPositions[e-1]>this.minDistance()?this.photoMetaData.push({position:i,verticalDistance:"low",photoId:t[s]}):"low"===this.photoMetaData[e-1].verticalDistance?this.photoMetaData.push({position:i,verticalDistance:"high",photoId:t[s]}):this.photoMetaData.push({position:i,verticalDistance:"low",photoId:t[s]}),t.splice(s,1),0===t.length&&(t=["Frank","Anne","Johannes","Jan"])}))}translatePosition(t){return.95*(((t-this.minimum)/(this.maximum-this.minimum)*this.lineWidth+this.margin-1)/(this.lineWidth+2*this.margin))*this.width+.025*this.width}handlePhotoClicked(t){if(!this.disabledPositions.some((i=>i===t))){const i=new CustomEvent("photo-clicked",{detail:{position:t}});this.dispatchEvent(i)}}translateVerticalDistance(t){const i={lineHeight:0,viewBoxHeight:0};return"low"===t?(i.lineHeight=.08*this.width,i.viewBoxHeight=81.6):(i.lineHeight=.03*this.width,i.viewBoxHeight=.6*51),i}renderLine(t,i,e){return s`
            <svg style="position:absolute; 
                        width: ${.05*this.width}vw; 
                        height: ${this.translateVerticalDistance(i).lineHeight}vw; 
                        left: ${this.translatePosition(t)}vw; 
                        top: 0;" 
                viewBox="0 0 51 ${this.translateVerticalDistance(i).viewBoxHeight}">
                <line
                x1 = "1"
                x2 = "1"
                y1 = "0"
                y2 = "${this.translateVerticalDistance(i).viewBoxHeight}"
                style="stroke: ${e}; stroke-width: 2"
                />
            </svg>
        `}renderFramedPhoto(t,e,s){return i`
      <framed-photo
        style="position: absolute; 
                                         width: ${.04*this.width}vw; 
                                         height: ${.04*this.width}vw; 
                                         left:${this.translatePosition(t)-.02*this.width}vw; 
                                         top: ${this.translateVerticalDistance(e).lineHeight}vw;"
        photoId="${s}"
        ?disabled="${this.disabledPositions.some((i=>i===t))}"
        @click="${()=>{this.handlePhotoClicked(t)}}"
      >
      </framed-photo>
    `}render(){return i`
      <number-line
        ?showAll10Numbers=${this.showAll10Numbers}
        ?show10TickMarks=${this.show10TickMarks}
        ?show5TickMarks=${this.show5TickMarks}
        ?show1TickMarks=${this.show1TickMarks}
        minimum=${this.minimum}
        maximum=${this.maximum}
        style="position:absolute; left: ${.025*this.width}vw; top: 0; width:${.95*this.width}vw;"
      ></number-line>
      ${this.photoMetaData.map((t=>this.renderLine(t.position,t.verticalDistance,a.getFrameColor(t.photoId))))}
      ${this.photoMetaData.map((t=>this.renderFramedPhoto(t.position,t.verticalDistance,t.photoId)))}
    `}});customElements.define("click-correct-photo-on-numberline-app",class extends t{static get properties(){return{numberToClick:{type:Number},show10TickMarks:{type:Boolean},show5TickMarks:{type:Boolean},show1TickMarks:{type:Boolean},_showAll10Numbers:{type:Boolean,state:!0},minimum:{type:Number},maximum:{type:Number},positions:{type:Array},disabledPositions:{type:Array},_numberOk:{type:Number,state:!0},_numberNok:{type:Number,state:!0}}}constructor(){super(),this.numberToClick=void 0,this.minimum=void 0,this.maximum=void 0,this.show10TickMarks=void 0,this.show5TickMarks=void 0,this.show1TickMarks=void 0,this._showAll10Numbers=void 0,this.positions=void 0,this.disabledPositions=void 0,this._numberOk=void 0,this._numberNok=void 0,this.minimum=0,this.maximum=100,this.show1TickMarks=!1,this.show5TickMarks=!1,this.show10TickMarks=!0,this._showAll10Numbers=!1,this.numberToClick=8,this.positions=[],this.disabledPositions=[],this._numberNok=0,this._numberOk=0,this.parseUrl()}parseUrl(){const t=new URLSearchParams(window.location.search);if(t.has("minimum")){const i=parseInt(t.get("minimum")||"",10);i%10==0&&(this.minimum=i)}if(t.has("maximum")){const i=parseInt(t.get("maximum")||"",10);i%10==0&&(this.maximum=i)}this.numberToClick=Math.floor((this.maximum+this.minimum)/2),t.has("show10TickMarks")?this.show10TickMarks=!0:t.has("hide10TickMarks")&&(this.show10TickMarks=!1),t.has("show5TickMarks")?this.show5TickMarks=!0:t.has("hide5TickMarks")&&(this.show5TickMarks=!1),t.has("show1TickMarks")?this.show1TickMarks=!0:t.has("hide1TickMarks")&&(this.show1TickMarks=!1),t.has("showAll10Numbers")?this._showAll10Numbers=!0:t.has("hideAll10Numbers")&&(this._showAll10Numbers=!1)}handlePhotoClicked(t){t.detail.position!==this.numberToClick?(this.disabledPositions=this.disabledPositions.concat(t.detail.position),this._numberNok+=1):(this._numberOk+=1,this.startNewRound())}async startNewGame(){this._numberNok=0,this._numberOk=0,this._progressBar.restart(),this.startNewRound()}startNewRound(){for(this.disabledPositions=[],this.numberToClick=o(this.minimum,this.maximum),this.positions=[this.numberToClick];this.positions.length<4;){const t=o(this.minimum,this.maximum);this.positions.some((i=>i===t))||this.positions.push(t)}}get _scoreBox(){const t=this.renderRoot.querySelector("#scoreBox");if(null===t)throw new h("scoreBox","ClickTheRightPhotoOnNumberLineApp");return t}get _progressBar(){const t=this.renderRoot.querySelector("#progressBar");if(null===t)throw new h("progressBar","ClickTheRightPhotoOnNumberLineApp");return t}get _numberLine(){const t=this.renderRoot.querySelector("#numberLine");if(null===t)throw new h("numberLine","ClickTheRightPhotoOnNumberLineApp");return t}get _messageDialog(){const t=this.renderRoot.querySelector("#messageDialog");if(null===t)throw new h("messageDialog","ClickTheRightPhotoOnNumberLineApp");return t}get _gameOverDialog(){const t=this.renderRoot.querySelector("#gameOverDialog");if(null===t)throw new h("gameOverDialog","ClickTheRightPhotoOnNumberLineApp");return t}async firstUpdated(){await this.updateComplete,await this.showWelcomeMessage(),this._progressBar.restart(),this.startNewGame()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this._progressBar.updateComplete,await this._numberLine.updateComplete,await this._scoreBox.updateComplete,await this._gameOverDialog.updateComplete,await this._messageDialog.updateComplete,t}async showWelcomeMessage(){return this._messageDialog.show("De juiste foto kiezen",i`<p>Kies de juiste foto op de getallenlijn.</p>
        <p>Dit spel kun je op de telefoon het beste horizontaal spelen.</p>`)}handleTimeUp(){this._gameOverDialog.show(i` <p>
            Je hebt ${0===this._numberOk?"geen":this._numberOk}
            ${1===this._numberOk?"foto":"foto's"} goed aanklikt in 1
            minuut.
          </p>
          <p>
            Je hebt ${0===this._numberNok?"geen":this._numberNok}
            ${1===this._numberNok?"fout":"fouten"} gemaakt.
          </p>`).then((t=>{"again"===t?this.startNewGame():window.location.href="index.html"}))}render(){return i`
      <progress-bar
        style="--progress-bar-gametime: 60s;"
        id="progressBar"
        @timeUp="${()=>this.handleTimeUp()}"
      ></progress-bar>
      <score-box
        id="scoreBox"
        numberOk="${this._numberOk}"
        numberNok="${this._numberNok}"
        style="width: 12vmin;
                              --scoreBoxWidth: 12vmin; 
                              position: absolute; 
                              top: calc(1em + 22px); 
                              right: 1em;"
      >
      </score-box>
      <div style="text-align: center; font-size: 8vw;">
        ${this.numberToClick}
      </div>
      <number-line-hanging-photos
        id="numberLine"
        ?show10TickMarks=${this.show10TickMarks}
        ?show5TickMarks=${this.show5TickMarks}
        ?show1TickMarks=${this.show1TickMarks}
        ?showAll10Numbers=${this._showAll10Numbers}
        minimum=${this.minimum}
        maximum=${this.maximum}
        width="95vw"
        .photoPositions="${this.positions}"
        .disabledPositions="${this.disabledPositions}"
        @photo-clicked="${t=>this.handlePhotoClicked(t)}"
        style="position:absolute; 
                    left: 2.5vw; 
                    top: 30vh; 
                    width:95vw;"
      >
      </number-line-hanging-photos>
      <message-dialog id="messageDialog"></message-dialog>
      <gameover-dialog id="gameOverDialog"></gameover-dialog>
    `}});
