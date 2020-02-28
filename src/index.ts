"use strict";

import "./styles/main.scss";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutMeSection";

(() => {
  const App: HTMLElement = document.getElementById("app");

  App.innerHTML = HomeSection;

  document.body.addEventListener("click", (e: any) => {
    switch (e.target.id) {
      case "js-close":
        App.innerHTML = HomeSection;
        break;
      case "js-whoiam-link":
        App.innerHTML = AboutSection;
        break;
      case "js-projects-link":
        App.innerHTML = ProjectsSection;
        break;
      default:
        break;
    }
  });
})();
