<script>
    let { 
        text = "Design is intelligence made visible.",
        images = [
            "https://placehold.co/200x300",
            "https://placehold.co/250x250",
            "https://placehold.co/300x200",
            "https://placehold.co/200x200",
            "https://placehold.co/220x300",
            "https://placehold.co/280x280",
            "https://placehold.co/240x320"
        ]
    } = $props();

    let scrollY = $state(0);

    // Pre-defined "random" positions and speeds to ensure consistent server/client rendering
    // Speed > 0 moves up when scrolling down (faster than scroll)
    // Speed < 0 moves down when scrolling down (slower than scroll)
    const scatterLayout = [
        { top: -20, left: 10, speed: 0.2, width: 200 },  // Top Left (Index 0)
        { top: 15, left: 75, speed: -0.15, width: 250 }, // Top Right (Index 1)
        { top: 45, left: 5, speed: 0.1, width: 220 },   // Mid Left (Index 2)
        { top: 40, left: 80, speed: 0.3, width: 200 },  // Mid Right (Index 3)
        { top: 75, left: 35, speed: -0.2, width: 280 }, // Bottom Left (Index 4)
        { top: 80, left: 70, speed: 0.15, width: 240 }, // Bottom Right (Index 5)
        { top: 25, left: 50, speed: -0.05, width: 180 }  // Top Center-ish (Index 6)
    ];
</script>

<svelte:window bind:scrollY={scrollY} />

<section class="parallax-hero">
    
    <!-- Background Images with Parallax -->
    {#each images.slice(0, 7) as src, i}
        {@const layout = scatterLayout[i]}
        <div 
            class="scatter-image"
            style:top="{layout.top}%"
            style:left="{layout.left}%"
            style:width="{layout.width}px"
            style:transform="translate3d(0, {scrollY * layout.speed}px, 0)"
        >
            <img {src} alt="" />
        </div>
    {/each}

    <!-- Centered Content -->
    <div class="hero-content">
        <h1>{text}</h1>
    </div>

</section>

<style lang="scss">
    .parallax-hero {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden; /* Prevents scrollbars from moving images */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-white);
    }

    .hero-content {
        z-index: 10; /* Ensures text is above images */
        text-align: center;
        padding: 0 20px;
        
        h1 {
            font-family: var(--font-heading);
            font-size: 96px; /* Slightly larger than standard h1 for impact */
            color: var(--color-black);
            line-height: 1.1;
            max-width: 900px;
            margin: 0 auto;
        }
    }

    .scatter-image {
        position: absolute;
        z-index: 1; /* Behind text */
        pointer-events: none; /* Allow clicking through images if needed */
        transition: transform 0.1s linear; /* Smooths out the scroll updates slightly */
        will-change: transform;
        
        img {
            width: 100%;
            height: auto;
            border-radius: var(--radius-full);
            display: block;
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            opacity: 0.8; /* Subtle transparency to help text readability */
        }
    }

    @media (max-width: 768px) {
        .hero-content h1 {
            font-size: 48px;
        }

        .scatter-image {
            /* FIX 1: Removed 'transform: scale(0.6)' which was overriding the 
               inline parallax transform. Using width instead.
            */
            width: 140px !important; 
            height: auto;
        }

        /* FIX 2: Force right-aligned images (indices 1, 3, 5) to anchor 
           to the right edge on mobile so they don't flow off-screen.
           nth-of-type is 1-based, so we target 2, 4, 6.
        */
        .scatter-image:nth-of-type(2),
        .scatter-image:nth-of-type(4),
        .scatter-image:nth-of-type(6) {
            left: auto !important;
            right: 5% !important;
        }
    }
</style>