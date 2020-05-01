import closeBtn from "./CloseBtn";
import { githubProfileUrl } from "./HomeSection";

const urlDemoEstimate: string = "https://ivanlori.github.io/EstimateOnline/";
const urlDemoVuemmerce: string =
  "https://vuemmerce-git-master.ivanlori.now.sh/";
const urlCvBuilder: string = "https://github.com/ivanlori/CV-builder";

const ProjectsSection: string = `
<section class="projects fadeIn">
  ${closeBtn}
  <div>
    <h1>My latest projects</h1>
    <p>All my projects are experiments hosted on Github.<br>
      I enjoy making new things and happy to see people who learn from them.
    </p>
    <div class="box">
      <h3>CV-Builder</h3>
      <p>
      A resume builder with export in PDF format written with
      the following technologies:
      </p>
      <ul>
        <li>React.js</li>
        <li>Redux.js</li>
        <li>Redux Saga</li>
        <li>Typescript</li>
        <li>Styled components</li>
        <li>Puppeteer</li>
        <li>Node.js/Express.js</li>
        <li>Webpack.js</li>
        <li>Jest</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${urlCvBuilder}">Source code</a>
      </div>
    </div>
    <div class="box">
      <h3>Vuemmerce | E-commerce template</h3>
      <p>Technologies used:</p>
      <ul>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Vuex</li>
        <li>Bulma framework</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${githubProfileUrl}/Vuemmerce">Source code</a> <span class="dot"></span>
        <a target="_blank" rel="noopener" href="${urlDemoVuemmerce}">Demo</a>
      </div>
    </div>
    <div class="box">
      <h3>Estimate of costs</h3>
      <p>Technologies used:</p>
      <ul>
        <li>Vanilla JS</li>
        <li>Grid CSS</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${githubProfileUrl}/EstimateOnline">Source code</a> <span class="dot"></span>
        <a target="_blank" rel="noopener" href="${urlDemoEstimate}">Demo</a>
      </div>
    </div>
  </div>
</section>`;

export default ProjectsSection;
