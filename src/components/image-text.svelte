<script lang="ts">
  export let title: string, content: string[], image: string;
</script>

<div class="flex flex-row p-spacing-lg space-x-spacing justify-around">
  <img src={image} alt={title} class="two-thirds" loading="lazy" />
  <div class="one-third flex flex-col justify-end">
    <div class="font-extralight text-right">
      {#each content as line}
        <div>{line}</div>
      {/each}
    </div>
  </div>
</div>
