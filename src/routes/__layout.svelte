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
    --spacing-lg: 2rem;
    --sidebar: 16rem;
    @apply text-base;
  }

  @media (min-width: 1280px) {
    :root {
      --spacing: 4rem;
      --spacing-lg: 6rem;
      --sidebar: 21rem;
      @apply text-lg;
    }
  }

  .title {
    @apply font-semibold text-xl xl:text-2xl;
  }

  .button {
    @apply rounded-full shadow bg-gray-200;
  }

  .single-width {
    width: calc(100vw - var(--sidebar) - 2 * var(--spacing-lg));
  }

  /* 1 | 1 */
  .half {
    width: calc((100vw - var(--sidebar) - 2 * var(--spacing-lg) - var(--spacing)) / 2);
  }

  /* 2 | 1 */
  .two-thirds {
    width: calc((100vw - var(--sidebar) - 2 * var(--spacing-lg) - var(--spacing)) * 2 / 3);
  }

  /* 1 | 2 */
  .one-third {
    width: calc((100vw - 21rem - 2 * var(--spacing-lg) - var(--spacing)) / 3);
  }

  /* 1 | 1 | 1 */
  .one-in-three-sparse {
    width: calc((100vw - 21rem - 2 * var(--spacing-lg) - 2 * var(--spacing-lg)) / 3);
  }
</style>
