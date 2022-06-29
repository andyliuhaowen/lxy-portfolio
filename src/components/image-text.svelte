<script lang="ts">
  export let title: string, content: string[], image: string;
</script>

<div class="single mx-spacing-lg mb-spacing-3lg flex flex-row space-x-spacing">
  <img src={image} alt={title} class="two-thirds" loading="lazy" />
  <div class="one-third flex flex-col justify-end">
    <div class="text-right font-extralight">
      {#each content as line}
        <div>{line}</div>
      {/each}
    </div>
  </div>
</div>
