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
        interval = setInterval(nextImage, 10000);
        return () => clearInterval(interval);
    });
</script>

<div class="relative flex items-center justify-center p-4 h-60 w-60">
    {#if images.length > 0}
        {#each images as image, index (image)}
            <img 
                src={image} 
                alt="" 
                class={`absolute inset-0 object-cover rounded-md transition-opacity duration-1000 ease-in-out ${$currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`} 
            />
        {/each}
    {/if}
</div>
