<!-- src/routes/YourPage.svelte -->
<script>
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>


<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%; /* Ensure the body takes up the full viewport height */
    width: 100%;  /* Ensure the body takes up the full viewport width */
    font-family: Arial, sans-serif; /* Default font for consistency */
    background: #262730; /* Base background color */
  }

  div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh; /* Ensures the grid takes up the full viewport height */
  }

  main {
    background: #262730; /* Gradient for the main content area */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%; /* Ensure the main area spans the full width */
    height: 100%; /* Ensure the main area spans the full height */
  }
</style>

<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
