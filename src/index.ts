import "./styles/main.scss";
import HomeSection from "./pages/Home";
import { ProjectsSection, handleDOM } from "./pages/Projects";
import AboutSection from "./pages/AboutMe";

(() => {
  const $app = document.getElementById('app') as HTMLElement;
  const $body = document.querySelector('body') as HTMLElement;

  $app.innerHTML = HomeSection;

  $body.addEventListener("click", (e: any) => {
    switch (e.target.id) {
      case "js-close":
        $body.className = 'home';
        $app.innerHTML = HomeSection;
        break;
      case "js-about-link":
        $body.className = 'aboutme';
        $app.innerHTML = AboutSection;
        break;
      case "js-projects-link":
        $body.className = 'projects';
        $app.innerHTML = ProjectsSection;
        handleDOM();
        break;
      default:
        break;
    }
  });
})();
