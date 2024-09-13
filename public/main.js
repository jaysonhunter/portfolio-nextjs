!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
  //     Underscore.js 1.13.6
  //     https://underscorejs.org
  //     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
  //     Underscore may be freely distributed under the MIT license.
  var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));
  /*! modernizr 3.5.0 (Custom Build) | MIT *
   * https://modernizr.com/download/?-csstransitions-setclasses !*/
  !function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?u(o,t||n):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,a,u,f="modernizr",c=l("div"),d=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:f+(r+1),c.appendChild(a);return s=l("style"),s.type="text/css",s.id="s"+f,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!i}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function v(e,n,o,s){function u(){c&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=y(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,m,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)c=!0,N.modElem=l(g.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=N.style[m],i(m,"-")&&(m=a(m)),N.style[m]!==t){if(s||r(o,"undefined"))return u(),"pfx"==n?m:!0;try{N.style[m]=o}catch(h){}if(N.style[m]!=v)return u(),"pfx"==n?m:!0}return u(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(l,n,o,s):(l=(e+" "+z.join(i+" ")+i).split(" "),f(l,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],S=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=P;var z=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=z;var E={elem:l("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=g,w.testAllProps=h,Modernizr.addTest("csstransitions",h("transition","all",!0)),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
  /*!
    hey, [be]Lazy.js - v1.8.2 - 2016.10.25
    A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
    (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
  */
    (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
  (function () {
      'use strict';
  
      /**
       * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
       *
       * @codingstandard ftlabs-jsv2
       * @copyright The Financial Times Limited [All Rights Reserved]
       * @license MIT License (see LICENSE.txt)
       */
  
      /*jslint browser:true, node:true*/
      /*global define, Event, Node*/
  
      /**
       * Instantiate fast-clicking listeners on the specified layer.
       *
       * @constructor
       * @param {Element} layer The layer to listen on
       * @param {Object} [options={}] The options to override the defaults
       */
      function FastClick(layer, options) {
          var oldOnClick;
  
          options = options || {};
  
          /**
           * Whether a click is currently being tracked.
           *
           * @type boolean
           */
          this.trackingClick = false;
  
          /**
           * Timestamp for when click tracking started.
           *
           * @type number
           */
          this.trackingClickStart = 0;
  
          /**
           * The element being tracked for a click.
           *
           * @type EventTarget
           */
          this.targetElement = null;
  
          /**
           * X-coordinate of touch start event.
           *
           * @type number
           */
          this.touchStartX = 0;
  
          /**
           * Y-coordinate of touch start event.
           *
           * @type number
           */
          this.touchStartY = 0;
  
          /**
           * ID of the last touch, retrieved from Touch.identifier.
           *
           * @type number
           */
          this.lastTouchIdentifier = 0;
  
          /**
           * Touchmove boundary, beyond which a click will be cancelled.
           *
           * @type number
           */
          this.touchBoundary = options.touchBoundary || 10;
  
          /**
           * The FastClick layer.
           *
           * @type Element
           */
          this.layer = layer;
  
          /**
           * The minimum time between tap(touchstart and touchend) events
           *
           * @type number
           */
          this.tapDelay = options.tapDelay || 200;
  
          /**
           * The maximum time for a tap
           *
           * @type number
           */
          this.tapTimeout = options.tapTimeout || 700;
  
          if (FastClick.notNeeded(layer)) {
              return;
          }
  
          // Some old versions of Android don't have Function.prototype.bind
          function bind(method, context) {
              return function () { return method.apply(context, arguments); };
          }
  
          var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
          var context = this;
          for (var i = 0, l = methods.length; i < l; i++) {
              context[methods[i]] = bind(context[methods[i]], context);
          }
  
          // Set up event handlers as required
          if (deviceIsAndroid) {
              layer.addEventListener('mouseover', this.onMouse, true);
              layer.addEventListener('mousedown', this.onMouse, true);
              layer.addEventListener('mouseup', this.onMouse, true);
          }
  
          layer.addEventListener('click', this.onClick, true);
          layer.addEventListener('touchstart', this.onTouchStart, false);
          layer.addEventListener('touchmove', this.onTouchMove, false);
          layer.addEventListener('touchend', this.onTouchEnd, false);
          layer.addEventListener('touchcancel', this.onTouchCancel, false);
  
          // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
          // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
          // layer when they are cancelled.
          if (!Event.prototype.stopImmediatePropagation) {
              layer.removeEventListener = function (type, callback, capture) {
                  var rmv = Node.prototype.removeEventListener;
                  if (type === 'click') {
                      rmv.call(layer, type, callback.hijacked || callback, capture);
                  } else {
                      rmv.call(layer, type, callback, capture);
                  }
              };
  
              layer.addEventListener = function (type, callback, capture) {
                  var adv = Node.prototype.addEventListener;
                  if (type === 'click') {
                      adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                              if (!event.propagationStopped) {
                                  callback(event);
                              }
                          }), capture);
                  } else {
                      adv.call(layer, type, callback, capture);
                  }
              };
          }
  
          // If a handler is already declared in the element's onclick attribute, it will be fired before
          // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
          // adding it as listener.
          if (typeof layer.onclick === 'function') {
  
              // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
              // - the old one won't work if passed to addEventListener directly.
              oldOnClick    = layer.onclick;
              layer.addEventListener('click', function (event) {
                  oldOnClick(event);
              }, false);
              layer.onclick = null;
          }
      }
  
      /**
       * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
       *
       * @type boolean
       */
      var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  
      /**
       * Android requires exceptions.
       *
       * @type boolean
       */
      var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  
      /**
       * iOS requires exceptions.
       *
       * @type boolean
       */
      var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  
      /**
       * iOS 4 requires an exception for select elements.
       *
       * @type boolean
       */
      var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
  
      /**
       * iOS 6.0-7.* requires the target element to be manually derived
       *
       * @type boolean
       */
      var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
  
      /**
       * BlackBerry requires exceptions.
       *
       * @type boolean
       */
      var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
  
      /**
       * Determine whether a given element requires a native click.
       *
       * @param {EventTarget|Element} target Target DOM element
       * @returns {boolean} Returns true if the element needs a native click
       */
      FastClick.prototype.needsClick = function (target) {
          switch (target.nodeName.toLowerCase()) {
  
              // Don't send a synthetic click to disabled inputs (issue #62)
              case 'button':
              case 'select':
              case 'textarea':
                  if (target.disabled) {
                      return true;
                  }
  
                  break;
              case 'input':
  
                  // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
                  if ((deviceIsIOS && target.type === 'file') || target.disabled) {
                      return true;
                  }
  
                  break;
              case 'label':
              case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
              case 'video':
                  return true;
          }
  
          return (/\bneedsclick\b/).test(target.className);
      };
  
      /**
       * Determine whether a given element requires a call to focus to simulate click into element.
       *
       * @param {EventTarget|Element} target Target DOM element
       * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
       */
      FastClick.prototype.needsFocus = function (target) {
          switch (target.nodeName.toLowerCase()) {
              case 'textarea':
                  return true;
              case 'select':
                  return !deviceIsAndroid;
              case 'input':
                  switch (target.type) {
                      case 'button':
                      case 'checkbox':
                      case 'file':
                      case 'image':
                      case 'radio':
                      case 'submit':
                          return false;
                  }
  
                  // No point in attempting to focus disabled inputs
                  return !target.disabled && !target.readOnly;
              default:
                  return (/\bneedsfocus\b/).test(target.className);
          }
      };
  
      /**
       * Send a click event to the specified element.
       *
       * @param {EventTarget|Element} targetElement
       * @param {Event} event
       */
      FastClick.prototype.sendClick = function (targetElement, event) {
          var clickEvent, touch;
  
          // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
          if (document.activeElement && document.activeElement !== targetElement) {
              document.activeElement.blur();
          }
  
          touch = event.changedTouches[0];
  
          // Synthesise a click event, with an extra attribute so it can be tracked
          clickEvent                     = document.createEvent('MouseEvents');
          clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
          clickEvent.forwardedTouchEvent = true;
          targetElement.dispatchEvent(clickEvent);
      };
  
      FastClick.prototype.determineEventType = function (targetElement) {
  
          //Issue #159: Android Chrome Select Box does not open with a synthetic click event
          if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
              return 'mousedown';
          }
  
          return 'click';
      };
  
      /**
       * @param {EventTarget|Element} targetElement
       */
      FastClick.prototype.focus = function (targetElement) {
          var length;
  
          // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
          if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
              length = targetElement.value.length;
              targetElement.setSelectionRange(length, length);
          } else {
              targetElement.focus();
          }
      };
  
      /**
       * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
       *
       * @param {EventTarget|Element} targetElement
       */
      FastClick.prototype.updateScrollParent = function (targetElement) {
          var scrollParent, parentElement;
  
          scrollParent = targetElement.fastClickScrollParent;
  
          // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
          // target element was moved to another parent.
          if (!scrollParent || !scrollParent.contains(targetElement)) {
              parentElement = targetElement;
              do {
                  if (parentElement.scrollHeight > parentElement.offsetHeight) {
                      scrollParent                        = parentElement;
                      targetElement.fastClickScrollParent = parentElement;
                      break;
                  }
  
                  parentElement = parentElement.parentElement;
              } while (parentElement);
          }
  
          // Always update the scroll top tracker if possible.
          if (scrollParent) {
              scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
          }
      };
  
      /**
       * @param {EventTarget} targetElement
       * @returns {Element|EventTarget}
       */
      FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
  
          // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
          if (eventTarget.nodeType === Node.TEXT_NODE) {
              return eventTarget.parentNode;
          }
  
          return eventTarget;
      };
  
      /**
       * On touch start, record the position and scroll offset.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.onTouchStart = function (event) {
          var targetElement, touch, selection;
  
          // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
          if (event.targetTouches.length > 1) {
              return true;
          }
  
          targetElement = this.getTargetElementFromEventTarget(event.target);
          touch         = event.targetTouches[0];
  
          if (deviceIsIOS) {
  
              // Only trusted events will deselect text on iOS (issue #49)
              selection = window.getSelection();
              if (selection.rangeCount && !selection.isCollapsed) {
                  return true;
              }
  
              if (!deviceIsIOS4) {
  
                  // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                  // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                  // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                  // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                  // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                  // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
                  // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
                  // random integers, it's safe to to continue if the identifier is 0 here.
                  if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                      event.preventDefault();
                      return false;
                  }
  
                  this.lastTouchIdentifier = touch.identifier;
  
                  // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                  // 1) the user does a fling scroll on the scrollable layer
                  // 2) the user stops the fling scroll with another tap
                  // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                  // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                  // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                  this.updateScrollParent(targetElement);
              }
          }
  
          this.trackingClick      = true;
          this.trackingClickStart = event.timeStamp;
          this.targetElement      = targetElement;
  
          this.touchStartX = touch.pageX;
          this.touchStartY = touch.pageY;
  
          // Prevent phantom clicks on fast double-tap (issue #36)
          if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
              event.preventDefault();
          }
  
          return true;
      };
  
      /**
       * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.touchHasMoved = function (event) {
          var touch = event.changedTouches[0], boundary = this.touchBoundary;
  
          if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
              return true;
          }
  
          return false;
      };
  
      /**
       * Update the last position.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.onTouchMove = function (event) {
          if (!this.trackingClick) {
              return true;
          }
  
          // If the touch has moved, cancel the click tracking
          if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
              this.trackingClick = false;
              this.targetElement = null;
          }
  
          return true;
      };
  
      /**
       * Attempt to find the labelled control for the given label element.
       *
       * @param {EventTarget|HTMLLabelElement} labelElement
       * @returns {Element|null}
       */
      FastClick.prototype.findControl = function (labelElement) {
  
          // Fast path for newer browsers supporting the HTML5 control attribute
          if (labelElement.control !== undefined) {
              return labelElement.control;
          }
  
          // All browsers under test that support touch events also support the HTML5 htmlFor attribute
          if (labelElement.htmlFor) {
              return document.getElementById(labelElement.htmlFor);
          }
  
          // If no for attribute exists, attempt to retrieve the first labellable descendant element
          // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
          return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
      };
  
      /**
       * On touch end, determine whether to send a click event at once.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.onTouchEnd = function (event) {
          var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
  
          if (!this.trackingClick) {
              return true;
          }
  
          // Prevent phantom clicks on fast double-tap (issue #36)
          if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
              this.cancelNextClick = true;
              return true;
          }
  
          if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
              return true;
          }
  
          // Reset to prevent wrong click cancel on input (issue #156).
          this.cancelNextClick = false;
  
          this.lastClickTime = event.timeStamp;
  
          trackingClickStart      = this.trackingClickStart;
          this.trackingClick      = false;
          this.trackingClickStart = 0;
  
          // On some iOS devices, the targetElement supplied with the event is invalid if the layer
          // is performing a transition or scroll, and has to be re-detected manually. Note that
          // for this to function correctly, it must be called *after* the event target is checked!
          // See issue #57; also filed as rdar://13048589 .
          if (deviceIsIOSWithBadTarget) {
              touch = event.changedTouches[0];
  
              // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
              targetElement                       = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
              targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
          }
  
          targetTagName = targetElement.tagName.toLowerCase();
          if (targetTagName === 'label') {
              forElement = this.findControl(targetElement);
              if (forElement) {
                  this.focus(targetElement);
                  if (deviceIsAndroid) {
                      return false;
                  }
  
                  targetElement = forElement;
              }
          } else if (this.needsFocus(targetElement)) {
  
              // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
              // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
              if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
                  this.targetElement = null;
                  return false;
              }
  
              this.focus(targetElement);
              this.sendClick(targetElement, event);
  
              // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
              // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
              if (!deviceIsIOS || targetTagName !== 'select') {
                  this.targetElement = null;
                  event.preventDefault();
              }
  
              return false;
          }
  
          if (deviceIsIOS && !deviceIsIOS4) {
  
              // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
              // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
              scrollParent = targetElement.fastClickScrollParent;
              if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                  return true;
              }
          }
  
          // Prevent the actual click from going though - unless the target node is marked as requiring
          // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
          if (!this.needsClick(targetElement)) {
              event.preventDefault();
              this.sendClick(targetElement, event);
          }
  
          return false;
      };
  
      /**
       * On touch cancel, stop tracking the click.
       *
       * @returns {void}
       */
      FastClick.prototype.onTouchCancel = function () {
          this.trackingClick = false;
          this.targetElement = null;
      };
  
      /**
       * Determine mouse events which should be permitted.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.onMouse = function (event) {
  
          // If a target element was never set (because a touch event was never fired) allow the event
          if (!this.targetElement) {
              return true;
          }
  
          if (event.forwardedTouchEvent) {
              return true;
          }
  
          // Programmatically generated events targeting a specific element should be permitted
          if (!event.cancelable) {
              return true;
          }
  
          // Derive and check the target element to see whether the mouse event needs to be permitted;
          // unless explicitly enabled, prevent non-touch click events from triggering actions,
          // to prevent ghost/doubleclicks.
          if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
  
              // Prevent any user-added listeners declared on FastClick element from being fired.
              if (event.stopImmediatePropagation) {
                  event.stopImmediatePropagation();
              } else {
  
                  // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                  event.propagationStopped = true;
              }
  
              // Cancel the event
              event.stopPropagation();
              event.preventDefault();
  
              return false;
          }
  
          // If the mouse event is permitted, return true for the action to go through.
          return true;
      };
  
      /**
       * On actual clicks, determine whether this is a touch-generated click, a click action occurring
       * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
       * an actual click which should be permitted.
       *
       * @param {Event} event
       * @returns {boolean}
       */
      FastClick.prototype.onClick = function (event) {
          var permitted;
  
          // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
          if (this.trackingClick) {
              this.targetElement = null;
              this.trackingClick = false;
              return true;
          }
  
          // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
          if (event.target.type === 'submit' && event.detail === 0) {
              return true;
          }
  
          permitted = this.onMouse(event);
  
          // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
          if (!permitted) {
              this.targetElement = null;
          }
  
          // If clicks are permitted, return true for the action to go through.
          return permitted;
      };
  
      /**
       * Remove all FastClick's event listeners.
       *
       * @returns {void}
       */
      FastClick.prototype.destroy = function () {
          var layer = this.layer;
  
          if (deviceIsAndroid) {
              layer.removeEventListener('mouseover', this.onMouse, true);
              layer.removeEventListener('mousedown', this.onMouse, true);
              layer.removeEventListener('mouseup', this.onMouse, true);
          }
  
          layer.removeEventListener('click', this.onClick, true);
          layer.removeEventListener('touchstart', this.onTouchStart, false);
          layer.removeEventListener('touchmove', this.onTouchMove, false);
          layer.removeEventListener('touchend', this.onTouchEnd, false);
          layer.removeEventListener('touchcancel', this.onTouchCancel, false);
      };
  
      /**
       * Check whether FastClick is needed.
       *
       * @param {Element} layer The layer to listen on
       */
      FastClick.notNeeded = function (layer) {
          var metaViewport;
          var chromeVersion;
          var blackberryVersion;
          var firefoxVersion;
  
          // Devices that don't support touch don't need FastClick
          if (typeof window.ontouchstart === 'undefined') {
              return true;
          }
  
          // Chrome version - zero for other browsers
          chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
  
          if (chromeVersion) {
  
              if (deviceIsAndroid) {
                  metaViewport = document.querySelector('meta[name=viewport]');
  
                  if (metaViewport) {
                      // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                      if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                          return true;
                      }
                      // Chrome 32 and above with width=device-width or less don't need FastClick
                      if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                          return true;
                      }
                  }
  
                  // Chrome desktop doesn't need FastClick (issue #15)
              } else {
                  return true;
              }
          }
  
          if (deviceIsBlackBerry10) {
              blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
  
              // BlackBerry 10.3+ does not require Fastclick library.
              // https://github.com/ftlabs/fastclick/issues/251
              if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                  metaViewport = document.querySelector('meta[name=viewport]');
  
                  if (metaViewport) {
                      // user-scalable=no eliminates click delay.
                      if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                          return true;
                      }
                      // width=device-width (or less than device-width) eliminates click delay.
                      if (document.documentElement.scrollWidth <= window.outerWidth) {
                          return true;
                      }
                  }
              }
          }
  
          // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
          if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
              return true;
          }
  
          // Firefox version - zero for other browsers
          firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
  
          if (firefoxVersion >= 27) {
              // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
  
              metaViewport = document.querySelector('meta[name=viewport]');
              if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                  return true;
              }
          }
  
          // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
          // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
          if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
              return true;
          }
  
          return false;
      };
  
      /**
       * Factory method for creating a FastClick object
       *
       * @param {Element} layer The layer to listen on
       * @param {Object} [options={}] The options to override the defaults
       */
      FastClick.attach = function (layer, options) {
          return new FastClick(layer, options);
      };
  
      if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
  
          // AMD. Register as an anonymous module.
          define(function () {
              return FastClick;
          });
      } else if (typeof module !== 'undefined' && module.exports) {
          module.exports           = FastClick.attach;
          module.exports.FastClick = FastClick;
      } else {
          window.FastClick = FastClick;
      }
  }());
  /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
  (function (window, document, Math) {
      var rAF = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) { window.setTimeout(callback, 1000 / 60); };
  
      var utils = (function () {
          var me = {};
  
          var _elementStyle = document.createElement('div').style;
          var _vendor       = (function () {
              var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                  transform,
                  i       = 0,
                  l       = vendors.length;
  
              for (; i < l; i++) {
                  transform = vendors[i] + 'ransform';
                  if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
              }
  
              return false;
          })();
  
          function _prefixStyle(style) {
              if (_vendor === false) return false;
              if (_vendor === '') return style;
              return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
          }
  
          me.getTime = Date.now || function getTime() { return new Date().getTime(); };
  
          me.extend = function (target, obj) {
              for (var i in obj) {
                  target[i] = obj[i];
              }
          };
  
          me.addEvent = function (el, type, fn, capture) {
              el.addEventListener(type, fn, !!capture);
          };
  
          me.removeEvent = function (el, type, fn, capture) {
              el.removeEventListener(type, fn, !!capture);
          };
  
          me.prefixPointerEvent = function (pointerEvent) {
              return window.MSPointerEvent ?
              'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) :
                  pointerEvent;
          };
  
          me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
              var distance = current - start,
                  speed    = Math.abs(distance) / time,
                  destination,
                  duration;
  
              deceleration = deceleration === undefined ? 0.0006 : deceleration;
  
              destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
              duration    = speed / deceleration;
  
              if (destination < lowerMargin) {
                  destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
                  distance    = Math.abs(destination - current);
                  duration    = distance / speed;
              } else if (destination > 0) {
                  destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
                  distance    = Math.abs(current) + destination;
                  duration    = distance / speed;
              }
  
              return {
                  destination : Math.round(destination),
                  duration    : duration
              };
          };
  
          var _transform = _prefixStyle('transform');
  
          me.extend(me, {
              hasTransform   : _transform !== false,
              hasPerspective : _prefixStyle('perspective') in _elementStyle,
              hasTouch       : 'ontouchstart' in window,
              hasPointer     : !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
              hasTransition  : _prefixStyle('transition') in _elementStyle
          });
  
          /*
           This should find all Android browsers lower than build 535.19 (both stock browser and webview)
           - galaxy S2 is ok
           - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
           - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
           - galaxy S3 is badAndroid (stock brower, webview)
           `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
           - galaxy S4 is badAndroid (stock brower, webview)
           `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
           - galaxy S5 is OK
           `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
           - galaxy S6 is OK
           `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
           */
          me.isBadAndroid = (function () {
              var appVersion = window.navigator.appVersion;
              // Android browser is not a chrome browser.
              if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
                  var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
                  if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
                      return parseFloat(safariVersion[1]) < 535.19;
                  } else {
                      return true;
                  }
              } else {
                  return false;
              }
          })();
  
          me.extend(me.style = {}, {
              transform                : _transform,
              transitionTimingFunction : _prefixStyle('transitionTimingFunction'),
              transitionDuration       : _prefixStyle('transitionDuration'),
              transitionDelay          : _prefixStyle('transitionDelay'),
              transformOrigin          : _prefixStyle('transformOrigin')
          });
  
          me.hasClass = function (e, c) {
              var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
              return re.test(e.className);
          };
  
          me.addClass = function (e, c) {
              if (me.hasClass(e, c)) {
                  return;
              }
  
              var newclass = e.className.split(' ');
              newclass.push(c);
              e.className = newclass.join(' ');
          };
  
          me.removeClass = function (e, c) {
              if (!me.hasClass(e, c)) {
                  return;
              }
  
              var re      = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
              e.className = e.className.replace(re, ' ');
          };
  
          me.offset = function (el) {
              var left = -el.offsetLeft,
                  top  = -el.offsetTop;
  
              // jshint -W084
              while (el = el.offsetParent) {
                  left -= el.offsetLeft;
                  top -= el.offsetTop;
              }
              // jshint +W084
  
              return {
                  left : left,
                  top  : top
              };
          };
  
          me.preventDefaultException = function (el, exceptions) {
              for (var i in exceptions) {
                  if (exceptions[i].test(el[i])) {
                      return true;
                  }
              }
  
              return false;
          };
  
          me.extend(me.eventType = {}, {
              touchstart : 1,
              touchmove  : 1,
              touchend   : 1,
  
              mousedown : 2,
              mousemove : 2,
              mouseup   : 2,
  
              pointerdown : 3,
              pointermove : 3,
              pointerup   : 3,
  
              MSPointerDown : 3,
              MSPointerMove : 3,
              MSPointerUp   : 3
          });
  
          me.extend(me.ease = {}, {
              quadratic : {
                  style : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  fn    : function (k) {
                      return k * ( 2 - k );
                  }
              },
              circular  : {
                  style : 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should
                  // be (0.075, 0.82, 0.165, 1)
                  fn    : function (k) {
                      return Math.sqrt(1 - ( --k * k ));
                  }
              },
              back      : {
                  style : 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  fn    : function (k) {
                      var b = 4;
                      return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
                  }
              },
              bounce    : {
                  style : '',
                  fn    : function (k) {
                      if (( k /= 1 ) < ( 1 / 2.75 )) {
                          return 7.5625 * k * k;
                      } else if (k < ( 2 / 2.75 )) {
                          return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
                      } else if (k < ( 2.5 / 2.75 )) {
                          return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
                      } else {
                          return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
                      }
                  }
              },
              elastic   : {
                  style : '',
                  fn    : function (k) {
                      var f = 0.22,
                          e = 0.4;
  
                      if (k === 0) {
                          return 0;
                      }
                      if (k == 1) {
                          return 1;
                      }
  
                      return ( e * Math.pow(2, -10 * k) * Math.sin(( k - f / 4 ) * ( 2 * Math.PI ) / f) + 1 );
                  }
              }
          });
  
          me.tap = function (e, eventName) {
              var ev = document.createEvent('Event');
              ev.initEvent(eventName, true, true);
              ev.pageX = e.pageX;
              ev.pageY = e.pageY;
              e.target.dispatchEvent(ev);
          };
  
          me.click = function (e) {
              var target = e.target,
                  ev;
  
              if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
                  // initMouseEvent is deprecated.
                  ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
                  ev.initEvent('click', true, true);
                  ev.view          = e.view || window;
                  ev.detail        = 1;
                  ev.screenX       = target.screenX || 0;
                  ev.screenY       = target.screenY || 0;
                  ev.clientX       = target.clientX || 0;
                  ev.clientY       = target.clientY || 0;
                  ev.ctrlKey       = !!e.ctrlKey;
                  ev.altKey        = !!e.altKey;
                  ev.shiftKey      = !!e.shiftKey;
                  ev.metaKey       = !!e.metaKey;
                  ev.button        = 0;
                  ev.relatedTarget = null;
                  ev._constructed  = true;
                  target.dispatchEvent(ev);
              }
          };
  
          return me;
      })();
  
      function IScroll(el, options) {
          this.wrapper       = typeof el == 'string' ? document.querySelector(el) : el;
          this.scroller      = this.wrapper.children[0];
          this.scrollerStyle = this.scroller.style;		// cache style for better performance
  
          this.options = {
  
              resizeScrollbars : true,
  
              mouseWheelSpeed : 20,
  
              snapThreshold : 0.334,
  
  // INSERT POINT: OPTIONS
              disablePointer         : !utils.hasPointer,
              disableTouch           : utils.hasPointer || !utils.hasTouch,
              disableMouse           : utils.hasPointer || utils.hasTouch,
              startX                 : 0,
              startY                 : 0,
              scrollY                : true,
              directionLockThreshold : 5,
              momentum               : true,
  
              bounce       : true,
              bounceTime   : 600,
              bounceEasing : '',
  
              preventDefault          : true,
              preventDefaultException : { tagName : /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
  
              HWCompositing : true,
              useTransition : true,
              useTransform  : true,
              bindToWrapper : typeof window.onmousedown === "undefined"
          };
  
          for (var i in options) {
              this.options[i] = options[i];
          }
  
          // Normalize options
          this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
  
          this.options.useTransition = utils.hasTransition && this.options.useTransition;
          this.options.useTransform  = utils.hasTransform && this.options.useTransform;
  
          this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
          this.options.preventDefault   = !this.options.eventPassthrough && this.options.preventDefault;
  
          // If you want eventPassthrough I have to lock one of the axes
          this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
          this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
  
          // With eventPassthrough we also need lockDirection mechanism
          this.options.freeScroll             = this.options.freeScroll && !this.options.eventPassthrough;
          this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
  
          this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
  
          this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
  
          if (this.options.tap === true) {
              this.options.tap = 'tap';
          }
  
          // https://github.com/cubiq/iscroll/issues/1029
          if (!this.options.useTransition && !this.options.useTransform) {
              if (!(/relative|absolute/i).test(this.scrollerStyle.position)) {
                  this.scrollerStyle.position = "relative";
              }
          }
  
          if (this.options.shrinkScrollbars == 'scale') {
              this.options.useTransition = false;
          }
  
          this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
  
  // INSERT POINT: NORMALIZATION
  
          // Some defaults
          this.x          = 0;
          this.y          = 0;
          this.directionX = 0;
          this.directionY = 0;
          this._events    = {};
  
  // INSERT POINT: DEFAULTS
  
          this._init();
          this.refresh();
  
          this.scrollTo(this.options.startX, this.options.startY);
          this.enable();
      }
  
      IScroll.prototype = {
          version : '5.2.0',
  
          _init : function () {
              this._initEvents();
  
              if (this.options.scrollbars || this.options.indicators) {
                  this._initIndicators();
              }
  
              if (this.options.mouseWheel) {
                  this._initWheel();
              }
  
              if (this.options.snap) {
                  this._initSnap();
              }
  
              if (this.options.keyBindings) {
                  this._initKeys();
              }
  
  // INSERT POINT: _init
  
          },
  
          destroy : function () {
              this._initEvents(true);
              clearTimeout(this.resizeTimeout);
              this.resizeTimeout = null;
              this._execEvent('destroy');
          },
  
          _transitionEnd : function (e) {
              if (e.target != this.scroller || !this.isInTransition) {
                  return;
              }
  
              this._transitionTime();
              if (!this.resetPosition(this.options.bounceTime)) {
                  this.isInTransition = false;
                  this._execEvent('scrollEnd');
              }
          },
  
          _start : function (e) {
              // React to left mouse button only
              if (utils.eventType[e.type] != 1) {
                  // for button property
                  // http://unixpapa.com/js/mouse.html
                  var button;
                  if (!e.which) {
                      /* IE case */
                      button = (e.button < 2) ? 0 :
                          ((e.button == 4) ? 1 : 2);
                  } else {
                      /* All others */
                      button = e.button;
                  }
                  if (button !== 0) {
                      return;
                  }
              }
  
              if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
                  return;
              }
  
              if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                  e.preventDefault();
              }
  
              var point = e.touches ? e.touches[0] : e,
                  pos;
  
              this.initiated       = utils.eventType[e.type];
              this.moved           = false;
              this.distX           = 0;
              this.distY           = 0;
              this.directionX      = 0;
              this.directionY      = 0;
              this.directionLocked = 0;
  
              this.startTime = utils.getTime();
  
              if (this.options.useTransition && this.isInTransition) {
                  this._transitionTime();
                  this.isInTransition = false;
                  pos                 = this.getComputedPosition();
                  this._translate(Math.round(pos.x), Math.round(pos.y));
                  this._execEvent('scrollEnd');
              } else if (!this.options.useTransition && this.isAnimating) {
                  this.isAnimating = false;
                  this._execEvent('scrollEnd');
              }
  
              this.startX    = this.x;
              this.startY    = this.y;
              this.absStartX = this.x;
              this.absStartY = this.y;
              this.pointX    = point.pageX;
              this.pointY    = point.pageY;
  
              this._execEvent('beforeScrollStart');
          },
  
          _move : function (e) {
              if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                  return;
              }
  
              if (this.options.preventDefault) {	// increases performance on Android? TODO: check!
                  e.preventDefault();
              }
  
              var point     = e.touches ? e.touches[0] : e,
                  deltaX    = point.pageX - this.pointX,
                  deltaY    = point.pageY - this.pointY,
                  timestamp = utils.getTime(),
                  newX, newY,
                  absDistX, absDistY;
  
              this.pointX = point.pageX;
              this.pointY = point.pageY;
  
              this.distX += deltaX;
              this.distY += deltaY;
              absDistX = Math.abs(this.distX);
              absDistY = Math.abs(this.distY);
  
              // We need to move at least 10 pixels for the scrolling to initiate
              if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                  return;
              }
  
              // If you are scrolling in one direction lock the other
              if (!this.directionLocked && !this.options.freeScroll) {
                  if (absDistX > absDistY + this.options.directionLockThreshold) {
                      this.directionLocked = 'h';		// lock horizontally
                  } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                      this.directionLocked = 'v';		// lock vertically
                  } else {
                      this.directionLocked = 'n';		// no lock
                  }
              }
  
              if (this.directionLocked == 'h') {
                  if (this.options.eventPassthrough == 'vertical') {
                      e.preventDefault();
                  } else if (this.options.eventPassthrough == 'horizontal') {
                      this.initiated = false;
                      return;
                  }
  
                  deltaY = 0;
              } else if (this.directionLocked == 'v') {
                  if (this.options.eventPassthrough == 'horizontal') {
                      e.preventDefault();
                  } else if (this.options.eventPassthrough == 'vertical') {
                      this.initiated = false;
                      return;
                  }
  
                  deltaX = 0;
              }
  
              deltaX = this.hasHorizontalScroll ? deltaX : 0;
              deltaY = this.hasVerticalScroll ? deltaY : 0;
  
              newX = this.x + deltaX;
              newY = this.y + deltaY;
  
              // Slow down if outside of the boundaries
              if (newX > 0 || newX < this.maxScrollX) {
                  newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
              }
              if (newY > 0 || newY < this.maxScrollY) {
                  newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
              }
  
              this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
              this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
  
              if (!this.moved) {
                  this._execEvent('scrollStart');
              }
  
              this.moved = true;
  
              this._translate(newX, newY);
  
              /* REPLACE START: _move */
  
              if (timestamp - this.startTime > 300) {
                  this.startTime = timestamp;
                  this.startX    = this.x;
                  this.startY    = this.y;
              }
  
              /* REPLACE END: _move */
  
          },
  
          _end : function (e) {
              if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                  return;
              }
  
              if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                  e.preventDefault();
              }
  
              var point     = e.changedTouches ? e.changedTouches[0] : e,
                  momentumX,
                  momentumY,
                  duration  = utils.getTime() - this.startTime,
                  newX      = Math.round(this.x),
                  newY      = Math.round(this.y),
                  distanceX = Math.abs(newX - this.startX),
                  distanceY = Math.abs(newY - this.startY),
                  time      = 0,
                  easing    = '';
  
              this.isInTransition = 0;
              this.initiated      = 0;
              this.endTime        = utils.getTime();
  
              // reset if we are outside of the boundaries
              if (this.resetPosition(this.options.bounceTime)) {
                  return;
              }
  
              this.scrollTo(newX, newY);	// ensures that the last position is rounded
  
              // we scrolled less than 10 pixels
              if (!this.moved) {
                  if (this.options.tap) {
                      utils.tap(e, this.options.tap);
                  }
  
                  if (this.options.click) {
                      utils.click(e);
                  }
  
                  this._execEvent('scrollCancel');
                  return;
              }
  
              if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                  this._execEvent('flick');
                  return;
              }
  
              // start momentum animation if needed
              if (this.options.momentum && duration < 300) {
                  momentumX           = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                      destination : newX,
                      duration    : 0
                  };
                  momentumY           = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                      destination : newY,
                      duration    : 0
                  };
                  newX                = momentumX.destination;
                  newY                = momentumY.destination;
                  time                = Math.max(momentumX.duration, momentumY.duration);
                  this.isInTransition = 1;
              }
  
              if (this.options.snap) {
                  var snap         = this._nearestSnap(newX, newY);
                  this.currentPage = snap;
                  time             = this.options.snapSpeed || Math.max(
                          Math.max(
                              Math.min(Math.abs(newX - snap.x), 1000),
                              Math.min(Math.abs(newY - snap.y), 1000)
                          ), 300);
                  newX             = snap.x;
                  newY             = snap.y;
  
                  this.directionX = 0;
                  this.directionY = 0;
                  easing          = this.options.bounceEasing;
              }
  
  // INSERT POINT: _end
  
              if (newX != this.x || newY != this.y) {
                  // change easing function when scroller goes out of the boundaries
                  if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                      easing = utils.ease.quadratic;
                  }
  
                  this.scrollTo(newX, newY, time, easing);
                  return;
              }
  
              this._execEvent('scrollEnd');
          },
  
          _resize : function () {
              var that = this;
  
              clearTimeout(this.resizeTimeout);
  
              this.resizeTimeout = setTimeout(function () {
                  that.refresh();
              }, this.options.resizePolling);
          },
  
          resetPosition : function (time) {
              var x = this.x,
                  y = this.y;
  
              time = time || 0;
  
              if (!this.hasHorizontalScroll || this.x > 0) {
                  x = 0;
              } else if (this.x < this.maxScrollX) {
                  x = this.maxScrollX;
              }
  
              if (!this.hasVerticalScroll || this.y > 0) {
                  y = 0;
              } else if (this.y < this.maxScrollY) {
                  y = this.maxScrollY;
              }
  
              if (x == this.x && y == this.y) {
                  return false;
              }
  
              this.scrollTo(x, y, time, this.options.bounceEasing);
  
              return true;
          },
  
          disable : function () {
              this.enabled = false;
          },
  
          enable : function () {
              this.enabled = true;
          },
  
          refresh : function () {
              var rf = this.wrapper.offsetHeight;		// Force reflow
  
              this.wrapperWidth  = this.wrapper.clientWidth;
              this.wrapperHeight = this.wrapper.clientHeight;
  
              /* REPLACE START: refresh */
  
              this.scrollerWidth  = this.scroller.offsetWidth;
              this.scrollerHeight = this.scroller.offsetHeight;
  
              this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
              this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
  
              /* REPLACE END: refresh */
  
              this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
              this.hasVerticalScroll   = this.options.scrollY && this.maxScrollY < 0;
  
              if (!this.hasHorizontalScroll) {
                  this.maxScrollX    = 0;
                  this.scrollerWidth = this.wrapperWidth;
              }
  
              if (!this.hasVerticalScroll) {
                  this.maxScrollY     = 0;
                  this.scrollerHeight = this.wrapperHeight;
              }
  
              this.endTime    = 0;
              this.directionX = 0;
              this.directionY = 0;
  
              this.wrapperOffset = utils.offset(this.wrapper);
  
              this._execEvent('refresh');
  
              this.resetPosition();
  
  // INSERT POINT: _refresh
  
          },
  
          on : function (type, fn) {
              if (!this._events[type]) {
                  this._events[type] = [];
              }
  
              this._events[type].push(fn);
          },
  
          off : function (type, fn) {
              if (!this._events[type]) {
                  return;
              }
  
              var index = this._events[type].indexOf(fn);
  
              if (index > -1) {
                  this._events[type].splice(index, 1);
              }
          },
  
          _execEvent : function (type) {
              if (!this._events[type]) {
                  return;
              }
  
              var i = 0,
                  l = this._events[type].length;
  
              if (!l) {
                  return;
              }
  
              for (; i < l; i++) {
                  this._events[type][i].apply(this, [].slice.call(arguments, 1));
              }
          },
  
          scrollBy : function (x, y, time, easing) {
              x    = this.x + x;
              y    = this.y + y;
              time = time || 0;
  
              this.scrollTo(x, y, time, easing);
          },
  
          scrollTo : function (x, y, time, easing) {
              easing = easing || utils.ease.circular;
  
              this.isInTransition = this.options.useTransition && time > 0;
              var transitionType  = this.options.useTransition && easing.style;
              if (!time || transitionType) {
                  if (transitionType) {
                      this._transitionTimingFunction(easing.style);
                      this._transitionTime(time);
                  }
                  this._translate(x, y);
              } else {
                  this._animate(x, y, time, easing.fn);
              }
          },
  
          scrollToElement : function (el, time, offsetX, offsetY, easing) {
              el = el.nodeType ? el : this.scroller.querySelector(el);
  
              if (!el) {
                  return;
              }
  
              var pos = utils.offset(el);
  
              pos.left -= this.wrapperOffset.left;
              pos.top -= this.wrapperOffset.top;
  
              // if offsetX/Y are true we center the element to the screen
              if (offsetX === true) {
                  offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
              }
              if (offsetY === true) {
                  offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
              }
  
              pos.left -= offsetX || 0;
              pos.top -= offsetY || 0;
  
              pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
              pos.top  = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
  
              time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
  
              this.scrollTo(pos.left, pos.top, time, easing);
          },
  
          _transitionTime : function (time) {
              if (!this.options.useTransition) {
                  return;
              }
              time             = time || 0;
              var durationProp = utils.style.transitionDuration;
              if (!durationProp) {
                  return;
              }
  
              this.scrollerStyle[durationProp] = time + 'ms';
  
              if (!time && utils.isBadAndroid) {
                  this.scrollerStyle[durationProp] = '0.0001ms';
                  // remove 0.0001ms
                  var self = this;
                  rAF(function () {
                      if (self.scrollerStyle[durationProp] === '0.0001ms') {
                          self.scrollerStyle[durationProp] = '0s';
                      }
                  });
              }
  
              if (this.indicators) {
                  for (var i = this.indicators.length; i--;) {
                      this.indicators[i].transitionTime(time);
                  }
              }
  
  // INSERT POINT: _transitionTime
  
          },
  
          _transitionTimingFunction : function (easing) {
              this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
  
              if (this.indicators) {
                  for (var i = this.indicators.length; i--;) {
                      this.indicators[i].transitionTimingFunction(easing);
                  }
              }
  
  // INSERT POINT: _transitionTimingFunction
  
          },
  
          _translate : function (x, y) {
              if (this.options.useTransform) {
  
                  /* REPLACE START: _translate */
  
                  this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
  
                  /* REPLACE END: _translate */
  
              } else {
                  x                       = Math.round(x);
                  y                       = Math.round(y);
                  this.scrollerStyle.left = x + 'px';
                  this.scrollerStyle.top  = y + 'px';
              }
  
              this.x = x;
              this.y = y;
  
              if (this.indicators) {
                  for (var i = this.indicators.length; i--;) {
                      this.indicators[i].updatePosition();
                  }
              }
  
  // INSERT POINT: _translate
  
          },
  
          _initEvents : function (remove) {
              var eventType = remove ? utils.removeEvent : utils.addEvent,
                  target    = this.options.bindToWrapper ? this.wrapper : window;
  
              eventType(window, 'orientationchange', this);
              eventType(window, 'resize', this);
  
              if (this.options.click) {
                  eventType(this.wrapper, 'click', this, true);
              }
  
              if (!this.options.disableMouse) {
                  eventType(this.wrapper, 'mousedown', this);
                  eventType(target, 'mousemove', this);
                  eventType(target, 'mousecancel', this);
                  eventType(target, 'mouseup', this);
              }
  
              if (utils.hasPointer && !this.options.disablePointer) {
                  eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                  eventType(target, utils.prefixPointerEvent('pointermove'), this);
                  eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                  eventType(target, utils.prefixPointerEvent('pointerup'), this);
              }
  
              if (utils.hasTouch && !this.options.disableTouch) {
                  eventType(this.wrapper, 'touchstart', this);
                  eventType(target, 'touchmove', this);
                  eventType(target, 'touchcancel', this);
                  eventType(target, 'touchend', this);
              }
  
              eventType(this.scroller, 'transitionend', this);
              eventType(this.scroller, 'webkitTransitionEnd', this);
              eventType(this.scroller, 'oTransitionEnd', this);
              eventType(this.scroller, 'MSTransitionEnd', this);
          },
  
          getComputedPosition : function () {
              var matrix = window.getComputedStyle(this.scroller, null),
                  x, y;
  
              if (this.options.useTransform) {
                  matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                  x      = +(matrix[12] || matrix[4]);
                  y      = +(matrix[13] || matrix[5]);
              } else {
                  x = +matrix.left.replace(/[^-\d.]/g, '');
                  y = +matrix.top.replace(/[^-\d.]/g, '');
              }
  
              return { x : x, y : y };
          },
          _initIndicators     : function () {
              var interactive = this.options.interactiveScrollbars,
                  customStyle = typeof this.options.scrollbars != 'string',
                  indicators  = [],
                  indicator;
  
              var that = this;
  
              this.indicators = [];
  
              if (this.options.scrollbars) {
                  // Vertical scrollbar
                  if (this.options.scrollY) {
                      indicator = {
                          el                : createDefaultScrollbar('v', interactive, this.options.scrollbars),
                          interactive       : interactive,
                          defaultScrollbars : true,
                          customStyle       : customStyle,
                          resize            : this.options.resizeScrollbars,
                          shrink            : this.options.shrinkScrollbars,
                          fade              : this.options.fadeScrollbars,
                          listenX           : false
                      };
  
                      this.wrapper.appendChild(indicator.el);
                      indicators.push(indicator);
                  }
  
                  // Horizontal scrollbar
                  if (this.options.scrollX) {
                      indicator = {
                          el                : createDefaultScrollbar('h', interactive, this.options.scrollbars),
                          interactive       : interactive,
                          defaultScrollbars : true,
                          customStyle       : customStyle,
                          resize            : this.options.resizeScrollbars,
                          shrink            : this.options.shrinkScrollbars,
                          fade              : this.options.fadeScrollbars,
                          listenY           : false
                      };
  
                      this.wrapper.appendChild(indicator.el);
                      indicators.push(indicator);
                  }
              }
  
              if (this.options.indicators) {
                  // TODO: check concat compatibility
                  indicators = indicators.concat(this.options.indicators);
              }
  
              for (var i = indicators.length; i--;) {
                  this.indicators.push(new Indicator(this, indicators[i]));
              }
  
              // TODO: check if we can use array.map (wide compatibility and performance issues)
              function _indicatorsMap(fn) {
                  if (that.indicators) {
                      for (var i = that.indicators.length; i--;) {
                          fn.call(that.indicators[i]);
                      }
                  }
              }
  
              if (this.options.fadeScrollbars) {
                  this.on('scrollEnd', function () {
                      _indicatorsMap(function () {
                          this.fade();
                      });
                  });
  
                  this.on('scrollCancel', function () {
                      _indicatorsMap(function () {
                          this.fade();
                      });
                  });
  
                  this.on('scrollStart', function () {
                      _indicatorsMap(function () {
                          this.fade(1);
                      });
                  });
  
                  this.on('beforeScrollStart', function () {
                      _indicatorsMap(function () {
                          this.fade(1, true);
                      });
                  });
              }
  
              this.on('refresh', function () {
                  _indicatorsMap(function () {
                      this.refresh();
                  });
              });
  
              this.on('destroy', function () {
                  _indicatorsMap(function () {
                      this.destroy();
                  });
  
                  delete this.indicators;
              });
          },
  
          _initWheel : function () {
              utils.addEvent(this.wrapper, 'wheel', this);
              utils.addEvent(this.wrapper, 'mousewheel', this);
              utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
  
              this.on('destroy', function () {
                  clearTimeout(this.wheelTimeout);
                  this.wheelTimeout = null;
                  utils.removeEvent(this.wrapper, 'wheel', this);
                  utils.removeEvent(this.wrapper, 'mousewheel', this);
                  utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
              });
          },
  
          _wheel : function (e) {
              if (!this.enabled) {
                  return;
              }
  
              e.preventDefault();
  
              var wheelDeltaX, wheelDeltaY,
                  newX, newY,
                  that = this;
  
              if (this.wheelTimeout === undefined) {
                  that._execEvent('scrollStart');
              }
  
              // Execute the scrollEnd event after 400ms the wheel stopped scrolling
              clearTimeout(this.wheelTimeout);
              this.wheelTimeout = setTimeout(function () {
                  if (!that.options.snap) {
                      that._execEvent('scrollEnd');
                  }
                  that.wheelTimeout = undefined;
              }, 400);
  
              if ('deltaX' in e) {
                  if (e.deltaMode === 1) {
                      wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                      wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
                  } else {
                      wheelDeltaX = -e.deltaX;
                      wheelDeltaY = -e.deltaY;
                  }
              } else if ('wheelDeltaX' in e) {
                  wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                  wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
              } else if ('wheelDelta' in e) {
                  wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
              } else if ('detail' in e) {
                  wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
              } else {
                  return;
              }
  
              wheelDeltaX *= this.options.invertWheelDirection;
              wheelDeltaY *= this.options.invertWheelDirection;
  
              if (!this.hasVerticalScroll) {
                  wheelDeltaX = wheelDeltaY;
                  wheelDeltaY = 0;
              }
  
              if (this.options.snap) {
                  newX = this.currentPage.pageX;
                  newY = this.currentPage.pageY;
  
                  if (wheelDeltaX > 0) {
                      newX--;
                  } else if (wheelDeltaX < 0) {
                      newX++;
                  }
  
                  if (wheelDeltaY > 0) {
                      newY--;
                  } else if (wheelDeltaY < 0) {
                      newY++;
                  }
  
                  this.goToPage(newX, newY);
  
                  return;
              }
  
              newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
              newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
  
              this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
              this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
  
              if (newX > 0) {
                  newX = 0;
              } else if (newX < this.maxScrollX) {
                  newX = this.maxScrollX;
              }
  
              if (newY > 0) {
                  newY = 0;
              } else if (newY < this.maxScrollY) {
                  newY = this.maxScrollY;
              }
  
              this.scrollTo(newX, newY, 0);
  
  // INSERT POINT: _wheel
          },
  
          _initSnap : function () {
              this.currentPage = {};
  
              if (typeof this.options.snap == 'string') {
                  this.options.snap = this.scroller.querySelectorAll(this.options.snap);
              }
  
              this.on('refresh', function () {
                  var i     = 0, l,
                      m     = 0, n,
                      cx, cy,
                      x     = 0, y,
                      stepX = this.options.snapStepX || this.wrapperWidth,
                      stepY = this.options.snapStepY || this.wrapperHeight,
                      el;
  
                  this.pages = [];
  
                  if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                      return;
                  }
  
                  if (this.options.snap === true) {
                      cx = Math.round(stepX / 2);
                      cy = Math.round(stepY / 2);
  
                      while (x > -this.scrollerWidth) {
                          this.pages[i] = [];
                          l             = 0;
                          y             = 0;
  
                          while (y > -this.scrollerHeight) {
                              this.pages[i][l] = {
                                  x      : Math.max(x, this.maxScrollX),
                                  y      : Math.max(y, this.maxScrollY),
                                  width  : stepX,
                                  height : stepY,
                                  cx     : x - cx,
                                  cy     : y - cy
                              };
  
                              y -= stepY;
                              l++;
                          }
  
                          x -= stepX;
                          i++;
                      }
                  } else {
                      el = this.options.snap;
                      l  = el.length;
                      n  = -1;
  
                      for (; i < l; i++) {
                          if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                              m = 0;
                              n++;
                          }
  
                          if (!this.pages[m]) {
                              this.pages[m] = [];
                          }
  
                          x  = Math.max(-el[i].offsetLeft, this.maxScrollX);
                          y  = Math.max(-el[i].offsetTop, this.maxScrollY);
                          cx = x - Math.round(el[i].offsetWidth / 2);
                          cy = y - Math.round(el[i].offsetHeight / 2);
  
                          this.pages[m][n] = {
                              x      : x,
                              y      : y,
                              width  : el[i].offsetWidth,
                              height : el[i].offsetHeight,
                              cx     : cx,
                              cy     : cy
                          };
  
                          if (x > this.maxScrollX) {
                              m++;
                          }
                      }
                  }
  
                  this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
  
                  // Update snap threshold if needed
                  if (this.options.snapThreshold % 1 === 0) {
                      this.snapThresholdX = this.options.snapThreshold;
                      this.snapThresholdY = this.options.snapThreshold;
                  } else {
                      this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                      this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                  }
              });
  
              this.on('flick', function () {
                  var time = this.options.snapSpeed || Math.max(
                          Math.max(
                              Math.min(Math.abs(this.x - this.startX), 1000),
                              Math.min(Math.abs(this.y - this.startY), 1000)
                          ), 300);
  
                  this.goToPage(
                      this.currentPage.pageX + this.directionX,
                      this.currentPage.pageY + this.directionY,
                      time
                  );
              });
          },
  
          _nearestSnap : function (x, y) {
              if (!this.pages.length) {
                  return { x : 0, y : 0, pageX : 0, pageY : 0 };
              }
  
              var i = 0,
                  l = this.pages.length,
                  m = 0;
  
              // Check if we exceeded the snap threshold
              if (Math.abs(x - this.absStartX) < this.snapThresholdX &&
                  Math.abs(y - this.absStartY) < this.snapThresholdY) {
                  return this.currentPage;
              }
  
              if (x > 0) {
                  x = 0;
              } else if (x < this.maxScrollX) {
                  x = this.maxScrollX;
              }
  
              if (y > 0) {
                  y = 0;
              } else if (y < this.maxScrollY) {
                  y = this.maxScrollY;
              }
  
              for (; i < l; i++) {
                  if (x >= this.pages[i][0].cx) {
                      x = this.pages[i][0].x;
                      break;
                  }
              }
  
              l = this.pages[i].length;
  
              for (; m < l; m++) {
                  if (y >= this.pages[0][m].cy) {
                      y = this.pages[0][m].y;
                      break;
                  }
              }
  
              if (i == this.currentPage.pageX) {
                  i += this.directionX;
  
                  if (i < 0) {
                      i = 0;
                  } else if (i >= this.pages.length) {
                      i = this.pages.length - 1;
                  }
  
                  x = this.pages[i][0].x;
              }
  
              if (m == this.currentPage.pageY) {
                  m += this.directionY;
  
                  if (m < 0) {
                      m = 0;
                  } else if (m >= this.pages[0].length) {
                      m = this.pages[0].length - 1;
                  }
  
                  y = this.pages[0][m].y;
              }
  
              return {
                  x     : x,
                  y     : y,
                  pageX : i,
                  pageY : m
              };
          },
  
          goToPage : function (x, y, time, easing) {
              easing = easing || this.options.bounceEasing;
  
              if (x >= this.pages.length) {
                  x = this.pages.length - 1;
              } else if (x < 0) {
                  x = 0;
              }
  
              if (y >= this.pages[x].length) {
                  y = this.pages[x].length - 1;
              } else if (y < 0) {
                  y = 0;
              }
  
              var posX = this.pages[x][y].x,
                  posY = this.pages[x][y].y;
  
              time = time === undefined ? this.options.snapSpeed || Math.max(
                  Math.max(
                      Math.min(Math.abs(posX - this.x), 1000),
                      Math.min(Math.abs(posY - this.y), 1000)
                  ), 300) : time;
  
              this.currentPage = {
                  x     : posX,
                  y     : posY,
                  pageX : x,
                  pageY : y
              };
  
              this.scrollTo(posX, posY, time, easing);
          },
  
          next : function (time, easing) {
              var x = this.currentPage.pageX,
                  y = this.currentPage.pageY;
  
              x++;
  
              if (x >= this.pages.length && this.hasVerticalScroll) {
                  x = 0;
                  y++;
              }
  
              this.goToPage(x, y, time, easing);
          },
  
          prev : function (time, easing) {
              var x = this.currentPage.pageX,
                  y = this.currentPage.pageY;
  
              x--;
  
              if (x < 0 && this.hasVerticalScroll) {
                  x = 0;
                  y--;
              }
  
              this.goToPage(x, y, time, easing);
          },
  
          _initKeys : function (e) {
              // default key bindings
              var keys = {
                  pageUp   : 33,
                  pageDown : 34,
                  end      : 35,
                  home     : 36,
                  left     : 37,
                  up       : 38,
                  right    : 39,
                  down     : 40
              };
              var i;
  
              // if you give me characters I give you keycode
              if (typeof this.options.keyBindings == 'object') {
                  for (i in this.options.keyBindings) {
                      if (typeof this.options.keyBindings[i] == 'string') {
                          this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                      }
                  }
              } else {
                  this.options.keyBindings = {};
              }
  
              for (i in keys) {
                  this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
              }
  
              utils.addEvent(window, 'keydown', this);
  
              this.on('destroy', function () {
                  utils.removeEvent(window, 'keydown', this);
              });
          },
  
          _key : function (e) {
              if (!this.enabled) {
                  return;
              }
  
              var snap         = this.options.snap,	// we are using this alot, better to cache it
                  newX         = snap ? this.currentPage.pageX : this.x,
                  newY         = snap ? this.currentPage.pageY : this.y,
                  now          = utils.getTime(),
                  prevTime     = this.keyTime || 0,
                  acceleration = 0.250,
                  pos;
  
              if (this.options.useTransition && this.isInTransition) {
                  pos = this.getComputedPosition();
  
                  this._translate(Math.round(pos.x), Math.round(pos.y));
                  this.isInTransition = false;
              }
  
              this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
  
              switch (e.keyCode) {
                  case this.options.keyBindings.pageUp:
                      if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                          newX += snap ? 1 : this.wrapperWidth;
                      } else {
                          newY += snap ? 1 : this.wrapperHeight;
                      }
                      break;
                  case this.options.keyBindings.pageDown:
                      if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                          newX -= snap ? 1 : this.wrapperWidth;
                      } else {
                          newY -= snap ? 1 : this.wrapperHeight;
                      }
                      break;
                  case this.options.keyBindings.end:
                      newX = snap ? this.pages.length - 1 : this.maxScrollX;
                      newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                      break;
                  case this.options.keyBindings.home:
                      newX = 0;
                      newY = 0;
                      break;
                  case this.options.keyBindings.left:
                      newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                      break;
                  case this.options.keyBindings.up:
                      newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                      break;
                  case this.options.keyBindings.right:
                      newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                      break;
                  case this.options.keyBindings.down:
                      newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                      break;
                  default:
                      return;
              }
  
              if (snap) {
                  this.goToPage(newX, newY);
                  return;
              }
  
              if (newX > 0) {
                  newX                 = 0;
                  this.keyAcceleration = 0;
              } else if (newX < this.maxScrollX) {
                  newX                 = this.maxScrollX;
                  this.keyAcceleration = 0;
              }
  
              if (newY > 0) {
                  newY                 = 0;
                  this.keyAcceleration = 0;
              } else if (newY < this.maxScrollY) {
                  newY                 = this.maxScrollY;
                  this.keyAcceleration = 0;
              }
  
              this.scrollTo(newX, newY, 0);
  
              this.keyTime = now;
          },
  
          _animate    : function (destX, destY, duration, easingFn) {
              var that      = this,
                  startX    = this.x,
                  startY    = this.y,
                  startTime = utils.getTime(),
                  destTime  = startTime + duration;
  
              function step() {
                  var now = utils.getTime(),
                      newX, newY,
                      easing;
  
                  if (now >= destTime) {
                      that.isAnimating = false;
                      that._translate(destX, destY);
  
                      if (!that.resetPosition(that.options.bounceTime)) {
                          that._execEvent('scrollEnd');
                      }
  
                      return;
                  }
  
                  now    = ( now - startTime ) / duration;
                  easing = easingFn(now);
                  newX   = ( destX - startX ) * easing + startX;
                  newY   = ( destY - startY ) * easing + startY;
                  that._translate(newX, newY);
  
                  if (that.isAnimating) {
                      rAF(step);
                  }
              }
  
              this.isAnimating = true;
              step();
          },
          handleEvent : function (e) {
              switch (e.type) {
                  case 'touchstart':
                  case 'pointerdown':
                  case 'MSPointerDown':
                  case 'mousedown':
                      this._start(e);
                      break;
                  case 'touchmove':
                  case 'pointermove':
                  case 'MSPointerMove':
                  case 'mousemove':
                      this._move(e);
                      break;
                  case 'touchend':
                  case 'pointerup':
                  case 'MSPointerUp':
                  case 'mouseup':
                  case 'touchcancel':
                  case 'pointercancel':
                  case 'MSPointerCancel':
                  case 'mousecancel':
                      this._end(e);
                      break;
                  case 'orientationchange':
                  case 'resize':
                      this._resize();
                      break;
                  case 'transitionend':
                  case 'webkitTransitionEnd':
                  case 'oTransitionEnd':
                  case 'MSTransitionEnd':
                      this._transitionEnd(e);
                      break;
                  case 'wheel':
                  case 'DOMMouseScroll':
                  case 'mousewheel':
                      this._wheel(e);
                      break;
                  case 'keydown':
                      this._key(e);
                      break;
                  case 'click':
                      if (this.enabled && !e._constructed) {
                          e.preventDefault();
                          e.stopPropagation();
                      }
                      break;
              }
          }
      };
      function createDefaultScrollbar(direction, interactive, type) {
          var scrollbar = document.createElement('div'),
              indicator = document.createElement('div');
  
          if (type === true) {
              scrollbar.style.cssText = 'position:absolute;z-index:9999';
              indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
          }
  
          indicator.className = 'iScrollIndicator';
  
          if (direction == 'h') {
              if (type === true) {
                  scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                  indicator.style.height = '100%';
              }
              scrollbar.className = 'iScrollHorizontalScrollbar';
          } else {
              if (type === true) {
                  scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                  indicator.style.width = '100%';
              }
              scrollbar.className = 'iScrollVerticalScrollbar';
          }
  
          scrollbar.style.cssText += ';overflow:hidden';
  
          if (!interactive) {
              scrollbar.style.pointerEvents = 'none';
          }
  
          scrollbar.appendChild(indicator);
  
          return scrollbar;
      }
  
      function Indicator(scroller, options) {
          this.wrapper        = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
          this.wrapperStyle   = this.wrapper.style;
          this.indicator      = this.wrapper.children[0];
          this.indicatorStyle = this.indicator.style;
          this.scroller       = scroller;
  
          this.options = {
              listenX           : true,
              listenY           : true,
              interactive       : false,
              resize            : true,
              defaultScrollbars : false,
              shrink            : false,
              fade              : false,
              speedRatioX       : 0,
              speedRatioY       : 0
          };
  
          for (var i in options) {
              this.options[i] = options[i];
          }
  
          this.sizeRatioX = 1;
          this.sizeRatioY = 1;
          this.maxPosX    = 0;
          this.maxPosY    = 0;
  
          if (this.options.interactive) {
              if (!this.options.disableTouch) {
                  utils.addEvent(this.indicator, 'touchstart', this);
                  utils.addEvent(window, 'touchend', this);
              }
              if (!this.options.disablePointer) {
                  utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                  utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
              }
              if (!this.options.disableMouse) {
                  utils.addEvent(this.indicator, 'mousedown', this);
                  utils.addEvent(window, 'mouseup', this);
              }
          }
  
          if (this.options.fade) {
              this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
              var durationProp                         = utils.style.transitionDuration;
              if (!durationProp) {
                  return;
              }
              this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
              // remove 0.0001ms
              var self = this;
              if (utils.isBadAndroid) {
                  rAF(function () {
                      if (self.wrapperStyle[durationProp] === '0.0001ms') {
                          self.wrapperStyle[durationProp] = '0s';
                      }
                  });
              }
              this.wrapperStyle.opacity = '0';
          }
      }
  
      Indicator.prototype = {
          handleEvent : function (e) {
              switch (e.type) {
                  case 'touchstart':
                  case 'pointerdown':
                  case 'MSPointerDown':
                  case 'mousedown':
                      this._start(e);
                      break;
                  case 'touchmove':
                  case 'pointermove':
                  case 'MSPointerMove':
                  case 'mousemove':
                      this._move(e);
                      break;
                  case 'touchend':
                  case 'pointerup':
                  case 'MSPointerUp':
                  case 'mouseup':
                  case 'touchcancel':
                  case 'pointercancel':
                  case 'MSPointerCancel':
                  case 'mousecancel':
                      this._end(e);
                      break;
              }
          },
  
          destroy : function () {
              if (this.options.fadeScrollbars) {
                  clearTimeout(this.fadeTimeout);
                  this.fadeTimeout = null;
              }
              if (this.options.interactive) {
                  utils.removeEvent(this.indicator, 'touchstart', this);
                  utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                  utils.removeEvent(this.indicator, 'mousedown', this);
  
                  utils.removeEvent(window, 'touchmove', this);
                  utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                  utils.removeEvent(window, 'mousemove', this);
  
                  utils.removeEvent(window, 'touchend', this);
                  utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
                  utils.removeEvent(window, 'mouseup', this);
              }
  
              if (this.options.defaultScrollbars) {
                  this.wrapper.parentNode.removeChild(this.wrapper);
              }
          },
  
          _start : function (e) {
              var point = e.touches ? e.touches[0] : e;
  
              e.preventDefault();
              e.stopPropagation();
  
              this.transitionTime();
  
              this.initiated  = true;
              this.moved      = false;
              this.lastPointX = point.pageX;
              this.lastPointY = point.pageY;
  
              this.startTime = utils.getTime();
  
              if (!this.options.disableTouch) {
                  utils.addEvent(window, 'touchmove', this);
              }
              if (!this.options.disablePointer) {
                  utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
              }
              if (!this.options.disableMouse) {
                  utils.addEvent(window, 'mousemove', this);
              }
  
              this.scroller._execEvent('beforeScrollStart');
          },
  
          _move : function (e) {
              var point     = e.touches ? e.touches[0] : e,
                  deltaX, deltaY,
                  newX, newY,
                  timestamp = utils.getTime();
  
              if (!this.moved) {
                  this.scroller._execEvent('scrollStart');
              }
  
              this.moved = true;
  
              deltaX          = point.pageX - this.lastPointX;
              this.lastPointX = point.pageX;
  
              deltaY          = point.pageY - this.lastPointY;
              this.lastPointY = point.pageY;
  
              newX = this.x + deltaX;
              newY = this.y + deltaY;
  
              this._pos(newX, newY);
  
  // INSERT POINT: indicator._move
  
              e.preventDefault();
              e.stopPropagation();
          },
  
          _end : function (e) {
              if (!this.initiated) {
                  return;
              }
  
              this.initiated = false;
  
              e.preventDefault();
              e.stopPropagation();
  
              utils.removeEvent(window, 'touchmove', this);
              utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
              utils.removeEvent(window, 'mousemove', this);
  
              if (this.scroller.options.snap) {
                  var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
  
                  var time = this.options.snapSpeed || Math.max(
                          Math.max(
                              Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                              Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                          ), 300);
  
                  if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                      this.scroller.directionX  = 0;
                      this.scroller.directionY  = 0;
                      this.scroller.currentPage = snap;
                      this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                  }
              }
  
              if (this.moved) {
                  this.scroller._execEvent('scrollEnd');
              }
          },
  
          transitionTime : function (time) {
              time             = time || 0;
              var durationProp = utils.style.transitionDuration;
              if (!durationProp) {
                  return;
              }
  
              this.indicatorStyle[durationProp] = time + 'ms';
  
              if (!time && utils.isBadAndroid) {
                  this.indicatorStyle[durationProp] = '0.0001ms';
                  // remove 0.0001ms
                  var self = this;
                  rAF(function () {
                      if (self.indicatorStyle[durationProp] === '0.0001ms') {
                          self.indicatorStyle[durationProp] = '0s';
                      }
                  });
              }
          },
  
          transitionTimingFunction : function (easing) {
              this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
          },
  
          refresh : function () {
              this.transitionTime();
  
              if (this.options.listenX && !this.options.listenY) {
                  this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
              } else if (this.options.listenY && !this.options.listenX) {
                  this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
              } else {
                  this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
              }
  
              if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                  utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                  utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
  
                  if (this.options.defaultScrollbars && this.options.customStyle) {
                      if (this.options.listenX) {
                          this.wrapper.style.right = '8px';
                      } else {
                          this.wrapper.style.bottom = '8px';
                      }
                  }
              } else {
                  utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                  utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
  
                  if (this.options.defaultScrollbars && this.options.customStyle) {
                      if (this.options.listenX) {
                          this.wrapper.style.right = '2px';
                      } else {
                          this.wrapper.style.bottom = '2px';
                      }
                  }
              }
  
              var r = this.wrapper.offsetHeight;	// force refresh
  
              if (this.options.listenX) {
                  this.wrapperWidth = this.wrapper.clientWidth;
                  if (this.options.resize) {
                      this.indicatorWidth       = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                      this.indicatorStyle.width = this.indicatorWidth + 'px';
                  } else {
                      this.indicatorWidth = this.indicator.clientWidth;
                  }
  
                  this.maxPosX = this.wrapperWidth - this.indicatorWidth;
  
                  if (this.options.shrink == 'clip') {
                      this.minBoundaryX = -this.indicatorWidth + 8;
                      this.maxBoundaryX = this.wrapperWidth - 8;
                  } else {
                      this.minBoundaryX = 0;
                      this.maxBoundaryX = this.maxPosX;
                  }
  
                  this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
              }
  
              if (this.options.listenY) {
                  this.wrapperHeight = this.wrapper.clientHeight;
                  if (this.options.resize) {
                      this.indicatorHeight       = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                      this.indicatorStyle.height = this.indicatorHeight + 'px';
                  } else {
                      this.indicatorHeight = this.indicator.clientHeight;
                  }
  
                  this.maxPosY = this.wrapperHeight - this.indicatorHeight;
  
                  if (this.options.shrink == 'clip') {
                      this.minBoundaryY = -this.indicatorHeight + 8;
                      this.maxBoundaryY = this.wrapperHeight - 8;
                  } else {
                      this.minBoundaryY = 0;
                      this.maxBoundaryY = this.maxPosY;
                  }
  
                  this.maxPosY    = this.wrapperHeight - this.indicatorHeight;
                  this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
              }
  
              this.updatePosition();
          },
  
          updatePosition : function () {
              var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                  y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
  
              if (!this.options.ignoreBoundaries) {
                  if (x < this.minBoundaryX) {
                      if (this.options.shrink == 'scale') {
                          this.width                = Math.max(this.indicatorWidth + x, 8);
                          this.indicatorStyle.width = this.width + 'px';
                      }
                      x = this.minBoundaryX;
                  } else if (x > this.maxBoundaryX) {
                      if (this.options.shrink == 'scale') {
                          this.width                = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                          this.indicatorStyle.width = this.width + 'px';
                          x                         = this.maxPosX + this.indicatorWidth - this.width;
                      } else {
                          x = this.maxBoundaryX;
                      }
                  } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                      this.width                = this.indicatorWidth;
                      this.indicatorStyle.width = this.width + 'px';
                  }
  
                  if (y < this.minBoundaryY) {
                      if (this.options.shrink == 'scale') {
                          this.height                = Math.max(this.indicatorHeight + y * 3, 8);
                          this.indicatorStyle.height = this.height + 'px';
                      }
                      y = this.minBoundaryY;
                  } else if (y > this.maxBoundaryY) {
                      if (this.options.shrink == 'scale') {
                          this.height                = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                          this.indicatorStyle.height = this.height + 'px';
                          y                          = this.maxPosY + this.indicatorHeight - this.height;
                      } else {
                          y = this.maxBoundaryY;
                      }
                  } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                      this.height                = this.indicatorHeight;
                      this.indicatorStyle.height = this.height + 'px';
                  }
              }
  
              this.x = x;
              this.y = y;
  
              if (this.scroller.options.useTransform) {
                  this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
              } else {
                  this.indicatorStyle.left = x + 'px';
                  this.indicatorStyle.top  = y + 'px';
              }
          },
  
          _pos : function (x, y) {
              if (x < 0) {
                  x = 0;
              } else if (x > this.maxPosX) {
                  x = this.maxPosX;
              }
  
              if (y < 0) {
                  y = 0;
              } else if (y > this.maxPosY) {
                  y = this.maxPosY;
              }
  
              x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
              y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
  
              this.scroller.scrollTo(x, y);
          },
  
          fade : function (val, hold) {
              if (hold && !this.visible) {
                  return;
              }
  
              clearTimeout(this.fadeTimeout);
              this.fadeTimeout = null;
  
              var time  = val ? 250 : 500,
                  delay = val ? 0 : 300;
  
              val = val ? '1' : '0';
  
              this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
  
              this.fadeTimeout = setTimeout((function (val) {
                  this.wrapperStyle.opacity = val;
                  this.visible              = +val;
              }).bind(this, val), delay);
          }
      };
  
      IScroll.utils = utils;
  
      if (typeof module != 'undefined' && module.exports) {
          module.exports = IScroll;
      } else if (typeof define == 'function' && define.amd) {
          define(function () { return IScroll; });
      } else {
          window.IScroll = IScroll;
      }
  
  })(window, document, Math);
  
  /*!
   * Isotope PACKAGED v3.0.1
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * http://isotope.metafizzy.co
   * Copyright 2016 Metafizzy
   */
  
  !function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
  return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
  /*!
  Waypoints - 4.0.1
  Copyright © 2011-2016 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  */
  (function() {
    'use strict'
  
    var keyCounter = 0
    var allWaypoints = {}
  
    /* http://imakewebthings.com/waypoints/api/waypoint */
    function Waypoint(options) {
      if (!options) {
        throw new Error('No options passed to Waypoint constructor')
      }
      if (!options.element) {
        throw new Error('No element option passed to Waypoint constructor')
      }
      if (!options.handler) {
        throw new Error('No handler option passed to Waypoint constructor')
      }
  
      this.key = 'waypoint-' + keyCounter
      this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
      this.element = this.options.element
      this.adapter = new Waypoint.Adapter(this.element)
      this.callback = options.handler
      this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
      this.enabled = this.options.enabled
      this.triggerPoint = null
      this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      })
      this.context = Waypoint.Context.findOrCreateByElement(this.options.context)
  
      if (Waypoint.offsetAliases[this.options.offset]) {
        this.options.offset = Waypoint.offsetAliases[this.options.offset]
      }
      this.group.add(this)
      this.context.add(this)
      allWaypoints[this.key] = this
      keyCounter += 1
    }
  
    /* Private */
    Waypoint.prototype.queueTrigger = function(direction) {
      this.group.queueTrigger(this, direction)
    }
  
    /* Private */
    Waypoint.prototype.trigger = function(args) {
      if (!this.enabled) {
        return
      }
      if (this.callback) {
        this.callback.apply(this, args)
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy */
    Waypoint.prototype.destroy = function() {
      this.context.remove(this)
      this.group.remove(this)
      delete allWaypoints[this.key]
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable */
    Waypoint.prototype.disable = function() {
      this.enabled = false
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable */
    Waypoint.prototype.enable = function() {
      this.context.refresh()
      this.enabled = true
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/next */
    Waypoint.prototype.next = function() {
      return this.group.next(this)
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/previous */
    Waypoint.prototype.previous = function() {
      return this.group.previous(this)
    }
  
    /* Private */
    Waypoint.invokeAll = function(method) {
      var allWaypointsArray = []
      for (var waypointKey in allWaypoints) {
        allWaypointsArray.push(allWaypoints[waypointKey])
      }
      for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
        allWaypointsArray[i][method]()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy-all */
    Waypoint.destroyAll = function() {
      Waypoint.invokeAll('destroy')
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable-all */
    Waypoint.disableAll = function() {
      Waypoint.invokeAll('disable')
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable-all */
    Waypoint.enableAll = function() {
      Waypoint.Context.refreshAll()
      for (var waypointKey in allWaypoints) {
        allWaypoints[waypointKey].enabled = true
      }
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/refresh-all */
    Waypoint.refreshAll = function() {
      Waypoint.Context.refreshAll()
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-height */
    Waypoint.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-width */
    Waypoint.viewportWidth = function() {
      return document.documentElement.clientWidth
    }
  
    Waypoint.adapters = []
  
    Waypoint.defaults = {
      context: window,
      continuous: true,
      enabled: true,
      group: 'default',
      horizontal: false,
      offset: 0
    }
  
    Waypoint.offsetAliases = {
      'bottom-in-view': function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      'right-in-view': function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
      }
    }
  
    window.Waypoint = Waypoint
  }())
  ;(function() {
    'use strict'
  
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  
    var keyCounter = 0
    var contexts = {}
    var Waypoint = window.Waypoint
    var oldWindowLoad = window.onload
  
    /* http://imakewebthings.com/waypoints/api/context */
    function Context(element) {
      this.element = element
      this.Adapter = Waypoint.Adapter
      this.adapter = new this.Adapter(element)
      this.key = 'waypoint-context-' + keyCounter
      this.didScroll = false
      this.didResize = false
      this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }
      this.waypoints = {
        vertical: {},
        horizontal: {}
      }
  
      element.waypointContextKey = this.key
      contexts[element.waypointContextKey] = this
      keyCounter += 1
      if (!Waypoint.windowContext) {
        Waypoint.windowContext = true
        Waypoint.windowContext = new Context(window)
      }
  
      this.createThrottledScrollHandler()
      this.createThrottledResizeHandler()
    }
  
    /* Private */
    Context.prototype.add = function(waypoint) {
      var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
      this.waypoints[axis][waypoint.key] = waypoint
      this.refresh()
    }
  
    /* Private */
    Context.prototype.checkEmpty = function() {
      var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
      var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
      var isWindow = this.element == this.element.window
      if (horizontalEmpty && verticalEmpty && !isWindow) {
        this.adapter.off('.waypoints')
        delete contexts[this.key]
      }
    }
  
    /* Private */
    Context.prototype.createThrottledResizeHandler = function() {
      var self = this
  
      function resizeHandler() {
        self.handleResize()
        self.didResize = false
      }
  
      this.adapter.on('resize.waypoints', function() {
        if (!self.didResize) {
          self.didResize = true
          Waypoint.requestAnimationFrame(resizeHandler)
        }
      })
    }
  
    /* Private */
    Context.prototype.createThrottledScrollHandler = function() {
      var self = this
      function scrollHandler() {
        self.handleScroll()
        self.didScroll = false
      }
  
      this.adapter.on('scroll.waypoints', function() {
        if (!self.didScroll || Waypoint.isTouch) {
          self.didScroll = true
          Waypoint.requestAnimationFrame(scrollHandler)
        }
      })
    }
  
    /* Private */
    Context.prototype.handleResize = function() {
      Waypoint.Context.refreshAll()
    }
  
    /* Private */
    Context.prototype.handleScroll = function() {
      var triggeredGroups = {}
      var axes = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left'
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up'
        }
      }
  
      for (var axisKey in axes) {
        var axis = axes[axisKey]
        var isForward = axis.newScroll > axis.oldScroll
        var direction = isForward ? axis.forward : axis.backward
  
        for (var waypointKey in this.waypoints[axisKey]) {
          var waypoint = this.waypoints[axisKey][waypointKey]
          if (waypoint.triggerPoint === null) {
            continue
          }
          var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
          var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
          var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
          var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
          if (crossedForward || crossedBackward) {
            waypoint.queueTrigger(direction)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
        }
      }
  
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
  
      this.oldScroll = {
        x: axes.horizontal.newScroll,
        y: axes.vertical.newScroll
      }
    }
  
    /* Private */
    Context.prototype.innerHeight = function() {
      /*eslint-disable eqeqeq */
      if (this.element == this.element.window) {
        return Waypoint.viewportHeight()
      }
      /*eslint-enable eqeqeq */
      return this.adapter.innerHeight()
    }
  
    /* Private */
    Context.prototype.remove = function(waypoint) {
      delete this.waypoints[waypoint.axis][waypoint.key]
      this.checkEmpty()
    }
  
    /* Private */
    Context.prototype.innerWidth = function() {
      /*eslint-disable eqeqeq */
      if (this.element == this.element.window) {
        return Waypoint.viewportWidth()
      }
      /*eslint-enable eqeqeq */
      return this.adapter.innerWidth()
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-destroy */
    Context.prototype.destroy = function() {
      var allWaypoints = []
      for (var axis in this.waypoints) {
        for (var waypointKey in this.waypoints[axis]) {
          allWaypoints.push(this.waypoints[axis][waypointKey])
        }
      }
      for (var i = 0, end = allWaypoints.length; i < end; i++) {
        allWaypoints[i].destroy()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-refresh */
    Context.prototype.refresh = function() {
      /*eslint-disable eqeqeq */
      var isWindow = this.element == this.element.window
      /*eslint-enable eqeqeq */
      var contextOffset = isWindow ? undefined : this.adapter.offset()
      var triggeredGroups = {}
      var axes
  
      this.handleScroll()
      axes = {
        horizontal: {
          contextOffset: isWindow ? 0 : contextOffset.left,
          contextScroll: isWindow ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left',
          offsetProp: 'left'
        },
        vertical: {
          contextOffset: isWindow ? 0 : contextOffset.top,
          contextScroll: isWindow ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up',
          offsetProp: 'top'
        }
      }
  
      for (var axisKey in axes) {
        var axis = axes[axisKey]
        for (var waypointKey in this.waypoints[axisKey]) {
          var waypoint = this.waypoints[axisKey][waypointKey]
          var adjustment = waypoint.options.offset
          var oldTriggerPoint = waypoint.triggerPoint
          var elementOffset = 0
          var freshWaypoint = oldTriggerPoint == null
          var contextModifier, wasBeforeScroll, nowAfterScroll
          var triggeredBackward, triggeredForward
  
          if (waypoint.element !== waypoint.element.window) {
            elementOffset = waypoint.adapter.offset()[axis.offsetProp]
          }
  
          if (typeof adjustment === 'function') {
            adjustment = adjustment.apply(waypoint)
          }
          else if (typeof adjustment === 'string') {
            adjustment = parseFloat(adjustment)
            if (waypoint.options.offset.indexOf('%') > - 1) {
              adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
            }
          }
  
          contextModifier = axis.contextScroll - axis.contextOffset
          waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
          wasBeforeScroll = oldTriggerPoint < axis.oldScroll
          nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
          triggeredBackward = wasBeforeScroll && nowAfterScroll
          triggeredForward = !wasBeforeScroll && !nowAfterScroll
  
          if (!freshWaypoint && triggeredBackward) {
            waypoint.queueTrigger(axis.backward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
          else if (!freshWaypoint && triggeredForward) {
            waypoint.queueTrigger(axis.forward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
          else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
            waypoint.queueTrigger(axis.forward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
        }
      }
  
      Waypoint.requestAnimationFrame(function() {
        for (var groupKey in triggeredGroups) {
          triggeredGroups[groupKey].flushTriggers()
        }
      })
  
      return this
    }
  
    /* Private */
    Context.findOrCreateByElement = function(element) {
      return Context.findByElement(element) || new Context(element)
    }
  
    /* Private */
    Context.refreshAll = function() {
      for (var contextId in contexts) {
        contexts[contextId].refresh()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-find-by-element */
    Context.findByElement = function(element) {
      return contexts[element.waypointContextKey]
    }
  
    window.onload = function() {
      if (oldWindowLoad) {
        oldWindowLoad()
      }
      Context.refreshAll()
    }
  
  
    Waypoint.requestAnimationFrame = function(callback) {
      var requestFn = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        requestAnimationFrameShim
      requestFn.call(window, callback)
    }
    Waypoint.Context = Context
  }())
  ;(function() {
    'use strict'
  
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint
    }
  
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint
    }
  
    var groups = {
      vertical: {},
      horizontal: {}
    }
    var Waypoint = window.Waypoint
  
    /* http://imakewebthings.com/waypoints/api/group */
    function Group(options) {
      this.name = options.name
      this.axis = options.axis
      this.id = this.name + '-' + this.axis
      this.waypoints = []
      this.clearTriggerQueues()
      groups[this.axis][this.name] = this
    }
  
    /* Private */
    Group.prototype.add = function(waypoint) {
      this.waypoints.push(waypoint)
    }
  
    /* Private */
    Group.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      }
    }
  
    /* Private */
    Group.prototype.flushTriggers = function() {
      for (var direction in this.triggerQueues) {
        var waypoints = this.triggerQueues[direction]
        var reverse = direction === 'up' || direction === 'left'
        waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
        for (var i = 0, end = waypoints.length; i < end; i += 1) {
          var waypoint = waypoints[i]
          if (waypoint.options.continuous || i === waypoints.length - 1) {
            waypoint.trigger([direction])
          }
        }
      }
      this.clearTriggerQueues()
    }
  
    /* Private */
    Group.prototype.next = function(waypoint) {
      this.waypoints.sort(byTriggerPoint)
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      var isLast = index === this.waypoints.length - 1
      return isLast ? null : this.waypoints[index + 1]
    }
  
    /* Private */
    Group.prototype.previous = function(waypoint) {
      this.waypoints.sort(byTriggerPoint)
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      return index ? this.waypoints[index - 1] : null
    }
  
    /* Private */
    Group.prototype.queueTrigger = function(waypoint, direction) {
      this.triggerQueues[direction].push(waypoint)
    }
  
    /* Private */
    Group.prototype.remove = function(waypoint) {
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      if (index > -1) {
        this.waypoints.splice(index, 1)
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/first */
    Group.prototype.first = function() {
      return this.waypoints[0]
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/last */
    Group.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
    }
  
    /* Private */
    Group.findOrCreate = function(options) {
      return groups[options.axis][options.name] || new Group(options)
    }
  
    Waypoint.Group = Group
  }())
  ;(function() {
    'use strict'
  
    var $ = window.jQuery
    var Waypoint = window.Waypoint
  
    function JQueryAdapter(element) {
      this.$element = $(element)
    }
  
    $.each([
      'innerHeight',
      'innerWidth',
      'off',
      'offset',
      'on',
      'outerHeight',
      'outerWidth',
      'scrollLeft',
      'scrollTop'
    ], function(i, method) {
      JQueryAdapter.prototype[method] = function() {
        var args = Array.prototype.slice.call(arguments)
        return this.$element[method].apply(this.$element, args)
      }
    })
  
    $.each([
      'extend',
      'inArray',
      'isEmptyObject'
    ], function(i, method) {
      JQueryAdapter[method] = $[method]
    })
  
    Waypoint.adapters.push({
      name: 'jquery',
      Adapter: JQueryAdapter
    })
    Waypoint.Adapter = JQueryAdapter
  }())
  ;(function() {
    'use strict'
  
    var Waypoint = window.Waypoint
  
    function createExtension(framework) {
      return function() {
        var waypoints = []
        var overrides = arguments[0]
  
        if (framework.isFunction(arguments[0])) {
          overrides = framework.extend({}, arguments[1])
          overrides.handler = arguments[0]
        }
  
        this.each(function() {
          var options = framework.extend({}, overrides, {
            element: this
          })
          if (typeof options.context === 'string') {
            options.context = framework(this).closest(options.context)[0]
          }
          waypoints.push(new Waypoint(options))
        })
  
        return waypoints
      }
    }
  
    if (window.jQuery) {
      window.jQuery.fn.waypoint = createExtension(window.jQuery)
    }
    if (window.Zepto) {
      window.Zepto.fn.waypoint = createExtension(window.Zepto)
    }
  }())
  ;
  !function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},f=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var f=e.getY(),a=Math.max(0,o)-f,l=(new Date).getTime();i=i||Math.min(Math.abs(a),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-l)/i),o=Math.max(0,Math.floor(f+a*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},a=function(t,e,n){f(c(t),e,n)},l=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,l=e.getHeight(),s=e.getY(),d=s+l;c(t)<s||r+o>l?a(t,n,i):u+o>d?f(u-l+o,n,i):i&&i()},s=function(t,n,o,i){f(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:a,toY:f,intoView:l,center:s,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="scrollRestoration"in history;r&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){r&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var u=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(r)try{history.replaceState({zenscrollY:i.getY()},"")}catch(t){}var n=e.getAttribute("href")||"";if(0===n.indexOf("#")&&!u.test(e.className)){var o=0,c=document.getElementById(n.substring(1));if("#"!==n){if(!c)return;o=i.getTopOf(c)}t.preventDefault();var f=function(){window.location=n},a=i.setup().edgeOffset;a&&(o=Math.max(0,o-a),f=function(){history.pushState(null,"",n)}),i.toY(o,null,f)}}},!1)}return i});
  /**
      * Jayson Hunter website
      * Author: Jayson Hunter
      * Date: June 2017
      * Version: 1.0.0
  */
  
  
  var JH = (function(){
      var config = {
              window: {
                  scrollTop: 0,
                  scrollY: 0
              }
          },
          $body,
          $backToTop,
          $blazy,
          $isotopeContainer,
          $pageHeader,
          $navToggle,
          $offCanvasNav,
          $dataFilter,
          $navCarousel,
          $navCarouselSlides,
          $quoteCarouselSlides,
          $hero,
          $scrollDown,
          scrollThreshold = 500,
          scrollDifference = 0,
          windowScrollTop,
          windowOldScrollTop = 0,
          isAnimating = false,
          newLocation = '',
          firstLoad = false,
          BACK_TO_TOP_SELECTOR = '.js-back-to-top',
          HERO_SELECTOR = '.js-hero',
          SCROLL_DOWN_SELECTOR = '.js-scroll-down',
          PAGE_HEADER_SELECTOR = '.js-page-header',
          CAROUSEL_DRAG_SELECTOR = '.js-carousel-drag',
          NAV_CAROUSEL_SELECTOR = '.js-nav-carousel',
          NAV_CAROUSEL_SLIDES_SELECTOR = '.js-nav-carousel-slides',
          QUOTE_CAROUSEL_CONTAINER_SELECTOR = '.js-quote-carousel-container',
          NAV_TOGGLED_CLASS = 'has-nav-open',
          NAV_TOGGLE_SELECTOR = '.js-nav-toggle'
          OFF_CANVAS_NAV_SELECTOR = '.js-off-canvas-nav',
          DATA_FILTER_SELECTOR = '.js-data-filter',
          DATA_FILTER_ACTIVE_CLASS = 'is-active',
          ISOTOPE_GRID_SELECTOR = '.js-isotope-grid';
  
  
      var animationClasses = '',
          animationEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
  
      /*
       * Starts any clocks using the user's local time
       * From: cssanimation.rocks/clocks
       */
      var _initClock = function(clockID, hoursOffset) {
          var $clock,
              date,
              seconds,
              minutes,
              hours;
  
        // Get the local time using JS
        var date = new Date;
  
        date.setHours(date.getHours() + hoursOffset);
  
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();
  
        // Create an object with each hand and it's angle in degrees
        var hands = [
          {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
          },
          {
            hand: 'minutes',
            angle: (minutes * 6)
          },
          {
            hand: 'seconds',
            angle: (seconds * 6)
          }
        ];
  
        $clock = $(clockID);
  
        if ($clock.length > 0) {
            // Loop through each of these hands to set their angle
            for (var j = 0; j < hands.length; j++) {
              var elements = $clock.find('.' + hands[j].hand);
              for (var k = 0; k < elements.length; k++) {
                  elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                  elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                  // If this is a minute hand, note the seconds position (to calculate minute position later)
                  if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                  }
              }
            }
          }
      }
  
       function onResize() {
          _setHeroHeight();
      }
  
  
      function onScroll() {
          windowScrollTop = $(window).scrollTop();
          windowScrollTop = windowScrollTop < 0 ? 0 : windowScrollTop;
  
          scrollDifference = Math.abs(windowScrollTop - windowOldScrollTop);
  
          if (scrollDifference > scrollThreshold) {
  
  
              if (windowScrollTop > windowOldScrollTop ) {
                  $backToTop ? $backToTop.addClass('is-visible') : '';
                  //$pageHeader.addClass('is-hidden')
                  //$pageHeader.addClass('has-background');
              }
              else {
                  //$pageHeader.removeClass('is-hidden');
              }
  
              windowOldScrollTop = windowScrollTop;
          }
  
          if (windowScrollTop < scrollThreshold) {
              $backToTop ? $backToTop.removeClass('is-visible') : '';
              //$pageHeader.removeClass('has-background');
          }
  
      }
  
  
      var _setupHero = function() {
          $hero = $(HERO_SELECTOR);
  
          if ($hero.length > 0) {
              _setHeroHeight();
  
              $scrollDown = $(SCROLL_DOWN_SELECTOR);
  
              if($scrollDown.length > 0) {
                  $scrollDown.on('click tap', function(e) {
                      e.preventDefault();
  
                      zenscroll.toY($hero.height(), 1000);
  
                      // $('.inner-wrapper').velocity("scroll", {
                      //     offset: $hero.height(),
                      //     duration: 1000
                      // }, "easeInSine")
                  })
              }
          }
      }
  
      function _setHeroHeight() {
          var screenHeight,
              pageHeaderHeight;
  
          screenHeight = $(window).height();
          pageHeaderHeight = $pageHeader.height();
  
          if ($hero.length > 0) {
              if ($hero.attr('data-resize')) {
                  $hero.css('height', (screenHeight - pageHeaderHeight) + 'px');
              }
          }
      }
  
  
      var _setupOffCanvasNav = function() {
          var $caseStudyImages,
              $carouselDrag;
  
          $offCanvasNav = $(OFF_CANVAS_NAV_SELECTOR);
          $navCarousel = $(NAV_CAROUSEL_SELECTOR);
  
          if($offCanvasNav) {
              $navToggle = $(NAV_TOGGLE_SELECTOR);
              $carouselDrag = $offCanvasNav.find(CAROUSEL_DRAG_SELECTOR);
  
              if($navToggle.length >0) {
                  if($navCarousel.length > 0) {
  
                      _resizeNavCarousel();
  
                      navIScroll = new IScroll(NAV_CAROUSEL_SELECTOR, {
                          eventPassthrough: true,
                          scrollX: true,
                          scrollY: false,
                          useTransition: false,
                          momentum: true,
                          snapSpeed: 600,
                          mouseWheel: false,
                          click: true,
                          tap: true,
                          snap: '.slide'
                      });
  
                      navIScroll.on('scrollStart', function() {
                          $carouselDrag.addClass('animated');
                      });
  
                      $navCarousel.on('click tap', '.card', function (e) {
                          e.preventDefault();
  
                          var cardURL = $(e.target).parents('.card-link').attr('href');
  
                         window.location = cardURL;
                      });
  
                      $('.js-nav-carousel-prev').on('click tap', function(e) {
                          e.preventDefault();
                          navIScroll.prev();
                      });
  
                      $('.js-nav-carousel-next').on('click tap', function(e) {
                          e.preventDefault();
                          navIScroll.next();
                          $carouselDrag.addClass('animated');
                      })
  
  
                      $caseStudyImages = new Blazy({
                          selector: '.js-nav-carousel-slides .b-lazy',
                          container: '.js-nav-carousel-slides'
                      });
                  };
  
  
                  $navToggle.on('click tap', function(e) {
                      e.preventDefault();
  
                      if ($(this).hasClass('is-active')) {
                          $navToggle.removeClass('is-active');
                          $body.removeClass(NAV_TOGGLED_CLASS);
                      }
                      else {
                          $navToggle.addClass('is-active');
                          $body.addClass(NAV_TOGGLED_CLASS);
                          //navIScroll.scrollTo(0,0);
                          $carouselDrag.removeClass('animated');
                      }
                  });
  
              };
          }
      }
  
  
      var _resizeNavCarousel = function() {
          $navCarouselSlides = $(NAV_CAROUSEL_SLIDES_SELECTOR);
  
          $carouselSlides = $navCarouselSlides.find('.slide');
          $firstSlide = $carouselSlides.first();
  
          totalSlides = $carouselSlides.length;
          slideWidth = $firstSlide.width();
  
          $navCarouselSlides.css('width',totalSlides * slideWidth );
      }
  
  
      // Lazy load responsive images
      // https://github.com/dinbror/blazy
      var _setupBlazy = function() {
          $blazy = new Blazy({
              selector: '.b-lazy',
              container: '.inner-wrapper',
              success: function(ele){
                  // When each image loads, layout isotope items
                  if($isotopeContainer) {
                    //_reLayout();
                  };
              },
              breakpoints: [{
                  width: 599, // max-width
                      src: 'data-src-small'
                  },
                  {
                  width: 1200, // max-width
                      src: 'data-src-medium'
                  }
              ],
               offset: 100, // The number of pixels below the fold to trigger the image load
               validateDelay: 100
          });
      }
  
  
      var _setupIsotope = function() {
          $isotopeContainer = $(ISOTOPE_GRID_SELECTOR);
  
          if ($isotopeContainer.length > 0) {
  
              $isotopeContainer.isotope({
                  itemSelector: '.isotope-item',
                  percentPosition: true,
                  layoutMode: 'masonry',
                  masonry: {
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer'
                  }
              }).on( 'arrangeComplete', $blazy.revalidate );
          }
      }
  
  
      // Fire the isotope layout
      var _reLayout = function() {
        // Add a small timeout as some images weren't loading without it.
        setTimeout(function(){
          // Layout Isotope items
          $isotopeContainer.isotope('layout');
        }, 300);
      }
  
  
      var _setupDataFilter = function() {
          var filterValue;
  
          $dataFilter = $(DATA_FILTER_SELECTOR);
  
          $dataFilter.on( 'click tap', '.filter-link', function(e) {
  
              e.preventDefault();
  
              $dataFilter.find('.filter-link').removeClass(DATA_FILTER_ACTIVE_CLASS);
              $(this).addClass(DATA_FILTER_ACTIVE_CLASS);
  
            filterValue = $(this).attr('data-filter-key');
  
            filterValue = filterValue.length > 0 ? '.' + filterValue : '*';
  
            $isotopeContainer.isotope({ filter: filterValue });
  
          });
      }
  
  
      var _setupQuoteCarousel = function() {
          var $quoteCarousel,
              quoteCarouselSwiper,
              $prevNav,
              $nextNav;
  
          $quoteCarousel = $(QUOTE_CAROUSEL_CONTAINER_SELECTOR);
  
          if ($quoteCarousel.length > 0) {
  
              $('.js-quote-carousel-wrapper').slick({
                  arrows: true,
                  dots: true,
                  infinite: false,
                  prevArrow: '.js-quote-carousel-nav-prev',
                  nextArrow: '.js-quote-carousel-nav-next'
              });
          }
      }
  
  
  
      var _controlPlayVideoInView = function() {
          var videoWaypoints,
              $vimeoVideos,
              $vimeoObj;
  
          $html5Videos = $('video');
  
          if ($html5Videos.length > 0) {
              $html5Videos.each( function () {
                  $(this).waypoint( function() {
                      $(this.element)[0].play();
                  },
                  {
                      offset: '100%'
                  })
              });
          };
  
  
  
          // var vimeoVideos = new Waypoint.Inview({
          //   element: $('.vimeo-video'),
          //   enter: function(direction) {
  
          //   },
          //   entered: function(direction) {
          //     $vimeoVideo = new Vimeo.Player( $(this.element).attr('id'));
  
          //     console.log($vimeoVideo);
  
          //     $vimeoVideo.play();
          //   },
          //   exit: function(direction) {
  
          //     },
          //   exited: function(direction) {
          //     $vimeoVideo.pause();
          //   }
          // });
  
      }
  
  
      var _fitVideos = function() {
          $(".videoWrapper").fitVids();
      }
  
      var _addFastClick = function() {
          new FastClick(document.body);
      }
  
  
      var _setupAnimations = function() {
  
          var $animateCssElements;
  
          // Animate CSS styles
          $animateCssElements = $('.animate-on-scroll');
  
  
          if ($animateCssElements.length > 0) {
              $animateCssElements.each( function () {
                  animationClasses = $(this).attr('data-animation-class');
  
                  $(this).waypoint( function() {
  
                      $(this.element).addClass(animationClasses).one(animationEvents, function() {
                          $(this.element).removeClass(animationClasses);
                      });
                  },
                  {
                      offset: '90%'
                  })
              });
          }
      }
  
  
      var _setupCardAnimation = function() {
          var $cards = $('.card-image');
  
          $cards.hover(onOver,onOut);
  
          function onOver(){
              $(this)
                  .velocity( {
                      scale: 1.1
                  },
                  {
                      duration: 300
                  } );
          }
  
          function onOut(){
              $(this)
                  .velocity("stop")
                  .velocity("reverse");
          }
      }
  
  
      var _initMap = function() {
          var $mapObj,
              map,
              myLatLng = {lat: 51.450694, lng: -0.197919},
              marker,
              styledMapType,
              UISettings;
  
          styledMapType = new google.maps.StyledMapType(
              [
                  {
                      "featureType": "all",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#ffffff"
                          }
                      ]
                  },
                  {
                      "featureType": "all",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "visibility": "on"
                          },
                          {
                              "color": "#424b5b"
                          },
                          {
                              "weight": 2
                          },
                          {
                              "gamma": "1"
                          }
                      ]
                  },
                  {
                      "featureType": "all",
                      "elementType": "labels.icon",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "weight": 0.6
                          },
                          {
                              "color": "#545b6b"
                          },
                          {
                              "gamma": "0"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#545b6b"
                          },
                          {
                              "gamma": "1"
                          },
                          {
                              "weight": "10"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#666c7b"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.park",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#545b6b"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#424a5b"
                          },
                          {
                              "lightness": "0"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#666c7b"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "color": "#2e3546"
                          }
                      ]
                  }
              ]
          );
  
          $mapObj = $('#map');
  
          if($mapObj.length > 0) {
  
              map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 10,
                mapTypeControl: false,
                gestureHandling: 'none',
                mapTypeControlOptions: {
                  mapTypeIds: ['styled_map']
                }
              });
  
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
  
              marker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                  animation: google.maps.Animation.DROP
                });
  
              marker.setMap(map);
          }
      }
  
      var _setupBackToTop = function() {
  
          $backToTop = $(BACK_TO_TOP_SELECTOR);
  
  
          $backToTop.on('click tap', function(e) {
              e.preventDefault();
  
              zenscroll.toY(0, 1500);
  
              // $("body").velocity("scroll", {
              //     offset: 0,
              //     mobileHA: true,
              //     duration: 2000
              // })
          })
  
      }
  
      var init = function() {
          var onWindowResize,
              onWindowScroll;
  
          config.window.scrollY = window.scrollY;
  
  
          $(window).scrollTop(0);
  
  
          $body = $('body');
  
          $pageHeader = $(PAGE_HEADER_SELECTOR);
  
          $('a').on('click tap', function () {
            this.blur();
          });
  
          _setupBlazy();
  
          _setupHero();
  
          _setupIsotope();
          //_setupQuoteCarousel();
          _setupDataFilter();
          //_controlPlayVideoInView();
          //_setupCardAnimation();
  
          _initClock('#london-clock', 0);
  
          //_fitVideos();
  
  
  
          //_setupHistoryAnimation();
  
          window.setTimeout(function(){
              _setupOffCanvasNav();
              _setupAnimations();
          }, 1500);
  
          _addFastClick();
  
          _setupBackToTop();
  
          onWindowScroll = _.debounce(onScroll, 300);
          $(window).on('scroll', onWindowScroll);
  
          onWindowResize = _.debounce(onResize, 300);
          $(window).on('resize', onWindowResize);
  
      }
  
  
  
      return {
          init: init,
          initMap: _initMap
      };
  
  })();
  
  
  $(document).ready(function() {
      JH.init();
  })