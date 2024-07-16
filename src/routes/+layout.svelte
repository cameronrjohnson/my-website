<script>
    import {base} from '$app/paths';
</script>
  
  
<!-- Your HTML structure continues here -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Dev Website</title></head>
<header>
    <div class="container">
        <div class="branding">
            <img src="{base}/images/newface.jpeg" alt="Cameron Johnson" class="profile-pic">
            <h1>Cameron Johnson</h1>
        </div>
        <nav>
            <ul>
                <li><a href="{base}/">Home</a></li>
                <li><a href="{base}/about">About</a></li>
                <li><a href="{base}/portfolio">Portfolio</a></li>
                <li><a href="{base}/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<main id="main-content">
    <slot />
</main>

<div class="background-slideshow"></div>

<footer>
    <div class="container">
        <p>&copy; 2024 Cameron Johnson. All Rights Reserved.</p>
        <div class="social-media">
            <a href="https://github.com/CameronRJohnson" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/cameron-johnson-b13b54200/" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/cameron.__.j/?hl=en" target="_blank">Instagram</a>
        </div>
    </div>
</footer>