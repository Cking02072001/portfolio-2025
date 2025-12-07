<script lang="ts">
    import SplineScene from "$lib/components/SplineScene.svelte";

    const sceneIdMobile = "0kKJNWYauEgW4l-a";
    const sceneIdDesktop = "ClRcu4hFh5M0DIYn";

    let innerWidth = $state(0);
    let activeSceneId = $derived(innerWidth > 0 && innerWidth < 768 ? sceneIdMobile : sceneIdDesktop);
</script>

<svelte:window bind:innerWidth />

<div class="hero-container">
    {#key activeSceneId}
        <SplineScene 
            sceneUrl="https://prod.spline.design/{activeSceneId}/scene.splinecode" 
        />
    {/key}
</div>

<style lang="scss">
    .hero-container {
        padding-top: 30px;
    }

    @media (max-width: 768px) {
        .hero-container {
            padding-top: 60px;
        }
    }
</style>