import{S as N,i as E,s as B,k as y,l as v,m as I,h as m,n as p,B as R,b as $,C as V,D as U,E as se,F as ne,G as W,H as X,I as Y,f as g,t as b,e as q,g as T,d as G,J as Z,v as L,a as S,w as j,c as D,K as k,x as z,L as x,M as ee,N as te,y as K,O as oe,q as re,r as ie,u as ae,P as A,Q as fe}from"../../chunks/index-8129d6d2.js";import{b as C}from"../../chunks/paths-c8912ef8.js";import{g as w}from"../../chunks/navigation-563b02d6.js";import{f as F,a as M}from"../../chunks/index-de2c53a8.js";import{p as ce,n as ue}from"../../chunks/stores-3f97b3a5.js";function _e(r){let e;return{c(){e=y("span"),this.h()},l(l){e=v(l,"SPAN",{class:!0}),I(e).forEach(m),this.h()},h(){p(e,"class","burger burger-swipe svelte-5uaf2z"),R(e,"isClosed",r[0])},m(l,t){$(l,e,t)},p(l,[t]){t&1&&R(e,"isClosed",l[0])},i:V,o:V,d(l){l&&m(e)}}}function de(r,e,l){let{isClosed:t=!0}=e;return r.$$set=s=>{"isClosed"in s&&l(0,t=s.isClosed)},[t]}class me extends N{constructor(e){super(),E(this,e,de,_e,B,{isClosed:0})}}function he(r){let e,l,t,s;const i=r[2].default,o=U(i,r,r[1],null);return{c(){e=y("button"),o&&o.c(),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var n=I(e);o&&o.l(n),n.forEach(m),this.h()},h(){p(e,"class","svelte-hlfn2z")},m(a,n){$(a,e,n),o&&o.m(e,null),l=!0,t||(s=se(e,"click",function(){ne(r[0])&&r[0].apply(this,arguments)}),t=!0)},p(a,[n]){r=a,o&&o.p&&(!l||n&2)&&W(o,i,r,r[1],l?Y(i,r[1],n,null):X(r[1]),null)},i(a){l||(g(o,a),l=!0)},o(a){b(o,a),l=!1},d(a){a&&m(e),o&&o.d(a),t=!1,s()}}}function ge(r,e,l){let{$$slots:t={},$$scope:s}=e,{callback:i}=e;return r.$$set=o=>{"callback"in o&&l(0,i=o.callback),"$$scope"in o&&l(1,s=o.$$scope)},[i,s,t]}class le extends N{constructor(e){super(),E(this,e,ge,he,B,{callback:0})}}function O(r,e,l){const t=r.slice();return t[9]=e[l],t[11]=l,t}function P(r){let e,l,t,s,i,o,a;t=new le({props:{callback:r[4],$$slots:{default:[pe]},$$scope:{ctx:r}}});let n=!r[0]&&H(r);return{c(){e=y("section"),l=y("div"),L(t.$$.fragment),s=S(),n&&n.c(),this.h()},l(f){e=v(f,"SECTION",{class:!0});var h=I(e);l=v(h,"DIV",{class:!0});var u=I(l);j(t.$$.fragment,u),u.forEach(m),s=D(h),n&&n.l(h),h.forEach(m),this.h()},h(){p(l,"class","burger svelte-9y2py3"),p(e,"class","svelte-9y2py3")},m(f,h){$(f,e,h),k(e,l),z(t,l,null),k(e,s),n&&n.m(e,null),a=!0},p(f,h){const u={};h&4097&&(u.$$scope={dirty:h,ctx:f}),t.$set(u),f[0]?n&&(T(),b(n,1,1,()=>{n=null}),G()):n?(n.p(f,h),h&1&&g(n,1)):(n=H(f),n.c(),g(n,1),n.m(e,null))},i(f){a||(g(t.$$.fragment,f),g(n),x(()=>{o&&o.end(1),i=ee(e,M,{}),i.start()}),a=!0)},o(f){b(t.$$.fragment,f),b(n),i&&i.invalidate(),o=te(e,M,{}),a=!1},d(f){f&&m(e),K(t),n&&n.d(),f&&o&&o.end()}}}function pe(r){let e,l;return e=new me({props:{isClosed:r[0]}}),{c(){L(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){z(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.isClosed=t[0]),e.$set(i)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function H(r){let e,l,t=r[1],s=[];for(let o=0;o<t.length;o+=1)s[o]=J(O(r,t,o));const i=o=>b(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=q()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=q()},m(o,a){for(let n=0;n<s.length;n+=1)s[n].m(o,a);$(o,e,a),l=!0},p(o,a){if(a&10){t=o[1];let n;for(n=0;n<t.length;n+=1){const f=O(o,t,n);s[n]?(s[n].p(f,a),g(s[n],1)):(s[n]=J(f),s[n].c(),g(s[n],1),s[n].m(e.parentNode,e))}for(T(),n=t.length;n<s.length;n+=1)i(n);G()}},i(o){if(!l){for(let a=0;a<t.length;a+=1)g(s[a]);l=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)b(s[a]);l=!1},d(o){oe(s,o),o&&m(e)}}}function be(r){let e=r[9].text+"",l;return{c(){l=re(e)},l(t){l=ie(t,e)},m(t,s){$(t,l,s)},p(t,s){s&2&&e!==(e=t[9].text+"")&&ae(l,e)},d(t){t&&m(l)}}}function J(r){let e,l,t,s,i,o;function a(){return r[7](r[9])}return l=new le({props:{callback:a,$$slots:{default:[be]},$$scope:{ctx:r}}}),{c(){e=y("div"),L(l.$$.fragment),t=S()},l(n){e=v(n,"DIV",{});var f=I(e);j(l.$$.fragment,f),t=D(f),f.forEach(m)},m(n,f){$(n,e,f),z(l,e,null),k(e,t),o=!0},p(n,f){r=n;const h={};f&2&&(h.callback=a),f&4098&&(h.$$scope={dirty:f,ctx:r}),l.$set(h)},i(n){o||(g(l.$$.fragment,n),x(()=>{i&&i.end(1),s=ee(e,F,{y:-100,delay:40*r[11]}),s.start()}),o=!0)},o(n){b(l.$$.fragment,n),s&&s.invalidate(),i=te(e,F,{y:-100,x:100,delay:20*r[11]}),o=!1},d(n){n&&m(e),K(l),n&&i&&i.end()}}}function ye(r){let e,l,t=r[2].routeId!=""&&P(r);return{c(){t&&t.c(),e=q()},l(s){t&&t.l(s),e=q()},m(s,i){t&&t.m(s,i),$(s,e,i),l=!0},p(s,[i]){s[2].routeId!=""?t?(t.p(s,i),i&4&&g(t,1)):(t=P(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(T(),b(t,1,1,()=>{t=null}),G())},i(s){l||(g(t),l=!0)},o(s){b(t),l=!1},d(s){t&&t.d(s),s&&m(e)}}}function ve(r,e,l){let t,s,i;Z(r,ce,_=>l(2,i=_));const o=[{text:"Go back to introduction",action:()=>{w(C)}},{text:"See more works by me",action:()=>{w("https://elijahstorm.github.io/")}}];let a=!0,n=o;const f=_=>{_(),l(0,a=!0)},h=()=>l(0,a=!a),u=_=>f(_.action);return r.$$.update=()=>{var _,c;r.$$.dirty&4&&l(5,t={add:{text:"View with controls",action:()=>{w(`${C}/${i.routeId}/controls`)}},remove:{text:"Turn off controls",action:()=>{var d;w(`${C}/${(d=i.routeId)==null?void 0:d.replace("/controls","")}`)}}}),r.$$.dirty&4&&l(6,s={twoDim:{text:"Show in TopDown simple style",action:()=>{var d;w(`${C}/${(d=i.routeId)==null?void 0:d.replace("3d","2d")}`)}},threeDim:{text:"Render in 3D",action:()=>{var d;w(`${C}/${(d=i.routeId)==null?void 0:d.replace("2d","3d")}`)}}}),r.$$.dirty&103&&(l(1,n=o.slice()),(_=i.routeId)!=null&&_.includes("3d")?n.push(s.twoDim):n.push(s.threeDim),(c=i.routeId)!=null&&c.includes("controls")?n.push(t.remove):n.push(t.add))},[a,n,i,f,h,t,s,u]}class $e extends N{constructor(e){super(),E(this,e,ve,ye,B,{})}}function ke(r){let e,l;return{c(){e=y("div"),this.h()},l(t){e=v(t,"DIV",{class:!0,style:!0}),I(e).forEach(m),this.h()},h(){p(e,"class",l=A(r[0])+" svelte-1qtja1k"),p(e,"style",r[1])},m(t,s){$(t,e,s)},p(t,[s]){s&1&&l!==(l=A(t[0])+" svelte-1qtja1k")&&p(e,"class",l)},i:V,o:V,d(t){t&&m(e)}}}function Ie(r,e,l){let{loadingStyle:t="circle"}=e,{size:s=3}=e,{left:i=0}=e,{top:o=0}=e,{right:a=0}=e,{bototm:n=0}=e,f=t=="dots"?"10px":`${s-.9}rem`;const h=`
		width: ${f};
		height: ${f};
		left: ${i}rem;
		top: ${o}rem;
		right: ${a}rem;
		bototm: ${n}rem;
	`;return r.$$set=u=>{"loadingStyle"in u&&l(0,t=u.loadingStyle),"size"in u&&l(2,s=u.size),"left"in u&&l(3,i=u.left),"top"in u&&l(4,o=u.top),"right"in u&&l(5,a=u.right),"bototm"in u&&l(6,n=u.bototm)},[t,h,s,i,o,a,n]}class we extends N{constructor(e){super(),E(this,e,Ie,ke,B,{loadingStyle:0,size:2,left:3,top:4,right:5,bototm:6})}}function Q(r){let e,l,t,s;return t=new we({}),{c(){e=y("div"),l=y("div"),L(t.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var o=I(e);l=v(o,"DIV",{class:!0});var a=I(l);j(t.$$.fragment,a),a.forEach(m),o.forEach(m),this.h()},h(){p(l,"class","loading-box svelte-o0n2j9"),p(e,"class","svelte-o0n2j9")},m(i,o){$(i,e,o),k(e,l),z(t,l,null),s=!0},i(i){s||(g(t.$$.fragment,i),s=!0)},o(i){b(t.$$.fragment,i),s=!1},d(i){i&&m(e),K(t)}}}function Ce(r){let e,l,t,s,i,o,a,n,f;const h=r[2].default,u=U(h,r,r[1],null);let _=r[0]&&Q();return n=new $e({}),{c(){e=y("link"),l=y("link"),t=y("link"),s=y("link"),i=S(),u&&u.c(),o=S(),_&&_.c(),a=S(),L(n.$$.fragment),this.h()},l(c){const d=fe('[data-svelte="svelte-1jb9iai"]',document.head);e=v(d,"LINK",{rel:!0,href:!0}),l=v(d,"LINK",{rel:!0,href:!0}),t=v(d,"LINK",{rel:!0,href:!0,crossorigin:!0}),s=v(d,"LINK",{href:!0,rel:!0}),d.forEach(m),i=D(c),u&&u.l(c),o=D(c),_&&_.l(c),a=D(c),j(n.$$.fragment,c),this.h()},h(){p(e,"rel","stylesheet"),p(e,"href",C+"/app.css"),p(l,"rel","preconnect"),p(l,"href","https://fonts.googleapis.com"),p(t,"rel","preconnect"),p(t,"href","https://fonts.gstatic.com"),p(t,"crossorigin",""),p(s,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"),p(s,"rel","stylesheet")},m(c,d){k(document.head,e),k(document.head,l),k(document.head,t),k(document.head,s),$(c,i,d),u&&u.m(c,d),$(c,o,d),_&&_.m(c,d),$(c,a,d),z(n,c,d),f=!0},p(c,[d]){u&&u.p&&(!f||d&2)&&W(u,h,c,c[1],f?Y(h,c[1],d,null):X(c[1]),null),c[0]?_?d&1&&g(_,1):(_=Q(),_.c(),g(_,1),_.m(a.parentNode,a)):_&&(T(),b(_,1,1,()=>{_=null}),G())},i(c){f||(g(u,c),g(_),g(n.$$.fragment,c),f=!0)},o(c){b(u,c),b(_),b(n.$$.fragment,c),f=!1},d(c){m(e),m(l),m(t),m(s),c&&m(i),u&&u.d(c),c&&m(o),_&&_.d(c),c&&m(a),K(n,c)}}}function Se(r,e,l){let t;Z(r,ue,o=>l(0,t=o));let{$$slots:s={},$$scope:i}=e;return r.$$set=o=>{"$$scope"in o&&l(1,i=o.$$scope)},[t,i,s]}class je extends N{constructor(e){super(),E(this,e,Se,Ce,B,{})}}export{je as default};