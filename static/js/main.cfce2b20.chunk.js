(this.webpackJsonpinfinitescroll=this.webpackJsonpinfinitescroll||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(8),r=n.n(o),s=(n(20),n(21),n(14)),l=n(35),u=n(36),a=n(9),d=n(1),b=function(t){var e=f(),n=Object(c.useRef)([]),i=Object(c.useState)([0,1,2,3,4,5,6]),o=Object(s.a)(i,2),r=o[0],l=o[1],u=Object(a.a)(100,(function(t){var e=window.pageXOffset+window.innerWidth;console.log("items",300*r[6]);var n=Math.floor(e/300);l((function(t){return[n-6,n-5,n-4,n-3,n-2,n-1,n]}))}));return Object(c.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[u]),Object(d.jsx)("div",{style:{width:"".concat(300*Math.floor(r[r.length-1]/r.length)*r.length,"px")},className:e.wrapper,children:r.map((function(t,c){return Object(d.jsxs)("div",{style:{position:"absolute",left:"".concat(300*t,"px"),top:"0"},ref:function(t){return n.current[c]=t},children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("div",{className:e.mockup})]},t)}))})},f=Object(l.a)((function(t){return Object(u.a)({screen:{width:"100vw",height:"100vh"},mockup:{boxSizing:"border-box",width:"300px",height:"150px",background:"lightblue",border:"2px solid teal"},item:{display:"absolute",top:"0"}})}));var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),j()}},[[25,1,2]]]);
//# sourceMappingURL=main.cfce2b20.chunk.js.map