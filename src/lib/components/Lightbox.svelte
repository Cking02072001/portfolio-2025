<script lang="ts">
    import Doodle from '$lib/components/Doodle.svelte';

    let {
        images = [] as string[],
        notes = [] as string[],
        index = $bindable(-1),
        altText = "Projektbild"
    } = $props();

    let open = $derived(index >= 0 && index < images.length);
    let note = $derived(open ? (notes[index] ?? '').trim() : '');

    function close() {
        index = -1;
    }

    function prev() {
        if (!open) return;
        index = (index - 1 + images.length) % images.length;
    }

    function next() {
        if (!open) return;
        index = (index + 1) % images.length;
    }

    function handleKey(e: KeyboardEvent) {
        if (!open) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') prev();
        else if (e.key === 'ArrowRight') next();
    }

    // Swipe auf Mobil
    let touchStartX = 0;

    function onTouchStart(e: TouchEvent) {
        touchStartX = e.changedTouches[0].clientX;
    }

    function onTouchEnd(e: TouchEvent) {
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 50) return;
        if (delta > 0) prev();
        else next();
    }

    // Seite hinter der Lightbox nicht mitscrollen lassen
    $effect(() => {
        if (!open) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previous;
        };
    });
</script>

<svelte:window onkeydown={handleKey} />

{#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Bildansicht"
        tabindex="-1"
        onclick={close}
    >
        <button class="close" onclick={close} aria-label="Schließen">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>

        {#if images.length > 1}
            <button
                class="nav nav-prev"
                onclick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Vorheriges Bild"
            >
                <svg width="40" height="30" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        {/if}

        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <figure
            class="stage"
            onclick={(e) => e.stopPropagation()}
            ontouchstart={onTouchStart}
            ontouchend={onTouchEnd}
        >
            <img
                src={images[index]}
                alt="{altText}, Bild {index + 1} von {images.length}"
                fetchpriority="high"
                decoding="async"
            />

            <figcaption>
                {#if note}
                    {#key index}
                        <span class="note">
                            <Doodle variant="arrow" size={56} rotate={-90} color="#fbf9f9" />
                            {note}
                        </span>
                    {/key}
                {/if}
                {#if images.length > 1}
                    <span class="counter">{index + 1} von {images.length}</span>
                {/if}
            </figcaption>
        </figure>

        {#if images.length > 1}
            <button
                class="nav nav-next"
                onclick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Nächstes Bild"
            >
                <svg width="40" height="30" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H27M27 12L20 19M27 12L20 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        {/if}
    </div>
{/if}

<style lang="scss">
    .lightbox {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-40);
        padding: 5vh 5vw;
        background-color: rgba(39, 39, 39, 0.98);
        animation: fade 0.25s ease;
    }

    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .stage {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-10);
        max-width: 100%;
        max-height: 100%;

        img {
            max-width: 100%;
            max-height: 82vh;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: var(--radius-full);
            background-color: var(--color-white);
        }
    }

    figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        font-family: 'Caveat', cursive;
        color: var(--color-white);
        text-align: center;
    }

    /* Handschriftliche Randnotiz mit Pfeil zurück aufs Bild */
    .note {
        display: inline-flex;
        align-items: flex-start;
        gap: 6px;
        font-size: 26px;
        line-height: 1.2;
        max-width: 46ch;
        opacity: 0.95;
    }

    .counter {
        font-size: 20px;
        opacity: 0.55;
    }

    .close {
        position: absolute;
        top: 24px;
        right: 24px;
        background: none;
        border: none;
        padding: 8px;
        cursor: pointer;
        color: var(--color-white);
        opacity: 0.75;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }

    .nav {
        flex-shrink: 0;
        background: none;
        border: none;
        padding: 12px;
        cursor: pointer;
        color: var(--color-white);
        opacity: 0.7;
        transition: opacity 0.2s ease, transform 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }

    .nav-prev:hover { transform: translateX(-4px); }
    .nav-next:hover { transform: translateX(4px); }

    @media (max-width: 768px) {
        .lightbox {
            gap: 0;
            /* Platz unten für die Pfeilzeile */
            padding: 10vh 12px 15vh;
        }

        .stage {
            width: 100%;

            img {
                max-height: 68vh;
            }
        }

        /* Pfeile aus dem Flow nehmen, damit das Bild die volle Breite bekommt */
        .nav {
            position: absolute;
            bottom: 5vh;
            padding: 10px 24px;
        }

        .nav-prev { left: 12%; }
        .nav-next { right: 12%; }

        .nav-prev:hover,
        .nav-next:hover { transform: none; }

        .nav svg {
            width: 34px;
            height: 26px;
        }
    }
</style>
