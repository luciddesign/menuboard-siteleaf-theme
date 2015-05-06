!function(t){function e(){}function i($){function t(t){t.prototype.option||(t.prototype.option=function(t){$.isPlainObject(t)&&(this.options=$.extend(!0,this.options,t))})}function i(t,e){$.fn[t]=function(i){if("string"==typeof i){for(var r=n.call(arguments,1),s=0,a=this.length;a>s;s++){var u=this[s],h=$.data(u,t);if(h)if($.isFunction(h[i])&&"_"!==i.charAt(0)){var p=h[i].apply(h,r);if(void 0!==p)return p}else o("no such method '"+i+"' for "+t+" instance");else o("cannot call methods on "+t+" prior to initialization; attempted to call '"+i+"'")}return this}return this.each(function(){var n=$.data(this,t);n?(n.option(i),n._init()):(n=new e(this,i),$.data(this,t,n))})}}if($){var o="undefined"==typeof console?e:function(t){console.error(t)};return $.bridget=function(e,n){t(n),i(e,n)},$.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function e(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function s(t){var e=this._getEvents(),i,n;if(t instanceof RegExp){i={};for(n in e)e.hasOwnProperty(n)&&t.test(n)&&(i[n]=e[n])}else i=e[t]||(e[t]=[]);return i},n.flattenListeners=function a(t){var e=[],i;for(i=0;i<t.length;i+=1)e.push(t[i].listener);return e},n.getListenersAsObject=function u(t){var e=this.getListeners(t),i;return e instanceof Array&&(i={},i[t]=e),i||e},n.addListener=function h(t,i){var n=this.getListenersAsObject(t),o="object"==typeof i,r;for(r in n)n.hasOwnProperty(r)&&-1===e(n[r],i)&&n[r].push(o?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function p(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function f(t){return this.getListeners(t),this},n.defineEvents=function d(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function l(t,i){var n=this.getListenersAsObject(t),o,r;for(r in n)n.hasOwnProperty(r)&&(o=e(n[r],i),-1!==o&&n[r].splice(o,1));return this},n.off=i("removeListener"),n.addListeners=function c(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function m(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function y(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function g(t){var e=typeof t,i=this._getEvents(),n;if("string"===e)delete i[t];else if(t instanceof RegExp)for(n in i)i.hasOwnProperty(n)&&t.test(n)&&delete i[n];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function v(t,e){var i=this.getListenersAsObject(t),n,o,r,s;for(r in i)if(i.hasOwnProperty(r))for(o=i[r].length;o--;)n=i[r][o],n.once===!0&&this.removeListener(t,n.listener),s=n.listener.apply(this,e||[]),s===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},n.trigger=i("emitEvent"),n.emit=function E(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function b(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function z(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function _(){return this._events||(this._events={})},t.noConflict=function x(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:o.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t,e){function i(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function n(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function r(e){function n(){if(!h){h=!0;var n=t.getComputedStyle;if(p=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function e(i){var n=t(i);return n||s("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),n}}(),f=e("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[f]="border-box";var r=document.body||document.documentElement;r.appendChild(o);var a=p(o);d=200===i(a.width),r.removeChild(o)}}}function r(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=p(t);if("none"===e.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var s=r.isBorderBox=!(!f||!e[f]||"border-box"!==e[f]),h=0,l=a.length;l>h;h++){var c=a[h],m=e[c];m=u(t,m);var y=parseFloat(m);r[c]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,E=r.marginLeft+r.marginRight,b=r.marginTop+r.marginBottom,z=r.borderLeftWidth+r.borderRightWidth,_=r.borderTopWidth+r.borderBottomWidth,x=s&&d,L=i(e.width);L!==!1&&(r.width=L+(x?0:g+z));var T=i(e.height);return T!==!1&&(r.height=T+(x?0:v+_)),r.innerWidth=r.width-(g+z),r.innerHeight=r.height-(v+_),r.outerWidth=r.width+E,r.outerHeight=r.height+b,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var n=e.style,o=n.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),n.left=i,i=n.pixelLeft,n.left=o,s&&(r.left=s),i}var h=!1,p,f,d;return r}var s="undefined"==typeof console?n:function(t){console.error(t)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],r):"object"==typeof exports?module.exports=r(require("desandro-get-style-property")):t.getSize=r(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||n()}function n(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var n=s[t];n()}}function o(o){return"complete"===r.readyState?n():(o.bind(r,"DOMContentLoaded",i),o.bind(r,"readystatechange",i),o.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],o):"object"==typeof exports?module.exports=o(require("eventie")):t.docReady=o(t.eventie)}(window),function(t){function e(t,e){return t[r](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){i(t);for(var n=t.parentNode.querySelectorAll(e),o=0,r=n.length;r>o;o++)if(n[o]===t)return!0;return!1}function o(t,n){return i(t),e(t,n)}var r=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,n=e.length;n>i;i++){var o=e[i],r=o+"MatchesSelector";if(t[r])return r}}(),s;if(r){var a=document.createElement("div"),u=e(a,"div");s=u?e:o}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):"object"==typeof exports?module.exports=s:window.matchesSelector=s}(Element.prototype),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function t(e,i,n){var o={};o.extend=function(t,e){for(var i in e)t[i]=e[i];return t},o.modulo=function(t,e){return(t%e+e)%e};var r=Object.prototype.toString;o.isArray=function(t){return"[object Array]"==r.call(t)},o.makeArray=function(t){var e=[];if(o.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1},o.removeFrom=function(t,e){var i=o.indexOf(t,e);-1!=i&&t.splice(i,1)},o.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function a(t){return t instanceof HTMLElement}:function u(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},o.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),o.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,n(t,e))return t},o.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},o.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.filterFindElements=function(t,e){t=o.makeArray(t);for(var i=[],r=0,s=t.length;s>r;r++){var a=t[r];if(o.isElement(a))if(e){n(a,e)&&i.push(a);for(var u=a.querySelectorAll(e),h=0,p=u.length;p>h;h++)i.push(u[h])}else i.push(a)}return i},o.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},o.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=e.console;return o.htmlInit=function(t,n){i(function(){for(var i=o.toDashed(n),r=document.querySelectorAll(".js-"+i),a="data-"+i+"-options",u=0,h=r.length;h>u;u++){var p=r[u],f=p.getAttribute(a),d;try{d=f&&JSON.parse(f)}catch(l){s&&s.error("Error parsing "+a+" on "+p.nodeName.toLowerCase()+(p.id?"#"+p.id:"")+": "+l);continue}var c=new t(p,d),m=e.jQuery;m&&m.data(p,n,c)}})},o}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EventEmitter,t.getSize,t.getStyleProperty,t.fizzyUIUtils))}(window,function e(t,i,n,o,r){function s(t){for(var e in t)return!1;return e=null,!0}function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=t.getComputedStyle,h=u?function(t){return u(t,null)}:function(t){return t.currentStyle},p=o("transition"),f=o("transform"),d=p&&f,l=!!o("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[p],m=["transform","transition","transitionDuration","transitionProperty"],y=function(){for(var t={},e=0,i=m.length;i>e;e++){var n=m[e],r=o(n);r&&r!==n&&(t[n]=r)}return t}();r.extend(a.prototype,i.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=y[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=h(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var s=this.layout.size;o-=i?s.paddingLeft:s.paddingRight,r-=n?s.paddingTop:s.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={},n=e.isOriginLeft?"paddingLeft":"paddingRight",o=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",s=this.position.x+t[n];s=e.percentPosition&&!e.isHorizontal?s/t.width*100+"%":s+"px",i[o]=s,i[r]="";var a=e.isOriginTop?"paddingTop":"paddingBottom",u=e.isOriginTop?"top":"bottom",h=e.isOriginTop?"bottom":"top",p=this.position.y+t[a];p=e.percentPosition&&e.isHorizontal?p/t.height*100+"%":p+"px",i[u]=p,i[h]="",this.css(i),this.emitEvent("layout",[this])};var g=l?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={},p=this.layout.options;a=p.isOriginLeft?a:-a,u=p.isOriginTop?u:-u,h.transform=g(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=d?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var v=f&&r.toDashed(f)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:v,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[p?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var E={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=E[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],s(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var n=e.onEnd[i];n.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var b={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(b)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!p||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},a.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},a.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},a.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r,s){return e(t,i,n,o,r,s)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.eventie,t.EventEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function i(t,e,n,o,r,s){function a(t,e){var i=r.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(e);var n=++f;this.element.outlayerGUID=n,d[n]=this,this._create(),this.options.isInitLayout&&this.layout()}var u=t.console,h=t.jQuery,p=function(){},f=0,d={};return a.namespace="outlayer",a.Item=s,a.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},r.extend(a.prototype,n.prototype),a.prototype.option=function(t){r.extend(this.options,t)},a.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),r.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},a.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},a.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},a.prototype._filterFindItemElements=function(t){return r.filterFindElements(t,this.options.itemSelector)},a.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},a.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},a.prototype._init=a.prototype.layout,a.prototype._resetLayout=function(){this.getSize()},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype._getMeasurement=function(t,e){var i=this.options[t],n;i?("string"==typeof i?n=this.element.querySelector(i):r.isElement(i)&&(n=i),this[t]=n?o(n)[e]:i):this[t]=0},a.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},a.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},a.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e||r.isLayoutInstant,i.push(s)}this._processLayoutQueue(i)}},a.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},a.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},a.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},a.prototype._postLayout=function(){this.resizeContainer()},a.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},a.prototype._getContainerSize=p,a.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},a.prototype._emitCompleteOnItems=function(t,e){function i(){o.emitEvent(t+"Complete",[e])}function n(){s++,s===r&&i()}var o=this,r=e.length;if(!e||!r)return void i();for(var s=0,a=0,u=e.length;u>a;a++){var h=e[a];h.once(t,n)}},a.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},a.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},a.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},a.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];r.removeFrom(this.stamps,n),this.unignore(n)}},a.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=r.makeArray(t)):void 0},a.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},a.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},a.prototype._manageStamp=p,a.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=o(t),r={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return r},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},a.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},a.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},a.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},a.prototype.needsResizeLayout=function(){var t=o(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},a.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},a.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},a.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},a.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.reveal()}},a.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.hide()}},a.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},a.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},a.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},a.prototype.getItems=function(t){t=r.makeArray(t);for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],s=this.getItem(o);s&&e.push(s)}return e},a.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var i=0,n=e.length;n>i;i++){var o=e[i];o.remove(),r.removeFrom(this.items,o)}},a.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize();var o=this.element.outlayerGUID;delete d[o],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},a.data=function(t){t=r.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&d[e]},a.create=function(t,e){function i(){a.apply(this,arguments)}return Object.create?i.prototype=Object.create(a.prototype):r.extend(i.prototype,a.prototype),i.prototype.constructor=i,i.defaults=r.extend({},a.defaults),r.extend(i.defaults,e),i.prototype.settings={},i.namespace=t,i.data=a.data,i.Item=function n(){s.apply(this,arguments)},i.Item.prototype=new s,r.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i},a.Item=s,a}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):t.Masonry=e(t.Outlayer,t.getSize,t.fizzyUIUtils)}(window,function n(t,e,i){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i.indexOf(r,s),u={x:this.columnWidth*a,y:s},h=s+t.size.outerHeight,p=this.cols+1-r.length,f=0;p>f;f++)this.colYs[a+f]=h;return u},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,h=s;a>=h;h++)this.colYs[h]=Math.max(u,this.colYs[h])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},n});