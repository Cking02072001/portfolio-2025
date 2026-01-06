<script lang="ts">
    import SplineScene from "$lib/components/SplineScene.svelte";
    let { 
        leftSceneUrl = "https://prod.spline.design/Zns6jhy-8YuFaQfU/scene.splinecode",
        rightSceneUrl = "https://prod.spline.design/wUJckGf-jJ5Z52Pf/scene.splinecode"
    } = $props();
</script>

<section class="experience-section">
    <div class="column left-col">
        <div class="spline-container-large">
            <SplineScene 
                sceneUrl={leftSceneUrl} 
            />
        </div>
    </div>

    <!-- Middle Column: H3 + Text -->
    <div class="column middle-col">
        <h3>Ausbildung</h3>
        <div class="experience-element">
            <p class="fat-text">New Design University, 
                <br>Bachelor of Arts
                <br>2021 – 2024</p>
            <p>Studium für Grafik- & Informationsdesign. Fokus auf Branding, Kampagnenführung & Webdesign.
            </p>
        </div>
        <div class="experience-element">
            <p class="fat-text">WIFI Foundation Course,
                <br>Digital Designer
                <br>2020 – 2021</p>
            <p>Intensivausbildung im Bereich Grafikdesign und digitale Medien.</p>
        </div>
        <div class="experience-element">
            <p class="fat-text">BHAK Imst, 
                <br>Reife- & Diplomprüfung
                <br>2015 – 2020</p>
            <p>Höhere Lehranstalt mit Ausbildungsschwerpunkt Marketing & Tourismus.</p>
        </div>
    </div>

    <!-- Right Column: H3 + Text + H3 + Spline -->
    <div class="column right-col">
        <div class="text-group">
            <h3>Experience</h3>
            <div class="experience-element">
                <p class="fat-text">Freelance Design
                </p>
                <p>Selbstständige Tätigkeit als Digital Designerin.</p>
            </div>        
        <div class="experience-element">
            <p class="fat-text">Werbezimmer, Prutz
                <br>Seit Juli 2024
            </p>
            <p>Webdesign, Content Management & Social Media.</p>
        </div>        
        <div class="experience-element">
            <p class="fat-text">Mandarfner Hof</p>
            <p>Marketing & Hotelmanagement Operative Leitung In-House Marketing, Social Media Betreuung und Print-Produktion.</p>
        </div>
        </div>

        <div class="secondary-group" style="margin-top: -60px;">
            <h3>Hobbies</h3>
            <div class="spline-container-small" style="margin-top: -30px;">
                <SplineScene 
                    sceneUrl={rightSceneUrl} 
                />
            </div>
        </div>
    </div>

</section>

<style lang="scss">
    .experience-section {
        width: 100vw;
        min-height: 100vh; /* Ensures full height */
        padding: 120px 5vw; /* Top padding clears fixed nav, sides provide breathing room */
        padding-bottom: 0px;
        background-color: var(--color-white);
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
        gap: var(--spacing-40);
        align-items: start; /* Align content to top */
    }

    .experience-element{
        margin-bottom: var(--spacing-20);
    }
    .fat-text {
        font-weight: bold;
        font-style: italic;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    /* Column Specifics */
    .left-col {
        /* Optional: Center the visual if column is wider than content */
        align-items: center; 
    }

    

    .right-col {
        gap: var(--spacing-80); /* Space between the text group and the bottom spline group */
    }

    /* Content Styling */
    h3 {
        margin: 0;
        color: var(--color-purple);
        /* Font styling handled by global CSS, but ensuring margin consistency */
        margin-bottom: var(--spacing-20);
    }

    p {
        font-family: var(--font-reading);
        font-size: 18px;
        line-height: 1.6;
        color: var(--color-black);
        margin: 0;
        max-width: 90%;
    }

    /* Spline Wrappers */
    .spline-container-large {
        width: 100%;
        max-width: 400px; /* Constraint width */
        border-radius: var(--radius-full);
        overflow: hidden; /* Ensures canvas respects border radius */
        transform: translateY(-20%);
    }

    .spline-container-small {
        width: 100%;
        max-width: 100%;
        border-radius: var(--radius-full);
        overflow: hidden;
        margin-top: var(--spacing-20);
    }

    /* Mobile Responsive */
    @media (max-width: 900px) {
        .experience-section {
            grid-template-columns: 1fr; /* Stack columns */
            padding: 100px 20px;
            padding-top: 0;
            gap: var(--spacing-80);
        }

        .middle-col, .right-col {
            padding-top: 0; /* Remove staggered spacing on mobile */
        }

        .spline-container-large {
            max-width: 100%; /* Full width images on mobile */
            transform: translateY(0%);
        }
    }
</style>