<script>
  let { 
    imageSrc = "https://placehold.co/350x250", 
    hoverImageSrc = "https://placehold.co/350x250/000000/FFFFFF", 
    altText = "Work in Progress",
    projectId = "WIP-1"
  } = $props();
</script>

<div class="wip-card">
  <a href="/projects?id={projectId}">
  <!-- Main Image -->
  <img src={imageSrc} alt={altText} class="main-img" />
  
  <!-- Hover Image (Overlay) -->
  {#if hoverImageSrc}
    <img src={hoverImageSrc} alt={altText} class="hover-img" />
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

  .wip-card:hover {
    .main-img {
      transform: scale(1.05);
    }
    
    .hover-img {
      opacity: 1;
      transform: scale(1.05);
    }
  }
</style>