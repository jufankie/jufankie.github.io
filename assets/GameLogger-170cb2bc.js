class s{constructor(s,e){this.mainCode=void 0,this.subCode=void 0,this.mainCode=s,this.subCode=e}logGameOver(){fetch(`https://counter.jufankie.nl/asdflog.php?game=${this.mainCode}${this.subCode}`,{method:"POST"})}setSubCode(s){this.subCode=s}}export{s as G};