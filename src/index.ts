import "./styles/main.scss";
import HomeSection from "./components/HomeSection";
import { ProjectsSection, handleDOM } from "./components/ProjectsSection";
import AboutSection from "./components/AboutMeSection";

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
