function Wx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ug={exports:{}},cu={},Og={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),lp=Symbol.iterator;function ty(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Bg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Fg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=Js.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Fg}var Id=Dd.prototype=new zg;Id.constructor=Dd;kg(Id,Js.prototype);Id.isPureReactComponent=!0;var up=Array.isArray,Hg=Object.prototype.hasOwnProperty,Ud={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hg.call(e,i)&&!Vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:t,key:s,ref:o,props:r,_owner:Ud.current}}function ny(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Od(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function iy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cp=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iy(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case jx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vu(o,0):i,up(r)?(n="",t!=null&&(n=t.replace(cp,"$&/")+"/"),ol(r,e,n,"",function(u){return u})):r!=null&&(Od(r)&&(r=ny(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",up(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vu(s,a);o+=ol(s,e,n,l,r)}else if(l=ty(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vu(s,a++),o+=ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},al={transition:null},sy={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:al,ReactCurrentOwner:Ud};function Wg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Js;Ge.Fragment=Xx;Ge.Profiler=Yx;Ge.PureComponent=Dd;Ge.StrictMode=$x;Ge.Suspense=Qx;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Ge.act=Wg;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=kg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hg.call(e,l)&&!Vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ia,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:Kx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qx,_context:t},t.Consumer=t};Ge.createElement=Gg;Ge.createFactory=function(t){var e=Gg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Zx,render:t}};Ge.isValidElement=Od;Ge.lazy=function(t){return{$$typeof:ey,_payload:{_status:-1,_result:t},_init:ry}};Ge.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};Ge.unstable_act=Wg;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";Og.exports=Ge;var A=Og.exports;const Qt=uu(A),oy=Wx({__proto__:null,default:Qt},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=A,ly=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),cy=Object.prototype.hasOwnProperty,fy=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dy={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cy.call(e,i)&&!dy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ly,type:t,key:s,ref:o,props:r,_owner:fy.current}}cu.Fragment=uy;cu.jsx=jg;cu.jsxs=jg;Ug.exports=cu;var L=Ug.exports,Yc={},Xg={exports:{}},gn={},$g={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var re=J-1>>>1,ye=D[re];if(0<r(ye,K))D[re]=K,D[J]=ye,J=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var re=0,ye=D.length,Fe=ye>>>1;re<Fe;){var G=2*(re+1)-1,Q=D[G],ue=G+1,de=D[ue];if(0>r(Q,J))ue<ye&&0>r(de,Q)?(D[re]=de,D[ue]=J,re=ue):(D[re]=Q,D[G]=J,re=G);else if(ue<ye&&0>r(de,J))D[re]=de,D[ue]=J,re=ue;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,g=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function y(D){if(x=!1,v(D),!g)if(n(l)!==null)g=!0,W(P);else{var K=n(u);K!==null&&X(y,K.startTime-D)}}function P(D,K){g=!1,x&&(x=!1,h(N),N=-1),m=!0;var J=d;try{for(v(K),f=n(l);f!==null&&(!(f.expirationTime>K)||D&&!I());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var ye=re(f.expirationTime<=K);K=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),v(K)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var G=n(u);G!==null&&X(y,G.startTime-K),Fe=!1}return Fe}finally{f=null,d=J,m=!1}}var w=!1,C=null,N=-1,T=5,S=-1;function I(){return!(t.unstable_now()-S<T)}function j(){if(C!==null){var D=t.unstable_now();S=D;var K=!0;try{K=C(!0,D)}finally{K?H():(w=!1,C=null)}}else w=!1}var H;if(typeof _=="function")H=function(){_(j)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Y=$.port2;$.port1.onmessage=j,H=function(){Y.postMessage(null)}}else H=function(){p(j,0)};function W(D){C=D,w||(w=!0,H())}function X(D,K){N=p(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,W(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var J=d;d=K;try{return D()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=d;d=D;try{return K()}finally{d=J}},t.unstable_scheduleCallback=function(D,K,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=J+ye,D={id:c++,callback:K,priorityLevel:D,startTime:J,expirationTime:ye,sortIndex:-1},J>re?(D.sortIndex=J,e(u,D),n(l)===null&&D===n(u)&&(x?(h(N),N=-1):x=!0,X(y,J-re))):(D.sortIndex=ye,e(l,D),g||m||(g=!0,W(P))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var K=d;return function(){var J=d;d=K;try{return D.apply(this,arguments)}finally{d=J}}}})(Yg);$g.exports=Yg;var hy=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=A,mn=hy;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,Oo={};function Vr(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Oo[t]=e,t=0;t<e.length;t++)qg.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,my=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},dp={};function gy(t){return qc.call(dp,t)?!0:qc.call(fp,t)?!1:my.test(t)?dp[t]=!0:(fp[t]=!0,!1)}function vy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _y(t,e,n,i){if(e===null||typeof e>"u"||vy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fd,kd);Ft[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fd,kd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fd,kd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_y(e,n,r,i)&&(n=null),i||r===null?gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),hp=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Gu;function So(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Wu=!1;function ju(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function xy(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function Jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Kc:return"Profiler";case zd:return"StrictMode";case Zc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zg:return(t.displayName||"Context")+".Consumer";case Kg:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:Jc(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Jc(t(e))}catch{}}return null}function yy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(e);case 8:return e===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sy(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=Sy(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&Bd(t,"checked",e,!1)}function tf(t,e){tv(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Eo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function nv(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ey=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){Ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var My=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(My[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,Ls=null,Ns=null;function _p(t){if(t=oa(t)){if(typeof uf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=mu(e),uf(t.stateNode,t.type,e))}}function av(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function lv(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function uv(t,e){return t(e)}function cv(){}var Xu=!1;function fv(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return uv(t,e,n)}finally{Xu=!1,(Ls!==null||Ns!==null)&&(cv(),lv())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var i=mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var cf=!1;if(_i)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){cf=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{cf=!1}function Ty(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ro=!1,wl=null,Cl=!1,ff=null,wy={onError:function(t){Ro=!0,wl=t}};function Cy(t,e,n,i,r,s,o,a,l){Ro=!1,wl=null,Ty.apply(wy,arguments)}function Ay(t,e,n,i,r,s,o,a,l){if(Cy.apply(this,arguments),Ro){if(Ro){var u=wl;Ro=!1,wl=null}else throw Error(ne(198));Cl||(Cl=!0,ff=u)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(Gr(t)!==t)throw Error(ne(188))}function Ry(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xp(r),t;if(s===i)return xp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function hv(t){return t=Ry(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=mn.unstable_scheduleCallback,yp=mn.unstable_cancelCallback,Py=mn.unstable_shouldYield,by=mn.unstable_requestPaint,_t=mn.unstable_now,Ly=mn.unstable_getCurrentPriorityLevel,Wd=mn.unstable_ImmediatePriority,gv=mn.unstable_UserBlockingPriority,Al=mn.unstable_NormalPriority,Ny=mn.unstable_LowPriority,vv=mn.unstable_IdlePriority,fu=null,Kn=null;function Dy(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Oy,Iy=Math.log,Uy=Math.LN2;function Oy(t){return t>>>=0,t===0?32:31-(Iy(t)/Uy|0)|0}var Ea=64,Ma=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=n&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Fy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Fy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _v(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function $u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function By(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Xd,Sv,Ev,Mv,hf=!1,Ta=[],ji=null,Xi=null,$i=null,Bo=new Map,zo=new Map,Bi=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oa(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hy(t,e,n,i,r){switch(e){case"focusin":return ji=lo(ji,t,e,n,i,r),!0;case"dragenter":return Xi=lo(Xi,t,e,n,i,r),!0;case"mouseover":return $i=lo($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Bo.set(s,lo(Bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,lo(zo.get(s)||null,t,e,n,i,r)),!0}return!1}function Tv(t){var e=Cr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){Sv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lf=i,n.target.dispatchEvent(i),lf=null}else return e=oa(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ep(t,e,n){ll(t)&&n.delete(e)}function Vy(){hf=!1,ji!==null&&ll(ji)&&(ji=null),Xi!==null&&ll(Xi)&&(Xi=null),$i!==null&&ll($i)&&($i=null),Bo.forEach(Ep),zo.forEach(Ep)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Vy)))}function Ho(t){function e(r){return uo(r,t)}if(0<Ta.length){uo(Ta[0],t);for(var n=1;n<Ta.length;n++){var i=Ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&uo(ji,t),Xi!==null&&uo(Xi,t),$i!==null&&uo($i,t),Bo.forEach(e),zo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Tv(n),n.blockedOn===null&&Bi.shift()}var Ds=wi.ReactCurrentBatchConfig,Pl=!0;function Gy(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=1,$d(t,e,n,i)}finally{et=r,Ds.transition=s}}function Wy(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=4,$d(t,e,n,i)}finally{et=r,Ds.transition=s}}function $d(t,e,n,i){if(Pl){var r=pf(t,e,n,i);if(r===null)ic(t,e,i,bl,n),Sp(t,i);else if(Hy(r,t,e,n,i))i.stopPropagation();else if(Sp(t,i),e&4&&-1<zy.indexOf(t)){for(;r!==null;){var s=oa(r);if(s!==null&&yv(s),s=pf(t,e,n,i),s===null&&ic(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ic(t,e,i,null,n)}}var bl=null;function pf(t,e,n,i){if(bl=null,t=Gd(i),t=Cr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ly()){case Wd:return 1;case gv:return 4;case Al:case Ny:return 16;case vv:return 536870912;default:return 16}default:return 16}}var Vi=null,Yd=null,ul=null;function Cv(){if(ul)return ul;var t,e=Yd,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function Mp(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:Mp,this.isPropagationStopped=Mp,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=vn(eo),sa=ht({},eo,{view:0,detail:0}),jy=vn(sa),Yu,qu,co,du=ht({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Yu=t.screenX-co.screenX,qu=t.screenY-co.screenY):qu=Yu=0,co=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),Tp=vn(du),Xy=ht({},du,{dataTransfer:0}),$y=vn(Xy),Yy=ht({},sa,{relatedTarget:0}),Ku=vn(Yy),qy=ht({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=vn(qy),Zy=ht({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qy=vn(Zy),Jy=ht({},eo,{data:0}),wp=vn(Jy),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nS[t])?!!e[t]:!1}function Kd(){return iS}var rS=ht({},sa,{key:function(t){if(t.key){var e=eS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=vn(rS),oS=ht({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=vn(oS),aS=ht({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),lS=vn(aS),uS=ht({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=vn(uS),fS=ht({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=vn(fS),hS=[9,13,27,32],Zd=_i&&"CompositionEvent"in window,Po=null;_i&&"documentMode"in document&&(Po=document.documentMode);var pS=_i&&"TextEvent"in window&&!Po,Av=_i&&(!Zd||Po&&8<Po&&11>=Po),Ap=" ",Rp=!1;function Rv(t,e){switch(t){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function mS(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(Rp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Rp?null:t;default:return null}}function gS(t,e){if(_s)return t==="compositionend"||!Zd&&Rv(t,e)?(t=Cv(),ul=Yd=Vi=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Av&&e.locale!=="ko"?null:e.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vS[t.type]:e==="textarea"}function bv(t,e,n,i){av(i),e=Ll(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var bo=null,Vo=null;function _S(t){Hv(t,0)}function hu(t){var e=Ss(t);if(ev(e))return t}function xS(t,e){if(t==="change")return e}var Lv=!1;if(_i){var Zu;if(_i){var Qu="oninput"in document;if(!Qu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Qu=typeof bp.oninput=="function"}Zu=Qu}else Zu=!1;Lv=Zu&&(!document.documentMode||9<document.documentMode)}function Lp(){bo&&(bo.detachEvent("onpropertychange",Nv),Vo=bo=null)}function Nv(t){if(t.propertyName==="value"&&hu(Vo)){var e=[];bv(e,Vo,t,Gd(t)),fv(_S,e)}}function yS(t,e,n){t==="focusin"?(Lp(),bo=e,Vo=n,bo.attachEvent("onpropertychange",Nv)):t==="focusout"&&Lp()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Vo)}function ES(t,e){if(t==="click")return hu(e)}function MS(t,e){if(t==="input"||t==="change")return hu(e)}function TS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:TS;function Go(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dp(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function Dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iv(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wS(t){var e=Iv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dv(n.ownerDocument.documentElement,n)){if(i!==null&&Qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dp(n,s);var o=Dp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CS=_i&&"documentMode"in document&&11>=document.documentMode,xs=null,mf=null,Lo=null,gf=!1;function Ip(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||xs==null||xs!==Tl(i)||(i=xs,"selectionStart"in i&&Qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&Go(Lo,i)||(Lo=i,i=Ll(mf,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Ju={},Uv={};_i&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function pu(t){if(Ju[t])return Ju[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uv)return Ju[t]=e[n];return t}var Ov=pu("animationend"),Fv=pu("animationiteration"),kv=pu("animationstart"),Bv=pu("transitionend"),zv=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){zv.set(t,e),Vr(e,[t])}for(var ec=0;ec<Up.length;ec++){var tc=Up[ec],AS=tc.toLowerCase(),RS=tc[0].toUpperCase()+tc.slice(1);or(AS,"on"+RS)}or(Ov,"onAnimationEnd");or(Fv,"onAnimationIteration");or(kv,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(Bv,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ay(i,e,void 0,t),t.currentTarget=null}function Hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,u),s=l}}}if(Cl)throw t=ff,Cl=!1,ff=null,t}function it(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var i=t+"__bubble";n.has(i)||(Vv(e,t,2,!1),n.add(i))}function nc(t,e,n){var i=0;e&&(i|=4),Vv(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[Aa]){t[Aa]=!0,qg.forEach(function(n){n!=="selectionchange"&&(PS.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,nc("selectionchange",!1,e))}}function Vv(t,e,n,i){switch(wv(e)){case 1:var r=Gy;break;case 4:r=Wy;break;default:r=$d}n=r.bind(null,e,n,t),r=void 0,!cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fv(function(){var u=s,c=Gd(n),f=[];e:{var d=zv.get(t);if(d!==void 0){var m=qd,g=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":m=sS;break;case"focusin":g="focus",m=Ku;break;case"focusout":g="blur",m=Ku;break;case"beforeblur":case"afterblur":m=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=lS;break;case Ov:case Fv:case kv:m=Ky;break;case Bv:m=cS;break;case"scroll":m=jy;break;case"wheel":m=dS;break;case"copy":case"cut":case"paste":m=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cp}var x=(e&4)!==0,p=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,h!==null&&(y=ko(_,h),y!=null&&x.push(jo(_,y,v)))),p)break;_=_.return}0<x.length&&(d=new m(d,g,null,n,c),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==lf&&(g=n.relatedTarget||n.fromElement)&&(Cr(g)||g[xi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Cr(g):null,g!==null&&(p=Gr(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(x=Tp,y="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Cp,y="onPointerLeave",h="onPointerEnter",_="pointer"),p=m==null?d:Ss(m),v=g==null?d:Ss(g),d=new x(y,_+"leave",m,n,c),d.target=p,d.relatedTarget=v,y=null,Cr(c)===u&&(x=new x(h,_+"enter",g,n,c),x.target=v,x.relatedTarget=p,y=x),p=y,m&&g)t:{for(x=m,h=g,_=0,v=x;v;v=$r(v))_++;for(v=0,y=h;y;y=$r(y))v++;for(;0<_-v;)x=$r(x),_--;for(;0<v-_;)h=$r(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=$r(x),h=$r(h)}x=null}else x=null;m!==null&&Fp(f,d,m,x,!1),g!==null&&p!==null&&Fp(f,p,g,x,!0)}}e:{if(d=u?Ss(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=xS;else if(Pp(d))if(Lv)P=MS;else{P=SS;var w=yS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=ES);if(P&&(P=P(t,u))){bv(f,P,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&nf(d,"number",d.value)}switch(w=u?Ss(u):window,t){case"focusin":(Pp(w)||w.contentEditable==="true")&&(xs=w,mf=u,Lo=null);break;case"focusout":Lo=mf=xs=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Ip(f,n,c);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":Ip(f,n,c)}var C;if(Zd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _s?Rv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Av&&n.locale!=="ko"&&(_s||N!=="onCompositionStart"?N==="onCompositionEnd"&&_s&&(C=Cv()):(Vi=c,Yd="value"in Vi?Vi.value:Vi.textContent,_s=!0)),w=Ll(u,N),0<w.length&&(N=new wp(N,t,null,n,c),f.push({event:N,listeners:w}),C?N.data=C:(C=Pv(n),C!==null&&(N.data=C)))),(C=pS?mS(t,n):gS(t,n))&&(u=Ll(u,"onBeforeInput"),0<u.length&&(c=new wp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}Hv(f,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(t,n),s!=null&&i.unshift(jo(t,s,r)),s=ko(t,e),s!=null&&i.push(jo(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ko(n,s),l!=null&&o.unshift(jo(n,l,a))):r||(l=ko(n,s),l!=null&&o.push(jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function kp(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(LS,"")}function Ra(t,e,n){if(e=kp(e),kp(t)!==e&&n)throw Error(ne(425))}function Nl(){}var vf=null,_f=null;function xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(IS)}:yf;function IS(t){setTimeout(function(){throw t})}function rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ho(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),Yn="__reactFiber$"+to,Xo="__reactProps$"+to,xi="__reactContainer$"+to,Sf="__reactEvents$"+to,US="__reactListeners$"+to,OS="__reactHandles$"+to;function Cr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zp(t);t!==null;){if(n=t[Yn])return n;t=zp(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[Yn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function mu(t){return t[Xo]||null}var Ef=[],Es=-1;function ar(t){return{current:t}}function st(t){0>Es||(t.current=Ef[Es],Ef[Es]=null,Es--)}function nt(t,e){Es++,Ef[Es]=t.current,t.current=e}var ir={},Gt=ar(ir),en=ar(!1),Dr=ir;function zs(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Dl(){st(en),st(Gt)}function Hp(t,e,n){if(Gt.current!==ir)throw Error(ne(168));nt(Gt,e),nt(en,n)}function Gv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,yy(t)||"Unknown",r));return ht({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Dr=Gt.current,nt(Gt,t),nt(en,en.current),!0}function Vp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Gv(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,st(en),st(Gt),nt(Gt,t)):st(en),nt(en,n)}var li=null,gu=!1,sc=!1;function Wv(t){li===null?li=[t]:li.push(t)}function FS(t){gu=!0,Wv(t)}function lr(){if(!sc&&li!==null){sc=!0;var t=0,e=et;try{var n=li;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,gu=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),mv(Wd,lr),r}finally{et=e,sc=!1}}return null}var Ms=[],Ts=0,Ul=null,Ol=0,yn=[],Sn=0,Ir=null,fi=1,di="";function xr(t,e){Ms[Ts++]=Ol,Ms[Ts++]=Ul,Ul=t,Ol=e}function jv(t,e,n){yn[Sn++]=fi,yn[Sn++]=di,yn[Sn++]=Ir,Ir=t;var i=fi;t=di;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-zn(e)+r|n<<r|i,di=s+t}else fi=1<<s|n<<r|i,di=t}function Jd(t){t.return!==null&&(xr(t,1),jv(t,1,0))}function eh(t){for(;t===Ul;)Ul=Ms[--Ts],Ms[Ts]=null,Ol=Ms[--Ts],Ms[Ts]=null;for(;t===Ir;)Ir=yn[--Sn],yn[Sn]=null,di=yn[--Sn],yn[Sn]=null,fi=yn[--Sn],yn[Sn]=null}var hn=null,dn=null,ut=!1,Un=null;function Xv(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(ut){var e=dn;if(e){var n=e;if(!Gp(t,e)){if(Mf(t))throw Error(ne(418));e=Yi(n.nextSibling);var i=hn;e&&Gp(t,e)?Xv(i,n):(t.flags=t.flags&-4097|2,ut=!1,hn=t)}}else{if(Mf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ut=!1,hn=t}}}function Wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Pa(t){if(t!==hn)return!1;if(!ut)return Wp(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xf(t.type,t.memoizedProps)),e&&(e=dn)){if(Mf(t))throw $v(),Error(ne(418));for(;e;)Xv(t,e),e=Yi(e.nextSibling)}if(Wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Yi(t.stateNode.nextSibling):null;return!0}function $v(){for(var t=dn;t;)t=Yi(t.nextSibling)}function Hs(){dn=hn=null,ut=!1}function th(t){Un===null?Un=[t]:Un.push(t)}var kS=wi.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function Yv(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Qi(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,y){return _===null||_.tag!==6?(_=dc(v,h.mode,y),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,y){var P=v.type;return P===vs?c(h,_,v.props.children,y,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Oi&&jp(P)===_.type)?(y=r(_,v.props),y.ref=fo(h,_,v),y.return=h,y):(y=vl(v.type,v.key,v.props,null,h.mode,y),y.ref=fo(h,_,v),y.return=h,y)}function u(h,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=hc(v,h.mode,y),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function c(h,_,v,y,P){return _===null||_.tag!==7?(_=Nr(v,h.mode,y,P),_.return=h,_):(_=r(_,v),_.return=h,_)}function f(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=dc(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xa:return v=vl(_.type,_.key,_.props,null,h.mode,v),v.ref=fo(h,null,_),v.return=h,v;case gs:return _=hc(_,h.mode,v),_.return=h,_;case Oi:var y=_._init;return f(h,y(_._payload),v)}if(Eo(_)||oo(_))return _=Nr(_,h.mode,v,null),_.return=h,_;ba(h,_)}return null}function d(h,_,v,y){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===P?l(h,_,v,y):null;case gs:return v.key===P?u(h,_,v,y):null;case Oi:return P=v._init,d(h,_,P(v._payload),y)}if(Eo(v)||oo(v))return P!==null?null:c(h,_,v,y,null);ba(h,v)}return null}function m(h,_,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(v)||null,a(_,h,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xa:return h=h.get(y.key===null?v:y.key)||null,l(_,h,y,P);case gs:return h=h.get(y.key===null?v:y.key)||null,u(_,h,y,P);case Oi:var w=y._init;return m(h,_,v,w(y._payload),P)}if(Eo(y)||oo(y))return h=h.get(v)||null,c(_,h,y,P,null);ba(_,y)}return null}function g(h,_,v,y){for(var P=null,w=null,C=_,N=_=0,T=null;C!==null&&N<v.length;N++){C.index>N?(T=C,C=null):T=C.sibling;var S=d(h,C,v[N],y);if(S===null){C===null&&(C=T);break}t&&C&&S.alternate===null&&e(h,C),_=s(S,_,N),w===null?P=S:w.sibling=S,w=S,C=T}if(N===v.length)return n(h,C),ut&&xr(h,N),P;if(C===null){for(;N<v.length;N++)C=f(h,v[N],y),C!==null&&(_=s(C,_,N),w===null?P=C:w.sibling=C,w=C);return ut&&xr(h,N),P}for(C=i(h,C);N<v.length;N++)T=m(C,h,N,v[N],y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?N:T.key),_=s(T,_,N),w===null?P=T:w.sibling=T,w=T);return t&&C.forEach(function(I){return e(h,I)}),ut&&xr(h,N),P}function x(h,_,v,y){var P=oo(v);if(typeof P!="function")throw Error(ne(150));if(v=P.call(v),v==null)throw Error(ne(151));for(var w=P=null,C=_,N=_=0,T=null,S=v.next();C!==null&&!S.done;N++,S=v.next()){C.index>N?(T=C,C=null):T=C.sibling;var I=d(h,C,S.value,y);if(I===null){C===null&&(C=T);break}t&&C&&I.alternate===null&&e(h,C),_=s(I,_,N),w===null?P=I:w.sibling=I,w=I,C=T}if(S.done)return n(h,C),ut&&xr(h,N),P;if(C===null){for(;!S.done;N++,S=v.next())S=f(h,S.value,y),S!==null&&(_=s(S,_,N),w===null?P=S:w.sibling=S,w=S);return ut&&xr(h,N),P}for(C=i(h,C);!S.done;N++,S=v.next())S=m(C,h,N,S.value,y),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?N:S.key),_=s(S,_,N),w===null?P=S:w.sibling=S,w=S);return t&&C.forEach(function(j){return e(h,j)}),ut&&xr(h,N),P}function p(h,_,v,y){if(typeof v=="object"&&v!==null&&v.type===vs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var P=v.key,w=_;w!==null;){if(w.key===P){if(P=v.type,P===vs){if(w.tag===7){n(h,w.sibling),_=r(w,v.props.children),_.return=h,h=_;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Oi&&jp(P)===w.type){n(h,w.sibling),_=r(w,v.props),_.ref=fo(h,w,v),_.return=h,h=_;break e}n(h,w);break}else e(h,w);w=w.sibling}v.type===vs?(_=Nr(v.props.children,h.mode,y,v.key),_.return=h,h=_):(y=vl(v.type,v.key,v.props,null,h.mode,y),y.ref=fo(h,_,v),y.return=h,h=y)}return o(h);case gs:e:{for(w=v.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=hc(v,h.mode,y),_.return=h,h=_}return o(h);case Oi:return w=v._init,p(h,_,w(v._payload),y)}if(Eo(v))return g(h,_,v,y);if(oo(v))return x(h,_,v,y);ba(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=dc(v,h.mode,y),_.return=h,h=_),o(h)):n(h,_)}return p}var Vs=Yv(!0),qv=Yv(!1),Fl=ar(null),kl=null,ws=null,nh=null;function ih(){nh=ws=kl=null}function rh(t){var e=Fl.current;st(Fl),t._currentValue=e}function wf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){kl=t,nh=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(nh!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(kl===null)throw Error(ne(308));ws=t,kl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Ar=null;function sh(t){Ar===null?Ar=[t]:Ar.push(t)}function Kv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}function Xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Fi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(m,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(m,f,d):g,d==null)break e;f=ht({},f,d);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=o,t.lanes=o,t.memoizedState=f}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var aa={},Zn=ar(aa),$o=ar(aa),Yo=ar(aa);function Rr(t){if(t===aa)throw Error(ne(174));return t}function ah(t,e){switch(nt(Yo,e),nt($o,t),nt(Zn,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}st(Zn),nt(Zn,e)}function Gs(){st(Zn),st($o),st(Yo)}function Qv(t){Rr(Yo.current);var e=Rr(Zn.current),n=sf(e,t.type);e!==n&&(nt($o,t),nt(Zn,n))}function lh(t){$o.current===t&&(st(Zn),st($o))}var ft=ar(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function uh(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var dl=wi.ReactCurrentDispatcher,ac=wi.ReactCurrentBatchConfig,Ur=0,dt=null,Mt=null,Pt=null,Hl=!1,No=!1,qo=0,BS=0;function kt(){throw Error(ne(321))}function ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function fh(t,e,n,i,r,s){if(Ur=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?GS:WS,t=n(i,r),No){s=0;do{if(No=!1,qo=0,25<=s)throw Error(ne(301));s+=1,Pt=Mt=null,e.updateQueue=null,dl.current=jS,t=n(i,r)}while(No)}if(dl.current=Vl,e=Mt!==null&&Mt.next!==null,Ur=0,Pt=Mt=dt=null,Hl=!1,e)throw Error(ne(300));return t}function dh(){var t=qo!==0;return qo=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function An(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Pt===null?dt.memoizedState:Pt.next;if(e!==null)Pt=e,Mt=t;else{if(t===null)throw Error(ne(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ko(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=c,Or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=An(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jv(){}function e_(t,e){var n=dt,i=An(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,hh(i_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Zo(9,n_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));Ur&30||t_(n,e,r)}return r}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,i){e.value=n,e.getSnapshot=i,r_(e)&&s_(t)}function i_(t,e,n){return n(function(){r_(e)&&s_(t)})}function r_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function s_(t){var e=yi(t,1);e!==null&&Hn(e,t,1,-1)}function Yp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,dt,t),[e.memoizedState,t]}function Zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function o_(){return An().memoizedState}function hl(t,e,n,i){var r=jn();dt.flags|=t,r.memoizedState=Zo(1|e,n,void 0,i===void 0?null:i)}function vu(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&ch(i,o.deps)){r.memoizedState=Zo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Zo(1|e,n,s,i)}function qp(t,e){return hl(8390656,8,t,e)}function hh(t,e){return vu(2048,8,t,e)}function a_(t,e){return vu(4,2,t,e)}function l_(t,e){return vu(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c_(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,u_.bind(null,e,t),n)}function ph(){}function f_(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function d_(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function h_(t,e,n){return Ur&21?(Vn(n,e)||(n=_v(),dt.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function zS(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=ac.transition;ac.transition={};try{t(!1),e()}finally{et=n,ac.transition=i}}function p_(){return An().memoizedState}function HS(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=Kv(t,e,n,i),n!==null){var r=Xt();Hn(n,t,i,r),v_(n,e,i)}}function VS(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Kv(t,e,r,i),n!==null&&(r=Xt(),Hn(n,t,i,r),v_(n,e,i))}}function m_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function g_(t,e){No=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}var Vl={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},GS={readContext:Cn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=HS.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:ph,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=zS.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=jn();if(ut){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));Ur&30||t_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qp(i_.bind(null,i,s,t),[t]),i.flags|=2048,Zo(9,n_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Lt.identifierPrefix;if(ut){var n=di,i=fi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:Cn,useCallback:f_,useContext:Cn,useEffect:hh,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:lc,useRef:o_,useState:function(){return lc(Ko)},useDebugValue:ph,useDeferredValue:function(t){var e=An();return h_(e,Mt.memoizedState,t)},useTransition:function(){var t=lc(Ko)[0],e=An().memoizedState;return[t,e]},useMutableSource:Jv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},jS={readContext:Cn,useCallback:f_,useContext:Cn,useEffect:hh,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:uc,useRef:o_,useState:function(){return uc(Ko)},useDebugValue:ph,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:h_(e,Mt.memoizedState,t)},useTransition:function(){var t=uc(Ko)[0],e=An().memoizedState;return[t,e]},useMutableSource:Jv,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Zi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Zi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Zi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Hn(e,t,i,n),fl(e,t,i))}};function Kp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function __(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=tn(e)?Dr:Gt.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},oh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=tn(e)?Dr:Gt.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=xy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function x_(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,kf=i),Rf(t,e)},n}function y_(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rf(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oE.bind(null,t,e,n),e.then(t,t))}function Jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function em(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var $S=wi.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?qv(e,null,n,i):Vs(e,t.child,n,i)}function tm(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=fh(t,e,n,i,s,r),n=dh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ut&&n&&Jd(e),e.flags|=1,jt(t,e,i,r),e.child)}function nm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S_(t,e,s,i,r)):(t=vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function S_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Pf(t,e,n,i,r)}function E_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(As,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(As,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(As,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(As,cn),cn|=i;return jt(t,e,r,n),e.child}function M_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=tn(n)?Dr:Gt.current;return s=zs(e,s),Is(e,r),n=fh(t,e,n,i,s,r),i=dh(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ut&&i&&Jd(e),e.flags|=1,jt(t,e,n,r),e.child)}function im(t,e,n,i,r){if(tn(n)){var s=!0;Il(e)}else s=!1;if(Is(e,r),e.stateNode===null)pl(t,e),__(e,n,i),Af(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=tn(n)?Dr:Gt.current,u=zs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zp(e,o,i,u),Fi=!1;var d=e.memoizedState;o.state=d,Bl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||Fi?(typeof c=="function"&&(Cf(e,n,c,i),l=e.memoizedState),(a=Fi||Kp(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=tn(n)?Dr:Gt.current,l=zs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Zp(e,o,i,l),Fi=!1,d=e.memoizedState,o.state=d,Bl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||en.current||Fi?(typeof m=="function"&&(Cf(e,n,m,i),g=e.memoizedState),(u=Fi||Kp(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return bf(t,e,n,i,s,r)}function bf(t,e,n,i,r,s){M_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vp(e,n,!1),Si(t,e,s);i=e.stateNode,$S.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Vp(e,n,!0),e.child}function T_(t){var e=t.stateNode;e.pendingContext?Hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hp(t,e.context,!1),ah(t,e.containerInfo)}function rm(t,e,n,i,r){return Hs(),th(r),e.flags|=256,jt(t,e,n,i),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function w_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ft,r&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Lf,t):mh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return YS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qi(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mh(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,i){return i!==null&&th(i),Vs(e,t.child,null,n),t=mh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cc(Error(ne(422))),La(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Su({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Lf,s);if(!(e.mode&1))return La(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=cc(s,i,void 0),La(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Hn(i,t,r,-1))}return Sh(),i=cc(Error(ne(421))),La(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Yi(r.nextSibling),hn=e,ut=!0,Un=null,t!==null&&(yn[Sn++]=fi,yn[Sn++]=di,yn[Sn++]=Ir,fi=t.id,di=t.overflow,Ir=e),e=mh(e,i.children),e.flags|=4096,e)}function sm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wf(t.return,e,n)}function fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function C_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sm(t,n,e);else if(t.tag===19)sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qS(t,e,n){switch(e.tag){case 3:T_(e),Hs();break;case 5:Qv(e);break;case 1:tn(e.type)&&Il(e);break;case 4:ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?w_(t,e,n):(nt(ft,ft.current&1),t=Si(t,e,n),t!==null?t.sibling:null);nt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,E_(t,e,n)}return Si(t,e,n)}var A_,Df,R_,P_;A_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};R_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(Zn.current);var s=null;switch(n){case"input":r=ef(t,r),i=ef(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=rf(t,r),i=rf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}of(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KS(t,e,n){var i=e.pendingProps;switch(eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return tn(e.type)&&Dl(),Bt(e),null;case 3:return i=e.stateNode,Gs(),st(en),st(Gt),uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Hf(Un),Un=null))),Df(t,e),Bt(e),null;case 5:lh(e);var r=Rr(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)R_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=Rr(Zn.current),Pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)it(To[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":pp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":gp(i,s),it("invalid",i)}of(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":ya(i),mp(i,s,!0);break;case"textarea":ya(i),vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Xo]=i,A_(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)it(To[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":pp(t,i),r=ef(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),it("invalid",t);break;case"textarea":gp(t,i),r=rf(t,i),it("invalid",t);break;default:r=i}of(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ov(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Bd(t,s,l,o))}switch(n){case"input":ya(t),mp(t,i,!1);break;case"textarea":ya(t),vp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Rr(Yo.current),Rr(Zn.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Bt(e),null;case 13:if(st(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&dn!==null&&e.mode&1&&!(e.flags&128))$v(),Hs(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Yn]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Un!==null&&(Hf(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):Sh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Gs(),Df(t,e),t===null&&Wo(e.stateNode.containerInfo),Bt(e),null;case 10:return rh(e.type._context),Bt(e),null;case 17:return tn(e.type)&&Dl(),Bt(e),null;case 19:if(st(ft),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>js&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Bt(e),null}else 2*_t()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,nt(ft,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return yh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ZS(t,e){switch(eh(e),e.tag){case 1:return tn(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),st(en),st(Gt),uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lh(e),null;case 13:if(st(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ft),null;case 4:return Gs(),null;case 10:return rh(e.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var Na=!1,Vt=!1,QS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function If(t,e,n){try{n()}catch(i){gt(t,e,i)}}var om=!1;function JS(t,e){if(vf=Pl,t=Iv(),Qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Pl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,p=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),p);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=om,om=!1,g}function Do(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&If(e,n,s)}r=r.next}while(r!==i)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b_(t){var e=t.alternate;e!==null&&(t.alternate=null,b_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Xo],delete e[Sf],delete e[US],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L_(t){return t.tag===5||t.tag===3||t.tag===4}function am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var It=null,In=!1;function Ri(t,e,n){for(n=n.child;n!==null;)N_(t,e,n),n=n.sibling}function N_(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:Vt||Cs(n,e);case 6:var i=It,r=In;It=null,Ri(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?rc(t.parentNode,n):t.nodeType===1&&rc(t,n),Ho(t)):rc(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,Ri(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&If(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Vt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ri(t,e,n),Vt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QS),e.forEach(function(i){var r=lE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,In=!1;break e;case 3:It=a.stateNode.containerInfo,In=!0;break e;case 4:It=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(It===null)throw Error(ne(160));N_(s,o,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D_(e,t),e=e.sibling}function D_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{Do(3,t,t.return),xu(3,t)}catch(x){gt(t,t.return,x)}try{Do(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tv(r,s),af(a,o);var u=af(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?ov(r,f):c==="dangerouslySetInnerHTML"?rv(r,f):c==="children"?Fo(r,f):Bd(r,c,f,u)}switch(a){case"input":tf(r,s);break;case"textarea":nv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?bs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_h=_t())),i&4&&lm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||c,Pn(e,t),Vt=u):Pn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(f=pe=c;pe!==null;){switch(d=pe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Do(4,d,d.return);break;case 1:Cs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){cm(f);continue}}m!==null?(m.return=d,pe=m):cm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sv("display",o))}catch(x){gt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){gt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&lm(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=am(t);Ff(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=am(t);Of(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eE(t,e,n){pe=t,I_(t)}function I_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Na;var u=Vt;if(Na=o,(Vt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?fm(r):l!==null?(l.return=o,pe=l):fm(r);for(;s!==null;)pe=s,I_(s),s=s.sibling;pe=r,Na=a,Vt=u}um(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):um(t)}}function um(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||xu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ho(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&Uf(e)}catch(d){gt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function cm(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function fm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Uf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Uf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var tE=Math.ceil,Gl=wi.ReactCurrentDispatcher,gh=wi.ReactCurrentOwner,wn=wi.ReactCurrentBatchConfig,$e=0,Lt=null,Et=null,Ot=0,cn=0,As=ar(0),Tt=0,Qo=null,Or=0,yu=0,vh=0,Io=null,Kt=null,_h=0,js=1/0,ai=null,Wl=!1,kf=null,Ki=null,Da=!1,Gi=null,jl=0,Uo=0,Bf=null,ml=-1,gl=0;function Xt(){return $e&6?_t():ml!==-1?ml:ml=_t()}function Zi(t){return t.mode&1?$e&2&&Ot!==0?Ot&-Ot:kS.transition!==null?(gl===0&&(gl=_v()),gl):(t=et,t!==0||(t=window.event,t=t===void 0?16:wv(t.type)),t):1}function Hn(t,e,n,i){if(50<Uo)throw Uo=0,Bf=null,Error(ne(185));ra(t,n,i),(!($e&2)||t!==Lt)&&(t===Lt&&(!($e&2)&&(yu|=n),Tt===4&&zi(t,Ot)),nn(t,i),n===1&&$e===0&&!(e.mode&1)&&(js=_t()+500,gu&&lr()))}function nn(t,e){var n=t.callbackNode;ky(t,e);var i=Rl(t,t===Lt?Ot:0);if(i===0)n!==null&&yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yp(n),e===1)t.tag===0?FS(dm.bind(null,t)):Wv(dm.bind(null,t)),DS(function(){!($e&6)&&lr()}),n=null;else{switch(xv(i)){case 1:n=Wd;break;case 4:n=gv;break;case 16:n=Al;break;case 536870912:n=vv;break;default:n=Al}n=V_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(ml=-1,gl=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Rl(t,t===Lt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=$e;$e|=2;var s=F_();(Lt!==t||Ot!==e)&&(ai=null,js=_t()+500,Lr(t,e));do try{rE();break}catch(a){O_(t,a)}while(!0);ih(),Gl.current=s,$e=r,Et!==null?e=0:(Lt=null,Ot=0,e=Tt)}if(e!==0){if(e===2&&(r=df(t),r!==0&&(i=r,e=zf(t,r))),e===1)throw n=Qo,Lr(t,0),zi(t,i),nn(t,_t()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!nE(r)&&(e=Xl(t,i),e===2&&(s=df(t),s!==0&&(i=s,e=zf(t,s))),e===1))throw n=Qo,Lr(t,0),zi(t,i),nn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:yr(t,Kt,ai);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=_h+500-_t(),10<e)){if(Rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yf(yr.bind(null,t,Kt,ai),e);break}yr(t,Kt,ai);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tE(i/1960))-i,10<i){t.timeoutHandle=yf(yr.bind(null,t,Kt,ai),i);break}yr(t,Kt,ai);break;case 5:yr(t,Kt,ai);break;default:throw Error(ne(329))}}}return nn(t,_t()),t.callbackNode===n?U_.bind(null,t):null}function zf(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Hf(e)),t}function Hf(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function nE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~vh,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function dm(t){if($e&6)throw Error(ne(327));Us();var e=Rl(t,0);if(!(e&1))return nn(t,_t()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=df(t);i!==0&&(e=i,n=zf(t,i))}if(n===1)throw n=Qo,Lr(t,0),zi(t,e),nn(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,Kt,ai),nn(t,_t()),null}function xh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(js=_t()+500,gu&&lr())}}function Fr(t){Gi!==null&&Gi.tag===0&&!($e&6)&&Us();var e=$e;$e|=1;var n=wn.transition,i=et;try{if(wn.transition=null,et=1,t)return t()}finally{et=i,wn.transition=n,$e=e,!($e&6)&&lr()}}function yh(){cn=As.current,st(As)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NS(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Gs(),st(en),st(Gt),uh();break;case 5:lh(i);break;case 4:Gs();break;case 13:st(ft);break;case 19:st(ft);break;case 10:rh(i.type._context);break;case 22:case 23:yh()}n=n.return}if(Lt=t,Et=t=Qi(t.current,null),Ot=cn=e,Tt=0,Qo=null,vh=yu=Or=0,Kt=Io=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function O_(t,e){do{var n=Et;try{if(ih(),dl.current=Vl,Hl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hl=!1}if(Ur=0,Pt=Mt=dt=null,No=!1,qo=0,gh.current=null,n===null||n.return===null){Tt=1,Qo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Jp(o);if(m!==null){m.flags&=-257,em(m,o,a,s,e),m.mode&1&&Qp(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Qp(s,u,e),Sh();break e}l=Error(ne(426))}}else if(ut&&a.mode&1){var p=Jp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),em(p,o,a,s,e),th(Ws(l,a));break e}}s=l=Ws(l,a),Tt!==4&&(Tt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=x_(s,l,e);Xp(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ki===null||!Ki.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=y_(s,a,e);Xp(s,y);break e}}s=s.return}while(s!==null)}B_(n)}catch(P){e=P,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function F_(){var t=Gl.current;return Gl.current=Vl,t===null?Vl:t}function Sh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(Or&268435455)&&!(yu&268435455)||zi(Lt,Ot)}function Xl(t,e){var n=$e;$e|=2;var i=F_();(Lt!==t||Ot!==e)&&(ai=null,Lr(t,e));do try{iE();break}catch(r){O_(t,r)}while(!0);if(ih(),$e=n,Gl.current=i,Et!==null)throw Error(ne(261));return Lt=null,Ot=0,Tt}function iE(){for(;Et!==null;)k_(Et)}function rE(){for(;Et!==null&&!Py();)k_(Et)}function k_(t){var e=H_(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?B_(t):Et=e,gh.current=null}function B_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZS(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=KS(n,e,cn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function yr(t,e,n){var i=et,r=wn.transition;try{wn.transition=null,et=1,sE(t,e,n,i)}finally{wn.transition=r,et=i}return null}function sE(t,e,n,i){do Us();while(Gi!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(By(t,s),t===Lt&&(Et=Lt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,V_(Al,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=et;et=1;var a=$e;$e|=4,gh.current=null,JS(t,n),D_(n,t),wS(_f),Pl=!!vf,_f=vf=null,t.current=n,eE(n),by(),$e=a,et=o,wn.transition=s}else t.current=n;if(Da&&(Da=!1,Gi=t,jl=r),s=t.pendingLanes,s===0&&(Ki=null),Dy(n.stateNode),nn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=kf,kf=null,t;return jl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Bf?Uo++:(Uo=0,Bf=t):Uo=0,lr(),null}function Us(){if(Gi!==null){var t=xv(jl),e=wn.transition,n=et;try{if(wn.transition=null,et=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,jl=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:Do(8,c,s)}var f=c.child;if(f!==null)f.return=c,pe=f;else for(;pe!==null;){c=pe;var d=c.sibling,m=c.return;if(b_(c),c===u){pe=null;break}if(d!==null){d.return=m,pe=d;break}pe=m}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(P){gt(a,a.return,P)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if($e=r,lr(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(fu,t)}catch{}i=!0}return i}finally{et=n,wn.transition=e}}return!1}function hm(t,e,n){e=Ws(n,e),e=x_(t,e,1),t=qi(t,e,1),e=Xt(),t!==null&&(ra(t,1,e),nn(t,e))}function gt(t,e,n){if(t.tag===3)hm(t,t,n);else for(;e!==null;){if(e.tag===3){hm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Ws(n,t),t=y_(e,t,1),e=qi(e,t,1),t=Xt(),e!==null&&(ra(e,1,t),nn(e,t));break}}e=e.return}}function oE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ot&n)===n&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>_t()-_h?Lr(t,0):vh|=n),nn(t,e)}function z_(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Xt();t=yi(t,e),t!==null&&(ra(t,e,n),nn(t,n))}function aE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z_(t,n)}function lE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),z_(t,n)}var H_;H_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,qS(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ut&&e.flags&1048576&&jv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pl(t,e),t=e.pendingProps;var r=zs(e,Gt.current);Is(e,n),r=fh(null,e,i,t,r,n);var s=dh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,oh(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,Af(e,i,t,n),e=bf(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Jd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cE(i),t=Dn(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=im(null,e,i,t,n);break e;case 11:e=tm(null,e,i,t,n);break e;case 14:e=nm(null,e,i,Dn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),im(t,e,i,r,n);case 3:e:{if(T_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zv(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(ne(423)),e),e=rm(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(ne(424)),e),e=rm(t,e,i,n,r);break e}else for(dn=Yi(e.stateNode.containerInfo.firstChild),hn=e,ut=!0,Un=null,n=qv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Si(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Qv(e),t===null&&Tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,xf(i,r)?o=null:s!==null&&xf(i,s)&&(e.flags|=32),M_(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return w_(t,e,n);case 4:return ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),tm(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Fl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!en.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Cn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),nm(t,e,i,r,n);case 15:return S_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),pl(t,e),e.tag=1,tn(i)?(t=!0,Il(e)):t=!1,Is(e,n),__(e,i,r),Af(e,i,r,n),bf(null,e,i,!0,t,n);case 19:return C_(t,e,n);case 22:return E_(t,e,n)}throw Error(ne(156,e.tag))};function V_(t,e){return mv(t,e)}function uE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new uE(t,e,n,i)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cE(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Vd)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Nr(n.children,r,s,e);case zd:o=8,r|=8;break;case Kc:return t=Mn(12,n,e,r|2),t.elementType=Kc,t.lanes=s,t;case Zc:return t=Mn(13,n,e,r),t.elementType=Zc,t.lanes=s,t;case Qc:return t=Mn(19,n,e,r),t.elementType=Qc,t.lanes=s,t;case Qg:return Su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kg:o=10;break e;case Zg:o=9;break e;case Hd:o=11;break e;case Vd:o=14;break e;case Oi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Su(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Qg,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function hc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,i,r,s,o,a,l){return t=new fE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(s),t}function dE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return ir;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(tn(n))return Gv(t,n,e)}return e}function W_(t,e,n,i,r,s,o,a,l){return t=Mh(n,i,!0,t,r,s,o,a,l),t.context=G_(null),n=t.current,i=Xt(),r=Zi(n),s=mi(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,ra(t,r,i),nn(t,i),t}function Eu(t,e,n,i){var r=e.current,s=Xt(),o=Zi(r);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(Hn(t,r,o,s),fl(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){pm(t,e),(t=t.alternate)&&pm(t,e)}function hE(){return null}var j_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wh(t){this._internalRoot=t}Mu.prototype.render=wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Eu(t,e,null,null)};Mu.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Eu(null,t,null,null)}),e[xi]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Tv(t)}};function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mm(){}function pE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=$l(o);s.call(u)}}var o=W_(e,i,t,0,null,!1,!1,"",mm);return t._reactRootContainer=o,t[xi]=o.current,Wo(t.nodeType===8?t.parentNode:t),Fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$l(l);a.call(u)}}var l=Mh(t,0,!1,null,null,!1,!1,"",mm);return t._reactRootContainer=l,t[xi]=l.current,Wo(t.nodeType===8?t.parentNode:t),Fr(function(){Eu(e,l,n,i)}),l}function wu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}Eu(e,o,t,r)}else o=pE(n,e,t,r,i);return $l(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(jd(e,n|1),nn(e,_t()),!($e&6)&&(js=_t()+500,lr()))}break;case 13:Fr(function(){var i=yi(t,1);if(i!==null){var r=Xt();Hn(i,t,1,r)}}),Th(t,1)}};Xd=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Xt();Hn(e,t,134217728,n)}Th(t,134217728)}};Sv=function(t){if(t.tag===13){var e=Zi(t),n=yi(t,e);if(n!==null){var i=Xt();Hn(n,t,e,i)}Th(t,e)}};Ev=function(){return et};Mv=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};uf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mu(i);if(!r)throw Error(ne(90));ev(i),tf(i,r)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};uv=xh;cv=Fr;var mE={usingClientEntryPoint:!1,Events:[oa,Ss,mu,av,lv,xh]},po={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gE={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hv(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||hE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{fu=Ia.inject(gE),Kn=Ia}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mE;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(e))throw Error(ne(200));return dE(t,e,null,n)};gn.createRoot=function(t,e){if(!Ch(t))throw Error(ne(299));var n=!1,i="",r=j_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Wo(t.nodeType===8?t.parentNode:t),new wh(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=hv(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Fr(t)};gn.hydrate=function(t,e,n){if(!Tu(e))throw Error(ne(200));return wu(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Ch(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=j_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W_(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mu(e)};gn.render=function(t,e,n){if(!Tu(e))throw Error(ne(200));return wu(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(ne(40));return t._reactRootContainer?(Fr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};gn.unstable_batchedUpdates=xh;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return wu(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),Xg.exports=gn;var $_=Xg.exports;const Rs=uu($_);var gm=$_;Yc.createRoot=gm.createRoot,Yc.hydrateRoot=gm.hydrateRoot;var Y_={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=r(s,i(a)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=r(o,a));return o}function r(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Y_);var vE=Y_.exports;const Ce=uu(vE);function Vf(){return Vf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vf.apply(null,arguments)}function q_(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function vm(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function _E(t){var e=xE(t,"string");return typeof e=="symbol"?e:String(e)}function xE(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function yE(t,e,n){var i=A.useRef(t!==void 0),r=A.useState(e),s=r[0],o=r[1],a=t!==void 0,l=i.current;return i.current=a,!a&&l&&s!==e&&o(e),[a?t:s,A.useCallback(function(u){for(var c=arguments.length,f=new Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(f)),o(u)},[n])]}function Ah(t,e){return Object.keys(e).reduce(function(n,i){var r,s=n,o=s[vm(i)],a=s[i],l=q_(s,[vm(i),i].map(_E)),u=e[i],c=yE(a,o,t[u]),f=c[0],d=c[1];return Vf({},l,(r={},r[i]=f,r[u]=d,r))},t)}function Gf(t,e){return Gf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Gf(t,e)}function SE(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Gf(t,e)}const EE=["xxl","xl","lg","md","sm","xs"],ME="xs",Rh=A.createContext({prefixes:{},breakpoints:EE,minBreakpoint:ME});function Ue(t,e){const{prefixes:n}=A.useContext(Rh);return t||n[e]||e}function K_(){const{breakpoints:t}=A.useContext(Rh);return t}function Z_(){const{minBreakpoint:t}=A.useContext(Rh);return t}function Ph(t){return t&&t.ownerDocument||document}function TE(t){var e=Ph(t);return e&&e.defaultView||window}function wE(t,e){return TE(t).getComputedStyle(t,e)}var CE=/([A-Z])/g;function AE(t){return t.replace(CE,"-$1").toLowerCase()}var RE=/^ms-/;function Ua(t){return AE(t).replace(RE,"-ms-")}var PE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function bE(t){return!!(t&&PE.test(t))}function gi(t,e){var n="",i="";if(typeof e=="string")return t.style.getPropertyValue(Ua(e))||wE(t).getPropertyValue(Ua(e));Object.keys(e).forEach(function(r){var s=e[r];!s&&s!==0?t.style.removeProperty(Ua(r)):bE(r)?i+=r+"("+s+") ":n+=Ua(r)+": "+s+";"}),i&&(n+="transform: "+i+";"),t.style.cssText+=";"+n}var Q_={exports:{}},LE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NE=LE,DE=NE;function J_(){}function e0(){}e0.resetWarningCache=J_;var IE=function(){function t(i,r,s,o,a,l){if(l!==DE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:e0,resetWarningCache:J_};return n.PropTypes=n,n};Q_.exports=IE();var UE=Q_.exports;const vi=uu(UE),_m={disabled:!1},t0=Qt.createContext(null);var OE=function(e){return e.scrollTop},wo="unmounted",ki="exited",On="entering",ui="entered",Jo="exiting",Ci=function(t){SE(e,t);function e(i,r){var s;s=t.call(this,i,r)||this;var o=r,a=o&&!o.isMounting?i.enter:i.appear,l;return s.appearStatus=null,i.in?a?(l=ki,s.appearStatus=On):l=ui:i.unmountOnExit||i.mountOnEnter?l=wo:l=ki,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(r,s){var o=r.in;return o&&s.status===wo?{status:ki}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var s=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==On&&o!==ui&&(s=On):(o===On||o===ui)&&(s=Jo)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,s,o,a;return s=o=a=r,r!=null&&typeof r!="number"&&(s=r.exit,o=r.enter,a=r.appear!==void 0?r.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(r,s){if(r===void 0&&(r=!1),s!==null)if(this.cancelNextCallback(),s===On){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Rs.findDOMNode(this);o&&OE(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ki&&this.setState({status:wo})},n.performEnter=function(r){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[Rs.findDOMNode(this),a],u=l[0],c=l[1],f=this.getTimeouts(),d=a?f.appear:f.enter;if(!r&&!o||_m.disabled){this.safeSetState({status:ui},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:On},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:ui},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var r=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Rs.findDOMNode(this);if(!s||_m.disabled){this.safeSetState({status:ki},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Jo},function(){r.props.onExiting(a),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:ki},function(){r.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,s){s=this.setNextCallback(s),this.setState(r,s)},n.setNextCallback=function(r){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,r(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(r,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Rs.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===wo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=q_(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Qt.createElement(t0.Provider,{value:null},typeof o=="function"?o(r,a):Qt.cloneElement(Qt.Children.only(o),a))},e}(Qt.Component);Ci.contextType=t0;Ci.propTypes={};function Yr(){}Ci.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Yr,onEntering:Yr,onEntered:Yr,onExit:Yr,onExiting:Yr,onExited:Yr};Ci.UNMOUNTED=wo;Ci.EXITED=ki;Ci.ENTERING=On;Ci.ENTERED=ui;Ci.EXITING=Jo;const Cu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Wf=!1,jf=!1;try{var pc={get passive(){return Wf=!0},get once(){return jf=Wf=!0}};Cu&&(window.addEventListener("test",pc,pc),window.removeEventListener("test",pc,!0))}catch{}function FE(t,e,n,i){if(i&&typeof i!="boolean"&&!jf){var r=i.once,s=i.capture,o=n;!jf&&r&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Wf?i:s)}t.addEventListener(e,n,i)}function kE(t,e,n,i){var r=i&&typeof i!="boolean"?i.capture:i;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function Yl(t,e,n,i){return FE(t,e,n,i),function(){kE(t,e,n,i)}}function BE(t,e,n,i){if(i===void 0&&(i=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,i),t.dispatchEvent(r)}}function zE(t){var e=gi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function HE(t,e,n){n===void 0&&(n=5);var i=!1,r=setTimeout(function(){i||BE(t,"transitionend",!0)},e+n),s=Yl(t,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(r),s()}}function VE(t,e,n,i){n==null&&(n=zE(t)||0);var r=HE(t,n,i),s=Yl(t,"transitionend",e);return function(){r(),s()}}function xm(t,e){const n=gi(t,e)||"",i=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*i}function bh(t,e){const n=xm(t,"transitionDuration"),i=xm(t,"transitionDelay"),r=VE(t,s=>{s.target===t&&(r(),e(s))},n+i)}function mo(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...r){e.apply(this,r),n.apply(this,r)}},null)}function n0(t){t.offsetHeight}const ym=t=>!t||typeof t=="function"?t:e=>{t.current=e};function GE(t,e){const n=ym(t),i=ym(e);return r=>{n&&n(r),i&&i(r)}}function la(t,e){return A.useMemo(()=>GE(t,e),[t,e])}function WE(t){return t&&"setState"in t?Rs.findDOMNode(t):t??null}const Lh=Qt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const f=A.useRef(null),d=la(f,l),m=w=>{d(WE(w))},g=w=>C=>{w&&f.current&&w(f.current,C)},x=A.useCallback(g(t),[t]),p=A.useCallback(g(e),[e]),h=A.useCallback(g(n),[n]),_=A.useCallback(g(i),[i]),v=A.useCallback(g(r),[r]),y=A.useCallback(g(s),[s]),P=A.useCallback(g(o),[o]);return L.jsx(Ci,{ref:c,...u,onEnter:x,onEntered:h,onEntering:p,onExit:_,onExited:y,onExiting:v,addEndListener:P,nodeRef:f,children:typeof a=="function"?(w,C)=>a(w,{...C,ref:m}):Qt.cloneElement(a,{ref:m})})}),jE={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function XE(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,i=e[n],r=jE[t];return i+parseInt(gi(e,r[0]),10)+parseInt(gi(e,r[1]),10)}const $E={[ki]:"collapse",[Jo]:"collapsing",[On]:"collapsing",[ui]:"collapse show"},YE=Qt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,className:s,children:o,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:f=!1,appear:d=!1,getDimensionValue:m=XE,...g},x)=>{const p=typeof a=="function"?a():a,h=A.useMemo(()=>mo(w=>{w.style[p]="0"},t),[p,t]),_=A.useMemo(()=>mo(w=>{const C=`scroll${p[0].toUpperCase()}${p.slice(1)}`;w.style[p]=`${w[C]}px`},e),[p,e]),v=A.useMemo(()=>mo(w=>{w.style[p]=null},n),[p,n]),y=A.useMemo(()=>mo(w=>{w.style[p]=`${m(p,w)}px`,n0(w)},i),[i,m,p]),P=A.useMemo(()=>mo(w=>{w.style[p]=null},r),[p,r]);return L.jsx(Lh,{ref:x,addEndListener:bh,...g,"aria-expanded":g.role?l:null,onEnter:h,onEntering:_,onEntered:v,onExit:y,onExiting:P,childRef:o.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:f,appear:d,children:(w,C)=>Qt.cloneElement(o,{...C,className:Ce(s,o.props.className,$E[w],p==="width"&&"collapse-horizontal")})})});function qE(t){const e=A.useRef(t);return A.useEffect(()=>{e.current=t},[t]),e}function fn(t){const e=qE(t);return A.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Nh=t=>A.forwardRef((e,n)=>L.jsx("div",{...e,ref:n,className:Ce(e.className,t)}));function KE(){const t=A.useRef(!0),e=A.useRef(()=>t.current);return A.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function ZE(t){const e=A.useRef(null);return A.useEffect(()=>{e.current=t}),e.current}const QE=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",JE=typeof document<"u",Xf=JE||QE?A.useLayoutEffect:A.useEffect,eM=["as","disabled"];function tM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function nM(t){return!t||t.trim()==="#"}function Dh({tagName:t,disabled:e,href:n,target:i,rel:r,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||i!=null||r!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&nM(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},f=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?i:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:c,onKeyDown:f},u]}const i0=A.forwardRef((t,e)=>{let{as:n,disabled:i}=t,r=tM(t,eM);const[s,{tagName:o}]=Dh(Object.assign({tagName:n,disabled:i},r));return L.jsx(o,Object.assign({},r,s,{ref:e}))});i0.displayName="Button";const iM=i0,rM=["onKeyDown"];function sM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function oM(t){return!t||t.trim()==="#"}const r0=A.forwardRef((t,e)=>{let{onKeyDown:n}=t,i=sM(t,rM);const[r]=Dh(Object.assign({tagName:"a"},i)),s=fn(o=>{r.onKeyDown(o),n==null||n(o)});return oM(i.href)||i.role==="button"?L.jsx("a",Object.assign({ref:e},i,r,{onKeyDown:s})):L.jsx("a",Object.assign({ref:e},i,{onKeyDown:n}))});r0.displayName="Anchor";const aM={[On]:"show",[ui]:"show"},s0=A.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:i,...r},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},a=A.useCallback((l,u)=>{n0(l),i==null||i(l,u)},[i]);return L.jsx(Lh,{ref:s,addEndListener:bh,...o,onEnter:a,childRef:e.ref,children:(l,u)=>A.cloneElement(e,{...u,className:Ce("fade",t,e.props.className,aM[l],n[l])})})});s0.displayName="Fade";const lM={"aria-label":vi.string,onClick:vi.func,variant:vi.oneOf(["white"])},Ih=A.forwardRef(({className:t,variant:e,"aria-label":n="Close",...i},r)=>L.jsx("button",{ref:r,type:"button",className:Ce("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...i}));Ih.displayName="CloseButton";Ih.propTypes=lM;const Xs=A.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:i,active:r=!1,disabled:s=!1,className:o,...a},l)=>{const u=Ue(e,"btn"),[c,{tagName:f}]=Dh({tagName:t,disabled:s,...a}),d=f;return L.jsx(d,{...c,...a,ref:l,disabled:s,className:Ce(o,u,r&&"active",n&&`${u}-${n}`,i&&`${u}-${i}`,a.href&&s&&"disabled")})});Xs.displayName="Button";const Uh=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"card-body"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));Uh.displayName="CardBody";const o0=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"card-footer"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));o0.displayName="CardFooter";const Oh=A.createContext(null);Oh.displayName="CardHeaderContext";const a0=A.forwardRef(({bsPrefix:t,className:e,as:n="div",...i},r)=>{const s=Ue(t,"card-header"),o=A.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return L.jsx(Oh.Provider,{value:o,children:L.jsx(n,{ref:r,...i,className:Ce(e,s)})})});a0.displayName="CardHeader";const l0=A.forwardRef(({bsPrefix:t,className:e,variant:n,as:i="img",...r},s)=>{const o=Ue(t,"card-img");return L.jsx(i,{ref:s,className:Ce(n?`${o}-${n}`:o,e),...r})});l0.displayName="CardImg";const u0=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"card-img-overlay"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));u0.displayName="CardImgOverlay";const c0=A.forwardRef(({className:t,bsPrefix:e,as:n="a",...i},r)=>(e=Ue(e,"card-link"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));c0.displayName="CardLink";const uM=Nh("h6"),f0=A.forwardRef(({className:t,bsPrefix:e,as:n=uM,...i},r)=>(e=Ue(e,"card-subtitle"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));f0.displayName="CardSubtitle";const d0=A.forwardRef(({className:t,bsPrefix:e,as:n="p",...i},r)=>(e=Ue(e,"card-text"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));d0.displayName="CardText";const cM=Nh("h5"),h0=A.forwardRef(({className:t,bsPrefix:e,as:n=cM,...i},r)=>(e=Ue(e,"card-title"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));h0.displayName="CardTitle";const p0=A.forwardRef(({bsPrefix:t,className:e,bg:n,text:i,border:r,body:s=!1,children:o,as:a="div",...l},u)=>{const c=Ue(t,"card");return L.jsx(a,{ref:u,...l,className:Ce(e,c,n&&`bg-${n}`,i&&`text-${i}`,r&&`border-${r}`),children:s?L.jsx(Uh,{children:o}):o})});p0.displayName="Card";const ms=Object.assign(p0,{Img:l0,Title:h0,Subtitle:f0,Body:Uh,Link:c0,Text:d0,Header:a0,Footer:o0,ImgOverlay:u0});function fM(t){const e=A.useRef(t);return e.current=t,e}function dM(t){const e=fM(t);A.useEffect(()=>()=>e.current(),[])}function hM(t,e){let n=0;return A.Children.map(t,i=>A.isValidElement(i)?e(i,n++):i)}function pM(t,e){return A.Children.toArray(t).some(n=>A.isValidElement(n)&&n.type===e)}function mM({as:t,bsPrefix:e,className:n,...i}){e=Ue(e,"col");const r=K_(),s=Z_(),o=[],a=[];return r.forEach(l=>{const u=i[l];delete i[l];let c,f,d;typeof u=="object"&&u!=null?{span:c,offset:f,order:d}=u:c=u;const m=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${m}`:`${e}${m}-${c}`),d!=null&&a.push(`order${m}-${d}`),f!=null&&a.push(`offset${m}-${f}`)}),[{...i,className:Ce(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const ua=A.forwardRef((t,e)=>{const[{className:n,...i},{as:r="div",bsPrefix:s,spans:o}]=mM(t);return L.jsx(r,{...i,ref:e,className:Ce(n,!o.length&&s)})});ua.displayName="Col";const kr=A.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:i,...r},s)=>{const o=Ue(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return L.jsx(n,{ref:s,...r,className:Ce(i,e?`${o}${a}`:o)})});kr.displayName="Container";var gM=Function.prototype.bind.call(Function.prototype.call,[].slice);function Sr(t,e){return gM(t.querySelectorAll(e))}function vM(){const[,t]=A.useReducer(e=>!e,!1);return t}function Sm(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const _M=A.createContext(null),Au=(t,e=null)=>t!=null?String(t):e||null,ql=_M,Fh=A.createContext(null);Fh.displayName="NavContext";const xM="data-rr-ui-",yM="rrUi";function Ru(t){return`${xM}${t}`}function SM(t){return`${yM}${t}`}const m0=A.createContext(Cu?window:void 0);m0.Provider;function kh(){return A.useContext(m0)}const Wr=A.createContext(null);Wr.displayName="NavbarContext";const EM={type:vi.string,tooltip:vi.bool,as:vi.elementType},Pu=A.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:i=!1,...r},s)=>L.jsx(t,{...r,ref:s,className:Ce(e,`${n}-${i?"tooltip":"feedback"}`)}));Pu.displayName="Feedback";Pu.propTypes=EM;const Ei=A.createContext({}),Bh=A.forwardRef(({id:t,bsPrefix:e,className:n,type:i="checkbox",isValid:r=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=A.useContext(Ei);return e=Ue(e,"form-check-input"),L.jsx(o,{...a,ref:l,type:i,id:t||u,className:Ce(n,e,r&&"is-valid",s&&"is-invalid")})});Bh.displayName="FormCheckInput";const Kl=A.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...i},r)=>{const{controlId:s}=A.useContext(Ei);return t=Ue(t,"form-check-label"),L.jsx("label",{...i,ref:r,htmlFor:n||s,className:Ce(e,t)})});Kl.displayName="FormCheckLabel";const g0=A.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:i=!1,reverse:r=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:f,style:d,title:m="",type:g="checkbox",label:x,children:p,as:h="input",..._},v)=>{e=Ue(e,"form-check"),n=Ue(n,"form-switch");const{controlId:y}=A.useContext(Ei),P=A.useMemo(()=>({controlId:t||y}),[y,t]),w=!p&&x!=null&&x!==!1||pM(p,Kl),C=L.jsx(Bh,{..._,type:g==="switch"?"checkbox":g,ref:v,isValid:o,isInvalid:a,disabled:s,as:h});return L.jsx(Ei.Provider,{value:P,children:L.jsx("div",{style:d,className:Ce(f,w&&e,i&&`${e}-inline`,r&&`${e}-reverse`,g==="switch"&&n),children:p||L.jsxs(L.Fragment,{children:[C,w&&L.jsx(Kl,{title:m,children:x}),u&&L.jsx(Pu,{type:c,tooltip:l,children:u})]})})})});g0.displayName="FormCheck";const Zl=Object.assign(g0,{Input:Bh,Label:Kl}),v0=A.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:i,id:r,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...f},d)=>{const{controlId:m}=A.useContext(Ei);return t=Ue(t,"form-control"),L.jsx(c,{...f,type:e,size:i,ref:d,readOnly:u,id:r||m,className:Ce(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});v0.displayName="FormControl";const MM=Object.assign(v0,{Feedback:Pu}),_0=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"form-floating"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));_0.displayName="FormFloating";const zh=A.forwardRef(({controlId:t,as:e="div",...n},i)=>{const r=A.useMemo(()=>({controlId:t}),[t]);return L.jsx(Ei.Provider,{value:r,children:L.jsx(e,{...n,ref:i})})});zh.displayName="FormGroup";const x0=A.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:i=!1,className:r,htmlFor:s,...o},a)=>{const{controlId:l}=A.useContext(Ei);e=Ue(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=Ce(r,e,i&&"visually-hidden",n&&u);return s=s||l,n?L.jsx(ua,{ref:a,as:"label",className:c,htmlFor:s,...o}):L.jsx(t,{ref:a,className:c,htmlFor:s,...o})});x0.displayName="FormLabel";const y0=A.forwardRef(({bsPrefix:t,className:e,id:n,...i},r)=>{const{controlId:s}=A.useContext(Ei);return t=Ue(t,"form-range"),L.jsx("input",{...i,type:"range",ref:r,className:Ce(e,t),id:n||s})});y0.displayName="FormRange";const S0=A.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:i,isValid:r=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=A.useContext(Ei);return t=Ue(t,"form-select"),L.jsx("select",{...a,size:n,ref:l,className:Ce(i,t,e&&`${t}-${e}`,r&&"is-valid",s&&"is-invalid"),id:o||u})});S0.displayName="FormSelect";const E0=A.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:i,...r},s)=>(t=Ue(t,"form-text"),L.jsx(n,{...r,ref:s,className:Ce(e,t,i&&"text-muted")})));E0.displayName="FormText";const M0=A.forwardRef((t,e)=>L.jsx(Zl,{...t,ref:e,type:"switch"}));M0.displayName="Switch";const TM=Object.assign(M0,{Input:Zl.Input,Label:Zl.Label}),T0=A.forwardRef(({bsPrefix:t,className:e,children:n,controlId:i,label:r,...s},o)=>(t=Ue(t,"form-floating"),L.jsxs(zh,{ref:o,className:Ce(e,t),controlId:i,...s,children:[n,L.jsx("label",{htmlFor:i,children:r})]})));T0.displayName="FloatingLabel";const wM={_ref:vi.any,validated:vi.bool,as:vi.elementType},Hh=A.forwardRef(({className:t,validated:e,as:n="form",...i},r)=>L.jsx(n,{...i,ref:r,className:Ce(t,e&&"was-validated")}));Hh.displayName="Form";Hh.propTypes=wM;const Ut=Object.assign(Hh,{Group:zh,Control:MM,Floating:_0,Check:Zl,Switch:TM,Label:x0,Text:E0,Range:y0,Select:S0,FloatingLabel:T0}),w0=A.createContext(null),CM=["as","active","eventKey"];function AM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Vh({key:t,onClick:e,active:n,id:i,role:r,disabled:s}){const o=A.useContext(ql),a=A.useContext(Fh),l=A.useContext(w0);let u=n;const c={role:r};if(a){!r&&a.role==="tablist"&&(c.role="tab");const f=a.getControllerId(t??null),d=a.getControlledId(t??null);c[Ru("event-key")]=t,c.id=f||i,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=fn(f=>{s||(e==null||e(f),t!=null&&o&&!f.isPropagationStopped()&&o(t,f))}),[c,{isActive:u}]}const C0=A.forwardRef((t,e)=>{let{as:n=iM,active:i,eventKey:r}=t,s=AM(t,CM);const[o,a]=Vh(Object.assign({key:Au(r,s.href),active:i},s));return o[Ru("active")]=a.isActive,L.jsx(n,Object.assign({},s,o,{ref:e}))});C0.displayName="NavItem";const RM=C0,PM=["as","onSelect","activeKey","role","onKeyDown"];function bM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const Em=()=>{},Mm=Ru("event-key"),A0=A.forwardRef((t,e)=>{let{as:n="div",onSelect:i,activeKey:r,role:s,onKeyDown:o}=t,a=bM(t,PM);const l=vM(),u=A.useRef(!1),c=A.useContext(ql),f=A.useContext(w0);let d,m;f&&(s=s||"tablist",r=f.activeKey,d=f.getControlledId,m=f.getControllerId);const g=A.useRef(null),x=v=>{const y=g.current;if(!y)return null;const P=Sr(y,`[${Mm}]:not([aria-disabled=true])`),w=y.querySelector("[aria-selected=true]");if(!w||w!==document.activeElement)return null;const C=P.indexOf(w);if(C===-1)return null;let N=C+v;return N>=P.length&&(N=0),N<0&&(N=P.length-1),P[N]},p=(v,y)=>{v!=null&&(i==null||i(v,y),c==null||c(v,y))},h=v=>{if(o==null||o(v),!f)return;let y;switch(v.key){case"ArrowLeft":case"ArrowUp":y=x(-1);break;case"ArrowRight":case"ArrowDown":y=x(1);break;default:return}y&&(v.preventDefault(),p(y.dataset[SM("EventKey")]||null,v),u.current=!0,l())};A.useEffect(()=>{if(g.current&&u.current){const v=g.current.querySelector(`[${Mm}][aria-selected=true]`);v==null||v.focus()}u.current=!1});const _=la(e,g);return L.jsx(ql.Provider,{value:p,children:L.jsx(Fh.Provider,{value:{role:s,activeKey:Au(r),getControlledId:d||Em,getControllerId:m||Em},children:L.jsx(n,Object.assign({},a,{onKeyDown:h,ref:_,role:s}))})})});A0.displayName="Nav";const R0=Object.assign(A0,{Item:RM}),P0=A.forwardRef(({bsPrefix:t,active:e,disabled:n,eventKey:i,className:r,variant:s,action:o,as:a,...l},u)=>{t=Ue(t,"list-group-item");const[c,f]=Vh({key:Au(i,l.href),active:e,...l}),d=fn(g=>{if(n){g.preventDefault(),g.stopPropagation();return}c.onClick(g)});n&&l.tabIndex===void 0&&(l.tabIndex=-1,l["aria-disabled"]=!0);const m=a||(o?l.href?"a":"button":"div");return L.jsx(m,{ref:u,...l,...c,onClick:d,className:Ce(r,t,f.isActive&&"active",n&&"disabled",s&&`${t}-${s}`,o&&`${t}-action`)})});P0.displayName="ListGroupItem";const b0=A.forwardRef((t,e)=>{const{className:n,bsPrefix:i,variant:r,horizontal:s,numbered:o,as:a="div",...l}=Ah(t,{activeKey:"onSelect"}),u=Ue(i,"list-group");let c;return s&&(c=s===!0?"horizontal":`horizontal-${s}`),L.jsx(R0,{ref:e,...l,as:a,className:Ce(n,u,r&&`${u}-${r}`,c&&`${u}-${c}`,o&&`${u}-numbered`)})});b0.displayName="ListGroup";const Tm=Object.assign(b0,{Item:P0});function mc(t){t===void 0&&(t=Ph());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function LM(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const wm=Ru("modal-open");class Gh{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:i=!1}={}){this.handleContainerOverflow=n,this.isRTL=i,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return LM(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[i]:r.style[i]},e.scrollBarWidth&&(n[i]=`${parseInt(gi(r,i)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(wm,""),gi(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(wm),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const gc=(t,e)=>Cu?t==null?(e||Ph()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function NM(t,e){const n=kh(),[i,r]=A.useState(()=>gc(t,n==null?void 0:n.document));if(!i){const s=gc(t);s&&r(s)}return A.useEffect(()=>{},[e,i]),A.useEffect(()=>{const s=gc(t);s!==i&&r(s)},[t,i]),i}function DM({children:t,in:e,onExited:n,mountOnEnter:i,unmountOnExit:r}){const s=A.useRef(null),o=A.useRef(e),a=fn(n);A.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=la(s,t.ref),u=A.cloneElement(t,{ref:l});return e?u:r||!o.current&&i?null:u}function IM(t){return t.code==="Escape"||t.keyCode===27}function UM(){const t=A.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const OM=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function FM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function kM(t){let{onEnter:e,onEntering:n,onEntered:i,onExit:r,onExiting:s,onExited:o,addEndListener:a,children:l}=t,u=FM(t,OM);const{major:c}=UM(),f=c>=19?l.props.ref:l.ref,d=A.useRef(null),m=la(d,typeof l=="function"?null:f),g=w=>C=>{w&&d.current&&w(d.current,C)},x=A.useCallback(g(e),[e]),p=A.useCallback(g(n),[n]),h=A.useCallback(g(i),[i]),_=A.useCallback(g(r),[r]),v=A.useCallback(g(s),[s]),y=A.useCallback(g(o),[o]),P=A.useCallback(g(a),[a]);return Object.assign({},u,{nodeRef:d},e&&{onEnter:x},n&&{onEntering:p},i&&{onEntered:h},r&&{onExit:_},s&&{onExiting:v},o&&{onExited:y},a&&{addEndListener:P},{children:typeof l=="function"?(w,C)=>l(w,Object.assign({},C,{ref:m})):A.cloneElement(l,{ref:m})})}const BM=["component"];function zM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const HM=A.forwardRef((t,e)=>{let{component:n}=t,i=zM(t,BM);const r=kM(i);return L.jsx(n,Object.assign({ref:e},r))});function VM({in:t,onTransition:e}){const n=A.useRef(null),i=A.useRef(!0),r=fn(e);return Xf(()=>{if(!n.current)return;let s=!1;return r({in:t,element:n.current,initial:i.current,isStale:()=>s}),()=>{s=!0}},[t,r]),Xf(()=>(i.current=!1,()=>{i.current=!0}),[]),n}function GM({children:t,in:e,onExited:n,onEntered:i,transition:r}){const[s,o]=A.useState(!e);e&&s&&o(!1);const a=VM({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?i==null||i(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(r(u)).then(c,f=>{throw u.in||o(!0),f})}}),l=la(a,t.ref);return s&&!e?null:A.cloneElement(t,{ref:l})}function Cm(t,e,n){return t?L.jsx(HM,Object.assign({},n,{component:t})):e?L.jsx(GM,Object.assign({},n,{transition:e})):L.jsx(DM,Object.assign({},n))}const WM=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function jM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let vc;function XM(t){return vc||(vc=new Gh({ownerDocument:t==null?void 0:t.document})),vc}function $M(t){const e=kh(),n=t||XM(e),i=A.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>n.add(i.current),remove:()=>n.remove(i.current),isTopModal:()=>n.isTopModal(i.current),setDialogRef:A.useCallback(r=>{i.current.dialog=r},[]),setBackdropRef:A.useCallback(r=>{i.current.backdrop=r},[])})}const L0=A.forwardRef((t,e)=>{let{show:n=!1,role:i="dialog",className:r,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:f,runTransition:d,backdropTransition:m,runBackdropTransition:g,autoFocus:x=!0,enforceFocus:p=!0,restoreFocus:h=!0,restoreFocusOptions:_,renderDialog:v,renderBackdrop:y=Me=>L.jsx("div",Object.assign({},Me)),manager:P,container:w,onShow:C,onHide:N=()=>{},onExit:T,onExited:S,onExiting:I,onEnter:j,onEntering:H,onEntered:$}=t,Y=jM(t,WM);const W=kh(),X=NM(w),D=$M(P),K=KE(),J=ZE(n),[re,ye]=A.useState(!n),Fe=A.useRef(null);A.useImperativeHandle(e,()=>D,[D]),Cu&&!J&&n&&(Fe.current=mc(W==null?void 0:W.document)),n&&re&&ye(!1);const G=fn(()=>{if(D.add(),ke.current=Yl(document,"keydown",Le),Ie.current=Yl(document,"focus",()=>setTimeout(ue),!0),C&&C(),x){var Me,Se;const lt=mc((Me=(Se=D.dialog)==null?void 0:Se.ownerDocument)!=null?Me:W==null?void 0:W.document);D.dialog&&lt&&!Sm(D.dialog,lt)&&(Fe.current=lt,D.dialog.focus())}}),Q=fn(()=>{if(D.remove(),ke.current==null||ke.current(),Ie.current==null||Ie.current(),h){var Me;(Me=Fe.current)==null||Me.focus==null||Me.focus(_),Fe.current=null}});A.useEffect(()=>{!n||!X||G()},[n,X,G]),A.useEffect(()=>{re&&Q()},[re,Q]),dM(()=>{Q()});const ue=fn(()=>{if(!p||!K()||!D.isTopModal())return;const Me=mc(W==null?void 0:W.document);D.dialog&&Me&&!Sm(D.dialog,Me)&&D.dialog.focus()}),de=fn(Me=>{Me.target===Me.currentTarget&&(u==null||u(Me),a===!0&&N())}),Le=fn(Me=>{l&&IM(Me)&&D.isTopModal()&&(c==null||c(Me),Me.defaultPrevented||N())}),Ie=A.useRef(),ke=A.useRef(),ot=(...Me)=>{ye(!0),S==null||S(...Me)};if(!X)return null;const b=Object.assign({role:i,ref:D.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},Y,{style:s,className:r,tabIndex:-1});let at=v?v(b):L.jsx("div",Object.assign({},b,{children:A.cloneElement(o,{role:"document"})}));at=Cm(f,d,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:I,onExited:ot,onEnter:j,onEntering:H,onEntered:$,children:at});let We=null;return a&&(We=y({ref:D.setBackdropRef,onClick:de}),We=Cm(m,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:We})),L.jsx(L.Fragment,{children:Rs.createPortal(L.jsxs(L.Fragment,{children:[We,at]}),X)})});L0.displayName="Modal";const YM=Object.assign(L0,{Manager:Gh});function qM(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function KM(t,e){t.classList?t.classList.add(e):qM(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Am(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ZM(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Am(t.className,e):t.setAttribute("class",Am(t.className&&t.className.baseVal||"",e))}const qr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class N0 extends Gh{adjustAndStore(e,n,i){const r=n.style[e];n.dataset[e]=r,gi(n,{[e]:`${parseFloat(gi(n,e))+i}px`})}restore(e,n){const i=n.dataset[e];i!==void 0&&(delete n.dataset[e],gi(n,{[e]:i}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(KM(n,"modal-open"),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Sr(n,qr.FIXED_CONTENT).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth)),Sr(n,qr.STICKY_CONTENT).forEach(s=>this.adjustAndStore(r,s,-e.scrollBarWidth)),Sr(n,qr.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();ZM(n,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Sr(n,qr.FIXED_CONTENT).forEach(s=>this.restore(i,s)),Sr(n,qr.STICKY_CONTENT).forEach(s=>this.restore(r,s)),Sr(n,qr.NAVBAR_TOGGLER).forEach(s=>this.restore(r,s))}}let _c;function QM(t){return _c||(_c=new N0(t)),_c}const D0=A.createContext({onHide(){}}),JM=A.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:i,children:r,...s},o)=>{const a=A.useContext(D0),l=fn(()=>{a==null||a.onHide(),i==null||i()});return L.jsxs("div",{ref:o,...s,children:[r,n&&L.jsx(Ih,{"aria-label":t,variant:e,onClick:l})]})});var Rm={exports:{}},$f={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(i){function r(o,a,l,u,c,f){var d=u||"<<anonymous>>",m=f||l;if(a[l]==null)return o?new Error("Required "+c+" `"+m+"` was not specified "+("in `"+d+"`.")):null;for(var g=arguments.length,x=Array(g>6?g-6:0),p=6;p<g;p++)x[p-6]=arguments[p];return i.apply(void 0,[a,l,d,c,m].concat(x))}var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}t.exports=e.default})($f,$f.exports);var eT=$f.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=eT,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,f=Array(c),d=0;d<c;d++)f[d]=arguments[d];var m=null;return a.forEach(function(g){if(m==null){var x=g.apply(void 0,f);x!=null&&(m=x)}}),m}return(0,i.default)(u)}t.exports=e.default})(Rm,Rm.exports);const I0=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"nav-item"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));I0.displayName="NavItem";const U0=A.forwardRef(({bsPrefix:t,className:e,as:n=r0,active:i,eventKey:r,disabled:s=!1,...o},a)=>{t=Ue(t,"nav-link");const[l,u]=Vh({key:Au(r,o.href),active:i,disabled:s,...o});return L.jsx(n,{...o,...l,ref:a,disabled:s,className:Ce(e,t,s&&"disabled",u.isActive&&"active")})});U0.displayName="NavLink";const O0=A.forwardRef((t,e)=>{const{as:n="div",bsPrefix:i,variant:r,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:u,activeKey:c,...f}=Ah(t,{activeKey:"onSelect"}),d=Ue(i,"nav");let m,g,x=!1;const p=A.useContext(Wr),h=A.useContext(Oh);return p?(m=p.bsPrefix,x=a??!0):h&&({cardHeaderBsPrefix:g}=h),L.jsx(R0,{as:n,ref:e,activeKey:c,className:Ce(u,{[d]:!x,[`${m}-nav`]:x,[`${m}-nav-scroll`]:x&&l,[`${g}-${r}`]:!!g,[`${d}-${r}`]:!!r,[`${d}-fill`]:s,[`${d}-justified`]:o}),...f})});O0.displayName="Nav";const Kr=Object.assign(O0,{Item:I0,Link:U0}),F0=A.forwardRef(({bsPrefix:t,className:e,as:n,...i},r)=>{t=Ue(t,"navbar-brand");const s=n||(i.href?"a":"span");return L.jsx(s,{...i,ref:r,className:Ce(e,t)})});F0.displayName="NavbarBrand";const k0=A.forwardRef(({children:t,bsPrefix:e,...n},i)=>{e=Ue(e,"navbar-collapse");const r=A.useContext(Wr);return L.jsx(YE,{in:!!(r&&r.expanded),...n,children:L.jsx("div",{ref:i,className:e,children:t})})});k0.displayName="NavbarCollapse";const B0=A.forwardRef(({bsPrefix:t,className:e,children:n,label:i="Toggle navigation",as:r="button",onClick:s,...o},a)=>{t=Ue(t,"navbar-toggler");const{onToggle:l,expanded:u}=A.useContext(Wr)||{},c=fn(f=>{s&&s(f),l&&l()});return r==="button"&&(o.type="button"),L.jsx(r,{...o,ref:a,onClick:c,"aria-label":i,className:Ce(e,t,!u&&"collapsed"),children:n||L.jsx("span",{className:`${t}-icon`})})});B0.displayName="NavbarToggle";const Yf=new WeakMap,Pm=(t,e)=>{if(!t||!e)return;const n=Yf.get(e)||new Map;Yf.set(e,n);let i=n.get(t);return i||(i=e.matchMedia(t),i.refCount=0,n.set(i.media,i)),i};function tT(t,e=typeof window>"u"?void 0:window){const n=Pm(t,e),[i,r]=A.useState(()=>n?n.matches:!1);return Xf(()=>{let s=Pm(t,e);if(!s)return r(!1);let o=Yf.get(e);const a=()=>{r(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),i}function nT(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function i(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function r(a){const l=i(a);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,u){let c;typeof a=="object"?(c=a,u=l,l=!0):(l=l||!0,c={[a]:l});let f=A.useMemo(()=>Object.entries(c).reduce((d,[m,g])=>((g==="up"||g===!0)&&(d=n(d,s(m))),(g==="down"||g===!0)&&(d=n(d,r(m))),d),""),[JSON.stringify(c)]);return tT(f,u)}return o}const iT=nT({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),z0=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ue(e,"offcanvas-body"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));z0.displayName="OffcanvasBody";const rT={[On]:"show",[ui]:"show"},H0=A.forwardRef(({bsPrefix:t,className:e,children:n,in:i=!1,mountOnEnter:r=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=Ue(t,"offcanvas"),L.jsx(Lh,{ref:l,addEndListener:bh,in:i,mountOnEnter:r,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,c)=>A.cloneElement(n,{...c,className:Ce(e,n.props.className,(u===On||u===Jo)&&`${t}-toggling`,rT[u])})})));H0.displayName="OffcanvasToggling";const V0=A.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:i=!1,...r},s)=>(t=Ue(t,"offcanvas-header"),L.jsx(JM,{ref:s,...r,className:Ce(e,t),closeLabel:n,closeButton:i})));V0.displayName="OffcanvasHeader";const sT=Nh("h5"),G0=A.forwardRef(({className:t,bsPrefix:e,as:n=sT,...i},r)=>(e=Ue(e,"offcanvas-title"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));G0.displayName="OffcanvasTitle";function oT(t){return L.jsx(H0,{...t})}function aT(t){return L.jsx(s0,{...t})}const W0=A.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":i,placement:r="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:f,onHide:d,container:m,autoFocus:g=!0,enforceFocus:x=!0,restoreFocus:p=!0,restoreFocusOptions:h,onEntered:_,onExit:v,onExiting:y,onEnter:P,onEntering:w,onExited:C,backdropClassName:N,manager:T,renderStaticNode:S=!1,...I},j)=>{const H=A.useRef();t=Ue(t,"offcanvas");const{onToggle:$}=A.useContext(Wr)||{},[Y,W]=A.useState(!1),X=iT(s||"xs","up");A.useEffect(()=>{W(s?o&&!X:o)},[o,s,X]);const D=fn(()=>{$==null||$(),d==null||d()}),K=A.useMemo(()=>({onHide:D}),[D]);function J(){return T||(u?(H.current||(H.current=new N0({handleContainerOverflow:!1})),H.current):QM())}const re=(Q,...ue)=>{Q&&(Q.style.visibility="visible"),P==null||P(Q,...ue)},ye=(Q,...ue)=>{Q&&(Q.style.visibility=""),C==null||C(...ue)},Fe=A.useCallback(Q=>L.jsx("div",{...Q,className:Ce(`${t}-backdrop`,N)}),[N,t]),G=Q=>L.jsx("div",{...Q,...I,className:Ce(e,s?`${t}-${s}`:t,`${t}-${r}`),"aria-labelledby":i,children:n});return L.jsxs(L.Fragment,{children:[!Y&&(s||S)&&G({}),L.jsx(D0.Provider,{value:K,children:L.jsx(YM,{show:Y,ref:j,backdrop:a,container:m,keyboard:l,autoFocus:g,enforceFocus:x&&!u,restoreFocus:p,restoreFocusOptions:h,onEscapeKeyDown:c,onShow:f,onHide:D,onEnter:re,onEntering:w,onEntered:_,onExit:v,onExiting:y,onExited:ye,manager:J(),transition:oT,backdropTransition:aT,renderBackdrop:Fe,renderDialog:G})})]})});W0.displayName="Offcanvas";const lT=Object.assign(W0,{Body:z0,Header:V0,Title:G0}),j0=A.forwardRef((t,e)=>{const n=A.useContext(Wr);return L.jsx(lT,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});j0.displayName="NavbarOffcanvas";const X0=A.forwardRef(({className:t,bsPrefix:e,as:n="span",...i},r)=>(e=Ue(e,"navbar-text"),L.jsx(n,{ref:r,className:Ce(t,e),...i})));X0.displayName="NavbarText";const $0=A.forwardRef((t,e)=>{const{bsPrefix:n,expand:i=!0,variant:r="light",bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:f,onSelect:d,collapseOnSelect:m=!1,...g}=Ah(t,{expanded:"onToggle"}),x=Ue(n,"navbar"),p=A.useCallback((...v)=>{d==null||d(...v),m&&c&&(f==null||f(!1))},[d,m,c,f]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let h=`${x}-expand`;typeof i=="string"&&(h=`${h}-${i}`);const _=A.useMemo(()=>({onToggle:()=>f==null?void 0:f(!c),bsPrefix:x,expanded:!!c,expand:i}),[x,c,i,f]);return L.jsx(Wr.Provider,{value:_,children:L.jsx(ql.Provider,{value:p,children:L.jsx(u,{ref:e,...g,className:Ce(l,x,i&&h,r&&`${x}-${r}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});$0.displayName="Navbar";const Oa=Object.assign($0,{Brand:F0,Collapse:k0,Offcanvas:j0,Text:X0,Toggle:B0}),bm=1e3;function uT(t,e,n){const i=(t-e)/(n-e)*100;return Math.round(i*bm)/bm}function Lm({min:t,now:e,max:n,label:i,visuallyHidden:r,striped:s,animated:o,className:a,style:l,variant:u,bsPrefix:c,...f},d){return L.jsx("div",{ref:d,...f,role:"progressbar",className:Ce(a,`${c}-bar`,{[`bg-${u}`]:u,[`${c}-bar-animated`]:o,[`${c}-bar-striped`]:o||s}),style:{width:`${uT(e,t,n)}%`,...l},"aria-valuenow":e,"aria-valuemin":t,"aria-valuemax":n,children:r?L.jsx("span",{className:"visually-hidden",children:i}):i})}const Y0=A.forwardRef(({isChild:t=!1,...e},n)=>{const i={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...e};if(i.bsPrefix=Ue(i.bsPrefix,"progress"),t)return Lm(i,n);const{min:r,now:s,max:o,label:a,visuallyHidden:l,striped:u,animated:c,bsPrefix:f,variant:d,className:m,children:g,...x}=i;return L.jsx("div",{ref:n,...x,className:Ce(m,f),children:g?hM(g,p=>A.cloneElement(p,{isChild:!0})):Lm({min:r,now:s,max:o,label:a,visuallyHidden:l,striped:u,animated:c,bsPrefix:f,variant:d},n)})});Y0.displayName="ProgressBar";const Br=A.forwardRef(({bsPrefix:t,className:e,as:n="div",...i},r)=>{const s=Ue(t,"row"),o=K_(),a=Z_(),l=`${s}-cols`,u=[];return o.forEach(c=>{const f=i[c];delete i[c];let d;f!=null&&typeof f=="object"?{cols:d}=f:d=f;const m=c!==a?`-${c}`:"";d!=null&&u.push(`${l}${m}-${d}`)}),L.jsx(n,{ref:r,...i,className:Ce(e,s,...u)})});Br.displayName="Row";const q0=A.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:i,as:r="div",className:s,...o},a)=>{t=Ue(t,"spinner");const l=`${t}-${n}`;return L.jsx(r,{ref:a,...o,className:Ce(s,l,i&&`${l}-${i}`,e&&`text-${e}`)})});q0.displayName="Spinner";const cT=()=>{const[t,e]=A.useState({PTS:"",AST:"",TRB:"",STL:"",BLK:"","3P%":""}),[n,i]=A.useState(null),[r,s]=A.useState(!1),o=u=>{e({...t,[u.target.name]:u.target.value})},a=async u=>{u.preventDefault(),s(!0);const c={PTS:[parseFloat(t.PTS)],AST:[parseFloat(t.AST)],TRB:[parseFloat(t.TRB)],STL:[parseFloat(t.STL)],BLK:[parseFloat(t.BLK)],"3P%":[parseFloat(t["3P%"])]};try{const d=await(await fetch("https://reading-system.onrender.com/getPredictionOutput",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).json();i(d.predict)}catch(f){console.error("Error:",f)}finally{s(!1)}},l=u=>parseFloat(u).toLocaleString("en-US",{style:"currency",currency:"USD"});return L.jsxs(kr,{className:"mt-5",children:[L.jsx("h1",{className:"mb-4",children:"NBA Salary Predictor"}),L.jsxs(Ut,{onSubmit:a,children:[L.jsx(Br,{children:Object.keys(t).map(u=>L.jsx(ua,{sm:6,children:L.jsxs(Ut.Group,{controlId:u,children:[L.jsx(Ut.Label,{children:u}),L.jsx(Ut.Control,{type:"number",name:u,value:t[u],onChange:o,required:!0})]})},u))}),L.jsx("br",{}),L.jsx(Xs,{variant:"primary",type:"submit",disabled:r,children:r?L.jsxs(L.Fragment,{children:[L.jsx(q0,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Loading..."]}):"Predict Salary"})]}),n!==null&&L.jsx("div",{className:"mt-4",children:L.jsxs("h4",{children:["Predicted Salary: ",l(n.toFixed(2))]})})]})},fT=()=>L.jsx(L.Fragment,{children:L.jsxs(kr,{children:[L.jsx(Br,{}),L.jsx(Br,{children:L.jsx(cT,{})})]})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="166",dT=0,Nm=1,hT=2,K0=1,pT=2,oi=3,rr=0,rn=1,ci=2,Ji=0,Os=1,Dm=2,Im=3,Um=4,mT=5,Tr=100,gT=101,vT=102,_T=103,xT=104,yT=200,ST=201,ET=202,MT=203,qf=204,Kf=205,TT=206,wT=207,CT=208,AT=209,RT=210,PT=211,bT=212,LT=213,NT=214,DT=0,IT=1,UT=2,Ql=3,OT=4,FT=5,kT=6,BT=7,Z0=0,zT=1,HT=2,er=0,VT=1,GT=2,WT=3,jT=4,XT=5,$T=6,YT=7,Q0=300,$s=301,Ys=302,Zf=303,Qf=304,bu=306,Jf=1e3,Pr=1001,ed=1002,Tn=1003,qT=1004,Fa=1005,Fn=1006,xc=1007,br=1008,Mi=1009,J0=1010,ex=1011,ea=1012,jh=1013,zr=1014,hi=1015,ca=1016,Xh=1017,$h=1018,qs=1020,tx=35902,nx=1021,ix=1022,kn=1023,rx=1024,sx=1025,Fs=1026,Ks=1027,ox=1028,Yh=1029,ax=1030,qh=1031,Kh=1033,_l=33776,xl=33777,yl=33778,Sl=33779,td=35840,nd=35841,id=35842,rd=35843,sd=36196,od=37492,ad=37496,ld=37808,ud=37809,cd=37810,fd=37811,dd=37812,hd=37813,pd=37814,md=37815,gd=37816,vd=37817,_d=37818,xd=37819,yd=37820,Sd=37821,El=36492,Ed=36494,Md=36495,lx=36283,Td=36284,wd=36285,Cd=36286,KT=3200,ZT=3201,QT=0,JT=1,Hi="",Xn="srgb",ur="srgb-linear",Zh="display-p3",Lu="display-p3-linear",Jl="linear",rt="srgb",eu="rec709",tu="p3",Zr=7680,Om=519,e1=512,t1=513,n1=514,ux=515,i1=516,r1=517,s1=518,o1=519,Fm=35044,km="300 es",pi=2e3,nu=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,Ad=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function a1(t,e){return(t%e+e)%e}function Sc(t,e,n){return(1-n)*t+n*e}function go(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],_=r[1],v=r[4],y=r[7],P=r[2],w=r[5],C=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*p+a*v+l*w,s[6]=o*h+a*y+l*C,s[1]=u*x+c*_+f*P,s[4]=u*p+c*v+f*w,s[7]=u*h+c*y+f*C,s[2]=d*x+m*_+g*P,s[5]=d*p+m*v+g*w,s[8]=d*h+m*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,g=n*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ec.makeScale(e,n)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new He;function cx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function l1(){const t=iu("canvas");return t.style.display="block",t}const Bm={};function fx(t){t in Bm||(Bm[t]=!0,console.warn(t))}function u1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zm=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hm=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[ur]:{transfer:Jl,primaries:eu,toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:rt,primaries:eu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Lu]:{transfer:Jl,primaries:tu,toReference:t=>t.applyMatrix3(Hm),fromReference:t=>t.applyMatrix3(zm)},[Zh]:{transfer:rt,primaries:tu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Hm),fromReference:t=>t.applyMatrix3(zm).convertLinearToSRGB()}},c1=new Set([ur,Lu]),Je={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!c1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===Hi?Jl:ka[t].transfer}};function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class f1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=iu("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=iu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d1=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?f1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h1=0;class sn extends no{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Pr,r=Pr,s=Fn,o=br,a=kn,l=Mi,u=sn.DEFAULT_ANISOTROPY,c=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=fa(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jf:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jf:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Q0;sn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(m+1)/2,P=(h+1)/2,w=(c+d)/4,C=(f+x)/4,N=(g+p)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=C/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-x)/_,this.z=(d-c)/_,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p1 extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends p1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hx extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m1 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==d||u!==m||c!==g){let p=1-a;const h=l*d+u*m+c*g+f*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),w=Math.atan2(P,h*_);p=Math.sin(p*w)/P,a=Math.sin(a*w)/P}const y=a*_;if(l=l*p+d*y,u=u*p+m*y,c=c*p+g*y,f=f*p+x*y,p===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*m-u*d,e[n+1]=l*g+c*d+u*f-a*m,e[n+2]=u*g+c*m+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"YXZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"ZXY":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"ZYX":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"YZX":this._x=d*c*f+u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f-d*m*g;break;case"XZY":this._x=d*c*f-u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new z,Vm=new da;class ha{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),za.subVectors(this.max,vo),Jr.subVectors(e.a,vo),es.subVectors(e.b,vo),ts.subVectors(e.c,vo),Pi.subVectors(es,Jr),bi.subVectors(ts,es),hr.subVectors(Jr,ts);let n=[0,-Pi.z,Pi.y,0,-bi.z,bi.y,0,-hr.z,hr.y,Pi.z,0,-Pi.x,bi.z,0,-bi.x,hr.z,0,-hr.x,-Pi.y,Pi.x,0,-bi.y,bi.x,0,-hr.y,hr.x,0];return!Cc(n,Jr,es,ts,za)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Jr,es,ts,za))?!1:(Ha.crossVectors(Pi,bi),n=[Ha.x,Ha.y,Ha.z],Cc(n,Jr,es,ts,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,Ba=new ha,Jr=new z,es=new z,ts=new z,Pi=new z,bi=new z,hr=new z,vo=new z,za=new z,Ha=new z,pr=new z;function Cc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),c=i.dot(pr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const g1=new ha,_o=new z,Ac=new z;class Qh{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):g1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Ac)),this.expandByPoint(_o.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new z,Rc=new z,Va=new z,Li=new z,Pc=new z,Ga=new z,bc=new z;class v1{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rc.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Rc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Li.dot(this.direction),l=-Li.dot(Va),u=Li.lengthSq(),c=Math.abs(1-o*o);let f,d,m,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const x=1/c;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rc).addScaledVector(Va,d),m}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Pc.subVectors(n,e),Ga.subVectors(i,e),bc.crossVectors(Pc,Ga);let o=this.direction.dot(bc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Li,Ga));if(l<0)return null;const u=a*this.direction.dot(Pc.cross(Li));if(u<0||l+u>o)return null;const c=-a*Li.dot(bc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,m,g,x,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,m,g,x,p)}set(e,n,i,r,s,o,a,l,u,c,f,d,m,g,x,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,g=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+g*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=g+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,g=u*c,x=u*f;n[0]=d+x*a,n[4]=g*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=m*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,g=u*c,x=u*f;n[0]=d-x*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,g=a*c,x=a*f;n[0]=l*c,n[4]=g*u-m,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=m*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-d*f,n[8]=g*f+m,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,m=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+x,n[5]=o*c,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*c,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_1,e,x1)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ni.crossVectors(i,ln),Ni.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ni.crossVectors(i,ln)),Ni.normalize(),Wa.crossVectors(ln,Ni),r[0]=Ni.x,r[4]=Wa.x,r[8]=ln.x,r[1]=Ni.y,r[5]=Wa.y,r[9]=ln.y,r[2]=Ni.z,r[6]=Wa.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],_=i[3],v=i[7],y=i[11],P=i[15],w=r[0],C=r[4],N=r[8],T=r[12],S=r[1],I=r[5],j=r[9],H=r[13],$=r[2],Y=r[6],W=r[10],X=r[14],D=r[3],K=r[7],J=r[11],re=r[15];return s[0]=o*w+a*S+l*$+u*D,s[4]=o*C+a*I+l*Y+u*K,s[8]=o*N+a*j+l*W+u*J,s[12]=o*T+a*H+l*X+u*re,s[1]=c*w+f*S+d*$+m*D,s[5]=c*C+f*I+d*Y+m*K,s[9]=c*N+f*j+d*W+m*J,s[13]=c*T+f*H+d*X+m*re,s[2]=g*w+x*S+p*$+h*D,s[6]=g*C+x*I+p*Y+h*K,s[10]=g*N+x*j+p*W+h*J,s[14]=g*T+x*H+p*X+h*re,s[3]=_*w+v*S+y*$+P*D,s[7]=_*C+v*I+y*Y+P*K,s[11]=_*N+v*j+y*W+P*J,s[15]=_*T+v*H+y*X+P*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+x*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],h=e[15],_=f*p*u-x*d*u+x*l*m-a*p*m-f*l*h+a*d*h,v=g*d*u-c*p*u-g*l*m+o*p*m+c*l*h-o*d*h,y=c*x*u-g*f*u+g*a*m-o*x*m-c*a*h+o*f*h,P=g*f*l-c*x*l-g*a*d+o*x*d+c*a*p-o*f*p,w=n*_+i*v+r*y+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(c*p*s-g*d*s+g*r*m-n*p*m-c*r*h+n*d*h)*C,e[6]=(g*l*s-o*p*s-g*r*u+n*p*u+o*r*h-n*l*h)*C,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*C,e[8]=y*C,e[9]=(g*f*s-c*x*s-g*i*m+n*x*m+c*i*h-n*f*h)*C,e[10]=(o*x*s-g*a*s+g*i*u-n*x*u-o*i*h+n*a*h)*C,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*m-n*a*m)*C,e[12]=P*C,e[13]=(c*x*r-g*f*r+g*i*d-n*x*d-c*i*p+n*f*p)*C,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*p-n*a*p)*C,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,g=s*f,x=o*c,p=o*f,h=a*f,_=l*u,v=l*c,y=l*f,P=i.x,w=i.y,C=i.z;return r[0]=(1-(x+h))*P,r[1]=(m+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+h))*w,r[6]=(p+_)*w,r[7]=0,r[8]=(g+v)*C,r[9]=(p-_)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ns.set(r[0],r[1],r[2]).length();const o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,c=1/o,f=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,g;if(a===pi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===nu)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,m=(i+r)*c;let g,x;if(a===pi)g=(o+s)*f,x=-2*f;else if(a===nu)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ns=new z,Ln=new wt,_1=new z(0,0,0),x1=new z(1,1,1),Ni=new z,Wa=new z,ln=new z,Gm=new wt,Wm=new da;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y1=0;const jm=new z,is=new da,ii=new wt,ja=new z,xo=new z,S1=new z,E1=new da,Xm=new z(1,0,0),$m=new z(0,1,0),Ym=new z(0,0,1),qm={type:"added"},M1={type:"removed"},rs={type:"childadded",child:null},Lc={type:"childremoved",child:null};class pn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new z,n=new Ti,i=new da,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new He}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,n){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xo,ja,this.up):ii.lookAt(ja,xo,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),is.setFromRotationMatrix(ii),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(M1),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,E1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new z(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new z,ri=new z,Nc=new z,si=new z,ss=new z,os=new z,Km=new z,Dc=new z,Ic=new z,Uc=new z;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ri.subVectors(i,n),Nc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(ri),l=Nn.dot(Nc),u=ri.dot(ri),c=ri.dot(Nc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ri.subVectors(e,n),Nn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),Dc.subVectors(e,i);const l=ss.dot(Dc),u=os.dot(Dc);if(l<=0&&u<=0)return n.copy(i);Ic.subVectors(e,r);const c=ss.dot(Ic),f=os.dot(Ic);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ss,o);Uc.subVectors(e,s);const m=ss.dot(Uc),g=os.dot(Uc);if(g>=0&&m<=g)return n.copy(s);const x=m*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(os,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return Km.subVectors(s,r),a=(f-c)/(f-c+(m-g)),n.copy(r).addScaledVector(Km,a);const h=1/(p+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=a1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Oc(o,s,e+1/3),this.g=Oc(o,s,e),this.b=Oc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Je.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Zt(Ht.r*255,0,255))*65536+Math.round(Zt(Ht.g*255,0,255))*256+Math.round(Zt(Ht.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Xn){Je.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Xa);const i=Sc(Di.h,Xa.h,n),r=Sc(Di.s,Xa.s,n),s=Sc(Di.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new tt;tt.NAMES=mx;let T1=0;class Nu extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Os,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Kf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ru extends Nu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new z,$a=new Qe;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$a.fromBufferAttribute(this,n),$a.applyMatrix3(e),this.setXY(n,$a.x,$a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=go(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=go(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=go(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=go(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fm&&(e.usage=this.usage),e}}class gx extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vx extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jn extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let w1=0;const xn=new wt,Fc=new pn,as=new z,un=new ha,yo=new ha,Rt=new z;class cr extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?vx:gx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(un.min,yo.min),un.expandByPoint(Rt),Rt.addVectors(un.max,yo.max),un.expandByPoint(Rt)):(un.expandByPoint(yo.min),un.expandByPoint(yo.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Rt.fromBufferAttribute(a,u),l&&(as.fromBufferAttribute(e,u),Rt.add(as)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new z,l[N]=new z;const u=new z,c=new z,f=new z,d=new Qe,m=new Qe,g=new Qe,x=new z,p=new z;function h(N,T,S){u.fromBufferAttribute(i,N),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),m.sub(d),g.sub(d);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(I),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(I),a[N].add(x),a[T].add(x),a[S].add(x),l[N].add(p),l[T].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,T=_.length;N<T;++N){const S=_[N],I=S.start,j=S.count;for(let H=I,$=I+j;H<$;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new z,y=new z,P=new z,w=new z;function C(N){P.fromBufferAttribute(r,N),w.copy(P);const T=a[N];v.copy(T),v.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(w,T);const I=y.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,I)}for(let N=0,T=_.length;N<T;++N){const S=_[N],I=S.start,j=S.count;for(let H=I,$=I+j;H<$;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let h=0;h<c;h++)d[g++]=u[m++]}return new Qn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new wt,mr=new v1,Ya=new Qh,Qm=new z,ls=new z,us=new z,cs=new z,kc=new z,qa=new z,Ka=new Qe,Za=new Qe,Qa=new Qe,Jm=new z,eg=new z,tg=new z,Ja=new z,el=new z;class Bn extends pn{constructor(e=new cr,n=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(kc.fromBufferAttribute(f,e),o?qa.addScaledVector(kc,c):qa.addScaledVector(kc.sub(n),c))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Ya.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ya,Qm)===null||mr.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Zm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Zm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,P=v;y<P;y+=3){const w=a.getX(y),C=a.getX(y+1),N=a.getX(y+2);r=tl(this,h,e,i,u,c,f,w,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=tl(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,P=v;y<P;y+=3){const w=y,C=y+1,N=y+2;r=tl(this,h,e,i,u,c,f,w,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const _=p,v=p+1,y=p+2;r=tl(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function C1(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;el.copy(a),el.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(el);return u<n.near||u>n.far?null:{distance:u,point:el.clone(),object:t}}function tl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ls),t.getVertexPosition(l,us),t.getVertexPosition(u,cs);const c=C1(t,e,n,i,ls,us,cs,Ja);if(c){r&&(Ka.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,u),c.uv=qn.getInterpolation(Ja,ls,us,cs,Ka,Za,Qa,new Qe)),s&&(Ka.fromBufferAttribute(s,a),Za.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,u),c.uv1=qn.getInterpolation(Ja,ls,us,cs,Ka,Za,Qa,new Qe)),o&&(Jm.fromBufferAttribute(o,a),eg.fromBufferAttribute(o,l),tg.fromBufferAttribute(o,u),c.normal=qn.getInterpolation(Ja,ls,us,cs,Jm,eg,tg,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new z,materialIndex:0};qn.getNormal(ls,us,cs,f.normal),c.face=f}return c}class io extends cr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jn(u,3)),this.setAttribute("normal",new Jn(c,3)),this.setAttribute("uv",new Jn(f,2));function g(x,p,h,_,v,y,P,w,C,N,T){const S=y/C,I=P/N,j=y/2,H=P/2,$=w/2,Y=C+1,W=N+1;let X=0,D=0;const K=new z;for(let J=0;J<W;J++){const re=J*I-H;for(let ye=0;ye<Y;ye++){const Fe=ye*S-j;K[x]=Fe*_,K[p]=re*v,K[h]=$,u.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[h]=w>0?1:-1,c.push(K.x,K.y,K.z),f.push(ye/C),f.push(1-J/N),X+=1}}for(let J=0;J<N;J++)for(let re=0;re<C;re++){const ye=d+re+Y*J,Fe=d+re+Y*(J+1),G=d+(re+1)+Y*(J+1),Q=d+(re+1)+Y*J;l.push(ye,Fe,Q),l.push(Fe,G,Q),D+=6}a.addGroup(m,D,T),m+=D,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function A1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _x(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const R1={clone:Zs,merge:Wt};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Nu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new z,ng=new Qe,ig=new Qe;class En extends xx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,ng,ig),n.subVectors(ig,ng)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,ds=1;class L1 extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(fs,ds,e,n);r.layers=this.layers,this.add(r);const s=new En(fs,ds,e,n);s.layers=this.layers,this.add(s);const o=new En(fs,ds,e,n);o.layers=this.layers,this.add(o);const a=new En(fs,ds,e,n);a.layers=this.layers,this.add(a);const l=new En(fs,ds,e,n);l.layers=this.layers,this.add(l);const u=new En(fs,ds,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yx extends sn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N1 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new io(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ji});s.uniforms.tEquirect.value=n;const o=new Bn(r,s),a=n.minFilter;return n.minFilter===br&&(n.minFilter=Fn),new L1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Bc=new z,D1=new z,I1=new He;class Er{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bc.subVectors(i,n).cross(D1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||I1.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Qh,nl=new z;class Sx{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,o=new Er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],h=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-m,y-h).normalize(),i[1].setComponents(l+s,d+u,p+m,y+h).normalize(),i[2].setComponents(l+o,d+c,p+g,y+_).normalize(),i[3].setComponents(l-o,d-c,p-g,y-_).normalize(),i[4].setComponents(l-a,d-f,p-x,y-v).normalize(),n===pi)i[5].setComponents(l+a,d+f,p+x,y+v).normalize();else if(n===nu)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ex(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function U1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let m=0,g=d.length;m<g;m++){const x=d[m];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Du extends cr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,m=[],g=[],x=[],p=[];for(let h=0;h<c;h++){const _=h*d-o;for(let v=0;v<u;v++){const y=v*f-s;g.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+u*h,y=_+u*(h+1),P=_+1+u*(h+1),w=_+1+u*h;m.push(v,y,w),m.push(y,P,w)}this.setIndex(m),this.setAttribute("position",new Jn(g,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}var O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
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
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
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
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sw=`#define PI 3.141592653589793
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
} // validated`,ow=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aw=`vec3 transformedNormal = objectNormal;
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
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",hw=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
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
}`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Aw=`uniform bool receiveShadow;
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
#endif`,Rw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dw=`PhysicalMaterial material;
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
#endif`,Iw=`struct PhysicalMaterial {
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
}`,Uw=`
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
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jw=`#if defined( USE_POINTS_UV )
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
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zw=`#ifdef USE_MORPHTARGETS
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
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rC=`#ifdef USE_NORMALMAP
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
#endif`,sC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_C=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yC=`float getShadowMask() {
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
}`,SC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EC=`#ifdef USE_SKINNING
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
#endif`,MC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,wC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PC=`#ifdef USE_TRANSMISSION
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
#endif`,bC=`#ifdef USE_TRANSMISSION
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
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OC=`uniform sampler2D t2D;
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`#include <common>
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
}`,VC=`#if DEPTH_PACKING == 3200
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
	#endif
}`,GC=`#define DISTANCE
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
}`,WC=`#define DISTANCE
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
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$C=`uniform float scale;
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
}`,YC=`uniform vec3 diffuse;
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
}`,qC=`#include <common>
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
}`,KC=`uniform vec3 diffuse;
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
}`,ZC=`#define LAMBERT
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
}`,QC=`#define LAMBERT
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
}`,JC=`#define MATCAP
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
}`,eA=`#define MATCAP
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
}`,tA=`#define NORMAL
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
}`,nA=`#define NORMAL
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
}`,iA=`#define PHONG
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
}`,rA=`#define PHONG
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
}`,sA=`#define STANDARD
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
}`,oA=`#define STANDARD
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
}`,aA=`#define TOON
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
}`,lA=`#define TOON
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
}`,uA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,dA=`uniform vec3 color;
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
}`,hA=`uniform float rotation;
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
}`,pA=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:O1,alphahash_pars_fragment:F1,alphamap_fragment:k1,alphamap_pars_fragment:B1,alphatest_fragment:z1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:G1,batching_pars_vertex:W1,batching_vertex:j1,begin_vertex:X1,beginnormal_vertex:$1,bsdfs:Y1,iridescence_fragment:q1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:ew,color_fragment:tw,color_pars_fragment:nw,color_pars_vertex:iw,color_vertex:rw,common:sw,cube_uv_reflection_fragment:ow,defaultnormal_vertex:aw,displacementmap_pars_vertex:lw,displacementmap_vertex:uw,emissivemap_fragment:cw,emissivemap_pars_fragment:fw,colorspace_fragment:dw,colorspace_pars_fragment:hw,envmap_fragment:pw,envmap_common_pars_fragment:mw,envmap_pars_fragment:gw,envmap_pars_vertex:vw,envmap_physical_pars_fragment:Rw,envmap_vertex:_w,fog_vertex:xw,fog_pars_vertex:yw,fog_fragment:Sw,fog_pars_fragment:Ew,gradientmap_pars_fragment:Mw,lightmap_pars_fragment:Tw,lights_lambert_fragment:ww,lights_lambert_pars_fragment:Cw,lights_pars_begin:Aw,lights_toon_fragment:Pw,lights_toon_pars_fragment:bw,lights_phong_fragment:Lw,lights_phong_pars_fragment:Nw,lights_physical_fragment:Dw,lights_physical_pars_fragment:Iw,lights_fragment_begin:Uw,lights_fragment_maps:Ow,lights_fragment_end:Fw,logdepthbuf_fragment:kw,logdepthbuf_pars_fragment:Bw,logdepthbuf_pars_vertex:zw,logdepthbuf_vertex:Hw,map_fragment:Vw,map_pars_fragment:Gw,map_particle_fragment:Ww,map_particle_pars_fragment:jw,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:$w,morphinstance_vertex:Yw,morphcolor_vertex:qw,morphnormal_vertex:Kw,morphtarget_pars_vertex:Zw,morphtarget_vertex:Qw,normal_fragment_begin:Jw,normal_fragment_maps:eC,normal_pars_fragment:tC,normal_pars_vertex:nC,normal_vertex:iC,normalmap_pars_fragment:rC,clearcoat_normal_fragment_begin:sC,clearcoat_normal_fragment_maps:oC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:lC,opaque_fragment:uC,packing:cC,premultiplied_alpha_fragment:fC,project_vertex:dC,dithering_fragment:hC,dithering_pars_fragment:pC,roughnessmap_fragment:mC,roughnessmap_pars_fragment:gC,shadowmap_pars_fragment:vC,shadowmap_pars_vertex:_C,shadowmap_vertex:xC,shadowmask_pars_fragment:yC,skinbase_vertex:SC,skinning_pars_vertex:EC,skinning_vertex:MC,skinnormal_vertex:TC,specularmap_fragment:wC,specularmap_pars_fragment:CC,tonemapping_fragment:AC,tonemapping_pars_fragment:RC,transmission_fragment:PC,transmission_pars_fragment:bC,uv_pars_fragment:LC,uv_pars_vertex:NC,uv_vertex:DC,worldpos_vertex:IC,background_vert:UC,background_frag:OC,backgroundCube_vert:FC,backgroundCube_frag:kC,cube_vert:BC,cube_frag:zC,depth_vert:HC,depth_frag:VC,distanceRGBA_vert:GC,distanceRGBA_frag:WC,equirect_vert:jC,equirect_frag:XC,linedashed_vert:$C,linedashed_frag:YC,meshbasic_vert:qC,meshbasic_frag:KC,meshlambert_vert:ZC,meshlambert_frag:QC,meshmatcap_vert:JC,meshmatcap_frag:eA,meshnormal_vert:tA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:rA,meshphysical_vert:sA,meshphysical_frag:oA,meshtoon_vert:aA,meshtoon_frag:lA,points_vert:uA,points_frag:cA,shadow_vert:fA,shadow_frag:dA,sprite_vert:hA,sprite_frag:pA},ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$n={basic:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Wt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Wt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Wt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Wt([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Wt([ce.lights,ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};$n.physical={uniforms:Wt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const il={r:0,b:0,g:0},vr=new Ti,mA=new wt;function gA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?h(a,l):y&&y.isColor&&(h(y,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===bu)?(c===void 0&&(c=new Bn(new io(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),vr.copy(v.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(vr)),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==rt,(f!==y||d!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Bn(new Du(2,2),new sr({name:"BackgroundMaterial",uniforms:Zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Je.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function h(_,v){_.getRGB(il,_x(t)),i.buffers.color.setClear(il.r,il.g,il.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:p}}function vA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,I,j,H,$){let Y=!1;const W=f(H,j,I);s!==W&&(s=W,u(s.object)),Y=m(S,H,j,$),Y&&g(S,H,j,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(S,I,j,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,I,j){const H=j.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Y=$[I.id];Y===void 0&&(Y={},$[I.id]=Y);let W=Y[H];return W===void 0&&(W=d(l()),Y[H]=W),W}function d(S){const I=[],j=[],H=[];for(let $=0;$<n;$++)I[$]=0,j[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,I,j,H){const $=s.attributes,Y=I.attributes;let W=0;const X=j.getAttributes();for(const D in X)if(X[D].location>=0){const J=$[D];let re=Y[D];if(re===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function g(S,I,j,H){const $={},Y=I.attributes;let W=0;const X=j.getAttributes();for(const D in X)if(X[D].location>=0){let J=Y[D];J===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),$[D]=re,W++}s.attributes=$,s.attributesNum=W,s.index=H}function x(){const S=s.newAttributes;for(let I=0,j=S.length;I<j;I++)S[I]=0}function p(S){h(S,0)}function h(S,I){const j=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;j[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),$[S]!==I&&(t.vertexAttribDivisor(S,I),$[S]=I)}function _(){const S=s.newAttributes,I=s.enabledAttributes;for(let j=0,H=I.length;j<H;j++)I[j]!==S[j]&&(t.disableVertexAttribArray(j),I[j]=0)}function v(S,I,j,H,$,Y,W){W===!0?t.vertexAttribIPointer(S,I,j,$,Y):t.vertexAttribPointer(S,I,j,H,$,Y)}function y(S,I,j,H){x();const $=H.attributes,Y=j.getAttributes(),W=I.defaultAttributeValues;for(const X in Y){const D=Y[X];if(D.location>=0){let K=$[X];if(K===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const J=K.normalized,re=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Fe=ye.buffer,G=ye.type,Q=ye.bytesPerElement,ue=G===t.INT||G===t.UNSIGNED_INT||K.gpuType===jh;if(K.isInterleavedBufferAttribute){const de=K.data,Le=de.stride,Ie=K.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)h(D.location+ke,de.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<D.locationSize;ke++)p(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ke=0;ke<D.locationSize;ke++)v(D.location+ke,re/D.locationSize,G,J,Le*Q,(Ie+re/D.locationSize*ke)*Q,ue)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<D.locationSize;de++)h(D.location+de,K.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<D.locationSize;de++)p(D.location+de);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let de=0;de<D.locationSize;de++)v(D.location+de,re/D.locationSize,G,J,re*Q,re/D.locationSize*de*Q,ue)}}else if(W!==void 0){const J=W[X];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}_()}function P(){N();for(const S in i){const I=i[S];for(const j in I){const H=I[j];for(const $ in H)c(H[$].object),delete H[$];delete I[j]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const j in I){const H=I[j];for(const $ in H)c(H[$].object),delete H[$];delete I[j]}delete i[S.id]}function C(S){for(const I in i){const j=i[I];if(j[S.id]===void 0)continue;const H=j[S.id];for(const $ in H)c(H[$].object),delete H[$];delete j[S.id]}}function N(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function _A(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];n.update(m,i,1)}function l(u,c,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=c[x];for(let x=0;x<d.length;x++)n.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Mi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!C)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,maxSamples:P}}function yA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Er,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let y=h.clippingState||null;l.value=y,y=c(g,d,v,m);for(let P=0;P!==v;++P)y[P]=n[P];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const h=m+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,y=m;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function SA(t){let e=new WeakMap;function n(o,a){return a===Zf?o.mapping=$s:a===Qf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zf||a===Qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new N1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class EA extends xx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,rg=[.125,.215,.35,.446,.526,.582],wr=20,zc=new EA,sg=new tt;let Hc=null,Vc=0,Gc=0,Wc=!1;const Mr=(1+Math.sqrt(5))/2,hs=1/Mr,og=[new z(-Mr,hs,0),new z(Mr,hs,0),new z(-hs,0,Mr),new z(hs,0,Mr),new z(0,Mr,-hs),new z(0,Mr,hs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ca,format:kn,colorSpace:ur,depthBuffer:!1},r=lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MA(s)),this._blurMaterial=TA(s,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,zc)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(sg),c.toneMapping=er,c.autoClear=!1;const m=new ru({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Bn(new io,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(sg),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;rl(r,_*v,h>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=og[(r-s-1)%og.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Bn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),x=s/g,p=isFinite(s)?1+Math.floor(c*x):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const h=[];let _=0;for(let C=0;C<wr;++C){const N=C/x,T=Math.exp(-N*N/2);h.push(T),C===0?_+=T:C<p&&(_+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Ps?r-v+Ps:0),w=4*(this._cubeSize-y);rl(n,P,w,3*y,2*y),l.setRenderTarget(n),l.render(f,zc)}}function MA(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ps?l=rg[o-t+Ps-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,x=3,p=2,h=1,_=new Float32Array(x*g*m),v=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,N=w>2?0:-1,T=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(T,x*g*w),v.set(d,p*g*w);const S=[w,w,w,w,w,w];y.set(S,h*g*w)}const P=new cr;P.setAttribute("position",new Qn(_,x)),P.setAttribute("uv",new Qn(v,p)),P.setAttribute("faceIndex",new Qn(y,h)),e.push(P),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lg(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TA(t,e,n){const i=new Float32Array(wr),r=new z(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ug(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cg(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function wA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Zf||l===Qf,c=l===$s||l===Ys;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ag(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new ag(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let v=0,y=_.length;v<y;v+=3){const P=_[v+0],w=_[v+1],C=_[v+2];d.push(P,w,w,C,C,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const P=v+0,w=v+1,C=v+2;d.push(P,w,w,C,C,P)}}else return;const p=new(cx(d)?vx:gx)(d,1);p.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function RA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function u(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,d*o,g),n.update(m,i,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];n.update(p,i,1)}function f(d,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)u(d[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let h=0;for(let _=0;_<g;_++)h+=m[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function PA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bA(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let P=a.attributes.position.count*y,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*w*4*f),N=new hx(C,P,w,f);N.type=hi,N.needsUpdate=!0;const T=y*4;for(let I=0;I<f;I++){const j=h[I],H=_[I],$=v[I],Y=P*w*4*I;for(let W=0;W<j.count;W++){const X=W*T;g===!0&&(r.fromBufferAttribute(j,W),C[Y+X+0]=r.x,C[Y+X+1]=r.y,C[Y+X+2]=r.z,C[Y+X+3]=0),x===!0&&(r.fromBufferAttribute(H,W),C[Y+X+4]=r.x,C[Y+X+5]=r.y,C[Y+X+6]=r.z,C[Y+X+7]=0),p===!0&&(r.fromBufferAttribute($,W),C[Y+X+8]=r.x,C[Y+X+9]=r.y,C[Y+X+10]=r.z,C[Y+X+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:N,size:new Qe(P,w)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function LA(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Mx extends sn{constructor(e,n,i,r,s,o,a,l,u,c=Fs){if(c!==Fs&&c!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fs&&(i=zr),i===void 0&&c===Ks&&(i=qs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tx=new sn,fg=new Mx(1,1),wx=new hx,Cx=new m1,Ax=new yx,dg=[],hg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dg[r];if(s===void 0&&(s=new Float32Array(r),dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Iu(t,e){let n=hg[e];n===void 0&&(n=new Int32Array(e),hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function OA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;gg.set(i),t.uniformMatrix2fv(this.addr,!1,gg),At(n,i)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;mg.set(i),t.uniformMatrix3fv(this.addr,!1,mg),At(n,i)}}function kA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;pg.set(i),t.uniformMatrix4fv(this.addr,!1,pg),At(n,i)}}function BA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function GA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function $A(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fg.compareFunction=ux,s=fg):s=Tx,n.setTexture2D(e||s,r)}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cx,r)}function qA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ax,r)}function KA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wx,r)}function ZA(t){switch(t){case 5126:return NA;case 35664:return DA;case 35665:return IA;case 35666:return UA;case 35674:return OA;case 35675:return FA;case 35676:return kA;case 5124:case 35670:return BA;case 35667:case 35671:return zA;case 35668:case 35672:return HA;case 35669:case 35673:return VA;case 5125:return GA;case 36294:return WA;case 36295:return jA;case 36296:return XA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return KA}}function QA(t,e){t.uniform1fv(this.addr,e)}function JA(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function eR(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function tR(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function nR(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iR(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rR(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sR(t,e){t.uniform1iv(this.addr,e)}function oR(t,e){t.uniform2iv(this.addr,e)}function aR(t,e){t.uniform3iv(this.addr,e)}function lR(t,e){t.uniform4iv(this.addr,e)}function uR(t,e){t.uniform1uiv(this.addr,e)}function cR(t,e){t.uniform2uiv(this.addr,e)}function fR(t,e){t.uniform3uiv(this.addr,e)}function dR(t,e){t.uniform4uiv(this.addr,e)}function hR(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tx,s[o])}function pR(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cx,s[o])}function mR(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ax,s[o])}function gR(t,e,n){const i=this.cache,r=e.length,s=Iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||wx,s[o])}function vR(t){switch(t){case 5126:return QA;case 35664:return JA;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return uR;case 36294:return cR;case 36295:return fR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class _R{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZA(n.type)}}class xR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vR(n.type)}}class yR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function vg(t,e){t.seq.push(e),t.map[e.id]=e}function SR(t,e,n){const i=t.name,r=i.length;for(jc.lastIndex=0;;){const s=jc.exec(i),o=jc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vg(n,u===void 0?new _R(a,t,e):new xR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new yR(a),vg(n,f)),n=f}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);SR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _g(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ER=37297;let MR=0;function TR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wR(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===tu&&n===eu?i="LinearDisplayP3ToLinearSRGB":e===eu&&n===tu&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case Lu:return[i,"LinearTransferOETF"];case Xn:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+TR(t.getShaderSource(e),o)}else return r}function CR(t,e){const n=wR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AR(t,e){let n;switch(e){case VT:n="Linear";break;case GT:n="Reinhard";break;case WT:n="OptimizedCineon";break;case jT:n="ACESFilmic";break;case $T:n="AgX";break;case YT:n="Neutral";break;case XT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function PR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(LR,DR)}const NR=new Map;function DR(t,e){let n=ze[e];if(n===void 0){const i=NR.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(t){return t.replace(IR,UR)}function UR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function FR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function BR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Z0:e="ENVMAP_BLENDING_MULTIPLY";break;case zT:e="ENVMAP_BLENDING_MIX";break;case HT:e="ENVMAP_BLENDING_ADD";break}return e}function zR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OR(n),u=FR(n),c=kR(n),f=BR(n),d=zR(n),m=RR(n),g=PR(s),x=r.createProgram();let p,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(p=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?ze.tonemapping_pars_fragment:"",n.toneMapping!==er?AR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,CR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=Rd(o),o=yg(o,n),o=Sg(o,n),a=Rd(a),a=yg(a,n),a=Sg(a,n),o=Eg(o),a=Eg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+p+o,y=_+h+a,P=_g(r,r.VERTEX_SHADER,v),w=_g(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,w);else{const X=xg(r,P,"vertex"),D=xg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+X+`
`+D)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||$==="")&&(W=!1);W&&(I.diagnostics={runnable:Y,programLog:j,vertexShader:{log:H,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(P),r.deleteShader(w),N=new Ml(r,x),T=bR(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,ER)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}let VR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WR(e),n.set(e,i)),i}}class WR{constructor(e){this.id=VR++,this.code=e,this.usedTimes=0}}function jR(t,e,n,i,r,s,o){const a=new px,l=new GR,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,S,I,j,H){const $=j.fog,Y=H.geometry,W=T.isMeshStandardMaterial?j.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||W),D=X&&X.mapping===bu?X.image.height:null,K=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const J=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=J!==void 0?J.length:0;let ye=0;Y.morphAttributes.position!==void 0&&(ye=1),Y.morphAttributes.normal!==void 0&&(ye=2),Y.morphAttributes.color!==void 0&&(ye=3);let Fe,G,Q,ue;if(K){const Ye=$n[K];Fe=Ye.vertexShader,G=Ye.fragmentShader}else Fe=T.vertexShader,G=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),ue=l.getFragmentShaderID(T);const de=t.getRenderTarget(),Le=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,ke=!!T.map,ot=!!T.matcap,b=!!X,at=!!T.aoMap,We=!!T.lightMap,Me=!!T.bumpMap,Se=!!T.normalMap,lt=!!T.displacementMap,Ne=!!T.emissiveMap,Oe=!!T.metalnessMap,R=!!T.roughnessMap,E=T.anisotropy>0,V=T.clearcoat>0,te=T.dispersion>0,ie=T.iridescence>0,ee=T.sheen>0,Te=T.transmission>0,fe=E&&!!T.anisotropyMap,ge=V&&!!T.clearcoatMap,Be=V&&!!T.clearcoatNormalMap,se=V&&!!T.clearcoatRoughnessMap,me=ie&&!!T.iridescenceMap,je=ie&&!!T.iridescenceThicknessMap,be=ee&&!!T.sheenColorMap,ve=ee&&!!T.sheenRoughnessMap,De=!!T.specularMap,Ve=!!T.specularColorMap,ct=!!T.specularIntensityMap,U=Te&&!!T.transmissionMap,oe=Te&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,le=T.alphaTest>0,Ae=!!T.alphaHash,Xe=!!T.extensions;let xt=er;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Nt={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:G,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ur,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:ot,envMap:b,envMapMode:b&&X.mapping,envMapCubeUVHeight:D,aoMap:at,lightMap:We,bumpMap:Me,normalMap:Se,displacementMap:d&&lt,emissiveMap:Ne,normalMapObjectSpace:Se&&T.normalMapType===JT,normalMapTangentSpace:Se&&T.normalMapType===QT,metalnessMap:Oe,roughnessMap:R,anisotropy:E,anisotropyMap:fe,clearcoat:V,clearcoatMap:ge,clearcoatNormalMap:Be,clearcoatRoughnessMap:se,dispersion:te,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:be,sheenRoughnessMap:ve,specularMap:De,specularColorMap:Ve,specularIntensityMap:ct,transmission:Te,transmissionMap:U,thicknessMap:oe,gradientMap:q,opaque:T.transparent===!1&&T.blending===Os&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:Ae,combine:T.combine,mapUv:ke&&x(T.map.channel),aoMapUv:at&&x(T.aoMap.channel),lightMapUv:We&&x(T.lightMap.channel),bumpMapUv:Me&&x(T.bumpMap.channel),normalMapUv:Se&&x(T.normalMap.channel),displacementMapUv:lt&&x(T.displacementMap.channel),emissiveMapUv:Ne&&x(T.emissiveMap.channel),metalnessMapUv:Oe&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:fe&&x(T.anisotropyMap.channel),clearcoatMapUv:ge&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:je&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(T.sheenRoughnessMap.channel),specularMapUv:De&&x(T.specularMap.channel),specularColorMapUv:Ve&&x(T.specularColorMap.channel),specularIntensityMapUv:ct&&x(T.specularIntensityMap.channel),transmissionMapUv:U&&x(T.transmissionMap.channel),thicknessMapUv:oe&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(ke||Z),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ci,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(_(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function y(T){const S=g[T.type];let I;if(S){const j=$n[S];I=R1.clone(j.uniforms)}else I=T.uniforms;return I}function P(T,S){let I;for(let j=0,H=c.length;j<H;j++){const $=c[j];if($.cacheKey===S){I=$,++I.usedTimes;break}}return I===void 0&&(I=new HR(t,S,T,s),c.push(I)),I}function w(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function C(T){l.remove(T)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:N}}function XR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function $R(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,g,x,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function a(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(f,d,m,g,x,p){const h=o(f,d,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||$R),i.length>1&&i.sort(d||Tg),r.length>1&&r.sort(d||Tg)}function c(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function YR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wg,t.set(i,[o])):r>=s.length?(o=new wg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function KR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZR=0;function QR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JR(t){const e=new qR,n=KR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new wt,o=new wt;function a(u){let c=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,_=0,v=0,y=0,P=0,w=0,C=0;u.sort(QR);for(let T=0,S=u.length;T<S;T++){const I=u[T],j=I.color,H=I.intensity,$=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=j.r*H,f+=j.g*H,d+=j.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,D=n.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=W,m++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(j).multiplyScalar(H),W.distance=$,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[x]=W;const X=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,X.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[x]=X.matrix,I.castShadow){const D=n.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=Y,y++}x++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(j).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=W,p++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const X=I.shadow,D=n.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[h]=W,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==_||N.numPointShadows!==v||N.numSpotShadows!==y||N.numSpotMaps!==P||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=_,N.numPointShadows=v,N.numSpotShadows=y,N.numSpotMaps=P,N.numLightProbes=C,i.version=ZR++)}function l(u,c){let f=0,d=0,m=0,g=0,x=0;const p=c.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const v=u[h];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Cg(t){const e=new JR(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cg(t),e.set(r,[a])):s>=o.length?(a=new Cg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class tP extends Nu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nP extends Nu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rP=`uniform sampler2D shadow_pass;
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
}`;function sP(t,e,n){let i=new Sx;const r=new Qe,s=new Qe,o=new bt,a=new tP({depthPacking:ZT}),l=new nP,u={},c=n.maxTextureSize,f={[rr]:rn,[rn]:rr,[ci]:ci},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:iP,fragmentShader:rP}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new cr;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K0;let h=this.type;this.render=function(w,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Ji),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=h!==oi&&this.type===oi,$=h===oi&&this.type!==oi;for(let Y=0,W=w.length;Y<W;Y++){const X=w[Y],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||H===!0||$===!0){const re=this.type!==oi?{minFilter:Tn,magFilter:Tn}:{};D.map!==null&&D.map.dispose(),D.map=new Hr(r.x,r.y,re),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let re=0;re<J;re++){const ye=D.getViewport(re);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),j.viewport(o),D.updateMatrices(X,re),i=D.getFrustum(),y(C,N,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&_(D,N),D.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(T,S,I)};function _(w,C){const N=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,N,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,N,m,x,null)}function v(w,C,N,T){let S=null;const I=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=S.uuid,H=C.uuid;let $=u[j];$===void 0&&($={},u[j]=$);let Y=$[H];Y===void 0&&(Y=S.clone(),$[H]=Y,C.addEventListener("dispose",P)),S=Y}if(S.visible=C.visible,S.wireframe=C.wireframe,T===oi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=t.properties.get(S);j.light=N}return S}function y(w,C,N,T,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===oi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const H=e.update(w),$=w.material;if(Array.isArray($)){const Y=H.groups;for(let W=0,X=Y.length;W<X;W++){const D=Y[W],K=$[D.materialIndex];if(K&&K.visible){const J=v(w,K,T,S);w.onBeforeShadow(t,w,C,N,H,J,D),t.renderBufferDirect(N,null,H,J,w,D),w.onAfterShadow(t,w,C,N,H,J,D)}}}else if($.visible){const Y=v(w,$,T,S);w.onBeforeShadow(t,w,C,N,H,Y,null),t.renderBufferDirect(N,null,H,Y,w,null),w.onAfterShadow(t,w,C,N,H,Y,null)}}const j=w.children;for(let H=0,$=j.length;H<$;H++)y(j[H],C,N,T,S)}function P(w){w.target.removeEventListener("dispose",P);for(const N in u){const T=u[N],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function oP(t){function e(){let U=!1;const oe=new bt;let q=null;const Z=new bt(0,0,0,0);return{setMask:function(le){q!==le&&!U&&(t.colorMask(le,le,le,le),q=le)},setLocked:function(le){U=le},setClear:function(le,Ae,Xe,xt,Nt){Nt===!0&&(le*=xt,Ae*=xt,Xe*=xt),oe.set(le,Ae,Xe,xt),Z.equals(oe)===!1&&(t.clearColor(le,Ae,Xe,xt),Z.copy(oe))},reset:function(){U=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,oe=null,q=null,Z=null;return{setTest:function(le){le?ue(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(le){oe!==le&&!U&&(t.depthMask(le),oe=le)},setFunc:function(le){if(q!==le){switch(le){case DT:t.depthFunc(t.NEVER);break;case IT:t.depthFunc(t.ALWAYS);break;case UT:t.depthFunc(t.LESS);break;case Ql:t.depthFunc(t.LEQUAL);break;case OT:t.depthFunc(t.EQUAL);break;case FT:t.depthFunc(t.GEQUAL);break;case kT:t.depthFunc(t.GREATER);break;case BT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=le}},setLocked:function(le){U=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){U=!1,oe=null,q=null,Z=null}}}function i(){let U=!1,oe=null,q=null,Z=null,le=null,Ae=null,Xe=null,xt=null,Nt=null;return{setTest:function(Ye){U||(Ye?ue(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ye){oe!==Ye&&!U&&(t.stencilMask(Ye),oe=Ye)},setFunc:function(Ye,ei,Gn){(q!==Ye||Z!==ei||le!==Gn)&&(t.stencilFunc(Ye,ei,Gn),q=Ye,Z=ei,le=Gn)},setOp:function(Ye,ei,Gn){(Ae!==Ye||Xe!==ei||xt!==Gn)&&(t.stencilOp(Ye,ei,Gn),Ae=Ye,Xe=ei,xt=Gn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Nt!==Ye&&(t.clearStencil(Ye),Nt=Ye)},reset:function(){U=!1,oe=null,q=null,Z=null,le=null,Ae=null,Xe=null,xt=null,Nt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,h=null,_=null,v=null,y=null,P=null,w=new tt(0,0,0),C=0,N=!1,T=null,S=null,I=null,j=null,H=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=W>=2);let D=null,K={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ye=new bt().fromArray(J),Fe=new bt().fromArray(re);function G(U,oe,q,Z){const le=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(U,Ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<q;Xe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(oe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Ae}const Q={};Q[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Ql),Me(!1),Se(Nm),ue(t.CULL_FACE),at(Ji);function ue(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function de(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Le(U,oe){return c[U]!==oe?(t.bindFramebuffer(U,oe),c[U]=oe,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=oe),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(U,oe){let q=d,Z=!1;if(U){q=f.get(oe),q===void 0&&(q=[],f.set(oe,q));const le=U.textures;if(q.length!==le.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,Xe=le.length;Ae<Xe;Ae++)q[Ae]=t.COLOR_ATTACHMENT0+Ae;q.length=le.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function ke(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const ot={[Tr]:t.FUNC_ADD,[gT]:t.FUNC_SUBTRACT,[vT]:t.FUNC_REVERSE_SUBTRACT};ot[_T]=t.MIN,ot[xT]=t.MAX;const b={[yT]:t.ZERO,[ST]:t.ONE,[ET]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[RT]:t.SRC_ALPHA_SATURATE,[CT]:t.DST_COLOR,[TT]:t.DST_ALPHA,[MT]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[AT]:t.ONE_MINUS_DST_COLOR,[wT]:t.ONE_MINUS_DST_ALPHA,[PT]:t.CONSTANT_COLOR,[bT]:t.ONE_MINUS_CONSTANT_COLOR,[LT]:t.CONSTANT_ALPHA,[NT]:t.ONE_MINUS_CONSTANT_ALPHA};function at(U,oe,q,Z,le,Ae,Xe,xt,Nt,Ye){if(U===Ji){g===!0&&(de(t.BLEND),g=!1);return}if(g===!1&&(ue(t.BLEND),g=!0),U!==mT){if(U!==x||Ye!==N){if((p!==Tr||v!==Tr)&&(t.blendEquation(t.FUNC_ADD),p=Tr,v=Tr),Ye)switch(U){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dm:t.blendFunc(t.ONE,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Um:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,_=null,y=null,P=null,w.set(0,0,0),C=0,x=U,N=Ye}return}le=le||oe,Ae=Ae||q,Xe=Xe||Z,(oe!==p||le!==v)&&(t.blendEquationSeparate(ot[oe],ot[le]),p=oe,v=le),(q!==h||Z!==_||Ae!==y||Xe!==P)&&(t.blendFuncSeparate(b[q],b[Z],b[Ae],b[Xe]),h=q,_=Z,y=Ae,P=Xe),(xt.equals(w)===!1||Nt!==C)&&(t.blendColor(xt.r,xt.g,xt.b,Nt),w.copy(xt),C=Nt),x=U,N=!1}function We(U,oe){U.side===ci?de(t.CULL_FACE):ue(t.CULL_FACE);let q=U.side===rn;oe&&(q=!q),Me(q),U.blending===Os&&U.transparent===!1?at(Ji):at(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Se(U){U!==dT?(ue(t.CULL_FACE),U!==S&&(U===Nm?t.cullFace(t.BACK):U===hT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),S=U}function lt(U){U!==I&&(Y&&t.lineWidth(U),I=U)}function Ne(U,oe,q){U?(ue(t.POLYGON_OFFSET_FILL),(j!==oe||H!==q)&&(t.polygonOffset(oe,q),j=oe,H=q)):de(t.POLYGON_OFFSET_FILL)}function Oe(U){U?ue(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+$-1),D!==U&&(t.activeTexture(U),D=U)}function E(U,oe,q){q===void 0&&(D===null?q=t.TEXTURE0+$-1:q=D);let Z=K[q];Z===void 0&&(Z={type:void 0,texture:void 0},K[q]=Z),(Z.type!==U||Z.texture!==oe)&&(D!==q&&(t.activeTexture(q),D=q),t.bindTexture(U,oe||Q[U]),Z.type=U,Z.texture=oe)}function V(){const U=K[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ye.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ye.copy(U))}function ve(U){Fe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function De(U,oe){let q=l.get(oe);q===void 0&&(q=new WeakMap,l.set(oe,q));let Z=q.get(U);Z===void 0&&(Z=t.getUniformBlockIndex(oe,U.name),q.set(U,Z))}function Ve(U,oe){const Z=l.get(oe).get(U);a.get(oe)!==Z&&(t.uniformBlockBinding(oe,Z,U.__bindingPointIndex),a.set(oe,Z))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,K={},c={},f=new WeakMap,d=[],m=null,g=!1,x=null,p=null,h=null,_=null,v=null,y=null,P=null,w=new tt(0,0,0),C=0,N=!1,T=null,S=null,I=null,j=null,H=null,ye.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:de,bindFramebuffer:Le,drawBuffers:Ie,useProgram:ke,setBlending:at,setMaterial:We,setFlipSided:Me,setCullFace:Se,setLineWidth:lt,setPolygonOffset:Ne,setScissorTest:Oe,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:me,texImage3D:je,updateUBOMapping:De,uniformBlockBinding:Ve,texStorage2D:Be,texStorage3D:se,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:be,viewport:ve,reset:ct}}function Ag(t,e,n,i){const r=aP(i);switch(n){case nx:return t*e;case rx:return t*e;case sx:return t*e*2;case ox:return t*e/r.components*r.byteLength;case Yh:return t*e/r.components*r.byteLength;case ax:return t*e*2/r.components*r.byteLength;case qh:return t*e*2/r.components*r.byteLength;case ix:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Kh:return t*e*4/r.components*r.byteLength;case _l:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nd:case rd:return Math.max(t,16)*Math.max(e,8)/4;case td:case id:return Math.max(t,8)*Math.max(e,8)/2;case sd:case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case El:case Ed:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case lx:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wd:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aP(t){switch(t){case Mi:case J0:return{byteLength:1,components:1};case ea:case ex:case ca:return{byteLength:2,components:1};case Xh:case $h:return{byteLength:2,components:4};case zr:case jh:case hi:return{byteLength:4,components:1};case tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function lP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,c=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):iu("canvas")}function x(R,E,V){let te=1;const ie=Oe(R);if((ie.width>V||ie.height>V)&&(te=V/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(te*ie.width),Te=Math.floor(te*ie.height);f===void 0&&(f=g(ee,Te));const fe=E?g(ee,Te):f;return fe.width=ee,fe.height=Te,fe.getContext("2d").drawImage(R,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Te+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Tn&&R.minFilter!==Fn}function h(R){t.generateMipmap(R)}function _(R,E,V,te,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),E===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Te=ie?Jl:Je.getTransfer(te);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(R,E){let V;return R?E===null||E===zr||E===qs?V=t.DEPTH24_STENCIL8:E===hi?V=t.DEPTH32F_STENCIL8:E===ea&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zr||E===qs?V=t.DEPTH_COMPONENT24:E===hi?V=t.DEPTH_COMPONENT32F:E===ea&&(V=t.DEPTH_COMPONENT16),V}function y(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=R.target;E.removeEventListener("dispose",P),C(E),E.isVideoTexture&&c.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),T(E)}function C(R){const E=i.get(R);if(E.__webglInit===void 0)return;const V=R.source,te=d.get(V);if(te){const ie=te[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(R),Object.keys(te).length===0&&d.delete(V)}i.remove(R)}function N(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const V=R.source,te=d.get(V);delete te[E.__cacheKey],o.memory.textures--}function T(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ie=0;ie<E.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)t.deleteFramebuffer(E.__webglFramebuffer[te]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let te=0,ie=V.length;te<ie;te++){const ee=i.get(V[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(R)}let S=0;function I(){S=0}function j(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function H(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const V=i.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(V,R,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Fe(V,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function W(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Fe(V,R,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function X(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){G(V,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const D={[Jf]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[ed]:t.MIRRORED_REPEAT},K={[Tn]:t.NEAREST,[qT]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},J={[e1]:t.NEVER,[o1]:t.ALWAYS,[t1]:t.LESS,[ux]:t.LEQUAL,[n1]:t.EQUAL,[s1]:t.GEQUAL,[i1]:t.GREATER,[r1]:t.NOTEQUAL};function re(R,E){if(E.type===hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===xc||E.magFilter===Fa||E.magFilter===br||E.minFilter===Fn||E.minFilter===xc||E.minFilter===Fa||E.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Fa&&E.minFilter!==br||E.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const te=E.source;let ie=d.get(te);ie===void 0&&(ie={},d.set(te,ie));const ee=H(E);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ee].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&N(E)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return V}function Fe(R,E,V){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const ie=ye(R,E),ee=E.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+V);const Te=i.get(ee);if(ee.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const fe=Je.getPrimaries(Je.workingColorSpace),ge=E.colorSpace===Hi?null:Je.getPrimaries(E.colorSpace),Be=E.colorSpace===Hi||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let se=x(E.image,!1,r.maxTextureSize);se=Ne(E,se);const me=s.convert(E.format,E.colorSpace),je=s.convert(E.type);let be=_(E.internalFormat,me,je,E.colorSpace,E.isVideoTexture);re(te,E);let ve;const De=E.mipmaps,Ve=E.isVideoTexture!==!0,ct=Te.__version===void 0||ie===!0,U=ee.dataReady,oe=y(E,se);if(E.isDepthTexture)be=v(E.format===Ks,E.type),ct&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,me,je,null));else if(E.isDataTexture)if(De.length>0){Ve&&ct&&n.texStorage2D(t.TEXTURE_2D,oe,be,De[0].width,De[0].height);for(let q=0,Z=De.length;q<Z;q++)ve=De[q],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,me,je,ve.data):n.texImage2D(t.TEXTURE_2D,q,be,ve.width,ve.height,0,me,je,ve.data);E.generateMipmaps=!1}else Ve?(ct&&n.texStorage2D(t.TEXTURE_2D,oe,be,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,me,je,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,me,je,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,be,De[0].width,De[0].height,se.depth);for(let q=0,Z=De.length;q<Z;q++)if(ve=De[q],E.format!==kn)if(me!==null)if(Ve){if(U)if(E.layerUpdates.size>0){const le=Ag(ve.width,ve.height,E.format,E.type);for(const Ae of E.layerUpdates){const Xe=ve.data.subarray(Ae*le/ve.data.BYTES_PER_ELEMENT,(Ae+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Ae,ve.width,ve.height,1,me,Xe,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,se.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,be,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,se.depth,me,je,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,be,ve.width,ve.height,se.depth,0,me,je,ve.data)}else{Ve&&ct&&n.texStorage2D(t.TEXTURE_2D,oe,be,De[0].width,De[0].height);for(let q=0,Z=De.length;q<Z;q++)ve=De[q],E.format!==kn?me!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,q,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,me,je,ve.data):n.texImage2D(t.TEXTURE_2D,q,be,ve.width,ve.height,0,me,je,ve.data)}else if(E.isDataArrayTexture)if(Ve){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,be,se.width,se.height,se.depth),U)if(E.layerUpdates.size>0){const q=Ag(se.width,se.height,E.format,E.type);for(const Z of E.layerUpdates){const le=se.data.subarray(Z*q/se.data.BYTES_PER_ELEMENT,(Z+1)*q/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,me,je,le)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,je,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,me,je,se.data);else if(E.isData3DTexture)Ve?(ct&&n.texStorage3D(t.TEXTURE_3D,oe,be,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,je,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,me,je,se.data);else if(E.isFramebufferTexture){if(ct)if(Ve)n.texStorage2D(t.TEXTURE_2D,oe,be,se.width,se.height);else{let q=se.width,Z=se.height;for(let le=0;le<oe;le++)n.texImage2D(t.TEXTURE_2D,le,be,q,Z,0,me,je,null),q>>=1,Z>>=1}}else if(De.length>0){if(Ve&&ct){const q=Oe(De[0]);n.texStorage2D(t.TEXTURE_2D,oe,be,q.width,q.height)}for(let q=0,Z=De.length;q<Z;q++)ve=De[q],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,me,je,ve):n.texImage2D(t.TEXTURE_2D,q,be,me,je,ve);E.generateMipmaps=!1}else if(Ve){if(ct){const q=Oe(se);n.texStorage2D(t.TEXTURE_2D,oe,be,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,je,se)}else n.texImage2D(t.TEXTURE_2D,0,be,me,je,se);p(E)&&h(te),Te.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function G(R,E,V){if(E.image.length!==6)return;const te=ye(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ee=i.get(ie);if(ie.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const Te=Je.getPrimaries(Je.workingColorSpace),fe=E.colorSpace===Hi?null:Je.getPrimaries(E.colorSpace),ge=E.colorSpace===Hi||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Be&&!se?me[Z]=x(E.image[Z],!0,r.maxCubemapSize):me[Z]=se?E.image[Z].image:E.image[Z],me[Z]=Ne(E,me[Z]);const je=me[0],be=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),De=_(E.internalFormat,be,ve,E.colorSpace),Ve=E.isVideoTexture!==!0,ct=ee.__version===void 0||te===!0,U=ie.dataReady;let oe=y(E,je);re(t.TEXTURE_CUBE_MAP,E);let q;if(Be){Ve&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,De,je.width,je.height);for(let Z=0;Z<6;Z++){q=me[Z].mipmaps;for(let le=0;le<q.length;le++){const Ae=q[le];E.format!==kn?be!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ae.width,Ae.height,be,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ae.width,Ae.height,be,ve,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,De,Ae.width,Ae.height,0,be,ve,Ae.data)}}}else{if(q=E.mipmaps,Ve&&ct){q.length>0&&oe++;const Z=Oe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,De,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,be,ve,me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,me[Z].width,me[Z].height,0,be,ve,me[Z].data);for(let le=0;le<q.length;le++){const Xe=q[le].image[Z].image;Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Xe.width,Xe.height,be,ve,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,De,Xe.width,Xe.height,0,be,ve,Xe.data)}}else{Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ve,me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,be,ve,me[Z]);for(let le=0;le<q.length;le++){const Ae=q[le];Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,be,ve,Ae.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,De,be,ve,Ae.image[Z])}}}p(E)&&h(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,V,te,ie,ee){const Te=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),ge=_(V.internalFormat,Te,fe,V.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>ee),me=Math.max(1,E.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,ge,se,me,E.depth,0,Te,fe,null):n.texImage2D(ie,ee,ge,se,me,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ie,i.get(V).__webglTexture,0,Me(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ie,i.get(V).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const te=E.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ee=v(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Me(E);Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const te=E.textures;for(let ie=0;ie<te.length;ie++){const ee=te[ie],Te=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),ge=_(ee.internalFormat,Te,fe,ee.colorSpace),Be=Me(E);V&&Se(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ge,E.width,E.height):Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,ie=Me(E);if(E.depthTexture.format===Fs)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===Ks)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Le(R){const E=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=t.createRenderbuffer(),ue(E.__webglDepthbuffer[te],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ue(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,E,V){const te=i.get(R);E!==void 0&&Q(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Le(R)}function ke(R){const E=R.texture,V=i.get(R),te=i.get(E);R.addEventListener("dispose",w);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)V.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,ge=ie.length;fe<ge;fe++){const Be=i.get(ie[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Se(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ge=ie[fe];V.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const Be=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),me=_(ge.internalFormat,Be,se,ge.colorSpace,R.isXRRenderTarget===!0),je=Me(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),re(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Q(V.__webglFramebuffer[fe][ge],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else Q(V.__webglFramebuffer[fe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,ge=ie.length;fe<ge;fe++){const Be=ie[fe],se=i.get(Be);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),re(t.TEXTURE_2D,Be),Q(V.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),p(Be)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),re(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Q(V.__webglFramebuffer[ge],R,E,t.COLOR_ATTACHMENT0,fe,ge);else Q(V.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,fe,0);p(E)&&h(fe),n.unbindTexture()}R.depthBuffer&&Le(R)}function ot(R){const E=R.textures;for(let V=0,te=E.length;V<te;V++){const ie=E[V];if(p(ie)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(ee,Te),h(ee),n.unbindTexture()}}}const b=[],at=[];function We(R){if(R.samples>0){if(Se(R)===!1){const E=R.textures,V=R.width,te=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),fe=E.length>1;if(fe)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const Be=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,ie,t.NEAREST),l===!0&&(b.length=0,at.length=0,b.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(b.push(ee),at.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,at)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,b))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const Be=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Me(R){return Math.min(r.maxSamples,R.samples)}function Se(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(R){const E=o.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function Ne(R,E){const V=R.colorSpace,te=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ur&&V!==Hi&&(Je.getTransfer(V)===rt?(te!==kn||ie!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Se}function uP(t,e){function n(i,r=Hi){let s;const o=Je.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Xh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===tx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===J0)return t.BYTE;if(i===ex)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===jh)return t.INT;if(i===zr)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===ca)return t.HALF_FLOAT;if(i===nx)return t.ALPHA;if(i===ix)return t.RGB;if(i===kn)return t.RGBA;if(i===rx)return t.LUMINANCE;if(i===sx)return t.LUMINANCE_ALPHA;if(i===Fs)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===ox)return t.RED;if(i===Yh)return t.RED_INTEGER;if(i===ax)return t.RG;if(i===qh)return t.RG_INTEGER;if(i===Kh)return t.RGBA_INTEGER;if(i===_l||i===xl||i===yl||i===Sl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===td||i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sd||i===od)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ld||i===ud||i===cd||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===md)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Ed||i===Md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===El)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lx||i===Td||i===wd||i===Cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class cP extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fP={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),h=this._getHandJoint(u,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hP=`
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

}`;class pP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sr({vertexShader:dP,fragmentShader:hP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mP extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,g=null;const x=new pP,p=n.getContextAttributes();let h=null,_=null;const v=[],y=[],P=new Qe;let w=null;const C=new En;C.layers.enable(1),C.viewport=new bt;const N=new En;N.layers.enable(2),N.viewport=new bt;const T=[C,N],S=new cP;S.layers.enable(1),S.layers.enable(2);let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=v[G];return Q===void 0&&(Q=new Xc,v[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=v[G];return Q===void 0&&(Q=new Xc,v[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=v[G];return Q===void 0&&(Q=new Xc,v[G]=Q),Q.getHandSpace()};function H(G){const Q=y.indexOf(G.inputSource);if(Q===-1)return;const ue=v[Q];ue!==void 0&&(ue.update(G.inputSource,G.frame,u||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<v.length;G++){const Q=y[G];Q!==null&&(y[G]=null,v[G].disconnect(Q))}I=null,j=null,x.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,_=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Hr(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=p.stencil?Ks:Fs,ue=p.stencil?qs:zr);const Le={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hr(d.textureWidth,d.textureHeight,{format:kn,type:Mi,depthTexture:new Mx(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(G){for(let Q=0;Q<G.removed.length;Q++){const ue=G.removed[Q],de=y.indexOf(ue);de>=0&&(y[de]=null,v[de].disconnect(ue))}for(let Q=0;Q<G.added.length;Q++){const ue=G.added[Q];let de=y.indexOf(ue);if(de===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=y.length){y.push(ue),de=Ie;break}else if(y[Ie]===null){y[Ie]=ue,de=Ie;break}if(de===-1)break}const Le=v[de];Le&&Le.connect(ue)}}const W=new z,X=new z;function D(G,Q,ue){W.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const de=W.distanceTo(X),Le=Q.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),ot=Le[14]/(Le[10]+1),b=(Le[9]+1)/Le[5],at=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],Me=(Ie[8]+1)/Ie[0],Se=ke*We,lt=ke*Me,Ne=de/(-We+Me),Oe=Ne*-We;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(Ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const R=ke+Ne,E=ot+Ne,V=Se-Oe,te=lt+(de-Oe),ie=b*ot/E*R,ee=at*ot/E*R;G.projectionMatrix.makePerspective(V,te,ie,ee,R,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),S.near=N.near=C.near=G.near,S.far=N.far=C.far=G.far,(I!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,j=S.far,C.near=I,C.far=j,N.near=I,N.far=j,C.updateProjectionMatrix(),N.updateProjectionMatrix(),G.updateProjectionMatrix());const Q=G.parent,ue=S.cameras;K(S,Q);for(let de=0;de<ue.length;de++)K(ue[de],Q);ue.length===2?D(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),J(G,S,Q)};function J(G,Q,ue){ue===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ad*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let re=null;function ye(G,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const ue=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let de=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Ie=0;Ie<ue.length;Ie++){const ke=ue[Ie];let ot=null;if(m!==null)ot=m.getViewport(ke);else{const at=f.getViewSubImage(d,ke);ot=at.viewport,Ie===0&&(e.setRenderTargetTextures(_,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(_))}let b=T[Ie];b===void 0&&(b=new En,b.layers.enable(Ie),b.viewport=new bt,T[Ie]=b),b.matrix.fromArray(ke.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(ke.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(ot.x,ot.y,ot.width,ot.height),Ie===0&&(S.matrix.copy(b.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(b)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ie=f.getDepthInformation(ue[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let ue=0;ue<v.length;ue++){const de=y[ue],Le=v[ue];de!==null&&Le!==void 0&&Le.update(de,Q,u||o)}re&&re(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Fe=new Ex;Fe.setAnimationLoop(ye),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}}const _r=new Ti,gP=new wt;function vP(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,_x(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,_,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,_,v):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===rn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===rn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h),v=_.envMap,y=_.envMapRotation;v&&(p.envMap.value=v,_r.copy(y),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.envMapRotation.value.setFromMatrix4(gP.makeRotationFromEuler(_r)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,_,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=v*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _P(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(g(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(_,P);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function c(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),P=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],y=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,C=y.length;w<C;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,S=N.length;T<S;T++){const I=N[T];if(m(I,w,T,P)===!0){const j=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let Y=0;Y<H.length;Y++){const W=H[Y],X=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,j+$,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,y,P){const w=_.value,C=v+"_"+y;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{const N=P[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return P[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(_){const v=_.uniforms;let y=0;const P=16;for(let C=0,N=v.length;C<N;C++){const T=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,I=T.length;S<I;S++){const j=T[S],H=Array.isArray(j.value)?j.value:[j.value];for(let $=0,Y=H.length;$<Y;$++){const W=H[$],X=x(W),D=y%P;D!==0&&P-D<X.boundary&&(y+=P-D),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=X.storage}}}const w=y%P;return w>0&&(y+=P-w),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class xP{constructor(e={}){const{canvas:n=l1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=er,this.toneMappingExposure=1;const v=this;let y=!1,P=0,w=0,C=null,N=-1,T=null;const S=new bt,I=new bt;let j=null;const H=new tt(0);let $=0,Y=n.width,W=n.height,X=1,D=null,K=null;const J=new bt(0,0,Y,W),re=new bt(0,0,Y,W);let ye=!1;const Fe=new Sx;let G=!1,Q=!1;const ue=new wt,de=new z,Le=new bt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return C===null?X:1}let b=i;function at(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wh}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",le,!1),b===null){const O="webgl2";if(b=at(O,M),b===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let We,Me,Se,lt,Ne,Oe,R,E,V,te,ie,ee,Te,fe,ge,Be,se,me,je,be,ve,De,Ve,ct;function U(){We=new CA(b),We.init(),De=new uP(b,We),Me=new xA(b,We,e,De),Se=new oP(b),lt=new PA(b),Ne=new XR,Oe=new lP(b,We,Se,Ne,Me,De,lt),R=new SA(v),E=new wA(v),V=new U1(b),Ve=new vA(b,V),te=new AA(b,V,lt,Ve),ie=new LA(b,te,V,lt),je=new bA(b,Me,Oe),Be=new yA(Ne),ee=new jR(v,R,E,We,Me,Ve,Be),Te=new vP(v,Ne),fe=new YR,ge=new eP(We),me=new gA(v,R,E,Se,ie,d,l),se=new sP(v,ie,Me),ct=new _P(b,lt,Me,Se),be=new _A(b,We,lt),ve=new RA(b,We,lt),lt.programs=ee.programs,v.capabilities=Me,v.extensions=We,v.properties=Ne,v.renderLists=fe,v.shadowMap=se,v.state=Se,v.info=lt}U();const oe=new mP(v,b);this.xr=oe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(Y,W,!1))},this.getSize=function(M){return M.set(Y,W)},this.setSize=function(M,O,k=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,W=O,n.width=Math.floor(M*X),n.height=Math.floor(O*X),k===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Y*X,W*X).floor()},this.setDrawingBufferSize=function(M,O,k){Y=M,W=O,X=k,n.width=Math.floor(M*k),n.height=Math.floor(O*k),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,O,k,B){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,O,k,B),Se.viewport(S.copy(J).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,O,k,B){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,O,k,B),Se.scissor(I.copy(re).multiplyScalar(X).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(M){Se.setScissorTest(ye=M)},this.setOpaqueSort=function(M){D=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(M=!0,O=!0,k=!0){let B=0;if(M){let F=!1;if(C!==null){const ae=C.texture.format;F=ae===Kh||ae===qh||ae===Yh}if(F){const ae=C.texture.type,he=ae===Mi||ae===zr||ae===ea||ae===qs||ae===Xh||ae===$h,_e=me.getClearColor(),xe=me.getClearAlpha(),Re=_e.r,Pe=_e.g,we=_e.b;he?(m[0]=Re,m[1]=Pe,m[2]=we,m[3]=xe,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=Re,g[1]=Pe,g[2]=we,g[3]=xe,b.clearBufferiv(b.COLOR,0,g))}else B|=b.COLOR_BUFFER_BIT}O&&(B|=b.DEPTH_BUFFER_BIT),k&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),ge.dispose(),Ne.dispose(),R.dispose(),E.dispose(),ie.dispose(),Ve.dispose(),ct.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Gn),oe.removeEventListener("sessionend",tp),dr.stop()};function q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const M=lt.autoReset,O=se.enabled,k=se.autoUpdate,B=se.needsUpdate,F=se.type;U(),lt.autoReset=M,se.enabled=O,se.autoUpdate=k,se.needsUpdate=B,se.type=F}function le(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){const O=M.target;O.removeEventListener("dispose",Ae),Xe(O)}function Xe(M){xt(M),Ne.remove(M)}function xt(M){const O=Ne.get(M).programs;O!==void 0&&(O.forEach(function(k){ee.releaseProgram(k)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,k,B,F,ae){O===null&&(O=Ie);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=zx(M,O,k,B,F);Se.setMaterial(B,he);let xe=k.index,Re=1;if(B.wireframe===!0){if(xe=te.getWireframeAttribute(k),xe===void 0)return;Re=2}const Pe=k.drawRange,we=k.attributes.position;let qe=Pe.start*Re,pt=(Pe.start+Pe.count)*Re;ae!==null&&(qe=Math.max(qe,ae.start*Re),pt=Math.min(pt,(ae.start+ae.count)*Re)),xe!==null?(qe=Math.max(qe,0),pt=Math.min(pt,xe.count)):we!=null&&(qe=Math.max(qe,0),pt=Math.min(pt,we.count));const mt=pt-qe;if(mt<0||mt===1/0)return;Ve.setup(F,B,_e,k,xe);let on,Ke=be;if(xe!==null&&(on=V.get(xe),Ke=ve,Ke.setIndex(on)),F.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*ot()),Ke.setMode(b.LINES)):Ke.setMode(b.TRIANGLES);else if(F.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*ot()),F.isLineSegments?Ke.setMode(b.LINES):F.isLineLoop?Ke.setMode(b.LINE_LOOP):Ke.setMode(b.LINE_STRIP)}else F.isPoints?Ke.setMode(b.POINTS):F.isSprite&&Ke.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,Dt=F._multiDrawCounts,Ze=F._multiDrawCount,Rn=xe?V.get(xe).bytesPerElement:1,Xr=Ne.get(B).currentProgram.getUniforms();for(let an=0;an<Ze;an++)Xr.setValue(b,"_gl_DrawID",an),Ke.render(Ee[an]/Rn,Dt[an])}else if(F.isInstancedMesh)Ke.renderInstances(qe,mt,F.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Dt=Math.min(k.instanceCount,Ee);Ke.renderInstances(qe,mt,Dt)}else Ke.render(qe,mt)};function Nt(M,O,k){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,va(M,O,k),M.side=rr,M.needsUpdate=!0,va(M,O,k),M.side=ci):va(M,O,k)}this.compile=function(M,O,k=null){k===null&&(k=M),p=ge.get(k),p.init(O),_.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const B=new Set;return M.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const _e=ae[he];Nt(_e,k,F),B.add(_e)}else Nt(ae,k,F),B.add(ae)}),_.pop(),p=null,B},this.compileAsync=function(M,O,k=null){const B=this.compile(M,O,k);return new Promise(F=>{function ae(){if(B.forEach(function(he){Ne.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){F(M);return}setTimeout(ae,10)}We.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ye=null;function ei(M){Ye&&Ye(M)}function Gn(){dr.stop()}function tp(){dr.start()}const dr=new Ex;dr.setAnimationLoop(ei),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(M){Ye=M,oe.setAnimationLoop(M),M===null?dr.stop():dr.start()},oe.addEventListener("sessionstart",Gn),oe.addEventListener("sessionend",tp),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,C),p=ge.get(M,_.length),p.init(O),_.push(p),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,G=Be.init(this.clippingPlanes,Q),x=fe.get(M,h.length),x.init(),h.push(x),oe.enabled===!0&&oe.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&ku(ae,O,-1/0,v.sortObjects)}ku(M,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,K),ke=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ke&&me.addToRenderList(x,M),this.info.render.frame++,G===!0&&Be.beginShadows();const k=p.state.shadowsArray;se.render(k,M,O),G===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,F=x.transmissive;if(p.setupLights(),O.isArrayCamera){const ae=O.cameras;if(F.length>0)for(let he=0,_e=ae.length;he<_e;he++){const xe=ae[he];ip(B,F,M,xe)}ke&&me.render(M);for(let he=0,_e=ae.length;he<_e;he++){const xe=ae[he];np(x,M,xe,xe.viewport)}}else F.length>0&&ip(B,F,M,O),ke&&me.render(M),np(x,M,O);C!==null&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(v,M,O),Ve.resetDefaultState(),N=-1,T=null,_.pop(),_.length>0?(p=_[_.length-1],G===!0&&Be.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ku(M,O,k,B){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Fe.intersectsSprite(M)){B&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);const he=ie.update(M),_e=M.material;_e.visible&&x.push(M,he,_e,k,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Fe.intersectsObject(M))){const he=ie.update(M),_e=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(_e)){const xe=he.groups;for(let Re=0,Pe=xe.length;Re<Pe;Re++){const we=xe[Re],qe=_e[we.materialIndex];qe&&qe.visible&&x.push(M,he,qe,k,Le.z,we)}}else _e.visible&&x.push(M,he,_e,k,Le.z,null)}}const ae=M.children;for(let he=0,_e=ae.length;he<_e;he++)ku(ae[he],O,k,B)}function np(M,O,k,B){const F=M.opaque,ae=M.transmissive,he=M.transparent;p.setupLightsView(k),G===!0&&Be.setGlobalState(v.clippingPlanes,k),B&&Se.viewport(S.copy(B)),F.length>0&&ga(F,O,k),ae.length>0&&ga(ae,O,k),he.length>0&&ga(he,O,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ip(M,O,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Hr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ca:Mi,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=p.state.transmissionRenderTarget[B.id],he=B.viewport||S;ae.setSize(he.z,he.w);const _e=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(H),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),ke?me.render(k):v.clear();const xe=v.toneMapping;v.toneMapping=er;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),G===!0&&Be.setGlobalState(v.clippingPlanes,B),ga(M,k,B),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae),We.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,qe=O.length;we<qe;we++){const pt=O[we],mt=pt.object,on=pt.geometry,Ke=pt.material,Ee=pt.group;if(Ke.side===ci&&mt.layers.test(B.layers)){const Dt=Ke.side;Ke.side=rn,Ke.needsUpdate=!0,rp(mt,k,B,on,Ke,Ee),Ke.side=Dt,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae))}v.setRenderTarget(_e),v.setClearColor(H,$),Re!==void 0&&(B.viewport=Re),v.toneMapping=xe}function ga(M,O,k){const B=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ae=M.length;F<ae;F++){const he=M[F],_e=he.object,xe=he.geometry,Re=B===null?he.material:B,Pe=he.group;_e.layers.test(k.layers)&&rp(_e,O,k,xe,Re,Pe)}}function rp(M,O,k,B,F,ae){M.onBeforeRender(v,O,k,B,F,ae),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.transparent===!0&&F.side===ci&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,v.renderBufferDirect(k,O,B,F,M,ae),F.side=rr,F.needsUpdate=!0,v.renderBufferDirect(k,O,B,F,M,ae),F.side=ci):v.renderBufferDirect(k,O,B,F,M,ae),M.onAfterRender(v,O,k,B,F,ae)}function va(M,O,k){O.isScene!==!0&&(O=Ie);const B=Ne.get(M),F=p.state.lights,ae=p.state.shadowsArray,he=F.state.version,_e=ee.getParameters(M,F.state,ae,O,k),xe=ee.getProgramCacheKey(_e);let Re=B.programs;B.environment=M.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(M.isMeshStandardMaterial?E:R).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Ae),Re=new Map,B.programs=Re);let Pe=Re.get(xe);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===he)return op(M,_e),Pe}else _e.uniforms=ee.getUniforms(M),M.onBeforeCompile(_e,v),Pe=ee.acquireProgram(_e,xe),Re.set(xe,Pe),B.uniforms=_e.uniforms;const we=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Be.uniform),op(M,_e),B.needsLights=Vx(M),B.lightsStateVersion=he,B.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function sp(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Ml.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function op(M,O){const k=Ne.get(M);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function zx(M,O,k,B,F){O.isScene!==!0&&(O=Ie),Oe.resetTextureUnits();const ae=O.fog,he=B.isMeshStandardMaterial?O.environment:null,_e=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ur,xe=(B.isMeshStandardMaterial?E:R).get(B.envMap||he),Re=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,pt=!!k.morphAttributes.color;let mt=er;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=v.toneMapping);const on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ke=on!==void 0?on.length:0,Ee=Ne.get(B),Dt=p.state.lights;if(G===!0&&(Q===!0||M!==T)){const _n=M===T&&B.id===N;Be.setState(B,M,_n)}let Ze=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Dt.state.version||Ee.outputColorSpace!==_e||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==xe||B.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Be.numPlanes||Ee.numIntersection!==Be.numIntersection)||Ee.vertexAlphas!==Re||Ee.vertexTangents!==Pe||Ee.morphTargets!==we||Ee.morphNormals!==qe||Ee.morphColors!==pt||Ee.toneMapping!==mt||Ee.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ee.__version=B.version);let Rn=Ee.currentProgram;Ze===!0&&(Rn=va(B,O,F));let Xr=!1,an=!1,Bu=!1;const yt=Rn.getUniforms(),Ai=Ee.uniforms;if(Se.useProgram(Rn.program)&&(Xr=!0,an=!0,Bu=!0),B.id!==N&&(N=B.id,an=!0),Xr||T!==M){yt.setValue(b,"projectionMatrix",M.projectionMatrix),yt.setValue(b,"viewMatrix",M.matrixWorldInverse);const _n=yt.map.cameraPosition;_n!==void 0&&_n.setValue(b,de.setFromMatrixPosition(M.matrixWorld)),Me.logarithmicDepthBuffer&&yt.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&yt.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,an=!0,Bu=!0)}if(F.isSkinnedMesh){yt.setOptional(b,F,"bindMatrix"),yt.setOptional(b,F,"bindMatrixInverse");const _n=F.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),yt.setValue(b,"boneTexture",_n.boneTexture,Oe))}F.isBatchedMesh&&(yt.setOptional(b,F,"batchingTexture"),yt.setValue(b,"batchingTexture",F._matricesTexture,Oe),yt.setOptional(b,F,"batchingIdTexture"),yt.setValue(b,"batchingIdTexture",F._indirectTexture,Oe),yt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(b,"batchingColorTexture",F._colorsTexture,Oe));const zu=k.morphAttributes;if((zu.position!==void 0||zu.normal!==void 0||zu.color!==void 0)&&je.update(F,k,Rn),(an||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,yt.setValue(b,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ai.envMap.value=xe,Ai.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(Ai.envMapIntensity.value=O.environmentIntensity),an&&(yt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&Hx(Ai,Bu),ae&&B.fog===!0&&Te.refreshFogUniforms(Ai,ae),Te.refreshMaterialUniforms(Ai,B,X,W,p.state.transmissionRenderTarget[M.id]),Ml.upload(b,sp(Ee),Ai,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ml.upload(b,sp(Ee),Ai,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&yt.setValue(b,"center",F.center),yt.setValue(b,"modelViewMatrix",F.modelViewMatrix),yt.setValue(b,"normalMatrix",F.normalMatrix),yt.setValue(b,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const _n=B.uniformsGroups;for(let Hu=0,Gx=_n.length;Hu<Gx;Hu++){const ap=_n[Hu];ct.update(ap,Rn),ct.bind(ap,Rn)}}return Rn}function Hx(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Vx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,O,k){Ne.get(M.texture).__webglTexture=O,Ne.get(M.depthTexture).__webglTexture=k;const B=Ne.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const k=Ne.get(M);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,k=0){C=M,P=O,w=k;let B=!0,F=null,ae=!1,he=!1;if(M){const xe=Ne.get(M);xe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(b.FRAMEBUFFER,null),B=!1):xe.__webglFramebuffer===void 0?Oe.setupRenderTarget(M):xe.__hasExternalTextures&&Oe.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Pe=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?F=Pe[O][k]:F=Pe[O],ae=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?F=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[k]:F=Pe,S.copy(M.viewport),I.copy(M.scissor),j=M.scissorTest}else S.copy(J).multiplyScalar(X).floor(),I.copy(re).multiplyScalar(X).floor(),j=ye;if(Se.bindFramebuffer(b.FRAMEBUFFER,F)&&B&&Se.drawBuffers(M,F),Se.viewport(S),Se.scissor(I),Se.setScissorTest(j),ae){const xe=Ne.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,k)}else if(he){const xe=Ne.get(M.texture),Re=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Re)}N=-1},this.readRenderTargetPixels=function(M,O,k,B,F,ae,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Se.bindFramebuffer(b.FRAMEBUFFER,_e);try{const xe=M.texture,Re=xe.format,Pe=xe.type;if(!Me.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-B&&k>=0&&k<=M.height-F&&b.readPixels(O,k,B,F,De.convert(Re),De.convert(Pe),ae)}finally{const xe=C!==null?Ne.get(C).__webglFramebuffer:null;Se.bindFramebuffer(b.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,O,k,B,F,ae,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Se.bindFramebuffer(b.FRAMEBUFFER,_e);try{const xe=M.texture,Re=xe.format,Pe=xe.type;if(!Me.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-B&&k>=0&&k<=M.height-F){const we=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,we),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),b.readPixels(O,k,B,F,De.convert(Re),De.convert(Pe),0),b.flush();const qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await u1(b,qe,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,we),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae)}finally{b.deleteBuffer(we),b.deleteSync(qe)}return ae}}finally{const xe=C!==null?Ne.get(C).__webglFramebuffer:null;Se.bindFramebuffer(b.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(M,O=null,k=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-k),F=Math.floor(M.image.width*B),ae=Math.floor(M.image.height*B),he=O!==null?O.x:0,_e=O!==null?O.y:0;Oe.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,he,_e,F,ae),Se.unbindTexture()},this.copyTextureToTexture=function(M,O,k=null,B=null,F=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],O=arguments[2],F=arguments[3]||0,k=null);let ae,he,_e,xe,Re,Pe;k!==null?(ae=k.max.x-k.min.x,he=k.max.y-k.min.y,_e=k.min.x,xe=k.min.y):(ae=M.image.width,he=M.image.height,_e=0,xe=0),B!==null?(Re=B.x,Pe=B.y):(Re=0,Pe=0);const we=De.convert(O.format),qe=De.convert(O.type);Oe.setTexture2D(O,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const pt=b.getParameter(b.UNPACK_ROW_LENGTH),mt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),on=b.getParameter(b.UNPACK_SKIP_PIXELS),Ke=b.getParameter(b.UNPACK_SKIP_ROWS),Ee=b.getParameter(b.UNPACK_SKIP_IMAGES),Dt=M.isCompressedTexture?M.mipmaps[F]:M.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Dt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Dt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,_e),b.pixelStorei(b.UNPACK_SKIP_ROWS,xe),M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Re,Pe,ae,he,we,qe,Dt.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Re,Pe,Dt.width,Dt.height,we,Dt.data):b.texSubImage2D(b.TEXTURE_2D,F,Re,Pe,ae,he,we,qe,Dt),b.pixelStorei(b.UNPACK_ROW_LENGTH,pt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,on),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ke),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee),F===0&&O.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,O,k=null,B=null,F=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,M=arguments[2],O=arguments[3],F=arguments[4]||0);let ae,he,_e,xe,Re,Pe,we,qe,pt;const mt=M.isCompressedTexture?M.mipmaps[F]:M.image;k!==null?(ae=k.max.x-k.min.x,he=k.max.y-k.min.y,_e=k.max.z-k.min.z,xe=k.min.x,Re=k.min.y,Pe=k.min.z):(ae=mt.width,he=mt.height,_e=mt.depth,xe=0,Re=0,Pe=0),B!==null?(we=B.x,qe=B.y,pt=B.z):(we=0,qe=0,pt=0);const on=De.convert(O.format),Ke=De.convert(O.type);let Ee;if(O.isData3DTexture)Oe.setTexture3D(O,0),Ee=b.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Oe.setTexture2DArray(O,0),Ee=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const Dt=b.getParameter(b.UNPACK_ROW_LENGTH),Ze=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Rn=b.getParameter(b.UNPACK_SKIP_PIXELS),Xr=b.getParameter(b.UNPACK_SKIP_ROWS),an=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,mt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pe),M.isDataTexture||M.isData3DTexture?b.texSubImage3D(Ee,F,we,qe,pt,ae,he,_e,on,Ke,mt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Ee,F,we,qe,pt,ae,he,_e,on,mt.data):b.texSubImage3D(Ee,F,we,qe,pt,ae,he,_e,on,Ke,mt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Dt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ze),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Rn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,an),F===0&&O.generateMipmaps&&b.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(M){Ne.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){P=0,w=0,C=null,Se.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Lu?"display-p3":"srgb"}}class yP extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ep extends cr{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new z,f=new z,d=new z;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const x=g/r*s,p=m/i*Math.PI*2;f.x=(e+n*Math.cos(p))*Math.cos(x),f.y=(e+n*Math.cos(p))*Math.sin(x),f.z=n*Math.sin(p),a.push(f.x,f.y,f.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),d.subVectors(f,c).normalize(),l.push(d.x,d.y,d.z),u.push(g/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,_=(r+1)*m+g;o.push(x,p,_),o.push(p,h,_)}this.setIndex(o),this.setAttribute("position",new Jn(a,3)),this.setAttribute("normal",new Jn(l,3)),this.setAttribute("uv",new Jn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);const SP=()=>{const t=A.useRef(null);return A.useEffect(()=>{const e=new yP,n=new En(75,window.innerWidth/window.innerHeight,.1,1e3),i=new xP({antialias:!0});i.setClearColor("#ffffff"),i.setSize(window.innerWidth,window.innerHeight),i.domElement.style.width="100%",i.domElement.style.height="100%",i.domElement.style.display="block",t.current.appendChild(i.domElement);const r=new ep(3,1.5,16,100),s=new ru({color:940751,wireframe:!0}),o=new Bn(r,s);e.add(o);const a=new io,l=new ru({color:65280,wireframe:!0}),u=new Bn(a,l);e.add(u),n.position.z=5;let c=1;const f=()=>{requestAnimationFrame(f),u.rotation.x+=.01,u.rotation.y+=.01,o.rotation.z+=.001,o.rotation.x+=.001,i.render(e,n),u.rotation.x+=.01,u.rotation.y+=.01,u.position.x+=.003*c,u.position.x>=.7?c=-1:u.position.x<=-.7&&(c=1)};f();const d=()=>{const m=window.innerWidth,g=window.innerHeight;n.aspect=m/g,n.updateProjectionMatrix(),i.setSize(m,g)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d),t.current&&t.current.removeChild(i.domElement),i.dispose()}},[]),L.jsx("div",{ref:t,style:{width:"100%",height:"100%",overflow:"hidden"}})};function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pd.apply(this,arguments)}var EP={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},MP=new(function(){function t(){}var e=t.prototype;return e.load=function(n,i,r){if(n.el=typeof r=="string"?document.querySelector(r):r,n.options=Pd({},EP,i),n.isInput=n.el.tagName.toLowerCase()==="input",n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map(function(u){return u.trim()}),n.stringsElement=typeof n.options.stringsElement=="string"?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(n.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)n.strings.push(s[a].innerHTML.trim())}for(var l in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[l]=l;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},e.getCurrentElContent=function(n){return n.attr?n.el.getAttribute(n.attr):n.isInput?n.el.value:n.contentType==="html"?n.el.innerHTML:n.el.textContent},e.appendCursorAnimationCss=function(n){var i="data-typed-js-cursor-css";if(n.showCursor&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(n){var i="data-typed-fadeout-js-css";if(n.fadeOut&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},t}()),Rg=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";n.substring(i+1).charAt(0)!==o&&!(1+ ++i>n.length););i++}return i},e.backSpaceHtmlChars=function(n,i,r){if(r.contentType!=="html")return i;var s=n.substring(i).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";n.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},t}()),TP=function(){function t(n,i){MP.load(this,i,n),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(n){n===void 0&&(n=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,n&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.strPos===0?n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos):n.backspace(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)},e.typewrite=function(n,i){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=Rg.typeHtmlChars(n,i,r);var a=0,l=n.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),n=n.substring(0,i)+n.substring(i+u),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;n.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>n.length)););var c=n.substring(0,i),f=n.substring(c.length+1,i+o),d=n.substring(i+o+1);n=c+f+d,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i>=n.length?r.doneTyping(n,i):r.keepTyping(n,i,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(n,i,!0)},e.keepTyping=function(n,i,r){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=n.substring(0,i+=r);this.replaceText(s),this.typewrite(n,i)},e.doneTyping=function(n,i){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(n,i)},this.backDelay))},e.backspace=function(n,i){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=Rg.backSpaceHtmlChars(n,i,r);var o=n.substring(0,i);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&o===a.substring(0,i)?i:0}i>r.stopNum?(i--,r.backspace(n,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},s)}else this.setPauseStatus(n,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(n,i,r){this.pause.typewrite=r,this.pause.curString=n,this.pause.curStrPos=i},e.toggleBlinking=function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(n){return Math.round(Math.random()*n/2)+n},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var n=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){n.arrayPos++,n.replaceText(""),n.strings.length>n.arrayPos?n.typewrite(n.strings[n.sequence[n.arrayPos]],0):(n.typewrite(n.strings[0],0),n.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:this.contentType==="html"?this.el.innerHTML=n:this.el.textContent=n},e.bindFocusEvents=function(){var n=this;this.isInput&&(this.el.addEventListener("focus",function(i){n.stop()}),this.el.addEventListener("blur",function(i){n.el.value&&n.el.value.length!==0||n.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const wP=A.memo(({style:t,className:e,typedRef:n,parseRef:i,stopped:r,children:s,startWhenVisible:o,...a})=>{const l=A.useRef(null),u=A.useMemo(()=>{var f;return[...Object.values(a).filter(d=>typeof d=="boolean"||typeof d=="number"||typeof d=="string"),(f=a.strings)==null?void 0:f.join(",")]},[a]);A.useEffect(()=>{const f=i&&i(l)||l.current,d=new TP(f,{...a});if((r||o)&&(d==null||d.stop()),o){const m=new IntersectionObserver(([g])=>{g.isIntersecting&&(d==null||d.start(),m.disconnect())});m.observe(f)}return n&&d&&n(d),()=>{d.destroy()}},u);const c=s?Qt.cloneElement(s,{ref:l}):Qt.createElement("span",{style:t,ref:l});return Qt.createElement("span",{style:t,className:e,"data-testid":"react-typed"},c)}),CP=()=>L.jsxs("div",{style:{marginTop:"56px"},children:[L.jsx("h1",{children:"My name is Alan Zhong."}),L.jsxs("h2",{children:["I am a"," ",L.jsx(wP,{strings:["Software Engineer","Machine Learning Enthusiast","Soccer Player","Musician"],typeSpeed:70,backSpeed:50,loop:!0})]}),L.jsx(SP,{})]}),AP=({addBook:t})=>{const[e,n]=A.useState(""),[i,r]=A.useState(""),s=o=>{o.preventDefault(),t({name:e,totalPages:parseInt(i),pagesRead:0})};return L.jsx(ms,{style:{padding:"5px"},children:L.jsxs(Ut,{onSubmit:s,children:[L.jsxs(Ut.Group,{controlId:"formBookName",children:[L.jsx(Ut.Label,{children:"Book Name"}),L.jsx(Ut.Control,{type:"text",placeholder:"Enter book name",value:e,onChange:o=>n(o.target.value)})]}),L.jsxs(Ut.Group,{controlId:"formTotalPages",children:[L.jsx(Ut.Label,{children:"Total Pages"}),L.jsx(Ut.Control,{type:"number",placeholder:"Enter total pages",value:i,onChange:o=>r(o.target.value)})]}),L.jsx("br",{}),L.jsx(Xs,{variant:"primary",type:"submit",children:"Add Book"})]})})},RP=({book:t,updatePagesRead:e,deleteBook:n})=>{const[i,r]=A.useState(""),s=l=>{l.preventDefault(),i&&(e(t.name,parseInt(i)),r(""))},o=()=>{n(t.name)},a=t.pagesRead/t.totalPages*100;return L.jsx(ms,{children:L.jsxs(ms.Body,{children:[L.jsx(ms.Title,{children:t.name}),L.jsxs(ms.Text,{children:["Total Pages: ",t.totalPages]}),L.jsxs(ms.Text,{children:["Pages Read: ",t.pagesRead]}),L.jsx(Y0,{now:a,label:`${Math.round(a)}%`}),L.jsxs(Ut,{onSubmit:s,children:[L.jsx(Ut.Group,{controlId:"formPagesRead",children:L.jsx(Ut.Control,{type:"number",placeholder:"Enter pages read",value:i,onChange:l=>r(l.target.value)})}),L.jsx(Xs,{variant:"primary",type:"submit",children:"Update Progress"}),L.jsx(Xs,{variant:"danger",onClick:o,children:"Delete"})]})]})})},PP=()=>{const[t,e]=A.useState(()=>{try{const s=localStorage.getItem("books");return s?JSON.parse(s):[]}catch(s){return console.error("Error loading from localStorage:",s),[]}}),n=s=>{e([...t,s])},i=s=>{e(t.filter(o=>o.name!==s))},r=(s,o)=>{e(t.map(a=>a.name===s?{...a,pagesRead:a.pagesRead+o}:a))};return A.useEffect(()=>{try{localStorage.setItem("books",JSON.stringify(t))}catch(s){console.error("Error saving to localStorage:",s)}},[t]),L.jsx(L.Fragment,{children:L.jsxs(kr,{children:[L.jsxs(Br,{children:[L.jsx("h1",{children:"Book Tracker"}),L.jsx(AP,{addBook:n})]}),L.jsx("br",{}),L.jsx(Br,{className:"justify-content-center",children:t.map(s=>L.jsx(ua,{xs:12,sm:6,md:4,lg:3,className:"mb-4",children:L.jsx(RP,{book:s,updatePagesRead:r,deleteBook:i})},s.name))})]})})},bP=()=>L.jsxs("div",{children:[L.jsx("h1",{children:"About Me"}),L.jsx("br",{}),L.jsx("p",{children:"Hello! My name is Alan Zhong, and I'm a passionate software developer graduating from UW-Madison. I currently specialize in creating dynamic and responsive web applications using React. I am also familiar with Python, C, and Java in the context of machine learning, operating systems, and backend respectively."}),L.jsx("p",{children:"I have a keen interest in exploring machine learning and applying it to my interests in basketball and soccer, and I enjoy working on projects that challenge me to grow as a developer."}),L.jsx("p",{children:"In my free time, I love to play the viola in the All University String Orchestra at UW and am also building strength to one one day play soccer again. I'm also an avid learner, always looking to expand my knowledge and skills in various areas of technology and seeking philosophical truth in life."}),L.jsxs("p",{children:["Feel free to reach out to me if you'd like to connect or learn more about my work. I'm always open to new opportunities and collaborations! ",L.jsx("a",{href:"https://www.linkedin.com/in/alan-zhong/",children:"Linkedin Profile"})]})]}),LP=()=>{const[t,e]=A.useState([]),[n,i]=A.useState(""),[r,s]=A.useState(!1),[o,a]=A.useState([]);A.useEffect(()=>{fetch("https://reading-system.onrender.com/getPlayerNames",{method:"GET",headers:{"Content-Type":"application/json"}}).then(c=>{if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return c.json()}).then(c=>{e(c)}).catch(c=>{console.error("Error fetching player names:",c)})},[]);const l=c=>{i(c.target.value)},u=()=>{s(!0),fetch("https://reading-system.onrender.com/findSimilarPlayers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({player_name:n})}).then(c=>{if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return c.json()}).then(c=>{a(c)}).catch(c=>{console.error("Error fetching player names:",c)}).finally(()=>{s(!1)})};return L.jsxs("div",{className:"container",children:[L.jsx("h2",{children:"Select an NBA Player"}),L.jsxs(Ut.Group,{controlId:"playerSelect",children:[L.jsx(Ut.Label,{children:"Choose a player"}),L.jsxs(Ut.Control,{as:"select",value:n,onChange:l,children:[L.jsx("option",{value:"",children:"-- Select a player --"}),t.map((c,f)=>L.jsx("option",{value:c,children:c},f))]})]}),L.jsx("br",{}),L.jsx(Xs,{variant:"primary",onClick:u,disabled:r||!n,children:r?"Finding...":"Find Similar Players"}),L.jsx("br",{}),L.jsx("br",{}),o.length>0&&L.jsxs("div",{children:[L.jsx("h3",{children:"Similar Players"}),L.jsx(Tm,{children:o.map((c,f)=>L.jsxs(Tm.Item,{children:[f," - ",c["Player Name"]," - Distance: ",c.Distance_to_Player]},f))})]})]})};/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ta.apply(this,arguments)}var Wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wi||(Wi={}));const Pg="popstate";function NP(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return bd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:su(r)}return IP(e,n,null,t)}function vt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DP(){return Math.random().toString(36).substr(2,8)}function bg(t,e){return{usr:t.state,key:t.key,idx:e}}function bd(t,e,n,i){return n===void 0&&(n=null),ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?so(e):e,{state:n,key:e&&e.key||i||DP()})}function su(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function so(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function IP(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Wi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ta({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Wi.Pop;let p=c(),h=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:h})}function d(p,h){a=Wi.Push;let _=bd(x.location,p,h);u=c()+1;let v=bg(_,u),y=x.createHref(_);try{o.pushState(v,"",y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,h){a=Wi.Replace;let _=bd(x.location,p,h);u=c();let v=bg(_,u),y=x.createHref(_);o.replaceState(v,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function g(p){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:su(p);return _=_.replace(/ $/,"%20"),vt(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Pg,f),l=p,()=>{r.removeEventListener(Pg,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let h=g(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:m,go(p){return o.go(p)}};return x}var Lg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lg||(Lg={}));function UP(t,e,n){return n===void 0&&(n="/"),OP(t,e,n,!1)}function OP(t,e,n,i){let r=typeof e=="string"?so(e):e,s=Qs(r.pathname||"/",n);if(s==null)return null;let o=Px(t);FP(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=YP(s);a=XP(o[l],u,i)}return a}function Px(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(vt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=tr([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(vt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Px(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:WP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of bx(s.path))r(s,o,l)}),e}function bx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=bx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function FP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jP(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const kP=/^:[\w-]+$/,BP=3,zP=2,HP=1,VP=10,GP=-2,Ng=t=>t==="*";function WP(t,e){let n=t.split("/"),i=n.length;return n.some(Ng)&&(i+=GP),e&&(i+=zP),n.filter(r=>!Ng(r)).reduce((r,s)=>r+(kP.test(s)?BP:s===""?HP:VP),i)}function jP(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function XP(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=ou({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=ou({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:tr([s,f.pathname]),pathnameBase:QP(tr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=tr([s,f.pathnameBase]))}return o}function ou(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=$P(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[f];return m&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $P(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function YP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function qP(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?so(t):t;return{pathname:n?n.startsWith("/")?n:KP(n,e):e,search:JP(i),hash:eb(r)}}function KP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lx(t,e){let n=ZP(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Nx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=so(t):(r=ta({},t),vt(!r.pathname||!r.pathname.includes("?"),$c("?","pathname","search",r)),vt(!r.pathname||!r.pathname.includes("#"),$c("#","pathname","hash",r)),vt(!r.search||!r.search.includes("#"),$c("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=qP(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),QP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dx=["post","put","patch","delete"];new Set(Dx);const nb=["get",...Dx];new Set(nb);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},na.apply(this,arguments)}const Uu=A.createContext(null),Ix=A.createContext(null),fr=A.createContext(null),Ou=A.createContext(null),jr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Ux=A.createContext(null);function ib(t,e){let{relative:n}=e===void 0?{}:e;pa()||vt(!1);let{basename:i,navigator:r}=A.useContext(fr),{hash:s,pathname:o,search:a}=Fu(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:tr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function pa(){return A.useContext(Ou)!=null}function ma(){return pa()||vt(!1),A.useContext(Ou).location}function Ox(t){A.useContext(fr).static||A.useLayoutEffect(t)}function rb(){let{isDataRoute:t}=A.useContext(jr);return t?vb():sb()}function sb(){pa()||vt(!1);let t=A.useContext(Uu),{basename:e,future:n,navigator:i}=A.useContext(fr),{matches:r}=A.useContext(jr),{pathname:s}=ma(),o=JSON.stringify(Lx(r,n.v7_relativeSplatPath)),a=A.useRef(!1);return Ox(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=Nx(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:tr([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,o,s,t])}function Fu(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=A.useContext(fr),{matches:r}=A.useContext(jr),{pathname:s}=ma(),o=JSON.stringify(Lx(r,i.v7_relativeSplatPath));return A.useMemo(()=>Nx(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ob(t,e){return ab(t,e)}function ab(t,e,n,i){pa()||vt(!1);let{navigator:r}=A.useContext(fr),{matches:s}=A.useContext(jr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ma(),c;if(e){var f;let p=typeof e=="string"?so(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||vt(!1),c=p}else c=u;let d=c.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=UP(t,{pathname:m}),x=db(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:tr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:tr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?A.createElement(Ou.Provider,{value:{location:na({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Wi.Pop}},x):x}function lb(){let t=gb(),e=tb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:r},n):null,null)}const ub=A.createElement(lb,null);class cb extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(jr.Provider,{value:this.props.routeContext},A.createElement(Ux.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fb(t){let{routeContext:e,match:n,children:i}=t,r=A.useContext(Uu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(jr.Provider,{value:e},i)}function db(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||vt(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:m}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let m,g=!1,x=null,p=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||ub,l&&(u<0&&d===0?(g=!0,p=null):u===d&&(g=!0,p=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,d+1)),_=()=>{let v;return m?v=x:g?v=p:f.route.Component?v=A.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,A.createElement(fb,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?A.createElement(cb,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Fx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fx||{}),au=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(au||{});function hb(t){let e=A.useContext(Uu);return e||vt(!1),e}function pb(t){let e=A.useContext(Ix);return e||vt(!1),e}function mb(t){let e=A.useContext(jr);return e||vt(!1),e}function kx(t){let e=mb(),n=e.matches[e.matches.length-1];return n.route.id||vt(!1),n.route.id}function gb(){var t;let e=A.useContext(Ux),n=pb(au.UseRouteError),i=kx(au.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function vb(){let{router:t}=hb(Fx.UseNavigateStable),e=kx(au.UseNavigateStable),n=A.useRef(!1);return Ox(()=>{n.current=!0}),A.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,na({fromRouteId:e},s)))},[t,e])}function Ui(t){vt(!1)}function _b(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Wi.Pop,navigator:s,static:o=!1,future:a}=t;pa()&&vt(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:s,static:o,future:na({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=so(i));let{pathname:c="/",search:f="",hash:d="",state:m=null,key:g="default"}=i,x=A.useMemo(()=>{let p=Qs(c,l);return p==null?null:{location:{pathname:p,search:f,hash:d,state:m,key:g},navigationType:r}},[l,c,f,d,m,g,r]);return x==null?null:A.createElement(fr.Provider,{value:u},A.createElement(Ou.Provider,{children:n,value:x}))}function xb(t){let{children:e,location:n}=t;return ob(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(i,r)=>{if(!A.isValidElement(i))return;let s=[...e,r];if(i.type===A.Fragment){n.push.apply(n,Ld(i.props.children,s));return}i.type!==Ui&&vt(!1),!i.props.index||!i.props.children||vt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ld(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lu(){return lu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lu.apply(this,arguments)}function Bx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sb(t,e){return t.button===0&&(!e||e==="_self")&&!yb(t)}const Eb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Mb=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Tb="6";try{window.__reactRouterVersion=Tb}catch{}const wb=A.createContext({isTransitioning:!1}),Cb="startTransition",Dg=oy[Cb];function Ab(t){let{basename:e,children:n,future:i,window:r}=t,s=A.useRef();s.current==null&&(s.current=NP({window:r,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=A.useCallback(f=>{u&&Dg?Dg(()=>l(f)):l(f)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(_b,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const Rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bb=A.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=Bx(e,Eb),{basename:m}=A.useContext(fr),g,x=!1;if(typeof u=="string"&&Pb.test(u)&&(g=u,Rb))try{let v=new URL(window.location.href),y=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=Qs(y.pathname,m);y.origin===v.origin&&P!=null?u=P+y.search+y.hash:x=!0}catch{}let p=ib(u,{relative:r}),h=Nb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:f});function _(v){i&&i(v),v.defaultPrevented||h(v)}return A.createElement("a",lu({},d,{href:g||p,onClick:x||s?i:_,ref:n,target:l}))}),ps=A.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,f=Bx(e,Mb),d=Fu(l,{relative:f.relative}),m=ma(),g=A.useContext(Ix),{navigator:x,basename:p}=A.useContext(fr),h=g!=null&&Db(d)&&u===!0,_=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,v=m.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(v=v.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&p&&(y=Qs(y,p)||y);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let w=v===_||!o&&v.startsWith(_)&&v.charAt(P)==="/",C=y!=null&&(y===_||!o&&y.startsWith(_)&&y.charAt(_.length)==="/"),N={isActive:w,isPending:C,isTransitioning:h},T=w?i:void 0,S;typeof s=="function"?S=s(N):S=[s,w?"active":null,C?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(N):a;return A.createElement(bb,lu({},f,{"aria-current":T,className:S,ref:n,style:I,to:l,unstable_viewTransition:u}),typeof c=="function"?c(N):c)});var Nd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nd||(Nd={}));var Ig;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ig||(Ig={}));function Lb(t){let e=A.useContext(Uu);return e||vt(!1),e}function Nb(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=rb(),u=ma(),c=Fu(t,{relative:o});return A.useCallback(f=>{if(Sb(f,n)){f.preventDefault();let d=i!==void 0?i:su(u)===su(c);l(t,{replace:d,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,i,r,n,t,s,o,a])}function Db(t,e){e===void 0&&(e={});let n=A.useContext(wb);n==null&&vt(!1);let{basename:i}=Lb(Nd.useViewTransitionState),r=Fu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Qs(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Qs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ou(r.pathname,o)!=null||ou(r.pathname,s)!=null}const Ib=()=>L.jsx(kr,{className:"my-4",fluid:!0,children:L.jsx(Br,{className:"justify-content-center",children:L.jsx(ua,{md:12,children:L.jsx("iframe",{title:"Godot Game",src:"first-game/game.html",width:"100%",height:"100%",frameBorder:"0",style:{width:"90vh",height:"90vh",border:"none"},allowFullScreen:!0})})})});function Ub(){return L.jsxs(Ab,{children:[L.jsx(Oa,{fixed:"top",bg:"light",expand:"lg",children:L.jsxs(kr,{children:[L.jsx(Oa.Brand,{as:ps,to:"/reading-system/",children:"Alan's Website"}),L.jsx(Oa.Toggle,{"aria-controls":"basic-navbar-nav"}),L.jsx(Oa.Collapse,{id:"basic-navbar-nav",children:L.jsxs(Kr,{className:"mr-auto",children:[L.jsx(Kr.Link,{as:ps,to:"/reading-system/salary-predictor",children:"NBA Salary Predictor"}),L.jsx(Kr.Link,{as:ps,to:"/reading-system/player-similarity",children:"NBA Player Similarity"}),L.jsx(Kr.Link,{as:ps,to:"/reading-system/book-tracker",children:"Book Tracker"}),L.jsx(Kr.Link,{as:ps,to:"/reading-system/knight-adventure",children:"Knight Adventure"}),L.jsx(Kr.Link,{as:ps,to:"/reading-system/about-me",children:"About Me"})]})})]})}),L.jsx(kr,{className:"content",fluid:!0,children:L.jsxs(xb,{children:[L.jsx(Ui,{path:"/reading-system/",element:L.jsx(CP,{})}),L.jsx(Ui,{path:"/reading-system/salary-predictor",element:L.jsx(fT,{})}),L.jsx(Ui,{path:"/reading-system/book-tracker",element:L.jsx(PP,{})}),L.jsx(Ui,{path:"/reading-system/player-similarity",element:L.jsx(LP,{})}),L.jsx(Ui,{path:"/reading-system/knight-adventure",element:L.jsx(Ib,{})}),L.jsx(Ui,{path:"/reading-system/about-me",element:L.jsx(bP,{})}),L.jsx(Ui,{path:"*",element:L.jsx(Ob,{})})]})})]})}function Ob(){return L.jsx("h1",{children:"Not Found"})}Yc.createRoot(document.getElementById("root")).render(L.jsx(Qt.StrictMode,{children:L.jsx(Ub,{})}));
