<script lang="ts">
  export let items: string[][];
</script>

<div class="space-y-spacing mb-spacing-lg">
  {#each items as row}
    <div class="flex flex-row space-x-8">
      {#each row as image}
        <img src={image} alt="Gallery item" class="flex-grow flex-shrink min-w-0 h-auto" />
      {/each}
    </div>
  {/each}
</div>
