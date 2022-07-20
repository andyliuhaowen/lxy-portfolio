<script lang="ts">
  export let src: string,
    alt: string,
    botSpacing = true;
</script>

<img
  {src}
  {alt}
  class="w-full"
  class:mb-spacing-3lg={botSpacing}
  class:mb-spacing={!botSpacing}
  loading="lazy"
/>
