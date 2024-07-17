<!-- src/lib/CentralContainer.svelte -->
<script lang="ts">
      import {base} from '$app/paths';
    </script>
    
    <style>
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background-color: hsl(0, 0, 30%);
      }
    
      .content {
        background-color: white;
        padding: 2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 800px;
        width: 100%;
        text-align: center;
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
        <h1>Hi, I am an aspiring software engineer!</h1>
        <slot>
            <p class="head">Feel free to look around my website.</p>
        </slot>
      </div>
    </div>
    