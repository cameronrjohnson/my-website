<script lang="ts">
    import { base } from '$app/paths';
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Dev Website</title>
</head>
<body>
    <header>
        <div class="container">
            <h1>Cameron Johnson</h1>
            <nav>
                <ul>
                    <li><a href="{base}/">Home</a></li>
                    <li><a href="{base}/">Portfolio</a></li>
                    <li><a href="{base}/">Resume</a></li>
                    <li><a href="{base}/">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    </header>
</body>

<slot />

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

