<script lang="ts">
  export let prev: string | undefined = undefined,
    next: string | undefined = undefined;
</script>

<div class="flex flex-row font-semibold single">
  {#if prev !== undefined}
    <div class="mr-auto flex flex-row items-center space-x-4">
      <i class="fa-solid fa-angle-left" />
      <a href={prev}>Previous Project</a>
    </div>
  {/if}
  {#if next !== undefined}
    <div class="ml-auto flex flex-row items-center space-x-4">
      <a href={next}>Next Project</a>
      <i class="fa-solid fa-angle-right" />
    </div>
  {/if}
</div>
