!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("presentation-dom"),require("presentation-view")):"function"==typeof define&&define.amd?define("presentation-indicators",["presentation-dom","presentation-view"],t):"object"==typeof exports?exports["presentation-indicators"]=t(require("presentation-dom"),require("presentation-view")):e["presentation-indicators"]=t(e["presentation-dom"],e["presentation-view"])}(this,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";r.r(t),r.d(t,"INDICATOR_MODE_INDETERMINATE",(function(){return o})),r.d(t,"INDICATOR_MODE_DETERMINATE",(function(){return n})),r.d(t,"INDICATOR_MODE_DEFAULT",(function(){return i})),r.d(t,"ProgressIndicator",(function(){return a}));const n="determinate",o="indeterminate",i=o;var s=r(1),u=r(0);class d extends s.View{constructor(e){e||(e={}),super(e),e.mode&&e.mode===o?this._mode=o:e.mode&&e.mode===n?this._mode=n:this._mode=i,this.template='<div class=""></div>'}async render(){return await super.render()}async remove(){return await super.remove()}setInProgress(){u.Dom.addClass(this.el,"inprogress");const e=u.Dom.selector(this.el);e&&u.Dom.addClass(e.childNodes[0],this._mode)}isInprogress(){return u.Dom.containsClass(this.el,"inprogress")}isComplete(){return!this.isInprogress()}setComplete(){u.Dom.removeClass(this.el,"inprogress");const e=u.Dom.selector(this.el);e&&u.Dom.removeClass(e.childNodes[0],this._mode)}get mode(){return this._mode}}var a=d}])}));
//# sourceMappingURL=presentation-indicators.js.map