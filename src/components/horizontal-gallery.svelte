<script lang="ts">
  import type GalleryItem from 'src/utils/gallery-item';

  export let items: GalleryItem[];
</script>

<div class="single mx-spacing-lg mb-spacing-3lg flex flex-row justify-around">
  {#each items as item}
    <div class="one-in-three-sparse flex flex-col items-center">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div class="subtitle mt-4 text-center xl:mt-8">{item.title}</div>
      <div class="paragraph text-center">{item.description}</div>
    </div>
  {/each}
</div>
