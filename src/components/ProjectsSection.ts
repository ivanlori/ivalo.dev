import closeBtn from "./Close";
import { githubProfileUrl } from "./HomeSection";

const ProjectsSection: string = `
<section class="projects fadeIn">
  ${closeBtn}
  <div>
    <h1>My latest projects</h1>
    <p>All my projects are experiments hosted on Github.<br>
      I enjoy making new things and happy to see people who learn from them.
    </p>
    <div>
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
        <a target="_blank" rel="noopener" href="https://vuemmerce-git-master.ivanlori.now.sh/">Demo</a>
      </div>
    </div>
    <div>
      <h3>Estimate of costs</h3>
      <p>Technologies used:</p>
      <ul>
        <li>Vanilla JS</li>
        <li>Grid CSS</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${githubProfileUrl}/EstimateOnline">Source code</a> <span class="dot"></span>
        <a target="_blank" rel="noopener" href="https://ivanlori.github.io/EstimateOnline/">Demo</a>
      </div>
    </div>
  </div>
</section>`;

export default ProjectsSection;
