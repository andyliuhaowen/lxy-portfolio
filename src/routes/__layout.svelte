<script lang="ts">
  import '../app.css';
</script>

<div class="hidden md:block">
  <slot />
</div>
<div class="block md:hidden m-12 font-semibold">
  Your screen is too small. Use a larger device or enlarge your browser window.
</div>
