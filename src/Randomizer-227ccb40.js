function n(n,t){return Math.floor(Math.random()*(t-n+1))+n}function t(t){return t[n(0,t.length-1)]}function o(t){return t.splice(n(0,t.length-1),1)[0]}function r(n){for(let t=n.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[n[t],n[o]]=[n[o],n[t]]}}export{t as a,o as b,n as r,r as s};