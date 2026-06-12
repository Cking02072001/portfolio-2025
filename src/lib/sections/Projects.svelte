<script>
  import ImageCard from "$lib/components/ImageCard.svelte";
  import StarSvg from "$lib/svg/StarSvg.svelte";
  import Doodle from "$lib/components/Doodle.svelte";
  import { projects, categories } from "$lib/data/projects";

  // State für die aktive Kategorie (Standard: erste Kategorie, meist "Alle")
  let activeCategory = $state(categories[0]);

  // Derived State für die gefilterten Projekte
  // Nutzt .includes(), um zu prüfen, ob die Kategorie im tags-Array existiert
  let filteredProjects = $derived(
    activeCategory === categories[0]
      ? projects
      : projects.filter((p) => p.tags.includes(activeCategory)),
  );
</script>

<section class="projects-section">
  <div class="header">
    <div class="title-wrap">
      <h1>Best of Cases</h1>
      <Doodle variant="circle" size={300} rotate={-2} style="position:absolute; top:-24px; left:-34px; z-index:0;" />
      <span class="hand-note">
        <Doodle variant="arrow" size={50} rotate={150} flip style="vertical-align:middle;" />
        meine lieblingsstücke
      </span>
    </div>

    <div class="filters">
      {#each categories as cat, i}
        <button
          class="filter-btn {activeCategory === cat ? 'active' : ''}"
          onclick={() => (activeCategory = cat)}
        >
          {cat}
        </button>

        {#if i < categories.length - 1}
          <StarSvg size={"12px"} />
        {/if}
      {/each}
    </div>
  </div>

  <div class="project-grid">
    {#each filteredProjects as project, i}
      <div class="grid-item">
        <ImageCard
          title={project.title}
          description={project.shortDescription}
          imageSrc={project.defaultImage}
          hoverImageSrc={project.hoverImage}
          projectId={project.id}
          link={project.link}
          accent={["sparkle", "spiral", "circle"][i % 3]}
        />
      </div>
    {/each}

    {#if filteredProjects.length % 2 === 1}
      <div class="grid-item">
        <div class="filler-note">
          <Doodle variant="sparkle" size={46} rotate={-10} style="position:absolute; top:18px; right:26px;" />
          <span class="filler-big">mehr Feines<br />in Arbeit</span>
          <span class="filler-small">
            <Doodle variant="arrow" size={54} rotate={8} />
            schau bald wieder rein
          </span>
        </div>
      </div>
    {/if}
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

  .title-wrap {
    position: relative;
  }

  .hand-note {
    position: absolute;
    top: -38px;
    left: 290px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: #923c56;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    .hand-note { display: none; }
  }

  h1 {
    margin: 0;
    line-height: 1;
    color: var(--color-black);
    position: relative;
    z-index: 1;
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
    /* Add horizontal gap to prevent sticking */
    column-gap: var(--spacing-40, 40px);
    /* Tighter vertical rhythm */
    row-gap: var(--spacing-40);
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
  }

  .filler-note {
    position: relative;
    width: 100%;
    max-width: 550px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
    padding: 40px;
    border: 2px dashed rgba(39, 39, 39, 0.3);
    border-radius: var(--radius-full);
  }

  .filler-big {
    font-family: var(--font-heading);
    font-size: 40px;
    line-height: 1.05;
    color: var(--color-black);
  }

  .filler-small {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: var(--color-purple);
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
