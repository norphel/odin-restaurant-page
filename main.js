(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},772:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),d=new URL(t(819),t.b),l=new URL(t(224),t.b),p=a()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&display=swap);"]);var u=c()(d),m=c()(l);p.push([n.id,"body {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2rem;\n    flex-wrap: wrap;\n}\n.home {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n.home:hover {\n    cursor: pointer;\n}\n.logo {\n    background-image: url("+u+");\n    width: 8rem;\n    height: 8rem;\n    border-radius: 50%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;\n}\nh1,\n.about p span {\n    font-size: 2.5rem;\n    font-family: 'DynaPuff', sans-serif;\n    background: linear-gradient(#250707, #b72828);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}\nnav {\n    display: flex;\n    gap: 2rem;\n    margin-right: 2rem;\n    align-items: flex-end;\n}\nnav h2:hover {\n    cursor: pointer;\n}\nh2 {\n    font-family: 'DynaPuff', sans-serif;\n    font-weight: 300;\n    text-align: center;\n}\n\n\nmain {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n.intro {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n.hero-text {\n    font-weight: 100;\n    font-size: 3.2rem;\n    width: 30rem;\n    height: 15rem;\n    background: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);\n    font-family: 'DynaPuff', sans-serif;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}\n.samples {\n    width: 32rem;\n    height: 20rem;\n    background: url("+m+");\n    background-size: contain;\n    background-repeat: no-repeat;\n    border-radius: 2rem;\n    margin-right: 2rem;\n}\n\n.about h2 {\n    font-size: 2rem;\n}\n.about > div {\n    display: flex;\n    justify-content: space-around;\n}\n.about > div > div {\n    width: 50%;\n    font-size: 1.2rem;\n    padding: 0 1rem;\n}\n.about p span {\n    font-size: 1.2rem;\n}\n\n.menus {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));\n    gap: 2rem;\n    justify-items: center;\n}\n.card {\n    width: 18rem;\n    min-height: 12rem;\n    border-radius: 1rem; \n    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);\n    box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;\n    position: relative;\n}\n.card h3 {\n    text-align: center;\n    margin: 0;\n    padding: 0.5rem;\n    font-size: 1.3rem;\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\n    font-family: 'DynaPuff', sans-serif;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 100;\n}\n.description {\n    padding-left: 1rem;\n    padding-bottom: 1rem;\n    margin-right: 40%;\n}\n.item-photo {\n    --size: 8rem;\n    width: var(--size);\n    height: var(--size);\n    outline: 1px solid black;\n    border-radius: 50%;\n    position: absolute;\n    top: calc(100% - var(--size) + 1rem);\n    left: calc(100% - var(--size) + 1rem);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}",""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},819:(n,e,t)=>{n.exports=t.p+"6d94028baaa2eddadcea.png"},224:(n,e,t)=>{n.exports=t.p+"01590adb0b7be4a9ab74.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(772),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(735),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,function(){document.body.appendChild(function(){const n=document.createElement("header"),e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("logo");const r=document.createElement("h1");r.textContent="alchi kitchen",e.appendChild(t),e.appendChild(r);const o=document.createElement("nav"),i=document.createElement("h2"),a=document.createElement("h2");return i.textContent="Menu",a.textContent="Contact",o.appendChild(i),o.appendChild(a),n.appendChild(e),n.appendChild(o),n}());const n=document.createElement("main");document.body.appendChild(n),function(){const n=document.querySelector("main"),e=document.createElement("div");e.classList.add("intro");const t=document.createElement("p");t.classList.add("hero-text"),t.textContent="Traditional Ladakhi Cuisine with a Modern Twist!";const r=document.createElement("div");r.classList.add("samples"),e.appendChild(t),e.appendChild(r);const o=document.createElement("div");o.classList.add("about");const i=document.createElement("h2");i.textContent="About";const a=document.createElement("div"),s=document.createElement("div"),c=document.createElement("p");c.innerHTML='<span>alchi kitchen</span> was founded by chef <chef style="font-weight: bold">Nilza Angmo</chef> in the year 2016 in the village of Alchi which is situated around 60 kilometers from Leh district of Ladakh.',s.appendChild(c);const d=document.createElement("img");d.setAttribute("src","../src/assets/chef.png"),d.setAttribute("alt","the chef/founder of alchi kitchen"),a.appendChild(s),a.appendChild(d),o.appendChild(i),o.appendChild(a),n.appendChild(e),n.appendChild(o)}()}()})()})();