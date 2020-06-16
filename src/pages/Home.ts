export const githubProfileUrl: string = "https://github.com/ivanlori";

class Home {

  body: HTMLElement;
  app: HTMLElement;

  constructor(body: HTMLElement, app: HTMLElement) {
    this.body = body;
    this.app = app;
  }

  private description = (): string => {
    return (`
      I write <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> to translate ideas in reality.<br>
      Someone says I'm a <strong>Frontend Developer</strong>.`
    );
  }

  private render = () => {
    return (`
      <section class="fadeIn container grid-lg">
        <div class="columns">
          <div class="column col-8 p-centered">
            <h1>Hi, I'm Ivan</h1>
            <p>
              ${this.description()}
            </p>
            <div class="links">
              <a id="js-about-link">About me</a> <span class="dot hide-xs hide-sm"></span>
              <a id="js-projects-link">My side projects</a>
            </div>
            <div class="social">
              <ul>
                <li>
                  <a target="_blank" class="icon" rel="noopener" href="${githubProfileUrl}">
                    <span class="icon-github"></span>
                  </a>
                </li>
                <li>
                  <a target="_blank" class="icon" rel="noopener" href="https://www.linkedin.com/in/ivanlori">
                    <span class="icon-linkedin"></span>
                  </a>
                </li>
              <ul>
            </div>
          </div>
        </div>
      </section>`
    );
  }

  showPage = () => {
    this.body.className = 'home';
    this.app.innerHTML = this.render();
  }
}

export default Home;
