<script lang="ts">
    import SplineScene from "$lib/components/SplineScene.svelte";

    let { 
        title = "Design with Purpose",
        subtitle = "by Celina Kammerhofer",
        description = "Digital Native, die ganzheitlich und medienübergreifend denkt. Vom haptischen Erlebnis bis zur responsiven Website verbinde ich reine Ästhetik mit strategischem Marketing. ",
       Text = "Als multidisziplinäre Designerin entwickle ich visuelle Identitäten, die auf allen Kanälen funktionieren. Mit fundiertem Wissen in Branding, Social Media und SEO sorge ich dafür, dass deine Vision digital Realität wird und deine Marke sichtbar bleibt.",
        buttonText = "View Projects"
    } = $props();

        function handleScroll(e: MouseEvent) {
      const currentTarget = e.currentTarget as HTMLAnchorElement;
      const href = currentTarget.getAttribute('href');
      
      if (!href) return;

      const isHomePage = window.location.pathname === '/';

      if (href.startsWith('/#')) {
        if (isHomePage) {
          e.preventDefault();
          
          const targetId = href.substring(2); 
          const element = document.getElementById(targetId);

          if (element) {
            const navHeight = 80;
            const extraPadding = -10;
            const offset = navHeight + extraPadding;

            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else {
        }
      } 
      else if (href.startsWith('#') && isHomePage) {
      }
    }
</script>

<section class="split-hero">
    <div class="left-content">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <p>{Text}</p>
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