<!-- src/lib/CentralContainer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import Slideshow from '../about/slideshow.svelte';

  // Sample images for the slideshow
  const images = [
    `${base}/images/test-image.jpeg`,
    `${base}/images/test-image(1).jpeg`,
    `${base}/images/test-image(2).jpeg`
  ];
</script>

<style>
  .container {
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    padding: 20px;
    position: relative;
  }

  .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #EFF0D1;
      padding: 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 100%; /* Adjust width as needed */
      margin-right: 2rem; /* Add space between text and slideshow */
  }

  h1 {
      margin-bottom: 1rem;
  }

  .head {
      color: black;
      list-style: none;
      text-decoration: none;
      font-size: 1.2em;
  }


</style>

<div class="container">
  <div class="content">
      <h1>A Little About Me</h1>
      <slot>
          <p class="head">Hi, I am Cameron. I am a college student at BYU-Idaho studying computer science.</p>
      </slot>
  </div>
      <Slideshow {images} />
</div>
