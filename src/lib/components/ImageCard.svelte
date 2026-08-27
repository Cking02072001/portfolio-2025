<script>
  import MandarfnerHofSvg from "$lib/svg/MandarfnerHofSvg.svelte";
  import Doodle from "$lib/components/Doodle.svelte";

  let {
    imageSrc = "https://placehold.co/400x600",
    hoverImageSrc = "https://placehold.co/400x600",
    title = "Card Title",
    description = "Description text goes here.",
    projectId = "Action 2",
    link = "#",
    accent = "sparkle",
  } = $props();

  let accentVariant = $derived(
    /** @type {'arrow' | 'underline' | 'sparkle' | 'circle' | 'spiral'} */ (accent),
  );

  let isHovered = $state(false);

  // 3D-Tilt: Karte folgt dem Mauszeiger
  let cardEl = /** @type {HTMLDivElement | undefined} */ (undefined);
  let tilt = $state({ rx: 0, ry: 0 });

  /** @param {MouseEvent} e */
  function onTiltMove(e) {
    if (!cardEl) return;
    const r = cardEl.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tilt = { rx: -py * 5, ry: px * 5 };
  }

  function onLeave() {
    isHovered = false;
    tilt = { rx: 0, ry: 0 };
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="image-card"
  bind:this={cardEl}
  style="transform: perspective(900px) rotateX({tilt.rx}deg) rotateY({tilt.ry}deg);"
  onmouseenter={() => (isHovered = true)}
  onmousemove={onTiltMove}
  onmouseleave={onLeave}
>
  <div class="image-container">
    <Doodle variant={accentVariant} size={48} color="#923c56" rotate={-12} style="position:absolute; top:4px; left:4px; z-index:5;" />
    <div class="card-image-wrapper">
      <img src={isHovered ? hoverImageSrc : imageSrc} alt={title} loading="lazy" decoding="async" />
    </div>
  </div>

  <div class="content">
    <p>{description}</p>
    <div class="title-line">
      <h3>{title}</h3>
      <Doodle variant="underline" size={110} color="#923c56" style="margin:-14px 0 0 2px;" />
    </div>
    <div class="actions">
      <a href="/projects?id={projectId}"><button>Mehr darüber</button></a>
      {#if link != "#"}
        <a href={link} target="_blank" rel="noopener noreferrer"><button class="purple-button">Zur Website</button></a>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .image-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-radius: var(--radius-full);
    background-color: var(--color-white, #fff);
    color: var(--color-black);

    /* Layout constraints */
    max-width: 550px;
    max-height: 400px;
    width: 100%;
    overflow: hidden; /* Ensures content respects border radius and max height */
    border: 1px solid var(--color-black); /* Subtle border for definition */

    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease,
      transform 0.15s ease-out;
    will-change: transform;

    @media (prefers-reduced-motion: reduce) {
      transform: none !important;
    }

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);

      /* Invert image border color on hover to be visible against dark bg */
      .card-image-wrapper {
        img {
          opacity: 1;
        }
      }

      /* Force non-purple buttons to white on hover */
      button:not(.purple-button) {
        color: var(--color-white);
      }
      .purple-button {
        color: var(--color-pink);
      }
    }
  }

  .purple-button {
    color: var(--color-purple);
  }

  .image-container {
    /* Roughly 2/5 of the space */
    flex: 2;
    min-width: 0; /* Prevents flex item from overflowing */
    display: flex;
    padding: 20px; /* Margin around image */
    position: relative; /* Essential for absolute positioning of children */
  }

  .card-image-wrapper {
    width: 100%;
    height: auto; /* Let aspect ratio determine height, or fill container if needed */
    aspect-ratio: 2 / 3; /* 2 width : 3 height */
    border-radius: var(--radius-full);
    border: 1px solid var(--color-black); /* Subtle border to separate image area */
    overflow: hidden;
    transition: border-color 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: opacity 0.3s ease;
    }
  }

  /* Centered Overlay Styles */
  .logo-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10; /* Ensures it sits above the image */
    pointer-events: none; /* Allows clicks to pass through to the image if needed */

    /* Optional: Ensure the logo doesn't overflow if it's very large */
    max-width: 80%;
    max-height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    /* Roughly 3/5 of the space */
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 20px 20px 0; /* Top, Right, Bottom, Left (0 because image padding handles the gap) */
    text-align: left; /* Align text left */
    justify-content: center; /* Center content vertically if height is constrained */
    overflow-y: auto; /* Allow text to scroll if it exceeds max-height */
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Prevents stretching */
    gap: 10px; /* Spacing between buttons */
  }

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
  }

  .title-line {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    font-size: 24px;
    transition: color 0.3s ease;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .image-card {
      flex-direction: column;
      max-height: none; /* Allow card to grow vertically */
      height: auto;
    }

    .image-container {
      width: 100%;
      flex: none; /* Don't grow/shrink, just take natural height + padding */
      padding: 20px 20px 0 20px; /* Adjust padding for stack layout */
    }

    .card-image-wrapper {
      aspect-ratio: 7 / 8;
    }

    .content {
      width: 100%;
      padding: 20px; /* Full padding around text */
      text-align: center;
      align-items: center; /* Center flex items horizontally */
    }

    .actions {
      align-items: center; /* Center buttons */
      width: 100%;
    }
  }

  /* Large Screens */
  @media (min-width: 1600px) {
    .image-card {
      max-width: 825px; /* 550 * 1.5 */
      max-height: 600px; /* 400 * 1.5 */
    }
  }
</style>
