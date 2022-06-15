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
  import Title from '../components/title.svelte';
  import Spacing from '../components/spacing.svelte';
  import Gallery from '../components/gallery.svelte';
  import GalleryItemLean from '../utils/gallery-item-lean';
  import LargeGallery from '../components/large-gallery.svelte';

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
  import FileSorterUseImage2 from '../images/overlap/file_sorter_use_2.png?webp&w=1280';
  import TrayImage from '../images/overlap/tray.png?webp&w=960';
  import TrayUseImage1 from '../images/overlap/tray_use_1.png?webp&w=1280';
  import TrayUseImage2 from '../images/overlap/tray_use_2.png?webp&w=1280';
  import WoodCut from '../images/overlap/wood_cut.png?webp&w=640';
  import WoodFlatten from '../images/overlap/wood_flatten.png?webp&w=640';
  import CNC from '../images/overlap/cnc.png?webp&w=640';
  import LaserCut from '../images/overlap/laser_cut.png?webp&w=640';
  import BandSawCut from '../images/overlap/band_saw_cut.png?webp&w=640';
  import MachineSanding from '../images/overlap/machine_sanding.png?webp&w=640';
  import HandSanding from '../images/overlap/hand_sanding.png?webp&w=640';
  import RouterChamfer from '../images/overlap/router_chamfer.png?webp&w=640';
  import WoodStain from '../images/overlap/wood_stain.png?webp&w=640';
  import AcrylicGluing from '../images/overlap/acrylic_gluing.png?webp&w=640';
  import ClearMatteFinishSpray from '../images/overlap/clear_matte_finish_spray.png?webp&w=640';
  import Assembly from '../images/overlap/assembly.png?webp&w=640';
  import Gallery1 from '../images/overlap/gallery_1.png?webp&w=1920';
  import Gallery2 from '../images/overlap/gallery_2.png?webp&w=640';
  import Gallery3 from '../images/overlap/gallery_3.png?webp&w=640';
  import Gallery4 from '../images/overlap/gallery_4.png?webp&w=640';
  import Gallery5 from '../images/overlap/gallery_5.png?webp&w=1920';
  import Gallery6 from '../images/overlap/gallery_6.png?webp&w=1920';
  import Gallery7 from '../images/overlap/gallery_7.png?webp&w=1920';

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

      <Title title="Overlap Set" />
      <HorizontalGallery
        items={[
          new GalleryItem('Timer', 'Section Time', Set1),
          new GalleryItem('File Sorter', 'Categorize files, books, etc.', Set2),
          new GalleryItem('Tray', 'Store pens, pins, etc.', Set3)
        ]}
      />
      <Spacing />
      <Title title="Time, Space, Organizing" />
      <OverlayImage
        title="Overlapped"
        content="Time and space sometimes overlap."
        image={Overlay1}
      />
      <Spacing />
      <OverlayImage
        title="Changeable"
        content="Time changes are unnoticeable, so objects’ movements and Changes are used to define time pass and environment change."
        image={Overlay2}
      />
      <Spacing />
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
      <ImageText
        title="File sorter usage 2"
        content={['Different Overlapping Order']}
        image={FileSorterUseImage2}
      />

      <!-- Tray -->
      <TextImage
        title="Tray"
        content={['4 Different color, size, and depth trays to categorize office accessories.']}
        image={TrayImage}
      />
      <ImageText title="Tray usage 1" content={['Different combinations']} image={TrayUseImage1} />
      <ImageText title="Tray usage 2" content={['Different usage']} image={TrayUseImage2} />

      <!-- Tech Drawing -->
      <Title title="Tech Drawing" />
      <div
        class="relative single-width mb-spacing-lg"
        style="box-sizing: content-box; padding-top: 49.5%;"
      >
        <div class="absolute w-full h-full top-0">
          <iframe
            title="Tech Drawing Book"
            allowfullscreen={true}
            scrolling="no"
            class="fp-iframe"
            style="border: 1px solid lightgray; width: 100%; height: 100%;"
            src="https://heyzine.com/flip-book/cfeec7d272.html"
          />
        </div>
      </div>

      <!-- Links -->
      <Spacing />
      <a class="button px-6 py-3" href="/">Weekly Process</a>
      <div class="flex flex-row mt-spacing text-center space-x-spacing">
        <a class="button w-44 py-2" href="/overlap/brand_research.pdf" target="_blank"
          >Brand Research</a
        >
        <a class="button w-44 py-2" href="/overlap/ideation.pdf" target="_blank">Ideation</a>
        <a class="button w-44 py-2" href="/">Prototype</a>
        <a class="button w-44 py-2" href="/">CMF & Manufacture</a>
      </div>
      <Spacing />

      <!-- Making process -->
      <Title title="Final Model Making Process" />
      <Gallery
        items={[
          new GalleryItemLean('Wood Cut', WoodCut),
          new GalleryItemLean('Wood Flatten', WoodFlatten),
          new GalleryItemLean('CNC', CNC),
          new GalleryItemLean('Laser Cut', LaserCut),
          new GalleryItemLean('Band Saw Cut', BandSawCut),
          new GalleryItemLean('Machine Sanding', MachineSanding),
          new GalleryItemLean('Hand Sanding', HandSanding),
          new GalleryItemLean('Router Chamfer', RouterChamfer),
          new GalleryItemLean('Wood Stain', WoodStain),
          new GalleryItemLean('Acrylic Gluing', AcrylicGluing),
          new GalleryItemLean('Clear Matte Finish Spray', ClearMatteFinishSpray),
          new GalleryItemLean('Assembly', Assembly)
        ]}
      />

      <Title title="Final Gallery" />
      <LargeGallery
        items={[[Gallery1], [Gallery2, Gallery3, Gallery4], [Gallery5], [Gallery6], [Gallery7]]}
      />

      <a class="px-6 py-3 button" href="/lyu">Next Project</a>
      <Spacing />
    </div>
  </Scroller>
</div>
