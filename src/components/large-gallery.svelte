<script lang="ts">
  import type Image from '../utils/image';

  export let items: Image[][];
</script>

<div class="space-y-spacing mb-spacing-lg">
  {#each items as row}
    <div class="flex flex-row space-x-8">
      {#each row as image}
        {#if row.length === 1}
          <img src={image.src} alt="Gallery item" />
        {:else}
          <img
            src={image.src}
            alt="Gallery item"
            class="max-w-full"
            style={`height: calc((100vw - ${(row.length - 1) * 2}rem - var(--sidebar))/${row
              .map((curr) => curr.width / curr.height)
              .reduce((prev, curr) => prev + curr)}`}
          />
        {/if}
      {/each}
    </div>
  {/each}
</div>
