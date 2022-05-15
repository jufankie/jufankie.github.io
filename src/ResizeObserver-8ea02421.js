const e=new ResizeObserver((e=>{e.forEach((e=>e.target.handleResize(e.contentRect)))}));function n(n){e.observe(n)}function t(n){e.unobserve(n)}export{n as a,t as r};
