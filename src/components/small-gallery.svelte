<script lang="ts">
  import type GalleryItemLean from '../utils/gallery-item-lean';

  export let items: GalleryItemLean[];
</script>

<div
  class="single mx-spacing-lg mb-spacing-3lg grid grid-cols-3 gap-y-spacing gap-x-8 font-extralight"
>
  {#each items as item}
    <div class="flex flex-col items-center">
      <img src={item.image} alt={item.description} />
      <div class="mt-2">{item.description}</div>
    </div>
  {/each}
</div>
