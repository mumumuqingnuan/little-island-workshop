/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gd=1,th=2,hi=3,Li=0,en=1,At=2;var vd=1,_d=2;var tr=100;var Ll=204,Dl=205;var yd=0,uf=1,df=2,Pi=0,pf=1,ff=2,mf=3,nh=4,gf=5,vf=6,_f=7;var xd=300,kr=301,Gr=302,Ul=303,Nl=304,yo=306,Ol=1e3,qn=1001,Fl=1002,mn=1003,yf=1004;var sa=1005;var Qt=1006,Zo=1007;var Xn=1008;var di=1009,Md=1010,bd=1011,Ps=1012,ih=1013,rr=1014,jn=1015,js=1016,rh=1017,sh=1018,Vr=1020,Sd=35902,wd=1021,Td=1022,qt=1023,Ed=1024,Ad=1025,Is=1026,Hr=1027,ah=1028,oh=1029,Cd=1030,lh=1031;var ch=1033,Ba=33776,za=33777,ka=33778,Ga=33779,Bl=35840,zl=35841,kl=35842,Gl=35843,Vl=36196,Hl=37492,Wl=37496,Xl=37808,jl=37809,ql=37810,Yl=37811,Zl=37812,Kl=37813,Jl=37814,$l=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,Va=36492,sc=36494,ac=36495,Rd=36283,oc=36284,lc=36285,cc=36286;var Wa=2300,hc=2301,Ko=2302,ru=2400,su=2401,au=2402;var Ci="",Jt="srgb",Fi="srgb-linear",hh="display-p3",xo="display-p3-linear",Xa="linear",it="srgb",ja="rec709",qa="p3";var Mr=7680;var Pd=515;var ou=35044;var lu="300 es",Wr=2e3,Ya=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,Fr=Math.PI/180,Ls=180/Math.PI;function hr(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Gt[255&i]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[255&e]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[63&t|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[255&n]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function Es(i,e,t){return(1-t)*i+t*e}function Nr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var yt={DEG2RAD:Fr,RAD2DEG:Ls,generateUUID:hr,clamp:wt,euclideanModulo:uc,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Es,damp:function(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(uc(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(cu=i);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Fr},radToDeg:function(i){return i*Ls},isPowerOfTwo:function(i){return(i&i-1)==0&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Xt,denormalize:Nr},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],f=n[8],g=r[0],v=r[3],m=r[6],_=r[1],x=r[4],y=r[7],w=r[2],S=r[5],P=r[8];return s[0]=a*g+o*_+l*w,s[3]=a*v+o*x+l*S,s[6]=a*m+o*y+l*P,s[1]=c*g+h*_+u*w,s[4]=c*v+h*x+u*S,s[7]=c*m+h*y+u*P,s[2]=p*g+d*_+f*w,s[5]=p*v+d*x+f*S,s[8]=p*m+d*y+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*s,d=c*s-a*l,f=t*u+n*p+r*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=p*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Oe;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xf(){let i=Ds("canvas");return i.style.display="block",i}var hu={};function Ha(i){i in hu||(hu[i]=!0,console.warn(i))}var uu=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),du=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ms={[Fi]:{transfer:Xa,primaries:ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Jt]:{transfer:it,primaries:ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xo]:{transfer:Xa,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(du),fromReference:i=>i.applyMatrix3(uu)},[hh]:{transfer:it,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(du),fromReference:i=>i.applyMatrix3(uu).convertLinearToSRGB()}},Mf=new Set([Fi,xo]),je={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ms[e].toReference;return(0,ms[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ms[i].primaries},getTransfer:function(i){return i===Ci?Xa:ms[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ms[e].luminanceCoefficients)}};function Br(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function $o(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var br,dc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Ds("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Br(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Br(t[n]/255)):t[n]=Br(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bf=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qo(r[a].image)):s.push(Qo(r[a]))}else s=Qo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sf=0,tn=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=qt,l=di,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=hr(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=xd,tn.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],f=l[9],g=l[2],v=l[6],m=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(f+v)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(d+1)/2,w=(m+1)/2,S=(h+p)/4,P=(u+g)/4,z=(f+v)/4;return x>y&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=S/n,s=P/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=S/r,s=z/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=z/s),this.set(n,r,s,t),this}let _=Math.sqrt((v-f)*(v-f)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(v-f)/_,this.y=(u-g)/_,this.z=(p-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],p=s[a+0],d=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=p,e[t+1]=d,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==p||c!==d||h!==f){let v=1-o,m=l*p+c*d+h*f+u*g,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let w=Math.sqrt(x),S=Math.atan2(w,m*_);v=Math.sin(v*S)/w,o=Math.sin(o*S)/w}let y=o*_;if(l=l*v+p*y,c=c*v+d*y,h=h*v+f*y,u=u*v+g*y,v===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],p=s[a+1],d=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*d-c*p,e[t+1]=l*f+h*p+c*u-o*d,e[t+2]=c*f+h*d+o*p-l*u,e[t+3]=h*f-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),p=l(n/2),d=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"YXZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"ZXY":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"ZYX":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"YZX":this._x=p*h*u+c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u-p*d*f;break;case"XZY":this._x=p*h*u-c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u+p*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new T,pu=new Yn,Dn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),oa.subVectors(this.max,gs),Sr.subVectors(e.a,gs),wr.subVectors(e.b,gs),Tr.subVectors(e.c,gs),bi.subVectors(wr,Sr),Si.subVectors(Tr,wr),Yi.subVectors(Sr,Tr);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!!tl(t,Sr,wr,Tr,oa)&&(t=[1,0,0,0,1,0,0,0,1],!!tl(t,Sr,wr,Tr,oa)&&(la.crossVectors(bi,Si),t=[la.x,la.y,la.z],tl(t,Sr,wr,Tr,oa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Rn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new T,new T,new T,new T,new T,new T,new T,new T],Rn=new T,aa=new Dn,Sr=new T,wr=new T,Tr=new T,bi=new T,Si=new T,Yi=new T,gs=new T,oa=new T,la=new T,Zi=new T;function tl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zi.fromArray(i,s);let o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wf=new Dn,vs=new T,nl=new T,Un=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(nl)),this.expandByPoint(vs.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new T,il=new T,ca=new T,wi=new T,rl=new T,ha=new T,sl=new T,sr=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){il.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(il);let s=.5*e.distanceTo(t),a=-this.direction.dot(ca),o=wi.dot(this.direction),l=-wi.dot(ca),c=wi.lengthSq(),h=Math.abs(1-a*a),u,p,d,f;if(h>0)if(u=a*l-o,p=a*o-l,f=s*h,u>=0)if(p>=-f)if(p<=f){let g=1/h;u*=g,p*=g,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-f?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c):p<=f?(u=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(il).addScaledVector(ca,p),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){rl.subVectors(t,e),ha.subVectors(n,e),sl.crossVectors(rl,ha);let a,o=this.direction.dot(sl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}wi.subVectors(this.origin,e);let l=a*this.direction.dot(ha.crossVectors(wi,ha));if(l<0)return null;let c=a*this.direction.dot(rl.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(sl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,p,d,f,g,v){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,p,d,f,g,v)}set(e,t,n,r,s,a,o,l,c,h,u,p,d,f,g,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=p,m[3]=d,m[7]=f,m[11]=g,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+f*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=f+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,f=c*h,g=c*u;t[0]=p+g*o,t[4]=f*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,f=c*h,g=c*u;t[0]=p-g*o,t[4]=-a*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-d,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-p*u,t[8]=f*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+f,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*l,d=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=a*h,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Ef)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ti.crossVectors(n,ln),Ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ti.crossVectors(n,ln)),Ti.normalize(),ua.crossVectors(ln,Ti),r[0]=Ti.x,r[4]=ua.x,r[8]=ln.x,r[1]=Ti.y,r[5]=ua.y,r[9]=ln.y,r[2]=Ti.z,r[6]=ua.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],f=n[2],g=n[6],v=n[10],m=n[14],_=n[3],x=n[7],y=n[11],w=n[15],S=r[0],P=r[4],z=r[8],F=r[12],N=r[1],V=r[5],H=r[9],K=r[13],j=r[2],J=r[6],ee=r[10],te=r[14],ne=r[3],U=r[7],q=r[11],E=r[15];return s[0]=a*S+o*N+l*j+c*ne,s[4]=a*P+o*V+l*J+c*U,s[8]=a*z+o*H+l*ee+c*q,s[12]=a*F+o*K+l*te+c*E,s[1]=h*S+u*N+p*j+d*ne,s[5]=h*P+u*V+p*J+d*U,s[9]=h*z+u*H+p*ee+d*q,s[13]=h*F+u*K+p*te+d*E,s[2]=f*S+g*N+v*j+m*ne,s[6]=f*P+g*V+v*J+m*U,s[10]=f*z+g*H+v*ee+m*q,s[14]=f*F+g*K+v*te+m*E,s[3]=_*S+x*N+y*j+w*ne,s[7]=_*P+x*V+y*J+w*U,s[11]=_*z+x*H+y*ee+w*q,s[15]=_*F+x*K+y*te+w*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+s*l*u-r*c*u-s*o*p+n*c*p+r*o*d-n*l*d)+e[7]*(+t*l*d-t*c*p+s*a*p-r*a*d+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*p+r*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],f=e[12],g=e[13],v=e[14],m=e[15],_=u*v*c-g*p*c+g*l*d-o*v*d-u*l*m+o*p*m,x=f*p*c-h*v*c-f*l*d+a*v*d+h*l*m-a*p*m,y=h*g*c-f*u*c+f*o*d-a*g*d-h*o*m+a*u*m,w=f*u*l-h*g*l-f*o*p+a*g*p+h*o*v-a*u*v,S=t*_+n*x+r*y+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/S;return e[0]=_*P,e[1]=(g*p*s-u*v*s-g*r*d+n*v*d+u*r*m-n*p*m)*P,e[2]=(o*v*s-g*l*s+g*r*c-n*v*c-o*r*m+n*l*m)*P,e[3]=(u*l*s-o*p*s-u*r*c+n*p*c+o*r*d-n*l*d)*P,e[4]=x*P,e[5]=(h*v*s-f*p*s+f*r*d-t*v*d-h*r*m+t*p*m)*P,e[6]=(f*l*s-a*v*s-f*r*c+t*v*c+a*r*m-t*l*m)*P,e[7]=(a*p*s-h*l*s+h*r*c-t*p*c-a*r*d+t*l*d)*P,e[8]=y*P,e[9]=(f*u*s-h*g*s-f*n*d+t*g*d+h*n*m-t*u*m)*P,e[10]=(a*g*s-f*o*s+f*n*c-t*g*c-a*n*m+t*o*m)*P,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*P,e[12]=w*P,e[13]=(h*g*r-f*u*r+f*n*p-t*g*p-h*n*v+t*u*v)*P,e[14]=(f*o*r-a*g*r-f*n*l+t*g*l+a*n*v-t*o*v)*P,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*p+t*o*p)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,p=s*c,d=s*h,f=s*u,g=a*h,v=a*u,m=o*u,_=l*c,x=l*h,y=l*u,w=n.x,S=n.y,P=n.z;return r[0]=(1-(g+m))*w,r[1]=(d+y)*w,r[2]=(f-x)*w,r[3]=0,r[4]=(d-y)*S,r[5]=(1-(p+m))*S,r[6]=(v+_)*S,r[7]=0,r[8]=(f+x)*P,r[9]=(v-_)*P,r[10]=(1-(p+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),o=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);let l=1/s,c=1/a,h=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r),d,f;if(o===Wr)d=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Ya)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),p=(t+e)*c,d=(n+r)*h,f,g;if(o===Wr)f=(a+s)*u,g=-2*u;else{if(o!==Ya)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Er=new T,Pn=new Ce,Tf=new T(0,0,0),Ef=new T(1,1,1),Ti=new T,ua=new T,ln=new T,fu=new Ce,mu=new Yn,Zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Af=0,gu=new T,Ar=new Yn,oi=new Ce,da=new T,_s=new T,Cf=new T,Rf=new Yn,vu=new T(1,0,0),_u=new T(0,1,0),yu=new T(0,0,1),xu={type:"added"},Pf={type:"removed"},Cr={type:"childadded",child:null},al={type:"childremoved",child:null},dt=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Zn,n=new Yn,r=new T(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Oe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(_s,da,this.up):oi.lookAt(da,_s,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(oi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};dt.DEFAULT_UP=new T(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new T,li=new T,ol=new T,ci=new T,Rr=new T,Pr=new T,Mu=new T,ll=new T,cl=new T,hl=new T,ul=new qe,dl=new qe,pl=new qe,Ri=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),li.subVectors(n,t),ol.subVectors(e,t);let a=In.dot(In),o=In.dot(li),l=In.dot(ol),c=li.dot(li),h=li.dot(ol),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,f=(a*h-o*l)*p;return s.set(1-d-f,f,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci)!==null&&ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ul.setScalar(0),dl.setScalar(0),pl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ul,s.x),a.addScaledVector(dl,s.y),a.addScaledVector(pl,s.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),li.subVectors(e,t),In.cross(li).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),.5*In.cross(li).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Rr.subVectors(r,n),Pr.subVectors(s,n),ll.subVectors(e,n);let l=Rr.dot(ll),c=Pr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,r);let h=Rr.dot(cl),u=Pr.dot(cl);if(h>=0&&u<=h)return t.copy(r);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Rr,a);hl.subVectors(e,s);let d=Rr.dot(hl),f=Pr.dot(hl);if(f>=0&&d<=f)return t.copy(s);let g=d*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Pr,o);let v=h*f-d*u;if(v<=0&&u-h>=0&&d-f>=0)return Mu.subVectors(s,r),o=(u-h)/(u-h+(d-f)),t.copy(r).addScaledVector(Mu,o);let m=1/(v+g+p);return a=g*m,o=p*m,t.copy(n).addScaledVector(Rr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},pa={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=uc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return je.fromWorkingColorSpace(Vt.copy(this),e),65536*Math.round(wt(255*Vt.r,0,255))+256*Math.round(wt(255*Vt.g,0,255))+Math.round(wt(255*Vt.b,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Jt){je.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,r=Vt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(pa);let n=Es(Ei.h,pa.h,t),r=Es(Ei.s,pa.s,t),s=Es(Ei.l,pa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new pe;pe.NAMES=Ld;var If=0,fi=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=1,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_g=Lf();function Lf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var St=new T,fa=new ce,Xe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ou&&(e.usage=this.usage),e}};var Ja=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $a=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Se=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Df=0,fn=new Ce,ml=new dt,Ir=new T,cn=new Dn,ys=new Dn,Lt=new T,Ie=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?$a:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(cn.min,ys.min),cn.expandByPoint(Lt),Lt.addVectors(cn.max,ys.max),cn.expandByPoint(Lt)):(cn.expandByPoint(ys.min),cn.expandByPoint(ys.max))}cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Lt.add(Ir)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new T,l[z]=new T;let c=new T,h=new T,u=new T,p=new ce,d=new ce,f=new ce,g=new T,v=new T;function m(z,F,N){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,N),p.fromBufferAttribute(s,z),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,N),h.sub(c),u.sub(c),d.sub(p),f.sub(p);let V=1/(d.x*f.y-f.x*d.y);isFinite(V)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-d.y).multiplyScalar(V),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(V),o[z].add(g),o[F].add(g),o[N].add(g),l[z].add(v),l[F].add(v),l[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,F=_.length;z<F;++z){let N=_[z],V=N.start;for(let H=V,K=V+N.count;H<K;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let x=new T,y=new T,w=new T,S=new T;function P(z){w.fromBufferAttribute(r,z),S.copy(w);let F=o[z];x.copy(F),x.sub(w.multiplyScalar(w.dot(F))).normalize(),y.crossVectors(S,F);let N=y.dot(l[z])<0?-1:1;a.setXYZW(z,x.x,x.y,x.z,N)}for(let z=0,F=_.length;z<F;++z){let N=_[z],V=N.start;for(let H=V,K=V+N.count;H<K;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let p=0,d=e.count;p<d;p+=3){let f=e.getX(p+0),g=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,f=0;for(let g=0,v=l.length;g<v;g++){d=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let m=0;m<h;m++)p[f++]=c[d++]}return new Xe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let p=e(c[h],n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bu=new Ce,Ki=new sr,ma=new Un,Su=new T,ga=new T,va=new T,_a=new T,gl=new T,ya=new T,wu=new T,xa=new T,Te=class extends dt{constructor(e=new Ie,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(gl.fromBufferAttribute(u,e),a?ya.addScaledVector(gl,h):ya.addScaledVector(gl.sub(t),h))}t.add(ya)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),ma.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ma,Su)===null||Ki.origin.distanceToSquared(Su)>(e.far-e.near)**2))return;bu.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(bu),n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ki)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){let v=p[f],m=a[v.materialIndex];for(let _=Math.max(v.start,d.start),x=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));_<x;_+=3)r=Ma(this,m,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);f<g;f+=3)r=Ma(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){let v=p[f],m=a[v.materialIndex];for(let _=Math.max(v.start,d.start),x=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));_<x;_+=3)r=Ma(this,m,e,n,c,h,u,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);f<g;f+=3)r=Ma(this,a,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Ma(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,va),i.getVertexPosition(c,_a);let h=(function(u,p,d,f,g,v,m,_){let x;if(x=p.side===en?f.intersectTriangle(m,v,g,!0,_):f.intersectTriangle(g,v,m,p.side===Li,_),x===null)return null;xa.copy(_),xa.applyMatrix4(u.matrixWorld);let y=d.ray.origin.distanceTo(xa);return y<d.near||y>d.far?null:{distance:y,point:xa.clone(),object:u}})(i,e,t,n,ga,va,_a,wu);if(h){let u=new T;Ri.getBarycoord(wu,ga,va,_a,u),r&&(h.uv=Ri.getInterpolatedAttribute(r,o,l,c,u,new ce)),s&&(h.uv1=Ri.getInterpolatedAttribute(s,o,l,c,u,new ce)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new T,materialIndex:0};Ri.getNormal(ga,va,_a,p.normal),h.face=p,h.barycoord=u}return h}var Nn=class i extends Ie{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;function f(g,v,m,_,x,y,w,S,P,z,F){let N=y/P,V=w/z,H=y/2,K=w/2,j=S/2,J=P+1,ee=z+1,te=0,ne=0,U=new T;for(let q=0;q<ee;q++){let E=q*V-K;for(let L=0;L<J;L++){let Y=L*N-H;U[g]=Y*_,U[v]=E*x,U[m]=j,c.push(U.x,U.y,U.z),U[g]=0,U[v]=0,U[m]=S>0?1:-1,h.push(U.x,U.y,U.z),u.push(L/P),u.push(1-q/z),te+=1}}for(let q=0;q<z;q++)for(let E=0;E<P;E++){let L=p+E+J*q,Y=p+E+J*(q+1),ie=p+(E+1)+J*(q+1),C=p+(E+1)+J*q;l.push(L,Y,C),l.push(Y,ie,C),ne+=6}o.addGroup(d,ne,F),d+=ne,p+=te}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Xr(i[t]);for(let r in n)e[r]=n[r]}return e}function Dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Uf={clone:Xr,merge:jt},pt=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ns=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new T,Tu=new ce,Eu=new ce,$t=class extends Ns{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ls*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Fr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ls*Math.atan(Math.tan(.5*Fr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,Eu),t.subVectors(Eu,Tu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Fr*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,mc=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(Lr,1,e,t);r.layers=this.layers,this.add(r);let s=new $t(Lr,1,e,t);s.layers=this.layers,this.add(s);let a=new $t(Lr,1,e,t);a.layers=this.layers,this.add(a);let o=new $t(Lr,1,e,t);o.layers=this.layers,this.add(o);let l=new $t(Lr,1,e,t);l.layers=this.layers,this.add(l);let c=new $t(Lr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ya)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Qa=class extends tn{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:kr,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gc=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nn(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:0});s.uniforms.tEquirect.value=t;let a=new Te(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Qt),new mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},vl=new T,Nf=new T,Of=new Oe,ui=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vl.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Of.getNormalMatrix(e),r=this.coplanarPoint(vl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Un,ba=new T,jr=class{constructor(e=new ui,t=new ui,n=new ui,r=new ui,s=new ui,a=new ui){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],p=r[7],d=r[8],f=r[9],g=r[10],v=r[11],m=r[12],_=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,p-c,v-d,y-m).normalize(),n[1].setComponents(l+s,p+c,v+d,y+m).normalize(),n[2].setComponents(l+a,p+h,v+f,y+_).normalize(),n[3].setComponents(l-a,p-h,v-f,y-_).normalize(),n[4].setComponents(l-o,p-u,v-g,y-x).normalize(),t===Wr)n[5].setComponents(l+o,p+u,v+g,y+x).normalize();else{if(t!==Ya)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ff(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,p)=>u.start-p.start));let h=0;for(let u=1;u<c.length;u++){let p=c[h],d=c[u];d.start<=p.start+p.count+1?p.count=Math.max(p.count,d.start+d.count-p.start):(++h,c[h]=d)}c.length=h+1;for(let u=0,p=c.length;u<p;u++){let d=c[u];i.bufferSubData(o,d.start*l.BYTES_PER_ELEMENT,l,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ft=class i extends Ie{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,p=t/l,d=[],f=[],g=[],v=[];for(let m=0;m<h;m++){let _=m*p-a;for(let x=0;x<c;x++){let y=x*u-s;f.push(y,-_,0),g.push(0,0,1),v.push(x/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let x=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),S=_+1+c*m;d.push(x,y,S),d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},de={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Wn={basic:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:jt([de.points,de.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:jt([de.common,de.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:jt([de.sprite,de.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:jt([de.common,de.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:jt([de.lights,de.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Wn.physical={uniforms:jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Sa={r:0,b:0,g:0},$i=new Zn,Bf=new Ce;function zf(i,e,t,n,r,s,a){let o=new pe(0),l,c,h=s===!0?0:1,u=null,p=0,d=null;function f(v){let m=v.isScene===!0?v.background:null;return m&&m.isTexture&&(m=(v.backgroundBlurriness>0?t:e).get(m)),m}function g(v,m){v.getRGB(Sa,Dd(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(v,m=1){o.set(v),h=m,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,g(o,h)},render:function(v){let m=!1,_=f(v);_===null?g(o,h):_&&_.isColor&&(g(_,1),m=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(v,m){let _=f(m);_&&(_.isCubeTexture||_.mapping===yo)?(c===void 0&&(c=new Te(new Nn(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Xr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),$i.copy(m.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler($i)),c.material.toneMapped=je.getTransfer(_.colorSpace)!==it,u===_&&p===_.version&&d===i.toneMapping||(c.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Te(new ft(2,2),new pt({name:"BackgroundMaterial",uniforms:Xr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&p===_.version&&d===i.toneMapping||(l.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function kf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(m){return i.bindVertexArray(m)}function l(m){return i.deleteVertexArray(m)}function c(m){let _=[],x=[],y=[];for(let w=0;w<t;w++)_[w]=0,x[w]=0,y[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:y,object:m,attributes:{},index:null}}function h(){let m=s.newAttributes;for(let _=0,x=m.length;_<x;_++)m[_]=0}function u(m){p(m,0)}function p(m,_){let x=s.newAttributes,y=s.enabledAttributes,w=s.attributeDivisors;x[m]=1,y[m]===0&&(i.enableVertexAttribArray(m),y[m]=1),w[m]!==_&&(i.vertexAttribDivisor(m,_),w[m]=_)}function d(){let m=s.newAttributes,_=s.enabledAttributes;for(let x=0,y=_.length;x<y;x++)_[x]!==m[x]&&(i.disableVertexAttribArray(x),_[x]=0)}function f(m,_,x,y,w,S,P){P===!0?i.vertexAttribIPointer(m,_,x,w,S):i.vertexAttribPointer(m,_,x,y,w,S)}function g(){v(),a=!0,s!==r&&(s=r,o(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(m,_,x,y,w){let S=!1,P=(function(z,F,N){let V=N.wireframe===!0,H=n[z.id];H===void 0&&(H={},n[z.id]=H);let K=H[F.id];K===void 0&&(K={},H[F.id]=K);let j=K[V];return j===void 0&&(j=c(i.createVertexArray()),K[V]=j),j})(y,x,_);s!==P&&(s=P,o(s.object)),S=(function(z,F,N,V){let H=s.attributes,K=F.attributes,j=0,J=N.getAttributes();for(let ee in J)if(J[ee].location>=0){let te=H[ee],ne=K[ee];if(ne===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;j++}return s.attributesNum!==j||s.index!==V})(m,y,x,w),S&&(function(z,F,N,V){let H={},K=F.attributes,j=0,J=N.getAttributes();for(let ee in J)if(J[ee].location>=0){let te=K[ee];te===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(te=z.instanceColor));let ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),H[ee]=ne,j++}s.attributes=H,s.attributesNum=j,s.index=V})(m,y,x,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,(function(z,F,N,V){h();let H=V.attributes,K=N.getAttributes(),j=F.defaultAttributeValues;for(let J in K){let ee=K[J];if(ee.location>=0){let te=H[J];if(te===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(te=z.instanceColor)),te!==void 0){let ne=te.normalized,U=te.itemSize,q=e.get(te);if(q===void 0)continue;let E=q.buffer,L=q.type,Y=q.bytesPerElement,ie=L===i.INT||L===i.UNSIGNED_INT||te.gpuType===ih;if(te.isInterleavedBufferAttribute){let C=te.data,M=C.stride,I=te.offset;if(C.isInstancedInterleavedBuffer){for(let X=0;X<ee.locationSize;X++)p(ee.location+X,C.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let X=0;X<ee.locationSize;X++)u(ee.location+X);i.bindBuffer(i.ARRAY_BUFFER,E);for(let X=0;X<ee.locationSize;X++)f(ee.location+X,U/ee.locationSize,L,ne,M*Y,(I+U/ee.locationSize*X)*Y,ie)}else{if(te.isInstancedBufferAttribute){for(let C=0;C<ee.locationSize;C++)p(ee.location+C,te.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let C=0;C<ee.locationSize;C++)u(ee.location+C);i.bindBuffer(i.ARRAY_BUFFER,E);for(let C=0;C<ee.locationSize;C++)f(ee.location+C,U/ee.locationSize,L,ne,U*Y,U/ee.locationSize*C*Y,ie)}}else if(j!==void 0){let ne=j[J];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(ee.location,ne);break;case 3:i.vertexAttrib3fv(ee.location,ne);break;case 4:i.vertexAttrib4fv(ee.location,ne);break;default:i.vertexAttrib1fv(ee.location,ne)}}}}d()})(m,_,x,y),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:g,resetDefaultState:v,dispose:function(){g();for(let m in n){let _=n[m];for(let x in _){let y=_[x];for(let w in y)l(y[w].object),delete y[w];delete _[x]}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;let _=n[m.id];for(let x in _){let y=_[x];for(let w in y)l(y[w].object),delete y[w];delete _[x]}delete n[m.id]},releaseStatesOfProgram:function(m){for(let _ in n){let x=n[_];if(x[m.id]===void 0)continue;let y=x[m.id];for(let w in y)l(y[w].object),delete y[w];delete x[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function Gf(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,n,l[u])}}}function Vf(i,e,t,n){let r;function s(p){if(p==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let p=e.get("EXT_clip_control");p.clipControlEXT(p.LOWER_LEFT_EXT,p.ZERO_TO_ONE_EXT)}let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let p=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(p){return p===qt||n.convert(p)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(p){let d=p===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(p!==di&&n.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&p!==jn&&!d)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Hf(i){let e=this,t=null,n=0,r=!1,s=!1,a=new ui,o=new Oe,l={value:null,needsUpdate:!1};function c(h,u,p,d){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,d!==!0||g===null){let v=p+4*f,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<v)&&(g=new Float32Array(v));for(let _=0,x=p;_!==f;++_,x+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||r;return r=u,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,v=i.get(h);if(!r||d===null||d.length===0||s&&!g)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let m=s?0:n,_=4*m,x=v.clippingState||null;l.value=x,x=c(d,u,_,p);for(let y=0;y!==_;++y)x[y]=t[y];v.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}}}function Wf(i){let e=new WeakMap;function t(r,s){return s===Ul?r.mapping=kr:s===Nl&&(r.mapping=Gr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Ul||s===Nl){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new gc(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var qr=class extends Ns{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=[.125,.215,.35,.446,.526,.582],xs=20,_l=new qr,Cu=new pe,yl=null,xl=0,Ml=0,bl=!1,er=(1+Math.sqrt(5))/2,Dr=1/er,Ru=[new T(-er,Dr,0),new T(er,Dr,0),new T(-Dr,0,er),new T(Dr,0,er),new T(0,er,-Dr),new T(0,er,Dr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,xl,Ml),this._renderer.xr.enabled=bl,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:js,format:qt,colorSpace:Fi,depthBuffer:!1},r=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Au.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);l.push(d);let f=1/d;p>a-4?f=Au[p-a+4-1]:p===0&&(f=0),c.push(f);let g=1/(d-2),v=-g,m=1+g,_=[v,v,m,v,m,m,v,v,m,m,v,m],x=6,y=6,w=3,S=2,P=1,z=new Float32Array(w*y*x),F=new Float32Array(S*y*x),N=new Float32Array(P*y*x);for(let H=0;H<x;H++){let K=H%3*2/3-1,j=H>2?0:-1,J=[K,j,0,K+2/3,j,0,K+2/3,j+1,0,K,j,0,K+2/3,j+1,0,K,j+1,0];z.set(J,w*y*H),F.set(_,S*y*H);let ee=[H,H,H,H,H,H];N.set(ee,P*y*H)}let V=new Ie;V.setAttribute("position",new Xe(z,w)),V.setAttribute("uv",new Xe(F,S)),V.setAttribute("faceIndex",new Xe(N,P)),o.push(V),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(xs),h=new T(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:uh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,r){let s=new $t(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Cu),l.toneMapping=Pi,l.autoClear=!1;let u=new Ft({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Te(new Nn,u),d=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,d=!0):(u.color.copy(Cu),d=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):v===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let m=this._cubeSize;wa(r,v*m,g>2?m:0,m,m),l.setRenderTarget(r),d&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===kr||e.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;wa(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(r-s-1)%Ru.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Te(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,f=s/d,g=isFinite(s)?1+Math.floor(3*f):xs;g>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let v=[],m=0;for(let y=0;y<xs;++y){let w=y/f,S=Math.exp(-w*w/2);v.push(S),y===0?m+=S:y<g&&(m+=2*S)}for(let y=0;y<v.length;y++)v[y]=v[y]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-n;let x=this._sizeLods[r];wa(t,3*x*(r>_-4?r-_+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,_l)}};function Pu(i,e,t){let n=new pi(i,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Iu(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lu(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Xf(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Ul||s===Nl,o=s===kr||s===Gr;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new eo(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let p=0,d=6;for(let f=0;f<d;f++)u[f]!==void 0&&p++;return p===d})(h)?(t===null&&(t=new eo(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function jf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ha("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qf(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let p=c.morphAttributes[u];for(let d=0,f=p.length;d<f;d++)e.remove(p[d])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,p=0;if(h!==null){let g=h.array;p=h.version;for(let v=0,m=g.length;v<m;v+=3){let _=g[v+0],x=g[v+1],y=g[v+2];c.push(_,x,x,y,y,_)}}else{if(u===void 0)return;{let g=u.array;p=u.version;for(let v=0,m=g.length/3-1;v<m;v+=3){let _=v+0,x=v+1,y=v+2;c.push(_,x,x,y,y,_)}}}let d=new(Id(c)?$a:Ja)(c,1);d.version=p;let f=s.get(l);f&&e.remove(f),s.set(l,d)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let p=h[u];for(let d=0,f=p.length;d<f;d++)e.update(p[d],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Yf(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<o.length;p++)a(o[p]/s,l[p],h[p]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let p=0;for(let d=0;d<c;d++)p+=l[d];for(let d=0;d<h.length;d++)t.update(p,n,h[d])}}}function Zf(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Kf(i,e,t){let n=new WeakMap,r=new qe;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let z=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],_=0;p===!0&&(_=1),d===!0&&(_=2),f===!0&&(_=3);let x=a.attributes.position.count*_,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*y*4*h),S=new Ka(w,x,y,h);S.type=jn,S.needsUpdate=!0;let P=4*_;for(let F=0;F<h;F++){let N=g[F],V=v[F],H=m[F],K=x*y*4*F;for(let j=0;j<N.count;j++){let J=j*P;p===!0&&(r.fromBufferAttribute(N,j),w[K+J+0]=r.x,w[K+J+1]=r.y,w[K+J+2]=r.z,w[K+J+3]=0),d===!0&&(r.fromBufferAttribute(V,j),w[K+J+4]=r.x,w[K+J+5]=r.y,w[K+J+6]=r.z,w[K+J+7]=0),f===!0&&(r.fromBufferAttribute(H,j),w[K+J+8]=r.x,w[K+J+9]=r.y,w[K+J+10]=r.z,w[K+J+11]=H.itemSize===4?r.w:1)}}u={count:h,texture:S,size:new ce(x,y)},n.set(a,u),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let f=0;f<l.length;f++)p+=l[f];let d=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",d),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Jf(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var to=class extends tn{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==Is&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=rr),n===void 0&&h===Hr&&(n=Vr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nd=new tn,Du=new to(1,1),Od=new Ka,Fd=new fc,Bd=new Qa,Uu=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function Qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $f(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function em(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function tm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),Et(t,n)}}function im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Et(t,n)}}function rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Et(t,n)}}function sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function am(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function om(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function cm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function um(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function dm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function pm(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=Pd,s=Du):s=Nd,t.setTexture2D(e||s,r)}function fm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fd,r)}function mm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bd,r)}function gm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Od,r)}function vm(i,e){i.uniform1fv(this.addr,e)}function _m(i,e){let t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function ym(i,e){let t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){let t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Mm(i,e){let t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bm(i,e){let t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){let t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wm(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function Em(i,e){i.uniform3iv(this.addr,e)}function Am(i,e){i.uniform4iv(this.addr,e)}function Cm(i,e){i.uniform1uiv(this.addr,e)}function Rm(i,e){i.uniform2uiv(this.addr,e)}function Pm(i,e){i.uniform3uiv(this.addr,e)}function Im(i,e){i.uniform4uiv(this.addr,e)}function Lm(i,e,t){let n=this.cache,r=e.length,s=Mo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Nd,s[a])}function Dm(i,e,t){let n=this.cache,r=e.length,s=Mo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Fd,s[a])}function Um(i,e,t){let n=this.cache,r=e.length,s=Mo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bd,s[a])}function Nm(i,e,t){let n=this.cache,r=e.length,s=Mo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Od,s[a])}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return $f;case 35664:return Qf;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}})(t.type)}},_c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return vm;case 35664:return _m;case 35665:return ym;case 35666:return xm;case 35674:return Mm;case 35675:return bm;case 35676:return Sm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Rm;case 36295:return Pm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}})(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function Om(i,e,t){let n=i.name,r=n.length;for(Sl.lastIndex=0;;){let s=Sl.exec(n),a=Sl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){zu(t,c===void 0?new vc(o,i,e):new _c(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new yc(o),zu(t,h)),t=h}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Om(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function ku(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fm=37297,Bm=0;function Gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),p=Math.min(l+6,c.length);for(let d=u;d<p;d++){let f=d+1;h.push(`${f===l?">":" "} ${f}: ${c[d]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function zm(i,e){let t=(function(n){let r=je.getPrimaries(je.workingColorSpace),s=je.getPrimaries(n),a;switch(r===s?a="":r===qa&&s===ja?a="LinearDisplayP3ToLinearSRGB":r===ja&&s===qa&&(a="LinearSRGBToLinearDisplayP3"),n){case Fi:case xo:return[a,"LinearTransferOETF"];case Jt:case hh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function km(i,e){let t;switch(e){case pf:t="Linear";break;case ff:t="Reinhard";break;case mf:t="Cineon";break;case nh:t="ACESFilmic";break;case vf:t="AgX";break;case _f:t="Neutral";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ta=new T;function Gm(){return je.getLuminanceCoefficients(Ta),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ta.x.toFixed(4)}, ${Ta.y.toFixed(4)}, ${Ta.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ms(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(Vm,Wm)}var Hm=new Map;function Wm(i,e){let t=Ne[e];if(t===void 0){let n=Hm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return xc(t)}var Xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(Xm,jm)}function jm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qm(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){let H="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===gd?H="SHADOWMAP_TYPE_PCF":V.shadowMapType===th?H="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===hi&&(H="SHADOWMAP_TYPE_VSM"),H})(t),c=(function(V){let H="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case kr:case Gr:H="ENVMAP_TYPE_CUBE";break;case yo:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),h=(function(V){let H="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===Gr&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(V){let H="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case yd:H="ENVMAP_BLENDING_MULTIPLY";break;case uf:H="ENVMAP_BLENDING_MIX";break;case df:H="ENVMAP_BLENDING_ADD"}return H})(t),p=(function(V){let H=V.envMapCubeUVHeight;if(H===null)return null;let K=Math.log2(H)-2,j=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:j,maxMip:K}})(t),d=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)})(t),f=(function(V){let H=[];for(let K in V){let j=V[K];j!==!1&&H.push("#define "+K+" "+j)}return H.join(`
`)})(s),g=r.createProgram(),v,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(v=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Pi?km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,zm("linearToOutputTexel",t.outputColorSpace),Gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=xc(a),a=Vu(a,t),a=Hu(a,t),o=xc(o),o=Vu(o,t),o=Hu(o,t),a=Wu(a),o=Wu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=_+v+a,y=_+m+o,w=ku(r,r.VERTEX_SHADER,x),S=ku(r,r.FRAGMENT_SHADER,y);function P(V){if(i.debug.checkShaderErrors){let H=r.getProgramInfoLog(g).trim(),K=r.getShaderInfoLog(w).trim(),j=r.getShaderInfoLog(S).trim(),J=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,S);else{let te=Gu(r,w,"vertex"),ne=Gu(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+te+`
`+ne)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):K!==""&&j!==""||(ee=!1);ee&&(V.diagnostics={runnable:J,programLog:H,vertexShader:{log:K,prefix:v},fragmentShader:{log:j,prefix:m}})}r.deleteShader(w),r.deleteShader(S),z=new zr(r,g),F=(function(H,K){let j={},J=H.getProgramParameter(K,H.ACTIVE_ATTRIBUTES);for(let ee=0;ee<J;ee++){let te=H.getActiveAttrib(K,ee),ne=te.name,U=1;te.type===H.FLOAT_MAT2&&(U=2),te.type===H.FLOAT_MAT3&&(U=3),te.type===H.FLOAT_MAT4&&(U=4),j[ne]={type:te.type,location:H.getAttribLocation(K,ne),locationSize:U}}return j})(r,g)}let z,F;r.attachShader(g,w),r.attachShader(g,S),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),this.getUniforms=function(){return z===void 0&&P(this),z},this.getAttributes=function(){return F===void 0&&P(this),F};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(g,Fm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}var Ym=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bc(e),t.set(e,n)),n}},bc=class{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}};function Zm(i,e,t,n,r,s,a){let o=new Us,l=new Mc,c=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,x,y,w){let S=y.fog,P=w.geometry,z=m.isMeshStandardMaterial?y.environment:null,F=(m.isMeshStandardMaterial?t:e).get(m.envMap||z),N=F&&F.mapping===yo?F.image.height:null,V=g[m.type];m.precision!==null&&(f=r.getMaxPrecision(m.precision),f!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));let H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=H!==void 0?H.length:0,j,J,ee,te,ne=0;if(P.morphAttributes.position!==void 0&&(ne=1),P.morphAttributes.normal!==void 0&&(ne=2),P.morphAttributes.color!==void 0&&(ne=3),V){let ps=Wn[V];j=ps.vertexShader,J=ps.fragmentShader}else j=m.vertexShader,J=m.fragmentShader,l.update(m),ee=l.getVertexShaderID(m),te=l.getFragmentShaderID(m);let U=i.getRenderTarget(),q=w.isInstancedMesh===!0,E=w.isBatchedMesh===!0,L=!!m.map,Y=!!m.matcap,ie=!!F,C=!!m.aoMap,M=!!m.lightMap,I=!!m.bumpMap,X=!!m.normalMap,R=!!m.displacementMap,D=!!m.emissiveMap,b=!!m.metalnessMap,B=!!m.roughnessMap,O=m.anisotropy>0,re=m.clearcoat>0,W=m.dispersion>0,se=m.iridescence>0,le=m.sheen>0,ae=m.transmission>0,ge=O&&!!m.anisotropyMap,_e=re&&!!m.clearcoatMap,xe=re&&!!m.clearcoatNormalMap,Le=re&&!!m.clearcoatRoughnessMap,ze=se&&!!m.iridescenceMap,Be=se&&!!m.iridescenceThicknessMap,we=le&&!!m.sheenColorMap,Ve=le&&!!m.sheenRoughnessMap,Je=!!m.specularMap,lt=!!m.specularColorMap,be=!!m.specularIntensityMap,ke=ae&&!!m.transmissionMap,$e=ae&&!!m.thicknessMap,ta=!!m.gradientMap,xr=!!m.alphaMap,on=m.alphaTest>0,ri=!!m.alphaHash,Hi=!!m.extensions,k=Pi;m.toneMapped&&(U!==null&&U.isXRRenderTarget!==!0||(k=i.toneMapping));let Wi={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:j,fragmentShader:J,defines:m.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:E,batchingColor:E&&w._colorsTexture!==null,instancing:q,instancingColor:q&&w.instanceColor!==null,instancingMorph:q&&w.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Fi,alphaToCoverage:!!m.alphaToCoverage,map:L,matcap:Y,envMap:ie,envMapMode:ie&&F.mapping,envMapCubeUVHeight:N,aoMap:C,lightMap:M,bumpMap:I,normalMap:X,displacementMap:d&&R,emissiveMap:D,normalMapObjectSpace:X&&m.normalMapType===1,normalMapTangentSpace:X&&m.normalMapType===0,metalnessMap:b,roughnessMap:B,anisotropy:O,anisotropyMap:ge,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:xe,clearcoatRoughnessMap:Le,dispersion:W,iridescence:se,iridescenceMap:ze,iridescenceThicknessMap:Be,sheen:le,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:Je,specularColorMap:lt,specularIntensityMap:be,transmission:ae,transmissionMap:ke,thicknessMap:$e,gradientMap:ta,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:xr,alphaTest:on,alphaHash:ri,combine:m.combine,mapUv:L&&v(m.map.channel),aoMapUv:C&&v(m.aoMap.channel),lightMapUv:M&&v(m.lightMap.channel),bumpMapUv:I&&v(m.bumpMap.channel),normalMapUv:X&&v(m.normalMap.channel),displacementMapUv:R&&v(m.displacementMap.channel),emissiveMapUv:D&&v(m.emissiveMap.channel),metalnessMapUv:b&&v(m.metalnessMap.channel),roughnessMapUv:B&&v(m.roughnessMap.channel),anisotropyMapUv:ge&&v(m.anisotropyMap.channel),clearcoatMapUv:_e&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(m.sheenRoughnessMap.channel),specularMapUv:Je&&v(m.specularMap.channel),specularColorMapUv:lt&&v(m.specularColorMap.channel),specularIntensityMapUv:be&&v(m.specularIntensityMap.channel),transmissionMapUv:ke&&v(m.transmissionMap.channel),thicknessMapUv:$e&&v(m.thicknessMap.channel),alphaMapUv:xr&&v(m.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(X||O),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!P.attributes.uv&&(L||xr),fog:!!S,useFog:m.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:w.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ne,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&x.length>0,shadowMapType:i.shadowMap.type,toneMapping:k,decodeVideoTexture:L&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===it,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===en,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Hi&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Hi&&m.extensions.multiDraw===!0||E)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Wi.vertexUv1s=c.has(1),Wi.vertexUv2s=c.has(2),Wi.vertexUv3s=c.has(3),c.clear(),Wi},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let x in m.defines)_.push(x),_.push(m.defines[x]);return m.isRawShaderMaterial===!1&&((function(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)})(_,m),(function(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)})(_,m),_.push(i.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=g[m.type],x;if(_){let y=Wn[_];x=Uf.clone(y.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,_){let x;for(let y=0,w=h.length;y<w;y++){let S=h[y];if(S.cacheKey===_){x=S,++x.usedTimes;break}}return x===void 0&&(x=new qm(i,_,m,s),h.push(x)),x},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Km(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ju(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qu(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let p=i[e];return p===void 0?(p={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=l,p.groupOrder=c,p.renderOrder=a.renderOrder,p.z=h,p.group=u),e++,p}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let p=s(a,o,l,c,h,u);l.transmission>0?n.push(p):l.transparent===!0?r.push(p):t.push(p)},unshift:function(a,o,l,c,h,u){let p=s(a,o,l,c,h,u);l.transmission>0?n.unshift(p):l.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Jm),n.length>1&&n.sort(o||ju),r.length>1&&r.sort(o||ju)}}}function $m(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new qu,i.set(e,[r])):t>=n.length?(r=new qu,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Qm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new pe};break;case"SpotLight":t={position:new T,direction:new T,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new T,halfWidth:new T,halfHeight:new T}}return i[e.id]=t,t}}}var e0=0;function t0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n0(i){let e=new Qm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new T);let r=new T,s=new Ce,a=new Ce;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,p=0,d=0,f=0,g=0,v=0,m=0,_=0,x=0,y=0,w=0;o.sort(t0);for(let P=0,z=o.length;P<z;P++){let F=o[P],N=F.color,V=F.intensity,H=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=N.r*V,c+=N.g*V,h+=N.b*V;else if(F.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(F.sh.coefficients[j],V);w++}else if(F.isDirectionalLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let J=F.shadow,ee=t.get(F);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=F.shadow.matrix,v++}n.directional[u]=j,u++}else if(F.isSpotLight){let j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(N).multiplyScalar(V),j.distance=H,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,n.spot[d]=j;let J=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,J.updateMatrices(F),F.castShadow&&y++),n.spotLightMatrix[d]=J.matrix,F.castShadow){let ee=t.get(F);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[d]=ee,n.spotShadowMap[d]=K,_++}d++}else if(F.isRectAreaLight){let j=e.get(F);j.color.copy(N).multiplyScalar(V),j.halfWidth.set(.5*F.width,0,0),j.halfHeight.set(0,.5*F.height,0),n.rectArea[f]=j,f++}else if(F.isPointLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let J=F.shadow,ee=t.get(F);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=F.shadow.matrix,m++}n.point[p]=j,p++}else if(F.isHemisphereLight){let j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(V),j.groundColor.copy(F.groundColor).multiplyScalar(V),n.hemi[g]=j,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let S=n.hash;S.directionalLength===u&&S.pointLength===p&&S.spotLength===d&&S.rectAreaLength===f&&S.hemiLength===g&&S.numDirectionalShadows===v&&S.numPointShadows===m&&S.numSpotShadows===_&&S.numSpotMaps===x&&S.numLightProbes===w||(n.directional.length=u,n.spot.length=d,n.rectArea.length=f,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=_+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,S.directionalLength=u,S.pointLength=p,S.spotLength=d,S.rectAreaLength=f,S.hemiLength=g,S.numDirectionalShadows=v,S.numPointShadows=m,S.numSpotShadows=_,S.numSpotMaps=x,S.numLightProbes=w,n.version=e0++)},setupView:function(o,l){let c=0,h=0,u=0,p=0,d=0,f=l.matrixWorldInverse;for(let g=0,v=o.length;g<v;g++){let m=o[g];if(m.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),c++}else if(m.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),u++}else if(m.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(m.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*m.width,0,0),_.halfHeight.set(0,.5*m.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(m.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),h++}else if(m.isHemisphereLight){let _=n.hemi[d];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),d++}}},state:n}}function Yu(i){let e=new n0(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function i0(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Yu(i),e.set(t,[s])):n>=r.length?(s=new Yu(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Sc=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wc=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function r0(i,e,t){let n=new jr,r=new ce,s=new ce,a=new qe,o=new Sc({depthPacking:3201}),l=new wc,c={},h=t.maxTextureSize,u={[Li]:en,[en]:Li,2:2},p=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new Ie;f.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Te(f,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let m=this.type;function _(S,P){let z=e.update(g);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pi(r.x,r.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,z,p,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,z,d,g,null)}function x(S,P,z,F){let N=null,V=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)N=V;else if(N=z.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let H=N.uuid,K=P.uuid,j=c[H];j===void 0&&(j={},c[H]=j);let J=j[K];J===void 0&&(J=N.clone(),j[K]=J,P.addEventListener("dispose",w)),N=J}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=F===hi?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,z.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(i.properties.get(N).light=z),N}function y(S,P,z,F,N){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===hi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);let H=e.update(S),K=S.material;if(Array.isArray(K)){let j=H.groups;for(let J=0,ee=j.length;J<ee;J++){let te=j[J],ne=K[te.materialIndex];if(ne&&ne.visible){let U=x(S,ne,F,N);S.onBeforeShadow(i,S,P,z,H,U,te),i.renderBufferDirect(z,null,H,U,S,te),S.onAfterShadow(i,S,P,z,H,U,te)}}}else if(K.visible){let j=x(S,K,F,N);S.onBeforeShadow(i,S,P,z,H,j,null),i.renderBufferDirect(z,null,H,j,S,null),S.onAfterShadow(i,S,P,z,H,j,null)}}let V=S.children;for(let H=0,K=V.length;H<K;H++)y(V[H],P,z,F,N)}function w(S){S.target.removeEventListener("dispose",w);for(let P in c){let z=c[P],F=S.target.uuid;F in z&&(z[F].dispose(),delete z[F])}}this.render=function(S,P,z){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;let F=i.getRenderTarget(),N=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),H=i.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let K=m!==hi&&this.type===hi,j=m===hi&&this.type!==hi;for(let J=0,ee=S.length;J<ee;J++){let te=S[J],ne=te.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);let U=ne.getFrameExtents();if(r.multiply(U),s.copy(ne.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,ne.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,ne.mapSize.y=s.y)),ne.map===null||K===!0||j===!0){let E=this.type!==hi?{minFilter:mn,magFilter:mn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new pi(r.x,r.y,E),ne.map.texture.name=te.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let q=ne.getViewportCount();for(let E=0;E<q;E++){let L=ne.getViewport(E);a.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),H.viewport(a),ne.updateMatrices(te,E),n=ne.getFrustum(),y(P,z,ne.camera,te,this.type)}ne.isPointLightShadow!==!0&&this.type===hi&&_(ne,z),ne.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(F,N,V)}}var s0={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function a0(i){let e=new function(){let b=!1,B=new qe,O=null,re=new qe(0,0,0,0);return{setMask:function(W){O===W||b||(i.colorMask(W,W,W,W),O=W)},setLocked:function(W){b=W},setClear:function(W,se,le,ae,ge){ge===!0&&(W*=ae,se*=ae,le*=ae),B.set(W,se,le,ae),re.equals(B)===!1&&(i.clearColor(W,se,le,ae),re.copy(B))},reset:function(){b=!1,O=null,re.set(-1,0,0,0)}}},t=new function(){let b=!1,B=!1,O=null,re=null,W=null;return{setReversed:function(se){B=se},setTest:function(se){se?Y(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(se){O===se||b||(i.depthMask(se),O=se)},setFunc:function(se){if(B&&(se=s0[se]),re!==se){switch(se){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}re=se}},setLocked:function(se){b=se},setClear:function(se){W!==se&&(i.clearDepth(se),W=se)},reset:function(){b=!1,O=null,re=null,W=null}}},n=new function(){let b=!1,B=null,O=null,re=null,W=null,se=null,le=null,ae=null,ge=null;return{setTest:function(_e){b||(_e?Y(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(_e){B===_e||b||(i.stencilMask(_e),B=_e)},setFunc:function(_e,xe,Le){O===_e&&re===xe&&W===Le||(i.stencilFunc(_e,xe,Le),O=_e,re=xe,W=Le)},setOp:function(_e,xe,Le){se===_e&&le===xe&&ae===Le||(i.stencilOp(_e,xe,Le),se=_e,le=xe,ae=Le)},setLocked:function(_e){b=_e},setClear:function(_e){ge!==_e&&(i.clearStencil(_e),ge=_e)},reset:function(){b=!1,B=null,O=null,re=null,W=null,se=null,le=null,ae=null,ge=null}}},r=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,p=null,d=null,f=null,g=null,v=null,m=null,_=null,x=new pe(0,0,0),y=0,w=!1,S=null,P=null,z=null,F=null,N=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=K>=2);let J=null,ee={},te=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),U=new qe().fromArray(te),q=new qe().fromArray(ne);function E(b,B,O,re){let W=new Uint8Array(4),se=i.createTexture();i.bindTexture(b,se),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<O;le++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(B,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,W):i.texImage2D(B+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,W);return se}let L={};function Y(b){a[b]!==!0&&(i.enable(b),a[b]=!0)}function ie(b){a[b]!==!1&&(i.disable(b),a[b]=!1)}L[i.TEXTURE_2D]=E(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=E(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=E(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=E(i.TEXTURE_3D,i.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),n.setClear(0),Y(i.DEPTH_TEST),t.setFunc(3),X(!1),R(1),Y(i.CULL_FACE),I(0);let C={[tr]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};C[103]=i.MIN,C[104]=i.MAX;let M={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function I(b,B,O,re,W,se,le,ae,ge,_e){if(b!==0){if(u===!1&&(Y(i.BLEND),u=!0),b===5)W=W||B,se=se||O,le=le||re,B===d&&W===v||(i.blendEquationSeparate(C[B],C[W]),d=B,v=W),O===f&&re===g&&se===m&&le===_||(i.blendFuncSeparate(M[O],M[re],M[se],M[le]),f=O,g=re,m=se,_=le),ae.equals(x)!==!1&&ge===y||(i.blendColor(ae.r,ae.g,ae.b,ge),x.copy(ae),y=ge),p=b,w=!1;else if(b!==p||_e!==w){if(d===tr&&v===tr||(i.blendEquation(i.FUNC_ADD),d=tr,v=tr),_e)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}f=null,g=null,m=null,_=null,x.set(0,0,0),y=0,p=b,w=_e}}else u===!0&&(ie(i.BLEND),u=!1)}function X(b){S!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),S=b)}function R(b){b!==0?(Y(i.CULL_FACE),b!==P&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),P=b}function D(b,B,O){b?(Y(i.POLYGON_OFFSET_FILL),F===B&&N===O||(i.polygonOffset(B,O),F=B,N=O)):ie(i.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:n},enable:Y,disable:ie,bindFramebuffer:function(b,B){return o[b]!==B&&(i.bindFramebuffer(b,B),o[b]=B,b===i.DRAW_FRAMEBUFFER&&(o[i.FRAMEBUFFER]=B),b===i.FRAMEBUFFER&&(o[i.DRAW_FRAMEBUFFER]=B),!0)},drawBuffers:function(b,B){let O=c,re=!1;if(b){O=l.get(B),O===void 0&&(O=[],l.set(B,O));let W=b.textures;if(O.length!==W.length||O[0]!==i.COLOR_ATTACHMENT0){for(let se=0,le=W.length;se<le;se++)O[se]=i.COLOR_ATTACHMENT0+se;O.length=W.length,re=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,re=!0);re&&i.drawBuffers(O)},useProgram:function(b){return h!==b&&(i.useProgram(b),h=b,!0)},setBlending:I,setMaterial:function(b,B){b.side===2?ie(i.CULL_FACE):Y(i.CULL_FACE);let O=b.side===en;B&&(O=!O),X(O),b.blending===1&&b.transparent===!1?I(0):I(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),t.setFunc(b.depthFunc),t.setTest(b.depthTest),t.setMask(b.depthWrite),e.setMask(b.colorWrite);let re=b.stencilWrite;n.setTest(re),re&&(n.setMask(b.stencilWriteMask),n.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),n.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),D(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:X,setCullFace:R,setLineWidth:function(b){b!==z&&(H&&i.lineWidth(b),z=b)},setPolygonOffset:D,setScissorTest:function(b){b?Y(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+V-1),J!==b&&(i.activeTexture(b),J=b)},bindTexture:function(b,B,O){O===void 0&&(O=J===null?i.TEXTURE0+V-1:J);let re=ee[O];re===void 0&&(re={type:void 0,texture:void 0},ee[O]=re),re.type===b&&re.texture===B||(J!==O&&(i.activeTexture(O),J=O),i.bindTexture(b,B||L[b]),re.type=b,re.texture=B)},unbindTexture:function(){let b=ee[J];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,B){let O=s.get(B);O===void 0&&(O=new WeakMap,s.set(B,O));let re=O.get(b);re===void 0&&(re=i.getUniformBlockIndex(B,b.name),O.set(b,re))},uniformBlockBinding:function(b,B){let O=s.get(B).get(b);r.get(B)!==O&&(i.uniformBlockBinding(B,O,b.__bindingPointIndex),r.set(B,O))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){U.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),U.copy(b))},viewport:function(b){q.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),q.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),a={},J=null,ee={},o={},l=new WeakMap,c=[],h=null,u=!1,p=null,d=null,f=null,g=null,v=null,m=null,_=null,x=new pe(0,0,0),y=0,w=!1,S=null,P=null,z=null,F=null,N=null,U.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),e.reset(),t.reset(),n.reset()}}}function Zu(i,e,t,n){let r=(function(s){switch(s){case di:case Md:return{byteLength:1,components:1};case Ps:case bd:case js:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case rr:case ih:case jn:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case wd:case Ed:return i*e;case Ad:return i*e*2;case ah:case oh:return i*e/r.components*r.byteLength;case Cd:case lh:return i*e*2/r.components*r.byteLength;case Td:return i*e*3/r.components*r.byteLength;case qt:case ch:return i*e*4/r.components*r.byteLength;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case kl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case sc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rd:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,M){return d?new OffscreenCanvas(C,M):Ds("canvas")}function g(C,M,I){let X=1,R=ie(C);if((R.width>I||R.height>I)&&(X=I/Math.max(R.width,R.height)),X<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let D=Math.floor(X*R.width),b=Math.floor(X*R.height);u===void 0&&(u=f(D,b));let B=M?f(D,b):u;return B.width=D,B.height=b,B.getContext("2d").drawImage(C,0,0,D,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+D+"x"+b+")."),B}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),C}return C}function v(C){return C.generateMipmaps&&C.minFilter!==mn&&C.minFilter!==Qt}function m(C){i.generateMipmap(C)}function _(C,M,I,X,R=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let D=M;if(M===i.RED&&(I===i.FLOAT&&(D=i.R32F),I===i.HALF_FLOAT&&(D=i.R16F),I===i.UNSIGNED_BYTE&&(D=i.R8)),M===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(D=i.R8UI),I===i.UNSIGNED_SHORT&&(D=i.R16UI),I===i.UNSIGNED_INT&&(D=i.R32UI),I===i.BYTE&&(D=i.R8I),I===i.SHORT&&(D=i.R16I),I===i.INT&&(D=i.R32I)),M===i.RG&&(I===i.FLOAT&&(D=i.RG32F),I===i.HALF_FLOAT&&(D=i.RG16F),I===i.UNSIGNED_BYTE&&(D=i.RG8)),M===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(D=i.RG8UI),I===i.UNSIGNED_SHORT&&(D=i.RG16UI),I===i.UNSIGNED_INT&&(D=i.RG32UI),I===i.BYTE&&(D=i.RG8I),I===i.SHORT&&(D=i.RG16I),I===i.INT&&(D=i.RG32I)),M===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(D=i.RGB8UI),I===i.UNSIGNED_SHORT&&(D=i.RGB16UI),I===i.UNSIGNED_INT&&(D=i.RGB32UI),I===i.BYTE&&(D=i.RGB8I),I===i.SHORT&&(D=i.RGB16I),I===i.INT&&(D=i.RGB32I)),M===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(D=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(D=i.RGBA16UI),I===i.UNSIGNED_INT&&(D=i.RGBA32UI),I===i.BYTE&&(D=i.RGBA8I),I===i.SHORT&&(D=i.RGBA16I),I===i.INT&&(D=i.RGBA32I)),M===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(D=i.RGB9_E5),M===i.RGBA){let b=R?Xa:je.getTransfer(X);I===i.FLOAT&&(D=i.RGBA32F),I===i.HALF_FLOAT&&(D=i.RGBA16F),I===i.UNSIGNED_BYTE&&(D=b===it?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(D=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(D=i.RGB5_A1)}return D!==i.R16F&&D!==i.R32F&&D!==i.RG16F&&D!==i.RG32F&&D!==i.RGBA16F&&D!==i.RGBA32F||e.get("EXT_color_buffer_float"),D}function x(C,M){let I;return C?M===null||M===rr||M===Vr?I=i.DEPTH24_STENCIL8:M===jn?I=i.DEPTH32F_STENCIL8:M===Ps&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rr||M===Vr?I=i.DEPTH_COMPONENT24:M===jn?I=i.DEPTH_COMPONENT32F:M===Ps&&(I=i.DEPTH_COMPONENT16),I}function y(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==mn&&C.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){let M=C.target;M.removeEventListener("dispose",w),(function(I){let X=n.get(I);if(X.__webglInit===void 0)return;let R=I.source,D=p.get(R);if(D){let b=D[X.__cacheKey];b.usedTimes--,b.usedTimes===0&&P(I),Object.keys(D).length===0&&p.delete(R)}n.remove(I)})(M),M.isVideoTexture&&h.delete(M)}function S(C){let M=C.target;M.removeEventListener("dispose",S),(function(I){let X=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(X.__webglFramebuffer[D]))for(let b=0;b<X.__webglFramebuffer[D].length;b++)i.deleteFramebuffer(X.__webglFramebuffer[D][b]);else i.deleteFramebuffer(X.__webglFramebuffer[D]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[D])}else{if(Array.isArray(X.__webglFramebuffer))for(let D=0;D<X.__webglFramebuffer.length;D++)i.deleteFramebuffer(X.__webglFramebuffer[D]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let D=0;D<X.__webglColorRenderbuffer.length;D++)X.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[D]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}let R=I.textures;for(let D=0,b=R.length;D<b;D++){let B=n.get(R[D]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(R[D])}n.remove(I)})(M)}function P(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let I=C.source;delete p.get(I)[M.__cacheKey],a.memory.textures--}let z=0;function F(C,M){let I=n.get(C);if(C.isVideoTexture&&(function(X){let R=a.render.frame;h.get(X)!==R&&(h.set(X,R),X.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){let X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(X.complete!==!1)return void J(I,C,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+M)}let N={[Ol]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Fl]:i.MIRRORED_REPEAT},V={[mn]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},H={512:i.NEVER,519:i.ALWAYS,513:i.LESS,[Pd]:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function K(C,M){if(M.type!==jn||e.has("OES_texture_float_linear")!==!1||M.magFilter!==Qt&&M.magFilter!==Zo&&M.magFilter!==sa&&M.magFilter!==Xn&&M.minFilter!==Qt&&M.minFilter!==Zo&&M.minFilter!==sa&&M.minFilter!==Xn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,N[M.wrapT]),C!==i.TEXTURE_3D&&C!==i.TEXTURE_2D_ARRAY||i.texParameteri(C,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,V[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,V[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mn||M.minFilter!==sa&&M.minFilter!==Xn||M.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function j(C,M){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));let X=M.source,R=p.get(X);R===void 0&&(R={},p.set(X,R));let D=(function(b){let B=[];return B.push(b.wrapS),B.push(b.wrapT),B.push(b.wrapR||0),B.push(b.magFilter),B.push(b.minFilter),B.push(b.anisotropy),B.push(b.internalFormat),B.push(b.format),B.push(b.type),B.push(b.generateMipmaps),B.push(b.premultiplyAlpha),B.push(b.flipY),B.push(b.unpackAlignment),B.push(b.colorSpace),B.join()})(M);if(D!==C.__cacheKey){R[D]===void 0&&(R[D]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),R[D].usedTimes++;let b=R[C.__cacheKey];b!==void 0&&(R[C.__cacheKey].usedTimes--,b.usedTimes===0&&P(M)),C.__cacheKey=D,C.__webglTexture=R[D].texture}return I}function J(C,M,I){let X=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=i.TEXTURE_3D);let R=j(C,M),D=M.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+I);let b=n.get(D);if(D.version!==b.__version||R===!0){t.activeTexture(i.TEXTURE0+I);let B=je.getPrimaries(je.workingColorSpace),O=M.colorSpace===Ci?null:je.getPrimaries(M.colorSpace),re=M.colorSpace===Ci||B===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let W=g(M.image,!1,r.maxTextureSize);W=Y(M,W);let se=s.convert(M.format,M.colorSpace),le=s.convert(M.type),ae,ge=_(M.internalFormat,se,le,M.colorSpace,M.isVideoTexture);K(X,M);let _e=M.mipmaps,xe=M.isVideoTexture!==!0,Le=b.__version===void 0||R===!0,ze=D.dataReady,Be=y(M,W);if(M.isDepthTexture)ge=x(M.format===Hr,M.type),Le&&(xe?t.texStorage2D(i.TEXTURE_2D,1,ge,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,ge,W.width,W.height,0,se,le,null));else if(M.isDataTexture)if(_e.length>0){xe&&Le&&t.texStorage2D(i.TEXTURE_2D,Be,ge,_e[0].width,_e[0].height);for(let we=0,Ve=_e.length;we<Ve;we++)ae=_e[we],xe?ze&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ae.width,ae.height,se,le,ae.data):t.texImage2D(i.TEXTURE_2D,we,ge,ae.width,ae.height,0,se,le,ae.data);M.generateMipmaps=!1}else xe?(Le&&t.texStorage2D(i.TEXTURE_2D,Be,ge,W.width,W.height),ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,se,le,W.data)):t.texImage2D(i.TEXTURE_2D,0,ge,W.width,W.height,0,se,le,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xe&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,ge,_e[0].width,_e[0].height,W.depth);for(let we=0,Ve=_e.length;we<Ve;we++)if(ae=_e[we],M.format!==qt)if(se!==null)if(xe){if(ze)if(M.layerUpdates.size>0){let Je=Zu(ae.width,ae.height,M.format,M.type);for(let lt of M.layerUpdates){let be=ae.data.subarray(lt*Je/ae.data.BYTES_PER_ELEMENT,(lt+1)*Je/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,lt,ae.width,ae.height,1,se,be,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ae.width,ae.height,W.depth,se,ae.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,ge,ae.width,ae.height,W.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,ae.width,ae.height,W.depth,se,le,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,ge,ae.width,ae.height,W.depth,0,se,le,ae.data)}else{xe&&Le&&t.texStorage2D(i.TEXTURE_2D,Be,ge,_e[0].width,_e[0].height);for(let we=0,Ve=_e.length;we<Ve;we++)ae=_e[we],M.format!==qt?se!==null?xe?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,ae.width,ae.height,se,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,we,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?ze&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,ae.width,ae.height,se,le,ae.data):t.texImage2D(i.TEXTURE_2D,we,ge,ae.width,ae.height,0,se,le,ae.data)}else if(M.isDataArrayTexture)if(xe){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,ge,W.width,W.height,W.depth),ze)if(M.layerUpdates.size>0){let we=Zu(W.width,W.height,M.format,M.type);for(let Ve of M.layerUpdates){let Je=W.data.subarray(Ve*we/W.data.BYTES_PER_ELEMENT,(Ve+1)*we/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,W.width,W.height,1,se,le,Je)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,se,le,W.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,W.width,W.height,W.depth,0,se,le,W.data);else if(M.isData3DTexture)xe?(Le&&t.texStorage3D(i.TEXTURE_3D,Be,ge,W.width,W.height,W.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,se,le,W.data)):t.texImage3D(i.TEXTURE_3D,0,ge,W.width,W.height,W.depth,0,se,le,W.data);else if(M.isFramebufferTexture){if(Le)if(xe)t.texStorage2D(i.TEXTURE_2D,Be,ge,W.width,W.height);else{let we=W.width,Ve=W.height;for(let Je=0;Je<Be;Je++)t.texImage2D(i.TEXTURE_2D,Je,ge,we,Ve,0,se,le,null),we>>=1,Ve>>=1}}else if(_e.length>0){if(xe&&Le){let we=ie(_e[0]);t.texStorage2D(i.TEXTURE_2D,Be,ge,we.width,we.height)}for(let we=0,Ve=_e.length;we<Ve;we++)ae=_e[we],xe?ze&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,se,le,ae):t.texImage2D(i.TEXTURE_2D,we,ge,se,le,ae);M.generateMipmaps=!1}else if(xe){if(Le){let we=ie(W);t.texStorage2D(i.TEXTURE_2D,Be,ge,we.width,we.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,le,W)}else t.texImage2D(i.TEXTURE_2D,0,ge,se,le,W);v(M)&&m(X),b.__version=D.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ee(C,M,I,X,R,D){let b=s.convert(I.format,I.colorSpace),B=s.convert(I.type),O=_(I.internalFormat,b,B,I.colorSpace);if(!n.get(M).__hasExternalTextures){let re=Math.max(1,M.width>>D),W=Math.max(1,M.height>>D);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?t.texImage3D(R,D,O,re,W,M.depth,0,b,B,null):t.texImage2D(R,D,O,re,W,0,b,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),L(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,R,n.get(I).__webglTexture,0,E(M)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,R,n.get(I).__webglTexture,D),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(C,M,I){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let X=M.depthTexture,R=X&&X.isDepthTexture?X.type:null,D=x(M.stencilBuffer,R),b=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E(M);L(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,D,M.width,M.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,D,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,D,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}else{let X=M.textures;for(let R=0;R<X.length;R++){let D=X[R],b=s.convert(D.format,D.colorSpace),B=s.convert(D.type),O=_(D.internalFormat,b,B,D.colorSpace),re=E(M);I&&L(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,O,M.width,M.height):L(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,O,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,O,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(C){let M=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let R=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",R)};X.addEventListener("dispose",R),M.__depthDisposeCallback=R}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,X),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);let D=n.get(R.depthTexture).__webglTexture,b=E(R);if(R.depthTexture.format===Is)L(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else{if(R.depthTexture.format!==Hr)throw new Error("Unknown depthTexture format");L(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0)}})(M.__webglFramebuffer,C)}else if(I){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=i.createRenderbuffer(),te(M.__webglDepthbuffer[X],C,!1);else{let R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=M.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,D)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),te(M.__webglDepthbuffer,C,!1);else{let X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,R)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let U=[],q=[];function E(C){return Math.min(r.maxSamples,C.samples)}function L(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(C,M){let I=C.colorSpace,X=C.format,R=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Fi&&I!==Ci&&(je.getTransfer(I)===it?X===qt&&R===di||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){let C=z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),z+=1,C},this.resetTextureUnits=function(){z=0},this.setTexture2D=F,this.setTexture2DArray=function(C,M){let I=n.get(C);C.version>0&&I.__version!==C.version?J(I,C,M):t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+M)},this.setTexture3D=function(C,M){let I=n.get(C);C.version>0&&I.__version!==C.version?J(I,C,M):t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+M)},this.setTextureCube=function(C,M){let I=n.get(C);C.version>0&&I.__version!==C.version?(function(X,R,D){if(R.image.length!==6)return;let b=j(X,R),B=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+D);let O=n.get(B);if(B.version!==O.__version||b===!0){t.activeTexture(i.TEXTURE0+D);let re=je.getPrimaries(je.workingColorSpace),W=R.colorSpace===Ci?null:je.getPrimaries(R.colorSpace),se=R.colorSpace===Ci||re===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let le=R.isCompressedTexture||R.image[0].isCompressedTexture,ae=R.image[0]&&R.image[0].isDataTexture,ge=[];for(let be=0;be<6;be++)ge[be]=le||ae?ae?R.image[be].image:R.image[be]:g(R.image[be],!0,r.maxCubemapSize),ge[be]=Y(R,ge[be]);let _e=ge[0],xe=s.convert(R.format,R.colorSpace),Le=s.convert(R.type),ze=_(R.internalFormat,xe,Le,R.colorSpace),Be=R.isVideoTexture!==!0,we=O.__version===void 0||b===!0,Ve=B.dataReady,Je,lt=y(R,_e);if(K(i.TEXTURE_CUBE_MAP,R),le){Be&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ze,_e.width,_e.height);for(let be=0;be<6;be++){Je=ge[be].mipmaps;for(let ke=0;ke<Je.length;ke++){let $e=Je[ke];R.format!==qt?xe!==null?Be?Ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,0,0,$e.width,$e.height,xe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,ze,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,0,0,$e.width,$e.height,xe,Le,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke,ze,$e.width,$e.height,0,xe,Le,$e.data)}}}else{if(Je=R.mipmaps,Be&&we){Je.length>0&&lt++;let be=ie(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ze,be.width,be.height)}for(let be=0;be<6;be++)if(ae){Be?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ge[be].width,ge[be].height,xe,Le,ge[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ze,ge[be].width,ge[be].height,0,xe,Le,ge[be].data);for(let ke=0;ke<Je.length;ke++){let $e=Je[ke].image[be].image;Be?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,0,0,$e.width,$e.height,xe,Le,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,ze,$e.width,$e.height,0,xe,Le,$e.data)}}else{Be?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,xe,Le,ge[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ze,xe,Le,ge[be]);for(let ke=0;ke<Je.length;ke++){let $e=Je[ke];Be?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,0,0,xe,Le,$e.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke+1,ze,xe,Le,$e.image[be])}}}v(R)&&m(i.TEXTURE_CUBE_MAP),O.__version=B.version,R.onUpdate&&R.onUpdate(R)}X.__version=R.version})(I,C,M):t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+M)},this.rebindTextures=function(C,M,I){let X=n.get(C);M!==void 0&&ee(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ne(C)},this.setupRenderTarget=function(C){let M=C.texture,I=n.get(C),X=n.get(M);C.addEventListener("dispose",S);let R=C.textures,D=C.isWebGLCubeRenderTarget===!0,b=R.length>1;if(b||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=M.version,a.memory.textures++),D){I.__webglFramebuffer=[];for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[B]=[];for(let O=0;O<M.mipmaps.length;O++)I.__webglFramebuffer[B][O]=i.createFramebuffer()}else I.__webglFramebuffer[B]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let B=0;B<M.mipmaps.length;B++)I.__webglFramebuffer[B]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(b)for(let B=0,O=R.length;B<O;B++){let re=n.get(R[B]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&L(C)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let B=0;B<R.length;B++){let O=R[B];I.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[B]);let re=s.convert(O.format,O.colorSpace),W=s.convert(O.type),se=_(O.internalFormat,re,W,O.colorSpace,C.isXRRenderTarget===!0),le=E(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,I.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),te(I.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),K(i.TEXTURE_CUBE_MAP,M);for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0)for(let O=0;O<M.mipmaps.length;O++)ee(I.__webglFramebuffer[B][O],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,O);else ee(I.__webglFramebuffer[B],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);v(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){for(let B=0,O=R.length;B<O;B++){let re=R[B],W=n.get(re);t.bindTexture(i.TEXTURE_2D,W.__webglTexture),K(i.TEXTURE_2D,re),ee(I.__webglFramebuffer,C,re,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,0),v(re)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(B=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,X.__webglTexture),K(B,M),M.mipmaps&&M.mipmaps.length>0)for(let O=0;O<M.mipmaps.length;O++)ee(I.__webglFramebuffer[O],C,M,i.COLOR_ATTACHMENT0,B,O);else ee(I.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,B,0);v(M)&&m(B),t.unbindTexture()}C.depthBuffer&&ne(C)},this.updateRenderTargetMipmap=function(C){let M=C.textures;for(let I=0,X=M.length;I<X;I++){let R=M[I];if(v(R)){let D=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,b=n.get(R).__webglTexture;t.bindTexture(D,b),m(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(L(C)===!1){let M=C.textures,I=C.width,X=C.height,R=i.COLOR_BUFFER_BIT,D=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=n.get(C),B=M.length>1;if(B)for(let O=0;O<M.length;O++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,b.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglFramebuffer);for(let O=0;O<M.length;O++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,b.__webglColorRenderbuffer[O]);let re=n.get(M[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,I,X,0,0,I,X,R,i.NEAREST),l===!0&&(U.length=0,q.length=0,U.push(i.COLOR_ATTACHMENT0+O),C.depthBuffer&&C.resolveDepthBuffer===!1&&(U.push(D),q.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let O=0;O<M.length;O++){t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,b.__webglColorRenderbuffer[O]);let re=n.get(M[O]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=L}function l0(i,e){return{convert:function(t,n=""){let r,s=je.getTransfer(n);if(t===di)return i.UNSIGNED_BYTE;if(t===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(t===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Md)return i.BYTE;if(t===bd)return i.SHORT;if(t===Ps)return i.UNSIGNED_SHORT;if(t===ih)return i.INT;if(t===rr)return i.UNSIGNED_INT;if(t===jn)return i.FLOAT;if(t===js)return i.HALF_FLOAT;if(t===wd)return i.ALPHA;if(t===Td)return i.RGB;if(t===qt)return i.RGBA;if(t===Ed)return i.LUMINANCE;if(t===Ad)return i.LUMINANCE_ALPHA;if(t===Is)return i.DEPTH_COMPONENT;if(t===Hr)return i.DEPTH_STENCIL;if(t===ah)return i.RED;if(t===oh)return i.RED_INTEGER;if(t===Cd)return i.RG;if(t===lh)return i.RG_INTEGER;if(t===ch)return i.RGBA_INTEGER;if(t===Ba||t===za||t===ka||t===Ga)if(s===it){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Bl||t===zl||t===kl||t===Gl){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Vl||t===Hl||t===Wl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Vl||t===Hl)return s===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Wl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Xl||t===jl||t===ql||t===Yl||t===Zl||t===Kl||t===Jl||t===$l||t===Ql||t===ec||t===tc||t===nc||t===ic||t===rc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Xl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===jl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ql)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Yl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Zl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Kl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Jl)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===$l)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ql)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ec)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===tc)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===nc)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===ic)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===rc)return s===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Va||t===sc||t===ac){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Va)return s===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Rd||t===oc||t===lc||t===cc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(t===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Vr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Tc=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c0={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let v=t.getJointPose(g,n),m=this._getHandJoint(c,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&p>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new tn;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends Di{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,f=null,g=new Ec,v=t.getContextAttributes(),m=null,_=null,x=[],y=[],w=new ce,S=null,P=new $t;P.layers.enable(1),P.viewport=new qe;let z=new $t;z.layers.enable(2),z.viewport=new qe;let F=[P,z],N=new Tc;N.layers.enable(1),N.layers.enable(2);let V=null,H=null;function K(E){let L=y.indexOf(E.inputSource);if(L===-1)return;let Y=x[L];Y!==void 0&&(Y.update(E.inputSource,E.frame,c||a),Y.dispatchEvent({type:E.type,data:E.inputSource}))}function j(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let E=0;E<x.length;E++){let L=y[E];L!==null&&(y[E]=null,x[E].disconnect(L))}V=null,H=null,g.reset(),e.setRenderTarget(m),d=null,p=null,u=null,r=null,_=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function J(E){for(let L=0;L<E.removed.length;L++){let Y=E.removed[L],ie=y.indexOf(Y);ie>=0&&(y[ie]=null,x[ie].disconnect(Y))}for(let L=0;L<E.added.length;L++){let Y=E.added[L],ie=y.indexOf(Y);if(ie===-1){for(let M=0;M<x.length;M++){if(M>=y.length){y.push(Y),ie=M;break}if(y[M]===null){y[M]=Y,ie=M;break}}if(ie===-1)break}let C=x[ie];C&&C.connect(Y)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let L=x[E];return L===void 0&&(L=new As,x[E]=L),L.getTargetRaySpace()},this.getControllerGrip=function(E){let L=x[E];return L===void 0&&(L=new As,x[E]=L),L.getGripSpace()},this.getHand=function(E){let L=x[E];return L===void 0&&(L=new As,x[E]=L),L.getHandSpace()},this.setFramebufferScaleFactor=function(E){s=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(E){if(r=E,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let L={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,L),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pi(d.framebufferWidth,d.framebufferHeight,{format:qt,type:di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let L=null,Y=null,ie=null;v.depth&&(ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=v.stencil?Hr:Is,Y=v.stencil?Vr:rr);let C={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(C),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new pi(p.textureWidth,p.textureHeight,{format:qt,type:di,depthTexture:new to(p.textureWidth,p.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let ee=new T,te=new T;function ne(E,L){L===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(L.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(r===null)return;let L=E.near,Y=E.far;g.texture!==null&&(g.depthNear>0&&(L=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),N.near=z.near=P.near=L,N.far=z.far=P.far=Y,V===N.near&&H===N.far||(r.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,H=N.far);let ie=E.parent,C=N.cameras;ne(N,ie);for(let M=0;M<C.length;M++)ne(C[M],ie);C.length===2?(function(M,I,X){ee.setFromMatrixPosition(I.matrixWorld),te.setFromMatrixPosition(X.matrixWorld);let R=ee.distanceTo(te),D=I.projectionMatrix.elements,b=X.projectionMatrix.elements,B=D[14]/(D[10]-1),O=D[14]/(D[10]+1),re=(D[9]+1)/D[5],W=(D[9]-1)/D[5],se=(D[8]-1)/D[0],le=(b[8]+1)/b[0],ae=B*se,ge=B*le,_e=R/(-se+le),xe=_e*-se;if(I.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(xe),M.translateZ(_e),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),D[10]===-1)M.projectionMatrix.copy(I.projectionMatrix),M.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{let Le=B+_e,ze=O+_e,Be=ae-xe,we=ge+(R-xe),Ve=re*O/ze*Le,Je=W*O/ze*Le;M.projectionMatrix.makePerspective(Be,we,Ve,Je,Le,ze),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(N,P,z):N.projectionMatrix.copy(P.projectionMatrix),(function(M,I,X){X===null?M.matrix.copy(I.matrixWorld):(M.matrix.copy(X.matrixWorld),M.matrix.invert(),M.matrix.multiply(I.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(I.projectionMatrix),M.projectionMatrixInverse.copy(I.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*Ls*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(E,N,ie)},this.getCamera=function(){return N},this.getFoveation=function(){if(p!==null||d!==null)return l},this.setFoveation=function(E){l=E,p!==null&&(p.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)};let U=null,q=new Ud;q.setAnimationLoop((function(E,L){if(h=L.getViewerPose(c||a),f=L,h!==null){let Y=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ie=!1;Y.length!==N.cameras.length&&(N.cameras.length=0,ie=!0);for(let M=0;M<Y.length;M++){let I=Y[M],X=null;if(d!==null)X=d.getViewport(I);else{let D=u.getViewSubImage(p,I);X=D.viewport,M===0&&(e.setRenderTargetTextures(_,D.colorTexture,p.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(_))}let R=F[M];R===void 0&&(R=new $t,R.layers.enable(M),R.viewport=new qe,F[M]=R),R.matrix.fromArray(I.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(I.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(X.x,X.y,X.width,X.height),M===0&&(N.matrix.copy(R.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ie===!0&&N.cameras.push(R)}let C=r.enabledFeatures;if(C&&C.includes("depth-sensing")){let M=u.getDepthInformation(Y[0]);M&&M.isValid&&M.texture&&g.init(e,M,r.renderState)}}for(let Y=0;Y<x.length;Y++){let ie=y[Y],C=x[Y];ie!==null&&C!==void 0&&C.update(ie,L,c||a)}U&&U(E,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),f=null})),this.setAnimationLoop=function(E){U=E},this.dispose=function(){}}},Qi=new Zn,h0=new Ce;function u0(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===en&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===en&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Qi.copy(l),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),r.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Qi)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Dd(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,p){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*p,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function d0(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,p,d,f){let g=u.value,v=p+"_"+d;if(f[v]===void 0)return f[v]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let m=f[v];if(typeof g=="number"||typeof g=="boolean"){if(m!==g)return f[v]=g,!0}else if(m.equals(g)===!1)return m.copy(g),!0}return!1}function c(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;n.uniformBlockBinding(u,d)},update:function(u,p){let d=r[u.id];d===void 0&&((function(v){let m=v.uniforms,_=0,x=16;for(let w=0,S=m.length;w<S;w++){let P=Array.isArray(m[w])?m[w]:[m[w]];for(let z=0,F=P.length;z<F;z++){let N=P[z],V=Array.isArray(N.value)?N.value:[N.value];for(let H=0,K=V.length;H<K;H++){let j=c(V[H]),J=_%x,ee=J%j.boundary,te=J+ee;_+=ee,te!==0&&x-te<j.storage&&(_+=x-te),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=j.storage}}}let y=_%x;y>0&&(_+=x-y),v.__size=_,v.__cache={}})(u),d=(function(v){let m=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();v.__bindingPointIndex=m;let _=i.createBuffer(),x=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,x,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,_),_})(u),r[u.id]=d,u.addEventListener("dispose",h));let f=p.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(v){let m=r[v.id],_=v.uniforms,x=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let y=0,w=_.length;y<w;y++){let S=Array.isArray(_[y])?_[y]:[_[y]];for(let P=0,z=S.length;P<z;P++){let F=S[P];if(l(F,y,P,x)===!0){let N=F.__offset,V=Array.isArray(F.value)?F.value:[F.value],H=0;for(let K=0;K<V.length;K++){let j=V[K],J=c(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,N+H,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var no=class{constructor(e={}){let{canvas:t=xf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let d=new Uint32Array(4),f=new Int32Array(4),g=null,v=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Pi,this.toneMappingExposure=1;let x=this,y=!1,w=0,S=0,P=null,z=-1,F=null,N=new qe,V=new qe,H=null,K=new pe(0),j=0,J=t.width,ee=t.height,te=1,ne=null,U=null,q=new qe(0,0,J,ee),E=new qe(0,0,J,ee),L=!1,Y=new jr,ie=!1,C=!1,M=new Ce,I=new Ce,X=new T,R=new qe,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b=!1;function B(){return P===null?te:1}let O,re,W,se,le,ae,ge,_e,xe,Le,ze,Be,we,Ve,Je,lt,be,ke,$e,ta,xr,on,ri,Hi,k=n;function Wi(A,Z){return t.getContext(A,Z)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Vh,!1),t.addEventListener("webglcontextrestored",Hh,!1),t.addEventListener("webglcontextcreationerror",Wh,!1),k===null){let Z="webgl2";if(k=Wi(Z,A),k===null)throw Wi(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function ps(){O=new jf(k),O.init(),on=new l0(k,O),re=new Vf(k,O,e,on),W=new a0(k),re.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),se=new Zf(k),le=new Km,ae=new o0(k,O,W,le,re,on,se),ge=new Wf(x),_e=new Xf(x),xe=new Ff(k),ri=new kf(k,xe),Le=new qf(k,xe,se,ri),ze=new Jf(k,Le,xe,se),$e=new Kf(k,re,ae),lt=new Hf(le),Be=new Zm(x,ge,_e,O,re,ri,lt),we=new u0(x,le),Ve=new $m,Je=new i0(O),ke=new zf(x,ge,_e,W,ze,p,l),be=new r0(x,ze,re),Hi=new d0(k,se,re,W),ta=new Gf(k,O,se),xr=new Yf(k,O,se),se.programs=Be.programs,x.capabilities=re,x.extensions=O,x.properties=le,x.renderLists=Ve,x.shadowMap=be,x.state=W,x.info=se}ps();let Pt=new Ac(x,k);function Vh(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Hh(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=se.autoReset,Z=be.enabled,Q=be.autoUpdate,oe=be.needsUpdate,$=be.type;ps(),se.autoReset=A,be.enabled=Z,be.autoUpdate=Q,be.needsUpdate=oe,be.type=$}function Wh(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xh(A){let Z=A.target;Z.removeEventListener("dispose",Xh),(function(Q){(function(oe){let $=le.get(oe).programs;$!==void 0&&($.forEach((function(he){Be.releaseProgram(he)})),oe.isShaderMaterial&&Be.releaseShaderCache(oe))})(Q),le.remove(Q)})(Z)}function jh(A,Z,Q){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,ia(A,Z,Q),A.side=Li,A.needsUpdate=!0,ia(A,Z,Q),A.side=2):ia(A,Z,Q)}this.xr=Pt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(J,ee,!1))},this.getSize=function(A){return A.set(J,ee)},this.setSize=function(A,Z,Q=!0){Pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=A,ee=Z,t.width=Math.floor(A*te),t.height=Math.floor(Z*te),Q===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),this.setViewport(0,0,A,Z))},this.getDrawingBufferSize=function(A){return A.set(J*te,ee*te).floor()},this.setDrawingBufferSize=function(A,Z,Q){J=A,ee=Z,te=Q,t.width=Math.floor(A*Q),t.height=Math.floor(Z*Q),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,Z,Q,oe){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,Z,Q,oe),W.viewport(N.copy(q).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(E)},this.setScissor=function(A,Z,Q,oe){A.isVector4?E.set(A.x,A.y,A.z,A.w):E.set(A,Z,Q,oe),W.scissor(V.copy(E).multiplyScalar(te).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){W.setScissorTest(L=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(A=!0,Z=!0,Q=!0){let oe=0;if(A){let $=!1;if(P!==null){let he=P.texture.format;$=he===ch||he===lh||he===oh}if($){let he=P.texture.type,ve=he===di||he===rr||he===Ps||he===Vr||he===rh||he===sh,Me=ke.getClearColor(),Ee=ke.getClearAlpha(),De=Me.r,Pe=Me.g,Re=Me.b;ve?(d[0]=De,d[1]=Pe,d[2]=Re,d[3]=Ee,k.clearBufferuiv(k.COLOR,0,d)):(f[0]=De,f[1]=Pe,f[2]=Re,f[3]=Ee,k.clearBufferiv(k.COLOR,0,f))}else oe|=k.COLOR_BUFFER_BIT}Z&&(oe|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Vh,!1),t.removeEventListener("webglcontextrestored",Hh,!1),t.removeEventListener("webglcontextcreationerror",Wh,!1),Ve.dispose(),Je.dispose(),le.dispose(),ge.dispose(),_e.dispose(),ze.dispose(),ri.dispose(),Hi.dispose(),Be.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",qh),Pt.removeEventListener("sessionend",Yh),Xi.stop()},this.renderBufferDirect=function(A,Z,Q,oe,$,he){Z===null&&(Z=D);let ve=$.isMesh&&$.matrixWorld.determinant()<0,Me=(function(We,ht,Ot,Fe,Ue){ht.isScene!==!0&&(ht=D),ae.resetTextureUnits();let En=ht.fog,tf=Fe.isMeshStandardMaterial?ht.environment:null,nf=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fi,ra=(Fe.isMeshStandardMaterial?_e:ge).get(Fe.envMap||tf),rf=Fe.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,sf=!!Ot.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),af=!!Ot.morphAttributes.position,of=!!Ot.morphAttributes.normal,lf=!!Ot.morphAttributes.color,eu=Pi;Fe.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(eu=x.toneMapping));let tu=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,cf=tu!==void 0?tu.length:0,Ge=le.get(Fe),hf=v.state.lights;if(ie===!0&&(C===!0||We!==F)){let pn=We===F&&Fe.id===z;lt.setState(Fe,We,pn)}let An=!1;Fe.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==hf.state.version||Ge.outputColorSpace!==nf||Ue.isBatchedMesh&&Ge.batching===!1?An=!0:Ue.isBatchedMesh||Ge.batching!==!0?Ue.isBatchedMesh&&Ge.batchingColor===!0&&Ue.colorTexture===null||Ue.isBatchedMesh&&Ge.batchingColor===!1&&Ue.colorTexture!==null||Ue.isInstancedMesh&&Ge.instancing===!1?An=!0:Ue.isInstancedMesh||Ge.instancing!==!0?Ue.isSkinnedMesh&&Ge.skinning===!1?An=!0:Ue.isSkinnedMesh||Ge.skinning!==!0?Ue.isInstancedMesh&&Ge.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&Ge.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&Ge.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&Ge.instancingMorph===!1&&Ue.morphTexture!==null||Ge.envMap!==ra||Fe.fog===!0&&Ge.fog!==En?An=!0:Ge.numClippingPlanes===void 0||Ge.numClippingPlanes===lt.numPlanes&&Ge.numIntersection===lt.numIntersection?(Ge.vertexAlphas!==rf||Ge.vertexTangents!==sf||Ge.morphTargets!==af||Ge.morphNormals!==of||Ge.morphColors!==lf||Ge.toneMapping!==eu||Ge.morphTargetsCount!==cf)&&(An=!0):An=!0:An=!0:An=!0:An=!0:(An=!0,Ge.__version=Fe.version);let ji=Ge.currentProgram;An===!0&&(ji=ia(Fe,ht,Ue));let nu=!1,fs=!1,qo=!1,_t=ji.getUniforms(),Mi=Ge.uniforms;if(W.useProgram(ji.program)&&(nu=!0,fs=!0,qo=!0),Fe.id!==z&&(z=Fe.id,fs=!0),nu||F!==We){re.reverseDepthBuffer?(M.copy(We.projectionMatrix),(function(qi){let at=qi.elements;at[2]=.5*at[2]+.5*at[3],at[6]=.5*at[6]+.5*at[7],at[10]=.5*at[10]+.5*at[11],at[14]=.5*at[14]+.5*at[15]})(M),(function(qi){let at=qi.elements;at[11]===-1?(at[10]=-at[10]-1,at[14]=-at[14]):(at[10]=-at[10],at[14]=1-at[14])})(M),_t.setValue(k,"projectionMatrix",M)):_t.setValue(k,"projectionMatrix",We.projectionMatrix),_t.setValue(k,"viewMatrix",We.matrixWorldInverse);let pn=_t.map.cameraPosition;pn!==void 0&&pn.setValue(k,X.setFromMatrixPosition(We.matrixWorld)),re.logarithmicDepthBuffer&&_t.setValue(k,"logDepthBufFC",2/(Math.log(We.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&_t.setValue(k,"isOrthographic",We.isOrthographicCamera===!0),F!==We&&(F=We,fs=!0,qo=!0)}if(Ue.isSkinnedMesh){_t.setOptional(k,Ue,"bindMatrix"),_t.setOptional(k,Ue,"bindMatrixInverse");let pn=Ue.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),_t.setValue(k,"boneTexture",pn.boneTexture,ae))}Ue.isBatchedMesh&&(_t.setOptional(k,Ue,"batchingTexture"),_t.setValue(k,"batchingTexture",Ue._matricesTexture,ae),_t.setOptional(k,Ue,"batchingIdTexture"),_t.setValue(k,"batchingIdTexture",Ue._indirectTexture,ae),_t.setOptional(k,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&_t.setValue(k,"batchingColorTexture",Ue._colorsTexture,ae));let Yo=Ot.morphAttributes;Yo.position===void 0&&Yo.normal===void 0&&Yo.color===void 0||$e.update(Ue,Ot,ji),(fs||Ge.receiveShadow!==Ue.receiveShadow)&&(Ge.receiveShadow=Ue.receiveShadow,_t.setValue(k,"receiveShadow",Ue.receiveShadow)),Fe.isMeshGouraudMaterial&&Fe.envMap!==null&&(Mi.envMap.value=ra,Mi.flipEnvMap.value=ra.isCubeTexture&&ra.isRenderTargetTexture===!1?-1:1),Fe.isMeshStandardMaterial&&Fe.envMap===null&&ht.environment!==null&&(Mi.envMapIntensity.value=ht.environmentIntensity),fs&&(_t.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&(Cn=qo,(Hn=Mi).ambientLightColor.needsUpdate=Cn,Hn.lightProbe.needsUpdate=Cn,Hn.directionalLights.needsUpdate=Cn,Hn.directionalLightShadows.needsUpdate=Cn,Hn.pointLights.needsUpdate=Cn,Hn.pointLightShadows.needsUpdate=Cn,Hn.spotLights.needsUpdate=Cn,Hn.spotLightShadows.needsUpdate=Cn,Hn.rectAreaLights.needsUpdate=Cn,Hn.hemisphereLights.needsUpdate=Cn),En&&Fe.fog===!0&&we.refreshFogUniforms(Mi,En),we.refreshMaterialUniforms(Mi,Fe,te,ee,v.state.transmissionRenderTarget[We.id]),zr.upload(k,$h(Ge),Mi,ae));var Hn,Cn;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(zr.upload(k,$h(Ge),Mi,ae),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&_t.setValue(k,"center",Ue.center),_t.setValue(k,"modelViewMatrix",Ue.modelViewMatrix),_t.setValue(k,"normalMatrix",Ue.normalMatrix),_t.setValue(k,"modelMatrix",Ue.matrixWorld),Fe.isShaderMaterial||Fe.isRawShaderMaterial){let pn=Fe.uniformsGroups;for(let qi=0,at=pn.length;qi<at;qi++){let iu=pn[qi];Hi.update(iu,ji),Hi.bind(iu,ji)}}return ji})(A,Z,Q,oe,$);W.setMaterial(oe,ve);let Ee=Q.index,De=1;if(oe.wireframe===!0){if(Ee=Le.getWireframeAttribute(Q),Ee===void 0)return;De=2}let Pe=Q.drawRange,Re=Q.attributes.position,He=Pe.start*De,vt=(Pe.start+Pe.count)*De;he!==null&&(He=Math.max(He,he.start*De),vt=Math.min(vt,(he.start+he.count)*De)),Ee!==null?(He=Math.max(He,0),vt=Math.min(vt,Ee.count)):Re!=null&&(He=Math.max(He,0),vt=Math.min(vt,Re.count));let ct=vt-He;if(ct<0||ct===1/0)return;let It;ri.setup($,oe,Me,Q,Ee);let nt=ta;if(Ee!==null&&(It=xe.get(Ee),nt=xr,nt.setIndex(It)),$.isMesh)oe.wireframe===!0?(W.setLineWidth(oe.wireframeLinewidth*B()),nt.setMode(k.LINES)):nt.setMode(k.TRIANGLES);else if($.isLine){let We=oe.linewidth;We===void 0&&(We=1),W.setLineWidth(We*B()),$.isLineSegments?nt.setMode(k.LINES):$.isLineLoop?nt.setMode(k.LINE_LOOP):nt.setMode(k.LINE_STRIP)}else $.isPoints?nt.setMode(k.POINTS):$.isSprite&&nt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let We=$._multiDrawStarts,ht=$._multiDrawCounts,Ot=$._multiDrawCount,Fe=Ee?xe.get(Ee).bytesPerElement:1,Ue=le.get(oe).currentProgram.getUniforms();for(let En=0;En<Ot;En++)Ue.setValue(k,"_gl_DrawID",En),nt.render(We[En]/Fe,ht[En])}else if($.isInstancedMesh)nt.renderInstances(He,ct,$.count);else if(Q.isInstancedBufferGeometry){let We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ht=Math.min(Q.instanceCount,We);nt.renderInstances(He,ct,ht)}else nt.render(He,ct)},this.compile=function(A,Z,Q=null){Q===null&&(Q=A),v=Je.get(Q),v.init(Z),_.push(v),Q.traverseVisible((function($){$.isLight&&$.layers.test(Z.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))})),A!==Q&&A.traverseVisible((function($){$.isLight&&$.layers.test(Z.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))})),v.setupLights();let oe=new Set;return A.traverse((function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let he=$.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){let Me=he[ve];jh(Me,Q,$),oe.add(Me)}else jh(he,Q,$),oe.add(he)})),_.pop(),v=null,oe},this.compileAsync=function(A,Z,Q=null){let oe=this.compile(A,Z,Q);return new Promise(($=>{function he(){oe.forEach((function(ve){le.get(ve).currentProgram.isReady()&&oe.delete(ve)})),oe.size!==0?setTimeout(he,10):$(A)}O.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)}))};let Xo=null;function qh(){Xi.stop()}function Yh(){Xi.start()}let Xi=new Ud;function jo(A,Z,Q,oe){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){oe&&R.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);let he=ze.update(A),ve=A.material;ve.visible&&g.push(A,he,ve,Q,R.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let he=ze.update(A),ve=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),R.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),R.copy(he.boundingSphere.center)),R.applyMatrix4(A.matrixWorld).applyMatrix4(I)),Array.isArray(ve)){let Me=he.groups;for(let Ee=0,De=Me.length;Ee<De;Ee++){let Pe=Me[Ee],Re=ve[Pe.materialIndex];Re&&Re.visible&&g.push(A,he,Re,Q,R.z,Pe)}}else ve.visible&&g.push(A,he,ve,Q,R.z,null)}}let $=A.children;for(let he=0,ve=$.length;he<ve;he++)jo($[he],Z,Q,oe)}function Zh(A,Z,Q,oe){let $=A.opaque,he=A.transmissive,ve=A.transparent;v.setupLightsView(Q),ie===!0&&lt.setGlobalState(x.clippingPlanes,Q),oe&&W.viewport(N.copy(oe)),$.length>0&&na($,Z,Q),he.length>0&&na(he,Z,Q),ve.length>0&&na(ve,Z,Q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Kh(A,Z,Q,oe){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[oe.id]===void 0&&(v.state.transmissionRenderTarget[oe.id]=new pi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?js:di,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let $=v.state.transmissionRenderTarget[oe.id],he=oe.viewport||N;$.setSize(he.z,he.w);let ve=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(K),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),b&&ke.render(Q);let Me=x.toneMapping;x.toneMapping=Pi;let Ee=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),ie===!0&&lt.setGlobalState(x.clippingPlanes,oe),na(A,Q,oe),ae.updateMultisampleRenderTarget($),ae.updateRenderTargetMipmap($),O.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Pe=0,Re=Z.length;Pe<Re;Pe++){let He=Z[Pe],vt=He.object,ct=He.geometry,It=He.material,nt=He.group;if(It.side===2&&vt.layers.test(oe.layers)){let We=It.side;It.side=en,It.needsUpdate=!0,Jh(vt,Q,oe,ct,It,nt),It.side=We,It.needsUpdate=!0,De=!0}}De===!0&&(ae.updateMultisampleRenderTarget($),ae.updateRenderTargetMipmap($))}x.setRenderTarget(ve),x.setClearColor(K,j),Ee!==void 0&&(oe.viewport=Ee),x.toneMapping=Me}function na(A,Z,Q){let oe=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,he=A.length;$<he;$++){let ve=A[$],Me=ve.object,Ee=ve.geometry,De=oe===null?ve.material:oe,Pe=ve.group;Me.layers.test(Q.layers)&&Jh(Me,Z,Q,Ee,De,Pe)}}function Jh(A,Z,Q,oe,$,he){A.onBeforeRender(x,Z,Q,oe,$,he),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,Z,Q,oe,A,he),$.transparent===!0&&$.side===2&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,x.renderBufferDirect(Q,Z,oe,$,A,he),$.side=Li,$.needsUpdate=!0,x.renderBufferDirect(Q,Z,oe,$,A,he),$.side=2):x.renderBufferDirect(Q,Z,oe,$,A,he),A.onAfterRender(x,Z,Q,oe,$,he)}function ia(A,Z,Q){Z.isScene!==!0&&(Z=D);let oe=le.get(A),$=v.state.lights,he=v.state.shadowsArray,ve=$.state.version,Me=Be.getParameters(A,$.state,he,Z,Q),Ee=Be.getProgramCacheKey(Me),De=oe.programs;oe.environment=A.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(A.isMeshStandardMaterial?_e:ge).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",Xh),De=new Map,oe.programs=De);let Pe=De.get(Ee);if(Pe!==void 0){if(oe.currentProgram===Pe&&oe.lightsStateVersion===ve)return Qh(A,Me),Pe}else Me.uniforms=Be.getUniforms(A),A.onBeforeCompile(Me,x),Pe=Be.acquireProgram(Me,Ee),De.set(Ee,Pe),oe.uniforms=Me.uniforms;let Re=oe.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Re.clippingPlanes=lt.uniform),Qh(A,Me),oe.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(A),oe.lightsStateVersion=ve,oe.needsLights&&(Re.ambientLightColor.value=$.state.ambient,Re.lightProbe.value=$.state.probe,Re.directionalLights.value=$.state.directional,Re.directionalLightShadows.value=$.state.directionalShadow,Re.spotLights.value=$.state.spot,Re.spotLightShadows.value=$.state.spotShadow,Re.rectAreaLights.value=$.state.rectArea,Re.ltc_1.value=$.state.rectAreaLTC1,Re.ltc_2.value=$.state.rectAreaLTC2,Re.pointLights.value=$.state.point,Re.pointLightShadows.value=$.state.pointShadow,Re.hemisphereLights.value=$.state.hemi,Re.directionalShadowMap.value=$.state.directionalShadowMap,Re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Re.spotShadowMap.value=$.state.spotShadowMap,Re.spotLightMatrix.value=$.state.spotLightMatrix,Re.spotLightMap.value=$.state.spotLightMap,Re.pointShadowMap.value=$.state.pointShadowMap,Re.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=Pe,oe.uniformsList=null,Pe}function $h(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=zr.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Qh(A,Z){let Q=le.get(A);Q.outputColorSpace=Z.outputColorSpace,Q.batching=Z.batching,Q.batchingColor=Z.batchingColor,Q.instancing=Z.instancing,Q.instancingColor=Z.instancingColor,Q.instancingMorph=Z.instancingMorph,Q.skinning=Z.skinning,Q.morphTargets=Z.morphTargets,Q.morphNormals=Z.morphNormals,Q.morphColors=Z.morphColors,Q.morphTargetsCount=Z.morphTargetsCount,Q.numClippingPlanes=Z.numClippingPlanes,Q.numIntersection=Z.numClipIntersection,Q.vertexAlphas=Z.vertexAlphas,Q.vertexTangents=Z.vertexTangents,Q.toneMapping=Z.toneMapping}Xi.setAnimationLoop((function(A){Xo&&Xo(A)})),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(A){Xo=A,Pt.setAnimationLoop(A),A===null?Xi.stop():Xi.start()},Pt.addEventListener("sessionstart",qh),Pt.addEventListener("sessionend",Yh),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Z),Z=Pt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,Z,P),v=Je.get(A,_.length),v.init(Z),_.push(v),I.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(I),C=this.localClippingEnabled,ie=lt.init(this.clippingPlanes,C),g=Ve.get(A,m.length),g.init(),m.push(g),Pt.enabled===!0&&Pt.isPresenting===!0){let he=x.xr.getDepthSensingMesh();he!==null&&jo(he,Z,-1/0,x.sortObjects)}jo(A,Z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ne,U),b=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,b&&ke.addToRenderList(g,A),this.info.render.frame++,ie===!0&&lt.beginShadows();let Q=v.state.shadowsArray;be.render(Q,A,Z),ie===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=g.opaque,$=g.transmissive;if(v.setupLights(),Z.isArrayCamera){let he=Z.cameras;if($.length>0)for(let ve=0,Me=he.length;ve<Me;ve++)Kh(oe,$,A,he[ve]);b&&ke.render(A);for(let ve=0,Me=he.length;ve<Me;ve++){let Ee=he[ve];Zh(g,A,Ee,Ee.viewport)}}else $.length>0&&Kh(oe,$,A,Z),b&&ke.render(A),Zh(g,A,Z);P!==null&&(ae.updateMultisampleRenderTarget(P),ae.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,Z),ri.resetDefaultState(),z=-1,F=null,_.pop(),_.length>0?(v=_[_.length-1],ie===!0&&lt.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,m.pop(),g=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Z,Q){le.get(A.texture).__webglTexture=Z,le.get(A.depthTexture).__webglTexture=Q;let oe=le.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=Q===void 0,oe.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Z){let Q=le.get(A);Q.__webglFramebuffer=Z,Q.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,Q=0){P=A,w=Z,S=Q;let oe=!0,$=null,he=!1,ve=!1;if(A){let Me=le.get(A);if(Me.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(k.FRAMEBUFFER,null),oe=!1;else if(Me.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Me.__hasExternalTextures)ae.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pe=A.depthTexture;if(Me.__boundDepthTexture!==Pe){if(Pe!==null&&le.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}let Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let De=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=Array.isArray(De[Z])?De[Z][Q]:De[Z],he=!0):$=A.samples>0&&ae.useMultisampledRTT(A)===!1?le.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?De[Q]:De,N.copy(A.viewport),V.copy(A.scissor),H=A.scissorTest}else N.copy(q).multiplyScalar(te).floor(),V.copy(E).multiplyScalar(te).floor(),H=L;if(W.bindFramebuffer(k.FRAMEBUFFER,$)&&oe&&W.drawBuffers(A,$),W.viewport(N),W.scissor(V),W.setScissorTest(H),he){let Me=le.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me.__webglTexture,Q)}else if(ve){let Me=le.get(A.texture),Ee=Z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Me.__webglTexture,Q||0,Ee)}z=-1},this.readRenderTargetPixels=function(A,Z,Q,oe,$,he,ve){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){W.bindFramebuffer(k.FRAMEBUFFER,Me);try{let Ee=A.texture,De=Ee.format,Pe=Ee.type;if(!re.textureFormatReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Pe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=A.width-oe&&Q>=0&&Q<=A.height-$&&k.readPixels(Z,Q,oe,$,on.convert(De),on.convert(Pe),he)}finally{let Ee=P!==null?le.get(P).__webglFramebuffer:null;W.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,Z,Q,oe,$,he,ve){if(!A||!A.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){let Ee=A.texture,De=Ee.format,Pe=Ee.type;if(!re.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=A.width-oe&&Q>=0&&Q<=A.height-$){W.bindFramebuffer(k.FRAMEBUFFER,Me);let Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,he.byteLength,k.STREAM_READ),k.readPixels(Z,Q,oe,$,on.convert(De),on.convert(Pe),0);let He=P!==null?le.get(P).__webglFramebuffer:null;W.bindFramebuffer(k.FRAMEBUFFER,He);let vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await(function(ct,It,nt){return new Promise((function(We,ht){setTimeout((function Ot(){switch(ct.clientWaitSync(It,ct.SYNC_FLUSH_COMMANDS_BIT,0)){case ct.WAIT_FAILED:ht();break;case ct.TIMEOUT_EXPIRED:setTimeout(Ot,nt);break;default:We()}}),nt)}))})(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,he),k.deleteBuffer(Re),k.deleteSync(vt),he}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Z=null,Q=0){A.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1]);let oe=Math.pow(2,-Q),$=Math.floor(A.image.width*oe),he=Math.floor(A.image.height*oe),ve=Z!==null?Z.x:0,Me=Z!==null?Z.y:0;ae.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,ve,Me,$,he),W.unbindTexture()},this.copyTextureToTexture=function(A,Z,Q=null,oe=null,$=0){let he,ve,Me,Ee,De,Pe;A.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],Z=arguments[2],$=arguments[3]||0,Q=null),Q!==null?(he=Q.max.x-Q.min.x,ve=Q.max.y-Q.min.y,Me=Q.min.x,Ee=Q.min.y):(he=A.image.width,ve=A.image.height,Me=0,Ee=0),oe!==null?(De=oe.x,Pe=oe.y):(De=0,Pe=0);let Re=on.convert(Z.format),He=on.convert(Z.type);ae.setTexture2D(Z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);let vt=k.getParameter(k.UNPACK_ROW_LENGTH),ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),It=k.getParameter(k.UNPACK_SKIP_PIXELS),nt=k.getParameter(k.UNPACK_SKIP_ROWS),We=k.getParameter(k.UNPACK_SKIP_IMAGES),ht=A.isCompressedTexture?A.mipmaps[$]:A.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Me),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ee),A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,$,De,Pe,he,ve,Re,He,ht.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,$,De,Pe,ht.width,ht.height,Re,ht.data):k.texSubImage2D(k.TEXTURE_2D,$,De,Pe,he,ve,Re,He,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,It),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We),$===0&&Z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,Q=null,oe=null,$=0){let he,ve,Me,Ee,De,Pe,Re,He,vt;A.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],Z=arguments[3],$=arguments[4]||0);let ct=A.isCompressedTexture?A.mipmaps[$]:A.image;Q!==null?(he=Q.max.x-Q.min.x,ve=Q.max.y-Q.min.y,Me=Q.max.z-Q.min.z,Ee=Q.min.x,De=Q.min.y,Pe=Q.min.z):(he=ct.width,ve=ct.height,Me=ct.depth,Ee=0,De=0,Pe=0),oe!==null?(Re=oe.x,He=oe.y,vt=oe.z):(Re=0,He=0,vt=0);let It=on.convert(Z.format),nt=on.convert(Z.type),We;if(Z.isData3DTexture)ae.setTexture3D(Z,0),We=k.TEXTURE_3D;else{if(!Z.isDataArrayTexture&&!Z.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ae.setTexture2DArray(Z,0),We=k.TEXTURE_2D_ARRAY}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);let ht=k.getParameter(k.UNPACK_ROW_LENGTH),Ot=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Fe=k.getParameter(k.UNPACK_SKIP_PIXELS),Ue=k.getParameter(k.UNPACK_SKIP_ROWS),En=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,De),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe),A.isDataTexture||A.isData3DTexture?k.texSubImage3D(We,$,Re,He,vt,he,ve,Me,It,nt,ct.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(We,$,Re,He,vt,he,ve,Me,It,ct.data):k.texSubImage3D(We,$,Re,He,vt,he,ve,Me,It,nt,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,ht),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ue),k.pixelStorei(k.UNPACK_SKIP_IMAGES,En),$===0&&Z.generateMipmaps&&k.generateMipmap(We),W.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),W.unbindTexture()},this.resetState=function(){w=0,S=0,P=null,W.reset(),ri.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===xo?"display-p3":"srgb"}};var io=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ro=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var yg=new T;var xg=new T,Mg=new T,bg=new T,Sg=new ce,wg=new ce,Tg=new Ce,Eg=new T,Ag=new T,Cg=new T,Rg=new ce,Pg=new ce,Ig=new ce;var Lg=new T,Dg=new T;var Ug=new T,Ng=new qe,Og=new qe,Fg=new T,Bg=new Ce,zg=new T,kg=new Un,Gg=new Ce,Vg=new sr;var ar=class extends tn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,p){super(null,a,o,l,c,h,r,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hg=new Ce,Wg=new Ce;var so=class extends Xe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ur=new Ce,Ku=new Ce,Ea=[],Ju=new Dn,p0=new Ce,bs=new Te,Ss=new Un,Ui=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new so(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,p0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Ju.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Ss.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ur),Ku.multiplyMatrices(n,Ur),bs.matrixWorld=Ku,bs.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=s,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new so(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(r*this.count),r,this.count,ah,jn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}},Xg=new Ce,jg=new Ce,qg=new Ce,Yg=new pe(1,1,1),Zg=new Ce,Kg=new jr,Jg=new Dn,$g=new Un,Qg=new T,e1=new T,t1=new T,n1=new Cc,i1=new Te;var or=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ao=new T,oo=new T,$u=new Ce,ws=new sr,Aa=new Un,wl=new T,Qu=new T,Os=class extends dt{constructor(e=new Ie,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ao.fromBufferAttribute(t,r-1),oo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ao.distanceTo(oo);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;$u.copy(r).invert(),ws.copy(e.ray).applyMatrix4($u);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let f=p,g=d-1;f<g;f+=c){let v=h.getX(f),m=h.getX(f+1),_=Ca(this,e,ws,l,v,m);_&&t.push(_)}if(this.isLineLoop){let f=h.getX(d-1),g=h.getX(p),v=Ca(this,e,ws,l,f,g);v&&t.push(v)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=p,g=d-1;f<g;f+=c){let v=Ca(this,e,ws,l,f,f+1);v&&t.push(v)}if(this.isLineLoop){let f=Ca(this,e,ws,l,d-1,p);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ca(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(ao.fromBufferAttribute(a,r),oo.fromBufferAttribute(a,s),t.distanceSqToSegment(ao,oo,wl,Qu)>n)return;wl.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(wl);return o<e.near||o>e.far?void 0:{distance:o,point:Qu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var ed=new T,td=new T,lo=class extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ed.fromBufferAttribute(t,r),td.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ed.distanceTo(td);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rc=class extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new Ce,Pc=new sr,Ra=new Un,Pa=new T,gn=class extends dt{constructor(e=new Ie,t=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;nd.copy(r).invert(),Pc.copy(e.ray).applyMatrix4(nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);u<p;u++){let d=c.getX(u);Pa.fromBufferAttribute(h,d),id(Pa,d,l,r,e,t,this)}else for(let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);u<p;u++)Pa.fromBufferAttribute(h,u),id(Pa,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function id(i,e,t,n,r,s,a){let o=Pc.distanceSqToPoint(i);if(o<t){let l=new T;Pc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ce:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,r=[],s=[],a=[],o=new T,l=new Ce;for(let d=0;d<=e;d++){let f=d/e;r[d]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(wt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,f))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(wt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],d*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends vn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends Fs{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let p=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,r(a,o,p,d)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ia=new T,Tl=new dh,El=new dh,Al=new dh,_n=class extends vn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new T){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ia.subVectors(r[0],r[1]).add(r[0]),o=Ia);let u=r[c%s],p=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ia.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(l),d);g<1e-4&&(g=1),f<1e-4&&(f=g),v<1e-4&&(v=g),Tl.initNonuniformCatmullRom(o.x,u.x,p.x,l.x,f,g,v),El.initNonuniformCatmullRom(o.y,u.y,p.y,l.y,f,g,v),Al.initNonuniformCatmullRom(o.z,u.z,p.z,l.z,f,g,v)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(o.x,u.x,p.x,l.x,this.tension),El.initCatmullRom(o.y,u.y,p.y,l.y,this.tension),Al.initCatmullRom(o.z,u.z,p.z,l.z,this.tension));return n.set(Tl.calc(h),El.calc(h),Al.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rd(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Cs(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Rs(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var co=class extends vn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,r.x,s.x,a.x,o.x),Rs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends vn{constructor(e=new T,t=new T,n=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,r.x,s.x,a.x,o.x),Rs(e,r.y,s.y,a.y,o.y),Rs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends vn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends vn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Cs(e,r.x,s.x,a.x),Cs(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends vn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Cs(e,r.x,s.x,a.x),Cs(e,r.y,s.y,a.y),Cs(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(rd(o,l.x,c.x,h.x,u.x),rd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},mo=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:_n,CubicBezierCurve:co,CubicBezierCurve3:Lc,EllipseCurve:Fs,LineCurve:ho,LineCurve3:Dc,QuadraticBezierCurve:uo,QuadraticBezierCurve3:po,SplineCurve:fo}),Uc=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new mo[r.type]().fromJSON(r))}return this}},Bs=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new uo(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new co(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Fs(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yr=class i extends Ie{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=wt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,p=new ce,d=new T,f=new T,g=new T,v=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=1*m,d.y=-v,d.z=0*m,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:v=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=1*m,d.y=-v,d.z=0*m,f.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(f)}for(let _=0;_<=t;_++){let x=n+_*h*r,y=Math.sin(x),w=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*w,a.push(u.x,u.y,u.z),p.x=_/t,p.y=S/(e.length-1),o.push(p.x,p.y);let P=l[3*S+0]*y,z=l[3*S+1],F=l[3*S+0]*w;c.push(P,z,F)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let y=x+_*e.length,w=y,S=y+e.length,P=y+e.length+1,z=y+1;s.push(w,S,z),s.push(P,z,S)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},zs=class i extends Yr{constructor(e=1,t=1,n=4,r=8){let s=new Bs;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},On=class i extends Ie{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nn=class i extends Ie{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],p=[],d=[],f=0,g=[],v=n/2,m=0;function _(x){let y=f,w=new ce,S=new T,P=0,z=x===!0?e:t,F=x===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,v*F,0),p.push(0,F,0),d.push(.5,.5),f++;let N=f;for(let V=0;V<=r;V++){let H=V/r*l+o,K=Math.cos(H),j=Math.sin(H);S.x=z*j,S.y=v*F,S.z=z*K,u.push(S.x,S.y,S.z),p.push(0,F,0),w.x=.5*K+.5,w.y=.5*j*F+.5,d.push(w.x,w.y),f++}for(let V=0;V<r;V++){let H=y+V,K=N+V;x===!0?h.push(K,K+1,H):h.push(K+1,K,H),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}(function(){let x=new T,y=new T,w=0,S=(t-e)/n;for(let P=0;P<=s;P++){let z=[],F=P/s,N=F*(t-e)+e;for(let V=0;V<=r;V++){let H=V/r,K=H*l+o,j=Math.sin(K),J=Math.cos(K);y.x=N*j,y.y=-F*n+v,y.z=N*J,u.push(y.x,y.y,y.z),x.set(j,S,J).normalize(),p.push(x.x,x.y,x.z),d.push(H,1-F),z.push(f++)}g.push(z)}for(let P=0;P<r;P++)for(let z=0;z<s;z++){let F=g[z][P],N=g[z+1][P],V=g[z+1][P+1],H=g[z][P+1];e>0&&(h.push(F,N,H),w+=3),t>0&&(h.push(N,V,H),w+=3)}c.addGroup(m,w,0),m+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(p,3)),this.setAttribute("uv",new Se(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yn=class i extends nn{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lr=class i extends Ie{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,d,f,g){let v=g+1,m=[];for(let _=0;_<=v;_++){m[_]=[];let x=p.clone().lerp(f,_/v),y=d.clone().lerp(f,_/v),w=v-_;for(let S=0;S<=w;S++)m[_][S]=S===0&&_===v?x:x.clone().lerp(y,S/w)}for(let _=0;_<v;_++)for(let x=0;x<2*(v-_)-1;x++){let y=Math.floor(x/2);x%2==0?(l(m[_][y+1]),l(m[_+1][y]),l(m[_][y])):(l(m[_][y+1]),l(m[_+1][y+1]),l(m[_+1][y]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,d){let f=3*p;d.x=e[f+0],d.y=e[f+1],d.z=e[f+2]}function h(p,d,f,g){g<0&&p.x===1&&(a[d]=p.x-1),f.x===0&&f.z===0&&(a[d]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new T,f=new T,g=new T;for(let v=0;v<t.length;v+=3)c(t[v+0],d),c(t[v+1],f),c(t[v+2],g),o(d,f,g,p)})(r),(function(p){let d=new T;for(let f=0;f<s.length;f+=3)d.x=s[f+0],d.y=s[f+1],d.z=s[f+2],d.normalize().multiplyScalar(p),s[f+0]=d.x,s[f+1]=d.y,s[f+2]=d.z})(n),(function(){let p=new T;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let g=u(p)/2/Math.PI+.5,v=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);a.push(g,1-v)}var d;(function(){let f=new T,g=new T,v=new T,m=new T,_=new ce,x=new ce,y=new ce;for(let w=0,S=0;w<s.length;w+=9,S+=6){f.set(s[w+0],s[w+1],s[w+2]),g.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),_.set(a[S+0],a[S+1]),x.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),m.copy(f).add(g).add(v).divideScalar(3);let P=u(m);h(_,S+0,f,P),h(x,S+2,g,P),h(y,S+4,v,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],v=a[f+2],m=a[f+4],_=Math.max(g,v,m),x=Math.min(g,v,m);_>.9&&x<.1&&(g<.2&&(a[f+0]+=1),v<.2&&(a[f+2]+=1),m<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Nc=class i extends lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},La=new T,Da=new T,Cl=new T,Ua=new Ri,Oc=class extends Ie{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Fr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:v,c:m}=Ua;if(g.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Ua.getNormal(Cl),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let x=(_+1)%3,y=u[_],w=u[x],S=Ua[h[_]],P=Ua[h[x]],z=`${y}_${w}`,F=`${w}_${y}`;F in p&&p[F]?(Cl.dot(p[F].normal)<=s&&(d.push(S.x,S.y,S.z),d.push(P.x,P.y,P.z)),p[F]=null):z in p||(p[z]={index0:c[_],index1:c[x],normal:Cl.clone()})}}for(let f in p)if(p[f]){let{index0:g,index1:v}=p[f];La.fromBufferAttribute(o,g),Da.fromBufferAttribute(o,v),d.push(La.x,La.y,La.z),d.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new Se(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xn=class extends Bs{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Bs().fromJSON(r))}return this}},f0=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=sd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,p,d;if(n&&(s=(function(f,g,v,m){let _=[],x,y,w,S,P;for(x=0,y=g.length;x<y;x++)w=g[x]*m,S=x<y-1?g[x+1]*m:f.length,P=sd(f,w,S,m,!1),P===P.next&&(P.steiner=!0),_.push(b0(P));for(_.sort(y0),x=0;x<_.length;x++)v=x0(_[x],v);return v})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],p=i[f+1],u<o&&(o=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return ks(s,a,t,o,l,d,0),a};function sd(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let p=l,d=c-h;p<c;p+=h)u+=(o[d]-o[p])*(o[p+1]+o[d+1]),d=p;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=ad(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=ad(s,i[s],i[s+1],a);return a&&bo(a,a.next)&&(Vs(a),a=a.next),a}function cr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!bo(n,n.next)&&ut(n.prev,n,n.next)!==0)n=n.next;else{if(Vs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ks(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,p,d){let f=h;do f.z===0&&(f.z=Fc(f.x,f.y,u,p,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let v,m,_,x,y,w,S,P,z=1;do{for(m=g,g=null,y=null,w=0;m;){for(w++,_=m,S=0,v=0;v<z&&(S++,_=_.nextZ,_);v++);for(P=z;S>0||P>0&&_;)S!==0&&(P===0||!_||m.z<=_.z)?(x=m,m=m.nextZ,S--):(x=_,_=_.nextZ,P--),y?y.nextZ=x:g=x,x.prevZ=y,y=x;m=_}y.nextZ=null,z*=2}while(w>1)})(f)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?g0(i,n,r,s):m0(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Vs(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?ks(i=v0(cr(i),e,t),e,t,n,r,s,2):a===2&&_0(i,e,t,n,r,s):ks(cr(i),e,t,n,r,s,1);break}}function m0(i){let e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,p=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=u&&f.y<=d&&Or(r,o,s,l,a,c,f.x,f.y)&&ut(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function g0(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ut(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,p=a.y,d=o<l?o<c?o:c:l<c?l:c,f=h<u?h<p?h:p:u<p?u:p,g=o>l?o>c?o:c:l>c?l:c,v=h>u?h>p?h:p:u>p?u:p,m=Fc(d,f,e,t,n),_=Fc(g,v,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=d&&x.x<=g&&x.y>=f&&x.y<=v&&x!==r&&x!==a&&Or(o,h,l,u,c,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=g&&y.y>=f&&y.y<=v&&y!==r&&y!==a&&Or(o,h,l,u,c,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=f&&x.y<=v&&x!==r&&x!==a&&Or(o,h,l,u,c,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=g&&y.y>=f&&y.y<=v&&y!==r&&y!==a&&Or(o,h,l,u,c,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function v0(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!bo(r,s)&&zd(r,n,n.next,s)&&Gs(r,s)&&Gs(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Vs(n),Vs(n.next),n=i=s),n=n.next}while(n!==i);return cr(n)}function _0(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S0(a,o)){let l=kd(a,o);return a=cr(a,a.next),l=cr(l,l.next),ks(a,e,t,n,r,s,0),void ks(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function y0(i,e){return i.x-e.x}function x0(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let v=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(v<=c&&v>l&&(l=v,a=o.x<o.next.x?o:o.next,v===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,p=a.x,d=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=p&&c!==o.x&&Or(h<d?c:l,h,p,d,h<d?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Gs(o,r)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&M0(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=kd(t,i);return cr(n,n.next),cr(t,t.next)}function M0(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function Fc(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function b0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Or(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function S0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&zd(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Gs(i,e)&&Gs(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||bo(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function bo(i,e){return i.x===e.x&&i.y===e.y}function zd(i,e,t,n){let r=Oa(ut(i,e,t)),s=Oa(ut(i,e,n)),a=Oa(ut(t,n,i)),o=Oa(ut(t,n,e));return r!==s&&a!==o||!(r!==0||!Na(i,t,e))||!(s!==0||!Na(i,n,e))||!(a!==0||!Na(t,i,n))||!(o!==0||!Na(t,e,n))}function Na(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Oa(i){return i>0?1:i<0?-1:0}function Gs(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function kd(i,e){let t=new Bc(i.i,i.x,i.y),n=new Bc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ad(i,e,t,n){let r=new Bc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ii=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];od(e),ld(n,e);let a=e.length;t.forEach(od);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ld(n,t[l]);let o=f0(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function od(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ld(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ni=class i extends Ie{constructor(e=new xn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:w0,x,y,w,S,P,z=!1;m&&(x=m.getSpacedPoints(h),z=!0,p=!1,y=m.computeFrenetFrames(h,!1),w=new T,S=new T,P=new T),p||(v=0,d=0,f=0,g=0);let F=o.extractPoints(c),N=F.shape,V=F.holes;if(!Ii.isClockWise(N)){N=N.reverse();for(let R=0,D=V.length;R<D;R++){let b=V[R];Ii.isClockWise(b)&&(V[R]=b.reverse())}}let H=Ii.triangulateShape(N,V),K=N;for(let R=0,D=V.length;R<D;R++){let b=V[R];N=N.concat(b)}function j(R,D,b){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(D,b)}let J=N.length,ee=H.length;function te(R,D,b){let B,O,re,W=R.x-D.x,se=R.y-D.y,le=b.x-R.x,ae=b.y-R.y,ge=W*W+se*se,_e=W*ae-se*le;if(Math.abs(_e)>Number.EPSILON){let xe=Math.sqrt(ge),Le=Math.sqrt(le*le+ae*ae),ze=D.x-se/xe,Be=D.y+W/xe,we=((b.x-ae/Le-ze)*ae-(b.y+le/Le-Be)*le)/(W*ae-se*le);B=ze+W*we-R.x,O=Be+se*we-R.y;let Ve=B*B+O*O;if(Ve<=2)return new ce(B,O);re=Math.sqrt(Ve/2)}else{let xe=!1;W>Number.EPSILON?le>Number.EPSILON&&(xe=!0):W<-Number.EPSILON?le<-Number.EPSILON&&(xe=!0):Math.sign(se)===Math.sign(ae)&&(xe=!0),xe?(B=-se,O=W,re=Math.sqrt(ge)):(B=W,O=se,re=Math.sqrt(ge/2))}return new ce(B/re,O/re)}let ne=[];for(let R=0,D=K.length,b=D-1,B=R+1;R<D;R++,b++,B++)b===D&&(b=0),B===D&&(B=0),ne[R]=te(K[R],K[b],K[B]);let U=[],q,E=ne.concat();for(let R=0,D=V.length;R<D;R++){let b=V[R];q=[];for(let B=0,O=b.length,re=O-1,W=B+1;B<O;B++,re++,W++)re===O&&(re=0),W===O&&(W=0),q[B]=te(b[B],b[re],b[W]);U.push(q),E=E.concat(q)}for(let R=0;R<v;R++){let D=R/v,b=d*Math.cos(D*Math.PI/2),B=f*Math.sin(D*Math.PI/2)+g;for(let O=0,re=K.length;O<re;O++){let W=j(K[O],ne[O],B);ie(W.x,W.y,-b)}for(let O=0,re=V.length;O<re;O++){let W=V[O];q=U[O];for(let se=0,le=W.length;se<le;se++){let ae=j(W[se],q[se],B);ie(ae.x,ae.y,-b)}}}let L=f+g;for(let R=0;R<J;R++){let D=p?j(N[R],E[R],L):N[R];z?(S.copy(y.normals[0]).multiplyScalar(D.x),w.copy(y.binormals[0]).multiplyScalar(D.y),P.copy(x[0]).add(S).add(w),ie(P.x,P.y,P.z)):ie(D.x,D.y,0)}for(let R=1;R<=h;R++)for(let D=0;D<J;D++){let b=p?j(N[D],E[D],L):N[D];z?(S.copy(y.normals[R]).multiplyScalar(b.x),w.copy(y.binormals[R]).multiplyScalar(b.y),P.copy(x[R]).add(S).add(w),ie(P.x,P.y,P.z)):ie(b.x,b.y,u/h*R)}for(let R=v-1;R>=0;R--){let D=R/v,b=d*Math.cos(D*Math.PI/2),B=f*Math.sin(D*Math.PI/2)+g;for(let O=0,re=K.length;O<re;O++){let W=j(K[O],ne[O],B);ie(W.x,W.y,u+b)}for(let O=0,re=V.length;O<re;O++){let W=V[O];q=U[O];for(let se=0,le=W.length;se<le;se++){let ae=j(W[se],q[se],B);z?ie(ae.x,ae.y+x[h-1].y,x[h-1].x+b):ie(ae.x,ae.y,u+b)}}}function Y(R,D){let b=R.length;for(;--b>=0;){let B=b,O=b-1;O<0&&(O=R.length-1);for(let re=0,W=h+2*v;re<W;re++){let se=J*re,le=J*(re+1);M(D+B+se,D+O+se,D+O+le,D+B+le)}}}function ie(R,D,b){l.push(R),l.push(D),l.push(b)}function C(R,D,b){I(R),I(D),I(b);let B=r.length/3,O=_.generateTopUV(n,r,B-3,B-2,B-1);X(O[0]),X(O[1]),X(O[2])}function M(R,D,b,B){I(R),I(D),I(B),I(D),I(b),I(B);let O=r.length/3,re=_.generateSideWallUV(n,r,O-6,O-3,O-2,O-1);X(re[0]),X(re[1]),X(re[3]),X(re[1]),X(re[2]),X(re[3])}function I(R){r.push(l[3*R+0]),r.push(l[3*R+1]),r.push(l[3*R+2])}function X(R){s.push(R.x),s.push(R.y)}(function(){let R=r.length/3;if(p){let D=0,b=J*D;for(let B=0;B<ee;B++){let O=H[B];C(O[2]+b,O[1]+b,O[0]+b)}D=h+2*v,b=J*D;for(let B=0;B<ee;B++){let O=H[B];C(O[0]+b,O[1]+b,O[2]+b)}}else{for(let D=0;D<ee;D++){let b=H[D];C(b[2],b[1],b[0])}for(let D=0;D<ee;D++){let b=H[D];C(b[0]+J*h,b[1]+J*h,b[2]+J*h)}}n.addGroup(R,r.length/3-R,0)})(),(function(){let R=r.length/3,D=0;Y(K,D),D+=K.length;for(let b=0,B=V.length;b<B;b++){let O=V[b];Y(O,D),D+=O.length}n.addGroup(R,r.length/3-R,1)})()}this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mo[r.type]().fromJSON(r)),new i(n,e.options)}},w0={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new ce(s,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],p=e[3*r],d=e[3*r+1],f=e[3*r+2],g=e[3*s],v=e[3*s+1],m=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-u),new ce(p,1-f),new ce(g,1-m)]:[new ce(o,1-l),new ce(h,1-u),new ce(d,1-f),new ce(v,1-m)]}},Hs=class i extends lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zc=class i extends lr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Kn=class i extends Ie{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,p=(t-e)/(r=Math.max(1,r)),d=new T,f=new ce;for(let g=0;g<=r;g++){for(let v=0;v<=n;v++){let m=s+v/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}u+=p}for(let g=0;g<r;g++){let v=g*(n+1);for(let m=0;m<n;m++){let _=m+v,x=_,y=_+n+1,w=_+n+2,S=_+1;o.push(x,y,S),o.push(y,w,S)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oi=class i extends Ie{constructor(e=new xn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,p=h.extractPoints(t),d=p.shape,f=p.holes;Ii.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,m=f.length;v<m;v++){let _=f[v];Ii.isClockWise(_)===!0&&(f[v]=_.reverse())}let g=Ii.triangulateShape(d,f);for(let v=0,m=f.length;v<m;v++){let _=f[v];d=d.concat(_)}for(let v=0,m=d.length;v<m;v++){let _=d[v];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,m=g.length;v<m;v++){let _=g[v],x=_[0]+u,y=_[1]+u,w=_[2]+u;n.push(x,y,w),l+=3}}this.setIndex(n),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},mt=class i extends Ie{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,p=new T,d=[],f=[],g=[],v=[];for(let m=0;m<=n;m++){let _=[],x=m/n,y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(r+S*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+S*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),v.push(S+y,1-x),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let x=h[m][_+1],y=h[m][_],w=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&d.push(x,y,S),(m!==n-1||l<Math.PI)&&d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},kc=class i extends lr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hn=class i extends Ie{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new T,u=new T,p=new T;for(let d=0;d<=n;d++)for(let f=0;f<=r;f++){let g=f/r*s,v=d/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(g),u.y=(e+t*Math.cos(v))*Math.sin(g),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(f/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=r;f++){let g=(r+1)*d+f-1,v=(r+1)*(d-1)+f-1,m=(r+1)*(d-1)+f,_=(r+1)*d+f;a.push(g,v,_),a.push(v,m,_)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Gc=class i extends Ie{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new T,p=new T,d=new T,f=new T,g=new T,v=new T,m=new T;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;_(y,s,a,e,d),_(y+.01,s,a,e,f),v.subVectors(f,d),m.addVectors(f,d),g.crossVectors(v,m),m.crossVectors(g,v),g.normalize(),m.normalize();for(let w=0;w<=r;++w){let S=w/r*Math.PI*2,P=-t*Math.cos(S),z=t*Math.sin(S);u.x=d.x+(P*m.x+z*g.x),u.y=d.y+(P*m.y+z*g.y),u.z=d.z+(P*m.z+z*g.z),l.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(x/n),h.push(w/r)}}for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){let w=(r+1)*(x-1)+(y-1),S=(r+1)*x+(y-1),P=(r+1)*x+y,z=(r+1)*(x-1)+y;o.push(w,S,z),o.push(S,P,z)}function _(x,y,w,S,P){let z=Math.cos(x),F=Math.sin(x),N=w/y*x,V=Math.cos(N);P.x=S*(2+V)*.5*z,P.y=S*(2+V)*F*.5,P.z=S*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Fn=class i extends Ie{constructor(e=new po(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new ce,h=new T,u=[],p=[],d=[],f=[];function g(v){h=e.getPointAt(v/t,h);let m=a.normals[v],_=a.binormals[v];for(let x=0;x<=r;x++){let y=x/r*Math.PI*2,w=Math.sin(y),S=-Math.cos(y);l.x=S*m.x+w*_.x,l.y=S*m.y+w*_.y,l.z=S*m.z+w*_.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let m=0;m<=r;m++)c.x=v/t,c.y=m/r,d.push(c.x,c.y)})(),(function(){for(let v=1;v<=t;v++)for(let m=1;m<=r;m++){let _=(r+1)*(v-1)+(m-1),x=(r+1)*v+(m-1),y=(r+1)*v+m,w=(r+1)*(v-1)+m;f.push(_,x,w),f.push(x,y,w)}})()})(),this.setIndex(f),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(p,3)),this.setAttribute("uv",new Se(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Vc=class extends Ie{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],p=u.start;for(let d=p,f=p+u.count;d<f;d+=3)for(let g=0;g<3;g++){let v=o.getX(d+g),m=o.getX(d+(g+1)%3);r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,m),cd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),cd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function cd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var r1=Object.freeze({__proto__:null,BoxGeometry:Nn,CapsuleGeometry:zs,CircleGeometry:On,ConeGeometry:yn,CylinderGeometry:nn,DodecahedronGeometry:Nc,EdgesGeometry:Oc,ExtrudeGeometry:Ni,IcosahedronGeometry:Hs,LatheGeometry:Yr,OctahedronGeometry:zc,PlaneGeometry:ft,PolyhedronGeometry:lr,RingGeometry:Kn,ShapeGeometry:Oi,SphereGeometry:mt,TetrahedronGeometry:kc,TorusGeometry:hn,TorusKnotGeometry:Gc,TubeGeometry:Fn,WireframeGeometry:Vc});var Bt=class extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function T0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:s=e,o=2*t-n;break;case au:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=e,l=2*n-t;break;case au:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(n-t)/(r-t),g=f*f,v=g*f,m=-p*v+2*p*g-p*f,_=(1+p)*v+(-1.5-2*p)*g+(-.5+p)*f+1,x=(-1-d)*v+(1.5+d)*g+.5*f,y=d*v-d*g;for(let w=0;w!==o;++w)s[w]=m*a[h+w]+_*a[c+w]+x*a[l+w]+y*a[u+w];return s}},Wc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[c+p]*u+a[l+p]*h;return s}},Xc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case hc:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&T0(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ko,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,p=h+n;for(let d=0;d!==n;++d){let f=t[h+d];if(f!==t[u+d]||f!==t[p+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Ln.prototype.TimeBufferType=Float32Array,Ln.prototype.ValueBufferType=Float32Array,Ln.prototype.DefaultInterpolation=hc;var nr=class extends Ln{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="bool",nr.prototype.ValueBufferType=Array,nr.prototype.DefaultInterpolation=Wa,nr.prototype.InterpolantFactoryMethodLinear=void 0,nr.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Ln{};jc.prototype.ValueTypeName="color";var qc=class extends Ln{};qc.prototype.ValueTypeName="number";var Yc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(s,0,a,c-o,a,c,l);return s}},go=class extends Ln{InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion",go.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ln{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="string",ir.prototype.ValueBufferType=Array,ir.prototype.DefaultInterpolation=Wa,ir.prototype.InterpolantFactoryMethodLinear=void 0,ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Ln{};Zc.prototype.ValueTypeName="vector";var hd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kc=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null}}},E0=new Kc,Ws=class{constructor(e){this.manager=e!==void 0?e:E0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jc=class extends Ws{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=hd.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Ds("img");function l(){h(),hd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Kr=class extends Ws{constructor(e){super(e)}load(e,t,n,r){let s=new tn,a=new Jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,r),s}},Xs=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jr=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rl=new Ce,ud=new T,dd=new T,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pd=new Ce,Ts=new T,Pl=new T,$c=class extends vo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Pl.copy(n.position),Pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pl),n.updateMatrixWorld(),r.makeTranslation(-Ts.x,-Ts.y,-Ts.z),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}},mi=class extends Xs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $c}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qc=class extends vo{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var s1=new Ce,a1=new Ce,o1=new Ce;var l1=new T,c1=new Yn,h1=new T,u1=new T;var d1=new T,p1=new Yn,f1=new T,m1=new T;var ph="\\[\\]\\.:\\/",A0=new RegExp("["+ph+"]","g"),Il="[^"+ph+"]",C0="[^"+ph.replace("\\.","")+"]",R0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Il)+/(WCOD+)?/.source.replace("WCOD",C0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il)+"$"),P0=["material","materials","bones","map"],ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(e){let t=R0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);P0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(i,e,t){let n=t||ot.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);var fd=new Ce,_o=class{constructor(e,t,n=0,r=1/0){this.ray=new sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,n=[]){return eh(e,this,n,t),n.sort(md),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)eh(e[r],this,n,t);return n.sort(md),n}};function md(i,e){return i.distance-e.distance}function eh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)eh(s[a],e,t,!0)}}var v1=new ce;var _1=new T,y1=new T;var x1=new T;var M1=new T,b1=new Ce,S1=new Ce;var w1=new T,T1=new pe,E1=new pe;var A1=new T,C1=new T,R1=new T;var P1=new T,I1=new Ns;var L1=new Dn;var D1=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var fh=new ar(new Uint8Array([180,180,180,255]),1,1,qt);fh.needsUpdate=!0;var Mn={textile:{value:fh},botanical:{value:fh},textileReady:{value:0},botanicalReady:{value:0},time:{value:0},wind:{value:.5}};async function Gd(i){let e=new Kr;return Promise.all([["textile","textile-fast-v1.webp"],["botanical","botanical-fast-v1.webp"]].map(async([t,n])=>{let r=await e.loadAsync(new URL("../"+n,document.baseURI).href);return r.colorSpace=Jt,r.generateMipmaps=!0,r.minFilter=Xn,r.magFilter=Qt,r.anisotropy=Math.min(16,i.capabilities.getMaxAnisotropy()),r.wrapS=r.wrapT=qn,Mn[t].value=r,Mn[t+"Ready"].value=1,r}))}function Vd(i,e){Mn.time.value=i,Mn.wind.value=e}var I0=new Uint8Array([150,150,150,255]),Hd=new ar(I0,1,1,qt);Hd.needsUpdate=!0;var Wd={value:Hd},Xd={value:0},jd={value:0},L0={plaster:0,wood:1,roof:2,stone:3,grass:4,leaf:5,fabric:6,snow:7,petal:8,bark:9,leafDetail:10},D0={plaster:new Set(["#f0dfba","#edd7ac","#e7d7b2","#e4d5b2","#ead8b3","#e1cfa7","#e9d9b5","#f0e5c8","#e5d4ac","#e2d6b2","#e4daba","#dfc895"]),wood:new Set(["#785e4c","#927652","#735b48","#645346","#866948","#a17050","#9e8967","#a68b66","#8b775c","#9c845e","#a57a55","#8b7759","#baa47a","#a77d52","#8f785b","#a98a62","#8e7957","#9b855e","#b99a6d","#a68a64","#8b7658","#c5a675","#967b56","#a58c63","#b89a6a","#89745a","#a58c65","#ba985b","#b6a17b","#bda783","#b19a70","#a28a67"]),roof:new Set(["#b96953","#8f9b8d","#73928a","#638c89","#b68161","#688e88","#759a8c","#70948b","#668e87","#628b89","#789b8e","#b76c50","#b68161","#bf8061"]),stone:new Set(["#b7aa91","#bcaa8a","#d8d2b7","#c5b69b","#c0b59b","#c5ba9c","#d0c5a7","#d9caa9","#baaa90","#c5af7f","#bdbb9a","#b7ac8e","#c8b89a","#b9a484","#d4c3aa","#ad8e79","#dfd0a5","#daca9f"]),fabric:new Set(["#f1e5c9","#e9dcb8","#e8dac0","#a6bec1","#e8dac0","#f0e5ca","#c4ad77","#799ba8","#89a9ba","#c5a265","#b9a18c"])},U0=new Set(["#dab464","#d2b069","#d7b463","#d6b85c","#d3b161","#d8b968","#d2b16f","#caa665","#e1c784"]);function bn(i,e){if(i.userData.surface)return i;if(!e){for(let[t,n]of Object.entries(D0))if(n.has("#"+i.color.getHexString())){e=t;break}}return e?(i.userData.surface=e,i.defines={...i.defines,SURFACE_KIND:L0[e]},i.customProgramCacheKey=()=>`painted-surface-v7-${e}`,i.onBeforeCompile=t=>{t.uniforms.uPaintAtlas=Wd,t.uniforms.uPaintReady=Xd,t.uniforms.uWet=jd,t.uniforms.uBotanical=Mn.botanical,t.uniforms.uBotanicalReady=Mn.botanicalReady,t.uniforms.uDetailTime=Mn.time,t.uniforms.uDetailWind=Mn.wind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPaintPosition; varying vec3 vPaintNormal; varying vec2 vFineUV;uniform float uDetailTime;uniform float uDetailWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
   vFineUV=uv;
   #if SURFACE_KIND == 10
    float leafSeed=position.x*2.;
    #ifdef USE_INSTANCING
     leafSeed+=instanceMatrix[3].x*9.+instanceMatrix[3].z*5.;
    #endif
    transformed.z+=sin(uDetailTime*2.1+leafSeed)*uv.y*uv.y*(.008+uDetailWind*.04);
   #endif
   `).replace("#include <project_vertex>",`#include <project_vertex>
   vec4 paintLocal=vec4(transformed,1.);
   #ifdef USE_INSTANCING
    paintLocal=instanceMatrix*paintLocal;
   #endif
   vPaintPosition=(modelMatrix*paintLocal).xyz;vPaintNormal=normalize(inverseTransformDirection(transformedNormal,viewMatrix));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vPaintPosition;varying vec3 vPaintNormal;varying vec2 vFineUV;uniform sampler2D uPaintAtlas;uniform float uPaintReady;uniform float uWet;uniform sampler2D uBotanical;uniform float uBotanicalReady;
 float paintHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float paintNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(paintHash(i),paintHash(i+vec3(1,0,0)),f.x),mix(paintHash(i+vec3(0,1,0)),paintHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(paintHash(i+vec3(0,0,1)),paintHash(i+vec3(1,0,1)),f.x),mix(paintHash(i+vec3(0,1,1)),paintHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float paintAtlas(vec2 uv){
  // Mirror repeats and inset the samples so adjacent atlas quadrants never bleed.
  vec2 f=1.-abs(mod(uv,2.)-1.);vec2 origin=vec2(0.,.5);
  #if SURFACE_KIND == 1
   origin=vec2(.5,.5);
  #elif SURFACE_KIND == 2
   origin=vec2(0.,0.);
  #elif SURFACE_KIND == 3
   origin=vec2(.5,0.);
  #endif
  vec3 texel=texture2D(uPaintAtlas,origin+.009+f*.482).rgb;return dot(texel,vec3(.2126,.7152,.0722));
 }
 float botanicalHeight(vec2 uv,vec2 corner){vec2 f=1.-abs(mod(uv,2.)-1.);vec3 c=texture2D(uBotanical,corner+.005+f*.49).rgb;return clamp(dot(c,vec3(.2126,.7152,.0722))*2.15+.19,0.,1.);}
 float paintHeight(vec3 p){
  #if SURFACE_KIND < 4
   vec3 w=pow(abs(normalize(vPaintNormal)),vec3(6.));w/=max(w.x+w.y+w.z,.001);vec3 q=p;
   #if SURFACE_KIND == 1
    q*=vec3(1.3,.6,1.3);
   #elif SURFACE_KIND == 2
    q*=2.6;
   #elif SURFACE_KIND == 3
    q*=1.6;
   #else
    q*=1.2;
   #endif
   float texel=paintAtlas(q.zy)*w.x+paintAtlas(q.xz)*w.y+paintAtlas(q.xy)*w.z;
   return mix(.48+paintNoise(p*17.)*.17,texel,uPaintReady);
  #elif SURFACE_KIND == 4
   float blades=botanicalHeight(p.xz*.78,vec2(0.,.5));return mix(paintNoise(p*2.)*.63+paintNoise(p*27.)*.37,blades*.8+paintNoise(p*1.2)*.2,uBotanicalReady);
  #elif SURFACE_KIND == 5
   return mix(paintNoise(p*13.)*.65+paintNoise(p*39.)*.35,.37+botanicalHeight(p.xy*5.+p.z*.61,vec2(.5,.5))*.34,uBotanicalReady);
  #elif SURFACE_KIND == 6
   vec2 threads=vFineUV*185.;vec2 threadAA=fwidth(threads);return .53+.1*cos(threads.x*6.28)*cos(threads.y*6.28)*exp(-dot(threadAA,threadAA)*3.);
  #elif SURFACE_KIND == 7
   return .6+paintNoise(p*95.)*.14;
  #elif SURFACE_KIND == 8
   return mix(.5,botanicalHeight(vFineUV,vec2(0.,0.)),uBotanicalReady);
  #elif SURFACE_KIND == 9
   return mix(.5,botanicalHeight(vec2(vFineUV.x*1.3,vFineUV.y*.8),vec2(.5,0.)),uBotanicalReady);
  #else
   return mix(.5,botanicalHeight(vFineUV,vec2(.5,.5)),uBotanicalReady);
  #endif
 }
 `).replace("#include <map_fragment>",`#include <map_fragment>
 float paintH=paintHeight(vPaintPosition);
 #if SURFACE_KIND == 0
  diffuseColor.rgb*=mix(.78,1.13,paintH);diffuseColor.rgb*=.93+.07*smoothstep(.1,.55,vPaintPosition.y);
 #elif SURFACE_KIND == 1
  diffuseColor.rgb*=mix(.72,1.16,paintH);
 #elif SURFACE_KIND == 2
  diffuseColor.rgb*=mix(.76,1.14,paintH);
 #elif SURFACE_KIND == 3
  diffuseColor.rgb*=mix(.77,1.12,paintH);
 #elif SURFACE_KIND == 4
  float mottling=paintNoise(vPaintPosition*1.5);diffuseColor.rgb*=mix(.82,1.12,paintH);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(1.09,1.02,.86),mottling*.3);
 #elif SURFACE_KIND == 5
  diffuseColor.rgb*=mix(.77,1.12,paintH);diffuseColor.rgb+=vec3(.022,.026,.005)*pow(max(vPaintNormal.y,0.),2.);
 #elif SURFACE_KIND == 8
  diffuseColor.rgb*=mix(.76,1.2,paintH);diffuseColor.rgb+=vec3(.035,.02,.018)*(1.-abs(dot(normalize(vPaintNormal),normalize(cameraPosition-vPaintPosition))));
 #elif SURFACE_KIND == 9
  diffuseColor.rgb*=mix(.71,1.15,paintH);
 #elif SURFACE_KIND == 10
  diffuseColor.rgb*=mix(.72,1.12,paintH);diffuseColor.rgb+=vec3(.016,.023,.006)*(1.-abs(dot(normalize(vPaintNormal),normalize(cameraPosition-vPaintPosition))));
 #else
  diffuseColor.rgb*=mix(.88,1.08,paintH);
 #endif
 #if SURFACE_KIND < 5 || SURFACE_KIND == 9
  diffuseColor.rgb*=1.-uWet*.08;
 #endif
 `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor=clamp(roughnessFactor+(paintH-.55)*.13-uWet*${["fabric","petal","snow"].includes(e)?"0.":".16"},.22,1.);
 `).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 vec3 paintDx=dFdx(-vViewPosition),paintDy=dFdy(-vViewPosition);
 vec3 paintR1=cross(paintDy,normal),paintR2=cross(normal,paintDx);float paintDet=dot(paintDx,paintR1);
 float paintStrength=.006;
 #if SURFACE_KIND == 2 || SURFACE_KIND == 3
 paintStrength=.009;
 #elif SURFACE_KIND == 4
 paintStrength=.006;
 #elif SURFACE_KIND == 7
 paintStrength=.0015;
 #elif SURFACE_KIND == 8 || SURFACE_KIND == 10
 paintStrength=.002;
 #elif SURFACE_KIND == 9
 paintStrength=.008;
 #endif
 vec3 paintGradient=sign(paintDet)*(dFdx(paintH)*paintR1+dFdy(paintH)*paintR2);
 normal=normalize(max(abs(paintDet),.00000001)*normal-paintGradient*paintStrength);
 `),i.userData.shader=t},i):(U0.has("#"+i.color.getHexString())&&(i.metalness=.56,i.roughness=.32),i)}async function qd(i){let e=await new Kr().loadAsync(new URL("../paint-fast-v1.webp",document.baseURI).href);return e.colorSpace=Ci,e.generateMipmaps=!0,e.minFilter=Xn,e.magFilter=Qt,e.anisotropy=Math.min(16,i.capabilities.getMaxAnisotropy()),e.wrapS=qn,e.wrapT=qn,Wd.value=e,Xd.value=1,e}function Yd(i){jd.value=i==="rain"?1:0}function ur(i,e,t=1,n=!1){let r={uColor:{value:new pe(i)},uOpacity:{value:t},uSize:{value:e*Math.min(globalThis.devicePixelRatio||1,2)}},s=new pt({uniforms:r,transparent:!0,depthWrite:!1,blending:n?_d:vd,vertexShader:"uniform float uSize;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSize;}",fragmentShader:`uniform vec3 uColor;uniform float uOpacity;void main(){float r=length(gl_PointCoord-.5);float a=1.-smoothstep(.06,.5,r);gl_FragColor=vec4(uColor,a*uOpacity);
#include <colorspace_fragment>
}`});return s.color=r.uColor.value,Object.defineProperty(s,"opacity",{get:()=>r.uOpacity.value,set:a=>r.uOpacity.value=a,configurable:!0}),s}var mh=new Map;function et(i,e={}){let t=i+JSON.stringify(e);return mh.has(t)||mh.set(t,bn(new Bt({color:i,roughness:.86,metalness:0,...e}))),mh.get(t)}var fe={grass:bn(new Bt({color:"#91b768",roughness:.96}),"grass"),leaves:bn(new Bt({color:"#a4c67e",roughness:.91}),"leaf"),leaves2:bn(new Bt({color:"#d9a9b6",roughness:.91}),"leaf"),flower:bn(new Jn({color:"#efb2b6",roughness:.77,sheen:.4,sheenColor:"#f6d5d1",sheenRoughness:.75,side:At}),"petal"),bark:bn(new Bt({color:"#8f785b",roughness:.94}),"bark"),leafDetail:bn(new Bt({color:"#a4c67e",roughness:.83,side:At}),"leafDetail"),leafDetail2:bn(new Bt({color:"#d9a9b6",roughness:.84,side:At}),"leafDetail"),water:new Bt({color:"#72bfce",roughness:.26,metalness:.16,transparent:!0,opacity:.89}),snow:bn(et("#f4f5eb"),"snow"),glass:new Jn({color:"#a1bec9",emissive:"#ffc174",emissiveIntensity:.13,roughness:.16,metalness:.2,clearcoat:1,clearcoatRoughness:.12})},Kd=new Nn(1,1,1),Jd=new mt(1,16,10),gh=new Hs(1,1);function $d(i=!1){let e=i?4:2,t=8,n=[],r=[],s=[];for(let o=0;o<=t;o++)for(let l=0;l<=e;l++){let c=l/e,h=o/t,u=Math.pow(Math.sin(Math.PI*(.02+h*.96)),i?.62:.85)*(i?.57:.42),p=(c*2-1)*u;n.push(p,i?.13*Math.sin(h*Math.PI)+p*p*.17:h,i?h:.055*Math.sin(h*Math.PI)-Math.abs(p)*.07),r.push(c,h)}for(let o=0;o<t;o++)for(let l=0;l<e;l++){let c=o*(e+1)+l,h=c+e+1;s.push(c,h,c+1,h,h+1,c+1)}let a=new Ie;return a.setAttribute("position",new Se(n,3)),a.setAttribute("uv",new Se(r,2)),a.setIndex(s),a.computeVertexNormals(),a.userData.shared=!0,a}var N0=$d(!0),O0=$d(),vh=new mt(1,8,6);function Ye(i,e,t,n=0,r=0,s=0,a=1,o=1,l=1){let c=new Te(e,typeof t=="string"?et(t):t);return c.position.set(n,r,s),c.scale.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}var F0=(()=>{let i=new Nn(1,1,1,5,5,5),e=i.attributes.position,t=i.attributes.normal,n=[-.5,-.48,-.445,.445,.48,.5],r=new T,s=new T;for(let a=0;a<e.count;a++)r.set(n[Math.round((e.getX(a)+.5)*5)],n[Math.round((e.getY(a)+.5)*5)],n[Math.round((e.getZ(a)+.5)*5)]),s.copy(r).clampScalar(-.445,.445),r.sub(s).normalize(),t.setXYZ(a,r.x,r.y,r.z),s.addScaledVector(r,.055),e.setXYZ(a,s.x,s.y,s.z);return i.userData.shared=!0,i.userData.beveled=!0,i})();function G(i,e,t,n,r,s,a,o){let l=Math.min(r,s,a),c=Math.max(r,s,a),h=l>.14&&r*s*a>.02&&c/l<8?F0:Kd;return Ye(i,h,o,e,t+s/2,n,r,s,a)}function ye(i,e,t,n,r,s,a,o){if(o===fe.flower){let l=new Qe;l.position.set(e,t,n),i.add(l);for(let c=0;c<7;c++){let h=c*Math.PI*2/7,u=Ye(l,N0,o,0,Math.sin(h*2)*s*.08,0,r*.98,s*2.1,a*1.06);u.rotation.y=h,u.rotation.z=Math.sin(h*3)*.07}Ye(l,vh,"#e7c980",0,s*.22,0,r*.27,s*.35,a*.27);for(let c=0;c<7;c++){let h=c*2.399;Ye(l,vh,"#d9b36d",Math.cos(h)*r*.23,s*.51,Math.sin(h)*a*.23,r*.055,s*.07,a*.055)}return l}return Ye(i,Jd,o,e,t,n,r,s,a)}function ue(i,e,t,n,r,s,a,o,l=12){return Ye(i,new nn(r,s,a,l),o,e,t+a/2,n)}function Ut(i,e,t,n,r,s,a,o=8){return ue(i,e,t,n,0,r,s,a,o)}function xt(i,e,t,n,r){let s=new T(...t).sub(new T(...e)),a=Ye(i,new nn(n,n,s.length(),6),r);return a.position.copy(new T(...e).addScaledVector(s,.5)),a.quaternion.setFromUnitVectors(new T(0,1,0),s.normalize()),a}function Ae(i,e=0,t=0,n=0){let r=new Qe;return r.position.set(e,t,n),i.add(r),r}function $n(i){return i.userData.snow=!0,i.visible=!1,i}function gi(i,e,t,n,r,s,a,o){let l=new xn,c=.075,h=r/2,u=a/2;l.moveTo(-h+c,-u),l.lineTo(h-c,-u),l.quadraticCurveTo(h,-u,h,-u+c),l.lineTo(h,u-c),l.quadraticCurveTo(h,u,h-c,u),l.lineTo(-h+c,u),l.quadraticCurveTo(-h,u,-h,u-c),l.lineTo(-h,-u+c),l.quadraticCurveTo(-h,-u,-h+c,-u);let p=new Ni(l,{depth:s,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:3});return p.rotateX(-Math.PI/2),Ye(i,p,o,e,t,n)}function B0(){let i=new xn;i.moveTo(-.5,-.5),i.lineTo(.4,-.5),i.quadraticCurveTo(.55,-.5,.55,-.34),i.lineTo(.55,.34),i.quadraticCurveTo(.55,.5,.4,.5),i.lineTo(-.5,.5),i.closePath();let e=new Ni(i,{depth:.022,bevelEnabled:!0,bevelThickness:.005,bevelSize:.018,bevelSegments:1,curveSegments:3});return e.rotateX(-Math.PI/2),e}var Qd=B0();function sn(i,e,t,n,r,s,a,o){let l=new xn;l.moveTo(-r/2,0),l.lineTo(0,s),l.lineTo(r/2,0),l.closePath();let c=new Ni(l,{depth:a,bevelEnabled:!1});c.translate(0,0,-a/2),Ye(i,c,o,e,t,n);let h=Math.atan2(s,r/2),u=Math.hypot(s,r/2),p=Math.max(4,Math.ceil(u/.24)),d=Math.max(4,Math.ceil(a/.22)),f=[-.035,0,.035].map(g=>bn(et("#"+new pe(o).offsetHSL(0,0,g).getHexString()),"roof"));for(let g of[-1,1]){for(let m=0;m<p;m++)for(let _=0;_<d;_++){let x=(m+.5)/p,y=n-a/2+(_+.5)*a/d,w=Ye(i,Qd,f[(m*7+_*3+Math.floor(_/2))%3],e+g*r/2*x,t+s*(1-x)+.045,y,u/p*1.12,1,a/d*.98);w.rotation.z=-g*h}let v=G(i,e+g*r/4,t+s/2+.098,n,u+.06,.045,a+.08,fe.snow);v.rotation.z=-g*h,$n(v)}for(let g=0;g<Math.ceil(a/.21);g++){let v=n-a/2+(g+.5)*a/Math.ceil(a/.21),m=ue(i,e,t+s-.004,v,.073,.073,a/Math.ceil(a/.21)*1.06,f[2],10);m.rotation.x=Math.PI/2,m.position.y=t+s+.06,m.position.z=v}for(let g of[n-a/2-.015,n+a/2+.015])xt(i,[e-r/2,t,g],[e,t+s,g],.035,"#684e44"),xt(i,[e,t+s,g],[e+r/2,t,g],.035,"#684e44")}function Dt(i,e,t,n,r=.4,s=.5){G(i,e,t,n,r+.11,s+.1,.09,"#735b48"),G(i,e,t+.035,n+.05,r,s,.025,fe.glass),G(i,e,t+.03,n+.08,.035,s,.025,"#f0e2ba"),G(i,e,t+s*.51,n+.08,r,.035,.025,"#f0e2ba"),G(i,e,t-.045,n+.04,r+.17,.06,.15,"#e8d9b3")}function Bi(i,e,t,n,r=.83){G(i,e,t,n,.45,r,.1,"#645346"),G(i,e,t+.07,n+.06,.34,r-.15,.03,"#866948");for(let s=0;s<4;s++)G(i,e-.127+s*.085,t+.09,n+.079,.011,r-.19,.008,"#645346");G(i,e,t+r*.22,n+.087,.31,.032,.023,"#a38a63"),G(i,e,t+r*.76,n+.087,.31,.032,.023,"#a38a63"),ye(i,e+.11,t+r*.4,n+.1,.032,.032,.025,"#dab464"),G(i,e,t-.09,n+.2,.65,.09,.38,"#c5b69b")}function Ht(i,e,t,n,r=.6){G(i,e,t,n,r,.15,.22,"#a17050");for(let s=0;s<4;s++){let a=e-r*.36+s*r*.24;ye(i,a,t+.18,n,.14,.13,.13,"#6c8c51"),ye(i,a,t+.26,n+.015,.085,.065,.085,fe.flower)}}function Qn(i,e,t,n,r,s="#f2e8ca"){for(let a=0;a<=4;a++)G(i,e-r/2+a*r/4,t,n,.055,.35,.055,s);G(i,e,t+.1,n,r,.05,.05,s),G(i,e,t+.27,n,r,.045,.05,s)}function z0(i,e,t,n,r){for(let s=0;s<6;s++){let a=G(i,e-r/2+r/12+s*r/6,t,n,r/6,.055,.6,s%2?"#efe5c5":"#829c80");a.rotation.x=.16,G(i,e-r/2+r/12+s*r/6,t-.08,n+.29,r/6,.14,.035,s%2?"#efe5c5":"#829c80")}}function wo(i,e,t,n,r="#799ba8"){let s=Ae(i,e,t,n);G(s,0,0,0,.035,.8,.035,"#ba985b");let a=G(s,.18,.48,0,.34,.24,.026,r);return a.userData.flag=!0,s}function k0(i,e){let t=1.13+(e>=3?.56:0),n=1.42,r=1.35;gi(i,0,0,0,1.66,.15,1.62,"#b7aa91"),G(i,0,.15,0,n,t,r,"#f0dfba");for(let a of[-n/2,n/2])for(let o of[-r/2,r/2])G(i,a,.16,o,.075,t,.075,"#785e4c");G(i,0,.5,r/2+.015,n,.075,.065,"#927652"),G(i,0,.15+t-.08,r/2+.02,n,.09,.06,"#785e4c"),Bi(i,0,.2,r/2+.04),Dt(i,-.47,.72,r/2+.025,.25,.32),Dt(i,.47,.72,r/2+.025,.25,.32);let s=Ae(i,n/2+.02,0,0);if(s.rotation.y=Math.PI/2,Dt(s,0,.64,0,.53,.5),Ht(s,0,.43,.07,.65),sn(i,0,.15+t,0,1.76,.82,1.72,"#b96953"),G(i,-.43,t+.61,-.38,.26,.65,.27,"#d4c3aa"),G(i,-.43,t+1.18,-.38,.33,.1,.34,"#ad8e79"),e>=2){let a=Ae(i,.34,t+.43,.47);G(a,0,0,0,.48,.37,.53,"#edd7ac"),sn(a,0,.37,0,.64,.31,.65,"#8f9b8d"),Dt(a,0,.06,.28,.27,.28),Ht(i,-.49,.46,.75,.48),Ht(i,.49,.46,.75,.48);for(let o of[-1,1])G(i,o*.81,.12,.98,.08,.73,.08,"#9e8967");z0(i,0,.95,1.01,1.75)}if(e>=3){G(i,0,1.18,.91,1.58,.13,.65,"#a68b66"),Qn(i,0,1.31,1.22,1.56),Dt(i,-.34,1.25,.69,.36,.39),Dt(i,.34,1.25,.69,.36,.39);for(let a of[-.74,.74])xt(i,[a,.61,.69],[a,1.19,1.17],.035,"#8b775c")}if(e>=4){let a=Ae(i,-1.05,0,-.17);gi(a,0,0,0,.72,.13,1.15,"#b7aa91"),G(a,0,.13,0,.66,.84,1.02,"#e7d7b2"),sn(a,0,.97,0,.87,.59,1.2,"#73928a"),Dt(a,0,.4,.53,.38,.4),Qn(i,.4,.13,1.45,1.5),Ht(i,.4,.17,1.43,1.4),wo(i,.75,1.77,.66)}if(e>=5){let a=Ae(i,.89,0,-.44);ue(a,0,.14,0,.44,.49,2.35,"#e4d5b2",8),ue(a,0,2.49,0,.51,.51,.12,"#9c845e",8),Ut(a,0,2.61,0,.61,.84,"#638c89",8),$n(Ut(a,0,2.66,0,.61,.83,fe.snow,8)),ye(a,0,3.48,0,.065,.1,.065,"#d2b069");let o=ue(a,0,2.02,.456,.21,.21,.035,"#f4eccb",24);o.rotation.x=Math.PI/2,o.position.y=2.09,o.position.z=.456,G(a,0,2.02,.49,.025,.15,.015,"#6c6958"),G(a,.047,2.08,.495,.11,.025,.015,"#6c6958");for(let l of[-.65,.65])ue(i,l,.11,1.58,.15,.19,.25,"#dfd0a5")}}function G0(i,e){gi(i,0,.01,0,1.85,.12,1.8,"#bcaa8a"),G(i,0,.14,0,1.68,.055,1.6,"#9cae70");for(let t of[-.58,.58])for(let n of[-.48,.48]){G(i,t,.2,n,.47,.11,.47,"#a57a55");for(let r=0;r<5;r++){let s=r*2.4;ye(i,t+Math.cos(s)*.13,.4,n+Math.sin(s)*.13,.12,.1,.12,"#729757"),ye(i,t+Math.cos(s)*.14,.51,n+Math.sin(s)*.14,.12,.075,.12,fe.flower)}}for(let t of[-.96,.96]){let n=Ae(i,t,.14,0);n.rotation.y=Math.PI/2,Qn(n,0,0,0,1.65)}if(e>=2){for(let n of[-.46,.46])ue(i,n,.15,.9,.055,.065,1.21,"#e8d9b7",6);let t=new Te(new hn(.46,.055,6,16,Math.PI),et("#e8d9b7"));t.position.set(0,1.35,.9),i.add(t),t.castShadow=!0;for(let n=0;n<7;n++){let r=n*Math.PI/6;ye(i,Math.cos(r)*.47,1.35+Math.sin(r)*.47,.9,.14,.14,.1,"#72955c"),ye(i,Math.cos(r)*.47,1.41+Math.sin(r)*.47,.95,.085,.08,.08,fe.flower)}}if(e>=3&&(ue(i,0,.18,0,.36,.43,.19,"#d8d2b7",16),ue(i,0,.38,0,.31,.31,.035,fe.water,20),ue(i,0,.4,0,.075,.11,.43,"#e4daba",10),ue(i,0,.83,0,.23,.12,.06,"#e4daba",14),ye(i,0,.96,0,.11,.17,.11,fe.water)),e>=4){let t=Ae(i,0,.14,-.57);for(let n of[-.63,.63])for(let r of[-.42,.42])ue(t,n,0,r,.05,.055,1.35,"#ecdcb4",6);sn(t,0,1.35,0,1.52,.55,1.26,"#759a8c"),Qn(t,0,0,-.42,1.26),Ht(t,0,1.21,.52,1.4)}if(e>=5){for(let t of[-1,1]){let n=Ae(i,t*1.18,.15,-.05);G(n,0,0,0,.32,.3,1.9,"#79945c");for(let r=0;r<6;r++)ye(n,0,.36,-.78+r*.3,.19,.17,.19,"#8bab66");ue(i,t*1.07,.14,1.13,.15,.18,.26,"#daca9f",10),Ut(i,t*1.07,.4,1.13,.23,.6,"#729760",10)}ye(i,0,2.04,-.57,.06,.13,.06,"#d6b85c")}}function V0(i,e){let t=1.5+(e>=3?.48:0);gi(i,0,.01,0,1.6,.12,1.5,"#baaa90"),ue(i,0,.13,0,.52,.68,t,"#ead8b3",10);for(let r of[.45,.9,1.4])r<t&&ue(i,0,r,0,.69-r*.11,.69-r*.11,.065,"#a28a67",10);Ut(i,0,t+.13,0,.82,.77,"#688e88",10),$n(Ut(i,0,t+.19,0,.8,.76,fe.snow,10)),ye(i,0,t+.94,0,.06,.09,.06,"#d7b463"),Bi(i,0,.16,.68,.67);let n=Ae(i,0,t+.04,.67);n.userData.rotor=!0,ue(n,0,0,0,.14,.14,.15,"#b19a70",10).rotation.x=Math.PI/2;for(let r=0;r<4;r++){let s=Ae(n);s.rotation.z=r*Math.PI/2,G(s,0,.04,0,.08,1.11,.06,"#8b7759");for(let a=0;a<5;a++)G(s,.1,.32+a*.16,.02,.31,.105,.035,e>=4?"#f2e3ae":"#eee5c6");G(s,.24,.25,.02,.035,.94,.035,"#baa47a")}if(e>=2){let r=Ae(i,-.8,.03,-.22);G(r,0,0,0,.72,.76,1.08,"#e1cfa7"),sn(r,0,.76,0,.94,.43,1.23,"#b68161"),Dt(r,0,.25,.56,.38,.31),ue(i,.8,.14,.4,.23,.23,.44,"#a77d52",10),ue(i,.8,.24,.4,.24,.24,.045,"#7b7964",10)}if(e>=3){ue(i,0,1.2,0,.81,.81,.1,"#bda783",12);for(let s=0;s<10;s++){let a=s*Math.PI/5;G(i,Math.cos(a)*.78,1.29,Math.sin(a)*.78,.045,.3,.045,"#e8dbb7")}let r=new Te(new hn(.78,.027,5,20),et("#e8dbb7"));r.rotation.x=Math.PI/2,r.position.y=1.6,i.add(r)}if(e>=4){let r=Ae(i,1,.02,-.34);G(r,0,0,0,.78,1,1.03,"#e9d9b5"),sn(r,0,1,0,.97,.55,1.25,"#70948b"),Dt(r,0,.4,.55,.43,.4),Ht(r,0,.2,.6,.64),wo(i,-.54,1.17,-.48)}if(e>=5){for(let r of[-1,1])G(i,r*.7,.15,1.08,.06,.75,.06,"#b6a17b"),ye(i,r*.7,.96,1.08,.1,.13,.1,fe.glass);ue(i,0,t+.89,0,.24,.29,.14,"#caa665",10),Ut(i,0,t+1.03,0,.24,.45,"#e1c784",10),wo(i,0,t+1.43,0,"#89a9ba");for(let r of[-.5,.5])Ht(i,r,.15,1.36,.7)}}function H0(i,e){let t=1.7+(e-1)*.23;gi(i,0,.01,0,1.67,.15,1.62,"#c0b59b"),ue(i,0,.16,0,.42,.61,t,"#f0e5c8",12);for(let r=0;r<3;r++){let s=.36+r*t*.29,a=.6-(s-.16)/t*.18;ue(i,0,s,0,a,a,.12,"#9db1a0",12)}ue(i,0,t+.16,0,.61,.61,.15,"#c5af7f",12),ue(i,0,t+.31,0,.39,.39,.53,fe.glass,12);for(let r=0;r<6;r++){let s=r*Math.PI/3;G(i,Math.cos(s)*.39,t+.31,Math.sin(s)*.39,.045,.55,.045,"#8a7c62")}if(Ut(i,0,t+.86,0,.63,.56,"#628b89",12),$n(Ut(i,0,t+.91,0,.63,.55,fe.snow,12)),ye(i,0,t+1.49,0,.06,.12,.06,"#d3b161"),Bi(i,0,.18,.61,.66),e>=2){for(let s=0;s<12;s++){let a=s*Math.PI/6;G(i,Math.cos(a)*.62,t+.28,Math.sin(a)*.62,.035,.27,.035,"#d5c08d")}let r=new Te(new hn(.62,.025,6,24),et("#d5c08d"));r.rotation.x=Math.PI/2,r.position.y=t+.55,i.add(r)}if(e>=3){let r=Ae(i,-.79,0,-.13);G(r,0,.14,0,.77,.81,.99,"#e5d4ac"),sn(r,0,.95,0,.99,.43,1.17,"#668e87"),Dt(r,0,.42,.53,.41,.34),Ht(r,0,.23,.56,.67)}if(e>=4){for(let r of[-1,1])ue(i,r*.96,.12,.66,.21,.26,1.05,"#e2d6b2",8),Ut(i,r*.96,1.17,.66,.32,.57,"#789b8e",8),$n(Ut(i,r*.96,1.22,.66,.32,.56,fe.snow,8)),ye(i,r*.96,1.78,.66,.045,.07,.045,"#d8b968");Qn(i,0,.18,1.02,1.9),wo(i,.76,t-.2,-.48,"#c5a265")}if(e>=5){let r=new Te(new hn(.41,.09,7,18,Math.PI),et("#dfc895"));r.position.set(0,1.14,.97),i.add(r);for(let s of[-1,1])G(i,s*.41,.16,.97,.17,.99,.17,"#dfc895"),Ht(i,s*.98,.12,1.22,.71);ue(i,0,t+.85,0,.47,.47,.095,"#d2b16f",12)}let n=new mi("#ffd18a",0,4,2);n.position.set(0,t+.55,0),i.add(n),i.userData.lantern=n}function Ct(i){i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=new Map,n=[];i.traverse(r=>{if(!r.isMesh||r.isInstancedMesh||r.userData.snow)return;let s=r;for(;s&&s!==i;){if(s.userData.articulated||s.userData.rotor||s.userData.flag||s.userData.sway||s.userData.cloth||s.userData.chime||s.userData.pennant!==void 0)return;s=s.parent}if(r.material.transparent)return;let a=r.material.uuid,o=t.get(a);o||(o={mat:r.material,geos:[]},t.set(a,o));let l=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();l.applyMatrix4(new Ce().multiplyMatrices(e,r.matrixWorld)),o.geos.push(l),n.push(r)});for(let r of n)r.removeFromParent();for(let r of t.values()){let s=r.geos.reduce((u,p)=>u+p.attributes.position.array.length,0),a=new Float32Array(s),o=new Float32Array(s),l=new Float32Array(s/3*2),c=0;for(let u of r.geos)a.set(u.attributes.position.array,c),o.set(u.attributes.normal.array,c),u.attributes.uv&&l.set(u.attributes.uv.array,c/3*2),c+=u.attributes.position.array.length,u.dispose();let h=new Ie;h.setAttribute("position",new Xe(a,3)),h.setAttribute("normal",new Xe(o,3)),h.setAttribute("uv",new Xe(l,2)),h.computeBoundingSphere(),Ye(i,h,r.mat)}return i}function ep(i,e){let t=new Qe;return{house:k0,garden:G0,mill:V0,lighthouse:H0}[i](t,e),t.userData.type=i,t.userData.level=e,Ct(t),t}function _h(i,e,t,n=1,r=0){let s=Ae(i,e,.07,t);s.scale.setScalar(n),ue(s,0,0,0,.065,.12,1.17,fe.bark,12),xt(s,[0,.73,0],[.34,1.29,.04],.035,fe.bark);let a=Ae(s,0,1,0);if(a.userData.sway=!0,a.userData.phase=e*3+t,r===2)for(let u=0;u<3;u++)Ut(a,0,u*.36,0,.64-u*.14,.91,fe.leaves,10),$n(Ut(a,0,u*.36+.07,0,.6-u*.14,.86,fe.snow,10));else for(let[u,p,d,f]of[[0,.34,0,.68],[-.39,.12,.06,.48],[.36,.22,-.04,.5],[.08,.3,.4,.43]])ye(a,u,p,d,f,f*.86,f,r===1?fe.leaves2:fe.leaves),$n(ye(a,u,p+f*.47,d,f*.81,f*.24,f*.78,fe.snow));let o=r===2?84:144,l=new Ui(O0,r===1?fe.leafDetail2:fe.leafDetail,o),c=new dt,h=[[0,.34,0,.68],[-.39,.12,.06,.48],[.36,.22,-.04,.5],[.08,.3,.4,.43]];for(let u=0;u<o;u++){let p=u*2.399963,d=1-2*(u%36+.5)/36,f=Math.sqrt(1-d*d),g=new T(Math.cos(p)*f,d,Math.sin(p)*f),v=h[Math.floor(u/36)%4];if(r===2){let m=u%28/28*1.45,_=.65*(1-m/1.9);c.position.set(Math.cos(p)*_,m,Math.sin(p)*_),c.scale.set(.13,.24,.2)}else{c.position.set(v[0]+g.x*v[3]*.94,v[1]+g.y*v[3]*.79,v[2]+g.z*v[3]*.93);let m=.22+u%5*.018;c.scale.set(m,m,m)}c.quaternion.setFromUnitVectors(new T(0,0,1),g),c.rotateZ(p),c.updateMatrix(),l.setMatrixAt(u,c.matrix)}return l.instanceMatrix.needsUpdate=!0,l.castShadow=!0,l.receiveShadow=!0,l.userData.fineFoliage=!0,l.userData.seasonalFoliage=!0,a.add(l),Ct(a),s}function yh(i,e,t){let n=Ae(i,e,.05,t);ue(n,0,0,0,.055,.09,1.18,"#6b7667",7),G(n,0,1.18,0,.25,.33,.25,fe.glass),Ut(n,0,1.51,0,.22,.19,"#65776b",4);for(let r of[-1,1])for(let s of[-1,1])G(n,r*.12,1.18,s*.12,.027,.35,.027,"#687565")}function So(i,e,t,n=.4){let r="#"+new pe("#d9caa9").offsetHSL(0,0,Math.sin(e*29+t*17)*.035).getHexString(),s=gi(i,e,.075,t,n,.045,n*.88,bn(et(r),"stone"));s.rotation.y=Math.sin(e*12+t*7)*.18}function tp(i){let e=new Qe,t=Ae(e),n=Ae(e),r=Ae(e);e.userData.dynamic=r;let s=18.5,a=96,o=new xn;for(let m=0;m<=a;m++){let _=m/a*Math.PI*2,x=s*(1+.025*Math.sin(_*5)+.018*Math.cos(_*9)),y=Math.cos(_)*x,w=Math.sin(_)*x*.82;m?o.lineTo(y,w):o.moveTo(y,w)}let l=new Ni(o,{depth:1.15,steps:1,bevelEnabled:!0,bevelThickness:.21,bevelSize:.12,bevelSegments:2,curveSegments:2});l.rotateX(-Math.PI/2),Ye(t,l,"#b9a484",0,-1.35,0);let c=new Oi(o,2);c.rotateX(-Math.PI/2);let h=Ye(t,c,fe.grass,0,.03,0);h.receiveShadow=!0,h.castShadow=!1;let u=Ye(t,new nn(1,1,.16,96),et("#d8c798"),0,-1.2,0,18.9,1,15.55);u.castShadow=!1;for(let m=0;m<70;m++){let _=m/70*Math.PI*2;Ye(t,gh,m%3?"#b7ac8e":"#c8b89a",Math.cos(_)*18.25,-.54,Math.sin(_)*14.97,.43,.26+m%4*.1,.44).rotation.set(_,.3,_*.2)}for(let m=-15;m<=15;m++)So(n,m*.38,0,.35),So(n,m*.38,.38,.34);for(let m=-12;m<=12;m++)So(n,.02,m*.4,.35),So(n,.4,m*.4,.34);let p=Ye(n,new On(1,40),fe.water,4.23,.09,-2.62,1.73,1.2,1);p.rotation.x=-Math.PI/2,e.userData.pond=p;for(let m=0;m<19;m++){let _=m/19*Math.PI*2,x=Ye(n,gh,"#bdbb9a",4.23+Math.cos(_)*1.8,.12,-2.62+Math.sin(_)*1.25,.23,.15,.18);x.rotation.y=_}let d=Ae(n,3.17,.11,-2.65);d.rotation.y=-.15;for(let m=0;m<9;m++){let _=(m-4)*.22,x=.13+Math.cos((m-4)/5)*.19;G(d,0,x,_,.84,.085,.18,"#a98a62");for(let y of[-.44,.44])G(d,y,x,_,.045,.48,.045,"#8e7957"),m<8&&xt(d,[y,x+.49,_],[y,.13+Math.cos((m-3)/5)*.19+.49,_+.22],.03,"#9b855e")}for(let m=0;m<7;m++){let _=m*2.4,x=Ye(n,new On(.15,10),et("#83a66e"),4.55+Math.cos(_)*.8,.11,-2.6+Math.sin(_)*.55);x.rotation.x=-Math.PI/2,m%3===0&&ye(n,x.position.x,.17,x.position.z,.09,.065,.09,fe.flower)}let f=[[-5.6,-2.5,1.3,1],[-4.8,-3.9,1.1,0],[-3.4,-4.8,1.4,1],[-1.4,-5,1.1,2],[.7,-5.1,1.2,0],[3.5,-4.8,.8,2],[5.9,.4,1.35,0],[5.2,3.1,1.1,1],[3.6,4.55,1.2,0],[2.7,4.8,.8,1],[-2.1,4.8,1.1,2],[-5.1,4,.85,1],[-6.1,.8,1.1,0]];for(let m of f)_h(r,...m);for(let m=0;m<72;m++){let _=m*2.399,x=5.45+m%5*.22,y=Math.cos(_)*x,w=Math.sin(_)*x*.8;y>2.5&&w<-1.2||(ye(n,y,.16,w,.12,.12,.13,fe.leaves),m%2===0&&ye(n,y,.26,w,.08,.06,.08,fe.flower))}for(let[m,_]of[[-3.8,.7],[3.8,.8],[.8,3.7],[.8,-3.8]])yh(n,m,_);let g=Ae(n,-3.85,.07,1.3);for(let m of[-.42,.42])G(g,m,0,0,.065,.34,.4,"#798471"),G(g,m,.32,-.16,.05,.4,.05,"#798471");for(let m=0;m<3;m++)G(g,0,.33,-.15+m*.14,1.08,.045,.11,"#b99a6d");G(g,0,.58,-.18,1.08,.15,.06,"#b99a6d");let v=[];for(let m=0;m<i.length;m++){let[_,x]=i[m],y=Ae(n,_,.09,x),w=gi(y,0,0,0,2.13,.025,1.97,"#9cac78");w.receiveShadow=!0;for(let S of[-1,1])for(let P of[-1,1])G(y,S*.91,.035,P*.82,.2,.026,.04,"#e5dbb5"),G(y,S*.91,.035,P*.82,.04,.026,.2,"#e5dbb5");G(y,0,.05,0,.27,.025,.05,"#d5d5aa"),G(y,0,.05,0,.05,.025,.27,"#d5d5aa"),y.userData.plot=m,v.push(y)}e.userData.plots=v,Ct(t);for(let m of v)m.removeFromParent();Ct(n);for(let m of v)n.add(m);for(let m of r.children)Ct(m);return e}function es(i,e,t){let n=e==="winter"||t==="snow";i.traverse(r=>{r.userData.snow&&(r.visible=n),r.userData.seasonalFoliage&&(r.visible=!n)})}var Zd=new WeakMap;function qs(i,e,t,n){let r=Zd.get(i);r||(r=[],i.traverse(s=>{(s.userData.rotor||s.userData.flag||s.userData.sway||s.userData.lantern)&&r.push(s)}),Zd.set(i,r)),r.forEach(s=>{s.userData.rotor&&(s.rotation.z=-e*(.45+t*.45)),s.userData.flag&&(s.rotation.y=Math.sin(e*3+s.position.y)*(.12+t*.26),s.rotation.z=Math.sin(e*2.7)*.05),s.userData.sway&&(s.rotation.z=Math.sin(e*1.3+s.userData.phase)*(.025+t*.095),s.rotation.x=Math.cos(e*.9+s.userData.phase)*(.018+t*.055)),s.userData.lantern&&(s.userData.lantern.intensity=n*1.5)})}function ts(i){i.traverse(e=>{e.isMesh&&!e.geometry.userData.shared&&![Kd,Jd,gh,Qd,vh].includes(e.geometry)&&e.geometry.dispose()})}var vi={garden:{name:"\u82B1\u5703",cost:60,income:3,titles:["\u82B1\u95F4\u5C0F\u5703","\u8537\u8587\u82B1\u56ED","\u55B7\u6CC9\u5EAD\u56ED","\u82B1\u8BED\u51C9\u4EAD","\u7687\u5BB6\u82B1\u5EAD"],details:["\u6574\u9F50\u82B1\u7566\u4E0E\u767D\u8272\u77EE\u7BF1\u3002","\u82B1\u62F1\u95E8\u4E0E\u6500\u7F18\u8537\u8587\u3002","\u4E2D\u592E\u77F3\u96D5\u55B7\u6CC9\u4E0E\u6D41\u52A8\u6C34\u666F\u3002","\u9752\u74E6\u51C9\u4EAD\u3001\u82B1\u7BB1\u4E0E\u6728\u680F\u3002","\u5BF9\u79F0\u7EFF\u7BF1\u3001\u96D5\u82B1\u82B1\u76C6\u4E0E\u91D1\u8272\u4EAD\u9876\u3002"]},house:{name:"\u5C0F\u5C4B",cost:120,income:7,titles:["\u6797\u95F4\u5C0F\u5C4B","\u9601\u697C\u82B1\u820D","\u9633\u53F0\u6D0B\u9986","\u5EAD\u9662\u522B\u90B8","\u949F\u697C\u5E84\u56ED"],details:["\u5976\u6CB9\u8272\u5899\u9762\u3001\u7EA2\u74E6\u5761\u5C4B\u9876\u4E0E\u6728\u6784\u7A97\u3002","\u9601\u697C\u8001\u864E\u7A97\u3001\u82B1\u7BB1\u4E0E\u6761\u7EB9\u96E8\u68DA\u3002","\u65B0\u589E\u4E8C\u5C42\u3001\u89C2\u666F\u9633\u53F0\u548C\u6728\u680F\u6746\u3002","\u4FA7\u7FFC\u5BA2\u623F\u3001\u56F4\u680F\u5EAD\u9662\u4E0E\u8FCE\u98CE\u65D7\u5E1C\u3002","\u516B\u89D2\u949F\u697C\u3001\u94DC\u7EFF\u5C16\u9876\u548C\u5EAD\u9662\u77F3\u9970\u3002"]},mill:{name:"\u98CE\u8F66",cost:220,income:14,titles:["\u4E61\u95F4\u98CE\u8F66","\u8C37\u4ED3\u98CE\u8F66","\u56DE\u5ECA\u98CE\u8F66","\u4E30\u7A70\u5DE5\u574A","\u9EC4\u91D1\u98CE\u8F66\u9986"],details:["\u77F3\u7070\u5899\u3001\u9752\u8272\u9525\u9876\u4E0E\u6728\u5236\u98CE\u5E06\u3002","\u589E\u5EFA\u8C37\u4ED3\u3001\u7A97\u683C\u4E0E\u50A8\u7CAE\u6728\u6876\u3002","\u5854\u8EAB\u5347\u9AD8\uFF0C\u65B0\u589E\u73AF\u5F62\u89C2\u666F\u56DE\u5ECA\u3002","\u6269\u5EFA\u4FA7\u7FFC\u5DE5\u574A\uFF0C\u589E\u6DFB\u82B1\u7A97\u4E0E\u65D7\u5E1C\u3002","\u91D1\u8272\u51A0\u9876\u3001\u5EAD\u524D\u706F\u9970\u548C\u9C9C\u82B1\u8FCE\u5BBE\u9053\u3002"]},lighthouse:{name:"\u706F\u5854",cost:500,income:30,titles:["\u6D77\u98CE\u706F\u5854","\u661F\u706F\u773A\u53F0","\u5B88\u706F\u4EBA\u4E4B\u5BB6","\u53CC\u5854\u706F\u82D1","\u6668\u661F\u706F\u5BAB"],details:["\u77F3\u780C\u5854\u8EAB\u3001\u73BB\u7483\u706F\u5BA4\u4E0E\u9752\u94DC\u5854\u5C16\u3002","\u706F\u5BA4\u5468\u56F4\u589E\u5EFA\u91D1\u8272\u89C2\u666F\u62A4\u680F\u3002","\u4FA7\u7FFC\u5B88\u706F\u4EBA\u5C0F\u5C4B\u4E0E\u7A97\u53F0\u82B1\u7BB1\u3002","\u5165\u53E3\u53CC\u5C16\u5854\u3001\u56F4\u680F\u548C\u8FCE\u98CE\u65D7\u5E1C\u3002","\u4EEA\u5F0F\u62F1\u95E8\u3001\u91D1\u8272\u6A90\u9970\u4E0E\u5BF9\u79F0\u82B1\u5EAD\u3002"]}},dr=[[-3.3,-2.8],[0,-3.2],[-3.3,2.6],[0,2.8],[-5.1,-.05],[-1.7,-.1],[1.7,-.05],[3.5,2.4]],To=class{constructor(){this.coins=180,this.paused=!1,this.buildings=[{type:"house",slot:0,level:2},{type:"mill",slot:1,level:1},{type:"garden",slot:2,level:2}],this.selected=null}get income(){return 2+this.buildings.reduce((e,t)=>e+vi[t.type].income*t.level,0)}canBuild(e){let t=vi[e];return!!t&&!this.paused&&this.coins>=t.cost&&this.buildings.length<dr.length&&!(e!=="lighthouse"&&this.buildings.length===7&&!this.buildings.some(n=>n.type==="lighthouse"))&&!(e==="lighthouse"&&(this.buildings.length<3||this.buildings.some(n=>n.type===e)))}build(e){if(!this.canBuild(e))return null;let t=dr.findIndex((r,s)=>!this.buildings.some(a=>a.slot===s)),n={type:e,slot:t,level:1};return this.coins-=vi[e].cost,this.buildings.push(n),this.selected=n,n}upgradeCost(e){return e?Math.ceil(vi[e.type].cost*.7*e.level):0}canUpgrade(e){return!!e&&!this.paused&&e.level<5&&this.coins>=this.upgradeCost(e)}upgrade(e){return this.canUpgrade(e)?(this.coins-=this.upgradeCost(e),e.level++,!0):!1}tick(e){this.paused||(this.coins+=this.income*e)}gather(){this.paused||(this.coins+=12)}};var xh=new Map,ip=new mt(1,18,14);ip.userData.shared=!0;function Rt(i,e="cloth"){let t=i+e;if(xh.has(t))return xh.get(t);let n=new Jn({color:i,metalness:0,roughness:e==="hair"?.68:e==="skin"?.82:.9,sheen:e==="cloth"?.28:e==="hair"?.22:.06,sheenColor:e==="skin"?"#dfb39c":"#dbd5c8",sheenRoughness:.86});return n.userData.characterKind={skin:0,cloth:1,hair:2,eye:3,leather:4}[e]??4,xh.set(t,n),n}var Mh=new Jn({color:"#ffffff",vertexColors:!0,roughness:.85,metalness:0,sheen:.2,sheenColor:"#dbd5c8",sheenRoughness:.86});Mh.customProgramCacheKey=()=>"storybook-resident-v7";Mh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float characterKind;varying float vCharacterKind;varying vec2 vCharacterUV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCharacterKind=characterKind;vCharacterUV=uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vCharacterKind;varying vec2 vCharacterUV;`).replace("#include <map_fragment>",`#include <map_fragment>
 if(vCharacterKind>.5&&vCharacterKind<1.5){vec2 threads=vCharacterUV*185.;vec2 aa=fwidth(threads);diffuseColor.rgb*=.99+.022*cos(threads.x*6.283)*cos(threads.y*6.283)*exp(-dot(aa,aa)*3.);}
 `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor=vCharacterKind<.5?.82:vCharacterKind<1.5?.9:vCharacterKind<2.5?.68:vCharacterKind<3.5?.55:.86;
 `)};function ei(i){i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=[],n=[];i.traverse(p=>{if(!p.isMesh||p.material.transparent)return;let d=p;for(;d&&d!==i;){if(d.userData.articulated)return;d=d.parent}let f=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();f.applyMatrix4(new Ce().multiplyMatrices(e,p.matrixWorld)),t.push({geo:f,mat:p.material}),n.push(p)});let r=t.reduce((p,d)=>p+d.geo.attributes.position.count,0);if(!r)return;let s=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*2),l=new Float32Array(r*3),c=new Float32Array(r),h=0;for(let{geo:p,mat:d}of t){let f=p.attributes,g=f.position.count;s.set(f.position.array,h*3),a.set(f.normal.array,h*3),f.uv&&o.set(f.uv.array,h*2);for(let v=0;v<g;v++){let m=h+v;l[m*3]=f.color?f.color.getX(v):d.color.r,l[m*3+1]=f.color?f.color.getY(v):d.color.g,l[m*3+2]=f.color?f.color.getZ(v):d.color.b,c[m]=f.characterKind?f.characterKind.getX(v):d.userData.characterKind??4}h+=g,p.dispose()}for(let p of n)p.removeFromParent();let u=new Ie;for(let[p,d,f]of[["position",s,3],["normal",a,3],["uv",o,2],["color",l,3],["characterKind",c,1]])u.setAttribute(p,new Xe(d,f));u.computeBoundingSphere(),Bn(i,u,Mh)}function Bn(i,e,t,n=0,r=0,s=0,a=1,o=1,l=1){let c=new Te(e,t);return c.position.set(n,r,s),c.scale.set(a,o,l),c.castShadow=c.receiveShadow=!0,i.add(c),c}function Sn(i,e=0,t=0,n=0,r=!1){let s=new Qe;return s.position.set(e,t,n),r&&(s.userData.articulated=!0),i.add(s),s}function Mt(i,e,t,n,r,s,a,o){return Bn(i,ip,o,e,t,n,r,s,a)}function ns(i,e,t,n,r,s,a,o=1,l=1){return Bn(i,new zs(r,s,5,12),a,e,t,n,o,1,l)}function zi(i,e,t,n){let r=new _n(e.map(s=>new T(...s)));return Bn(i,new Fn(r,Math.min(64,Math.max(12,e.length*6)),t,6,!1),n)}function np(i,e,t,n=0,r=.74,s=0){let a=new Yr(e.map(([l,c])=>new ce(l,c)),32),o=a.attributes.position;if(s)for(let l=0;l<o.count;l++){let c=o.getX(l),h=o.getZ(l),u=1+Math.cos(Math.atan2(c,h)*10)*s*(1-o.getY(l)/.4);o.setX(l,c*u),o.setZ(l,h*u)}return a.computeVertexNormals(),Bn(i,a,t,0,n,0,1,1,r)}function is(i,e,t,n){let r=new _n(e.map(h=>new T(...h))),s=r.computeFrenetFrames(12,!1),a=[],o=[],l=[];for(let h=0;h<=12;h++){let u=h/12,p=r.getPointAt(u),d=t*(.55+.5*Math.sin(u*Math.PI))*(1-.92*u**3);for(let f=0;f<=8;f++){let g=f*Math.PI/4,v=p.clone().addScaledVector(s.normals[h],Math.cos(g)*d).addScaledVector(s.binormals[h],Math.sin(g)*d*.43);a.push(v.x,v.y,v.z),o.push(f/8,u)}}for(let h=0;h<12;h++)for(let u=0;u<8;u++){let p=h*9+u,d=p+9;l.push(p,d,p+1,d,d+1,p+1)}let c=new Ie;return c.setAttribute("position",new Se(a,3)),c.setAttribute("uv",new Se(o,2)),c.setIndex(l),c.computeVertexNormals(),Bn(i,c,n)}function W0(i){let e=17;for(let t of i)e=e*31+t.charCodeAt(0)>>>0;return e}function un(i,e={}){let{name:t="\u65C5\u884C\u8005",female:n=!1,child:r=!1,color:s="#688fa5",hair:a="#67483b",role:o="\u5C45\u6C11",lines:l=["\u6B22\u8FCE\u6765\u5C0F\u9547\u6563\u6B65\u3002"]}=e,c=W0(t),h=c%3,u=Rt(["#efc7ad","#e7bea2","#eac3ac"][c%3],"skin"),p=Rt(s),d=Rt("#ede1c9"),f=Rt(a,"hair"),g=Rt("#"+new pe(a).offsetHSL(0,0,.045).getHexString(),"hair"),v=Rt("#776354","leather"),m=Rt(r?"#a49780":"#64747c"),_=Rt("#c5a775","leather"),x=Sn(i),y=Sn(x);x.userData.resident={name:t,role:o,lines:l,reactUntil:0,nextLine:0},x.userData.character={female:n,child:r,seed:c,style:h},np(y,[[.112,0],[.127,.025],[n?.105:.122,.12],[n?.126:.157,.26],[n?.16:.183,.33],[.128,.37],[.057,.4]],p,.54,.7),ns(y,0,1.005,0,.05,.065,u);for(let E of[-1,1]){let L=Mt(y,E*.045,.946,.093,.034,.058,.013,d);L.rotation.z=E*.44}for(let E=0;E<3;E++)Mt(y,0,.72+E*.07,.119,.011,.011,.008,_);let w=null;n?(w=Sn(y,0,.31,0,!0),np(w,[[.211,0],[.214,.018],[.191,.11],[.15,.27],[.108,.39]],p,0,.79,.045),zi(w,Array.from({length:41},(E,L)=>{let Y=L*Math.PI/20;return[Math.cos(Y)*.211,.018,Math.sin(Y)*.167]}),.006,d),ei(w)):Mt(y,0,.543,-.012,.132,.08,.09,m),zi(y,Array.from({length:41},(E,L)=>{let Y=L*Math.PI/20;return[Math.cos(Y)*.114,.658,Math.sin(Y)*.085]}),.012,v),Mt(y,0,.658,.096,.025,.02,.008,_);let S=Sn(y,0,1.195,.005,!0),P=new mt(1,28,22),z=P.attributes.position;for(let E=0;E<z.count;E++){let L=z.getY(E);z.setX(E,z.getX(E)*(1-.27*yt.smoothstep(-L,.08,.92))),z.setZ(E,z.getZ(E)*(1-.12*Math.max(0,-L)))}P.computeVertexNormals(),Bn(S,P,u,0,0,0,.147,.179,.126);let F=[],N=Rt(["#697f85","#7d735f","#6c7e68"][h],"eye"),V=Rt("#454c4d","eye"),H=Rt("#f2eadd","eye"),K=Rt("#ce958c","skin").clone();K.transparent=!0,K.opacity=.25,K.depthWrite=!1;for(let E of[-1,1]){Mt(S,E*.143,-.018,-.007,.025,.041,.024,u),Mt(S,E*.146,-.018,.012,.011,.023,.008,Rt("#d9a593","skin"));let L=Sn(S,E*.058,.017,.112,!0);L.rotation.y=E*.12,Mt(L,0,0,0,.038,.021,.011,H),Mt(L,-E*.002,-.001,.011,.016,.019,.006,N),Mt(L,-E*.002,-.001,.017,.008,.014,.004,V),Mt(L,-.006,.007,.021,.005,.006,.003,H),ei(L),F.push(L),zi(S,[[E*.023,.029,.12],[E*.057,.043,.122],[E*.092,.03,.108]],.0032,f),zi(S,[[E*.025,.071,.117],[E*.058,.079,.118],[E*.086,.071,.103]],.0035,f);let Y=Mt(S,E*.083,-.039,.104,.027,.009,.004,K);Y.castShadow=!1}Mt(S,0,-.027,.124,.013,.024,.019,u),zi(S,[[-.022,-.078,.11],[0,-.083,.116],[.023,-.077,.11]],.0027,Rt("#a87870","skin")),Mt(S,0,-.105,.095,.028,.015,.007,u);let j=Sn(S),J=[];Bn(j,new mt(1,28,18,0,Math.PI*2,0,Math.PI*.61),f,0,.017,-.017,.155,.176,.14);for(let E=0;E<5;E++){let L=-.116+E*.051;is(j,[[L*.8,.155,.037],[L+.016,.129,.104],[L+.035,.073+E%2*.012,.115]],.031,E%2?f:g)}if(n){for(let E of[-1,1])is(j,[[E*.12,.11,.03],[E*.151,.012,.039],[E*.137,-.126,.025]],.044,f);if(r||h===1)for(let E of r?[-1,1]:[1]){let L=Sn(j,E*.12,.075,-.099,!0);is(L,[[0,0,0],[E*.056,-.08,-.045],[E*.055,-.215,-.023],[E*.007,-.31,.022]],r?.052:.073,f),Mt(L,0,-.025,0,.035,.024,.033,Rt(r?"#be9088":"#c8b88d")),ei(L),J.push(L)}else for(let E=0;E<5;E++){let L=(E-2)*.05;is(j,[[L,.1,-.102],[L*1.25,-.06,-.135],[L*1.3,h===2?-.28:-.16,-.09]],.047,E%2?f:g)}}else{for(let E of[-1,1])is(j,[[E*.125,.112,0],[E*.143,.01,.018],[E*.129,-.049,.02]],.027,f);is(j,[[-.09,.16,-.03],[.012,.202,.012],[.094,.133,.067]],.03,g)}r&&S.scale.setScalar(1.11);let ee=[],te=[],ne=[],U=[],q=[];for(let E of[-1,1]){let L=Sn(x,E*(n?.153:.174),.915,0,!0);L.userData.baseY=.915,L.userData.side=E,ns(L,E*.014,-.072,0,.048,.125,p),Mt(L,0,-.011,0,.06,.057,.055,p);let Y=Sn(L,E*.009,-.191,0,!0);ns(Y,0,-.075,0,.035,.123,r?u:p);let ie=Sn(Y,0,-.182,.007,!0);Mt(ie,0,0,0,.033,.045,.024,u),Mt(ie,-E*.027,.004,.012,.014,.024,.014,u),r||zi(Y,[[-.03,-.139,.012],[0,-.141,.036],[.03,-.139,.012]],.007,d),ei(ie),ei(Y),ei(L),ee.push(L),te.push(Y),ne.push(ie);let C=Sn(x,E*.078,.541,0,!0);ns(C,0,-.111,0,.051,.167,n?u:m);let M=Sn(C,0,-.264,0,!0);ns(M,0,-.097,0,.04,.159,r||n?u:m),(r||n)&&ns(M,0,-.177,0,.043,.039,d),Mt(M,0,-.231,.044,.061,.042,.114,v),Mt(M,0,-.249,.045,.062,.018,.112,Rt("#655950","leather")),ei(M),ei(C),U.push(C),q.push(M)}if(/咖啡|卖|菜|merchant|摊主/.test(o)){let E=new ft(.225,.28,8,8),L=E.attributes.position;for(let Y=0;Y<L.count;Y++)L.setZ(Y,.022*Math.cos(L.getX(Y)*18)+.02*(.14-L.getY(Y)));E.computeVertexNormals(),Bn(y,E,d,0,.53,.14);for(let Y of[-1,1])zi(y,[[Y*.074,.88,.11],[Y*.068,.73,.124],[Y*.083,.67,.137]],.012,d)}return/旅行/.test(t)&&(zi(y,[[-.13,.92,.09],[-.05,.76,.14],[.12,.58,.12]],.014,v),Mt(y,.137,.54,.072,.082,.106,.049,v),Mt(y,.139,.57,.108,.072,.04,.023,Rt("#b8a58a","leather"))),/钓|fish|守礁/.test(o)&&(Bn(S,new nn(.166,.183,.038,28),Rt("#cdbf95"),0,.157,-.01),Bn(S,new mt(1,24,12,0,Math.PI*2,0,Math.PI/2),Rt("#cdbf95"),0,.167,-.01,.132,.072,.119)),ei(S),ei(y),Object.assign(x.userData,{arms:ee,forearms:te,hands:ne,legs:U,knees:q,head:S,eyes:F,body:y,skirt:w,hair:J}),r&&x.scale.setScalar(.74),x}function _i(i,e,t=!1,n=.3){let r=i.userData,s=(r.actor||r.resident).reactUntil>e,a=r.character.seed,o=e*(r.character.child?6.2:5.5)+a%19,l=t?Math.abs(Math.sin(o))*.013:Math.sin(e*1.9+a)*.003;r.legs.forEach((u,p)=>{let d=Math.sin(o+p*Math.PI);u.rotation.x=t?d*.31:0,r.knees[p].rotation.x=t?Math.max(0,-d)*.48:.025}),r.arms.forEach((u,p)=>{u.position.y=u.userData.baseY+l,u.rotation.set(t?-Math.sin(o+p*Math.PI)*.25:.025,0,u.userData.side*.065),r.forearms[p].rotation.set(-.1,0,0),r.hands[p].rotation.z=0,s&&p===0&&(u.rotation.x=-.25,u.rotation.z=-1.03,r.forearms[p].rotation.z=-1.45,r.forearms[p].rotation.x=-.12,r.hands[p].rotation.z=Math.sin(e*8)*.28)}),r.body.position.y=l,r.body.rotation.y=t?Math.sin(o)*.018:0,r.head.rotation.y=s?0:Math.sin(e*.37+a)*.095,r.head.rotation.z=Math.sin(e*.6+a)*.018;let c=(e+a*.17)%4.9,h=c<.15?.12+.88*Math.abs(c-.075)/.075:1;r.eyes.forEach(u=>u.scale.y=h),r.skirt&&(r.skirt.rotation.z=t?Math.sin(o)*.027:Math.sin(e*1.4)*n*.014),r.hair.forEach((u,p)=>{u.rotation.x=Math.sin(e*2.4+p+a)*(.025+n*.1+(t?.04:0)),u.rotation.z=Math.sin(e*1.7+p)*.045})}function ki(i,e=0){i.userData.arms.forEach((t,n)=>{t.rotation.x=-.7,t.rotation.z=(n===0?-1:1)*.1,i.userData.forearms[n].rotation.x=-.72+Math.sin(e*1.2)*.025,i.userData.forearms[n].rotation.z=(n===0?-1:1)*.13})}function bh(i,e){let t=i.userData.resident;return t.reactUntil=e+3.2,`${t.name}\uFF1A${t.lines[t.nextLine++%t.lines.length]}`}function rp(i,e){let t=i.map((s,a)=>{let o=i[(a+1)%i.length];return Math.hypot(o[0]-s[0],o[1]-s[1])}),n=t.reduce((s,a)=>s+a,0),r=(e%n+n)%n;for(let s=0;s<i.length;s++){if(r<=t[s]){let a=i[s],o=i[(s+1)%i.length],l=r/t[s];return{x:a[0]+(o[0]-a[0])*l,z:a[1]+(o[1]-a[1])*l,angle:Math.atan2(o[0]-a[0],o[1]-a[1])}}r-=t[s]}return{x:i[0][0],z:i[0][1],angle:0}}var X0=new Nn(1,1,1),j0=new mt(1,10,7);function dn(i,e,t,n=0,r=0,s=0,a=1,o=1,l=1){let c=new Te(e,typeof t=="string"?et(t):t);return c.position.set(n,r,s),c.scale.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Nt(i,e,t,n,r,s,a,o){return dn(i,X0,o,e,t+s*.5,n,r,s,a)}function rt(i,e,t,n,r,s,a,o){return dn(i,j0,o,e,t,n,r,s,a)}function zn(i,e,t,n,r){let s=new T(...t).sub(new T(...e)),a=dn(i,new nn(n,n,s.length(),7),r);return a.position.copy(new T(...e).addScaledVector(s,.5)),a.quaternion.setFromUnitVectors(new T(0,1,0),s.normalize()),a}function gt(i,e=0,t=0,n=0){let r=new Qe;return r.position.set(e,t,n),i.add(r),r}function kn(i,e,t,n,r,s,a){let o=new ft(r,s,5,8);o.translate(0,-s/2,0);let l=et(a,{side:At}),c=dn(i,o,l,e,t,n);return c.userData.cloth={base:o.attributes.position.array.slice(),height:s,seed:e*7+t*2},c}function q0(i,e,t,n){let r=gt(i,e,t,n);Nt(r,0,0,0,.055,.86,.055,"#676e60"),rt(r,0,.98,0,.14,.2,.14,fe.glass);let s=dn(r,new yn(.21,.17,4),"#786f57",0,1.22,0);s.rotation.y=Math.PI/4;let a=new mi("#ffc886",0,3.3,2);return a.position.y=1.04,r.add(a),r.userData.nightLight=a,r}function sp(i,e,t,n=1){let r=gt(i,e,.08,t);r.scale.setScalar(n),zn(r,[0,0,0],[.13,2.13,.03],.095,fe.bark),zn(r,[.1,1.58,0],[-.57,2.34,.13],.05,fe.bark),zn(r,[.11,1.7,0],[.56,2.24,-.1],.05,fe.bark);let s=rt(r,0,2.23,0,.88,.39,.8,fe.leaves);s.userData.willowCrown=!0;for(let a=0;a<13;a++){let o=a*Math.PI*2/13,l=gt(r,Math.cos(o)*.68,2.26+Math.sin(o*3)*.15,Math.sin(o)*.59);l.userData.willow={phase:o*3,length:1.5},l.rotation.y=-o;let c=[];for(let h=0;h<=9;h++)c.push(new T(Math.sin(h*.2)*.17,-h*.18,Math.sin(h*.3)*.1));dn(l,new Fn(new _n(c),12,.013,4,!1),"#91a06a");for(let h=1;h<10;h++)for(let u of[-1,1]){let p=rt(l,Math.sin(h*.2)*.17+u*.085,-h*.18+.02,Math.sin(h*.3)*.1,.058,.17,.025,fe.leaves);p.rotation.z=u*.4,p.rotation.y=h*.4}Ct(l)}return r}function lp(i,e){if(e!=="house")return;let t=gt(i,-.45,.55,.76);Nt(t,0,0,0,.49,.48,.24,"#d6bb91"),Nt(t,0,.06,.13,.4,.35,.026,fe.glass),Nt(t,0,.03,.17,.48,.04,.17,"#eadcba"),Nt(t,0,.44,.04,.55,.06,.33,"#a58c65"),kn(t,-.11,.46,.18,.17,.43,"#f1e5c9"),kn(t,.11,.46,.18,.17,.43,"#e9dcb8");let n=gt(i,.8,1.19,.86);n.userData.chime=!0,zn(n,[0,0,0],[0,-.19,0],.011,"#977f50"),dn(n,new mt(.095,10,6,0,Math.PI*2,0,Math.PI/2),et("#a8c5bd",{metalness:.2,roughness:.45}),0,-.24,0),zn(n,[0,-.22,0],[0,-.42,0],.009,"#907f5c"),kn(n,0,-.4,0,.09,.27,"#c4ad77")}function Eo(i,e,t,n,r){let s=gt(i,e,.09,t);Nt(s,0,0,0,1.3,.62,.72,"#a68a64");for(let a of[-1,1])for(let o of[-1,1])Nt(s,a*.64,.6,o*.37,.055,.92,.055,"#8b7658");for(let a=0;a<8;a++){let o=Nt(s,-.76+a*.21,1.5,0,.21,.06,1.12,a%2?"#f0e5ca":n);o.rotation.x=.09,kn(s,-.76+a*.21,1.52,.58,.21,.22,a%2?"#f0e5ca":n)}Nt(s,0,.59,.44,1.5,.1,.31,"#c5a675");for(let a=0;a<9;a++){let o=(a%3-1)*.34,l=(Math.floor(a/3)-1)*.16;if(r==="fruit")rt(s,o,.78,l,.12,.1,.1,a%3?"#d9ae62":"#b46f5a"),rt(s,o,.89,l,.03,.04,.025,"#7e9156");else{dn(s,new nn(.11,.09,.23,8),"#bfa886",o,.8,l);for(let c=0;c<3;c++)rt(s,o+Math.sin(c*2)*.08,1.02,l+Math.cos(c*2)*.06,.07,.1,.07,fe.flower)}}return Ct(s),s}function Ys(i,e,t,n="walk"){let r=un(i,{name:e,color:t,role:n,female:n==="merchant"||n==="astronomer",child:n==="child",hair:n==="astronomer"?"#705761":"#675448"});return r.userData.actor={name:e,role:n,kind:"human",reactUntil:0},r}function Y0(i){let e=gt(i);e.userData.actor={name:"\u4E09\u82B1\u732B",role:"cat",kind:"animal",reactUntil:0},rt(e,0,.3,0,.2,.22,.39,"#efe8d5"),rt(e,-.09,.44,-.03,.16,.08,.2,"#bd8154"),rt(e,.13,.37,-.15,.1,.12,.12,"#65564a");let t=gt(e,0,.45,.32);rt(t,0,0,0,.22,.22,.18,"#f0e7d0"),rt(t,-.1,.08,.07,.12,.14,.11,"#c58e5c");for(let a of[-1,1]){let o=dn(t,new yn(.1,.22,3),a>0?"#5f554c":"#bd885c",a*.15,.2,0);o.rotation.z=-a*.16,rt(t,a*.08,.03,.158,.037,.05,.018,"#689177"),rt(t,a*.08,.03,.175,.01,.03,.009,"#26372e")}rt(t,0,-.06,.18,.025,.018,.02,"#b77b77");let n=[];for(let a of[-.12,.12])for(let o of[-.22,.22]){let l=gt(e,a,.22,o);Nt(l,0,-.16,0,.09,.17,.1,"#eee4d0"),n.push(l)}let r=gt(e,0,.36,-.29),s=new _n([new T(0,0,0),new T(0,.23,-.2),new T(.1,.5,-.23),new T(.16,.58,-.12)]);return dn(r,new Fn(s,10,.046,7,!1),"#af7d54"),e.userData.tail=r,e.userData.legs=n,e.scale.setScalar(1.13),e}function ap(i,e=!1){let t=gt(i);t.userData.actor={name:e?"\u5C0F\u9E2D\u5B50":"\u767D\u9E2D",role:"duck",kind:"animal",reactUntil:0},rt(t,0,.17,0,.2,.18,.32,e?"#e4c577":"#f0e9d4"),rt(t,0,.4,.17,.14,.17,.14,e?"#e4c577":"#f0e9d4"),Nt(t,0,.32,.32,.15,.06,.17,"#c78d50");for(let r of[-1,1])rt(t,r*.098,.43,.26,.018,.022,.012,"#4b5241");let n=rt(t,.18,.22,0,.055,.13,.23,e?"#dcc075":"#dddcc8");return t.userData.wing=n,e&&t.scale.setScalar(.67),t}function Z0(i){let e=gt(i);e.userData.actor={name:"\u6C60\u5858\u5C0F\u9F9F",role:"turtle",kind:"animal",reactUntil:0},rt(e,0,.2,0,.27,.21,.36,"#82936b");for(let n of[-1,1])for(let r of[-.21,.21])rt(e,n*.23,.08,r,.14,.07,.09,"#a5ac7d");let t=gt(e,0,.12,.38);rt(t,0,0,0,.11,.1,.17,"#aab481");for(let n of[-1,1])rt(t,n*.065,.03,.12,.018,.025,.012,"#364b35");e.userData.head=t;for(let n=0;n<3;n++)Nt(e,0,.38-n*.015,(n-1)*.17,.15,.018,.035,"#acb086");return e}function K0(i,e){let t=gt(i);rt(t,0,0,0,.06,.055,.18,"#f4efdb");let n=[];for(let r of[-1,1]){let s=gt(t,r*.045,.02,0),a=new xn;a.moveTo(0,0),a.lineTo(r*.43,-.08),a.lineTo(r*.25,.12),a.closePath();let o=new Oi(a);o.rotateX(-Math.PI/2),dn(s,o,et("#e4e7da",{side:At})),n.push(s)}return t.userData.wings=n,t.userData.seed=e,t}function cp(i){let e=new Qe;i.add(e);let t=gt(e),n=[],r=[],s=[];s.push(sp(t,5.7,-1.1,1.22),sp(t,2.15,-4.55,1.12)),Eo(t,-5.5,2.15,"#bf9274","fruit"),Eo(t,-4.05,4.14,"#8dabb0","flowers");for(let[N,V]of[[-6.23,1.6],[-3.43,4.35]])Nt(t,N,.1,V,.06,2.2,.06,"#967b56");let a=gt(t,-6.23,2.14,1.6);a.rotation.y=-.77,zn(a,[0,0,0],[3.9,0,0],.014,"#917955");for(let N=0;N<11;N++){let V=new xn;V.moveTo(-.12,0),V.lineTo(.12,0),V.lineTo(0,-.32),V.closePath();let H=dn(a,new Oi(V),et(["#bb8777","#e3c37f","#8aa5a7"][N%3],{side:At}),.2+N*.35,-Math.sin(N/10*Math.PI)*.13,0);H.userData.pennant=N}let o=gt(t,-5.6,.08,3.6);o.rotation.y=.4;for(let N of[-.55,.55])Nt(o,N,0,0,.035,1.45,.035,"#a58c63");zn(o,[-.56,1.38,0],[.56,1.38,0],.012,"#8c825c"),kn(o,-.22,1.36,0,.43,.7,"#e8dac0"),kn(o,.26,1.36,0,.36,.55,"#a6bec1");let l=gt(t,.3,.1,5);dn(l,new nn(1.03,1.2,.25,24),"#c5ba9c",0,.125,0);for(let N=0;N<4;N++)Nt(l,0,.01+N*.045,-1.08-N*.08,.74,.05,.22,"#d0c5a7");let c=gt(l,.2,.26,.17);for(let N=0;N<3;N++){let V=N*Math.PI/1.5;zn(c,[0,.65,0],[Math.cos(V)*.38,0,Math.sin(V)*.38],.034,"#8d8262")}zn(c,[-.24,.71,-.19],[.34,1.05,.35],.115,"#b59f6e"),rt(c,.36,1.06,.37,.12,.12,.03,"#78949d"),Nt(t,1.5,.1,4.7,.8,.025,.72,"#b9a18c");for(let N=0;N<4;N++)Nt(t,1.5,.13,4.43+N*.16,.8,.008,.04,"#ece0c0");rt(t,1.63,.29,4.62,.17,.17,.14,"#ad8b61");for(let[N,V]of[[-5,1.1],[-3.24,4.5],[-.7,5.1],[1.4,5.4],[4.9,-.45]])q0(t,N,.08,V);let h=gt(t,4.9,.12,-3.78);for(let N=0;N<7;N++)Nt(h,0,0,-.45+N*.14,.7,.055,.12,"#b89a6a");let u=Ys(e,"\u5356\u6C34\u679C\u7684\u963F\u59E8","#a78570","merchant");u.position.set(-5.57,.09,2.89),u.rotation.y=.35,n.push(u);let p=Ys(e,"\u6563\u6B65\u7684\u5C0F\u9547\u5C45\u6C11","#879bb1","walk");n.push(p);let d=Ys(e,"\u8FFD\u732B\u7684\u5C0F\u670B\u53CB","#c0a075","child");n.push(d);let f=Ys(e,"\u67F3\u5CB8\u9493\u5BA2","#85a18e","fish");f.position.set(4.9,.17,-3.79),f.rotation.y=0;let g=gt(f,.16,.74,.29);zn(g,[0,0,0],[0,.64,1.4],.013,"#8d7454"),zn(g,[0,.64,1.4],[0,-.55,1.7],.004,"#cad1bf"),n.push(f);let v=Ys(e,"\u89C2\u661F\u7684\u4EBA","#9b8eaf","astronomer");v.position.set(-.24,.37,4.83),v.rotation.y=.9,n.push(v);let m=Y0(e);n.push(m);let _=ap(e),x=ap(e,!0),y=Z0(e);n.push(_,x,y),y.position.set(5.43,.11,-2.1);for(let N=0;N<5;N++)r.push(K0(e,N));let w=new Float32Array(150),S=new Ie;S.setAttribute("position",new Xe(w,3));let P=new gn(S,ur("#e5df98",5,0,!0));e.add(P),P.frustumCulled=!1;let z=[],F=[];return e.traverse(N=>{(N.userData.cloth||N.userData.willow||N.userData.chime||N.userData.pennant!==void 0)&&z.push(N),N.userData.nightLight&&F.push(N.userData.nightLight)}),{root:e,actors:n,birds:r,moving:z,nightLights:F,willows:s,fireflies:P,fireflyPositions:w}}var op=new WeakMap;function Zs(i,e,t){let n=op.get(i);if(!n){let r=[];i.traverse(s=>{(s.userData.cloth||s.userData.chime||s.userData.willow||s.userData.pennant!==void 0)&&r.push(s)}),n={moving:r,time:null,wind:null},op.set(i,n)}n.time===e&&n.wind===t||(n.time=e,n.wind=t,n.moving.forEach(r=>{if(r.userData.cloth){let s=r.userData.cloth,a=r.geometry.attributes.position.array;for(let o=0;o<a.length;o+=3){let l=-s.base[o+1]/s.height;a[o]=s.base[o]+Math.sin(e*2.2+s.seed+l*3)*t*.055*l,a[o+2]=s.base[o+2]+Math.sin(e*3+s.seed+l*4)*(.018+t*.17)*l}r.geometry.attributes.position.needsUpdate=!0,r.geometry.computeVertexNormals()}if(r.userData.chime&&(r.rotation.z=Math.sin(e*3.7)*(.035+t*.35)),r.userData.willow){let s=r.userData.willow.phase;r.rotation.z=.08+Math.sin(e*1.7+s)*(.05+t*.19),r.rotation.x=Math.cos(e*1.5+s*.5)*(.04+t*.17)}r.userData.pennant!==void 0&&(r.rotation.x=Math.sin(e*4+r.userData.pennant*.5)*(.15+t*.75),r.rotation.z=Math.cos(e*3.5+r.userData.pennant)*.12)}))}function Sh(i,e,t,n,r){Zs(i.root,e,t);let s=i.actors,a=s[1],o=s[2],l=s[5],c=s[6],h=s[7],u=s[8];a.position.set(Math.sin(e*.13)*4.3,.08,1.03),a.rotation.y=Math.cos(e*.13)>0?Math.PI/2:-Math.PI/2,l.position.set(-2.2+Math.sin(e*.26)*1.5,.12,1.08+Math.sin(e*.39)*.4),l.rotation.y=Math.atan2(Math.cos(e*.26)*.39,Math.cos(e*.39)*.156),l.userData.tail.rotation.z=Math.sin(e*2)*.27,o.position.set(l.position.x-.75,.08,l.position.z+.16),o.rotation.y=l.rotation.y;let p=e*.27;c.position.set(4.75+Math.sin(p)*.63,.15+Math.sin(e*2)*.02,-2.58+Math.cos(p)*.47),c.rotation.y=Math.atan2(Math.cos(p)*.63,-Math.sin(p)*.47),h.position.set(4.75+Math.sin(p-.65)*.63,.15,-2.58+Math.cos(p-.65)*.47),h.rotation.y=Math.atan2(Math.cos(p-.65)*.63,-Math.sin(p-.65)*.47),u.rotation.y=-.2+Math.sin(e*.15)*.3,u.position.y=.11+Math.sin(e*.7)*.008;for(let d=0;d<s.length;d++){let f=s[d],g=f.userData.actor.role,v=f.userData.actor.reactUntil>e,m=["walk","child","cat"].includes(g);if(f.userData.character){_i(f,e,m,t),g==="fish"&&!v&&ki(f,e);continue}f.userData.legs&&f.userData.legs.forEach((_,x)=>_.rotation.x=m?Math.sin(e*(g==="cat"?8:5)+x*Math.PI)*.4:0),f.userData.arms&&f.userData.arms.forEach((_,x)=>{_.rotation.x=m?Math.sin(e*5+x*Math.PI)*.35:Math.sin(e*1.3+d)*.06,v&&x===0?(_.rotation.z=-1.7,_.rotation.x=Math.sin(e*9)*.4):_.rotation.z=0}),v&&g==="cat"&&(f.position.y+=Math.abs(Math.sin(e*6))*.2),f.userData.wing&&(f.userData.wing.rotation.z=v?Math.sin(e*10)*.55:0),g==="turtle"&&f.userData.head&&(f.userData.head.position.z=.38+(v?.07+Math.sin(e*3)*.025:0))}for(let d=0;d<i.birds.length;d++){let f=i.birds[d],g=e*.24+d*.6;f.position.set(Math.sin(g)*5.2,3.8+Math.sin(g*.6+d)*.4,Math.cos(g)*3.8),f.rotation.y=Math.atan2(Math.cos(g)*5.2,-Math.sin(g)*3.8),f.userData.wings.forEach((v,m)=>v.rotation.z=Math.sin(e*7+d)*(m===0?-1:1)*.55),f.visible=n<.8&&r!=="rain"}i.nightLights.forEach(d=>d.intensity=n*2.5),i.fireflies.material.opacity=n*(r==="rain"?.05:.8);for(let d=0;d<50;d++){let f=i.fireflyPositions;f[d*3]=3.7+Math.sin(d*2.4+e*.2)*2,f[d*3+1]=.5+(Math.sin(d*3+e*.8)+1)*.5,f[d*3+2]=-2.6+Math.cos(d*1.8+e*.18)*1.5}i.fireflies.geometry.attributes.position.needsUpdate=!0}function hp(i,e){let t=i.userData.actor;return t.reactUntil=e+2.8,{cat:"\u4E09\u82B1\u732B\u8E6D\u4E86\u8E6D\u4F60\u7684\u624B\u3002",duck:"\u9E2D\u5B50\u6296\u6296\u7FC5\u8180\uFF0C\u7EE7\u7EED\u5728\u6C60\u5858\u91CC\u6E38\u6CF3\u3002",turtle:"\u5C0F\u9F9F\u4F38\u957F\u8116\u5B50\u770B\u4E86\u770B\u4F60\u3002",merchant:"\u521A\u6458\u7684\u6C34\u679C\uFF01\u8981\u5728\u5C0F\u9547\u591A\u901B\u4E00\u4F1A\u513F\u5417\uFF1F",walk:"\u6CBF\u7740\u77F3\u677F\u8DEF\u8D70\uFF0C\u5C31\u80FD\u627E\u5230\u67F3\u6811\u548C\u6C60\u5858\u3002",child:"\u4F60\u4E5F\u770B\u5230\u90A3\u53EA\u4E09\u82B1\u732B\u4E86\u5417\uFF1F",fish:"\u5618\u2014\u2014\u9C7C\u513F\u5FEB\u8981\u4E0A\u94A9\u4E86\u3002",astronomer:"\u6674\u6717\u7684\u591C\u91CC\uFF0C\u5076\u5C14\u80FD\u7B49\u5230\u6D41\u661F\u3002"}[t.role]||"\u5C45\u6C11\u5411\u4F60\u6325\u4E86\u6325\u624B\u3002"}function rs(i){let e=Math.sin((i-6)/24*Math.PI*2);return yt.smoothstep(e,-.12,.2)}function up(i){let e=new Qe;i.add(e);let t=22,n=16,r={uTop:{value:new pe("#91c6df")},uBottom:{value:new pe("#e2e9dc")}},s=new Te(new ft(1,1),new pt({uniforms:r,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;uniform vec3 uTop;uniform vec3 uBottom;void main(){gl_FragColor=vec4(mix(uBottom,uTop,smoothstep(.28,1.,vUv.y)),1.);
#include <colorspace_fragment>
}`}));s.position.z=-130,s.renderOrder=-100,e.add(s);let a=79371;function o(){return a=1664525*a+1013904223>>>0,a/4294967296}let l=230,c=[],h=new Float32Array(l*3),u=new Float32Array(l),p=new Float32Array(l);for(let te=0;te<l;te++)c.push([(o()-.5)*.98,.12+o()*.37]),u[te]=1.2+o()*2.4,p[te]=o()*6.28;let d=new Ie;d.setAttribute("position",new Xe(h,3)),d.setAttribute("size",new Xe(u,1)),d.setAttribute("phase",new Xe(p,1));let f={uTime:{value:0},uOpacity:{value:0},uPixel:{value:Math.min(globalThis.devicePixelRatio||1,2)}},g=new gn(d,new pt({uniforms:f,transparent:!0,depthWrite:!1,vertexShader:"attribute float size;attribute float phase;uniform float uTime;uniform float uPixel;varying float vLight;void main(){vLight=.55+.45*sin(uTime*.9+phase);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=size*uPixel;}",fragmentShader:"uniform float uOpacity;varying float vLight;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.93,.95,1.,(1.-smoothstep(.02,.5,d))*vLight*uOpacity);}"}));g.frustumCulled=!1,e.add(g);let v={uOpacity:{value:0}},m=new Te(new ft(1,1),new pt({uniforms:v,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uOpacity;void main(){vec2 p=(vUv-.5)*2.;float r=dot(p,p);if(r>1.)discard;vec3 n=vec3(p,sqrt(1.-r));float lit=smoothstep(-.13,.37,dot(n,normalize(vec3(-.75,.35,.33))));float crater=sin(p.x*27.+p.y*11.)*sin(p.y*34.-p.x*5.)*.025;vec3 c=mix(vec3(.12,.17,.25),vec3(.98,.94,.78),lit)+crater*lit;gl_FragColor=vec4(c,uOpacity*(1.-smoothstep(.94,1.,r)));}"}));m.position.z=-105,e.add(m);let _=new Te(new On(.5,40),new Ft({color:"#f3d59b",transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}));_.position.z=-105,e.add(_);let x=new mt(1,10,7),y=[];for(let te=0;te<6;te++){let ne=new Qe,U=new Ft({color:"#fffbed",transparent:!0,opacity:.86,depthWrite:!1,toneMapped:!1});for(let q=0;q<5;q++){let E=new Te(x,U);E.position.set((q-2)*.63,Math.sin(q*2+te)*.14,Math.cos(q)*.06),E.scale.set(.8,.3+q%3*.09,.3),ne.add(E)}ne.userData.phase=te/6,ne.userData.material=U,e.add(ne),y.push(ne)}let w={uOpacity:{value:0}},S=new Te(new ft(1,1),new pt({uniforms:w,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uOpacity;void main(){float glow=pow(vUv.x,2.)*(1.-smoothstep(0.,.5,abs(vUv.y-.5)));gl_FragColor=vec4(.98,.95,.79,glow*uOpacity);}"}));S.position.z=-103,S.visible=!1,e.add(S);let P=0,z=0,F=1/0,N=-100,V=!1,H=0,K=0,j=0;function J(te,ne){t=te,n=ne,s.scale.set(te*1.02,ne*1.02,1);for(let U=0;U<l;U++)h[U*3]=c[U][0]*te,h[U*3+1]=c[U][1]*ne,h[U*3+2]=-116;d.attributes.position.needsUpdate=!0,m.position.set(te*(te/ne<.8?-.18:.19),ne*(te/ne<.8?.4:.355),-105),m.scale.setScalar(Math.min(te*.065,ne*.12)),_.scale.setScalar(Math.min(te*.06,ne*.09))}function ee(te,ne,U,q){P+=Math.min(.25,Math.max(0,te-z))*(.009+q*.014),z=te;let E=rs(ne),L=1-E,Y=U==="rain"?.95:U==="snow"?.8:U==="cloud"?.67:.12,ie=Math.max(0,1-Math.abs(Math.sin((ne-6)/24*Math.PI*2))/.5)*E;r.uTop.value.set("#97cce2").lerp(new pe("#d1bac0"),ie*.6).lerp(new pe("#16243c"),L),r.uBottom.value.set("#e6eddf").lerp(new pe("#e6bd93"),ie*.6).lerp(new pe("#3a5068"),L),r.uTop.value.lerp(new pe(L?"#26384e":"#adbfc9"),Y*.5),f.uOpacity.value=L*(1-Y*.93),f.uTime.value=te,g.visible=L>.08,m.visible=L>.03,v.uOpacity.value=L*(1-Y*.75),_.visible=ne>5.7&&ne<18.5,_.material.opacity=E*(1-Y*.7);let C=(ne-6)/12;_.position.set((C-.5)*t*.66,(.2+Math.sin(C*Math.PI)*.16)*n,-105);for(let X=0;X<y.length;X++){let R=y[X],D=.009+q*.014,b=(X/4+P)%1.5-.75;R.position.set(b*t,(.24+X%3*.075)*n,-80+X),R.scale.setScalar(t*(.04+X%2*.012)),R.userData.material.color.set(L?"#526582":"#fff7e8"),R.userData.material.opacity=(L?.67:.84)*(U==="sun"&&X>3?.45:1)}let M=L>.78&&Y<.4;M&&!V&&(F=te+5+o()*3),M||(F=1/0),V=M,M&&te>=F&&(N=te,H=(.1+o()*.3)*t,K=(.31+o()*.13)*n,F=te+22+o()*22,j++);let I=te-N;if(S.visible=M&&I>=0&&I<1.55,S.visible){let X=-t*.3,R=-n*.12,D=t*.16,b=Math.atan2(R,X),B=I/1.55;S.position.set(H+X*B-Math.cos(b)*D/2,K+R*B-Math.sin(b)*D/2,-103),S.rotation.z=b,S.scale.set(D,n*.004,1),w.uOpacity.value=Math.sin(B*Math.PI)*.95}return{day:E,night:L,meteorTotal:j}}return{root:e,stars:g,moon:m,sun:_,clouds:y,meteor:S,resize:J,update:ee,get meteorTotal(){return j}}}var ss=[{id:"hall",name:"\u6F6E\u6C50\u5E02\u653F\u5385",kind:"hall",category:"\u949F\u697C\u5E7F\u573A",x:0,z:-10.5,scale:1.15,info:"\u949F\u697C\u3001\u529E\u4E8B\u5927\u5385\u3001\u9605\u89C8\u533A\u4E0E\u529E\u516C\u684C\u3002"},{id:"church",name:"\u5723\u98CE\u6559\u5802",kind:"church",category:"\u949F\u697C\u5E7F\u573A",x:-7.5,z:-9.7,scale:1.08,info:"\u5F69\u8272\u82B1\u7A97\u3001\u957F\u6905\u3001\u7BA1\u98CE\u7434\u4E0E\u70DB\u5149\u793C\u62DC\u5802\u3002"},{id:"department",name:"\u6D77\u98CE\u767E\u8D27\u5E97",kind:"department",category:"\u5546\u4E1A\u8857",x:7.4,z:-8.4,scale:1.08,info:"\u65E5\u7528\u54C1\u3001\u670D\u88C5\u3001\u4E66\u7C4D\u548C\u98DF\u54C1\uFF0C\u9648\u5217\u5728\u4E0D\u540C\u8D27\u67B6\u3002"},{id:"cafe",name:"\u6A59\u82B1\u5496\u5561\u5E97",kind:"cafe",category:"\u5546\u4E1A\u8857",x:10,z:-2.8,scale:1,info:"\u5427\u53F0\u5496\u5561\u673A\u3001\u751C\u70B9\u67DC\u3001\u9760\u7A97\u5EA7\u4F4D\u4E0E\u540E\u53A8\u3002"},{id:"market",name:"\u671D\u5E02\u83DC\u5E02\u573A",kind:"market",category:"\u897F\u8857",x:-11,z:1.8,scale:1,info:"\u852C\u83DC\u3001\u6C34\u679C\u3001\u9C9C\u9C7C\u4E0E\u9762\u5305\uFF0C\u6BCF\u4E2A\u644A\u4F4D\u90FD\u80FD\u901B\u3002"},{id:"home",name:"\u6728\u68C9\u5BB6\u7684\u5C0F\u5C4B",kind:"home",category:"\u5C45\u6C11\u5DF7",x:-10.6,z:-4.4,scale:1,info:"\u5BA2\u5385\u3001\u5367\u5BA4\u3001\u53A8\u623F\u548C\u6D74\u5BA4\uFF0C\u6734\u7D20\u4F46\u751F\u6D3B\u7528\u54C1\u9F50\u5168\u3002"},{id:"family",name:"\u59D0\u5F1F\u7684\u84DD\u7A97\u5C0F\u5C4B",kind:"family",category:"\u5C45\u6C11\u5DF7",x:-9.2,z:6.6,scale:.95,info:"\u5B69\u5B50\u4EEC\u7684\u5E8A\u3001\u73A9\u5177\u3001\u4E66\u684C\uFF0C\u8FD8\u6709\u4E00\u5BB6\u4EBA\u7684\u9910\u684C\u3002"},{id:"villa",name:"\u8537\u8587\u6D77\u666F\u5E84\u56ED",kind:"villa",category:"\u4E1C\u5CB8\u5EAD\u9662",x:8.4,z:5.8,scale:1.12,info:"\u5927\u5BA2\u5385\u3001\u94A2\u7434\u3001\u4E66\u623F\u4E0E\u5E26\u6D74\u7F38\u7684\u5957\u95F4\u3002"},{id:"manor",name:"\u767D\u9E6D\u5BCC\u5546\u5B85\u90B8",kind:"villa",category:"\u4E1C\u5CB8\u5EAD\u9662",x:13,z:1.3,scale:.9,info:"\u5927\u7406\u77F3\u5730\u9762\u3001\u96D5\u82B1\u5BB6\u5177\u3001\u9910\u5385\u4E0E\u6536\u85CF\u5BA4\u3002"},{id:"oldroad",name:"\u82D4\u77F3\u53E4\u9053",kind:"road",category:"\u5357\u5761",x:-6,z:10.1,info:"\u6CBF\u53E4\u9053\u7A7F\u8FC7\u77F3\u62F1\u95E8\uFF0C\u8D70\u5411\u6D77\u5CB8\u3002"},{id:"pier",name:"\u6D77\u98CE\u9493\u9C7C\u7801\u5934",kind:"fishing",category:"\u6D77\u5CB8",x:2,z:16.8,spot:"pier",info:"\u548C\u6D77\u8FB9\u9493\u5BA2\u4E00\u8D77\u629B\u7AFF\u3002\u6F6E\u6C34\u91CC\u85CF\u7740\u8BB8\u591A\u9C7C\u3002"},{id:"beach",name:"\u6708\u7259\u6C99\u6EE9",kind:"fishing",category:"\u6D77\u5CB8",x:-9.8,z:13.4,spot:"beach",info:"\u6D45\u6EE9\u9C7C\u7FA4\u4E0E\u8D1D\u58F3\u3002\u9002\u5408\u8F7B\u677E\u5782\u9493\u3002"},{id:"rocks",name:"\u767D\u6D6A\u7901\u5CB8",kind:"fishing",category:"\u6D77\u5CB8",x:14,z:10.2,spot:"rocks",info:"\u7901\u77F3\u4E0B\u6709\u4E2A\u5934\u66F4\u5927\u7684\u9C7C\uFF0C\u4E5F\u66F4\u8003\u9A8C\u6536\u7EBF\u3002"}];function Th(i,e,t,n,r){gi(i,0,.08,0,e+.3,.18,n+.3,"#b7aa91"),G(i,0,.25,0,e,t,n,r);for(let s of[-e/2,e/2])for(let a of[-n/2,n/2])G(i,s,.25,a,.14,t,.14,"#e7d7b2");for(let s=.45;s<t;s+=1.15)G(i,0,s,n/2+.025,e,.1,.08,"#d2bda1");for(let s of[-1,1]){let a=Ae(i,s*e/2+.02,0,0);a.rotation.y=s*Math.PI/2;for(let o of[-n*.27,n*.27])Dt(a,o,.88,0,.57,.7)}}function dp(i,e,t,n,r=1){for(let s=0;s<r;s++)for(let a of[-e*.32,e*.32])Dt(i,a,.75+s*1.25,n/2+.05,.6,.75),Ht(i,a,.54+s*1.25,n/2+.18,.76)}function J0(i,e,t,n,r=.43){let s=Ye(i,new On(r,32),"#f4eac9",e,t,n);for(let o=0;o<12;o++){let l=o*Math.PI/6,c=G(i,e+Math.sin(l)*r*.79,t+Math.cos(l)*r*.79-.025,n+.025,.024,.05,.02,"#736a55");c.rotation.z=-l}G(i,e,t-.03,n+.04,.03,r*.62,.025,"#5c655c");let a=G(i,e+.12,t-.012,n+.04,r*.55,.028,.028,"#5c655c");a.rotation.z=-.3}function $0(i,e){let t=e==="church",n=t?3:3.8,r=t?2.7:2.9,s=t?3.6:2.65;if(Th(i,n,r,s,t?"#e3d2b3":"#eddfc3"),sn(i,0,r+.25,0,n+.45,t?1.1:.7,s+.4,"#708f8f"),t){let a=Ae(i,0,2.23,s/2+.073),o=Ye(a,new hn(.49,.073,8,32),"#c9b689");ye(a,0,0,.03,.16,.16,.025,fe.glass);for(let c=0;c<8;c++){let h=c*Math.PI/4,u=ye(a,Math.cos(h)*.31,Math.sin(h)*.31,.024,.15,.15,.034,["#749eb7","#be999e","#d8bd7c"][c%3])}Bi(i,0,.25,s/2+.12,1.05);for(let c of[-.34,.34])G(i,c,.25,s/2+.12,.12,1.19,.14,"#bcac91");let l=Ae(i,-1.27,.25,-.92);ue(l,0,0,0,.46,.52,4,"#e1d1b2",8),ue(l,0,3.5,0,.6,.6,.12,"#baa784",8),Ut(l,0,4,0,.72,1.4,"#63868a",8),$n(Ut(l,0,4.05,0,.7,1.37,fe.snow,8)),G(l,0,5.25,0,.055,.55,.055,"#c5ad67"),G(l,0,5.54,0,.32,.05,.055,"#c5ad67");for(let c of[-1.15,1.15])Dt(i,c,1.36,s/2+.08,.32,.95),Ht(i,c,.24,s/2+.4,.66)}else{for(let o of[-1.1,-.56,.56,1.1])ue(i,o,.25,s/2+.42,.09,.12,1.7,"#f0e5ca",12);G(i,0,1.96,s/2+.4,2.7,.16,.96,"#decba7"),sn(i,0,2.12,s/2+.4,2.84,.51,1.05,"#869887"),Bi(i,0,.28,s/2+.1,1.15),dp(i,n,r,s,2);let a=Ae(i,0,3.13,-.3);G(a,0,0,0,1.03,1.4,1.03,"#e5d3ad"),J0(a,0,.8,.53,.37),sn(a,0,1.4,0,1.34,.75,1.35,"#5e8388"),ye(a,0,2.28,0,.07,.12,.07,"#d1b26a")}for(let a=0;a<4;a++)G(i,0,.03+a*.058,s/2+.9-a*.16,1.6,.07,.32,"#d0c3a6")}function Q0(i,e){let t=e==="villa",n=t?3.1:2.35,r=t?2.6:1.6,s=t?2.5:2.05;if(Th(i,n,r,s,t?"#eedfc4":"#e7d5b6"),sn(i,0,r+.25,0,n+.4,.94,s+.4,t?"#739193":e==="family"?"#70969d":"#b96953"),dp(i,n,r,s,t?2:1),Bi(i,0,.27,s/2+.07,.98),t){let a=Ae(i,-1.42,.2,-.72);ue(a,0,0,0,.57,.63,3.8,"#e6d5b6",8),Ut(a,0,3.8,0,.78,1.14,"#65858a",8),$n(Ut(a,0,3.85,0,.76,1.11,fe.snow,8)),ye(a,0,4.99,0,.08,.12,.08,"#c3aa69"),G(i,0,1.54,s/2+.43,2.45,.14,.8,"#d5bf9a"),Qn(i,0,1.7,s/2+.82,2.45);for(let o of[-1.12,1.12])ue(i,o,.2,s/2+.62,.08,.105,1.4,"#e2cfa6");for(let o of[-1,1]){let l=G(i,o*2.02,.13,.7,.33,.37,3.5,fe.leaves);Ht(i,o*1.62,.18,2.1,.85)}Qn(i,-1.1,.17,2.55,1.8,"#dad0b0"),Qn(i,1.1,.17,2.55,1.8,"#dad0b0")}else{kn(i,-.75,1.51,s/2+.12,.25,.55,"#ecdec2"),kn(i,.75,1.51,s/2+.12,.25,.55,"#a6bec1"),G(i,-.65,2.21,-.48,.25,.65,.28,"#c7b59d"),G(i,-.65,2.84,-.48,.33,.1,.34,"#a68d77");for(let a of[-1.25,1.25])Qn(i,a,.12,1.75,.82);Ht(i,.93,.13,1.58,.73),ue(i,-1.48,.15,.65,.27,.26,.54,"#a58761",12);for(let a of[.26,.56])ue(i,-1.48,a,.65,.278,.278,.04,"#727c72",12)}}function eg(i,e){let t=e==="department",n=t?3.7:2.95,r=t?3.4:1.93,s=2.5;Th(i,n,r,s,t?"#dedbc9":"#efdbb9"),sn(i,0,r+.25,0,n+.36,.79,s+.4,t?"#6d9192":"#b58162");for(let a of[-n*.32,n*.32])Dt(i,a,.5,1.3,.93,1.12),t&&Dt(i,a,2.05,1.3,.79,.97);Bi(i,0,.28,1.35,1.18);for(let a=0;a<12;a++){let o=G(i,-n/2+(a+.5)*n/12,1.85,1.62,n/12,.065,.72,a%2?"#eee3c6":t?"#789997":"#b28367");o.rotation.x=.09,kn(i,-n/2+(a+.5)*n/12,1.85,1.99,n/12,.21,a%2?"#eee3c6":t?"#789997":"#b28367")}if(!t)for(let a of[-1.2,1.2]){ue(i,a,.17,2.35,.38,.38,.07,"#cdb596",18),ue(i,a,.1,2.35,.05,.07,.6,"#6d7769"),ue(i,a,.7,2.35,.38,.38,.07,"#cdb596",18);for(let o of[1.96,2.79])ue(i,a,.13,o,.2,.2,.08,"#ba9b77",12),G(i,a,.2,o,.05,.22,.06,"#708072");ue(i,a,.78,2.35,.055,.045,.1,"#ede3cc",12)}}function tg(i){for(let e of[-2.65,2.65])for(let t of[-1.45,1.45])ue(i,e,.1,t,.11,.14,2.45,"#9b805e",10);sn(i,0,2.52,0,5.75,1.03,3.55,"#939779");for(let[e,t,n,r]of[[-1.6,-.55,"#a6a86d","fruit"],[.1,-.55,"#b4876b","fruit"],[1.76,-.55,"#839fac","flowers"]])Eo(i,e,t,n,r).scale.setScalar(.88);G(i,0,.1,0,5.7,.08,3.5,"#cdbfa0")}function Gn(i,e,t=1,n="#cfc2a4"){for(let r=0;r<e.length-1;r++){let s=e[r],a=e[r+1],o=a[0]-s[0],l=a[1]-s[1],c=Math.hypot(o,l),h=Math.ceil(c/.44),u=Math.atan2(o,l);for(let p=0;p<=h;p++)for(let d=0;d<2;d++){let f=p/h,g=(d-.5)*t*.5,v=G(i,s[0]+o*f+Math.cos(u)*g,.055,s[1]+l*f-Math.sin(u)*g,t*.46,.05,.39,n);v.rotation.y=u+Math.sin(p*5+r)*.018}}}function wh(i,e,t,n=0,r=5){let s=Ae(i,e,.02,t);s.rotation.y=n;for(let a=0;a<Math.ceil(r/.22);a++)G(s,0,0,a*.22,1.6,.12,.19,"#b99a6d");for(let a=0;a<=Math.floor(r/1.2);a++)for(let o of[-.84,.84])G(s,o,-1.3,a*1.2,.14,1.78,.14,"#927d60"),ye(s,o,.48,a*1.2,.086,.06,.086,"#dbc9a0"),a<r/1.2-1&&xt(s,[o,.35,a*1.2],[o,.35,(a+1)*1.2],.024,"#b7a17a");return s}function ng(i,e,t,n=0){let r=Ae(i,e,.14,t);r.rotation.y=n;let s=un(r,{name:"\u6D77\u9493\u7684\u6797\u53D4",color:"#79968c",role:"\u9493\u5BA2",lines:["\u5148\u7B49\u6D6E\u6F02\u4E0B\u6C89\uFF0C\u518D\u63D0\u7AFF\u3002\u6536\u7EBF\u65F6\u8BB0\u5F97\u5076\u5C14\u677E\u624B\u3002","\u7801\u5934\u3001\u6C99\u6EE9\u548C\u7901\u5CB8\u80FD\u9047\u5230\u7684\u9C7C\u4E0D\u540C\uFF0C\u591C\u91CC\u4E5F\u53EF\u4EE5\u8BD5\u8BD5\u3002"]});G(r,0,.08,-.04,.39,.07,.36,"#b69670");let a=Ae(r,.16,.74,.29);xt(a,[0,0,0],[0,.72,2],.016,"#907556"),xt(a,[0,.72,2],[0,-1.62,2.38],.004,"#dbe2d2"),r.userData.fishingRod=a,ki(s),ue(r,-.6,.05,.3,.22,.18,.38,"#91a8a5",12);let o=ye(r,.17,-.88,2.43,.055,.09,.055,"#c58b6f");return r.userData.bobber=o,{g:r,fisher:s}}function pp(i){let e=Ae(i),t=Ae(e),n=[],r=[],s=[],a=[],o=Ae(e),l=new Map;for(let d of ss){if(["road","fishing"].includes(d.kind))continue;let f=Ae(e,d.x,.03,d.z);f.scale.setScalar(d.scale||1),f.userData.place=d,["hall","church"].includes(d.kind)?$0(f,d.kind):["home","family","villa"].includes(d.kind)?Q0(f,d.kind):d.kind==="market"?tg(f):eg(f,d.kind),Ct(f),n.push(f),l.set(d.id,f)}Gn(t,[[-13,-6],[-10.5,-6],[-6,-6],[0,-6],[6,-6],[11,-6],[11,0],[9.1,2.7],[6,3.5]],1.2),Gn(t,[[0,-9],[0,-6],[0,-4]],1.4),Gn(t,[[-7.5,-8],[-7.5,-6]],1.2),Gn(t,[[7.4,-6.7],[7.4,-6]],1.4),Gn(t,[[-10.5,-6],[-10.5,-2.6],[-8.1,-1],[-8.1,5],[-9.2,8.3]],1.2),Gn(t,[[-8.1,3.8],[-10.8,3.8]],1.3),Gn(t,[[5.8,.7],[8.6,.7],[10,0],[12.5,3.4],[12.5,4.5],[8.4,8.8]],1.1),Gn(t,[[-13,6],[-10,9],[-6,10.2],[-2,9],[2,10.7],[2,13.8]],1.05,"#bcb89b"),Gn(t,[[-8.1,5],[-10,9]],1),Gn(t,[[-2,9],[0,6.1]],1),Gn(t,[[8.4,8.8],[5.5,9.8],[2,10.7]],1.15),ue(t,0,.08,-6.9,1.42,1.44,.12,"#c6b99c",40),ue(t,0,.21,-6.9,.68,.76,.19,"#d9ceb1",24),ue(t,0,.41,-6.9,.61,.61,.025,fe.water,30),ue(t,0,.44,-6.9,.11,.15,.66,"#d9ceb1"),ue(t,0,1.1,-6.9,.37,.18,.07,"#e2d7ba"),ye(t,0,1.28,-6.9,.1,.2,.1,fe.water);for(let[d,f]of[[-2.2,-7],[2.2,-7],[-6,-6],[-8.2,-2],[9,-6],[11,.3],[7,8],[2,11.8],[-10,8],[-4,9]])yh(t,d,f);for(let[d,f,g,v]of[[-13,-6,1.2,1],[-13.8,-4,1.3,0],[-12.9,4.8,1.2,0],[-15,3.1,1.2,2],[-14,7,1.1,1],[-11,10.6,1,0],[-7,12,1,0],[-4,12.2,1,2],[-5,-12,1.1,1],[-2.8,-12.8,1.4,0],[3.1,-12.5,1.1,2],[5.5,-12.1,1.2,0],[10.7,-10,1.15,1],[13,-7.3,1.2,0],[14.3,-4.5,1.1,2],[15.7,-.5,.95,1],[14.9,4.7,1.05,0],[11.5,7.6,1,1],[5.5,8,1,1],[5.7,11.9,.9,0]])_h(o,d,f,g,v);let c=Ye(t,new On(1,48),"#d8c798",-8.7,.052,12,2.4,1.15,1);c.rotation.x=-Math.PI/2,c.castShadow=!1;for(let d=0;d<12;d++){let f=-8.7+Math.sin(d*2.4)*1.8,g=12+Math.cos(d*2.4)*.77,v=ye(t,f,.092,g,.067,.028,.047,d%3?"#eee3c6":"#c6b39b");v.rotation.y=d*1.3}let h=Ae(t,-6,.1,10.2);h.rotation.y=Math.PI/2;for(let d of[-.85,.85])G(h,d,0,0,.42,1.8,.48,"#b5b49a"),G(h,d,1.63,0,.59,.17,.59,"#c7c5a8"),ye(h,d-.09,.3,.23,.26,.15,.1,fe.leaves);let u=Ye(h,new hn(.85,.22,7,20,Math.PI),"#bfc0a2",0,1.77,0);for(let d=0;d<6;d++){let f=d*Math.PI/5;ye(h,Math.cos(f)*.95,1.85+Math.sin(f)*.95,.18,.19,.11,.09,fe.leaves)}wh(t,2,12.7,0,5.9),wh(t,-9.8,11.9,0,3.3),wh(t,13.2,8.9,.3,3.5);for(let[d,f,g]of[[2.47,16.2,0],[-9.4,13.65,-.2],[13.85,10.7,.3]]){let v=ng(e,d,f,g);s.push(v.g),r.push(v.fisher)}for(let d=0;d<2;d++){let f=Ae(e,4.9+d*4,-.77,17.8-d*2);ye(f,0,0,0,.72,.24,1.56,"#987554"),G(f,0,.05,0,1.1,.07,2.55,"#d6bd8d"),xt(f,[0,.1,0],[0,2.8,0],.036,"#9a805c");let g=kn(f,.52,2.6,0,1.05,1.72,"#eee3c6");f.rotation.y=.5+d,f.userData.base=f.position.clone(),a.push(f)}let p=[{name:"\u6728\u68C9",female:!0,color:"#a66f77",role:"\u82B1\u5E97\u8001\u677F",x:-10.2,z:-2.6,path:[[-10.2,-2.6],[-8.1,-1],[-8.1,3.8],[-10.2,3.8]],lines:["\u5BB6\u91CC\u7684\u6C34\u58F6\u521A\u70E7\u5F00\uFF0C\u6B22\u8FCE\u8FDB\u6765\u5750\u5750\u3002","\u53E4\u9053\u65C1\u7684\u8537\u8587\uFF0C\u6625\u5929\u5F00\u5F97\u6700\u597D\u3002"]},{name:"\u5C0F\u590F",female:!0,child:!0,color:"#c895a4",role:"\u5C0F\u5973\u5B69",x:-9,z:8.3,path:[[-9,8.3],[-7.2,8.7],[-5,8.5],[-7.2,8.7]],lines:["\u6211\u548C\u5F1F\u5F1F\u7684\u5BB6\u662F\u84DD\u7A97\u6237\u7684\u90A3\u95F4\uFF01","\u4F60\u9493\u5230\u65B0\u9C7C\u4E86\u5417\uFF1F\u6211\u60F3\u770B\u5F69\u8272\u7684\u9C7C\u3002"]},{name:"\u5C0F\u6811",child:!0,color:"#91a9b4",role:"\u5C0F\u7537\u5B69",x:-7.8,z:8.7,path:[[-8,8.7],[-5,8.5],[-7.2,8.7],[-9,8.3]],lines:["\u6211\u5728\u53E4\u9053\u53D1\u73B0\u597D\u591A\u957F\u7740\u82D4\u85D3\u7684\u77F3\u5934\u3002","\u9C7C\u54AC\u94A9\u7684\u65F6\u5019\uFF0C\u6D6E\u6F02\u4F1A\u6C89\u4E0B\u53BB\uFF01"]},{name:"\u6F84\u5B50",female:!0,color:"#7c9b9b",hair:"#493d37",role:"\u5496\u5561\u5E97\u5E97\u5458",x:9.8,z:.3,path:[[9.8,.3],[11,.3],[11,1.2],[9.8,1.2]],lines:["\u4ECA\u5929\u4E5F\u6709\u65B0\u70E4\u7684\u9762\u5305\uFF0C\u8FDB\u5E97\u6765\u676F\u5496\u5561\u5417\uFF1F","\u4E0B\u96E8\u7684\u65F6\u5019\uFF0C\u542C\u96E8\u843D\u5728\u5E97\u5916\u96E8\u68DA\u4E0A\u5F88\u8212\u670D\u3002"]},{name:"\u5B89\u5A1C",female:!0,color:"#818bb0",role:"\u5E02\u653F\u5385\u804C\u5458",x:-1.7,z:-7.4,path:[[-1.7,-7.4],[-2.4,-6],[2.4,-6],[1.6,-7.4]],lines:["\u529E\u4E8B\u5927\u5385\u548C\u9605\u89C8\u5BA4\u90FD\u5F00\u653E\uFF0C\u95E8\u5728\u6B63\u524D\u65B9\u3002","\u4E1C\u8FB9\u662F\u5546\u4E1A\u8857\uFF0C\u6CBF\u5357\u5761\u8D70\u4F1A\u5230\u7801\u5934\u3002"]},{name:"\u671B\u6D77\u592B\u4EBA",female:!0,color:"#af956b",hair:"#655044",role:"\u5E84\u56ED\u4E3B\u4EBA",x:7.6,z:9,path:[[7.6,9],[9.5,8.8],[10,9.4],[7.6,9.4]],lines:["\u8BF7\u968F\u610F\u53C2\u89C2\u5E84\u56ED\uFF0C\u5BA2\u5385\u91CC\u6709\u4E00\u67B6\u8001\u94A2\u7434\u3002","\u5929\u6674\u65F6\uFF0C\u4ECE\u82B1\u56ED\u80FD\u770B\u89C1\u8FDC\u5904\u7684\u5E06\u8239\u3002"]},{name:"\u5356\u83DC\u7684\u79CB\u59E8",female:!0,color:"#9ba577",role:"\u83DC\u519C",x:-11.9,z:3.5,lines:["\u9752\u83DC\u3001\u841D\u535C\u3001\u756A\u8304\uFF0C\u4ECA\u5929\u90FD\u5F88\u65B0\u9C9C\u3002","\u9493\u6765\u7684\u9C7C\u53EF\u4EE5\u6362\u91D1\u5E01\uFF0C\u53BB\u770B\u770B\u9C7C\u83B7\u624B\u518C\u5427\u3002"]},{name:"\u60A0\u5948",female:!0,child:!0,color:"#b39ac0",role:"\u5C0F\u5973\u5B69",x:-5.7,z:-6.5,path:[[-5.7,-6.5],[-5,-7],[-4.6,-6.3],[-5,-6]],lines:["\u6559\u5802\u91CC\u6709\u5F69\u8272\u73BB\u7483\uFF0C\u9633\u5149\u900F\u8FDB\u53BB\u53EF\u6F02\u4EAE\u4E86\u3002"]},{name:"\u963F\u822A",child:!0,color:"#c3a778",role:"\u5C0F\u7537\u5B69",x:3,z:12,path:[[3,12],[3,13],[1,13],[1,12]],lines:["\u6797\u53D4\u5728\u7801\u5934\u9493\u9C7C\uFF0C\u4F60\u53EF\u4EE5\u548C\u4ED6\u4E00\u8D77\u3002"]},{name:"\u4E66\u5E97\u7684\u73B2",female:!0,color:"#7692aa",role:"\u767E\u8D27\u5E97\u5E97\u5458",x:7,z:-5.2,path:[[7,-5.2],[9,-5.2],[9,-4.7],[7,-4.7]],lines:["\u4E66\u3001\u65E5\u7528\u54C1\u548C\u5C0F\u70B9\u5FC3\u90FD\u5728\u767E\u8D27\u5E97\u91CC\u3002"]}];for(let[d,f]of p.entries()){let g=un(e,f);g.position.set(f.x,.09,f.z),g.userData.route=f.path,g.userData.speed=.25+d%3*.075,g.userData.phase=d*1.3,r.push(g)}Ct(t);for(let d of o.children)Ct(d);return{root:e,buildings:n,npcs:r,fishers:s,boats:a,pmap:l,leaves:o}}function fp(i,e,t,n,r,s){let a=Math.min(.25,Math.max(0,e-(i.lastTime??e)));i.lastTime=e,Zs(i.root,e,t),qs(i.leaves,e,t,n);for(let o of i.npcs){let l=o.userData.route,c=o.userData.resident.reactUntil>e;if(l&&!c){o.userData.distance=(o.userData.distance??o.userData.phase)+a*o.userData.speed;let h=rp(l,o.userData.distance);o.position.set(h.x,.09,h.z),o.rotation.y=h.angle}_i(o,e,!!l&&!c,t),o.userData.fishingSpot&&!c&&ki(o,e)}for(let o of i.fishers)o.userData.fishingRod.rotation.x=Math.sin(e*.9)*.025,o.userData.bobber.position.y=-.88+Math.sin(e*2)*.045;for(let[o,l]of i.boats.entries())l.position.y=l.userData.base.y+Math.sin(e*.75+o)*.06,l.rotation.z=Math.sin(e*.6+o)*.035}function ig(){let i=[],e=[],t=[];for(let r=1;r<=8;r++)for(let s of[-1,1]){let a=r/9,o=Math.sin(a*Math.PI*.72)*.49,l=a*.59,c=(1-a*.78)*.23,h=i.length/3;i.push(0,o,l,s*c*.48,o+.018,l-.023,s*c,o+.023,l+.075,s*c*.5,o+.039,l+.095),e.push(.5,0,0,.42,.5,1,1,.42),t.push(h,h+1,h+2,h,h+2,h+3)}let n=new Ie;return n.setAttribute("position",new Se(i,3)),n.setAttribute("uv",new Se(e,2)),n.setIndex(t),n.computeVertexNormals(),n}function mp(i){let e=Ae(i);e.userData.seasonalFoliage=!0;let t=[[-6.8,9.4],[-5.15,10.85],[-3.5,11.25],[-10.9,10.5],[-12.8,5.4],[14,5.5],[13,-8.2],[5.4,12.4],[-14.8,2.3],[3.5,-12.4]],n=new Ui(ig(),fe.leafDetail,t.length*8),r=new dt;t.forEach(([a,o],l)=>{for(let c=0;c<8;c++){let h=.65+c%3*.16;r.position.set(a+Math.sin(l*4)*.05,.085,o),r.rotation.set(0,c*Math.PI/4+l,0),r.scale.set(h,h,h),r.updateMatrix(),n.setMatrixAt(l*8+c,r.matrix)}}),n.castShadow=n.receiveShadow=!0,e.add(n);let s=[];for(let[a,[o,l]]of[[-10.65,8.3],[-7.7,7.9],[6.25,8.2],[10.8,7.2],[8.9,0],[-12.3,-6.2],[-4.7,11.2]].entries()){let c=Ae(e,o,.08,l);c.userData.phase=a*1.7;for(let h=0;h<5;h++){let u=h*2.399,p=Math.cos(u)*.27,d=Math.sin(u)*.23,f=.35+h%3*.1;xt(c,[p,0,d],[p+.035,f,d],.012,fe.bark);for(let g of[-1,1]){let v=ye(c,p+g*.075,f*.57,d,.1,.019,.044,fe.leafDetail);v.rotation.z=g*.43,v.rotation.y=u}for(let g=0;g<3;g++){let v=.112-g*.027,m=ye(c,p+.035,f+g*.027,d,v,.026,v,fe.flower);m.rotation.y=g*.47+u}}Ct(c),s.push(c)}return{root:e,ferns:n,blooms:s}}function gp(i,e,t,n,r){i.root.visible=n!=="winter"&&r!=="snow",i.blooms.forEach(s=>{s.rotation.z=Math.sin(e*1.6+s.userData.phase)*t*.033,s.rotation.x=Math.cos(e*1.3+s.userData.phase)*t*.024})}var rg=new pt({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float d=length((vUv-.5)*2.);float a=exp(-d*d*4.)*.27*(1.-smoothstep(.65,1.,d));gl_FragColor=vec4(.18,.25,.23,a);}"}),sg=new ft(1,1);function Ao(i,e,t,n,r,s){let a=new Te(sg,rg);return a.rotation.x=-Math.PI/2,a.position.set(e,t,n),a.scale.set(r,s,1),i.add(a),a}function vp(i,e,t){if(Ao(i,0,.035,0,e==="garden"?2.15:2.1+t*.17,1.9+t*.1),e==="house"){let n=new Float32Array(45),r=new Ie;r.setAttribute("position",new Xe(n,3));let s=new gn(r,ur("#d9d6c8",13,.16));s.frustumCulled=!1,s.position.set(-.43,2.43+(t>=3?.56:0),-.38),s.userData.smoke=n,i.add(s)}}function _p(i,e,t){i.traverse(n=>{if(n.userData.smoke){let r=n.userData.smoke;for(let s=0;s<15;s++){let a=(e*.2+s/15)%1;r[s*3]=Math.sin(s*2.4+a*3)*.065+a*(.1+t*.37),r[s*3+1]=a*.85,r[s*3+2]=Math.cos(s*1.7+a*3)*.065+a*.09}n.geometry.attributes.position.needsUpdate=!0}})}function yp(i,e,t){let n=new Qe;i.add(n);let r=19171;function s(){return r=r*1664525+1013904223>>>0,r/4294967296}let a=new ft(.034,.24,1,4);a.translate(0,.12,0);let o=a.attributes.position;for(let y=0;y<o.count;y++){let w=o.getY(y)/.24;o.setX(y,o.getX(y)*(1-w*.96)),o.setZ(y,w*w*.025)}a.computeVertexNormals();let l=new Bt({color:"#89a869",side:At,roughness:.9}),c={value:.5},h={value:0};l.onBeforeCompile=y=>{y.uniforms.uBladeWind=c,y.uniforms.uBladeTime=h,y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
uniform float uBladeTime;uniform float uBladeWind;varying float vBlade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vBlade=position.y/.24;float bladeSeed=0.;
 #ifdef USE_INSTANCING
 bladeSeed=instanceMatrix[3].x*3.+instanceMatrix[3].z;
 #endif
 transformed.x+=sin(uBladeTime*2.1+bladeSeed)*vBlade*vBlade*(.01+uBladeWind*.055);
 `),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
varying float vBlade;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.7,1.1,vBlade);`)};let u=new Ui(a,l,6800),p=new dt,d=new pe,f=0,g=[[[-13,-6],[11,-6],[11,0],[9.1,2.7],[6,3.5]],[[0,-9],[0,-4]],[[-7.5,-8],[-7.5,-6]],[[-10.5,-6],[-10.5,-2.6],[-8.1,-1],[-8.1,5],[-9.2,8.3]],[[-8.1,3.8],[-10.8,3.8]],[[5.8,.7],[8.6,.7],[10,0],[12.5,3.4],[12.5,4.5],[8.4,8.8]],[[-13,6],[-10,9],[-6,10.2],[-2,9],[2,10.7],[2,13.8]],[[-8.1,5],[-10,9]],[[-2,9],[0,6.1]],[[8.4,8.8],[5.5,9.8],[2,10.7]]];function v(y,w){for(let S of g)for(let P=1;P<S.length;P++){let z=S[P-1],F=S[P],N=F[0]-z[0],V=F[1]-z[1],H=yt.clamp(((y-z[0])*N+(w-z[1])*V)/(N*N+V*V),0,1);if(Math.hypot(y-z[0]-N*H,w-z[1]-V*H)<.75)return!0}return!1}for(let y=0;y<9e4&&f<6800;y++){let w=(s()-.5)*35.7,S=(s()-.5)*28.2;if(w*w/319+S*S/199>1||Math.abs(w)<6.2&&Math.abs(S)<5.4&&(Math.abs(w)<.85||Math.abs(S)<.95)||v(w,S)||ss.some(z=>!["road","fishing"].includes(z.kind)&&Math.abs(w-z.x)<(z.kind==="market"?3.35:2.6)&&Math.abs(S-z.z)<3.3)||(w+8.7)**2/7+(S-12)**2/2<1||t.some(([z,F])=>Math.abs(w-z)<1.55&&Math.abs(S-F)<1.6)||(w-4.23)**2/4+(S+2.62)**2/2.2<1||w<-3.6&&S>1.4||Math.abs(w)<1.6&&S>4.1)continue;let P=.6+s()*.75;p.position.set(w,.07,S),p.rotation.y=s()*Math.PI,p.scale.set(P,P,P),p.updateMatrix(),u.setMatrixAt(f,p.matrix),d.setScalar(.9+s()*.24),u.setColorAt(f,d),f++}u.count=f,u.userData.fullCount=f,u.receiveShadow=!0,u.castShadow=!1,n.add(u);for(let y of e.userData.dynamic.children)Ao(n,y.position.x,.055,y.position.z,1.5*y.scale.x,1.35*y.scale.x);let m=[];for(let y=0;y<7;y++){let w=new Te(new Kn(.47,.485,40),new Ft({color:"#e0ede1",transparent:!0,opacity:.3,side:At,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.set(4.8,.124,-2.57),n.add(w),m.push(w)}let _=[];for(let y=0;y<2;y++){let w=new Qe,S=[],P=new Te(new mt(.025,10,7),et("#645745"));P.scale.y=2.1,w.add(P);for(let z of[-1,1]){let F=new Qe;w.add(F);for(let[N,V,H]of[[.052,.09,.1],[-.045,.075,.067]]){let K=new Te(new mt(1,12,8),et(y?"#b9c9dc":"#e7bb76",{side:At}));K.position.set(z*V*.85,N,0),K.scale.set(V,H,.013),F.add(K);for(let j=0;j<3;j++){let J=new Te(new mt(.012,8,5),et(y?"#6c8dac":"#9e754f"));J.position.set(z*V*(.55+j*.24),N+(j-1)*.027,.016),F.add(J)}}S.push(F)}w.userData.wings=S,n.add(w),_.push(w)}let x=mp(n);return{root:n,grass:u,grassMat:l,windUniform:c,timeUniform:h,ripples:m,butterflies:_,garden:x}}function xp(i,e,t,n,r,s,a){gp(i.garden,e,t,r,s),i.grass.visible=r!=="winter"&&s!=="snow",i.grassMat.color.copy(fe.grass.color),i.windUniform.value=t,i.timeUniform.value=e;let o=a.find(l=>l.userData.actor?.name==="\u767D\u9E2D");for(let l=0;l<i.ripples.length;l++){let c=i.ripples[l],h=(e*.18+l*.17)%1,u=.2+h*.9;c.position.set((o?.position.x??4.8)-l*.018,.124,(o?.position.z??-2.57)-l*.015),c.scale.set(u,u*.73,1),c.material.opacity=(1-h)*.29,c.visible=r!=="winter"}i.butterflies.forEach((l,c)=>{l.visible=n<.5&&r!=="winter"&&!["rain","snow"].includes(s),l.position.set(-3.32+Math.sin(e*.72+c*2)*.6,1.05+Math.sin(e*.9+c)*.22,2.64+Math.cos(e*.6+c)*.6),l.rotation.y=Math.sin(e*.5+c),l.userData.wings.forEach((h,u)=>h.rotation.y=Math.sin(e*14+c)*.95*(u===0?-1:1))})}var Eh=new Map,Mp={floral:0,gingham:1,stars:2,damask:3,linen:4};function Co(i="floral"){if(Eh.has(i))return Eh.get(i);let e=new Jn({color:"#fff9eb",roughness:.94,metalness:0,sheen:.55,sheenColor:"#f1e6d3",sheenRoughness:.85,side:At});return e.userData.textile=i,e.customProgramCacheKey=()=>`woven-v6-${i}`,e.onBeforeCompile=t=>{t.uniforms.uTextileAtlas=Mn.textile,t.uniforms.uTextileReady=Mn.textileReady,t.defines={...t.defines},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vTextileUV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTextileUV=uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
 varying vec2 vTextileUV;uniform sampler2D uTextileAtlas;uniform float uTextileReady;
 float textileWeave(vec2 uv){vec2 q=uv*220.;vec2 aa=fwidth(q);vec2 thread=cos(q*6.28318)*exp(-aa*aa*3.);return thread.x*.54+thread.y*.46;}
 `).replace("#include <map_fragment>",`#include <map_fragment>
 vec2 textileUV=vTextileUV;vec2 atlasOrigin=vec2(${Mp[i]%2===0?"0.":".5"},${Mp[i]<2?".5":"0."});
 vec2 tileUV=1.-abs(mod(textileUV,2.)-1.);vec3 printColor=texture2D(uTextileAtlas,atlasOrigin+.005+tileUV*.49).rgb;
 float weave=textileWeave(textileUV);float weaveHeight=weave*.06;
 ${i==="linen"?"printColor=vec3(.78,.77,.64);":"printColor=mix(vec3(.79,.76,.64),printColor,uTextileReady);"}
 diffuseColor.rgb=printColor*(.98+weave*.038);
 // Fine stitches follow the puffy diamond quilting, filtered as the camera moves away.
 ${i!=="linen"?"vec2 diamond=vec2(textileUV.x+textileUV.y,textileUV.x-textileUV.y)*5.;vec2 edge=abs(fract(diamond-.5)-.5);vec2 width=max(fwidth(diamond),vec2(.003));float stitch=1.-smoothstep(.007,.015+min(width.x,width.y),min(edge.x,edge.y));float stitchFade=1.-smoothstep(.05,.18,max(width.x,width.y));diffuseColor.rgb*=1.-stitch*stitchFade*.1;weaveHeight-=stitch*stitchFade*.012;":""}
 `).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 vec3 tdX=dFdx(-vViewPosition),tdY=dFdy(-vViewPosition);vec3 tr1=cross(tdY,normal),tr2=cross(normal,tdX);float det=dot(tdX,tr1);vec3 grad=sign(det)*(dFdx(weaveHeight)*tr1+dFdy(weaveHeight)*tr2);normal=normalize(abs(det)*normal-grad*.0018);
 `),e.userData.shader=t},Eh.set(i,e),e}function ag(i){let n=[],r=[],s=[];for(let o=0;o<=36;o++)for(let l=0;l<=44;l++){let c=l/44,h=o/36,u=(c-.5)*(i+.14),p=-.35+h*1.43,d=yt.smoothstep(Math.abs(c-.5),.4,.5),f=yt.smoothstep(h,.86,1),v=.631+.012*(Math.cos((c+h)*Math.PI*10)*Math.cos((c-h)*Math.PI*10))+.012*Math.sin(c*19+h*5)+.01*Math.cos(h*19)-d*.195-f*.19;n.push(u,v,p),r.push(c,1-h)}for(let o=0;o<36;o++)for(let l=0;l<44;l++){let c=o*45+l,h=c+44+1;s.push(c,h,c+1,h,h+1,c+1)}let a=new Ie;return a.setAttribute("position",new Se(n,3)),a.setAttribute("uv",new Se(r,2)),a.setIndex(s),a.computeVertexNormals(),a}function bp(i,e,t,n,r,s,a,o=0){let l=new mt(1,28,18),c=l.attributes.position;for(let f=0;f<c.count;f++){let g=c.getX(f),v=c.getY(f),m=c.getZ(f);c.setXYZ(f,Math.sign(g)*Math.pow(Math.abs(g),.63)*r*.5,v*.115,Math.sign(m)*Math.pow(Math.abs(m),.63)*s*.5)}l.computeVertexNormals();let h=new Qe;h.position.set(e,t,n),h.rotation.x=o,i.add(h);let u=new Te(l,Co(a));u.castShadow=u.receiveShadow=!0,h.add(u);let p=[];for(let f=0;f<=64;f++){let g=f/64*Math.PI*2;p.push(new T(Math.sign(Math.cos(g))*Math.pow(Math.abs(Math.cos(g)),.65)*r*.49,0,Math.sign(Math.sin(g))*Math.pow(Math.abs(Math.sin(g)),.65)*s*.49))}let d=new Te(new Fn(new _n(p),64,.0035,4,!1),new Bt({color:"#ddcfad",roughness:1}));return h.add(d),h}function Sp(i,e,t){let n=new Te(ag(e),Co(t));n.castShadow=n.receiveShadow=!0,i.add(n);for(let a of e<1.4?[0]:[-.43,.43])bp(i,a,.59,-.65,e<1.4?.88:.75,.44,t==="damask"?"damask":"linen");let r=[];for(let a=0;a<=30;a++){let o=(a/30-.5)*e;r.push(new T(o,.653+Math.cos(a*.65)*.007,-.335))}let s=new Te(new Fn(new _n(r),48,.008,5,!1),new Bt({color:t==="stars"?"#d0d0b8":"#e0d3b4",roughness:.96}));return s.castShadow=!0,i.add(s),n}function wp(i,e,t,n,r="gingham"){return bp(i,e,t,n,.53,.48,r,.63)}function Ep(i,e){let t=Ae(i),n=Ae(t),r=[],s=[],a=[],o=[],l=e.kind==="villa",c=l?"#a98a62":"#b99a6d",h=l?"#ede2c8":"#e5d8bc",u=new Te(new ft(10,8),et(l?"#d8d4c4":"#bda17b"));u.rotation.x=-Math.PI/2,u.position.y=.035,u.receiveShadow=!0,u.userData.floor=!0,t.add(u),G(n,0,-.2,0,10.25,.22,8.25,"#877d66"),G(n,0,.03,-4,10.15,2.7,.14,h),G(n,-5,.03,0,.14,2.7,8,h),G(n,5,.03,0,.14,.32,8,h),G(n,0,.03,4,10.15,.22,.14,h);for(let U of[-3.92,3.92])G(n,0,.035,U,10,.12,.055,c);G(n,-4.92,.035,0,.055,.12,8,c);for(let U=0;U<25;U++)if(G(n,0,.038,-3.84+U*.32,9.9,.008,.009,"#987d5f"),U%2===0)for(let q of[-3,0,3])G(n,q+U%4*.25,.04,-3.7+U*.32,.01,.007,.29,"#a18865");for(let U of[-3,0,3]){Dt(n,U,1.28,-3.89,1.05,.99);for(let q of[-1,1])G(n,U+q*.65,1.14,-3.83,.25,1.27,.08,l?"#ad9290":"#bac4ac");G(n,U,2.48,-3.82,1.7,.065,.1,"#a88c68")}let p=new Te(new ft(3.1,2),new Ft({color:"#ffedb8",transparent:!0,opacity:.11,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.rotation.z=-.3,p.position.set(-.7,.055,-1.9),t.add(p);function d(U,q,E,L){s.push({x:U,z:q,w:E+.16,d:L+.16})}function f(U,q,E,L,Y,ie,C,M){let I=Ae(t,E,.055,L);return I.userData.furniture={label:U,text:q,action:M,active:!1},C(I),Ao(I,0,.001,0,Y*1.13,ie*1.15),Ct(I),r.push(I),d(E,L,Y,ie),I}function g(U,q,E){ue(U,q,.45,E,.23,.23,.075,c,16);for(let L of[-1,1])for(let Y of[-1,1])G(U,q+L*.14,.05,E+Y*.14,.045,.4,.045,"#806d54")}function v(U,q,E,L){ue(U,q,E,L,.073,.055,.12,"#f0e7d2",14),ue(U,q,E+.122,L,.054,.054,.007,"#675140",14);let Y=Ye(U,new hn(.045,.013,6,12),"#e3d8be",q+.078,E+.06,L)}function m(U,q,E,L,Y="#e0d7bc"){ue(U,q,E,L,.16,.1,.11,Y,16),ye(U,q,E+.12,L,.12,.025,.12,"#a6b277")}function _(U,q,E,L,Y=5){for(let ie=0;ie<Y;ie++)G(U,q+ie*.1,E,L,.074,.24+ie%3*.035,.18,["#80939f","#bb927d","#b7b47e","#9d91a6"][ie%4]),G(U,q+ie*.1,E+.06,L+.094,.057,.011,.008,"#ddcba5")}function x(U,q,E,L){ue(U,q,E,L,.15,.1,.21,"#b89774",12);for(let Y=0;Y<6;Y++){let ie=Y*2.4;ye(U,q+Math.sin(ie)*.11,E+.28+Y%2*.11,L+Math.cos(ie)*.11,.085,.19,.055,fe.leaves)}}function y(U,q){f("\u9910\u684C","\u9910\u5177\u3001\u8336\u676F\u548C\u521A\u6446\u597D\u7684\u9762\u5305\uFF0C\u4E00\u5BB6\u4EBA\u4F1A\u5728\u8FD9\u91CC\u5403\u996D\u3002",U,q,1.7,1.1,E=>{G(E,0,.73,0,1.7,.11,1.1,c);for(let L of[-1,1])for(let Y of[-1,1])G(E,L*.66,.05,Y*.4,.08,.68,.08,"#806d54");G(E,0,.85,0,.45,.009,1.08,Co("gingham"));for(let L of[-1,1])m(E,L*.5,.85,0),v(E,L*.55,.85,-.34),g(E,L*1.12,0);ye(E,0,.96,0,.2,.07,.13,"#c29b64")}),d(U-1.1,q,.48,.5),d(U+1.1,q,.48,.5)}function w(U,q,E=!1){return f("\u6C99\u53D1\u4E0E\u8336\u51E0","\u8F6F\u57AB\u3001\u9760\u6795\u3001\u8336\u676F\u548C\u644A\u5F00\u7684\u6742\u5FD7\u3002\u5750\u4E0B\u6765\u6B47\u4E00\u4F1A\u513F\u3002",U,q,2.3,1.8,L=>{G(L,0,.18,-.3,2.13,.26,.81,"#927a63"),G(L,0,.34,-.57,2.13,.62,.25,E?"#879799":"#a8b297");for(let Y of[-1,1])G(L,Y*.95,.36,-.22,.23,.44,.95,E?"#879799":"#a8b297"),wp(L,Y*.5,.65,-.32,E?"damask":"gingham");G(L,0,.3,.77,1.4,.075,.62,c);for(let Y of[-.54,.54])G(L,Y,.03,.77,.07,.28,.4,"#8f795b");v(L,.3,.385,.77),G(L,-.28,.385,.77,.43,.025,.32,"#d8ccb1")})}function S(U,q,E=!1){return f(E?"\u5B69\u5B50\u7684\u5E8A":"\u5367\u5E8A",E?"\u5370\u7740\u5C0F\u661F\u661F\u7684\u88AB\u5B50\uFF0C\u5E8A\u5934\u653E\u7740\u6545\u4E8B\u4E66\u548C\u5C0F\u718A\u3002":"\u94FA\u597D\u7684\u68C9\u88AB\u3001\u4E24\u53EA\u6795\u5934\uFF0C\u5E8A\u5934\u6709\u95F9\u949F\u548C\u8BFB\u7269\u3002",U,q,E?1.2:1.85,2,L=>{let Y=E?1.2:1.85;if(G(L,0,.13,0,Y,.27,2,c),G(L,0,.24,-.93,Y,.76,.12,"#a98a62"),G(L,0,.4,0,Y-.1,.14,1.85,"#e8dfc9"),Sp(L,Y,l?"damask":E?"stars":"floral"),E){ye(L,.25,.72,-.73,.13,.15,.1,"#b18b5f"),ye(L,.25,.88,-.73,.105,.105,.09,"#b18b5f");for(let ie of[-1,1])ye(L,.25+ie*.08,.96,-.74,.05,.05,.04,"#b18b5f")}else G(L,1.14,.05,-.65,.37,.49,.43,c),ye(L,1.14,.66,-.65,.12,.12,.06,"#d8c494")})}function P(U,q,E="\u4E66\u67B6",L="books"){return f(E,L==="books"?"\u4E66\u7C4D\u6309\u7C7B\u522B\u6392\u597D\uFF0C\u4E0B\u5C42\u8FD8\u6709\u4FE1\u7EB8\u548C\u6536\u7EB3\u7BEE\u3002":"\u8D27\u67B6\u4E0A\u6574\u9F50\u6446\u7740\u65E5\u5E38\u7528\u54C1\uFF0C\u53EF\u4EE5\u8D70\u8FD1\u770B\u770B\u3002",U,q,1.6,.43,Y=>{G(Y,0,.05,-.16,1.65,1.7,.1,c);for(let ie of[-.78,.78])G(Y,ie,.05,0,.07,1.76,.45,c);for(let ie=0;ie<4;ie++)if(G(Y,0,.15+ie*.45,0,1.65,.06,.46,c),L==="books")_(Y,-.61,.23+ie*.45,0,11);else for(let C=0;C<6;C++){let M=-.61+C*.24;G(Y,M,.23+ie*.45,0,.16,.24,.2,["#b3bda7","#d5c6ac","#bc9b8d","#a0b4ba"][C%4]),G(Y,M,.29+ie*.45,.106,.1,.07,.008,"#eee5cf")}})}function z(U,q,E="\u8863\u67DC"){let L=E==="\u98DF\u54C1\u50A8\u7269\u67DC"?"\u67DC\u91CC\u653E\u7740\u7C73\u9762\u3001\u7F50\u5934\u3001\u8336\u53F6\u548C\u5907\u7528\u9910\u5177\u3002":E==="\u6587\u4EF6\u67DC"?"\u6587\u4EF6\u5939\u3001\u767B\u8BB0\u518C\u548C\u4FE1\u4EF6\u90FD\u6309\u6B21\u5E8F\u6536\u597D\u4E86\u3002":"\u91CC\u9762\u53E0\u7740\u8863\u7269\u548C\u5E72\u51C0\u6BDB\u5DFE\u3002",Y=f(E,L,U,q,1.36,.62,C=>{G(C,0,.03,-.1,1.4,1.92,.43,c);for(let M of[.16,.67,1.18])G(C,0,M,.09,1.24,.06,.5,"#c6af86");for(let M=0;M<3;M++)E==="\u98DF\u54C1\u50A8\u7269\u67DC"?ue(C,-.32+M*.31,.75,.16,.09,.09,.23,"#b6b999",12):G(C,-.32+M*.31,.79,.16,.26,.1,.22,"#dcd8ba")}),ie=Ae(Y,-.67,0,.24);return G(ie,.66,.04,0,1.3,1.87,.075,"#bfa17a"),ye(ie,1.17,.97,.066,.036,.036,.026,"#d4b66b"),Y.userData.furniture.action=()=>(Y.userData.furniture.active=!Y.userData.furniture.active,ie.rotation.y=Y.userData.furniture.active?-1.4:0,Y.userData.furniture.active?"\u67DC\u95E8\u6253\u5F00\u4E86\uFF0C"+L:"\u67DC\u95E8\u8F7B\u8F7B\u5173\u597D\u4E86\u3002"),Y}function F(){f("\u7076\u53F0\u4E0E\u9505\u5177","\u7076\u53F0\u4E0A\u6709\u6C64\u9505\u3001\u5E73\u5E95\u9505\uFF0C\u65C1\u8FB9\u662F\u8C03\u5473\u74F6\u548C\u7827\u677F\u3002",-3.55,-3.13,2.35,.92,E=>{G(E,0,.08,0,2.3,.77,.87,c),G(E,0,.85,0,2.43,.08,.97,"#cfc8af");for(let L of[-.62,.06])ue(E,L,.94,0,.21,.21,.025,"#566061",20),ue(E,L,.97,0,.18,.14,.23,"#859a99",16),ue(E,L,1.2,0,.19,.19,.04,"#aebbb1",16),ye(E,L,1.28,0,.05,.04,.05,"#626e69");for(let L=0;L<3;L++)ue(E,.64+L*.16,.94,-.18,.05,.045,.18,["#ac8f61","#a0a673","#c2aa7e"][L],10);G(E,.74,.94,.17,.5,.028,.29,"#a89065");for(let L of[-.55,.55])G(E,L,.51,.45,.42,.055,.04,"#d4bc86")});let U=f("\u6D17\u83DC\u6C60","\u8F6C\u52A8\u6C34\u9F99\u5934\uFF0C\u53EF\u4EE5\u770B\u5230\u6C34\u6D41\u3002",-.95,-3.15,1.28,.92,E=>{G(E,0,.08,0,1.26,.77,.86,c),G(E,0,.85,0,1.38,.07,.96,"#d9d7c4"),G(E,0,.923,0,.84,.022,.57,"#8aa8aa"),xt(E,[0,.97,-.3],[0,1.31,-.3],.028,"#9daea6"),xt(E,[0,1.31,-.3],[0,1.31,-.03],.028,"#9daea6")}),q=ue(U,0,.94,-.03,.017,.029,.36,fe.water,8);q.visible=!1,U.userData.furniture.action=()=>(q.visible=!q.visible,q.visible?"\u6E05\u6C34\u6D41\u8FDB\u4E86\u6C34\u69FD\u3002\u518D\u70B9\u4E00\u6B21\u53EF\u4EE5\u5173\u6C34\u3002":"\u6C34\u9F99\u5934\u5173\u597D\u4E86\u3002"),z(-4.2,-1.75,"\u98DF\u54C1\u50A8\u7269\u67DC"),f("\u51B0\u7BB1","\u51B7\u85CF\u5BA4\u91CC\u653E\u7740\u725B\u5976\u3001\u9E21\u86CB\u3001\u852C\u83DC\u548C\u4E00\u7BEE\u6C34\u679C\u3002",.17,-3.3,.79,.8,E=>{G(E,0,.04,0,.78,1.64,.8,"#d5ded4"),G(E,0,1.12,.416,.76,.03,.027,"#93a6a0");for(let L of[.73,1.38])G(E,-.22,L,.455,.045,.22,.042,"#94a49d")})}function N(){G(n,1.13,.04,-2.7,.1,1.28,2.55,"#cad4cb"),d(1.13,-2.7,.1,2.55),G(n,3.05,.044,-2.75,3.7,.01,2.32,"#bfd0ca"),f("\u6D74\u7F38\u4E0E\u6BDB\u5DFE\u67B6","\u6D74\u7F38\u65C1\u6302\u7740\u5E72\u51C0\u6BDB\u5DFE\uFF0C\u53F0\u9762\u6709\u7682\u76D2\u548C\u6D17\u6D74\u7528\u54C1\u3002",3.6,-3.02,1.94,.89,U=>{G(U,0,.08,0,1.96,.55,.9,"#eee8d9"),G(U,0,.64,0,1.63,.028,.63,"#aac6c9");for(let q of[-.92,.92])G(U,q,.48,0,.13,.24,.97,"#f3ecdc");for(let q of[-.43,.43])G(U,0,.48,q,1.85,.24,.13,"#f3ecdc");xt(U,[-.66,.66,-.4],[-.66,.93,-.4],.025,"#a4b2aa"),xt(U,[-.66,.93,-.4],[-.66,.93,-.16],.025,"#a4b2aa"),G(U,.34,.78,-.51,.48,.03,.29,"#9fbaa9")}),f("\u6D17\u624B\u53F0\u4E0E\u955C\u5B50","\u7259\u5237\u3001\u676F\u5B50\u3001\u9999\u7682\u3001\u6D17\u624B\u6DB2\u90FD\u653E\u5728\u6D17\u624B\u53F0\u65C1\u3002",2,-2.13,1,.68,U=>{G(U,0,.05,0,.9,.66,.6,"#c6c2ad"),ue(U,0,.73,0,.39,.27,.12,"#eee6d3",20),G(U,0,1.05,-.29,.76,.77,.047,"#a2b9be"),G(U,0,1.83,-.29,.85,.045,.07,c),v(U,-.32,.88,0);for(let q=0;q<3;q++)G(U,-.37+q*.04,.94,0,.015,.22,.016,["#9cae94","#bd9c8d","#8aaab7"][q]);ue(U,.33,.88,0,.058,.053,.18,"#9eb6a4")}),f("\u5750\u4FBF\u5668","\u6D74\u5BA4\u91CC\u5907\u6709\u5377\u7EB8\u3001\u6E05\u6D01\u5237\u548C\u5E26\u76D6\u5783\u573E\u6876\u3002",3.5,-1.7,.75,.86,U=>{ue(U,0,.09,.06,.25,.18,.39,"#e9e8d8",16),ye(U,0,.49,.1,.32,.085,.38,"#f2efdf"),G(U,0,.47,-.25,.55,.56,.2,"#eee8d7"),ue(U,.47,.06,0,.13,.11,.3,"#a2b6ad",12)})}function V(U,q){let E=f("\u843D\u5730\u706F","\u4E00\u76CF\u6696\u9EC4\u8272\u7684\u9605\u8BFB\u706F\u3002",U,q,.4,.4,Y=>{ue(Y,0,.04,0,.24,.24,.06,"#ad976c",16),ue(Y,0,.1,0,.026,.035,1.45,"#a89265",10),ue(Y,0,1.47,0,.22,.36,.44,"#e5d4a9",16)}),L=new mi("#ffd89b",5,5,2);L.position.set(0,1.47,0),E.add(L),E.userData.furniture.action=()=>(L.intensity=L.intensity?0:5,L.intensity?"\u706F\u4EAE\u4E86\uFF0C\u5C4B\u91CC\u591A\u4E86\u4E00\u70B9\u6696\u610F\u3002":"\u9605\u8BFB\u706F\u5173\u597D\u4E86\u3002")}function H(U,q){f("\u4E66\u684C","\u58A8\u6C34\u3001\u4FE1\u7EB8\u3001\u94C5\u7B14\u3001\u53F0\u5386\u548C\u4E00\u5C01\u672A\u5199\u5B8C\u7684\u4FE1\u3002",U,q,1.45,.75,E=>{G(E,0,.72,0,1.4,.1,.72,c);for(let L of[-.56,.56])G(E,L,.05,0,.08,.67,.56,c);G(E,-.28,.83,0,.44,.015,.31,"#f0e5c9"),_(E,.15,.83,-.13,3),ue(E,.43,.83,.1,.066,.06,.1,"#8c9da0"),g(E,0,.65)}),d(U,q+.65,.5,.5)}function K(U,q){let E=[],L=f("\u94A2\u7434","\u7434\u76D6\u5F00\u7740\uFF0C\u8F7B\u89E6\u7434\u952E\u8BD5\u8BD5\u3002",U,q,1.8,1.1,Y=>{G(Y,0,.05,-.15,1.8,1.1,.72,"#655447"),G(Y,0,.8,.43,1.76,.09,.48,"#5e5145");for(let ie=0;ie<18;ie++){let C=G(Y,-.79+ie*.091,.91,.49,.082,.04,.31,"#ede6d1");C.userData.rotor=!0,E.push(C),ie%7!==2&&ie%7!==6&&G(Y,-.745+ie*.091,.953,.4,.046,.035,.19,"#394447")}g(Y,0,1)});L.userData.furniture.action=()=>{try{let Y=new(globalThis.AudioContext||globalThis.webkitAudioContext);[261.6,329.6,392,523.3].forEach((ie,C)=>{let M=Y.createOscillator(),I=Y.createGain();M.type="triangle",M.frequency.value=ie,I.gain.setValueAtTime(0,Y.currentTime+C*.18),I.gain.linearRampToValueAtTime(.055,Y.currentTime+C*.18+.02),I.gain.exponentialRampToValueAtTime(.001,Y.currentTime+C*.18+1),M.connect(I),I.connect(Y.destination),M.start(Y.currentTime+C*.18),M.stop(Y.currentTime+C*.18+1.1)}),setTimeout(()=>Y.close(),2300)}catch{}return"\u6307\u5C16\u8F7B\u8F7B\u843D\u5728\u7434\u952E\u4E0A\u3002"},d(U,q+1,.5,.5)}function j(U,q,E,L){f(E,L==="fish"?"\u51B0\u53F0\u4E0A\u6709\u94F6\u8272\u7684\u5C0F\u9C7C\u548C\u7EA2\u8272\u7684\u9CB7\u9C7C\u3002":L==="bread"?"\u65B0\u70E4\u7684\u5706\u9762\u5305\u3001\u957F\u9762\u5305\u548C\u997C\u5E72\u3002":"\u7AF9\u7B50\u91CC\u88C5\u7740\u65B0\u9C9C\u852C\u679C\uFF0C\u8FB9\u4E0A\u653E\u7740\u79E4\u548C\u7EB8\u888B\u3002",U,q,1.85,1,Y=>{G(Y,0,.06,0,1.8,.66,.85,c),G(Y,0,.73,0,1.95,.08,.98,"#d4bb90");for(let ie=0;ie<12;ie++){let C=-.68+ie%4*.45,M=-.29+Math.floor(ie/4)*.26;if(L==="fish"){ye(Y,C,.88,M,.17,.046,.072,ie%2?"#97b2b5":"#c79487");let I=Ye(Y,new yn(.07,.13,3),"#819d9e",C+.19,.88,M);I.rotation.z=Math.PI/2}else L==="bread"?ye(Y,C,.89,M,.15,.087,.085,"#c59d66"):(ye(Y,C,.9,M,.12,.12,.105,["#9fae74","#c28561","#c49179","#b8ba83"][ie%4]),ye(Y,C,.99,M,.032,.03,.032,fe.leaves))}})}let J=e.kind;if(["home","family","villa","house","mill","lighthouse"].includes(J))F(),N(),w(-2.75,1.66,l),y(-1.6,-.73),V(l?-.72:-4.25,l?1.1:2.4),J==="family"?(S(1.97,1.19,!0),S(3.79,1.19,!0),H(2.8,3.19),f("\u73A9\u5177\u7BEE","\u5C0F\u718A\u3001\u79EF\u6728\u3001\u6728\u5934\u5C0F\u8239\uFF0C\u8FD8\u6709\u4E00\u9897\u5F39\u529B\u7403\u3002",.46,2.9,.56,.54,U=>{G(U,0,.02,0,.56,.26,.53,"#ba9f72");for(let q=0;q<6;q++)G(U,Math.sin(q*2)*.16,.29,Math.cos(q*2)*.16,.12,.12,.12,["#a9b881","#b98f7a","#7b9eae"][q%3]);ye(U,0,.5,0,.12,.12,.12,"#9dad91")})):(S(3.05,1.1),z(4.23,3.05),H(.7,2.68)),P(-4.07,.24),l&&(K(-2.37,3.04),x(n,.8,.05,.32));else if(J==="cafe"){f("\u5496\u5561\u5427\u53F0","\u624B\u78E8\u8C46\u673A\u3001\u5496\u5561\u673A\u3001\u676F\u789F\u3001\u725B\u5976\u58F6\uFF0C\u5427\u53F0\u540E\u98D8\u7740\u5496\u5561\u9999\u3002",-2.6,-2.65,3.7,1.06,U=>{G(U,0,.07,0,3.7,.96,1.02,"#ac8a65"),G(U,0,1.03,0,3.9,.09,1.13,"#d7c8a8"),G(U,-.7,1.13,-.08,.85,.72,.53,"#8fa6a6"),ue(U,-.7,1.85,-.08,.16,.14,.2,"#d1b98c",14);for(let q of[-.87,-.53])v(U,q,1.14,.27);for(let q of[.27,.59,.91])v(U,q,1.14,.12);G(U,1.43,1.14,0,.47,.06,.56,"#d3b487"),ye(U,1.43,1.28,0,.16,.11,.14,"#bb9970")},()=>"\u4E00\u676F\u70ED\u5496\u5561\u505A\u597D\u4E86\uFF0C\u5750\u5230\u7A97\u8FB9\u6162\u6162\u559D\u5427\u3002");for(let[U,q]of[[-2.8,.2],[1.1,.15],[-2.8,2.7],[1.1,2.7]])y(U,q);j(2.8,-2.68,"\u751C\u70B9\u5C55\u793A\u67DC","bread"),P(3.85,.1,"\u676F\u789F\u67B6","goods"),V(4.25,2.85),x(n,-4.5,.05,3.3),a.push(un(t,{name:"\u6F84\u5B50\u7684\u59D0\u59D0",female:!0,color:"#ad8d78",role:"\u5496\u5561\u5E08",lines:["\u5496\u5561\u5DF2\u7ECF\u78E8\u597D\u4E86\uFF0C\u70B9\u5427\u53F0\u5C31\u80FD\u70B9\u4E00\u676F\u3002"]})),a[0].position.set(-2.4,.06,-3.6)}else if(J==="department"){for(let[U,q,E]of[[-3.6,"\u4E66\u7C4D\u4E0E\u6587\u5177","books"],[-1.1,"\u6D17\u6D74\u4E0E\u6E05\u6D01\u7528\u54C1","goods"],[1.4,"\u98DF\u54C1\u4E0E\u8336\u53F6","goods"],[3.85,"\u6BDB\u5DFE\u4E0E\u5BB6\u5C45\u7528\u54C1","goods"]])P(U,-3.35,q,E);for(let U of[-3.3,.05,3.4])f("\u670D\u88C5\u9648\u5217\u67B6","\u8FDE\u8863\u88D9\u3001\u5916\u5957\u548C\u5B69\u5B50\u4EEC\u7684\u5C0F\u8863\u670D\uFF0C\u6302\u5728\u6728\u8863\u67B6\u4E0A\u3002",U,-.75,1.65,.52,q=>{for(let E of[-1,1])G(q,E*.73,.05,0,.055,1.45,.055,"#bca475");xt(q,[-.73,1.5,0],[.73,1.5,0],.025,"#bca475");for(let E=0;E<5;E++){let L=-.52+E*.26;G(q,L,.74,0,.21,.59,.22,["#a3b7b0","#c29e91","#b6acc1","#d2be91","#8ca9b4"][E])}});y(-2.7,2.23),f("\u6536\u94F6\u53F0","\u6536\u94F6\u673A\u3001\u5305\u88C5\u7EB8\u3001\u8D2D\u7269\u888B\u548C\u4E00\u53E0\u8D2D\u7269\u5C0F\u7968\u3002",2.1,2.45,2.6,.94,U=>{G(U,0,.07,0,2.55,.83,.9,c),G(U,0,.91,0,2.68,.07,1.05,"#d8c6a4"),G(U,-.4,.98,0,.51,.21,.43,"#91a7a1"),G(U,-.4,1.18,-.08,.44,.29,.08,"#596e6d");for(let q=0;q<3;q++)G(U,.25+q*.29,.99,0,.22,.39,.2,"#d9c8a2")}),a.push(un(t,{name:"\u767E\u8D27\u5E97\u7684\u73B2",female:!0,color:"#7692aa",role:"\u5E97\u5458",lines:["\u60F3\u627E\u65E5\u7528\u54C1\uFF0C\u53F3\u8FB9\u7684\u67B6\u5B50\u6700\u9F50\u5168\u3002"]})),a[0].position.set(2.1,.06,1.56)}else if(J==="market"){for(let[U,q,E,L]of[[-3,-2.6,"\u5F53\u5B63\u852C\u83DC","vegetable"],[.3,-2.6,"\u6C34\u679C\u644A","fruit"],[3.4,-2.6,"\u9C9C\u9C7C\u51B0\u53F0","fish"],[-3,.3,"\u9762\u5305\u644A","bread"],[.3,.3,"\u6839\u830E\u852C\u83DC","vegetable"],[3.4,.3,"\u6D77\u8FB9\u9C7C\u83B7","fish"]])j(U,q,E,L);f("\u79E4\u4E0E\u6536\u7EB3\u53F0","\u8001\u5F0F\u79E4\u3001\u83DC\u7BEE\u5B50\u3001\u7EB8\u888B\u548C\u4E00\u53E0\u96F6\u94B1\u3002",-2.5,2.85,2.8,.75,U=>{G(U,0,.08,0,2.8,.62,.7,c),G(U,-.55,.71,0,.48,.23,.4,"#8caa9d"),ue(U,-.55,.95,0,.3,.22,.055,"#c4cdbb",16);for(let q of[.2,.8])ue(U,q,.72,0,.23,.18,.25,"#baa27a",12)}),a.push(un(t,{name:"\u79CB\u59E8",female:!0,color:"#9ba577",role:"\u644A\u4E3B",lines:["\u6162\u6162\u6311\uFF0C\u4ECA\u5929\u9C7C\u548C\u852C\u83DC\u90FD\u5F88\u65B0\u9C9C\u3002"]})),a[0].position.set(.3,.06,-3.65)}else if(J==="church"){for(let U of[-2.7,2.7])for(let q of[-.6,.8,2.2])f("\u793C\u62DC\u957F\u6905","\u5149\u4ECE\u82B1\u7A97\u843D\u5728\u6728\u6905\u4E0A\uFF0C\u8FD9\u91CC\u5F88\u5B89\u9759\u3002",U,q,2.75,.6,E=>{G(E,0,.43,0,2.7,.1,.6,"#a18765"),G(E,0,.49,-.25,2.7,.58,.09,"#b1946a");for(let L of[-1.1,1.1])G(E,L,.05,0,.11,.38,.44,"#8e795a")});f("\u796D\u53F0\u4E0E\u70DB\u53F0","\u9C9C\u82B1\u4E0E\u4E24\u652F\u8721\u70DB\u6446\u5728\u796D\u53F0\u4E0A\u3002",0,-2.4,2.2,.8,U=>{G(U,0,.1,0,2.14,.78,.77,"#d8c9a9"),G(U,0,.9,0,2.35,.06,.96,"#f1e7cb");for(let q of[-.8,.8])ue(U,q,.97,0,.12,.16,.07,"#c1a46b",14),ue(U,q,1.04,0,.033,.035,.39,"#efdfae",12),ye(U,q,1.46,0,.036,.09,.036,fe.glass);Ht(U,0,.98,0,.6)}),G(n,0,1.46,-3.84,.065,1.12,.065,"#b09a69"),G(n,0,2.11,-3.84,.62,.065,.065,"#b09a69"),K(-3.4,-2.7);for(let U=0;U<10;U++)ue(n,-4.22+U*.18,1.1,-3.54,.055,.055,1.5-Math.abs(U-4.5)*.17,"#b2b7a6",10);for(let U=0;U<10;U++){let q=["#b9959e","#8baebd","#cfbd88"][U%3],E=new Te(new ft(.7,1.15),new Ft({color:q,transparent:!0,opacity:.14,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.rotation.z=-.3,E.position.set(-2.7+U*.53,.055,-1.4),t.add(E)}}else f("\u5E02\u653F\u529E\u4E8B\u67DC\u53F0","\u684C\u4E0A\u6709\u767B\u8BB0\u518C\u3001\u5370\u7AE0\u3001\u5730\u56FE\u548C\u4FE1\u4EF6\u3002",0,-1.8,4.3,.95,U=>{G(U,0,.08,0,4.3,.97,.9,c),G(U,0,1.05,0,4.45,.08,1.01,"#d3c5a4");for(let q of[-1.4,0,1.4])G(U,q,1.14,.05,.47,.03,.31,"#e9dec3"),ue(U,q+.2,1.17,-.2,.046,.055,.1,"#a18164",12)}),P(-3.9,-3.25,"\u57CE\u9547\u6863\u6848"),P(3.9,-3.25,"\u9605\u89C8\u4E66\u67B6"),H(-3.3,.63),H(3.3,.63),w(0,2.3),z(-4.1,2.83,"\u6587\u4EF6\u67DC"),V(4.22,2.95),a.push(un(t,{name:"\u5E02\u653F\u5385\u7684\u5B89\u5A1C",female:!0,color:"#818bb0",role:"\u5E02\u653F\u804C\u5458",lines:["\u8FD9\u91CC\u662F\u6F6E\u6C50\u9547\uFF0C\u6B22\u8FCE\u4F60\u968F\u65F6\u6765\u5750\u5750\u3002","\u7801\u5934\u3001\u6C99\u6EE9\u548C\u7901\u5CB8\u90FD\u6709\u9493\u70B9\u3002"]})),a[0].position.set(0,.06,-2.85);let ee=un(t,{name:"\u65C5\u884C\u4E2D\u7684\u4F60",female:!0,color:"#bd9578",hair:"#6d5348"});ee.position.set(.05,.06,3.5),ee.scale.setScalar(.85),Ct(n);let te=new Jr("#fff0d2","#8a928a",.75);t.add(te);let ne=new mi("#ffe1ab",18,13,2);return ne.position.set(0,4,0),t.add(ne),{root:t,place:e,floor:u,items:r,npcs:a,player:ee,obstacles:s,animated:o,sunlight:p,path:[],pending:null,elapsed:0,dispose(){t.removeFromParent(),ts(t)}}}var Ro=.25,Ap=-4.75,Cp=-3.75,Rp=39,og=31;function Tp(i,e){return[Math.round((i-Ap)/Ro),Math.round((e-Cp)/Ro)]}function Pp(i,e){return{x:Ap+i*Ro,z:Cp+e*Ro}}function lg(i,e,t){if(e<0||t<0||e>=Rp||t>=og)return!1;let n=Pp(e,t);return!i.obstacles.some(r=>Math.abs(n.x-r.x)<r.w/2+.1&&Math.abs(n.z-r.z)<r.d/2+.1)}function cg(i,e,t){let n=Tp(i.player.position.x,i.player.position.z),r=Tp(e,t),s=(p,d)=>d*Rp+p,a=[n],o=new Map([[s(...n),null]]),l=n,c=1/0;for(let p=0;p<a.length;p++){let d=a[p],f=(d[0]-r[0])**2+(d[1]-r[1])**2;if(f<c&&(c=f,l=d),f===0)break;for(let[g,v]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=d[0]+g,_=d[1]+v,x=s(m,_);!o.has(x)&&lg(i,m,_)&&(o.set(x,d),a.push([m,_]))}}let h=[],u=l;for(;u&&s(...u)!==s(...n);)h.push(Pp(...u)),u=o.get(s(...u));return h.reverse()}function Po(i,e,t){i.path=cg(i,e,t)}function Ip(i,e,t,n){if(!i)return;i.sunlight.material.opacity=(1-n)*.11;let r=i.player,s=t*1.6;for(;s>0&&i.path.length;){let a=i.path[0],o=a.x-r.position.x,l=a.z-r.position.z,c=Math.hypot(o,l);r.rotation.y=Math.atan2(o,l),c<=s?(r.position.set(a.x,.06,a.z),i.path.shift(),s-=c):(r.position.x+=o/c*s,r.position.z+=l/c*s,s=0)}_i(r,e,i.path.length>0),i.npcs.forEach(a=>_i(a,e,!1))}var Ks=[{id:"sardine",name:"\u6C99\u4E01\u9C7C",rarity:"\u5E38\u89C1",spots:["pier","beach"],weight:20,size:[12,25],price:18,difficulty:.2,color:"#9dbbc3",shape:"slim"},{id:"mackerel",name:"\u9CAD\u9C7C",rarity:"\u5E38\u89C1",spots:["pier","rocks"],weight:16,size:[25,44],price:30,difficulty:.33,color:"#78a3ad",shape:"slim"},{id:"horse",name:"\u7AF9\u835A\u9C7C",rarity:"\u5E38\u89C1",spots:["pier","beach"],weight:18,size:[16,34],price:24,difficulty:.27,color:"#b6c3b1",shape:"slim"},{id:"mullet",name:"\u9CBB\u9C7C",rarity:"\u5E38\u89C1",spots:["pier","beach"],weight:14,size:[23,51],price:32,difficulty:.33,color:"#9bada6"},{id:"whiting",name:"\u6C99\u68AD\u9C7C",rarity:"\u5E38\u89C1",spots:["beach"],weight:20,size:[13,29],price:26,difficulty:.25,color:"#c5bf9e",shape:"slim"},{id:"bass",name:"\u6D77\u9C88\u9C7C",rarity:"\u5C11\u89C1",spots:["pier","rocks"],weight:11,size:[35,78],price:68,difficulty:.54,color:"#99b4b3",weather:"rain"},{id:"blackbream",name:"\u9ED1\u9CB7",rarity:"\u5C11\u89C1",spots:["pier","rocks"],weight:10,size:[22,48],price:58,difficulty:.47,color:"#7a9199",shape:"round"},{id:"redbream",name:"\u771F\u9CB7",rarity:"\u7A00\u6709",spots:["rocks","pier"],weight:5,size:[28,65],price:115,difficulty:.64,color:"#d19c9c",shape:"round",season:"spring"},{id:"goldbream",name:"\u9EC4\u9CCD\u9CB7",rarity:"\u5C11\u89C1",spots:["beach","rocks"],weight:9,size:[19,43],price:55,difficulty:.42,color:"#c0b88b",shape:"round",season:"summer"},{id:"flounder",name:"\u7259\u9C86",rarity:"\u5C11\u89C1",spots:["beach"],weight:9,size:[28,60],price:72,difficulty:.5,color:"#acaa8c",shape:"flat"},{id:"puffer",name:"\u6CB3\u8C5A",rarity:"\u5C11\u89C1",spots:["beach","rocks"],weight:9,size:[12,31],price:46,difficulty:.38,color:"#b7b48b",shape:"puffer"},{id:"grouper",name:"\u77F3\u6591\u9C7C",rarity:"\u7A00\u6709",spots:["rocks"],weight:6,size:[32,76],price:125,difficulty:.68,color:"#a89c84",shape:"spotted"},{id:"hairtail",name:"\u5E26\u9C7C",rarity:"\u7A00\u6709",spots:["pier"],weight:5,size:[60,120],price:105,difficulty:.62,color:"#bfd0cf",shape:"ribbon",night:!0},{id:"flying",name:"\u98DE\u9C7C",rarity:"\u7A00\u6709",spots:["pier","rocks"],weight:4,size:[19,36],price:100,difficulty:.57,color:"#91b8c5",shape:"flying",season:"summer"},{id:"cod",name:"\u9CD5\u9C7C",rarity:"\u7A00\u6709",spots:["rocks"],weight:4,size:[36,84],price:135,difficulty:.68,color:"#b3bdac",shape:"spotted",season:"winter"},{id:"tuna",name:"\u91D1\u67AA\u9C7C",rarity:"\u73CD\u7A00",spots:["pier"],weight:1,size:[74,146],price:260,difficulty:.83,color:"#7998ab",shape:"tuna"}],Lo={pier:{name:"\u6D77\u98CE\u7801\u5934",x:2,z:17.7,angle:0},beach:{name:"\u6708\u7259\u6C99\u6EE9",x:-9.8,z:14.65,angle:0},rocks:{name:"\u767D\u6D6A\u7901\u5CB8",x:13.99,z:11.46,angle:.3}};function hg(i,e,t=Math.random){let n=Ks.filter(a=>a.spots.includes(i)),r=n.map(a=>a.weight*(a.night?e.hour>=19||e.hour<5?3:.25:1)*(a.weather===e.weather?1.8:1)*(a.season===e.season?2:1)),s=t()*r.reduce((a,o)=>a+o,0);for(let a=0;a<n.length;a++)if(s-=r[a],s<0)return n[a];return n.at(-1)}var Io=class{constructor(e=Math.random){this.rng=e,this.phase="idle",this.spot="pier",this.elapsed=0,this.held=!1,this.collection=new Map,this.catch=null,this.message="\u629B\u4E0B\u9C7C\u94A9\uFF0C\u542C\u4E00\u4F1A\u513F\u6D77\u6D6A\u3002"}open(e){this.cancel(),this.spot=e}cancel(){this.phase="idle",this.held=!1,this.catch=null,this.message="\u629B\u4E0B\u9C7C\u94A9\uFF0C\u542C\u4E00\u4F1A\u513F\u6D77\u6D6A\u3002"}cast(e){return!["idle","escaped","caught"].includes(this.phase)||this.catch?!1:(this.fish=hg(this.spot,e,this.rng),this.phase="casting",this.elapsed=0,this.wait=2.2+this.rng()*3.2,this.held=!1,this.message="\u9C7C\u7EBF\u5212\u8FC7\u6D77\u9762\u2026\u2026",!0)}press(){return this.phase==="bite"?(this.phase="reel",this.elapsed=0,this.tension=.35,this.progress=.04,this.danger=0,this.slack=0,this.held=!0,this.message="\u6309\u4F4F\u6536\u7EBF\uFF0C\u677E\u5F00\u7F13\u4E00\u7F13\uFF1B\u522B\u8BA9\u5F20\u529B\u8FDB\u5165\u7EA2\u533A\u3002",!0):this.phase==="reel"?(this.held=!0,!0):!1}release(){this.held=!1}escape(e){this.phase="escaped",this.held=!1,this.message=e,this.catch=null}update(e){if(["casting","waiting","bite","reel"].includes(this.phase)){if(this.elapsed+=e,this.phase==="casting"&&this.elapsed>=.85)this.phase="waiting",this.elapsed=0,this.message="\u6D6E\u6F02\u8F7B\u8F7B\u6643\u52A8\uFF0C\u7B49\u9C7C\u54AC\u94A9\u2026\u2026";else if(this.phase==="waiting"&&this.elapsed>=this.wait)this.phase="bite",this.elapsed=0,this.message="\u54AC\u94A9\u4E86\uFF01\u73B0\u5728\u63D0\u7AFF\uFF01";else if(this.phase==="bite"&&this.elapsed>3.5)this.escape("\u63D0\u7AFF\u665A\u4E86\u4E00\u70B9\uFF0C\u9C7C\u6E38\u8D70\u4E86\u3002\u518D\u629B\u4E00\u6B21\u5427\u3002");else if(this.phase==="reel"){let t=this.fish.difficulty,n=.06+t*.075+Math.sin(this.elapsed*2.4+t*6)*.04;if(this.tension=yt.clamp(this.tension+e*(this.held?.22+n:-.4+n),0,1),this.progress=yt.clamp(this.progress+e*(this.held&&this.tension>.12&&this.tension<.92?.17-t*.038:-.012),0,1),this.danger=this.tension>.93?this.danger+e:Math.max(0,this.danger-e*2),this.slack=this.tension<.04?this.slack+e:0,this.danger>1.25)this.escape("\u9C7C\u7EBF\u7EF7\u5F97\u592A\u7D27\u4E86\uFF0C\u9C7C\u6323\u8131\u4E86\u3002\u4E0B\u6B21\u8BB0\u5F97\u677E\u5F00\u4E00\u4E0B\u3002");else if(this.slack>3.5)this.escape("\u9C7C\u7EBF\u677E\u5F97\u592A\u4E45\uFF0C\u9C7C\u8131\u94A9\u4E86\u3002");else if(this.elapsed>60)this.escape("\u8FD9\u6761\u9C7C\u5F88\u6709\u8010\u5FC3\uFF0C\u5148\u6B47\u4E00\u4F1A\u513F\u518D\u6765\u5427\u3002");else if(this.progress>=1){let r=Math.round(this.fish.size[0]+this.rng()*(this.fish.size[1]-this.fish.size[0]));this.catch={fish:this.fish,size:r,value:Math.round(this.fish.price*(.8+r/this.fish.size[1]*.5))};let s=this.collection.get(this.fish.id)||{count:0,best:0};this.collection.set(this.fish.id,{count:s.count+1,best:Math.max(s.best,r)}),this.phase="caught",this.held=!1,this.message=`\u9493\u5230\u4E86${this.fish.name}\uFF01${r} \u5398\u7C73 \xB7 ${this.fish.rarity}`}}}}settle(e=!1){if(!this.catch)return 0;let t=e?this.catch.value:0;return this.catch=null,this.phase="idle",this.message=e?`\u9C7C\u83B7\u6362\u5230\u4E86 ${t} \u91D1\u5E01\u3002`:"\u9C7C\u513F\u56DE\u5230\u6D77\u91CC\uFF0C\u9C7C\u83B7\u624B\u518C\u5DF2\u7ECF\u8BB0\u4E0B\u4E86\u8FD9\u6B21\u76F8\u9047\u3002",t}};function ug(i,e){let t=Ae(i),n=e.shape,r=["slim","ribbon","tuna"].includes(n),s=n==="ribbon"?1.1:n==="puffer"?.36:.65,a=n==="flat"?.075:r?.17:n==="puffer"?.33:.31,o=n==="flat"?.39:n==="puffer"?.29:.2;ye(t,0,0,0,s,a,o,e.color),ye(t,-s*.33,-a*.32,o*.28,s*.66,a*.52,o*.74,"#dce0c9");let l=Ye(t,new yn(a*1.25,.4,3),et(e.color),s+.12,0,0);l.rotation.z=-Math.PI/2,l.scale.z=.22;let c=Ye(t,new yn(.18,.26,3),et("#a9b8ac"),.1,a*.9,0);c.scale.z=.17,c.rotation.z=-.4;for(let h of[-1,1]){ye(t,-s*.61,a*.27,h*o*.77,.047,.051,.029,"#e3dfc6"),ye(t,-s*.63,a*.27,h*(o*.77+.025),.024,.031,.01,"#384c51");let u=Ye(t,new yn(n==="flying"?.5:.16,.35,3),et("#b7c4b5"),0,-a*.15,h*o);u.rotation.x=h*Math.PI/2,u.rotation.z=-.5,u.scale.z=.18}if(["spotted","puffer"].includes(n))for(let h=0;h<18;h++){let u=(h%6-2.5)*s*.23,p=(Math.floor(h/6)-1)*a*.4;for(let d of[-1,1])ye(t,u,p,d*o*.94,.024,.025,.01,"#78857a")}else for(let h=0;h<6;h++){let u=-s*.25+h*s*.16;xt(t,[u,a*.7,o*.55],[u+.055,-a*.15,o*.91],.007,"#819c9e")}return Ct(t),t}function Lp(i){let e=Ae(i);e.visible=!1;let t=Ae(e,0,.75,.3);xt(t,[0,0,0],[0,1.28,2.4],.019,"#987c55"),ue(t,0,-.11,0,.029,.031,.45,"#706350",10);let n=Ae(e);ye(n,0,0,0,.063,.12,.063,"#cc876e"),ye(n,0,.075,0,.064,.046,.063,"#eadac0");let r=new Ie;r.setAttribute("position",new Xe(new Float32Array(9),3));let s=new Os(r,new or({color:"#e7e5cc",transparent:!0,opacity:.85}));e.add(s),s.frustumCulled=!1;let a=[];for(let l=0;l<3;l++){let c=new Te(new Kn(.17,.184,40),new Ft({color:"#e1efdf",transparent:!0,opacity:.4,side:At,depthWrite:!1}));c.rotation.x=-Math.PI/2,e.add(c),a.push(c)}let o=un(e,{name:"\u65C5\u884C\u4E2D\u7684\u4F60",female:!0,color:"#bd9578",hair:"#6d5348"});return o.position.set(-.13,0,0),o.rotation.y=0,ki(o),{root:e,pole:t,float:n,line:s,rings:a,player:o,specimen:null,specimenId:null}}function Dp(i,e,t){if(!i.root.visible)return;_i(i.player,t,!1,.25),ki(i.player,t);let n=Lo[e.spot];i.root.position.set(n.x,.12,n.z),i.root.rotation.y=n.angle;let r=["casting","waiting","bite","reel"].includes(e.phase);i.float.visible=r,i.line.visible=r,i.rings.forEach(c=>c.visible=r),i.pole.rotation.x=e.phase==="reel"?-.13+Math.sin(t*9)*.04:e.phase==="casting"?Math.sin(e.elapsed/.85*Math.PI)*.5:0;let s=e.phase==="casting"?1.2+e.elapsed/.85*2.1:e.phase==="reel"?3.3-e.progress*1.5:3.3,a=e.phase==="bite"?-1.22:-1.12+Math.sin(t*2.4)*.04;i.float.position.set(.05+Math.sin(t*3)*.027,a,s),i.pole.updateMatrix();let o=new T(0,1.28,2.4).applyMatrix4(i.pole.matrix);i.line.geometry.attributes.position.array.set([...o.toArray(),.025,.4,2.95,...i.float.position.toArray()]),i.line.geometry.attributes.position.needsUpdate=!0,i.rings.forEach((c,h)=>{let u=(t*.6+h*.33)%1;c.position.set(.05,-1.18,s),c.scale.setScalar(1+u*3),c.material.opacity=(1-u)*.35}),e.catch?(i.specimenId!==e.catch.fish.id&&(i.specimen&&(i.specimen.removeFromParent(),ts(i.specimen)),i.specimen=ug(i.root,e.catch.fish),i.specimenId=e.catch.fish.id),i.specimen.visible=!0,i.specimen.position.set(0,1.7+Math.sin(t*2)*.06,1),i.specimen.rotation.y=t*.55,i.specimen.rotation.z=Math.sin(t*3)*.1):i.specimen&&(i.specimen.visible=!1)}function Up({scene:i,outdoor:e,camera:t,state:n,goTo:r,captureView:s,notify:a,getClimate:o,getTime:l,setIndoor:c,clearSelection:h}){let u=M=>document.getElementById(M),p=pp(e),d=new Io,f=Lp(e),g=null,v=null,m=!1,_=null,x="",y=-1,w=new Map,S=[];for(let M of ss){let I=document.createElement("button");I.type="button",I.className="place-marker",I.textContent=M.name,I.setAttribute("aria-label",`\u524D\u5F80${M.name}`),I.onclick=()=>V(M),u("placeMarkers").appendChild(I),S.push({el:I,p:M})}let P=u("directoryList");for(let M of ss){let I=document.createElement("button");I.type="button",I.className="destination",I.innerHTML=`<span><small>${M.category}</small><strong>${M.name}</strong><em>${M.info}</em></span><b>\u524D\u5F80</b>`,I.onclick=()=>{u("directory").close(),V(M)},P.appendChild(I)}u("directoryOpen").onclick=()=>{u("directory").showModal()},u("directoryClose").onclick=()=>u("directory").close(),u("placeClose").onclick=()=>{u("placePanel").hidden=!0,v=null},u("placeEnter").onclick=()=>{v&&(v.kind==="fishing"?j(v.spot):H(v))},u("roomExit").onclick=K,u("fishClose").onclick=J,u("fishBookOpen").onclick=ee,u("fishBookClose").onclick=()=>u("fishBook").close(),u("fishBookButton").onclick=ee,u("fishSell").onclick=()=>{n.coins+=d.settle(!0),ne()},u("fishRelease").onclick=()=>{d.settle(!1),ne()};let z=u("fishAction");function F(){n.paused||(d.phase==="bite"||d.phase==="reel"?d.press():d.cast(o()),ne())}z.addEventListener("pointerdown",M=>{M.preventDefault(),z.setPointerCapture?.(M.pointerId),F()});for(let M of["pointerup","pointercancel","lostpointercapture"])z.addEventListener(M,()=>d.release());z.onclick=M=>{M.detail===0&&(F(),d.release())},addEventListener("blur",()=>d.release()),addEventListener("keydown",M=>{!m||u("fishBook").open||u("directory").open||(M.code==="Space"&&(M.preventDefault(),M.repeat||F()),M.key==="Escape"&&J())}),addEventListener("keyup",M=>{M.code==="Space"&&d.release()});function N(){h(),u("placePanel").hidden=!0,v=null}function V(M){g&&K(),m&&J(),N(),v=M,r([M.x,1,M.z],M.kind==="road"?1.5:M.kind==="fishing"?1.55:1.6,.33,.67),u("placeCategory").textContent=M.category,u("placeName").textContent=M.name,u("placeInfo").textContent=M.info,u("placeEnter").hidden=M.kind==="road",u("placeEnter").textContent=M.kind==="fishing"?"\u62FF\u8D77\u9493\u7AFF":"\u8FDB\u5165\u5BA4\u5185",u("placePanel").hidden=!1}function H(M){g&&K(),J(),_=s(),N();let I=[M.id,M.kind,M.name].join("|");for(g=w.get(I),g||(g=Ep(i,M)),w.delete(I),w.set(I,g);w.size>2;){let X=w.keys().next().value;w.get(X).dispose(),w.delete(X)}g.root.visible=!0,c(!0),r([0,.35,0],innerWidth<=760?1.52:1.74,.32,.86),document.body.classList.add("interior"),u("roomPanel").hidden=!1,u("roomName").textContent=M.name,u("roomKind").textContent=M.category||"\u5C0F\u9547\u4F4F\u5B85",u("roomHint").textContent="\u70B9\u5730\u677F\u8D70\u52A8 \xB7 \u70B9\u5BB6\u5177\u67E5\u770B\u6216\u4F7F\u7528",u("roomInfo").textContent="\u5BB6\u5177\u548C\u751F\u6D3B\u7528\u54C1\u90FD\u53EF\u4EE5\u8D70\u8FD1\u770B\u770B\u3002",u("placeMarkers").hidden=!0}function K(){g&&(g.root.visible=!1,g.path=[],g.pending=null,g=null,c(!1),document.body.classList.remove("interior"),u("roomPanel").hidden=!0,u("placeMarkers").hidden=!1,_&&r(_.p,_.zoom,_.angle,_.elevation),_=null)}function j(M="pier"){g&&K(),N(),d.open(M),m=!0,x="",f.root.visible=!0,document.body.classList.add("fishing"),u("fishingPanel").hidden=!1;let I=Lo[M];r([I.x,.3,I.z+1.3],innerWidth<=760?1.6:1.95,.45,.54),u("fishSpot").textContent=I.name,ne()}function J(){m&&(d.catch&&d.settle(!1),d.cancel(),m=!1,f.root.visible=!1,document.body.classList.remove("fishing"),u("fishingPanel").hidden=!0)}function ee(){d.release(),te(),u("fishBook").showModal()}function te(){u("fishBookCount").textContent=`\u5DF2\u9047\u89C1 ${d.collection.size} / ${Ks.length} \u79CD`,u("fishBookList").innerHTML="";for(let M of Ks){let I=d.collection.get(M.id),X=document.createElement("article");X.className="fish-entry"+(I?" discovered":"");let R=[M.spots.map(D=>Lo[D].name).join(" \xB7 "),M.night?"\u591C\u95F4\u66F4\u5BB9\u6613\u9047\u5230":M.season?{spring:"\u6625",summer:"\u590F",autumn:"\u79CB",winter:"\u51AC"}[M.season]+"\u5B63\u66F4\u5BB9\u6613\u9047\u5230":M.weather==="rain"?"\u96E8\u5929\u66F4\u5BB9\u6613\u9047\u5230":"\u5168\u5929\u53EF\u9047\u5230"].join(" / ");X.innerHTML=`<div><strong>${M.name}</strong><small>${M.rarity}</small></div><p>${I?`${I.count} \u6B21 \xB7 \u6700\u5927 ${I.best} \u5398\u7C73`:"\u5C1A\u672A\u9493\u5230"}</p><small>${R}</small>`,u("fishBookList").appendChild(X)}}function ne(){let M=d.phase,I=["casting","waiting"].includes(M);u("fishMessage").textContent=n.paused?"\u6E38\u620F\u5DF2\u6682\u505C\uFF0C\u7EE7\u7EED\u540E\u518D\u9493\u9C7C\u3002":d.message,u("fishAction").textContent=M==="bite"?"\u54AC\u94A9\u4E86 \xB7 \u7ACB\u523B\u63D0\u7AFF":M==="reel"?d.held?"\u6B63\u5728\u6536\u7EBF \xB7 \u677E\u5F00\u7F13\u4E00\u7F13":"\u6309\u4F4F\u6536\u7EBF":I?"\u7B49\u5F85\u54AC\u94A9\u2026":M==="escaped"?"\u518D\u629B\u4E00\u6B21":"\u629B\u7AFF",u("fishAction").disabled=n.paused||I||M==="caught",u("fishAction").classList.toggle("bite",M==="bite"),u("fishMeters").hidden=M!=="reel",u("fishActions").hidden=M==="caught",u("fishResult").hidden=M!=="caught",u("tensionFill").style.width=(d.tension||0)*100+"%",u("tensionFill").style.background=(d.tension||0)>.85?"#c57b65":"#668f88",u("catchFill").style.width=(d.progress||0)*100+"%",u("tensionValue").textContent=Math.round((d.tension||0)*100)+"%",u("catchValue").textContent=Math.round((d.progress||0)*100)+"%",u("fishCaught").textContent=d.catch?`${d.catch.fish.name} \xB7 ${d.catch.size} \u5398\u7C73`:"",u("fishSell").textContent=d.catch?`\u552E\u51FA \xB7 +${d.catch.value} \u91D1\u5E01`:"\u552E\u51FA",u("fishCollection").textContent=`\u9C7C\u83B7\u624B\u518C ${d.collection.size} / ${Ks.length}`}function U(M){if(!g)return;let I=M.userData.furniture;Po(g,M.position.x,M.position.z),g.pending=M,u("roomInfo").textContent=`\u8D70\u5411${I.label}\u2026\u2026`}function q(M){if(!g)return;let I=M.intersectObjects([g.floor,...g.items,...g.npcs],!0);for(let X of I){let R=X.object;for(;R&&!R.userData.floor&&!R.userData.furniture&&!R.userData.resident;)R=R.parent;if(R){if(R.userData.floor)Po(g,X.point.x,X.point.z),g.pending=null,u("roomInfo").textContent="\u6CBF\u7740\u7A7A\u5730\u6162\u6162\u8D70\u3002";else if(R.userData.resident){R.rotation.y=Math.atan2(t.position.x-R.position.x,t.position.z-R.position.z);let D=bh(R,l());u("roomInfo").textContent=D}else U(R);break}}}function E(M){if(M.userData.fishingSpot)j(M.userData.fishingSpot),a("\u53EF\u4EE5\u5F00\u59CB\u629B\u7AFF\u4E86\u3002");else{let I=M.getWorldPosition(new T);M.rotation.y=.33,r([I.x,.8,I.z],Math.max(2.35,s().zoom),.33,.68),a(bh(M,l()))}}p.npcs.slice(0,3).forEach((M,I)=>M.userData.fishingSpot=["pier","beach","rocks"][I]);function L(M,I,X,R,D,b){if(g?p.lastTime=I:fp(p,I,X,R,D,b),Ip(g,I,n.paused?0:M,R),g&&g.pending&&g.path.length===0){let B=g.pending.userData.furniture,O=B.action?B.action():B.text;u("roomInfo").textContent=`${B.label}\uFF1A${O}`,g.pending=null}m&&(!n.paused&&!u("fishBook").open&&!u("directory").open&&d.update(M),Dp(f,d,I),d.phase!==x&&(x=d.phase,ne())),(I-y>.07||n.paused)&&(y=I,m&&ne(),Y())}function Y(){if(g)return;let M=[],I=innerWidth,X=innerHeight;for(let{p:R,el:D}of S){let b=new T(R.x,["hall","church"].includes(R.kind)?5:3.8,R.z).project(t),B=(b.x+1)*I/2,O=(1-b.y)*X/2,re=!m&&b.z>=-1&&b.z<=1&&B>55&&B<I-55&&O>80&&O<X-135&&!M.some(W=>Math.abs(W.x-B)<128&&Math.abs(W.y-O)<37);D.hidden=!re,re&&(D.style.transform=`translate(${B}px,${O}px) translate(-50%,-100%)`,M.push({x:B,y:O}))}}function ie(M,I){es(p.root,M,I)}function C(M){if(!g)return!1;if(M.key==="Escape")return K(),!0;let I={w:[0,-.7],s:[0,.7],a:[-.7,0],d:[.7,0],ArrowUp:[0,-.7],ArrowDown:[0,.7],ArrowLeft:[-.7,0],ArrowRight:[.7,0]}[M.key];return I?(M.preventDefault(),Po(g,g.player.position.x+I[0],g.player.position.z+I[1]),g.pending=null,!0):!1}return{town:p,game:d,rig:f,visit:V,enter:H,exit:K,startFishing:j,stopFishing:J,handleRoomRay:q,handleResident:E,update:L,climate:ie,key:C,updateMarkers:Y,activateFurniture:U,get room(){return g},get fishingOpen(){return m},get pickables(){return[...p.buildings,...p.npcs]}}}var me=i=>document.getElementById(i),wn=me("world"),Ke=new To,Tn=()=>innerWidth<=760,$s={spring:{name:"\u6625",caption:"SPRING \xB7 \u6625\u65E5\u6765\u4FE1",grass:"#9fbd79",leaf:"#97b775",leaf2:"#e3b6bc",flower:"#f2c1c4",water:"#83c8d2",sky:"#c7e2e5"},summer:{name:"\u590F",caption:"SUMMER \xB7 \u98CE\u8FC7\u9752\u91CE",grass:"#87ae67",leaf:"#6e9a64",leaf2:"#a9bc76",flower:"#eac881",water:"#60bacc",sky:"#acd4e0"},autumn:{name:"\u79CB",caption:"AUTUMN \xB7 \u91D1\u8272\u8FDC\u884C",grass:"#b9b17b",leaf:"#c5a066",leaf2:"#c58663",flower:"#e3b27f",water:"#84b9c0",sky:"#d8dbcf"},winter:{name:"\u51AC",caption:"WINTER \xB7 \u96EA\u843D\u65E0\u58F0",grass:"#e0e8df",leaf:"#9aaa9b",leaf2:"#b5c0b4",flower:"#ccd7da",water:"#b4d5dd",sky:"#d2e0e8"}},dg={sun:"\u6674\u5929",cloud:"\u591A\u4E91",wind:"\u8D77\u98CE",rain:"\u4E0B\u96E8",snow:"\u98D8\u96EA"},bt="spring",Ze="wind",zo="wind",Zt=16,Ho=!0,kp=!1,as=0,tt=0,Rh=performance.now(),Np=0,Do=.72,xi=.72,Js=.69,ni=.69,os=Tn()?.44:.58,_r=os,Op,Kt,yi=!0;function Gp(){return Math.min(yi?Tn()?1.75:2:Tn()?1.25:1.5,devicePixelRatio||1)}try{Kt=new no({canvas:wn,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){throw me("loading").hidden=!0,me("renderError").hidden=!1,i}Kt.setPixelRatio(Gp());Kt.shadowMap.enabled=!0;Kt.shadowMap.type=th;Kt.outputColorSpace=Jt;Kt.toneMapping=nh;Kt.toneMappingExposure=1.08;function pg(){let i=document.getElementById("islandMusic"),e=!1,t,n=()=>{e||(e=!0,clearTimeout(t),i&&(i.removeEventListener("canplay",n),i.removeEventListener("error",n)),Promise.all([qd(Kt),Gd(Kt)]).catch(r=>console.warn("Some texture detail is unavailable.",r)))};if(!i||i.readyState>=3){n();return}i.addEventListener("canplay",n,{once:!0}),i.addEventListener("error",n,{once:!0}),t=setTimeout(n,1500)}var zt=new ro;zt.background=new pe("#c7e2e5");zt.fog=new io("#c7e2e5",65,145);var Vp=zt.fog,kt=new Qe;zt.add(kt);var an=new qr(-12,12,10,-10,.1,240),ti=new T(0,.7,0),ko=ti.clone();zt.add(an);var Wo=up(an),Uo=new Jr("#e6f1f4","#b2ad98",2.2);zt.add(Uo);var st=new $r("#fff1cf",3.2);st.position.set(-12,19,9);st.castShadow=!0;st.shadow.mapSize.set(Tn()?2048:4096,Tn()?2048:4096);Object.assign(st.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:125});st.shadow.bias=-12e-5;st.shadow.normalBias=.018;st.shadow.radius=3;st.shadow.camera.updateProjectionMatrix();zt.add(st);zt.add(st.target);var Dh=new $r("#cadfea",.45);Dh.position.set(8,8,-12);zt.add(Dh);var Go=new $r("#a6bfdc",0);Go.position.set(-9,15,7);zt.add(Go);var ea=tp(dr);kt.add(ea);var Vo=cp(kt),No=yp(kt,ea,dr),ls=new Map,Oo=[],Vi=new Te(new Kn(1.32,1.37,56),new Ft({color:"#ffe39d",transparent:!0,opacity:.9,side:At,depthWrite:!1}));Vi.rotation.x=-Math.PI/2;Vi.position.y=.15;Vi.visible=!1;kt.add(Vi);var mr={uTime:{value:0},uLight:{value:new T(-.4,.8,.3)},uColor:{value:new pe("#73b9c8")},uSun:{value:new pe("#fff0ce")},uStrength:{value:1},uNight:{value:0},uResolution:{value:new ce(1,1)}},Hp=new pt({uniforms:mr,transparent:!0,depthWrite:!1,vertexShader:`
 varying vec3 vWorld; uniform float uTime;
 void main(){ vec3 p=position; p.y+=sin(p.x*.55+uTime*.55)*.045+cos(p.z*.43+uTime*.4)*.03; vec4 world=modelMatrix*vec4(p,1.);vWorld=world.xyz;gl_Position=projectionMatrix*viewMatrix*world; }
`,fragmentShader:`
 varying vec3 vWorld; uniform float uTime; uniform vec3 uColor; uniform vec3 uLight; uniform vec3 uSun; uniform float uStrength; uniform float uNight; uniform vec2 uResolution;
 void main(){ vec3 n=normalize(vec3(-cos(vWorld.x*.55+uTime*.55)*.025,1.,sin(vWorld.z*.43+uTime*.4)*.013)); vec3 v=normalize(cameraPosition-vWorld);float fresnel=pow(1.-max(dot(n,v),0.),3.); float sparkle=pow(max(dot(n,normalize(uLight+v)),0.),100.); float ripples=sin(vWorld.x*3.2+vWorld.z*2.7+uTime*.65)*sin(vWorld.z*2.4-uTime*.4);vec3 col=uColor*(.9+ripples*.023)+vec3(.13,.17,.15)*fresnel*(1.-uNight*.8)+uSun*sparkle*.32*uStrength;float skyFade=1.-smoothstep(.55,.76,gl_FragCoord.y/uResolution.y);gl_FragColor=vec4(col,skyFade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }
`}),Wp=new ft(190,190,65,65);Wp.rotateX(-Math.PI/2);var Xp=new Te(Wp,Hp);Xp.position.y=-1.12;kt.add(Xp);var Ph=[];for(let i=0;i<3;i++){let e=new Te(new Kn(18.9+i*.4,18.95+i*.4,96),new Ft({color:"#e5f2db",transparent:!0,opacity:.21-i*.04,side:At,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.scale.y=.83,e.position.y=-1.075+i*.004,kt.add(e),Ph.push(e)}var Uh=Tn()?260:600,fr=new Float32Array(Uh*6),jp=[],Ah=89437;function Gi(){return Ah=1664525*Ah+1013904223>>>0,Ah/4294967296}for(let i=0;i<Uh;i++)jp.push({x:(Gi()-.5)*21,y:Gi()*15,z:(Gi()-.5)*18,s:.8+Gi()*.5});var Nh=new Ie;Nh.setAttribute("position",new Xe(fr,3));var gr=new lo(Nh,new or({color:"#c2dce5",transparent:!0,opacity:.6,depthWrite:!1}));gr.frustumCulled=!1;gr.visible=!1;kt.add(gr);var Oh=Tn()?250:500,Fo=new Float32Array(Oh*3),Ih=[];for(let i=0;i<Oh;i++)Ih.push({x:(Gi()-.5)*21,y:Gi()*15,z:(Gi()-.5)*18,s:.4+Gi()*.7});var Fh=new Ie;Fh.setAttribute("position",new Xe(Fo,3));var qp=new pt({transparent:!0,depthWrite:!1,uniforms:{pixelRatio:{value:Kt.getPixelRatio()}},vertexShader:"uniform float pixelRatio;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=4.3*pixelRatio;}",fragmentShader:"void main(){float d=length(gl_PointCoord-.5);float a=1.-smoothstep(.16,.5,d);gl_FragColor=vec4(1.,.997,.96,a*.88);}"}),vr=new gn(Fh,qp);vr.frustumCulled=!1;vr.visible=!1;kt.add(vr);var Yp=60,Bo=new Float32Array(Yp*3),Bh=new Ie;Bh.setAttribute("position",new Xe(Bo,3));var Zp=ur("#f0c9d0",3,.72),cs=new gn(Bh,Zp);cs.frustumCulled=!1;kt.add(cs);function zh(i,e=!1){if(ls.has(i)){let s=ls.get(i);kt.remove(s),ts(s)}let t=ep(i.type,i.level);lp(t,i.type),vp(t,i.type,i.level);let[n,r]=dr[i.slot];t.position.set(n,.085,r),t.userData.building=i,kt.add(t),ls.set(i,t),ea.userData.plots[i.slot].visible=!1,es(t,bt,Ze),e&&(t.scale.setScalar(.84),t.userData.growing=!0,t.userData.growStart=tt,fg(n,r))}function fg(i,e){let t=new Float32Array(180),n=new Ie;n.setAttribute("position",new Xe(t,3));let r=new gn(n,ur("#ffe5a3",3,1,!0));r.position.set(i,.6,e),kt.add(r),Oo.push({m:r,start:tt})}for(let i of Ke.buildings)zh(i);var Yt=Up({scene:zt,outdoor:kt,camera:an,state:Ke,goTo:(i,e,t,n)=>{ko.set(...i),_r=e,xi=t,ni=n},captureView:()=>({p:ko.toArray(),zoom:_r,angle:xi,elevation:ni}),notify:ds,getClimate:()=>({season:bt,weather:Ze,hour:Zt}),getTime:()=>tt,clearSelection:()=>ii(null),setIndoor:i=>{kt.visible=!i,Wo.root.visible=!i,zt.fog=i?null:Vp,Vi.visible=!1}}),pr=new pe,Fp=new pe,Bp=new pe;function mg(i){bt=i,as=0,Qs(),ds(`${$s[i].name}\u5929\u6765\u4E86`)}function Kp(){return{spring:["sun","wind","rain"],summer:["sun","cloud","rain"],autumn:["sun","wind","cloud"],winter:["snow","cloud","sun"]}[bt][Math.floor(as/20)%3]}function Qs(){Ze=zo==="auto"?Kp():zo;let i=$s[bt],e=bt==="winter"||Ze==="snow";fe.grass.color.set(e?"#e1e8df":i.grass),fe.leaves.color.set(i.leaf),fe.leaves2.color.set(i.leaf2),fe.leafDetail.color.set(i.leaf),fe.leafDetail2.color.set(i.leaf2),fe.flower.color.set(i.flower),fe.water.color.set(e?"#bed9df":i.water),fe.water.roughness=e?.55:Ze==="rain"?.48:.26,Yt.climate(bt,Ze),Yd(Ze),es(ea,bt,Ze);for(let t of ls.values())es(t,bt,Ze);gr.visible=Ze==="rain",vr.visible=Ze==="snow",cs.visible=(bt==="spring"||bt==="autumn")&&Ze!=="rain"&&Ze!=="snow",Zp.color.set(bt==="spring"?"#f1c4cf":"#caa15b"),me("seasonCaption").textContent=i.caption,me("climateTitle").textContent=`${i.name} \xB7 ${dg[Ze]}`,document.querySelectorAll("[data-season]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.season===bt)))}function Jp(i){let e=Ze==="rain"?.83:Ze==="snow"?.65:Ze==="cloud"?.55:.08,t=rs(Zt),n=1-t,r=Math.max(0,Math.sin((Zt-6)/24*Math.PI*2)),s=(1-yt.smoothstep(r,.05,.7))*t,a=(Zt-6)/24*Math.PI*2,o=ti.x,l=ti.z;st.position.set(o+Math.cos(a)*37,5+r*37,l+Math.sin(a)*15-19),st.target.position.set(o,0,l);let c=yt.clamp(18/os,6,25);return Math.abs(st.shadow.camera.right-c)>.03&&(Object.assign(st.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),st.shadow.camera.updateProjectionMatrix()),Bp.set("#fff2da").lerp(pr.set("#efac79"),s*.72),st.color.copy(Bp),st.intensity=yt.lerp(st.intensity,(.45+r*2.6)*(1-e*.84)*t,Math.min(1,i*3)),Uo.intensity=.4+t*(1.18-e*.08),Uo.color.set("#e6f0f2").lerp(pr.set("#9cbbdf"),n),Uo.groundColor.set("#b3b793").lerp(pr.set("#667789"),n),Dh.intensity=.12+t*.26,Go.intensity=n*(.63-e*.26),Fp.set($s[bt].sky).lerp(pr.set("#b2c4d0"),e*.7).lerp(pr.set("#d5bfb5"),s*.58).lerp(pr.set("#172c45"),n),zt.background.lerp(Fp,Math.min(1,i*3)),Vp.color.copy(zt.background),Yt.room&&zt.background.set(n>.5?"#334758":"#adc2c4"),Hp.uniforms.uColor.value.lerp(pr.set($s[bt].water).lerp(new pe("#849bab"),e*.55).lerp(new pe("#b4ac9c"),s*.27).lerp(new pe("#233e5a"),n),Math.min(1,i*3)),mr.uLight.value.copy(n>.5?Go.position:st.position.clone().sub(st.target.position)).normalize(),mr.uStrength.value=(1-e)*(.3+t*.7),mr.uSun.value.set(n>.5?"#b3c8e0":"#fff1ce"),mr.uNight.value=n,fe.glass.emissiveIntensity=.1+n*2+e*.12,document.body.classList.toggle("night",n>.55),n}function gg(i){let e=Ze==="wind"?1:Ze==="rain"?.58:.15;Vd(tt,e);let t=!Yt.room;if(gr.visible=t&&Ze==="rain",vr.visible=t&&Ze==="snow",cs.visible=t&&(bt==="spring"||bt==="autumn")&&Ze!=="rain"&&Ze!=="snow",!t)return e;for(let n of[gr,vr,cs])n.position.set(ti.x,0,ti.z);if(gr.visible){for(let n=0;n<Uh;n++){let r=jp[n],s=((r.y-tt*9*r.s)%15+15)%15,a=r.x+s*.12,o=n*6;fr[o]=a,fr[o+1]=s,fr[o+2]=r.z,fr[o+3]=a-.11,fr[o+4]=s-.55,fr[o+5]=r.z}Nh.attributes.position.needsUpdate=!0}if(vr.visible){for(let n=0;n<Oh;n++){let r=Ih[n],s=n*3;Fo[s]=r.x+Math.sin(tt*.5+r.z)*.65,Fo[s+1]=((r.y-tt*.85*r.s)%15+15)%15,Fo[s+2]=r.z+Math.cos(tt*.3+r.x)*.42}Fh.attributes.position.needsUpdate=!0}if(cs.visible){for(let n=0;n<Yp;n++){let r=Ih[n],s=n*3;Bo[s]=((r.x+tt*(.25+e*1.1)+10)%20+20)%20-10,Bo[s+1]=.4+((r.y-tt*.16)%5+5)%5,Bo[s+2]=r.z*.6+Math.sin(tt+n)*.15}Bh.attributes.position.needsUpdate=!0}for(let n=0;n<Ph.length;n++)Ph[n].scale.set(1+Math.sin(tt*.4+n)*.01,.83*(1+Math.sin(tt*.4+n)*.01),1);return e}function $p(){let i=innerWidth/innerHeight,e=(Tn()?18.3:Math.max(22,i*16))/os;an.left=-e/2,an.right=e/2,an.top=e/i/2,an.bottom=-e/i/2,an.updateProjectionMatrix(),Wo.resize(e,e/i)}function kh(){let i=Kt.getPixelRatio();(wn.width!==Math.floor(innerWidth*i)||wn.height!==Math.floor(innerHeight*i))&&Kt.setSize(innerWidth,innerHeight,!1),$p(),mr.uResolution.value.set(innerWidth*i,innerHeight*i),qp.uniforms.pixelRatio.value=i}function Qp(i){let e=Math.min(1,i*8);ti.lerp(ko,e),Do=yt.lerp(Do,xi,e),Js=yt.lerp(Js,ni,e),Math.abs(os-_r)>.001&&(os=yt.lerp(os,_r,e),$p()),an.position.set(ti.x+Math.sin(Do)*45*Math.cos(Js),ti.y+45*Math.sin(Js),ti.z+Math.cos(Do)*45*Math.cos(Js)),an.lookAt(ti),an.updateMatrixWorld()}function ds(i){me("toast").textContent=i,me("toast").classList.add("show"),clearTimeout(Op),Op=setTimeout(()=>me("toast").classList.remove("show"),2600)}function ii(i){if(i&&(me("placePanel").hidden=!0),Ke.selected=i,me("detail").hidden=!i,i){let[e,t]=dr[i.slot];Vi.position.set(e,.16,t),Vi.visible=!0}else Vi.visible=!1;yr()}function yr(){me("coins").textContent=Math.floor(Ke.coins).toLocaleString("zh-CN"),me("income").textContent=Ke.paused?"\u5DF2\u6682\u505C":`+${Ke.income} / \u79D2`,me("pause").textContent=Ke.paused?"\u7EE7\u7EED":"\u6682\u505C",me("gather").disabled=Ke.paused,document.querySelectorAll("[data-build]").forEach(a=>a.disabled=!Ke.canBuild(a.dataset.build));let i=Ke.buildings.some(a=>a.type==="lighthouse"),e=Ke.buildings.length;me("questTitle").textContent="\u5728\u5C0F\u9547\u8D70\u4E00\u8D70",me("questText").textContent="\u8FDB\u5C4B\u5750\u5750\uFF0C\u6216\u5230\u6D77\u8FB9\u9493\u4E00\u6761\u9C7C\u3002",me("progress").style.width=(i?100:Math.min(75,e*25))+"%",me("lightButton").querySelector("small").textContent=i?"\u5DF2\u70B9\u4EAE":e>=3?"500 \xB7 +30/\u79D2":"\u5EFA 3 \u5EA7\u540E\u89E3\u9501";let t=Ke.selected;if(t){me("enterBuilding").hidden=t.type==="garden";let a=vi[t.type];me("buildingCategory").textContent=`${a.name} \xB7 \u7B2C ${t.level} \u9636 / \u5171 5 \u9636`,me("buildingName").textContent=a.titles[t.level-1],me("stars").textContent="\u2726".repeat(t.level)+"\u2727".repeat(5-t.level),me("buildingInfo").textContent=`\u6BCF\u79D2\u4EA7\u51FA ${a.income*t.level} \u91D1\u5E01\u3002`,me("appearance").textContent=t.level<5?`\u4E0B\u9636\uFF1A${a.details[t.level]}`:`\u5DF2\u5B8C\u6210\uFF1A${a.details[4]}`,me("upgrade").textContent=t.level<5?`\u5347\u7EA7 \xB7 ${Ke.upgradeCost(t)} \u91D1\u5E01`:"\u5DF2\u8FBE\u6700\u9AD8\u9636",me("upgrade").disabled=!Ke.canUpgrade(t)}let n=Math.floor(Zt*60)%1440,r=Math.floor(n/60),s=n%60;me("timeLabel").textContent=`${String(r).padStart(2,"0")}:${String(s).padStart(2,"0")}`,me("sunTime").value=String(Zt),me("dayButton").setAttribute("aria-pressed",String(rs(Zt)>.5)),me("nightButton").setAttribute("aria-pressed",String(rs(Zt)<=.5))}me("gather").onclick=()=>{Ke.paused||(Ke.gather(),ds("+12 \u91D1\u5E01"),yr())};document.querySelectorAll("[data-build]").forEach(i=>i.onclick=()=>{let e=Ke.build(i.dataset.build);e&&(zh(e,!0),ii(e),ds(`${vi[e.type].titles[0]}\u5EFA\u597D\u4E86`))});me("upgrade").onclick=()=>{let i=Ke.selected;Ke.upgrade(i)&&(zh(i,!0),ii(i),ds(`\u5347\u7EA7\u5B8C\u6210 \xB7 ${vi[i.type].titles[i.level-1]}`))};me("enterBuilding").onclick=()=>{let i=Ke.selected;!i||i.type==="garden"||Yt.enter({id:"built-"+i.slot,name:vi[i.type].titles[i.level-1],category:"\u6211\u7684\u5C0F\u5C9B\u5EFA\u7B51",kind:i.type==="house"?i.level>=4?"villa":"home":i.type})};me("buildToggle").onclick=()=>{let i=me("buildDock").hidden;me("buildDock").hidden=!i,me("buildToggle").setAttribute("aria-expanded",String(i)),document.body.classList.toggle("build-open",i)};me("close").onclick=()=>ii(null);me("pause").onclick=()=>{Ke.paused=!Ke.paused,yr()};me("left").onclick=()=>xi-=Math.PI/4;me("right").onclick=()=>xi+=Math.PI/4;function hs(i){_r=yt.clamp(_r+i,.36,4.2)}me("zoomIn").onclick=()=>hs(.15);me("zoomOut").onclick=()=>hs(-.15);me("qualityToggle").onclick=()=>{yi=!yi,Kt.setPixelRatio(Gp());let i=yi?Tn()?2048:4096:Tn()?1024:2048;st.shadow.mapSize.set(i,i),st.shadow.map&&(st.shadow.map.dispose(),st.shadow.map=null),st.shadow.needsUpdate=!0,No.grass.count=yi?No.grass.userData.fullCount:Math.floor(No.grass.userData.fullCount*.46),kt.traverse(e=>{e.userData.fineFoliage&&(e.userData.fullCount||(e.userData.fullCount=e.count),e.count=yi?e.userData.fullCount:Math.ceil(e.userData.fullCount*.55))}),me("qualityToggle").textContent=yi?"\u7CBE\u7EC6":"\u6D41\u7545",me("qualityToggle").setAttribute("aria-pressed",String(yi)),me("qualityToggle").setAttribute("aria-label","\u5207\u6362\u753B\u8D28\uFF0C\u5F53\u524D\u4E3A"+(yi?"\u7CBE\u7EC6":"\u6D41\u7545")),kh()};me("climateToggle").onclick=()=>{let i=!me("climateControls").hidden;me("climateControls").hidden=i,me("climateToggle").textContent=i?"\u5C55\u5F00":"\u6536\u8D77",me("climateToggle").setAttribute("aria-expanded",String(!i))};document.querySelectorAll("[data-season]").forEach(i=>i.onclick=()=>mg(i.dataset.season));me("weather").onchange=i=>{zo=i.target.value,Qs()};me("sunTime").oninput=i=>{Zt=Number(i.target.value),Ho=!1,me("dayCycle").checked=!1,yr()};me("seasonCycle").onchange=i=>{kp=i.target.checked,as=0};me("dayCycle").onchange=i=>Ho=i.target.checked;function Gh(i){Zt=i,Ho=!1,me("dayCycle").checked=!1,yr()}me("dayButton").onclick=()=>Gh(12);me("nightButton").onclick=()=>Gh(22);var vg={all:{p:[0,.7,0],zoom:Tn()?.44:.58,angle:.72,elevation:.75},civic:{p:[-1.5,1,-8.2],zoom:1.1,angle:.2,elevation:.66},market:{p:[-10.4,1,2.7],zoom:1.55,angle:.18,elevation:.66},shops:{p:[9,1,-4.9],zoom:1.24,angle:.28,elevation:.66},homes:{p:[-9,1,6],zoom:1.6,angle:.24,elevation:.67},coast:{p:[2,.5,15],zoom:1.5,angle:.4,elevation:.58},willow:{p:[4.2,1,-2.65],zoom:1.85,angle:.68,elevation:.6},stars:{p:[.3,.8,4.8],zoom:1.85,angle:-.24,elevation:.5}};document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>{Yt.exit(),Yt.stopFishing(),me("placePanel").hidden=!0;let e=vg[i.dataset.view];i.dataset.view==="stars"&&Gh(22),ko.set(...e.p),_r=e.zoom,xi=e.angle,ni=e.elevation,ii(null),document.querySelectorAll("[data-view]").forEach(t=>t.setAttribute("aria-pressed",String(t===i)))});var Ch=new _o,zp=new ce,Vn=new Map,Wt=null,Lh=0,us=!1;wn.addEventListener("wheel",i=>{i.preventDefault(),hs(i.deltaY<0?.07:-.07)},{passive:!1});wn.addEventListener("pointerdown",i=>{if(Vn.set(i.pointerId,{x:i.clientX,y:i.clientY}),wn.setPointerCapture(i.pointerId),Vn.size===1)us=!1,Wt={x:i.clientX,y:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1};else{us=!0,Wt&&(Wt.moved=!0);let e=[...Vn.values()];Lh=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}});wn.addEventListener("pointermove",i=>{if(!Vn.has(i.pointerId))return;if(Vn.set(i.pointerId,{x:i.clientX,y:i.clientY}),Vn.size===2){let n=[...Vn.values()],r=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y);hs((r-Lh)*.004),Lh=r;return}if(!Wt||us)return;let e=i.clientX-Wt.lastX,t=i.clientY-Wt.lastY;Math.hypot(i.clientX-Wt.x,i.clientY-Wt.y)>5&&(Wt.moved=!0),Wt.moved&&(xi-=e*.008,ni=yt.clamp(ni+t*.003,.35,1.03)),Wt.lastX=i.clientX,Wt.lastY=i.clientY});wn.addEventListener("pointerup",i=>{if(Wt&&!Wt.moved&&!us){let e=wn.getBoundingClientRect();if(zp.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Ch.setFromCamera(zp,an),Yt.room)Yt.handleRoomRay(Ch);else if(!Yt.fishingOpen){let t=Ch.intersectObjects([...Vo.actors,...ls.values(),...Yt.pickables],!0),n=null;for(let r of t){let s=r.object;for(;s&&!s.userData.building&&!s.userData.actor&&!s.userData.place&&!s.userData.resident;)s=s.parent;if(s){n=s;break}}n?.userData.place?Yt.visit(n.userData.place):n?.userData.resident&&!n.userData.actor?(ii(null),Yt.handleResident(n)):n?.userData.actor?(ii(null),ds(hp(n,tt))):ii(n?.userData.building||null)}}Vn.delete(i.pointerId),Vn.size===0&&(Wt=null,us=!1)});wn.addEventListener("pointercancel",i=>{Vn.delete(i.pointerId),Wt=null,us=Vn.size>0});wn.addEventListener("keydown",i=>{Yt.key(i)||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","-","Enter","Escape"].includes(i.key)&&i.preventDefault(),i.key==="ArrowLeft"&&(xi-=.16),i.key==="ArrowRight"&&(xi+=.16),i.key==="ArrowUp"&&(ni=Math.min(1.03,ni+.07)),i.key==="ArrowDown"&&(ni=Math.max(.35,ni-.07)),i.key==="+"&&hs(.1),i.key==="-"&&hs(-.1),i.key==="Escape"&&ii(null),i.key==="Enter"&&Ke.buildings.length&&ii(Ke.buildings[(Ke.buildings.indexOf(Ke.selected)+1)%Ke.buildings.length]))});wn.addEventListener("webglcontextlost",i=>{i.preventDefault(),Ke.paused=!0,me("renderError").hidden=!1});addEventListener("resize",kh);document.addEventListener("visibilitychange",()=>Rh=performance.now());function ef(i){let e=Math.min((i-Rh)/1e3,.25);if(Rh=i,Ke.tick(e),!Ke.paused){if(tt+=e,as+=e,Ho&&(Zt=(Zt+e*24/180)%24),kp&&as>=60){let r=Object.keys($s);bt=r[(r.indexOf(bt)+1)%4],as=0,Qs()}zo==="auto"&&Ze!==Kp()&&Qs()}Qp(e);let t=Jp(e),n=gg(e);if(mr.uTime.value=tt,!Yt.room){Wo.update(tt,Zt,Ze,n),qs(ea,tt,n,t),Sh(Vo,tt,n,t,Ze),xp(No,tt,n,t,bt,Ze,Vo.actors);for(let r of ls.values())if(qs(r,tt,n,t),Zs(r,tt,n),_p(r,tt,n),r.userData.growing){let s=tt-r.userData.growStart,a=s<.6?.84+.16*(1-Math.pow(1-s/.6,3)):1;r.scale.setScalar(a),s>=.6&&(r.userData.growing=!1)}for(let r=Oo.length-1;r>=0;r--){let s=Oo[r],a=tt-s.start;if(a>1.8){kt.remove(s.m),s.m.geometry.dispose(),s.m.material.dispose(),Oo.splice(r,1);continue}let o=s.m.geometry.attributes.position.array;for(let l=0;l<60;l++){let c=l*2.399;o[l*3]=Math.cos(c)*a*(.3+l%4*.18),o[l*3+1]=a*(2+l%3*.35)-a*a*.75,o[l*3+2]=Math.sin(c)*a*(.3+l%4*.18)}s.m.geometry.attributes.position.needsUpdate=!0,s.m.material.opacity=1-a/1.8}}Yt.update(e,tt,n,t,bt,Ze),Kt.render(zt,an),i>=Np&&(yr(),Np=i+140),requestAnimationFrame(ef)}Qs();kh();Qp(1);Jp(1);Wo.update(0,Zt,Ze,1);Sh(Vo,0,1,1-rs(Zt),Ze);yr();Tn()&&(me("climateControls").hidden=!0,me("climateToggle").textContent="\u5C55\u5F00",me("climateToggle").setAttribute("aria-expanded","false"));Kt.render(zt,an);me("loading").style.opacity="0";document.dispatchEvent(new Event("island-ready"));pg();setTimeout(()=>me("loading").hidden=!0,450);requestAnimationFrame(ef);
