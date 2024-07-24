<script lang="ts">
    import { writable } from "svelte/store";

    export let events: { title: string; message: string; image: string; date: string }[] = [];

    const currentEventIndex = writable(0);

    function nextEvent() {
        currentEventIndex.update((index) => (index < events.length - 1 ? index + 1 : index));
    }

    function prevEvent() {
        currentEventIndex.update((index) => (index > 0 ? index - 1 : 0));
    }

    function setEvent(index: number) {
        currentEventIndex.set(index);
    }

    $: currentEvent = events[$currentEventIndex];
</script> 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<div class="flex flex-col p-5">
    <!-- Text and Image Column Container -->
    <div class="flex flex-col md:flex-row items-start space-y-6 md:space-x-6 md:space-y-0">
        <!-- Image Container -->
        <div class="flex-shrink-0 w-full md:w-80">
            {#if events.length > 0}
                <img src={currentEvent.image} alt="" class="w-full md:h-80 object-cover rounded-md" />
            {/if}
        </div>
        <!-- Text Container -->
        <div class="relative bg-yellow-100 p-4 md:p-6 rounded-lg shadow-md text-black flex-1 md:w-80 h-auto md:h-80">
            <div class="flex flex-col h-full">
                <div class="flex-grow mb-4 md:mb-10">
                    {#if events.length > 0}
                        <h3 class="text-lg md:text-xl font-bold absolute top-2 left-3 md:top-3 md:left-4">{currentEvent.title}</h3>
                        <p class="text-sm md:text-base mt-2 p-4 text-left">{currentEvent.message}</p>
                    {/if}
                </div>
                <!-- Date Container -->
                <div class="absolute bottom-2 right-3 md:bottom-3 md:right-4">
                    {#if events.length > 0}
                        <p class="text-xs md:text-sm text-black p">{currentEvent.date}</p>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <!-- Timeline Container -->
    <div class="flex flex-col items-center mt-6 space-y-4">
        <!-- Timeline Buttons for Mobile -->
        <div class="flex flex-row md:hidden items-center">
            <!-- Previous Button -->
            <button 
                class="bg-yellow-100 text-black p-8 rounded-md hover:bg-yellow-200 transition-colors duration-300 disabled:bg-gray-400 text-5xl" 
                on:click={prevEvent} 
                disabled={$currentEventIndex === 0}
            >
                &lt;
            </button>
            <gap class="p-3"></gap>

            <!-- Next Button -->
            <button 
                class="bg-yellow-100 text-black p-8 rounded-md hover:bg-yellow-200 transition-colors duration-300 disabled:bg-gray-400 text-5xl" 
                on:click={nextEvent} 
                disabled={$currentEventIndex === events.length - 1}
            >
                &gt;
            </button>
        </div>

        <!-- Timeline Buttons for Desktop -->
        <div class="hidden md:flex items-center space-x-4">
            <!-- Previous Button -->
            <button 
                class="bg-yellow-100 text-black p-3 rounded-md hover:bg-yellow-200 transition-colors duration-300 disabled:bg-gray-400" 
                on:click={prevEvent} 
                disabled={$currentEventIndex === 0}
            >
                &lt;
            </button>

            <!-- Timeline Buttons -->
            <div class="flex flex-row items-center space-x-2">
                {#each events as event, index}
                    <button 
                        class={`w-32 p-2 text-left bg-yellow-100 text-black rounded-md shadow-md ${index === $currentEventIndex ? 'outline outline-1 outline-white' : ''}`} 
                        on:click={() => setEvent(index)} 
                        aria-label={`Event ${index + 1}: ${event.title}`}
                    >
                        <h3 class="text-lg text-center">{event.title}</h3>
                    </button>
                {/each}
            </div>

            <!-- Next Button -->
            <button 
                class="bg-yellow-100 text-black p-3 rounded-md hover:bg-yellow-200 transition-colors duration-300 disabled:bg-gray-400" 
                on:click={nextEvent} 
                disabled={$currentEventIndex === events.length - 1}
            >
                &gt;
            </button>
        </div>
    </div>
</div>
