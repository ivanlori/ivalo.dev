import CookieBanner from '../components/CookieBanner';

const cookieBanner = new CookieBanner();

class AboutMe {

  body: HTMLElement;
  app: HTMLElement;

  constructor(body: HTMLElement, app: HTMLElement) {
    this.body = body;
    this.app = app;
  }

  private description = (): string => {
    return (`
      My interests are minimalism, self growth, finance, astronomy and technology.<br>
      Always searching for a book that could improve my vision drastically.<br>
      I love hearing about different points of views and experiences on topics and...<br>
      of course videogames!<br><br>
      Do you want to hear more? Let's get in touch!
    `);
  }

  private render = (): string => {
    return (`
      <section class="fadeIn container">
        <div class="columns">
          <div class="column col-8 p-centered">
            <h1>About me...</h1>
            <p>
              ${this.description()}
            </p>
            <div class="links">
              <a href="mailto:ivan.lori@protonmail.com">Contact me</a>
            </div>
          </div>
        </div>
      </section>`
    );
  }

  showPage = () => {
    this.body.className = 'aboutme';
    this.app.innerHTML = this.render();
    cookieBanner.setCookie();
    cookieBanner.hide();
  }
}

export default AboutMe;
