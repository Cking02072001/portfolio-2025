<script lang="ts">
    import { page } from '$app/stores';
    import { error } from '@sveltejs/kit';
    import { projects, wipProjects } from '$lib/data/projects';
    import StarSvg from '$lib/svg/StarSvg.svelte';
    import Lightbox from '$lib/components/Lightbox.svelte';

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

    // Hauptbild und Galerie bilden zusammen die Lightbox-Reihenfolge
    let lightboxImages = $derived([project.mainImage, ...(project.images ?? [])]);
    let lightboxIndex = $state(-1);

    // Beim Projektwechsel die Lightbox schließen
    $effect(() => {
        projectId;
        lightboxIndex = -1;
    });

    /**
     * Spaltenbreiten für das Bento-Raster.
     * Grundmuster ist 2+2 / 1+2+1 / 2+2, jede Zeile also vier Spalten breit.
     * Bleibt die letzte Zeile unvollständig, wachsen ihre Bilder auf,
     * damit rechts kein Weißraum stehen bleibt.
     */
    const BENTO_MUSTER = [2, 2, 1, 2, 1, 2, 2];

    function bentoSpans(anzahl: number): number[] {
        const spans = Array.from({ length: anzahl }, (_, i) => BENTO_MUSTER[i % BENTO_MUSTER.length]);

        // In Zeilen zu je vier Spalten gruppieren
        const zeilen: number[][] = [];
        let zeile: number[] = [];
        let belegt = 0;
        for (let i = 0; i < spans.length; i++) {
            if (belegt + spans[i] > 4) {
                zeilen.push(zeile);
                zeile = [];
                belegt = 0;
            }
            zeile.push(i);
            belegt += spans[i];
        }
        if (zeile.length) zeilen.push(zeile);

        // Restspalten der letzten Zeile gleichmäßig verteilen
        const letzte = zeilen.at(-1);
        if (letzte) {
            let rest = 4 - letzte.reduce((summe, i) => summe + spans[i], 0);
            for (let k = 0; rest > 0; k++, rest--) {
                spans[letzte[k % letzte.length]] += 1;
            }
        }

        return spans;
    }

    let spans = $derived(bentoSpans(project.images?.length ?? 0));
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
            <button class="zoom" onclick={() => (lightboxIndex = 0)} aria-label="{project.title} vergrößern">
                <img
                    src={project.mainImage}
                    alt="{project.title}, {project.shortDescription}"
                    fetchpriority="high"
                    decoding="async"
                />
            </button>
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
                    <div class="bento-item" style:grid-column="span {spans[i]}">
                        <button class="zoom" onclick={() => (lightboxIndex = i + 1)} aria-label="Bild {i + 1} vergrößern">
                            <img
                                src={img}
                                alt="{project.title}, Detailansicht {i + 1} von {project.images.length}"
                                loading="lazy"
                                decoding="async"
                            />
                        </button>
                    </div>
                {/each}
            </div>
        </section>
    {/if}

</div>

<Lightbox
    images={lightboxImages}
    notes={project.imageNotes ?? []}
    bind:index={lightboxIndex}
    altText={project.title}
/>

<style lang="scss">
    /* Bilder sind anklickbar und öffnen die Lightbox */
    .zoom {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        cursor: zoom-in;
        font: inherit;
    }

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
        
        /* Nur die erste Zeile ist fest und höher. Alle weiteren entstehen
           nach Bedarf, damit bei wenigen Bildern keine leeren Zeilen bleiben. */
        grid-template-rows: 450px;
        grid-auto-rows: 350px;

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

    /* Die Spaltenbreite je Bild setzt bentoSpans() im Script,
       abhängig davon wie viele Bilder ein Projekt hat. */

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