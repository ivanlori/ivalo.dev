<script lang="ts">
  export let data: any;
  export let visible: boolean;

  const { name, description, demoUrl, technologies, sourceCodeUrl } = data;
</script>

<div class={!visible && 'd-none'}>
  <h3>{name}</h3>
  <p>
    {@html description}
  </p>
  <ul>
    {#each technologies as technology}
      <li class="fadeInRight">{technology}</li>
    {/each}
  </ul>
  <div>
    <a target="_blank" rel="noopener" href={sourceCodeUrl}>Source code</a>
    {#if demoUrl}
      <div class="dot hide-xs hide-sm" />
      <a target="_blank" rel="noopener" href={demoUrl}>Demo</a>
    {/if}
  </div>
</div>
