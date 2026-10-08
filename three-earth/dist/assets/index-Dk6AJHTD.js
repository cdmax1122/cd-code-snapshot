(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const de={},Ms=[],Nn=()=>{},Hf=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sc=n=>n.startsWith("onUpdate:"),Pe=Object.assign,rc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},$d=Object.prototype.hasOwnProperty,ne=(n,t)=>$d.call(n,t),Ot=Array.isArray,ys=n=>Mr(n)==="[object Map]",Gf=n=>Mr(n)==="[object Set]",$c=n=>Mr(n)==="[object Date]",Yt=n=>typeof n=="function",Se=n=>typeof n=="string",Bn=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",kf=n=>(ie(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),Wf=Object.prototype.toString,Mr=n=>Wf.call(n),jd=n=>Mr(n).slice(8,-1),Xf=n=>Mr(n)==="[object Object]",La=n=>Se(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Kd=/-\w/g,_n=Da(n=>n.replace(Kd,t=>t.slice(1).toUpperCase())),Zd=/\B([A-Z])/g,Zi=Da(n=>n.replace(Zd,"-$1").toLowerCase()),qf=Da(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=Da(n=>n?`on${qf(n)}`:""),Ln=(n,t)=>!Object.is(n,t),to=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Yf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Jd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Qd=n=>{const t=Se(n)?Number(n):NaN;return isNaN(t)?n:t};let jc;const Ia=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ua(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Se(i)?ip(i):Ua(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Se(n)||ie(n))return n}const tp=/;(?![^(]*\))/g,ep=/:([^]+)/,np=/\/\*[^]*?\*\//g;function ip(n){const t={};return n.replace(np,"").split(tp).forEach(e=>{if(e){const i=e.split(ep);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function bi(n){let t="";if(Se(n))t=n;else if(Ot(n))for(let e=0;e<n.length;e++){const i=bi(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rp=ic(sp);function $f(n){return!!n||n===""}function ap(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=ac(n[i],t[i]);return e}function ac(n,t){if(n===t)return!0;let e=$c(n),i=$c(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Bn(n),i=Bn(t),e||i)return n===t;if(e=Ot(n),i=Ot(t),e||i)return e&&i?ap(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!ac(n[a],t[a]))return!1}}return String(n)===String(t)}const jf=n=>!!(n&&n.__v_isRef===!0),Ce=n=>Se(n)?n:n==null?"":Ot(n)||ie(n)&&(n.toString===Wf||!Yt(n.toString))?jf(n)?Ce(n.value):JSON.stringify(n,Kf,2):String(n),Kf=(n,t)=>jf(t)?Kf(n,t.value):ys(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[eo(i,r)+" =>"]=s,e),{})}:Gf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>eo(e))}:Bn(t)?eo(t):ie(t)&&!Ot(t)&&!Xf(t)?String(t):t,eo=(n,t="")=>{var e;return Bn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Zf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){this._on>0&&--this._on===0&&(Oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jf(n){return new Zf(n)}function Qf(){return Oe}function op(n,t=!1){Oe&&Oe.cleanups.push(n)}let he;const no=new WeakSet;class th{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,no.has(this)&&(no.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kc(this),ih(this);const t=he,e=vn;he=this,vn=!0;try{return this.fn()}finally{sh(this),he=t,vn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)cc(t);this.deps=this.depsTail=void 0,Kc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?no.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jo(this)&&this.run()}get dirty(){return jo(this)}}let eh=0,Js,Qs;function nh(n,t=!1){if(n.flags|=8,t){n.next=Qs,Qs=n;return}n.next=Js,Js=n}function oc(){eh++}function lc(){if(--eh>0)return;if(Qs){let t=Qs;for(Qs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Js;){let t=Js;for(Js=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function ih(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),cc(i),lp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(rh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function rh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cr)||(n.globalVersion=cr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jo(n))))return;n.flags|=2;const t=n.dep,e=he,i=vn;he=n,vn=!0;try{ih(n);const s=n.fn(n._value);(t.version===0||Ln(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{he=e,vn=i,sh(n),n.flags&=-3}}function cc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)cc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function lp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let vn=!0;const ah=[];function si(){ah.push(vn),vn=!1}function ri(){const n=ah.pop();vn=n===void 0?!0:n}function Kc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=he;he=void 0;try{t()}finally{he=e}}}let cr=0;class cp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!vn||he===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==he)e=this.activeLink=new cp(he,this),he.deps?(e.prevDep=he.depsTail,he.depsTail.nextDep=e,he.depsTail=e):he.deps=he.depsTail=e,oh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=he.depsTail,e.nextDep=void 0,he.depsTail.nextDep=e,he.depsTail=e,he.deps===e&&(he.deps=i)}return e}trigger(t){this.version++,cr++,this.notify(t)}notify(t){oc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{lc()}}}function oh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)oh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const pa=new WeakMap,Yi=Symbol(""),Ko=Symbol(""),ur=Symbol("");function Be(n,t,e){if(vn&&he){let i=pa.get(n);i||pa.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new uc),s.map=i,s.key=e),s.track()}}function Jn(n,t,e,i,s,r){const a=pa.get(n);if(!a){cr++;return}const o=l=>{l&&l.trigger()};if(oc(),t==="clear")a.forEach(o);else{const l=Ot(n),c=l&&La(e);if(l&&e==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===ur||!Bn(f)&&f>=u)&&o(h)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(ur)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Yi)),ys(n)&&o(a.get(Ko)));break;case"delete":l||(o(a.get(Yi)),ys(n)&&o(a.get(Ko)));break;case"set":ys(n)&&o(a.get(Yi));break}}lc()}function up(n,t){const e=pa.get(n);return e&&e.get(t)}function es(n){const t=Jt(n);return t===n?t:(Be(t,"iterate",ur),en(n)?t:t.map(xn))}function Na(n){return Be(n=Jt(n),"iterate",ur),n}function wn(n,t){return ai(n)?Cs(ti(n)?xn(t):t):xn(t)}const fp={__proto__:null,[Symbol.iterator](){return io(this,Symbol.iterator,n=>wn(this,n))},concat(...n){return es(this).concat(...n.map(t=>Ot(t)?es(t):t))},entries(){return io(this,"entries",n=>(n[1]=wn(this,n[1]),n))},every(n,t){return kn(this,"every",n,t,void 0,arguments)},filter(n,t){return kn(this,"filter",n,t,e=>e.map(i=>wn(this,i)),arguments)},find(n,t){return kn(this,"find",n,t,e=>wn(this,e),arguments)},findIndex(n,t){return kn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return kn(this,"findLast",n,t,e=>wn(this,e),arguments)},findLastIndex(n,t){return kn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return kn(this,"forEach",n,t,void 0,arguments)},includes(...n){return so(this,"includes",n)},indexOf(...n){return so(this,"indexOf",n)},join(n){return es(this).join(n)},lastIndexOf(...n){return so(this,"lastIndexOf",n)},map(n,t){return kn(this,"map",n,t,void 0,arguments)},pop(){return Bs(this,"pop")},push(...n){return Bs(this,"push",n)},reduce(n,...t){return Zc(this,"reduce",n,t)},reduceRight(n,...t){return Zc(this,"reduceRight",n,t)},shift(){return Bs(this,"shift")},some(n,t){return kn(this,"some",n,t,void 0,arguments)},splice(...n){return Bs(this,"splice",n)},toReversed(){return es(this).toReversed()},toSorted(n){return es(this).toSorted(n)},toSpliced(...n){return es(this).toSpliced(...n)},unshift(...n){return Bs(this,"unshift",n)},values(){return io(this,"values",n=>wn(this,n))}};function io(n,t,e){const i=Na(n),s=i[t]();return i!==n&&!en(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const hp=Array.prototype;function kn(n,t,e,i,s,r){const a=Na(n),o=a!==n&&!en(n),l=a[t];if(l!==hp[t]){const h=l.apply(n,r);return o?xn(h):h}let c=e;a!==n&&(o?c=function(h,f){return e.call(this,wn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Zc(n,t,e,i){const s=Na(n),r=s!==n&&!en(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=wn(n,c)),e.call(this,c,wn(n,u),h,n)}):e.length>3&&(a=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](a,...i);return o?wn(n,l):l}function so(n,t,e){const i=Jt(n);Be(i,"iterate",ur);const s=i[t](...e);return(s===-1||s===!1)&&Oa(e[0])?(e[0]=Jt(e[0]),i[t](...e)):s}function Bs(n,t,e=[]){si(),oc();const i=Jt(n)[t].apply(n,e);return lc(),ri(),i}const dp=ic("__proto__,__v_isRef,__isVue"),lh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Bn));function pp(n){Bn(n)||(n=String(n));const t=Jt(this);return Be(t,"has",n),t.hasOwnProperty(n)}class ch{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?bp:dh:r?hh:fh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Ot(t);if(!s){let l;if(a&&(l=fp[e]))return l;if(e==="hasOwnProperty")return pp}const o=Reflect.get(t,e,ve(t)?t:i);if((Bn(e)?lh.has(e):dp(e))||(s||Be(t,"get",e),r))return o;if(ve(o)){const l=a&&La(e)?o:o.value;return s&&ie(l)?Jo(l):l}return ie(o)?s?Jo(o):Fa(o):o}}class uh extends ch{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Ot(t)&&La(e);if(!this._isShallow){const c=ai(r);if(!en(i)&&!ai(i)&&(r=Jt(r),i=Jt(i)),!a&&ve(r)&&!ve(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:ne(t,e),l=Reflect.set(t,e,i,ve(t)?t:s);return t===Jt(s)&&(o?Ln(i,r)&&Jn(t,"set",e,i):Jn(t,"add",e,i)),l}deleteProperty(t,e){const i=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Jn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Bn(e)||!lh.has(e))&&Be(t,"has",e),i}ownKeys(t){return Be(t,"iterate",Ot(t)?"length":Yi),Reflect.ownKeys(t)}}class mp extends ch{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const gp=new uh,_p=new mp,vp=new uh(!0);const Zo=n=>n,Pr=n=>Reflect.getPrototypeOf(n);function xp(n,t,e){return function(...i){const s=this.__v_raw,r=Jt(s),a=ys(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=e?Zo:t?Cs:xn;return!t&&Be(r,"iterate",l?Ko:Yi),Pe(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Lr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sp(n,t){const e={get(s){const r=this.__v_raw,a=Jt(r),o=Jt(s);n||(Ln(s,o)&&Be(a,"get",s),Be(a,"get",o));const{has:l}=Pr(a),c=t?Zo:n?Cs:xn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Be(Jt(s),"iterate",Yi),s.size},has(s){const r=this.__v_raw,a=Jt(r),o=Jt(s);return n||(Ln(s,o)&&Be(a,"has",s),Be(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Jt(o),c=t?Zo:n?Cs:xn;return!n&&Be(l,"iterate",Yi),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Pe(e,n?{add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear")}:{add(s){const r=Jt(this),a=Pr(r),o=Jt(s),l=!t&&!en(s)&&!ai(s)?o:s;return a.has.call(r,l)||Ln(s,l)&&a.has.call(r,s)||Ln(o,l)&&a.has.call(r,o)||(r.add(l),Jn(r,"add",l,l)),this},set(s,r){!t&&!en(r)&&!ai(r)&&(r=Jt(r));const a=Jt(this),{has:o,get:l}=Pr(a);let c=o.call(a,s);c||(s=Jt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ln(r,u)&&Jn(a,"set",s,r):Jn(a,"add",s,r),this},delete(s){const r=Jt(this),{has:a,get:o}=Pr(r);let l=a.call(r,s);l||(s=Jt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Jn(r,"delete",s,void 0),c},clear(){const s=Jt(this),r=s.size!==0,a=s.clear();return r&&Jn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=xp(s,n,t)}),e}function fc(n,t){const e=Sp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ne(e,s)&&s in i?e:i,s,r)}const Mp={get:fc(!1,!1)},yp={get:fc(!1,!0)},Ep={get:fc(!0,!1)};const fh=new WeakMap,hh=new WeakMap,dh=new WeakMap,bp=new WeakMap;function Tp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ap(n){return n.__v_skip||!Object.isExtensible(n)?0:Tp(jd(n))}function Fa(n){return ai(n)?n:hc(n,!1,gp,Mp,fh)}function wp(n){return hc(n,!1,vp,yp,hh)}function Jo(n){return hc(n,!0,_p,Ep,dh)}function hc(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=Ap(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:e);return s.set(n,o),o}function ti(n){return ai(n)?ti(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function Oa(n){return n?!!n.__v_raw:!1}function Jt(n){const t=n&&n.__v_raw;return t?Jt(t):n}function dc(n){return!ne(n,"__v_skip")&&Object.isExtensible(n)&&Yf(n,"__v_skip",!0),n}const xn=n=>ie(n)?Fa(n):n,Cs=n=>ie(n)?Jo(n):n;function ve(n){return n?n.__v_isRef===!0:!1}function Es(n){return Cp(n,!1)}function Cp(n,t){return ve(n)?n:new Rp(n,t)}class Rp{constructor(t,e){this.dep=new uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Jt(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||en(t)||ai(t);t=i?t:Jt(t),Ln(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function ge(n){return ve(n)?n.value:n}const Pp={get:(n,t,e)=>t==="__v_raw"?n:ge(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return ve(s)&&!ve(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ph(n){return ti(n)?n:new Proxy(n,Pp)}function Lp(n){const t=Ot(n)?new Array(n.length):{};for(const e in n)t[e]=Ip(n,e);return t}class Dp{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=Jt(t);let s=!0,r=t;if(!Ot(t)||!La(String(e)))do s=!Oa(r)||en(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=ge(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&ve(this._raw[this._key])){const e=this._object[this._key];if(ve(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return up(this._raw,this._key)}}function Ip(n,t,e){return new Dp(n,t,e)}class Up{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return nh(this,!0),!0}get value(){const t=this.dep.track();return rh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Np(n,t,e=!1){let i,s;return Yt(n)?i=n:(i=n.get,s=n.set),new Up(i,s,e)}const Dr={},ma=new WeakMap;let Vi;function Fp(n,t=!1,e=Vi){if(e){let i=ma.get(e);i||ma.set(e,i=[]),i.push(n)}}function Op(n,t,e=de){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=b=>s?b:en(b)||s===!1||s===0?Mi(b,1):Mi(b);let u,h,f,d,_=!1,x=!1;if(ve(n)?(h=()=>n.value,_=en(n)):ti(n)?(h=()=>c(n),_=!0):Ot(n)?(x=!0,_=n.some(b=>ti(b)||en(b)),h=()=>n.map(b=>{if(ve(b))return b.value;if(ti(b))return c(b);if(Yt(b))return l?l(b,2):b()})):Yt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){si();try{f()}finally{ri()}}const b=Vi;Vi=u;try{return l?l(n,3,[d]):n(d)}finally{Vi=b}}:h=Nn,t&&s){const b=h,w=s===!0?1/0:s;h=()=>Mi(b(),w)}const m=Qf(),p=()=>{u.stop(),m&&m.active&&rc(m.effects,u)};if(r&&t){const b=t;t=(...w)=>{b(...w),p()}}let E=x?new Array(n.length).fill(Dr):Dr;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const w=u.run();if(s||_||(x?w.some((P,I)=>Ln(P,E[I])):Ln(w,E))){f&&f();const P=Vi;Vi=u;try{const I=[w,E===Dr?void 0:x&&E[0]===Dr?[]:E,d];E=w,l?l(t,3,I):t(...I)}finally{Vi=P}}}else u.run()};return o&&o(A),u=new th(h),u.scheduler=a?()=>a(A,!1):A,d=b=>Fp(b,!1,u),f=u.onStop=()=>{const b=ma.get(u);if(b){if(l)l(b,4);else for(const w of b)w();ma.delete(u)}},t?i?A(!0):E=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Mi(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,ve(n))Mi(n.value,t,e);else if(Ot(n))for(let i=0;i<n.length;i++)Mi(n[i],t,e);else if(Gf(n)||ys(n))n.forEach(i=>{Mi(i,t,e)});else if(Xf(n)){for(const i in n)Mi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Mi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ba(s,t,e)}}function Sn(n,t,e,i){if(Yt(n)){const s=yr(n,t,e,i);return s&&kf(s)&&s.catch(r=>{Ba(r,t,e)}),s}if(Ot(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],t,e,i));return s}}function Ba(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||de;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){si(),yr(r,null,10,[n,l,c]),ri();return}}Bp(n,e,s,i,a)}function Bp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Xe=[];let Tn=-1;const bs=[];let Si=null,_s=0;const mh=Promise.resolve();let ga=null;function gh(n){const t=ga||mh;return n?t.then(this?n.bind(this):n):t}function zp(n){let t=Tn+1,e=Xe.length;for(;t<e;){const i=t+e>>>1,s=Xe[i],r=fr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function pc(n){if(!(n.flags&1)){const t=fr(n),e=Xe[Xe.length-1];!e||!(n.flags&2)&&t>=fr(e)?Xe.push(n):Xe.splice(zp(t),0,n),n.flags|=1,_h()}}function _h(){ga||(ga=mh.then(xh))}function Vp(n){Ot(n)?bs.push(...n):Si&&n.id===-1?Si.splice(_s+1,0,n):n.flags&1||(bs.push(n),n.flags|=1),_h()}function Jc(n,t,e=Tn+1){for(;e<Xe.length;e++){const i=Xe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function vh(n){if(bs.length){const t=[...new Set(bs)].sort((e,i)=>fr(e)-fr(i));if(bs.length=0,Si){Si.push(...t);return}for(Si=t,_s=0;_s<Si.length;_s++){const e=Si[_s];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Si=null,_s=0}}const fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xh(n){try{for(Tn=0;Tn<Xe.length;Tn++){const t=Xe[Tn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Tn<Xe.length;Tn++){const t=Xe[Tn];t&&(t.flags&=-2)}Tn=-1,Xe.length=0,vh(),ga=null,(Xe.length||bs.length)&&xh()}}let Dn=null,Sh=null;function _a(n){const t=Dn;return Dn=n,Sh=n&&n.type.__scopeId||null,t}function Mh(n,t=Dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Sa(-1);const r=_a(t);let a;try{a=n(...s)}finally{_a(r),i._d&&Sa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Pi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(si(),Sn(l,e,8,[n.el,o,n,t]),ri())}}function Hp(n,t){if(Ye){let e=Ye.provides;const i=Ye.parent&&Ye.parent.provides;i===e&&(e=Ye.provides=Object.create(i)),e[n]=t}}function tr(n,t,e=!1){const i=Sc();if(i||$i){let s=$i?$i._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}function Gp(){return!!(Sc()||$i)}const kp=Symbol.for("v-scx"),Wp=()=>tr(kp);function er(n,t,e){return yh(n,t,e)}function yh(n,t,e=de){const{immediate:i,deep:s,flush:r,once:a}=e,o=Pe({},e),l=t&&i||!t&&r!=="post";let c;if(pr){if(r==="sync"){const d=Wp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Nn,d.resume=Nn,d.pause=Nn,d}}const u=Ye;o.call=(d,_,x)=>Sn(d,u,_,x);let h=!1;r==="post"?o.scheduler=d=>{je(d,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(d,_)=>{_?d():pc(d)}),o.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Op(n,t,o);return pr&&(c?c.push(f):l&&f()),f}function Xp(n,t,e){const i=this.proxy,s=Se(n)?n.includes(".")?Eh(i,n):()=>i[n]:n.bind(i,i);let r;Yt(t)?r=t:(r=t.handler,e=t);const a=Er(this),o=yh(s,r.bind(i),e);return a(),o}function Eh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const qp=Symbol("_vte"),bh=n=>n.__isTeleport,An=Symbol("_leaveCb"),zs=Symbol("_enterCb");function Yp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{n.isMounted=!0}),mc(()=>{n.isUnmounting=!0}),n}const sn=[Function,Array],Th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Ah=n=>{const t=n.subTree;return t.component?Ah(t.component):t},$p={name:"BaseTransition",props:Th,setup(n,{slots:t}){const e=Sc(),i=Yp();return()=>{const s=t.default&&Rh(t.default(),!0);if(!s||!s.length)return;const r=wh(s),a=Jt(n),{mode:o}=a;if(i.isLeaving)return ro(r);const l=Qc(r);if(!l)return ro(r);let c=Qo(l,a,i,e,h=>c=h);l.type!==qe&&hr(l,c);let u=e.subTree&&Qc(e.subTree);if(u&&u.type!==qe&&!Gi(u,l)&&Ah(e).type!==qe){let h=Qo(u,a,i,e);if(hr(u,h),o==="out-in"&&l.type!==qe)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},ro(r);o==="in-out"&&l.type!==qe?h.delayLeave=(f,d,_)=>{const x=Ch(i,u);x[String(u.key)]=u,f[An]=()=>{d(),f[An]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function wh(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==qe){t=e;break}}return t}const jp=$p;function Ch(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Qo(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:A}=t,b=String(n.key),w=Ch(e,n),P=(S,H)=>{S&&Sn(S,i,9,H)},I=(S,H)=>{const R=H[1];P(S,H),Ot(S)?S.every(D=>D.length<=1)&&R():S.length<=1&&R()},v={mode:a,persisted:o,beforeEnter(S){let H=l;if(!e.isMounted)if(r)H=m||l;else return;S[An]&&S[An](!0);const R=w[b];R&&Gi(n,R)&&R.el[An]&&R.el[An](),P(H,[S])},enter(S){if(w[b]===n)return;let H=c,R=u,D=h;if(!e.isMounted)if(r)H=p||c,R=E||u,D=A||h;else return;let O=!1;S[zs]=G=>{O||(O=!0,G?P(D,[S]):P(R,[S]),v.delayedLeave&&v.delayedLeave(),S[zs]=void 0)};const Y=S[zs].bind(null,!1);H?I(H,[S,Y]):Y()},leave(S,H){const R=String(n.key);if(S[zs]&&S[zs](!0),e.isUnmounting)return H();P(f,[S]);let D=!1;S[An]=Y=>{D||(D=!0,H(),Y?P(x,[S]):P(_,[S]),S[An]=void 0,w[R]===n&&delete w[R])};const O=S[An].bind(null,!1);w[R]=n,d?I(d,[S,O]):O()},clone(S){const H=Qo(S,t,e,i,s);return s&&s(H),H}};return v}function ro(n){if(za(n))return n=Ai(n),n.children=null,n}function Qc(n){if(!za(n))return bh(n.type)&&n.children?wh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Yt(e.default))return e.default()}}function hr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,hr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Rh(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===dn?(a.patchFlag&128&&s++,i=i.concat(Rh(a.children,t,o))):(t||a.type!==qe)&&i.push(o!=null?Ai(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ph(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function tu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const va=new WeakMap;function nr(n,t,e,i,s=!1){if(Ot(n)){n.forEach((x,m)=>nr(x,t&&(Ot(t)?t[m]:t),e,i,s));return}if(ir(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&nr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Mc(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,u=o.refs===de?o.refs={}:o.refs,h=o.setupState,f=Jt(h),d=h===de?Hf:x=>tu(u,x)?!1:ne(f,x),_=(x,m)=>!(m&&tu(u,m));if(c!=null&&c!==l){if(eu(t),Se(c))u[c]=null,d(c)&&(h[c]=null);else if(ve(c)){const x=t;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Yt(l))yr(l,o,12,[a,u]);else{const x=Se(l),m=ve(l);if(x||m){const p=()=>{if(n.f){const E=x?d(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Ot(E)&&rc(E,r);else if(Ot(E))E.includes(r)||E.push(r);else if(x)u[l]=[r],d(l)&&(h[l]=u[l]);else{const A=[r];_(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else x?(u[l]=a,d(l)&&(h[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{p(),va.delete(n)};E.id=-1,va.set(n,E),je(E,e)}else eu(n),p()}}}function eu(n){const t=va.get(n);t&&(t.flags|=8,va.delete(n))}Ia().requestIdleCallback;Ia().cancelIdleCallback;const ir=n=>!!n.type.__asyncLoader,za=n=>n.type.__isKeepAlive;function Kp(n,t){Lh(n,"a",t)}function Zp(n,t){Lh(n,"da",t)}function Lh(n,t,e=Ye){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Va(t,i,e),e){let s=e.parent;for(;s&&s.parent;)za(s.parent.vnode)&&Jp(i,t,e,s),s=s.parent}}function Jp(n,t,e,i){const s=Va(t,n,i,!0);gc(()=>{rc(i[t],s)},e)}function Va(n,t,e=Ye,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{si();const o=Er(e),l=Sn(t,e,n,a);return o(),ri(),l});return i?s.unshift(r):s.push(r),r}}const ci=n=>(t,e=Ye)=>{(!pr||n==="sp")&&Va(n,(...i)=>t(...i),e)},Qp=ci("bm"),Ha=ci("m"),tm=ci("bu"),em=ci("u"),mc=ci("bum"),gc=ci("um"),nm=ci("sp"),im=ci("rtg"),sm=ci("rtc");function rm(n,t=Ye){Va("ec",n,t)}const am=Symbol.for("v-ndc");function om(n,t,e,i){let s;const r=e,a=Ot(n);if(a||Se(n)){const o=a&&ti(n);let l=!1,c=!1;o&&(l=!en(n),c=ai(n),n=Na(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Cs(xn(n[u])):xn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const tl=n=>n?Jh(n)?Mc(n):tl(n.parent):null,sr=Pe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tl(n.parent),$root:n=>tl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ih(n),$forceUpdate:n=>n.f||(n.f=()=>{pc(n.update)}),$nextTick:n=>n.n||(n.n=gh.bind(n.proxy)),$watch:n=>Xp.bind(n)}),ao=(n,t)=>n!==de&&!n.__isScriptSetup&&ne(n,t),lm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ao(i,t))return a[t]=1,i[t];if(s!==de&&ne(s,t))return a[t]=2,s[t];if(ne(r,t))return a[t]=3,r[t];if(e!==de&&ne(e,t))return a[t]=4,e[t];el&&(a[t]=0)}}const c=sr[t];let u,h;if(c)return t==="$attrs"&&Be(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==de&&ne(e,t))return a[t]=4,e[t];if(h=l.config.globalProperties,ne(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ao(s,t)?(s[t]=e,!0):i!==de&&ne(i,t)?(i[t]=e,!0):ne(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==de&&o[0]!=="$"&&ne(n,o)||ao(t,o)||ne(r,o)||ne(i,o)||ne(sr,o)||ne(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ne(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function nu(n){return Ot(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let el=!0;function cm(n){const t=Ih(n),e=n.proxy,i=n.ctx;el=!1,t.beforeCreate&&iu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:A,unmounted:b,render:w,renderTracked:P,renderTriggered:I,errorCaptured:v,serverPrefetch:S,expose:H,inheritAttrs:R,components:D,directives:O,filters:Y}=t;if(c&&um(c,i,null),a)for(const N in a){const it=a[N];Yt(it)&&(i[N]=it.bind(e))}if(s){const N=s.call(e,e);ie(N)&&(n.data=Fa(N))}if(el=!0,r)for(const N in r){const it=r[N],at=Yt(it)?it.bind(e,e):Yt(it.get)?it.get.bind(e,e):Nn,St=!Yt(it)&&Yt(it.set)?it.set.bind(e):Nn,Tt=Ti({get:at,set:St});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:gt=>Tt.value=gt})}if(o)for(const N in o)Dh(o[N],i,e,N);if(l){const N=Yt(l)?l.call(e):l;Reflect.ownKeys(N).forEach(it=>{Hp(it,N[it])})}u&&iu(u,n,"c");function V(N,it){Ot(it)?it.forEach(at=>N(at.bind(e))):it&&N(it.bind(e))}if(V(Qp,h),V(Ha,f),V(tm,d),V(em,_),V(Kp,x),V(Zp,m),V(rm,v),V(sm,P),V(im,I),V(mc,E),V(gc,b),V(nm,S),Ot(H))if(H.length){const N=n.exposed||(n.exposed={});H.forEach(it=>{Object.defineProperty(N,it,{get:()=>e[it],set:at=>e[it]=at,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Nn&&(n.render=w),R!=null&&(n.inheritAttrs=R),D&&(n.components=D),O&&(n.directives=O),S&&Ph(n)}function um(n,t,e=Nn){Ot(n)&&(n=nl(n));for(const i in n){const s=n[i];let r;ie(s)?"default"in s?r=tr(s.from||i,s.default,!0):r=tr(s.from||i):r=tr(s),ve(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function iu(n,t,e){Sn(Ot(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Dh(n,t,e,i){let s=i.includes(".")?Eh(e,i):()=>e[i];if(Se(n)){const r=t[n];Yt(r)&&er(s,r)}else if(Yt(n))er(s,n.bind(e));else if(ie(n))if(Ot(n))n.forEach(r=>Dh(r,t,e,i));else{const r=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(r)&&er(s,r,n)}}function Ih(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>xa(l,c,a,!0)),xa(l,t,a)),ie(t)&&r.set(t,l),l}function xa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&xa(n,r,e,!0),s&&s.forEach(a=>xa(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=fm[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const fm={data:su,props:ru,emits:ru,methods:$s,computed:$s,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:$s,directives:$s,watch:dm,provide:su,inject:hm};function su(n,t){return t?n?function(){return Pe(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function hm(n,t){return $s(nl(n),nl(t))}function nl(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ge(n,t){return n?[...new Set([].concat(n,t))]:t}function $s(n,t){return n?Pe(Object.create(null),n,t):t}function ru(n,t){return n?Ot(n)&&Ot(t)?[...new Set([...n,...t])]:Pe(Object.create(null),nu(n),nu(t??{})):t}function dm(n,t){if(!n)return t;if(!t)return n;const e=Pe(Object.create(null),n);for(const i in t)e[i]=Ge(n[i],t[i]);return e}function Uh(){return{app:null,config:{isNativeTag:Hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pm=0;function mm(n,t){return function(i,s=null){Yt(i)||(i=Pe({},i)),s!=null&&!ie(s)&&(s=null);const r=Uh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:pm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$m,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Yt(u.install)?(a.add(u),u.install(c,...h)):Yt(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Re(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Mc(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Sn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=$i;$i=c;try{return u()}finally{$i=h}}};return c}}let $i=null;const gm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${_n(t)}Modifiers`]||n[`${Zi(t)}Modifiers`];function _m(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||de;let s=e;const r=t.startsWith("update:"),a=r&&gm(i,t.slice(7));a&&(a.trim&&(s=e.map(u=>Se(u)?u.trim():u)),a.number&&(s=e.map(Jd)));let o,l=i[o=Qa(t)]||i[o=Qa(_n(t))];!l&&r&&(l=i[o=Qa(Zi(t))]),l&&Sn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Sn(c,n,6,s)}}const vm=new WeakMap;function Nh(n,t,e=!1){const i=e?vm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Yt(n)){const l=c=>{const u=Nh(c,t,!0);u&&(o=!0,Pe(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ie(n)&&i.set(n,null),null):(Ot(r)?r.forEach(l=>a[l]=null):Pe(a,r),ie(n)&&i.set(n,a),a)}function Ga(n,t){return!n||!Pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(n,t[0].toLowerCase()+t.slice(1))||ne(n,Zi(t))||ne(n,t))}function au(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:x}=n,m=_a(n);let p,E;try{if(e.shapeFlag&4){const b=s||i,w=b;p=Cn(c.call(w,b,u,h,d,f,_)),E=o}else{const b=t;p=Cn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),E=t.props?o:xm(o)}}catch(b){rr.length=0,Ba(b,n,1),p=Re(qe)}let A=p;if(E&&x!==!1){const b=Object.keys(E),{shapeFlag:w}=A;b.length&&w&7&&(r&&b.some(sc)&&(E=Sm(E,r)),A=Ai(A,E,!1,!0))}return e.dirs&&(A=Ai(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&hr(A,e.transition),p=A,_a(m),p}const xm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Pa(e))&&((t||(t={}))[e]=n[e]);return t},Sm=(n,t)=>{const e={};for(const i in n)(!sc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Mm(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?ou(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Fh(a,i,f)&&!Ga(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ou(i,a,c):!0:!!a;return!1}function ou(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Fh(t,n,r)&&!Ga(e,r))return!0}return!1}function Fh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ie(i)&&ie(s)?!ac(i,s):i!==s}function ym({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Oh={},Bh=()=>Object.create(Oh),zh=n=>Object.getPrototypeOf(n)===Oh;function Em(n,t,e,i=!1){const s={},r=Bh();n.propsDefaults=Object.create(null),Vh(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:wp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Jt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ga(n.emitsOptions,f))continue;const d=t[f];if(l)if(ne(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=_n(f);s[_]=il(l,o,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Vh(n,t,s,r)&&(c=!0);let u;for(const h in o)(!t||!ne(t,h)&&((u=Zi(h))===h||!ne(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=il(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!t||!ne(t,h))&&(delete r[h],c=!0)}c&&Jn(n.attrs,"set","")}function Vh(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(Zs(l))continue;const c=t[l];let u;s&&ne(s,u=_n(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:Ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Jt(e),c=o||de;for(let u=0;u<r.length;u++){const h=r[u];e[h]=il(s,l,h,c[h],n,!ne(c,h))}}return a}function il(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=ne(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Er(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Zi(e))&&(i=!0))}return i}const Tm=new WeakMap;function Hh(n,t,e=!1){const i=e?Tm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Yt(n)){const u=h=>{l=!0;const[f,d]=Hh(h,t,!0);Pe(a,f),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ie(n)&&i.set(n,Ms),Ms;if(Ot(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);lu(h)&&(a[h]=de)}else if(r)for(const u in r){const h=_n(u);if(lu(h)){const f=r[u],d=a[h]=Ot(f)||Yt(f)?{type:f}:Pe({},f),_=d.type;let x=!1,m=!0;if(Ot(_))for(let p=0;p<_.length;++p){const E=_[p],A=Yt(E)&&E.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(m=!1)}else x=Yt(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||ne(d,"default"))&&o.push(h)}}const c=[a,o];return ie(n)&&i.set(n,c),c}function lu(n){return n[0]!=="$"&&!Zs(n)}const _c=n=>n==="_"||n==="_ctx"||n==="$stable",vc=n=>Ot(n)?n.map(Cn):[Cn(n)],Am=(n,t,e)=>{if(t._n)return t;const i=Mh((...s)=>vc(t(...s)),e);return i._c=!1,i},Gh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(_c(s))continue;const r=n[s];if(Yt(r))t[s]=Am(s,r,i);else if(r!=null){const a=vc(r);t[s]=()=>a}}},kh=(n,t)=>{const e=vc(t);n.slots.default=()=>e},Wh=(n,t,e)=>{for(const i in t)(e||!_c(i))&&(n[i]=t[i])},wm=(n,t,e)=>{const i=n.slots=Bh();if(n.vnode.shapeFlag&32){const s=t._;s?(Wh(i,t,e),e&&Yf(i,"_",s,!0)):Gh(t,i)}else t&&kh(n,t)},Cm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=de;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:Wh(s,t,e):(r=!t.$stable,Gh(t,s)),a=t}else t&&(kh(n,t),a={default:1});if(r)for(const o in s)!_c(o)&&a[o]==null&&delete s[o]},je=Im;function Rm(n){return Pm(n)}function Pm(n,t){const e=Ia();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Nn,insertStaticContent:_}=n,x=(C,U,k,tt=null,j=null,nt=null,T=void 0,ot=null,st=!!U.dynamicChildren)=>{if(C===U)return;C&&!Gi(C,U)&&(tt=ht(C),gt(C,j,nt,!0),C=null),U.patchFlag===-2&&(st=!1,U.dynamicChildren=null);const{type:Q,ref:rt,shapeFlag:M}=U;switch(Q){case ka:m(C,U,k,tt);break;case qe:p(C,U,k,tt);break;case ra:C==null&&E(U,k,tt,T);break;case dn:D(C,U,k,tt,j,nt,T,ot,st);break;default:M&1?w(C,U,k,tt,j,nt,T,ot,st):M&6?O(C,U,k,tt,j,nt,T,ot,st):(M&64||M&128)&&Q.process(C,U,k,tt,j,nt,T,ot,st,Ft)}rt!=null&&j?nr(rt,C&&C.ref,nt,U||C,!U):rt==null&&C&&C.ref!=null&&nr(C.ref,null,nt,C,!0)},m=(C,U,k,tt)=>{if(C==null)i(U.el=o(U.children),k,tt);else{const j=U.el=C.el;U.children!==C.children&&c(j,U.children)}},p=(C,U,k,tt)=>{C==null?i(U.el=l(U.children||""),k,tt):U.el=C.el},E=(C,U,k,tt)=>{[C.el,C.anchor]=_(C.children,U,k,tt,C.el,C.anchor)},A=({el:C,anchor:U},k,tt)=>{let j;for(;C&&C!==U;)j=f(C),i(C,k,tt),C=j;i(U,k,tt)},b=({el:C,anchor:U})=>{let k;for(;C&&C!==U;)k=f(C),s(C),C=k;s(U)},w=(C,U,k,tt,j,nt,T,ot,st)=>{if(U.type==="svg"?T="svg":U.type==="math"&&(T="mathml"),C==null)P(U,k,tt,j,nt,T,ot,st);else{const Q=C.el&&C.el._isVueCE?C.el:null;try{Q&&Q._beginPatch(),S(C,U,j,nt,T,ot,st)}finally{Q&&Q._endPatch()}}},P=(C,U,k,tt,j,nt,T,ot)=>{let st,Q;const{props:rt,shapeFlag:M,transition:g,dirs:L}=C;if(st=C.el=a(C.type,nt,rt&&rt.is,rt),M&8?u(st,C.children):M&16&&v(C.children,st,null,tt,j,oo(C,nt),T,ot),L&&Pi(C,null,tt,"created"),I(st,C,C.scopeId,T,tt),rt){for(const Z in rt)Z!=="value"&&!Zs(Z)&&r(st,Z,null,rt[Z],nt,tt);"value"in rt&&r(st,"value",null,rt.value,nt),(Q=rt.onVnodeBeforeMount)&&yn(Q,tt,C)}L&&Pi(C,null,tt,"beforeMount");const W=Lm(j,g);W&&g.beforeEnter(st),i(st,U,k),((Q=rt&&rt.onVnodeMounted)||W||L)&&je(()=>{Q&&yn(Q,tt,C),W&&g.enter(st),L&&Pi(C,null,tt,"mounted")},j)},I=(C,U,k,tt,j)=>{if(k&&d(C,k),tt)for(let nt=0;nt<tt.length;nt++)d(C,tt[nt]);if(j){let nt=j.subTree;if(U===nt||$h(nt.type)&&(nt.ssContent===U||nt.ssFallback===U)){const T=j.vnode;I(C,T,T.scopeId,T.slotScopeIds,j.parent)}}},v=(C,U,k,tt,j,nt,T,ot,st=0)=>{for(let Q=st;Q<C.length;Q++){const rt=C[Q]=ot?Zn(C[Q]):Cn(C[Q]);x(null,rt,U,k,tt,j,nt,T,ot)}},S=(C,U,k,tt,j,nt,T)=>{const ot=U.el=C.el;let{patchFlag:st,dynamicChildren:Q,dirs:rt}=U;st|=C.patchFlag&16;const M=C.props||de,g=U.props||de;let L;if(k&&Li(k,!1),(L=g.onVnodeBeforeUpdate)&&yn(L,k,U,C),rt&&Pi(U,C,k,"beforeUpdate"),k&&Li(k,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(ot,""),Q?H(C.dynamicChildren,Q,ot,k,tt,oo(U,j),nt):T||it(C,U,ot,null,k,tt,oo(U,j),nt,!1),st>0){if(st&16)R(ot,M,g,k,j);else if(st&2&&M.class!==g.class&&r(ot,"class",null,g.class,j),st&4&&r(ot,"style",M.style,g.style,j),st&8){const W=U.dynamicProps;for(let Z=0;Z<W.length;Z++){const X=W[Z],_t=M[X],ct=g[X];(ct!==_t||X==="value")&&r(ot,X,_t,ct,j,k)}}st&1&&C.children!==U.children&&u(ot,U.children)}else!T&&Q==null&&R(ot,M,g,k,j);((L=g.onVnodeUpdated)||rt)&&je(()=>{L&&yn(L,k,U,C),rt&&Pi(U,C,k,"updated")},tt)},H=(C,U,k,tt,j,nt,T)=>{for(let ot=0;ot<U.length;ot++){const st=C[ot],Q=U[ot],rt=st.el&&(st.type===dn||!Gi(st,Q)||st.shapeFlag&198)?h(st.el):k;x(st,Q,rt,null,tt,j,nt,T,!0)}},R=(C,U,k,tt,j)=>{if(U!==k){if(U!==de)for(const nt in U)!Zs(nt)&&!(nt in k)&&r(C,nt,U[nt],null,j,tt);for(const nt in k){if(Zs(nt))continue;const T=k[nt],ot=U[nt];T!==ot&&nt!=="value"&&r(C,nt,ot,T,j,tt)}"value"in k&&r(C,"value",U.value,k.value,j)}},D=(C,U,k,tt,j,nt,T,ot,st)=>{const Q=U.el=C?C.el:o(""),rt=U.anchor=C?C.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:L}=U;L&&(ot=ot?ot.concat(L):L),C==null?(i(Q,k,tt),i(rt,k,tt),v(U.children||[],k,rt,j,nt,T,ot,st)):M>0&&M&64&&g&&C.dynamicChildren&&C.dynamicChildren.length===g.length?(H(C.dynamicChildren,g,k,j,nt,T,ot),(U.key!=null||j&&U===j.subTree)&&Xh(C,U,!0)):it(C,U,k,rt,j,nt,T,ot,st)},O=(C,U,k,tt,j,nt,T,ot,st)=>{U.slotScopeIds=ot,C==null?U.shapeFlag&512?j.ctx.activate(U,k,tt,T,st):Y(U,k,tt,j,nt,T,st):G(C,U,st)},Y=(C,U,k,tt,j,nt,T)=>{const ot=C.component=Hm(C,tt,j);if(za(C)&&(ot.ctx.renderer=Ft),Gm(ot,!1,T),ot.asyncDep){if(j&&j.registerDep(ot,V,T),!C.el){const st=ot.subTree=Re(qe);p(null,st,U,k),C.placeholder=st.el}}else V(ot,C,U,k,j,nt,T)},G=(C,U,k)=>{const tt=U.component=C.component;if(Mm(C,U,k))if(tt.asyncDep&&!tt.asyncResolved){N(tt,U,k);return}else tt.next=U,tt.update();else U.el=C.el,tt.vnode=U},V=(C,U,k,tt,j,nt,T)=>{const ot=()=>{if(C.isMounted){let{next:M,bu:g,u:L,parent:W,vnode:Z}=C;{const Lt=qh(C);if(Lt){M&&(M.el=Z.el,N(C,M,T)),Lt.asyncDep.then(()=>{je(()=>{C.isUnmounted||Q()},j)});return}}let X=M,_t;Li(C,!1),M?(M.el=Z.el,N(C,M,T)):M=Z,g&&to(g),(_t=M.props&&M.props.onVnodeBeforeUpdate)&&yn(_t,W,M,Z),Li(C,!0);const ct=au(C),wt=C.subTree;C.subTree=ct,x(wt,ct,h(wt.el),ht(wt),C,j,nt),M.el=ct.el,X===null&&ym(C,ct.el),L&&je(L,j),(_t=M.props&&M.props.onVnodeUpdated)&&je(()=>yn(_t,W,M,Z),j)}else{let M;const{el:g,props:L}=U,{bm:W,m:Z,parent:X,root:_t,type:ct}=C,wt=ir(U);Li(C,!1),W&&to(W),!wt&&(M=L&&L.onVnodeBeforeMount)&&yn(M,X,U),Li(C,!0);{_t.ce&&_t.ce._hasShadowRoot()&&_t.ce._injectChildStyle(ct,C.parent?C.parent.type:void 0);const Lt=C.subTree=au(C);x(null,Lt,k,tt,C,j,nt),U.el=Lt.el}if(Z&&je(Z,j),!wt&&(M=L&&L.onVnodeMounted)){const Lt=U;je(()=>yn(M,X,Lt),j)}(U.shapeFlag&256||X&&ir(X.vnode)&&X.vnode.shapeFlag&256)&&C.a&&je(C.a,j),C.isMounted=!0,U=k=tt=null}};C.scope.on();const st=C.effect=new th(ot);C.scope.off();const Q=C.update=st.run.bind(st),rt=C.job=st.runIfDirty.bind(st);rt.i=C,rt.id=C.uid,st.scheduler=()=>pc(rt),Li(C,!0),Q()},N=(C,U,k)=>{U.component=C;const tt=C.vnode.props;C.vnode=U,C.next=null,bm(C,U.props,tt,k),Cm(C,U.children,k),si(),Jc(C),ri()},it=(C,U,k,tt,j,nt,T,ot,st=!1)=>{const Q=C&&C.children,rt=C?C.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:L}=U;if(g>0){if(g&128){St(Q,M,k,tt,j,nt,T,ot,st);return}else if(g&256){at(Q,M,k,tt,j,nt,T,ot,st);return}}L&8?(rt&16&&et(Q,j,nt),M!==Q&&u(k,M)):rt&16?L&16?St(Q,M,k,tt,j,nt,T,ot,st):et(Q,j,nt,!0):(rt&8&&u(k,""),L&16&&v(M,k,tt,j,nt,T,ot,st))},at=(C,U,k,tt,j,nt,T,ot,st)=>{C=C||Ms,U=U||Ms;const Q=C.length,rt=U.length,M=Math.min(Q,rt);let g;for(g=0;g<M;g++){const L=U[g]=st?Zn(U[g]):Cn(U[g]);x(C[g],L,k,null,j,nt,T,ot,st)}Q>rt?et(C,j,nt,!0,!1,M):v(U,k,tt,j,nt,T,ot,st,M)},St=(C,U,k,tt,j,nt,T,ot,st)=>{let Q=0;const rt=U.length;let M=C.length-1,g=rt-1;for(;Q<=M&&Q<=g;){const L=C[Q],W=U[Q]=st?Zn(U[Q]):Cn(U[Q]);if(Gi(L,W))x(L,W,k,null,j,nt,T,ot,st);else break;Q++}for(;Q<=M&&Q<=g;){const L=C[M],W=U[g]=st?Zn(U[g]):Cn(U[g]);if(Gi(L,W))x(L,W,k,null,j,nt,T,ot,st);else break;M--,g--}if(Q>M){if(Q<=g){const L=g+1,W=L<rt?U[L].el:tt;for(;Q<=g;)x(null,U[Q]=st?Zn(U[Q]):Cn(U[Q]),k,W,j,nt,T,ot,st),Q++}}else if(Q>g)for(;Q<=M;)gt(C[Q],j,nt,!0),Q++;else{const L=Q,W=Q,Z=new Map;for(Q=W;Q<=g;Q++){const vt=U[Q]=st?Zn(U[Q]):Cn(U[Q]);vt.key!=null&&Z.set(vt.key,Q)}let X,_t=0;const ct=g-W+1;let wt=!1,Lt=0;const lt=new Array(ct);for(Q=0;Q<ct;Q++)lt[Q]=0;for(Q=L;Q<=M;Q++){const vt=C[Q];if(_t>=ct){gt(vt,j,nt,!0);continue}let Et;if(vt.key!=null)Et=Z.get(vt.key);else for(X=W;X<=g;X++)if(lt[X-W]===0&&Gi(vt,U[X])){Et=X;break}Et===void 0?gt(vt,j,nt,!0):(lt[Et-W]=Q+1,Et>=Lt?Lt=Et:wt=!0,x(vt,U[Et],k,null,j,nt,T,ot,st),_t++)}const ft=wt?Dm(lt):Ms;for(X=ft.length-1,Q=ct-1;Q>=0;Q--){const vt=W+Q,Et=U[vt],bt=U[vt+1],Wt=vt+1<rt?bt.el||Yh(bt):tt;lt[Q]===0?x(null,Et,k,Wt,j,nt,T,ot,st):wt&&(X<0||Q!==ft[X]?Tt(Et,k,Wt,2):X--)}}},Tt=(C,U,k,tt,j=null)=>{const{el:nt,type:T,transition:ot,children:st,shapeFlag:Q}=C;if(Q&6){Tt(C.component.subTree,U,k,tt);return}if(Q&128){C.suspense.move(U,k,tt);return}if(Q&64){T.move(C,U,k,Ft);return}if(T===dn){i(nt,U,k);for(let M=0;M<st.length;M++)Tt(st[M],U,k,tt);i(C.anchor,U,k);return}if(T===ra){A(C,U,k);return}if(tt!==2&&Q&1&&ot)if(tt===0)ot.beforeEnter(nt),i(nt,U,k),je(()=>ot.enter(nt),j);else{const{leave:M,delayLeave:g,afterLeave:L}=ot,W=()=>{C.ctx.isUnmounted?s(nt):i(nt,U,k)},Z=()=>{nt._isLeaving&&nt[An](!0),M(nt,()=>{W(),L&&L()})};g?g(nt,W,Z):Z()}else i(nt,U,k)},gt=(C,U,k,tt=!1,j=!1)=>{const{type:nt,props:T,ref:ot,children:st,dynamicChildren:Q,shapeFlag:rt,patchFlag:M,dirs:g,cacheIndex:L}=C;if(M===-2&&(j=!1),ot!=null&&(si(),nr(ot,null,k,C,!0),ri()),L!=null&&(U.renderCache[L]=void 0),rt&256){U.ctx.deactivate(C);return}const W=rt&1&&g,Z=!ir(C);let X;if(Z&&(X=T&&T.onVnodeBeforeUnmount)&&yn(X,U,C),rt&6)le(C.component,k,tt);else{if(rt&128){C.suspense.unmount(k,tt);return}W&&Pi(C,null,U,"beforeUnmount"),rt&64?C.type.remove(C,U,k,Ft,tt):Q&&!Q.hasOnce&&(nt!==dn||M>0&&M&64)?et(Q,U,k,!1,!0):(nt===dn&&M&384||!j&&rt&16)&&et(st,U,k),tt&&Gt(C)}(Z&&(X=T&&T.onVnodeUnmounted)||W)&&je(()=>{X&&yn(X,U,C),W&&Pi(C,null,U,"unmounted")},k)},Gt=C=>{const{type:U,el:k,anchor:tt,transition:j}=C;if(U===dn){ue(k,tt);return}if(U===ra){b(C);return}const nt=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:T,delayLeave:ot}=j,st=()=>T(k,nt);ot?ot(C.el,nt,st):st()}else nt()},ue=(C,U)=>{let k;for(;C!==U;)k=f(C),s(C),C=k;s(U)},le=(C,U,k)=>{const{bum:tt,scope:j,job:nt,subTree:T,um:ot,m:st,a:Q}=C;cu(st),cu(Q),tt&&to(tt),j.stop(),nt&&(nt.flags|=8,gt(T,C,U,k)),ot&&je(ot,U),je(()=>{C.isUnmounted=!0},U)},et=(C,U,k,tt=!1,j=!1,nt=0)=>{for(let T=nt;T<C.length;T++)gt(C[T],U,k,tt,j)},ht=C=>{if(C.shapeFlag&6)return ht(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const U=f(C.anchor||C.el),k=U&&U[qp];return k?f(k):U};let pt=!1;const Vt=(C,U,k)=>{let tt;C==null?U._vnode&&(gt(U._vnode,null,null,!0),tt=U._vnode.component):x(U._vnode||null,C,U,null,null,null,k),U._vnode=C,pt||(pt=!0,Jc(tt),vh(),pt=!1)},Ft={p:x,um:gt,m:Tt,r:Gt,mt:Y,mc:v,pc:it,pbc:H,n:ht,o:n};return{render:Vt,hydrate:void 0,createApp:mm(Vt)}}function oo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Li({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Lm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Xh(n,t,e=!1){const i=n.children,s=t.children;if(Ot(i)&&Ot(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Zn(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&Xh(a,o)),o.type===ka&&(o.patchFlag===-1&&(o=s[r]=Zn(o)),o.el=a.el),o.type===qe&&!o.el&&(o.el=a.el)}}function Dm(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function qh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qh(t)}function cu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Yh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Yh(t.subTree):null}const $h=n=>n.__isSuspense;function Im(n,t){t&&t.pendingBranch?Ot(n)?t.effects.push(...n):t.effects.push(n):Vp(n)}const dn=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),rr=[];let tn=null;function ei(n=!1){rr.push(tn=n?null:[])}function Um(){rr.pop(),tn=rr[rr.length-1]||null}let dr=1;function Sa(n,t=!1){dr+=n,n<0&&tn&&t&&(tn.hasOnce=!0)}function jh(n){return n.dynamicChildren=dr>0?tn||Ms:null,Um(),dr>0&&tn&&tn.push(n),n}function ji(n,t,e,i,s,r){return jh(It(n,t,e,i,s,r,!0))}function Kh(n,t,e,i,s){return jh(Re(n,t,e,i,s,!0))}function Ma(n){return n?n.__v_isVNode===!0:!1}function Gi(n,t){return n.type===t.type&&n.key===t.key}const Zh=({key:n})=>n??null,aa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Se(n)||ve(n)||Yt(n)?{i:Dn,r:n,k:t,f:!!e}:n:null);function It(n,t=null,e=null,i=0,s=null,r=n===dn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Zh(t),ref:t&&aa(t),scopeId:Sh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return o?(xc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),dr>0&&!a&&tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&tn.push(l),l}const Re=Nm;function Nm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===am)&&(n=qe),Ma(n)){const o=Ai(n,t,!0);return e&&xc(o,e),dr>0&&!r&&tn&&(o.shapeFlag&6?tn[tn.indexOf(n)]=o:tn.push(o)),o.patchFlag=-2,o}if(qm(n)&&(n=n.__vccOpts),t){t=Fm(t);let{class:o,style:l}=t;o&&!Se(o)&&(t.class=bi(o)),ie(l)&&(Oa(l)&&!Ot(l)&&(l=Pe({},l)),t.style=Ua(l))}const a=Se(n)?1:$h(n)?128:bh(n)?64:ie(n)?4:Yt(n)?2:0;return It(n,t,e,i,s,a,r,!0)}function Fm(n){return n?Oa(n)||zh(n)?Pe({},n):n:null}function Ai(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?Bm(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Zh(c),ref:t&&t.ref?e&&r?Ot(r)?r.concat(aa(t)):[r,aa(t)]:aa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==dn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ai(n.ssContent),ssFallback:n.ssFallback&&Ai(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hr(u,l.clone(u)),u}function sl(n=" ",t=0){return Re(ka,null,n,t)}function uu(n,t){const e=Re(ra,null,n);return e.staticCount=t,e}function Om(n="",t=!1){return t?(ei(),Kh(qe,null,n)):Re(qe,null,n)}function Cn(n){return n==null||typeof n=="boolean"?Re(qe):Ot(n)?Re(dn,null,n.slice()):Ma(n)?Zn(n):Re(ka,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ai(n)}function xc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),xc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!zh(t)?t._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Yt(t)?(t={default:t,_ctx:Dn},e=32):(t=String(t),i&64?(e=16,t=[sl(t)]):e=8);n.children=t,n.shapeFlag|=e}function Bm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=bi([t.class,i.class]));else if(s==="style")t.style=Ua([t.style,i.style]);else if(Pa(s)){const r=t[s],a=i[s];a&&r!==a&&!(Ot(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=i[s])}return t}function yn(n,t,e,i=null){Sn(n,t,7,[e,i])}const zm=Uh();let Vm=0;function Hm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||zm,r={uid:Vm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hh(i,s),emitsOptions:Nh(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=_m.bind(null,r),n.ce&&n.ce(r),r}let Ye=null;const Sc=()=>Ye||Dn;let ya,rl;{const n=Ia(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ya=t("__VUE_INSTANCE_SETTERS__",e=>Ye=e),rl=t("__VUE_SSR_SETTERS__",e=>pr=e)}const Er=n=>{const t=Ye;return ya(n),n.scope.on(),()=>{n.scope.off(),ya(t)}},fu=()=>{Ye&&Ye.scope.off(),ya(null)};function Jh(n){return n.vnode.shapeFlag&4}let pr=!1;function Gm(n,t=!1,e=!1){t&&rl(t);const{props:i,children:s}=n.vnode,r=Jh(n);Em(n,i,r,t),wm(n,s,e||t);const a=r?km(n,t):void 0;return t&&rl(!1),a}function km(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lm);const{setup:i}=e;if(i){si();const s=n.setupContext=i.length>1?Xm(n):null,r=Er(n),a=yr(i,n,0,[n.props,s]),o=kf(a);if(ri(),r(),(o||n.sp)&&!ir(n)&&Ph(n),o){if(a.then(fu,fu),t)return a.then(l=>{hu(n,l)}).catch(l=>{Ba(l,n,0)});n.asyncDep=a}else hu(n,a)}else Qh(n)}function hu(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=ph(t)),Qh(n)}function Qh(n,t,e){const i=n.type;n.render||(n.render=i.render||Nn);{const s=Er(n);si();try{cm(n)}finally{ri(),s()}}}const Wm={get(n,t){return Be(n,"get",""),n[t]}};function Xm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Wm),slots:n.slots,emit:n.emit,expose:t}}function Mc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ph(dc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in sr)return sr[e](n)},has(t,e){return e in t||e in sr}})):n.proxy}function qm(n){return Yt(n)&&"__vccOpts"in n}const Ti=(n,t)=>Np(n,t,pr);function Ym(n,t,e){try{Sa(-1);const i=arguments.length;return i===2?ie(t)&&!Ot(t)?Ma(t)?Re(n,null,[t]):Re(n,t):Re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ma(e)&&(e=[e]),Re(n,t,e))}finally{Sa(1)}}const $m="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let al;const du=typeof window<"u"&&window.trustedTypes;if(du)try{al=du.createPolicy("vue",{createHTML:n=>n})}catch{}const td=al?n=>al.createHTML(n):n=>n,jm="http://www.w3.org/2000/svg",Km="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,pu=Kn&&Kn.createElement("template"),Zm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Kn.createElementNS(jm,n):t==="mathml"?Kn.createElementNS(Km,n):e?Kn.createElement(n,{is:e}):Kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{pu.innerHTML=td(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=pu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},hi="transition",Vs="animation",mr=Symbol("_vtc"),ed={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jm=Pe({},Th,ed),Qm=n=>(n.displayName="Transition",n.props=Jm,n),tg=Qm((n,{slots:t})=>Ym(jp,eg(n),t)),Di=(n,t=[])=>{Ot(n)?n.forEach(e=>e(...t)):n&&n(...t)},mu=n=>n?Ot(n)?n.some(t=>t.length>1):n.length>1:!1;function eg(n){const t={};for(const D in n)D in ed||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,_=ng(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:A,onLeave:b,onLeaveCancelled:w,onBeforeAppear:P=p,onAppear:I=E,onAppearCancelled:v=A}=t,S=(D,O,Y,G)=>{D._enterCancelled=G,Ii(D,O?u:o),Ii(D,O?c:a),Y&&Y()},H=(D,O)=>{D._isLeaving=!1,Ii(D,h),Ii(D,d),Ii(D,f),O&&O()},R=D=>(O,Y)=>{const G=D?I:E,V=()=>S(O,D,Y);Di(G,[O,V]),gu(()=>{Ii(O,D?l:r),Wn(O,D?u:o),mu(G)||_u(O,i,x,V)})};return Pe(t,{onBeforeEnter(D){Di(p,[D]),Wn(D,r),Wn(D,a)},onBeforeAppear(D){Di(P,[D]),Wn(D,l),Wn(D,c)},onEnter:R(!1),onAppear:R(!0),onLeave(D,O){D._isLeaving=!0;const Y=()=>H(D,O);Wn(D,h),D._enterCancelled?(Wn(D,f),Su(D)):(Su(D),Wn(D,f)),gu(()=>{D._isLeaving&&(Ii(D,h),Wn(D,d),mu(b)||_u(D,i,m,Y))}),Di(b,[D,Y])},onEnterCancelled(D){S(D,!1,void 0,!0),Di(A,[D])},onAppearCancelled(D){S(D,!0,void 0,!0),Di(v,[D])},onLeaveCancelled(D){H(D),Di(w,[D])}})}function ng(n){if(n==null)return null;if(ie(n))return[lo(n.enter),lo(n.leave)];{const t=lo(n);return[t,t]}}function lo(n){return Qd(n)}function Wn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[mr]||(n[mr]=new Set)).add(t)}function Ii(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[mr];e&&(e.delete(t),e.size||(n[mr]=void 0))}function gu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ig=0;function _u(n,t,e,i){const s=n._endId=++ig,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=sg(n,t);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,f)}function sg(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),s=i(`${hi}Delay`),r=i(`${hi}Duration`),a=vu(s,r),o=i(`${Vs}Delay`),l=i(`${Vs}Duration`),c=vu(o,l);let u=null,h=0,f=0;t===hi?a>0&&(u=hi,h=a,f=r.length):t===Vs?c>0&&(u=Vs,h=c,f=l.length):(h=Math.max(a,c),u=h>0?a>c?hi:Vs:null,f=u?u===hi?r.length:l.length:0);const d=u===hi&&/\b(?:transform|all)(?:,|$)/.test(i(`${hi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function vu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>xu(e)+xu(n[i])))}function xu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Su(n){return(n?n.ownerDocument:document).body.offsetHeight}function rg(n,t,e){const i=n[mr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Mu=Symbol("_vod"),ag=Symbol("_vsh"),og=Symbol(""),lg=/(?:^|;)\s*display\s*:/;function cg(n,t,e){const i=n.style,s=Se(e);let r=!1;if(e&&!s){if(t)if(Se(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&oa(i,o,"")}else for(const a in t)e[a]==null&&oa(i,a,"");for(const a in e)a==="display"&&(r=!0),oa(i,a,e[a])}else if(s){if(t!==e){const a=i[og];a&&(e+=";"+a),i.cssText=e,r=lg.test(e)}}else t&&n.removeAttribute("style");Mu in n&&(n[Mu]=r?i.display:"",n[ag]&&(i.display="none"))}const yu=/\s*!important$/;function oa(n,t,e){if(Ot(e))e.forEach(i=>oa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=ug(n,t);yu.test(e)?n.setProperty(Zi(i),e.replace(yu,""),"important"):n[i]=e}}const Eu=["Webkit","Moz","ms"],co={};function ug(n,t){const e=co[t];if(e)return e;let i=_n(t);if(i!=="filter"&&i in n)return co[t]=i;i=qf(i);for(let s=0;s<Eu.length;s++){const r=Eu[s]+i;if(r in n)return co[t]=r}return t}const bu="http://www.w3.org/1999/xlink";function Tu(n,t,e,i,s,r=rp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(bu,t.slice(6,t.length)):n.setAttributeNS(bu,t,e):e==null||r&&!$f(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Bn(e)?String(e):e)}function Au(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?td(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=$f(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function fg(n,t,e,i){n.addEventListener(t,e,i)}function hg(n,t,e,i){n.removeEventListener(t,e,i)}const wu=Symbol("_vei");function dg(n,t,e,i,s=null){const r=n[wu]||(n[wu]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=pg(t);if(i){const c=r[t]=_g(i,s);fg(n,o,c,l)}else a&&(hg(n,o,a,l),r[t]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function pg(n){let t;if(Cu.test(n)){t={};let i;for(;i=n.match(Cu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zi(n.slice(2)),t]}let uo=0;const mg=Promise.resolve(),gg=()=>uo||(mg.then(()=>uo=0),uo=Date.now());function _g(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Sn(vg(i,e.value),t,5,[i])};return e.value=n,e.attached=gg(),e}function vg(n,t){if(Ot(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ru=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xg=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?rg(n,i,a):t==="style"?cg(n,e,i):Pa(t)?sc(t)||dg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sg(n,t,i,a))?(Au(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Tu(n,t,i,a,r,t!=="value")):n._isVueCE&&(Mg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(i)))?Au(n,_n(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Tu(n,t,i,a))};function Sg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ru(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ru(t)&&Se(e)?!1:t in n}function Mg(n,t){const e=n._def.props;if(!e)return!1;const i=_n(t);return Array.isArray(e)?e.some(s=>_n(s)===i):Object.keys(e).some(s=>_n(s)===i)}const yg=Pe({patchProp:xg},Zm);let Pu;function Eg(){return Pu||(Pu=Rm(yg))}const bg=((...n)=>{const t=Eg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Ag(i);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Tg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Tg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Se(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nd;const Wa=n=>nd=n,id=Symbol();function ol(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ar;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ar||(ar={}));function wg(){const n=Jf(!0),t=n.run(()=>Es({}));let e=[],i=[];const s=dc({install(r){Wa(s),s._a=r,r.provide(id,s),r.config.globalProperties.$pinia=s,i.forEach(a=>e.push(a)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const sd=()=>{};function Lu(n,t,e,i=sd){n.add(t);const s=()=>{n.delete(t)&&i()};return!e&&Qf()&&op(s),s}function ns(n,...t){n.forEach(e=>{e(...t)})}const Cg=n=>n(),Du=Symbol(),fo=Symbol();function ll(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];ol(s)&&ol(i)&&n.hasOwnProperty(e)&&!ve(i)&&!ti(i)?n[e]=ll(s,i):n[e]=i}return n}const Rg=Symbol();function Pg(n){return!ol(n)||!Object.prototype.hasOwnProperty.call(n,Rg)}const{assign:xi}=Object;function Lg(n){return!!(ve(n)&&n.effect)}function Dg(n,t,e,i){const{state:s,actions:r,getters:a}=t,o=e.state.value[n];let l;function c(){o||(e.state.value[n]=s?s():{});const u=Lp(e.state.value[n]);return xi(u,r,Object.keys(a||{}).reduce((h,f)=>(h[f]=dc(Ti(()=>{Wa(e);const d=e._s.get(n);return a[f].call(d,d)})),h),{}))}return l=rd(n,c,t,e,i,!0),l}function rd(n,t,e={},i,s,r){let a;const o=xi({actions:{}},e),l={deep:!0};let c,u,h=new Set,f=new Set,d;const _=i.state.value[n];!r&&!_&&(i.state.value[n]={});let x;function m(v){let S;c=u=!1,typeof v=="function"?(v(i.state.value[n]),S={type:ar.patchFunction,storeId:n,events:d}):(ll(i.state.value[n],v),S={type:ar.patchObject,payload:v,storeId:n,events:d});const H=x=Symbol();gh().then(()=>{x===H&&(c=!0)}),u=!0,ns(h,S,i.state.value[n])}const p=r?function(){const{state:S}=e,H=S?S():{};this.$patch(R=>{xi(R,H)})}:sd;function E(){a.stop(),h.clear(),f.clear(),i._s.delete(n)}const A=(v,S="")=>{if(Du in v)return v[fo]=S,v;const H=function(){Wa(i);const R=Array.from(arguments),D=new Set,O=new Set;function Y(N){D.add(N)}function G(N){O.add(N)}ns(f,{args:R,name:H[fo],store:w,after:Y,onError:G});let V;try{V=v.apply(this&&this.$id===n?this:w,R)}catch(N){throw ns(O,N),N}return V instanceof Promise?V.then(N=>(ns(D,N),N)).catch(N=>(ns(O,N),Promise.reject(N))):(ns(D,V),V)};return H[Du]=!0,H[fo]=S,H},b={_p:i,$id:n,$onAction:Lu.bind(null,f),$patch:m,$reset:p,$subscribe(v,S={}){const H=Lu(h,v,S.detached,()=>R()),R=a.run(()=>er(()=>i.state.value[n],D=>{(S.flush==="sync"?u:c)&&v({storeId:n,type:ar.direct,events:d},D)},xi({},l,S)));return H},$dispose:E},w=Fa(b);i._s.set(n,w);const I=(i._a&&i._a.runWithContext||Cg)(()=>i._e.run(()=>(a=Jf()).run(()=>t({action:A}))));for(const v in I){const S=I[v];if(ve(S)&&!Lg(S)||ti(S))r||(_&&Pg(S)&&(ve(S)?S.value=_[v]:ll(S,_[v])),i.state.value[n][v]=S);else if(typeof S=="function"){const H=A(S,v);I[v]=H,o.actions[v]=S}}return xi(w,I),xi(Jt(w),I),Object.defineProperty(w,"$state",{get:()=>i.state.value[n],set:v=>{m(S=>{xi(S,v)})}}),i._p.forEach(v=>{xi(w,a.run(()=>v({store:w,app:i._a,pinia:i,options:o})))}),_&&r&&e.hydrate&&e.hydrate(w.$state,_),c=!0,u=!0,w}/*! #__NO_SIDE_EFFECTS__ */function Ig(n,t,e){let i;const s=typeof t=="function";i=s?e:t;function r(a,o){const l=Gp();return a=a||(l?tr(id,null):null),a&&Wa(a),a=nd,a._s.has(n)||(s?rd(n,t,i,a):Dg(n,i,a)),a._s.get(n)}return r.$id=n,r}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="183",Ug=0,Iu=1,Ng=2,la=1,Fg=2,js=3,wi=0,$e=1,pn=2,ni=0,Ts=1,Ea=2,Uu=3,Nu=4,Og=5,ki=100,Bg=101,zg=102,Vg=103,Hg=104,Gg=200,kg=201,Wg=202,Xg=203,cl=204,ul=205,qg=206,Yg=207,$g=208,jg=209,Kg=210,Zg=211,Jg=212,Qg=213,t_=214,fl=0,hl=1,dl=2,Rs=3,pl=4,ml=5,gl=6,_l=7,Ec=0,e_=1,n_=2,Fn=0,ad=1,od=2,ld=3,cd=4,ud=5,fd=6,hd=7,dd=300,Ki=301,Ps=302,ho=303,po=304,Xa=306,vl=1e3,Qn=1001,xl=1002,De=1003,i_=1004,Ir=1005,ze=1006,mo=1007,Xi=1008,Qe=1009,pd=1010,md=1011,gr=1012,bc=1013,zn=1014,In=1015,oi=1016,Tc=1017,Ac=1018,_r=1020,gd=35902,_d=35899,vd=1021,xd=1022,gn=1023,li=1026,qi=1027,Sd=1028,wc=1029,Ls=1030,Cc=1031,Rc=1033,ca=33776,ua=33777,fa=33778,ha=33779,Sl=35840,Ml=35841,yl=35842,El=35843,bl=36196,Tl=37492,Al=37496,wl=37488,Cl=37489,Rl=37490,Pl=37491,Ll=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,Vl=37817,Hl=37818,Gl=37819,kl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,$l=36283,jl=36284,Kl=36285,Zl=36286,s_=3200,Md=0,r_=1,yi="",an="srgb",Ds="srgb-linear",ba="linear",re="srgb",is=7680,Fu=519,a_=512,o_=513,l_=514,Pc=515,c_=516,u_=517,Lc=518,f_=519,Ou=35044,Bu="300 es",Un=2e3,vr=2001;function h_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){const n=Ta("canvas");return n.style.display="block",n}const zu={};function Vu(...n){const t="THREE."+n.shift();console.log(t,...n)}function yd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Bt(...n){n=yd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Qt(...n){n=yd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Aa(...n){const t=n.join(" ");t in zu||(zu[t]=!0,Bt(...n))}function p_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const m_={[fl]:hl,[dl]:gl,[pl]:_l,[Rs]:ml,[hl]:fl,[gl]:dl,[_l]:pl,[ml]:Rs};class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const or=Math.PI/180,xr=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function g_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function __(n,t,e){return n!==t?(e-n)/(t-n):0}function lr(n,t,e){return(1-e)*n+e*t}function v_(n,t,e,i){return lr(n,t,1-Math.exp(-e*i))}function x_(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function S_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function M_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function y_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function E_(n,t){return n+Math.random()*(t-n)}function b_(n){return n*(.5-Math.random())}function T_(n){n!==void 0&&(Hu=n);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A_(n){return n*or}function w_(n){return n*xr}function C_(n){return(n&n-1)===0&&n!==0}function R_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function P_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L_(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*u,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gu={DEG2RAD:or,RAD2DEG:xr,generateUUID:Ns,clamp:jt,euclideanModulo:Dc,mapLinear:g_,inverseLerp:__,lerp:lr,damp:v_,pingpong:x_,smoothstep:S_,smootherstep:M_,randInt:y_,randFloat:E_,randFloatSpread:b_,seededRandom:T_,degToRad:A_,radToDeg:w_,isPowerOfTwo:C_,ceilPowerOfTwo:R_,floorPowerOfTwo:P_,setQuaternionFromProperEuler:L_,normalize:ke,denormalize:vs};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],_=r[a+2],x=r[a+3];if(h!==x||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*x;m<0&&(f=-f,d=-d,_=-_,x=-x,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+x*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+x*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new z,ku=new Fs;class qt{constructor(t,e,i,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],x=s[0],m=s[3],p=s[6],E=s[1],A=s[4],b=s[7],w=s[2],P=s[5],I=s[8];return r[0]=a*x+o*E+l*w,r[3]=a*m+o*A+l*P,r[6]=a*p+o*b+l*I,r[1]=c*x+u*E+h*w,r[4]=c*m+u*A+h*P,r[7]=c*p+u*b+h*I,r[2]=f*x+d*E+_*w,r[5]=f*m+d*A+_*P,r[8]=f*p+d*b+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new qt,Wu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:t,whitePoint:i,transfer:ba,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:re,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const te=D_();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class I_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=Ta("canvas")),ss.width=t.width,ss.height=t.height;const s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ta("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let U_=0;class Ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let N_=0;const xo=new z;class He extends Us{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=Qn,s=Qn,r=ze,a=Xi,o=gn,l=Qe,c=He.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Ns(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vl:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vl:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=dd;He.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,b=(d+1)/2,w=(p+1)/2,P=(u+f)/4,I=(h+x)/4,v=(_+m)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=P/i,r=I/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=I/r,s=v/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F_ extends Us{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new He(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ic(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends F_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ed extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class O_ extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pe{constructor(t,e,i,s,r,a,o,l,c,u,h,f,d,_,x,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,d,_,x,m)}set(t,e,i,s,r,a,o,l,c,u,h,f,d,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,x=c*h;e[0]=f+x*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,x=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B_,t,z_)}lookAt(t,e,i){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),di.crossVectors(i,Ze),di.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),di.crossVectors(i,Ze)),di.normalize(),Ur.crossVectors(Ze,di),s[0]=di.x,s[4]=Ur.x,s[8]=Ze.x,s[1]=di.y,s[5]=Ur.y,s[9]=Ze.y,s[2]=di.z,s[6]=Ur.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],E=i[3],A=i[7],b=i[11],w=i[15],P=s[0],I=s[4],v=s[8],S=s[12],H=s[1],R=s[5],D=s[9],O=s[13],Y=s[2],G=s[6],V=s[10],N=s[14],it=s[3],at=s[7],St=s[11],Tt=s[15];return r[0]=a*P+o*H+l*Y+c*it,r[4]=a*I+o*R+l*G+c*at,r[8]=a*v+o*D+l*V+c*St,r[12]=a*S+o*O+l*N+c*Tt,r[1]=u*P+h*H+f*Y+d*it,r[5]=u*I+h*R+f*G+d*at,r[9]=u*v+h*D+f*V+d*St,r[13]=u*S+h*O+f*N+d*Tt,r[2]=_*P+x*H+m*Y+p*it,r[6]=_*I+x*R+m*G+p*at,r[10]=_*v+x*D+m*V+p*St,r[14]=_*S+x*O+m*N+p*Tt,r[3]=E*P+A*H+b*Y+w*it,r[7]=E*I+A*R+b*G+w*at,r[11]=E*v+A*D+b*V+w*St,r[15]=E*S+A*O+b*N+w*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],x=t[7],m=t[11],p=t[15],E=l*d-c*f,A=o*d-c*h,b=o*f-l*h,w=a*d-c*u,P=a*f-l*u,I=a*h-o*u;return e*(x*E-m*A+p*b)-i*(_*E-m*w+p*P)+s*(_*A-x*w+p*I)-r*(_*b-x*P+m*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],x=t[13],m=t[14],p=t[15],E=e*o-i*a,A=e*l-s*a,b=e*c-r*a,w=i*l-s*o,P=i*c-r*o,I=s*c-r*l,v=u*x-h*_,S=u*m-f*_,H=u*p-d*_,R=h*m-f*x,D=h*p-d*x,O=f*p-d*m,Y=E*O-A*D+b*R+w*H-P*S+I*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/Y;return t[0]=(o*O-l*D+c*R)*G,t[1]=(s*D-i*O-r*R)*G,t[2]=(x*I-m*P+p*w)*G,t[3]=(f*P-h*I-d*w)*G,t[4]=(l*H-a*O-c*S)*G,t[5]=(e*O-s*H+r*S)*G,t[6]=(m*b-_*I-p*A)*G,t[7]=(u*I-f*b+d*A)*G,t[8]=(a*D-o*H+c*v)*G,t[9]=(i*H-e*D-r*v)*G,t[10]=(_*P-x*b+p*E)*G,t[11]=(h*b-u*P-d*E)*G,t[12]=(o*S-a*R-l*v)*G,t[13]=(e*R-i*S+s*v)*G,t[14]=(x*A-_*w-m*E)*G,t[15]=(u*w-h*A+f*E)*G,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,x=a*u,m=a*h,p=o*h,E=l*c,A=l*u,b=l*h,w=i.x,P=i.y,I=i.z;return s[0]=(1-(x+p))*w,s[1]=(d+b)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(d-b)*P,s[5]=(1-(f+p))*P,s[6]=(m+E)*P,s[7]=0,s[8]=(_+A)*I,s[9]=(m-E)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const c=1/a,u=1/o,h=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Un,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===Un)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===vr)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Un,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===Un)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===vr)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const rs=new z,un=new pe,B_=new z(0,0,0),z_=new z(1,1,1),di=new z,Ur=new z,Ze=new z,qu=new pe,Yu=new Fs;class Vn{constructor(t=0,e=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V_=0;const $u=new z,as=new Fs,Xn=new pe,Nr=new z,Hs=new z,H_=new z,G_=new Fs,ju=new z(1,0,0),Ku=new z(0,1,0),Zu=new z(0,0,1),Ju={type:"added"},k_={type:"removed"},os={type:"childadded",child:null},So={type:"childremoved",child:null};class ye extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new z,e=new Vn,i=new Fs,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Hs,Nr,this.up):Xn.lookAt(Nr,Hs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Xn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ju),os.child=t,this.dispatchEvent(os),os.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k_),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ju),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,H_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,G_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ye.DEFAULT_UP=new z(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xs extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function yo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Dc(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const i=bd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return te.workingToColorSpace(Fe.copy(this),t),Math.round(jt(Fe.r*255,0,255))*65536+Math.round(jt(Fe.g*255,0,255))*256+Math.round(jt(Fe.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Fe.copy(this),e);const i=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=an){te.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,s=Fe.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Fr);const i=lr(pi.h,Fr.h,e),s=lr(pi.s,Fr.s,e),r=lr(pi.l,Fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new kt;kt.NAMES=bd;class X_ extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fn=new z,qn=new z,Eo=new z,Yn=new z,ls=new z,cs=new z,Qu=new z,bo=new z,To=new z,Ao=new z,wo=new _e,Co=new _e,Ro=new _e;class mn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),qn.subVectors(i,e),Eo.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(qn),l=fn.dot(Eo),c=qn.dot(qn),u=qn.dot(Eo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return wo.setScalar(0),Co.setScalar(0),Ro.setScalar(0),wo.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,i),Ro.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(wo,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),qn.subVectors(t,e),fn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),fn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ls.subVectors(s,i),cs.subVectors(r,i),bo.subVectors(t,i);const l=ls.dot(bo),c=cs.dot(bo);if(l<=0&&c<=0)return e.copy(i);To.subVectors(t,s);const u=ls.dot(To),h=cs.dot(To);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(ls,a);Ao.subVectors(t,r);const d=ls.dot(Ao),_=cs.dot(Ao);if(_>=0&&d<=_)return e.copy(r);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(cs,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Qu.subVectors(r,s),o=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(Qu,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class br{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Br.subVectors(this.max,Gs),us.subVectors(t.a,Gs),fs.subVectors(t.b,Gs),hs.subVectors(t.c,Gs),mi.subVectors(fs,us),gi.subVectors(hs,fs),Ui.subVectors(us,hs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ui.z,Ui.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ui.z,0,-Ui.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ui.y,Ui.x,0];return!Po(e,us,fs,hs,Br)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,us,fs,hs,Br))?!1:(zr.crossVectors(mi,gi),e=[zr.x,zr.y,zr.z],Po(e,us,fs,hs,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new z,new z,new z,new z,new z,new z,new z,new z],hn=new z,Or=new br,us=new z,fs=new z,hs=new z,mi=new z,gi=new z,Ui=new z,Gs=new z,Br=new z,zr=new z,Ni=new z;function Po(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ni.fromArray(n,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Me=new z,Vr=new Zt;let q_=0;class nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ou,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ou&&(t.usage=this.usage),t}}class Td extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ad extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Y_=new br,ks=new z,Lo=new z;class Tr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Y_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Lo)),this.expandByPoint(ks.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $_=0;const rn=new pe,Do=new ye,ds=new z,Je=new br,Ws=new br,we=new z;class Ie extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h_(t)?Ad:Td)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Je.min,Ws.min),Je.expandByPoint(we),we.addVectors(Je.max,Ws.max),Je.expandByPoint(we)):(Je.expandByPoint(Ws.min),Je.expandByPoint(Ws.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),we.add(ds)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new z,l[v]=new z;const c=new z,u=new z,h=new z,f=new Zt,d=new Zt,_=new Zt,x=new z,m=new z;function p(v,S,H){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,H),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,H),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(R),o[v].add(x),o[S].add(x),o[H].add(x),l[v].add(m),l[S].add(m),l[H].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,S=E.length;v<S;++v){const H=E[v],R=H.start,D=H.count;for(let O=R,Y=R+D;O<Y;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const A=new z,b=new z,w=new z,P=new z;function I(v){w.fromBufferAttribute(s,v),P.copy(w);const S=o[v];A.copy(S),A.sub(w.multiplyScalar(w.dot(S))).normalize(),b.crossVectors(P,S);const R=b.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,R)}for(let v=0,S=E.length;v<S;++v){const H=E[v],R=H.start,D=H.count;for(let O=R,Y=R+D;O<Y;O+=3)I(t.getX(O+0)),I(t.getX(O+1)),I(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new nn(f,u,h)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let j_=0;class Ji extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ts,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jn=new z,Io=new z,Hr=new z,_i=new z,Uo=new z,Gr=new z,No=new z;class qa{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Io.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),o=_i.dot(this.direction),l=-_i.dot(Hr),c=_i.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Io).addScaledVector(Hr,f),d}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,s,r){Uo.subVectors(e,t),Gr.subVectors(i,t),No.crossVectors(Uo,Gr);let a=this.direction.dot(No),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(Gr.crossVectors(_i,Gr));if(l<0)return null;const c=o*this.direction.dot(Uo.cross(_i));if(c<0||l+c>a)return null;const u=-o*_i.dot(No);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ss extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tf=new pe,Fi=new qa,kr=new Tr,ef=new z,Wr=new z,Xr=new z,qr=new z,Fo=new z,Yr=new z,nf=new z,$r=new z;class Ve extends ye{constructor(t=new Ie,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Fo.fromBufferAttribute(h,t),a?Yr.addScaledVector(Fo,u):Yr.addScaledVector(Fo.sub(e),u))}e.add(Yr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(kr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(kr,ef)===null||Fi.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(tf),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,w=A;b<w;b+=3){const P=o.getX(b),I=o.getX(b+1),v=o.getX(b+2);s=jr(this,p,t,i,c,u,h,P,I,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const E=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=jr(this,a,t,i,c,u,h,E,A,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,w=A;b<w;b+=3){const P=b,I=b+1,v=b+2;s=jr(this,p,t,i,c,u,h,P,I,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const E=m,A=m+1,b=m+2;s=jr(this,a,t,i,c,u,h,E,A,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function K_(n,t,e,i,s,r,a,o){let l;if(t.side===$e?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;$r.copy(o),$r.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:n}}function jr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Wr),n.getVertexPosition(l,Xr),n.getVertexPosition(c,qr);const u=K_(n,t,e,i,Wr,Xr,qr,nf);if(u){const h=new z;mn.getBarycoord(nf,Wr,Xr,qr,h),s&&(u.uv=mn.getInterpolatedAttribute(s,o,l,c,h,new Zt)),r&&(u.uv1=mn.getInterpolatedAttribute(r,o,l,c,h,new Zt)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};mn.getNormal(Wr,Xr,qr,f.normal),u.face=f,u.barycoord=h}return u}class Z_ extends He{constructor(t=null,e=1,i=1,s,r,a,o,l,c=De,u=De,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oo=new z,J_=new z,Q_=new qt;class Hi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oo.subVectors(i,e).cross(J_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Q_.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Tr,t0=new Zt(.5,.5),Kr=new z;class Nc{constructor(t=new Hi,e=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],x=r[9],m=r[10],p=r[11],E=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-a,d-u,p-_,w-E).normalize(),s[1].setComponents(c+a,d+u,p+_,w+E).normalize(),s[2].setComponents(c+o,d+h,p+x,w+A).normalize(),s[3].setComponents(c-o,d-h,p-x,w-A).normalize(),i)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,d-f,p-m,w-b).normalize();else if(s[4].setComponents(c-l,d-f,p-m,w-b).normalize(),e===Un)s[5].setComponents(c+l,d+f,p+m,w+b).normalize();else if(e===vr)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=t0.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wd extends Ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wa=new z,Ca=new z,sf=new pe,Xs=new qa,Zr=new Tr,Bo=new z,rf=new z;class e0 extends ye{constructor(t=new Ie,e=new wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)wa.fromBufferAttribute(e,s-1),Ca.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=wa.distanceTo(Ca);t.setAttribute("lineDistance",new Ee(i,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;sf.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(sf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=d,m=_-1;x<m;x+=c){const p=u.getX(x),E=u.getX(x+1),A=Jr(this,t,Xs,l,p,E,x);A&&e.push(A)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(d),p=Jr(this,t,Xs,l,x,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=d,m=_-1;x<m;x+=c){const p=Jr(this,t,Xs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Jr(this,t,Xs,l,_-1,d,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ca.fromBufferAttribute(o,r),e.distanceSqToSegment(wa,Ca,Bo,rf)>i)return;Bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:rf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Cd extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const af=new pe,Jl=new qa,Qr=new Tr,ta=new z;class Rd extends ye{constructor(t=new Ie,e=new Cd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;af.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(af);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,x=d;_<x;_++){const m=c.getX(_);ta.fromBufferAttribute(h,m),of(ta,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,x=d;_<x;_++)ta.fromBufferAttribute(h,_),of(ta,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function of(n,t,e,i,s,r,a){const o=Jl.distanceSqToPoint(n);if(o<e){const l=new z;Jl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Pd extends He{constructor(t=[],e=Ki,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lf extends He{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sr extends He{constructor(t,e,i=zn,s,r,a,o=De,l=De,c,u=li,h=1){if(u!==li&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class n0 extends Sr{constructor(t,e=zn,i=Ki,s,r,a=De,o=De,l,c=li){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ld extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ar extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function _(x,m,p,E,A,b,w,P,I,v,S){const H=b/I,R=w/v,D=b/2,O=w/2,Y=P/2,G=I+1,V=v+1;let N=0,it=0;const at=new z;for(let St=0;St<V;St++){const Tt=St*R-O;for(let gt=0;gt<G;gt++){const Gt=gt*H-D;at[x]=Gt*E,at[m]=Tt*A,at[p]=Y,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[p]=P>0?1:-1,u.push(at.x,at.y,at.z),h.push(gt/I),h.push(1-St/v),N+=1}}for(let St=0;St<v;St++)for(let Tt=0;Tt<I;Tt++){const gt=f+Tt+G*St,Gt=f+Tt+G*(St+1),ue=f+(Tt+1)+G*(St+1),le=f+(Tt+1)+G*St;l.push(gt,Gt,le),l.push(Gt,ue,le),it+=6}o.addGroup(d,it,S),d+=it,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fc extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const x=[],m=i/2;let p=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function E(){const b=new z,w=new z;let P=0;const I=(e-t)/i;for(let v=0;v<=r;v++){const S=[],H=v/r,R=H*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,Y=O*l+o,G=Math.sin(Y),V=Math.cos(Y);w.x=R*G,w.y=-H*i+m,w.z=R*V,h.push(w.x,w.y,w.z),b.set(G,I,V).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-H),S.push(_++)}x.push(S)}for(let v=0;v<s;v++)for(let S=0;S<r;S++){const H=x[S][v],R=x[S+1][v],D=x[S+1][v+1],O=x[S][v+1];(t>0||S!==0)&&(u.push(H,R,O),P+=3),(e>0||S!==r-1)&&(u.push(R,D,O),P+=3)}c.addGroup(p,P,0),p+=P}function A(b){const w=_,P=new Zt,I=new z;let v=0;const S=b===!0?t:e,H=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*H,0),f.push(0,H,0),d.push(.5,.5),_++;const R=_;for(let D=0;D<=s;D++){const Y=D/s*l+o,G=Math.cos(Y),V=Math.sin(Y);I.x=S*V,I.y=m*H,I.z=S*G,h.push(I.x,I.y,I.z),f.push(0,H,0),P.x=G*.5+.5,P.y=V*.5*H+.5,d.push(P.x,P.y),_++}for(let D=0;D<s;D++){const O=w+D,Y=R+D;b===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class i0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Zt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new z,s=[],r=[],a=[],o=new z,l=new pe;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function s0(n,t){const e=1-n;return e*e*t}function r0(n,t){return 2*(1-n)*n*t}function a0(n,t){return n*n*t}function zo(n,t,e,i){return s0(n,t)+r0(n,e)+a0(n,i)}class o0 extends i0{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(zo(t,s.x,r.x,a.x),zo(t,s.y,r.y,a.y),zo(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ya extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let A=0;A<c;A++){const b=A*h-r;_.push(b,-E,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const A=E+c*p,b=E+c*(p+1),w=E+1+c*(p+1),P=E+1+c*p;d.push(A,b,P),d.push(b,w,P)}this.setIndex(d),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ra extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new z,_=new Zt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const E=p+m,A=E,b=E+i+1,w=E+i+2,P=E+1;o.push(A,b,P),o.push(b,w,P)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ws extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const E=[],A=p/i;let b=0;p===0&&a===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let w=0;w<=e;w++){const P=w/e;h.x=-t*Math.cos(s+P*r)*Math.sin(a+A*o),h.y=t*Math.cos(a+A*o),h.z=t*Math.sin(s+P*r)*Math.sin(a+A*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(P+b,1-A),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const A=u[p][E+1],b=u[p][E],w=u[p+1][E],P=u[p+1][E+1];(p!==0||a>0)&&d.push(A,b,P),(p!==i-1||l<Math.PI)&&d.push(b,w,P)}this.setIndex(d),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const s in i)t[s]=i[s]}return t}function l0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const c0={clone:Is,merge:We};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class h0 extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cf extends Ji{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ec,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class d0 extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p0 extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Oc extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class m0 extends Oc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Vo=new pe,uf=new z,ff=new z;class g0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===vr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ea=new z,na=new Fs,En=new z;class Id extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,En.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ea,na,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vi=new z,hf=new Zt,df=new Zt;class on extends Id{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,hf,df),e.subVectors(df,hf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Bc extends Id{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _0 extends g0{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pf extends Oc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new _0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class v0 extends Oc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ps=-90,ms=1;class x0 extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new on(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new on(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new on(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new on(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new on(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class S0 extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const mf=new pe;class M0{constructor(t,e,i=0,s=1/0){this.ray=new qa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(t,e=!0,i=[]){return Ql(t,this,i,e),i.sort(gf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ql(t[s],this,i,e);return i.sort(gf),i}}function gf(n,t){return n.distance-t.distance}function Ql(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ql(r[a],t,e,!0)}}class y0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class E0{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function _f(n,t,e,i){const s=b0(i);switch(e){case vd:return n*t;case Sd:return n*t/s.components*s.byteLength;case wc:return n*t/s.components*s.byteLength;case Ls:return n*t*2/s.components*s.byteLength;case Cc:return n*t*2/s.components*s.byteLength;case xd:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case Rc:return n*t*4/s.components*s.byteLength;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:case El:return Math.max(n,16)*Math.max(t,8)/4;case Sl:case yl:return Math.max(n,8)*Math.max(t,8)/2;case bl:case Tl:case wl:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Al:case Rl:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $l:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(n){switch(n){case Qe:case pd:return{byteLength:1,components:1};case gr:case md:case oi:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case zn:case bc:case In:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ud(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function T0(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],x=h[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,vv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
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
#endif`,jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ix=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yx=`#define PHONG
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
}`,$x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,jx=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Zx=`#define TOON
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
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Qx=`uniform float size;
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
}`,tS=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,nS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,iS=`uniform float rotation;
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
}`,sS=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:A0,alphahash_pars_fragment:w0,alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:I0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:V0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:$0,common:j0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:tv,emissivemap_pars_fragment:ev,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:av,envmap_pars_vertex:ov,envmap_physical_pars_fragment:vv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:fv,fog_pars_fragment:hv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:_v,lights_toon_fragment:xv,lights_toon_pars_fragment:Sv,lights_phong_fragment:Mv,lights_phong_pars_fragment:yv,lights_physical_fragment:Ev,lights_physical_pars_fragment:bv,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:wv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Lv,map_fragment:Dv,map_pars_fragment:Iv,map_particle_fragment:Uv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Bv,morphcolor_vertex:zv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Gv,normal_fragment_begin:kv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:Yv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:jv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Jv,opaque_fragment:Qv,packing:tx,premultiplied_alpha_fragment:ex,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:fx,skinning_pars_vertex:hx,skinning_vertex:dx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:Sx,uv_pars_fragment:Mx,uv_pars_vertex:yx,uv_vertex:Ex,worldpos_vertex:bx,background_vert:Tx,background_frag:Ax,backgroundCube_vert:wx,backgroundCube_frag:Cx,cube_vert:Rx,cube_frag:Px,depth_vert:Lx,depth_frag:Dx,distance_vert:Ix,distance_frag:Ux,equirect_vert:Nx,equirect_frag:Fx,linedashed_vert:Ox,linedashed_frag:Bx,meshbasic_vert:zx,meshbasic_frag:Vx,meshlambert_vert:Hx,meshlambert_frag:Gx,meshmatcap_vert:kx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:$x,meshphysical_vert:jx,meshphysical_frag:Kx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:tS,shadow_vert:eS,shadow_frag:nS,sprite_vert:iS,sprite_frag:sS},xt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Rn={basic:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:We([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:We([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:We([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:We([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:We([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:We([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:We([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:We([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:We([xt.common,xt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:We([xt.lights,xt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Rn.physical={uniforms:We([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ia={r:0,b:0,g:0},Bi=new Vn,rS=new pe;function aS(n,t,e,i,s,r){const a=new kt(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function d(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const b=E.backgroundBlurriness>0;A=t.get(A,b)}return A}function _(E){let A=!1;const b=d(E);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(E,A){const b=d(A);b&&(b.isCubeTexture||b.mapping===Xa)?(c===void 0&&(c=new Ve(new Ar(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Is(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Bi.copy(A.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Bi)),c.material.toneMapped=te.getTransfer(b.colorSpace)!==re,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ve(new Ya(2,2),new ln({name:"BackgroundMaterial",uniforms:Is(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=te.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(ia,Dd(n)),e.buffers.color.setClear(ia.r,ia.g,ia.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:x,dispose:p}}function oS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(R,D,O,Y,G){let V=!1;const N=h(R,Y,O,D);r!==N&&(r=N,c(r.object)),V=d(R,Y,O,G),V&&_(R,Y,O,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(R,D,O,Y),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function h(R,D,O,Y){const G=Y.wireframe===!0;let V=i[D.id];V===void 0&&(V={},i[D.id]=V);const N=R.isInstancedMesh===!0?R.id:0;let it=V[N];it===void 0&&(it={},V[N]=it);let at=it[O.id];at===void 0&&(at={},it[O.id]=at);let St=at[G];return St===void 0&&(St=f(l()),at[G]=St),St}function f(R){const D=[],O=[],Y=[];for(let G=0;G<e;G++)D[G]=0,O[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:Y,object:R,attributes:{},index:null}}function d(R,D,O,Y){const G=r.attributes,V=D.attributes;let N=0;const it=O.getAttributes();for(const at in it)if(it[at].location>=0){const Tt=G[at];let gt=V[at];if(gt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),Tt===void 0||Tt.attribute!==gt||gt&&Tt.data!==gt.data)return!0;N++}return r.attributesNum!==N||r.index!==Y}function _(R,D,O,Y){const G={},V=D.attributes;let N=0;const it=O.getAttributes();for(const at in it)if(it[at].location>=0){let Tt=V[at];Tt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const gt={};gt.attribute=Tt,Tt&&Tt.data&&(gt.data=Tt.data),G[at]=gt,N++}r.attributes=G,r.attributesNum=N,r.index=Y}function x(){const R=r.newAttributes;for(let D=0,O=R.length;D<O;D++)R[D]=0}function m(R){p(R,0)}function p(R,D){const O=r.newAttributes,Y=r.enabledAttributes,G=r.attributeDivisors;O[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),G[R]!==D&&(n.vertexAttribDivisor(R,D),G[R]=D)}function E(){const R=r.newAttributes,D=r.enabledAttributes;for(let O=0,Y=D.length;O<Y;O++)D[O]!==R[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function A(R,D,O,Y,G,V,N){N===!0?n.vertexAttribIPointer(R,D,O,G,V):n.vertexAttribPointer(R,D,O,Y,G,V)}function b(R,D,O,Y){x();const G=Y.attributes,V=O.getAttributes(),N=D.defaultAttributeValues;for(const it in V){const at=V[it];if(at.location>=0){let St=G[it];if(St===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Tt=St.normalized,gt=St.itemSize,Gt=t.get(St);if(Gt===void 0)continue;const ue=Gt.buffer,le=Gt.type,et=Gt.bytesPerElement,ht=le===n.INT||le===n.UNSIGNED_INT||St.gpuType===bc;if(St.isInterleavedBufferAttribute){const pt=St.data,Vt=pt.stride,Ft=St.offset;if(pt.isInstancedInterleavedBuffer){for(let zt=0;zt<at.locationSize;zt++)p(at.location+zt,pt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let zt=0;zt<at.locationSize;zt++)m(at.location+zt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let zt=0;zt<at.locationSize;zt++)A(at.location+zt,gt/at.locationSize,le,Tt,Vt*et,(Ft+gt/at.locationSize*zt)*et,ht)}else{if(St.isInstancedBufferAttribute){for(let pt=0;pt<at.locationSize;pt++)p(at.location+pt,St.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let pt=0;pt<at.locationSize;pt++)m(at.location+pt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let pt=0;pt<at.locationSize;pt++)A(at.location+pt,gt/at.locationSize,le,Tt,gt*et,gt/at.locationSize*pt*et,ht)}}else if(N!==void 0){const Tt=N[it];if(Tt!==void 0)switch(Tt.length){case 2:n.vertexAttrib2fv(at.location,Tt);break;case 3:n.vertexAttrib3fv(at.location,Tt);break;case 4:n.vertexAttrib4fv(at.location,Tt);break;default:n.vertexAttrib1fv(at.location,Tt)}}}}E()}function w(){S();for(const R in i){const D=i[R];for(const O in D){const Y=D[O];for(const G in Y){const V=Y[G];for(const N in V)u(V[N].object),delete V[N];delete Y[G]}}delete i[R]}}function P(R){if(i[R.id]===void 0)return;const D=i[R.id];for(const O in D){const Y=D[O];for(const G in Y){const V=Y[G];for(const N in V)u(V[N].object),delete V[N];delete Y[G]}}delete i[R.id]}function I(R){for(const D in i){const O=i[D];for(const Y in O){const G=O[Y];if(G[R.id]===void 0)continue;const V=G[R.id];for(const N in V)u(V[N].object),delete V[N];delete G[R.id]}}}function v(R){for(const D in i){const O=i[D],Y=R.isInstancedMesh===!0?R.id:0,G=O[Y];if(G!==void 0){for(const V in G){const N=G[V];for(const it in N)u(N[it].object),delete N[it];delete G[V]}delete O[Y],Object.keys(O).length===0&&delete i[D]}}}function S(){H(),a=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:H,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function lS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==gn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const v=I===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Qe&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!v)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:P}}function uS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Hi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,A=E*4;let b=p.clippingState||null;l.value=b,b=u(_,f,A,d);for(let w=0;w!==A;++w)b[w]=e[w];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=d;A!==x;++A,b+=4)a.copy(h[A]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const Ei=4,vf=[.125,.215,.35,.446,.526,.582],Wi=20,fS=256,qs=new Bc,xf=new kt;let Ho=null,Go=0,ko=0,Wo=!1;const hS=new z;class Sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=hS}=r;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,ko),this._renderer.xr.enabled=Wo,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:oi,format:gn,colorSpace:Ds,depthBuffer:!1},s=Mf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dS(r)),this._blurMaterial=mS(r,t,e),this._ggxMaterial=pS(r,t,e)}return s}_compileMaterial(t){const e=new Ve(new Ie,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,s,r){const l=new on(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(xf),h.toneMapping=Fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Ar,new Ss({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(xf),p=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const w=this._cubeSize;gs(s,b*w,A>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ki||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Ei?i-_+Ei:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,gs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,gs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,qs)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Wi;m>Wi&&Bt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let E=0;for(let I=0;I<Wi;++I){const v=I/x,S=Math.exp(-v*v/2);p.push(S),I===0?E+=S:I<m&&(E+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-i;const b=this._sizeLods[s],w=3*b*(s>A-Ei?s-A+Ei:0),P=4*(this._cubeSize-b);gs(e,w,P,3*b,2*b),l.setRenderTarget(e),l.render(h,qs)}}function dS(n){const t=[],e=[],i=[];let s=n;const r=n-Ei+1+vf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ei?l=vf[a-n+Ei-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,x=3,m=2,p=1,E=new Float32Array(x*_*d),A=new Float32Array(m*_*d),b=new Float32Array(p*_*d);for(let P=0;P<d;P++){const I=P%3*2/3-1,v=P>2?0:-1,S=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];E.set(S,x*_*P),A.set(f,m*_*P);const H=[P,P,P,P,P,P];b.set(H,p*_*P)}const w=new Ie;w.setAttribute("position",new nn(E,x)),w.setAttribute("uv",new nn(A,m)),w.setAttribute("faceIndex",new nn(b,p)),i.push(new Ve(w,null)),s>Ei&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Mf(n,t,e){const i=new On(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function pS(n,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function mS(n,t,e){const i=new Float32Array(Wi),s=new z(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function yf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ef(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}class Nd extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ar(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:ni});r.uniforms.tEquirect.value=e;const a=new Ve(s,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=ze),new x0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function gS(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ho||d===po)if(t.has(f)){const _=t.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const x=new Nd(_.height);return x.fromEquirectangularTexture(n,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,_=d===ho||d===po,x=d===Ki||d===Ps;if(_||x){let m=e.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Sf(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const E=f.image;return _&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new Sf(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===ho?f.mapping=Ki:d===po&&(f.mapping=Ps),f}function l(f){let d=0;const _=6;for(let x=0;x<_;x++)f[x]!==void 0&&d++;return d===_}function c(f){const d=f.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _S(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Aa("WebGLRenderer: "+i+" extension not supported."),s}}}function vS(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let x=0;if(_===void 0)return;if(d!==null){const E=d.array;x=d.version;for(let A=0,b=E.length;A<b;A+=3){const w=E[A+0],P=E[A+1],I=E[A+2];f.push(w,P,P,I,I,w)}}else{const E=_.array;x=_.version;for(let A=0,b=E.length/3-1;A<b;A+=3){const w=A+0,P=A+1,I=A+2;f.push(w,P,P,I,I,w)}}const m=new(_.count>=65535?Ad:Td)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xS(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*a,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*x[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function SS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function MS(n,t,e){const i=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let H=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",H)};var d=H;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let w=o.attributes.position.count*b,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const I=new Float32Array(w*P*4*h),v=new Ed(I,w,P,h);v.type=In,v.needsUpdate=!0;const S=b*4;for(let R=0;R<h;R++){const D=p[R],O=E[R],Y=A[R],G=w*P*4*R;for(let V=0;V<D.count;V++){const N=V*S;_===!0&&(s.fromBufferAttribute(D,V),I[G+N+0]=s.x,I[G+N+1]=s.y,I[G+N+2]=s.z,I[G+N+3]=0),x===!0&&(s.fromBufferAttribute(O,V),I[G+N+4]=s.x,I[G+N+5]=s.y,I[G+N+6]=s.z,I[G+N+7]=0),m===!0&&(s.fromBufferAttribute(Y,V),I[G+N+8]=s.x,I[G+N+9]=s.y,I[G+N+10]=s.z,I[G+N+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new Zt(w,P)},i.set(o,f),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yS(n,t,e,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const ES={[ad]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[ld]:"CINEON_TONE_MAPPING",[cd]:"ACES_FILMIC_TONE_MAPPING",[fd]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[ud]:"CUSTOM_TONE_MAPPING"};function bS(n,t,e,i,s){const r=new On(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new On(t,e,{type:oi,depthBuffer:!1,stencilBuffer:!1}),o=new Ie;o.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ee([0,2,0,0,2,0],2));const l=new h0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ve(o,l),u=new Bc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,x=null,m=[],p=!1;this.setSize=function(E,A){r.setSize(E,A),a.setSize(E,A);for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(E,A)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;const A=r.width,b=r.height;for(let w=0;w<m.length;w++){const P=m[w];P.setSize&&P.setSize(A,b)}},this.begin=function(E,A){if(d||E.toneMapping===Fn&&m.length===0)return!1;if(x=A,A!==null){const b=A.width,w=A.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return p===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=Fn,!0},this.hasRenderPass=function(){return p},this.end=function(E,A){E.toneMapping=_,d=!0;let b=r,w=a;for(let P=0;P<m.length;P++){const I=m[P];if(I.enabled!==!1&&(I.render(E,w,b,A),I.needsSwap!==!1)){const v=b;b=w,w=v}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},te.getTransfer(h)===re&&(l.defines.SRGB_TRANSFER="");const P=ES[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(x),E.render(c,u),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Fd=new He,tc=new Sr(1,1),Od=new Ed,Bd=new O_,zd=new Pd,bf=[],Tf=[],Af=new Float32Array(16),wf=new Float32Array(9),Cf=new Float32Array(4);function Os(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ja(n,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function TS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function AS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function wS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function CS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function RS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Te(e,i)}}function PS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),Te(e,i)}}function LS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Te(e,i)}}function DS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function IS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function US(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function NS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function FS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function OS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function BS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function zS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function VS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=e.isReversedDepthBuffer()?Lc:Pc,r=tc):r=Fd,e.setTexture2D(t||r,s)}function HS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bd,s)}function GS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||zd,s)}function kS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Od,s)}function WS(n){switch(n){case 5126:return TS;case 35664:return AS;case 35665:return wS;case 35666:return CS;case 35674:return RS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return DS;case 35667:case 35671:return IS;case 35668:case 35672:return US;case 35669:case 35673:return NS;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return kS}}function XS(n,t){n.uniform1fv(this.addr,t)}function qS(n,t){const e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function YS(n,t){const e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function $S(n,t){const e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function jS(n,t){const e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function KS(n,t){const e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ZS(n,t){const e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function JS(n,t){n.uniform1iv(this.addr,t)}function QS(n,t){n.uniform2iv(this.addr,t)}function tM(n,t){n.uniform3iv(this.addr,t)}function eM(n,t){n.uniform4iv(this.addr,t)}function nM(n,t){n.uniform1uiv(this.addr,t)}function iM(n,t){n.uniform2uiv(this.addr,t)}function sM(n,t){n.uniform3uiv(this.addr,t)}function rM(n,t){n.uniform4uiv(this.addr,t)}function aM(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=tc:a=Fd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function oM(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bd,r[a])}function lM(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zd,r[a])}function cM(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Od,r[a])}function uM(n){switch(n){case 5126:return XS;case 35664:return qS;case 35665:return YS;case 35666:return $S;case 35674:return jS;case 35675:return KS;case 35676:return ZS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class fM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=WS(e.type)}}class hM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uM(e.type)}}class dM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Rf(n,t){n.seq.push(t),n.map[t.id]=t}function pM(n,t,e){const i=n.name,s=i.length;for(Xo.lastIndex=0;;){const r=Xo.exec(i),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rf(e,c===void 0?new fM(o,n,t):new hM(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new dM(o),Rf(e,h)),e=h}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);pM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Pf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const mM=37297;let gM=0;function _M(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Lf=new qt;function vM(n){te._getMatrix(Lf,te.workingColorSpace,n);const t=`mat3( ${Lf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case ba:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Df(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_M(n.getShaderSource(t),o)}else return r}function xM(n,t){const e=vM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const SM={[ad]:"Linear",[od]:"Reinhard",[ld]:"Cineon",[cd]:"ACESFilmic",[fd]:"AgX",[hd]:"Neutral",[ud]:"Custom"};function MM(n,t){const e=SM[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sa=new z;function yM(){te.getLuminanceCoefficients(sa);const n=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function bM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function TM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ks(n){return n!==""}function If(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(n){return n.replace(AM,CM)}const wM=new Map;function CM(n,t){let e=$t[t];if(e===void 0){const i=wM.get(t);if(i!==void 0)e=$t[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace(RM,PM)}function PM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const LM={[la]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function DM(n){return LM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IM={[Ki]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function UM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":IM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const NM={[Ps]:"ENVMAP_MODE_REFRACTION"};function FM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":NM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OM={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[e_]:"ENVMAP_BLENDING_MIX",[n_]:"ENVMAP_BLENDING_ADD"};function BM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":OM[n.combine]||"ENVMAP_BLENDING_NONE"}function zM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function VM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=DM(e),c=UM(e),u=FM(e),h=BM(e),f=zM(e),d=EM(e),_=bM(r),x=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Fn?MM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,xM("linearToOutputTexel",e.outputColorSpace),yM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=ec(a),a=If(a,e),a=Uf(a,e),o=ec(o),o=If(o,e),o=Uf(o,e),a=Nf(a),o=Nf(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+m+a,b=E+p+o,w=Pf(s,s.VERTEX_SHADER,A),P=Pf(s,s.FRAGMENT_SHADER,b);s.attachShader(x,w),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(R){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(P)||"",G=D.trim(),V=O.trim(),N=Y.trim();let it=!0,at=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,P);else{const St=Df(s,w,"vertex"),Tt=Df(s,P,"fragment");Qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+St+`
`+Tt)}else G!==""?Bt("WebGLProgram: Program Info Log:",G):(V===""||N==="")&&(at=!1);at&&(R.diagnostics={runnable:it,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(w),s.deleteShader(P),v=new da(s,x),S=TM(s,x)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(x,mM)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=P,this}let HM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kM(t),e.set(t,i)),i}}class kM{constructor(t){this.id=HM++,this.code=t,this.usedTimes=0}}function WM(n,t,e,i,s,r){const a=new Uc,o=new GM,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,S,H,R,D){const O=R.fog,Y=D.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=t.get(v.envMap||G,V),it=N&&N.mapping===Xa?N.image.height:null,at=d[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Bt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=St!==void 0?St.length:0;let gt=0;Y.morphAttributes.position!==void 0&&(gt=1),Y.morphAttributes.normal!==void 0&&(gt=2),Y.morphAttributes.color!==void 0&&(gt=3);let Gt,ue,le,et;if(at){const se=Rn[at];Gt=se.vertexShader,ue=se.fragmentShader}else Gt=v.vertexShader,ue=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),et=o.getFragmentShaderID(v);const ht=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,zt=!!v.map,C=!!v.matcap,U=!!N,k=!!v.aoMap,tt=!!v.lightMap,j=!!v.bumpMap,nt=!!v.normalMap,T=!!v.displacementMap,ot=!!v.emissiveMap,st=!!v.metalnessMap,Q=!!v.roughnessMap,rt=v.anisotropy>0,M=v.clearcoat>0,g=v.dispersion>0,L=v.iridescence>0,W=v.sheen>0,Z=v.transmission>0,X=rt&&!!v.anisotropyMap,_t=M&&!!v.clearcoatMap,ct=M&&!!v.clearcoatNormalMap,wt=M&&!!v.clearcoatRoughnessMap,Lt=L&&!!v.iridescenceMap,lt=L&&!!v.iridescenceThicknessMap,ft=W&&!!v.sheenColorMap,vt=W&&!!v.sheenRoughnessMap,Et=!!v.specularMap,bt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,F=Z&&!!v.transmissionMap,mt=Z&&!!v.thicknessMap,dt=!!v.gradientMap,Ct=!!v.alphaMap,ut=v.alphaTest>0,J=!!v.alphaHash,Rt=!!v.extensions;let Ht=Fn;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const fe={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Gt,fragmentShader:ue,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ds,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:C,envMap:U,envMapMode:U&&N.mapping,envMapCubeUVHeight:it,aoMap:k,lightMap:tt,bumpMap:j,normalMap:nt,displacementMap:T,emissiveMap:ot,normalMapObjectSpace:nt&&v.normalMapType===r_,normalMapTangentSpace:nt&&v.normalMapType===Md,metalnessMap:st,roughnessMap:Q,anisotropy:rt,anisotropyMap:X,clearcoat:M,clearcoatMap:_t,clearcoatNormalMap:ct,clearcoatRoughnessMap:wt,dispersion:g,iridescence:L,iridescenceMap:Lt,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:ft,sheenRoughnessMap:vt,specularMap:Et,specularColorMap:bt,specularIntensityMap:Wt,transmission:Z,transmissionMap:F,thicknessMap:mt,gradientMap:dt,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ut,alphaHash:J,combine:v.combine,mapUv:zt&&_(v.map.channel),aoMapUv:k&&_(v.aoMap.channel),lightMapUv:tt&&_(v.lightMap.channel),bumpMapUv:j&&_(v.bumpMap.channel),normalMapUv:nt&&_(v.normalMap.channel),displacementMapUv:T&&_(v.displacementMap.channel),emissiveMapUv:ot&&_(v.emissiveMap.channel),metalnessMapUv:st&&_(v.metalnessMap.channel),roughnessMapUv:Q&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:_t&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:Et&&_(v.specularMap.channel),specularColorMapUv:bt&&_(v.specularColorMap.channel),specularIntensityMapUv:Wt&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:mt&&_(v.thicknessMap.channel),alphaMapUv:Ct&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(nt||rt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&(zt||Ct),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===re,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pn,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&v.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)S.push(H),S.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(p(S,v),E(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function A(v){const S=d[v.type];let H;if(S){const R=Rn[S];H=c0.clone(R.uniforms)}else H=v.uniforms;return H}function b(v,S){let H=u.get(S);return H!==void 0?++H.usedTimes:(H=new VM(n,S,v,s),c.push(H),u.set(S,H)),H}function w(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function P(v){o.remove(v)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:I}}function XM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,_,x,m,p){let E=n[t];return E===void 0?(E={id:f.id,object:f,geometry:d,material:_,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},n[t]=E):(E.id=f.id,E.object=f,E.geometry=d,E.material=_,E.materialVariant=a(f),E.groupOrder=x,E.renderOrder=f.renderOrder,E.z=m,E.group=p),t++,E}function l(f,d,_,x,m,p){const E=o(f,d,_,x,m,p);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):e.push(E)}function c(f,d,_,x,m,p){const E=o(f,d,_,x,m,p);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function u(f,d){e.length>1&&e.sort(f||qM),i.length>1&&i.sort(d||Of),s.length>1&&s.sort(d||Of)}function h(){for(let f=t,d=n.length;f<d;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function YM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Bf,n.set(i,[a])):s>=r.length?(a=new Bf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function $M(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new kt};break;case"SpotLight":e={position:new z,direction:new z,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function jM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let KM=0;function ZM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function JM(n){const t=new $M,e=jM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new pe,a=new pe;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,E=0,A=0,b=0,w=0,P=0,I=0;c.sort(ZM);for(let S=0,H=c.length;S<H;S++){const R=c[S],D=R.color,O=R.intensity,Y=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ls?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*O,h+=D.g*O,f+=D.b*O;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],O);I++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,it=e.get(R);it.shadowIntensity=N.intensity,it.shadowBias=N.bias,it.shadowNormalBias=N.normalBias,it.shadowRadius=N.radius,it.shadowMapSize=N.mapSize,i.directionalShadow[d]=it,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=R.shadow.matrix,E++}i.directional[d]=V,d++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[x]=V;const N=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,N.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[x]=N.matrix,R.castShadow){const it=e.get(R);it.shadowIntensity=N.intensity,it.shadowBias=N.bias,it.shadowNormalBias=N.normalBias,it.shadowRadius=N.radius,it.shadowMapSize=N.mapSize,i.spotShadow[x]=it,i.spotShadowMap[x]=G,b++}x++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const N=R.shadow,it=e.get(R);it.shadowIntensity=N.intensity,it.shadowBias=N.bias,it.shadowNormalBias=N.normalBias,it.shadowRadius=N.radius,it.shadowMapSize=N.mapSize,it.shadowCameraNear=N.camera.near,it.shadowCameraFar=N.camera.far,i.pointShadow[_]=it,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=R.shadow.matrix,A++}i.point[_]=V,_++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(O),V.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==d||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==E||v.numPointShadows!==A||v.numSpotShadows!==b||v.numSpotMaps!==w||v.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,v.directionalLength=d,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=E,v.numPointShadows=A,v.numSpotShadows=b,v.numSpotMaps=w,v.numLightProbes=I,i.version=KM++)}function l(c,u){let h=0,f=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const A=c[p];if(A.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(A.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function zf(n){const t=new JM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function QM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zf(n),t.set(s,[o])):r>=a.length?(o=new zf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ny=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],iy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Vf=new pe,Ys=new z,qo=new z;function sy(n,t,e){let i=new Nc;const s=new Zt,r=new Zt,a=new _e,o=new d0,l=new p0,c={},u=e.maxTextureSize,h={[wi]:$e,[$e]:wi,[pn]:pn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:ty,fragmentShader:ey}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ie;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ve(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let p=this.type;this.render=function(P,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===Fg&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=la);const S=n.getRenderTarget(),H=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==this.type;O&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(G=>G.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,G=P.length;Y<G;Y++){const V=P[Y],N=V.shadow;if(N===void 0){Bt("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const it=N.getFrameExtents();s.multiply(it),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,N.mapSize.y=r.y));const at=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=at,N.map===null||O===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===js){if(V.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new On(s.x,s.y,{format:Ls,type:oi,minFilter:ze,magFilter:ze,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new Sr(s.x,s.y,In),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=li,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=De,N.map.depthTexture.magFilter=De}else V.isPointLight?(N.map=new Nd(s.x),N.map.depthTexture=new n0(s.x,zn)):(N.map=new On(s.x,s.y),N.map.depthTexture=new Sr(s.x,s.y,zn)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=li,this.type===la?(N.map.depthTexture.compareFunction=at?Lc:Pc,N.map.depthTexture.minFilter=ze,N.map.depthTexture.magFilter=ze):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=De,N.map.depthTexture.magFilter=De);N.camera.updateProjectionMatrix()}const St=N.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<St;Tt++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,Tt),n.clear();else{Tt===0&&(n.setRenderTarget(N.map),n.clear());const gt=N.getViewport(Tt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),D.viewport(a)}if(V.isPointLight){const gt=N.camera,Gt=N.matrix,ue=V.distance||gt.far;ue!==gt.far&&(gt.far=ue,gt.updateProjectionMatrix()),Ys.setFromMatrixPosition(V.matrixWorld),gt.position.copy(Ys),qo.copy(gt.position),qo.add(ny[Tt]),gt.up.copy(iy[Tt]),gt.lookAt(qo),gt.updateMatrixWorld(),Gt.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Vf.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Vf,gt.coordinateSystem,gt.reversedDepth)}else N.updateMatrices(V);i=N.getFrustum(),b(I,v,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===js&&E(N,v),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,H,R)};function E(P,I){const v=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new On(s.x,s.y,{format:Ls,type:oi})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(I,null,v,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(I,null,v,d,x,null)}function A(P,I,v,S){let H=null;const R=v.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)H=R;else if(H=v.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const D=H.uuid,O=I.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let G=Y[O];G===void 0&&(G=H.clone(),Y[O]=G,I.addEventListener("dispose",w)),H=G}if(H.visible=I.visible,H.wireframe=I.wireframe,S===js?H.side=I.shadowSide!==null?I.shadowSide:I.side:H.side=I.shadowSide!==null?I.shadowSide:h[I.side],H.alphaMap=I.alphaMap,H.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,H.map=I.map,H.clipShadows=I.clipShadows,H.clippingPlanes=I.clippingPlanes,H.clipIntersection=I.clipIntersection,H.displacementMap=I.displacementMap,H.displacementScale=I.displacementScale,H.displacementBias=I.displacementBias,H.wireframeLinewidth=I.wireframeLinewidth,H.linewidth=I.linewidth,v.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const D=n.properties.get(H);D.light=v}return H}function b(P,I,v,S,H){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===js)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,P.matrixWorld);const O=t.update(P),Y=P.material;if(Array.isArray(Y)){const G=O.groups;for(let V=0,N=G.length;V<N;V++){const it=G[V],at=Y[it.materialIndex];if(at&&at.visible){const St=A(P,at,S,H);P.onBeforeShadow(n,P,I,v,O,St,it),n.renderBufferDirect(v,null,O,St,P,it),P.onAfterShadow(n,P,I,v,O,St,it)}}}else if(Y.visible){const G=A(P,Y,S,H);P.onBeforeShadow(n,P,I,v,O,G,null),n.renderBufferDirect(v,null,O,G,P,null),P.onAfterShadow(n,P,I,v,O,G,null)}}const D=P.children;for(let O=0,Y=D.length;O<Y;O++)b(D[O],I,v,S,H)}function w(P){P.target.removeEventListener("dispose",w);for(const v in c){const S=c[v],H=P.target.uuid;H in S&&(S[H].dispose(),delete S[H])}}}function ry(n,t){function e(){let F=!1;const mt=new _e;let dt=null;const Ct=new _e(0,0,0,0);return{setMask:function(ut){dt!==ut&&!F&&(n.colorMask(ut,ut,ut,ut),dt=ut)},setLocked:function(ut){F=ut},setClear:function(ut,J,Rt,Ht,fe){fe===!0&&(ut*=Ht,J*=Ht,Rt*=Ht),mt.set(ut,J,Rt,Ht),Ct.equals(mt)===!1&&(n.clearColor(ut,J,Rt,Ht),Ct.copy(mt))},reset:function(){F=!1,dt=null,Ct.set(-1,0,0,0)}}}function i(){let F=!1,mt=!1,dt=null,Ct=null,ut=null;return{setReversed:function(J){if(mt!==J){const Rt=t.get("EXT_clip_control");J?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),mt=J;const Ht=ut;ut=null,this.setClear(Ht)}},getReversed:function(){return mt},setTest:function(J){J?ht(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(J){dt!==J&&!F&&(n.depthMask(J),dt=J)},setFunc:function(J){if(mt&&(J=m_[J]),Ct!==J){switch(J){case fl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case pl:n.depthFunc(n.EQUAL);break;case ml:n.depthFunc(n.GEQUAL);break;case gl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=J}},setLocked:function(J){F=J},setClear:function(J){ut!==J&&(ut=J,mt&&(J=1-J),n.clearDepth(J))},reset:function(){F=!1,dt=null,Ct=null,ut=null,mt=!1}}}function s(){let F=!1,mt=null,dt=null,Ct=null,ut=null,J=null,Rt=null,Ht=null,fe=null;return{setTest:function(se){F||(se?ht(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(se){mt!==se&&!F&&(n.stencilMask(se),mt=se)},setFunc:function(se,Hn,Gn){(dt!==se||Ct!==Hn||ut!==Gn)&&(n.stencilFunc(se,Hn,Gn),dt=se,Ct=Hn,ut=Gn)},setOp:function(se,Hn,Gn){(J!==se||Rt!==Hn||Ht!==Gn)&&(n.stencilOp(se,Hn,Gn),J=se,Rt=Hn,Ht=Gn)},setLocked:function(se){F=se},setClear:function(se){fe!==se&&(n.clearStencil(se),fe=se)},reset:function(){F=!1,mt=null,dt=null,Ct=null,ut=null,J=null,Rt=null,Ht=null,fe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,E=null,A=null,b=null,w=null,P=null,I=new kt(0,0,0),v=0,S=!1,H=null,R=null,D=null,O=null,Y=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(it)[1]),V=N>=1):it.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),V=N>=2);let at=null,St={};const Tt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Gt=new _e().fromArray(Tt),ue=new _e().fromArray(gt);function le(F,mt,dt,Ct){const ut=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<dt;Rt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(mt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return J}const et={};et[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(Rs),j(!1),nt(Iu),ht(n.CULL_FACE),k(ni);function ht(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Vt(F,mt){return h[F]!==mt?(n.bindFramebuffer(F,mt),h[F]=mt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ft(F,mt){let dt=d,Ct=!1;if(F){dt=f.get(mt),dt===void 0&&(dt=[],f.set(mt,dt));const ut=F.textures;if(dt.length!==ut.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Rt=ut.length;J<Rt;J++)dt[J]=n.COLOR_ATTACHMENT0+J;dt.length=ut.length,Ct=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(dt)}function zt(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const C={[ki]:n.FUNC_ADD,[Bg]:n.FUNC_SUBTRACT,[zg]:n.FUNC_REVERSE_SUBTRACT};C[Vg]=n.MIN,C[Hg]=n.MAX;const U={[Gg]:n.ZERO,[kg]:n.ONE,[Wg]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Kg]:n.SRC_ALPHA_SATURATE,[$g]:n.DST_COLOR,[qg]:n.DST_ALPHA,[Xg]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[jg]:n.ONE_MINUS_DST_COLOR,[Yg]:n.ONE_MINUS_DST_ALPHA,[Zg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[Qg]:n.CONSTANT_ALPHA,[t_]:n.ONE_MINUS_CONSTANT_ALPHA};function k(F,mt,dt,Ct,ut,J,Rt,Ht,fe,se){if(F===ni){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(ht(n.BLEND),x=!0),F!==Og){if(F!==m||se!==S){if((p!==ki||b!==ki)&&(n.blendEquation(n.FUNC_ADD),p=ki,b=ki),se)switch(F){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFunc(n.ONE,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uu:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",F);break}E=null,A=null,w=null,P=null,I.set(0,0,0),v=0,m=F,S=se}return}ut=ut||mt,J=J||dt,Rt=Rt||Ct,(mt!==p||ut!==b)&&(n.blendEquationSeparate(C[mt],C[ut]),p=mt,b=ut),(dt!==E||Ct!==A||J!==w||Rt!==P)&&(n.blendFuncSeparate(U[dt],U[Ct],U[J],U[Rt]),E=dt,A=Ct,w=J,P=Rt),(Ht.equals(I)===!1||fe!==v)&&(n.blendColor(Ht.r,Ht.g,Ht.b,fe),I.copy(Ht),v=fe),m=F,S=!1}function tt(F,mt){F.side===pn?pt(n.CULL_FACE):ht(n.CULL_FACE);let dt=F.side===$e;mt&&(dt=!dt),j(dt),F.blending===Ts&&F.transparent===!1?k(ni):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ct=F.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){H!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),H=F)}function nt(F){F!==Ug?(ht(n.CULL_FACE),F!==R&&(F===Iu?n.cullFace(n.BACK):F===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),R=F}function T(F){F!==D&&(V&&n.lineWidth(F),D=F)}function ot(F,mt,dt){F?(ht(n.POLYGON_OFFSET_FILL),(O!==mt||Y!==dt)&&(O=mt,Y=dt,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,dt))):pt(n.POLYGON_OFFSET_FILL)}function st(F){F?ht(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Q(F){F===void 0&&(F=n.TEXTURE0+G-1),at!==F&&(n.activeTexture(F),at=F)}function rt(F,mt,dt){dt===void 0&&(at===null?dt=n.TEXTURE0+G-1:dt=at);let Ct=St[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},St[dt]=Ct),(Ct.type!==F||Ct.texture!==mt)&&(at!==dt&&(n.activeTexture(dt),at=dt),n.bindTexture(F,mt||et[F]),Ct.type=F,Ct.texture=mt)}function M(){const F=St[at];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function W(){try{n.texSubImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function Z(){try{n.texSubImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function _t(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function ct(){try{n.texStorage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function wt(){try{n.texStorage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function Lt(){try{n.texImage2D(...arguments)}catch(F){Qt("WebGLState:",F)}}function lt(){try{n.texImage3D(...arguments)}catch(F){Qt("WebGLState:",F)}}function ft(F){Gt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Gt.copy(F))}function vt(F){ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ue.copy(F))}function Et(F,mt){let dt=c.get(mt);dt===void 0&&(dt=new WeakMap,c.set(mt,dt));let Ct=dt.get(F);Ct===void 0&&(Ct=n.getUniformBlockIndex(mt,F.name),dt.set(F,Ct))}function bt(F,mt){const Ct=c.get(mt).get(F);l.get(mt)!==Ct&&(n.uniformBlockBinding(mt,Ct,F.__bindingPointIndex),l.set(mt,Ct))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,St={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,E=null,A=null,b=null,w=null,P=null,I=new kt(0,0,0),v=0,S=!1,H=null,R=null,D=null,O=null,Y=null,Gt.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:pt,bindFramebuffer:Vt,drawBuffers:Ft,useProgram:zt,setBlending:k,setMaterial:tt,setFlipSided:j,setCullFace:nt,setLineWidth:T,setPolygonOffset:ot,setScissorTest:st,activeTexture:Q,bindTexture:rt,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Lt,texImage3D:lt,updateUBOMapping:Et,uniformBlockBinding:bt,texStorage2D:ct,texStorage3D:wt,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:_t,scissor:ft,viewport:vt,reset:Wt}}function ay(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return d?new OffscreenCanvas(M,g):Ta("canvas")}function x(M,g,L){let W=1;const Z=rt(M);if((Z.width>L||Z.height>L)&&(W=L/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(W*Z.width),_t=Math.floor(W*Z.height);h===void 0&&(h=_(X,_t));const ct=g?_(X,_t):h;return ct.width=X,ct.height=_t,ct.getContext("2d").drawImage(M,0,0,X,_t),Bt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+_t+")."),ct}else return"data"in M&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(M,g,L,W,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),g===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGB8UI),L===n.UNSIGNED_SHORT&&(X=n.RGB16UI),L===n.UNSIGNED_INT&&(X=n.RGB32UI),L===n.BYTE&&(X=n.RGB8I),L===n.SHORT&&(X=n.RGB16I),L===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),L===n.UNSIGNED_INT&&(X=n.RGBA32UI),L===n.BYTE&&(X=n.RGBA8I),L===n.SHORT&&(X=n.RGBA16I),L===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){const _t=Z?ba:te.getTransfer(W);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=_t===re?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(M,g){let L;return M?g===null||g===zn||g===_r?L=n.DEPTH24_STENCIL8:g===In?L=n.DEPTH32F_STENCIL8:g===gr&&(L=n.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===_r?L=n.DEPTH_COMPONENT24:g===In?L=n.DEPTH_COMPONENT32F:g===gr&&(L=n.DEPTH_COMPONENT16),L}function w(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==De&&M.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function P(M){const g=M.target;g.removeEventListener("dispose",P),v(g),g.isVideoTexture&&u.delete(g)}function I(M){const g=M.target;g.removeEventListener("dispose",I),H(g)}function v(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,W=f.get(L);if(W){const Z=W[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(M),Object.keys(W).length===0&&f.delete(L)}i.remove(M)}function S(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const L=M.source,W=f.get(L);delete W[g.__cacheKey],a.memory.textures--}function H(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Z=0;Z<g.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=M.textures;for(let W=0,Z=L.length;W<Z;W++){const X=i.get(L[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(L[W])}i.remove(M)}let R=0;function D(){R=0}function O(){const M=R;return M>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),R+=1,M}function Y(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function G(M,g){const L=i.get(M);if(M.isVideoTexture&&st(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){const W=M.image;if(W===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(L,M,g);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function V(M,g){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){et(L,M,g);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function N(M,g){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){et(L,M,g);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function it(M,g){const L=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){ht(L,M,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const at={[vl]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[xl]:n.MIRRORED_REPEAT},St={[De]:n.NEAREST,[i_]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Tt={[a_]:n.NEVER,[f_]:n.ALWAYS,[o_]:n.LESS,[Pc]:n.LEQUAL,[l_]:n.EQUAL,[Lc]:n.GEQUAL,[c_]:n.GREATER,[u_]:n.NOTEQUAL};function gt(M,g){if(g.type===In&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===mo||g.magFilter===Ir||g.magFilter===Xi||g.minFilter===ze||g.minFilter===mo||g.minFilter===Ir||g.minFilter===Xi)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,at[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,at[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,at[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,St[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,St[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Tt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===De||g.minFilter!==Ir&&g.minFilter!==Xi||g.type===In&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Gt(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",P));const W=g.source;let Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));const X=Y(g);if(X!==M.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Z[X].usedTimes++;const _t=Z[M.__cacheKey];_t!==void 0&&(Z[M.__cacheKey].usedTimes--,_t.usedTimes===0&&S(g)),M.__cacheKey=X,M.__webglTexture=Z[X].texture}return L}function ue(M,g,L){return Math.floor(Math.floor(M/L)/g)}function le(M,g,L,W){const X=M.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,W,g.data);else{X.sort((lt,ft)=>lt.start-ft.start);let _t=0;for(let lt=1;lt<X.length;lt++){const ft=X[_t],vt=X[lt],Et=ft.start+ft.count,bt=ue(vt.start,g.width,4),Wt=ue(ft.start,g.width,4);vt.start<=Et+1&&bt===Wt&&ue(vt.start+vt.count-1,g.width,4)===bt?ft.count=Math.max(ft.count,vt.start+vt.count-ft.start):(++_t,X[_t]=vt)}X.length=_t+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),wt=n.getParameter(n.UNPACK_SKIP_PIXELS),Lt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let lt=0,ft=X.length;lt<ft;lt++){const vt=X[lt],Et=Math.floor(vt.start/4),bt=Math.ceil(vt.count/4),Wt=Et%g.width,F=Math.floor(Et/g.width),mt=bt,dt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Wt,F,mt,dt,L,W,g.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Lt)}}function et(M,g,L){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const Z=Gt(M,g),X=g.source;e.bindTexture(W,M.__webglTexture,n.TEXTURE0+L);const _t=i.get(X);if(X.version!==_t.__version||Z===!0){e.activeTexture(n.TEXTURE0+L);const ct=te.getPrimaries(te.workingColorSpace),wt=g.colorSpace===yi?null:te.getPrimaries(g.colorSpace),Lt=g.colorSpace===yi||ct===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let lt=x(g.image,!1,s.maxTextureSize);lt=Q(g,lt);const ft=r.convert(g.format,g.colorSpace),vt=r.convert(g.type);let Et=A(g.internalFormat,ft,vt,g.colorSpace,g.isVideoTexture);gt(W,g);let bt;const Wt=g.mipmaps,F=g.isVideoTexture!==!0,mt=_t.__version===void 0||Z===!0,dt=X.dataReady,Ct=w(g,lt);if(g.isDepthTexture)Et=b(g.format===qi,g.type),mt&&(F?e.texStorage2D(n.TEXTURE_2D,1,Et,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,ft,vt,null));else if(g.isDataTexture)if(Wt.length>0){F&&mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Et,Wt[0].width,Wt[0].height);for(let ut=0,J=Wt.length;ut<J;ut++)bt=Wt[ut],F?dt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ft,vt,bt.data):e.texImage2D(n.TEXTURE_2D,ut,Et,bt.width,bt.height,0,ft,vt,bt.data);g.generateMipmaps=!1}else F?(mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Et,lt.width,lt.height),dt&&le(g,lt,ft,vt)):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,ft,vt,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){F&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Et,Wt[0].width,Wt[0].height,lt.depth);for(let ut=0,J=Wt.length;ut<J;ut++)if(bt=Wt[ut],g.format!==gn)if(ft!==null)if(F){if(dt)if(g.layerUpdates.size>0){const Rt=_f(bt.width,bt.height,g.format,g.type);for(const Ht of g.layerUpdates){const fe=bt.data.subarray(Ht*Rt/bt.data.BYTES_PER_ELEMENT,(Ht+1)*Rt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Ht,bt.width,bt.height,1,ft,fe)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,lt.depth,ft,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Et,bt.width,bt.height,lt.depth,0,bt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,lt.depth,ft,vt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Et,bt.width,bt.height,lt.depth,0,ft,vt,bt.data)}else{F&&mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Et,Wt[0].width,Wt[0].height);for(let ut=0,J=Wt.length;ut<J;ut++)bt=Wt[ut],g.format!==gn?ft!==null?F?dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ft,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Et,bt.width,bt.height,0,bt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?dt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ft,vt,bt.data):e.texImage2D(n.TEXTURE_2D,ut,Et,bt.width,bt.height,0,ft,vt,bt.data)}else if(g.isDataArrayTexture)if(F){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Et,lt.width,lt.height,lt.depth),dt)if(g.layerUpdates.size>0){const ut=_f(lt.width,lt.height,g.format,g.type);for(const J of g.layerUpdates){const Rt=lt.data.subarray(J*ut/lt.data.BYTES_PER_ELEMENT,(J+1)*ut/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,lt.width,lt.height,1,ft,vt,Rt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,ft,vt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,lt.width,lt.height,lt.depth,0,ft,vt,lt.data);else if(g.isData3DTexture)F?(mt&&e.texStorage3D(n.TEXTURE_3D,Ct,Et,lt.width,lt.height,lt.depth),dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,ft,vt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,lt.width,lt.height,lt.depth,0,ft,vt,lt.data);else if(g.isFramebufferTexture){if(mt)if(F)e.texStorage2D(n.TEXTURE_2D,Ct,Et,lt.width,lt.height);else{let ut=lt.width,J=lt.height;for(let Rt=0;Rt<Ct;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Et,ut,J,0,ft,vt,null),ut>>=1,J>>=1}}else if(Wt.length>0){if(F&&mt){const ut=rt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Et,ut.width,ut.height)}for(let ut=0,J=Wt.length;ut<J;ut++)bt=Wt[ut],F?dt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,ft,vt,bt):e.texImage2D(n.TEXTURE_2D,ut,Et,ft,vt,bt);g.generateMipmaps=!1}else if(F){if(mt){const ut=rt(lt);e.texStorage2D(n.TEXTURE_2D,Ct,Et,ut.width,ut.height)}dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,vt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Et,ft,vt,lt);m(g)&&p(W),_t.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ht(M,g,L){if(g.image.length!==6)return;const W=Gt(M,g),Z=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);const X=i.get(Z);if(Z.version!==X.__version||W===!0){e.activeTexture(n.TEXTURE0+L);const _t=te.getPrimaries(te.workingColorSpace),ct=g.colorSpace===yi?null:te.getPrimaries(g.colorSpace),wt=g.colorSpace===yi||_t===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Lt=g.isCompressedTexture||g.image[0].isCompressedTexture,lt=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Lt&&!lt?ft[J]=x(g.image[J],!0,s.maxCubemapSize):ft[J]=lt?g.image[J].image:g.image[J],ft[J]=Q(g,ft[J]);const vt=ft[0],Et=r.convert(g.format,g.colorSpace),bt=r.convert(g.type),Wt=A(g.internalFormat,Et,bt,g.colorSpace),F=g.isVideoTexture!==!0,mt=X.__version===void 0||W===!0,dt=Z.dataReady;let Ct=w(g,vt);gt(n.TEXTURE_CUBE_MAP,g);let ut;if(Lt){F&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Wt,vt.width,vt.height);for(let J=0;J<6;J++){ut=ft[J].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const Ht=ut[Rt];g.format!==gn?Et!==null?F?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Ht.width,Ht.height,Et,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Wt,Ht.width,Ht.height,0,Ht.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Ht.width,Ht.height,Et,bt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Wt,Ht.width,Ht.height,0,Et,bt,Ht.data)}}}else{if(ut=g.mipmaps,F&&mt){ut.length>0&&Ct++;const J=rt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(lt){F?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Et,bt,ft[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,ft[J].width,ft[J].height,0,Et,bt,ft[J].data);for(let Rt=0;Rt<ut.length;Rt++){const fe=ut[Rt].image[J].image;F?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,fe.width,fe.height,Et,bt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Wt,fe.width,fe.height,0,Et,bt,fe.data)}}else{F?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Et,bt,ft[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Et,bt,ft[J]);for(let Rt=0;Rt<ut.length;Rt++){const Ht=ut[Rt];F?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,Et,bt,Ht.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Wt,Et,bt,Ht.image[J])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),X.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function pt(M,g,L,W,Z,X){const _t=r.convert(L.format,L.colorSpace),ct=r.convert(L.type),wt=A(L.internalFormat,_t,ct,L.colorSpace),Lt=i.get(g),lt=i.get(L);if(lt.__renderTarget=g,!Lt.__hasExternalTextures){const ft=Math.max(1,g.width>>X),vt=Math.max(1,g.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,wt,ft,vt,g.depth,0,_t,ct,null):e.texImage2D(Z,X,wt,ft,vt,0,_t,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),ot(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,lt.__webglTexture,0,T(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,lt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(M,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const W=g.depthTexture,Z=W&&W.isDepthTexture?W.type:null,X=b(g.stencilBuffer,Z),_t=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ot(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T(g),X,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,T(g),X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,M)}else{const W=g.textures;for(let Z=0;Z<W.length;Z++){const X=W[Z],_t=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),wt=A(X.internalFormat,_t,ct,X.colorSpace);ot(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T(g),wt,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,T(g),wt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,wt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(M,g,L){const W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,g.depthTexture);const Lt=r.convert(g.depthTexture.format),lt=r.convert(g.depthTexture.type);let ft;g.depthTexture.format===li?ft=n.DEPTH_COMPONENT24:g.depthTexture.format===qi&&(ft=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ft,g.width,g.height,0,Lt,lt,null)}}else G(g.depthTexture,0);const X=Z.__webglTexture,_t=T(g),ct=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,wt=g.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===li)ot(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,ct,X,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,wt,ct,X,0);else if(g.depthTexture.format===qi)ot(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,ct,X,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,wt,ct,X,0);else throw new Error("Unknown depthTexture format")}function zt(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=W}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let W=0;W<6;W++)Ft(g.__webglFramebuffer[W],M,W);else{const W=M.texture.mipmaps;W&&W.length>0?Ft(g.__webglFramebuffer[0],M,0):Ft(g.__webglFramebuffer,M,0)}else if(L){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),Vt(g.__webglDepthbuffer[W],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else{const W=M.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Vt(g.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function C(M,g,L){const W=i.get(M);g!==void 0&&pt(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&zt(M)}function U(M){const g=M.texture,L=i.get(M),W=i.get(g);M.addEventListener("dispose",I);const Z=M.textures,X=M.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),X){L.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ct]=[];for(let wt=0;wt<g.mipmaps.length;wt++)L.__webglFramebuffer[ct][wt]=n.createFramebuffer()}else L.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ct=0;ct<g.mipmaps.length;ct++)L.__webglFramebuffer[ct]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ct=0,wt=Z.length;ct<wt;ct++){const Lt=i.get(Z[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&ot(M)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const wt=Z[ct];L.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ct]);const Lt=r.convert(wt.format,wt.colorSpace),lt=r.convert(wt.type),ft=A(wt.internalFormat,Lt,lt,wt.colorSpace,M.isXRRenderTarget===!0),vt=T(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,ft,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,L.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),gt(n.TEXTURE_CUBE_MAP,g);for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0)for(let wt=0;wt<g.mipmaps.length;wt++)pt(L.__webglFramebuffer[ct][wt],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt);else pt(L.__webglFramebuffer[ct],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ct=0,wt=Z.length;ct<wt;ct++){const Lt=Z[ct],lt=i.get(Lt);let ft=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ft=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),gt(ft,Lt),pt(L.__webglFramebuffer,M,Lt,n.COLOR_ATTACHMENT0+ct,ft,0),m(Lt)&&p(ft)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,W.__webglTexture),gt(ct,g),g.mipmaps&&g.mipmaps.length>0)for(let wt=0;wt<g.mipmaps.length;wt++)pt(L.__webglFramebuffer[wt],M,g,n.COLOR_ATTACHMENT0,ct,wt);else pt(L.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ct,0);m(g)&&p(ct),e.unbindTexture()}M.depthBuffer&&zt(M)}function k(M){const g=M.textures;for(let L=0,W=g.length;L<W;L++){const Z=g[L];if(m(Z)){const X=E(M),_t=i.get(Z).__webglTexture;e.bindTexture(X,_t),p(X),e.unbindTexture()}}}const tt=[],j=[];function nt(M){if(M.samples>0){if(ot(M)===!1){const g=M.textures,L=M.width,W=M.height;let Z=n.COLOR_BUFFER_BIT;const X=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(M),ct=g.length>1;if(ct)for(let Lt=0;Lt<g.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const wt=M.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Lt=0;Lt<g.length;Lt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]);const lt=i.get(g[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,Z,n.NEAREST),l===!0&&(tt.length=0,j.length=0,tt.push(n.COLOR_ATTACHMENT0+Lt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(tt.push(X),j.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Lt=0;Lt<g.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]);const lt=i.get(g[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function T(M){return Math.min(s.maxSamples,M.samples)}function ot(M){const g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function st(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Q(M,g){const L=M.colorSpace,W=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Ds&&L!==yi&&(te.getTransfer(L)===re?(W!==gn||Z!==Qe)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",L)),g}function rt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=it,this.rebindTextures=C,this.setupRenderTarget=U,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oy(n,t){function e(i,s=yi){let r;const a=te.getTransfer(s);if(i===Qe)return n.UNSIGNED_BYTE;if(i===Tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===xd)return n.RGB;if(i===gn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===wc)return n.RED_INTEGER;if(i===Ls)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Rc)return n.RGBA_INTEGER;if(i===ca||i===ua||i===fa||i===ha)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===Ml||i===yl||i===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===Tl)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Al)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wl)return r.COMPRESSED_R11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Rl)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===Dl||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Vl||i===Hl||i===Gl||i===kl||i===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===jl||i===Kl||i===Zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ld(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ln({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fy extends Us{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const x=typeof XRWebGLBinding<"u",m=new uy,p={},E=e.getContextAttributes();let A=null,b=null;const w=[],P=[],I=new Zt;let v=null;const S=new on;S.viewport=new _e;const H=new on;H.viewport=new _e;const R=[S,H],D=new S0;let O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=w[et];return ht===void 0&&(ht=new Mo,w[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=w[et];return ht===void 0&&(ht=new Mo,w[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=w[et];return ht===void 0&&(ht=new Mo,w[et]=ht),ht.getHandSpace()};function G(et){const ht=P.indexOf(et.inputSource);if(ht===-1)return;const pt=w[ht];pt!==void 0&&(pt.update(et.inputSource,et.frame,c||a),pt.dispatchEvent({type:et.type,data:et.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",N);for(let et=0;et<w.length;et++){const ht=P[et];ht!==null&&(P[et]=null,w[et].disconnect(ht))}O=null,Y=null,m.reset();for(const et in p)delete p[et];t.setRenderTarget(A),d=null,f=null,h=null,s=null,b=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Vt=null,Ft=null;E.depth&&(Ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?qi:li,Vt=E.stencil?_r:zn);const zt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new On(f.textureWidth,f.textureHeight,{format:gn,type:Qe,depthTexture:new Sr(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new On(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(et){for(let ht=0;ht<et.removed.length;ht++){const pt=et.removed[ht],Vt=P.indexOf(pt);Vt>=0&&(P[Vt]=null,w[Vt].disconnect(pt))}for(let ht=0;ht<et.added.length;ht++){const pt=et.added[ht];let Vt=P.indexOf(pt);if(Vt===-1){for(let zt=0;zt<w.length;zt++)if(zt>=P.length){P.push(pt),Vt=zt;break}else if(P[zt]===null){P[zt]=pt,Vt=zt;break}if(Vt===-1)break}const Ft=w[Vt];Ft&&Ft.connect(pt)}}const it=new z,at=new z;function St(et,ht,pt){it.setFromMatrixPosition(ht.matrixWorld),at.setFromMatrixPosition(pt.matrixWorld);const Vt=it.distanceTo(at),Ft=ht.projectionMatrix.elements,zt=pt.projectionMatrix.elements,C=Ft[14]/(Ft[10]-1),U=Ft[14]/(Ft[10]+1),k=(Ft[9]+1)/Ft[5],tt=(Ft[9]-1)/Ft[5],j=(Ft[8]-1)/Ft[0],nt=(zt[8]+1)/zt[0],T=C*j,ot=C*nt,st=Vt/(-j+nt),Q=st*-j;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Q),et.translateZ(st),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const rt=C+st,M=U+st,g=T-Q,L=ot+(Vt-Q),W=k*U/M*rt,Z=tt*U/M*rt;et.projectionMatrix.makePerspective(g,L,W,Z,rt,M),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Tt(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ht=et.near,pt=et.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),D.near=H.near=S.near=ht,D.far=H.far=S.far=pt,(O!==D.near||Y!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,Y=D.far),D.layers.mask=et.layers.mask|6,S.layers.mask=D.layers.mask&-5,H.layers.mask=D.layers.mask&-3;const Vt=et.parent,Ft=D.cameras;Tt(D,Vt);for(let zt=0;zt<Ft.length;zt++)Tt(Ft[zt],Vt);Ft.length===2?St(D,S,H):D.projectionMatrix.copy(S.projectionMatrix),gt(et,D,Vt)};function gt(et,ht,pt){pt===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=xr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(et){return p[et]};let Gt=null;function ue(et,ht){if(u=ht.getViewerPose(c||a),_=ht,u!==null){const pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Vt=!1;pt.length!==D.cameras.length&&(D.cameras.length=0,Vt=!0);for(let U=0;U<pt.length;U++){const k=pt[U];let tt=null;if(d!==null)tt=d.getViewport(k);else{const nt=h.getViewSubImage(f,k);tt=nt.viewport,U===0&&(t.setRenderTargetTextures(b,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(b))}let j=R[U];j===void 0&&(j=new on,j.layers.enable(U),j.viewport=new _e,R[U]=j),j.matrix.fromArray(k.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(k.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(tt.x,tt.y,tt.width,tt.height),U===0&&(D.matrix.copy(j.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Vt===!0&&D.cameras.push(j)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const U=h.getDepthInformation(pt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Ft&&Ft.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let U=0;U<pt.length;U++){const k=pt[U].camera;if(k){let tt=p[k];tt||(tt=new Ld,p[k]=tt);const j=h.getCameraImage(k);tt.sourceTexture=j}}}}for(let pt=0;pt<w.length;pt++){const Vt=P[pt],Ft=w[pt];Vt!==null&&Ft!==void 0&&Ft.update(Vt,ht,c||a)}Gt&&Gt(et,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}const le=new Ud;le.setAnimationLoop(ue),this.setAnimationLoop=function(et){Gt=et},this.dispose=function(){}}}const zi=new Vn,hy=new pe;function dy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,b){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),A=E.envMap,b=E.envMapRotation;A&&(m.envMap.value=A,zi.copy(b),zi.x*=-1,zi.y*=-1,zi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(zi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function py(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const b=A.program;i.uniformBlockBinding(E,b)}function c(E,A){let b=s[E.id];b===void 0&&(_(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",m));const w=A.program;i.updateUBOMapping(E,w);const P=t.render.frame;r[E.id]!==P&&(f(E),r[E.id]=P)}function u(E){const A=h();E.__bindingPointIndex=A;const b=n.createBuffer(),w=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const A=s[E.id],b=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,I=b.length;P<I;P++){const v=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,H=v.length;S<H;S++){const R=v[S];if(d(R,P,S,w)===!0){const D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let G=0;G<O.length;G++){const V=O[G],N=x(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+Y,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,Y),Y+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,A,b,w){const P=E.value,I=A+"_"+b;if(w[I]===void 0)return typeof P=="number"||typeof P=="boolean"?w[I]=P:w[I]=P.clone(),!0;{const v=w[I];if(typeof P=="number"||typeof P=="boolean"){if(v!==P)return w[I]=P,!0}else if(v.equals(P)===!1)return v.copy(P),!0}return!1}function _(E){const A=E.uniforms;let b=0;const w=16;for(let I=0,v=A.length;I<v;I++){const S=Array.isArray(A[I])?A[I]:[A[I]];for(let H=0,R=S.length;H<R;H++){const D=S[H],O=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,G=O.length;Y<G;Y++){const V=O[Y],N=x(V),it=b%w,at=it%N.boundary,St=it+at;b+=at,St!==0&&w-St<N.storage&&(b+=w-St),D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=N.storage}}}const P=b%w;return P>0&&(b+=w-P),E.__size=b,E.__cache={},this}function x(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Bt("WebGLRenderer: Unsupported uniform value type.",E),A}function m(E){const A=E.target;A.removeEventListener("dispose",m);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function gy(){return bn===null&&(bn=new Z_(my,16,16,Ls,oi),bn.name="DFG_LUT",bn.minFilter=ze,bn.magFilter=ze,bn.wrapS=Qn,bn.wrapT=Qn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class _y{constructor(t={}){const{canvas:e=d_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=d,m=new Set([Rc,Cc,wc]),p=new Set([Qe,zn,gr,_r,Tc,Ac]),E=new Uint32Array(4),A=new Int32Array(4);let b=null,w=null;const P=[],I=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let H=!1;this._outputColorSpace=an;let R=0,D=0,O=null,Y=-1,G=null;const V=new _e,N=new _e;let it=null;const at=new kt(0);let St=0,Tt=e.width,gt=e.height,Gt=1,ue=null,le=null;const et=new _e(0,0,Tt,gt),ht=new _e(0,0,Tt,gt);let pt=!1;const Vt=new Nc;let Ft=!1,zt=!1;const C=new pe,U=new z,k=new _e,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function nt(){return O===null?Gt:1}let T=i;function ot(y,B){return e.getContext(y,B)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",fe,!1),T===null){const B="webgl2";if(T=ot(B,y),T===null)throw ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Qt("WebGLRenderer: "+y.message),y}let st,Q,rt,M,g,L,W,Z,X,_t,ct,wt,Lt,lt,ft,vt,Et,bt,Wt,F,mt,dt,Ct;function ut(){st=new _S(T),st.init(),mt=new oy(T,st),Q=new cS(T,st,t,mt),rt=new ry(T,st),Q.reversedDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),M=new SS(T),g=new XM,L=new ay(T,st,rt,g,Q,mt,M),W=new gS(S),Z=new T0(T),dt=new oS(T,Z),X=new vS(T,Z,M,dt),_t=new yS(T,X,Z,dt,M),bt=new MS(T,Q,L),ft=new uS(g),ct=new WM(S,W,st,Q,dt,ft),wt=new dy(S,g),Lt=new YM,lt=new QM(st),Et=new aS(S,W,rt,_t,_,l),vt=new sy(S,_t,Q),Ct=new py(T,M,Q,rt),Wt=new lS(T,st,M),F=new xS(T,st,M),M.programs=ct.programs,S.capabilities=Q,S.extensions=st,S.properties=g,S.renderLists=Lt,S.shadowMap=vt,S.state=rt,S.info=M}ut(),x!==Qe&&(v=new bS(x,e.width,e.height,s,r));const J=new fy(S,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(y){y!==void 0&&(Gt=y,this.setSize(Tt,gt,!1))},this.getSize=function(y){return y.set(Tt,gt)},this.setSize=function(y,B,K=!0){if(J.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=y,gt=B,e.width=Math.floor(y*Gt),e.height=Math.floor(B*Gt),K===!0&&(e.style.width=y+"px",e.style.height=B+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(Tt*Gt,gt*Gt).floor()},this.setDrawingBufferSize=function(y,B,K){Tt=y,gt=B,Gt=K,e.width=Math.floor(y*K),e.height=Math.floor(B*K),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(x===Qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(et)},this.setViewport=function(y,B,K,$){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,B,K,$),rt.viewport(V.copy(et).multiplyScalar(Gt).round())},this.getScissor=function(y){return y.copy(ht)},this.setScissor=function(y,B,K,$){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,B,K,$),rt.scissor(N.copy(ht).multiplyScalar(Gt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){rt.setScissorTest(pt=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,K=!0){let $=0;if(y){let q=!1;if(O!==null){const Mt=O.texture.format;q=m.has(Mt)}if(q){const Mt=O.texture.type,At=p.has(Mt),yt=Et.getClearColor(),Pt=Et.getClearAlpha(),Ut=yt.r,Xt=yt.g,Kt=yt.b;At?(E[0]=Ut,E[1]=Xt,E[2]=Kt,E[3]=Pt,T.clearBufferuiv(T.COLOR,0,E)):(A[0]=Ut,A[1]=Xt,A[2]=Kt,A[3]=Pt,T.clearBufferiv(T.COLOR,0,A))}else $|=T.COLOR_BUFFER_BIT}B&&($|=T.DEPTH_BUFFER_BIT),K&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Et.dispose(),Lt.dispose(),lt.dispose(),g.dispose(),W.dispose(),_t.dispose(),dt.dispose(),Ct.dispose(),ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",Vc),J.removeEventListener("sessionend",Hc),Ci.stop()};function Rt(y){y.preventDefault(),Vu("WebGLRenderer: Context Lost."),H=!0}function Ht(){Vu("WebGLRenderer: Context Restored."),H=!1;const y=M.autoReset,B=vt.enabled,K=vt.autoUpdate,$=vt.needsUpdate,q=vt.type;ut(),M.autoReset=y,vt.enabled=B,vt.autoUpdate=K,vt.needsUpdate=$,vt.type=q}function fe(y){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const B=y.target;B.removeEventListener("dispose",se),Hn(B)}function Hn(y){Gn(y),g.remove(y)}function Gn(y){const B=g.get(y).programs;B!==void 0&&(B.forEach(function(K){ct.releaseProgram(K)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,K,$,q,Mt){B===null&&(B=tt);const At=q.isMesh&&q.matrixWorld.determinant()<0,yt=Gd(y,B,K,$,q);rt.setMaterial($,At);let Pt=K.index,Ut=1;if($.wireframe===!0){if(Pt=X.getWireframeAttribute(K),Pt===void 0)return;Ut=2}const Xt=K.drawRange,Kt=K.attributes.position;let Nt=Xt.start*Ut,ae=(Xt.start+Xt.count)*Ut;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Ut),ae=Math.min(ae,(Mt.start+Mt.count)*Ut)),Pt!==null?(Nt=Math.max(Nt,0),ae=Math.min(ae,Pt.count)):Kt!=null&&(Nt=Math.max(Nt,0),ae=Math.min(ae,Kt.count));const xe=ae-Nt;if(xe<0||xe===1/0)return;dt.setup(q,$,yt,K,Pt);let me,oe=Wt;if(Pt!==null&&(me=Z.get(Pt),oe=F,oe.setIndex(me)),q.isMesh)$.wireframe===!0?(rt.setLineWidth($.wireframeLinewidth*nt()),oe.setMode(T.LINES)):oe.setMode(T.TRIANGLES);else if(q.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),rt.setLineWidth(Ue*nt()),q.isLineSegments?oe.setMode(T.LINES):q.isLineLoop?oe.setMode(T.LINE_LOOP):oe.setMode(T.LINE_STRIP)}else q.isPoints?oe.setMode(T.POINTS):q.isSprite&&oe.setMode(T.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Aa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ue=q._multiDrawStarts,Dt=q._multiDrawCounts,Ke=q._multiDrawCount,ee=Pt?Z.get(Pt).bytesPerElement:1,cn=g.get($).currentProgram.getUniforms();for(let Mn=0;Mn<Ke;Mn++)cn.setValue(T,"_gl_DrawID",Mn),oe.render(Ue[Mn]/ee,Dt[Mn])}else if(q.isInstancedMesh)oe.renderInstances(Nt,xe,q.count);else if(K.isInstancedBufferGeometry){const Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Dt=Math.min(K.instanceCount,Ue);oe.renderInstances(Nt,xe,Dt)}else oe.render(Nt,xe)};function zc(y,B,K){y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=$e,y.needsUpdate=!0,Rr(y,B,K),y.side=wi,y.needsUpdate=!0,Rr(y,B,K),y.side=pn):Rr(y,B,K)}this.compile=function(y,B,K=null){K===null&&(K=y),w=lt.get(K),w.init(B),I.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),y!==K&&y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const $=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const yt=Mt[At];zc(yt,K,q),$.add(yt)}else zc(Mt,K,q),$.add(Mt)}),w=I.pop(),$},this.compileAsync=function(y,B,K=null){const $=this.compile(y,B,K);return new Promise(q=>{function Mt(){if($.forEach(function(At){g.get(At).currentProgram.isReady()&&$.delete(At)}),$.size===0){q(y);return}setTimeout(Mt,10)}st.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Za=null;function Hd(y){Za&&Za(y)}function Vc(){Ci.stop()}function Hc(){Ci.start()}const Ci=new Ud;Ci.setAnimationLoop(Hd),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(y){Za=y,J.setAnimationLoop(y),y===null?Ci.stop():Ci.start()},J.addEventListener("sessionstart",Vc),J.addEventListener("sessionend",Hc),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const K=J.enabled===!0&&J.isPresenting===!0,$=v!==null&&(O===null||K)&&v.begin(S,O);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,B,O),w=lt.get(y,I.length),w.init(B),I.push(w),C.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Vt.setFromProjectionMatrix(C,Un,B.reversedDepth),zt=this.localClippingEnabled,Ft=ft.init(this.clippingPlanes,zt),b=Lt.get(y,P.length),b.init(),P.push(b),J.enabled===!0&&J.isPresenting===!0){const At=S.xr.getDepthSensingMesh();At!==null&&Ja(At,B,-1/0,S.sortObjects)}Ja(y,B,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(ue,le),j=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,j&&Et.addToRenderList(b,y),this.info.render.frame++,Ft===!0&&ft.beginShadows();const q=w.state.shadowsArray;if(vt.render(q,y,B),Ft===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&v.hasRenderPass())===!1){const At=b.opaque,yt=b.transmissive;if(w.setupLights(),B.isArrayCamera){const Pt=B.cameras;if(yt.length>0)for(let Ut=0,Xt=Pt.length;Ut<Xt;Ut++){const Kt=Pt[Ut];kc(At,yt,y,Kt)}j&&Et.render(y);for(let Ut=0,Xt=Pt.length;Ut<Xt;Ut++){const Kt=Pt[Ut];Gc(b,y,Kt,Kt.viewport)}}else yt.length>0&&kc(At,yt,y,B),j&&Et.render(y),Gc(b,y,B)}O!==null&&D===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),$&&v.end(S),y.isScene===!0&&y.onAfterRender(S,y,B),dt.resetDefaultState(),Y=-1,G=null,I.pop(),I.length>0?(w=I[I.length-1],Ft===!0&&ft.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?b=P[P.length-1]:b=null};function Ja(y,B,K,$){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Vt.intersectsSprite(y)){$&&k.setFromMatrixPosition(y.matrixWorld).applyMatrix4(C);const At=_t.update(y),yt=y.material;yt.visible&&b.push(y,At,yt,K,k.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Vt.intersectsObject(y))){const At=_t.update(y),yt=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),k.copy(y.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),k.copy(At.boundingSphere.center)),k.applyMatrix4(y.matrixWorld).applyMatrix4(C)),Array.isArray(yt)){const Pt=At.groups;for(let Ut=0,Xt=Pt.length;Ut<Xt;Ut++){const Kt=Pt[Ut],Nt=yt[Kt.materialIndex];Nt&&Nt.visible&&b.push(y,At,Nt,K,k.z,Kt)}}else yt.visible&&b.push(y,At,yt,K,k.z,null)}}const Mt=y.children;for(let At=0,yt=Mt.length;At<yt;At++)Ja(Mt[At],B,K,$)}function Gc(y,B,K,$){const{opaque:q,transmissive:Mt,transparent:At}=y;w.setupLightsView(K),Ft===!0&&ft.setGlobalState(S.clippingPlanes,K),$&&rt.viewport(V.copy($)),q.length>0&&Cr(q,B,K),Mt.length>0&&Cr(Mt,B,K),At.length>0&&Cr(At,B,K),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function kc(y,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Nt=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new On(1,1,{generateMipmaps:!0,type:Nt?oi:Qe,minFilter:Xi,samples:Math.max(4,Q.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const Mt=w.state.transmissionRenderTarget[$.id],At=$.viewport||V;Mt.setSize(At.z*S.transmissionResolutionScale,At.w*S.transmissionResolutionScale);const yt=S.getRenderTarget(),Pt=S.getActiveCubeFace(),Ut=S.getActiveMipmapLevel();S.setRenderTarget(Mt),S.getClearColor(at),St=S.getClearAlpha(),St<1&&S.setClearColor(16777215,.5),S.clear(),j&&Et.render(K);const Xt=S.toneMapping;S.toneMapping=Fn;const Kt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Ft===!0&&ft.setGlobalState(S.clippingPlanes,$),Cr(y,K,$),L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ae=0,xe=B.length;ae<xe;ae++){const me=B[ae],{object:oe,geometry:Ue,material:Dt,group:Ke}=me;if(Dt.side===pn&&oe.layers.test($.layers)){const ee=Dt.side;Dt.side=$e,Dt.needsUpdate=!0,Wc(oe,K,$,Ue,Dt,Ke),Dt.side=ee,Dt.needsUpdate=!0,Nt=!0}}Nt===!0&&(L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt))}S.setRenderTarget(yt,Pt,Ut),S.setClearColor(at,St),Kt!==void 0&&($.viewport=Kt),S.toneMapping=Xt}function Cr(y,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Mt=y.length;q<Mt;q++){const At=y[q],{object:yt,geometry:Pt,group:Ut}=At;let Xt=At.material;Xt.allowOverride===!0&&$!==null&&(Xt=$),yt.layers.test(K.layers)&&Wc(yt,B,K,Pt,Xt,Ut)}}function Wc(y,B,K,$,q,Mt){y.onBeforeRender(S,B,K,$,q,Mt),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(S,B,K,$,y,Mt),q.transparent===!0&&q.side===pn&&q.forceSinglePass===!1?(q.side=$e,q.needsUpdate=!0,S.renderBufferDirect(K,B,$,q,y,Mt),q.side=wi,q.needsUpdate=!0,S.renderBufferDirect(K,B,$,q,y,Mt),q.side=pn):S.renderBufferDirect(K,B,$,q,y,Mt),y.onAfterRender(S,B,K,$,q,Mt)}function Rr(y,B,K){B.isScene!==!0&&(B=tt);const $=g.get(y),q=w.state.lights,Mt=w.state.shadowsArray,At=q.state.version,yt=ct.getParameters(y,q.state,Mt,B,K),Pt=ct.getProgramCacheKey(yt);let Ut=$.programs;$.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;const Xt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;$.envMap=W.get(y.envMap||$.environment,Xt),$.envMapRotation=$.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",se),Ut=new Map,$.programs=Ut);let Kt=Ut.get(Pt);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===At)return qc(y,yt),Kt}else yt.uniforms=ct.getUniforms(y),y.onBeforeCompile(yt,S),Kt=ct.acquireProgram(yt,Pt),Ut.set(Pt,Kt),$.uniforms=yt.uniforms;const Nt=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),qc(y,yt),$.needsLights=Wd(y),$.lightsStateVersion=At,$.needsLights&&(Nt.ambientLightColor.value=q.state.ambient,Nt.lightProbe.value=q.state.probe,Nt.directionalLights.value=q.state.directional,Nt.directionalLightShadows.value=q.state.directionalShadow,Nt.spotLights.value=q.state.spot,Nt.spotLightShadows.value=q.state.spotShadow,Nt.rectAreaLights.value=q.state.rectArea,Nt.ltc_1.value=q.state.rectAreaLTC1,Nt.ltc_2.value=q.state.rectAreaLTC2,Nt.pointLights.value=q.state.point,Nt.pointLightShadows.value=q.state.pointShadow,Nt.hemisphereLights.value=q.state.hemi,Nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Nt.spotLightMatrix.value=q.state.spotLightMatrix,Nt.spotLightMap.value=q.state.spotLightMap,Nt.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function Xc(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=da.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function qc(y,B){const K=g.get(y);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Gd(y,B,K,$,q){B.isScene!==!0&&(B=tt),L.resetTextureUnits();const Mt=B.fog,At=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,yt=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ds,Pt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ut=W.get($.envMap||At,Pt),Xt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Kt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Nt=!!K.morphAttributes.position,ae=!!K.morphAttributes.normal,xe=!!K.morphAttributes.color;let me=Fn;$.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(me=S.toneMapping);const oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ue=oe!==void 0?oe.length:0,Dt=g.get($),Ke=w.state.lights;if(Ft===!0&&(zt===!0||y!==G)){const Ae=y===G&&$.id===Y;ft.setState($,y,Ae)}let ee=!1;$.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ke.state.version||Dt.outputColorSpace!==yt||q.isBatchedMesh&&Dt.batching===!1||!q.isBatchedMesh&&Dt.batching===!0||q.isBatchedMesh&&Dt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Dt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||q.isInstancedMesh&&Dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Dt.instancingMorph===!1&&q.morphTexture!==null||Dt.envMap!==Ut||$.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ft.numPlanes||Dt.numIntersection!==ft.numIntersection)||Dt.vertexAlphas!==Xt||Dt.vertexTangents!==Kt||Dt.morphTargets!==Nt||Dt.morphNormals!==ae||Dt.morphColors!==xe||Dt.toneMapping!==me||Dt.morphTargetsCount!==Ue)&&(ee=!0):(ee=!0,Dt.__version=$.version);let cn=Dt.currentProgram;ee===!0&&(cn=Rr($,B,q));let Mn=!1,Ri=!1,Qi=!1;const ce=cn.getUniforms(),Le=Dt.uniforms;if(rt.useProgram(cn.program)&&(Mn=!0,Ri=!0,Qi=!0),$.id!==Y&&(Y=$.id,Ri=!0),Mn||G!==y){rt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ce.setValue(T,"projectionMatrix",y.projectionMatrix),ce.setValue(T,"viewMatrix",y.matrixWorldInverse);const fi=ce.map.cameraPosition;fi!==void 0&&fi.setValue(T,U.setFromMatrixPosition(y.matrixWorld)),Q.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ce.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,Ri=!0,Qi=!0)}if(Dt.needsLights&&(Ke.state.directionalShadowMap.length>0&&ce.setValue(T,"directionalShadowMap",Ke.state.directionalShadowMap,L),Ke.state.spotShadowMap.length>0&&ce.setValue(T,"spotShadowMap",Ke.state.spotShadowMap,L),Ke.state.pointShadowMap.length>0&&ce.setValue(T,"pointShadowMap",Ke.state.pointShadowMap,L)),q.isSkinnedMesh){ce.setOptional(T,q,"bindMatrix"),ce.setOptional(T,q,"bindMatrixInverse");const Ae=q.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ce.setValue(T,"boneTexture",Ae.boneTexture,L))}q.isBatchedMesh&&(ce.setOptional(T,q,"batchingTexture"),ce.setValue(T,"batchingTexture",q._matricesTexture,L),ce.setOptional(T,q,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",q._indirectTexture,L),ce.setOptional(T,q,"batchingColorTexture"),q._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",q._colorsTexture,L));const ui=K.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&bt.update(q,K,cn),(Ri||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,ce.setValue(T,"receiveShadow",q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(Le.envMapIntensity.value=B.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=gy()),Ri&&(ce.setValue(T,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&kd(Le,Qi),Mt&&$.fog===!0&&wt.refreshFogUniforms(Le,Mt),wt.refreshMaterialUniforms(Le,$,Gt,gt,w.state.transmissionRenderTarget[y.id]),da.upload(T,Xc(Dt),Le,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(da.upload(T,Xc(Dt),Le,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ce.setValue(T,"center",q.center),ce.setValue(T,"modelViewMatrix",q.modelViewMatrix),ce.setValue(T,"normalMatrix",q.normalMatrix),ce.setValue(T,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ae=$.uniformsGroups;for(let fi=0,ts=Ae.length;fi<ts;fi++){const Yc=Ae[fi];Ct.update(Yc,cn),Ct.bind(Yc,cn)}}return cn}function kd(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Wd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,B,K){const $=g.get(y);$.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),g.get(y.texture).__webglTexture=B,g.get(y.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const K=g.get(y);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const Xd=T.createFramebuffer();this.setRenderTarget=function(y,B=0,K=0){O=y,R=B,D=K;let $=null,q=!1,Mt=!1;if(y){const yt=g.get(y);if(yt.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(T.FRAMEBUFFER,yt.__webglFramebuffer),V.copy(y.viewport),N.copy(y.scissor),it=y.scissorTest,rt.viewport(V),rt.scissor(N),rt.setScissorTest(it),Y=-1;return}else if(yt.__webglFramebuffer===void 0)L.setupRenderTarget(y);else if(yt.__hasExternalTextures)L.rebindTextures(y,g.get(y.texture).__webglTexture,g.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Xt=y.depthTexture;if(yt.__boundDepthTexture!==Xt){if(Xt!==null&&g.has(Xt)&&(y.width!==Xt.image.width||y.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(y)}}const Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Mt=!0);const Ut=g.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ut[B])?$=Ut[B][K]:$=Ut[B],q=!0):y.samples>0&&L.useMultisampledRTT(y)===!1?$=g.get(y).__webglMultisampledFramebuffer:Array.isArray(Ut)?$=Ut[K]:$=Ut,V.copy(y.viewport),N.copy(y.scissor),it=y.scissorTest}else V.copy(et).multiplyScalar(Gt).floor(),N.copy(ht).multiplyScalar(Gt).floor(),it=pt;if(K!==0&&($=Xd),rt.bindFramebuffer(T.FRAMEBUFFER,$)&&rt.drawBuffers(y,$),rt.viewport(V),rt.scissor(N),rt.setScissorTest(it),q){const yt=g.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,K)}else if(Mt){const yt=B;for(let Pt=0;Pt<y.textures.length;Pt++){const Ut=g.get(y.textures[Pt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,K,yt)}}else if(y!==null&&K!==0){const yt=g.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yt.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(y,B,K,$,q,Mt,At,yt=0){if(!(y&&y.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){rt.bindFramebuffer(T.FRAMEBUFFER,Pt);try{const Ut=y.textures[yt],Xt=Ut.format,Kt=Ut.type;if(y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+yt),!Q.textureFormatReadable(Xt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Kt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-$&&K>=0&&K<=y.height-q&&T.readPixels(B,K,$,q,mt.convert(Xt),mt.convert(Kt),Mt)}finally{const Ut=O!==null?g.get(O).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(y,B,K,$,q,Mt,At,yt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(B>=0&&B<=y.width-$&&K>=0&&K<=y.height-q){rt.bindFramebuffer(T.FRAMEBUFFER,Pt);const Ut=y.textures[yt],Xt=Ut.format,Kt=Ut.type;if(y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+yt),!Q.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Nt),T.bufferData(T.PIXEL_PACK_BUFFER,Mt.byteLength,T.STREAM_READ),T.readPixels(B,K,$,q,mt.convert(Xt),mt.convert(Kt),0);const ae=O!==null?g.get(O).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,ae);const xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await p_(T,xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Nt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Mt),T.deleteBuffer(Nt),T.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,K=0){const $=Math.pow(2,-K),q=Math.floor(y.image.width*$),Mt=Math.floor(y.image.height*$),At=B!==null?B.x:0,yt=B!==null?B.y:0;L.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,At,yt,q,Mt),rt.unbindTexture()};const qd=T.createFramebuffer(),Yd=T.createFramebuffer();this.copyTextureToTexture=function(y,B,K=null,$=null,q=0,Mt=0){let At,yt,Pt,Ut,Xt,Kt,Nt,ae,xe;const me=y.isCompressedTexture?y.mipmaps[Mt]:y.image;if(K!==null)At=K.max.x-K.min.x,yt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Ut=K.min.x,Xt=K.min.y,Kt=K.isBox3?K.min.z:0;else{const Le=Math.pow(2,-q);At=Math.floor(me.width*Le),yt=Math.floor(me.height*Le),y.isDataArrayTexture?Pt=me.depth:y.isData3DTexture?Pt=Math.floor(me.depth*Le):Pt=1,Ut=0,Xt=0,Kt=0}$!==null?(Nt=$.x,ae=$.y,xe=$.z):(Nt=0,ae=0,xe=0);const oe=mt.convert(B.format),Ue=mt.convert(B.type);let Dt;B.isData3DTexture?(L.setTexture3D(B,0),Dt=T.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Dt=T.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Dt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,B.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,B.unpackAlignment);const Ke=T.getParameter(T.UNPACK_ROW_LENGTH),ee=T.getParameter(T.UNPACK_IMAGE_HEIGHT),cn=T.getParameter(T.UNPACK_SKIP_PIXELS),Mn=T.getParameter(T.UNPACK_SKIP_ROWS),Ri=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,me.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,me.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ut),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Kt);const Qi=y.isDataArrayTexture||y.isData3DTexture,ce=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const Le=g.get(y),ui=g.get(B),Ae=g.get(Le.__renderTarget),fi=g.get(ui.__renderTarget);rt.bindFramebuffer(T.READ_FRAMEBUFFER,Ae.__webglFramebuffer),rt.bindFramebuffer(T.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ts=0;ts<Pt;ts++)Qi&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,g.get(y).__webglTexture,q,Kt+ts),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,g.get(B).__webglTexture,Mt,xe+ts)),T.blitFramebuffer(Ut,Xt,At,yt,Nt,ae,At,yt,T.DEPTH_BUFFER_BIT,T.NEAREST);rt.bindFramebuffer(T.READ_FRAMEBUFFER,null),rt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||g.has(y)){const Le=g.get(y),ui=g.get(B);rt.bindFramebuffer(T.READ_FRAMEBUFFER,qd),rt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Yd);for(let Ae=0;Ae<Pt;Ae++)Qi?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Le.__webglTexture,q,Kt+Ae):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Le.__webglTexture,q),ce?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ui.__webglTexture,Mt,xe+Ae):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ui.__webglTexture,Mt),q!==0?T.blitFramebuffer(Ut,Xt,At,yt,Nt,ae,At,yt,T.COLOR_BUFFER_BIT,T.NEAREST):ce?T.copyTexSubImage3D(Dt,Mt,Nt,ae,xe+Ae,Ut,Xt,At,yt):T.copyTexSubImage2D(Dt,Mt,Nt,ae,Ut,Xt,At,yt);rt.bindFramebuffer(T.READ_FRAMEBUFFER,null),rt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Dt,Mt,Nt,ae,xe,At,yt,Pt,oe,Ue,me.data):B.isCompressedArrayTexture?T.compressedTexSubImage3D(Dt,Mt,Nt,ae,xe,At,yt,Pt,oe,me.data):T.texSubImage3D(Dt,Mt,Nt,ae,xe,At,yt,Pt,oe,Ue,me):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Mt,Nt,ae,At,yt,oe,Ue,me.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Mt,Nt,ae,me.width,me.height,oe,me.data):T.texSubImage2D(T.TEXTURE_2D,Mt,Nt,ae,At,yt,oe,Ue,me);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ke),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ee),T.pixelStorei(T.UNPACK_SKIP_PIXELS,cn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ri),Mt===0&&B.generateMipmaps&&T.generateMipmap(Dt),rt.unbindTexture()},this.initRenderTarget=function(y){g.get(y).__webglFramebuffer===void 0&&L.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?L.setTextureCube(y,0):y.isData3DTexture?L.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?L.setTexture2DArray(y,0):L.setTexture2D(y,0),rt.unbindTexture()},this.resetState=function(){R=0,D=0,O=null,rt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class vy{constructor(t,e=2){this.scene=t,this.radius=e,this.mesh=null,this.atmosphere=null,this.cloudsMesh=null,this._init()}_init(){this._createGlobe(),this._createAtmosphere(),this._createClouds(),this._createStarfield()}_createGlobe(){const t=new ws(this.radius,64,64),e=this._buildEarthTexture(),i=this._buildBumpTexture(),s=new cf({map:e,bumpMap:i,bumpScale:.04,specular:new kt(1122884),shininess:20});this.mesh=new Ve(t,s),this.scene.add(this.mesh)}_buildEarthTexture(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const s=i.getContext("2d");s.fillStyle="#060e1f",s.fillRect(0,0,2048,1024);const r=s.createLinearGradient(0,0,0,1024);r.addColorStop(0,"rgba(8,30,80,0.85)"),r.addColorStop(.5,"rgba(5,18,55,0.9)"),r.addColorStop(1,"rgba(8,30,80,0.85)"),s.fillStyle=r,s.fillRect(0,0,2048,1024),s.fillStyle="#1a3a28",this._poly(s,[[830,240],[920,210],[1100,205],[1260,215],[1420,195],[1530,215],[1580,255],[1560,310],[1470,360],[1340,385],[1200,395],[1080,375],[980,398],[920,425],[875,405],[845,375],[825,330],[815,275]]),this._poly(s,[[1080,380],[1120,370],[1150,430],[1130,490],[1090,520],[1060,480],[1050,420]]),this._poly(s,[[1280,390],[1330,375],[1380,395],[1390,440],[1360,460],[1300,445],[1270,420]]),this._poly(s,[[1440,255],[1460,245],[1470,270],[1455,290],[1435,280]]),this._poly(s,[[950,405],[990,375],[1040,368],[1075,395],[1090,455],[1095,530],[1070,610],[1030,660],[975,685],[928,665],[895,610],[882,545],[890,480],[915,440]]),this._poly(s,[[1065,540],[1080,525],[1090,555],[1080,595],[1060,600],[1048,568]]),this._poly(s,[[220,185],[310,170],[400,165],[470,180],[510,225],[520,280],[490,340],[450,385],[400,410],[340,430],[290,420],[240,390],[200,350],[185,300],[195,250]]),this._poly(s,[[360,120],[420,105],[460,115],[450,155],[400,165],[355,155]]),this._poly(s,[[430,415],[470,410],[490,435],[470,455],[440,450],[420,435]]),this._poly(s,[[390,440],[450,425],[510,445],[540,500],[540,570],[520,640],[490,700],[450,730],[400,720],[360,680],[340,620],[345,550],[360,490]]),this._poly(s,[[1390,540],[1460,520],[1540,530],[1590,570],[1600,630],[1560,680],[1490,700],[1420,690],[1375,650],[1360,590]]),this._poly(s,[[1620,660],[1640,645],[1655,670],[1640,700],[1620,700]]),s.fillStyle="#c8d8e8",this._poly(s,[[0,890],[200,870],[400,855],[600,860],[800,850],[1e3,855],[1200,850],[1400,855],[1600,860],[1800,865],[2048,870],[2048,1024],[0,1024]]),this._poly(s,[[0,130],[200,120],[400,125],[600,118],[800,122],[1e3,118],[1200,122],[1400,118],[1600,125],[1800,120],[2048,130],[2048,0],[0,0]]),s.strokeStyle="rgba(0,200,255,0.06)",s.lineWidth=.8;for(let a=0;a<360;a+=30){const o=a/360*2048;s.beginPath(),s.moveTo(o,0),s.lineTo(o,1024),s.stroke()}for(let a=0;a<=180;a+=30){const o=a/180*1024;s.beginPath(),s.moveTo(0,o),s.lineTo(2048,o),s.stroke()}return new lf(i)}_poly(t,e){t.beginPath(),t.moveTo(e[0][0],e[0][1]),e.slice(1).forEach(([i,s])=>t.lineTo(i,s)),t.closePath(),t.fill()}_buildBumpTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");return e.fillStyle="#808080",e.fillRect(0,0,512,256),new lf(t)}_createAtmosphere(){const t=new ws(this.radius*1.08,64,64),e=new ln({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0,0,1.0)), 3.0);
          gl_FragColor = vec4(0.1, 0.6, 1.0, 1.0) * intensity;
        }
      `,side:$e,blending:Ea,transparent:!0});this.atmosphere=new Ve(t,e),this.scene.add(this.atmosphere)}_createClouds(){const t=new ws(this.radius*1.02,48,48),e=new cf({color:16777215,transparent:!0,opacity:.12,depthWrite:!1});this.cloudsMesh=new Ve(t,e),this.scene.add(this.cloudsMesh)}_createStarfield(){const e=new Float32Array(18e3);for(let r=0;r<6e3;r++){const a=80+Math.random()*40,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);e[r*3]=a*Math.sin(l)*Math.cos(o),e[r*3+1]=a*Math.cos(l),e[r*3+2]=a*Math.sin(l)*Math.sin(o)}const i=new Ie;i.setAttribute("position",new nn(e,3));const s=new Cd({color:16777215,size:.12,transparent:!0,opacity:.7,sizeAttenuation:!0});this.scene.add(new Rd(i,s))}update(t){this.cloudsMesh&&(this.cloudsMesh.rotation.y+=t*.02)}getRadius(){return this.radius}}function nc(n,t,e){const i=(90-n)*(Math.PI/180),s=(t+180)*(Math.PI/180);return{x:-(e*Math.sin(i)*Math.cos(s)),y:e*Math.cos(i),z:e*Math.sin(i)*Math.sin(s)}}class xy{constructor(t,e){this.scene=t,this.radius=e,this.flyItems=[],this.group=new xs,t.add(this.group)}addLine(t,e,i="#00c8ff"){const s=this._buildArcPoints(t,e);this._createStaticLine(s,i),this._createFlowParticle(s,i)}_buildArcPoints(t,e){const i=this.radius,s=this._v3(nc(t.lat,t.lng,i)),r=this._v3(nc(e.lat,e.lng,i)),a=s.clone().add(r).multiplyScalar(.5);return a.normalize().multiplyScalar(i+s.distanceTo(r)*.38),new o0(s,a,r).getPoints(80)}_v3(t){return new z(t.x,t.y,t.z)}_createStaticLine(t,e){const i=new Ie().setFromPoints(t),s=new wd({color:new kt(e),transparent:!0,opacity:.18});this.group.add(new e0(i,s))}_createFlowParticle(t,e){const s=new Float32Array(42),r=new Ie;r.setAttribute("position",new nn(s,3));const a=new ln({uniforms:{uColor:{value:new kt(e)}},vertexShader:`
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          gl_PointSize = 4.5 * vAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if(d > 0.5) discard;
          gl_FragColor = vec4(uColor, vAlpha * (1.0 - d * 1.8));
        }`,transparent:!0,depthWrite:!1,blending:Ea}),o=new Float32Array(14);for(let c=0;c<14;c++)o[c]=(c+1)/14;r.setAttribute("aAlpha",new nn(o,1));const l=new Rd(r,a);this.group.add(l),this.flyItems.push({points:t,progress:Math.random(),geo:r,posAttr:r.attributes.position,trail:14})}update(t){for(const i of this.flyItems){i.progress=(i.progress+t*.18)%1;const s=i.points.length,r=Math.floor(i.progress*s);for(let a=0;a<i.trail;a++){const o=(r-a+s)%s,l=i.points[o];i.posAttr.setXYZ(i.trail-1-a,l.x,l.y,l.z)}i.posAttr.needsUpdate=!0}}clear(){this.group.clear(),this.flyItems=[]}}const Pn=[{id:"CN-BJ",name:"北京储能中心",location:"中国·北京",lat:39.9042,lng:116.4074,capacity:"500 MWh",power:"250 MW",status:"online",type:"锂离子电池",efficiency:"94.2%",online:"2022-03-15",description:"华北地区最大储能调峰电站，服务北京电网调峰调频。"},{id:"CN-SH",name:"上海虹桥储能站",location:"中国·上海",lat:31.2304,lng:121.4737,capacity:"320 MWh",power:"160 MW",status:"online",type:"磷酸铁锂",efficiency:"95.1%",online:"2021-09-01",description:"服务长三角电网，支持可再生能源并网消纳。"},{id:"US-CA",name:"Moss Landing ESS",location:"USA · California",lat:36.8057,lng:-121.7876,capacity:"730 MWh",power:"182.5 MW",status:"online",type:"Lithium-ion",efficiency:"93.8%",online:"2020-12-10",description:"One of the world's largest battery storage facilities on the Pacific coast."},{id:"AU-SA",name:"Hornsdale Power Reserve",location:"Australia · South Australia",lat:-33.0696,lng:138.0238,capacity:"193.5 MWh",power:"150 MW",status:"online",type:"Tesla Megapack",efficiency:"96.0%",online:"2017-12-01",description:"Pioneering grid-scale battery storage, stabilizing South Australian grid."},{id:"DE-BE",name:"Berlin Steag Storage",location:"Germany · Berlin",lat:52.52,lng:13.405,capacity:"140 MWh",power:"70 MW",status:"maintenance",type:"Vanadium Flow",efficiency:"78.5%",online:"2019-06-20",description:"Vanadium flow battery supporting European green energy transition."},{id:"CN-GD",name:"广东梅州储能电站",location:"中国·广东",lat:24.288,lng:116.1225,capacity:"200 MWh",power:"100 MW",status:"online",type:"钒液流电池",efficiency:"79.3%",online:"2023-01-10",description:"广东首个大规模钒液流电池储能示范项目。"},{id:"JP-TK",name:"Tokyo Bay Storage",location:"Japan · Tokyo",lat:35.6762,lng:139.6503,capacity:"100 MWh",power:"50 MW",status:"online",type:"Sodium-sulfur",efficiency:"89.0%",online:"2020-03-15",description:"Urban grid stabilization battery serving the Greater Tokyo Area."},{id:"UK-SC",name:"Scotland Whitelee BESS",location:"UK · Scotland",lat:55.6028,lng:-4.2265,capacity:"50 MWh",power:"50 MW",status:"online",type:"Lithium-ion",efficiency:"92.5%",online:"2021-07-01",description:"Co-located with Whitelee wind farm to smooth renewable output."}],Sy=[{from:"CN-BJ",to:"CN-SH"},{from:"CN-BJ",to:"JP-TK"},{from:"CN-SH",to:"CN-GD"},{from:"CN-BJ",to:"DE-BE"},{from:"US-CA",to:"AU-SA"},{from:"DE-BE",to:"UK-SC"},{from:"JP-TK",to:"US-CA"},{from:"CN-SH",to:"AU-SA"}],My={online:"#00ff88",maintenance:"#ffaa00",offline:"#ff4444"};class yy{constructor(t,e){this.scene=t,this.radius=e,this.markerList=[],this.group=new xs,t.add(this.group)}addStation(t){const e=nc(t.lat,t.lng,this.radius),i=new z(e.x,e.y,e.z),s=My[t.status]||"#00ff88",r=.18,a=new Fc(.012,.025,r,8),o=new Ss({color:new kt(s),transparent:!0,opacity:.85}),l=new Ve(a,o);l.position.copy(i),l.lookAt(0,0,0),l.rotateX(Math.PI/2);const c=i.clone().normalize();l.position.copy(c.multiplyScalar(this.radius+r/2));const u=new Ra(.04,.06,32),h=new Ss({color:new kt(s),transparent:!0,opacity:.7,side:pn}),f=new Ve(u,h);f.position.copy(i.clone().normalize().multiplyScalar(this.radius+.01)),f.lookAt(0,0,0);const d=new Ra(.04,.07,32),_=new Ss({color:new kt(s),transparent:!0,opacity:.4,side:pn}),x=new Ve(d,_);x.position.copy(f.position),x.rotation.copy(f.rotation);const m=new ws(.022,12,12),p=new Ss({color:new kt(s)}),E=new Ve(m,p);E.position.copy(i.clone().normalize().multiplyScalar(this.radius+.022)),this.group.add(l,f,x,E),this.markerList.push({stationId:t.id,worldPos:i.clone().normalize().multiplyScalar(this.radius+.022),pillar:l,ring:f,pulse:x,dot:E,phase:Math.random()*Math.PI*2})}update(t){for(const e of this.markerList){const i=(t*1.5+e.phase)%(Math.PI*2),s=1+Math.sin(i)*.5;e.pulse.scale.set(s,s,1),e.pulse.material.opacity=.4*(1-Math.sin(i)*.5)}}getScreenPositions(t,e,i){return this.markerList.map(s=>{const r=s.worldPos.clone().project(t),a=r.z<1;return{stationId:s.stationId,x:(r.x*.5+.5)*e,y:(-r.y*.5+.5)*i,visible:a}})}}class Ey{constructor(t,e){this.camera=t,this.dom=e,this.spherical=new E0().setFromVector3(t.position),this.targetSpherical=this.spherical.clone(),this._drag=!1,this._lastX=0,this._lastY=0,this.autoRotateSpeed=.08,this.autoRotate=!0,this.dampingFactor=.08,this.rotateSpeed=.4,this.zoomSpeed=.15,this.minRadius=3.5,this.maxRadius=12,this._bind()}_bind(){this.dom.addEventListener("mousedown",this._onDown.bind(this)),this.dom.addEventListener("mousemove",this._onMove.bind(this)),this.dom.addEventListener("mouseup",this._onUp.bind(this)),this.dom.addEventListener("mouseleave",this._onUp.bind(this)),this.dom.addEventListener("wheel",this._onWheel.bind(this),{passive:!0}),this.dom.addEventListener("touchstart",this._onTouchStart.bind(this),{passive:!0}),this.dom.addEventListener("touchmove",this._onTouchMove.bind(this),{passive:!0}),this.dom.addEventListener("touchend",this._onUp.bind(this))}_onDown(t){this._drag=!0,this._lastX=t.clientX,this._lastY=t.clientY,this.autoRotate=!1}_onMove(t){if(!this._drag)return;const e=t.clientX-this._lastX,i=t.clientY-this._lastY;this._lastX=t.clientX,this._lastY=t.clientY,this._rotate(e,i)}_onUp(){this._drag=!1,clearTimeout(this._resumeTimer),this._resumeTimer=setTimeout(()=>{this.autoRotate=!0},3e3)}_onWheel(t){this.targetSpherical.radius=Gu.clamp(this.targetSpherical.radius+t.deltaY*this.zoomSpeed*.01,this.minRadius,this.maxRadius)}_rotate(t,e){this.targetSpherical.theta-=t*this.rotateSpeed*.01,this.targetSpherical.phi=Gu.clamp(this.targetSpherical.phi-e*this.rotateSpeed*.01,.1,Math.PI-.1)}_onTouchStart(t){t.touches.length===1&&(this._drag=!0,this._lastX=t.touches[0].clientX,this._lastY=t.touches[0].clientY,this.autoRotate=!1)}_onTouchMove(t){if(!this._drag||t.touches.length!==1)return;const e=t.touches[0].clientX-this._lastX,i=t.touches[0].clientY-this._lastY;this._lastX=t.touches[0].clientX,this._lastY=t.touches[0].clientY,this._rotate(e,i)}update(){this.autoRotate&&(this.targetSpherical.theta+=this.autoRotateSpeed*.01),this.spherical.theta+=(this.targetSpherical.theta-this.spherical.theta)*this.dampingFactor,this.spherical.phi+=(this.targetSpherical.phi-this.spherical.phi)*this.dampingFactor,this.spherical.radius+=(this.targetSpherical.radius-this.spherical.radius)*this.dampingFactor,this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.lookAt(0,0,0)}dispose(){clearTimeout(this._resumeTimer)}}class by{constructor(t){this.scene=t,this._init()}_init(){const t=new v0(1118515,.8);this.scene.add(t);const e=new pf(16774624,1.6);e.position.set(5,3,5),this.scene.add(e);const i=new m0(13226,4386,.4);this.scene.add(i);const s=new pf(26367,.5);s.position.set(-5,-2,-5),this.scene.add(s)}}class Ty{constructor(t){this.canvas=t,this.renderer=null,this.scene=null,this.camera=null,this.clock=new y0,this._animId=null,this.earthCore=null,this.flyLines=null,this.markers=null,this.controls=null,this.onMarkerPositions=null,this.onStationClick=null,this._init()}_init(){this._initRenderer(),this._initScene(),this._initCamera(),new by(this.scene),this._initModules(),this._initRaycaster(),this._startLoop(),this._onResize(),window.addEventListener("resize",this._onResize.bind(this))}_initRenderer(){this.renderer=new _y({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.setClearColor(0,0)}_initScene(){this.scene=new X_,this.scene.background=new kt(133138)}_initCamera(){const{clientWidth:t,clientHeight:e}=this.canvas;this.camera=new on(45,t/e,.1,200),this.camera.position.set(0,0,6)}_initModules(){this.earthCore=new vy(this.scene,2),this.flyLines=new xy(this.scene,2),this.markers=new yy(this.scene,2),this.controls=new Ey(this.camera,this.canvas),Pn.forEach(e=>this.markers.addStation(e)),Sy.forEach(({from:e,to:i})=>{const s=Pn.find(a=>a.id===e),r=Pn.find(a=>a.id===i);if(s&&r){const a=s.status==="online"?"#00c8ff":"#ffaa00";this.flyLines.addLine(s,r,a)}})}_initRaycaster(){this._raycaster=new M0,this._mouse=new Zt,this.canvas.addEventListener("click",this._onClick.bind(this))}_onClick(t){const e=this.canvas.getBoundingClientRect();this._mouse.x=(t.clientX-e.left)/e.width*2-1,this._mouse.y=-((t.clientY-e.top)/e.height)*2+1,this._raycaster.setFromCamera(this._mouse,this.camera);const i=this.markers.markerList.map(r=>r.dot),s=this._raycaster.intersectObjects(i);if(s.length>0){const r=s[0].object,a=this.markers.markerList.find(o=>o.dot===r);a&&this.onStationClick&&this.onStationClick(a.stationId)}}_startLoop(){const t=()=>{this._animId=requestAnimationFrame(t);const e=this.clock.getDelta(),i=this.clock.getElapsedTime();if(this.controls.update(),this.earthCore.update(e),this.flyLines.update(e),this.markers.update(i),this.renderer.render(this.scene,this.camera),this.onMarkerPositions){const{width:s,height:r}=this.renderer.domElement;this.onMarkerPositions(this.markers.getScreenPositions(this.camera,s,r))}};t()}_onResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}highlightStation(t){this.markers.markerList.forEach(e=>{const i=e.stationId===t;e.dot.scale.setScalar(i?2.2:1)})}dispose(){cancelAnimationFrame(this._animId),this.controls.dispose(),window.removeEventListener("resize",this._onResize.bind(this)),this.renderer.dispose()}}const Ka=Ig("earth",()=>{const n=Es(null),t=Es(!1),e=Es([]),i=Ti(()=>({total:Pn.length,online:Pn.filter(c=>c.status==="online").length,maintenance:Pn.filter(c=>c.status==="maintenance").length,offline:Pn.filter(c=>c.status==="offline").length,totalCapacity:Pn.reduce((c,u)=>{const h=parseFloat(u.capacity);return c+(isNaN(h)?0:h)},0).toFixed(1)+" MWh"})),s=Ti(()=>Pn.find(c=>c.id===n.value)||null),r=Ti(()=>e.value.find(c=>c.stationId===n.value)||null);function a(c){n.value===c?(n.value=null,t.value=!1):(n.value=c,t.value=!0)}function o(){n.value=null,t.value=!1}function l(c){e.value=c}return{activeStationId:n,panelOpen:t,markerPositions:e,stats:i,activeStation:s,activePosition:r,selectStation:a,closePanel:o,updateMarkerPositions:l}}),wr=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Ay={__name:"EarthCanvas",setup(n){const t=Ka(),e=Es(null);let i=null;return Ha(()=>{i=new Ty(e.value),i.onMarkerPositions=s=>{t.updateMarkerPositions(s)},i.onStationClick=s=>{t.selectStation(s)}}),er(()=>t.activeStationId,s=>{i==null||i.highlightStation(s)}),mc(()=>{i==null||i.dispose()}),(s,r)=>(ei(),ji("canvas",{ref_key:"canvasRef",ref:e,class:"earth-canvas"},null,512))}},wy=wr(Ay,[["__scopeId","data-v-d6066c43"]]),Cy={class:"panel-header"},Ry={class:"station-name"},Py={class:"panel-location"},Ly={class:"panel-grid"},Dy={class:"metric"},Iy={class:"metric-value"},Uy={class:"metric"},Ny={class:"metric-value"},Fy={class:"metric"},Oy={class:"metric-value accent"},By={class:"metric"},zy={class:"metric-value"},Vy={class:"metric full"},Hy={class:"metric-value"},Gy={class:"panel-desc"},Yo=288,$o=28,ky=-90,Wy={__name:"StationPanel",setup(n){const t=Ka(),e=Ti(()=>{const r=t.activePosition;if(!r||!r.visible)return null;const a=window.innerWidth,o=window.innerHeight;let l=r.x+$o;l+Yo>a-16&&(l=r.x-Yo-$o);let c=r.y+ky;return c=Math.max(10,Math.min(c,o-320)),{left:`${l}px`,top:`${c}px`}}),i=Ti(()=>{const r=t.activePosition;if(!r)return"left";const a=window.innerWidth;return r.x+Yo+$o>a-16?"right":"left"}),s=Ti(()=>{var r;return{online:"在线运行",maintenance:"维护中",offline:"离线"}[(r=t.activeStation)==null?void 0:r.status]??""});return(r,a)=>(ei(),Kh(tg,{name:"panel"},{default:Mh(()=>[ge(t).panelOpen&&ge(t).activeStation&&e.value?(ei(),ji("div",{key:0,class:"station-panel",style:Ua(e.value)},[It("div",{class:bi(["connector",i.value])},null,2),It("div",Cy,[It("span",{class:bi(["status-dot",ge(t).activeStation.status])},null,2),It("span",Ry,Ce(ge(t).activeStation.name),1),It("button",{class:"close-btn",onClick:a[0]||(a[0]=o=>ge(t).closePanel())},"✕")]),It("div",Py,[a[1]||(a[1]=It("svg",{width:"11",height:"13",viewBox:"0 0 11 13",fill:"none"},[It("path",{d:"M5.5 0C2.46 0 0 2.46 0 5.5c0 4.125 5.5 7.5 5.5 7.5S11 9.625 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",fill:"#00c8ff",opacity:"0.7"})],-1)),sl(" "+Ce(ge(t).activeStation.location),1)]),It("div",Ly,[It("div",Dy,[a[2]||(a[2]=It("span",{class:"metric-label"},"装机容量",-1)),It("span",Iy,Ce(ge(t).activeStation.capacity),1)]),It("div",Uy,[a[3]||(a[3]=It("span",{class:"metric-label"},"额定功率",-1)),It("span",Ny,Ce(ge(t).activeStation.power),1)]),It("div",Fy,[a[4]||(a[4]=It("span",{class:"metric-label"},"充放效率",-1)),It("span",Oy,Ce(ge(t).activeStation.efficiency),1)]),It("div",By,[a[5]||(a[5]=It("span",{class:"metric-label"},"投运日期",-1)),It("span",zy,Ce(ge(t).activeStation.online),1)]),It("div",Vy,[a[6]||(a[6]=It("span",{class:"metric-label"},"电池类型",-1)),It("span",Hy,Ce(ge(t).activeStation.type),1)])]),It("p",Gy,Ce(ge(t).activeStation.description),1),It("div",{class:bi(["status-badge",ge(t).activeStation.status])},[a[7]||(a[7]=It("span",{class:"badge-dot"},null,-1)),sl(" "+Ce(s.value),1)],2)],4)):Om("",!0)]),_:1}))}},Xy=wr(Wy,[["__scopeId","data-v-032de1ca"]]),qy={class:"stats-bar"},Yy={class:"stat-item"},$y={class:"stat-value"},jy={class:"stat-item"},Ky={class:"stat-value online"},Zy={class:"stat-item"},Jy={class:"stat-value maint"},Qy={class:"stat-item"},tE={class:"stat-value capacity"},eE={__name:"StatsBar",setup(n){const t=Ka();return(e,i)=>(ei(),ji("div",qy,[It("div",Yy,[It("span",$y,Ce(ge(t).stats.total),1),i[0]||(i[0]=It("span",{class:"stat-label"},"储能站总数",-1))]),i[4]||(i[4]=It("div",{class:"divider"},null,-1)),It("div",jy,[It("span",Ky,Ce(ge(t).stats.online),1),i[1]||(i[1]=It("span",{class:"stat-label"},"在线运行",-1))]),i[5]||(i[5]=It("div",{class:"divider"},null,-1)),It("div",Zy,[It("span",Jy,Ce(ge(t).stats.maintenance),1),i[2]||(i[2]=It("span",{class:"stat-label"},"维护中",-1))]),i[6]||(i[6]=It("div",{class:"divider"},null,-1)),It("div",Qy,[It("span",tE,Ce(ge(t).stats.totalCapacity),1),i[3]||(i[3]=It("span",{class:"stat-label"},"总装机容量",-1))])]))}},nE=wr(eE,[["__scopeId","data-v-c9c91882"]]),iE={class:"station-list"},sE=["onClick"],rE={class:"item-info"},aE={class:"item-name"},oE={class:"item-loc"},lE={class:"item-cap"},cE={__name:"StationList",setup(n){const t=Ka(),e=Pn;return(i,s)=>(ei(),ji("div",iE,[s[0]||(s[0]=It("div",{class:"list-title"},"储能站列表",-1)),(ei(!0),ji(dn,null,om(ge(e),r=>(ei(),ji("div",{key:r.id,class:bi(["list-item",{active:ge(t).activeStationId===r.id}]),onClick:a=>ge(t).selectStation(r.id)},[It("span",{class:bi(["item-dot",r.status])},null,2),It("div",rE,[It("span",aE,Ce(r.name),1),It("span",oE,Ce(r.location),1)]),It("span",lE,Ce(r.capacity),1)],10,sE))),128))]))}},uE=wr(cE,[["__scopeId","data-v-39583436"]]),fE={class:"app-shell"},hE={class:"top-bar"},dE={class:"top-right"},pE={class:"date-str"},mE={class:"main-body"},gE={class:"sidebar"},_E={class:"canvas-wrap"},vE={__name:"App",setup(n){const t=Es("");let e=null;function i(){t.value=new Date().toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}return i(),Ha(()=>{e=setInterval(i,1e3)}),gc(()=>clearInterval(e)),(s,r)=>(ei(),ji("div",fE,[r[3]||(r[3]=It("div",{class:"bg-noise"},null,-1)),It("header",hE,[r[1]||(r[1]=uu('<div class="logo" data-v-2fd790bd><svg width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-2fd790bd><circle cx="14" cy="14" r="12" stroke="#00c8ff" stroke-width="1.5" opacity="0.6" data-v-2fd790bd></circle><circle cx="14" cy="14" r="7" stroke="#00c8ff" stroke-width="1" opacity="0.4" data-v-2fd790bd></circle><circle cx="14" cy="14" r="2.5" fill="#00c8ff" data-v-2fd790bd></circle><line x1="14" y1="2" x2="14" y2="26" stroke="#00c8ff" stroke-width="0.6" opacity="0.3" data-v-2fd790bd></line><line x1="2" y1="14" x2="26" y2="14" stroke="#00c8ff" stroke-width="0.6" opacity="0.3" data-v-2fd790bd></line><ellipse cx="14" cy="14" rx="12" ry="5" stroke="#00c8ff" stroke-width="0.7" opacity="0.25" data-v-2fd790bd></ellipse></svg><span class="logo-text" data-v-2fd790bd>EARTH<em data-v-2fd790bd>ENERGY</em></span></div>',1)),Re(nE,{class:"top-stats"}),It("div",dE,[r[0]||(r[0]=It("span",{class:"live-badge"},"● LIVE",-1)),It("span",pE,Ce(t.value),1)])]),It("main",mE,[It("aside",gE,[Re(uE)]),It("div",_E,[Re(wy),r[2]||(r[2]=uu('<div class="legend" data-v-2fd790bd><div class="legend-item" data-v-2fd790bd><span class="ld online" data-v-2fd790bd></span>在线运行 </div><div class="legend-item" data-v-2fd790bd><span class="ld maint" data-v-2fd790bd></span>维护中 </div><div class="legend-item" data-v-2fd790bd><span class="ld flyline" data-v-2fd790bd></span>能量传输 </div></div><div class="hint" data-v-2fd790bd> 拖拽旋转  ·  滚轮缩放  ·  点击站点查看详情 </div>',2))])]),Re(Xy)]))}},xE=wr(vE,[["__scopeId","data-v-2fd790bd"]]),Vd=bg(xE);Vd.use(wg());Vd.mount("#app");
