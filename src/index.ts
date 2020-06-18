import "./styles/main.scss";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import CookieBanner from './components/CookieBanner';

(() => {
  const doc = document;
  const $app = doc.getElementById('app') as HTMLElement;
  const $body = doc.querySelector('body') as HTMLElement;

  const aboutMePage = new AboutMe($body, $app);
  const projectsPage = new Projects($body, $app);
  const homePage = new Home($body, $app);
  const cookieBanner = new CookieBanner();

  homePage.showPage();
  cookieBanner.init();

  $body.addEventListener("click", (e: any) => {
    const id = e.target.id;
    id === 'js-close' && homePage.showPage();
    id === 'js-about-link' && aboutMePage.showPage();
    id === 'js-projects-link' && projectsPage.showPage();
  });
})();
