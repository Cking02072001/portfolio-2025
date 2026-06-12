<script lang="ts">
    import { onMount } from "svelte";

    let { sceneUrl, className = "" } = $props();

    let canvas = $state<HTMLCanvasElement | undefined>(undefined);
    let wrapper = $state<HTMLDivElement | undefined>(undefined);
    let isLoaded = $state(false);
    let hasStarted = $state(false);

    onMount(() => {
        if (!wrapper) return;

        const obs = new IntersectionObserver(
            async ([entry]) => {
                if (!entry.isIntersecting || hasStarted) return;
                hasStarted = true;
                obs.disconnect();

                const { Application } = await import("@splinetool/runtime");
                if (canvas && sceneUrl) {
                    const app = new Application(canvas);
                    await app.load(sceneUrl);
                    isLoaded = true;
                }
            },
            { rootMargin: "200px" }
        );

        obs.observe(wrapper);
        return () => obs.disconnect();
    });
</script>

<div class="spline-wrapper {className}" bind:this={wrapper}>
    <canvas bind:this={canvas} class="spline-canvas" class:hidden={!hasStarted}></canvas>

    {#if !isLoaded}
        <div class="placeholder" aria-hidden="true"></div>
    {/if}

    {#if isLoaded}
        <div class="cover-rect"></div>
    {/if}
</div>

<style lang="scss">
    .spline-wrapper {
        position: relative;
        display: block;
        width: 100% !important;
        height: 100% !important;
    }

    .spline-canvas {
        width: 100% !important;
        height: 100% !important;
        display: block;
        background-color: var(--color-white);
        outline: none;

        &.hidden { opacity: 0; }
    }

    .placeholder {
        position: absolute;
        inset: 0;
        background: var(--color-white);
        pointer-events: none;
    }

    .cover-rect {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 160px;
        height: 60px;
        background-color: var(--color-white);
        z-index: 10;
        pointer-events: none;
    }
</style>
