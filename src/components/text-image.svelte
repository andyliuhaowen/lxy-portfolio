<script lang="ts">
  export let title: string, content: string[], image: string;
</script>

<div class="flex flex-row p-spacing-lg space-x-spacing justify-around">
  <div class="half flex flex-col justify-end">
    <div class="mb-24 title">{title}</div>
    <div class="font-extralight">
      {#each content as line}
        <div>{line}</div>
      {/each}
    </div>
  </div>
  <img src={image} alt={title} class="half" loading="lazy" />
</div>
