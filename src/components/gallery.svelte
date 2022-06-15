<script lang="ts">
  import type GalleryItemLean from '../utils/gallery-item-lean';

  export let items: GalleryItemLean[];
</script>

<div class="grid grid-cols-3 gap-spacing mx-spacing-lg font-extralight mb-spacing-lg single-width">
  {#each items as item}
    <div class="flex flex-col items-center">
      <img src={item.image} alt={item.description} />
      <div class="mt-2">{item.description}</div>
    </div>
  {/each}
</div>
