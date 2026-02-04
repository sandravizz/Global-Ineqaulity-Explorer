(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))A(c);new MutationObserver(c=>{for(const E of c)if(E.type==="childList")for(const f of E.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&A(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const E={};return c.integrity&&(E.integrity=c.integrity),c.referrerPolicy&&(E.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?E.credentials="include":c.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function A(c){if(c.ep)return;c.ep=!0;const E=s(c);fetch(c.href,E)}})();var yi={exports:{}},Ze={},Bi={exports:{}},a0={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo;function pA(){if(eo)return a0;eo=1;var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),y=Symbol.iterator;function N(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,U={};function H(M,v,Y){this.props=M,this.context=v,this.refs=U,this.updater=Y||G}H.prototype.isReactComponent={},H.prototype.setState=function(M,v){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,v,"setState")},H.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function d0(){}d0.prototype=H.prototype;function o0(M,v,Y){this.props=M,this.context=v,this.refs=U,this.updater=Y||G}var e0=o0.prototype=new d0;e0.constructor=o0,J(e0,H.prototype),e0.isPureReactComponent=!0;var $=Array.isArray,u0=Object.prototype.hasOwnProperty,q={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function A0(M,v,Y){var j,X={},r0=null,c0=null;if(v!=null)for(j in v.ref!==void 0&&(c0=v.ref),v.key!==void 0&&(r0=""+v.key),v)u0.call(v,j)&&!n0.hasOwnProperty(j)&&(X[j]=v[j]);var l0=arguments.length-2;if(l0===1)X.children=Y;else if(1<l0){for(var W0=Array(l0),X0=0;X0<l0;X0++)W0[X0]=arguments[X0+2];X.children=W0}if(M&&M.defaultProps)for(j in l0=M.defaultProps,l0)X[j]===void 0&&(X[j]=l0[j]);return{$$typeof:r,type:M,key:r0,ref:c0,props:X,_owner:q.current}}function B0(M,v){return{$$typeof:r,type:M.type,key:v,ref:M.ref,props:M.props,_owner:M._owner}}function N0(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function C0(M){var v={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Y){return v[Y]})}var F=/\/+/g;function E0(M,v){return typeof M=="object"&&M!==null&&M.key!=null?C0(""+M.key):v.toString(36)}function p0(M,v,Y,j,X){var r0=typeof M;(r0==="undefined"||r0==="boolean")&&(M=null);var c0=!1;if(M===null)c0=!0;else switch(r0){case"string":case"number":c0=!0;break;case"object":switch(M.$$typeof){case r:case t:c0=!0}}if(c0)return c0=M,X=X(c0),M=j===""?"."+E0(c0,0):j,$(X)?(Y="",M!=null&&(Y=M.replace(F,"$&/")+"/"),p0(X,v,Y,"",function(X0){return X0})):X!=null&&(N0(X)&&(X=B0(X,Y+(!X.key||c0&&c0.key===X.key?"":(""+X.key).replace(F,"$&/")+"/")+M)),v.push(X)),1;if(c0=0,j=j===""?".":j+":",$(M))for(var l0=0;l0<M.length;l0++){r0=M[l0];var W0=j+E0(r0,l0);c0+=p0(r0,v,Y,W0,X)}else if(W0=N(M),typeof W0=="function")for(M=W0.call(M),l0=0;!(r0=M.next()).done;)r0=r0.value,W0=j+E0(r0,l0++),c0+=p0(r0,v,Y,W0,X);else if(r0==="object")throw v=String(M),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return c0}function O0(M,v,Y){if(M==null)return M;var j=[],X=0;return p0(M,j,"","",function(r0){return v.call(Y,r0,X++)}),j}function v0(M){if(M._status===-1){var v=M._result;v=v(),v.then(function(Y){(M._status===0||M._status===-1)&&(M._status=1,M._result=Y)},function(Y){(M._status===0||M._status===-1)&&(M._status=2,M._result=Y)}),M._status===-1&&(M._status=0,M._result=v)}if(M._status===1)return M._result.default;throw M._result}var i0={current:null},w={transition:null},x={ReactCurrentDispatcher:i0,ReactCurrentBatchConfig:w,ReactCurrentOwner:q};function P(){throw Error("act(...) is not supported in production builds of React.")}return a0.Children={map:O0,forEach:function(M,v,Y){O0(M,function(){v.apply(this,arguments)},Y)},count:function(M){var v=0;return O0(M,function(){v++}),v},toArray:function(M){return O0(M,function(v){return v})||[]},only:function(M){if(!N0(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},a0.Component=H,a0.Fragment=s,a0.Profiler=c,a0.PureComponent=o0,a0.StrictMode=A,a0.Suspense=p,a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,a0.act=P,a0.cloneElement=function(M,v,Y){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var j=J({},M.props),X=M.key,r0=M.ref,c0=M._owner;if(v!=null){if(v.ref!==void 0&&(r0=v.ref,c0=q.current),v.key!==void 0&&(X=""+v.key),M.type&&M.type.defaultProps)var l0=M.type.defaultProps;for(W0 in v)u0.call(v,W0)&&!n0.hasOwnProperty(W0)&&(j[W0]=v[W0]===void 0&&l0!==void 0?l0[W0]:v[W0])}var W0=arguments.length-2;if(W0===1)j.children=Y;else if(1<W0){l0=Array(W0);for(var X0=0;X0<W0;X0++)l0[X0]=arguments[X0+2];j.children=l0}return{$$typeof:r,type:M.type,key:X,ref:r0,props:j,_owner:c0}},a0.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:E,_context:M},M.Consumer=M},a0.createElement=A0,a0.createFactory=function(M){var v=A0.bind(null,M);return v.type=M,v},a0.createRef=function(){return{current:null}},a0.forwardRef=function(M){return{$$typeof:d,render:M}},a0.isValidElement=N0,a0.lazy=function(M){return{$$typeof:W,_payload:{_status:-1,_result:M},_init:v0}},a0.memo=function(M,v){return{$$typeof:h,type:M,compare:v===void 0?null:v}},a0.startTransition=function(M){var v=w.transition;w.transition={};try{M()}finally{w.transition=v}},a0.unstable_act=P,a0.useCallback=function(M,v){return i0.current.useCallback(M,v)},a0.useContext=function(M){return i0.current.useContext(M)},a0.useDebugValue=function(){},a0.useDeferredValue=function(M){return i0.current.useDeferredValue(M)},a0.useEffect=function(M,v){return i0.current.useEffect(M,v)},a0.useId=function(){return i0.current.useId()},a0.useImperativeHandle=function(M,v,Y){return i0.current.useImperativeHandle(M,v,Y)},a0.useInsertionEffect=function(M,v){return i0.current.useInsertionEffect(M,v)},a0.useLayoutEffect=function(M,v){return i0.current.useLayoutEffect(M,v)},a0.useMemo=function(M,v){return i0.current.useMemo(M,v)},a0.useReducer=function(M,v,Y){return i0.current.useReducer(M,v,Y)},a0.useRef=function(M){return i0.current.useRef(M)},a0.useState=function(M){return i0.current.useState(M)},a0.useSyncExternalStore=function(M,v,Y){return i0.current.useSyncExternalStore(M,v,Y)},a0.useTransition=function(){return i0.current.useTransition()},a0.version="18.3.1",a0}var no;function ji(){return no||(no=1,Bi.exports=pA()),Bi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro;function mA(){if(ro)return Ze;ro=1;var r=ji(),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,h){var W,y={},N=null,G=null;h!==void 0&&(N=""+h),p.key!==void 0&&(N=""+p.key),p.ref!==void 0&&(G=p.ref);for(W in p)A.call(p,W)&&!E.hasOwnProperty(W)&&(y[W]=p[W]);if(d&&d.defaultProps)for(W in p=d.defaultProps,p)y[W]===void 0&&(y[W]=p[W]);return{$$typeof:t,type:d,key:N,ref:G,props:y,_owner:c.current}}return Ze.Fragment=s,Ze.jsx=f,Ze.jsxs=f,Ze}var io;function hA(){return io||(io=1,yi.exports=mA()),yi.exports}var _=hA(),t2={},wi={exports:{}},$0={},Gi={exports:{}},vi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to;function SA(){return to||(to=1,(function(r){function t(w,x){var P=w.length;w.push(x);a:for(;0<P;){var M=P-1>>>1,v=w[M];if(0<c(v,x))w[M]=x,w[P]=v,P=M;else break a}}function s(w){return w.length===0?null:w[0]}function A(w){if(w.length===0)return null;var x=w[0],P=w.pop();if(P!==x){w[0]=P;a:for(var M=0,v=w.length,Y=v>>>1;M<Y;){var j=2*(M+1)-1,X=w[j],r0=j+1,c0=w[r0];if(0>c(X,P))r0<v&&0>c(c0,X)?(w[M]=c0,w[r0]=P,M=r0):(w[M]=X,w[j]=P,M=j);else if(r0<v&&0>c(c0,P))w[M]=c0,w[r0]=P,M=r0;else break a}}return x}function c(w,x){var P=w.sortIndex-x.sortIndex;return P!==0?P:w.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;r.unstable_now=function(){return E.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],h=[],W=1,y=null,N=3,G=!1,J=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,d0=typeof clearTimeout=="function"?clearTimeout:null,o0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function e0(w){for(var x=s(h);x!==null;){if(x.callback===null)A(h);else if(x.startTime<=w)A(h),x.sortIndex=x.expirationTime,t(p,x);else break;x=s(h)}}function $(w){if(U=!1,e0(w),!J)if(s(p)!==null)J=!0,v0(u0);else{var x=s(h);x!==null&&i0($,x.startTime-w)}}function u0(w,x){J=!1,U&&(U=!1,d0(A0),A0=-1),G=!0;var P=N;try{for(e0(x),y=s(p);y!==null&&(!(y.expirationTime>x)||w&&!C0());){var M=y.callback;if(typeof M=="function"){y.callback=null,N=y.priorityLevel;var v=M(y.expirationTime<=x);x=r.unstable_now(),typeof v=="function"?y.callback=v:y===s(p)&&A(p),e0(x)}else A(p);y=s(p)}if(y!==null)var Y=!0;else{var j=s(h);j!==null&&i0($,j.startTime-x),Y=!1}return Y}finally{y=null,N=P,G=!1}}var q=!1,n0=null,A0=-1,B0=5,N0=-1;function C0(){return!(r.unstable_now()-N0<B0)}function F(){if(n0!==null){var w=r.unstable_now();N0=w;var x=!0;try{x=n0(!0,w)}finally{x?E0():(q=!1,n0=null)}}else q=!1}var E0;if(typeof o0=="function")E0=function(){o0(F)};else if(typeof MessageChannel<"u"){var p0=new MessageChannel,O0=p0.port2;p0.port1.onmessage=F,E0=function(){O0.postMessage(null)}}else E0=function(){H(F,0)};function v0(w){n0=w,q||(q=!0,E0())}function i0(w,x){A0=H(function(){w(r.unstable_now())},x)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_continueExecution=function(){J||G||(J=!0,v0(u0))},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B0=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return s(p)},r.unstable_next=function(w){switch(N){case 1:case 2:case 3:var x=3;break;default:x=N}var P=N;N=x;try{return w()}finally{N=P}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(w,x){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var P=N;N=w;try{return x()}finally{N=P}},r.unstable_scheduleCallback=function(w,x,P){var M=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,w){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=P+v,w={id:W++,callback:x,priorityLevel:w,startTime:P,expirationTime:v,sortIndex:-1},P>M?(w.sortIndex=P,t(h,w),s(p)===null&&w===s(h)&&(U?(d0(A0),A0=-1):U=!0,i0($,P-M))):(w.sortIndex=v,t(p,w),J||G||(J=!0,v0(u0))),w},r.unstable_shouldYield=C0,r.unstable_wrapCallback=function(w){var x=N;return function(){var P=N;N=x;try{return w.apply(this,arguments)}finally{N=P}}}})(vi)),vi}var so;function CA(){return so||(so=1,Gi.exports=SA()),Gi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo;function WA(){if(oo)return $0;oo=1;var r=ji(),t=CA();function s(a){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+a,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,c={};function E(a,e){f(a,e),f(a+"Capture",e)}function f(a,e){for(c[a]=e,a=0;a<e.length;a++)A.add(e[a])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},y={};function N(a){return p.call(y,a)?!0:p.call(W,a)?!1:h.test(a)?y[a]=!0:(W[a]=!0,!1)}function G(a,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function J(a,e,n,i){if(e===null||typeof e>"u"||G(a,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function U(a,e,n,i,o,u,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=a,this.type=e,this.sanitizeURL=u,this.removeEmptyString=l}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){H[a]=new U(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var e=a[0];H[e]=new U(e,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){H[a]=new U(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){H[a]=new U(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){H[a]=new U(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){H[a]=new U(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){H[a]=new U(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){H[a]=new U(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){H[a]=new U(a,5,!1,a.toLowerCase(),null,!1,!1)});var d0=/[\-:]([a-z])/g;function o0(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var e=a.replace(d0,o0);H[e]=new U(e,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var e=a.replace(d0,o0);H[e]=new U(e,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var e=a.replace(d0,o0);H[e]=new U(e,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){H[a]=new U(a,1,!1,a.toLowerCase(),null,!1,!1)}),H.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){H[a]=new U(a,1,!1,a.toLowerCase(),null,!0,!0)});function e0(a,e,n,i){var o=H.hasOwnProperty(e)?H[e]:null;(o!==null?o.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J(e,n,o,i)&&(n=null),i||o===null?N(e)&&(n===null?a.removeAttribute(e):a.setAttribute(e,""+n)):o.mustUseProperty?a[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,i=o.attributeNamespace,n===null?a.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?a.setAttributeNS(i,e,n):a.setAttribute(e,n))))}var $=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u0=Symbol.for("react.element"),q=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),p0=Symbol.for("react.suspense_list"),O0=Symbol.for("react.memo"),v0=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),w=Symbol.iterator;function x(a){return a===null||typeof a!="object"?null:(a=w&&a[w]||a["@@iterator"],typeof a=="function"?a:null)}var P=Object.assign,M;function v(a){if(M===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);M=e&&e[1]||""}return`
`+M+a}var Y=!1;function j(a,e){if(!a||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(B){var i=B}Reflect.construct(a,[],e)}else{try{e.call()}catch(B){i=B}a.call(e.prototype)}else{try{throw Error()}catch(B){i=B}a()}}catch(B){if(B&&i&&typeof B.stack=="string"){for(var o=B.stack.split(`
`),u=i.stack.split(`
`),l=o.length-1,m=u.length-1;1<=l&&0<=m&&o[l]!==u[m];)m--;for(;1<=l&&0<=m;l--,m--)if(o[l]!==u[m]){if(l!==1||m!==1)do if(l--,m--,0>m||o[l]!==u[m]){var S=`
`+o[l].replace(" at new "," at ");return a.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",a.displayName)),S}while(1<=l&&0<=m);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(a=a?a.displayName||a.name:"")?v(a):""}function X(a){switch(a.tag){case 5:return v(a.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return a=j(a.type,!1),a;case 11:return a=j(a.type.render,!1),a;case 1:return a=j(a.type,!0),a;default:return""}}function r0(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case n0:return"Fragment";case q:return"Portal";case B0:return"Profiler";case A0:return"StrictMode";case E0:return"Suspense";case p0:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case C0:return(a.displayName||"Context")+".Consumer";case N0:return(a._context.displayName||"Context")+".Provider";case F:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case O0:return e=a.displayName||null,e!==null?e:r0(a.type)||"Memo";case v0:e=a._payload,a=a._init;try{return r0(a(e))}catch{}}return null}function c0(a){var e=a.type;switch(a.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=e.render,a=a.displayName||a.name||"",e.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return r0(e);case 8:return e===A0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function l0(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function W0(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X0(a){var e=W0(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,e),i=""+a[e];if(!a.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,u=n.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return o.call(this)},set:function(l){i=""+l,u.call(this,l)}}),Object.defineProperty(a,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function Qe(a){a._valueTracker||(a._valueTracker=X0(a))}function o9(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return a&&(i=W0(a)?a.checked?"true":"false":a.value),a=i,a!==n?(e.setValue(a),!0):!1}function Je(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function L2(a,e){var n=e.checked;return P({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??a._wrapperState.initialChecked})}function u9(a,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=l0(e.value!=null?e.value:n),a._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A9(a,e){e=e.checked,e!=null&&e0(a,"checked",e,!1)}function I2(a,e){A9(a,e);var n=l0(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+n):a.value!==""+n&&(a.value=""+n);else if(i==="submit"||i==="reset"){a.removeAttribute("value");return}e.hasOwnProperty("value")?P2(a,e.type,n):e.hasOwnProperty("defaultValue")&&P2(a,e.type,l0(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(a.defaultChecked=!!e.defaultChecked)}function c9(a,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+a._wrapperState.initialValue,n||e===a.value||(a.value=e),a.defaultValue=e}n=a.name,n!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,n!==""&&(a.name=n)}function P2(a,e,n){(e!=="number"||Je(a.ownerDocument)!==a)&&(n==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+n&&(a.defaultValue=""+n))}var q1=Array.isArray;function M1(a,e,n,i){if(a=a.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<a.length;n++)o=e.hasOwnProperty("$"+a[n].value),a[n].selected!==o&&(a[n].selected=o),o&&i&&(a[n].defaultSelected=!0)}else{for(n=""+l0(n),e=null,o=0;o<a.length;o++){if(a[o].value===n){a[o].selected=!0,i&&(a[o].defaultSelected=!0);return}e!==null||a[o].disabled||(e=a[o])}e!==null&&(e.selected=!0)}}function R2(a,e){if(e.dangerouslySetInnerHTML!=null)throw Error(s(91));return P({},e,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function l9(a,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(s(92));if(q1(n)){if(1<n.length)throw Error(s(93));n=n[0]}e=n}e==null&&(e=""),n=e}a._wrapperState={initialValue:l0(n)}}function f9(a,e){var n=l0(e.value),i=l0(e.defaultValue);n!=null&&(n=""+n,n!==a.value&&(a.value=n),e.defaultValue==null&&a.defaultValue!==n&&(a.defaultValue=n)),i!=null&&(a.defaultValue=""+i)}function E9(a){var e=a.textContent;e===a._wrapperState.initialValue&&e!==""&&e!==null&&(a.value=e)}function d9(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function x2(a,e){return a==null||a==="http://www.w3.org/1999/xhtml"?d9(e):a==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var je,p9=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,o){MSApp.execUnsafeLocalFunction(function(){return a(e,n,i,o)})}:a})(function(a,e){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=e;else{for(je=je||document.createElement("div"),je.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=je.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;e.firstChild;)a.appendChild(e.firstChild)}});function X1(a,e){if(e){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=e;return}}a.textContent=e}var ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cu=["Webkit","ms","Moz","O"];Object.keys(ae).forEach(function(a){Cu.forEach(function(e){e=e+a.charAt(0).toUpperCase()+a.substring(1),ae[e]=ae[a]})});function m9(a,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ae.hasOwnProperty(a)&&ae[a]?(""+e).trim():e+"px"}function h9(a,e){a=a.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=m9(n,e[n],i);n==="float"&&(n="cssFloat"),i?a.setProperty(n,o):a[n]=o}}var Wu=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Z2(a,e){if(e){if(Wu[a]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(s(137,a));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(s(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(s(61))}if(e.style!=null&&typeof e.style!="object")throw Error(s(62))}}function K2(a,e){if(a.indexOf("-")===-1)return typeof e.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D2=null;function k2(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var U2=null,b1=null,g1=null;function S9(a){if(a=be(a)){if(typeof U2!="function")throw Error(s(280));var e=a.stateNode;e&&(e=Wn(e),U2(a.stateNode,a.type,e))}}function C9(a){b1?g1?g1.push(a):g1=[a]:b1=a}function W9(){if(b1){var a=b1,e=g1;if(g1=b1=null,S9(a),e)for(a=0;a<e.length;a++)S9(e[a])}}function M9(a,e){return a(e)}function b9(){}var _2=!1;function g9(a,e,n){if(_2)return a(e,n);_2=!0;try{return M9(a,e,n)}finally{_2=!1,(b1!==null||g1!==null)&&(b9(),W9())}}function ee(a,e){var n=a.stateNode;if(n===null)return null;var i=Wn(n);if(i===null)return null;n=i[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(a=a.type,i=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!i;break a;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var F2=!1;if(d)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){F2=!0}}),window.addEventListener("test",ne,ne),window.removeEventListener("test",ne,ne)}catch{F2=!1}function Mu(a,e,n,i,o,u,l,m,S){var B=Array.prototype.slice.call(arguments,3);try{e.apply(n,B)}catch(O){this.onError(O)}}var re=!1,$e=null,qe=!1,H2=null,bu={onError:function(a){re=!0,$e=a}};function gu(a,e,n,i,o,u,l,m,S){re=!1,$e=null,Mu.apply(bu,arguments)}function Nu(a,e,n,i,o,u,l,m,S){if(gu.apply(this,arguments),re){if(re){var B=$e;re=!1,$e=null}else throw Error(s(198));qe||(qe=!0,H2=B)}}function r1(a){var e=a,n=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(n=e.return),a=e.return;while(a)}return e.tag===3?n:null}function N9(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function y9(a){if(r1(a)!==a)throw Error(s(188))}function yu(a){var e=a.alternate;if(!e){if(e=r1(a),e===null)throw Error(s(188));return e!==a?null:a}for(var n=a,i=e;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return y9(o),a;if(u===i)return y9(o),e;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=o,i=u;else{for(var l=!1,m=o.child;m;){if(m===n){l=!0,n=o,i=u;break}if(m===i){l=!0,i=o,n=u;break}m=m.sibling}if(!l){for(m=u.child;m;){if(m===n){l=!0,n=u,i=o;break}if(m===i){l=!0,i=u,n=o;break}m=m.sibling}if(!l)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?a:e}function B9(a){return a=yu(a),a!==null?w9(a):null}function w9(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var e=w9(a);if(e!==null)return e;a=a.sibling}return null}var G9=t.unstable_scheduleCallback,v9=t.unstable_cancelCallback,Bu=t.unstable_shouldYield,wu=t.unstable_requestPaint,w0=t.unstable_now,Gu=t.unstable_getCurrentPriorityLevel,z2=t.unstable_ImmediatePriority,T9=t.unstable_UserBlockingPriority,Xe=t.unstable_NormalPriority,vu=t.unstable_LowPriority,O9=t.unstable_IdlePriority,an=null,Ma=null;function Tu(a){if(Ma&&typeof Ma.onCommitFiberRoot=="function")try{Ma.onCommitFiberRoot(an,a,void 0,(a.current.flags&128)===128)}catch{}}var la=Math.clz32?Math.clz32:Iu,Ou=Math.log,Lu=Math.LN2;function Iu(a){return a>>>=0,a===0?32:31-(Ou(a)/Lu|0)|0}var en=64,nn=4194304;function ie(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function rn(a,e){var n=a.pendingLanes;if(n===0)return 0;var i=0,o=a.suspendedLanes,u=a.pingedLanes,l=n&268435455;if(l!==0){var m=l&~o;m!==0?i=ie(m):(u&=l,u!==0&&(i=ie(u)))}else l=n&~o,l!==0?i=ie(l):u!==0&&(i=ie(u));if(i===0)return 0;if(e!==0&&e!==i&&(e&o)===0&&(o=i&-i,u=e&-e,o>=u||o===16&&(u&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=a.entangledLanes,e!==0)for(a=a.entanglements,e&=i;0<e;)n=31-la(e),o=1<<n,i|=a[n],e&=~o;return i}function Pu(a,e){switch(a){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(a,e){for(var n=a.suspendedLanes,i=a.pingedLanes,o=a.expirationTimes,u=a.pendingLanes;0<u;){var l=31-la(u),m=1<<l,S=o[l];S===-1?((m&n)===0||(m&i)!==0)&&(o[l]=Pu(m,e)):S<=e&&(a.expiredLanes|=m),u&=~m}}function V2(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function L9(){var a=en;return en<<=1,(en&4194240)===0&&(en=64),a}function Y2(a){for(var e=[],n=0;31>n;n++)e.push(a);return e}function te(a,e,n){a.pendingLanes|=e,e!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,e=31-la(e),a[e]=n}function xu(a,e){var n=a.pendingLanes&~e;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=e,a.mutableReadLanes&=e,a.entangledLanes&=e,e=a.entanglements;var i=a.eventTimes;for(a=a.expirationTimes;0<n;){var o=31-la(n),u=1<<o;e[o]=0,i[o]=-1,a[o]=-1,n&=~u}}function Q2(a,e){var n=a.entangledLanes|=e;for(a=a.entanglements;n;){var i=31-la(n),o=1<<i;o&e|a[i]&e&&(a[i]|=e),n&=~o}}var f0=0;function I9(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var P9,J2,R9,x9,Z9,j2=!1,tn=[],Ka=null,Da=null,ka=null,se=new Map,oe=new Map,Ua=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K9(a,e){switch(a){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":se.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oe.delete(e.pointerId)}}function ue(a,e,n,i,o,u){return a===null||a.nativeEvent!==u?(a={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[o]},e!==null&&(e=be(e),e!==null&&J2(e)),a):(a.eventSystemFlags|=i,e=a.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),a)}function Ku(a,e,n,i,o){switch(e){case"focusin":return Ka=ue(Ka,a,e,n,i,o),!0;case"dragenter":return Da=ue(Da,a,e,n,i,o),!0;case"mouseover":return ka=ue(ka,a,e,n,i,o),!0;case"pointerover":var u=o.pointerId;return se.set(u,ue(se.get(u)||null,a,e,n,i,o)),!0;case"gotpointercapture":return u=o.pointerId,oe.set(u,ue(oe.get(u)||null,a,e,n,i,o)),!0}return!1}function D9(a){var e=i1(a.target);if(e!==null){var n=r1(e);if(n!==null){if(e=n.tag,e===13){if(e=N9(n),e!==null){a.blockedOn=e,Z9(a.priority,function(){R9(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function sn(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var n=q2(a.domEventName,a.eventSystemFlags,e[0],a.nativeEvent);if(n===null){n=a.nativeEvent;var i=new n.constructor(n.type,n);D2=i,n.target.dispatchEvent(i),D2=null}else return e=be(n),e!==null&&J2(e),a.blockedOn=n,!1;e.shift()}return!0}function k9(a,e,n){sn(a)&&n.delete(e)}function Du(){j2=!1,Ka!==null&&sn(Ka)&&(Ka=null),Da!==null&&sn(Da)&&(Da=null),ka!==null&&sn(ka)&&(ka=null),se.forEach(k9),oe.forEach(k9)}function Ae(a,e){a.blockedOn===e&&(a.blockedOn=null,j2||(j2=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Du)))}function ce(a){function e(o){return Ae(o,a)}if(0<tn.length){Ae(tn[0],a);for(var n=1;n<tn.length;n++){var i=tn[n];i.blockedOn===a&&(i.blockedOn=null)}}for(Ka!==null&&Ae(Ka,a),Da!==null&&Ae(Da,a),ka!==null&&Ae(ka,a),se.forEach(e),oe.forEach(e),n=0;n<Ua.length;n++)i=Ua[n],i.blockedOn===a&&(i.blockedOn=null);for(;0<Ua.length&&(n=Ua[0],n.blockedOn===null);)D9(n),n.blockedOn===null&&Ua.shift()}var N1=$.ReactCurrentBatchConfig,on=!0;function ku(a,e,n,i){var o=f0,u=N1.transition;N1.transition=null;try{f0=1,$2(a,e,n,i)}finally{f0=o,N1.transition=u}}function Uu(a,e,n,i){var o=f0,u=N1.transition;N1.transition=null;try{f0=4,$2(a,e,n,i)}finally{f0=o,N1.transition=u}}function $2(a,e,n,i){if(on){var o=q2(a,e,n,i);if(o===null)pr(a,e,i,un,n),K9(a,i);else if(Ku(o,a,e,n,i))i.stopPropagation();else if(K9(a,i),e&4&&-1<Zu.indexOf(a)){for(;o!==null;){var u=be(o);if(u!==null&&P9(u),u=q2(a,e,n,i),u===null&&pr(a,e,i,un,n),u===o)break;o=u}o!==null&&i.stopPropagation()}else pr(a,e,i,null,n)}}var un=null;function q2(a,e,n,i){if(un=null,a=k2(i),a=i1(a),a!==null)if(e=r1(a),e===null)a=null;else if(n=e.tag,n===13){if(a=N9(e),a!==null)return a;a=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null);return un=a,null}function U9(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case z2:return 1;case T9:return 4;case Xe:case vu:return 16;case O9:return 536870912;default:return 16}default:return 16}}var _a=null,X2=null,An=null;function _9(){if(An)return An;var a,e=X2,n=e.length,i,o="value"in _a?_a.value:_a.textContent,u=o.length;for(a=0;a<n&&e[a]===o[a];a++);var l=n-a;for(i=1;i<=l&&e[n-i]===o[u-i];i++);return An=o.slice(a,1<i?1-i:void 0)}function cn(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function ln(){return!0}function F9(){return!1}function aa(a){function e(n,i,o,u,l){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=u,this.target=l,this.currentTarget=null;for(var m in a)a.hasOwnProperty(m)&&(n=a[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ln:F9,this.isPropagationStopped=F9,this}return P(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ln)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ln)},persist:function(){},isPersistent:ln}),e}var y1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ar=aa(y1),le=P({},y1,{view:0,detail:0}),_u=aa(le),er,nr,fe,fn=P({},le,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==fe&&(fe&&a.type==="mousemove"?(er=a.screenX-fe.screenX,nr=a.screenY-fe.screenY):nr=er=0,fe=a),er)},movementY:function(a){return"movementY"in a?a.movementY:nr}}),H9=aa(fn),Fu=P({},fn,{dataTransfer:0}),Hu=aa(Fu),zu=P({},le,{relatedTarget:0}),rr=aa(zu),Vu=P({},y1,{animationName:0,elapsedTime:0,pseudoElement:0}),Yu=aa(Vu),Qu=P({},y1,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Ju=aa(Qu),ju=P({},y1,{data:0}),z9=aa(ju),$u={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a8(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=Xu[a])?!!e[a]:!1}function ir(){return a8}var e8=P({},le,{key:function(a){if(a.key){var e=$u[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=cn(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?qu[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(a){return a.type==="keypress"?cn(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?cn(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),n8=aa(e8),r8=P({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V9=aa(r8),i8=P({},le,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),t8=aa(i8),s8=P({},y1,{propertyName:0,elapsedTime:0,pseudoElement:0}),o8=aa(s8),u8=P({},fn,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),A8=aa(u8),c8=[9,13,27,32],tr=d&&"CompositionEvent"in window,Ee=null;d&&"documentMode"in document&&(Ee=document.documentMode);var l8=d&&"TextEvent"in window&&!Ee,Y9=d&&(!tr||Ee&&8<Ee&&11>=Ee),Q9=" ",J9=!1;function j9(a,e){switch(a){case"keyup":return c8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $9(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var B1=!1;function f8(a,e){switch(a){case"compositionend":return $9(e);case"keypress":return e.which!==32?null:(J9=!0,Q9);case"textInput":return a=e.data,a===Q9&&J9?null:a;default:return null}}function E8(a,e){if(B1)return a==="compositionend"||!tr&&j9(a,e)?(a=_9(),An=X2=_a=null,B1=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y9&&e.locale!=="ko"?null:e.data;default:return null}}var d8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q9(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!d8[a.type]:e==="textarea"}function X9(a,e,n,i){C9(i),e=hn(e,"onChange"),0<e.length&&(n=new ar("onChange","change",null,n,i),a.push({event:n,listeners:e}))}var de=null,pe=null;function p8(a){ht(a,0)}function En(a){var e=O1(a);if(o9(e))return a}function m8(a,e){if(a==="change")return e}var at=!1;if(d){var sr;if(d){var or="oninput"in document;if(!or){var et=document.createElement("div");et.setAttribute("oninput","return;"),or=typeof et.oninput=="function"}sr=or}else sr=!1;at=sr&&(!document.documentMode||9<document.documentMode)}function nt(){de&&(de.detachEvent("onpropertychange",rt),pe=de=null)}function rt(a){if(a.propertyName==="value"&&En(pe)){var e=[];X9(e,pe,a,k2(a)),g9(p8,e)}}function h8(a,e,n){a==="focusin"?(nt(),de=e,pe=n,de.attachEvent("onpropertychange",rt)):a==="focusout"&&nt()}function S8(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return En(pe)}function C8(a,e){if(a==="click")return En(e)}function W8(a,e){if(a==="input"||a==="change")return En(e)}function M8(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var fa=typeof Object.is=="function"?Object.is:M8;function me(a,e){if(fa(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var n=Object.keys(a),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!p.call(e,o)||!fa(a[o],e[o]))return!1}return!0}function it(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function tt(a,e){var n=it(a);a=0;for(var i;n;){if(n.nodeType===3){if(i=a+n.textContent.length,a<=e&&i>=e)return{node:n,offset:e-a};a=i}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=it(n)}}function st(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?st(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function ot(){for(var a=window,e=Je();e instanceof a.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)a=e.contentWindow;else break;e=Je(a.document)}return e}function ur(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}function b8(a){var e=ot(),n=a.focusedElem,i=a.selectionRange;if(e!==n&&n&&n.ownerDocument&&st(n.ownerDocument.documentElement,n)){if(i!==null&&ur(n)){if(e=i.start,a=i.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var o=n.textContent.length,u=Math.min(i.start,o);i=i.end===void 0?u:Math.min(i.end,o),!a.extend&&u>i&&(o=i,i=u,u=o),o=tt(n,u);var l=tt(n,i);o&&l&&(a.rangeCount!==1||a.anchorNode!==o.node||a.anchorOffset!==o.offset||a.focusNode!==l.node||a.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),a.removeAllRanges(),u>i?(a.addRange(e),a.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var g8=d&&"documentMode"in document&&11>=document.documentMode,w1=null,Ar=null,he=null,cr=!1;function ut(a,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cr||w1==null||w1!==Je(i)||(i=w1,"selectionStart"in i&&ur(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),he&&me(he,i)||(he=i,i=hn(Ar,"onSelect"),0<i.length&&(e=new ar("onSelect","select",null,e,n),a.push({event:e,listeners:i}),e.target=w1)))}function dn(a,e){var n={};return n[a.toLowerCase()]=e.toLowerCase(),n["Webkit"+a]="webkit"+e,n["Moz"+a]="moz"+e,n}var G1={animationend:dn("Animation","AnimationEnd"),animationiteration:dn("Animation","AnimationIteration"),animationstart:dn("Animation","AnimationStart"),transitionend:dn("Transition","TransitionEnd")},lr={},At={};d&&(At=document.createElement("div").style,"AnimationEvent"in window||(delete G1.animationend.animation,delete G1.animationiteration.animation,delete G1.animationstart.animation),"TransitionEvent"in window||delete G1.transitionend.transition);function pn(a){if(lr[a])return lr[a];if(!G1[a])return a;var e=G1[a],n;for(n in e)if(e.hasOwnProperty(n)&&n in At)return lr[a]=e[n];return a}var ct=pn("animationend"),lt=pn("animationiteration"),ft=pn("animationstart"),Et=pn("transitionend"),dt=new Map,pt="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fa(a,e){dt.set(a,e),E(e,[a])}for(var fr=0;fr<pt.length;fr++){var Er=pt[fr],N8=Er.toLowerCase(),y8=Er[0].toUpperCase()+Er.slice(1);Fa(N8,"on"+y8)}Fa(ct,"onAnimationEnd"),Fa(lt,"onAnimationIteration"),Fa(ft,"onAnimationStart"),Fa("dblclick","onDoubleClick"),Fa("focusin","onFocus"),Fa("focusout","onBlur"),Fa(Et,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Se="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Se));function mt(a,e,n){var i=a.type||"unknown-event";a.currentTarget=n,Nu(i,e,void 0,a),a.currentTarget=null}function ht(a,e){e=(e&4)!==0;for(var n=0;n<a.length;n++){var i=a[n],o=i.event;i=i.listeners;a:{var u=void 0;if(e)for(var l=i.length-1;0<=l;l--){var m=i[l],S=m.instance,B=m.currentTarget;if(m=m.listener,S!==u&&o.isPropagationStopped())break a;mt(o,m,B),u=S}else for(l=0;l<i.length;l++){if(m=i[l],S=m.instance,B=m.currentTarget,m=m.listener,S!==u&&o.isPropagationStopped())break a;mt(o,m,B),u=S}}}if(qe)throw a=H2,qe=!1,H2=null,a}function h0(a,e){var n=e[Mr];n===void 0&&(n=e[Mr]=new Set);var i=a+"__bubble";n.has(i)||(St(e,a,2,!1),n.add(i))}function dr(a,e,n){var i=0;e&&(i|=4),St(n,a,i,e)}var mn="_reactListening"+Math.random().toString(36).slice(2);function Ce(a){if(!a[mn]){a[mn]=!0,A.forEach(function(n){n!=="selectionchange"&&(B8.has(n)||dr(n,!1,a),dr(n,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[mn]||(e[mn]=!0,dr("selectionchange",!1,e))}}function St(a,e,n,i){switch(U9(e)){case 1:var o=ku;break;case 4:o=Uu;break;default:o=$2}n=o.bind(null,e,n,a),o=void 0,!F2||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),i?o!==void 0?a.addEventListener(e,n,{capture:!0,passive:o}):a.addEventListener(e,n,!0):o!==void 0?a.addEventListener(e,n,{passive:o}):a.addEventListener(e,n,!1)}function pr(a,e,n,i,o){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)a:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var m=i.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(l===4)for(l=i.return;l!==null;){var S=l.tag;if((S===3||S===4)&&(S=l.stateNode.containerInfo,S===o||S.nodeType===8&&S.parentNode===o))return;l=l.return}for(;m!==null;){if(l=i1(m),l===null)return;if(S=l.tag,S===5||S===6){i=u=l;continue a}m=m.parentNode}}i=i.return}g9(function(){var B=u,O=k2(n),L=[];a:{var T=dt.get(a);if(T!==void 0){var R=ar,K=a;switch(a){case"keypress":if(cn(n)===0)break a;case"keydown":case"keyup":R=n8;break;case"focusin":K="focus",R=rr;break;case"focusout":K="blur",R=rr;break;case"beforeblur":case"afterblur":R=rr;break;case"click":if(n.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=H9;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=t8;break;case ct:case lt:case ft:R=Yu;break;case Et:R=o8;break;case"scroll":R=_u;break;case"wheel":R=A8;break;case"copy":case"cut":case"paste":R=Ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=V9}var D=(e&4)!==0,G0=!D&&a==="scroll",b=D?T!==null?T+"Capture":null:T;D=[];for(var C=B,g;C!==null;){g=C;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,b!==null&&(I=ee(C,b),I!=null&&D.push(We(C,I,g)))),G0)break;C=C.return}0<D.length&&(T=new R(T,K,null,n,O),L.push({event:T,listeners:D}))}}if((e&7)===0){a:{if(T=a==="mouseover"||a==="pointerover",R=a==="mouseout"||a==="pointerout",T&&n!==D2&&(K=n.relatedTarget||n.fromElement)&&(i1(K)||K[Ga]))break a;if((R||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,R?(K=n.relatedTarget||n.toElement,R=B,K=K?i1(K):null,K!==null&&(G0=r1(K),K!==G0||K.tag!==5&&K.tag!==6)&&(K=null)):(R=null,K=B),R!==K)){if(D=H9,I="onMouseLeave",b="onMouseEnter",C="mouse",(a==="pointerout"||a==="pointerover")&&(D=V9,I="onPointerLeave",b="onPointerEnter",C="pointer"),G0=R==null?T:O1(R),g=K==null?T:O1(K),T=new D(I,C+"leave",R,n,O),T.target=G0,T.relatedTarget=g,I=null,i1(O)===B&&(D=new D(b,C+"enter",K,n,O),D.target=g,D.relatedTarget=G0,I=D),G0=I,R&&K)e:{for(D=R,b=K,C=0,g=D;g;g=v1(g))C++;for(g=0,I=b;I;I=v1(I))g++;for(;0<C-g;)D=v1(D),C--;for(;0<g-C;)b=v1(b),g--;for(;C--;){if(D===b||b!==null&&D===b.alternate)break e;D=v1(D),b=v1(b)}D=null}else D=null;R!==null&&Ct(L,T,R,D,!1),K!==null&&G0!==null&&Ct(L,G0,K,D,!0)}}a:{if(T=B?O1(B):window,R=T.nodeName&&T.nodeName.toLowerCase(),R==="select"||R==="input"&&T.type==="file")var k=m8;else if(q9(T))if(at)k=W8;else{k=S8;var z=h8}else(R=T.nodeName)&&R.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(k=C8);if(k&&(k=k(a,B))){X9(L,k,n,O);break a}z&&z(a,T,B),a==="focusout"&&(z=T._wrapperState)&&z.controlled&&T.type==="number"&&P2(T,"number",T.value)}switch(z=B?O1(B):window,a){case"focusin":(q9(z)||z.contentEditable==="true")&&(w1=z,Ar=B,he=null);break;case"focusout":he=Ar=w1=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,ut(L,n,O);break;case"selectionchange":if(g8)break;case"keydown":case"keyup":ut(L,n,O)}var V;if(tr)a:{switch(a){case"compositionstart":var Q="onCompositionStart";break a;case"compositionend":Q="onCompositionEnd";break a;case"compositionupdate":Q="onCompositionUpdate";break a}Q=void 0}else B1?j9(a,n)&&(Q="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Y9&&n.locale!=="ko"&&(B1||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&B1&&(V=_9()):(_a=O,X2="value"in _a?_a.value:_a.textContent,B1=!0)),z=hn(B,Q),0<z.length&&(Q=new z9(Q,a,null,n,O),L.push({event:Q,listeners:z}),V?Q.data=V:(V=$9(n),V!==null&&(Q.data=V)))),(V=l8?f8(a,n):E8(a,n))&&(B=hn(B,"onBeforeInput"),0<B.length&&(O=new z9("onBeforeInput","beforeinput",null,n,O),L.push({event:O,listeners:B}),O.data=V))}ht(L,e)})}function We(a,e,n){return{instance:a,listener:e,currentTarget:n}}function hn(a,e){for(var n=e+"Capture",i=[];a!==null;){var o=a,u=o.stateNode;o.tag===5&&u!==null&&(o=u,u=ee(a,n),u!=null&&i.unshift(We(a,u,o)),u=ee(a,e),u!=null&&i.push(We(a,u,o))),a=a.return}return i}function v1(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function Ct(a,e,n,i,o){for(var u=e._reactName,l=[];n!==null&&n!==i;){var m=n,S=m.alternate,B=m.stateNode;if(S!==null&&S===i)break;m.tag===5&&B!==null&&(m=B,o?(S=ee(n,u),S!=null&&l.unshift(We(n,S,m))):o||(S=ee(n,u),S!=null&&l.push(We(n,S,m)))),n=n.return}l.length!==0&&a.push({event:e,listeners:l})}var w8=/\r\n?/g,G8=/\u0000|\uFFFD/g;function Wt(a){return(typeof a=="string"?a:""+a).replace(w8,`
`).replace(G8,"")}function Sn(a,e,n){if(e=Wt(e),Wt(a)!==e&&n)throw Error(s(425))}function Cn(){}var mr=null,hr=null;function Sr(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cr=typeof setTimeout=="function"?setTimeout:void 0,v8=typeof clearTimeout=="function"?clearTimeout:void 0,Mt=typeof Promise=="function"?Promise:void 0,T8=typeof queueMicrotask=="function"?queueMicrotask:typeof Mt<"u"?function(a){return Mt.resolve(null).then(a).catch(O8)}:Cr;function O8(a){setTimeout(function(){throw a})}function Wr(a,e){var n=e,i=0;do{var o=n.nextSibling;if(a.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){a.removeChild(o),ce(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);ce(e)}function Ha(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return a}function bt(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return a;e--}else n==="/$"&&e++}a=a.previousSibling}return null}var T1=Math.random().toString(36).slice(2),ba="__reactFiber$"+T1,Me="__reactProps$"+T1,Ga="__reactContainer$"+T1,Mr="__reactEvents$"+T1,L8="__reactListeners$"+T1,I8="__reactHandles$"+T1;function i1(a){var e=a[ba];if(e)return e;for(var n=a.parentNode;n;){if(e=n[Ga]||n[ba]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(a=bt(a);a!==null;){if(n=a[ba])return n;a=bt(a)}return e}a=n,n=a.parentNode}return null}function be(a){return a=a[ba]||a[Ga],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function O1(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(s(33))}function Wn(a){return a[Me]||null}var br=[],L1=-1;function za(a){return{current:a}}function S0(a){0>L1||(a.current=br[L1],br[L1]=null,L1--)}function m0(a,e){L1++,br[L1]=a.current,a.current=e}var Va={},D0=za(Va),V0=za(!1),t1=Va;function I1(a,e){var n=a.type.contextTypes;if(!n)return Va;var i=a.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var o={},u;for(u in n)o[u]=e[u];return i&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=o),o}function Y0(a){return a=a.childContextTypes,a!=null}function Mn(){S0(V0),S0(D0)}function gt(a,e,n){if(D0.current!==Va)throw Error(s(168));m0(D0,e),m0(V0,n)}function Nt(a,e,n){var i=a.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in e))throw Error(s(108,c0(a)||"Unknown",o));return P({},n,i)}function bn(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Va,t1=D0.current,m0(D0,a),m0(V0,V0.current),!0}function yt(a,e,n){var i=a.stateNode;if(!i)throw Error(s(169));n?(a=Nt(a,e,t1),i.__reactInternalMemoizedMergedChildContext=a,S0(V0),S0(D0),m0(D0,a)):S0(V0),m0(V0,n)}var va=null,gn=!1,gr=!1;function Bt(a){va===null?va=[a]:va.push(a)}function P8(a){gn=!0,Bt(a)}function Ya(){if(!gr&&va!==null){gr=!0;var a=0,e=f0;try{var n=va;for(f0=1;a<n.length;a++){var i=n[a];do i=i(!0);while(i!==null)}va=null,gn=!1}catch(o){throw va!==null&&(va=va.slice(a+1)),G9(z2,Ya),o}finally{f0=e,gr=!1}}return null}var P1=[],R1=0,Nn=null,yn=0,ta=[],sa=0,s1=null,Ta=1,Oa="";function o1(a,e){P1[R1++]=yn,P1[R1++]=Nn,Nn=a,yn=e}function wt(a,e,n){ta[sa++]=Ta,ta[sa++]=Oa,ta[sa++]=s1,s1=a;var i=Ta;a=Oa;var o=32-la(i)-1;i&=~(1<<o),n+=1;var u=32-la(e)+o;if(30<u){var l=o-o%5;u=(i&(1<<l)-1).toString(32),i>>=l,o-=l,Ta=1<<32-la(e)+o|n<<o|i,Oa=u+a}else Ta=1<<u|n<<o|i,Oa=a}function Nr(a){a.return!==null&&(o1(a,1),wt(a,1,0))}function yr(a){for(;a===Nn;)Nn=P1[--R1],P1[R1]=null,yn=P1[--R1],P1[R1]=null;for(;a===s1;)s1=ta[--sa],ta[sa]=null,Oa=ta[--sa],ta[sa]=null,Ta=ta[--sa],ta[sa]=null}var ea=null,na=null,M0=!1,Ea=null;function Gt(a,e){var n=ca(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=a,e=a.deletions,e===null?(a.deletions=[n],a.flags|=16):e.push(n)}function vt(a,e){switch(a.tag){case 5:var n=a.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(a.stateNode=e,ea=a,na=Ha(e.firstChild),!0):!1;case 6:return e=a.pendingProps===""||e.nodeType!==3?null:e,e!==null?(a.stateNode=e,ea=a,na=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=s1!==null?{id:Ta,overflow:Oa}:null,a.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ca(18,null,null,0),n.stateNode=e,n.return=a,a.child=n,ea=a,na=null,!0):!1;default:return!1}}function Br(a){return(a.mode&1)!==0&&(a.flags&128)===0}function wr(a){if(M0){var e=na;if(e){var n=e;if(!vt(a,e)){if(Br(a))throw Error(s(418));e=Ha(n.nextSibling);var i=ea;e&&vt(a,e)?Gt(i,n):(a.flags=a.flags&-4097|2,M0=!1,ea=a)}}else{if(Br(a))throw Error(s(418));a.flags=a.flags&-4097|2,M0=!1,ea=a}}}function Tt(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;ea=a}function Bn(a){if(a!==ea)return!1;if(!M0)return Tt(a),M0=!0,!1;var e;if((e=a.tag!==3)&&!(e=a.tag!==5)&&(e=a.type,e=e!=="head"&&e!=="body"&&!Sr(a.type,a.memoizedProps)),e&&(e=na)){if(Br(a))throw Ot(),Error(s(418));for(;e;)Gt(a,e),e=Ha(e.nextSibling)}if(Tt(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a:{for(a=a.nextSibling,e=0;a;){if(a.nodeType===8){var n=a.data;if(n==="/$"){if(e===0){na=Ha(a.nextSibling);break a}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}a=a.nextSibling}na=null}}else na=ea?Ha(a.stateNode.nextSibling):null;return!0}function Ot(){for(var a=na;a;)a=Ha(a.nextSibling)}function x1(){na=ea=null,M0=!1}function Gr(a){Ea===null?Ea=[a]:Ea.push(a)}var R8=$.ReactCurrentBatchConfig;function ge(a,e,n){if(a=n.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var i=n.stateNode}if(!i)throw Error(s(147,a));var o=i,u=""+a;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===u?e.ref:(e=function(l){var m=o.refs;l===null?delete m[u]:m[u]=l},e._stringRef=u,e)}if(typeof a!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,a))}return a}function wn(a,e){throw a=Object.prototype.toString.call(e),Error(s(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a))}function Lt(a){var e=a._init;return e(a._payload)}function It(a){function e(b,C){if(a){var g=b.deletions;g===null?(b.deletions=[C],b.flags|=16):g.push(C)}}function n(b,C){if(!a)return null;for(;C!==null;)e(b,C),C=C.sibling;return null}function i(b,C){for(b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function o(b,C){return b=e1(b,C),b.index=0,b.sibling=null,b}function u(b,C,g){return b.index=g,a?(g=b.alternate,g!==null?(g=g.index,g<C?(b.flags|=2,C):g):(b.flags|=2,C)):(b.flags|=1048576,C)}function l(b){return a&&b.alternate===null&&(b.flags|=2),b}function m(b,C,g,I){return C===null||C.tag!==6?(C=Ci(g,b.mode,I),C.return=b,C):(C=o(C,g),C.return=b,C)}function S(b,C,g,I){var k=g.type;return k===n0?O(b,C,g.props.children,I,g.key):C!==null&&(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===v0&&Lt(k)===C.type)?(I=o(C,g.props),I.ref=ge(b,C,g),I.return=b,I):(I=$n(g.type,g.key,g.props,null,b.mode,I),I.ref=ge(b,C,g),I.return=b,I)}function B(b,C,g,I){return C===null||C.tag!==4||C.stateNode.containerInfo!==g.containerInfo||C.stateNode.implementation!==g.implementation?(C=Wi(g,b.mode,I),C.return=b,C):(C=o(C,g.children||[]),C.return=b,C)}function O(b,C,g,I,k){return C===null||C.tag!==7?(C=p1(g,b.mode,I,k),C.return=b,C):(C=o(C,g),C.return=b,C)}function L(b,C,g){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Ci(""+C,b.mode,g),C.return=b,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case u0:return g=$n(C.type,C.key,C.props,null,b.mode,g),g.ref=ge(b,null,C),g.return=b,g;case q:return C=Wi(C,b.mode,g),C.return=b,C;case v0:var I=C._init;return L(b,I(C._payload),g)}if(q1(C)||x(C))return C=p1(C,b.mode,g,null),C.return=b,C;wn(b,C)}return null}function T(b,C,g,I){var k=C!==null?C.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:m(b,C,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case u0:return g.key===k?S(b,C,g,I):null;case q:return g.key===k?B(b,C,g,I):null;case v0:return k=g._init,T(b,C,k(g._payload),I)}if(q1(g)||x(g))return k!==null?null:O(b,C,g,I,null);wn(b,g)}return null}function R(b,C,g,I,k){if(typeof I=="string"&&I!==""||typeof I=="number")return b=b.get(g)||null,m(C,b,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case u0:return b=b.get(I.key===null?g:I.key)||null,S(C,b,I,k);case q:return b=b.get(I.key===null?g:I.key)||null,B(C,b,I,k);case v0:var z=I._init;return R(b,C,g,z(I._payload),k)}if(q1(I)||x(I))return b=b.get(g)||null,O(C,b,I,k,null);wn(C,I)}return null}function K(b,C,g,I){for(var k=null,z=null,V=C,Q=C=0,x0=null;V!==null&&Q<g.length;Q++){V.index>Q?(x0=V,V=null):x0=V.sibling;var s0=T(b,V,g[Q],I);if(s0===null){V===null&&(V=x0);break}a&&V&&s0.alternate===null&&e(b,V),C=u(s0,C,Q),z===null?k=s0:z.sibling=s0,z=s0,V=x0}if(Q===g.length)return n(b,V),M0&&o1(b,Q),k;if(V===null){for(;Q<g.length;Q++)V=L(b,g[Q],I),V!==null&&(C=u(V,C,Q),z===null?k=V:z.sibling=V,z=V);return M0&&o1(b,Q),k}for(V=i(b,V);Q<g.length;Q++)x0=R(V,b,Q,g[Q],I),x0!==null&&(a&&x0.alternate!==null&&V.delete(x0.key===null?Q:x0.key),C=u(x0,C,Q),z===null?k=x0:z.sibling=x0,z=x0);return a&&V.forEach(function(n1){return e(b,n1)}),M0&&o1(b,Q),k}function D(b,C,g,I){var k=x(g);if(typeof k!="function")throw Error(s(150));if(g=k.call(g),g==null)throw Error(s(151));for(var z=k=null,V=C,Q=C=0,x0=null,s0=g.next();V!==null&&!s0.done;Q++,s0=g.next()){V.index>Q?(x0=V,V=null):x0=V.sibling;var n1=T(b,V,s0.value,I);if(n1===null){V===null&&(V=x0);break}a&&V&&n1.alternate===null&&e(b,V),C=u(n1,C,Q),z===null?k=n1:z.sibling=n1,z=n1,V=x0}if(s0.done)return n(b,V),M0&&o1(b,Q),k;if(V===null){for(;!s0.done;Q++,s0=g.next())s0=L(b,s0.value,I),s0!==null&&(C=u(s0,C,Q),z===null?k=s0:z.sibling=s0,z=s0);return M0&&o1(b,Q),k}for(V=i(b,V);!s0.done;Q++,s0=g.next())s0=R(V,b,Q,s0.value,I),s0!==null&&(a&&s0.alternate!==null&&V.delete(s0.key===null?Q:s0.key),C=u(s0,C,Q),z===null?k=s0:z.sibling=s0,z=s0);return a&&V.forEach(function(dA){return e(b,dA)}),M0&&o1(b,Q),k}function G0(b,C,g,I){if(typeof g=="object"&&g!==null&&g.type===n0&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case u0:a:{for(var k=g.key,z=C;z!==null;){if(z.key===k){if(k=g.type,k===n0){if(z.tag===7){n(b,z.sibling),C=o(z,g.props.children),C.return=b,b=C;break a}}else if(z.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===v0&&Lt(k)===z.type){n(b,z.sibling),C=o(z,g.props),C.ref=ge(b,z,g),C.return=b,b=C;break a}n(b,z);break}else e(b,z);z=z.sibling}g.type===n0?(C=p1(g.props.children,b.mode,I,g.key),C.return=b,b=C):(I=$n(g.type,g.key,g.props,null,b.mode,I),I.ref=ge(b,C,g),I.return=b,b=I)}return l(b);case q:a:{for(z=g.key;C!==null;){if(C.key===z)if(C.tag===4&&C.stateNode.containerInfo===g.containerInfo&&C.stateNode.implementation===g.implementation){n(b,C.sibling),C=o(C,g.children||[]),C.return=b,b=C;break a}else{n(b,C);break}else e(b,C);C=C.sibling}C=Wi(g,b.mode,I),C.return=b,b=C}return l(b);case v0:return z=g._init,G0(b,C,z(g._payload),I)}if(q1(g))return K(b,C,g,I);if(x(g))return D(b,C,g,I);wn(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,C!==null&&C.tag===6?(n(b,C.sibling),C=o(C,g),C.return=b,b=C):(n(b,C),C=Ci(g,b.mode,I),C.return=b,b=C),l(b)):n(b,C)}return G0}var Z1=It(!0),Pt=It(!1),Gn=za(null),vn=null,K1=null,vr=null;function Tr(){vr=K1=vn=null}function Or(a){var e=Gn.current;S0(Gn),a._currentValue=e}function Lr(a,e,n){for(;a!==null;){var i=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),a===n)break;a=a.return}}function D1(a,e){vn=a,vr=K1=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&e)!==0&&(Q0=!0),a.firstContext=null)}function oa(a){var e=a._currentValue;if(vr!==a)if(a={context:a,memoizedValue:e,next:null},K1===null){if(vn===null)throw Error(s(308));K1=a,vn.dependencies={lanes:0,firstContext:a}}else K1=K1.next=a;return e}var u1=null;function Ir(a){u1===null?u1=[a]:u1.push(a)}function Rt(a,e,n,i){var o=e.interleaved;return o===null?(n.next=n,Ir(e)):(n.next=o.next,o.next=n),e.interleaved=n,La(a,i)}function La(a,e){a.lanes|=e;var n=a.alternate;for(n!==null&&(n.lanes|=e),n=a,a=a.return;a!==null;)a.childLanes|=e,n=a.alternate,n!==null&&(n.childLanes|=e),n=a,a=a.return;return n.tag===3?n.stateNode:null}var Qa=!1;function Pr(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xt(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Ia(a,e){return{eventTime:a,lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(a,e,n){var i=a.updateQueue;if(i===null)return null;if(i=i.shared,(t0&2)!==0){var o=i.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e,La(a,n)}return o=i.interleaved,o===null?(e.next=e,Ir(i)):(e.next=o.next,o.next=e),i.interleaved=e,La(a,n)}function Tn(a,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=a.pendingLanes,n|=i,e.lanes=n,Q2(a,n)}}function Zt(a,e){var n=a.updateQueue,i=a.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?o=u=l:u=u.next=l,n=n.next}while(n!==null);u===null?o=u=e:u=u.next=e}else o=u=e;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:i.shared,effects:i.effects},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=e:a.next=e,n.lastBaseUpdate=e}function On(a,e,n,i){var o=a.updateQueue;Qa=!1;var u=o.firstBaseUpdate,l=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var S=m,B=S.next;S.next=null,l===null?u=B:l.next=B,l=S;var O=a.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==l&&(m===null?O.firstBaseUpdate=B:m.next=B,O.lastBaseUpdate=S))}if(u!==null){var L=o.baseState;l=0,O=B=S=null,m=u;do{var T=m.lane,R=m.eventTime;if((i&T)===T){O!==null&&(O=O.next={eventTime:R,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});a:{var K=a,D=m;switch(T=e,R=n,D.tag){case 1:if(K=D.payload,typeof K=="function"){L=K.call(R,L,T);break a}L=K;break a;case 3:K.flags=K.flags&-65537|128;case 0:if(K=D.payload,T=typeof K=="function"?K.call(R,L,T):K,T==null)break a;L=P({},L,T);break a;case 2:Qa=!0}}m.callback!==null&&m.lane!==0&&(a.flags|=64,T=o.effects,T===null?o.effects=[m]:T.push(m))}else R={eventTime:R,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(B=O=R,S=L):O=O.next=R,l|=T;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;T=m,m=T.next,T.next=null,o.lastBaseUpdate=T,o.shared.pending=null}}while(!0);if(O===null&&(S=L),o.baseState=S,o.firstBaseUpdate=B,o.lastBaseUpdate=O,e=o.shared.interleaved,e!==null){o=e;do l|=o.lane,o=o.next;while(o!==e)}else u===null&&(o.shared.lanes=0);l1|=l,a.lanes=l,a.memoizedState=L}}function Kt(a,e,n){if(a=e.effects,e.effects=null,a!==null)for(e=0;e<a.length;e++){var i=a[e],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(s(191,o));o.call(i)}}}var Ne={},ga=za(Ne),ye=za(Ne),Be=za(Ne);function A1(a){if(a===Ne)throw Error(s(174));return a}function Rr(a,e){switch(m0(Be,e),m0(ye,a),m0(ga,Ne),a=e.nodeType,a){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:x2(null,"");break;default:a=a===8?e.parentNode:e,e=a.namespaceURI||null,a=a.tagName,e=x2(e,a)}S0(ga),m0(ga,e)}function k1(){S0(ga),S0(ye),S0(Be)}function Dt(a){A1(Be.current);var e=A1(ga.current),n=x2(e,a.type);e!==n&&(m0(ye,a),m0(ga,n))}function xr(a){ye.current===a&&(S0(ga),S0(ye))}var b0=za(0);function Ln(a){for(var e=a;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zr=[];function Kr(){for(var a=0;a<Zr.length;a++)Zr[a]._workInProgressVersionPrimary=null;Zr.length=0}var In=$.ReactCurrentDispatcher,Dr=$.ReactCurrentBatchConfig,c1=0,g0=null,L0=null,P0=null,Pn=!1,we=!1,Ge=0,x8=0;function k0(){throw Error(s(321))}function kr(a,e){if(e===null)return!1;for(var n=0;n<e.length&&n<a.length;n++)if(!fa(a[n],e[n]))return!1;return!0}function Ur(a,e,n,i,o,u){if(c1=u,g0=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,In.current=a===null||a.memoizedState===null?k8:U8,a=n(i,o),we){u=0;do{if(we=!1,Ge=0,25<=u)throw Error(s(301));u+=1,P0=L0=null,e.updateQueue=null,In.current=_8,a=n(i,o)}while(we)}if(In.current=Zn,e=L0!==null&&L0.next!==null,c1=0,P0=L0=g0=null,Pn=!1,e)throw Error(s(300));return a}function _r(){var a=Ge!==0;return Ge=0,a}function Na(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P0===null?g0.memoizedState=P0=a:P0=P0.next=a,P0}function ua(){if(L0===null){var a=g0.alternate;a=a!==null?a.memoizedState:null}else a=L0.next;var e=P0===null?g0.memoizedState:P0.next;if(e!==null)P0=e,L0=a;else{if(a===null)throw Error(s(310));L0=a,a={memoizedState:L0.memoizedState,baseState:L0.baseState,baseQueue:L0.baseQueue,queue:L0.queue,next:null},P0===null?g0.memoizedState=P0=a:P0=P0.next=a}return P0}function ve(a,e){return typeof e=="function"?e(a):e}function Fr(a){var e=ua(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=L0,o=i.baseQueue,u=n.pending;if(u!==null){if(o!==null){var l=o.next;o.next=u.next,u.next=l}i.baseQueue=o=u,n.pending=null}if(o!==null){u=o.next,i=i.baseState;var m=l=null,S=null,B=u;do{var O=B.lane;if((c1&O)===O)S!==null&&(S=S.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),i=B.hasEagerState?B.eagerState:a(i,B.action);else{var L={lane:O,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};S===null?(m=S=L,l=i):S=S.next=L,g0.lanes|=O,l1|=O}B=B.next}while(B!==null&&B!==u);S===null?l=i:S.next=m,fa(i,e.memoizedState)||(Q0=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=S,n.lastRenderedState=i}if(a=n.interleaved,a!==null){o=a;do u=o.lane,g0.lanes|=u,l1|=u,o=o.next;while(o!==a)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hr(a){var e=ua(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=n.dispatch,o=n.pending,u=e.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do u=a(u,l.action),l=l.next;while(l!==o);fa(u,e.memoizedState)||(Q0=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,i]}function kt(){}function Ut(a,e){var n=g0,i=ua(),o=e(),u=!fa(i.memoizedState,o);if(u&&(i.memoizedState=o,Q0=!0),i=i.queue,zr(Ht.bind(null,n,i,a),[a]),i.getSnapshot!==e||u||P0!==null&&P0.memoizedState.tag&1){if(n.flags|=2048,Te(9,Ft.bind(null,n,i,o,e),void 0,null),R0===null)throw Error(s(349));(c1&30)!==0||_t(n,e,o)}return o}function _t(a,e,n){a.flags|=16384,a={getSnapshot:e,value:n},e=g0.updateQueue,e===null?(e={lastEffect:null,stores:null},g0.updateQueue=e,e.stores=[a]):(n=e.stores,n===null?e.stores=[a]:n.push(a))}function Ft(a,e,n,i){e.value=n,e.getSnapshot=i,zt(e)&&Vt(a)}function Ht(a,e,n){return n(function(){zt(e)&&Vt(a)})}function zt(a){var e=a.getSnapshot;a=a.value;try{var n=e();return!fa(a,n)}catch{return!0}}function Vt(a){var e=La(a,1);e!==null&&ha(e,a,1,-1)}function Yt(a){var e=Na();return typeof a=="function"&&(a=a()),e.memoizedState=e.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:a},e.queue=a,a=a.dispatch=D8.bind(null,g0,a),[e.memoizedState,a]}function Te(a,e,n,i){return a={tag:a,create:e,destroy:n,deps:i,next:null},e=g0.updateQueue,e===null?(e={lastEffect:null,stores:null},g0.updateQueue=e,e.lastEffect=a.next=a):(n=e.lastEffect,n===null?e.lastEffect=a.next=a:(i=n.next,n.next=a,a.next=i,e.lastEffect=a)),a}function Qt(){return ua().memoizedState}function Rn(a,e,n,i){var o=Na();g0.flags|=a,o.memoizedState=Te(1|e,n,void 0,i===void 0?null:i)}function xn(a,e,n,i){var o=ua();i=i===void 0?null:i;var u=void 0;if(L0!==null){var l=L0.memoizedState;if(u=l.destroy,i!==null&&kr(i,l.deps)){o.memoizedState=Te(e,n,u,i);return}}g0.flags|=a,o.memoizedState=Te(1|e,n,u,i)}function Jt(a,e){return Rn(8390656,8,a,e)}function zr(a,e){return xn(2048,8,a,e)}function jt(a,e){return xn(4,2,a,e)}function $t(a,e){return xn(4,4,a,e)}function qt(a,e){if(typeof e=="function")return a=a(),e(a),function(){e(null)};if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function Xt(a,e,n){return n=n!=null?n.concat([a]):null,xn(4,4,qt.bind(null,e,a),n)}function Vr(){}function as(a,e){var n=ua();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kr(e,i[1])?i[0]:(n.memoizedState=[a,e],a)}function es(a,e){var n=ua();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kr(e,i[1])?i[0]:(a=a(),n.memoizedState=[a,e],a)}function ns(a,e,n){return(c1&21)===0?(a.baseState&&(a.baseState=!1,Q0=!0),a.memoizedState=n):(fa(n,e)||(n=L9(),g0.lanes|=n,l1|=n,a.baseState=!0),e)}function Z8(a,e){var n=f0;f0=n!==0&&4>n?n:4,a(!0);var i=Dr.transition;Dr.transition={};try{a(!1),e()}finally{f0=n,Dr.transition=i}}function rs(){return ua().memoizedState}function K8(a,e,n){var i=Xa(a);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},is(a))ts(e,n);else if(n=Rt(a,e,n,i),n!==null){var o=H0();ha(n,a,i,o),ss(n,e,i)}}function D8(a,e,n){var i=Xa(a),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(is(a))ts(e,o);else{var u=a.alternate;if(a.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var l=e.lastRenderedState,m=u(l,n);if(o.hasEagerState=!0,o.eagerState=m,fa(m,l)){var S=e.interleaved;S===null?(o.next=o,Ir(e)):(o.next=S.next,S.next=o),e.interleaved=o;return}}catch{}finally{}n=Rt(a,e,o,i),n!==null&&(o=H0(),ha(n,a,i,o),ss(n,e,i))}}function is(a){var e=a.alternate;return a===g0||e!==null&&e===g0}function ts(a,e){we=Pn=!0;var n=a.pending;n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e}function ss(a,e,n){if((n&4194240)!==0){var i=e.lanes;i&=a.pendingLanes,n|=i,e.lanes=n,Q2(a,n)}}var Zn={readContext:oa,useCallback:k0,useContext:k0,useEffect:k0,useImperativeHandle:k0,useInsertionEffect:k0,useLayoutEffect:k0,useMemo:k0,useReducer:k0,useRef:k0,useState:k0,useDebugValue:k0,useDeferredValue:k0,useTransition:k0,useMutableSource:k0,useSyncExternalStore:k0,useId:k0,unstable_isNewReconciler:!1},k8={readContext:oa,useCallback:function(a,e){return Na().memoizedState=[a,e===void 0?null:e],a},useContext:oa,useEffect:Jt,useImperativeHandle:function(a,e,n){return n=n!=null?n.concat([a]):null,Rn(4194308,4,qt.bind(null,e,a),n)},useLayoutEffect:function(a,e){return Rn(4194308,4,a,e)},useInsertionEffect:function(a,e){return Rn(4,2,a,e)},useMemo:function(a,e){var n=Na();return e=e===void 0?null:e,a=a(),n.memoizedState=[a,e],a},useReducer:function(a,e,n){var i=Na();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:e},i.queue=a,a=a.dispatch=K8.bind(null,g0,a),[i.memoizedState,a]},useRef:function(a){var e=Na();return a={current:a},e.memoizedState=a},useState:Yt,useDebugValue:Vr,useDeferredValue:function(a){return Na().memoizedState=a},useTransition:function(){var a=Yt(!1),e=a[0];return a=Z8.bind(null,a[1]),Na().memoizedState=a,[e,a]},useMutableSource:function(){},useSyncExternalStore:function(a,e,n){var i=g0,o=Na();if(M0){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),R0===null)throw Error(s(349));(c1&30)!==0||_t(i,e,n)}o.memoizedState=n;var u={value:n,getSnapshot:e};return o.queue=u,Jt(Ht.bind(null,i,u,a),[a]),i.flags|=2048,Te(9,Ft.bind(null,i,u,n,e),void 0,null),n},useId:function(){var a=Na(),e=R0.identifierPrefix;if(M0){var n=Oa,i=Ta;n=(i&~(1<<32-la(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ge++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x8++,e=":"+e+"r"+n.toString(32)+":";return a.memoizedState=e},unstable_isNewReconciler:!1},U8={readContext:oa,useCallback:as,useContext:oa,useEffect:zr,useImperativeHandle:Xt,useInsertionEffect:jt,useLayoutEffect:$t,useMemo:es,useReducer:Fr,useRef:Qt,useState:function(){return Fr(ve)},useDebugValue:Vr,useDeferredValue:function(a){var e=ua();return ns(e,L0.memoizedState,a)},useTransition:function(){var a=Fr(ve)[0],e=ua().memoizedState;return[a,e]},useMutableSource:kt,useSyncExternalStore:Ut,useId:rs,unstable_isNewReconciler:!1},_8={readContext:oa,useCallback:as,useContext:oa,useEffect:zr,useImperativeHandle:Xt,useInsertionEffect:jt,useLayoutEffect:$t,useMemo:es,useReducer:Hr,useRef:Qt,useState:function(){return Hr(ve)},useDebugValue:Vr,useDeferredValue:function(a){var e=ua();return L0===null?e.memoizedState=a:ns(e,L0.memoizedState,a)},useTransition:function(){var a=Hr(ve)[0],e=ua().memoizedState;return[a,e]},useMutableSource:kt,useSyncExternalStore:Ut,useId:rs,unstable_isNewReconciler:!1};function da(a,e){if(a&&a.defaultProps){e=P({},e),a=a.defaultProps;for(var n in a)e[n]===void 0&&(e[n]=a[n]);return e}return e}function Yr(a,e,n,i){e=a.memoizedState,n=n(i,e),n=n==null?e:P({},e,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var Kn={isMounted:function(a){return(a=a._reactInternals)?r1(a)===a:!1},enqueueSetState:function(a,e,n){a=a._reactInternals;var i=H0(),o=Xa(a),u=Ia(i,o);u.payload=e,n!=null&&(u.callback=n),e=Ja(a,u,o),e!==null&&(ha(e,a,o,i),Tn(e,a,o))},enqueueReplaceState:function(a,e,n){a=a._reactInternals;var i=H0(),o=Xa(a),u=Ia(i,o);u.tag=1,u.payload=e,n!=null&&(u.callback=n),e=Ja(a,u,o),e!==null&&(ha(e,a,o,i),Tn(e,a,o))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var n=H0(),i=Xa(a),o=Ia(n,i);o.tag=2,e!=null&&(o.callback=e),e=Ja(a,o,i),e!==null&&(ha(e,a,i,n),Tn(e,a,i))}};function os(a,e,n,i,o,u,l){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(i,u,l):e.prototype&&e.prototype.isPureReactComponent?!me(n,i)||!me(o,u):!0}function us(a,e,n){var i=!1,o=Va,u=e.contextType;return typeof u=="object"&&u!==null?u=oa(u):(o=Y0(e)?t1:D0.current,i=e.contextTypes,u=(i=i!=null)?I1(a,o):Va),e=new e(n,u),a.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kn,a.stateNode=e,e._reactInternals=a,i&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=o,a.__reactInternalMemoizedMaskedChildContext=u),e}function As(a,e,n,i){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==a&&Kn.enqueueReplaceState(e,e.state,null)}function Qr(a,e,n,i){var o=a.stateNode;o.props=n,o.state=a.memoizedState,o.refs={},Pr(a);var u=e.contextType;typeof u=="object"&&u!==null?o.context=oa(u):(u=Y0(e)?t1:D0.current,o.context=I1(a,u)),o.state=a.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Yr(a,e,u,n),o.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Kn.enqueueReplaceState(o,o.state,null),On(a,n,o,i),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308)}function U1(a,e){try{var n="",i=e;do n+=X(i),i=i.return;while(i);var o=n}catch(u){o=`
Error generating stack: `+u.message+`
`+u.stack}return{value:a,source:e,stack:o,digest:null}}function Jr(a,e,n){return{value:a,source:null,stack:n??null,digest:e??null}}function jr(a,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F8=typeof WeakMap=="function"?WeakMap:Map;function cs(a,e,n){n=Ia(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zn||(zn=!0,li=i),jr(a,e)},n}function ls(a,e,n){n=Ia(-1,n),n.tag=3;var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=e.value;n.payload=function(){return i(o)},n.callback=function(){jr(a,e)}}var u=a.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){jr(a,e),typeof i!="function"&&($a===null?$a=new Set([this]):$a.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function fs(a,e,n){var i=a.pingCache;if(i===null){i=a.pingCache=new F8;var o=new Set;i.set(e,o)}else o=i.get(e),o===void 0&&(o=new Set,i.set(e,o));o.has(n)||(o.add(n),a=rA.bind(null,a,e,n),e.then(a,a))}function Es(a){do{var e;if((e=a.tag===13)&&(e=a.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return a;a=a.return}while(a!==null);return null}function ds(a,e,n,i,o){return(a.mode&1)===0?(a===e?a.flags|=65536:(a.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ia(-1,1),e.tag=2,Ja(n,e,1))),n.lanes|=1),a):(a.flags|=65536,a.lanes=o,a)}var H8=$.ReactCurrentOwner,Q0=!1;function F0(a,e,n,i){e.child=a===null?Pt(e,null,n,i):Z1(e,a.child,n,i)}function ps(a,e,n,i,o){n=n.render;var u=e.ref;return D1(e,o),i=Ur(a,e,n,i,u,o),n=_r(),a!==null&&!Q0?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~o,Pa(a,e,o)):(M0&&n&&Nr(e),e.flags|=1,F0(a,e,i,o),e.child)}function ms(a,e,n,i,o){if(a===null){var u=n.type;return typeof u=="function"&&!Si(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=u,hs(a,e,u,i,o)):(a=$n(n.type,null,i,e,e.mode,o),a.ref=e.ref,a.return=e,e.child=a)}if(u=a.child,(a.lanes&o)===0){var l=u.memoizedProps;if(n=n.compare,n=n!==null?n:me,n(l,i)&&a.ref===e.ref)return Pa(a,e,o)}return e.flags|=1,a=e1(u,i),a.ref=e.ref,a.return=e,e.child=a}function hs(a,e,n,i,o){if(a!==null){var u=a.memoizedProps;if(me(u,i)&&a.ref===e.ref)if(Q0=!1,e.pendingProps=i=u,(a.lanes&o)!==0)(a.flags&131072)!==0&&(Q0=!0);else return e.lanes=a.lanes,Pa(a,e,o)}return $r(a,e,n,i,o)}function Ss(a,e,n){var i=e.pendingProps,o=i.children,u=a!==null?a.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},m0(F1,ra),ra|=n;else{if((n&1073741824)===0)return a=u!==null?u.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:a,cachePool:null,transitions:null},e.updateQueue=null,m0(F1,ra),ra|=a,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:n,m0(F1,ra),ra|=i}else u!==null?(i=u.baseLanes|n,e.memoizedState=null):i=n,m0(F1,ra),ra|=i;return F0(a,e,o,n),e.child}function Cs(a,e){var n=e.ref;(a===null&&n!==null||a!==null&&a.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $r(a,e,n,i,o){var u=Y0(n)?t1:D0.current;return u=I1(e,u),D1(e,o),n=Ur(a,e,n,i,u,o),i=_r(),a!==null&&!Q0?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~o,Pa(a,e,o)):(M0&&i&&Nr(e),e.flags|=1,F0(a,e,n,o),e.child)}function Ws(a,e,n,i,o){if(Y0(n)){var u=!0;bn(e)}else u=!1;if(D1(e,o),e.stateNode===null)kn(a,e),us(e,n,i),Qr(e,n,i,o),i=!0;else if(a===null){var l=e.stateNode,m=e.memoizedProps;l.props=m;var S=l.context,B=n.contextType;typeof B=="object"&&B!==null?B=oa(B):(B=Y0(n)?t1:D0.current,B=I1(e,B));var O=n.getDerivedStateFromProps,L=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function";L||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m!==i||S!==B)&&As(e,l,i,B),Qa=!1;var T=e.memoizedState;l.state=T,On(e,i,l,o),S=e.memoizedState,m!==i||T!==S||V0.current||Qa?(typeof O=="function"&&(Yr(e,n,O,i),S=e.memoizedState),(m=Qa||os(e,n,m,i,T,S,B))?(L||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=S),l.props=i,l.state=S,l.context=B,i=m):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,xt(a,e),m=e.memoizedProps,B=e.type===e.elementType?m:da(e.type,m),l.props=B,L=e.pendingProps,T=l.context,S=n.contextType,typeof S=="object"&&S!==null?S=oa(S):(S=Y0(n)?t1:D0.current,S=I1(e,S));var R=n.getDerivedStateFromProps;(O=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m!==L||T!==S)&&As(e,l,i,S),Qa=!1,T=e.memoizedState,l.state=T,On(e,i,l,o);var K=e.memoizedState;m!==L||T!==K||V0.current||Qa?(typeof R=="function"&&(Yr(e,n,R,i),K=e.memoizedState),(B=Qa||os(e,n,B,i,T,K,S)||!1)?(O||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,K,S),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,K,S)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||m===a.memoizedProps&&T===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===a.memoizedProps&&T===a.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=K),l.props=i,l.state=K,l.context=S,i=B):(typeof l.componentDidUpdate!="function"||m===a.memoizedProps&&T===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||m===a.memoizedProps&&T===a.memoizedState||(e.flags|=1024),i=!1)}return qr(a,e,n,i,u,o)}function qr(a,e,n,i,o,u){Cs(a,e);var l=(e.flags&128)!==0;if(!i&&!l)return o&&yt(e,n,!1),Pa(a,e,u);i=e.stateNode,H8.current=e;var m=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,a!==null&&l?(e.child=Z1(e,a.child,null,u),e.child=Z1(e,null,m,u)):F0(a,e,m,u),e.memoizedState=i.state,o&&yt(e,n,!0),e.child}function Ms(a){var e=a.stateNode;e.pendingContext?gt(a,e.pendingContext,e.pendingContext!==e.context):e.context&&gt(a,e.context,!1),Rr(a,e.containerInfo)}function bs(a,e,n,i,o){return x1(),Gr(o),e.flags|=256,F0(a,e,n,i),e.child}var Xr={dehydrated:null,treeContext:null,retryLane:0};function ai(a){return{baseLanes:a,cachePool:null,transitions:null}}function gs(a,e,n){var i=e.pendingProps,o=b0.current,u=!1,l=(e.flags&128)!==0,m;if((m=l)||(m=a!==null&&a.memoizedState===null?!1:(o&2)!==0),m?(u=!0,e.flags&=-129):(a===null||a.memoizedState!==null)&&(o|=1),m0(b0,o&1),a===null)return wr(e),a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((e.mode&1)===0?e.lanes=1:a.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(l=i.children,a=i.fallback,u?(i=e.mode,u=e.child,l={mode:"hidden",children:l},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=l):u=qn(l,i,0,null),a=p1(a,i,n,null),u.return=e,a.return=e,u.sibling=a,e.child=u,e.child.memoizedState=ai(n),e.memoizedState=Xr,a):ei(e,l));if(o=a.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return z8(a,e,l,i,m,o,n);if(u){u=i.fallback,l=e.mode,o=a.child,m=o.sibling;var S={mode:"hidden",children:i.children};return(l&1)===0&&e.child!==o?(i=e.child,i.childLanes=0,i.pendingProps=S,e.deletions=null):(i=e1(o,S),i.subtreeFlags=o.subtreeFlags&14680064),m!==null?u=e1(m,u):(u=p1(u,l,n,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,l=a.child.memoizedState,l=l===null?ai(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},u.memoizedState=l,u.childLanes=a.childLanes&~n,e.memoizedState=Xr,i}return u=a.child,a=u.sibling,i=e1(u,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,a!==null&&(n=e.deletions,n===null?(e.deletions=[a],e.flags|=16):n.push(a)),e.child=i,e.memoizedState=null,i}function ei(a,e){return e=qn({mode:"visible",children:e},a.mode,0,null),e.return=a,a.child=e}function Dn(a,e,n,i){return i!==null&&Gr(i),Z1(e,a.child,null,n),a=ei(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function z8(a,e,n,i,o,u,l){if(n)return e.flags&256?(e.flags&=-257,i=Jr(Error(s(422))),Dn(a,e,l,i)):e.memoizedState!==null?(e.child=a.child,e.flags|=128,null):(u=i.fallback,o=e.mode,i=qn({mode:"visible",children:i.children},o,0,null),u=p1(u,o,l,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,(e.mode&1)!==0&&Z1(e,a.child,null,l),e.child.memoizedState=ai(l),e.memoizedState=Xr,u);if((e.mode&1)===0)return Dn(a,e,l,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var m=i.dgst;return i=m,u=Error(s(419)),i=Jr(u,i,void 0),Dn(a,e,l,i)}if(m=(l&a.childLanes)!==0,Q0||m){if(i=R0,i!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(i.suspendedLanes|l))!==0?0:o,o!==0&&o!==u.retryLane&&(u.retryLane=o,La(a,o),ha(i,a,o,-1))}return hi(),i=Jr(Error(s(421))),Dn(a,e,l,i)}return o.data==="$?"?(e.flags|=128,e.child=a.child,e=iA.bind(null,a),o._reactRetry=e,null):(a=u.treeContext,na=Ha(o.nextSibling),ea=e,M0=!0,Ea=null,a!==null&&(ta[sa++]=Ta,ta[sa++]=Oa,ta[sa++]=s1,Ta=a.id,Oa=a.overflow,s1=e),e=ei(e,i.children),e.flags|=4096,e)}function Ns(a,e,n){a.lanes|=e;var i=a.alternate;i!==null&&(i.lanes|=e),Lr(a.return,e,n)}function ni(a,e,n,i,o){var u=a.memoizedState;u===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=o)}function ys(a,e,n){var i=e.pendingProps,o=i.revealOrder,u=i.tail;if(F0(a,e,i.children,n),i=b0.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Ns(a,n,e);else if(a.tag===19)Ns(a,n,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}i&=1}if(m0(b0,i),(e.mode&1)===0)e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)a=n.alternate,a!==null&&Ln(a)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),ni(e,!1,o,n,u);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(a=o.alternate,a!==null&&Ln(a)===null){e.child=o;break}a=o.sibling,o.sibling=n,n=o,o=a}ni(e,!0,n,null,u);break;case"together":ni(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kn(a,e){(e.mode&1)===0&&a!==null&&(a.alternate=null,e.alternate=null,e.flags|=2)}function Pa(a,e,n){if(a!==null&&(e.dependencies=a.dependencies),l1|=e.lanes,(n&e.childLanes)===0)return null;if(a!==null&&e.child!==a.child)throw Error(s(153));if(e.child!==null){for(a=e.child,n=e1(a,a.pendingProps),e.child=n,n.return=e;a.sibling!==null;)a=a.sibling,n=n.sibling=e1(a,a.pendingProps),n.return=e;n.sibling=null}return e.child}function V8(a,e,n){switch(e.tag){case 3:Ms(e),x1();break;case 5:Dt(e);break;case 1:Y0(e.type)&&bn(e);break;case 4:Rr(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,o=e.memoizedProps.value;m0(Gn,i._currentValue),i._currentValue=o;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(m0(b0,b0.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?gs(a,e,n):(m0(b0,b0.current&1),a=Pa(a,e,n),a!==null?a.sibling:null);m0(b0,b0.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(a.flags&128)!==0){if(i)return ys(a,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),m0(b0,b0.current),i)break;return null;case 22:case 23:return e.lanes=0,Ss(a,e,n)}return Pa(a,e,n)}var Bs,ri,ws,Gs;Bs=function(a,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)a.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ri=function(){},ws=function(a,e,n,i){var o=a.memoizedProps;if(o!==i){a=e.stateNode,A1(ga.current);var u=null;switch(n){case"input":o=L2(a,o),i=L2(a,i),u=[];break;case"select":o=P({},o,{value:void 0}),i=P({},i,{value:void 0}),u=[];break;case"textarea":o=R2(a,o),i=R2(a,i),u=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(a.onclick=Cn)}Z2(n,i);var l;n=null;for(B in o)if(!i.hasOwnProperty(B)&&o.hasOwnProperty(B)&&o[B]!=null)if(B==="style"){var m=o[B];for(l in m)m.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(c.hasOwnProperty(B)?u||(u=[]):(u=u||[]).push(B,null));for(B in i){var S=i[B];if(m=o!=null?o[B]:void 0,i.hasOwnProperty(B)&&S!==m&&(S!=null||m!=null))if(B==="style")if(m){for(l in m)!m.hasOwnProperty(l)||S&&S.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in S)S.hasOwnProperty(l)&&m[l]!==S[l]&&(n||(n={}),n[l]=S[l])}else n||(u||(u=[]),u.push(B,n)),n=S;else B==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,m=m?m.__html:void 0,S!=null&&m!==S&&(u=u||[]).push(B,S)):B==="children"?typeof S!="string"&&typeof S!="number"||(u=u||[]).push(B,""+S):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(c.hasOwnProperty(B)?(S!=null&&B==="onScroll"&&h0("scroll",a),u||m===S||(u=[])):(u=u||[]).push(B,S))}n&&(u=u||[]).push("style",n);var B=u;(e.updateQueue=B)&&(e.flags|=4)}},Gs=function(a,e,n,i){n!==i&&(e.flags|=4)};function Oe(a,e){if(!M0)switch(a.tailMode){case"hidden":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:i.sibling=null}}function U0(a){var e=a.alternate!==null&&a.alternate.child===a.child,n=0,i=0;if(e)for(var o=a.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=a,o=o.sibling;else for(o=a.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=a,o=o.sibling;return a.subtreeFlags|=i,a.childLanes=n,e}function Y8(a,e,n){var i=e.pendingProps;switch(yr(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U0(e),null;case 1:return Y0(e.type)&&Mn(),U0(e),null;case 3:return i=e.stateNode,k1(),S0(V0),S0(D0),Kr(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(a===null||a.child===null)&&(Bn(e)?e.flags|=4:a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ea!==null&&(di(Ea),Ea=null))),ri(a,e),U0(e),null;case 5:xr(e);var o=A1(Be.current);if(n=e.type,a!==null&&e.stateNode!=null)ws(a,e,n,i,o),a.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(s(166));return U0(e),null}if(a=A1(ga.current),Bn(e)){i=e.stateNode,n=e.type;var u=e.memoizedProps;switch(i[ba]=e,i[Me]=u,a=(e.mode&1)!==0,n){case"dialog":h0("cancel",i),h0("close",i);break;case"iframe":case"object":case"embed":h0("load",i);break;case"video":case"audio":for(o=0;o<Se.length;o++)h0(Se[o],i);break;case"source":h0("error",i);break;case"img":case"image":case"link":h0("error",i),h0("load",i);break;case"details":h0("toggle",i);break;case"input":u9(i,u),h0("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},h0("invalid",i);break;case"textarea":l9(i,u),h0("invalid",i)}Z2(n,u),o=null;for(var l in u)if(u.hasOwnProperty(l)){var m=u[l];l==="children"?typeof m=="string"?i.textContent!==m&&(u.suppressHydrationWarning!==!0&&Sn(i.textContent,m,a),o=["children",m]):typeof m=="number"&&i.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&Sn(i.textContent,m,a),o=["children",""+m]):c.hasOwnProperty(l)&&m!=null&&l==="onScroll"&&h0("scroll",i)}switch(n){case"input":Qe(i),c9(i,u,!0);break;case"textarea":Qe(i),E9(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Cn)}i=o,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=d9(n)),a==="http://www.w3.org/1999/xhtml"?n==="script"?(a=l.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof i.is=="string"?a=l.createElement(n,{is:i.is}):(a=l.createElement(n),n==="select"&&(l=a,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):a=l.createElementNS(a,n),a[ba]=e,a[Me]=i,Bs(a,e,!1,!1),e.stateNode=a;a:{switch(l=K2(n,i),n){case"dialog":h0("cancel",a),h0("close",a),o=i;break;case"iframe":case"object":case"embed":h0("load",a),o=i;break;case"video":case"audio":for(o=0;o<Se.length;o++)h0(Se[o],a);o=i;break;case"source":h0("error",a),o=i;break;case"img":case"image":case"link":h0("error",a),h0("load",a),o=i;break;case"details":h0("toggle",a),o=i;break;case"input":u9(a,i),o=L2(a,i),h0("invalid",a);break;case"option":o=i;break;case"select":a._wrapperState={wasMultiple:!!i.multiple},o=P({},i,{value:void 0}),h0("invalid",a);break;case"textarea":l9(a,i),o=R2(a,i),h0("invalid",a);break;default:o=i}Z2(n,o),m=o;for(u in m)if(m.hasOwnProperty(u)){var S=m[u];u==="style"?h9(a,S):u==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&p9(a,S)):u==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&X1(a,S):typeof S=="number"&&X1(a,""+S):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?S!=null&&u==="onScroll"&&h0("scroll",a):S!=null&&e0(a,u,S,l))}switch(n){case"input":Qe(a),c9(a,i,!1);break;case"textarea":Qe(a),E9(a);break;case"option":i.value!=null&&a.setAttribute("value",""+l0(i.value));break;case"select":a.multiple=!!i.multiple,u=i.value,u!=null?M1(a,!!i.multiple,u,!1):i.defaultValue!=null&&M1(a,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(a.onclick=Cn)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break a;case"img":i=!0;break a;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return U0(e),null;case 6:if(a&&e.stateNode!=null)Gs(a,e,a.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(s(166));if(n=A1(Be.current),A1(ga.current),Bn(e)){if(i=e.stateNode,n=e.memoizedProps,i[ba]=e,(u=i.nodeValue!==n)&&(a=ea,a!==null))switch(a.tag){case 3:Sn(i.nodeValue,n,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&Sn(i.nodeValue,n,(a.mode&1)!==0)}u&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ba]=e,e.stateNode=i}return U0(e),null;case 13:if(S0(b0),i=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(M0&&na!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Ot(),x1(),e.flags|=98560,u=!1;else if(u=Bn(e),i!==null&&i.dehydrated!==null){if(a===null){if(!u)throw Error(s(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ba]=e}else x1(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;U0(e),u=!1}else Ea!==null&&(di(Ea),Ea=null),u=!0;if(!u)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(a!==null&&a.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(a===null||(b0.current&1)!==0?I0===0&&(I0=3):hi())),e.updateQueue!==null&&(e.flags|=4),U0(e),null);case 4:return k1(),ri(a,e),a===null&&Ce(e.stateNode.containerInfo),U0(e),null;case 10:return Or(e.type._context),U0(e),null;case 17:return Y0(e.type)&&Mn(),U0(e),null;case 19:if(S0(b0),u=e.memoizedState,u===null)return U0(e),null;if(i=(e.flags&128)!==0,l=u.rendering,l===null)if(i)Oe(u,!1);else{if(I0!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(l=Ln(a),l!==null){for(e.flags|=128,Oe(u,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)u=n,a=i,u.flags&=14680066,l=u.alternate,l===null?(u.childLanes=0,u.lanes=a,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=l.childLanes,u.lanes=l.lanes,u.child=l.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=l.memoizedProps,u.memoizedState=l.memoizedState,u.updateQueue=l.updateQueue,u.type=l.type,a=l.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n=n.sibling;return m0(b0,b0.current&1|2),e.child}a=a.sibling}u.tail!==null&&w0()>H1&&(e.flags|=128,i=!0,Oe(u,!1),e.lanes=4194304)}else{if(!i)if(a=Ln(l),a!==null){if(e.flags|=128,i=!0,n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oe(u,!0),u.tail===null&&u.tailMode==="hidden"&&!l.alternate&&!M0)return U0(e),null}else 2*w0()-u.renderingStartTime>H1&&n!==1073741824&&(e.flags|=128,i=!0,Oe(u,!1),e.lanes=4194304);u.isBackwards?(l.sibling=e.child,e.child=l):(n=u.last,n!==null?n.sibling=l:e.child=l,u.last=l)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=w0(),e.sibling=null,n=b0.current,m0(b0,i?n&1|2:n&1),e):(U0(e),null);case 22:case 23:return mi(),i=e.memoizedState!==null,a!==null&&a.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(ra&1073741824)!==0&&(U0(e),e.subtreeFlags&6&&(e.flags|=8192)):U0(e),null;case 24:return null;case 25:return null}throw Error(s(156,e.tag))}function Q8(a,e){switch(yr(e),e.tag){case 1:return Y0(e.type)&&Mn(),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return k1(),S0(V0),S0(D0),Kr(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 5:return xr(e),null;case 13:if(S0(b0),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(s(340));x1()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return S0(b0),null;case 4:return k1(),null;case 10:return Or(e.type._context),null;case 22:case 23:return mi(),null;case 24:return null;default:return null}}var Un=!1,_0=!1,J8=typeof WeakSet=="function"?WeakSet:Set,Z=null;function _1(a,e){var n=a.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){y0(a,e,i)}else n.current=null}function ii(a,e,n){try{n()}catch(i){y0(a,e,i)}}var vs=!1;function j8(a,e){if(mr=on,a=ot(),ur(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else a:{n=(n=a.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break a}var l=0,m=-1,S=-1,B=0,O=0,L=a,T=null;e:for(;;){for(var R;L!==n||o!==0&&L.nodeType!==3||(m=l+o),L!==u||i!==0&&L.nodeType!==3||(S=l+i),L.nodeType===3&&(l+=L.nodeValue.length),(R=L.firstChild)!==null;)T=L,L=R;for(;;){if(L===a)break e;if(T===n&&++B===o&&(m=l),T===u&&++O===i&&(S=l),(R=L.nextSibling)!==null)break;L=T,T=L.parentNode}L=R}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(hr={focusedElem:a,selectionRange:n},on=!1,Z=e;Z!==null;)if(e=Z,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,Z=a;else for(;Z!==null;){e=Z;try{var K=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var D=K.memoizedProps,G0=K.memoizedState,b=e.stateNode,C=b.getSnapshotBeforeUpdate(e.elementType===e.type?D:da(e.type,D),G0);b.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(I){y0(e,e.return,I)}if(a=e.sibling,a!==null){a.return=e.return,Z=a;break}Z=e.return}return K=vs,vs=!1,K}function Le(a,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&a)===a){var u=o.destroy;o.destroy=void 0,u!==void 0&&ii(e,n,u)}o=o.next}while(o!==i)}}function _n(a,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&a)===a){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ti(a){var e=a.ref;if(e!==null){var n=a.stateNode;switch(a.tag){case 5:a=n;break;default:a=n}typeof e=="function"?e(a):e.current=a}}function Ts(a){var e=a.alternate;e!==null&&(a.alternate=null,Ts(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&(delete e[ba],delete e[Me],delete e[Mr],delete e[L8],delete e[I8])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Os(a){return a.tag===5||a.tag===3||a.tag===4}function Ls(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Os(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function si(a,e,n){var i=a.tag;if(i===5||i===6)a=a.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(a,e):n.insertBefore(a,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(a,n)):(e=n,e.appendChild(a)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cn));else if(i!==4&&(a=a.child,a!==null))for(si(a,e,n),a=a.sibling;a!==null;)si(a,e,n),a=a.sibling}function oi(a,e,n){var i=a.tag;if(i===5||i===6)a=a.stateNode,e?n.insertBefore(a,e):n.appendChild(a);else if(i!==4&&(a=a.child,a!==null))for(oi(a,e,n),a=a.sibling;a!==null;)oi(a,e,n),a=a.sibling}var Z0=null,pa=!1;function ja(a,e,n){for(n=n.child;n!==null;)Is(a,e,n),n=n.sibling}function Is(a,e,n){if(Ma&&typeof Ma.onCommitFiberUnmount=="function")try{Ma.onCommitFiberUnmount(an,n)}catch{}switch(n.tag){case 5:_0||_1(n,e);case 6:var i=Z0,o=pa;Z0=null,ja(a,e,n),Z0=i,pa=o,Z0!==null&&(pa?(a=Z0,n=n.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)):Z0.removeChild(n.stateNode));break;case 18:Z0!==null&&(pa?(a=Z0,n=n.stateNode,a.nodeType===8?Wr(a.parentNode,n):a.nodeType===1&&Wr(a,n),ce(a)):Wr(Z0,n.stateNode));break;case 4:i=Z0,o=pa,Z0=n.stateNode.containerInfo,pa=!0,ja(a,e,n),Z0=i,pa=o;break;case 0:case 11:case 14:case 15:if(!_0&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var u=o,l=u.destroy;u=u.tag,l!==void 0&&((u&2)!==0||(u&4)!==0)&&ii(n,e,l),o=o.next}while(o!==i)}ja(a,e,n);break;case 1:if(!_0&&(_1(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(m){y0(n,e,m)}ja(a,e,n);break;case 21:ja(a,e,n);break;case 22:n.mode&1?(_0=(i=_0)||n.memoizedState!==null,ja(a,e,n),_0=i):ja(a,e,n);break;default:ja(a,e,n)}}function Ps(a){var e=a.updateQueue;if(e!==null){a.updateQueue=null;var n=a.stateNode;n===null&&(n=a.stateNode=new J8),e.forEach(function(i){var o=tA.bind(null,a,i);n.has(i)||(n.add(i),i.then(o,o))})}}function ma(a,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var u=a,l=e,m=l;a:for(;m!==null;){switch(m.tag){case 5:Z0=m.stateNode,pa=!1;break a;case 3:Z0=m.stateNode.containerInfo,pa=!0;break a;case 4:Z0=m.stateNode.containerInfo,pa=!0;break a}m=m.return}if(Z0===null)throw Error(s(160));Is(u,l,o),Z0=null,pa=!1;var S=o.alternate;S!==null&&(S.return=null),o.return=null}catch(B){y0(o,e,B)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rs(e,a),e=e.sibling}function Rs(a,e){var n=a.alternate,i=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(ma(e,a),ya(a),i&4){try{Le(3,a,a.return),_n(3,a)}catch(D){y0(a,a.return,D)}try{Le(5,a,a.return)}catch(D){y0(a,a.return,D)}}break;case 1:ma(e,a),ya(a),i&512&&n!==null&&_1(n,n.return);break;case 5:if(ma(e,a),ya(a),i&512&&n!==null&&_1(n,n.return),a.flags&32){var o=a.stateNode;try{X1(o,"")}catch(D){y0(a,a.return,D)}}if(i&4&&(o=a.stateNode,o!=null)){var u=a.memoizedProps,l=n!==null?n.memoizedProps:u,m=a.type,S=a.updateQueue;if(a.updateQueue=null,S!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&A9(o,u),K2(m,l);var B=K2(m,u);for(l=0;l<S.length;l+=2){var O=S[l],L=S[l+1];O==="style"?h9(o,L):O==="dangerouslySetInnerHTML"?p9(o,L):O==="children"?X1(o,L):e0(o,O,L,B)}switch(m){case"input":I2(o,u);break;case"textarea":f9(o,u);break;case"select":var T=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!u.multiple;var R=u.value;R!=null?M1(o,!!u.multiple,R,!1):T!==!!u.multiple&&(u.defaultValue!=null?M1(o,!!u.multiple,u.defaultValue,!0):M1(o,!!u.multiple,u.multiple?[]:"",!1))}o[Me]=u}catch(D){y0(a,a.return,D)}}break;case 6:if(ma(e,a),ya(a),i&4){if(a.stateNode===null)throw Error(s(162));o=a.stateNode,u=a.memoizedProps;try{o.nodeValue=u}catch(D){y0(a,a.return,D)}}break;case 3:if(ma(e,a),ya(a),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ce(e.containerInfo)}catch(D){y0(a,a.return,D)}break;case 4:ma(e,a),ya(a);break;case 13:ma(e,a),ya(a),o=a.child,o.flags&8192&&(u=o.memoizedState!==null,o.stateNode.isHidden=u,!u||o.alternate!==null&&o.alternate.memoizedState!==null||(ci=w0())),i&4&&Ps(a);break;case 22:if(O=n!==null&&n.memoizedState!==null,a.mode&1?(_0=(B=_0)||O,ma(e,a),_0=B):ma(e,a),ya(a),i&8192){if(B=a.memoizedState!==null,(a.stateNode.isHidden=B)&&!O&&(a.mode&1)!==0)for(Z=a,O=a.child;O!==null;){for(L=Z=O;Z!==null;){switch(T=Z,R=T.child,T.tag){case 0:case 11:case 14:case 15:Le(4,T,T.return);break;case 1:_1(T,T.return);var K=T.stateNode;if(typeof K.componentWillUnmount=="function"){i=T,n=T.return;try{e=i,K.props=e.memoizedProps,K.state=e.memoizedState,K.componentWillUnmount()}catch(D){y0(i,n,D)}}break;case 5:_1(T,T.return);break;case 22:if(T.memoizedState!==null){Ks(L);continue}}R!==null?(R.return=T,Z=R):Ks(L)}O=O.sibling}a:for(O=null,L=a;;){if(L.tag===5){if(O===null){O=L;try{o=L.stateNode,B?(u=o.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=L.stateNode,S=L.memoizedProps.style,l=S!=null&&S.hasOwnProperty("display")?S.display:null,m.style.display=m9("display",l))}catch(D){y0(a,a.return,D)}}}else if(L.tag===6){if(O===null)try{L.stateNode.nodeValue=B?"":L.memoizedProps}catch(D){y0(a,a.return,D)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===a)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===a)break a;for(;L.sibling===null;){if(L.return===null||L.return===a)break a;O===L&&(O=null),L=L.return}O===L&&(O=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:ma(e,a),ya(a),i&4&&Ps(a);break;case 21:break;default:ma(e,a),ya(a)}}function ya(a){var e=a.flags;if(e&2){try{a:{for(var n=a.return;n!==null;){if(Os(n)){var i=n;break a}n=n.return}throw Error(s(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(X1(o,""),i.flags&=-33);var u=Ls(a);oi(a,u,o);break;case 3:case 4:var l=i.stateNode.containerInfo,m=Ls(a);si(a,m,l);break;default:throw Error(s(161))}}catch(S){y0(a,a.return,S)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function $8(a,e,n){Z=a,xs(a)}function xs(a,e,n){for(var i=(a.mode&1)!==0;Z!==null;){var o=Z,u=o.child;if(o.tag===22&&i){var l=o.memoizedState!==null||Un;if(!l){var m=o.alternate,S=m!==null&&m.memoizedState!==null||_0;m=Un;var B=_0;if(Un=l,(_0=S)&&!B)for(Z=o;Z!==null;)l=Z,S=l.child,l.tag===22&&l.memoizedState!==null?Ds(o):S!==null?(S.return=l,Z=S):Ds(o);for(;u!==null;)Z=u,xs(u),u=u.sibling;Z=o,Un=m,_0=B}Zs(a)}else(o.subtreeFlags&8772)!==0&&u!==null?(u.return=o,Z=u):Zs(a)}}function Zs(a){for(;Z!==null;){var e=Z;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:_0||_n(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_0)if(n===null)i.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:da(e.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=e.updateQueue;u!==null&&Kt(e,u,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kt(e,l,n)}break;case 5:var m=e.stateNode;if(n===null&&e.flags&4){n=m;var S=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var B=e.alternate;if(B!==null){var O=B.memoizedState;if(O!==null){var L=O.dehydrated;L!==null&&ce(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}_0||e.flags&512&&ti(e)}catch(T){y0(e,e.return,T)}}if(e===a){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Ks(a){for(;Z!==null;){var e=Z;if(e===a){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Ds(a){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_n(4,e)}catch(S){y0(e,n,S)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var o=e.return;try{i.componentDidMount()}catch(S){y0(e,o,S)}}var u=e.return;try{ti(e)}catch(S){y0(e,u,S)}break;case 5:var l=e.return;try{ti(e)}catch(S){y0(e,l,S)}}}catch(S){y0(e,e.return,S)}if(e===a){Z=null;break}var m=e.sibling;if(m!==null){m.return=e.return,Z=m;break}Z=e.return}}var q8=Math.ceil,Fn=$.ReactCurrentDispatcher,ui=$.ReactCurrentOwner,Aa=$.ReactCurrentBatchConfig,t0=0,R0=null,T0=null,K0=0,ra=0,F1=za(0),I0=0,Ie=null,l1=0,Hn=0,Ai=0,Pe=null,J0=null,ci=0,H1=1/0,Ra=null,zn=!1,li=null,$a=null,Vn=!1,qa=null,Yn=0,Re=0,fi=null,Qn=-1,Jn=0;function H0(){return(t0&6)!==0?w0():Qn!==-1?Qn:Qn=w0()}function Xa(a){return(a.mode&1)===0?1:(t0&2)!==0&&K0!==0?K0&-K0:R8.transition!==null?(Jn===0&&(Jn=L9()),Jn):(a=f0,a!==0||(a=window.event,a=a===void 0?16:U9(a.type)),a)}function ha(a,e,n,i){if(50<Re)throw Re=0,fi=null,Error(s(185));te(a,n,i),((t0&2)===0||a!==R0)&&(a===R0&&((t0&2)===0&&(Hn|=n),I0===4&&a1(a,K0)),j0(a,i),n===1&&t0===0&&(e.mode&1)===0&&(H1=w0()+500,gn&&Ya()))}function j0(a,e){var n=a.callbackNode;Ru(a,e);var i=rn(a,a===R0?K0:0);if(i===0)n!==null&&v9(n),a.callbackNode=null,a.callbackPriority=0;else if(e=i&-i,a.callbackPriority!==e){if(n!=null&&v9(n),e===1)a.tag===0?P8(Us.bind(null,a)):Bt(Us.bind(null,a)),T8(function(){(t0&6)===0&&Ya()}),n=null;else{switch(I9(i)){case 1:n=z2;break;case 4:n=T9;break;case 16:n=Xe;break;case 536870912:n=O9;break;default:n=Xe}n=Js(n,ks.bind(null,a))}a.callbackPriority=e,a.callbackNode=n}}function ks(a,e){if(Qn=-1,Jn=0,(t0&6)!==0)throw Error(s(327));var n=a.callbackNode;if(z1()&&a.callbackNode!==n)return null;var i=rn(a,a===R0?K0:0);if(i===0)return null;if((i&30)!==0||(i&a.expiredLanes)!==0||e)e=jn(a,i);else{e=i;var o=t0;t0|=2;var u=Fs();(R0!==a||K0!==e)&&(Ra=null,H1=w0()+500,E1(a,e));do try{eA();break}catch(m){_s(a,m)}while(!0);Tr(),Fn.current=u,t0=o,T0!==null?e=0:(R0=null,K0=0,e=I0)}if(e!==0){if(e===2&&(o=V2(a),o!==0&&(i=o,e=Ei(a,o))),e===1)throw n=Ie,E1(a,0),a1(a,i),j0(a,w0()),n;if(e===6)a1(a,i);else{if(o=a.current.alternate,(i&30)===0&&!X8(o)&&(e=jn(a,i),e===2&&(u=V2(a),u!==0&&(i=u,e=Ei(a,u))),e===1))throw n=Ie,E1(a,0),a1(a,i),j0(a,w0()),n;switch(a.finishedWork=o,a.finishedLanes=i,e){case 0:case 1:throw Error(s(345));case 2:d1(a,J0,Ra);break;case 3:if(a1(a,i),(i&130023424)===i&&(e=ci+500-w0(),10<e)){if(rn(a,0)!==0)break;if(o=a.suspendedLanes,(o&i)!==i){H0(),a.pingedLanes|=a.suspendedLanes&o;break}a.timeoutHandle=Cr(d1.bind(null,a,J0,Ra),e);break}d1(a,J0,Ra);break;case 4:if(a1(a,i),(i&4194240)===i)break;for(e=a.eventTimes,o=-1;0<i;){var l=31-la(i);u=1<<l,l=e[l],l>o&&(o=l),i&=~u}if(i=o,i=w0()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q8(i/1960))-i,10<i){a.timeoutHandle=Cr(d1.bind(null,a,J0,Ra),i);break}d1(a,J0,Ra);break;case 5:d1(a,J0,Ra);break;default:throw Error(s(329))}}}return j0(a,w0()),a.callbackNode===n?ks.bind(null,a):null}function Ei(a,e){var n=Pe;return a.current.memoizedState.isDehydrated&&(E1(a,e).flags|=256),a=jn(a,e),a!==2&&(e=J0,J0=n,e!==null&&di(e)),a}function di(a){J0===null?J0=a:J0.push.apply(J0,a)}function X8(a){for(var e=a;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],u=o.getSnapshot;o=o.value;try{if(!fa(u(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function a1(a,e){for(e&=~Ai,e&=~Hn,a.suspendedLanes|=e,a.pingedLanes&=~e,a=a.expirationTimes;0<e;){var n=31-la(e),i=1<<n;a[n]=-1,e&=~i}}function Us(a){if((t0&6)!==0)throw Error(s(327));z1();var e=rn(a,0);if((e&1)===0)return j0(a,w0()),null;var n=jn(a,e);if(a.tag!==0&&n===2){var i=V2(a);i!==0&&(e=i,n=Ei(a,i))}if(n===1)throw n=Ie,E1(a,0),a1(a,e),j0(a,w0()),n;if(n===6)throw Error(s(345));return a.finishedWork=a.current.alternate,a.finishedLanes=e,d1(a,J0,Ra),j0(a,w0()),null}function pi(a,e){var n=t0;t0|=1;try{return a(e)}finally{t0=n,t0===0&&(H1=w0()+500,gn&&Ya())}}function f1(a){qa!==null&&qa.tag===0&&(t0&6)===0&&z1();var e=t0;t0|=1;var n=Aa.transition,i=f0;try{if(Aa.transition=null,f0=1,a)return a()}finally{f0=i,Aa.transition=n,t0=e,(t0&6)===0&&Ya()}}function mi(){ra=F1.current,S0(F1)}function E1(a,e){a.finishedWork=null,a.finishedLanes=0;var n=a.timeoutHandle;if(n!==-1&&(a.timeoutHandle=-1,v8(n)),T0!==null)for(n=T0.return;n!==null;){var i=n;switch(yr(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mn();break;case 3:k1(),S0(V0),S0(D0),Kr();break;case 5:xr(i);break;case 4:k1();break;case 13:S0(b0);break;case 19:S0(b0);break;case 10:Or(i.type._context);break;case 22:case 23:mi()}n=n.return}if(R0=a,T0=a=e1(a.current,null),K0=ra=e,I0=0,Ie=null,Ai=Hn=l1=0,J0=Pe=null,u1!==null){for(e=0;e<u1.length;e++)if(n=u1[e],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,u=n.pending;if(u!==null){var l=u.next;u.next=o,i.next=l}n.pending=i}u1=null}return a}function _s(a,e){do{var n=T0;try{if(Tr(),In.current=Zn,Pn){for(var i=g0.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Pn=!1}if(c1=0,P0=L0=g0=null,we=!1,Ge=0,ui.current=null,n===null||n.return===null){I0=1,Ie=e,T0=null;break}a:{var u=a,l=n.return,m=n,S=e;if(e=K0,m.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var B=S,O=m,L=O.tag;if((O.mode&1)===0&&(L===0||L===11||L===15)){var T=O.alternate;T?(O.updateQueue=T.updateQueue,O.memoizedState=T.memoizedState,O.lanes=T.lanes):(O.updateQueue=null,O.memoizedState=null)}var R=Es(l);if(R!==null){R.flags&=-257,ds(R,l,m,u,e),R.mode&1&&fs(u,B,e),e=R,S=B;var K=e.updateQueue;if(K===null){var D=new Set;D.add(S),e.updateQueue=D}else K.add(S);break a}else{if((e&1)===0){fs(u,B,e),hi();break a}S=Error(s(426))}}else if(M0&&m.mode&1){var G0=Es(l);if(G0!==null){(G0.flags&65536)===0&&(G0.flags|=256),ds(G0,l,m,u,e),Gr(U1(S,m));break a}}u=S=U1(S,m),I0!==4&&(I0=2),Pe===null?Pe=[u]:Pe.push(u),u=l;do{switch(u.tag){case 3:u.flags|=65536,e&=-e,u.lanes|=e;var b=cs(u,S,e);Zt(u,b);break a;case 1:m=S;var C=u.type,g=u.stateNode;if((u.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($a===null||!$a.has(g)))){u.flags|=65536,e&=-e,u.lanes|=e;var I=ls(u,m,e);Zt(u,I);break a}}u=u.return}while(u!==null)}zs(n)}catch(k){e=k,T0===n&&n!==null&&(T0=n=n.return);continue}break}while(!0)}function Fs(){var a=Fn.current;return Fn.current=Zn,a===null?Zn:a}function hi(){(I0===0||I0===3||I0===2)&&(I0=4),R0===null||(l1&268435455)===0&&(Hn&268435455)===0||a1(R0,K0)}function jn(a,e){var n=t0;t0|=2;var i=Fs();(R0!==a||K0!==e)&&(Ra=null,E1(a,e));do try{aA();break}catch(o){_s(a,o)}while(!0);if(Tr(),t0=n,Fn.current=i,T0!==null)throw Error(s(261));return R0=null,K0=0,I0}function aA(){for(;T0!==null;)Hs(T0)}function eA(){for(;T0!==null&&!Bu();)Hs(T0)}function Hs(a){var e=Qs(a.alternate,a,ra);a.memoizedProps=a.pendingProps,e===null?zs(a):T0=e,ui.current=null}function zs(a){var e=a;do{var n=e.alternate;if(a=e.return,(e.flags&32768)===0){if(n=Y8(n,e,ra),n!==null){T0=n;return}}else{if(n=Q8(n,e),n!==null){n.flags&=32767,T0=n;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{I0=6,T0=null;return}}if(e=e.sibling,e!==null){T0=e;return}T0=e=a}while(e!==null);I0===0&&(I0=5)}function d1(a,e,n){var i=f0,o=Aa.transition;try{Aa.transition=null,f0=1,nA(a,e,n,i)}finally{Aa.transition=o,f0=i}return null}function nA(a,e,n,i){do z1();while(qa!==null);if((t0&6)!==0)throw Error(s(327));n=a.finishedWork;var o=a.finishedLanes;if(n===null)return null;if(a.finishedWork=null,a.finishedLanes=0,n===a.current)throw Error(s(177));a.callbackNode=null,a.callbackPriority=0;var u=n.lanes|n.childLanes;if(xu(a,u),a===R0&&(T0=R0=null,K0=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vn||(Vn=!0,Js(Xe,function(){return z1(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Aa.transition,Aa.transition=null;var l=f0;f0=1;var m=t0;t0|=4,ui.current=null,j8(a,n),Rs(n,a),b8(hr),on=!!mr,hr=mr=null,a.current=n,$8(n),wu(),t0=m,f0=l,Aa.transition=u}else a.current=n;if(Vn&&(Vn=!1,qa=a,Yn=o),u=a.pendingLanes,u===0&&($a=null),Tu(n.stateNode),j0(a,w0()),e!==null)for(i=a.onRecoverableError,n=0;n<e.length;n++)o=e[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(zn)throw zn=!1,a=li,li=null,a;return(Yn&1)!==0&&a.tag!==0&&z1(),u=a.pendingLanes,(u&1)!==0?a===fi?Re++:(Re=0,fi=a):Re=0,Ya(),null}function z1(){if(qa!==null){var a=I9(Yn),e=Aa.transition,n=f0;try{if(Aa.transition=null,f0=16>a?16:a,qa===null)var i=!1;else{if(a=qa,qa=null,Yn=0,(t0&6)!==0)throw Error(s(331));var o=t0;for(t0|=4,Z=a.current;Z!==null;){var u=Z,l=u.child;if((Z.flags&16)!==0){var m=u.deletions;if(m!==null){for(var S=0;S<m.length;S++){var B=m[S];for(Z=B;Z!==null;){var O=Z;switch(O.tag){case 0:case 11:case 15:Le(8,O,u)}var L=O.child;if(L!==null)L.return=O,Z=L;else for(;Z!==null;){O=Z;var T=O.sibling,R=O.return;if(Ts(O),O===B){Z=null;break}if(T!==null){T.return=R,Z=T;break}Z=R}}}var K=u.alternate;if(K!==null){var D=K.child;if(D!==null){K.child=null;do{var G0=D.sibling;D.sibling=null,D=G0}while(D!==null)}}Z=u}}if((u.subtreeFlags&2064)!==0&&l!==null)l.return=u,Z=l;else a:for(;Z!==null;){if(u=Z,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Le(9,u,u.return)}var b=u.sibling;if(b!==null){b.return=u.return,Z=b;break a}Z=u.return}}var C=a.current;for(Z=C;Z!==null;){l=Z;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,Z=g;else a:for(l=C;Z!==null;){if(m=Z,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:_n(9,m)}}catch(k){y0(m,m.return,k)}if(m===l){Z=null;break a}var I=m.sibling;if(I!==null){I.return=m.return,Z=I;break a}Z=m.return}}if(t0=o,Ya(),Ma&&typeof Ma.onPostCommitFiberRoot=="function")try{Ma.onPostCommitFiberRoot(an,a)}catch{}i=!0}return i}finally{f0=n,Aa.transition=e}}return!1}function Vs(a,e,n){e=U1(n,e),e=cs(a,e,1),a=Ja(a,e,1),e=H0(),a!==null&&(te(a,1,e),j0(a,e))}function y0(a,e,n){if(a.tag===3)Vs(a,a,n);else for(;e!==null;){if(e.tag===3){Vs(e,a,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))){a=U1(n,a),a=ls(e,a,1),e=Ja(e,a,1),a=H0(),e!==null&&(te(e,1,a),j0(e,a));break}}e=e.return}}function rA(a,e,n){var i=a.pingCache;i!==null&&i.delete(e),e=H0(),a.pingedLanes|=a.suspendedLanes&n,R0===a&&(K0&n)===n&&(I0===4||I0===3&&(K0&130023424)===K0&&500>w0()-ci?E1(a,0):Ai|=n),j0(a,e)}function Ys(a,e){e===0&&((a.mode&1)===0?e=1:(e=nn,nn<<=1,(nn&130023424)===0&&(nn=4194304)));var n=H0();a=La(a,e),a!==null&&(te(a,e,n),j0(a,n))}function iA(a){var e=a.memoizedState,n=0;e!==null&&(n=e.retryLane),Ys(a,n)}function tA(a,e){var n=0;switch(a.tag){case 13:var i=a.stateNode,o=a.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=a.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(e),Ys(a,n)}var Qs;Qs=function(a,e,n){if(a!==null)if(a.memoizedProps!==e.pendingProps||V0.current)Q0=!0;else{if((a.lanes&n)===0&&(e.flags&128)===0)return Q0=!1,V8(a,e,n);Q0=(a.flags&131072)!==0}else Q0=!1,M0&&(e.flags&1048576)!==0&&wt(e,yn,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kn(a,e),a=e.pendingProps;var o=I1(e,D0.current);D1(e,n),o=Ur(null,e,i,a,o,n);var u=_r();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Y0(i)?(u=!0,bn(e)):u=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pr(e),o.updater=Kn,e.stateNode=o,o._reactInternals=e,Qr(e,i,a,n),e=qr(null,e,i,!0,u,n)):(e.tag=0,M0&&u&&Nr(e),F0(null,e,o,n),e=e.child),e;case 16:i=e.elementType;a:{switch(kn(a,e),a=e.pendingProps,o=i._init,i=o(i._payload),e.type=i,o=e.tag=oA(i),a=da(i,a),o){case 0:e=$r(null,e,i,a,n);break a;case 1:e=Ws(null,e,i,a,n);break a;case 11:e=ps(null,e,i,a,n);break a;case 14:e=ms(null,e,i,da(i.type,a),n);break a}throw Error(s(306,i,""))}return e;case 0:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:da(i,o),$r(a,e,i,o,n);case 1:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:da(i,o),Ws(a,e,i,o,n);case 3:a:{if(Ms(e),a===null)throw Error(s(387));i=e.pendingProps,u=e.memoizedState,o=u.element,xt(a,e),On(e,i,null,n);var l=e.memoizedState;if(i=l.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){o=U1(Error(s(423)),e),e=bs(a,e,i,n,o);break a}else if(i!==o){o=U1(Error(s(424)),e),e=bs(a,e,i,n,o);break a}else for(na=Ha(e.stateNode.containerInfo.firstChild),ea=e,M0=!0,Ea=null,n=Pt(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(x1(),i===o){e=Pa(a,e,n);break a}F0(a,e,i,n)}e=e.child}return e;case 5:return Dt(e),a===null&&wr(e),i=e.type,o=e.pendingProps,u=a!==null?a.memoizedProps:null,l=o.children,Sr(i,o)?l=null:u!==null&&Sr(i,u)&&(e.flags|=32),Cs(a,e),F0(a,e,l,n),e.child;case 6:return a===null&&wr(e),null;case 13:return gs(a,e,n);case 4:return Rr(e,e.stateNode.containerInfo),i=e.pendingProps,a===null?e.child=Z1(e,null,i,n):F0(a,e,i,n),e.child;case 11:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:da(i,o),ps(a,e,i,o,n);case 7:return F0(a,e,e.pendingProps,n),e.child;case 8:return F0(a,e,e.pendingProps.children,n),e.child;case 12:return F0(a,e,e.pendingProps.children,n),e.child;case 10:a:{if(i=e.type._context,o=e.pendingProps,u=e.memoizedProps,l=o.value,m0(Gn,i._currentValue),i._currentValue=l,u!==null)if(fa(u.value,l)){if(u.children===o.children&&!V0.current){e=Pa(a,e,n);break a}}else for(u=e.child,u!==null&&(u.return=e);u!==null;){var m=u.dependencies;if(m!==null){l=u.child;for(var S=m.firstContext;S!==null;){if(S.context===i){if(u.tag===1){S=Ia(-1,n&-n),S.tag=2;var B=u.updateQueue;if(B!==null){B=B.shared;var O=B.pending;O===null?S.next=S:(S.next=O.next,O.next=S),B.pending=S}}u.lanes|=n,S=u.alternate,S!==null&&(S.lanes|=n),Lr(u.return,n,e),m.lanes|=n;break}S=S.next}}else if(u.tag===10)l=u.type===e.type?null:u.child;else if(u.tag===18){if(l=u.return,l===null)throw Error(s(341));l.lanes|=n,m=l.alternate,m!==null&&(m.lanes|=n),Lr(l,n,e),l=u.sibling}else l=u.child;if(l!==null)l.return=u;else for(l=u;l!==null;){if(l===e){l=null;break}if(u=l.sibling,u!==null){u.return=l.return,l=u;break}l=l.return}u=l}F0(a,e,o.children,n),e=e.child}return e;case 9:return o=e.type,i=e.pendingProps.children,D1(e,n),o=oa(o),i=i(o),e.flags|=1,F0(a,e,i,n),e.child;case 14:return i=e.type,o=da(i,e.pendingProps),o=da(i.type,o),ms(a,e,i,o,n);case 15:return hs(a,e,e.type,e.pendingProps,n);case 17:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:da(i,o),kn(a,e),e.tag=1,Y0(i)?(a=!0,bn(e)):a=!1,D1(e,n),us(e,i,o),Qr(e,i,o,n),qr(null,e,i,!0,a,n);case 19:return ys(a,e,n);case 22:return Ss(a,e,n)}throw Error(s(156,e.tag))};function Js(a,e){return G9(a,e)}function sA(a,e,n,i){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(a,e,n,i){return new sA(a,e,n,i)}function Si(a){return a=a.prototype,!(!a||!a.isReactComponent)}function oA(a){if(typeof a=="function")return Si(a)?1:0;if(a!=null){if(a=a.$$typeof,a===F)return 11;if(a===O0)return 14}return 2}function e1(a,e){var n=a.alternate;return n===null?(n=ca(a.tag,e,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=e,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&14680064,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n}function $n(a,e,n,i,o,u){var l=2;if(i=a,typeof a=="function")Si(a)&&(l=1);else if(typeof a=="string")l=5;else a:switch(a){case n0:return p1(n.children,o,u,e);case A0:l=8,o|=8;break;case B0:return a=ca(12,n,e,o|2),a.elementType=B0,a.lanes=u,a;case E0:return a=ca(13,n,e,o),a.elementType=E0,a.lanes=u,a;case p0:return a=ca(19,n,e,o),a.elementType=p0,a.lanes=u,a;case i0:return qn(n,o,u,e);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case N0:l=10;break a;case C0:l=9;break a;case F:l=11;break a;case O0:l=14;break a;case v0:l=16,i=null;break a}throw Error(s(130,a==null?a:typeof a,""))}return e=ca(l,n,e,o),e.elementType=a,e.type=i,e.lanes=u,e}function p1(a,e,n,i){return a=ca(7,a,i,e),a.lanes=n,a}function qn(a,e,n,i){return a=ca(22,a,i,e),a.elementType=i0,a.lanes=n,a.stateNode={isHidden:!1},a}function Ci(a,e,n){return a=ca(6,a,null,e),a.lanes=n,a}function Wi(a,e,n){return e=ca(4,a.children!==null?a.children:[],a.key,e),e.lanes=n,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}function uA(a,e,n,i,o){this.tag=e,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Y2(0),this.expirationTimes=Y2(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Y2(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mi(a,e,n,i,o,u,l,m,S){return a=new uA(a,e,n,m,S),e===1?(e=1,u===!0&&(e|=8)):e=0,u=ca(3,null,null,e),a.current=u,u.stateNode=a,u.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pr(u),a}function AA(a,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:i==null?null:""+i,children:a,containerInfo:e,implementation:n}}function js(a){if(!a)return Va;a=a._reactInternals;a:{if(r1(a)!==a||a.tag!==1)throw Error(s(170));var e=a;do{switch(e.tag){case 3:e=e.stateNode.context;break a;case 1:if(Y0(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break a}}e=e.return}while(e!==null);throw Error(s(171))}if(a.tag===1){var n=a.type;if(Y0(n))return Nt(a,n,e)}return e}function $s(a,e,n,i,o,u,l,m,S){return a=Mi(n,i,!0,a,o,u,l,m,S),a.context=js(null),n=a.current,i=H0(),o=Xa(n),u=Ia(i,o),u.callback=e??null,Ja(n,u,o),a.current.lanes=o,te(a,o,i),j0(a,i),a}function Xn(a,e,n,i){var o=e.current,u=H0(),l=Xa(o);return n=js(n),e.context===null?e.context=n:e.pendingContext=n,e=Ia(u,l),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=Ja(o,e,l),a!==null&&(ha(a,o,l,u),Tn(a,o,l)),l}function a2(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function qs(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<e?n:e}}function bi(a,e){qs(a,e),(a=a.alternate)&&qs(a,e)}function cA(){return null}var Xs=typeof reportError=="function"?reportError:function(a){console.error(a)};function gi(a){this._internalRoot=a}e2.prototype.render=gi.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(s(409));Xn(a,e,null,null)},e2.prototype.unmount=gi.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;f1(function(){Xn(null,a,null,null)}),e[Ga]=null}};function e2(a){this._internalRoot=a}e2.prototype.unstable_scheduleHydration=function(a){if(a){var e=x9();a={blockedOn:null,target:a,priority:e};for(var n=0;n<Ua.length&&e!==0&&e<Ua[n].priority;n++);Ua.splice(n,0,a),n===0&&D9(a)}};function Ni(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function n2(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function ao(){}function lA(a,e,n,i,o){if(o){if(typeof i=="function"){var u=i;i=function(){var B=a2(l);u.call(B)}}var l=$s(e,i,a,0,null,!1,!1,"",ao);return a._reactRootContainer=l,a[Ga]=l.current,Ce(a.nodeType===8?a.parentNode:a),f1(),l}for(;o=a.lastChild;)a.removeChild(o);if(typeof i=="function"){var m=i;i=function(){var B=a2(S);m.call(B)}}var S=Mi(a,0,!1,null,null,!1,!1,"",ao);return a._reactRootContainer=S,a[Ga]=S.current,Ce(a.nodeType===8?a.parentNode:a),f1(function(){Xn(e,S,n,i)}),S}function r2(a,e,n,i,o){var u=n._reactRootContainer;if(u){var l=u;if(typeof o=="function"){var m=o;o=function(){var S=a2(l);m.call(S)}}Xn(e,l,a,o)}else l=lA(n,e,a,o,i);return a2(l)}P9=function(a){switch(a.tag){case 3:var e=a.stateNode;if(e.current.memoizedState.isDehydrated){var n=ie(e.pendingLanes);n!==0&&(Q2(e,n|1),j0(e,w0()),(t0&6)===0&&(H1=w0()+500,Ya()))}break;case 13:f1(function(){var i=La(a,1);if(i!==null){var o=H0();ha(i,a,1,o)}}),bi(a,1)}},J2=function(a){if(a.tag===13){var e=La(a,134217728);if(e!==null){var n=H0();ha(e,a,134217728,n)}bi(a,134217728)}},R9=function(a){if(a.tag===13){var e=Xa(a),n=La(a,e);if(n!==null){var i=H0();ha(n,a,e,i)}bi(a,e)}},x9=function(){return f0},Z9=function(a,e){var n=f0;try{return f0=a,e()}finally{f0=n}},U2=function(a,e,n){switch(e){case"input":if(I2(a,n),e=n.name,n.type==="radio"&&e!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==a&&i.form===a.form){var o=Wn(i);if(!o)throw Error(s(90));o9(i),I2(i,o)}}}break;case"textarea":f9(a,n);break;case"select":e=n.value,e!=null&&M1(a,!!n.multiple,e,!1)}},M9=pi,b9=f1;var fA={usingClientEntryPoint:!1,Events:[be,O1,Wn,C9,W9,pi]},xe={findFiberByHostInstance:i1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:xe.bundleType,version:xe.version,rendererPackageName:xe.rendererPackageName,rendererConfig:xe.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=B9(a),a===null?null:a.stateNode},findFiberByHostInstance:xe.findFiberByHostInstance||cA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var i2=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!i2.isDisabled&&i2.supportsFiber)try{an=i2.inject(EA),Ma=i2}catch{}}return $0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fA,$0.createPortal=function(a,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ni(e))throw Error(s(200));return AA(a,e,null,n)},$0.createRoot=function(a,e){if(!Ni(a))throw Error(s(299));var n=!1,i="",o=Xs;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Mi(a,1,!1,null,null,n,!1,i,o),a[Ga]=e.current,Ce(a.nodeType===8?a.parentNode:a),new gi(e)},$0.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(s(188)):(a=Object.keys(a).join(","),Error(s(268,a)));return a=B9(e),a=a===null?null:a.stateNode,a},$0.flushSync=function(a){return f1(a)},$0.hydrate=function(a,e,n){if(!n2(e))throw Error(s(200));return r2(null,a,e,!0,n)},$0.hydrateRoot=function(a,e,n){if(!Ni(a))throw Error(s(405));var i=n!=null&&n.hydratedSources||null,o=!1,u="",l=Xs;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=$s(e,null,a,1,n??null,o,!1,u,l),a[Ga]=e.current,Ce(a),i)for(a=0;a<i.length;a++)n=i[a],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new e2(e)},$0.render=function(a,e,n){if(!n2(e))throw Error(s(200));return r2(null,a,e,!1,n)},$0.unmountComponentAtNode=function(a){if(!n2(a))throw Error(s(40));return a._reactRootContainer?(f1(function(){r2(null,null,a,!1,function(){a._reactRootContainer=null,a[Ga]=null})}),!0):!1},$0.unstable_batchedUpdates=pi,$0.unstable_renderSubtreeIntoContainer=function(a,e,n,i){if(!n2(n))throw Error(s(200));if(a==null||a._reactInternals===void 0)throw Error(s(38));return r2(a,e,n,!1,i)},$0.version="18.3.1-next-f1338f8080-20240426",$0}var uo;function MA(){if(uo)return wi.exports;uo=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wi.exports=WA(),wi.exports}var Ao;function bA(){if(Ao)return t2;Ao=1;var r=MA();return t2.createRoot=r.createRoot,t2.hydrateRoot=r.hydrateRoot,t2}var gA=bA(),z0=ji();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,A)=>A?A.toUpperCase():s.toLowerCase()),co=r=>{const t=yA(r);return t.charAt(0).toUpperCase()+t.slice(1)},Ko=(...r)=>r.filter((t,s,A)=>!!t&&t.trim()!==""&&A.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=z0.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:A,className:c="",children:E,iconNode:f,...d},p)=>z0.createElement("svg",{ref:p,...BA,width:t,height:t,stroke:r,strokeWidth:A?Number(s)*24/Number(t):s,className:Ko("lucide",c),...d},[...f.map(([h,W])=>z0.createElement(h,W)),...Array.isArray(E)?E:[E]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=(r,t)=>{const s=z0.forwardRef(({className:A,...c},E)=>z0.createElement(wA,{ref:E,iconNode:t,className:Ko(`lucide-${NA(co(r))}`,`lucide-${r}`,A),...c}));return s.displayName=co(r),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vA=Do("rotate-ccw",GA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],ko=Do("trending-up",TA),s2=`year,country,lowest_1,top_01,bottom_50,top_10,top_1,region,region2,shortname,decade
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
2023,QD,0,0.0015,0.0983,0.5168,0.2078,,,Asia,2020`,o2=[{year:1980,country:"US",top_01:.35,bottom_50:.21,top_10:.33,top_1:.1,region:"Americas",region2:"North America",shortname:"United States",decade:1980},{year:1990,country:"US",top_01:.31,bottom_50:.17,top_10:.41,top_1:.14,region:"Americas",region2:"North America",shortname:"United States",decade:1990},{year:2e3,country:"US",top_01:.27,bottom_50:.13,top_10:.49,top_1:.19,region:"Americas",region2:"North America",shortname:"United States",decade:2e3},{year:2010,country:"US",top_01:.23,bottom_50:.11,top_10:.55,top_1:.23,region:"Americas",region2:"North America",shortname:"United States",decade:2010},{year:2020,country:"US",top_01:.21,bottom_50:.09,top_10:.59,top_1:.27,region:"Americas",region2:"North America",shortname:"United States",decade:2020},{year:2024,country:"US",top_01:.2,bottom_50:.08,top_10:.61,top_1:.29,region:"Americas",region2:"North America",shortname:"United States",decade:2020}],OA=()=>{try{if(console.log("Loading CSV data..."),console.log("CSV string length:",s2.length),!s2||s2.trim()==="")return console.warn("CSV string is empty, using fallback dataset"),o2;const r=s2.trim().split(`
`),t=r[0].split(",").map(f=>f.trim());console.log("CSV headers:",t),console.log("Total CSV lines:",r.length);const s=r.slice(1).map(f=>{const d=f.split(","),p={};return t.forEach((h,W)=>{var y;p[h]=((y=d[W])==null?void 0:y.trim())||""}),p});if(console.log("Parsed CSV rows:",s.length),!s||s.length===0)return console.warn("CSV parsing returned empty data, using fallback"),o2;const A=s.map((f,d)=>{try{if(!f.year||!f.country||f.top_01===void 0||f.bottom_50===void 0||f.top_10===void 0||f.top_1===void 0)return console.warn(`Skipping row ${d} due to missing required fields:`,f),null;const p={year:parseInt(f.year),country:f.country,top_01:parseFloat(f.top_01),bottom_50:parseFloat(f.bottom_50),top_10:parseFloat(f.top_10),top_1:parseFloat(f.top_1),region:f.region||"",region2:f.region2||"",shortname:f.shortname||"",decade:parseInt(f.decade)};return d<5&&console.log(`Row ${d}:`,{original:f,mapped:p}),p}catch(p){return console.warn(`Error parsing row ${d}:`,p,f),null}}).filter(f=>f!==null);if(A.length===0)return console.warn("No valid data rows after parsing, using fallback"),o2;const c=Array.from(new Set(A.map(f=>f.country))),E=Array.from(new Set(A.map(f=>f.region2)));return console.log(`Successfully loaded ${A.length} data rows from CSV`),console.log("Unique countries found:",c.slice(0,20),`... (${c.length} total)`),console.log("Unique regions found:",E),A}catch(r){return console.error("Error loading CSV data, using fallback:",r),o2}},G2=OA(),Uo=()=>{const r=new Map;G2.forEach(s=>{r.set(s.country,s.shortname)});const t=Array.from(r.entries()).map(([s,A])=>({code:s,name:A})).sort((s,A)=>s.name.localeCompare(A.name));return console.log("getCountries() returning:",t.length,"countries"),console.log("First 10 countries:",t.slice(0,10)),t},LA=()=>{const r=new Set;G2.forEach(s=>{r.add(s.region2)});const t=Array.from(r).sort();return console.log("getRegions() returning:",t),t},lo=r=>{if(r==="All")return Uo();const t=new Map;G2.filter(A=>A.region2===r).forEach(A=>{t.set(A.country,A.shortname)});const s=Array.from(t.entries()).map(([A,c])=>({code:A,name:c})).sort((A,c)=>A.name.localeCompare(c.name));return console.log(`getCountriesByRegion('${r}') returning:`,s.length,"countries"),s},IA=(r,t)=>{console.log("filterData called with:",{country:r,region:t});let s=G2;return r&&r!=="All"&&(s=s.filter(A=>A.country===r),console.log(`Filtered by country ${r}:`,s.length,"rows")),t&&t!=="All"&&(s=s.filter(A=>A.region2===t),console.log(`Filtered by region ${t}:`,s.length,"rows")),s};function PA({filters:r,setFilters:t}){Uo();const s=LA(),A=lo(r.region),c=f=>{const d=lo(f),h=d.some(W=>W.code===r.country)?r.country:d.length>0?d[0].code:"All";t({...r,region:f,country:h})},E=()=>{t({yAxis:"Income Share",incomeType:"Factor Income",country:"All",region:"All"})};return _.jsx("div",{className:"mb-4 sm:mb-6",children:_.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs text-gray-400 mb-2 uppercase tracking-wide",children:"Region"}),_.jsxs("select",{value:r.region,onChange:f=>c(f.target.value),className:"w-full bg-[#020b0c] border border-[#0a6167] rounded px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-10",children:[_.jsx("option",{value:"All",children:"All Regions"}),s.map(f=>_.jsx("option",{value:f,children:f},f))]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs text-gray-400 mb-2 uppercase tracking-wide",children:"Country"}),_.jsxs("select",{value:r.country,onChange:f=>t({...r,country:f.target.value}),className:"w-full bg-[#020b0c] border border-[#0a6167] rounded px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-10",children:[_.jsx("option",{value:"All",children:"All Countries"}),A.map(f=>_.jsx("option",{value:f.code,children:f.name},f.code))]})]}),_.jsx("div",{className:"col-span-1 sm:col-span-2 lg:col-span-2 flex items-end",children:_.jsxs("button",{onClick:E,className:"w-full sm:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 bg-[#020b0c] border border-[#0a6167] rounded hover:bg-[#0a6167]/10 transition-colors flex items-center justify-center sm:justify-start gap-1.5 min-h-10",children:[_.jsx(vA,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),_.jsx("span",{children:"Reset"})]})})]})})}function f2(r,t){return r==null||t==null?NaN:r<t?-1:r>t?1:r>=t?0:NaN}function RA(r,t){return r==null||t==null?NaN:t<r?-1:t>r?1:t>=r?0:NaN}function $i(r){let t,s,A;r.length!==2?(t=f2,s=(d,p)=>f2(r(d),p),A=(d,p)=>r(d)-p):(t=r===f2||r===RA?r:xA,s=r,A=r);function c(d,p,h=0,W=d.length){if(h<W){if(t(p,p)!==0)return W;do{const y=h+W>>>1;s(d[y],p)<0?h=y+1:W=y}while(h<W)}return h}function E(d,p,h=0,W=d.length){if(h<W){if(t(p,p)!==0)return W;do{const y=h+W>>>1;s(d[y],p)<=0?h=y+1:W=y}while(h<W)}return h}function f(d,p,h=0,W=d.length){const y=c(d,p,h,W-1);return y>h&&A(d[y-1],p)>-A(d[y],p)?y-1:y}return{left:c,center:f,right:E}}function xA(){return 0}function ZA(r){return r===null?NaN:+r}const KA=$i(f2),DA=KA.right;$i(ZA).center;const kA=Math.sqrt(50),UA=Math.sqrt(10),_A=Math.sqrt(2);function m2(r,t,s){const A=(t-r)/Math.max(0,s),c=Math.floor(Math.log10(A)),E=A/Math.pow(10,c),f=E>=kA?10:E>=UA?5:E>=_A?2:1;let d,p,h;return c<0?(h=Math.pow(10,-c)/f,d=Math.round(r*h),p=Math.round(t*h),d/h<r&&++d,p/h>t&&--p,h=-h):(h=Math.pow(10,c)*f,d=Math.round(r/h),p=Math.round(t/h),d*h<r&&++d,p*h>t&&--p),p<d&&.5<=s&&s<2?m2(r,t,s*2):[d,p,h]}function FA(r,t,s){if(t=+t,r=+r,s=+s,!(s>0))return[];if(r===t)return[r];const A=t<r,[c,E,f]=A?m2(t,r,s):m2(r,t,s);if(!(E>=c))return[];const d=E-c+1,p=new Array(d);if(A)if(f<0)for(let h=0;h<d;++h)p[h]=(E-h)/-f;else for(let h=0;h<d;++h)p[h]=(E-h)*f;else if(f<0)for(let h=0;h<d;++h)p[h]=(c+h)/-f;else for(let h=0;h<d;++h)p[h]=(c+h)*f;return p}function Zi(r,t,s){return t=+t,r=+r,s=+s,m2(r,t,s)[2]}function HA(r,t,s){t=+t,r=+r,s=+s;const A=t<r,c=A?Zi(t,r,s):Zi(r,t,s);return(A?-1:1)*(c<0?1/-c:c)}function zA(r){return r}var Ti=1,Oi=2,Ki=3,De=4,fo=1e-6;function VA(r){return"translate("+r+",0)"}function YA(r){return"translate(0,"+r+")"}function QA(r){return t=>+r(t)}function JA(r,t){return t=Math.max(0,r.bandwidth()-t*2)/2,r.round()&&(t=Math.round(t)),s=>+r(s)+t}function jA(){return!this.__axis}function _o(r,t){var s=[],A=null,c=null,E=6,f=6,d=3,p=typeof window<"u"&&window.devicePixelRatio>1?0:.5,h=r===Ti||r===De?-1:1,W=r===De||r===Oi?"x":"y",y=r===Ti||r===Ki?VA:YA;function N(G){var J=A??(t.ticks?t.ticks.apply(t,s):t.domain()),U=c??(t.tickFormat?t.tickFormat.apply(t,s):zA),H=Math.max(E,0)+d,d0=t.range(),o0=+d0[0]+p,e0=+d0[d0.length-1]+p,$=(t.bandwidth?JA:QA)(t.copy(),p),u0=G.selection?G.selection():G,q=u0.selectAll(".domain").data([null]),n0=u0.selectAll(".tick").data(J,t).order(),A0=n0.exit(),B0=n0.enter().append("g").attr("class","tick"),N0=n0.select("line"),C0=n0.select("text");q=q.merge(q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),n0=n0.merge(B0),N0=N0.merge(B0.append("line").attr("stroke","currentColor").attr(W+"2",h*E)),C0=C0.merge(B0.append("text").attr("fill","currentColor").attr(W,h*H).attr("dy",r===Ti?"0em":r===Ki?"0.71em":"0.32em")),G!==u0&&(q=q.transition(G),n0=n0.transition(G),N0=N0.transition(G),C0=C0.transition(G),A0=A0.transition(G).attr("opacity",fo).attr("transform",function(F){return isFinite(F=$(F))?y(F+p):this.getAttribute("transform")}),B0.attr("opacity",fo).attr("transform",function(F){var E0=this.parentNode.__axis;return y((E0&&isFinite(E0=E0(F))?E0:$(F))+p)})),A0.remove(),q.attr("d",r===De||r===Oi?f?"M"+h*f+","+o0+"H"+p+"V"+e0+"H"+h*f:"M"+p+","+o0+"V"+e0:f?"M"+o0+","+h*f+"V"+p+"H"+e0+"V"+h*f:"M"+o0+","+p+"H"+e0),n0.attr("opacity",1).attr("transform",function(F){return y($(F)+p)}),N0.attr(W+"2",h*E),C0.attr(W,h*H).text(U),u0.filter(jA).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",r===Oi?"start":r===De?"end":"middle"),u0.each(function(){this.__axis=$})}return N.scale=function(G){return arguments.length?(t=G,N):t},N.ticks=function(){return s=Array.from(arguments),N},N.tickArguments=function(G){return arguments.length?(s=G==null?[]:Array.from(G),N):s.slice()},N.tickValues=function(G){return arguments.length?(A=G==null?null:Array.from(G),N):A&&A.slice()},N.tickFormat=function(G){return arguments.length?(c=G,N):c},N.tickSize=function(G){return arguments.length?(E=f=+G,N):E},N.tickSizeInner=function(G){return arguments.length?(E=+G,N):E},N.tickSizeOuter=function(G){return arguments.length?(f=+G,N):f},N.tickPadding=function(G){return arguments.length?(d=+G,N):d},N.offset=function(G){return arguments.length?(p=+G,N):p},N}function $A(r){return _o(Ki,r)}function qA(r){return _o(De,r)}var XA={value:()=>{}};function Fo(){for(var r=0,t=arguments.length,s={},A;r<t;++r){if(!(A=arguments[r]+"")||A in s||/[\s.]/.test(A))throw new Error("illegal type: "+A);s[A]=[]}return new E2(s)}function E2(r){this._=r}function ac(r,t){return r.trim().split(/^|\s+/).map(function(s){var A="",c=s.indexOf(".");if(c>=0&&(A=s.slice(c+1),s=s.slice(0,c)),s&&!t.hasOwnProperty(s))throw new Error("unknown type: "+s);return{type:s,name:A}})}E2.prototype=Fo.prototype={constructor:E2,on:function(r,t){var s=this._,A=ac(r+"",s),c,E=-1,f=A.length;if(arguments.length<2){for(;++E<f;)if((c=(r=A[E]).type)&&(c=ec(s[c],r.name)))return c;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++E<f;)if(c=(r=A[E]).type)s[c]=Eo(s[c],r.name,t);else if(t==null)for(c in s)s[c]=Eo(s[c],r.name,null);return this},copy:function(){var r={},t=this._;for(var s in t)r[s]=t[s].slice();return new E2(r)},call:function(r,t){if((c=arguments.length-2)>0)for(var s=new Array(c),A=0,c,E;A<c;++A)s[A]=arguments[A+2];if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(E=this._[r],A=0,c=E.length;A<c;++A)E[A].value.apply(t,s)},apply:function(r,t,s){if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(var A=this._[r],c=0,E=A.length;c<E;++c)A[c].value.apply(t,s)}};function ec(r,t){for(var s=0,A=r.length,c;s<A;++s)if((c=r[s]).name===t)return c.value}function Eo(r,t,s){for(var A=0,c=r.length;A<c;++A)if(r[A].name===t){r[A]=XA,r=r.slice(0,A).concat(r.slice(A+1));break}return s!=null&&r.push({name:t,value:s}),r}var Di="http://www.w3.org/1999/xhtml";const po={svg:"http://www.w3.org/2000/svg",xhtml:Di,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function v2(r){var t=r+="",s=t.indexOf(":");return s>=0&&(t=r.slice(0,s))!=="xmlns"&&(r=r.slice(s+1)),po.hasOwnProperty(t)?{space:po[t],local:r}:r}function nc(r){return function(){var t=this.ownerDocument,s=this.namespaceURI;return s===Di&&t.documentElement.namespaceURI===Di?t.createElement(r):t.createElementNS(s,r)}}function rc(r){return function(){return this.ownerDocument.createElementNS(r.space,r.local)}}function Ho(r){var t=v2(r);return(t.local?rc:nc)(t)}function ic(){}function qi(r){return r==null?ic:function(){return this.querySelector(r)}}function tc(r){typeof r!="function"&&(r=qi(r));for(var t=this._groups,s=t.length,A=new Array(s),c=0;c<s;++c)for(var E=t[c],f=E.length,d=A[c]=new Array(f),p,h,W=0;W<f;++W)(p=E[W])&&(h=r.call(p,p.__data__,W,E))&&("__data__"in p&&(h.__data__=p.__data__),d[W]=h);return new ia(A,this._parents)}function sc(r){return r==null?[]:Array.isArray(r)?r:Array.from(r)}function oc(){return[]}function zo(r){return r==null?oc:function(){return this.querySelectorAll(r)}}function uc(r){return function(){return sc(r.apply(this,arguments))}}function Ac(r){typeof r=="function"?r=uc(r):r=zo(r);for(var t=this._groups,s=t.length,A=[],c=[],E=0;E<s;++E)for(var f=t[E],d=f.length,p,h=0;h<d;++h)(p=f[h])&&(A.push(r.call(p,p.__data__,h,f)),c.push(p));return new ia(A,c)}function Vo(r){return function(){return this.matches(r)}}function Yo(r){return function(t){return t.matches(r)}}var cc=Array.prototype.find;function lc(r){return function(){return cc.call(this.children,r)}}function fc(){return this.firstElementChild}function Ec(r){return this.select(r==null?fc:lc(typeof r=="function"?r:Yo(r)))}var dc=Array.prototype.filter;function pc(){return Array.from(this.children)}function mc(r){return function(){return dc.call(this.children,r)}}function hc(r){return this.selectAll(r==null?pc:mc(typeof r=="function"?r:Yo(r)))}function Sc(r){typeof r!="function"&&(r=Vo(r));for(var t=this._groups,s=t.length,A=new Array(s),c=0;c<s;++c)for(var E=t[c],f=E.length,d=A[c]=[],p,h=0;h<f;++h)(p=E[h])&&r.call(p,p.__data__,h,E)&&d.push(p);return new ia(A,this._parents)}function Qo(r){return new Array(r.length)}function Cc(){return new ia(this._enter||this._groups.map(Qo),this._parents)}function h2(r,t){this.ownerDocument=r.ownerDocument,this.namespaceURI=r.namespaceURI,this._next=null,this._parent=r,this.__data__=t}h2.prototype={constructor:h2,appendChild:function(r){return this._parent.insertBefore(r,this._next)},insertBefore:function(r,t){return this._parent.insertBefore(r,t)},querySelector:function(r){return this._parent.querySelector(r)},querySelectorAll:function(r){return this._parent.querySelectorAll(r)}};function Wc(r){return function(){return r}}function Mc(r,t,s,A,c,E){for(var f=0,d,p=t.length,h=E.length;f<h;++f)(d=t[f])?(d.__data__=E[f],A[f]=d):s[f]=new h2(r,E[f]);for(;f<p;++f)(d=t[f])&&(c[f]=d)}function bc(r,t,s,A,c,E,f){var d,p,h=new Map,W=t.length,y=E.length,N=new Array(W),G;for(d=0;d<W;++d)(p=t[d])&&(N[d]=G=f.call(p,p.__data__,d,t)+"",h.has(G)?c[d]=p:h.set(G,p));for(d=0;d<y;++d)G=f.call(r,E[d],d,E)+"",(p=h.get(G))?(A[d]=p,p.__data__=E[d],h.delete(G)):s[d]=new h2(r,E[d]);for(d=0;d<W;++d)(p=t[d])&&h.get(N[d])===p&&(c[d]=p)}function gc(r){return r.__data__}function Nc(r,t){if(!arguments.length)return Array.from(this,gc);var s=t?bc:Mc,A=this._parents,c=this._groups;typeof r!="function"&&(r=Wc(r));for(var E=c.length,f=new Array(E),d=new Array(E),p=new Array(E),h=0;h<E;++h){var W=A[h],y=c[h],N=y.length,G=yc(r.call(W,W&&W.__data__,h,A)),J=G.length,U=d[h]=new Array(J),H=f[h]=new Array(J),d0=p[h]=new Array(N);s(W,y,U,H,d0,G,t);for(var o0=0,e0=0,$,u0;o0<J;++o0)if($=U[o0]){for(o0>=e0&&(e0=o0+1);!(u0=H[e0])&&++e0<J;);$._next=u0||null}}return f=new ia(f,A),f._enter=d,f._exit=p,f}function yc(r){return typeof r=="object"&&"length"in r?r:Array.from(r)}function Bc(){return new ia(this._exit||this._groups.map(Qo),this._parents)}function wc(r,t,s){var A=this.enter(),c=this,E=this.exit();return typeof r=="function"?(A=r(A),A&&(A=A.selection())):A=A.append(r+""),t!=null&&(c=t(c),c&&(c=c.selection())),s==null?E.remove():s(E),A&&c?A.merge(c).order():c}function Gc(r){for(var t=r.selection?r.selection():r,s=this._groups,A=t._groups,c=s.length,E=A.length,f=Math.min(c,E),d=new Array(c),p=0;p<f;++p)for(var h=s[p],W=A[p],y=h.length,N=d[p]=new Array(y),G,J=0;J<y;++J)(G=h[J]||W[J])&&(N[J]=G);for(;p<c;++p)d[p]=s[p];return new ia(d,this._parents)}function vc(){for(var r=this._groups,t=-1,s=r.length;++t<s;)for(var A=r[t],c=A.length-1,E=A[c],f;--c>=0;)(f=A[c])&&(E&&f.compareDocumentPosition(E)^4&&E.parentNode.insertBefore(f,E),E=f);return this}function Tc(r){r||(r=Oc);function t(y,N){return y&&N?r(y.__data__,N.__data__):!y-!N}for(var s=this._groups,A=s.length,c=new Array(A),E=0;E<A;++E){for(var f=s[E],d=f.length,p=c[E]=new Array(d),h,W=0;W<d;++W)(h=f[W])&&(p[W]=h);p.sort(t)}return new ia(c,this._parents).order()}function Oc(r,t){return r<t?-1:r>t?1:r>=t?0:NaN}function Lc(){var r=arguments[0];return arguments[0]=this,r.apply(null,arguments),this}function Ic(){return Array.from(this)}function Pc(){for(var r=this._groups,t=0,s=r.length;t<s;++t)for(var A=r[t],c=0,E=A.length;c<E;++c){var f=A[c];if(f)return f}return null}function Rc(){let r=0;for(const t of this)++r;return r}function xc(){return!this.node()}function Zc(r){for(var t=this._groups,s=0,A=t.length;s<A;++s)for(var c=t[s],E=0,f=c.length,d;E<f;++E)(d=c[E])&&r.call(d,d.__data__,E,c);return this}function Kc(r){return function(){this.removeAttribute(r)}}function Dc(r){return function(){this.removeAttributeNS(r.space,r.local)}}function kc(r,t){return function(){this.setAttribute(r,t)}}function Uc(r,t){return function(){this.setAttributeNS(r.space,r.local,t)}}function _c(r,t){return function(){var s=t.apply(this,arguments);s==null?this.removeAttribute(r):this.setAttribute(r,s)}}function Fc(r,t){return function(){var s=t.apply(this,arguments);s==null?this.removeAttributeNS(r.space,r.local):this.setAttributeNS(r.space,r.local,s)}}function Hc(r,t){var s=v2(r);if(arguments.length<2){var A=this.node();return s.local?A.getAttributeNS(s.space,s.local):A.getAttribute(s)}return this.each((t==null?s.local?Dc:Kc:typeof t=="function"?s.local?Fc:_c:s.local?Uc:kc)(s,t))}function Jo(r){return r.ownerDocument&&r.ownerDocument.defaultView||r.document&&r||r.defaultView}function zc(r){return function(){this.style.removeProperty(r)}}function Vc(r,t,s){return function(){this.style.setProperty(r,t,s)}}function Yc(r,t,s){return function(){var A=t.apply(this,arguments);A==null?this.style.removeProperty(r):this.style.setProperty(r,A,s)}}function Qc(r,t,s){return arguments.length>1?this.each((t==null?zc:typeof t=="function"?Yc:Vc)(r,t,s??"")):J1(this.node(),r)}function J1(r,t){return r.style.getPropertyValue(t)||Jo(r).getComputedStyle(r,null).getPropertyValue(t)}function Jc(r){return function(){delete this[r]}}function jc(r,t){return function(){this[r]=t}}function $c(r,t){return function(){var s=t.apply(this,arguments);s==null?delete this[r]:this[r]=s}}function qc(r,t){return arguments.length>1?this.each((t==null?Jc:typeof t=="function"?$c:jc)(r,t)):this.node()[r]}function jo(r){return r.trim().split(/^|\s+/)}function Xi(r){return r.classList||new $o(r)}function $o(r){this._node=r,this._names=jo(r.getAttribute("class")||"")}$o.prototype={add:function(r){var t=this._names.indexOf(r);t<0&&(this._names.push(r),this._node.setAttribute("class",this._names.join(" ")))},remove:function(r){var t=this._names.indexOf(r);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(r){return this._names.indexOf(r)>=0}};function qo(r,t){for(var s=Xi(r),A=-1,c=t.length;++A<c;)s.add(t[A])}function Xo(r,t){for(var s=Xi(r),A=-1,c=t.length;++A<c;)s.remove(t[A])}function Xc(r){return function(){qo(this,r)}}function a5(r){return function(){Xo(this,r)}}function e5(r,t){return function(){(t.apply(this,arguments)?qo:Xo)(this,r)}}function n5(r,t){var s=jo(r+"");if(arguments.length<2){for(var A=Xi(this.node()),c=-1,E=s.length;++c<E;)if(!A.contains(s[c]))return!1;return!0}return this.each((typeof t=="function"?e5:t?Xc:a5)(s,t))}function r5(){this.textContent=""}function i5(r){return function(){this.textContent=r}}function t5(r){return function(){var t=r.apply(this,arguments);this.textContent=t??""}}function s5(r){return arguments.length?this.each(r==null?r5:(typeof r=="function"?t5:i5)(r)):this.node().textContent}function o5(){this.innerHTML=""}function u5(r){return function(){this.innerHTML=r}}function A5(r){return function(){var t=r.apply(this,arguments);this.innerHTML=t??""}}function c5(r){return arguments.length?this.each(r==null?o5:(typeof r=="function"?A5:u5)(r)):this.node().innerHTML}function l5(){this.nextSibling&&this.parentNode.appendChild(this)}function f5(){return this.each(l5)}function E5(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function d5(){return this.each(E5)}function p5(r){var t=typeof r=="function"?r:Ho(r);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function m5(){return null}function h5(r,t){var s=typeof r=="function"?r:Ho(r),A=t==null?m5:typeof t=="function"?t:qi(t);return this.select(function(){return this.insertBefore(s.apply(this,arguments),A.apply(this,arguments)||null)})}function S5(){var r=this.parentNode;r&&r.removeChild(this)}function C5(){return this.each(S5)}function W5(){var r=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(r,this.nextSibling):r}function M5(){var r=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(r,this.nextSibling):r}function b5(r){return this.select(r?M5:W5)}function g5(r){return arguments.length?this.property("__data__",r):this.node().__data__}function N5(r){return function(t){r.call(this,t,this.__data__)}}function y5(r){return r.trim().split(/^|\s+/).map(function(t){var s="",A=t.indexOf(".");return A>=0&&(s=t.slice(A+1),t=t.slice(0,A)),{type:t,name:s}})}function B5(r){return function(){var t=this.__on;if(t){for(var s=0,A=-1,c=t.length,E;s<c;++s)E=t[s],(!r.type||E.type===r.type)&&E.name===r.name?this.removeEventListener(E.type,E.listener,E.options):t[++A]=E;++A?t.length=A:delete this.__on}}}function w5(r,t,s){return function(){var A=this.__on,c,E=N5(t);if(A){for(var f=0,d=A.length;f<d;++f)if((c=A[f]).type===r.type&&c.name===r.name){this.removeEventListener(c.type,c.listener,c.options),this.addEventListener(c.type,c.listener=E,c.options=s),c.value=t;return}}this.addEventListener(r.type,E,s),c={type:r.type,name:r.name,value:t,listener:E,options:s},A?A.push(c):this.__on=[c]}}function G5(r,t,s){var A=y5(r+""),c,E=A.length,f;if(arguments.length<2){var d=this.node().__on;if(d){for(var p=0,h=d.length,W;p<h;++p)for(c=0,W=d[p];c<E;++c)if((f=A[c]).type===W.type&&f.name===W.name)return W.value}return}for(d=t?w5:B5,c=0;c<E;++c)this.each(d(A[c],t,s));return this}function au(r,t,s){var A=Jo(r),c=A.CustomEvent;typeof c=="function"?c=new c(t,s):(c=A.document.createEvent("Event"),s?(c.initEvent(t,s.bubbles,s.cancelable),c.detail=s.detail):c.initEvent(t,!1,!1)),r.dispatchEvent(c)}function v5(r,t){return function(){return au(this,r,t)}}function T5(r,t){return function(){return au(this,r,t.apply(this,arguments))}}function O5(r,t){return this.each((typeof t=="function"?T5:v5)(r,t))}function*L5(){for(var r=this._groups,t=0,s=r.length;t<s;++t)for(var A=r[t],c=0,E=A.length,f;c<E;++c)(f=A[c])&&(yield f)}var eu=[null];function ia(r,t){this._groups=r,this._parents=t}function Ve(){return new ia([[document.documentElement]],eu)}function I5(){return this}ia.prototype=Ve.prototype={constructor:ia,select:tc,selectAll:Ac,selectChild:Ec,selectChildren:hc,filter:Sc,data:Nc,enter:Cc,exit:Bc,join:wc,merge:Gc,selection:I5,order:vc,sort:Tc,call:Lc,nodes:Ic,node:Pc,size:Rc,empty:xc,each:Zc,attr:Hc,style:Qc,property:qc,classed:n5,text:s5,html:c5,raise:f5,lower:d5,append:p5,insert:h5,remove:C5,clone:b5,datum:g5,on:G5,dispatch:O5,[Symbol.iterator]:L5};function P5(r){return typeof r=="string"?new ia([[document.querySelector(r)]],[document.documentElement]):new ia([[r]],eu)}function R5(r){let t;for(;t=r.sourceEvent;)r=t;return r}function x5(r,t){if(r=R5(r),t===void 0&&(t=r.currentTarget),t){var s=t.ownerSVGElement||t;if(s.createSVGPoint){var A=s.createSVGPoint();return A.x=r.clientX,A.y=r.clientY,A=A.matrixTransform(t.getScreenCTM().inverse()),[A.x,A.y]}if(t.getBoundingClientRect){var c=t.getBoundingClientRect();return[r.clientX-c.left-t.clientLeft,r.clientY-c.top-t.clientTop]}}return[r.pageX,r.pageY]}function a9(r,t,s){r.prototype=t.prototype=s,s.constructor=r}function nu(r,t){var s=Object.create(r.prototype);for(var A in t)s[A]=t[A];return s}function Ye(){}var Fe=.7,S2=1/Fe,Q1="\\s*([+-]?\\d+)\\s*",He="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ba="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Z5=/^#([0-9a-f]{3,8})$/,K5=new RegExp(`^rgb\\(${Q1},${Q1},${Q1}\\)$`),D5=new RegExp(`^rgb\\(${Ba},${Ba},${Ba}\\)$`),k5=new RegExp(`^rgba\\(${Q1},${Q1},${Q1},${He}\\)$`),U5=new RegExp(`^rgba\\(${Ba},${Ba},${Ba},${He}\\)$`),_5=new RegExp(`^hsl\\(${He},${Ba},${Ba}\\)$`),F5=new RegExp(`^hsla\\(${He},${Ba},${Ba},${He}\\)$`),mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};a9(Ye,C1,{copy(r){return Object.assign(new this.constructor,this,r)},displayable(){return this.rgb().displayable()},hex:ho,formatHex:ho,formatHex8:H5,formatHsl:z5,formatRgb:So,toString:So});function ho(){return this.rgb().formatHex()}function H5(){return this.rgb().formatHex8()}function z5(){return ru(this).formatHsl()}function So(){return this.rgb().formatRgb()}function C1(r){var t,s;return r=(r+"").trim().toLowerCase(),(t=Z5.exec(r))?(s=t[1].length,t=parseInt(t[1],16),s===6?Co(t):s===3?new q0(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):s===8?u2(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):s===4?u2(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=K5.exec(r))?new q0(t[1],t[2],t[3],1):(t=D5.exec(r))?new q0(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=k5.exec(r))?u2(t[1],t[2],t[3],t[4]):(t=U5.exec(r))?u2(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=_5.exec(r))?bo(t[1],t[2]/100,t[3]/100,1):(t=F5.exec(r))?bo(t[1],t[2]/100,t[3]/100,t[4]):mo.hasOwnProperty(r)?Co(mo[r]):r==="transparent"?new q0(NaN,NaN,NaN,0):null}function Co(r){return new q0(r>>16&255,r>>8&255,r&255,1)}function u2(r,t,s,A){return A<=0&&(r=t=s=NaN),new q0(r,t,s,A)}function V5(r){return r instanceof Ye||(r=C1(r)),r?(r=r.rgb(),new q0(r.r,r.g,r.b,r.opacity)):new q0}function ki(r,t,s,A){return arguments.length===1?V5(r):new q0(r,t,s,A??1)}function q0(r,t,s,A){this.r=+r,this.g=+t,this.b=+s,this.opacity=+A}a9(q0,ki,nu(Ye,{brighter(r){return r=r==null?S2:Math.pow(S2,r),new q0(this.r*r,this.g*r,this.b*r,this.opacity)},darker(r){return r=r==null?Fe:Math.pow(Fe,r),new q0(this.r*r,this.g*r,this.b*r,this.opacity)},rgb(){return this},clamp(){return new q0(S1(this.r),S1(this.g),S1(this.b),C2(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Wo,formatHex:Wo,formatHex8:Y5,formatRgb:Mo,toString:Mo}));function Wo(){return`#${h1(this.r)}${h1(this.g)}${h1(this.b)}`}function Y5(){return`#${h1(this.r)}${h1(this.g)}${h1(this.b)}${h1((isNaN(this.opacity)?1:this.opacity)*255)}`}function Mo(){const r=C2(this.opacity);return`${r===1?"rgb(":"rgba("}${S1(this.r)}, ${S1(this.g)}, ${S1(this.b)}${r===1?")":`, ${r})`}`}function C2(r){return isNaN(r)?1:Math.max(0,Math.min(1,r))}function S1(r){return Math.max(0,Math.min(255,Math.round(r)||0))}function h1(r){return r=S1(r),(r<16?"0":"")+r.toString(16)}function bo(r,t,s,A){return A<=0?r=t=s=NaN:s<=0||s>=1?r=t=NaN:t<=0&&(r=NaN),new Ca(r,t,s,A)}function ru(r){if(r instanceof Ca)return new Ca(r.h,r.s,r.l,r.opacity);if(r instanceof Ye||(r=C1(r)),!r)return new Ca;if(r instanceof Ca)return r;r=r.rgb();var t=r.r/255,s=r.g/255,A=r.b/255,c=Math.min(t,s,A),E=Math.max(t,s,A),f=NaN,d=E-c,p=(E+c)/2;return d?(t===E?f=(s-A)/d+(s<A)*6:s===E?f=(A-t)/d+2:f=(t-s)/d+4,d/=p<.5?E+c:2-E-c,f*=60):d=p>0&&p<1?0:f,new Ca(f,d,p,r.opacity)}function Q5(r,t,s,A){return arguments.length===1?ru(r):new Ca(r,t,s,A??1)}function Ca(r,t,s,A){this.h=+r,this.s=+t,this.l=+s,this.opacity=+A}a9(Ca,Q5,nu(Ye,{brighter(r){return r=r==null?S2:Math.pow(S2,r),new Ca(this.h,this.s,this.l*r,this.opacity)},darker(r){return r=r==null?Fe:Math.pow(Fe,r),new Ca(this.h,this.s,this.l*r,this.opacity)},rgb(){var r=this.h%360+(this.h<0)*360,t=isNaN(r)||isNaN(this.s)?0:this.s,s=this.l,A=s+(s<.5?s:1-s)*t,c=2*s-A;return new q0(Li(r>=240?r-240:r+120,c,A),Li(r,c,A),Li(r<120?r+240:r-120,c,A),this.opacity)},clamp(){return new Ca(go(this.h),A2(this.s),A2(this.l),C2(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const r=C2(this.opacity);return`${r===1?"hsl(":"hsla("}${go(this.h)}, ${A2(this.s)*100}%, ${A2(this.l)*100}%${r===1?")":`, ${r})`}`}}));function go(r){return r=(r||0)%360,r<0?r+360:r}function A2(r){return Math.max(0,Math.min(1,r||0))}function Li(r,t,s){return(r<60?t+(s-t)*r/60:r<180?s:r<240?t+(s-t)*(240-r)/60:t)*255}const e9=r=>()=>r;function J5(r,t){return function(s){return r+s*t}}function j5(r,t,s){return r=Math.pow(r,s),t=Math.pow(t,s)-r,s=1/s,function(A){return Math.pow(r+A*t,s)}}function $5(r){return(r=+r)==1?iu:function(t,s){return s-t?j5(t,s,r):e9(isNaN(t)?s:t)}}function iu(r,t){var s=t-r;return s?J5(r,s):e9(isNaN(r)?t:r)}const W2=(function r(t){var s=$5(t);function A(c,E){var f=s((c=ki(c)).r,(E=ki(E)).r),d=s(c.g,E.g),p=s(c.b,E.b),h=iu(c.opacity,E.opacity);return function(W){return c.r=f(W),c.g=d(W),c.b=p(W),c.opacity=h(W),c+""}}return A.gamma=r,A})(1);function q5(r,t){t||(t=[]);var s=r?Math.min(t.length,r.length):0,A=t.slice(),c;return function(E){for(c=0;c<s;++c)A[c]=r[c]*(1-E)+t[c]*E;return A}}function X5(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function a3(r,t){var s=t?t.length:0,A=r?Math.min(s,r.length):0,c=new Array(A),E=new Array(s),f;for(f=0;f<A;++f)c[f]=n9(r[f],t[f]);for(;f<s;++f)E[f]=t[f];return function(d){for(f=0;f<A;++f)E[f]=c[f](d);return E}}function e3(r,t){var s=new Date;return r=+r,t=+t,function(A){return s.setTime(r*(1-A)+t*A),s}}function Sa(r,t){return r=+r,t=+t,function(s){return r*(1-s)+t*s}}function n3(r,t){var s={},A={},c;(r===null||typeof r!="object")&&(r={}),(t===null||typeof t!="object")&&(t={});for(c in t)c in r?s[c]=n9(r[c],t[c]):A[c]=t[c];return function(E){for(c in s)A[c]=s[c](E);return A}}var Ui=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ii=new RegExp(Ui.source,"g");function r3(r){return function(){return r}}function i3(r){return function(t){return r(t)+""}}function tu(r,t){var s=Ui.lastIndex=Ii.lastIndex=0,A,c,E,f=-1,d=[],p=[];for(r=r+"",t=t+"";(A=Ui.exec(r))&&(c=Ii.exec(t));)(E=c.index)>s&&(E=t.slice(s,E),d[f]?d[f]+=E:d[++f]=E),(A=A[0])===(c=c[0])?d[f]?d[f]+=c:d[++f]=c:(d[++f]=null,p.push({i:f,x:Sa(A,c)})),s=Ii.lastIndex;return s<t.length&&(E=t.slice(s),d[f]?d[f]+=E:d[++f]=E),d.length<2?p[0]?i3(p[0].x):r3(t):(t=p.length,function(h){for(var W=0,y;W<t;++W)d[(y=p[W]).i]=y.x(h);return d.join("")})}function n9(r,t){var s=typeof t,A;return t==null||s==="boolean"?e9(t):(s==="number"?Sa:s==="string"?(A=C1(t))?(t=A,W2):tu:t instanceof C1?W2:t instanceof Date?e3:X5(t)?q5:Array.isArray(t)?a3:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?n3:Sa)(r,t)}function t3(r,t){return r=+r,t=+t,function(s){return Math.round(r*(1-s)+t*s)}}var No=180/Math.PI,_i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function su(r,t,s,A,c,E){var f,d,p;return(f=Math.sqrt(r*r+t*t))&&(r/=f,t/=f),(p=r*s+t*A)&&(s-=r*p,A-=t*p),(d=Math.sqrt(s*s+A*A))&&(s/=d,A/=d,p/=d),r*A<t*s&&(r=-r,t=-t,p=-p,f=-f),{translateX:c,translateY:E,rotate:Math.atan2(t,r)*No,skewX:Math.atan(p)*No,scaleX:f,scaleY:d}}var c2;function s3(r){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(r+"");return t.isIdentity?_i:su(t.a,t.b,t.c,t.d,t.e,t.f)}function o3(r){return r==null||(c2||(c2=document.createElementNS("http://www.w3.org/2000/svg","g")),c2.setAttribute("transform",r),!(r=c2.transform.baseVal.consolidate()))?_i:(r=r.matrix,su(r.a,r.b,r.c,r.d,r.e,r.f))}function ou(r,t,s,A){function c(h){return h.length?h.pop()+" ":""}function E(h,W,y,N,G,J){if(h!==y||W!==N){var U=G.push("translate(",null,t,null,s);J.push({i:U-4,x:Sa(h,y)},{i:U-2,x:Sa(W,N)})}else(y||N)&&G.push("translate("+y+t+N+s)}function f(h,W,y,N){h!==W?(h-W>180?W+=360:W-h>180&&(h+=360),N.push({i:y.push(c(y)+"rotate(",null,A)-2,x:Sa(h,W)})):W&&y.push(c(y)+"rotate("+W+A)}function d(h,W,y,N){h!==W?N.push({i:y.push(c(y)+"skewX(",null,A)-2,x:Sa(h,W)}):W&&y.push(c(y)+"skewX("+W+A)}function p(h,W,y,N,G,J){if(h!==y||W!==N){var U=G.push(c(G)+"scale(",null,",",null,")");J.push({i:U-4,x:Sa(h,y)},{i:U-2,x:Sa(W,N)})}else(y!==1||N!==1)&&G.push(c(G)+"scale("+y+","+N+")")}return function(h,W){var y=[],N=[];return h=r(h),W=r(W),E(h.translateX,h.translateY,W.translateX,W.translateY,y,N),f(h.rotate,W.rotate,y,N),d(h.skewX,W.skewX,y,N),p(h.scaleX,h.scaleY,W.scaleX,W.scaleY,y,N),h=W=null,function(G){for(var J=-1,U=N.length,H;++J<U;)y[(H=N[J]).i]=H.x(G);return y.join("")}}}var u3=ou(s3,"px, ","px)","deg)"),A3=ou(o3,", ",")",")"),j1=0,ke=0,Ke=0,uu=1e3,M2,Ue,b2=0,W1=0,T2=0,ze=typeof performance=="object"&&performance.now?performance:Date,Au=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(r){setTimeout(r,17)};function r9(){return W1||(Au(c3),W1=ze.now()+T2)}function c3(){W1=0}function g2(){this._call=this._time=this._next=null}g2.prototype=cu.prototype={constructor:g2,restart:function(r,t,s){if(typeof r!="function")throw new TypeError("callback is not a function");s=(s==null?r9():+s)+(t==null?0:+t),!this._next&&Ue!==this&&(Ue?Ue._next=this:M2=this,Ue=this),this._call=r,this._time=s,Fi()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fi())}};function cu(r,t,s){var A=new g2;return A.restart(r,t,s),A}function l3(){r9(),++j1;for(var r=M2,t;r;)(t=W1-r._time)>=0&&r._call.call(void 0,t),r=r._next;--j1}function yo(){W1=(b2=ze.now())+T2,j1=ke=0;try{l3()}finally{j1=0,E3(),W1=0}}function f3(){var r=ze.now(),t=r-b2;t>uu&&(T2-=t,b2=r)}function E3(){for(var r,t=M2,s,A=1/0;t;)t._call?(A>t._time&&(A=t._time),r=t,t=t._next):(s=t._next,t._next=null,t=r?r._next=s:M2=s);Ue=r,Fi(A)}function Fi(r){if(!j1){ke&&(ke=clearTimeout(ke));var t=r-W1;t>24?(r<1/0&&(ke=setTimeout(yo,r-ze.now()-T2)),Ke&&(Ke=clearInterval(Ke))):(Ke||(b2=ze.now(),Ke=setInterval(f3,uu)),j1=1,Au(yo))}}function Bo(r,t,s){var A=new g2;return t=t==null?0:+t,A.restart(c=>{A.stop(),r(c+t)},t,s),A}var d3=Fo("start","end","cancel","interrupt"),p3=[],lu=0,wo=1,Hi=2,d2=3,Go=4,zi=5,p2=6;function O2(r,t,s,A,c,E){var f=r.__transition;if(!f)r.__transition={};else if(s in f)return;m3(r,s,{name:t,index:A,group:c,on:d3,tween:p3,time:E.time,delay:E.delay,duration:E.duration,ease:E.ease,timer:null,state:lu})}function i9(r,t){var s=Wa(r,t);if(s.state>lu)throw new Error("too late; already scheduled");return s}function wa(r,t){var s=Wa(r,t);if(s.state>d2)throw new Error("too late; already running");return s}function Wa(r,t){var s=r.__transition;if(!s||!(s=s[t]))throw new Error("transition not found");return s}function m3(r,t,s){var A=r.__transition,c;A[t]=s,s.timer=cu(E,0,s.time);function E(h){s.state=wo,s.timer.restart(f,s.delay,s.time),s.delay<=h&&f(h-s.delay)}function f(h){var W,y,N,G;if(s.state!==wo)return p();for(W in A)if(G=A[W],G.name===s.name){if(G.state===d2)return Bo(f);G.state===Go?(G.state=p2,G.timer.stop(),G.on.call("interrupt",r,r.__data__,G.index,G.group),delete A[W]):+W<t&&(G.state=p2,G.timer.stop(),G.on.call("cancel",r,r.__data__,G.index,G.group),delete A[W])}if(Bo(function(){s.state===d2&&(s.state=Go,s.timer.restart(d,s.delay,s.time),d(h))}),s.state=Hi,s.on.call("start",r,r.__data__,s.index,s.group),s.state===Hi){for(s.state=d2,c=new Array(N=s.tween.length),W=0,y=-1;W<N;++W)(G=s.tween[W].value.call(r,r.__data__,s.index,s.group))&&(c[++y]=G);c.length=y+1}}function d(h){for(var W=h<s.duration?s.ease.call(null,h/s.duration):(s.timer.restart(p),s.state=zi,1),y=-1,N=c.length;++y<N;)c[y].call(r,W);s.state===zi&&(s.on.call("end",r,r.__data__,s.index,s.group),p())}function p(){s.state=p2,s.timer.stop(),delete A[t];for(var h in A)return;delete r.__transition}}function h3(r,t){var s=r.__transition,A,c,E=!0,f;if(s){t=t==null?null:t+"";for(f in s){if((A=s[f]).name!==t){E=!1;continue}c=A.state>Hi&&A.state<zi,A.state=p2,A.timer.stop(),A.on.call(c?"interrupt":"cancel",r,r.__data__,A.index,A.group),delete s[f]}E&&delete r.__transition}}function S3(r){return this.each(function(){h3(this,r)})}function C3(r,t){var s,A;return function(){var c=wa(this,r),E=c.tween;if(E!==s){A=s=E;for(var f=0,d=A.length;f<d;++f)if(A[f].name===t){A=A.slice(),A.splice(f,1);break}}c.tween=A}}function W3(r,t,s){var A,c;if(typeof s!="function")throw new Error;return function(){var E=wa(this,r),f=E.tween;if(f!==A){c=(A=f).slice();for(var d={name:t,value:s},p=0,h=c.length;p<h;++p)if(c[p].name===t){c[p]=d;break}p===h&&c.push(d)}E.tween=c}}function M3(r,t){var s=this._id;if(r+="",arguments.length<2){for(var A=Wa(this.node(),s).tween,c=0,E=A.length,f;c<E;++c)if((f=A[c]).name===r)return f.value;return null}return this.each((t==null?C3:W3)(s,r,t))}function t9(r,t,s){var A=r._id;return r.each(function(){var c=wa(this,A);(c.value||(c.value={}))[t]=s.apply(this,arguments)}),function(c){return Wa(c,A).value[t]}}function fu(r,t){var s;return(typeof t=="number"?Sa:t instanceof C1?W2:(s=C1(t))?(t=s,W2):tu)(r,t)}function b3(r){return function(){this.removeAttribute(r)}}function g3(r){return function(){this.removeAttributeNS(r.space,r.local)}}function N3(r,t,s){var A,c=s+"",E;return function(){var f=this.getAttribute(r);return f===c?null:f===A?E:E=t(A=f,s)}}function y3(r,t,s){var A,c=s+"",E;return function(){var f=this.getAttributeNS(r.space,r.local);return f===c?null:f===A?E:E=t(A=f,s)}}function B3(r,t,s){var A,c,E;return function(){var f,d=s(this),p;return d==null?void this.removeAttribute(r):(f=this.getAttribute(r),p=d+"",f===p?null:f===A&&p===c?E:(c=p,E=t(A=f,d)))}}function w3(r,t,s){var A,c,E;return function(){var f,d=s(this),p;return d==null?void this.removeAttributeNS(r.space,r.local):(f=this.getAttributeNS(r.space,r.local),p=d+"",f===p?null:f===A&&p===c?E:(c=p,E=t(A=f,d)))}}function G3(r,t){var s=v2(r),A=s==="transform"?A3:fu;return this.attrTween(r,typeof t=="function"?(s.local?w3:B3)(s,A,t9(this,"attr."+r,t)):t==null?(s.local?g3:b3)(s):(s.local?y3:N3)(s,A,t))}function v3(r,t){return function(s){this.setAttribute(r,t.call(this,s))}}function T3(r,t){return function(s){this.setAttributeNS(r.space,r.local,t.call(this,s))}}function O3(r,t){var s,A;function c(){var E=t.apply(this,arguments);return E!==A&&(s=(A=E)&&T3(r,E)),s}return c._value=t,c}function L3(r,t){var s,A;function c(){var E=t.apply(this,arguments);return E!==A&&(s=(A=E)&&v3(r,E)),s}return c._value=t,c}function I3(r,t){var s="attr."+r;if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;var A=v2(r);return this.tween(s,(A.local?O3:L3)(A,t))}function P3(r,t){return function(){i9(this,r).delay=+t.apply(this,arguments)}}function R3(r,t){return t=+t,function(){i9(this,r).delay=t}}function x3(r){var t=this._id;return arguments.length?this.each((typeof r=="function"?P3:R3)(t,r)):Wa(this.node(),t).delay}function Z3(r,t){return function(){wa(this,r).duration=+t.apply(this,arguments)}}function K3(r,t){return t=+t,function(){wa(this,r).duration=t}}function D3(r){var t=this._id;return arguments.length?this.each((typeof r=="function"?Z3:K3)(t,r)):Wa(this.node(),t).duration}function k3(r,t){if(typeof t!="function")throw new Error;return function(){wa(this,r).ease=t}}function U3(r){var t=this._id;return arguments.length?this.each(k3(t,r)):Wa(this.node(),t).ease}function _3(r,t){return function(){var s=t.apply(this,arguments);if(typeof s!="function")throw new Error;wa(this,r).ease=s}}function F3(r){if(typeof r!="function")throw new Error;return this.each(_3(this._id,r))}function H3(r){typeof r!="function"&&(r=Vo(r));for(var t=this._groups,s=t.length,A=new Array(s),c=0;c<s;++c)for(var E=t[c],f=E.length,d=A[c]=[],p,h=0;h<f;++h)(p=E[h])&&r.call(p,p.__data__,h,E)&&d.push(p);return new Za(A,this._parents,this._name,this._id)}function z3(r){if(r._id!==this._id)throw new Error;for(var t=this._groups,s=r._groups,A=t.length,c=s.length,E=Math.min(A,c),f=new Array(A),d=0;d<E;++d)for(var p=t[d],h=s[d],W=p.length,y=f[d]=new Array(W),N,G=0;G<W;++G)(N=p[G]||h[G])&&(y[G]=N);for(;d<A;++d)f[d]=t[d];return new Za(f,this._parents,this._name,this._id)}function V3(r){return(r+"").trim().split(/^|\s+/).every(function(t){var s=t.indexOf(".");return s>=0&&(t=t.slice(0,s)),!t||t==="start"})}function Y3(r,t,s){var A,c,E=V3(t)?i9:wa;return function(){var f=E(this,r),d=f.on;d!==A&&(c=(A=d).copy()).on(t,s),f.on=c}}function Q3(r,t){var s=this._id;return arguments.length<2?Wa(this.node(),s).on.on(r):this.each(Y3(s,r,t))}function J3(r){return function(){var t=this.parentNode;for(var s in this.__transition)if(+s!==r)return;t&&t.removeChild(this)}}function j3(){return this.on("end.remove",J3(this._id))}function $3(r){var t=this._name,s=this._id;typeof r!="function"&&(r=qi(r));for(var A=this._groups,c=A.length,E=new Array(c),f=0;f<c;++f)for(var d=A[f],p=d.length,h=E[f]=new Array(p),W,y,N=0;N<p;++N)(W=d[N])&&(y=r.call(W,W.__data__,N,d))&&("__data__"in W&&(y.__data__=W.__data__),h[N]=y,O2(h[N],t,s,N,h,Wa(W,s)));return new Za(E,this._parents,t,s)}function q3(r){var t=this._name,s=this._id;typeof r!="function"&&(r=zo(r));for(var A=this._groups,c=A.length,E=[],f=[],d=0;d<c;++d)for(var p=A[d],h=p.length,W,y=0;y<h;++y)if(W=p[y]){for(var N=r.call(W,W.__data__,y,p),G,J=Wa(W,s),U=0,H=N.length;U<H;++U)(G=N[U])&&O2(G,t,s,U,N,J);E.push(N),f.push(W)}return new Za(E,f,t,s)}var X3=Ve.prototype.constructor;function a4(){return new X3(this._groups,this._parents)}function e4(r,t){var s,A,c;return function(){var E=J1(this,r),f=(this.style.removeProperty(r),J1(this,r));return E===f?null:E===s&&f===A?c:c=t(s=E,A=f)}}function Eu(r){return function(){this.style.removeProperty(r)}}function n4(r,t,s){var A,c=s+"",E;return function(){var f=J1(this,r);return f===c?null:f===A?E:E=t(A=f,s)}}function r4(r,t,s){var A,c,E;return function(){var f=J1(this,r),d=s(this),p=d+"";return d==null&&(p=d=(this.style.removeProperty(r),J1(this,r))),f===p?null:f===A&&p===c?E:(c=p,E=t(A=f,d))}}function i4(r,t){var s,A,c,E="style."+t,f="end."+E,d;return function(){var p=wa(this,r),h=p.on,W=p.value[E]==null?d||(d=Eu(t)):void 0;(h!==s||c!==W)&&(A=(s=h).copy()).on(f,c=W),p.on=A}}function t4(r,t,s){var A=(r+="")=="transform"?u3:fu;return t==null?this.styleTween(r,e4(r,A)).on("end.style."+r,Eu(r)):typeof t=="function"?this.styleTween(r,r4(r,A,t9(this,"style."+r,t))).each(i4(this._id,r)):this.styleTween(r,n4(r,A,t),s).on("end.style."+r,null)}function s4(r,t,s){return function(A){this.style.setProperty(r,t.call(this,A),s)}}function o4(r,t,s){var A,c;function E(){var f=t.apply(this,arguments);return f!==c&&(A=(c=f)&&s4(r,f,s)),A}return E._value=t,E}function u4(r,t,s){var A="style."+(r+="");if(arguments.length<2)return(A=this.tween(A))&&A._value;if(t==null)return this.tween(A,null);if(typeof t!="function")throw new Error;return this.tween(A,o4(r,t,s??""))}function A4(r){return function(){this.textContent=r}}function c4(r){return function(){var t=r(this);this.textContent=t??""}}function l4(r){return this.tween("text",typeof r=="function"?c4(t9(this,"text",r)):A4(r==null?"":r+""))}function f4(r){return function(t){this.textContent=r.call(this,t)}}function E4(r){var t,s;function A(){var c=r.apply(this,arguments);return c!==s&&(t=(s=c)&&f4(c)),t}return A._value=r,A}function d4(r){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(r==null)return this.tween(t,null);if(typeof r!="function")throw new Error;return this.tween(t,E4(r))}function p4(){for(var r=this._name,t=this._id,s=du(),A=this._groups,c=A.length,E=0;E<c;++E)for(var f=A[E],d=f.length,p,h=0;h<d;++h)if(p=f[h]){var W=Wa(p,t);O2(p,r,s,h,f,{time:W.time+W.delay+W.duration,delay:0,duration:W.duration,ease:W.ease})}return new Za(A,this._parents,r,s)}function m4(){var r,t,s=this,A=s._id,c=s.size();return new Promise(function(E,f){var d={value:f},p={value:function(){--c===0&&E()}};s.each(function(){var h=wa(this,A),W=h.on;W!==r&&(t=(r=W).copy(),t._.cancel.push(d),t._.interrupt.push(d),t._.end.push(p)),h.on=t}),c===0&&E()})}var h4=0;function Za(r,t,s,A){this._groups=r,this._parents=t,this._name=s,this._id=A}function du(){return++h4}var xa=Ve.prototype;Za.prototype={constructor:Za,select:$3,selectAll:q3,selectChild:xa.selectChild,selectChildren:xa.selectChildren,filter:H3,merge:z3,selection:a4,transition:p4,call:xa.call,nodes:xa.nodes,node:xa.node,size:xa.size,empty:xa.empty,each:xa.each,on:Q3,attr:G3,attrTween:I3,style:t4,styleTween:u4,text:l4,textTween:d4,remove:j3,tween:M3,delay:x3,duration:D3,ease:U3,easeVarying:F3,end:m4,[Symbol.iterator]:xa[Symbol.iterator]};function S4(r){return((r*=2)<=1?r*r*r:(r-=2)*r*r+2)/2}var C4={time:null,delay:0,duration:250,ease:S4};function W4(r,t){for(var s;!(s=r.__transition)||!(s=s[t]);)if(!(r=r.parentNode))throw new Error(`transition ${t} not found`);return s}function M4(r){var t,s;r instanceof Za?(t=r._id,r=r._name):(t=du(),(s=C4).time=r9(),r=r==null?null:r+"");for(var A=this._groups,c=A.length,E=0;E<c;++E)for(var f=A[E],d=f.length,p,h=0;h<d;++h)(p=f[h])&&O2(p,r,t,h,f,s||W4(p,t));return new Za(A,this._parents,r,t)}Ve.prototype.interrupt=S3;Ve.prototype.transition=M4;const Vi=Math.PI,Yi=2*Vi,m1=1e-6,b4=Yi-m1;function pu(r){this._+=r[0];for(let t=1,s=r.length;t<s;++t)this._+=arguments[t]+r[t]}function g4(r){let t=Math.floor(r);if(!(t>=0))throw new Error(`invalid digits: ${r}`);if(t>15)return pu;const s=10**t;return function(A){this._+=A[0];for(let c=1,E=A.length;c<E;++c)this._+=Math.round(arguments[c]*s)/s+A[c]}}class N4{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?pu:g4(t)}moveTo(t,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+s}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,s){this._append`L${this._x1=+t},${this._y1=+s}`}quadraticCurveTo(t,s,A,c){this._append`Q${+t},${+s},${this._x1=+A},${this._y1=+c}`}bezierCurveTo(t,s,A,c,E,f){this._append`C${+t},${+s},${+A},${+c},${this._x1=+E},${this._y1=+f}`}arcTo(t,s,A,c,E){if(t=+t,s=+s,A=+A,c=+c,E=+E,E<0)throw new Error(`negative radius: ${E}`);let f=this._x1,d=this._y1,p=A-t,h=c-s,W=f-t,y=d-s,N=W*W+y*y;if(this._x1===null)this._append`M${this._x1=t},${this._y1=s}`;else if(N>m1)if(!(Math.abs(y*p-h*W)>m1)||!E)this._append`L${this._x1=t},${this._y1=s}`;else{let G=A-f,J=c-d,U=p*p+h*h,H=G*G+J*J,d0=Math.sqrt(U),o0=Math.sqrt(N),e0=E*Math.tan((Vi-Math.acos((U+N-H)/(2*d0*o0)))/2),$=e0/o0,u0=e0/d0;Math.abs($-1)>m1&&this._append`L${t+$*W},${s+$*y}`,this._append`A${E},${E},0,0,${+(y*G>W*J)},${this._x1=t+u0*p},${this._y1=s+u0*h}`}}arc(t,s,A,c,E,f){if(t=+t,s=+s,A=+A,f=!!f,A<0)throw new Error(`negative radius: ${A}`);let d=A*Math.cos(c),p=A*Math.sin(c),h=t+d,W=s+p,y=1^f,N=f?c-E:E-c;this._x1===null?this._append`M${h},${W}`:(Math.abs(this._x1-h)>m1||Math.abs(this._y1-W)>m1)&&this._append`L${h},${W}`,A&&(N<0&&(N=N%Yi+Yi),N>b4?this._append`A${A},${A},0,1,${y},${t-d},${s-p}A${A},${A},0,1,${y},${this._x1=h},${this._y1=W}`:N>m1&&this._append`A${A},${A},0,${+(N>=Vi)},${y},${this._x1=t+A*Math.cos(E)},${this._y1=s+A*Math.sin(E)}`)}rect(t,s,A,c){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+s}h${A=+A}v${+c}h${-A}Z`}toString(){return this._}}function y4(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function N2(r,t){if(!isFinite(r)||r===0)return null;var s=(r=t?r.toExponential(t-1):r.toExponential()).indexOf("e"),A=r.slice(0,s);return[A.length>1?A[0]+A.slice(2):A,+r.slice(s+1)]}function $1(r){return r=N2(Math.abs(r)),r?r[1]:NaN}function B4(r,t){return function(s,A){for(var c=s.length,E=[],f=0,d=r[0],p=0;c>0&&d>0&&(p+d+1>A&&(d=Math.max(1,A-p)),E.push(s.substring(c-=d,c+d)),!((p+=d+1)>A));)d=r[f=(f+1)%r.length];return E.reverse().join(t)}}function w4(r){return function(t){return t.replace(/[0-9]/g,function(s){return r[+s]})}}var G4=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function y2(r){if(!(t=G4.exec(r)))throw new Error("invalid format: "+r);var t;return new s9({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}y2.prototype=s9.prototype;function s9(r){this.fill=r.fill===void 0?" ":r.fill+"",this.align=r.align===void 0?">":r.align+"",this.sign=r.sign===void 0?"-":r.sign+"",this.symbol=r.symbol===void 0?"":r.symbol+"",this.zero=!!r.zero,this.width=r.width===void 0?void 0:+r.width,this.comma=!!r.comma,this.precision=r.precision===void 0?void 0:+r.precision,this.trim=!!r.trim,this.type=r.type===void 0?"":r.type+""}s9.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function v4(r){a:for(var t=r.length,s=1,A=-1,c;s<t;++s)switch(r[s]){case".":A=c=s;break;case"0":A===0&&(A=s),c=s;break;default:if(!+r[s])break a;A>0&&(A=0);break}return A>0?r.slice(0,A)+r.slice(c+1):r}var B2;function T4(r,t){var s=N2(r,t);if(!s)return B2=void 0,r.toPrecision(t);var A=s[0],c=s[1],E=c-(B2=Math.max(-8,Math.min(8,Math.floor(c/3)))*3)+1,f=A.length;return E===f?A:E>f?A+new Array(E-f+1).join("0"):E>0?A.slice(0,E)+"."+A.slice(E):"0."+new Array(1-E).join("0")+N2(r,Math.max(0,t+E-1))[0]}function vo(r,t){var s=N2(r,t);if(!s)return r+"";var A=s[0],c=s[1];return c<0?"0."+new Array(-c).join("0")+A:A.length>c+1?A.slice(0,c+1)+"."+A.slice(c+1):A+new Array(c-A.length+2).join("0")}const To={"%":(r,t)=>(r*100).toFixed(t),b:r=>Math.round(r).toString(2),c:r=>r+"",d:y4,e:(r,t)=>r.toExponential(t),f:(r,t)=>r.toFixed(t),g:(r,t)=>r.toPrecision(t),o:r=>Math.round(r).toString(8),p:(r,t)=>vo(r*100,t),r:vo,s:T4,X:r=>Math.round(r).toString(16).toUpperCase(),x:r=>Math.round(r).toString(16)};function Oo(r){return r}var Lo=Array.prototype.map,Io=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function O4(r){var t=r.grouping===void 0||r.thousands===void 0?Oo:B4(Lo.call(r.grouping,Number),r.thousands+""),s=r.currency===void 0?"":r.currency[0]+"",A=r.currency===void 0?"":r.currency[1]+"",c=r.decimal===void 0?".":r.decimal+"",E=r.numerals===void 0?Oo:w4(Lo.call(r.numerals,String)),f=r.percent===void 0?"%":r.percent+"",d=r.minus===void 0?"−":r.minus+"",p=r.nan===void 0?"NaN":r.nan+"";function h(y,N){y=y2(y);var G=y.fill,J=y.align,U=y.sign,H=y.symbol,d0=y.zero,o0=y.width,e0=y.comma,$=y.precision,u0=y.trim,q=y.type;q==="n"?(e0=!0,q="g"):To[q]||($===void 0&&($=12),u0=!0,q="g"),(d0||G==="0"&&J==="=")&&(d0=!0,G="0",J="=");var n0=(N&&N.prefix!==void 0?N.prefix:"")+(H==="$"?s:H==="#"&&/[boxX]/.test(q)?"0"+q.toLowerCase():""),A0=(H==="$"?A:/[%p]/.test(q)?f:"")+(N&&N.suffix!==void 0?N.suffix:""),B0=To[q],N0=/[defgprs%]/.test(q);$=$===void 0?6:/[gprs]/.test(q)?Math.max(1,Math.min(21,$)):Math.max(0,Math.min(20,$));function C0(F){var E0=n0,p0=A0,O0,v0,i0;if(q==="c")p0=B0(F)+p0,F="";else{F=+F;var w=F<0||1/F<0;if(F=isNaN(F)?p:B0(Math.abs(F),$),u0&&(F=v4(F)),w&&+F==0&&U!=="+"&&(w=!1),E0=(w?U==="("?U:d:U==="-"||U==="("?"":U)+E0,p0=(q==="s"&&!isNaN(F)&&B2!==void 0?Io[8+B2/3]:"")+p0+(w&&U==="("?")":""),N0){for(O0=-1,v0=F.length;++O0<v0;)if(i0=F.charCodeAt(O0),48>i0||i0>57){p0=(i0===46?c+F.slice(O0+1):F.slice(O0))+p0,F=F.slice(0,O0);break}}}e0&&!d0&&(F=t(F,1/0));var x=E0.length+F.length+p0.length,P=x<o0?new Array(o0-x+1).join(G):"";switch(e0&&d0&&(F=t(P+F,P.length?o0-p0.length:1/0),P=""),J){case"<":F=E0+F+p0+P;break;case"=":F=E0+P+F+p0;break;case"^":F=P.slice(0,x=P.length>>1)+E0+F+p0+P.slice(x);break;default:F=P+E0+F+p0;break}return E(F)}return C0.toString=function(){return y+""},C0}function W(y,N){var G=Math.max(-8,Math.min(8,Math.floor($1(N)/3)))*3,J=Math.pow(10,-G),U=h((y=y2(y),y.type="f",y),{suffix:Io[8+G/3]});return function(H){return U(J*H)}}return{format:h,formatPrefix:W}}var l2,mu,hu;L4({thousands:",",grouping:[3],currency:["$",""]});function L4(r){return l2=O4(r),mu=l2.format,hu=l2.formatPrefix,l2}function I4(r){return Math.max(0,-$1(Math.abs(r)))}function P4(r,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor($1(t)/3)))*3-$1(Math.abs(r)))}function R4(r,t){return r=Math.abs(r),t=Math.abs(t)-r,Math.max(0,$1(t)-$1(r))+1}function x4(r,t){switch(arguments.length){case 0:break;case 1:this.range(r);break;default:this.range(t).domain(r);break}return this}function Z4(r){return function(){return r}}function K4(r){return+r}var Po=[0,1];function Y1(r){return r}function Qi(r,t){return(t-=r=+r)?function(s){return(s-r)/t}:Z4(isNaN(t)?NaN:.5)}function D4(r,t){var s;return r>t&&(s=r,r=t,t=s),function(A){return Math.max(r,Math.min(t,A))}}function k4(r,t,s){var A=r[0],c=r[1],E=t[0],f=t[1];return c<A?(A=Qi(c,A),E=s(f,E)):(A=Qi(A,c),E=s(E,f)),function(d){return E(A(d))}}function U4(r,t,s){var A=Math.min(r.length,t.length)-1,c=new Array(A),E=new Array(A),f=-1;for(r[A]<r[0]&&(r=r.slice().reverse(),t=t.slice().reverse());++f<A;)c[f]=Qi(r[f],r[f+1]),E[f]=s(t[f],t[f+1]);return function(d){var p=DA(r,d,1,A)-1;return E[p](c[p](d))}}function _4(r,t){return t.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function F4(){var r=Po,t=Po,s=n9,A,c,E,f=Y1,d,p,h;function W(){var N=Math.min(r.length,t.length);return f!==Y1&&(f=D4(r[0],r[N-1])),d=N>2?U4:k4,p=h=null,y}function y(N){return N==null||isNaN(N=+N)?E:(p||(p=d(r.map(A),t,s)))(A(f(N)))}return y.invert=function(N){return f(c((h||(h=d(t,r.map(A),Sa)))(N)))},y.domain=function(N){return arguments.length?(r=Array.from(N,K4),W()):r.slice()},y.range=function(N){return arguments.length?(t=Array.from(N),W()):t.slice()},y.rangeRound=function(N){return t=Array.from(N),s=t3,W()},y.clamp=function(N){return arguments.length?(f=N?!0:Y1,W()):f!==Y1},y.interpolate=function(N){return arguments.length?(s=N,W()):s},y.unknown=function(N){return arguments.length?(E=N,y):E},function(N,G){return A=N,c=G,W()}}function H4(){return F4()(Y1,Y1)}function z4(r,t,s,A){var c=HA(r,t,s),E;switch(A=y2(A??",f"),A.type){case"s":{var f=Math.max(Math.abs(r),Math.abs(t));return A.precision==null&&!isNaN(E=P4(c,f))&&(A.precision=E),hu(A,f)}case"":case"e":case"g":case"p":case"r":{A.precision==null&&!isNaN(E=R4(c,Math.max(Math.abs(r),Math.abs(t))))&&(A.precision=E-(A.type==="e"));break}case"f":case"%":{A.precision==null&&!isNaN(E=I4(c))&&(A.precision=E-(A.type==="%")*2);break}}return mu(A)}function V4(r){var t=r.domain;return r.ticks=function(s){var A=t();return FA(A[0],A[A.length-1],s??10)},r.tickFormat=function(s,A){var c=t();return z4(c[0],c[c.length-1],s??10,A)},r.nice=function(s){s==null&&(s=10);var A=t(),c=0,E=A.length-1,f=A[c],d=A[E],p,h,W=10;for(d<f&&(h=f,f=d,d=h,h=c,c=E,E=h);W-- >0;){if(h=Zi(f,d,s),h===p)return A[c]=f,A[E]=d,t(A);if(h>0)f=Math.floor(f/h)*h,d=Math.ceil(d/h)*h;else if(h<0)f=Math.ceil(f*h)/h,d=Math.floor(d*h)/h;else break;p=h}return r},r}function Ji(){var r=H4();return r.copy=function(){return _4(r,Ji())},x4.apply(r,arguments),V4(r)}function V1(r){return function(){return r}}function Y4(r){let t=3;return r.digits=function(s){if(!arguments.length)return t;if(s==null)t=null;else{const A=Math.floor(s);if(!(A>=0))throw new RangeError(`invalid digits: ${s}`);t=A}return r},()=>new N4(t)}function Q4(r){return typeof r=="object"&&"length"in r?r:Array.from(r)}function Su(r){this._context=r}Su.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(r,t){switch(r=+r,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(r,t):this._context.moveTo(r,t);break;case 1:this._point=2;default:this._context.lineTo(r,t);break}}};function J4(r){return new Su(r)}function j4(r){return r[0]}function $4(r){return r[1]}function Pi(r,t){var s=V1(!0),A=null,c=J4,E=null,f=Y4(d);r=typeof r=="function"?r:r===void 0?j4:V1(r),t=typeof t=="function"?t:t===void 0?$4:V1(t);function d(p){var h,W=(p=Q4(p)).length,y,N=!1,G;for(A==null&&(E=c(G=f())),h=0;h<=W;++h)!(h<W&&s(y=p[h],h,p))===N&&((N=!N)?E.lineStart():E.lineEnd()),N&&E.point(+r(y,h,p),+t(y,h,p));if(G)return E=null,G+""||null}return d.x=function(p){return arguments.length?(r=typeof p=="function"?p:V1(+p),d):r},d.y=function(p){return arguments.length?(t=typeof p=="function"?p:V1(+p),d):t},d.defined=function(p){return arguments.length?(s=typeof p=="function"?p:V1(!!p),d):s},d.curve=function(p){return arguments.length?(c=p,A!=null&&(E=c(A)),d):c},d.context=function(p){return arguments.length?(p==null?A=E=null:E=c(A=p),d):A},d}function Ro(r){return r<0?-1:1}function xo(r,t,s){var A=r._x1-r._x0,c=t-r._x1,E=(r._y1-r._y0)/(A||c<0&&-0),f=(s-r._y1)/(c||A<0&&-0),d=(E*c+f*A)/(A+c);return(Ro(E)+Ro(f))*Math.min(Math.abs(E),Math.abs(f),.5*Math.abs(d))||0}function Zo(r,t){var s=r._x1-r._x0;return s?(3*(r._y1-r._y0)/s-t)/2:t}function Ri(r,t,s){var A=r._x0,c=r._y0,E=r._x1,f=r._y1,d=(E-A)/3;r._context.bezierCurveTo(A+d,c+d*t,E-d,f-d*s,E,f)}function w2(r){this._context=r}w2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ri(this,this._t0,Zo(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(r,t){var s=NaN;if(r=+r,t=+t,!(r===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(r,t):this._context.moveTo(r,t);break;case 1:this._point=2;break;case 2:this._point=3,Ri(this,Zo(this,s=xo(this,r,t)),s);break;default:Ri(this,this._t0,s=xo(this,r,t));break}this._x0=this._x1,this._x1=r,this._y0=this._y1,this._y1=t,this._t0=s}}};Object.create(w2.prototype).point=function(r,t){w2.prototype.point.call(this,t,r)};function xi(r){return new w2(r)}function _e(r,t,s){this.k=r,this.x=t,this.y=s}_e.prototype={constructor:_e,scale:function(r){return r===1?this:new _e(this.k*r,this.x,this.y)},translate:function(r,t){return r===0&t===0?this:new _e(this.k,this.x+this.k*r,this.y+this.k*t)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};_e.prototype;const q4=r=>{const[t,s]=z0.useState({containerWidth:0,chartHeight:500,margins:{top:20,right:200,bottom:60,left:50},tickFontSize:"12px",tickPadding:20,legendGap:"7",legendTextSize:"text-sm"});return z0.useEffect(()=>{if(!r.current)return;const A=()=>{const E=r.current;if(!E)return;const f=E.offsetWidth;if(f<640){s({containerWidth:f,chartHeight:300,margins:{top:15,right:60,bottom:40,left:35},tickFontSize:"10px",tickPadding:8,legendGap:"3",legendTextSize:"text-xs"});return}if(f<1024){s({containerWidth:f,chartHeight:400,margins:{top:18,right:120,bottom:50,left:40},tickFontSize:"11px",tickPadding:12,legendGap:"5",legendTextSize:"text-sm"});return}s({containerWidth:f,chartHeight:500,margins:{top:20,right:200,bottom:60,left:50},tickFontSize:"12px",tickPadding:20,legendGap:"7",legendTextSize:"text-sm"})};A();const c=new ResizeObserver(()=>{A()});return c.observe(r.current),()=>{c.disconnect()}},[r]),t};function X4({selectedGroups:r,setSelectedGroups:t,filters:s}){const A=z0.useRef(null),c=z0.useRef(null),[E,f]=z0.useState(null),[d,p]=z0.useState({x:0,y:0}),h=q4(c);z0.useEffect(()=>{if(!A.current||!c.current)return;let y=IA(s.country==="All"?void 0:s.country,s.region==="All"?void 0:s.region);const N=new Map;y.forEach(w=>{const x=N.get(w.year);x?(x.bottom_50=(x.bottom_50+w.bottom_50)/2,x.top_10=(x.top_10+w.top_10)/2,x.top_1=(x.top_1+w.top_1)/2):N.set(w.year,{...w})});const G=Array.from(N.values()).sort((w,x)=>w.year-x.year);if(G.length===0)return;const J=G[0].year,U=G[G.length-1].year,H=G.map(w=>s.yAxis==="Income Share"?{...w,top_10:w.top_10*100,bottom_50:w.bottom_50*100,top_1:w.top_1*100}:s.yAxis==="Real Income Growth"?{...w,top_10:w.top_10*100,bottom_50:w.bottom_50*100,top_1:w.top_1*100}:{...w,top_10:w.top_10*100,bottom_50:w.bottom_50*100,top_1:w.top_1*100}),{containerWidth:d0,chartHeight:o0,margins:e0}=h,$=d0-e0.left-e0.right,u0=o0-e0.top-e0.bottom,q=P5(A.current);q.selectAll("*").remove(),q.attr("viewBox",`0 0 ${d0} ${o0}`).attr("preserveAspectRatio","xMidYMid meet").style("max-width","100%").style("height","auto").style("display","block");const n0=q.append("g").attr("transform",`translate(${e0.left},${e0.top})`),A0=Ji().domain([J,U]).range([0,$]);let B0,N0;s.yAxis==="Income Share"?(B0=[0,100],N0=w=>w+"%"):s.yAxis==="Real Income Growth"?(B0=[0,100],N0=w=>w+"%"):(B0=[0,100],N0=w=>w+"%");const C0=Ji().domain(B0).range([u0,0]),F=Pi().x(w=>A0(w.year)).y(w=>C0(w.top_10)).curve(xi),E0=Pi().x(w=>A0(w.year)).y(w=>C0(w.bottom_50)).curve(xi),p0=Pi().x(w=>A0(w.year)).y(w=>C0(w.top_1)).curve(xi);r.top_1&&n0.append("path").datum(H).attr("fill","none").attr("stroke","#bdea00").attr("stroke-width",2.5).attr("d",p0),r.top10&&n0.append("path").datum(H).attr("fill","none").attr("stroke","#00ff9c").attr("stroke-width",2).attr("d",F),r.bottom50&&n0.append("path").datum(H).attr("fill","none").attr("stroke","#ff00b7").attr("stroke-width",2.5).attr("d",E0);const O0=$i(w=>w.year).left,v0=n0.append("line").attr("stroke","#64748b").attr("stroke-width",1).attr("stroke-dasharray","3,3").style("opacity",0),i0=n0.append("g");n0.append("rect").attr("width",$).attr("height",u0).attr("fill","none").attr("pointer-events","all").on("mousemove",function(w){const[x]=x5(w),P=Math.round(A0.invert(x)),M=O0(H,P);if(M>=0&&M<H.length){const v=H[M];v0.attr("x1",A0(v.year)).attr("x2",A0(v.year)).attr("y1",0).attr("y2",u0).style("opacity",1),i0.selectAll("*").remove(),r.top10&&i0.append("circle").attr("cx",A0(v.year)).attr("cy",C0(v.top_10)).attr("r",4.5).attr("fill","#00ff9c"),r.bottom50&&i0.append("circle").attr("cx",A0(v.year)).attr("cy",C0(v.bottom_50)).attr("r",4.5).attr("fill","#ff00b7"),r.top_1&&i0.append("circle").attr("cx",A0(v.year)).attr("cy",C0(v.top_1)).attr("r",4.5).attr("fill","#bdea00"),f({year:`${v.year}`,values:[{group:"Bottom 50%",value:v.bottom_50.toFixed(1)+"%",color:"#ff00b7"},{group:"Top 10%",value:v.top_10.toFixed(1)+"%",color:"#00ff9c"},{group:"Top 1%",value:v.top_1.toFixed(1)+"%",color:"#bdea00"}]});const Y=c.current.getBoundingClientRect();let j=w.clientX-Y.left+20,X=w.clientY-Y.top-100;const r0=W?140:180,c0=120;j+r0>Y.width&&(j=Math.max(10,w.clientX-Y.left-r0-20)),X<10&&(X=w.clientY-Y.top+20),X+c0>Y.height&&(X=Math.max(10,w.clientY-Y.top-c0-20)),p({x:j,y:X})}}).on("mouseleave",function(){v0.style("opacity",0),i0.selectAll("*").remove(),f(null)}),n0.append("g").attr("transform",`translate(0,${u0})`).call($A(A0).tickFormat(w=>w.toString()).tickSize(0).tickPadding(h.tickPadding).ticks(4)).call(w=>w.select(".domain").remove()).style("color","#d7dcf0").style("font-size",h.tickFontSize),n0.append("g").call(qA(C0).tickFormat(N0).tickSize(0).tickPadding(h.tickPadding).ticks(4)).call(w=>w.select(".domain").remove()).style("color","#d7dcf0").style("font-size",h.tickFontSize)},[r,s,h]);const W=h.containerWidth<640;return _.jsxs("div",{className:"relative",children:[_.jsxs("div",{className:`px-2 mt-6 sm:mt-10 mb-2 ${W?"flex flex-col gap-3":`flex gap-${h.legendGap} text-${h.legendTextSize}`} ${h.legendTextSize}`,children:[_.jsxs("button",{onClick:()=>t({...r,bottom50:!r.bottom50}),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[_.jsx("span",{className:`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${r.bottom50?"bg-[#ff00b7]":"bg-gray-600"}`}),_.jsx("span",{className:"text-xs sm:text-sm",children:"Bottom 50%"})]}),_.jsxs("button",{onClick:()=>t({...r,top10:!r.top10}),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[_.jsx("span",{className:`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${r.top10?"bg-[#00ff9c]":"bg-gray-600"}`}),_.jsx("span",{className:"text-xs sm:text-sm",children:"Top 10%"})]}),_.jsxs("button",{onClick:()=>t({...r,top_1:!r.top_1}),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[_.jsx("span",{className:`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${r.top_1?"bg-[#bdea00]":"bg-gray-600"}`,style:{border:r.top_1?"1px dashed white":"none"}}),_.jsx("span",{className:"text-xs sm:text-sm",children:"Top 1%"})]})]}),_.jsxs("div",{ref:c,className:"bg-[#020b0c] rounded-lg p-3 sm:p-4 relative w-full overflow-hidden",children:[_.jsx("svg",{ref:A}),E&&_.jsxs("div",{className:"absolute pointer-events-none bg-[#020b0c] border border-[#0a6167] rounded-lg p-2 sm:p-3 shadow-xl text-xs sm:text-sm",style:{left:`${d.x}px`,top:`${d.y}px`,zIndex:1e3,maxWidth:W?"140px":"auto"},children:[_.jsx("div",{className:"text-gray-300 mb-1.5 sm:mb-2 font-semibold",children:E.year}),_.jsx("table",{className:"text-xs sm:text-sm",children:_.jsx("tbody",{children:E.values.map((y,N)=>_.jsxs("tr",{className:"border-b border-[#0a6167]/50 last:border-0",children:[_.jsx("td",{className:"py-1 sm:py-1.5 pr-2 sm:pr-4",children:_.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[_.jsx("span",{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0",style:{backgroundColor:y.color}}),_.jsx("span",{className:"text-[#e5e6ed] whitespace-nowrap text-xs sm:text-sm",children:y.group})]})}),_.jsx("td",{className:"text-right py-1 sm:py-1.5 pl-1 sm:pl-4 text-[#e5e6ed] font-semibold",children:y.value})]},N))})})]})]})]})}function al(){const[r,t]=z0.useState("income"),s=[{id:"income",label:"Income share"},{id:"wealth",label:"Gini coefficient"}];return _.jsx("nav",{className:"flex gap-6",children:s.map(A=>_.jsxs("button",{onClick:()=>t(A.id),className:`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${r===A.id?"text-white border-b-2 border-[#0a6167]":"text-gray-500 hover:text-gray-300"}`,children:[_.jsx(ko,{className:"w-4 h-4"}),A.label]},A.id))})}function el(){const[r,t]=z0.useState({top10:!0,bottom50:!0,top_1:!0}),[s,A]=z0.useState({yAxis:"Income Share",incomeType:"Factor Income",country:"US",region:"All"});return _.jsxs("div",{className:"min-h-screen bg-[#020b0c] text-[#e5e6ed]",children:[_.jsx("header",{className:"bg-[#020b0c] border-b border-[#0a6167]/20",children:_.jsxs("div",{className:"max-w-container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(ko,{className:"w-4 sm:w-5 text-[#0a6167]"}),_.jsx("h1",{className:"text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",children:"Global Inequality Explorer"})]}),_.jsx(al,{})]})}),_.jsxs("main",{className:"max-w-container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6",children:[_.jsx("div",{className:"mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500 py-2",children:_.jsx("p",{children:"You can adjust the graph with the options below: what the y-axis displays, the definition of income, the statistical unit, and the data frequency."})}),_.jsx(PA,{filters:s,setFilters:A}),_.jsx("div",{className:"flex-1",children:_.jsx(X4,{selectedGroups:r,setSelectedGroups:t,filters:s})})]})]})}gA.createRoot(document.getElementById("root")).render(_.jsx(el,{}));
