import { githubProfileUrl } from "./Home";
import { SingleProjectLayout } from '../components/SingleProjectLayout';

const urlDemoEstimate: string = "https://ivanlori.github.io/EstimateOnline/";
const urlDemoVuemmerce: string = "https://vuemmerce-git-master.ivanlori.now.sh/";
const urlCvBuilder: string = "https://github.com/ivanlori/CV-builder";
const stackLi: string = 'js-stack-li';
const jsTabLink: string = 'js-tab-link';
const tabBody: string = 'js-box';
const links: string = 'js-links';
const fadeInRightAnimation: string = 'fadeInRight';
const fadeInAnimation: string = 'fadeIn';
const hide: string = 'd-hide';
const invisible: string = 'd-invisible';

class Projects {

  body: HTMLElement;
  app: HTMLElement;

  constructor(body: HTMLElement, app: HTMLElement) {
    this.body = body;
    this.app = app;
  }

  private dataCvBuilder = {
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

  private dataVuemmerce = {
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

  private dataEstimateOnline = {
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

  private tabsClickHandler = (): void => {
    document.addEventListener('click', (e: any) => {
      if (!e.target.matches(`.${jsTabLink}`)) return;
      e.preventDefault();
      const target = e.target;

      document.querySelectorAll(`.${jsTabLink}`).forEach(el => {
        el.classList.remove('active');
      });

      // if tab is hidden
      if (document.querySelector('.active') === null) {

        // hides all tabs
        document.querySelectorAll(`.${tabBody}`).forEach(el => {
          el.classList.add(`${hide}`);
        });

        // shows only the target tab
        document.querySelector(target.hash).classList.remove(`${hide}`);
        target.classList.add('active');

        // store value in storage to have animation once per tab
        if (!sessionStorage.getItem(target.hash)) {
          sessionStorage.setItem(target.hash, 'true');
          this.animationHandler(target.hash);
        }
      }
    });
  }

  private animationHandler = (container: string): void => {
    const projectStack = document.querySelectorAll(`${container} .${stackLi}`);
    const projectLinks = document.querySelector(`${container} #${links}`);
    const lastItem = projectStack[projectStack.length - 1];

    projectStack.forEach((item, index) => {
      item.classList.remove(fadeInRightAnimation);
      item.classList.add(invisible);

      setTimeout(() => {
        item.classList.remove(invisible);
        item.classList.add(fadeInRightAnimation);

        // show links demo || source code when all items are displayed
        if (lastItem.classList.contains(fadeInRightAnimation)) {
          projectLinks.classList.remove(invisible);
          projectLinks.classList.add(fadeInAnimation);
        }
      }, 300 * index);
    });
  }

  private DOMhandler = (): void => {
    if (!sessionStorage.getItem('#builder')) {
      sessionStorage.setItem('#builder', 'true');
      this.animationHandler('#builder');
    }
    this.tabsClickHandler();
  }

  private render = (): string => {
    return (`
      <section class="fadeIn container">
        <div class="columns">
          <div class="column col-8 p-centered">
            <h1>My latest projects</h1>
            <p>All my projects are experiments hosted on Github.<br>
              I enjoy making new things and happy to see people who learn from them.</p>
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
            ${SingleProjectLayout(this.dataCvBuilder)}
            ${SingleProjectLayout(this.dataVuemmerce)}
            ${SingleProjectLayout(this.dataEstimateOnline)}
          </div>
        </div>
      </section>`
    );
  }

  showPage = () => {
    this.body.className = 'projects';
    this.app.innerHTML = this.render();
    this.DOMhandler();
  }
}

export default Projects;
