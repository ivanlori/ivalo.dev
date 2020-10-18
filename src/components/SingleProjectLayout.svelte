<script>
  export let id;
  export let name;
  export let description;
  export let demoUrl;
  export let technologies;

  function showTechnologies(items) {
    return items
      .map((item) => `<li class="d-invisible}">${item}</li>`)
      .join("");
  }
</script>

<div {id}>
  <h3>{name}</h3>
  <p>
    {@html description}
  </p>
  <ul>{showTechnologies(technologies)}</ul>
  <div id={links}>
    <a target="_blank" rel="noopener" href={sourceCodeUrl}>Source code</a>
    {demoUrl && `<div class="dot hide-xs hide-sm"></div> <a target="_blank" rel="noopener" href="${demoUrl}">Demo</a>`}
  </div>
</div>
