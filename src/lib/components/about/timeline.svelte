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

    let timelineContainer: HTMLElement | null = null;
</script>

<!-- Link to Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<style>
    .timeline-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
        position: relative;
    }

    .image-container {
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        padding: 20px;
        background-color: #EFF0D1;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 20px;
    }

    .image-container img {
        height: 60vh;
        width: 60vh;
        border-radius: 6px;
    }

    .vertical_dotted_line {
        max-height: 50%;
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 49%;
        border-left: 5px dotted #262730;
        margin: auto;
    }

    .timeline {
        flex: 1;
        overflow-x: auto;
        padding: 50px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Space items evenly */
        align-items: center;
        position: relative;
        z-index: 1; /* Ensure timeline items are above the dotted line */
    }

    .timeline-item {
        min-width: 100%;
        min-height: 25%;
        color: white;
        padding: 10px;
        margin: 10px 0; /* Adjust margin */
        background-color: #262730; /* Darker background color */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        position: relative;
        flex: 1; /* Ensure items grow to fill space */
        cursor: pointer;
        border: none;
    }

    .timeline-item:focus {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
    }

    .highlight {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
    }

    .content h3 {
        margin-top: 0;
    }

    .btn {
        padding: 10px 20px;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn:hover {
        background-color: #262730;
    }

    .btn i {
        font-size: 24px;
    }

    .event-details {
        padding: 20px;
        max-width: 10vw;
        min-width: 10vw;
    }

    .date {
        font-size: x-small;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 20px;
    }

    .message {
        text-align: left;
        padding-top: 10px;
    }
    
</style>

<div bind:this={timelineContainer} class="timeline-container">
    <div class="image-container">
        {#if events.length > 0}
            <img src={currentEvent.image} alt="" />
            <div class="event-details">
                <h3>{currentEvent.title}</h3>
                <p class="message">{currentEvent.message}</p>
                <p class="date">{currentEvent.date}</p>
            </div>
        {/if}
    </div>

    <div class="timeline">
        <button class="btn" on:click={prevEvent} disabled={$currentEventIndex === 0}>
            <i class="fas fa-chevron-up"></i>
        </button>
        <div class="vertical_dotted_line"></div>
        {#each events as event, index}
            <button class="timeline-item {index === $currentEventIndex ? 'highlight' : ''}" on:click={() => setEvent(index)} aria-label={`Event ${index + 1}: ${event.title}`}>
                <div class="content">
                    <h3>{event.title}</h3>
                </div>
            </button>
        {/each}
        <button class="btn" on:click={nextEvent} disabled={$currentEventIndex === events.length - 1}>
            <i class="fas fa-chevron-down"></i>
        </button>
    </div>
</div>
