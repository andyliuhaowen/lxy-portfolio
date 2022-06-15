<script lang="ts">
  import type ProjectDescription from '../utils/project-description';

  export let image: string, description: ProjectDescription;
</script>

<div class="h-screen min-h-132 xl:min-h-152 flex flex-col">
  <img
    src={image}
    alt={description.name}
    class="object-cover flex-shrink flex-grow min-h-0"
    loading="lazy"
  />
  <div class="flex flex-col items-center">
    <div class="flex flex-row mx-spacing-lg py-8 space-x-spacing single-width">
      <div class="half space-y-2">
        <div class="section">
          <span class="heading">Duration:</span>
          {description.duration}
        </div>
        <div class="section">
          <span class="heading">Category:</span>
          {description.category}
        </div>
        <div class="section">
          <span class="heading">Project Focus:</span>
          {description.focus}
        </div>
      </div>
      <div class="half space-y-2">
        <div class="section">
          <span class="heading">Project Brief:</span>
          {description.brief}
        </div>
        {#if description.comment !== undefined}
          <div class="text-xs">
            * {description.comment}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
<div class="pt-spacing-lg" />

<style lang="postcss">
  .section {
    @apply font-extralight;
    & span {
      @apply font-semibold;
    }
  }
</style>
