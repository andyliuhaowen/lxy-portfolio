<script lang="ts">
  export let title: string, content: string[], image: string;
</script>

<div class="single mx-spacing-lg mb-spacing-3lg flex flex-row space-x-spacing">
  <div class="half flex flex-col justify-end">
    <div class="title mb-24">{title}</div>
    <div class="paragraph">
      {#each content as line}
        <div>{line}</div>
      {/each}
    </div>
  </div>
  <img src={image} alt={title} class="half" loading="lazy" />
</div>
