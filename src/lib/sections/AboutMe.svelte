<script lang="ts">
    import SplineScene from "$lib/components/SplineScene.svelte";
    import Doodle from "$lib/components/Doodle.svelte";

    let { 
        title = "Design with Purpose",
        subtitle = "by Celina Maria Kammerhofer",
        description = "Designerin. Tirolerin. Zu ehrgeizig für ihren eigenen Seelenfrieden. Ich mache Branding, Web und Socials und hab dabei ein Faible für Dinge, die man anfassen will.",
       Text = "Ich denke vom Logo bis zum Newsletter, von der Farbe bis zum Post. Mein Anspruch ist, dass deine Marke überall gleich klingt und gleich aussieht. Und zwar so, dass man sie wiedererkennt.",
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
        <Doodle variant="underline" size={170} style="margin: -28px 0 -20px 2px;" />
        <p>{description}</p>
        <p>{Text}</p>
        <span class="hand-note">
            <Doodle variant="spiral" size={42} rotate={-8} />
            kaffee? immer.
        </span>
    </div>
    
    <div class="right-content">
        <Doodle variant="arrow" size={84} rotate={-16} style="position: absolute; top: 18%; left: 2%; z-index: 2;" />
        <SplineScene sceneUrl="https://prod.spline.design/BxSFDunERx8KsEfN/scene.splinecode" />
    </div>
</section>


<style lang="scss">
    .split-hero {
        width: 100vw;
        /* Wächst mit, wenn der Text bei niedrigen Fenstern mehr Platz braucht */
        height: auto;
        min-height: 100vh;
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        overflow: hidden;
    }

    .left-content {
        width: 45%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        /* Luft oben und unten, damit nichts an der Navbar klebt */
        padding: 90px 0 70px 10vw;
        gap: var(--spacing-40);
        z-index: 1;
    }

    .right-content {
        width: 45%;
        align-self: stretch;
        min-height: 520px;
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
        /* Skaliert mit, damit die Zeile auf mittleren Fenstern nicht dreifach umbricht */
        font-size: clamp(46px, 6.4vw, 80px);
        line-height: 1;
        color: var(--color-black);
    }

    h3 {
        margin: 0;
        font-size: clamp(26px, 3vw, 40px);
        color: var(--color-purple);
    }

    p {
        font-family: var(--font-reading);
        font-size: 18px;
        line-height: 1.6;
        max-width: 500px;
        margin: 0;
    }

    .hand-note {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Caveat', cursive;
        font-size: 24px;
        color: var(--color-purple);
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