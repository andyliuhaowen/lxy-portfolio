<script lang="ts">
  import Sidebar from '../components/sidebar.svelte';
  import Scroller from '../components/scroller.svelte';
  import TopDisplay from '../components/top-display.svelte';
  import ProjectDescription from '../utils/project-description';

  import Top from '../images/overlap/top.jpg?webp';

  var pageWidth;
</script>

<svelte:head>
  <title>Shirley Lyu Portfolio</title>
</svelte:head>

<div class="flex flex-row" bind:clientWidth={pageWidth}>
  <Sidebar pageWidth={pageWidth} />
  <Scroller>
    <TopDisplay
      image={Top}
      description={new ProjectDescription(
        'Overlap',
        '14 Weeks',
        'Lifestyle Product Design',
        'Prototype, Techdrawing, Modelmaking, Manufacture',
        'Designing and making a line of accessories for Hay. The design will include a range of small and functional objects, which fits the brand identity and considers the company’s manufacturing techniques, as well their use of materials.',
        'This is not a product of Hay. Branding and logo marks are used for demonstration purposes only.'
      )}
    />
  </Scroller>
</div>
