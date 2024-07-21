<!-- src/lib/CentralContainer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import Slideshow from '../about/slideshow.svelte';

  // Sample images for the slideshow
  const images = [
    `${base}/images/me-photos/Fish_Square.jpeg`,
    `${base}/images/me-photos/Grad_Square.JPG`,
    `${base}/images/me-photos/Kids_Square.jpeg`,
    `${base}/images/me-photos/Snow_Square.jpeg`,
    `${base}/images/me-photos/Family_Square.jpeg`,
    `${base}/images/me-photos/Dog_Square.jpeg`,
  ];
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;  
    width: 100%;              
    max-width: 1200px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    background-color: #EFF0D1;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: left;
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
      <p class="head">
        Hi, I am Cameron. I am a college student at BYU-Idaho studying computer science. When it is too hot to go 
        fishing or too cold to snowboard, you can usually find me playing Elden Ring or Counter-Strike with my friends 
        and hanging out with my puppy.
      </p>
    </slot>
  </div>
  <Slideshow {images} />
</div>
