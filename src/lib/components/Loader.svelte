<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let isVisible = $state(true);

    const MAX_DURATION = 1500;

    onMount(() => {
        // Hide after animation is done — don't wait for Spline
        const timer = setTimeout(() => {
            isVisible = false;
        }, MAX_DURATION);

        return () => clearTimeout(timer);
    });

    $effect(() => {
        document.body.style.overflow = isVisible ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    });
</script>

{#if isVisible}
    <div class="loader-overlay" transition:fade={{ duration: 400 }}>
        <svg
            viewBox="0 0 82 50"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <mask id="mask-c-top" maskUnits="userSpaceOnUse">
                    <path
                        id="mask-path-top"
                        d="M 55 5 C 45 -5, 5 2, 12 40"
                        fill="none"
                        stroke="white"
                        stroke-width="25"
                        stroke-linecap="round"
                    />
                </mask>

                <mask id="mask-c-bottom" maskUnits="userSpaceOnUse">
                    <path
                        id="mask-path-bottom"
                        d="M 12 38 C 15 48, 45 52, 50 45 C 65 30, 55 10, 82 0"
                        fill="none"
                        stroke="white"
                        stroke-width="25"
                        stroke-linecap="round"
                    />
                </mask>
            </defs>

            <g id="CK-Logo">
                <path
                    id="Stern"
                    d="M0 40.5543C2.60242 43.1642 2.60229 47.3958 0 50.0055C2.60229 47.3958 6.8219 47.3956 9.42432 50.0055C6.8219 47.3956 6.82202 43.164 9.42432 40.5543C6.82202 43.164 2.60242 43.1642 0 40.5543Z"
                />
                <path
                    id="Fuss"
                    d="M60.5265 24.7359L69.1223 46.8952L66.4368 49.7863H81.6097L78.5214 46.4918L64.0895 14.0578C62.1273 16.1665 59.7905 22.5221 60.5265 24.7359Z"
                />
                <g id="C-zu-K">
                    <path
                        d="M67.2372 0.492792C67.2158 0.436132 67.1935 0.37678 67.1751 0.327922Z"
                    />
                    <path
                        d="M69.295 6.68517C52.9108 11.3589 60.6084 29.5891 51.844 40.8661C45.9658 46.761 31.5779 46.8537 23.7292 39.2781C21.174 36.6106 17.1847 35.4898 13.9862 37.0472L12.0786 38.3797C16.5192 45.3317 24.2869 49.9529 33.1399 49.9529C42.6132 49.9529 45.7501 49.1609 50.9973 44.9135C62.5363 34.1602 53.4741 12.1668 69.8288 7.3202C72.3973 6.66858 75.3019 4.44523 77.926 2.43664C79.1178 1.52431 80.2518 0.656301 81.2701 0H67.0524C67.083 0.0834367 67.1494 0.259742 67.2372 0.492792L67.2413 0.50379C67.848 2.11389 69.5488 6.62809 69.295 6.68517Z"
                    />
                </g>
                <path
                    id="C-Top"
                    d="M13.9861 37.0472C16.9193 34.9209 17.6797 30.9138 16.3966 27.5158C15.016 23.8594 14.2566 20.0684 14.2566 16.5249C14.2566 8.561 18.8414 3.13426 25.8243 3.13426C30.6207 3.13426 39.8968 7.18402 41.2009 12.1664H45.3164C46.6036 12.1664 47.6472 11.1204 47.6472 9.82946C47.6472 11.1204 48.6907 12.1668 49.9779 12.1668H53.4741C53.0337 11.5586 52.5707 10.8532 52.0868 10.1159C50.7544 8.086 49.2631 5.81403 47.6472 4.66011C43.4577 1.66844 38.43 0.0332642 33.16 0.0332642C19.4056 0.0332642 8.19055 11.2391 8.19055 25.1231C8.19055 30.0107 9.60708 34.4851 12.0539 38.3409C12.0621 38.3538 12.0703 38.3668 12.0786 38.3797L13.9861 37.0472Z"
                />
                <path
                    id="Stamm"
                    d="M43.2618 17.451L41.4248 14.0578H45.4204C46.7076 14.0578 47.7512 15.1043 47.7512 16.3952C47.7512 15.1043 48.7947 14.0578 50.0819 14.0578H53.9111L52.1035 17.4677V36.6138C52.1035 40.598 46.4728 42.1422 43.3964 42.9378L43.2618 17.451Z"
                />
            </g>
        </svg>
    </div>
{/if}

<style>
    :root {
        --speed-stamm: 0.35s;
        --speed-c-top: 0.45s;
        --speed-c-zu-k: 0.5s;
        --speed-fuss: 0.35s;
        --speed-stern: 0.25s;

        /* Back to ease-in-out for a classic, flawlessly smooth motion without stutters */
        --ease-standard: ease-in-out;
    }

    .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        min-height: 100vh;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fbf9f9;
        animation: finalizeBg 0.3s ease-in-out 0.8s forwards;
    }

    svg {
        width: 60%;
        max-width: 400px;
        height: auto;
        overflow: visible;
        fill: #231f20;
        animation: finalizeLogo 0.3s ease-in-out 0.8s forwards;
    }

    /* Initialer Zustand */
    #Stamm,
    #C-Top,
    #C-zu-K,
    #Fuss,
    #Stern {
        opacity: 0;
    }

    /* 1. STAMM */
    #Stamm {
        opacity: 1;
        clip-path: inset(0 0 100% 0);
        animation: drawDown var(--speed-stamm) var(--ease-standard) forwards;
        animation-delay: 0.05s;
    }

    /* 2. C-TOP */
    #C-Top {
        opacity: 1;
        mask: url(#mask-c-top);
        -webkit-mask: url(#mask-c-top);
    }

    #mask-path-top {
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        animation: drawStroke var(--speed-c-top) var(--ease-standard) forwards;
        animation-delay: 0.1s; /* Major Overlap */
    }

    /* 3. C-ZU-K */
    #C-zu-K {
        opacity: 1;
        mask: url(#mask-c-bottom);
        -webkit-mask: url(#mask-c-bottom);
    }

    #mask-path-bottom {
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        animation: drawStroke var(--speed-c-zu-k) var(--ease-standard) forwards;
        animation-delay: 0.3s; /* Major Overlap */
    }

    /* 4. FUSS */
    #Fuss {
        clip-path: inset(0 0 100% 0);
        animation: drawDown var(--speed-fuss) var(--ease-standard) forwards;
        animation-delay: 0.6s; /* Overlap */
    }

    /* 5. STERN */
    #Stern {
        transform-origin: 5px 45px;
        animation: scaleIn var(--speed-stern) var(--ease-standard) forwards;
        animation-delay: 0.7s; /* Overlap */
    }

    /* --- KEYFRAMES --- */
    @keyframes drawDown {
        to {
            clip-path: inset(0 0 0% 0);
            opacity: 1;
        }
    }

    @keyframes drawStroke {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes finalizeBg {
        to {
            background-color: #231f20; /* Schwarz */
        }
    }

    @keyframes finalizeLogo {
        to {
            fill: #d3546d; /* Rosa */
        }
    }
</style>
