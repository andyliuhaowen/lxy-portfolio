<script lang="ts">
  import { GalleryRow, GalleryRowConfig } from '../utils/gallery-row';
  import Animatable from './animatable.svelte';

  export let rows: GalleryRow[], description: string;

  var width: number;
  let rowFactors = rows.map((row) =>
    row.images.map((curr) => curr.width / curr.height).reduce((prev, curr) => prev + curr)
  );
</script>

<div class="mb-spacing-3lg space-y-spacing" bind:clientWidth={width}>
  {#each rows as row, i}
    {#if row.config === GalleryRowConfig.FixedHeight}
      <div class="flex flex-row space-x-8">
        {#each row.images as image}
          {#if row.images.length === 1}
            <Animatable source={image} alt={`${description} gallery image`} />
          {:else}
            <Animatable
              source={image}
              alt={`${description} gallery image`}
              adaptiveHeight={true}
              totalWidth={width}
              rowCount={row.images.length}
              rowFactor={rowFactors[i]}
            />
          {/if}
        {/each}
      </div>
    {:else}
      <div
        class="grid auto-cols-fr grid-flow-col items-end gap-8"
        class:items-start={row.config === GalleryRowConfig.EqualWidthStart}
        class:items-end={row.config === GalleryRowConfig.EqualWidthEnd}
      >
        {#each row.images as image}
          <Animatable source={image} alt={`${description} gallery image`} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
