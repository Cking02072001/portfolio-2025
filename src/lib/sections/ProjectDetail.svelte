<script lang="ts">
    import { page } from '$app/stores';
    import { error } from '@sveltejs/kit';
    import { projects, wipProjects } from '$lib/data/projects';
    import StarSvg from '$lib/svg/StarSvg.svelte';

    // Derived state to react to URL changes
    let projectId = $derived($page.url.searchParams.get('id') || "lumina-identity");
    
    // Combine lists to allow looking up details for both standard and WIP projects
    let allProjects = [...projects, ...wipProjects];

    // Find the project directly from the centralized data
    let project = $derived.by(() => {
        const foundProject = allProjects.find(p => p.id === projectId);
        
        if (!foundProject) {
            throw error(404, {
                message: 'Project not found'
            });
        }
        
        return foundProject;
    });
</script>

<svelte:head>
  <title>{project.title}</title>
  <meta name="description" content="{project.shortDescription}" />
</svelte:head>

<div class="project-page">
    
    <!-- Back Button -->
    <div class="nav-header">
        <a href="/" class="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Back to Home</span>
        </a>
    </div>

    <!-- Top Section: Split Layout -->
    <section class="split-intro">
        <div class="image-column">
            <img src={project.mainImage} alt={project.title} />
        </div>
        <div class="text-column">
            <h1>{project.title}</h1>
            
            <!-- Safe check for tags array -->
             <div class="categories">
            {#if project.tags && project.tags.length > 0}
                {#each project.tags as tag, i}
                    <div class="meta-tag">{tag}</div>
                    {#if i < project.tags.length - 1}
                        <StarSvg size={"12px"} color={"var(--color-purple)"}/>
                    {/if}
                {/each}
            {/if}
            </div>

            <p class="lead">{project.shortDescription}</p>
            <p class="body">{project.longDescription}</p>
<div class="button-group">
    {#if project.projectButtonLabel && project.projectButtonLink}
        <a href={project.projectButtonLink} target="_blank" rel="noopener noreferrer" class="project-button">
            {project.projectButtonLabel}
        </a>
    {/if}

    {#if project.pdfLink}
        <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" class="pdf-button">
            {project.pdfLabel || 'Download PDF'}
        </a>
    {/if}
</div>
        </div>
    </section>

    <!-- Bottom Section: Bento Box Wall -->
    <!-- Only show if there are gallery images -->
    {#if project.images && project.images.length > 0}
        <section class="bento-wall">
            <h2>Project Gallery</h2>
            <div class="bento-grid">
                {#each project.images as img, i}
                    <!-- varying classes for bento layout logic -->
                    <div class="bento-item item-{i}">
                        <img src={img} alt="Project Detail {i + 1}" />
                    </div>
                {/each}
            </div>
        </section>
    {/if}

</div>

<style lang="scss">
    .categories {
        display: flex;
        gap: var(--spacing-10);
        flex-wrap: wrap;
        margin-bottom: var(--spacing-20);
        align-items: center; /* Vertically center items (stars and text) */
    }

    a {
        margin-top: var(--spacing-20);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 24px; 
        color: var(--color-black);
        padding: 0;
        text-decoration: none;
        font-family: var(--font-heading);
        
        &:hover {
             text-decoration: underline;
        }
    }

    .project-page {
        width: 100vw;
        min-height: 100vh;
        background-color: var(--color-white);
        /* Padding to clear fixed navbar from layout */
        padding-top: 200px; 
    }

    /* Navigation */
    .nav-header {
        padding: 0 5vw;
        margin-bottom: var(--spacing-40);
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--color-black);
        font-family: var(--font-heading);
        font-size: 20px;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.7;
        }
    }

    /* Split Intro Section */
    .split-intro {
        display: flex;
        width: 100%;
        padding: 0 5vw;
        gap: var(--spacing-80);
        margin-bottom: 120px;
    }

    .image-column {
        flex: 1;
        /* Image column takes 50% */
        height: 70vh;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--radius-full);
            border: 1px solid var(--color-black);
        }
    }

    .text-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--spacing-20);
    }

    h1 {
        margin: 0;
        line-height: 1;
        color: var(--color-black);
    }

    .meta-tag {
        font-family: var(--font-heading);
        color: var(--color-purple);
        font-size: 18px;
        /* Removed margin-bottom to ensure proper vertical centering with the star in the flex container */
    }

    p.lead {
        font-family: var(--font-reading);
        font-size: 24px;
        line-height: 1.4;
        font-weight: 500;
        color: var(--color-black);
        margin: 0;
    }

    p.body {
        font-family: var(--font-reading);
        font-size: 18px;
        line-height: 1.6;
        color: var(--color-black);
        opacity: 0.8;
        margin-top: var(--spacing-20);
    }

    /* Bento Wall Section */
    .bento-wall {
        padding: 0 5vw 120px 5vw;
    }

    h2 {
        margin-bottom: var(--spacing-40);
        font-family: var(--font-heading);
        font-size: 48px;
        color: var(--color-black);
    }

    .bento-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        
        /* Explicitly define 3 rows with requested heights:
           Row 1: 450px (Taller)
           Row 2: 350px (Shorter)
           Row 3: 350px (Shorter)
        */
        grid-template-rows: 450px 350px 350px;
        grid-auto-rows: 350px; /* Fallback for any extra items */
        
        gap: 20px;
        width: 100%;
    }

    .bento-item {
        position: relative;
        overflow: hidden;
        border-radius: var(--radius-full);
        border: 1px solid rgba(0,0,0,0.1);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        &:hover img {
            transform: scale(1.03);
        }
    }

    /* Bento Grid Layout Logic
       Layout Plan:
       Row 1: [ Item 0 (2col) ] [ Item 1 (2col) ]
       Row 2: [ Item 2 (1col) ] [ Item 3 (2col) ] [ Item 4 (1col) ]
       Row 3: [ Item 5 (2col) ] [ Item 6 (2col) ]
    */
    
    /* Row 1 */
    .item-0 { grid-column: span 2; }
    .item-1 { grid-column: span 2; }

    /* Row 2 */
    .item-2 { grid-column: span 1; }
    .item-3 { grid-column: span 2; }
    .item-4 { grid-column: span 1; }

    /* Row 3 */
    .item-5 { grid-column: span 2; }
    .item-6 { grid-column: span 2; }

    /* Mobile Responsive */
    @media (max-width: 900px) {
        .project-page {
            padding-top: 80px;
        }

        .split-intro {
            flex-direction: column;
            gap: var(--spacing-40);
            margin-bottom: 80px;
        }

        .image-column {
            height: 50vh;
            order: 1; /* Image Top */
        }

        .text-column {
            order: 2; /* Text Bottom */
        }

        h1 {
            font-size: 48px;
        }

        /* Bento Mobile: Reset grid to single column */
        .bento-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto; /* Allow auto height on mobile */
            grid-auto-rows: 250px;
        }

        /* Reset all spans on mobile for simple stack */
        .bento-item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
        }
    }
</style>