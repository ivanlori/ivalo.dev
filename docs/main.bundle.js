!function(e){var n={};function t(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(i,l,function(n){return e[n]}.bind(null,l));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.githubProfileUrl=void 0,n.githubProfileUrl="https://github.com/ivanlori";const i=`\n<section class="fadeIn container grid-lg">\n  <div class="columns">\n    <div class="column col-8 p-centered">\n      <h1>Hi, I am Ivan</h1>\n      <p>\n        \nA passionate Frontend Developer who care about details.<br />\nI am currently working in Milan.\n\n      </p>\n      <hr>\n      <div class="links">\n        <a id="js-about-link">About me</a> <span class="dot"></span>\n        <a id="js-projects-link">My side projects</a>\n      </div>\n      <div class="social">\n        <ul>\n          <li>\n            <a target="_blank" class="icon" rel="noopener" href="${n.githubProfileUrl}">\n              <span class="icon-github"></span>\n            </a>\n          </li>\n          <li>\n            <a target="_blank" class="icon" rel="noopener" href="https://www.linkedin.com/in/ivanlori">\n              <span class="icon-linkedin"></span>\n            </a>\n          </li>\n        <ul>\n      </div>\n    </div>\n  </div>\n</section>`;n.default=i},function(e,n,t){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),t(2);const l=i(t(0)),o=t(3),s=i(t(4));(()=>{const e=document.getElementById("app"),n=document.querySelector("body");e.innerHTML=l.default,n.addEventListener("click",t=>{switch(t.target.id){case"js-close":n.className="home",e.innerHTML=l.default;break;case"js-about-link":n.className="aboutme",e.innerHTML=s.default;break;case"js-projects-link":n.className="projects",e.innerHTML=o.ProjectsSection,o.handleDOM()}})})()},function(e,n,t){},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ProjectsSection=n.handleDOM=void 0;const i=t(0);n.handleDOM=()=>{document.addEventListener("click",e=>{if(!e.target.matches(".js-item"))return;e.preventDefault();const n=e.target;var t;document.querySelectorAll(".js-item").forEach(e=>{e.classList.remove("active")}),null===document.querySelector(".active")&&(t=n.hash,document.querySelectorAll(".js-box").forEach(e=>{e.classList.add("d-none")}),document.querySelector(t).classList.remove("d-none"),n.classList.add("active"))},!1)},n.ProjectsSection=`\n<section class="fadeIn container">\n  <div class="columns">\n    <div class="column col-8 p-centered">\n    <h1>My latest projects</h1>\n    <p>All my projects are experiments hosted on Github.<br>\n      I enjoy making new things and happy to see people who learn from them.\n    </p>\n    <ul class="tab tab-block">\n      <li class="tab-item">\n        <a class="js-item active" href="#builder">CV Builder</a>\n      </li>\n      <li class="tab-item">\n        <a class="js-item" href="#vuemmerce">Vuemmerce</a>\n      </li>\n      <li class="tab-item">\n        <a class="js-item" href="#estimate">Estimate of costs</a>\n      </li>\n    </ul>\n    <div id="builder" class="js-box box">\n      <h3>CV-Builder</h3>\n      <p>\n      A resume builder with export in PDF format written with\n      the following technologies:\n      </p>\n      <ul>\n        <li>React.js</li>\n        <li>Redux.js</li>\n        <li>Redux Saga</li>\n        <li>Typescript</li>\n        <li>Styled components</li>\n        <li>Puppeteer</li>\n        <li>Node.js/Express.js</li>\n        <li>Webpack.js</li>\n        <li>Jest</li>\n      </ul>\n      <hr>\n      <div class="links">\n        <a target="_blank" rel="noopener" href="https://github.com/ivanlori/CV-builder">Source code</a>\n      </div>\n    </div>\n    <div id="vuemmerce" class="js-box box d-none">\n      <h3>Vuemmerce | E-commerce template</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vue.js</li>\n        <li>Nuxt.js</li>\n        <li>Vuex</li>\n        <li>Bulma framework</li>\n      </ul>\n      <hr>\n      <div class="links">\n        <a target="_blank" rel="noopener" href="${i.githubProfileUrl}/Vuemmerce">Source code</a> <span class="dot"></span>\n        <a target="_blank" rel="noopener" href="https://vuemmerce-git-master.ivanlori.now.sh/">Demo</a>\n      </div>\n    </div>\n    <div id="estimate" class="js-box box d-none">\n      <h3>Estimate of costs</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vanilla JS</li>\n        <li>Grid CSS</li>\n      </ul>\n      <hr>\n      <div class="links">\n        <a target="_blank" rel="noopener" href="${i.githubProfileUrl}/EstimateOnline">Source code</a> <span class="dot"></span>\n        <a target="_blank" rel="noopener" href="https://ivanlori.github.io/EstimateOnline/">Demo</a>\n      </div>\n    </div>\n    </div>\n  </div>\n</section>`},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default='\n<section class="fadeIn container">\n  <div class="columns">\n    <div class="column col-8 p-centered">\n      <h1>About me...</h1>\n      <p>\n        \n  I like making great products translating my ideas in real things.<br>\n  In my free time I read books, trying constantly to improve myself\n  both human and professional way.<br>\n  I love hearing about different points of views and experiences on topics and...<br>\n  of course videogames!<br><br>\n  Do you want to hear more? Let\'s get in touch!\n\n      </p>\n      <hr>\n      <div class="links">\n        <a href="mailto:ivan.lori@protonmail.com">Contact me</a>\n      </div>\n    </div>\n  </div>\n</section>'}]);