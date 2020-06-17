!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.$cookieBanner=document.querySelector(".js-cookie-banner"),this.cookieName="cookieBanner",this.setCookie=()=>sessionStorage.setItem(this.cookieName,"true"),this.hide=()=>this.$cookieBanner.classList.add("d-hide"),this.show=()=>this.$cookieBanner.classList.remove("d-hide"),this.handleClick=()=>this.$cookieBanner.addEventListener("click",()=>this.hide()),this.init=()=>(this.handleClick(),sessionStorage.getItem(this.cookieName)?this.hide():this.show())}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.githubProfileUrl=void 0,t.githubProfileUrl="https://github.com/ivanlori";t.default=class{constructor(e,i){this.description=()=>"\n      I write <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> to translate ideas in reality.<br>\n      Someone says I'm a <strong>Frontend Developer</strong>.",this.render=()=>`\n      <section class="fadeIn container grid-lg">\n        <div class="columns">\n          <div class="column col-8 p-centered">\n            <h1>Hi, I'm Ivan</h1>\n            <p>\n              ${this.description()}\n            </p>\n            <div class="links">\n              <a id="js-about-link">About me</a> <span class="dot hide-xs hide-sm"></span>\n              <a id="js-projects-link">My side projects</a>\n            </div>\n            <div class="social">\n              <ul>\n                <li>\n                  <a target="_blank" class="icon" rel="noopener" href="${t.githubProfileUrl}">\n                    <span class="icon-github"></span>\n                  </a>\n                </li>\n                <li>\n                  <a target="_blank" class="icon" rel="noopener" href="https://www.linkedin.com/in/ivanlori">\n                    <span class="icon-linkedin"></span>\n                  </a>\n                </li>\n              <ul>\n            </div>\n          </div>\n        </div>\n      </section>`,this.showPage=()=>{this.body.className="home",this.app.innerHTML=this.render()},this.body=e,this.app=i}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),i(3);const s=n(i(1)),o=n(i(4)),a=n(i(6)),r=n(i(0));(()=>{const e=document.getElementById("app"),t=document.querySelector("body"),i=new a.default(t,e),n=new o.default(t,e),l=new s.default(t,e),c=new r.default;l.showPage(),c.init(),t.addEventListener("click",e=>{const t=e.target.id;"js-close"===t&&l.showPage(),"js-about-link"===t&&i.showPage(),"js-projects-link"===t&&n.showPage()})})()},function(e,t,i){},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(1),o=i(5),a=n(i(0)),r=new a.default;t.default=class{constructor(e,t){this.dataCvBuilder={id:"builder",name:"CV-Builder",description:"A resume builder with export in PDF format written with the following technologies:",sourceCodeUrl:"https://github.com/ivanlori/CV-builder",demoUrl:"",technologies:["React.js","Redux.js","Redux Saga","Typescript","Styled components","Puppeteer","Node.js/Express.js","Webpack.js","Jest","ES6"]},this.dataVuemmerce={id:"vuemmerce",name:"Vuemmerce | E-commerce template",description:"A pure frontend starter ecommerce template made with:",sourceCodeUrl:s.githubProfileUrl+"/Vuemmerce",demoUrl:"https://vuemmerce-git-master.ivanlori.now.sh/",technologies:["Vue.js","ES6","Nuxt.js","Vuex","Bulma framework"]},this.dataEstimateOnline={id:"estimate",name:"Estimate of costs",description:"A simply interactive estimate of costs with preview and print options made with:",sourceCodeUrl:s.githubProfileUrl+"/EstimateOnline",demoUrl:"https://ivanlori.github.io/EstimateOnline/",technologies:["Vanilla JS","ES6"]},this.tabsClickHandler=()=>{document.addEventListener("click",e=>{if(!e.target.matches(".js-tab-link"))return;e.preventDefault();const t=e.target;document.querySelectorAll(".js-tab-link").forEach(e=>{e.classList.remove("active")}),null===document.querySelector(".active")&&(document.querySelectorAll(".js-box").forEach(e=>{e.classList.add("d-hide")}),document.querySelector(t.hash).classList.remove("d-hide"),t.classList.add("active"),this.animationHandler(t.hash))})},this.animationHandler=e=>{const t=document.querySelectorAll(e+" .js-stack-li"),i=document.querySelector(e+" #js-links"),n=t[t.length-1];t.forEach((t,s)=>{sessionStorage.getItem(e)?(t.classList.remove("d-invisible"),i.classList.remove("d-invisible")):(t.classList.remove("fadeInRight"),t.classList.add("d-invisible"),setTimeout(()=>{t.classList.remove("d-invisible"),t.classList.add("fadeInRight"),n.classList.contains("fadeInRight")&&(i.classList.remove("d-invisible"),i.classList.add("fadeIn"),sessionStorage.setItem(e,"true"))},300*s))})},this.DOMhandler=()=>{this.tabsClickHandler(),this.animationHandler("#builder")},this.render=()=>`\n      <section class="fadeIn container">\n        <div class="columns">\n          <div class="column col-8 p-centered">\n            <h1>My latest projects</h1>\n            <p>All my projects are experiments hosted on Github.<br>\n              I enjoy making new things and happy to see people who learn from them.</p>\n            <ul class="tab tab-block">\n              <li class="tab-item">\n                <a class="js-tab-link active" href="#builder">CV Builder</a>\n              </li>\n              <li class="tab-item">\n                <a class="js-tab-link" href="#vuemmerce">Vuemmerce</a>\n              </li>\n              <li class="tab-item">\n                <a class="js-tab-link" href="#estimate">Estimate of costs</a>\n              </li>\n            </ul>\n            ${o.SingleProjectLayout(this.dataCvBuilder)}\n            ${o.SingleProjectLayout(this.dataVuemmerce)}\n            ${o.SingleProjectLayout(this.dataEstimateOnline)}\n          </div>\n        </div>\n      </section>`,this.showPage=()=>{this.body.className="projects",this.app.innerHTML=this.render(),this.DOMhandler(),r.setCookie(),r.hide()},this.body=e,this.app=t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SingleProjectLayout=void 0;t.SingleProjectLayout=e=>{const{id:t,name:i,description:n,technologies:s,sourceCodeUrl:o,demoUrl:a}=e;return`<div id="${t}" class="js-box box ${"builder"===t?"":"d-hide"} fadeIn">\n      <h3>${i}</h3>\n      <p>${n}</p>\n      <ul>${r=s,r.map(e=>`<li class="js-stack-li d-invisible">${e}</li>`).join("")}</ul>\n      <div id="js-links" class="d-invisible">\n        <a target="_blank" rel="noopener" href="${o}">Source code</a>\n        ${a&&`<div class="dot hide-xs hide-sm"></div> <a target="_blank" rel="noopener" href="${a}">Demo</a>`}\n      </div>\n    </div>`;var r}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=new(n(i(0)).default);t.default=class{constructor(e,t){this.description=()=>"\n      My interests are minimalism, self growth, finance, astronomy and technology.<br>\n      Always searching for a book that could improve my vision drastically.<br>\n      I love hearing about different points of views and experiences on topics and...<br>\n      of course videogames!<br><br>\n      Do you want to hear more? Let's get in touch!\n    ",this.render=()=>`\n      <section class="fadeIn container">\n        <div class="columns">\n          <div class="column col-8 p-centered">\n            <h1>About me...</h1>\n            <p>\n              ${this.description()}\n            </p>\n            <div class="links">\n              <a href="mailto:ivan.lori@protonmail.com">Contact me</a>\n            </div>\n          </div>\n        </div>\n      </section>`,this.showPage=()=>{this.body.className="aboutme",this.app.innerHTML=this.render(),s.setCookie(),s.hide()},this.body=e,this.app=t}}}]);