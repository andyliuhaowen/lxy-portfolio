<script lang="ts">
  export let title: string, content: string, image: string;
</script>

<div class="single relative mx-spacing-lg mb-spacing-3lg">
  <img src={image} alt={title} class="w-full" />
  <div class="absolute left-0 right-2/3 top-0 bottom-2/3 pr-4">
    <div class="subtitle">{title}</div>
    <div class="paragraph">{content}</div>
  </div>
</div>
