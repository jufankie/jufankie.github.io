import{r as t,s as e,p as i}from"./lit-element-9a022b11.js";import{C as o}from"./ChildNotFoundError-35e8e684.js";function n(t,e,i,o=20,s=0){let a=[];if(s>=o)return a;const r=t=>{const a=t.assignedNodes().filter((t=>1===t.nodeType));return a.length>0?n(a[0].parentElement,e,i,o,s+1):[]},l=Array.from(t.children||[]);for(const t of l)e(t)||(i(t)&&a.push(t),null!=t.shadowRoot?a.push(...n(t.shadowRoot,e,i,o,s+1)):"SLOT"===t.tagName?a.push(...r(t)):a.push(...n(t,e,i,o,s+1)));return a}function s(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function a(t){return"-1"!==t.getAttribute("tabindex")&&!s(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}const r=new Map;const l=document.createElement("template");l.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class d extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const t=this.attachShadow({mode:"open"});t.appendChild(l.content.cloneNode(!0)),this.$backup=t.querySelector("#backup"),this.$start=t.querySelector("#start"),this.$end=t.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return n(this,s,a)}trapFocus(t){if(this.inactive)return;let e=this.getFocusableElements();e.length>0?(t?e[e.length-1].focus():e[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){!function(t,e,i){const o=r.get(i);null!=o&&window.clearTimeout(o),r.set(i,window.setTimeout((()=>{t(),r.delete(i)}),e))}((()=>{this.focused!==t&&(this._focused=t,this.render())}),0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}function c(t){return Number(t.getAttribute("data-dialog-count"))||0}function h(t,e){t.setAttribute("data-dialog-count",e.toString())}function u(t=document.activeElement){return null!=t&&null!=t.shadowRoot&&null!=t.shadowRoot.activeElement?u(t.shadowRoot.activeElement):t}window.customElements.define("focus-trap",d);const g=document.createElement("template");g.innerHTML='\n  <style>*{box-sizing:border-box}:host{padding:var(--dialog-container-padding,5vw 24px);z-index:var(--dialog-z-index,12345678);outline:none}#backdrop,:host{position:fixed;top:0;left:0;bottom:0;right:0}:host,:host([center]) #dialog{overflow-x:var(--dialog-overflow-x,hidden);overflow-y:var(--dialog-overflow-y,auto);overscroll-behavior:contain;-webkit-overflow-scrolling:touch}:host([center]){display:flex;align-items:center;justify-content:center;overflow:hidden}:host([center]) #dialog{max-height:var(--dialog-max-height,100%)}:host(:not(:defined)),:host(:not([open])){display:none}#backdrop{background:var(--dialog-backdrop-bg,rgba(0,0,0,.6));animation:fadeIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);z-index:-1}#dialog{animation:scaleIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);border-radius:var(--dialog-border-radius,12px);box-shadow:var(--dialog-box-shadow,0 2px 10px -5px rgba(0,0,0,.6));max-width:var(--dialog-max-width,700px);width:var(--dialog-width,100%);padding:var(--dialog-padding,24px);max-height:var(--dialog-max-height,unset);height:var(--dialog-height,auto);color:var(--dialog-color,currentColor);background:var(--dialog-bg,#fff);z-index:1;position:relative;display:flex;flex-direction:column;margin:0 auto;border:none}::slotted(article),article{flex-grow:1;overflow-y:auto;-webkit-overflow-scrolling:touch}::slotted(footer),::slotted(header),footer,header{flex-shrink:0}@keyframes scaleIn{0%{transform:scale(.9) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}</style>\n  <div id="backdrop" part="backdrop"></div>\n  <focus-trap id="dialog" part="dialog">\n    <slot></slot>\n  </focus-trap>\n';class m extends HTMLElement{constructor(){super(),this.$scrollContainer=document.documentElement,this.$previousActiveElement=null;const t=this.attachShadow({mode:"open"});t.appendChild(g.content.cloneNode(!0)),this.$dialog=t.querySelector("#dialog"),this.$backdrop=t.querySelector("#backdrop"),this.onBackdropClick=this.onBackdropClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.setAttribute("aria-modal","true"),this.$dialog.setAttribute("role","alertdialog")}static get observedAttributes(){return["open","center"]}get open(){return this.hasAttribute("open")}set open(t){t?this.setAttribute("open",""):this.removeAttribute("open")}get center(){return this.hasAttribute("center")}set center(t){t?this.setAttribute("center",""):this.removeAttribute("center")}connectedCallback(){this.$backdrop.addEventListener("click",this.onBackdropClick)}disconnectedCallback(){this.$backdrop.removeEventListener("click",this.onBackdropClick),this.open&&this.didClose()}show(){this.open=!0}close(t){this.result=t,this.open=!1}onBackdropClick(){this.assertClosing()&&this.close()}onKeyDown(t){if("Escape"===t.code)this.assertClosing()&&(this.close(),t.stopImmediatePropagation())}assertClosing(){return this.dispatchEvent(new CustomEvent("closing",{cancelable:!0}))}didOpen(){this.$previousActiveElement=u(document.activeElement),requestAnimationFrame((()=>{this.$dialog.focusFirstElement()})),this.tabIndex=0,this.$scrollContainer.style.overflow="hidden",this.addEventListener("keydown",this.onKeyDown,{capture:!0,passive:!0}),h(this.$scrollContainer,c(this.$scrollContainer)+1),this.dispatchEvent(new CustomEvent("open"))}didClose(){this.removeEventListener("keydown",this.onKeyDown,{capture:!0}),h(this.$scrollContainer,Math.max(0,c(this.$scrollContainer)-1)),c(this.$scrollContainer)<=0&&(this.$scrollContainer.style.overflow=""),this.tabIndex=-1,null!=this.$previousActiveElement&&(this.$previousActiveElement.focus(),this.$previousActiveElement=null),this.dispatchEvent(new CustomEvent("close",{detail:this.result}))}attributeChangedCallback(t,e,i){if("open"===t)this.open?this.didOpen():this.didClose()}}customElements.define("web-dialog",m);const p=t`
  web-dialog {
    --dialog-width: 500px;
    --dialog-max-width: calc(80 * 1vw);
    --dialog-max-height: calc(var(--vh, 1vh) * 80);
    --dialog-padding: min(20px, 4vmin);
    --dialog-border-radius: min(30px, 4vmin);
    font-size: min(1em, 5vmin);
  }

  h1 {
    margin: 0 0 0 0;
    font-size: 1.5em;
  }

  header {
    margin-bottom: 10px;
  }

  footer {
    margin-top: 10px;
  }

  article {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  p {
    flex-grow: 1;
  }

  button {
    font-size: 1em;
  }
`;class f extends e{static get properties(){return{text:{state:!0,attribute:!1}}}static get styles(){return p}constructor(){super(),this.text=void 0,this.text=i``}get _dialog(){const t=this.renderRoot.querySelector("#dialog");if(null===t)throw new o("dialog","GameOverDialog");return t}show(t){return this.text=t,new Promise((t=>{this._dialog.addEventListener("close",(e=>{t(e.detail)}),{once:!0}),this._dialog.show()}))}handleAgainButton(){this._dialog.close("again")}handleBackToMenuButton(){this._dialog.close("stop")}render(){return i` <web-dialog id="dialog" center @closing="${t=>t.preventDefault()}">
                    <header>
                        <h1>Game over</h1>
                    </header>
                    <article>
                        <div>
                            ${this.text}
                        </div>
                        <img style="float: right; width: 200px; max-width: calc(25 * 1vmin); height: auto; " alt="Anne" src="${f.gameOverImage}"></img>
                    </article>
                    <footer>
                        <button style="float: right;" @click="${()=>this.handleAgainButton()}">Speel nog een keer</button>
                        <span style="float: right;">&nbsp;</span>
                        <button style="float: right;" @click="${()=>this.handleBackToMenuButton()}">Nieuw spel kiezen</button>
                    </footer>
                </web-dialog> `}}f.gameOverImage=new URL(new URL("../assets/Mompitz Anne-c8e32aa4.png",import.meta.url).href,import.meta.url),customElements.define("gameover-dialog",f);customElements.define("message-dialog",class extends e{static get properties(){return{dialogTitle:{type:String},text:{attribute:!1},imageUrl:{attribute:!1}}}static get styles(){return p}constructor(){super(),this.dialogTitle=void 0,this.text=void 0,this.imageUrl=void 0,this.text=i``,this.dialogTitle="",this.imageUrl=new URL(new URL("../assets/Mompitz Otto-031ac535.png",import.meta.url).href,import.meta.url)}get _dialog(){const t=this.renderRoot.querySelector("#dialog");if(null===t)throw new o("dialog","MessageDialog");return t}show(t,e){return this.text=e,this.dialogTitle=t,new Promise((t=>{this._dialog.addEventListener("close",(e=>{t(e.detail)}),{once:!0}),this._dialog.show()}))}handleOkButton(){this._dialog.close("Ok")}render(){return i` <web-dialog id="dialog" center @closing="${t=>t.preventDefault()}">
                    <header>
                        <h1>${this.dialogTitle}</h1>
                    </header>
                    <article>
                        <div>
                            ${this.text}
                        </div>
                        <img style="float: right; width: 200px; max-width: calc(25 * 1vmin); height: auto; " alt="Mompitz figuurtje" src="${this.imageUrl}"></img>
                    </article>
                    <footer>
                        <button style="float: right;" @click="${()=>this.handleOkButton()}">Ok</button>
                    </footer>
                </web-dialog> `}});
