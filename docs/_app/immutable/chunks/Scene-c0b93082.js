import{S as G,i as B,s as H,a9 as se,ab as ie,w as k,x as S,y as M,ac as re,f as w,t as A,z as v,E as J,H as X,I as Y,J as Z,ad as le,a as W,e as U,c as p,b as T,h as z,a0 as ze,o as De,A as Pe,U as Te,D as L,aj as Fe,g as Ee,d as Ie,Q as Ve,k as de,q as ge,l as _e,m as he,r as be,n as we,M as Ae}from"./index-cdbf168b.js";import{c as ye}from"./shared-23917130.js";import{Q as Ce,S as We,a as oe,T as pe,X as je,Y as Le,Z as Oe,u as Qe,_ as Ge,V as N,$ as Be,a0 as ne,a1 as He,a2 as qe,a3 as Ne,a4 as Ue,a5 as Je,a6 as ae,a7 as fe,a8 as Xe,a9 as Ye,c as j,D as Ze,aa as Ke,ab as xe,H as Re,P as $e}from"./WorldViewer-ab41389d.js";import{G as ke}from"./GLTF-d409b892.js";import{i as et}from"./Engine-4332f20a.js";function tt(s){let e;const n=s[20].default,t=J(n,s,s[25],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,i){t&&t.m(o,i),e=!0},p(o,i){t&&t.p&&(!e||i&33554432)&&X(t,n,o,o[25],e?Z(n,o[25],i,null):Y(o[25]),null)},i(o){e||(w(t,o),e=!0)},o(o){A(t,o),e=!1},d(o){t&&t.d(o)}}}function nt(s){let e,n,t,o;function i(r){s[21](r)}function u(r){s[22](r)}let l={position:s[13],scale:s[2],rotation:s[12],lookAt:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],viewportAware:s[4],$$slots:{default:[tt]},$$scope:{ctx:s}};return s[1]!==void 0&&(l.group=s[1]),s[0]!==void 0&&(l.inViewport=s[0]),e=new Ce({props:l}),se.push(()=>ie(e,"group",i)),se.push(()=>ie(e,"inViewport",u)),e.$on("viewportenter",s[23]),e.$on("viewportleave",s[24]),{c(){k(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,f){M(e,r,f),o=!0},p(r,[f]){const _={};f&8192&&(_.position=r[13]),f&4&&(_.scale=r[2]),f&4096&&(_.rotation=r[12]),f&8&&(_.lookAt=r[3]),f&32&&(_.castShadow=r[5]),f&64&&(_.receiveShadow=r[6]),f&128&&(_.frustumCulled=r[7]),f&256&&(_.renderOrder=r[8]),f&512&&(_.visible=r[9]),f&1024&&(_.userData=r[10]),f&2048&&(_.dispose=r[11]),f&16&&(_.viewportAware=r[4]),f&33554432&&(_.$$scope={dirty:f,ctx:r}),!n&&f&2&&(n=!0,_.group=r[1],re(()=>n=!1)),!t&&f&1&&(t=!0,_.inViewport=r[0],re(()=>t=!1)),e.$set(_)},i(r){o||(w(e.$$.fragment,r),o=!0)},o(r){A(e.$$.fragment,r),o=!1},d(r){v(e,r)}}}function ot(s,e,n){let{$$slots:t={},$$scope:o}=e,{position:i=void 0}=e,{scale:u=void 0}=e,{rotation:l=void 0}=e,{lookAt:r=void 0}=e,{viewportAware:f=!1}=e,{inViewport:_=!1}=e,{castShadow:C=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:F=void 0}=e,{renderOrder:a=void 0}=e,{visible:d=void 0}=e,{userData:D=void 0}=e,{dispose:E=void 0}=e,{speed:R=1}=e,{rotationIntensity:h=1}=e,{floatIntensity:y=1}=e,{floatingRange:I=[-.1,.1]}=e,{group:V=void 0}=e,P=Math.random()*1e4;const O=We.mapLinear;let b={x:(l==null?void 0:l.x)??0+Math.cos(P/4*R)/8*h,y:(l==null?void 0:l.y)??0+Math.sin(P/4*R)/8*h,z:(l==null?void 0:l.z)??0+Math.sin(P/4*R)/20*h},Q={...i,y:(i==null?void 0:i.y)??0+O(Math.sin(P/4*R)/10,-.1,.1,...I)*y};oe((c,q)=>{P+=q,n(12,b={x:(l==null?void 0:l.x)??0+Math.cos(P/4*R)/8*h,y:(l==null?void 0:l.y)??0+Math.sin(P/4*R)/8*h,z:(l==null?void 0:l.z)??0+Math.sin(P/4*R)/20*h}),n(13,Q={...i,y:(i==null?void 0:i.y)??0+O(Math.sin(P/4*R)/10,-.1,.1,...I)*y})},{debugFrameloopMessage:"Float: framehandler"});function K(c){V=c,n(1,V)}function x(c){_=c,n(0,_)}function g(c){le.call(this,s,c)}function $(c){le.call(this,s,c)}return s.$$set=c=>{"position"in c&&n(14,i=c.position),"scale"in c&&n(2,u=c.scale),"rotation"in c&&n(15,l=c.rotation),"lookAt"in c&&n(3,r=c.lookAt),"viewportAware"in c&&n(4,f=c.viewportAware),"inViewport"in c&&n(0,_=c.inViewport),"castShadow"in c&&n(5,C=c.castShadow),"receiveShadow"in c&&n(6,m=c.receiveShadow),"frustumCulled"in c&&n(7,F=c.frustumCulled),"renderOrder"in c&&n(8,a=c.renderOrder),"visible"in c&&n(9,d=c.visible),"userData"in c&&n(10,D=c.userData),"dispose"in c&&n(11,E=c.dispose),"speed"in c&&n(16,R=c.speed),"rotationIntensity"in c&&n(17,h=c.rotationIntensity),"floatIntensity"in c&&n(18,y=c.floatIntensity),"floatingRange"in c&&n(19,I=c.floatingRange),"group"in c&&n(1,V=c.group),"$$scope"in c&&n(25,o=c.$$scope)},[_,V,u,r,f,C,m,F,a,d,D,E,b,Q,i,l,R,h,y,I,t,K,x,g,$,o]}class st extends G{constructor(e){super(),B(this,e,ot,nt,H,{position:14,scale:2,rotation:15,lookAt:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,speed:16,rotationIntensity:17,floatIntensity:18,floatingRange:19,group:1})}}const it=(s,e)=>{const n=Array.from(s);for(let t=0;t<s.length/3;t++)n[t*3]*=e.x,n[t*3+1]*=e.y,n[t*3+2]*=e.z;return n},rt=(s,e,n)=>{const t=e.slice();if(s==="heightfield")return t[3]*=n.x,t;if(s==="trimesh"||s==="convexHull")return t[0]=new Float32Array(it(t[0],n)),t;const o=[n.x,n.y,n.z];return t.map((i,u)=>o[u]*i)};function lt(s){let e;const n=s[18].default,t=J(n,s,s[19],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,i){t&&t.m(o,i),e=!0},p(o,i){t&&t.p&&(!e||i&524288)&&X(t,n,o,o[19],e?Z(n,o[19],i,null):Y(o[19]),null)},i(o){e||(w(t,o),e=!0)},o(o){A(t,o),e=!1},d(o){t&&t.d(o)}}}function at(s){let e,n;return e=new Ye({props:{object:s[3],position:s[0],rotation:s[1],scale:s[2]}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,o){const i={};o&1&&(i.position=t[0]),o&2&&(i.rotation=t[1]),o&4&&(i.scale=t[2]),e.$set(i)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function ft(s){let e,n,t,o;e=new pe({props:{object:s[3],$$slots:{default:[lt]},$$scope:{ctx:s}}});let i=!s[4]&&at(s);return{c(){k(e.$$.fragment),n=W(),i&&i.c(),t=U()},l(u){S(e.$$.fragment,u),n=p(u),i&&i.l(u),t=U()},m(u,l){M(e,u,l),T(u,n,l),i&&i.m(u,l),T(u,t,l),o=!0},p(u,[l]){const r={};l&524288&&(r.$$scope={dirty:l,ctx:u}),e.$set(r),u[4]||i.p(u,l)},i(u){o||(w(e.$$.fragment,u),w(i),o=!0)},o(u){A(e.$$.fragment,u),A(i),o=!1},d(u){v(e,u),u&&z(n),i&&i.d(u),u&&z(t)}}}function ut(s,e,n){let{$$slots:t={},$$scope:o}=e,{shape:i}=e,{args:u}=e,{position:l=void 0}=e,{rotation:r=void 0}=e,{scale:f=void 0}=e,{lookAt:_=void 0}=e,{restitution:C=void 0}=e,{restitutionCombineRule:m=void 0}=e,{friction:F=void 0}=e,{frictionCombineRule:a=void 0}=e,{sensor:d=void 0}=e,{contactForceEventThreshold:D=void 0}=e,{density:E=void 0}=e,{mass:R=void 0}=e,{massProperties:h=void 0}=e;const y=new je;Le(y,l,r,f,_),y.updateWorldMatrix(!0,!1);const I=Oe(),V=!!I,P=Qe(),{world:O}=P;let{collider:b=void 0}=e;const Q=Ge(),K=ze();De(async()=>{await Pe();const g=y.getWorldScale(new N),$=rt(i,u,g),c=Be[i](...$);if(n(5,b=O.createCollider(c,I)),P.addColliderToContext(b,y,K),Q.registerColliders([b]),V){const q=new N,ee=new ne;y.traverseAncestors(te=>{te.userData.isRigidBody&&(te.getWorldPosition(q),te.getWorldQuaternion(ee),ee.invert())});const Me=y.getWorldPosition(new N).sub(q),ve=y.getWorldQuaternion(new ne).premultiply(ee);b.setTranslationWrtParent(Me),b.setRotationWrtParent(ve)}else b.setTranslation(y.getWorldPosition(new N)),b.setRotation(y.getWorldQuaternion(new ne))});const{hasEventListeners:x}=He();return oe(()=>{!b||(b.setTranslation(qe(y)),b.setRotation(Ne(y)))},{autostart:!V}),Te(()=>{!b||(P.removeColliderFromContext(b),Q.removeColliders([b]),O.removeCollider(b,!0))}),s.$$set=g=>{"shape"in g&&n(6,i=g.shape),"args"in g&&n(7,u=g.args),"position"in g&&n(0,l=g.position),"rotation"in g&&n(1,r=g.rotation),"scale"in g&&n(2,f=g.scale),"lookAt"in g&&n(8,_=g.lookAt),"restitution"in g&&n(9,C=g.restitution),"restitutionCombineRule"in g&&n(10,m=g.restitutionCombineRule),"friction"in g&&n(11,F=g.friction),"frictionCombineRule"in g&&n(12,a=g.frictionCombineRule),"sensor"in g&&n(13,d=g.sensor),"contactForceEventThreshold"in g&&n(14,D=g.contactForceEventThreshold),"density"in g&&n(15,E=g.density),"mass"in g&&n(16,R=g.mass),"massProperties"in g&&n(17,h=g.massProperties),"collider"in g&&n(5,b=g.collider),"$$scope"in g&&n(19,o=g.$$scope)},s.$$.update=()=>{var g;s.$$.dirty&261664&&b&&(Ue(b,x,(g=I==null?void 0:I.userData)==null?void 0:g.hasEventListeners),b.setActiveCollisionTypes(Je.ALL),b.setRestitution(C??0),b.setContactForceEventThreshold(1),b.setRestitutionCombineRule(m??ae.Average),b.setFriction(F??.7),b.setFrictionCombineRule(a??ae.Average),b.setSensor(d??!1),b.setContactForceEventThreshold(D??0),E&&b.setDensity(E),R&&b.setMass(R),h&&b.setMassProperties(h.mass,fe(h.centerOfMass),fe(h.principalAngularInertia),Xe(h.angularInertiaLocalFrame)))},[l,r,f,y,V,b,i,u,_,C,m,F,a,d,D,E,R,h,t,o]}class ct extends G{constructor(e){super(),B(this,e,ut,ft,H,{shape:6,args:7,position:0,rotation:1,scale:2,lookAt:8,restitution:9,restitutionCombineRule:10,friction:11,frictionCombineRule:12,sensor:13,contactForceEventThreshold:14,density:15,mass:16,massProperties:17,collider:5})}}const mt=s=>({position:s&1,rotation:s&2}),ue=s=>({position:s[0],rotation:s[1]});function dt(s){let e;const n=s[4].default,t=J(n,s,s[3],ue);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,i){t&&t.m(o,i),e=!0},p(o,[i]){t&&t.p&&(!e||i&11)&&X(t,n,o,o[3],e?Z(n,o[3],i,mt):Y(o[3]),ue)},i(o){e||(w(t,o),e=!0)},o(o){A(t,o),e=!1},d(o){t&&t.d(o)}}}function gt(s,e,n){let t,o=L,i=()=>(o(),o=Fe(C,m=>n(5,t=m)),C);s.$$.on_destroy.push(()=>o());let{$$slots:u={},$$scope:l}=e,{position:r=void 0}=e,{rotation:f=void 0}=e;const _={x:0,y:0,angle:(f==null?void 0:f.y)??0,width:10,height:10};let{movement:C}=e;return i(),oe(()=>{var m,F;et({thrust:-t.y/2.4,breaks:0,angle:t.x/10})(_),n(0,r={x:Math.cos(_.angle)*(((m=_.physics)==null?void 0:m.momentum.magnitude)??0)+((r==null?void 0:r.x)??0),z:-Math.sin(_.angle)*(((F=_.physics)==null?void 0:F.momentum.magnitude)??0)+((r==null?void 0:r.z)??0)}),n(1,f={y:_.angle})}),s.$$set=m=>{"position"in m&&n(0,r=m.position),"rotation"in m&&n(1,f=m.rotation),"movement"in m&&i(n(2,C=m.movement)),"$$scope"in m&&n(3,l=m.$$scope)},[r,f,C,l,u]}class _t extends G{constructor(e){super(),B(this,e,gt,dt,H,{position:0,rotation:1,movement:2})}}function ht(s){let e,n;return e=new ke({props:{castShadow:!0,url:ye+"/models/honey_pot_picnic/bee.glb",scale:2,rotation:{y:-122.5*j}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p:L,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function bt(s){let e,n,t,o,i;e=new ct({props:{mass:1,shape:"cuboid",args:[1.25,.4,.5]}}),t=new st({props:{speed:9,rotationIntensity:.3,floatIntensity:6,$$slots:{default:[ht]},$$scope:{ctx:s}}});const u=s[2].default,l=J(u,s,s[3],null);return{c(){k(e.$$.fragment),n=W(),k(t.$$.fragment),o=W(),l&&l.c()},l(r){S(e.$$.fragment,r),n=p(r),S(t.$$.fragment,r),o=p(r),l&&l.l(r)},m(r,f){M(e,r,f),T(r,n,f),M(t,r,f),T(r,o,f),l&&l.m(r,f),i=!0},p(r,f){const _={};f&8&&(_.$$scope={dirty:f,ctx:r}),t.$set(_),l&&l.p&&(!i||f&8)&&X(l,u,r,r[3],i?Z(u,r[3],f,null):Y(r[3]),null)},i(r){i||(w(e.$$.fragment,r),w(t.$$.fragment,r),w(l,r),i=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),A(l,r),i=!1},d(r){v(e,r),r&&z(n),v(t,r),r&&z(o),l&&l.d(r)}}}function wt(s){let e,n;return e=new Ce({props:{position:s[0],rotation:s[1],$$slots:{default:[bt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,[o]){const i={};o&1&&(i.position=t[0]),o&2&&(i.rotation=t[1]),o&8&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function At(s,e,n){let{$$slots:t={},$$scope:o}=e,{position:i}=e,{rotation:u=void 0}=e;return s.$$set=l=>{"position"in l&&n(0,i=l.position),"rotation"in l&&n(1,u=l.rotation),"$$scope"in l&&n(3,o=l.$$scope)},[i,u,t,o]}class Se extends G{constructor(e){super(),B(this,e,At,wt,H,{position:0,rotation:1})}}function ce(s,e,n){const t=s.slice();return t[2]=e[n],t[4]=n,t}function yt(s){let e,n;return e=new ke({props:{castShadow:!0,url:ye+"/models/wheat_farm_at_sunset/scene.gltf",scale:400,position:{y:-300,x:-700}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p:L,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ct(s){let e,n;return e=new $e({props:{rotation:{x:-90*j,z:90*j,y:70*j},position:{y:5,x:10},fov:60}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p:L,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Rt(s){let e,n;return e=new Se({props:{position:s[5],rotation:s[6],$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,o){const i={};o&32&&(i.position=t[5]),o&64&&(i.rotation=t[6]),o&128&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function kt(s){let e,n;return{c(){e=de("p"),n=ge("hi anna! used the Arrows to fly ~"),this.h()},l(t){e=_e(t,"P",{class:!0});var o=he(e);n=be(o,"hi anna! used the Arrows to fly ~"),o.forEach(z),this.h()},h(){we(e,"class","text-xs text-black")},m(t,o){T(t,e,o),Ae(e,n)},p:L,d(t){t&&z(e)}}}function St(s){let e,n=s[2].text+"",t;return{c(){e=de("p"),t=ge(n),this.h()},l(o){e=_e(o,"P",{class:!0});var i=he(e);t=be(i,n),i.forEach(z),this.h()},h(){we(e,"class","text-xs text-black")},m(o,i){T(o,e,i),Ae(e,t)},p:L,d(o){o&&z(e)}}}function Mt(s){let e,n,t;return e=new Re({props:{rotation:{y:270*j},transform:!0,position:{x:3},$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),n=W()},l(o){S(e.$$.fragment,o),n=p(o)},m(o,i){M(e,o,i),T(o,n,i),t=!0},p(o,i){const u={};i&128&&(u.$$scope={dirty:i,ctx:o}),e.$set(u)},i(o){t||(w(e.$$.fragment,o),t=!0)},o(o){A(e.$$.fragment,o),t=!1},d(o){v(e,o),o&&z(n)}}}function me(s){let e,n;return e=new Se({props:{position:{...s[2].pos,x:-80*s[4]-60},rotation:{y:182.5*j},$$slots:{default:[Mt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,o){const i={};o&128&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function vt(s){let e,n,t,o,i,u,l,r,f,_;e=new Ze({props:{position:{y:5,x:8,z:-3}}}),t=new Ke({props:{shape:"cuboid",position:{y:-.5},$$slots:{default:[yt]},$$scope:{ctx:s}}}),i=new _t({props:{movement:xe(),$$slots:{default:[Rt,({position:a,rotation:d})=>({5:a,6:d}),({position:a,rotation:d})=>(a?32:0)|(d?64:0)]},$$scope:{ctx:s}}}),l=new Re({props:{rotation:{y:90*j},transform:!0,position:{x:3},$$slots:{default:[kt]},$$scope:{ctx:s}}});let C=s[0],m=[];for(let a=0;a<C.length;a+=1)m[a]=me(ce(s,C,a));const F=a=>A(m[a],1,1,()=>{m[a]=null});return{c(){k(e.$$.fragment),n=W(),k(t.$$.fragment),o=W(),k(i.$$.fragment),u=W(),k(l.$$.fragment),r=W();for(let a=0;a<m.length;a+=1)m[a].c();f=U()},l(a){S(e.$$.fragment,a),n=p(a),S(t.$$.fragment,a),o=p(a),S(i.$$.fragment,a),u=p(a),S(l.$$.fragment,a),r=p(a);for(let d=0;d<m.length;d+=1)m[d].l(a);f=U()},m(a,d){M(e,a,d),T(a,n,d),M(t,a,d),T(a,o,d),M(i,a,d),T(a,u,d),M(l,a,d),T(a,r,d);for(let D=0;D<m.length;D+=1)m[D].m(a,d);T(a,f,d),_=!0},p(a,[d]){const D={};d&128&&(D.$$scope={dirty:d,ctx:a}),t.$set(D);const E={};d&224&&(E.$$scope={dirty:d,ctx:a}),i.$set(E);const R={};if(d&128&&(R.$$scope={dirty:d,ctx:a}),l.$set(R),d&1){C=a[0];let h;for(h=0;h<C.length;h+=1){const y=ce(a,C,h);m[h]?(m[h].p(y,d),w(m[h],1)):(m[h]=me(y),m[h].c(),w(m[h],1),m[h].m(f.parentNode,f))}for(Ee(),h=C.length;h<m.length;h+=1)F(h);Ie()}},i(a){if(!_){w(e.$$.fragment,a),w(t.$$.fragment,a),w(i.$$.fragment,a),w(l.$$.fragment,a);for(let d=0;d<C.length;d+=1)w(m[d]);_=!0}},o(a){A(e.$$.fragment,a),A(t.$$.fragment,a),A(i.$$.fragment,a),A(l.$$.fragment,a),m=m.filter(Boolean);for(let d=0;d<m.length;d+=1)A(m[d]);_=!1},d(a){v(e,a),a&&z(n),v(t,a),a&&z(o),v(i,a),a&&z(u),v(l,a),a&&z(r),Ve(m,a),a&&z(f)}}}function zt(s){const e=()=>Math.random()*5-2.5;return[[{text:"hi anna!",pos:{y:e(),z:e()}},{text:"i love you!",pos:{y:e(),z:e()}},{text:"miss u so much",pos:{y:e(),z:e()}},{text:"hehe cute bees",pos:{y:e(),z:e()}},{text:"is this cool?",pos:{y:e(),z:e()}},{text:"one last bee!",pos:{y:e(),z:e()}},{text:"bye bye~",pos:{y:e(),z:e()}}]]}class It extends G{constructor(e){super(),B(this,e,zt,vt,H,{})}}export{It as S};