<script>
  import { showCookieBanner } from "../store";

  function closeBanner() {
    showCookieBanner.set(false);
  }
</script>

<div class="js-cookie-banner toast toast-success float-right">
  <button class="btn btn-clear float-right" on:click={closeBanner} />
  This website is cookie-free!
</div>
