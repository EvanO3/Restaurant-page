(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"*{\n    padding:0px;\n    margin:0px;\n}\nbody{\nbackground-color:  #F5DEB3;\nfont-family: 'Comic Sans MS', cursive, sans-serif;\nheight:105vh;\n}\n\n#header{\n    font-size:40px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    height: 10vh;\n    font-style:cursive;\n}\n\n#nav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left:10px;\n    width: 95%;\n    height: 50px;\n    padding:25px;\n}\n   \n#contact-btn,#Home-btn,#Menu-btn{\n    background-color: #87CEFA;\n  color: #FFFFFF;\n  padding: 30px 50px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#p{\n    font-style:cursive;\n\n}\n.text-title{\n    height: 5vh;\n    text-align: center;\n}\n\n\nimg{\nmargin:30px;\n    width: 50vh;\n    height: 30vw;\n    gap :5px;\n    border: 4px solid black;\n}\n\n/**fix image on home tabbed page that allows for picture to move to middle  */\n.img-text,#img-text{\n    display:flex;\n   \n    justify-content:center;\n    align-items:center;\n    gap:10px;\n}\n\nh1{\ntext-align: center;\nmargin:10px;\npadding:10px;\n}\n\n\np{\n    font-style: cursive;\n    font-weight:bold;\n    font-size: 18px;\n}\n\n.menuInfo,.shrimp{\n    margin-left:50px;\n}\n\n#steak,#boil{\n    display:inline-block;\n    float:none;\n}\n\n.contact{\n    border: 4px solid black;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.textContent=t,n}function t(e,t,n){const o=document.createElement("p");return o.textContent=e+n+t,o}var o=n(379),r=n.n(o),a=n(795),i=n.n(a),c=n(569),s=n.n(c),d=n(565),u=n.n(d),l=n(216),p=n.n(l),m=n(589),h=n.n(m),f=n(426),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;function g(e){const t=document.createElement("p");return t.textContent=e,t}!function(){const t=document.getElementById("content"),n=function(e,t){const n=document.createElement("header");return n.setAttribute("id","header"),n.textContent="Amazing-Food",n}(),o=e("Home-btn","home"),r=e("Menu-btn","Menu"),a=e("contact-btn","Contact"),i=document.createElement("div"),c=document.createElement("div");c.setAttribute("class","img-text"),i.setAttribute("class","text-title");const s=function(e,t){const n=document.createElement("p");return n.setAttribute("id","p"),n.textContent="Come on down and try our Amazing Stake",n}(),d=document.createElement("img");d.src="/img/Grilled.jpg";const u=function(e){const t=document.createElement("nav");return t.setAttribute("id","nav"),t}();i.appendChild(s),c.appendChild(d),t.appendChild(n),t.appendChild(i),u.appendChild(o),u.appendChild(r),u.appendChild(a),t.appendChild(u),t.appendChild(c)}(),document.getElementById("contact-btn").addEventListener("click",(()=>{const e=document.getElementById("content");e.textContent="";const n=function(){const e=document.getElementById("content"),n=document.createElement("div"),o=document.createElement("div"),r=t("Evan ","Evan@hasdat.com"," 999-999-999"),a=t("jay "," jay@hasdat.com"," 888-888-889");n.appendChild(r),o.appendChild(a);const i=function(e){const t=document.createElement("h1");return t.textContent="Contact Us",t}();e.appendChild(i),e.appendChild(n),e.appendChild(o)}();e.appendChild(n)})),document.getElementById("Home-btn").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");n.setAttribute("id","img-text");const o=function(e){const t=document.createElement("p");return t.textContent="\n        The Amazing Steak House is a renowned restaurant that has been serving top-quality steaks for over 50 years. With a cozy atmosphere and impeccable service, this establishment has become a go-to spot for steak lovers from all over the world.\n        \n        Their menu features a wide range of steak cuts, all carefully selected and prepared to perfection. From tenderloin to ribeye, there's something for everyone. But it's not just about the meat – the sides and sauces are just as impressive. Whether you're in the mood for some garlic mashed potatoes or a classic béarnaise sauce, they've got you covered.\n        \n        The Amazing Steak House also boasts an extensive wine list, with options from all over the globe. Their knowledgeable staff can help you find the perfect pairing for your meal, whether you're a seasoned oenophile or a novice.\n        \n        Overall, if you're looking for an unforgettable steak experience, The Amazing Steak House is the place to be. With its delicious food, warm ambiance, and attentive service, it's no wonder that this restaurant has stood the test of time.",t}(),r=document.createElement("img");r.src="/img/steak.jpg",t.appendChild(o),n.appendChild(r);const a=function(e){const t=document.createElement("h1");return t.textContent="About Us",t}();e.appendChild(a),e.appendChild(t),e.appendChild(n)}();e.appendChild(t)})),document.getElementById("Menu-btn").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");o.setAttribute("class","stake-font"),a.setAttribute("class","shrmip-font"),a.setAttribute("class","shrimp"),o.setAttribute("class","menuInfo");const i=g("Our menu's steak and fries are truly unique and unlike any other. Our steak is sourced from only the finest cuts of meat, prepared to perfection and served with crispy, golden fries that are seasoned to perfection.\n         The result is a meal that's bursting with flavor, texture, and satisfaction, and one that's sure to have you coming back for more."),c=g("Our Stake and Fries is heaven sent for only $19.99"),s=g("Our Shrimp bowl is out of this world for only $29.99"),d=document.createElement("img"),u=document.createElement("img");d.src="/img/steak-fries.jpg",u.src="/img/Shrimp.jpg",n.setAttribute("id","steak"),r.setAttribute("id","boil"),t.appendChild(i),n.appendChild(d),o.appendChild(c),r.appendChild(u),a.appendChild(s);const l=function(e){const t=document.createElement("h1");return t.textContent="Saviour your tastebuds with a Menu like none other",t}();e.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(a)}();e.appendChild(t)}))})()})();