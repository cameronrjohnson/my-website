<script>
    import { base } from '$app/paths';
</script>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="{base}/static/images/newface.jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="dark light" />
    <!-- Tailwind CSS CDN (if not using a build process) -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="text-white m-0 p-0">

    <header class="text-white py-5 w-full">
        <div class="container mx-auto flex justify-between items-center px-5">
            <div class="branding flex items-center">
                <img src="{base}/images/newface.jpeg" alt="Cameron Johnson" class="rounded-full w-12 h-12 mr-5">
                <a href="{base}/" class="text-2xl">
                    <h1 class="m-0">Cameron Johnson</h1>
                </a>
            </div>
            <nav>
                <ul class="list-none flex p-0 m-0">
                    <li class="mr-5"><a href="{base}/about" class="text-lg ">My Story</a></li>
                    <li class="mr-5"><a href="{base}/portfolio" class="text-lg ">Experience</a></li>
                    <li><a href="{base}/contact" class="text-lg ">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    </header>


    <script>
        const theme = new URL(window.location).searchParams.get('theme');
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme || 'light');
    </script>
</body>
</html>
