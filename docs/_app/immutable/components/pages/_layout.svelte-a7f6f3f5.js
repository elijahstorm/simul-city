import{S as E,i as B,s as L,k as b,l as $,m as I,h,n as g,C as G,b as v,D as T,E as U,F as ne,G as se,H as W,I as X,J as Y,f as p,t as y,K as oe,e as V,g as R,d as q,L as Z,w as j,a as D,x as z,c as N,M as k,y as C,N as x,O as ee,P as te,z as K,Q as re,q as ie,r as ae,u as ce,R as O,T as fe}from"../../chunks/index-cdbf168b.js";import{c as S}from"../../chunks/shared-23917130.js";import{g as w}from"../../chunks/navigation-dbfbfb45.js";import{p as ue,n as _e}from"../../chunks/stores-a0bf88da.js";function me(r){let e;return{c(){e=b("span"),this.h()},l(l){e=$(l,"SPAN",{class:!0}),I(e).forEach(h),this.h()},h(){g(e,"class","burger burger-swipe svelte-13owcnr"),G(e,"open",r[0])},m(l,t){v(l,e,t)},p(l,[t]){t&1&&G(e,"open",l[0])},i:T,o:T,d(l){l&&h(e)}}}function de(r,e,l){let{open:t=!0}=e;return r.$$set=n=>{"open"in n&&l(0,t=n.open)},[t]}class he extends E{constructor(e){super(),B(this,e,de,me,L,{open:0})}}function pe(r){let e,l,t,n;const i=r[2].default,o=U(i,r,r[1],null);return{c(){e=b("button"),o&&o.c(),this.h()},l(a){e=$(a,"BUTTON",{class:!0});var s=I(e);o&&o.l(s),s.forEach(h),this.h()},h(){g(e,"class","svelte-hlfn2z")},m(a,s){v(a,e,s),o&&o.m(e,null),l=!0,t||(n=ne(e,"click",function(){se(r[0])&&r[0].apply(this,arguments)}),t=!0)},p(a,[s]){r=a,o&&o.p&&(!l||s&2)&&W(o,i,r,r[1],l?Y(i,r[1],s,null):X(r[1]),null)},i(a){l||(p(o,a),l=!0)},o(a){y(o,a),l=!1},d(a){a&&h(e),o&&o.d(a),t=!1,n()}}}function ge(r,e,l){let{$$slots:t={},$$scope:n}=e,{callback:i}=e;return r.$$set=o=>{"callback"in o&&l(0,i=o.callback),"$$scope"in o&&l(1,n=o.$$scope)},[i,n,t]}class le extends E{constructor(e){super(),B(this,e,ge,pe,L,{callback:0})}}function ye(r){const e=r-1;return e*e*e+1}function A(r,{delay:e=0,duration:l=400,easing:t=oe}={}){const n=+getComputedStyle(r).opacity;return{delay:e,duration:l,easing:t,css:i=>`opacity: ${i*n}`}}function F(r,{delay:e=0,duration:l=400,easing:t=ye,x:n=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(r),s=+a.opacity,c=a.transform==="none"?"":a.transform,m=s*(1-o);return{delay:e,duration:l,easing:t,css:(f,_)=>`
			transform: ${c} translate(${(1-f)*n}px, ${(1-f)*i}px);
			opacity: ${s-m*_}`}}function M(r,e,l){const t=r.slice();return t[9]=e[l],t[11]=l,t}function P(r){let e,l,t,n,i,o,a;t=new le({props:{callback:r[4],$$slots:{default:[be]},$$scope:{ctx:r}}});let s=!r[0]&&H(r);return{c(){e=b("section"),l=b("div"),j(t.$$.fragment),n=D(),s&&s.c(),this.h()},l(c){e=$(c,"SECTION",{class:!0});var m=I(e);l=$(m,"DIV",{class:!0});var f=I(l);z(t.$$.fragment,f),f.forEach(h),n=N(m),s&&s.l(m),m.forEach(h),this.h()},h(){g(l,"class","burger svelte-9y2py3"),g(e,"class","svelte-9y2py3")},m(c,m){v(c,e,m),k(e,l),C(t,l,null),k(e,n),s&&s.m(e,null),a=!0},p(c,m){const f={};m&4097&&(f.$$scope={dirty:m,ctx:c}),t.$set(f),c[0]?s&&(R(),y(s,1,1,()=>{s=null}),q()):s?(s.p(c,m),m&1&&p(s,1)):(s=H(c),s.c(),p(s,1),s.m(e,null))},i(c){a||(p(t.$$.fragment,c),p(s),x(()=>{o&&o.end(1),i=ee(e,A,{}),i.start()}),a=!0)},o(c){y(t.$$.fragment,c),y(s),i&&i.invalidate(),o=te(e,A,{}),a=!1},d(c){c&&h(e),K(t),s&&s.d(),c&&o&&o.end()}}}function be(r){let e,l;return e=new he({props:{open:!r[0]}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){C(e,t,n),l=!0},p(t,n){const i={};n&1&&(i.open=!t[0]),e.$set(i)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function H(r){let e,l,t=r[1],n=[];for(let o=0;o<t.length;o+=1)n[o]=J(M(r,t,o));const i=o=>y(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=V()},l(o){for(let a=0;a<n.length;a+=1)n[a].l(o);e=V()},m(o,a){for(let s=0;s<n.length;s+=1)n[s].m(o,a);v(o,e,a),l=!0},p(o,a){if(a&10){t=o[1];let s;for(s=0;s<t.length;s+=1){const c=M(o,t,s);n[s]?(n[s].p(c,a),p(n[s],1)):(n[s]=J(c),n[s].c(),p(n[s],1),n[s].m(e.parentNode,e))}for(R(),s=t.length;s<n.length;s+=1)i(s);q()}},i(o){if(!l){for(let a=0;a<t.length;a+=1)p(n[a]);l=!0}},o(o){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)y(n[a]);l=!1},d(o){re(n,o),o&&h(e)}}}function $e(r){let e=r[9].text+"",l;return{c(){l=ie(e)},l(t){l=ae(t,e)},m(t,n){v(t,l,n)},p(t,n){n&2&&e!==(e=t[9].text+"")&&ce(l,e)},d(t){t&&h(l)}}}function J(r){let e,l,t,n,i,o;function a(){return r[7](r[9])}return l=new le({props:{callback:a,$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){e=b("div"),j(l.$$.fragment),t=D()},l(s){e=$(s,"DIV",{});var c=I(e);z(l.$$.fragment,c),t=N(c),c.forEach(h)},m(s,c){v(s,e,c),C(l,e,null),k(e,t),o=!0},p(s,c){r=s;const m={};c&2&&(m.callback=a),c&4098&&(m.$$scope={dirty:c,ctx:r}),l.$set(m)},i(s){o||(p(l.$$.fragment,s),x(()=>{i&&i.end(1),n=ee(e,F,{y:-100,delay:40*r[11]}),n.start()}),o=!0)},o(s){y(l.$$.fragment,s),n&&n.invalidate(),i=te(e,F,{y:-100,x:100,delay:20*r[11]}),o=!1},d(s){s&&h(e),K(l),s&&i&&i.end()}}}function ve(r){let e,l,t=r[2].routeId!=""&&P(r);return{c(){t&&t.c(),e=V()},l(n){t&&t.l(n),e=V()},m(n,i){t&&t.m(n,i),v(n,e,i),l=!0},p(n,[i]){n[2].routeId!=""?t?(t.p(n,i),i&4&&p(t,1)):(t=P(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(R(),y(t,1,1,()=>{t=null}),q())},i(n){l||(p(t),l=!0)},o(n){y(t),l=!1},d(n){t&&t.d(n),n&&h(e)}}}function ke(r,e,l){let t,n,i;Z(r,ue,_=>l(2,i=_));const o=[{text:"Go back to introduction",action:()=>{w(S)}},{text:"See more works by me",action:()=>{w("https://elijahstorm.github.io/")}}];let a=!0,s=o;const c=_=>{_(),l(0,a=!0)},m=()=>l(0,a=!a),f=_=>c(_.action);return r.$$.update=()=>{var _,u;r.$$.dirty&4&&l(5,t={add:{text:"View with controls",action:()=>{w(`${S}/${i.routeId}/controls`)}},remove:{text:"Turn off controls",action:()=>{var d;w(`${S}/${(d=i.routeId)==null?void 0:d.replace("/controls","")}`)}}}),r.$$.dirty&4&&l(6,n={twoDim:{text:"Show in TopDown simple style",action:()=>{var d;w(`${S}/${(d=i.routeId)==null?void 0:d.replace("3d","2d")}`)}},threeDim:{text:"Render in 3D (WIP / not recommended)",action:()=>{var d;w(`${S}/${(d=i.routeId)==null?void 0:d.replace("2d","3d")}`)}}}),r.$$.dirty&103&&(l(1,s=o.slice()),(_=i.routeId)!=null&&_.includes("3d")?s.push(n.twoDim):s.push(n.threeDim),(u=i.routeId)!=null&&u.includes("controls")?s.push(t.remove):s.push(t.add))},[a,s,i,c,m,t,n,f]}class Ie extends E{constructor(e){super(),B(this,e,ke,ve,L,{})}}function we(r){let e,l;return{c(){e=b("div"),this.h()},l(t){e=$(t,"DIV",{class:!0,style:!0}),I(e).forEach(h),this.h()},h(){g(e,"class",l=O(r[0])+" svelte-1qtja1k"),g(e,"style",r[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&l!==(l=O(t[0])+" svelte-1qtja1k")&&g(e,"class",l)},i:T,o:T,d(t){t&&h(e)}}}function Se(r,e,l){let{loadingStyle:t="circle"}=e,{size:n=3}=e,{left:i=0}=e,{top:o=0}=e,{right:a=0}=e,{bototm:s=0}=e,c=t=="dots"?"10px":`${n-.9}rem`;const m=`
		width: ${c};
		height: ${c};
		left: ${i}rem;
		top: ${o}rem;
		right: ${a}rem;
		bototm: ${s}rem;
	`;return r.$$set=f=>{"loadingStyle"in f&&l(0,t=f.loadingStyle),"size"in f&&l(2,n=f.size),"left"in f&&l(3,i=f.left),"top"in f&&l(4,o=f.top),"right"in f&&l(5,a=f.right),"bototm"in f&&l(6,s=f.bototm)},[t,m,n,i,o,a,s]}class De extends E{constructor(e){super(),B(this,e,Se,we,L,{loadingStyle:0,size:2,left:3,top:4,right:5,bototm:6})}}function Q(r){let e,l,t,n;return t=new De({}),{c(){e=b("div"),l=b("div"),j(t.$$.fragment),this.h()},l(i){e=$(i,"DIV",{class:!0});var o=I(e);l=$(o,"DIV",{class:!0});var a=I(l);z(t.$$.fragment,a),a.forEach(h),o.forEach(h),this.h()},h(){g(l,"class","loading-box svelte-o0n2j9"),g(e,"class","svelte-o0n2j9")},m(i,o){v(i,e,o),k(e,l),C(t,l,null),n=!0},i(i){n||(p(t.$$.fragment,i),n=!0)},o(i){y(t.$$.fragment,i),n=!1},d(i){i&&h(e),K(t)}}}function Ne(r){let e,l,t,n,i,o,a,s,c;const m=r[2].default,f=U(m,r,r[1],null);let _=r[0]&&Q();return s=new Ie({}),{c(){e=b("link"),l=b("link"),t=b("link"),n=b("link"),i=D(),f&&f.c(),o=D(),_&&_.c(),a=D(),j(s.$$.fragment),this.h()},l(u){const d=fe("svelte-1jb9iai",document.head);e=$(d,"LINK",{rel:!0,href:!0}),l=$(d,"LINK",{rel:!0,href:!0}),t=$(d,"LINK",{rel:!0,href:!0,crossorigin:!0}),n=$(d,"LINK",{href:!0,rel:!0}),d.forEach(h),i=N(u),f&&f.l(u),o=N(u),_&&_.l(u),a=N(u),z(s.$$.fragment,u),this.h()},h(){g(e,"rel","stylesheet"),g(e,"href",S+"/app.css"),g(l,"rel","preconnect"),g(l,"href","https://fonts.googleapis.com"),g(t,"rel","preconnect"),g(t,"href","https://fonts.gstatic.com"),g(t,"crossorigin",""),g(n,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"),g(n,"rel","stylesheet")},m(u,d){k(document.head,e),k(document.head,l),k(document.head,t),k(document.head,n),v(u,i,d),f&&f.m(u,d),v(u,o,d),_&&_.m(u,d),v(u,a,d),C(s,u,d),c=!0},p(u,[d]){f&&f.p&&(!c||d&2)&&W(f,m,u,u[1],c?Y(m,u[1],d,null):X(u[1]),null),u[0]?_?d&1&&p(_,1):(_=Q(),_.c(),p(_,1),_.m(a.parentNode,a)):_&&(R(),y(_,1,1,()=>{_=null}),q())},i(u){c||(p(f,u),p(_),p(s.$$.fragment,u),c=!0)},o(u){y(f,u),y(_),y(s.$$.fragment,u),c=!1},d(u){h(e),h(l),h(t),h(n),u&&h(i),f&&f.d(u),u&&h(o),_&&_.d(u),u&&h(a),K(s,u)}}}function Ee(r,e,l){let t;Z(r,_e,o=>l(0,t=o));let{$$slots:n={},$$scope:i}=e;return r.$$set=o=>{"$$scope"in o&&l(1,i=o.$$scope)},[t,i,n]}class Ce extends E{constructor(e){super(),B(this,e,Ee,Ne,L,{})}}export{Ce as default};