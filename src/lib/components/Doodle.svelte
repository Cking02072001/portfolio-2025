<script lang="ts">
    let {
        variant = 'arrow',
        size = 70,
        color = '#923c56',
        rotate = 0,
        flip = false,
        draw = true,
        style = '',
    }: {
        variant?: 'arrow' | 'underline' | 'sparkle' | 'circle' | 'spiral';
        size?: number;
        color?: string;
        rotate?: number;
        flip?: boolean;
        draw?: boolean;
        style?: string;
    } = $props();

    const defs: Record<string, { vb: string; d: string[] }> = {
        arrow:     { vb: '0 0 100 60',  d: ['M6 50 C 28 14, 58 8, 88 26', 'M76 12 L90 27 L70 32'] },
        underline: { vb: '0 0 120 22',  d: ['M4 8 Q 32 2, 60 8 T 116 7', 'M12 16 Q 42 11, 72 15 T 112 13'] },
        sparkle:   { vb: '0 0 60 60',   d: ['M30 6 L30 24', 'M10 16 L22 27', 'M50 16 L38 27'] },
        circle:    { vb: '0 0 120 64',  d: ['M62 10 C 96 8, 114 20, 112 33 C 110 48, 80 58, 50 56 C 20 54, 6 42, 10 28 C 14 14, 46 6, 84 12'] },
        spiral:    { vb: '0 0 60 60',   d: ['M33 29 C 37 27, 38 33, 33 35 C 25 38, 21 28, 28 23 C 37 16, 47 25, 44 35 C 40 47, 23 47, 16 36'] },
    };

    const def = $derived(defs[variant] ?? defs.arrow);

    let drawn = $state(false);
    let svgEl = $state<SVGSVGElement | undefined>(undefined);

    $effect(() => {
        if (!draw || !svgEl || drawn) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    drawn = true;
                    obs.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(svgEl);
        return () => obs.disconnect();
    });
</script>

<svg
    bind:this={svgEl}
    viewBox={def.vb}
    width={size}
    class="doodle"
    class:drawn
    class:animate={draw}
    style="transform: rotate({rotate}deg) scaleX({flip ? -1 : 1}); {style}"
    aria-hidden="true"
>
    {#each def.d as d, i}
        <path
            {d}
            fill="none"
            stroke={color}
            stroke-width="2.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            pathLength="1"
            style="--i:{i}"
        />
    {/each}
</svg>

<style>
    .doodle.animate path {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
    }

    .doodle.animate.drawn path {
        transition: stroke-dashoffset 0.6s ease;
        transition-delay: calc(var(--i) * 0.18s);
        stroke-dashoffset: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        .doodle.animate path {
            stroke-dashoffset: 0;
            transition: none;
        }
    }
</style>
