import{j as I,x as c,a as l,c as H,R as O,_ as v,K as T,D as j,d as k,B as M,b as q,y as A}from"./q-fa358021.js";import{y as st}from"./q-fa358021.js";import{u as N,t as p,c as W,a as Q,C as S,D as U,R as B,b as K,l as V,d as z,r as F,e as Y,f as G}from"./q-e0e24239.js";const J=!1,X=!0,Z=()=>{const n=N();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const r=I("url");if(!r)throw new Error("Missing Qwik URL Env Data");const s=new URL(r),e=c({href:s.href,pathname:s.pathname,query:Object.fromEntries(s.searchParams.entries()),params:n.params}),u=c({path:p(s)}),t=c(W),o=c({headings:void 0,menu:void 0}),m=c({contents:void 0});return l(Q,o),l(S,m),l(U,t),l(B,e),l(K,u),H(O(()=>v(()=>Promise.resolve().then(()=>tt),void 0),"s_2Eo7WCpaqI8",[o,m,t,n,e,u])),T(j,{},"qY_0")},$=async({track:n})=>{const[r,s,e,u,t,o]=k(),m=M(""),{routes:C,menus:g,cacheModules:w,trailingSlash:_}=await v(()=>import("./q-01997f37.js"),["build/q-01997f37.js","build/q-fa358021.js"]),E=n(()=>o.path),a=new URL(E,t.href),d=a.pathname,y=V(C,g,w,d),R=J?u.response:z(a.href,!0),f=await y;if(f){const[D,P,x]=f,h=P,L=h[h.length-1];if(d.endsWith("/")){if(!_){a.pathname=d.slice(0,-1),o.path=p(a);return}}else if(_){a.pathname+="/",o.path=p(a);return}t.href=a.href,t.pathname=d,t.params={...D},t.query=Object.fromEntries(a.searchParams.entries()),r.headings=L.headings,r.menu=x,s.contents=q(h);const b=await R,i=F(b,t,h,m);Y.clear(),e.links=i.links,e.meta=i.meta,e.styles=i.styles,e.title=i.title,e.frontmatter=i.frontmatter,X&&G(window,o)}},tt=Object.freeze(Object.defineProperty({__proto__:null,s_TxCFOy819ag:Z,s_2Eo7WCpaqI8:$,_hW:A},Symbol.toStringTag,{value:"Module"}));export{st as _hW,$ as s_2Eo7WCpaqI8,Z as s_TxCFOy819ag};
