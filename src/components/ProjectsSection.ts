import { githubProfileUrl } from "./HomeSection";

const urlDemoEstimate: string = "https://ivanlori.github.io/EstimateOnline/";
const urlDemoVuemmerce: string =
  "https://vuemmerce-git-master.ivanlori.now.sh/";
const urlCvBuilder: string = "https://github.com/ivanlori/CV-builder";

const handleTabVisibility = (id: string): void => {
  document.querySelectorAll('.js-box').forEach(el => {
    el.classList.add('d-none');
  });
  document.querySelector(id).classList.remove('d-none');
}

export const handleDOM = (): void => {
  const jsItemClass = '.js-item';

  document.addEventListener('click', (e: any) => {
    if (!e.target.matches(jsItemClass)) return;
    e.preventDefault();
    const target = e.target;

    document.querySelectorAll(jsItemClass).forEach(el => {
      el.classList.remove('active');
    });

    if (document.querySelector('.active') === null) {
      handleTabVisibility(target.hash);
      target.classList.add('active');
    }
  }, false);
}

export const ProjectsSection: string = `
<section class="fadeIn container">
  <div class="columns">
    <div class="column col-8 p-centered">
    <h1>My latest projects</h1>
    <p>All my projects are experiments hosted on Github.<br>
      I enjoy making new things and happy to see people who learn from them.
    </p>
    <ul class="tab tab-block">
      <li class="tab-item">
        <a class="js-item active" href="#builder">CV Builder</a>
      </li>
      <li class="tab-item">
        <a class="js-item" href="#vuemmerce">Vuemmerce</a>
      </li>
      <li class="tab-item">
        <a class="js-item" href="#estimate">Estimate of costs</a>
      </li>
    </ul>
    <div id="builder" class="js-box box">
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
    <div id="vuemmerce" class="js-box box d-none">
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
    <div id="estimate" class="js-box box d-none">
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
  </div>
</section>`;
