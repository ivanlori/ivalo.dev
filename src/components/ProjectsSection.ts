import { githubProfileUrl } from "./HomeSection";

const urlDemoEstimate: string = "https://ivanlori.github.io/EstimateOnline/";
const urlDemoVuemmerce: string = "https://vuemmerce-git-master.ivanlori.now.sh/";
const urlCvBuilder: string = "https://github.com/ivanlori/CV-builder";
const stackLi: string = 'js-stack-li';
const jsTabLink: string = 'js-tab-link';
const tabBody: string = 'js-box';
const typeOfAnimation: string = 'fadeInRight';

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
        <a class="${jsTabLink} active" href="#builder">CV Builder</a>
      </li>
      <li class="tab-item">
        <a class="${jsTabLink}" href="#vuemmerce">Vuemmerce</a>
      </li>
      <li class="tab-item">
        <a class="${jsTabLink}" href="#estimate">Estimate of costs</a>
      </li>
    </ul>
    <div id="builder" class="${tabBody} box">
      <h3>CV-Builder</h3>
      <p>
      A resume builder with export in PDF format written with
      the following technologies:
      </p>
      <ul>
        <li class="${stackLi} d-hide">React.js</li>
        <li class="${stackLi} d-hide">Redux.js</li>
        <li class="${stackLi} d-hide">Redux Saga</li>
        <li class="${stackLi} d-hide">Typescript</li>
        <li class="${stackLi} d-hide">Styled components</li>
        <li class="${stackLi} d-hide">Puppeteer</li>
        <li class="${stackLi} d-hide">Node.js/Express.js</li>
        <li class="${stackLi} d-hide">Webpack.js</li>
        <li class="${stackLi} d-hide">Jest</li>
        <li class="${stackLi} d-hide">ES6</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${urlCvBuilder}">Source code</a>
      </div>
    </div>
    <div id="vuemmerce" class="${tabBody} box d-hide">
      <h3>Vuemmerce | E-commerce template</h3>
      <p>Technologies used:</p>
      <ul>
        <li class="${stackLi} d-hide">Vue.js</li>
        <li class="${stackLi} d-hide">ES6</li>
        <li class="${stackLi} d-hide">Nuxt.js</li>
        <li class="${stackLi} d-hide">Vuex</li>
        <li class="${stackLi} d-hide">Bulma framework</li>
      </ul>
      <hr>
      <div class="links">
        <a target="_blank" rel="noopener" href="${githubProfileUrl}/Vuemmerce">Source code</a> <span class="dot"></span>
        <a target="_blank" rel="noopener" href="${urlDemoVuemmerce}">Demo</a>
      </div>
    </div>
    <div id="estimate" class="${tabBody} box d-hide">
      <h3>Estimate of costs</h3>
      <p>Technologies used:</p>
      <ul>
        <li class="${stackLi} d-hide">Vanilla JS</li>
        <li class="${stackLi} d-hide">ES6</li>
        <li class="${stackLi} d-hide">Grid CSS</li>
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

function tabsClickHandler() {
  document.addEventListener('click', (e: any) => {
    if (!e.target.matches(`.${jsTabLink}`)) return;
    e.preventDefault();
    const target = e.target;

    document.querySelectorAll(`.${jsTabLink}`).forEach(el => {
      el.classList.remove('active');
    });

    // if tab is hidden
    if (document.querySelector('.active') === null) {
      document.querySelectorAll(`.${tabBody}`).forEach(el => {
        el.classList.add('d-hide');
      });
      stackListAnimationHandler(target.hash);
      document.querySelector(target.hash).classList.remove('d-hide');
      target.classList.add('active');
    }
  });
}

function stackListAnimationHandler(container: string) {
  const projectStack = document.querySelectorAll(`${container} .${stackLi}`);

  projectStack.forEach((item, index) => {
    item.classList.remove(typeOfAnimation);
    item.classList.add('d-hide');

    setTimeout(() => {
      item.classList.remove('d-hide');
      item.classList.add(typeOfAnimation);
    }, 300 * index);
  });
}

export const handleDOM = (): void => {
  stackListAnimationHandler('#builder');
  tabsClickHandler();
}
