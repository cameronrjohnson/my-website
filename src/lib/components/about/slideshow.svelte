<!-- src/lib/Slideshow.svelte -->
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
        interval = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    });
</script>

<style>
    .slideshow {
        position: relative;
    }

    .slideshow img {
        height: 200px;
        width: 200px;
        border-radius: 6px;
    }



</style>

<div class="slideshow">
    {#if images.length > 0}
        {#each images as image, index (image)}
            <img src={image} alt="" style:display={$currentImageIndex === index ? 'block' : 'none'} />
        {/each}
    {/if}

</div>
