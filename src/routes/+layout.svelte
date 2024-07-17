<script>
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<style>
  .layout-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }

  main {
      flex: 1;
  }

  .gradient-background {
      background: linear-gradient(45deg, #ff6b6b, #ffbb3b, #51cf66);
      background-size: 600% 600%;
      animation: gradient 10s ease infinite;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
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

<div class="layout-container">
  <div class="gradient-background"></div>
  <Header />
  <main>
      <slot />
  </main>
  <Footer />
</div>
