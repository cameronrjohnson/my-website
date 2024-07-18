<!-- src/routes/YourPage.svelte -->
<script>
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    background-color: #262730; /* Ensure white background above and below header/footer */
  }

  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensure full viewport height */
  }

  main {
    flex: 1;
    background: linear-gradient(45deg, #262730, #D33F49, #EFF0D1); /* Gradient background */
    background-size: 600%; /* Adjust background size as needed */
    display: flex; /* Enable flexbox for main content */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    text-align: center; /* Align text content center */
  }

  /* Adjust gradient animation */
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>

<div class="layout-container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
