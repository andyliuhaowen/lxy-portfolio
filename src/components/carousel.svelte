<script lang="ts">
  export let images: string[], description: string;

  let currentIndex = 0;
</script>

<div class="single flex flex-row w-full items-center space-x-4 text-gray-900">
  <i
    class="fa-solid fa-angle-left fa-3x angle"
    class:cursor-pointer={currentIndex !== 0}
    class:opacity-0={currentIndex === 0}
    on:click={() => {
      if (currentIndex > 0) currentIndex -= 1;
    }}
  />
  <div class="overflow-hidden">
    <div
      class="flex flex-row w-full transition-transform duration-150"
      style={`transform: translateX(-${currentIndex}00%`}
    >
      {#each images as image, index}
        <img src={image} alt={`${description} ${index}`} class="w-full flex-shrink-0" />
      {/each}
    </div>
  </div>
  <i
    class="fa-solid fa-angle-right fa-3x angle"
    class:cursor-pointer={currentIndex !== images.length - 1}
    class:opacity-0={currentIndex === images.length - 1}
    on:click={() => {
      if (currentIndex < images.length - 1) currentIndex += 1;
    }}
  />
</div>
<div class="single relative h-3 mt-4 mb-spacing-3lg">
  <div class="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-row space-x-3">
    {#each images as _, index}
      <div
        class="w-3 h-3 relative cursor-pointer text-gray-900"
        on:click={() => {
          currentIndex = index;
        }}
      >
        <i class="fa-regular fa-circle fa-xs absolute top-1.5 left-0" />
        <i
          class="fa-solid fa-circle fa-xs absolute top-1.5 left-0 transition-opacity duration-150"
          class:opacity-0={index !== currentIndex}
        />
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .angle {
    @apply transition-opacity duration-150 relative;
  }
</style>
