import "./styles/main.scss";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

(() => {
  const $app = document.getElementById('app') as HTMLElement;
  const $body = document.querySelector('body') as HTMLElement;
  const aboutMePage = new AboutMe($body, $app);
  const projectsPage = new Projects($body, $app);
  const homePage = new Home($body, $app);

  homePage.showPage();

  $body.addEventListener("click", (e: any) => {
    const id = e.target.id;
    id === 'js-close' && homePage.showPage();
    id === 'js-about-link' && aboutMePage.showPage();
    id === 'js-projects-link' && projectsPage.showPage();
  });
})();
