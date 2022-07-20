<script lang="ts">
  import Spacing from './spacing.svelte';

  export let bgColor: string;
</script>

<div class={`flex-grow ${bgColor}`}>
  <div class="h-screen min-h-132 overflow-x-hidden overflow-y-scroll xl:min-h-152">
    <div class="flex flex-col items-center">
      <slot />
      <Spacing />
    </div>
  </div>
</div>
