<script lang="ts">
  import Logo from '../images/logo.svg';
  import { spring } from 'svelte/motion';

  export let pageWidth: number;

  var progress = spring(1, { stiffness: 0.1, damping: 0.6, precision: 0.005 });
  var open = true;
</script>

<div
  class="relative h-screen min-h-172 xl:min-h-192 shadow-lg flex-shrink-0"
  style={`width: ${$progress * (pageWidth < 1280 ? 16 : 21)}rem`}
>
  <div class="absolute top-0 right-18 xl:right-24 w-36 h-full flex flex-col justify-between py-24">
    <img src={Logo} alt="Shirley Lyu Logo" class="w-full" loading="lazy" />
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
      <a href="https://www.instagram.com/lyu.shirley/">
        <i class="fa-brands fa-instagram" />
      </a>
      <a href="mailto:shirley.lyu.xiaoya@gmail.com">
        <i class="fa-regular fa-envelope" />
      </a>
      <a href="https://www.linkedin.com/in/xiaoya-lyu-11b68419b/">
        <i class="fa-brands fa-linkedin-in" />
      </a>
    </div>
  </div>
  <div class="absolute w-20 h-24 top-20 -right-20 overflow-hidden">
    <div
      class="absolute rounded-full bg-white w-20 h-20 top-0 -left-10 shadow-lg flex items-center cursor-pointer"
      on:click={() => {
        if (open) {
          $progress = 0;
        } else {
          $progress = 1;
        }
        open = !open;
      }}
    >
      <i
        class="relative fa-solid fa-angle-left fa-xl left-12"
        style={`transform: rotateY(${(1 - $progress) * 180}deg)`}
      />
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
