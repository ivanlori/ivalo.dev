export const githubProfileUrl: string = "https://github.com/ivanlori";

const description: string = `
A passionate Frontend Developer who care about details.<br />
I am currently working in Milan.
`;

const HomeSection: string = `
<section class="fadeIn container grid-lg">
  <div class="columns">
    <div class="column col-8 p-centered">
      <h1>Hi, I am Ivan</h1>
      <p>
        ${description}
      </p>
      <div class="links">
        <a id="js-about-link">About me</a> <span class="dot"></span>
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
</section>`;

export default HomeSection;