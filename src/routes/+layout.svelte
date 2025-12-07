<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../reset.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
</svelte:head>

{@render children()}

<style lang="scss">
  @font-face {
    font-family: 'Voyage'; 
    src: url('/fonts/voyage/voyage-bold.otf') format('opentype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap; 
  }

  @font-face {
    font-family: 'Halyard'; 
    src: url('/fonts/halyard/Halyard_Text_Light.otf') format('opentype');
    font-weight: 300; 
    font-style: normal;
    font-display: swap; 
  }

  @font-face {
    font-family: 'Halyard'; 
    src: url('/fonts/halyard/Halyard_Text_Medium_Italic.otf') format('opentype');
    font-weight: 500; 
    font-style: italic;
    font-display: swap; 
  }

  :root {
    /* Fonts */
    --font-heading: 'Voyage', sans-serif;
    --font-reading: 'Halyard', serif; 

    /* Colors */
    --color-white: #FBF9F9;
    --color-purple: #923C56;
    --color-black: #272727;
    --color-pink: #D3546D;

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

    h1, h2, h3 {
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