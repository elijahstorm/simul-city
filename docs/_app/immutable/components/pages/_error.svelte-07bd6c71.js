import{S as M,i as F,s as O,e as Z,b as E,D as $,h as b,o as ct,U as lt,V as ee,W as xe,k as S,l as x,m as C,X as Ce,Y as qe,Z as at,_ as ft,$ as Ee,a0 as ut,w as q,x as Q,n as w,y as U,F as Qe,f as T,t as L,z as G,a as z,c as H,a1 as ue,M as I,g as dt,d as ht,E as gt,H as pt,I as mt,J as bt,L as yt,q as ce,r as le,u as Te}from"../../chunks/index-cdbf168b.js";import{p as vt}from"../../chunks/stores-a0bf88da.js";import{c as te}from"../../chunks/shared-23917130.js";const D=/^[a-z0-9]+(-[a-z0-9]+)*$/,re=(t,e,n,o="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),f=r.pop(),a={provider:r.length>0?r[0]:o,prefix:f,name:c};return e&&!X(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const c={provider:o,prefix:i.shift(),name:i.join("-")};return e&&!X(c)?null:c}if(n&&o===""){const c={provider:o,prefix:"",name:s};return e&&!X(c,n)?null:c}return null},X=(t,e)=>t?!!((t.provider===""||t.provider.match(D))&&(e&&t.prefix===""||t.prefix.match(D))&&t.name.match(D)):!1,Ue=Object.freeze({left:0,top:0,width:16,height:16}),ne=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),oe=Object.freeze({...Ue,...ne}),de=Object.freeze({...oe,body:"",hidden:!1});function _t(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}function Le(t,e){const n=_t(t,e);for(const o in de)o in ne?o in t&&!(o in n)&&(n[o]=ne[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function wt(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const c=o[i]&&o[i].parent,f=c&&s(c);f&&(r[i]=[c].concat(f))}return r[i]}return(e||Object.keys(n).concat(Object.keys(o))).forEach(s),r}function kt(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let s={};function i(c){s=Le(o[c]||r[c],s)}return i(e),n.forEach(i),Le(t,s)}function Ge(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const o=wt(t);for(const r in o){const s=o[r];s&&(e(r,kt(t,r,s)),n.push(r))}return n}const It={provider:"",aliases:{},not_found:{},...Ue};function ae(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Je(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ae(t,It))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r.match(D)||typeof s.body!="string"||!ae(s,de))return null}const o=e.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r.match(D)||typeof i!="string"||!n[i]&&!o[i]||!ae(s,de))return null}return e}const je=Object.create(null);function St(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function P(t,e){const n=je[t]||(je[t]=Object.create(null));return n[e]||(n[e]=St(t,e))}function ve(t,e){return Je(e)?Ge(e,(n,o)=>{o?t.icons[n]=o:t.missing.add(n)}):[]}function xt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let R=!1;function Ke(t){return typeof t=="boolean"&&(R=t),R}function Ct(t){const e=typeof t=="string"?re(t,!0,R):t;if(e){const n=P(e.provider,e.prefix),o=e.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function Et(t,e){const n=re(t,!0,R);if(!n)return!1;const o=P(n.provider,n.prefix);return xt(o,n.name,e)}function Tt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),R&&!e&&!t.prefix){let r=!1;return Je(t)&&(t.prefix="",Ge(t,(s,i)=>{i&&Et(s,i)&&(r=!0)})),r}const n=t.prefix;if(!X({provider:e,prefix:n,name:"a"}))return!1;const o=P(e,n);return!!ve(o,t)}const We=Object.freeze({width:null,height:null}),Xe=Object.freeze({...We,...ne}),Lt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,jt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Pe(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const o=t.split(Lt);if(o===null||!o.length)return t;const r=[];let s=o.shift(),i=jt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?r.push(s):r.push(Math.ceil(c*e*n)/n)}else r.push(s);if(s=o.shift(),s===void 0)return r.join("");i=!i}}function Pt(t,e){const n={...oe,...t},o={...Xe,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(y=>{const h=[],v=y.hFlip,m=y.vFlip;let g=y.rotate;v?m?g+=2:(h.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),h.push("scale(-1 1)"),r.top=r.left=0):m&&(h.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),h.push("scale(1 -1)"),r.top=r.left=0);let _;switch(g<0&&(g-=Math.floor(g/4)*4),g=g%4,g){case 1:_=r.height/2+r.top,h.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:h.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:_=r.width/2+r.left,h.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}g%2===1&&(r.left!==r.top&&(_=r.left,r.left=r.top,r.top=_),r.width!==r.height&&(_=r.width,r.width=r.height,r.height=_)),h.length&&(s='<g transform="'+h.join(" ")+'">'+s+"</g>")});const i=o.width,c=o.height,f=r.width,a=r.height;let l,u;return i===null?(u=c===null?"1em":c==="auto"?a:c,l=Pe(u,f/a)):(l=i==="auto"?f:i,u=c===null?Pe(l,a/f):c==="auto"?a:c),{attributes:{width:l.toString(),height:u.toString(),viewBox:r.left.toString()+" "+r.top.toString()+" "+f.toString()+" "+a.toString()},body:s}}const Mt=/\sid="(\S+)"/g,Ft="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ot=0;function At(t,e=Ft){const n=[];let o;for(;o=Mt.exec(t);)n.push(o[1]);return n.length&&n.forEach(r=>{const s=typeof e=="function"?e(r):e+(Ot++).toString(),i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+s+"$3")}),t}const he=Object.create(null);function Nt(t,e){he[t]=e}function ge(t){return he[t]||he[""]}function _e(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const we=Object.create(null),B=["https://api.simplesvg.com","https://api.unisvg.com"],Y=[];for(;B.length>0;)B.length===1||Math.random()>.5?Y.push(B.shift()):Y.push(B.pop());we[""]=_e({resources:["https://api.iconify.design"].concat(Y)});function Bt(t,e){const n=_e(e);return n===null?!1:(we[t]=n,!0)}function ke(t){return we[t]}const Dt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Me=Dt();function $t(t,e){const n=ke(t);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=e+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function zt(t){return t===404}const Ht=(t,e,n)=>{const o=[],r=$t(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((f,a)=>{c+=f.length+1,c>=r&&a>0&&(o.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=f.length),i.icons.push(f)}),o.push(i),o};function Rt(t){if(typeof t=="string"){const e=ke(t);if(e)return e.path}return"/"}const Vt=(t,e,n)=>{if(!Me){n("abort",424);return}let o=Rt(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),f=new URLSearchParams({icons:c});o+=s+".json?"+f.toString();break}case"custom":{const s=e.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Me(t+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(zt(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},qt={prepare:Ht,send:Vt};function Qt(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return t.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const s=r.provider,i=r.prefix,c=r.name,f=n[s]||(n[s]=Object.create(null)),a=f[i]||(f[i]=P(s,i));let l;c in a.icons?l=e.loaded:i===""||a.missing.has(c)?l=e.missing:l=e.pending;const u={provider:s,prefix:i,name:c};l.push(u)}),e}function Ye(t,e){t.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==e))})}function Ut(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(f=>{if(f.prefix!==r)return!0;const a=f.name;if(t.icons[a])i.loaded.push({provider:o,prefix:r,name:a});else if(t.missing.has(a))i.missing.push({provider:o,prefix:r,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Ye([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Gt=0;function Jt(t,e,n){const o=Gt++,r=Ye.bind(null,n,o);if(!e.pending.length)return r;const s={id:o,icons:e,callback:t,abort:r};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}function Kt(t,e=!0,n=!1){const o=[];return t.forEach(r=>{const s=typeof r=="string"?re(r,e,n):r;s&&o.push(s)}),o}var Wt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Xt(t,e,n,o){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let i;if(t.random){let p=t.resources.slice(0);for(i=[];p.length>1;){const k=Math.floor(Math.random()*p.length);i.push(p[k]),p=p.slice(0,k).concat(p.slice(k+1))}i=i.concat(p)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let f="pending",a=0,l,u=null,d=[],y=[];typeof o=="function"&&y.push(o);function h(){u&&(clearTimeout(u),u=null)}function v(){f==="pending"&&(f="aborted"),h(),d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function m(p,k){k&&(y=[]),typeof p=="function"&&y.push(p)}function g(){return{startTime:c,payload:e,status:f,queriesSent:a,queriesPending:d.length,subscribe:m,abort:v}}function _(){f="failed",y.forEach(p=>{p(void 0,l)})}function A(){d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function J(p,k,N){const K=k!=="success";switch(d=d.filter(j=>j!==p),f){case"pending":break;case"failed":if(K||!t.dataAfterTimeout)return;break;default:return}if(k==="abort"){l=N,_();return}if(K){l=N,d.length||(i.length?ie():_());return}if(h(),A(),!t.random){const j=t.resources.indexOf(p.resource);j!==-1&&j!==t.index&&(t.index=j)}f="completed",y.forEach(j=>{j(N)})}function ie(){if(f!=="pending")return;h();const p=i.shift();if(p===void 0){if(d.length){u=setTimeout(()=>{h(),f==="pending"&&(A(),_())},t.timeout);return}_();return}const k={status:"pending",resource:p,callback:(N,K)=>{J(k,N,K)}};d.push(k),a++,u=setTimeout(ie,t.rotate),n(p,e,k.callback)}return setTimeout(ie),g}function Ze(t){const e={...Wt,...t};let n=[];function o(){n=n.filter(c=>c().status==="pending")}function r(c,f,a){const l=Xt(e,c,f,(u,d)=>{o(),a&&a(u,d)});return n.push(l),l}function s(c){return n.find(f=>c(f))||null}return{query:r,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:o}}function Fe(){}const fe=Object.create(null);function Yt(t){if(!fe[t]){const e=ke(t);if(!e)return;const n=Ze(e),o={config:e,redundancy:n};fe[t]=o}return fe[t]}function Zt(t,e,n){let o,r;if(typeof t=="string"){const s=ge(t);if(!s)return n(void 0,424),Fe;r=s.send;const i=Yt(t);i&&(o=i.redundancy)}else{const s=_e(t);if(s){o=Ze(s);const i=t.resources?t.resources[0]:"",c=ge(i);c&&(r=c.send)}}return!o||!r?(n(void 0,424),Fe):o.query(e,r,n)().abort}const Oe="iconify2",V="iconify",et=V+"-count",Ae=V+"-version",tt=36e5,en=168;function pe(t,e){try{return t.getItem(e)}catch{}}function Ie(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Ne(t,e){try{t.removeItem(e)}catch{}}function me(t,e){return Ie(t,et,e.toString())}function be(t){return parseInt(pe(t,et))||0}const se={local:!0,session:!0},nt={local:new Set,session:new Set};let Se=!1;function tn(t){Se=t}let W=typeof window>"u"?{}:window;function rt(t){const e=t+"Storage";try{if(W&&W[e]&&typeof W[e].length=="number")return W[e]}catch{}se[t]=!1}function ot(t,e){const n=rt(t);if(!n)return;const o=pe(n,Ae);if(o!==Oe){if(o){const c=be(n);for(let f=0;f<c;f++)Ne(n,V+f.toString())}Ie(n,Ae,Oe),me(n,0);return}const r=Math.floor(Date.now()/tt)-en,s=c=>{const f=V+c.toString(),a=pe(n,f);if(typeof a=="string"){try{const l=JSON.parse(a);if(typeof l=="object"&&typeof l.cached=="number"&&l.cached>r&&typeof l.provider=="string"&&typeof l.data=="object"&&typeof l.data.prefix=="string"&&e(l,c))return!0}catch{}Ne(n,f)}};let i=be(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,me(n,i)):nt[t].add(c))}function st(){if(!Se){tn(!0);for(const t in se)ot(t,e=>{const n=e.data,o=e.provider,r=n.prefix,s=P(o,r);if(!ve(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function nn(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in se)ot(o,r=>{const s=r.data;return r.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function rn(t,e){Se||st();function n(o){let r;if(!se[o]||!(r=rt(o)))return;const s=nt[o];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=be(r),!me(r,i+1))return;const c={cached:Math.floor(Date.now()/tt),provider:t.provider,data:e};return Ie(r,V+i.toString(),JSON.stringify(c))}e.lastModified&&!nn(t,e.lastModified)||!Object.keys(e.icons).length||(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Be(){}function on(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ut(t)}))}function sn(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:o}=t,r=t.iconsToLoad;delete t.iconsToLoad;let s;if(!r||!(s=ge(n)))return;s.prepare(n,o,r).forEach(c=>{Zt(n,c,f=>{if(typeof f!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=ve(t,f);if(!a.length)return;const l=t.pendingIcons;l&&a.forEach(u=>{l.delete(u)}),rn(t,f)}catch(a){console.error(a)}on(t)})})}))}const cn=(t,e)=>{const n=Kt(t,!0,Ke()),o=Qt(n);if(!o.pending.length){let f=!0;return e&&setTimeout(()=>{f&&e(o.loaded,o.missing,o.pending,Be)}),()=>{f=!1}}const r=Object.create(null),s=[];let i,c;return o.pending.forEach(f=>{const{provider:a,prefix:l}=f;if(l===c&&a===i)return;i=a,c=l,s.push(P(a,l));const u=r[a]||(r[a]=Object.create(null));u[l]||(u[l]=[])}),o.pending.forEach(f=>{const{provider:a,prefix:l,name:u}=f,d=P(a,l),y=d.pendingIcons||(d.pendingIcons=new Set);y.has(u)||(y.add(u),r[a][l].push(u))}),s.forEach(f=>{const{provider:a,prefix:l}=f;r[a][l].length&&sn(f,r[a][l])}),e?Jt(e,o,s):Be};function ln(t,e){const n={...t};for(const o in e){const r=e[o],s=typeof r;o in We?(r===null||r&&(s==="string"||s==="number"))&&(n[o]=r):s===typeof n[o]&&(n[o]=o==="rotate"?r%4:r)}return n}const an=/[\s,]+/;function fn(t,e){e.split(an).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function un(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:o(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?o(s):0)}}return e}function dn(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function hn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function gn(t){return'url("data:image/svg+xml,'+hn(t)+'")'}const De={...Xe,inline:!1},pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},mn={display:"inline-block"},ye={"background-color":"currentColor"},it={"background-color":"transparent"},$e={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},ze={"-webkit-mask":ye,mask:ye,background:it};for(const t in ze){const e=ze[t];for(const n in $e)e[t+"-"+n]=$e[n]}function He(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function bn(t,e){const n=ln(De,e),o=e.mode||"svg",r=o==="svg"?{...pn}:{};let s=typeof e.style=="string"?e.style:"";for(let m in e){const g=e[m];if(g!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=g===!0||g==="true"||g===1;break;case"flip":typeof g=="string"&&fn(n,g);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+g+"; ";break;case"rotate":typeof g=="string"?n[m]=un(g):typeof g=="number"&&(n[m]=g);break;case"ariaHidden":case"aria-hidden":g!==!0&&g!=="true"&&delete r["aria-hidden"];break;default:if(m.slice(0,3)==="on:")break;De[m]===void 0&&(r[m]=g)}}const i=Pt(t,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),o==="svg"){Object.assign(r,c),s!==""&&(r.style=s);let m=0,g=e.id;return typeof g=="string"&&(g=g.replace(/-/g,"_")),{svg:!0,attributes:r,body:At(i.body,g?()=>g+"ID"+m++:"iconifySvelte")}}const{body:f,width:a,height:l}=t,u=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),d=dn(f,{...c,width:a+"",height:l+""}),h={"--svg":gn(d),width:He(c.width),height:He(c.height),...mn,...u?ye:it};let v="";for(const m in h)v+=m+": "+h[m]+";";return r.style=v+s,{svg:!1,attributes:r}}Ke(!0);Nt("",qt);if(typeof document<"u"&&typeof window<"u"){st();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Tt(o))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const o="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Bt(n,r)||console.error(o)}catch{console.error(o)}}}}function yn(t,e,n,o,r){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",s(),{data:{...oe,...t}};let i;if(typeof t!="string"||(i=re(t,!1,!0))===null)return s(),null;const c=Ct(i);if(!c)return n&&(!e.loading||e.loading.name!==t)&&(s(),e.name="",e.loading={name:t,abort:cn([i],o)}),null;s(),e.name!==t&&(e.name=t,r&&!e.destroyed&&r(t));const f=["iconify"];return i.prefix!==""&&f.push("iconify--"+i.prefix),i.provider!==""&&f.push("iconify--"+i.provider),{data:c,classes:f}}function vn(t,e){return t?bn({...oe,...t},e):null}function Re(t){let e;function n(s,i){return s[0].svg?wn:_n}let o=n(t),r=o(t);return{c(){r.c(),e=Z()},l(s){r.l(s),e=Z()},m(s,i){r.m(s,i),E(s,e,i)},p(s,i){o===(o=n(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&b(e)}}}function _n(t){let e,n=[t[0].attributes],o={};for(let r=0;r<n.length;r+=1)o=ee(o,n[r]);return{c(){e=S("span"),this.h()},l(r){e=x(r,"SPAN",{}),C(e).forEach(b),this.h()},h(){Ce(e,o)},m(r,s){E(r,e,s)},p(r,s){Ce(e,o=qe(n,[s&1&&r[0].attributes]))},d(r){r&&b(e)}}}function wn(t){let e,n=t[0].body+"",o=[t[0].attributes],r={};for(let s=0;s<o.length;s+=1)r=ee(r,o[s]);return{c(){e=at("svg"),this.h()},l(s){e=ft(s,"svg",{});var i=C(e);i.forEach(b),this.h()},h(){Ee(e,r)},m(s,i){E(s,e,i),e.innerHTML=n},p(s,i){i&1&&n!==(n=s[0].body+"")&&(e.innerHTML=n),Ee(e,r=qe(o,[i&1&&s[0].attributes]))},d(s){s&&b(e)}}}function kn(t){let e,n=t[0]&&Re(t);return{c(){n&&n.c(),e=Z()},l(o){n&&n.l(o),e=Z()},m(o,r){n&&n.m(o,r),E(o,e,r)},p(o,[r]){o[0]?n?n.p(o,r):(n=Re(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:$,o:$,d(o){n&&n.d(o),o&&b(e)}}}function In(t,e,n){const o={name:"",loading:null,destroyed:!1};let r=!1,s=0,i;const c=a=>{typeof e.onLoad=="function"&&e.onLoad(a),ut()("load",{icon:a})};function f(){n(3,s++,s)}return ct(()=>{n(2,r=!0)}),lt(()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))}),t.$$set=a=>{n(6,e=ee(ee({},e),xe(a)))},t.$$.update=()=>{{const a=yn(e.icon,o,r,f,c);n(0,i=a?vn(a.data,e):null),i&&a.classes&&n(0,i.attributes.class=(typeof e.class=="string"?e.class+" ":"")+a.classes.join(" "),i)}},e=xe(e),[i,o,r,s]}class Sn extends M{constructor(e){super(),F(this,e,In,kn,O,{})}}function xn(t){let e,n,o,r,s;return n=new Sn({props:{icon:"akar-icons:chevron-left",color:"var(--primary)",height:34}}),{c(){e=S("div"),q(n.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0});var c=C(e);Q(n.$$.fragment,c),c.forEach(b),this.h()},h(){w(e,"class","center svelte-1fzy1m")},m(i,c){E(i,e,c),U(n,e,null),o=!0,r||(s=Qe(e,"click",t[0]),r=!0)},p:$,i(i){o||(T(n.$$.fragment,i),o=!0)},o(i){L(n.$$.fragment,i),o=!1},d(i){i&&b(e),G(n),r=!1,s()}}}function Cn(t){return[()=>history.back()]}class En extends M{constructor(e){super(),F(this,e,Cn,xn,O,{})}}function Ve(t){let e,n;return e=new En({}),{c(){q(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,r){U(e,o,r),n=!0},i(o){n||(T(e.$$.fragment,o),n=!0)},o(o){L(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function Tn(t){let e,n,o,r,s,i,c,f,a,l=t[0]&&Ve();return{c(){e=S("div"),l&&l.c(),n=z(),o=S("a"),r=S("img"),c=z(),f=S("div"),this.h()},l(u){e=x(u,"DIV",{class:!0});var d=C(e);l&&l.l(d),n=H(d),o=x(d,"A",{href:!0});var y=C(o);r=x(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(b),c=H(d),f=x(d,"DIV",{class:!0}),C(f).forEach(b),d.forEach(b),this.h()},h(){ue(r.src,s=t[2])||w(r,"src",s),w(r,"alt","HAJA"),w(r,"class","svelte-80eztu"),w(o,"href",i=te+t[1]),w(f,"class","center svelte-80eztu"),w(e,"class","flex svelte-80eztu")},m(u,d){E(u,e,d),l&&l.m(e,null),I(e,n),I(e,o),I(o,r),I(e,c),I(e,f),a=!0},p(u,[d]){u[0]?l?d&1&&T(l,1):(l=Ve(),l.c(),T(l,1),l.m(e,n)):l&&(dt(),L(l,1,1,()=>{l=null}),ht()),(!a||d&2&&i!==(i=te+u[1]))&&w(o,"href",i)},i(u){a||(T(l),a=!0)},o(u){L(l),a=!1},d(u){u&&b(e),l&&l.d()}}}function Ln(t,e,n){let{backBtn:o=!0}=e,{logoLink:r="/"}=e;const s=`${te}/logo/logo_main.png`;return t.$$set=i=>{"backBtn"in i&&n(0,o=i.backBtn),"logoLink"in i&&n(1,r=i.logoLink)},[o,r,s]}class jn extends M{constructor(e){super(),F(this,e,Ln,Tn,O,{backBtn:0,logoLink:1})}}function Pn(t){let e,n,o,r,s,i,c;o=new jn({props:{backBtn:t[0],logoLink:t[1]}});const f=t[3].default,a=gt(f,t,t[2],null);return{c(){e=S("section"),n=S("div"),q(o.$$.fragment),r=z(),s=S("div"),i=z(),a&&a.c(),this.h()},l(l){e=x(l,"SECTION",{class:!0});var u=C(e);n=x(u,"DIV",{class:!0});var d=C(n);Q(o.$$.fragment,d),r=H(d),s=x(d,"DIV",{class:!0}),C(s).forEach(b),i=H(d),a&&a.l(d),d.forEach(b),u.forEach(b),this.h()},h(){w(s,"class","padding-bottom svelte-2p7b5v"),w(n,"class","container svelte-2p7b5v"),w(e,"class","svelte-2p7b5v")},m(l,u){E(l,e,u),I(e,n),U(o,n,null),I(n,r),I(n,s),I(n,i),a&&a.m(n,null),c=!0},p(l,[u]){const d={};u&1&&(d.backBtn=l[0]),u&2&&(d.logoLink=l[1]),o.$set(d),a&&a.p&&(!c||u&4)&&pt(a,f,l,l[2],c?bt(f,l[2],u,null):mt(l[2]),null)},i(l){c||(T(o.$$.fragment,l),T(a,l),c=!0)},o(l){L(o.$$.fragment,l),L(a,l),c=!1},d(l){l&&b(e),G(o),a&&a.d(l)}}}function Mn(t,e,n){let{$$slots:o={},$$scope:r}=e,{backBtn:s=!0}=e,{logoLink:i="/"}=e;return t.$$set=c=>{"backBtn"in c&&n(0,s=c.backBtn),"logoLink"in c&&n(1,i=c.logoLink),"$$scope"in c&&n(2,r=c.$$scope)},[s,i,r,o]}class Fn extends M{constructor(e){super(),F(this,e,Mn,Pn,O,{backBtn:0,logoLink:1})}}function On(t){let e,n,o,r;return{c(){e=S("img"),this.h()},l(s){e=x(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ue(e.src,n=t[0])||w(e,"src",n),w(e,"alt",t[1]),w(e,"class","svelte-1bvtmi1")},m(s,i){E(s,e,i),o||(r=Qe(e,"error",t[2]),o=!0)},p(s,[i]){i&1&&!ue(e.src,n=s[0])&&w(e,"src",n),i&2&&w(e,"alt",s[1])},i:$,o:$,d(s){s&&b(e),o=!1,r()}}}function An(t,e,n){let{fallback:o=`${te}/404.png`}=e,{src:r=o}=e,{alt:s}=e;const i=c=>c.target.src=o;return t.$$set=c=>{"fallback"in c&&n(3,o=c.fallback),"src"in c&&n(0,r=c.src),"alt"in c&&n(1,s=c.alt)},[r,s,i,o]}class Nn extends M{constructor(e){super(),F(this,e,An,On,O,{fallback:3,src:0,alt:1})}}function Bn(t){var l,u,d,y;let e,n=t[0].status+"",o,r,s=(((u=(l=t[0])==null?void 0:l.error)==null?void 0:u.message)??"No error message")+"",i,c,f,a;return f=new Nn({props:{alt:`${t[0].status}, ${((y=(d=t[0])==null?void 0:d.error)==null?void 0:y.message)??"No error message"}`}}),{c(){e=S("center"),o=ce(n),r=ce(": "),i=ce(s),c=z(),q(f.$$.fragment)},l(h){e=x(h,"CENTER",{});var v=C(e);o=le(v,n),r=le(v,": "),i=le(v,s),v.forEach(b),c=H(h),Q(f.$$.fragment,h)},m(h,v){E(h,e,v),I(e,o),I(e,r),I(e,i),E(h,c,v),U(f,h,v),a=!0},p(h,v){var g,_,A,J;(!a||v&1)&&n!==(n=h[0].status+"")&&Te(o,n),(!a||v&1)&&s!==(s=(((_=(g=h[0])==null?void 0:g.error)==null?void 0:_.message)??"No error message")+"")&&Te(i,s);const m={};v&1&&(m.alt=`${h[0].status}, ${((J=(A=h[0])==null?void 0:A.error)==null?void 0:J.message)??"No error message"}`),f.$set(m)},i(h){a||(T(f.$$.fragment,h),a=!0)},o(h){L(f.$$.fragment,h),a=!1},d(h){h&&b(e),h&&b(c),G(f,h)}}}function Dn(t){let e,n;return e=new Fn({props:{$$slots:{default:[Bn]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,r){U(e,o,r),n=!0},p(o,[r]){const s={};r&3&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){n||(T(e.$$.fragment,o),n=!0)},o(o){L(e.$$.fragment,o),n=!1},d(o){G(e,o)}}}function $n(t,e,n){let o;return yt(t,vt,r=>n(0,o=r)),[o]}class Vn extends M{constructor(e){super(),F(this,e,$n,Dn,O,{})}}export{Vn as default};