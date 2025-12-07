<script>
    import { page } from '$app/stores';
</script>

<div class="error-page">
    <div class="content">
        <!-- Display the status code (e.g., 404) -->
        <h1>{$page.status}</h1>
        
        <!-- Display the error message passed from the throw error() call, or a default -->
        <p>{$page.error?.message || "Page not found"}</p>
        
        <a href="/" class="back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to Home
        </a>
    </div>
</div>

<style lang="scss">
    .error-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-white);
        text-align: center;
        /* Ensure it sits above other fixed elements if necessary */
        position: relative;
        z-index: 10;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-40);
        padding: 0 20px;
    }

    h1 {
        font-family: var(--font-heading);
        font-size: 150px;
        line-height: 1;
        margin: 0;
        color: var(--color-purple);
    }

    p {
        font-family: var(--font-reading);
        font-size: 24px;
        color: var(--color-black);
        margin: 0;
        max-width: 400px;
    }

    .back-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: var(--spacing-20);
        text-decoration: none;
        
        font-family: var(--font-heading);
        font-size: 24px;
        color: var(--color-black);
        
        padding: 10px 20px;
        border: 1px solid var(--color-black);
        border-radius: 999px; /* Pill shape */
        transition: all 0.3s ease;

        svg {
            display: block;
        }

        &:hover {
            background-color: var(--color-black);
            color: var(--color-white);
        }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        h1 {
            font-size: 100px;
        }

        p {
            font-size: 18px;
        }

        .back-button {
            font-size: 20px;
        }
    }
</style>