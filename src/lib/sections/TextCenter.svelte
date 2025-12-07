<script>
    import SplineScene from "$lib/components/SplineScene.svelte";

    let { 
        title = "Impactful Design",
        text = "We create immersive digital experiences that blend creativity with technology.",
        sceneUrl = "https://prod.spline.design/2MDR58HT0ffNlZqp/scene.splinecode"
    } = $props();
</script>

<section class="text-center-hero">
    
    <!-- Background Spline Layer -->
    <div class="spline-background">
        <SplineScene {sceneUrl} />
    </div>

    <!-- Foreground Content Layer -->
    <div class="content">
        <h1>Meine Arbeiten</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed auctor nunc tellus nibh diam mauris sit. </p>
        <p>Fames in sit lorem ultrices faucibus eget vulputate. In turpis arcu feugiat velit pharetra interdum sed massa tristique. Ipsum semper accumsan augue porttitor.</p>
    </div>

</section>

<style lang="scss">
    .text-center-hero {
        position: relative;
        width: 100vw;
        height: 100vh; /* Full screen height */
        display: flex;
        justify-content: center; /* Horizontally center */
        align-items: center;    /* Vertically center */
        overflow: hidden;
        background-color: var(--color-white);
    }

    .spline-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0; /* Behind text */
        opacity: 0.6; /* Optional: fade it slightly so text pops */
    }

    .content {
        position: relative;
        z-index: 1; /* On top of Spline */
        text-align: center;
        max-width: 800px;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-20);
    }

    h1 {
        margin: 0;
        line-height: 1.1;
        color: var(--color-black);
        /* Ensure text is readable against busy 3D backgrounds */
        text-shadow: 0 0 40px rgba(255, 255, 255, 0.8); 
    }

    p {
        font-family: var(--font-reading);
        font-size: 20px;
        line-height: 1.6;
        color: var(--color-black);
        margin: 0;
        max-width: 600px;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 768px) {
        .content {
            gap: 15px;
        }

        h1 {
            font-size: 48px; /* Override global h1 size if needed specifically for this hero */
        }

        .spline-background {
            display: none;
        }
    }
</style>