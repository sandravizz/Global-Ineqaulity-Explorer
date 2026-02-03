(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))c(A);new MutationObserver(A=>{for(const E of A)if(E.type==="childList")for(const f of E.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function o(A){const E={};return A.integrity&&(E.integrity=A.integrity),A.referrerPolicy&&(E.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?E.credentials="include":A.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function c(A){if(A.ep)return;A.ep=!0;const E=o(A);fetch(A.href,E)}})();var Bi={exports:{}},Ze={},vi={exports:{}},e0={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no;function Ec(){if(no)return e0;no=1;var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),y=Symbol.iterator;function N(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,F={};function z(M,T,a0){this.props=M,this.context=T,this.refs=F,this.updater=a0||v}z.prototype.isReactComponent={},z.prototype.setState=function(M,T){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,T,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function p0(){}p0.prototype=z.prototype;function r0(M,T,a0){this.props=M,this.context=T,this.refs=F,this.updater=a0||v}var t0=r0.prototype=new p0;t0.constructor=r0,V(t0,z.prototype),t0.isPureReactComponent=!0;var J=Array.isArray,X=Object.prototype.hasOwnProperty,q={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function f0(M,T,a0){var n0,s0={},o0=null,m0=null;if(T!=null)for(n0 in T.ref!==void 0&&(m0=T.ref),T.key!==void 0&&(o0=""+T.key),T)X.call(T,n0)&&!c0.hasOwnProperty(n0)&&(s0[n0]=T[n0]);var A0=arguments.length-2;if(A0===1)s0.children=a0;else if(1<A0){for(var M0=Array(A0),q0=0;q0<A0;q0++)M0[q0]=arguments[q0+2];s0.children=M0}if(M&&M.defaultProps)for(n0 in A0=M.defaultProps,A0)s0[n0]===void 0&&(s0[n0]=A0[n0]);return{$$typeof:r,type:M,key:o0,ref:m0,props:s0,_owner:q.current}}function L0(M,T){return{$$typeof:r,type:M.type,key:T,ref:M.ref,props:M.props,_owner:M._owner}}function G0(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function I0(M){var T={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(a0){return T[a0]})}var H=/\/+/g;function E0(M,T){return typeof M=="object"&&M!==null&&M.key!=null?I0(""+M.key):T.toString(36)}function d0(M,T,a0,n0,s0){var o0=typeof M;(o0==="undefined"||o0==="boolean")&&(M=null);var m0=!1;if(M===null)m0=!0;else switch(o0){case"string":case"number":m0=!0;break;case"object":switch(M.$$typeof){case r:case t:m0=!0}}if(m0)return m0=M,s0=s0(m0),M=n0===""?"."+E0(m0,0):n0,J(s0)?(a0="",M!=null&&(a0=M.replace(H,"$&/")+"/"),d0(s0,T,a0,"",function(q0){return q0})):s0!=null&&(G0(s0)&&(s0=L0(s0,a0+(!s0.key||m0&&m0.key===s0.key?"":(""+s0.key).replace(H,"$&/")+"/")+M)),T.push(s0)),1;if(m0=0,n0=n0===""?".":n0+":",J(M))for(var A0=0;A0<M.length;A0++){o0=M[A0];var M0=n0+E0(o0,A0);m0+=d0(o0,T,a0,M0,s0)}else if(M0=N(M),typeof M0=="function")for(M=M0.call(M),A0=0;!(o0=M.next()).done;)o0=o0.value,M0=n0+E0(o0,A0++),m0+=d0(o0,T,a0,M0,s0);else if(o0==="object")throw T=String(M),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return m0}function W0(M,T,a0){if(M==null)return M;var n0=[],s0=0;return d0(M,n0,"","",function(o0){return T.call(a0,o0,s0++)}),n0}function R(M){if(M._status===-1){var T=M._result;T=T(),T.then(function(a0){(M._status===0||M._status===-1)&&(M._status=1,M._result=a0)},function(a0){(M._status===0||M._status===-1)&&(M._status=2,M._result=a0)}),M._status===-1&&(M._status=0,M._result=T)}if(M._status===1)return M._result.default;throw M._result}var $={current:null},x={transition:null},_={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:x,ReactCurrentOwner:q};function I(){throw Error("act(...) is not supported in production builds of React.")}return e0.Children={map:W0,forEach:function(M,T,a0){W0(M,function(){T.apply(this,arguments)},a0)},count:function(M){var T=0;return W0(M,function(){T++}),T},toArray:function(M){return W0(M,function(T){return T})||[]},only:function(M){if(!G0(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},e0.Component=z,e0.Fragment=o,e0.Profiler=A,e0.PureComponent=r0,e0.StrictMode=c,e0.Suspense=p,e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,e0.act=I,e0.cloneElement=function(M,T,a0){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var n0=V({},M.props),s0=M.key,o0=M.ref,m0=M._owner;if(T!=null){if(T.ref!==void 0&&(o0=T.ref,m0=q.current),T.key!==void 0&&(s0=""+T.key),M.type&&M.type.defaultProps)var A0=M.type.defaultProps;for(M0 in T)X.call(T,M0)&&!c0.hasOwnProperty(M0)&&(n0[M0]=T[M0]===void 0&&A0!==void 0?A0[M0]:T[M0])}var M0=arguments.length-2;if(M0===1)n0.children=a0;else if(1<M0){A0=Array(M0);for(var q0=0;q0<M0;q0++)A0[q0]=arguments[q0+2];n0.children=A0}return{$$typeof:r,type:M.type,key:s0,ref:o0,props:n0,_owner:m0}},e0.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:E,_context:M},M.Consumer=M},e0.createElement=f0,e0.createFactory=function(M){var T=f0.bind(null,M);return T.type=M,T},e0.createRef=function(){return{current:null}},e0.forwardRef=function(M){return{$$typeof:d,render:M}},e0.isValidElement=G0,e0.lazy=function(M){return{$$typeof:W,_payload:{_status:-1,_result:M},_init:R}},e0.memo=function(M,T){return{$$typeof:h,type:M,compare:T===void 0?null:T}},e0.startTransition=function(M){var T=x.transition;x.transition={};try{M()}finally{x.transition=T}},e0.unstable_act=I,e0.useCallback=function(M,T){return $.current.useCallback(M,T)},e0.useContext=function(M){return $.current.useContext(M)},e0.useDebugValue=function(){},e0.useDeferredValue=function(M){return $.current.useDeferredValue(M)},e0.useEffect=function(M,T){return $.current.useEffect(M,T)},e0.useId=function(){return $.current.useId()},e0.useImperativeHandle=function(M,T,a0){return $.current.useImperativeHandle(M,T,a0)},e0.useInsertionEffect=function(M,T){return $.current.useInsertionEffect(M,T)},e0.useLayoutEffect=function(M,T){return $.current.useLayoutEffect(M,T)},e0.useMemo=function(M,T){return $.current.useMemo(M,T)},e0.useReducer=function(M,T,a0){return $.current.useReducer(M,T,a0)},e0.useRef=function(M){return $.current.useRef(M)},e0.useState=function(M){return $.current.useState(M)},e0.useSyncExternalStore=function(M,T,a0){return $.current.useSyncExternalStore(M,T,a0)},e0.useTransition=function(){return $.current.useTransition()},e0.version="18.3.1",e0}var ro;function ji(){return ro||(ro=1,vi.exports=Ec()),vi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io;function dc(){if(io)return Ze;io=1;var r=ji(),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,h){var W,y={},N=null,v=null;h!==void 0&&(N=""+h),p.key!==void 0&&(N=""+p.key),p.ref!==void 0&&(v=p.ref);for(W in p)c.call(p,W)&&!E.hasOwnProperty(W)&&(y[W]=p[W]);if(d&&d.defaultProps)for(W in p=d.defaultProps,p)y[W]===void 0&&(y[W]=p[W]);return{$$typeof:t,type:d,key:N,ref:v,props:y,_owner:A.current}}return Ze.Fragment=o,Ze.jsx=f,Ze.jsxs=f,Ze}var to;function pc(){return to||(to=1,Bi.exports=dc()),Bi.exports}var B=pc(),s2={},Gi={exports:{}},j0={},Ti={exports:{}},Oi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so;function mc(){return so||(so=1,(function(r){function t(x,_){var I=x.length;x.push(_);a:for(;0<I;){var M=I-1>>>1,T=x[M];if(0<A(T,_))x[M]=_,x[I]=T,I=M;else break a}}function o(x){return x.length===0?null:x[0]}function c(x){if(x.length===0)return null;var _=x[0],I=x.pop();if(I!==_){x[0]=I;a:for(var M=0,T=x.length,a0=T>>>1;M<a0;){var n0=2*(M+1)-1,s0=x[n0],o0=n0+1,m0=x[o0];if(0>A(s0,I))o0<T&&0>A(m0,s0)?(x[M]=m0,x[o0]=I,M=o0):(x[M]=s0,x[n0]=I,M=n0);else if(o0<T&&0>A(m0,I))x[M]=m0,x[o0]=I,M=o0;else break a}}return _}function A(x,_){var I=x.sortIndex-_.sortIndex;return I!==0?I:x.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;r.unstable_now=function(){return E.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],h=[],W=1,y=null,N=3,v=!1,V=!1,F=!1,z=typeof setTimeout=="function"?setTimeout:null,p0=typeof clearTimeout=="function"?clearTimeout:null,r0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function t0(x){for(var _=o(h);_!==null;){if(_.callback===null)c(h);else if(_.startTime<=x)c(h),_.sortIndex=_.expirationTime,t(p,_);else break;_=o(h)}}function J(x){if(F=!1,t0(x),!V)if(o(p)!==null)V=!0,R(X);else{var _=o(h);_!==null&&$(J,_.startTime-x)}}function X(x,_){V=!1,F&&(F=!1,p0(f0),f0=-1),v=!0;var I=N;try{for(t0(_),y=o(p);y!==null&&(!(y.expirationTime>_)||x&&!I0());){var M=y.callback;if(typeof M=="function"){y.callback=null,N=y.priorityLevel;var T=M(y.expirationTime<=_);_=r.unstable_now(),typeof T=="function"?y.callback=T:y===o(p)&&c(p),t0(_)}else c(p);y=o(p)}if(y!==null)var a0=!0;else{var n0=o(h);n0!==null&&$(J,n0.startTime-_),a0=!1}return a0}finally{y=null,N=I,v=!1}}var q=!1,c0=null,f0=-1,L0=5,G0=-1;function I0(){return!(r.unstable_now()-G0<L0)}function H(){if(c0!==null){var x=r.unstable_now();G0=x;var _=!0;try{_=c0(!0,x)}finally{_?E0():(q=!1,c0=null)}}else q=!1}var E0;if(typeof r0=="function")E0=function(){r0(H)};else if(typeof MessageChannel<"u"){var d0=new MessageChannel,W0=d0.port2;d0.port1.onmessage=H,E0=function(){W0.postMessage(null)}}else E0=function(){z(H,0)};function R(x){c0=x,q||(q=!0,E0())}function $(x,_){f0=z(function(){x(r.unstable_now())},_)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(x){x.callback=null},r.unstable_continueExecution=function(){V||v||(V=!0,R(X))},r.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L0=0<x?Math.floor(1e3/x):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return o(p)},r.unstable_next=function(x){switch(N){case 1:case 2:case 3:var _=3;break;default:_=N}var I=N;N=_;try{return x()}finally{N=I}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(x,_){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var I=N;N=x;try{return _()}finally{N=I}},r.unstable_scheduleCallback=function(x,_,I){var M=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,x){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=I+T,x={id:W++,callback:_,priorityLevel:x,startTime:I,expirationTime:T,sortIndex:-1},I>M?(x.sortIndex=I,t(h,x),o(p)===null&&x===o(h)&&(F?(p0(f0),f0=-1):F=!0,$(J,I-M))):(x.sortIndex=T,t(p,x),V||v||(V=!0,R(X))),x},r.unstable_shouldYield=I0,r.unstable_wrapCallback=function(x){var _=N;return function(){var I=N;N=_;try{return x.apply(this,arguments)}finally{N=I}}}})(Oi)),Oi}var oo;function hc(){return oo||(oo=1,Ti.exports=mc()),Ti.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo;function Sc(){if(uo)return j0;uo=1;var r=ji(),t=hc();function o(a){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+a,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,A={};function E(a,e){f(a,e),f(a+"Capture",e)}function f(a,e){for(A[a]=e,a=0;a<e.length;a++)c.add(e[a])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},y={};function N(a){return p.call(y,a)?!0:p.call(W,a)?!1:h.test(a)?y[a]=!0:(W[a]=!0,!1)}function v(a,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function V(a,e,n,i){if(e===null||typeof e>"u"||v(a,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function F(a,e,n,i,s,u,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=a,this.type=e,this.sanitizeURL=u,this.removeEmptyString=l}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new F(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var e=a[0];z[e]=new F(e,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new F(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new F(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new F(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){z[a]=new F(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){z[a]=new F(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){z[a]=new F(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){z[a]=new F(a,5,!1,a.toLowerCase(),null,!1,!1)});var p0=/[\-:]([a-z])/g;function r0(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var e=a.replace(p0,r0);z[e]=new F(e,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var e=a.replace(p0,r0);z[e]=new F(e,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var e=a.replace(p0,r0);z[e]=new F(e,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){z[a]=new F(a,1,!1,a.toLowerCase(),null,!1,!1)}),z.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){z[a]=new F(a,1,!1,a.toLowerCase(),null,!0,!0)});function t0(a,e,n,i){var s=z.hasOwnProperty(e)?z[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V(e,n,s,i)&&(n=null),i||s===null?N(e)&&(n===null?a.removeAttribute(e):a.setAttribute(e,""+n)):s.mustUseProperty?a[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?a.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?a.setAttributeNS(i,e,n):a.setAttribute(e,n))))}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),q=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),d0=Symbol.for("react.suspense_list"),W0=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),x=Symbol.iterator;function _(a){return a===null||typeof a!="object"?null:(a=x&&a[x]||a["@@iterator"],typeof a=="function"?a:null)}var I=Object.assign,M;function T(a){if(M===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);M=e&&e[1]||""}return`
`+M+a}var a0=!1;function n0(a,e){if(!a||a0)return"";a0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(w){var i=w}Reflect.construct(a,[],e)}else{try{e.call()}catch(w){i=w}a.call(e.prototype)}else{try{throw Error()}catch(w){i=w}a()}}catch(w){if(w&&i&&typeof w.stack=="string"){for(var s=w.stack.split(`
`),u=i.stack.split(`
`),l=s.length-1,m=u.length-1;1<=l&&0<=m&&s[l]!==u[m];)m--;for(;1<=l&&0<=m;l--,m--)if(s[l]!==u[m]){if(l!==1||m!==1)do if(l--,m--,0>m||s[l]!==u[m]){var S=`
`+s[l].replace(" at new "," at ");return a.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",a.displayName)),S}while(1<=l&&0<=m);break}}}finally{a0=!1,Error.prepareStackTrace=n}return(a=a?a.displayName||a.name:"")?T(a):""}function s0(a){switch(a.tag){case 5:return T(a.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return a=n0(a.type,!1),a;case 11:return a=n0(a.type.render,!1),a;case 1:return a=n0(a.type,!0),a;default:return""}}function o0(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case c0:return"Fragment";case q:return"Portal";case L0:return"Profiler";case f0:return"StrictMode";case E0:return"Suspense";case d0:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case I0:return(a.displayName||"Context")+".Consumer";case G0:return(a._context.displayName||"Context")+".Provider";case H:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case W0:return e=a.displayName||null,e!==null?e:o0(a.type)||"Memo";case R:e=a._payload,a=a._init;try{return o0(a(e))}catch{}}return null}function m0(a){var e=a.type;switch(a.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=e.render,a=a.displayName||a.name||"",e.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return o0(e);case 8:return e===f0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function A0(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function M0(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(a){var e=M0(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,e),i=""+a[e];if(!a.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,u.call(this,l)}}),Object.defineProperty(a,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function Je(a){a._valueTracker||(a._valueTracker=q0(a))}function u9(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return a&&(i=M0(a)?a.checked?"true":"false":a.value),a=i,a!==n?(e.setValue(a),!0):!1}function je(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function P2(a,e){var n=e.checked;return I({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??a._wrapperState.initialChecked})}function c9(a,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=A0(e.value!=null?e.value:n),a._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A9(a,e){e=e.checked,e!=null&&t0(a,"checked",e,!1)}function x2(a,e){A9(a,e);var n=A0(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+n):a.value!==""+n&&(a.value=""+n);else if(i==="submit"||i==="reset"){a.removeAttribute("value");return}e.hasOwnProperty("value")?R2(a,e.type,n):e.hasOwnProperty("defaultValue")&&R2(a,e.type,A0(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(a.defaultChecked=!!e.defaultChecked)}function l9(a,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+a._wrapperState.initialValue,n||e===a.value||(a.value=e),a.defaultValue=e}n=a.name,n!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,n!==""&&(a.name=n)}function R2(a,e,n){(e!=="number"||je(a.ownerDocument)!==a)&&(n==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+n&&(a.defaultValue=""+n))}var q1=Array.isArray;function M1(a,e,n,i){if(a=a.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<a.length;n++)s=e.hasOwnProperty("$"+a[n].value),a[n].selected!==s&&(a[n].selected=s),s&&i&&(a[n].defaultSelected=!0)}else{for(n=""+A0(n),e=null,s=0;s<a.length;s++){if(a[s].value===n){a[s].selected=!0,i&&(a[s].defaultSelected=!0);return}e!==null||a[s].disabled||(e=a[s])}e!==null&&(e.selected=!0)}}function Z2(a,e){if(e.dangerouslySetInnerHTML!=null)throw Error(o(91));return I({},e,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function f9(a,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(o(92));if(q1(n)){if(1<n.length)throw Error(o(93));n=n[0]}e=n}e==null&&(e=""),n=e}a._wrapperState={initialValue:A0(n)}}function E9(a,e){var n=A0(e.value),i=A0(e.defaultValue);n!=null&&(n=""+n,n!==a.value&&(a.value=n),e.defaultValue==null&&a.defaultValue!==n&&(a.defaultValue=n)),i!=null&&(a.defaultValue=""+i)}function d9(a){var e=a.textContent;e===a._wrapperState.initialValue&&e!==""&&e!==null&&(a.value=e)}function p9(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K2(a,e){return a==null||a==="http://www.w3.org/1999/xhtml"?p9(e):a==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var $e,m9=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return a(e,n,i,s)})}:a})(function(a,e){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=e;else{for($e=$e||document.createElement("div"),$e.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$e.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;e.firstChild;)a.appendChild(e.firstChild)}});function X1(a,e){if(e){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=e;return}}a.textContent=e}var ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hu=["Webkit","ms","Moz","O"];Object.keys(ae).forEach(function(a){hu.forEach(function(e){e=e+a.charAt(0).toUpperCase()+a.substring(1),ae[e]=ae[a]})});function h9(a,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ae.hasOwnProperty(a)&&ae[a]?(""+e).trim():e+"px"}function S9(a,e){a=a.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=h9(n,e[n],i);n==="float"&&(n="cssFloat"),i?a.setProperty(n,s):a[n]=s}}var Su=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function D2(a,e){if(e){if(Su[a]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(o(137,a));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(o(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(o(61))}if(e.style!=null&&typeof e.style!="object")throw Error(o(62))}}function k2(a,e){if(a.indexOf("-")===-1)return typeof e.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U2=null;function _2(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var F2=null,b1=null,g1=null;function C9(a){if(a=be(a)){if(typeof F2!="function")throw Error(o(280));var e=a.stateNode;e&&(e=Mn(e),F2(a.stateNode,a.type,e))}}function W9(a){b1?g1?g1.push(a):g1=[a]:b1=a}function M9(){if(b1){var a=b1,e=g1;if(g1=b1=null,C9(a),e)for(a=0;a<e.length;a++)C9(e[a])}}function b9(a,e){return a(e)}function g9(){}var H2=!1;function N9(a,e,n){if(H2)return a(e,n);H2=!0;try{return b9(a,e,n)}finally{H2=!1,(b1!==null||g1!==null)&&(g9(),M9())}}function ee(a,e){var n=a.stateNode;if(n===null)return null;var i=Mn(n);if(i===null)return null;n=i[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(a=a.type,i=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!i;break a;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var z2=!1;if(d)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){z2=!0}}),window.addEventListener("test",ne,ne),window.removeEventListener("test",ne,ne)}catch{z2=!1}function Cu(a,e,n,i,s,u,l,m,S){var w=Array.prototype.slice.call(arguments,3);try{e.apply(n,w)}catch(O){this.onError(O)}}var re=!1,qe=null,Xe=!1,V2=null,Wu={onError:function(a){re=!0,qe=a}};function Mu(a,e,n,i,s,u,l,m,S){re=!1,qe=null,Cu.apply(Wu,arguments)}function bu(a,e,n,i,s,u,l,m,S){if(Mu.apply(this,arguments),re){if(re){var w=qe;re=!1,qe=null}else throw Error(o(198));Xe||(Xe=!0,V2=w)}}function r1(a){var e=a,n=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(n=e.return),a=e.return;while(a)}return e.tag===3?n:null}function y9(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function w9(a){if(r1(a)!==a)throw Error(o(188))}function gu(a){var e=a.alternate;if(!e){if(e=r1(a),e===null)throw Error(o(188));return e!==a?null:a}for(var n=a,i=e;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return w9(s),a;if(u===i)return w9(s),e;u=u.sibling}throw Error(o(188))}if(n.return!==i.return)n=s,i=u;else{for(var l=!1,m=s.child;m;){if(m===n){l=!0,n=s,i=u;break}if(m===i){l=!0,i=s,n=u;break}m=m.sibling}if(!l){for(m=u.child;m;){if(m===n){l=!0,n=u,i=s;break}if(m===i){l=!0,i=u,n=s;break}m=m.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?a:e}function B9(a){return a=gu(a),a!==null?v9(a):null}function v9(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var e=v9(a);if(e!==null)return e;a=a.sibling}return null}var G9=t.unstable_scheduleCallback,T9=t.unstable_cancelCallback,Nu=t.unstable_shouldYield,yu=t.unstable_requestPaint,w0=t.unstable_now,wu=t.unstable_getCurrentPriorityLevel,Y2=t.unstable_ImmediatePriority,O9=t.unstable_UserBlockingPriority,an=t.unstable_NormalPriority,Bu=t.unstable_LowPriority,L9=t.unstable_IdlePriority,en=null,Ma=null;function vu(a){if(Ma&&typeof Ma.onCommitFiberRoot=="function")try{Ma.onCommitFiberRoot(en,a,void 0,(a.current.flags&128)===128)}catch{}}var la=Math.clz32?Math.clz32:Ou,Gu=Math.log,Tu=Math.LN2;function Ou(a){return a>>>=0,a===0?32:31-(Gu(a)/Tu|0)|0}var nn=64,rn=4194304;function ie(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function tn(a,e){var n=a.pendingLanes;if(n===0)return 0;var i=0,s=a.suspendedLanes,u=a.pingedLanes,l=n&268435455;if(l!==0){var m=l&~s;m!==0?i=ie(m):(u&=l,u!==0&&(i=ie(u)))}else l=n&~s,l!==0?i=ie(l):u!==0&&(i=ie(u));if(i===0)return 0;if(e!==0&&e!==i&&(e&s)===0&&(s=i&-i,u=e&-e,s>=u||s===16&&(u&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=a.entangledLanes,e!==0)for(a=a.entanglements,e&=i;0<e;)n=31-la(e),s=1<<n,i|=a[n],e&=~s;return i}function Lu(a,e){switch(a){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(a,e){for(var n=a.suspendedLanes,i=a.pingedLanes,s=a.expirationTimes,u=a.pendingLanes;0<u;){var l=31-la(u),m=1<<l,S=s[l];S===-1?((m&n)===0||(m&i)!==0)&&(s[l]=Lu(m,e)):S<=e&&(a.expiredLanes|=m),u&=~m}}function Q2(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function I9(){var a=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),a}function J2(a){for(var e=[],n=0;31>n;n++)e.push(a);return e}function te(a,e,n){a.pendingLanes|=e,e!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,e=31-la(e),a[e]=n}function Pu(a,e){var n=a.pendingLanes&~e;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=e,a.mutableReadLanes&=e,a.entangledLanes&=e,e=a.entanglements;var i=a.eventTimes;for(a=a.expirationTimes;0<n;){var s=31-la(n),u=1<<s;e[s]=0,i[s]=-1,a[s]=-1,n&=~u}}function j2(a,e){var n=a.entangledLanes|=e;for(a=a.entanglements;n;){var i=31-la(n),s=1<<i;s&e|a[i]&e&&(a[i]|=e),n&=~s}}var l0=0;function P9(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var x9,$2,R9,Z9,K9,q2=!1,sn=[],Ka=null,Da=null,ka=null,se=new Map,oe=new Map,Ua=[],xu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function D9(a,e){switch(a){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":se.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oe.delete(e.pointerId)}}function ue(a,e,n,i,s,u){return a===null||a.nativeEvent!==u?(a={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},e!==null&&(e=be(e),e!==null&&$2(e)),a):(a.eventSystemFlags|=i,e=a.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),a)}function Ru(a,e,n,i,s){switch(e){case"focusin":return Ka=ue(Ka,a,e,n,i,s),!0;case"dragenter":return Da=ue(Da,a,e,n,i,s),!0;case"mouseover":return ka=ue(ka,a,e,n,i,s),!0;case"pointerover":var u=s.pointerId;return se.set(u,ue(se.get(u)||null,a,e,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,oe.set(u,ue(oe.get(u)||null,a,e,n,i,s)),!0}return!1}function k9(a){var e=i1(a.target);if(e!==null){var n=r1(e);if(n!==null){if(e=n.tag,e===13){if(e=y9(n),e!==null){a.blockedOn=e,K9(a.priority,function(){R9(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function on(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var n=ar(a.domEventName,a.eventSystemFlags,e[0],a.nativeEvent);if(n===null){n=a.nativeEvent;var i=new n.constructor(n.type,n);U2=i,n.target.dispatchEvent(i),U2=null}else return e=be(n),e!==null&&$2(e),a.blockedOn=n,!1;e.shift()}return!0}function U9(a,e,n){on(a)&&n.delete(e)}function Zu(){q2=!1,Ka!==null&&on(Ka)&&(Ka=null),Da!==null&&on(Da)&&(Da=null),ka!==null&&on(ka)&&(ka=null),se.forEach(U9),oe.forEach(U9)}function ce(a,e){a.blockedOn===e&&(a.blockedOn=null,q2||(q2=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Zu)))}function Ae(a){function e(s){return ce(s,a)}if(0<sn.length){ce(sn[0],a);for(var n=1;n<sn.length;n++){var i=sn[n];i.blockedOn===a&&(i.blockedOn=null)}}for(Ka!==null&&ce(Ka,a),Da!==null&&ce(Da,a),ka!==null&&ce(ka,a),se.forEach(e),oe.forEach(e),n=0;n<Ua.length;n++)i=Ua[n],i.blockedOn===a&&(i.blockedOn=null);for(;0<Ua.length&&(n=Ua[0],n.blockedOn===null);)k9(n),n.blockedOn===null&&Ua.shift()}var N1=J.ReactCurrentBatchConfig,un=!0;function Ku(a,e,n,i){var s=l0,u=N1.transition;N1.transition=null;try{l0=1,X2(a,e,n,i)}finally{l0=s,N1.transition=u}}function Du(a,e,n,i){var s=l0,u=N1.transition;N1.transition=null;try{l0=4,X2(a,e,n,i)}finally{l0=s,N1.transition=u}}function X2(a,e,n,i){if(un){var s=ar(a,e,n,i);if(s===null)hr(a,e,i,cn,n),D9(a,i);else if(Ru(s,a,e,n,i))i.stopPropagation();else if(D9(a,i),e&4&&-1<xu.indexOf(a)){for(;s!==null;){var u=be(s);if(u!==null&&x9(u),u=ar(a,e,n,i),u===null&&hr(a,e,i,cn,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else hr(a,e,i,null,n)}}var cn=null;function ar(a,e,n,i){if(cn=null,a=_2(i),a=i1(a),a!==null)if(e=r1(a),e===null)a=null;else if(n=e.tag,n===13){if(a=y9(e),a!==null)return a;a=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null);return cn=a,null}function _9(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case Y2:return 1;case O9:return 4;case an:case Bu:return 16;case L9:return 536870912;default:return 16}default:return 16}}var _a=null,er=null,An=null;function F9(){if(An)return An;var a,e=er,n=e.length,i,s="value"in _a?_a.value:_a.textContent,u=s.length;for(a=0;a<n&&e[a]===s[a];a++);var l=n-a;for(i=1;i<=l&&e[n-i]===s[u-i];i++);return An=s.slice(a,1<i?1-i:void 0)}function ln(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function fn(){return!0}function H9(){return!1}function X0(a){function e(n,i,s,u,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=l,this.currentTarget=null;for(var m in a)a.hasOwnProperty(m)&&(n=a[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?fn:H9,this.isPropagationStopped=H9,this}return I(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fn)},persist:function(){},isPersistent:fn}),e}var y1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=X0(y1),le=I({},y1,{view:0,detail:0}),ku=X0(le),rr,ir,fe,En=I({},le,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==fe&&(fe&&a.type==="mousemove"?(rr=a.screenX-fe.screenX,ir=a.screenY-fe.screenY):ir=rr=0,fe=a),rr)},movementY:function(a){return"movementY"in a?a.movementY:ir}}),z9=X0(En),Uu=I({},En,{dataTransfer:0}),_u=X0(Uu),Fu=I({},le,{relatedTarget:0}),tr=X0(Fu),Hu=I({},y1,{animationName:0,elapsedTime:0,pseudoElement:0}),zu=X0(Hu),Vu=I({},y1,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Yu=X0(Vu),Qu=I({},y1,{data:0}),V9=X0(Qu),Ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ju={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qu(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=$u[a])?!!e[a]:!1}function sr(){return qu}var Xu=I({},le,{key:function(a){if(a.key){var e=Ju[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=ln(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?ju[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(a){return a.type==="keypress"?ln(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?ln(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),a8=X0(Xu),e8=I({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Y9=X0(e8),n8=I({},le,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),r8=X0(n8),i8=I({},y1,{propertyName:0,elapsedTime:0,pseudoElement:0}),t8=X0(i8),s8=I({},En,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),o8=X0(s8),u8=[9,13,27,32],or=d&&"CompositionEvent"in window,Ee=null;d&&"documentMode"in document&&(Ee=document.documentMode);var c8=d&&"TextEvent"in window&&!Ee,Q9=d&&(!or||Ee&&8<Ee&&11>=Ee),J9=" ",j9=!1;function $9(a,e){switch(a){case"keyup":return u8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q9(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var w1=!1;function A8(a,e){switch(a){case"compositionend":return q9(e);case"keypress":return e.which!==32?null:(j9=!0,J9);case"textInput":return a=e.data,a===J9&&j9?null:a;default:return null}}function l8(a,e){if(w1)return a==="compositionend"||!or&&$9(a,e)?(a=F9(),An=er=_a=null,w1=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q9&&e.locale!=="ko"?null:e.data;default:return null}}var f8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X9(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!f8[a.type]:e==="textarea"}function at(a,e,n,i){W9(i),e=Sn(e,"onChange"),0<e.length&&(n=new nr("onChange","change",null,n,i),a.push({event:n,listeners:e}))}var de=null,pe=null;function E8(a){St(a,0)}function dn(a){var e=O1(a);if(u9(e))return a}function d8(a,e){if(a==="change")return e}var et=!1;if(d){var ur;if(d){var cr="oninput"in document;if(!cr){var nt=document.createElement("div");nt.setAttribute("oninput","return;"),cr=typeof nt.oninput=="function"}ur=cr}else ur=!1;et=ur&&(!document.documentMode||9<document.documentMode)}function rt(){de&&(de.detachEvent("onpropertychange",it),pe=de=null)}function it(a){if(a.propertyName==="value"&&dn(pe)){var e=[];at(e,pe,a,_2(a)),N9(E8,e)}}function p8(a,e,n){a==="focusin"?(rt(),de=e,pe=n,de.attachEvent("onpropertychange",it)):a==="focusout"&&rt()}function m8(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return dn(pe)}function h8(a,e){if(a==="click")return dn(e)}function S8(a,e){if(a==="input"||a==="change")return dn(e)}function C8(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var fa=typeof Object.is=="function"?Object.is:C8;function me(a,e){if(fa(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var n=Object.keys(a),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!p.call(e,s)||!fa(a[s],e[s]))return!1}return!0}function tt(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function st(a,e){var n=tt(a);a=0;for(var i;n;){if(n.nodeType===3){if(i=a+n.textContent.length,a<=e&&i>=e)return{node:n,offset:e-a};a=i}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=tt(n)}}function ot(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?ot(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function ut(){for(var a=window,e=je();e instanceof a.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)a=e.contentWindow;else break;e=je(a.document)}return e}function Ar(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}function W8(a){var e=ut(),n=a.focusedElem,i=a.selectionRange;if(e!==n&&n&&n.ownerDocument&&ot(n.ownerDocument.documentElement,n)){if(i!==null&&Ar(n)){if(e=i.start,a=i.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var s=n.textContent.length,u=Math.min(i.start,s);i=i.end===void 0?u:Math.min(i.end,s),!a.extend&&u>i&&(s=i,i=u,u=s),s=st(n,u);var l=st(n,i);s&&l&&(a.rangeCount!==1||a.anchorNode!==s.node||a.anchorOffset!==s.offset||a.focusNode!==l.node||a.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),a.removeAllRanges(),u>i?(a.addRange(e),a.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var M8=d&&"documentMode"in document&&11>=document.documentMode,B1=null,lr=null,he=null,fr=!1;function ct(a,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fr||B1==null||B1!==je(i)||(i=B1,"selectionStart"in i&&Ar(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),he&&me(he,i)||(he=i,i=Sn(lr,"onSelect"),0<i.length&&(e=new nr("onSelect","select",null,e,n),a.push({event:e,listeners:i}),e.target=B1)))}function pn(a,e){var n={};return n[a.toLowerCase()]=e.toLowerCase(),n["Webkit"+a]="webkit"+e,n["Moz"+a]="moz"+e,n}var v1={animationend:pn("Animation","AnimationEnd"),animationiteration:pn("Animation","AnimationIteration"),animationstart:pn("Animation","AnimationStart"),transitionend:pn("Transition","TransitionEnd")},Er={},At={};d&&(At=document.createElement("div").style,"AnimationEvent"in window||(delete v1.animationend.animation,delete v1.animationiteration.animation,delete v1.animationstart.animation),"TransitionEvent"in window||delete v1.transitionend.transition);function mn(a){if(Er[a])return Er[a];if(!v1[a])return a;var e=v1[a],n;for(n in e)if(e.hasOwnProperty(n)&&n in At)return Er[a]=e[n];return a}var lt=mn("animationend"),ft=mn("animationiteration"),Et=mn("animationstart"),dt=mn("transitionend"),pt=new Map,mt="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fa(a,e){pt.set(a,e),E(e,[a])}for(var dr=0;dr<mt.length;dr++){var pr=mt[dr],b8=pr.toLowerCase(),g8=pr[0].toUpperCase()+pr.slice(1);Fa(b8,"on"+g8)}Fa(lt,"onAnimationEnd"),Fa(ft,"onAnimationIteration"),Fa(Et,"onAnimationStart"),Fa("dblclick","onDoubleClick"),Fa("focusin","onFocus"),Fa("focusout","onBlur"),Fa(dt,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Se="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Se));function ht(a,e,n){var i=a.type||"unknown-event";a.currentTarget=n,bu(i,e,void 0,a),a.currentTarget=null}function St(a,e){e=(e&4)!==0;for(var n=0;n<a.length;n++){var i=a[n],s=i.event;i=i.listeners;a:{var u=void 0;if(e)for(var l=i.length-1;0<=l;l--){var m=i[l],S=m.instance,w=m.currentTarget;if(m=m.listener,S!==u&&s.isPropagationStopped())break a;ht(s,m,w),u=S}else for(l=0;l<i.length;l++){if(m=i[l],S=m.instance,w=m.currentTarget,m=m.listener,S!==u&&s.isPropagationStopped())break a;ht(s,m,w),u=S}}}if(Xe)throw a=V2,Xe=!1,V2=null,a}function S0(a,e){var n=e[gr];n===void 0&&(n=e[gr]=new Set);var i=a+"__bubble";n.has(i)||(Ct(e,a,2,!1),n.add(i))}function mr(a,e,n){var i=0;e&&(i|=4),Ct(n,a,i,e)}var hn="_reactListening"+Math.random().toString(36).slice(2);function Ce(a){if(!a[hn]){a[hn]=!0,c.forEach(function(n){n!=="selectionchange"&&(N8.has(n)||mr(n,!1,a),mr(n,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[hn]||(e[hn]=!0,mr("selectionchange",!1,e))}}function Ct(a,e,n,i){switch(_9(e)){case 1:var s=Ku;break;case 4:s=Du;break;default:s=X2}n=s.bind(null,e,n,a),s=void 0,!z2||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?a.addEventListener(e,n,{capture:!0,passive:s}):a.addEventListener(e,n,!0):s!==void 0?a.addEventListener(e,n,{passive:s}):a.addEventListener(e,n,!1)}function hr(a,e,n,i,s){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)a:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var m=i.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var S=l.tag;if((S===3||S===4)&&(S=l.stateNode.containerInfo,S===s||S.nodeType===8&&S.parentNode===s))return;l=l.return}for(;m!==null;){if(l=i1(m),l===null)return;if(S=l.tag,S===5||S===6){i=u=l;continue a}m=m.parentNode}}i=i.return}N9(function(){var w=u,O=_2(n),L=[];a:{var G=pt.get(a);if(G!==void 0){var Z=nr,D=a;switch(a){case"keypress":if(ln(n)===0)break a;case"keydown":case"keyup":Z=a8;break;case"focusin":D="focus",Z=tr;break;case"focusout":D="blur",Z=tr;break;case"beforeblur":case"afterblur":Z=tr;break;case"click":if(n.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=z9;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=_u;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=r8;break;case lt:case ft:case Et:Z=zu;break;case dt:Z=t8;break;case"scroll":Z=ku;break;case"wheel":Z=o8;break;case"copy":case"cut":case"paste":Z=Yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Y9}var k=(e&4)!==0,B0=!k&&a==="scroll",b=k?G!==null?G+"Capture":null:G;k=[];for(var C=w,g;C!==null;){g=C;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,b!==null&&(P=ee(C,b),P!=null&&k.push(We(C,P,g)))),B0)break;C=C.return}0<k.length&&(G=new Z(G,D,null,n,O),L.push({event:G,listeners:k}))}}if((e&7)===0){a:{if(G=a==="mouseover"||a==="pointerover",Z=a==="mouseout"||a==="pointerout",G&&n!==U2&&(D=n.relatedTarget||n.fromElement)&&(i1(D)||D[va]))break a;if((Z||G)&&(G=O.window===O?O:(G=O.ownerDocument)?G.defaultView||G.parentWindow:window,Z?(D=n.relatedTarget||n.toElement,Z=w,D=D?i1(D):null,D!==null&&(B0=r1(D),D!==B0||D.tag!==5&&D.tag!==6)&&(D=null)):(Z=null,D=w),Z!==D)){if(k=z9,P="onMouseLeave",b="onMouseEnter",C="mouse",(a==="pointerout"||a==="pointerover")&&(k=Y9,P="onPointerLeave",b="onPointerEnter",C="pointer"),B0=Z==null?G:O1(Z),g=D==null?G:O1(D),G=new k(P,C+"leave",Z,n,O),G.target=B0,G.relatedTarget=g,P=null,i1(O)===w&&(k=new k(b,C+"enter",D,n,O),k.target=g,k.relatedTarget=B0,P=k),B0=P,Z&&D)e:{for(k=Z,b=D,C=0,g=k;g;g=G1(g))C++;for(g=0,P=b;P;P=G1(P))g++;for(;0<C-g;)k=G1(k),C--;for(;0<g-C;)b=G1(b),g--;for(;C--;){if(k===b||b!==null&&k===b.alternate)break e;k=G1(k),b=G1(b)}k=null}else k=null;Z!==null&&Wt(L,G,Z,k,!1),D!==null&&B0!==null&&Wt(L,B0,D,k,!0)}}a:{if(G=w?O1(w):window,Z=G.nodeName&&G.nodeName.toLowerCase(),Z==="select"||Z==="input"&&G.type==="file")var U=d8;else if(X9(G))if(et)U=S8;else{U=m8;var Y=p8}else(Z=G.nodeName)&&Z.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(U=h8);if(U&&(U=U(a,w))){at(L,U,n,O);break a}Y&&Y(a,G,w),a==="focusout"&&(Y=G._wrapperState)&&Y.controlled&&G.type==="number"&&R2(G,"number",G.value)}switch(Y=w?O1(w):window,a){case"focusin":(X9(Y)||Y.contentEditable==="true")&&(B1=Y,lr=w,he=null);break;case"focusout":he=lr=B1=null;break;case"mousedown":fr=!0;break;case"contextmenu":case"mouseup":case"dragend":fr=!1,ct(L,n,O);break;case"selectionchange":if(M8)break;case"keydown":case"keyup":ct(L,n,O)}var Q;if(or)a:{switch(a){case"compositionstart":var j="onCompositionStart";break a;case"compositionend":j="onCompositionEnd";break a;case"compositionupdate":j="onCompositionUpdate";break a}j=void 0}else w1?$9(a,n)&&(j="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Q9&&n.locale!=="ko"&&(w1||j!=="onCompositionStart"?j==="onCompositionEnd"&&w1&&(Q=F9()):(_a=O,er="value"in _a?_a.value:_a.textContent,w1=!0)),Y=Sn(w,j),0<Y.length&&(j=new V9(j,a,null,n,O),L.push({event:j,listeners:Y}),Q?j.data=Q:(Q=q9(n),Q!==null&&(j.data=Q)))),(Q=c8?A8(a,n):l8(a,n))&&(w=Sn(w,"onBeforeInput"),0<w.length&&(O=new V9("onBeforeInput","beforeinput",null,n,O),L.push({event:O,listeners:w}),O.data=Q))}St(L,e)})}function We(a,e,n){return{instance:a,listener:e,currentTarget:n}}function Sn(a,e){for(var n=e+"Capture",i=[];a!==null;){var s=a,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=ee(a,n),u!=null&&i.unshift(We(a,u,s)),u=ee(a,e),u!=null&&i.push(We(a,u,s))),a=a.return}return i}function G1(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function Wt(a,e,n,i,s){for(var u=e._reactName,l=[];n!==null&&n!==i;){var m=n,S=m.alternate,w=m.stateNode;if(S!==null&&S===i)break;m.tag===5&&w!==null&&(m=w,s?(S=ee(n,u),S!=null&&l.unshift(We(n,S,m))):s||(S=ee(n,u),S!=null&&l.push(We(n,S,m)))),n=n.return}l.length!==0&&a.push({event:e,listeners:l})}var y8=/\r\n?/g,w8=/\u0000|\uFFFD/g;function Mt(a){return(typeof a=="string"?a:""+a).replace(y8,`
`).replace(w8,"")}function Cn(a,e,n){if(e=Mt(e),Mt(a)!==e&&n)throw Error(o(425))}function Wn(){}var Sr=null,Cr=null;function Wr(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mr=typeof setTimeout=="function"?setTimeout:void 0,B8=typeof clearTimeout=="function"?clearTimeout:void 0,bt=typeof Promise=="function"?Promise:void 0,v8=typeof queueMicrotask=="function"?queueMicrotask:typeof bt<"u"?function(a){return bt.resolve(null).then(a).catch(G8)}:Mr;function G8(a){setTimeout(function(){throw a})}function br(a,e){var n=e,i=0;do{var s=n.nextSibling;if(a.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){a.removeChild(s),Ae(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ae(e)}function Ha(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return a}function gt(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return a;e--}else n==="/$"&&e++}a=a.previousSibling}return null}var T1=Math.random().toString(36).slice(2),ba="__reactFiber$"+T1,Me="__reactProps$"+T1,va="__reactContainer$"+T1,gr="__reactEvents$"+T1,T8="__reactListeners$"+T1,O8="__reactHandles$"+T1;function i1(a){var e=a[ba];if(e)return e;for(var n=a.parentNode;n;){if(e=n[va]||n[ba]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(a=gt(a);a!==null;){if(n=a[ba])return n;a=gt(a)}return e}a=n,n=a.parentNode}return null}function be(a){return a=a[ba]||a[va],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function O1(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(o(33))}function Mn(a){return a[Me]||null}var Nr=[],L1=-1;function za(a){return{current:a}}function C0(a){0>L1||(a.current=Nr[L1],Nr[L1]=null,L1--)}function h0(a,e){L1++,Nr[L1]=a.current,a.current=e}var Va={},D0=za(Va),z0=za(!1),t1=Va;function I1(a,e){var n=a.type.contextTypes;if(!n)return Va;var i=a.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=e[u];return i&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=s),s}function V0(a){return a=a.childContextTypes,a!=null}function bn(){C0(z0),C0(D0)}function Nt(a,e,n){if(D0.current!==Va)throw Error(o(168));h0(D0,e),h0(z0,n)}function yt(a,e,n){var i=a.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(o(108,m0(a)||"Unknown",s));return I({},n,i)}function gn(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Va,t1=D0.current,h0(D0,a),h0(z0,z0.current),!0}function wt(a,e,n){var i=a.stateNode;if(!i)throw Error(o(169));n?(a=yt(a,e,t1),i.__reactInternalMemoizedMergedChildContext=a,C0(z0),C0(D0),h0(D0,a)):C0(z0),h0(z0,n)}var Ga=null,Nn=!1,yr=!1;function Bt(a){Ga===null?Ga=[a]:Ga.push(a)}function L8(a){Nn=!0,Bt(a)}function Ya(){if(!yr&&Ga!==null){yr=!0;var a=0,e=l0;try{var n=Ga;for(l0=1;a<n.length;a++){var i=n[a];do i=i(!0);while(i!==null)}Ga=null,Nn=!1}catch(s){throw Ga!==null&&(Ga=Ga.slice(a+1)),G9(Y2,Ya),s}finally{l0=e,yr=!1}}return null}var P1=[],x1=0,yn=null,wn=0,ta=[],sa=0,s1=null,Ta=1,Oa="";function o1(a,e){P1[x1++]=wn,P1[x1++]=yn,yn=a,wn=e}function vt(a,e,n){ta[sa++]=Ta,ta[sa++]=Oa,ta[sa++]=s1,s1=a;var i=Ta;a=Oa;var s=32-la(i)-1;i&=~(1<<s),n+=1;var u=32-la(e)+s;if(30<u){var l=s-s%5;u=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Ta=1<<32-la(e)+s|n<<s|i,Oa=u+a}else Ta=1<<u|n<<s|i,Oa=a}function wr(a){a.return!==null&&(o1(a,1),vt(a,1,0))}function Br(a){for(;a===yn;)yn=P1[--x1],P1[x1]=null,wn=P1[--x1],P1[x1]=null;for(;a===s1;)s1=ta[--sa],ta[sa]=null,Oa=ta[--sa],ta[sa]=null,Ta=ta[--sa],ta[sa]=null}var aa=null,ea=null,b0=!1,Ea=null;function Gt(a,e){var n=Aa(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=a,e=a.deletions,e===null?(a.deletions=[n],a.flags|=16):e.push(n)}function Tt(a,e){switch(a.tag){case 5:var n=a.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(a.stateNode=e,aa=a,ea=Ha(e.firstChild),!0):!1;case 6:return e=a.pendingProps===""||e.nodeType!==3?null:e,e!==null?(a.stateNode=e,aa=a,ea=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=s1!==null?{id:Ta,overflow:Oa}:null,a.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Aa(18,null,null,0),n.stateNode=e,n.return=a,a.child=n,aa=a,ea=null,!0):!1;default:return!1}}function vr(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Gr(a){if(b0){var e=ea;if(e){var n=e;if(!Tt(a,e)){if(vr(a))throw Error(o(418));e=Ha(n.nextSibling);var i=aa;e&&Tt(a,e)?Gt(i,n):(a.flags=a.flags&-4097|2,b0=!1,aa=a)}}else{if(vr(a))throw Error(o(418));a.flags=a.flags&-4097|2,b0=!1,aa=a}}}function Ot(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;aa=a}function Bn(a){if(a!==aa)return!1;if(!b0)return Ot(a),b0=!0,!1;var e;if((e=a.tag!==3)&&!(e=a.tag!==5)&&(e=a.type,e=e!=="head"&&e!=="body"&&!Wr(a.type,a.memoizedProps)),e&&(e=ea)){if(vr(a))throw Lt(),Error(o(418));for(;e;)Gt(a,e),e=Ha(e.nextSibling)}if(Ot(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a:{for(a=a.nextSibling,e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="/$"){if(e===0){ea=Ha(a.nextSibling);break a}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}a=a.nextSibling}ea=null}}else ea=aa?Ha(a.stateNode.nextSibling):null;return!0}function Lt(){for(var a=ea;a;)a=Ha(a.nextSibling)}function R1(){ea=aa=null,b0=!1}function Tr(a){Ea===null?Ea=[a]:Ea.push(a)}var I8=J.ReactCurrentBatchConfig;function ge(a,e,n){if(a=n.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var i=n.stateNode}if(!i)throw Error(o(147,a));var s=i,u=""+a;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===u?e.ref:(e=function(l){var m=s.refs;l===null?delete m[u]:m[u]=l},e._stringRef=u,e)}if(typeof a!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,a))}return a}function vn(a,e){throw a=Object.prototype.toString.call(e),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a))}function It(a){var e=a._init;return e(a._payload)}function Pt(a){function e(b,C){if(a){var g=b.deletions;g===null?(b.deletions=[C],b.flags|=16):g.push(C)}}function n(b,C){if(!a)return null;for(;C!==null;)e(b,C),C=C.sibling;return null}function i(b,C){for(b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function s(b,C){return b=e1(b,C),b.index=0,b.sibling=null,b}function u(b,C,g){return b.index=g,a?(g=b.alternate,g!==null?(g=g.index,g<C?(b.flags|=2,C):g):(b.flags|=2,C)):(b.flags|=1048576,C)}function l(b){return a&&b.alternate===null&&(b.flags|=2),b}function m(b,C,g,P){return C===null||C.tag!==6?(C=Mi(g,b.mode,P),C.return=b,C):(C=s(C,g),C.return=b,C)}function S(b,C,g,P){var U=g.type;return U===c0?O(b,C,g.props.children,P,g.key):C!==null&&(C.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===R&&It(U)===C.type)?(P=s(C,g.props),P.ref=ge(b,C,g),P.return=b,P):(P=qn(g.type,g.key,g.props,null,b.mode,P),P.ref=ge(b,C,g),P.return=b,P)}function w(b,C,g,P){return C===null||C.tag!==4||C.stateNode.containerInfo!==g.containerInfo||C.stateNode.implementation!==g.implementation?(C=bi(g,b.mode,P),C.return=b,C):(C=s(C,g.children||[]),C.return=b,C)}function O(b,C,g,P,U){return C===null||C.tag!==7?(C=p1(g,b.mode,P,U),C.return=b,C):(C=s(C,g),C.return=b,C)}function L(b,C,g){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Mi(""+C,b.mode,g),C.return=b,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return g=qn(C.type,C.key,C.props,null,b.mode,g),g.ref=ge(b,null,C),g.return=b,g;case q:return C=bi(C,b.mode,g),C.return=b,C;case R:var P=C._init;return L(b,P(C._payload),g)}if(q1(C)||_(C))return C=p1(C,b.mode,g,null),C.return=b,C;vn(b,C)}return null}function G(b,C,g,P){var U=C!==null?C.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return U!==null?null:m(b,C,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case X:return g.key===U?S(b,C,g,P):null;case q:return g.key===U?w(b,C,g,P):null;case R:return U=g._init,G(b,C,U(g._payload),P)}if(q1(g)||_(g))return U!==null?null:O(b,C,g,P,null);vn(b,g)}return null}function Z(b,C,g,P,U){if(typeof P=="string"&&P!==""||typeof P=="number")return b=b.get(g)||null,m(C,b,""+P,U);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case X:return b=b.get(P.key===null?g:P.key)||null,S(C,b,P,U);case q:return b=b.get(P.key===null?g:P.key)||null,w(C,b,P,U);case R:var Y=P._init;return Z(b,C,g,Y(P._payload),U)}if(q1(P)||_(P))return b=b.get(g)||null,O(C,b,P,U,null);vn(C,P)}return null}function D(b,C,g,P){for(var U=null,Y=null,Q=C,j=C=0,R0=null;Q!==null&&j<g.length;j++){Q.index>j?(R0=Q,Q=null):R0=Q.sibling;var u0=G(b,Q,g[j],P);if(u0===null){Q===null&&(Q=R0);break}a&&Q&&u0.alternate===null&&e(b,Q),C=u(u0,C,j),Y===null?U=u0:Y.sibling=u0,Y=u0,Q=R0}if(j===g.length)return n(b,Q),b0&&o1(b,j),U;if(Q===null){for(;j<g.length;j++)Q=L(b,g[j],P),Q!==null&&(C=u(Q,C,j),Y===null?U=Q:Y.sibling=Q,Y=Q);return b0&&o1(b,j),U}for(Q=i(b,Q);j<g.length;j++)R0=Z(Q,b,j,g[j],P),R0!==null&&(a&&R0.alternate!==null&&Q.delete(R0.key===null?j:R0.key),C=u(R0,C,j),Y===null?U=R0:Y.sibling=R0,Y=R0);return a&&Q.forEach(function(n1){return e(b,n1)}),b0&&o1(b,j),U}function k(b,C,g,P){var U=_(g);if(typeof U!="function")throw Error(o(150));if(g=U.call(g),g==null)throw Error(o(151));for(var Y=U=null,Q=C,j=C=0,R0=null,u0=g.next();Q!==null&&!u0.done;j++,u0=g.next()){Q.index>j?(R0=Q,Q=null):R0=Q.sibling;var n1=G(b,Q,u0.value,P);if(n1===null){Q===null&&(Q=R0);break}a&&Q&&n1.alternate===null&&e(b,Q),C=u(n1,C,j),Y===null?U=n1:Y.sibling=n1,Y=n1,Q=R0}if(u0.done)return n(b,Q),b0&&o1(b,j),U;if(Q===null){for(;!u0.done;j++,u0=g.next())u0=L(b,u0.value,P),u0!==null&&(C=u(u0,C,j),Y===null?U=u0:Y.sibling=u0,Y=u0);return b0&&o1(b,j),U}for(Q=i(b,Q);!u0.done;j++,u0=g.next())u0=Z(Q,b,j,u0.value,P),u0!==null&&(a&&u0.alternate!==null&&Q.delete(u0.key===null?j:u0.key),C=u(u0,C,j),Y===null?U=u0:Y.sibling=u0,Y=u0);return a&&Q.forEach(function(fc){return e(b,fc)}),b0&&o1(b,j),U}function B0(b,C,g,P){if(typeof g=="object"&&g!==null&&g.type===c0&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case X:a:{for(var U=g.key,Y=C;Y!==null;){if(Y.key===U){if(U=g.type,U===c0){if(Y.tag===7){n(b,Y.sibling),C=s(Y,g.props.children),C.return=b,b=C;break a}}else if(Y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===R&&It(U)===Y.type){n(b,Y.sibling),C=s(Y,g.props),C.ref=ge(b,Y,g),C.return=b,b=C;break a}n(b,Y);break}else e(b,Y);Y=Y.sibling}g.type===c0?(C=p1(g.props.children,b.mode,P,g.key),C.return=b,b=C):(P=qn(g.type,g.key,g.props,null,b.mode,P),P.ref=ge(b,C,g),P.return=b,b=P)}return l(b);case q:a:{for(Y=g.key;C!==null;){if(C.key===Y)if(C.tag===4&&C.stateNode.containerInfo===g.containerInfo&&C.stateNode.implementation===g.implementation){n(b,C.sibling),C=s(C,g.children||[]),C.return=b,b=C;break a}else{n(b,C);break}else e(b,C);C=C.sibling}C=bi(g,b.mode,P),C.return=b,b=C}return l(b);case R:return Y=g._init,B0(b,C,Y(g._payload),P)}if(q1(g))return D(b,C,g,P);if(_(g))return k(b,C,g,P);vn(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,C!==null&&C.tag===6?(n(b,C.sibling),C=s(C,g),C.return=b,b=C):(n(b,C),C=Mi(g,b.mode,P),C.return=b,b=C),l(b)):n(b,C)}return B0}var Z1=Pt(!0),xt=Pt(!1),Gn=za(null),Tn=null,K1=null,Or=null;function Lr(){Or=K1=Tn=null}function Ir(a){var e=Gn.current;C0(Gn),a._currentValue=e}function Pr(a,e,n){for(;a!==null;){var i=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),a===n)break;a=a.return}}function D1(a,e){Tn=a,Or=K1=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&e)!==0&&(Y0=!0),a.firstContext=null)}function oa(a){var e=a._currentValue;if(Or!==a)if(a={context:a,memoizedValue:e,next:null},K1===null){if(Tn===null)throw Error(o(308));K1=a,Tn.dependencies={lanes:0,firstContext:a}}else K1=K1.next=a;return e}var u1=null;function xr(a){u1===null?u1=[a]:u1.push(a)}function Rt(a,e,n,i){var s=e.interleaved;return s===null?(n.next=n,xr(e)):(n.next=s.next,s.next=n),e.interleaved=n,La(a,i)}function La(a,e){a.lanes|=e;var n=a.alternate;for(n!==null&&(n.lanes|=e),n=a,a=a.return;a!==null;)a.childLanes|=e,n=a.alternate,n!==null&&(n.childLanes|=e),n=a,a=a.return;return n.tag===3?n.stateNode:null}var Qa=!1;function Rr(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zt(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Ia(a,e){return{eventTime:a,lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(a,e,n){var i=a.updateQueue;if(i===null)return null;if(i=i.shared,(i0&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,La(a,n)}return s=i.interleaved,s===null?(e.next=e,xr(i)):(e.next=s.next,s.next=e),i.interleaved=e,La(a,n)}function On(a,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=a.pendingLanes,n|=i,e.lanes=n,j2(a,n)}}function Kt(a,e){var n=a.updateQueue,i=a.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=l:u=u.next=l,n=n.next}while(n!==null);u===null?s=u=e:u=u.next=e}else s=u=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,effects:i.effects},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=e:a.next=e,n.lastBaseUpdate=e}function Ln(a,e,n,i){var s=a.updateQueue;Qa=!1;var u=s.firstBaseUpdate,l=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var S=m,w=S.next;S.next=null,l===null?u=w:l.next=w,l=S;var O=a.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==l&&(m===null?O.firstBaseUpdate=w:m.next=w,O.lastBaseUpdate=S))}if(u!==null){var L=s.baseState;l=0,O=w=S=null,m=u;do{var G=m.lane,Z=m.eventTime;if((i&G)===G){O!==null&&(O=O.next={eventTime:Z,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});a:{var D=a,k=m;switch(G=e,Z=n,k.tag){case 1:if(D=k.payload,typeof D=="function"){L=D.call(Z,L,G);break a}L=D;break a;case 3:D.flags=D.flags&-65537|128;case 0:if(D=k.payload,G=typeof D=="function"?D.call(Z,L,G):D,G==null)break a;L=I({},L,G);break a;case 2:Qa=!0}}m.callback!==null&&m.lane!==0&&(a.flags|=64,G=s.effects,G===null?s.effects=[m]:G.push(m))}else Z={eventTime:Z,lane:G,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(w=O=Z,S=L):O=O.next=Z,l|=G;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;G=m,m=G.next,G.next=null,s.lastBaseUpdate=G,s.shared.pending=null}}while(!0);if(O===null&&(S=L),s.baseState=S,s.firstBaseUpdate=w,s.lastBaseUpdate=O,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else u===null&&(s.shared.lanes=0);l1|=l,a.lanes=l,a.memoizedState=L}}function Dt(a,e,n){if(a=e.effects,e.effects=null,a!==null)for(e=0;e<a.length;e++){var i=a[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(o(191,s));s.call(i)}}}var Ne={},ga=za(Ne),ye=za(Ne),we=za(Ne);function c1(a){if(a===Ne)throw Error(o(174));return a}function Zr(a,e){switch(h0(we,e),h0(ye,a),h0(ga,Ne),a=e.nodeType,a){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:K2(null,"");break;default:a=a===8?e.parentNode:e,e=a.namespaceURI||null,a=a.tagName,e=K2(e,a)}C0(ga),h0(ga,e)}function k1(){C0(ga),C0(ye),C0(we)}function kt(a){c1(we.current);var e=c1(ga.current),n=K2(e,a.type);e!==n&&(h0(ye,a),h0(ga,n))}function Kr(a){ye.current===a&&(C0(ga),C0(ye))}var g0=za(0);function In(a){for(var e=a;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dr=[];function kr(){for(var a=0;a<Dr.length;a++)Dr[a]._workInProgressVersionPrimary=null;Dr.length=0}var Pn=J.ReactCurrentDispatcher,Ur=J.ReactCurrentBatchConfig,A1=0,N0=null,T0=null,P0=null,xn=!1,Be=!1,ve=0,P8=0;function k0(){throw Error(o(321))}function _r(a,e){if(e===null)return!1;for(var n=0;n<e.length&&n<a.length;n++)if(!fa(a[n],e[n]))return!1;return!0}function Fr(a,e,n,i,s,u){if(A1=u,N0=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pn.current=a===null||a.memoizedState===null?K8:D8,a=n(i,s),Be){u=0;do{if(Be=!1,ve=0,25<=u)throw Error(o(301));u+=1,P0=T0=null,e.updateQueue=null,Pn.current=k8,a=n(i,s)}while(Be)}if(Pn.current=Kn,e=T0!==null&&T0.next!==null,A1=0,P0=T0=N0=null,xn=!1,e)throw Error(o(300));return a}function Hr(){var a=ve!==0;return ve=0,a}function Na(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P0===null?N0.memoizedState=P0=a:P0=P0.next=a,P0}function ua(){if(T0===null){var a=N0.alternate;a=a!==null?a.memoizedState:null}else a=T0.next;var e=P0===null?N0.memoizedState:P0.next;if(e!==null)P0=e,T0=a;else{if(a===null)throw Error(o(310));T0=a,a={memoizedState:T0.memoizedState,baseState:T0.baseState,baseQueue:T0.baseQueue,queue:T0.queue,next:null},P0===null?N0.memoizedState=P0=a:P0=P0.next=a}return P0}function Ge(a,e){return typeof e=="function"?e(a):e}function zr(a){var e=ua(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=T0,s=i.baseQueue,u=n.pending;if(u!==null){if(s!==null){var l=s.next;s.next=u.next,u.next=l}i.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,i=i.baseState;var m=l=null,S=null,w=u;do{var O=w.lane;if((A1&O)===O)S!==null&&(S=S.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),i=w.hasEagerState?w.eagerState:a(i,w.action);else{var L={lane:O,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};S===null?(m=S=L,l=i):S=S.next=L,N0.lanes|=O,l1|=O}w=w.next}while(w!==null&&w!==u);S===null?l=i:S.next=m,fa(i,e.memoizedState)||(Y0=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=S,n.lastRenderedState=i}if(a=n.interleaved,a!==null){s=a;do u=s.lane,N0.lanes|=u,l1|=u,s=s.next;while(s!==a)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vr(a){var e=ua(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=n.dispatch,s=n.pending,u=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do u=a(u,l.action),l=l.next;while(l!==s);fa(u,e.memoizedState)||(Y0=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,i]}function Ut(){}function _t(a,e){var n=N0,i=ua(),s=e(),u=!fa(i.memoizedState,s);if(u&&(i.memoizedState=s,Y0=!0),i=i.queue,Yr(zt.bind(null,n,i,a),[a]),i.getSnapshot!==e||u||P0!==null&&P0.memoizedState.tag&1){if(n.flags|=2048,Te(9,Ht.bind(null,n,i,s,e),void 0,null),x0===null)throw Error(o(349));(A1&30)!==0||Ft(n,e,s)}return s}function Ft(a,e,n){a.flags|=16384,a={getSnapshot:e,value:n},e=N0.updateQueue,e===null?(e={lastEffect:null,stores:null},N0.updateQueue=e,e.stores=[a]):(n=e.stores,n===null?e.stores=[a]:n.push(a))}function Ht(a,e,n,i){e.value=n,e.getSnapshot=i,Vt(e)&&Yt(a)}function zt(a,e,n){return n(function(){Vt(e)&&Yt(a)})}function Vt(a){var e=a.getSnapshot;a=a.value;try{var n=e();return!fa(a,n)}catch{return!0}}function Yt(a){var e=La(a,1);e!==null&&ha(e,a,1,-1)}function Qt(a){var e=Na();return typeof a=="function"&&(a=a()),e.memoizedState=e.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:a},e.queue=a,a=a.dispatch=Z8.bind(null,N0,a),[e.memoizedState,a]}function Te(a,e,n,i){return a={tag:a,create:e,destroy:n,deps:i,next:null},e=N0.updateQueue,e===null?(e={lastEffect:null,stores:null},N0.updateQueue=e,e.lastEffect=a.next=a):(n=e.lastEffect,n===null?e.lastEffect=a.next=a:(i=n.next,n.next=a,a.next=i,e.lastEffect=a)),a}function Jt(){return ua().memoizedState}function Rn(a,e,n,i){var s=Na();N0.flags|=a,s.memoizedState=Te(1|e,n,void 0,i===void 0?null:i)}function Zn(a,e,n,i){var s=ua();i=i===void 0?null:i;var u=void 0;if(T0!==null){var l=T0.memoizedState;if(u=l.destroy,i!==null&&_r(i,l.deps)){s.memoizedState=Te(e,n,u,i);return}}N0.flags|=a,s.memoizedState=Te(1|e,n,u,i)}function jt(a,e){return Rn(8390656,8,a,e)}function Yr(a,e){return Zn(2048,8,a,e)}function $t(a,e){return Zn(4,2,a,e)}function qt(a,e){return Zn(4,4,a,e)}function Xt(a,e){if(typeof e=="function")return a=a(),e(a),function(){e(null)};if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function as(a,e,n){return n=n!=null?n.concat([a]):null,Zn(4,4,Xt.bind(null,e,a),n)}function Qr(){}function es(a,e){var n=ua();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_r(e,i[1])?i[0]:(n.memoizedState=[a,e],a)}function ns(a,e){var n=ua();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_r(e,i[1])?i[0]:(a=a(),n.memoizedState=[a,e],a)}function rs(a,e,n){return(A1&21)===0?(a.baseState&&(a.baseState=!1,Y0=!0),a.memoizedState=n):(fa(n,e)||(n=I9(),N0.lanes|=n,l1|=n,a.baseState=!0),e)}function x8(a,e){var n=l0;l0=n!==0&&4>n?n:4,a(!0);var i=Ur.transition;Ur.transition={};try{a(!1),e()}finally{l0=n,Ur.transition=i}}function is(){return ua().memoizedState}function R8(a,e,n){var i=Xa(a);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ts(a))ss(e,n);else if(n=Rt(a,e,n,i),n!==null){var s=H0();ha(n,a,i,s),os(n,e,i)}}function Z8(a,e,n){var i=Xa(a),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ts(a))ss(e,s);else{var u=a.alternate;if(a.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var l=e.lastRenderedState,m=u(l,n);if(s.hasEagerState=!0,s.eagerState=m,fa(m,l)){var S=e.interleaved;S===null?(s.next=s,xr(e)):(s.next=S.next,S.next=s),e.interleaved=s;return}}catch{}finally{}n=Rt(a,e,s,i),n!==null&&(s=H0(),ha(n,a,i,s),os(n,e,i))}}function ts(a){var e=a.alternate;return a===N0||e!==null&&e===N0}function ss(a,e){Be=xn=!0;var n=a.pending;n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e}function os(a,e,n){if((n&4194240)!==0){var i=e.lanes;i&=a.pendingLanes,n|=i,e.lanes=n,j2(a,n)}}var Kn={readContext:oa,useCallback:k0,useContext:k0,useEffect:k0,useImperativeHandle:k0,useInsertionEffect:k0,useLayoutEffect:k0,useMemo:k0,useReducer:k0,useRef:k0,useState:k0,useDebugValue:k0,useDeferredValue:k0,useTransition:k0,useMutableSource:k0,useSyncExternalStore:k0,useId:k0,unstable_isNewReconciler:!1},K8={readContext:oa,useCallback:function(a,e){return Na().memoizedState=[a,e===void 0?null:e],a},useContext:oa,useEffect:jt,useImperativeHandle:function(a,e,n){return n=n!=null?n.concat([a]):null,Rn(4194308,4,Xt.bind(null,e,a),n)},useLayoutEffect:function(a,e){return Rn(4194308,4,a,e)},useInsertionEffect:function(a,e){return Rn(4,2,a,e)},useMemo:function(a,e){var n=Na();return e=e===void 0?null:e,a=a(),n.memoizedState=[a,e],a},useReducer:function(a,e,n){var i=Na();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:e},i.queue=a,a=a.dispatch=R8.bind(null,N0,a),[i.memoizedState,a]},useRef:function(a){var e=Na();return a={current:a},e.memoizedState=a},useState:Qt,useDebugValue:Qr,useDeferredValue:function(a){return Na().memoizedState=a},useTransition:function(){var a=Qt(!1),e=a[0];return a=x8.bind(null,a[1]),Na().memoizedState=a,[e,a]},useMutableSource:function(){},useSyncExternalStore:function(a,e,n){var i=N0,s=Na();if(b0){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),x0===null)throw Error(o(349));(A1&30)!==0||Ft(i,e,n)}s.memoizedState=n;var u={value:n,getSnapshot:e};return s.queue=u,jt(zt.bind(null,i,u,a),[a]),i.flags|=2048,Te(9,Ht.bind(null,i,u,n,e),void 0,null),n},useId:function(){var a=Na(),e=x0.identifierPrefix;if(b0){var n=Oa,i=Ta;n=(i&~(1<<32-la(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ve++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P8++,e=":"+e+"r"+n.toString(32)+":";return a.memoizedState=e},unstable_isNewReconciler:!1},D8={readContext:oa,useCallback:es,useContext:oa,useEffect:Yr,useImperativeHandle:as,useInsertionEffect:$t,useLayoutEffect:qt,useMemo:ns,useReducer:zr,useRef:Jt,useState:function(){return zr(Ge)},useDebugValue:Qr,useDeferredValue:function(a){var e=ua();return rs(e,T0.memoizedState,a)},useTransition:function(){var a=zr(Ge)[0],e=ua().memoizedState;return[a,e]},useMutableSource:Ut,useSyncExternalStore:_t,useId:is,unstable_isNewReconciler:!1},k8={readContext:oa,useCallback:es,useContext:oa,useEffect:Yr,useImperativeHandle:as,useInsertionEffect:$t,useLayoutEffect:qt,useMemo:ns,useReducer:Vr,useRef:Jt,useState:function(){return Vr(Ge)},useDebugValue:Qr,useDeferredValue:function(a){var e=ua();return T0===null?e.memoizedState=a:rs(e,T0.memoizedState,a)},useTransition:function(){var a=Vr(Ge)[0],e=ua().memoizedState;return[a,e]},useMutableSource:Ut,useSyncExternalStore:_t,useId:is,unstable_isNewReconciler:!1};function da(a,e){if(a&&a.defaultProps){e=I({},e),a=a.defaultProps;for(var n in a)e[n]===void 0&&(e[n]=a[n]);return e}return e}function Jr(a,e,n,i){e=a.memoizedState,n=n(i,e),n=n==null?e:I({},e,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var Dn={isMounted:function(a){return(a=a._reactInternals)?r1(a)===a:!1},enqueueSetState:function(a,e,n){a=a._reactInternals;var i=H0(),s=Xa(a),u=Ia(i,s);u.payload=e,n!=null&&(u.callback=n),e=Ja(a,u,s),e!==null&&(ha(e,a,s,i),On(e,a,s))},enqueueReplaceState:function(a,e,n){a=a._reactInternals;var i=H0(),s=Xa(a),u=Ia(i,s);u.tag=1,u.payload=e,n!=null&&(u.callback=n),e=Ja(a,u,s),e!==null&&(ha(e,a,s,i),On(e,a,s))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var n=H0(),i=Xa(a),s=Ia(n,i);s.tag=2,e!=null&&(s.callback=e),e=Ja(a,s,i),e!==null&&(ha(e,a,i,n),On(e,a,i))}};function us(a,e,n,i,s,u,l){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(i,u,l):e.prototype&&e.prototype.isPureReactComponent?!me(n,i)||!me(s,u):!0}function cs(a,e,n){var i=!1,s=Va,u=e.contextType;return typeof u=="object"&&u!==null?u=oa(u):(s=V0(e)?t1:D0.current,i=e.contextTypes,u=(i=i!=null)?I1(a,s):Va),e=new e(n,u),a.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dn,a.stateNode=e,e._reactInternals=a,i&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=s,a.__reactInternalMemoizedMaskedChildContext=u),e}function As(a,e,n,i){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==a&&Dn.enqueueReplaceState(e,e.state,null)}function jr(a,e,n,i){var s=a.stateNode;s.props=n,s.state=a.memoizedState,s.refs={},Rr(a);var u=e.contextType;typeof u=="object"&&u!==null?s.context=oa(u):(u=V0(e)?t1:D0.current,s.context=I1(a,u)),s.state=a.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Jr(a,e,u,n),s.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Dn.enqueueReplaceState(s,s.state,null),Ln(a,n,s,i),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308)}function U1(a,e){try{var n="",i=e;do n+=s0(i),i=i.return;while(i);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:a,source:e,stack:s,digest:null}}function $r(a,e,n){return{value:a,source:null,stack:n??null,digest:e??null}}function qr(a,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U8=typeof WeakMap=="function"?WeakMap:Map;function ls(a,e,n){n=Ia(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vn||(Vn=!0,Ei=i),qr(a,e)},n}function fs(a,e,n){n=Ia(-1,n),n.tag=3;var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){qr(a,e)}}var u=a.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){qr(a,e),typeof i!="function"&&($a===null?$a=new Set([this]):$a.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Es(a,e,n){var i=a.pingCache;if(i===null){i=a.pingCache=new U8;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),a=ec.bind(null,a,e,n),e.then(a,a))}function ds(a){do{var e;if((e=a.tag===13)&&(e=a.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return a;a=a.return}while(a!==null);return null}function ps(a,e,n,i,s){return(a.mode&1)===0?(a===e?a.flags|=65536:(a.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ia(-1,1),e.tag=2,Ja(n,e,1))),n.lanes|=1),a):(a.flags|=65536,a.lanes=s,a)}var _8=J.ReactCurrentOwner,Y0=!1;function F0(a,e,n,i){e.child=a===null?xt(e,null,n,i):Z1(e,a.child,n,i)}function ms(a,e,n,i,s){n=n.render;var u=e.ref;return D1(e,s),i=Fr(a,e,n,i,u,s),n=Hr(),a!==null&&!Y0?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~s,Pa(a,e,s)):(b0&&n&&wr(e),e.flags|=1,F0(a,e,i,s),e.child)}function hs(a,e,n,i,s){if(a===null){var u=n.type;return typeof u=="function"&&!Wi(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=u,Ss(a,e,u,i,s)):(a=qn(n.type,null,i,e,e.mode,s),a.ref=e.ref,a.return=e,e.child=a)}if(u=a.child,(a.lanes&s)===0){var l=u.memoizedProps;if(n=n.compare,n=n!==null?n:me,n(l,i)&&a.ref===e.ref)return Pa(a,e,s)}return e.flags|=1,a=e1(u,i),a.ref=e.ref,a.return=e,e.child=a}function Ss(a,e,n,i,s){if(a!==null){var u=a.memoizedProps;if(me(u,i)&&a.ref===e.ref)if(Y0=!1,e.pendingProps=i=u,(a.lanes&s)!==0)(a.flags&131072)!==0&&(Y0=!0);else return e.lanes=a.lanes,Pa(a,e,s)}return Xr(a,e,n,i,s)}function Cs(a,e,n){var i=e.pendingProps,s=i.children,u=a!==null?a.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},h0(F1,na),na|=n;else{if((n&1073741824)===0)return a=u!==null?u.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:a,cachePool:null,transitions:null},e.updateQueue=null,h0(F1,na),na|=a,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:n,h0(F1,na),na|=i}else u!==null?(i=u.baseLanes|n,e.memoizedState=null):i=n,h0(F1,na),na|=i;return F0(a,e,s,n),e.child}function Ws(a,e){var n=e.ref;(a===null&&n!==null||a!==null&&a.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xr(a,e,n,i,s){var u=V0(n)?t1:D0.current;return u=I1(e,u),D1(e,s),n=Fr(a,e,n,i,u,s),i=Hr(),a!==null&&!Y0?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~s,Pa(a,e,s)):(b0&&i&&wr(e),e.flags|=1,F0(a,e,n,s),e.child)}function Ms(a,e,n,i,s){if(V0(n)){var u=!0;gn(e)}else u=!1;if(D1(e,s),e.stateNode===null)Un(a,e),cs(e,n,i),jr(e,n,i,s),i=!0;else if(a===null){var l=e.stateNode,m=e.memoizedProps;l.props=m;var S=l.context,w=n.contextType;typeof w=="object"&&w!==null?w=oa(w):(w=V0(n)?t1:D0.current,w=I1(e,w));var O=n.getDerivedStateFromProps,L=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function";L||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m!==i||S!==w)&&As(e,l,i,w),Qa=!1;var G=e.memoizedState;l.state=G,Ln(e,i,l,s),S=e.memoizedState,m!==i||G!==S||z0.current||Qa?(typeof O=="function"&&(Jr(e,n,O,i),S=e.memoizedState),(m=Qa||us(e,n,m,i,G,S,w))?(L||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=S),l.props=i,l.state=S,l.context=w,i=m):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Zt(a,e),m=e.memoizedProps,w=e.type===e.elementType?m:da(e.type,m),l.props=w,L=e.pendingProps,G=l.context,S=n.contextType,typeof S=="object"&&S!==null?S=oa(S):(S=V0(n)?t1:D0.current,S=I1(e,S));var Z=n.getDerivedStateFromProps;(O=typeof Z=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m!==L||G!==S)&&As(e,l,i,S),Qa=!1,G=e.memoizedState,l.state=G,Ln(e,i,l,s);var D=e.memoizedState;m!==L||G!==D||z0.current||Qa?(typeof Z=="function"&&(Jr(e,n,Z,i),D=e.memoizedState),(w=Qa||us(e,n,w,i,G,D,S)||!1)?(O||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,D,S),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,D,S)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||m===a.memoizedProps&&G===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===a.memoizedProps&&G===a.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=D),l.props=i,l.state=D,l.context=S,i=w):(typeof l.componentDidUpdate!="function"||m===a.memoizedProps&&G===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===a.memoizedProps&&G===a.memoizedState||(e.flags|=1024),i=!1)}return ai(a,e,n,i,u,s)}function ai(a,e,n,i,s,u){Ws(a,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&wt(e,n,!1),Pa(a,e,u);i=e.stateNode,_8.current=e;var m=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,a!==null&&l?(e.child=Z1(e,a.child,null,u),e.child=Z1(e,null,m,u)):F0(a,e,m,u),e.memoizedState=i.state,s&&wt(e,n,!0),e.child}function bs(a){var e=a.stateNode;e.pendingContext?Nt(a,e.pendingContext,e.pendingContext!==e.context):e.context&&Nt(a,e.context,!1),Zr(a,e.containerInfo)}function gs(a,e,n,i,s){return R1(),Tr(s),e.flags|=256,F0(a,e,n,i),e.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ni(a){return{baseLanes:a,cachePool:null,transitions:null}}function Ns(a,e,n){var i=e.pendingProps,s=g0.current,u=!1,l=(e.flags&128)!==0,m;if((m=l)||(m=a!==null&&a.memoizedState===null?!1:(s&2)!==0),m?(u=!0,e.flags&=-129):(a===null||a.memoizedState!==null)&&(s|=1),h0(g0,s&1),a===null)return Gr(e),a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((e.mode&1)===0?e.lanes=1:a.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(l=i.children,a=i.fallback,u?(i=e.mode,u=e.child,l={mode:"hidden",children:l},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=l):u=Xn(l,i,0,null),a=p1(a,i,n,null),u.return=e,a.return=e,u.sibling=a,e.child=u,e.child.memoizedState=ni(n),e.memoizedState=ei,a):ri(e,l));if(s=a.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return F8(a,e,l,i,m,s,n);if(u){u=i.fallback,l=e.mode,s=a.child,m=s.sibling;var S={mode:"hidden",children:i.children};return(l&1)===0&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=S,e.deletions=null):(i=e1(s,S),i.subtreeFlags=s.subtreeFlags&14680064),m!==null?u=e1(m,u):(u=p1(u,l,n,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,l=a.child.memoizedState,l=l===null?ni(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},u.memoizedState=l,u.childLanes=a.childLanes&~n,e.memoizedState=ei,i}return u=a.child,a=u.sibling,i=e1(u,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,a!==null&&(n=e.deletions,n===null?(e.deletions=[a],e.flags|=16):n.push(a)),e.child=i,e.memoizedState=null,i}function ri(a,e){return e=Xn({mode:"visible",children:e},a.mode,0,null),e.return=a,a.child=e}function kn(a,e,n,i){return i!==null&&Tr(i),Z1(e,a.child,null,n),a=ri(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function F8(a,e,n,i,s,u,l){if(n)return e.flags&256?(e.flags&=-257,i=$r(Error(o(422))),kn(a,e,l,i)):e.memoizedState!==null?(e.child=a.child,e.flags|=128,null):(u=i.fallback,s=e.mode,i=Xn({mode:"visible",children:i.children},s,0,null),u=p1(u,s,l,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,(e.mode&1)!==0&&Z1(e,a.child,null,l),e.child.memoizedState=ni(l),e.memoizedState=ei,u);if((e.mode&1)===0)return kn(a,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var m=i.dgst;return i=m,u=Error(o(419)),i=$r(u,i,void 0),kn(a,e,l,i)}if(m=(l&a.childLanes)!==0,Y0||m){if(i=x0,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|l))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,La(a,s),ha(i,a,s,-1))}return Ci(),i=$r(Error(o(421))),kn(a,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=a.child,e=nc.bind(null,a),s._reactRetry=e,null):(a=u.treeContext,ea=Ha(s.nextSibling),aa=e,b0=!0,Ea=null,a!==null&&(ta[sa++]=Ta,ta[sa++]=Oa,ta[sa++]=s1,Ta=a.id,Oa=a.overflow,s1=e),e=ri(e,i.children),e.flags|=4096,e)}function ys(a,e,n){a.lanes|=e;var i=a.alternate;i!==null&&(i.lanes|=e),Pr(a.return,e,n)}function ii(a,e,n,i,s){var u=a.memoizedState;u===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=s)}function ws(a,e,n){var i=e.pendingProps,s=i.revealOrder,u=i.tail;if(F0(a,e,i.children,n),i=g0.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&ys(a,n,e);else if(a.tag===19)ys(a,n,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}i&=1}if(h0(g0,i),(e.mode&1)===0)e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)a=n.alternate,a!==null&&In(a)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ii(e,!1,s,n,u);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(a=s.alternate,a!==null&&In(a)===null){e.child=s;break}a=s.sibling,s.sibling=n,n=s,s=a}ii(e,!0,n,null,u);break;case"together":ii(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Un(a,e){(e.mode&1)===0&&a!==null&&(a.alternate=null,e.alternate=null,e.flags|=2)}function Pa(a,e,n){if(a!==null&&(e.dependencies=a.dependencies),l1|=e.lanes,(n&e.childLanes)===0)return null;if(a!==null&&e.child!==a.child)throw Error(o(153));if(e.child!==null){for(a=e.child,n=e1(a,a.pendingProps),e.child=n,n.return=e;a.sibling!==null;)a=a.sibling,n=n.sibling=e1(a,a.pendingProps),n.return=e;n.sibling=null}return e.child}function H8(a,e,n){switch(e.tag){case 3:bs(e),R1();break;case 5:kt(e);break;case 1:V0(e.type)&&gn(e);break;case 4:Zr(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;h0(Gn,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(h0(g0,g0.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Ns(a,e,n):(h0(g0,g0.current&1),a=Pa(a,e,n),a!==null?a.sibling:null);h0(g0,g0.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(a.flags&128)!==0){if(i)return ws(a,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),h0(g0,g0.current),i)break;return null;case 22:case 23:return e.lanes=0,Cs(a,e,n)}return Pa(a,e,n)}var Bs,ti,vs,Gs;Bs=function(a,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)a.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ti=function(){},vs=function(a,e,n,i){var s=a.memoizedProps;if(s!==i){a=e.stateNode,c1(ga.current);var u=null;switch(n){case"input":s=P2(a,s),i=P2(a,i),u=[];break;case"select":s=I({},s,{value:void 0}),i=I({},i,{value:void 0}),u=[];break;case"textarea":s=Z2(a,s),i=Z2(a,i),u=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(a.onclick=Wn)}D2(n,i);var l;n=null;for(w in s)if(!i.hasOwnProperty(w)&&s.hasOwnProperty(w)&&s[w]!=null)if(w==="style"){var m=s[w];for(l in m)m.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(A.hasOwnProperty(w)?u||(u=[]):(u=u||[]).push(w,null));for(w in i){var S=i[w];if(m=s!=null?s[w]:void 0,i.hasOwnProperty(w)&&S!==m&&(S!=null||m!=null))if(w==="style")if(m){for(l in m)!m.hasOwnProperty(l)||S&&S.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in S)S.hasOwnProperty(l)&&m[l]!==S[l]&&(n||(n={}),n[l]=S[l])}else n||(u||(u=[]),u.push(w,n)),n=S;else w==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,m=m?m.__html:void 0,S!=null&&m!==S&&(u=u||[]).push(w,S)):w==="children"?typeof S!="string"&&typeof S!="number"||(u=u||[]).push(w,""+S):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(A.hasOwnProperty(w)?(S!=null&&w==="onScroll"&&S0("scroll",a),u||m===S||(u=[])):(u=u||[]).push(w,S))}n&&(u=u||[]).push("style",n);var w=u;(e.updateQueue=w)&&(e.flags|=4)}},Gs=function(a,e,n,i){n!==i&&(e.flags|=4)};function Oe(a,e){if(!b0)switch(a.tailMode){case"hidden":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:i.sibling=null}}function U0(a){var e=a.alternate!==null&&a.alternate.child===a.child,n=0,i=0;if(e)for(var s=a.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=a,s=s.sibling;else for(s=a.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=a,s=s.sibling;return a.subtreeFlags|=i,a.childLanes=n,e}function z8(a,e,n){var i=e.pendingProps;switch(Br(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U0(e),null;case 1:return V0(e.type)&&bn(),U0(e),null;case 3:return i=e.stateNode,k1(),C0(z0),C0(D0),kr(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(a===null||a.child===null)&&(Bn(e)?e.flags|=4:a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ea!==null&&(mi(Ea),Ea=null))),ti(a,e),U0(e),null;case 5:Kr(e);var s=c1(we.current);if(n=e.type,a!==null&&e.stateNode!=null)vs(a,e,n,i,s),a.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(o(166));return U0(e),null}if(a=c1(ga.current),Bn(e)){i=e.stateNode,n=e.type;var u=e.memoizedProps;switch(i[ba]=e,i[Me]=u,a=(e.mode&1)!==0,n){case"dialog":S0("cancel",i),S0("close",i);break;case"iframe":case"object":case"embed":S0("load",i);break;case"video":case"audio":for(s=0;s<Se.length;s++)S0(Se[s],i);break;case"source":S0("error",i);break;case"img":case"image":case"link":S0("error",i),S0("load",i);break;case"details":S0("toggle",i);break;case"input":c9(i,u),S0("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},S0("invalid",i);break;case"textarea":f9(i,u),S0("invalid",i)}D2(n,u),s=null;for(var l in u)if(u.hasOwnProperty(l)){var m=u[l];l==="children"?typeof m=="string"?i.textContent!==m&&(u.suppressHydrationWarning!==!0&&Cn(i.textContent,m,a),s=["children",m]):typeof m=="number"&&i.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&Cn(i.textContent,m,a),s=["children",""+m]):A.hasOwnProperty(l)&&m!=null&&l==="onScroll"&&S0("scroll",i)}switch(n){case"input":Je(i),l9(i,u,!0);break;case"textarea":Je(i),d9(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Wn)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=p9(n)),a==="http://www.w3.org/1999/xhtml"?n==="script"?(a=l.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof i.is=="string"?a=l.createElement(n,{is:i.is}):(a=l.createElement(n),n==="select"&&(l=a,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):a=l.createElementNS(a,n),a[ba]=e,a[Me]=i,Bs(a,e,!1,!1),e.stateNode=a;a:{switch(l=k2(n,i),n){case"dialog":S0("cancel",a),S0("close",a),s=i;break;case"iframe":case"object":case"embed":S0("load",a),s=i;break;case"video":case"audio":for(s=0;s<Se.length;s++)S0(Se[s],a);s=i;break;case"source":S0("error",a),s=i;break;case"img":case"image":case"link":S0("error",a),S0("load",a),s=i;break;case"details":S0("toggle",a),s=i;break;case"input":c9(a,i),s=P2(a,i),S0("invalid",a);break;case"option":s=i;break;case"select":a._wrapperState={wasMultiple:!!i.multiple},s=I({},i,{value:void 0}),S0("invalid",a);break;case"textarea":f9(a,i),s=Z2(a,i),S0("invalid",a);break;default:s=i}D2(n,s),m=s;for(u in m)if(m.hasOwnProperty(u)){var S=m[u];u==="style"?S9(a,S):u==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&m9(a,S)):u==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&X1(a,S):typeof S=="number"&&X1(a,""+S):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(A.hasOwnProperty(u)?S!=null&&u==="onScroll"&&S0("scroll",a):S!=null&&t0(a,u,S,l))}switch(n){case"input":Je(a),l9(a,i,!1);break;case"textarea":Je(a),d9(a);break;case"option":i.value!=null&&a.setAttribute("value",""+A0(i.value));break;case"select":a.multiple=!!i.multiple,u=i.value,u!=null?M1(a,!!i.multiple,u,!1):i.defaultValue!=null&&M1(a,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(a.onclick=Wn)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break a;case"img":i=!0;break a;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return U0(e),null;case 6:if(a&&e.stateNode!=null)Gs(a,e,a.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(o(166));if(n=c1(we.current),c1(ga.current),Bn(e)){if(i=e.stateNode,n=e.memoizedProps,i[ba]=e,(u=i.nodeValue!==n)&&(a=aa,a!==null))switch(a.tag){case 3:Cn(i.nodeValue,n,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&Cn(i.nodeValue,n,(a.mode&1)!==0)}u&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ba]=e,e.stateNode=i}return U0(e),null;case 13:if(C0(g0),i=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(b0&&ea!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Lt(),R1(),e.flags|=98560,u=!1;else if(u=Bn(e),i!==null&&i.dehydrated!==null){if(a===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ba]=e}else R1(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;U0(e),u=!1}else Ea!==null&&(mi(Ea),Ea=null),u=!0;if(!u)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(a!==null&&a.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(a===null||(g0.current&1)!==0?O0===0&&(O0=3):Ci())),e.updateQueue!==null&&(e.flags|=4),U0(e),null);case 4:return k1(),ti(a,e),a===null&&Ce(e.stateNode.containerInfo),U0(e),null;case 10:return Ir(e.type._context),U0(e),null;case 17:return V0(e.type)&&bn(),U0(e),null;case 19:if(C0(g0),u=e.memoizedState,u===null)return U0(e),null;if(i=(e.flags&128)!==0,l=u.rendering,l===null)if(i)Oe(u,!1);else{if(O0!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(l=In(a),l!==null){for(e.flags|=128,Oe(u,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)u=n,a=i,u.flags&=14680066,l=u.alternate,l===null?(u.childLanes=0,u.lanes=a,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=l.childLanes,u.lanes=l.lanes,u.child=l.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=l.memoizedProps,u.memoizedState=l.memoizedState,u.updateQueue=l.updateQueue,u.type=l.type,a=l.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n=n.sibling;return h0(g0,g0.current&1|2),e.child}a=a.sibling}u.tail!==null&&w0()>H1&&(e.flags|=128,i=!0,Oe(u,!1),e.lanes=4194304)}else{if(!i)if(a=In(l),a!==null){if(e.flags|=128,i=!0,n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oe(u,!0),u.tail===null&&u.tailMode==="hidden"&&!l.alternate&&!b0)return U0(e),null}else 2*w0()-u.renderingStartTime>H1&&n!==1073741824&&(e.flags|=128,i=!0,Oe(u,!1),e.lanes=4194304);u.isBackwards?(l.sibling=e.child,e.child=l):(n=u.last,n!==null?n.sibling=l:e.child=l,u.last=l)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=w0(),e.sibling=null,n=g0.current,h0(g0,i?n&1|2:n&1),e):(U0(e),null);case 22:case 23:return Si(),i=e.memoizedState!==null,a!==null&&a.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(na&1073741824)!==0&&(U0(e),e.subtreeFlags&6&&(e.flags|=8192)):U0(e),null;case 24:return null;case 25:return null}throw Error(o(156,e.tag))}function V8(a,e){switch(Br(e),e.tag){case 1:return V0(e.type)&&bn(),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return k1(),C0(z0),C0(D0),kr(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 5:return Kr(e),null;case 13:if(C0(g0),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(o(340));R1()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return C0(g0),null;case 4:return k1(),null;case 10:return Ir(e.type._context),null;case 22:case 23:return Si(),null;case 24:return null;default:return null}}var _n=!1,_0=!1,Y8=typeof WeakSet=="function"?WeakSet:Set,K=null;function _1(a,e){var n=a.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){y0(a,e,i)}else n.current=null}function si(a,e,n){try{n()}catch(i){y0(a,e,i)}}var Ts=!1;function Q8(a,e){if(Sr=un,a=ut(),Ar(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else a:{n=(n=a.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break a}var l=0,m=-1,S=-1,w=0,O=0,L=a,G=null;e:for(;;){for(var Z;L!==n||s!==0&&L.nodeType!==3||(m=l+s),L!==u||i!==0&&L.nodeType!==3||(S=l+i),L.nodeType===3&&(l+=L.nodeValue.length),(Z=L.firstChild)!==null;)G=L,L=Z;for(;;){if(L===a)break e;if(G===n&&++w===s&&(m=l),G===u&&++O===i&&(S=l),(Z=L.nextSibling)!==null)break;L=G,G=L.parentNode}L=Z}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cr={focusedElem:a,selectionRange:n},un=!1,K=e;K!==null;)if(e=K,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,K=a;else for(;K!==null;){e=K;try{var D=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var k=D.memoizedProps,B0=D.memoizedState,b=e.stateNode,C=b.getSnapshotBeforeUpdate(e.elementType===e.type?k:da(e.type,k),B0);b.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(P){y0(e,e.return,P)}if(a=e.sibling,a!==null){a.return=e.return,K=a;break}K=e.return}return D=Ts,Ts=!1,D}function Le(a,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&a)===a){var u=s.destroy;s.destroy=void 0,u!==void 0&&si(e,n,u)}s=s.next}while(s!==i)}}function Fn(a,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&a)===a){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function oi(a){var e=a.ref;if(e!==null){var n=a.stateNode;switch(a.tag){case 5:a=n;break;default:a=n}typeof e=="function"?e(a):e.current=a}}function Os(a){var e=a.alternate;e!==null&&(a.alternate=null,Os(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&(delete e[ba],delete e[Me],delete e[gr],delete e[T8],delete e[O8])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Ls(a){return a.tag===5||a.tag===3||a.tag===4}function Is(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Ls(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function ui(a,e,n){var i=a.tag;if(i===5||i===6)a=a.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(a,e):n.insertBefore(a,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(a,n)):(e=n,e.appendChild(a)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wn));else if(i!==4&&(a=a.child,a!==null))for(ui(a,e,n),a=a.sibling;a!==null;)ui(a,e,n),a=a.sibling}function ci(a,e,n){var i=a.tag;if(i===5||i===6)a=a.stateNode,e?n.insertBefore(a,e):n.appendChild(a);else if(i!==4&&(a=a.child,a!==null))for(ci(a,e,n),a=a.sibling;a!==null;)ci(a,e,n),a=a.sibling}var Z0=null,pa=!1;function ja(a,e,n){for(n=n.child;n!==null;)Ps(a,e,n),n=n.sibling}function Ps(a,e,n){if(Ma&&typeof Ma.onCommitFiberUnmount=="function")try{Ma.onCommitFiberUnmount(en,n)}catch{}switch(n.tag){case 5:_0||_1(n,e);case 6:var i=Z0,s=pa;Z0=null,ja(a,e,n),Z0=i,pa=s,Z0!==null&&(pa?(a=Z0,n=n.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)):Z0.removeChild(n.stateNode));break;case 18:Z0!==null&&(pa?(a=Z0,n=n.stateNode,a.nodeType===8?br(a.parentNode,n):a.nodeType===1&&br(a,n),Ae(a)):br(Z0,n.stateNode));break;case 4:i=Z0,s=pa,Z0=n.stateNode.containerInfo,pa=!0,ja(a,e,n),Z0=i,pa=s;break;case 0:case 11:case 14:case 15:if(!_0&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var u=s,l=u.destroy;u=u.tag,l!==void 0&&((u&2)!==0||(u&4)!==0)&&si(n,e,l),s=s.next}while(s!==i)}ja(a,e,n);break;case 1:if(!_0&&(_1(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(m){y0(n,e,m)}ja(a,e,n);break;case 21:ja(a,e,n);break;case 22:n.mode&1?(_0=(i=_0)||n.memoizedState!==null,ja(a,e,n),_0=i):ja(a,e,n);break;default:ja(a,e,n)}}function xs(a){var e=a.updateQueue;if(e!==null){a.updateQueue=null;var n=a.stateNode;n===null&&(n=a.stateNode=new Y8),e.forEach(function(i){var s=rc.bind(null,a,i);n.has(i)||(n.add(i),i.then(s,s))})}}function ma(a,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var u=a,l=e,m=l;a:for(;m!==null;){switch(m.tag){case 5:Z0=m.stateNode,pa=!1;break a;case 3:Z0=m.stateNode.containerInfo,pa=!0;break a;case 4:Z0=m.stateNode.containerInfo,pa=!0;break a}m=m.return}if(Z0===null)throw Error(o(160));Ps(u,l,s),Z0=null,pa=!1;var S=s.alternate;S!==null&&(S.return=null),s.return=null}catch(w){y0(s,e,w)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rs(e,a),e=e.sibling}function Rs(a,e){var n=a.alternate,i=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(ma(e,a),ya(a),i&4){try{Le(3,a,a.return),Fn(3,a)}catch(k){y0(a,a.return,k)}try{Le(5,a,a.return)}catch(k){y0(a,a.return,k)}}break;case 1:ma(e,a),ya(a),i&512&&n!==null&&_1(n,n.return);break;case 5:if(ma(e,a),ya(a),i&512&&n!==null&&_1(n,n.return),a.flags&32){var s=a.stateNode;try{X1(s,"")}catch(k){y0(a,a.return,k)}}if(i&4&&(s=a.stateNode,s!=null)){var u=a.memoizedProps,l=n!==null?n.memoizedProps:u,m=a.type,S=a.updateQueue;if(a.updateQueue=null,S!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&A9(s,u),k2(m,l);var w=k2(m,u);for(l=0;l<S.length;l+=2){var O=S[l],L=S[l+1];O==="style"?S9(s,L):O==="dangerouslySetInnerHTML"?m9(s,L):O==="children"?X1(s,L):t0(s,O,L,w)}switch(m){case"input":x2(s,u);break;case"textarea":E9(s,u);break;case"select":var G=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?M1(s,!!u.multiple,Z,!1):G!==!!u.multiple&&(u.defaultValue!=null?M1(s,!!u.multiple,u.defaultValue,!0):M1(s,!!u.multiple,u.multiple?[]:"",!1))}s[Me]=u}catch(k){y0(a,a.return,k)}}break;case 6:if(ma(e,a),ya(a),i&4){if(a.stateNode===null)throw Error(o(162));s=a.stateNode,u=a.memoizedProps;try{s.nodeValue=u}catch(k){y0(a,a.return,k)}}break;case 3:if(ma(e,a),ya(a),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ae(e.containerInfo)}catch(k){y0(a,a.return,k)}break;case 4:ma(e,a),ya(a);break;case 13:ma(e,a),ya(a),s=a.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(fi=w0())),i&4&&xs(a);break;case 22:if(O=n!==null&&n.memoizedState!==null,a.mode&1?(_0=(w=_0)||O,ma(e,a),_0=w):ma(e,a),ya(a),i&8192){if(w=a.memoizedState!==null,(a.stateNode.isHidden=w)&&!O&&(a.mode&1)!==0)for(K=a,O=a.child;O!==null;){for(L=K=O;K!==null;){switch(G=K,Z=G.child,G.tag){case 0:case 11:case 14:case 15:Le(4,G,G.return);break;case 1:_1(G,G.return);var D=G.stateNode;if(typeof D.componentWillUnmount=="function"){i=G,n=G.return;try{e=i,D.props=e.memoizedProps,D.state=e.memoizedState,D.componentWillUnmount()}catch(k){y0(i,n,k)}}break;case 5:_1(G,G.return);break;case 22:if(G.memoizedState!==null){Ds(L);continue}}Z!==null?(Z.return=G,K=Z):Ds(L)}O=O.sibling}a:for(O=null,L=a;;){if(L.tag===5){if(O===null){O=L;try{s=L.stateNode,w?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=L.stateNode,S=L.memoizedProps.style,l=S!=null&&S.hasOwnProperty("display")?S.display:null,m.style.display=h9("display",l))}catch(k){y0(a,a.return,k)}}}else if(L.tag===6){if(O===null)try{L.stateNode.nodeValue=w?"":L.memoizedProps}catch(k){y0(a,a.return,k)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===a)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===a)break a;for(;L.sibling===null;){if(L.return===null||L.return===a)break a;O===L&&(O=null),L=L.return}O===L&&(O=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:ma(e,a),ya(a),i&4&&xs(a);break;case 21:break;default:ma(e,a),ya(a)}}function ya(a){var e=a.flags;if(e&2){try{a:{for(var n=a.return;n!==null;){if(Ls(n)){var i=n;break a}n=n.return}throw Error(o(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(X1(s,""),i.flags&=-33);var u=Is(a);ci(a,u,s);break;case 3:case 4:var l=i.stateNode.containerInfo,m=Is(a);ui(a,m,l);break;default:throw Error(o(161))}}catch(S){y0(a,a.return,S)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function J8(a,e,n){K=a,Zs(a)}function Zs(a,e,n){for(var i=(a.mode&1)!==0;K!==null;){var s=K,u=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||_n;if(!l){var m=s.alternate,S=m!==null&&m.memoizedState!==null||_0;m=_n;var w=_0;if(_n=l,(_0=S)&&!w)for(K=s;K!==null;)l=K,S=l.child,l.tag===22&&l.memoizedState!==null?ks(s):S!==null?(S.return=l,K=S):ks(s);for(;u!==null;)K=u,Zs(u),u=u.sibling;K=s,_n=m,_0=w}Ks(a)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,K=u):Ks(a)}}function Ks(a){for(;K!==null;){var e=K;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:_0||Fn(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_0)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:da(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=e.updateQueue;u!==null&&Dt(e,u,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dt(e,l,n)}break;case 5:var m=e.stateNode;if(n===null&&e.flags&4){n=m;var S=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var w=e.alternate;if(w!==null){var O=w.memoizedState;if(O!==null){var L=O.dehydrated;L!==null&&Ae(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}_0||e.flags&512&&oi(e)}catch(G){y0(e,e.return,G)}}if(e===a){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Ds(a){for(;K!==null;){var e=K;if(e===a){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function ks(a){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fn(4,e)}catch(S){y0(e,n,S)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(S){y0(e,s,S)}}var u=e.return;try{oi(e)}catch(S){y0(e,u,S)}break;case 5:var l=e.return;try{oi(e)}catch(S){y0(e,l,S)}}}catch(S){y0(e,e.return,S)}if(e===a){K=null;break}var m=e.sibling;if(m!==null){m.return=e.return,K=m;break}K=e.return}}var j8=Math.ceil,Hn=J.ReactCurrentDispatcher,Ai=J.ReactCurrentOwner,ca=J.ReactCurrentBatchConfig,i0=0,x0=null,v0=null,K0=0,na=0,F1=za(0),O0=0,Ie=null,l1=0,zn=0,li=0,Pe=null,Q0=null,fi=0,H1=1/0,xa=null,Vn=!1,Ei=null,$a=null,Yn=!1,qa=null,Qn=0,xe=0,di=null,Jn=-1,jn=0;function H0(){return(i0&6)!==0?w0():Jn!==-1?Jn:Jn=w0()}function Xa(a){return(a.mode&1)===0?1:(i0&2)!==0&&K0!==0?K0&-K0:I8.transition!==null?(jn===0&&(jn=I9()),jn):(a=l0,a!==0||(a=window.event,a=a===void 0?16:_9(a.type)),a)}function ha(a,e,n,i){if(50<xe)throw xe=0,di=null,Error(o(185));te(a,n,i),((i0&2)===0||a!==x0)&&(a===x0&&((i0&2)===0&&(zn|=n),O0===4&&a1(a,K0)),J0(a,i),n===1&&i0===0&&(e.mode&1)===0&&(H1=w0()+500,Nn&&Ya()))}function J0(a,e){var n=a.callbackNode;Iu(a,e);var i=tn(a,a===x0?K0:0);if(i===0)n!==null&&T9(n),a.callbackNode=null,a.callbackPriority=0;else if(e=i&-i,a.callbackPriority!==e){if(n!=null&&T9(n),e===1)a.tag===0?L8(_s.bind(null,a)):Bt(_s.bind(null,a)),v8(function(){(i0&6)===0&&Ya()}),n=null;else{switch(P9(i)){case 1:n=Y2;break;case 4:n=O9;break;case 16:n=an;break;case 536870912:n=L9;break;default:n=an}n=js(n,Us.bind(null,a))}a.callbackPriority=e,a.callbackNode=n}}function Us(a,e){if(Jn=-1,jn=0,(i0&6)!==0)throw Error(o(327));var n=a.callbackNode;if(z1()&&a.callbackNode!==n)return null;var i=tn(a,a===x0?K0:0);if(i===0)return null;if((i&30)!==0||(i&a.expiredLanes)!==0||e)e=$n(a,i);else{e=i;var s=i0;i0|=2;var u=Hs();(x0!==a||K0!==e)&&(xa=null,H1=w0()+500,E1(a,e));do try{X8();break}catch(m){Fs(a,m)}while(!0);Lr(),Hn.current=u,i0=s,v0!==null?e=0:(x0=null,K0=0,e=O0)}if(e!==0){if(e===2&&(s=Q2(a),s!==0&&(i=s,e=pi(a,s))),e===1)throw n=Ie,E1(a,0),a1(a,i),J0(a,w0()),n;if(e===6)a1(a,i);else{if(s=a.current.alternate,(i&30)===0&&!$8(s)&&(e=$n(a,i),e===2&&(u=Q2(a),u!==0&&(i=u,e=pi(a,u))),e===1))throw n=Ie,E1(a,0),a1(a,i),J0(a,w0()),n;switch(a.finishedWork=s,a.finishedLanes=i,e){case 0:case 1:throw Error(o(345));case 2:d1(a,Q0,xa);break;case 3:if(a1(a,i),(i&130023424)===i&&(e=fi+500-w0(),10<e)){if(tn(a,0)!==0)break;if(s=a.suspendedLanes,(s&i)!==i){H0(),a.pingedLanes|=a.suspendedLanes&s;break}a.timeoutHandle=Mr(d1.bind(null,a,Q0,xa),e);break}d1(a,Q0,xa);break;case 4:if(a1(a,i),(i&4194240)===i)break;for(e=a.eventTimes,s=-1;0<i;){var l=31-la(i);u=1<<l,l=e[l],l>s&&(s=l),i&=~u}if(i=s,i=w0()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j8(i/1960))-i,10<i){a.timeoutHandle=Mr(d1.bind(null,a,Q0,xa),i);break}d1(a,Q0,xa);break;case 5:d1(a,Q0,xa);break;default:throw Error(o(329))}}}return J0(a,w0()),a.callbackNode===n?Us.bind(null,a):null}function pi(a,e){var n=Pe;return a.current.memoizedState.isDehydrated&&(E1(a,e).flags|=256),a=$n(a,e),a!==2&&(e=Q0,Q0=n,e!==null&&mi(e)),a}function mi(a){Q0===null?Q0=a:Q0.push.apply(Q0,a)}function $8(a){for(var e=a;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!fa(u(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function a1(a,e){for(e&=~li,e&=~zn,a.suspendedLanes|=e,a.pingedLanes&=~e,a=a.expirationTimes;0<e;){var n=31-la(e),i=1<<n;a[n]=-1,e&=~i}}function _s(a){if((i0&6)!==0)throw Error(o(327));z1();var e=tn(a,0);if((e&1)===0)return J0(a,w0()),null;var n=$n(a,e);if(a.tag!==0&&n===2){var i=Q2(a);i!==0&&(e=i,n=pi(a,i))}if(n===1)throw n=Ie,E1(a,0),a1(a,e),J0(a,w0()),n;if(n===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=e,d1(a,Q0,xa),J0(a,w0()),null}function hi(a,e){var n=i0;i0|=1;try{return a(e)}finally{i0=n,i0===0&&(H1=w0()+500,Nn&&Ya())}}function f1(a){qa!==null&&qa.tag===0&&(i0&6)===0&&z1();var e=i0;i0|=1;var n=ca.transition,i=l0;try{if(ca.transition=null,l0=1,a)return a()}finally{l0=i,ca.transition=n,i0=e,(i0&6)===0&&Ya()}}function Si(){na=F1.current,C0(F1)}function E1(a,e){a.finishedWork=null,a.finishedLanes=0;var n=a.timeoutHandle;if(n!==-1&&(a.timeoutHandle=-1,B8(n)),v0!==null)for(n=v0.return;n!==null;){var i=n;switch(Br(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bn();break;case 3:k1(),C0(z0),C0(D0),kr();break;case 5:Kr(i);break;case 4:k1();break;case 13:C0(g0);break;case 19:C0(g0);break;case 10:Ir(i.type._context);break;case 22:case 23:Si()}n=n.return}if(x0=a,v0=a=e1(a.current,null),K0=na=e,O0=0,Ie=null,li=zn=l1=0,Q0=Pe=null,u1!==null){for(e=0;e<u1.length;e++)if(n=u1[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,u=n.pending;if(u!==null){var l=u.next;u.next=s,i.next=l}n.pending=i}u1=null}return a}function Fs(a,e){do{var n=v0;try{if(Lr(),Pn.current=Kn,xn){for(var i=N0.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}xn=!1}if(A1=0,P0=T0=N0=null,Be=!1,ve=0,Ai.current=null,n===null||n.return===null){O0=1,Ie=e,v0=null;break}a:{var u=a,l=n.return,m=n,S=e;if(e=K0,m.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var w=S,O=m,L=O.tag;if((O.mode&1)===0&&(L===0||L===11||L===15)){var G=O.alternate;G?(O.updateQueue=G.updateQueue,O.memoizedState=G.memoizedState,O.lanes=G.lanes):(O.updateQueue=null,O.memoizedState=null)}var Z=ds(l);if(Z!==null){Z.flags&=-257,ps(Z,l,m,u,e),Z.mode&1&&Es(u,w,e),e=Z,S=w;var D=e.updateQueue;if(D===null){var k=new Set;k.add(S),e.updateQueue=k}else D.add(S);break a}else{if((e&1)===0){Es(u,w,e),Ci();break a}S=Error(o(426))}}else if(b0&&m.mode&1){var B0=ds(l);if(B0!==null){(B0.flags&65536)===0&&(B0.flags|=256),ps(B0,l,m,u,e),Tr(U1(S,m));break a}}u=S=U1(S,m),O0!==4&&(O0=2),Pe===null?Pe=[u]:Pe.push(u),u=l;do{switch(u.tag){case 3:u.flags|=65536,e&=-e,u.lanes|=e;var b=ls(u,S,e);Kt(u,b);break a;case 1:m=S;var C=u.type,g=u.stateNode;if((u.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($a===null||!$a.has(g)))){u.flags|=65536,e&=-e,u.lanes|=e;var P=fs(u,m,e);Kt(u,P);break a}}u=u.return}while(u!==null)}Vs(n)}catch(U){e=U,v0===n&&n!==null&&(v0=n=n.return);continue}break}while(!0)}function Hs(){var a=Hn.current;return Hn.current=Kn,a===null?Kn:a}function Ci(){(O0===0||O0===3||O0===2)&&(O0=4),x0===null||(l1&268435455)===0&&(zn&268435455)===0||a1(x0,K0)}function $n(a,e){var n=i0;i0|=2;var i=Hs();(x0!==a||K0!==e)&&(xa=null,E1(a,e));do try{q8();break}catch(s){Fs(a,s)}while(!0);if(Lr(),i0=n,Hn.current=i,v0!==null)throw Error(o(261));return x0=null,K0=0,O0}function q8(){for(;v0!==null;)zs(v0)}function X8(){for(;v0!==null&&!Nu();)zs(v0)}function zs(a){var e=Js(a.alternate,a,na);a.memoizedProps=a.pendingProps,e===null?Vs(a):v0=e,Ai.current=null}function Vs(a){var e=a;do{var n=e.alternate;if(a=e.return,(e.flags&32768)===0){if(n=z8(n,e,na),n!==null){v0=n;return}}else{if(n=V8(n,e),n!==null){n.flags&=32767,v0=n;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{O0=6,v0=null;return}}if(e=e.sibling,e!==null){v0=e;return}v0=e=a}while(e!==null);O0===0&&(O0=5)}function d1(a,e,n){var i=l0,s=ca.transition;try{ca.transition=null,l0=1,ac(a,e,n,i)}finally{ca.transition=s,l0=i}return null}function ac(a,e,n,i){do z1();while(qa!==null);if((i0&6)!==0)throw Error(o(327));n=a.finishedWork;var s=a.finishedLanes;if(n===null)return null;if(a.finishedWork=null,a.finishedLanes=0,n===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var u=n.lanes|n.childLanes;if(Pu(a,u),a===x0&&(v0=x0=null,K0=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yn||(Yn=!0,js(an,function(){return z1(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=ca.transition,ca.transition=null;var l=l0;l0=1;var m=i0;i0|=4,Ai.current=null,Q8(a,n),Rs(n,a),W8(Cr),un=!!Sr,Cr=Sr=null,a.current=n,J8(n),yu(),i0=m,l0=l,ca.transition=u}else a.current=n;if(Yn&&(Yn=!1,qa=a,Qn=s),u=a.pendingLanes,u===0&&($a=null),vu(n.stateNode),J0(a,w0()),e!==null)for(i=a.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Vn)throw Vn=!1,a=Ei,Ei=null,a;return(Qn&1)!==0&&a.tag!==0&&z1(),u=a.pendingLanes,(u&1)!==0?a===di?xe++:(xe=0,di=a):xe=0,Ya(),null}function z1(){if(qa!==null){var a=P9(Qn),e=ca.transition,n=l0;try{if(ca.transition=null,l0=16>a?16:a,qa===null)var i=!1;else{if(a=qa,qa=null,Qn=0,(i0&6)!==0)throw Error(o(331));var s=i0;for(i0|=4,K=a.current;K!==null;){var u=K,l=u.child;if((K.flags&16)!==0){var m=u.deletions;if(m!==null){for(var S=0;S<m.length;S++){var w=m[S];for(K=w;K!==null;){var O=K;switch(O.tag){case 0:case 11:case 15:Le(8,O,u)}var L=O.child;if(L!==null)L.return=O,K=L;else for(;K!==null;){O=K;var G=O.sibling,Z=O.return;if(Os(O),O===w){K=null;break}if(G!==null){G.return=Z,K=G;break}K=Z}}}var D=u.alternate;if(D!==null){var k=D.child;if(k!==null){D.child=null;do{var B0=k.sibling;k.sibling=null,k=B0}while(k!==null)}}K=u}}if((u.subtreeFlags&2064)!==0&&l!==null)l.return=u,K=l;else a:for(;K!==null;){if(u=K,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Le(9,u,u.return)}var b=u.sibling;if(b!==null){b.return=u.return,K=b;break a}K=u.return}}var C=a.current;for(K=C;K!==null;){l=K;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,K=g;else a:for(l=C;K!==null;){if(m=K,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Fn(9,m)}}catch(U){y0(m,m.return,U)}if(m===l){K=null;break a}var P=m.sibling;if(P!==null){P.return=m.return,K=P;break a}K=m.return}}if(i0=s,Ya(),Ma&&typeof Ma.onPostCommitFiberRoot=="function")try{Ma.onPostCommitFiberRoot(en,a)}catch{}i=!0}return i}finally{l0=n,ca.transition=e}}return!1}function Ys(a,e,n){e=U1(n,e),e=ls(a,e,1),a=Ja(a,e,1),e=H0(),a!==null&&(te(a,1,e),J0(a,e))}function y0(a,e,n){if(a.tag===3)Ys(a,a,n);else for(;e!==null;){if(e.tag===3){Ys(e,a,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))){a=U1(n,a),a=fs(e,a,1),e=Ja(e,a,1),a=H0(),e!==null&&(te(e,1,a),J0(e,a));break}}e=e.return}}function ec(a,e,n){var i=a.pingCache;i!==null&&i.delete(e),e=H0(),a.pingedLanes|=a.suspendedLanes&n,x0===a&&(K0&n)===n&&(O0===4||O0===3&&(K0&130023424)===K0&&500>w0()-fi?E1(a,0):li|=n),J0(a,e)}function Qs(a,e){e===0&&((a.mode&1)===0?e=1:(e=rn,rn<<=1,(rn&130023424)===0&&(rn=4194304)));var n=H0();a=La(a,e),a!==null&&(te(a,e,n),J0(a,n))}function nc(a){var e=a.memoizedState,n=0;e!==null&&(n=e.retryLane),Qs(a,n)}function rc(a,e){var n=0;switch(a.tag){case 13:var i=a.stateNode,s=a.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=a.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(e),Qs(a,n)}var Js;Js=function(a,e,n){if(a!==null)if(a.memoizedProps!==e.pendingProps||z0.current)Y0=!0;else{if((a.lanes&n)===0&&(e.flags&128)===0)return Y0=!1,H8(a,e,n);Y0=(a.flags&131072)!==0}else Y0=!1,b0&&(e.flags&1048576)!==0&&vt(e,wn,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Un(a,e),a=e.pendingProps;var s=I1(e,D0.current);D1(e,n),s=Fr(null,e,i,a,s,n);var u=Hr();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,V0(i)?(u=!0,gn(e)):u=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Rr(e),s.updater=Dn,e.stateNode=s,s._reactInternals=e,jr(e,i,a,n),e=ai(null,e,i,!0,u,n)):(e.tag=0,b0&&u&&wr(e),F0(null,e,s,n),e=e.child),e;case 16:i=e.elementType;a:{switch(Un(a,e),a=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=tc(i),a=da(i,a),s){case 0:e=Xr(null,e,i,a,n);break a;case 1:e=Ms(null,e,i,a,n);break a;case 11:e=ms(null,e,i,a,n);break a;case 14:e=hs(null,e,i,da(i.type,a),n);break a}throw Error(o(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:da(i,s),Xr(a,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:da(i,s),Ms(a,e,i,s,n);case 3:a:{if(bs(e),a===null)throw Error(o(387));i=e.pendingProps,u=e.memoizedState,s=u.element,Zt(a,e),Ln(e,i,null,n);var l=e.memoizedState;if(i=l.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){s=U1(Error(o(423)),e),e=gs(a,e,i,n,s);break a}else if(i!==s){s=U1(Error(o(424)),e),e=gs(a,e,i,n,s);break a}else for(ea=Ha(e.stateNode.containerInfo.firstChild),aa=e,b0=!0,Ea=null,n=xt(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(R1(),i===s){e=Pa(a,e,n);break a}F0(a,e,i,n)}e=e.child}return e;case 5:return kt(e),a===null&&Gr(e),i=e.type,s=e.pendingProps,u=a!==null?a.memoizedProps:null,l=s.children,Wr(i,s)?l=null:u!==null&&Wr(i,u)&&(e.flags|=32),Ws(a,e),F0(a,e,l,n),e.child;case 6:return a===null&&Gr(e),null;case 13:return Ns(a,e,n);case 4:return Zr(e,e.stateNode.containerInfo),i=e.pendingProps,a===null?e.child=Z1(e,null,i,n):F0(a,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:da(i,s),ms(a,e,i,s,n);case 7:return F0(a,e,e.pendingProps,n),e.child;case 8:return F0(a,e,e.pendingProps.children,n),e.child;case 12:return F0(a,e,e.pendingProps.children,n),e.child;case 10:a:{if(i=e.type._context,s=e.pendingProps,u=e.memoizedProps,l=s.value,h0(Gn,i._currentValue),i._currentValue=l,u!==null)if(fa(u.value,l)){if(u.children===s.children&&!z0.current){e=Pa(a,e,n);break a}}else for(u=e.child,u!==null&&(u.return=e);u!==null;){var m=u.dependencies;if(m!==null){l=u.child;for(var S=m.firstContext;S!==null;){if(S.context===i){if(u.tag===1){S=Ia(-1,n&-n),S.tag=2;var w=u.updateQueue;if(w!==null){w=w.shared;var O=w.pending;O===null?S.next=S:(S.next=O.next,O.next=S),w.pending=S}}u.lanes|=n,S=u.alternate,S!==null&&(S.lanes|=n),Pr(u.return,n,e),m.lanes|=n;break}S=S.next}}else if(u.tag===10)l=u.type===e.type?null:u.child;else if(u.tag===18){if(l=u.return,l===null)throw Error(o(341));l.lanes|=n,m=l.alternate,m!==null&&(m.lanes|=n),Pr(l,n,e),l=u.sibling}else l=u.child;if(l!==null)l.return=u;else for(l=u;l!==null;){if(l===e){l=null;break}if(u=l.sibling,u!==null){u.return=l.return,l=u;break}l=l.return}u=l}F0(a,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,D1(e,n),s=oa(s),i=i(s),e.flags|=1,F0(a,e,i,n),e.child;case 14:return i=e.type,s=da(i,e.pendingProps),s=da(i.type,s),hs(a,e,i,s,n);case 15:return Ss(a,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:da(i,s),Un(a,e),e.tag=1,V0(i)?(a=!0,gn(e)):a=!1,D1(e,n),cs(e,i,s),jr(e,i,s,n),ai(null,e,i,!0,a,n);case 19:return ws(a,e,n);case 22:return Cs(a,e,n)}throw Error(o(156,e.tag))};function js(a,e){return G9(a,e)}function ic(a,e,n,i){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Aa(a,e,n,i){return new ic(a,e,n,i)}function Wi(a){return a=a.prototype,!(!a||!a.isReactComponent)}function tc(a){if(typeof a=="function")return Wi(a)?1:0;if(a!=null){if(a=a.$$typeof,a===H)return 11;if(a===W0)return 14}return 2}function e1(a,e){var n=a.alternate;return n===null?(n=Aa(a.tag,e,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=e,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&14680064,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n}function qn(a,e,n,i,s,u){var l=2;if(i=a,typeof a=="function")Wi(a)&&(l=1);else if(typeof a=="string")l=5;else a:switch(a){case c0:return p1(n.children,s,u,e);case f0:l=8,s|=8;break;case L0:return a=Aa(12,n,e,s|2),a.elementType=L0,a.lanes=u,a;case E0:return a=Aa(13,n,e,s),a.elementType=E0,a.lanes=u,a;case d0:return a=Aa(19,n,e,s),a.elementType=d0,a.lanes=u,a;case $:return Xn(n,s,u,e);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case G0:l=10;break a;case I0:l=9;break a;case H:l=11;break a;case W0:l=14;break a;case R:l=16,i=null;break a}throw Error(o(130,a==null?a:typeof a,""))}return e=Aa(l,n,e,s),e.elementType=a,e.type=i,e.lanes=u,e}function p1(a,e,n,i){return a=Aa(7,a,i,e),a.lanes=n,a}function Xn(a,e,n,i){return a=Aa(22,a,i,e),a.elementType=$,a.lanes=n,a.stateNode={isHidden:!1},a}function Mi(a,e,n){return a=Aa(6,a,null,e),a.lanes=n,a}function bi(a,e,n){return e=Aa(4,a.children!==null?a.children:[],a.key,e),e.lanes=n,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}function sc(a,e,n,i,s){this.tag=e,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=J2(0),this.expirationTimes=J2(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=J2(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function gi(a,e,n,i,s,u,l,m,S){return a=new sc(a,e,n,m,S),e===1?(e=1,u===!0&&(e|=8)):e=0,u=Aa(3,null,null,e),a.current=u,u.stateNode=a,u.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rr(u),a}function oc(a,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:i==null?null:""+i,children:a,containerInfo:e,implementation:n}}function $s(a){if(!a)return Va;a=a._reactInternals;a:{if(r1(a)!==a||a.tag!==1)throw Error(o(170));var e=a;do{switch(e.tag){case 3:e=e.stateNode.context;break a;case 1:if(V0(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break a}}e=e.return}while(e!==null);throw Error(o(171))}if(a.tag===1){var n=a.type;if(V0(n))return yt(a,n,e)}return e}function qs(a,e,n,i,s,u,l,m,S){return a=gi(n,i,!0,a,s,u,l,m,S),a.context=$s(null),n=a.current,i=H0(),s=Xa(n),u=Ia(i,s),u.callback=e??null,Ja(n,u,s),a.current.lanes=s,te(a,s,i),J0(a,i),a}function a2(a,e,n,i){var s=e.current,u=H0(),l=Xa(s);return n=$s(n),e.context===null?e.context=n:e.pendingContext=n,e=Ia(u,l),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=Ja(s,e,l),a!==null&&(ha(a,s,l,u),On(a,s,l)),l}function e2(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Xs(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<e?n:e}}function Ni(a,e){Xs(a,e),(a=a.alternate)&&Xs(a,e)}function uc(){return null}var ao=typeof reportError=="function"?reportError:function(a){console.error(a)};function yi(a){this._internalRoot=a}n2.prototype.render=yi.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(o(409));a2(a,e,null,null)},n2.prototype.unmount=yi.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;f1(function(){a2(null,a,null,null)}),e[va]=null}};function n2(a){this._internalRoot=a}n2.prototype.unstable_scheduleHydration=function(a){if(a){var e=Z9();a={blockedOn:null,target:a,priority:e};for(var n=0;n<Ua.length&&e!==0&&e<Ua[n].priority;n++);Ua.splice(n,0,a),n===0&&k9(a)}};function wi(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function r2(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function eo(){}function cc(a,e,n,i,s){if(s){if(typeof i=="function"){var u=i;i=function(){var w=e2(l);u.call(w)}}var l=qs(e,i,a,0,null,!1,!1,"",eo);return a._reactRootContainer=l,a[va]=l.current,Ce(a.nodeType===8?a.parentNode:a),f1(),l}for(;s=a.lastChild;)a.removeChild(s);if(typeof i=="function"){var m=i;i=function(){var w=e2(S);m.call(w)}}var S=gi(a,0,!1,null,null,!1,!1,"",eo);return a._reactRootContainer=S,a[va]=S.current,Ce(a.nodeType===8?a.parentNode:a),f1(function(){a2(e,S,n,i)}),S}function i2(a,e,n,i,s){var u=n._reactRootContainer;if(u){var l=u;if(typeof s=="function"){var m=s;s=function(){var S=e2(l);m.call(S)}}a2(e,l,a,s)}else l=cc(n,e,a,s,i);return e2(l)}x9=function(a){switch(a.tag){case 3:var e=a.stateNode;if(e.current.memoizedState.isDehydrated){var n=ie(e.pendingLanes);n!==0&&(j2(e,n|1),J0(e,w0()),(i0&6)===0&&(H1=w0()+500,Ya()))}break;case 13:f1(function(){var i=La(a,1);if(i!==null){var s=H0();ha(i,a,1,s)}}),Ni(a,1)}},$2=function(a){if(a.tag===13){var e=La(a,134217728);if(e!==null){var n=H0();ha(e,a,134217728,n)}Ni(a,134217728)}},R9=function(a){if(a.tag===13){var e=Xa(a),n=La(a,e);if(n!==null){var i=H0();ha(n,a,e,i)}Ni(a,e)}},Z9=function(){return l0},K9=function(a,e){var n=l0;try{return l0=a,e()}finally{l0=n}},F2=function(a,e,n){switch(e){case"input":if(x2(a,n),e=n.name,n.type==="radio"&&e!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==a&&i.form===a.form){var s=Mn(i);if(!s)throw Error(o(90));u9(i),x2(i,s)}}}break;case"textarea":E9(a,n);break;case"select":e=n.value,e!=null&&M1(a,!!n.multiple,e,!1)}},b9=hi,g9=f1;var Ac={usingClientEntryPoint:!1,Events:[be,O1,Mn,W9,M9,hi]},Re={findFiberByHostInstance:i1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lc={bundleType:Re.bundleType,version:Re.version,rendererPackageName:Re.rendererPackageName,rendererConfig:Re.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=B9(a),a===null?null:a.stateNode},findFiberByHostInstance:Re.findFiberByHostInstance||uc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var t2=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t2.isDisabled&&t2.supportsFiber)try{en=t2.inject(lc),Ma=t2}catch{}}return j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac,j0.createPortal=function(a,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wi(e))throw Error(o(200));return oc(a,e,null,n)},j0.createRoot=function(a,e){if(!wi(a))throw Error(o(299));var n=!1,i="",s=ao;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=gi(a,1,!1,null,null,n,!1,i,s),a[va]=e.current,Ce(a.nodeType===8?a.parentNode:a),new yi(e)},j0.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=B9(e),a=a===null?null:a.stateNode,a},j0.flushSync=function(a){return f1(a)},j0.hydrate=function(a,e,n){if(!r2(e))throw Error(o(200));return i2(null,a,e,!0,n)},j0.hydrateRoot=function(a,e,n){if(!wi(a))throw Error(o(405));var i=n!=null&&n.hydratedSources||null,s=!1,u="",l=ao;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=qs(e,null,a,1,n??null,s,!1,u,l),a[va]=e.current,Ce(a),i)for(a=0;a<i.length;a++)n=i[a],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new n2(e)},j0.render=function(a,e,n){if(!r2(e))throw Error(o(200));return i2(null,a,e,!1,n)},j0.unmountComponentAtNode=function(a){if(!r2(a))throw Error(o(40));return a._reactRootContainer?(f1(function(){i2(null,null,a,!1,function(){a._reactRootContainer=null,a[va]=null})}),!0):!1},j0.unstable_batchedUpdates=hi,j0.unstable_renderSubtreeIntoContainer=function(a,e,n,i){if(!r2(n))throw Error(o(200));if(a==null||a._reactInternals===void 0)throw Error(o(38));return i2(a,e,n,!1,i)},j0.version="18.3.1-next-f1338f8080-20240426",j0}var co;function Cc(){if(co)return Gi.exports;co=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gi.exports=Sc(),Gi.exports}var Ao;function Wc(){if(Ao)return s2;Ao=1;var r=Cc();return s2.createRoot=r.createRoot,s2.hydrateRoot=r.hydrateRoot,s2}var Mc=Wc(),ra=ji();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,c)=>c?c.toUpperCase():o.toLowerCase()),lo=r=>{const t=gc(r);return t.charAt(0).toUpperCase()+t.slice(1)},Ko=(...r)=>r.filter((t,o,c)=>!!t&&t.trim()!==""&&c.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=ra.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:A="",children:E,iconNode:f,...d},p)=>ra.createElement("svg",{ref:p,...Nc,width:t,height:t,stroke:r,strokeWidth:c?Number(o)*24/Number(t):o,className:Ko("lucide",A),...d},[...f.map(([h,W])=>ra.createElement(h,W)),...Array.isArray(E)?E:[E]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(r,t)=>{const o=ra.forwardRef(({className:c,...A},E)=>ra.createElement(yc,{ref:E,iconNode:t,className:Ko(`lucide-${bc(lo(r))}`,`lucide-${r}`,c),...A}));return o.displayName=lo(r),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bc=Ve("check",wc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Gc=Ve("download",vc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Oc=Ve("rotate-ccw",Tc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ic=Ve("share-2",Lc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Do=Ve("trending-up",Pc),o2=`year,country,lowest_1,lowest_10,lowest_50,highest_10,highest_1,region,region2,shortname,decade
1980,AD,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Andorra,1980
1981,AD,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Andorra,1980
1982,AD,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Andorra,1980
1983,AD,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Andorra,1980
1984,AD,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Andorra,1980
1985,AD,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Andorra,1980
1986,AD,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Andorra,1980
1987,AD,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Andorra,1980
1988,AD,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Andorra,1980
1989,AD,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Andorra,1980
1990,AD,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Andorra,1990
1991,AD,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Andorra,1990
1992,AD,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Andorra,1990
1993,AD,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Andorra,1990
1994,AD,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Andorra,1990
1995,AD,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Andorra,1990
1996,AD,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Andorra,1990
1997,AD,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Andorra,1990
1998,AD,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Andorra,1990
1999,AD,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Andorra,1990
2000,AD,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Andorra,2000
2001,AD,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Andorra,2000
2002,AD,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Andorra,2000
2003,AD,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Andorra,2000
2004,AD,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Andorra,2000
2005,AD,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Andorra,2000
2006,AD,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Andorra,2000
2007,AD,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Andorra,2000
2008,AD,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Andorra,2000
2009,AD,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Andorra,2000
2010,AD,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Andorra,2010
2011,AD,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Andorra,2010
2012,AD,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Andorra,2010
2013,AD,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Andorra,2010
2014,AD,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Andorra,2010
2015,AD,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Andorra,2010
2016,AD,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Andorra,2010
2017,AD,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Andorra,2010
2018,AD,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Andorra,2010
2019,AD,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Andorra,2010
2020,AD,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Andorra,2020
2021,AD,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Andorra,2020
2022,AD,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Andorra,2020
2023,AD,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Andorra,2020
1980,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1981,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1982,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1983,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1984,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1985,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1986,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1987,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1988,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1989,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1980
1990,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1991,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1992,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1993,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1994,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1995,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1996,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1997,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1998,AE,0,0.0016,0.1009,0.5573,0.1994,Asia,West Asia,United Arab Emirates,1990
1999,AE,0,0.0016,0.1003,0.5582,0.1984,Asia,West Asia,United Arab Emirates,1990
2000,AE,0,0.0016,0.0997,0.5591,0.1973,Asia,West Asia,United Arab Emirates,2000
2001,AE,0,0.0016,0.099,0.5602,0.1961,Asia,West Asia,United Arab Emirates,2000
2002,AE,0,0.0016,0.0982,0.5613,0.1948,Asia,West Asia,United Arab Emirates,2000
2003,AE,0,0.0016,0.0974,0.5626,0.1933,Asia,West Asia,United Arab Emirates,2000
2004,AE,0,0.0016,0.0965,0.5640000000000001,0.1917,Asia,West Asia,United Arab Emirates,2000
2005,AE,0,0.0016,0.0954,0.5656,0.1898,Asia,West Asia,United Arab Emirates,2000
2006,AE,0,0.0016,0.0942,0.5674,0.1877,Asia,West Asia,United Arab Emirates,2000
2007,AE,0,0.0016,0.0928,0.5694,0.1853,Asia,West Asia,United Arab Emirates,2000
2008,AE,0,0.0016,0.0913,0.5717,0.1826,Asia,West Asia,United Arab Emirates,2000
2009,AE,0,0.0016,0.0894,0.5744,0.1794,Asia,West Asia,United Arab Emirates,2000
2010,AE,0,0.0015,0.0955,0.5537000000000001,0.1761,Asia,West Asia,United Arab Emirates,2010
2011,AE,0,0.0015,0.1013,0.5338,0.1729,Asia,West Asia,United Arab Emirates,2010
2012,AE,0,0.0014,0.107,0.5146000000000001,0.1698,Asia,West Asia,United Arab Emirates,2010
2013,AE,0,0.0014,0.1124,0.496,0.1668,Asia,West Asia,United Arab Emirates,2010
2014,AE,0,0.0013,0.1107,0.4995,0.171,Asia,West Asia,United Arab Emirates,2010
2015,AE,0,0.0015,0.1154,0.4975,0.1685,Asia,West Asia,United Arab Emirates,2010
2016,AE,0,0.0017,0.1201,0.4956,0.166,Asia,West Asia,United Arab Emirates,2010
2017,AE,0,0.0018,0.1247,0.4936,0.1636,Asia,West Asia,United Arab Emirates,2010
2018,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2010
2019,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2010
2020,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2020
2021,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2020
2022,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2020
2023,AE,0,0.002,0.1292,0.4918,0.1612,Asia,West Asia,United Arab Emirates,2020
1980,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1981,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1982,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1983,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1984,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1985,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1986,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1987,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1988,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1989,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1980
1990,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1991,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1992,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1993,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1994,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1995,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1996,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1997,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1998,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
1999,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,1990
2000,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2001,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2002,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2003,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2004,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2005,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2006,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2007,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2008,AF,0,0.0029,0.1716,0.4194,0.1622,Asia,South Asia,Afghanistan,2000
2009,AF,0,0.003,0.1785,0.4081,0.1536,Asia,South Asia,Afghanistan,2000
2010,AF,0,0.003,0.1792,0.4044,0.1511,Asia,South Asia,Afghanistan,2010
2011,AF,0,0.0031,0.186,0.3942,0.1432,Asia,South Asia,Afghanistan,2010
2012,AF,0,0.0032,0.19,0.3876,0.1382,Asia,South Asia,Afghanistan,2010
2013,AF,0,0.0032,0.1873,0.3923,0.1409,Asia,South Asia,Afghanistan,2010
2014,AF,0,0.0032,0.1855,0.3961,0.1429,Asia,South Asia,Afghanistan,2010
2015,AF,0,0.0032,0.1848,0.3987,0.1438,Asia,South Asia,Afghanistan,2010
2016,AF,0,0.0031,0.1816,0.4041,0.1471,Asia,South Asia,Afghanistan,2010
2017,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2010
2018,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2010
2019,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2010
2020,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2020
2021,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2020
2022,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2020
2023,AF,0,0.0031,0.1779,0.4101,0.1508,Asia,South Asia,Afghanistan,2020
1980,AG,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Antigua and Barbuda,1980
1981,AG,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Antigua and Barbuda,1980
1982,AG,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Antigua and Barbuda,1980
1983,AG,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Antigua and Barbuda,1980
1984,AG,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Antigua and Barbuda,1980
1985,AG,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Antigua and Barbuda,1980
1986,AG,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Antigua and Barbuda,1980
1987,AG,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Antigua and Barbuda,1980
1988,AG,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Antigua and Barbuda,1980
1989,AG,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Antigua and Barbuda,1980
1990,AG,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Antigua and Barbuda,1990
1991,AG,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Antigua and Barbuda,1990
1992,AG,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Antigua and Barbuda,1990
1993,AG,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Antigua and Barbuda,1990
1994,AG,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Antigua and Barbuda,1990
1995,AG,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Antigua and Barbuda,1990
1996,AG,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Antigua and Barbuda,1990
1997,AG,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Antigua and Barbuda,1990
1998,AG,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Antigua and Barbuda,1990
1999,AG,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Antigua and Barbuda,1990
2000,AG,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Antigua and Barbuda,2000
2001,AG,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Antigua and Barbuda,2000
2002,AG,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Antigua and Barbuda,2000
2003,AG,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Antigua and Barbuda,2000
2004,AG,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Antigua and Barbuda,2000
2005,AG,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Antigua and Barbuda,2000
2006,AG,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Antigua and Barbuda,2000
2007,AG,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Antigua and Barbuda,2000
2008,AG,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Antigua and Barbuda,2000
2009,AG,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Antigua and Barbuda,2000
2010,AG,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Antigua and Barbuda,2010
2011,AG,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Antigua and Barbuda,2010
2012,AG,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Antigua and Barbuda,2010
2013,AG,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Antigua and Barbuda,2010
2014,AG,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Antigua and Barbuda,2010
2015,AG,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Antigua and Barbuda,2010
2016,AG,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Antigua and Barbuda,2010
2017,AG,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Antigua and Barbuda,2010
2018,AG,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Antigua and Barbuda,2010
2019,AG,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Antigua and Barbuda,2010
2020,AG,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Antigua and Barbuda,2020
2021,AG,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Antigua and Barbuda,2020
2022,AG,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Antigua and Barbuda,2020
2023,AG,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Antigua and Barbuda,2020
1980,AI,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Anguilla,1980
1981,AI,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Anguilla,1980
1982,AI,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Anguilla,1980
1983,AI,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Anguilla,1980
1984,AI,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Anguilla,1980
1985,AI,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Anguilla,1980
1986,AI,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Anguilla,1980
1987,AI,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Anguilla,1980
1988,AI,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Anguilla,1980
1989,AI,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Anguilla,1980
1990,AI,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Anguilla,1990
1991,AI,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Anguilla,1990
1992,AI,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Anguilla,1990
1993,AI,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Anguilla,1990
1994,AI,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Anguilla,1990
1995,AI,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Anguilla,1990
1996,AI,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Anguilla,1990
1997,AI,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Anguilla,1990
1998,AI,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Anguilla,1990
1999,AI,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Anguilla,1990
2000,AI,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Anguilla,2000
2001,AI,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Anguilla,2000
2002,AI,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Anguilla,2000
2003,AI,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Anguilla,2000
2004,AI,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Anguilla,2000
2005,AI,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Anguilla,2000
2006,AI,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Anguilla,2000
2007,AI,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Anguilla,2000
2008,AI,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Anguilla,2000
2009,AI,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Anguilla,2000
2010,AI,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Anguilla,2010
2011,AI,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Anguilla,2010
2012,AI,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Anguilla,2010
2013,AI,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Anguilla,2010
2014,AI,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Anguilla,2010
2015,AI,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Anguilla,2010
2016,AI,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Anguilla,2010
2017,AI,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Anguilla,2010
2018,AI,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Anguilla,2010
2019,AI,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Anguilla,2010
2020,AI,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Anguilla,2020
2021,AI,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Anguilla,2020
2022,AI,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Anguilla,2020
2023,AI,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Anguilla,2020
1980,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1981,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1982,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1983,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1984,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1985,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1986,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1987,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1988,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1989,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1980
1990,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1991,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1992,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1993,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1994,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1995,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1996,AL,0,0.0014,0.197,0.3158,0.0767,Europe,Eastern Europe,Albania,1990
1997,AL,0,0.0013,0.1944,0.319,0.0786,Europe,Eastern Europe,Albania,1990
1998,AL,0,0.0015,0.1948,0.3196,0.0791,Europe,Eastern Europe,Albania,1990
1999,AL,0,0.0015,0.1925,0.3228,0.0803,Europe,Eastern Europe,Albania,1990
2000,AL,0,0.0016,0.1916,0.3203,0.0785,Europe,Eastern Europe,Albania,2000
2001,AL,0,0.0019,0.1909,0.3223,0.079,Europe,Eastern Europe,Albania,2000
2002,AL,0,0.002,0.1888,0.3254,0.0805,Europe,Eastern Europe,Albania,2000
2003,AL,0,0.0021,0.1908,0.325,0.0808,Europe,Eastern Europe,Albania,2000
2004,AL,0,0.0021,0.1926,0.3213,0.0794,Europe,Eastern Europe,Albania,2000
2005,AL,0,0.002,0.1941,0.3195,0.0782,Europe,Eastern Europe,Albania,2000
2006,AL,0,0.002,0.1941,0.3177,0.0774,Europe,Eastern Europe,Albania,2000
2007,AL,0,0.0022,0.2003,0.3065,0.0716,Europe,Eastern Europe,Albania,2000
2008,AL,0,0.002,0.1971,0.317,0.079,Europe,Eastern Europe,Albania,2000
2009,AL,0,0.0022,0.1996,0.3188,0.0813,Europe,Eastern Europe,Albania,2000
2010,AL,0,0.0019,0.1976,0.3213,0.0821,Europe,Eastern Europe,Albania,2010
2011,AL,0,0.0019,0.1951,0.3277,0.0854,Europe,Eastern Europe,Albania,2010
2012,AL,0,0.0019,0.1967,0.3254,0.0847,Europe,Eastern Europe,Albania,2010
2013,AL,0,0.0024,0.186,0.3409,0.0919,Europe,Eastern Europe,Albania,2010
2014,AL,0,0.0024,0.1787,0.3487,0.0933,Europe,Eastern Europe,Albania,2010
2015,AL,0,0.0024,0.1832,0.3458,0.0941,Europe,Eastern Europe,Albania,2010
2016,AL,0,0.0024,0.1816,0.3449,0.0929,Europe,Eastern Europe,Albania,2010
2017,AL,0,0.0024,0.1812,0.3474,0.0951,Europe,Eastern Europe,Albania,2010
2018,AL,0,0.0024,0.1819,0.3451,0.0931,Europe,Eastern Europe,Albania,2010
2019,AL,0,0.0024,0.1831,0.3415,0.0904,Europe,Eastern Europe,Albania,2010
2020,AL,0,0.0024,0.184,0.3392,0.0886,Europe,Eastern Europe,Albania,2020
2021,AL,0,0.0024,0.184,0.3392,0.0886,Europe,Eastern Europe,Albania,2020
2022,AL,0,0.0024,0.184,0.3392,0.0886,Europe,Eastern Europe,Albania,2020
2023,AL,0,0.0024,0.184,0.3392,0.0886,Europe,Eastern Europe,Albania,2020
1980,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1981,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1982,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1983,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1984,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1985,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1986,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1987,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1988,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1989,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1980
1990,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1991,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1992,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1993,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1994,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1995,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1996,AM,0,0.0021,0.1348,0.4677,0.1897,Asia,West Asia,Armenia,1990
1997,AM,0,0.0023,0.1423,0.4587,0.1844,Asia,West Asia,Armenia,1990
1998,AM,0,0.0026,0.1512,0.4485,0.1777,Asia,West Asia,Armenia,1990
1999,AM,0,0.0027,0.1568,0.4417,0.1739,Asia,West Asia,Armenia,1990
2000,AM,0,0.0029,0.1648,0.4309,0.1589,Asia,West Asia,Armenia,2000
2001,AM,0,0.003,0.1702,0.4231,0.1471,Asia,West Asia,Armenia,2000
2002,AM,0,0.0029,0.1684,0.4291,0.1601,Asia,West Asia,Armenia,2000
2003,AM,0,0.0031,0.1753,0.4255,0.1702,Asia,West Asia,Armenia,2000
2004,AM,0,0.0028,0.1614,0.4567,0.188,Asia,West Asia,Armenia,2000
2005,AM,0,0.0029,0.1648,0.45,0.1833,Asia,West Asia,Armenia,2000
2006,AM,0,0.0034,0.1932,0.3777,0.1315,Asia,West Asia,Armenia,2000
2007,AM,0,0.0032,0.1856,0.3841,0.1283,Asia,West Asia,Armenia,2000
2008,AM,0,0.0034,0.1933,0.3696,0.1259,Asia,West Asia,Armenia,2000
2009,AM,0,0.0035,0.1974,0.3637,0.1219,Asia,West Asia,Armenia,2000
2010,AM,0,0.0033,0.1878,0.3912,0.1476,Asia,West Asia,Armenia,2010
2011,AM,0,0.0035,0.1948,0.3729,0.1326,Asia,West Asia,Armenia,2010
2012,AM,0,0.0035,0.1963,0.377,0.1358,Asia,West Asia,Armenia,2010
2013,AM,0,0.0034,0.1906,0.3799,0.1387,Asia,West Asia,Armenia,2010
2014,AM,0,0.0033,0.1857,0.3916,0.1424,Asia,West Asia,Armenia,2010
2015,AM,0,0.0031,0.1803,0.4056,0.1504,Asia,West Asia,Armenia,2010
2016,AM,0,0.0029,0.1736,0.3983,0.1653,Asia,West Asia,Armenia,2010
2017,AM,0,0.003,0.1683,0.435,0.1872,Asia,West Asia,Armenia,2010
2018,AM,0,0.0029,0.1674,0.4374,0.1746,Asia,West Asia,Armenia,2010
2019,AM,0,0.0033,0.1859,0.396,0.15,Asia,West Asia,Armenia,2010
2020,AM,0,0.0033,0.1859,0.396,0.15,Asia,West Asia,Armenia,2020
2021,AM,0,0.0033,0.1859,0.396,0.15,Asia,West Asia,Armenia,2020
2022,AM,0,0.0033,0.1859,0.396,0.15,Asia,West Asia,Armenia,2020
2023,AM,0,0.0033,0.1859,0.396,0.15,Asia,West Asia,Armenia,2020
1980,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1981,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1982,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1983,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1984,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1985,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1986,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1987,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1988,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1989,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1980
1990,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1991,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1992,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1993,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1994,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1995,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1996,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1997,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1998,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
1999,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,1990
2000,AO,0,0.0012,0.0916,0.5801000000000001,0.2198,Africa,Middle Africa,Angola,2000
2001,AO,0,0.0013,0.0954,0.5693,0.2115,Africa,Middle Africa,Angola,2000
2002,AO,0,0.0014,0.0992,0.5584,0.2032,Africa,Middle Africa,Angola,2000
2003,AO,0,0.0015,0.1031,0.5476,0.1949,Africa,Middle Africa,Angola,2000
2004,AO,0,0.0015,0.1069,0.5367000000000001,0.1865,Africa,Middle Africa,Angola,2000
2005,AO,0,0.0016,0.1108,0.5258,0.1781,Africa,Middle Africa,Angola,2000
2006,AO,0,0.0017,0.1146,0.5149,0.1698,Africa,Middle Africa,Angola,2000
2007,AO,0,0.0018,0.1185,0.504,0.1614,Africa,Middle Africa,Angola,2000
2008,AO,0,0.0019,0.1224,0.4931,0.153,Africa,Middle Africa,Angola,2000
2009,AO,0,0.0018,0.1192,0.5018,0.1637,Africa,Middle Africa,Angola,2000
2010,AO,0,0.0017,0.116,0.5105000000000001,0.1744,Africa,Middle Africa,Angola,2010
2011,AO,0,0.0017,0.1127,0.5192,0.1851,Africa,Middle Africa,Angola,2010
2012,AO,0,0.0016,0.1095,0.5279,0.1957,Africa,Middle Africa,Angola,2010
2013,AO,0,0.0016,0.1064,0.5366000000000001,0.2064,Africa,Middle Africa,Angola,2010
2014,AO,0,0.0015,0.1032,0.5453,0.2171,Africa,Middle Africa,Angola,2010
2015,AO,0,0.0015,0.1,0.554,0.2277,Africa,Middle Africa,Angola,2010
2016,AO,0,0.0014,0.0968,0.5626,0.2383,Africa,Middle Africa,Angola,2010
2017,AO,0,0.0013,0.0936,0.5713,0.249,Africa,Middle Africa,Angola,2010
2018,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2010
2019,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2010
2020,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2020
2021,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2020
2022,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2020
2023,AO,0,0.0013,0.0904,0.5800000000000001,0.2596,Africa,Middle Africa,Angola,2020
1980,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1981,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1982,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1983,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1984,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1985,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1986,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1987,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1988,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1989,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1980
1990,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1991,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1992,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1993,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1994,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1995,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1996,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1997,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1998,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
1999,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,1990
2000,AR,0,0,0.0932,0.4945000000000001,0.143,Americas,South America,Argentina,2000
2001,AR,0,0,0.0772,0.5108,0.1444,Americas,South America,Argentina,2000
2002,AR,0,0,0.0763,0.5203,0.1534,Americas,South America,Argentina,2000
2003,AR,0,0,0.1073,0.4861,0.1588,Americas,South America,Argentina,2000
2004,AR,0,0,0.1151,0.4678,0.1377,Americas,South America,Argentina,2000
2005,AR,0,0,0.1181,0.4511,0.1177,Americas,South America,Argentina,2000
2006,AR,0,0,0.1244,0.439,0.1056,Americas,South America,Argentina,2000
2007,AR,0,0,0.1253,0.4588,0.1456,Americas,South America,Argentina,2000
2008,AR,0,0,0.1271,0.4606,0.1471,Americas,South America,Argentina,2000
2009,AR,0,0,0.1289,0.428,0.12,Americas,South America,Argentina,2000
2010,AR,0,0,0.1332,0.4408,0.1201,Americas,South America,Argentina,2010
2011,AR,0,0,0.1411,0.4254,0.1164,Americas,South America,Argentina,2010
2012,AR,0,0,0.1463,0.3944,0.0855,Americas,South America,Argentina,2010
2013,AR,0,0,0.1456,0.4048,0.0999,Americas,South America,Argentina,2010
2014,AR,0,0,0.1379,0.4061,0.102,Americas,South America,Argentina,2010
2015,AR,0,0,0.1411,0.4316,0.1213,Americas,South America,Argentina,2010
2016,AR,0,0,0.1442,0.4572,0.1407,Americas,South America,Argentina,2010
2017,AR,0,0,0.1499,0.4324,0.1182,Americas,South America,Argentina,2010
2018,AR,0,0,0.1458,0.4366,0.1218,Americas,South America,Argentina,2010
2019,AR,0,0,0.1392,0.4651,0.1435,Americas,South America,Argentina,2010
2020,AR,0,0,0.1217,0.4636,0.141,Americas,South America,Argentina,2020
2021,AR,0,0,0.147,0.4394,0.1297,Americas,South America,Argentina,2020
2022,AR,0,0,0.1549,0.4337,0.1236,Americas,South America,Argentina,2020
2023,AR,0,0,0.1549,0.4337,0.1236,Americas,South America,Argentina,2020
1980,AT,0,0.0037,0.2182,0.3425,0.1161,Europe,Western Europe,Austria,1980
1981,AT,0,0.0037,0.2179,0.3417,0.1143,Europe,Western Europe,Austria,1980
1982,AT,0,0.0037,0.2175,0.3409,0.1124,Europe,Western Europe,Austria,1980
1983,AT,0,0.0037,0.2177,0.3408,0.1125,Europe,Western Europe,Austria,1980
1984,AT,0,0.0036,0.2176,0.3402,0.1125,Europe,Western Europe,Austria,1980
1985,AT,0,0.0036,0.2169,0.3406,0.1127,Europe,Western Europe,Austria,1980
1986,AT,0,0.0036,0.2162,0.3405,0.1128,Europe,Western Europe,Austria,1980
1987,AT,0,0.0038,0.2221,0.3423,0.1128,Europe,Western Europe,Austria,1980
1988,AT,0,0.0039,0.2242,0.3412,0.1132,Europe,Western Europe,Austria,1980
1989,AT,0,0.0036,0.2186,0.3409,0.1132,Europe,Western Europe,Austria,1980
1990,AT,0,0.0037,0.2205,0.3404,0.1133,Europe,Western Europe,Austria,1990
1991,AT,0,0.0038,0.2212,0.3403,0.1131,Europe,Western Europe,Austria,1990
1992,AT,0,0.0037,0.2215,0.3388,0.1127,Europe,Western Europe,Austria,1990
1993,AT,0,0.0037,0.2181,0.3402,0.1129,Europe,Western Europe,Austria,1990
1994,AT,0,0.0038,0.2187,0.3392,0.1128,Europe,Western Europe,Austria,1990
1995,AT,0,0.0037,0.2164,0.3379,0.1118,Europe,Western Europe,Austria,1990
1996,AT,0,0.0037,0.2162,0.3392,0.1125,Europe,Western Europe,Austria,1990
1997,AT,0,0.0037,0.2144,0.3436,0.115,Europe,Western Europe,Austria,1990
1998,AT,0,0.0037,0.2144,0.3488,0.1184,Europe,Western Europe,Austria,1990
1999,AT,0,0.0039,0.221,0.3356,0.1087,Europe,Western Europe,Austria,1990
2000,AT,0,0.0037,0.2154,0.3491,0.1186,Europe,Western Europe,Austria,2000
2001,AT,0,0.0039,0.2196,0.3425,0.1137,Europe,Western Europe,Austria,2000
2002,AT,0,0.0038,0.2156,0.3483,0.116,Europe,Western Europe,Austria,2000
2003,AT,0,0.0037,0.2113,0.3614,0.1221,Europe,Western Europe,Austria,2000
2004,AT,0,0.0039,0.2185,0.3414,0.1148,Europe,Western Europe,Austria,2000
2005,AT,0,0.0037,0.212,0.3549,0.1127,Europe,Western Europe,Austria,2000
2006,AT,0,0.0035,0.2028,0.3748,0.1331,Europe,Western Europe,Austria,2000
2007,AT,0,0.0037,0.2103,0.353,0.1149,Europe,Western Europe,Austria,2000
2008,AT,0,0.0037,0.2121,0.3553,0.1231,Europe,Western Europe,Austria,2000
2009,AT,0,0.0038,0.2141,0.3424,0.1082,Europe,Western Europe,Austria,2000
2010,AT,0,0.0036,0.2119,0.3472,0.1137,Europe,Western Europe,Austria,2010
2011,AT,0,0.0038,0.2166,0.3386,0.1111,Europe,Western Europe,Austria,2010
2012,AT,0,0.004,0.2243,0.3189,0.0827,Europe,Western Europe,Austria,2010
2013,AT,0,0.0039,0.2259,0.3212,0.0896,Europe,Western Europe,Austria,2010
2014,AT,0,0.0038,0.2175,0.3408,0.111,Europe,Western Europe,Austria,2010
2015,AT,0,0.0039,0.2198,0.3331,0.1016,Europe,Western Europe,Austria,2010
2016,AT,0,0.0038,0.2181,0.3417,0.1108,Europe,Western Europe,Austria,2010
2017,AT,0,0.0039,0.2241,0.3338,0.0988,Europe,Western Europe,Austria,2010
2018,AT,0,0.0039,0.2239,0.333,0.0974,Europe,Western Europe,Austria,2010
2019,AT,0,0.004,0.2271,0.3288,0.0946,Europe,Western Europe,Austria,2010
2020,AT,0,0.0039,0.2196,0.3514,0.1152,Europe,Western Europe,Austria,2020
2021,AT,0,0.0039,0.2196,0.3514,0.1152,Europe,Western Europe,Austria,2020
2022,AT,0,0.0039,0.2196,0.3514,0.1152,Europe,Western Europe,Austria,2020
2023,AT,0,0.0039,0.2196,0.3514,0.1152,Europe,Western Europe,Austria,2020
1980,AU,0,0.0025,0.1955,0.2485,0.0547,Oceania,Australia and New Zealand,Australia,1980
1981,AU,0,0.0025,0.195,0.2479,0.0527,Oceania,Australia and New Zealand,Australia,1980
1982,AU,0,0.0025,0.1917,0.2509,0.0531,Oceania,Australia and New Zealand,Australia,1980
1983,AU,0,0.0025,0.1945,0.2483,0.0529,Oceania,Australia and New Zealand,Australia,1980
1984,AU,0,0.0025,0.1943,0.253,0.0564,Oceania,Australia and New Zealand,Australia,1980
1985,AU,0,0.0025,0.1927,0.2552,0.0599,Oceania,Australia and New Zealand,Australia,1980
1986,AU,0,0.0024,0.1889,0.2629,0.0637,Oceania,Australia and New Zealand,Australia,1980
1987,AU,0,0.0024,0.1826,0.2787,0.0751,Oceania,Australia and New Zealand,Australia,1980
1988,AU,0,0.0023,0.1783,0.2948,0.0922,Oceania,Australia and New Zealand,Australia,1980
1989,AU,0,0.0024,0.1865,0.2753,0.0757,Oceania,Australia and New Zealand,Australia,1980
1990,AU,0,0.0024,0.1881,0.269,0.0706,Oceania,Australia and New Zealand,Australia,1990
1991,AU,0,0.0025,0.1876,0.2959,0.07,Oceania,Australia and New Zealand,Australia,1990
1992,AU,0,0.0026,0.1914,0.2926,0.0687,Oceania,Australia and New Zealand,Australia,1990
1993,AU,0,0.0025,0.1878,0.2988,0.0723,Oceania,Australia and New Zealand,Australia,1990
1994,AU,0,0.0025,0.1856,0.3034,0.0759,Oceania,Australia and New Zealand,Australia,1990
1995,AU,0,0.0026,0.1847,0.3087,0.0788,Oceania,Australia and New Zealand,Australia,1990
1996,AU,0,0.0026,0.1868,0.3094,0.0829,Oceania,Australia and New Zealand,Australia,1990
1997,AU,0,0.0025,0.1854,0.3034,0.0751,Oceania,Australia and New Zealand,Australia,1990
1998,AU,0,0.0025,0.182,0.3107,0.0813,Oceania,Australia and New Zealand,Australia,1990
1999,AU,0,0.0024,0.1799,0.3115,0.0833,Oceania,Australia and New Zealand,Australia,1990
2000,AU,0,0.0024,0.1796,0.3189,0.0893,Oceania,Australia and New Zealand,Australia,2000
2001,AU,0,0.0026,0.1863,0.3171,0.0894,Oceania,Australia and New Zealand,Australia,2000
2002,AU,0,0.0023,0.1768,0.3264,0.0939,Oceania,Australia and New Zealand,Australia,2000
2003,AU,0,0.0025,0.1813,0.3261,0.0948,Oceania,Australia and New Zealand,Australia,2000
2004,AU,0,0.0025,0.1807,0.3329,0.0992,Oceania,Australia and New Zealand,Australia,2000
2005,AU,0,0.0024,0.1759,0.3369,0.1013,Oceania,Australia and New Zealand,Australia,2000
2006,AU,0,0.0024,0.1758,0.3383,0.1,Oceania,Australia and New Zealand,Australia,2000
2007,AU,0,0.0025,0.1788,0.3414,0.1079,Oceania,Australia and New Zealand,Australia,2000
2008,AU,0,0.0024,0.1728,0.3431,0.1051,Oceania,Australia and New Zealand,Australia,2000
2009,AU,0,0.0025,0.1766,0.3512,0.1094,Oceania,Australia and New Zealand,Australia,2000
2010,AU,0,0.0025,0.1765,0.3487,0.1073,Oceania,Australia and New Zealand,Australia,2010
2011,AU,0,0.0026,0.1776,0.3515,0.1088,Oceania,Australia and New Zealand,Australia,2010
2012,AU,0,0.0025,0.1765,0.3508,0.1064,Oceania,Australia and New Zealand,Australia,2010
2013,AU,0,0.0025,0.1752,0.3482,0.1039,Oceania,Australia and New Zealand,Australia,2010
2014,AU,0,0.0025,0.175,0.3486,0.1073,Oceania,Australia and New Zealand,Australia,2010
2015,AU,0,0.0024,0.1717,0.3448,0.1019,Oceania,Australia and New Zealand,Australia,2010
2016,AU,0,0.0025,0.1743,0.3374,0.0966,Oceania,Australia and New Zealand,Australia,2010
2017,AU,0,0.0024,0.173,0.3436,0.1002,Oceania,Australia and New Zealand,Australia,2010
2018,AU,0,0.0025,0.1782,0.3376,0.0967,Oceania,Australia and New Zealand,Australia,2010
2019,AU,0,0.0024,0.1723,0.3291,0.0991,Oceania,Australia and New Zealand,Australia,2010
2020,AU,0,0.0024,0.1723,0.3291,0.0991,Oceania,Australia and New Zealand,Australia,2020
2021,AU,0,0.0024,0.1723,0.3291,0.0991,Oceania,Australia and New Zealand,Australia,2020
2022,AU,0,0.0024,0.1723,0.3291,0.0991,Oceania,Australia and New Zealand,Australia,2020
2023,AU,0,0.0024,0.1723,0.3291,0.0991,Oceania,Australia and New Zealand,Australia,2020
1980,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1981,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1982,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1983,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1984,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1985,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1986,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1987,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1988,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1989,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1980
1990,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1991,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1992,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1993,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1994,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1995,AZ,0,0.0024,0.1482,0.4287,0.1589,Asia,West Asia,Azerbaijan,1990
1996,AZ,0,0.0024,0.1465,0.4343,0.1628,Asia,West Asia,Azerbaijan,1990
1997,AZ,0,0.0024,0.1461,0.4377,0.1648,Asia,West Asia,Azerbaijan,1990
1998,AZ,0,0.0025,0.15,0.4359,0.1622,Asia,West Asia,Azerbaijan,1990
1999,AZ,0,0.0025,0.1493,0.4394,0.1644,Asia,West Asia,Azerbaijan,1990
2000,AZ,0,0.0026,0.1539,0.4365,0.1609,Asia,West Asia,Azerbaijan,2000
2001,AZ,0,0.0027,0.1563,0.4363,0.1598,Asia,West Asia,Azerbaijan,2000
2002,AZ,0,0.0038,0.202,0.3805,0.1392,Asia,West Asia,Azerbaijan,2000
2003,AZ,0,0.0037,0.2026,0.3745,0.1329,Asia,West Asia,Azerbaijan,2000
2004,AZ,0,0.0038,0.2053,0.3834,0.1426,Asia,West Asia,Azerbaijan,2000
2005,AZ,0,0.0036,0.1949,0.3916,0.147,Asia,West Asia,Azerbaijan,2000
2006,AZ,0,0.0029,0.1615,0.4293,0.1754,Asia,West Asia,Azerbaijan,2000
2007,AZ,0,0.0027,0.1538,0.4377,0.1822,Asia,West Asia,Azerbaijan,2000
2008,AZ,0,0.0037,0.1974,0.3887,0.1449,Asia,West Asia,Azerbaijan,2000
2009,AZ,0,0.0037,0.2001,0.3858,0.1426,Asia,West Asia,Azerbaijan,2000
2010,AZ,0,0.0039,0.2053,0.38,0.1382,Asia,West Asia,Azerbaijan,2010
2011,AZ,0,0.0038,0.2008,0.385,0.142,Asia,West Asia,Azerbaijan,2010
2012,AZ,0,0.0036,0.1956,0.3908,0.1465,Asia,West Asia,Azerbaijan,2010
2013,AZ,0,0.0037,0.1994,0.3865,0.1432,Asia,West Asia,Azerbaijan,2010
2014,AZ,0,0.0037,0.1994,0.3865,0.1432,Asia,West Asia,Azerbaijan,2010
2015,AZ,0,0.0038,0.2041,0.3814,0.1392,Asia,West Asia,Azerbaijan,2010
2016,AZ,0,0.004,0.211,0.3737,0.1333,Asia,West Asia,Azerbaijan,2010
2017,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2010
2018,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2010
2019,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2010
2020,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2020
2021,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2020
2022,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2020
2023,AZ,0,0.0038,0.2033,0.3822,0.1399,Asia,West Asia,Azerbaijan,2020
1980,AW,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Aruba,1980
1981,AW,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Aruba,1980
1982,AW,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Aruba,1980
1983,AW,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Aruba,1980
1984,AW,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Aruba,1980
1985,AW,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Aruba,1980
1986,AW,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Aruba,1980
1987,AW,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Aruba,1980
1988,AW,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Aruba,1980
1989,AW,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Aruba,1980
1990,AW,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Aruba,1990
1991,AW,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Aruba,1990
1992,AW,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Aruba,1990
1993,AW,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Aruba,1990
1994,AW,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Aruba,1990
1995,AW,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Aruba,1990
1996,AW,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Aruba,1990
1997,AW,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Aruba,1990
1998,AW,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Aruba,1990
1999,AW,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Aruba,1990
2000,AW,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Aruba,2000
2001,AW,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Aruba,2000
2002,AW,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Aruba,2000
2003,AW,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Aruba,2000
2004,AW,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Aruba,2000
2005,AW,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Aruba,2000
2006,AW,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Aruba,2000
2007,AW,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Aruba,2000
2008,AW,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Aruba,2000
2009,AW,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Aruba,2000
2010,AW,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Aruba,2010
2011,AW,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Aruba,2010
2012,AW,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Aruba,2010
2013,AW,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Aruba,2010
2014,AW,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Aruba,2010
2015,AW,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Aruba,2010
2016,AW,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Aruba,2010
2017,AW,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Aruba,2010
2018,AW,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Aruba,2010
2019,AW,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Aruba,2010
2020,AW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Aruba,2020
2021,AW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Aruba,2020
2022,AW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Aruba,2020
2023,AW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Aruba,2020
1980,BA,0,0.0027,0.1988,0.3047,0.0749,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1981,BA,0,0.0027,0.1987,0.3048,0.0749,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1982,BA,0,0.0027,0.1987,0.3048,0.0749,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1983,BA,0,0.0027,0.1988,0.3047,0.0749,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1984,BA,0,0.0027,0.1989,0.3047,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1985,BA,0,0.0027,0.1989,0.3047,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1986,BA,0,0.0027,0.1989,0.3046,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1987,BA,0,0.0027,0.199,0.3046,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1988,BA,0,0.0027,0.199,0.3046,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1989,BA,0,0.0027,0.199,0.3046,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1980
1990,BA,0,0.0027,0.199,0.3046,0.0748,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1991,BA,0,0.0028,0.1985,0.3072,0.0767,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1992,BA,0,0.0028,0.1978,0.3099,0.0788,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1993,BA,0,0.0028,0.197,0.3129,0.0814,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1994,BA,0,0.0028,0.1961,0.3161,0.0841,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1995,BA,0,0.0028,0.195,0.3198,0.0875,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1996,BA,0,0.0028,0.1949,0.3198,0.0875,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1997,BA,0,0.0028,0.1948,0.3198,0.0874,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1998,BA,0,0.0027,0.194,0.3224,0.09,Europe,Eastern Europe,Bosnia and Herzegovina,1990
1999,BA,0,0.0028,0.1954,0.318,0.0859,Europe,Eastern Europe,Bosnia and Herzegovina,1990
2000,BA,0,0.0028,0.1957,0.3174,0.0854,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2001,BA,0,0.0028,0.1954,0.3179,0.0857,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2002,BA,0,0.0025,0.1907,0.3257,0.0864,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2003,BA,0,0.0025,0.1857,0.3321,0.0879,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2004,BA,0,0.0026,0.1821,0.3368,0.0857,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2005,BA,0,0.0026,0.1836,0.3358,0.0864,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2006,BA,0,0.0026,0.186,0.3326,0.0845,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2007,BA,0,0.0026,0.1866,0.3283,0.0807,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2008,BA,0,0.0026,0.1844,0.3354,0.0874,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2009,BA,0,0.0026,0.184,0.3374,0.0887,Europe,Eastern Europe,Bosnia and Herzegovina,2000
2010,BA,0,0.0025,0.1826,0.3406,0.0918,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2011,BA,0,0.0025,0.1822,0.3442,0.0962,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2012,BA,0,0.0025,0.1805,0.3447,0.0963,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2013,BA,0,0.0025,0.1819,0.3476,0.0997,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2014,BA,0,0.0025,0.1826,0.3449,0.0975,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2015,BA,0,0.0025,0.1823,0.3474,0.1,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2016,BA,0,0.0025,0.1828,0.3466,0.0993,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2017,BA,0,0.0025,0.1822,0.3483,0.1007,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2018,BA,0,0.0025,0.1829,0.346,0.0987,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2019,BA,0,0.0025,0.1841,0.3424,0.0954,Europe,Eastern Europe,Bosnia and Herzegovina,2010
2020,BA,0,0.0025,0.185,0.3399,0.0933,Europe,Eastern Europe,Bosnia and Herzegovina,2020
2021,BA,0,0.0025,0.185,0.3399,0.0933,Europe,Eastern Europe,Bosnia and Herzegovina,2020
2022,BA,0,0.0025,0.185,0.3399,0.0933,Europe,Eastern Europe,Bosnia and Herzegovina,2020
2023,BA,0,0.0025,0.185,0.3399,0.0933,Europe,Eastern Europe,Bosnia and Herzegovina,2020
1980,BB,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Barbados,1980
1981,BB,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Barbados,1980
1982,BB,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Barbados,1980
1983,BB,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Barbados,1980
1984,BB,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Barbados,1980
1985,BB,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Barbados,1980
1986,BB,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Barbados,1980
1987,BB,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Barbados,1980
1988,BB,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Barbados,1980
1989,BB,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Barbados,1980
1990,BB,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Barbados,1990
1991,BB,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Barbados,1990
1992,BB,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Barbados,1990
1993,BB,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Barbados,1990
1994,BB,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Barbados,1990
1995,BB,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Barbados,1990
1996,BB,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Barbados,1990
1997,BB,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Barbados,1990
1998,BB,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Barbados,1990
1999,BB,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Barbados,1990
2000,BB,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Barbados,2000
2001,BB,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Barbados,2000
2002,BB,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Barbados,2000
2003,BB,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Barbados,2000
2004,BB,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Barbados,2000
2005,BB,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Barbados,2000
2006,BB,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Barbados,2000
2007,BB,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Barbados,2000
2008,BB,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Barbados,2000
2009,BB,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Barbados,2000
2010,BB,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Barbados,2010
2011,BB,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Barbados,2010
2012,BB,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Barbados,2010
2013,BB,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Barbados,2010
2014,BB,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Barbados,2010
2015,BB,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Barbados,2010
2016,BB,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Barbados,2010
2017,BB,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Barbados,2010
2018,BB,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Barbados,2010
2019,BB,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Barbados,2010
2020,BB,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Barbados,2020
2021,BB,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Barbados,2020
2022,BB,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Barbados,2020
2023,BB,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Barbados,2020
1980,BD,0,0.0035,0.1997,0.3652,0.1164,Asia,South Asia,Bangladesh,1980
1981,BD,0,0.0035,0.1997,0.3652,0.1164,Asia,South Asia,Bangladesh,1980
1982,BD,0,0.0035,0.1997,0.3652,0.1164,Asia,South Asia,Bangladesh,1980
1983,BD,0,0.0035,0.1997,0.3652,0.1164,Asia,South Asia,Bangladesh,1980
1984,BD,0,0.0034,0.1947,0.3774,0.1233,Asia,South Asia,Bangladesh,1980
1985,BD,0,0.0033,0.1898,0.3891,0.13,Asia,South Asia,Bangladesh,1980
1986,BD,0,0.0032,0.1869,0.3947,0.1344,Asia,South Asia,Bangladesh,1980
1987,BD,0,0.0032,0.1841,0.4001,0.1388,Asia,South Asia,Bangladesh,1980
1988,BD,0,0.0031,0.1814,0.4054,0.143,Asia,South Asia,Bangladesh,1980
1989,BD,0,0.0032,0.1838,0.3986,0.1371,Asia,South Asia,Bangladesh,1980
1990,BD,0,0.0032,0.1862,0.3919,0.1313,Asia,South Asia,Bangladesh,1990
1991,BD,0,0.0033,0.1886,0.3854,0.1258,Asia,South Asia,Bangladesh,1990
1992,BD,0,0.0031,0.1812,0.4032,0.1374,Asia,South Asia,Bangladesh,1990
1993,BD,0,0.003,0.1745,0.4196,0.1481,Asia,South Asia,Bangladesh,1990
1994,BD,0,0.0029,0.1683,0.4348,0.1579,Asia,South Asia,Bangladesh,1990
1995,BD,0,0.0028,0.1625,0.4488,0.1671,Asia,South Asia,Bangladesh,1990
1996,BD,0,0.0028,0.1619,0.4477,0.1658,Asia,South Asia,Bangladesh,1990
1997,BD,0,0.0028,0.1611,0.4468,0.1647,Asia,South Asia,Bangladesh,1990
1998,BD,0,0.0028,0.1608,0.4455,0.1633,Asia,South Asia,Bangladesh,1990
1999,BD,0,0.0027,0.1592,0.4455,0.1631,Asia,South Asia,Bangladesh,1990
2000,BD,0,0.0027,0.1585,0.4449,0.1623,Asia,South Asia,Bangladesh,2000
2001,BD,0,0.0027,0.1582,0.4459,0.1623,Asia,South Asia,Bangladesh,2000
2002,BD,0,0.0027,0.156,0.4487,0.1642,Asia,South Asia,Bangladesh,2000
2003,BD,0,0.0026,0.153,0.4522,0.1669,Asia,South Asia,Bangladesh,2000
2004,BD,0,0.0026,0.1526,0.4532,0.167,Asia,South Asia,Bangladesh,2000
2005,BD,0,0.0026,0.1516,0.4548,0.1677,Asia,South Asia,Bangladesh,2000
2006,BD,0,0.0026,0.1528,0.4513,0.1676,Asia,South Asia,Bangladesh,2000
2007,BD,0,0.0026,0.1533,0.4488,0.1682,Asia,South Asia,Bangladesh,2000
2008,BD,0,0.0027,0.1595,0.4407,0.1631,Asia,South Asia,Bangladesh,2000
2009,BD,0,0.0028,0.1622,0.4362,0.1612,Asia,South Asia,Bangladesh,2000
2010,BD,0,0.0028,0.1606,0.4363,0.1636,Asia,South Asia,Bangladesh,2010
2011,BD,0,0.0028,0.1635,0.4329,0.1625,Asia,South Asia,Bangladesh,2010
2012,BD,0,0.0028,0.1644,0.4316,0.1631,Asia,South Asia,Bangladesh,2010
2013,BD,0,0.0029,0.1656,0.4302,0.1633,Asia,South Asia,Bangladesh,2010
2014,BD,0,0.0029,0.1674,0.428,0.1627,Asia,South Asia,Bangladesh,2010
2015,BD,0,0.003,0.1702,0.4248,0.1612,Asia,South Asia,Bangladesh,2010
2016,BD,0,0.003,0.1709,0.4239,0.1615,Asia,South Asia,Bangladesh,2010
2017,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2010
2018,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2010
2019,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2010
2020,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2020
2021,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2020
2022,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2020
2023,BD,0,0.003,0.1708,0.424,0.1616,Asia,South Asia,Bangladesh,2020
1980,BE,0,0.0038,0.2139,0.3187,0.0752,Europe,Western Europe,Belgium,1980
1981,BE,0,0.0038,0.2139,0.3187,0.0752,Europe,Western Europe,Belgium,1980
1982,BE,0,0.0038,0.2139,0.3187,0.0752,Europe,Western Europe,Belgium,1980
1983,BE,0,0.0038,0.2139,0.3187,0.0752,Europe,Western Europe,Belgium,1980
1984,BE,0,0.0038,0.2139,0.3187,0.0752,Europe,Western Europe,Belgium,1980
1985,BE,0,0.0038,0.214,0.3185,0.0751,Europe,Western Europe,Belgium,1980
1986,BE,0,0.0037,0.2105,0.3255,0.0782,Europe,Western Europe,Belgium,1980
1987,BE,0,0.0036,0.2039,0.3418,0.0869,Europe,Western Europe,Belgium,1980
1988,BE,0,0.0034,0.199,0.3427,0.091,Europe,Western Europe,Belgium,1980
1989,BE,0,0.0034,0.2073,0.3393,0.0911,Europe,Western Europe,Belgium,1980
1990,BE,0,0.0037,0.2142,0.3273,0.0829,Europe,Western Europe,Belgium,1990
1991,BE,0,0.0037,0.2131,0.3246,0.0786,Europe,Western Europe,Belgium,1990
1992,BE,0,0.0036,0.2115,0.3199,0.0756,Europe,Western Europe,Belgium,1990
1993,BE,0,0.0037,0.2127,0.3209,0.0758,Europe,Western Europe,Belgium,1990
1994,BE,0,0.0036,0.2077,0.3303,0.0819,Europe,Western Europe,Belgium,1990
1995,BE,0,0.0036,0.2107,0.3249,0.0807,Europe,Western Europe,Belgium,1990
1996,BE,0,0.0036,0.2071,0.3291,0.0839,Europe,Western Europe,Belgium,1990
1997,BE,0,0.0035,0.205,0.3282,0.083,Europe,Western Europe,Belgium,1990
1998,BE,0,0.0035,0.2043,0.3258,0.0813,Europe,Western Europe,Belgium,1990
1999,BE,0,0.0035,0.2027,0.3269,0.0821,Europe,Western Europe,Belgium,1990
2000,BE,0,0.0034,0.2003,0.3262,0.0821,Europe,Western Europe,Belgium,2000
2001,BE,0,0.0035,0.2033,0.3221,0.0797,Europe,Western Europe,Belgium,2000
2002,BE,0,0.0035,0.2071,0.315,0.0762,Europe,Western Europe,Belgium,2000
2003,BE,0,0.0034,0.2013,0.3155,0.0768,Europe,Western Europe,Belgium,2000
2004,BE,0,0.0034,0.2007,0.3222,0.0854,Europe,Western Europe,Belgium,2000
2005,BE,0,0.0034,0.2023,0.3199,0.0845,Europe,Western Europe,Belgium,2000
2006,BE,0,0.0034,0.2017,0.3243,0.0873,Europe,Western Europe,Belgium,2000
2007,BE,0,0.0034,0.2002,0.3336,0.0953,Europe,Western Europe,Belgium,2000
2008,BE,0,0.0035,0.2099,0.3174,0.0851,Europe,Western Europe,Belgium,2000
2009,BE,0,0.0036,0.2108,0.3095,0.0751,Europe,Western Europe,Belgium,2000
2010,BE,0,0.0035,0.2059,0.3137,0.0765,Europe,Western Europe,Belgium,2010
2011,BE,0,0.0036,0.2115,0.3116,0.0795,Europe,Western Europe,Belgium,2010
2012,BE,0,0.0036,0.2115,0.314,0.0819,Europe,Western Europe,Belgium,2010
2013,BE,0,0.0036,0.2106,0.3166,0.0821,Europe,Western Europe,Belgium,2010
2014,BE,0,0.0036,0.2096,0.319,0.0836,Europe,Western Europe,Belgium,2010
2015,BE,0,0.0036,0.2095,0.3186,0.0849,Europe,Western Europe,Belgium,2010
2016,BE,0,0.0036,0.211,0.3215,0.0866,Europe,Western Europe,Belgium,2010
2017,BE,0,0.0036,0.2114,0.3186,0.0852,Europe,Western Europe,Belgium,2010
2018,BE,0,0.0035,0.2042,0.3285,0.086,Europe,Western Europe,Belgium,2010
2019,BE,0,0.0035,0.2025,0.3296,0.0866,Europe,Western Europe,Belgium,2010
2020,BE,0,0.0035,0.2036,0.328,0.0852,Europe,Western Europe,Belgium,2020
2021,BE,0,0.0035,0.2036,0.328,0.0852,Europe,Western Europe,Belgium,2020
2022,BE,0,0.0035,0.2036,0.328,0.0852,Europe,Western Europe,Belgium,2020
2023,BE,0,0.0035,0.2036,0.328,0.0852,Europe,Western Europe,Belgium,2020
1980,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1981,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1982,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1983,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1984,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1985,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1986,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1987,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1988,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1989,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1980
1990,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1990
1991,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1990
1992,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1990
1993,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1990
1994,BF,0,0.0016,0.1009,0.5794,0.2126,Africa,West Africa,Burkina Faso,1990
1995,BF,0,0.0016,0.1001,0.5893,0.2257,Africa,West Africa,Burkina Faso,1990
1996,BF,0,0.0016,0.0993,0.5991000000000001,0.2388,Africa,West Africa,Burkina Faso,1990
1997,BF,0,0.0016,0.0984,0.609,0.2518,Africa,West Africa,Burkina Faso,1990
1998,BF,0,0.0016,0.0976,0.6188,0.2649,Africa,West Africa,Burkina Faso,1990
1999,BF,0,0.0016,0.1009,0.608,0.2564,Africa,West Africa,Burkina Faso,1990
2000,BF,0,0.0017,0.1042,0.5973,0.248,Africa,West Africa,Burkina Faso,2000
2001,BF,0,0.0017,0.1074,0.5865,0.2396,Africa,West Africa,Burkina Faso,2000
2002,BF,0,0.0018,0.1107,0.5757,0.2311,Africa,West Africa,Burkina Faso,2000
2003,BF,0,0.0018,0.114,0.5649000000000001,0.2227,Africa,West Africa,Burkina Faso,2000
2004,BF,0,0.0019,0.1173,0.5541,0.2142,Africa,West Africa,Burkina Faso,2000
2005,BF,0,0.0019,0.1205,0.5433,0.2057,Africa,West Africa,Burkina Faso,2000
2006,BF,0,0.002,0.1238,0.5325,0.1972,Africa,West Africa,Burkina Faso,2000
2007,BF,0,0.002,0.1271,0.5217,0.1888,Africa,West Africa,Burkina Faso,2000
2008,BF,0,0.0021,0.1304,0.5109,0.1803,Africa,West Africa,Burkina Faso,2000
2009,BF,0,0.0022,0.1337,0.5,0.1718,Africa,West Africa,Burkina Faso,2000
2010,BF,0,0.0022,0.137,0.4945000000000001,0.1665,Africa,West Africa,Burkina Faso,2010
2011,BF,0,0.0023,0.1404,0.489,0.1613,Africa,West Africa,Burkina Faso,2010
2012,BF,0,0.0024,0.1437,0.4835,0.156,Africa,West Africa,Burkina Faso,2010
2013,BF,0,0.0025,0.1471,0.478,0.1507,Africa,West Africa,Burkina Faso,2010
2014,BF,0,0.0026,0.1504,0.4724,0.1454,Africa,West Africa,Burkina Faso,2010
2015,BF,0,0.0024,0.1428,0.4878,0.1508,Africa,West Africa,Burkina Faso,2010
2016,BF,0,0.0023,0.1353,0.5032,0.1562,Africa,West Africa,Burkina Faso,2010
2017,BF,0,0.0021,0.1277,0.5185000000000001,0.1616,Africa,West Africa,Burkina Faso,2010
2018,BF,0,0.002,0.1202,0.5337000000000001,0.1669,Africa,West Africa,Burkina Faso,2010
2019,BF,0,0.0021,0.128,0.5143,0.1604,Africa,West Africa,Burkina Faso,2010
2020,BF,0,0.0022,0.1359,0.4949,0.1539,Africa,West Africa,Burkina Faso,2020
2021,BF,0,0.0023,0.1438,0.4755,0.1473,Africa,West Africa,Burkina Faso,2020
2022,BF,0,0.0023,0.1438,0.4755,0.1473,Africa,West Africa,Burkina Faso,2020
2023,BF,0,0.0023,0.1438,0.4755,0.1473,Africa,West Africa,Burkina Faso,2020
1980,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1981,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1982,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1983,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1984,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1985,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1986,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1987,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1988,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1989,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1980
1990,BG,0,0.0031,0.1959,0.3217,0.0829,Europe,Eastern Europe,Bulgaria,1990
1991,BG,0,0.0031,0.1959,0.3217,0.083,Europe,Eastern Europe,Bulgaria,1990
1992,BG,0,0.0031,0.1959,0.3218,0.083,Europe,Eastern Europe,Bulgaria,1990
1993,BG,0,0.0031,0.1959,0.3218,0.0831,Europe,Eastern Europe,Bulgaria,1990
1994,BG,0,0.0031,0.1958,0.322,0.0831,Europe,Eastern Europe,Bulgaria,1990
1995,BG,0,0.0031,0.1958,0.322,0.0831,Europe,Eastern Europe,Bulgaria,1990
1996,BG,0,0.0031,0.1949,0.3246,0.0858,Europe,Eastern Europe,Bulgaria,1990
1997,BG,0,0.0031,0.1933,0.3297,0.0905,Europe,Eastern Europe,Bulgaria,1990
1998,BG,0,0.0031,0.1918,0.3343,0.0946,Europe,Eastern Europe,Bulgaria,1990
1999,BG,0,0.003,0.1906,0.3377,0.0978,Europe,Eastern Europe,Bulgaria,1990
2000,BG,0,0.003,0.1903,0.3401,0.1009,Europe,Eastern Europe,Bulgaria,2000
2001,BG,0,0.003,0.1893,0.3431,0.1042,Europe,Eastern Europe,Bulgaria,2000
2002,BG,0,0.003,0.1872,0.349,0.1095,Europe,Eastern Europe,Bulgaria,2000
2003,BG,0,0.003,0.1875,0.3473,0.1075,Europe,Eastern Europe,Bulgaria,2000
2004,BG,0,0.003,0.1863,0.351,0.1109,Europe,Eastern Europe,Bulgaria,2000
2005,BG,0,0.003,0.1862,0.3514,0.1113,Europe,Eastern Europe,Bulgaria,2000
2006,BG,0,0.003,0.1879,0.346,0.1061,Europe,Eastern Europe,Bulgaria,2000
2007,BG,0,0.0031,0.1894,0.3437,0.102,Europe,Eastern Europe,Bulgaria,2000
2008,BG,0,0.0032,0.1926,0.3379,0.095,Europe,Eastern Europe,Bulgaria,2000
2009,BG,0,0.0032,0.1933,0.3668,0.1318,Europe,Eastern Europe,Bulgaria,2000
2010,BG,0,0.0031,0.191,0.3651,0.1312,Europe,Eastern Europe,Bulgaria,2010
2011,BG,0,0.0031,0.1916,0.3674,0.1372,Europe,Eastern Europe,Bulgaria,2010
2012,BG,0,0.0029,0.1805,0.3873,0.1516,Europe,Eastern Europe,Bulgaria,2010
2013,BG,0,0.0032,0.1931,0.3712,0.1367,Europe,Eastern Europe,Bulgaria,2010
2014,BG,0,0.003,0.1814,0.3886,0.1481,Europe,Eastern Europe,Bulgaria,2010
2015,BG,0,0.003,0.1776,0.3988,0.1512,Europe,Eastern Europe,Bulgaria,2010
2016,BG,0,0.0028,0.1667,0.425,0.1751,Europe,Eastern Europe,Bulgaria,2010
2017,BG,0,0.0027,0.1601,0.4484,0.2005,Europe,Eastern Europe,Bulgaria,2010
2018,BG,0,0.0028,0.1614,0.4463,0.1945,Europe,Eastern Europe,Bulgaria,2010
2019,BG,0,0.0028,0.1615,0.4452,0.1921,Europe,Eastern Europe,Bulgaria,2010
2020,BG,0,0.0028,0.1617,0.4447,0.1917,Europe,Eastern Europe,Bulgaria,2020
2021,BG,0,0.0029,0.1705,0.4187,0.1683,Europe,Eastern Europe,Bulgaria,2020
2022,BG,0,0.0029,0.1703,0.4192,0.1688,Europe,Eastern Europe,Bulgaria,2020
2023,BG,0,0.0029,0.1703,0.4191,0.1687,Europe,Eastern Europe,Bulgaria,2020
1980,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1981,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1982,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1983,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1984,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1985,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1986,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1987,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1988,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1989,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1980
1990,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1991,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1992,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1993,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1994,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1995,BH,0,0.0018,0.109,0.5646,0.2211,Asia,West Asia,Bahrain,1990
1996,BH,0,0.0017,0.1076,0.5676,0.2229,Asia,West Asia,Bahrain,1990
1997,BH,0,0.0017,0.1061,0.5706,0.2249,Asia,West Asia,Bahrain,1990
1998,BH,0,0.0017,0.1047,0.5737,0.2268,Asia,West Asia,Bahrain,1990
1999,BH,0,0.0017,0.1032,0.5768,0.2288,Asia,West Asia,Bahrain,1990
2000,BH,0,0.0016,0.1017,0.5800000000000001,0.2308,Asia,West Asia,Bahrain,2000
2001,BH,0,0.0016,0.1002,0.5832,0.2328,Asia,West Asia,Bahrain,2000
2002,BH,0,0.0016,0.0986,0.5864,0.2349,Asia,West Asia,Bahrain,2000
2003,BH,0,0.0016,0.0971,0.5897,0.237,Asia,West Asia,Bahrain,2000
2004,BH,0,0.0015,0.0955,0.5931000000000001,0.2392,Asia,West Asia,Bahrain,2000
2005,BH,0,0.0015,0.0938,0.5965,0.2413,Asia,West Asia,Bahrain,2000
2006,BH,0,0.0016,0.1026,0.5744,0.2223,Asia,West Asia,Bahrain,2000
2007,BH,0,0.0018,0.1124,0.5499,0.2012,Asia,West Asia,Bahrain,2000
2008,BH,0,0.0019,0.1232,0.5226000000000001,0.1777,Asia,West Asia,Bahrain,2000
2009,BH,0,0.0021,0.1354,0.492,0.1514,Asia,West Asia,Bahrain,2000
2010,BH,0,0.002,0.1296,0.5078,0.1706,Asia,West Asia,Bahrain,2010
2011,BH,0,0.002,0.124,0.5229,0.189,Asia,West Asia,Bahrain,2010
2012,BH,0,0.0019,0.1186,0.5373,0.2065,Asia,West Asia,Bahrain,2010
2013,BH,0,0.0018,0.1135,0.5511,0.2234,Asia,West Asia,Bahrain,2010
2014,BH,0,0.0017,0.1086,0.5643,0.2395,Asia,West Asia,Bahrain,2010
2015,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2010
2016,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2010
2017,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2010
2018,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2010
2019,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2010
2020,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2020
2021,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2020
2022,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2020
2023,BH,0,0.0017,0.1039,0.5770000000000001,0.255,Asia,West Asia,Bahrain,2020
1980,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1981,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1982,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1983,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1984,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1985,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1986,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1987,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1988,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1989,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1980
1990,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1991,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1992,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1993,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1994,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1995,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1996,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1997,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1998,BI,0,0.002,0.1282,0.5041,0.1749,Africa,East Africa,Burundi,1990
1999,BI,0,0.0021,0.1318,0.4976,0.1692,Africa,East Africa,Burundi,1990
2000,BI,0,0.0022,0.1354,0.4911,0.1635,Africa,East Africa,Burundi,2000
2001,BI,0,0.0022,0.139,0.4845,0.1577,Africa,East Africa,Burundi,2000
2002,BI,0,0.0023,0.1426,0.478,0.152,Africa,East Africa,Burundi,2000
2003,BI,0,0.0024,0.1462,0.4714,0.1462,Africa,East Africa,Burundi,2000
2004,BI,0,0.0025,0.1499,0.4647,0.1404,Africa,East Africa,Burundi,2000
2005,BI,0,0.0026,0.1535,0.4581,0.1346,Africa,East Africa,Burundi,2000
2006,BI,0,0.0027,0.1572,0.4514,0.1288,Africa,East Africa,Burundi,2000
2007,BI,0,0.0027,0.1548,0.4561,0.1314,Africa,East Africa,Burundi,2000
2008,BI,0,0.0026,0.1523,0.4607,0.1341,Africa,East Africa,Burundi,2000
2009,BI,0,0.0025,0.1499,0.4654,0.1368,Africa,East Africa,Burundi,2000
2010,BI,0,0.0025,0.1475,0.47,0.1395,Africa,East Africa,Burundi,2010
2011,BI,0,0.0024,0.145,0.4746,0.1421,Africa,East Africa,Burundi,2010
2012,BI,0,0.0023,0.1426,0.4792,0.1448,Africa,East Africa,Burundi,2010
2013,BI,0,0.0023,0.1402,0.4838,0.1474,Africa,East Africa,Burundi,2010
2014,BI,0,0.0023,0.1407,0.4819000000000001,0.147,Africa,East Africa,Burundi,2010
2015,BI,0,0.0023,0.1413,0.4801,0.1467,Africa,East Africa,Burundi,2010
2016,BI,0,0.0023,0.1418,0.4783,0.1463,Africa,East Africa,Burundi,2010
2017,BI,0,0.0023,0.1424,0.4764,0.1459,Africa,East Africa,Burundi,2010
2018,BI,0,0.0023,0.1429,0.4746,0.1456,Africa,East Africa,Burundi,2010
2019,BI,0,0.0023,0.1435,0.4728,0.1452,Africa,East Africa,Burundi,2010
2020,BI,0,0.0023,0.144,0.4709,0.1448,Africa,East Africa,Burundi,2020
2021,BI,0,0.0023,0.144,0.4709,0.1448,Africa,East Africa,Burundi,2020
2022,BI,0,0.0023,0.144,0.4709,0.1448,Africa,East Africa,Burundi,2020
2023,BI,0,0.0023,0.144,0.4709,0.1448,Africa,East Africa,Burundi,2020
1980,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1981,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1982,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1983,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1984,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1985,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1986,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1987,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1988,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1989,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1980
1990,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1991,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1992,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1993,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1994,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1995,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1996,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1997,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1998,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
1999,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,1990
2000,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,2000
2001,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,2000
2002,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,2000
2003,BJ,0,0.0023,0.1391,0.4871,0.162,Africa,West Africa,Benin,2000
2004,BJ,0,0.0022,0.1366,0.4911,0.1609,Africa,West Africa,Benin,2000
2005,BJ,0,0.0022,0.1341,0.4951,0.1598,Africa,West Africa,Benin,2000
2006,BJ,0,0.0021,0.1315,0.499,0.1587,Africa,West Africa,Benin,2000
2007,BJ,0,0.0021,0.129,0.503,0.1576,Africa,West Africa,Benin,2000
2008,BJ,0,0.0021,0.1265,0.507,0.1565,Africa,West Africa,Benin,2000
2009,BJ,0,0.002,0.124,0.5109,0.1554,Africa,West Africa,Benin,2000
2010,BJ,0,0.002,0.1215,0.5149,0.1544,Africa,West Africa,Benin,2010
2011,BJ,0,0.0019,0.119,0.5188,0.1533,Africa,West Africa,Benin,2010
2012,BJ,0,0.0019,0.1178,0.5261,0.1588,Africa,West Africa,Benin,2010
2013,BJ,0,0.0018,0.1166,0.5333,0.1642,Africa,West Africa,Benin,2010
2014,BJ,0,0.0017,0.1154,0.5404,0.1697,Africa,West Africa,Benin,2010
2015,BJ,0,0.0016,0.1142,0.5475,0.1751,Africa,West Africa,Benin,2010
2016,BJ,0,0.0019,0.1231,0.5227,0.1649,Africa,West Africa,Benin,2010
2017,BJ,0,0.0021,0.1322,0.4976,0.1547,Africa,West Africa,Benin,2010
2018,BJ,0,0.0023,0.1413,0.4723,0.1443,Africa,West Africa,Benin,2010
2019,BJ,0,0.0024,0.1467,0.4605,0.139,Africa,West Africa,Benin,2010
2020,BJ,0,0.0025,0.1522,0.4486,0.1337,Africa,West Africa,Benin,2020
2021,BJ,0,0.0026,0.1576,0.4367,0.1284,Africa,West Africa,Benin,2020
2022,BJ,0,0.0026,0.1576,0.4367,0.1284,Africa,West Africa,Benin,2020
2023,BJ,0,0.0026,0.1576,0.4367,0.1284,Africa,West Africa,Benin,2020
1980,BM,0,0.0028,0.2121,0.3534,0.0885,Americas,North America,Bermuda,1980
1981,BM,0,0.0027,0.2117,0.3543,0.09,Americas,North America,Bermuda,1980
1982,BM,0,0.0027,0.2113,0.3553,0.0914,Americas,North America,Bermuda,1980
1983,BM,0,0.0027,0.2108,0.3562,0.0929,Americas,North America,Bermuda,1980
1984,BM,0,0.0027,0.2104,0.3572,0.0944,Americas,North America,Bermuda,1980
1985,BM,0,0.0027,0.21,0.3581,0.096,Americas,North America,Bermuda,1980
1986,BM,0,0.0027,0.2095,0.3591,0.0976,Americas,North America,Bermuda,1980
1987,BM,0,0.0027,0.209,0.3602,0.0992,Americas,North America,Bermuda,1980
1988,BM,0,0.0027,0.2086,0.3612,0.1008,Americas,North America,Bermuda,1980
1989,BM,0,0.0027,0.2081,0.3623,0.1025,Americas,North America,Bermuda,1980
1990,BM,0,0.0027,0.2076,0.3634,0.1042,Americas,North America,Bermuda,1990
1991,BM,0,0.0027,0.2075,0.3665,0.107,Americas,North America,Bermuda,1990
1992,BM,0,0.0027,0.2075,0.3695,0.1096,Americas,North America,Bermuda,1990
1993,BM,0,0.0027,0.2075,0.3725,0.1122,Americas,North America,Bermuda,1990
1994,BM,0,0.0027,0.2074,0.3753,0.1147,Americas,North America,Bermuda,1990
1995,BM,0,0.0027,0.2074,0.3781,0.1172,Americas,North America,Bermuda,1990
1996,BM,0,0.0027,0.2073,0.3808,0.1195,Americas,North America,Bermuda,1990
1997,BM,0,0.0027,0.2073,0.3834,0.1218,Americas,North America,Bermuda,1990
1998,BM,0,0.0027,0.2073,0.3859,0.124,Americas,North America,Bermuda,1990
1999,BM,0,0.0027,0.2072,0.3883,0.1261,Americas,North America,Bermuda,1990
2000,BM,0,0.0027,0.2072,0.3907,0.1282,Americas,North America,Bermuda,2000
2001,BM,0,0.0026,0.2027,0.3995,0.132,Americas,North America,Bermuda,2000
2002,BM,0,0.0026,0.1983,0.408,0.1358,Americas,North America,Bermuda,2000
2003,BM,0,0.0025,0.194,0.4164,0.1394,Americas,North America,Bermuda,2000
2004,BM,0,0.0025,0.1898,0.4246,0.1429,Americas,North America,Bermuda,2000
2005,BM,0,0.0024,0.1857,0.4326,0.1464,Americas,North America,Bermuda,2000
2006,BM,0,0.0023,0.1817,0.4404,0.1498,Americas,North America,Bermuda,2000
2007,BM,0,0.0023,0.1778,0.448,0.1531,Americas,North America,Bermuda,2000
2008,BM,0,0.0022,0.1739,0.4554,0.1564,Americas,North America,Bermuda,2000
2009,BM,0,0.0022,0.1702,0.4627,0.1595,Americas,North America,Bermuda,2000
2010,BM,0,0.0021,0.1665,0.4699,0.1626,Americas,North America,Bermuda,2010
2011,BM,0,0.0021,0.1655,0.4718,0.1624,Americas,North America,Bermuda,2010
2012,BM,0,0.0021,0.1645,0.4737,0.1622,Americas,North America,Bermuda,2010
2013,BM,0,0.0021,0.1636,0.4754,0.162,Americas,North America,Bermuda,2010
2014,BM,0,0.0021,0.1627,0.4771,0.1618,Americas,North America,Bermuda,2010
2015,BM,0,0.0021,0.1619,0.4788,0.1617,Americas,North America,Bermuda,2010
2016,BM,0,0.0021,0.1611,0.4803,0.1615,Americas,North America,Bermuda,2010
2017,BM,0,0.002,0.1603,0.4818,0.1613,Americas,North America,Bermuda,2010
2018,BM,0,0.002,0.1596,0.4832,0.1612,Americas,North America,Bermuda,2010
2019,BM,0,0.002,0.1589,0.4846,0.161,Americas,North America,Bermuda,2010
2020,BM,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Bermuda,2020
2021,BM,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Bermuda,2020
2022,BM,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Bermuda,2020
2023,BM,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Bermuda,2020
1980,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1981,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1982,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1983,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1984,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1985,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1986,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1987,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1988,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1989,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1980
1990,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1991,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1992,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1993,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1994,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1995,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1996,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1997,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1998,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
1999,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,1990
2000,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2001,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2002,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2003,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2004,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2005,BN,0,0.0036,0.186,0.364,0.1244,Asia,South-East Asia,Brunei Darussalam,2000
2006,BN,0,0.0036,0.1897,0.3606,0.123,Asia,South-East Asia,Brunei Darussalam,2000
2007,BN,0,0.0036,0.1922,0.3589,0.1229,Asia,South-East Asia,Brunei Darussalam,2000
2008,BN,0,0.0036,0.1945,0.3574,0.1229,Asia,South-East Asia,Brunei Darussalam,2000
2009,BN,0,0.0036,0.1947,0.3588,0.1252,Asia,South-East Asia,Brunei Darussalam,2000
2010,BN,0,0.0036,0.197,0.3574,0.1253,Asia,South-East Asia,Brunei Darussalam,2010
2011,BN,0,0.0037,0.2007,0.3542,0.1241,Asia,South-East Asia,Brunei Darussalam,2010
2012,BN,0,0.0037,0.2007,0.3544,0.124,Asia,South-East Asia,Brunei Darussalam,2010
2013,BN,0,0.0036,0.1989,0.3572,0.1256,Asia,South-East Asia,Brunei Darussalam,2010
2014,BN,0,0.0036,0.1955,0.362,0.1288,Asia,South-East Asia,Brunei Darussalam,2010
2015,BN,0,0.0035,0.1938,0.3645,0.1303,Asia,South-East Asia,Brunei Darussalam,2010
2016,BN,0,0.0035,0.1914,0.368,0.1325,Asia,South-East Asia,Brunei Darussalam,2010
2017,BN,0,0.0035,0.1919,0.3674,0.1321,Asia,South-East Asia,Brunei Darussalam,2010
2018,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2010
2019,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2010
2020,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2020
2021,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2020
2022,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2020
2023,BN,0,0.0035,0.1926,0.3664,0.1314,Asia,South-East Asia,Brunei Darussalam,2020
1980,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1981,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1982,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1983,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1984,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1985,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1986,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1987,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1988,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1989,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1980
1990,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1991,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1992,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1993,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1994,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1995,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1996,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1997,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1998,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
1999,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,1990
2000,BO,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Bolivia,2000
2001,BO,0,0.0001,0.0805,0.5636,0.1984,Americas,South America,Bolivia,2000
2002,BO,0,0,0.0809,0.5626,0.1928,Americas,South America,Bolivia,2000
2003,BO,0,0,0.0854,0.5605,0.2043,Americas,South America,Bolivia,2000
2004,BO,0,0.0001,0.0878,0.556,0.1999,Americas,South America,Bolivia,2000
2005,BO,0,0.0001,0.087,0.5555,0.193,Americas,South America,Bolivia,2000
2006,BO,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,South America,Bolivia,2000
2007,BO,0,0.0002,0.0888,0.5641,0.211,Americas,South America,Bolivia,2000
2008,BO,0,0.0003,0.0903,0.56,0.2029,Americas,South America,Bolivia,2000
2009,BO,0,0.0004,0.0926,0.5486,0.1928,Americas,South America,Bolivia,2000
2010,BO,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,South America,Bolivia,2010
2011,BO,0,0.0005,0.0976,0.541,0.1982,Americas,South America,Bolivia,2010
2012,BO,0,0.0005,0.1001,0.5332,0.197,Americas,South America,Bolivia,2010
2013,BO,0,0.0006,0.1006,0.5404,0.2057,Americas,South America,Bolivia,2010
2014,BO,0,0.0005,0.1026,0.5304,0.2046,Americas,South America,Bolivia,2010
2015,BO,0,0.0005,0.1032,0.5312,0.1942,Americas,South America,Bolivia,2010
2016,BO,0,0.0004,0.1034,0.5334,0.1984,Americas,South America,Bolivia,2010
2017,BO,0,0.0003,0.1031,0.5311,0.1884,Americas,South America,Bolivia,2010
2018,BO,0,0.0003,0.1016,0.5354,0.1976,Americas,South America,Bolivia,2010
2019,BO,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,South America,Bolivia,2010
2020,BO,0,0.0001,0.0872,0.5466,0.2043,Americas,South America,Bolivia,2020
2021,BO,0,0.0001,0.0972,0.5299,0.1892,Americas,South America,Bolivia,2020
2022,BO,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Bolivia,2020
2023,BO,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Bolivia,2020
1980,BQ,0,0.0009,0.0819,0.5594,0.2375,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1981,BQ,0,0.0009,0.0816,0.5593,0.2364,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1982,BQ,0,0.0009,0.0813,0.5593,0.2353,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1983,BQ,0,0.0009,0.081,0.5593,0.2342,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1984,BQ,0,0.0009,0.0807,0.5592,0.2331,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1985,BQ,0,0.0009,0.0803,0.5592,0.2319,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1986,BQ,0,0.0009,0.08,0.5592,0.2307,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1987,BQ,0,0.0009,0.0796,0.5591,0.2295,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1988,BQ,0,0.0009,0.0793,0.5591,0.2283,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1989,BQ,0,0.0008,0.0789,0.5591,0.227,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1980
1990,BQ,0,0.0008,0.0785,0.559,0.2258,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1991,BQ,0,0.0008,0.0789,0.558,0.2257,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1992,BQ,0,0.0008,0.0793,0.557,0.2255,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1993,BQ,0,0.0008,0.0797,0.556,0.2254,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1994,BQ,0,0.0008,0.08,0.555,0.2253,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1995,BQ,0,0.0008,0.0804,0.554,0.2252,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1996,BQ,0,0.0008,0.0807,0.5531,0.2251,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1997,BQ,0,0.0008,0.0811,0.5521,0.225,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1998,BQ,0,0.0008,0.0814,0.5512,0.2249,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
1999,BQ,0,0.0008,0.0818,0.5503,0.2248,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,1990
2000,BQ,0,0.0008,0.0821,0.5494,0.2247,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2001,BQ,0,0.0008,0.0826,0.5477000000000001,0.2231,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2002,BQ,0,0.0008,0.083,0.546,0.2216,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2003,BQ,0,0.0008,0.0835,0.5445,0.2202,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2004,BQ,0,0.0008,0.0839,0.543,0.2189,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2005,BQ,0,0.0008,0.0843,0.5416000000000001,0.2176,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2006,BQ,0,0.0009,0.0846,0.5403,0.2164,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2007,BQ,0,0.0009,0.085,0.539,0.2153,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2008,BQ,0,0.0009,0.0853,0.5378000000000001,0.2142,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2009,BQ,0,0.0009,0.0857,0.5366000000000001,0.2131,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2000
2010,BQ,0,0.0009,0.086,0.5355,0.2121,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2011,BQ,0,0.0009,0.0917,0.5303,0.212,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2012,BQ,0,0.001,0.0974,0.5252,0.212,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2013,BQ,0,0.001,0.103,0.52,0.212,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2014,BQ,0,0.001,0.1086,0.515,0.212,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2015,BQ,0,0.0011,0.1141,0.5099,0.2119,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2016,BQ,0,0.0011,0.1197,0.5049,0.2119,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2017,BQ,0,0.0012,0.1251,0.4999,0.2119,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2018,BQ,0,0.0012,0.1306,0.4950000000000001,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2019,BQ,0,0.0012,0.136,0.4901,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2010
2020,BQ,0,0.0013,0.1413,0.4852,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2020
2021,BQ,0,0.0013,0.1413,0.4852,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2020
2022,BQ,0,0.0013,0.1413,0.4852,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2020
2023,BQ,0,0.0013,0.1413,0.4852,0.2118,Bonaire, Sint Eustatius and Saba, Sint Eustatius and Saba,2020
1980,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1981,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1982,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1983,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1984,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1985,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1986,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1987,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1988,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1989,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1980
1990,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1991,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1992,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1993,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1994,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1995,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1996,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1997,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1998,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
1999,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,1990
2000,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,2000
2001,BR,0,0,0.0921,0.5859,0.2215,Americas,South America,Brazil,2000
2002,BR,0,0,0.0909,0.5957,0.2246,Americas,South America,Brazil,2000
2003,BR,0,0,0.0942,0.5900000000000001,0.2272,Americas,South America,Brazil,2000
2004,BR,0,0,0.0969,0.5798,0.2251,Americas,South America,Brazil,2000
2005,BR,0,0,0.0918,0.6024,0.2294,Americas,South America,Brazil,2000
2006,BR,0,0,0.0942,0.6023000000000001,0.2347,Americas,South America,Brazil,2000
2007,BR,0,0,0.101,0.5864,0.2388,Americas,South America,Brazil,2000
2008,BR,0,0.0001,0.1018,0.5909,0.2343,Americas,South America,Brazil,2000
2009,BR,0,0.0001,0.1031,0.5871000000000001,0.2228,Americas,South America,Brazil,2000
2010,BR,0,0,0.1023,0.5948,0.2349,Americas,South America,Brazil,2010
2011,BR,0,0,0.1016,0.6026,0.2469,Americas,South America,Brazil,2010
2012,BR,0,0,0.1057,0.5939,0.2542,Americas,South America,Brazil,2010
2013,BR,0,0,0.1077,0.5840000000000001,0.2368,Americas,South America,Brazil,2010
2014,BR,0,0.0001,0.1068,0.5870000000000001,0.2404,Americas,South America,Brazil,2010
2015,BR,0,0,0.1028,0.599,0.2277,Americas,South America,Brazil,2010
2016,BR,0,0,0.0971,0.5896,0.2112,Americas,South America,Brazil,2010
2017,BR,0,0,0.0972,0.5842,0.209,Americas,South America,Brazil,2010
2018,BR,0,0,0.0976,0.5809000000000001,0.2069,Americas,South America,Brazil,2010
2019,BR,0,0,0.1013,0.5706,0.2034,Americas,South America,Brazil,2010
2020,BR,0,0,0.0826,0.5978,0.2209,Americas,South America,Brazil,2020
2021,BR,0,0,0.0848,0.5929,0.218,Americas,South America,Brazil,2020
2022,BR,0,0,0.0912,0.5921000000000001,0.2113,Americas,South America,Brazil,2020
2023,BR,0,0,0.0912,0.5921000000000001,0.2113,Americas,South America,Brazil,2020
1980,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1981,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1982,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1983,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1984,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1985,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1986,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1987,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1988,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1989,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1980
1990,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1991,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1992,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1993,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1994,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1995,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1996,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1997,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1998,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
1999,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,1990
2000,BS,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Bahamas,2000
2001,BS,0,0.0001,0.0805,0.5636,0.1984,Americas,Caribbean,Bahamas,2000
2002,BS,0,0,0.0809,0.5626,0.1928,Americas,Caribbean,Bahamas,2000
2003,BS,0,0,0.0854,0.5605,0.2043,Americas,Caribbean,Bahamas,2000
2004,BS,0,0.0001,0.0878,0.556,0.1999,Americas,Caribbean,Bahamas,2000
2005,BS,0,0.0001,0.087,0.5555,0.193,Americas,Caribbean,Bahamas,2000
2006,BS,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Caribbean,Bahamas,2000
2007,BS,0,0.0002,0.0888,0.5641,0.211,Americas,Caribbean,Bahamas,2000
2008,BS,0,0.0003,0.0903,0.56,0.2029,Americas,Caribbean,Bahamas,2000
2009,BS,0,0.0004,0.0926,0.5486,0.1928,Americas,Caribbean,Bahamas,2000
2010,BS,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Caribbean,Bahamas,2010
2011,BS,0,0.0005,0.0976,0.541,0.1982,Americas,Caribbean,Bahamas,2010
2012,BS,0,0.0005,0.1001,0.5332,0.197,Americas,Caribbean,Bahamas,2010
2013,BS,0,0.0006,0.1006,0.5404,0.2057,Americas,Caribbean,Bahamas,2010
2014,BS,0,0.0005,0.1026,0.5304,0.2046,Americas,Caribbean,Bahamas,2010
2015,BS,0,0.0005,0.1032,0.5312,0.1942,Americas,Caribbean,Bahamas,2010
2016,BS,0,0.0004,0.1034,0.5334,0.1984,Americas,Caribbean,Bahamas,2010
2017,BS,0,0.0003,0.1031,0.5311,0.1884,Americas,Caribbean,Bahamas,2010
2018,BS,0,0.0003,0.1016,0.5354,0.1976,Americas,Caribbean,Bahamas,2010
2019,BS,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Caribbean,Bahamas,2010
2020,BS,0,0.0001,0.0872,0.5466,0.2043,Americas,Caribbean,Bahamas,2020
2021,BS,0,0.0001,0.0972,0.5299,0.1892,Americas,Caribbean,Bahamas,2020
2022,BS,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Bahamas,2020
2023,BS,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Bahamas,2020
1980,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1981,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1982,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1983,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1984,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1985,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1986,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1987,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1988,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1989,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1980
1990,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1991,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1992,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1993,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1994,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1995,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1996,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1997,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1998,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
1999,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,1990
2000,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,2000
2001,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,2000
2002,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,2000
2003,BT,0,0.0019,0.1225,0.4919,0.1808,Asia,South Asia,Bhutan,2000
2004,BT,0,0.002,0.1283,0.4786,0.1721,Asia,South Asia,Bhutan,2000
2005,BT,0,0.0021,0.1329,0.4674,0.165,Asia,South Asia,Bhutan,2000
2006,BT,0,0.0022,0.1362,0.4584,0.1597,Asia,South Asia,Bhutan,2000
2007,BT,0,0.0022,0.1385,0.4512,0.1559,Asia,South Asia,Bhutan,2000
2008,BT,0,0.0023,0.1417,0.4517,0.1576,Asia,South Asia,Bhutan,2000
2009,BT,0,0.0023,0.1422,0.4548,0.1622,Asia,South Asia,Bhutan,2000
2010,BT,0,0.0022,0.1392,0.461,0.17,Asia,South Asia,Bhutan,2010
2011,BT,0,0.0023,0.141,0.462,0.1719,Asia,South Asia,Bhutan,2010
2012,BT,0,0.0023,0.1414,0.4641,0.1751,Asia,South Asia,Bhutan,2010
2013,BT,0,0.0023,0.143,0.4551,0.1678,Asia,South Asia,Bhutan,2010
2014,BT,0,0.0024,0.1453,0.4458,0.1601,Asia,South Asia,Bhutan,2010
2015,BT,0,0.0024,0.1483,0.4359,0.1516,Asia,South Asia,Bhutan,2010
2016,BT,0,0.0024,0.1495,0.4282,0.1454,Asia,South Asia,Bhutan,2010
2017,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2010
2018,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2010
2019,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2010
2020,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2020
2021,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2020
2022,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2020
2023,BT,0,0.0024,0.1504,0.4214,0.14,Asia,South Asia,Bhutan,2020
1980,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1981,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1982,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1983,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1984,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1985,BW,0,0.0011,0.0794,0.6098,0.2436,Africa,South Africa,Botswana,1980
1986,BW,0,0.0011,0.0776,0.6149,0.2456,Africa,South Africa,Botswana,1980
1987,BW,0,0.0011,0.0758,0.6199,0.2477,Africa,South Africa,Botswana,1980
1988,BW,0,0.001,0.074,0.625,0.2497,Africa,South Africa,Botswana,1980
1989,BW,0,0.001,0.0722,0.63,0.2518,Africa,South Africa,Botswana,1980
1990,BW,0,0.001,0.0704,0.6351,0.2538,Africa,South Africa,Botswana,1990
1991,BW,0,0.001,0.0686,0.6401,0.2559,Africa,South Africa,Botswana,1990
1992,BW,0,0.0009,0.0668,0.6452,0.2579,Africa,South Africa,Botswana,1990
1993,BW,0,0.0009,0.065,0.6502,0.26,Africa,South Africa,Botswana,1990
1994,BW,0,0.0009,0.0632,0.6552,0.2621,Africa,South Africa,Botswana,1990
1995,BW,0,0.0009,0.0614,0.6603,0.2641,Africa,South Africa,Botswana,1990
1996,BW,0,0.0008,0.0596,0.6653,0.2662,Africa,South Africa,Botswana,1990
1997,BW,0,0.0008,0.0578,0.6704,0.2682,Africa,South Africa,Botswana,1990
1998,BW,0,0.0008,0.056,0.6754,0.2703,Africa,South Africa,Botswana,1990
1999,BW,0,0.0007,0.0542,0.6804,0.2723,Africa,South Africa,Botswana,1990
2000,BW,0,0.0007,0.0524,0.6855,0.2743,Africa,South Africa,Botswana,2000
2001,BW,0,0.0007,0.0506,0.6905,0.2764,Africa,South Africa,Botswana,2000
2002,BW,0,0.0007,0.0488,0.6955,0.2784,Africa,South Africa,Botswana,2000
2003,BW,0,0.0007,0.0506,0.6923,0.2806,Africa,South Africa,Botswana,2000
2004,BW,0,0.0007,0.0524,0.6891,0.2827,Africa,South Africa,Botswana,2000
2005,BW,0,0.0008,0.0542,0.6858000000000001,0.2849,Africa,South Africa,Botswana,2000
2006,BW,0,0.0008,0.056,0.6826,0.287,Africa,South Africa,Botswana,2000
2007,BW,0,0.0008,0.0578,0.6794,0.2892,Africa,South Africa,Botswana,2000
2008,BW,0,0.0008,0.0595,0.6761,0.2913,Africa,South Africa,Botswana,2000
2009,BW,0,0.0009,0.0613,0.6729,0.2935,Africa,South Africa,Botswana,2000
2010,BW,0,0.0009,0.0646,0.6595000000000001,0.2825,Africa,South Africa,Botswana,2010
2011,BW,0,0.001,0.0679,0.6462,0.2715,Africa,South Africa,Botswana,2010
2012,BW,0,0.001,0.0713,0.6328,0.2605,Africa,South Africa,Botswana,2010
2013,BW,0,0.0011,0.0746,0.6194000000000001,0.2495,Africa,South Africa,Botswana,2010
2014,BW,0,0.0012,0.0779,0.606,0.2384,Africa,South Africa,Botswana,2010
2015,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2010
2016,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2010
2017,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2010
2018,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2010
2019,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2010
2020,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2020
2021,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2020
2022,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2020
2023,BW,0,0.0012,0.0812,0.5926,0.2274,Africa,South Africa,Botswana,2020
1980,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1981,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1982,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1983,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1984,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1985,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1986,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1987,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1988,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1989,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1980
1990,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1990
1991,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1990
1992,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1990
1993,BY,0,0.0048,0.2516,0.2992,0.0866,Asia,West Asia,Belarus,1990
1994,BY,0,0.004,0.2194,0.3355,0.1143,Asia,West Asia,Belarus,1990
1995,BY,0,0.0036,0.2065,0.3462,0.124,Asia,West Asia,Belarus,1990
1996,BY,0,0.0035,0.2004,0.3559,0.1242,Asia,West Asia,Belarus,1990
1997,BY,0,0.0032,0.1865,0.3756,0.133,Asia,West Asia,Belarus,1990
1998,BY,0,0.0032,0.1856,0.3781,0.1295,Asia,West Asia,Belarus,1990
1999,BY,0,0.0031,0.1848,0.369,0.1193,Asia,West Asia,Belarus,1990
2000,BY,0,0.0032,0.1889,0.3693,0.1225,Asia,West Asia,Belarus,2000
2001,BY,0,0.0035,0.1986,0.3613,0.1193,Asia,West Asia,Belarus,2000
2002,BY,0,0.0035,0.2001,0.3613,0.1205,Asia,West Asia,Belarus,2000
2003,BY,0,0.0036,0.2057,0.3458,0.1064,Asia,West Asia,Belarus,2000
2004,BY,0,0.0038,0.2134,0.3351,0.1,Asia,West Asia,Belarus,2000
2005,BY,0,0.0037,0.2114,0.3368,0.1005,Asia,West Asia,Belarus,2000
2006,BY,0,0.0037,0.2114,0.3385,0.1025,Asia,West Asia,Belarus,2000
2007,BY,0,0.0035,0.1991,0.3614,0.1203,Asia,West Asia,Belarus,2000
2008,BY,0,0.0036,0.2017,0.3541,0.1176,Asia,West Asia,Belarus,2000
2009,BY,0,0.0037,0.209,0.3504,0.1138,Asia,West Asia,Belarus,2000
2010,BY,0,0.0036,0.208,0.3447,0.1,Asia,West Asia,Belarus,2010
2011,BY,0,0.0034,0.1927,0.3648,0.1247,Asia,West Asia,Belarus,2010
2012,BY,0,0.0037,0.2069,0.3506,0.1169,Asia,West Asia,Belarus,2010
2013,BY,0,0.0041,0.2275,0.3286,0.1038,Asia,West Asia,Belarus,2010
2014,BY,0,0.004,0.221,0.3389,0.1065,Asia,West Asia,Belarus,2010
2015,BY,0,0.0042,0.2278,0.3211,0.0903,Asia,West Asia,Belarus,2010
2016,BY,0,0.0042,0.2277,0.3256,0.0954,Asia,West Asia,Belarus,2010
2017,BY,0,0.004,0.2229,0.3299,0.1013,Asia,West Asia,Belarus,2010
2018,BY,0,0.0042,0.2265,0.3293,0.0995,Asia,West Asia,Belarus,2010
2019,BY,0,0.0041,0.2258,0.3277,0.0961,Asia,West Asia,Belarus,2010
2020,BY,0,0.0041,0.2258,0.3277,0.0961,Asia,West Asia,Belarus,2020
2021,BY,0,0.0041,0.2258,0.3277,0.0961,Asia,West Asia,Belarus,2020
2022,BY,0,0.0041,0.2258,0.3277,0.0961,Asia,West Asia,Belarus,2020
2023,BY,0,0.0041,0.2258,0.3277,0.0961,Asia,West Asia,Belarus,2020
1980,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1981,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1982,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1983,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1984,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1985,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1986,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1987,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1988,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1989,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1980
1990,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1991,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1992,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1993,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1994,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1995,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1996,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1997,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1998,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
1999,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,1990
2000,BZ,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Belize,2000
2001,BZ,0,0.0001,0.0805,0.5636,0.1984,Americas,Central America,Belize,2000
2002,BZ,0,0,0.0809,0.5626,0.1928,Americas,Central America,Belize,2000
2003,BZ,0,0,0.0854,0.5605,0.2043,Americas,Central America,Belize,2000
2004,BZ,0,0.0001,0.0878,0.556,0.1999,Americas,Central America,Belize,2000
2005,BZ,0,0.0001,0.087,0.5555,0.193,Americas,Central America,Belize,2000
2006,BZ,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Central America,Belize,2000
2007,BZ,0,0.0002,0.0888,0.5641,0.211,Americas,Central America,Belize,2000
2008,BZ,0,0.0003,0.0903,0.56,0.2029,Americas,Central America,Belize,2000
2009,BZ,0,0.0004,0.0926,0.5486,0.1928,Americas,Central America,Belize,2000
2010,BZ,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Central America,Belize,2010
2011,BZ,0,0.0005,0.0976,0.541,0.1982,Americas,Central America,Belize,2010
2012,BZ,0,0.0005,0.1001,0.5332,0.197,Americas,Central America,Belize,2010
2013,BZ,0,0.0006,0.1006,0.5404,0.2057,Americas,Central America,Belize,2010
2014,BZ,0,0.0005,0.1026,0.5304,0.2046,Americas,Central America,Belize,2010
2015,BZ,0,0.0005,0.1032,0.5312,0.1942,Americas,Central America,Belize,2010
2016,BZ,0,0.0004,0.1034,0.5334,0.1984,Americas,Central America,Belize,2010
2017,BZ,0,0.0003,0.1031,0.5311,0.1884,Americas,Central America,Belize,2010
2018,BZ,0,0.0003,0.1016,0.5354,0.1976,Americas,Central America,Belize,2010
2019,BZ,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Central America,Belize,2010
2020,BZ,0,0.0001,0.0872,0.5466,0.2043,Americas,Central America,Belize,2020
2021,BZ,0,0.0001,0.0972,0.5299,0.1892,Americas,Central America,Belize,2020
2022,BZ,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Belize,2020
2023,BZ,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Belize,2020
1980,CA,0,0.0035,0.2197,0.3003,0.076,Americas,North America,Canada,1980
1981,CA,0,0.0035,0.2239,0.2891,0.0708,Americas,North America,Canada,1980
1982,CA,0,0.0035,0.2245,0.2848,0.0701,Americas,North America,Canada,1980
1983,CA,0,0.0034,0.2214,0.2886,0.0739,Americas,North America,Canada,1980
1984,CA,0,0.0034,0.2217,0.2907,0.0773,Americas,North America,Canada,1980
1985,CA,0,0.0033,0.2196,0.2919,0.0766,Americas,North America,Canada,1980
1986,CA,0,0.003,0.2111,0.2965,0.0781,Americas,North America,Canada,1980
1987,CA,0,0.003,0.2107,0.299,0.0806,Americas,North America,Canada,1980
1988,CA,0,0.003,0.2093,0.3071,0.0887,Americas,North America,Canada,1980
1989,CA,0,0.0029,0.2036,0.3144,0.0948,Americas,North America,Canada,1980
1990,CA,0,0.0028,0.1986,0.3161,0.0927,Americas,North America,Canada,1990
1991,CA,0,0.0024,0.1919,0.318,0.0915,Americas,North America,Canada,1990
1992,CA,0,0.0022,0.1899,0.3183,0.0919,Americas,North America,Canada,1990
1993,CA,0,0.0016,0.1833,0.3251,0.0957,Americas,North America,Canada,1990
1994,CA,0,0.0019,0.1821,0.3268,0.0961,Americas,North America,Canada,1990
1995,CA,0,0.0015,0.1771,0.3317,0.0988,Americas,North America,Canada,1990
1996,CA,0,0.0017,0.1752,0.3383,0.1039,Americas,North America,Canada,1990
1997,CA,0,0.0018,0.1729,0.3464,0.1113,Americas,North America,Canada,1990
1998,CA,0,0.0019,0.1721,0.3486,0.1127,Americas,North America,Canada,1990
1999,CA,0,0.0022,0.1738,0.3537,0.1183,Americas,North America,Canada,1990
2000,CA,0,0.0022,0.1702,0.3648,0.1269,Americas,North America,Canada,2000
2001,CA,0,0.0023,0.1737,0.365,0.1271,Americas,North America,Canada,2000
2002,CA,0,0.0023,0.1724,0.366,0.1279,Americas,North America,Canada,2000
2003,CA,0,0.0023,0.1713,0.3695,0.1306,Americas,North America,Canada,2000
2004,CA,0,0.0022,0.1701,0.3756,0.1359,Americas,North America,Canada,2000
2005,CA,0,0.0023,0.1695,0.3807,0.1402,Americas,North America,Canada,2000
2006,CA,0,0.0022,0.1675,0.3838,0.1421,Americas,North America,Canada,2000
2007,CA,0,0.0022,0.1675,0.3838,0.1421,Americas,North America,Canada,2000
2008,CA,0,0.0023,0.1703,0.3758,0.1347,Americas,North America,Canada,2000
2009,CA,0,0.0023,0.1723,0.3588,0.1186,Americas,North America,Canada,2000
2010,CA,0,0.0022,0.1705,0.3652,0.1235,Americas,North America,Canada,2010
2011,CA,0,0.0023,0.1707,0.3647,0.1228,Americas,North America,Canada,2010
2012,CA,0,0.0023,0.1721,0.3582,0.1162,Americas,North America,Canada,2010
2013,CA,0,0.0023,0.1716,0.3587,0.1161,Americas,North America,Canada,2010
2014,CA,0,0.0023,0.1735,0.3565,0.1144,Americas,North America,Canada,2010
2015,CA,0,0.0023,0.1734,0.3539,0.1149,Americas,North America,Canada,2010
2016,CA,0,0.0024,0.178,0.3413,0.099,Americas,North America,Canada,2010
2017,CA,0,0.0024,0.1762,0.3481,0.1053,Americas,North America,Canada,2010
2018,CA,0,0.0024,0.1785,0.346,0.1053,Americas,North America,Canada,2010
2019,CA,0,0.0024,0.1791,0.3438,0.1039,Americas,North America,Canada,2010
2020,CA,0,0.0021,0.1691,0.3518,0.1059,Americas,North America,Canada,2020
2021,CA,0,0.0021,0.1743,0.3622,0.1162,Americas,North America,Canada,2020
2022,CA,0,0.0021,0.1743,0.3622,0.1162,Americas,North America,Canada,2020
2023,CA,0,0.0021,0.1743,0.3622,0.1162,Americas,North America,Canada,2020
1980,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1981,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1982,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1983,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1984,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1985,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1986,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1987,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1988,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1989,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1980
1990,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1991,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1992,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1993,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1994,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1995,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1996,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1997,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1998,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
1999,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,1990
2000,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,2000
2001,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,2000
2002,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,2000
2003,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,2000
2004,CD,0,0.0019,0.1252,0.4932,0.1439,Africa,Middle Africa,DR Congo,2000
2005,CD,0,0.0019,0.1253,0.4926,0.1442,Africa,Middle Africa,DR Congo,2000
2006,CD,0,0.0019,0.1255,0.492,0.1445,Africa,Middle Africa,DR Congo,2000
2007,CD,0,0.0019,0.1256,0.4914,0.1448,Africa,Middle Africa,DR Congo,2000
2008,CD,0,0.0019,0.1258,0.4908,0.1451,Africa,Middle Africa,DR Congo,2000
2009,CD,0,0.0019,0.126,0.4902,0.1454,Africa,Middle Africa,DR Congo,2000
2010,CD,0,0.0019,0.1261,0.4896,0.1458,Africa,Middle Africa,DR Congo,2010
2011,CD,0,0.0019,0.1263,0.489,0.1461,Africa,Middle Africa,DR Congo,2010
2012,CD,0,0.0019,0.1264,0.4884,0.1464,Africa,Middle Africa,DR Congo,2010
2013,CD,0,0.0019,0.1251,0.4947,0.1523,Africa,Middle Africa,DR Congo,2010
2014,CD,0,0.0019,0.1237,0.5011,0.1583,Africa,Middle Africa,DR Congo,2010
2015,CD,0,0.0019,0.1224,0.5075000000000001,0.1643,Africa,Middle Africa,DR Congo,2010
2016,CD,0,0.0019,0.121,0.5138,0.1702,Africa,Middle Africa,DR Congo,2010
2017,CD,0,0.0018,0.1197,0.5202,0.1762,Africa,Middle Africa,DR Congo,2010
2018,CD,0,0.0018,0.1184,0.5266000000000001,0.1822,Africa,Middle Africa,DR Congo,2010
2019,CD,0,0.0018,0.117,0.533,0.1881,Africa,Middle Africa,DR Congo,2010
2020,CD,0,0.0018,0.1157,0.5393,0.1941,Africa,Middle Africa,DR Congo,2020
2021,CD,0,0.0018,0.1157,0.5393,0.1941,Africa,Middle Africa,DR Congo,2020
2022,CD,0,0.0018,0.1157,0.5393,0.1941,Africa,Middle Africa,DR Congo,2020
2023,CD,0,0.0018,0.1157,0.5393,0.1941,Africa,Middle Africa,DR Congo,2020
1980,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1981,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1982,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1983,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1984,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1985,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1986,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1987,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1988,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1989,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1980
1990,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1990
1991,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1990
1992,CF,0,0.0007,0.0568,0.6428,0.2203,Africa,Middle Africa,Central African Republic,1990
1993,CF,0,0.0007,0.0581,0.6431,0.2259,Africa,Middle Africa,Central African Republic,1990
1994,CF,0,0.0007,0.0593,0.6435000000000001,0.2315,Africa,Middle Africa,Central African Republic,1990
1995,CF,0,0.0008,0.0605,0.6439,0.237,Africa,Middle Africa,Central African Republic,1990
1996,CF,0,0.0008,0.0617,0.6443,0.2426,Africa,Middle Africa,Central African Republic,1990
1997,CF,0,0.0008,0.0629,0.6447,0.2482,Africa,Middle Africa,Central African Republic,1990
1998,CF,0,0.0008,0.0642,0.645,0.2538,Africa,Middle Africa,Central African Republic,1990
1999,CF,0,0.0008,0.0654,0.6454000000000001,0.2594,Africa,Middle Africa,Central African Republic,1990
2000,CF,0,0.0009,0.0666,0.6458,0.265,Africa,Middle Africa,Central African Republic,2000
2001,CF,0,0.0009,0.0678,0.6462,0.2706,Africa,Middle Africa,Central African Republic,2000
2002,CF,0,0.0009,0.069,0.6465000000000001,0.2761,Africa,Middle Africa,Central African Republic,2000
2003,CF,0,0.0009,0.0703,0.6469,0.2817,Africa,Middle Africa,Central African Republic,2000
2004,CF,0,0.001,0.0715,0.6473,0.2873,Africa,Middle Africa,Central African Republic,2000
2005,CF,0,0.001,0.0727,0.6477,0.2929,Africa,Middle Africa,Central African Republic,2000
2006,CF,0,0.001,0.0739,0.648,0.2985,Africa,Middle Africa,Central African Republic,2000
2007,CF,0,0.001,0.0752,0.6484,0.3041,Africa,Middle Africa,Central African Republic,2000
2008,CF,0,0.0011,0.0764,0.6488,0.3097,Africa,Middle Africa,Central African Republic,2000
2009,CF,0,0.0011,0.0798,0.6377,0.2979,Africa,Middle Africa,Central African Republic,2000
2010,CF,0,0.0012,0.0833,0.6266,0.2862,Africa,Middle Africa,Central African Republic,2010
2011,CF,0,0.0012,0.0867,0.6155,0.2744,Africa,Middle Africa,Central African Republic,2010
2012,CF,0,0.0013,0.0901,0.6044,0.2626,Africa,Middle Africa,Central African Republic,2010
2013,CF,0,0.0014,0.0936,0.5932000000000001,0.2508,Africa,Middle Africa,Central African Republic,2010
2014,CF,0,0.0014,0.097,0.5821000000000001,0.2389,Africa,Middle Africa,Central African Republic,2010
2015,CF,0,0.0015,0.1005,0.5710000000000001,0.2271,Africa,Middle Africa,Central African Republic,2010
2016,CF,0,0.0016,0.1039,0.5598000000000001,0.2153,Africa,Middle Africa,Central African Republic,2010
2017,CF,0,0.0016,0.1074,0.5486,0.2034,Africa,Middle Africa,Central African Republic,2010
2018,CF,0,0.0017,0.1109,0.5375,0.1915,Africa,Middle Africa,Central African Republic,2010
2019,CF,0,0.0017,0.1143,0.5263,0.1797,Africa,Middle Africa,Central African Republic,2010
2020,CF,0,0.0018,0.1178,0.5151,0.1678,Africa,Middle Africa,Central African Republic,2020
2021,CF,0,0.0019,0.1213,0.5039,0.1559,Africa,Middle Africa,Central African Republic,2020
2022,CF,0,0.0019,0.1213,0.5039,0.1559,Africa,Middle Africa,Central African Republic,2020
2023,CF,0,0.0019,0.1213,0.5039,0.1559,Africa,Middle Africa,Central African Republic,2020
1980,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1981,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1982,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1983,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1984,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1985,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1986,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1987,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1988,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1989,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1980
1990,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1991,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1992,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1993,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1994,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1995,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1996,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1997,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1998,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
1999,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,1990
2000,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2001,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2002,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2003,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2004,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2005,CG,0,0.0016,0.1039,0.545,0.1858,Africa,Middle Africa,Congo,2000
2006,CG,0,0.0015,0.1031,0.5474,0.189,Africa,Middle Africa,Congo,2000
2007,CG,0,0.0015,0.1023,0.5498000000000001,0.1922,Africa,Middle Africa,Congo,2000
2008,CG,0,0.0015,0.1016,0.5521,0.1955,Africa,Middle Africa,Congo,2000
2009,CG,0,0.0015,0.1008,0.5545,0.1987,Africa,Middle Africa,Congo,2000
2010,CG,0,0.0014,0.1,0.5568000000000001,0.2019,Africa,Middle Africa,Congo,2010
2011,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2012,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2013,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2014,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2015,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2016,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2017,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2018,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2019,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2010
2020,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2020
2021,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2020
2022,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2020
2023,CG,0,0.0014,0.0992,0.5592,0.2052,Africa,Middle Africa,Congo,2020
1980,CH,0,0.0043,0.2409,0.3076,0.1047,Europe,Western Europe,Switzerland,1980
1981,CH,0,0.0043,0.2406,0.3076,0.1046,Europe,Western Europe,Switzerland,1980
1982,CH,0,0.0043,0.2406,0.3098,0.1075,Europe,Western Europe,Switzerland,1980
1983,CH,0,0.0042,0.2395,0.3121,0.1102,Europe,Western Europe,Switzerland,1980
1984,CH,0,0.0042,0.2389,0.313,0.11,Europe,Western Europe,Switzerland,1980
1985,CH,0,0.0041,0.2362,0.3149,0.1101,Europe,Western Europe,Switzerland,1980
1986,CH,0,0.0042,0.2376,0.3147,0.1107,Europe,Western Europe,Switzerland,1980
1987,CH,0,0.0042,0.2378,0.3141,0.1111,Europe,Western Europe,Switzerland,1980
1988,CH,0,0.0042,0.2393,0.3101,0.1083,Europe,Western Europe,Switzerland,1980
1989,CH,0,0.0042,0.2394,0.3075,0.1059,Europe,Western Europe,Switzerland,1980
1990,CH,0,0.0042,0.2413,0.3054,0.1056,Europe,Western Europe,Switzerland,1990
1991,CH,0,0.0043,0.2445,0.2989,0.1002,Europe,Western Europe,Switzerland,1990
1992,CH,0,0.0043,0.2467,0.2907,0.0933,Europe,Western Europe,Switzerland,1990
1993,CH,0,0.0043,0.2452,0.292,0.0939,Europe,Western Europe,Switzerland,1990
1994,CH,0,0.0044,0.2469,0.2933,0.0958,Europe,Western Europe,Switzerland,1990
1995,CH,0,0.0044,0.2481,0.293,0.0959,Europe,Western Europe,Switzerland,1990
1996,CH,0,0.0043,0.2413,0.3072,0.1058,Europe,Western Europe,Switzerland,1990
1997,CH,0,0.0042,0.2378,0.3131,0.1106,Europe,Western Europe,Switzerland,1990
1998,CH,0,0.0042,0.2361,0.3172,0.1125,Europe,Western Europe,Switzerland,1990
1999,CH,0,0.0042,0.2397,0.3103,0.1061,Europe,Western Europe,Switzerland,1990
2000,CH,0,0.0042,0.237,0.3158,0.1096,Europe,Western Europe,Switzerland,2000
2001,CH,0,0.0042,0.239,0.3063,0.1012,Europe,Western Europe,Switzerland,2000
2002,CH,0,0.0043,0.2433,0.2962,0.0905,Europe,Western Europe,Switzerland,2000
2003,CH,0,0.0041,0.2344,0.3153,0.1091,Europe,Western Europe,Switzerland,2000
2004,CH,0,0.0042,0.2326,0.3208,0.1133,Europe,Western Europe,Switzerland,2000
2005,CH,0,0.004,0.2271,0.333,0.1222,Europe,Western Europe,Switzerland,2000
2006,CH,0,0.0039,0.2257,0.3409,0.1275,Europe,Western Europe,Switzerland,2000
2007,CH,0,0.004,0.2315,0.326,0.1121,Europe,Western Europe,Switzerland,2000
2008,CH,0,0.0041,0.2375,0.3062,0.0978,Europe,Western Europe,Switzerland,2000
2009,CH,0,0.0042,0.2387,0.306,0.0989,Europe,Western Europe,Switzerland,2000
2010,CH,0,0.004,0.2291,0.3262,0.1147,Europe,Western Europe,Switzerland,2010
2011,CH,0,0.004,0.2301,0.3284,0.1155,Europe,Western Europe,Switzerland,2010
2012,CH,0,0.0041,0.2326,0.3183,0.1052,Europe,Western Europe,Switzerland,2010
2013,CH,0,0.0041,0.2312,0.3189,0.1038,Europe,Western Europe,Switzerland,2010
2014,CH,0,0.0041,0.2318,0.3161,0.1039,Europe,Western Europe,Switzerland,2010
2015,CH,0,0.0041,0.2327,0.3138,0.1052,Europe,Western Europe,Switzerland,2010
2016,CH,0,0.004,0.232,0.3121,0.1037,Europe,Western Europe,Switzerland,2010
2017,CH,0,0.0041,0.2332,0.3094,0.1009,Europe,Western Europe,Switzerland,2010
2018,CH,0,0.0042,0.2386,0.3023,0.099,Europe,Western Europe,Switzerland,2010
2019,CH,0,0.0041,0.239,0.3015,0.0991,Europe,Western Europe,Switzerland,2010
2020,CH,0,0.0041,0.2392,0.3005,0.0983,Europe,Western Europe,Switzerland,2020
2021,CH,0,0.0041,0.2392,0.3005,0.0983,Europe,Western Europe,Switzerland,2020
2022,CH,0,0.0041,0.2392,0.3005,0.0983,Europe,Western Europe,Switzerland,2020
2023,CH,0,0.0041,0.2392,0.3005,0.0983,Europe,Western Europe,Switzerland,2020
1980,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1981,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1982,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1983,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1984,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1985,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1986,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1987,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1988,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,1980
1989,CI,0,0.002,0.1222,0.531,0.2,Africa,West Africa,Cote d'Ivoire,1980
1990,CI,0,0.0021,0.129,0.5145000000000001,0.1891,Africa,West Africa,Cote d'Ivoire,1990
1991,CI,0,0.0023,0.1363,0.4969,0.1776,Africa,West Africa,Cote d'Ivoire,1990
1992,CI,0,0.0024,0.144,0.4782,0.1653,Africa,West Africa,Cote d'Ivoire,1990
1993,CI,0,0.0026,0.1522,0.4583,0.1522,Africa,West Africa,Cote d'Ivoire,1990
1994,CI,0,0.0025,0.1479,0.4667,0.1581,Africa,West Africa,Cote d'Ivoire,1990
1995,CI,0,0.0024,0.144,0.4745,0.1636,Africa,West Africa,Cote d'Ivoire,1990
1996,CI,0,0.0023,0.1403,0.4818,0.1687,Africa,West Africa,Cote d'Ivoire,1990
1997,CI,0,0.0022,0.1369,0.4886,0.1734,Africa,West Africa,Cote d'Ivoire,1990
1998,CI,0,0.0021,0.1337,0.4950000000000001,0.1779,Africa,West Africa,Cote d'Ivoire,1990
1999,CI,0,0.002,0.1286,0.5051,0.1855,Africa,West Africa,Cote d'Ivoire,1990
2000,CI,0,0.0019,0.1231,0.516,0.1936,Africa,West Africa,Cote d'Ivoire,2000
2001,CI,0,0.0018,0.1173,0.5276000000000001,0.2024,Africa,West Africa,Cote d'Ivoire,2000
2002,CI,0,0.0016,0.1111,0.5401,0.2118,Africa,West Africa,Cote d'Ivoire,2000
2003,CI,0,0.0017,0.1132,0.534,0.2072,Africa,West Africa,Cote d'Ivoire,2000
2004,CI,0,0.0017,0.1154,0.5279,0.2027,Africa,West Africa,Cote d'Ivoire,2000
2005,CI,0,0.0018,0.1176,0.5217,0.1982,Africa,West Africa,Cote d'Ivoire,2000
2006,CI,0,0.0018,0.1197,0.5155000000000001,0.1936,Africa,West Africa,Cote d'Ivoire,2000
2007,CI,0,0.0018,0.1219,0.5093,0.1891,Africa,West Africa,Cote d'Ivoire,2000
2008,CI,0,0.0019,0.1241,0.5031,0.1845,Africa,West Africa,Cote d'Ivoire,2000
2009,CI,0,0.0019,0.1249,0.4999,0.1821,Africa,West Africa,Cote d'Ivoire,2000
2010,CI,0,0.0019,0.1256,0.4969,0.1799,Africa,West Africa,Cote d'Ivoire,2010
2011,CI,0,0.0019,0.1262,0.4941,0.1778,Africa,West Africa,Cote d'Ivoire,2010
2012,CI,0,0.0019,0.1269,0.4914,0.1758,Africa,West Africa,Cote d'Ivoire,2010
2013,CI,0,0.0019,0.1275,0.4889,0.1739,Africa,West Africa,Cote d'Ivoire,2010
2014,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2015,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2016,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2017,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2018,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2019,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2010
2020,CI,0,0.0019,0.128,0.4865,0.1721,Africa,West Africa,Cote d'Ivoire,2020
2021,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,2020
2022,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,2020
2023,CI,0,0.0019,0.1158,0.5466,0.2103,Africa,West Africa,Cote d'Ivoire,2020
1980,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1981,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1982,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1983,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1984,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1985,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1986,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1987,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1988,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1989,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1980
1990,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1991,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1992,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1993,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1994,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1995,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1996,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1997,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1998,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
1999,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,1990
2000,CL,0,0,0.0749,0.6276,0.2635,Americas,South America,Chile,2000
2001,CL,0,0,0.0775,0.6194000000000001,0.2532,Americas,South America,Chile,2000
2002,CL,0,0,0.08,0.6111,0.243,Americas,South America,Chile,2000
2003,CL,0,0,0.0825,0.6029,0.2327,Americas,South America,Chile,2000
2004,CL,0,0,0.0789,0.6174000000000001,0.2495,Americas,South America,Chile,2000
2005,CL,0,0,0.0754,0.6319,0.2662,Americas,South America,Chile,2000
2006,CL,0,0,0.0718,0.6464000000000001,0.2829,Americas,South America,Chile,2000
2007,CL,0,0,0.071,0.6455000000000001,0.2785,Americas,South America,Chile,2000
2008,CL,0,0,0.0703,0.6447,0.2742,Americas,South America,Chile,2000
2009,CL,0,0,0.0696,0.644,0.27,Americas,South America,Chile,2000
2010,CL,0,0,0.0693,0.6546000000000001,0.2685,Americas,South America,Chile,2010
2011,CL,0,0,0.069,0.6653,0.2673,Americas,South America,Chile,2010
2012,CL,0,0,0.0723,0.6541,0.2652,Americas,South America,Chile,2010
2013,CL,0,0,0.0756,0.6429,0.2632,Americas,South America,Chile,2010
2014,CL,0,0,0.0764,0.6411,0.2643,Americas,South America,Chile,2010
2015,CL,0,0,0.0772,0.6393,0.2654,Americas,South America,Chile,2010
2016,CL,0,0,0.0805,0.629,0.2594,Americas,South America,Chile,2010
2017,CL,0,0,0.0839,0.6186,0.2534,Americas,South America,Chile,2010
2018,CL,0,0,0.0784,0.6102000000000001,0.2492,Americas,South America,Chile,2010
2019,CL,0,0,0.0728,0.6018,0.245,Americas,South America,Chile,2010
2020,CL,0,0,0.0672,0.5934,0.2407,Americas,South America,Chile,2020
2021,CL,0,0,0.077,0.5855,0.2306,Americas,South America,Chile,2020
2022,CL,0,0,0.0868,0.5776,0.2204,Americas,South America,Chile,2020
2023,CL,0,0,0.0868,0.5776,0.2204,Americas,South America,Chile,2020
1980,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1981,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1982,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1983,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1984,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1985,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1986,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1987,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1988,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1989,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1980
1990,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1991,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1992,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1993,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1994,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1995,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1996,CM,0,0.0019,0.1153,0.5423,0.1841,Africa,Middle Africa,Cameroon,1990
1997,CM,0,0.0019,0.117,0.5374,0.1855,Africa,Middle Africa,Cameroon,1990
1998,CM,0,0.0019,0.1187,0.5325,0.187,Africa,Middle Africa,Cameroon,1990
1999,CM,0,0.0019,0.1204,0.5275000000000001,0.1884,Africa,Middle Africa,Cameroon,1990
2000,CM,0,0.002,0.1221,0.5226000000000001,0.1899,Africa,Middle Africa,Cameroon,2000
2001,CM,0,0.002,0.1238,0.5177,0.1913,Africa,Middle Africa,Cameroon,2000
2002,CM,0,0.0019,0.1231,0.5153,0.1856,Africa,Middle Africa,Cameroon,2000
2003,CM,0,0.0019,0.1223,0.5129,0.1798,Africa,Middle Africa,Cameroon,2000
2004,CM,0,0.0019,0.1216,0.5105000000000001,0.174,Africa,Middle Africa,Cameroon,2000
2005,CM,0,0.0019,0.1208,0.5081,0.1682,Africa,Middle Africa,Cameroon,2000
2006,CM,0,0.0019,0.1201,0.5057,0.1625,Africa,Middle Africa,Cameroon,2000
2007,CM,0,0.0018,0.1194,0.5033,0.1567,Africa,Middle Africa,Cameroon,2000
2008,CM,0,0.0018,0.1175,0.5057,0.1569,Africa,Middle Africa,Cameroon,2000
2009,CM,0,0.0017,0.1156,0.5082,0.1572,Africa,Middle Africa,Cameroon,2000
2010,CM,0,0.0017,0.1138,0.5106,0.1574,Africa,Middle Africa,Cameroon,2010
2011,CM,0,0.0017,0.1119,0.5131,0.1577,Africa,Middle Africa,Cameroon,2010
2012,CM,0,0.0016,0.1101,0.5155000000000001,0.1579,Africa,Middle Africa,Cameroon,2010
2013,CM,0,0.0016,0.1082,0.518,0.1582,Africa,Middle Africa,Cameroon,2010
2014,CM,0,0.0015,0.1063,0.5204,0.1584,Africa,Middle Africa,Cameroon,2010
2015,CM,0,0.0016,0.1088,0.5141,0.1548,Africa,Middle Africa,Cameroon,2010
2016,CM,0,0.0016,0.1113,0.5077,0.1511,Africa,Middle Africa,Cameroon,2010
2017,CM,0,0.0017,0.1138,0.5014000000000001,0.1474,Africa,Middle Africa,Cameroon,2010
2018,CM,0,0.0017,0.1163,0.4950000000000001,0.1437,Africa,Middle Africa,Cameroon,2010
2019,CM,0,0.0017,0.1187,0.4887,0.14,Africa,Middle Africa,Cameroon,2010
2020,CM,0,0.0018,0.1212,0.4823,0.1363,Africa,Middle Africa,Cameroon,2020
2021,CM,0,0.0018,0.1237,0.4759,0.1326,Africa,Middle Africa,Cameroon,2020
2022,CM,0,0.0018,0.1237,0.4759,0.1326,Africa,Middle Africa,Cameroon,2020
2023,CM,0,0.0018,0.1237,0.4759,0.1326,Africa,Middle Africa,Cameroon,2020
1980,CN,0,0.0048,0.2498,0.2789,0.0657,Asia,East Asia,China,1980
1981,CN,0,0.0047,0.2471,0.2831,0.0686,Asia,East Asia,China,1980
1982,CN,0,0.0046,0.2419,0.2871,0.0709,Asia,East Asia,China,1980
1983,CN,0,0.0047,0.2445,0.288,0.0727,Asia,East Asia,China,1980
1984,CN,0,0.0046,0.2418,0.2928,0.0761,Asia,East Asia,China,1980
1985,CN,0,0.0045,0.2384,0.3014,0.0817,Asia,East Asia,China,1980
1986,CN,0,0.0042,0.2252,0.3039,0.0811,Asia,East Asia,China,1980
1987,CN,0,0.0041,0.2207,0.3022,0.08,Asia,East Asia,China,1980
1988,CN,0,0.004,0.2188,0.3056,0.0813,Asia,East Asia,China,1980
1989,CN,0,0.0038,0.2126,0.3111,0.0833,Asia,East Asia,China,1980
1990,CN,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,China,1990
1991,CN,0,0.0036,0.2027,0.3151,0.0842,Asia,East Asia,China,1990
1992,CN,0,0.0034,0.1939,0.3271,0.0885,Asia,East Asia,China,1990
1993,CN,0,0.0032,0.1849,0.3391,0.0929,Asia,East Asia,China,1990
1994,CN,0,0.0031,0.1811,0.3433,0.0954,Asia,East Asia,China,1990
1995,CN,0,0.0031,0.1849,0.339,0.0938,Asia,East Asia,China,1990
1996,CN,0,0.0032,0.1906,0.339,0.0965,Asia,East Asia,China,1990
1997,CN,0,0.0032,0.1909,0.3391,0.0965,Asia,East Asia,China,1990
1998,CN,0,0.0032,0.1915,0.3425,0.0994,Asia,East Asia,China,1990
1999,CN,0,0.003,0.185,0.3479,0.1002,Asia,East Asia,China,1990
2000,CN,0,0.0027,0.1737,0.3587,0.1046,Asia,East Asia,China,2000
2001,CN,0,0.0026,0.1681,0.3662,0.1096,Asia,East Asia,China,2000
2002,CN,0,0.0024,0.1557,0.3968,0.1265,Asia,East Asia,China,2000
2003,CN,0,0.0023,0.1515,0.4051,0.1323,Asia,East Asia,China,2000
2004,CN,0,0.0024,0.1515,0.4121,0.1393,Asia,East Asia,China,2000
2005,CN,0,0.0022,0.1442,0.4216,0.143,Asia,East Asia,China,2000
2006,CN,0,0.0021,0.1441,0.4237,0.1487,Asia,East Asia,China,2000
2007,CN,0,0.0021,0.1425,0.4269,0.1538,Asia,East Asia,China,2000
2008,CN,0,0.0021,0.1421,0.4269,0.1529,Asia,East Asia,China,2000
2009,CN,0,0.002,0.1414,0.4263,0.1552,Asia,East Asia,China,2000
2010,CN,0,0.0019,0.1383,0.4283,0.152,Asia,East Asia,China,2010
2011,CN,0,0.002,0.1409,0.4311,0.1467,Asia,East Asia,China,2010
2012,CN,0,0.002,0.1454,0.4169,0.1383,Asia,East Asia,China,2010
2013,CN,0,0.002,0.1403,0.4235,0.1389,Asia,East Asia,China,2010
2014,CN,0,0.002,0.1438,0.4155,0.1374,Asia,East Asia,China,2010
2015,CN,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,China,2010
2016,CN,0,0.0017,0.1411,0.418,0.1405,Asia,East Asia,China,2010
2017,CN,0,0.0017,0.1386,0.4283,0.1516,Asia,East Asia,China,2010
2018,CN,0,0.0017,0.1393,0.4253,0.1485,Asia,East Asia,China,2010
2019,CN,0,0.0017,0.1398,0.4236,0.1466,Asia,East Asia,China,2010
2020,CN,0,0.0017,0.1377,0.432,0.1556,Asia,East Asia,China,2020
2021,CN,0,0.0017,0.1374,0.4335,0.1572,Asia,East Asia,China,2020
2022,CN,0,0.0016,0.1351,0.4346,0.1576,Asia,East Asia,China,2020
2023,CN,0,0.0016,0.1351,0.4346,0.1576,Asia,East Asia,China,2020
1980,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1981,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1982,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1983,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1984,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1985,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1986,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1987,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1988,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1989,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1980
1990,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1991,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1992,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1993,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1994,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1995,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1996,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1997,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1998,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
1999,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,1990
2000,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,2000
2001,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,2000
2002,CO,0,0,0.0625,0.6444000000000001,0.246,Americas,South America,Colombia,2000
2003,CO,0,0,0.0728,0.611,0.2163,Americas,South America,Colombia,2000
2004,CO,0,0,0.0692,0.6321,0.236,Americas,South America,Colombia,2000
2005,CO,0,0,0.0748,0.622,0.2247,Americas,South America,Colombia,2000
2006,CO,0,0,0.0733,0.6233000000000001,0.2301,Americas,South America,Colombia,2000
2007,CO,0,0,0.0718,0.6246,0.2355,Americas,South America,Colombia,2000
2008,CO,0,0,0.0703,0.6259,0.2409,Americas,South America,Colombia,2000
2009,CO,0,0,0.076,0.6123000000000001,0.23,Americas,South America,Colombia,2000
2010,CO,0,0,0.0753,0.6084,0.2317,Americas,South America,Colombia,2010
2011,CO,0,0,0.0771,0.6126,0.2413,Americas,South America,Colombia,2010
2012,CO,0,0,0.0823,0.5898,0.2088,Americas,South America,Colombia,2010
2013,CO,0,0,0.0821,0.5937,0.2175,Americas,South America,Colombia,2010
2014,CO,0,0,0.0906,0.5650000000000001,0.2045,Americas,South America,Colombia,2010
2015,CO,0,0,0.0922,0.5658000000000001,0.189,Americas,South America,Colombia,2010
2016,CO,0,0,0.0934,0.5694,0.1966,Americas,South America,Colombia,2010
2017,CO,0,0,0.0819,0.5915,0.183,Americas,South America,Colombia,2010
2018,CO,0,0,0.0791,0.5963,0.1903,Americas,South America,Colombia,2010
2019,CO,0,0,0.0751,0.5997,0.1922,Americas,South America,Colombia,2010
2020,CO,0,0,0.0554,0.6146,0.1782,Americas,South America,Colombia,2020
2021,CO,0,0,0.0638,0.6093000000000001,0.1794,Americas,South America,Colombia,2020
2022,CO,0,0,0.0638,0.6093000000000001,0.1794,Americas,South America,Colombia,2020
2023,CO,0,0,0.0638,0.6093000000000001,0.1794,Americas,South America,Colombia,2020
1980,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1981,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1982,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1983,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1984,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1985,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1986,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1987,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1988,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1989,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1980
1990,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1991,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1992,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1993,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1994,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1995,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1996,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1997,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1998,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
1999,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,1990
2000,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2001,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2002,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2003,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2004,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2005,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2006,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2007,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2008,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2009,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2000
2010,CR,0,0,0.0935,0.5362,0.2026,Americas,Central America,Costa Rica,2010
2011,CR,0,0,0.09,0.5359,0.1838,Americas,Central America,Costa Rica,2010
2012,CR,0,0,0.0878,0.5387000000000001,0.1795,Americas,Central America,Costa Rica,2010
2013,CR,0,0,0.0809,0.5429,0.1779,Americas,Central America,Costa Rica,2010
2014,CR,0,0,0.0808,0.5377000000000001,0.1486,Americas,Central America,Costa Rica,2010
2015,CR,0,0,0.0796,0.5446,0.1645,Americas,Central America,Costa Rica,2010
2016,CR,0,0,0.0798,0.5507000000000001,0.2002,Americas,Central America,Costa Rica,2010
2017,CR,0,0,0.0814,0.5406000000000001,0.1886,Americas,Central America,Costa Rica,2010
2018,CR,0,0,0.0773,0.5532,0.2151,Americas,Central America,Costa Rica,2010
2019,CR,0,0,0.0722,0.5661,0.2152,Americas,Central America,Costa Rica,2010
2020,CR,0,0,0.0479,0.5844,0.2195,Americas,Central America,Costa Rica,2020
2021,CR,0,0,0.0698,0.5647,0.2495,Americas,Central America,Costa Rica,2020
2022,CR,0,0,0.0842,0.5091,0.1817,Americas,Central America,Costa Rica,2020
2023,CR,0,0,0.0842,0.5091,0.1817,Americas,Central America,Costa Rica,2020
1980,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1981,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1982,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1983,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1984,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1985,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1986,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1987,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1988,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1989,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1980
1990,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1991,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1992,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1993,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1994,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1995,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1996,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1997,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1998,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
1999,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,1990
2000,CU,0,0.0004,0.107,0.5042,0.1644,Americas,Caribbean,Cuba,2000
2001,CU,0,0.0004,0.0996,0.5169,0.1708,Americas,Caribbean,Cuba,2000
2002,CU,0,0.0001,0.0999,0.5142,0.169,Americas,Caribbean,Cuba,2000
2003,CU,0,0,0.109,0.5052,0.1776,Americas,Caribbean,Cuba,2000
2004,CU,0,0.0003,0.1136,0.4928,0.1658,Americas,Caribbean,Cuba,2000
2005,CU,0,0.0004,0.1171,0.4799,0.1487,Americas,Caribbean,Cuba,2000
2006,CU,0,0.0006,0.1221,0.4699,0.1423,Americas,Caribbean,Cuba,2000
2007,CU,0,0.0008,0.1164,0.4974,0.1769,Americas,Caribbean,Cuba,2000
2008,CU,0,0.0011,0.1216,0.4827,0.1584,Americas,Caribbean,Cuba,2000
2009,CU,0,0.0012,0.1242,0.4625,0.1429,Americas,Caribbean,Cuba,2000
2010,CU,0,0.0015,0.1272,0.4692,0.1526,Americas,Caribbean,Cuba,2010
2011,CU,0,0.0017,0.1377,0.438,0.1336,Americas,Caribbean,Cuba,2010
2012,CU,0,0.0016,0.1401,0.427,0.1365,Americas,Caribbean,Cuba,2010
2013,CU,0,0.0019,0.1446,0.4299,0.133,Americas,Caribbean,Cuba,2010
2014,CU,0,0.0017,0.1458,0.4236,0.1304,Americas,Caribbean,Cuba,2010
2015,CU,0,0.0015,0.1467,0.4283,0.1297,Americas,Caribbean,Cuba,2010
2016,CU,0,0.0013,0.1471,0.4315,0.1354,Americas,Caribbean,Cuba,2010
2017,CU,0,0.0012,0.1463,0.4324,0.1322,Americas,Caribbean,Cuba,2010
2018,CU,0,0.001,0.1421,0.4432,0.1376,Americas,Caribbean,Cuba,2010
2019,CU,0,0.0008,0.139,0.4475,0.1388,Americas,Caribbean,Cuba,2010
2020,CU,0,0.0003,0.123,0.4664,0.16,Americas,Caribbean,Cuba,2020
2021,CU,0,0.0004,0.129,0.4629,0.1559,Americas,Caribbean,Cuba,2020
2022,CU,0,0.0006,0.137,0.4485,0.1371,Americas,Caribbean,Cuba,2020
2023,CU,0,0.0006,0.137,0.4485,0.1371,Americas,Caribbean,Cuba,2020
1980,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1981,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1982,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1983,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1984,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1985,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1986,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1987,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1988,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1989,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1980
1990,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1991,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1992,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1993,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1994,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1995,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1996,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1997,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1998,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
1999,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,1990
2000,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,2000
2001,CV,0,0.0013,0.0868,0.6083000000000001,0.2321,Africa,West Africa,Cabo Verde,2000
2002,CV,0,0.0013,0.0899,0.5985,0.2254,Africa,West Africa,Cabo Verde,2000
2003,CV,0,0.0014,0.0931,0.5887,0.2187,Africa,West Africa,Cabo Verde,2000
2004,CV,0,0.0014,0.0962,0.5789000000000001,0.212,Africa,West Africa,Cabo Verde,2000
2005,CV,0,0.0015,0.0993,0.5691,0.2054,Africa,West Africa,Cabo Verde,2000
2006,CV,0,0.0015,0.1024,0.5593,0.1987,Africa,West Africa,Cabo Verde,2000
2007,CV,0,0.0016,0.1055,0.5494,0.192,Africa,West Africa,Cabo Verde,2000
2008,CV,0,0.0016,0.1078,0.5421,0.1854,Africa,West Africa,Cabo Verde,2000
2009,CV,0,0.0017,0.1101,0.5348,0.1788,Africa,West Africa,Cabo Verde,2000
2010,CV,0,0.0017,0.1124,0.5275000000000001,0.1722,Africa,West Africa,Cabo Verde,2010
2011,CV,0,0.0017,0.1147,0.5201,0.1656,Africa,West Africa,Cabo Verde,2010
2012,CV,0,0.0018,0.1169,0.5128,0.159,Africa,West Africa,Cabo Verde,2010
2013,CV,0,0.0018,0.1192,0.5055000000000001,0.1523,Africa,West Africa,Cabo Verde,2010
2014,CV,0,0.0019,0.1215,0.4981,0.1457,Africa,West Africa,Cabo Verde,2010
2015,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2010
2016,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2010
2017,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2010
2018,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2010
2019,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2010
2020,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2020
2021,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2020
2022,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2020
2023,CV,0,0.0019,0.1238,0.4908,0.1391,Africa,West Africa,Cabo Verde,2020
1980,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1981,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1982,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1983,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1984,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1985,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1986,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1987,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1988,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1989,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1980
1990,CY,0,0.0029,0.1832,0.3668,0.113,Europe,Eastern Europe,Cyprus,1990
1991,CY,0,0.0029,0.184,0.3653,0.1121,Europe,Eastern Europe,Cyprus,1990
1992,CY,0,0.0029,0.186,0.3624,0.1105,Europe,Eastern Europe,Cyprus,1990
1993,CY,0,0.003,0.1868,0.3612,0.1101,Europe,Eastern Europe,Cyprus,1990
1994,CY,0,0.0029,0.1869,0.3612,0.1112,Europe,Eastern Europe,Cyprus,1990
1995,CY,0,0.0029,0.186,0.362,0.1128,Europe,Eastern Europe,Cyprus,1990
1996,CY,0,0.0029,0.1892,0.3533,0.107,Europe,Eastern Europe,Cyprus,1990
1997,CY,0,0.003,0.1931,0.3418,0.0993,Europe,Eastern Europe,Cyprus,1990
1998,CY,0,0.0028,0.1757,0.3973,0.1401,Europe,Eastern Europe,Cyprus,1990
1999,CY,0,0.003,0.1897,0.3543,0.1087,Europe,Eastern Europe,Cyprus,1990
2000,CY,0,0.0031,0.1941,0.3403,0.0985,Europe,Eastern Europe,Cyprus,2000
2001,CY,0,0.003,0.19,0.3512,0.1058,Europe,Eastern Europe,Cyprus,2000
2002,CY,0,0.0029,0.1838,0.3725,0.1213,Europe,Eastern Europe,Cyprus,2000
2003,CY,0,0.0031,0.1896,0.358,0.1112,Europe,Eastern Europe,Cyprus,2000
2004,CY,0,0.0033,0.2114,0.3021,0.0715,Europe,Eastern Europe,Cyprus,2000
2005,CY,0,0.0034,0.2164,0.3006,0.0747,Europe,Eastern Europe,Cyprus,2000
2006,CY,0,0.0033,0.2109,0.3162,0.0906,Europe,Eastern Europe,Cyprus,2000
2007,CY,0,0.0034,0.2116,0.3019,0.0754,Europe,Eastern Europe,Cyprus,2000
2008,CY,0,0.0033,0.1991,0.3413,0.1016,Europe,Eastern Europe,Cyprus,2000
2009,CY,0,0.0031,0.1947,0.3448,0.0968,Europe,Eastern Europe,Cyprus,2000
2010,CY,0,0.0033,0.2005,0.3316,0.0877,Europe,Eastern Europe,Cyprus,2010
2011,CY,0,0.003,0.183,0.3685,0.1124,Europe,Eastern Europe,Cyprus,2010
2012,CY,0,0.003,0.1808,0.3719,0.116,Europe,Eastern Europe,Cyprus,2010
2013,CY,0,0.0028,0.1722,0.4107,0.156,Europe,Eastern Europe,Cyprus,2010
2014,CY,0,0.0029,0.1786,0.3714,0.1152,Europe,Eastern Europe,Cyprus,2010
2015,CY,0,0.0028,0.176,0.3712,0.1113,Europe,Eastern Europe,Cyprus,2010
2016,CY,0,0.0031,0.1869,0.3575,0.1064,Europe,Eastern Europe,Cyprus,2010
2017,CY,0,0.0033,0.1945,0.351,0.0998,Europe,Eastern Europe,Cyprus,2010
2018,CY,0,0.0032,0.1905,0.3671,0.1173,Europe,Eastern Europe,Cyprus,2010
2019,CY,0,0.0033,0.1956,0.36,0.1096,Europe,Eastern Europe,Cyprus,2010
2020,CY,0,0.0033,0.1965,0.3579,0.1086,Europe,Eastern Europe,Cyprus,2020
2021,CY,0,0.0037,0.212,0.3227,0.081,Europe,Eastern Europe,Cyprus,2020
2022,CY,0,0.0037,0.211,0.3266,0.0841,Europe,Eastern Europe,Cyprus,2020
2023,CY,0,0.0037,0.2107,0.3271,0.0843,Europe,Eastern Europe,Cyprus,2020
1980,CZ,0,0.0058,0.3121,0.1817,0.0256,Europe,Eastern Europe,Czech Republic,1980
1981,CZ,0,0.0058,0.3128,0.1811,0.0255,Europe,Eastern Europe,Czech Republic,1980
1982,CZ,0,0.0058,0.3135,0.1806,0.0254,Europe,Eastern Europe,Czech Republic,1980
1983,CZ,0,0.0058,0.3142,0.1801,0.0253,Europe,Eastern Europe,Czech Republic,1980
1984,CZ,0,0.0058,0.3149,0.1795,0.0252,Europe,Eastern Europe,Czech Republic,1980
1985,CZ,0,0.0058,0.3156,0.179,0.0251,Europe,Eastern Europe,Czech Republic,1980
1986,CZ,0,0.0058,0.315,0.1806,0.0266,Europe,Eastern Europe,Czech Republic,1980
1987,CZ,0,0.0058,0.3145,0.1822,0.0281,Europe,Eastern Europe,Czech Republic,1980
1988,CZ,0,0.0058,0.314,0.1839,0.0295,Europe,Eastern Europe,Czech Republic,1980
1989,CZ,0,0.0059,0.3085,0.1951,0.0382,Europe,Eastern Europe,Czech Republic,1980
1990,CZ,0,0.0059,0.3042,0.2067,0.047,Europe,Eastern Europe,Czech Republic,1990
1991,CZ,0,0.0056,0.2918,0.233,0.0662,Europe,Eastern Europe,Czech Republic,1990
1992,CZ,0,0.0053,0.2791,0.2594,0.086,Europe,Eastern Europe,Czech Republic,1990
1993,CZ,0,0.0051,0.268,0.2813,0.1015,Europe,Eastern Europe,Czech Republic,1990
1994,CZ,0,0.0048,0.2571,0.2936,0.1096,Europe,Eastern Europe,Czech Republic,1990
1995,CZ,0,0.0048,0.2563,0.2898,0.1048,Europe,Eastern Europe,Czech Republic,1990
1996,CZ,0,0.0048,0.2556,0.293,0.1056,Europe,Eastern Europe,Czech Republic,1990
1997,CZ,0,0.005,0.2615,0.2817,0.0969,Europe,Eastern Europe,Czech Republic,1990
1998,CZ,0,0.0048,0.2553,0.2974,0.1096,Europe,Eastern Europe,Czech Republic,1990
1999,CZ,0,0.0049,0.2566,0.2941,0.107,Europe,Eastern Europe,Czech Republic,1990
2000,CZ,0,0.005,0.2608,0.2912,0.105,Europe,Eastern Europe,Czech Republic,2000
2001,CZ,0,0.0049,0.2588,0.2936,0.1068,Europe,Eastern Europe,Czech Republic,2000
2002,CZ,0,0.005,0.2628,0.2865,0.1015,Europe,Eastern Europe,Czech Republic,2000
2003,CZ,0,0.0049,0.258,0.2886,0.1015,Europe,Eastern Europe,Czech Republic,2000
2004,CZ,0,0.0048,0.2537,0.293,0.1043,Europe,Eastern Europe,Czech Republic,2000
2005,CZ,0,0.0049,0.2546,0.2967,0.1118,Europe,Eastern Europe,Czech Republic,2000
2006,CZ,0,0.0047,0.2487,0.2969,0.1017,Europe,Eastern Europe,Czech Republic,2000
2007,CZ,0,0.0047,0.251,0.2981,0.1094,Europe,Eastern Europe,Czech Republic,2000
2008,CZ,0,0.0047,0.2472,0.3095,0.1264,Europe,Eastern Europe,Czech Republic,2000
2009,CZ,0,0.0049,0.2564,0.2948,0.111,Europe,Eastern Europe,Czech Republic,2000
2010,CZ,0,0.0049,0.2547,0.2915,0.1029,Europe,Eastern Europe,Czech Republic,2010
2011,CZ,0,0.0051,0.2639,0.2847,0.099,Europe,Eastern Europe,Czech Republic,2010
2012,CZ,0,0.0049,0.2566,0.298,0.1078,Europe,Eastern Europe,Czech Republic,2010
2013,CZ,0,0.0051,0.2642,0.2923,0.101,Europe,Eastern Europe,Czech Republic,2010
2014,CZ,0,0.0048,0.2538,0.2987,0.1031,Europe,Eastern Europe,Czech Republic,2010
2015,CZ,0,0.0047,0.2497,0.3013,0.1078,Europe,Eastern Europe,Czech Republic,2010
2016,CZ,0,0.0049,0.2586,0.2912,0.1028,Europe,Eastern Europe,Czech Republic,2010
2017,CZ,0,0.0048,0.2562,0.29,0.1032,Europe,Eastern Europe,Czech Republic,2010
2018,CZ,0,0.0047,0.2577,0.2838,0.0989,Europe,Eastern Europe,Czech Republic,2010
2019,CZ,0,0.0047,0.257,0.2866,0.101,Europe,Eastern Europe,Czech Republic,2010
2020,CZ,0,0.0047,0.2594,0.2817,0.0971,Europe,Eastern Europe,Czech Republic,2020
2021,CZ,0,0.0047,0.2594,0.2817,0.0971,Europe,Eastern Europe,Czech Republic,2020
2022,CZ,0,0.0047,0.2594,0.2817,0.0971,Europe,Eastern Europe,Czech Republic,2020
2023,CZ,0,0.0047,0.2594,0.2817,0.0971,Europe,Eastern Europe,Czech Republic,2020
1980,CW,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Curacao,1980
1981,CW,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Curacao,1980
1982,CW,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Curacao,1980
1983,CW,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Curacao,1980
1984,CW,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Curacao,1980
1985,CW,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Curacao,1980
1986,CW,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Curacao,1980
1987,CW,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Curacao,1980
1988,CW,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Curacao,1980
1989,CW,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Curacao,1980
1990,CW,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Curacao,1990
1991,CW,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Curacao,1990
1992,CW,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Curacao,1990
1993,CW,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Curacao,1990
1994,CW,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Curacao,1990
1995,CW,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Curacao,1990
1996,CW,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Curacao,1990
1997,CW,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Curacao,1990
1998,CW,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Curacao,1990
1999,CW,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Curacao,1990
2000,CW,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Curacao,2000
2001,CW,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Curacao,2000
2002,CW,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Curacao,2000
2003,CW,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Curacao,2000
2004,CW,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Curacao,2000
2005,CW,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Curacao,2000
2006,CW,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Curacao,2000
2007,CW,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Curacao,2000
2008,CW,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Curacao,2000
2009,CW,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Curacao,2000
2010,CW,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Curacao,2010
2011,CW,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Curacao,2010
2012,CW,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Curacao,2010
2013,CW,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Curacao,2010
2014,CW,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Curacao,2010
2015,CW,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Curacao,2010
2016,CW,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Curacao,2010
2017,CW,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Curacao,2010
2018,CW,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Curacao,2010
2019,CW,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Curacao,2010
2020,CW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Curacao,2020
2021,CW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Curacao,2020
2022,CW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Curacao,2020
2023,CW,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Curacao,2020
1980,DE,0,0.004,0.2347,0.2836,0.0968,Europe,Western Europe,Germany,1980
1981,DE,0,0.004,0.2353,0.2797,0.0928,Europe,Western Europe,Germany,1980
1982,DE,0,0.0042,0.2393,0.278,0.0905,Europe,Western Europe,Germany,1980
1983,DE,0,0.0041,0.2357,0.2828,0.0928,Europe,Western Europe,Germany,1980
1984,DE,0,0.0041,0.2384,0.2829,0.0927,Europe,Western Europe,Germany,1980
1985,DE,0,0.0041,0.238,0.2851,0.0942,Europe,Western Europe,Germany,1980
1986,DE,0,0.0041,0.2356,0.2914,0.0984,Europe,Western Europe,Germany,1980
1987,DE,0,0.004,0.2316,0.2996,0.1029,Europe,Western Europe,Germany,1980
1988,DE,0,0.0039,0.2255,0.3133,0.1115,Europe,Western Europe,Germany,1980
1989,DE,0,0.0038,0.2215,0.322,0.1164,Europe,Western Europe,Germany,1980
1990,DE,0,0.0037,0.2186,0.3228,0.1131,Europe,Western Europe,Germany,1990
1991,DE,0,0.0038,0.2236,0.3118,0.102,Europe,Western Europe,Germany,1990
1992,DE,0,0.0039,0.2265,0.3076,0.0952,Europe,Western Europe,Germany,1990
1993,DE,0,0.004,0.2293,0.3016,0.0909,Europe,Western Europe,Germany,1990
1994,DE,0,0.004,0.2325,0.2969,0.088,Europe,Western Europe,Germany,1990
1995,DE,0,0.0041,0.2332,0.2948,0.0867,Europe,Western Europe,Germany,1990
1996,DE,0,0.004,0.228,0.3031,0.0941,Europe,Western Europe,Germany,1990
1997,DE,0,0.0039,0.2231,0.3104,0.1005,Europe,Western Europe,Germany,1990
1998,DE,0,0.0038,0.2177,0.3184,0.1081,Europe,Western Europe,Germany,1990
1999,DE,0,0.0038,0.2209,0.3175,0.1044,Europe,Western Europe,Germany,1990
2000,DE,0,0.0037,0.2178,0.3191,0.103,Europe,Western Europe,Germany,2000
2001,DE,0,0.0037,0.2172,0.3201,0.1011,Europe,Western Europe,Germany,2000
2002,DE,0,0.0036,0.2139,0.3208,0.0993,Europe,Western Europe,Germany,2000
2003,DE,0,0.0037,0.2187,0.3134,0.0931,Europe,Western Europe,Germany,2000
2004,DE,0,0.0036,0.2122,0.3254,0.1042,Europe,Western Europe,Germany,2000
2005,DE,0,0.0034,0.2017,0.3436,0.1187,Europe,Western Europe,Germany,2000
2006,DE,0,0.0033,0.2004,0.3498,0.1251,Europe,Western Europe,Germany,2000
2007,DE,0,0.0033,0.196,0.3655,0.1338,Europe,Western Europe,Germany,2000
2008,DE,0,0.0032,0.1948,0.3624,0.132,Europe,Western Europe,Germany,2000
2009,DE,0,0.0032,0.195,0.367,0.1268,Europe,Western Europe,Germany,2000
2010,DE,0,0.0032,0.1968,0.3615,0.1258,Europe,Western Europe,Germany,2010
2011,DE,0,0.0032,0.1945,0.3628,0.1252,Europe,Western Europe,Germany,2010
2012,DE,0,0.0031,0.1931,0.3585,0.1233,Europe,Western Europe,Germany,2010
2013,DE,0,0.0029,0.1862,0.3725,0.128,Europe,Western Europe,Germany,2010
2014,DE,0,0.0029,0.1855,0.377,0.1298,Europe,Western Europe,Germany,2010
2015,DE,0,0.0029,0.1864,0.3765,0.1298,Europe,Western Europe,Germany,2010
2016,DE,0,0.003,0.1881,0.3758,0.1296,Europe,Western Europe,Germany,2010
2017,DE,0,0.0031,0.1896,0.3728,0.1291,Europe,Western Europe,Germany,2010
2018,DE,0,0.0031,0.1923,0.3686,0.1274,Europe,Western Europe,Germany,2010
2019,DE,0,0.0031,0.1914,0.3714,0.1284,Europe,Western Europe,Germany,2010
2020,DE,0,0.0031,0.1919,0.3703,0.1278,Europe,Western Europe,Germany,2020
2021,DE,0,0.0031,0.1919,0.3703,0.1278,Europe,Western Europe,Germany,2020
2022,DE,0,0.0031,0.1919,0.3703,0.1278,Europe,Western Europe,Germany,2020
2023,DE,0,0.0031,0.1919,0.3703,0.1278,Europe,Western Europe,Germany,2020
1980,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1981,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1982,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1983,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1984,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1985,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1986,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1987,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1988,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1989,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1980
1990,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1991,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1992,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1993,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1994,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1995,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1996,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1997,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1998,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
1999,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,1990
2000,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,2000
2001,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,2000
2002,DJ,0,0.0021,0.1347,0.4789,0.1541,Africa,East Africa,Djibouti,2000
2003,DJ,0,0.0021,0.1332,0.4827,0.1558,Africa,East Africa,Djibouti,2000
2004,DJ,0,0.002,0.1317,0.4865,0.1576,Africa,East Africa,Djibouti,2000
2005,DJ,0,0.002,0.1302,0.4902,0.1593,Africa,East Africa,Djibouti,2000
2006,DJ,0,0.002,0.1286,0.4940000000000001,0.1611,Africa,East Africa,Djibouti,2000
2007,DJ,0,0.0019,0.1271,0.4978,0.1628,Africa,East Africa,Djibouti,2000
2008,DJ,0,0.0019,0.1256,0.5015000000000001,0.1646,Africa,East Africa,Djibouti,2000
2009,DJ,0,0.0019,0.1241,0.5053,0.1663,Africa,East Africa,Djibouti,2000
2010,DJ,0,0.0018,0.1226,0.509,0.1681,Africa,East Africa,Djibouti,2010
2011,DJ,0,0.0018,0.121,0.5128,0.1698,Africa,East Africa,Djibouti,2010
2012,DJ,0,0.0018,0.1195,0.5165000000000001,0.1715,Africa,East Africa,Djibouti,2010
2013,DJ,0,0.0018,0.1208,0.5133,0.1642,Africa,East Africa,Djibouti,2010
2014,DJ,0,0.0018,0.1233,0.5088,0.1628,Africa,East Africa,Djibouti,2010
2015,DJ,0,0.0019,0.1258,0.5044000000000001,0.1614,Africa,East Africa,Djibouti,2010
2016,DJ,0,0.0019,0.1284,0.4999,0.16,Africa,East Africa,Djibouti,2010
2017,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2010
2018,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2010
2019,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2010
2020,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2020
2021,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2020
2022,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2020
2023,DJ,0,0.002,0.1309,0.4955,0.1586,Africa,East Africa,Djibouti,2020
1980,DK,0,0.0041,0.2476,0.2594,0.0678,Europe,Western Europe,Denmark,1980
1981,DK,0,0.0041,0.2472,0.2586,0.0666,Europe,Western Europe,Denmark,1980
1982,DK,0,0.0041,0.2493,0.2577,0.0685,Europe,Western Europe,Denmark,1980
1983,DK,0,0.0041,0.2477,0.2702,0.0819,Europe,Western Europe,Denmark,1980
1984,DK,0,0.0041,0.2472,0.2769,0.0896,Europe,Western Europe,Denmark,1980
1985,DK,0,0.0041,0.2458,0.2825,0.0951,Europe,Western Europe,Denmark,1980
1986,DK,0,0.0042,0.2502,0.271,0.085,Europe,Western Europe,Denmark,1980
1987,DK,0,0.0041,0.2479,0.273,0.0843,Europe,Western Europe,Denmark,1980
1988,DK,0,0.0042,0.25,0.2686,0.0791,Europe,Western Europe,Denmark,1980
1989,DK,0,0.0043,0.2496,0.2724,0.0824,Europe,Western Europe,Denmark,1980
1990,DK,0,0.0043,0.2483,0.2738,0.0825,Europe,Western Europe,Denmark,1990
1991,DK,0,0.0043,0.249,0.2725,0.0822,Europe,Western Europe,Denmark,1990
1992,DK,0,0.0043,0.248,0.2738,0.0828,Europe,Western Europe,Denmark,1990
1993,DK,0,0.0044,0.2523,0.2733,0.0828,Europe,Western Europe,Denmark,1990
1994,DK,0,0.0043,0.2467,0.2823,0.0918,Europe,Western Europe,Denmark,1990
1995,DK,0,0.0044,0.2486,0.2834,0.0929,Europe,Western Europe,Denmark,1990
1996,DK,0,0.0044,0.2488,0.2861,0.0958,Europe,Western Europe,Denmark,1990
1997,DK,0,0.0043,0.2431,0.2977,0.105,Europe,Western Europe,Denmark,1990
1998,DK,0,0.0043,0.2441,0.2957,0.1031,Europe,Western Europe,Denmark,1990
1999,DK,0,0.0042,0.2388,0.3077,0.1125,Europe,Western Europe,Denmark,1990
2000,DK,0,0.0041,0.2368,0.3112,0.115,Europe,Western Europe,Denmark,2000
2001,DK,0,0.0043,0.2445,0.2932,0.0988,Europe,Western Europe,Denmark,2000
2002,DK,0,0.0043,0.2464,0.2879,0.0943,Europe,Western Europe,Denmark,2000
2003,DK,0,0.0045,0.2528,0.2843,0.0915,Europe,Western Europe,Denmark,2000
2004,DK,0,0.0044,0.2466,0.2905,0.0971,Europe,Western Europe,Denmark,2000
2005,DK,0,0.0043,0.2415,0.306,0.1094,Europe,Western Europe,Denmark,2000
2006,DK,0,0.0043,0.2409,0.3086,0.1136,Europe,Western Europe,Denmark,2000
2007,DK,0,0.0044,0.2446,0.302,0.108,Europe,Western Europe,Denmark,2000
2008,DK,0,0.0041,0.2375,0.3007,0.103,Europe,Western Europe,Denmark,2000
2009,DK,0,0.0042,0.2414,0.2895,0.0947,Europe,Western Europe,Denmark,2000
2010,DK,0,0.0041,0.2316,0.3136,0.1127,Europe,Western Europe,Denmark,2010
2011,DK,0,0.0041,0.2299,0.3136,0.1121,Europe,Western Europe,Denmark,2010
2012,DK,0,0.004,0.2279,0.3171,0.1169,Europe,Western Europe,Denmark,2010
2013,DK,0,0.0039,0.2214,0.329,0.1235,Europe,Western Europe,Denmark,2010
2014,DK,0,0.0039,0.2203,0.3338,0.1279,Europe,Western Europe,Denmark,2010
2015,DK,0,0.0039,0.222,0.3265,0.1239,Europe,Western Europe,Denmark,2010
2016,DK,0,0.0039,0.2201,0.3306,0.1252,Europe,Western Europe,Denmark,2010
2017,DK,0,0.0039,0.219,0.3299,0.1218,Europe,Western Europe,Denmark,2010
2018,DK,0,0.0038,0.2185,0.3266,0.1176,Europe,Western Europe,Denmark,2010
2019,DK,0,0.0039,0.2195,0.3179,0.1087,Europe,Western Europe,Denmark,2010
2020,DK,0,0.0038,0.2146,0.3305,0.1197,Europe,Western Europe,Denmark,2020
2021,DK,0,0.0038,0.2146,0.3305,0.1197,Europe,Western Europe,Denmark,2020
2022,DK,0,0.0038,0.2146,0.3305,0.1197,Europe,Western Europe,Denmark,2020
2023,DK,0,0.0038,0.2146,0.3305,0.1197,Europe,Western Europe,Denmark,2020
1980,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1981,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1982,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1983,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1984,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1985,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1986,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1987,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1988,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1989,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1980
1990,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1991,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1992,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1993,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1994,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1995,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1996,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1997,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1998,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
1999,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,1990
2000,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2001,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2002,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2003,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2004,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2005,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2006,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2007,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2008,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2009,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2000
2010,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2010
2011,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2010
2012,DO,0,0,0.0831,0.5469,0.1866,Americas,Caribbean,Dominican Republic,2010
2013,DO,0,0,0.0775,0.5662,0.1945,Americas,Caribbean,Dominican Republic,2010
2014,DO,0,0,0.0824,0.5387000000000001,0.1996,Americas,Caribbean,Dominican Republic,2010
2015,DO,0,0,0.0823,0.5481,0.2057,Americas,Caribbean,Dominican Republic,2010
2016,DO,0,0,0.0871,0.5577,0.2417,Americas,Caribbean,Dominican Republic,2010
2017,DO,0,0,0.0966,0.5288,0.1905,Americas,Caribbean,Dominican Republic,2010
2018,DO,0,0,0.0945,0.5518000000000001,0.2542,Americas,Caribbean,Dominican Republic,2010
2019,DO,0,0,0.1054,0.5227,0.2078,Americas,Caribbean,Dominican Republic,2010
2020,DO,0,0,0.097,0.5013000000000001,0.164,Americas,Caribbean,Dominican Republic,2020
2021,DO,0,0,0.1066,0.4866,0.1604,Americas,Caribbean,Dominican Republic,2020
2022,DO,0,0,0.1144,0.4571,0.1518,Americas,Caribbean,Dominican Republic,2020
2023,DO,0,0,0.1144,0.4571,0.1518,Americas,Caribbean,Dominican Republic,2020
1980,DM,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Dominica,1980
1981,DM,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Dominica,1980
1982,DM,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Dominica,1980
1983,DM,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Dominica,1980
1984,DM,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Dominica,1980
1985,DM,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Dominica,1980
1986,DM,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Dominica,1980
1987,DM,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Dominica,1980
1988,DM,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Dominica,1980
1989,DM,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Dominica,1980
1990,DM,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Dominica,1990
1991,DM,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Dominica,1990
1992,DM,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Dominica,1990
1993,DM,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Dominica,1990
1994,DM,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Dominica,1990
1995,DM,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Dominica,1990
1996,DM,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Dominica,1990
1997,DM,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Dominica,1990
1998,DM,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Dominica,1990
1999,DM,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Dominica,1990
2000,DM,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Dominica,2000
2001,DM,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Dominica,2000
2002,DM,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Dominica,2000
2003,DM,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Dominica,2000
2004,DM,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Dominica,2000
2005,DM,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Dominica,2000
2006,DM,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Dominica,2000
2007,DM,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Dominica,2000
2008,DM,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Dominica,2000
2009,DM,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Dominica,2000
2010,DM,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Dominica,2010
2011,DM,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Dominica,2010
2012,DM,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Dominica,2010
2013,DM,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Dominica,2010
2014,DM,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Dominica,2010
2015,DM,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Dominica,2010
2016,DM,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Dominica,2010
2017,DM,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Dominica,2010
2018,DM,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Dominica,2010
2019,DM,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Dominica,2010
2020,DM,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Dominica,2020
2021,DM,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Dominica,2020
2022,DM,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Dominica,2020
2023,DM,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Dominica,2020
1980,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1981,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1982,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1983,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1984,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1985,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1986,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1987,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1988,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1989,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1980
1990,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1991,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1992,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1993,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1994,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1995,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1996,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1997,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1998,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
1999,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,1990
2000,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2001,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2002,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2003,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2004,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2005,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2006,DZ,0,0.0024,0.1508,0.4658,0.1568,Africa,North Africa,Algeria,2000
2007,DZ,0,0.0026,0.1579,0.4593,0.1577,Africa,North Africa,Algeria,2000
2008,DZ,0,0.0028,0.1648,0.4529,0.1585,Africa,North Africa,Algeria,2000
2009,DZ,0,0.0029,0.1717,0.4466,0.1593,Africa,North Africa,Algeria,2000
2010,DZ,0,0.0031,0.1784,0.4405,0.1601,Africa,North Africa,Algeria,2010
2011,DZ,0,0.0033,0.185,0.4344,0.1609,Africa,North Africa,Algeria,2010
2012,DZ,0,0.003,0.1714,0.4677,0.1967,Africa,North Africa,Algeria,2010
2013,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2014,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2015,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2016,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2017,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2018,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2019,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2010
2020,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2020
2021,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2020
2022,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2020
2023,DZ,0,0.0027,0.1577,0.5013000000000001,0.2327,Africa,North Africa,Algeria,2020
1980,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1981,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1982,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1983,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1984,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1985,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1986,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1987,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1988,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1989,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1980
1990,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1991,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1992,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1993,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1994,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1995,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1996,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1997,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1998,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
1999,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,1990
2000,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,2000
2001,EC,0,0,0.089,0.5439,0.195,Americas,South America,Ecuador,2000
2002,EC,0,0,0.0912,0.5352,0.1966,Americas,South America,Ecuador,2000
2003,EC,0,0,0.0935,0.5265000000000001,0.1983,Americas,South America,Ecuador,2000
2004,EC,0,0,0.0969,0.5186000000000001,0.1908,Americas,South America,Ecuador,2000
2005,EC,0,0,0.1004,0.5107,0.1834,Americas,South America,Ecuador,2000
2006,EC,0,0,0.1096,0.4866,0.1593,Americas,South America,Ecuador,2000
2007,EC,0,0,0.092,0.5433,0.2064,Americas,South America,Ecuador,2000
2008,EC,0,0,0.1014,0.4981,0.1457,Americas,South America,Ecuador,2000
2009,EC,0,0,0.1014,0.4856,0.1414,Americas,South America,Ecuador,2000
2010,EC,0,0,0.0995,0.5059,0.1805,Americas,South America,Ecuador,2010
2011,EC,0,0,0.1133,0.4464,0.1313,Americas,South America,Ecuador,2010
2012,EC,0,0,0.1074,0.4722,0.2017,Americas,South America,Ecuador,2010
2013,EC,0,0,0.1203,0.4546,0.1596,Americas,South America,Ecuador,2010
2014,EC,0,0,0.1344,0.4399,0.1483,Americas,South America,Ecuador,2010
2015,EC,0,0,0.1363,0.4189,0.1247,Americas,South America,Ecuador,2010
2016,EC,0,0,0.1358,0.4075,0.123,Americas,South America,Ecuador,2010
2017,EC,0,0,0.1305,0.425,0.1395,Americas,South America,Ecuador,2010
2018,EC,0,0,0.1245,0.4481,0.1469,Americas,South America,Ecuador,2010
2019,EC,0,0,0.1213,0.4404,0.1406,Americas,South America,Ecuador,2010
2020,EC,0,0,0.1009,0.4866,0.1964,Americas,South America,Ecuador,2020
2021,EC,0,0,0.0995,0.4751,0.1658,Americas,South America,Ecuador,2020
2022,EC,0,0,0.1083,0.4521,0.14,Americas,South America,Ecuador,2020
2023,EC,0,0,0.1083,0.4521,0.14,Americas,South America,Ecuador,2020
1980,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1981,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1982,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1983,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1984,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1985,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1986,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1987,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1988,EE,0,0.0041,0.2488,0.2297,0.044,Europe,Eastern Europe,Estonia,1980
1989,EE,0,0.0038,0.2267,0.2653,0.0643,Europe,Eastern Europe,Estonia,1980
1990,EE,0,0.0035,0.2024,0.3081,0.087,Europe,Eastern Europe,Estonia,1990
1991,EE,0,0.0032,0.1836,0.3465,0.1073,Europe,Eastern Europe,Estonia,1990
1992,EE,0,0.0029,0.1731,0.3656,0.1036,Europe,Eastern Europe,Estonia,1990
1993,EE,0,0.0025,0.1581,0.3795,0.1187,Europe,Eastern Europe,Estonia,1990
1994,EE,0,0.0025,0.1584,0.3836,0.1196,Europe,Eastern Europe,Estonia,1990
1995,EE,0,0.0025,0.1554,0.3952,0.1323,Europe,Eastern Europe,Estonia,1990
1996,EE,0,0.0024,0.1513,0.411,0.1486,Europe,Eastern Europe,Estonia,1990
1997,EE,0,0.0026,0.1528,0.4163,0.1499,Europe,Eastern Europe,Estonia,1990
1998,EE,0,0.0027,0.1576,0.4032,0.1401,Europe,Eastern Europe,Estonia,1990
1999,EE,0,0.0027,0.1566,0.4095,0.146,Europe,Eastern Europe,Estonia,1990
2000,EE,0,0.0027,0.1591,0.4068,0.1465,Europe,Eastern Europe,Estonia,2000
2001,EE,0,0.0027,0.1582,0.4048,0.1439,Europe,Eastern Europe,Estonia,2000
2002,EE,0,0.0026,0.1526,0.4251,0.1629,Europe,Eastern Europe,Estonia,2000
2003,EE,0,0.0009,0.1398,0.4263,0.1602,Europe,Eastern Europe,Estonia,2000
2004,EE,0,0.0026,0.155,0.4073,0.1534,Europe,Eastern Europe,Estonia,2000
2005,EE,0,0.0027,0.1513,0.4445,0.1913,Europe,Eastern Europe,Estonia,2000
2006,EE,0,0.0028,0.1616,0.4061,0.1544,Europe,Eastern Europe,Estonia,2000
2007,EE,0,0.0029,0.1682,0.3925,0.1548,Europe,Eastern Europe,Estonia,2000
2008,EE,0,0.0032,0.1793,0.3733,0.1301,Europe,Eastern Europe,Estonia,2000
2009,EE,0,0.0035,0.1933,0.3417,0.0949,Europe,Eastern Europe,Estonia,2000
2010,EE,0,0.0032,0.1831,0.358,0.1102,Europe,Eastern Europe,Estonia,2010
2011,EE,0,0.0032,0.1757,0.3718,0.1272,Europe,Eastern Europe,Estonia,2010
2012,EE,0,0.0031,0.1696,0.3916,0.142,Europe,Eastern Europe,Estonia,2010
2013,EE,0,0.0029,0.1603,0.3878,0.129,Europe,Eastern Europe,Estonia,2010
2014,EE,0,0.0029,0.163,0.3842,0.1311,Europe,Eastern Europe,Estonia,2010
2015,EE,0,0.0031,0.1736,0.3584,0.1123,Europe,Eastern Europe,Estonia,2010
2016,EE,0,0.0032,0.1784,0.3496,0.1102,Europe,Eastern Europe,Estonia,2010
2017,EE,0,0.003,0.1802,0.3502,0.1244,Europe,Eastern Europe,Estonia,2010
2018,EE,0,0.0032,0.1811,0.353,0.1243,Europe,Eastern Europe,Estonia,2010
2019,EE,0,0.0032,0.1825,0.3496,0.1199,Europe,Eastern Europe,Estonia,2010
2020,EE,0,0.0031,0.1801,0.3577,0.1275,Europe,Eastern Europe,Estonia,2020
2021,EE,0,0.0031,0.1801,0.3577,0.1275,Europe,Eastern Europe,Estonia,2020
2022,EE,0,0.0031,0.1801,0.3577,0.1275,Europe,Eastern Europe,Estonia,2020
2023,EE,0,0.0031,0.1801,0.3577,0.1275,Europe,Eastern Europe,Estonia,2020
1980,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1981,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1982,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1983,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1984,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1985,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1986,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1987,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1988,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1989,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1980
1990,EG,0,0.0032,0.1704,0.4712,0.1649,Africa,North Africa,Egypt,1990
1991,EG,0,0.0033,0.1715,0.4705,0.166,Africa,North Africa,Egypt,1990
1992,EG,0,0.0033,0.1726,0.4698,0.1672,Africa,North Africa,Egypt,1990
1993,EG,0,0.0033,0.1736,0.4692,0.1683,Africa,North Africa,Egypt,1990
1994,EG,0,0.0033,0.1747,0.4685,0.1694,Africa,North Africa,Egypt,1990
1995,EG,0,0.0033,0.1758,0.4679,0.1704,Africa,North Africa,Egypt,1990
1996,EG,0,0.0032,0.1681,0.4814000000000001,0.1783,Africa,North Africa,Egypt,1990
1997,EG,0,0.003,0.1609,0.4942,0.1858,Africa,North Africa,Egypt,1990
1998,EG,0,0.0028,0.1541,0.5062,0.1928,Africa,North Africa,Egypt,1990
1999,EG,0,0.0027,0.1476,0.5177,0.1995,Africa,North Africa,Egypt,1990
2000,EG,0,0.0027,0.1479,0.5151,0.1977,Africa,North Africa,Egypt,2000
2001,EG,0,0.0027,0.1481,0.5125000000000001,0.196,Africa,North Africa,Egypt,2000
2002,EG,0,0.0027,0.1483,0.51,0.1942,Africa,North Africa,Egypt,2000
2003,EG,0,0.0027,0.1485,0.5076,0.1926,Africa,North Africa,Egypt,2000
2004,EG,0,0.0027,0.1487,0.5052,0.1909,Africa,North Africa,Egypt,2000
2005,EG,0,0.0027,0.1485,0.5049,0.1935,Africa,North Africa,Egypt,2000
2006,EG,0,0.0027,0.1483,0.5046,0.1958,Africa,North Africa,Egypt,2000
2007,EG,0,0.0027,0.1481,0.5043,0.1981,Africa,North Africa,Egypt,2000
2008,EG,0,0.0027,0.148,0.5041,0.2002,Africa,North Africa,Egypt,2000
2009,EG,0,0.0028,0.1539,0.4951,0.1907,Africa,North Africa,Egypt,2000
2010,EG,0,0.0029,0.1599,0.4862,0.1812,Africa,North Africa,Egypt,2010
2011,EG,0,0.0028,0.1546,0.4893,0.186,Africa,North Africa,Egypt,2010
2012,EG,0,0.0026,0.1493,0.4924,0.1907,Africa,North Africa,Egypt,2010
2013,EG,0,0.0026,0.1479,0.4985,0.1979,Africa,North Africa,Egypt,2010
2014,EG,0,0.0026,0.1465,0.5045000000000001,0.2048,Africa,North Africa,Egypt,2010
2015,EG,0,0.0026,0.1452,0.5104000000000001,0.2117,Africa,North Africa,Egypt,2010
2016,EG,0,0.0026,0.1475,0.5049,0.2072,Africa,North Africa,Egypt,2010
2017,EG,0,0.0027,0.1498,0.4997,0.2028,Africa,North Africa,Egypt,2010
2018,EG,0,0.0027,0.1499,0.5005000000000001,0.2048,Africa,North Africa,Egypt,2010
2019,EG,0,0.0027,0.15,0.5013000000000001,0.2067,Africa,North Africa,Egypt,2010
2020,EG,0,0.0028,0.1557,0.4925,0.1905,Africa,North Africa,Egypt,2020
2021,EG,0,0.0028,0.1557,0.4925,0.1905,Africa,North Africa,Egypt,2020
2022,EG,0,0.0028,0.1557,0.4925,0.1905,Africa,North Africa,Egypt,2020
2023,EG,0,0.0028,0.1557,0.4925,0.1905,Africa,North Africa,Egypt,2020
1980,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1981,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1982,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1983,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1984,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1985,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1986,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1987,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1988,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1989,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1980
1990,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1991,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1992,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1993,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1994,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1995,ER,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Eritrea,1990
1996,ER,0,0.0022,0.1294,0.5435,0.2568,Africa,East Africa,Eritrea,1990
1997,ER,0,0.0024,0.1452,0.5039,0.2165,Africa,East Africa,Eritrea,1990
1998,ER,0,0.0027,0.1611,0.4642,0.1761,Africa,East Africa,Eritrea,1990
1999,ER,0,0.003,0.177,0.4243,0.1354,Africa,East Africa,Eritrea,1990
2000,ER,0,0.003,0.1766,0.4255,0.1385,Africa,East Africa,Eritrea,2000
2001,ER,0,0.003,0.1763,0.4267,0.1417,Africa,East Africa,Eritrea,2000
2002,ER,0,0.003,0.1759,0.4279,0.1448,Africa,East Africa,Eritrea,2000
2003,ER,0,0.003,0.1756,0.4291,0.1479,Africa,East Africa,Eritrea,2000
2004,ER,0,0.003,0.1753,0.4302,0.151,Africa,East Africa,Eritrea,2000
2005,ER,0,0.003,0.1735,0.433,0.1507,Africa,East Africa,Eritrea,2000
2006,ER,0,0.0029,0.1718,0.4357,0.1504,Africa,East Africa,Eritrea,2000
2007,ER,0,0.0029,0.1701,0.4385,0.1501,Africa,East Africa,Eritrea,2000
2008,ER,0,0.0028,0.1684,0.4412,0.1498,Africa,East Africa,Eritrea,2000
2009,ER,0,0.0028,0.1666,0.4439,0.1494,Africa,East Africa,Eritrea,2000
2010,ER,0,0.0028,0.1649,0.4466,0.1491,Africa,East Africa,Eritrea,2010
2011,ER,0,0.0027,0.1636,0.4482,0.1469,Africa,East Africa,Eritrea,2010
2012,ER,0,0.0027,0.1623,0.4499,0.1447,Africa,East Africa,Eritrea,2010
2013,ER,0,0.0027,0.161,0.4515,0.1426,Africa,East Africa,Eritrea,2010
2014,ER,0,0.0026,0.1597,0.4531,0.1404,Africa,East Africa,Eritrea,2010
2015,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2010
2016,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2010
2017,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2010
2018,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2010
2019,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2010
2020,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2020
2021,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2020
2022,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2020
2023,ER,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Eritrea,2020
1980,ES,0,0.0034,0.2018,0.3495,0.1135,Europe,Western Europe,Spain,1980
1981,ES,0,0.0034,0.2027,0.3471,0.1115,Europe,Western Europe,Spain,1980
1982,ES,0,0.0034,0.2041,0.3486,0.1123,Europe,Western Europe,Spain,1980
1983,ES,0,0.0035,0.2042,0.3485,0.1091,Europe,Western Europe,Spain,1980
1984,ES,0,0.0034,0.2039,0.3494,0.1079,Europe,Western Europe,Spain,1980
1985,ES,0,0.0034,0.2025,0.3517,0.1096,Europe,Western Europe,Spain,1980
1986,ES,0,0.0033,0.1965,0.3637,0.1175,Europe,Western Europe,Spain,1980
1987,ES,0,0.0033,0.195,0.3643,0.1178,Europe,Western Europe,Spain,1980
1988,ES,0,0.0032,0.1929,0.3669,0.1184,Europe,Western Europe,Spain,1980
1989,ES,0,0.0032,0.1892,0.3739,0.1215,Europe,Western Europe,Spain,1980
1990,ES,0,0.0031,0.1891,0.367,0.1171,Europe,Western Europe,Spain,1990
1991,ES,0,0.0032,0.192,0.3606,0.1145,Europe,Western Europe,Spain,1990
1992,ES,0,0.0032,0.1954,0.3524,0.1124,Europe,Western Europe,Spain,1990
1993,ES,0,0.0033,0.1986,0.3463,0.1097,Europe,Western Europe,Spain,1990
1994,ES,0,0.0032,0.195,0.3534,0.1141,Europe,Western Europe,Spain,1990
1995,ES,0,0.0032,0.1937,0.3557,0.1169,Europe,Western Europe,Spain,1990
1996,ES,0,0.0032,0.1946,0.3528,0.1149,Europe,Western Europe,Spain,1990
1997,ES,0,0.0033,0.2015,0.343,0.1098,Europe,Western Europe,Spain,1990
1998,ES,0,0.0034,0.2006,0.3433,0.1096,Europe,Western Europe,Spain,1990
1999,ES,0,0.0033,0.2002,0.3459,0.1115,Europe,Western Europe,Spain,1990
2000,ES,0,0.0034,0.2028,0.3427,0.1102,Europe,Western Europe,Spain,2000
2001,ES,0,0.0035,0.2058,0.3365,0.1057,Europe,Western Europe,Spain,2000
2002,ES,0,0.0034,0.2045,0.3394,0.1088,Europe,Western Europe,Spain,2000
2003,ES,0,0.0034,0.204,0.3425,0.1112,Europe,Western Europe,Spain,2000
2004,ES,0,0.0034,0.203,0.3406,0.1099,Europe,Western Europe,Spain,2000
2005,ES,0,0.0035,0.2071,0.338,0.1086,Europe,Western Europe,Spain,2000
2006,ES,0,0.0034,0.2031,0.347,0.1131,Europe,Western Europe,Spain,2000
2007,ES,0,0.0034,0.2034,0.3456,0.1131,Europe,Western Europe,Spain,2000
2008,ES,0,0.0034,0.2042,0.3477,0.1161,Europe,Western Europe,Spain,2000
2009,ES,0,0.0034,0.1995,0.3587,0.1262,Europe,Western Europe,Spain,2000
2010,ES,0,0.0035,0.2062,0.3433,0.1154,Europe,Western Europe,Spain,2010
2011,ES,0,0.0034,0.2065,0.3407,0.1135,Europe,Western Europe,Spain,2010
2012,ES,0,0.0034,0.2086,0.3464,0.1214,Europe,Western Europe,Spain,2010
2013,ES,0,0.0034,0.2061,0.3472,0.1207,Europe,Western Europe,Spain,2010
2014,ES,0,0.0033,0.2053,0.3491,0.1218,Europe,Western Europe,Spain,2010
2015,ES,0,0.0033,0.2036,0.3534,0.1266,Europe,Western Europe,Spain,2010
2016,ES,0,0.0033,0.2023,0.3512,0.1271,Europe,Western Europe,Spain,2010
2017,ES,0,0.0035,0.2063,0.3508,0.1272,Europe,Western Europe,Spain,2010
2018,ES,0,0.0036,0.2106,0.3466,0.1255,Europe,Western Europe,Spain,2010
2019,ES,0,0.0036,0.2123,0.3417,0.121,Europe,Western Europe,Spain,2010
2020,ES,0,0.0036,0.2123,0.3417,0.121,Europe,Western Europe,Spain,2020
2021,ES,0,0.0036,0.2123,0.3417,0.121,Europe,Western Europe,Spain,2020
2022,ES,0,0.0036,0.2123,0.3417,0.121,Europe,Western Europe,Spain,2020
2023,ES,0,0.0036,0.2123,0.3417,0.121,Europe,Western Europe,Spain,2020
1980,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1981,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1982,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1983,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1984,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1985,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1986,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1987,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1988,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1989,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1980
1990,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1991,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1992,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1993,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1994,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1995,ET,0,0.0019,0.1137,0.5829,0.2969,Africa,East Africa,Ethiopia,1990
1996,ET,0,0.0022,0.1294,0.5435,0.2568,Africa,East Africa,Ethiopia,1990
1997,ET,0,0.0024,0.1452,0.5039,0.2165,Africa,East Africa,Ethiopia,1990
1998,ET,0,0.0027,0.1611,0.4642,0.1761,Africa,East Africa,Ethiopia,1990
1999,ET,0,0.003,0.177,0.4243,0.1354,Africa,East Africa,Ethiopia,1990
2000,ET,0,0.003,0.1766,0.4255,0.1385,Africa,East Africa,Ethiopia,2000
2001,ET,0,0.003,0.1763,0.4267,0.1417,Africa,East Africa,Ethiopia,2000
2002,ET,0,0.003,0.1759,0.4279,0.1448,Africa,East Africa,Ethiopia,2000
2003,ET,0,0.003,0.1756,0.4291,0.1479,Africa,East Africa,Ethiopia,2000
2004,ET,0,0.003,0.1753,0.4302,0.151,Africa,East Africa,Ethiopia,2000
2005,ET,0,0.003,0.1735,0.433,0.1507,Africa,East Africa,Ethiopia,2000
2006,ET,0,0.0029,0.1718,0.4357,0.1504,Africa,East Africa,Ethiopia,2000
2007,ET,0,0.0029,0.1701,0.4385,0.1501,Africa,East Africa,Ethiopia,2000
2008,ET,0,0.0028,0.1684,0.4412,0.1498,Africa,East Africa,Ethiopia,2000
2009,ET,0,0.0028,0.1666,0.4439,0.1494,Africa,East Africa,Ethiopia,2000
2010,ET,0,0.0028,0.1649,0.4466,0.1491,Africa,East Africa,Ethiopia,2010
2011,ET,0,0.0027,0.1636,0.4482,0.1469,Africa,East Africa,Ethiopia,2010
2012,ET,0,0.0027,0.1623,0.4499,0.1447,Africa,East Africa,Ethiopia,2010
2013,ET,0,0.0027,0.161,0.4515,0.1426,Africa,East Africa,Ethiopia,2010
2014,ET,0,0.0026,0.1597,0.4531,0.1404,Africa,East Africa,Ethiopia,2010
2015,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2010
2016,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2010
2017,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2010
2018,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2010
2019,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2010
2020,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2020
2021,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2020
2022,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2020
2023,ET,0,0.0026,0.1584,0.4547,0.1382,Africa,East Africa,Ethiopia,2020
1980,FI,0,0.0041,0.238,0.2713,0.0639,Europe,Western Europe,Finland,1980
1981,FI,0,0.0042,0.2408,0.2612,0.0544,Europe,Western Europe,Finland,1980
1982,FI,0,0.0042,0.2407,0.2579,0.052,Europe,Western Europe,Finland,1980
1983,FI,0,0.0042,0.2399,0.259,0.0532,Europe,Western Europe,Finland,1980
1984,FI,0,0.0041,0.2393,0.2668,0.06,Europe,Western Europe,Finland,1980
1985,FI,0,0.0042,0.2404,0.2628,0.056,Europe,Western Europe,Finland,1980
1986,FI,0,0.0042,0.2415,0.2593,0.053,Europe,Western Europe,Finland,1980
1987,FI,0,0.0041,0.2404,0.2729,0.0653,Europe,Western Europe,Finland,1980
1988,FI,0,0.0041,0.2389,0.2752,0.0673,Europe,Western Europe,Finland,1980
1989,FI,0,0.0042,0.2454,0.2648,0.0573,Europe,Western Europe,Finland,1980
1990,FI,0,0.0041,0.2431,0.251,0.045,Europe,Western Europe,Finland,1990
1991,FI,0,0.0043,0.2507,0.2386,0.0374,Europe,Western Europe,Finland,1990
1992,FI,0,0.0044,0.2536,0.2372,0.0361,Europe,Western Europe,Finland,1990
1993,FI,0,0.0045,0.2547,0.2515,0.0481,Europe,Western Europe,Finland,1990
1994,FI,0,0.0042,0.2393,0.2819,0.0713,Europe,Western Europe,Finland,1990
1995,FI,0,0.0043,0.2377,0.2993,0.0899,Europe,Western Europe,Finland,1990
1996,FI,0,0.0042,0.2362,0.2996,0.0903,Europe,Western Europe,Finland,1990
1997,FI,0,0.0041,0.2299,0.3189,0.1064,Europe,Western Europe,Finland,1990
1998,FI,0,0.004,0.2294,0.3263,0.1157,Europe,Western Europe,Finland,1990
1999,FI,0,0.0041,0.2314,0.3335,0.1254,Europe,Western Europe,Finland,1990
2000,FI,0,0.0039,0.2239,0.3457,0.1346,Europe,Western Europe,Finland,2000
2001,FI,0,0.0039,0.2254,0.3389,0.1293,Europe,Western Europe,Finland,2000
2002,FI,0,0.004,0.2285,0.3325,0.1253,Europe,Western Europe,Finland,2000
2003,FI,0,0.004,0.2289,0.3258,0.118,Europe,Western Europe,Finland,2000
2004,FI,0,0.0039,0.2271,0.3379,0.1295,Europe,Western Europe,Finland,2000
2005,FI,0,0.0039,0.2277,0.3213,0.1101,Europe,Western Europe,Finland,2000
2006,FI,0,0.0038,0.2222,0.3336,0.1181,Europe,Western Europe,Finland,2000
2007,FI,0,0.0038,0.2229,0.3311,0.1155,Europe,Western Europe,Finland,2000
2008,FI,0,0.0037,0.2138,0.3406,0.1126,Europe,Western Europe,Finland,2000
2009,FI,0,0.0038,0.2166,0.3227,0.0901,Europe,Western Europe,Finland,2000
2010,FI,0,0.0037,0.2121,0.3264,0.0962,Europe,Western Europe,Finland,2010
2011,FI,0,0.0037,0.2128,0.3235,0.0924,Europe,Western Europe,Finland,2010
2012,FI,0,0.0038,0.2152,0.3177,0.0876,Europe,Western Europe,Finland,2010
2013,FI,0,0.0038,0.2185,0.3153,0.086,Europe,Western Europe,Finland,2010
2014,FI,0,0.0038,0.2176,0.3205,0.0901,Europe,Western Europe,Finland,2010
2015,FI,0,0.0037,0.2137,0.3293,0.0956,Europe,Western Europe,Finland,2010
2016,FI,0,0.0037,0.2159,0.329,0.0968,Europe,Western Europe,Finland,2010
2017,FI,0,0.0038,0.2155,0.3386,0.1061,Europe,Western Europe,Finland,2010
2018,FI,0,0.0038,0.2165,0.3359,0.1047,Europe,Western Europe,Finland,2010
2019,FI,0,0.0038,0.2173,0.3337,0.1024,Europe,Western Europe,Finland,2010
2020,FI,0,0.0038,0.2141,0.3425,0.1114,Europe,Western Europe,Finland,2020
2021,FI,0,0.0038,0.2141,0.3425,0.1114,Europe,Western Europe,Finland,2020
2022,FI,0,0.0038,0.2141,0.3425,0.1114,Europe,Western Europe,Finland,2020
2023,FI,0,0.0038,0.2141,0.3425,0.1114,Europe,Western Europe,Finland,2020
1980,FJ,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1981,FJ,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1982,FJ,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1983,FJ,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1984,FJ,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1985,FJ,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1986,FJ,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1987,FJ,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1988,FJ,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1989,FJ,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1980
1990,FJ,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1991,FJ,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1992,FJ,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1993,FJ,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1994,FJ,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1995,FJ,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1996,FJ,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1997,FJ,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1998,FJ,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
1999,FJ,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Fiji,1990
2000,FJ,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2001,FJ,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2002,FJ,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2003,FJ,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2004,FJ,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2005,FJ,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2006,FJ,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2007,FJ,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2008,FJ,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2009,FJ,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2000
2010,FJ,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2011,FJ,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2012,FJ,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2013,FJ,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2014,FJ,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2015,FJ,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2016,FJ,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2017,FJ,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2018,FJ,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2019,FJ,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2010
2020,FJ,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2020
2021,FJ,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2020
2022,FJ,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2020
2023,FJ,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Fiji,2020
1980,FM,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1981,FM,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1982,FM,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1983,FM,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1984,FM,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1985,FM,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1986,FM,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1987,FM,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1988,FM,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1989,FM,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1980
1990,FM,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1991,FM,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1992,FM,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1993,FM,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1994,FM,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1995,FM,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1996,FM,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1997,FM,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1998,FM,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
1999,FM,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,1990
2000,FM,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2001,FM,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2002,FM,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2003,FM,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2004,FM,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2005,FM,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2006,FM,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2007,FM,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2008,FM,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2009,FM,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2000
2010,FM,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2011,FM,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2012,FM,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2013,FM,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2014,FM,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2015,FM,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2016,FM,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2017,FM,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2018,FM,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2019,FM,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2010
2020,FM,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2020
2021,FM,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2020
2022,FM,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2020
2023,FM,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Micronesia,2020
1980,FR,0,0.0038,0.2266,0.2876,0.0753,Europe,Western Europe,France,1980
1981,FR,0,0.0039,0.2276,0.2854,0.0734,Europe,Western Europe,France,1980
1982,FR,0,0.0039,0.2285,0.2826,0.0703,Europe,Western Europe,France,1980
1983,FR,0,0.0039,0.2277,0.2833,0.0698,Europe,Western Europe,France,1980
1984,FR,0,0.0038,0.2259,0.285,0.0701,Europe,Western Europe,France,1980
1985,FR,0,0.0038,0.2261,0.2891,0.0727,Europe,Western Europe,France,1980
1986,FR,0,0.0038,0.2239,0.2977,0.0784,Europe,Western Europe,France,1980
1987,FR,0,0.0038,0.223,0.3032,0.0822,Europe,Western Europe,France,1980
1988,FR,0,0.0038,0.2225,0.3078,0.0843,Europe,Western Europe,France,1980
1989,FR,0,0.0037,0.2176,0.315,0.0891,Europe,Western Europe,France,1980
1990,FR,0,0.0036,0.2153,0.3156,0.0897,Europe,Western Europe,France,1990
1991,FR,0,0.0037,0.2194,0.3107,0.0903,Europe,Western Europe,France,1990
1992,FR,0,0.0037,0.2168,0.3077,0.0872,Europe,Western Europe,France,1990
1993,FR,0,0.0036,0.215,0.3065,0.0866,Europe,Western Europe,France,1990
1994,FR,0,0.0036,0.2128,0.3119,0.0912,Europe,Western Europe,France,1990
1995,FR,0,0.0036,0.2131,0.3132,0.0928,Europe,Western Europe,France,1990
1996,FR,0,0.0035,0.2105,0.3221,0.1022,Europe,Western Europe,France,1990
1997,FR,0,0.0034,0.2074,0.3262,0.1067,Europe,Western Europe,France,1990
1998,FR,0,0.0034,0.2054,0.3329,0.1118,Europe,Western Europe,France,1990
1999,FR,0,0.0034,0.2061,0.3325,0.1105,Europe,Western Europe,France,1990
2000,FR,0,0.0034,0.2054,0.3359,0.1132,Europe,Western Europe,France,2000
2001,FR,0,0.0034,0.2067,0.3378,0.115,Europe,Western Europe,France,2000
2002,FR,0,0.0033,0.2037,0.3361,0.1107,Europe,Western Europe,France,2000
2003,FR,0,0.0033,0.2019,0.3375,0.1119,Europe,Western Europe,France,2000
2004,FR,0,0.0032,0.1994,0.3431,0.117,Europe,Western Europe,France,2000
2005,FR,0,0.0032,0.2,0.3426,0.1152,Europe,Western Europe,France,2000
2006,FR,0,0.0033,0.2021,0.3403,0.1117,Europe,Western Europe,France,2000
2007,FR,0,0.0032,0.1985,0.3491,0.1185,Europe,Western Europe,France,2000
2008,FR,0,0.0032,0.1979,0.352,0.1208,Europe,Western Europe,France,2000
2009,FR,0,0.0033,0.2032,0.3329,0.1036,Europe,Western Europe,France,2000
2010,FR,0,0.0033,0.2023,0.3381,0.1102,Europe,Western Europe,France,2010
2011,FR,0,0.0033,0.2043,0.3392,0.1124,Europe,Western Europe,France,2010
2012,FR,0,0.0034,0.2082,0.3292,0.1024,Europe,Western Europe,France,2010
2013,FR,0,0.0034,0.2092,0.3233,0.0955,Europe,Western Europe,France,2010
2014,FR,0,0.0034,0.2112,0.3249,0.0979,Europe,Western Europe,France,2010
2015,FR,0,0.0033,0.2055,0.3334,0.1034,Europe,Western Europe,France,2010
2016,FR,0,0.0034,0.2065,0.3338,0.1039,Europe,Western Europe,France,2010
2017,FR,0,0.0034,0.206,0.336,0.1075,Europe,Western Europe,France,2010
2018,FR,0,0.0033,0.2037,0.3426,0.1171,Europe,Western Europe,France,2010
2019,FR,0,0.0033,0.2054,0.3398,0.1136,Europe,Western Europe,France,2010
2020,FR,0,0.0033,0.2062,0.3374,0.111,Europe,Western Europe,France,2020
2021,FR,0,0.0033,0.2034,0.3478,0.1267,Europe,Western Europe,France,2020
2022,FR,0,0.0033,0.2043,0.3427,0.1205,Europe,Western Europe,France,2020
2023,FR,0,0.0033,0.2043,0.3427,0.1205,Europe,Western Europe,France,2020
1980,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1981,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1982,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1983,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1984,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1985,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1986,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1987,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1988,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1989,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1980
1990,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1991,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1992,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1993,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1994,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1995,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1996,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1997,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1998,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
1999,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,1990
2000,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2001,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2002,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2003,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2004,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2005,GA,0,0.002,0.1252,0.5077,0.1714,Africa,Middle Africa,Gabon,2000
2006,GA,0,0.002,0.1267,0.5015000000000001,0.1663,Africa,Middle Africa,Gabon,2000
2007,GA,0,0.002,0.1283,0.4953,0.1612,Africa,Middle Africa,Gabon,2000
2008,GA,0,0.002,0.1299,0.4891,0.1561,Africa,Middle Africa,Gabon,2000
2009,GA,0,0.002,0.1315,0.4829,0.151,Africa,Middle Africa,Gabon,2000
2010,GA,0,0.0021,0.1331,0.4766,0.1459,Africa,Middle Africa,Gabon,2010
2011,GA,0,0.0021,0.1347,0.4704,0.1408,Africa,Middle Africa,Gabon,2010
2012,GA,0,0.0021,0.1363,0.4642,0.1357,Africa,Middle Africa,Gabon,2010
2013,GA,0,0.0021,0.1378,0.458,0.1306,Africa,Middle Africa,Gabon,2010
2014,GA,0,0.0021,0.1394,0.4517,0.1255,Africa,Middle Africa,Gabon,2010
2015,GA,0,0.0022,0.141,0.4455,0.1204,Africa,Middle Africa,Gabon,2010
2016,GA,0,0.0022,0.1426,0.4393,0.1153,Africa,Middle Africa,Gabon,2010
2017,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2010
2018,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2010
2019,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2010
2020,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2020
2021,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2020
2022,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2020
2023,GA,0,0.0022,0.1442,0.4331,0.1102,Africa,Middle Africa,Gabon,2020
1980,GB,0,0.0036,0.2219,0.29,0.0717,Europe,Western Europe,United Kingdom,1980
1981,GB,0,0.0036,0.2219,0.29,0.0717,Europe,Western Europe,United Kingdom,1980
1982,GB,0,0.0036,0.2203,0.2914,0.0732,Europe,Western Europe,United Kingdom,1980
1983,GB,0,0.0035,0.2177,0.2954,0.0727,Europe,Western Europe,United Kingdom,1980
1984,GB,0,0.0036,0.2155,0.302,0.0752,Europe,Western Europe,United Kingdom,1980
1985,GB,0,0.0035,0.212,0.3025,0.0771,Europe,Western Europe,United Kingdom,1980
1986,GB,0,0.0034,0.2082,0.3077,0.0791,Europe,Western Europe,United Kingdom,1980
1987,GB,0,0.0033,0.2068,0.3079,0.0808,Europe,Western Europe,United Kingdom,1980
1988,GB,0,0.0033,0.2039,0.3137,0.0858,Europe,Western Europe,United Kingdom,1980
1989,GB,0,0.0033,0.2064,0.3094,0.0814,Europe,Western Europe,United Kingdom,1980
1990,GB,0,0.0031,0.193,0.3233,0.0815,Europe,Western Europe,United Kingdom,1990
1991,GB,0,0.003,0.1912,0.3249,0.0821,Europe,Western Europe,United Kingdom,1990
1992,GB,0,0.0032,0.1951,0.3222,0.0774,Europe,Western Europe,United Kingdom,1990
1993,GB,0,0.0031,0.1918,0.3331,0.0872,Europe,Western Europe,United Kingdom,1990
1994,GB,0,0.0032,0.1927,0.3419,0.0992,Europe,Western Europe,United Kingdom,1990
1995,GB,0,0.003,0.1882,0.3435,0.1003,Europe,Western Europe,United Kingdom,1990
1996,GB,0,0.003,0.1866,0.3547,0.1148,Europe,Western Europe,United Kingdom,1990
1997,GB,0,0.0031,0.1894,0.3538,0.1192,Europe,Western Europe,United Kingdom,1990
1998,GB,0,0.0031,0.1866,0.3633,0.1281,Europe,Western Europe,United Kingdom,1990
1999,GB,0,0.003,0.183,0.3657,0.1201,Europe,Western Europe,United Kingdom,1990
2000,GB,0,0.0031,0.1886,0.357,0.1163,Europe,Western Europe,United Kingdom,2000
2001,GB,0,0.0031,0.1859,0.3621,0.1157,Europe,Western Europe,United Kingdom,2000
2002,GB,0,0.0031,0.1884,0.3648,0.1185,Europe,Western Europe,United Kingdom,2000
2003,GB,0,0.003,0.1822,0.3758,0.1296,Europe,Western Europe,United Kingdom,2000
2004,GB,0,0.0031,0.1851,0.3704,0.1284,Europe,Western Europe,United Kingdom,2000
2005,GB,0,0.003,0.1821,0.3813,0.141,Europe,Western Europe,United Kingdom,2000
2006,GB,0,0.003,0.181,0.3849,0.145,Europe,Western Europe,United Kingdom,2000
2007,GB,0,0.0031,0.1845,0.3855,0.1454,Europe,Western Europe,United Kingdom,2000
2008,GB,0,0.003,0.1871,0.3686,0.1393,Europe,Western Europe,United Kingdom,2000
2009,GB,0,0.0028,0.1771,0.3847,0.1415,Europe,Western Europe,United Kingdom,2000
2010,GB,0,0.0032,0.1988,0.3463,0.1214,Europe,Western Europe,United Kingdom,2010
2011,GB,0,0.0032,0.1957,0.3553,0.1301,Europe,Western Europe,United Kingdom,2010
2012,GB,0,0.0031,0.1888,0.3647,0.1265,Europe,Western Europe,United Kingdom,2010
2013,GB,0,0.003,0.1837,0.3865,0.137,Europe,Western Europe,United Kingdom,2010
2014,GB,0,0.0032,0.1941,0.3668,0.1324,Europe,Western Europe,United Kingdom,2010
2015,GB,0,0.0033,0.1993,0.3557,0.1224,Europe,Western Europe,United Kingdom,2010
2016,GB,0,0.0034,0.201,0.3558,0.124,Europe,Western Europe,United Kingdom,2010
2017,GB,0,0.0035,0.2044,0.3591,0.1331,Europe,Western Europe,United Kingdom,2010
2018,GB,0,0.0034,0.2029,0.3592,0.1296,Europe,Western Europe,United Kingdom,2010
2019,GB,0,0.0034,0.2036,0.3564,0.1261,Europe,Western Europe,United Kingdom,2010
2020,GB,0,0.0034,0.2005,0.362,0.131,Europe,Western Europe,United Kingdom,2020
2021,GB,0,0.0034,0.2005,0.362,0.131,Europe,Western Europe,United Kingdom,2020
2022,GB,0,0.0034,0.2005,0.362,0.131,Europe,Western Europe,United Kingdom,2020
2023,GB,0,0.0034,0.2005,0.362,0.131,Europe,Western Europe,United Kingdom,2020
1980,GD,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Grenada,1980
1981,GD,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Grenada,1980
1982,GD,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Grenada,1980
1983,GD,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Grenada,1980
1984,GD,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Grenada,1980
1985,GD,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Grenada,1980
1986,GD,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Grenada,1980
1987,GD,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Grenada,1980
1988,GD,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Grenada,1980
1989,GD,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Grenada,1980
1990,GD,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Grenada,1990
1991,GD,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Grenada,1990
1992,GD,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Grenada,1990
1993,GD,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Grenada,1990
1994,GD,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Grenada,1990
1995,GD,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Grenada,1990
1996,GD,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Grenada,1990
1997,GD,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Grenada,1990
1998,GD,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Grenada,1990
1999,GD,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Grenada,1990
2000,GD,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Grenada,2000
2001,GD,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Grenada,2000
2002,GD,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Grenada,2000
2003,GD,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Grenada,2000
2004,GD,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Grenada,2000
2005,GD,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Grenada,2000
2006,GD,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Grenada,2000
2007,GD,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Grenada,2000
2008,GD,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Grenada,2000
2009,GD,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Grenada,2000
2010,GD,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Grenada,2010
2011,GD,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Grenada,2010
2012,GD,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Grenada,2010
2013,GD,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Grenada,2010
2014,GD,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Grenada,2010
2015,GD,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Grenada,2010
2016,GD,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Grenada,2010
2017,GD,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Grenada,2010
2018,GD,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Grenada,2010
2019,GD,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Grenada,2010
2020,GD,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Grenada,2020
2021,GD,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Grenada,2020
2022,GD,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Grenada,2020
2023,GD,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Grenada,2020
1980,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1981,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1982,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1983,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1984,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1985,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1986,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1987,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1988,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1989,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1980
1990,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1991,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1992,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1993,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1994,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1995,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1996,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,1990
1997,GE,0,0.0019,0.1327,0.4654,0.1868,Asia,West Asia,Georgia,1990
1998,GE,0,0.0019,0.1262,0.5037,0.2558,Asia,West Asia,Georgia,1990
1999,GE,0,0.002,0.1336,0.4704,0.1965,Asia,West Asia,Georgia,1990
2000,GE,0,0.002,0.1332,0.4736,0.1994,Asia,West Asia,Georgia,2000
2001,GE,0,0.0021,0.1359,0.4745,0.2049,Asia,West Asia,Georgia,2000
2002,GE,0,0.0023,0.146,0.4502,0.1803,Asia,West Asia,Georgia,2000
2003,GE,0,0.0023,0.1474,0.4404,0.174,Asia,West Asia,Georgia,2000
2004,GE,0,0.0023,0.1493,0.437,0.1718,Asia,West Asia,Georgia,2000
2005,GE,0,0.0022,0.1429,0.4517,0.188,Asia,West Asia,Georgia,2000
2006,GE,0,0.0022,0.1431,0.4505,0.182,Asia,West Asia,Georgia,2000
2007,GE,0,0.0021,0.1356,0.4721,0.2046,Asia,West Asia,Georgia,2000
2008,GE,0,0.0021,0.1379,0.4653,0.194,Asia,West Asia,Georgia,2000
2009,GE,0,0.0023,0.148,0.4475,0.1807,Asia,West Asia,Georgia,2000
2010,GE,0,0.0021,0.1419,0.4551,0.1816,Asia,West Asia,Georgia,2010
2011,GE,0,0.0019,0.1276,0.4940000000000001,0.2345,Asia,West Asia,Georgia,2010
2012,GE,0,0.0023,0.1432,0.4611,0.1965,Asia,West Asia,Georgia,2010
2013,GE,0,0.0019,0.1262,0.4945000000000001,0.1992,Asia,West Asia,Georgia,2010
2014,GE,0,0.0025,0.1473,0.4669,0.2173,Asia,West Asia,Georgia,2010
2015,GE,0,0.0024,0.1447,0.4684,0.206,Asia,West Asia,Georgia,2010
2016,GE,0,0.0022,0.1377,0.4823,0.2375,Asia,West Asia,Georgia,2010
2017,GE,0,0.0022,0.1371,0.4886,0.2473,Asia,West Asia,Georgia,2010
2018,GE,0,0.0023,0.1382,0.484,0.2204,Asia,West Asia,Georgia,2010
2019,GE,0,0.0023,0.139,0.4903,0.2111,Asia,West Asia,Georgia,2010
2020,GE,0,0.0023,0.139,0.4903,0.2111,Asia,West Asia,Georgia,2020
2021,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,2020
2022,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,2020
2023,GE,0,0.0022,0.145,0.4503,0.1853,Asia,West Asia,Georgia,2020
1980,GG,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Guernsey,1980
1981,GG,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Guernsey,1980
1982,GG,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Guernsey,1980
1983,GG,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Guernsey,1980
1984,GG,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Guernsey,1980
1985,GG,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Guernsey,1980
1986,GG,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Guernsey,1980
1987,GG,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Guernsey,1980
1988,GG,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Guernsey,1980
1989,GG,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Guernsey,1980
1990,GG,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Guernsey,1990
1991,GG,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Guernsey,1990
1992,GG,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Guernsey,1990
1993,GG,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Guernsey,1990
1994,GG,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Guernsey,1990
1995,GG,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Guernsey,1990
1996,GG,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Guernsey,1990
1997,GG,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Guernsey,1990
1998,GG,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Guernsey,1990
1999,GG,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Guernsey,1990
2000,GG,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Guernsey,2000
2001,GG,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Guernsey,2000
2002,GG,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Guernsey,2000
2003,GG,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Guernsey,2000
2004,GG,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Guernsey,2000
2005,GG,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Guernsey,2000
2006,GG,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Guernsey,2000
2007,GG,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Guernsey,2000
2008,GG,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Guernsey,2000
2009,GG,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Guernsey,2000
2010,GG,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Guernsey,2010
2011,GG,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Guernsey,2010
2012,GG,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Guernsey,2010
2013,GG,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Guernsey,2010
2014,GG,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Guernsey,2010
2015,GG,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Guernsey,2010
2016,GG,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Guernsey,2010
2017,GG,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Guernsey,2010
2018,GG,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Guernsey,2010
2019,GG,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Guernsey,2010
2020,GG,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Guernsey,2020
2021,GG,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Guernsey,2020
2022,GG,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Guernsey,2020
2023,GG,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Guernsey,2020
1980,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1981,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1982,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1983,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1984,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1985,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1986,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1987,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1988,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1989,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1980
1990,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1990
1991,GH,0,0.0023,0.1409,0.4701,0.1379,Africa,West Africa,Ghana,1990
1992,GH,0,0.0022,0.14,0.4682,0.1355,Africa,West Africa,Ghana,1990
1993,GH,0,0.0022,0.139,0.4663,0.1332,Africa,West Africa,Ghana,1990
1994,GH,0,0.0022,0.138,0.4644,0.1309,Africa,West Africa,Ghana,1990
1995,GH,0,0.0021,0.1371,0.4625,0.1286,Africa,West Africa,Ghana,1990
1996,GH,0,0.0021,0.1361,0.4605,0.1263,Africa,West Africa,Ghana,1990
1997,GH,0,0.0021,0.1351,0.4586,0.124,Africa,West Africa,Ghana,1990
1998,GH,0,0.002,0.1342,0.4567,0.1216,Africa,West Africa,Ghana,1990
1999,GH,0,0.002,0.1328,0.4627,0.1269,Africa,West Africa,Ghana,1990
2000,GH,0,0.002,0.1314,0.4686,0.1321,Africa,West Africa,Ghana,2000
2001,GH,0,0.002,0.13,0.4745,0.1374,Africa,West Africa,Ghana,2000
2002,GH,0,0.0019,0.1286,0.4804,0.1426,Africa,West Africa,Ghana,2000
2003,GH,0,0.0019,0.1272,0.4863,0.1478,Africa,West Africa,Ghana,2000
2004,GH,0,0.0019,0.1258,0.4923,0.1531,Africa,West Africa,Ghana,2000
2005,GH,0,0.0019,0.1244,0.4982,0.1583,Africa,West Africa,Ghana,2000
2006,GH,0,0.0019,0.1245,0.4961,0.1562,Africa,West Africa,Ghana,2000
2007,GH,0,0.0019,0.1246,0.4941,0.1542,Africa,West Africa,Ghana,2000
2008,GH,0,0.0019,0.1247,0.492,0.1521,Africa,West Africa,Ghana,2000
2009,GH,0,0.0019,0.1248,0.49,0.1501,Africa,West Africa,Ghana,2000
2010,GH,0,0.0019,0.1248,0.488,0.148,Africa,West Africa,Ghana,2010
2011,GH,0,0.0019,0.1249,0.4859,0.146,Africa,West Africa,Ghana,2010
2012,GH,0,0.0019,0.125,0.4839,0.1439,Africa,West Africa,Ghana,2010
2013,GH,0,0.0019,0.1243,0.4851,0.1459,Africa,West Africa,Ghana,2010
2014,GH,0,0.0018,0.1236,0.4863,0.1479,Africa,West Africa,Ghana,2010
2015,GH,0,0.0018,0.1229,0.4875,0.1499,Africa,West Africa,Ghana,2010
2016,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2010
2017,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2010
2018,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2010
2019,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2010
2020,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2020
2021,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2020
2022,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2020
2023,GH,0,0.0017,0.1222,0.4887,0.1519,Africa,West Africa,Ghana,2020
1980,GI,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Gibraltar,1980
1981,GI,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Gibraltar,1980
1982,GI,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Gibraltar,1980
1983,GI,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Gibraltar,1980
1984,GI,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Gibraltar,1980
1985,GI,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Gibraltar,1980
1986,GI,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Gibraltar,1980
1987,GI,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Gibraltar,1980
1988,GI,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Gibraltar,1980
1989,GI,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Gibraltar,1980
1990,GI,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Gibraltar,1990
1991,GI,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Gibraltar,1990
1992,GI,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Gibraltar,1990
1993,GI,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Gibraltar,1990
1994,GI,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Gibraltar,1990
1995,GI,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Gibraltar,1990
1996,GI,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Gibraltar,1990
1997,GI,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Gibraltar,1990
1998,GI,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Gibraltar,1990
1999,GI,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Gibraltar,1990
2000,GI,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Gibraltar,2000
2001,GI,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Gibraltar,2000
2002,GI,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Gibraltar,2000
2003,GI,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Gibraltar,2000
2004,GI,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Gibraltar,2000
2005,GI,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Gibraltar,2000
2006,GI,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Gibraltar,2000
2007,GI,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Gibraltar,2000
2008,GI,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Gibraltar,2000
2009,GI,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Gibraltar,2000
2010,GI,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Gibraltar,2010
2011,GI,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Gibraltar,2010
2012,GI,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Gibraltar,2010
2013,GI,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Gibraltar,2010
2014,GI,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Gibraltar,2010
2015,GI,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Gibraltar,2010
2016,GI,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Gibraltar,2010
2017,GI,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Gibraltar,2010
2018,GI,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Gibraltar,2010
2019,GI,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Gibraltar,2010
2020,GI,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Gibraltar,2020
2021,GI,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Gibraltar,2020
2022,GI,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Gibraltar,2020
2023,GI,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Gibraltar,2020
1980,GL,0,0.0028,0.2121,0.3534,0.0885,Americas,North America,Greenland,1980
1981,GL,0,0.0027,0.2117,0.3543,0.09,Americas,North America,Greenland,1980
1982,GL,0,0.0027,0.2113,0.3553,0.0914,Americas,North America,Greenland,1980
1983,GL,0,0.0027,0.2108,0.3562,0.0929,Americas,North America,Greenland,1980
1984,GL,0,0.0027,0.2104,0.3572,0.0944,Americas,North America,Greenland,1980
1985,GL,0,0.0027,0.21,0.3581,0.096,Americas,North America,Greenland,1980
1986,GL,0,0.0027,0.2095,0.3591,0.0976,Americas,North America,Greenland,1980
1987,GL,0,0.0027,0.209,0.3602,0.0992,Americas,North America,Greenland,1980
1988,GL,0,0.0027,0.2086,0.3612,0.1008,Americas,North America,Greenland,1980
1989,GL,0,0.0027,0.2081,0.3623,0.1025,Americas,North America,Greenland,1980
1990,GL,0,0.0027,0.2076,0.3634,0.1042,Americas,North America,Greenland,1990
1991,GL,0,0.0027,0.2075,0.3665,0.107,Americas,North America,Greenland,1990
1992,GL,0,0.0027,0.2075,0.3695,0.1096,Americas,North America,Greenland,1990
1993,GL,0,0.0027,0.2075,0.3725,0.1122,Americas,North America,Greenland,1990
1994,GL,0,0.0027,0.2074,0.3753,0.1147,Americas,North America,Greenland,1990
1995,GL,0,0.0027,0.2074,0.3781,0.1172,Americas,North America,Greenland,1990
1996,GL,0,0.0027,0.2073,0.3808,0.1195,Americas,North America,Greenland,1990
1997,GL,0,0.0027,0.2073,0.3834,0.1218,Americas,North America,Greenland,1990
1998,GL,0,0.0027,0.2073,0.3859,0.124,Americas,North America,Greenland,1990
1999,GL,0,0.0027,0.2072,0.3883,0.1261,Americas,North America,Greenland,1990
2000,GL,0,0.0027,0.2072,0.3907,0.1282,Americas,North America,Greenland,2000
2001,GL,0,0.0026,0.2027,0.3995,0.132,Americas,North America,Greenland,2000
2002,GL,0,0.0026,0.1983,0.408,0.1358,Americas,North America,Greenland,2000
2003,GL,0,0.0025,0.194,0.4164,0.1394,Americas,North America,Greenland,2000
2004,GL,0,0.0025,0.1898,0.4246,0.1429,Americas,North America,Greenland,2000
2005,GL,0,0.0024,0.1857,0.4326,0.1464,Americas,North America,Greenland,2000
2006,GL,0,0.0023,0.1817,0.4404,0.1498,Americas,North America,Greenland,2000
2007,GL,0,0.0023,0.1778,0.448,0.1531,Americas,North America,Greenland,2000
2008,GL,0,0.0022,0.1739,0.4554,0.1564,Americas,North America,Greenland,2000
2009,GL,0,0.0022,0.1702,0.4627,0.1595,Americas,North America,Greenland,2000
2010,GL,0,0.0021,0.1665,0.4699,0.1626,Americas,North America,Greenland,2010
2011,GL,0,0.0021,0.1655,0.4718,0.1624,Americas,North America,Greenland,2010
2012,GL,0,0.0021,0.1645,0.4737,0.1622,Americas,North America,Greenland,2010
2013,GL,0,0.0021,0.1636,0.4754,0.162,Americas,North America,Greenland,2010
2014,GL,0,0.0021,0.1627,0.4771,0.1618,Americas,North America,Greenland,2010
2015,GL,0,0.0021,0.1619,0.4788,0.1617,Americas,North America,Greenland,2010
2016,GL,0,0.0021,0.1611,0.4803,0.1615,Americas,North America,Greenland,2010
2017,GL,0,0.002,0.1603,0.4818,0.1613,Americas,North America,Greenland,2010
2018,GL,0,0.002,0.1596,0.4832,0.1612,Americas,North America,Greenland,2010
2019,GL,0,0.002,0.1589,0.4846,0.161,Americas,North America,Greenland,2010
2020,GL,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Greenland,2020
2021,GL,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Greenland,2020
2022,GL,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Greenland,2020
2023,GL,0,0.002,0.1582,0.4859,0.1609,Americas,North America,Greenland,2020
1980,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1981,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1982,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1983,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1984,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1985,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1986,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1987,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1988,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1989,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1980
1990,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1991,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1992,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1993,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1994,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1995,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1996,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1997,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1998,GM,0,0.0015,0.1022,0.5521,0.186,Africa,West Africa,Gambia,1990
1999,GM,0,0.0015,0.1027,0.5508000000000001,0.1894,Africa,West Africa,Gambia,1990
2000,GM,0,0.0015,0.1033,0.5496,0.1928,Africa,West Africa,Gambia,2000
2001,GM,0,0.0016,0.1038,0.5483,0.1962,Africa,West Africa,Gambia,2000
2002,GM,0,0.0016,0.1044,0.547,0.1997,Africa,West Africa,Gambia,2000
2003,GM,0,0.0016,0.1049,0.5457000000000001,0.2031,Africa,West Africa,Gambia,2000
2004,GM,0,0.0016,0.1069,0.5441,0.2045,Africa,West Africa,Gambia,2000
2005,GM,0,0.0017,0.109,0.5425,0.206,Africa,West Africa,Gambia,2000
2006,GM,0,0.0017,0.111,0.5409,0.2075,Africa,West Africa,Gambia,2000
2007,GM,0,0.0017,0.113,0.5393,0.2089,Africa,West Africa,Gambia,2000
2008,GM,0,0.0018,0.115,0.5377000000000001,0.2104,Africa,West Africa,Gambia,2000
2009,GM,0,0.0018,0.117,0.5361,0.2119,Africa,West Africa,Gambia,2000
2010,GM,0,0.0018,0.119,0.5346000000000001,0.2133,Africa,West Africa,Gambia,2010
2011,GM,0,0.002,0.1252,0.5194,0.1979,Africa,West Africa,Gambia,2010
2012,GM,0,0.0021,0.1315,0.5042,0.1824,Africa,West Africa,Gambia,2010
2013,GM,0,0.0022,0.1377,0.489,0.1669,Africa,West Africa,Gambia,2010
2014,GM,0,0.0024,0.144,0.4737,0.1514,Africa,West Africa,Gambia,2010
2015,GM,0,0.0025,0.1503,0.4585,0.1358,Africa,West Africa,Gambia,2010
2016,GM,0,0.0024,0.1481,0.4625,0.1405,Africa,West Africa,Gambia,2010
2017,GM,0,0.0024,0.1459,0.4666,0.1451,Africa,West Africa,Gambia,2010
2018,GM,0,0.0023,0.1436,0.4707,0.1497,Africa,West Africa,Gambia,2010
2019,GM,0,0.0023,0.1414,0.4747,0.1543,Africa,West Africa,Gambia,2010
2020,GM,0,0.0022,0.1392,0.4788,0.159,Africa,West Africa,Gambia,2020
2021,GM,0,0.0022,0.1392,0.4788,0.159,Africa,West Africa,Gambia,2020
2022,GM,0,0.0022,0.1392,0.4788,0.159,Africa,West Africa,Gambia,2020
2023,GM,0,0.0022,0.1392,0.4788,0.159,Africa,West Africa,Gambia,2020
1980,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1981,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1982,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1983,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1984,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1985,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1986,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1987,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1988,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1989,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1980
1990,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1990
1991,GN,0,0.0014,0.1093,0.4654,0.0973,Africa,West Africa,Guinea,1990
1992,GN,0,0.0015,0.1088,0.4899,0.1271,Africa,West Africa,Guinea,1990
1993,GN,0,0.0016,0.1083,0.5144000000000001,0.157,Africa,West Africa,Guinea,1990
1994,GN,0,0.0017,0.1078,0.5391,0.187,Africa,West Africa,Guinea,1990
1995,GN,0,0.0017,0.1094,0.5366000000000001,0.1868,Africa,West Africa,Guinea,1990
1996,GN,0,0.0017,0.111,0.5341,0.1866,Africa,West Africa,Guinea,1990
1997,GN,0,0.0017,0.1126,0.5316000000000001,0.1864,Africa,West Africa,Guinea,1990
1998,GN,0,0.0018,0.1142,0.529,0.1862,Africa,West Africa,Guinea,1990
1999,GN,0,0.0018,0.1158,0.5265000000000001,0.1859,Africa,West Africa,Guinea,1990
2000,GN,0,0.0018,0.1174,0.524,0.1857,Africa,West Africa,Guinea,2000
2001,GN,0,0.0019,0.119,0.5215000000000001,0.1855,Africa,West Africa,Guinea,2000
2002,GN,0,0.0019,0.1205,0.519,0.1853,Africa,West Africa,Guinea,2000
2003,GN,0,0.0019,0.1239,0.5084000000000001,0.1746,Africa,West Africa,Guinea,2000
2004,GN,0,0.002,0.1273,0.4977,0.1638,Africa,West Africa,Guinea,2000
2005,GN,0,0.0021,0.1307,0.487,0.1531,Africa,West Africa,Guinea,2000
2006,GN,0,0.0021,0.134,0.4763,0.1423,Africa,West Africa,Guinea,2000
2007,GN,0,0.0022,0.1374,0.4657,0.1316,Africa,West Africa,Guinea,2000
2008,GN,0,0.0023,0.1423,0.4579,0.1303,Africa,West Africa,Guinea,2000
2009,GN,0,0.0024,0.1472,0.4502,0.1291,Africa,West Africa,Guinea,2000
2010,GN,0,0.0025,0.1521,0.4424,0.1279,Africa,West Africa,Guinea,2010
2011,GN,0,0.0026,0.157,0.4346,0.1266,Africa,West Africa,Guinea,2010
2012,GN,0,0.0026,0.1619,0.4269,0.1254,Africa,West Africa,Guinea,2010
2013,GN,0,0.0027,0.1653,0.4189,0.119,Africa,West Africa,Guinea,2010
2014,GN,0,0.0028,0.1686,0.411,0.1126,Africa,West Africa,Guinea,2010
2015,GN,0,0.0028,0.172,0.403,0.1063,Africa,West Africa,Guinea,2010
2016,GN,0,0.0029,0.1753,0.395,0.0999,Africa,West Africa,Guinea,2010
2017,GN,0,0.003,0.1787,0.387,0.0935,Africa,West Africa,Guinea,2010
2018,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2010
2019,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2010
2020,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2020
2021,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2020
2022,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2020
2023,GN,0,0.003,0.182,0.379,0.0871,Africa,West Africa,Guinea,2020
1980,GQ,0,0.0018,0.1153,0.5218,0.1673,Africa,Middle Africa,Equatorial Guinea,1980
1981,GQ,0,0.0018,0.1152,0.522,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1982,GQ,0,0.0018,0.1153,0.5219,0.1674,Africa,Middle Africa,Equatorial Guinea,1980
1983,GQ,0,0.0018,0.1153,0.5217,0.1674,Africa,Middle Africa,Equatorial Guinea,1980
1984,GQ,0,0.0018,0.1153,0.5218,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1985,GQ,0,0.0018,0.1153,0.5219,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1986,GQ,0,0.0018,0.1153,0.5219,0.1676,Africa,Middle Africa,Equatorial Guinea,1980
1987,GQ,0,0.0018,0.1153,0.5218,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1988,GQ,0,0.0018,0.1154,0.5217,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1989,GQ,0,0.0018,0.1154,0.5216000000000001,0.1675,Africa,Middle Africa,Equatorial Guinea,1980
1990,GQ,0,0.0018,0.1154,0.5216000000000001,0.1675,Africa,Middle Africa,Equatorial Guinea,1990
1991,GQ,0,0.0018,0.1154,0.5215000000000001,0.1674,Africa,Middle Africa,Equatorial Guinea,1990
1992,GQ,0,0.0018,0.1154,0.5215000000000001,0.1674,Africa,Middle Africa,Equatorial Guinea,1990
1993,GQ,0,0.0018,0.1155,0.5215000000000001,0.1676,Africa,Middle Africa,Equatorial Guinea,1990
1994,GQ,0,0.0018,0.1156,0.5212,0.1675,Africa,Middle Africa,Equatorial Guinea,1990
1995,GQ,0,0.0018,0.1158,0.5208,0.1675,Africa,Middle Africa,Equatorial Guinea,1990
1996,GQ,0,0.0018,0.1158,0.5211,0.1679,Africa,Middle Africa,Equatorial Guinea,1990
1997,GQ,0,0.0018,0.1159,0.5208,0.1687,Africa,Middle Africa,Equatorial Guinea,1990
1998,GQ,0,0.0018,0.1162,0.5203,0.1694,Africa,Middle Africa,Equatorial Guinea,1990
1999,GQ,0,0.0018,0.1165,0.5196000000000001,0.1699,Africa,Middle Africa,Equatorial Guinea,1990
2000,GQ,0,0.0018,0.1167,0.5189,0.1704,Africa,Middle Africa,Equatorial Guinea,2000
2001,GQ,0,0.0018,0.1177,0.5164,0.1695,Africa,Middle Africa,Equatorial Guinea,2000
2002,GQ,0,0.0018,0.1183,0.5142,0.1674,Africa,Middle Africa,Equatorial Guinea,2000
2003,GQ,0,0.0018,0.1188,0.512,0.1653,Africa,Middle Africa,Equatorial Guinea,2000
2004,GQ,0,0.0018,0.1193,0.5099,0.1633,Africa,Middle Africa,Equatorial Guinea,2000
2005,GQ,0,0.0018,0.1199,0.5075000000000001,0.1614,Africa,Middle Africa,Equatorial Guinea,2000
2006,GQ,0,0.0018,0.1205,0.5051,0.1596,Africa,Middle Africa,Equatorial Guinea,2000
2007,GQ,0,0.0019,0.1211,0.5026,0.1577,Africa,Middle Africa,Equatorial Guinea,2000
2008,GQ,0,0.0019,0.1215,0.5009,0.1567,Africa,Middle Africa,Equatorial Guinea,2000
2009,GQ,0,0.0018,0.1207,0.5022,0.1585,Africa,Middle Africa,Equatorial Guinea,2000
2010,GQ,0,0.0018,0.12,0.5036,0.1603,Africa,Middle Africa,Equatorial Guinea,2010
2011,GQ,0,0.0018,0.1192,0.5049,0.1621,Africa,Middle Africa,Equatorial Guinea,2010
2012,GQ,0,0.0018,0.1188,0.5057,0.1634,Africa,Middle Africa,Equatorial Guinea,2010
2013,GQ,0,0.0018,0.1177,0.5099,0.1674,Africa,Middle Africa,Equatorial Guinea,2010
2014,GQ,0,0.0018,0.1166,0.5141,0.1715,Africa,Middle Africa,Equatorial Guinea,2010
2015,GQ,0,0.0017,0.1161,0.5171,0.1751,Africa,Middle Africa,Equatorial Guinea,2010
2016,GQ,0,0.0017,0.1156,0.5201,0.1788,Africa,Middle Africa,Equatorial Guinea,2010
2017,GQ,0,0.0017,0.1151,0.5232,0.1825,Africa,Middle Africa,Equatorial Guinea,2010
2018,GQ,0,0.0017,0.1146,0.5264,0.1863,Africa,Middle Africa,Equatorial Guinea,2010
2019,GQ,0,0.0017,0.1144,0.5282,0.1883,Africa,Middle Africa,Equatorial Guinea,2010
2020,GQ,0,0.0017,0.1143,0.5301,0.1903,Africa,Middle Africa,Equatorial Guinea,2020
2021,GQ,0,0.0017,0.1148,0.5288,0.1893,Africa,Middle Africa,Equatorial Guinea,2020
2022,GQ,0,0.0017,0.1149,0.5287000000000001,0.1892,Africa,Middle Africa,Equatorial Guinea,2020
2023,GQ,0,0.0017,0.1149,0.5287000000000001,0.1892,Africa,Middle Africa,Equatorial Guinea,2020
1980,GR,0,0.0033,0.1865,0.3626,0.0995,Europe,Western Europe,Greece,1980
1981,GR,0,0.0032,0.1792,0.3748,0.1009,Europe,Western Europe,Greece,1980
1982,GR,0,0.0033,0.1848,0.3656,0.0959,Europe,Western Europe,Greece,1980
1983,GR,0,0.0034,0.1907,0.3565,0.0893,Europe,Western Europe,Greece,1980
1984,GR,0,0.0034,0.1922,0.35,0.0893,Europe,Western Europe,Greece,1980
1985,GR,0,0.0033,0.1872,0.3554,0.0926,Europe,Western Europe,Greece,1980
1986,GR,0,0.0034,0.1924,0.3363,0.0927,Europe,Western Europe,Greece,1980
1987,GR,0,0.0034,0.1974,0.3327,0.0905,Europe,Western Europe,Greece,1980
1988,GR,0,0.0034,0.1965,0.3308,0.0915,Europe,Western Europe,Greece,1980
1989,GR,0,0.0035,0.2026,0.326,0.0907,Europe,Western Europe,Greece,1980
1990,GR,0,0.0035,0.199,0.3333,0.0917,Europe,Western Europe,Greece,1990
1991,GR,0,0.0034,0.1964,0.3324,0.094,Europe,Western Europe,Greece,1990
1992,GR,0,0.0034,0.1979,0.3303,0.092,Europe,Western Europe,Greece,1990
1993,GR,0,0.0032,0.1876,0.3403,0.094,Europe,Western Europe,Greece,1990
1994,GR,0,0.0008,0.1688,0.3509,0.0962,Europe,Western Europe,Greece,1990
1995,GR,0,0.0011,0.1712,0.3534,0.097,Europe,Western Europe,Greece,1990
1996,GR,0,0.0014,0.1709,0.3598,0.1001,Europe,Western Europe,Greece,1990
1997,GR,0,0.0008,0.1603,0.3784,0.1148,Europe,Western Europe,Greece,1990
1998,GR,0,0.0009,0.1569,0.387,0.1215,Europe,Western Europe,Greece,1990
1999,GR,0,0.0012,0.1571,0.3956,0.1286,Europe,Western Europe,Greece,1990
2000,GR,0,0.0011,0.1507,0.403,0.1256,Europe,Western Europe,Greece,2000
2001,GR,0,0.001,0.1538,0.3981,0.1232,Europe,Western Europe,Greece,2000
2002,GR,0,0.001,0.1644,0.3788,0.1094,Europe,Western Europe,Greece,2000
2003,GR,0,0.0022,0.1788,0.3625,0.1074,Europe,Western Europe,Greece,2000
2004,GR,0,0.0023,0.1748,0.3711,0.1142,Europe,Western Europe,Greece,2000
2005,GR,0,0.0019,0.1744,0.3746,0.114,Europe,Western Europe,Greece,2000
2006,GR,0,0.0029,0.1801,0.3663,0.1136,Europe,Western Europe,Greece,2000
2007,GR,0,0.003,0.186,0.3554,0.1066,Europe,Western Europe,Greece,2000
2008,GR,0,0.0032,0.1991,0.3301,0.0879,Europe,Western Europe,Greece,2000
2009,GR,0,0.0033,0.2019,0.3239,0.0835,Europe,Western Europe,Greece,2000
2010,GR,0,0.0021,0.1939,0.3373,0.088,Europe,Western Europe,Greece,2010
2011,GR,0,0.0011,0.1963,0.3142,0.0728,Europe,Western Europe,Greece,2010
2012,GR,0,0.0012,0.196,0.3173,0.0782,Europe,Western Europe,Greece,2010
2013,GR,0,0.0018,0.1975,0.3331,0.0996,Europe,Western Europe,Greece,2010
2014,GR,0,0.0009,0.1862,0.3569,0.1246,Europe,Western Europe,Greece,2010
2015,GR,0,0.0009,0.1873,0.3541,0.1225,Europe,Western Europe,Greece,2010
2016,GR,0,0.0011,0.1944,0.3422,0.1123,Europe,Western Europe,Greece,2010
2017,GR,0,0.0015,0.2006,0.339,0.1098,Europe,Western Europe,Greece,2010
2018,GR,0,0.002,0.2091,0.3294,0.1107,Europe,Western Europe,Greece,2010
2019,GR,0,0.002,0.2111,0.3242,0.1109,Europe,Western Europe,Greece,2010
2020,GR,0,0.0023,0.2131,0.3219,0.1094,Europe,Western Europe,Greece,2020
2021,GR,0,0.0023,0.2147,0.3279,0.1194,Europe,Western Europe,Greece,2020
2022,GR,0,0.0021,0.2069,0.3494,0.1417,Europe,Western Europe,Greece,2020
2023,GR,0,0.0021,0.2067,0.3503,0.1427,Europe,Western Europe,Greece,2020
1980,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1981,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1982,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1983,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1984,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1985,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1986,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1987,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1988,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1989,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1980
1990,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1991,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1992,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1993,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1994,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1995,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1996,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1997,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1998,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
1999,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,1990
2000,GT,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Guatemala,2000
2001,GT,0,0.0001,0.0805,0.5636,0.1984,Americas,Central America,Guatemala,2000
2002,GT,0,0,0.0809,0.5626,0.1928,Americas,Central America,Guatemala,2000
2003,GT,0,0,0.0854,0.5605,0.2043,Americas,Central America,Guatemala,2000
2004,GT,0,0.0001,0.0878,0.556,0.1999,Americas,Central America,Guatemala,2000
2005,GT,0,0.0001,0.087,0.5555,0.193,Americas,Central America,Guatemala,2000
2006,GT,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Central America,Guatemala,2000
2007,GT,0,0.0002,0.0888,0.5641,0.211,Americas,Central America,Guatemala,2000
2008,GT,0,0.0003,0.0903,0.56,0.2029,Americas,Central America,Guatemala,2000
2009,GT,0,0.0004,0.0926,0.5486,0.1928,Americas,Central America,Guatemala,2000
2010,GT,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Central America,Guatemala,2010
2011,GT,0,0.0005,0.0976,0.541,0.1982,Americas,Central America,Guatemala,2010
2012,GT,0,0.0005,0.1001,0.5332,0.197,Americas,Central America,Guatemala,2010
2013,GT,0,0.0006,0.1006,0.5404,0.2057,Americas,Central America,Guatemala,2010
2014,GT,0,0.0005,0.1026,0.5304,0.2046,Americas,Central America,Guatemala,2010
2015,GT,0,0.0005,0.1032,0.5312,0.1942,Americas,Central America,Guatemala,2010
2016,GT,0,0.0004,0.1034,0.5334,0.1984,Americas,Central America,Guatemala,2010
2017,GT,0,0.0003,0.1031,0.5311,0.1884,Americas,Central America,Guatemala,2010
2018,GT,0,0.0003,0.1016,0.5354,0.1976,Americas,Central America,Guatemala,2010
2019,GT,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Central America,Guatemala,2010
2020,GT,0,0.0001,0.0872,0.5466,0.2043,Americas,Central America,Guatemala,2020
2021,GT,0,0.0001,0.0972,0.5299,0.1892,Americas,Central America,Guatemala,2020
2022,GT,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Guatemala,2020
2023,GT,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Guatemala,2020
1980,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1981,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1982,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1983,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1984,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1985,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1986,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1987,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1988,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1989,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1980
1990,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1990
1991,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1990
1992,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1990
1993,GW,0,0.0018,0.1176,0.5245000000000001,0.1963,Africa,West Africa,Guinea-Bissau,1990
1994,GW,0,0.0019,0.1215,0.516,0.1902,Africa,West Africa,Guinea-Bissau,1990
1995,GW,0,0.002,0.1254,0.5075000000000001,0.1841,Africa,West Africa,Guinea-Bissau,1990
1996,GW,0,0.002,0.1294,0.4991,0.1779,Africa,West Africa,Guinea-Bissau,1990
1997,GW,0,0.0021,0.1333,0.4906,0.1718,Africa,West Africa,Guinea-Bissau,1990
1998,GW,0,0.0022,0.1373,0.4821,0.1656,Africa,West Africa,Guinea-Bissau,1990
1999,GW,0,0.0023,0.1412,0.4736,0.1595,Africa,West Africa,Guinea-Bissau,1990
2000,GW,0,0.0023,0.1452,0.4651,0.1533,Africa,West Africa,Guinea-Bissau,2000
2001,GW,0,0.0024,0.1492,0.4566,0.1471,Africa,West Africa,Guinea-Bissau,2000
2002,GW,0,0.0025,0.1531,0.4481,0.141,Africa,West Africa,Guinea-Bissau,2000
2003,GW,0,0.0025,0.1532,0.4477,0.1401,Africa,West Africa,Guinea-Bissau,2000
2004,GW,0,0.0025,0.1532,0.4474,0.1393,Africa,West Africa,Guinea-Bissau,2000
2005,GW,0,0.0025,0.1533,0.447,0.1384,Africa,West Africa,Guinea-Bissau,2000
2006,GW,0,0.0025,0.1533,0.4466,0.1376,Africa,West Africa,Guinea-Bissau,2000
2007,GW,0,0.0025,0.1534,0.4462,0.1367,Africa,West Africa,Guinea-Bissau,2000
2008,GW,0,0.0025,0.1535,0.4459,0.1359,Africa,West Africa,Guinea-Bissau,2000
2009,GW,0,0.0025,0.1535,0.4455,0.135,Africa,West Africa,Guinea-Bissau,2000
2010,GW,0,0.0025,0.1536,0.4451,0.1342,Africa,West Africa,Guinea-Bissau,2010
2011,GW,0,0.0025,0.1536,0.4448,0.1333,Africa,West Africa,Guinea-Bissau,2010
2012,GW,0,0.0025,0.1537,0.4444,0.1325,Africa,West Africa,Guinea-Bissau,2010
2013,GW,0,0.0025,0.1537,0.444,0.1316,Africa,West Africa,Guinea-Bissau,2010
2014,GW,0,0.0025,0.1538,0.4437,0.1308,Africa,West Africa,Guinea-Bissau,2010
2015,GW,0,0.0025,0.1538,0.4433,0.1299,Africa,West Africa,Guinea-Bissau,2010
2016,GW,0,0.0025,0.1539,0.4429,0.129,Africa,West Africa,Guinea-Bissau,2010
2017,GW,0,0.0025,0.1539,0.4426,0.1282,Africa,West Africa,Guinea-Bissau,2010
2018,GW,0,0.0025,0.154,0.4422,0.1273,Africa,West Africa,Guinea-Bissau,2010
2019,GW,0,0.0026,0.1562,0.4351,0.1217,Africa,West Africa,Guinea-Bissau,2010
2020,GW,0,0.0026,0.1583,0.428,0.116,Africa,West Africa,Guinea-Bissau,2020
2021,GW,0,0.0026,0.1605,0.4209,0.1103,Africa,West Africa,Guinea-Bissau,2020
2022,GW,0,0.0026,0.1605,0.4209,0.1103,Africa,West Africa,Guinea-Bissau,2020
2023,GW,0,0.0026,0.1605,0.4209,0.1103,Africa,West Africa,Guinea-Bissau,2020
1980,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1981,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1982,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1983,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1984,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1985,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1986,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1987,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1988,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1989,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1980
1990,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1991,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1992,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1993,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1994,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1995,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1996,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1997,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1998,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
1999,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,1990
2000,GY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Guyana,2000
2001,GY,0,0.0001,0.0805,0.5636,0.1984,Americas,South America,Guyana,2000
2002,GY,0,0,0.0809,0.5626,0.1928,Americas,South America,Guyana,2000
2003,GY,0,0,0.0854,0.5605,0.2043,Americas,South America,Guyana,2000
2004,GY,0,0.0001,0.0878,0.556,0.1999,Americas,South America,Guyana,2000
2005,GY,0,0.0001,0.087,0.5555,0.193,Americas,South America,Guyana,2000
2006,GY,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,South America,Guyana,2000
2007,GY,0,0.0002,0.0888,0.5641,0.211,Americas,South America,Guyana,2000
2008,GY,0,0.0003,0.0903,0.56,0.2029,Americas,South America,Guyana,2000
2009,GY,0,0.0004,0.0926,0.5486,0.1928,Americas,South America,Guyana,2000
2010,GY,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,South America,Guyana,2010
2011,GY,0,0.0005,0.0976,0.541,0.1982,Americas,South America,Guyana,2010
2012,GY,0,0.0005,0.1001,0.5332,0.197,Americas,South America,Guyana,2010
2013,GY,0,0.0006,0.1006,0.5404,0.2057,Americas,South America,Guyana,2010
2014,GY,0,0.0005,0.1026,0.5304,0.2046,Americas,South America,Guyana,2010
2015,GY,0,0.0005,0.1032,0.5312,0.1942,Americas,South America,Guyana,2010
2016,GY,0,0.0004,0.1034,0.5334,0.1984,Americas,South America,Guyana,2010
2017,GY,0,0.0003,0.1031,0.5311,0.1884,Americas,South America,Guyana,2010
2018,GY,0,0.0003,0.1016,0.5354,0.1976,Americas,South America,Guyana,2010
2019,GY,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,South America,Guyana,2010
2020,GY,0,0.0001,0.0872,0.5466,0.2043,Americas,South America,Guyana,2020
2021,GY,0,0.0001,0.0972,0.5299,0.1892,Americas,South America,Guyana,2020
2022,GY,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Guyana,2020
2023,GY,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Guyana,2020
1980,HK,0,0.0034,0.1775,0.4197,0.1333,Asia,East Asia,Hong Kong,1980
1981,HK,0,0.0034,0.1775,0.4197,0.1333,Asia,East Asia,Hong Kong,1980
1982,HK,0,0.0034,0.1796,0.4233,0.1379,Asia,East Asia,Hong Kong,1980
1983,HK,0,0.0035,0.1813,0.4263,0.1418,Asia,East Asia,Hong Kong,1980
1984,HK,0,0.0035,0.1828,0.429,0.1452,Asia,East Asia,Hong Kong,1980
1985,HK,0,0.0035,0.1841,0.4312,0.1481,Asia,East Asia,Hong Kong,1980
1986,HK,0,0.0036,0.1852,0.4332,0.1507,Asia,East Asia,Hong Kong,1980
1987,HK,0,0.0033,0.1776,0.4409,0.1563,Asia,East Asia,Hong Kong,1980
1988,HK,0,0.0032,0.1724,0.446,0.1602,Asia,East Asia,Hong Kong,1980
1989,HK,0,0.0031,0.1687,0.4498,0.1629,Asia,East Asia,Hong Kong,1980
1990,HK,0,0.003,0.1658,0.4526,0.165,Asia,East Asia,Hong Kong,1990
1991,HK,0,0.003,0.1636,0.4548,0.1667,Asia,East Asia,Hong Kong,1990
1992,HK,0,0.0029,0.1648,0.4448,0.16,Asia,East Asia,Hong Kong,1990
1993,HK,0,0.0029,0.1658,0.4369,0.1547,Asia,East Asia,Hong Kong,1990
1994,HK,0,0.0029,0.1665,0.4304,0.1504,Asia,East Asia,Hong Kong,1990
1995,HK,0,0.0029,0.1672,0.4251,0.1469,Asia,East Asia,Hong Kong,1990
1996,HK,0,0.0028,0.1677,0.4206,0.1439,Asia,East Asia,Hong Kong,1990
1997,HK,0,0.0027,0.1645,0.4252,0.148,Asia,East Asia,Hong Kong,1990
1998,HK,0,0.0026,0.1615,0.4296,0.1521,Asia,East Asia,Hong Kong,1990
1999,HK,0,0.0026,0.1585,0.4339,0.156,Asia,East Asia,Hong Kong,1990
2000,HK,0,0.0025,0.1556,0.438,0.1598,Asia,East Asia,Hong Kong,2000
2001,HK,0,0.0024,0.1528,0.4421,0.1634,Asia,East Asia,Hong Kong,2000
2002,HK,0,0.0023,0.1474,0.4547,0.1756,Asia,East Asia,Hong Kong,2000
2003,HK,0,0.0022,0.1423,0.4664,0.187,Asia,East Asia,Hong Kong,2000
2004,HK,0,0.0022,0.1375,0.4774,0.1977,Asia,East Asia,Hong Kong,2000
2005,HK,0,0.0021,0.1331,0.4877,0.2077,Asia,East Asia,Hong Kong,2000
2006,HK,0,0.0021,0.1289,0.4974,0.2171,Asia,East Asia,Hong Kong,2000
2007,HK,0,0.002,0.1284,0.4968,0.2136,Asia,East Asia,Hong Kong,2000
2008,HK,0,0.002,0.128,0.4962,0.2103,Asia,East Asia,Hong Kong,2000
2009,HK,0,0.002,0.1276,0.4957,0.2071,Asia,East Asia,Hong Kong,2000
2010,HK,0,0.002,0.1273,0.4952,0.2042,Asia,East Asia,Hong Kong,2010
2011,HK,0,0.002,0.1269,0.4947,0.2014,Asia,East Asia,Hong Kong,2010
2012,HK,0,0.002,0.1289,0.492,0.1965,Asia,East Asia,Hong Kong,2010
2013,HK,0,0.002,0.1307,0.4893,0.1917,Asia,East Asia,Hong Kong,2010
2014,HK,0,0.0021,0.1325,0.4867,0.1872,Asia,East Asia,Hong Kong,2010
2015,HK,0,0.0021,0.1342,0.4842,0.1828,Asia,East Asia,Hong Kong,2010
2016,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2010
2017,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2010
2018,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2010
2019,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2010
2020,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2020
2021,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2020
2022,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2020
2023,HK,0,0.0021,0.1359,0.4818,0.1785,Asia,East Asia,Hong Kong,2020
1980,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1981,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1982,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1983,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1984,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1985,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1986,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1987,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1988,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1989,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1980
1990,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1991,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1992,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1993,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1994,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1995,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1996,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1997,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1998,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
1999,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,1990
2000,HN,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Honduras,2000
2001,HN,0,0.0001,0.0805,0.5636,0.1984,Americas,Central America,Honduras,2000
2002,HN,0,0,0.0809,0.5626,0.1928,Americas,Central America,Honduras,2000
2003,HN,0,0,0.0854,0.5605,0.2043,Americas,Central America,Honduras,2000
2004,HN,0,0.0001,0.0878,0.556,0.1999,Americas,Central America,Honduras,2000
2005,HN,0,0.0001,0.087,0.5555,0.193,Americas,Central America,Honduras,2000
2006,HN,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Central America,Honduras,2000
2007,HN,0,0.0002,0.0888,0.5641,0.211,Americas,Central America,Honduras,2000
2008,HN,0,0.0003,0.0903,0.56,0.2029,Americas,Central America,Honduras,2000
2009,HN,0,0.0004,0.0926,0.5486,0.1928,Americas,Central America,Honduras,2000
2010,HN,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Central America,Honduras,2010
2011,HN,0,0.0005,0.0976,0.541,0.1982,Americas,Central America,Honduras,2010
2012,HN,0,0.0005,0.1001,0.5332,0.197,Americas,Central America,Honduras,2010
2013,HN,0,0.0006,0.1006,0.5404,0.2057,Americas,Central America,Honduras,2010
2014,HN,0,0.0005,0.1026,0.5304,0.2046,Americas,Central America,Honduras,2010
2015,HN,0,0.0005,0.1032,0.5312,0.1942,Americas,Central America,Honduras,2010
2016,HN,0,0.0004,0.1034,0.5334,0.1984,Americas,Central America,Honduras,2010
2017,HN,0,0.0003,0.1031,0.5311,0.1884,Americas,Central America,Honduras,2010
2018,HN,0,0.0003,0.1016,0.5354,0.1976,Americas,Central America,Honduras,2010
2019,HN,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Central America,Honduras,2010
2020,HN,0,0.0001,0.0872,0.5466,0.2043,Americas,Central America,Honduras,2020
2021,HN,0,0.0001,0.0972,0.5299,0.1892,Americas,Central America,Honduras,2020
2022,HN,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Honduras,2020
2023,HN,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Honduras,2020
1980,HR,0,0.0032,0.2069,0.2722,0.0413,Europe,Eastern Europe,Croatia,1980
1981,HR,0,0.0032,0.2069,0.2722,0.0413,Europe,Eastern Europe,Croatia,1980
1982,HR,0,0.0032,0.2069,0.2722,0.0413,Europe,Eastern Europe,Croatia,1980
1983,HR,0,0.0032,0.2069,0.2722,0.0413,Europe,Eastern Europe,Croatia,1980
1984,HR,0,0.0032,0.206,0.2735,0.0415,Europe,Eastern Europe,Croatia,1980
1985,HR,0,0.0032,0.2051,0.2749,0.0417,Europe,Eastern Europe,Croatia,1980
1986,HR,0,0.0031,0.2042,0.2762,0.0419,Europe,Eastern Europe,Croatia,1980
1987,HR,0,0.0033,0.214,0.2617,0.0397,Europe,Eastern Europe,Croatia,1980
1988,HR,0,0.0033,0.2141,0.2614,0.0397,Europe,Eastern Europe,Croatia,1980
1989,HR,0,0.0028,0.1897,0.2969,0.0447,Europe,Eastern Europe,Croatia,1980
1990,HR,0,0.0029,0.1903,0.2999,0.0474,Europe,Eastern Europe,Croatia,1990
1991,HR,0,0.0029,0.1904,0.304,0.0512,Europe,Eastern Europe,Croatia,1990
1992,HR,0,0.0029,0.1903,0.3081,0.0553,Europe,Eastern Europe,Croatia,1990
1993,HR,0,0.0029,0.1901,0.3122,0.0592,Europe,Eastern Europe,Croatia,1990
1994,HR,0,0.0029,0.1899,0.3165,0.0632,Europe,Eastern Europe,Croatia,1990
1995,HR,0,0.0029,0.1898,0.3209,0.0673,Europe,Eastern Europe,Croatia,1990
1996,HR,0,0.0029,0.1893,0.3227,0.0685,Europe,Eastern Europe,Croatia,1990
1997,HR,0,0.0029,0.1881,0.3272,0.0723,Europe,Eastern Europe,Croatia,1990
1998,HR,0,0.0027,0.1836,0.3309,0.0725,Europe,Eastern Europe,Croatia,1990
1999,HR,0,0.0026,0.1792,0.3358,0.0744,Europe,Eastern Europe,Croatia,1990
2000,HR,0,0.0029,0.1895,0.3259,0.0731,Europe,Eastern Europe,Croatia,2000
2001,HR,0,0.0029,0.1896,0.3251,0.0756,Europe,Eastern Europe,Croatia,2000
2002,HR,0,0.003,0.1969,0.3155,0.0773,Europe,Eastern Europe,Croatia,2000
2003,HR,0,0.0031,0.2018,0.3112,0.0758,Europe,Eastern Europe,Croatia,2000
2004,HR,0,0.0031,0.1978,0.3184,0.0797,Europe,Eastern Europe,Croatia,2000
2005,HR,0,0.003,0.1939,0.3273,0.0861,Europe,Eastern Europe,Croatia,2000
2006,HR,0,0.003,0.1955,0.3281,0.0893,Europe,Eastern Europe,Croatia,2000
2007,HR,0,0.0029,0.1898,0.3365,0.094,Europe,Eastern Europe,Croatia,2000
2008,HR,0,0.003,0.1924,0.3332,0.0933,Europe,Eastern Europe,Croatia,2000
2009,HR,0,0.003,0.1925,0.3266,0.0853,Europe,Eastern Europe,Croatia,2000
2010,HR,0,0.003,0.1941,0.3233,0.0863,Europe,Eastern Europe,Croatia,2010
2011,HR,0,0.0029,0.1927,0.3303,0.091,Europe,Eastern Europe,Croatia,2010
2012,HR,0,0.0029,0.1917,0.3294,0.088,Europe,Eastern Europe,Croatia,2010
2013,HR,0,0.0031,0.1991,0.3302,0.0928,Europe,Eastern Europe,Croatia,2010
2014,HR,0,0.003,0.1945,0.3347,0.0945,Europe,Eastern Europe,Croatia,2010
2015,HR,0,0.003,0.196,0.3334,0.098,Europe,Eastern Europe,Croatia,2010
2016,HR,0,0.0031,0.1982,0.3249,0.0893,Europe,Eastern Europe,Croatia,2010
2017,HR,0,0.003,0.196,0.3231,0.0922,Europe,Eastern Europe,Croatia,2010
2018,HR,0,0.0031,0.1946,0.3385,0.0911,Europe,Eastern Europe,Croatia,2010
2019,HR,0,0.0031,0.1947,0.3379,0.0903,Europe,Eastern Europe,Croatia,2010
2020,HR,0,0.0031,0.1949,0.3379,0.0904,Europe,Eastern Europe,Croatia,2020
2021,HR,0,0.0031,0.1949,0.3379,0.0904,Europe,Eastern Europe,Croatia,2020
2022,HR,0,0.0031,0.1949,0.3379,0.0904,Europe,Eastern Europe,Croatia,2020
2023,HR,0,0.0031,0.1949,0.3379,0.0904,Europe,Eastern Europe,Croatia,2020
1980,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1981,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1982,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1983,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1984,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1985,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1986,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1987,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1988,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1989,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1980
1990,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1991,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1992,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1993,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1994,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1995,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1996,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1997,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1998,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
1999,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,1990
2000,HT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Haiti,2000
2001,HT,0,0.0001,0.0805,0.5636,0.1984,Americas,Caribbean,Haiti,2000
2002,HT,0,0,0.0809,0.5626,0.1928,Americas,Caribbean,Haiti,2000
2003,HT,0,0,0.0854,0.5605,0.2043,Americas,Caribbean,Haiti,2000
2004,HT,0,0.0001,0.0878,0.556,0.1999,Americas,Caribbean,Haiti,2000
2005,HT,0,0.0001,0.087,0.5555,0.193,Americas,Caribbean,Haiti,2000
2006,HT,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Caribbean,Haiti,2000
2007,HT,0,0.0002,0.0888,0.5641,0.211,Americas,Caribbean,Haiti,2000
2008,HT,0,0.0003,0.0903,0.56,0.2029,Americas,Caribbean,Haiti,2000
2009,HT,0,0.0004,0.0926,0.5486,0.1928,Americas,Caribbean,Haiti,2000
2010,HT,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Caribbean,Haiti,2010
2011,HT,0,0.0005,0.0976,0.541,0.1982,Americas,Caribbean,Haiti,2010
2012,HT,0,0.0005,0.1001,0.5332,0.197,Americas,Caribbean,Haiti,2010
2013,HT,0,0.0006,0.1006,0.5404,0.2057,Americas,Caribbean,Haiti,2010
2014,HT,0,0.0005,0.1026,0.5304,0.2046,Americas,Caribbean,Haiti,2010
2015,HT,0,0.0005,0.1032,0.5312,0.1942,Americas,Caribbean,Haiti,2010
2016,HT,0,0.0004,0.1034,0.5334,0.1984,Americas,Caribbean,Haiti,2010
2017,HT,0,0.0003,0.1031,0.5311,0.1884,Americas,Caribbean,Haiti,2010
2018,HT,0,0.0003,0.1016,0.5354,0.1976,Americas,Caribbean,Haiti,2010
2019,HT,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Caribbean,Haiti,2010
2020,HT,0,0.0001,0.0872,0.5466,0.2043,Americas,Caribbean,Haiti,2020
2021,HT,0,0.0001,0.0972,0.5299,0.1892,Americas,Caribbean,Haiti,2020
2022,HT,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Haiti,2020
2023,HT,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Haiti,2020
1980,HU,0,0.0065,0.3343,0.1806,0.0287,Europe,Eastern Europe,Hungary,1980
1981,HU,0,0.0066,0.3374,0.1793,0.0284,Europe,Eastern Europe,Hungary,1980
1982,HU,0,0.0067,0.3404,0.1779,0.0281,Europe,Eastern Europe,Hungary,1980
1983,HU,0,0.0071,0.3538,0.1721,0.0279,Europe,Eastern Europe,Hungary,1980
1984,HU,0,0.0076,0.3679,0.1663,0.0277,Europe,Eastern Europe,Hungary,1980
1985,HU,0,0.0075,0.3656,0.1683,0.0286,Europe,Eastern Europe,Hungary,1980
1986,HU,0,0.0074,0.3631,0.1702,0.0294,Europe,Eastern Europe,Hungary,1980
1987,HU,0,0.0071,0.3526,0.1801,0.034,Europe,Eastern Europe,Hungary,1980
1988,HU,0,0.0068,0.343,0.1896,0.0385,Europe,Eastern Europe,Hungary,1980
1989,HU,0,0.0063,0.3245,0.2061,0.0457,Europe,Eastern Europe,Hungary,1980
1990,HU,0,0.0059,0.3065,0.2233,0.0528,Europe,Eastern Europe,Hungary,1990
1991,HU,0,0.0054,0.2895,0.241,0.0597,Europe,Eastern Europe,Hungary,1990
1992,HU,0,0.0049,0.2742,0.2589,0.0668,Europe,Eastern Europe,Hungary,1990
1993,HU,0,0.0049,0.2741,0.2619,0.0699,Europe,Eastern Europe,Hungary,1990
1994,HU,0,0.0049,0.2656,0.2692,0.0715,Europe,Eastern Europe,Hungary,1990
1995,HU,0,0.0052,0.2824,0.259,0.073,Europe,Eastern Europe,Hungary,1990
1996,HU,0,0.0053,0.278,0.2669,0.081,Europe,Eastern Europe,Hungary,1990
1997,HU,0,0.0051,0.2767,0.2772,0.0833,Europe,Eastern Europe,Hungary,1990
1998,HU,0,0.0051,0.2693,0.2878,0.089,Europe,Eastern Europe,Hungary,1990
1999,HU,0,0.0047,0.263,0.292,0.089,Europe,Eastern Europe,Hungary,1990
2000,HU,0,0.0048,0.2645,0.2907,0.093,Europe,Eastern Europe,Hungary,2000
2001,HU,0,0.0047,0.2545,0.3083,0.1015,Europe,Eastern Europe,Hungary,2000
2002,HU,0,0.0044,0.2462,0.3239,0.1091,Europe,Eastern Europe,Hungary,2000
2003,HU,0,0.0043,0.2432,0.3242,0.1068,Europe,Eastern Europe,Hungary,2000
2004,HU,0,0.0045,0.2502,0.3164,0.1057,Europe,Eastern Europe,Hungary,2000
2005,HU,0,0.0044,0.2437,0.3346,0.1181,Europe,Eastern Europe,Hungary,2000
2006,HU,0,0.0042,0.2328,0.3472,0.1261,Europe,Eastern Europe,Hungary,2000
2007,HU,0,0.004,0.225,0.3495,0.114,Europe,Eastern Europe,Hungary,2000
2008,HU,0,0.0042,0.2314,0.342,0.1132,Europe,Eastern Europe,Hungary,2000
2009,HU,0,0.0042,0.2345,0.3333,0.1118,Europe,Eastern Europe,Hungary,2000
2010,HU,0,0.0041,0.2305,0.3368,0.1144,Europe,Eastern Europe,Hungary,2010
2011,HU,0,0.0041,0.2333,0.3285,0.1098,Europe,Eastern Europe,Hungary,2010
2012,HU,0,0.0041,0.2366,0.3194,0.1035,Europe,Eastern Europe,Hungary,2010
2013,HU,0,0.004,0.231,0.3335,0.1165,Europe,Eastern Europe,Hungary,2010
2014,HU,0,0.0039,0.2303,0.3289,0.116,Europe,Eastern Europe,Hungary,2010
2015,HU,0,0.0039,0.2303,0.3286,0.1162,Europe,Eastern Europe,Hungary,2010
2016,HU,0,0.004,0.2322,0.3305,0.1201,Europe,Eastern Europe,Hungary,2010
2017,HU,0,0.0039,0.2318,0.3297,0.1136,Europe,Eastern Europe,Hungary,2010
2018,HU,0,0.0036,0.2245,0.3247,0.1097,Europe,Eastern Europe,Hungary,2010
2019,HU,0,0.0037,0.2255,0.331,0.0995,Europe,Eastern Europe,Hungary,2010
2020,HU,0,0.0037,0.2269,0.3285,0.0984,Europe,Eastern Europe,Hungary,2020
2021,HU,0,0.0037,0.2269,0.3285,0.0984,Europe,Eastern Europe,Hungary,2020
2022,HU,0,0.0037,0.2269,0.3285,0.0984,Europe,Eastern Europe,Hungary,2020
2023,HU,0,0.0037,0.2269,0.3285,0.0984,Europe,Eastern Europe,Hungary,2020
1980,ID,0,0.0027,0.1646,0.4124,0.1479,Asia,South-East Asia,Indonesia,1980
1981,ID,0,0.0027,0.1646,0.4124,0.1479,Asia,South-East Asia,Indonesia,1980
1982,ID,0,0.0027,0.1646,0.4124,0.1479,Asia,South-East Asia,Indonesia,1980
1983,ID,0,0.0027,0.1646,0.4124,0.1479,Asia,South-East Asia,Indonesia,1980
1984,ID,0,0.0027,0.1646,0.4124,0.1479,Asia,South-East Asia,Indonesia,1980
1985,ID,0,0.0026,0.159,0.4225,0.1547,Asia,South-East Asia,Indonesia,1980
1986,ID,0,0.0025,0.1539,0.4317,0.1609,Asia,South-East Asia,Indonesia,1980
1987,ID,0,0.0024,0.1493,0.4402,0.1666,Asia,South-East Asia,Indonesia,1980
1988,ID,0,0.0024,0.1473,0.443,0.1603,Asia,South-East Asia,Indonesia,1980
1989,ID,0,0.0023,0.1454,0.4455,0.1548,Asia,South-East Asia,Indonesia,1980
1990,ID,0,0.0023,0.1438,0.4477,0.15,Asia,South-East Asia,Indonesia,1990
1991,ID,0,0.0023,0.1419,0.4535,0.1604,Asia,South-East Asia,Indonesia,1990
1992,ID,0,0.0023,0.1404,0.4584,0.1692,Asia,South-East Asia,Indonesia,1990
1993,ID,0,0.0023,0.139,0.4626,0.1766,Asia,South-East Asia,Indonesia,1990
1994,ID,0,0.0022,0.1351,0.4706,0.1842,Asia,South-East Asia,Indonesia,1990
1995,ID,0,0.0021,0.1321,0.4771,0.1902,Asia,South-East Asia,Indonesia,1990
1996,ID,0,0.0021,0.1299,0.4823,0.1951,Asia,South-East Asia,Indonesia,1990
1997,ID,0,0.0025,0.1528,0.4405,0.1688,Asia,South-East Asia,Indonesia,1990
1998,ID,0,0.0031,0.178,0.3946,0.1399,Asia,South-East Asia,Indonesia,1990
1999,ID,0,0.0031,0.1818,0.3874,0.1358,Asia,South-East Asia,Indonesia,1990
2000,ID,0,0.0031,0.1801,0.3884,0.137,Asia,South-East Asia,Indonesia,2000
2001,ID,0,0.003,0.1752,0.3986,0.1467,Asia,South-East Asia,Indonesia,2000
2002,ID,0,0.003,0.1735,0.3974,0.1429,Asia,South-East Asia,Indonesia,2000
2003,ID,0,0.0029,0.1719,0.396,0.1388,Asia,South-East Asia,Indonesia,2000
2004,ID,0,0.0028,0.1649,0.4121,0.1517,Asia,South-East Asia,Indonesia,2000
2005,ID,0,0.0027,0.1604,0.4241,0.1612,Asia,South-East Asia,Indonesia,2000
2006,ID,0,0.0028,0.1655,0.4177,0.154,Asia,South-East Asia,Indonesia,2000
2007,ID,0,0.0027,0.1587,0.4244,0.1584,Asia,South-East Asia,Indonesia,2000
2008,ID,0,0.0021,0.1342,0.4654,0.1812,Asia,South-East Asia,Indonesia,2000
2009,ID,0,0.0021,0.1299,0.4788,0.2015,Asia,South-East Asia,Indonesia,2000
2010,ID,0,0.0025,0.1491,0.4296,0.1636,Asia,South-East Asia,Indonesia,2010
2011,ID,0,0.0024,0.1428,0.4484,0.1756,Asia,South-East Asia,Indonesia,2010
2012,ID,0,0.0025,0.1479,0.4429,0.1748,Asia,South-East Asia,Indonesia,2010
2013,ID,0,0.0026,0.1518,0.4354,0.1703,Asia,South-East Asia,Indonesia,2010
2014,ID,0,0.0025,0.1514,0.4343,0.1706,Asia,South-East Asia,Indonesia,2010
2015,ID,0,0.0024,0.1475,0.4497,0.1808,Asia,South-East Asia,Indonesia,2010
2016,ID,0,0.0025,0.1514,0.4315,0.1582,Asia,South-East Asia,Indonesia,2010
2017,ID,0,0.0025,0.1535,0.4173,0.1553,Asia,South-East Asia,Indonesia,2010
2018,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2010
2019,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2010
2020,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2020
2021,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2020
2022,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2020
2023,ID,0,0.0019,0.1245,0.4686,0.1785,Asia,South-East Asia,Indonesia,2020
1980,IE,0,0.0037,0.2254,0.3112,0.09,Europe,Western Europe,Ireland,1980
1981,IE,0,0.0037,0.2277,0.3074,0.0885,Europe,Western Europe,Ireland,1980
1982,IE,0,0.0035,0.217,0.3163,0.0909,Europe,Western Europe,Ireland,1980
1983,IE,0,0.0034,0.2122,0.32,0.0919,Europe,Western Europe,Ireland,1980
1984,IE,0,0.0036,0.2219,0.3107,0.0893,Europe,Western Europe,Ireland,1980
1985,IE,0,0.0036,0.2216,0.3086,0.088,Europe,Western Europe,Ireland,1980
1986,IE,0,0.0036,0.2224,0.3071,0.0873,Europe,Western Europe,Ireland,1980
1987,IE,0,0.0036,0.222,0.3078,0.0872,Europe,Western Europe,Ireland,1980
1988,IE,0,0.0037,0.2282,0.3052,0.0873,Europe,Western Europe,Ireland,1980
1989,IE,0,0.0037,0.2275,0.3053,0.0889,Europe,Western Europe,Ireland,1980
1990,IE,0,0.0037,0.226,0.3087,0.0903,Europe,Western Europe,Ireland,1990
1991,IE,0,0.0035,0.218,0.3163,0.0939,Europe,Western Europe,Ireland,1990
1992,IE,0,0.0035,0.2132,0.3258,0.0965,Europe,Western Europe,Ireland,1990
1993,IE,0,0.0036,0.2174,0.3226,0.0947,Europe,Western Europe,Ireland,1990
1994,IE,0,0.0034,0.2084,0.3302,0.0972,Europe,Western Europe,Ireland,1990
1995,IE,0,0.0035,0.2107,0.3297,0.1003,Europe,Western Europe,Ireland,1990
1996,IE,0,0.0038,0.2251,0.3169,0.0971,Europe,Western Europe,Ireland,1990
1997,IE,0,0.0039,0.2215,0.3316,0.1065,Europe,Western Europe,Ireland,1990
1998,IE,0,0.0036,0.21,0.3551,0.1203,Europe,Western Europe,Ireland,1990
1999,IE,0,0.0037,0.2133,0.3486,0.1175,Europe,Western Europe,Ireland,1990
2000,IE,0,0.0035,0.2071,0.3632,0.1253,Europe,Western Europe,Ireland,2000
2001,IE,0,0.0035,0.2078,0.3527,0.1182,Europe,Western Europe,Ireland,2000
2002,IE,0,0.0036,0.2114,0.354,0.1201,Europe,Western Europe,Ireland,2000
2003,IE,0,0.0035,0.2062,0.3615,0.1236,Europe,Western Europe,Ireland,2000
2004,IE,0,0.0031,0.1992,0.3605,0.1234,Europe,Western Europe,Ireland,2000
2005,IE,0,0.0033,0.2027,0.3708,0.1326,Europe,Western Europe,Ireland,2000
2006,IE,0,0.0032,0.1957,0.3748,0.1352,Europe,Western Europe,Ireland,2000
2007,IE,0,0.0031,0.1866,0.3598,0.1204,Europe,Western Europe,Ireland,2000
2008,IE,0,0.0034,0.1992,0.3223,0.1028,Europe,Western Europe,Ireland,2000
2009,IE,0,0.0038,0.2151,0.325,0.1003,Europe,Western Europe,Ireland,2000
2010,IE,0,0.0037,0.2075,0.3249,0.1002,Europe,Western Europe,Ireland,2010
2011,IE,0,0.0036,0.2046,0.3254,0.0995,Europe,Western Europe,Ireland,2010
2012,IE,0,0.0035,0.2038,0.3125,0.0937,Europe,Western Europe,Ireland,2010
2013,IE,0,0.0034,0.1969,0.3258,0.1013,Europe,Western Europe,Ireland,2010
2014,IE,0,0.0032,0.1918,0.3316,0.1051,Europe,Western Europe,Ireland,2010
2015,IE,0,0.0032,0.1864,0.3546,0.119,Europe,Western Europe,Ireland,2010
2016,IE,0,0.0033,0.1896,0.3575,0.1211,Europe,Western Europe,Ireland,2010
2017,IE,0,0.0034,0.1948,0.3485,0.1159,Europe,Western Europe,Ireland,2010
2018,IE,0,0.0034,0.1986,0.3588,0.1225,Europe,Western Europe,Ireland,2010
2019,IE,0,0.0034,0.1983,0.3606,0.1231,Europe,Western Europe,Ireland,2010
2020,IE,0,0.0034,0.2,0.368,0.1361,Europe,Western Europe,Ireland,2020
2021,IE,0,0.0034,0.2,0.368,0.1361,Europe,Western Europe,Ireland,2020
2022,IE,0,0.0034,0.2,0.368,0.1361,Europe,Western Europe,Ireland,2020
2023,IE,0,0.0034,0.2,0.368,0.1361,Europe,Western Europe,Ireland,2020
1980,IL,0,0.0022,0.1344,0.4947,0.1814,Asia,West Asia,Israel,1980
1981,IL,0,0.0022,0.1346,0.4942,0.1801,Asia,West Asia,Israel,1980
1982,IL,0,0.0022,0.1347,0.4937,0.1787,Asia,West Asia,Israel,1980
1983,IL,0,0.0022,0.1349,0.4932,0.1774,Asia,West Asia,Israel,1980
1984,IL,0,0.0022,0.135,0.4926,0.176,Asia,West Asia,Israel,1980
1985,IL,0,0.0022,0.1352,0.4921,0.1746,Asia,West Asia,Israel,1980
1986,IL,0,0.0022,0.1353,0.4916,0.1731,Asia,West Asia,Israel,1980
1987,IL,0,0.0022,0.1351,0.4934,0.176,Asia,West Asia,Israel,1980
1988,IL,0,0.0022,0.1348,0.4951,0.1786,Asia,West Asia,Israel,1980
1989,IL,0,0.0022,0.1345,0.4966,0.1811,Asia,West Asia,Israel,1980
1990,IL,0,0.0022,0.1343,0.4981,0.1834,Asia,West Asia,Israel,1990
1991,IL,0,0.0022,0.1341,0.4995,0.1855,Asia,West Asia,Israel,1990
1992,IL,0,0.0022,0.1339,0.5008,0.1875,Asia,West Asia,Israel,1990
1993,IL,0,0.0022,0.1327,0.502,0.1877,Asia,West Asia,Israel,1990
1994,IL,0,0.0022,0.1316,0.5032,0.1878,Asia,West Asia,Israel,1990
1995,IL,0,0.0021,0.1305,0.5044000000000001,0.188,Asia,West Asia,Israel,1990
1996,IL,0,0.0021,0.1295,0.5054000000000001,0.1882,Asia,West Asia,Israel,1990
1997,IL,0,0.0021,0.1286,0.5065000000000001,0.1883,Asia,West Asia,Israel,1990
1998,IL,0,0.0021,0.1279,0.5078,0.1895,Asia,West Asia,Israel,1990
1999,IL,0,0.002,0.1272,0.5092,0.1907,Asia,West Asia,Israel,1990
2000,IL,0,0.002,0.1265,0.5105000000000001,0.1919,Asia,West Asia,Israel,2000
2001,IL,0,0.002,0.1258,0.5118,0.193,Asia,West Asia,Israel,2000
2002,IL,0,0.0019,0.1237,0.5142,0.1937,Asia,West Asia,Israel,2000
2003,IL,0,0.0019,0.1216,0.5165000000000001,0.1944,Asia,West Asia,Israel,2000
2004,IL,0,0.0018,0.1196,0.5188,0.1951,Asia,West Asia,Israel,2000
2005,IL,0,0.0018,0.1176,0.521,0.1958,Asia,West Asia,Israel,2000
2006,IL,0,0.0018,0.1171,0.5205000000000001,0.1964,Asia,West Asia,Israel,2000
2007,IL,0,0.0017,0.1166,0.5201,0.1969,Asia,West Asia,Israel,2000
2008,IL,0,0.0017,0.117,0.523,0.1993,Asia,West Asia,Israel,2000
2009,IL,0,0.0017,0.1173,0.5258,0.2015,Asia,West Asia,Israel,2000
2010,IL,0,0.0017,0.1176,0.5284,0.2037,Asia,West Asia,Israel,2010
2011,IL,0,0.0018,0.1186,0.5226000000000001,0.1993,Asia,West Asia,Israel,2010
2012,IL,0,0.0018,0.1195,0.5169,0.1949,Asia,West Asia,Israel,2010
2013,IL,0,0.0019,0.1248,0.5069,0.1854,Asia,West Asia,Israel,2010
2014,IL,0,0.002,0.1297,0.4977,0.1767,Asia,West Asia,Israel,2010
2015,IL,0,0.002,0.1313,0.4947,0.1725,Asia,West Asia,Israel,2010
2016,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2010
2017,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2010
2018,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2010
2019,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2010
2020,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2020
2021,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2020
2022,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2020
2023,IL,0,0.002,0.1328,0.4918,0.1684,Asia,West Asia,Israel,2020
1980,IN,0,0.0038,0.2121,0.3236,0.0754,Asia,South Asia,India,1980
1981,IN,0,0.0038,0.2139,0.3155,0.0688,Asia,South Asia,India,1980
1982,IN,0,0.0038,0.2154,0.3087,0.0628,Asia,South Asia,India,1980
1983,IN,0,0.0035,0.1983,0.3615,0.1057,Asia,South Asia,India,1980
1984,IN,0,0.0036,0.204,0.3424,0.0912,Asia,South Asia,India,1980
1985,IN,0,0.0035,0.1992,0.3568,0.1072,Asia,South Asia,India,1980
1986,IN,0,0.0035,0.198,0.3597,0.1109,Asia,South Asia,India,1980
1987,IN,0,0.0035,0.1996,0.3537,0.1059,Asia,South Asia,India,1980
1988,IN,0,0.0034,0.1965,0.363,0.114,Asia,South Asia,India,1980
1989,IN,0,0.0035,0.1965,0.3634,0.1131,Asia,South Asia,India,1980
1990,IN,0,0.0036,0.2027,0.344,0.1074,Asia,South Asia,India,1990
1991,IN,0,0.0035,0.2011,0.3502,0.1044,Asia,South Asia,India,1990
1992,IN,0,0.0035,0.1982,0.3599,0.1027,Asia,South Asia,India,1990
1993,IN,0,0.0034,0.1933,0.3767,0.1279,Asia,South Asia,India,1990
1994,IN,0,0.0033,0.1887,0.3922,0.1267,Asia,South Asia,India,1990
1995,IN,0,0.0033,0.189,0.3928,0.1335,Asia,South Asia,India,1990
1996,IN,0,0.0034,0.1905,0.3894,0.1356,Asia,South Asia,India,1990
1997,IN,0,0.0033,0.1883,0.3975,0.1419,Asia,South Asia,India,1990
1998,IN,0,0.0033,0.187,0.4025,0.1473,Asia,South Asia,India,1990
1999,IN,0,0.0033,0.1864,0.4052,0.1508,Asia,South Asia,India,1990
2000,IN,0,0.0033,0.1854,0.409,0.1551,Asia,South Asia,India,2000
2001,IN,0,0.0032,0.1814,0.4199,0.1629,Asia,South Asia,India,2000
2002,IN,0,0.0032,0.1773,0.431,0.171,Asia,South Asia,India,2000
2003,IN,0,0.0031,0.1732,0.4423,0.1794,Asia,South Asia,India,2000
2004,IN,0,0.003,0.169,0.4538,0.1881,Asia,South Asia,India,2000
2005,IN,0,0.0029,0.1648,0.4655,0.1971,Asia,South Asia,India,2000
2006,IN,0,0.0029,0.1607,0.4782,0.201,Asia,South Asia,India,2000
2007,IN,0,0.0028,0.1564,0.4913,0.205,Asia,South Asia,India,2000
2008,IN,0,0.0027,0.1521,0.5046,0.2088,Asia,South Asia,India,2000
2009,IN,0,0.0026,0.1477,0.5183,0.2127,Asia,South Asia,India,2000
2010,IN,0,0.0025,0.1433,0.5321,0.2164,Asia,South Asia,India,2010
2011,IN,0,0.0024,0.1373,0.5517000000000001,0.2154,Asia,South Asia,India,2010
2012,IN,0,0.0024,0.1346,0.5603,0.217,Asia,South Asia,India,2010
2013,IN,0,0.0024,0.1339,0.5627,0.22,Asia,South Asia,India,2010
2014,IN,0,0.0023,0.1313,0.5713,0.2173,Asia,South Asia,India,2010
2015,IN,0,0.0023,0.1297,0.5777,0.221,Asia,South Asia,India,2010
2016,IN,0,0.0022,0.1256,0.5923,0.2264,Asia,South Asia,India,2010
2017,IN,0,0.0022,0.1239,0.5987,0.2265,Asia,South Asia,India,2010
2018,IN,0,0.0023,0.1281,0.5893,0.2278,Asia,South Asia,India,2010
2019,IN,0,0.0023,0.1307,0.5870000000000001,0.2203,Asia,South Asia,India,2010
2020,IN,0,0.0025,0.1372,0.5802,0.2199,Asia,South Asia,India,2020
2021,IN,0,0.0025,0.1364,0.5819,0.2213,Asia,South Asia,India,2020
2022,IN,0,0.0024,0.1325,0.5889,0.2307,Asia,South Asia,India,2020
2023,IN,0,0.0024,0.1325,0.5889,0.2307,Asia,South Asia,India,2020
1980,IM,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Isle of Man,1980
1981,IM,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Isle of Man,1980
1982,IM,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Isle of Man,1980
1983,IM,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Isle of Man,1980
1984,IM,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Isle of Man,1980
1985,IM,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Isle of Man,1980
1986,IM,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Isle of Man,1980
1987,IM,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Isle of Man,1980
1988,IM,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Isle of Man,1980
1989,IM,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Isle of Man,1980
1990,IM,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Isle of Man,1990
1991,IM,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Isle of Man,1990
1992,IM,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Isle of Man,1990
1993,IM,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Isle of Man,1990
1994,IM,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Isle of Man,1990
1995,IM,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Isle of Man,1990
1996,IM,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Isle of Man,1990
1997,IM,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Isle of Man,1990
1998,IM,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Isle of Man,1990
1999,IM,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Isle of Man,1990
2000,IM,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Isle of Man,2000
2001,IM,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Isle of Man,2000
2002,IM,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Isle of Man,2000
2003,IM,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Isle of Man,2000
2004,IM,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Isle of Man,2000
2005,IM,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Isle of Man,2000
2006,IM,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Isle of Man,2000
2007,IM,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Isle of Man,2000
2008,IM,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Isle of Man,2000
2009,IM,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Isle of Man,2000
2010,IM,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Isle of Man,2010
2011,IM,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Isle of Man,2010
2012,IM,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Isle of Man,2010
2013,IM,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Isle of Man,2010
2014,IM,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Isle of Man,2010
2015,IM,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Isle of Man,2010
2016,IM,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Isle of Man,2010
2017,IM,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Isle of Man,2010
2018,IM,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Isle of Man,2010
2019,IM,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Isle of Man,2010
2020,IM,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Isle of Man,2020
2021,IM,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Isle of Man,2020
2022,IM,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Isle of Man,2020
2023,IM,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Isle of Man,2020
1980,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1981,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1982,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1983,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1984,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1985,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1986,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1987,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1988,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1989,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1980
1990,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1991,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1992,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1993,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1994,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1995,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1996,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1997,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1998,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
1999,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,1990
2000,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2001,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2002,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2003,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2004,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2005,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2006,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2007,IQ,0,0.002,0.1184,0.5529000000000001,0.2432,Asia,West Asia,Iraq,2000
2008,IQ,0,0.0021,0.1235,0.551,0.2453,Asia,West Asia,Iraq,2000
2009,IQ,0,0.0022,0.1283,0.5493,0.2471,Asia,West Asia,Iraq,2000
2010,IQ,0,0.0023,0.1327,0.5477000000000001,0.2489,Asia,West Asia,Iraq,2010
2011,IQ,0,0.0024,0.1367,0.5463,0.2505,Asia,West Asia,Iraq,2010
2012,IQ,0,0.0021,0.1297,0.5226000000000001,0.2106,Asia,West Asia,Iraq,2010
2013,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2014,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2015,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2016,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2017,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2018,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2019,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2010
2020,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2020
2021,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2020
2022,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2020
2023,IQ,0,0.0029,0.1655,0.4527,0.1569,Asia,West Asia,Iraq,2020
1980,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1981,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1982,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1983,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1984,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1985,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1986,IR,0,0.0017,0.1109,0.5743,0.2304,Asia,South Asia,Iran,1980
1987,IR,0,0.0018,0.1148,0.5655,0.2237,Asia,South Asia,Iran,1980
1988,IR,0,0.0019,0.1188,0.5566,0.2169,Asia,South Asia,Iran,1980
1989,IR,0,0.002,0.1228,0.5476,0.21,Asia,South Asia,Iran,1980
1990,IR,0,0.002,0.1269,0.5384,0.2029,Asia,South Asia,Iran,1990
1991,IR,0,0.002,0.1272,0.5381,0.2027,Asia,South Asia,Iran,1990
1992,IR,0,0.0021,0.1275,0.5378000000000001,0.2026,Asia,South Asia,Iran,1990
1993,IR,0,0.0021,0.1277,0.5375,0.2024,Asia,South Asia,Iran,1990
1994,IR,0,0.0021,0.128,0.5372,0.2022,Asia,South Asia,Iran,1990
1995,IR,0,0.002,0.1292,0.5352,0.2006,Asia,South Asia,Iran,1990
1996,IR,0,0.002,0.1303,0.5332,0.199,Asia,South Asia,Iran,1990
1997,IR,0,0.002,0.1314,0.5311,0.1974,Asia,South Asia,Iran,1990
1998,IR,0,0.0018,0.1266,0.5317000000000001,0.1921,Asia,South Asia,Iran,1990
1999,IR,0,0.0017,0.1188,0.5493,0.2042,Asia,South Asia,Iran,1990
2000,IR,0,0.0016,0.1168,0.5507000000000001,0.2034,Asia,South Asia,Iran,2000
2001,IR,0,0.0017,0.1229,0.528,0.1826,Asia,South Asia,Iran,2000
2002,IR,0,0.0017,0.1215,0.527,0.1875,Asia,South Asia,Iran,2000
2003,IR,0,0.0017,0.1185,0.5334,0.1931,Asia,South Asia,Iran,2000
2004,IR,0,0.0017,0.1193,0.5344,0.1894,Asia,South Asia,Iran,2000
2005,IR,0,0.0017,0.121,0.529,0.1929,Asia,South Asia,Iran,2000
2006,IR,0,0.0017,0.1215,0.5288,0.1935,Asia,South Asia,Iran,2000
2007,IR,0,0.0017,0.1176,0.5394,0.208,Asia,South Asia,Iran,2000
2008,IR,0,0.0022,0.1427,0.4953,0.1781,Asia,South Asia,Iran,2000
2009,IR,0,0.0019,0.1349,0.4857,0.1642,Asia,South Asia,Iran,2000
2010,IR,0,0.002,0.1356,0.4989,0.1808,Asia,South Asia,Iran,2010
2011,IR,0,0.002,0.1373,0.4993,0.1822,Asia,South Asia,Iran,2010
2012,IR,0,0.0021,0.1392,0.4998,0.1837,Asia,South Asia,Iran,2010
2013,IR,0,0.0023,0.1471,0.4959,0.1822,Asia,South Asia,Iran,2010
2014,IR,0,0.0024,0.1507,0.4832,0.1688,Asia,South Asia,Iran,2010
2015,IR,0,0.0025,0.1437,0.5064000000000001,0.1703,Asia,South Asia,Iran,2010
2016,IR,0,0.0025,0.1426,0.5075000000000001,0.1657,Asia,South Asia,Iran,2010
2017,IR,0,0.0024,0.1387,0.5127,0.1736,Asia,South Asia,Iran,2010
2018,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2010
2019,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2010
2020,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2020
2021,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2020
2022,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2020
2023,IR,0,0.0023,0.1332,0.5272,0.1827,Asia,South Asia,Iran,2020
1980,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1981,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1982,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1983,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1984,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1985,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1986,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1987,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1988,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1989,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1980
1990,IS,0,0.0037,0.2231,0.2979,0.0754,Europe,Western Europe,Iceland,1990
1991,IS,0,0.0038,0.2234,0.2978,0.0745,Europe,Western Europe,Iceland,1990
1992,IS,0,0.0038,0.2243,0.2991,0.0766,Europe,Western Europe,Iceland,1990
1993,IS,0,0.0038,0.2248,0.2994,0.0756,Europe,Western Europe,Iceland,1990
1994,IS,0,0.0038,0.2244,0.3007,0.0757,Europe,Western Europe,Iceland,1990
1995,IS,0,0.0039,0.2254,0.3006,0.0756,Europe,Western Europe,Iceland,1990
1996,IS,0,0.0039,0.2237,0.301,0.0759,Europe,Western Europe,Iceland,1990
1997,IS,0,0.0038,0.2219,0.3019,0.0771,Europe,Western Europe,Iceland,1990
1998,IS,0,0.0038,0.2197,0.3028,0.0779,Europe,Western Europe,Iceland,1990
1999,IS,0,0.0037,0.2179,0.3051,0.0804,Europe,Western Europe,Iceland,1990
2000,IS,0,0.0037,0.2189,0.3052,0.0832,Europe,Western Europe,Iceland,2000
2001,IS,0,0.0036,0.2142,0.3215,0.1017,Europe,Western Europe,Iceland,2000
2002,IS,0,0.0036,0.2127,0.3285,0.1094,Europe,Western Europe,Iceland,2000
2003,IS,0,0.0037,0.2171,0.3228,0.1092,Europe,Western Europe,Iceland,2000
2004,IS,0,0.0038,0.2233,0.3081,0.0922,Europe,Western Europe,Iceland,2000
2005,IS,0,0.0038,0.2222,0.3121,0.1032,Europe,Western Europe,Iceland,2000
2006,IS,0,0.0037,0.2181,0.321,0.1065,Europe,Western Europe,Iceland,2000
2007,IS,0,0.0037,0.2118,0.3548,0.1467,Europe,Western Europe,Iceland,2000
2008,IS,0,0.004,0.2356,0.2928,0.0793,Europe,Western Europe,Iceland,2000
2009,IS,0,0.0043,0.2435,0.2767,0.0667,Europe,Western Europe,Iceland,2000
2010,IS,0,0.0044,0.2456,0.2679,0.056,Europe,Western Europe,Iceland,2010
2011,IS,0,0.0044,0.245,0.2734,0.0587,Europe,Western Europe,Iceland,2010
2012,IS,0,0.0045,0.2454,0.2772,0.0634,Europe,Western Europe,Iceland,2010
2013,IS,0,0.0043,0.2377,0.2975,0.0835,Europe,Western Europe,Iceland,2010
2014,IS,0,0.0043,0.2394,0.2961,0.0849,Europe,Western Europe,Iceland,2010
2015,IS,0,0.0042,0.2388,0.2955,0.0837,Europe,Western Europe,Iceland,2010
2016,IS,0,0.0043,0.2417,0.2922,0.0847,Europe,Western Europe,Iceland,2010
2017,IS,0,0.0045,0.2493,0.2915,0.0889,Europe,Western Europe,Iceland,2010
2018,IS,0,0.0045,0.2494,0.2914,0.0889,Europe,Western Europe,Iceland,2010
2019,IS,0,0.0045,0.2494,0.2914,0.0888,Europe,Western Europe,Iceland,2010
2020,IS,0,0.0045,0.2494,0.2914,0.0889,Europe,Western Europe,Iceland,2020
2021,IS,0,0.0047,0.2545,0.2916,0.0925,Europe,Western Europe,Iceland,2020
2022,IS,0,0.0047,0.2569,0.2797,0.0794,Europe,Western Europe,Iceland,2020
2023,IS,0,0.0047,0.2572,0.2795,0.0797,Europe,Western Europe,Iceland,2020
1980,IT,0,0.0009,0.2089,0.284,0.0624,Europe,Western Europe,Italy,1980
1981,IT,0,0.0009,0.2137,0.2732,0.0573,Europe,Western Europe,Italy,1980
1982,IT,0,0.0009,0.2144,0.2711,0.0563,Europe,Western Europe,Italy,1980
1983,IT,0,0.001,0.2156,0.2701,0.0559,Europe,Western Europe,Italy,1980
1984,IT,0,0.001,0.2133,0.2754,0.058,Europe,Western Europe,Italy,1980
1985,IT,0,0.0011,0.2123,0.281,0.0617,Europe,Western Europe,Italy,1980
1986,IT,0,0.0011,0.21,0.2923,0.0695,Europe,Western Europe,Italy,1980
1987,IT,0,0.0004,0.2057,0.2988,0.0709,Europe,Western Europe,Italy,1980
1988,IT,0,0.0005,0.1992,0.3094,0.0749,Europe,Western Europe,Italy,1980
1989,IT,0,0.0005,0.1973,0.313,0.0765,Europe,Western Europe,Italy,1980
1990,IT,0,0.0003,0.1926,0.3137,0.076,Europe,Western Europe,Italy,1990
1991,IT,0,0.0005,0.1966,0.313,0.0767,Europe,Western Europe,Italy,1990
1992,IT,0,0.0002,0.1924,0.3157,0.0768,Europe,Western Europe,Italy,1990
1993,IT,0,0.0003,0.1879,0.3219,0.0794,Europe,Western Europe,Italy,1990
1994,IT,0,0.0001,0.1829,0.3259,0.0822,Europe,Western Europe,Italy,1990
1995,IT,0,0.0001,0.1807,0.3337,0.0882,Europe,Western Europe,Italy,1990
1996,IT,0,0,0.1773,0.3374,0.0904,Europe,Western Europe,Italy,1990
1997,IT,0,0.0001,0.1786,0.3418,0.0919,Europe,Western Europe,Italy,1990
1998,IT,0,0,0.1711,0.3481,0.0959,Europe,Western Europe,Italy,1990
1999,IT,0,0.0001,0.1729,0.3478,0.0935,Europe,Western Europe,Italy,1990
2000,IT,0,0.0001,0.1707,0.3561,0.0992,Europe,Western Europe,Italy,2000
2001,IT,0,0,0.1692,0.3602,0.1035,Europe,Western Europe,Italy,2000
2002,IT,0,0.0001,0.1709,0.3549,0.0997,Europe,Western Europe,Italy,2000
2003,IT,0,0,0.1699,0.3546,0.1006,Europe,Western Europe,Italy,2000
2004,IT,0,0.0001,0.1698,0.3574,0.0991,Europe,Western Europe,Italy,2000
2005,IT,0,0.0001,0.1751,0.3503,0.0983,Europe,Western Europe,Italy,2000
2006,IT,0,0.0001,0.1741,0.352,0.0987,Europe,Western Europe,Italy,2000
2007,IT,0,0.0002,0.1736,0.3541,0.0962,Europe,Western Europe,Italy,2000
2008,IT,0,0.0001,0.1794,0.3379,0.0867,Europe,Western Europe,Italy,2000
2009,IT,0,0.0001,0.1789,0.3373,0.0889,Europe,Western Europe,Italy,2000
2010,IT,0,0.0001,0.1754,0.3458,0.0939,Europe,Western Europe,Italy,2010
2011,IT,0,0.0001,0.1728,0.3525,0.1062,Europe,Western Europe,Italy,2010
2012,IT,0,0.0001,0.1714,0.3608,0.1139,Europe,Western Europe,Italy,2010
2013,IT,0,0.0001,0.1678,0.3615,0.1105,Europe,Western Europe,Italy,2010
2014,IT,0,0,0.1679,0.3575,0.1123,Europe,Western Europe,Italy,2010
2015,IT,0,0,0.1695,0.3493,0.1056,Europe,Western Europe,Italy,2010
2016,IT,0,0.0001,0.167,0.3677,0.123,Europe,Western Europe,Italy,2010
2017,IT,0,0.0002,0.1657,0.3756,0.1271,Europe,Western Europe,Italy,2010
2018,IT,0,0.0001,0.1641,0.3753,0.1259,Europe,Western Europe,Italy,2010
2019,IT,0,0.0001,0.1649,0.3735,0.1243,Europe,Western Europe,Italy,2010
2020,IT,0,0.0001,0.166,0.3714,0.1228,Europe,Western Europe,Italy,2020
2021,IT,0,0.0001,0.166,0.3714,0.1228,Europe,Western Europe,Italy,2020
2022,IT,0,0.0001,0.166,0.3714,0.1228,Europe,Western Europe,Italy,2020
2023,IT,0,0.0001,0.166,0.3714,0.1228,Europe,Western Europe,Italy,2020
1980,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1981,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1982,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1983,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1984,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1985,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1986,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1987,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1988,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1989,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1980
1990,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1991,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1992,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1993,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1994,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1995,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1996,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1997,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1998,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
1999,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,1990
2000,JM,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Jamaica,2000
2001,JM,0,0.0001,0.0805,0.5636,0.1984,Americas,Caribbean,Jamaica,2000
2002,JM,0,0,0.0809,0.5626,0.1928,Americas,Caribbean,Jamaica,2000
2003,JM,0,0,0.0854,0.5605,0.2043,Americas,Caribbean,Jamaica,2000
2004,JM,0,0.0001,0.0878,0.556,0.1999,Americas,Caribbean,Jamaica,2000
2005,JM,0,0.0001,0.087,0.5555,0.193,Americas,Caribbean,Jamaica,2000
2006,JM,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Caribbean,Jamaica,2000
2007,JM,0,0.0002,0.0888,0.5641,0.211,Americas,Caribbean,Jamaica,2000
2008,JM,0,0.0003,0.0903,0.56,0.2029,Americas,Caribbean,Jamaica,2000
2009,JM,0,0.0004,0.0926,0.5486,0.1928,Americas,Caribbean,Jamaica,2000
2010,JM,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Caribbean,Jamaica,2010
2011,JM,0,0.0005,0.0976,0.541,0.1982,Americas,Caribbean,Jamaica,2010
2012,JM,0,0.0005,0.1001,0.5332,0.197,Americas,Caribbean,Jamaica,2010
2013,JM,0,0.0006,0.1006,0.5404,0.2057,Americas,Caribbean,Jamaica,2010
2014,JM,0,0.0005,0.1026,0.5304,0.2046,Americas,Caribbean,Jamaica,2010
2015,JM,0,0.0005,0.1032,0.5312,0.1942,Americas,Caribbean,Jamaica,2010
2016,JM,0,0.0004,0.1034,0.5334,0.1984,Americas,Caribbean,Jamaica,2010
2017,JM,0,0.0003,0.1031,0.5311,0.1884,Americas,Caribbean,Jamaica,2010
2018,JM,0,0.0003,0.1016,0.5354,0.1976,Americas,Caribbean,Jamaica,2010
2019,JM,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Caribbean,Jamaica,2010
2020,JM,0,0.0001,0.0872,0.5466,0.2043,Americas,Caribbean,Jamaica,2020
2021,JM,0,0.0001,0.0972,0.5299,0.1892,Americas,Caribbean,Jamaica,2020
2022,JM,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Jamaica,2020
2023,JM,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Jamaica,2020
1980,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1981,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1982,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1983,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1984,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1985,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1986,JO,0,0.0024,0.1415,0.4929,0.1773,Asia,West Asia,Jordan,1980
1987,JO,0,0.0024,0.1386,0.4992,0.1839,Asia,West Asia,Jordan,1980
1988,JO,0,0.0023,0.1354,0.5062,0.1913,Asia,West Asia,Jordan,1980
1989,JO,0,0.0022,0.1318,0.5141,0.1996,Asia,West Asia,Jordan,1980
1990,JO,0,0.0022,0.1278,0.523,0.2089,Asia,West Asia,Jordan,1990
1991,JO,0,0.0021,0.1232,0.5331,0.2195,Asia,West Asia,Jordan,1990
1992,JO,0,0.0019,0.1179,0.5447000000000001,0.2317,Asia,West Asia,Jordan,1990
1993,JO,0,0.0021,0.1242,0.5294,0.2177,Asia,West Asia,Jordan,1990
1994,JO,0,0.0022,0.1307,0.5138,0.2034,Asia,West Asia,Jordan,1990
1995,JO,0,0.0023,0.1374,0.4977,0.1886,Asia,West Asia,Jordan,1990
1996,JO,0,0.0025,0.1442,0.4812,0.1735,Asia,West Asia,Jordan,1990
1997,JO,0,0.0026,0.1513,0.4643,0.158,Asia,West Asia,Jordan,1990
1998,JO,0,0.0026,0.148,0.4738,0.1654,Asia,West Asia,Jordan,1990
1999,JO,0,0.0025,0.1448,0.4827,0.1725,Asia,West Asia,Jordan,1990
2000,JO,0,0.0024,0.1419,0.4912,0.1792,Asia,West Asia,Jordan,2000
2001,JO,0,0.0023,0.139,0.4993,0.1856,Asia,West Asia,Jordan,2000
2002,JO,0,0.0023,0.1363,0.507,0.1916,Asia,West Asia,Jordan,2000
2003,JO,0,0.0023,0.1344,0.5103,0.1961,Asia,West Asia,Jordan,2000
2004,JO,0,0.0022,0.1327,0.5135000000000001,0.2002,Asia,West Asia,Jordan,2000
2005,JO,0,0.0022,0.131,0.5164,0.2041,Asia,West Asia,Jordan,2000
2006,JO,0,0.0022,0.1294,0.5192,0.2077,Asia,West Asia,Jordan,2000
2007,JO,0,0.0022,0.1305,0.5232,0.2109,Asia,West Asia,Jordan,2000
2008,JO,0,0.0022,0.1314,0.5269,0.2139,Asia,West Asia,Jordan,2000
2009,JO,0,0.0023,0.1334,0.531,0.2243,Asia,West Asia,Jordan,2000
2010,JO,0,0.0023,0.1353,0.5352,0.2347,Asia,West Asia,Jordan,2010
2011,JO,0,0.0024,0.1406,0.5082,0.2012,Asia,West Asia,Jordan,2010
2012,JO,0,0.0025,0.1436,0.5102,0.2025,Asia,West Asia,Jordan,2010
2013,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2014,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2015,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2016,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2017,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2018,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2019,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2010
2020,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2020
2021,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2020
2022,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2020
2023,JO,0,0.0027,0.1468,0.5122,0.2038,Asia,West Asia,Jordan,2020
1980,JP,0,0.0026,0.2059,0.3536,0.105,Asia,East Asia,Japan,1980
1981,JP,0,0.0027,0.2091,0.3495,0.1018,Asia,East Asia,Japan,1980
1982,JP,0,0.0027,0.2105,0.3486,0.1012,Asia,East Asia,Japan,1980
1983,JP,0,0.0027,0.2082,0.3507,0.1008,Asia,East Asia,Japan,1980
1984,JP,0,0.0027,0.206,0.3541,0.1023,Asia,East Asia,Japan,1980
1985,JP,0,0.0026,0.2009,0.3603,0.1051,Asia,East Asia,Japan,1980
1986,JP,0,0.0025,0.1977,0.3681,0.1102,Asia,East Asia,Japan,1980
1987,JP,0,0.0024,0.1912,0.3864,0.1236,Asia,East Asia,Japan,1980
1988,JP,0,0.0024,0.1879,0.3926,0.1264,Asia,East Asia,Japan,1980
1989,JP,0,0.0024,0.1863,0.4013,0.1364,Asia,East Asia,Japan,1980
1990,JP,0,0.0024,0.1868,0.4069,0.1443,Asia,East Asia,Japan,1990
1991,JP,0,0.0025,0.1925,0.3954,0.1349,Asia,East Asia,Japan,1990
1992,JP,0,0.0027,0.2069,0.3548,0.0984,Asia,East Asia,Japan,1990
1993,JP,0,0.0026,0.2039,0.3599,0.1004,Asia,East Asia,Japan,1990
1994,JP,0,0.0026,0.2018,0.3635,0.0988,Asia,East Asia,Japan,1990
1995,JP,0,0.0025,0.1959,0.3734,0.1026,Asia,East Asia,Japan,1990
1996,JP,0,0.0024,0.1897,0.3826,0.1091,Asia,East Asia,Japan,1990
1997,JP,0,0.0024,0.1898,0.3802,0.1033,Asia,East Asia,Japan,1990
1998,JP,0,0.0024,0.1888,0.384,0.1023,Asia,East Asia,Japan,1990
1999,JP,0,0.0024,0.186,0.391,0.1049,Asia,East Asia,Japan,1990
2000,JP,0,0.0023,0.18,0.4022,0.1115,Asia,East Asia,Japan,2000
2001,JP,0,0.0022,0.1751,0.4148,0.114,Asia,East Asia,Japan,2000
2002,JP,0,0.0022,0.1703,0.4248,0.1169,Asia,East Asia,Japan,2000
2003,JP,0,0.0021,0.1671,0.4322,0.1216,Asia,East Asia,Japan,2000
2004,JP,0,0.0021,0.163,0.442,0.1296,Asia,East Asia,Japan,2000
2005,JP,0,0.0021,0.1631,0.444,0.1339,Asia,East Asia,Japan,2000
2006,JP,0,0.0021,0.1633,0.4462,0.1355,Asia,East Asia,Japan,2000
2007,JP,0,0.0021,0.1626,0.4479,0.1358,Asia,East Asia,Japan,2000
2008,JP,0,0.0021,0.1671,0.4394,0.1284,Asia,East Asia,Japan,2000
2009,JP,0,0.0023,0.1806,0.4281,0.1207,Asia,East Asia,Japan,2000
2010,JP,0,0.0024,0.1826,0.4344,0.1258,Asia,East Asia,Japan,2010
2011,JP,0,0.0024,0.1842,0.4331,0.1241,Asia,East Asia,Japan,2010
2012,JP,0,0.0024,0.1835,0.4338,0.125,Asia,East Asia,Japan,2010
2013,JP,0,0.0023,0.1819,0.4352,0.1268,Asia,East Asia,Japan,2010
2014,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2010
2015,JP,0,0.0023,0.1813,0.4358,0.1274,Asia,East Asia,Japan,2010
2016,JP,0,0.0023,0.1818,0.4353,0.1268,Asia,East Asia,Japan,2010
2017,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2010
2018,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2010
2019,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2010
2020,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2020
2021,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2020
2022,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2020
2023,JP,0,0.0024,0.1821,0.435,0.1265,Asia,East Asia,Japan,2020
1980,KI,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1981,KI,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1982,KI,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1983,KI,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1984,KI,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1985,KI,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1986,KI,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1987,KI,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1988,KI,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1989,KI,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1980
1990,KI,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1991,KI,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1992,KI,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1993,KI,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1994,KI,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1995,KI,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1996,KI,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1997,KI,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1998,KI,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
1999,KI,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,1990
2000,KI,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2001,KI,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2002,KI,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2003,KI,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2004,KI,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2005,KI,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2006,KI,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2007,KI,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2008,KI,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2009,KI,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2000
2010,KI,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2011,KI,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2012,KI,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2013,KI,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2014,KI,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2015,KI,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2016,KI,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2017,KI,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2018,KI,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2019,KI,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2010
2020,KI,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2020
2021,KI,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2020
2022,KI,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2020
2023,KI,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Kiribati,2020
1980,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1981,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1982,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1983,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1984,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1985,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1986,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1987,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1988,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1989,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1980
1990,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1990
1991,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1990
1992,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1990
1993,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1990
1994,KE,0,0.0019,0.1236,0.5114000000000001,0.1897,Africa,East Africa,Kenya,1990
1995,KE,0,0.0018,0.12,0.5224,0.1895,Africa,East Africa,Kenya,1990
1996,KE,0,0.0018,0.1165,0.5334,0.1893,Africa,East Africa,Kenya,1990
1997,KE,0,0.0017,0.1129,0.5444,0.1891,Africa,East Africa,Kenya,1990
1998,KE,0,0.0017,0.1124,0.5452,0.1923,Africa,East Africa,Kenya,1990
1999,KE,0,0.0017,0.1119,0.5461,0.1955,Africa,East Africa,Kenya,1990
2000,KE,0,0.0017,0.1114,0.5469,0.1987,Africa,East Africa,Kenya,2000
2001,KE,0,0.0017,0.1109,0.5477000000000001,0.2019,Africa,East Africa,Kenya,2000
2002,KE,0,0.0017,0.1103,0.5486,0.2051,Africa,East Africa,Kenya,2000
2003,KE,0,0.0017,0.1098,0.5494,0.2083,Africa,East Africa,Kenya,2000
2004,KE,0,0.0017,0.1093,0.5502,0.2115,Africa,East Africa,Kenya,2000
2005,KE,0,0.0017,0.1088,0.5511,0.2147,Africa,East Africa,Kenya,2000
2006,KE,0,0.0017,0.1109,0.5447000000000001,0.2085,Africa,East Africa,Kenya,2000
2007,KE,0,0.0017,0.1131,0.5383,0.2022,Africa,East Africa,Kenya,2000
2008,KE,0,0.0018,0.1152,0.5319,0.1959,Africa,East Africa,Kenya,2000
2009,KE,0,0.0018,0.1173,0.5255000000000001,0.1896,Africa,East Africa,Kenya,2000
2010,KE,0,0.0019,0.1195,0.5191,0.1834,Africa,East Africa,Kenya,2010
2011,KE,0,0.0019,0.1216,0.5127,0.1771,Africa,East Africa,Kenya,2010
2012,KE,0,0.0019,0.1238,0.5063,0.1708,Africa,East Africa,Kenya,2010
2013,KE,0,0.002,0.1259,0.4999,0.1645,Africa,East Africa,Kenya,2010
2014,KE,0,0.002,0.128,0.4935,0.1582,Africa,East Africa,Kenya,2010
2015,KE,0,0.0021,0.1302,0.487,0.1519,Africa,East Africa,Kenya,2010
2016,KE,0,0.0021,0.1341,0.4796,0.1456,Africa,East Africa,Kenya,2010
2017,KE,0,0.0022,0.138,0.4722,0.1393,Africa,East Africa,Kenya,2010
2018,KE,0,0.0023,0.1419,0.4648,0.133,Africa,East Africa,Kenya,2010
2019,KE,0,0.0024,0.1458,0.4574,0.1267,Africa,East Africa,Kenya,2010
2020,KE,0,0.0024,0.1497,0.45,0.1204,Africa,East Africa,Kenya,2020
2021,KE,0,0.0023,0.1387,0.4953,0.159,Africa,East Africa,Kenya,2020
2022,KE,0,0.0023,0.1387,0.4953,0.159,Africa,East Africa,Kenya,2020
2023,KE,0,0.0023,0.1387,0.4953,0.159,Africa,East Africa,Kenya,2020
1980,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1981,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1982,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1983,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1984,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1985,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1986,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1987,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1988,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1989,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1980
1990,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1991,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1992,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1993,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1994,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1995,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1996,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1997,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1998,KG,0,0.0026,0.1605,0.4335,0.1558,Asia,Central Asia,Kyrgyzstan,1990
1999,KG,0,0.0029,0.1748,0.4032,0.1228,Asia,Central Asia,Kyrgyzstan,1990
2000,KG,0,0.0032,0.1863,0.3791,0.0965,Asia,Central Asia,Kyrgyzstan,2000
2001,KG,0,0.0031,0.1807,0.3818,0.1112,Asia,Central Asia,Kyrgyzstan,2000
2002,KG,0,0.0031,0.1806,0.3811,0.1077,Asia,Central Asia,Kyrgyzstan,2000
2003,KG,0,0.0033,0.1887,0.3737,0.1042,Asia,Central Asia,Kyrgyzstan,2000
2004,KG,0,0.0025,0.1522,0.4281,0.1396,Asia,Central Asia,Kyrgyzstan,2000
2005,KG,0,0.0027,0.161,0.4241,0.1471,Asia,Central Asia,Kyrgyzstan,2000
2006,KG,0,0.0025,0.1488,0.4517,0.175,Asia,Central Asia,Kyrgyzstan,2000
2007,KG,0,0.0028,0.1661,0.4109,0.1344,Asia,Central Asia,Kyrgyzstan,2000
2008,KG,0,0.0029,0.1722,0.4069,0.143,Asia,Central Asia,Kyrgyzstan,2000
2009,KG,0,0.003,0.1725,0.406,0.1443,Asia,Central Asia,Kyrgyzstan,2000
2010,KG,0,0.003,0.1763,0.4032,0.1407,Asia,Central Asia,Kyrgyzstan,2010
2011,KG,0,0.0033,0.1877,0.3855,0.1298,Asia,Central Asia,Kyrgyzstan,2010
2012,KG,0,0.0034,0.1919,0.3809,0.1265,Asia,Central Asia,Kyrgyzstan,2010
2013,KG,0,0.0033,0.1885,0.3821,0.1239,Asia,Central Asia,Kyrgyzstan,2010
2014,KG,0,0.0036,0.2001,0.3703,0.1234,Asia,Central Asia,Kyrgyzstan,2010
2015,KG,0,0.0034,0.1909,0.3968,0.1459,Asia,Central Asia,Kyrgyzstan,2010
2016,KG,0,0.0034,0.192,0.3784,0.1215,Asia,Central Asia,Kyrgyzstan,2010
2017,KG,0,0.0032,0.1832,0.393,0.1405,Asia,Central Asia,Kyrgyzstan,2010
2018,KG,0,0.0031,0.1794,0.3982,0.1416,Asia,Central Asia,Kyrgyzstan,2010
2019,KG,0,0.003,0.1687,0.4327,0.1809,Asia,Central Asia,Kyrgyzstan,2010
2020,KG,0,0.003,0.1687,0.4327,0.1809,Asia,Central Asia,Kyrgyzstan,2020
2021,KG,0,0.003,0.1687,0.4327,0.1809,Asia,Central Asia,Kyrgyzstan,2020
2022,KG,0,0.003,0.1687,0.4327,0.1809,Asia,Central Asia,Kyrgyzstan,2020
2023,KG,0,0.003,0.1687,0.4327,0.1809,Asia,Central Asia,Kyrgyzstan,2020
1980,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1981,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1982,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1983,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1984,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1985,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1986,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1987,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1988,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1989,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1980
1990,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1991,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1992,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1993,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1994,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1995,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1996,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1997,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1998,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
1999,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,1990
2000,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2001,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2002,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2003,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2004,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2005,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2006,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2007,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2008,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2009,KH,0,0.0011,0.0878,0.5574,0.2679,Asia,South-East Asia,Cambodia,2000
2010,KH,0,0.0015,0.098,0.5574,0.2766,Asia,South-East Asia,Cambodia,2010
2011,KH,0,0.0021,0.1313,0.4668,0.1937,Asia,South-East Asia,Cambodia,2010
2012,KH,0,0.0023,0.1368,0.4552,0.184,Asia,South-East Asia,Cambodia,2010
2013,KH,0,0.0023,0.1346,0.478,0.2075,Asia,South-East Asia,Cambodia,2010
2014,KH,0,0.0018,0.1384,0.4545,0.182,Asia,South-East Asia,Cambodia,2010
2015,KH,0,0.0018,0.1386,0.4543,0.1818,Asia,South-East Asia,Cambodia,2010
2016,KH,0,0.0018,0.1384,0.4546,0.1821,Asia,South-East Asia,Cambodia,2010
2017,KH,0,0.0018,0.1387,0.4543,0.1818,Asia,South-East Asia,Cambodia,2010
2018,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2010
2019,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2010
2020,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2020
2021,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2020
2022,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2020
2023,KH,0,0.0018,0.1391,0.4538,0.1813,Asia,South-East Asia,Cambodia,2020
1980,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1981,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1982,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1983,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1984,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1985,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1986,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1987,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1988,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1989,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1980
1990,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1991,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1992,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1993,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1994,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1995,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1996,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1997,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1998,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
1999,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,1990
2000,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,2000
2001,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,2000
2002,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,2000
2003,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,2000
2004,KM,0,0.0012,0.0775,0.6688000000000001,0.2911,Africa,East Africa,Comoros,2000
2005,KM,0,0.0012,0.0811,0.6521,0.2762,Africa,East Africa,Comoros,2000
2006,KM,0,0.0013,0.0848,0.6355000000000001,0.2613,Africa,East Africa,Comoros,2000
2007,KM,0,0.0013,0.0884,0.6188,0.2463,Africa,East Africa,Comoros,2000
2008,KM,0,0.0014,0.0921,0.6022000000000001,0.2314,Africa,East Africa,Comoros,2000
2009,KM,0,0.0014,0.0957,0.5855,0.2164,Africa,East Africa,Comoros,2000
2010,KM,0,0.0015,0.0994,0.5688,0.2015,Africa,East Africa,Comoros,2010
2011,KM,0,0.0015,0.103,0.5522,0.1865,Africa,East Africa,Comoros,2010
2012,KM,0,0.0016,0.1067,0.5355,0.1715,Africa,East Africa,Comoros,2010
2013,KM,0,0.0016,0.1103,0.5188,0.1566,Africa,East Africa,Comoros,2010
2014,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2015,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2016,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2017,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2018,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2019,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2010
2020,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2020
2021,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2020
2022,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2020
2023,KM,0,0.0017,0.114,0.5022,0.1416,Africa,East Africa,Comoros,2020
1980,KN,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Saint Kitts and Nevis,1980
1981,KN,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Saint Kitts and Nevis,1980
1982,KN,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Saint Kitts and Nevis,1980
1983,KN,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Saint Kitts and Nevis,1980
1984,KN,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Saint Kitts and Nevis,1980
1985,KN,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Saint Kitts and Nevis,1980
1986,KN,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Saint Kitts and Nevis,1980
1987,KN,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Saint Kitts and Nevis,1980
1988,KN,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Saint Kitts and Nevis,1980
1989,KN,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Saint Kitts and Nevis,1980
1990,KN,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Saint Kitts and Nevis,1990
1991,KN,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Saint Kitts and Nevis,1990
1992,KN,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Saint Kitts and Nevis,1990
1993,KN,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Saint Kitts and Nevis,1990
1994,KN,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Saint Kitts and Nevis,1990
1995,KN,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Saint Kitts and Nevis,1990
1996,KN,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Saint Kitts and Nevis,1990
1997,KN,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Saint Kitts and Nevis,1990
1998,KN,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Saint Kitts and Nevis,1990
1999,KN,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Saint Kitts and Nevis,1990
2000,KN,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Saint Kitts and Nevis,2000
2001,KN,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Saint Kitts and Nevis,2000
2002,KN,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Saint Kitts and Nevis,2000
2003,KN,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Saint Kitts and Nevis,2000
2004,KN,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Saint Kitts and Nevis,2000
2005,KN,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Saint Kitts and Nevis,2000
2006,KN,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Saint Kitts and Nevis,2000
2007,KN,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Saint Kitts and Nevis,2000
2008,KN,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Saint Kitts and Nevis,2000
2009,KN,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Saint Kitts and Nevis,2000
2010,KN,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Saint Kitts and Nevis,2010
2011,KN,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Saint Kitts and Nevis,2010
2012,KN,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Saint Kitts and Nevis,2010
2013,KN,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Saint Kitts and Nevis,2010
2014,KN,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Saint Kitts and Nevis,2010
2015,KN,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Saint Kitts and Nevis,2010
2016,KN,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Saint Kitts and Nevis,2010
2017,KN,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Saint Kitts and Nevis,2010
2018,KN,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2010
2019,KN,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2010
2020,KN,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2020
2021,KN,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2020
2022,KN,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2020
2023,KN,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Kitts and Nevis,2020
1980,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1981,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1982,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1983,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1984,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1985,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1986,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1987,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1988,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1989,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1980
1990,KP,0,0.0032,0.1832,0.3819,0.1188,Asia,East Asia,North Korea,1990
1991,KP,0,0.0031,0.1772,0.3851,0.1199,Asia,East Asia,North Korea,1990
1992,KP,0,0.003,0.1728,0.3911,0.122,Asia,East Asia,North Korea,1990
1993,KP,0,0.0029,0.1684,0.3979,0.1246,Asia,East Asia,North Korea,1990
1994,KP,0,0.0028,0.1665,0.4008,0.1263,Asia,East Asia,North Korea,1990
1995,KP,0,0.0029,0.1684,0.3991,0.1258,Asia,East Asia,North Korea,1990
1996,KP,0,0.0029,0.1714,0.3994,0.1273,Asia,East Asia,North Korea,1990
1997,KP,0,0.0029,0.1716,0.3997,0.1274,Asia,East Asia,North Korea,1990
1998,KP,0,0.0029,0.172,0.4016,0.1289,Asia,East Asia,North Korea,1990
1999,KP,0,0.0028,0.1678,0.4052,0.1291,Asia,East Asia,North Korea,1990
2000,KP,0,0.0026,0.1607,0.4123,0.132,Asia,East Asia,North Korea,2000
2001,KP,0,0.0025,0.1567,0.4174,0.1348,Asia,East Asia,North Korea,2000
2002,KP,0,0.0024,0.1497,0.4336,0.1429,Asia,East Asia,North Korea,2000
2003,KP,0,0.0024,0.1482,0.4342,0.1439,Asia,East Asia,North Korea,2000
2004,KP,0,0.0024,0.1484,0.4354,0.1465,Asia,East Asia,North Korea,2000
2005,KP,0,0.0023,0.1473,0.4352,0.147,Asia,East Asia,North Korea,2000
2006,KP,0,0.0024,0.1493,0.4322,0.1487,Asia,East Asia,North Korea,2000
2007,KP,0,0.0024,0.1489,0.435,0.1525,Asia,East Asia,North Korea,2000
2008,KP,0,0.0024,0.1487,0.4364,0.1535,Asia,East Asia,North Korea,2000
2009,KP,0,0.0022,0.144,0.4467,0.165,Asia,East Asia,North Korea,2000
2010,KP,0,0.0021,0.1403,0.4526,0.1681,Asia,East Asia,North Korea,2010
2011,KP,0,0.0022,0.1457,0.4438,0.1572,Asia,East Asia,North Korea,2010
2012,KP,0,0.0023,0.1511,0.429,0.1467,Asia,East Asia,North Korea,2010
2013,KP,0,0.0023,0.1498,0.4299,0.1457,Asia,East Asia,North Korea,2010
2014,KP,0,0.0024,0.1524,0.4242,0.1441,Asia,East Asia,North Korea,2010
2015,KP,0,0.0023,0.1518,0.4256,0.1465,Asia,East Asia,North Korea,2010
2016,KP,0,0.0023,0.1512,0.4266,0.1476,Asia,East Asia,North Korea,2010
2017,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2010
2018,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2010
2019,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2010
2020,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2020
2021,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2020
2022,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2020
2023,KP,0,0.0023,0.1512,0.4267,0.1476,Asia,East Asia,North Korea,2020
1980,KR,0,0.004,0.2238,0.3224,0.0764,Asia,East Asia,Korea,1980
1981,KR,0,0.004,0.2238,0.3224,0.0764,Asia,East Asia,Korea,1980
1982,KR,0,0.004,0.2238,0.3224,0.0764,Asia,East Asia,Korea,1980
1983,KR,0,0.0032,0.2434,0.3143,0.0755,Asia,East Asia,Korea,1980
1984,KR,0,0.0033,0.2473,0.3127,0.0762,Asia,East Asia,Korea,1980
1985,KR,0,0.0034,0.2514,0.311,0.0769,Asia,East Asia,Korea,1980
1986,KR,0,0.0034,0.2554,0.3093,0.0775,Asia,East Asia,Korea,1980
1987,KR,0,0.0035,0.2596,0.3074,0.0782,Asia,East Asia,Korea,1980
1988,KR,0,0.0036,0.2638,0.3055,0.0789,Asia,East Asia,Korea,1980
1989,KR,0,0.0049,0.2564,0.3084,0.0809,Asia,East Asia,Korea,1980
1990,KR,0,0.005,0.2596,0.3067,0.0818,Asia,East Asia,Korea,1990
1991,KR,0,0.0051,0.2547,0.3084,0.0836,Asia,East Asia,Korea,1990
1992,KR,0,0.0047,0.2748,0.2912,0.0752,Asia,East Asia,Korea,1990
1993,KR,0,0.0051,0.264,0.2863,0.0705,Asia,East Asia,Korea,1990
1994,KR,0,0.0037,0.2752,0.2726,0.0642,Asia,East Asia,Korea,1990
1995,KR,0,0.0037,0.2747,0.2634,0.0594,Asia,East Asia,Korea,1990
1996,KR,0,0.0047,0.2583,0.2594,0.0562,Asia,East Asia,Korea,1990
1997,KR,0,0.0036,0.2668,0.2611,0.0575,Asia,East Asia,Korea,1990
1998,KR,0,0.0034,0.2596,0.2682,0.0601,Asia,East Asia,Korea,1990
1999,KR,0,0.0033,0.2527,0.275,0.0628,Asia,East Asia,Korea,1990
2000,KR,0,0.0037,0.2298,0.2877,0.0671,Asia,East Asia,Korea,2000
2001,KR,0,0.0031,0.2395,0.2925,0.0732,Asia,East Asia,Korea,2000
2002,KR,0,0.003,0.2331,0.3031,0.0816,Asia,East Asia,Korea,2000
2003,KR,0,0.0029,0.227,0.3135,0.0909,Asia,East Asia,Korea,2000
2004,KR,0,0.0029,0.221,0.3237,0.1013,Asia,East Asia,Korea,2000
2005,KR,0,0.0028,0.2152,0.3336,0.1128,Asia,East Asia,Korea,2000
2006,KR,0,0.0033,0.2038,0.3459,0.1266,Asia,East Asia,Korea,2000
2007,KR,0,0.0031,0.1969,0.3565,0.1367,Asia,East Asia,Korea,2000
2008,KR,0,0.0032,0.1939,0.363,0.1439,Asia,East Asia,Korea,2000
2009,KR,0,0.0033,0.1992,0.3605,0.1485,Asia,East Asia,Korea,2000
2010,KR,0,0.0032,0.1947,0.3837,0.1681,Asia,East Asia,Korea,2010
2011,KR,0,0.0033,0.198,0.3777,0.1701,Asia,East Asia,Korea,2010
2012,KR,0,0.0034,0.2019,0.3734,0.1695,Asia,East Asia,Korea,2010
2013,KR,0,0.0034,0.2048,0.357,0.1377,Asia,East Asia,Korea,2010
2014,KR,0,0.0034,0.2032,0.3607,0.1478,Asia,East Asia,Korea,2010
2015,KR,0,0.0033,0.2019,0.3694,0.1585,Asia,East Asia,Korea,2010
2016,KR,0,0.0032,0.1976,0.3813,0.1608,Asia,East Asia,Korea,2010
2017,KR,0,0.0031,0.1909,0.3927,0.1713,Asia,East Asia,Korea,2010
2018,KR,0,0.003,0.185,0.3932,0.1791,Asia,East Asia,Korea,2010
2019,KR,0,0.0034,0.2039,0.3606,0.1582,Asia,East Asia,Korea,2010
2020,KR,0,0.0033,0.2036,0.3587,0.1529,Asia,East Asia,Korea,2020
2021,KR,0,0.0027,0.2115,0.3552,0.1514,Asia,East Asia,Korea,2020
2022,KR,0,0.0027,0.2115,0.3552,0.1514,Asia,East Asia,Korea,2020
2023,KR,0,0.0027,0.2115,0.3552,0.1514,Asia,East Asia,Korea,2020
1980,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1981,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1982,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1983,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1984,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1985,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1986,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1987,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1988,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1989,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1980
1990,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1991,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1992,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1993,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1994,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1995,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1996,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1997,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1998,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
1999,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,1990
2000,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,2000
2001,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,2000
2002,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,2000
2003,KS,0,0.0025,0.1812,0.3313,0.0846,Europe,Eastern Europe,Kosovo,2000
2004,KS,0,0.0024,0.1801,0.33,0.0806,Europe,Eastern Europe,Kosovo,2000
2005,KS,0,0.0023,0.1786,0.3336,0.0808,Europe,Eastern Europe,Kosovo,2000
2006,KS,0,0.0024,0.1815,0.329,0.0798,Europe,Eastern Europe,Kosovo,2000
2007,KS,0,0.0024,0.184,0.3246,0.0762,Europe,Eastern Europe,Kosovo,2000
2008,KS,0,0.0023,0.1791,0.3369,0.0878,Europe,Eastern Europe,Kosovo,2000
2009,KS,0,0.0023,0.179,0.334,0.082,Europe,Eastern Europe,Kosovo,2000
2010,KS,0,0.0023,0.1717,0.3438,0.0869,Europe,Eastern Europe,Kosovo,2010
2011,KS,0,0.0024,0.187,0.328,0.0876,Europe,Eastern Europe,Kosovo,2010
2012,KS,0,0.0023,0.1847,0.3276,0.0895,Europe,Eastern Europe,Kosovo,2010
2013,KS,0,0.0029,0.1923,0.3248,0.0924,Europe,Eastern Europe,Kosovo,2010
2014,KS,0,0.0026,0.1881,0.3287,0.0919,Europe,Eastern Europe,Kosovo,2010
2015,KS,0,0.0028,0.1885,0.3297,0.0952,Europe,Eastern Europe,Kosovo,2010
2016,KS,0,0.0028,0.1888,0.3302,0.0949,Europe,Eastern Europe,Kosovo,2010
2017,KS,0,0.0025,0.1837,0.3357,0.0962,Europe,Eastern Europe,Kosovo,2010
2018,KS,0,0.0025,0.1843,0.3334,0.0939,Europe,Eastern Europe,Kosovo,2010
2019,KS,0,0.0025,0.1855,0.3296,0.0906,Europe,Eastern Europe,Kosovo,2010
2020,KS,0,0.0026,0.1865,0.327,0.0885,Europe,Eastern Europe,Kosovo,2020
2021,KS,0,0.0026,0.1865,0.327,0.0885,Europe,Eastern Europe,Kosovo,2020
2022,KS,0,0.0026,0.1865,0.327,0.0885,Europe,Eastern Europe,Kosovo,2020
2023,KS,0,0.0026,0.1865,0.327,0.0885,Europe,Eastern Europe,Kosovo,2020
1980,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1981,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1982,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1983,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1984,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1985,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1986,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1987,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1988,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1989,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1980
1990,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1991,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1992,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1993,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1994,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1995,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1996,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1997,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1998,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
1999,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,1990
2000,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2001,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2002,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2003,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2004,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2005,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2006,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2007,KW,0,0.0018,0.1107,0.5463,0.2102,Asia,West Asia,Kuwait,2000
2008,KW,0,0.0019,0.1118,0.5454,0.2083,Asia,West Asia,Kuwait,2000
2009,KW,0,0.0019,0.113,0.5443,0.2063,Asia,West Asia,Kuwait,2000
2010,KW,0,0.002,0.1144,0.5432,0.204,Asia,West Asia,Kuwait,2010
2011,KW,0,0.002,0.1159,0.5419,0.2014,Asia,West Asia,Kuwait,2010
2012,KW,0,0.0021,0.1177,0.5404,0.1984,Asia,West Asia,Kuwait,2010
2013,KW,0,0.0022,0.1197,0.5386000000000001,0.195,Asia,West Asia,Kuwait,2010
2014,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2015,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2016,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2017,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2018,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2019,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2010
2020,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2020
2021,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2020
2022,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2020
2023,KW,0,0.0031,0.1634,0.453,0.1759,Asia,West Asia,Kuwait,2020
1980,KY,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Cayman Islands,1980
1981,KY,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Cayman Islands,1980
1982,KY,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Cayman Islands,1980
1983,KY,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Cayman Islands,1980
1984,KY,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Cayman Islands,1980
1985,KY,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Cayman Islands,1980
1986,KY,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Cayman Islands,1980
1987,KY,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Cayman Islands,1980
1988,KY,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Cayman Islands,1980
1989,KY,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Cayman Islands,1980
1990,KY,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Cayman Islands,1990
1991,KY,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Cayman Islands,1990
1992,KY,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Cayman Islands,1990
1993,KY,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Cayman Islands,1990
1994,KY,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Cayman Islands,1990
1995,KY,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Cayman Islands,1990
1996,KY,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Cayman Islands,1990
1997,KY,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Cayman Islands,1990
1998,KY,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Cayman Islands,1990
1999,KY,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Cayman Islands,1990
2000,KY,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Cayman Islands,2000
2001,KY,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Cayman Islands,2000
2002,KY,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Cayman Islands,2000
2003,KY,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Cayman Islands,2000
2004,KY,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Cayman Islands,2000
2005,KY,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Cayman Islands,2000
2006,KY,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Cayman Islands,2000
2007,KY,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Cayman Islands,2000
2008,KY,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Cayman Islands,2000
2009,KY,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Cayman Islands,2000
2010,KY,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Cayman Islands,2010
2011,KY,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Cayman Islands,2010
2012,KY,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Cayman Islands,2010
2013,KY,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Cayman Islands,2010
2014,KY,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Cayman Islands,2010
2015,KY,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Cayman Islands,2010
2016,KY,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Cayman Islands,2010
2017,KY,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Cayman Islands,2010
2018,KY,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Cayman Islands,2010
2019,KY,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Cayman Islands,2010
2020,KY,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Cayman Islands,2020
2021,KY,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Cayman Islands,2020
2022,KY,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Cayman Islands,2020
2023,KY,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Cayman Islands,2020
1980,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1981,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1982,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1983,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1984,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1985,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1986,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1987,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1988,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1989,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1980
1990,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1990
1991,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1990
1992,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1990
1993,KZ,0,0.0034,0.1956,0.3529,0.1064,Asia,Central Asia,Kazakhstan,1990
1994,KZ,0,0.0032,0.1892,0.3621,0.1039,Asia,Central Asia,Kazakhstan,1990
1995,KZ,0,0.0029,0.172,0.3861,0.114,Asia,Central Asia,Kazakhstan,1990
1996,KZ,0,0.0025,0.1562,0.4082,0.1228,Asia,Central Asia,Kazakhstan,1990
1997,KZ,0,0.0025,0.1538,0.4141,0.1286,Asia,Central Asia,Kazakhstan,1990
1998,KZ,0,0.0023,0.1466,0.426,0.1408,Asia,Central Asia,Kazakhstan,1990
1999,KZ,0,0.0023,0.1467,0.428,0.1427,Asia,Central Asia,Kazakhstan,1990
2000,KZ,0,0.0023,0.145,0.4321,0.1469,Asia,Central Asia,Kazakhstan,2000
2001,KZ,0,0.0022,0.1422,0.4374,0.1522,Asia,Central Asia,Kazakhstan,2000
2002,KZ,0,0.0022,0.1394,0.4437,0.1618,Asia,Central Asia,Kazakhstan,2000
2003,KZ,0,0.0023,0.1464,0.4289,0.1511,Asia,Central Asia,Kazakhstan,2000
2004,KZ,0,0.0029,0.1754,0.3976,0.1288,Asia,Central Asia,Kazakhstan,2000
2005,KZ,0,0.0027,0.1614,0.4201,0.1558,Asia,Central Asia,Kazakhstan,2000
2006,KZ,0,0.0027,0.1605,0.4257,0.1659,Asia,Central Asia,Kazakhstan,2000
2007,KZ,0,0.0029,0.171,0.4096,0.1518,Asia,Central Asia,Kazakhstan,2000
2008,KZ,0,0.0028,0.1651,0.4119,0.151,Asia,Central Asia,Kazakhstan,2000
2009,KZ,0,0.0026,0.1565,0.4182,0.1567,Asia,Central Asia,Kazakhstan,2000
2010,KZ,0,0.0027,0.1601,0.4138,0.1518,Asia,Central Asia,Kazakhstan,2010
2011,KZ,0,0.003,0.1729,0.3948,0.1379,Asia,Central Asia,Kazakhstan,2010
2012,KZ,0,0.0029,0.1698,0.3972,0.1397,Asia,Central Asia,Kazakhstan,2010
2013,KZ,0,0.0029,0.1715,0.3974,0.1418,Asia,Central Asia,Kazakhstan,2010
2014,KZ,0,0.0032,0.1815,0.3879,0.1384,Asia,Central Asia,Kazakhstan,2010
2015,KZ,0,0.0035,0.1943,0.373,0.1271,Asia,Central Asia,Kazakhstan,2010
2016,KZ,0,0.0029,0.1671,0.4047,0.1461,Asia,Central Asia,Kazakhstan,2010
2017,KZ,0,0.0028,0.1656,0.4077,0.148,Asia,Central Asia,Kazakhstan,2010
2018,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2010
2019,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2010
2020,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2020
2021,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2020
2022,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2020
2023,KZ,0,0.0028,0.1644,0.412,0.1488,Asia,Central Asia,Kazakhstan,2020
1980,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1981,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1982,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1983,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1984,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1985,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1986,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1987,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1988,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1989,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1980
1990,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1990
1991,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1990
1992,LA,0,0.0024,0.1427,0.4568,0.1706,Asia,South-East Asia,Lao PDR,1990
1993,LA,0,0.0024,0.1423,0.4608,0.176,Asia,South-East Asia,Lao PDR,1990
1994,LA,0,0.0023,0.1412,0.4651,0.1815,Asia,South-East Asia,Lao PDR,1990
1995,LA,0,0.0023,0.1407,0.4685,0.186,Asia,South-East Asia,Lao PDR,1990
1996,LA,0,0.0023,0.1408,0.4712,0.1897,Asia,South-East Asia,Lao PDR,1990
1997,LA,0,0.0023,0.1405,0.474,0.1933,Asia,South-East Asia,Lao PDR,1990
1998,LA,0,0.0023,0.1417,0.4697,0.1897,Asia,South-East Asia,Lao PDR,1990
1999,LA,0,0.0024,0.143,0.4655,0.1862,Asia,South-East Asia,Lao PDR,1990
2000,LA,0,0.0023,0.1411,0.4644,0.1856,Asia,South-East Asia,Lao PDR,2000
2001,LA,0,0.0023,0.1406,0.4623,0.184,Asia,South-East Asia,Lao PDR,2000
2002,LA,0,0.0023,0.1424,0.4578,0.1801,Asia,South-East Asia,Lao PDR,2000
2003,LA,0,0.0024,0.1426,0.4598,0.1815,Asia,South-East Asia,Lao PDR,2000
2004,LA,0,0.0023,0.1407,0.4637,0.1847,Asia,South-East Asia,Lao PDR,2000
2005,LA,0,0.0023,0.1402,0.466,0.1865,Asia,South-East Asia,Lao PDR,2000
2006,LA,0,0.0023,0.1402,0.4677,0.1877,Asia,South-East Asia,Lao PDR,2000
2007,LA,0,0.0023,0.1396,0.4699,0.1894,Asia,South-East Asia,Lao PDR,2000
2008,LA,0,0.0023,0.1398,0.4668,0.1853,Asia,South-East Asia,Lao PDR,2000
2009,LA,0,0.0023,0.1387,0.4654,0.1831,Asia,South-East Asia,Lao PDR,2000
2010,LA,0,0.0023,0.1387,0.4633,0.1802,Asia,South-East Asia,Lao PDR,2010
2011,LA,0,0.0023,0.1395,0.4607,0.177,Asia,South-East Asia,Lao PDR,2010
2012,LA,0,0.0023,0.141,0.4575,0.1732,Asia,South-East Asia,Lao PDR,2010
2013,LA,0,0.0023,0.1385,0.4629,0.1782,Asia,South-East Asia,Lao PDR,2010
2014,LA,0,0.0022,0.1354,0.4685,0.1836,Asia,South-East Asia,Lao PDR,2010
2015,LA,0,0.0022,0.1336,0.4726,0.1874,Asia,South-East Asia,Lao PDR,2010
2016,LA,0,0.0021,0.1315,0.4768,0.1913,Asia,South-East Asia,Lao PDR,2010
2017,LA,0,0.0021,0.13,0.4801,0.1944,Asia,South-East Asia,Lao PDR,2010
2018,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2010
2019,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2010
2020,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2020
2021,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2020
2022,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2020
2023,LA,0,0.0021,0.1289,0.483,0.1971,Asia,South-East Asia,Lao PDR,2020
1980,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1981,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1982,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1983,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1984,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1985,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1986,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1987,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1988,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1989,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1980
1990,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1991,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1992,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1993,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1994,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1995,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1996,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1997,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1998,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
1999,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,1990
2000,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2001,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2002,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2003,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2004,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2005,LB,0,0.002,0.1219,0.5107,0.2034,Asia,West Asia,Lebanon,2000
2006,LB,0,0.002,0.1221,0.5072,0.2027,Asia,West Asia,Lebanon,2000
2007,LB,0,0.0016,0.1035,0.5527000000000001,0.2201,Asia,West Asia,Lebanon,2000
2008,LB,0,0.0016,0.1034,0.5566,0.2197,Asia,West Asia,Lebanon,2000
2009,LB,0,0.0017,0.1097,0.545,0.2052,Asia,West Asia,Lebanon,2000
2010,LB,0,0.0017,0.1064,0.5526,0.2098,Asia,West Asia,Lebanon,2010
2011,LB,0,0.0016,0.1041,0.5568000000000001,0.2144,Asia,West Asia,Lebanon,2010
2012,LB,0,0.0016,0.1017,0.5626,0.2178,Asia,West Asia,Lebanon,2010
2013,LB,0,0.0017,0.1052,0.5593,0.211,Asia,West Asia,Lebanon,2010
2014,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2015,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2016,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2017,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2018,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2019,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2010
2020,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2020
2021,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2020
2022,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2020
2023,LB,0,0.0017,0.1055,0.5554,0.2134,Asia,West Asia,Lebanon,2020
1980,LC,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Saint Lucia,1980
1981,LC,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Saint Lucia,1980
1982,LC,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Saint Lucia,1980
1983,LC,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Saint Lucia,1980
1984,LC,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Saint Lucia,1980
1985,LC,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Saint Lucia,1980
1986,LC,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Saint Lucia,1980
1987,LC,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Saint Lucia,1980
1988,LC,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Saint Lucia,1980
1989,LC,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Saint Lucia,1980
1990,LC,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Saint Lucia,1990
1991,LC,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Saint Lucia,1990
1992,LC,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Saint Lucia,1990
1993,LC,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Saint Lucia,1990
1994,LC,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Saint Lucia,1990
1995,LC,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Saint Lucia,1990
1996,LC,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Saint Lucia,1990
1997,LC,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Saint Lucia,1990
1998,LC,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Saint Lucia,1990
1999,LC,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Saint Lucia,1990
2000,LC,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Saint Lucia,2000
2001,LC,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Saint Lucia,2000
2002,LC,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Saint Lucia,2000
2003,LC,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Saint Lucia,2000
2004,LC,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Saint Lucia,2000
2005,LC,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Saint Lucia,2000
2006,LC,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Saint Lucia,2000
2007,LC,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Saint Lucia,2000
2008,LC,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Saint Lucia,2000
2009,LC,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Saint Lucia,2000
2010,LC,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Saint Lucia,2010
2011,LC,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Saint Lucia,2010
2012,LC,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Saint Lucia,2010
2013,LC,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Saint Lucia,2010
2014,LC,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Saint Lucia,2010
2015,LC,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Saint Lucia,2010
2016,LC,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Saint Lucia,2010
2017,LC,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Saint Lucia,2010
2018,LC,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Saint Lucia,2010
2019,LC,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Saint Lucia,2010
2020,LC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Lucia,2020
2021,LC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Lucia,2020
2022,LC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Lucia,2020
2023,LC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Lucia,2020
1980,LI,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Liechtenstein,1980
1981,LI,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Liechtenstein,1980
1982,LI,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Liechtenstein,1980
1983,LI,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Liechtenstein,1980
1984,LI,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Liechtenstein,1980
1985,LI,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Liechtenstein,1980
1986,LI,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Liechtenstein,1980
1987,LI,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Liechtenstein,1980
1988,LI,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Liechtenstein,1980
1989,LI,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Liechtenstein,1980
1990,LI,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Liechtenstein,1990
1991,LI,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Liechtenstein,1990
1992,LI,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Liechtenstein,1990
1993,LI,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Liechtenstein,1990
1994,LI,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Liechtenstein,1990
1995,LI,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Liechtenstein,1990
1996,LI,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Liechtenstein,1990
1997,LI,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Liechtenstein,1990
1998,LI,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Liechtenstein,1990
1999,LI,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Liechtenstein,1990
2000,LI,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Liechtenstein,2000
2001,LI,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Liechtenstein,2000
2002,LI,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Liechtenstein,2000
2003,LI,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Liechtenstein,2000
2004,LI,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Liechtenstein,2000
2005,LI,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Liechtenstein,2000
2006,LI,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Liechtenstein,2000
2007,LI,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Liechtenstein,2000
2008,LI,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Liechtenstein,2000
2009,LI,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Liechtenstein,2000
2010,LI,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Liechtenstein,2010
2011,LI,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Liechtenstein,2010
2012,LI,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Liechtenstein,2010
2013,LI,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Liechtenstein,2010
2014,LI,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Liechtenstein,2010
2015,LI,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Liechtenstein,2010
2016,LI,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Liechtenstein,2010
2017,LI,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Liechtenstein,2010
2018,LI,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Liechtenstein,2010
2019,LI,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Liechtenstein,2010
2020,LI,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Liechtenstein,2020
2021,LI,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Liechtenstein,2020
2022,LI,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Liechtenstein,2020
2023,LI,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Liechtenstein,2020
1980,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1981,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1982,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1983,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1984,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1985,LK,0,0.0028,0.1665,0.4223,0.1477,Asia,South Asia,Sri Lanka,1980
1986,LK,0,0.0028,0.1659,0.4276,0.1541,Asia,South Asia,Sri Lanka,1980
1987,LK,0,0.0028,0.1652,0.4326,0.1602,Asia,South Asia,Sri Lanka,1980
1988,LK,0,0.0028,0.1646,0.4374,0.166,Asia,South Asia,Sri Lanka,1980
1989,LK,0,0.0028,0.1641,0.4419,0.1715,Asia,South Asia,Sri Lanka,1980
1990,LK,0,0.0028,0.1635,0.4462,0.1767,Asia,South Asia,Sri Lanka,1990
1991,LK,0,0.0028,0.1609,0.4478,0.1731,Asia,South Asia,Sri Lanka,1990
1992,LK,0,0.0027,0.1585,0.4493,0.1698,Asia,South Asia,Sri Lanka,1990
1993,LK,0,0.0027,0.1562,0.4506,0.1668,Asia,South Asia,Sri Lanka,1990
1994,LK,0,0.0026,0.1542,0.4519,0.1641,Asia,South Asia,Sri Lanka,1990
1995,LK,0,0.0026,0.1523,0.453,0.1616,Asia,South Asia,Sri Lanka,1990
1996,LK,0,0.0025,0.1482,0.4618,0.1692,Asia,South Asia,Sri Lanka,1990
1997,LK,0,0.0024,0.1443,0.4702,0.1765,Asia,South Asia,Sri Lanka,1990
1998,LK,0,0.0024,0.1409,0.4778,0.1829,Asia,South Asia,Sri Lanka,1990
1999,LK,0,0.0023,0.1368,0.4857,0.19,Asia,South Asia,Sri Lanka,1990
2000,LK,0,0.0022,0.1334,0.4926,0.196,Asia,South Asia,Sri Lanka,2000
2001,LK,0,0.0022,0.1305,0.499,0.2016,Asia,South Asia,Sri Lanka,2000
2002,LK,0,0.0021,0.1264,0.5058,0.2079,Asia,South Asia,Sri Lanka,2000
2003,LK,0,0.0021,0.1267,0.5038,0.21,Asia,South Asia,Sri Lanka,2000
2004,LK,0,0.0021,0.1288,0.5009,0.2106,Asia,South Asia,Sri Lanka,2000
2005,LK,0,0.0021,0.1301,0.4985,0.2115,Asia,South Asia,Sri Lanka,2000
2006,LK,0,0.0021,0.1307,0.4968,0.2128,Asia,South Asia,Sri Lanka,2000
2007,LK,0,0.0022,0.1346,0.4871,0.205,Asia,South Asia,Sri Lanka,2000
2008,LK,0,0.0024,0.143,0.4744,0.194,Asia,South Asia,Sri Lanka,2000
2009,LK,0,0.0025,0.1484,0.4642,0.1856,Asia,South Asia,Sri Lanka,2000
2010,LK,0,0.0024,0.1421,0.4755,0.1959,Asia,South Asia,Sri Lanka,2010
2011,LK,0,0.0024,0.1414,0.481,0.2007,Asia,South Asia,Sri Lanka,2010
2012,LK,0,0.0023,0.1396,0.4866,0.2057,Asia,South Asia,Sri Lanka,2010
2013,LK,0,0.0023,0.1396,0.4878,0.2058,Asia,South Asia,Sri Lanka,2010
2014,LK,0,0.0024,0.1402,0.4885,0.2054,Asia,South Asia,Sri Lanka,2010
2015,LK,0,0.0024,0.1416,0.4886,0.2045,Asia,South Asia,Sri Lanka,2010
2016,LK,0,0.0024,0.1414,0.4898,0.2047,Asia,South Asia,Sri Lanka,2010
2017,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2010
2018,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2010
2019,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2010
2020,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2020
2021,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2020
2022,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2020
2023,LK,0,0.0024,0.1413,0.4898,0.2047,Asia,South Asia,Sri Lanka,2020
1980,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1981,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1982,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1983,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1984,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1985,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1986,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1987,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1988,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1989,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1980
1990,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1991,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1992,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1993,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1994,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1995,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1996,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1997,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1998,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
1999,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,1990
2000,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2001,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2002,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2003,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2004,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2005,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2006,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2007,LR,0,0.0025,0.1541,0.4464,0.1271,Africa,West Africa,Liberia,2000
2008,LR,0,0.0025,0.1556,0.4425,0.1245,Africa,West Africa,Liberia,2000
2009,LR,0,0.0025,0.1571,0.4386,0.1218,Africa,West Africa,Liberia,2000
2010,LR,0,0.0025,0.1586,0.4347,0.1192,Africa,West Africa,Liberia,2010
2011,LR,0,0.0026,0.1601,0.4307,0.1165,Africa,West Africa,Liberia,2010
2012,LR,0,0.0026,0.1616,0.4268,0.1138,Africa,West Africa,Liberia,2010
2013,LR,0,0.0026,0.1631,0.4228,0.1112,Africa,West Africa,Liberia,2010
2014,LR,0,0.0027,0.1646,0.4189,0.1085,Africa,West Africa,Liberia,2010
2015,LR,0,0.0026,0.1595,0.4255,0.1151,Africa,West Africa,Liberia,2010
2016,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2010
2017,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2010
2018,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2010
2019,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2010
2020,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2020
2021,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2020
2022,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2020
2023,LR,0,0.0025,0.1544,0.4321,0.1217,Africa,West Africa,Liberia,2020
1980,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1981,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1982,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1983,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1984,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1985,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1986,LS,0,0.001,0.0743,0.6113000000000001,0.2341,Africa,South Africa,Lesotho,1980
1987,LS,0,0.0009,0.0713,0.6153000000000001,0.2329,Africa,South Africa,Lesotho,1980
1988,LS,0,0.0009,0.0682,0.6194000000000001,0.2316,Africa,South Africa,Lesotho,1980
1989,LS,0,0.0008,0.0652,0.6234000000000001,0.2303,Africa,South Africa,Lesotho,1980
1990,LS,0,0.0008,0.0621,0.6274000000000001,0.229,Africa,South Africa,Lesotho,1990
1991,LS,0,0.0007,0.0591,0.6314000000000001,0.2277,Africa,South Africa,Lesotho,1990
1992,LS,0,0.0007,0.0561,0.6354000000000001,0.2264,Africa,South Africa,Lesotho,1990
1993,LS,0,0.0006,0.0531,0.6395000000000001,0.2251,Africa,South Africa,Lesotho,1990
1994,LS,0,0.0006,0.05,0.6435000000000001,0.2239,Africa,South Africa,Lesotho,1990
1995,LS,0,0.0007,0.0552,0.632,0.2189,Africa,South Africa,Lesotho,1990
1996,LS,0,0.0007,0.0603,0.6205,0.214,Africa,South Africa,Lesotho,1990
1997,LS,0,0.0008,0.0654,0.6089,0.2091,Africa,South Africa,Lesotho,1990
1998,LS,0,0.0009,0.0706,0.5974,0.2041,Africa,South Africa,Lesotho,1990
1999,LS,0,0.001,0.0757,0.5859,0.1992,Africa,South Africa,Lesotho,1990
2000,LS,0,0.0011,0.0808,0.5744,0.1942,Africa,South Africa,Lesotho,2000
2001,LS,0,0.0011,0.086,0.5628000000000001,0.1893,Africa,South Africa,Lesotho,2000
2002,LS,0,0.0012,0.0911,0.5513,0.1843,Africa,South Africa,Lesotho,2000
2003,LS,0,0.0012,0.0926,0.5475,0.1817,Africa,South Africa,Lesotho,2000
2004,LS,0,0.0013,0.094,0.5438000000000001,0.179,Africa,South Africa,Lesotho,2000
2005,LS,0,0.0013,0.0955,0.54,0.1764,Africa,South Africa,Lesotho,2000
2006,LS,0,0.0013,0.0969,0.5363,0.1737,Africa,South Africa,Lesotho,2000
2007,LS,0,0.0013,0.0984,0.5325,0.1711,Africa,South Africa,Lesotho,2000
2008,LS,0,0.0014,0.0998,0.5288,0.1684,Africa,South Africa,Lesotho,2000
2009,LS,0,0.0014,0.1012,0.525,0.1658,Africa,South Africa,Lesotho,2000
2010,LS,0,0.0014,0.1027,0.5213,0.1631,Africa,South Africa,Lesotho,2010
2011,LS,0,0.0015,0.1041,0.5175000000000001,0.1604,Africa,South Africa,Lesotho,2010
2012,LS,0,0.0015,0.1056,0.5137,0.1578,Africa,South Africa,Lesotho,2010
2013,LS,0,0.0015,0.107,0.51,0.1551,Africa,South Africa,Lesotho,2010
2014,LS,0,0.0015,0.1085,0.5062,0.1525,Africa,South Africa,Lesotho,2010
2015,LS,0,0.0016,0.11,0.5024000000000001,0.1498,Africa,South Africa,Lesotho,2010
2016,LS,0,0.0016,0.1114,0.4987,0.1471,Africa,South Africa,Lesotho,2010
2017,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2010
2018,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2010
2019,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2010
2020,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2020
2021,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2020
2022,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2020
2023,LS,0,0.0016,0.1129,0.4949,0.1445,Africa,South Africa,Lesotho,2020
1980,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1981,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1982,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1983,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1984,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1985,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1986,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1987,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1988,LT,0,0.0046,0.2517,0.2457,0.0451,Europe,Eastern Europe,Lithuania,1980
1989,LT,0,0.0044,0.2406,0.2672,0.055,Europe,Eastern Europe,Lithuania,1980
1990,LT,0,0.0043,0.2291,0.2868,0.0637,Europe,Eastern Europe,Lithuania,1990
1991,LT,0,0.0041,0.2184,0.3044,0.0708,Europe,Eastern Europe,Lithuania,1990
1992,LT,0,0.0039,0.2075,0.3246,0.0811,Europe,Eastern Europe,Lithuania,1990
1993,LT,0,0.0037,0.1965,0.3452,0.0898,Europe,Eastern Europe,Lithuania,1990
1994,LT,0,0.0032,0.1828,0.3498,0.0943,Europe,Eastern Europe,Lithuania,1990
1995,LT,0,0.0031,0.1826,0.3494,0.0933,Europe,Eastern Europe,Lithuania,1990
1996,LT,0,0.0031,0.1795,0.3549,0.0965,Europe,Eastern Europe,Lithuania,1990
1997,LT,0,0.0031,0.1812,0.3505,0.0926,Europe,Eastern Europe,Lithuania,1990
1998,LT,0,0.0031,0.1834,0.3453,0.0885,Europe,Eastern Europe,Lithuania,1990
1999,LT,0,0.0031,0.1854,0.3429,0.0867,Europe,Eastern Europe,Lithuania,1990
2000,LT,0,0.0031,0.1857,0.3415,0.0855,Europe,Eastern Europe,Lithuania,2000
2001,LT,0,0.0031,0.1831,0.3469,0.0885,Europe,Eastern Europe,Lithuania,2000
2002,LT,0,0.003,0.1826,0.3495,0.0893,Europe,Eastern Europe,Lithuania,2000
2003,LT,0,0.003,0.1813,0.3534,0.0916,Europe,Eastern Europe,Lithuania,2000
2004,LT,0,0.0031,0.1796,0.3509,0.0856,Europe,Eastern Europe,Lithuania,2000
2005,LT,0,0.0032,0.1774,0.3558,0.0952,Europe,Eastern Europe,Lithuania,2000
2006,LT,0,0.0033,0.1877,0.3347,0.0852,Europe,Eastern Europe,Lithuania,2000
2007,LT,0,0.0031,0.1831,0.3674,0.1147,Europe,Eastern Europe,Lithuania,2000
2008,LT,0,0.0032,0.1826,0.3709,0.1176,Europe,Eastern Europe,Lithuania,2000
2009,LT,0,0.0029,0.185,0.3717,0.1091,Europe,Eastern Europe,Lithuania,2000
2010,LT,0,0.0032,0.1973,0.346,0.0915,Europe,Eastern Europe,Lithuania,2010
2011,LT,0,0.0035,0.196,0.3467,0.0956,Europe,Eastern Europe,Lithuania,2010
2012,LT,0,0.0032,0.1864,0.3716,0.1129,Europe,Eastern Europe,Lithuania,2010
2013,LT,0,0.0032,0.1809,0.3784,0.1179,Europe,Eastern Europe,Lithuania,2010
2014,LT,0,0.0028,0.1642,0.4095,0.1437,Europe,Eastern Europe,Lithuania,2010
2015,LT,0,0.0029,0.1743,0.3706,0.1077,Europe,Eastern Europe,Lithuania,2010
2016,LT,0,0.003,0.1758,0.3686,0.107,Europe,Eastern Europe,Lithuania,2010
2017,LT,0,0.0029,0.1719,0.3814,0.1189,Europe,Eastern Europe,Lithuania,2010
2018,LT,0,0.0031,0.1793,0.3697,0.1121,Europe,Eastern Europe,Lithuania,2010
2019,LT,0,0.0031,0.183,0.355,0.0999,Europe,Eastern Europe,Lithuania,2010
2020,LT,0,0.0032,0.1855,0.349,0.0961,Europe,Eastern Europe,Lithuania,2020
2021,LT,0,0.0032,0.1855,0.349,0.0961,Europe,Eastern Europe,Lithuania,2020
2022,LT,0,0.0032,0.1855,0.349,0.0961,Europe,Eastern Europe,Lithuania,2020
2023,LT,0,0.0032,0.1855,0.349,0.0961,Europe,Eastern Europe,Lithuania,2020
1980,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1981,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1982,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1983,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1984,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1985,LU,0,0.0039,0.217,0.3506,0.1288,Europe,Western Europe,Luxembourg,1980
1986,LU,0,0.0039,0.2178,0.3513,0.1298,Europe,Western Europe,Luxembourg,1980
1987,LU,0,0.0039,0.2155,0.3534,0.131,Europe,Western Europe,Luxembourg,1980
1988,LU,0,0.0038,0.2147,0.3545,0.1321,Europe,Western Europe,Luxembourg,1980
1989,LU,0,0.0038,0.2145,0.3562,0.1333,Europe,Western Europe,Luxembourg,1980
1990,LU,0,0.0038,0.2142,0.3568,0.1342,Europe,Western Europe,Luxembourg,1990
1991,LU,0,0.0038,0.2131,0.3588,0.1339,Europe,Western Europe,Luxembourg,1990
1992,LU,0,0.0038,0.2143,0.3572,0.1338,Europe,Western Europe,Luxembourg,1990
1993,LU,0,0.0038,0.2121,0.3614,0.1358,Europe,Western Europe,Luxembourg,1990
1994,LU,0,0.0038,0.2122,0.3614,0.1365,Europe,Western Europe,Luxembourg,1990
1995,LU,0,0.0037,0.209,0.3644,0.1379,Europe,Western Europe,Luxembourg,1990
1996,LU,0,0.0037,0.2063,0.3664,0.1403,Europe,Western Europe,Luxembourg,1990
1997,LU,0,0.0035,0.1984,0.3806,0.1521,Europe,Western Europe,Luxembourg,1990
1998,LU,0,0.0034,0.1899,0.4013,0.1706,Europe,Western Europe,Luxembourg,1990
1999,LU,0,0.0034,0.1919,0.3962,0.1645,Europe,Western Europe,Luxembourg,1990
2000,LU,0,0.0033,0.1881,0.4048,0.1724,Europe,Western Europe,Luxembourg,2000
2001,LU,0,0.0034,0.1912,0.3979,0.1644,Europe,Western Europe,Luxembourg,2000
2002,LU,0,0.0036,0.1999,0.3769,0.1441,Europe,Western Europe,Luxembourg,2000
2003,LU,0,0.0035,0.2011,0.3794,0.1448,Europe,Western Europe,Luxembourg,2000
2004,LU,0,0.0032,0.1839,0.42,0.1812,Europe,Western Europe,Luxembourg,2000
2005,LU,0,0.0033,0.1828,0.4261,0.1851,Europe,Western Europe,Luxembourg,2000
2006,LU,0,0.0034,0.1938,0.3917,0.1557,Europe,Western Europe,Luxembourg,2000
2007,LU,0,0.0032,0.183,0.4229,0.1853,Europe,Western Europe,Luxembourg,2000
2008,LU,0,0.0032,0.1846,0.4074,0.1738,Europe,Western Europe,Luxembourg,2000
2009,LU,0,0.0035,0.1998,0.3701,0.1407,Europe,Western Europe,Luxembourg,2000
2010,LU,0,0.0036,0.2024,0.3625,0.1355,Europe,Western Europe,Luxembourg,2010
2011,LU,0,0.0034,0.1994,0.3555,0.1291,Europe,Western Europe,Luxembourg,2010
2012,LU,0,0.0032,0.1865,0.3875,0.1586,Europe,Western Europe,Luxembourg,2010
2013,LU,0,0.0033,0.1955,0.3623,0.1358,Europe,Western Europe,Luxembourg,2010
2014,LU,0,0.0034,0.1981,0.364,0.1362,Europe,Western Europe,Luxembourg,2010
2015,LU,0,0.0034,0.2068,0.3345,0.1064,Europe,Western Europe,Luxembourg,2010
2016,LU,0,0.0031,0.1963,0.3475,0.121,Europe,Western Europe,Luxembourg,2010
2017,LU,0,0.003,0.1868,0.3736,0.1434,Europe,Western Europe,Luxembourg,2010
2018,LU,0,0.0031,0.1893,0.3652,0.1353,Europe,Western Europe,Luxembourg,2010
2019,LU,0,0.0032,0.1949,0.352,0.122,Europe,Western Europe,Luxembourg,2010
2020,LU,0,0.0031,0.1919,0.3603,0.1311,Europe,Western Europe,Luxembourg,2020
2021,LU,0,0.0031,0.1919,0.3603,0.1311,Europe,Western Europe,Luxembourg,2020
2022,LU,0,0.0031,0.1919,0.3603,0.1311,Europe,Western Europe,Luxembourg,2020
2023,LU,0,0.0031,0.1919,0.3603,0.1311,Europe,Western Europe,Luxembourg,2020
1980,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1981,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1982,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1983,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1984,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1985,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1986,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1987,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1988,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1989,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1980
1990,LV,0,0.0036,0.2043,0.3036,0.0533,Europe,Eastern Europe,Latvia,1990
1991,LV,0,0.0035,0.2032,0.3093,0.0574,Europe,Eastern Europe,Latvia,1990
1992,LV,0,0.0035,0.2008,0.3154,0.0629,Europe,Eastern Europe,Latvia,1990
1993,LV,0,0.0034,0.1982,0.3223,0.0688,Europe,Eastern Europe,Latvia,1990
1994,LV,0,0.0031,0.1879,0.3486,0.0872,Europe,Eastern Europe,Latvia,1990
1995,LV,0,0.0028,0.1775,0.3743,0.1077,Europe,Eastern Europe,Latvia,1990
1996,LV,0,0.0026,0.1764,0.3617,0.1093,Europe,Eastern Europe,Latvia,1990
1997,LV,0,0.0025,0.1661,0.3785,0.1072,Europe,Eastern Europe,Latvia,1990
1998,LV,0,0.0025,0.1703,0.3682,0.1059,Europe,Eastern Europe,Latvia,1990
1999,LV,0,0.0024,0.166,0.3727,0.1098,Europe,Eastern Europe,Latvia,1990
2000,LV,0,0.0025,0.1677,0.3719,0.1071,Europe,Eastern Europe,Latvia,2000
2001,LV,0,0.0025,0.1687,0.3642,0.1029,Europe,Eastern Europe,Latvia,2000
2002,LV,0,0.0024,0.1651,0.375,0.1105,Europe,Eastern Europe,Latvia,2000
2003,LV,0,0.0025,0.1606,0.389,0.1057,Europe,Eastern Europe,Latvia,2000
2004,LV,0,0.003,0.1728,0.3783,0.1148,Europe,Eastern Europe,Latvia,2000
2005,LV,0,0.0026,0.1581,0.3965,0.1192,Europe,Eastern Europe,Latvia,2000
2006,LV,0,0.003,0.1687,0.3552,0.0962,Europe,Eastern Europe,Latvia,2000
2007,LV,0,0.0025,0.1498,0.3821,0.1065,Europe,Eastern Europe,Latvia,2000
2008,LV,0,0.0028,0.1591,0.3743,0.1057,Europe,Eastern Europe,Latvia,2000
2009,LV,0,0.0031,0.1807,0.3786,0.1138,Europe,Eastern Europe,Latvia,2000
2010,LV,0,0.0025,0.1916,0.3606,0.0962,Europe,Eastern Europe,Latvia,2010
2011,LV,0,0.0031,0.1854,0.3693,0.103,Europe,Eastern Europe,Latvia,2010
2012,LV,0,0.0032,0.1804,0.3735,0.1106,Europe,Eastern Europe,Latvia,2010
2013,LV,0,0.0032,0.1781,0.375,0.1141,Europe,Eastern Europe,Latvia,2010
2014,LV,0,0.0032,0.178,0.368,0.1073,Europe,Eastern Europe,Latvia,2010
2015,LV,0,0.0032,0.1801,0.3584,0.1019,Europe,Eastern Europe,Latvia,2010
2016,LV,0,0.0032,0.1828,0.3418,0.0873,Europe,Eastern Europe,Latvia,2010
2017,LV,0,0.0029,0.1745,0.3572,0.0961,Europe,Eastern Europe,Latvia,2010
2018,LV,0,0.0029,0.1747,0.3512,0.0957,Europe,Eastern Europe,Latvia,2010
2019,LV,0,0.0027,0.1707,0.3456,0.0892,Europe,Eastern Europe,Latvia,2010
2020,LV,0,0.0029,0.1774,0.3441,0.0912,Europe,Eastern Europe,Latvia,2020
2021,LV,0,0.003,0.185,0.3466,0.1009,Europe,Eastern Europe,Latvia,2020
2022,LV,0,0.003,0.1827,0.3539,0.1084,Europe,Eastern Europe,Latvia,2020
2023,LV,0,0.003,0.183,0.3529,0.1073,Europe,Eastern Europe,Latvia,2020
1980,LY,0,0.0025,0.151,0.4687,0.1626,Africa,North Africa,Libya,1980
1981,LY,0,0.0025,0.151,0.4687,0.1626,Africa,North Africa,Libya,1980
1982,LY,0,0.0025,0.1509,0.4687,0.1627,Africa,North Africa,Libya,1980
1983,LY,0,0.0025,0.1509,0.4688000000000001,0.1628,Africa,North Africa,Libya,1980
1984,LY,0,0.0025,0.1508,0.4689,0.163,Africa,North Africa,Libya,1980
1985,LY,0,0.0025,0.1507,0.4683,0.1611,Africa,North Africa,Libya,1980
1986,LY,0,0.0025,0.1506,0.4676,0.1591,Africa,North Africa,Libya,1980
1987,LY,0,0.0025,0.1505,0.4669,0.1571,Africa,North Africa,Libya,1980
1988,LY,0,0.0025,0.1505,0.4662,0.1551,Africa,North Africa,Libya,1980
1989,LY,0,0.0025,0.1505,0.4655,0.1531,Africa,North Africa,Libya,1980
1990,LY,0,0.0025,0.1504,0.4648,0.1511,Africa,North Africa,Libya,1990
1991,LY,0,0.0025,0.1504,0.4649,0.1512,Africa,North Africa,Libya,1990
1992,LY,0,0.0025,0.1504,0.4651,0.1513,Africa,North Africa,Libya,1990
1993,LY,0,0.0025,0.1504,0.4653,0.1514,Africa,North Africa,Libya,1990
1994,LY,0,0.0025,0.1504,0.4654,0.1514,Africa,North Africa,Libya,1990
1995,LY,0,0.0025,0.1504,0.4655,0.1514,Africa,North Africa,Libya,1990
1996,LY,0,0.0025,0.1505,0.4656,0.1515,Africa,North Africa,Libya,1990
1997,LY,0,0.0025,0.1505,0.4657,0.1515,Africa,North Africa,Libya,1990
1998,LY,0,0.0025,0.1505,0.4658,0.1515,Africa,North Africa,Libya,1990
1999,LY,0,0.0025,0.1499,0.4674,0.1532,Africa,North Africa,Libya,1990
2000,LY,0,0.0024,0.1494,0.4689,0.1549,Africa,North Africa,Libya,2000
2001,LY,0,0.0024,0.1494,0.4694,0.1552,Africa,North Africa,Libya,2000
2002,LY,0,0.0024,0.1494,0.4698,0.1556,Africa,North Africa,Libya,2000
2003,LY,0,0.0024,0.1494,0.4702,0.1559,Africa,North Africa,Libya,2000
2004,LY,0,0.0025,0.1494,0.4706,0.1562,Africa,North Africa,Libya,2000
2005,LY,0,0.0025,0.1498,0.4707,0.1571,Africa,North Africa,Libya,2000
2006,LY,0,0.0025,0.1503,0.4703,0.1578,Africa,North Africa,Libya,2000
2007,LY,0,0.0025,0.1508,0.4691,0.1577,Africa,North Africa,Libya,2000
2008,LY,0,0.0025,0.1514,0.468,0.1576,Africa,North Africa,Libya,2000
2009,LY,0,0.0025,0.1525,0.4643,0.1541,Africa,North Africa,Libya,2000
2010,LY,0,0.0025,0.1536,0.4614,0.1517,Africa,North Africa,Libya,2010
2011,LY,0,0.0026,0.1558,0.4579,0.1497,Africa,North Africa,Libya,2010
2012,LY,0,0.0026,0.1581,0.4544,0.1477,Africa,North Africa,Libya,2010
2013,LY,0,0.0026,0.1561,0.4605,0.1543,Africa,North Africa,Libya,2010
2014,LY,0,0.0026,0.154,0.467,0.1613,Africa,North Africa,Libya,2010
2015,LY,0,0.0025,0.1519,0.4728,0.1673,Africa,North Africa,Libya,2010
2016,LY,0,0.0025,0.1525,0.4698,0.1632,Africa,North Africa,Libya,2010
2017,LY,0,0.0025,0.1531,0.4667,0.1589,Africa,North Africa,Libya,2010
2018,LY,0,0.0025,0.1527,0.469,0.163,Africa,North Africa,Libya,2010
2019,LY,0,0.0025,0.1522,0.4713,0.167,Africa,North Africa,Libya,2010
2020,LY,0,0.0025,0.1522,0.4714,0.1673,Africa,North Africa,Libya,2020
2021,LY,0,0.0025,0.1522,0.4716,0.1677,Africa,North Africa,Libya,2020
2022,LY,0,0.0025,0.1522,0.4716,0.1676,Africa,North Africa,Libya,2020
2023,LY,0,0.0025,0.1522,0.4715,0.1676,Africa,North Africa,Libya,2020
1980,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1981,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1982,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1983,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1984,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1985,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1986,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1987,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1988,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1989,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1980
1990,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1991,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1992,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1993,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1994,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1995,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1996,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1997,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1998,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
1999,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,1990
2000,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2001,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2002,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2003,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2004,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2005,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2006,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2007,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2008,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2009,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2000
2010,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2011,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2012,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2013,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2014,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2015,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2016,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2017,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2018,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2019,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2010
2020,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2020
2021,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2020
2022,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2020
2023,MA,0,0.0023,0.1438,0.4822,0.1341,Africa,North Africa,Morocco,2020
1980,MC,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,Monaco,1980
1981,MC,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,Monaco,1980
1982,MC,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,Monaco,1980
1983,MC,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,Monaco,1980
1984,MC,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,Monaco,1980
1985,MC,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,Monaco,1980
1986,MC,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,Monaco,1980
1987,MC,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,Monaco,1980
1988,MC,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,Monaco,1980
1989,MC,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,Monaco,1980
1990,MC,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,Monaco,1990
1991,MC,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,Monaco,1990
1992,MC,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,Monaco,1990
1993,MC,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,Monaco,1990
1994,MC,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,Monaco,1990
1995,MC,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,Monaco,1990
1996,MC,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,Monaco,1990
1997,MC,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,Monaco,1990
1998,MC,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,Monaco,1990
1999,MC,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,Monaco,1990
2000,MC,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,Monaco,2000
2001,MC,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,Monaco,2000
2002,MC,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,Monaco,2000
2003,MC,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,Monaco,2000
2004,MC,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,Monaco,2000
2005,MC,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,Monaco,2000
2006,MC,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,Monaco,2000
2007,MC,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,Monaco,2000
2008,MC,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,Monaco,2000
2009,MC,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,Monaco,2000
2010,MC,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,Monaco,2010
2011,MC,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,Monaco,2010
2012,MC,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,Monaco,2010
2013,MC,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,Monaco,2010
2014,MC,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,Monaco,2010
2015,MC,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,Monaco,2010
2016,MC,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,Monaco,2010
2017,MC,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,Monaco,2010
2018,MC,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,Monaco,2010
2019,MC,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,Monaco,2010
2020,MC,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,Monaco,2020
2021,MC,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,Monaco,2020
2022,MC,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Monaco,2020
2023,MC,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,Monaco,2020
1980,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1981,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1982,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1983,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1984,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1985,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1986,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1987,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1988,MD,0,0.0046,0.2584,0.2581,0.0585,Europe,Eastern Europe,Moldova,1980
1989,MD,0,0.0042,0.2419,0.2746,0.0635,Europe,Eastern Europe,Moldova,1980
1990,MD,0,0.0039,0.2291,0.2895,0.0688,Europe,Eastern Europe,Moldova,1990
1991,MD,0,0.0036,0.2119,0.3107,0.0785,Europe,Eastern Europe,Moldova,1990
1992,MD,0,0.0032,0.1961,0.3298,0.0877,Europe,Eastern Europe,Moldova,1990
1993,MD,0,0.0027,0.1785,0.3503,0.0962,Europe,Eastern Europe,Moldova,1990
1994,MD,0,0.0026,0.1752,0.3508,0.0956,Europe,Eastern Europe,Moldova,1990
1995,MD,0,0.0025,0.1733,0.3495,0.0939,Europe,Eastern Europe,Moldova,1990
1996,MD,0,0.0025,0.171,0.3473,0.0909,Europe,Eastern Europe,Moldova,1990
1997,MD,0,0.0024,0.1687,0.3474,0.0906,Europe,Eastern Europe,Moldova,1990
1998,MD,0,0.0024,0.1652,0.3491,0.0895,Europe,Eastern Europe,Moldova,1990
1999,MD,0,0.0024,0.1662,0.3469,0.0884,Europe,Eastern Europe,Moldova,1990
2000,MD,0,0.0023,0.1694,0.3449,0.0878,Europe,Eastern Europe,Moldova,2000
2001,MD,0,0.0024,0.1664,0.3463,0.0865,Europe,Eastern Europe,Moldova,2000
2002,MD,0,0.0023,0.1675,0.3469,0.0896,Europe,Eastern Europe,Moldova,2000
2003,MD,0,0.0019,0.1674,0.3506,0.0939,Europe,Eastern Europe,Moldova,2000
2004,MD,0,0.0021,0.1674,0.3511,0.0933,Europe,Eastern Europe,Moldova,2000
2005,MD,0,0.0023,0.1657,0.3544,0.0963,Europe,Eastern Europe,Moldova,2000
2006,MD,0,0.0022,0.1647,0.3575,0.1,Europe,Eastern Europe,Moldova,2000
2007,MD,0,0.0022,0.1669,0.3608,0.1039,Europe,Eastern Europe,Moldova,2000
2008,MD,0,0.0022,0.1665,0.3613,0.1068,Europe,Eastern Europe,Moldova,2000
2009,MD,0,0.0021,0.1691,0.3607,0.1054,Europe,Eastern Europe,Moldova,2000
2010,MD,0,0.0019,0.172,0.3547,0.1037,Europe,Eastern Europe,Moldova,2010
2011,MD,0,0.0018,0.1755,0.3507,0.1054,Europe,Eastern Europe,Moldova,2010
2012,MD,0,0.0016,0.1786,0.3463,0.1034,Europe,Eastern Europe,Moldova,2010
2013,MD,0,0.0016,0.181,0.3426,0.1004,Europe,Eastern Europe,Moldova,2010
2014,MD,0,0.002,0.1847,0.3398,0.1005,Europe,Eastern Europe,Moldova,2010
2015,MD,0,0.0022,0.1852,0.3388,0.1012,Europe,Eastern Europe,Moldova,2010
2016,MD,0,0.0028,0.19,0.3329,0.0985,Europe,Eastern Europe,Moldova,2010
2017,MD,0,0.0028,0.1904,0.3339,0.1009,Europe,Eastern Europe,Moldova,2010
2018,MD,0,0.0029,0.1893,0.3373,0.1019,Europe,Eastern Europe,Moldova,2010
2019,MD,0,0.0029,0.1891,0.3377,0.1022,Europe,Eastern Europe,Moldova,2010
2020,MD,0,0.0029,0.1887,0.3395,0.1042,Europe,Eastern Europe,Moldova,2020
2021,MD,0,0.0029,0.1887,0.3395,0.1042,Europe,Eastern Europe,Moldova,2020
2022,MD,0,0.0029,0.1887,0.3395,0.1042,Europe,Eastern Europe,Moldova,2020
2023,MD,0,0.0029,0.1887,0.3395,0.1042,Europe,Eastern Europe,Moldova,2020
1980,ME,0,0.003,0.1961,0.3118,0.0706,Europe,Eastern Europe,Montenegro,1980
1981,ME,0,0.003,0.196,0.3118,0.0707,Europe,Eastern Europe,Montenegro,1980
1982,ME,0,0.003,0.196,0.3118,0.0707,Europe,Eastern Europe,Montenegro,1980
1983,ME,0,0.003,0.1961,0.3118,0.0706,Europe,Eastern Europe,Montenegro,1980
1984,ME,0,0.003,0.1962,0.3117,0.0706,Europe,Eastern Europe,Montenegro,1980
1985,ME,0,0.003,0.1962,0.3117,0.0706,Europe,Eastern Europe,Montenegro,1980
1986,ME,0,0.0031,0.1962,0.3116,0.0706,Europe,Eastern Europe,Montenegro,1980
1987,ME,0,0.0031,0.1963,0.3116,0.0706,Europe,Eastern Europe,Montenegro,1980
1988,ME,0,0.0031,0.1963,0.3116,0.0706,Europe,Eastern Europe,Montenegro,1980
1989,ME,0,0.0031,0.1963,0.3116,0.0706,Europe,Eastern Europe,Montenegro,1980
1990,ME,0,0.0031,0.1964,0.3116,0.0705,Europe,Eastern Europe,Montenegro,1990
1991,ME,0,0.0031,0.1957,0.3142,0.0725,Europe,Eastern Europe,Montenegro,1990
1992,ME,0,0.003,0.1951,0.3168,0.0746,Europe,Eastern Europe,Montenegro,1990
1993,ME,0,0.003,0.1941,0.3198,0.0769,Europe,Eastern Europe,Montenegro,1990
1994,ME,0,0.003,0.1932,0.3228,0.0797,Europe,Eastern Europe,Montenegro,1990
1995,ME,0,0.003,0.192,0.3265,0.0831,Europe,Eastern Europe,Montenegro,1990
1996,ME,0,0.003,0.1919,0.3265,0.0831,Europe,Eastern Europe,Montenegro,1990
1997,ME,0,0.003,0.1918,0.3265,0.083,Europe,Eastern Europe,Montenegro,1990
1998,ME,0,0.003,0.191,0.3291,0.0855,Europe,Eastern Europe,Montenegro,1990
1999,ME,0,0.003,0.1924,0.3248,0.0814,Europe,Eastern Europe,Montenegro,1990
2000,ME,0,0.003,0.1927,0.3241,0.0808,Europe,Eastern Europe,Montenegro,2000
2001,ME,0,0.003,0.1925,0.3246,0.0812,Europe,Eastern Europe,Montenegro,2000
2002,ME,0,0.003,0.1921,0.3258,0.0824,Europe,Eastern Europe,Montenegro,2000
2003,ME,0,0.003,0.1924,0.3261,0.0829,Europe,Eastern Europe,Montenegro,2000
2004,ME,0,0.003,0.1933,0.3235,0.0805,Europe,Eastern Europe,Montenegro,2000
2005,ME,0,0.0031,0.1936,0.3232,0.0803,Europe,Eastern Europe,Montenegro,2000
2006,ME,0,0.003,0.1927,0.3239,0.0823,Europe,Eastern Europe,Montenegro,2000
2007,ME,0,0.0031,0.1951,0.3197,0.0789,Europe,Eastern Europe,Montenegro,2000
2008,ME,0,0.0031,0.192,0.325,0.0814,Europe,Eastern Europe,Montenegro,2000
2009,ME,0,0.0031,0.1922,0.3247,0.0849,Europe,Eastern Europe,Montenegro,2000
2010,ME,0,0.003,0.19,0.3303,0.0883,Europe,Eastern Europe,Montenegro,2010
2011,ME,0,0.003,0.191,0.3362,0.0927,Europe,Eastern Europe,Montenegro,2010
2012,ME,0,0.0023,0.1645,0.3563,0.0994,Europe,Eastern Europe,Montenegro,2010
2013,ME,0,0.0025,0.1698,0.352,0.0957,Europe,Eastern Europe,Montenegro,2010
2014,ME,0,0.0024,0.1704,0.3464,0.0921,Europe,Eastern Europe,Montenegro,2010
2015,ME,0,0.002,0.1552,0.3669,0.1052,Europe,Eastern Europe,Montenegro,2010
2016,ME,0,0.002,0.1636,0.3654,0.1045,Europe,Eastern Europe,Montenegro,2010
2017,ME,0,0.002,0.1632,0.3668,0.1059,Europe,Eastern Europe,Montenegro,2010
2018,ME,0,0.002,0.1636,0.3648,0.104,Europe,Eastern Europe,Montenegro,2010
2019,ME,0,0.002,0.1647,0.3613,0.1009,Europe,Eastern Europe,Montenegro,2010
2020,ME,0,0.002,0.1656,0.3591,0.0988,Europe,Eastern Europe,Montenegro,2020
2021,ME,0,0.002,0.1656,0.3591,0.0988,Europe,Eastern Europe,Montenegro,2020
2022,ME,0,0.002,0.1656,0.3591,0.0988,Europe,Eastern Europe,Montenegro,2020
2023,ME,0,0.002,0.1656,0.3591,0.0988,Europe,Eastern Europe,Montenegro,2020
1980,MH,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1981,MH,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1982,MH,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1983,MH,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1984,MH,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1985,MH,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1986,MH,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1987,MH,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1988,MH,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1989,MH,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1980
1990,MH,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1991,MH,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1992,MH,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1993,MH,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1994,MH,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1995,MH,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1996,MH,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1997,MH,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1998,MH,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
1999,MH,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,1990
2000,MH,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2001,MH,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2002,MH,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2003,MH,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2004,MH,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2005,MH,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2006,MH,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2007,MH,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2008,MH,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2009,MH,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2000
2010,MH,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2011,MH,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2012,MH,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2013,MH,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2014,MH,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2015,MH,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2016,MH,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2017,MH,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2018,MH,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2019,MH,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2010
2020,MH,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2020
2021,MH,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2020
2022,MH,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2020
2023,MH,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Marshall Islands,2020
1980,MG,0,0.0016,0.1056,0.5532,0.2126,Africa,East Africa,Madagascar,1980
1981,MG,0,0.0016,0.1062,0.5541,0.2174,Africa,East Africa,Madagascar,1980
1982,MG,0,0.0016,0.1068,0.555,0.2221,Africa,East Africa,Madagascar,1980
1983,MG,0,0.0016,0.1075,0.5559000000000001,0.2269,Africa,East Africa,Madagascar,1980
1984,MG,0,0.0016,0.1081,0.5568000000000001,0.2317,Africa,East Africa,Madagascar,1980
1985,MG,0,0.0016,0.1087,0.5577,0.2365,Africa,East Africa,Madagascar,1980
1986,MG,0,0.0017,0.1094,0.5586,0.2412,Africa,East Africa,Madagascar,1980
1987,MG,0,0.0017,0.11,0.5595,0.246,Africa,East Africa,Madagascar,1980
1988,MG,0,0.0017,0.1106,0.5603,0.2508,Africa,East Africa,Madagascar,1980
1989,MG,0,0.0017,0.1113,0.5612,0.2556,Africa,East Africa,Madagascar,1980
1990,MG,0,0.0017,0.1119,0.5621,0.2604,Africa,East Africa,Madagascar,1990
1991,MG,0,0.0017,0.1125,0.5630000000000001,0.2651,Africa,East Africa,Madagascar,1990
1992,MG,0,0.0018,0.1131,0.5639000000000001,0.2699,Africa,East Africa,Madagascar,1990
1993,MG,0,0.0018,0.1138,0.5648000000000001,0.2747,Africa,East Africa,Madagascar,1990
1994,MG,0,0.0019,0.1196,0.5411,0.243,Africa,East Africa,Madagascar,1990
1995,MG,0,0.0019,0.1255,0.5172,0.2113,Africa,East Africa,Madagascar,1990
1996,MG,0,0.002,0.1314,0.4934,0.1795,Africa,East Africa,Madagascar,1990
1997,MG,0,0.0021,0.1372,0.4695,0.1477,Africa,East Africa,Madagascar,1990
1998,MG,0,0.0021,0.1382,0.4599,0.1328,Africa,East Africa,Madagascar,1990
1999,MG,0,0.0022,0.1392,0.4502,0.1179,Africa,East Africa,Madagascar,1990
2000,MG,0,0.0019,0.1214,0.4941,0.1381,Africa,East Africa,Madagascar,2000
2001,MG,0,0.0016,0.1036,0.5377000000000001,0.1583,Africa,East Africa,Madagascar,2000
2002,MG,0,0.0017,0.1112,0.5297000000000001,0.1651,Africa,East Africa,Madagascar,2000
2003,MG,0,0.0019,0.1187,0.5217,0.172,Africa,East Africa,Madagascar,2000
2004,MG,0,0.002,0.1263,0.5136000000000001,0.1788,Africa,East Africa,Madagascar,2000
2005,MG,0,0.0022,0.1339,0.5056,0.1857,Africa,East Africa,Madagascar,2000
2006,MG,0,0.0021,0.132,0.5093,0.1859,Africa,East Africa,Madagascar,2000
2007,MG,0,0.0021,0.1301,0.513,0.1862,Africa,East Africa,Madagascar,2000
2008,MG,0,0.0021,0.1283,0.5168,0.1865,Africa,East Africa,Madagascar,2000
2009,MG,0,0.002,0.1264,0.5205000000000001,0.1867,Africa,East Africa,Madagascar,2000
2010,MG,0,0.002,0.1245,0.5242,0.187,Africa,East Africa,Madagascar,2010
2011,MG,0,0.002,0.1246,0.5159,0.1693,Africa,East Africa,Madagascar,2010
2012,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2013,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2014,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2015,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2016,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2017,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2018,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2019,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2010
2020,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2020
2021,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2020
2022,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2020
2023,MG,0,0.002,0.1248,0.5075000000000001,0.1517,Africa,East Africa,Madagascar,2020
1980,MK,0,0.0027,0.186,0.3241,0.0747,Europe,Eastern Europe,North Macedonia,1980
1981,MK,0,0.0027,0.186,0.3241,0.0747,Europe,Eastern Europe,North Macedonia,1980
1982,MK,0,0.0027,0.186,0.3241,0.0747,Europe,Eastern Europe,North Macedonia,1980
1983,MK,0,0.0027,0.186,0.3241,0.0747,Europe,Eastern Europe,North Macedonia,1980
1984,MK,0,0.0027,0.1861,0.324,0.0746,Europe,Eastern Europe,North Macedonia,1980
1985,MK,0,0.0027,0.1861,0.324,0.0746,Europe,Eastern Europe,North Macedonia,1980
1986,MK,0,0.0027,0.1862,0.3239,0.0746,Europe,Eastern Europe,North Macedonia,1980
1987,MK,0,0.0027,0.1862,0.3239,0.0746,Europe,Eastern Europe,North Macedonia,1980
1988,MK,0,0.0027,0.1863,0.3239,0.0746,Europe,Eastern Europe,North Macedonia,1980
1989,MK,0,0.0027,0.1863,0.3238,0.0746,Europe,Eastern Europe,North Macedonia,1980
1990,MK,0,0.0027,0.1863,0.3238,0.0746,Europe,Eastern Europe,North Macedonia,1990
1991,MK,0,0.0027,0.1857,0.3263,0.0767,Europe,Eastern Europe,North Macedonia,1990
1992,MK,0,0.0027,0.1851,0.3288,0.0788,Europe,Eastern Europe,North Macedonia,1990
1993,MK,0,0.0027,0.1842,0.3317,0.0813,Europe,Eastern Europe,North Macedonia,1990
1994,MK,0,0.0027,0.1833,0.3346,0.0841,Europe,Eastern Europe,North Macedonia,1990
1995,MK,0,0.0027,0.1822,0.3381,0.0874,Europe,Eastern Europe,North Macedonia,1990
1996,MK,0,0.0027,0.1821,0.3382,0.0874,Europe,Eastern Europe,North Macedonia,1990
1997,MK,0,0.0027,0.1821,0.3381,0.0873,Europe,Eastern Europe,North Macedonia,1990
1998,MK,0,0.0026,0.181,0.3396,0.0886,Europe,Eastern Europe,North Macedonia,1990
1999,MK,0,0.0026,0.182,0.3346,0.0836,Europe,Eastern Europe,North Macedonia,1990
2000,MK,0,0.0026,0.1819,0.3331,0.082,Europe,Eastern Europe,North Macedonia,2000
2001,MK,0,0.0025,0.1813,0.3326,0.0813,Europe,Eastern Europe,North Macedonia,2000
2002,MK,0,0.0025,0.1807,0.3329,0.0814,Europe,Eastern Europe,North Macedonia,2000
2003,MK,0,0.0025,0.1807,0.3322,0.0809,Europe,Eastern Europe,North Macedonia,2000
2004,MK,0,0.0025,0.1812,0.3288,0.0775,Europe,Eastern Europe,North Macedonia,2000
2005,MK,0,0.0024,0.1812,0.3276,0.0763,Europe,Eastern Europe,North Macedonia,2000
2006,MK,0,0.0024,0.181,0.326,0.0746,Europe,Eastern Europe,North Macedonia,2000
2007,MK,0,0.0025,0.1839,0.3199,0.0698,Europe,Eastern Europe,North Macedonia,2000
2008,MK,0,0.0024,0.1815,0.3264,0.0757,Europe,Eastern Europe,North Macedonia,2000
2009,MK,0,0.0024,0.1809,0.327,0.0761,Europe,Eastern Europe,North Macedonia,2000
2010,MK,0,0.0023,0.1785,0.3297,0.078,Europe,Eastern Europe,North Macedonia,2010
2011,MK,0,0.0025,0.1787,0.3325,0.079,Europe,Eastern Europe,North Macedonia,2010
2012,MK,0,0.0026,0.1837,0.3306,0.0797,Europe,Eastern Europe,North Macedonia,2010
2013,MK,0,0.0029,0.1911,0.3247,0.0834,Europe,Eastern Europe,North Macedonia,2010
2014,MK,0,0.003,0.1984,0.3175,0.0775,Europe,Eastern Europe,North Macedonia,2010
2015,MK,0,0.0031,0.1963,0.3196,0.0834,Europe,Eastern Europe,North Macedonia,2010
2016,MK,0,0.003,0.2015,0.3132,0.0822,Europe,Eastern Europe,North Macedonia,2010
2017,MK,0,0.0031,0.2031,0.3128,0.0859,Europe,Eastern Europe,North Macedonia,2010
2018,MK,0,0.0033,0.209,0.3003,0.0749,Europe,Eastern Europe,North Macedonia,2010
2019,MK,0,0.0033,0.2104,0.2962,0.071,Europe,Eastern Europe,North Macedonia,2010
2020,MK,0,0.0033,0.2114,0.2935,0.0687,Europe,Eastern Europe,North Macedonia,2020
2021,MK,0,0.0033,0.2114,0.2935,0.0687,Europe,Eastern Europe,North Macedonia,2020
2022,MK,0,0.0033,0.2114,0.2935,0.0687,Europe,Eastern Europe,North Macedonia,2020
2023,MK,0,0.0033,0.2114,0.2935,0.0687,Europe,Eastern Europe,North Macedonia,2020
1980,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1981,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1982,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1983,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1984,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1985,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1986,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1987,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1988,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1989,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1980
1990,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1990
1991,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1990
1992,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1990
1993,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1990
1994,ML,0,0.0014,0.093,0.5854,0.2165,Africa,West Africa,Mali,1990
1995,ML,0,0.0015,0.0987,0.5686,0.2053,Africa,West Africa,Mali,1990
1996,ML,0,0.0016,0.1044,0.5517000000000001,0.1941,Africa,West Africa,Mali,1990
1997,ML,0,0.0017,0.1101,0.5348,0.1828,Africa,West Africa,Mali,1990
1998,ML,0,0.0018,0.1159,0.5179,0.1716,Africa,West Africa,Mali,1990
1999,ML,0,0.0019,0.1216,0.501,0.1604,Africa,West Africa,Mali,1990
2000,ML,0,0.002,0.1273,0.484,0.1491,Africa,West Africa,Mali,2000
2001,ML,0,0.0021,0.1331,0.467,0.1378,Africa,West Africa,Mali,2000
2002,ML,0,0.0021,0.1345,0.4674,0.1359,Africa,West Africa,Mali,2000
2003,ML,0,0.0021,0.1359,0.4677,0.134,Africa,West Africa,Mali,2000
2004,ML,0,0.0022,0.1373,0.4681,0.132,Africa,West Africa,Mali,2000
2005,ML,0,0.0022,0.1388,0.4684,0.1301,Africa,West Africa,Mali,2000
2006,ML,0,0.0022,0.1402,0.4688000000000001,0.1282,Africa,West Africa,Mali,2000
2007,ML,0,0.0024,0.1479,0.4501,0.1178,Africa,West Africa,Mali,2000
2008,ML,0,0.0025,0.1556,0.4314,0.1073,Africa,West Africa,Mali,2000
2009,ML,0,0.0027,0.1634,0.4126,0.0969,Africa,West Africa,Mali,2000
2010,ML,0,0.0027,0.1617,0.4163,0.0994,Africa,West Africa,Mali,2010
2011,ML,0,0.0026,0.16,0.4199,0.1019,Africa,West Africa,Mali,2010
2012,ML,0,0.0026,0.1583,0.4236,0.1044,Africa,West Africa,Mali,2010
2013,ML,0,0.0026,0.1567,0.4272,0.1069,Africa,West Africa,Mali,2010
2014,ML,0,0.0025,0.155,0.4309,0.1094,Africa,West Africa,Mali,2010
2015,ML,0,0.0025,0.1533,0.4345,0.1119,Africa,West Africa,Mali,2010
2016,ML,0,0.0025,0.1516,0.4382,0.1144,Africa,West Africa,Mali,2010
2017,ML,0,0.0025,0.15,0.4418,0.1169,Africa,West Africa,Mali,2010
2018,ML,0,0.0024,0.1483,0.4454,0.1193,Africa,West Africa,Mali,2010
2019,ML,0,0.0024,0.1491,0.4467,0.12,Africa,West Africa,Mali,2010
2020,ML,0,0.0025,0.1499,0.4481,0.1206,Africa,West Africa,Mali,2020
2021,ML,0,0.0025,0.1508,0.4494,0.1212,Africa,West Africa,Mali,2020
2022,ML,0,0.0025,0.1508,0.4494,0.1212,Africa,West Africa,Mali,2020
2023,ML,0,0.0025,0.1508,0.4494,0.1212,Africa,West Africa,Mali,2020
1980,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1981,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1982,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1983,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1984,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1985,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1986,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1987,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1988,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1989,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1980
1990,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1991,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1992,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1993,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1994,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1995,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1996,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1997,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1998,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
1999,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,1990
2000,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2001,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2002,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2003,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2004,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2005,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2006,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2007,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2008,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2009,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2000
2010,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2011,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2012,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2013,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2014,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2015,MM,0,0.0021,0.1271,0.5112,0.2649,Asia,South-East Asia,Myanmar,2010
2016,MM,0,0.0024,0.143,0.4705,0.2157,Asia,South-East Asia,Myanmar,2010
2017,MM,0,0.0027,0.1592,0.43,0.1671,Asia,South-East Asia,Myanmar,2010
2018,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2010
2019,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2010
2020,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2020
2021,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2020
2022,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2020
2023,MM,0,0.0027,0.1598,0.4293,0.1666,Asia,South-East Asia,Myanmar,2020
1980,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1981,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1982,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1983,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1984,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1985,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1986,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1987,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1988,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1989,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1980
1990,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1991,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1992,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1993,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1994,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1995,MN,0,0.002,0.139,0.4251,0.1484,Asia,East Asia,Mongolia,1990
1996,MN,0,0.0022,0.143,0.421,0.1493,Asia,East Asia,Mongolia,1990
1997,MN,0,0.0024,0.1469,0.4169,0.1503,Asia,East Asia,Mongolia,1990
1998,MN,0,0.0026,0.1508,0.413,0.1512,Asia,East Asia,Mongolia,1990
1999,MN,0,0.0025,0.1474,0.418,0.1531,Asia,East Asia,Mongolia,1990
2000,MN,0,0.0024,0.1441,0.4229,0.155,Asia,East Asia,Mongolia,2000
2001,MN,0,0.0022,0.1408,0.4279,0.1569,Asia,East Asia,Mongolia,2000
2002,MN,0,0.0021,0.1375,0.4328,0.1587,Asia,East Asia,Mongolia,2000
2003,MN,0,0.0021,0.1357,0.4393,0.1635,Asia,East Asia,Mongolia,2000
2004,MN,0,0.0021,0.1343,0.4448,0.1675,Asia,East Asia,Mongolia,2000
2005,MN,0,0.0021,0.133,0.4495,0.171,Asia,East Asia,Mongolia,2000
2006,MN,0,0.0021,0.1334,0.4517,0.1721,Asia,East Asia,Mongolia,2000
2007,MN,0,0.0022,0.1377,0.4489,0.1686,Asia,East Asia,Mongolia,2000
2008,MN,0,0.0023,0.1433,0.4395,0.1615,Asia,East Asia,Mongolia,2000
2009,MN,0,0.0024,0.1492,0.4297,0.154,Asia,East Asia,Mongolia,2000
2010,MN,0,0.0022,0.1414,0.4372,0.1627,Asia,East Asia,Mongolia,2010
2011,MN,0,0.0023,0.1437,0.4405,0.1699,Asia,East Asia,Mongolia,2010
2012,MN,0,0.0021,0.1338,0.4476,0.1717,Asia,East Asia,Mongolia,2010
2013,MN,0,0.0023,0.142,0.4395,0.1682,Asia,East Asia,Mongolia,2010
2014,MN,0,0.0022,0.1407,0.4432,0.1748,Asia,East Asia,Mongolia,2010
2015,MN,0,0.0024,0.1476,0.4344,0.1673,Asia,East Asia,Mongolia,2010
2016,MN,0,0.0024,0.148,0.4337,0.1667,Asia,East Asia,Mongolia,2010
2017,MN,0,0.0024,0.1481,0.4322,0.1643,Asia,East Asia,Mongolia,2010
2018,MN,0,0.0024,0.1463,0.4331,0.1641,Asia,East Asia,Mongolia,2010
2019,MN,0,0.0024,0.1495,0.429,0.1605,Asia,East Asia,Mongolia,2010
2020,MN,0,0.0024,0.1495,0.429,0.1605,Asia,East Asia,Mongolia,2020
2021,MN,0,0.0024,0.1495,0.429,0.1605,Asia,East Asia,Mongolia,2020
2022,MN,0,0.0024,0.1495,0.429,0.1605,Asia,East Asia,Mongolia,2020
2023,MN,0,0.0024,0.1495,0.429,0.1605,Asia,East Asia,Mongolia,2020
1980,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1981,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1982,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1983,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1984,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1985,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1986,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1987,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1988,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1989,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1980
1990,MO,0,0.0039,0.2146,0.3085,0.0821,Asia,East Asia,Macao,1990
1991,MO,0,0.0036,0.2027,0.3151,0.0842,Asia,East Asia,Macao,1990
1992,MO,0,0.0034,0.1939,0.3271,0.0885,Asia,East Asia,Macao,1990
1993,MO,0,0.0032,0.1849,0.3391,0.0929,Asia,East Asia,Macao,1990
1994,MO,0,0.0031,0.1811,0.3433,0.0954,Asia,East Asia,Macao,1990
1995,MO,0,0.0031,0.1849,0.339,0.0938,Asia,East Asia,Macao,1990
1996,MO,0,0.0032,0.1906,0.339,0.0965,Asia,East Asia,Macao,1990
1997,MO,0,0.0032,0.1909,0.3391,0.0965,Asia,East Asia,Macao,1990
1998,MO,0,0.0032,0.1915,0.3425,0.0994,Asia,East Asia,Macao,1990
1999,MO,0,0.003,0.185,0.3479,0.1002,Asia,East Asia,Macao,1990
2000,MO,0,0.0027,0.1737,0.3587,0.1046,Asia,East Asia,Macao,2000
2001,MO,0,0.0026,0.1681,0.3662,0.1096,Asia,East Asia,Macao,2000
2002,MO,0,0.0024,0.1557,0.3968,0.1265,Asia,East Asia,Macao,2000
2003,MO,0,0.0023,0.1515,0.4051,0.1323,Asia,East Asia,Macao,2000
2004,MO,0,0.0024,0.1515,0.4121,0.1393,Asia,East Asia,Macao,2000
2005,MO,0,0.0022,0.1442,0.4216,0.143,Asia,East Asia,Macao,2000
2006,MO,0,0.0021,0.1441,0.4237,0.1487,Asia,East Asia,Macao,2000
2007,MO,0,0.0021,0.1425,0.4269,0.1538,Asia,East Asia,Macao,2000
2008,MO,0,0.0021,0.1421,0.4269,0.1529,Asia,East Asia,Macao,2000
2009,MO,0,0.002,0.1414,0.4263,0.1552,Asia,East Asia,Macao,2000
2010,MO,0,0.0019,0.1383,0.4283,0.152,Asia,East Asia,Macao,2010
2011,MO,0,0.002,0.1409,0.4311,0.1467,Asia,East Asia,Macao,2010
2012,MO,0,0.002,0.1454,0.4169,0.1383,Asia,East Asia,Macao,2010
2013,MO,0,0.002,0.1403,0.4235,0.1389,Asia,East Asia,Macao,2010
2014,MO,0,0.002,0.1438,0.4155,0.1374,Asia,East Asia,Macao,2010
2015,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2010
2016,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2010
2017,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2010
2018,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2010
2019,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2010
2020,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2020
2021,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2020
2022,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2020
2023,MO,0,0.002,0.1436,0.4166,0.14,Asia,East Asia,Macao,2020
1980,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1981,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1982,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1983,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1984,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1985,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1986,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1987,MR,0,0.0017,0.1218,0.4809,0.1281,Africa,West Africa,Mauritania,1980
1988,MR,0,0.0018,0.1247,0.4769,0.1276,Africa,West Africa,Mauritania,1980
1989,MR,0,0.0018,0.1277,0.4729,0.1272,Africa,West Africa,Mauritania,1980
1990,MR,0,0.0019,0.1306,0.4689,0.1268,Africa,West Africa,Mauritania,1990
1991,MR,0,0.002,0.1336,0.4649,0.1263,Africa,West Africa,Mauritania,1990
1992,MR,0,0.0021,0.1366,0.4609,0.1259,Africa,West Africa,Mauritania,1990
1993,MR,0,0.0021,0.1395,0.4568,0.1255,Africa,West Africa,Mauritania,1990
1994,MR,0,0.0022,0.1425,0.4528,0.125,Africa,West Africa,Mauritania,1990
1995,MR,0,0.0023,0.1455,0.4487,0.1246,Africa,West Africa,Mauritania,1990
1996,MR,0,0.0023,0.1441,0.4502,0.1219,Africa,West Africa,Mauritania,1990
1997,MR,0,0.0022,0.1427,0.4517,0.1193,Africa,West Africa,Mauritania,1990
1998,MR,0,0.0022,0.1414,0.4532,0.1166,Africa,West Africa,Mauritania,1990
1999,MR,0,0.0022,0.14,0.4547,0.114,Africa,West Africa,Mauritania,1990
2000,MR,0,0.0021,0.1386,0.4562,0.1113,Africa,West Africa,Mauritania,2000
2001,MR,0,0.0021,0.1374,0.4684,0.1254,Africa,West Africa,Mauritania,2000
2002,MR,0,0.0021,0.1361,0.4806,0.1395,Africa,West Africa,Mauritania,2000
2003,MR,0,0.0021,0.1349,0.4928,0.1536,Africa,West Africa,Mauritania,2000
2004,MR,0,0.0021,0.1336,0.505,0.1677,Africa,West Africa,Mauritania,2000
2005,MR,0,0.0022,0.1384,0.4825,0.1514,Africa,West Africa,Mauritania,2000
2006,MR,0,0.0023,0.1431,0.46,0.1351,Africa,West Africa,Mauritania,2000
2007,MR,0,0.0023,0.1478,0.4375,0.1188,Africa,West Africa,Mauritania,2000
2008,MR,0,0.0024,0.1526,0.415,0.1025,Africa,West Africa,Mauritania,2000
2009,MR,0,0.0024,0.1551,0.4133,0.1034,Africa,West Africa,Mauritania,2000
2010,MR,0,0.0025,0.1577,0.4116,0.1042,Africa,West Africa,Mauritania,2010
2011,MR,0,0.0025,0.1602,0.4099,0.105,Africa,West Africa,Mauritania,2010
2012,MR,0,0.0026,0.1628,0.4082,0.1058,Africa,West Africa,Mauritania,2010
2013,MR,0,0.0026,0.1653,0.4065,0.1067,Africa,West Africa,Mauritania,2010
2014,MR,0,0.0027,0.1679,0.4048,0.1075,Africa,West Africa,Mauritania,2010
2015,MR,0,0.0027,0.1684,0.4037,0.1059,Africa,West Africa,Mauritania,2010
2016,MR,0,0.0027,0.1689,0.4026,0.1044,Africa,West Africa,Mauritania,2010
2017,MR,0,0.0027,0.1694,0.4015,0.1028,Africa,West Africa,Mauritania,2010
2018,MR,0,0.0028,0.1699,0.4004,0.1012,Africa,West Africa,Mauritania,2010
2019,MR,0,0.0028,0.1704,0.3994,0.0997,Africa,West Africa,Mauritania,2010
2020,MR,0,0.0028,0.1704,0.3994,0.0997,Africa,West Africa,Mauritania,2020
2021,MR,0,0.0028,0.1704,0.3994,0.0997,Africa,West Africa,Mauritania,2020
2022,MR,0,0.0028,0.1704,0.3994,0.0997,Africa,West Africa,Mauritania,2020
2023,MR,0,0.0028,0.1704,0.3994,0.0997,Africa,West Africa,Mauritania,2020
1980,MS,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Montserrat,1980
1981,MS,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Montserrat,1980
1982,MS,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Montserrat,1980
1983,MS,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Montserrat,1980
1984,MS,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Montserrat,1980
1985,MS,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Montserrat,1980
1986,MS,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Montserrat,1980
1987,MS,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Montserrat,1980
1988,MS,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Montserrat,1980
1989,MS,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Montserrat,1980
1990,MS,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Montserrat,1990
1991,MS,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Montserrat,1990
1992,MS,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Montserrat,1990
1993,MS,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Montserrat,1990
1994,MS,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Montserrat,1990
1995,MS,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Montserrat,1990
1996,MS,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Montserrat,1990
1997,MS,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Montserrat,1990
1998,MS,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Montserrat,1990
1999,MS,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Montserrat,1990
2000,MS,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Montserrat,2000
2001,MS,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Montserrat,2000
2002,MS,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Montserrat,2000
2003,MS,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Montserrat,2000
2004,MS,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Montserrat,2000
2005,MS,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Montserrat,2000
2006,MS,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Montserrat,2000
2007,MS,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Montserrat,2000
2008,MS,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Montserrat,2000
2009,MS,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Montserrat,2000
2010,MS,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Montserrat,2010
2011,MS,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Montserrat,2010
2012,MS,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Montserrat,2010
2013,MS,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Montserrat,2010
2014,MS,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Montserrat,2010
2015,MS,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Montserrat,2010
2016,MS,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Montserrat,2010
2017,MS,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Montserrat,2010
2018,MS,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Montserrat,2010
2019,MS,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Montserrat,2010
2020,MS,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Montserrat,2020
2021,MS,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Montserrat,2020
2022,MS,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Montserrat,2020
2023,MS,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Montserrat,2020
1980,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1981,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1982,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1983,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1984,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1985,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1986,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1987,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1988,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1989,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1980
1990,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1991,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1992,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1993,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1994,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1995,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1996,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1997,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1998,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
1999,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,1990
2000,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2001,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2002,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2003,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2004,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2005,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2006,MT,0,0.0039,0.2245,0.2916,0.0737,Europe,Western Europe,Malta,2000
2007,MT,0,0.0037,0.2176,0.293,0.0672,Europe,Western Europe,Malta,2000
2008,MT,0,0.0039,0.2219,0.3002,0.0752,Europe,Western Europe,Malta,2000
2009,MT,0,0.0037,0.2144,0.3162,0.0851,Europe,Western Europe,Malta,2000
2010,MT,0,0.0038,0.2157,0.3056,0.0827,Europe,Western Europe,Malta,2010
2011,MT,0,0.0037,0.2131,0.3207,0.0969,Europe,Western Europe,Malta,2010
2012,MT,0,0.0037,0.2073,0.33,0.1026,Europe,Western Europe,Malta,2010
2013,MT,0,0.0036,0.2055,0.3364,0.1068,Europe,Western Europe,Malta,2010
2014,MT,0,0.0036,0.205,0.337,0.1034,Europe,Western Europe,Malta,2010
2015,MT,0,0.0035,0.1995,0.3497,0.1086,Europe,Western Europe,Malta,2010
2016,MT,0,0.0036,0.2043,0.3366,0.1043,Europe,Western Europe,Malta,2010
2017,MT,0,0.0034,0.1999,0.3476,0.1108,Europe,Western Europe,Malta,2010
2018,MT,0,0.0035,0.2045,0.3296,0.1002,Europe,Western Europe,Malta,2010
2019,MT,0,0.0036,0.2063,0.3242,0.0944,Europe,Western Europe,Malta,2010
2020,MT,0,0.0036,0.2081,0.3196,0.0898,Europe,Western Europe,Malta,2020
2021,MT,0,0.0036,0.2081,0.3196,0.0898,Europe,Western Europe,Malta,2020
2022,MT,0,0.0036,0.2081,0.3196,0.0898,Europe,Western Europe,Malta,2020
2023,MT,0,0.0036,0.2081,0.3196,0.0898,Europe,Western Europe,Malta,2020
1980,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1981,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1982,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1983,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1984,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1985,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1986,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1987,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1988,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1989,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1980
1990,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1991,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1992,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1993,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1994,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1995,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1996,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1997,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1998,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
1999,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,1990
2000,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2001,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2002,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2003,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2004,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2005,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2006,MU,0,0.0025,0.1521,0.4578,0.1375,Africa,East Africa,Mauritius,2000
2007,MU,0,0.0025,0.1501,0.4642,0.1429,Africa,East Africa,Mauritius,2000
2008,MU,0,0.0024,0.1481,0.4707,0.1484,Africa,East Africa,Mauritius,2000
2009,MU,0,0.0024,0.1461,0.4771,0.1538,Africa,East Africa,Mauritius,2000
2010,MU,0,0.0023,0.1441,0.4836,0.1593,Africa,East Africa,Mauritius,2010
2011,MU,0,0.0023,0.1422,0.49,0.1647,Africa,East Africa,Mauritius,2010
2012,MU,0,0.0023,0.1402,0.4965,0.1701,Africa,East Africa,Mauritius,2010
2013,MU,0,0.0023,0.1418,0.492,0.1679,Africa,East Africa,Mauritius,2010
2014,MU,0,0.0023,0.1433,0.4875,0.1656,Africa,East Africa,Mauritius,2010
2015,MU,0,0.0023,0.1449,0.483,0.1634,Africa,East Africa,Mauritius,2010
2016,MU,0,0.0024,0.1465,0.4785,0.1612,Africa,East Africa,Mauritius,2010
2017,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2010
2018,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2010
2019,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2010
2020,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2020
2021,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2020
2022,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2020
2023,MU,0,0.0024,0.1481,0.474,0.1589,Africa,East Africa,Mauritius,2020
1980,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1981,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1982,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1983,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1984,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1985,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1986,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1987,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1988,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1989,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1980
1990,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1991,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1992,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1993,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1994,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1995,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1996,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1997,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1998,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
1999,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,1990
2000,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,2000
2001,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,2000
2002,MV,0,0.0019,0.1137,0.5772,0.3561,Asia,South Asia,Maldives,2000
2003,MV,0,0.0019,0.1159,0.562,0.3324,Asia,South Asia,Maldives,2000
2004,MV,0,0.0019,0.1198,0.547,0.3101,Asia,South Asia,Maldives,2000
2005,MV,0,0.002,0.1233,0.5316000000000001,0.287,Asia,South Asia,Maldives,2000
2006,MV,0,0.002,0.1264,0.5162,0.2634,Asia,South Asia,Maldives,2000
2007,MV,0,0.002,0.1291,0.5008,0.2397,Asia,South Asia,Maldives,2000
2008,MV,0,0.0021,0.1364,0.4818,0.2131,Asia,South Asia,Maldives,2000
2009,MV,0,0.0022,0.1415,0.4635,0.1861,Asia,South Asia,Maldives,2000
2010,MV,0,0.0023,0.1441,0.4563,0.1808,Asia,South Asia,Maldives,2010
2011,MV,0,0.0024,0.1514,0.4447,0.1712,Asia,South Asia,Maldives,2010
2012,MV,0,0.0025,0.1569,0.4349,0.1634,Asia,South Asia,Maldives,2010
2013,MV,0,0.0027,0.1626,0.4252,0.1555,Asia,South Asia,Maldives,2010
2014,MV,0,0.0028,0.1688,0.415,0.1471,Asia,South Asia,Maldives,2010
2015,MV,0,0.003,0.176,0.4036,0.1377,Asia,South Asia,Maldives,2010
2016,MV,0,0.0031,0.1809,0.3949,0.1307,Asia,South Asia,Maldives,2010
2017,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2010
2018,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2010
2019,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2010
2020,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2020
2021,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2020
2022,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2020
2023,MV,0,0.0031,0.1808,0.3951,0.1308,Asia,South Asia,Maldives,2020
1980,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1981,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1982,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1983,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1984,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1985,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1986,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1987,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1988,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1989,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1980
1990,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1991,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1992,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1993,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1994,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1995,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1996,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1997,MW,0,0.0009,0.0522,0.8023,0.6399,Africa,East Africa,Malawi,1990
1998,MW,0,0.001,0.0636,0.7612,0.5762,Africa,East Africa,Malawi,1990
1999,MW,0,0.0012,0.075,0.7201000000000001,0.5123,Africa,East Africa,Malawi,1990
2000,MW,0,0.0014,0.0864,0.6788000000000001,0.4483,Africa,East Africa,Malawi,2000
2001,MW,0,0.0016,0.0979,0.6375000000000001,0.3842,Africa,East Africa,Malawi,2000
2002,MW,0,0.0018,0.1094,0.596,0.3198,Africa,East Africa,Malawi,2000
2003,MW,0,0.002,0.1209,0.5545,0.2554,Africa,East Africa,Malawi,2000
2004,MW,0,0.0022,0.1325,0.5128,0.1908,Africa,East Africa,Malawi,2000
2005,MW,0,0.0021,0.1289,0.52,0.1956,Africa,East Africa,Malawi,2000
2006,MW,0,0.002,0.1253,0.5271,0.2003,Africa,East Africa,Malawi,2000
2007,MW,0,0.0019,0.1217,0.5342,0.2051,Africa,East Africa,Malawi,2000
2008,MW,0,0.0019,0.1181,0.5414,0.2098,Africa,East Africa,Malawi,2000
2009,MW,0,0.0018,0.1146,0.5485,0.2146,Africa,East Africa,Malawi,2000
2010,MW,0,0.0017,0.111,0.5556,0.2193,Africa,East Africa,Malawi,2010
2011,MW,0,0.0017,0.1112,0.5605,0.2351,Africa,East Africa,Malawi,2010
2012,MW,0,0.0018,0.1114,0.5654,0.2509,Africa,East Africa,Malawi,2010
2013,MW,0,0.0018,0.1117,0.5703,0.2667,Africa,East Africa,Malawi,2010
2014,MW,0,0.0018,0.1119,0.5752,0.2825,Africa,East Africa,Malawi,2010
2015,MW,0,0.0018,0.1121,0.5801000000000001,0.2983,Africa,East Africa,Malawi,2010
2016,MW,0,0.0018,0.1123,0.5851000000000001,0.3141,Africa,East Africa,Malawi,2010
2017,MW,0,0.002,0.1213,0.5516,0.2602,Africa,East Africa,Malawi,2010
2018,MW,0,0.0021,0.1302,0.5181,0.2063,Africa,East Africa,Malawi,2010
2019,MW,0,0.0023,0.1392,0.4846,0.1522,Africa,East Africa,Malawi,2010
2020,MW,0,0.0023,0.1392,0.4846,0.1522,Africa,East Africa,Malawi,2020
2021,MW,0,0.0023,0.1392,0.4846,0.1522,Africa,East Africa,Malawi,2020
2022,MW,0,0.0023,0.1392,0.4846,0.1522,Africa,East Africa,Malawi,2020
2023,MW,0,0.0023,0.1392,0.4846,0.1522,Africa,East Africa,Malawi,2020
1980,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1981,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1982,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1983,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1984,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1985,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1986,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1987,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1988,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1989,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1980
1990,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1991,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1992,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1993,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1994,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1995,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1996,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1997,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1998,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
1999,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,1990
2000,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,2000
2001,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,2000
2002,MX,0,0,0.0624,0.548,0.1169,Americas,Central America,Mexico,2000
2003,MX,0,0,0.0601,0.5742,0.1468,Americas,Central America,Mexico,2000
2004,MX,0,0,0.0578,0.6003000000000001,0.1767,Americas,Central America,Mexico,2000
2005,MX,0,0,0.0589,0.5972000000000001,0.1609,Americas,Central America,Mexico,2000
2006,MX,0,0,0.06,0.5940000000000001,0.1451,Americas,Central America,Mexico,2000
2007,MX,0,0,0.0562,0.6226,0.1805,Americas,Central America,Mexico,2000
2008,MX,0,0,0.0525,0.6511,0.216,Americas,Central America,Mexico,2000
2009,MX,0,0,0.0546,0.6375000000000001,0.2343,Americas,Central America,Mexico,2000
2010,MX,0,0,0.0567,0.6239,0.2526,Americas,Central America,Mexico,2010
2011,MX,0,0,0.0553,0.6326,0.2634,Americas,Central America,Mexico,2010
2012,MX,0,0,0.0538,0.6414000000000001,0.2741,Americas,Central America,Mexico,2010
2013,MX,0,0,0.0551,0.6378,0.2819,Americas,Central America,Mexico,2010
2014,MX,0,0,0.0563,0.6343,0.2898,Americas,Central America,Mexico,2010
2015,MX,0,0,0.0588,0.6336,0.2681,Americas,Central America,Mexico,2010
2016,MX,0,0,0.0614,0.633,0.2464,Americas,Central America,Mexico,2010
2017,MX,0,0,0.061,0.6466000000000001,0.2713,Americas,Central America,Mexico,2010
2018,MX,0,0,0.0607,0.6603,0.2963,Americas,Central America,Mexico,2010
2019,MX,0,0,0.0616,0.6465000000000001,0.2762,Americas,Central America,Mexico,2010
2020,MX,0,0,0.0625,0.6327,0.2561,Americas,Central America,Mexico,2020
2021,MX,0,0,0.0691,0.6145,0.2359,Americas,Central America,Mexico,2020
2022,MX,0,0,0.0756,0.5963,0.2158,Americas,Central America,Mexico,2020
2023,MX,0,0,0.0756,0.5963,0.2158,Americas,Central America,Mexico,2020
1980,MY,0,0.0021,0.1383,0.4748,0.2013,Asia,South-East Asia,Malaysia,1980
1981,MY,0,0.0021,0.1383,0.4748,0.2013,Asia,South-East Asia,Malaysia,1980
1982,MY,0,0.0021,0.1383,0.4748,0.2013,Asia,South-East Asia,Malaysia,1980
1983,MY,0,0.0021,0.1383,0.4748,0.2013,Asia,South-East Asia,Malaysia,1980
1984,MY,0,0.0021,0.1383,0.4748,0.2013,Asia,South-East Asia,Malaysia,1980
1985,MY,0,0.0022,0.1398,0.4711,0.1981,Asia,South-East Asia,Malaysia,1980
1986,MY,0,0.0022,0.1414,0.4674,0.1947,Asia,South-East Asia,Malaysia,1980
1987,MY,0,0.0022,0.143,0.4635,0.1913,Asia,South-East Asia,Malaysia,1980
1988,MY,0,0.0023,0.1445,0.4621,0.1914,Asia,South-East Asia,Malaysia,1980
1989,MY,0,0.0023,0.1457,0.461,0.1915,Asia,South-East Asia,Malaysia,1980
1990,MY,0,0.0022,0.1433,0.4625,0.1916,Asia,South-East Asia,Malaysia,1990
1991,MY,0,0.0022,0.1413,0.4638,0.1917,Asia,South-East Asia,Malaysia,1990
1992,MY,0,0.0021,0.1396,0.4648,0.1918,Asia,South-East Asia,Malaysia,1990
1993,MY,0,0.0021,0.1386,0.4672,0.1937,Asia,South-East Asia,Malaysia,1990
1994,MY,0,0.0021,0.1378,0.4691,0.1953,Asia,South-East Asia,Malaysia,1990
1995,MY,0,0.0021,0.1371,0.4708,0.1966,Asia,South-East Asia,Malaysia,1990
1996,MY,0,0.0021,0.1363,0.4729,0.1979,Asia,South-East Asia,Malaysia,1990
1997,MY,0,0.0022,0.1357,0.4747,0.1989,Asia,South-East Asia,Malaysia,1990
1998,MY,0,0.0022,0.1382,0.4689,0.1964,Asia,South-East Asia,Malaysia,1990
1999,MY,0,0.0023,0.1404,0.4637,0.1941,Asia,South-East Asia,Malaysia,1990
2000,MY,0,0.0023,0.1423,0.459,0.192,Asia,South-East Asia,Malaysia,2000
2001,MY,0,0.0023,0.1441,0.4547,0.1901,Asia,South-East Asia,Malaysia,2000
2002,MY,0,0.0023,0.1457,0.4508,0.1884,Asia,South-East Asia,Malaysia,2000
2003,MY,0,0.0023,0.1446,0.4504,0.1788,Asia,South-East Asia,Malaysia,2000
2004,MY,0,0.0023,0.1434,0.4499,0.1691,Asia,South-East Asia,Malaysia,2000
2005,MY,0,0.0023,0.1419,0.4546,0.1732,Asia,South-East Asia,Malaysia,2000
2006,MY,0,0.0022,0.1405,0.4593,0.1772,Asia,South-East Asia,Malaysia,2000
2007,MY,0,0.0022,0.139,0.464,0.1813,Asia,South-East Asia,Malaysia,2000
2008,MY,0,0.0023,0.1419,0.4553,0.1809,Asia,South-East Asia,Malaysia,2000
2009,MY,0,0.0023,0.1448,0.4465,0.1805,Asia,South-East Asia,Malaysia,2000
2010,MY,0,0.0024,0.1486,0.439,0.1752,Asia,South-East Asia,Malaysia,2010
2011,MY,0,0.0025,0.1523,0.4316,0.1699,Asia,South-East Asia,Malaysia,2010
2012,MY,0,0.0025,0.1561,0.4241,0.1646,Asia,South-East Asia,Malaysia,2010
2013,MY,0,0.0027,0.1645,0.4134,0.1566,Asia,South-East Asia,Malaysia,2010
2014,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2015,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2016,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2017,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2018,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2019,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2010
2020,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2020
2021,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2020
2022,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2020
2023,MY,0,0.0029,0.173,0.4027,0.1487,Asia,South-East Asia,Malaysia,2020
1980,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1981,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1982,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1983,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1984,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1985,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1986,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1987,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1988,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1989,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1980
1990,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1991,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1992,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1993,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1994,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1995,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1996,MZ,0,0.0013,0.0838,0.619,0.2401,Africa,East Africa,Mozambique,1990
1997,MZ,0,0.0013,0.0877,0.6136,0.2426,Africa,East Africa,Mozambique,1990
1998,MZ,0,0.0014,0.0915,0.6081,0.2452,Africa,East Africa,Mozambique,1990
1999,MZ,0,0.0015,0.0954,0.6027,0.2477,Africa,East Africa,Mozambique,1990
2000,MZ,0,0.0015,0.0992,0.5972000000000001,0.2503,Africa,East Africa,Mozambique,2000
2001,MZ,0,0.0016,0.1031,0.5918,0.2528,Africa,East Africa,Mozambique,2000
2002,MZ,0,0.0017,0.107,0.5863,0.2554,Africa,East Africa,Mozambique,2000
2003,MZ,0,0.0017,0.1079,0.5813,0.2519,Africa,East Africa,Mozambique,2000
2004,MZ,0,0.0017,0.1087,0.5763,0.2485,Africa,East Africa,Mozambique,2000
2005,MZ,0,0.0017,0.1096,0.5714,0.245,Africa,East Africa,Mozambique,2000
2006,MZ,0,0.0017,0.1105,0.5664,0.2416,Africa,East Africa,Mozambique,2000
2007,MZ,0,0.0017,0.1114,0.5614,0.2381,Africa,East Africa,Mozambique,2000
2008,MZ,0,0.0017,0.1123,0.5564,0.2347,Africa,East Africa,Mozambique,2000
2009,MZ,0,0.0016,0.1074,0.5715,0.2475,Africa,East Africa,Mozambique,2000
2010,MZ,0,0.0016,0.1025,0.5865,0.2602,Africa,East Africa,Mozambique,2010
2011,MZ,0,0.0015,0.0976,0.6014,0.2729,Africa,East Africa,Mozambique,2010
2012,MZ,0,0.0014,0.0927,0.6164000000000001,0.2857,Africa,East Africa,Mozambique,2010
2013,MZ,0,0.0013,0.0879,0.6314000000000001,0.2984,Africa,East Africa,Mozambique,2010
2014,MZ,0,0.0013,0.083,0.6463,0.3111,Africa,East Africa,Mozambique,2010
2015,MZ,0,0.0013,0.0854,0.6368,0.2985,Africa,East Africa,Mozambique,2010
2016,MZ,0,0.0013,0.0879,0.6272,0.2859,Africa,East Africa,Mozambique,2010
2017,MZ,0,0.0014,0.0903,0.6177,0.2733,Africa,East Africa,Mozambique,2010
2018,MZ,0,0.0014,0.0928,0.6081,0.2607,Africa,East Africa,Mozambique,2010
2019,MZ,0,0.0014,0.0952,0.5986,0.2481,Africa,East Africa,Mozambique,2010
2020,MZ,0,0.0014,0.0952,0.5986,0.2481,Africa,East Africa,Mozambique,2020
2021,MZ,0,0.0014,0.0952,0.5986,0.2481,Africa,East Africa,Mozambique,2020
2022,MZ,0,0.0014,0.0952,0.5986,0.2481,Africa,East Africa,Mozambique,2020
2023,MZ,0,0.0014,0.0952,0.5986,0.2481,Africa,East Africa,Mozambique,2020
1980,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1981,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1982,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1983,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1984,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1985,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1986,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1987,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1988,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1989,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1980
1990,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1991,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1992,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1993,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1994,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1995,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1996,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1997,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1998,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
1999,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,1990
2000,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,2000
2001,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,2000
2002,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,2000
2003,NA,0,0.0008,0.0553,0.7153,0.2689,Africa,South Africa,Namibia,2000
2004,NA,0,0.0009,0.0562,0.7114,0.2679,Africa,South Africa,Namibia,2000
2005,NA,0,0.0009,0.0571,0.7075,0.2669,Africa,South Africa,Namibia,2000
2006,NA,0,0.0009,0.058,0.7037,0.2659,Africa,South Africa,Namibia,2000
2007,NA,0,0.0009,0.0589,0.6998000000000001,0.2649,Africa,South Africa,Namibia,2000
2008,NA,0,0.0009,0.0598,0.6960000000000001,0.2639,Africa,South Africa,Namibia,2000
2009,NA,0,0.0009,0.0607,0.6921,0.2629,Africa,South Africa,Namibia,2000
2010,NA,0,0.0009,0.0615,0.6837000000000001,0.255,Africa,South Africa,Namibia,2010
2011,NA,0,0.0009,0.0623,0.6754,0.2471,Africa,South Africa,Namibia,2010
2012,NA,0,0.0009,0.0631,0.667,0.2393,Africa,South Africa,Namibia,2010
2013,NA,0,0.0009,0.0639,0.6586000000000001,0.2314,Africa,South Africa,Namibia,2010
2014,NA,0,0.0009,0.0647,0.6503,0.2235,Africa,South Africa,Namibia,2010
2015,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2010
2016,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2010
2017,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2010
2018,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2010
2019,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2010
2020,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2020
2021,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2020
2022,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2020
2023,NA,0,0.0009,0.0655,0.6419,0.2156,Africa,South Africa,Namibia,2020
1980,NC,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1981,NC,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1982,NC,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1983,NC,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1984,NC,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1985,NC,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1986,NC,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1987,NC,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1988,NC,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1989,NC,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1980
1990,NC,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1991,NC,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1992,NC,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1993,NC,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1994,NC,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1995,NC,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1996,NC,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1997,NC,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1998,NC,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
1999,NC,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,1990
2000,NC,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2001,NC,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2002,NC,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2003,NC,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2004,NC,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2005,NC,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2006,NC,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2007,NC,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2008,NC,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2009,NC,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2000
2010,NC,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2011,NC,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2012,NC,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2013,NC,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2014,NC,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2015,NC,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2016,NC,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2017,NC,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2018,NC,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2019,NC,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2010
2020,NC,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2020
2021,NC,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2020
2022,NC,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2020
2023,NC,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),New Caledonia,2020
1980,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1981,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1982,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1983,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1984,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1985,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1986,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1987,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1988,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1989,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1980
1990,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1990
1991,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1990
1992,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1990
1993,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1990
1994,NE,0,0.002,0.1281,0.5002,0.168,Africa,West Africa,Niger,1990
1995,NE,0,0.002,0.1269,0.5049,0.1743,Africa,West Africa,Niger,1990
1996,NE,0,0.0019,0.1257,0.5096,0.1806,Africa,West Africa,Niger,1990
1997,NE,0,0.0019,0.1246,0.5144000000000001,0.1869,Africa,West Africa,Niger,1990
1998,NE,0,0.0019,0.1234,0.5191,0.1932,Africa,West Africa,Niger,1990
1999,NE,0,0.0019,0.1222,0.5238,0.1995,Africa,West Africa,Niger,1990
2000,NE,0,0.0019,0.121,0.5285000000000001,0.2058,Africa,West Africa,Niger,2000
2001,NE,0,0.0019,0.1199,0.5332,0.2121,Africa,West Africa,Niger,2000
2002,NE,0,0.0019,0.1187,0.538,0.2184,Africa,West Africa,Niger,2000
2003,NE,0,0.0018,0.1175,0.5427000000000001,0.2247,Africa,West Africa,Niger,2000
2004,NE,0,0.0018,0.1163,0.5474,0.231,Africa,West Africa,Niger,2000
2005,NE,0,0.0018,0.1151,0.5521,0.2374,Africa,West Africa,Niger,2000
2006,NE,0,0.0021,0.1292,0.5234,0.1996,Africa,West Africa,Niger,2000
2007,NE,0,0.0024,0.1434,0.4945000000000001,0.1617,Africa,West Africa,Niger,2000
2008,NE,0,0.0025,0.1498,0.479,0.1519,Africa,West Africa,Niger,2000
2009,NE,0,0.0027,0.1562,0.4635,0.142,Africa,West Africa,Niger,2000
2010,NE,0,0.0028,0.1626,0.4479,0.1322,Africa,West Africa,Niger,2010
2011,NE,0,0.0029,0.169,0.4323,0.1223,Africa,West Africa,Niger,2010
2012,NE,0,0.0028,0.165,0.4325,0.1202,Africa,West Africa,Niger,2010
2013,NE,0,0.0027,0.1611,0.4327,0.1181,Africa,West Africa,Niger,2010
2014,NE,0,0.0026,0.1572,0.4329,0.116,Africa,West Africa,Niger,2010
2015,NE,0,0.0025,0.1538,0.4477,0.1276,Africa,West Africa,Niger,2010
2016,NE,0,0.0025,0.1505,0.4625,0.1391,Africa,West Africa,Niger,2010
2017,NE,0,0.0025,0.1472,0.4773,0.1507,Africa,West Africa,Niger,2010
2018,NE,0,0.0024,0.1438,0.492,0.1623,Africa,West Africa,Niger,2010
2019,NE,0,0.0025,0.15,0.4788,0.1553,Africa,West Africa,Niger,2010
2020,NE,0,0.0026,0.1561,0.4655,0.1483,Africa,West Africa,Niger,2020
2021,NE,0,0.0028,0.1623,0.4522,0.1413,Africa,West Africa,Niger,2020
2022,NE,0,0.0028,0.1623,0.4522,0.1413,Africa,West Africa,Niger,2020
2023,NE,0,0.0028,0.1623,0.4522,0.1413,Africa,West Africa,Niger,2020
1980,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1981,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1982,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1983,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1984,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1985,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1986,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1987,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1988,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1989,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1980
1990,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1990
1991,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1990
1992,NG,0,0.0016,0.1154,0.4679,0.1126,Africa,West Africa,Nigeria,1990
1993,NG,0,0.0016,0.1172,0.4674,0.1147,Africa,West Africa,Nigeria,1990
1994,NG,0,0.0017,0.119,0.4668,0.1167,Africa,West Africa,Nigeria,1990
1995,NG,0,0.0017,0.1207,0.4663,0.1188,Africa,West Africa,Nigeria,1990
1996,NG,0,0.0017,0.1225,0.4658,0.1209,Africa,West Africa,Nigeria,1990
1997,NG,0,0.0018,0.1243,0.4652,0.1229,Africa,West Africa,Nigeria,1990
1998,NG,0,0.0018,0.126,0.4647,0.125,Africa,West Africa,Nigeria,1990
1999,NG,0,0.0019,0.1278,0.4642,0.1271,Africa,West Africa,Nigeria,1990
2000,NG,0,0.0019,0.1296,0.4636,0.1292,Africa,West Africa,Nigeria,2000
2001,NG,0,0.002,0.1314,0.4631,0.1312,Africa,West Africa,Nigeria,2000
2002,NG,0,0.002,0.1331,0.4626,0.1333,Africa,West Africa,Nigeria,2000
2003,NG,0,0.002,0.1349,0.462,0.1354,Africa,West Africa,Nigeria,2000
2004,NG,0,0.0021,0.1373,0.4565,0.1307,Africa,West Africa,Nigeria,2000
2005,NG,0,0.0022,0.1398,0.451,0.1259,Africa,West Africa,Nigeria,2000
2006,NG,0,0.0022,0.1422,0.4454,0.1212,Africa,West Africa,Nigeria,2000
2007,NG,0,0.0023,0.1447,0.4398,0.1164,Africa,West Africa,Nigeria,2000
2008,NG,0,0.0023,0.1471,0.4343,0.1116,Africa,West Africa,Nigeria,2000
2009,NG,0,0.0024,0.1496,0.4287,0.1069,Africa,West Africa,Nigeria,2000
2010,NG,0,0.0024,0.1521,0.4231,0.1021,Africa,West Africa,Nigeria,2010
2011,NG,0,0.0024,0.1524,0.4225,0.1018,Africa,West Africa,Nigeria,2010
2012,NG,0,0.0024,0.1527,0.4218,0.1015,Africa,West Africa,Nigeria,2010
2013,NG,0,0.0024,0.1521,0.4227,0.1019,Africa,West Africa,Nigeria,2010
2014,NG,0,0.0024,0.1516,0.4236,0.1023,Africa,West Africa,Nigeria,2010
2015,NG,0,0.0024,0.151,0.4246,0.1027,Africa,West Africa,Nigeria,2010
2016,NG,0,0.0024,0.1523,0.4254,0.1071,Africa,West Africa,Nigeria,2010
2017,NG,0,0.0024,0.1536,0.4263,0.1115,Africa,West Africa,Nigeria,2010
2018,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2010
2019,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2010
2020,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2020
2021,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2020
2022,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2020
2023,NG,0,0.0025,0.155,0.4272,0.1158,Africa,West Africa,Nigeria,2020
1980,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1981,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1982,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1983,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1984,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1985,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1986,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1987,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1988,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1989,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1980
1990,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1991,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1992,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1993,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1994,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1995,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1996,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1997,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1998,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
1999,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,1990
2000,NI,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Nicaragua,2000
2001,NI,0,0.0001,0.0805,0.5636,0.1984,Americas,Central America,Nicaragua,2000
2002,NI,0,0,0.0809,0.5626,0.1928,Americas,Central America,Nicaragua,2000
2003,NI,0,0,0.0854,0.5605,0.2043,Americas,Central America,Nicaragua,2000
2004,NI,0,0.0001,0.0878,0.556,0.1999,Americas,Central America,Nicaragua,2000
2005,NI,0,0.0001,0.087,0.5555,0.193,Americas,Central America,Nicaragua,2000
2006,NI,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Central America,Nicaragua,2000
2007,NI,0,0.0002,0.0888,0.5641,0.211,Americas,Central America,Nicaragua,2000
2008,NI,0,0.0003,0.0903,0.56,0.2029,Americas,Central America,Nicaragua,2000
2009,NI,0,0.0004,0.0926,0.5486,0.1928,Americas,Central America,Nicaragua,2000
2010,NI,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Central America,Nicaragua,2010
2011,NI,0,0.0005,0.0976,0.541,0.1982,Americas,Central America,Nicaragua,2010
2012,NI,0,0.0005,0.1001,0.5332,0.197,Americas,Central America,Nicaragua,2010
2013,NI,0,0.0006,0.1006,0.5404,0.2057,Americas,Central America,Nicaragua,2010
2014,NI,0,0.0005,0.1026,0.5304,0.2046,Americas,Central America,Nicaragua,2010
2015,NI,0,0.0005,0.1032,0.5312,0.1942,Americas,Central America,Nicaragua,2010
2016,NI,0,0.0004,0.1034,0.5334,0.1984,Americas,Central America,Nicaragua,2010
2017,NI,0,0.0003,0.1031,0.5311,0.1884,Americas,Central America,Nicaragua,2010
2018,NI,0,0.0003,0.1016,0.5354,0.1976,Americas,Central America,Nicaragua,2010
2019,NI,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Central America,Nicaragua,2010
2020,NI,0,0.0001,0.0872,0.5466,0.2043,Americas,Central America,Nicaragua,2020
2021,NI,0,0.0001,0.0972,0.5299,0.1892,Americas,Central America,Nicaragua,2020
2022,NI,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Nicaragua,2020
2023,NI,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Nicaragua,2020
1980,NL,0,0.0045,0.2564,0.2631,0.0585,Europe,Western Europe,Netherlands,1980
1981,NL,0,0.0045,0.2554,0.2633,0.058,Europe,Western Europe,Netherlands,1980
1982,NL,0,0.0045,0.2544,0.2647,0.0581,Europe,Western Europe,Netherlands,1980
1983,NL,0,0.0044,0.2522,0.2676,0.0591,Europe,Western Europe,Netherlands,1980
1984,NL,0,0.0043,0.249,0.2689,0.0598,Europe,Western Europe,Netherlands,1980
1985,NL,0,0.0044,0.2508,0.2679,0.0586,Europe,Western Europe,Netherlands,1980
1986,NL,0,0.0044,0.2502,0.2683,0.0589,Europe,Western Europe,Netherlands,1980
1987,NL,0,0.0044,0.2511,0.2675,0.0584,Europe,Western Europe,Netherlands,1980
1988,NL,0,0.0044,0.2511,0.2677,0.059,Europe,Western Europe,Netherlands,1980
1989,NL,0,0.0043,0.2507,0.2684,0.0588,Europe,Western Europe,Netherlands,1980
1990,NL,0,0.0044,0.2529,0.2633,0.0565,Europe,Western Europe,Netherlands,1990
1991,NL,0,0.0044,0.2533,0.2615,0.0564,Europe,Western Europe,Netherlands,1990
1992,NL,0,0.0044,0.2542,0.2584,0.0547,Europe,Western Europe,Netherlands,1990
1993,NL,0,0.0043,0.2515,0.2598,0.0539,Europe,Western Europe,Netherlands,1990
1994,NL,0,0.0043,0.2492,0.2647,0.0555,Europe,Western Europe,Netherlands,1990
1995,NL,0,0.0042,0.2465,0.2714,0.0576,Europe,Western Europe,Netherlands,1990
1996,NL,0,0.0042,0.2463,0.2726,0.0584,Europe,Western Europe,Netherlands,1990
1997,NL,0,0.0042,0.245,0.2752,0.0599,Europe,Western Europe,Netherlands,1990
1998,NL,0,0.0043,0.2466,0.2729,0.0583,Europe,Western Europe,Netherlands,1990
1999,NL,0,0.0043,0.2471,0.2739,0.0593,Europe,Western Europe,Netherlands,1990
2000,NL,0,0.0043,0.248,0.2737,0.0609,Europe,Western Europe,Netherlands,2000
2001,NL,0,0.0042,0.2422,0.2837,0.0683,Europe,Western Europe,Netherlands,2000
2002,NL,0,0.0042,0.2414,0.2827,0.0668,Europe,Western Europe,Netherlands,2000
2003,NL,0,0.0041,0.2389,0.2848,0.0661,Europe,Western Europe,Netherlands,2000
2004,NL,0,0.0041,0.2383,0.2912,0.069,Europe,Western Europe,Netherlands,2000
2005,NL,0,0.004,0.2309,0.2982,0.0718,Europe,Western Europe,Netherlands,2000
2006,NL,0,0.0039,0.2288,0.2948,0.0704,Europe,Western Europe,Netherlands,2000
2007,NL,0,0.0037,0.2226,0.3097,0.0782,Europe,Western Europe,Netherlands,2000
2008,NL,0,0.004,0.237,0.2836,0.0669,Europe,Western Europe,Netherlands,2000
2009,NL,0,0.004,0.2368,0.2843,0.0646,Europe,Western Europe,Netherlands,2000
2010,NL,0,0.0039,0.2292,0.2939,0.0678,Europe,Western Europe,Netherlands,2010
2011,NL,0,0.0039,0.2299,0.2908,0.0666,Europe,Western Europe,Netherlands,2010
2012,NL,0,0.0039,0.2297,0.2915,0.0652,Europe,Western Europe,Netherlands,2010
2013,NL,0,0.0038,0.2293,0.2839,0.0634,Europe,Western Europe,Netherlands,2010
2014,NL,0,0.0037,0.2244,0.294,0.0689,Europe,Western Europe,Netherlands,2010
2015,NL,0,0.0038,0.2262,0.2931,0.0689,Europe,Western Europe,Netherlands,2010
2016,NL,0,0.0038,0.2271,0.2911,0.0681,Europe,Western Europe,Netherlands,2010
2017,NL,0,0.0037,0.2225,0.2974,0.0698,Europe,Western Europe,Netherlands,2010
2018,NL,0,0.0037,0.2249,0.2956,0.0696,Europe,Western Europe,Netherlands,2010
2019,NL,0,0.0038,0.2274,0.2913,0.0681,Europe,Western Europe,Netherlands,2010
2020,NL,0,0.0038,0.2282,0.2899,0.0679,Europe,Western Europe,Netherlands,2020
2021,NL,0,0.0038,0.2282,0.2899,0.0679,Europe,Western Europe,Netherlands,2020
2022,NL,0,0.0038,0.2282,0.2899,0.0679,Europe,Western Europe,Netherlands,2020
2023,NL,0,0.0038,0.2282,0.2899,0.0679,Europe,Western Europe,Netherlands,2020
1980,NO,0,0.0045,0.253,0.2722,0.0747,Europe,Western Europe,Norway,1980
1981,NO,0,0.0045,0.2547,0.2677,0.0736,Europe,Western Europe,Norway,1980
1982,NO,0,0.0046,0.2596,0.2632,0.0712,Europe,Western Europe,Norway,1980
1983,NO,0,0.0047,0.2633,0.2595,0.0698,Europe,Western Europe,Norway,1980
1984,NO,0,0.0047,0.2634,0.2651,0.0776,Europe,Western Europe,Norway,1980
1985,NO,0,0.0047,0.263,0.2676,0.0796,Europe,Western Europe,Norway,1980
1986,NO,0,0.0049,0.2766,0.2406,0.0576,Europe,Western Europe,Norway,1980
1987,NO,0,0.005,0.2782,0.2369,0.0555,Europe,Western Europe,Norway,1980
1988,NO,0,0.0051,0.2838,0.2277,0.0497,Europe,Western Europe,Norway,1980
1989,NO,0,0.0052,0.2868,0.2306,0.0566,Europe,Western Europe,Norway,1980
1990,NO,0,0.0052,0.2843,0.2338,0.0583,Europe,Western Europe,Norway,1990
1991,NO,0,0.0052,0.2853,0.2357,0.0598,Europe,Western Europe,Norway,1990
1992,NO,0,0.0052,0.284,0.2449,0.0686,Europe,Western Europe,Norway,1990
1993,NO,0,0.005,0.2731,0.2623,0.0802,Europe,Western Europe,Norway,1990
1994,NO,0,0.0048,0.2634,0.2741,0.0849,Europe,Western Europe,Norway,1990
1995,NO,0,0.0048,0.2641,0.2744,0.0848,Europe,Western Europe,Norway,1990
1996,NO,0,0.0046,0.2553,0.2914,0.0975,Europe,Western Europe,Norway,1990
1997,NO,0,0.0044,0.2468,0.3049,0.1053,Europe,Western Europe,Norway,1990
1998,NO,0,0.0047,0.2605,0.2826,0.0887,Europe,Western Europe,Norway,1990
1999,NO,0,0.0046,0.2565,0.2935,0.0986,Europe,Western Europe,Norway,1990
2000,NO,0,0.0043,0.2412,0.3259,0.1261,Europe,Western Europe,Norway,2000
2001,NO,0,0.0046,0.2539,0.3019,0.1069,Europe,Western Europe,Norway,2000
2002,NO,0,0.0046,0.2525,0.306,0.1146,Europe,Western Europe,Norway,2000
2003,NO,0,0.0045,0.2482,0.3137,0.1196,Europe,Western Europe,Norway,2000
2004,NO,0,0.0043,0.2435,0.3228,0.1264,Europe,Western Europe,Norway,2000
2005,NO,0,0.0042,0.2366,0.3378,0.141,Europe,Western Europe,Norway,2000
2006,NO,0,0.0042,0.2361,0.3349,0.1323,Europe,Western Europe,Norway,2000
2007,NO,0,0.0042,0.2361,0.3376,0.1321,Europe,Western Europe,Norway,2000
2008,NO,0,0.0042,0.2368,0.3436,0.1399,Europe,Western Europe,Norway,2000
2009,NO,0,0.0045,0.2494,0.311,0.1109,Europe,Western Europe,Norway,2000
2010,NO,0,0.0043,0.2409,0.3272,0.124,Europe,Western Europe,Norway,2010
2011,NO,0,0.0043,0.2381,0.3299,0.1245,Europe,Western Europe,Norway,2010
2012,NO,0,0.0042,0.236,0.332,0.1263,Europe,Western Europe,Norway,2010
2013,NO,0,0.0042,0.2383,0.3262,0.1205,Europe,Western Europe,Norway,2010
2014,NO,0,0.0042,0.2378,0.3241,0.1169,Europe,Western Europe,Norway,2010
2015,NO,0,0.0044,0.2449,0.3083,0.0996,Europe,Western Europe,Norway,2010
2016,NO,0,0.0044,0.2443,0.307,0.0977,Europe,Western Europe,Norway,2010
2017,NO,0,0.0043,0.2418,0.311,0.1025,Europe,Western Europe,Norway,2010
2018,NO,0,0.0042,0.2372,0.3219,0.1113,Europe,Western Europe,Norway,2010
2019,NO,0,0.0043,0.2398,0.311,0.0966,Europe,Western Europe,Norway,2010
2020,NO,0,0.0043,0.2423,0.3061,0.0934,Europe,Western Europe,Norway,2020
2021,NO,0,0.0043,0.2423,0.3061,0.0934,Europe,Western Europe,Norway,2020
2022,NO,0,0.0043,0.2423,0.3061,0.0934,Europe,Western Europe,Norway,2020
2023,NO,0,0.0043,0.2423,0.3061,0.0934,Europe,Western Europe,Norway,2020
1980,NP,0,0.0041,0.2233,0.3381,0.0969,Asia,South Asia,Nepal,1980
1981,NP,0,0.0041,0.2233,0.3381,0.0969,Asia,South Asia,Nepal,1980
1982,NP,0,0.0041,0.2233,0.3381,0.0969,Asia,South Asia,Nepal,1980
1983,NP,0,0.0041,0.2233,0.3381,0.0969,Asia,South Asia,Nepal,1980
1984,NP,0,0.0041,0.2233,0.3381,0.0969,Asia,South Asia,Nepal,1980
1985,NP,0,0.0039,0.2128,0.3565,0.1094,Asia,South Asia,Nepal,1980
1986,NP,0,0.0037,0.2036,0.3726,0.1204,Asia,South Asia,Nepal,1980
1987,NP,0,0.0035,0.1954,0.3867,0.1301,Asia,South Asia,Nepal,1980
1988,NP,0,0.0034,0.1882,0.3993,0.1386,Asia,South Asia,Nepal,1980
1989,NP,0,0.0032,0.1817,0.4106,0.1463,Asia,South Asia,Nepal,1980
1990,NP,0,0.0031,0.1759,0.4208,0.1533,Asia,South Asia,Nepal,1990
1991,NP,0,0.003,0.1706,0.4299,0.1595,Asia,South Asia,Nepal,1990
1992,NP,0,0.0029,0.1659,0.4383,0.1652,Asia,South Asia,Nepal,1990
1993,NP,0,0.0028,0.1615,0.4459,0.1704,Asia,South Asia,Nepal,1990
1994,NP,0,0.0027,0.1575,0.4529,0.1752,Asia,South Asia,Nepal,1990
1995,NP,0,0.0026,0.1538,0.4593,0.1795,Asia,South Asia,Nepal,1990
1996,NP,0,0.0026,0.155,0.4555,0.1759,Asia,South Asia,Nepal,1990
1997,NP,0,0.0026,0.156,0.452,0.1726,Asia,South Asia,Nepal,1990
1998,NP,0,0.0027,0.1574,0.4482,0.169,Asia,South Asia,Nepal,1990
1999,NP,0,0.0027,0.1575,0.4457,0.1666,Asia,South Asia,Nepal,1990
2000,NP,0,0.0027,0.1584,0.4426,0.1637,Asia,South Asia,Nepal,2000
2001,NP,0,0.0027,0.1595,0.4393,0.1605,Asia,South Asia,Nepal,2000
2002,NP,0,0.0027,0.1587,0.4381,0.1594,Asia,South Asia,Nepal,2000
2003,NP,0,0.0026,0.1569,0.438,0.1594,Asia,South Asia,Nepal,2000
2004,NP,0,0.0026,0.1578,0.4351,0.1567,Asia,South Asia,Nepal,2000
2005,NP,0,0.0026,0.158,0.4331,0.1548,Asia,South Asia,Nepal,2000
2006,NP,0,0.0026,0.1574,0.4321,0.1539,Asia,South Asia,Nepal,2000
2007,NP,0,0.0026,0.1561,0.4319,0.1538,Asia,South Asia,Nepal,2000
2008,NP,0,0.0027,0.1609,0.4249,0.147,Asia,South Asia,Nepal,2000
2009,NP,0,0.0027,0.1623,0.4217,0.144,Asia,South Asia,Nepal,2000
2010,NP,0,0.0027,0.1594,0.4235,0.1458,Asia,South Asia,Nepal,2010
2011,NP,0,0.0027,0.1617,0.4209,0.1432,Asia,South Asia,Nepal,2010
2012,NP,0,0.0027,0.1622,0.4203,0.1427,Asia,South Asia,Nepal,2010
2013,NP,0,0.0027,0.1629,0.4195,0.1419,Asia,South Asia,Nepal,2010
2014,NP,0,0.0028,0.1643,0.4178,0.1402,Asia,South Asia,Nepal,2010
2015,NP,0,0.0028,0.1667,0.415,0.1375,Asia,South Asia,Nepal,2010
2016,NP,0,0.0028,0.1671,0.4146,0.137,Asia,South Asia,Nepal,2010
2017,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2010
2018,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2010
2019,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2010
2020,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2020
2021,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2020
2022,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2020
2023,NP,0,0.0028,0.167,0.4147,0.1372,Asia,South Asia,Nepal,2020
1980,NZ,0,0.0022,0.1512,0.3268,0.0772,Oceania,Australia and New Zealand,New Zealand,1980
1981,NZ,0,0.0022,0.1514,0.3255,0.0764,Oceania,Australia and New Zealand,New Zealand,1980
1982,NZ,0,0.0021,0.1493,0.3304,0.0773,Oceania,Australia and New Zealand,New Zealand,1980
1983,NZ,0,0.002,0.1449,0.3458,0.0863,Oceania,Australia and New Zealand,New Zealand,1980
1984,NZ,0,0.0021,0.1491,0.3384,0.0853,Oceania,Australia and New Zealand,New Zealand,1980
1985,NZ,0,0.0022,0.1544,0.326,0.0812,Oceania,Australia and New Zealand,New Zealand,1980
1986,NZ,0,0.0022,0.1588,0.3129,0.0722,Oceania,Australia and New Zealand,New Zealand,1980
1987,NZ,0,0.0023,0.1617,0.311,0.0788,Oceania,Australia and New Zealand,New Zealand,1980
1988,NZ,0,0.0023,0.1611,0.3169,0.0817,Oceania,Australia and New Zealand,New Zealand,1980
1989,NZ,0,0.0021,0.1524,0.3411,0.0992,Oceania,Australia and New Zealand,New Zealand,1980
1990,NZ,0,0.002,0.1418,0.3691,0.1195,Oceania,Australia and New Zealand,New Zealand,1990
1991,NZ,0,0.0021,0.1442,0.3557,0.1057,Oceania,Australia and New Zealand,New Zealand,1990
1992,NZ,0,0.002,0.139,0.3694,0.1128,Oceania,Australia and New Zealand,New Zealand,1990
1993,NZ,0,0.002,0.1369,0.3778,0.119,Oceania,Australia and New Zealand,New Zealand,1990
1994,NZ,0,0.002,0.1378,0.3786,0.1232,Oceania,Australia and New Zealand,New Zealand,1990
1995,NZ,0,0.002,0.1388,0.3782,0.1243,Oceania,Australia and New Zealand,New Zealand,1990
1996,NZ,0,0.0021,0.1432,0.3653,0.1183,Oceania,Australia and New Zealand,New Zealand,1990
1997,NZ,0,0.002,0.1395,0.377,0.1262,Oceania,Australia and New Zealand,New Zealand,1990
1998,NZ,0,0.0019,0.1323,0.3948,0.1381,Oceania,Australia and New Zealand,New Zealand,1990
1999,NZ,0,0.0025,0.1625,0.4028,0.1529,Oceania,Australia and New Zealand,New Zealand,1990
2000,NZ,0,0.0027,0.1808,0.3717,0.1161,Oceania,Australia and New Zealand,New Zealand,2000
2001,NZ,0,0.0026,0.1761,0.3824,0.1237,Oceania,Australia and New Zealand,New Zealand,2000
2002,NZ,0,0.003,0.1943,0.371,0.1248,Oceania,Australia and New Zealand,New Zealand,2000
2003,NZ,0,0.0028,0.1981,0.3711,0.1286,Oceania,Australia and New Zealand,New Zealand,2000
2004,NZ,0,0.0036,0.2039,0.4091,0.2111,Oceania,Australia and New Zealand,New Zealand,2000
2005,NZ,0,0.0036,0.2155,0.3673,0.161,Oceania,Australia and New Zealand,New Zealand,2000
2006,NZ,0,0.0038,0.2412,0.3177,0.1005,Oceania,Australia and New Zealand,New Zealand,2000
2007,NZ,0,0.0042,0.2346,0.3273,0.1048,Oceania,Australia and New Zealand,New Zealand,2000
2008,NZ,0,0.0038,0.2319,0.3482,0.1629,Oceania,Australia and New Zealand,New Zealand,2000
2009,NZ,0,0.003,0.2198,0.3773,0.1874,Oceania,Australia and New Zealand,New Zealand,2000
2010,NZ,0,0.0026,0.1967,0.4126,0.2239,Oceania,Australia and New Zealand,New Zealand,2010
2011,NZ,0,0.003,0.2201,0.3869,0.1972,Oceania,Australia and New Zealand,New Zealand,2010
2012,NZ,0,0.0037,0.2292,0.345,0.1364,Oceania,Australia and New Zealand,New Zealand,2010
2013,NZ,0,0.0039,0.2327,0.3379,0.1215,Oceania,Australia and New Zealand,New Zealand,2010
2014,NZ,0,0.004,0.2325,0.3347,0.1181,Oceania,Australia and New Zealand,New Zealand,2010
2015,NZ,0,0.004,0.2322,0.3316,0.1147,Oceania,Australia and New Zealand,New Zealand,2010
2016,NZ,0,0.004,0.2319,0.3284,0.1113,Oceania,Australia and New Zealand,New Zealand,2010
2017,NZ,0,0.0043,0.2386,0.3316,0.1154,Oceania,Australia and New Zealand,New Zealand,2010
2018,NZ,0,0.0043,0.2443,0.3187,0.1069,Oceania,Australia and New Zealand,New Zealand,2010
2019,NZ,0,0.0035,0.2193,0.3397,0.1191,Oceania,Australia and New Zealand,New Zealand,2010
2020,NZ,0,0.0026,0.1937,0.3619,0.13,Oceania,Australia and New Zealand,New Zealand,2020
2021,NZ,0,0.0027,0.1854,0.3815,0.1677,Oceania,Australia and New Zealand,New Zealand,2020
2022,NZ,0,0.0031,0.2044,0.35,0.1208,Oceania,Australia and New Zealand,New Zealand,2020
2023,NZ,0,0.0031,0.2044,0.35,0.1208,Oceania,Australia and New Zealand,New Zealand,2020
1980,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1981,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1982,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1983,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1984,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1985,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1986,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1987,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1988,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1989,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1980
1990,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1991,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1992,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1993,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1994,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1995,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1996,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1997,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1998,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
1999,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,1990
2000,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2001,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2002,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2003,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2004,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2005,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2006,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2007,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2008,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2009,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2000
2010,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2011,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2012,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2013,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2014,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2015,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2016,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2017,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2018,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2019,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2010
2020,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2020
2021,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2020
2022,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2020
2023,OM,0,0.0011,0.0907,0.5623,0.1986,Asia,West Asia,Oman,2020
1980,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1981,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1982,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1983,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1984,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1985,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1986,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1987,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1988,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1989,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1980
1990,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1991,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1992,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1993,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1994,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1995,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1996,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1997,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1998,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
1999,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,1990
2000,PA,0,0.0001,0.0844,0.5525,0.1903,Americas,Central America,Panama,2000
2001,PA,0,0.0001,0.0805,0.5636,0.1984,Americas,Central America,Panama,2000
2002,PA,0,0,0.0809,0.5626,0.1928,Americas,Central America,Panama,2000
2003,PA,0,0,0.0854,0.5605,0.2043,Americas,Central America,Panama,2000
2004,PA,0,0.0001,0.0878,0.556,0.1999,Americas,Central America,Panama,2000
2005,PA,0,0.0001,0.087,0.5555,0.193,Americas,Central America,Panama,2000
2006,PA,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Central America,Panama,2000
2007,PA,0,0.0002,0.0888,0.5641,0.211,Americas,Central America,Panama,2000
2008,PA,0,0.0003,0.0903,0.56,0.2029,Americas,Central America,Panama,2000
2009,PA,0,0.0004,0.0926,0.5486,0.1928,Americas,Central America,Panama,2000
2010,PA,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Central America,Panama,2010
2011,PA,0,0.0005,0.0976,0.541,0.1982,Americas,Central America,Panama,2010
2012,PA,0,0.0005,0.1001,0.5332,0.197,Americas,Central America,Panama,2010
2013,PA,0,0.0006,0.1006,0.5404,0.2057,Americas,Central America,Panama,2010
2014,PA,0,0.0005,0.1026,0.5304,0.2046,Americas,Central America,Panama,2010
2015,PA,0,0.0005,0.1032,0.5312,0.1942,Americas,Central America,Panama,2010
2016,PA,0,0.0004,0.1034,0.5334,0.1984,Americas,Central America,Panama,2010
2017,PA,0,0.0003,0.1031,0.5311,0.1884,Americas,Central America,Panama,2010
2018,PA,0,0.0003,0.1016,0.5354,0.1976,Americas,Central America,Panama,2010
2019,PA,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Central America,Panama,2010
2020,PA,0,0.0001,0.0872,0.5466,0.2043,Americas,Central America,Panama,2020
2021,PA,0,0.0001,0.0972,0.5299,0.1892,Americas,Central America,Panama,2020
2022,PA,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Panama,2020
2023,PA,0,0.0002,0.1037,0.5181,0.1787,Americas,Central America,Panama,2020
1980,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1981,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1982,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1983,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1984,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1985,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1986,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1987,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1988,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1989,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1980
1990,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1991,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1992,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1993,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1994,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1995,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1996,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1997,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1998,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
1999,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,1990
2000,PE,0,0,0.0777,0.552,0.211,Americas,South America,Peru,2000
2001,PE,0,0,0.0575,0.6319,0.2816,Americas,South America,Peru,2000
2002,PE,0,0,0.0627,0.6268,0.2248,Americas,South America,Peru,2000
2003,PE,0,0,0.0532,0.6695,0.3415,Americas,South America,Peru,2000
2004,PE,0,0,0.0695,0.602,0.2549,Americas,South America,Peru,2000
2005,PE,0,0,0.0673,0.5881000000000001,0.2157,Americas,South America,Peru,2000
2006,PE,0,0,0.0707,0.6047,0.2741,Americas,South America,Peru,2000
2007,PE,0,0,0.0741,0.6058,0.2767,Americas,South America,Peru,2000
2008,PE,0,0,0.0776,0.5829,0.2313,Americas,South America,Peru,2000
2009,PE,0,0,0.0836,0.5684,0.1958,Americas,South America,Peru,2000
2010,PE,0,0,0.0866,0.5693,0.2356,Americas,South America,Peru,2010
2011,PE,0,0,0.0856,0.5664,0.2329,Americas,South America,Peru,2010
2012,PE,0,0,0.0887,0.5599000000000001,0.2199,Americas,South America,Peru,2010
2013,PE,0,0,0.0879,0.5645,0.2329,Americas,South America,Peru,2010
2014,PE,0,0,0.0914,0.5531,0.2411,Americas,South America,Peru,2010
2015,PE,0,0,0.0895,0.5699000000000001,0.2452,Americas,South America,Peru,2010
2016,PE,0,0,0.0879,0.5726,0.2289,Americas,South America,Peru,2010
2017,PE,0,0,0.077,0.6078,0.2414,Americas,South America,Peru,2010
2018,PE,0,0,0.0834,0.5866,0.2289,Americas,South America,Peru,2010
2019,PE,0,0,0.0936,0.5543,0.2163,Americas,South America,Peru,2010
2020,PE,0,0,0.0534,0.6361,0.3112,Americas,South America,Peru,2020
2021,PE,0,0,0.0829,0.5941000000000001,0.274,Americas,South America,Peru,2020
2022,PE,0,0,0.0893,0.5795,0.269,Americas,South America,Peru,2020
2023,PE,0,0,0.0893,0.5795,0.269,Americas,South America,Peru,2020
1980,PF,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1981,PF,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1982,PF,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1983,PF,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1984,PF,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1985,PF,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1986,PF,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1987,PF,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1988,PF,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1989,PF,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1980
1990,PF,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1991,PF,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1992,PF,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1993,PF,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1994,PF,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1995,PF,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1996,PF,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1997,PF,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1998,PF,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
1999,PF,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,1990
2000,PF,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2001,PF,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2002,PF,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2003,PF,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2004,PF,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2005,PF,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2006,PF,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2007,PF,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2008,PF,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2009,PF,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2000
2010,PF,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2011,PF,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2012,PF,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2013,PF,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2014,PF,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2015,PF,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2016,PF,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2017,PF,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2018,PF,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2019,PF,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2010
2020,PF,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2020
2021,PF,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2020
2022,PF,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2020
2023,PF,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),French Polynesia,2020
1980,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1981,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1982,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1983,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1984,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1985,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1986,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1987,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1988,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1989,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1980
1990,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1991,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1992,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1993,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1994,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1995,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1996,PG,0,0.0016,0.1091,0.5025000000000001,0.1806,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1997,PG,0,0.0017,0.1109,0.4995,0.1787,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1998,PG,0,0.0017,0.1124,0.4967,0.1773,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
1999,PG,0,0.0017,0.1137,0.4940000000000001,0.1762,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,1990
2000,PG,0,0.0017,0.1149,0.4915,0.1754,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2001,PG,0,0.0017,0.1165,0.4884,0.1739,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2002,PG,0,0.0018,0.1178,0.4857,0.173,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2003,PG,0,0.0018,0.1191,0.4829,0.172,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2004,PG,0,0.0018,0.1208,0.4796,0.1705,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2005,PG,0,0.0018,0.1221,0.4768,0.1696,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2006,PG,0,0.0018,0.1233,0.4739,0.1688,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2007,PG,0,0.0019,0.125,0.4706,0.1674,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2008,PG,0,0.0019,0.1274,0.4663,0.1651,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2009,PG,0,0.0019,0.1303,0.4614,0.1621,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2000
2010,PG,0,0.0019,0.129,0.4629,0.1638,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2011,PG,0,0.0019,0.1289,0.463,0.164,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2012,PG,0,0.0019,0.1288,0.4631,0.164,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2013,PG,0,0.0019,0.129,0.4629,0.1639,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2014,PG,0,0.0019,0.1291,0.4628,0.1636,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2015,PG,0,0.0019,0.1297,0.4621,0.1628,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2016,PG,0,0.0019,0.1292,0.4627,0.1636,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2017,PG,0,0.0019,0.1288,0.4631,0.1641,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2018,PG,0,0.0019,0.1289,0.463,0.164,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2019,PG,0,0.0019,0.1291,0.4628,0.1637,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2010
2020,PG,0,0.0019,0.1291,0.4628,0.1637,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2020
2021,PG,0,0.0019,0.1291,0.4628,0.1637,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2020
2022,PG,0,0.0019,0.1291,0.4628,0.1637,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2020
2023,PG,0,0.0019,0.1291,0.4628,0.1637,Oceania,Oceania (excl. Australia and New Zealand),Papua New Guinea,2020
1980,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1981,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1982,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1983,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1984,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1985,PH,0,0.0021,0.1305,0.4942,0.1957,Asia,South-East Asia,Philippines,1980
1986,PH,0,0.0021,0.1307,0.4906,0.1912,Asia,South-East Asia,Philippines,1980
1987,PH,0,0.0021,0.1308,0.4873,0.187,Asia,South-East Asia,Philippines,1980
1988,PH,0,0.0021,0.1309,0.4841,0.1829,Asia,South-East Asia,Philippines,1980
1989,PH,0,0.002,0.1266,0.4947,0.1917,Asia,South-East Asia,Philippines,1980
1990,PH,0,0.002,0.1225,0.5049,0.2001,Asia,South-East Asia,Philippines,1990
1991,PH,0,0.0019,0.1185,0.5145000000000001,0.2081,Asia,South-East Asia,Philippines,1990
1992,PH,0,0.0019,0.1198,0.5094000000000001,0.2028,Asia,South-East Asia,Philippines,1990
1993,PH,0,0.0019,0.1212,0.5043,0.1975,Asia,South-East Asia,Philippines,1990
1994,PH,0,0.0019,0.1215,0.5,0.1933,Asia,South-East Asia,Philippines,1990
1995,PH,0,0.0018,0.116,0.5159,0.2145,Asia,South-East Asia,Philippines,1990
1996,PH,0,0.0017,0.1117,0.5299,0.2328,Asia,South-East Asia,Philippines,1990
1997,PH,0,0.0017,0.1075,0.5425,0.2496,Asia,South-East Asia,Philippines,1990
1998,PH,0,0.0018,0.1118,0.5334,0.2382,Asia,South-East Asia,Philippines,1990
1999,PH,0,0.0019,0.1164,0.5237,0.2261,Asia,South-East Asia,Philippines,1990
2000,PH,0,0.0019,0.1174,0.5154,0.2164,Asia,South-East Asia,Philippines,2000
2001,PH,0,0.0018,0.117,0.5093,0.2066,Asia,South-East Asia,Philippines,2000
2002,PH,0,0.0019,0.1197,0.5012,0.1934,Asia,South-East Asia,Philippines,2000
2003,PH,0,0.0019,0.1227,0.4922,0.1791,Asia,South-East Asia,Philippines,2000
2004,PH,0,0.0019,0.121,0.4922,0.181,Asia,South-East Asia,Philippines,2000
2005,PH,0,0.0019,0.121,0.4908,0.1807,Asia,South-East Asia,Philippines,2000
2006,PH,0,0.0019,0.1218,0.4888,0.1796,Asia,South-East Asia,Philippines,2000
2007,PH,0,0.002,0.1232,0.4873,0.1782,Asia,South-East Asia,Philippines,2000
2008,PH,0,0.002,0.1244,0.4861,0.1772,Asia,South-East Asia,Philippines,2000
2009,PH,0,0.002,0.1236,0.4867,0.1786,Asia,South-East Asia,Philippines,2000
2010,PH,0,0.002,0.1236,0.486,0.1787,Asia,South-East Asia,Philippines,2010
2011,PH,0,0.002,0.1249,0.4843,0.177,Asia,South-East Asia,Philippines,2010
2012,PH,0,0.002,0.126,0.4827,0.1756,Asia,South-East Asia,Philippines,2010
2013,PH,0,0.0021,0.1277,0.4785,0.175,Asia,South-East Asia,Philippines,2010
2014,PH,0,0.0021,0.1303,0.4737,0.1732,Asia,South-East Asia,Philippines,2010
2015,PH,0,0.0021,0.1323,0.4697,0.172,Asia,South-East Asia,Philippines,2010
2016,PH,0,0.0022,0.1357,0.4647,0.1707,Asia,South-East Asia,Philippines,2010
2017,PH,0,0.0023,0.1395,0.4594,0.1686,Asia,South-East Asia,Philippines,2010
2018,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2010
2019,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2010
2020,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2020
2021,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2020
2022,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2020
2023,PH,0,0.0024,0.1435,0.454,0.1662,Asia,South-East Asia,Philippines,2020
1980,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1981,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1982,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1983,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1984,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1985,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1986,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1987,PK,0,0.0028,0.1625,0.4394,0.1573,Asia,South Asia,Pakistan,1980
1988,PK,0,0.0027,0.1627,0.4363,0.1551,Asia,South Asia,Pakistan,1980
1989,PK,0,0.0027,0.1629,0.4333,0.153,Asia,South Asia,Pakistan,1980
1990,PK,0,0.0027,0.1631,0.4304,0.1509,Asia,South Asia,Pakistan,1990
1991,PK,0,0.0028,0.1658,0.429,0.1536,Asia,South Asia,Pakistan,1990
1992,PK,0,0.0029,0.1685,0.4276,0.1563,Asia,South Asia,Pakistan,1990
1993,PK,0,0.0029,0.1711,0.4262,0.1589,Asia,South Asia,Pakistan,1990
1994,PK,0,0.003,0.1737,0.4248,0.1615,Asia,South Asia,Pakistan,1990
1995,PK,0,0.0031,0.1762,0.4235,0.164,Asia,South Asia,Pakistan,1990
1996,PK,0,0.0032,0.1787,0.4222,0.1665,Asia,South Asia,Pakistan,1990
1997,PK,0,0.003,0.1693,0.4412,0.1764,Asia,South Asia,Pakistan,1990
1998,PK,0,0.0028,0.1605,0.4593,0.1856,Asia,South Asia,Pakistan,1990
1999,PK,0,0.0028,0.1623,0.4527,0.1817,Asia,South Asia,Pakistan,1990
2000,PK,0,0.0029,0.165,0.4452,0.1769,Asia,South Asia,Pakistan,2000
2001,PK,0,0.0029,0.1681,0.4371,0.1717,Asia,South Asia,Pakistan,2000
2002,PK,0,0.0028,0.1632,0.4429,0.1731,Asia,South Asia,Pakistan,2000
2003,PK,0,0.0027,0.1579,0.4491,0.1754,Asia,South Asia,Pakistan,2000
2004,PK,0,0.0026,0.1555,0.4524,0.1752,Asia,South Asia,Pakistan,2000
2005,PK,0,0.0026,0.1519,0.4688000000000001,0.193,Asia,South Asia,Pakistan,2000
2006,PK,0,0.0027,0.1569,0.4547,0.1809,Asia,South Asia,Pakistan,2000
2007,PK,0,0.0028,0.1614,0.441,0.1692,Asia,South Asia,Pakistan,2000
2008,PK,0,0.0029,0.1681,0.4329,0.1642,Asia,South Asia,Pakistan,2000
2009,PK,0,0.003,0.1712,0.4283,0.1623,Asia,South Asia,Pakistan,2000
2010,PK,0,0.0029,0.1696,0.4285,0.1645,Asia,South Asia,Pakistan,2010
2011,PK,0,0.003,0.1706,0.4322,0.1685,Asia,South Asia,Pakistan,2010
2012,PK,0,0.003,0.1719,0.4272,0.1665,Asia,South Asia,Pakistan,2010
2013,PK,0,0.003,0.1735,0.4219,0.1643,Asia,South Asia,Pakistan,2010
2014,PK,0,0.003,0.1702,0.4322,0.169,Asia,South Asia,Pakistan,2010
2015,PK,0,0.003,0.1682,0.441,0.1726,Asia,South Asia,Pakistan,2010
2016,PK,0,0.003,0.1701,0.4362,0.1702,Asia,South Asia,Pakistan,2010
2017,PK,0,0.003,0.1715,0.4321,0.1684,Asia,South Asia,Pakistan,2010
2018,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2010
2019,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2010
2020,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2020
2021,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2020
2022,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2020
2023,PK,0,0.003,0.173,0.4281,0.1665,Asia,South Asia,Pakistan,2020
1980,PL,0,0.005,0.2826,0.2186,0.0424,Europe,Eastern Europe,Poland,1980
1981,PL,0,0.005,0.2826,0.2186,0.0424,Europe,Eastern Europe,Poland,1980
1982,PL,0,0.005,0.2826,0.2186,0.0424,Europe,Eastern Europe,Poland,1980
1983,PL,0,0.005,0.2826,0.2186,0.0424,Europe,Eastern Europe,Poland,1980
1984,PL,0,0.0048,0.2786,0.2251,0.0473,Europe,Eastern Europe,Poland,1980
1985,PL,0,0.0048,0.2779,0.2211,0.0418,Europe,Eastern Europe,Poland,1980
1986,PL,0,0.0048,0.2763,0.2221,0.0418,Europe,Eastern Europe,Poland,1980
1987,PL,0,0.0049,0.2799,0.2178,0.043,Europe,Eastern Europe,Poland,1980
1988,PL,0,0.005,0.2824,0.2149,0.0416,Europe,Eastern Europe,Poland,1980
1989,PL,0,0.0046,0.2733,0.2246,0.044,Europe,Eastern Europe,Poland,1980
1990,PL,0,0.0044,0.2651,0.2388,0.054,Europe,Eastern Europe,Poland,1990
1991,PL,0,0.0043,0.2566,0.2543,0.0646,Europe,Eastern Europe,Poland,1990
1992,PL,0,0.0044,0.2509,0.258,0.0752,Europe,Eastern Europe,Poland,1990
1993,PL,0,0.0044,0.2499,0.2646,0.0809,Europe,Eastern Europe,Poland,1990
1994,PL,0,0.0042,0.2423,0.2846,0.0954,Europe,Eastern Europe,Poland,1990
1995,PL,0,0.004,0.231,0.3095,0.1101,Europe,Eastern Europe,Poland,1990
1996,PL,0,0.0039,0.2286,0.3084,0.0896,Europe,Eastern Europe,Poland,1990
1997,PL,0,0.0039,0.231,0.3073,0.0972,Europe,Eastern Europe,Poland,1990
1998,PL,0,0.004,0.228,0.3204,0.1084,Europe,Eastern Europe,Poland,1990
1999,PL,0,0.004,0.2284,0.3177,0.1065,Europe,Eastern Europe,Poland,1990
2000,PL,0,0.0038,0.2186,0.3325,0.1042,Europe,Eastern Europe,Poland,2000
2001,PL,0,0.0036,0.2154,0.3329,0.1001,Europe,Eastern Europe,Poland,2000
2002,PL,0,0.0035,0.2099,0.3427,0.1042,Europe,Eastern Europe,Poland,2000
2003,PL,0,0.0034,0.2035,0.3519,0.1024,Europe,Eastern Europe,Poland,2000
2004,PL,0,0.0032,0.1992,0.3635,0.1295,Europe,Eastern Europe,Poland,2000
2005,PL,0,0.0025,0.1951,0.3622,0.1352,Europe,Eastern Europe,Poland,2000
2006,PL,0,0.0033,0.1977,0.3705,0.1424,Europe,Eastern Europe,Poland,2000
2007,PL,0,0.0034,0.199,0.3719,0.1577,Europe,Eastern Europe,Poland,2000
2008,PL,0,0.0033,0.1955,0.3783,0.1493,Europe,Eastern Europe,Poland,2000
2009,PL,0,0.0033,0.1989,0.3643,0.1362,Europe,Eastern Europe,Poland,2000
2010,PL,0,0.0034,0.2015,0.3632,0.1315,Europe,Eastern Europe,Poland,2010
2011,PL,0,0.0033,0.2001,0.3672,0.137,Europe,Eastern Europe,Poland,2010
2012,PL,0,0.0033,0.2032,0.3644,0.1359,Europe,Eastern Europe,Poland,2010
2013,PL,0,0.0033,0.2034,0.3626,0.1328,Europe,Eastern Europe,Poland,2010
2014,PL,0,0.0033,0.2026,0.3681,0.1383,Europe,Eastern Europe,Poland,2010
2015,PL,0,0.0033,0.2002,0.3739,0.146,Europe,Eastern Europe,Poland,2010
2016,PL,0,0.0032,0.1999,0.3696,0.1426,Europe,Eastern Europe,Poland,2010
2017,PL,0,0.0033,0.2023,0.3665,0.1414,Europe,Eastern Europe,Poland,2010
2018,PL,0,0.0033,0.1978,0.3703,0.143,Europe,Eastern Europe,Poland,2010
2019,PL,0,0.0032,0.1961,0.3789,0.1486,Europe,Eastern Europe,Poland,2010
2020,PL,0,0.0032,0.1947,0.383,0.1522,Europe,Eastern Europe,Poland,2020
2021,PL,0,0.0032,0.1947,0.383,0.1522,Europe,Eastern Europe,Poland,2020
2022,PL,0,0.0032,0.1947,0.383,0.1522,Europe,Eastern Europe,Poland,2020
2023,PL,0,0.0032,0.1947,0.383,0.1522,Europe,Eastern Europe,Poland,2020
1980,PR,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Puerto Rico,1980
1981,PR,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Puerto Rico,1980
1982,PR,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Puerto Rico,1980
1983,PR,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Puerto Rico,1980
1984,PR,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Puerto Rico,1980
1985,PR,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Puerto Rico,1980
1986,PR,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Puerto Rico,1980
1987,PR,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Puerto Rico,1980
1988,PR,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Puerto Rico,1980
1989,PR,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Puerto Rico,1980
1990,PR,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Puerto Rico,1990
1991,PR,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Puerto Rico,1990
1992,PR,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Puerto Rico,1990
1993,PR,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Puerto Rico,1990
1994,PR,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Puerto Rico,1990
1995,PR,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Puerto Rico,1990
1996,PR,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Puerto Rico,1990
1997,PR,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Puerto Rico,1990
1998,PR,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Puerto Rico,1990
1999,PR,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Puerto Rico,1990
2000,PR,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Puerto Rico,2000
2001,PR,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Puerto Rico,2000
2002,PR,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Puerto Rico,2000
2003,PR,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Puerto Rico,2000
2004,PR,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Puerto Rico,2000
2005,PR,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Puerto Rico,2000
2006,PR,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Puerto Rico,2000
2007,PR,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Puerto Rico,2000
2008,PR,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Puerto Rico,2000
2009,PR,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Puerto Rico,2000
2010,PR,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Puerto Rico,2010
2011,PR,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Puerto Rico,2010
2012,PR,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Puerto Rico,2010
2013,PR,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Puerto Rico,2010
2014,PR,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Puerto Rico,2010
2015,PR,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Puerto Rico,2010
2016,PR,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Puerto Rico,2010
2017,PR,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Puerto Rico,2010
2018,PR,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Puerto Rico,2010
2019,PR,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Puerto Rico,2010
2020,PR,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Puerto Rico,2020
2021,PR,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Puerto Rico,2020
2022,PR,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Puerto Rico,2020
2023,PR,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Puerto Rico,2020
1980,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1981,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1982,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1983,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1984,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1985,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1986,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1987,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1988,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1989,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1980
1990,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1991,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1992,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1993,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1994,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1995,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1996,PS,0,0.0019,0.1176,0.5346000000000001,0.201,Asia,West Asia,Palestine,1990
1997,PS,0,0.0019,0.1191,0.5297000000000001,0.195,Asia,West Asia,Palestine,1990
1998,PS,0,0.0019,0.116,0.5348,0.1942,Asia,West Asia,Palestine,1990
1999,PS,0,0.0019,0.1156,0.5362,0.1956,Asia,West Asia,Palestine,1990
2000,PS,0,0.0019,0.1152,0.5376000000000001,0.1971,Asia,West Asia,Palestine,2000
2001,PS,0,0.0019,0.1147,0.5392,0.1988,Asia,West Asia,Palestine,2000
2002,PS,0,0.0018,0.1142,0.5409,0.2007,Asia,West Asia,Palestine,2000
2003,PS,0,0.0018,0.1137,0.5428000000000001,0.2027,Asia,West Asia,Palestine,2000
2004,PS,0,0.0018,0.1131,0.5448000000000001,0.2049,Asia,West Asia,Palestine,2000
2005,PS,0,0.0016,0.1055,0.5536,0.2155,Asia,West Asia,Palestine,2000
2006,PS,0,0.0017,0.1057,0.555,0.2094,Asia,West Asia,Palestine,2000
2007,PS,0,0.0015,0.0966,0.5748,0.2264,Asia,West Asia,Palestine,2000
2008,PS,0,0.0016,0.1029,0.5615,0.2103,Asia,West Asia,Palestine,2000
2009,PS,0,0.0017,0.1089,0.5488000000000001,0.195,Asia,West Asia,Palestine,2000
2010,PS,0,0.0016,0.1027,0.5693,0.223,Asia,West Asia,Palestine,2010
2011,PS,0,0.0019,0.1217,0.5238,0.1825,Asia,West Asia,Palestine,2010
2012,PS,0,0.0021,0.122,0.5416000000000001,0.2227,Asia,West Asia,Palestine,2010
2013,PS,0,0.002,0.1223,0.5344,0.212,Asia,West Asia,Palestine,2010
2014,PS,0,0.002,0.1227,0.5275000000000001,0.2017,Asia,West Asia,Palestine,2010
2015,PS,0,0.002,0.123,0.5208,0.1918,Asia,West Asia,Palestine,2010
2016,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2010
2017,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2010
2018,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2010
2019,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2010
2020,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2020
2021,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2020
2022,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2020
2023,PS,0,0.002,0.1233,0.5144000000000001,0.1823,Asia,West Asia,Palestine,2020
1980,PT,0,0.0033,0.1998,0.2933,0.0678,Europe,Western Europe,Portugal,1980
1981,PT,0,0.0035,0.2046,0.2837,0.0661,Europe,Western Europe,Portugal,1980
1982,PT,0,0.0031,0.1877,0.3146,0.0676,Europe,Western Europe,Portugal,1980
1983,PT,0,0.0029,0.1867,0.3239,0.0691,Europe,Western Europe,Portugal,1980
1984,PT,0,0.0028,0.1851,0.3301,0.0707,Europe,Western Europe,Portugal,1980
1985,PT,0,0.0028,0.1844,0.3352,0.0737,Europe,Western Europe,Portugal,1980
1986,PT,0,0.0028,0.1838,0.3397,0.0769,Europe,Western Europe,Portugal,1980
1987,PT,0,0.0026,0.182,0.3443,0.079,Europe,Western Europe,Portugal,1980
1988,PT,0,0.0026,0.18,0.3491,0.081,Europe,Western Europe,Portugal,1980
1989,PT,0,0.0025,0.1779,0.3539,0.0832,Europe,Western Europe,Portugal,1980
1990,PT,0,0.0031,0.204,0.3289,0.0886,Europe,Western Europe,Portugal,1990
1991,PT,0,0.0029,0.1942,0.3402,0.0905,Europe,Western Europe,Portugal,1990
1992,PT,0,0.0027,0.1884,0.3469,0.0916,Europe,Western Europe,Portugal,1990
1993,PT,0,0.0025,0.1783,0.3604,0.0959,Europe,Western Europe,Portugal,1990
1994,PT,0,0.0025,0.1769,0.3634,0.0967,Europe,Western Europe,Portugal,1990
1995,PT,0,0.0026,0.1802,0.3669,0.0987,Europe,Western Europe,Portugal,1990
1996,PT,0,0.0029,0.187,0.3621,0.0967,Europe,Western Europe,Portugal,1990
1997,PT,0,0.0028,0.1843,0.3704,0.1011,Europe,Western Europe,Portugal,1990
1998,PT,0,0.0029,0.1881,0.3688,0.1028,Europe,Western Europe,Portugal,1990
1999,PT,0,0.003,0.1863,0.3767,0.1078,Europe,Western Europe,Portugal,1990
2000,PT,0,0.0028,0.1843,0.3745,0.1045,Europe,Western Europe,Portugal,2000
2001,PT,0,0.0027,0.1754,0.3934,0.1117,Europe,Western Europe,Portugal,2000
2002,PT,0,0.0028,0.1796,0.3809,0.103,Europe,Western Europe,Portugal,2000
2003,PT,0,0.0029,0.1812,0.3753,0.1031,Europe,Western Europe,Portugal,2000
2004,PT,0,0.0027,0.1732,0.394,0.1087,Europe,Western Europe,Portugal,2000
2005,PT,0,0.0028,0.1761,0.3883,0.1043,Europe,Western Europe,Portugal,2000
2006,PT,0,0.0028,0.1725,0.3962,0.1052,Europe,Western Europe,Portugal,2000
2007,PT,0,0.0029,0.1751,0.3954,0.111,Europe,Western Europe,Portugal,2000
2008,PT,0,0.003,0.1845,0.3806,0.0973,Europe,Western Europe,Portugal,2000
2009,PT,0,0.0031,0.1881,0.3747,0.0967,Europe,Western Europe,Portugal,2000
2010,PT,0,0.0031,0.1864,0.3794,0.1004,Europe,Western Europe,Portugal,2010
2011,PT,0,0.003,0.1846,0.3827,0.1115,Europe,Western Europe,Portugal,2010
2012,PT,0,0.0031,0.1909,0.3667,0.1014,Europe,Western Europe,Portugal,2010
2013,PT,0,0.0029,0.1833,0.3725,0.1054,Europe,Western Europe,Portugal,2010
2014,PT,0,0.003,0.185,0.3731,0.1072,Europe,Western Europe,Portugal,2010
2015,PT,0,0.003,0.1862,0.3716,0.1086,Europe,Western Europe,Portugal,2010
2016,PT,0,0.003,0.1878,0.373,0.1093,Europe,Western Europe,Portugal,2010
2017,PT,0,0.0031,0.1894,0.3764,0.1165,Europe,Western Europe,Portugal,2010
2018,PT,0,0.0032,0.1946,0.3673,0.1114,Europe,Western Europe,Portugal,2010
2019,PT,0,0.0032,0.1967,0.3604,0.1002,Europe,Western Europe,Portugal,2010
2020,PT,0,0.0033,0.1992,0.3535,0.0933,Europe,Western Europe,Portugal,2020
2021,PT,0,0.0034,0.2043,0.3378,0.0858,Europe,Western Europe,Portugal,2020
2022,PT,0,0.0033,0.2014,0.3446,0.0918,Europe,Western Europe,Portugal,2020
2023,PT,0,0.0033,0.199,0.3503,0.097,Europe,Western Europe,Portugal,2020
1980,PW,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1981,PW,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1982,PW,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1983,PW,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1984,PW,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1985,PW,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1986,PW,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1987,PW,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1988,PW,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1989,PW,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Palau,1980
1990,PW,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1991,PW,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1992,PW,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1993,PW,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1994,PW,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1995,PW,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1996,PW,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1997,PW,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1998,PW,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
1999,PW,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Palau,1990
2000,PW,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2001,PW,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2002,PW,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2003,PW,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2004,PW,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2005,PW,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2006,PW,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2007,PW,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2008,PW,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2009,PW,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Palau,2000
2010,PW,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2011,PW,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2012,PW,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2013,PW,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2014,PW,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2015,PW,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2016,PW,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2017,PW,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2018,PW,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2019,PW,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Palau,2010
2020,PW,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Palau,2020
2021,PW,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Palau,2020
2022,PW,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Palau,2020
2023,PW,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Palau,2020
1980,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1981,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1982,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1983,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1984,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1985,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1986,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1987,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1988,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1989,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1980
1990,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1991,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1992,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1993,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1994,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1995,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1996,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1997,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1998,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
1999,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,1990
2000,PY,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Paraguay,2000
2001,PY,0,0.0001,0.0805,0.5636,0.1984,Americas,South America,Paraguay,2000
2002,PY,0,0,0.0809,0.5626,0.1928,Americas,South America,Paraguay,2000
2003,PY,0,0,0.0854,0.5605,0.2043,Americas,South America,Paraguay,2000
2004,PY,0,0.0001,0.0878,0.556,0.1999,Americas,South America,Paraguay,2000
2005,PY,0,0.0001,0.087,0.5555,0.193,Americas,South America,Paraguay,2000
2006,PY,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,South America,Paraguay,2000
2007,PY,0,0.0002,0.0888,0.5641,0.211,Americas,South America,Paraguay,2000
2008,PY,0,0.0003,0.0903,0.56,0.2029,Americas,South America,Paraguay,2000
2009,PY,0,0.0004,0.0926,0.5486,0.1928,Americas,South America,Paraguay,2000
2010,PY,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,South America,Paraguay,2010
2011,PY,0,0.0005,0.0976,0.541,0.1982,Americas,South America,Paraguay,2010
2012,PY,0,0.0005,0.1001,0.5332,0.197,Americas,South America,Paraguay,2010
2013,PY,0,0.0006,0.1006,0.5404,0.2057,Americas,South America,Paraguay,2010
2014,PY,0,0.0005,0.1026,0.5304,0.2046,Americas,South America,Paraguay,2010
2015,PY,0,0.0005,0.1032,0.5312,0.1942,Americas,South America,Paraguay,2010
2016,PY,0,0.0004,0.1034,0.5334,0.1984,Americas,South America,Paraguay,2010
2017,PY,0,0.0003,0.1031,0.5311,0.1884,Americas,South America,Paraguay,2010
2018,PY,0,0.0003,0.1016,0.5354,0.1976,Americas,South America,Paraguay,2010
2019,PY,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,South America,Paraguay,2010
2020,PY,0,0.0001,0.0872,0.5466,0.2043,Americas,South America,Paraguay,2020
2021,PY,0,0.0001,0.0972,0.5299,0.1892,Americas,South America,Paraguay,2020
2022,PY,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Paraguay,2020
2023,PY,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Paraguay,2020
1980,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1981,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1982,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1983,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1984,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1985,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1986,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1987,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1988,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1989,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1980
1990,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1991,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1992,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1993,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1994,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1995,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1996,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1997,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1998,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
1999,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,1990
2000,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2001,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2002,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2003,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2004,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2005,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2006,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2007,QA,0,0.0013,0.0951,0.5539000000000001,0.2281,Asia,West Asia,Qatar,2000
2008,QA,0,0.0014,0.0956,0.5572,0.2314,Asia,West Asia,Qatar,2000
2009,QA,0,0.0014,0.096,0.5603,0.2345,Asia,West Asia,Qatar,2000
2010,QA,0,0.0014,0.0964,0.5633,0.2375,Asia,West Asia,Qatar,2010
2011,QA,0,0.0015,0.0968,0.5660000000000001,0.2403,Asia,West Asia,Qatar,2010
2012,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2013,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2014,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2015,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2016,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2017,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2018,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2019,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2010
2020,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2020
2021,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2020
2022,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2020
2023,QA,0,0.0015,0.0971,0.5686,0.2429,Asia,West Asia,Qatar,2020
1980,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1981,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1982,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1983,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1984,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1985,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1986,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1987,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1988,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1989,RO,0,0.0044,0.2518,0.2659,0.0607,Europe,Eastern Europe,Romania,1980
1990,RO,0,0.0043,0.2488,0.2677,0.0615,Europe,Eastern Europe,Romania,1990
1991,RO,0,0.0042,0.245,0.2737,0.065,Europe,Eastern Europe,Romania,1990
1992,RO,0,0.004,0.2387,0.2807,0.0681,Europe,Eastern Europe,Romania,1990
1993,RO,0,0.0039,0.2285,0.3013,0.0792,Europe,Eastern Europe,Romania,1990
1994,RO,0,0.0038,0.2199,0.3204,0.0895,Europe,Eastern Europe,Romania,1990
1995,RO,0,0.0028,0.1867,0.3659,0.1174,Europe,Eastern Europe,Romania,1990
1996,RO,0,0.0026,0.1814,0.376,0.1226,Europe,Eastern Europe,Romania,1990
1997,RO,0,0.0027,0.1824,0.3742,0.1241,Europe,Eastern Europe,Romania,1990
1998,RO,0,0.0029,0.1903,0.3625,0.1151,Europe,Eastern Europe,Romania,1990
1999,RO,0,0.0028,0.185,0.3753,0.1243,Europe,Eastern Europe,Romania,1990
2000,RO,0,0.0027,0.1807,0.3785,0.1245,Europe,Eastern Europe,Romania,2000
2001,RO,0,0.0028,0.1868,0.3617,0.1133,Europe,Eastern Europe,Romania,2000
2002,RO,0,0.0021,0.1786,0.3753,0.1231,Europe,Eastern Europe,Romania,2000
2003,RO,0,0.0016,0.1639,0.4039,0.141,Europe,Eastern Europe,Romania,2000
2004,RO,0,0.0021,0.1673,0.401,0.1391,Europe,Eastern Europe,Romania,2000
2005,RO,0,0.0025,0.1687,0.4059,0.1429,Europe,Eastern Europe,Romania,2000
2006,RO,0,0.0023,0.1603,0.4241,0.1557,Europe,Eastern Europe,Romania,2000
2007,RO,0,0.0022,0.1455,0.4577,0.1846,Europe,Eastern Europe,Romania,2000
2008,RO,0,0.0021,0.1585,0.4264,0.1587,Europe,Eastern Europe,Romania,2000
2009,RO,0,0.0024,0.1629,0.4214,0.1587,Europe,Eastern Europe,Romania,2000
2010,RO,0,0.0023,0.1733,0.3972,0.1424,Europe,Eastern Europe,Romania,2010
2011,RO,0,0.0013,0.1654,0.3999,0.1416,Europe,Eastern Europe,Romania,2010
2012,RO,0,0.0015,0.1607,0.4219,0.1618,Europe,Eastern Europe,Romania,2010
2013,RO,0,0.0016,0.1629,0.4084,0.1487,Europe,Eastern Europe,Romania,2010
2014,RO,0,0.0013,0.1561,0.4279,0.1687,Europe,Eastern Europe,Romania,2010
2015,RO,0,0.0013,0.1577,0.4255,0.1689,Europe,Eastern Europe,Romania,2010
2016,RO,0,0.0022,0.1757,0.3808,0.1307,Europe,Eastern Europe,Romania,2010
2017,RO,0,0.0023,0.1694,0.3882,0.1323,Europe,Eastern Europe,Romania,2010
2018,RO,0,0.0023,0.1552,0.4029,0.1342,Europe,Eastern Europe,Romania,2010
2019,RO,0,0.0022,0.156,0.3984,0.1291,Europe,Eastern Europe,Romania,2010
2020,RO,0,0.0023,0.1559,0.4029,0.1335,Europe,Eastern Europe,Romania,2020
2021,RO,0,0.0023,0.1559,0.4029,0.1335,Europe,Eastern Europe,Romania,2020
2022,RO,0,0.0023,0.1559,0.4029,0.1335,Europe,Eastern Europe,Romania,2020
2023,RO,0,0.0023,0.1559,0.4029,0.1335,Europe,Eastern Europe,Romania,2020
1980,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1981,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1982,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1983,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1984,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1985,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1986,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1987,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1988,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1989,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1980
1990,RS,0,0.001,0.1402,0.3837,0.1244,Europe,Eastern Europe,Serbia,1990
1991,RS,0,0.001,0.1402,0.3843,0.1251,Europe,Eastern Europe,Serbia,1990
1992,RS,0,0.001,0.1401,0.3849,0.1258,Europe,Eastern Europe,Serbia,1990
1993,RS,0,0.001,0.14,0.3856,0.1265,Europe,Eastern Europe,Serbia,1990
1994,RS,0,0.001,0.1399,0.3863,0.1273,Europe,Eastern Europe,Serbia,1990
1995,RS,0,0.001,0.1398,0.3871,0.1281,Europe,Eastern Europe,Serbia,1990
1996,RS,0,0.001,0.1398,0.3872,0.1282,Europe,Eastern Europe,Serbia,1990
1997,RS,0,0.001,0.1397,0.3875,0.1284,Europe,Eastern Europe,Serbia,1990
1998,RS,0,0.0011,0.1403,0.3876,0.1288,Europe,Eastern Europe,Serbia,1990
1999,RS,0,0.0011,0.1411,0.3871,0.1287,Europe,Eastern Europe,Serbia,1990
2000,RS,0,0.0011,0.1402,0.3882,0.1293,Europe,Eastern Europe,Serbia,2000
2001,RS,0,0.0011,0.1405,0.3869,0.1281,Europe,Eastern Europe,Serbia,2000
2002,RS,0,0.001,0.1397,0.387,0.1279,Europe,Eastern Europe,Serbia,2000
2003,RS,0,0.0012,0.1435,0.3827,0.1255,Europe,Eastern Europe,Serbia,2000
2004,RS,0,0.0011,0.143,0.3824,0.125,Europe,Eastern Europe,Serbia,2000
2005,RS,0,0.0012,0.1429,0.385,0.1274,Europe,Eastern Europe,Serbia,2000
2006,RS,0,0.0011,0.1417,0.3864,0.1282,Europe,Eastern Europe,Serbia,2000
2007,RS,0,0.0022,0.1671,0.3613,0.1138,Europe,Eastern Europe,Serbia,2000
2008,RS,0,0.0021,0.1657,0.36,0.1117,Europe,Eastern Europe,Serbia,2000
2009,RS,0,0.002,0.1602,0.3739,0.124,Europe,Eastern Europe,Serbia,2000
2010,RS,0,0.0011,0.1399,0.3891,0.1314,Europe,Eastern Europe,Serbia,2010
2011,RS,0,0.0011,0.1388,0.394,0.1363,Europe,Eastern Europe,Serbia,2010
2012,RS,0,0.0009,0.1386,0.3928,0.1345,Europe,Eastern Europe,Serbia,2010
2013,RS,0,0.0006,0.1286,0.4102,0.1471,Europe,Eastern Europe,Serbia,2010
2014,RS,0,0.0006,0.1234,0.4221,0.1624,Europe,Eastern Europe,Serbia,2010
2015,RS,0,0.0005,0.1284,0.4182,0.1617,Europe,Eastern Europe,Serbia,2010
2016,RS,0,0.0004,0.1227,0.4299,0.1725,Europe,Eastern Europe,Serbia,2010
2017,RS,0,0.0004,0.1493,0.3779,0.1319,Europe,Eastern Europe,Serbia,2010
2018,RS,0,0.001,0.1654,0.3586,0.1203,Europe,Eastern Europe,Serbia,2010
2019,RS,0,0.001,0.1657,0.3566,0.1182,Europe,Eastern Europe,Serbia,2010
2020,RS,0,0.001,0.1637,0.3637,0.125,Europe,Eastern Europe,Serbia,2020
2021,RS,0,0.001,0.1637,0.3637,0.125,Europe,Eastern Europe,Serbia,2020
2022,RS,0,0.001,0.1637,0.3637,0.125,Europe,Eastern Europe,Serbia,2020
2023,RS,0,0.001,0.1637,0.3637,0.125,Europe,Eastern Europe,Serbia,2020
1980,RU,0,0.0054,0.2884,0.2168,0.0356,Asia,West Asia,Russian Federation,1980
1981,RU,0,0.0054,0.2869,0.2204,0.0379,Asia,West Asia,Russian Federation,1980
1982,RU,0,0.0053,0.2854,0.2238,0.0401,Asia,West Asia,Russian Federation,1980
1983,RU,0,0.0053,0.2841,0.2269,0.042,Asia,West Asia,Russian Federation,1980
1984,RU,0,0.0053,0.2829,0.2298,0.0439,Asia,West Asia,Russian Federation,1980
1985,RU,0,0.0053,0.2818,0.2324,0.0456,Asia,West Asia,Russian Federation,1980
1986,RU,0,0.0053,0.2813,0.2327,0.0471,Asia,West Asia,Russian Federation,1980
1987,RU,0,0.0052,0.2808,0.233,0.0487,Asia,West Asia,Russian Federation,1980
1988,RU,0,0.0052,0.2803,0.2333,0.0501,Asia,West Asia,Russian Federation,1980
1989,RU,0,0.005,0.2731,0.2468,0.0562,Asia,West Asia,Russian Federation,1980
1990,RU,0,0.0056,0.2837,0.2395,0.0745,Asia,West Asia,Russian Federation,1990
1991,RU,0,0.0055,0.2791,0.2501,0.0852,Asia,West Asia,Russian Federation,1990
1992,RU,0,0.0038,0.2167,0.3245,0.1013,Asia,West Asia,Russian Federation,1990
1993,RU,0,0.0025,0.203,0.3421,0.1111,Asia,West Asia,Russian Federation,1990
1994,RU,0,0.0023,0.1553,0.4029,0.1208,Asia,West Asia,Russian Federation,1990
1995,RU,0,0.0013,0.1417,0.423,0.1378,Asia,West Asia,Russian Federation,1990
1996,RU,0,0.0001,0.099,0.4832,0.1616,Asia,West Asia,Russian Federation,1990
1997,RU,0,0.0006,0.1262,0.4533,0.1523,Asia,West Asia,Russian Federation,1990
1998,RU,0,0.001,0.1456,0.4344,0.1489,Asia,West Asia,Russian Federation,1990
1999,RU,0,0.0021,0.1412,0.4652,0.1845,Asia,West Asia,Russian Federation,1990
2000,RU,0,0.002,0.1343,0.4917,0.2159,Asia,West Asia,Russian Federation,2000
2001,RU,0,0.002,0.1327,0.4986,0.2453,Asia,West Asia,Russian Federation,2000
2002,RU,0,0.0022,0.1375,0.4805,0.2391,Asia,West Asia,Russian Federation,2000
2003,RU,0,0.0021,0.1341,0.4807,0.2325,Asia,West Asia,Russian Federation,2000
2004,RU,0,0.0023,0.1389,0.478,0.2188,Asia,West Asia,Russian Federation,2000
2005,RU,0,0.0023,0.1435,0.4716,0.2389,Asia,West Asia,Russian Federation,2000
2006,RU,0,0.0023,0.1376,0.4904,0.247,Asia,West Asia,Russian Federation,2000
2007,RU,0,0.0022,0.1354,0.4867,0.259,Asia,West Asia,Russian Federation,2000
2008,RU,0,0.0021,0.1311,0.516,0.2375,Asia,West Asia,Russian Federation,2000
2009,RU,0,0.0024,0.1453,0.4923,0.2058,Asia,West Asia,Russian Federation,2000
2010,RU,0,0.0027,0.1646,0.4521,0.1903,Asia,West Asia,Russian Federation,2010
2011,RU,0,0.0027,0.1599,0.4774,0.203,Asia,West Asia,Russian Federation,2010
2012,RU,0,0.0029,0.1663,0.4518,0.1881,Asia,West Asia,Russian Federation,2010
2013,RU,0,0.0027,0.16,0.47,0.1991,Asia,West Asia,Russian Federation,2010
2014,RU,0,0.0029,0.1685,0.4502,0.191,Asia,West Asia,Russian Federation,2010
2015,RU,0,0.0029,0.1708,0.4486,0.186,Asia,West Asia,Russian Federation,2010
2016,RU,0,0.0029,0.1702,0.453,0.1944,Asia,West Asia,Russian Federation,2010
2017,RU,0,0.003,0.1734,0.4509,0.2,Asia,West Asia,Russian Federation,2010
2018,RU,0,0.0029,0.1703,0.4598,0.205,Asia,West Asia,Russian Federation,2010
2019,RU,0,0.0029,0.1699,0.4616,0.2021,Asia,West Asia,Russian Federation,2010
2020,RU,0,0.0027,0.1568,0.5077,0.2376,Asia,West Asia,Russian Federation,2020
2021,RU,0,0.0027,0.1568,0.5077,0.2376,Asia,West Asia,Russian Federation,2020
2022,RU,0,0.0027,0.1568,0.5077,0.2376,Asia,West Asia,Russian Federation,2020
2023,RU,0,0.0027,0.1568,0.5077,0.2376,Asia,West Asia,Russian Federation,2020
1980,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1981,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1982,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1983,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1984,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1985,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1986,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1987,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1988,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1989,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1980
1990,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1991,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1992,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1993,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1994,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1995,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1996,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1997,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1998,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
1999,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,1990
2000,RW,0,0.0016,0.1014,0.5981000000000001,0.2408,Africa,East Africa,Rwanda,2000
2001,RW,0,0.0016,0.0992,0.6041000000000001,0.2465,Africa,East Africa,Rwanda,2000
2002,RW,0,0.0015,0.0969,0.6101,0.2522,Africa,East Africa,Rwanda,2000
2003,RW,0,0.0015,0.0947,0.616,0.2579,Africa,East Africa,Rwanda,2000
2004,RW,0,0.0014,0.0925,0.622,0.2636,Africa,East Africa,Rwanda,2000
2005,RW,0,0.0014,0.0903,0.6279,0.2693,Africa,East Africa,Rwanda,2000
2006,RW,0,0.0015,0.0933,0.6203000000000001,0.2628,Africa,East Africa,Rwanda,2000
2007,RW,0,0.0015,0.0962,0.6126,0.2563,Africa,East Africa,Rwanda,2000
2008,RW,0,0.0016,0.0992,0.605,0.2498,Africa,East Africa,Rwanda,2000
2009,RW,0,0.0016,0.1021,0.5973,0.2433,Africa,East Africa,Rwanda,2000
2010,RW,0,0.0017,0.1051,0.5896,0.2368,Africa,East Africa,Rwanda,2010
2011,RW,0,0.0017,0.1078,0.5830000000000001,0.2336,Africa,East Africa,Rwanda,2010
2012,RW,0,0.0018,0.1105,0.5763,0.2305,Africa,East Africa,Rwanda,2010
2013,RW,0,0.0018,0.1133,0.5696,0.2273,Africa,East Africa,Rwanda,2010
2014,RW,0,0.0018,0.115,0.5596,0.2178,Africa,East Africa,Rwanda,2010
2015,RW,0,0.0019,0.1167,0.5495,0.2084,Africa,East Africa,Rwanda,2010
2016,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2010
2017,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2010
2018,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2010
2019,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2010
2020,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2020
2021,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2020
2022,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2020
2023,RW,0,0.0019,0.1184,0.5394,0.1989,Africa,East Africa,Rwanda,2020
1980,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1981,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1982,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1983,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1984,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1985,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1986,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1987,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1988,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1989,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1980
1990,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1991,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1992,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1993,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1994,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1995,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1996,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1997,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1998,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
1999,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,1990
2000,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2001,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2002,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2003,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2004,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2005,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2006,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2007,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2008,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2009,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2000
2010,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2011,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2012,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2013,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2014,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2015,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2016,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2017,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2018,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2019,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2010
2020,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2020
2021,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2020
2022,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2020
2023,SA,0,0.0018,0.1078,0.5544,0.2523,Asia,West Asia,Saudi Arabia,2020
1980,SB,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1981,SB,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1982,SB,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1983,SB,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1984,SB,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1985,SB,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1986,SB,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1987,SB,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1988,SB,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1989,SB,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1980
1990,SB,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1991,SB,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1992,SB,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1993,SB,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1994,SB,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1995,SB,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1996,SB,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1997,SB,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1998,SB,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
1999,SB,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,1990
2000,SB,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2001,SB,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2002,SB,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2003,SB,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2004,SB,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2005,SB,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2006,SB,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2007,SB,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2008,SB,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2009,SB,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2000
2010,SB,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2011,SB,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2012,SB,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2013,SB,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2014,SB,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2015,SB,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2016,SB,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2017,SB,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2018,SB,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2019,SB,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2010
2020,SB,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2020
2021,SB,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2020
2022,SB,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2020
2023,SB,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Solomon Islands,2020
1980,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1981,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1982,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1983,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1984,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1985,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1986,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1987,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1988,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1989,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1980
1990,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1991,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1992,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1993,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1994,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1995,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1996,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1997,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1998,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
1999,SC,0,0.0019,0.1228,0.5263,0.2183,Africa,East Africa,Seychelles,1990
2000,SC,0,0.0019,0.1227,0.5253,0.2164,Africa,East Africa,Seychelles,2000
2001,SC,0,0.0019,0.1225,0.5243,0.2144,Africa,East Africa,Seychelles,2000
2002,SC,0,0.0019,0.1223,0.5233,0.2124,Africa,East Africa,Seychelles,2000
2003,SC,0,0.0019,0.1222,0.5223,0.2104,Africa,East Africa,Seychelles,2000
2004,SC,0,0.0019,0.122,0.5213,0.2085,Africa,East Africa,Seychelles,2000
2005,SC,0,0.0019,0.1219,0.5203,0.2065,Africa,East Africa,Seychelles,2000
2006,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2000
2007,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2000
2008,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2000
2009,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2000
2010,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2011,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2012,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2013,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2014,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2015,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2016,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2017,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2018,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2019,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2010
2020,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2020
2021,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2020
2022,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2020
2023,SC,0,0.0019,0.1217,0.5194,0.2045,Africa,East Africa,Seychelles,2020
1980,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1981,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1982,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1983,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1984,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1985,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1986,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1987,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1988,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1989,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1980
1990,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1991,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1992,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1993,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1994,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1995,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1996,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1997,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1998,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
1999,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,1990
2000,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2001,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2002,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2003,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2004,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2005,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2006,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2007,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2008,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2009,SD,0,0.0024,0.1554,0.4251,0.113,Africa,North Africa,Sudan,2000
2010,SD,0,0.0025,0.1559,0.4301,0.1211,Africa,North Africa,Sudan,2010
2011,SD,0,0.0025,0.1563,0.4351,0.1292,Africa,North Africa,Sudan,2010
2012,SD,0,0.0025,0.1568,0.4402,0.1373,Africa,North Africa,Sudan,2010
2013,SD,0,0.0026,0.1573,0.4452,0.1454,Africa,North Africa,Sudan,2010
2014,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2015,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2016,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2017,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2018,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2019,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2010
2020,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2020
2021,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2020
2022,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2020
2023,SD,0,0.0026,0.1577,0.4503,0.1535,Africa,North Africa,Sudan,2020
1980,SE,0,0.0048,0.2685,0.2543,0.0696,Europe,Western Europe,Sweden,1980
1981,SE,0,0.0048,0.2696,0.254,0.0712,Europe,Western Europe,Sweden,1980
1982,SE,0,0.0047,0.2663,0.2643,0.0811,Europe,Western Europe,Sweden,1980
1983,SE,0,0.0047,0.2652,0.2679,0.0843,Europe,Western Europe,Sweden,1980
1984,SE,0,0.0046,0.2599,0.2815,0.0966,Europe,Western Europe,Sweden,1980
1985,SE,0,0.0047,0.2623,0.2784,0.0938,Europe,Western Europe,Sweden,1980
1986,SE,0,0.0047,0.2645,0.2773,0.0922,Europe,Western Europe,Sweden,1980
1987,SE,0,0.0047,0.2634,0.2781,0.0929,Europe,Western Europe,Sweden,1980
1988,SE,0,0.0046,0.2586,0.2847,0.0995,Europe,Western Europe,Sweden,1980
1989,SE,0,0.0047,0.263,0.2768,0.093,Europe,Western Europe,Sweden,1980
1990,SE,0,0.0047,0.2672,0.2622,0.0779,Europe,Western Europe,Sweden,1990
1991,SE,0,0.0047,0.2648,0.2676,0.0775,Europe,Western Europe,Sweden,1990
1992,SE,0,0.0047,0.2665,0.2646,0.0751,Europe,Western Europe,Sweden,1990
1993,SE,0,0.0047,0.2612,0.2747,0.0831,Europe,Western Europe,Sweden,1990
1994,SE,0,0.0045,0.2518,0.3031,0.106,Europe,Western Europe,Sweden,1990
1995,SE,0,0.0045,0.2494,0.3125,0.1146,Europe,Western Europe,Sweden,1990
1996,SE,0,0.0045,0.2517,0.3053,0.1052,Europe,Western Europe,Sweden,1990
1997,SE,0,0.0044,0.2455,0.3159,0.1138,Europe,Western Europe,Sweden,1990
1998,SE,0,0.0045,0.2447,0.3162,0.115,Europe,Western Europe,Sweden,1990
1999,SE,0,0.0043,0.2412,0.3186,0.117,Europe,Western Europe,Sweden,1990
2000,SE,0,0.0046,0.2532,0.3089,0.1006,Europe,Western Europe,Sweden,2000
2001,SE,0,0.0047,0.2568,0.2965,0.0878,Europe,Western Europe,Sweden,2000
2002,SE,0,0.0047,0.2557,0.3005,0.0922,Europe,Western Europe,Sweden,2000
2003,SE,0,0.0045,0.2514,0.3097,0.1036,Europe,Western Europe,Sweden,2000
2004,SE,0,0.0045,0.25,0.315,0.1102,Europe,Western Europe,Sweden,2000
2005,SE,0,0.0043,0.2433,0.3233,0.1151,Europe,Western Europe,Sweden,2000
2006,SE,0,0.0043,0.2396,0.3345,0.1265,Europe,Western Europe,Sweden,2000
2007,SE,0,0.0042,0.237,0.3267,0.1208,Europe,Western Europe,Sweden,2000
2008,SE,0,0.0042,0.2398,0.3134,0.1082,Europe,Western Europe,Sweden,2000
2009,SE,0,0.0041,0.2396,0.3006,0.095,Europe,Western Europe,Sweden,2000
2010,SE,0,0.0039,0.229,0.3134,0.1085,Europe,Western Europe,Sweden,2010
2011,SE,0,0.004,0.2324,0.309,0.1036,Europe,Western Europe,Sweden,2010
2012,SE,0,0.0044,0.2469,0.2966,0.0965,Europe,Western Europe,Sweden,2010
2013,SE,0,0.0043,0.2458,0.297,0.0961,Europe,Western Europe,Sweden,2010
2014,SE,0,0.0042,0.2423,0.2969,0.0951,Europe,Western Europe,Sweden,2010
2015,SE,0,0.0041,0.2371,0.3064,0.1011,Europe,Western Europe,Sweden,2010
2016,SE,0,0.0042,0.2442,0.2903,0.089,Europe,Western Europe,Sweden,2010
2017,SE,0,0.0042,0.2438,0.2955,0.0935,Europe,Western Europe,Sweden,2010
2018,SE,0,0.0042,0.2442,0.2919,0.0919,Europe,Western Europe,Sweden,2010
2019,SE,0,0.0041,0.2392,0.3028,0.1005,Europe,Western Europe,Sweden,2010
2020,SE,0,0.004,0.231,0.3229,0.1171,Europe,Western Europe,Sweden,2020
2021,SE,0,0.0039,0.2288,0.3225,0.1204,Europe,Western Europe,Sweden,2020
2022,SE,0,0.004,0.2315,0.3156,0.1146,Europe,Western Europe,Sweden,2020
2023,SE,0,0.004,0.2343,0.3089,0.1091,Europe,Western Europe,Sweden,2020
1980,SG,0,0.0038,0.2114,0.3553,0.1064,Asia,South-East Asia,Singapore,1980
1981,SG,0,0.0038,0.2112,0.3561,0.108,Asia,South-East Asia,Singapore,1980
1982,SG,0,0.0037,0.207,0.3649,0.1099,Asia,South-East Asia,Singapore,1980
1983,SG,0,0.0038,0.211,0.356,0.1065,Asia,South-East Asia,Singapore,1980
1984,SG,0,0.0038,0.2132,0.3509,0.1037,Asia,South-East Asia,Singapore,1980
1985,SG,0,0.0036,0.2046,0.3696,0.1086,Asia,South-East Asia,Singapore,1980
1986,SG,0,0.0037,0.2073,0.3628,0.1045,Asia,South-East Asia,Singapore,1980
1987,SG,0,0.0035,0.1977,0.3853,0.1145,Asia,South-East Asia,Singapore,1980
1988,SG,0,0.0036,0.2052,0.3679,0.1065,Asia,South-East Asia,Singapore,1980
1989,SG,0,0.0036,0.2028,0.3743,0.1115,Asia,South-East Asia,Singapore,1980
1990,SG,0,0.0036,0.2013,0.3766,0.1094,Asia,South-East Asia,Singapore,1990
1991,SG,0,0.0037,0.2093,0.3584,0.1009,Asia,South-East Asia,Singapore,1990
1992,SG,0,0.0037,0.2111,0.3545,0.1046,Asia,South-East Asia,Singapore,1990
1993,SG,0,0.0038,0.2113,0.3541,0.1072,Asia,South-East Asia,Singapore,1990
1994,SG,0,0.0039,0.2203,0.336,0.1022,Asia,South-East Asia,Singapore,1990
1995,SG,0,0.0039,0.2205,0.3345,0.1004,Asia,South-East Asia,Singapore,1990
1996,SG,0,0.0036,0.2051,0.3511,0.1016,Asia,South-East Asia,Singapore,1990
1997,SG,0,0.0036,0.205,0.3516,0.1048,Asia,South-East Asia,Singapore,1990
1998,SG,0,0.0034,0.1967,0.3704,0.1126,Asia,South-East Asia,Singapore,1990
1999,SG,0,0.0032,0.1832,0.4055,0.1295,Asia,South-East Asia,Singapore,1990
2000,SG,0,0.0031,0.1787,0.4199,0.1344,Asia,South-East Asia,Singapore,2000
2001,SG,0,0.0028,0.1635,0.464,0.1525,Asia,South-East Asia,Singapore,2000
2002,SG,0,0.0029,0.1655,0.4615,0.1525,Asia,South-East Asia,Singapore,2000
2003,SG,0,0.003,0.1714,0.4471,0.1443,Asia,South-East Asia,Singapore,2000
2004,SG,0,0.0032,0.1808,0.425,0.1381,Asia,South-East Asia,Singapore,2000
2005,SG,0,0.0033,0.1869,0.4167,0.1382,Asia,South-East Asia,Singapore,2000
2006,SG,0,0.0032,0.1804,0.4296,0.1445,Asia,South-East Asia,Singapore,2000
2007,SG,0,0.0032,0.1834,0.4193,0.1428,Asia,South-East Asia,Singapore,2000
2008,SG,0,0.0029,0.1658,0.4674,0.1535,Asia,South-East Asia,Singapore,2000
2009,SG,0,0.003,0.1728,0.448,0.1385,Asia,South-East Asia,Singapore,2000
2010,SG,0,0.0031,0.1773,0.4336,0.1359,Asia,South-East Asia,Singapore,2010
2011,SG,0,0.003,0.1713,0.4512,0.1404,Asia,South-East Asia,Singapore,2010
2012,SG,0,0.003,0.1715,0.4497,0.1376,Asia,South-East Asia,Singapore,2010
2013,SG,0,0.003,0.1702,0.4526,0.1376,Asia,South-East Asia,Singapore,2010
2014,SG,0,0.0029,0.167,0.4617,0.1421,Asia,South-East Asia,Singapore,2010
2015,SG,0,0.0029,0.1667,0.4624,0.1421,Asia,South-East Asia,Singapore,2010
2016,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2010
2017,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2010
2018,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2010
2019,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2010
2020,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2020
2021,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2020
2022,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2020
2023,SG,0,0.0029,0.1665,0.4628,0.1421,Asia,South-East Asia,Singapore,2020
1980,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1981,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1982,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1983,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1984,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1985,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1986,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1987,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1988,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1989,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1980
1990,SI,0,0.005,0.2808,0.2235,0.0426,Europe,Eastern Europe,Slovenia,1990
1991,SI,0,0.005,0.2806,0.2244,0.0429,Europe,Eastern Europe,Slovenia,1990
1992,SI,0,0.0049,0.2743,0.2355,0.0483,Europe,Eastern Europe,Slovenia,1990
1993,SI,0,0.0042,0.2426,0.266,0.0565,Europe,Eastern Europe,Slovenia,1990
1994,SI,0,0.0045,0.2563,0.2604,0.0592,Europe,Eastern Europe,Slovenia,1990
1995,SI,0,0.0041,0.2376,0.2795,0.0644,Europe,Eastern Europe,Slovenia,1990
1996,SI,0,0.004,0.2341,0.2867,0.0659,Europe,Eastern Europe,Slovenia,1990
1997,SI,0,0.0041,0.2364,0.2873,0.0695,Europe,Eastern Europe,Slovenia,1990
1998,SI,0,0.0041,0.2372,0.2903,0.0724,Europe,Eastern Europe,Slovenia,1990
1999,SI,0,0.0039,0.2296,0.3002,0.0772,Europe,Eastern Europe,Slovenia,1990
2000,SI,0,0.0038,0.2316,0.2897,0.0726,Europe,Eastern Europe,Slovenia,2000
2001,SI,0,0.0039,0.2328,0.2868,0.0688,Europe,Eastern Europe,Slovenia,2000
2002,SI,0,0.0038,0.23,0.2927,0.07,Europe,Eastern Europe,Slovenia,2000
2003,SI,0,0.0038,0.2255,0.3013,0.0751,Europe,Eastern Europe,Slovenia,2000
2004,SI,0,0.0039,0.2267,0.3018,0.0761,Europe,Eastern Europe,Slovenia,2000
2005,SI,0,0.0038,0.2232,0.3027,0.0746,Europe,Eastern Europe,Slovenia,2000
2006,SI,0,0.0037,0.2219,0.3031,0.0779,Europe,Eastern Europe,Slovenia,2000
2007,SI,0,0.0037,0.224,0.3037,0.0816,Europe,Eastern Europe,Slovenia,2000
2008,SI,0,0.0038,0.2247,0.3041,0.0808,Europe,Eastern Europe,Slovenia,2000
2009,SI,0,0.0039,0.2272,0.2977,0.0713,Europe,Eastern Europe,Slovenia,2000
2010,SI,0,0.0038,0.2256,0.2985,0.0717,Europe,Eastern Europe,Slovenia,2010
2011,SI,0,0.0039,0.2291,0.2926,0.0702,Europe,Eastern Europe,Slovenia,2010
2012,SI,0,0.0036,0.2236,0.2947,0.0693,Europe,Eastern Europe,Slovenia,2010
2013,SI,0,0.0036,0.224,0.293,0.0706,Europe,Eastern Europe,Slovenia,2010
2014,SI,0,0.0037,0.2223,0.2996,0.0782,Europe,Eastern Europe,Slovenia,2010
2015,SI,0,0.0037,0.2255,0.2902,0.0711,Europe,Eastern Europe,Slovenia,2010
2016,SI,0,0.0039,0.2249,0.2939,0.0738,Europe,Eastern Europe,Slovenia,2010
2017,SI,0,0.004,0.2285,0.2947,0.0795,Europe,Eastern Europe,Slovenia,2010
2018,SI,0,0.0041,0.2307,0.296,0.0805,Europe,Eastern Europe,Slovenia,2010
2019,SI,0,0.0041,0.2308,0.2942,0.0758,Europe,Eastern Europe,Slovenia,2010
2020,SI,0,0.0041,0.2288,0.2993,0.0797,Europe,Eastern Europe,Slovenia,2020
2021,SI,0,0.0041,0.2288,0.2993,0.0797,Europe,Eastern Europe,Slovenia,2020
2022,SI,0,0.0041,0.2288,0.2993,0.0797,Europe,Eastern Europe,Slovenia,2020
2023,SI,0,0.0041,0.2288,0.2993,0.0797,Europe,Eastern Europe,Slovenia,2020
1980,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1981,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1982,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1983,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1984,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1985,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1986,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1987,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1988,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1989,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1980
1990,SK,0,0.0053,0.2797,0.2339,0.0524,Europe,Eastern Europe,Slovakia,1990
1991,SK,0,0.0053,0.2799,0.233,0.0517,Europe,Eastern Europe,Slovakia,1990
1992,SK,0,0.0053,0.2802,0.2323,0.0509,Europe,Eastern Europe,Slovakia,1990
1993,SK,0,0.0049,0.2695,0.2423,0.0562,Europe,Eastern Europe,Slovakia,1990
1994,SK,0,0.0048,0.265,0.2482,0.0596,Europe,Eastern Europe,Slovakia,1990
1995,SK,0,0.0048,0.2637,0.2474,0.0584,Europe,Eastern Europe,Slovakia,1990
1996,SK,0,0.0047,0.2603,0.2527,0.0609,Europe,Eastern Europe,Slovakia,1990
1997,SK,0,0.0048,0.261,0.2528,0.0626,Europe,Eastern Europe,Slovakia,1990
1998,SK,0,0.0046,0.2546,0.2652,0.0712,Europe,Eastern Europe,Slovakia,1990
1999,SK,0,0.0045,0.2503,0.27,0.0742,Europe,Eastern Europe,Slovakia,1990
2000,SK,0,0.0045,0.2496,0.2752,0.0769,Europe,Eastern Europe,Slovakia,2000
2001,SK,0,0.0042,0.2366,0.2977,0.0885,Europe,Eastern Europe,Slovakia,2000
2002,SK,0,0.0044,0.2419,0.286,0.0825,Europe,Eastern Europe,Slovakia,2000
2003,SK,0,0.0044,0.2427,0.281,0.0796,Europe,Eastern Europe,Slovakia,2000
2004,SK,0,0.003,0.2263,0.3051,0.0967,Europe,Eastern Europe,Slovakia,2000
2005,SK,0,0.0042,0.2297,0.3026,0.0928,Europe,Eastern Europe,Slovakia,2000
2006,SK,0,0.0042,0.2281,0.3074,0.0953,Europe,Eastern Europe,Slovakia,2000
2007,SK,0,0.0042,0.2294,0.305,0.0924,Europe,Eastern Europe,Slovakia,2000
2008,SK,0,0.0043,0.2345,0.297,0.0861,Europe,Eastern Europe,Slovakia,2000
2009,SK,0,0.0044,0.2417,0.2941,0.0912,Europe,Eastern Europe,Slovakia,2000
2010,SK,0,0.0041,0.2325,0.3175,0.11,Europe,Eastern Europe,Slovakia,2010
2011,SK,0,0.0042,0.2354,0.3032,0.0963,Europe,Eastern Europe,Slovakia,2010
2012,SK,0,0.0033,0.2403,0.2967,0.095,Europe,Eastern Europe,Slovakia,2010
2013,SK,0,0.0041,0.2332,0.3258,0.1165,Europe,Eastern Europe,Slovakia,2010
2014,SK,0,0.0044,0.2469,0.3005,0.103,Europe,Eastern Europe,Slovakia,2010
2015,SK,0,0.0043,0.2398,0.3156,0.1117,Europe,Eastern Europe,Slovakia,2010
2016,SK,0,0.0044,0.2455,0.2939,0.0922,Europe,Eastern Europe,Slovakia,2010
2017,SK,0,0.0045,0.2501,0.2742,0.0854,Europe,Eastern Europe,Slovakia,2010
2018,SK,0,0.0043,0.242,0.2751,0.0796,Europe,Eastern Europe,Slovakia,2010
2019,SK,0,0.0044,0.2448,0.2671,0.073,Europe,Eastern Europe,Slovakia,2010
2020,SK,0,0.0043,0.2436,0.2703,0.076,Europe,Eastern Europe,Slovakia,2020
2021,SK,0,0.0045,0.2525,0.2561,0.07,Europe,Eastern Europe,Slovakia,2020
2022,SK,0,0.0046,0.2545,0.2505,0.0647,Europe,Eastern Europe,Slovakia,2020
2023,SK,0,0.0043,0.2434,0.2802,0.0918,Europe,Eastern Europe,Slovakia,2020
1980,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1981,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1982,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1983,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1984,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1985,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1986,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1987,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1988,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1989,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1980
1990,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1991,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1992,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1993,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1994,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1995,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1996,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1997,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1998,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
1999,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,1990
2000,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,2000
2001,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,2000
2002,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,2000
2003,SL,0,0.0022,0.1339,0.4871,0.1292,Africa,West Africa,Sierra Leone,2000
2004,SL,0,0.0022,0.137,0.4799,0.1264,Africa,West Africa,Sierra Leone,2000
2005,SL,0,0.0023,0.1402,0.4728,0.1236,Africa,West Africa,Sierra Leone,2000
2006,SL,0,0.0024,0.1433,0.4656,0.1208,Africa,West Africa,Sierra Leone,2000
2007,SL,0,0.0024,0.1465,0.4583,0.118,Africa,West Africa,Sierra Leone,2000
2008,SL,0,0.0025,0.1497,0.4511,0.1153,Africa,West Africa,Sierra Leone,2000
2009,SL,0,0.0025,0.1528,0.4439,0.1125,Africa,West Africa,Sierra Leone,2000
2010,SL,0,0.0026,0.156,0.4367,0.1096,Africa,West Africa,Sierra Leone,2010
2011,SL,0,0.0026,0.1592,0.4295,0.1068,Africa,West Africa,Sierra Leone,2010
2012,SL,0,0.0026,0.1578,0.4352,0.113,Africa,West Africa,Sierra Leone,2010
2013,SL,0,0.0026,0.1565,0.441,0.1192,Africa,West Africa,Sierra Leone,2010
2014,SL,0,0.0026,0.1552,0.4468,0.1254,Africa,West Africa,Sierra Leone,2010
2015,SL,0,0.0026,0.1539,0.4526,0.1316,Africa,West Africa,Sierra Leone,2010
2016,SL,0,0.0025,0.1526,0.4584,0.1378,Africa,West Africa,Sierra Leone,2010
2017,SL,0,0.0025,0.1513,0.4642,0.144,Africa,West Africa,Sierra Leone,2010
2018,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2010
2019,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2010
2020,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2020
2021,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2020
2022,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2020
2023,SL,0,0.0025,0.1499,0.47,0.1502,Africa,West Africa,Sierra Leone,2020
1980,SM,0,0.0032,0.203,0.3228,0.0909,Europe,Western Europe,San Marino,1980
1981,SM,0,0.0031,0.2027,0.323,0.0907,Europe,Western Europe,San Marino,1980
1982,SM,0,0.003,0.2017,0.3224,0.0904,Europe,Western Europe,San Marino,1980
1983,SM,0,0.0031,0.2037,0.3236,0.0915,Europe,Western Europe,San Marino,1980
1984,SM,0,0.003,0.2021,0.327,0.0935,Europe,Western Europe,San Marino,1980
1985,SM,0,0.003,0.1982,0.329,0.0937,Europe,Western Europe,San Marino,1980
1986,SM,0,0.003,0.2007,0.3256,0.0935,Europe,Western Europe,San Marino,1980
1987,SM,0,0.0031,0.2024,0.3253,0.0928,Europe,Western Europe,San Marino,1980
1988,SM,0,0.0032,0.2079,0.3245,0.0933,Europe,Western Europe,San Marino,1980
1989,SM,0,0.0031,0.2066,0.3262,0.0944,Europe,Western Europe,San Marino,1980
1990,SM,0,0.0032,0.2087,0.3253,0.0923,Europe,Western Europe,San Marino,1990
1991,SM,0,0.0032,0.21,0.3232,0.0915,Europe,Western Europe,San Marino,1990
1992,SM,0,0.0032,0.2055,0.332,0.0951,Europe,Western Europe,San Marino,1990
1993,SM,0,0.003,0.1992,0.3343,0.0962,Europe,Western Europe,San Marino,1990
1994,SM,0,0.0029,0.1939,0.3416,0.1007,Europe,Western Europe,San Marino,1990
1995,SM,0,0.0029,0.1956,0.3386,0.0975,Europe,Western Europe,San Marino,1990
1996,SM,0,0.0029,0.195,0.3404,0.1009,Europe,Western Europe,San Marino,1990
1997,SM,0,0.0028,0.1918,0.3482,0.1068,Europe,Western Europe,San Marino,1990
1998,SM,0,0.0028,0.1926,0.3495,0.1081,Europe,Western Europe,San Marino,1990
1999,SM,0,0.0028,0.1925,0.3499,0.1088,Europe,Western Europe,San Marino,1990
2000,SM,0,0.0028,0.1893,0.3556,0.1129,Europe,Western Europe,San Marino,2000
2001,SM,0,0.0028,0.1892,0.3512,0.1086,Europe,Western Europe,San Marino,2000
2002,SM,0,0.0028,0.1919,0.346,0.105,Europe,Western Europe,San Marino,2000
2003,SM,0,0.0027,0.1896,0.3472,0.1074,Europe,Western Europe,San Marino,2000
2004,SM,0,0.0023,0.1821,0.3498,0.1114,Europe,Western Europe,San Marino,2000
2005,SM,0,0.0025,0.1844,0.3523,0.1133,Europe,Western Europe,San Marino,2000
2006,SM,0,0.0025,0.182,0.3596,0.12,Europe,Western Europe,San Marino,2000
2007,SM,0,0.0026,0.184,0.3607,0.1198,Europe,Western Europe,San Marino,2000
2008,SM,0,0.0028,0.1916,0.3424,0.1078,Europe,Western Europe,San Marino,2000
2009,SM,0,0.0028,0.1954,0.3346,0.0988,Europe,Western Europe,San Marino,2000
2010,SM,0,0.0026,0.184,0.3515,0.1093,Europe,Western Europe,San Marino,2010
2011,SM,0,0.0026,0.1833,0.3505,0.1087,Europe,Western Europe,San Marino,2010
2012,SM,0,0.0026,0.1846,0.3439,0.1025,Europe,Western Europe,San Marino,2010
2013,SM,0,0.0026,0.1816,0.3464,0.104,Europe,Western Europe,San Marino,2010
2014,SM,0,0.0025,0.1805,0.3509,0.1086,Europe,Western Europe,San Marino,2010
2015,SM,0,0.0026,0.1808,0.3499,0.1066,Europe,Western Europe,San Marino,2010
2016,SM,0,0.0026,0.1814,0.3515,0.1078,Europe,Western Europe,San Marino,2010
2017,SM,0,0.0027,0.1826,0.353,0.1079,Europe,Western Europe,San Marino,2010
2018,SM,0,0.0027,0.1842,0.3528,0.1084,Europe,Western Europe,San Marino,2010
2019,SM,0,0.0028,0.186,0.3505,0.105,Europe,Western Europe,San Marino,2010
2020,SM,0,0.0027,0.1852,0.3489,0.1059,Europe,Western Europe,San Marino,2020
2021,SM,0,0.0027,0.1834,0.3557,0.1141,Europe,Western Europe,San Marino,2020
2022,SM,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,San Marino,2020
2023,SM,0,0.0027,0.184,0.3571,0.1151,Europe,Western Europe,San Marino,2020
1980,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1981,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1982,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1983,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1984,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1985,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1986,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1987,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1988,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1989,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1980
1990,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1991,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1992,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1993,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1994,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1995,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1996,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1997,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1998,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
1999,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,1990
2000,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,2000
2001,SN,0,0.002,0.1266,0.5175000000000001,0.1902,Africa,West Africa,Senegal,2000
2002,SN,0,0.0021,0.1293,0.505,0.1764,Africa,West Africa,Senegal,2000
2003,SN,0,0.0021,0.1321,0.4925,0.1625,Africa,West Africa,Senegal,2000
2004,SN,0,0.0021,0.1349,0.48,0.1486,Africa,West Africa,Senegal,2000
2005,SN,0,0.0021,0.1376,0.4674,0.1348,Africa,West Africa,Senegal,2000
2006,SN,0,0.0021,0.137,0.469,0.1343,Africa,West Africa,Senegal,2000
2007,SN,0,0.0021,0.1363,0.4706,0.1338,Africa,West Africa,Senegal,2000
2008,SN,0,0.0021,0.1357,0.4722,0.1333,Africa,West Africa,Senegal,2000
2009,SN,0,0.0021,0.1351,0.4738,0.1328,Africa,West Africa,Senegal,2000
2010,SN,0,0.0021,0.1344,0.4754,0.1323,Africa,West Africa,Senegal,2010
2011,SN,0,0.0021,0.1338,0.477,0.1318,Africa,West Africa,Senegal,2010
2012,SN,0,0.0021,0.1345,0.4777,0.1345,Africa,West Africa,Senegal,2010
2013,SN,0,0.0021,0.1352,0.4784,0.1372,Africa,West Africa,Senegal,2010
2014,SN,0,0.0022,0.136,0.4791,0.1399,Africa,West Africa,Senegal,2010
2015,SN,0,0.0022,0.1367,0.4798,0.1426,Africa,West Africa,Senegal,2010
2016,SN,0,0.0022,0.1374,0.4805,0.1453,Africa,West Africa,Senegal,2010
2017,SN,0,0.0022,0.1381,0.4812,0.148,Africa,West Africa,Senegal,2010
2018,SN,0,0.0022,0.1388,0.4819000000000001,0.1507,Africa,West Africa,Senegal,2010
2019,SN,0,0.0023,0.1426,0.4736,0.1439,Africa,West Africa,Senegal,2010
2020,SN,0,0.0024,0.1465,0.4652,0.1371,Africa,West Africa,Senegal,2020
2021,SN,0,0.0024,0.1503,0.4568,0.1303,Africa,West Africa,Senegal,2020
2022,SN,0,0.0024,0.1503,0.4568,0.1303,Africa,West Africa,Senegal,2020
2023,SN,0,0.0024,0.1503,0.4568,0.1303,Africa,West Africa,Senegal,2020
1980,SO,0,0.0018,0.114,0.5601,0.2507,Africa,East Africa,Somalia,1980
1981,SO,0,0.0018,0.114,0.5601,0.2508,Africa,East Africa,Somalia,1980
1982,SO,0,0.0018,0.114,0.5603,0.2513,Africa,East Africa,Somalia,1980
1983,SO,0,0.0018,0.114,0.5604,0.2516,Africa,East Africa,Somalia,1980
1984,SO,0,0.0018,0.114,0.5604,0.2519,Africa,East Africa,Somalia,1980
1985,SO,0,0.0018,0.1141,0.5604,0.2521,Africa,East Africa,Somalia,1980
1986,SO,0,0.0018,0.1141,0.5603,0.2524,Africa,East Africa,Somalia,1980
1987,SO,0,0.0018,0.1142,0.5604,0.2529,Africa,East Africa,Somalia,1980
1988,SO,0,0.0018,0.1142,0.5606,0.2536,Africa,East Africa,Somalia,1980
1989,SO,0,0.0018,0.1143,0.5607,0.2542,Africa,East Africa,Somalia,1980
1990,SO,0,0.0018,0.1142,0.5611,0.2549,Africa,East Africa,Somalia,1990
1991,SO,0,0.0018,0.1144,0.5608000000000001,0.2548,Africa,East Africa,Somalia,1990
1992,SO,0,0.0018,0.1148,0.5606,0.2549,Africa,East Africa,Somalia,1990
1993,SO,0,0.0018,0.1154,0.5598000000000001,0.254,Africa,East Africa,Somalia,1990
1994,SO,0,0.0019,0.1161,0.5574,0.251,Africa,East Africa,Somalia,1990
1995,SO,0,0.0019,0.1164,0.5562,0.2482,Africa,East Africa,Somalia,1990
1996,SO,0,0.002,0.1233,0.5387000000000001,0.2285,Africa,East Africa,Somalia,1990
1997,SO,0,0.0021,0.1298,0.5225000000000001,0.2107,Africa,East Africa,Somalia,1990
1998,SO,0,0.0022,0.1368,0.5044000000000001,0.1916,Africa,East Africa,Somalia,1990
1999,SO,0,0.0024,0.1441,0.4856,0.172,Africa,East Africa,Somalia,1990
2000,SO,0,0.0024,0.1435,0.4873,0.1732,Africa,East Africa,Somalia,2000
2001,SO,0,0.0023,0.1428,0.4895,0.1751,Africa,East Africa,Somalia,2000
2002,SO,0,0.0024,0.1435,0.489,0.1762,Africa,East Africa,Somalia,2000
2003,SO,0,0.0024,0.1434,0.4884,0.1757,Africa,East Africa,Somalia,2000
2004,SO,0,0.0024,0.1433,0.4879,0.1753,Africa,East Africa,Somalia,2000
2005,SO,0,0.0023,0.1429,0.4885,0.1751,Africa,East Africa,Somalia,2000
2006,SO,0,0.0023,0.142,0.4899,0.1744,Africa,East Africa,Somalia,2000
2007,SO,0,0.0023,0.1412,0.4913,0.1738,Africa,East Africa,Somalia,2000
2008,SO,0,0.0023,0.1408,0.4918,0.1728,Africa,East Africa,Somalia,2000
2009,SO,0,0.0023,0.1401,0.4934,0.1726,Africa,East Africa,Somalia,2000
2010,SO,0,0.0023,0.1398,0.4936,0.1717,Africa,East Africa,Somalia,2010
2011,SO,0,0.0023,0.1397,0.493,0.1699,Africa,East Africa,Somalia,2010
2012,SO,0,0.0023,0.1391,0.493,0.1683,Africa,East Africa,Somalia,2010
2013,SO,0,0.0022,0.1382,0.4947,0.1685,Africa,East Africa,Somalia,2010
2014,SO,0,0.0022,0.1372,0.4961,0.1686,Africa,East Africa,Somalia,2010
2015,SO,0,0.0022,0.1366,0.4963,0.1672,Africa,East Africa,Somalia,2010
2016,SO,0,0.0022,0.137,0.4953,0.1665,Africa,East Africa,Somalia,2010
2017,SO,0,0.0022,0.1378,0.4932,0.1644,Africa,East Africa,Somalia,2010
2018,SO,0,0.0022,0.1387,0.4907,0.162,Africa,East Africa,Somalia,2010
2019,SO,0,0.0023,0.1397,0.4883,0.1597,Africa,East Africa,Somalia,2010
2020,SO,0,0.0023,0.1401,0.4873,0.1589,Africa,East Africa,Somalia,2020
2021,SO,0,0.0023,0.1391,0.4917,0.1627,Africa,East Africa,Somalia,2020
2022,SO,0,0.0023,0.1392,0.4915,0.1625,Africa,East Africa,Somalia,2020
2023,SO,0,0.0023,0.1392,0.4914,0.1624,Africa,East Africa,Somalia,2020
1980,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1981,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1982,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1983,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1984,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1985,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1986,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1987,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1988,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1989,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1980
1990,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1991,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1992,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1993,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1994,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1995,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1996,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1997,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1998,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
1999,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,1990
2000,SR,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Suriname,2000
2001,SR,0,0.0001,0.0805,0.5636,0.1984,Americas,South America,Suriname,2000
2002,SR,0,0,0.0809,0.5626,0.1928,Americas,South America,Suriname,2000
2003,SR,0,0,0.0854,0.5605,0.2043,Americas,South America,Suriname,2000
2004,SR,0,0.0001,0.0878,0.556,0.1999,Americas,South America,Suriname,2000
2005,SR,0,0.0001,0.087,0.5555,0.193,Americas,South America,Suriname,2000
2006,SR,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,South America,Suriname,2000
2007,SR,0,0.0002,0.0888,0.5641,0.211,Americas,South America,Suriname,2000
2008,SR,0,0.0003,0.0903,0.56,0.2029,Americas,South America,Suriname,2000
2009,SR,0,0.0004,0.0926,0.5486,0.1928,Americas,South America,Suriname,2000
2010,SR,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,South America,Suriname,2010
2011,SR,0,0.0005,0.0976,0.541,0.1982,Americas,South America,Suriname,2010
2012,SR,0,0.0005,0.1001,0.5332,0.197,Americas,South America,Suriname,2010
2013,SR,0,0.0006,0.1006,0.5404,0.2057,Americas,South America,Suriname,2010
2014,SR,0,0.0005,0.1026,0.5304,0.2046,Americas,South America,Suriname,2010
2015,SR,0,0.0005,0.1032,0.5312,0.1942,Americas,South America,Suriname,2010
2016,SR,0,0.0004,0.1034,0.5334,0.1984,Americas,South America,Suriname,2010
2017,SR,0,0.0003,0.1031,0.5311,0.1884,Americas,South America,Suriname,2010
2018,SR,0,0.0003,0.1016,0.5354,0.1976,Americas,South America,Suriname,2010
2019,SR,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,South America,Suriname,2010
2020,SR,0,0.0001,0.0872,0.5466,0.2043,Americas,South America,Suriname,2020
2021,SR,0,0.0001,0.0972,0.5299,0.1892,Americas,South America,Suriname,2020
2022,SR,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Suriname,2020
2023,SR,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Suriname,2020
1980,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1981,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1982,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1983,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1984,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1985,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1986,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1987,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1988,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1989,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1980
1990,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1991,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1992,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1993,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1994,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1995,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1996,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1997,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1998,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
1999,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,1990
2000,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2001,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2002,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2003,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2004,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2005,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2006,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2007,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2008,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2009,SS,0,0.0015,0.1097,0.4938,0.142,Africa,North Africa,South Sudan,2000
2010,SS,0,0.0016,0.1111,0.4945000000000001,0.1437,Africa,North Africa,South Sudan,2010
2011,SS,0,0.0016,0.1125,0.4952,0.1453,Africa,North Africa,South Sudan,2010
2012,SS,0,0.0016,0.1139,0.4959,0.1469,Africa,North Africa,South Sudan,2010
2013,SS,0,0.0017,0.1153,0.4966,0.1486,Africa,North Africa,South Sudan,2010
2014,SS,0,0.0017,0.1167,0.4973,0.1502,Africa,North Africa,South Sudan,2010
2015,SS,0,0.0017,0.1181,0.498,0.1519,Africa,North Africa,South Sudan,2010
2016,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2010
2017,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2010
2018,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2010
2019,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2010
2020,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2020
2021,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2020
2022,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2020
2023,SS,0,0.0018,0.1195,0.4987,0.1535,Africa,North Africa,South Sudan,2020
1980,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1981,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1982,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1983,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1984,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1985,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1986,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1987,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1988,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1989,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1980
1990,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1991,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1992,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1993,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1994,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1995,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1996,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1997,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1998,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
1999,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,1990
2000,ST,0,0.0027,0.1685,0.3965,0.091,Africa,Middle Africa,Sao Tome and Principe,2000
2001,ST,0,0.0027,0.1692,0.3962,0.0909,Africa,Middle Africa,Sao Tome and Principe,2000
2002,ST,0,0.0028,0.1698,0.3959,0.0907,Africa,Middle Africa,Sao Tome and Principe,2000
2003,ST,0,0.0028,0.1705,0.3956,0.0906,Africa,Middle Africa,Sao Tome and Principe,2000
2004,ST,0,0.0028,0.1711,0.3954,0.0904,Africa,Middle Africa,Sao Tome and Principe,2000
2005,ST,0,0.0028,0.1718,0.3951,0.0903,Africa,Middle Africa,Sao Tome and Principe,2000
2006,ST,0,0.0028,0.1724,0.3948,0.0901,Africa,Middle Africa,Sao Tome and Principe,2000
2007,ST,0,0.0028,0.173,0.3946,0.09,Africa,Middle Africa,Sao Tome and Principe,2000
2008,ST,0,0.0028,0.1737,0.3943,0.0898,Africa,Middle Africa,Sao Tome and Principe,2000
2009,ST,0,0.0029,0.1743,0.394,0.0897,Africa,Middle Africa,Sao Tome and Principe,2000
2010,ST,0,0.0029,0.175,0.3937,0.0895,Africa,Middle Africa,Sao Tome and Principe,2010
2011,ST,0,0.0028,0.1686,0.4098,0.0996,Africa,Middle Africa,Sao Tome and Principe,2010
2012,ST,0,0.0027,0.1622,0.4259,0.1097,Africa,Middle Africa,Sao Tome and Principe,2010
2013,ST,0,0.0025,0.1558,0.442,0.1197,Africa,Middle Africa,Sao Tome and Principe,2010
2014,ST,0,0.0024,0.1495,0.458,0.1297,Africa,Middle Africa,Sao Tome and Principe,2010
2015,ST,0,0.0023,0.1431,0.474,0.1397,Africa,Middle Africa,Sao Tome and Principe,2010
2016,ST,0,0.0022,0.1368,0.49,0.1497,Africa,Middle Africa,Sao Tome and Principe,2010
2017,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2010
2018,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2010
2019,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2010
2020,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2020
2021,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2020
2022,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2020
2023,ST,0,0.0021,0.1304,0.5059,0.1597,Africa,Middle Africa,Sao Tome and Principe,2020
1980,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1981,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1982,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1983,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1984,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1985,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1986,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1987,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1988,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1989,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1980
1990,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1991,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1992,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1993,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1994,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1995,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1996,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1997,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1998,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
1999,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,1990
2000,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,2000
2001,SV,0,0,0.0708,0.5078,0.1647,Americas,Central America,El Salvador,2000
2002,SV,0,0,0.0679,0.5092,0.1788,Americas,Central America,El Salvador,2000
2003,SV,0,0,0.0808,0.4950000000000001,0.1595,Americas,Central America,El Salvador,2000
2004,SV,0,0,0.0825,0.5027,0.1723,Americas,Central America,El Salvador,2000
2005,SV,0,0,0.0673,0.5264,0.2011,Americas,Central America,El Salvador,2000
2006,SV,0,0,0.0835,0.5004000000000001,0.1587,Americas,Central America,El Salvador,2000
2007,SV,0,0,0.0824,0.5143,0.179,Americas,Central America,El Salvador,2000
2008,SV,0,0,0.0831,0.5083,0.1697,Americas,Central America,El Salvador,2000
2009,SV,0,0,0.0837,0.5023,0.1605,Americas,Central America,El Salvador,2000
2010,SV,0,0,0.0875,0.4731,0.1335,Americas,Central America,El Salvador,2010
2011,SV,0,0,0.0914,0.469,0.1425,Americas,Central America,El Salvador,2010
2012,SV,0,0,0.0953,0.4649,0.1515,Americas,Central America,El Salvador,2010
2013,SV,0,0,0.0865,0.5257000000000001,0.2314,Americas,Central America,El Salvador,2010
2014,SV,0,0,0.0843,0.5141,0.2152,Americas,Central America,El Salvador,2010
2015,SV,0,0,0.0889,0.4716,0.1519,Americas,Central America,El Salvador,2010
2016,SV,0,0,0.0855,0.4881,0.1943,Americas,Central America,El Salvador,2010
2017,SV,0,0,0.0945,0.4362,0.1388,Americas,Central America,El Salvador,2010
2018,SV,0,0,0.0957,0.4387,0.1375,Americas,Central America,El Salvador,2010
2019,SV,0,0,0.0968,0.4481,0.148,Americas,Central America,El Salvador,2010
2020,SV,0,0,0.0844,0.491,0.1925,Americas,Central America,El Salvador,2020
2021,SV,0,0,0.1003,0.4276,0.1263,Americas,Central America,El Salvador,2020
2022,SV,0,0,0.1052,0.4233,0.1277,Americas,Central America,El Salvador,2020
2023,SV,0,0,0.1052,0.4233,0.1277,Americas,Central America,El Salvador,2020
1980,SX,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Sint Maarten (Dutch part),1980
1981,SX,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Sint Maarten (Dutch part),1980
1982,SX,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Sint Maarten (Dutch part),1980
1983,SX,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Sint Maarten (Dutch part),1980
1984,SX,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Sint Maarten (Dutch part),1980
1985,SX,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Sint Maarten (Dutch part),1980
1986,SX,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Sint Maarten (Dutch part),1980
1987,SX,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Sint Maarten (Dutch part),1980
1988,SX,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Sint Maarten (Dutch part),1980
1989,SX,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Sint Maarten (Dutch part),1980
1990,SX,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Sint Maarten (Dutch part),1990
1991,SX,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Sint Maarten (Dutch part),1990
1992,SX,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Sint Maarten (Dutch part),1990
1993,SX,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Sint Maarten (Dutch part),1990
1994,SX,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Sint Maarten (Dutch part),1990
1995,SX,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Sint Maarten (Dutch part),1990
1996,SX,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Sint Maarten (Dutch part),1990
1997,SX,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Sint Maarten (Dutch part),1990
1998,SX,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Sint Maarten (Dutch part),1990
1999,SX,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Sint Maarten (Dutch part),1990
2000,SX,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Sint Maarten (Dutch part),2000
2001,SX,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Sint Maarten (Dutch part),2000
2002,SX,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Sint Maarten (Dutch part),2000
2003,SX,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Sint Maarten (Dutch part),2000
2004,SX,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Sint Maarten (Dutch part),2000
2005,SX,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Sint Maarten (Dutch part),2000
2006,SX,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Sint Maarten (Dutch part),2000
2007,SX,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Sint Maarten (Dutch part),2000
2008,SX,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Sint Maarten (Dutch part),2000
2009,SX,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Sint Maarten (Dutch part),2000
2010,SX,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Sint Maarten (Dutch part),2010
2011,SX,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Sint Maarten (Dutch part),2010
2012,SX,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Sint Maarten (Dutch part),2010
2013,SX,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Sint Maarten (Dutch part),2010
2014,SX,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Sint Maarten (Dutch part),2010
2015,SX,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Sint Maarten (Dutch part),2010
2016,SX,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Sint Maarten (Dutch part),2010
2017,SX,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Sint Maarten (Dutch part),2010
2018,SX,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2010
2019,SX,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2010
2020,SX,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2020
2021,SX,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2020
2022,SX,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2020
2023,SX,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Sint Maarten (Dutch part),2020
1980,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1981,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1982,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1983,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1984,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1985,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1986,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1987,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1988,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1989,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1980
1990,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1991,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1992,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1993,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1994,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1995,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1996,SY,0,0.002,0.1193,0.5504,0.2303,Asia,West Asia,Syrian Arab Republic,1990
1997,SY,0,0.002,0.1184,0.5514,0.2293,Asia,West Asia,Syrian Arab Republic,1990
1998,SY,0,0.002,0.1175,0.5524,0.2283,Asia,West Asia,Syrian Arab Republic,1990
1999,SY,0,0.0019,0.1165,0.5534,0.2273,Asia,West Asia,Syrian Arab Republic,1990
2000,SY,0,0.0019,0.1156,0.5545,0.2262,Asia,West Asia,Syrian Arab Republic,2000
2001,SY,0,0.0019,0.1146,0.5556,0.2252,Asia,West Asia,Syrian Arab Republic,2000
2002,SY,0,0.0019,0.1136,0.5567,0.2241,Asia,West Asia,Syrian Arab Republic,2000
2003,SY,0,0.0019,0.1126,0.5578000000000001,0.223,Asia,West Asia,Syrian Arab Republic,2000
2004,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2005,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2006,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2007,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2008,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2009,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2000
2010,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2011,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2012,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2013,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2014,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2015,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2016,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2017,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2018,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2019,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2010
2020,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2020
2021,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2020
2022,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2020
2023,SY,0,0.0017,0.1066,0.5581,0.2157,Asia,West Asia,Syrian Arab Republic,2020
1980,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1981,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1982,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1983,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1984,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1985,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1986,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1987,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1988,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1989,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1980
1990,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1991,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1992,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1993,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1994,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1995,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1996,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1997,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1998,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
1999,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,1990
2000,SZ,0,0.0013,0.0848,0.6214000000000001,0.2164,Africa,South Africa,Swaziland,2000
2001,SZ,0,0.0013,0.0853,0.616,0.2127,Africa,South Africa,Swaziland,2000
2002,SZ,0,0.0013,0.0859,0.6106,0.209,Africa,South Africa,Swaziland,2000
2003,SZ,0,0.0013,0.0864,0.6052000000000001,0.2053,Africa,South Africa,Swaziland,2000
2004,SZ,0,0.0013,0.0869,0.5997,0.2016,Africa,South Africa,Swaziland,2000
2005,SZ,0,0.0013,0.0875,0.5943,0.1979,Africa,South Africa,Swaziland,2000
2006,SZ,0,0.0013,0.088,0.5889,0.1942,Africa,South Africa,Swaziland,2000
2007,SZ,0,0.0013,0.0885,0.5835,0.1905,Africa,South Africa,Swaziland,2000
2008,SZ,0,0.0013,0.0891,0.5781000000000001,0.1868,Africa,South Africa,Swaziland,2000
2009,SZ,0,0.0013,0.0896,0.5727,0.1831,Africa,South Africa,Swaziland,2000
2010,SZ,0,0.0013,0.088,0.5764,0.1845,Africa,South Africa,Swaziland,2010
2011,SZ,0,0.0013,0.0865,0.5801000000000001,0.186,Africa,South Africa,Swaziland,2010
2012,SZ,0,0.0012,0.0849,0.5838,0.1874,Africa,South Africa,Swaziland,2010
2013,SZ,0,0.0012,0.0833,0.5875,0.1889,Africa,South Africa,Swaziland,2010
2014,SZ,0,0.0012,0.0818,0.5912000000000001,0.1903,Africa,South Africa,Swaziland,2010
2015,SZ,0,0.0012,0.0802,0.5949,0.1917,Africa,South Africa,Swaziland,2010
2016,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2010
2017,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2010
2018,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2010
2019,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2010
2020,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2020
2021,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2020
2022,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2020
2023,SZ,0,0.0012,0.0786,0.5986,0.1932,Africa,South Africa,Swaziland,2020
1980,TC,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Turks and Caicos Islands,1980
1981,TC,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Turks and Caicos Islands,1980
1982,TC,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Turks and Caicos Islands,1980
1983,TC,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Turks and Caicos Islands,1980
1984,TC,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Turks and Caicos Islands,1980
1985,TC,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Turks and Caicos Islands,1980
1986,TC,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Turks and Caicos Islands,1980
1987,TC,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Turks and Caicos Islands,1980
1988,TC,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Turks and Caicos Islands,1980
1989,TC,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Turks and Caicos Islands,1980
1990,TC,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Turks and Caicos Islands,1990
1991,TC,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Turks and Caicos Islands,1990
1992,TC,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Turks and Caicos Islands,1990
1993,TC,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Turks and Caicos Islands,1990
1994,TC,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Turks and Caicos Islands,1990
1995,TC,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Turks and Caicos Islands,1990
1996,TC,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Turks and Caicos Islands,1990
1997,TC,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Turks and Caicos Islands,1990
1998,TC,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Turks and Caicos Islands,1990
1999,TC,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Turks and Caicos Islands,1990
2000,TC,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Turks and Caicos Islands,2000
2001,TC,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Turks and Caicos Islands,2000
2002,TC,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Turks and Caicos Islands,2000
2003,TC,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Turks and Caicos Islands,2000
2004,TC,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Turks and Caicos Islands,2000
2005,TC,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Turks and Caicos Islands,2000
2006,TC,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Turks and Caicos Islands,2000
2007,TC,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Turks and Caicos Islands,2000
2008,TC,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Turks and Caicos Islands,2000
2009,TC,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Turks and Caicos Islands,2000
2010,TC,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Turks and Caicos Islands,2010
2011,TC,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Turks and Caicos Islands,2010
2012,TC,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Turks and Caicos Islands,2010
2013,TC,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Turks and Caicos Islands,2010
2014,TC,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Turks and Caicos Islands,2010
2015,TC,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Turks and Caicos Islands,2010
2016,TC,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Turks and Caicos Islands,2010
2017,TC,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Turks and Caicos Islands,2010
2018,TC,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Turks and Caicos Islands,2010
2019,TC,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Turks and Caicos Islands,2010
2020,TC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Turks and Caicos Islands,2020
2021,TC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Turks and Caicos Islands,2020
2022,TC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Turks and Caicos Islands,2020
2023,TC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Turks and Caicos Islands,2020
1980,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1981,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1982,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1983,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1984,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1985,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1986,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1987,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1988,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1989,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1980
1990,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1991,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1992,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1993,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1994,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1995,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1996,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1997,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1998,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
1999,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,1990
2000,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,2000
2001,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,2000
2002,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,2000
2003,TD,0,0.0021,0.1332,0.4772,0.1446,Africa,Middle Africa,Chad,2000
2004,TD,0,0.0021,0.1319,0.4792,0.1462,Africa,Middle Africa,Chad,2000
2005,TD,0,0.002,0.1307,0.4812,0.1477,Africa,Middle Africa,Chad,2000
2006,TD,0,0.002,0.1294,0.4831,0.1493,Africa,Middle Africa,Chad,2000
2007,TD,0,0.0019,0.1281,0.4851,0.1508,Africa,Middle Africa,Chad,2000
2008,TD,0,0.0019,0.1268,0.487,0.1524,Africa,Middle Africa,Chad,2000
2009,TD,0,0.0019,0.1255,0.489,0.1539,Africa,Middle Africa,Chad,2000
2010,TD,0,0.0018,0.1242,0.491,0.1555,Africa,Middle Africa,Chad,2010
2011,TD,0,0.0018,0.123,0.4929,0.157,Africa,Middle Africa,Chad,2010
2012,TD,0,0.0019,0.1259,0.4892,0.1537,Africa,Middle Africa,Chad,2010
2013,TD,0,0.0019,0.1288,0.4855,0.1504,Africa,Middle Africa,Chad,2010
2014,TD,0,0.002,0.1317,0.4818,0.1471,Africa,Middle Africa,Chad,2010
2015,TD,0,0.0021,0.1346,0.478,0.1438,Africa,Middle Africa,Chad,2010
2016,TD,0,0.0022,0.1376,0.4743,0.1405,Africa,Middle Africa,Chad,2010
2017,TD,0,0.0022,0.1405,0.4705,0.1372,Africa,Middle Africa,Chad,2010
2018,TD,0,0.0023,0.1435,0.4668,0.1338,Africa,Middle Africa,Chad,2010
2019,TD,0,0.0023,0.1441,0.466,0.1324,Africa,Middle Africa,Chad,2010
2020,TD,0,0.0023,0.1447,0.4651,0.1309,Africa,Middle Africa,Chad,2020
2021,TD,0,0.0023,0.1453,0.4643,0.1295,Africa,Middle Africa,Chad,2020
2022,TD,0,0.0023,0.146,0.4635,0.128,Africa,Middle Africa,Chad,2020
2023,TD,0,0.0023,0.146,0.4635,0.128,Africa,Middle Africa,Chad,2020
1980,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1981,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1982,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1983,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1984,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1985,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1986,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1987,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1988,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1989,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1980
1990,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1991,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1992,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1993,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1994,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1995,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1996,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1997,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1998,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
1999,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,1990
2000,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2001,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2002,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2003,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2004,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2005,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2006,TG,0,0.002,0.1235,0.4957,0.1405,Africa,West Africa,Togo,2000
2007,TG,0,0.0019,0.1205,0.4993,0.1432,Africa,West Africa,Togo,2000
2008,TG,0,0.0018,0.1176,0.503,0.146,Africa,West Africa,Togo,2000
2009,TG,0,0.0017,0.1146,0.5066,0.1488,Africa,West Africa,Togo,2000
2010,TG,0,0.0017,0.1116,0.5102,0.1516,Africa,West Africa,Togo,2010
2011,TG,0,0.0016,0.1086,0.5139,0.1543,Africa,West Africa,Togo,2010
2012,TG,0,0.0017,0.112,0.5053,0.1504,Africa,West Africa,Togo,2010
2013,TG,0,0.0017,0.1154,0.4968,0.1465,Africa,West Africa,Togo,2010
2014,TG,0,0.0018,0.1188,0.4882,0.1425,Africa,West Africa,Togo,2010
2015,TG,0,0.0018,0.1222,0.4797,0.1386,Africa,West Africa,Togo,2010
2016,TG,0,0.0019,0.1226,0.4874,0.1441,Africa,West Africa,Togo,2010
2017,TG,0,0.0019,0.1229,0.4951,0.1495,Africa,West Africa,Togo,2010
2018,TG,0,0.0019,0.1233,0.5028,0.155,Africa,West Africa,Togo,2010
2019,TG,0,0.002,0.1298,0.4903,0.1502,Africa,West Africa,Togo,2010
2020,TG,0,0.0021,0.1363,0.4778,0.1454,Africa,West Africa,Togo,2020
2021,TG,0,0.0023,0.1428,0.4653,0.1406,Africa,West Africa,Togo,2020
2022,TG,0,0.0023,0.1428,0.4653,0.1406,Africa,West Africa,Togo,2020
2023,TG,0,0.0023,0.1428,0.4653,0.1406,Africa,West Africa,Togo,2020
1980,TH,0,0.0014,0.0966,0.5597,0.2299,Asia,South-East Asia,Thailand,1980
1981,TH,0,0.0014,0.0966,0.5597,0.2299,Asia,South-East Asia,Thailand,1980
1982,TH,0,0.0014,0.097,0.5607,0.2327,Asia,South-East Asia,Thailand,1980
1983,TH,0,0.0014,0.0974,0.5616,0.2352,Asia,South-East Asia,Thailand,1980
1984,TH,0,0.0014,0.0978,0.5623,0.2375,Asia,South-East Asia,Thailand,1980
1985,TH,0,0.0015,0.0981,0.5631,0.2396,Asia,South-East Asia,Thailand,1980
1986,TH,0,0.0015,0.0984,0.5637,0.2416,Asia,South-East Asia,Thailand,1980
1987,TH,0,0.0015,0.0987,0.5643,0.2434,Asia,South-East Asia,Thailand,1980
1988,TH,0,0.0015,0.0989,0.5649000000000001,0.245,Asia,South-East Asia,Thailand,1980
1989,TH,0,0.0015,0.097,0.5683,0.2389,Asia,South-East Asia,Thailand,1980
1990,TH,0,0.0014,0.0956,0.5706,0.2347,Asia,South-East Asia,Thailand,1990
1991,TH,0,0.0014,0.0915,0.5803,0.2385,Asia,South-East Asia,Thailand,1990
1992,TH,0,0.0013,0.0881,0.5883,0.2417,Asia,South-East Asia,Thailand,1990
1993,TH,0,0.0014,0.0948,0.5732,0.2373,Asia,South-East Asia,Thailand,1990
1994,TH,0,0.0015,0.1004,0.5603,0.2336,Asia,South-East Asia,Thailand,1990
1995,TH,0,0.0015,0.102,0.5557,0.2271,Asia,South-East Asia,Thailand,1990
1996,TH,0,0.0015,0.1032,0.5523,0.2222,Asia,South-East Asia,Thailand,1990
1997,TH,0,0.0016,0.1055,0.54,0.2079,Asia,South-East Asia,Thailand,1990
1998,TH,0,0.0016,0.1076,0.5286000000000001,0.1947,Asia,South-East Asia,Thailand,1990
1999,TH,0,0.0015,0.1028,0.5469,0.2118,Asia,South-East Asia,Thailand,1990
2000,TH,0,0.0015,0.1012,0.5471,0.2166,Asia,South-East Asia,Thailand,2000
2001,TH,0,0.0012,0.086,0.5617,0.2319,Asia,South-East Asia,Thailand,2000
2002,TH,0,0.0015,0.1016,0.5486,0.2218,Asia,South-East Asia,Thailand,2000
2003,TH,0,0.0014,0.0955,0.5658000000000001,0.2367,Asia,South-East Asia,Thailand,2000
2004,TH,0,0.0016,0.106,0.5519000000000001,0.2314,Asia,South-East Asia,Thailand,2000
2005,TH,0,0.0016,0.1058,0.5487000000000001,0.2286,Asia,South-East Asia,Thailand,2000
2006,TH,0,0.0016,0.1064,0.5452,0.2259,Asia,South-East Asia,Thailand,2000
2007,TH,0,0.0016,0.11,0.5417000000000001,0.2203,Asia,South-East Asia,Thailand,2000
2008,TH,0,0.0018,0.1134,0.5534,0.231,Asia,South-East Asia,Thailand,2000
2009,TH,0,0.0018,0.1161,0.531,0.2169,Asia,South-East Asia,Thailand,2000
2010,TH,0,0.0019,0.1147,0.5531,0.2266,Asia,South-East Asia,Thailand,2010
2011,TH,0,0.0019,0.1182,0.5377000000000001,0.2192,Asia,South-East Asia,Thailand,2010
2012,TH,0,0.0019,0.1164,0.5459,0.2163,Asia,South-East Asia,Thailand,2010
2013,TH,0,0.002,0.1252,0.5178,0.2015,Asia,South-East Asia,Thailand,2010
2014,TH,0,0.002,0.1248,0.5292,0.2045,Asia,South-East Asia,Thailand,2010
2015,TH,0,0.0021,0.1338,0.5029,0.1919,Asia,South-East Asia,Thailand,2010
2016,TH,0,0.0021,0.1307,0.5072,0.1933,Asia,South-East Asia,Thailand,2010
2017,TH,0,0.0015,0.1053,0.5293,0.1941,Asia,South-East Asia,Thailand,2010
2018,TH,0,0.0013,0.1124,0.5048,0.1735,Asia,South-East Asia,Thailand,2010
2019,TH,0,0.0016,0.117,0.4806,0.1555,Asia,South-East Asia,Thailand,2010
2020,TH,0,0.0014,0.1143,0.4983,0.1701,Asia,South-East Asia,Thailand,2020
2021,TH,0,0.0015,0.1065,0.5235000000000001,0.1983,Asia,South-East Asia,Thailand,2020
2022,TH,0,0.0015,0.1065,0.5235000000000001,0.1983,Asia,South-East Asia,Thailand,2020
2023,TH,0,0.0015,0.1065,0.5235000000000001,0.1983,Asia,South-East Asia,Thailand,2020
1980,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1981,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1982,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1983,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1984,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1985,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1986,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1987,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1988,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1989,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1980
1990,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1991,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1992,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1993,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1994,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1995,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1996,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1997,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1998,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
1999,TJ,0,0.0031,0.1834,0.3812,0.1206,Asia,Central Asia,Tajikistan,1990
2000,TJ,0,0.003,0.1766,0.3915,0.1259,Asia,Central Asia,Tajikistan,2000
2001,TJ,0,0.0028,0.1688,0.4028,0.1326,Asia,Central Asia,Tajikistan,2000
2002,TJ,0,0.0026,0.1617,0.4131,0.1389,Asia,Central Asia,Tajikistan,2000
2003,TJ,0,0.0026,0.1587,0.418,0.1404,Asia,Central Asia,Tajikistan,2000
2004,TJ,0,0.0026,0.1599,0.4215,0.1333,Asia,Central Asia,Tajikistan,2000
2005,TJ,0,0.0026,0.1602,0.4232,0.1548,Asia,Central Asia,Tajikistan,2000
2006,TJ,0,0.0027,0.1646,0.4195,0.1642,Asia,Central Asia,Tajikistan,2000
2007,TJ,0,0.0028,0.1699,0.4143,0.1692,Asia,Central Asia,Tajikistan,2000
2008,TJ,0,0.0028,0.1664,0.4106,0.1576,Asia,Central Asia,Tajikistan,2000
2009,TJ,0,0.0027,0.1632,0.4072,0.1468,Asia,Central Asia,Tajikistan,2000
2010,TJ,0,0.0027,0.1628,0.4086,0.1449,Asia,Central Asia,Tajikistan,2010
2011,TJ,0,0.0027,0.1644,0.4074,0.1409,Asia,Central Asia,Tajikistan,2010
2012,TJ,0,0.0027,0.1623,0.411,0.1414,Asia,Central Asia,Tajikistan,2010
2013,TJ,0,0.0027,0.1618,0.4123,0.1401,Asia,Central Asia,Tajikistan,2010
2014,TJ,0,0.0027,0.1645,0.4096,0.1353,Asia,Central Asia,Tajikistan,2010
2015,TJ,0,0.0028,0.167,0.4072,0.1306,Asia,Central Asia,Tajikistan,2010
2016,TJ,0,0.0026,0.1578,0.4185,0.1417,Asia,Central Asia,Tajikistan,2010
2017,TJ,0,0.0025,0.1553,0.4217,0.1448,Asia,Central Asia,Tajikistan,2010
2018,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2010
2019,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2010
2020,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2020
2021,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2020
2022,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2020
2023,TJ,0,0.0025,0.1548,0.4223,0.1453,Asia,Central Asia,Tajikistan,2020
1980,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1981,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1982,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1983,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1984,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1985,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1986,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1987,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1988,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1989,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1980
1990,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1991,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1992,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1993,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1994,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1995,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1996,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1997,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1998,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
1999,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,1990
2000,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,2000
2001,TL,0,0.0021,0.1314,0.463,0.1759,Asia,South-East Asia,Timor-Leste,2000
2002,TL,0,0.0022,0.1389,0.451,0.1697,Asia,South-East Asia,Timor-Leste,2000
2003,TL,0,0.0024,0.1463,0.4392,0.1634,Asia,South-East Asia,Timor-Leste,2000
2004,TL,0,0.0025,0.1512,0.4306,0.1599,Asia,South-East Asia,Timor-Leste,2000
2005,TL,0,0.0026,0.1571,0.4209,0.1552,Asia,South-East Asia,Timor-Leste,2000
2006,TL,0,0.0028,0.1633,0.4109,0.15,Asia,South-East Asia,Timor-Leste,2000
2007,TL,0,0.0029,0.1684,0.4024,0.146,Asia,South-East Asia,Timor-Leste,2000
2008,TL,0,0.0029,0.1681,0.4047,0.1475,Asia,South-East Asia,Timor-Leste,2000
2009,TL,0,0.0028,0.1661,0.4089,0.1507,Asia,South-East Asia,Timor-Leste,2000
2010,TL,0,0.0028,0.1657,0.4107,0.152,Asia,South-East Asia,Timor-Leste,2010
2011,TL,0,0.0028,0.1663,0.4111,0.1521,Asia,South-East Asia,Timor-Leste,2010
2012,TL,0,0.0029,0.1679,0.4101,0.1512,Asia,South-East Asia,Timor-Leste,2010
2013,TL,0,0.0029,0.1681,0.4109,0.1517,Asia,South-East Asia,Timor-Leste,2010
2014,TL,0,0.0028,0.1671,0.413,0.1533,Asia,South-East Asia,Timor-Leste,2010
2015,TL,0,0.0029,0.1673,0.4126,0.153,Asia,South-East Asia,Timor-Leste,2010
2016,TL,0,0.0028,0.167,0.413,0.1533,Asia,South-East Asia,Timor-Leste,2010
2017,TL,0,0.0029,0.1673,0.4126,0.153,Asia,South-East Asia,Timor-Leste,2010
2018,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2010
2019,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2010
2020,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2020
2021,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2020
2022,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2020
2023,TL,0,0.0029,0.168,0.4118,0.1523,Asia,South-East Asia,Timor-Leste,2020
1980,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1981,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1982,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1983,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1984,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1985,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1986,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1987,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1988,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1989,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1980
1990,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1991,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1992,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1993,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1994,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1995,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1996,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1997,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1998,TM,0,0.0021,0.1309,0.4799,0.184,Asia,Central Asia,Turkmenistan,1990
1999,TM,0,0.0021,0.1306,0.4802,0.1843,Asia,Central Asia,Turkmenistan,1990
2000,TM,0,0.0021,0.13,0.4807,0.185,Asia,Central Asia,Turkmenistan,2000
2001,TM,0,0.002,0.1283,0.4821,0.1867,Asia,Central Asia,Turkmenistan,2000
2002,TM,0,0.002,0.1267,0.4836,0.1885,Asia,Central Asia,Turkmenistan,2000
2003,TM,0,0.002,0.1275,0.4828,0.1876,Asia,Central Asia,Turkmenistan,2000
2004,TM,0,0.0021,0.1312,0.4796,0.1837,Asia,Central Asia,Turkmenistan,2000
2005,TM,0,0.002,0.1264,0.4838,0.1888,Asia,Central Asia,Turkmenistan,2000
2006,TM,0,0.002,0.1261,0.4841,0.1891,Asia,Central Asia,Turkmenistan,2000
2007,TM,0,0.002,0.1273,0.483,0.1878,Asia,Central Asia,Turkmenistan,2000
2008,TM,0,0.0019,0.1241,0.4859,0.1913,Asia,Central Asia,Turkmenistan,2000
2009,TM,0,0.0019,0.121,0.4885,0.1945,Asia,Central Asia,Turkmenistan,2000
2010,TM,0,0.0019,0.1218,0.4878,0.1937,Asia,Central Asia,Turkmenistan,2010
2011,TM,0,0.0019,0.1238,0.4861,0.1916,Asia,Central Asia,Turkmenistan,2010
2012,TM,0,0.0019,0.1233,0.4866,0.1921,Asia,Central Asia,Turkmenistan,2010
2013,TM,0,0.0019,0.1238,0.4861,0.1916,Asia,Central Asia,Turkmenistan,2010
2014,TM,0,0.002,0.1263,0.4839,0.1889,Asia,Central Asia,Turkmenistan,2010
2015,TM,0,0.002,0.1287,0.4818,0.1864,Asia,Central Asia,Turkmenistan,2010
2016,TM,0,0.0019,0.1226,0.4872,0.1929,Asia,Central Asia,Turkmenistan,2010
2017,TM,0,0.0019,0.1209,0.4887,0.1947,Asia,Central Asia,Turkmenistan,2010
2018,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2010
2019,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2010
2020,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2020
2021,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2020
2022,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2020
2023,TM,0,0.0019,0.1206,0.4889,0.195,Asia,Central Asia,Turkmenistan,2020
1980,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1981,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1982,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1983,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1984,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1985,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1986,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1987,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1988,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1989,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1980
1990,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1991,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1992,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1993,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1994,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1995,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1996,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1997,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1998,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
1999,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,1990
2000,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2001,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2002,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2003,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2004,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2005,TN,0,0.0018,0.1112,0.5752,0.2189,Africa,North Africa,Tunisia,2000
2006,TN,0,0.0019,0.1134,0.5677,0.2112,Africa,North Africa,Tunisia,2000
2007,TN,0,0.0019,0.1155,0.5606,0.204,Africa,North Africa,Tunisia,2000
2008,TN,0,0.0019,0.1175,0.5538000000000001,0.1971,Africa,North Africa,Tunisia,2000
2009,TN,0,0.002,0.1194,0.5473,0.1906,Africa,North Africa,Tunisia,2000
2010,TN,0,0.002,0.1212,0.5412,0.1844,Africa,North Africa,Tunisia,2010
2011,TN,0,0.002,0.1224,0.5395,0.1712,Africa,North Africa,Tunisia,2010
2012,TN,0,0.002,0.1229,0.5339,0.1992,Africa,North Africa,Tunisia,2010
2013,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2014,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2015,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2016,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2017,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2018,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2019,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2010
2020,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2020
2021,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2020
2022,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2020
2023,TN,0,0.002,0.1233,0.5286000000000001,0.2261,Africa,North Africa,Tunisia,2020
1980,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1981,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1982,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1983,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1984,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1985,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1986,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1987,TR,0,0.0018,0.1055,0.6029,0.2828,Asia,West Asia,Turkey,1980
1988,TR,0,0.0018,0.1078,0.5959,0.2735,Asia,West Asia,Turkey,1980
1989,TR,0,0.0018,0.1101,0.5888,0.2643,Asia,West Asia,Turkey,1980
1990,TR,0,0.0019,0.1125,0.5817,0.255,Asia,West Asia,Turkey,1990
1991,TR,0,0.0019,0.1149,0.5746,0.2457,Asia,West Asia,Turkey,1990
1992,TR,0,0.002,0.1172,0.5675,0.2364,Asia,West Asia,Turkey,1990
1993,TR,0,0.002,0.1196,0.5604,0.227,Asia,West Asia,Turkey,1990
1994,TR,0,0.0021,0.1219,0.5533,0.2177,Asia,West Asia,Turkey,1990
1995,TR,0,0.0021,0.1222,0.5539000000000001,0.2186,Asia,West Asia,Turkey,1990
1996,TR,0,0.0021,0.1225,0.5545,0.2194,Asia,West Asia,Turkey,1990
1997,TR,0,0.0021,0.1228,0.5551,0.2203,Asia,West Asia,Turkey,1990
1998,TR,0,0.0021,0.1231,0.5557,0.2212,Asia,West Asia,Turkey,1990
1999,TR,0,0.0021,0.1233,0.5563,0.2221,Asia,West Asia,Turkey,1990
2000,TR,0,0.0021,0.1236,0.5569000000000001,0.223,Asia,West Asia,Turkey,2000
2001,TR,0,0.0021,0.1239,0.5575,0.2239,Asia,West Asia,Turkey,2000
2002,TR,0,0.0021,0.1242,0.5581,0.2248,Asia,West Asia,Turkey,2000
2003,TR,0,0.0022,0.1278,0.5518000000000001,0.2192,Asia,West Asia,Turkey,2000
2004,TR,0,0.0022,0.1331,0.5332,0.2131,Asia,West Asia,Turkey,2000
2005,TR,0,0.0024,0.1422,0.5082,0.1851,Asia,West Asia,Turkey,2000
2006,TR,0,0.0026,0.1485,0.4983,0.1753,Asia,West Asia,Turkey,2000
2007,TR,0,0.0026,0.1508,0.4899,0.1693,Asia,West Asia,Turkey,2000
2008,TR,0,0.0025,0.148,0.5018,0.1808,Asia,West Asia,Turkey,2000
2009,TR,0,0.0024,0.1403,0.5189,0.1942,Asia,West Asia,Turkey,2000
2010,TR,0,0.0026,0.1465,0.5125000000000001,0.1962,Asia,West Asia,Turkey,2010
2011,TR,0,0.0026,0.1456,0.5148,0.1892,Asia,West Asia,Turkey,2010
2012,TR,0,0.0025,0.1456,0.5152,0.1952,Asia,West Asia,Turkey,2010
2013,TR,0,0.0027,0.1516,0.5087,0.1854,Asia,West Asia,Turkey,2010
2014,TR,0,0.0029,0.1446,0.5173,0.2048,Asia,West Asia,Turkey,2010
2015,TR,0,0.0029,0.1421,0.5241,0.211,Asia,West Asia,Turkey,2010
2016,TR,0,0.0023,0.1395,0.5271,0.1947,Asia,West Asia,Turkey,2010
2017,TR,0,0.0023,0.1384,0.5349,0.208,Asia,West Asia,Turkey,2010
2018,TR,0,0.0022,0.1371,0.5353,0.2057,Asia,West Asia,Turkey,2010
2019,TR,0,0.0024,0.144,0.5177,0.1922,Asia,West Asia,Turkey,2010
2020,TR,0,0.0023,0.1375,0.5336000000000001,0.206,Asia,West Asia,Turkey,2020
2021,TR,0,0.0023,0.1421,0.52,0.1897,Asia,West Asia,Turkey,2020
2022,TR,0,0.0022,0.1333,0.5453,0.2239,Asia,West Asia,Turkey,2020
2023,TR,0,0.002,0.1236,0.5668000000000001,0.2442,Asia,West Asia,Turkey,2020
1980,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1981,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1982,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1983,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1984,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1985,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1986,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1987,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1988,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1989,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1980
1990,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1991,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1992,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1993,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1994,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1995,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1996,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1997,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1998,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
1999,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,1990
2000,TT,0,0.0001,0.0844,0.5525,0.1903,Americas,Caribbean,Trinidad and Tobago,2000
2001,TT,0,0.0001,0.0805,0.5636,0.1984,Americas,Caribbean,Trinidad and Tobago,2000
2002,TT,0,0,0.0809,0.5626,0.1928,Americas,Caribbean,Trinidad and Tobago,2000
2003,TT,0,0,0.0854,0.5605,0.2043,Americas,Caribbean,Trinidad and Tobago,2000
2004,TT,0,0.0001,0.0878,0.556,0.1999,Americas,Caribbean,Trinidad and Tobago,2000
2005,TT,0,0.0001,0.087,0.5555,0.193,Americas,Caribbean,Trinidad and Tobago,2000
2006,TT,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,Caribbean,Trinidad and Tobago,2000
2007,TT,0,0.0002,0.0888,0.5641,0.211,Americas,Caribbean,Trinidad and Tobago,2000
2008,TT,0,0.0003,0.0903,0.56,0.2029,Americas,Caribbean,Trinidad and Tobago,2000
2009,TT,0,0.0004,0.0926,0.5486,0.1928,Americas,Caribbean,Trinidad and Tobago,2000
2010,TT,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,Caribbean,Trinidad and Tobago,2010
2011,TT,0,0.0005,0.0976,0.541,0.1982,Americas,Caribbean,Trinidad and Tobago,2010
2012,TT,0,0.0005,0.1001,0.5332,0.197,Americas,Caribbean,Trinidad and Tobago,2010
2013,TT,0,0.0006,0.1006,0.5404,0.2057,Americas,Caribbean,Trinidad and Tobago,2010
2014,TT,0,0.0005,0.1026,0.5304,0.2046,Americas,Caribbean,Trinidad and Tobago,2010
2015,TT,0,0.0005,0.1032,0.5312,0.1942,Americas,Caribbean,Trinidad and Tobago,2010
2016,TT,0,0.0004,0.1034,0.5334,0.1984,Americas,Caribbean,Trinidad and Tobago,2010
2017,TT,0,0.0003,0.1031,0.5311,0.1884,Americas,Caribbean,Trinidad and Tobago,2010
2018,TT,0,0.0003,0.1016,0.5354,0.1976,Americas,Caribbean,Trinidad and Tobago,2010
2019,TT,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,Caribbean,Trinidad and Tobago,2010
2020,TT,0,0.0001,0.0872,0.5466,0.2043,Americas,Caribbean,Trinidad and Tobago,2020
2021,TT,0,0.0001,0.0972,0.5299,0.1892,Americas,Caribbean,Trinidad and Tobago,2020
2022,TT,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Trinidad and Tobago,2020
2023,TT,0,0.0002,0.1037,0.5181,0.1787,Americas,Caribbean,Trinidad and Tobago,2020
1980,TV,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1981,TV,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1982,TV,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1983,TV,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1984,TV,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1985,TV,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1986,TV,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1987,TV,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1988,TV,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1989,TV,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1980
1990,TV,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1991,TV,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1992,TV,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1993,TV,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1994,TV,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1995,TV,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1996,TV,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1997,TV,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1998,TV,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
1999,TV,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,1990
2000,TV,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2001,TV,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2002,TV,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2003,TV,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2004,TV,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2005,TV,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2006,TV,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2007,TV,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2008,TV,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2009,TV,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2000
2010,TV,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2011,TV,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2012,TV,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2013,TV,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2014,TV,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2015,TV,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2016,TV,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2017,TV,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2018,TV,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2019,TV,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2010
2020,TV,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2020
2021,TV,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2020
2022,TV,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2020
2023,TV,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Tuvalu,2020
1980,TW,0,0.0024,0.1873,0.3492,0.0996,Asia,East Asia,Taiwan,1980
1981,TW,0,0.0024,0.1873,0.3492,0.0996,Asia,East Asia,Taiwan,1980
1982,TW,0,0.0022,0.1761,0.3545,0.1014,Asia,East Asia,Taiwan,1980
1983,TW,0,0.0022,0.1771,0.3548,0.1007,Asia,East Asia,Taiwan,1980
1984,TW,0,0.0021,0.1737,0.3541,0.1,Asia,East Asia,Taiwan,1980
1985,TW,0,0.002,0.1664,0.3633,0.1033,Asia,East Asia,Taiwan,1980
1986,TW,0,0.0021,0.17,0.3574,0.0991,Asia,East Asia,Taiwan,1980
1987,TW,0,0.0021,0.1683,0.3616,0.1079,Asia,East Asia,Taiwan,1980
1988,TW,0,0.0022,0.1742,0.3593,0.1065,Asia,East Asia,Taiwan,1980
1989,TW,0,0.0021,0.1687,0.3654,0.1142,Asia,East Asia,Taiwan,1980
1990,TW,0,0.002,0.1644,0.3703,0.114,Asia,East Asia,Taiwan,1990
1991,TW,0,0.002,0.1626,0.3757,0.1197,Asia,East Asia,Taiwan,1990
1992,TW,0,0.002,0.1647,0.3671,0.1101,Asia,East Asia,Taiwan,1990
1993,TW,0,0.0019,0.1583,0.3667,0.1078,Asia,East Asia,Taiwan,1990
1994,TW,0,0.0019,0.156,0.3805,0.1198,Asia,East Asia,Taiwan,1990
1995,TW,0,0.0018,0.1521,0.3874,0.1212,Asia,East Asia,Taiwan,1990
1996,TW,0,0.0018,0.1466,0.3834,0.117,Asia,East Asia,Taiwan,1990
1997,TW,0,0.0017,0.144,0.3889,0.1206,Asia,East Asia,Taiwan,1990
1998,TW,0,0.0017,0.1391,0.3983,0.128,Asia,East Asia,Taiwan,1990
1999,TW,0,0.0016,0.137,0.4053,0.1318,Asia,East Asia,Taiwan,1990
2000,TW,0,0.0015,0.1306,0.4181,0.1461,Asia,East Asia,Taiwan,2000
2001,TW,0,0.0014,0.1176,0.44,0.1738,Asia,East Asia,Taiwan,2000
2002,TW,0,0.0014,0.117,0.4385,0.1648,Asia,East Asia,Taiwan,2000
2003,TW,0,0.0013,0.112,0.4579,0.1845,Asia,East Asia,Taiwan,2000
2004,TW,0,0.0013,0.1123,0.4609,0.1801,Asia,East Asia,Taiwan,2000
2005,TW,0,0.0012,0.1049,0.4663,0.1824,Asia,East Asia,Taiwan,2000
2006,TW,0,0.0012,0.1024,0.4614,0.1722,Asia,East Asia,Taiwan,2000
2007,TW,0,0.0012,0.1013,0.4675,0.1759,Asia,East Asia,Taiwan,2000
2008,TW,0,0.0012,0.1066,0.4487,0.1624,Asia,East Asia,Taiwan,2000
2009,TW,0,0.0013,0.11,0.4607,0.1719,Asia,East Asia,Taiwan,2000
2010,TW,0,0.0012,0.1026,0.4826,0.1917,Asia,East Asia,Taiwan,2010
2011,TW,0,0.0012,0.1048,0.4736,0.1825,Asia,East Asia,Taiwan,2010
2012,TW,0,0.0013,0.1112,0.4697,0.1866,Asia,East Asia,Taiwan,2010
2013,TW,0,0.0013,0.1127,0.4708,0.183,Asia,East Asia,Taiwan,2010
2014,TW,0,0.0013,0.1072,0.493,0.2158,Asia,East Asia,Taiwan,2010
2015,TW,0,0.0013,0.1129,0.4732,0.1833,Asia,East Asia,Taiwan,2010
2016,TW,0,0.0013,0.1092,0.491,0.2023,Asia,East Asia,Taiwan,2010
2017,TW,0,0.0014,0.1179,0.4812,0.1933,Asia,East Asia,Taiwan,2010
2018,TW,0,0.0014,0.1179,0.4812,0.1933,Asia,East Asia,Taiwan,2010
2019,TW,0,0.0014,0.1179,0.4812,0.1933,Asia,East Asia,Taiwan,2010
2020,TW,0,0.0014,0.1179,0.4812,0.1933,Asia,East Asia,Taiwan,2020
2021,TW,0,0.0014,0.1179,0.4812,0.1933,Asia,East Asia,Taiwan,2020
2022,TW,0,0.0014,0.1159,0.4823,0.1937,Asia,East Asia,Taiwan,2020
2023,TW,0,0.0014,0.1159,0.4823,0.1937,Asia,East Asia,Taiwan,2020
1980,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1981,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1982,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1983,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1984,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1985,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1986,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1987,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1988,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1989,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1980
1990,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1990
1991,TZ,0,0.0026,0.1578,0.4309,0.115,Africa,East Africa,Tanzania,1990
1992,TZ,0,0.0025,0.1566,0.4335,0.1163,Africa,East Africa,Tanzania,1990
1993,TZ,0,0.0025,0.1553,0.4361,0.1176,Africa,East Africa,Tanzania,1990
1994,TZ,0,0.0025,0.154,0.4387,0.119,Africa,East Africa,Tanzania,1990
1995,TZ,0,0.0025,0.1528,0.4413,0.1203,Africa,East Africa,Tanzania,1990
1996,TZ,0,0.0025,0.1515,0.4439,0.1216,Africa,East Africa,Tanzania,1990
1997,TZ,0,0.0024,0.1503,0.4464,0.1229,Africa,East Africa,Tanzania,1990
1998,TZ,0,0.0024,0.149,0.449,0.1243,Africa,East Africa,Tanzania,1990
1999,TZ,0,0.0024,0.1478,0.4516,0.1256,Africa,East Africa,Tanzania,1990
2000,TZ,0,0.0024,0.1465,0.4542,0.1269,Africa,East Africa,Tanzania,2000
2001,TZ,0,0.0023,0.1446,0.46,0.1319,Africa,East Africa,Tanzania,2000
2002,TZ,0,0.0023,0.1428,0.4658,0.1368,Africa,East Africa,Tanzania,2000
2003,TZ,0,0.0023,0.1409,0.4715,0.1417,Africa,East Africa,Tanzania,2000
2004,TZ,0,0.0022,0.139,0.4773,0.1466,Africa,East Africa,Tanzania,2000
2005,TZ,0,0.0022,0.1371,0.4831,0.1515,Africa,East Africa,Tanzania,2000
2006,TZ,0,0.0021,0.1353,0.4888,0.1564,Africa,East Africa,Tanzania,2000
2007,TZ,0,0.0021,0.1334,0.4946,0.1613,Africa,East Africa,Tanzania,2000
2008,TZ,0,0.0022,0.1354,0.493,0.162,Africa,East Africa,Tanzania,2000
2009,TZ,0,0.0022,0.1374,0.4913,0.1627,Africa,East Africa,Tanzania,2000
2010,TZ,0,0.0023,0.1394,0.4897,0.1633,Africa,East Africa,Tanzania,2010
2011,TZ,0,0.0023,0.1414,0.4881,0.164,Africa,East Africa,Tanzania,2010
2012,TZ,0,0.0023,0.1394,0.4923,0.1669,Africa,East Africa,Tanzania,2010
2013,TZ,0,0.0023,0.1374,0.4966,0.1698,Africa,East Africa,Tanzania,2010
2014,TZ,0,0.0022,0.1354,0.5008,0.1727,Africa,East Africa,Tanzania,2010
2015,TZ,0,0.0022,0.1335,0.5051,0.1756,Africa,East Africa,Tanzania,2010
2016,TZ,0,0.0022,0.1315,0.5093,0.1785,Africa,East Africa,Tanzania,2010
2017,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2010
2018,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2010
2019,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2010
2020,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2020
2021,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2020
2022,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2020
2023,TZ,0,0.0021,0.1295,0.5135000000000001,0.1814,Africa,East Africa,Tanzania,2020
1980,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1981,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1982,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1983,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1984,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1985,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1986,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1987,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1988,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1989,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1980
1990,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1990
1991,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1990
1992,UA,0,0.003,0.1773,0.3826,0.136,Asia,West Asia,Ukraine,1990
1993,UA,0,0.003,0.1758,0.3897,0.1409,Asia,West Asia,Ukraine,1990
1994,UA,0,0.003,0.1748,0.3988,0.1439,Asia,West Asia,Ukraine,1990
1995,UA,0,0.0028,0.1654,0.4249,0.157,Asia,West Asia,Ukraine,1990
1996,UA,0,0.0034,0.1972,0.3786,0.1248,Asia,West Asia,Ukraine,1990
1997,UA,0,0.0037,0.2104,0.3558,0.1118,Asia,West Asia,Ukraine,1990
1998,UA,0,0.0042,0.2301,0.3246,0.0924,Asia,West Asia,Ukraine,1990
1999,UA,0,0.0044,0.237,0.3093,0.0856,Asia,West Asia,Ukraine,1990
2000,UA,0,0.0041,0.2255,0.3238,0.0925,Asia,West Asia,Ukraine,2000
2001,UA,0,0.0038,0.211,0.3424,0.1035,Asia,West Asia,Ukraine,2000
2002,UA,0,0.0038,0.2113,0.3417,0.0998,Asia,West Asia,Ukraine,2000
2003,UA,0,0.0037,0.2066,0.353,0.1087,Asia,West Asia,Ukraine,2000
2004,UA,0,0.0035,0.1992,0.3593,0.1171,Asia,West Asia,Ukraine,2000
2005,UA,0,0.0037,0.2092,0.3445,0.1026,Asia,West Asia,Ukraine,2000
2006,UA,0,0.0036,0.2038,0.3601,0.1187,Asia,West Asia,Ukraine,2000
2007,UA,0,0.0038,0.2124,0.3409,0.1051,Asia,West Asia,Ukraine,2000
2008,UA,0,0.004,0.2175,0.3346,0.0999,Asia,West Asia,Ukraine,2000
2009,UA,0,0.0043,0.2318,0.3161,0.0868,Asia,West Asia,Ukraine,2000
2010,UA,0,0.0045,0.2419,0.3042,0.0777,Asia,West Asia,Ukraine,2010
2011,UA,0,0.0046,0.2437,0.3015,0.0783,Asia,West Asia,Ukraine,2010
2012,UA,0,0.0048,0.2547,0.2849,0.0637,Asia,West Asia,Ukraine,2010
2013,UA,0,0.0049,0.2597,0.2871,0.066,Asia,West Asia,Ukraine,2010
2014,UA,0,0.0046,0.245,0.3022,0.0821,Asia,West Asia,Ukraine,2010
2015,UA,0,0.0043,0.2328,0.3212,0.0922,Asia,West Asia,Ukraine,2010
2016,UA,0,0.0041,0.2222,0.3339,0.1058,Asia,West Asia,Ukraine,2010
2017,UA,0,0.0041,0.2227,0.3305,0.0996,Asia,West Asia,Ukraine,2010
2018,UA,0,0.0042,0.2274,0.3286,0.0962,Asia,West Asia,Ukraine,2010
2019,UA,0,0.0041,0.2259,0.3308,0.0933,Asia,West Asia,Ukraine,2010
2020,UA,0,0.0041,0.2259,0.3308,0.0933,Asia,West Asia,Ukraine,2020
2021,UA,0,0.0041,0.2259,0.3308,0.0933,Asia,West Asia,Ukraine,2020
2022,UA,0,0.0041,0.2259,0.3308,0.0933,Asia,West Asia,Ukraine,2020
2023,UA,0,0.0041,0.2259,0.3308,0.0933,Asia,West Asia,Ukraine,2020
1980,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1981,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1982,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1983,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1984,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1985,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1986,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1987,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1988,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1989,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1980
1990,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1990
1991,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1990
1992,UG,0,0.002,0.1277,0.5203,0.2012,Africa,East Africa,Uganda,1990
1993,UG,0,0.002,0.13,0.5124000000000001,0.1893,Africa,East Africa,Uganda,1990
1994,UG,0,0.0021,0.1323,0.5045000000000001,0.1773,Africa,East Africa,Uganda,1990
1995,UG,0,0.0022,0.1346,0.4967,0.1654,Africa,East Africa,Uganda,1990
1996,UG,0,0.0022,0.1369,0.4888,0.1535,Africa,East Africa,Uganda,1990
1997,UG,0,0.0021,0.1319,0.5031,0.1669,Africa,East Africa,Uganda,1990
1998,UG,0,0.002,0.1268,0.5174,0.1802,Africa,East Africa,Uganda,1990
1999,UG,0,0.0019,0.1218,0.5317000000000001,0.1936,Africa,East Africa,Uganda,1990
2000,UG,0,0.0019,0.1189,0.5423,0.2044,Africa,East Africa,Uganda,2000
2001,UG,0,0.0018,0.1159,0.5529000000000001,0.2153,Africa,East Africa,Uganda,2000
2002,UG,0,0.0018,0.113,0.5635,0.2261,Africa,East Africa,Uganda,2000
2003,UG,0,0.0018,0.1156,0.5508000000000001,0.2108,Africa,East Africa,Uganda,2000
2004,UG,0,0.0019,0.1183,0.5381,0.1955,Africa,East Africa,Uganda,2000
2005,UG,0,0.0019,0.1209,0.5254,0.1801,Africa,East Africa,Uganda,2000
2006,UG,0,0.0019,0.1201,0.5306000000000001,0.1811,Africa,East Africa,Uganda,2000
2007,UG,0,0.0019,0.1194,0.5359,0.182,Africa,East Africa,Uganda,2000
2008,UG,0,0.0019,0.1186,0.5412,0.183,Africa,East Africa,Uganda,2000
2009,UG,0,0.0019,0.1178,0.5464,0.1839,Africa,East Africa,Uganda,2000
2010,UG,0,0.002,0.1219,0.5324,0.1744,Africa,East Africa,Uganda,2010
2011,UG,0,0.002,0.126,0.5183,0.1648,Africa,East Africa,Uganda,2010
2012,UG,0,0.0021,0.13,0.5042,0.1552,Africa,East Africa,Uganda,2010
2013,UG,0,0.0021,0.1279,0.5083,0.159,Africa,East Africa,Uganda,2010
2014,UG,0,0.002,0.1257,0.5124000000000001,0.1628,Africa,East Africa,Uganda,2010
2015,UG,0,0.002,0.1235,0.5165000000000001,0.1666,Africa,East Africa,Uganda,2010
2016,UG,0,0.0019,0.1213,0.5206000000000001,0.1703,Africa,East Africa,Uganda,2010
2017,UG,0,0.0019,0.1216,0.5238,0.1848,Africa,East Africa,Uganda,2010
2018,UG,0,0.0019,0.1218,0.527,0.1993,Africa,East Africa,Uganda,2010
2019,UG,0,0.0019,0.1221,0.5302,0.2138,Africa,East Africa,Uganda,2010
2020,UG,0,0.0019,0.1221,0.5302,0.2138,Africa,East Africa,Uganda,2020
2021,UG,0,0.0019,0.1221,0.5302,0.2138,Africa,East Africa,Uganda,2020
2022,UG,0,0.0019,0.1221,0.5302,0.2138,Africa,East Africa,Uganda,2020
2023,UG,0,0.0019,0.1221,0.5302,0.2138,Africa,East Africa,Uganda,2020
1980,US,0.0001,0.0112,0.2008,0.3384,0.1042,Americas,North America,USA,1980
1981,US,0.0001,0.0104,0.1969,0.3433,0.1067,Americas,North America,USA,1980
1982,US,0.0001,0.009,0.1916,0.346,0.1099,Americas,North America,USA,1980
1983,US,0.0001,0.0075,0.1832,0.3536,0.115,Americas,North America,USA,1980
1984,US,0.0001,0.008,0.1796,0.3649,0.1215,Americas,North America,USA,1980
1985,US,0.0001,0.0075,0.1782,0.3655,0.1227,Americas,North America,USA,1980
1986,US,0.0001,0.0069,0.1761,0.3634,0.1198,Americas,North America,USA,1980
1987,US,0.0001,0.0069,0.1736,0.3747,0.1324,Americas,North America,USA,1980
1988,US,0.0001,0.0065,0.1687,0.3924,0.1521,Americas,North America,USA,1980
1989,US,0.0001,0.0068,0.1698,0.3878,0.1469,Americas,North America,USA,1980
1990,US,0.0001,0.006,0.1685,0.3876,0.1471,Americas,North America,USA,1990
1991,US,0,0.0056,0.1671,0.3832,0.1365,Americas,North America,USA,1990
1992,US,0,0.0053,0.16,0.3941,0.1468,Americas,North America,USA,1990
1993,US,0,0.0053,0.1611,0.391,0.1415,Americas,North America,USA,1990
1994,US,0,0.0057,0.1617,0.3913,0.1402,Americas,North America,USA,1990
1995,US,0,0.0055,0.1574,0.399,0.1452,Americas,North America,USA,1990
1996,US,0,0.0052,0.1547,0.408,0.1525,Americas,North America,USA,1990
1997,US,0,0.0053,0.1524,0.4155,0.16,Americas,North America,USA,1990
1998,US,0,0.0052,0.1528,0.4192,0.1632,Americas,North America,USA,1990
1999,US,0,0.0053,0.1514,0.4228,0.1676,Americas,North America,USA,1990
2000,US,0,0.0049,0.1506,0.4273,0.1734,Americas,North America,USA,2000
2001,US,0,0.0052,0.1531,0.4194,0.1659,Americas,North America,USA,2000
2002,US,0,0.0054,0.154,0.4149,0.161,Americas,North America,USA,2000
2003,US,0,0.0048,0.1509,0.4164,0.1632,Americas,North America,USA,2000
2004,US,0,0.0047,0.1478,0.4242,0.1706,Americas,North America,USA,2000
2005,US,0,0.0045,0.1432,0.4359,0.1806,Americas,North America,USA,2000
2006,US,0,0.0039,0.1408,0.4429,0.1852,Americas,North America,USA,2000
2007,US,0,0.0043,0.1431,0.4404,0.1838,Americas,North America,USA,2000
2008,US,0,0.0039,0.1429,0.4356,0.1793,Americas,North America,USA,2000
2009,US,0,0.0037,0.1425,0.4245,0.167,Americas,North America,USA,2000
2010,US,0,0.0034,0.1387,0.4381,0.1789,Americas,North America,USA,2010
2011,US,0,0.0032,0.1356,0.4426,0.1808,Americas,North America,USA,2010
2012,US,0,0.0027,0.1315,0.4559,0.1949,Americas,North America,USA,2010
2013,US,0,0.0036,0.1345,0.449,0.1846,Americas,North America,USA,2010
2014,US,0,0.0031,0.1314,0.4558,0.1897,Americas,North America,USA,2010
2015,US,0,0.0028,0.1321,0.455,0.1889,Americas,North America,USA,2010
2016,US,0,0.0024,0.1295,0.4536,0.1866,Americas,North America,USA,2010
2017,US,0,0.0024,0.1348,0.4546,0.1905,Americas,North America,USA,2010
2018,US,0,0.0024,0.1334,0.4581,0.1924,Americas,North America,USA,2010
2019,US,0,0.0025,0.1358,0.4567,0.1904,Americas,North America,USA,2010
2020,US,0,0.0036,0.137,0.4461,0.1817,Americas,North America,USA,2020
2021,US,0,0.0043,0.1346,0.4607,0.1988,Americas,North America,USA,2020
2022,US,0,0.0043,0.1334,0.4686,0.2073,Americas,North America,USA,2020
2023,US,0,0.0042,0.1344,0.4676,0.2073,Americas,North America,USA,2020
1980,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1981,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1982,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1983,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1984,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1985,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1986,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1987,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1988,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1989,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1980
1990,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1991,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1992,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1993,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1994,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1995,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1996,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1997,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1998,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
1999,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,1990
2000,UY,0,0.0011,0.1388,0.4744,0.1552,Americas,South America,Uruguay,2000
2001,UY,0,0.0012,0.1327,0.496,0.173,Americas,South America,Uruguay,2000
2002,UY,0,0.0002,0.1322,0.4871,0.1572,Americas,South America,Uruguay,2000
2003,UY,0,0,0.1262,0.5033,0.1759,Americas,South America,Uruguay,2000
2004,UY,0,0.0009,0.1286,0.4922,0.1689,Americas,South America,Uruguay,2000
2005,UY,0,0.0013,0.1327,0.478,0.1449,Americas,South America,Uruguay,2000
2006,UY,0,0.0018,0.1322,0.4841,0.1619,Americas,South America,Uruguay,2000
2007,UY,0,0.0024,0.1318,0.4903,0.1789,Americas,South America,Uruguay,2000
2008,UY,0,0.0033,0.1363,0.4896,0.1824,Americas,South America,Uruguay,2000
2009,UY,0,0.0037,0.1424,0.4739,0.1672,Americas,South America,Uruguay,2000
2010,UY,0,0.0046,0.149,0.4608,0.1573,Americas,South America,Uruguay,2010
2011,UY,0,0.005,0.1588,0.4422,0.1531,Americas,South America,Uruguay,2010
2012,UY,0,0.0048,0.1667,0.4144,0.1225,Americas,South America,Uruguay,2010
2013,UY,0,0.0056,0.168,0.4304,0.1395,Americas,South America,Uruguay,2010
2014,UY,0,0.0052,0.1652,0.4247,0.1407,Americas,South America,Uruguay,2010
2015,UY,0,0.0045,0.1629,0.4344,0.1431,Americas,South America,Uruguay,2010
2016,UY,0,0.0039,0.1613,0.4299,0.1424,Americas,South America,Uruguay,2010
2017,UY,0,0.0035,0.1584,0.4398,0.1389,Americas,South America,Uruguay,2010
2018,UY,0,0.0029,0.156,0.4448,0.144,Americas,South America,Uruguay,2010
2019,UY,0,0.0025,0.1567,0.4369,0.1323,Americas,South America,Uruguay,2010
2020,UY,0,0.0009,0.1463,0.4492,0.1426,Americas,South America,Uruguay,2020
2021,UY,0,0.0012,0.1405,0.4742,0.1722,Americas,South America,Uruguay,2020
2022,UY,0,0.0018,0.1476,0.4597,0.1478,Americas,South America,Uruguay,2020
2023,UY,0,0.0018,0.1476,0.4597,0.1478,Americas,South America,Uruguay,2020
1980,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1981,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1982,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1983,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1984,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1985,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1986,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1987,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1988,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1989,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1980
1990,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1991,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1992,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1993,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1994,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1995,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1996,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1997,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1998,UZ,0,0.0017,0.118,0.483,0.1744,Asia,Central Asia,Uzbekistan,1990
1999,UZ,0,0.002,0.1315,0.469,0.1732,Asia,Central Asia,Uzbekistan,1990
2000,UZ,0,0.0023,0.145,0.455,0.172,Asia,Central Asia,Uzbekistan,2000
2001,UZ,0,0.0025,0.1496,0.4516,0.1693,Asia,Central Asia,Uzbekistan,2000
2002,UZ,0,0.0026,0.1545,0.448,0.1665,Asia,Central Asia,Uzbekistan,2000
2003,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2004,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2005,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2006,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2007,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2008,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2009,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2000
2010,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2011,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2012,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2013,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2014,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2015,UZ,0,0.0024,0.1467,0.4547,0.1658,Asia,Central Asia,Uzbekistan,2010
2016,UZ,0,0.0025,0.1495,0.452,0.1629,Asia,Central Asia,Uzbekistan,2010
2017,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2010
2018,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2010
2019,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2010
2020,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2020
2021,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2020
2022,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2020
2023,UZ,0,0.0024,0.1462,0.4553,0.1665,Asia,Central Asia,Uzbekistan,2020
1980,VC,0,0.0009,0.0819,0.5594,0.2375,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1981,VC,0,0.0009,0.0816,0.5593,0.2364,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1982,VC,0,0.0009,0.0813,0.5593,0.2353,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1983,VC,0,0.0009,0.081,0.5593,0.2342,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1984,VC,0,0.0009,0.0807,0.5592,0.2331,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1985,VC,0,0.0009,0.0803,0.5592,0.2319,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1986,VC,0,0.0009,0.08,0.5592,0.2307,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1987,VC,0,0.0009,0.0796,0.5591,0.2295,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1988,VC,0,0.0009,0.0793,0.5591,0.2283,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1989,VC,0,0.0008,0.0789,0.5591,0.227,Americas,Caribbean,Saint Vincent and the Grenadines,1980
1990,VC,0,0.0008,0.0785,0.559,0.2258,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1991,VC,0,0.0008,0.0789,0.558,0.2257,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1992,VC,0,0.0008,0.0793,0.557,0.2255,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1993,VC,0,0.0008,0.0797,0.556,0.2254,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1994,VC,0,0.0008,0.08,0.555,0.2253,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1995,VC,0,0.0008,0.0804,0.554,0.2252,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1996,VC,0,0.0008,0.0807,0.5531,0.2251,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1997,VC,0,0.0008,0.0811,0.5521,0.225,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1998,VC,0,0.0008,0.0814,0.5512,0.2249,Americas,Caribbean,Saint Vincent and the Grenadines,1990
1999,VC,0,0.0008,0.0818,0.5503,0.2248,Americas,Caribbean,Saint Vincent and the Grenadines,1990
2000,VC,0,0.0008,0.0821,0.5494,0.2247,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2001,VC,0,0.0008,0.0826,0.5477000000000001,0.2231,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2002,VC,0,0.0008,0.083,0.546,0.2216,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2003,VC,0,0.0008,0.0835,0.5445,0.2202,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2004,VC,0,0.0008,0.0839,0.543,0.2189,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2005,VC,0,0.0008,0.0843,0.5416000000000001,0.2176,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2006,VC,0,0.0009,0.0846,0.5403,0.2164,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2007,VC,0,0.0009,0.085,0.539,0.2153,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2008,VC,0,0.0009,0.0853,0.5378000000000001,0.2142,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2009,VC,0,0.0009,0.0857,0.5366000000000001,0.2131,Americas,Caribbean,Saint Vincent and the Grenadines,2000
2010,VC,0,0.0009,0.086,0.5355,0.2121,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2011,VC,0,0.0009,0.0917,0.5303,0.212,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2012,VC,0,0.001,0.0974,0.5252,0.212,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2013,VC,0,0.001,0.103,0.52,0.212,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2014,VC,0,0.001,0.1086,0.515,0.212,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2015,VC,0,0.0011,0.1141,0.5099,0.2119,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2016,VC,0,0.0011,0.1197,0.5049,0.2119,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2017,VC,0,0.0012,0.1251,0.4999,0.2119,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2018,VC,0,0.0012,0.1306,0.4950000000000001,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2019,VC,0,0.0012,0.136,0.4901,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2010
2020,VC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2020
2021,VC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2020
2022,VC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2020
2023,VC,0,0.0013,0.1413,0.4852,0.2118,Americas,Caribbean,Saint Vincent and the Grenadines,2020
1980,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1981,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1982,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1983,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1984,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1985,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1986,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1987,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1988,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1989,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1980
1990,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1991,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1992,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1993,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1994,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1995,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1996,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1997,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1998,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
1999,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,1990
2000,VE,0,0.0001,0.0844,0.5525,0.1903,Americas,South America,Venezuela,2000
2001,VE,0,0.0001,0.0805,0.5636,0.1984,Americas,South America,Venezuela,2000
2002,VE,0,0,0.0809,0.5626,0.1928,Americas,South America,Venezuela,2000
2003,VE,0,0,0.0854,0.5605,0.2043,Americas,South America,Venezuela,2000
2004,VE,0,0.0001,0.0878,0.556,0.1999,Americas,South America,Venezuela,2000
2005,VE,0,0.0001,0.087,0.5555,0.193,Americas,South America,Venezuela,2000
2006,VE,0,0.0002,0.0902,0.5529000000000001,0.1941,Americas,South America,Venezuela,2000
2007,VE,0,0.0002,0.0888,0.5641,0.211,Americas,South America,Venezuela,2000
2008,VE,0,0.0003,0.0903,0.56,0.2029,Americas,South America,Venezuela,2000
2009,VE,0,0.0004,0.0926,0.5486,0.1928,Americas,South America,Venezuela,2000
2010,VE,0,0.0005,0.0942,0.5478000000000001,0.2001,Americas,South America,Venezuela,2010
2011,VE,0,0.0005,0.0976,0.541,0.1982,Americas,South America,Venezuela,2010
2012,VE,0,0.0005,0.1001,0.5332,0.197,Americas,South America,Venezuela,2010
2013,VE,0,0.0006,0.1006,0.5404,0.2057,Americas,South America,Venezuela,2010
2014,VE,0,0.0005,0.1026,0.5304,0.2046,Americas,South America,Venezuela,2010
2015,VE,0,0.0005,0.1032,0.5312,0.1942,Americas,South America,Venezuela,2010
2016,VE,0,0.0004,0.1034,0.5334,0.1984,Americas,South America,Venezuela,2010
2017,VE,0,0.0003,0.1031,0.5311,0.1884,Americas,South America,Venezuela,2010
2018,VE,0,0.0003,0.1016,0.5354,0.1976,Americas,South America,Venezuela,2010
2019,VE,0,0.0003,0.1024,0.5286000000000001,0.1905,Americas,South America,Venezuela,2010
2020,VE,0,0.0001,0.0872,0.5466,0.2043,Americas,South America,Venezuela,2020
2021,VE,0,0.0001,0.0972,0.5299,0.1892,Americas,South America,Venezuela,2020
2022,VE,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Venezuela,2020
2023,VE,0,0.0002,0.1037,0.5181,0.1787,Americas,South America,Venezuela,2020
1980,VG,0,0.0009,0.0819,0.5594,0.2375, British,Americas,Virgin Islands,1980
1981,VG,0,0.0009,0.0816,0.5593,0.2364, British,Americas,Virgin Islands,1980
1982,VG,0,0.0009,0.0813,0.5593,0.2353, British,Americas,Virgin Islands,1980
1983,VG,0,0.0009,0.081,0.5593,0.2342, British,Americas,Virgin Islands,1980
1984,VG,0,0.0009,0.0807,0.5592,0.2331, British,Americas,Virgin Islands,1980
1985,VG,0,0.0009,0.0803,0.5592,0.2319, British,Americas,Virgin Islands,1980
1986,VG,0,0.0009,0.08,0.5592,0.2307, British,Americas,Virgin Islands,1980
1987,VG,0,0.0009,0.0796,0.5591,0.2295, British,Americas,Virgin Islands,1980
1988,VG,0,0.0009,0.0793,0.5591,0.2283, British,Americas,Virgin Islands,1980
1989,VG,0,0.0008,0.0789,0.5591,0.227, British,Americas,Virgin Islands,1980
1990,VG,0,0.0008,0.0785,0.559,0.2258, British,Americas,Virgin Islands,1990
1991,VG,0,0.0008,0.0789,0.558,0.2257, British,Americas,Virgin Islands,1990
1992,VG,0,0.0008,0.0793,0.557,0.2255, British,Americas,Virgin Islands,1990
1993,VG,0,0.0008,0.0797,0.556,0.2254, British,Americas,Virgin Islands,1990
1994,VG,0,0.0008,0.08,0.555,0.2253, British,Americas,Virgin Islands,1990
1995,VG,0,0.0008,0.0804,0.554,0.2252, British,Americas,Virgin Islands,1990
1996,VG,0,0.0008,0.0807,0.5531,0.2251, British,Americas,Virgin Islands,1990
1997,VG,0,0.0008,0.0811,0.5521,0.225, British,Americas,Virgin Islands,1990
1998,VG,0,0.0008,0.0814,0.5512,0.2249, British,Americas,Virgin Islands,1990
1999,VG,0,0.0008,0.0818,0.5503,0.2248, British,Americas,Virgin Islands,1990
2000,VG,0,0.0008,0.0821,0.5494,0.2247, British,Americas,Virgin Islands,2000
2001,VG,0,0.0008,0.0826,0.5477000000000001,0.2231, British,Americas,Virgin Islands,2000
2002,VG,0,0.0008,0.083,0.546,0.2216, British,Americas,Virgin Islands,2000
2003,VG,0,0.0008,0.0835,0.5445,0.2202, British,Americas,Virgin Islands,2000
2004,VG,0,0.0008,0.0839,0.543,0.2189, British,Americas,Virgin Islands,2000
2005,VG,0,0.0008,0.0843,0.5416000000000001,0.2176, British,Americas,Virgin Islands,2000
2006,VG,0,0.0009,0.0846,0.5403,0.2164, British,Americas,Virgin Islands,2000
2007,VG,0,0.0009,0.085,0.539,0.2153, British,Americas,Virgin Islands,2000
2008,VG,0,0.0009,0.0853,0.5378000000000001,0.2142, British,Americas,Virgin Islands,2000
2009,VG,0,0.0009,0.0857,0.5366000000000001,0.2131, British,Americas,Virgin Islands,2000
2010,VG,0,0.0009,0.086,0.5355,0.2121, British,Americas,Virgin Islands,2010
2011,VG,0,0.0009,0.0917,0.5303,0.212, British,Americas,Virgin Islands,2010
2012,VG,0,0.001,0.0974,0.5252,0.212, British,Americas,Virgin Islands,2010
2013,VG,0,0.001,0.103,0.52,0.212, British,Americas,Virgin Islands,2010
2014,VG,0,0.001,0.1086,0.515,0.212, British,Americas,Virgin Islands,2010
2015,VG,0,0.0011,0.1141,0.5099,0.2119, British,Americas,Virgin Islands,2010
2016,VG,0,0.0011,0.1197,0.5049,0.2119, British,Americas,Virgin Islands,2010
2017,VG,0,0.0012,0.1251,0.4999,0.2119, British,Americas,Virgin Islands,2010
2018,VG,0,0.0012,0.1306,0.4950000000000001,0.2118, British,Americas,Virgin Islands,2010
2019,VG,0,0.0012,0.136,0.4901,0.2118, British,Americas,Virgin Islands,2010
2020,VG,0,0.0013,0.1413,0.4852,0.2118, British,Americas,Virgin Islands,2020
2021,VG,0,0.0013,0.1413,0.4852,0.2118, British,Americas,Virgin Islands,2020
2022,VG,0,0.0013,0.1413,0.4852,0.2118, British,Americas,Virgin Islands,2020
2023,VG,0,0.0013,0.1413,0.4852,0.2118, British,Americas,Virgin Islands,2020
1980,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1981,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1982,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1983,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1984,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1985,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1986,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1987,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1988,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1989,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1980
1990,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1990
1991,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1990
1992,VN,0,0.0023,0.1391,0.4582,0.1642,Asia,South-East Asia,Viet Nam,1990
1993,VN,0,0.0023,0.1394,0.4596,0.1648,Asia,South-East Asia,Viet Nam,1990
1994,VN,0,0.0023,0.1389,0.4615,0.1663,Asia,South-East Asia,Viet Nam,1990
1995,VN,0,0.0023,0.1389,0.4627,0.167,Asia,South-East Asia,Viet Nam,1990
1996,VN,0,0.0023,0.1394,0.4632,0.1671,Asia,South-East Asia,Viet Nam,1990
1997,VN,0,0.0023,0.1395,0.4641,0.1675,Asia,South-East Asia,Viet Nam,1990
1998,VN,0,0.0023,0.1396,0.464,0.1675,Asia,South-East Asia,Viet Nam,1990
1999,VN,0,0.0023,0.1375,0.466,0.1669,Asia,South-East Asia,Viet Nam,1990
2000,VN,0,0.0022,0.1328,0.4706,0.1699,Asia,South-East Asia,Viet Nam,2000
2001,VN,0,0.0021,0.1296,0.4737,0.1712,Asia,South-East Asia,Viet Nam,2000
2002,VN,0,0.0021,0.1287,0.4747,0.1699,Asia,South-East Asia,Viet Nam,2000
2003,VN,0,0.0021,0.1305,0.4675,0.1657,Asia,South-East Asia,Viet Nam,2000
2004,VN,0,0.0021,0.1303,0.4629,0.1643,Asia,South-East Asia,Viet Nam,2000
2005,VN,0,0.0021,0.1352,0.4537,0.1618,Asia,South-East Asia,Viet Nam,2000
2006,VN,0,0.0022,0.1403,0.4444,0.1589,Asia,South-East Asia,Viet Nam,2000
2007,VN,0,0.0023,0.1406,0.447,0.1617,Asia,South-East Asia,Viet Nam,2000
2008,VN,0,0.0023,0.1408,0.4497,0.1645,Asia,South-East Asia,Viet Nam,2000
2009,VN,0,0.0021,0.1323,0.468,0.1824,Asia,South-East Asia,Viet Nam,2000
2010,VN,0,0.002,0.126,0.4826,0.1967,Asia,South-East Asia,Viet Nam,2010
2011,VN,0,0.0021,0.1348,0.4622,0.1806,Asia,South-East Asia,Viet Nam,2010
2012,VN,0,0.0023,0.1435,0.4429,0.1651,Asia,South-East Asia,Viet Nam,2010
2013,VN,0,0.0023,0.1461,0.4383,0.1626,Asia,South-East Asia,Viet Nam,2010
2014,VN,0,0.0024,0.1475,0.4352,0.1614,Asia,South-East Asia,Viet Nam,2010
2015,VN,0,0.0023,0.1466,0.4365,0.1631,Asia,South-East Asia,Viet Nam,2010
2016,VN,0,0.0023,0.1454,0.4383,0.1651,Asia,South-East Asia,Viet Nam,2010
2017,VN,0,0.0023,0.1457,0.438,0.1612,Asia,South-East Asia,Viet Nam,2010
2018,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2010
2019,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2010
2020,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2020
2021,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2020
2022,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2020
2023,VN,0,0.0023,0.1463,0.4375,0.1574,Asia,South-East Asia,Viet Nam,2020
1980,VU,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1981,VU,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1982,VU,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1983,VU,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1984,VU,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1985,VU,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1986,VU,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1987,VU,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1988,VU,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1989,VU,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1980
1990,VU,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1991,VU,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1992,VU,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1993,VU,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1994,VU,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1995,VU,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1996,VU,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1997,VU,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1998,VU,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
1999,VU,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,1990
2000,VU,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2001,VU,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2002,VU,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2003,VU,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2004,VU,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2005,VU,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2006,VU,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2007,VU,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2008,VU,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2009,VU,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2000
2010,VU,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2011,VU,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2012,VU,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2013,VU,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2014,VU,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2015,VU,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2016,VU,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2017,VU,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2018,VU,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2019,VU,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2010
2020,VU,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2020
2021,VU,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2020
2022,VU,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2020
2023,VU,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Vanuatu,2020
1980,WS,0,0.0028,0.2121,0.3534,0.0885,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1981,WS,0,0.0027,0.2117,0.3543,0.09,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1982,WS,0,0.0027,0.2113,0.3553,0.0914,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1983,WS,0,0.0027,0.2108,0.3562,0.0929,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1984,WS,0,0.0027,0.2104,0.3572,0.0944,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1985,WS,0,0.0027,0.21,0.3581,0.096,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1986,WS,0,0.0027,0.2095,0.3591,0.0976,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1987,WS,0,0.0027,0.209,0.3602,0.0992,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1988,WS,0,0.0027,0.2086,0.3612,0.1008,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1989,WS,0,0.0027,0.2081,0.3623,0.1025,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1980
1990,WS,0,0.0027,0.2076,0.3634,0.1042,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1991,WS,0,0.0027,0.2075,0.3665,0.107,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1992,WS,0,0.0027,0.2075,0.3695,0.1096,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1993,WS,0,0.0027,0.2075,0.3725,0.1122,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1994,WS,0,0.0027,0.2074,0.3753,0.1147,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1995,WS,0,0.0027,0.2074,0.3781,0.1172,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1996,WS,0,0.0027,0.2073,0.3808,0.1195,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1997,WS,0,0.0027,0.2073,0.3834,0.1218,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1998,WS,0,0.0027,0.2073,0.3859,0.124,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
1999,WS,0,0.0027,0.2072,0.3883,0.1261,Oceania,Oceania (excl. Australia and New Zealand),Samoa,1990
2000,WS,0,0.0027,0.2072,0.3907,0.1282,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2001,WS,0,0.0026,0.2027,0.3995,0.132,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2002,WS,0,0.0026,0.1983,0.408,0.1358,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2003,WS,0,0.0025,0.194,0.4164,0.1394,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2004,WS,0,0.0025,0.1898,0.4246,0.1429,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2005,WS,0,0.0024,0.1857,0.4326,0.1464,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2006,WS,0,0.0023,0.1817,0.4404,0.1498,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2007,WS,0,0.0023,0.1778,0.448,0.1531,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2008,WS,0,0.0022,0.1739,0.4554,0.1564,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2009,WS,0,0.0022,0.1702,0.4627,0.1595,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2000
2010,WS,0,0.0021,0.1665,0.4699,0.1626,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2011,WS,0,0.0021,0.1655,0.4718,0.1624,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2012,WS,0,0.0021,0.1645,0.4737,0.1622,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2013,WS,0,0.0021,0.1636,0.4754,0.162,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2014,WS,0,0.0021,0.1627,0.4771,0.1618,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2015,WS,0,0.0021,0.1619,0.4788,0.1617,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2016,WS,0,0.0021,0.1611,0.4803,0.1615,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2017,WS,0,0.002,0.1603,0.4818,0.1613,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2018,WS,0,0.002,0.1596,0.4832,0.1612,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2019,WS,0,0.002,0.1589,0.4846,0.161,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2010
2020,WS,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2020
2021,WS,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2020
2022,WS,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2020
2023,WS,0,0.002,0.1582,0.4859,0.1609,Oceania,Oceania (excl. Australia and New Zealand),Samoa,2020
1980,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1981,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1982,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1983,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1984,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1985,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1986,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1987,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1988,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1989,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1980
1990,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1991,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1992,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1993,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1994,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1995,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1996,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1997,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1998,YE,0,0.0015,0.1,0.5664,0.2262,Asia,West Asia,Yemen,1990
1999,YE,0,0.0015,0.0989,0.5724,0.2354,Asia,West Asia,Yemen,1990
2000,YE,0,0.0015,0.0979,0.5783,0.2445,Asia,West Asia,Yemen,2000
2001,YE,0,0.0015,0.0968,0.5842,0.2536,Asia,West Asia,Yemen,2000
2002,YE,0,0.0015,0.0958,0.5900000000000001,0.2625,Asia,West Asia,Yemen,2000
2003,YE,0,0.0015,0.0947,0.5957,0.2713,Asia,West Asia,Yemen,2000
2004,YE,0,0.0015,0.0937,0.6014,0.2801,Asia,West Asia,Yemen,2000
2005,YE,0,0.0014,0.0927,0.607,0.2887,Asia,West Asia,Yemen,2000
2006,YE,0,0.0014,0.0917,0.6126,0.2973,Asia,West Asia,Yemen,2000
2007,YE,0,0.0015,0.0939,0.6153000000000001,0.3132,Asia,West Asia,Yemen,2000
2008,YE,0,0.0016,0.0963,0.6181,0.3301,Asia,West Asia,Yemen,2000
2009,YE,0,0.0016,0.0988,0.6212,0.3482,Asia,West Asia,Yemen,2000
2010,YE,0,0.0017,0.1015,0.6244000000000001,0.3675,Asia,West Asia,Yemen,2010
2011,YE,0,0.0018,0.1044,0.6279,0.3882,Asia,West Asia,Yemen,2010
2012,YE,0,0.0017,0.0981,0.648,0.4023,Asia,West Asia,Yemen,2010
2013,YE,0,0.0016,0.0919,0.6681,0.4164,Asia,West Asia,Yemen,2010
2014,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2015,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2016,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2017,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2018,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2019,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2010
2020,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2020
2021,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2020
2022,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2020
2023,YE,0,0.0014,0.0945,0.5953,0.25,Asia,West Asia,Yemen,2020
1980,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1981,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1982,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1983,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1984,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1985,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1986,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1987,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1988,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1989,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1980
1990,ZA,0,0.0025,0.135,0.4718,0.1014,Africa,South Africa,South Africa,1990
1991,ZA,0,0.0023,0.1257,0.4919,0.1081,Africa,South Africa,South Africa,1990
1992,ZA,0,0.0023,0.1275,0.4879,0.1085,Africa,South Africa,South Africa,1990
1993,ZA,0,0.0026,0.1389,0.4635,0.1058,Africa,South Africa,South Africa,1990
1994,ZA,0,0.0024,0.1337,0.4739,0.1128,Africa,South Africa,South Africa,1990
1995,ZA,0,0.0023,0.1284,0.4843,0.1199,Africa,South Africa,South Africa,1990
1996,ZA,0,0.0022,0.1232,0.4947,0.1269,Africa,South Africa,South Africa,1990
1997,ZA,0,0.0021,0.118,0.505,0.1338,Africa,South Africa,South Africa,1990
1998,ZA,0,0.0019,0.1128,0.5153,0.1408,Africa,South Africa,South Africa,1990
1999,ZA,0,0.0018,0.1076,0.5256000000000001,0.1477,Africa,South Africa,South Africa,1990
2000,ZA,0,0.0017,0.1025,0.5358,0.1546,Africa,South Africa,South Africa,2000
2001,ZA,0,0.0017,0.102,0.5473,0.1619,Africa,South Africa,South Africa,2000
2002,ZA,0,0.0018,0.1016,0.5589000000000001,0.1692,Africa,South Africa,South Africa,2000
2003,ZA,0,0.0018,0.1008,0.5711,0.1724,Africa,South Africa,South Africa,2000
2004,ZA,0,0.0019,0.1046,0.5737,0.1744,Africa,South Africa,South Africa,2000
2005,ZA,0,0.0019,0.1016,0.5906,0.1834,Africa,South Africa,South Africa,2000
2006,ZA,0,0.0017,0.0937,0.6007,0.1934,Africa,South Africa,South Africa,2000
2007,ZA,0,0.0014,0.0816,0.6197,0.2033,Africa,South Africa,South Africa,2000
2008,ZA,0,0.0015,0.0874,0.6006,0.1976,Africa,South Africa,South Africa,2000
2009,ZA,0,0.0016,0.0899,0.5929,0.1858,Africa,South Africa,South Africa,2000
2010,ZA,0,0.0013,0.0789,0.6142000000000001,0.1877,Africa,South Africa,South Africa,2010
2011,ZA,0,0.0012,0.0736,0.6243000000000001,0.1865,Africa,South Africa,South Africa,2010
2012,ZA,0,0.0009,0.059,0.6544,0.1932,Africa,South Africa,South Africa,2010
2013,ZA,0,0.0009,0.0585,0.6542,0.1931,Africa,South Africa,South Africa,2010
2014,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2015,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2016,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2017,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2018,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2019,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2010
2020,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2020
2021,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2020
2022,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2020
2023,ZA,0,0.0008,0.058,0.654,0.1931,Africa,South Africa,South Africa,2020
1980,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1981,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1982,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1983,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1984,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1985,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1986,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1987,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1988,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1989,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1980
1990,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1990
1991,ZM,0,0.0005,0.0556,0.5880000000000001,0.1885,Africa,East Africa,Zambia,1990
1992,ZM,0,0.0008,0.0707,0.5741,0.1779,Africa,East Africa,Zambia,1990
1993,ZM,0,0.0011,0.0858,0.5601,0.1672,Africa,East Africa,Zambia,1990
1994,ZM,0,0.0012,0.0906,0.5567,0.1748,Africa,East Africa,Zambia,1990
1995,ZM,0,0.0014,0.0954,0.5532,0.1824,Africa,East Africa,Zambia,1990
1996,ZM,0,0.0015,0.1002,0.5498000000000001,0.19,Africa,East Africa,Zambia,1990
1997,ZM,0,0.0015,0.099,0.5547000000000001,0.1957,Africa,East Africa,Zambia,1990
1998,ZM,0,0.0014,0.0978,0.5597,0.2014,Africa,East Africa,Zambia,1990
1999,ZM,0,0.0016,0.1045,0.5497000000000001,0.2,Africa,East Africa,Zambia,1990
2000,ZM,0,0.0017,0.1113,0.5397000000000001,0.1986,Africa,East Africa,Zambia,2000
2001,ZM,0,0.0018,0.1181,0.5297000000000001,0.1972,Africa,East Africa,Zambia,2000
2002,ZM,0,0.002,0.1249,0.5197,0.1958,Africa,East Africa,Zambia,2000
2003,ZM,0,0.0016,0.102,0.5623,0.2135,Africa,East Africa,Zambia,2000
2004,ZM,0,0.0011,0.0792,0.6046,0.231,Africa,East Africa,Zambia,2000
2005,ZM,0,0.0011,0.0788,0.606,0.2235,Africa,East Africa,Zambia,2000
2006,ZM,0,0.0011,0.0784,0.6073000000000001,0.2159,Africa,East Africa,Zambia,2000
2007,ZM,0,0.0012,0.0808,0.6018,0.2093,Africa,East Africa,Zambia,2000
2008,ZM,0,0.0012,0.0831,0.5963,0.2027,Africa,East Africa,Zambia,2000
2009,ZM,0,0.0013,0.0854,0.5907,0.1962,Africa,East Africa,Zambia,2000
2010,ZM,0,0.0013,0.0878,0.5852,0.1896,Africa,East Africa,Zambia,2010
2011,ZM,0,0.0012,0.085,0.5898,0.1961,Africa,East Africa,Zambia,2010
2012,ZM,0,0.0012,0.0822,0.5944,0.2027,Africa,East Africa,Zambia,2010
2013,ZM,0,0.0011,0.0794,0.599,0.2093,Africa,East Africa,Zambia,2010
2014,ZM,0,0.0011,0.0766,0.6036,0.2158,Africa,East Africa,Zambia,2010
2015,ZM,0,0.001,0.0738,0.6082000000000001,0.2223,Africa,East Africa,Zambia,2010
2016,ZM,0,0.0011,0.0759,0.6016,0.2163,Africa,East Africa,Zambia,2010
2017,ZM,0,0.0011,0.0779,0.595,0.2102,Africa,East Africa,Zambia,2010
2018,ZM,0,0.0011,0.08,0.5884,0.2042,Africa,East Africa,Zambia,2010
2019,ZM,0,0.0012,0.082,0.5817,0.1981,Africa,East Africa,Zambia,2010
2020,ZM,0,0.0012,0.0841,0.5751000000000001,0.192,Africa,East Africa,Zambia,2020
2021,ZM,0,0.0012,0.0862,0.5685,0.186,Africa,East Africa,Zambia,2020
2022,ZM,0,0.0013,0.0882,0.5618000000000001,0.1799,Africa,East Africa,Zambia,2020
2023,ZM,0,0.0013,0.0882,0.5618000000000001,0.1799,Africa,East Africa,Zambia,2020
1980,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1981,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1982,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1983,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1984,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1985,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1986,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1987,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1988,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1989,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1980
1990,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1991,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1992,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1993,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1994,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1995,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1996,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1997,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1998,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
1999,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,1990
2000,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2001,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2002,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2003,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2004,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2005,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2006,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2007,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2008,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2009,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2000
2010,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2011,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2012,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2013,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2014,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2015,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2016,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2017,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2018,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2019,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2010
2020,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2020
2021,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2020
2022,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2020
2023,ZW,0,0.0018,0.1125,0.5255000000000001,0.1749,Africa,East Africa,Zimbabwe,2020
1980,WO,0,0.0009,0.0576,0.5223,0.1672,,,World,1980
1981,WO,0,0.0009,0.0593,0.5217,0.1661,,,World,1980
1982,WO,0,0.0009,0.0616,0.5177,0.1617,,,World,1980
1983,WO,0,0.0009,0.0614,0.5193,0.1611,,,World,1980
1984,WO,0,0.0009,0.0627,0.5226000000000001,0.1633,,,World,1980
1985,WO,0,0.0009,0.0628,0.5251,0.1645,,,World,1980
1986,WO,0,0.0009,0.0623,0.5279,0.1658,,,World,1980
1987,WO,0,0.0009,0.0627,0.5319,0.1711,,,World,1980
1988,WO,0,0.0008,0.0624,0.5355,0.1766,,,World,1980
1989,WO,0,0.0008,0.0616,0.54,0.1781,,,World,1980
1990,WO,0,0.0008,0.0615,0.5448000000000001,0.1807,,,World,1990
1991,WO,0,0.0008,0.0617,0.5465,0.1798,,,World,1990
1992,WO,0,0.0008,0.062,0.5545,0.18,,,World,1990
1993,WO,0,0.0008,0.0629,0.5565,0.1816,,,World,1990
1994,WO,0,0.0008,0.0631,0.5625,0.1839,,,World,1990
1995,WO,0,0.0008,0.065,0.5645,0.1873,,,World,1990
1996,WO,0,0.0008,0.065,0.5696,0.1927,,,World,1990
1997,WO,0,0.0009,0.066,0.5706,0.1954,,,World,1990
1998,WO,0,0.0009,0.0658,0.5764,0.1977,,,World,1990
1999,WO,0,0.0009,0.0662,0.5787,0.1995,,,World,1990
2000,WO,0,0.0008,0.0648,0.5817,0.2034,,,World,2000
2001,WO,0,0.0008,0.0647,0.5816,0.2042,,,World,2000
2002,WO,0,0.0008,0.0649,0.5778,0.2013,,,World,2000
2003,WO,0,0.0009,0.0656,0.5773,0.2038,,,World,2000
2004,WO,0,0.0009,0.0665,0.5772,0.2083,,,World,2000
2005,WO,0,0.0009,0.0665,0.5763,0.2112,,,World,2000
2006,WO,0,0.0009,0.0679,0.5748,0.2137,,,World,2000
2007,WO,0,0.0009,0.0694,0.5698,0.2149,,,World,2000
2008,WO,0,0.0009,0.0704,0.5661,0.2096,,,World,2000
2009,WO,0,0.001,0.0744,0.5552,0.1998,,,World,2000
2010,WO,0,0.001,0.0748,0.5517000000000001,0.2023,,,World,2010
2011,WO,0,0.001,0.0752,0.5511,0.2044,,,World,2010
2012,WO,0,0.001,0.0766,0.5468000000000001,0.2054,,,World,2010
2013,WO,0,0.001,0.0775,0.5441,0.2029,,,World,2010
2014,WO,0,0.0011,0.0791,0.5399,0.2025,,,World,2010
2015,WO,0,0.0011,0.0796,0.5395,0.2015,,,World,2010
2016,WO,0,0.0009,0.0792,0.5375,0.1988,,,World,2010
2017,WO,0,0.0009,0.079,0.5367000000000001,0.2011,,,World,2010
2018,WO,0,0.0009,0.0793,0.536,0.2016,,,World,2010
2019,WO,0,0.0009,0.0798,0.5325,0.1981,,,World,2010
2020,WO,0,0.0008,0.0797,0.5337000000000001,0.1987,,,World,2020
2021,WO,0,0.0009,0.0786,0.5366000000000001,0.202,,,World,2020
2022,WO,0,0.0009,0.0788,0.5368,0.2043,,,World,2020
2023,WO,0,0.0009,0.0795,0.535,0.2046,,,World,2020
1980,QB,0,0.0006,0.0643,0.5885,0.2106,,,Africa,1980
1981,QB,0,0.0005,0.0644,0.5855,0.2042,,,Africa,1980
1982,QB,0,0.0006,0.064,0.5843,0.2048,,,Africa,1980
1983,QB,0,0.0005,0.0633,0.5845,0.207,,,Africa,1980
1984,QB,0,0.0005,0.0632,0.5841000000000001,0.2066,,,Africa,1980
1985,QB,0,0.0005,0.0626,0.5838,0.2065,,,Africa,1980
1986,QB,0,0.0006,0.0649,0.5770000000000001,0.2033,,,Africa,1980
1987,QB,0,0.0006,0.066,0.5733,0.2023,,,Africa,1980
1988,QB,0,0.0005,0.0652,0.5728,0.2002,,,Africa,1980
1989,QB,0,0.0006,0.0652,0.5736,0.2019,,,Africa,1980
1990,QB,0,0.0006,0.0659,0.5710000000000001,0.1983,,,Africa,1990
1991,QB,0,0.0005,0.0651,0.5747,0.2004,,,Africa,1990
1992,QB,0,0.0005,0.0643,0.5738,0.2006,,,Africa,1990
1993,QB,0,0.0006,0.0656,0.5695,0.1987,,,Africa,1990
1994,QB,0,0.0006,0.0642,0.5727,0.2024,,,Africa,1990
1995,QB,0,0.0006,0.0649,0.5737,0.2035,,,Africa,1990
1996,QB,0,0.0006,0.0666,0.5743,0.2071,,,Africa,1990
1997,QB,0,0.0006,0.0669,0.5788,0.2121,,,Africa,1990
1998,QB,0,0.0007,0.0687,0.5788,0.2146,,,Africa,1990
1999,QB,0,0.0007,0.0702,0.5815,0.2179,,,Africa,1990
2000,QB,0,0.0007,0.0698,0.5830000000000001,0.2197,,,Africa,2000
2001,QB,0,0.0007,0.0701,0.5831000000000001,0.221,,,Africa,2000
2002,QB,0,0.0007,0.0701,0.5817,0.2203,,,Africa,2000
2003,QB,0,0.0007,0.0708,0.5818,0.22,,,Africa,2000
2004,QB,0,0.0007,0.0717,0.5804,0.2187,,,Africa,2000
2005,QB,0,0.0007,0.0724,0.5793,0.2189,,,Africa,2000
2006,QB,0,0.0007,0.0726,0.5789000000000001,0.2189,,,Africa,2000
2007,QB,0,0.0007,0.0732,0.5794,0.22,,,Africa,2000
2008,QB,0,0.0007,0.075,0.5722,0.2174,,,Africa,2000
2009,QB,0,0.0008,0.0765,0.5637,0.2091,,,Africa,2000
2010,QB,0,0.0008,0.0773,0.5597,0.2051,,,Africa,2010
2011,QB,0,0.0008,0.0794,0.5559000000000001,0.2032,,,Africa,2010
2012,QB,0,0.0008,0.0776,0.5645,0.2117,,,Africa,2010
2013,QB,0,0.0008,0.0779,0.5650000000000001,0.2139,,,Africa,2010
2014,QB,0,0.0009,0.0799,0.5619000000000001,0.2133,,,Africa,2010
2015,QB,0,0.0008,0.0801,0.561,0.2133,,,Africa,2010
2016,QB,0,0.0008,0.0802,0.5601,0.2134,,,Africa,2010
2017,QB,0,0.0009,0.0813,0.5581,0.2122,,,Africa,2010
2018,QB,0,0.0009,0.0823,0.5565,0.2131,,,Africa,2010
2019,QB,0,0.0009,0.0831,0.5552,0.2121,,,Africa,2010
2020,QB,0,0.0008,0.0836,0.5524,0.2078,,,Africa,2020
2021,QB,0,0.0008,0.0822,0.5582,0.2101,,,Africa,2020
2022,QB,0,0.0009,0.0825,0.5573,0.2116,,,Africa,2020
2023,QB,0,0.0009,0.082,0.5574,0.2116,,,Africa,2020
1980,QE,0,0.003,0.2035,0.3063,0.0823,,,Europe,1980
1981,QE,0,0.003,0.2019,0.3046,0.0806,,,Europe,1980
1982,QE,0,0.0027,0.2018,0.3041,0.0799,,,Europe,1980
1983,QE,0,0.003,0.2029,0.3047,0.0804,,,Europe,1980
1984,QE,0,0.0027,0.2025,0.3072,0.0812,,,Europe,1980
1985,QE,0,0.003,0.2021,0.3091,0.0825,,,Europe,1980
1986,QE,0,0.003,0.201,0.314,0.0864,,,Europe,1980
1987,QE,0,0.0027,0.2001,0.3175,0.0887,,,Europe,1980
1988,QE,0,0.0025,0.198,0.3235,0.0921,,,Europe,1980
1989,QE,0,0.0025,0.1941,0.3284,0.0945,,,Europe,1980
1990,QE,0,0.0024,0.1869,0.3341,0.0943,,,Europe,1990
1991,QE,0,0.0023,0.1776,0.3384,0.0953,,,Europe,1990
1992,QE,0,0.002,0.1723,0.34,0.0937,,,Europe,1990
1993,QE,0,0.0021,0.1699,0.3427,0.0953,,,Europe,1990
1994,QE,0,0.0017,0.1676,0.3467,0.0984,,,Europe,1990
1995,QE,0,0.0017,0.1666,0.3484,0.1006,,,Europe,1990
1996,QE,0,0.0017,0.1666,0.3527,0.1055,,,Europe,1990
1997,QE,0,0.0018,0.1666,0.3566,0.1098,,,Europe,1990
1998,QE,0,0.0017,0.1649,0.3616,0.1142,,,Europe,1990
1999,QE,0,0.0017,0.1637,0.3628,0.1124,,,Europe,1990
2000,QE,0,0.0016,0.164,0.3633,0.113,,,Europe,2000
2001,QE,0,0.0017,0.1644,0.3641,0.1121,,,Europe,2000
2002,QE,0,0.0016,0.1654,0.3624,0.11,,,Europe,2000
2003,QE,0,0.0017,0.1657,0.3631,0.112,,,Europe,2000
2004,QE,0,0.0018,0.1658,0.3659,0.1155,,,Europe,2000
2005,QE,0,0.0018,0.1665,0.371,0.1219,,,Europe,2000
2006,QE,0,0.0018,0.1665,0.3731,0.1241,,,Europe,2000
2007,QE,0,0.002,0.1669,0.3783,0.1264,,,Europe,2000
2008,QE,0,0.002,0.1719,0.368,0.1207,,,Europe,2000
2009,QE,0,0.0021,0.1731,0.3661,0.1168,,,Europe,2000
2010,QE,0,0.002,0.1743,0.3624,0.1161,,,Europe,2010
2011,QE,0,0.0019,0.1742,0.3645,0.1195,,,Europe,2010
2012,QE,0,0.0018,0.1746,0.3643,0.1174,,,Europe,2010
2013,QE,0,0.0019,0.1727,0.3696,0.1191,,,Europe,2010
2014,QE,0,0.0018,0.1738,0.3691,0.122,,,Europe,2010
2015,QE,0,0.0018,0.1751,0.3672,0.121,,,Europe,2010
2016,QE,0,0.0019,0.1772,0.367,0.1216,,,Europe,2010
2017,QE,0,0.0021,0.1794,0.3673,0.1235,,,Europe,2010
2018,QE,0,0.0021,0.1804,0.366,0.123,,,Europe,2010
2019,QE,0,0.0022,0.1822,0.3638,0.1208,,,Europe,2010
2020,QE,0,0.0023,0.1822,0.3652,0.1221,,,Europe,2020
2021,QE,0,0.0023,0.1826,0.3657,0.1238,,,Europe,2020
2022,QE,0,0.0022,0.182,0.3665,0.1229,,,Europe,2020
2023,QE,0,0.0022,0.182,0.3664,0.1227,,,Europe,2020
1980,QF,0,0.0015,0.1519,0.2801,0.0631,,,Oceania,1980
1981,QF,0,0.0014,0.1511,0.28,0.0612,,,Oceania,1980
1982,QF,0,0.0016,0.1493,0.285,0.0619,,,Oceania,1980
1983,QF,0,0.0016,0.1496,0.2858,0.0651,,,Oceania,1980
1984,QF,0,0.0016,0.1495,0.2867,0.0655,,,Oceania,1980
1985,QF,0,0.0014,0.1493,0.2853,0.0669,,,Oceania,1980
1986,QF,0,0.0014,0.1477,0.2918,0.0696,,,Oceania,1980
1987,QF,0,0.0014,0.1443,0.3069,0.0815,,,Oceania,1980
1988,QF,0,0.0013,0.1406,0.3221,0.0986,,,Oceania,1980
1989,QF,0,0.0013,0.143,0.3067,0.0842,,,Oceania,1980
1990,QF,0,0.0012,0.1406,0.3045,0.0818,,,Oceania,1990
1991,QF,0,0.0015,0.1414,0.3282,0.0789,,,Oceania,1990
1992,QF,0,0.0015,0.1428,0.3274,0.0792,,,Oceania,1990
1993,QF,0,0.0016,0.1402,0.3342,0.0834,,,Oceania,1990
1994,QF,0,0.0016,0.1385,0.3391,0.0873,,,Oceania,1990
1995,QF,0,0.0014,0.137,0.3438,0.0905,,,Oceania,1990
1996,QF,0,0.0015,0.1385,0.3433,0.094,,,Oceania,1990
1997,QF,0,0.0012,0.1338,0.3411,0.0885,,,Oceania,1990
1998,QF,0,0.0013,0.1286,0.3508,0.0959,,,Oceania,1990
1999,QF,0,0.0013,0.1305,0.3576,0.0993,,,Oceania,1990
2000,QF,0,0.0013,0.1315,0.3599,0.1015,,,Oceania,2000
2001,QF,0,0.0012,0.1343,0.3594,0.1019,,,Oceania,2000
2002,QF,0,0.0011,0.1287,0.3691,0.107,,,Oceania,2000
2003,QF,0,0.0011,0.1324,0.3673,0.1078,,,Oceania,2000
2004,QF,0,0.0011,0.1295,0.3878,0.1278,,,Oceania,2000
2005,QF,0,0.001,0.1272,0.3864,0.1234,,,Oceania,2000
2006,QF,0,0.0009,0.1299,0.3785,0.1105,,,Oceania,2000
2007,QF,0,0.0011,0.132,0.3818,0.1192,,,Oceania,2000
2008,QF,0,0.0011,0.1255,0.3886,0.1246,,,Oceania,2000
2009,QF,0,0.001,0.1278,0.3982,0.1321,,,Oceania,2000
2010,QF,0,0.001,0.1225,0.41,0.149,,,Oceania,2010
2011,QF,0,0.0011,0.1267,0.4041,0.1389,,,Oceania,2010
2012,QF,0,0.001,0.1276,0.3939,0.1228,,,Oceania,2010
2013,QF,0,0.001,0.1257,0.392,0.1182,,,Oceania,2010
2014,QF,0,0.0011,0.1274,0.3917,0.121,,,Oceania,2010
2015,QF,0,0.0012,0.1243,0.3881,0.114,,,Oceania,2010
2016,QF,0,0.0011,0.1252,0.381,0.1088,,,Oceania,2010
2017,QF,0,0.0011,0.1247,0.3864,0.1127,,,Oceania,2010
2018,QF,0,0.001,0.1265,0.3817,0.1096,,,Oceania,2010
2019,QF,0,0.0011,0.1201,0.3765,0.1117,,,Oceania,2010
2020,QF,0,0.0011,0.1155,0.3797,0.1137,,,Oceania,2020
2021,QF,0,0.001,0.1137,0.3831,0.1201,,,Oceania,2020
2022,QF,0,0.0011,0.1151,0.3797,0.1135,,,Oceania,2020
2023,QF,0,0.0011,0.1146,0.3807,0.1134,,,Oceania,2020
1980,QD,0,0.0018,0.0863,0.5831000000000001,0.2228,,,Asia,1980
1981,QD,0,0.0016,0.088,0.5797,0.2201,,,Asia,1980
1982,QD,0,0.0019,0.0909,0.5699000000000001,0.2089,,,Asia,1980
1983,QD,0,0.0017,0.0913,0.5665,0.2034,,,Asia,1980
1984,QD,0,0.0017,0.0949,0.5606,0.1996,,,Asia,1980
1985,QD,0,0.0019,0.0959,0.5605,0.1992,,,Asia,1980
1986,QD,0,0.0019,0.0937,0.5624,0.2017,,,Asia,1980
1987,QD,0,0.0018,0.0941,0.5613,0.2071,,,Asia,1980
1988,QD,0,0.0018,0.0932,0.5635,0.2093,,,Asia,1980
1989,QD,0,0.0018,0.0918,0.5677,0.2136,,,Asia,1980
1990,QD,0,0.0018,0.092,0.5695,0.2182,,,Asia,1990
1991,QD,0,0.0018,0.0912,0.5688,0.2177,,,Asia,1990
1992,QD,0,0.0016,0.093,0.5667,0.2122,,,Asia,1990
1993,QD,0,0.0018,0.0941,0.5639000000000001,0.2141,,,Asia,1990
1994,QD,0,0.0019,0.097,0.5643,0.2151,,,Asia,1990
1995,QD,0,0.0019,0.0999,0.5626,0.2192,,,Asia,1990
1996,QD,0,0.0015,0.0996,0.5692,0.2232,,,Asia,1990
1997,QD,0,0.0018,0.1021,0.5635,0.2193,,,Asia,1990
1998,QD,0,0.0019,0.1055,0.5583,0.2196,,,Asia,1990
1999,QD,0,0.002,0.1058,0.5569000000000001,0.2212,,,Asia,1990
2000,QD,0,0.0018,0.1021,0.5602,0.227,,,Asia,2000
2001,QD,0,0.0017,0.1009,0.561,0.2316,,,Asia,2000
2002,QD,0,0.0018,0.0992,0.5585,0.2291,,,Asia,2000
2003,QD,0,0.0019,0.0983,0.5583,0.2298,,,Asia,2000
2004,QD,0,0.0019,0.0976,0.5585,0.2316,,,Asia,2000
2005,QD,0,0.0019,0.0961,0.5576,0.2317,,,Asia,2000
2006,QD,0,0.0018,0.0967,0.5539000000000001,0.2322,,,Asia,2000
2007,QD,0,0.0018,0.0961,0.5527000000000001,0.231,,,Asia,2000
2008,QD,0,0.0018,0.096,0.5495,0.2287,,,Asia,2000
2009,QD,0,0.0017,0.0993,0.535,0.219,,,Asia,2000
2010,QD,0,0.0016,0.0979,0.5322,0.2155,,,Asia,2010
2011,QD,0,0.0018,0.0976,0.5316000000000001,0.2172,,,Asia,2010
2012,QD,0,0.0019,0.0989,0.5229,0.2099,,,Asia,2010
2013,QD,0,0.0019,0.0989,0.5214,0.2063,,,Asia,2010
2014,QD,0,0.0017,0.1001,0.5148,0.2041,,,Asia,2010
2015,QD,0,0.0019,0.1013,0.5131,0.2008,,,Asia,2010
2016,QD,0,0.0016,0.0992,0.5134000000000001,0.1996,,,Asia,2010
2017,QD,0,0.0016,0.0987,0.5154,0.2023,,,Asia,2010
2018,QD,0,0.0016,0.099,0.5143,0.201,,,Asia,2010
2019,QD,0,0.0017,0.0996,0.5107,0.196,,,Asia,2010
2020,QD,0,0.0019,0.0998,0.5125000000000001,0.2021,,,Asia,2020
2021,QD,0,0.0017,0.0983,0.5125000000000001,0.2037,,,Asia,2020
2022,QD,0,0.0016,0.0981,0.5162,0.2074,,,Asia,2020
2023,QD,0,0.0015,0.0983,0.5168,0.2078,,,Asia,2020`,u2=[{year:1980,country:"US",middle_40:.35,bottom_50:.21,top_10:.33,top_1:.1,region:"Americas",region2:"North America",shortname:"United States",decade:1980},{year:1990,country:"US",middle_40:.31,bottom_50:.17,top_10:.41,top_1:.14,region:"Americas",region2:"North America",shortname:"United States",decade:1990},{year:2e3,country:"US",middle_40:.27,bottom_50:.13,top_10:.49,top_1:.19,region:"Americas",region2:"North America",shortname:"United States",decade:2e3},{year:2010,country:"US",middle_40:.23,bottom_50:.11,top_10:.55,top_1:.23,region:"Americas",region2:"North America",shortname:"United States",decade:2010},{year:2020,country:"US",middle_40:.21,bottom_50:.09,top_10:.59,top_1:.27,region:"Americas",region2:"North America",shortname:"United States",decade:2020},{year:2024,country:"US",middle_40:.2,bottom_50:.08,top_10:.61,top_1:.29,region:"Americas",region2:"North America",shortname:"United States",decade:2020}],xc=()=>{try{if(console.log("Loading CSV data..."),console.log("CSV string length:",o2.length),!o2||o2.trim()==="")return console.warn("CSV string is empty, using fallback dataset"),u2;const r=o2.trim().split(`
`),t=r[0].split(",").map(f=>f.trim());console.log("CSV headers:",t),console.log("Total CSV lines:",r.length);const o=r.slice(1).map((f,d)=>{const p=f.split(","),h={};return t.forEach((W,y)=>{var N;h[W]=((N=p[y])==null?void 0:N.trim())||""}),h});if(console.log("Parsed CSV rows:",o.length),!o||o.length===0)return console.warn("CSV parsing returned empty data, using fallback"),u2;const c=o.map((f,d)=>{try{if(!f.year||!f.country||f.lowest_50===void 0||f.lowest_10===void 0||f.highest_10===void 0||f.highest_1===void 0)return console.warn(`Skipping row ${d} due to missing required fields:`,f),null;const p={year:parseInt(f.year),country:f.country,middle_40:parseFloat(f.lowest_50),bottom_50:parseFloat(f.lowest_10),top_10:parseFloat(f.highest_10),top_1:parseFloat(f.highest_1),region:f.region||"",region2:f.region2||"",shortname:f.shortname||"",decade:parseInt(f.decade)};return d<5&&console.log(`Row ${d}:`,{original:f,mapped:p}),p}catch(p){return console.warn(`Error parsing row ${d}:`,p,f),null}}).filter(f=>f!==null);if(c.length===0)return console.warn("No valid data rows after parsing, using fallback"),u2;const A=Array.from(new Set(c.map(f=>f.country))),E=Array.from(new Set(c.map(f=>f.region2)));return console.log(`Successfully loaded ${c.length} data rows from CSV`),console.log("Unique countries found:",A.slice(0,20),`... (${A.length} total)`),console.log("Unique regions found:",E),c}catch(r){return console.error("Error loading CSV data, using fallback:",r),u2}},$i=xc(),Rc=()=>{const r=new Map;$i.forEach(o=>{r.set(o.country,o.shortname)});const t=Array.from(r.entries()).map(([o,c])=>({code:o,name:c})).sort((o,c)=>o.name.localeCompare(c.name));return console.log("getCountries() returning:",t.length,"countries"),console.log("First 10 countries:",t.slice(0,10)),t},Zc=()=>{const r=new Set;$i.forEach(o=>{r.add(o.region2)});const t=Array.from(r).sort();return console.log("getRegions() returning:",t),t},Kc=(r,t)=>{console.log("filterData called with:",{country:r,region:t});let o=$i;return r&&r!=="All"&&(o=o.filter(c=>c.country===r),console.log(`Filtered by country ${r}:`,o.length,"rows")),t&&t!=="All"&&(o=o.filter(c=>c.region2===t),console.log(`Filtered by region ${t}:`,o.length,"rows")),o};function Dc({filters:r,setFilters:t}){const o=Rc(),c=Zc(),A=Array.from({length:45},(f,d)=>(1980+d).toString()),E=()=>{t({yAxis:"Income Share",incomeType:"Factor Income",country:"US",region:"All",startYear:"1980",endYear:"2024"})};return B.jsxs("div",{className:"mb-6",children:[B.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[B.jsx("h2",{className:"text-base",children:"Income graph options"}),B.jsxs("button",{onClick:E,className:"text-red-500 text-sm flex items-center gap-1 hover:text-red-400",children:[B.jsx(Oc,{className:"w-3 h-3"}),"Reset"]})]}),B.jsxs("div",{className:"grid grid-cols-12 gap-4 mb-4",children:[B.jsxs("div",{className:"col-span-2",children:[B.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"Y-AXIS"}),B.jsxs("select",{value:r.yAxis,onChange:f=>t({...r,yAxis:f.target.value}),className:"w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:[B.jsx("option",{children:"Income Share"}),B.jsx("option",{children:"Real Income Growth"}),B.jsx("option",{children:"Income Level"})]})]}),B.jsxs("div",{className:"col-span-2",children:[B.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"INCOME TYPE"}),B.jsxs("select",{value:r.incomeType,onChange:f=>t({...r,incomeType:f.target.value}),className:"w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:[B.jsx("option",{children:"Factor Income"}),B.jsx("option",{children:"Pre-tax Income"}),B.jsx("option",{children:"Post-tax Income"})]})]}),B.jsxs("div",{className:"col-span-2",children:[B.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"COUNTRY"}),B.jsxs("select",{value:r.country,onChange:f=>t({...r,country:f.target.value}),className:"w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:[B.jsx("option",{value:"All",children:"All Countries"}),o.map(f=>B.jsx("option",{value:f.code,children:f.name},f.code))]})]}),B.jsxs("div",{className:"col-span-2",children:[B.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"REGION"}),B.jsxs("select",{value:r.region,onChange:f=>t({...r,region:f.target.value}),className:"w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:[B.jsx("option",{value:"All",children:"All Regions"}),c.map(f=>B.jsx("option",{value:f,children:f},f))]})]}),B.jsxs("div",{className:"col-span-4",children:[B.jsx("label",{className:"block text-xs text-gray-400 mb-2",children:"TIME RANGE"}),B.jsxs("div",{className:"flex gap-2 items-center",children:[B.jsx("select",{value:r.startYear,onChange:f=>t({...r,startYear:f.target.value}),className:"flex-1 bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:A.map(f=>B.jsx("option",{children:f},f))}),B.jsx("div",{className:"text-gray-400 text-sm",children:"TO"}),B.jsx("select",{value:r.endYear,onChange:f=>t({...r,endYear:f.target.value}),className:"flex-1 bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500",children:A.map(f=>B.jsx("option",{children:f},f))})]})]})]})]})}function p2(r,t){return r==null||t==null?NaN:r<t?-1:r>t?1:r>=t?0:NaN}function kc(r,t){return r==null||t==null?NaN:t<r?-1:t>r?1:t>=r?0:NaN}function qi(r){let t,o,c;r.length!==2?(t=p2,o=(d,p)=>p2(r(d),p),c=(d,p)=>r(d)-p):(t=r===p2||r===kc?r:Uc,o=r,c=r);function A(d,p,h=0,W=d.length){if(h<W){if(t(p,p)!==0)return W;do{const y=h+W>>>1;o(d[y],p)<0?h=y+1:W=y}while(h<W)}return h}function E(d,p,h=0,W=d.length){if(h<W){if(t(p,p)!==0)return W;do{const y=h+W>>>1;o(d[y],p)<=0?h=y+1:W=y}while(h<W)}return h}function f(d,p,h=0,W=d.length){const y=A(d,p,h,W-1);return y>h&&c(d[y-1],p)>-c(d[y],p)?y-1:y}return{left:A,center:f,right:E}}function Uc(){return 0}function _c(r){return r===null?NaN:+r}const Fc=qi(p2),Hc=Fc.right;qi(_c).center;const zc=Math.sqrt(50),Vc=Math.sqrt(10),Yc=Math.sqrt(2);function C2(r,t,o){const c=(t-r)/Math.max(0,o),A=Math.floor(Math.log10(c)),E=c/Math.pow(10,A),f=E>=zc?10:E>=Vc?5:E>=Yc?2:1;let d,p,h;return A<0?(h=Math.pow(10,-A)/f,d=Math.round(r*h),p=Math.round(t*h),d/h<r&&++d,p/h>t&&--p,h=-h):(h=Math.pow(10,A)*f,d=Math.round(r/h),p=Math.round(t/h),d*h<r&&++d,p*h>t&&--p),p<d&&.5<=o&&o<2?C2(r,t,o*2):[d,p,h]}function Qc(r,t,o){if(t=+t,r=+r,o=+o,!(o>0))return[];if(r===t)return[r];const c=t<r,[A,E,f]=c?C2(t,r,o):C2(r,t,o);if(!(E>=A))return[];const d=E-A+1,p=new Array(d);if(c)if(f<0)for(let h=0;h<d;++h)p[h]=(E-h)/-f;else for(let h=0;h<d;++h)p[h]=(E-h)*f;else if(f<0)for(let h=0;h<d;++h)p[h]=(A+h)/-f;else for(let h=0;h<d;++h)p[h]=(A+h)*f;return p}function Zi(r,t,o){return t=+t,r=+r,o=+o,C2(r,t,o)[2]}function Jc(r,t,o){t=+t,r=+r,o=+o;const c=t<r,A=c?Zi(t,r,o):Zi(r,t,o);return(c?-1:1)*(A<0?1/-A:A)}function jc(r){return r}var Li=1,Ii=2,Ki=3,De=4,fo=1e-6;function $c(r){return"translate("+r+",0)"}function qc(r){return"translate(0,"+r+")"}function Xc(r){return t=>+r(t)}function aA(r,t){return t=Math.max(0,r.bandwidth()-t*2)/2,r.round()&&(t=Math.round(t)),o=>+r(o)+t}function eA(){return!this.__axis}function ko(r,t){var o=[],c=null,A=null,E=6,f=6,d=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,h=r===Li||r===De?-1:1,W=r===De||r===Ii?"x":"y",y=r===Li||r===Ki?$c:qc;function N(v){var V=c??(t.ticks?t.ticks.apply(t,o):t.domain()),F=A??(t.tickFormat?t.tickFormat.apply(t,o):jc),z=Math.max(E,0)+d,p0=t.range(),r0=+p0[0]+p,t0=+p0[p0.length-1]+p,J=(t.bandwidth?aA:Xc)(t.copy(),p),X=v.selection?v.selection():v,q=X.selectAll(".domain").data([null]),c0=X.selectAll(".tick").data(V,t).order(),f0=c0.exit(),L0=c0.enter().append("g").attr("class","tick"),G0=c0.select("line"),I0=c0.select("text");q=q.merge(q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),c0=c0.merge(L0),G0=G0.merge(L0.append("line").attr("stroke","currentColor").attr(W+"2",h*E)),I0=I0.merge(L0.append("text").attr("fill","currentColor").attr(W,h*z).attr("dy",r===Li?"0em":r===Ki?"0.71em":"0.32em")),v!==X&&(q=q.transition(v),c0=c0.transition(v),G0=G0.transition(v),I0=I0.transition(v),f0=f0.transition(v).attr("opacity",fo).attr("transform",function(H){return isFinite(H=J(H))?y(H+p):this.getAttribute("transform")}),L0.attr("opacity",fo).attr("transform",function(H){var E0=this.parentNode.__axis;return y((E0&&isFinite(E0=E0(H))?E0:J(H))+p)})),f0.remove(),q.attr("d",r===De||r===Ii?f?"M"+h*f+","+r0+"H"+p+"V"+t0+"H"+h*f:"M"+p+","+r0+"V"+t0:f?"M"+r0+","+h*f+"V"+p+"H"+t0+"V"+h*f:"M"+r0+","+p+"H"+t0),c0.attr("opacity",1).attr("transform",function(H){return y(J(H)+p)}),G0.attr(W+"2",h*E),I0.attr(W,h*z).text(F),X.filter(eA).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",r===Ii?"start":r===De?"end":"middle"),X.each(function(){this.__axis=J})}return N.scale=function(v){return arguments.length?(t=v,N):t},N.ticks=function(){return o=Array.from(arguments),N},N.tickArguments=function(v){return arguments.length?(o=v==null?[]:Array.from(v),N):o.slice()},N.tickValues=function(v){return arguments.length?(c=v==null?null:Array.from(v),N):c&&c.slice()},N.tickFormat=function(v){return arguments.length?(A=v,N):A},N.tickSize=function(v){return arguments.length?(E=f=+v,N):E},N.tickSizeInner=function(v){return arguments.length?(E=+v,N):E},N.tickSizeOuter=function(v){return arguments.length?(f=+v,N):f},N.tickPadding=function(v){return arguments.length?(d=+v,N):d},N.offset=function(v){return arguments.length?(p=+v,N):p},N}function nA(r){return ko(Ki,r)}function rA(r){return ko(De,r)}var iA={value:()=>{}};function Uo(){for(var r=0,t=arguments.length,o={},c;r<t;++r){if(!(c=arguments[r]+"")||c in o||/[\s.]/.test(c))throw new Error("illegal type: "+c);o[c]=[]}return new m2(o)}function m2(r){this._=r}function tA(r,t){return r.trim().split(/^|\s+/).map(function(o){var c="",A=o.indexOf(".");if(A>=0&&(c=o.slice(A+1),o=o.slice(0,A)),o&&!t.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:c}})}m2.prototype=Uo.prototype={constructor:m2,on:function(r,t){var o=this._,c=tA(r+"",o),A,E=-1,f=c.length;if(arguments.length<2){for(;++E<f;)if((A=(r=c[E]).type)&&(A=sA(o[A],r.name)))return A;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++E<f;)if(A=(r=c[E]).type)o[A]=Eo(o[A],r.name,t);else if(t==null)for(A in o)o[A]=Eo(o[A],r.name,null);return this},copy:function(){var r={},t=this._;for(var o in t)r[o]=t[o].slice();return new m2(r)},call:function(r,t){if((A=arguments.length-2)>0)for(var o=new Array(A),c=0,A,E;c<A;++c)o[c]=arguments[c+2];if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(E=this._[r],c=0,A=E.length;c<A;++c)E[c].value.apply(t,o)},apply:function(r,t,o){if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(var c=this._[r],A=0,E=c.length;A<E;++A)c[A].value.apply(t,o)}};function sA(r,t){for(var o=0,c=r.length,A;o<c;++o)if((A=r[o]).name===t)return A.value}function Eo(r,t,o){for(var c=0,A=r.length;c<A;++c)if(r[c].name===t){r[c]=iA,r=r.slice(0,c).concat(r.slice(c+1));break}return o!=null&&r.push({name:t,value:o}),r}var Di="http://www.w3.org/1999/xhtml";const po={svg:"http://www.w3.org/2000/svg",xhtml:Di,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function O2(r){var t=r+="",o=t.indexOf(":");return o>=0&&(t=r.slice(0,o))!=="xmlns"&&(r=r.slice(o+1)),po.hasOwnProperty(t)?{space:po[t],local:r}:r}function oA(r){return function(){var t=this.ownerDocument,o=this.namespaceURI;return o===Di&&t.documentElement.namespaceURI===Di?t.createElement(r):t.createElementNS(o,r)}}function uA(r){return function(){return this.ownerDocument.createElementNS(r.space,r.local)}}function _o(r){var t=O2(r);return(t.local?uA:oA)(t)}function cA(){}function Xi(r){return r==null?cA:function(){return this.querySelector(r)}}function AA(r){typeof r!="function"&&(r=Xi(r));for(var t=this._groups,o=t.length,c=new Array(o),A=0;A<o;++A)for(var E=t[A],f=E.length,d=c[A]=new Array(f),p,h,W=0;W<f;++W)(p=E[W])&&(h=r.call(p,p.__data__,W,E))&&("__data__"in p&&(h.__data__=p.__data__),d[W]=h);return new ia(c,this._parents)}function lA(r){return r==null?[]:Array.isArray(r)?r:Array.from(r)}function fA(){return[]}function Fo(r){return r==null?fA:function(){return this.querySelectorAll(r)}}function EA(r){return function(){return lA(r.apply(this,arguments))}}function dA(r){typeof r=="function"?r=EA(r):r=Fo(r);for(var t=this._groups,o=t.length,c=[],A=[],E=0;E<o;++E)for(var f=t[E],d=f.length,p,h=0;h<d;++h)(p=f[h])&&(c.push(r.call(p,p.__data__,h,f)),A.push(p));return new ia(c,A)}function Ho(r){return function(){return this.matches(r)}}function zo(r){return function(t){return t.matches(r)}}var pA=Array.prototype.find;function mA(r){return function(){return pA.call(this.children,r)}}function hA(){return this.firstElementChild}function SA(r){return this.select(r==null?hA:mA(typeof r=="function"?r:zo(r)))}var CA=Array.prototype.filter;function WA(){return Array.from(this.children)}function MA(r){return function(){return CA.call(this.children,r)}}function bA(r){return this.selectAll(r==null?WA:MA(typeof r=="function"?r:zo(r)))}function gA(r){typeof r!="function"&&(r=Ho(r));for(var t=this._groups,o=t.length,c=new Array(o),A=0;A<o;++A)for(var E=t[A],f=E.length,d=c[A]=[],p,h=0;h<f;++h)(p=E[h])&&r.call(p,p.__data__,h,E)&&d.push(p);return new ia(c,this._parents)}function Vo(r){return new Array(r.length)}function NA(){return new ia(this._enter||this._groups.map(Vo),this._parents)}function W2(r,t){this.ownerDocument=r.ownerDocument,this.namespaceURI=r.namespaceURI,this._next=null,this._parent=r,this.__data__=t}W2.prototype={constructor:W2,appendChild:function(r){return this._parent.insertBefore(r,this._next)},insertBefore:function(r,t){return this._parent.insertBefore(r,t)},querySelector:function(r){return this._parent.querySelector(r)},querySelectorAll:function(r){return this._parent.querySelectorAll(r)}};function yA(r){return function(){return r}}function wA(r,t,o,c,A,E){for(var f=0,d,p=t.length,h=E.length;f<h;++f)(d=t[f])?(d.__data__=E[f],c[f]=d):o[f]=new W2(r,E[f]);for(;f<p;++f)(d=t[f])&&(A[f]=d)}function BA(r,t,o,c,A,E,f){var d,p,h=new Map,W=t.length,y=E.length,N=new Array(W),v;for(d=0;d<W;++d)(p=t[d])&&(N[d]=v=f.call(p,p.__data__,d,t)+"",h.has(v)?A[d]=p:h.set(v,p));for(d=0;d<y;++d)v=f.call(r,E[d],d,E)+"",(p=h.get(v))?(c[d]=p,p.__data__=E[d],h.delete(v)):o[d]=new W2(r,E[d]);for(d=0;d<W;++d)(p=t[d])&&h.get(N[d])===p&&(A[d]=p)}function vA(r){return r.__data__}function GA(r,t){if(!arguments.length)return Array.from(this,vA);var o=t?BA:wA,c=this._parents,A=this._groups;typeof r!="function"&&(r=yA(r));for(var E=A.length,f=new Array(E),d=new Array(E),p=new Array(E),h=0;h<E;++h){var W=c[h],y=A[h],N=y.length,v=TA(r.call(W,W&&W.__data__,h,c)),V=v.length,F=d[h]=new Array(V),z=f[h]=new Array(V),p0=p[h]=new Array(N);o(W,y,F,z,p0,v,t);for(var r0=0,t0=0,J,X;r0<V;++r0)if(J=F[r0]){for(r0>=t0&&(t0=r0+1);!(X=z[t0])&&++t0<V;);J._next=X||null}}return f=new ia(f,c),f._enter=d,f._exit=p,f}function TA(r){return typeof r=="object"&&"length"in r?r:Array.from(r)}function OA(){return new ia(this._exit||this._groups.map(Vo),this._parents)}function LA(r,t,o){var c=this.enter(),A=this,E=this.exit();return typeof r=="function"?(c=r(c),c&&(c=c.selection())):c=c.append(r+""),t!=null&&(A=t(A),A&&(A=A.selection())),o==null?E.remove():o(E),c&&A?c.merge(A).order():A}function IA(r){for(var t=r.selection?r.selection():r,o=this._groups,c=t._groups,A=o.length,E=c.length,f=Math.min(A,E),d=new Array(A),p=0;p<f;++p)for(var h=o[p],W=c[p],y=h.length,N=d[p]=new Array(y),v,V=0;V<y;++V)(v=h[V]||W[V])&&(N[V]=v);for(;p<A;++p)d[p]=o[p];return new ia(d,this._parents)}function PA(){for(var r=this._groups,t=-1,o=r.length;++t<o;)for(var c=r[t],A=c.length-1,E=c[A],f;--A>=0;)(f=c[A])&&(E&&f.compareDocumentPosition(E)^4&&E.parentNode.insertBefore(f,E),E=f);return this}function xA(r){r||(r=RA);function t(y,N){return y&&N?r(y.__data__,N.__data__):!y-!N}for(var o=this._groups,c=o.length,A=new Array(c),E=0;E<c;++E){for(var f=o[E],d=f.length,p=A[E]=new Array(d),h,W=0;W<d;++W)(h=f[W])&&(p[W]=h);p.sort(t)}return new ia(A,this._parents).order()}function RA(r,t){return r<t?-1:r>t?1:r>=t?0:NaN}function ZA(){var r=arguments[0];return arguments[0]=this,r.apply(null,arguments),this}function KA(){return Array.from(this)}function DA(){for(var r=this._groups,t=0,o=r.length;t<o;++t)for(var c=r[t],A=0,E=c.length;A<E;++A){var f=c[A];if(f)return f}return null}function kA(){let r=0;for(const t of this)++r;return r}function UA(){return!this.node()}function _A(r){for(var t=this._groups,o=0,c=t.length;o<c;++o)for(var A=t[o],E=0,f=A.length,d;E<f;++E)(d=A[E])&&r.call(d,d.__data__,E,A);return this}function FA(r){return function(){this.removeAttribute(r)}}function HA(r){return function(){this.removeAttributeNS(r.space,r.local)}}function zA(r,t){return function(){this.setAttribute(r,t)}}function VA(r,t){return function(){this.setAttributeNS(r.space,r.local,t)}}function YA(r,t){return function(){var o=t.apply(this,arguments);o==null?this.removeAttribute(r):this.setAttribute(r,o)}}function QA(r,t){return function(){var o=t.apply(this,arguments);o==null?this.removeAttributeNS(r.space,r.local):this.setAttributeNS(r.space,r.local,o)}}function JA(r,t){var o=O2(r);if(arguments.length<2){var c=this.node();return o.local?c.getAttributeNS(o.space,o.local):c.getAttribute(o)}return this.each((t==null?o.local?HA:FA:typeof t=="function"?o.local?QA:YA:o.local?VA:zA)(o,t))}function Yo(r){return r.ownerDocument&&r.ownerDocument.defaultView||r.document&&r||r.defaultView}function jA(r){return function(){this.style.removeProperty(r)}}function $A(r,t,o){return function(){this.style.setProperty(r,t,o)}}function qA(r,t,o){return function(){var c=t.apply(this,arguments);c==null?this.style.removeProperty(r):this.style.setProperty(r,c,o)}}function XA(r,t,o){return arguments.length>1?this.each((t==null?jA:typeof t=="function"?qA:$A)(r,t,o??"")):J1(this.node(),r)}function J1(r,t){return r.style.getPropertyValue(t)||Yo(r).getComputedStyle(r,null).getPropertyValue(t)}function a5(r){return function(){delete this[r]}}function e5(r,t){return function(){this[r]=t}}function n5(r,t){return function(){var o=t.apply(this,arguments);o==null?delete this[r]:this[r]=o}}function r5(r,t){return arguments.length>1?this.each((t==null?a5:typeof t=="function"?n5:e5)(r,t)):this.node()[r]}function Qo(r){return r.trim().split(/^|\s+/)}function a9(r){return r.classList||new Jo(r)}function Jo(r){this._node=r,this._names=Qo(r.getAttribute("class")||"")}Jo.prototype={add:function(r){var t=this._names.indexOf(r);t<0&&(this._names.push(r),this._node.setAttribute("class",this._names.join(" ")))},remove:function(r){var t=this._names.indexOf(r);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(r){return this._names.indexOf(r)>=0}};function jo(r,t){for(var o=a9(r),c=-1,A=t.length;++c<A;)o.add(t[c])}function $o(r,t){for(var o=a9(r),c=-1,A=t.length;++c<A;)o.remove(t[c])}function i5(r){return function(){jo(this,r)}}function t5(r){return function(){$o(this,r)}}function s5(r,t){return function(){(t.apply(this,arguments)?jo:$o)(this,r)}}function o5(r,t){var o=Qo(r+"");if(arguments.length<2){for(var c=a9(this.node()),A=-1,E=o.length;++A<E;)if(!c.contains(o[A]))return!1;return!0}return this.each((typeof t=="function"?s5:t?i5:t5)(o,t))}function u5(){this.textContent=""}function c5(r){return function(){this.textContent=r}}function A5(r){return function(){var t=r.apply(this,arguments);this.textContent=t??""}}function l5(r){return arguments.length?this.each(r==null?u5:(typeof r=="function"?A5:c5)(r)):this.node().textContent}function f5(){this.innerHTML=""}function E5(r){return function(){this.innerHTML=r}}function d5(r){return function(){var t=r.apply(this,arguments);this.innerHTML=t??""}}function p5(r){return arguments.length?this.each(r==null?f5:(typeof r=="function"?d5:E5)(r)):this.node().innerHTML}function m5(){this.nextSibling&&this.parentNode.appendChild(this)}function h5(){return this.each(m5)}function S5(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function C5(){return this.each(S5)}function W5(r){var t=typeof r=="function"?r:_o(r);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function M5(){return null}function b5(r,t){var o=typeof r=="function"?r:_o(r),c=t==null?M5:typeof t=="function"?t:Xi(t);return this.select(function(){return this.insertBefore(o.apply(this,arguments),c.apply(this,arguments)||null)})}function g5(){var r=this.parentNode;r&&r.removeChild(this)}function N5(){return this.each(g5)}function y5(){var r=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(r,this.nextSibling):r}function w5(){var r=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(r,this.nextSibling):r}function B5(r){return this.select(r?w5:y5)}function v5(r){return arguments.length?this.property("__data__",r):this.node().__data__}function G5(r){return function(t){r.call(this,t,this.__data__)}}function T5(r){return r.trim().split(/^|\s+/).map(function(t){var o="",c=t.indexOf(".");return c>=0&&(o=t.slice(c+1),t=t.slice(0,c)),{type:t,name:o}})}function O5(r){return function(){var t=this.__on;if(t){for(var o=0,c=-1,A=t.length,E;o<A;++o)E=t[o],(!r.type||E.type===r.type)&&E.name===r.name?this.removeEventListener(E.type,E.listener,E.options):t[++c]=E;++c?t.length=c:delete this.__on}}}function L5(r,t,o){return function(){var c=this.__on,A,E=G5(t);if(c){for(var f=0,d=c.length;f<d;++f)if((A=c[f]).type===r.type&&A.name===r.name){this.removeEventListener(A.type,A.listener,A.options),this.addEventListener(A.type,A.listener=E,A.options=o),A.value=t;return}}this.addEventListener(r.type,E,o),A={type:r.type,name:r.name,value:t,listener:E,options:o},c?c.push(A):this.__on=[A]}}function I5(r,t,o){var c=T5(r+""),A,E=c.length,f;if(arguments.length<2){var d=this.node().__on;if(d){for(var p=0,h=d.length,W;p<h;++p)for(A=0,W=d[p];A<E;++A)if((f=c[A]).type===W.type&&f.name===W.name)return W.value}return}for(d=t?L5:O5,A=0;A<E;++A)this.each(d(c[A],t,o));return this}function qo(r,t,o){var c=Yo(r),A=c.CustomEvent;typeof A=="function"?A=new A(t,o):(A=c.document.createEvent("Event"),o?(A.initEvent(t,o.bubbles,o.cancelable),A.detail=o.detail):A.initEvent(t,!1,!1)),r.dispatchEvent(A)}function P5(r,t){return function(){return qo(this,r,t)}}function x5(r,t){return function(){return qo(this,r,t.apply(this,arguments))}}function R5(r,t){return this.each((typeof t=="function"?x5:P5)(r,t))}function*Z5(){for(var r=this._groups,t=0,o=r.length;t<o;++t)for(var c=r[t],A=0,E=c.length,f;A<E;++A)(f=c[A])&&(yield f)}var Xo=[null];function ia(r,t){this._groups=r,this._parents=t}function Ye(){return new ia([[document.documentElement]],Xo)}function K5(){return this}ia.prototype=Ye.prototype={constructor:ia,select:AA,selectAll:dA,selectChild:SA,selectChildren:bA,filter:gA,data:GA,enter:NA,exit:OA,join:LA,merge:IA,selection:K5,order:PA,sort:xA,call:ZA,nodes:KA,node:DA,size:kA,empty:UA,each:_A,attr:JA,style:XA,property:r5,classed:o5,text:l5,html:p5,raise:h5,lower:C5,append:W5,insert:b5,remove:N5,clone:B5,datum:v5,on:I5,dispatch:R5,[Symbol.iterator]:Z5};function D5(r){return typeof r=="string"?new ia([[document.querySelector(r)]],[document.documentElement]):new ia([[r]],Xo)}function k5(r){let t;for(;t=r.sourceEvent;)r=t;return r}function U5(r,t){if(r=k5(r),t===void 0&&(t=r.currentTarget),t){var o=t.ownerSVGElement||t;if(o.createSVGPoint){var c=o.createSVGPoint();return c.x=r.clientX,c.y=r.clientY,c=c.matrixTransform(t.getScreenCTM().inverse()),[c.x,c.y]}if(t.getBoundingClientRect){var A=t.getBoundingClientRect();return[r.clientX-A.left-t.clientLeft,r.clientY-A.top-t.clientTop]}}return[r.pageX,r.pageY]}function e9(r,t,o){r.prototype=t.prototype=o,o.constructor=r}function au(r,t){var o=Object.create(r.prototype);for(var c in t)o[c]=t[c];return o}function Qe(){}var Fe=.7,M2=1/Fe,Q1="\\s*([+-]?\\d+)\\s*",He="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",wa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_5=/^#([0-9a-f]{3,8})$/,F5=new RegExp(`^rgb\\(${Q1},${Q1},${Q1}\\)$`),H5=new RegExp(`^rgb\\(${wa},${wa},${wa}\\)$`),z5=new RegExp(`^rgba\\(${Q1},${Q1},${Q1},${He}\\)$`),V5=new RegExp(`^rgba\\(${wa},${wa},${wa},${He}\\)$`),Y5=new RegExp(`^hsl\\(${He},${wa},${wa}\\)$`),Q5=new RegExp(`^hsla\\(${He},${wa},${wa},${He}\\)$`),mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};e9(Qe,C1,{copy(r){return Object.assign(new this.constructor,this,r)},displayable(){return this.rgb().displayable()},hex:ho,formatHex:ho,formatHex8:J5,formatHsl:j5,formatRgb:So,toString:So});function ho(){return this.rgb().formatHex()}function J5(){return this.rgb().formatHex8()}function j5(){return eu(this).formatHsl()}function So(){return this.rgb().formatRgb()}function C1(r){var t,o;return r=(r+"").trim().toLowerCase(),(t=_5.exec(r))?(o=t[1].length,t=parseInt(t[1],16),o===6?Co(t):o===3?new $0(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):o===8?c2(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):o===4?c2(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=F5.exec(r))?new $0(t[1],t[2],t[3],1):(t=H5.exec(r))?new $0(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=z5.exec(r))?c2(t[1],t[2],t[3],t[4]):(t=V5.exec(r))?c2(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Y5.exec(r))?bo(t[1],t[2]/100,t[3]/100,1):(t=Q5.exec(r))?bo(t[1],t[2]/100,t[3]/100,t[4]):mo.hasOwnProperty(r)?Co(mo[r]):r==="transparent"?new $0(NaN,NaN,NaN,0):null}function Co(r){return new $0(r>>16&255,r>>8&255,r&255,1)}function c2(r,t,o,c){return c<=0&&(r=t=o=NaN),new $0(r,t,o,c)}function $5(r){return r instanceof Qe||(r=C1(r)),r?(r=r.rgb(),new $0(r.r,r.g,r.b,r.opacity)):new $0}function ki(r,t,o,c){return arguments.length===1?$5(r):new $0(r,t,o,c??1)}function $0(r,t,o,c){this.r=+r,this.g=+t,this.b=+o,this.opacity=+c}e9($0,ki,au(Qe,{brighter(r){return r=r==null?M2:Math.pow(M2,r),new $0(this.r*r,this.g*r,this.b*r,this.opacity)},darker(r){return r=r==null?Fe:Math.pow(Fe,r),new $0(this.r*r,this.g*r,this.b*r,this.opacity)},rgb(){return this},clamp(){return new $0(S1(this.r),S1(this.g),S1(this.b),b2(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Wo,formatHex:Wo,formatHex8:q5,formatRgb:Mo,toString:Mo}));function Wo(){return`#${h1(this.r)}${h1(this.g)}${h1(this.b)}`}function q5(){return`#${h1(this.r)}${h1(this.g)}${h1(this.b)}${h1((isNaN(this.opacity)?1:this.opacity)*255)}`}function Mo(){const r=b2(this.opacity);return`${r===1?"rgb(":"rgba("}${S1(this.r)}, ${S1(this.g)}, ${S1(this.b)}${r===1?")":`, ${r})`}`}function b2(r){return isNaN(r)?1:Math.max(0,Math.min(1,r))}function S1(r){return Math.max(0,Math.min(255,Math.round(r)||0))}function h1(r){return r=S1(r),(r<16?"0":"")+r.toString(16)}function bo(r,t,o,c){return c<=0?r=t=o=NaN:o<=0||o>=1?r=t=NaN:t<=0&&(r=NaN),new Ca(r,t,o,c)}function eu(r){if(r instanceof Ca)return new Ca(r.h,r.s,r.l,r.opacity);if(r instanceof Qe||(r=C1(r)),!r)return new Ca;if(r instanceof Ca)return r;r=r.rgb();var t=r.r/255,o=r.g/255,c=r.b/255,A=Math.min(t,o,c),E=Math.max(t,o,c),f=NaN,d=E-A,p=(E+A)/2;return d?(t===E?f=(o-c)/d+(o<c)*6:o===E?f=(c-t)/d+2:f=(t-o)/d+4,d/=p<.5?E+A:2-E-A,f*=60):d=p>0&&p<1?0:f,new Ca(f,d,p,r.opacity)}function X5(r,t,o,c){return arguments.length===1?eu(r):new Ca(r,t,o,c??1)}function Ca(r,t,o,c){this.h=+r,this.s=+t,this.l=+o,this.opacity=+c}e9(Ca,X5,au(Qe,{brighter(r){return r=r==null?M2:Math.pow(M2,r),new Ca(this.h,this.s,this.l*r,this.opacity)},darker(r){return r=r==null?Fe:Math.pow(Fe,r),new Ca(this.h,this.s,this.l*r,this.opacity)},rgb(){var r=this.h%360+(this.h<0)*360,t=isNaN(r)||isNaN(this.s)?0:this.s,o=this.l,c=o+(o<.5?o:1-o)*t,A=2*o-c;return new $0(Pi(r>=240?r-240:r+120,A,c),Pi(r,A,c),Pi(r<120?r+240:r-120,A,c),this.opacity)},clamp(){return new Ca(go(this.h),A2(this.s),A2(this.l),b2(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const r=b2(this.opacity);return`${r===1?"hsl(":"hsla("}${go(this.h)}, ${A2(this.s)*100}%, ${A2(this.l)*100}%${r===1?")":`, ${r})`}`}}));function go(r){return r=(r||0)%360,r<0?r+360:r}function A2(r){return Math.max(0,Math.min(1,r||0))}function Pi(r,t,o){return(r<60?t+(o-t)*r/60:r<180?o:r<240?t+(o-t)*(240-r)/60:t)*255}const n9=r=>()=>r;function a3(r,t){return function(o){return r+o*t}}function e3(r,t,o){return r=Math.pow(r,o),t=Math.pow(t,o)-r,o=1/o,function(c){return Math.pow(r+c*t,o)}}function n3(r){return(r=+r)==1?nu:function(t,o){return o-t?e3(t,o,r):n9(isNaN(t)?o:t)}}function nu(r,t){var o=t-r;return o?a3(r,o):n9(isNaN(r)?t:r)}const g2=(function r(t){var o=n3(t);function c(A,E){var f=o((A=ki(A)).r,(E=ki(E)).r),d=o(A.g,E.g),p=o(A.b,E.b),h=nu(A.opacity,E.opacity);return function(W){return A.r=f(W),A.g=d(W),A.b=p(W),A.opacity=h(W),A+""}}return c.gamma=r,c})(1);function r3(r,t){t||(t=[]);var o=r?Math.min(t.length,r.length):0,c=t.slice(),A;return function(E){for(A=0;A<o;++A)c[A]=r[A]*(1-E)+t[A]*E;return c}}function i3(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function t3(r,t){var o=t?t.length:0,c=r?Math.min(o,r.length):0,A=new Array(c),E=new Array(o),f;for(f=0;f<c;++f)A[f]=r9(r[f],t[f]);for(;f<o;++f)E[f]=t[f];return function(d){for(f=0;f<c;++f)E[f]=A[f](d);return E}}function s3(r,t){var o=new Date;return r=+r,t=+t,function(c){return o.setTime(r*(1-c)+t*c),o}}function Sa(r,t){return r=+r,t=+t,function(o){return r*(1-o)+t*o}}function o3(r,t){var o={},c={},A;(r===null||typeof r!="object")&&(r={}),(t===null||typeof t!="object")&&(t={});for(A in t)A in r?o[A]=r9(r[A],t[A]):c[A]=t[A];return function(E){for(A in o)c[A]=o[A](E);return c}}var Ui=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xi=new RegExp(Ui.source,"g");function u3(r){return function(){return r}}function c3(r){return function(t){return r(t)+""}}function ru(r,t){var o=Ui.lastIndex=xi.lastIndex=0,c,A,E,f=-1,d=[],p=[];for(r=r+"",t=t+"";(c=Ui.exec(r))&&(A=xi.exec(t));)(E=A.index)>o&&(E=t.slice(o,E),d[f]?d[f]+=E:d[++f]=E),(c=c[0])===(A=A[0])?d[f]?d[f]+=A:d[++f]=A:(d[++f]=null,p.push({i:f,x:Sa(c,A)})),o=xi.lastIndex;return o<t.length&&(E=t.slice(o),d[f]?d[f]+=E:d[++f]=E),d.length<2?p[0]?c3(p[0].x):u3(t):(t=p.length,function(h){for(var W=0,y;W<t;++W)d[(y=p[W]).i]=y.x(h);return d.join("")})}function r9(r,t){var o=typeof t,c;return t==null||o==="boolean"?n9(t):(o==="number"?Sa:o==="string"?(c=C1(t))?(t=c,g2):ru:t instanceof C1?g2:t instanceof Date?s3:i3(t)?r3:Array.isArray(t)?t3:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?o3:Sa)(r,t)}function A3(r,t){return r=+r,t=+t,function(o){return Math.round(r*(1-o)+t*o)}}var No=180/Math.PI,_i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function iu(r,t,o,c,A,E){var f,d,p;return(f=Math.sqrt(r*r+t*t))&&(r/=f,t/=f),(p=r*o+t*c)&&(o-=r*p,c-=t*p),(d=Math.sqrt(o*o+c*c))&&(o/=d,c/=d,p/=d),r*c<t*o&&(r=-r,t=-t,p=-p,f=-f),{translateX:A,translateY:E,rotate:Math.atan2(t,r)*No,skewX:Math.atan(p)*No,scaleX:f,scaleY:d}}var l2;function l3(r){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(r+"");return t.isIdentity?_i:iu(t.a,t.b,t.c,t.d,t.e,t.f)}function f3(r){return r==null||(l2||(l2=document.createElementNS("http://www.w3.org/2000/svg","g")),l2.setAttribute("transform",r),!(r=l2.transform.baseVal.consolidate()))?_i:(r=r.matrix,iu(r.a,r.b,r.c,r.d,r.e,r.f))}function tu(r,t,o,c){function A(h){return h.length?h.pop()+" ":""}function E(h,W,y,N,v,V){if(h!==y||W!==N){var F=v.push("translate(",null,t,null,o);V.push({i:F-4,x:Sa(h,y)},{i:F-2,x:Sa(W,N)})}else(y||N)&&v.push("translate("+y+t+N+o)}function f(h,W,y,N){h!==W?(h-W>180?W+=360:W-h>180&&(h+=360),N.push({i:y.push(A(y)+"rotate(",null,c)-2,x:Sa(h,W)})):W&&y.push(A(y)+"rotate("+W+c)}function d(h,W,y,N){h!==W?N.push({i:y.push(A(y)+"skewX(",null,c)-2,x:Sa(h,W)}):W&&y.push(A(y)+"skewX("+W+c)}function p(h,W,y,N,v,V){if(h!==y||W!==N){var F=v.push(A(v)+"scale(",null,",",null,")");V.push({i:F-4,x:Sa(h,y)},{i:F-2,x:Sa(W,N)})}else(y!==1||N!==1)&&v.push(A(v)+"scale("+y+","+N+")")}return function(h,W){var y=[],N=[];return h=r(h),W=r(W),E(h.translateX,h.translateY,W.translateX,W.translateY,y,N),f(h.rotate,W.rotate,y,N),d(h.skewX,W.skewX,y,N),p(h.scaleX,h.scaleY,W.scaleX,W.scaleY,y,N),h=W=null,function(v){for(var V=-1,F=N.length,z;++V<F;)y[(z=N[V]).i]=z.x(v);return y.join("")}}}var E3=tu(l3,"px, ","px)","deg)"),d3=tu(f3,", ",")",")"),j1=0,ke=0,Ke=0,su=1e3,N2,Ue,y2=0,W1=0,L2=0,ze=typeof performance=="object"&&performance.now?performance:Date,ou=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(r){setTimeout(r,17)};function i9(){return W1||(ou(p3),W1=ze.now()+L2)}function p3(){W1=0}function w2(){this._call=this._time=this._next=null}w2.prototype=uu.prototype={constructor:w2,restart:function(r,t,o){if(typeof r!="function")throw new TypeError("callback is not a function");o=(o==null?i9():+o)+(t==null?0:+t),!this._next&&Ue!==this&&(Ue?Ue._next=this:N2=this,Ue=this),this._call=r,this._time=o,Fi()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fi())}};function uu(r,t,o){var c=new w2;return c.restart(r,t,o),c}function m3(){i9(),++j1;for(var r=N2,t;r;)(t=W1-r._time)>=0&&r._call.call(void 0,t),r=r._next;--j1}function yo(){W1=(y2=ze.now())+L2,j1=ke=0;try{m3()}finally{j1=0,S3(),W1=0}}function h3(){var r=ze.now(),t=r-y2;t>su&&(L2-=t,y2=r)}function S3(){for(var r,t=N2,o,c=1/0;t;)t._call?(c>t._time&&(c=t._time),r=t,t=t._next):(o=t._next,t._next=null,t=r?r._next=o:N2=o);Ue=r,Fi(c)}function Fi(r){if(!j1){ke&&(ke=clearTimeout(ke));var t=r-W1;t>24?(r<1/0&&(ke=setTimeout(yo,r-ze.now()-L2)),Ke&&(Ke=clearInterval(Ke))):(Ke||(y2=ze.now(),Ke=setInterval(h3,su)),j1=1,ou(yo))}}function wo(r,t,o){var c=new w2;return t=t==null?0:+t,c.restart(A=>{c.stop(),r(A+t)},t,o),c}var C3=Uo("start","end","cancel","interrupt"),W3=[],cu=0,Bo=1,Hi=2,h2=3,vo=4,zi=5,S2=6;function I2(r,t,o,c,A,E){var f=r.__transition;if(!f)r.__transition={};else if(o in f)return;M3(r,o,{name:t,index:c,group:A,on:C3,tween:W3,time:E.time,delay:E.delay,duration:E.duration,ease:E.ease,timer:null,state:cu})}function t9(r,t){var o=Wa(r,t);if(o.state>cu)throw new Error("too late; already scheduled");return o}function Ba(r,t){var o=Wa(r,t);if(o.state>h2)throw new Error("too late; already running");return o}function Wa(r,t){var o=r.__transition;if(!o||!(o=o[t]))throw new Error("transition not found");return o}function M3(r,t,o){var c=r.__transition,A;c[t]=o,o.timer=uu(E,0,o.time);function E(h){o.state=Bo,o.timer.restart(f,o.delay,o.time),o.delay<=h&&f(h-o.delay)}function f(h){var W,y,N,v;if(o.state!==Bo)return p();for(W in c)if(v=c[W],v.name===o.name){if(v.state===h2)return wo(f);v.state===vo?(v.state=S2,v.timer.stop(),v.on.call("interrupt",r,r.__data__,v.index,v.group),delete c[W]):+W<t&&(v.state=S2,v.timer.stop(),v.on.call("cancel",r,r.__data__,v.index,v.group),delete c[W])}if(wo(function(){o.state===h2&&(o.state=vo,o.timer.restart(d,o.delay,o.time),d(h))}),o.state=Hi,o.on.call("start",r,r.__data__,o.index,o.group),o.state===Hi){for(o.state=h2,A=new Array(N=o.tween.length),W=0,y=-1;W<N;++W)(v=o.tween[W].value.call(r,r.__data__,o.index,o.group))&&(A[++y]=v);A.length=y+1}}function d(h){for(var W=h<o.duration?o.ease.call(null,h/o.duration):(o.timer.restart(p),o.state=zi,1),y=-1,N=A.length;++y<N;)A[y].call(r,W);o.state===zi&&(o.on.call("end",r,r.__data__,o.index,o.group),p())}function p(){o.state=S2,o.timer.stop(),delete c[t];for(var h in c)return;delete r.__transition}}function b3(r,t){var o=r.__transition,c,A,E=!0,f;if(o){t=t==null?null:t+"";for(f in o){if((c=o[f]).name!==t){E=!1;continue}A=c.state>Hi&&c.state<zi,c.state=S2,c.timer.stop(),c.on.call(A?"interrupt":"cancel",r,r.__data__,c.index,c.group),delete o[f]}E&&delete r.__transition}}function g3(r){return this.each(function(){b3(this,r)})}function N3(r,t){var o,c;return function(){var A=Ba(this,r),E=A.tween;if(E!==o){c=o=E;for(var f=0,d=c.length;f<d;++f)if(c[f].name===t){c=c.slice(),c.splice(f,1);break}}A.tween=c}}function y3(r,t,o){var c,A;if(typeof o!="function")throw new Error;return function(){var E=Ba(this,r),f=E.tween;if(f!==c){A=(c=f).slice();for(var d={name:t,value:o},p=0,h=A.length;p<h;++p)if(A[p].name===t){A[p]=d;break}p===h&&A.push(d)}E.tween=A}}function w3(r,t){var o=this._id;if(r+="",arguments.length<2){for(var c=Wa(this.node(),o).tween,A=0,E=c.length,f;A<E;++A)if((f=c[A]).name===r)return f.value;return null}return this.each((t==null?N3:y3)(o,r,t))}function s9(r,t,o){var c=r._id;return r.each(function(){var A=Ba(this,c);(A.value||(A.value={}))[t]=o.apply(this,arguments)}),function(A){return Wa(A,c).value[t]}}function Au(r,t){var o;return(typeof t=="number"?Sa:t instanceof C1?g2:(o=C1(t))?(t=o,g2):ru)(r,t)}function B3(r){return function(){this.removeAttribute(r)}}function v3(r){return function(){this.removeAttributeNS(r.space,r.local)}}function G3(r,t,o){var c,A=o+"",E;return function(){var f=this.getAttribute(r);return f===A?null:f===c?E:E=t(c=f,o)}}function T3(r,t,o){var c,A=o+"",E;return function(){var f=this.getAttributeNS(r.space,r.local);return f===A?null:f===c?E:E=t(c=f,o)}}function O3(r,t,o){var c,A,E;return function(){var f,d=o(this),p;return d==null?void this.removeAttribute(r):(f=this.getAttribute(r),p=d+"",f===p?null:f===c&&p===A?E:(A=p,E=t(c=f,d)))}}function L3(r,t,o){var c,A,E;return function(){var f,d=o(this),p;return d==null?void this.removeAttributeNS(r.space,r.local):(f=this.getAttributeNS(r.space,r.local),p=d+"",f===p?null:f===c&&p===A?E:(A=p,E=t(c=f,d)))}}function I3(r,t){var o=O2(r),c=o==="transform"?d3:Au;return this.attrTween(r,typeof t=="function"?(o.local?L3:O3)(o,c,s9(this,"attr."+r,t)):t==null?(o.local?v3:B3)(o):(o.local?T3:G3)(o,c,t))}function P3(r,t){return function(o){this.setAttribute(r,t.call(this,o))}}function x3(r,t){return function(o){this.setAttributeNS(r.space,r.local,t.call(this,o))}}function R3(r,t){var o,c;function A(){var E=t.apply(this,arguments);return E!==c&&(o=(c=E)&&x3(r,E)),o}return A._value=t,A}function Z3(r,t){var o,c;function A(){var E=t.apply(this,arguments);return E!==c&&(o=(c=E)&&P3(r,E)),o}return A._value=t,A}function K3(r,t){var o="attr."+r;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;var c=O2(r);return this.tween(o,(c.local?R3:Z3)(c,t))}function D3(r,t){return function(){t9(this,r).delay=+t.apply(this,arguments)}}function k3(r,t){return t=+t,function(){t9(this,r).delay=t}}function U3(r){var t=this._id;return arguments.length?this.each((typeof r=="function"?D3:k3)(t,r)):Wa(this.node(),t).delay}function _3(r,t){return function(){Ba(this,r).duration=+t.apply(this,arguments)}}function F3(r,t){return t=+t,function(){Ba(this,r).duration=t}}function H3(r){var t=this._id;return arguments.length?this.each((typeof r=="function"?_3:F3)(t,r)):Wa(this.node(),t).duration}function z3(r,t){if(typeof t!="function")throw new Error;return function(){Ba(this,r).ease=t}}function V3(r){var t=this._id;return arguments.length?this.each(z3(t,r)):Wa(this.node(),t).ease}function Y3(r,t){return function(){var o=t.apply(this,arguments);if(typeof o!="function")throw new Error;Ba(this,r).ease=o}}function Q3(r){if(typeof r!="function")throw new Error;return this.each(Y3(this._id,r))}function J3(r){typeof r!="function"&&(r=Ho(r));for(var t=this._groups,o=t.length,c=new Array(o),A=0;A<o;++A)for(var E=t[A],f=E.length,d=c[A]=[],p,h=0;h<f;++h)(p=E[h])&&r.call(p,p.__data__,h,E)&&d.push(p);return new Za(c,this._parents,this._name,this._id)}function j3(r){if(r._id!==this._id)throw new Error;for(var t=this._groups,o=r._groups,c=t.length,A=o.length,E=Math.min(c,A),f=new Array(c),d=0;d<E;++d)for(var p=t[d],h=o[d],W=p.length,y=f[d]=new Array(W),N,v=0;v<W;++v)(N=p[v]||h[v])&&(y[v]=N);for(;d<c;++d)f[d]=t[d];return new Za(f,this._parents,this._name,this._id)}function $3(r){return(r+"").trim().split(/^|\s+/).every(function(t){var o=t.indexOf(".");return o>=0&&(t=t.slice(0,o)),!t||t==="start"})}function q3(r,t,o){var c,A,E=$3(t)?t9:Ba;return function(){var f=E(this,r),d=f.on;d!==c&&(A=(c=d).copy()).on(t,o),f.on=A}}function X3(r,t){var o=this._id;return arguments.length<2?Wa(this.node(),o).on.on(r):this.each(q3(o,r,t))}function a4(r){return function(){var t=this.parentNode;for(var o in this.__transition)if(+o!==r)return;t&&t.removeChild(this)}}function e4(){return this.on("end.remove",a4(this._id))}function n4(r){var t=this._name,o=this._id;typeof r!="function"&&(r=Xi(r));for(var c=this._groups,A=c.length,E=new Array(A),f=0;f<A;++f)for(var d=c[f],p=d.length,h=E[f]=new Array(p),W,y,N=0;N<p;++N)(W=d[N])&&(y=r.call(W,W.__data__,N,d))&&("__data__"in W&&(y.__data__=W.__data__),h[N]=y,I2(h[N],t,o,N,h,Wa(W,o)));return new Za(E,this._parents,t,o)}function r4(r){var t=this._name,o=this._id;typeof r!="function"&&(r=Fo(r));for(var c=this._groups,A=c.length,E=[],f=[],d=0;d<A;++d)for(var p=c[d],h=p.length,W,y=0;y<h;++y)if(W=p[y]){for(var N=r.call(W,W.__data__,y,p),v,V=Wa(W,o),F=0,z=N.length;F<z;++F)(v=N[F])&&I2(v,t,o,F,N,V);E.push(N),f.push(W)}return new Za(E,f,t,o)}var i4=Ye.prototype.constructor;function t4(){return new i4(this._groups,this._parents)}function s4(r,t){var o,c,A;return function(){var E=J1(this,r),f=(this.style.removeProperty(r),J1(this,r));return E===f?null:E===o&&f===c?A:A=t(o=E,c=f)}}function lu(r){return function(){this.style.removeProperty(r)}}function o4(r,t,o){var c,A=o+"",E;return function(){var f=J1(this,r);return f===A?null:f===c?E:E=t(c=f,o)}}function u4(r,t,o){var c,A,E;return function(){var f=J1(this,r),d=o(this),p=d+"";return d==null&&(p=d=(this.style.removeProperty(r),J1(this,r))),f===p?null:f===c&&p===A?E:(A=p,E=t(c=f,d))}}function c4(r,t){var o,c,A,E="style."+t,f="end."+E,d;return function(){var p=Ba(this,r),h=p.on,W=p.value[E]==null?d||(d=lu(t)):void 0;(h!==o||A!==W)&&(c=(o=h).copy()).on(f,A=W),p.on=c}}function A4(r,t,o){var c=(r+="")=="transform"?E3:Au;return t==null?this.styleTween(r,s4(r,c)).on("end.style."+r,lu(r)):typeof t=="function"?this.styleTween(r,u4(r,c,s9(this,"style."+r,t))).each(c4(this._id,r)):this.styleTween(r,o4(r,c,t),o).on("end.style."+r,null)}function l4(r,t,o){return function(c){this.style.setProperty(r,t.call(this,c),o)}}function f4(r,t,o){var c,A;function E(){var f=t.apply(this,arguments);return f!==A&&(c=(A=f)&&l4(r,f,o)),c}return E._value=t,E}function E4(r,t,o){var c="style."+(r+="");if(arguments.length<2)return(c=this.tween(c))&&c._value;if(t==null)return this.tween(c,null);if(typeof t!="function")throw new Error;return this.tween(c,f4(r,t,o??""))}function d4(r){return function(){this.textContent=r}}function p4(r){return function(){var t=r(this);this.textContent=t??""}}function m4(r){return this.tween("text",typeof r=="function"?p4(s9(this,"text",r)):d4(r==null?"":r+""))}function h4(r){return function(t){this.textContent=r.call(this,t)}}function S4(r){var t,o;function c(){var A=r.apply(this,arguments);return A!==o&&(t=(o=A)&&h4(A)),t}return c._value=r,c}function C4(r){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(r==null)return this.tween(t,null);if(typeof r!="function")throw new Error;return this.tween(t,S4(r))}function W4(){for(var r=this._name,t=this._id,o=fu(),c=this._groups,A=c.length,E=0;E<A;++E)for(var f=c[E],d=f.length,p,h=0;h<d;++h)if(p=f[h]){var W=Wa(p,t);I2(p,r,o,h,f,{time:W.time+W.delay+W.duration,delay:0,duration:W.duration,ease:W.ease})}return new Za(c,this._parents,r,o)}function M4(){var r,t,o=this,c=o._id,A=o.size();return new Promise(function(E,f){var d={value:f},p={value:function(){--A===0&&E()}};o.each(function(){var h=Ba(this,c),W=h.on;W!==r&&(t=(r=W).copy(),t._.cancel.push(d),t._.interrupt.push(d),t._.end.push(p)),h.on=t}),A===0&&E()})}var b4=0;function Za(r,t,o,c){this._groups=r,this._parents=t,this._name=o,this._id=c}function fu(){return++b4}var Ra=Ye.prototype;Za.prototype={constructor:Za,select:n4,selectAll:r4,selectChild:Ra.selectChild,selectChildren:Ra.selectChildren,filter:J3,merge:j3,selection:t4,transition:W4,call:Ra.call,nodes:Ra.nodes,node:Ra.node,size:Ra.size,empty:Ra.empty,each:Ra.each,on:X3,attr:I3,attrTween:K3,style:A4,styleTween:E4,text:m4,textTween:C4,remove:e4,tween:w3,delay:U3,duration:H3,ease:V3,easeVarying:Q3,end:M4,[Symbol.iterator]:Ra[Symbol.iterator]};function g4(r){return((r*=2)<=1?r*r*r:(r-=2)*r*r+2)/2}var N4={time:null,delay:0,duration:250,ease:g4};function y4(r,t){for(var o;!(o=r.__transition)||!(o=o[t]);)if(!(r=r.parentNode))throw new Error(`transition ${t} not found`);return o}function w4(r){var t,o;r instanceof Za?(t=r._id,r=r._name):(t=fu(),(o=N4).time=i9(),r=r==null?null:r+"");for(var c=this._groups,A=c.length,E=0;E<A;++E)for(var f=c[E],d=f.length,p,h=0;h<d;++h)(p=f[h])&&I2(p,r,t,h,f,o||y4(p,t));return new Za(c,this._parents,r,t)}Ye.prototype.interrupt=g3;Ye.prototype.transition=w4;const Vi=Math.PI,Yi=2*Vi,m1=1e-6,B4=Yi-m1;function Eu(r){this._+=r[0];for(let t=1,o=r.length;t<o;++t)this._+=arguments[t]+r[t]}function v4(r){let t=Math.floor(r);if(!(t>=0))throw new Error(`invalid digits: ${r}`);if(t>15)return Eu;const o=10**t;return function(c){this._+=c[0];for(let A=1,E=c.length;A<E;++A)this._+=Math.round(arguments[A]*o)/o+c[A]}}class G4{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Eu:v4(t)}moveTo(t,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+o}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,o){this._append`L${this._x1=+t},${this._y1=+o}`}quadraticCurveTo(t,o,c,A){this._append`Q${+t},${+o},${this._x1=+c},${this._y1=+A}`}bezierCurveTo(t,o,c,A,E,f){this._append`C${+t},${+o},${+c},${+A},${this._x1=+E},${this._y1=+f}`}arcTo(t,o,c,A,E){if(t=+t,o=+o,c=+c,A=+A,E=+E,E<0)throw new Error(`negative radius: ${E}`);let f=this._x1,d=this._y1,p=c-t,h=A-o,W=f-t,y=d-o,N=W*W+y*y;if(this._x1===null)this._append`M${this._x1=t},${this._y1=o}`;else if(N>m1)if(!(Math.abs(y*p-h*W)>m1)||!E)this._append`L${this._x1=t},${this._y1=o}`;else{let v=c-f,V=A-d,F=p*p+h*h,z=v*v+V*V,p0=Math.sqrt(F),r0=Math.sqrt(N),t0=E*Math.tan((Vi-Math.acos((F+N-z)/(2*p0*r0)))/2),J=t0/r0,X=t0/p0;Math.abs(J-1)>m1&&this._append`L${t+J*W},${o+J*y}`,this._append`A${E},${E},0,0,${+(y*v>W*V)},${this._x1=t+X*p},${this._y1=o+X*h}`}}arc(t,o,c,A,E,f){if(t=+t,o=+o,c=+c,f=!!f,c<0)throw new Error(`negative radius: ${c}`);let d=c*Math.cos(A),p=c*Math.sin(A),h=t+d,W=o+p,y=1^f,N=f?A-E:E-A;this._x1===null?this._append`M${h},${W}`:(Math.abs(this._x1-h)>m1||Math.abs(this._y1-W)>m1)&&this._append`L${h},${W}`,c&&(N<0&&(N=N%Yi+Yi),N>B4?this._append`A${c},${c},0,1,${y},${t-d},${o-p}A${c},${c},0,1,${y},${this._x1=h},${this._y1=W}`:N>m1&&this._append`A${c},${c},0,${+(N>=Vi)},${y},${this._x1=t+c*Math.cos(E)},${this._y1=o+c*Math.sin(E)}`)}rect(t,o,c,A){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+o}h${c=+c}v${+A}h${-c}Z`}toString(){return this._}}function T4(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function B2(r,t){if(!isFinite(r)||r===0)return null;var o=(r=t?r.toExponential(t-1):r.toExponential()).indexOf("e"),c=r.slice(0,o);return[c.length>1?c[0]+c.slice(2):c,+r.slice(o+1)]}function $1(r){return r=B2(Math.abs(r)),r?r[1]:NaN}function O4(r,t){return function(o,c){for(var A=o.length,E=[],f=0,d=r[0],p=0;A>0&&d>0&&(p+d+1>c&&(d=Math.max(1,c-p)),E.push(o.substring(A-=d,A+d)),!((p+=d+1)>c));)d=r[f=(f+1)%r.length];return E.reverse().join(t)}}function L4(r){return function(t){return t.replace(/[0-9]/g,function(o){return r[+o]})}}var I4=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function v2(r){if(!(t=I4.exec(r)))throw new Error("invalid format: "+r);var t;return new o9({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}v2.prototype=o9.prototype;function o9(r){this.fill=r.fill===void 0?" ":r.fill+"",this.align=r.align===void 0?">":r.align+"",this.sign=r.sign===void 0?"-":r.sign+"",this.symbol=r.symbol===void 0?"":r.symbol+"",this.zero=!!r.zero,this.width=r.width===void 0?void 0:+r.width,this.comma=!!r.comma,this.precision=r.precision===void 0?void 0:+r.precision,this.trim=!!r.trim,this.type=r.type===void 0?"":r.type+""}o9.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function P4(r){a:for(var t=r.length,o=1,c=-1,A;o<t;++o)switch(r[o]){case".":c=A=o;break;case"0":c===0&&(c=o),A=o;break;default:if(!+r[o])break a;c>0&&(c=0);break}return c>0?r.slice(0,c)+r.slice(A+1):r}var G2;function x4(r,t){var o=B2(r,t);if(!o)return G2=void 0,r.toPrecision(t);var c=o[0],A=o[1],E=A-(G2=Math.max(-8,Math.min(8,Math.floor(A/3)))*3)+1,f=c.length;return E===f?c:E>f?c+new Array(E-f+1).join("0"):E>0?c.slice(0,E)+"."+c.slice(E):"0."+new Array(1-E).join("0")+B2(r,Math.max(0,t+E-1))[0]}function Go(r,t){var o=B2(r,t);if(!o)return r+"";var c=o[0],A=o[1];return A<0?"0."+new Array(-A).join("0")+c:c.length>A+1?c.slice(0,A+1)+"."+c.slice(A+1):c+new Array(A-c.length+2).join("0")}const To={"%":(r,t)=>(r*100).toFixed(t),b:r=>Math.round(r).toString(2),c:r=>r+"",d:T4,e:(r,t)=>r.toExponential(t),f:(r,t)=>r.toFixed(t),g:(r,t)=>r.toPrecision(t),o:r=>Math.round(r).toString(8),p:(r,t)=>Go(r*100,t),r:Go,s:x4,X:r=>Math.round(r).toString(16).toUpperCase(),x:r=>Math.round(r).toString(16)};function Oo(r){return r}var Lo=Array.prototype.map,Io=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function R4(r){var t=r.grouping===void 0||r.thousands===void 0?Oo:O4(Lo.call(r.grouping,Number),r.thousands+""),o=r.currency===void 0?"":r.currency[0]+"",c=r.currency===void 0?"":r.currency[1]+"",A=r.decimal===void 0?".":r.decimal+"",E=r.numerals===void 0?Oo:L4(Lo.call(r.numerals,String)),f=r.percent===void 0?"%":r.percent+"",d=r.minus===void 0?"−":r.minus+"",p=r.nan===void 0?"NaN":r.nan+"";function h(y,N){y=v2(y);var v=y.fill,V=y.align,F=y.sign,z=y.symbol,p0=y.zero,r0=y.width,t0=y.comma,J=y.precision,X=y.trim,q=y.type;q==="n"?(t0=!0,q="g"):To[q]||(J===void 0&&(J=12),X=!0,q="g"),(p0||v==="0"&&V==="=")&&(p0=!0,v="0",V="=");var c0=(N&&N.prefix!==void 0?N.prefix:"")+(z==="$"?o:z==="#"&&/[boxX]/.test(q)?"0"+q.toLowerCase():""),f0=(z==="$"?c:/[%p]/.test(q)?f:"")+(N&&N.suffix!==void 0?N.suffix:""),L0=To[q],G0=/[defgprs%]/.test(q);J=J===void 0?6:/[gprs]/.test(q)?Math.max(1,Math.min(21,J)):Math.max(0,Math.min(20,J));function I0(H){var E0=c0,d0=f0,W0,R,$;if(q==="c")d0=L0(H)+d0,H="";else{H=+H;var x=H<0||1/H<0;if(H=isNaN(H)?p:L0(Math.abs(H),J),X&&(H=P4(H)),x&&+H==0&&F!=="+"&&(x=!1),E0=(x?F==="("?F:d:F==="-"||F==="("?"":F)+E0,d0=(q==="s"&&!isNaN(H)&&G2!==void 0?Io[8+G2/3]:"")+d0+(x&&F==="("?")":""),G0){for(W0=-1,R=H.length;++W0<R;)if($=H.charCodeAt(W0),48>$||$>57){d0=($===46?A+H.slice(W0+1):H.slice(W0))+d0,H=H.slice(0,W0);break}}}t0&&!p0&&(H=t(H,1/0));var _=E0.length+H.length+d0.length,I=_<r0?new Array(r0-_+1).join(v):"";switch(t0&&p0&&(H=t(I+H,I.length?r0-d0.length:1/0),I=""),V){case"<":H=E0+H+d0+I;break;case"=":H=E0+I+H+d0;break;case"^":H=I.slice(0,_=I.length>>1)+E0+H+d0+I.slice(_);break;default:H=I+E0+H+d0;break}return E(H)}return I0.toString=function(){return y+""},I0}function W(y,N){var v=Math.max(-8,Math.min(8,Math.floor($1(N)/3)))*3,V=Math.pow(10,-v),F=h((y=v2(y),y.type="f",y),{suffix:Io[8+v/3]});return function(z){return F(V*z)}}return{format:h,formatPrefix:W}}var f2,du,pu;Z4({thousands:",",grouping:[3],currency:["$",""]});function Z4(r){return f2=R4(r),du=f2.format,pu=f2.formatPrefix,f2}function K4(r){return Math.max(0,-$1(Math.abs(r)))}function D4(r,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor($1(t)/3)))*3-$1(Math.abs(r)))}function k4(r,t){return r=Math.abs(r),t=Math.abs(t)-r,Math.max(0,$1(t)-$1(r))+1}function U4(r,t){switch(arguments.length){case 0:break;case 1:this.range(r);break;default:this.range(t).domain(r);break}return this}function _4(r){return function(){return r}}function F4(r){return+r}var Po=[0,1];function Y1(r){return r}function Qi(r,t){return(t-=r=+r)?function(o){return(o-r)/t}:_4(isNaN(t)?NaN:.5)}function H4(r,t){var o;return r>t&&(o=r,r=t,t=o),function(c){return Math.max(r,Math.min(t,c))}}function z4(r,t,o){var c=r[0],A=r[1],E=t[0],f=t[1];return A<c?(c=Qi(A,c),E=o(f,E)):(c=Qi(c,A),E=o(E,f)),function(d){return E(c(d))}}function V4(r,t,o){var c=Math.min(r.length,t.length)-1,A=new Array(c),E=new Array(c),f=-1;for(r[c]<r[0]&&(r=r.slice().reverse(),t=t.slice().reverse());++f<c;)A[f]=Qi(r[f],r[f+1]),E[f]=o(t[f],t[f+1]);return function(d){var p=Hc(r,d,1,c)-1;return E[p](A[p](d))}}function Y4(r,t){return t.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function Q4(){var r=Po,t=Po,o=r9,c,A,E,f=Y1,d,p,h;function W(){var N=Math.min(r.length,t.length);return f!==Y1&&(f=H4(r[0],r[N-1])),d=N>2?V4:z4,p=h=null,y}function y(N){return N==null||isNaN(N=+N)?E:(p||(p=d(r.map(c),t,o)))(c(f(N)))}return y.invert=function(N){return f(A((h||(h=d(t,r.map(c),Sa)))(N)))},y.domain=function(N){return arguments.length?(r=Array.from(N,F4),W()):r.slice()},y.range=function(N){return arguments.length?(t=Array.from(N),W()):t.slice()},y.rangeRound=function(N){return t=Array.from(N),o=A3,W()},y.clamp=function(N){return arguments.length?(f=N?!0:Y1,W()):f!==Y1},y.interpolate=function(N){return arguments.length?(o=N,W()):o},y.unknown=function(N){return arguments.length?(E=N,y):E},function(N,v){return c=N,A=v,W()}}function J4(){return Q4()(Y1,Y1)}function j4(r,t,o,c){var A=Jc(r,t,o),E;switch(c=v2(c??",f"),c.type){case"s":{var f=Math.max(Math.abs(r),Math.abs(t));return c.precision==null&&!isNaN(E=D4(A,f))&&(c.precision=E),pu(c,f)}case"":case"e":case"g":case"p":case"r":{c.precision==null&&!isNaN(E=k4(A,Math.max(Math.abs(r),Math.abs(t))))&&(c.precision=E-(c.type==="e"));break}case"f":case"%":{c.precision==null&&!isNaN(E=K4(A))&&(c.precision=E-(c.type==="%")*2);break}}return du(c)}function $4(r){var t=r.domain;return r.ticks=function(o){var c=t();return Qc(c[0],c[c.length-1],o??10)},r.tickFormat=function(o,c){var A=t();return j4(A[0],A[A.length-1],o??10,c)},r.nice=function(o){o==null&&(o=10);var c=t(),A=0,E=c.length-1,f=c[A],d=c[E],p,h,W=10;for(d<f&&(h=f,f=d,d=h,h=A,A=E,E=h);W-- >0;){if(h=Zi(f,d,o),h===p)return c[A]=f,c[E]=d,t(c);if(h>0)f=Math.floor(f/h)*h,d=Math.ceil(d/h)*h;else if(h<0)f=Math.ceil(f*h)/h,d=Math.floor(d*h)/h;else break;p=h}return r},r}function Ji(){var r=J4();return r.copy=function(){return Y4(r,Ji())},U4.apply(r,arguments),$4(r)}function V1(r){return function(){return r}}function q4(r){let t=3;return r.digits=function(o){if(!arguments.length)return t;if(o==null)t=null;else{const c=Math.floor(o);if(!(c>=0))throw new RangeError(`invalid digits: ${o}`);t=c}return r},()=>new G4(t)}function X4(r){return typeof r=="object"&&"length"in r?r:Array.from(r)}function mu(r){this._context=r}mu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(r,t){switch(r=+r,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(r,t):this._context.moveTo(r,t);break;case 1:this._point=2;default:this._context.lineTo(r,t);break}}};function al(r){return new mu(r)}function el(r){return r[0]}function nl(r){return r[1]}function E2(r,t){var o=V1(!0),c=null,A=al,E=null,f=q4(d);r=typeof r=="function"?r:r===void 0?el:V1(r),t=typeof t=="function"?t:t===void 0?nl:V1(t);function d(p){var h,W=(p=X4(p)).length,y,N=!1,v;for(c==null&&(E=A(v=f())),h=0;h<=W;++h)!(h<W&&o(y=p[h],h,p))===N&&((N=!N)?E.lineStart():E.lineEnd()),N&&E.point(+r(y,h,p),+t(y,h,p));if(v)return E=null,v+""||null}return d.x=function(p){return arguments.length?(r=typeof p=="function"?p:V1(+p),d):r},d.y=function(p){return arguments.length?(t=typeof p=="function"?p:V1(+p),d):t},d.defined=function(p){return arguments.length?(o=typeof p=="function"?p:V1(!!p),d):o},d.curve=function(p){return arguments.length?(A=p,c!=null&&(E=A(c)),d):A},d.context=function(p){return arguments.length?(p==null?c=E=null:E=A(c=p),d):c},d}function xo(r){return r<0?-1:1}function Ro(r,t,o){var c=r._x1-r._x0,A=t-r._x1,E=(r._y1-r._y0)/(c||A<0&&-0),f=(o-r._y1)/(A||c<0&&-0),d=(E*A+f*c)/(c+A);return(xo(E)+xo(f))*Math.min(Math.abs(E),Math.abs(f),.5*Math.abs(d))||0}function Zo(r,t){var o=r._x1-r._x0;return o?(3*(r._y1-r._y0)/o-t)/2:t}function Ri(r,t,o){var c=r._x0,A=r._y0,E=r._x1,f=r._y1,d=(E-c)/3;r._context.bezierCurveTo(c+d,A+d*t,E-d,f-d*o,E,f)}function T2(r){this._context=r}T2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ri(this,this._t0,Zo(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(r,t){var o=NaN;if(r=+r,t=+t,!(r===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(r,t):this._context.moveTo(r,t);break;case 1:this._point=2;break;case 2:this._point=3,Ri(this,Zo(this,o=Ro(this,r,t)),o);break;default:Ri(this,this._t0,o=Ro(this,r,t));break}this._x0=this._x1,this._x1=r,this._y0=this._y1,this._y1=t,this._t0=o}}};Object.create(T2.prototype).point=function(r,t){T2.prototype.point.call(this,t,r)};function d2(r){return new T2(r)}function _e(r,t,o){this.k=r,this.x=t,this.y=o}_e.prototype={constructor:_e,scale:function(r){return r===1?this:new _e(this.k*r,this.x,this.y)},translate:function(r,t){return r===0&t===0?this:new _e(this.k,this.x+this.k*r,this.y+this.k*t)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};_e.prototype;function rl({selectedGroups:r,setSelectedGroups:t,filters:o}){const c=ra.useRef(null),A=ra.useRef(null),[E,f]=ra.useState(null),[d,p]=ra.useState({x:0,y:0});return ra.useEffect(()=>{if(!c.current||!A.current)return;let h=Kc(o.country==="All"?void 0:o.country,o.region==="All"?void 0:o.region);const W=parseInt(o.startYear),y=parseInt(o.endYear);h=h.filter(R=>R.year>=W&&R.year<=y);const N=new Map;h.forEach(R=>{const $=N.get(R.year);$?($.middle_40=($.middle_40+R.middle_40)/2,$.bottom_50=($.bottom_50+R.bottom_50)/2,$.top_10=($.top_10+R.top_10)/2,$.top_1=($.top_1+R.top_1)/2):N.set(R.year,{...R})});const v=Array.from(N.values()).sort((R,$)=>R.year-$.year);if(v.length===0)return;const V=v.map((R,$)=>{const x=v[0];return o.yAxis==="Income Share"?{...R,top_10:R.top_10*100,middle_40:R.middle_40*100,bottom_50:R.bottom_50*100,top_1:R.top_1*100}:o.yAxis==="Real Income Growth"?{...R,top_10:(R.top_10-x.top_10)/x.top_10*100,middle_40:(R.middle_40-x.middle_40)/x.middle_40*100,bottom_50:(R.bottom_50-x.bottom_50)/x.bottom_50*100,top_1:(R.top_1-x.top_1)/x.top_1*100}:{...R,top_10:5e4*R.top_10*3,middle_40:5e4*R.middle_40*2,bottom_50:5e4*R.bottom_50*1.5,top_1:5e4*R.top_1*5}}),F=A.current.offsetWidth,z={top:20,right:20,bottom:60,left:70},p0=F-z.left-z.right,r0=500-z.top-z.bottom,t0=D5(c.current);t0.selectAll("*").remove(),t0.attr("width",F).attr("height",500).attr("viewBox",null).attr("preserveAspectRatio",null);const J=t0.append("g").attr("transform",`translate(${z.left},${z.top})`),X=Ji().domain([W,y]).range([0,p0]);let q,c0;o.yAxis==="Income Share"?(q=[0,100],c0=R=>R+"%"):o.yAxis==="Real Income Growth"?(q=[-50,150],c0=R=>R+"%"):(q=[0,2e5],c0=R=>"$"+R/1e3+"k");const f0=Ji().domain(q).range([r0,0]),L0=E2().x(R=>X(R.year)).y(R=>f0(R.top_10)).curve(d2),G0=E2().x(R=>X(R.year)).y(R=>f0(R.middle_40)).curve(d2),I0=E2().x(R=>X(R.year)).y(R=>f0(R.bottom_50)).curve(d2),H=E2().x(R=>X(R.year)).y(R=>f0(R.top_1)).curve(d2);r.top10&&J.append("path").datum(V).attr("fill","none").attr("stroke","#ef4444").attr("stroke-width",2.5).attr("d",L0),r.middle40&&J.append("path").datum(V).attr("fill","none").attr("stroke","#3b82f6").attr("stroke-width",2.5).attr("d",G0),r.bottom50&&J.append("path").datum(V).attr("fill","none").attr("stroke","#84cc16").attr("stroke-width",2.5).attr("d",I0),r.total&&J.append("path").datum(V).attr("fill","none").attr("stroke","#fff").attr("stroke-width",2.5).attr("stroke-dasharray","5,5").attr("d",H);const E0=qi(R=>R.year).left,d0=J.append("line").attr("stroke","#64748b").attr("stroke-width",1).attr("stroke-dasharray","3,3").style("opacity",0),W0=J.append("g");J.append("rect").attr("width",p0).attr("height",r0).attr("fill","none").attr("pointer-events","all").on("mousemove",function(R){const[$]=U5(R),x=Math.round(X.invert($)),_=E0(V,x);if(_>=0&&_<V.length){const I=V[_];d0.attr("x1",X(I.year)).attr("x2",X(I.year)).attr("y1",0).attr("y2",r0).style("opacity",1),W0.selectAll("*").remove(),r.top10&&W0.append("circle").attr("cx",X(I.year)).attr("cy",f0(I.top_10)).attr("r",4).attr("fill","#ef4444").attr("stroke","white").attr("stroke-width",2),r.middle40&&W0.append("circle").attr("cx",X(I.year)).attr("cy",f0(I.middle_40)).attr("r",4).attr("fill","#3b82f6").attr("stroke","white").attr("stroke-width",2),r.bottom50&&W0.append("circle").attr("cx",X(I.year)).attr("cy",f0(I.bottom_50)).attr("r",4).attr("fill","#84cc16").attr("stroke","white").attr("stroke-width",2),r.total&&W0.append("circle").attr("cx",X(I.year)).attr("cy",f0(I.top_1)).attr("r",4).attr("fill","#fff").attr("stroke","#0a1628").attr("stroke-width",2),f({year:`${I.year}`,values:[{group:"Top 10%",value:I.top_10.toFixed(1)+"%",color:"#ef4444"},{group:"Middle 40%",value:I.middle_40.toFixed(1)+"%",color:"#3b82f6"},{group:"Bottom 50%",value:I.bottom_50.toFixed(1)+"%",color:"#84cc16"},{group:"Top 1%",value:I.top_1.toFixed(1)+"%",color:"#fff"}]});const M=A.current.getBoundingClientRect();p({x:R.clientX-M.left,y:R.clientY-M.top})}}).on("mouseleave",function(){d0.style("opacity",0),W0.selectAll("*").remove(),f(null)}),J.append("g").attr("transform",`translate(0,${r0})`).call(nA(X).tickFormat(R=>R.toString()).ticks(8)).style("color","#9ca3af").style("font-size","12px"),J.append("g").call(rA(f0).tickFormat(c0).ticks(8)).style("color","#9ca3af").style("font-size","12px"),J.append("text").attr("transform","rotate(-90)").attr("y",-55).attr("x",-r0/2).attr("text-anchor","middle").style("fill","#9ca3af").style("font-size","12px").text("Real Factor Income Growth")},[r,o]),B.jsxs("div",{className:"relative",children:[B.jsxs("div",{className:"flex gap-6 mb-4 text-sm",children:[B.jsxs("button",{onClick:()=>t({...r,top10:!r.top10}),className:"flex items-center gap-2 hover:opacity-80",children:[B.jsx("span",{className:`w-3 h-3 rounded-full ${r.top10?"bg-red-500":"bg-gray-600"}`}),"Top 10%"]}),B.jsxs("button",{onClick:()=>t({...r,middle40:!r.middle40}),className:"flex items-center gap-2 hover:opacity-80",children:[B.jsx("span",{className:`w-3 h-3 rounded-full ${r.middle40?"bg-blue-500":"bg-gray-600"}`}),"Middle 40%"]}),B.jsxs("button",{onClick:()=>t({...r,bottom50:!r.bottom50}),className:"flex items-center gap-2 hover:opacity-80",children:[B.jsx("span",{className:`w-3 h-3 rounded-full ${r.bottom50?"bg-lime-500":"bg-gray-600"}`}),"Bottom 50%"]}),B.jsxs("button",{onClick:()=>t({...r,total:!r.total}),className:"flex items-center gap-2 hover:opacity-80",children:[B.jsx("span",{className:`w-3 h-3 ${r.total?"bg-white":"bg-gray-600"}`,style:{borderRadius:"2px",border:r.total?"1px dashed white":"none"}}),"Top 1%"]})]}),B.jsxs("div",{ref:A,className:"bg-[#0a1628] rounded-lg p-4 border border-gray-700 relative w-full",style:{maxWidth:"100%",overflow:"hidden"},children:[B.jsx("svg",{ref:c,style:{display:"block",maxWidth:"100%"}}),E&&B.jsxs("div",{className:"absolute pointer-events-none bg-[#1e293b] border border-gray-600 rounded-lg p-3 shadow-xl",style:{left:d.x+20,top:d.y-100,zIndex:1e3},children:[B.jsxs("div",{className:"text-xs text-gray-300 mb-2",children:[E.year," | Real Factor Income Growth"]}),B.jsxs("table",{className:"text-xs",children:[B.jsx("thead",{children:B.jsxs("tr",{className:"text-gray-400 border-b border-gray-600",children:[B.jsx("th",{className:"text-left pb-1 pr-4",children:"Group"}),B.jsx("th",{className:"text-right pb-1 pr-4",children:"Income Growth"})]})}),B.jsx("tbody",{children:E.values.map((h,W)=>B.jsxs("tr",{className:"border-b border-gray-700 last:border-0",children:[B.jsx("td",{className:"py-1.5 pr-4",children:B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:h.color}}),B.jsx("span",{className:"text-white",children:h.group})]})}),B.jsx("td",{className:"text-right py-1.5 pr-4 text-white",children:h.value})]},W))})]})]})]}),B.jsxs("div",{className:"flex gap-3 mt-4",children:[B.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-[#0d1f3a] border border-gray-600 rounded hover:bg-[#1a2f4a] text-sm",children:[B.jsx(Ic,{className:"w-4 h-4"}),"Share"]}),B.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm",children:[B.jsx(Gc,{className:"w-4 h-4"}),"Download data"]})]})]})}function il({selectedGroups:r,setSelectedGroups:t}){const o=[{id:"top10",label:"Top 10%",growth:"60.6%",gain:"$78k",color:"bg-red-500",selected:r.top10,interactive:!0},{id:"middle40",label:"Middle 40%",growth:"-14.3%",gain:"-$4.2k",color:"bg-blue-500",selected:r.middle40,interactive:!0},{id:"bottom50",label:"Bottom 50%",growth:"-47.8%",gain:"-$5.5k",color:"bg-lime-500",selected:r.bottom50,interactive:!0},{id:"total",label:"Top 1%",growth:"175.0%",gain:"$1.4M",color:"bg-white",selected:r.total,interactive:!0}],c=(A,E)=>{E&&(A==="top10"?t({...r,top10:!r.top10}):A==="middle40"?t({...r,middle40:!r.middle40}):A==="bottom50"?t({...r,bottom50:!r.bottom50}):A==="total"&&t({...r,total:!r.total}))};return B.jsxs("div",{className:"w-80 bg-[#0d1f3a] rounded-lg p-4 border border-gray-700",children:[B.jsxs("div",{className:"mb-3",children:[B.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[B.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-sm"}),B.jsx("h3",{className:"text-sm",children:"Factor Income growth per adult"})]}),B.jsx("p",{className:"text-xs text-gray-400",children:"From Jan 1980 to Mar 2024"})]}),B.jsxs("table",{className:"w-full text-sm",children:[B.jsx("thead",{children:B.jsxs("tr",{className:"border-b border-gray-600",children:[B.jsx("th",{className:"text-left py-2 text-xs text-gray-400",children:"Group"}),B.jsx("th",{className:"text-right py-2 text-xs text-gray-400",children:"Growth (%)"}),B.jsx("th",{className:"text-right py-2 text-xs text-gray-400",children:"Gain ($)"})]})}),B.jsx("tbody",{children:o.map(A=>B.jsxs("tr",{onClick:()=>c(A.id,A.interactive),className:`border-b border-gray-700 ${A.interactive?"cursor-pointer hover:bg-[#1a2f4a]":"opacity-60 cursor-not-allowed"} ${A.selected?"bg-[#1a2f4a]":""}`,children:[B.jsx("td",{className:"py-2.5",children:B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("div",{className:`w-4 h-4 border rounded flex items-center justify-center ${A.interactive?"border-gray-500":"border-gray-700 bg-gray-800"}`,children:A.selected&&B.jsx(Bc,{className:"w-3 h-3 text-blue-400"})}),B.jsx("span",{className:`w-2 h-2 ${A.color} rounded-full`}),B.jsx("span",{className:"text-sm",children:A.label})]})}),B.jsx("td",{className:"text-right py-2.5",children:A.growth}),B.jsx("td",{className:"text-right py-2.5",children:A.gain})]},A.id))})]}),B.jsx("div",{className:"mt-4",children:B.jsxs("button",{className:"text-xs text-gray-400 hover:text-gray-300 flex items-center gap-1",children:["Mutually Exclusive Groups (Click to expand)",B.jsx("span",{className:"text-blue-400",children:"+"})]})})]})}function tl(){const[r,t]=ra.useState("income"),o=[{id:"income",label:"Income Inequality"},{id:"wealth",label:"Wealth Inequality"},{id:"labor",label:"Labor Inequality"}];return B.jsx("nav",{className:"flex gap-6",children:o.map(c=>B.jsxs("button",{onClick:()=>t(c.id),className:`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${r===c.id?"text-white border-b-2 border-blue-400":"text-gray-400 hover:text-gray-300"}`,children:[B.jsx(Do,{className:"w-4 h-4"}),c.label]},c.id))})}function sl(){const[r,t]=ra.useState({top10:!0,middle40:!0,bottom50:!0,total:!1}),[o,c]=ra.useState({yAxis:"Income Share",incomeType:"Factor Income",country:"US",region:"All",startYear:"1980",endYear:"2024"});return B.jsxs("div",{className:"min-h-screen bg-[#0a1628] text-white",children:[B.jsx("header",{className:"border-b border-gray-700 bg-[#0d1f3a]",children:B.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between",children:[B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx(Do,{className:"w-5 h-5 text-blue-400"}),B.jsx("h1",{className:"text-lg",children:"Realtime Inequality"})]}),B.jsx(tl,{}),B.jsx("div",{className:"text-sm text-gray-400",children:"Methodology"})]})}),B.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 py-6",children:[B.jsxs("div",{className:"mb-6 text-sm text-blue-300 border-l-2 border-blue-500 pl-4 py-2",children:[B.jsx("p",{className:"mb-1",children:"You can adjust the graph with the options below: what the y-axis displays, the definition of income, the statistical unit, the data frequency, and the time range."}),B.jsx("p",{children:"You can also select groups using the box on the right. All dollar figures are annualized and adjusted for price inflation to March 2023 dollars."})]}),B.jsx(Dc,{filters:o,setFilters:c}),B.jsxs("div",{className:"flex gap-6",children:[B.jsx("div",{className:"flex-1",children:B.jsx(rl,{selectedGroups:r,setSelectedGroups:t,filters:o})}),B.jsx(il,{selectedGroups:r,setSelectedGroups:t})]})]})]})}Mc.createRoot(document.getElementById("root")).render(B.jsx(sl,{}));
