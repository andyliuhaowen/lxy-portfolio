<script lang="ts">
  import Sidebar from '../components/sidebar.svelte';
  import Scroller from '../components/scroller.svelte';
  import TopDisplay from '../components/top-display.svelte';
  import ProjectDescription from '../utils/project-description';
  import TextImage from '../components/text-image.svelte';
  import ImageText from '../components/image-text.svelte';
  import GalleryItem from '../utils/gallery-item';
  import HorizontalGallery from '../components/horizontal-gallery.svelte';
  import OverlayImage from '../components/overlay-image.svelte';

  import TopImage from '../images/overlap/top.jpg?webp&w=1920';
  import ManifestoImage from '../images/overlap/manifesto.jpg?webp&w=960';
  import Set1 from '../images/overlap/set_1.png?webp&w=640';
  import Set2 from '../images/overlap/set_2.png?webp&w=640';
  import Set3 from '../images/overlap/set_3.png?webp&w=640';
  import Overlay1 from '../images/overlap/overlay_1.png?webp&w=1920';
  import Overlay2 from '../images/overlap/overlay_2.png?webp&w=1920';
  import Overlay3 from '../images/overlap/overlay_3.png?webp&w=1920';
  import TimerImage from '../images/overlap/timer.png?webp&w=960';
  import TimerUseImage from '../images/overlap/timer_use.png?webp&w=1280';
  import FileSorterImage from '../images/overlap/file_sorter.png?webp&w=960';
  import FileSorterUseImage1 from '../images/overlap/file_sorter_use_1.png?webp&w=1280';
  import TrayImage from '../images/overlap/tray.png?webp&w=960';
  import TrayUseImage1 from '../images/overlap/tray_use_1.png?webp&w=1280';
  import TrayUseImage2 from '../images/overlap/tray_use_2.png?webp&w=1280';

  var pageWidth;
</script>

<svelte:head>
  <title>Shirley Lyu Portfolio</title>
</svelte:head>

<div class="flex flex-row" bind:clientWidth={pageWidth}>
  <Sidebar {pageWidth} />
  <Scroller>
    <TopDisplay
      image={TopImage}
      description={new ProjectDescription(
        'Overlap',
        '14 Weeks',
        'Lifestyle Product Design',
        'Prototype, Techdrawing, Modelmaking, Manufacture',
        'Designing and making a line of accessories for Hay. The design will include a range of small and functional objects, which fits the brand identity and considers the company’s manufacturing techniques, as well their use of materials.',
        'This is not a product of Hay. Branding and logo marks are used for demonstration purposes only.'
      )}
    />
    <div class="flex flex-col items-center">
      <TextImage
        title="Project Manifesto"
        content={[
          'A collection of office accessories that can provide users with an intuitive concept of category. To help users better organize their time, space, and objects.'
        ]}
        image={ManifestoImage}
      />

      <div class="title mx-spacing-lg mt-spacing-lg mb-24 single-width">Overlap Set</div>
      <HorizontalGallery
        items={[
          new GalleryItem('Timer', 'Section Time', Set1),
          new GalleryItem('File Sorter', 'Categorize files, books, etc.', Set2),
          new GalleryItem('Tray', 'Store pens, pins, etc.', Set3)
        ]}
      />
      <div class="pt-spacing-lg" />
      <div class="title mx-spacing-lg mt-spacing-lg mb-24 single-width">
        Time, Space, Organizing
      </div>
      <OverlayImage
        title="Overlapped"
        content="Time and space sometimes overlap."
        image={Overlay1}
      />
      <div class="pt-spacing-lg" />
      <OverlayImage
        title="Changeable"
        content="Time changes are unnoticeable, so objects’ movements and Changes are used to define time pass and environment change."
        image={Overlay2}
      />
      <div class="pt-spacing-lg" />
      <OverlayImage title="Joyful" content="Categorizing can be a joyful thing!" image={Overlay3} />

      <!-- Timer -->
      <TextImage
        title="Timer"
        content={['Overlapped part = Set up time', '1 Slice = 10 mins', 'Total: 1 hour']}
        image={TimerImage}
      />
      <ImageText
        title="Timer usage"
        content={['Set a Time', 'Set-time Passing']}
        image={TimerUseImage}
      />
      <!-- File Sorter -->
      <TextImage
        title="File Sorter"
        content={[
          '4 Different translucent colored blockers categorize files with height and colors.'
        ]}
        image={FileSorterImage}
      />
      <ImageText
        title="File sorter usage 1"
        content={['Put in file']}
        image={FileSorterUseImage1}
      />
      <!-- Tray -->
      <TextImage
        title="Tray"
        content={['4 Different color, size, and depth trays to categorize office accessories.']}
        image={TrayImage}
      />
      <ImageText title="Tray usage 1" content={['Different combinations']} image={TrayUseImage1} />
      <ImageText title="Tray usage 2" content={['Different usage']} image={TrayUseImage2} />
    </div>
  </Scroller>
</div>
