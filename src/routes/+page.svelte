<script lang="ts">
  import { base } from '$app/paths';
  import Slideshow from '../lib/components/slideshow.svelte';

  // Sample images for the slideshow
  const images = [
    `${base}/images/me-photos/Fish_Square.jpeg`,
    `${base}/images/me-photos/Family_Square.jpeg`,
    `${base}/images/me-photos/Kids_Square.jpeg`,
    `${base}/images/me-photos/Snow_Square.jpeg`,
    `${base}/images/me-photos/Grad_Square.JPG`,
  ];
</script>

<div class="flex flex-col lg:flex-row items-center justify-center w-full p-8">
  <div class="flex-1 text-left lg:mr-8">
    <div class="bg-yellow-100 p-8 shadow-lg rounded-lg text-left max-w-4xl mx-auto flex flex-col lg:flex-row">
      <div class="flex flex-col p-5">
        <h1 class="text-2xl font-bold mb-4 text-black">A Little About Me</h1>
        <p class="text-base text-black">
          Hello! I’m Cameron, a computer science student at BYU-Idaho with a passion for software development. When I’m not coding or studying, 
          you’ll likely find me enjoying outdoor adventures like fishing and snowboarding, or diving into games like Elden Ring and Counter-Strike 
          with friends. I also cherish the time spent hanging out with my dog.
        </p>
      </div>
      <div class="flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 flex justify-center">
        <Slideshow {images} />
      </div>
    </div>
  </div>
</div>
