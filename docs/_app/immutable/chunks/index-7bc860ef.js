function N(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function q(){return Object.create(null)}function p(t){t.forEach(P)}function W(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function at(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(J(e,n))}function _t(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,u){if(r){const s=T(e,n,i,u);t.p(s,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function yt(t,e,n){return t.set(n),e}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:R(1,r,y=>e[n[y]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[c],f)}}function V(t,e){if($){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){$&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function vt(){return S("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function D(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:D(t,i,e[i])}function Et(t,e){for(const n in e)D(t,n,e[n])}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){et(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function B(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function kt(t,e,n){return B(t,e,n,Y)}function At(t,e,n){return B(t,e,n,Z)}function nt(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function Nt(t){return nt(t," ")}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,n){t.classList[n?"add":"remove"](e)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function qt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Mt(t){w().$$.on_mount.push(t)}function Ot(t){w().$$.after_update.push(t)}function Pt(t){w().$$.on_destroy.push(t)}function Tt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],M=[],b=[],O=[],z=Promise.resolve();let k=!1;function F(){k||(k=!0,z.then(H))}function Dt(){return F(),z}function A(t){b.push(t)}const E=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const e=d[x];x++,h(e),rt(e.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];E.has(n)||(E.add(n),n())}b.length=0}while(d.length);for(;O.length;)O.pop()();k=!1,E.clear(),h(t)}function rt(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const v=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function ct(t,e){t&&t.i&&(v.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ft(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=e[u];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[u]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ht(t){t&&t.c()}function It(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=u.map(P).filter(W);s?s.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(A)}function ot(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,u,s,o=[-1]){const c=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,y,...j)=>{const C=j.length?j[0]:y;return l.ctx&&r(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&lt(t,a)),y}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const a=tt(e.target);l.fragment&&l.fragment.l(a),a.forEach(X)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),Q(),H()}h(c)}class Gt{$destroy(){ot(this,1),this.$destroy=N}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{N as A,_t as B,qt as C,V as D,ht as E,mt as F,dt as G,Pt as H,I,pt as J,wt as K,Ft as L,Z as M,At as N,Et as O,Tt as P,$t as Q,at as R,Gt as S,ft as T,A as U,p as V,yt as W,M as X,xt as Y,Ct as Z,bt as a,gt as b,Nt as c,Bt as d,vt as e,ct as f,Lt as g,X as h,Wt as i,Ot as j,Y as k,kt as l,tt as m,D as n,Mt as o,jt as p,S as q,nt as r,ut as s,zt as t,St as u,Ht as v,It as w,st as x,ot as y,Dt as z};