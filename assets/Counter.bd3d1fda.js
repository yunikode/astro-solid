import{t as l,d as p,c as $,g as r,i as c,r as v}from"./vendor.786e7115.js";const b=l('<div class="counter"><button>-</button><pre></pre><button>+</button></div>'),g=l('<div class="counter-message"></div>');function _({children:i}){const[e,o]=$(0),a=()=>o(e()+1),d=()=>o(e()-1);return[(()=>{const t=r(b),s=t.firstChild,n=s.nextSibling,u=n.nextSibling;return s.$$click=d,c(n,e,void 0,Array.prototype.slice.call(n.childNodes,0)),u.$$click=a,v(),t})(),(()=>{const t=r(g);return c(t,i,void 0,Array.prototype.slice.call(t.childNodes,0)),t})()]}p(["click"]);export{_ as default};
