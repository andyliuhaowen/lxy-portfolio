<script lang="ts">
  import type GalleryItem from 'src/utils/gallery-item';

  export let items: GalleryItem[],
    sparse = false,
    botSpacing = true;
</script>

<div
  class="single mx-spacing-lg flex flex-row"
  class:mb-spacing-3lg={botSpacing}
  class:mb-spacing={!botSpacing}
  class:space-x-spacing={!sparse}
  class:space-x-spacing-lg={sparse}
>
  {#each items as item}
    <div class={`flex flex-col items-center`}>
      <img src={item.image} alt={item.title} loading="lazy" class="mb-4 xl:mb-8" />
      {#if item.title !== undefined}
        <div class="subtitle text-center">{item.title}</div>
      {/if}
      {#if item.description !== undefined}
        <div class="paragraph text-center">{item.description}</div>
      {/if}
    </div>
  {/each}
</div>
