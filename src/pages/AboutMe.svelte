<script lang="ts">
  const title: string = "About me...";
  const description: string = `My interests are minimalism, self growth, finance, astronomy and technology.<br />
      Always searching for a book that could improve my vision drastically.<br />
      I love hearing about different points of views and experiences on topics and...<br />
      of course videogames!<br /><br />
      Do you want to hear more? Let's get in touch!
`;
</script>

<section class="fadeIn container">
  <div class="columns">
    <div class="column col-8 p-centered">
      <h1>{title}</h1>
      <p>
        {@html description}
      </p>
      <div class="links">
        <a href="mailto:ivan.lori@protonmail.com">Contact me</a>
      </div>
    </div>
  </div>
</section>
