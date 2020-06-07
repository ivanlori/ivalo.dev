import { githubProfileUrl } from "./Home";
import { SingleProjectLayout } from '../components/SingleProjectLayout';

const urlDemoEstimate: string = "https://ivanlori.github.io/EstimateOnline/";
const urlDemoVuemmerce: string = "https://vuemmerce-git-master.ivanlori.now.sh/";
const urlCvBuilder: string = "https://github.com/ivanlori/CV-builder";
const stackLi: string = 'js-stack-li';
const jsTabLink: string = 'js-tab-link';
const tabBody: string = 'js-box';
const links: string = 'js-links';
const typeOfAnimation: string = 'fadeInRight';
const hideClass: string = 'd-hide';

const dataCvBuilder = {
  id: 'builder',
  name: 'CV-Builder',
  description: 'A resume builder with export in PDF format written with the following technologies:',
  sourceCodeUrl: urlCvBuilder,
  demoUrl: '',
  technologies: [
    'React.js',
    'Redux.js',
    'Redux Saga',
    'Typescript',
    'Styled components',
    'Puppeteer',
    'Node.js/Express.js',
    'Webpack.js',
    'Jest',
    'ES6',
  ],
}

const dataVuemmerce = {
  id: 'vuemmerce',
  name: 'Vuemmerce | E-commerce template',
  description: 'Technologies used:',
  sourceCodeUrl: `${githubProfileUrl}/Vuemmerce`,
  demoUrl: urlDemoVuemmerce,
  technologies: [
    'Vue.js',
    'ES6',
    'Nuxt.js',
    'Vuex',
    'Bulma framework',
  ]
}

const dataEstimateOnline = {
  id: 'estimate',
  name: 'Estimate of costs',
  description: 'Technologies used:',
  sourceCodeUrl: `${githubProfileUrl}/EstimateOnline`,
  demoUrl: urlDemoEstimate,
  technologies: [
    'Vanilla JS',
    'ES6',
  ]
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
          <a class="${jsTabLink} active" href="#builder">CV Builder</a>
        </li>
        <li class="tab-item">
          <a class="${jsTabLink}" href="#vuemmerce">Vuemmerce</a>
        </li>
        <li class="tab-item">
          <a class="${jsTabLink}" href="#estimate">Estimate of costs</a>
        </li>
      </ul>
      ${SingleProjectLayout(dataCvBuilder)}
      ${SingleProjectLayout(dataVuemmerce)}
      ${SingleProjectLayout(dataEstimateOnline)}
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
        el.classList.add(`${hideClass}`);
      });
      stackListAnimationHandler(target.hash);
      document.querySelector(target.hash).classList.remove(`${hideClass}`);
      target.classList.add('active');
    }
  });
}

function stackListAnimationHandler(container: string) {
  const projectStack = document.querySelectorAll(`${container} .${stackLi}`);

  projectStack.forEach((item, index) => {
    item.classList.remove(typeOfAnimation);
    item.classList.add(`${hideClass}`);

    setTimeout(() => {
      item.classList.remove(`${hideClass}`);
      item.classList.add(typeOfAnimation);

      document.querySelector(`.${links}`).classList.remove(hideClass);
    }, 300 * index);
  });
}

export const handleDOM = (): void => {
  stackListAnimationHandler('#builder');
  tabsClickHandler();
}
