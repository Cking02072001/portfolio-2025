<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../reset.css";
  import Loader from "$lib/components/Loader.svelte";
  import { onNavigate } from "$app/navigation";

  let { children } = $props();

  // Sanfter Crossfade zwischen Routen (View Transitions API)
  // Bei Zurück/Vor (popstate) keine Transition — sonst geht die
  // Scroll-Position verloren.
  onNavigate((navigation) => {
    if (!document.startViewTransition || navigation.type === "popstate") return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <script
    async
    src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"
  ></script>
</svelte:head>

<Loader />
{@render children()}

<style lang="scss">
  @font-face {
    font-family: "Boska";
    src: url("/fonts/Boska/Boska-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Red";
    src: url("/fonts/Red/RedHatDisplay-Regular.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Red";
    src: url("/fonts/Red/RedHatDisplay-BoldItalic.ttf") format("opentype");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  :root {
    /* Fonts */
    --font-heading: "Boska", sans-serif;
    --font-reading: "Red", serif;

    /* Colors */
    --color-white: #fbf9f9;
    --color-purple: #923c56;
    --color-black: #272727;
    --color-pink: #d3546d;

    /* Spacing */
    --spacing-10: 10px;
    --spacing-20: 20px;
    --spacing-40: 40px;
    --spacing-80: 80px;
    --spacing-120: 120px;
    --spacing-160: 160px;
    --spacing-200: 200px;

    --radius-full: 1rem;
  }

  :global {
    body {
      font-family: var(--font-reading);
      color: var(--color-black);
      background-color: var(--color-white);
    }

    /* Custom cursor: burgundy dot, Ring auf Klickbarem */
    html,
    body {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='9' fill='%23923c56' fill-opacity='0.5'/%3E%3C/svg%3E") 16 16, auto;
    }

    a,
    button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='14' fill='none' stroke='%23923c56' stroke-width='3' stroke-opacity='0.7'/%3E%3Ccircle cx='20' cy='20' r='4' fill='%23923c56' fill-opacity='0.7'/%3E%3C/svg%3E") 20 20, pointer !important;
    }

    /* Weißer Cursor auf Burgundy-Flächen */
    .contact-section {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='9' fill='%23fbf9f9' fill-opacity='0.7'/%3E%3C/svg%3E") 16 16, auto;
    }

    .contact-section a,
    .contact-section button {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='14' fill='none' stroke='%23fbf9f9' stroke-width='3' stroke-opacity='0.9'/%3E%3Ccircle cx='20' cy='20' r='4' fill='%23fbf9f9' fill-opacity='0.9'/%3E%3C/svg%3E") 20 20, pointer !important;
    }

    /* Sehr subtile Noise-Textur über der ganzen Seite */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 9998;
      pointer-events: none;
      opacity: 0.07;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    @media (prefers-reduced-motion: reduce) {
      body::after { display: none; }
    }

    input,
    textarea,
    [contenteditable='true'] {
      cursor: text;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 0.35s;
    }

    @media (prefers-reduced-motion: reduce) {
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
      }
    }

    h1 {
      font-size: 80px;
    }

    h2 {
      font-size: 64px;
    }

    h3 {
      font-size: 40px;
    }

    h4 {
      font-size: 22px;
      font-family: var(--font-reading);
      font-style: italic;
    }

    h1,
    h2,
    h3 {
      font-family: var(--font-heading);
    }

    .citation {
      font-family: var(--font-heading);
      font-size: 98px;
    }

    button {
      font-family: var(--font-heading);
      color: var(--color-black);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    /* Mobile Overrides */
    @media (max-width: 768px) {
      body {
        font-size: 14px;
      }

      h1 {
        font-size: 40px;
      }

      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 14px;
      }

      .citation {
        font-size: 40px;
      }

      button {
        font-size: 24px;
      }
    }
  }
</style>
