import{S as R,i as j,s as B,M as L,D as Q,k as A,a as S,v as U,l as M,m as I,h as v,c as N,w as X,n as h,p as Y,b as T,J as k,x as Z,E as V,G as x,H as $,I as ee,f as F,t as H,y as te,a0 as se,K as P,a1 as ne,o as ae,a2 as oe}from"./index-4cb244a6.js";import{c as J,E as ie,a as q,b as z,C as W,p as G,d as le,e as re,r as ue}from"./Engine-ea4aba73.js";let E=0,K=.06;J.controls.subscribe(({cameraSpeed:e})=>{K=e});const he=e=>s=>{if(s.save(),e){const n=e.box.angle-E,c=n>Math.PI?e.box.angle-Math.PI*2-E:n<-Math.PI?e.box.angle+Math.PI*2-E:n;E=(E+c*K+Math.PI*2)%(Math.PI*2),s.translate(s.canvas.width/2,s.canvas.height/2),s.rotate(-E),s.translate(-e.box.x,-e.box.y)}return s},ce=e=>(e.restore(),e);function _e(e){let s,n,c,i,d,u,p,m,w,g,_,r,f,y;L(e[9]);const b=e[8].default,l=Q(b,e,e[7],null);return _=new ie({props:{input:e[0]}}),{c(){s=A("section"),n=A("canvas"),c=S(),i=A("canvas"),d=S(),u=A("canvas"),w=S(),l&&l.c(),g=S(),U(_.$$.fragment),this.h()},l(t){s=M(t,"SECTION",{class:!0});var a=I(s);n=M(a,"CANVAS",{id:!0,style:!0,class:!0}),I(n).forEach(v),c=N(a),i=M(a,"CANVAS",{width:!0,height:!0}),I(i).forEach(v),d=N(a),u=M(a,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),I(u).forEach(v),w=N(a),l&&l.l(a),a.forEach(v),g=N(t),X(_.$$.fragment,t),this.h()},h(){h(n,"id","background-canvas"),Y(n,"display","none"),h(n,"class","svelte-1s5t62m"),h(i,"width",e[2]),h(i,"height",e[3]),h(u,"id","network-canvas"),h(u,"width",p=e[2]/2.5),h(u,"height",m=e[3]/2.5),h(u,"class","svelte-1s5t62m"),h(s,"class","view svelte-1s5t62m")},m(t,a){T(t,s,a),k(s,n),k(s,c),k(s,i),e[10](i),k(s,d),k(s,u),k(s,w),l&&l.m(s,null),T(t,g,a),Z(_,t,a),r=!0,f||(y=[V(window,"keydown",W.onkeydown),V(window,"keyup",W.onkeyup),V(window,"resize",e[9])],f=!0)},p(t,[a]){(!r||a&4)&&h(i,"width",t[2]),(!r||a&8)&&h(i,"height",t[3]),(!r||a&4&&p!==(p=t[2]/2.5))&&h(u,"width",p),(!r||a&8&&m!==(m=t[3]/2.5))&&h(u,"height",m),l&&l.p&&(!r||a&128)&&x(l,b,t,t[7],r?ee(b,t[7],a,null):$(t[7]),null);const C={};a&1&&(C.input=t[0]),_.$set(C)},i(t){r||(F(l,t),F(_.$$.fragment,t),r=!0)},o(t){H(l,t),H(_.$$.fragment,t),r=!1},d(t){t&&v(s),e[10](null),l&&l.d(t),t&&v(g),te(_,t),f=!1,se(y)}}}function de(e,s,n){let c,i,d,u;P(e,q,o=>n(12,i=o)),P(e,z,o=>n(14,u=o));let{$$slots:p={},$$scope:m}=s,{debug:w=!1}=s,{input:g}=s;const{simulation:_,controls:r}=J;P(e,_,o=>n(13,d=o)),P(e,r,o=>n(11,c=o)),ne(r,c.showNetwork=w,c);let f,y,b;ae(()=>{q.set(f),z.set(i.getContext("2d")),t()});const l=o=>G(o,a,t),t=()=>d.destroyed?null:requestAnimationFrame(l),a=o=>{var D;return G(u,le({width:i.width,height:i.height}),he(d.carSpots[c.cameraFocus]),re(d.world,(D=d.carSpots[c.cameraFocus])==null?void 0:D.box,d.carSpots,{width:i.width,height:i.height}),ce,ue(c.showNetwork,o))};function C(){n(2,y=window.innerWidth),n(3,b=window.innerHeight)}function O(o){oe[o?"unshift":"push"](()=>{f=o,n(1,f)})}return e.$$set=o=>{"debug"in o&&n(6,w=o.debug),"input"in o&&n(0,g=o.input),"$$scope"in o&&n(7,m=o.$$scope)},[g,f,y,b,_,r,w,m,p,C,O]}class we extends R{constructor(s){super(),j(this,s,de,_e,B,{debug:6,input:0})}}export{we as T};
