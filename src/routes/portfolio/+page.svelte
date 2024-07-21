<!-- src/lib/CentralContainer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 60vw;
    background-color: hsl(0, 0, 30%);
  }

  .content {
    background-color: #EFF0D1;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 30vw;
    height: 60vh;
    margin: 0 20px; /* Add margin to create space between the content sections */
    display: flex;
  }

  h1 {
    margin-bottom: 1rem;
  }
  
  .body {
    color: black;
    list-style: none;
    text-decoration: none;
    font-size: medium;
  }

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .image-container img {
    max-width: 50vw;
    max-height: 50vh;
    object-fit: contain;
  }

  .header {
    font-size: large;
    top: 0%;
  }

  .list {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;
  }

  .list ul {
    padding: 0;
    margin: 0;
  }

  .list li {
    padding: 0;
    margin: 0;
  }

</style>

<div class="container">
  <div class="content image-container">
    <h2> Resume </h2>
    <a href="{base}/images/Cameron Johnson Resume.pdf" download="Cameron-Johnson-Resume">
      <img src="{base}/images/Cameron_Resume.jpg" alt="Cameron-Johnson-Resume">
    </a>
  </div>

  <div class="content">
    <div class="list">
      <h1 class="header">Here are a few of my skills.</h1>

      <h2 class="body">- Mobile Development -</h2>
      <ul>
        <li>Android</li>
        <li>iOS</li>
      </ul>
      <h2 class="body">- Web Development -</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <h2 class="body">- Game Development -</h2>
      <ul>
        <li>Unity</li>
        <li>Unreal Engine</li>
      </ul>
      <h2 class="body">- Other -</h2>
      <ul>
        <li>Git</li>
        <li>Docker</li>
      </ul>
    </div>
  </div>
</div>
