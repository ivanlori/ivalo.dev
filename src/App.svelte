<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import AboutMe from "./pages/AboutMe.svelte";
  import CookieBanner from "./components/CookieBanner.svelte";
  import { page, showCookieBanner } from "./store";

  function goToHome() {
    page.set("home");
  }
</script>

<style>
  @import "./styles/main.scss";
</style>

<header class="text-right">
  {#if $showCookieBanner}
    <CookieBanner />
  {/if}
  {#if $page !== 'home'}
    <div class="close-wrapper" on:click={goToHome}><span>✕</span></div>
  {/if}
</header>
<main id="app">
  {#if $page === 'home'}
    <Home />
  {:else if $page === 'about'}
    <AboutMe />
  {:else if $page === 'projects'}
    <Projects />
  {/if}
</main>
<footer class="container">
  <div class="columns">
    <div class="column col-8 text-center p-centered p-2">
      <span>Made with the open source in mind and ❤️</span>
      <br />
      <span>
        Do you want to know how this website is made?
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/ivanlori/ivalo.dev/">View the source code</a>
      </span>
    </div>
  </div>
</footer>
