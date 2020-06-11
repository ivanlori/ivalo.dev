class AboutMe {

  body: HTMLElement;
  app: HTMLElement;

  constructor(body: HTMLElement, app: HTMLElement) {
    this.body = body;
    this.app = app;
  }

  private description = (): string => {
    return (`
      I like making great products translating my ideas in real things.<br>
      In my free time I read books, trying constantly to improve myself
      both human and professional way.<br>
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
  }
}

export default AboutMe;
