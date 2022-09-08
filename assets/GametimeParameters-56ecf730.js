function e(e=60){const t=new URLSearchParams(window.location.search);let a=e;return t.has("time")&&(a=parseInt(t.get("time")||"",10),(!a||a<=0)&&(a=e)),a}export{e as P};
