<script>
    import LogoSvg from "$lib/svg/LogoSvg.svelte";
    import LogoTextSvg from "$lib/svg/LogoTextSvg.svelte";
    import StarSvg from "$lib/svg/StarSvg.svelte";

    let { } = $props();

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }
    }

    // Close menu when a link is clicked
    function closeMenu() {
        if (isMenuOpen) {
            toggleMenu();
        }
    }
</script>

<nav class="fixed-navbar" class:open={isMenuOpen}>
  <div class="nav-content">
    
    <!-- Mobile Burger Button (Visible on mobile only) -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="burger-menu-btn" onclick={toggleMenu} aria-expanded={isMenuOpen}>
        <span class="bar top-bar"></span>
        <span class="bar middle-bar"></span>
        <span class="bar bottom-bar"></span>
    </button>
    
    <!-- Desktop Links (Visible on desktop only) -->
    <div class="desktop-links">
        <!-- 1. Über mich -->
        <a href="/#uber-mich" class="nav-link">
          <button>Über mich</button>
        </a>

        <!-- 2. Star -->
        <div class="separator">
          <StarSvg size="20px" color="var(--color-black)" />
        </div>

        <!-- 3. Logo (Primary) -->
        <div class="logo">
          <LogoSvg size="96px" />
        </div>

        <!-- 4. Star -->
        <div class="separator">
          <StarSvg size="20px" color="var(--color-black)" />
        </div>

        <!-- 5. Meine Arbeiten -->
        <a href="/#meine-arbeiten" class="nav-link">
          <button>Meine Arbeiten</button>
        </a>

        <!-- 6. Star -->
        <div class="separator">
          <StarSvg size="20px" color="var(--color-black)" />
        </div>

        <!-- 7. Kontakt -->
        <a href="/#kontakt" class="nav-link">
          <button>Kontakt</button>
        </a>
    </div>

    <!-- Mobile Text Logo (Visible on mobile only) -->
    <div class="mobile-logo">
        <LogoTextSvg size="36px" color={!isMenuOpen ? "var(--color-black)" : "var(--color-white)"} />
    </div>

  </div>
</nav>

<!-- Full-Screen Overlay Menu -->
{#if isMenuOpen}
<div class="mobile-overlay">
    <div class="overlay-links">
        <a href="/#uber-mich" onclick={closeMenu}>
            <button>Über mich</button>
        </a>
        <a href="/#meine-arbeiten" onclick={closeMenu}>
            <button>Meine Arbeiten</button>
        </a>
        <a href="/#kontakt" onclick={closeMenu}>
            <button>Kontakt</button>
        </a>
    </div>
</div>
{/if}


<style lang="scss">
  .fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: var(--color-white);
    padding: 30px 0;
  }

  .open {
    background-color: var(--color-black);
  }

  .nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-40); 
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-20);
    flex-wrap: wrap; 
  }

  /* Desktop View */
  .desktop-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-40); 
  }

  .logo {
    display: flex;
    align-items: center;
    line-height: 0;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }

  .separator {
    display: flex;
    align-items: center;
    color: var(--color-black);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-heading);
    font-size: 24px;
    color: var(--color-black);
    padding: 0;
    transition: color 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-link {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  /* Mobile Overlay */
  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-black); 
    z-index: 99; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
  }

  .overlay-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-80);
    text-align: center;
    
    a button {
        font-size: 32px; /* Large font for mobile overlay */
        color: var(--color-white);
        
        &:hover {
            color: var(--color-purple);
        }
    }
  }

  /* Mobile Burger Button Styles */
  .burger-menu-btn {
    position: absolute;
    left: var(--spacing-20);
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 24px;
    padding: 0;
    background: none;
    border: none;
    display: none; /* Hidden on desktop */
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 101; /* Above everything */
  }

  .bar {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
    transition: all 0.3s ease;
  }
  
  /* Mobile Logo is hidden on desktop */
  .mobile-logo {
    display: none;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .fixed-navbar {
      padding: var(--spacing-20);
      justify-content: center;
    }

    .nav-content {
      justify-content: space-between; /* Use space-between for mobile layout */
      padding: 0;
    }
    
    .desktop-links {
      display: none; /* Hide all desktop links */
    }

    .mobile-logo {
      display: flex;
      flex-grow: 1; /* Center the logo by allowing it to grow */
      justify-content: center;
      align-items: center;
      transform: translateX(-5%);
      
      /* Reset color for the logo, it's black by default */
      :global(.text-logo) {
          color: var(--color-black) !important;
      }
    }

    .burger-menu-btn {
      display: flex;
      position: relative; /* Position relative to take up space in flex container */
      left: 0;
      transform: none;
      width: 24px;
      height: 20px;
    }

    /* Burger animation when menu is open */
    .burger-menu-btn[aria-expanded="true"] {
        .bar {
            background-color: var(--color-white); /* Change color when menu is open */
        }
        .top-bar {
            transform: translateY(9px) rotate(45deg);
        }
        .middle-bar {
            opacity: 0;
        }
        .bottom-bar {
            transform: translateY(-9px) rotate(-45deg);
        }
    }
  }
</style>