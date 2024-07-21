<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let images: string[] = [];

    const currentImageIndex = writable(0);

    function nextImage() {
        currentImageIndex.update(index => (index + 1) % images.length);
    }

    function prevImage() {
        currentImageIndex.update(index => (index - 1 + images.length) % images.length);
    }

    let interval: ReturnType<typeof setInterval>;
    onMount(() => {
        interval = setInterval(nextImage, 10000); // Change image every 10 seconds
        return () => clearInterval(interval);
    });
</script>

<style>
    .slideshow {
        position: relative;
        display: flex;
        height: 30vh;
        width: 30vw;  
    }

    .slideshow img {
        height: 30vh;
        width: 30vh;
        border-radius: 6px;
        position: absolute;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .slideshow img.active {
        opacity: 1;
    }
</style>

<div class="slideshow">
    {#if images.length > 0}
        {#each images as image, index (image)}
            <img src={image} alt="" class={$currentImageIndex === index ? 'active' : ''} />
        {/each}
    {/if}
</div>
