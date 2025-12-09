<script>
    import MandarfnerHofSvg from "$lib/svg/MandarfnerHofSvg.svelte";

  let { 
    imageSrc = "https://placehold.co/400x600", 
    title = "Card Title", 
    description = "Description text goes here.", 
    projectId = "Action 2" ,
    link = "#"
  } = $props();

  let isHovered = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  class="image-card"
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
>
  <div class="image-container">
    <div class="card-image-wrapper">
      <img src={imageSrc} alt={title} />
    </div>
    
    <!-- Logo Overlay Wrapper-->
    <div class="logo-overlay">
        <!--<MandarfnerHofSvg color={isHovered ? '#272727' : 'currentColor'} /> -->
    </div>
  </div> 
  
  <div class="content">
    <p>{description}</p>
    <h3>{title}</h3>
    <div class="actions">
      <a href="/projects?id={projectId}"><button>Mehr darüber</button></a>
      <a href="{link}"><button class="purple-button">Zur Website</button></a>
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

    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

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
      .purple-button{
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
      opacity: 0; /* Hidden by default */
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
</style>