parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ryFC":[function(require,module,exports) {

},{"./../assets/icomoon.eot":[["icomoon.ff61a274.eot","xzmy"],"xzmy"],"./../assets/icomoon.ttf":[["icomoon.1afc8593.ttf","wkTC"],"wkTC"],"./../assets/icomoon.woff":[["icomoon.4ae72ea3.woff","TEAh"],"TEAh"],"./../assets/icomoon.svg":[["icomoon.c463b0e0.svg","o643"],"o643"]}],"fNOm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.githubProfileUrl="https://github.com/ivanlori";var n="\nA passionate Frontend Developer who care about details.<br />\nI'm currently working in Milan.\n",e='\n<section class="home fadeIn">\n  <div>\n    <h1>Hi, I am Ivan</h1>\n    <p>\n      '+n+'\n    </p>\n    <hr>\n    <div class="links">\n      <a id="js-about-link">About me</a> <span class="dot"></span>\n      <a id="js-projects-link">My latest projects</a>\n    </div>\n  </div>\n  <div class="social">\n    <ul>\n      <li>\n        <a target="_blank" rel="noopener" href="'+exports.githubProfileUrl+'">\n          <span class="icon-github"></span>\n        </a>\n      </li>\n      <li>\n        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/ivanlori/">\n          <span class="icon-linkedin"></span>\n        </a>\n      </li>\n    <ul>\n  </div>\n</section>';exports.default=e;
},{}],"lMu0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e='\n  <div class="close-wrapper">\n    <span id="js-close">✕</span>\n  </div>\n';exports.default=e;
},{}],"SDxx":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("./CloseBtn")),i=require("./HomeSection"),t="https://ivanlori.github.io/EstimateOnline/",l="https://vuemmerce-git-master.ivanlori.now.sh/",r='\n<section class="projects fadeIn">\n  '+n.default+'\n  <div>\n    <h1>My latest projects</h1>\n    <p>All my projects are experiments hosted on Github.<br>\n      I enjoy making new things and happy to see people who learn from them.\n    </p>\n    <div>\n      <h3>Vuemmerce | E-commerce template</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vue.js</li>\n        <li>Nuxt.js</li>\n        <li>Vuex</li>\n        <li>Bulma framework</li>\n      </ul>\n      <hr>\n      <div class="links">\n        <a target="_blank" rel="noopener" href="'+i.githubProfileUrl+'/Vuemmerce">Source code</a> <span class="dot"></span>\n        <a target="_blank" rel="noopener" href="'+l+'">Demo</a>\n      </div>\n    </div>\n    <div>\n      <h3>Estimate of costs</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vanilla JS</li>\n        <li>Grid CSS</li>\n      </ul>\n      <hr>\n      <div class="links">\n        <a target="_blank" rel="noopener" href="'+i.githubProfileUrl+'/EstimateOnline">Source code</a> <span class="dot"></span>\n        <a target="_blank" rel="noopener" href="'+t+'">Demo</a>\n      </div>\n    </div>\n  </div>\n</section>';exports.default=r;
},{"./CloseBtn":"lMu0","./HomeSection":"fNOm"}],"xzKr":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("./CloseBtn")),t="https://drive.google.com/file/d/1w8JMjAedc5EVaWx-IzmsOY0RzeM_RFNo/view?usp=sharing",o="\n  I like making great products translating my ideas in real things.<br>\n  In my free time I read books, trying constantly to improve myself\n  both human and professional way.<br>\n  I love hearing about different points of views and experiences on topics and...<br>\n  of course videogames!<br><br>\n  Do you want to hear more? Let's get in touch!\n",a='\n<section class="aboutme fadeIn">\n  '+n.default+"\n  <div>\n    <h2>About me...</h2>\n    <p>\n      "+o+'\n    </p>\n    <hr>\n    <div class="links">\n      <a href="mailto:ivan.lori@protonmail.com">Contact me</a> <span class="dot"></span>\n      <a target="_blank" rel="noopener" href="'+t+'">View my CV</a>\n    </div>\n  </div>\n</section>';exports.default=a;
},{"./CloseBtn":"lMu0"}],"B6dB":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("./styles/main.scss");var t=e(require("./components/HomeSection")),n=e(require("./components/ProjectsSection")),r=e(require("./components/AboutMeSection"));!function(){var e=document.getElementById("app");e.innerHTML=t.default,document.body.addEventListener("click",function(i){switch(i.target.id){case"js-close":e.innerHTML=t.default;break;case"js-about-link":e.innerHTML=r.default;break;case"js-projects-link":e.innerHTML=n.default}})}();
},{"./styles/main.scss":"ryFC","./components/HomeSection":"fNOm","./components/ProjectsSection":"SDxx","./components/AboutMeSection":"xzKr"}]},{},["B6dB"], null)