System.register([],(function(e,t){"use strict";return{execute:function(){var e=document.createElement("style");function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}e.textContent='.wrapper{width:100%;height:100vh;display:flex;align-items:center;justify-content:center}:root{--board-width: 90%;--board-height: 90%}.rotate{transform:rotate(180deg)}.noClickOverlay{height:var(--board-height);aspect-ratio:1;border-radius:10px}.board{height:var(--board-height);background-image:url(https://assets-themes.chess.com/image/9rdwe/200.png);object-fit:scale-down;background-size:100%;background-repeat:no-repeat;position:relative;aspect-ratio:1;box-shadow:inset 0 0 10px rgba(0,0,0,.5),0 0 15px rgba(0,0,0,.5);border-radius:10px}.board-grid{position:absolute;top:0;bottom:0;right:0;left:0;display:flex;flex-wrap:wrap}.piece{background-size:100%;width:12.5%;height:12.5%;cursor:pointer;position:absolute;left:0;top:0}.possible-move{background-color:rgba(0,0,255,.31);background-size:100%;width:12.5%;height:12.5%;cursor:pointer;position:absolute;left:0;top:0}.capturable{background-color:rgba(255,0,0,.31);background-size:100%;width:12.5%;height:12.5%;cursor:pointer;position:absolute;left:0;top:0}.piece.br{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/br.png)}.piece.bb{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/bb.png)}.piece.bn{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/bn.png)}.piece.bk{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/bk.png)}.piece.bq{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/bq.png)}.piece.bp{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/bp.png)}.piece.wr{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wr.png)}.piece.wb{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wb.png)}.piece.wn{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wn.png)}.piece.wk{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wk.png)}.piece.wq{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wq.png)}.piece.wp{background-image:url(https://assets-themes.chess.com/image/ejgfv/150/wp.png)}.selected-piece{background-color:rgba(255,255,0,.294)}.square-64{transform:translate(700%,700%)}.rotate .square-64{transform:translate(700%,700%) rotate(180deg)}.square-63{transform:translate(600%,700%)}.rotate .square-63{transform:translate(600%,700%) rotate(180deg)}.square-62{transform:translate(500%,700%)}.rotate .square-62{transform:translate(500%,700%) rotate(180deg)}.square-61{transform:translate(400%,700%)}.rotate .square-61{transform:translate(400%,700%) rotate(180deg)}.square-60{transform:translate(300%,700%)}.rotate .square-60{transform:translate(300%,700%) rotate(180deg)}.square-59{transform:translate(200%,700%)}.rotate .square-59{transform:translate(200%,700%) rotate(180deg)}.square-58{transform:translate(100%,700%)}.rotate .square-58{transform:translate(100%,700%) rotate(180deg)}.square-57{transform:translateY(700%)}.rotate .square-57{transform:translateY(700%) rotate(180deg)}.square-56{transform:translate(700%,600%)}.rotate .square-56{transform:translate(700%,600%) rotate(180deg)}.square-55{transform:translate(600%,600%)}.rotate .square-55{transform:translate(600%,600%) rotate(180deg)}.square-54{transform:translate(500%,600%)}.rotate .square-54{transform:translate(500%,600%) rotate(180deg)}.square-53{transform:translate(400%,600%)}.rotate .square-53{transform:translate(400%,600%) rotate(180deg)}.square-52{transform:translate(300%,600%)}.rotate .square-52{transform:translate(300%,600%) rotate(180deg)}.square-51{transform:translate(200%,600%)}.rotate .square-51{transform:translate(200%,600%) rotate(180deg)}.square-50{transform:translate(100%,600%)}.rotate .square-50{transform:translate(100%,600%) rotate(180deg)}.square-49{transform:translateY(600%)}.rotate .square-49{transform:translateY(600%) rotate(180deg)}.square-48{transform:translate(700%,500%)}.rotate .square-48{transform:translate(700%,500%) rotate(180deg)}.square-47{transform:translate(600%,500%)}.rotate .square-47{transform:translate(600%,500%) rotate(180deg)}.square-46{transform:translate(500%,500%)}.rotate .square-46{transform:translate(500%,500%) rotate(180deg)}.square-45{transform:translate(400%,500%)}.rotate .square-45{transform:translate(400%,500%) rotate(180deg)}.square-44{transform:translate(300%,500%)}.rotate .square-44{transform:translate(300%,500%) rotate(180deg)}.square-43{transform:translate(200%,500%)}.rotate .square-43{transform:translate(200%,500%) rotate(180deg)}.square-42{transform:translate(100%,500%)}.rotate .square-42{transform:translate(100%,500%) rotate(180deg)}.square-41{transform:translateY(500%)}.rotate .square-41{transform:translateY(500%) rotate(180deg)}.square-40{transform:translate(700%,400%)}.rotate .square-40{transform:translate(700%,400%) rotate(180deg)}.square-39{transform:translate(600%,400%)}.rotate .square-39{transform:translate(600%,400%) rotate(180deg)}.square-38{transform:translate(500%,400%)}.rotate .square-38{transform:translate(500%,400%) rotate(180deg)}.square-37{transform:translate(400%,400%)}.rotate .square-37{transform:translate(400%,400%) rotate(180deg)}.square-36{transform:translate(300%,400%)}.rotate .square-36{transform:translate(300%,400%) rotate(180deg)}.square-35{transform:translate(200%,400%)}.rotate .square-35{transform:translate(200%,400%) rotate(180deg)}.square-34{transform:translate(100%,400%)}.rotate .square-34{transform:translate(100%,400%) rotate(180deg)}.square-33{transform:translateY(400%)}.rotate .square-33{transform:translateY(400%) rotate(180deg)}.square-32{transform:translate(700%,300%)}.rotate .square-32{transform:translate(700%,300%) rotate(180deg)}.square-31{transform:translate(600%,300%)}.rotate .square-31{transform:translate(600%,300%) rotate(180deg)}.square-30{transform:translate(500%,300%)}.rotate .square-30{transform:translate(500%,300%) rotate(180deg)}.square-29{transform:translate(400%,300%)}.rotate .square-29{transform:translate(400%,300%) rotate(180deg)}.square-28{transform:translate(300%,300%)}.rotate .square-28{transform:translate(300%,300%) rotate(180deg)}.square-27{transform:translate(200%,300%)}.rotate .square-27{transform:translate(200%,300%) rotate(180deg)}.square-26{transform:translate(100%,300%)}.rotate .square-26{transform:translate(100%,300%) rotate(180deg)}.square-25{transform:translateY(300%)}.rotate .square-25{transform:translateY(300%) rotate(180deg)}.square-24{transform:translate(700%,200%)}.rotate .square-24{transform:translate(700%,200%) rotate(180deg)}.square-23{transform:translate(600%,200%)}.rotate .square-23{transform:translate(600%,200%) rotate(180deg)}.square-22{transform:translate(500%,200%)}.rotate .square-22{transform:translate(500%,200%) rotate(180deg)}.square-21{transform:translate(400%,200%)}.rotate .square-21{transform:translate(400%,200%) rotate(180deg)}.square-20{transform:translate(300%,200%)}.rotate .square-20{transform:translate(300%,200%) rotate(180deg)}.square-19{transform:translate(200%,200%)}.rotate .square-19{transform:translate(200%,200%) rotate(180deg)}.square-18{transform:translate(100%,200%)}.rotate .square-18{transform:translate(100%,200%) rotate(180deg)}.square-17{transform:translateY(200%)}.rotate .square-17{transform:translateY(200%) rotate(180deg)}.square-16{transform:translate(700%,100%)}.rotate .square-16{transform:translate(700%,100%) rotate(180deg)}.square-15{transform:translate(600%,100%)}.rotate .square-15{transform:translate(600%,100%) rotate(180deg)}.square-14{transform:translate(500%,100%)}.rotate .square-14{transform:translate(500%,100%) rotate(180deg)}.square-13{transform:translate(400%,100%)}.rotate .square-13{transform:translate(400%,100%) rotate(180deg)}.square-12{transform:translate(300%,100%)}.rotate .square-12{transform:translate(300%,100%) rotate(180deg)}.square-11{transform:translate(200%,100%)}.rotate .square-11{transform:translate(200%,100%) rotate(180deg)}.square-10{transform:translate(100%,100%)}.rotate .square-10{transform:translate(100%,100%) rotate(180deg)}.square-9{transform:translateY(100%)}.rotate .square-9{transform:translateY(100%) rotate(180deg)}.square-8{transform:translate(700%)}.rotate .square-8{transform:translate(700%) rotate(180deg)}.square-7{transform:translate(600%)}.rotate .square-7{transform:translate(600%) rotate(180deg)}.square-6{transform:translate(500%)}.rotate .square-6{transform:translate(500%) rotate(180deg)}.square-5{transform:translate(400%)}.rotate .square-5{transform:translate(400%) rotate(180deg)}.square-4{transform:translate(300%)}.rotate .square-4{transform:translate(300%) rotate(180deg)}.square-3{transform:translate(200%)}.rotate .square-3{transform:translate(200%) rotate(180deg)}.square-2{transform:translate(100%)}.rotate .square-2{transform:translate(100%) rotate(180deg)}.square-1{transform:translate(0)}.rotate .square-1{transform:translate(0) rotate(180deg)}.check-wk .piece.wk,.check-bk .piece.bk{background-color:rgba(255,0,0,.608)}.hompageButton{border:none;border-radius:.5rem;padding:20px;font-size:20px;font-weight:700;margin-bottom:10px;width:100%;transition:all .5s ease}.playOnline{background-color:#556e3d}.homepageMenu{display:flex;justify-content:center;align-items:center;flex-direction:column}.homepageMenu h1{font-size:6em;margin-bottom:25px;text-align:center}.playOnline:hover{background-color:#739552}.playOffline:hover{background-color:#8b8b8b}.homepageOuterDiv{display:flex;justify-content:center;align-items:center;flex-wrap:wrap-reverse!important}.boardOuterDiv{height:50%;position:relative;transition:all .5s ease}@media (max-width: 576px){.homepageMenu h1{font-size:3.5rem;margin-bottom:15px}.hompageButton{padding:auto;font-size:14px}.boardOuterDiv{height:38%}.homepageOuterDiv{flex-direction:column-reverse}}.Container{height:100vh;background:url(https://wallpapercave.com/wp/6SLzBEY.jpg) no-repeat left top;background-size:cover;overflow:hidden;display:flex;flex-flow:column wrap;justify-content:center;align-items:center}.text h1{color:#011718;margin-top:-200px;font-size:15em;text-align:center;text-shadow:-5px 5px 0px rgba(0,0,0,.7),-10px 10px 0px rgba(0,0,0,.4),-15px 15px 0px rgba(0,0,0,.2);font-family:monospace;font-weight:700}.text h2{color:#000;font-size:5em;text-shadow:-5px 5px 0px rgba(0,0,0,.7);text-align:center;margin-top:-75px;font-family:monospace;font-weight:700}.text h3{color:#fff;margin-left:30px;font-size:2em;text-shadow:-5px 5px 0px rgba(0,0,0,.7);margin-top:-10px;font-family:monospace;font-weight:700}.torch{margin:-150px 0 0 -150px;width:200px;height:200px;box-shadow:0 0 0 9999em rgba(0,0,0,.97);opacity:1;border-radius:50%;position:fixed;background:rgba(0,0,0,.3)}.torch:after{content:"";display:block;border-radius:50%;width:100%;height:100%;top:0;left:0;box-shadow:inset 0 0 40px 2px #000,0 0 20px 4px rgba(13,13,10,.2)}:root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:rgba(255,255,255,.87);background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#root{background-color:#242424}\n',document.head.appendChild(e);var r={exports:{}},i={},s={exports:{}},a={},o=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator,w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||w}function k(){}function _(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||w}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=S.prototype;var I=_.prototype=new k;I.constructor=_,b(I,S.prototype),I.isPureReactComponent=!0;var T=Array.isArray,C=Object.prototype.hasOwnProperty,x={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)C.call(t,r)&&!A.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case l:a=!0}}if(a)return i=i(a=e),e=""===r?"."+O(a,0):r,T(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),D(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=""===r?".":r+":",T(e))for(var u=0;u<e.length;u++){var c=r+O(s=e[u],u);a+=D(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)a+=D(s=s.value,t,n,c=r+O(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function L(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},F={transition:null},j={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:F,ReactCurrentOwner:x};function V(){throw Error("act(...) is not supported in production builds of React.")}a.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=S,a.Fragment=u,a.Profiler=h,a.PureComponent=_,a.StrictMode=c,a.Suspense=m,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,a.act=V,a.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)C.call(t,u)&&!A.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:o,type:e.type,key:i,ref:s,props:r,_owner:a}},a.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},a.createElement=N,a.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:p,render:e}},a.isValidElement=P,a.lazy=function(e){return{$$typeof:v,_payload:{_status:-1,_result:e},_init:M}},a.memo=function(e,t){return{$$typeof:g,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},a.unstable_act=V,a.useCallback=function(e,t){return U.current.useCallback(e,t)},a.useContext=function(e){return U.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return U.current.useDeferredValue(e)},a.useEffect=function(e,t){return U.current.useEffect(e,t)},a.useId=function(){return U.current.useId()},a.useImperativeHandle=function(e,t,n){return U.current.useImperativeHandle(e,t,n)},a.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return U.current.useMemo(e,t)},a.useReducer=function(e,t,n){return U.current.useReducer(e,t,n)},a.useRef=function(e){return U.current.useRef(e)},a.useState=function(e){return U.current.useState(e)},a.useSyncExternalStore=function(e,t,n){return U.current.useSyncExternalStore(e,t,n)},a.useTransition=function(){return U.current.useTransition()},a.version="18.3.1",s.exports=a;var z=s.exports;const B=n(z),q=t({__proto__:null,default:B},[z]);
/**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
var $=z,H=Symbol.for("react.element"),W=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,G=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function Y(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)K.call(t,r)&&!Q.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:H,type:e,key:s,ref:a,props:i,_owner:G.current}}i.Fragment=W,i.jsx=Y,i.jsxs=Y,r.exports=i;var X=r.exports,J={},Z={exports:{}},ee={},te={exports:{}},ne={};
/**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,R(E);else{var t=n(u);null!==t&&O(b,t.startTime-e)}}function E(t,i){p=!1,m&&(m=!1,v(I),I=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!x());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof o?h.callback=o:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&O(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,k=!1,_=null,I=-1,T=5,C=-1;function x(){return!(e.unstable_now()-C<T)}function A(){if(null!==_){var t=e.unstable_now();C=t;var n=!0;try{n=_(!0,t)}finally{n?S():(k=!1,_=null)}}else k=!1}if("function"==typeof y)S=function(){y(A)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,P=N.port2;N.port1.onmessage=A,S=function(){P.postMessage(null)}}else S=function(){g(A,0)};function R(e){_=e,k||(k=!0,S())}function O(t,n){I=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,R(E))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch(s="object"==typeof s&&null!==s&&"number"==typeof(s=s.delay)&&0<s?a+s:a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(v(I),I=-1):m=!0,O(b,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,R(E))),r},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(ne),te.exports=ne;var re=te.exports,ie=z,se=re;
/**
       * @license React
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */function ae(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oe=new Set,le={};function ue(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(le[e]=t,e=0;e<t.length;e++)oe.add(t[e])}var he=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),de=Object.prototype.hasOwnProperty,fe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pe={},me={};function ge(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ve[e]=new ge(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ve[t]=new ge(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ve[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ve[e]=new ge(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ve[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ve[e]=new ge(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ve[e]=new ge(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ve[e]=new ge(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ve[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ye=/[\-:]([a-z])/g;function we(e){return e[1].toUpperCase()}function be(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!de.call(me,e)||!de.call(pe,e)&&(fe.test(e)?me[e]=!0:(pe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ye,we);ve[t]=new ge(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ye,we);ve[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ye,we);ve[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ve[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)})),ve.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ve[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)}));var Ee=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),ke=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),Le=Symbol.iterator;function Me(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Le&&e[Le]||e["@@iterator"])?e:null}var Ue,Fe=Object.assign;function je(e){if(void 0===Ue)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ue=t&&t[1]||""}return"\n"+Ue+e}var Ve=!1;function ze(e,t){if(!e||Ve)return"";Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(W){var r=W}Reflect.construct(e,[],t)}else{try{t.call()}catch(W){r=W}e.call(t.prototype)}else{try{throw Error()}catch(W){r=W}e()}}catch(W){if(W&&r&&"string"==typeof W.stack){for(var i=W.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?je(e):""}function Be(e){switch(e.tag){case 5:return je(e.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 2:case 15:return e=ze(e.type,!1);case 11:return e=ze(e.type.render,!1);case 1:return e=ze(e.type,!0);default:return""}}function qe(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _e:return"Fragment";case ke:return"Portal";case Te:return"Profiler";case Ie:return"StrictMode";case Ne:return"Suspense";case Pe:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Ae:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return null!==(t=e.displayName||null)?t:qe(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return qe(e(t))}catch(n){}}return null}function $e(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function He(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function We(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ke(e){e._valueTracker||(e._valueTracker=function(e){var t=We(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ge(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=We(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Qe(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(Qv){return e.body}}function Ye(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Xe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=He(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Je(e,t){null!=(t=t.checked)&&be(e,"checked",t,!1)}function Ze(e,t){Je(e,t);var n=He(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&tt(e,t.type,He(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function et(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function tt(e,t,n){"number"===t&&Qe(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nt=Array.isArray;function rt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+He(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function it(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(ae(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function st(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(ae(92));if(nt(n)){if(1<n.length)throw Error(ae(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:He(n)}}function at(e,t){var n=He(t.value),r=He(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ot(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function lt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?lt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ct,ht,dt=(ht=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ct=ct||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ct.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ht(e,t)}))}:ht);function ft(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mt=["Webkit","ms","Moz","O"];function gt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||pt.hasOwnProperty(e)&&pt[e]?(""+t).trim():t+"px"}function vt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=gt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pt).forEach((function(e){mt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pt[t]=pt[e]}))}));var yt=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wt(e,t){if(t){if(yt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(ae(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(ae(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(ae(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(ae(62))}}function bt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function St(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var kt=null,_t=null,It=null;function Tt(e){if(e=bs(e)){if("function"!=typeof kt)throw Error(ae(280));var t=e.stateNode;t&&(t=Ss(t),kt(e.stateNode,e.type,t))}}function Ct(e){_t?It?It.push(e):It=[e]:_t=e}function xt(){if(_t){var e=_t,t=It;if(It=_t=null,Tt(e),t)for(e=0;e<t.length;e++)Tt(t[e])}}function At(e,t){return e(t)}function Nt(){}var Pt=!1;function Rt(e,t,n){if(Pt)return e(t,n);Pt=!0;try{return At(e,t,n)}finally{Pt=!1,(null!==_t||null!==It)&&(Nt(),xt())}}function Ot(e,t){var n=e.stateNode;if(null===n)return null;var r=Ss(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(ae(231,t,typeof n));return n}var Dt=!1;if(he)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch(ht){Dt=!1}function Mt(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(sh){this.onError(sh)}}var Ut=!1,Ft=null,jt=!1,Vt=null,zt={onError:function(e){Ut=!0,Ft=e}};function Bt(e,t,n,r,i,s,a,o,l){Ut=!1,Ft=null,Mt.apply(zt,arguments)}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $t(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function Ht(e){if(qt(e)!==e)throw Error(ae(188))}function Wt(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=qt(e)))throw Error(ae(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ht(i),e;if(s===r)return Ht(i),t;s=s.sibling}throw Error(ae(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==r)throw Error(ae(190))}if(3!==n.tag)throw Error(ae(188));return n.stateNode.current===n?e:t}(e),null!==e?Kt(e):null}function Kt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Kt(e);if(null!==t)return t;e=e.sibling}return null}var Gt=se.unstable_scheduleCallback,Qt=se.unstable_cancelCallback,Yt=se.unstable_shouldYield,Xt=se.unstable_requestPaint,Jt=se.unstable_now,Zt=se.unstable_getCurrentPriorityLevel,en=se.unstable_ImmediatePriority,tn=se.unstable_UserBlockingPriority,nn=se.unstable_NormalPriority,rn=se.unstable_LowPriority,sn=se.unstable_IdlePriority,an=null,on=null,ln=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(un(e)/cn|0)|0},un=Math.log,cn=Math.LN2,hn=64,dn=4194304;function fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=fn(o):0!=(s&=a)&&(r=fn(s))}else 0!=(a=n&~i)?r=fn(a):0!==s&&(r=fn(s));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ln(t)),r|=e[n],t&=~i;return r}function mn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function gn(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function vn(){var e=hn;return!(4194240&(hn<<=1))&&(hn=64),e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ln(t)]=n}function bn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var En=0;function Sn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var kn,_n,In,Tn,Cn,xn=!1,An=[],Nn=null,Pn=null,Rn=null,On=new Map,Dn=new Map,Ln=[],Mn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Un(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function Fn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&null!==(t=bs(t))&&_n(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function jn(e){var t=ws(e.target);if(null!==t){var n=qt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$t(n)))return e.blockedOn=t,void Cn(e.priority,(function(){In(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bs(n))&&_n(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Et=r,n.target.dispatchEvent(r),Et=null,t.shift()}return!0}function zn(e,t,n){Vn(e)&&n.delete(t)}function Bn(){xn=!1,null!==Nn&&Vn(Nn)&&(Nn=null),null!==Pn&&Vn(Pn)&&(Pn=null),null!==Rn&&Vn(Rn)&&(Rn=null),On.forEach(zn),Dn.forEach(zn)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,xn||(xn=!0,se.unstable_scheduleCallback(se.unstable_NormalPriority,Bn)))}function $n(e){function t(t){return qn(t,e)}if(0<An.length){qn(An[0],e);for(var n=1;n<An.length;n++){var r=An[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Nn&&qn(Nn,e),null!==Pn&&qn(Pn,e),null!==Rn&&qn(Rn,e),On.forEach(t),Dn.forEach(t),n=0;n<Ln.length;n++)(r=Ln[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&null===(n=Ln[0]).blockedOn;)jn(n),null===n.blockedOn&&Ln.shift()}var Hn=Ee.ReactCurrentBatchConfig,Wn=!0;function Kn(e,t,n,r){var i=En,s=Hn.transition;Hn.transition=null;try{En=1,Qn(e,t,n,r)}finally{En=i,Hn.transition=s}}function Gn(e,t,n,r){var i=En,s=Hn.transition;Hn.transition=null;try{En=4,Qn(e,t,n,r)}finally{En=i,Hn.transition=s}}function Qn(e,t,n,r){if(Wn){var i=Xn(e,t,n,r);if(null===i)Hi(e,t,r,Yn,n),Un(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Nn=Fn(Nn,e,t,n,r,i),!0;case"dragenter":return Pn=Fn(Pn,e,t,n,r,i),!0;case"mouseover":return Rn=Fn(Rn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return On.set(s,Fn(On.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dn.set(s,Fn(Dn.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Un(e,r),4&t&&-1<Mn.indexOf(e)){for(;null!==i;){var s=bs(i);if(null!==s&&kn(s),null===(s=Xn(e,t,n,r))&&Hi(e,t,r,Yn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Yn=null;function Xn(e,t,n,r){if(Yn=null,null!==(e=ws(e=St(r))))if(null===(t=qt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$t(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yn=e,null}function Jn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zt()){case en:return 1;case tn:return 4;case nn:case rn:return 16;case sn:return 536870912;default:return 16}default:return 16}}var Zn=null,er=null,tr=null;function nr(){if(tr)return tr;var e,t,n=er,r=n.length,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return tr=i.slice(e,1<t?1-t:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ir(){return!0}function sr(){return!1}function ar(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?ir:sr,this.isPropagationStopped=sr,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var or,lr,ur,cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hr=ar(cr),dr=Fe({},cr,{view:0,detail:0}),fr=ar(dr),pr=Fe({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&"mousemove"===e.type?(or=e.screenX-ur.screenX,lr=e.screenY-ur.screenY):lr=or=0,ur=e),or)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),mr=ar(pr),gr=ar(Fe({},pr,{dataTransfer:0})),vr=ar(Fe({},dr,{relatedTarget:0})),yr=ar(Fe({},cr,{animationName:0,elapsedTime:0,pseudoElement:0})),wr=Fe({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),br=ar(wr),Er=ar(Fe({},cr,{data:0})),Sr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Tr(){return Ir}var Cr=Fe({},dr,{key:function(e){if(e.key){var t=Sr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=rr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?rr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?rr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),xr=ar(Cr),Ar=ar(Fe({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nr=ar(Fe({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr})),Pr=ar(Fe({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=Fe({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Or=ar(Rr),Dr=[9,13,27,32],Lr=he&&"CompositionEvent"in window,Mr=null;he&&"documentMode"in document&&(Mr=document.documentMode);var Ur=he&&"TextEvent"in window&&!Mr,Fr=he&&(!Lr||Mr&&8<Mr&&11>=Mr),jr=String.fromCharCode(32),Vr=!1;function zr(e,t){switch(e){case"keyup":return-1!==Dr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Br(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var qr=!1,$r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$r[e.type]:"textarea"===t}function Wr(e,t,n,r){Ct(r),0<(t=Ki(t,"onChange")).length&&(n=new hr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,Gr=null;function Qr(e){ji(e,0)}function Yr(e){if(Ge(Es(e)))return e}function Xr(e,t){if("change"===e)return t}var Jr=!1;if(he){var Zr;if(he){var ei="oninput"in document;if(!ei){var ti=document.createElement("div");ti.setAttribute("oninput","return;"),ei="function"==typeof ti.oninput}Zr=ei}else Zr=!1;Jr=Zr&&(!document.documentMode||9<document.documentMode)}function ni(){Kr&&(Kr.detachEvent("onpropertychange",ri),Gr=Kr=null)}function ri(e){if("value"===e.propertyName&&Yr(Gr)){var t=[];Wr(t,Gr,e,St(e)),Rt(Qr,t)}}function ii(e,t,n){"focusin"===e?(ni(),Gr=n,(Kr=t).attachEvent("onpropertychange",ri)):"focusout"===e&&ni()}function si(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(Gr)}function ai(e,t){if("click"===e)return Yr(t)}function oi(e,t){if("input"===e||"change"===e)return Yr(t)}var li="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ui(e,t){if(li(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!de.call(t,i)||!li(e[i],t[i]))return!1}return!0}function ci(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hi(e,t){var n,r=ci(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ci(r)}}function di(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?di(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fi(){for(var e=window,t=Qe();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Qe((e=t.contentWindow).document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mi(e){var t=fi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&di(n.ownerDocument.documentElement,n)){if(null!==r&&pi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=hi(n,s);var a=hi(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gi=he&&"documentMode"in document&&11>=document.documentMode,vi=null,yi=null,wi=null,bi=!1;function Ei(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;bi||null==vi||vi!==Qe(r)||(r="selectionStart"in(r=vi)&&pi(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},wi&&ui(wi,r)||(wi=r,0<(r=Ki(yi,"onSelect")).length&&(t=new hr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vi)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},_i={},Ii={};function Ti(e){if(_i[e])return _i[e];if(!ki[e])return e;var t,n=ki[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ii)return _i[e]=n[t];return e}he&&(Ii=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);var Ci=Ti("animationend"),xi=Ti("animationiteration"),Ai=Ti("animationstart"),Ni=Ti("transitionend"),Pi=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(e,t){Pi.set(e,t),ue(t,[e])}for(var Di=0;Di<Ri.length;Di++){var Li=Ri[Di];Oi(Li.toLowerCase(),"on"+(Li[0].toUpperCase()+Li.slice(1)))}Oi(Ci,"onAnimationEnd"),Oi(xi,"onAnimationIteration"),Oi(Ai,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Ni,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ui=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function Fi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(Bt.apply(this,arguments),Ut){if(!Ut)throw Error(ae(198));var u=Ft;Ut=!1,Ft=null,jt||(jt=!0,Vt=u)}}(r,t,void 0,e),e.currentTarget=null}function ji(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Fi(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Fi(i,o,u),s=l}}}if(jt)throw e=Vt,jt=!1,Vt=null,e}function Vi(e,t){var n=t[gs];void 0===n&&(n=t[gs]=new Set);var r=e+"__bubble";n.has(r)||($i(t,e,2,!1),n.add(r))}function zi(e,t,n){var r=0;t&&(r|=4),$i(n,e,r,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function qi(e){if(!e[Bi]){e[Bi]=!0,oe.forEach((function(t){"selectionchange"!==t&&(Ui.has(t)||zi(t,!1,e),zi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bi]||(t[Bi]=!0,zi("selectionchange",!1,t))}}function $i(e,t,n,r){switch(Jn(t)){case 1:var i=Kn;break;case 4:i=Gn;break;default:i=Qn}n=i.bind(null,t,n,e),i=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=ws(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}Rt((function(){var r=s,i=St(n),a=[];e:{var o=Pi.get(e);if(void 0!==o){var l=hr,u=e;switch(e){case"keypress":if(0===rr(n))break e;case"keydown":case"keyup":l=xr;break;case"focusin":u="focus",l=vr;break;case"focusout":u="blur",l=vr;break;case"beforeblur":case"afterblur":l=vr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Nr;break;case Ci:case xi:case Ai:l=yr;break;case Ni:l=Pr;break;case"scroll":l=fr;break;case"wheel":l=Or;break;case"copy":case"cut":case"paste":l=br;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Ar}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&null!=(m=Ot(p,d))&&c.push(Wi(p,m,f))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===Et||!(u=n.relatedTarget||n.fromElement)||!ws(u)&&!u[ms])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?ws(u):null)&&(u!==(h=qt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Ar,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:Es(l),f=null==u?o:Es(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,ws(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Gi(f))p++;for(f=0,m=d;m;m=Gi(m))f++;for(;0<p-f;)c=Gi(c),p--;for(;0<f-p;)d=Gi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Gi(c),d=Gi(d)}c=null}else c=null;null!==l&&Qi(a,o,l,c,!1),null!==u&&null!==h&&Qi(a,h,u,c,!0)}if("select"===(l=(o=r?Es(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Xr;else if(Hr(o))if(Jr)g=oi;else{g=si;var v=ii}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=ai);switch(g&&(g=g(e,r))?Wr(a,g,n,i):(v&&v(e,o,r),"focusout"===e&&(v=o._wrapperState)&&v.controlled&&"number"===o.type&&tt(o,"number",o.value)),v=r?Es(r):window,e){case"focusin":(Hr(v)||"true"===v.contentEditable)&&(vi=v,yi=r,wi=null);break;case"focusout":wi=yi=vi=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,Ei(a,n,i);break;case"selectionchange":if(gi)break;case"keydown":case"keyup":Ei(a,n,i)}var y;if(Lr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else qr?zr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Fr&&"ko"!==n.locale&&(qr||"onCompositionStart"!==w?"onCompositionEnd"===w&&qr&&(y=nr()):(er="value"in(Zn=i)?Zn.value:Zn.textContent,qr=!0)),0<(v=Ki(r,w)).length&&(w=new Er(w,e,null,n,i),a.push({event:w,listeners:v}),(y||null!==(y=Br(n)))&&(w.data=y))),(y=Ur?function(e,t){switch(e){case"compositionend":return Br(t);case"keypress":return 32!==t.which?null:(Vr=!0,jr);case"textInput":return(e=t.data)===jr&&Vr?null:e;default:return null}}(e,n):function(e,t){if(qr)return"compositionend"===e||!Lr&&zr(e,t)?(e=nr(),tr=er=Zn=null,qr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fr&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=Ki(r,"onBeforeInput")).length&&(i=new Er("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y)}ji(a,t)}))}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Ot(e,n))&&r.unshift(Wi(e,s,i)),null!=(s=Ot(e,t))&&r.push(Wi(e,s,i))),e=e.return}return r}function Gi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qi(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=Ot(n,s))&&a.unshift(Wi(n,l,o)):i||null!=(l=Ot(n,s))&&a.push(Wi(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Yi=/\r\n?/g,Xi=/\u0000|\uFFFD/g;function Ji(e){return("string"==typeof e?e:""+e).replace(Yi,"\n").replace(Xi,"")}function Zi(e,t,n){if(t=Ji(t),Ji(e)!==t&&n)throw Error(ae(425))}function es(){}var ts=null,ns=null;function rs(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var is="function"==typeof setTimeout?setTimeout:void 0,ss="function"==typeof clearTimeout?clearTimeout:void 0,as="function"==typeof Promise?Promise:void 0,os="function"==typeof queueMicrotask?queueMicrotask:void 0!==as?function(e){return as.resolve(null).then(e).catch(ls)}:is;function ls(e){setTimeout((function(){throw e}))}function us(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void $n(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);$n(t)}function cs(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ds=Math.random().toString(36).slice(2),fs="__reactFiber$"+ds,ps="__reactProps$"+ds,ms="__reactContainer$"+ds,gs="__reactEvents$"+ds,vs="__reactListeners$"+ds,ys="__reactHandles$"+ds;function ws(e){var t=e[fs];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ms]||n[fs]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=hs(e);null!==e;){if(n=e[fs])return n;e=hs(e)}return t}n=(e=n).parentNode}return null}function bs(e){return!(e=e[fs]||e[ms])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Es(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(ae(33))}function Ss(e){return e[ps]||null}var ks=[],_s=-1;function Is(e){return{current:e}}function Ts(e){0>_s||(e.current=ks[_s],ks[_s]=null,_s--)}function Cs(e,t){_s++,ks[_s]=e.current,e.current=t}var xs={},As=Is(xs),Ns=Is(!1),Ps=xs;function Rs(e,t){var n=e.type.contextTypes;if(!n)return xs;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Os(e){return null!=(e=e.childContextTypes)}function Ds(){Ts(Ns),Ts(As)}function Ls(e,t,n){if(As.current!==xs)throw Error(ae(168));Cs(As,t),Cs(Ns,n)}function Ms(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(ae(108,$e(e)||"Unknown",i));return Fe({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xs,Ps=As.current,Cs(As,e),Cs(Ns,Ns.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(ae(169));n?(e=Ms(e,t,Ps),r.__reactInternalMemoizedMergedChildContext=e,Ts(Ns),Ts(As),Cs(As,e)):Ts(Ns),Cs(Ns,n)}var js=null,Vs=!1,zs=!1;function Bs(e){null===js?js=[e]:js.push(e)}function qs(){if(!zs&&null!==js){zs=!0;var e=0,t=En;try{var n=js;for(En=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}js=null,Vs=!1}catch(i){throw null!==js&&(js=js.slice(e+1)),Gt(en,qs),i}finally{En=t,zs=!1}}return null}var $s=[],Hs=0,Ws=null,Ks=0,Gs=[],Qs=0,Ys=null,Xs=1,Js="";function Zs(e,t){$s[Hs++]=Ks,$s[Hs++]=Ws,Ws=e,Ks=t}function ea(e,t,n){Gs[Qs++]=Xs,Gs[Qs++]=Js,Gs[Qs++]=Ys,Ys=e;var r=Xs;e=Js;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xs=1<<32-ln(t)+i|n<<i|r,Js=s+e}else Xs=1<<s|n<<i|r,Js=e}function ta(e){null!==e.return&&(Zs(e,1),ea(e,1,0))}function na(e){for(;e===Ws;)Ws=$s[--Hs],$s[Hs]=null,Ks=$s[--Hs],$s[Hs]=null;for(;e===Ys;)Ys=Gs[--Qs],Gs[Qs]=null,Js=Gs[--Qs],Gs[Qs]=null,Xs=Gs[--Qs],Gs[Qs]=null}var ra=null,ia=null,sa=!1,aa=null;function oa(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,ia=cs(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ys?{id:Xs,overflow:Js}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,ia=null,!0);default:return!1}}function ua(e){return!(!(1&e.mode)||128&e.flags)}function ca(e){if(sa){var t=ia;if(t){var n=t;if(!la(e,t)){if(ua(e))throw Error(ae(418));t=cs(n.nextSibling);var r=ra;t&&la(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,sa=!1,ra=e)}}else{if(ua(e))throw Error(ae(418));e.flags=-4097&e.flags|2,sa=!1,ra=e}}}function ha(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function da(e){if(e!==ra)return!1;if(!sa)return ha(e),sa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rs(e.type,e.memoizedProps)),t&&(t=ia)){if(ua(e))throw fa(),Error(ae(418));for(;t;)oa(e,t),t=cs(t.nextSibling)}if(ha(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(ae(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ia=cs(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ia=null}}else ia=ra?cs(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ia;e;)e=cs(e.nextSibling)}function pa(){ia=ra=null,sa=!1}function ma(e){null===aa?aa=[e]:aa.push(e)}var ga=Ee.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(ae(309));var r=n.stateNode}if(!r)throw Error(ae(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(ae(284));if(!n._owner)throw Error(ae(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(ae(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Dc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Fc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===_e?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Oe&&wa(s)===t.type)?((r=i(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=Lc(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=jc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Fc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case Se:return(n=Lc(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case ke:return(t=jc(t,e.mode,n)).return=e,t;case Oe:return h(e,(0,t._init)(t._payload),n)}if(nt(t)||Me(t))return(t=Mc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Se:return n.key===i?l(e,t,n,r):null;case ke:return n.key===i?u(e,t,n,r):null;case Oe:return d(e,t,(i=n._init)(n._payload),r)}if(nt(n)||Me(n))return null!==i?null:c(e,t,n,r,null);ya(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case Se:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case ke:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Oe:return f(e,t,n,(0,r._init)(r._payload),i)}if(nt(r)||Me(r))return c(t,e=e.get(n)||null,r,i,null);ya(t,r)}return null}function p(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,o[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===o.length)return n(i,p),sa&&Zs(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return sa&&Zs(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),sa&&Zs(i,m),u}function m(i,a,o,l){var u=Me(o);if("function"!=typeof u)throw Error(ae(150));if(null==(o=u.call(o)))throw Error(ae(151));for(var c=u=null,p=a,m=a=0,g=null,v=o.next();null!==p&&!v.done;m++,v=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,v.value,l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(v.done)return n(i,p),sa&&Zs(i,m),u;if(null===p){for(;!v.done;m++,v=o.next())null!==(v=h(i,v.value,l))&&(a=s(v,a,m),null===c?u=v:c.sibling=v,c=v);return sa&&Zs(i,m),u}for(p=r(i,p);!v.done;m++,v=o.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),sa&&Zs(i,m),u}return function e(r,s,o,l){if("object"==typeof o&&null!==o&&o.type===_e&&null===o.key&&(o=o.props.children),"object"==typeof o&&null!==o){switch(o.$$typeof){case Se:e:{for(var u=o.key,c=s;null!==c;){if(c.key===u){if((u=o.type)===_e){if(7===c.tag){n(r,c.sibling),(s=i(c,o.props.children)).return=r,r=s;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===Oe&&wa(u)===c.type){n(r,c.sibling),(s=i(c,o.props)).ref=va(r,c,o),s.return=r,r=s;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===_e?((s=Mc(o.props.children,r.mode,l,o.key)).return=r,r=s):((l=Lc(o.type,o.key,o.props,null,r.mode,l)).ref=va(r,s,o),l.return=r,r=l)}return a(r);case ke:e:{for(c=o.key;null!==s;){if(s.key===c){if(4===s.tag&&s.stateNode.containerInfo===o.containerInfo&&s.stateNode.implementation===o.implementation){n(r,s.sibling),(s=i(s,o.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=jc(o,r.mode,l)).return=r,r=s}return a(r);case Oe:return e(r,s,(c=o._init)(o._payload),l)}if(nt(o))return p(r,s,o,l);if(Me(o))return m(r,s,o,l);ya(r,o)}return"string"==typeof o&&""!==o||"number"==typeof o?(o=""+o,null!==s&&6===s.tag?(n(r,s.sibling),(s=i(s,o)).return=r,r=s):(n(r,s),(s=Fc(o,r.mode,l)).return=r,r=s),a(r)):n(r,s)}}var Ea=ba(!0),Sa=ba(!1),ka=Is(null),_a=null,Ia=null,Ta=null;function Ca(){Ta=Ia=_a=null}function xa(e){var t=ka.current;Ts(ka),e._currentValue=t}function Aa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Na(e,t){_a=e,Ta=Ia=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Pa(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},null===Ia){if(null===_a)throw Error(ae(308));Ia=e,_a.dependencies={lanes:0,firstContext:e}}else Ia=Ia.next=e;return t}var Ra=null;function Oa(e){null===Ra?Ra=[e]:Ra.push(e)}function Da(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Oa(t)):(n.next=i.next,i.next=n),t.interleaved=n,La(e,r)}function La(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ma=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ja(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Au){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,La(e,n)}return null===(i=r.interleaved)?(t.next=t,Oa(r)):(t.next=i.next,i.next=t),r.interleaved=t,La(e,n)}function za(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bn(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qa(e,t,n,r){var i=e.updateQueue;Ma=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&(o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l)}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Fe({},h,d);break e;case 2:Ma=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Uu|=a,e.lanes=a,e.memoizedState=h}}function $a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(ae(191,i));i.call(r)}}}var Ha={},Wa=Is(Ha),Ka=Is(Ha),Ga=Is(Ha);function Qa(e){if(e===Ha)throw Error(ae(174));return e}function Ya(e,t){switch(Cs(Ga,t),Cs(Ka,e),Cs(Wa,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ut(null,"");break;default:t=ut(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ts(Wa),Cs(Wa,t)}function Xa(){Ts(Wa),Ts(Ka),Ts(Ga)}function Ja(e){Qa(Ga.current);var t=Qa(Wa.current),n=ut(t,e.type);t!==n&&(Cs(Ka,e),Cs(Wa,n))}function Za(e){Ka.current===e&&(Ts(Wa),Ts(Ka))}var eo=Is(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var io=Ee.ReactCurrentDispatcher,so=Ee.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,uo=null,co=!1,ho=!1,fo=0,po=0;function mo(){throw Error(ae(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,i,s){if(ao=s,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?el:tl,e=n(r,i),ho){s=0;do{if(ho=!1,fo=0,25<=s)throw Error(ae(301));s+=1,uo=lo=null,t.updateQueue=null,io.current=nl,e=n(r,i)}while(ho)}if(io.current=Zo,t=null!==lo&&null!==lo.next,ao=0,uo=lo=oo=null,co=!1,t)throw Error(ae(300));return e}function yo(){var e=0!==fo;return fo=0,e}function wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?oo.memoizedState=uo=e:uo=uo.next=e,uo}function bo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===uo?oo.memoizedState:uo.next;if(null!==t)uo=t,lo=e;else{if(null===e)throw Error(ae(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===uo?oo.memoizedState=uo=e:uo=uo.next=e}return uo}function Eo(e,t){return"function"==typeof t?t(e):t}function So(e){var t=bo(),n=t.queue;if(null===n)throw Error(ae(311));n.lastRenderedReducer=e;var r=lo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ao&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,oo.lanes|=c,Uu|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,li(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,oo.lanes|=s,Uu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=bo(),n=t.queue;if(null===n)throw Error(ae(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);li(s,t.memoizedState)||(bl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _o(){}function Io(e,t){var n=oo,r=bo(),i=t(),s=!li(r.memoizedState,i);if(s&&(r.memoizedState=i,bl=!0),r=r.queue,Uo(xo.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==uo&&1&uo.memoizedState.tag){if(n.flags|=2048,Ro(9,Co.bind(null,n,r,i,t),void 0,null),null===Nu)throw Error(ae(349));30&ao||To(n,t,i)}return i}function To(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Ao(t)&&No(e)}function xo(e,t,n){return n((function(){Ao(t)&&No(e)}))}function Ao(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch(r){return!0}}function No(e){var t=La(e,1);null!==t&&rc(t,e,1,-1)}function Po(e){var t=wo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return bo().memoizedState}function Do(e,t,n,r){var i=wo();oo.flags|=e,i.memoizedState=Ro(1|t,n,void 0,void 0===r?null:r)}function Lo(e,t,n,r){var i=bo();r=void 0===r?null:r;var s=void 0;if(null!==lo){var a=lo.memoizedState;if(s=a.destroy,null!==r&&go(r,a.deps))return void(i.memoizedState=Ro(t,n,s,r))}oo.flags|=e,i.memoizedState=Ro(1|t,n,s,r)}function Mo(e,t){return Do(8390656,8,e,t)}function Uo(e,t){return Lo(2048,8,e,t)}function Fo(e,t){return Lo(4,2,e,t)}function jo(e,t){return Lo(4,4,e,t)}function Vo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function zo(e,t,n){return n=null!=n?n.concat([e]):null,Lo(4,4,Vo.bind(null,t,e),n)}function Bo(){}function qo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 21&ao?(li(n,t)||(n=vn(),oo.lanes|=n,Uu|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n)}function Wo(e,t){var n=En;En=0!==n&&4>n?n:4,e(!0);var r=so.transition;so.transition={};try{e(!1),t()}finally{En=n,so.transition=r}}function Ko(){return bo().memoizedState}function Go(e,t,n){var r=nc(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e)?Xo(t,n):null!==(n=Da(e,t,n,r))&&(rc(n,e,r,tc()),Jo(n,t,r))}function Qo(e,t,n){var r=nc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))Xo(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,li(o,a)){var l=t.interleaved;return null===l?(i.next=i,Oa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(W){}null!==(n=Da(e,t,i,r))&&(rc(n,e,r,i=tc()),Jo(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){ho=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bn(e,n)}}var Zo={readContext:Pa,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},el={readContext:Pa,useCallback:function(e,t){return wo().memoizedState=[e,void 0===t?null:t],e},useContext:Pa,useEffect:Mo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Do(4194308,4,Vo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=wo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Go.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},wo().memoizedState=e},useState:Po,useDebugValue:Bo,useDeferredValue:function(e){return wo().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=Wo.bind(null,e[1]),wo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=wo();if(sa){if(void 0===n)throw Error(ae(407));n=n()}else{if(n=t(),null===Nu)throw Error(ae(349));30&ao||To(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Mo(xo.bind(null,r,s,e),[e]),r.flags|=2048,Ro(9,Co.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wo(),t=Nu.identifierPrefix;if(sa){var n=Js;t=":"+t+"R"+(n=(Xs&~(1<<32-ln(Xs)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tl={readContext:Pa,useCallback:qo,useContext:Pa,useEffect:Uo,useImperativeHandle:zo,useInsertionEffect:Fo,useLayoutEffect:jo,useMemo:$o,useReducer:So,useRef:Oo,useState:function(){return So(Eo)},useDebugValue:Bo,useDeferredValue:function(e){return Ho(bo(),lo.memoizedState,e)},useTransition:function(){return[So(Eo)[0],bo().memoizedState]},useMutableSource:_o,useSyncExternalStore:Io,useId:Ko,unstable_isNewReconciler:!1},nl={readContext:Pa,useCallback:qo,useContext:Pa,useEffect:Uo,useImperativeHandle:zo,useInsertionEffect:Fo,useLayoutEffect:jo,useMemo:$o,useReducer:ko,useRef:Oo,useState:function(){return ko(Eo)},useDebugValue:Bo,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[ko(Eo)[0],bo().memoizedState]},useMutableSource:_o,useSyncExternalStore:Io,useId:Ko,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var n in t=Fe({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function il(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Fe({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return!!(e=e._reactInternals)&&qt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tc(),i=nc(e),s=ja(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Va(e,s,i))&&(rc(t,e,i,r),za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tc(),i=nc(e),s=ja(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Va(e,s,i))&&(rc(t,e,i,r),za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tc(),r=nc(e),i=ja(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Va(e,i,r))&&(rc(t,e,r,n),za(t,e,r))}};function al(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!(t.prototype&&t.prototype.isPureReactComponent&&ui(n,r)&&ui(i,s))}function ol(e,t,n){var r=!1,i=xs,s=t.contextType;return"object"==typeof s&&null!==s?s=Pa(s):(i=Os(t)?Ps:As.current,s=(r=null!=(r=t.contextTypes))?Rs(e,i):xs),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ll(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ua(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Pa(s):(s=Os(t)?Ps:As.current,i.context=Rs(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(il(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&sl.enqueueReplaceState(i,i.state,null),qa(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=Be(r),r=r.return}while(r);var i=n}catch($){i="\nError generating stack: "+$.message+"\n"+$.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"==typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=ja(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hu||(Hu=!0,Wu=r),dl(0,t)},n}function ml(e,t,n){(n=ja(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!=typeof r&&(null===Ku?Ku=new Set([this]):Ku.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tc.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=ja(-1,1)).tag=2,Va(n,t,1))),n.lanes|=1),e)}var wl=Ee.ReactCurrentOwner,bl=!1;function El(e,t,n,r){t.child=null===e?Sa(t,null,n,r):Ea(t,e.child,n,r)}function Sl(e,t,n,r,i){n=n.render;var s=t.ref;return Na(t,i),r=vo(e,t,n,r,s,i),n=yo(),null===e||bl?(sa&&n&&ta(t),t.flags|=1,El(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function kl(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Oc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,_l(e,t,s,r,i))}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:ui)(a,r)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=Dc(s,r)).ref=t.ref,e.return=t,t.child=e}function _l(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(ui(s,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=s,!(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);131072&e.flags&&(bl=!0)}}return Cl(e,t,n,r,i)}function Il(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Cs(Du,Ou),Ou|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Cs(Du,Ou),Ou|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Cs(Du,Ou),Ou|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Cs(Du,Ou),Ou|=r;return El(e,t,i,n),t.child}function Tl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var s=Os(n)?Ps:As.current;return s=Rs(t,s),Na(t,i),n=vo(e,t,n,r,s,i),r=yo(),null===e||bl?(sa&&r&&ta(t),t.flags|=1,El(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function xl(e,t,n,r,i){if(Os(n)){var s=!0;Us(t)}else s=!1;if(Na(t,i),null===t.stateNode)$l(e,t),ol(t,n,r),ul(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;u="object"==typeof u&&null!==u?Pa(u):Rs(t,u=Os(n)?Ps:As.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&ll(t,a,r,u),Ma=!1;var d=t.memoizedState;a.state=d,qa(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Ns.current||Ma?("function"==typeof c&&(il(t,n,c,r),l=t.memoizedState),(o=Ma||al(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fa(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:rl(t.type,o),a.props=u,h=t.pendingProps,d=a.context,l="object"==typeof(l=n.contextType)&&null!==l?Pa(l):Rs(t,l=Os(n)?Ps:As.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&ll(t,a,r,l),Ma=!1,d=t.memoizedState,a.state=d,qa(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Ns.current||Ma?("function"==typeof f&&(il(t,n,f,r),p=t.memoizedState),(u=Ma||al(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,s,i)}function Al(e,t,n,r,i,s){Tl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&Fs(t,n,!1),Hl(e,t,s);r=t.stateNode,wl.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Ea(t,e.child,null,s),t.child=Ea(t,null,o,s)):El(e,t,o,s),t.memoizedState=r.state,i&&Fs(t,n,!0),t.child}function Nl(e){var t=e.stateNode;t.pendingContext?Ls(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ls(0,t.context,!1),Ya(e,t.containerInfo)}function Pl(e,t,n,r,i){return pa(),ma(i),t.flags|=256,El(e,t,n,r),t.child}var Rl,Ol,Dl,Ll,Ml={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,i=t.pendingProps,s=eo.current,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Cs(eo,1&s),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},1&i||null===a?a=Uc(o,i,0,null):(a.childLanes=0,a.pendingProps=o),e=Mc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ul(n),t.memoizedState=Ml,e):jl(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Vl(e,t,a,r=hl(Error(ae(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Uc({mode:"visible",children:r.children},i,0,null),(s=Mc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&Ea(t,e.child,null,a),t.child.memoizedState=Ul(a),t.memoizedState=Ml,s);if(!(1&t.mode))return Vl(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,Vl(e,t,a,r=hl(s=Error(ae(419)),r,void 0))}if(o=!!(a&e.childLanes),bl||o){if(null!==(r=Nu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|a)?0:i)&&i!==s.retryLane&&(s.retryLane=i,La(e,i),rc(r,e,i,-1))}return gc(),Vl(e,t,a,r=hl(Error(ae(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=xc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ia=cs(i.nextSibling),ra=t,sa=!0,aa=null,null!==e&&(Gs[Qs++]=Xs,Gs[Qs++]=Js,Gs[Qs++]=Ys,Xs=e.id,Js=e.overflow,Ys=t),(t=jl(t,r.children)).flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&o||t.child===s?(i=Dc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Dc(r,a):(a=Mc(a,o,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?Ul(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ml,i}return e=(a=e.child).sibling,i=Dc(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function jl(e,t){return(t=Uc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Vl(e,t,n,r){return null!==r&&ma(r),Ea(t,e.child,null,n),(e=jl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function zl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Aa(e.return,t,n)}function Bl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ql(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(El(e,t,r.children,n),2&(r=eo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&zl(e,n,t);else if(19===e.tag)zl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Cs(eo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===to(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function $l(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Uu|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(ae(153));if(null!==t.child){for(n=Dc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wl(e,t){if(!sa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Os(t.type)&&Ds(),Kl(t),null;case 3:return r=t.stateNode,Xa(),Ts(Ns),Ts(As),ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Ol(e,t),Kl(t),null;case 5:Za(t);var i=Qa(Ga.current);if(n=t.type,null!==e&&null!=t.stateNode)Dl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(ae(166));return Kl(t),null}if(e=Qa(Wa.current),da(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[fs]=t,r[ps]=s,e=!!(1&t.mode),n){case"dialog":Vi("cancel",r),Vi("close",r);break;case"iframe":case"object":case"embed":Vi("load",r);break;case"video":case"audio":for(i=0;i<Mi.length;i++)Vi(Mi[i],r);break;case"source":Vi("error",r);break;case"img":case"image":case"link":Vi("error",r),Vi("load",r);break;case"details":Vi("toggle",r);break;case"input":Xe(r,s),Vi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Vi("invalid",r);break;case"textarea":st(r,s),Vi("invalid",r)}for(var a in wt(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&Zi(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&Zi(r.textContent,o,e),i=["children",""+o]):le.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Vi("scroll",r)}switch(n){case"input":Ke(r),et(r,s,!0);break;case"textarea":Ke(r),ot(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=es)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=lt(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[fs]=t,e[ps]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(a=bt(n,r),n){case"dialog":Vi("cancel",e),Vi("close",e),i=r;break;case"iframe":case"object":case"embed":Vi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mi.length;i++)Vi(Mi[i],e);i=r;break;case"source":Vi("error",e),i=r;break;case"img":case"image":case"link":Vi("error",e),Vi("load",e),i=r;break;case"details":Vi("toggle",e),i=r;break;case"input":Xe(e,r),i=Ye(e,r),Vi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Vi("invalid",e);break;case"textarea":st(e,r),i=it(e,r),Vi("invalid",e)}for(s in wt(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?vt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&dt(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&ft(e,l):"number"==typeof l&&ft(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(le.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Vi("scroll",e):null!=l&&be(e,s,l,a))}switch(n){case"input":Ke(e),et(e,r,!1);break;case"textarea":Ke(e),ot(e);break;case"option":null!=r.value&&e.setAttribute("value",""+He(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?rt(e,!!r.multiple,s,!1):null!=r.defaultValue&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(ae(166));if(n=Qa(Ga.current),Qa(Wa.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[fs]=t,(s=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Zi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zi(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fs]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ts(eo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(sa&&null!==ia&&1&t.mode&&!(128&t.flags))fa(),pa(),t.flags|=98560,s=!1;else if(s=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(ae(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(ae(317));s[fs]=t}else pa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),s=!1}else null!==aa&&(oc(aa),aa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&eo.current?0===Lu&&(Lu=3):gc())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Xa(),Ol(e,t),null===e&&qi(t.stateNode.containerInfo),Kl(t),null;case 10:return xa(t.type._context),Kl(t),null;case 19:if(Ts(eo),null===(s=t.memoizedState))return Kl(t),null;if(r=!!(128&t.flags),null===(a=s.rendering))if(r)Wl(s,!1);else{if(0!==Lu||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=to(e))){for(t.flags|=128,Wl(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Cs(eo,1&eo.current|2),t.child}e=e.sibling}null!==s.tail&&Jt()>qu&&(t.flags|=128,r=!0,Wl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=to(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!sa)return Kl(t),null}else 2*Jt()-s.renderingStartTime>qu&&1073741824!==n&&(t.flags|=128,r=!0,Wl(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Jt(),t.sibling=null,n=eo.current,Cs(eo,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Ou)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(ae(156,t.tag))}function Ql(e,t){switch(na(t),t.tag){case 1:return Os(t.type)&&Ds(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Ts(Ns),Ts(As),ro(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Ts(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(ae(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ts(eo),null;case 4:return Xa(),null;case 10:return xa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Dl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qa(Wa.current);var s,a=null;switch(n){case"input":i=Ye(e,i),r=Ye(e,r),a=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),a=[];break;case"textarea":i=it(e,i),r=it(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=es)}for(u in wt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(le.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(le.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Vi("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Xl=!1,Jl="function"==typeof WeakSet?WeakSet:Set,Zl=null;function eu(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Ic(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){Ic(e,t,r)}}var nu=!1;function ru(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&tu(t,n,s)}i=i.next}while(i!==r)}}function iu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function au(e){var t=e.alternate;null!==t&&(e.alternate=null,au(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[fs],delete t[ps],delete t[gs],delete t[vs],delete t[ys]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return 5===e.tag||3===e.tag||4===e.tag}function lu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function uu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=es));else if(4!==r&&null!==(e=e.child))for(uu(e,t,n),e=e.sibling;null!==e;)uu(e,t,n),e=e.sibling}function cu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cu(e,t,n),e=e.sibling;null!==e;)cu(e,t,n),e=e.sibling}var hu=null,du=!1;function fu(e,t,n){for(n=n.child;null!==n;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(on&&"function"==typeof on.onCommitFiberUnmount)try{on.onCommitFiberUnmount(an,n)}catch(o){}switch(n.tag){case 5:Xl||eu(n,t);case 6:var r=hu,i=du;hu=null,fu(e,t,n),du=i,null!==(hu=r)&&(du?(e=hu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):hu.removeChild(n.stateNode));break;case 18:null!==hu&&(du?(e=hu,n=n.stateNode,8===e.nodeType?us(e.parentNode,n):1===e.nodeType&&us(e,n),$n(e)):us(hu,n.stateNode));break;case 4:r=hu,i=du,hu=n.stateNode.containerInfo,du=!0,fu(e,t,n),hu=r,du=i;break;case 0:case 11:case 14:case 15:if(!Xl&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(2&s||4&s)&&tu(n,t,a),i=i.next}while(i!==r)}fu(e,t,n);break;case 1:if(!Xl&&(eu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Ic(n,t,o)}fu(e,t,n);break;case 21:fu(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,fu(e,t,n),Xl=r):fu(e,t,n);break;default:fu(e,t,n)}}function mu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Ac.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:hu=o.stateNode,du=!1;break e;case 3:case 4:hu=o.stateNode.containerInfo,du=!0;break e}o=o.return}if(null===hu)throw Error(ae(160));pu(s,a,i),hu=null,du=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(W){Ic(i,t,W)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gu(t,e),yu(e),4&r){try{ru(3,e,e.return),iu(3,e)}catch(d){Ic(e,e.return,d)}try{ru(5,e,e.return)}catch(d){Ic(e,e.return,d)}}break;case 1:gu(t,e),yu(e),512&r&&null!==n&&eu(n,n.return);break;case 5:if(gu(t,e),yu(e),512&r&&null!==n&&eu(n,n.return),32&e.flags){var i=e.stateNode;try{ft(i,"")}catch(d){Ic(e,e.return,d)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&Je(i,s),bt(o,a);var u=bt(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?vt(i,h):"dangerouslySetInnerHTML"===c?dt(i,h):"children"===c?ft(i,h):be(i,c,h,u)}switch(o){case"input":Ze(i,s);break;case"textarea":at(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;null!=p?rt(i,!!s.multiple,p,!1):f!==!!s.multiple&&(null!=s.defaultValue?rt(i,!!s.multiple,s.defaultValue,!0):rt(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(d){Ic(e,e.return,d)}}break;case 6:if(gu(t,e),yu(e),4&r){if(null===e.stateNode)throw Error(ae(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(d){Ic(e,e.return,d)}}break;case 3:if(gu(t,e),yu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(d){Ic(e,e.return,d)}break;case 4:default:gu(t,e),yu(e);break;case 13:gu(t,e),yu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Bu=Jt())),4&r&&mu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(u=Xl)||c,gu(t,e),Xl=u):gu(t,e),yu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Zl=e,c=e.child;null!==c;){for(h=Zl=c;null!==Zl;){switch(p=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:ru(4,f,f.return);break;case 1:eu(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(d){Ic(r,n,d)}}break;case 5:eu(f,f.return);break;case 22:if(null!==f.memoizedState){Su(h);continue}}null!==p?(p.return=f,Zl=p):Su(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=gt("display",a))}catch(d){Ic(e,e.return,d)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(d){Ic(e,e.return,d)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gu(t,e),yu(e),4&r&&mu(e);case 21:}}function yu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ou(n)){var r=n;break e}n=n.return}throw Error(ae(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ft(i,""),r.flags&=-33),cu(e,lu(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;uu(e,lu(e),s);break;default:throw Error(ae(161))}}catch(H){Ic(e,e.return,H)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function wu(e,t,n){Zl=e,bu(e)}function bu(e,t,n){for(var r=!!(1&e.mode);null!==Zl;){var i=Zl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Yl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||Xl;o=Yl;var u=Xl;if(Yl=a,(Xl=l)&&!u)for(Zl=i;null!==Zl;)l=(a=Zl).child,22===a.tag&&null!==a.memoizedState?ku(i):null!==l?(l.return=a,Zl=l):ku(i);for(;null!==s;)Zl=s,bu(s),s=s.sibling;Zl=i,Yl=o,Xl=u}Eu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Zl=s):Eu(e)}}function Eu(e){for(;null!==Zl;){var t=Zl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Xl||iu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&$a(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$a(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&$n(d)}}}break;default:throw Error(ae(163))}Xl||512&t.flags&&su(t)}catch(h){Ic(t,t.return,h)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function Su(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ku(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{iu(4,t)}catch(H){Ic(t,n,H)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(H){Ic(t,i,H)}}var s=t.return;try{su(t)}catch(H){Ic(t,s,H)}break;case 5:var a=t.return;try{su(t)}catch(H){Ic(t,a,H)}}}catch(H){Ic(t,t.return,H)}if(t===e){Zl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Zl=o;break}Zl=t.return}}var _u,Iu=Math.ceil,Tu=Ee.ReactCurrentDispatcher,Cu=Ee.ReactCurrentOwner,xu=Ee.ReactCurrentBatchConfig,Au=0,Nu=null,Pu=null,Ru=0,Ou=0,Du=Is(0),Lu=0,Mu=null,Uu=0,Fu=0,ju=0,Vu=null,zu=null,Bu=0,qu=1/0,$u=null,Hu=!1,Wu=null,Ku=null,Gu=!1,Qu=null,Yu=0,Xu=0,Ju=null,Zu=-1,ec=0;function tc(){return 6&Au?Jt():-1!==Zu?Zu:Zu=Jt()}function nc(e){return 1&e.mode?2&Au&&0!==Ru?Ru&-Ru:null!==ga.transition?(0===ec&&(ec=vn()),ec):0!==(e=En)?e:e=void 0===(e=window.event)?16:Jn(e.type):1}function rc(e,t,n,r){if(50<Xu)throw Xu=0,Ju=null,Error(ae(185));wn(e,n,r),2&Au&&e===Nu||(e===Nu&&(!(2&Au)&&(Fu|=n),4===Lu&&lc(e,Ru)),ic(e,r),1===n&&0===Au&&!(1&t.mode)&&(qu=Jt()+500,Vs&&qs()))}function ic(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ln(s),o=1<<a,l=i[a];-1===l?o&n&&!(o&r)||(i[a]=mn(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r=pn(e,e===Nu?Ru:0);if(0===r)null!==n&&Qt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qt(n),1===t)0===e.tag?function(e){Vs=!0,Bs(e)}(uc.bind(null,e)):Bs(uc.bind(null,e)),os((function(){!(6&Au)&&qs()})),n=null;else{switch(Sn(r)){case 1:n=en;break;case 4:n=tn;break;case 16:default:n=nn;break;case 536870912:n=sn}n=Nc(n,sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sc(e,t){if(Zu=-1,ec=0,6&Au)throw Error(ae(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pn(e,e===Nu?Ru:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=vc(e,r);else{t=r;var i=Au;Au|=2;var s=mc();for(Nu===e&&Ru===t||($u=null,qu=Jt()+500,fc(e,t));;)try{wc();break}catch(o){pc(e,o)}Ca(),Tu.current=s,Au=i,null!==Pu?t=0:(Nu=null,Ru=0,t=Lu)}if(0!==t){if(2===t&&0!==(i=gn(e))&&(r=i,t=ac(e,i)),1===t)throw n=Mu,fc(e,0),lc(e,r),ic(e,Jt()),n;if(6===t)lc(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!li(s(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=vc(e,r),2===t&&(s=gn(e),0!==s&&(r=s,t=ac(e,s))),1!==t)))throw n=Mu,fc(e,0),lc(e,r),ic(e,Jt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ae(345));case 2:case 5:Sc(e,zu,$u);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bu+500-Jt())){if(0!==pn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){tc(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=is(Sc.bind(null,e,zu,$u),t);break}Sc(e,zu,$u);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ln(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Jt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iu(r/1960))-r)){e.timeoutHandle=is(Sc.bind(null,e,zu,$u),r);break}Sc(e,zu,$u);break;default:throw Error(ae(329))}}}return ic(e,Jt()),e.callbackNode===n?sc.bind(null,e):null}function ac(e,t){var n=Vu;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=vc(e,t))&&(t=zu,zu=n,null!==t&&oc(t)),e}function oc(e){null===zu?zu=e:zu.push.apply(zu,e)}function lc(e,t){for(t&=~ju,t&=~Fu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),r=1<<n;e[n]=-1,t&=~r}}function uc(e){if(6&Au)throw Error(ae(327));kc();var t=pn(e,0);if(!(1&t))return ic(e,Jt()),null;var n=vc(e,t);if(0!==e.tag&&2===n){var r=gn(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Mu,fc(e,0),lc(e,t),ic(e,Jt()),n;if(6===n)throw Error(ae(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sc(e,zu,$u),ic(e,Jt()),null}function cc(e,t){var n=Au;Au|=1;try{return e(t)}finally{0===(Au=n)&&(qu=Jt()+500,Vs&&qs())}}function hc(e){null!==Qu&&0===Qu.tag&&!(6&Au)&&kc();var t=Au;Au|=1;var n=xu.transition,r=En;try{if(xu.transition=null,En=1,e)return e()}finally{En=r,xu.transition=n,!(6&(Au=t))&&qs()}}function dc(){Ou=Du.current,Ts(Du)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ss(n)),null!==Pu)for(n=Pu.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ds();break;case 3:Xa(),Ts(Ns),Ts(As),ro();break;case 5:Za(r);break;case 4:Xa();break;case 13:case 19:Ts(eo);break;case 10:xa(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Nu=e,Pu=e=Dc(e.current,null),Ru=Ou=t,Lu=0,Mu=null,ju=Fu=Uu=0,zu=Vu=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}Ra=null}return e}function pc(e,t){for(;;){var n=Pu;try{if(Ca(),io.current=Zo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,uo=lo=oo=null,ho=!1,fo=0,Cu.current=null,null===n||null===n.return){Lu=1,Mu=t,Pu=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ru,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=vl(a);if(null!==f){f.flags&=-257,yl(f,a,o,0,t),1&f.mode&&gl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){gl(s,u,t),gc();break e}l=Error(ae(426))}else if(sa&&1&o.mode){var g=vl(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),yl(g,a,o,0,t),ma(cl(l,o));break e}}s=l=cl(l,o),4!==Lu&&(Lu=2),null===Vu?Vu=[s]:Vu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Ba(s,pl(0,l,t));break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(128&s.flags||"function"!=typeof v.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==Ku&&Ku.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,Ba(s,ml(s,o,t));break e}}s=s.return}while(null!==s)}Ec(n)}catch(w){t=w,Pu===n&&null!==n&&(Pu=n=n.return);continue}break}}function mc(){var e=Tu.current;return Tu.current=Zo,null===e?Zo:e}function gc(){0!==Lu&&3!==Lu&&2!==Lu||(Lu=4),null===Nu||!(268435455&Uu)&&!(268435455&Fu)||lc(Nu,Ru)}function vc(e,t){var n=Au;Au|=2;var r=mc();for(Nu===e&&Ru===t||($u=null,fc(e,t));;)try{yc();break}catch(i){pc(e,i)}if(Ca(),Au=n,Tu.current=r,null!==Pu)throw Error(ae(261));return Nu=null,Ru=0,Lu}function yc(){for(;null!==Pu;)bc(Pu)}function wc(){for(;null!==Pu&&!Yt();)bc(Pu)}function bc(e){var t=_u(e.alternate,e,Ou);e.memoizedProps=e.pendingProps,null===t?Ec(e):Pu=t,Cu.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Pu=n);if(null===e)return Lu=6,void(Pu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Gl(n,t,Ou)))return void(Pu=n);if(null!==(t=t.sibling))return void(Pu=t);Pu=t=e}while(null!==t);0===Lu&&(Lu=5)}function Sc(e,t,n){var r=En,i=xu.transition;try{xu.transition=null,En=1,function(e,t,n,r){do{kc()}while(null!==Qu);if(6&Au)throw Error(ae(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ae(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Nu&&(Pu=Nu=null,Ru=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Gu||(Gu=!0,Nc(nn,(function(){return kc(),null}))),s=!!(15990&n.flags),15990&n.subtreeFlags||s){s=xu.transition,xu.transition=null;var a=En;En=1;var o=Au;Au|=4,Cu.current=null,function(e,t){if(ts=Wn,pi(e=fi())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(Ny){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},Wn=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:rl(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(ae(163))}}catch(Ny){Ic(t,t.return,Ny)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}p=nu,nu=!1}(e,n),vu(n,e),mi(ns),Wn=!!ts,ns=ts=null,e.current=n,wu(n),Xt(),Au=o,En=a,xu.transition=s}else e.current=n;if(Gu&&(Gu=!1,Qu=e,Yu=i),0===(s=e.pendingLanes)&&(Ku=null),function(e){if(on&&"function"==typeof on.onCommitFiberRoot)try{on.onCommitFiberRoot(an,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),ic(e,Jt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hu)throw Hu=!1,e=Wu,Wu=null,e;!!(1&Yu)&&0!==e.tag&&kc(),1&(s=e.pendingLanes)?e===Ju?Xu++:(Xu=0,Ju=e):Xu=0,qs()}(e,t,n,r)}finally{xu.transition=i,En=r}return null}function kc(){if(null!==Qu){var e=Sn(Yu),t=xu.transition,n=En;try{if(xu.transition=null,En=16>e?16:e,null===Qu)var r=!1;else{if(e=Qu,Qu=null,Yu=0,6&Au)throw Error(ae(331));var i=Au;for(Au|=4,Zl=e.current;null!==Zl;){var s=Zl,a=s.child;if(16&Zl.flags){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(Zl=u;null!==Zl;){var c=Zl;switch(c.tag){case 0:case 11:case 15:ru(8,c,s)}var h=c.child;if(null!==h)h.return=c,Zl=h;else for(;null!==Zl;){var d=(c=Zl).sibling,f=c.return;if(au(c),c===u){Zl=null;break}if(null!==d){d.return=f,Zl=d;break}Zl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Zl=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Zl=a;else e:for(;null!==Zl;){if(2048&(s=Zl).flags)switch(s.tag){case 0:case 11:case 15:ru(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,Zl=v;break e}Zl=s.return}}var y=e.current;for(Zl=y;null!==Zl;){var w=(a=Zl).child;if(2064&a.subtreeFlags&&null!==w)w.return=a,Zl=w;else e:for(a=y;null!==Zl;){if(2048&(o=Zl).flags)try{switch(o.tag){case 0:case 11:case 15:iu(9,o)}}catch(E){Ic(o,o.return,E)}if(o===a){Zl=null;break e}var b=o.sibling;if(null!==b){b.return=o.return,Zl=b;break e}Zl=o.return}}if(Au=i,qs(),on&&"function"==typeof on.onPostCommitFiberRoot)try{on.onPostCommitFiberRoot(an,e)}catch(E){}r=!0}return r}finally{En=n,xu.transition=t}}return!1}function _c(e,t,n){e=Va(e,t=pl(0,t=cl(n,t),1),1),t=tc(),null!==e&&(wn(e,1,t),ic(e,t))}function Ic(e,t,n){if(3===e.tag)_c(e,e,n);else for(;null!==t;){if(3===t.tag){_c(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ku||!Ku.has(r))){t=Va(t,e=ml(t,e=cl(n,e),1),1),e=tc(),null!==t&&(wn(t,1,e),ic(t,e));break}}t=t.return}}function Tc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tc(),e.pingedLanes|=e.suspendedLanes&n,Nu===e&&(Ru&n)===n&&(4===Lu||3===Lu&&(130023424&Ru)===Ru&&500>Jt()-Bu?fc(e,0):ju|=n),ic(e,t)}function Cc(e,t){0===t&&(1&e.mode?(t=dn,!(130023424&(dn<<=1))&&(dn=4194304)):t=1);var n=tc();null!==(e=La(e,t))&&(wn(e,t,n),ic(e,n))}function xc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Ac(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ae(314))}null!==r&&r.delete(t),Cc(e,n)}function Nc(e,t){return Gt(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new Pc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lc(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Oc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case _e:return Mc(n.children,i,s,t);case Ie:a=8,i|=8;break;case Te:return(e=Rc(12,n,t,2|i)).elementType=Te,e.lanes=s,e;case Ne:return(e=Rc(13,n,t,i)).elementType=Ne,e.lanes=s,e;case Pe:return(e=Rc(19,n,t,i)).elementType=Pe,e.lanes=s,e;case De:return Uc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Ce:a=10;break e;case xe:a=9;break e;case Ae:a=11;break e;case Re:a=14;break e;case Oe:a=16,r=null;break e}throw Error(ae(130,null==e?e:typeof e,""))}return(t=Rc(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Mc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Uc(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=De,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function jc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zc(e,t,n,r,i,s,a,o,l){return e=new Vc(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Rc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(s),e}function Bc(e){if(!e)return xs;e:{if(qt(e=e._reactInternals)!==e||1!==e.tag)throw Error(ae(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Os(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(ae(171))}if(1===e.tag){var n=e.type;if(Os(n))return Ms(e,n,t)}return t}function qc(e,t,n,r,i,s,a,o,l){return(e=zc(n,r,!0,e,0,s,0,o,l)).context=Bc(null),n=e.current,(s=ja(r=tc(),i=nc(n))).callback=null!=t?t:null,Va(n,s,i),e.current.lanes=i,wn(e,i,r),ic(e,r),e}function $c(e,t,n,r){var i=t.current,s=tc(),a=nc(i);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=ja(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Va(i,t,a))&&(rc(e,i,a,s),za(e,i,a)),a}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}_u=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ns.current)bl=!0;else{if(!(e.lanes&n||128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Nl(t),pa();break;case 5:Ja(t);break;case 1:Os(t.type)&&Us(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Cs(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Cs(eo,1&eo.current),t.flags|=128,null):n&t.child.childLanes?Fl(e,t,n):(Cs(eo,1&eo.current),null!==(e=Hl(e,t,n))?e.sibling:null);Cs(eo,1&eo.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return ql(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Cs(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Il(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=!!(131072&e.flags)}else bl=!1,sa&&1048576&t.flags&&ea(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$l(e,t),e=t.pendingProps;var i=Rs(t,As.current);Na(t,n),i=vo(null,t,r,e,i,n);var s=yo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Os(r)?(s=!0,Us(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ua(t),i.updater=sl,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=Al(null,t,r,!0,s,n)):(t.tag=0,sa&&s&&ta(t),El(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($l(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Oc(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ae)return 11;if(e===Re)return 14}return 2}(r),e=rl(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=xl(null,t,r,e,n);break e;case 11:t=Sl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,rl(r.type,e),n);break e}throw Error(ae(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cl(e,t,r,i=t.elementType===r?i:rl(r,i),n);case 1:return r=t.type,i=t.pendingProps,xl(e,t,r,i=t.elementType===r?i:rl(r,i),n);case 3:e:{if(Nl(t),null===e)throw Error(ae(387));r=t.pendingProps,i=(s=t.memoizedState).element,Fa(e,t),qa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Pl(e,t,r,n,i=cl(Error(ae(423)),t));break e}if(r!==i){t=Pl(e,t,r,n,i=cl(Error(ae(424)),t));break e}for(ia=cs(t.stateNode.containerInfo.firstChild),ra=t,sa=!0,aa=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===i){t=Hl(e,t,n);break e}El(e,t,r,n)}t=t.child}return t;case 5:return Ja(t),null===e&&ca(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,rs(r,i)?a=null:null!==s&&rs(r,s)&&(t.flags|=32),Tl(e,t),El(e,t,a,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Fl(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ea(t,null,r,n):El(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Sl(e,t,r,i=t.elementType===r?i:rl(r,i),n);case 7:return El(e,t,t.pendingProps,n),t.child;case 8:case 12:return El(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Cs(ka,r._currentValue),r._currentValue=a,null!==s)if(li(s.value,a)){if(s.children===i.children&&!Ns.current){t=Hl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=ja(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Aa(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(ae(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),Aa(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}El(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Na(t,n),r=r(i=Pa(i)),t.flags|=1,El(e,t,r,n),t.child;case 14:return i=rl(r=t.type,t.pendingProps),kl(e,t,r,i=rl(r.type,i),n);case 15:return _l(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rl(r,i),$l(e,t),t.tag=1,Os(r)?(e=!0,Us(t)):e=!1,Na(t,n),ol(t,r,i),ul(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return ql(e,t,n);case 22:return Il(e,t,n)}throw Error(ae(156,t.tag))};var Gc="function"==typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function eh(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=Hc(a);o.call(e)}}$c(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=Hc(a);s.call(e)}}var a=qc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=a,e[ms]=a.current,qi(8===e.nodeType?e.parentNode:e),hc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=Hc(l);o.call(e)}}var l=zc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=l,e[ms]=l.current,qi(8===e.nodeType?e.parentNode:e),hc((function(){$c(t,l,n,r)})),l}(n,t,e,i,r);return Hc(a)}Yc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(ae(409));$c(e,t,null,null)},Yc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hc((function(){$c(null,e,null,null)})),t[ms]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&0!==t&&t<Ln[n].priority;n++);Ln.splice(n,0,e),0===n&&jn(e)}},kn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fn(t.pendingLanes);0!==n&&(bn(t,1|n),ic(t,Jt()),!(6&Au)&&(qu=Jt()+500,qs()))}break;case 13:hc((function(){var t=La(e,1);if(null!==t){var n=tc();rc(t,e,1,n)}})),Kc(e,1)}},_n=function(e){if(13===e.tag){var t=La(e,134217728);null!==t&&rc(t,e,134217728,tc()),Kc(e,134217728)}},In=function(e){if(13===e.tag){var t=nc(e),n=La(e,t);null!==n&&rc(n,e,t,tc()),Kc(e,t)}},Tn=function(){return En},Cn=function(e,t){var n=En;try{return En=e,t()}finally{En=n}},kt=function(e,t,n){switch(t){case"input":if(Ze(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ss(r);if(!i)throw Error(ae(90));Ge(r),Ze(r,i)}}}break;case"textarea":at(e,n);break;case"select":null!=(t=n.value)&&rt(e,!!n.multiple,t,!1)}},At=cc,Nt=hc;var th={usingClientEntryPoint:!1,Events:[bs,Es,Ss,Ct,xt,cc]},nh={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:nh.bundleType,version:nh.version,rendererPackageName:nh.rendererPackageName,rendererConfig:nh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Wt(e))?null:e.stateNode},findFiberByHostInstance:nh.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ih.isDisabled&&ih.supportsFiber)try{an=ih.inject(rh),on=ih}catch(ht){}}ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,ee.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(ae(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ke,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},ee.createRoot=function(e,t){if(!Xc(e))throw Error(ae(299));var n=!1,r="",i=Gc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=zc(e,1,!1,null,0,n,0,r,i),e[ms]=t.current,qi(8===e.nodeType?e.parentNode:e),new Qc(t)},ee.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(ae(188));throw e=Object.keys(e).join(","),Error(ae(268,e))}return e=null===(e=Wt(t))?null:e.stateNode},ee.flushSync=function(e){return hc(e)},ee.hydrate=function(e,t,n){if(!Jc(t))throw Error(ae(200));return eh(null,e,t,!0,n)},ee.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(ae(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=Gc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=qc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ms]=t.current,qi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yc(t)},ee.render=function(e,t,n){if(!Jc(t))throw Error(ae(200));return eh(null,e,t,!1,n)},ee.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(ae(40));return!!e._reactRootContainer&&(hc((function(){eh(null,null,e,!1,(function(){e._reactRootContainer=null,e[ms]=null}))})),!0)},ee.unstable_batchedUpdates=cc,ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jc(n))throw Error(ae(200));if(null==e||void 0===e._reactInternals)throw Error(ae(38));return eh(e,t,n,!1,r)},ee.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),Z.exports=ee;var sh=Z.exports;J.createRoot=sh.createRoot,J.hydrateRoot=sh.hydrateRoot;var ah={};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const oh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(oh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new uh;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ch=function(e){return function(e){const t=oh(e);return lh.encodeByteArray(t,!0)}(e).replace(/\./g,"")},hh=function(e){try{return lh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},dh=()=>
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */().__FIREBASE_DEFAULTS__,fh=()=>{try{return dh()||(()=>{if("undefined"==typeof process||void 0===ah)return;const e=ah.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&hh(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ph=e=>{var t,n;return null===(n=null===(t=fh())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},mh=()=>{var e;return null===(e=fh())||void 0===e?void 0:e.config},gh=e=>{var t;return null===(t=fh())||void 0===t?void 0:t[`_${e}`]};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class vh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function yh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function wh(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function bh(){return!function(){var e;const t=null===(e=fh())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Sh(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class kh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,kh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_h.prototype.create)}}class _h{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Ih,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new kh(r,a,n)}}const Ih=/\{\$([^}]+)}/g;function Th(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Ch(n)&&Ch(s)){if(!Th(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ch(e){return null!==e&&"object"==typeof e}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function xh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Ah{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Nh),void 0===r.error&&(r.error=Nh),void 0===r.complete&&(r.complete=Nh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Nh(){}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Ph=1e3,Rh=2,Oh=144e5,Dh=.5;function Lh(e,t=Ph,n=Rh){const r=t*Math.pow(n,e),i=Math.round(Dh*r*(Math.random()-.5)*2);return Math.min(Oh,r+i)}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Mh(e){return e&&e._delegate?e._delegate:e}class Uh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Fh="[DEFAULT]";
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class jh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new vh;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e))try{this.getOrInitializeService({instanceIdentifier:Fh})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Fh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Fh){return this.instances.has(e)}getOptions(e=Fh){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Fh?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Fh){return this.component?this.component.multipleInstances?e:Fh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Vh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var zh;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(zh||(zh={}));const Bh={debug:zh.DEBUG,verbose:zh.VERBOSE,info:zh.INFO,warn:zh.WARN,error:zh.ERROR,silent:zh.SILENT},qh=zh.INFO,$h={[zh.DEBUG]:"log",[zh.VERBOSE]:"log",[zh.INFO]:"info",[zh.WARN]:"warn",[zh.ERROR]:"error"},Hh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=$h[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Wh{constructor(e){this.name=e,this._logLevel=qh,this._logHandler=Hh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in zh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,zh.DEBUG,...e),this._logHandler(this,zh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,zh.VERBOSE,...e),this._logHandler(this,zh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,zh.INFO,...e),this._logHandler(this,zh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,zh.WARN,...e),this._logHandler(this,zh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,zh.ERROR,...e),this._logHandler(this,zh.ERROR,...e)}}const Kh=(e,t)=>t.some((t=>e instanceof t));let Gh,Qh;const Yh=new WeakMap,Xh=new WeakMap,Jh=new WeakMap,Zh=new WeakMap,ed=new WeakMap;let td={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Jh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return id(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function nd(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(sd(this),t),id(Yh.get(this))}:function(...t){return id(e.apply(sd(this),t))}:function(t,...n){const r=e.call(sd(this),t,...n);return Jh.set(r,t.sort?t.sort():[t]),id(r)}}function rd(e){return"function"==typeof e?nd(e):(e instanceof IDBTransaction&&function(e){if(Xh.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Xh.set(e,t)}(e),Kh(e,Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,td):e)}function id(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(id(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Yh.set(t,e)})).catch((()=>{})),ed.set(t,e),t}(e);if(Zh.has(e))return Zh.get(e);const t=rd(e);return t!==e&&(Zh.set(e,t),ed.set(t,e)),t}const sd=e=>ed.get(e);function ad(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=id(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(id(a.result),e.oldVersion,e.newVersion,id(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const od=["get","getKey","getAll","getAllKeys","count"],ld=["put","add","delete","clear"],ud=new Map;function cd(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ud.get(t))return ud.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ld.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!od.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return ud.set(t,s),s}var hd;hd=td,td={...hd,get:(e,t,n)=>cd(e,t)||hd.get(e,t,n),has:(e,t)=>!!cd(e,t)||hd.has(e,t)};
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const fd="@firebase/app",pd="0.10.7",md=new Wh("@firebase/app"),gd="@firebase/app-compat",vd="@firebase/analytics-compat",yd="@firebase/analytics",wd="@firebase/app-check-compat",bd="@firebase/app-check",Ed="@firebase/auth",Sd="@firebase/auth-compat",kd="@firebase/database",_d="@firebase/database-compat",Id="@firebase/functions",Td="@firebase/functions-compat",Cd="@firebase/installations",xd="@firebase/installations-compat",Ad="@firebase/messaging",Nd="@firebase/messaging-compat",Pd="@firebase/performance",Rd="@firebase/performance-compat",Od="@firebase/remote-config",Dd="@firebase/remote-config-compat",Ld="@firebase/storage",Md="@firebase/storage-compat",Ud="@firebase/firestore",Fd="@firebase/vertexai-preview",jd="@firebase/firestore-compat",Vd="firebase",zd="[DEFAULT]",Bd={[fd]:"fire-core",[gd]:"fire-core-compat",[yd]:"fire-analytics",[vd]:"fire-analytics-compat",[bd]:"fire-app-check",[wd]:"fire-app-check-compat",[Ed]:"fire-auth",[Sd]:"fire-auth-compat",[kd]:"fire-rtdb",[_d]:"fire-rtdb-compat",[Id]:"fire-fn",[Td]:"fire-fn-compat",[Cd]:"fire-iid",[xd]:"fire-iid-compat",[Ad]:"fire-fcm",[Nd]:"fire-fcm-compat",[Pd]:"fire-perf",[Rd]:"fire-perf-compat",[Od]:"fire-rc",[Dd]:"fire-rc-compat",[Ld]:"fire-gcs",[Md]:"fire-gcs-compat",[Ud]:"fire-fst",[jd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[Vd]:"fire-js-all"},qd=new Map,$d=new Map,Hd=new Map;function Wd(e,t){try{e.container.addComponent(t)}catch(n){md.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kd(e){const t=e.name;if(Hd.has(t))return md.debug(`There were multiple attempts to register component ${t}.`),!1;Hd.set(t,e);for(const n of qd.values())Wd(n,e);for(const n of $d.values())Wd(n,e);return!0}function Gd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Qd(e){return void 0!==e.settings}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Yd=new _h("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Xd{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Uh("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yd.create("app-deleted",{appName:this._name})}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Jd="10.12.4";function Zd(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const r=Object.assign({name:zd,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Yd.create("bad-app-name",{appName:String(i)});if(n||(n=mh()),!n)throw Yd.create("no-options");const s=qd.get(i);if(s){if(Th(n,s.options)&&Th(r,s.config))return s;throw Yd.create("duplicate-app",{appName:i})}const a=new Vh(i);for(const l of Hd.values())a.addComponent(l);const o=new Xd(n,r,a);return qd.set(i,o),o}function ef(e=zd){const t=qd.get(e);if(!t&&e===zd&&mh())return Zd();if(!t)throw Yd.create("no-app",{appName:e});return t}function tf(e,t,n){var r;let i=null!==(r=Bd[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void md.warn(e.join(" "))}Kd(new Uh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const nf="firebase-heartbeat-database",rf=1,sf="firebase-heartbeat-store";let af=null;function of(){return af||(af=ad(nf,rf,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(sf)}catch(n){console.warn(n)}}}).catch((e=>{throw Yd.create("idb-open",{originalErrorMessage:e.message})}))),af}async function lf(e,t){try{const n=(await of()).transaction(sf,"readwrite"),r=n.objectStore(sf);await r.put(t,uf(e)),await n.done}catch(n){if(n instanceof kh)md.warn(n.message);else{const e=Yd.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});md.warn(e.message)}}}function uf(e){return`${e.name}!${e.options.appId}`}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class cf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new df(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hf();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=hf(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ff(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ff(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=ch(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hf(){return(new Date).toISOString().substring(0,10)}class df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Eh()&&Sh().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await of()).transaction(sf),n=await t.objectStore(sf).get(uf(e));return await t.done,n}catch(t){if(t instanceof kh)md.warn(t.message);else{const e=Yd.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});md.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ff(e){return ch(JSON.stringify({version:2,heartbeats:e})).length}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var pf;function mf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}pf="",Kd(new Uh("platform-logger",(e=>new dd(e)),"PRIVATE")),Kd(new Uh("heartbeat",(e=>new cf(e)),"PRIVATE")),tf(fd,pd,pf),tf(fd,pd,"esm2017"),tf("fire-js",""),
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
tf("firebase","10.12.4","app"),"function"==typeof SuppressedError&&SuppressedError;const vf=gf,yf=new _h("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),wf=new Wh("@firebase/auth");function bf(e,...t){wf.logLevel<=zh.ERROR&&wf.error(`Auth (${Jd}): ${e}`,...t)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Ef(e,...t){throw If(e,...t)}function Sf(e,...t){return If(e,...t)}function kf(e,t,n){const r=Object.assign(Object.assign({},vf()),{[t]:n});return new _h("auth","Firebase",r).create(t,{appName:e.name})}function _f(e){return kf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return yf.create(e,...t)}function Tf(e,t,...n){if(!e)throw If(t,...n)}function Cf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bf(t),new Error(t)}function xf(e,t){e||Cf(t)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Af(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Nf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Pf(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Nf()&&"https:"!==Nf()&&!wh()&&!("connection"in navigator)||navigator.onLine}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Rf{constructor(e,t){this.shortDelay=e,this.longDelay=t,xf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Pf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Of(e,t){xf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Df{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Cf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Cf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Cf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Lf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Mf=new Rf(3e4,6e4);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Uf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ff(e,t,n,r,i={}){return jf(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=xh(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Df.fetch()(Vf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function jf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lf),t);try{const t=new zf(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Bf(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Bf(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Bf(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Bf(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw kf(e,o,a);Ef(e,o)}}catch(i){if(i instanceof kh)throw i;Ef(e,"network-request-failed",{message:String(i)})}}function Vf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Of(e.config,i):`${e.config.apiScheme}://${i}`}class zf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Sf(this.auth,"network-request-failed"))),Mf.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sf(e,t,r);return i.customData._tokenResponse=n,i}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function qf(e,t){return Ff(e,"POST","/v1/accounts:lookup",t)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function $f(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Hf(e){return 1e3*Number(e)}function Wf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return bf("JWT malformed, contained fewer than 3 sections"),null;try{const e=hh(n);return e?JSON.parse(e):(bf("Failed to decode base64 JWT payload"),null)}catch(i){return bf("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}function Kf(e){const t=Wf(e);return Tf(t,"internal-error"),Tf(void 0!==t.exp,"internal-error"),Tf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function Gf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Qf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Yf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$f(this.lastLoginAt),this.creationTime=$f(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function Xf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gf(e,qf(n,{idToken:r}));Tf(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Jf(s.providerUserInfo):[],o=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),c=!!l&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Yf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}function Jf(e){return e.map((e=>{var{providerId:t}=e,n=mf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Zf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Tf(e.idToken,"internal-error"),Tf(void 0!==e.idToken,"internal-error"),Tf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Tf(0!==e.length,"internal-error");const t=Kf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Tf(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await jf(e,{},(async()=>{const n=xh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Vf(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Df.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Zf;return n&&(Tf("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Tf("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Tf("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zf,this.toJSON())}_performRefresh(){return Cf("not implemented")}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ep(e,t){Tf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Gf(this,this.stsTokenManager.getToken(this.auth,e));return Tf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Mh(e),r=await n.getIdToken(t),i=Wf(r);Tf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$f(Hf(i.auth_time)),issuedAtTime:$f(Hf(i.iat)),expirationTime:$f(Hf(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Mh(e);await Xf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Tf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Tf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qd(this.auth.app))return Promise.reject(_f(this.auth));const e=await this.getIdToken();return await Gf(this,async function(e,t){return Ff(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:S}=t;Tf(y&&S,e,"internal-error");const k=Zf.fromJSON(this.name,S);Tf("string"==typeof y,e,"internal-error"),ep(c,e.name),ep(h,e.name),Tf("boolean"==typeof w,e,"internal-error"),Tf("boolean"==typeof b,e,"internal-error"),ep(d,e.name),ep(f,e.name),ep(p,e.name),ep(m,e.name),ep(g,e.name),ep(v,e.name);const _=new tp({uid:y,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Zf;r.updateFromServerResponse(t);const i=new tp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Xf(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Tf(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Jf(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new Zf;a.updateFromIdToken(n);const o=new tp({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Yf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,l),o}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const np=new Map;function rp(e){xf(e instanceof Function,"Expected a class definition");let t=np.get(e);return t?(xf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,np.set(e,t),t)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ip.type="NONE";const sp=ip;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ap(e,t,n){return`firebase:${e}:${t}:${n}`}class op{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ap(this.userKey,r.apiKey,i),this.fullPersistenceKey=ap("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new op(rp(sp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||rp(sp);const s=ap(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){const n=tp._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(l){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new op(i,e,n)):new op(i,e,n)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function lp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(up(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pp(t))return"Blackberry";if(mp(t))return"Webos";if(cp(t))return"Safari";if((t.includes("chrome/")||hp(t))&&!t.includes("edge/"))return"Chrome";if(fp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function up(e=yh()){return/firefox\//i.test(e)}function cp(e=yh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hp(e=yh()){return/crios\//i.test(e)}function dp(e=yh()){return/iemobile/i.test(e)}function fp(e=yh()){return/android/i.test(e)}function pp(e=yh()){return/blackberry/i.test(e)}function mp(e=yh()){return/webos/i.test(e)}function gp(e=yh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vp(){return function(){const e=yh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function yp(e=yh()){return gp(e)||fp(e)||mp(e)||pp(e)||/windows phone/i.test(e)||dp(e)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function wp(e,t=[]){let n;switch(e){case"Browser":n=lp(yh());break;case"Worker":n=`${lp(yh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jd}/${r}`}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ep{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Sp{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rp(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await op.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await qf(this,{idToken:e}),n=await tp._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qd(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Tf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xf(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qd(this.app))return Promise.reject(_f(this));const t=e?Mh(e):null;return t&&Tf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Tf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Qd(this.app)?Promise.reject(_f(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qd(this.app)?Promise.reject(_f(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(rp(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Ff(e,"GET","/v2/passwordPolicy",Uf(e,t))}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(this),t=new Ep(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _h("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Ff(e,"POST","/v2/accounts:revokeToken",Uf(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rp(e)||this._popupRedirectResolver;Tf(t,this,"argument-error"),this.redirectPersistenceManager=await op.create(this,[rp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tf(a,this,"internal-error"),a.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Tf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){wf.logLevel<=zh.WARN&&wf.warn(`Auth (${Jd}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function kp(e){return Mh(e)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ah(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Tf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */let Ip={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tp(e,t,n){const r=kp(e);Tf(r._canInitEmulator,r,"emulator-config-failed"),Tf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=Cp(t),{host:s,port:a}=function(e){const t=Cp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:xp(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xp(t)}}}(t),o=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */()}function Cp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ap{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cf("not implemented")}_getIdTokenResponse(e){return Cf("not implemented")}_linkToIdToken(e,t){return Cf("not implemented")}_getReauthenticationResolver(e){return Cf("not implemented")}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function Np(e,t){return async function(e,t,n,r,i={}){const s=await Ff(e,t,n,r,i);return"mfaPendingCredential"in s&&Ef(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",Uf(e,t))}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Pp extends Ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ef("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=mf(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Pp(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Np(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Np(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Np(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xh(t)}return e}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Op extends Rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Dp extends Op{constructor(){super("facebook.com")}static credential(e){return Pp._fromParams({providerId:Dp.PROVIDER_ID,signInMethod:Dp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dp.credentialFromTaggedObject(e)}static credentialFromError(e){return Dp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dp.credential(e.oauthAccessToken)}catch(t){return null}}}Dp.FACEBOOK_SIGN_IN_METHOD="facebook.com",Dp.PROVIDER_ID="facebook.com";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Lp extends Op{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pp._fromParams({providerId:Lp.PROVIDER_ID,signInMethod:Lp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lp.credentialFromTaggedObject(e)}static credentialFromError(e){return Lp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Lp.credential(t,n)}catch(r){return null}}}Lp.GOOGLE_SIGN_IN_METHOD="google.com",Lp.PROVIDER_ID="google.com";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Mp extends Op{constructor(){super("github.com")}static credential(e){return Pp._fromParams({providerId:Mp.PROVIDER_ID,signInMethod:Mp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mp.credentialFromTaggedObject(e)}static credentialFromError(e){return Mp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mp.credential(e.oauthAccessToken)}catch(t){return null}}}Mp.GITHUB_SIGN_IN_METHOD="github.com",Mp.PROVIDER_ID="github.com";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Up extends Op{constructor(){super("twitter.com")}static credential(e,t){return Pp._fromParams({providerId:Up.PROVIDER_ID,signInMethod:Up.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Up.credentialFromTaggedObject(e)}static credentialFromError(e){return Up.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Up.credential(t,n)}catch(r){return null}}}Up.TWITTER_SIGN_IN_METHOD="twitter.com",Up.PROVIDER_ID="twitter.com";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Fp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await tp._fromIdTokenResponse(e,n,r),s=jp(n);return new Fp({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=jp(n);return new Fp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function jp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Vp extends kh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vp.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Vp(e,t,n,r)}}function zp(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Vp._fromErrorAndOperation(e,n,t,r);throw n}))}const Bp="__sak";
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bp,"1"),this.storage.removeItem(Bp),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class $p extends qp{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=yh();return cp(e)||gp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);vp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$p.type="LOCAL";const Hp=$p;
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Wp extends qp{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wp.type="SESSION";const Kp=Wp;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Gp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Gp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Qp(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */Gp.receivers=[];class Yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=Qp("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Xp(){return window}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Jp(){return void 0!==Xp().WorkerGlobalScope&&"function"==typeof Xp().importScripts}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Zp="firebaseLocalStorageDb",em="firebaseLocalStorage",tm="fbase_key";class nm{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function rm(e,t){return e.transaction([em],t?"readwrite":"readonly").objectStore(em)}function im(){const e=indexedDB.open(Zp,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(em,{keyPath:tm})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(em)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Zp);return new nm(e).toPromise()}(),t(await im()))}))}))}async function sm(e,t,n){const r=rm(e,!0).put({[tm]:t,value:n});return new nm(r).toPromise()}function am(e,t){const n=rm(e,!0).delete(t);return new nm(n).toPromise()}class om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await im()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gp._getInstance(Jp()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Yp(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await sm(e,Bp,"1"),await am(e,Bp),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>sm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=rm(e,!1).get(t),r=await new nm(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>am(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=rm(e,!1).getAll();return new nm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}om.type="LOCAL";const lm=om;
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function um(e,t){return t?rp(t):(Tf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */new Rf(3e4,6e4);class cm extends Ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Np(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Np(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Np(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hm(e){
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */return async function(e,t,n=!1){if(Qd(e.app))return Promise.reject(_f(e));const r="signIn",i=await zp(e,r,t),s=await Fp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new cm(e),e.bypassAuthState)}function dm(e){const{auth:t,user:n}=e;return Tf(n,t,"internal-error"),
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
async function(e,t,n=!1){const{auth:r}=e;if(Qd(r.app))return Promise.reject(_f(r));const i="reauthenticate";try{const s=await Gf(e,zp(r,i,t,e),n);Tf(s.idToken,r,"internal-error");const a=Wf(s.idToken);Tf(a,r,"internal-error");const{sub:o}=a;return Tf(e.uid===o,r,"user-mismatch"),Fp._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Ef(r,"user-mismatch"),s}}(n,new cm(e),e.bypassAuthState)}async function fm(e){const{auth:t,user:n}=e;return Tf(n,t,"internal-error"),async function(e,t,n=!1){const r=await Gf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fp._forOperation(e,"link",r)}(n,new cm(e),e.bypassAuthState)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class pm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hm;case"linkViaPopup":case"linkViaRedirect":return fm;case"reauthViaPopup":case"reauthViaRedirect":return dm;default:Ef(this.auth,"internal-error")}}resolve(e){xf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const mm=new Rf(2e3,1e4);async function gm(e,t,n){if(Qd(e.app))return Promise.reject(Sf(e,"operation-not-supported-in-this-environment"));const r=kp(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ef(e,"argument-error"),kf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Rp);const i=um(r,n);return new vm(r,"signInViaPopup",t,i).executeNotNull()}class vm extends pm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vm.currentPopupAction&&vm.currentPopupAction.cancel(),vm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Tf(e,this.auth,"internal-error"),e}async onExecution(){xf(1===this.filter.length,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Sf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Sf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Sf(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,mm.get())};e()}}vm.currentPopupAction=null;
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const ym="pendingRedirect",wm=new Map;class bm extends pm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=wm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ap(ym,e.config.apiKey,e.name)}(t),r=function(e){return rp(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}wm.set(this.auth._key(),e)}return this.bypassAuthState||wm.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Em(e,t){wm.set(e._key(),t)}async function Sm(e,t,n=!1){if(Qd(e.app))return Promise.reject(_f(e));const r=kp(e),i=um(r,t),s=new bm(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class km{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Im(e);default:return!1}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Im(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Sf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_m(e))}saveEventToCache(e){this.cachedEventUids.add(_m(e)),this.lastProcessedEventTime=Date.now()}}function _m(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Im({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Tm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cm=/^https?/;async function xm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ff(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Am(r))return}catch(n){}Ef(e,"unauthorized-domain")}function Am(e){const t=Af(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Cm.test(n))return!1;if(Tm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Nm=new Rf(3e4,6e4);function Pm(){const e=Xp().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Rm(e){return new Promise(((t,n)=>{var r,i,s,a;function o(){Pm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pm(),n(Sf(e,"network-request-failed"))},timeout:Nm.get()})}if(null===(i=null===(r=Xp().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Xp().gapi)||void 0===s?void 0:s.load)){const t=`__iframefcb${Math.floor(1e6*Math.random())}`;return Xp()[t]=()=>{gapi.load?o():n(Sf(e,"network-request-failed"))},(a=`${Ip.gapiScript}?onload=${t}`,Ip.loadJS(a)).catch((e=>n(e)))}o()}})).catch((e=>{throw Om=null,e}))}let Om=null;
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Dm=new Rf(5e3,15e3),Lm="__/auth/iframe",Mm="emulator/auth/iframe",Um={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jm(e){const t=e.config;Tf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Of(t,Mm):`https://${e.config.authDomain}/${Lm}`,r={apiKey:t.apiKey,appName:e.name,v:Jd},i=Fm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xh(r).slice(1)}`}async function Vm(e){const t=await function(e){return Om=Om||Rm(e),Om}(e),n=Xp().gapi;return Tf(n,e,"internal-error"),t.open({where:document.body,url:jm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Um,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Sf(e,"network-request-failed"),s=Xp().setTimeout((()=>{r(i)}),Dm.get());function a(){Xp().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const zm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qm(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},zm),{width:r.toString(),height:i.toString(),top:s,left:a}),u=yh().toLowerCase();n&&(o=hp(u)?"_blank":n),up(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=yh()){var t;return gp(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t||"",o),new Bm(null);const h=window.open(t||"",o,c);Tf(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Bm(h)}const $m="__/auth/handler",Hm="emulator/auth/handler",Wm=encodeURIComponent("fac");async function Km(e,t,n,r,i,s){Tf(e.config.authDomain,e,"auth-domain-config-required"),Tf(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Jd,eventId:i};if(t instanceof Rp){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof Op){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${Wm}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?Of(e,Hm):`https://${e.authDomain}/${$m}`}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e)}?${xh(o).slice(1)}${u}`}const Gm="webStorageSupport",Qm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kp,this._completeRedirectFn=Sm,this._overrideRedirectResult=Em}async _openPopup(e,t,n,r){var i;return xf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()"),qm(e,await Km(e,t,n,Af(),r),Qp())}async _openRedirect(e,t,n,r){return await this._originValidation(e),function(e){Xp().location.href=e}(await Km(e,t,n,Af(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Vm(e),n=new km(e);return t.register("authEvent",(t=>(Tf(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gm,{type:Gm},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Gm];void 0!==i&&t(!!i),Ef(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yp()||cp()||gp()}};var Ym="@firebase/auth",Xm="1.7.5";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class Jm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Tf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Zm=gh("authIdTokenMaxAge")||300;let eg=null;var tg;!function(e){Ip=e}({loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Sf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),tg="Browser",Kd(new Uh("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;Tf(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:tg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wp(tg)},l=new Sp(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Kd(new Uh("auth-internal",(e=>(e=>new Jm(e))(kp(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),tf(Ym,Xm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(tg)),tf(Ym,Xm,"esm2017");
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */
const ng={};
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */function rg(e){return Object.isFrozen(e)&&Object.isFrozen(e.raw)}function ig(e){return-1===e.toString().indexOf("`")}ig((e=>e``))||ig((e=>e`\0`))||ig((e=>e`\n`))||ig((e=>e`\u0000`)),rg``&&rg`\0`&&rg`\n`&&rg`\u0000`
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */;let sg,ag="google#safe";function og(){var e;return""!==ag&&null!==(e=function(){if("undefined"!=typeof window)return window.trustedTypes}())&&void 0!==e?e:null}
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */
class lg{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ug(e){var t;const n=e,r=null===(t=function(){var e,t;if(void 0===sg)try{sg=null!==(t=null===(e=og())||void 0===e?void 0:e.createPolicy(ag,{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e}))&&void 0!==t?t:null}catch(n){sg=null}return sg}())||void 0===t?void 0:t.createScriptURL(n);return null!=r?r:new lg(n,ng)}
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */
function cg(e,...t){if(0===t.length)return ug(e[0]);e[0].toLowerCase();let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return ug(n)}
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */function hg(e,t,n){e.src=function(e){var t;if(null===(t=og())||void 0===t?void 0:t.isScriptURL(e))return e;if(e instanceof lg)return e.privateDoNotAccessOrElseWrappedResourceUrl;throw new Error("")}(t),
/**
       * @license
       * SPDX-License-Identifier: Apache-2.0
       */function(e){const t=function(e,t){var n;const r=t.document,i=null===(n=r.querySelector)||void 0===n?void 0:n.call(r,`${e}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}("script",e.ownerDocument&&e.ownerDocument.defaultView||window);t&&e.setAttribute("nonce",t)}(e)}const dg="@firebase/installations",fg="0.6.8",pg=1e4,mg=`w:${fg}`,gg="FIS_v2",vg="https://firebaseinstallations.googleapis.com/v1",yg=36e5,wg=new _h("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bg(e){return e instanceof kh&&e.code.includes("request-failed")}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Eg({projectId:e}){return`${vg}/projects/${e}/installations`}function Sg(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function kg(e,t){const n=(await t.json()).error;return wg.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function _g({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ig(e,{refreshToken:t}){const n=_g(e);return n.append("Authorization",function(e){return`${gg} ${e}`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t)),n}async function Tg(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Cg(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const xg=/^[cdef][\w-]{21}$/,Ag="";function Ng(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e);return xg.test(t)?t:Ag}catch(e){return Ag}}function Pg(e){return`${e.appName}!${e.appId}`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Rg=new Map;function Og(e,t){const n=Pg(e);Dg(n,t),function(e,t){const n=(!Lg&&"BroadcastChannel"in self&&(Lg=new BroadcastChannel("[Firebase] FID Change"),Lg.onmessage=e=>{Dg(e.data.key,e.data.fid)}),Lg);n&&n.postMessage({key:e,fid:t}),0===Rg.size&&Lg&&(Lg.close(),Lg=null)}(n,t)}function Dg(e,t){const n=Rg.get(e);if(n)for(const r of n)r(t)}let Lg=null;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Mg="firebase-installations-database",Ug=1,Fg="firebase-installations-store";let jg=null;function Vg(){return jg||(jg=ad(Mg,Ug,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Fg)}})),jg}async function zg(e,t){const n=Pg(e),r=(await Vg()).transaction(Fg,"readwrite"),i=r.objectStore(Fg),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||Og(e,t.fid),t}async function Bg(e){const t=Pg(e),n=(await Vg()).transaction(Fg,"readwrite");await n.objectStore(Fg).delete(t),await n.done}async function qg(e,t){const n=Pg(e),r=(await Vg()).transaction(Fg,"readwrite"),i=r.objectStore(Fg),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,!a||s&&s.fid===a.fid||Og(e,a.fid),a}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function $g(e){let t;const n=await qg(e.appConfig,(n=>{const r=function(e){const t=e||{fid:Ng(),registrationStatus:0};return Kg(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(wg.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Eg(e),i=_g(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:n,authVersion:gg,appId:e.appId,sdkVersion:mg},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await Tg((()=>fetch(r,o)));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Sg(e.authToken)}}throw await kg("Create Installation",l)}(e,t);return zg(e.appConfig,n)}catch(n){throw bg(n)&&409===n.customData.serverCode?await Bg(e.appConfig):await zg(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Hg(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===Ag?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Hg(e){let t=await Wg(e.appConfig);for(;1===t.registrationStatus;)await Cg(100),t=await Wg(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await $g(e);return n||t}return t}function Wg(e){return qg(e,(e=>{if(!e)throw wg.create("installation-not-found");return Kg(e)}))}function Kg(e){return 1===(t=e).registrationStatus&&t.registrationTime+pg<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}async function Gg({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Eg(e)}/${t}/authTokens:generate`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e,n),i=Ig(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:mg,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await Tg((()=>fetch(r,o)));if(l.ok)return Sg(await l.json());throw await kg("Generate Auth Token",l)}async function Qg(e,t=!1){let n;const r=await qg(e.appConfig,(r=>{if(!Xg(r))throw wg.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yg}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Yg(e.appConfig);for(;1===n.authToken.requestStatus;)await Cg(100),n=await Yg(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Qg(e,t):r}(e,t),r;{if(!navigator.onLine)throw wg.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Gg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await zg(e.appConfig,r),n}catch(n){if(!bg(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await zg(e.appConfig,n)}else await Bg(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Yg(e){return qg(e,(e=>{if(!Xg(e))throw wg.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+pg<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}))}function Xg(e){return void 0!==e&&2===e.registrationStatus}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
async function Jg(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await $g(e);t&&await t}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(n),(await Qg(n,t)).token}function Zg(e){return wg.create("missing-app-config-values",{valueName:e})}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const ev="installations",tv=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Zg("App Configuration");if(!e.name)throw Zg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Zg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Gd(t,"heartbeat"),_delete:()=>Promise.resolve()}},nv=e=>{const t=Gd(e.getProvider("app").getImmediate(),ev).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await $g(t);return r?r.catch(console.error):Qg(t).catch(console.error),n.fid}(t),getToken:e=>Jg(t,e)}};Kd(new Uh(ev,tv,"PUBLIC")),Kd(new Uh("installations-internal",nv,"PRIVATE")),tf(dg,fg),tf(dg,fg,"esm2017");
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const rv="analytics",iv="firebase_id",sv="origin",av=6e4,ov="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lv="https://www.googletagmanager.com/gtag/js",uv=new Wh("@firebase/analytics");
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function cv(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function hv(e,t){const n=document.createElement("script");hg(n,cg`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`),n.async=!0,document.head.appendChild(n)}function dv(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await cv(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){uv.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,a]=s;await async function(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const e=(await cv(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(o){uv.error(o)}e("config",i,s)}(e,t,n,r,i,a)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(a){uv.error(a)}}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const fv=new _h("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."}),pv=30,mv=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function gv(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function vv(e,t=mv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw fv.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw fv.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new wv;return setTimeout((async()=>{o.abort()}),av),yv({appId:r,apiKey:i,measurementId:s},a,o,t)}async function yv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=mv){var s;const{appId:a,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(fv.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(l){if(o)return uv.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:a,measurementId:o};throw l}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:gv(r)},s=ov.replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(o){}throw fv.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(a),t}catch(l){const t=l;if(!function(e){if(!(e instanceof kh&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(a),o)return uv.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:a,measurementId:o};throw l}const u=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?Lh(n,i.intervalMillis,pv):Lh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,c),uv.debug(`Calling attemptFetch again in ${u} millis`),yv(e,c,r,i)}}class wv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function bv(e,t,n,r,i,s,a){var o;const l=vv(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&uv.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>uv.error(e))),t.push(l);const u=
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
async function(){if(!Eh())return uv.warn(fv.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Sh()}catch(e){return uv.warn(fv.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[c,h]=await Promise.all([l,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(lv)&&n.src.includes(e))return n;return null})(s)||hv(s,c.measurementId),i("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d[sv]="firebase",d.update=!0,null!=h&&(d[iv]=h),i("config",c.measurementId,d),c.measurementId}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ev{constructor(e){this.app=e}_delete(){return delete Sv[this.app.options.appId],Promise.resolve()}}let Sv={},kv=[];const _v={};let Iv,Tv,Cv="dataLayer",xv="gtag",Av=!1;function Nv(){const e=[];if(wh()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=fv.create("invalid-analytics-context",{errorInfo:t});uv.warn(n.message)}}function Pv(e,t,n){Nv();const r=e.options.appId;if(!r)throw fv.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw fv.create("no-api-key");uv.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Sv[r])throw fv.create("already-exists",{id:r});if(!Av){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Cv);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=dv(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(Sv,kv,_v,Cv,xv);Tv=e,Iv=t,Av=!0}return Sv[r]=bv(e,kv,_v,t,Iv,Cv,n),new Ev(e)}function Rv(e,t,n,r){e=Mh(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Tv,Sv[e.app.options.appId],t,n,r).catch((e=>uv.error(e)))}const Ov="@firebase/analytics",Dv="0.10.6";Kd(new Uh(rv,((e,{options:t})=>Pv(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Kd(new Uh("analytics-internal",(function(e){try{const t=e.getProvider(rv).getImmediate();return{logEvent:(e,n,r)=>Rv(t,e,n,r)}}catch(t){throw fv.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),tf(Ov,Dv),tf(Ov,Dv,"esm2017");var Lv,Mv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */(function(){var e;
/** @license

       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=v(n),r=v(r);var i=y(n,1),s=y(r,1);for(r=y(r,2),n=y(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=y(r,1),n=y(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||0<u.l(e);)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function v(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function y(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},Lv=r}).apply(void 0!==Mv?Mv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Uv,Fv,jv,Vv,zv,Bv,qv,$v,Hv,Wv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Wv&&Wv];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license

       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function v(e){return v[" "](e),e}v[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function w(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<E.length;t++)n=E[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function k(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _(e){i.setTimeout((()=>{throw e}),0)}function I(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new C),(e=>e.reset()));class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let x,A=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=T.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},P=()=>{const e=i.Promise.resolve(void 0);x=()=>{e.then(R)}};var R=()=>{for(var e;e=I();){try{e.h.call(e.g)}catch(n){_(n)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function O(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function M(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{v(t.nodeName);var i=!0;break e}catch($){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:U[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&M.aa.h.call(this)}}h(M,D);var U={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),j=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++j,this.da=this.fa=!1}function z(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function B(e){this.src=e,this.g={},this.h=0}function q(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function H(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=H(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var K="closure_lm_"+(1e6*Math.random()|0),G={};function Q(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Q(e,t[s],n,r,i);return null}return n=ne(n),e&&e[F]?e.K(t,n,a(r)?!!r.capture:!!r,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,l=ee(e);if(l||(e[K]=l=new B(e)),(n=l.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Z;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(J(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function Y(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Y(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=ne(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&-1<(n=H(s=e.g[t],n,r,i))&&(z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--))):e&&(e=ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=H(t,n,r,i)),(n=-1<e?t[e]:null)&&X(n))}function X(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])q(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(J(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ee(t))?(q(n,e),0==n.h&&(n.src=null,t[K]=null)):z(e)}}}function J(e){return e in G?G[e]:G[e]="on"+e}function Z(e,t){if(e.da)e=!0;else{t=new M(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&X(e),e=n.call(r,t)}return e}function ee(e){return(e=e[K])instanceof B?e:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(e){return"function"==typeof e?e:(e[te]||(e[te]=function(t){return e.handleEvent(t)}),e[te])}function re(){O.call(this),this.i=new B(this),this.M=this,this.F=null}function ie(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;S(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=se(a,r,!0,t)&&i}if(i=se(a=t.g=e,r,!0,t)&&i,i=se(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=se(a=t.g=n[s],r,!1,t)&&i}function se(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&q(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function ae(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function oe(e){e.g=ae((()=>{e.g=null,e.i&&(e.i=!1,oe(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(re,O),re.prototype[F]=!0,re.prototype.removeEventListener=function(e,t,n,r){Y(this,e,t,n,r)},re.prototype.N=function(){if(re.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)z(n[r]);delete t.g[e],t.h--}}this.F=null},re.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},re.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class le extends O{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:oe(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(e){O.call(this),this.h=e,this.g={}}h(ue,O);var ce=[];function he(e){w(e.g,(function(e,t){this.g.hasOwnProperty(t)&&X(e)}),e),e.g={}}ue.prototype.N=function(){ue.aa.N.call(this),he(this)},ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var de=i.JSON.stringify,fe=i.JSON.parse,pe=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function me(){}function ge(e){return e.h||(e.h=e.i())}function ve(){}me.prototype.h=null;var ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function we(){D.call(this,"d")}function be(){D.call(this,"c")}h(we,D),h(be,D);var Ee={},Se=null;function ke(){return Se=Se||new re}function _e(e){D.call(this,Ee.La,e)}function Ie(e){const t=ke();ie(t,new _e(t))}function Te(e,t){D.call(this,Ee.STAT_EVENT,e),this.stat=t}function Ce(e){const t=ke();ie(t,new Te(t,e))}function xe(e,t){D.call(this,Ee.Ma,e),this.size=t}function Ae(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ne(){this.g=!0}function Pe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return de(n)}catch(sh){return t}}(e,n)+(r?" "+r:"")}))}Ee.La="serverreachability",h(_e,D),Ee.STAT_EVENT="statevent",h(Te,D),Ee.Ma="timingevent",h(xe,D),Ne.prototype.xa=function(){this.g=!1},Ne.prototype.info=function(){};var Re,Oe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},De={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Le(){}function Me(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ue}function Ue(){this.i=null,this.g="",this.h=!1}h(Le,me),Le.prototype.g=function(){return new XMLHttpRequest},Le.prototype.i=function(){return{}},Re=new Le;var Fe={},je={};function Ve(e,t,n){e.L=1,e.v=ft(ot(t)),e.m=n,e.P=!0,ze(e,null)}function ze(e,t){e.F=Date.now(),$e(e),e.A=ot(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Tt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Ue,e.g=pn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new le(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ce[0]=i.toString()),i=ce);for(var s=0;s<i.length;s++){var a=Q(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ie(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Be(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function qe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?je:(n=Number(t.substring(n,r)),isNaN(n)?Fe:(r+=1)+n>t.length?je:(t=t.slice(r,r+n),e.C=r+n,t))}function $e(e){e.S=Date.now()+e.I,He(e,e.I)}function He(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ae(u(e.ba,e),t)}function We(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function Ke(e){0==e.j.G||e.J||un(e.j,e)}function Ge(e){We(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,he(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Qe(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||et(n.h,e)))if(!e.K&&et(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(W){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ln(n),Xt(n)}sn(n),Ce(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ae(u(n.Za,n),6e3));if(1>=Ze(n.h)&&n.ca){try{n.ca()}catch(W){}n.ca=void 0}}else hn(n,11)}else if((e.K||n.g==e)&&ln(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,dt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=fn(r,r.J?r.ia:null,r.W),a.K){nt(r.h,a);var o=a,l=r.L;l&&(o.I=l),o.B&&(We(o),$e(o)),r.g=a}else rn(r);0<n.i.length&&Zt(n)}else"stop"!=u[0]&&"close"!=u[0]||hn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?hn(n,7):Yt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ie()}catch(W){}}Me.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Wt(e)?t.j():this.Y(e)},Me.prototype.Y=function(e){try{if(e==this.g)e:{const d=Wt(this.g);var t=this.g.Ba();if(this.g.Z(),!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Kt(this.g)))){this.J||4!=d||7==t||Ie(),We(this);var n=this.g.Z();this.X=n;t:if(Be(this)){var r=Kt(this.g);e="";var s=r.length,a=4==Wt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ge(this),Ke(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,Ce(12),Ge(this),Ke(this);break e}Pe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qe(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=qe(this,o),e==je){4==d&&(this.s=4,Ce(14),n=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Fe){this.s=4,Ce(15),Pe(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Pe(this.i,this.l,e,null),Qe(this,e)}if(Be(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Ce(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),an(h),h.M=!0,Ce(11))}}else Pe(this.i,this.l,o,"[Invalid Chunked Response]"),Ge(this),Ke(this)}else Pe(this.i,this.l,o,null),Qe(this,o);4==d&&Ge(this),this.o&&!this.J&&(4==d?un(this.j,this):(this.o=!1,$e(this)))}else(function(e){const t={};e=(e.g&&2<=Wt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=k(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Ge(this),Ke(this)}}}catch(m){}},Me.prototype.cancel=function(){this.J=!0,Ge(this)},Me.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ie(),Ce(17)),Ge(this),this.s=2,Ke(this)):He(this,this.S-e)};var Ye=class{constructor(e,t){this.g=e,this.map=t}};function Xe(e){this.l=e||10,e=i.PerformanceNavigationTiming?0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Je(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ze(e){return e.h?1:e.g?e.g.size:0}function et(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tt(e,t){e.g?e.g.add(t):e.h=t}function nt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function rt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function it(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Xe.prototype.cancel=function(){if(this.i=rt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var st=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function at(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof at){this.h=e.h,lt(this,e.j),this.o=e.o,this.g=e.g,ut(this,e.s),this.l=e.l;var t=e.i,n=new St;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ct(this,n),this.m=e.m}else e&&(t=String(e).match(st))?(this.h=!1,lt(this,t[1]||"",!0),this.o=pt(t[2]||""),this.g=pt(t[3]||"",!0),ut(this,t[4]),this.l=pt(t[5]||"",!0),ct(this,t[6]||"",!0),this.m=pt(t[7]||"")):(this.h=!1,this.i=new St(null,this.h))}function ot(e){return new at(e)}function lt(e,t,n){e.j=n?pt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ct(e,t,n){t instanceof St?(e.i=t,function(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),Tt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=mt(t,bt)),e.i=new St(t,e.h))}function dt(e,t,n){e.i.set(t,n)}function ft(e){return dt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function gt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}at.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mt(t,vt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(mt(t,vt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(mt(n,"/"==n.charAt(0)?wt:yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",mt(n,Et)),e.join("")};var vt=/[#\/\?@]/g,yt=/[#\?:]/g,wt=/[#\?]/g,bt=/[#\?@]/g,Et=/#/g;function St(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){kt(e),t=Ct(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function It(e,t){return kt(e),t=Ct(e,t),e.g.has(t)}function Tt(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(Ct(e,t),d(n)),e.h+=n.length)}function Ct(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch($){}}function At(){this.g=new pe}function Nt(e,t,n){const r=n||"";try{it(e,(function(e,n){let i=e;a(e)&&(i=de(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Rt(e,t){re.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ot(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Dt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Lt(e)}function Lt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Mt(e){let t="";return w(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ut(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):dt(e,t,n))}function Ft(e){re.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=St.prototype).add=function(e,t){kt(this),this.i=null,e=Ct(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){kt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){kt(this);let t=[];if("string"==typeof e)It(this,e)&&(t=t.concat(this.g.get(Ct(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return kt(this),this.i=null,It(this,e=Ct(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(Pt,me),Pt.prototype.g=function(){return new Rt(this.l,this.j)},Pt.prototype.i=function(e){return function(){return e}}({}),h(Rt,re),(e=Rt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Lt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Lt(this)),this.g&&(this.readyState=3,Lt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ot(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dt(this):Lt(this),3==this.readyState&&Ot(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Dt(this))},e.Qa=function(e){this.g&&(this.response=e,Dt(this))},e.ga=function(){this.g&&Dt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Ft,re);var jt=/^https?$/i,Vt=["POST","PUT"];function zt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Bt(e),$t(e)}function Bt(e){e.A||(e.A=!0,ie(e,"complete"),ie(e,"error"))}function qt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Wt(e)||2!=e.Z()))if(e.u&&4==Wt(e))ae(e.Ea,0,e);else if(ie(e,"readystatechange"),4==Wt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(st)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!jt.test(a?a.toLowerCase():"")}n=s}if(n)ie(e,"complete"),ie(e,"success");else{e.m=6;try{var o=2<Wt(e)?e.g.statusText:""}catch(sh){o=""}e.l=o+" ["+e.Z()+"]",Bt(e)}}finally{$t(e)}}}function $t(e,t){if(e.g){Ht(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ie(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Ht(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Wt(e){return e.g?e.g.readyState:0}function Kt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qv){return null}}function Gt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Qt(e){this.Aa=0,this.i=[],this.j=new Ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gt("baseRetryDelayMs",5e3,e),this.cb=Gt("retryDelaySeedMs",1e4,e),this.Wa=Gt("forwardChannelMaxRetries",2,e),this.wa=Gt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Xe(e&&e.concurrentRequestLimit),this.Da=new At,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Yt(e){if(Jt(e),3==e.G){var t=e.U++,n=ot(e.I);if(dt(n,"SID",e.K),dt(n,"RID",t),dt(n,"TYPE","terminate"),tn(e,n),(t=new Me(e,e.j,t)).L=2,t.v=ft(ot(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=pn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),$e(t)}dn(e)}function Xt(e){e.g&&(an(e),e.g.cancel(),e.g=null)}function Jt(e){Xt(e),e.u&&(i.clearTimeout(e.u),e.u=null),ln(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Zt(e){if(!Je(e.h)&&!e.s){e.s=!0;var t=e.Ga;x||P(),A||(x(),A=!0),N.add(t,e),e.B=0}}function en(e,t){var n;n=t?t.l:e.U++;const r=ot(e.I);dt(r,"SID",e.K),dt(r,"RID",n),dt(r,"AID",e.T),tn(e,r),e.m&&e.o&&Ut(r,e.m,e.o),n=new Me(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=nn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),tt(e.h,n),Ve(n,r,t)}function tn(e,t){e.H&&w(e.H,(function(e,n){dt(t,n,e)})),e.l&&it({},(function(e,n){dt(t,n,e)}))}function nn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g;const o=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),s=!1;else try{Nt(o,e,"req"+n+"_")}catch(m){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function rn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;x||P(),A||(x(),A=!0),N.add(t,e),e.v=0}}function sn(e){return!(e.g||e.u||3<=e.v||(e.Y++,e.u=Ae(u(e.Fa,e),cn(e,e.v)),e.v++,0))}function an(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function on(e){e.g=new Me(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=ot(e.qa);dt(t,"RID","rpc"),dt(t,"SID",e.K),dt(t,"AID",e.T),dt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&dt(t,"TO",e.ja),dt(t,"TYPE","xmlhttp"),tn(e,t),e.m&&e.o&&Ut(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ft(ot(t)),n.m=null,n.P=!0,ze(n,e)}function ln(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function un(e,t){var n=null;if(e.g==t){ln(e),an(e),e.g=null;var r=2}else{if(!et(e.h,t))return;n=t.D,nt(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;ie(r=ke(),new xe(r,n)),Zt(e)}else rn(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ze(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ae(u(e.Ga,e,t),cn(e,e.B)),e.B++,0)))}(e,t)||2==r&&sn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:hn(e,5);break;case 4:hn(e,10);break;case 3:hn(e,6);break;default:hn(e,2)}}function cn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function hn(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new at(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||lt(r,"https"),ft(r),t?function(e,t){const n=new Ne;if(i.Image){const r=new Image;r.onload=c(xt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(xt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(xt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(xt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ne;const n=new AbortController,r=setTimeout((()=>{n.abort(),xt(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?xt(0,0,!0,t):xt(0,0,!1,t)})).catch((()=>{clearTimeout(r),xt(0,0,!1,t)}))}(r.toString(),n)}else Ce(2);e.G=0,e.l&&e.l.sa(t),dn(e),Jt(e)}function dn(e){if(e.G=0,e.ka=[],e.l){const t=rt(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function fn(e,t,n){var r=n instanceof at?ot(n):new at(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ut(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new at(null);r&&lt(a,r),t&&(a.g=t),s&&ut(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&dt(r,n,t),dt(r,"VER",e.la),tn(e,r),r}function pn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Ft(new Pt({eb:n})):new Ft(e.pa)).Ha(e.J),t}function mn(){}function gn(){}function vn(e,t){re.call(this),this.g=new Qt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new bn(this)}function yn(e){we.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function wn(){be.call(this),this.status=1}function bn(e){this.g=e}(e=Ft.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Re.g(),this.v=this.o?ge(this.o):ge(Re),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch($){return void zt(this,$)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Vt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ht(this),this.u=!0,this.g.send(e),this.u=!1}catch($){zt(this,$)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ie(this,"complete"),ie(this,"abort"),$t(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),Ft.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?qt(this):this.bb())},e.bb=function(){qt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch(ht){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(ht){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),fe(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Qt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ce(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=fn(this,null,this.W),Zt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Me(this,this.j,e);let s=this.o;if(this.S&&(s?(s=b(s),S(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nn(this,i,t),dt(n=ot(this.I),"RID",e),dt(n,"CVER",22),this.D&&dt(n,"X-HTTP-Session-Id",this.D),tn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Mt(s)))+"&"+t:this.m&&Ut(n,this.m,s)),tt(this.h,i),this.Ua&&dt(n,"TYPE","init"),this.P?(dt(n,"$req",t),dt(n,"SID","null"),i.T=!0,Ve(i,n,null)):Ve(i,n,t),this.G=2}}else 3==this.G&&(e?en(this,e):0==this.i.length||Je(this.h)||en(this))},e.Fa=function(){if(this.u=null,on(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ae(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),Xt(this),on(this))},e.Za=function(){null!=this.C&&(this.C=null,Xt(this),sn(this),Ce(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=mn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},gn.prototype.g=function(e,t){return new vn(e,t)},h(vn,re),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Yt(this.g)},vn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=de(e),e=n);t.i.push(new Ye(t.Ya++,e)),3==t.G&&Zt(t)},vn.prototype.N=function(){this.g.l=null,delete this.j,Yt(this.g),delete this.g,vn.aa.N.call(this)},h(yn,we),h(wn,be),h(bn,mn),bn.prototype.ua=function(){ie(this.g,"a")},bn.prototype.ta=function(e){ie(this.g,new yn(e))},bn.prototype.sa=function(e){ie(this.g,new wn)},bn.prototype.ra=function(){ie(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,Hv=function(){return new gn},$v=function(){return ke()},qv=Ee,Bv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oe.NO_ERROR=0,Oe.TIMEOUT=8,Oe.HTTP_ERROR=6,zv=Oe,De.COMPLETE="complete",Vv=De,ve.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",re.prototype.listen=re.prototype.K,jv=ve,Fv=Pt,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,Uv=Ft}).apply(void 0!==Wv?Wv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Kv="@firebase/firestore";
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Gv{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gv.UNAUTHENTICATED=new Gv(null),Gv.GOOGLE_CREDENTIALS=new Gv("google-credentials-uid"),Gv.FIRST_PARTY=new Gv("first-party-uid"),Gv.MOCK_USER=new Gv("mock-user");
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
let Qv="10.12.3";
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Yv=new Wh("@firebase/firestore");function Xv(){return Yv.logLevel}function Jv(e,...t){if(Yv.logLevel<=zh.DEBUG){const n=t.map(ty);Yv.debug(`Firestore (${Qv}): ${e}`,...n)}}function Zv(e,...t){if(Yv.logLevel<=zh.ERROR){const n=t.map(ty);Yv.error(`Firestore (${Qv}): ${e}`,...n)}}function ey(e,...t){if(Yv.logLevel<=zh.WARN){const n=t.map(ty);Yv.warn(`Firestore (${Qv}): ${e}`,...n)}}function ty(e){if("string"==typeof e)return e;try{
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */return function(e){return JSON.stringify(e)}(e)}catch(d){return e}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ny(e="Unexpected state"){const t=`FIRESTORE (${Qv}) INTERNAL ASSERTION FAILED: `+e;throw Zv(t),new Error(t)}function ry(e,t){e||ny()}function iy(e,t){return e}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const sy={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ay extends kh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class oy{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ly{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Gv.UNAUTHENTICATED)))}shutdown(){}}class cy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hy{constructor(e){this.t=e,this.currentUser=Gv.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new oy;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new oy,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Jv("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Jv("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new oy)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Jv("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ry("string"==typeof t.accessToken),new ly(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ry(null===e||"string"==typeof e),new Gv(e)}}class dy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Gv.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fy{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new dy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Gv.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class my{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Jv("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Jv("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Jv("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Jv("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ry("string"==typeof e.token),this.R=e.token,new py(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function gy(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=gy(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function yy(e,t){return e<t?-1:e>t?1:0}function wy(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class by{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ay(sy.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ay(sy.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ay(sy.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ay(sy.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return by.fromMillis(Date.now())}static fromDate(e){return by.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new by(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yy(this.nanoseconds,e.nanoseconds):yy(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ey{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ey(e)}static min(){return new Ey(new by(0,0))}static max(){return new Ey(new by(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Sy{constructor(e,t,n){void 0===t?t=0:t>e.length&&ny(),void 0===n?n=e.length-t:n>e.length-t&&ny(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Sy.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Sy?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ky extends Sy{construct(e,t,n){return new ky(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ay(sy.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ky(t)}static emptyPath(){return new ky([])}}const _y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Iy extends Sy{construct(e,t,n){return new Iy(e,t,n)}static isValidIdentifier(e){return _y.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Iy.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Iy(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ay(sy.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ay(sy.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ay(sy.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ay(sy.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Iy(t)}static emptyPath(){return new Iy([])}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ty{constructor(e){this.path=e}static fromPath(e){return new Ty(ky.fromString(e))}static fromName(e){return new Ty(ky.fromString(e).popFirst(5))}static empty(){return new Ty(ky.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ky.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ky.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ty(new ky(e.slice()))}}function Cy(e){return new xy(e.readTime,e.key,-1)}class xy{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new xy(Ey.min(),Ty.empty(),-1)}static max(){return new xy(Ey.max(),Ty.empty(),-1)}}function Ay(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ty.comparator(e.documentKey,t.documentKey),0!==n?n:yy(e.largestBatchId,t.largestBatchId)
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */)}const Ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Py{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function Ry(e){if(e.code!==sy.FAILED_PRECONDITION||e.message!==Ny)throw e;Jv("LocalStore","Unexpectedly lost primary lease")}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Oy{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ny(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Oy(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Oy?t:Oy.resolve(t)}catch(e){return Oy.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Oy.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Oy.reject(t)}static resolve(e){return new Oy(((t,n)=>{t(e)}))}static reject(e){return new Oy(((t,n)=>{n(e)}))}static waitFor(e){return new Oy(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Oy.resolve(!1);for(const n of e)t=t.next((e=>e?Oy.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Oy(((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{s[l]=e,++a,a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Oy(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Dy(e){return"IndexedDbTransactionError"===e.name}
/**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ly{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function My(e){return null==e}function Uy(e){return 0===e&&1/e==-1/0}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Fy(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jy(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */Ly.oe=-1;class zy{constructor(e,t){this.comparator=e,this.root=t||qy.EMPTY}insert(e,t){return new zy(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qy.BLACK,null,null))}remove(e){return new zy(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qy.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new By(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new By(this.root,e,this.comparator,!1)}getReverseIterator(){return new By(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new By(this.root,e,this.comparator,!0)}}class By{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qy{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qy.RED,this.left=null!=r?r:qy.EMPTY,this.right=null!=i?i:qy.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qy(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qy.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qy.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qy.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qy.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ny();if(this.right.isRed())throw ny();const e=this.left.check();if(e!==this.right.check())throw ny();return e+(this.isRed()?0:1)}}qy.EMPTY=null,qy.RED=!0,qy.BLACK=!1,qy.EMPTY=new class{constructor(){this.size=0}get key(){throw ny()}get value(){throw ny()}get color(){throw ny()}get left(){throw ny()}get right(){throw ny()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qy(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class $y{constructor(e){this.comparator=e,this.data=new zy(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hy(this.data.getIterator())}getIteratorFrom(e){return new Hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $y))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $y(this.comparator);return t.data=e,t}}class Hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Wy{constructor(e){this.fields=e,e.sort(Iy.comparator)}static empty(){return new Wy([])}unionWith(e){let t=new $y(Iy.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Wy(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wy(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ky extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Gy{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ky("Invalid base64 string: "+e):e}}(e);return new Gy(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Gy(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yy(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gy.EMPTY_BYTE_STRING=new Gy("");const Qy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yy(e){if(ry(!!e),"string"==typeof e){let t=0;const n=Qy.exec(e);if(ry(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Xy(e.seconds),nanos:Xy(e.nanos)}}function Xy(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Jy(e){return"string"==typeof e?Gy.fromBase64String(e):Gy.fromUint8Array(e)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Zy(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ew(e){const t=e.mapValue.fields.__previous_value__;return Zy(t)?ew(t):t}function tw(e){const t=Yy(e.mapValue.fields.__local_write_time__.timestampValue);return new by(t.seconds,t.nanos)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class nw{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class rw{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rw("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rw&&e.projectId===this.projectId&&e.database===this.database}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const iw={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sw(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zy(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e)?9007199254740991:10:ny()}function aw(e,t){if(e===t)return!0;const n=sw(e);if(n!==sw(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tw(e).isEqual(tw(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Yy(e.timestampValue),r=Yy(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Jy(e.bytesValue).isEqual(Jy(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xy(e.geoPointValue.latitude)===Xy(t.geoPointValue.latitude)&&Xy(e.geoPointValue.longitude)===Xy(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xy(e.integerValue)===Xy(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xy(e.doubleValue),r=Xy(t.doubleValue);return n===r?Uy(n)===Uy(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return wy(e.arrayValue.values||[],t.arrayValue.values||[],aw);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fy(n)!==Fy(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!aw(n[i],r[i])))return!1;return!0}(e,t);default:return ny()}}function ow(e,t){return void 0!==(e.values||[]).find((e=>aw(e,t)))}function lw(e,t){if(e===t)return 0;const n=sw(e),r=sw(t);if(n!==r)return yy(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yy(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xy(e.integerValue||e.doubleValue),r=Xy(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return uw(e.timestampValue,t.timestampValue);case 4:return uw(tw(e),tw(t));case 5:return yy(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Jy(e),r=Jy(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=yy(n[i],r[i]);if(0!==e)return e}return yy(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yy(Xy(e.latitude),Xy(t.latitude));return 0!==n?n:yy(Xy(e.longitude),Xy(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=lw(n[i],r[i]);if(e)return e}return yy(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===iw.mapValue&&t===iw.mapValue)return 0;if(e===iw.mapValue)return 1;if(t===iw.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=yy(r[a],s[a]);if(0!==e)return e;const t=lw(n[r[a]],i[s[a]]);if(0!==t)return t}return yy(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ny()}}function uw(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yy(e,t);const n=Yy(e),r=Yy(t),i=yy(n.seconds,r.seconds);return 0!==i?i:yy(n.nanos,r.nanos)}function cw(e){return hw(e)}function hw(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Yy(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Jy(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ty.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=hw(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${hw(e.fields[i])}`;return n+"}"}(e.mapValue):ny()}function dw(e){return!!e&&"integerValue"in e}function fw(e){return!!e&&"arrayValue"in e}function pw(e){return!!e&&"mapValue"in e}function mw(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jy(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=mw(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=mw(e.arrayValue.values[n]);return t}return Object.assign({},e)}class gw{constructor(e){this.value=e}static empty(){return new gw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pw(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mw(t)}setAll(e){let t=Iy.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=mw(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());pw(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return aw(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pw(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){jy(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new gw(mw(this.value))}}function vw(e){const t=[];return jy(e.fields,((e,n)=>{const r=new Iy([e]);if(pw(n)){const e=vw(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Wy(t)
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}class yw{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new yw(e,0,Ey.min(),Ey.min(),Ey.min(),gw.empty(),0)}static newFoundDocument(e,t,n,r){return new yw(e,1,t,Ey.min(),n,r,0)}static newNoDocument(e,t){return new yw(e,2,t,Ey.min(),Ey.min(),gw.empty(),0)}static newUnknownDocument(e,t){return new yw(e,3,t,Ey.min(),Ey.min(),gw.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ey.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gw.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gw.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ey.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof yw&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yw(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ww{constructor(e,t){this.position=e,this.inclusive=t}}function bw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Ty.comparator(Ty.fromName(a.referenceValue),n.key):lw(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ew(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!aw(e.position[n],t.position[n]))return!1;return!0}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Sw{constructor(e,t="asc"){this.field=e,this.dir=t}}function kw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class _w{}class Iw extends _w{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Rw(e,t,n):"array-contains"===t?new Mw(e,n):"in"===t?new Uw(e,n):"not-in"===t?new Fw(e,n):"array-contains-any"===t?new jw(e,n):new Iw(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ow(e,n):new Dw(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(lw(t,this.value)):null!==t&&sw(this.value)===sw(t)&&this.matchesComparison(lw(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ny()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tw extends _w{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tw(e,t)}matches(e){return Cw(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Cw(e){return"and"===e.op}function xw(e){return function(e){for(const t of e.filters)if(t instanceof Tw)return!1;return!0}(e)&&Cw(e)}function Aw(e){if(e instanceof Iw)return e.field.canonicalString()+e.op.toString()+cw(e.value);if(xw(e))return e.filters.map((e=>Aw(e))).join(",");{const t=e.filters.map((e=>Aw(e))).join(",");return`${e.op}(${t})`}}function Nw(e,t){return e instanceof Iw?function(e,t){return t instanceof Iw&&e.op===t.op&&e.field.isEqual(t.field)&&aw(e.value,t.value)}(e,t):e instanceof Tw?function(e,t){return t instanceof Tw&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Nw(n,t.filters[r])),!0)}(e,t):void ny()}function Pw(e){return e instanceof Iw?function(e){return`${e.field.canonicalString()} ${e.op} ${cw(e.value)}`}(e):e instanceof Tw?function(e){return e.op.toString()+" {"+e.getFilters().map(Pw).join(" ,")+"}"}(e):"Filter"}class Rw extends Iw{constructor(e,t,n){super(e,t,n),this.key=Ty.fromName(n.referenceValue)}matches(e){const t=Ty.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ow extends Iw{constructor(e,t){super(e,"in",t),this.keys=Lw(0,t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Dw extends Iw{constructor(e,t){super(e,"not-in",t),this.keys=Lw(0,t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lw(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ty.fromName(e.referenceValue)))}class Mw extends Iw{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fw(t)&&ow(t.arrayValue,this.value)}}class Uw extends Iw{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ow(this.value.arrayValue,t)}}class Fw extends Iw{constructor(e,t){super(e,"not-in",t)}matches(e){if(ow(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ow(this.value.arrayValue,t)}}class jw extends Iw{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fw(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ow(this.value.arrayValue,e)))}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Vw{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function zw(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Vw(e,t,n,r,i,s,a)}function Bw(e){const t=iy(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Aw(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),My(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>cw(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>cw(e))).join(",")),t.ue=e}return t.ue}function qw(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!kw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Nw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ew(e.startAt,t.startAt)&&Ew(e.endAt,t.endAt)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class $w{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hw(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ww(e){const t=iy(e);if(null===t.ce){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new $y(Iy.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Sw(r,n))})),e.has(Iy.keyField().canonicalString())||t.ce.push(new Sw(Iy.keyField(),n))}return t.ce}function Kw(e){const t=iy(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return zw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Sw(e.field,t)}));const n=e.endAt?new ww(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ww(e.startAt.position,e.startAt.inclusive):null;return zw(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Ww(e))),t.le}function Gw(e,t,n){return new $w(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qw(e,t){return qw(Kw(e),Kw(t))&&e.limitType===t.limitType}function Yw(e){return`${Bw(Kw(e))}|lt:${e.limitType}`}function Xw(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Pw(e))).join(", ")}]`),My(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>cw(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>cw(e))).join(",")),`Target(${t})`}(Kw(e))}; limitType=${e.limitType})`}function Jw(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ty.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ww(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=bw(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ww(e),t)||e.endAt&&!function(e,t,n){const r=bw(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ww(e),t))}(e,t)}function Zw(e,t,n){const r=e.field.isKeyField()?Ty.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?lw(r,i):ny()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ny()}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class eb{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){jy(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Vy(this.inner)}size(){return this.innerSize}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const tb=new zy(Ty.comparator);function nb(){return tb}const rb=new zy(Ty.comparator);function ib(...e){let t=rb;for(const n of e)t=t.insert(n.key,n);return t}function sb(e){let t=rb;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ab(){return lb()}function ob(){return lb()}function lb(){return new eb((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ub=new zy(Ty.comparator),cb=new $y(Ty.comparator);function hb(...e){let t=cb;for(const n of e)t=t.add(n);return t}const db=new $y(yy);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function fb(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uy(t)?"-0":t}}function pb(e){return{integerValue:""+e}}function mb(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Uy(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?pb(t):fb(e,t)}
/**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class gb{constructor(){this._=void 0}}function vb(e,t,n){return e instanceof bb?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Zy(t)&&(t=ew(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Eb?Sb(e,t):e instanceof kb?_b(e,t):function(e,t){const n=wb(e,t),r=Tb(n)+Tb(e.Pe);return dw(n)&&dw(e.Pe)?pb(r):fb(e.serializer,r)}(e,t)}function yb(e,t,n){return e instanceof Eb?Sb(e,t):e instanceof kb?_b(e,t):n}function wb(e,t){return e instanceof Ib?function(e){return dw(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class bb extends gb{}class Eb extends gb{constructor(e){super(),this.elements=e}}function Sb(e,t){const n=Cb(t);for(const r of e.elements)n.some((e=>aw(e,r)))||n.push(r);return{arrayValue:{values:n}}}class kb extends gb{constructor(e){super(),this.elements=e}}function _b(e,t){let n=Cb(t);for(const r of e.elements)n=n.filter((e=>!aw(e,r)));return{arrayValue:{values:n}}}class Ib extends gb{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Tb(e){return Xy(e.integerValue||e.doubleValue)}function Cb(e){return fw(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class xb{constructor(e,t){this.version=e,this.transformResults=t}}class Ab{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ab}static exists(e){return new Ab(void 0,e)}static updateTime(e){return new Ab(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nb(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Pb{}function Rb(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bb(e.key,Ab.none()):new Ub(e.key,e.data,Ab.none());{const n=e.data,r=gw.empty();let i=new $y(Iy.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Fb(e.key,r,new Wy(i.toArray()),Ab.none())}}function Ob(e,t,n){e instanceof Ub?function(e,t,n){const r=e.value.clone(),i=Vb(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Fb?function(e,t,n){if(!Nb(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vb(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(jb(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Db(e,t,n,r){return e instanceof Ub?function(e,t,n,r){if(!Nb(e.precondition,t))return n;const i=e.value.clone(),s=zb(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fb?function(e,t,n,r){if(!Nb(e.precondition,t))return n;const i=zb(e.fieldTransforms,r,t),s=t.data;return s.setAll(jb(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Nb(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Lb(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=wb(r.transform,e||null);null!=i&&(null===n&&(n=gw.empty()),n.set(r.field,i))}return n||null}function Mb(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wy(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Eb&&t instanceof Eb||e instanceof kb&&t instanceof kb?wy(e.elements,t.elements,aw):e instanceof Ib&&t instanceof Ib?aw(e.Pe,t.Pe):e instanceof bb&&t instanceof bb}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ub extends Pb{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fb extends Pb{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jb(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vb(e,t,n){const r=new Map;ry(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,yb(a,o,n[i]))}return r}function zb(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,vb(e,s,t))}return r}class Bb extends Pb{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qb extends Pb{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class $b{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ob(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Db(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Db(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ob();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=Rb(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(Ey.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),hb())}isEqual(e){return this.batchId===e.batchId&&wy(this.mutations,e.mutations,((e,t)=>Mb(e,t)))&&wy(this.baseMutations,e.baseMutations,((e,t)=>Mb(e,t)))}}class Hb{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ry(e.mutations.length===n.length);let r=ub;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hb(e,t,n,r)}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Wb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var Kb,Gb;(Gb=Kb||(Kb={}))[Gb.OK=0]="OK",Gb[Gb.CANCELLED=1]="CANCELLED",Gb[Gb.UNKNOWN=2]="UNKNOWN",Gb[Gb.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gb[Gb.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gb[Gb.NOT_FOUND=5]="NOT_FOUND",Gb[Gb.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gb[Gb.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gb[Gb.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gb[Gb.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gb[Gb.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gb[Gb.ABORTED=10]="ABORTED",Gb[Gb.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gb[Gb.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gb[Gb.INTERNAL=13]="INTERNAL",Gb[Gb.UNAVAILABLE=14]="UNAVAILABLE",Gb[Gb.DATA_LOSS=15]="DATA_LOSS",
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
new Lv([4294967295,4294967295],0);class Qb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yb(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jb(e,t){return Yb(e,t.toTimestamp())}function Zb(e){return ry(!!e),Ey.fromTimestamp(function(e){const t=Yy(e);return new by(t.seconds,t.nanos)}(e))}function eE(e,t){return tE(e,t).canonicalString()}function tE(e,t){const n=function(e){return new ky(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function nE(e,t){return eE(e.databaseId,t.path)}function rE(e){const t=function(e){const t=ky.fromString(e);return ry(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t)),t}(e);return 4===t.length?ky.emptyPath():function(e){return ry(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function iE(e,t,n){return{name:nE(e,t),fields:n.value.mapValue.fields}}function sE(e){let t=rE(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ry(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=aE(e);return t instanceof Tw&&xw(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map((e=>function(e){return new Sw(oE(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,My(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ww(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ww(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new $w(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function aE(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=oE(e.unaryFilter.field);return Iw.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=oE(e.unaryFilter.field);return Iw.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=oE(e.unaryFilter.field);return Iw.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=oE(e.unaryFilter.field);return Iw.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ny()}}(e):void 0!==e.fieldFilter?function(e){return Iw.create(oE(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ny()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Tw.create(e.compositeFilter.filters.map((e=>aE(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ny()}}(e.compositeFilter.op))}(e):ny()}function oE(e){return Iy.fromServerFormat(e.fieldPath)}function lE(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}class uE{constructor(e){this.ct=e}}function cE(e){const t=sE({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Gw(t,t.limit,"L"):t}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class hE{constructor(){this._n=new dE}addToCollectionParentIndex(e,t){return this._n.add(t),Oy.resolve()}getCollectionParents(e,t){return Oy.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return Oy.resolve()}deleteFieldIndex(e,t){return Oy.resolve()}deleteAllFieldIndexes(e){return Oy.resolve()}createTargetIndexes(e,t){return Oy.resolve()}getDocumentsMatchingTarget(e,t){return Oy.resolve(null)}getIndexType(e,t){return Oy.resolve(0)}getFieldIndexes(e,t){return Oy.resolve([])}getNextCollectionGroupToUpdate(e){return Oy.resolve(null)}getMinOffset(e,t){return Oy.resolve(xy.min())}getMinOffsetFromCollectionGroup(e,t){return Oy.resolve(xy.min())}updateCollectionGroup(e,t,n){return Oy.resolve()}updateIndexEntries(e,t){return Oy.resolve()}}class dE{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $y(ky.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $y(ky.comparator)).toArray()}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class fE{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new fE(0)}static Ln(){return new fE(-1)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class pE{constructor(){this.changes=new eb((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yw.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Oy.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class mE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class gE{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Db(n.mutation,e,Wy.empty(),by.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,hb()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=hb()){const r=ab();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ib();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ab();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,hb())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=nb();const s=lb(),a=lb();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Fb)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Db(a.mutation,t,a.mutation.getFieldMask(),by.now())):s.set(t.key,Wy.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new mE(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=lb();let r=new zy(((e,t)=>e-t)),i=hb();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||Wy.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||hb()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=ob();l.forEach((e=>{if(!i.has(e)){const r=Rb(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Oy.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Ty.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Oy.resolve(ab());let a=-1,o=i;return s.next((t=>Oy.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Oy.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,hb()))).next((e=>({batchId:a,changes:sb(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ty(t)).next((e=>{let t=ib();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=ib();return this.indexManager.getCollectionParents(e,i).next((a=>Oy.forEach(a,(a=>{const o=function(e,t){return new $w(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,yw.newInvalidDocument(r)))}));let n=ib();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Db(s.mutation,r,Wy.empty(),by.now()),Jw(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class vE{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return Oy.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Zb(e.createTime)}}(t)),Oy.resolve()}getNamedQuery(e,t){return Oy.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:cE(e.bundledQuery),readTime:Zb(e.readTime)}}(t)),Oy.resolve()}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class yE{constructor(){this.overlays=new zy(Ty.comparator),this.hr=new Map}getOverlay(e,t){return Oy.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ab();return Oy.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Oy.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),Oy.resolve()}getOverlaysForCollection(e,t,n){const r=ab(),i=t.length+1,s=new Ty(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Oy.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new zy(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ab(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=ab(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Oy.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Wb(t,n));let i=this.hr.get(t);void 0===i&&(i=hb(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class wE{constructor(){this.Pr=new $y(bE.Ir),this.Tr=new $y(bE.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new bE(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new bE(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Ty(new ky([])),n=new bE(t,e),r=new bE(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Ty(new ky([])),n=new bE(t,e),r=new bE(t,e+1);let i=hb();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new bE(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class bE{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Ty.comparator(e.key,t.key)||yy(e.pr,t.pr)}static Er(e,t){return yy(e.pr,t.pr)||Ty.comparator(e.key,t.key)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class EE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new $y(bE.Ir)}checkEmpty(e){return Oy.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $b(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.wr=this.wr.add(new bE(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Oy.resolve(s)}lookupMutationBatch(e,t){return Oy.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return Oy.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Oy.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return Oy.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new bE(t,0),r=new bE(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),Oy.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $y(yy);return t.forEach((e=>{const t=new bE(e,0),r=new bE(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),Oy.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ty.isDocumentKey(i)||(i=i.child(""));const s=new bE(new Ty(i),0);let a=new $y(yy);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)}),s),Oy.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ry(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Oy.forEach(t.mutations,(r=>{const i=new bE(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new bE(t,0),r=this.wr.firstAfterOrEqual(n);return Oy.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Oy.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class SE{constructor(e){this.vr=e,this.docs=new zy(Ty.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Oy.resolve(n?n.document.mutableCopy():yw.newInvalidDocument(t))}getEntries(e,t){let n=nb();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():yw.newInvalidDocument(e))})),Oy.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nb();const s=t.path,a=new Ty(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ay(Cy(a),n)<=0||(r.has(a.key)||Jw(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Oy.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ny()}Fr(e,t){return Oy.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new kE(this)}getSize(e){return Oy.resolve(this.size)}}class kE extends pE{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),Oy.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class _E{constructor(e){this.persistence=e,this.Mr=new eb((e=>Bw(e)),qw),this.lastRemoteSnapshotVersion=Ey.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wE,this.targetCount=0,this.Lr=fE.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),Oy.resolve()}getLastRemoteSnapshotVersion(e){return Oy.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Oy.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),Oy.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),Oy.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new fE(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,Oy.resolve()}updateTargetData(e,t){return this.qn(t),Oy.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,Oy.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Oy.waitFor(i).next((()=>r))}getTargetCount(e){return Oy.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return Oy.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),Oy.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Oy.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),Oy.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return Oy.resolve(n)}containsKey(e,t){return Oy.resolve(this.Nr.containsKey(t))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class IE{constructor(e,t){this.Br={},this.overlays={},this.kr=new Ly(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new _E(this),this.indexManager=new hE,this.remoteDocumentCache=function(e){return new SE(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new uE(t),this.$r=new vE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new EE(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){Jv("MemoryPersistence","Starting transaction:",e);const r=new TE(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return Oy.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class TE extends Py{constructor(e){super(),this.currentSequenceNumber=e}}class CE{constructor(e){this.persistence=e,this.zr=new wE,this.jr=null}static Hr(e){return new CE(e)}get Jr(){if(this.jr)return this.jr;throw ny()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),Oy.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),Oy.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),Oy.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Oy.forEach(this.Jr,(n=>{const r=Ty.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,Ey.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return Oy.or([()=>Oy.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class xE{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=hb(),r=hb();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xE(e,t.fromCache,n,r)}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class AE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class NE{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=bh()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(yh())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new AE;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(Xv()<=zh.DEBUG&&Jv("QueryEngine","SDK will not create cache indexes for query:",Xw(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Oy.resolve()):(Xv()<=zh.DEBUG&&Jv("QueryEngine","Query:",Xw(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Xv()<=zh.DEBUG&&Jv("QueryEngine","The SDK decides to create cache indexes for query:",Xw(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kw(t))):Oy.resolve())}ji(e,t){if(Hw(t))return Oy.resolve(null);let n=Kw(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Gw(t,null,"F"),n=Kw(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=hb(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,Gw(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,r){return Hw(t)||r.isEqual(Ey.min())?Oy.resolve(null):this.zi.getDocuments(e,n).next((i=>{const s=this.Zi(t,i);return this.Xi(t,s,n,r)?Oy.resolve(null):(Xv()<=zh.DEBUG&&Jv("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xw(t)),this.es(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ey.fromTimestamp(1e9===r?new by(n+1,0):new by(n,r));return new xy(i,Ty.empty(),t)}(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new $y(function(e){return(t,n)=>{let r=!1;for(const i of Ww(e)){const e=Zw(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}(e));return t.forEach(((t,r)=>{Jw(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return Xv()<=zh.DEBUG&&Jv("QueryEngine","Using full collection scan to execute query:",Xw(t)),this.zi.getDocumentsMatchingQuery(e,t,xy.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class PE{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new zy(yy),this.rs=new eb((e=>Bw(e)),qw),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gE(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}async function RE(e,t){const n=iy(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=hb();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function OE(e,t){const n=iy(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}class DE{constructor(){this.activeTargetIds=db}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LE{constructor(){this.no=new DE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new DE,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ME{io(e){}shutdown(){}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class UE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Jv("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Jv("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */let FE=null;function jE(){return null===FE?FE=268435456+Math.round(2147483648*Math.random()):FE++,"0x"+FE.toString(16)
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}const VE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class zE{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const BE="WebChannelConnection";class qE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=t+"://"+e.host,this.So=`projects/${n}/databases/${r}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Do(){return!1}Co(e,t,n,r,i){const s=jE(),a=this.vo(e,t.toUriEncodedString());Jv("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(o,r,i),this.Mo(e,a,o,n).then((t=>(Jv("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ey("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}xo(e,t,n,r,i,s){return this.Co(e,t,n,r,i)}Fo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qv,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}vo(e,t){const n=VE[e];return`${this.wo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,r){const i=jE();return new Promise(((s,a)=>{const o=new Uv;o.setWithCredentials(!0),o.listenOnce(Vv.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case zv.NO_ERROR:const t=o.getResponseJson();Jv(BE,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case zv.TIMEOUT:Jv(BE,`RPC '${e}' ${i} timed out`),a(new ay(sy.DEADLINE_EXCEEDED,"Request time out"));break;case zv.HTTP_ERROR:const n=o.getStatus();if(Jv(BE,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(sy).indexOf(t)>=0?t:sy.UNKNOWN}(t.status);a(new ay(e,t.message))}else a(new ay(sy.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ay(sy.UNAVAILABLE,"Connection failed."));break;default:ny()}}finally{Jv(BE,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Jv(BE,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)}))}Oo(e,t,n){const r=jE(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Hv(),a=$v(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.xmlHttpFactory=new Fv({})),this.Fo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");Jv(BE,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);let h=!1,d=!1;const f=new zE({lo:t=>{d?Jv(BE,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Jv(BE,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),Jv(BE,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ho:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(c,jv.EventType.OPEN,(()=>{d||(Jv(BE,`RPC '${e}' stream ${r} transport opened.`),f.mo())})),p(c,jv.EventType.CLOSE,(()=>{d||(d=!0,Jv(BE,`RPC '${e}' stream ${r} transport closed`),f.po())})),p(c,jv.EventType.ERROR,(t=>{d||(d=!0,ey(BE,`RPC '${e}' stream ${r} transport errored:`,t),f.po(new ay(sy.UNAVAILABLE,"The operation could not be completed")))})),p(c,jv.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ry(!!i);const s=i,a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){Jv(BE,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Kb[e];if(void 0!==t)return function(e){if(void 0===e)return Zv("GRPC error has no .code"),sy.UNKNOWN;switch(e){case Kb.OK:return sy.OK;case Kb.CANCELLED:return sy.CANCELLED;case Kb.UNKNOWN:return sy.UNKNOWN;case Kb.DEADLINE_EXCEEDED:return sy.DEADLINE_EXCEEDED;case Kb.RESOURCE_EXHAUSTED:return sy.RESOURCE_EXHAUSTED;case Kb.INTERNAL:return sy.INTERNAL;case Kb.UNAVAILABLE:return sy.UNAVAILABLE;case Kb.UNAUTHENTICATED:return sy.UNAUTHENTICATED;case Kb.INVALID_ARGUMENT:return sy.INVALID_ARGUMENT;case Kb.NOT_FOUND:return sy.NOT_FOUND;case Kb.ALREADY_EXISTS:return sy.ALREADY_EXISTS;case Kb.PERMISSION_DENIED:return sy.PERMISSION_DENIED;case Kb.FAILED_PRECONDITION:return sy.FAILED_PRECONDITION;case Kb.ABORTED:return sy.ABORTED;case Kb.OUT_OF_RANGE:return sy.OUT_OF_RANGE;case Kb.UNIMPLEMENTED:return sy.UNIMPLEMENTED;case Kb.DATA_LOSS:return sy.DATA_LOSS;default:return ny()}}(t)}(t),i=a.message;void 0===n&&(n=sy.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,f.po(new ay(n,i)),c.close()}else Jv(BE,`RPC '${e}' stream ${r} received:`,i),f.yo(i)}})),p(a,qv.STAT_EVENT,(t=>{t.stat===Bv.PROXY?Jv(BE,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Bv.NOPROXY&&Jv(BE,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}function $E(){return"undefined"!=typeof document?document:null}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function HE(e){return new Qb(e,!0)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class WE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=r,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,t-n);r>0&&Jv("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Qo=Date.now(),e()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class KE{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.Go=n,this.zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new WE(e,t)}Zo(){return 1===this.state||5===this.state||this.Xo()}Xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,(()=>this.r_())))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==e?this.Yo.reset():t&&t.code===sy.RESOURCE_EXHAUSTED?(Zv(t.toString()),Zv("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===sy.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.jo===t&&this.u_(e,n)}),(t=>{e((()=>{const e=new ay(sy.UNKNOWN,"Fetching auth token failed: "+t.message);return this.c_(e)}))}))}u_(e,t){const n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po((()=>{n((()=>this.listener.Po()))})),this.stream.To((()=>{n((()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,(()=>(this.Xo()&&(this.state=3),Promise.resolve()))),this.listener.To())))})),this.stream.Ao((e=>{n((()=>this.c_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}e_(){this.state=5,this.Yo.$o((async()=>{this.state=0,this.start()}))}c_(e){return Jv("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget((()=>this.jo===e?t():(Jv("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class GE extends KE{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ry(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=function(e,t){return e&&e.length>0?(ry(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Zb(e.updateTime):Zb(t);return n.isEqual(Ey.min())&&(n=Zb(t)),new xb(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Zb(e.commitTime);return this.listener.A_(n,t)}return ry(!e.writeResults||0===e.writeResults.length),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=function(e){return new ky(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Ub)n={update:iE(e,t.key,t.value)};else if(t instanceof Bb)n={delete:nE(e,t.key)};else if(t instanceof Fb)n={update:iE(e,t.key,t.data),updateMask:lE(t.fieldMask)};else{if(!(t instanceof qb))return ny();n={verify:nE(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bb)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Eb)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kb)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ib)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ny()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Jb(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ny()}(e,t.precondition)),n}(this.serializer,e)))};this.i_(t)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class QE extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new ay(sy.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(e,tE(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===sy.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ay(sy.UNKNOWN,e.toString())}))}xo(e,t,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.xo(e,tE(t,n),r,s,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===sy.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ay(sy.UNKNOWN,e.toString())}))}terminate(){this.m_=!0,this.connection.terminate()}}class YE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Zv(t),this.y_=!1):Jv("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class XE{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io((e=>{n.enqueueAndForget((async()=>{eS(this)&&(Jv("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=iy(e);t.M_.add(4),await ZE(t),t.N_.set("Unknown"),t.M_.delete(4),await JE(t)}(this))}))})),this.N_=new YE(n,r)}}async function JE(e){if(eS(e))for(const t of e.x_)await t(!0)}async function ZE(e){for(const t of e.x_)await t(!1)}function eS(e){return 0===iy(e).M_.size}async function tS(e,t,n){if(!Dy(t))throw t;e.M_.add(1),await ZE(e),e.N_.set("Offline"),n||(n=()=>function(e){const t=iy(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Jv("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await JE(e)}))}function nS(e,t){return t().catch((n=>tS(e,n,t)))}async function rS(e){const t=iy(e),n=fS(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;iS(t);)try{const e=await OE(t.localStore,r);if(null===e){0===t.v_.length&&n.n_();break}r=e.batchId,sS(t,e)}catch(e){await tS(t,e)}aS(t)&&oS(t)}function iS(e){return eS(e)&&e.v_.length<10}function sS(e,t){e.v_.push(t);const n=fS(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function aS(e){return eS(e)&&!fS(e).Zo()&&e.v_.length>0}function oS(e){fS(e).start()}async function lS(e){fS(e).V_()}async function uS(e){const t=fS(e);for(const n of e.v_)t.d_(n.mutations)}async function cS(e,t,n){const r=e.v_.shift(),i=Hb.from(r,t,n);await nS(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await rS(e)}async function hS(e,t){t&&fS(e).E_&&await async function(e,t){if(function(e){return function(e){switch(e){default:return ny();case sy.CANCELLED:case sy.UNKNOWN:case sy.DEADLINE_EXCEEDED:case sy.RESOURCE_EXHAUSTED:case sy.INTERNAL:case sy.UNAVAILABLE:case sy.UNAUTHENTICATED:return!1;case sy.INVALID_ARGUMENT:case sy.NOT_FOUND:case sy.ALREADY_EXISTS:case sy.PERMISSION_DENIED:case sy.FAILED_PRECONDITION:case sy.ABORTED:case sy.OUT_OF_RANGE:case sy.UNIMPLEMENTED:case sy.DATA_LOSS:return!0}}(e)&&e!==sy.ABORTED}(t.code)){const n=e.v_.shift();fS(e).t_(),await nS(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await rS(e)}}(e,t),aS(e)&&oS(e)}async function dS(e,t){const n=iy(e);n.asyncQueue.verifyOperationInProgress(),Jv("RemoteStore","RemoteStore received new credentials");const r=eS(n);n.M_.add(3),await ZE(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await JE(n)}function fS(e){return e.k_||(e.k_=function(e,t,n){const r=iy(e);return r.f_(),new GE(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:lS.bind(null,e),Ao:hS.bind(null,e),R_:uS.bind(null,e),A_:cS.bind(null,e)}),e.x_.push((async t=>{t?(e.k_.t_(),await rS(e)):(await e.k_.stop(),e.v_.length>0&&(Jv("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))}))),e.k_
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}class pS{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new oy,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new pS(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ay(sy.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mS(e,t){if(Zv("AsyncQueue",`${t}: ${e}`),Dy(e))return new ay(sy.UNAVAILABLE,`${t}: ${e}`);throw e}class gS{constructor(){this.queries=new eb((e=>Yw(e)),Qw),this.onlineState="Unknown",this.z_=new Set}}var vS,yS;(yS=vS||(vS={})).J_="default",yS.Cache="cache";class wS{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new eb((e=>Yw(e)),Qw),this.Da=new Map,this.Ca=new Set,this.va=new zy(Ty.comparator),this.Fa=new Map,this.Ma=new wE,this.xa={},this.Oa=new Map,this.Na=fE.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function bS(e,t,n){const r=function(e){const t=iy(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=SS.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kS.bind(null,t),t}(e);try{const e=await function(e,t){const n=iy(e),r=by.now(),i=t.reduce(((e,t)=>e.add(t.key)),hb());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=nb(),l=hb();return n.os.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{s=i;const a=[];for(const e of t){const t=Lb(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Fb(e.key,t,vw(t.value.mapValue),Ab.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:sb(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xa[e.currentUser.toKey()];r||(r=new zy(yy)),r=r.insert(t,n),e.xa[e.currentUser.toKey()]=r}(r,e.batchId,n),await TS(r,e.changes),await rS(r.remoteStore)}catch(e){const t=mS(e,"Failed to persist write");n.reject(t)}}function ES(e,t,n){const r=iy(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ba.forEach(((n,r)=>{const i=r.view.j_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=iy(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.U_)i.j_(t)&&(r=!0)})),r&&function(e){e.z_.forEach((e=>{e.next()}))}(n)}(r.eventManager,t),e.length&&r.Sa.h_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function SS(e,t){const n=iy(e),r=t.batch.batchId;try{const e=await function(e,t){const n=iy(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Oy.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ry(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=hb();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);IS(n,r,null),_S(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await TS(n,e)}catch(e){await Ry(e)}}async function kS(e,t,n){const r=iy(e);try{const e=await function(e,t){const n=iy(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ry(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);IS(r,t,n),_S(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await TS(r,e)}catch(n){await Ry(n)}}function _S(e,t){(e.Oa.get(t)||[]).forEach((e=>{e.resolve()})),e.Oa.delete(t)}function IS(e,t,n){const r=iy(e);let i=r.xa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}async function TS(e,t,n){const r=iy(e),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach(((e,o)=>{a.push(r.Ba(o,t,n).then((e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:void 0;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){i.push(e);const t=xE.Ki(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.Sa.h_(i),await async function(e,t){const n=iy(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Oy.forEach(t,(t=>Oy.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Oy.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Dy(e))throw e;Jv("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ns.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(e,i)}}}(r.localStore,s))}async function CS(e,t){const n=iy(e);if(!n.currentUser.isEqual(t)){Jv("SyncEngine","User change. New user:",t.toKey());const e=await RE(n.localStore,t);n.currentUser=t,function(e,t){e.Oa.forEach((e=>{e.forEach((e=>{e.reject(new ay(sy.CANCELLED,t))}))})),e.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await TS(n,e.us)}}class xS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=HE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,r){return new PE(e,t,n,r)}(this.persistence,new NE,e.initialUser,this.serializer)}createPersistence(e){return new IE(CE.Hr,this.serializer)}createSharedClientState(e){return new LE}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ES(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=CS.bind(null,this.syncEngine),await async function(e,t){const n=iy(e);t?(n.M_.delete(2),await JE(n)):t||(n.M_.add(2),await ZE(n),n.N_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gS}createDatastore(e){const t=HE(e.databaseInfo.databaseId),n=function(e){return new qE(e)}(e.databaseInfo);return function(e,t,n,r){return new QE(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new XE(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>ES(this.syncEngine,e,0)),UE.D()?new UE:new ME)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new wS(e,t,n,r,i,s);return a&&(o.La=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=iy(e);Jv("RemoteStore","RemoteStore shutting down."),t.M_.add(5),await ZE(t),t.O_.shutdown(),t.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class NS{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Gv.UNAUTHENTICATED,this.clientId=vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Jv("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Jv("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ay(sy.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oy;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(d){const n=mS(d,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function PS(e,t){e.asyncQueue.verifyOperationInProgress(),Jv("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await RE(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function RS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Jv("FirestoreClient","Using user provided OfflineComponentProvider");try{await PS(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!function(e){return"FirebaseError"===e.name?e.code===sy.FAILED_PRECONDITION||e.code===sy.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(r))throw r;ey("Error using user provided cache. Falling back to memory cache: "+r),await PS(e,new xS)}}else Jv("FirestoreClient","Using default OfflineComponentProvider"),await PS(e,new xS);return e._offlineComponents}(e);Jv("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>dS(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>dS(t.remoteStore,n))),e._onlineComponents=t}function OS(e){return async function(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Jv("FirestoreClient","Using user provided OnlineComponentProvider"),await RS(e,e._uninitializedComponentsProvider._online)):(Jv("FirestoreClient","Using default OnlineComponentProvider"),await RS(e,new AS))),e._onlineComponents}(e).then((e=>e.syncEngine))}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function DS(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}const LS=new Map;
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function MS(e){if(!Ty.isDocumentKey(e))throw new ay(sy.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function US(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ny()}function FS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ay(sy.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=US(e);throw new ay(sy.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class jS{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ay(sy.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ay(sy.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ay(sy.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DS(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ay(sy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ay(sy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ay(sy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class VS{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ay(sy.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ay(sy.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jS(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new uy;switch(e.type){case"firstParty":return new fy(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ay(sy.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=LS.get(e);t&&(Jv("ComponentProvider","Removing Datastore"),LS.delete(e),t.terminate())}(this),Promise.resolve()}}function zS(e,t,n,r={}){var i;const s=(e=FS(e,VS))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&ey("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Gv.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ch(JSON.stringify({alg:"none",type:"JWT"})),ch(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ay(sy.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gv(s)}e._authCredentials=new cy(new ly(t,n))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class BS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new BS(this.firestore,e,this._query)}}class qS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $S(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qS(this.firestore,e,this._key)}}class $S extends BS{constructor(e,t,n){super(e,t,function(e){return new $w(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qS(this.firestore,null,new Ty(e))}withConverter(e){return new $S(this.firestore,e,this._path)}}function HS(e,t,...n){if(e=Mh(e),1===arguments.length&&(t=vy.newId()),function(e,t,n){if(!n)throw new ay(sy.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof VS){const r=ky.fromString(t,...n);return MS(r),new qS(e,null,new Ty(r))}{if(!(e instanceof qS||e instanceof $S))throw new ay(sy.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ky.fromString(t,...n));return MS(r),new qS(e.firestore,e instanceof $S?e.converter:null,new Ty(r))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class WS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new WE(this,"async_queue_retry"),this.hu=()=>{const e=$E();e&&Jv("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const e=$E();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=$E();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new oy;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Dy(e))throw e;Jv("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((e=>{this.au=e,this.uu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e);throw Zv("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.uu=!1,e))))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const r=pS.createAndSchedule(this,e,t,n,(e=>this.Eu(e)));return this._u.push(r),r}Pu(){this.au&&ny()}verifyOperationInProgress(){}async du(){let e;do{e=this.iu,await e}while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._u)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class KS extends VS{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new WS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GS(this),this._firestoreClient.terminate()}}function GS(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new nw(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,DS(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new NS(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class QS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new QS(Gy.fromBase64String(e))}catch(e){throw new ay(sy.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new QS(Gy.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class YS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ay(sy.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Iy(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class XS{constructor(e){this._methodName=e}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class JS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ay(sy.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ay(sy.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yy(this._lat,e._lat)||yy(this._long,e._long)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const ZS=/^__.*__$/;class ek{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Fb(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ub(e,this.data,t,this.fieldTransforms)}}function tk(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ny()}}class nk{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new nk(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return dk(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(tk(this.fu)&&ZS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class rk{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||HE(e)}Fu(e,t,n,r=!1){return new nk({fu:e,methodName:t,vu:n,path:Iy.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ik(e){const t=e._freezeSettings(),n=HE(e._databaseId);return new rk(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sk(e,t,n,r,i,s={}){const a=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);uk("Data must be an object, but it was:",a,r);const o=ok(r,a);let l,u;if(s.merge)l=new Wy(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ck(t,r,n);if(!a.contains(i))throw new ay(sy.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);fk(e,i)||e.push(i)}l=new Wy(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new ek(new gw(o),l,u)}function ak(e,t){if(lk(e=Mh(e)))return uk("Unsupported field value:",t,e),ok(e,t);if(e instanceof XS)return function(e,t){if(!tk(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ak(i,t.bu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Mh(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mb(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=by.fromDate(e);return{timestampValue:Yb(t.serializer,n)}}if(e instanceof by){const n=new by(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Yb(t.serializer,n)}}if(e instanceof JS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof QS)return{bytesValue:Xb(t.serializer,e._byteString)};if(e instanceof qS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Du(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:eE(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${US(e)}`)}(e,t)}function ok(e,t){const n={};return Vy(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jy(e,((e,r)=>{const i=ak(r,t.pu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function lk(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof by||e instanceof JS||e instanceof QS||e instanceof qS||e instanceof XS)}function uk(e,t,n){if(!lk(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=US(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function ck(e,t,n){if((t=Mh(t))instanceof YS)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(hk)>=0)throw dk(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new YS(...t.split("."))._internalPath}catch(h){throw dk(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw dk("Field path arguments must be of type string or ",e,!1,void 0,n)}const hk=new RegExp("[~\\*/\\[\\]]");function dk(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new ay(sy.INVALID_ARGUMENT,o+e+l)}function fk(e,t){return e.some((e=>e.isEqual(t)))}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function pk(e,t,n){e=FS(e,qS);const r=FS(e.firestore,KS),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return function(e,t){return function(e,t){const n=new oy;return e.asyncQueue.enqueueAndForget((async()=>bS(await OS(e),t,n))),n.promise}(function(e){return e._firestoreClient||GS(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(r,[sk(ik(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ab.none())])}!function(e,t=!0){!function(e){Qv=e}(Jd),Kd(new Uh("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new KS(new hy(e.getProvider("auth-internal")),new my(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ay(sy.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rw(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),tf(Kv,"4.6.4",e),tf(Kv,"4.6.4","esm2017")}();const mk=Zd({apiKey:"AIzaSyAAx9xed3OJ12gkLhqDgkAw2f0TKzutIW4",authDomain:"chess-8426e.firebaseapp.com",projectId:"chess-8426e",storageBucket:"chess-8426e.appspot.com",messagingSenderId:"607251598004",appId:"1:607251598004:web:dd52ca4b826bbbcbbbe5e1",measurementId:{VITE_BASE_PATH:"/Chess/",VITE_ASSET_PATH:"/Chess/",VITE_FIREBASE_API_KEY:"AIzaSyAAx9xed3OJ12gkLhqDgkAw2f0TKzutIW4",VITE_FIREBASE_AUTH_DOMAIN:"chess-8426e.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"chess-8426e",VITE_FIREBASE_STORAGE_BUCKET:"chess-8426e.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"607251598004",VITE_FIREBASE_APP_ID:"1:607251598004:web:dd52ca4b826bbbcbbbe5e1",VITE_MEASUREMENT_ID:"G-CR431E5BGW",BASE_URL:"/Chess/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!0}.VITE_FIREBASE_MEASUREMENT_ID});!function(e=ef()){const t=Gd(e=Mh(e),rv);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Gd(e,rv);if(n.isInitialized()){const e=n.getImmediate();if(Th(t,n.getOptions()))return e;throw fv.create("already-initialized")}n.initialize({options:t})}(e)}(mk);const gk=function(e=ef()){const t=Gd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e,t){const n=Gd(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Th(n.getOptions(),null!=t?t:{}))return e;Ef(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qm,persistence:[lm,Hp,Kp]}),r=gh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Zm)return;const r=null==t?void 0:t.token;eg!==r&&(eg=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Mh(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){Mh(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=ph("auth");return s&&Tp(n,`http://${s}`),n}(mk),vk=function(e){const t="string"==typeof e?e:"(default)",n=Gd("object"==typeof e?e:ef(),"firestore").getImmediate({identifier:t});if(!n._initialized){const e=(e=>{const t=ph(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&zS(n,...e)}return n}(mk);
/**
       * @remix-run/router v1.18.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function yk(){return yk=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yk.apply(this,arguments)}var wk;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(wk||(wk={}));const bk="popstate";function Ek(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=wk.Pop,l=null,u=c();function c(){return(a.state||{idx:null}).idx}function h(){o=wk.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=wk.Push;let n=Ik(m.location,e,t);u=c()+1;let r=_k(n,u),h=m.createHref(n);try{a.pushState(r,"",h)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;i.location.assign(h)}s&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=wk.Replace;let n=Ik(m.location,e,t);u=c();let r=_k(n,u),i=m.createHref(n);a.replaceState(r,"",i),s&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:Tk(e);return n=n.replace(/ $/,"%20"),Sk(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,a.replaceState(yk({},a.state,{idx:u}),""));let m={get action(){return o},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bk,h),l=e,()=>{i.removeEventListener(bk,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>a.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Ik("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:Tk(t)}),0,e)}function Sk(e,t){if(!1===e||null==e)throw new Error(t)}function kk(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function _k(e,t){return{usr:e.state,key:e.key,idx:t}}function Ik(e,t,n,r){return void 0===n&&(n=null),yk({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?Ck(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Tk(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ck(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var xk;function Ak(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?Ck(t):t,s=qk(i.pathname||"/",n);if(null==s)return null;let a=Nk(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=Bk(s);o=Vk(a[l],e,r)}return o}(e,t,n,!1)}function Nk(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let a={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(Sk(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let o=Wk([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(Sk(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),Nk(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:jk(o,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of Pk(e.path))i(e,t,r);else i(e,t)})),t}function Pk(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let a=Pk(r.join("/")),o=[];return o.push(...a.map((e=>""===e?s:[s,e].join("/")))),i&&o.push(...a),o.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(xk||(xk={}));const Rk=/^:[\w-]+$/,Ok=3,Dk=2,Lk=1,Mk=10,Uk=-2,Fk=e=>"*"===e;function jk(e,t){let n=e.split("/"),r=n.length;return n.some(Fk)&&(r+=Uk),t&&(r+=Dk),n.filter((e=>!Fk(e))).reduce(((e,t)=>e+(Rk.test(t)?Ok:""===t?Lk:Mk)),r)}function Vk(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],l=o===r.length-1,u="/"===s?t:t.slice(s.length)||"/",c=zk({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),h=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=zk({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:Wk([s,c.pathname]),pathnameBase:Kk(Wk([s,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(s=Wk([s,c.pathnameBase]))}return a}function zk(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),kk("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";a=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:s,pathnameBase:a,pattern:e}}function Bk(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return kk(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function qk(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function $k(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Hk(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=Ck(e):(i=yk({},e),Sk(!i.pathname||!i.pathname.includes("?"),$k("?","pathname","search",i)),Sk(!i.pathname||!i.pathname.includes("#"),$k("#","pathname","hash",i)),Sk(!i.search||!i.search.includes("#"),$k("#","search","hash",i)));let s,a=""===e||""===i.pathname,o=a?"/":i.pathname;if(null==o)s=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?Ck(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:Gk(r),hash:Qk(i)}}(i,s),u=o&&"/"!==o&&o.endsWith("/"),c=(a||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Wk=e=>e.join("/").replace(/\/\/+/g,"/"),Kk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gk=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Qk=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",Yk=["post","put","patch","delete"];new Set(Yk);const Xk=["get",...Yk];
/**
       * React Router v6.25.1
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function Jk(){return Jk=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jk.apply(this,arguments)}new Set(Xk);const Zk=z.createContext(null),e_=z.createContext(null),t_=z.createContext(null),n_=z.createContext(null),r_=z.createContext({outlet:null,matches:[],isDataRoute:!1}),i_=z.createContext(null);function s_(){return null!=z.useContext(n_)}function a_(){return s_()||Sk(!1),z.useContext(n_).location}function o_(e){z.useContext(t_).static||z.useLayoutEffect(e)}function l_(){let{isDataRoute:e}=z.useContext(r_);return e?function(){let{router:e}=function(){let e=z.useContext(Zk);return e||Sk(!1),e}(m_.UseNavigateStable),t=v_(g_.UseNavigateStable),n=z.useRef(!1);o_((()=>{n.current=!0}));let r=z.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Jk({fromRouteId:t},i)))}),[e,t]);return r}():function(){s_()||Sk(!1);let e=z.useContext(Zk),{basename:t,future:n,navigator:r}=z.useContext(t_),{matches:i}=z.useContext(r_),{pathname:s}=a_(),a=JSON.stringify(function(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}(i,n.v7_relativeSplatPath)),o=z.useRef(!1);return o_((()=>{o.current=!0})),z.useCallback((function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=Hk(n,JSON.parse(a),s,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Wk([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,a,s,e])}()}const u_=z.createContext(null);function c_(e,t){return function(e,t,n,r){s_()||Sk(!1);let{navigator:i}=z.useContext(t_),{matches:s}=z.useContext(r_),a=s[s.length-1],o=a?a.params:{};!a||a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u,c=a_();if(t){var h;let e="string"==typeof t?Ck(t):t;"/"===l||(null==(h=e.pathname)?void 0:h.startsWith(l))||Sk(!1),u=e}else u=c;let d=u.pathname||"/",f=d;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=Ak(e,{pathname:f}),m=function(e,t,n,r){var i,s;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){if(null==(s=n)||!s.errors)return null;e=n.matches}let a=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id])));e>=0||Sk(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let e=a[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,a=u>=0?a.slice(0,u+1):[a[0]];break}}}return a.reduceRight(((e,r,i)=>{let s,c=!1,h=null,d=null;n&&(s=o&&r.route.id?o[r.route.id]:void 0,h=r.route.errorElement||d_,l&&(u<0&&0===i?(c=!0,d=null):u===i&&(c=!0,d=r.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,i+1)),p=()=>{let t;return t=s?h:c?d:r.route.Component?z.createElement(r.route.Component,null):r.route.element?r.route.element:e,z.createElement(p_,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?z.createElement(f_,{location:n.location,revalidation:n.revalidation,component:h,error:s,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Wk([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Wk([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,r);return t&&m?z.createElement(n_.Provider,{value:{location:Jk({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wk.Pop}},m):m}(e,t)}function h_(){let e=function(){var e;let t=z.useContext(i_),n=function(){let e=z.useContext(e_);return e||Sk(!1),e}(g_.UseRouteError),r=v_(g_.UseRouteError);return void 0!==t?t:null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:r},n):null,null)}const d_=z.createElement(h_,null);class f_ extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?z.createElement(r_.Provider,{value:this.props.routeContext},z.createElement(i_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p_(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Zk);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(r_.Provider,{value:t},r)}var m_=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(m_||{}),g_=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(g_||{});function v_(e){let t=function(){let e=z.useContext(r_);return e||Sk(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||Sk(!1),n.route.id}function y_(e){return function(e){let t=z.useContext(r_).outlet;return t?z.createElement(u_.Provider,{value:e},t):t}(e.context)}function w_(e){Sk(!1)}function b_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wk.Pop,navigator:s,static:a=!1,future:o}=e;s_()&&Sk(!1);let l=t.replace(/^\/*/,"/"),u=z.useMemo((()=>({basename:l,navigator:s,static:a,future:Jk({v7_relativeSplatPath:!1},o)})),[l,o,s,a]);"string"==typeof r&&(r=Ck(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,m=z.useMemo((()=>{let e=qk(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}}),[l,c,h,d,f,p,i]);return null==m?null:z.createElement(t_.Provider,{value:u},z.createElement(n_.Provider,{children:n,value:m}))}function E_(e){let{children:t,location:n}=e;return c_(S_(t),n)}function S_(e,t){void 0===t&&(t=[]);let n=[];return z.Children.forEach(e,((e,r)=>{if(!z.isValidElement(e))return;let i=[...t,r];if(e.type===z.Fragment)return void n.push.apply(n,S_(e.props.children,i));e.type!==w_&&Sk(!1),e.props.index&&e.props.children&&Sk(!1);let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=S_(e.props.children,i)),n.push(s)})),n}
/**
       * React Router DOM v6.25.1
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */new Promise((()=>{}));try{window.__reactRouterVersion="6"}catch(eI){}const k_=q.startTransition;function __(e){let{basename:t,children:n,future:r,window:i}=e,s=z.useRef();null==s.current&&(s.current=Ek({window:i,v5Compat:!0}));let a=s.current,[o,l]=z.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=z.useCallback((e=>{u&&k_?k_((()=>l(e))):l(e)}),[l,u]);return z.useLayoutEffect((()=>a.listen(c)),[a,c]),z.createElement(b_,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}var I_,T_,C_,x_;function A_({board:e,selectedPiece:t,setSelectedPiece:n,turn:r}){return e.map(((e,i)=>{const s=i+1,a=e.split("");let o="w"===a[0];if(e&&"h"!==e&&a.length>0&&a.length<3)return X.jsx("div",{onClick:()=>{r===o&&n({piece:e,position:s})},className:`${e} square-${s} piece ${t.piece===e&&t.position===s?"selected-piece":""}`},s);if("h"===e)return X.jsx("div",{onClick:()=>{r===o&&n({piece:e,position:s})},className:`square-${s} possible-move`},s);if("c"===a[2]){let e=`${a[0]}${a[1]}`;return X.jsx("div",{className:`${e} square-${s} piece capturable ${t.piece===e&&t.position===s?"selected-piece":""}`},s)}return null}))}(T_=I_||(I_={})).UseScrollRestoration="useScrollRestoration",T_.UseSubmit="useSubmit",T_.UseSubmitFetcher="useSubmitFetcher",T_.UseFetcher="useFetcher",T_.useViewTransitionState="useViewTransitionState",(x_=C_||(C_={})).UseFetcher="useFetcher",x_.UseFetchers="useFetchers",x_.UseScrollRestoration="useScrollRestoration";const N_=["br","bn","bb","bq","bk","bb","bn","br","bp","bp","bp","bp","bp","bp","bp","bp","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wp","wp","wp","wp","wp","wp","wp","wp","wr","wn","wb","wq","wk","wb","wn","wr"],P_="/Chess/",R_=new Audio(P_+"assets/audio/capture.mp3");new Audio(P_+"assets/audio/castle.mp3");const O_=new Audio(P_+"assets/audio/check.mp3"),D_=new Audio(P_+"assets/audio/checkmate.mp3");new Audio(P_+"assets/audio/gameOver.mp3");const L_=new Audio(P_+"assets/audio/gameStart.mp3"),M_=new Audio(P_+"assets/audio/move.mp3"),U_=new Audio(P_+"assets/audio/stalemate.mp3");function F_({customMoveHistory:e,muted:t}){const n={piece:"",position:""},[r,i]=z.useState(n),[s,a]=z.useState(N_),[o,l]=z.useState(!0),[u,c]=z.useState([]),[h,d]=z.useState(!1),[f,p]=z.useState([]);z.useEffect((()=>{if(Array.isArray(e)){const t=Array.from(e);c(t)}}),[e]);const m=e=>{const t=parseInt(e.split("-")[1])-1;c((e=>[...e,{piece:r.piece,from:r.position-1,to:t,captured:""!==s[t]&&"h"!==s[t]?s[t].split("")[0]+s[t].split("")[1]:""}])),i(n)},g=e=>{t||e.play()};z.useEffect((()=>{g(L_)}),[]);const v=(e,t,n,r)=>{const i=r+1;let s=[],a=[],o=[],l=[];if("w"===t){if("p"===n){r>=48&&r<=55?(o=[r-8,r-16],l=[r-7,r-9]):(o=[r-8],l=[r-7,r-9]),r%8==0&&(l=l.filter((e=>e!==r-9))),r%8==1&&(l=l.filter((e=>e!==r-7)));let n=!1;o.forEach((t=>{t>=0&&""===e[t]&&!n?a.push(t):n=!0})),l.forEach((n=>{n>=0&&""!==e[n]&&e[n].charAt(0)!==t&&s.push(n)}))}}else if("p"===n){const n=i-1;n>=8&&n<=15?(o=[n+8,n+16],l=[n+7,n+9]):(o=[n+8],l=[n+7,n+9]),n%8==0&&(l=l.filter((e=>e!==n+7))),n%8==1&&(l=l.filter((e=>e!==n+9)));let r=!1;o.forEach((t=>{t>=0&&""===e[t]&&!r?a.push(t):r=!0})),l.forEach((n=>{n>=0&&""!==e[n]&&e[n].charAt(0)!==t&&s.push(n)}))}if("r"===n||"q"===n){let n=r,i=!1;for(let r=n+8;r<64&&!i;r+=8)""!=e[r]?(i=!0,e[r].charAt(0)!==t&&s.push(r)):s.push(r);let a=!1;for(let r=n-8;r>=0&&!a;r-=8)""!=e[r]?(a=!0,e[r].charAt(0)!==t&&s.push(r)):s.push(r);let o=!1;for(let r=n+1;r%8!=0&&!o;r+=1)""!=e[r]?(o=!0,e[r].charAt(0)!==t&&s.push(r)):s.push(r);let l=!1;for(let r=n-1;r%8!=7&&r>=0&&!l;r-=1)""!=e[r]?(l=!0,e[r].charAt(0)!==t&&s.push(r)):s.push(r)}if("b"===n||"q"===n){let n=!1;for(let l=r+9;l<64&&l%8!=0&&!n;l+=9)""!==e[l]?(n=!0,e[l].charAt(0)!==t&&s.push(l)):s.push(l);let i=!1;for(let l=r-9;l>=0&&l%8!=7&&!i;l-=9)""!==e[l]?(i=!0,e[l].charAt(0)!==t&&s.push(l)):s.push(l);let a=!1;for(let l=r+7;l<64&&l%8!=7&&!a;l+=7)""!==e[l]?(a=!0,e[l].charAt(0)!==t&&s.push(l)):s.push(l);let o=!1;for(let l=r-7;l>=0&&l%8!=0&&!o;l-=7)""!==e[l]?(o=!0,e[l].charAt(0)!==t&&s.push(l)):s.push(l)}if("k"===n){let n=[r+7,r-7,r+8,r-8,r+9,r-9,r+1,r-1];r%8==7?n=n.filter((e=>e!==r+1&&e!==r-7&&e!==r+9)):r%8==0&&(n=n.filter((e=>e!==r-1&&e!==r+7&&e!==r-9))),n.forEach((n=>{n>=0&&n<64&&(""===e[n]||e[n].charAt(0)!==t)&&s.push(n)}))}if("n"===n){const n=r-15,a=r-17,o=r+17,l=r+15,u=r-10,c=r+6,h=r-6,d=r+10,f=-1*((i%8?i%8:8)-8),p=(i%8?i%8:8)-1,m=Math.floor(i/8),g=Math.floor((64-i)/8),v=n=>{n>=0&&n<64&&(""!==e[n]&&e[n].charAt(0)===t||s.push(n))};f>0&&m>1&&v(n),f>1&&m>0&&v(h),f>1&&g>0&&v(d),g>1&&f>0&&v(o),g>1&&p>0&&v(l),p>1&&g>0&&v(c),p>1&&m>0&&v(u),m>1&&p>0&&v(a)}return[s.filter((e=>e>=0&&e<64)),a.filter((e=>e>=0&&e<64))]},y=e=>{const t=o?"b":"w",n=o?"w":"b",r=e.findIndex((e=>e?.charAt(0)===n&&"k"===e.charAt(1)));let i=!1;return e.forEach(((n,s)=>{if(""!==n&&!i&&n.charAt(0)===t){const a=n.charAt(1);let[o]=v(e,t,a,s);if(o.includes(r))return void(i=!0)}})),i},w=()=>{const e=o?"w":"b";let t=[];return s.forEach(((n,r)=>{if(""!==n&&n.charAt(0)===e){const i=n.charAt(1);let[a,o]=v(s,e,i,r);[...a,...o].forEach((e=>{if(!(e>=0&&e<64))return;let i=((e,t)=>{let n=[...s];n=n.map((e=>{if(""===e)return e;const t=e.split("");return t.includes("h")?"":t.includes("c")?`${t[0]}${t[1]}`:e}));let r=n[e];return n[e]="",n[t]=r,y(n)})(r,e);i||t.push({moveIndex:e,piece:n,index:r})}))}})),t};return z.useEffect((()=>{const e=y(s);d(e);const t=w();p(t),t.length>0||!0!==e?t.length>0||!1!==e?t.length>0&&!0===e?g(O_):t.length>0&&!1===e&&u.length>0&&(u[u.length-1].captured?g(R_):g(M_)):g(U_):g(D_)}),[o]),z.useEffect((()=>{if(r.piece&&r.position){const e=e=>{const t=Array.from(e.target.classList);e.target.classList.contains("possible-move")?m(t[0]):e.target.classList.contains("capturable")?m(t[1]):(i(n),a((e=>e.map((e=>{const t=e.split("");return t.includes("h")?"":t.includes("c")?`${t[0]}${t[1]}`:e})))))};return document.getElementById("board-grid").addEventListener("click",e),()=>{document.getElementById("board-grid").removeEventListener("click",e)}}a((e=>e.map((e=>{const t=e.split("");return t.includes("h")?"":t.includes("c")?`${t[0]}${t[1]}`:e}))))}),[r]),z.useEffect((()=>{if(r.piece&&r.position){const[e,t]=r.piece.split(""),n=r.position;let[i,l]=v(s,e,t,n-1);(e=>{let t=s;e.forEach((e=>{if(!(e>=0&&e<64))return;let n=o?"b":"w";""!==t[e]?t[e].charAt(0)===n&&(t[e]=`${t[e]}c`):t[e]="h";let r=Array.from(t);a(r)}))})([...i,...l].filter((e=>f.filter((t=>t.piece===r.piece&&t.index===n-1&&t.moveIndex===e)).length>0)))}}),[r]),z.useEffect((()=>{if(!(u.length>0))return a(["br","bn","bb","bq","bk","bb","bn","br","bp","bp","bp","bp","bp","bp","bp","bp","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wp","wp","wp","wp","wp","wp","wp","wp","wr","wn","wb","wq","wk","wb","wn","wr"]),void l(!0);const{boardToSend:e,capturedPieces:t}=(e=>{let t=["br","bn","bb","bq","bk","bb","bn","br","bp","bp","bp","bp","bp","bp","bp","bp","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wp","wp","wp","wp","wp","wp","wp","wp","wr","wn","wb","wq","wk","wb","wn","wr"],n=[];return e.length>0?(e.forEach((e=>{t[e.from]="",t[e.to]=e.piece,e.captured&&n.push(e.captured)})),{boardToSend:t,capturedPieces:n}):{boardToSend:t,capturedPieces:n}})(u),n=Array.from(e);a(n),l((e=>!e))}),[u]),X.jsxs("div",{className:"board "+(h?"check-"+(o?"w":"b")+"k":""),children:[" ",X.jsx("div",{className:"board-grid",id:"board-grid",children:X.jsx(A_,{board:s,selectedPiece:r,setSelectedPiece:i,turn:o})})]})}const j_=()=>{const e=async e=>{const t=HS(vk,"users",e.uid);await pk(t,{uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL},{merge:!0})};return X.jsx("div",{children:X.jsx("button",{onClick:async()=>{const t=new Lp;try{const n=(await gm(gk,t)).user;e(n)}catch(n){console.error("Error signing in with Google: ",n)}},children:"Sign in with Google"})})};function V_(){const[e,t]=z.useState([]),[n,r]=z.useState(0),i=[{piece:"wp",from:52,to:36,captured:""},{piece:"bp",from:12,to:28,captured:""},{piece:"wb",from:61,to:34,captured:""},{piece:"bn",from:1,to:18,captured:""},{piece:"wq",from:59,to:31,captured:""},{piece:"bn",from:6,to:21,captured:""},{piece:"wq",from:31,to:13,captured:"bp"}],s=l_();return z.useEffect((()=>{const e=setInterval((()=>{n<i.length?r((e=>e+1)):(t([]),r(0))}),1e3);return()=>clearInterval(e)}),[n]),z.useEffect((()=>{t(n<i.length?e=>[...e,i[n]]:[])}),[n]),X.jsxs("div",{className:"row homepageOuterDiv",style:{width:"100%",height:"100%"},children:[X.jsxs("div",{className:"col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center boardOuterDiv",children:[X.jsx("div",{className:"noClickOverlay",style:{position:"absolute",zIndex:"1"}}),X.jsx(F_,{customMoveHistory:e,muted:!0})]}),X.jsxs("div",{className:"col-lg-6 col-md-6 col-sm-12 homepageMenu",children:[X.jsxs("h1",{style:{color:"white"},children:["Play ",X.jsx("span",{style:{color:"#739552"},children:"Chess"})]}),X.jsxs("div",{children:[X.jsx("button",{onClick:()=>{},className:"hompageButton playOnline",children:"Play Online (Coming Soon)"}),X.jsx("button",{onClick:()=>s("/offline"),className:"hompageButton playOffline",children:"2-Player Offline"})]})]})]})}const z_=[{path:"",component:X.jsx(V_,{}),type:"Public",default:!0},{path:"offline",component:X.jsx(F_,{}),type:"Public"},{path:"login",component:X.jsx(j_,{}),type:"Public"}],B_=()=>z_.filter((e=>"Private"===e.type)),q_=()=>z_.filter((e=>"Public"==e.type)),$_=e=>Array.isArray(e)&&e.length>0?e.map(((e,t)=>e.default?X.jsx(w_,{index:!0,element:e.component},t):X.jsx(w_,{path:e.path,element:e.component},t))):X.jsx(X.Fragment,{}),H_=()=>{const[e,t]=z.useState({top:0,left:0});return z.useEffect((()=>{const e=e=>{t({top:e.pageY,left:e.pageX})};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}}),[]),X.jsxs("div",{className:"Container",children:[X.jsxs("div",{className:"text",children:[X.jsx("h1",{children:"404"}),X.jsx("h2",{children:"Uh, Ohh"}),X.jsx("h3",{children:"Sorry we can't find what you are looking for 'cuz it's so dark in here"})]}),X.jsx("div",{className:"torch",style:{position:"absolute",top:`${e.top}px`,left:`${e.left}px`}})]})};function W_({user:e}){const t=()=>X.jsx(y_,{}),n=()=>X.jsx(y_,{});return X.jsx(__,{basename:"/Chess/",children:X.jsxs(E_,{children:[X.jsx(w_,{path:"/",element:X.jsx(t,{}),children:$_(q_())}),X.jsx(w_,{path:"/",element:X.jsx(n,{}),children:$_(B_())}),X.jsx(w_,{path:"*",element:X.jsx(H_,{})})]})})}
/*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */function K_(e,t,n,r){return new(n||(n=Promise))((function(t,i){function s(e){try{o(r.next(e))}catch(eI){i(eI)}}function a(e){try{o(r.throw(e))}catch(eI){i(eI)}}function o(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}o((r=r.apply(e,[])).next())}))}function G_(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(eI){s=[6,eI],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}
/*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */var Q_=function(){return Q_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Q_.apply(this,arguments)},Y_=function(e){return{loading:null==e,value:e}},X_=function(e){var t=e?e():void 0,n=z.useReducer((function(e,t){switch(t.type){case"error":return Q_(Q_({},e),{error:t.error,loading:!1,value:void 0});case"reset":return Y_(t.defaultValue);case"value":return Q_(Q_({},e),{error:void 0,loading:!1,value:t.value});default:return e}}),Y_(t)),r=n[0],i=n[1],s=z.useCallback((function(){var t=e?e():void 0;i({type:"reset",defaultValue:t})}),[e]),a=z.useCallback((function(e){i({type:"error",error:e})}),[]),o=z.useCallback((function(e){i({type:"value",value:e})}),[]);return z.useMemo((function(){return{error:r.error,loading:r.loading,reset:s,setError:a,setValue:o,value:r.value}}),[r.error,r.loading,s,a,o,r.value])},J_=function(e,t){var n=X_((function(){return e.currentUser})),r=n.error,i=n.loading,s=n.setError,a=n.setValue,o=n.value;return z.useEffect((function(){var n=function(e,t,n,r){return Mh(e).onAuthStateChanged(t,n,r)}(e,(function(e){return K_(void 0,0,void 0,(function(){var n;return G_(this,(function(r){switch(r.label){case 0:return[3,4];case 1:return r.trys.push([1,3,,4]),[4,t.onUserChanged(e)];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),s(n),[3,4];case 4:return a(e),[2]}}))}))}),s);return function(){n()}}),[e]),[o,i,r]};function Z_(){const[e]=J_(gk);return X.jsx("div",{className:"wrapper",children:X.jsx(W_,{user:e})})}J.createRoot(document.getElementById("root")).render(X.jsx(B.StrictMode,{children:X.jsx(Z_,{})}))}}}));
