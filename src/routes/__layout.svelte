<script lang="ts">
  import '../app.css';
</script>

<div class="hidden md:block">
  <slot />
</div>
<div class="block md:hidden m-12 font-semibold">
  Your screen is too small. Use a larger device or enlarge your browser window.
</div>

<style global lang="postcss">
  :root {
    --spacing: 1.5rem;
    --spacing-lg: 1.5rem;
    @apply text-base;
  }

  @media (min-width: 1280px) {
    :root {
      --spacing: 2rem;
      --spacing-lg: 4rem;
      @apply text-lg;
    }
  }

  .half {
    width: calc((100vw - 21rem - 2 * var(--spacing-lg) - var(--spacing)) / 2);
  }
</style>
