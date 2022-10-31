import{s as i,p as t,r as s,y as e}from"./lit-element-9a022b11.js";import"./NumberLine-505affe2.js";import{_ as o,e as h,n as a}from"./property-8b64881f.js";import{t as r}from"./state-47f777cb.js";import{F as n}from"./FramedPhotoSVG-47620243.js";import{r as m}from"./Randomizer-227ccb40.js";import"./ProgressBar-3d7ba932.js";import"./ScoreBox-75691a05.js";import"./MessageDialog-17909aa3.js";import{C as l}from"./ChildNotFoundError-35e8e684.js";let d=o([a("framed-photo")],(function(i,s){return{F:class extends s{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[h({type:String})],key:"photoId",value:()=>"Frank"},{kind:"field",decorators:[h({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[r()],key:"framedPhoto",value:()=>new n},{kind:"method",key:"willUpdate",value:function(i){i.has("photoId")&&(this.framedPhoto.photoId=this.photoId,this.requestUpdate())}},{kind:"method",static:!0,key:"getFrameColor",value:function(i){return n.getFrameColor(i)}},{kind:"method",key:"render",value:function(){return t`
      <div>
        <svg
          style="position:absolute; width: 100%; height: 1px; padding-bottom: calc(100% - 1px); overflow: visible;"
          viewBox="0 0 44 44"
          preserveAspectRatio="xMidYMin slice"
        >
          ${this.framedPhoto.render()}
        </svg>
      </div>
    `}}]}}),i);customElements.define("number-line-hanging-photos",class extends i{static get properties(){return{show10TickMarks:{type:Boolean},show5TickMarks:{type:Boolean},show1TickMarks:{type:Boolean},showAll10Numbers:{type:Boolean},minimum:{type:Number},maximum:{type:Number},photoPositions:{type:Array},disabledPositions:{type:Array}}}static get styles(){return s``}constructor(){super(),this.show1TickMarks=void 0,this.show5TickMarks=void 0,this.show10TickMarks=void 0,this.showAll10Numbers=void 0,this.minimum=void 0,this.maximum=void 0,this.margin=void 0,this.lineWidth=void 0,this.photoPositions=void 0,this.disabledPositions=void 0,this.photoMetaData=void 0,this.minimum=0,this.maximum=100,this.margin=15,this.lineWidth=1e3,this.show1TickMarks=!1,this.show5TickMarks=!1,this.show10TickMarks=!0,this.showAll10Numbers=!1,this.photoPositions=[12,18,3,2,56,38],this.disabledPositions=[],this.photoMetaData=[],this.calcPhotoMetaData()}minDistance(){return(this.maximum-this.minimum)/95*4}get width(){return this.getBoundingClientRect().width/window.innerWidth*100}connectedCallback(){super.connectedCallback(),this.calcPhotoMetaData()}shouldUpdate(i){return i.has("photoPositions")&&this.calcPhotoMetaData(),!0}calcPhotoMetaData(){let i=["Frank","Anne","Johannes","Jan"];this.photoMetaData=[],this.photoPositions.sort(((i,t)=>i-t)),this.photoPositions.forEach(((t,s)=>{const e=m(0,i.length-1);0===s||t-this.photoPositions[s-1]>this.minDistance()?this.photoMetaData.push({position:t,verticalDistance:"low",photoId:i[e]}):"low"===this.photoMetaData[s-1].verticalDistance?this.photoMetaData.push({position:t,verticalDistance:"high",photoId:i[e]}):this.photoMetaData.push({position:t,verticalDistance:"low",photoId:i[e]}),i.splice(e,1),0===i.length&&(i=["Frank","Anne","Johannes","Jan"])}))}translatePosition(i){return.95*(((i-this.minimum)/(this.maximum-this.minimum)*this.lineWidth+this.margin-1)/(this.lineWidth+2*this.margin))*this.width+.025*this.width}handlePhotoClicked(i){if(!this.disabledPositions.some((t=>t===i))){const t=new CustomEvent("photo-clicked",{detail:{position:i}});this.dispatchEvent(t)}}translateVerticalDistance(i){const t={lineHeight:0,viewBoxHeight:0};return"low"===i?(t.lineHeight=.08*this.width,t.viewBoxHeight=81.6):(t.lineHeight=.03*this.width,t.viewBoxHeight=.6*51),t}renderLine(i,t,s){return e`
            <svg style="position:absolute; 
                        width: ${.05*this.width}vw; 
                        height: ${this.translateVerticalDistance(t).lineHeight}vw; 
                        left: ${this.translatePosition(i)}vw; 
                        top: 0;" 
                viewBox="0 0 51 ${this.translateVerticalDistance(t).viewBoxHeight}">
                <line
                x1 = "1"
                x2 = "1"
                y1 = "0"
                y2 = "${this.translateVerticalDistance(t).viewBoxHeight}"
                style="stroke: ${s}; stroke-width: 2"
                />
            </svg>
        `}renderFramedPhoto(i,s,e){return t`
      <framed-photo
        style="position: absolute; 
                                         width: ${.04*this.width}vw; 
                                         height: ${.04*this.width}vw; 
                                         left:${this.translatePosition(i)-.02*this.width}vw; 
                                         top: ${this.translateVerticalDistance(s).lineHeight}vw;"
        photoId="${e}"
        ?disabled="${this.disabledPositions.some((t=>t===i))}"
        @click="${()=>{this.handlePhotoClicked(i)}}"
      >
      </framed-photo>
    `}render(){return t`
      <number-line
        ?showAll10Numbers=${this.showAll10Numbers}
        ?show10TickMarks=${this.show10TickMarks}
        ?show5TickMarks=${this.show5TickMarks}
        ?show1TickMarks=${this.show1TickMarks}
        minimum=${this.minimum}
        maximum=${this.maximum}
        style="position:absolute; left: ${.025*this.width}vw; top: 0; width:${.95*this.width}vw;"
      ></number-line>
      ${this.photoMetaData.map((i=>this.renderLine(i.position,i.verticalDistance,d.getFrameColor(i.photoId))))}
      ${this.photoMetaData.map((i=>this.renderFramedPhoto(i.position,i.verticalDistance,i.photoId)))}
    `}});customElements.define("click-correct-photo-on-numberline-app",class extends i{static get properties(){return{numberToClick:{type:Number},show10TickMarks:{type:Boolean},show5TickMarks:{type:Boolean},show1TickMarks:{type:Boolean},_showAll10Numbers:{type:Boolean,state:!0},minimum:{type:Number},maximum:{type:Number},positions:{type:Array},disabledPositions:{type:Array},_numberOk:{type:Number,state:!0},_numberNok:{type:Number,state:!0}}}constructor(){super(),this.numberToClick=void 0,this.minimum=void 0,this.maximum=void 0,this.show10TickMarks=void 0,this.show5TickMarks=void 0,this.show1TickMarks=void 0,this._showAll10Numbers=void 0,this.positions=void 0,this.disabledPositions=void 0,this._numberOk=void 0,this._numberNok=void 0,this.minimum=0,this.maximum=100,this.show1TickMarks=!1,this.show5TickMarks=!1,this.show10TickMarks=!0,this._showAll10Numbers=!1,this.numberToClick=8,this.positions=[],this.disabledPositions=[],this._numberNok=0,this._numberOk=0,this.parseUrl()}parseUrl(){const i=new URLSearchParams(window.location.search);if(i.has("minimum")){const t=parseInt(i.get("minimum")||"",10);t%10==0&&(this.minimum=t)}if(i.has("maximum")){const t=parseInt(i.get("maximum")||"",10);t%10==0&&(this.maximum=t)}this.numberToClick=Math.floor((this.maximum+this.minimum)/2),i.has("show10TickMarks")?this.show10TickMarks=!0:i.has("hide10TickMarks")&&(this.show10TickMarks=!1),i.has("show5TickMarks")?this.show5TickMarks=!0:i.has("hide5TickMarks")&&(this.show5TickMarks=!1),i.has("show1TickMarks")?this.show1TickMarks=!0:i.has("hide1TickMarks")&&(this.show1TickMarks=!1),i.has("showAll10Numbers")?this._showAll10Numbers=!0:i.has("hideAll10Numbers")&&(this._showAll10Numbers=!1)}handlePhotoClicked(i){i.detail.position!==this.numberToClick?(this.disabledPositions=this.disabledPositions.concat(i.detail.position),this._numberNok+=1):(this._numberOk+=1,this.startNewRound())}async startNewGame(){this._numberNok=0,this._numberOk=0,this._progressBar.restart(),this.startNewRound()}startNewRound(){for(this.disabledPositions=[],this.numberToClick=m(this.minimum,this.maximum),this.positions=[this.numberToClick];this.positions.length<4;){const i=m(this.minimum,this.maximum);this.positions.some((t=>t===i))||this.positions.push(i)}}get _scoreBox(){const i=this.renderRoot.querySelector("#scoreBox");if(null===i)throw new l("scoreBox","ClickTheRightPhotoOnNumberLineApp");return i}get _progressBar(){const i=this.renderRoot.querySelector("#progressBar");if(null===i)throw new l("progressBar","ClickTheRightPhotoOnNumberLineApp");return i}get _numberLine(){const i=this.renderRoot.querySelector("#numberLine");if(null===i)throw new l("numberLine","ClickTheRightPhotoOnNumberLineApp");return i}get _messageDialog(){const i=this.renderRoot.querySelector("#messageDialog");if(null===i)throw new l("messageDialog","ClickTheRightPhotoOnNumberLineApp");return i}get _gameOverDialog(){const i=this.renderRoot.querySelector("#gameOverDialog");if(null===i)throw new l("gameOverDialog","ClickTheRightPhotoOnNumberLineApp");return i}async firstUpdated(){await this.updateComplete,await this.showWelcomeMessage(),this._progressBar.restart(),this.startNewGame()}async getUpdateComplete(){const i=await super.getUpdateComplete();return await this._progressBar.updateComplete,await this._numberLine.updateComplete,await this._scoreBox.updateComplete,await this._gameOverDialog.updateComplete,await this._messageDialog.updateComplete,i}async showWelcomeMessage(){return this._messageDialog.show("De juiste foto kiezen",t`<p>Kies de juiste foto op de getallenlijn.</p>
        <p>Dit spel kun je op de telefoon het beste horizontaal spelen.</p>`)}handleTimeUp(){this._gameOverDialog.show(t` <p>
            Je hebt ${0===this._numberOk?"geen":this._numberOk}
            ${1===this._numberOk?"foto":"foto's"} goed aanklikt in 1
            minuut.
          </p>
          <p>
            Je hebt ${0===this._numberNok?"geen":this._numberNok}
            ${1===this._numberNok?"fout":"fouten"} gemaakt.
          </p>`).then((i=>{"again"===i?this.startNewGame():window.location.href="index.html"}))}render(){return t`
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
        @photo-clicked="${i=>this.handlePhotoClicked(i)}"
        style="position:absolute; 
                    left: 2.5vw; 
                    top: 30vh; 
                    width:95vw;"
      >
      </number-line-hanging-photos>
      <message-dialog id="messageDialog"></message-dialog>
      <gameover-dialog id="gameOverDialog"></gameover-dialog>
    `}});
