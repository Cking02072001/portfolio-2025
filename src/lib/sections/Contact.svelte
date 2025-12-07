<script>
    let { 
        title = "Let's Talk",
        email = "hello@studio.com",
        instagramUrl = "https://instagram.com"
    } = $props();
</script>

<section class="contact-section">
    <div class="left-content">
        <h1>Lets work together & create something</h1>
    </div>

    <div class="right-content">
        <div class="links-container">
            
            <!-- Email Link -->
            <a href="mailto:{email}" class="icon-link">
                <div class="icon-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <span class="link-text">Email</span>
            </a>

            <!-- Instagram Link -->
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" class="icon-link">
                <div class="icon-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </div>
                <span class="link-text">Instagram</span>
            </a>

        </div>
    </div>
</section>

<style lang="scss">
    .contact-section {
        width: 100vw;
        padding: 120px 5vw;
        background-color: var(--color-purple);
        display: flex;
        align-items: center;
        min-height: 60vh;
    }

    .left-content {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .right-content {
        width: 50%;
        display: flex;
        justify-content: flex-end; 
        padding-right: 5vw;
    }

    h1 {
        margin: 0;
        color: var(--color-white);
        line-height: 1;
    }

    .links-container {
        display: flex;
        gap: var(--spacing-80);
    }

    .icon-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-20);
        text-decoration: none;
        color: var(--color-white);
        font-family: var(--font-heading);
        font-size: 24px;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            
            .icon-circle {
                background-color: var(--color-white);
                color: var(--color-black);
                border-color: var(--color-white);
            }
        }
    }

    .icon-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        background-color: transparent;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .contact-section {
            flex-direction: column;
            padding: 80px 20px;
            gap: var(--spacing-40);
            min-height: auto;
        }

        .left-content, .right-content {
            width: 100%;
            justify-content: center; 
            text-align: center;
            padding: 0;
        }

        .links-container {
            gap: var(--spacing-40);
        }

        .icon-circle {
            width: 60px;
            height: 60px;
        }

        .icon-link svg {
            width: 24px;
            height: 24px;
        }
    }
</style>