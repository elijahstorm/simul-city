import{a3 as Gg,U as FI,a4 as Hg,B as yI,a2 as mg,A as FB,a5 as qg,S as iI,i as oI,s as gI,E as wI,H as cI,I as GI,J as SI,f as AA,t as gA,L as $A,w as FA,x as RA,y as qA,z as dA,k as Vg,l as _g,m as JC,h as fA,n as sC,b as WA,a6 as GE,F as yC,g as tg,d as ag,a7 as Ja,o as co,a8 as tE,a9 as XI,aa as aD,a0 as qQ,ab as dg,a as LI,c as HI,ac as pg,ad as KA,ae as Fa,e as JI,V as rQ,af as SE,X as lE,M as KC,Y as Go,D as So,W as ie,ag as Ra,Q as sD,ah as qa,ai as DD,q as Qi,r as Ei}from"./index-cdbf168b.js";import{c as nD}from"./shared-23917130.js";import{c as da,E as hD}from"./Engine-4332f20a.js";const lo="148",rD=0,oe=1,wD=2,pa=1,fa=2,aQ=3,qC=0,Rg=1,YE=2,HQ=3,FC=0,UB=1,ee=2,te=3,ae=4,cD=5,yB=100,GD=101,SD=102,se=103,De=104,lD=200,kD=201,yD=202,MD=203,Ya=204,ua=205,KD=206,UD=207,ND=208,JD=209,FD=210,RD=0,qD=1,dD=2,ji=3,pD=4,fD=5,YD=6,uD=7,La=0,LD=1,HD=2,Xg=0,mD=1,bD=2,TD=3,Ha=4,xD=5,ma=300,RB=301,qB=302,Vi=303,_i=304,uE=306,dB=1e3,wg=1001,kE=1002,VI=1003,Xi=1004,aE=1005,og=1006,ba=1007,IB=1008,gB=1009,OD=1010,ZD=1011,Ta=1012,WD=1013,VC=1014,UC=1015,wQ=1016,vD=1017,PD=1018,NB=1020,jD=1021,VD=1022,Jg=1023,_D=1024,XD=1025,zC=1026,pB=1027,zD=1028,$D=1029,An=1030,In=1031,gn=1033,ii=33776,oi=33777,ei=33778,ti=33779,ne=35840,he=35841,re=35842,we=35843,Cn=36196,ce=37492,Ge=37496,Se=37808,le=37809,ke=37810,ye=37811,Me=37812,Ke=37813,Ue=37814,Ne=37815,Je=37816,Fe=37817,Re=37818,qe=37819,de=37820,pe=37821,fe=36492,cQ=2300,fB=2301,ai=2302,Ye=2400,ue=2401,Le=2402,Bn=2500,Qn=1,xa=2,dC=3e3,EI=3001,En=3200,on=3201,Oa=0,en=1,Zg="srgb",GQ="srgb-linear",si=7680,tn=519,zi=35044,He="300 es",$i=1035;class OB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,E=C.length;B<E;B++)C[B].call(this,A);A.target=null}}}const $I=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let me=1234567;const DQ=Math.PI/180,SQ=180/Math.PI;function bg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return($I[Q&255]+$I[Q>>8&255]+$I[Q>>16&255]+$I[Q>>24&255]+"-"+$I[A&255]+$I[A>>8&255]+"-"+$I[A>>16&15|64]+$I[A>>24&255]+"-"+$I[I&63|128]+$I[I>>8&255]+"-"+$I[I>>16&255]+$I[I>>24&255]+$I[g&255]+$I[g>>8&255]+$I[g>>16&255]+$I[g>>24&255]).toLowerCase()}function Eg(Q,A,I){return Math.max(A,Math.min(I,Q))}function ko(Q,A){return(Q%A+A)%A}function an(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function sn(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function nQ(Q,A,I){return(1-I)*Q+I*A}function Dn(Q,A,I,g){return nQ(Q,A,1-Math.exp(-I*g))}function nn(Q,A=1){return A-Math.abs(ko(Q,A*2)-A)}function hn(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function rn(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function wn(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function cn(Q,A){return Q+Math.random()*(A-Q)}function Gn(Q){return Q*(.5-Math.random())}function Sn(Q){Q!==void 0&&(me=Q);let A=me+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function ln(Q){return Q*DQ}function kn(Q){return Q*SQ}function Ao(Q){return(Q&Q-1)===0&&Q!==0}function Za(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function yE(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function yn(Q,A,I,g,C){const B=Math.cos,E=Math.sin,i=B(I/2),o=E(I/2),e=B((A+g)/2),t=E((A+g)/2),a=B((A-g)/2),s=E((A-g)/2),D=B((g-A)/2),r=E((g-A)/2);switch(C){case"XYX":Q.set(i*t,o*a,o*s,i*e);break;case"YZY":Q.set(o*s,i*t,o*a,i*e);break;case"ZXZ":Q.set(o*a,o*s,i*t,i*e);break;case"XZX":Q.set(i*t,o*r,o*D,i*e);break;case"YXY":Q.set(o*D,i*t,o*r,i*e);break;case"ZYZ":Q.set(o*r,o*D,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function DC(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function nI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}var Mn=Object.freeze({__proto__:null,DEG2RAD:DQ,RAD2DEG:SQ,generateUUID:bg,clamp:Eg,euclideanModulo:ko,mapLinear:an,inverseLerp:sn,lerp:nQ,damp:Dn,pingpong:nn,smoothstep:hn,smootherstep:rn,randInt:wn,randFloat:cn,randFloatSpread:Gn,seededRandom:Sn,degToRad:ln,radToDeg:kn,isPowerOfTwo:Ao,ceilPowerOfTwo:Za,floorPowerOfTwo:yE,setQuaternionFromProperEuler:yn,normalize:nI,denormalize:DC});class vA{constructor(A=0,I=0){vA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,E=this.y-A.y;return this.x=B*g-E*C+A.x,this.y=B*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cg{constructor(){cg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=B,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],D=g[5],r=g[8],n=C[0],h=C[3],w=C[6],G=C[1],S=C[4],l=C[7],y=C[2],M=C[5],p=C[8];return B[0]=E*n+i*G+o*y,B[3]=E*h+i*S+o*M,B[6]=E*w+i*l+o*p,B[1]=e*n+t*G+a*y,B[4]=e*h+t*S+a*M,B[7]=e*w+t*l+a*p,B[2]=s*n+D*G+r*y,B[5]=s*h+D*S+r*M,B[8]=s*w+D*l+r*p,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*B*t+g*i*o+C*B*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*B,D=e*B-E*o,r=I*a+g*s+C*D;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const n=1/r;return A[0]=a*n,A[1]=(C*e-t*g)*n,A[2]=(i*g-C*E)*n,A[3]=s*n,A[4]=(t*I-C*o)*n,A[5]=(C*B-i*I)*n,A[6]=D*n,A[7]=(g*o-e*I)*n,A[8]=(E*I-g*B)*n,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,E,i){const o=Math.cos(B),e=Math.sin(B);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(Di.makeScale(A,I)),this}rotate(A){return this.premultiply(Di.makeRotation(-A)),this}translate(A,I){return this.premultiply(Di.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Di=new cg;function Wa(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}function lQ(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function $C(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function sE(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const ni={[Zg]:{[GQ]:$C},[GQ]:{[Zg]:sE}},gg={legacyMode:!0,get workingColorSpace(){return GQ},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.legacyMode||A===I||!A||!I)return Q;if(ni[A]&&ni[A][I]!==void 0){const g=ni[A][I];return Q.r=g(Q.r),Q.g=g(Q.g),Q.b=g(Q.b),Q}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}},va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mI={r:0,g:0,b:0},Yg={h:0,s:0,l:0},mQ={h:0,s:0,l:0};function hi(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}function bQ(Q,A){return A.r=Q.r,A.g=Q.g,A.b=Q.b,A}class uA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=Zg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,gg.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=gg.workingColorSpace){return this.r=A,this.g=I,this.b=g,gg.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=gg.workingColorSpace){if(A=ko(A,1),I=Eg(I,0,1),g=Eg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,E=2*g-B;this.r=hi(E,B,A+1/3),this.g=hi(E,B,A),this.b=hi(E,B,A-1/3)}return gg.toWorkingColorSpace(this,C),this}setStyle(A,I=Zg){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let B;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,gg.toWorkingColorSpace(this,I),g(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,gg.toWorkingColorSpace(this,I),g(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const o=parseFloat(B[1])/360,e=parseFloat(B[2])/100,t=parseFloat(B[3])/100;return g(B[4]),this.setHSL(o,e,t,I)}break}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],E=B.length;if(E===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,gg.toWorkingColorSpace(this,I),this;if(E===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,gg.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=Zg){const g=va[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=$C(A.r),this.g=$C(A.g),this.b=$C(A.b),this}copyLinearToSRGB(A){return this.r=sE(A.r),this.g=sE(A.g),this.b=sE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Zg){return gg.fromWorkingColorSpace(bQ(this,mI),A),Eg(mI.r*255,0,255)<<16^Eg(mI.g*255,0,255)<<8^Eg(mI.b*255,0,255)<<0}getHexString(A=Zg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=gg.workingColorSpace){gg.fromWorkingColorSpace(bQ(this,mI),I);const g=mI.r,C=mI.g,B=mI.b,E=Math.max(g,C,B),i=Math.min(g,C,B);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=gg.workingColorSpace){return gg.fromWorkingColorSpace(bQ(this,mI),I),A.r=mI.r,A.g=mI.g,A.b=mI.b,A}getStyle(A=Zg){return gg.fromWorkingColorSpace(bQ(this,mI),A),A!==Zg?`color(${A} ${mI.r} ${mI.g} ${mI.b})`:`rgb(${mI.r*255|0},${mI.g*255|0},${mI.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(Yg),Yg.h+=A,Yg.s+=I,Yg.l+=g,this.setHSL(Yg.h,Yg.s,Yg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Yg),A.getHSL(mQ);const g=nQ(Yg.h,mQ.h,I),C=nQ(Yg.s,mQ.s,I),B=nQ(Yg.l,mQ.l,I);return this.setHSL(g,C,B),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}uA.NAMES=va;let oB;class Pa{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{oB===void 0&&(oB=lQ("canvas")),oB.width=A.width,oB.height=A.height;const g=oB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=oB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=lQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let E=0;E<B.length;E++)B[E]=$C(B[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor($C(I[g]/255)*255):I[g]=$C(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class ja{constructor(A=null){this.isSource=!0,this.uuid=bg(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?B.push(ri(C[E].image)):B.push(ri(C[E]))}else B=ri(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function ri(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Pa.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kn=0;class _I extends OB{constructor(A=_I.DEFAULT_IMAGE,I=_I.DEFAULT_MAPPING,g=wg,C=wg,B=og,E=IB,i=Jg,o=gB,e=_I.DEFAULT_ANISOTROPY,t=dC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kn++}),this.uuid=bg(),this.name="",this.source=new ja(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new vA(0,0),this.repeat=new vA(1,1),this.center=new vA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cg,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ma)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case dB:A.x=A.x-Math.floor(A.x);break;case wg:A.x=A.x<0?0:1;break;case kE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case dB:A.y=A.y-Math.floor(A.y);break;case wg:A.y=A.y<0?0:1;break;case kE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}_I.DEFAULT_IMAGE=null;_I.DEFAULT_MAPPING=ma;_I.DEFAULT_ANISOTROPY=1;class hI{constructor(A=0,I=0,g=0,C=1){hI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*B,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*B,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*B,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,e=o[0],t=o[4],a=o[8],s=o[1],D=o[5],r=o[9],n=o[2],h=o[6],w=o[10];if(Math.abs(t-s)<.01&&Math.abs(a-n)<.01&&Math.abs(r-h)<.01){if(Math.abs(t+s)<.1&&Math.abs(a+n)<.1&&Math.abs(r+h)<.1&&Math.abs(e+D+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const S=(e+1)/2,l=(D+1)/2,y=(w+1)/2,M=(t+s)/4,p=(a+n)/4,k=(r+h)/4;return S>l&&S>y?S<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(S),C=M/g,B=p/g):l>y?l<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(l),g=M/C,B=k/C):y<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(y),g=p/B,C=k/B),this.set(g,C,B,I),this}let G=Math.sqrt((h-r)*(h-r)+(a-n)*(a-n)+(s-t)*(s-t));return Math.abs(G)<.001&&(G=1),this.x=(h-r)/G,this.y=(a-n)/G,this.z=(s-t)/G,this.w=Math.acos((e+D+w-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pC extends OB{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new hI(0,0,A,I),this.scissorTest=!1,this.viewport=new hI(0,0,A,I);const C={width:A,height:I,depth:1};this.texture=new _I(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:og,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new ja(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends _I{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=VI,this.minFilter=VI,this.wrapR=wg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un extends _I{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=VI,this.minFilter=VI,this.wrapR=wg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=B[E+0],D=B[E+1],r=B[E+2],n=B[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=D,A[I+2]=r,A[I+3]=n;return}if(a!==n||o!==s||e!==D||t!==r){let h=1-i;const w=o*s+e*D+t*r+a*n,G=w>=0?1:-1,S=1-w*w;if(S>Number.EPSILON){const y=Math.sqrt(S),M=Math.atan2(y,w*G);h=Math.sin(h*M)/y,i=Math.sin(i*M)/y}const l=i*G;if(o=o*h+s*l,e=e*h+D*l,t=t*h+r*l,a=a*h+n*l,h===1-i){const y=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=y,e*=y,t*=y,a*=y}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=B[E],s=B[E+1],D=B[E+2],r=B[E+3];return A[I]=i*r+t*a+o*D-e*s,A[I+1]=o*r+t*s+e*a-i*D,A[I+2]=e*r+t*D+i*s-o*a,A[I+3]=t*r-i*a-o*s-e*D,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(B/2),s=o(g/2),D=o(C/2),r=o(B/2);switch(E){case"XYZ":this._x=s*t*a+e*D*r,this._y=e*D*a-s*t*r,this._z=e*t*r+s*D*a,this._w=e*t*a-s*D*r;break;case"YXZ":this._x=s*t*a+e*D*r,this._y=e*D*a-s*t*r,this._z=e*t*r-s*D*a,this._w=e*t*a+s*D*r;break;case"ZXY":this._x=s*t*a-e*D*r,this._y=e*D*a+s*t*r,this._z=e*t*r+s*D*a,this._w=e*t*a-s*D*r;break;case"ZYX":this._x=s*t*a-e*D*r,this._y=e*D*a+s*t*r,this._z=e*t*r-s*D*a,this._w=e*t*a+s*D*r;break;case"YZX":this._x=s*t*a+e*D*r,this._y=e*D*a+s*t*r,this._z=e*t*r-s*D*a,this._w=e*t*a-s*D*r;break;case"XZY":this._x=s*t*a-e*D*r,this._y=e*D*a-s*t*r,this._z=e*t*r+s*D*a,this._w=e*t*a+s*D*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const D=.5/Math.sqrt(s+1);this._w=.25/D,this._x=(t-o)*D,this._y=(B-e)*D,this._z=(E-C)*D}else if(g>i&&g>a){const D=2*Math.sqrt(1+g-i-a);this._w=(t-o)/D,this._x=.25*D,this._y=(C+E)/D,this._z=(B+e)/D}else if(i>a){const D=2*Math.sqrt(1+i-g-a);this._w=(B-e)/D,this._x=(C+E)/D,this._y=.25*D,this._z=(o+t)/D}else{const D=2*Math.sqrt(1+a-g-i);this._w=(E-C)/D,this._x=(B+e)/D,this._y=(o+t)/D,this._z=.25*D}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Eg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-B*o,this._y=C*t+E*o+B*i-g*e,this._z=B*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-B*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+B*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=B,this;const o=1-i*i;if(o<=Number.EPSILON){const D=1-I;return this._w=D*E+I*this._w,this._x=D*g+I*this._x,this._y=D*C+I*this._y,this._z=D*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u{constructor(A=0,I=0,g=0){u.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(be.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(be.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,E=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*E,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*E,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,E=A.y,i=A.z,o=A.w,e=o*I+E*C-i*g,t=o*g+i*I-B*C,a=o*C+B*g-E*I,s=-B*I-E*g-i*C;return this.x=e*o+s*-B+t*-i-a*-E,this.y=t*o+s*-E+a*-B-e*-i,this.z=a*o+s*-i+e*-E-t*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-B*i,this.y=B*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return wi.copy(this).projectOnVector(A),this.sub(wi)}reflect(A){return this.sub(wi.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Eg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wi=new u,be=new Sg;class ZB{constructor(A=new u(1/0,1/0,1/0),I=new u(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,C=1/0,B=-1/0,E=-1/0,i=-1/0;for(let o=0,e=A.length;o<e;o+=3){const t=A[o],a=A[o+1],s=A[o+2];t<I&&(I=t),a<g&&(g=a),s<C&&(C=s),t>B&&(B=t),a>E&&(E=a),s>i&&(i=s)}return this.min.set(I,g,C),this.max.set(B,E,i),this}setFromBufferAttribute(A){let I=1/0,g=1/0,C=1/0,B=-1/0,E=-1/0,i=-1/0;for(let o=0,e=A.count;o<e;o++){const t=A.getX(o),a=A.getY(o),s=A.getZ(o);t<I&&(I=t),a<g&&(g=a),s<C&&(C=s),t>B&&(B=t),a>E&&(E=a),s>i&&(i=s)}return this.min.set(I,g,C),this.max.set(B,E,i),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=xC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const B=g.attributes.position;for(let E=0,i=B.count;E<i;E++)xC.fromBufferAttribute(B,E).applyMatrix4(A.matrixWorld),this.expandByPoint(xC)}else g.boundingBox===null&&g.computeBoundingBox(),ci.copy(g.boundingBox),ci.applyMatrix4(A.matrixWorld),this.union(ci);const C=A.children;for(let B=0,E=C.length;B<E;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,xC),xC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(AQ),TQ.subVectors(this.max,AQ),eB.subVectors(A.a,AQ),tB.subVectors(A.b,AQ),aB.subVectors(A.c,AQ),rC.subVectors(tB,eB),wC.subVectors(aB,tB),OC.subVectors(eB,aB);let I=[0,-rC.z,rC.y,0,-wC.z,wC.y,0,-OC.z,OC.y,rC.z,0,-rC.x,wC.z,0,-wC.x,OC.z,0,-OC.x,-rC.y,rC.x,0,-wC.y,wC.x,0,-OC.y,OC.x,0];return!Gi(I,eB,tB,aB,TQ)||(I=[1,0,0,0,1,0,0,0,1],!Gi(I,eB,tB,aB,TQ))?!1:(xQ.crossVectors(rC,wC),I=[xQ.x,xQ.y,xQ.z],Gi(I,eB,tB,aB,TQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return xC.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(xC).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(QC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),QC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),QC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),QC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),QC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),QC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),QC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),QC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(QC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const QC=[new u,new u,new u,new u,new u,new u,new u,new u],xC=new u,ci=new ZB,eB=new u,tB=new u,aB=new u,rC=new u,wC=new u,OC=new u,AQ=new u,TQ=new u,xQ=new u,ZC=new u;function Gi(Q,A,I,g,C){for(let B=0,E=Q.length-3;B<=E;B+=3){ZC.fromArray(Q,B);const i=C.x*Math.abs(ZC.x)+C.y*Math.abs(ZC.y)+C.z*Math.abs(ZC.z),o=A.dot(ZC),e=I.dot(ZC),t=g.dot(ZC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Nn=new ZB,IQ=new u,Si=new u;class WB{constructor(A=new u,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Nn.setFromPoints(A).getCenter(g);let C=0;for(let B=0,E=A.length;B<E;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;IQ.subVectors(A,this.center);const I=IQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(IQ,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Si.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(IQ.copy(A.center).add(Si)),this.expandByPoint(IQ.copy(A.center).sub(Si))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const EC=new u,li=new u,OQ=new u,cC=new u,ki=new u,ZQ=new u,yi=new u;class LE{constructor(A=new u,I=new u(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,EC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=EC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(EC.copy(this.direction).multiplyScalar(I).add(this.origin),EC.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){li.copy(A).add(I).multiplyScalar(.5),OQ.copy(I).sub(A).normalize(),cC.copy(this.origin).sub(li);const B=A.distanceTo(I)*.5,E=-this.direction.dot(OQ),i=cC.dot(this.direction),o=-cC.dot(OQ),e=cC.lengthSq(),t=Math.abs(1-E*E);let a,s,D,r;if(t>0)if(a=E*o-i,s=E*i-o,r=B*t,a>=0)if(s>=-r)if(s<=r){const n=1/t;a*=n,s*=n,D=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s=-B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s<=-r?(a=Math.max(0,-(-E*B+i)),s=a>0?-B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e):s<=r?(a=0,s=Math.min(Math.max(-B,-o),B),D=s*(s+2*o)+e):(a=Math.max(0,-(E*B+i)),s=a>0?B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e);else s=E>0?-B:B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;return g&&g.copy(this.direction).multiplyScalar(a).add(this.origin),C&&C.copy(OQ).multiplyScalar(s).add(li),D}intersectSphere(A,I){EC.subVectors(A.center,this.origin);const g=EC.dot(this.direction),C=EC.dot(EC)-g*g,B=A.radius*A.radius;if(C>B)return null;const E=Math.sqrt(B-C),i=g-E,o=g+E;return i<0&&o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(B=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(B=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||B>C||((B>g||isNaN(g))&&(g=B),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,EC)!==null}intersectTriangle(A,I,g,C,B){ki.subVectors(I,A),ZQ.subVectors(g,A),yi.crossVectors(ki,ZQ);let E=this.direction.dot(yi),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;cC.subVectors(this.origin,A);const o=i*this.direction.dot(ZQ.crossVectors(cC,ZQ));if(o<0)return null;const e=i*this.direction.dot(ki.cross(cC));if(e<0||o+e>E)return null;const t=-i*cC.dot(yi);return t<0?null:this.at(t/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bA{constructor(){bA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,B,E,i,o,e,t,a,s,D,r,n,h){const w=this.elements;return w[0]=A,w[4]=I,w[8]=g,w[12]=C,w[1]=B,w[5]=E,w[9]=i,w[13]=o,w[2]=e,w[6]=t,w[10]=a,w[14]=s,w[3]=D,w[7]=r,w[11]=n,w[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/sB.setFromMatrixColumn(A,0).length(),B=1/sB.setFromMatrixColumn(A,1).length(),E=1/sB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=E*t,D=E*a,r=i*t,n=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=D+r*e,I[5]=s-n*e,I[9]=-i*o,I[2]=n-s*e,I[6]=r+D*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,D=o*a,r=e*t,n=e*a;I[0]=s+n*i,I[4]=r*i-D,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=D*i-r,I[6]=n+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,D=o*a,r=e*t,n=e*a;I[0]=s-n*i,I[4]=-E*a,I[8]=r+D*i,I[1]=D+r*i,I[5]=E*t,I[9]=n-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,D=E*a,r=i*t,n=i*a;I[0]=o*t,I[4]=r*e-D,I[8]=s*e+n,I[1]=o*a,I[5]=n*e+s,I[9]=D*e-r,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,D=E*e,r=i*o,n=i*e;I[0]=o*t,I[4]=n-s*a,I[8]=r*a+D,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=D*a+r,I[10]=s-n*a}else if(A.order==="XZY"){const s=E*o,D=E*e,r=i*o,n=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+n,I[5]=E*t,I[9]=D*a-r,I[2]=r*a-D,I[6]=i*t,I[10]=n*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Jn,A,Fn)}lookAt(A,I,g){const C=this.elements;return ng.subVectors(A,I),ng.lengthSq()===0&&(ng.z=1),ng.normalize(),GC.crossVectors(g,ng),GC.lengthSq()===0&&(Math.abs(g.z)===1?ng.x+=1e-4:ng.z+=1e-4,ng.normalize(),GC.crossVectors(g,ng)),GC.normalize(),WQ.crossVectors(ng,GC),C[0]=GC.x,C[4]=WQ.x,C[8]=ng.x,C[1]=GC.y,C[5]=WQ.y,C[9]=ng.y,C[2]=GC.z,C[6]=WQ.z,C[10]=ng.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],D=g[13],r=g[2],n=g[6],h=g[10],w=g[14],G=g[3],S=g[7],l=g[11],y=g[15],M=C[0],p=C[4],k=C[8],N=C[12],q=C[1],Y=C[5],b=C[9],d=C[13],m=C[2],F=C[6],Z=C[10],CA=C[14],v=C[3],BA=C[7],IA=C[11],R=C[15];return B[0]=E*M+i*q+o*m+e*v,B[4]=E*p+i*Y+o*F+e*BA,B[8]=E*k+i*b+o*Z+e*IA,B[12]=E*N+i*d+o*CA+e*R,B[1]=t*M+a*q+s*m+D*v,B[5]=t*p+a*Y+s*F+D*BA,B[9]=t*k+a*b+s*Z+D*IA,B[13]=t*N+a*d+s*CA+D*R,B[2]=r*M+n*q+h*m+w*v,B[6]=r*p+n*Y+h*F+w*BA,B[10]=r*k+n*b+h*Z+w*IA,B[14]=r*N+n*d+h*CA+w*R,B[3]=G*M+S*q+l*m+y*v,B[7]=G*p+S*Y+l*F+y*BA,B[11]=G*k+S*b+l*Z+y*IA,B[15]=G*N+S*d+l*CA+y*R,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],D=A[14],r=A[3],n=A[7],h=A[11],w=A[15];return r*(+B*o*a-C*e*a-B*i*s+g*e*s+C*i*D-g*o*D)+n*(+I*o*D-I*e*s+B*E*s-C*E*D+C*e*t-B*o*t)+h*(+I*e*a-I*i*D-B*E*a+g*E*D+B*i*t-g*e*t)+w*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],D=A[11],r=A[12],n=A[13],h=A[14],w=A[15],G=a*h*e-n*s*e+n*o*D-i*h*D-a*o*w+i*s*w,S=r*s*e-t*h*e-r*o*D+E*h*D+t*o*w-E*s*w,l=t*n*e-r*a*e+r*i*D-E*n*D-t*i*w+E*a*w,y=r*a*o-t*n*o-r*i*s+E*n*s+t*i*h-E*a*h,M=I*G+g*S+C*l+B*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const p=1/M;return A[0]=G*p,A[1]=(n*s*B-a*h*B-n*C*D+g*h*D+a*C*w-g*s*w)*p,A[2]=(i*h*B-n*o*B+n*C*e-g*h*e-i*C*w+g*o*w)*p,A[3]=(a*o*B-i*s*B-a*C*e+g*s*e+i*C*D-g*o*D)*p,A[4]=S*p,A[5]=(t*h*B-r*s*B+r*C*D-I*h*D-t*C*w+I*s*w)*p,A[6]=(r*o*B-E*h*B-r*C*e+I*h*e+E*C*w-I*o*w)*p,A[7]=(E*s*B-t*o*B+t*C*e-I*s*e-E*C*D+I*o*D)*p,A[8]=l*p,A[9]=(r*a*B-t*n*B-r*g*D+I*n*D+t*g*w-I*a*w)*p,A[10]=(E*n*B-r*i*B+r*g*e-I*n*e-E*g*w+I*i*w)*p,A[11]=(t*i*B-E*a*B-t*g*e+I*a*e+E*g*D-I*i*D)*p,A[12]=y*p,A[13]=(t*n*C-r*a*C+r*g*s-I*n*s-t*g*h+I*a*h)*p,A[14]=(r*i*C-E*n*C-r*g*o+I*n*o+E*g*h-I*i*h)*p,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*p,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,E=A.x,i=A.y,o=A.z,e=B*E,t=B*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,E){return this.set(1,g,B,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,E=I._y,i=I._z,o=I._w,e=B+B,t=E+E,a=i+i,s=B*e,D=B*t,r=B*a,n=E*t,h=E*a,w=i*a,G=o*e,S=o*t,l=o*a,y=g.x,M=g.y,p=g.z;return C[0]=(1-(n+w))*y,C[1]=(D+l)*y,C[2]=(r-S)*y,C[3]=0,C[4]=(D-l)*M,C[5]=(1-(s+w))*M,C[6]=(h+G)*M,C[7]=0,C[8]=(r+S)*p,C[9]=(h-G)*p,C[10]=(1-(s+n))*p,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=sB.set(C[0],C[1],C[2]).length();const E=sB.set(C[4],C[5],C[6]).length(),i=sB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],ug.copy(this);const e=1/B,t=1/E,a=1/i;return ug.elements[0]*=e,ug.elements[1]*=e,ug.elements[2]*=e,ug.elements[4]*=t,ug.elements[5]*=t,ug.elements[6]*=t,ug.elements[8]*=a,ug.elements[9]*=a,ug.elements[10]*=a,I.setFromRotationMatrix(ug),g.x=B,g.y=E,g.z=i,this}makePerspective(A,I,g,C,B,E){const i=this.elements,o=2*B/(I-A),e=2*B/(g-C),t=(I+A)/(I-A),a=(g+C)/(g-C),s=-(E+B)/(E-B),D=-2*E*B/(E-B);return i[0]=o,i[4]=0,i[8]=t,i[12]=0,i[1]=0,i[5]=e,i[9]=a,i[13]=0,i[2]=0,i[6]=0,i[10]=s,i[14]=D,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,I,g,C,B,E){const i=this.elements,o=1/(I-A),e=1/(g-C),t=1/(E-B),a=(I+A)*o,s=(g+C)*e,D=(E+B)*t;return i[0]=2*o,i[4]=0,i[8]=0,i[12]=-a,i[1]=0,i[5]=2*e,i[9]=0,i[13]=-s,i[2]=0,i[6]=0,i[10]=-2*t,i[14]=-D,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const sB=new u,ug=new bA,Jn=new u(0,0,0),Fn=new u(1,1,1),GC=new u,WQ=new u,ng=new u,Te=new bA,xe=new Sg;class QB{constructor(A=0,I=0,g=0,C=QB.DefaultOrder){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],D=C[10];switch(I){case"XYZ":this._y=Math.asin(Eg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,D),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-Eg(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,D),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(Eg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,D),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-Eg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,D),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(Eg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(i,D));break;case"XZY":this._z=Math.asin(-Eg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,B)):(this._x=Math.atan2(-t,D),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Te.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Te,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return xe.setFromEuler(this),this.setFromQuaternion(xe,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}QB.DefaultOrder="XYZ";QB.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yo{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Rn=0;const Oe=new u,DB=new Sg,iC=new bA,vQ=new u,gQ=new u,qn=new u,dn=new Sg,Ze=new u(1,0,0),We=new u(0,1,0),ve=new u(0,0,1),pn={type:"added"},Pe={type:"removed"};class II extends OB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rn++}),this.uuid=bg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=II.DefaultUp.clone();const A=new u,I=new QB,g=new Sg,C=new u(1,1,1);function B(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new bA},normalMatrix:{value:new cg}}),this.matrix=new bA,this.matrixWorld=new bA,this.matrixAutoUpdate=II.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=II.DefaultMatrixWorldAutoUpdate,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return DB.setFromAxisAngle(A,I),this.quaternion.multiply(DB),this}rotateOnWorldAxis(A,I){return DB.setFromAxisAngle(A,I),this.quaternion.premultiply(DB),this}rotateX(A){return this.rotateOnAxis(Ze,A)}rotateY(A){return this.rotateOnAxis(We,A)}rotateZ(A){return this.rotateOnAxis(ve,A)}translateOnAxis(A,I){return Oe.copy(A).applyQuaternion(this.quaternion),this.position.add(Oe.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Ze,A)}translateY(A){return this.translateOnAxis(We,A)}translateZ(A){return this.translateOnAxis(ve,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(iC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?vQ.copy(A):vQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),gQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?iC.lookAt(gQ,vQ,this.up):iC.lookAt(vQ,gQ,this.up),this.quaternion.setFromRotationMatrix(iC),C&&(iC.extractRotation(C.matrixWorld),DB.setFromRotationMatrix(iC),this.quaternion.premultiply(DB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(pn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Pe)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(Pe)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),iC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),iC.multiply(A.parent.matrixWorld)),A.applyMatrix4(iC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gQ,A,qn),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gQ,dn,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,E=C.length;B<E;B++){const i=C[B];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(B(A.materials,this.material[o]));C.material=i}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(B(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),D=E(A.animations),r=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),D.length>0&&(g.animations=D),r.length>0&&(g.nodes=r)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}II.DefaultUp=new u(0,1,0);II.DefaultMatrixAutoUpdate=!0;II.DefaultMatrixWorldAutoUpdate=!0;const Lg=new u,oC=new u,Mi=new u,eC=new u,nB=new u,hB=new u,je=new u,Ki=new u,Ui=new u,Ni=new u;class aC{constructor(A=new u,I=new u,g=new u){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Lg.subVectors(A,I),C.cross(Lg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Lg.subVectors(C,I),oC.subVectors(g,I),Mi.subVectors(A,I);const E=Lg.dot(Lg),i=Lg.dot(oC),o=Lg.dot(Mi),e=oC.dot(oC),t=oC.dot(Mi),a=E*e-i*i;if(a===0)return B.set(-2,-1,-1);const s=1/a,D=(e*o-i*t)*s,r=(E*t-i*o)*s;return B.set(1-D-r,r,D)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,eC),eC.x>=0&&eC.y>=0&&eC.x+eC.y<=1}static getUV(A,I,g,C,B,E,i,o){return this.getBarycoord(A,I,g,C,eC),o.set(0,0),o.addScaledVector(B,eC.x),o.addScaledVector(E,eC.y),o.addScaledVector(i,eC.z),o}static isFrontFacing(A,I,g,C){return Lg.subVectors(g,I),oC.subVectors(A,I),Lg.cross(oC).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Lg.subVectors(this.c,this.b),oC.subVectors(this.a,this.b),Lg.cross(oC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return aC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return aC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return aC.getUV(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return aC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return aC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let E,i;nB.subVectors(C,g),hB.subVectors(B,g),Ki.subVectors(A,g);const o=nB.dot(Ki),e=hB.dot(Ki);if(o<=0&&e<=0)return I.copy(g);Ui.subVectors(A,C);const t=nB.dot(Ui),a=hB.dot(Ui);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(nB,E);Ni.subVectors(A,B);const D=nB.dot(Ni),r=hB.dot(Ni);if(r>=0&&D<=r)return I.copy(B);const n=D*e-o*r;if(n<=0&&e>=0&&r<=0)return i=e/(e-r),I.copy(g).addScaledVector(hB,i);const h=t*r-D*a;if(h<=0&&a-t>=0&&D-r>=0)return je.subVectors(B,C),i=(a-t)/(a-t+(D-r)),I.copy(C).addScaledVector(je,i);const w=1/(h+n+s);return E=n*w,i=s*w,I.copy(g).addScaledVector(nB,E).addScaledVector(hB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let fn=0;class zg extends OB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=bg(),this.name="",this.type="Material",this.blending=UB,this.side=qC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ya,this.blendDst=ua,this.blendEquation=yB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const C=this[I];if(C===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==UB&&(g.blending=this.blending),this.side!==qC&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const E=[];for(const i in B){const o=B[i];delete o.metadata,E.push(o)}return E}if(I){const B=C(A.textures),E=C(A.images);B.length>0&&(g.textures=B),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class _C extends zg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new uA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const YI=new u,PQ=new vA;class qI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=zi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)PQ.fromBufferAttribute(this,I),PQ.applyMatrix3(A),this.setXY(I,PQ.x,PQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)YI.fromBufferAttribute(this,I),YI.applyMatrix3(A),this.setXYZ(I,YI.x,YI.y,YI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)YI.fromBufferAttribute(this,I),YI.applyMatrix4(A),this.setXYZ(I,YI.x,YI.y,YI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)YI.fromBufferAttribute(this,I),YI.applyNormalMatrix(A),this.setXYZ(I,YI.x,YI.y,YI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)YI.fromBufferAttribute(this,I),YI.transformDirection(A),this.setXYZ(I,YI.x,YI.y,YI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=DC(I,this.array)),I}setX(A,I){return this.normalized&&(I=nI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=DC(I,this.array)),I}setY(A,I){return this.normalized&&(I=nI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=DC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=nI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=DC(I,this.array)),I}setW(A,I){return this.normalized&&(I=nI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array),C=nI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array),C=nI(C,this.array),B=nI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==zi&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _a extends qI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Xa extends qI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class Tg extends qI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Yn=0;const Mg=new bA,Ji=new II,rB=new u,hg=new ZB,CQ=new ZB,jI=new u;class lg extends OB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yn++}),this.uuid=bg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Wa(A)?Xa:_a)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new cg().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Mg.makeRotationFromQuaternion(A),this.applyMatrix4(Mg),this}rotateX(A){return Mg.makeRotationX(A),this.applyMatrix4(Mg),this}rotateY(A){return Mg.makeRotationY(A),this.applyMatrix4(Mg),this}rotateZ(A){return Mg.makeRotationZ(A),this.applyMatrix4(Mg),this}translate(A,I,g){return Mg.makeTranslation(A,I,g),this.applyMatrix4(Mg),this}scale(A,I,g){return Mg.makeScale(A,I,g),this.applyMatrix4(Mg),this}lookAt(A){return Ji.lookAt(A),Ji.updateMatrix(),this.applyMatrix4(Ji.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rB).negate(),this.translate(rB.x,rB.y,rB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new Tg(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ZB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new u(-1/0,-1/0,-1/0),new u(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];hg.setFromBufferAttribute(B),this.morphTargetsRelative?(jI.addVectors(this.boundingBox.min,hg.min),this.boundingBox.expandByPoint(jI),jI.addVectors(this.boundingBox.max,hg.max),this.boundingBox.expandByPoint(jI)):(this.boundingBox.expandByPoint(hg.min),this.boundingBox.expandByPoint(hg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new WB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new u,1/0);return}if(A){const g=this.boundingSphere.center;if(hg.setFromBufferAttribute(A),I)for(let B=0,E=I.length;B<E;B++){const i=I[B];CQ.setFromBufferAttribute(i),this.morphTargetsRelative?(jI.addVectors(hg.min,CQ.min),hg.expandByPoint(jI),jI.addVectors(hg.max,CQ.max),hg.expandByPoint(jI)):(hg.expandByPoint(CQ.min),hg.expandByPoint(CQ.max))}hg.getCenter(g);let C=0;for(let B=0,E=A.count;B<E;B++)jI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(jI));if(I)for(let B=0,E=I.length;B<E;B++){const i=I[B],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)jI.fromBufferAttribute(i,e),o&&(rB.fromBufferAttribute(A,e),jI.add(rB)),C=Math.max(C,g.distanceToSquared(jI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qI(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,e=[],t=[];for(let q=0;q<i;q++)e[q]=new u,t[q]=new u;const a=new u,s=new u,D=new u,r=new vA,n=new vA,h=new vA,w=new u,G=new u;function S(q,Y,b){a.fromArray(C,q*3),s.fromArray(C,Y*3),D.fromArray(C,b*3),r.fromArray(E,q*2),n.fromArray(E,Y*2),h.fromArray(E,b*2),s.sub(a),D.sub(a),n.sub(r),h.sub(r);const d=1/(n.x*h.y-h.x*n.y);!isFinite(d)||(w.copy(s).multiplyScalar(h.y).addScaledVector(D,-n.y).multiplyScalar(d),G.copy(D).multiplyScalar(n.x).addScaledVector(s,-h.x).multiplyScalar(d),e[q].add(w),e[Y].add(w),e[b].add(w),t[q].add(G),t[Y].add(G),t[b].add(G))}let l=this.groups;l.length===0&&(l=[{start:0,count:g.length}]);for(let q=0,Y=l.length;q<Y;++q){const b=l[q],d=b.start,m=b.count;for(let F=d,Z=d+m;F<Z;F+=3)S(g[F+0],g[F+1],g[F+2])}const y=new u,M=new u,p=new u,k=new u;function N(q){p.fromArray(B,q*3),k.copy(p);const Y=e[q];y.copy(Y),y.sub(p.multiplyScalar(p.dot(Y))).normalize(),M.crossVectors(k,Y);const d=M.dot(t[q])<0?-1:1;o[q*4]=y.x,o[q*4+1]=y.y,o[q*4+2]=y.z,o[q*4+3]=d}for(let q=0,Y=l.length;q<Y;++q){const b=l[q],d=b.start,m=b.count;for(let F=d,Z=d+m;F<Z;F+=3)N(g[F+0]),N(g[F+1]),N(g[F+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new qI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,D=g.count;s<D;s++)g.setXYZ(s,0,0,0);const C=new u,B=new u,E=new u,i=new u,o=new u,e=new u,t=new u,a=new u;if(A)for(let s=0,D=A.count;s<D;s+=3){const r=A.getX(s+0),n=A.getX(s+1),h=A.getX(s+2);C.fromBufferAttribute(I,r),B.fromBufferAttribute(I,n),E.fromBufferAttribute(I,h),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),i.fromBufferAttribute(g,r),o.fromBufferAttribute(g,n),e.fromBufferAttribute(g,h),i.add(t),o.add(t),e.add(t),g.setXYZ(r,i.x,i.y,i.z),g.setXYZ(n,o.x,o.y,o.z),g.setXYZ(h,e.x,e.y,e.z)}else for(let s=0,D=I.count;s<D;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)jI.fromBufferAttribute(A,I),jI.normalize(),A.setXYZ(I,jI.x,jI.y,jI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let D=0,r=0;for(let n=0,h=o.length;n<h;n++){i.isInterleavedBufferAttribute?D=o[n]*i.data.stride+i.offset:D=o[n]*t;for(let w=0;w<t;w++)s[r++]=e[D++]}return new qI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new lg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const B=this.morphAttributes;for(const i in B){const o=[],e=B[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],D=A(s,g);o.push(D)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const D=e[a];t.push(D.toJSON(A.data))}t.length>0&&(C[o]=t,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const B=A.morphAttributes;for(const e in B){const t=[],a=B[e];for(let s=0,D=a.length;s<D;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ve=new bA,wB=new LE,Fi=new WB,BQ=new u,QQ=new u,EQ=new u,Ri=new u,jQ=new u,VQ=new vA,_Q=new vA,XQ=new vA,qi=new u,zQ=new u;let eg=class extends II{constructor(A=new lg,I=new _C){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(B&&i){jQ.set(0,0,0);for(let o=0,e=B.length;o<e;o++){const t=i[o],a=B[o];t!==0&&(Ri.fromBufferAttribute(a,A),E?jQ.addScaledVector(Ri,t):jQ.addScaledVector(Ri.sub(I),t))}I.add(jQ)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;if(C===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),Fi.copy(g.boundingSphere),Fi.applyMatrix4(B),A.ray.intersectsSphere(Fi)===!1)||(Ve.copy(B).invert(),wB.copy(A.ray).applyMatrix4(Ve),g.boundingBox!==null&&wB.intersectsBox(g.boundingBox)===!1))return;let E;const i=g.index,o=g.attributes.position,e=g.attributes.uv,t=g.attributes.uv2,a=g.groups,s=g.drawRange;if(i!==null)if(Array.isArray(C))for(let D=0,r=a.length;D<r;D++){const n=a[D],h=C[n.materialIndex],w=Math.max(n.start,s.start),G=Math.min(i.count,Math.min(n.start+n.count,s.start+s.count));for(let S=w,l=G;S<l;S+=3){const y=i.getX(S),M=i.getX(S+1),p=i.getX(S+2);E=$Q(this,h,A,wB,e,t,y,M,p),E&&(E.faceIndex=Math.floor(S/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const D=Math.max(0,s.start),r=Math.min(i.count,s.start+s.count);for(let n=D,h=r;n<h;n+=3){const w=i.getX(n),G=i.getX(n+1),S=i.getX(n+2);E=$Q(this,C,A,wB,e,t,w,G,S),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}else if(o!==void 0)if(Array.isArray(C))for(let D=0,r=a.length;D<r;D++){const n=a[D],h=C[n.materialIndex],w=Math.max(n.start,s.start),G=Math.min(o.count,Math.min(n.start+n.count,s.start+s.count));for(let S=w,l=G;S<l;S+=3){const y=S,M=S+1,p=S+2;E=$Q(this,h,A,wB,e,t,y,M,p),E&&(E.faceIndex=Math.floor(S/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const D=Math.max(0,s.start),r=Math.min(o.count,s.start+s.count);for(let n=D,h=r;n<h;n+=3){const w=n,G=n+1,S=n+2;E=$Q(this,C,A,wB,e,t,w,G,S),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}}};function un(Q,A,I,g,C,B,E,i){let o;if(A.side===Rg?o=g.intersectTriangle(E,B,C,!0,i):o=g.intersectTriangle(C,B,E,A.side===qC,i),o===null)return null;zQ.copy(i),zQ.applyMatrix4(Q.matrixWorld);const e=I.ray.origin.distanceTo(zQ);return e<I.near||e>I.far?null:{distance:e,point:zQ.clone(),object:Q}}function $Q(Q,A,I,g,C,B,E,i,o){Q.getVertexPosition(E,BQ),Q.getVertexPosition(i,QQ),Q.getVertexPosition(o,EQ);const e=un(Q,A,I,g,BQ,QQ,EQ,qi);if(e){C&&(VQ.fromBufferAttribute(C,E),_Q.fromBufferAttribute(C,i),XQ.fromBufferAttribute(C,o),e.uv=aC.getUV(qi,BQ,QQ,EQ,VQ,_Q,XQ,new vA)),B&&(VQ.fromBufferAttribute(B,E),_Q.fromBufferAttribute(B,i),XQ.fromBufferAttribute(B,o),e.uv2=aC.getUV(qi,BQ,QQ,EQ,VQ,_Q,XQ,new vA));const t={a:E,b:i,c:o,normal:new u,materialIndex:0};aC.getNormal(BQ,QQ,EQ,t.normal),e.face=t}return e}class vB extends lg{constructor(A=1,I=1,g=1,C=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:E};const i=this;C=Math.floor(C),B=Math.floor(B),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,D=0;r("z","y","x",-1,-1,g,I,A,E,B,0),r("z","y","x",1,-1,g,I,-A,E,B,1),r("x","z","y",1,1,A,g,I,C,E,2),r("x","z","y",1,-1,A,g,-I,C,E,3),r("x","y","z",1,-1,A,I,g,C,B,4),r("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new Tg(e,3)),this.setAttribute("normal",new Tg(t,3)),this.setAttribute("uv",new Tg(a,2));function r(n,h,w,G,S,l,y,M,p,k,N){const q=l/p,Y=y/k,b=l/2,d=y/2,m=M/2,F=p+1,Z=k+1;let CA=0,v=0;const BA=new u;for(let IA=0;IA<Z;IA++){const R=IA*Y-d;for(let P=0;P<F;P++){const eA=P*q-b;BA[n]=eA*G,BA[h]=R*S,BA[w]=m,e.push(BA.x,BA.y,BA.z),BA[n]=0,BA[h]=0,BA[w]=M>0?1:-1,t.push(BA.x,BA.y,BA.z),a.push(P/p),a.push(1-IA/k),CA+=1}}for(let IA=0;IA<k;IA++)for(let R=0;R<p;R++){const P=s+R+F*IA,eA=s+R+F*(IA+1),iA=s+(R+1)+F*(IA+1),tA=s+(R+1)+F*IA;o.push(P,eA,tA),o.push(eA,iA,tA),v+=6}i.addGroup(D,v,N),D+=v,s+=CA}}static fromJSON(A){return new vB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function YB(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function Bg(Q){const A={};for(let I=0;I<Q.length;I++){const g=YB(Q[I]);for(const C in g)A[C]=g[C]}return A}function Ln(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function za(Q){return Q.getRenderTarget()===null&&Q.outputEncoding===EI?Zg:GQ}const $a={clone:YB,merge:Bg};var Hn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nC extends zg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hn,this.fragmentShader=mn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=YB(A.uniforms),this.uniformsGroups=Ln(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class As extends II{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bA,this.projectionMatrix=new bA,this.projectionMatrixInverse=new bA}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let TI=class extends As{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=SQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(DQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return SQ*2*Math.atan(Math.tan(DQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(DQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;B+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(B+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}};const cB=-90,GB=1;class bn extends II{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new TI(cB,GB,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const B=new TI(cB,GB,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const E=new TI(cB,GB,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new TI(cB,GB,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const o=new TI(cB,GB,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const e=new TI(cB,GB,A,I);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(0,0,-1),this.add(e)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,B,E,i,o,e]=this.children,t=A.getRenderTarget(),a=A.toneMapping,s=A.xr.enabled;A.toneMapping=Xg,A.xr.enabled=!1;const D=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=D,A.setRenderTarget(g,5),A.render(I,e),A.setRenderTarget(t),A.toneMapping=a,A.xr.enabled=s,g.texture.needsPMREMUpdate=!0}}class Is extends _I{constructor(A,I,g,C,B,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:RB,super(A,I,g,C,B,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Tn extends pC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new Is(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:og}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new vB(5,5,5),B=new nC({name:"CubemapFromEquirect",uniforms:YB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Rg,blending:FC});B.uniforms.tEquirect.value=I;const E=new eg(C,B),i=I.minFilter;return I.minFilter===IB&&(I.minFilter=og),new bn(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(B)}}const di=new u,xn=new u,On=new cg;class vC{constructor(A=new u(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=di.subVectors(g,I).cross(xn.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(di),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(g).multiplyScalar(B).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||On.getNormalMatrix(A),C=this.coplanarPoint(di).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const SB=new WB,AE=new u;class HE{constructor(A=new vC,I=new vC,g=new vC,C=new vC,B=new vC,E=new vC){this.planes=[A,I,g,C,B,E]}set(A,I,g,C,B,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(B),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],B=g[1],E=g[2],i=g[3],o=g[4],e=g[5],t=g[6],a=g[7],s=g[8],D=g[9],r=g[10],n=g[11],h=g[12],w=g[13],G=g[14],S=g[15];return I[0].setComponents(i-C,a-o,n-s,S-h).normalize(),I[1].setComponents(i+C,a+o,n+s,S+h).normalize(),I[2].setComponents(i+B,a+e,n+D,S+w).normalize(),I[3].setComponents(i-B,a-e,n-D,S-w).normalize(),I[4].setComponents(i-E,a-t,n-r,S-G).normalize(),I[5].setComponents(i+E,a+t,n+r,S+G).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),SB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(SB)}intersectsSprite(A){return SB.center.set(0,0,0),SB.radius=.7071067811865476,SB.applyMatrix4(A.matrixWorld),this.intersectsSphere(SB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(AE.x=C.normal.x>0?A.max.x:A.min.x,AE.y=C.normal.y>0?A.max.y:A.min.y,AE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(AE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gs(){let Q=null,A=!1,I=null,g=null;function C(B,E){I(B,E),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function Zn(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(e,t){const a=e.array,s=e.usage,D=Q.createBuffer();Q.bindBuffer(t,D),Q.bufferData(t,a,s),e.onUploadCallback();let r;if(a instanceof Float32Array)r=5126;else if(a instanceof Uint16Array)if(e.isFloat16BufferAttribute)if(I)r=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else r=5123;else if(a instanceof Int16Array)r=5122;else if(a instanceof Uint32Array)r=5125;else if(a instanceof Int32Array)r=5124;else if(a instanceof Int8Array)r=5120;else if(a instanceof Uint8Array)r=5121;else if(a instanceof Uint8ClampedArray)r=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:r,bytesPerElement:a.BYTES_PER_ELEMENT,version:e.version}}function B(e,t,a){const s=t.array,D=t.updateRange;Q.bindBuffer(a,e),D.count===-1?Q.bufferSubData(a,0,s):(I?Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s,D.offset,D.count):Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s.subarray(D.offset,D.offset+D.count)),D.count=-1),t.onUploadCallback()}function E(e){return e.isInterleavedBufferAttribute&&(e=e.data),g.get(e)}function i(e){e.isInterleavedBufferAttribute&&(e=e.data);const t=g.get(e);t&&(Q.deleteBuffer(t.buffer),g.delete(e))}function o(e,t){if(e.isGLBufferAttribute){const s=g.get(e);(!s||s.version<e.version)&&g.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);const a=g.get(e);a===void 0?g.set(e,C(e,t)):a.version<e.version&&(B(a.buffer,e,t),a.version=e.version)}return{get:E,remove:i,update:o}}class Mo extends lg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,D=[],r=[],n=[],h=[];for(let w=0;w<t;w++){const G=w*s-E;for(let S=0;S<e;S++){const l=S*a-B;r.push(l,-G,0),n.push(0,0,1),h.push(S/i),h.push(1-w/o)}}for(let w=0;w<o;w++)for(let G=0;G<i;G++){const S=G+e*w,l=G+e*(w+1),y=G+1+e*(w+1),M=G+1+e*w;D.push(S,l,M),D.push(l,y,M)}this.setIndex(D),this.setAttribute("position",new Tg(r,3)),this.setAttribute("normal",new Tg(n,3)),this.setAttribute("uv",new Tg(h,2))}static fromJSON(A){return new Mo(A.width,A.height,A.widthSegments,A.heightSegments)}}var Wn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_n=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xn="vec3 transformed = vec3( position );",zn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$n=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ph=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Th=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ar=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ir=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gr=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cr=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Br=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qr=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Er=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ir=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,or=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,er=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ar=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sr=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hr=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,rr=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cr=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gr=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lr=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kr=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yr=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mr=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Kr=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ur=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nr=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fr=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rr=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dr=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pr=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fr=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Yr=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ur=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Lr=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hr=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mr=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,br=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Tr=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,xr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Or=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zr=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vr=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vr=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_r=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xr=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zr=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$r=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ow=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,HA={alphamap_fragment:Wn,alphamap_pars_fragment:vn,alphatest_fragment:Pn,alphatest_pars_fragment:jn,aomap_fragment:Vn,aomap_pars_fragment:_n,begin_vertex:Xn,beginnormal_vertex:zn,bsdfs:$n,iridescence_fragment:Ah,bumpmap_pars_fragment:Ih,clipping_planes_fragment:gh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:Qh,color_fragment:Eh,color_pars_fragment:ih,color_pars_vertex:oh,color_vertex:eh,common:th,cube_uv_reflection_fragment:ah,defaultnormal_vertex:sh,displacementmap_pars_vertex:Dh,displacementmap_vertex:nh,emissivemap_fragment:hh,emissivemap_pars_fragment:rh,encodings_fragment:wh,encodings_pars_fragment:ch,envmap_fragment:Gh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:lh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:fh,envmap_vertex:yh,fog_vertex:Mh,fog_pars_vertex:Kh,fog_fragment:Uh,fog_pars_fragment:Nh,gradientmap_pars_fragment:Jh,lightmap_fragment:Fh,lightmap_pars_fragment:Rh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:dh,lights_pars_begin:ph,lights_toon_fragment:Yh,lights_toon_pars_fragment:uh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Hh,lights_physical_fragment:mh,lights_physical_pars_fragment:bh,lights_fragment_begin:Th,lights_fragment_maps:xh,lights_fragment_end:Oh,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:Ph,map_fragment:jh,map_pars_fragment:Vh,map_particle_fragment:_h,map_particle_pars_fragment:Xh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Ar,morphnormal_vertex:Ir,morphtarget_pars_vertex:gr,morphtarget_vertex:Cr,normal_fragment_begin:Br,normal_fragment_maps:Qr,normal_pars_fragment:Er,normal_pars_vertex:ir,normal_vertex:or,normalmap_pars_fragment:er,clearcoat_normal_fragment_begin:tr,clearcoat_normal_fragment_maps:ar,clearcoat_pars_fragment:sr,iridescence_pars_fragment:Dr,output_fragment:nr,packing:hr,premultiplied_alpha_fragment:rr,project_vertex:wr,dithering_fragment:cr,dithering_pars_fragment:Gr,roughnessmap_fragment:Sr,roughnessmap_pars_fragment:lr,shadowmap_pars_fragment:kr,shadowmap_pars_vertex:yr,shadowmap_vertex:Mr,shadowmask_pars_fragment:Kr,skinbase_vertex:Ur,skinning_pars_vertex:Nr,skinning_vertex:Jr,skinnormal_vertex:Fr,specularmap_fragment:Rr,specularmap_pars_fragment:qr,tonemapping_fragment:dr,tonemapping_pars_fragment:pr,transmission_fragment:fr,transmission_pars_fragment:Yr,uv_pars_fragment:ur,uv_pars_vertex:Lr,uv_vertex:Hr,uv2_pars_fragment:mr,uv2_pars_vertex:br,uv2_vertex:Tr,worldpos_vertex:xr,background_vert:Or,background_frag:Zr,backgroundCube_vert:Wr,backgroundCube_frag:vr,cube_vert:Pr,cube_frag:jr,depth_vert:Vr,depth_frag:_r,distanceRGBA_vert:Xr,distanceRGBA_frag:zr,equirect_vert:$r,equirect_frag:Aw,linedashed_vert:Iw,linedashed_frag:gw,meshbasic_vert:Cw,meshbasic_frag:Bw,meshlambert_vert:Qw,meshlambert_frag:Ew,meshmatcap_vert:iw,meshmatcap_frag:ow,meshnormal_vert:ew,meshnormal_frag:tw,meshphong_vert:aw,meshphong_frag:sw,meshphysical_vert:Dw,meshphysical_frag:nw,meshtoon_vert:hw,meshtoon_frag:rw,points_vert:ww,points_frag:cw,shadow_vert:Gw,shadow_frag:Sw,sprite_vert:lw,sprite_frag:kw},aA={common:{diffuse:{value:new uA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cg},uv2Transform:{value:new cg},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new vA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new uA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new uA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cg}},sprite:{diffuse:{value:new uA(16777215)},opacity:{value:1},center:{value:new vA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cg}}},Wg={basic:{uniforms:Bg([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.fog]),vertexShader:HA.meshbasic_vert,fragmentShader:HA.meshbasic_frag},lambert:{uniforms:Bg([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new uA(0)}}]),vertexShader:HA.meshlambert_vert,fragmentShader:HA.meshlambert_frag},phong:{uniforms:Bg([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new uA(0)},specular:{value:new uA(1118481)},shininess:{value:30}}]),vertexShader:HA.meshphong_vert,fragmentShader:HA.meshphong_frag},standard:{uniforms:Bg([aA.common,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.roughnessmap,aA.metalnessmap,aA.fog,aA.lights,{emissive:{value:new uA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:HA.meshphysical_vert,fragmentShader:HA.meshphysical_frag},toon:{uniforms:Bg([aA.common,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.gradientmap,aA.fog,aA.lights,{emissive:{value:new uA(0)}}]),vertexShader:HA.meshtoon_vert,fragmentShader:HA.meshtoon_frag},matcap:{uniforms:Bg([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,{matcap:{value:null}}]),vertexShader:HA.meshmatcap_vert,fragmentShader:HA.meshmatcap_frag},points:{uniforms:Bg([aA.points,aA.fog]),vertexShader:HA.points_vert,fragmentShader:HA.points_frag},dashed:{uniforms:Bg([aA.common,aA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:HA.linedashed_vert,fragmentShader:HA.linedashed_frag},depth:{uniforms:Bg([aA.common,aA.displacementmap]),vertexShader:HA.depth_vert,fragmentShader:HA.depth_frag},normal:{uniforms:Bg([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,{opacity:{value:1}}]),vertexShader:HA.meshnormal_vert,fragmentShader:HA.meshnormal_frag},sprite:{uniforms:Bg([aA.sprite,aA.fog]),vertexShader:HA.sprite_vert,fragmentShader:HA.sprite_frag},background:{uniforms:{uvTransform:{value:new cg},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:HA.background_vert,fragmentShader:HA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:HA.backgroundCube_vert,fragmentShader:HA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:HA.cube_vert,fragmentShader:HA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:HA.equirect_vert,fragmentShader:HA.equirect_frag},distanceRGBA:{uniforms:Bg([aA.common,aA.displacementmap,{referencePosition:{value:new u},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:HA.distanceRGBA_vert,fragmentShader:HA.distanceRGBA_frag},shadow:{uniforms:Bg([aA.lights,aA.fog,{color:{value:new uA(0)},opacity:{value:1}}]),vertexShader:HA.shadow_vert,fragmentShader:HA.shadow_frag}};Wg.physical={uniforms:Bg([Wg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new vA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new uA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new vA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new uA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new uA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:HA.meshphysical_vert,fragmentShader:HA.meshphysical_frag};const IE={r:0,b:0,g:0};function yw(Q,A,I,g,C,B,E){const i=new uA(0);let o=B===!0?0:1,e,t,a=null,s=0,D=null;function r(h,w){let G=!1,S=w.isScene===!0?w.background:null;S&&S.isTexture&&(S=(w.backgroundBlurriness>0?I:A).get(S));const l=Q.xr,y=l.getSession&&l.getSession();y&&y.environmentBlendMode==="additive"&&(S=null),S===null?n(i,o):S&&S.isColor&&(n(S,1),G=!0),(Q.autoClear||G)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),S&&(S.isCubeTexture||S.mapping===uE)?(t===void 0&&(t=new eg(new vB(1,1,1),new nC({name:"BackgroundCubeMaterial",uniforms:YB(Wg.backgroundCube.uniforms),vertexShader:Wg.backgroundCube.vertexShader,fragmentShader:Wg.backgroundCube.fragmentShader,side:Rg,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(M,p,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),t.material.uniforms.envMap.value=S,t.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,t.material.toneMapped=S.encoding!==EI,(a!==S||s!==S.version||D!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=S,s=S.version,D=Q.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null)):S&&S.isTexture&&(e===void 0&&(e=new eg(new Mo(2,2),new nC({name:"BackgroundMaterial",uniforms:YB(Wg.background.uniforms),vertexShader:Wg.background.vertexShader,fragmentShader:Wg.background.fragmentShader,side:qC,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=S,e.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,e.material.toneMapped=S.encoding!==EI,S.matrixAutoUpdate===!0&&S.updateMatrix(),e.material.uniforms.uvTransform.value.copy(S.matrix),(a!==S||s!==S.version||D!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=S,s=S.version,D=Q.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null))}function n(h,w){h.getRGB(IE,za(Q)),g.buffers.color.setClear(IE.r,IE.g,IE.b,w,E)}return{getClearColor:function(){return i},setClearColor:function(h,w=1){i.set(h),o=w,n(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,n(i,o)},render:r}}function Mw(Q,A,I,g){const C=Q.getParameter(34921),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||B!==null,i={},o=h(null);let e=o,t=!1;function a(m,F,Z,CA,v){let BA=!1;if(E){const IA=n(CA,Z,F);e!==IA&&(e=IA,D(e.object)),BA=w(m,CA,Z,v),BA&&G(m,CA,Z,v)}else{const IA=F.wireframe===!0;(e.geometry!==CA.id||e.program!==Z.id||e.wireframe!==IA)&&(e.geometry=CA.id,e.program=Z.id,e.wireframe=IA,BA=!0)}v!==null&&I.update(v,34963),(BA||t)&&(t=!1,k(m,F,Z,CA),v!==null&&Q.bindBuffer(34963,I.get(v).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function D(m){return g.isWebGL2?Q.bindVertexArray(m):B.bindVertexArrayOES(m)}function r(m){return g.isWebGL2?Q.deleteVertexArray(m):B.deleteVertexArrayOES(m)}function n(m,F,Z){const CA=Z.wireframe===!0;let v=i[m.id];v===void 0&&(v={},i[m.id]=v);let BA=v[F.id];BA===void 0&&(BA={},v[F.id]=BA);let IA=BA[CA];return IA===void 0&&(IA=h(s()),BA[CA]=IA),IA}function h(m){const F=[],Z=[],CA=[];for(let v=0;v<C;v++)F[v]=0,Z[v]=0,CA[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:CA,object:m,attributes:{},index:null}}function w(m,F,Z,CA){const v=e.attributes,BA=F.attributes;let IA=0;const R=Z.getAttributes();for(const P in R)if(R[P].location>=0){const iA=v[P];let tA=BA[P];if(tA===void 0&&(P==="instanceMatrix"&&m.instanceMatrix&&(tA=m.instanceMatrix),P==="instanceColor"&&m.instanceColor&&(tA=m.instanceColor)),iA===void 0||iA.attribute!==tA||tA&&iA.data!==tA.data)return!0;IA++}return e.attributesNum!==IA||e.index!==CA}function G(m,F,Z,CA){const v={},BA=F.attributes;let IA=0;const R=Z.getAttributes();for(const P in R)if(R[P].location>=0){let iA=BA[P];iA===void 0&&(P==="instanceMatrix"&&m.instanceMatrix&&(iA=m.instanceMatrix),P==="instanceColor"&&m.instanceColor&&(iA=m.instanceColor));const tA={};tA.attribute=iA,iA&&iA.data&&(tA.data=iA.data),v[P]=tA,IA++}e.attributes=v,e.attributesNum=IA,e.index=CA}function S(){const m=e.newAttributes;for(let F=0,Z=m.length;F<Z;F++)m[F]=0}function l(m){y(m,0)}function y(m,F){const Z=e.newAttributes,CA=e.enabledAttributes,v=e.attributeDivisors;Z[m]=1,CA[m]===0&&(Q.enableVertexAttribArray(m),CA[m]=1),v[m]!==F&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](m,F),v[m]=F)}function M(){const m=e.newAttributes,F=e.enabledAttributes;for(let Z=0,CA=F.length;Z<CA;Z++)F[Z]!==m[Z]&&(Q.disableVertexAttribArray(Z),F[Z]=0)}function p(m,F,Z,CA,v,BA){g.isWebGL2===!0&&(Z===5124||Z===5125)?Q.vertexAttribIPointer(m,F,Z,v,BA):Q.vertexAttribPointer(m,F,Z,CA,v,BA)}function k(m,F,Z,CA){if(g.isWebGL2===!1&&(m.isInstancedMesh||CA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;S();const v=CA.attributes,BA=Z.getAttributes(),IA=F.defaultAttributeValues;for(const R in BA){const P=BA[R];if(P.location>=0){let eA=v[R];if(eA===void 0&&(R==="instanceMatrix"&&m.instanceMatrix&&(eA=m.instanceMatrix),R==="instanceColor"&&m.instanceColor&&(eA=m.instanceColor)),eA!==void 0){const iA=eA.normalized,tA=eA.itemSize,X=I.get(eA);if(X===void 0)continue;const sA=X.buffer,cA=X.type,UA=X.bytesPerElement;if(eA.isInterleavedBufferAttribute){const wA=eA.data,eI=wA.stride,LA=eA.offset;if(wA.isInstancedInterleavedBuffer){for(let JA=0;JA<P.locationSize;JA++)y(P.location+JA,wA.meshPerAttribute);m.isInstancedMesh!==!0&&CA._maxInstanceCount===void 0&&(CA._maxInstanceCount=wA.meshPerAttribute*wA.count)}else for(let JA=0;JA<P.locationSize;JA++)l(P.location+JA);Q.bindBuffer(34962,sA);for(let JA=0;JA<P.locationSize;JA++)p(P.location+JA,tA/P.locationSize,cA,iA,eI*UA,(LA+tA/P.locationSize*JA)*UA)}else{if(eA.isInstancedBufferAttribute){for(let wA=0;wA<P.locationSize;wA++)y(P.location+wA,eA.meshPerAttribute);m.isInstancedMesh!==!0&&CA._maxInstanceCount===void 0&&(CA._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let wA=0;wA<P.locationSize;wA++)l(P.location+wA);Q.bindBuffer(34962,sA);for(let wA=0;wA<P.locationSize;wA++)p(P.location+wA,tA/P.locationSize,cA,iA,tA*UA,tA/P.locationSize*wA*UA)}}else if(IA!==void 0){const iA=IA[R];if(iA!==void 0)switch(iA.length){case 2:Q.vertexAttrib2fv(P.location,iA);break;case 3:Q.vertexAttrib3fv(P.location,iA);break;case 4:Q.vertexAttrib4fv(P.location,iA);break;default:Q.vertexAttrib1fv(P.location,iA)}}}}M()}function N(){b();for(const m in i){const F=i[m];for(const Z in F){const CA=F[Z];for(const v in CA)r(CA[v].object),delete CA[v];delete F[Z]}delete i[m]}}function q(m){if(i[m.id]===void 0)return;const F=i[m.id];for(const Z in F){const CA=F[Z];for(const v in CA)r(CA[v].object),delete CA[v];delete F[Z]}delete i[m.id]}function Y(m){for(const F in i){const Z=i[F];if(Z[m.id]===void 0)continue;const CA=Z[m.id];for(const v in CA)r(CA[v].object),delete CA[v];delete Z[m.id]}}function b(){d(),t=!0,e!==o&&(e=o,D(e.object))}function d(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:b,resetDefaultState:d,dispose:N,releaseStatesOfGeometry:q,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:l,disableUnusedAttributes:M}}function Kw(Q,A,I,g){const C=g.isWebGL2;let B;function E(e){B=e}function i(e,t){Q.drawArrays(B,e,t),I.update(t,B,1)}function o(e,t,a){if(a===0)return;let s,D;if(C)s=Q,D="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[D](B,e,t,a),I.update(t,B,a)}this.setMode=E,this.render=i,this.renderInstances=o}function Uw(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const p=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(p){if(p==="highp"){if(Q.getShaderPrecisionFormat(35633,36338).precision>0&&Q.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";p="mediump"}return p==="mediump"&&Q.getShaderPrecisionFormat(35633,36337).precision>0&&Q.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&Q instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&Q instanceof WebGL2ComputeRenderingContext;let i=I.precision!==void 0?I.precision:"highp";const o=B(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const e=E||A.has("WEBGL_draw_buffers"),t=I.logarithmicDepthBuffer===!0,a=Q.getParameter(34930),s=Q.getParameter(35660),D=Q.getParameter(3379),r=Q.getParameter(34076),n=Q.getParameter(34921),h=Q.getParameter(36347),w=Q.getParameter(36348),G=Q.getParameter(36349),S=s>0,l=E||A.has("OES_texture_float"),y=S&&l,M=E?Q.getParameter(36183):0;return{isWebGL2:E,drawBuffers:e,getMaxAnisotropy:C,getMaxPrecision:B,precision:i,logarithmicDepthBuffer:t,maxTextures:a,maxVertexTextures:s,maxTextureSize:D,maxCubemapSize:r,maxAttributes:n,maxVertexUniforms:h,maxVaryings:w,maxFragmentUniforms:G,vertexTextures:S,floatFragmentTextures:l,floatVertexTextures:y,maxSamples:M}}function Nw(Q){const A=this;let I=null,g=0,C=!1,B=!1;const E=new vC,i=new cg,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s,D){const r=a.length!==0||s||g!==0||C;return C=s,I=t(a,D,0),g=a.length,r},this.beginShadows=function(){B=!0,t(null)},this.endShadows=function(){B=!1,e()},this.setState=function(a,s,D){const r=a.clippingPlanes,n=a.clipIntersection,h=a.clipShadows,w=Q.get(a);if(!C||r===null||r.length===0||B&&!h)B?t(null):e();else{const G=B?0:g,S=G*4;let l=w.clippingState||null;o.value=l,l=t(r,s,S,D);for(let y=0;y!==S;++y)l[y]=I[y];w.clippingState=l,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=G}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,D,r){const n=a!==null?a.length:0;let h=null;if(n!==0){if(h=o.value,r!==!0||h===null){const w=D+n*4,G=s.matrixWorldInverse;i.getNormalMatrix(G),(h===null||h.length<w)&&(h=new Float32Array(w));for(let S=0,l=D;S!==n;++S,l+=4)E.copy(a[S]).applyMatrix4(G,i),E.normal.toArray(h,l),h[l+3]=E.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=n,A.numIntersection=0,h}}function Jw(Q){let A=new WeakMap;function I(E,i){return i===Vi?E.mapping=RB:i===_i&&(E.mapping=qB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===Vi||i===_i)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new Tn(o.height/2);return e.fromEquirectangularTexture(Q,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class EB extends As{constructor(A=-1,I=1,g=1,C=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=e*this.view.offsetX,E=B+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(B,E,i,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const MB=4,_e=[.125,.215,.35,.446,.526,.582],jC=20,pi=new EB,Xe=new uA;let fi=null;const PC=(1+Math.sqrt(5))/2,lB=1/PC,ze=[new u(1,1,1),new u(-1,1,1),new u(1,1,-1),new u(-1,1,-1),new u(0,PC,lB),new u(0,PC,-lB),new u(lB,0,PC),new u(-lB,0,PC),new u(PC,lB,0),new u(-PC,lB,0)];class $e{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){fi=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=It(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(fi),A.scissorTest=!1,gE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===RB||A.mapping===qB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),fi=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:og,minFilter:og,generateMipmaps:!1,type:wQ,format:Jg,encoding:dC,depthBuffer:!1},C=At(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=At(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fw(B)),this._blurMaterial=Rw(B,A,I)}return C}_compileMaterial(A){const I=new eg(this._lodPlanes[0],A);this._renderer.compile(I,pi)}_sceneToCubeUV(A,I,g,C){const i=new TI(90,1,I,g),o=[1,-1,1,1,1,1],e=[1,1,1,-1,-1,-1],t=this._renderer,a=t.autoClear,s=t.toneMapping;t.getClearColor(Xe),t.toneMapping=Xg,t.autoClear=!1;const D=new _C({name:"PMREM.Background",side:Rg,depthWrite:!1,depthTest:!1}),r=new eg(new vB,D);let n=!1;const h=A.background;h?h.isColor&&(D.color.copy(h),A.background=null,n=!0):(D.color.copy(Xe),n=!0);for(let w=0;w<6;w++){const G=w%3;G===0?(i.up.set(0,o[w],0),i.lookAt(e[w],0,0)):G===1?(i.up.set(0,0,o[w]),i.lookAt(0,e[w],0)):(i.up.set(0,o[w],0),i.lookAt(0,0,e[w]));const S=this._cubeSize;gE(C,G*S,w>2?S:0,S,S),t.setRenderTarget(C),n&&t.render(r,i),t.render(A,i)}r.geometry.dispose(),r.material.dispose(),t.toneMapping=s,t.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===RB||A.mapping===qB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=gt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=It());const B=C?this._cubemapMaterial:this._equirectMaterial,E=new eg(this._lodPlanes[0],B),i=B.uniforms;i.envMap.value=A;const o=this._cubeSize;gE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,pi)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=ze[(C-1)%ze.length];this._blur(A,C-1,C,B,E)}I.autoClear=g}_blur(A,I,g,C,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",B),this._halfBlur(E,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new eg(this._lodPlanes[C],e),s=e.uniforms,D=this._sizeLods[g]-1,r=isFinite(B)?Math.PI/(2*D):2*Math.PI/(2*jC-1),n=B/r,h=isFinite(B)?1+Math.floor(t*n):jC;h>jC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${jC}`);const w=[];let G=0;for(let p=0;p<jC;++p){const k=p/n,N=Math.exp(-k*k/2);w.push(N),p===0?G+=N:p<h&&(G+=2*N)}for(let p=0;p<w.length;p++)w[p]=w[p]/G;s.envMap.value=A.texture,s.samples.value=h,s.weights.value=w,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:S}=this;s.dTheta.value=r,s.mipInt.value=S-g;const l=this._sizeLods[C],y=3*l*(C>S-MB?C-S+MB:0),M=4*(this._cubeSize-l);gE(I,y,M,3*l,2*l),o.setRenderTarget(I),o.render(a,pi)}}function Fw(Q){const A=[],I=[],g=[];let C=Q;const B=Q-MB+1+_e.length;for(let E=0;E<B;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>Q-MB?o=_e[E-Q+MB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],D=6,r=6,n=3,h=2,w=1,G=new Float32Array(n*r*D),S=new Float32Array(h*r*D),l=new Float32Array(w*r*D);for(let M=0;M<D;M++){const p=M%3*2/3-1,k=M>2?0:-1,N=[p,k,0,p+2/3,k,0,p+2/3,k+1,0,p,k,0,p+2/3,k+1,0,p,k+1,0];G.set(N,n*r*M),S.set(s,h*r*M);const q=[M,M,M,M,M,M];l.set(q,w*r*M)}const y=new lg;y.setAttribute("position",new qI(G,n)),y.setAttribute("uv",new qI(S,h)),y.setAttribute("faceIndex",new qI(l,w)),A.push(y),C>MB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function At(Q,A,I){const g=new pC(Q,A,I);return g.texture.mapping=uE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function gE(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Rw(Q,A,I){const g=new Float32Array(jC),C=new u(0,1,0);return new nC({name:"SphericalGaussianBlur",defines:{n:jC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:FC,depthTest:!1,depthWrite:!1})}function It(){return new nC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:FC,depthTest:!1,depthWrite:!1})}function gt(){return new nC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:FC,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qw(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===Vi||o===_i,t=o===RB||o===qB;if(e||t)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new $e(Q)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(e&&a&&a.height>0||t&&a&&C(a)){I===null&&(I=new $e(Q));const s=e?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",B),s.texture}else return null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function B(i){const o=i.target;o.removeEventListener("dispose",B);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function dw(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function pw(Q,A,I,g){const C={},B=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);s.removeEventListener("dispose",E),delete C[s.id];const D=B.get(s);D&&(A.remove(D),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],34962);const D=a.morphAttributes;for(const r in D){const n=D[r];for(let h=0,w=n.length;h<w;h++)A.update(n[h],34962)}}function e(a){const s=[],D=a.index,r=a.attributes.position;let n=0;if(D!==null){const G=D.array;n=D.version;for(let S=0,l=G.length;S<l;S+=3){const y=G[S+0],M=G[S+1],p=G[S+2];s.push(y,M,M,p,p,y)}}else{const G=r.array;n=r.version;for(let S=0,l=G.length/3-1;S<l;S+=3){const y=S+0,M=S+1,p=S+2;s.push(y,M,M,p,p,y)}}const h=new(Wa(s)?Xa:_a)(s,1);h.version=n;const w=B.get(a);w&&A.remove(w),B.set(a,h)}function t(a){const s=B.get(a);if(s){const D=a.index;D!==null&&s.version<D.version&&e(a)}else e(a);return B.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function fw(Q,A,I,g){const C=g.isWebGL2;let B;function E(s){B=s}let i,o;function e(s){i=s.type,o=s.bytesPerElement}function t(s,D){Q.drawElements(B,D,i,s*o),I.update(D,B,1)}function a(s,D,r){if(r===0)return;let n,h;if(C)n=Q,h="drawElementsInstanced";else if(n=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",n===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[h](B,D,i,s*o,r),I.update(D,B,r)}this.setMode=E,this.setIndex=e,this.render=t,this.renderInstances=a}function Yw(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,E,i){switch(I.calls++,E){case 4:I.triangles+=i*(B/3);break;case 1:I.lines+=i*(B/2);break;case 3:I.lines+=i*(B-1);break;case 2:I.lines+=i*B;break;case 0:I.points+=i*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function uw(Q,A){return Q[0]-A[0]}function Lw(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function Hw(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,E=new hI,i=[];for(let e=0;e<8;e++)i[e]=[e,0];function o(e,t,a,s){const D=e.morphTargetInfluences;if(A.isWebGL2===!0){const r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,n=r!==void 0?r.length:0;let h=B.get(t);if(h===void 0||h.count!==n){let F=function(){d.dispose(),B.delete(t),t.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();const S=t.morphAttributes.position!==void 0,l=t.morphAttributes.normal!==void 0,y=t.morphAttributes.color!==void 0,M=t.morphAttributes.position||[],p=t.morphAttributes.normal||[],k=t.morphAttributes.color||[];let N=0;S===!0&&(N=1),l===!0&&(N=2),y===!0&&(N=3);let q=t.attributes.position.count*N,Y=1;q>A.maxTextureSize&&(Y=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const b=new Float32Array(q*Y*4*n),d=new Va(b,q,Y,n);d.type=UC,d.needsUpdate=!0;const m=N*4;for(let Z=0;Z<n;Z++){const CA=M[Z],v=p[Z],BA=k[Z],IA=q*Y*4*Z;for(let R=0;R<CA.count;R++){const P=R*m;S===!0&&(E.fromBufferAttribute(CA,R),b[IA+P+0]=E.x,b[IA+P+1]=E.y,b[IA+P+2]=E.z,b[IA+P+3]=0),l===!0&&(E.fromBufferAttribute(v,R),b[IA+P+4]=E.x,b[IA+P+5]=E.y,b[IA+P+6]=E.z,b[IA+P+7]=0),y===!0&&(E.fromBufferAttribute(BA,R),b[IA+P+8]=E.x,b[IA+P+9]=E.y,b[IA+P+10]=E.z,b[IA+P+11]=BA.itemSize===4?E.w:1)}}h={count:n,texture:d,size:new vA(q,Y)},B.set(t,h),t.addEventListener("dispose",F)}let w=0;for(let S=0;S<D.length;S++)w+=D[S];const G=t.morphTargetsRelative?1:1-w;s.getUniforms().setValue(Q,"morphTargetBaseInfluence",G),s.getUniforms().setValue(Q,"morphTargetInfluences",D),s.getUniforms().setValue(Q,"morphTargetsTexture",h.texture,I),s.getUniforms().setValue(Q,"morphTargetsTextureSize",h.size)}else{const r=D===void 0?0:D.length;let n=g[t.id];if(n===void 0||n.length!==r){n=[];for(let l=0;l<r;l++)n[l]=[l,0];g[t.id]=n}for(let l=0;l<r;l++){const y=n[l];y[0]=l,y[1]=D[l]}n.sort(Lw);for(let l=0;l<8;l++)l<r&&n[l][1]?(i[l][0]=n[l][0],i[l][1]=n[l][1]):(i[l][0]=Number.MAX_SAFE_INTEGER,i[l][1]=0);i.sort(uw);const h=t.morphAttributes.position,w=t.morphAttributes.normal;let G=0;for(let l=0;l<8;l++){const y=i[l],M=y[0],p=y[1];M!==Number.MAX_SAFE_INTEGER&&p?(h&&t.getAttribute("morphTarget"+l)!==h[M]&&t.setAttribute("morphTarget"+l,h[M]),w&&t.getAttribute("morphNormal"+l)!==w[M]&&t.setAttribute("morphNormal"+l,w[M]),C[l]=p,G+=p):(h&&t.hasAttribute("morphTarget"+l)===!0&&t.deleteAttribute("morphTarget"+l),w&&t.hasAttribute("morphNormal"+l)===!0&&t.deleteAttribute("morphNormal"+l),C[l]=0)}const S=t.morphTargetsRelative?1:1-G;s.getUniforms().setValue(Q,"morphTargetBaseInfluence",S),s.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function mw(Q,A,I,g){let C=new WeakMap;function B(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);return C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:B,dispose:E}}const Cs=new _I,Bs=new Va,Qs=new Un,Es=new Is,Ct=[],Bt=[],Qt=new Float32Array(16),Et=new Float32Array(9),it=new Float32Array(4);function PB(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=Ct[C];if(B===void 0&&(B=new Float32Array(C),Ct[C]=B),A!==0){g.toArray(B,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(B,i)}return B}function xI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function OI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function mE(Q,A){let I=Bt[A];I===void 0&&(I=new Int32Array(A),Bt[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function bw(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Tw(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(xI(I,A))return;Q.uniform2fv(this.addr,A),OI(I,A)}}function xw(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(xI(I,A))return;Q.uniform3fv(this.addr,A),OI(I,A)}}function Ow(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(xI(I,A))return;Q.uniform4fv(this.addr,A),OI(I,A)}}function Zw(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(xI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),OI(I,A)}else{if(xI(I,g))return;it.set(g),Q.uniformMatrix2fv(this.addr,!1,it),OI(I,g)}}function Ww(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(xI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),OI(I,A)}else{if(xI(I,g))return;Et.set(g),Q.uniformMatrix3fv(this.addr,!1,Et),OI(I,g)}}function vw(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(xI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),OI(I,A)}else{if(xI(I,g))return;Qt.set(g),Q.uniformMatrix4fv(this.addr,!1,Qt),OI(I,g)}}function Pw(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function jw(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(xI(I,A))return;Q.uniform2iv(this.addr,A),OI(I,A)}}function Vw(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(xI(I,A))return;Q.uniform3iv(this.addr,A),OI(I,A)}}function _w(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(xI(I,A))return;Q.uniform4iv(this.addr,A),OI(I,A)}}function Xw(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function zw(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(xI(I,A))return;Q.uniform2uiv(this.addr,A),OI(I,A)}}function $w(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(xI(I,A))return;Q.uniform3uiv(this.addr,A),OI(I,A)}}function Ac(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(xI(I,A))return;Q.uniform4uiv(this.addr,A),OI(I,A)}}function Ic(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||Cs,C)}function gc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Qs,C)}function Cc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Es,C)}function Bc(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Bs,C)}function Qc(Q){switch(Q){case 5126:return bw;case 35664:return Tw;case 35665:return xw;case 35666:return Ow;case 35674:return Zw;case 35675:return Ww;case 35676:return vw;case 5124:case 35670:return Pw;case 35667:case 35671:return jw;case 35668:case 35672:return Vw;case 35669:case 35673:return _w;case 5125:return Xw;case 36294:return zw;case 36295:return $w;case 36296:return Ac;case 35678:case 36198:case 36298:case 36306:case 35682:return Ic;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return Cc;case 36289:case 36303:case 36311:case 36292:return Bc}}function Ec(Q,A){Q.uniform1fv(this.addr,A)}function ic(Q,A){const I=PB(A,this.size,2);Q.uniform2fv(this.addr,I)}function oc(Q,A){const I=PB(A,this.size,3);Q.uniform3fv(this.addr,I)}function ec(Q,A){const I=PB(A,this.size,4);Q.uniform4fv(this.addr,I)}function tc(Q,A){const I=PB(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function ac(Q,A){const I=PB(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function sc(Q,A){const I=PB(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function Dc(Q,A){Q.uniform1iv(this.addr,A)}function nc(Q,A){Q.uniform2iv(this.addr,A)}function hc(Q,A){Q.uniform3iv(this.addr,A)}function rc(Q,A){Q.uniform4iv(this.addr,A)}function wc(Q,A){Q.uniform1uiv(this.addr,A)}function cc(Q,A){Q.uniform2uiv(this.addr,A)}function Gc(Q,A){Q.uniform3uiv(this.addr,A)}function Sc(Q,A){Q.uniform4uiv(this.addr,A)}function lc(Q,A,I){const g=this.cache,C=A.length,B=mE(I,C);xI(g,B)||(Q.uniform1iv(this.addr,B),OI(g,B));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Cs,B[E])}function kc(Q,A,I){const g=this.cache,C=A.length,B=mE(I,C);xI(g,B)||(Q.uniform1iv(this.addr,B),OI(g,B));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||Qs,B[E])}function yc(Q,A,I){const g=this.cache,C=A.length,B=mE(I,C);xI(g,B)||(Q.uniform1iv(this.addr,B),OI(g,B));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Es,B[E])}function Mc(Q,A,I){const g=this.cache,C=A.length,B=mE(I,C);xI(g,B)||(Q.uniform1iv(this.addr,B),OI(g,B));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||Bs,B[E])}function Kc(Q){switch(Q){case 5126:return Ec;case 35664:return ic;case 35665:return oc;case 35666:return ec;case 35674:return tc;case 35675:return ac;case 35676:return sc;case 5124:case 35670:return Dc;case 35667:case 35671:return nc;case 35668:case 35672:return hc;case 35669:case 35673:return rc;case 5125:return wc;case 36294:return cc;case 36295:return Gc;case 36296:return Sc;case 35678:case 36198:case 36298:case 36306:case 35682:return lc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return Mc}}class Uc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=Qc(I.type)}}class Nc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=Kc(I.type)}}class Jc{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,E=C.length;B!==E;++B){const i=C[B];i.setValue(A,I[i.id],g)}}}const Yi=/(\w+)(\])?(\[|\.)?/g;function ot(Q,A){Q.seq.push(A),Q.map[A.id]=A}function Fc(Q,A,I){const g=Q.name,C=g.length;for(Yi.lastIndex=0;;){const B=Yi.exec(g),E=Yi.lastIndex;let i=B[1];const o=B[2]==="]",e=B[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){ot(I,e===void 0?new Uc(i,Q,A):new Nc(i,Q,A));break}else{let a=I.map[i];a===void 0&&(a=new Jc(i),ot(I,a)),I=a}}}class DE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),E=A.getUniformLocation(I,B.name);Fc(B,E,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,E=I.length;B!==E;++B){const i=I[B],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function et(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let Rc=0;function qc(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let E=C;E<B;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function dc(Q){switch(Q){case dC:return["Linear","( value )"];case EI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",Q),["Linear","( value )"]}}function tt(Q,A,I){const g=Q.getShaderParameter(A,35713),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const E=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+qc(Q.getShaderSource(A),E)}else return C}function pc(Q,A){const I=dc(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function fc(Q,A){let I;switch(A){case mD:I="Linear";break;case bD:I="Reinhard";break;case TD:I="OptimizedCineon";break;case Ha:I="ACESFilmic";break;case xD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Yc(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.tangentSpaceNormalMap||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sQ).join(`
`)}function uc(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Lc(Q,A){const I={},g=Q.getProgramParameter(A,35721);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),E=B.name;let i=1;B.type===35674&&(i=2),B.type===35675&&(i=3),B.type===35676&&(i=4),I[E]={type:B.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function sQ(Q){return Q!==""}function at(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function st(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Hc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(Q){return Q.replace(Hc,mc)}function mc(Q,A){const I=HA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Io(I)}const bc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dt(Q){return Q.replace(bc,Tc)}function Tc(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function nt(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function xc(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===pa?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===fa?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===aQ&&(A="SHADOWMAP_TYPE_VSM"),A}function Oc(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case RB:case qB:A="ENVMAP_TYPE_CUBE";break;case uE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Zc(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case qB:A="ENVMAP_MODE_REFRACTION";break}return A}function Wc(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case La:A="ENVMAP_BLENDING_MULTIPLY";break;case LD:A="ENVMAP_BLENDING_MIX";break;case HD:A="ENVMAP_BLENDING_ADD";break}return A}function vc(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Pc(Q,A,I,g){const C=Q.getContext(),B=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=xc(I),e=Oc(I),t=Zc(I),a=Wc(I),s=vc(I),D=I.isWebGL2?"":Yc(I),r=uc(B),n=C.createProgram();let h,w,G=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=[r].filter(sQ).join(`
`),h.length>0&&(h+=`
`),w=[D,r].filter(sQ).join(`
`),w.length>0&&(w+=`
`)):(h=[nt(I),"#define SHADER_NAME "+I.shaderName,r,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sQ).join(`
`),w=[D,nt(I),"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==Xg?"#define TONE_MAPPING":"",I.toneMapping!==Xg?HA.tonemapping_pars_fragment:"",I.toneMapping!==Xg?fc("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",HA.encodings_pars_fragment,pc("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(sQ).join(`
`)),E=Io(E),E=at(E,I),E=st(E,I),i=Io(i),i=at(i,I),i=st(i,I),E=Dt(E),i=Dt(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,w=["#define varying in",I.glslVersion===He?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===He?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const S=G+h+E,l=G+w+i,y=et(C,35633,S),M=et(C,35632,l);if(C.attachShader(n,y),C.attachShader(n,M),I.index0AttributeName!==void 0?C.bindAttribLocation(n,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(n,0,"position"),C.linkProgram(n),Q.debug.checkShaderErrors){const N=C.getProgramInfoLog(n).trim(),q=C.getShaderInfoLog(y).trim(),Y=C.getShaderInfoLog(M).trim();let b=!0,d=!0;if(C.getProgramParameter(n,35714)===!1){b=!1;const m=tt(C,y,"vertex"),F=tt(C,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(n,35715)+`

Program Info Log: `+N+`
`+m+`
`+F)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(q===""||Y==="")&&(d=!1);d&&(this.diagnostics={runnable:b,programLog:N,vertexShader:{log:q,prefix:h},fragmentShader:{log:Y,prefix:w}})}C.deleteShader(y),C.deleteShader(M);let p;this.getUniforms=function(){return p===void 0&&(p=new DE(C,n)),p};let k;return this.getAttributes=function(){return k===void 0&&(k=Lc(C,n)),k},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(n),this.program=void 0},this.name=I.shaderName,this.id=Rc++,this.cacheKey=A,this.usedTimes=1,this.program=n,this.vertexShader=y,this.fragmentShader=M,this}let jc=0;class Vc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new _c(A),I.set(A,g)),g}}class _c{constructor(A){this.id=jc++,this.code=A,this.usedTimes=0}}function Xc(Q,A,I,g,C,B,E){const i=new yo,o=new Vc,e=[],t=C.isWebGL2,a=C.logarithmicDepthBuffer,s=C.vertexTextures;let D=C.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function n(k,N,q,Y,b){const d=Y.fog,m=b.geometry,F=k.isMeshStandardMaterial?Y.environment:null,Z=(k.isMeshStandardMaterial?I:A).get(k.envMap||F),CA=Z&&Z.mapping===uE?Z.image.height:null,v=r[k.type];k.precision!==null&&(D=C.getMaxPrecision(k.precision),D!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",D,"instead."));const BA=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,IA=BA!==void 0?BA.length:0;let R=0;m.morphAttributes.position!==void 0&&(R=1),m.morphAttributes.normal!==void 0&&(R=2),m.morphAttributes.color!==void 0&&(R=3);let P,eA,iA,tA;if(v){const eI=Wg[v];P=eI.vertexShader,eA=eI.fragmentShader}else P=k.vertexShader,eA=k.fragmentShader,o.update(k),iA=o.getVertexShaderID(k),tA=o.getFragmentShaderID(k);const X=Q.getRenderTarget(),sA=k.alphaTest>0,cA=k.clearcoat>0,UA=k.iridescence>0;return{isWebGL2:t,shaderID:v,shaderName:k.type,vertexShader:P,fragmentShader:eA,defines:k.defines,customVertexShaderID:iA,customFragmentShaderID:tA,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:D,instancing:b.isInstancedMesh===!0,instancingColor:b.isInstancedMesh===!0&&b.instanceColor!==null,supportsVertexTextures:s,outputEncoding:X===null?Q.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:dC,map:!!k.map,matcap:!!k.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:CA,lightMap:!!k.lightMap,aoMap:!!k.aoMap,emissiveMap:!!k.emissiveMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,objectSpaceNormalMap:k.normalMapType===en,tangentSpaceNormalMap:k.normalMapType===Oa,decodeVideoTexture:!!k.map&&k.map.isVideoTexture===!0&&k.map.encoding===EI,clearcoat:cA,clearcoatMap:cA&&!!k.clearcoatMap,clearcoatRoughnessMap:cA&&!!k.clearcoatRoughnessMap,clearcoatNormalMap:cA&&!!k.clearcoatNormalMap,iridescence:UA,iridescenceMap:UA&&!!k.iridescenceMap,iridescenceThicknessMap:UA&&!!k.iridescenceThicknessMap,displacementMap:!!k.displacementMap,roughnessMap:!!k.roughnessMap,metalnessMap:!!k.metalnessMap,specularMap:!!k.specularMap,specularIntensityMap:!!k.specularIntensityMap,specularColorMap:!!k.specularColorMap,opaque:k.transparent===!1&&k.blending===UB,alphaMap:!!k.alphaMap,alphaTest:sA,gradientMap:!!k.gradientMap,sheen:k.sheen>0,sheenColorMap:!!k.sheenColorMap,sheenRoughnessMap:!!k.sheenRoughnessMap,transmission:k.transmission>0,transmissionMap:!!k.transmissionMap,thicknessMap:!!k.thicknessMap,combine:k.combine,vertexTangents:!!k.normalMap&&!!m.attributes.tangent,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,vertexUvs:!!k.map||!!k.bumpMap||!!k.normalMap||!!k.specularMap||!!k.alphaMap||!!k.emissiveMap||!!k.roughnessMap||!!k.metalnessMap||!!k.clearcoatMap||!!k.clearcoatRoughnessMap||!!k.clearcoatNormalMap||!!k.iridescenceMap||!!k.iridescenceThicknessMap||!!k.displacementMap||!!k.transmissionMap||!!k.thicknessMap||!!k.specularIntensityMap||!!k.specularColorMap||!!k.sheenColorMap||!!k.sheenRoughnessMap,uvsVertexOnly:!(k.map||k.bumpMap||k.normalMap||k.specularMap||k.alphaMap||k.emissiveMap||k.roughnessMap||k.metalnessMap||k.clearcoatNormalMap||k.iridescenceMap||k.iridescenceThicknessMap||k.transmission>0||k.transmissionMap||k.thicknessMap||k.specularIntensityMap||k.specularColorMap||k.sheen>0||k.sheenColorMap||k.sheenRoughnessMap)&&!!k.displacementMap,fog:!!d,useFog:k.fog===!0,fogExp2:d&&d.isFogExp2,flatShading:!!k.flatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:a,skinning:b.isSkinnedMesh===!0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:IA,morphTextureStride:R,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:k.dithering,shadowMapEnabled:Q.shadowMap.enabled&&q.length>0,shadowMapType:Q.shadowMap.type,toneMapping:k.toneMapped?Q.toneMapping:Xg,physicallyCorrectLights:Q.physicallyCorrectLights,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===YE,flipSided:k.side===Rg,useDepthPacking:!!k.depthPacking,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionDerivatives:k.extensions&&k.extensions.derivatives,extensionFragDepth:k.extensions&&k.extensions.fragDepth,extensionDrawBuffers:k.extensions&&k.extensions.drawBuffers,extensionShaderTextureLOD:k.extensions&&k.extensions.shaderTextureLOD,rendererExtensionFragDepth:t||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:t||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:t||g.has("EXT_shader_texture_lod"),customProgramCacheKey:k.customProgramCacheKey()}}function h(k){const N=[];if(k.shaderID?N.push(k.shaderID):(N.push(k.customVertexShaderID),N.push(k.customFragmentShaderID)),k.defines!==void 0)for(const q in k.defines)N.push(q),N.push(k.defines[q]);return k.isRawShaderMaterial===!1&&(w(N,k),G(N,k),N.push(Q.outputEncoding)),N.push(k.customProgramCacheKey),N.join()}function w(k,N){k.push(N.precision),k.push(N.outputEncoding),k.push(N.envMapMode),k.push(N.envMapCubeUVHeight),k.push(N.combine),k.push(N.vertexUvs),k.push(N.fogExp2),k.push(N.sizeAttenuation),k.push(N.morphTargetsCount),k.push(N.morphAttributeCount),k.push(N.numDirLights),k.push(N.numPointLights),k.push(N.numSpotLights),k.push(N.numSpotLightMaps),k.push(N.numHemiLights),k.push(N.numRectAreaLights),k.push(N.numDirLightShadows),k.push(N.numPointLightShadows),k.push(N.numSpotLightShadows),k.push(N.numSpotLightShadowsWithMaps),k.push(N.shadowMapType),k.push(N.toneMapping),k.push(N.numClippingPlanes),k.push(N.numClipIntersection),k.push(N.depthPacking)}function G(k,N){i.disableAll(),N.isWebGL2&&i.enable(0),N.supportsVertexTextures&&i.enable(1),N.instancing&&i.enable(2),N.instancingColor&&i.enable(3),N.map&&i.enable(4),N.matcap&&i.enable(5),N.envMap&&i.enable(6),N.lightMap&&i.enable(7),N.aoMap&&i.enable(8),N.emissiveMap&&i.enable(9),N.bumpMap&&i.enable(10),N.normalMap&&i.enable(11),N.objectSpaceNormalMap&&i.enable(12),N.tangentSpaceNormalMap&&i.enable(13),N.clearcoat&&i.enable(14),N.clearcoatMap&&i.enable(15),N.clearcoatRoughnessMap&&i.enable(16),N.clearcoatNormalMap&&i.enable(17),N.iridescence&&i.enable(18),N.iridescenceMap&&i.enable(19),N.iridescenceThicknessMap&&i.enable(20),N.displacementMap&&i.enable(21),N.specularMap&&i.enable(22),N.roughnessMap&&i.enable(23),N.metalnessMap&&i.enable(24),N.gradientMap&&i.enable(25),N.alphaMap&&i.enable(26),N.alphaTest&&i.enable(27),N.vertexColors&&i.enable(28),N.vertexAlphas&&i.enable(29),N.vertexUvs&&i.enable(30),N.vertexTangents&&i.enable(31),N.uvsVertexOnly&&i.enable(32),k.push(i.mask),i.disableAll(),N.fog&&i.enable(0),N.useFog&&i.enable(1),N.flatShading&&i.enable(2),N.logarithmicDepthBuffer&&i.enable(3),N.skinning&&i.enable(4),N.morphTargets&&i.enable(5),N.morphNormals&&i.enable(6),N.morphColors&&i.enable(7),N.premultipliedAlpha&&i.enable(8),N.shadowMapEnabled&&i.enable(9),N.physicallyCorrectLights&&i.enable(10),N.doubleSided&&i.enable(11),N.flipSided&&i.enable(12),N.useDepthPacking&&i.enable(13),N.dithering&&i.enable(14),N.specularIntensityMap&&i.enable(15),N.specularColorMap&&i.enable(16),N.transmission&&i.enable(17),N.transmissionMap&&i.enable(18),N.thicknessMap&&i.enable(19),N.sheen&&i.enable(20),N.sheenColorMap&&i.enable(21),N.sheenRoughnessMap&&i.enable(22),N.decodeVideoTexture&&i.enable(23),N.opaque&&i.enable(24),k.push(i.mask)}function S(k){const N=r[k.type];let q;if(N){const Y=Wg[N];q=$a.clone(Y.uniforms)}else q=k.uniforms;return q}function l(k,N){let q;for(let Y=0,b=e.length;Y<b;Y++){const d=e[Y];if(d.cacheKey===N){q=d,++q.usedTimes;break}}return q===void 0&&(q=new Pc(Q,N,k,B),e.push(q)),q}function y(k){if(--k.usedTimes===0){const N=e.indexOf(k);e[N]=e[e.length-1],e.pop(),k.destroy()}}function M(k){o.remove(k)}function p(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:S,acquireProgram:l,releaseProgram:y,releaseShaderCache:M,programs:e,dispose:p}}function zc(){let Q=new WeakMap;function A(B){let E=Q.get(B);return E===void 0&&(E={},Q.set(B,E)),E}function I(B){Q.delete(B)}function g(B,E,i){Q.get(B)[E]=i}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function $c(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function ht(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function rt(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,D,r,n,h){let w=Q[A];return w===void 0?(w={id:a.id,object:a,geometry:s,material:D,groupOrder:r,renderOrder:a.renderOrder,z:n,group:h},Q[A]=w):(w.id=a.id,w.object=a,w.geometry=s,w.material=D,w.groupOrder=r,w.renderOrder=a.renderOrder,w.z=n,w.group=h),A++,w}function i(a,s,D,r,n,h){const w=E(a,s,D,r,n,h);D.transmission>0?g.push(w):D.transparent===!0?C.push(w):I.push(w)}function o(a,s,D,r,n,h){const w=E(a,s,D,r,n,h);D.transmission>0?g.unshift(w):D.transparent===!0?C.unshift(w):I.unshift(w)}function e(a,s){I.length>1&&I.sort(a||$c),g.length>1&&g.sort(s||ht),C.length>1&&C.sort(s||ht)}function t(){for(let a=A,s=Q.length;a<s;a++){const D=Q[a];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:i,unshift:o,finish:t,sort:e}}function AG(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let E;return B===void 0?(E=new rt,Q.set(g,[E])):C>=B.length?(E=new rt,B.push(E)):E=B[C],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function IG(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new u,color:new uA};break;case"SpotLight":I={position:new u,direction:new u,color:new uA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new u,color:new uA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new u,skyColor:new uA,groundColor:new uA};break;case"RectAreaLight":I={color:new uA,position:new u,halfWidth:new u,halfHeight:new u};break}return Q[A.id]=I,I}}}function gG(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let CG=0;function BG(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function QG(Q,A){const I=new IG,g=gG(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)C.probe.push(new u);const B=new u,E=new bA,i=new bA;function o(t,a){let s=0,D=0,r=0;for(let Y=0;Y<9;Y++)C.probe[Y].set(0,0,0);let n=0,h=0,w=0,G=0,S=0,l=0,y=0,M=0,p=0,k=0;t.sort(BG);const N=a!==!0?Math.PI:1;for(let Y=0,b=t.length;Y<b;Y++){const d=t[Y],m=d.color,F=d.intensity,Z=d.distance,CA=d.shadow&&d.shadow.map?d.shadow.map.texture:null;if(d.isAmbientLight)s+=m.r*F*N,D+=m.g*F*N,r+=m.b*F*N;else if(d.isLightProbe)for(let v=0;v<9;v++)C.probe[v].addScaledVector(d.sh.coefficients[v],F);else if(d.isDirectionalLight){const v=I.get(d);if(v.color.copy(d.color).multiplyScalar(d.intensity*N),d.castShadow){const BA=d.shadow,IA=g.get(d);IA.shadowBias=BA.bias,IA.shadowNormalBias=BA.normalBias,IA.shadowRadius=BA.radius,IA.shadowMapSize=BA.mapSize,C.directionalShadow[n]=IA,C.directionalShadowMap[n]=CA,C.directionalShadowMatrix[n]=d.shadow.matrix,l++}C.directional[n]=v,n++}else if(d.isSpotLight){const v=I.get(d);v.position.setFromMatrixPosition(d.matrixWorld),v.color.copy(m).multiplyScalar(F*N),v.distance=Z,v.coneCos=Math.cos(d.angle),v.penumbraCos=Math.cos(d.angle*(1-d.penumbra)),v.decay=d.decay,C.spot[w]=v;const BA=d.shadow;if(d.map&&(C.spotLightMap[p]=d.map,p++,BA.updateMatrices(d),d.castShadow&&k++),C.spotLightMatrix[w]=BA.matrix,d.castShadow){const IA=g.get(d);IA.shadowBias=BA.bias,IA.shadowNormalBias=BA.normalBias,IA.shadowRadius=BA.radius,IA.shadowMapSize=BA.mapSize,C.spotShadow[w]=IA,C.spotShadowMap[w]=CA,M++}w++}else if(d.isRectAreaLight){const v=I.get(d);v.color.copy(m).multiplyScalar(F),v.halfWidth.set(d.width*.5,0,0),v.halfHeight.set(0,d.height*.5,0),C.rectArea[G]=v,G++}else if(d.isPointLight){const v=I.get(d);if(v.color.copy(d.color).multiplyScalar(d.intensity*N),v.distance=d.distance,v.decay=d.decay,d.castShadow){const BA=d.shadow,IA=g.get(d);IA.shadowBias=BA.bias,IA.shadowNormalBias=BA.normalBias,IA.shadowRadius=BA.radius,IA.shadowMapSize=BA.mapSize,IA.shadowCameraNear=BA.camera.near,IA.shadowCameraFar=BA.camera.far,C.pointShadow[h]=IA,C.pointShadowMap[h]=CA,C.pointShadowMatrix[h]=d.shadow.matrix,y++}C.point[h]=v,h++}else if(d.isHemisphereLight){const v=I.get(d);v.skyColor.copy(d.color).multiplyScalar(F*N),v.groundColor.copy(d.groundColor).multiplyScalar(F*N),C.hemi[S]=v,S++}}G>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=aA.LTC_FLOAT_1,C.rectAreaLTC2=aA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=aA.LTC_HALF_1,C.rectAreaLTC2=aA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=D,C.ambient[2]=r;const q=C.hash;(q.directionalLength!==n||q.pointLength!==h||q.spotLength!==w||q.rectAreaLength!==G||q.hemiLength!==S||q.numDirectionalShadows!==l||q.numPointShadows!==y||q.numSpotShadows!==M||q.numSpotMaps!==p)&&(C.directional.length=n,C.spot.length=w,C.rectArea.length=G,C.point.length=h,C.hemi.length=S,C.directionalShadow.length=l,C.directionalShadowMap.length=l,C.pointShadow.length=y,C.pointShadowMap.length=y,C.spotShadow.length=M,C.spotShadowMap.length=M,C.directionalShadowMatrix.length=l,C.pointShadowMatrix.length=y,C.spotLightMatrix.length=M+p-k,C.spotLightMap.length=p,C.numSpotLightShadowsWithMaps=k,q.directionalLength=n,q.pointLength=h,q.spotLength=w,q.rectAreaLength=G,q.hemiLength=S,q.numDirectionalShadows=l,q.numPointShadows=y,q.numSpotShadows=M,q.numSpotMaps=p,C.version=CG++)}function e(t,a){let s=0,D=0,r=0,n=0,h=0;const w=a.matrixWorldInverse;for(let G=0,S=t.length;G<S;G++){const l=t[G];if(l.isDirectionalLight){const y=C.directional[s];y.direction.setFromMatrixPosition(l.matrixWorld),B.setFromMatrixPosition(l.target.matrixWorld),y.direction.sub(B),y.direction.transformDirection(w),s++}else if(l.isSpotLight){const y=C.spot[r];y.position.setFromMatrixPosition(l.matrixWorld),y.position.applyMatrix4(w),y.direction.setFromMatrixPosition(l.matrixWorld),B.setFromMatrixPosition(l.target.matrixWorld),y.direction.sub(B),y.direction.transformDirection(w),r++}else if(l.isRectAreaLight){const y=C.rectArea[n];y.position.setFromMatrixPosition(l.matrixWorld),y.position.applyMatrix4(w),i.identity(),E.copy(l.matrixWorld),E.premultiply(w),i.extractRotation(E),y.halfWidth.set(l.width*.5,0,0),y.halfHeight.set(0,l.height*.5,0),y.halfWidth.applyMatrix4(i),y.halfHeight.applyMatrix4(i),n++}else if(l.isPointLight){const y=C.point[D];y.position.setFromMatrixPosition(l.matrixWorld),y.position.applyMatrix4(w),D++}else if(l.isHemisphereLight){const y=C.hemi[h];y.direction.setFromMatrixPosition(l.matrixWorld),y.direction.transformDirection(w),h++}}}return{setup:o,setupView:e,state:C}}function wt(Q,A){const I=new QG(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function e(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:e,pushLight:E,pushShadow:i}}function EG(Q,A){let I=new WeakMap;function g(B,E=0){const i=I.get(B);let o;return i===void 0?(o=new wt(Q,A),I.set(B,[o])):E>=i.length?(o=new wt(Q,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class iG extends zg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=En,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class oG extends zg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new u,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const eG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aG(Q,A,I){let g=new HE;const C=new vA,B=new vA,E=new hI,i=new iG({depthPacking:on}),o=new oG,e={},t=I.maxTextureSize,a={0:Rg,1:qC,2:YE},s=new nC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vA},radius:{value:4}},vertexShader:eG,fragmentShader:tG}),D=s.clone();D.defines.HORIZONTAL_PASS=1;const r=new lg;r.setAttribute("position",new qI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const n=new eg(r,s),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa,this.render=function(l,y,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||l.length===0)return;const p=Q.getRenderTarget(),k=Q.getActiveCubeFace(),N=Q.getActiveMipmapLevel(),q=Q.state;q.setBlending(FC),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);for(let Y=0,b=l.length;Y<b;Y++){const d=l[Y],m=d.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",d,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;C.copy(m.mapSize);const F=m.getFrameExtents();if(C.multiply(F),B.copy(m.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(B.x=Math.floor(t/F.x),C.x=B.x*F.x,m.mapSize.x=B.x),C.y>t&&(B.y=Math.floor(t/F.y),C.y=B.y*F.y,m.mapSize.y=B.y)),m.map===null){const CA=this.type!==aQ?{minFilter:VI,magFilter:VI}:{};m.map=new pC(C.x,C.y,CA),m.map.texture.name=d.name+".shadowMap",m.camera.updateProjectionMatrix()}Q.setRenderTarget(m.map),Q.clear();const Z=m.getViewportCount();for(let CA=0;CA<Z;CA++){const v=m.getViewport(CA);E.set(B.x*v.x,B.y*v.y,B.x*v.z,B.y*v.w),q.viewport(E),m.updateMatrices(d,CA),g=m.getFrustum(),S(y,M,m.camera,d,this.type)}m.isPointLightShadow!==!0&&this.type===aQ&&w(m,M),m.needsUpdate=!1}h.needsUpdate=!1,Q.setRenderTarget(p,k,N)};function w(l,y){const M=A.update(n);s.defines.VSM_SAMPLES!==l.blurSamples&&(s.defines.VSM_SAMPLES=l.blurSamples,D.defines.VSM_SAMPLES=l.blurSamples,s.needsUpdate=!0,D.needsUpdate=!0),l.mapPass===null&&(l.mapPass=new pC(C.x,C.y)),s.uniforms.shadow_pass.value=l.map.texture,s.uniforms.resolution.value=l.mapSize,s.uniforms.radius.value=l.radius,Q.setRenderTarget(l.mapPass),Q.clear(),Q.renderBufferDirect(y,null,M,s,n,null),D.uniforms.shadow_pass.value=l.mapPass.texture,D.uniforms.resolution.value=l.mapSize,D.uniforms.radius.value=l.radius,Q.setRenderTarget(l.map),Q.clear(),Q.renderBufferDirect(y,null,M,D,n,null)}function G(l,y,M,p,k,N){let q=null;const Y=M.isPointLight===!0?l.customDistanceMaterial:l.customDepthMaterial;if(Y!==void 0)q=Y;else if(q=M.isPointLight===!0?o:i,Q.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const b=q.uuid,d=y.uuid;let m=e[b];m===void 0&&(m={},e[b]=m);let F=m[d];F===void 0&&(F=q.clone(),m[d]=F),q=F}return q.visible=y.visible,q.wireframe=y.wireframe,N===aQ?q.side=y.shadowSide!==null?y.shadowSide:y.side:q.side=y.shadowSide!==null?y.shadowSide:a[y.side],q.alphaMap=y.alphaMap,q.alphaTest=y.alphaTest,q.map=y.map,q.clipShadows=y.clipShadows,q.clippingPlanes=y.clippingPlanes,q.clipIntersection=y.clipIntersection,q.displacementMap=y.displacementMap,q.displacementScale=y.displacementScale,q.displacementBias=y.displacementBias,q.wireframeLinewidth=y.wireframeLinewidth,q.linewidth=y.linewidth,M.isPointLight===!0&&q.isMeshDistanceMaterial===!0&&(q.referencePosition.setFromMatrixPosition(M.matrixWorld),q.nearDistance=p,q.farDistance=k),q}function S(l,y,M,p,k){if(l.visible===!1)return;if(l.layers.test(y.layers)&&(l.isMesh||l.isLine||l.isPoints)&&(l.castShadow||l.receiveShadow&&k===aQ)&&(!l.frustumCulled||g.intersectsObject(l))){l.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,l.matrixWorld);const Y=A.update(l),b=l.material;if(Array.isArray(b)){const d=Y.groups;for(let m=0,F=d.length;m<F;m++){const Z=d[m],CA=b[Z.materialIndex];if(CA&&CA.visible){const v=G(l,CA,p,M.near,M.far,k);Q.renderBufferDirect(M,null,Y,v,l,Z)}}}else if(b.visible){const d=G(l,b,p,M.near,M.far,k);Q.renderBufferDirect(M,null,Y,d,l,null)}}const q=l.children;for(let Y=0,b=q.length;Y<b;Y++)S(q[Y],y,M,p,k)}}function sG(Q,A,I){const g=I.isWebGL2;function C(){let L=!1;const j=new hI;let QA=null;const rA=new hI(0,0,0,0);return{setMask:function(GA){QA!==GA&&!L&&(Q.colorMask(GA,GA,GA,GA),QA=GA)},setLocked:function(GA){L=GA},setClear:function(GA,BI,dI,zI,HC){HC===!0&&(GA*=zI,BI*=zI,dI*=zI),j.set(GA,BI,dI,zI),rA.equals(j)===!1&&(Q.clearColor(GA,BI,dI,zI),rA.copy(j))},reset:function(){L=!1,QA=null,rA.set(-1,0,0,0)}}}function B(){let L=!1,j=null,QA=null,rA=null;return{setTest:function(GA){GA?sA(2929):cA(2929)},setMask:function(GA){j!==GA&&!L&&(Q.depthMask(GA),j=GA)},setFunc:function(GA){if(QA!==GA){switch(GA){case RD:Q.depthFunc(512);break;case qD:Q.depthFunc(519);break;case dD:Q.depthFunc(513);break;case ji:Q.depthFunc(515);break;case pD:Q.depthFunc(514);break;case fD:Q.depthFunc(518);break;case YD:Q.depthFunc(516);break;case uD:Q.depthFunc(517);break;default:Q.depthFunc(515)}QA=GA}},setLocked:function(GA){L=GA},setClear:function(GA){rA!==GA&&(Q.clearDepth(GA),rA=GA)},reset:function(){L=!1,j=null,QA=null,rA=null}}}function E(){let L=!1,j=null,QA=null,rA=null,GA=null,BI=null,dI=null,zI=null,HC=null;return{setTest:function(kI){L||(kI?sA(2960):cA(2960))},setMask:function(kI){j!==kI&&!L&&(Q.stencilMask(kI),j=kI)},setFunc:function(kI,CC,yg){(QA!==kI||rA!==CC||GA!==yg)&&(Q.stencilFunc(kI,CC,yg),QA=kI,rA=CC,GA=yg)},setOp:function(kI,CC,yg){(BI!==kI||dI!==CC||zI!==yg)&&(Q.stencilOp(kI,CC,yg),BI=kI,dI=CC,zI=yg)},setLocked:function(kI){L=kI},setClear:function(kI){HC!==kI&&(Q.clearStencil(kI),HC=kI)},reset:function(){L=!1,j=null,QA=null,rA=null,GA=null,BI=null,dI=null,zI=null,HC=null}}}const i=new C,o=new B,e=new E,t=new WeakMap,a=new WeakMap;let s={},D={},r=new WeakMap,n=[],h=null,w=!1,G=null,S=null,l=null,y=null,M=null,p=null,k=null,N=!1,q=null,Y=null,b=null,d=null,m=null;const F=Q.getParameter(35661);let Z=!1,CA=0;const v=Q.getParameter(7938);v.indexOf("WebGL")!==-1?(CA=parseFloat(/^WebGL (\d)/.exec(v)[1]),Z=CA>=1):v.indexOf("OpenGL ES")!==-1&&(CA=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),Z=CA>=2);let BA=null,IA={};const R=Q.getParameter(3088),P=Q.getParameter(2978),eA=new hI().fromArray(R),iA=new hI().fromArray(P);function tA(L,j,QA){const rA=new Uint8Array(4),GA=Q.createTexture();Q.bindTexture(L,GA),Q.texParameteri(L,10241,9728),Q.texParameteri(L,10240,9728);for(let BI=0;BI<QA;BI++)Q.texImage2D(j+BI,0,6408,1,1,0,6408,5121,rA);return GA}const X={};X[3553]=tA(3553,3553,1),X[34067]=tA(34067,34069,6),i.setClear(0,0,0,1),o.setClear(1),e.setClear(0),sA(2929),o.setFunc(ji),vI(!1),Ag(oe),sA(2884),WI(FC);function sA(L){s[L]!==!0&&(Q.enable(L),s[L]=!0)}function cA(L){s[L]!==!1&&(Q.disable(L),s[L]=!1)}function UA(L,j){return D[L]!==j?(Q.bindFramebuffer(L,j),D[L]=j,g&&(L===36009&&(D[36160]=j),L===36160&&(D[36009]=j)),!0):!1}function wA(L,j){let QA=n,rA=!1;if(L)if(QA=r.get(j),QA===void 0&&(QA=[],r.set(j,QA)),L.isWebGLMultipleRenderTargets){const GA=L.texture;if(QA.length!==GA.length||QA[0]!==36064){for(let BI=0,dI=GA.length;BI<dI;BI++)QA[BI]=36064+BI;QA.length=GA.length,rA=!0}}else QA[0]!==36064&&(QA[0]=36064,rA=!0);else QA[0]!==1029&&(QA[0]=1029,rA=!0);rA&&(I.isWebGL2?Q.drawBuffers(QA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(QA))}function eI(L){return h!==L?(Q.useProgram(L),h=L,!0):!1}const LA={[yB]:32774,[GD]:32778,[SD]:32779};if(g)LA[se]=32775,LA[De]=32776;else{const L=A.get("EXT_blend_minmax");L!==null&&(LA[se]=L.MIN_EXT,LA[De]=L.MAX_EXT)}const JA={[lD]:0,[kD]:1,[yD]:768,[Ya]:770,[FD]:776,[ND]:774,[KD]:772,[MD]:769,[ua]:771,[JD]:775,[UD]:773};function WI(L,j,QA,rA,GA,BI,dI,zI){if(L===FC){w===!0&&(cA(3042),w=!1);return}if(w===!1&&(sA(3042),w=!0),L!==cD){if(L!==G||zI!==N){if((S!==yB||M!==yB)&&(Q.blendEquation(32774),S=yB,M=yB),zI)switch(L){case UB:Q.blendFuncSeparate(1,771,1,771);break;case ee:Q.blendFunc(1,1);break;case te:Q.blendFuncSeparate(0,769,0,1);break;case ae:Q.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case UB:Q.blendFuncSeparate(770,771,1,771);break;case ee:Q.blendFunc(770,1);break;case te:Q.blendFuncSeparate(0,769,0,1);break;case ae:Q.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}l=null,y=null,p=null,k=null,G=L,N=zI}return}GA=GA||j,BI=BI||QA,dI=dI||rA,(j!==S||GA!==M)&&(Q.blendEquationSeparate(LA[j],LA[GA]),S=j,M=GA),(QA!==l||rA!==y||BI!==p||dI!==k)&&(Q.blendFuncSeparate(JA[QA],JA[rA],JA[BI],JA[dI]),l=QA,y=rA,p=BI,k=dI),G=L,N=!1}function PA(L,j){L.side===YE?cA(2884):sA(2884);let QA=L.side===Rg;j&&(QA=!QA),vI(QA),L.blending===UB&&L.transparent===!1?WI(FC):WI(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),i.setMask(L.colorWrite);const rA=L.stencilWrite;e.setTest(rA),rA&&(e.setMask(L.stencilWriteMask),e.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),e.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tI(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?sA(32926):cA(32926)}function vI(L){q!==L&&(L?Q.frontFace(2304):Q.frontFace(2305),q=L)}function Ag(L){L!==rD?(sA(2884),L!==Y&&(L===oe?Q.cullFace(1029):L===wD?Q.cullFace(1028):Q.cullFace(1032))):cA(2884),Y=L}function UI(L){L!==b&&(Z&&Q.lineWidth(L),b=L)}function tI(L,j,QA){L?(sA(32823),(d!==j||m!==QA)&&(Q.polygonOffset(j,QA),d=j,m=QA)):cA(32823)}function kg(L){L?sA(3089):cA(3089)}function ig(L){L===void 0&&(L=33984+F-1),BA!==L&&(Q.activeTexture(L),BA=L)}function J(L,j,QA){QA===void 0&&(BA===null?QA=33984+F-1:QA=BA);let rA=IA[QA];rA===void 0&&(rA={type:void 0,texture:void 0},IA[QA]=rA),(rA.type!==L||rA.texture!==j)&&(BA!==QA&&(Q.activeTexture(QA),BA=QA),Q.bindTexture(L,j||X[L]),rA.type=L,rA.texture=j)}function K(){const L=IA[BA];L!==void 0&&L.type!==void 0&&(Q.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function EA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function DA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nA(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{Q.texStorage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kA(){try{Q.texStorage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function NA(){try{Q.texImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{Q.texImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function hA(L){eA.equals(L)===!1&&(Q.scissor(L.x,L.y,L.z,L.w),eA.copy(L))}function lA(L){iA.equals(L)===!1&&(Q.viewport(L.x,L.y,L.z,L.w),iA.copy(L))}function jA(L,j){let QA=a.get(j);QA===void 0&&(QA=new WeakMap,a.set(j,QA));let rA=QA.get(L);rA===void 0&&(rA=Q.getUniformBlockIndex(j,L.name),QA.set(L,rA))}function CI(L,j){const rA=a.get(j).get(L);t.get(j)!==rA&&(Q.uniformBlockBinding(j,rA,L.__bindingPointIndex),t.set(j,rA))}function RI(){Q.disable(3042),Q.disable(2884),Q.disable(2929),Q.disable(32823),Q.disable(3089),Q.disable(2960),Q.disable(32926),Q.blendEquation(32774),Q.blendFunc(1,0),Q.blendFuncSeparate(1,0,1,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(513),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(519,0,4294967295),Q.stencilOp(7680,7680,7680),Q.clearStencil(0),Q.cullFace(1029),Q.frontFace(2305),Q.polygonOffset(0,0),Q.activeTexture(33984),Q.bindFramebuffer(36160,null),g===!0&&(Q.bindFramebuffer(36009,null),Q.bindFramebuffer(36008,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},BA=null,IA={},D={},r=new WeakMap,n=[],h=null,w=!1,G=null,S=null,l=null,y=null,M=null,p=null,k=null,N=!1,q=null,Y=null,b=null,d=null,m=null,eA.set(0,0,Q.canvas.width,Q.canvas.height),iA.set(0,0,Q.canvas.width,Q.canvas.height),i.reset(),o.reset(),e.reset()}return{buffers:{color:i,depth:o,stencil:e},enable:sA,disable:cA,bindFramebuffer:UA,drawBuffers:wA,useProgram:eI,setBlending:WI,setMaterial:PA,setFlipSided:vI,setCullFace:Ag,setLineWidth:UI,setPolygonOffset:tI,setScissorTest:kg,activeTexture:ig,bindTexture:J,unbindTexture:K,compressedTexImage2D:V,compressedTexImage3D:EA,texImage2D:NA,texImage3D:H,updateUBOMapping:jA,uniformBlockBinding:CI,texStorage2D:$,texStorage3D:kA,texSubImage2D:oA,texSubImage3D:DA,compressedTexSubImage2D:pA,compressedTexSubImage3D:nA,scissor:hA,viewport:lA,reset:RI}}function DG(Q,A,I,g,C,B,E){const i=C.isWebGL2,o=C.maxTextures,e=C.maxCubemapSize,t=C.maxTextureSize,a=C.maxSamples,s=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),r=new WeakMap;let n;const h=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function G(J,K){return w?new OffscreenCanvas(J,K):lQ("canvas")}function S(J,K,V,EA){let oA=1;if((J.width>EA||J.height>EA)&&(oA=EA/Math.max(J.width,J.height)),oA<1||K===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const DA=K?yE:Math.floor,pA=DA(oA*J.width),nA=DA(oA*J.height);n===void 0&&(n=G(pA,nA));const $=V?G(pA,nA):n;return $.width=pA,$.height=nA,$.getContext("2d").drawImage(J,0,0,pA,nA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pA+"x"+nA+")."),$}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function l(J){return Ao(J.width)&&Ao(J.height)}function y(J){return i?!1:J.wrapS!==wg||J.wrapT!==wg||J.minFilter!==VI&&J.minFilter!==og}function M(J,K){return J.generateMipmaps&&K&&J.minFilter!==VI&&J.minFilter!==og}function p(J){Q.generateMipmap(J)}function k(J,K,V,EA,oA=!1){if(i===!1)return K;if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let DA=K;return K===6403&&(V===5126&&(DA=33326),V===5131&&(DA=33325),V===5121&&(DA=33321)),K===33319&&(V===5126&&(DA=33328),V===5131&&(DA=33327),V===5121&&(DA=33323)),K===6408&&(V===5126&&(DA=34836),V===5131&&(DA=34842),V===5121&&(DA=EA===EI&&oA===!1?35907:32856),V===32819&&(DA=32854),V===32820&&(DA=32855)),(DA===33325||DA===33326||DA===33327||DA===33328||DA===34842||DA===34836)&&A.get("EXT_color_buffer_float"),DA}function N(J,K,V){return M(J,V)===!0||J.isFramebufferTexture&&J.minFilter!==VI&&J.minFilter!==og?Math.log2(Math.max(K.width,K.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?K.mipmaps.length:1}function q(J){return J===VI||J===Xi||J===aE?9728:9729}function Y(J){const K=J.target;K.removeEventListener("dispose",Y),d(K),K.isVideoTexture&&r.delete(K)}function b(J){const K=J.target;K.removeEventListener("dispose",b),F(K)}function d(J){const K=g.get(J);if(K.__webglInit===void 0)return;const V=J.source,EA=h.get(V);if(EA){const oA=EA[K.__cacheKey];oA.usedTimes--,oA.usedTimes===0&&m(J),Object.keys(EA).length===0&&h.delete(V)}g.remove(J)}function m(J){const K=g.get(J);Q.deleteTexture(K.__webglTexture);const V=J.source,EA=h.get(V);delete EA[K.__cacheKey],E.memory.textures--}function F(J){const K=J.texture,V=g.get(J),EA=g.get(K);if(EA.__webglTexture!==void 0&&(Q.deleteTexture(EA.__webglTexture),E.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let oA=0;oA<6;oA++)Q.deleteFramebuffer(V.__webglFramebuffer[oA]),V.__webglDepthbuffer&&Q.deleteRenderbuffer(V.__webglDepthbuffer[oA]);else{if(Q.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&Q.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let oA=0;oA<V.__webglColorRenderbuffer.length;oA++)V.__webglColorRenderbuffer[oA]&&Q.deleteRenderbuffer(V.__webglColorRenderbuffer[oA]);V.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let oA=0,DA=K.length;oA<DA;oA++){const pA=g.get(K[oA]);pA.__webglTexture&&(Q.deleteTexture(pA.__webglTexture),E.memory.textures--),g.remove(K[oA])}g.remove(K),g.remove(J)}let Z=0;function CA(){Z=0}function v(){const J=Z;return J>=o&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+o),Z+=1,J}function BA(J){const K=[];return K.push(J.wrapS),K.push(J.wrapT),K.push(J.wrapR||0),K.push(J.magFilter),K.push(J.minFilter),K.push(J.anisotropy),K.push(J.internalFormat),K.push(J.format),K.push(J.type),K.push(J.generateMipmaps),K.push(J.premultiplyAlpha),K.push(J.flipY),K.push(J.unpackAlignment),K.push(J.encoding),K.join()}function IA(J,K){const V=g.get(J);if(J.isVideoTexture&&kg(J),J.isRenderTargetTexture===!1&&J.version>0&&V.__version!==J.version){const EA=J.image;if(EA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(EA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{cA(V,J,K);return}}I.bindTexture(3553,V.__webglTexture,33984+K)}function R(J,K){const V=g.get(J);if(J.version>0&&V.__version!==J.version){cA(V,J,K);return}I.bindTexture(35866,V.__webglTexture,33984+K)}function P(J,K){const V=g.get(J);if(J.version>0&&V.__version!==J.version){cA(V,J,K);return}I.bindTexture(32879,V.__webglTexture,33984+K)}function eA(J,K){const V=g.get(J);if(J.version>0&&V.__version!==J.version){UA(V,J,K);return}I.bindTexture(34067,V.__webglTexture,33984+K)}const iA={[dB]:10497,[wg]:33071,[kE]:33648},tA={[VI]:9728,[Xi]:9984,[aE]:9986,[og]:9729,[ba]:9985,[IB]:9987};function X(J,K,V){if(V?(Q.texParameteri(J,10242,iA[K.wrapS]),Q.texParameteri(J,10243,iA[K.wrapT]),(J===32879||J===35866)&&Q.texParameteri(J,32882,iA[K.wrapR]),Q.texParameteri(J,10240,tA[K.magFilter]),Q.texParameteri(J,10241,tA[K.minFilter])):(Q.texParameteri(J,10242,33071),Q.texParameteri(J,10243,33071),(J===32879||J===35866)&&Q.texParameteri(J,32882,33071),(K.wrapS!==wg||K.wrapT!==wg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(J,10240,q(K.magFilter)),Q.texParameteri(J,10241,q(K.minFilter)),K.minFilter!==VI&&K.minFilter!==og&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const EA=A.get("EXT_texture_filter_anisotropic");if(K.magFilter===VI||K.minFilter!==aE&&K.minFilter!==IB||K.type===UC&&A.has("OES_texture_float_linear")===!1||i===!1&&K.type===wQ&&A.has("OES_texture_half_float_linear")===!1)return;(K.anisotropy>1||g.get(K).__currentAnisotropy)&&(Q.texParameterf(J,EA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(K.anisotropy,C.getMaxAnisotropy())),g.get(K).__currentAnisotropy=K.anisotropy)}}function sA(J,K){let V=!1;J.__webglInit===void 0&&(J.__webglInit=!0,K.addEventListener("dispose",Y));const EA=K.source;let oA=h.get(EA);oA===void 0&&(oA={},h.set(EA,oA));const DA=BA(K);if(DA!==J.__cacheKey){oA[DA]===void 0&&(oA[DA]={texture:Q.createTexture(),usedTimes:0},E.memory.textures++,V=!0),oA[DA].usedTimes++;const pA=oA[J.__cacheKey];pA!==void 0&&(oA[J.__cacheKey].usedTimes--,pA.usedTimes===0&&m(K)),J.__cacheKey=DA,J.__webglTexture=oA[DA].texture}return V}function cA(J,K,V){let EA=3553;(K.isDataArrayTexture||K.isCompressedArrayTexture)&&(EA=35866),K.isData3DTexture&&(EA=32879);const oA=sA(J,K),DA=K.source;I.bindTexture(EA,J.__webglTexture,33984+V);const pA=g.get(DA);if(DA.version!==pA.__version||oA===!0){I.activeTexture(33984+V),Q.pixelStorei(37440,K.flipY),Q.pixelStorei(37441,K.premultiplyAlpha),Q.pixelStorei(3317,K.unpackAlignment),Q.pixelStorei(37443,0);const nA=y(K)&&l(K.image)===!1;let $=S(K.image,nA,!1,t);$=ig(K,$);const kA=l($)||i,NA=B.convert(K.format,K.encoding);let H=B.convert(K.type),hA=k(K.internalFormat,NA,H,K.encoding,K.isVideoTexture);X(EA,K,kA);let lA;const jA=K.mipmaps,CI=i&&K.isVideoTexture!==!0,RI=pA.__version===void 0||oA===!0,L=N(K,$,kA);if(K.isDepthTexture)hA=6402,i?K.type===UC?hA=36012:K.type===VC?hA=33190:K.type===NB?hA=35056:hA=33189:K.type===UC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),K.format===zC&&hA===6402&&K.type!==Ta&&K.type!==VC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),K.type=VC,H=B.convert(K.type)),K.format===pB&&hA===6402&&(hA=34041,K.type!==NB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),K.type=NB,H=B.convert(K.type))),RI&&(CI?I.texStorage2D(3553,1,hA,$.width,$.height):I.texImage2D(3553,0,hA,$.width,$.height,0,NA,H,null));else if(K.isDataTexture)if(jA.length>0&&kA){CI&&RI&&I.texStorage2D(3553,L,hA,jA[0].width,jA[0].height);for(let j=0,QA=jA.length;j<QA;j++)lA=jA[j],CI?I.texSubImage2D(3553,j,0,0,lA.width,lA.height,NA,H,lA.data):I.texImage2D(3553,j,hA,lA.width,lA.height,0,NA,H,lA.data);K.generateMipmaps=!1}else CI?(RI&&I.texStorage2D(3553,L,hA,$.width,$.height),I.texSubImage2D(3553,0,0,0,$.width,$.height,NA,H,$.data)):I.texImage2D(3553,0,hA,$.width,$.height,0,NA,H,$.data);else if(K.isCompressedTexture)if(K.isCompressedArrayTexture){CI&&RI&&I.texStorage3D(35866,L,hA,jA[0].width,jA[0].height,$.depth);for(let j=0,QA=jA.length;j<QA;j++)lA=jA[j],K.format!==Jg?NA!==null?CI?I.compressedTexSubImage3D(35866,j,0,0,0,lA.width,lA.height,$.depth,NA,lA.data,0,0):I.compressedTexImage3D(35866,j,hA,lA.width,lA.height,$.depth,0,lA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):CI?I.texSubImage3D(35866,j,0,0,0,lA.width,lA.height,$.depth,NA,H,lA.data):I.texImage3D(35866,j,hA,lA.width,lA.height,$.depth,0,NA,H,lA.data)}else{CI&&RI&&I.texStorage2D(3553,L,hA,jA[0].width,jA[0].height);for(let j=0,QA=jA.length;j<QA;j++)lA=jA[j],K.format!==Jg?NA!==null?CI?I.compressedTexSubImage2D(3553,j,0,0,lA.width,lA.height,NA,lA.data):I.compressedTexImage2D(3553,j,hA,lA.width,lA.height,0,lA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):CI?I.texSubImage2D(3553,j,0,0,lA.width,lA.height,NA,H,lA.data):I.texImage2D(3553,j,hA,lA.width,lA.height,0,NA,H,lA.data)}else if(K.isDataArrayTexture)CI?(RI&&I.texStorage3D(35866,L,hA,$.width,$.height,$.depth),I.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,NA,H,$.data)):I.texImage3D(35866,0,hA,$.width,$.height,$.depth,0,NA,H,$.data);else if(K.isData3DTexture)CI?(RI&&I.texStorage3D(32879,L,hA,$.width,$.height,$.depth),I.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,NA,H,$.data)):I.texImage3D(32879,0,hA,$.width,$.height,$.depth,0,NA,H,$.data);else if(K.isFramebufferTexture){if(RI)if(CI)I.texStorage2D(3553,L,hA,$.width,$.height);else{let j=$.width,QA=$.height;for(let rA=0;rA<L;rA++)I.texImage2D(3553,rA,hA,j,QA,0,NA,H,null),j>>=1,QA>>=1}}else if(jA.length>0&&kA){CI&&RI&&I.texStorage2D(3553,L,hA,jA[0].width,jA[0].height);for(let j=0,QA=jA.length;j<QA;j++)lA=jA[j],CI?I.texSubImage2D(3553,j,0,0,NA,H,lA):I.texImage2D(3553,j,hA,NA,H,lA);K.generateMipmaps=!1}else CI?(RI&&I.texStorage2D(3553,L,hA,$.width,$.height),I.texSubImage2D(3553,0,0,0,NA,H,$)):I.texImage2D(3553,0,hA,NA,H,$);M(K,kA)&&p(EA),pA.__version=DA.version,K.onUpdate&&K.onUpdate(K)}J.__version=K.version}function UA(J,K,V){if(K.image.length!==6)return;const EA=sA(J,K),oA=K.source;I.bindTexture(34067,J.__webglTexture,33984+V);const DA=g.get(oA);if(oA.version!==DA.__version||EA===!0){I.activeTexture(33984+V),Q.pixelStorei(37440,K.flipY),Q.pixelStorei(37441,K.premultiplyAlpha),Q.pixelStorei(3317,K.unpackAlignment),Q.pixelStorei(37443,0);const pA=K.isCompressedTexture||K.image[0].isCompressedTexture,nA=K.image[0]&&K.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!pA&&!nA?$[j]=S(K.image[j],!1,!0,e):$[j]=nA?K.image[j].image:K.image[j],$[j]=ig(K,$[j]);const kA=$[0],NA=l(kA)||i,H=B.convert(K.format,K.encoding),hA=B.convert(K.type),lA=k(K.internalFormat,H,hA,K.encoding),jA=i&&K.isVideoTexture!==!0,CI=DA.__version===void 0||EA===!0;let RI=N(K,kA,NA);X(34067,K,NA);let L;if(pA){jA&&CI&&I.texStorage2D(34067,RI,lA,kA.width,kA.height);for(let j=0;j<6;j++){L=$[j].mipmaps;for(let QA=0;QA<L.length;QA++){const rA=L[QA];K.format!==Jg?H!==null?jA?I.compressedTexSubImage2D(34069+j,QA,0,0,rA.width,rA.height,H,rA.data):I.compressedTexImage2D(34069+j,QA,lA,rA.width,rA.height,0,rA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jA?I.texSubImage2D(34069+j,QA,0,0,rA.width,rA.height,H,hA,rA.data):I.texImage2D(34069+j,QA,lA,rA.width,rA.height,0,H,hA,rA.data)}}}else{L=K.mipmaps,jA&&CI&&(L.length>0&&RI++,I.texStorage2D(34067,RI,lA,$[0].width,$[0].height));for(let j=0;j<6;j++)if(nA){jA?I.texSubImage2D(34069+j,0,0,0,$[j].width,$[j].height,H,hA,$[j].data):I.texImage2D(34069+j,0,lA,$[j].width,$[j].height,0,H,hA,$[j].data);for(let QA=0;QA<L.length;QA++){const GA=L[QA].image[j].image;jA?I.texSubImage2D(34069+j,QA+1,0,0,GA.width,GA.height,H,hA,GA.data):I.texImage2D(34069+j,QA+1,lA,GA.width,GA.height,0,H,hA,GA.data)}}else{jA?I.texSubImage2D(34069+j,0,0,0,H,hA,$[j]):I.texImage2D(34069+j,0,lA,H,hA,$[j]);for(let QA=0;QA<L.length;QA++){const rA=L[QA];jA?I.texSubImage2D(34069+j,QA+1,0,0,H,hA,rA.image[j]):I.texImage2D(34069+j,QA+1,lA,H,hA,rA.image[j])}}}M(K,NA)&&p(34067),DA.__version=oA.version,K.onUpdate&&K.onUpdate(K)}J.__version=K.version}function wA(J,K,V,EA,oA){const DA=B.convert(V.format,V.encoding),pA=B.convert(V.type),nA=k(V.internalFormat,DA,pA,V.encoding);g.get(K).__hasExternalTextures||(oA===32879||oA===35866?I.texImage3D(oA,0,nA,K.width,K.height,K.depth,0,DA,pA,null):I.texImage2D(oA,0,nA,K.width,K.height,0,DA,pA,null)),I.bindFramebuffer(36160,J),tI(K)?s.framebufferTexture2DMultisampleEXT(36160,EA,oA,g.get(V).__webglTexture,0,UI(K)):(oA===3553||oA>=34069&&oA<=34074)&&Q.framebufferTexture2D(36160,EA,oA,g.get(V).__webglTexture,0),I.bindFramebuffer(36160,null)}function eI(J,K,V){if(Q.bindRenderbuffer(36161,J),K.depthBuffer&&!K.stencilBuffer){let EA=33189;if(V||tI(K)){const oA=K.depthTexture;oA&&oA.isDepthTexture&&(oA.type===UC?EA=36012:oA.type===VC&&(EA=33190));const DA=UI(K);tI(K)?s.renderbufferStorageMultisampleEXT(36161,DA,EA,K.width,K.height):Q.renderbufferStorageMultisample(36161,DA,EA,K.width,K.height)}else Q.renderbufferStorage(36161,EA,K.width,K.height);Q.framebufferRenderbuffer(36160,36096,36161,J)}else if(K.depthBuffer&&K.stencilBuffer){const EA=UI(K);V&&tI(K)===!1?Q.renderbufferStorageMultisample(36161,EA,35056,K.width,K.height):tI(K)?s.renderbufferStorageMultisampleEXT(36161,EA,35056,K.width,K.height):Q.renderbufferStorage(36161,34041,K.width,K.height),Q.framebufferRenderbuffer(36160,33306,36161,J)}else{const EA=K.isWebGLMultipleRenderTargets===!0?K.texture:[K.texture];for(let oA=0;oA<EA.length;oA++){const DA=EA[oA],pA=B.convert(DA.format,DA.encoding),nA=B.convert(DA.type),$=k(DA.internalFormat,pA,nA,DA.encoding),kA=UI(K);V&&tI(K)===!1?Q.renderbufferStorageMultisample(36161,kA,$,K.width,K.height):tI(K)?s.renderbufferStorageMultisampleEXT(36161,kA,$,K.width,K.height):Q.renderbufferStorage(36161,$,K.width,K.height)}}Q.bindRenderbuffer(36161,null)}function LA(J,K){if(K&&K.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(36160,J),!(K.depthTexture&&K.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(K.depthTexture).__webglTexture||K.depthTexture.image.width!==K.width||K.depthTexture.image.height!==K.height)&&(K.depthTexture.image.width=K.width,K.depthTexture.image.height=K.height,K.depthTexture.needsUpdate=!0),IA(K.depthTexture,0);const EA=g.get(K.depthTexture).__webglTexture,oA=UI(K);if(K.depthTexture.format===zC)tI(K)?s.framebufferTexture2DMultisampleEXT(36160,36096,3553,EA,0,oA):Q.framebufferTexture2D(36160,36096,3553,EA,0);else if(K.depthTexture.format===pB)tI(K)?s.framebufferTexture2DMultisampleEXT(36160,33306,3553,EA,0,oA):Q.framebufferTexture2D(36160,33306,3553,EA,0);else throw new Error("Unknown depthTexture format")}function JA(J){const K=g.get(J),V=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!K.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");LA(K.__webglFramebuffer,J)}else if(V){K.__webglDepthbuffer=[];for(let EA=0;EA<6;EA++)I.bindFramebuffer(36160,K.__webglFramebuffer[EA]),K.__webglDepthbuffer[EA]=Q.createRenderbuffer(),eI(K.__webglDepthbuffer[EA],J,!1)}else I.bindFramebuffer(36160,K.__webglFramebuffer),K.__webglDepthbuffer=Q.createRenderbuffer(),eI(K.__webglDepthbuffer,J,!1);I.bindFramebuffer(36160,null)}function WI(J,K,V){const EA=g.get(J);K!==void 0&&wA(EA.__webglFramebuffer,J,J.texture,36064,3553),V!==void 0&&JA(J)}function PA(J){const K=J.texture,V=g.get(J),EA=g.get(K);J.addEventListener("dispose",b),J.isWebGLMultipleRenderTargets!==!0&&(EA.__webglTexture===void 0&&(EA.__webglTexture=Q.createTexture()),EA.__version=K.version,E.memory.textures++);const oA=J.isWebGLCubeRenderTarget===!0,DA=J.isWebGLMultipleRenderTargets===!0,pA=l(J)||i;if(oA){V.__webglFramebuffer=[];for(let nA=0;nA<6;nA++)V.__webglFramebuffer[nA]=Q.createFramebuffer()}else{if(V.__webglFramebuffer=Q.createFramebuffer(),DA)if(C.drawBuffers){const nA=J.texture;for(let $=0,kA=nA.length;$<kA;$++){const NA=g.get(nA[$]);NA.__webglTexture===void 0&&(NA.__webglTexture=Q.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&J.samples>0&&tI(J)===!1){const nA=DA?K:[K];V.__webglMultisampledFramebuffer=Q.createFramebuffer(),V.__webglColorRenderbuffer=[],I.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let $=0;$<nA.length;$++){const kA=nA[$];V.__webglColorRenderbuffer[$]=Q.createRenderbuffer(),Q.bindRenderbuffer(36161,V.__webglColorRenderbuffer[$]);const NA=B.convert(kA.format,kA.encoding),H=B.convert(kA.type),hA=k(kA.internalFormat,NA,H,kA.encoding,J.isXRRenderTarget===!0),lA=UI(J);Q.renderbufferStorageMultisample(36161,lA,hA,J.width,J.height),Q.framebufferRenderbuffer(36160,36064+$,36161,V.__webglColorRenderbuffer[$])}Q.bindRenderbuffer(36161,null),J.depthBuffer&&(V.__webglDepthRenderbuffer=Q.createRenderbuffer(),eI(V.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(36160,null)}}if(oA){I.bindTexture(34067,EA.__webglTexture),X(34067,K,pA);for(let nA=0;nA<6;nA++)wA(V.__webglFramebuffer[nA],J,K,36064,34069+nA);M(K,pA)&&p(34067),I.unbindTexture()}else if(DA){const nA=J.texture;for(let $=0,kA=nA.length;$<kA;$++){const NA=nA[$],H=g.get(NA);I.bindTexture(3553,H.__webglTexture),X(3553,NA,pA),wA(V.__webglFramebuffer,J,NA,36064+$,3553),M(NA,pA)&&p(3553)}I.unbindTexture()}else{let nA=3553;(J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(i?nA=J.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(nA,EA.__webglTexture),X(nA,K,pA),wA(V.__webglFramebuffer,J,K,36064,nA),M(K,pA)&&p(nA),I.unbindTexture()}J.depthBuffer&&JA(J)}function vI(J){const K=l(J)||i,V=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let EA=0,oA=V.length;EA<oA;EA++){const DA=V[EA];if(M(DA,K)){const pA=J.isWebGLCubeRenderTarget?34067:3553,nA=g.get(DA).__webglTexture;I.bindTexture(pA,nA),p(pA),I.unbindTexture()}}}function Ag(J){if(i&&J.samples>0&&tI(J)===!1){const K=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],V=J.width,EA=J.height;let oA=16384;const DA=[],pA=J.stencilBuffer?33306:36096,nA=g.get(J),$=J.isWebGLMultipleRenderTargets===!0;if($)for(let kA=0;kA<K.length;kA++)I.bindFramebuffer(36160,nA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(36160,36064+kA,36161,null),I.bindFramebuffer(36160,nA.__webglFramebuffer),Q.framebufferTexture2D(36009,36064+kA,3553,null,0);I.bindFramebuffer(36008,nA.__webglMultisampledFramebuffer),I.bindFramebuffer(36009,nA.__webglFramebuffer);for(let kA=0;kA<K.length;kA++){DA.push(36064+kA),J.depthBuffer&&DA.push(pA);const NA=nA.__ignoreDepthValues!==void 0?nA.__ignoreDepthValues:!1;if(NA===!1&&(J.depthBuffer&&(oA|=256),J.stencilBuffer&&(oA|=1024)),$&&Q.framebufferRenderbuffer(36008,36064,36161,nA.__webglColorRenderbuffer[kA]),NA===!0&&(Q.invalidateFramebuffer(36008,[pA]),Q.invalidateFramebuffer(36009,[pA])),$){const H=g.get(K[kA]).__webglTexture;Q.framebufferTexture2D(36009,36064,3553,H,0)}Q.blitFramebuffer(0,0,V,EA,0,0,V,EA,oA,9728),D&&Q.invalidateFramebuffer(36008,DA)}if(I.bindFramebuffer(36008,null),I.bindFramebuffer(36009,null),$)for(let kA=0;kA<K.length;kA++){I.bindFramebuffer(36160,nA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(36160,36064+kA,36161,nA.__webglColorRenderbuffer[kA]);const NA=g.get(K[kA]).__webglTexture;I.bindFramebuffer(36160,nA.__webglFramebuffer),Q.framebufferTexture2D(36009,36064+kA,3553,NA,0)}I.bindFramebuffer(36009,nA.__webglMultisampledFramebuffer)}}function UI(J){return Math.min(a,J.samples)}function tI(J){const K=g.get(J);return i&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&K.__useRenderToTexture!==!1}function kg(J){const K=E.render.frame;r.get(J)!==K&&(r.set(J,K),J.update())}function ig(J,K){const V=J.encoding,EA=J.format,oA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||J.format===$i||V!==dC&&(V===EI?i===!1?A.has("EXT_sRGB")===!0&&EA===Jg?(J.format=$i,J.minFilter=og,J.generateMipmaps=!1):K=Pa.sRGBToLinear(K):(EA!==Jg||oA!==gB)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),K}this.allocateTextureUnit=v,this.resetTextureUnits=CA,this.setTexture2D=IA,this.setTexture2DArray=R,this.setTexture3D=P,this.setTextureCube=eA,this.rebindTextures=WI,this.setupRenderTarget=PA,this.updateRenderTargetMipmap=vI,this.updateMultisampleRenderTarget=Ag,this.setupDepthRenderbuffer=JA,this.setupFrameBufferTexture=wA,this.useMultisampledRTT=tI}function nG(Q,A,I){const g=I.isWebGL2;function C(B,E=null){let i;if(B===gB)return 5121;if(B===vD)return 32819;if(B===PD)return 32820;if(B===OD)return 5120;if(B===ZD)return 5122;if(B===Ta)return 5123;if(B===WD)return 5124;if(B===VC)return 5125;if(B===UC)return 5126;if(B===wQ)return g?5131:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(B===jD)return 6406;if(B===Jg)return 6408;if(B===_D)return 6409;if(B===XD)return 6410;if(B===zC)return 6402;if(B===pB)return 34041;if(B===VD)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(B===$i)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(B===zD)return 6403;if(B===$D)return 36244;if(B===An)return 33319;if(B===In)return 33320;if(B===gn)return 36249;if(B===ii||B===oi||B===ei||B===ti)if(E===EI)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(B===ii)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===oi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===ei)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===ti)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(B===ii)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===oi)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===ei)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===ti)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===ne||B===he||B===re||B===we)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(B===ne)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===he)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===re)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===we)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===Cn)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===ce||B===Ge)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(B===ce)return E===EI?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(B===Ge)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===Se||B===le||B===ke||B===ye||B===Me||B===Ke||B===Ue||B===Ne||B===Je||B===Fe||B===Re||B===qe||B===de||B===pe)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(B===Se)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===le)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===ke)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===ye)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===Me)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===Ke)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===Ue)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===Ne)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===Je)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===Fe)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===Re)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===qe)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===de)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===pe)return E===EI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===fe)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(B===fe)return E===EI?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return B===NB?g?34042:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class hG extends TI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}let NC=class extends II{constructor(){super(),this.isGroup=!0,this.type="Group"}};const rG={type:"move"};class ui{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new NC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new NC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new u,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new u),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new NC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new u,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new u),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const n of A.hand.values()){const h=I.getJointPose(n,g),w=this._getHandJoint(e,n);h!==null&&(w.matrix.fromArray(h.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.jointRadius=h.radius),w.visible=h!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),D=.02,r=.005;e.inputState.pinching&&s>D+r?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=D-r&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(rG)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=B!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new NC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class wG extends _I{constructor(A,I,g,C,B,E,i,o,e,t){if(t=t!==void 0?t:zC,t!==zC&&t!==pB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===zC&&(g=VC),g===void 0&&t===pB&&(g=NB),super(null,C,B,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:VI,this.minFilter=o!==void 0?o:VI,this.flipY=!1,this.generateMipmaps=!1}}class cG extends OB{constructor(A,I){super();const g=this;let C=null,B=1,E=null,i="local-floor",o=null,e=null,t=null,a=null,s=null,D=null;const r=I.getContextAttributes();let n=null,h=null;const w=[],G=[],S=new Set,l=new Map,y=new TI;y.layers.enable(1),y.viewport=new hI;const M=new TI;M.layers.enable(2),M.viewport=new hI;const p=[y,M],k=new hG;k.layers.enable(1),k.layers.enable(2);let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=w[R];return P===void 0&&(P=new ui,w[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=w[R];return P===void 0&&(P=new ui,w[R]=P),P.getGripSpace()},this.getHand=function(R){let P=w[R];return P===void 0&&(P=new ui,w[R]=P),P.getHandSpace()};function Y(R){const P=G.indexOf(R.inputSource);if(P===-1)return;const eA=w[P];eA!==void 0&&eA.dispatchEvent({type:R.type,data:R.inputSource})}function b(){C.removeEventListener("select",Y),C.removeEventListener("selectstart",Y),C.removeEventListener("selectend",Y),C.removeEventListener("squeeze",Y),C.removeEventListener("squeezestart",Y),C.removeEventListener("squeezeend",Y),C.removeEventListener("end",b),C.removeEventListener("inputsourceschange",d);for(let R=0;R<w.length;R++){const P=G[R];P!==null&&(G[R]=null,w[R].disconnect(P))}N=null,q=null,A.setRenderTarget(n),s=null,a=null,t=null,C=null,h=null,IA.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){B=R,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){i=R,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||E},this.setReferenceSpace=function(R){o=R},this.getBaseLayer=function(){return a!==null?a:s},this.getBinding=function(){return t},this.getFrame=function(){return D},this.getSession=function(){return C},this.setSession=async function(R){if(C=R,C!==null){if(n=A.getRenderTarget(),C.addEventListener("select",Y),C.addEventListener("selectstart",Y),C.addEventListener("selectend",Y),C.addEventListener("squeeze",Y),C.addEventListener("squeezestart",Y),C.addEventListener("squeezeend",Y),C.addEventListener("end",b),C.addEventListener("inputsourceschange",d),r.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const P={antialias:C.renderState.layers===void 0?r.antialias:!0,alpha:r.alpha,depth:r.depth,stencil:r.stencil,framebufferScaleFactor:B};s=new XRWebGLLayer(C,I,P),C.updateRenderState({baseLayer:s}),h=new pC(s.framebufferWidth,s.framebufferHeight,{format:Jg,type:gB,encoding:A.outputEncoding,stencilBuffer:r.stencil})}else{let P=null,eA=null,iA=null;r.depth&&(iA=r.stencil?35056:33190,P=r.stencil?pB:zC,eA=r.stencil?NB:VC);const tA={colorFormat:32856,depthFormat:iA,scaleFactor:B};t=new XRWebGLBinding(C,I),a=t.createProjectionLayer(tA),C.updateRenderState({layers:[a]}),h=new pC(a.textureWidth,a.textureHeight,{format:Jg,type:gB,depthTexture:new wG(a.textureWidth,a.textureHeight,eA,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:r.stencil,encoding:A.outputEncoding,samples:r.antialias?4:0});const X=A.properties.get(h);X.__ignoreDepthValues=a.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),o=null,E=await C.requestReferenceSpace(i),IA.setContext(C),IA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}};function d(R){for(let P=0;P<R.removed.length;P++){const eA=R.removed[P],iA=G.indexOf(eA);iA>=0&&(G[iA]=null,w[iA].disconnect(eA))}for(let P=0;P<R.added.length;P++){const eA=R.added[P];let iA=G.indexOf(eA);if(iA===-1){for(let X=0;X<w.length;X++)if(X>=G.length){G.push(eA),iA=X;break}else if(G[X]===null){G[X]=eA,iA=X;break}if(iA===-1)break}const tA=w[iA];tA&&tA.connect(eA)}}const m=new u,F=new u;function Z(R,P,eA){m.setFromMatrixPosition(P.matrixWorld),F.setFromMatrixPosition(eA.matrixWorld);const iA=m.distanceTo(F),tA=P.projectionMatrix.elements,X=eA.projectionMatrix.elements,sA=tA[14]/(tA[10]-1),cA=tA[14]/(tA[10]+1),UA=(tA[9]+1)/tA[5],wA=(tA[9]-1)/tA[5],eI=(tA[8]-1)/tA[0],LA=(X[8]+1)/X[0],JA=sA*eI,WI=sA*LA,PA=iA/(-eI+LA),vI=PA*-eI;P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(vI),R.translateZ(PA),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Ag=sA+PA,UI=cA+PA,tI=JA-vI,kg=WI+(iA-vI),ig=UA*cA/UI*Ag,J=wA*cA/UI*Ag;R.projectionMatrix.makePerspective(tI,kg,ig,J,Ag,UI)}function CA(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(C===null)return;k.near=M.near=y.near=R.near,k.far=M.far=y.far=R.far,(N!==k.near||q!==k.far)&&(C.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,q=k.far);const P=R.parent,eA=k.cameras;CA(k,P);for(let tA=0;tA<eA.length;tA++)CA(eA[tA],P);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),R.matrix.copy(k.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const iA=R.children;for(let tA=0,X=iA.length;tA<X;tA++)iA[tA].updateMatrixWorld(!0);eA.length===2?Z(k,y,M):k.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(a!==null)return a.fixedFoveation;if(s!==null)return s.fixedFoveation},this.setFoveation=function(R){a!==null&&(a.fixedFoveation=R),s!==null&&s.fixedFoveation!==void 0&&(s.fixedFoveation=R)},this.getPlanes=function(){return S};let v=null;function BA(R,P){if(e=P.getViewerPose(o||E),D=P,e!==null){const eA=e.views;s!==null&&(A.setRenderTargetFramebuffer(h,s.framebuffer),A.setRenderTarget(h));let iA=!1;eA.length!==k.cameras.length&&(k.cameras.length=0,iA=!0);for(let tA=0;tA<eA.length;tA++){const X=eA[tA];let sA=null;if(s!==null)sA=s.getViewport(X);else{const UA=t.getViewSubImage(a,X);sA=UA.viewport,tA===0&&(A.setRenderTargetTextures(h,UA.colorTexture,a.ignoreDepthValues?void 0:UA.depthStencilTexture),A.setRenderTarget(h))}let cA=p[tA];cA===void 0&&(cA=new TI,cA.layers.enable(tA),cA.viewport=new hI,p[tA]=cA),cA.matrix.fromArray(X.transform.matrix),cA.projectionMatrix.fromArray(X.projectionMatrix),cA.viewport.set(sA.x,sA.y,sA.width,sA.height),tA===0&&k.matrix.copy(cA.matrix),iA===!0&&k.cameras.push(cA)}}for(let eA=0;eA<w.length;eA++){const iA=G[eA],tA=w[eA];iA!==null&&tA!==void 0&&tA.update(iA,P,o||E)}if(v&&v(R,P),P.detectedPlanes){g.dispatchEvent({type:"planesdetected",data:P.detectedPlanes});let eA=null;for(const iA of S)P.detectedPlanes.has(iA)||(eA===null&&(eA=[]),eA.push(iA));if(eA!==null)for(const iA of eA)S.delete(iA),l.delete(iA),g.dispatchEvent({type:"planeremoved",data:iA});for(const iA of P.detectedPlanes)if(!S.has(iA))S.add(iA),l.set(iA,P.lastChangedTime),g.dispatchEvent({type:"planeadded",data:iA});else{const tA=l.get(iA);iA.lastChangedTime>tA&&(l.set(iA,iA.lastChangedTime),g.dispatchEvent({type:"planechanged",data:iA}))}}D=null}const IA=new gs;IA.setAnimationLoop(BA),this.setAnimationLoop=function(R){v=R},this.dispose=function(){}}}function GG(Q,A){function I(n,h){h.color.getRGB(n.fogColor.value,za(Q)),h.isFog?(n.fogNear.value=h.near,n.fogFar.value=h.far):h.isFogExp2&&(n.fogDensity.value=h.density)}function g(n,h,w,G,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?C(n,h):h.isMeshToonMaterial?(C(n,h),t(n,h)):h.isMeshPhongMaterial?(C(n,h),e(n,h)):h.isMeshStandardMaterial?(C(n,h),a(n,h),h.isMeshPhysicalMaterial&&s(n,h,S)):h.isMeshMatcapMaterial?(C(n,h),D(n,h)):h.isMeshDepthMaterial?C(n,h):h.isMeshDistanceMaterial?(C(n,h),r(n,h)):h.isMeshNormalMaterial?C(n,h):h.isLineBasicMaterial?(B(n,h),h.isLineDashedMaterial&&E(n,h)):h.isPointsMaterial?i(n,h,w,G):h.isSpriteMaterial?o(n,h):h.isShadowMaterial?(n.color.value.copy(h.color),n.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function C(n,h){n.opacity.value=h.opacity,h.color&&n.diffuse.value.copy(h.color),h.emissive&&n.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.bumpMap&&(n.bumpMap.value=h.bumpMap,n.bumpScale.value=h.bumpScale,h.side===Rg&&(n.bumpScale.value*=-1)),h.displacementMap&&(n.displacementMap.value=h.displacementMap,n.displacementScale.value=h.displacementScale,n.displacementBias.value=h.displacementBias),h.emissiveMap&&(n.emissiveMap.value=h.emissiveMap),h.normalMap&&(n.normalMap.value=h.normalMap,n.normalScale.value.copy(h.normalScale),h.side===Rg&&n.normalScale.value.negate()),h.specularMap&&(n.specularMap.value=h.specularMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);const w=A.get(h).envMap;if(w&&(n.envMap.value=w,n.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=h.reflectivity,n.ior.value=h.ior,n.refractionRatio.value=h.refractionRatio),h.lightMap){n.lightMap.value=h.lightMap;const l=Q.physicallyCorrectLights!==!0?Math.PI:1;n.lightMapIntensity.value=h.lightMapIntensity*l}h.aoMap&&(n.aoMap.value=h.aoMap,n.aoMapIntensity.value=h.aoMapIntensity);let G;h.map?G=h.map:h.specularMap?G=h.specularMap:h.displacementMap?G=h.displacementMap:h.normalMap?G=h.normalMap:h.bumpMap?G=h.bumpMap:h.roughnessMap?G=h.roughnessMap:h.metalnessMap?G=h.metalnessMap:h.alphaMap?G=h.alphaMap:h.emissiveMap?G=h.emissiveMap:h.clearcoatMap?G=h.clearcoatMap:h.clearcoatNormalMap?G=h.clearcoatNormalMap:h.clearcoatRoughnessMap?G=h.clearcoatRoughnessMap:h.iridescenceMap?G=h.iridescenceMap:h.iridescenceThicknessMap?G=h.iridescenceThicknessMap:h.specularIntensityMap?G=h.specularIntensityMap:h.specularColorMap?G=h.specularColorMap:h.transmissionMap?G=h.transmissionMap:h.thicknessMap?G=h.thicknessMap:h.sheenColorMap?G=h.sheenColorMap:h.sheenRoughnessMap&&(G=h.sheenRoughnessMap),G!==void 0&&(G.isWebGLRenderTarget&&(G=G.texture),G.matrixAutoUpdate===!0&&G.updateMatrix(),n.uvTransform.value.copy(G.matrix));let S;h.aoMap?S=h.aoMap:h.lightMap&&(S=h.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),n.uv2Transform.value.copy(S.matrix))}function B(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity}function E(n,h){n.dashSize.value=h.dashSize,n.totalSize.value=h.dashSize+h.gapSize,n.scale.value=h.scale}function i(n,h,w,G){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.size.value=h.size*w,n.scale.value=G*.5,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let S;h.map?S=h.map:h.alphaMap&&(S=h.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),n.uvTransform.value.copy(S.matrix))}function o(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.rotation.value=h.rotation,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),n.uvTransform.value.copy(w.matrix))}function e(n,h){n.specular.value.copy(h.specular),n.shininess.value=Math.max(h.shininess,1e-4)}function t(n,h){h.gradientMap&&(n.gradientMap.value=h.gradientMap)}function a(n,h){n.roughness.value=h.roughness,n.metalness.value=h.metalness,h.roughnessMap&&(n.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(n.metalnessMap.value=h.metalnessMap),A.get(h).envMap&&(n.envMapIntensity.value=h.envMapIntensity)}function s(n,h,w){n.ior.value=h.ior,h.sheen>0&&(n.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),n.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(n.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(n.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(n.clearcoat.value=h.clearcoat,n.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(n.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(n.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(n.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),n.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Rg&&n.clearcoatNormalScale.value.negate())),h.iridescence>0&&(n.iridescence.value=h.iridescence,n.iridescenceIOR.value=h.iridescenceIOR,n.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],n.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(n.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(n.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(n.transmission.value=h.transmission,n.transmissionSamplerMap.value=w.texture,n.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(n.transmissionMap.value=h.transmissionMap),n.thickness.value=h.thickness,h.thicknessMap&&(n.thicknessMap.value=h.thicknessMap),n.attenuationDistance.value=h.attenuationDistance,n.attenuationColor.value.copy(h.attenuationColor)),n.specularIntensity.value=h.specularIntensity,n.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(n.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(n.specularColorMap.value=h.specularColorMap)}function D(n,h){h.matcap&&(n.matcap.value=h.matcap)}function r(n,h){n.referencePosition.value.copy(h.referencePosition),n.nearDistance.value=h.nearDistance,n.farDistance.value=h.farDistance}return{refreshFogUniforms:I,refreshMaterialUniforms:g}}function SG(Q,A,I,g){let C={},B={},E=[];const i=I.isWebGL2?Q.getParameter(35375):0;function o(G,S){const l=S.program;g.uniformBlockBinding(G,l)}function e(G,S){let l=C[G.id];l===void 0&&(r(G),l=t(G),C[G.id]=l,G.addEventListener("dispose",h));const y=S.program;g.updateUBOMapping(G,y);const M=A.render.frame;B[G.id]!==M&&(s(G),B[G.id]=M)}function t(G){const S=a();G.__bindingPointIndex=S;const l=Q.createBuffer(),y=G.__size,M=G.usage;return Q.bindBuffer(35345,l),Q.bufferData(35345,y,M),Q.bindBuffer(35345,null),Q.bindBufferBase(35345,S,l),l}function a(){for(let G=0;G<i;G++)if(E.indexOf(G)===-1)return E.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(G){const S=C[G.id],l=G.uniforms,y=G.__cache;Q.bindBuffer(35345,S);for(let M=0,p=l.length;M<p;M++){const k=l[M];if(D(k,M,y)===!0){const N=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let b=0;b<q.length;b++){const d=q[b],m=n(d);typeof d=="number"?(k.__data[0]=d,Q.bufferSubData(35345,N+Y,k.__data)):d.isMatrix3?(k.__data[0]=d.elements[0],k.__data[1]=d.elements[1],k.__data[2]=d.elements[2],k.__data[3]=d.elements[0],k.__data[4]=d.elements[3],k.__data[5]=d.elements[4],k.__data[6]=d.elements[5],k.__data[7]=d.elements[0],k.__data[8]=d.elements[6],k.__data[9]=d.elements[7],k.__data[10]=d.elements[8],k.__data[11]=d.elements[0]):(d.toArray(k.__data,Y),Y+=m.storage/Float32Array.BYTES_PER_ELEMENT)}Q.bufferSubData(35345,N,k.__data)}}Q.bindBuffer(35345,null)}function D(G,S,l){const y=G.value;if(l[S]===void 0){if(typeof y=="number")l[S]=y;else{const M=Array.isArray(y)?y:[y],p=[];for(let k=0;k<M.length;k++)p.push(M[k].clone());l[S]=p}return!0}else if(typeof y=="number"){if(l[S]!==y)return l[S]=y,!0}else{const M=Array.isArray(l[S])?l[S]:[l[S]],p=Array.isArray(y)?y:[y];for(let k=0;k<M.length;k++){const N=M[k];if(N.equals(p[k])===!1)return N.copy(p[k]),!0}}return!1}function r(G){const S=G.uniforms;let l=0;const y=16;let M=0;for(let p=0,k=S.length;p<k;p++){const N=S[p],q={boundary:0,storage:0},Y=Array.isArray(N.value)?N.value:[N.value];for(let b=0,d=Y.length;b<d;b++){const m=Y[b],F=n(m);q.boundary+=F.boundary,q.storage+=F.storage}if(N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=l,p>0){M=l%y;const b=y-M;M!==0&&b-q.boundary<0&&(l+=y-M,N.__offset=l)}l+=q.storage}return M=l%y,M>0&&(l+=y-M),G.__size=l,G.__cache={},this}function n(G){const S={boundary:0,storage:0};return typeof G=="number"?(S.boundary=4,S.storage=4):G.isVector2?(S.boundary=8,S.storage=8):G.isVector3||G.isColor?(S.boundary=16,S.storage=12):G.isVector4?(S.boundary=16,S.storage=16):G.isMatrix3?(S.boundary=48,S.storage=48):G.isMatrix4?(S.boundary=64,S.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),S}function h(G){const S=G.target;S.removeEventListener("dispose",h);const l=E.indexOf(S.__bindingPointIndex);E.splice(l,1),Q.deleteBuffer(C[S.id]),delete C[S.id],delete B[S.id]}function w(){for(const G in C)Q.deleteBuffer(C[G]);E=[],C={},B={}}return{bind:o,update:e,dispose:w}}function lG(){const Q=lQ("canvas");return Q.style.display="block",Q}function is(Q={}){this.isWebGLRenderer=!0;const A=Q.canvas!==void 0?Q.canvas:lG(),I=Q.context!==void 0?Q.context:null,g=Q.depth!==void 0?Q.depth:!0,C=Q.stencil!==void 0?Q.stencil:!0,B=Q.antialias!==void 0?Q.antialias:!1,E=Q.premultipliedAlpha!==void 0?Q.premultipliedAlpha:!0,i=Q.preserveDrawingBuffer!==void 0?Q.preserveDrawingBuffer:!1,o=Q.powerPreference!==void 0?Q.powerPreference:"default",e=Q.failIfMajorPerformanceCaveat!==void 0?Q.failIfMajorPerformanceCaveat:!1;let t;I!==null?t=I.getContextAttributes().alpha:t=Q.alpha!==void 0?Q.alpha:!1;let a=null,s=null;const D=[],r=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=dC,this.physicallyCorrectLights=!1,this.toneMapping=Xg,this.toneMappingExposure=1;const n=this;let h=!1,w=0,G=0,S=null,l=-1,y=null;const M=new hI,p=new hI;let k=null,N=A.width,q=A.height,Y=1,b=null,d=null;const m=new hI(0,0,N,q),F=new hI(0,0,N,q);let Z=!1;const CA=new HE;let v=!1,BA=!1,IA=null;const R=new bA,P=new vA,eA=new u,iA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tA(){return S===null?Y:1}let X=I;function sA(U,W){for(let _=0;_<U.length;_++){const O=U[_],z=A.getContext(O,W);if(z!==null)return z}return null}try{const U={alpha:!0,depth:g,stencil:C,antialias:B,premultipliedAlpha:E,preserveDrawingBuffer:i,powerPreference:o,failIfMajorPerformanceCaveat:e};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${lo}`),A.addEventListener("webglcontextlost",hA,!1),A.addEventListener("webglcontextrestored",lA,!1),A.addEventListener("webglcontextcreationerror",jA,!1),X===null){const W=["webgl2","webgl","experimental-webgl"];if(n.isWebGL1Renderer===!0&&W.shift(),X=sA(W,U),X===null)throw sA(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let cA,UA,wA,eI,LA,JA,WI,PA,vI,Ag,UI,tI,kg,ig,J,K,V,EA,oA,DA,pA,nA,$,kA;function NA(){cA=new dw(X),UA=new Uw(X,cA,Q),cA.init(UA),nA=new nG(X,cA,UA),wA=new sG(X,cA,UA),eI=new Yw,LA=new zc,JA=new DG(X,cA,wA,LA,UA,nA,eI),WI=new Jw(n),PA=new qw(n),vI=new Zn(X,UA),$=new Mw(X,cA,vI,UA),Ag=new pw(X,vI,eI,$),UI=new mw(X,Ag,vI,eI),oA=new Hw(X,UA,JA),K=new Nw(LA),tI=new Xc(n,WI,PA,cA,UA,$,K),kg=new GG(n,LA),ig=new AG,J=new EG(cA,UA),EA=new yw(n,WI,PA,wA,UI,t,E),V=new aG(n,UI,UA),kA=new SG(X,eI,UA,wA),DA=new Kw(X,cA,eI,UA),pA=new fw(X,cA,eI,UA),eI.programs=tI.programs,n.capabilities=UA,n.extensions=cA,n.properties=LA,n.renderLists=ig,n.shadowMap=V,n.state=wA,n.info=eI}NA();const H=new cG(n,X);this.xr=H,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const U=cA.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=cA.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(N,q,!1))},this.getSize=function(U){return U.set(N,q)},this.setSize=function(U,W,_){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=U,q=W,A.width=Math.floor(U*Y),A.height=Math.floor(W*Y),_!==!1&&(A.style.width=U+"px",A.style.height=W+"px"),this.setViewport(0,0,U,W)},this.getDrawingBufferSize=function(U){return U.set(N*Y,q*Y).floor()},this.setDrawingBufferSize=function(U,W,_){N=U,q=W,Y=_,A.width=Math.floor(U*_),A.height=Math.floor(W*_),this.setViewport(0,0,U,W)},this.getCurrentViewport=function(U){return U.copy(M)},this.getViewport=function(U){return U.copy(m)},this.setViewport=function(U,W,_,O){U.isVector4?m.set(U.x,U.y,U.z,U.w):m.set(U,W,_,O),wA.viewport(M.copy(m).multiplyScalar(Y).floor())},this.getScissor=function(U){return U.copy(F)},this.setScissor=function(U,W,_,O){U.isVector4?F.set(U.x,U.y,U.z,U.w):F.set(U,W,_,O),wA.scissor(p.copy(F).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(U){wA.setScissorTest(Z=U)},this.setOpaqueSort=function(U){b=U},this.setTransparentSort=function(U){d=U},this.getClearColor=function(U){return U.copy(EA.getClearColor())},this.setClearColor=function(){EA.setClearColor.apply(EA,arguments)},this.getClearAlpha=function(){return EA.getClearAlpha()},this.setClearAlpha=function(){EA.setClearAlpha.apply(EA,arguments)},this.clear=function(U=!0,W=!0,_=!0){let O=0;U&&(O|=16384),W&&(O|=256),_&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",hA,!1),A.removeEventListener("webglcontextrestored",lA,!1),A.removeEventListener("webglcontextcreationerror",jA,!1),ig.dispose(),J.dispose(),LA.dispose(),WI.dispose(),PA.dispose(),UI.dispose(),$.dispose(),kA.dispose(),tI.dispose(),H.dispose(),H.removeEventListener("sessionstart",rA),H.removeEventListener("sessionend",GA),IA&&(IA.dispose(),IA=null),BI.stop()};function hA(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function lA(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const U=eI.autoReset,W=V.enabled,_=V.autoUpdate,O=V.needsUpdate,z=V.type;NA(),eI.autoReset=U,V.enabled=W,V.autoUpdate=_,V.needsUpdate=O,V.type=z}function jA(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function CI(U){const W=U.target;W.removeEventListener("dispose",CI),RI(W)}function RI(U){L(U),LA.remove(U)}function L(U){const W=LA.get(U).programs;W!==void 0&&(W.forEach(function(_){tI.releaseProgram(_)}),U.isShaderMaterial&&tI.releaseShaderCache(U))}this.renderBufferDirect=function(U,W,_,O,z,yA){W===null&&(W=iA);const YA=z.isMesh&&z.matrixWorld.determinant()<0,TA=iD(U,W,_,O,z);wA.setMaterial(O,YA);let xA=_.index,QI=1;O.wireframe===!0&&(xA=Ag.getWireframeAttribute(_),QI=2);const VA=_.drawRange,_A=_.attributes.position;let pI=VA.start*QI,sg=(VA.start+VA.count)*QI;yA!==null&&(pI=Math.max(pI,yA.start*QI),sg=Math.min(sg,(yA.start+yA.count)*QI)),xA!==null?(pI=Math.max(pI,0),sg=Math.min(sg,xA.count)):_A!=null&&(pI=Math.max(pI,0),sg=Math.min(sg,_A.count));const BC=sg-pI;if(BC<0||BC===1/0)return;$.setup(z,O,TA,_,xA);let mC,fI=DA;if(xA!==null&&(mC=vI.get(xA),fI=pA,fI.setIndex(mC)),z.isMesh)O.wireframe===!0?(wA.setLineWidth(O.wireframeLinewidth*tA()),fI.setMode(1)):fI.setMode(4);else if(z.isLine){let XA=O.linewidth;XA===void 0&&(XA=1),wA.setLineWidth(XA*tA()),z.isLineSegments?fI.setMode(1):z.isLineLoop?fI.setMode(2):fI.setMode(3)}else z.isPoints?fI.setMode(0):z.isSprite&&fI.setMode(4);if(z.isInstancedMesh)fI.renderInstances(pI,BC,z.count);else if(_.isInstancedBufferGeometry){const XA=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,Ii=Math.min(_.instanceCount,XA);fI.renderInstances(pI,BC,Ii)}else fI.render(pI,BC)},this.compile=function(U,W){function _(O,z,yA){O.transparent===!0&&O.side===HQ?(O.side=Rg,O.needsUpdate=!0,yg(O,z,yA),O.side=qC,O.needsUpdate=!0,yg(O,z,yA),O.side=HQ):yg(O,z,yA)}s=J.get(U),s.init(),r.push(s),U.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(s.pushLight(O),O.castShadow&&s.pushShadow(O))}),s.setupLights(n.physicallyCorrectLights),U.traverse(function(O){const z=O.material;if(z)if(Array.isArray(z))for(let yA=0;yA<z.length;yA++){const YA=z[yA];_(YA,U,O)}else _(z,U,O)}),r.pop(),s=null};let j=null;function QA(U){j&&j(U)}function rA(){BI.stop()}function GA(){BI.start()}const BI=new gs;BI.setAnimationLoop(QA),typeof self<"u"&&BI.setContext(self),this.setAnimationLoop=function(U){j=U,H.setAnimationLoop(U),U===null?BI.stop():BI.start()},H.addEventListener("sessionstart",rA),H.addEventListener("sessionend",GA),this.render=function(U,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(W),W=H.getCamera()),U.isScene===!0&&U.onBeforeRender(n,U,W,S),s=J.get(U,r.length),s.init(),r.push(s),R.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),CA.setFromProjectionMatrix(R),BA=this.localClippingEnabled,v=K.init(this.clippingPlanes,BA,W),a=ig.get(U,D.length),a.init(),D.push(a),dI(U,W,0,n.sortObjects),a.finish(),n.sortObjects===!0&&a.sort(b,d),v===!0&&K.beginShadows();const _=s.state.shadowsArray;if(V.render(_,U,W),v===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),EA.render(a,U),s.setupLights(n.physicallyCorrectLights),W.isArrayCamera){const O=W.cameras;for(let z=0,yA=O.length;z<yA;z++){const YA=O[z];zI(a,U,YA,YA.viewport)}}else zI(a,U,W);S!==null&&(JA.updateMultisampleRenderTarget(S),JA.updateRenderTargetMipmap(S)),U.isScene===!0&&U.onAfterRender(n,U,W),$.resetDefaultState(),l=-1,y=null,r.pop(),r.length>0?s=r[r.length-1]:s=null,D.pop(),D.length>0?a=D[D.length-1]:a=null};function dI(U,W,_,O){if(U.visible===!1)return;if(U.layers.test(W.layers)){if(U.isGroup)_=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(W);else if(U.isLight)s.pushLight(U),U.castShadow&&s.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||CA.intersectsSprite(U)){O&&eA.setFromMatrixPosition(U.matrixWorld).applyMatrix4(R);const YA=UI.update(U),TA=U.material;TA.visible&&a.push(U,YA,TA,_,eA.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(U.isSkinnedMesh&&U.skeleton.frame!==eI.render.frame&&(U.skeleton.update(),U.skeleton.frame=eI.render.frame),!U.frustumCulled||CA.intersectsObject(U))){O&&eA.setFromMatrixPosition(U.matrixWorld).applyMatrix4(R);const YA=UI.update(U),TA=U.material;if(Array.isArray(TA)){const xA=YA.groups;for(let QI=0,VA=xA.length;QI<VA;QI++){const _A=xA[QI],pI=TA[_A.materialIndex];pI&&pI.visible&&a.push(U,YA,pI,_,eA.z,_A)}}else TA.visible&&a.push(U,YA,TA,_,eA.z,null)}}const yA=U.children;for(let YA=0,TA=yA.length;YA<TA;YA++)dI(yA[YA],W,_,O)}function zI(U,W,_,O){const z=U.opaque,yA=U.transmissive,YA=U.transparent;s.setupLightsView(_),yA.length>0&&HC(z,W,_),O&&wA.viewport(M.copy(O)),z.length>0&&kI(z,W,_),yA.length>0&&kI(yA,W,_),YA.length>0&&kI(YA,W,_),wA.buffers.depth.setTest(!0),wA.buffers.depth.setMask(!0),wA.buffers.color.setMask(!0),wA.setPolygonOffset(!1)}function HC(U,W,_){const O=UA.isWebGL2;IA===null&&(IA=new pC(1,1,{generateMipmaps:!0,type:cA.has("EXT_color_buffer_half_float")?wQ:gB,minFilter:IB,samples:O&&B===!0?4:0})),n.getDrawingBufferSize(P),O?IA.setSize(P.x,P.y):IA.setSize(yE(P.x),yE(P.y));const z=n.getRenderTarget();n.setRenderTarget(IA),n.clear();const yA=n.toneMapping;n.toneMapping=Xg,kI(U,W,_),n.toneMapping=yA,JA.updateMultisampleRenderTarget(IA),JA.updateRenderTargetMipmap(IA),n.setRenderTarget(z)}function kI(U,W,_){const O=W.isScene===!0?W.overrideMaterial:null;for(let z=0,yA=U.length;z<yA;z++){const YA=U[z],TA=YA.object,xA=YA.geometry,QI=O===null?YA.material:O,VA=YA.group;TA.layers.test(_.layers)&&CC(TA,W,_,xA,QI,VA)}}function CC(U,W,_,O,z,yA){U.onBeforeRender(n,W,_,O,z,yA),U.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),z.onBeforeRender(n,W,_,O,U,yA),z.transparent===!0&&z.side===HQ?(z.side=Rg,z.needsUpdate=!0,n.renderBufferDirect(_,W,O,z,U,yA),z.side=qC,z.needsUpdate=!0,n.renderBufferDirect(_,W,O,z,U,yA),z.side=HQ):n.renderBufferDirect(_,W,O,z,U,yA),U.onAfterRender(n,W,_,O,z,yA)}function yg(U,W,_){W.isScene!==!0&&(W=iA);const O=LA.get(U),z=s.state.lights,yA=s.state.shadowsArray,YA=z.state.version,TA=tI.getParameters(U,z.state,yA,W,_),xA=tI.getProgramCacheKey(TA);let QI=O.programs;O.environment=U.isMeshStandardMaterial?W.environment:null,O.fog=W.fog,O.envMap=(U.isMeshStandardMaterial?PA:WI).get(U.envMap||O.environment),QI===void 0&&(U.addEventListener("dispose",CI),QI=new Map,O.programs=QI);let VA=QI.get(xA);if(VA!==void 0){if(O.currentProgram===VA&&O.lightsStateVersion===YA)return Be(U,TA),VA}else TA.uniforms=tI.getUniforms(U),U.onBuild(_,TA,n),U.onBeforeCompile(TA,n),VA=tI.acquireProgram(TA,xA),QI.set(xA,VA),O.uniforms=TA.uniforms;const _A=O.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(_A.clippingPlanes=K.uniform),Be(U,TA),O.needsLights=eD(U),O.lightsStateVersion=YA,O.needsLights&&(_A.ambientLightColor.value=z.state.ambient,_A.lightProbe.value=z.state.probe,_A.directionalLights.value=z.state.directional,_A.directionalLightShadows.value=z.state.directionalShadow,_A.spotLights.value=z.state.spot,_A.spotLightShadows.value=z.state.spotShadow,_A.rectAreaLights.value=z.state.rectArea,_A.ltc_1.value=z.state.rectAreaLTC1,_A.ltc_2.value=z.state.rectAreaLTC2,_A.pointLights.value=z.state.point,_A.pointLightShadows.value=z.state.pointShadow,_A.hemisphereLights.value=z.state.hemi,_A.directionalShadowMap.value=z.state.directionalShadowMap,_A.directionalShadowMatrix.value=z.state.directionalShadowMatrix,_A.spotShadowMap.value=z.state.spotShadowMap,_A.spotLightMatrix.value=z.state.spotLightMatrix,_A.spotLightMap.value=z.state.spotLightMap,_A.pointShadowMap.value=z.state.pointShadowMap,_A.pointShadowMatrix.value=z.state.pointShadowMatrix);const pI=VA.getUniforms(),sg=DE.seqWithValue(pI.seq,_A);return O.currentProgram=VA,O.uniformsList=sg,VA}function Be(U,W){const _=LA.get(U);_.outputEncoding=W.outputEncoding,_.instancing=W.instancing,_.skinning=W.skinning,_.morphTargets=W.morphTargets,_.morphNormals=W.morphNormals,_.morphColors=W.morphColors,_.morphTargetsCount=W.morphTargetsCount,_.numClippingPlanes=W.numClippingPlanes,_.numIntersection=W.numClipIntersection,_.vertexAlphas=W.vertexAlphas,_.vertexTangents=W.vertexTangents,_.toneMapping=W.toneMapping}function iD(U,W,_,O,z){W.isScene!==!0&&(W=iA),JA.resetTextureUnits();const yA=W.fog,YA=O.isMeshStandardMaterial?W.environment:null,TA=S===null?n.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:dC,xA=(O.isMeshStandardMaterial?PA:WI).get(O.envMap||YA),QI=O.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,VA=!!O.normalMap&&!!_.attributes.tangent,_A=!!_.morphAttributes.position,pI=!!_.morphAttributes.normal,sg=!!_.morphAttributes.color,BC=O.toneMapped?n.toneMapping:Xg,mC=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,fI=mC!==void 0?mC.length:0,XA=LA.get(O),Ii=s.state.lights;if(v===!0&&(BA===!0||U!==y)){const Dg=U===y&&O.id===l;K.setState(O,U,Dg)}let PI=!1;O.version===XA.__version?(XA.needsLights&&XA.lightsStateVersion!==Ii.state.version||XA.outputEncoding!==TA||z.isInstancedMesh&&XA.instancing===!1||!z.isInstancedMesh&&XA.instancing===!0||z.isSkinnedMesh&&XA.skinning===!1||!z.isSkinnedMesh&&XA.skinning===!0||XA.envMap!==xA||O.fog===!0&&XA.fog!==yA||XA.numClippingPlanes!==void 0&&(XA.numClippingPlanes!==K.numPlanes||XA.numIntersection!==K.numIntersection)||XA.vertexAlphas!==QI||XA.vertexTangents!==VA||XA.morphTargets!==_A||XA.morphNormals!==pI||XA.morphColors!==sg||XA.toneMapping!==BC||UA.isWebGL2===!0&&XA.morphTargetsCount!==fI)&&(PI=!0):(PI=!0,XA.__version=O.version);let bC=XA.currentProgram;PI===!0&&(bC=yg(O,W,z));let Qe=!1,$B=!1,gi=!1;const Ig=bC.getUniforms(),TC=XA.uniforms;if(wA.useProgram(bC.program)&&(Qe=!0,$B=!0,gi=!0),O.id!==l&&(l=O.id,$B=!0),Qe||y!==U){if(Ig.setValue(X,"projectionMatrix",U.projectionMatrix),UA.logarithmicDepthBuffer&&Ig.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),y!==U&&(y=U,$B=!0,gi=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Dg=Ig.map.cameraPosition;Dg!==void 0&&Dg.setValue(X,eA.setFromMatrixPosition(U.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ig.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||z.isSkinnedMesh)&&Ig.setValue(X,"viewMatrix",U.matrixWorldInverse)}if(z.isSkinnedMesh){Ig.setOptional(X,z,"bindMatrix"),Ig.setOptional(X,z,"bindMatrixInverse");const Dg=z.skeleton;Dg&&(UA.floatVertexTextures?(Dg.boneTexture===null&&Dg.computeBoneTexture(),Ig.setValue(X,"boneTexture",Dg.boneTexture,JA),Ig.setValue(X,"boneTextureSize",Dg.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ci=_.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0&&UA.isWebGL2===!0)&&oA.update(z,_,O,bC),($B||XA.receiveShadow!==z.receiveShadow)&&(XA.receiveShadow=z.receiveShadow,Ig.setValue(X,"receiveShadow",z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(TC.envMap.value=xA,TC.flipEnvMap.value=xA.isCubeTexture&&xA.isRenderTargetTexture===!1?-1:1),$B&&(Ig.setValue(X,"toneMappingExposure",n.toneMappingExposure),XA.needsLights&&oD(TC,gi),yA&&O.fog===!0&&kg.refreshFogUniforms(TC,yA),kg.refreshMaterialUniforms(TC,O,Y,q,IA),DE.upload(X,XA.uniformsList,TC,JA)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(DE.upload(X,XA.uniformsList,TC,JA),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ig.setValue(X,"center",z.center),Ig.setValue(X,"modelViewMatrix",z.modelViewMatrix),Ig.setValue(X,"normalMatrix",z.normalMatrix),Ig.setValue(X,"modelMatrix",z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Dg=O.uniformsGroups;for(let Bi=0,tD=Dg.length;Bi<tD;Bi++)if(UA.isWebGL2){const Ee=Dg[Bi];kA.update(Ee,bC),kA.bind(Ee,bC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bC}function oD(U,W){U.ambientLightColor.needsUpdate=W,U.lightProbe.needsUpdate=W,U.directionalLights.needsUpdate=W,U.directionalLightShadows.needsUpdate=W,U.pointLights.needsUpdate=W,U.pointLightShadows.needsUpdate=W,U.spotLights.needsUpdate=W,U.spotLightShadows.needsUpdate=W,U.rectAreaLights.needsUpdate=W,U.hemisphereLights.needsUpdate=W}function eD(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(U,W,_){LA.get(U.texture).__webglTexture=W,LA.get(U.depthTexture).__webglTexture=_;const O=LA.get(U);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=_===void 0,O.__autoAllocateDepthBuffer||cA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,W){const _=LA.get(U);_.__webglFramebuffer=W,_.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(U,W=0,_=0){S=U,w=W,G=_;let O=!0,z=null,yA=!1,YA=!1;if(U){const xA=LA.get(U);xA.__useDefaultFramebuffer!==void 0?(wA.bindFramebuffer(36160,null),O=!1):xA.__webglFramebuffer===void 0?JA.setupRenderTarget(U):xA.__hasExternalTextures&&JA.rebindTextures(U,LA.get(U.texture).__webglTexture,LA.get(U.depthTexture).__webglTexture);const QI=U.texture;(QI.isData3DTexture||QI.isDataArrayTexture||QI.isCompressedArrayTexture)&&(YA=!0);const VA=LA.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(z=VA[W],yA=!0):UA.isWebGL2&&U.samples>0&&JA.useMultisampledRTT(U)===!1?z=LA.get(U).__webglMultisampledFramebuffer:z=VA,M.copy(U.viewport),p.copy(U.scissor),k=U.scissorTest}else M.copy(m).multiplyScalar(Y).floor(),p.copy(F).multiplyScalar(Y).floor(),k=Z;if(wA.bindFramebuffer(36160,z)&&UA.drawBuffers&&O&&wA.drawBuffers(U,z),wA.viewport(M),wA.scissor(p),wA.setScissorTest(k),yA){const xA=LA.get(U.texture);X.framebufferTexture2D(36160,36064,34069+W,xA.__webglTexture,_)}else if(YA){const xA=LA.get(U.texture),QI=W||0;X.framebufferTextureLayer(36160,36064,xA.__webglTexture,_||0,QI)}l=-1},this.readRenderTargetPixels=function(U,W,_,O,z,yA,YA){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let TA=LA.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&YA!==void 0&&(TA=TA[YA]),TA){wA.bindFramebuffer(36160,TA);try{const xA=U.texture,QI=xA.format,VA=xA.type;if(QI!==Jg&&nA.convert(QI)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _A=VA===wQ&&(cA.has("EXT_color_buffer_half_float")||UA.isWebGL2&&cA.has("EXT_color_buffer_float"));if(VA!==gB&&nA.convert(VA)!==X.getParameter(35738)&&!(VA===UC&&(UA.isWebGL2||cA.has("OES_texture_float")||cA.has("WEBGL_color_buffer_float")))&&!_A){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=U.width-O&&_>=0&&_<=U.height-z&&X.readPixels(W,_,O,z,nA.convert(QI),nA.convert(VA),yA)}finally{const xA=S!==null?LA.get(S).__webglFramebuffer:null;wA.bindFramebuffer(36160,xA)}}},this.copyFramebufferToTexture=function(U,W,_=0){const O=Math.pow(2,-_),z=Math.floor(W.image.width*O),yA=Math.floor(W.image.height*O);JA.setTexture2D(W,0),X.copyTexSubImage2D(3553,_,0,0,U.x,U.y,z,yA),wA.unbindTexture()},this.copyTextureToTexture=function(U,W,_,O=0){const z=W.image.width,yA=W.image.height,YA=nA.convert(_.format),TA=nA.convert(_.type);JA.setTexture2D(_,0),X.pixelStorei(37440,_.flipY),X.pixelStorei(37441,_.premultiplyAlpha),X.pixelStorei(3317,_.unpackAlignment),W.isDataTexture?X.texSubImage2D(3553,O,U.x,U.y,z,yA,YA,TA,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(3553,O,U.x,U.y,W.mipmaps[0].width,W.mipmaps[0].height,YA,W.mipmaps[0].data):X.texSubImage2D(3553,O,U.x,U.y,YA,TA,W.image),O===0&&_.generateMipmaps&&X.generateMipmap(3553),wA.unbindTexture()},this.copyTextureToTexture3D=function(U,W,_,O,z=0){if(n.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yA=U.max.x-U.min.x+1,YA=U.max.y-U.min.y+1,TA=U.max.z-U.min.z+1,xA=nA.convert(O.format),QI=nA.convert(O.type);let VA;if(O.isData3DTexture)JA.setTexture3D(O,0),VA=32879;else if(O.isDataArrayTexture)JA.setTexture2DArray(O,0),VA=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const _A=X.getParameter(3314),pI=X.getParameter(32878),sg=X.getParameter(3316),BC=X.getParameter(3315),mC=X.getParameter(32877),fI=_.isCompressedTexture?_.mipmaps[0]:_.image;X.pixelStorei(3314,fI.width),X.pixelStorei(32878,fI.height),X.pixelStorei(3316,U.min.x),X.pixelStorei(3315,U.min.y),X.pixelStorei(32877,U.min.z),_.isDataTexture||_.isData3DTexture?X.texSubImage3D(VA,z,W.x,W.y,W.z,yA,YA,TA,xA,QI,fI.data):_.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(VA,z,W.x,W.y,W.z,yA,YA,TA,xA,fI.data)):X.texSubImage3D(VA,z,W.x,W.y,W.z,yA,YA,TA,xA,QI,fI),X.pixelStorei(3314,_A),X.pixelStorei(32878,pI),X.pixelStorei(3316,sg),X.pixelStorei(3315,BC),X.pixelStorei(32877,mC),z===0&&O.generateMipmaps&&X.generateMipmap(VA),wA.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?JA.setTextureCube(U,0):U.isData3DTexture?JA.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?JA.setTexture2DArray(U,0):JA.setTexture2D(U,0),wA.unbindTexture()},this.resetState=function(){w=0,G=0,S=null,wA.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class kG extends is{}kG.prototype.isWebGL1Renderer=!0;let yG=class extends II{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}};class MG{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=zi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,B=this.stride;C<B;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cg=new u;class Uo{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)Cg.fromBufferAttribute(this,I),Cg.applyMatrix4(A),this.setXYZ(I,Cg.x,Cg.y,Cg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Cg.fromBufferAttribute(this,I),Cg.applyNormalMatrix(A),this.setXYZ(I,Cg.x,Cg.y,Cg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Cg.fromBufferAttribute(this,I),Cg.transformDirection(A),this.setXYZ(I,Cg.x,Cg.y,Cg.z);return this}setX(A,I){return this.normalized&&(I=nI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=nI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=nI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=nI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=DC(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=DC(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=DC(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=DC(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array),C=nI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A=A*this.data.stride+this.offset,this.normalized&&(I=nI(I,this.array),g=nI(g,this.array),C=nI(C,this.array),B=nI(B,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=B,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return new qI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new Uo(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ct=new u,Gt=new hI,St=new hI,KG=new u,lt=new bA;class UG extends eg{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new bA,this.bindMatrixInverse=new bA}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,this}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new hI,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const B=1/A.manhattanLength();B!==1/0?A.multiplyScalar(B):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(A,I){const g=this.skeleton,C=this.geometry;Gt.fromBufferAttribute(C.attributes.skinIndex,A),St.fromBufferAttribute(C.attributes.skinWeight,A),ct.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let B=0;B<4;B++){const E=St.getComponent(B);if(E!==0){const i=Gt.getComponent(B);lt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(KG.copy(ct).applyMatrix4(lt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}}class os extends II{constructor(){super(),this.isBone=!0,this.type="Bone"}}class NG extends _I{constructor(A=null,I=1,g=1,C,B,E,i,o,e=VI,t=VI,a,s){super(null,E,i,o,e,t,C,B,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kt=new bA,JG=new bA;class No{constructor(A=[],I=[]){this.uuid=bg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new bA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new bA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let B=0,E=A.length;B<E;B++){const i=A[B]?A[B].matrixWorld:JG;kt.multiplyMatrices(i,I[B]),kt.toArray(g,B*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Za(A),A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new NG(I,A,A,Jg,UC);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this.boneTextureSize=A,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const B=A.bones[g];let E=I[B];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",B),E=new os),this.bones.push(E),this.boneInverses.push(new bA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,B=I.length;C<B;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class yt extends qI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const Mt=new bA,Kt=new bA,CE=[],FG=new bA,iQ=new eg;class RG extends eg{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new yt(new Float32Array(g*16),16),this.instanceColor=null,this.count=g,this.frustumCulled=!1;for(let C=0;C<g;C++)this.setMatrixAt(C,FG)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}raycast(A,I){const g=this.matrixWorld,C=this.count;if(iQ.geometry=this.geometry,iQ.material=this.material,iQ.material!==void 0)for(let B=0;B<C;B++){this.getMatrixAt(B,Mt),Kt.multiplyMatrices(g,Mt),iQ.matrixWorld=Kt,iQ.raycast(A,CE);for(let E=0,i=CE.length;E<i;E++){const o=CE[E];o.instanceId=B,o.object=this,I.push(o)}CE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new yt(new Float32Array(this.instanceMatrix.count*3),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Jo extends zg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new uA(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const Ut=new u,Nt=new u,Jt=new bA,Li=new LE,BE=new WB;class Fo extends II{constructor(A=new lg,I=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,B=I.count;C<B;C++)Ut.fromBufferAttribute(I,C-1),Nt.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=Ut.distanceTo(Nt);A.setAttribute("lineDistance",new Tg(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),BE.copy(g.boundingSphere),BE.applyMatrix4(C),BE.radius+=B,A.ray.intersectsSphere(BE)===!1)return;Jt.copy(C).invert(),Li.copy(A.ray).applyMatrix4(Jt);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=new u,t=new u,a=new u,s=new u,D=this.isLineSegments?2:1,r=g.index,h=g.attributes.position;if(r!==null){const w=Math.max(0,E.start),G=Math.min(r.count,E.start+E.count);for(let S=w,l=G-1;S<l;S+=D){const y=r.getX(S),M=r.getX(S+1);if(e.fromBufferAttribute(h,y),t.fromBufferAttribute(h,M),Li.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const k=A.ray.origin.distanceTo(s);k<A.near||k>A.far||I.push({distance:k,point:a.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const w=Math.max(0,E.start),G=Math.min(h.count,E.start+E.count);for(let S=w,l=G-1;S<l;S+=D){if(e.fromBufferAttribute(h,S),t.fromBufferAttribute(h,S+1),Li.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const M=A.ray.origin.distanceTo(s);M<A.near||M>A.far||I.push({distance:M,point:a.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}const Ft=new u,Rt=new u;let es=class extends Fo{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,B=I.count;C<B;C+=2)Ft.fromBufferAttribute(I,C),Rt.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+Ft.distanceTo(Rt);A.setAttribute("lineDistance",new Tg(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};class qG extends Fo{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class ts extends zg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new uA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const qt=new bA,go=new LE,QE=new WB,EE=new u;class dG extends II{constructor(A=new lg,I=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),QE.copy(g.boundingSphere),QE.applyMatrix4(C),QE.radius+=B,A.ray.intersectsSphere(QE)===!1)return;qt.copy(C).invert(),go.copy(A.ray).applyMatrix4(qt);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,a=g.attributes.position;if(e!==null){const s=Math.max(0,E.start),D=Math.min(e.count,E.start+E.count);for(let r=s,n=D;r<n;r++){const h=e.getX(r);EE.fromBufferAttribute(a,h),dt(EE,h,o,C,A,I,this)}}else{const s=Math.max(0,E.start),D=Math.min(a.count,E.start+E.count);for(let r=s,n=D;r<n;r++)EE.fromBufferAttribute(a,r),dt(EE,r,o,C,A,I,this)}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}function dt(Q,A,I,g,C,B,E){const i=go.distanceSqToPoint(Q);if(i<I){const o=new u;go.closestPointToPoint(Q,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;B.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,object:E})}}class pG extends _I{constructor(A,I,g,C,B,E,i,o,e,t,a,s){super(null,E,i,o,e,t,C,B,a,s),this.isCompressedTexture=!0,this.image={width:I,height:g},this.mipmaps=A,this.flipY=!1,this.generateMipmaps=!1}}class IM extends pG{constructor(A,I,g,C,B,E){super(A,I,g,B,E),this.isCompressedArrayTexture=!0,this.image.depth=C,this.wrapR=wg}}class bE extends zg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new uA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new uA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new vA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class iB extends bE{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Eg(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new uA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new uA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new uA(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(A)}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function SC(Q,A,I){return as(Q)?new Q.constructor(Q.subarray(A,I!==void 0?I:Q.length)):Q.slice(A,I)}function iE(Q,A,I){return!Q||!I&&Q.constructor===A?Q:typeof A.BYTES_PER_ELEMENT=="number"?new A(Q):Array.prototype.slice.call(Q)}function as(Q){return ArrayBuffer.isView(Q)&&!(Q instanceof DataView)}function fG(Q){function A(C,B){return Q[C]-Q[B]}const I=Q.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function pt(Q,A,I){const g=Q.length,C=new Q.constructor(g);for(let B=0,E=0;E!==g;++B){const i=I[B]*A;for(let o=0;o!==A;++o)C[E++]=Q[i+o]}return C}function ss(Q,A,I,g){let C=1,B=Q[0];for(;B!==void 0&&B[g]===void 0;)B=Q[C++];if(B===void 0)return;let E=B[g];if(E!==void 0)if(Array.isArray(E))do E=B[g],E!==void 0&&(A.push(B.time),I.push.apply(I,E)),B=Q[C++];while(B!==void 0);else if(E.toArray!==void 0)do E=B[g],E!==void 0&&(A.push(B.time),E.toArray(I,I.length)),B=Q[C++];while(B!==void 0);else do E=B[g],E!==void 0&&(A.push(B.time),I.push(E)),B=Q[C++];while(B!==void 0)}class dQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],B=I[g-1];A:{I:{let E;g:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<B)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(B=C,C=I[++g],A<C)break I}E=I.length;break g}if(!(A>=B)){const i=I[1];A<i&&(g=2,B=i);for(let o=g-2;;){if(B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=B,B=I[--g-1],A>=B)break I}E=g,g=0;break g}break A}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],B=I[g-1],B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,B,C)}return this.interpolate_(g,B,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C;for(let E=0;E!==C;++E)I[E]=g[B+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class YG extends dQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ye,endingEnd:Ye}}intervalChanged_(A,I,g){const C=this.parameterPositions;let B=A-2,E=A+1,i=C[B],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case ue:B=A,i=2*I-g;break;case Le:B=C.length-2,i=I+C[B]-C[B+1];break;default:B=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case ue:E=A,o=2*g-I;break;case Le:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=B*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,D=this._weightNext,r=(g-I)/(C-I),n=r*r,h=n*r,w=-s*h+2*s*n-s*r,G=(1+s)*h+(-1.5-2*s)*n+(-.5+s)*r+1,S=(-1-D)*h+(1.5+D)*n+.5*r,l=D*h-D*n;for(let y=0;y!==i;++y)B[y]=w*E[t+y]+G*E[e+y]+S*E[o+y]+l*E[a+y];return B}}class uG extends dQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let s=0;s!==i;++s)B[s]=E[e+s]*a+E[o+s]*t;return B}}class LG extends dQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class gC{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=iE(I,this.TimeBufferType),this.values=iE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:iE(A.times,Array),values:iE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new LG(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new uG(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new YG(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case cQ:I=this.InterpolantFactoryMethodDiscrete;break;case fB:I=this.InterpolantFactoryMethodLinear;break;case ai:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cQ;case this.InterpolantFactoryMethodLinear:return fB;case this.InterpolantFactoryMethodSmooth:return ai}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let B=0,E=C-1;for(;B!==C&&g[B]<A;)++B;for(;E!==-1&&g[E]>I;)--E;if(++E,B!==0||E!==C){B>=E&&(E=Math.max(E,1),B=E-1);const i=this.getValueSize();this.times=SC(g,B,E),this.values=SC(this.values,B*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,B=g.length;B===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==B;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&as(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=SC(this.times),I=SC(this.values),g=this.getValueSize(),C=this.getInterpolation()===ai,B=A.length-1;let E=1;for(let i=1;i<B;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,D=a+g;for(let r=0;r!==g;++r){const n=I[a+r];if(n!==I[s+r]||n!==I[D+r]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let D=0;D!==g;++D)I[s+D]=I[a+D]}++E}}if(B>0){A[E]=A[B];for(let i=B*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=SC(A,0,E),this.values=SC(I,0,E*g)):(this.times=A,this.values=I),this}clone(){const A=SC(this.times,0),I=SC(this.values,0),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}gC.prototype.TimeBufferType=Float32Array;gC.prototype.ValueBufferType=Float32Array;gC.prototype.DefaultInterpolation=fB;class jB extends gC{}jB.prototype.ValueTypeName="bool";jB.prototype.ValueBufferType=Array;jB.prototype.DefaultInterpolation=cQ;jB.prototype.InterpolantFactoryMethodLinear=void 0;jB.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends gC{}Ds.prototype.ValueTypeName="color";class kQ extends gC{}kQ.prototype.ValueTypeName="number";class HG extends dQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)Sg.slerpFlat(B,0,E,e-i,E,e,o);return B}}class CB extends gC{InterpolantFactoryMethodLinear(A){return new HG(this.times,this.values,this.getValueSize(),A)}}CB.prototype.ValueTypeName="quaternion";CB.prototype.DefaultInterpolation=fB;CB.prototype.InterpolantFactoryMethodSmooth=void 0;class VB extends gC{}VB.prototype.ValueTypeName="string";VB.prototype.ValueBufferType=Array;VB.prototype.DefaultInterpolation=cQ;VB.prototype.InterpolantFactoryMethodLinear=void 0;VB.prototype.InterpolantFactoryMethodSmooth=void 0;class yQ extends gC{}yQ.prototype.ValueTypeName="vector";class mG{constructor(A,I=-1,g,C=Bn){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=bg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(TG(g[E]).scale(C));const B=new this(A.name,A.duration,I,A.blendMode);return B.uuid=A.uuid,B}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let B=0,E=g.length;B!==E;++B)I.push(gC.toJSON(g[B]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const B=I.length,E=[];for(let i=0;i<B;i++){let o=[],e=[];o.push((i+B-1)%B,i,(i+1)%B),e.push(0,1,0);const t=fG(o);o=pt(o,1,t),e=pt(e,1,t),!C&&o[0]===0&&(o.push(B),e.push(e[0])),E.push(new kQ(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},B=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(B);if(t&&t.length>1){const a=t[1];let s=C[a];s||(C[a]=s=[]),s.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(a,s,D,r,n){if(D.length!==0){const h=[],w=[];ss(D,h,w,r),h.length!==0&&n.push(new a(s,h,w))}},C=[],B=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let a=0;a<e.length;a++){const s=e[a].keys;if(!(!s||s.length===0))if(s[0].morphTargets){const D={};let r;for(r=0;r<s.length;r++)if(s[r].morphTargets)for(let n=0;n<s[r].morphTargets.length;n++)D[s[r].morphTargets[n]]=-1;for(const n in D){const h=[],w=[];for(let G=0;G!==s[r].morphTargets.length;++G){const S=s[r];h.push(S.time),w.push(S.morphTarget===n?1:0)}C.push(new kQ(".morphTargetInfluence["+n+"]",h,w))}o=D.length*E}else{const D=".bones["+I[a].name+"]";g(yQ,D+".position",s,"pos",C),g(CB,D+".quaternion",s,"rot",C),g(yQ,D+".scale",s,"scl",C)}}return C.length===0?null:new this(B,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const B=this.tracks[g];I=Math.max(I,B.times[B.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bG(Q){switch(Q.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kQ;case"vector":case"vector2":case"vector3":case"vector4":return yQ;case"color":return Ds;case"quaternion":return CB;case"bool":case"boolean":return jB;case"string":return VB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+Q)}function TG(Q){if(Q.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=bG(Q.type);if(Q.times===void 0){const I=[],g=[];ss(Q.keys,I,g,"value"),Q.times=I,Q.values=g}return A.parse!==void 0?A.parse(Q):new A(Q.name,Q.times,Q.values,Q.interpolation)}const uB={enabled:!1,files:{},add:function(Q,A){this.enabled!==!1&&(this.files[Q]=A)},get:function(Q){if(this.enabled!==!1)return this.files[Q]},remove:function(Q){delete this.files[Q]},clear:function(){this.files={}}};class xG{constructor(A,I,g){const C=this;let B=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,B===!1&&C.onStart!==void 0&&C.onStart(t,E,i),B=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(B=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,s=e.length;a<s;a+=2){const D=e[a],r=e[a+1];if(D.global&&(D.lastIndex=0),D.test(t))return r}return null}}}const ME=new xG;class _B{constructor(A){this.manager=A!==void 0?A:ME,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,B){g.load(A,C,I,B)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const tC={};class OG extends Error{constructor(A,I){super(A),this.response=I}}class KE extends _B{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=uB.get(A);if(B!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(B),this.manager.itemEnd(A)},0),B;if(tC[A]!==void 0){tC[A].push({onLoad:I,onProgress:g,onError:C});return}tC[A]=[],tC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=tC[A],a=e.body.getReader(),s=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),D=s?parseInt(s):0,r=D!==0;let n=0;const h=new ReadableStream({start(w){G();function G(){a.read().then(({done:S,value:l})=>{if(S)w.close();else{n+=l.byteLength;const y=new ProgressEvent("progress",{lengthComputable:r,loaded:n,total:D});for(let M=0,p=t.length;M<p;M++){const k=t[M];k.onProgress&&k.onProgress(y)}w.enqueue(l),G()}})}}});return new Response(h)}else throw new OG(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const a=/charset="?([^;"\s]*)"?/i.exec(i),s=a&&a[1]?a[1].toLowerCase():void 0,D=new TextDecoder(s);return e.arrayBuffer().then(r=>D.decode(r))}}}).then(e=>{uB.add(A,e);const t=tC[A];delete tC[A];for(let a=0,s=t.length;a<s;a++){const D=t[a];D.onLoad&&D.onLoad(e)}}).catch(e=>{const t=tC[A];if(t===void 0)throw this.manager.itemError(A),e;delete tC[A];for(let a=0,s=t.length;a<s;a++){const D=t[a];D.onError&&D.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class ZG extends _B{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=uB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i=lQ("img");function o(){t(),uB.add(A,this),I&&I(this),B.manager.itemEnd(A)}function e(a){t(),C&&C(a),B.manager.itemError(A),B.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),B.manager.itemStart(A),i.src=A,i}}class Co extends _B{constructor(A){super(A)}load(A,I,g,C){const B=new _I,E=new ZG(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){B.image=i,B.needsUpdate=!0,I!==void 0&&I(B)},g,C),B}}class Ro extends II{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new uA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const Hi=new bA,ft=new u,Yt=new u;class qo{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vA(512,512),this.map=null,this.mapPass=null,this.matrix=new bA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new HE,this._frameExtents=new vA(1,1),this._viewportCount=1,this._viewports=[new hI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;ft.setFromMatrixPosition(A.matrixWorld),I.position.copy(ft),Yt.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Yt),I.updateMatrixWorld(),Hi.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hi),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(Hi)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class WG extends qo{constructor(){super(new TI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=SQ*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,B=A.distance||I.far;(g!==I.fov||C!==I.aspect||B!==I.far)&&(I.fov=g,I.aspect=C,I.far=B,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class vG extends Ro{constructor(A,I,g=0,C=Math.PI/3,B=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(II.DefaultUp),this.updateMatrix(),this.target=new II,this.distance=g,this.angle=C,this.penumbra=B,this.decay=E,this.map=null,this.shadow=new WG}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const ut=new bA,oQ=new u,mi=new u;class PG extends qo{constructor(){super(new TI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vA(4,2),this._viewportCount=6,this._viewports=[new hI(2,1,1,1),new hI(0,1,1,1),new hI(3,1,1,1),new hI(1,1,1,1),new hI(3,0,1,1),new hI(1,0,1,1)],this._cubeDirections=[new u(1,0,0),new u(-1,0,0),new u(0,0,1),new u(0,0,-1),new u(0,1,0),new u(0,-1,0)],this._cubeUps=[new u(0,1,0),new u(0,1,0),new u(0,1,0),new u(0,1,0),new u(0,0,1),new u(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,B=A.distance||g.far;B!==g.far&&(g.far=B,g.updateProjectionMatrix()),oQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(oQ),mi.copy(g.position),mi.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(mi),g.updateMatrixWorld(),C.makeTranslation(-oQ.x,-oQ.y,-oQ.z),ut.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ut)}}class jG extends Ro{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new PG}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class VG extends qo{constructor(){super(new EB(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let ns=class extends Ro{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(II.DefaultUp),this.updateMatrix(),this.target=new II,this.shadow=new VG}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}};class AB{static decodeText(A){if(typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class _G extends _B{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=uB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(A,i).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(B.options,{colorSpaceConversion:"none"}))}).then(function(o){uB.add(A,o),I&&I(o),B.manager.itemEnd(A)}).catch(function(o){C&&C(o),B.manager.itemError(A),B.manager.itemEnd(A)}),B.manager.itemStart(A)}}class hs{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lt(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Lt();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Lt(){return(typeof performance>"u"?Date:performance).now()}const po="\\[\\]\\.:\\/",XG=new RegExp("["+po+"]","g"),fo="[^"+po+"]",zG="[^"+po.replace("\\.","")+"]",$G=/((?:WC+[\/:])*)/.source.replace("WC",fo),AS=/(WCOD+)?/.source.replace("WCOD",zG),IS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),gS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),CS=new RegExp("^"+$G+AS+IS+gS+"$"),BS=["material","materials","bones","map"];class QS{constructor(A,I,g){const C=g||sI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,B=g.length;C!==B;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class sI{constructor(A,I,g){this.path=I,this.parsedPath=g||sI.parseTrackName(I),this.node=sI.findNode(A,this.parsedPath.nodeName)||A,this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new sI.Composite(A,I,g):new sI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(XG,"")}static parseTrackName(A){const I=CS.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const B=g.nodeName.substring(C+1);BS.indexOf(B)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=B)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(B){for(let E=0;E<B.length;E++){const i=B[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let B=I.propertyIndex;if(A||(A=sI.findNode(this.rootNode,I.nodeName)||this.rootNode,this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(B!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[B]!==void 0&&(B=A.morphTargetDictionary[B])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=B}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}sI.Composite=QS;sI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sI.prototype.GetterByBindingType=[sI.prototype._getValue_direct,sI.prototype._getValue_array,sI.prototype._getValue_arrayElement,sI.prototype._getValue_toArray];sI.prototype.SetterByBindingTypeAndVersioning=[[sI.prototype._setValue_direct,sI.prototype._setValue_direct_setNeedsUpdate,sI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sI.prototype._setValue_array,sI.prototype._setValue_array_setNeedsUpdate,sI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sI.prototype._setValue_arrayElement,sI.prototype._setValue_arrayElement_setNeedsUpdate,sI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sI.prototype._setValue_fromArray,sI.prototype._setValue_fromArray_setNeedsUpdate,sI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ES{constructor(A,I,g=0,C=1/0){this.ray=new LE(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}intersectObject(A,I=!0,g=[]){return Bo(A,this,g,I),g.sort(Ht),g}intersectObjects(A,I=!0,g=[]){for(let C=0,B=A.length;C<B;C++)Bo(A[C],this,g,I);return g.sort(Ht),g}}function Ht(Q,A){return Q.distance-A.distance}function Bo(Q,A,I,g){if(Q.layers.test(A.layers)&&Q.raycast(A,I),g===!0){const C=Q.children;for(let B=0,E=C.length;B<E;B++)Bo(C[B],A,I,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const iS={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class TE{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const oS=new EB(-1,1,1,-1,0,1),Yo=new lg;Yo.setAttribute("position",new Tg([-1,3,0,-1,-1,0,3,-1,0],3));Yo.setAttribute("uv",new Tg([0,2,0,0,2,0],2));class eS{constructor(A){this._mesh=new eg(Yo,A)}dispose(){this._mesh.geometry.dispose()}render(A){A.render(this._mesh,oS)}get material(){return this._mesh.material}set material(A){this._mesh.material=A}}class tS extends TE{constructor(A,I){super(),this.textureID=I!==void 0?I:"tDiffuse",A instanceof nC?(this.uniforms=A.uniforms,this.material=A):A&&(this.uniforms=$a.clone(A.uniforms),this.material=new nC({defines:Object.assign({},A.defines),uniforms:this.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader})),this.fsQuad=new eS(this.material)}render(A,I,g){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=g.texture),this.fsQuad.material=this.material,this.renderToScreen?(A.setRenderTarget(null),this.fsQuad.render(A)):(A.setRenderTarget(I),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),this.fsQuad.render(A))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mt extends TE{constructor(A,I){super(),this.scene=A,this.camera=I,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(A,I,g){const C=A.getContext(),B=A.state;B.buffers.color.setMask(!1),B.buffers.depth.setMask(!1),B.buffers.color.setLocked(!0),B.buffers.depth.setLocked(!0);let E,i;this.inverse?(E=0,i=1):(E=1,i=0),B.buffers.stencil.setTest(!0),B.buffers.stencil.setOp(C.REPLACE,C.REPLACE,C.REPLACE),B.buffers.stencil.setFunc(C.ALWAYS,E,4294967295),B.buffers.stencil.setClear(i),B.buffers.stencil.setLocked(!0),A.setRenderTarget(g),this.clear&&A.clear(),A.render(this.scene,this.camera),A.setRenderTarget(I),this.clear&&A.clear(),A.render(this.scene,this.camera),B.buffers.color.setLocked(!1),B.buffers.depth.setLocked(!1),B.buffers.stencil.setLocked(!1),B.buffers.stencil.setFunc(C.EQUAL,1,4294967295),B.buffers.stencil.setOp(C.KEEP,C.KEEP,C.KEEP),B.buffers.stencil.setLocked(!0)}}class aS extends TE{constructor(){super(),this.needsSwap=!1}render(A){A.state.buffers.stencil.setLocked(!1),A.state.buffers.stencil.setTest(!1)}}class sS{constructor(A,I){if(this.renderer=A,I===void 0){const g=A.getSize(new vA);this._pixelRatio=A.getPixelRatio(),this._width=g.width,this._height=g.height,I=new pC(this._width*this._pixelRatio,this._height*this._pixelRatio),I.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=I.width,this._height=I.height;this.renderTarget1=I,this.renderTarget2=I.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tS(iS),this.clock=new hs}swapBuffers(){const A=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=A}addPass(A){this.passes.push(A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(A,I){this.passes.splice(I,0,A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(A){const I=this.passes.indexOf(A);I!==-1&&this.passes.splice(I,1)}isLastEnabledPass(A){for(let I=A+1;I<this.passes.length;I++)if(this.passes[I].enabled)return!1;return!0}render(A){A===void 0&&(A=this.clock.getDelta());const I=this.renderer.getRenderTarget();let g=!1;for(let C=0,B=this.passes.length;C<B;C++){const E=this.passes[C];if(E.enabled!==!1){if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(C),E.render(this.renderer,this.writeBuffer,this.readBuffer,A,g),E.needsSwap){if(g){const i=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,A),o.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}mt!==void 0&&(E instanceof mt?g=!0:E instanceof aS&&(g=!1))}}this.renderer.setRenderTarget(I)}reset(A){if(A===void 0){const I=this.renderer.getSize(new vA);this._pixelRatio=this.renderer.getPixelRatio(),this._width=I.width,this._height=I.height,A=this.renderTarget1.clone(),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=A,this.renderTarget2=A.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(A,I){this._width=A,this._height=I;const g=this._width*this._pixelRatio,C=this._height*this._pixelRatio;this.renderTarget1.setSize(g,C),this.renderTarget2.setSize(g,C);for(let B=0;B<this.passes.length;B++)this.passes[B].setSize(g,C)}setPixelRatio(A){this._pixelRatio=A,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rs extends TE{constructor(A,I,g,C,B){super(),this.scene=A,this.camera=I,this.overrideMaterial=g,this.clearColor=C,this.clearAlpha=B!==void 0?B:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new uA}render(A,I,g){const C=A.autoClear;A.autoClear=!1;let B,E;this.overrideMaterial!==void 0&&(E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(A.getClearColor(this._oldClearColor),B=A.getClearAlpha(),A.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&A.clearDepth(),A.setRenderTarget(this.renderToScreen?null:g),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),A.render(this.scene,this.camera),this.clearColor&&A.setClearColor(this._oldClearColor,B),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=E),A.autoClear=C}}const DS=(Q,A,I)=>{Q.renderer=new is({powerPreference:"high-performance",canvas:A,antialias:!0,alpha:!0,...I}),Q.composer=new sS(Q.renderer),Q.composer.addPass(new rs(Q.scene,Gg(Q.camera)))},bt=(Q,A,I)=>{!Q.renderer||(A?Q.renderer.outputEncoding=dC:Q.renderer.outputEncoding=EI,I?Q.renderer.toneMapping=Xg:Q.renderer.toneMapping=Ha)},Tt=(Q,A,I)=>{var g,C,B,E,i,o,e,t;!Q.renderer||!Q.composer||((C=(g=Q.renderer).setSize)==null||C.call(g,A.width,A.height),(E=(B=Q.renderer).setPixelRatio)==null||E.call(B,I),(o=(i=Q.composer).setSize)==null||o.call(i,A.width,A.height),(t=(e=Q.composer).setPixelRatio)==null||t.call(e,I))},xt=(Q,A,I)=>{!Q.renderer||(Q.renderer.shadowMap.enabled=A,Q.renderer.shadowMap.type=I)},jg=Q=>Q.userData,nS=(Q,A)=>{Q.pointer.update(I=>Q.renderer?I.set(A.offsetX/Q.renderer.domElement.clientWidth*2-1,-(A.offsetY/Q.renderer.domElement.clientHeight)*2+1):I)},ws=(Q,A,I,g)=>(Q.raycaster.setFromCamera(A,I),Q.raycaster.intersectObjects(g,!1)),hS=(Q,A)=>Q.object.uuid!==A.object.uuid||Q.instanceId!==A.instanceId,rS=(Q,A,I)=>{let g=Gg(Q.camera);const C=Q.camera.subscribe(e=>g=e);FI(C);let B=Gg(Q.pointer);const E=Q.pointer.subscribe(e=>B=e);FI(E);let i;const o=e=>{var s,D;e.preventDefault();const t=e.type;Q.pointerOverCanvas.set(!0),I.pointerInvalidated=!0,nS(Q,e);const a=wS(A,B,g);if(t==="pointerdown"&&(i=a?{object:a.object,instanceId:a.instanceId}:null),t==="click"){if(!cS(a,i)){i=null;return}i=null}!a||(D=(s=jg(a.object)).eventDispatcher)==null||D.call(s,t,{...a,event:e})};return{onClick:o,onContextMenu:o,onPointerUp:o,onPointerDown:o,onPointerMove:o}};function wS(Q,A,I){if(Q.interactiveObjects.size===0||Q.raycastableObjects.size===0)return null;const g=ws(Q,A,I,Array.from(Q.raycastableObjects));return g.length===0||!Q.interactiveObjects.has(g[0].object)?null:g[0]}function cS(Q,A){return!Q||!A?!1:Q.object.uuid===A.object.uuid&&Q.instanceId===A.instanceId}const GS=(Q,A)=>{let I=Gg(Q.pointerOverCanvas);const g=Q.pointerOverCanvas.subscribe(e=>I=e);FI(g);let C=Gg(Q.camera);const B=Q.camera.subscribe(e=>C=e);FI(B);let E=Gg(Q.pointer);const i=Q.pointer.subscribe(e=>E=e);return FI(i),{raycast:()=>{var a,s,D,r,n,h,w,G;if(A.interactiveObjects.size===0||A.raycastableObjects.size===0)return;const e=I?ws(A,E,C,Array.from(A.raycastableObjects)):[],t=e.length&&A.interactiveObjects.has(e[0].object)?e[0]:null;t?A.lastIntersection?A.lastIntersection&&hS(A.lastIntersection,t)&&((h=(n=jg(A.lastIntersection.object)).eventDispatcher)==null||h.call(n,"pointerleave",A.lastIntersection),(G=(w=jg(t.object)).eventDispatcher)==null||G.call(w,"pointerenter",t)):(r=(D=jg(t.object)).eventDispatcher)==null||r.call(D,"pointerenter",t):A.lastIntersection&&((s=(a=jg(A.lastIntersection.object)).eventDispatcher)==null||s.call(a,"pointerleave",A.lastIntersection)),A.lastIntersection=t}}},xE=typeof window<"u",SS=Q=>{if(!xE)return;let A;const I=()=>{Q(),A=requestAnimationFrame(I)};I(),FI(()=>{!A||cancelAnimationFrame(A)})},lS=(Q,A)=>{if(A.frameHandlers.size===0)return;if(A.debugFrameloop){let C=0;A.frameHandlers.forEach(B=>{B.debugFrameloopMessage?A.invalidations[B.debugFrameloopMessage]=B.debugFrameloopMessage in A.invalidations?A.invalidations[B.debugFrameloopMessage]+1:1:++C}),C>0&&(A.invalidations.onFrame=A.frameHandlers.size)}const I=Array.from(A.frameHandlers).reduce((C,B)=>B.order?!0:C,!1),g=Q.clock.getDelta();I?Array.from(A.frameHandlers).sort((C,B)=>(C.order??0)>(B.order??0)?1:-1).forEach(C=>C.fn(Q,g)):A.frameHandlers.forEach(C=>C.fn(Q,g))},kS=Q=>{!Q.debugFrameloop||(Q.frame+=1,console.log(`frame: ${Q.frame}${Object.keys(Q.invalidations).length>0?", requested by ↴":""}`),Object.keys(Q.invalidations).length>0&&console.table(Q.invalidations),Q.invalidations={})},yS=(Q,A,I,g)=>{let C=Gg(Q.camera);const B=Q.camera.subscribe(i=>C=i);FI(B);const{raycast:E}=GS(Q,A);SS(()=>{g.dispose();const i=I.frameloop==="always"||I.frameloop==="demand"&&(I.frameInvalidated||I.frameHandlers.size>0)||I.frameloop==="never"&&I.advance;(i||I.pointerInvalidated)&&(E(),I.pointerInvalidated=!1),i&&(!C||!Q.composer||!Q.renderer||(lS(Q,I),Q.composer.passes.length>1?Q.composer.render():Q.renderer.render(Q.scene,C),kS(I),I.frameInvalidated=!1,I.advance=!1))})},MS=()=>{const Q=new TI(75,0,.1,1e3);return jg(Q).threlteDefaultCamera=!0,Q.position.z=5,Q.lookAt(0,0,0),Q},KS=Q=>{const A=Q.size.subscribe(I=>{jg(Gg(Q.camera)).threlteDefaultCamera&&Q.camera.update(g=>{const C=g;return C.aspect=I.width/I.height,C.updateProjectionMatrix(),Q.invalidate("Default camera: aspect ratio changed"),C})});FI(A)},US=(Q,A,I,g,C,B,E)=>{const i={audioListeners:new Map,addAudioListener:(w,G)=>{if(G=G??"default",i.audioListeners.has(G)){console.warn(`An AudioListener with the id "${G}" has already been added, aborting.`);return}i.audioListeners.set(G,w)},removeAudioListener:w=>{if(w=w??"default",!i.audioListeners.has(w)){console.warn(`No AudioListener with the id "${w}" found, aborting.`);return}i.audioListeners.delete(w)},getAudioListener:w=>{if(w=w??"default",!i.audioListeners.has(w)){console.warn(`No AudioListener with the id "${w}" found, aborting.`);return}return i.audioListeners.get(w)}},o={debugFrameloop:B,frameloop:E,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},e={size:Hg([g,C],([w,G])=>w||G),pointer:yI(new vA),pointerOverCanvas:yI(!1),clock:new hs,camera:yI(MS()),scene:new yG,renderer:void 0,composer:void 0,invalidate:w=>{o.frameInvalidated=!0,o.debugFrameloop&&w&&(o.invalidations[w]=o.invalidations[w]?o.invalidations[w]+1:1)},advance:()=>{o.advance=!0}},t={flat:yI(A),linear:yI(Q),dpr:yI(I),setCamera:w=>{e.camera.set(w),e.composer&&(e.composer.passes.forEach(G=>{G instanceof rs&&(G.camera=w)}),e.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new ES,lastIntersection:null,addRaycastableObject:w=>{t.raycastableObjects.add(w)},removeRaycastableObject:w=>{t.raycastableObjects.delete(w)},addInteractiveObject:w=>{t.interactiveObjects.add(w)},removeInteractiveObject:w=>{t.interactiveObjects.delete(w)},addPass:w=>{!e.composer||(e.composer.addPass(w),e.invalidate("Canvas: adding pass"))},removePass:w=>{!e.composer||(e.composer.removePass(w),e.invalidate("Canvas: removing pass"))}},a={dispose:async(w=!1)=>{await FB(),!(!a.shouldDispose&&!w)&&(a.disposableObjects.forEach((G,S)=>{var l;(G===0||w)&&((l=S==null?void 0:S.dispose)==null||l.call(S),a.disposableObjects.delete(S))}),a.shouldDispose=!1)},collectDisposableObjects:(w,G)=>{const S=G??[];return w&&(w!=null&&w.dispose&&typeof w.dispose=="function"&&w.type!=="Scene"&&S.push(w),Object.entries(w).forEach(([l,y])=>{if(l==="parent"||l==="children"||typeof y!="object")return;const M=y;M!=null&&M.dispose&&a.collectDisposableObjects(M,S)})),S},addDisposableObjects:w=>{w.forEach(G=>{const S=a.disposableObjects.get(G);S?a.disposableObjects.set(G,S+1):a.disposableObjects.set(G,1)})},removeDisposableObjects:w=>{w.length!==0&&(w.forEach(G=>{const S=a.disposableObjects.get(G);S&&S>0&&a.disposableObjects.set(G,S-1)}),a.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return mg("threlte",e),mg("threlte-root",t),mg("threlte-render-context",o),mg("threlte-audio-context",i),mg("threlte-disposal-context",a),{ctx:e,rootCtx:t,renderCtx:o,audioCtx:i,disposalCtx:a,getCtx:()=>e,getRootCtx:()=>t,getRenderCtx:()=>o,getAudioCtx:()=>i,getDisposalCtx:()=>a}};function OE(Q,A){const I=yI(Q);let g=Q;const C=I.subscribe(i=>g=i);return FI(C),{...I,set:i=>{if((i==null?void 0:i.uuid)===(g==null?void 0:g.uuid))return;const o=g;I.set(i),A==null||A(i,o)},update:i=>{const o=i(g);if((o==null?void 0:o.uuid)===(g==null?void 0:g.uuid))return;const e=g;I.set(o),A==null||A(o,e)}}}const fg=()=>qg("threlte");function NS(Q){let A;const I=Q[8].default,g=wI(I,Q,Q[7],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&128)&&cI(g,I,C,C[7],A?SI(I,C[7],B,null):GI(C[7]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}const JS=()=>({onChildMount:qg("threlte-hierarchical-object-on-mount"),onChildDestroy:qg("threlte-hierarchical-object-on-destroy")}),FS=()=>qg("threlte-hierarchical-parent-context");function RS(Q,A,I){var w;let g,{$$slots:C={},$$scope:B}=A,{object:E=void 0}=A,{children:i=[]}=A,{onChildMount:o=void 0}=A;const e=G=>{i.push(G),I(1,i),o==null||o(G)};let{onChildDestroy:t=void 0}=A;const a=G=>{const S=i.findIndex(l=>l.uuid===G.uuid);S!==-1&&i.splice(S,1),I(1,i),t==null||t(G)},{invalidate:s}=fg(),D=FS();$A(Q,D,G=>I(6,g=G));let{parent:r=g}=A;const n=JS();E&&((w=n.onChildMount)==null||w.call(n,E),s("HierarchicalObject: object added"));const h=OE(E,(G,S)=>{var l,y;S&&((l=n.onChildDestroy)==null||l.call(n,S),s("HierarchicalObject: object added")),G&&((y=n.onChildMount)==null||y.call(n,G),s("HierarchicalObject: object removed"))});return FI(()=>{var G;E&&((G=n.onChildDestroy)==null||G.call(n,E),s("HierarchicalObject: object removed"))}),mg("threlte-hierarchical-object-on-mount",e),mg("threlte-hierarchical-object-on-destroy",a),mg("threlte-hierarchical-parent-context",h),Q.$$set=G=>{"object"in G&&I(3,E=G.object),"children"in G&&I(1,i=G.children),"onChildMount"in G&&I(4,o=G.onChildMount),"onChildDestroy"in G&&I(5,t=G.onChildDestroy),"parent"in G&&I(2,r=G.parent),"$$scope"in G&&I(7,B=G.$$scope)},Q.$$.update=()=>{Q.$$.dirty&64&&I(2,r=g),Q.$$.dirty&8&&h.set(E)},[D,i,r,E,o,t,g,B,C]}class qS extends iI{constructor(A){super(),oI(this,A,RS,NS,gI,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function dS(Q){let A;const I=Q[1].default,g=wI(I,Q,Q[4],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&16)&&cI(g,I,C,C[4],A?SI(I,C[4],B,null):GI(C[4]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function pS(Q){let A,I;return A=new qS({props:{object:Q[0],onChildMount:Q[2],onChildDestroy:Q[3],$$slots:{default:[dS]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){RA(A.$$.fragment,g)},m(g,C){qA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.object=g[0]),C&1&&(B.onChildMount=g[2]),C&1&&(B.onChildDestroy=g[3]),C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AA(A.$$.fragment,g),I=!0)},o(g){gA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function fS(Q,A,I){let{$$slots:g={},$$scope:C}=A,{object:B}=A;const E=o=>B.add(o),i=o=>B.remove(o);return Q.$$set=o=>{"object"in o&&I(0,B=o.object),"$$scope"in o&&I(4,C=o.$$scope)},[B,g,E,i,C]}class ZE extends iI{constructor(A){super(),oI(this,A,fS,pS,gI,{object:0})}}const YS=()=>{const Q=yI({width:0,height:0});let A={width:0,height:0};const I=Q.subscribe(E=>A=E);FI(I);let g;const C=()=>{const E=A;if(!g||!g.parentElement)return;const{clientWidth:i,clientHeight:o}=g.parentElement;(i!==E.width||o!==E.height)&&Q.set({width:i,height:o})},B=E=>{g=E,C(),window.addEventListener("resize",C)};return xE?(FI(()=>{window.removeEventListener("resize",C)}),{parentSizeAction:B,parentSize:Q}):{parentSize:Q,parentSizeAction:B}};function Ot(Q){let A,I;return A=new ZE({props:{object:Q[0].scene,$$slots:{default:[uS]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){RA(A.$$.fragment,g)},m(g,C){qA(A,g,C),I=!0},p(g,C){const B={};C[1]&4&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AA(A.$$.fragment,g),I=!0)},o(g){gA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function uS(Q){let A;const I=Q[29].default,g=wI(I,Q,Q[33],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&4)&&cI(g,I,C,C[33],A?SI(I,C[33],B,null):GI(C[33]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function LS(Q){let A,I,g,C,B=Q[2]&&Ot(Q);return{c(){A=Vg("canvas"),B&&B.c(),this.h()},l(E){A=_g(E,"CANVAS",{class:!0});var i=JC(A);B&&B.l(i),i.forEach(fA),this.h()},h(){sC(A,"class","svelte-o3oskp")},m(E,i){WA(E,A,i),B&&B.m(A,null),Q[30](A),I=!0,g||(C=[GE(Q[3].call(null,A)),yC(A,"click",Q[9]),yC(A,"contextmenu",Q[10]),yC(A,"pointerup",Q[13]),yC(A,"pointerdown",Q[11]),yC(A,"pointermove",Q[12]),yC(A,"pointerenter",Q[31]),yC(A,"pointerleave",Q[32])],g=!0)},p(E,i){E[2]?B?(B.p(E,i),i[0]&4&&AA(B,1)):(B=Ot(E),B.c(),AA(B,1),B.m(A,null)):B&&(tg(),gA(B,1,1,()=>{B=null}),ag())},i(E){I||(AA(B),I=!0)},o(E){gA(B),I=!1},d(E){E&&fA(A),B&&B.d(),Q[30](null),g=!1,Ja(C)}}}const Zt=new Set;function HS(Q,A,I){let g,C,B,E,{$$slots:i={},$$scope:o}=A,{dpr:e=xE?window.devicePixelRatio:1}=A,{flat:t=!1}=A,{linear:a=!1}=A,{frameloop:s="demand"}=A,{debugFrameloop:D=!1}=A,{shadows:r=!0}=A,{shadowMapType:n=fa}=A,{size:h=void 0}=A,{rendererParameters:w=void 0}=A,G,S=!1;const l=yI(h),{parentSize:y,parentSizeAction:M}=YS(),p=US(a,t,e,l,y,D,s),{getCtx:k,renderCtx:N,disposalCtx:q}=p,{ctx:Y,rootCtx:b,audioCtx:d}=p;KS(Y),Zt.add(Y.invalidate),FI(()=>{Zt.delete(Y.invalidate)});const{size:m,scene:F}=Y;$A(Q,m,sA=>I(26,C=sA));const{flat:Z,linear:CA,dpr:v}=b;$A(Q,Z,sA=>I(27,B=sA)),$A(Q,CA,sA=>I(28,E=sA)),$A(Q,v,sA=>I(25,g=sA)),mg("threlte-parent",yI(F)),co(()=>{!G||(DS(Y,G,w),bt(Y,E,B),Tt(Y,C,g),xt(Y,r,n),I(2,S=!0))}),yS(Y,b,N,q);const{onClick:BA,onContextMenu:IA,onPointerDown:R,onPointerMove:P,onPointerUp:eA}=rS(Y,b,N);FI(()=>{q.dispose(!0)});function iA(sA){XI[sA?"unshift":"push"](()=>{G=sA,I(1,G)})}const tA=()=>k().pointerOverCanvas.set(!0),X=()=>k().pointerOverCanvas.set(!1);return Q.$$set=sA=>{"dpr"in sA&&I(14,e=sA.dpr),"flat"in sA&&I(15,t=sA.flat),"linear"in sA&&I(16,a=sA.linear),"frameloop"in sA&&I(17,s=sA.frameloop),"debugFrameloop"in sA&&I(18,D=sA.debugFrameloop),"shadows"in sA&&I(19,r=sA.shadows),"shadowMapType"in sA&&I(20,n=sA.shadowMapType),"size"in sA&&I(21,h=sA.size),"rendererParameters"in sA&&I(22,w=sA.rendererParameters),"$$scope"in sA&&I(33,o=sA.$$scope)},Q.$$.update=()=>{Q.$$.dirty[0]&2097152&&l.set(h),Q.$$.dirty[0]&65536&&tE(CA,E=a,E),Q.$$.dirty[0]&32768&&tE(Z,B=t,B),Q.$$.dirty[0]&16384&&tE(v,g=e,g),Q.$$.dirty[0]&402653184&&bt(k(),E,B),Q.$$.dirty[0]&100663296&&Tt(k(),C,g),Q.$$.dirty[0]&1572864&&xt(k(),r,n)},[Y,G,S,M,k,m,Z,CA,v,BA,IA,R,P,eA,e,t,a,s,D,r,n,h,w,b,d,g,C,B,E,i,iA,tA,X,o]}class mS extends iI{constructor(A){super(),oI(this,A,HS,LS,gI,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const WE=()=>qg("threlte-root"),bS=()=>qg("threlte-disposal-context");function TS(Q){let A;const I=Q[9].default,g=wI(I,Q,Q[8],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&256)&&cI(g,I,C,C[8],A?SI(I,C[8],B,null):GI(C[8]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}const Wt="threlte-disposable-object-context";function xS(Q,A,I){let g,C,{$$slots:B={},$$scope:E}=A;const{collectDisposableObjects:i,addDisposableObjects:o,removeDisposableObjects:e}=bS();let{object:t=void 0}=A,a=t,{dispose:s=void 0}=A;const D=qg(Wt);$A(Q,D,h=>I(7,C=h));const r=yI(s??C??!0);$A(Q,r,h=>I(6,g=h)),mg(Wt,r);let n=g?i(t):[];return o(n),FI(()=>{e(n)}),Q.$$set=h=>{"object"in h&&I(2,t=h.object),"dispose"in h&&I(3,s=h.dispose),"$$scope"in h&&I(8,E=h.$$scope)},Q.$$.update=()=>{Q.$$.dirty&136&&r.set(s??C??!0),Q.$$.dirty&116&&t!==a&&(e(n),I(5,n=g?i(t):[]),o(n),I(4,a=t))},[D,r,t,s,a,n,g,C,E,B]}class LB extends iI{constructor(A){super(),oI(this,A,xS,TS,gI,{object:2,dispose:3})}}function OS(Q,A,I){let g,C,{object:B}=A;const E=OE(B);$A(Q,E,e=>I(4,C=e));const i=qg("threlte-layers");$A(Q,i,e=>I(3,g=e));const{invalidate:o}=fg();return Q.$$set=e=>{"object"in e&&I(2,B=e.object)},Q.$$.update=()=>{if(Q.$$.dirty&4&&E.set(B),Q.$$.dirty&24){if(g==="all")C.layers.enableAll();else if(g==="none")C.layers.disableAll();else if(Array.isArray(g))for(let e=0;e<32;e+=1){const t=e;g.includes(t)?C.layers.enable(e):C.layers.disable(e)}else g!==void 0&&C.layers.set(g);o("LayerableObject")}},[E,i,B,g,C]}class ZS extends iI{constructor(A){super(),oI(this,A,OS,null,gI,{object:2})}}const XB=(Q,A)=>{if(!xE)return{start:()=>{},stop:()=>{},started:aD(!1)};const I=qg("threlte-render-context"),g={fn:Q,order:A==null?void 0:A.order,debugFrameloopMessage:A==null?void 0:A.debugFrameloopMessage},C=yI(!1),B=()=>{I.frameHandlers.delete(g),C.set(!1)},E=()=>{I.frameHandlers.add(g),C.set(!0)};return((A==null?void 0:A.autostart)??!0)&&E(),FI(()=>{B()}),{start:E,stop:B,started:{subscribe:C.subscribe}}},cs=()=>{const Q=yI(!1);return(async()=>{await FB(),Q.set(!0)})(),Q};function WS(Q,A,I){let g,C,{object:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A;const t=new u,a=qQ(),{invalidate:s}=fg(),D=cs();$A(Q,D,S=>I(8,C=S));const r=async()=>{C||await FB(),a("transform")},n=async()=>{s("TransformableObject: transformed"),await r()};jg(B).onTransform=n;const{start:h,stop:w}=XB(async()=>{e&&!o&&e instanceof II&&(e.getWorldPosition(t),B.lookAt(t),await r())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),G=OE(B);return $A(Q,G,S=>I(7,g=S)),Q.$$set=S=>{"object"in S&&I(2,B=S.object),"position"in S&&I(3,E=S.position),"scale"in S&&I(4,i=S.scale),"rotation"in S&&I(5,o=S.rotation),"lookAt"in S&&I(6,e=S.lookAt)},Q.$$.update=()=>{Q.$$.dirty&4&&G.set(B),Q.$$.dirty&232&&(E&&(g.position.set(E.x??0,E.y??0,E.z??0),n()),e&&!o&&(e instanceof II?h():(w(),g.lookAt(e.x??0,e.y??0,e.z??0),n())),e||w()),Q.$$.dirty&144&&i&&(typeof i=="number"?g.scale.set(i,i,i):g.scale.set(i.x??1,i.y??1,i.z??1),n()),Q.$$.dirty&160&&o&&(g.rotation.set(o.x??0,o.y??0,o.z??0,o.order??"XYZ"),n())},[D,G,B,E,i,o,e,g]}class Gs extends iI{constructor(A){super(),oI(this,A,WS,null,gI,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function vS(Q,A,I){let g,C,B,{object:E}=A,{viewportAware:i=!1}=A;const o=qQ(),{camera:e,invalidate:t}=fg();$A(Q,e,M=>I(8,B=M));const a=new HE,s=new bA,D=M=>M.type==="Mesh",r=new u,n=()=>B?(s.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),a.setFromProjectionMatrix(s),D(E)?a.intersectsObject(E):(E.getWorldPosition(r),a.containsPoint(r))):!0,h=cs();$A(Q,h,M=>I(7,C=M));let{inViewport:w=n()}=A;const G=async M=>{M?(C||await FB(),o("viewportenter",E)):(C||await FB(),o("viewportleave",E))},{start:S,stop:l,started:y}=XB(()=>{const M=n();w===void 0?(I(3,w=n()),G(w)):M!==w&&(G(M),I(3,w=M))},{autostart:i,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return $A(Q,y,M=>I(6,g=M)),t("ViewportAwareObject"),Q.$$set=M=>{"object"in M&&I(4,E=M.object),"viewportAware"in M&&I(5,i=M.viewportAware),"inViewport"in M&&I(3,w=M.inViewport)},Q.$$.update=()=>{Q.$$.dirty&96&&(i&&!g?S():!i&&g&&l())},[e,h,y,w,E,i,g]}class PS extends iI{constructor(A){super(),oI(this,A,vS,null,gI,{object:4,viewportAware:5,inViewport:3})}}function jS(Q){let A;const I=Q[14].default,g=wI(I,Q,Q[18],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&262144)&&cI(g,I,C,C[18],A?SI(I,C[18],B,null):GI(C[18]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function VS(Q){let A,I;return A=new ZE({props:{object:Q[1],$$slots:{default:[jS]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){RA(A.$$.fragment,g)},m(g,C){qA(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.object=g[1]),C&262144&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AA(A.$$.fragment,g),I=!0)},o(g){gA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function _S(Q){let A,I,g,C,B,E,i,o,e;A=new ZS({props:{object:Q[1]}}),g=new Gs({props:{object:Q[1],position:Q[2],rotation:Q[4],scale:Q[3],lookAt:Q[5]}}),B=new LB({props:{object:Q[1],dispose:Q[7],$$slots:{default:[VS]},$$scope:{ctx:Q}}});function t(s){Q[15](s)}let a={object:Q[1],viewportAware:Q[6]};return Q[0]!==void 0&&(a.inViewport=Q[0]),i=new PS({props:a}),XI.push(()=>dg(i,"inViewport",t)),i.$on("viewportenter",Q[16]),i.$on("viewportleave",Q[17]),{c(){FA(A.$$.fragment),I=LI(),FA(g.$$.fragment),C=LI(),FA(B.$$.fragment),E=LI(),FA(i.$$.fragment)},l(s){RA(A.$$.fragment,s),I=HI(s),RA(g.$$.fragment,s),C=HI(s),RA(B.$$.fragment,s),E=HI(s),RA(i.$$.fragment,s)},m(s,D){qA(A,s,D),WA(s,I,D),qA(g,s,D),WA(s,C,D),qA(B,s,D),WA(s,E,D),qA(i,s,D),e=!0},p(s,[D]){const r={};D&2&&(r.object=s[1]),A.$set(r);const n={};D&2&&(n.object=s[1]),D&4&&(n.position=s[2]),D&16&&(n.rotation=s[4]),D&8&&(n.scale=s[3]),D&32&&(n.lookAt=s[5]),g.$set(n);const h={};D&2&&(h.object=s[1]),D&128&&(h.dispose=s[7]),D&262146&&(h.$$scope={dirty:D,ctx:s}),B.$set(h);const w={};D&2&&(w.object=s[1]),D&64&&(w.viewportAware=s[6]),!o&&D&1&&(o=!0,w.inViewport=s[0],pg(()=>o=!1)),i.$set(w)},i(s){e||(AA(A.$$.fragment,s),AA(g.$$.fragment,s),AA(B.$$.fragment,s),AA(i.$$.fragment,s),e=!0)},o(s){gA(A.$$.fragment,s),gA(g.$$.fragment,s),gA(B.$$.fragment,s),gA(i.$$.fragment,s),e=!1},d(s){dA(A,s),s&&fA(I),dA(g,s),s&&fA(C),dA(B,s),s&&fA(E),dA(i,s)}}}function XS(Q,A,I){let{$$slots:g={},$$scope:C}=A,{object:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A,{viewportAware:t=!1}=A,{inViewport:a=!1}=A,{castShadow:s=void 0}=A,{receiveShadow:D=void 0}=A,{frustumCulled:r=void 0}=A,{renderOrder:n=void 0}=A,{visible:h=void 0}=A,{dispose:w=void 0}=A,{userData:G=void 0}=A;const{invalidate:S}=fg(),l=()=>B;function y(k){a=k,I(0,a)}function M(k){KA.call(this,Q,k)}function p(k){KA.call(this,Q,k)}return Q.$$set=k=>{"object"in k&&I(1,B=k.object),"position"in k&&I(2,E=k.position),"scale"in k&&I(3,i=k.scale),"rotation"in k&&I(4,o=k.rotation),"lookAt"in k&&I(5,e=k.lookAt),"viewportAware"in k&&I(6,t=k.viewportAware),"inViewport"in k&&I(0,a=k.inViewport),"castShadow"in k&&I(8,s=k.castShadow),"receiveShadow"in k&&I(9,D=k.receiveShadow),"frustumCulled"in k&&I(10,r=k.frustumCulled),"renderOrder"in k&&I(11,n=k.renderOrder),"visible"in k&&I(12,h=k.visible),"dispose"in k&&I(7,w=k.dispose),"userData"in k&&I(13,G=k.userData),"$$scope"in k&&I(18,C=k.$$scope)},Q.$$.update=()=>{Q.$$.dirty&16128&&(h!==void 0&&(l().visible=h),s!==void 0&&(l().castShadow=s),D!==void 0&&(l().receiveShadow=D),r!==void 0&&(l().frustumCulled=r),n!==void 0&&(l().renderOrder=n),G!==void 0&&(l().userData={...l().userData,...G}),S("Object3DInstance: props changed"))},[a,B,E,i,o,e,t,w,s,D,r,n,h,G,g,y,M,p,C]}class pQ extends iI{constructor(A){super(),oI(this,A,XS,_S,gI,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function zS(Q){let A;const I=Q[17].default,g=wI(I,Q,Q[21],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&2097152)&&cI(g,I,C,C[21],A?SI(I,C[21],B,null):GI(C[21]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function $S(Q){let A,I,g;function C(E){Q[18](E)}let B={object:Q[1],lookAt:Q[5],castShadow:Q[7],receiveShadow:Q[8],frustumCulled:Q[9],renderOrder:Q[10],position:Q[2],scale:Q[3],rotation:Q[4],viewportAware:Q[6],visible:Q[11],userData:Q[12],dispose:Q[13],$$slots:{default:[zS]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(B.inViewport=Q[0]),A=new pQ({props:B}),XI.push(()=>dg(A,"inViewport",C)),A.$on("viewportenter",Q[19]),A.$on("viewportleave",Q[20]),{c(){FA(A.$$.fragment)},l(E){RA(A.$$.fragment,E)},m(E,i){qA(A,E,i),g=!0},p(E,[i]){const o={};i&2&&(o.object=E[1]),i&32&&(o.lookAt=E[5]),i&128&&(o.castShadow=E[7]),i&256&&(o.receiveShadow=E[8]),i&512&&(o.frustumCulled=E[9]),i&1024&&(o.renderOrder=E[10]),i&4&&(o.position=E[2]),i&8&&(o.scale=E[3]),i&16&&(o.rotation=E[4]),i&64&&(o.viewportAware=E[6]),i&2048&&(o.visible=E[11]),i&4096&&(o.userData=E[12]),i&8192&&(o.dispose=E[13]),i&2097152&&(o.$$scope={dirty:i,ctx:E}),!I&&i&1&&(I=!0,o.inViewport=E[0],pg(()=>I=!1)),A.$set(o)},i(E){g||(AA(A.$$.fragment,E),g=!0)},o(E){gA(A.$$.fragment,E),g=!1},d(E){dA(A,E)}}}function Al(Q,A,I){let g,{$$slots:C={},$$scope:B}=A,{camera:E}=A,{position:i=void 0}=A,{scale:o=void 0}=A,{rotation:e=void 0}=A,{lookAt:t=void 0}=A,{viewportAware:a=!1}=A,{inViewport:s=!1}=A,{castShadow:D=void 0}=A,{receiveShadow:r=void 0}=A,{frustumCulled:n=void 0}=A,{renderOrder:h=void 0}=A,{visible:w=void 0}=A,{userData:G=void 0}=A,{dispose:S=void 0}=A,{useCamera:l=!1}=A;const y=OE(E);$A(Q,y,q=>I(16,g=q));const{setCamera:M}=WE();function p(q){s=q,I(0,s)}function k(q){KA.call(this,Q,q)}function N(q){KA.call(this,Q,q)}return Q.$$set=q=>{"camera"in q&&I(1,E=q.camera),"position"in q&&I(2,i=q.position),"scale"in q&&I(3,o=q.scale),"rotation"in q&&I(4,e=q.rotation),"lookAt"in q&&I(5,t=q.lookAt),"viewportAware"in q&&I(6,a=q.viewportAware),"inViewport"in q&&I(0,s=q.inViewport),"castShadow"in q&&I(7,D=q.castShadow),"receiveShadow"in q&&I(8,r=q.receiveShadow),"frustumCulled"in q&&I(9,n=q.frustumCulled),"renderOrder"in q&&I(10,h=q.renderOrder),"visible"in q&&I(11,w=q.visible),"userData"in q&&I(12,G=q.userData),"dispose"in q&&I(13,S=q.dispose),"useCamera"in q&&I(15,l=q.useCamera),"$$scope"in q&&I(21,B=q.$$scope)},Q.$$.update=()=>{Q.$$.dirty&2&&y.set(E),Q.$$.dirty&98304&&l&&M(g)},[s,E,i,o,e,t,a,D,r,n,h,w,G,S,y,l,g,C,p,k,N,B]}class Il extends iI{constructor(A){super(),oI(this,A,Al,$S,gI,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function gl(Q){let A;const I=Q[20].default,g=wI(I,Q,Q[24],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&16777216)&&cI(g,I,C,C[24],A?SI(I,C[24],B,null):GI(C[24]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function Cl(Q){let A,I,g;function C(E){Q[21](E)}let B={camera:Q[0],position:Q[2],scale:Q[3],rotation:Q[4],castShadow:Q[6],receiveShadow:Q[7],frustumCulled:Q[8],renderOrder:Q[9],visible:Q[10],userData:Q[11],dispose:Q[12],viewportAware:Q[13],lookAt:Q[5],useCamera:Q[14],$$slots:{default:[gl]},$$scope:{ctx:Q}};return Q[1]!==void 0&&(B.inViewport=Q[1]),A=new Il({props:B}),XI.push(()=>dg(A,"inViewport",C)),A.$on("viewportenter",Q[22]),A.$on("viewportleave",Q[23]),{c(){FA(A.$$.fragment)},l(E){RA(A.$$.fragment,E)},m(E,i){qA(A,E,i),g=!0},p(E,[i]){const o={};i&1&&(o.camera=E[0]),i&4&&(o.position=E[2]),i&8&&(o.scale=E[3]),i&16&&(o.rotation=E[4]),i&64&&(o.castShadow=E[6]),i&128&&(o.receiveShadow=E[7]),i&256&&(o.frustumCulled=E[8]),i&512&&(o.renderOrder=E[9]),i&1024&&(o.visible=E[10]),i&2048&&(o.userData=E[11]),i&4096&&(o.dispose=E[12]),i&8192&&(o.viewportAware=E[13]),i&32&&(o.lookAt=E[5]),i&16384&&(o.useCamera=E[14]),i&16777216&&(o.$$scope={dirty:i,ctx:E}),!I&&i&2&&(I=!0,o.inViewport=E[1],pg(()=>I=!1)),A.$set(o)},i(E){g||(AA(A.$$.fragment,E),g=!0)},o(E){gA(A.$$.fragment,E),g=!1},d(E){dA(A,E)}}}function Bl(Q,A,I){let g,{$$slots:C={},$$scope:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A,{castShadow:t=void 0}=A,{receiveShadow:a=void 0}=A,{frustumCulled:s=void 0}=A,{renderOrder:D=void 0}=A,{visible:r=void 0}=A,{userData:n=void 0}=A,{dispose:h=void 0}=A,{viewportAware:w=!1}=A,{inViewport:G=!1}=A,{useCamera:S=!0}=A,{near:l=void 0}=A,{far:y=void 0}=A,{fov:M=void 0}=A;const{size:p,invalidate:k}=fg();$A(Q,p,d=>I(19,g=d));const N=new TI(M,g.width/g.height,l,y);function q(d){G=d,I(1,G)}function Y(d){KA.call(this,Q,d)}function b(d){KA.call(this,Q,d)}return Q.$$set=d=>{"position"in d&&I(2,E=d.position),"scale"in d&&I(3,i=d.scale),"rotation"in d&&I(4,o=d.rotation),"lookAt"in d&&I(5,e=d.lookAt),"castShadow"in d&&I(6,t=d.castShadow),"receiveShadow"in d&&I(7,a=d.receiveShadow),"frustumCulled"in d&&I(8,s=d.frustumCulled),"renderOrder"in d&&I(9,D=d.renderOrder),"visible"in d&&I(10,r=d.visible),"userData"in d&&I(11,n=d.userData),"dispose"in d&&I(12,h=d.dispose),"viewportAware"in d&&I(13,w=d.viewportAware),"inViewport"in d&&I(1,G=d.inViewport),"useCamera"in d&&I(14,S=d.useCamera),"near"in d&&I(16,l=d.near),"far"in d&&I(17,y=d.far),"fov"in d&&I(18,M=d.fov),"$$scope"in d&&I(24,B=d.$$scope)},Q.$$.update=()=>{Q.$$.dirty&524289&&(I(0,N.aspect=g.width/g.height,N),N.updateProjectionMatrix(),k("PerspectiveCamera: aspect changed")),Q.$$.dirty&458753&&(l!==void 0&&I(0,N.near=l,N),y!==void 0&&I(0,N.far=y,N),M!==void 0&&I(0,N.fov=M,N),N.updateProjectionMatrix(),k("PerspectiveCamera: props changed"))},[N,G,E,i,o,e,t,a,s,D,r,n,h,w,S,p,l,y,M,g,C,q,Y,b,B]}class Ql extends iI{constructor(A){super(),oI(this,A,Bl,Cl,gI,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const vt=[],Qo=(Q,A)=>{const I=vt.find(C=>C instanceof Q);if(I)return I;const g=A();return vt.push(g),g},El=(Q,A)=>A?new uA(Q):new uA().setHex(new uA(Q).getHex()).convertSRGBToLinear();function il(Q){let A;const I=Q[18].default,g=wI(I,Q,Q[22],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&4194304)&&cI(g,I,C,C[22],A?SI(I,C[22],B,null):GI(C[22]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function ol(Q){let A,I,g;function C(E){Q[19](E)}let B={object:Q[0],lookAt:Q[5],castShadow:Q[7],receiveShadow:Q[8],frustumCulled:Q[9],renderOrder:Q[10],position:Q[2],scale:Q[3],rotation:Q[4],viewportAware:Q[6],visible:Q[11],userData:Q[12],dispose:Q[13],$$slots:{default:[il]},$$scope:{ctx:Q}};return Q[1]!==void 0&&(B.inViewport=Q[1]),A=new pQ({props:B}),XI.push(()=>dg(A,"inViewport",C)),A.$on("viewportenter",Q[20]),A.$on("viewportleave",Q[21]),{c(){FA(A.$$.fragment)},l(E){RA(A.$$.fragment,E)},m(E,i){qA(A,E,i),g=!0},p(E,[i]){const o={};i&1&&(o.object=E[0]),i&32&&(o.lookAt=E[5]),i&128&&(o.castShadow=E[7]),i&256&&(o.receiveShadow=E[8]),i&512&&(o.frustumCulled=E[9]),i&1024&&(o.renderOrder=E[10]),i&4&&(o.position=E[2]),i&8&&(o.scale=E[3]),i&16&&(o.rotation=E[4]),i&64&&(o.viewportAware=E[6]),i&2048&&(o.visible=E[11]),i&4096&&(o.userData=E[12]),i&8192&&(o.dispose=E[13]),i&4194304&&(o.$$scope={dirty:i,ctx:E}),!I&&i&2&&(I=!0,o.inViewport=E[1],pg(()=>I=!1)),A.$set(o)},i(E){g||(AA(A.$$.fragment,E),g=!0)},o(E){gA(A.$$.fragment,E),g=!1},d(E){dA(A,E)}}}function el(Q,A,I){let g,{$$slots:C={},$$scope:B}=A,{light:E}=A,{position:i=void 0}=A,{scale:o=void 0}=A,{rotation:e=void 0}=A,{lookAt:t=void 0}=A,{viewportAware:a=!1}=A,{inViewport:s=!1}=A,{castShadow:D=void 0}=A,{receiveShadow:r=void 0}=A,{frustumCulled:n=void 0}=A,{renderOrder:h=void 0}=A,{visible:w=void 0}=A,{userData:G=void 0}=A,{dispose:S=void 0}=A,{color:l=void 0}=A,{intensity:y=void 0}=A;const{invalidate:M}=fg(),{linear:p}=WE();$A(Q,p,Y=>I(17,g=Y));function k(Y){s=Y,I(1,s)}function N(Y){KA.call(this,Q,Y)}function q(Y){KA.call(this,Q,Y)}return Q.$$set=Y=>{"light"in Y&&I(0,E=Y.light),"position"in Y&&I(2,i=Y.position),"scale"in Y&&I(3,o=Y.scale),"rotation"in Y&&I(4,e=Y.rotation),"lookAt"in Y&&I(5,t=Y.lookAt),"viewportAware"in Y&&I(6,a=Y.viewportAware),"inViewport"in Y&&I(1,s=Y.inViewport),"castShadow"in Y&&I(7,D=Y.castShadow),"receiveShadow"in Y&&I(8,r=Y.receiveShadow),"frustumCulled"in Y&&I(9,n=Y.frustumCulled),"renderOrder"in Y&&I(10,h=Y.renderOrder),"visible"in Y&&I(11,w=Y.visible),"userData"in Y&&I(12,G=Y.userData),"dispose"in Y&&I(13,S=Y.dispose),"color"in Y&&I(15,l=Y.color),"intensity"in Y&&I(16,y=Y.intensity),"$$scope"in Y&&I(22,B=Y.$$scope)},Q.$$.update=()=>{Q.$$.dirty&229376&&(y!==void 0&&I(0,E.intensity=y,E),l!==void 0&&I(0,E.color=El(l,g),E),M("LightInstance: props changed"))},[E,s,i,o,e,t,a,D,r,n,h,w,G,S,p,l,y,g,C,k,N,q,B]}class tl extends iI{constructor(A){super(),oI(this,A,el,ol,gI,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function Pt(Q){let A,I,g,C,B,E;return A=new ZE({props:{object:Q[16]}}),g=new Gs({props:{object:Q[16],position:Q[15]}}),B=new LB({props:{dispose:Q[10],object:Q[15]}}),{c(){FA(A.$$.fragment),I=LI(),FA(g.$$.fragment),C=LI(),FA(B.$$.fragment)},l(i){RA(A.$$.fragment,i),I=HI(i),RA(g.$$.fragment,i),C=HI(i),RA(B.$$.fragment,i)},m(i,o){qA(A,i,o),WA(i,I,o),qA(g,i,o),WA(i,C,o),qA(B,i,o),E=!0},p(i,o){const e={};o&32768&&(e.position=i[15]),g.$set(e);const t={};o&1024&&(t.dispose=i[10]),o&32768&&(t.object=i[15]),B.$set(t)},i(i){E||(AA(A.$$.fragment,i),AA(g.$$.fragment,i),AA(B.$$.fragment,i),E=!0)},o(i){gA(A.$$.fragment,i),gA(g.$$.fragment,i),gA(B.$$.fragment,i),E=!1},d(i){dA(A,i),i&&fA(I),dA(g,i),i&&fA(C),dA(B,i)}}}function al(Q){let A;const I=Q[18].default,g=wI(I,Q,Q[22],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&4194304)&&cI(g,I,C,C[22],A?SI(I,C[22],B,null):GI(C[22]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function sl(Q){let A,I,g,C,B=Q[15]&&!(Q[15]instanceof II)&&Pt(Q);function E(o){Q[19](o)}let i={light:Q[1],position:Q[2],scale:Q[3],rotation:Q[4],castShadow:!!Q[14],receiveShadow:Q[5],frustumCulled:Q[6],renderOrder:Q[7],visible:Q[8],userData:Q[9],dispose:Q[10],viewportAware:Q[11],color:Q[12],intensity:Q[13],$$slots:{default:[al]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(i.inViewport=Q[0]),I=new tl({props:i}),XI.push(()=>dg(I,"inViewport",E)),I.$on("viewportenter",Q[20]),I.$on("viewportleave",Q[21]),{c(){B&&B.c(),A=LI(),FA(I.$$.fragment)},l(o){B&&B.l(o),A=HI(o),RA(I.$$.fragment,o)},m(o,e){B&&B.m(o,e),WA(o,A,e),qA(I,o,e),C=!0},p(o,[e]){o[15]&&!(o[15]instanceof II)?B?(B.p(o,e),e&32768&&AA(B,1)):(B=Pt(o),B.c(),AA(B,1),B.m(A.parentNode,A)):B&&(tg(),gA(B,1,1,()=>{B=null}),ag());const t={};e&2&&(t.light=o[1]),e&4&&(t.position=o[2]),e&8&&(t.scale=o[3]),e&16&&(t.rotation=o[4]),e&16384&&(t.castShadow=!!o[14]),e&32&&(t.receiveShadow=o[5]),e&64&&(t.frustumCulled=o[6]),e&128&&(t.renderOrder=o[7]),e&256&&(t.visible=o[8]),e&512&&(t.userData=o[9]),e&1024&&(t.dispose=o[10]),e&2048&&(t.viewportAware=o[11]),e&4096&&(t.color=o[12]),e&8192&&(t.intensity=o[13]),e&4194304&&(t.$$scope={dirty:e,ctx:o}),!g&&e&1&&(g=!0,t.inViewport=o[0],pg(()=>g=!1)),I.$set(t)},i(o){C||(AA(B),AA(I.$$.fragment,o),C=!0)},o(o){gA(B),gA(I.$$.fragment,o),C=!1},d(o){B&&B.d(o),o&&fA(A),dA(I,o)}}}function Dl(Q,A,I){let g,{$$slots:C={},$$scope:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{receiveShadow:e=void 0}=A,{frustumCulled:t=void 0}=A,{renderOrder:a=void 0}=A,{visible:s=void 0}=A,{userData:D=void 0}=A,{dispose:r=void 0}=A,{viewportAware:n=!1}=A,{inViewport:h=!1}=A,{color:w=void 0}=A,{intensity:G=void 0}=A,{shadow:S=void 0}=A,{target:l=void 0}=A;const y=new ns(w,G),{invalidate:M}=fg(),p=y.target,{start:k,stop:N,started:q}=XB(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});$A(Q,q,Z=>I(23,g=Z));const Y=Z=>{Z&&Z instanceof II&&!g?(I(1,y.target=Z,y),k(),M("DirectionalLight: target changed")):(!Z||!(Z instanceof II))&&g&&(I(1,y.target=p,y),N(),M("DirectionalLight: target changed"))},b=Z=>{if(Z){const{mapSize:CA=[512,512],camera:{left:v=-5,bottom:BA=-5,right:IA=5,top:R=5,near:P=.5,far:eA=500}={},bias:iA=0,radius:tA=1}=Z===!0?{}:Z;y.shadow.mapSize.set(CA[0],CA[1]),I(1,y.shadow.camera.left=v,y),I(1,y.shadow.camera.top=R,y),I(1,y.shadow.camera.right=IA,y),I(1,y.shadow.camera.bottom=BA,y),I(1,y.shadow.camera.near=P,y),I(1,y.shadow.camera.far=eA,y),I(1,y.shadow.bias=iA,y),I(1,y.shadow.radius=tA,y)}M("DirectionalLight: shadow changed")};function d(Z){h=Z,I(0,h)}function m(Z){KA.call(this,Q,Z)}function F(Z){KA.call(this,Q,Z)}return Q.$$set=Z=>{"position"in Z&&I(2,E=Z.position),"scale"in Z&&I(3,i=Z.scale),"rotation"in Z&&I(4,o=Z.rotation),"receiveShadow"in Z&&I(5,e=Z.receiveShadow),"frustumCulled"in Z&&I(6,t=Z.frustumCulled),"renderOrder"in Z&&I(7,a=Z.renderOrder),"visible"in Z&&I(8,s=Z.visible),"userData"in Z&&I(9,D=Z.userData),"dispose"in Z&&I(10,r=Z.dispose),"viewportAware"in Z&&I(11,n=Z.viewportAware),"inViewport"in Z&&I(0,h=Z.inViewport),"color"in Z&&I(12,w=Z.color),"intensity"in Z&&I(13,G=Z.intensity),"shadow"in Z&&I(14,S=Z.shadow),"target"in Z&&I(15,l=Z.target),"$$scope"in Z&&I(22,B=Z.$$scope)},Q.$$.update=()=>{Q.$$.dirty&32768&&Y(l),Q.$$.dirty&16384&&b(S)},[h,y,E,i,o,e,t,a,s,D,r,n,w,G,S,l,p,q,C,d,m,F,B]}class nl extends iI{constructor(A){super(),oI(this,A,Dl,sl,gI,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function hl(Q,A,I){let{object:g}=A,C=g,{interactive:B=!1}=A,{ignorePointer:E=!1}=A;const i=qQ(),{addInteractiveObject:o,removeInteractiveObject:e,addRaycastableObject:t,removeRaycastableObject:a}=WE(),{invalidate:s}=fg(),D=n=>{a(n),e(n),delete jg(n).eventDispatcher},r=(n,h,w)=>{jg(n).eventDispatcher=i,h?(a(n),e(n)):(t(n),w?o(n):e(n))};return FI(()=>{D(g),s("InteractiveObject: object removed")}),Q.$$set=n=>{"object"in n&&I(0,g=n.object),"interactive"in n&&I(1,B=n.interactive),"ignorePointer"in n&&I(2,E=n.ignorePointer)},Q.$$.update=()=>{Q.$$.dirty&15&&(g!==C?(D(C),r(g,E,B),s("InteractiveObject: object changed"),I(3,C=g)):g===C&&(r(g,E,B),s("InteractiveObject: props changed")))},[g,B,E,C]}class Ss extends iI{constructor(A){super(),oI(this,A,hl,null,gI,{object:0,interactive:1,ignorePointer:2})}}function rl(Q){let A;const I=Q[16].default,g=wI(I,Q,Q[27],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&134217728)&&cI(g,I,C,C[27],A?SI(I,C[27],B,null):GI(C[27]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function wl(Q){let A,I,g,C,B;function E(o){Q[17](o)}let i={object:Q[1],lookAt:Q[5],position:Q[2],scale:Q[3],rotation:Q[4],castShadow:Q[7],receiveShadow:Q[8],frustumCulled:Q[9],renderOrder:Q[10],visible:Q[11],userData:Q[12],dispose:Q[13],viewportAware:Q[6],$$slots:{default:[rl]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(i.inViewport=Q[0]),A=new pQ({props:i}),XI.push(()=>dg(A,"inViewport",E)),A.$on("viewportenter",Q[18]),A.$on("viewportleave",Q[19]),C=new Ss({props:{object:Q[1],interactive:Q[14],ignorePointer:Q[15]}}),C.$on("click",Q[20]),C.$on("contextmenu",Q[21]),C.$on("pointerup",Q[22]),C.$on("pointerdown",Q[23]),C.$on("pointerenter",Q[24]),C.$on("pointerleave",Q[25]),C.$on("pointermove",Q[26]),{c(){FA(A.$$.fragment),g=LI(),FA(C.$$.fragment)},l(o){RA(A.$$.fragment,o),g=HI(o),RA(C.$$.fragment,o)},m(o,e){qA(A,o,e),WA(o,g,e),qA(C,o,e),B=!0},p(o,[e]){const t={};e&2&&(t.object=o[1]),e&32&&(t.lookAt=o[5]),e&4&&(t.position=o[2]),e&8&&(t.scale=o[3]),e&16&&(t.rotation=o[4]),e&128&&(t.castShadow=o[7]),e&256&&(t.receiveShadow=o[8]),e&512&&(t.frustumCulled=o[9]),e&1024&&(t.renderOrder=o[10]),e&2048&&(t.visible=o[11]),e&4096&&(t.userData=o[12]),e&8192&&(t.dispose=o[13]),e&64&&(t.viewportAware=o[6]),e&134217728&&(t.$$scope={dirty:e,ctx:o}),!I&&e&1&&(I=!0,t.inViewport=o[0],pg(()=>I=!1)),A.$set(t);const a={};e&2&&(a.object=o[1]),e&16384&&(a.interactive=o[14]),e&32768&&(a.ignorePointer=o[15]),C.$set(a)},i(o){B||(AA(A.$$.fragment,o),AA(C.$$.fragment,o),B=!0)},o(o){gA(A.$$.fragment,o),gA(C.$$.fragment,o),B=!1},d(o){dA(A,o),o&&fA(g),dA(C,o)}}}function cl(Q,A,I){let{$$slots:g={},$$scope:C}=A,{mesh:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A,{viewportAware:t=!1}=A,{inViewport:a=!1}=A,{castShadow:s=void 0}=A,{receiveShadow:D=void 0}=A,{frustumCulled:r=void 0}=A,{renderOrder:n=void 0}=A,{visible:h=void 0}=A,{userData:w=void 0}=A,{dispose:G=void 0}=A,{interactive:S=!1}=A,{ignorePointer:l=!1}=A;function y(F){a=F,I(0,a)}function M(F){KA.call(this,Q,F)}function p(F){KA.call(this,Q,F)}function k(F){KA.call(this,Q,F)}function N(F){KA.call(this,Q,F)}function q(F){KA.call(this,Q,F)}function Y(F){KA.call(this,Q,F)}function b(F){KA.call(this,Q,F)}function d(F){KA.call(this,Q,F)}function m(F){KA.call(this,Q,F)}return Q.$$set=F=>{"mesh"in F&&I(1,B=F.mesh),"position"in F&&I(2,E=F.position),"scale"in F&&I(3,i=F.scale),"rotation"in F&&I(4,o=F.rotation),"lookAt"in F&&I(5,e=F.lookAt),"viewportAware"in F&&I(6,t=F.viewportAware),"inViewport"in F&&I(0,a=F.inViewport),"castShadow"in F&&I(7,s=F.castShadow),"receiveShadow"in F&&I(8,D=F.receiveShadow),"frustumCulled"in F&&I(9,r=F.frustumCulled),"renderOrder"in F&&I(10,n=F.renderOrder),"visible"in F&&I(11,h=F.visible),"userData"in F&&I(12,w=F.userData),"dispose"in F&&I(13,G=F.dispose),"interactive"in F&&I(14,S=F.interactive),"ignorePointer"in F&&I(15,l=F.ignorePointer),"$$scope"in F&&I(27,C=F.$$scope)},[a,B,E,i,o,e,t,s,D,r,n,h,w,G,S,l,g,y,M,p,k,N,q,Y,b,d,m,C]}class Gl extends iI{constructor(A){super(),oI(this,A,cl,wl,gI,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function Sl(Q){let A;const I=Q[20].default,g=wI(I,Q,Q[31],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&1)&&cI(g,I,C,C[31],A?SI(I,C[31],B,null):GI(C[31]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function ll(Q){let A,I,g,C,B,E,i;A=new LB({props:{dispose:Q[11],object:Q[15]}}),g=new LB({props:{dispose:Q[11],object:Q[16]}});function o(t){Q[21](t)}let e={mesh:Q[17],position:Q[1],scale:Q[2],rotation:Q[3],lookAt:Q[14],castShadow:Q[5],receiveShadow:Q[6],frustumCulled:Q[7],renderOrder:Q[8],visible:Q[9],interactive:Q[12],ignorePointer:Q[13],userData:Q[10],dispose:Q[11],viewportAware:Q[4],$$slots:{default:[Sl]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(e.inViewport=Q[0]),B=new Gl({props:e}),XI.push(()=>dg(B,"inViewport",o)),B.$on("click",Q[22]),B.$on("contextmenu",Q[23]),B.$on("pointerup",Q[24]),B.$on("pointerdown",Q[25]),B.$on("pointerenter",Q[26]),B.$on("pointerleave",Q[27]),B.$on("pointermove",Q[28]),B.$on("viewportenter",Q[29]),B.$on("viewportleave",Q[30]),{c(){FA(A.$$.fragment),I=LI(),FA(g.$$.fragment),C=LI(),FA(B.$$.fragment)},l(t){RA(A.$$.fragment,t),I=HI(t),RA(g.$$.fragment,t),C=HI(t),RA(B.$$.fragment,t)},m(t,a){qA(A,t,a),WA(t,I,a),qA(g,t,a),WA(t,C,a),qA(B,t,a),i=!0},p(t,a){const s={};a[0]&2048&&(s.dispose=t[11]),a[0]&32768&&(s.object=t[15]),A.$set(s);const D={};a[0]&2048&&(D.dispose=t[11]),a[0]&65536&&(D.object=t[16]),g.$set(D);const r={};a[0]&2&&(r.position=t[1]),a[0]&4&&(r.scale=t[2]),a[0]&8&&(r.rotation=t[3]),a[0]&16384&&(r.lookAt=t[14]),a[0]&32&&(r.castShadow=t[5]),a[0]&64&&(r.receiveShadow=t[6]),a[0]&128&&(r.frustumCulled=t[7]),a[0]&256&&(r.renderOrder=t[8]),a[0]&512&&(r.visible=t[9]),a[0]&4096&&(r.interactive=t[12]),a[0]&8192&&(r.ignorePointer=t[13]),a[0]&1024&&(r.userData=t[10]),a[0]&2048&&(r.dispose=t[11]),a[0]&16&&(r.viewportAware=t[4]),a[1]&1&&(r.$$scope={dirty:a,ctx:t}),!E&&a[0]&1&&(E=!0,r.inViewport=t[0],pg(()=>E=!1)),B.$set(r)},i(t){i||(AA(A.$$.fragment,t),AA(g.$$.fragment,t),AA(B.$$.fragment,t),i=!0)},o(t){gA(A.$$.fragment,t),gA(g.$$.fragment,t),gA(B.$$.fragment,t),i=!1},d(t){dA(A,t),t&&fA(I),dA(g,t),t&&fA(C),dA(B,t)}}}function kl(Q,A,I){let{$$slots:g={},$$scope:C}=A,{position:B=void 0}=A,{scale:E=void 0}=A,{rotation:i=void 0}=A,{viewportAware:o=!1}=A,{inViewport:e=!1}=A,{castShadow:t=void 0}=A,{receiveShadow:a=void 0}=A,{frustumCulled:s=void 0}=A,{renderOrder:D=void 0}=A,{visible:r=void 0}=A,{userData:n=void 0}=A,{dispose:h=void 0}=A,{interactive:w=!1}=A,{ignorePointer:G=!1}=A,{lookAt:S=void 0}=A,{geometry:l}=A,{material:y}=A,M=y,p=l;const{invalidate:k}=fg(),N=new eg(l,y),q=()=>N;function Y(R){e=R,I(0,e)}function b(R){KA.call(this,Q,R)}function d(R){KA.call(this,Q,R)}function m(R){KA.call(this,Q,R)}function F(R){KA.call(this,Q,R)}function Z(R){KA.call(this,Q,R)}function CA(R){KA.call(this,Q,R)}function v(R){KA.call(this,Q,R)}function BA(R){KA.call(this,Q,R)}function IA(R){KA.call(this,Q,R)}return Q.$$set=R=>{"position"in R&&I(1,B=R.position),"scale"in R&&I(2,E=R.scale),"rotation"in R&&I(3,i=R.rotation),"viewportAware"in R&&I(4,o=R.viewportAware),"inViewport"in R&&I(0,e=R.inViewport),"castShadow"in R&&I(5,t=R.castShadow),"receiveShadow"in R&&I(6,a=R.receiveShadow),"frustumCulled"in R&&I(7,s=R.frustumCulled),"renderOrder"in R&&I(8,D=R.renderOrder),"visible"in R&&I(9,r=R.visible),"userData"in R&&I(10,n=R.userData),"dispose"in R&&I(11,h=R.dispose),"interactive"in R&&I(12,w=R.interactive),"ignorePointer"in R&&I(13,G=R.ignorePointer),"lookAt"in R&&I(14,S=R.lookAt),"geometry"in R&&I(15,l=R.geometry),"material"in R&&I(16,y=R.material),"$$scope"in R&&I(31,C=R.$$scope)},Q.$$.update=()=>{Q.$$.dirty[0]&327680&&(y!==M?(q().material=y,k("Mesh: material changed")):k("Mesh: material props changed"),I(18,M=y)),Q.$$.dirty[0]&557056&&(l!==p?(q().geometry=l,k("Mesh: geometry changed")):k("Mesh: geometry props changed"),I(19,p=l))},[e,B,E,i,o,t,a,s,D,r,n,h,w,G,S,l,y,N,M,p,g,Y,b,d,m,F,Z,CA,v,BA,IA,C]}class ls extends iI{constructor(A){super(),oI(this,A,kl,ll,gI,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const ks=new II;ks.scale.set(0,0,0);ks.matrix;new bA().fromArray(new Array(16).fill(0));new uA(16777215);function yl(Q){let A;const I=Q[14].default,g=wI(I,Q,Q[18],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&262144)&&cI(g,I,C,C[18],A?SI(I,C[18],B,null):GI(C[18]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function Ml(Q){let A,I,g;function C(E){Q[15](E)}let B={object:Q[13],position:Q[1],scale:Q[2],rotation:Q[3],lookAt:Q[4],frustumCulled:Q[8],renderOrder:Q[9],visible:Q[10],userData:Q[11],dispose:Q[12],castShadow:Q[6],receiveShadow:Q[7],viewportAware:Q[5],$$slots:{default:[yl]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(B.inViewport=Q[0]),A=new pQ({props:B}),XI.push(()=>dg(A,"inViewport",C)),A.$on("viewportenter",Q[16]),A.$on("viewportleave",Q[17]),{c(){FA(A.$$.fragment)},l(E){RA(A.$$.fragment,E)},m(E,i){qA(A,E,i),g=!0},p(E,[i]){const o={};i&2&&(o.position=E[1]),i&4&&(o.scale=E[2]),i&8&&(o.rotation=E[3]),i&16&&(o.lookAt=E[4]),i&256&&(o.frustumCulled=E[8]),i&512&&(o.renderOrder=E[9]),i&1024&&(o.visible=E[10]),i&2048&&(o.userData=E[11]),i&4096&&(o.dispose=E[12]),i&64&&(o.castShadow=E[6]),i&128&&(o.receiveShadow=E[7]),i&32&&(o.viewportAware=E[5]),i&262144&&(o.$$scope={dirty:i,ctx:E}),!I&&i&1&&(I=!0,o.inViewport=E[0],pg(()=>I=!1)),A.$set(o)},i(E){g||(AA(A.$$.fragment,E),g=!0)},o(E){gA(A.$$.fragment,E),g=!1},d(E){dA(A,E)}}}function Kl(Q,A,I){let{$$slots:g={},$$scope:C}=A,{position:B=void 0}=A,{scale:E=void 0}=A,{rotation:i=void 0}=A,{lookAt:o=void 0}=A,{viewportAware:e=!1}=A,{inViewport:t=!1}=A,{castShadow:a=void 0}=A,{receiveShadow:s=void 0}=A,{frustumCulled:D=void 0}=A,{renderOrder:r=void 0}=A,{visible:n=void 0}=A,{userData:h=void 0}=A,{dispose:w=void 0}=A;const G=new NC;function S(M){t=M,I(0,t)}function l(M){KA.call(this,Q,M)}function y(M){KA.call(this,Q,M)}return Q.$$set=M=>{"position"in M&&I(1,B=M.position),"scale"in M&&I(2,E=M.scale),"rotation"in M&&I(3,i=M.rotation),"lookAt"in M&&I(4,o=M.lookAt),"viewportAware"in M&&I(5,e=M.viewportAware),"inViewport"in M&&I(0,t=M.inViewport),"castShadow"in M&&I(6,a=M.castShadow),"receiveShadow"in M&&I(7,s=M.receiveShadow),"frustumCulled"in M&&I(8,D=M.frustumCulled),"renderOrder"in M&&I(9,r=M.renderOrder),"visible"in M&&I(10,n=M.visible),"userData"in M&&I(11,h=M.userData),"dispose"in M&&I(12,w=M.dispose),"$$scope"in M&&I(18,C=M.$$scope)},[t,B,E,i,o,e,a,s,D,r,n,h,w,G,g,S,l,y,C]}class Ul extends iI{constructor(A){super(),oI(this,A,Kl,Ml,gI,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}function Nl(Q){let A;const I=Q[16].default,g=wI(I,Q,Q[27],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&134217728)&&cI(g,I,C,C[27],A?SI(I,C[27],B,null):GI(C[27]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function Jl(Q){let A,I,g,C,B;function E(o){Q[17](o)}let i={object:Q[1],lookAt:Q[5],position:Q[2],scale:Q[3],rotation:Q[4],castShadow:Q[7],receiveShadow:Q[8],frustumCulled:Q[9],renderOrder:Q[10],visible:Q[11],userData:Q[12],dispose:Q[13],viewportAware:Q[6],$$slots:{default:[Nl]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(i.inViewport=Q[0]),A=new pQ({props:i}),XI.push(()=>dg(A,"inViewport",E)),A.$on("viewportenter",Q[18]),A.$on("viewportleave",Q[19]),C=new Ss({props:{object:Q[1],interactive:Q[14],ignorePointer:Q[15]}}),C.$on("click",Q[20]),C.$on("contextmenu",Q[21]),C.$on("pointerup",Q[22]),C.$on("pointerdown",Q[23]),C.$on("pointerenter",Q[24]),C.$on("pointerleave",Q[25]),C.$on("pointermove",Q[26]),{c(){FA(A.$$.fragment),g=LI(),FA(C.$$.fragment)},l(o){RA(A.$$.fragment,o),g=HI(o),RA(C.$$.fragment,o)},m(o,e){qA(A,o,e),WA(o,g,e),qA(C,o,e),B=!0},p(o,[e]){const t={};e&2&&(t.object=o[1]),e&32&&(t.lookAt=o[5]),e&4&&(t.position=o[2]),e&8&&(t.scale=o[3]),e&16&&(t.rotation=o[4]),e&128&&(t.castShadow=o[7]),e&256&&(t.receiveShadow=o[8]),e&512&&(t.frustumCulled=o[9]),e&1024&&(t.renderOrder=o[10]),e&2048&&(t.visible=o[11]),e&4096&&(t.userData=o[12]),e&8192&&(t.dispose=o[13]),e&64&&(t.viewportAware=o[6]),e&134217728&&(t.$$scope={dirty:e,ctx:o}),!I&&e&1&&(I=!0,t.inViewport=o[0],pg(()=>I=!1)),A.$set(t);const a={};e&2&&(a.object=o[1]),e&16384&&(a.interactive=o[14]),e&32768&&(a.ignorePointer=o[15]),C.$set(a)},i(o){B||(AA(A.$$.fragment,o),AA(C.$$.fragment,o),B=!0)},o(o){gA(A.$$.fragment,o),gA(C.$$.fragment,o),B=!1},d(o){dA(A,o),o&&fA(g),dA(C,o)}}}function Fl(Q,A,I){let{$$slots:g={},$$scope:C}=A,{line:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A,{viewportAware:t=!1}=A,{inViewport:a=!1}=A,{castShadow:s=void 0}=A,{receiveShadow:D=void 0}=A,{frustumCulled:r=void 0}=A,{renderOrder:n=void 0}=A,{visible:h=void 0}=A,{userData:w=void 0}=A,{dispose:G=void 0}=A,{interactive:S=!1}=A,{ignorePointer:l=!1}=A;function y(F){a=F,I(0,a)}function M(F){KA.call(this,Q,F)}function p(F){KA.call(this,Q,F)}function k(F){KA.call(this,Q,F)}function N(F){KA.call(this,Q,F)}function q(F){KA.call(this,Q,F)}function Y(F){KA.call(this,Q,F)}function b(F){KA.call(this,Q,F)}function d(F){KA.call(this,Q,F)}function m(F){KA.call(this,Q,F)}return Q.$$set=F=>{"line"in F&&I(1,B=F.line),"position"in F&&I(2,E=F.position),"scale"in F&&I(3,i=F.scale),"rotation"in F&&I(4,o=F.rotation),"lookAt"in F&&I(5,e=F.lookAt),"viewportAware"in F&&I(6,t=F.viewportAware),"inViewport"in F&&I(0,a=F.inViewport),"castShadow"in F&&I(7,s=F.castShadow),"receiveShadow"in F&&I(8,D=F.receiveShadow),"frustumCulled"in F&&I(9,r=F.frustumCulled),"renderOrder"in F&&I(10,n=F.renderOrder),"visible"in F&&I(11,h=F.visible),"userData"in F&&I(12,w=F.userData),"dispose"in F&&I(13,G=F.dispose),"interactive"in F&&I(14,S=F.interactive),"ignorePointer"in F&&I(15,l=F.ignorePointer),"$$scope"in F&&I(27,C=F.$$scope)},[a,B,E,i,o,e,t,s,D,r,n,h,w,G,S,l,g,y,M,p,k,N,q,Y,b,d,m,C]}class Rl extends iI{constructor(A){super(),oI(this,A,Fl,Jl,gI,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function ql(Q){let A;const I=Q[20].default,g=wI(I,Q,Q[31],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&1)&&cI(g,I,C,C[31],A?SI(I,C[31],B,null):GI(C[31]),null)},i(C){A||(AA(g,C),A=!0)},o(C){gA(g,C),A=!1},d(C){g&&g.d(C)}}}function dl(Q){let A,I,g,C,B,E,i;A=new LB({props:{dispose:Q[11],object:Q[15]}}),g=new LB({props:{dispose:Q[11],object:Q[16]}});function o(t){Q[21](t)}let e={line:Q[17],position:Q[1],scale:Q[2],rotation:Q[3],lookAt:Q[14],castShadow:Q[5],receiveShadow:Q[6],frustumCulled:Q[7],renderOrder:Q[8],visible:Q[9],userData:Q[10],dispose:Q[11],interactive:Q[12],ignorePointer:Q[13],viewportAware:Q[4],$$slots:{default:[ql]},$$scope:{ctx:Q}};return Q[0]!==void 0&&(e.inViewport=Q[0]),B=new Rl({props:e}),XI.push(()=>dg(B,"inViewport",o)),B.$on("click",Q[22]),B.$on("contextmenu",Q[23]),B.$on("pointerup",Q[24]),B.$on("pointerdown",Q[25]),B.$on("pointerenter",Q[26]),B.$on("pointerleave",Q[27]),B.$on("pointermove",Q[28]),B.$on("viewportenter",Q[29]),B.$on("viewportleave",Q[30]),{c(){FA(A.$$.fragment),I=LI(),FA(g.$$.fragment),C=LI(),FA(B.$$.fragment)},l(t){RA(A.$$.fragment,t),I=HI(t),RA(g.$$.fragment,t),C=HI(t),RA(B.$$.fragment,t)},m(t,a){qA(A,t,a),WA(t,I,a),qA(g,t,a),WA(t,C,a),qA(B,t,a),i=!0},p(t,a){const s={};a[0]&2048&&(s.dispose=t[11]),a[0]&32768&&(s.object=t[15]),A.$set(s);const D={};a[0]&2048&&(D.dispose=t[11]),a[0]&65536&&(D.object=t[16]),g.$set(D);const r={};a[0]&2&&(r.position=t[1]),a[0]&4&&(r.scale=t[2]),a[0]&8&&(r.rotation=t[3]),a[0]&16384&&(r.lookAt=t[14]),a[0]&32&&(r.castShadow=t[5]),a[0]&64&&(r.receiveShadow=t[6]),a[0]&128&&(r.frustumCulled=t[7]),a[0]&256&&(r.renderOrder=t[8]),a[0]&512&&(r.visible=t[9]),a[0]&1024&&(r.userData=t[10]),a[0]&2048&&(r.dispose=t[11]),a[0]&4096&&(r.interactive=t[12]),a[0]&8192&&(r.ignorePointer=t[13]),a[0]&16&&(r.viewportAware=t[4]),a[1]&1&&(r.$$scope={dirty:a,ctx:t}),!E&&a[0]&1&&(E=!0,r.inViewport=t[0],pg(()=>E=!1)),B.$set(r)},i(t){i||(AA(A.$$.fragment,t),AA(g.$$.fragment,t),AA(B.$$.fragment,t),i=!0)},o(t){gA(A.$$.fragment,t),gA(g.$$.fragment,t),gA(B.$$.fragment,t),i=!1},d(t){dA(A,t),t&&fA(I),dA(g,t),t&&fA(C),dA(B,t)}}}function pl(Q,A,I){let{$$slots:g={},$$scope:C}=A,{position:B=void 0}=A,{scale:E=void 0}=A,{rotation:i=void 0}=A,{viewportAware:o=!1}=A,{inViewport:e=!1}=A,{castShadow:t=void 0}=A,{receiveShadow:a=void 0}=A,{frustumCulled:s=void 0}=A,{renderOrder:D=void 0}=A,{visible:r=void 0}=A,{userData:n=void 0}=A,{dispose:h=void 0}=A,{interactive:w=!1}=A,{ignorePointer:G=!1}=A,{lookAt:S=void 0}=A,{geometry:l}=A,{material:y}=A,M=y,p=l;const{invalidate:k}=fg(),N=new es(l,y),q=()=>N;function Y(R){e=R,I(0,e)}function b(R){KA.call(this,Q,R)}function d(R){KA.call(this,Q,R)}function m(R){KA.call(this,Q,R)}function F(R){KA.call(this,Q,R)}function Z(R){KA.call(this,Q,R)}function CA(R){KA.call(this,Q,R)}function v(R){KA.call(this,Q,R)}function BA(R){KA.call(this,Q,R)}function IA(R){KA.call(this,Q,R)}return Q.$$set=R=>{"position"in R&&I(1,B=R.position),"scale"in R&&I(2,E=R.scale),"rotation"in R&&I(3,i=R.rotation),"viewportAware"in R&&I(4,o=R.viewportAware),"inViewport"in R&&I(0,e=R.inViewport),"castShadow"in R&&I(5,t=R.castShadow),"receiveShadow"in R&&I(6,a=R.receiveShadow),"frustumCulled"in R&&I(7,s=R.frustumCulled),"renderOrder"in R&&I(8,D=R.renderOrder),"visible"in R&&I(9,r=R.visible),"userData"in R&&I(10,n=R.userData),"dispose"in R&&I(11,h=R.dispose),"interactive"in R&&I(12,w=R.interactive),"ignorePointer"in R&&I(13,G=R.ignorePointer),"lookAt"in R&&I(14,S=R.lookAt),"geometry"in R&&I(15,l=R.geometry),"material"in R&&I(16,y=R.material),"$$scope"in R&&I(31,C=R.$$scope)},Q.$$.update=()=>{Q.$$.dirty[0]&327680&&(y!==M?(q().material=y,k("LineSegments: material changed")):k("LineSegments: material props changed"),I(18,M=y)),Q.$$.dirty[0]&557056&&(l!==p?(q().geometry=l,k("LineSegments: geometry changed")):k("LineSegments: geometry props changed"),I(19,p=l))},[e,B,E,i,o,t,a,s,D,r,n,h,w,G,S,l,y,N,M,p,g,Y,b,d,m,F,Z,CA,v,BA,IA,C]}class fl extends iI{constructor(A){super(),oI(this,A,pl,dl,gI,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,lineSegments:17},null,[-1,-1])}get lineSegments(){return this.$$.ctx[17]}}function Yl(Q){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class jt extends iI{constructor(A){super(),oI(this,A,Yl,null,gI,{})}}new Proxy(jt,{get(Q,A){return Q[A]||jt}});Qo(Co,()=>new Co(ME));const bi=new WeakMap;class Vt extends _B{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,I,g,C){const B=new KE(this.manager);B.setPath(this.path),B.setResponseType("arraybuffer"),B.setRequestHeader(this.requestHeader),B.setWithCredentials(this.withCredentials),B.load(A,E=>{this.decodeDracoFile(E,I).catch(C)},g,C)}decodeDracoFile(A,I,g,C){const B={attributeIDs:g||this.defaultAttributeIDs,attributeTypes:C||this.defaultAttributeTypes,useUniqueIDs:!!g};return this.decodeGeometry(A,B).then(I)}decodeGeometry(A,I){const g=JSON.stringify(I);if(bi.has(A)){const o=bi.get(A);if(o.key===g)return o.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let C;const B=this.workerNextTaskID++,E=A.byteLength,i=this._getWorker(B,E).then(o=>(C=o,new Promise((e,t)=>{C._callbacks[B]={resolve:e,reject:t},C.postMessage({type:"decode",id:B,taskConfig:I,buffer:A},[A])}))).then(o=>this._createGeometry(o.geometry));return i.catch(()=>!0).then(()=>{C&&B&&this._releaseTask(C,B)}),bi.set(A,{key:g,promise:i}),i}_createGeometry(A){const I=new lg;A.index&&I.setIndex(new qI(A.index.array,1));for(let g=0;g<A.attributes.length;g++){const C=A.attributes[g],B=C.name,E=C.array,i=C.itemSize;I.setAttribute(B,new qI(E,i))}return I}_loadLibrary(A,I){const g=new KE(this.manager);return g.setPath(this.decoderPath),g.setResponseType(I),g.setWithCredentials(this.withCredentials),new Promise((C,B)=>{g.load(A,C,void 0,B)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",I=[];return A?I.push(this._loadLibrary("draco_decoder.js","text")):(I.push(this._loadLibrary("draco_wasm_wrapper.js","text")),I.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(I).then(g=>{const C=g[0];A||(this.decoderConfig.wasmBinary=g[1]);const B=ul.toString(),E=["/* draco decoder */",C,"","/* worker */",B.substring(B.indexOf("{")+1,B.lastIndexOf("}"))].join(`
					doesn't support WASM.`),B=Vg("br"),E=Qi(`
					I'm sorry.`),this.h()},l(i){A=_g(i,"P",{class:!0});var o=JC(A);I=Ei(o,"It seems your browser"),g=_g(o,"BR",{}),C=Ei(o,`
					doesn't support WASM.`),B=_g(o,"BR",{}),E=Ei(o,`
					I'm sorry.`),o.forEach(fA),this.h()},h(){sC(A,"class","text-xs")},m(i,o){WA(i,A,o),KC(A,I),KC(A,g),KC(A,C),KC(A,B),KC(A,E)},p:So,d(i){i&&fA(A)}}}function Oy(Q){let A,I;return A=new dk({props:{slot:"fallback",transform:!0,$$slots:{default:[xy]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){RA(A.$$.fragment,g)},m(g,C){qA(A,g,C),I=!0},p(g,C){const B={};C&8&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AA(A.$$.fragment,g),I=!0)},o(g){gA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function Zy(Q){let A,I;return A=new $k({props:{$$slots:{fallback:[Oy],default:[Ty]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){RA(A.$$.fragment,g)},m(g,C){qA(A,g,C),I=!0},p(g,C){const B={};C&11&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AA(A.$$.fragment,g),I=!0)},o(g){gA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function Wy(Q){let A,I,g,C;I=new mS({props:{$$slots:{default:[Zy]},$$scope:{ctx:Q}}});const B=Q[2].default,E=wI(B,Q,Q[3],null);return{c(){A=Vg("div"),FA(I.$$.fragment),g=LI(),E&&E.c(),this.h()},l(i){A=_g(i,"DIV",{class:!0});var o=JC(A);RA(I.$$.fragment,o),o.forEach(fA),g=HI(i),E&&E.l(i),this.h()},h(){sC(A,"class","wrapper svelte-12o3lt9")},m(i,o){WA(i,A,o),qA(I,A,null),WA(i,g,o),E&&E.m(i,o),C=!0},p(i,[o]){const e={};o&11&&(e.$$scope={dirty:o,ctx:i}),I.$set(e),E&&E.p&&(!C||o&8)&&cI(E,B,i,i[3],C?SI(B,i[3],o,null):GI(i[3]),null)},i(i){C||(AA(I.$$.fragment,i),AA(E,i),C=!0)},o(i){gA(I.$$.fragment,i),gA(E,i),C=!1},d(i){i&&fA(A),dA(I),i&&fA(g),E&&E.d(i)}}}function vy(Q,A,I){let{$$slots:g={},$$scope:C}=A,{controls:B=!1}=A,{input:E=null}=A;return Q.$$set=i=>{"controls"in i&&I(0,B=i.controls),"input"in i&&I(1,E=i.input),"$$scope"in i&&I(3,C=i.$$scope)},[B,E,g,C]}class QM extends iI{constructor(A){super(),oI(this,A,vy,Wy,gI,{controls:0,input:1})}}export{lI as $,_t as A,ME as B,IM as C,nl as D,Vt as E,KE as F,hy as G,dk as H,LB as I,nk as J,ZS as K,_B as L,Dk as M,Ss as N,pQ as O,Ql as P,Ul as Q,Jg as R,Mn as S,ZE as T,gB as U,u as V,QM as W,II as X,gy as Y,fk as Z,pk as _,XB as a,Sg as a0,Ay as a1,CM as a2,BM as a3,oy as a4,JQ as a5,BB as a6,HB as a7,Ok as a8,Gs as a9,ED as aa,yy as ab,ky as b,xg as c,pG as d,og as e,IB as f,dC as g,Se as h,fe as i,Ge as j,re as k,ti as l,Cn as m,ce as n,ne as o,ii as p,An as q,zD as r,EI as s,UC as t,Us as u,wQ as v,NG as w,Un as x,fg as y,Qo as z};