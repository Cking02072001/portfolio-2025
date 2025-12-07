<script lang="ts">
    import WIPCard from '$lib/components/WIPCard.svelte';
    import { projects } from '$lib/data/wips';

    let scrollContainer: HTMLDivElement;

    function scroll(direction: 'left' | 'right') {
        if (!scrollContainer) return;
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
</script>

<section class="wips-section">
    <div class="title-column">
        <h1>Meine WIPs</h1>
    </div>
    
    <div class="content-column">
        <div class="carousel-container" bind:this={scrollContainer}>
            {#each projects as project}
                <div class="card-wrapper">
                    <WIPCard imageSrc={project.image} altText={project.title} />
                </div>
            {/each}
            <!-- Spacer ensures the last item has padding on the right when scrolling -->
            <div class="spacer"></div>
        </div>

        <!-- Scroll Controls -->
        <div class="controls">
            <button class="nav-arrow" onclick={() => scroll('left')} aria-label="Scroll left">
                <!-- Updated SVG for longer tail and wider viewbox -->
                <svg width="40" height="30" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="nav-arrow" onclick={() => scroll('right')} aria-label="Scroll right">
                <!-- Updated SVG for longer tail and wider viewbox -->
                <svg width="40" height="30" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H27M27 12L20 5M27 12L20 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</section>

<style lang="scss">
    .wips-section {
        width: 100vw;
        /* Vertical padding */
        padding: 120px 0;
        background-color: var(--color-black);
        display: flex;
        overflow: hidden; 
    }

    .title-column {
        width: 15vw; /* Reserved width for the vertical title */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    h1 {
        margin: 0;
        white-space: nowrap;
        color: var(--color-white);
        /* Rotate -90deg to read bottom-to-top */
        transform: rotate(-90deg);
        line-height: 1;
    }

    /* Wrapper for Carousel + Controls to handle stacking */
    .content-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden; /* Contains the scroll area */
    }

    .carousel-container {
        display: flex;
        gap: var(--spacing-40);
        overflow-x: auto; /* Horizontal scrolling */
        overflow-y: hidden;
        
        /* Padding matches the gap to ensure first item isn't flush against the title column */
        padding-left: var(--spacing-40);
        align-items: center;
        
        /* Hide scrollbar */
        scrollbar-width: none; 
        -ms-overflow-style: none; 
        &::-webkit-scrollbar {
            display: none; 
        }
        
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }

    .card-wrapper {
        width: 250px;
        height: 400px;
        flex-shrink: 0; 
    }

    .spacer {
        min-width: 5vw; 
        height: 1px;
    }

    /* Controls Styling */
    .controls {
        display: flex;
        gap: 20px;
        /* Desktop: Align right */
        justify-content: flex-end;
        padding-right: var(--spacing-40);
        padding-top: var(--spacing-40);
    }

    .nav-arrow {
        /* Removed circle border and fixed sizes */
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-white); /* White icon */
        transition: opacity 0.3s ease;
        padding: 10px; /* Add some hit area padding */

        &:hover {
            /* Removed background invert, just adding subtle opacity shift */
            opacity: 0.7;
        }
        
        svg {
            display: block;
        }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .wips-section {
            flex-direction: column;
            padding: 60px 0;
        }

        .title-column {
            width: 100%;
            height: auto;
            margin-bottom: var(--spacing-40);
            justify-content: flex-start;
            padding-left: 20px;
        }

        h1 {
            /* Reset rotation for mobile readability */
            transform: none; 
        }

        .carousel-container {
            width: 100%;
            padding-left: 20px;
            order: 2; /* Carousel below controls */
        }

        .controls {
            order: 1; /* Controls above carousel */
            /* Mobile: Space between */
            justify-content: space-between;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 0;
            padding-bottom: var(--spacing-20);
        }

        .card-wrapper {
            width: 75vw; /* Larger cards on mobile for better visibility */
            min-width: 280px;
        }
    }
</style>