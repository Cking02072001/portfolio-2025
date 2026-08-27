<script>
  import Stamp from '$lib/components/Stamp.svelte';

  let {
    imageSrc = "https://placehold.co/350x250",
    hoverImageSrc = "https://placehold.co/350x250/000000/FFFFFF",
    altText = "Work in Progress",
    projectId = "WIP-1",
    inProgress = false,
  } = $props();
</script>

<div class="wip-card">
  <a href="/projects?id={projectId}">
  <!-- Main Image -->
  <img src={imageSrc} alt={altText} class="main-img" loading="lazy" decoding="async" />

  <!-- Hover Image (Overlay) -->
  {#if hoverImageSrc}
    <img src={hoverImageSrc} alt="" class="hover-img" loading="lazy" decoding="async" />
  {/if}

  {#if inProgress}
    <span class="stamp-slot"><Stamp /></span>
  {/if}
  </a>
</div>

<style lang="scss">
  .wip-card {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--radius-full);
    cursor: pointer;
    background-color: var(--color-black);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--radius-full);
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
    will-change: transform, opacity;
  }

  .main-img {
    position: relative;
    z-index: 1;
  }

  .hover-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
  }

  /* Stempel sitzt schief unten links auf der Karte */
  .stamp-slot {
    position: absolute;
    left: 14px;
    bottom: 16px;
    z-index: 3;
    line-height: 0;
    pointer-events: none;
    opacity: 0.9;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .wip-card:hover {
    .main-img {
      transform: scale(1.05);
    }

    .hover-img {
      opacity: 1;
      transform: scale(1.05);
    }

    .stamp-slot {
      transform: scale(1.05);
    }
  }
</style>