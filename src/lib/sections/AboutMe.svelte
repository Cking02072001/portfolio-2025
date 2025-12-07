<script lang="ts">
    import SplineScene from "$lib/components/SplineScene.svelte";

    let { 
        title = "Design with Purpose",
        subtitle = "Creative Direction",
        description = "We craft digital experiences that resonate with your audience and drive meaningful engagement through strategic design.",
        buttonText = "View Projects"
    } = $props();
</script>

<section class="split-hero">
    <div class="left-content">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
    </div>
    
    <div class="right-content">
        <SplineScene sceneUrl="https://prod.spline.design/BxSFDunERx8KsEfN/scene.splinecode" />
    </div>
</section>


<style lang="scss">
    .split-hero {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        overflow: hidden;
    }

    .left-content {
        width: 45%; 
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 0 10vw; 
        gap: var(--spacing-40);
        z-index: 1; 
    }

    .right-content {
        width: 45%; 
        height: 100%; 
        position: relative;
        /* Center the 3D scene in the available space */
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px; /* Prevent touching edges */
        padding-left: 100px;
    }

    h1 {
        margin: 0;
        line-height: 1;
        color: var(--color-black);
    }

    h3 {
        margin: 0;
        color: var(--color-purple);
    }

    p {
        font-family: var(--font-reading);
        font-size: 18px;
        line-height: 1.6;
        max-width: 500px;
        margin: 0;
    }

    button {
        margin-top: var(--spacing-20);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 24px; 
        color: var(--color-black);
        padding: 0;
        
        &:hover {
             text-decoration: underline;
        }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .split-hero {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
        }

        .left-content {
            width: 100%;
            height: auto;
            padding: 120px 20px 40px 20px;
            gap: 20px;
        }

        .right-content {
            width: 100%;
            height: 50vh; 
            min-height: 400px;
            padding: 40px;
        }
    }
</style>