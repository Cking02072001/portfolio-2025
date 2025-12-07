<script>
    import StarSvg from '$lib/svg/StarSvg.svelte';

    let { 
        items = [], 
        speed = 20 
    } = $props();
</script>

<div class="marquee-container">
    <div class="marquee-track" style="--duration: {speed}s">
        <!-- Loop 1: Original set -->
        {#each items as item}
            <div class="marquee-item">
                <span class="text">{item}</span>
                <div class="separator">
                    <StarSvg size="40px" color="var(--color-black)" />
                </div>
            </div>
        {/each}
        
        <!-- Loop 2: Duplicate set for seamless infinite scroll -->
        {#each items as item}
            <div class="marquee-item">
                <span class="text">{item}</span>
                <div class="separator">
                    <StarSvg size="40px" color="var(--color-black)" />
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .marquee-container {
        width: 100%;
        padding: 0rem 0;
        background-color: var(--color-white);
        overflow: hidden;
        border-top: 1px solid var(--color-black);
        border-bottom: 1px solid var(--color-black);
        /* Helper to fade edges */
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .marquee-track {
        display: flex;
        width: max-content;
        animation: scroll var(--duration) linear infinite;
        
        &:hover {
            animation-play-state: paused;
        }
    }

    .marquee-item {
        display: flex;
        align-items: center;
        /* Gap between Text and Star */
        gap: 6rem; 
        /* Margin after Star (before next text) */
        margin-right: 6rem; 
        
        opacity: 1;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.7;
        }
    }

    .text {
        font-family: var(--font-heading);
        font-size: 80px; /* Large display size */
        color: var(--color-black);
        white-space: nowrap;
    }

    .separator {
        display: flex;
        align-items: center;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    @media (max-width: 768px) {
        .marquee-container {
             padding: 2rem 0;
        }
        
        .marquee-item {
            gap: 3rem;
            margin-right: 3rem;
        }

        .text {
            font-size: 40px;
        }
    }
</style>