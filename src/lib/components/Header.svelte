<script>
    import { base } from '$app/paths';
  </script>
  
  <style>
  
  
    .container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  
    header {
        background-color: #262730;
        color: white;
        padding: 20px 0;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
    }
  
    .branding {
        display: flex;
        align-items: center;
    }
  
    .branding img.profile-pic {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
  
    header h1 {
        margin: 0;
        font-size: 2em;
    }
  
    header nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }
  
    header nav ul li {
        margin-right: 20px;
    }
  
    header nav ul li a, 
    header .branding a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
    }
  
  </style>
  <html lang="en">
      <header>
          <div class="container">
              <div class="branding">
                  <img src="{base}/images/newface.jpeg" alt="Cameron Johnson" class="profile-pic">
                  <a href="{base}/">
                      <h1>Cameron Johnson</h1>
                  </a>
              </div>
              <nav>
                  <ul>
                      <li><a href="{base}/about">My Story</a></li>
                      <li><a href="{base}/portfolio">Experience</a></li>
                      <li><a href="{base}/contact">Lets Chat!</a></li>
                  </ul>
              </nav>
          </div>
        </header>
  </html>