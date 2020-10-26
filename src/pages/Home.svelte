<script lang="ts">
  import { page, showCookieBanner } from "../store";

  const description = `I write <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> to translate ideas in reality.<br>
      Someone says I'm a <strong>Frontend Developer</strong>.<br>
      Currently living in Milan.`;

  function goToAbout() {
    showCookieBanner.set(false);
    page.set("about");
  }

  function goToProject() {
    showCookieBanner.set(false);
    page.set("projects");
  }
</script>

<section class={`fadeIn container`}>
  <div class="columns">
    <div class="column col-8 p-centered">
      <h1>Hi, I'm Ivan</h1>
      <p>
        {@html description}
      </p>
      <div class="links">
        <a id="js-about-link" on:click={goToAbout}>About me</a>
        <span class="dot hide-xs hide-sm" />
        <a id="js-projects-link" on:click={goToProject}>My side projects</a>
      </div>
      <div class="social">
        <ul>
          <li>
            <a
              target="_blank"
              class="icon"
              rel="noopener"
              href="https://github.com/ivanlori">
              <span class="icon-github" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              class="icon"
              rel="noopener"
              href="https://www.linkedin.com/in/ivanlori">
              <span class="icon-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
