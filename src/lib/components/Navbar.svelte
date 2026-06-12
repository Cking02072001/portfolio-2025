<script lang="ts">
  import LogoSvg from "$lib/svg/LogoSvg.svelte";
  import LogoTextSvg from "$lib/svg/LogoTextSvg.svelte";
  import StarSvg from "$lib/svg/StarSvg.svelte";

  let {} = $props();

  let isMenuOpen = $state(false);

  function handleScroll(e: MouseEvent) {
    const currentTarget = e.currentTarget as HTMLAnchorElement;
    const href = currentTarget.getAttribute("href");

    if (!href) return;

    const isHomePage = window.location.pathname === "/";

    if (href.startsWith("/#")) {
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
            behavior: "smooth",
          });
        }
        closeMenu();
      } else {
        closeMenu();
      }
    } else if (href.startsWith("#") && isHomePage) {
      e.preventDefault();
      closeMenu();
    }
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }
  }

  // Close menu when a link is clicked
  function closeMenu() {
    if (isMenuOpen) {
      toggleMenu();
    }
  }

  function handleLogoClick(e: MouseEvent) {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      rainStickers();
      closeMenu();
    }
  }

  // Easter Egg: Sticker-Regen beim Klick aufs Logo
  interface RainPiece {
    id: number;
    x: number;
    delay: number;
    dur: number;
    rot: number;
    kind: string;
    color: string;
    size: number;
  }

  let rain = $state<RainPiece[]>([]);
  let rainTimer: ReturnType<typeof setTimeout> | undefined;

  function shapeFor(kind: string, color: string): string {
    switch (kind) {
      case "star":
        return `<polygon points="20,3 24.5,14.5 37,14.5 27,22 30.5,34 20,27 9.5,34 13,22 3,14.5 15.5,14.5" fill="${color}"/>`;
      case "heart":
        return `<path d="M20,34C20,34,5,23,5,14C5,9,9,5.5,13.5,5.5C16.5,5.5,18.5,7.5,20,10C21.5,7.5,23.5,5.5,26.5,5.5C31,5.5,35,9,35,14C35,23,20,34,20,34Z" fill="${color}"/>`;
      case "sparkle":
        return `<path d="M20,4L21.5,18.5L36,20L21.5,21.5L20,36L18.5,21.5L4,20L18.5,18.5Z" fill="${color}"/>`;
      default:
        return `<circle cx="20" cy="20" r="13" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="4 6" stroke-linecap="round"/>`;
    }
  }

  function rainStickers() {
    const kinds = ["star", "heart", "sparkle", "circle"];
    const colors = ["#923c56", "#d3546d", "#272727"];
    const now = Date.now();
    rain = Array.from({ length: 28 }, (_, i) => ({
      id: now + i,
      x: Math.random() * 100,
      delay: Math.random() * 0.6,
      dur: 2.4 + Math.random() * 1.6,
      rot: Math.random() * 480 - 240,
      kind: kinds[i % kinds.length],
      color: colors[i % colors.length],
      size: 16 + Math.random() * 18,
    }));
    clearTimeout(rainTimer);
    rainTimer = setTimeout(() => (rain = []), 5000);
  }
</script>

<nav class="fixed-navbar" class:open={isMenuOpen}>
  <div class="nav-content">
    <!-- Mobile Burger Button (Visible on mobile only) -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      class="burger-menu-btn"
      onclick={toggleMenu}
      aria-expanded={isMenuOpen}
    >
      <span class="bar top-bar"></span>
      <span class="bar middle-bar"></span>
      <span class="bar bottom-bar"></span>
    </button>

    <!-- Desktop Links (Visible on desktop only) -->
    <div class="desktop-links">
      <!-- 1. Über mich -->
      <a href="/#uber-mich" class="nav-link" onclick={handleScroll}>
        <button>Über mich</button>
      </a>

      <!-- 2. Star -->
      <div class="separator">
        <StarSvg size="20px" color="var(--color-black)" />
      </div>

      <!-- 3. Logo (Primary) -->
      <a href="/" class="logo" onclick={handleLogoClick}>
        <LogoSvg size="96px" />
      </a>

      <!-- 4. Star -->
      <div class="separator">
        <StarSvg size="20px" color="var(--color-black)" />
      </div>

      <!-- 5. Meine Arbeiten -->
      <a href="/#meine-arbeiten" class="nav-link" onclick={handleScroll}>
        <button>Meine Arbeiten</button>
      </a>

      <!-- 6. Star -->
      <div class="separator">
        <StarSvg size="20px" color="var(--color-black)" />
      </div>

      <!-- 7. Kontakt -->
      <a href="/#kontakt" class="nav-link" onclick={handleScroll}>
        <button>Kontakt</button>
      </a>
    </div>

    <!-- Mobile Text Logo (Visible on mobile only) -->
    <div class="mobile-logo">
      <a href="/" onclick={handleLogoClick}>
        <LogoTextSvg
          size="36px"
          color={!isMenuOpen ? "var(--color-black)" : "var(--color-white)"}
        />
      </a>
    </div>
  </div>
</nav>

{#if rain.length}
  <div class="sticker-rain" aria-hidden="true">
    {#each rain as piece (piece.id)}
      <span
        style="left:{piece.x}vw; animation-duration:{piece.dur}s; animation-delay:{piece.delay}s; --rot:{piece.rot}deg;"
      >
        <svg viewBox="0 0 40 40" width={piece.size} height={piece.size}>
          {@html shapeFor(piece.kind, piece.color)}
        </svg>
      </span>
    {/each}
  </div>
{/if}

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
    color: var(--color-black); /* Ensure it stays black */
    text-decoration: none; /* No underline */

    &:hover {
      opacity: 0.8;
      color: var(--color-black); /* Explicitly keep it black on hover */
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

  /* Sticker-Regen (Logo Easter Egg) */
  .sticker-rain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 200;
    overflow: hidden;

    span {
      position: absolute;
      top: -50px;
      line-height: 0;
      animation: stickerFall linear forwards;
    }
  }

  @keyframes stickerFall {
    from {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translateY(115vh) rotate(var(--rot));
      opacity: 0.85;
    }
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
        color: var(--color-pink);
        font-size: 40px;
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
        background-color: var(
          --color-white
        ); /* Change color when menu is open */
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
