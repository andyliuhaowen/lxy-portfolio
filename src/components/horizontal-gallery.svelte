<script lang="ts">
  import type GalleryItem from 'src/utils/gallery-item';

  export let items: GalleryItem[];
</script>

<div class="flex flex-row mx-spacing-lg justify-around single-width">
  {#each items as item}
    <div class="flex flex-col items-center one-in-three-sparse">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div class="font-semibold text-base xl:text-lg mt-4 xl:mt-8 text-center">{item.title}</div>
      <div class="font-extralight text-sm xl:text-base text-center">{item.description}</div>
    </div>
  {/each}
</div>
