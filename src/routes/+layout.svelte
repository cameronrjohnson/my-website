<!-- src/routes/YourPage.svelte -->
<script>
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    background-color: #262730; /* Dark background for the whole page */
    font-family: Arial, sans-serif; /* Default font for consistency */
  }

  div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  main {
    animation: gradient 15s ease infinite;
    background: linear-gradient(45deg, #262730, #8b292f);
    background-size: 300%; /* Adjust as needed for smoother animation */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

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

<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
