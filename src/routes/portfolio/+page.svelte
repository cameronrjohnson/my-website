<!-- src/lib/CentralContainer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<style>
  .container {
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    background-color: hsl(0, 0, 30%);
    padding: 20px;
    box-sizing: border-box;
  }

  .content {
    background-color: #EFF0D1;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    width: 30%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }



  h1, h2 {
    margin-bottom: 1rem;
    color: black;
    text-align: center;
  }

  .body {
    font-size: 1rem;
    color: black;
  }

  .image-container img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .image-container img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .list {
    text-align: left;
    width: 100%;
  }

  .list ul {
    padding: 0;
    margin: 0;
  }

  .list li {
    padding: 5px 0;
    font-size: 1rem;
    color: black;
  }
</style>

<div class="container">
  <div class="content">
    <div class="image-container">
      <h2>Resume</h2>
      <a href="{base}/images/Cameron Johnson Resume.pdf" download="Cameron-Johnson-Resume">
        <img src="{base}/images/Cameron_Resume.jpg" alt="Cameron Johnson Resume">
      </a>
    </div>
  </div>

  <div class="content">
    <div class="list">
      <h1 class="header">Here are a few of my skills</h1>

      <h2 class="body">- Mobile Development -</h2>
      <ul>
        <li>Dart, Swift, Java</li>
        <li>Flutter, Flame, Bonfire</li>
      </ul>

      <h2 class="body">- Web Development -</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>WordPress, Google Ads</li>
      </ul>

      <h2 class="body">- Game Development -</h2>
      <ul>
        <li>C#, Unity, Blender</li>
      </ul>

      <h2 class="body">- Other -</h2>
      <ul>
        <li>Firebase, Supabase, Git</li>
      </ul>
    </div>
  </div>
</div>
