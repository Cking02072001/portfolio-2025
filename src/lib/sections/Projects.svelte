<script>
  import ImageCard from '$lib/components/ImageCard.svelte';
  import StarSvg from '$lib/svg/StarSvg.svelte';
  import { projects, categories } from '$lib/data/projects';


  let activeCategory = $state(categories[0]);

  let filteredProjects = $derived(
    activeCategory === categories[0]
        ? projects 
        : projects.filter(p => p.tags[0] === activeCategory)
  );
</script>

<section class="projects-section">
  
  <div class="header">
    <h1>Best of Cases</h1>
    
    <div class="filters">
      {#each categories as cat, i}
          <button 
              class="filter-btn {activeCategory === cat ? 'active' : ''}"
              onclick={() => activeCategory = cat}
          >
              {cat}
          </button>

          {#if i < categories.length - 1}
              <StarSvg size={"12px"}/> 
          {/if}
      {/each}
    </div>
  </div>

  <div class="project-grid">
      {#each filteredProjects as project}
        <div class="grid-item">
          <ImageCard 
             title={project.title}
             description={project.shortDescription}
             imageSrc={project.hoverImage}
             projectId={project.id}
             link={project.link}
          />
        </div>
      {/each}
  </div>

</section>

<style lang="scss">
  .projects-section {
    width: 100vw;
    padding: 120px 5vw;
    background-color: var(--color-white);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline; 
    margin-bottom: var(--spacing-80);
    flex-wrap: wrap;
    gap: var(--spacing-40);
  }

  h1 {
    margin: 0;
    line-height: 1;
    color: var(--color-black);
  }

  .filters {
    display: flex;
    gap: var(--spacing-20);
    flex-wrap: wrap;
    align-items: center;
  }

  .filter-btn {
    background: none;
    border: none; /* Ensure no border by default */
    cursor: pointer;
    font-family: var(--font-heading);
    font-size: 24px;
    color: var(--color-black);
    padding: 5px 15px;
    transition: all 0.3s ease;
    opacity: 0.5;

    &:hover {
        opacity: 0.8;
    }

    &.active {
        opacity: 1;
    }
  }

  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    /* Remove horizontal gap so items can push to edges */
    column-gap: 0; 
    /* Keep vertical gap */
    row-gap: var(--spacing-80);
    width: 100%;
  }

  .grid-item {
    display: flex;
    /* Default centering removed to allow specific alignment */
  }

  /* Left column items align start */
  .grid-item:nth-child(odd) {
    justify-content: flex-start;
  }

  /* Right column items align end */
  .grid-item:nth-child(even) {
    justify-content: flex-end;
  }

  /* Mobile Responsive */
  @media (max-width: 900px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-20);
    }

    .project-grid {
        grid-template-columns: 1fr;
        /* Restore gap for single column layout */
        gap: var(--spacing-40);
    }
    
    /* Center everything on mobile */
    .grid-item:nth-child(odd),
    .grid-item:nth-child(even) {
        justify-content: center;
    }
    
    .filter-btn {
        font-size: 18px;
    }
  }
</style>