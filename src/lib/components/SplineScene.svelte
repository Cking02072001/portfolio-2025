<script lang="ts">
    import { Application } from "@splinetool/runtime";
    import { onMount } from "svelte";

    let { 
        sceneUrl, 
        className = "" 
    } = $props();

    let canvas: HTMLCanvasElement;
    let isLoaded = $state(false);

    onMount(() => {
        if (canvas && sceneUrl) {
            const app = new Application(canvas);
            app.load(sceneUrl).then(() => {
                isLoaded = true;
            });
        }
    });
</script>

<div class="spline-wrapper {className}">
    <canvas 
        bind:this={canvas} 
        class="spline-canvas"
    ></canvas>
    
    <!-- White rectangle that appears after load to cover bottom right -->
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