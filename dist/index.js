module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),a=null,s=0,c=[],u=n(5);function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(h(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=s++;n=a||(a=b(e)),o=g.bind(null,n,c,!1),r=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){d(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return l(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&l(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".s-notes--header {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.25); }\n  .s-notes--header .title {\n    flex-grow: 1;\n    line-height: 30px;\n    text-align: left; }\n  .s-notes--header svg {\n    line-height: 1;\n    vertical-align: middle; }\n  .s-notes--header button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    transition: all .2s linear;\n    padding: 5px;\n    color: rgba(255, 255, 255, 0.75);\n    outline: none; }\n    .s-notes--header button:hover, .s-notes--header button:focus {\n      background-color: rgba(0, 0, 0, 0.25);\n      outline: none; }\n    .s-notes--header button:disabled {\n      cursor: not-allowed; }\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".s-notes--text {\n  padding: 10px;\n  font-size: 12px;\n  text-align: left;\n  width: 100%;\n  min-height: 100%; }\n  .s-notes--text:empty::before {\n    color: rgba(255, 255, 255, 0.75);\n    content: 'Add your notes...'; }\n",""])},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"@keyframes shadowanim {\n  0% {\n    box-shadow: 0px 0px 0px 25px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 15px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; }\n  20% {\n    opacity: 0.9; }\n  50% {\n    opacity: 1; }\n  70% {\n    opacity: 0.9; }\n  100% {\n    box-shadow: 0px 0px 0px 0px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; } }\n\n.s-notes--colors {\n  padding: 0;\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  .s-notes--colors__color {\n    display: flex;\n    flex-grow: 1;\n    flex-basis: 20%;\n    padding: 1px; }\n    .s-notes--colors__color button {\n      display: block;\n      cursor: pointer;\n      border-radius: 50%;\n      border: none;\n      box-shadow: 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15);\n      padding: 0 0 100%;\n      opacity: 1;\n      flex-grow: 1;\n      transition: all 0.4s linear;\n      outline: none; }\n      .s-notes--colors__color button:hover, .s-notes--colors__color button:focus {\n        box-shadow: 0px 0px 0px 10px inset rgba(0, 0, 0, 0.15); }\n    .s-notes--colors__color--selected button {\n      animation-name: shadowanim;\n      animation-duration: 2s;\n      animation-iteration-count: 100;\n      opacity: .75; }\n",""])},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".s-notes--note {\n  position: absolute;\n  left: 0;\n  top: 0;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);\n  background-color: #bfaa40; }\n  .s-notes--note__body {\n    resize: both;\n    overflow: auto;\n    height: 200px;\n    width: 200px; }\n",""])},function(t,e,n){var o=n(13);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".s-notes {\n  text-align: center;\n  background-color: #282c34;\n  color: white;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden; }\n  .s-notes *, .s-notes *::before, .s-notes *::after {\n    box-sizing: border-box; }\n",""])},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=r.a.createElement,a=function(){for(var t=[],e=0;e<360;e+=18)t.push(e);return t}(),s=function(t){return t?t.replace(/(?:\r\n|\r|\n)/g,"<br>"):""},c=function(t){return localStorage.getItem("react-sticky-notes")?JSON.parse(localStorage.getItem("react-sticky-notes")):[{text:"",position:{x:0,y:0},color:t[Math.floor(Math.random()*t.length)],limitX:0,limitY:0}]};n(3);var u=function(t){var e=t.index,n=t.prefix,o=t.addItem,r=t.deleteItem,a=t.setToggle,s=t.position,c=t.count,u=t.title,l=t.targetRef;return i("div",{className:"".concat(n,"--header")},[i("button",{key:"note-header-button-1",onClick:function(){return o(e,{position:s})}},"add"),i("span",{key:"note-header-button-2",className:"title",ref:l},u),i("button",{key:"note-header-button-3",onClick:function(){return a(e+1)}},"menu"),i("button",{key:"note-header-button-4",disabled:1===c,onClick:function(){return r(e)}},"delete")])};n(6);var l=function(t){var e=t.index,n=t.prefix,o=t.text,r=t.updateItem;return i("div",{className:"".concat(n,"--text"),placeholder:"react-hooks",contentEditable:"true",onBlur:function(t){return r(e,{title:String(t.target.innerText).substr(0,10),text:s(t.target.innerText)})},dangerouslySetInnerHTML:{__html:o}})};n(8);var f=function(t){var e=t.index,n=t.prefix,o=t.color,r=t.colorCodes,a=t.setColor;return i("div",{className:"".concat(n,"--colors")},r.map(function(t){return i("div",{className:"".concat(n,"--colors__color ").concat(o===t?n+"--colors__color--selected":""),key:t},i("button",{name:t,onClick:function(){return a(e,t)},style:{backgroundColor:"hsl(".concat(t,",50%, 50%)")}}))}))};function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"currentX",0),d(this,"currentY",0),d(this,"initialX",0),d(this,"initialY",0),d(this,"xOffset",0),d(this,"yOffset",0),d(this,"active",!1),d(this,"onClick",function(){e.beingToForwarding()}),d(this,"onMouseMove",function(t){if(e.active){t.preventDefault(),"touchmove"===t.type?(e.currentX=t.touches[0].clientX-e.initialX,e.currentY=t.touches[0].clientY-e.initialY):(e.currentX=t.clientX-e.initialX,e.currentY=t.clientY-e.initialY);var n=e.options.element.parentElement.offsetWidth-e.options.element.offsetWidth,o=e.options.element.parentElement.offsetHeight-e.options.element.offsetHeight;e.currentX<0&&(e.currentX=0),e.currentY<0&&(e.currentY=0),e.currentX>n&&(e.currentX=n),e.currentY>o&&(e.currentY=o),e.xOffset=e.currentX,e.yOffset=e.currentY,e.setTranslate(e.currentX,e.currentY)}}),d(this,"onMouseDown",function(t){"touchstart"===t.type?(e.initialX=t.touches[0].clientX-e.xOffset,e.initialY=t.touches[0].clientY-e.yOffset):(e.initialX=t.clientX-e.xOffset,e.initialY=t.clientY-e.yOffset),e.active=!0,e.beingToForwarding(),document.addEventListener("mousemove",e.onMouseMove,null),document.addEventListener("mouseup",e.onMouseUp,null)}),d(this,"onMouseUp",function(t){e.initialX=e.currentX,e.initialY=e.currentY,e.active=!1,e.options.onDragComplete&&e.options.onDragComplete.call(e,{x:e.initialX,y:e.initialY}),document.removeEventListener("mousemove",e.onMouseMove),document.removeEventListener("mouseup",e.onMouseUp,null)})}return function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(t,[{key:"init",value:function(t){this.options=t,t.position&&(this.xOffset=t.position.x,this.yOffset=t.position.y,this.setTranslate(t.position.x,t.position.y),this.beingToForwarding()),t.onInit&&t.onInit({limitX:t.element.parentElement.offsetWidth-t.element.offsetWidth,limitY:t.element.parentElement.offsetHeight-t.element.offsetHeight})}},{key:"beingToForwarding",value:function(){var t=this.options.element;t&&([].forEach.call(t.parentElement.children,function(t){t.style.zIndex=0}),t.style.zIndex=1)}},{key:"setTranslate",value:function(t,e){this.options.element&&(this.options.element.style.transform="translate3d(".concat(t,"px,").concat(e,"px,0)"))}}]),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),x(g(n=function(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?g(t):e}(this,m(e).call(this,t))),"draggable",null),x(g(n),"onMouseDown",function(t){t.currentTarget===n.state.options.target?(n.draggable.onMouseDown(t),n.setState({active:!0})):n.draggable.beingToForwarding()}),x(g(n),"onMouseUp",function(t){n.state.active&&n.draggable.onMouseUp(t)}),n.state={active:!1,options:{}},n.element=r.a.createRef(),n.draggable=new b,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,r.a.Component),function(t,e,n){e&&h(t.prototype,e),n&&h(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this,e=this.element?this.element.current:null,n={element:e,target:this.props.target?this.props.target.current:e,position:this.props.position?{x:this.props.position.x,y:this.props.position.y}:{x:0,y:0},onDragComplete:this.props.onDragComplete,onInit:this.props.onInit};this.setState({options:n},function(){t.draggable.init(n)})}},{key:"render",value:function(){return i("div",{className:this.props.className,style:this.props.style,ref:this.element,onClick:this.onClick,onMouseUp:this.onMouseUp,onMouseDown:this.onMouseDown},this.props.children)}}]),e}();n(10);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var I=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=S(this,_(e).call(this,t))).targetRef=r.a.createRef(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,r.a.Component),function(t,e,n){e&&j(t.prototype,e),n&&j(t,n)}(e,[{key:"render",value:function(){var t=this.props,e=t.index,n=t.count,o=t.toggle,r=t.setToggle,a=t.prefix,s=t.title,c=t.text,p=t.color,d=t.setColor,b=t.addItem,y=t.updateItem,h=t.deleteItem,m=t.colorCodes,g=t.position;return i(w,{className:"".concat(a,"--note"),position:g,onDragComplete:function(t){return y(e,{position:t})},onInit:function(t){return y(e,t)},style:{backgroundColor:"hsl(".concat(p,",50%, 50%)")}},[i(u,{key:"note-header",targetRef:this.targetRef,index:e,prefix:a,addItem:b,deleteItem:h,setToggle:r,position:g,count:n,title:s}),i("div",{key:"note-body",className:"".concat(a,"--note__body"),style:{backgroundColor:o===e+1?"#ffffff":""}},o===e+1&&m?i(f,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({key:"note-menu",colorCodes:m,updateItem:y,index:e,prefix:a,color:p,setColor:d},"colorCodes",m)):i(l,{key:"note-text",index:e,prefix:a,text:c,updateItem:y}))])}}]),e}();n(12);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=r.a.createElement,X=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),U(T(t=function(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?T(t):e}(this,E(e).call(this))),"setToggle",function(e){t.setState({toggle:t.state.toggle!==e&&e})}),U(T(t),"setColor",function(e,n){t.setToggle(!1),t.props.updateItem(e,{color:n})}),t.state={toggle:!1},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,r.a.Component),function(t,e,n){e&&P(t.prototype,e),n&&P(t,n)}(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.prefix,o=e.items,r=e.addItem,i=e.updateItem,a=e.deleteItem,s=e.colorCodes,c=e.width,u=e.height;return R("div",{className:n,style:{width:c,height:u}},o?o.map(function(e,c){return R(I,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){U(t,e,n[e])})}return t}({},e,{count:o.length,key:c,prefix:n,index:c,addItem:r,updateItem:i,deleteItem:a,colorCodes:s,toggle:t.state.toggle,setToggle:t.setToggle,setColor:t.setColor}),null)}):null)}}]),e}();function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){L(t,e,n[e])})}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t,e){var n=t.items;switch(e.type){case"add":n.push(Y({},e.payload));break;case"update":n=n.map(function(t,n){return n===e.payload.index?Y({},t,e.payload):t});break;case"delete":n.splice(e.payload.index,1);break;default:n=t.items}return localStorage.setItem("react-sticky-notes",JSON.stringify(n)),{items:n}};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){J(t,e,n[e])})}return t}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var q=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),J(H(t=function(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?H(t):e}(this,F(e).call(this))),"dispatch",function(e){var n=e.type,o=e.payload;t.setState(N(t.state,{type:n,payload:o}))}),J(H(t),"addItem",function(e,n){var o=n.position,r={color:a[Math.floor(Math.random()*a.length)],text:"",position:o?{x:o.x+24,y:o.y+24}:{x:0,y:0}};t.dispatch({type:"add",payload:A({},r)})}),J(H(t),"updateItem",function(e,n){t.dispatch({type:"update",payload:A({index:e},n)})}),J(H(t),"deleteItem",function(e){t.dispatch({type:"delete",payload:{index:e}})}),t.state={items:c(a)},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,r.a.Component),function(t,e,n){e&&B(t.prototype,e),n&&B(t,n)}(e,[{key:"render",value:function(){var t=this.props,e=t.width,n=t.height;return i(X,A({},this.state,{prefix:"s-notes",width:e,height:n,addItem:this.addItem,updateItem:this.updateItem,deleteItem:this.deleteItem,colorCodes:a}),null)}}]),e}();e.default=q}]);