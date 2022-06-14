<script lang="ts">
  import Logo from '../images/logo.svg';
</script>

<div class="px-24 text-lg items-center">
  <div class="w-36 h-screen flex flex-col justify-between py-24">
    <img src={Logo} alt="Shirley Lyu Logo" class="w-full" />
    <div class="flex flex-col space-y-2">
      <a href="/about" class="primary">About</a>
      <a href="/portfolio" class="primary">Portfolio</a>

      <a href="/overlap" class="secondary">Overlap</a>
      <a href="/lyu" class="secondary">Lyu</a>
      <a href="/soul" class="secondary">Soul</a>
      <a href="/sunrise" class="secondary">Sunrise Speaker</a>
      <a href="/mode" class="secondary">Mode Bag</a>
      <a href="/More" class="secondary">More</a>

      <a href="/mini" class="primary">Mini Works</a>
      <a href="/resume" class="primary pb-8">Resume</a>
    </div>
    <div class="flex flex-row justify-between">
      <i class="fa-brands fa-instagram" />
      <i class="fa-regular fa-envelope" />
      <i class="fa-brands fa-linkedin-in" />
    </div>
  </div>
</div>

<style lang="postcss">
  .primary {
    @apply font-semibold;
  }

  .secondary {
    @apply font-extralight;
  }
</style>
