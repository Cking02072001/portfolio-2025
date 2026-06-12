<script>
    import { onMount } from 'svelte';
    import Doodle from '$lib/components/Doodle.svelte';

    let {
        text = "Trust me with your websites",
        typedWords = ["websites", "branding", "socials", "print"],
        images = [
            "/Photos/CK/ImageWall05.png",
            "Photos/CK/ImageWall01.png",
            "Photos/CK/ImageWall07.png",
            "Photos/CK/ImageWall03.png",
            "Photos/CK/ImageWall04.png",
            "",
            "Photos/CK/ImageWall06.png"
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

    // Letztes Wort wird vom Typewriter ersetzt
    let words = $derived(text.split(" ").slice(0, -1));
    let activeIndices = $state(/** @type {number[]} */ ([]));

    // ── Typewriter ────────────────────────────────────────────────
    let typedText = $state("");

    onMount(() => {
        let wordIdx = 0;
        let charIdx = 0;
        let deleting = false;
        let timer = /** @type {ReturnType<typeof setTimeout> | undefined} */ (undefined);

        function tick() {
            const word = typedWords[wordIdx];
            if (!deleting) {
                charIdx++;
                typedText = word.slice(0, charIdx);
                if (charIdx === word.length) {
                    deleting = true;
                    timer = setTimeout(tick, 2400);
                    return;
                }
                timer = setTimeout(tick, 90);
            } else {
                charIdx--;
                typedText = word.slice(0, charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    wordIdx = (wordIdx + 1) % typedWords.length;
                    timer = setTimeout(tick, 400);
                    return;
                }
                timer = setTimeout(tick, 45);
            }
        }

        timer = setTimeout(tick, 1200);
        return () => clearTimeout(timer);
    });

    // ── Doppelklick: Polaroid neu entwickeln ─────────────────────
    let developingIdx = $state(/** @type {number[]} */ ([]));

    /** @param {number} i */
    function redevelop(i) {
        if (developingIdx.includes(i)) return;
        developingIdx = [...developingIdx, i];
        setTimeout(() => {
            developingIdx = developingIdx.filter((x) => x !== i);
        }, 1700);
    }

    function handleHover() {
        if (words.length === 0) return;
        let count = Math.floor(Math.random() * 2) + 1; // 1 or 2 words
        if (count > words.length) count = words.length;
        let newIndices = [];
        let available = Array.from({length: words.length}, (_, i) => i);
        for(let i=0; i<count; i++) {
            let randIdx = Math.floor(Math.random() * available.length);
            newIndices.push(available[randIdx]);
            available.splice(randIdx, 1);
        }
        activeIndices = newIndices;
    }

    function handleLeave() {
        activeIndices = [];
    }
</script>

<svelte:window bind:scrollY={scrollY} />

<section class="parallax-hero">
    
    <!-- Background Images with Parallax -->
    {#each images.slice(0, 7) as src, i}
        {@const layout = scatterLayout[i]}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="scatter-image"
            style:top="{layout.top}%"
            style:left="{layout.left}%"
            style:width="{layout.width}px"
            style:transform="translate3d(0, {scrollY * layout.speed}px, 0)"
            ondblclick={() => redevelop(i)}
        >
            <img {src} alt="" class:developing={developingIdx.includes(i)} draggable="false" />
        </div>
    {/each}

    <!-- Centered Content -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="hero-content" onmouseenter={handleHover} onmouseleave={handleLeave}>
        <Doodle variant="sparkle" size={44} style="position: absolute; top: -30px; right: -14px;" />
        <Doodle variant="sparkle" size={30} rotate={-24} color="#d3546d" style="position: absolute; bottom: -24px; left: -6px;" />
        <h1>
            {#each words as word, i}
                <span class:highlight={activeIndices.includes(i)}>{word}</span>
                {" "}
            {/each}
            <span class="typed">{typedText}<span class="caret" aria-hidden="true"></span></span>
        </h1>
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
        position: relative;
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

        span {
            display: inline-block;
            transition: all 1.5s ease;
        }
        
        span.highlight {
            font-style: italic;
            color: #722F37; /* Bordeaux */
        }

        .typed {
            font-style: italic;
            color: #722F37;
        }

        .caret {
            display: inline-block;
            width: 4px;
            height: 0.85em;
            margin-left: 6px;
            vertical-align: baseline;
            background: #722F37;
            animation: caretBlink 1.1s steps(1) infinite;
        }
    }

    @keyframes caretBlink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
    }

    .scatter-image {
        position: absolute;
        z-index: 1; /* Behind text */
        transition: transform 0.1s linear; /* Smooths out the scroll updates slightly */
        will-change: transform;
        user-select: none;

        img {
            width: 100%;
            height: auto;
            border-radius: var(--radius-full);
            display: block;
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            opacity: 0.8; /* Subtle transparency to help text readability */

            &.developing {
                animation: redevelop 1.6s ease forwards;
            }
        }
    }

    @keyframes redevelop {
        0%   { filter: grayscale(1) blur(5px) brightness(1.15) contrast(0.9); }
        55%  { filter: grayscale(0.65) blur(1.5px) brightness(1.06); }
        100% { filter: none; }
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