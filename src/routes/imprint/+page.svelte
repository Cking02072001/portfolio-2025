<script>
    import Marquee from "$lib/components/Marquee.svelte";

    // No specific script logic needed for this static page

    import Navbar from "$lib/components/Navbar.svelte";
    import Contact from "$lib/sections/Contact.svelte";
    import Footer from "$lib/sections/Footer.svelte";

</script>
<div class="legal-page">
    <div class="nav-header">
        <a href="/" class="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Back to Home</span>
        </a>
    </div>

    <div class="legal-content">
        <h1>Imprint & Privacy</h1>

        <div class="section-block">
            <h2>Legal Disclosure (Impressum)</h2>
            <p class="subtitle">Disclosure according to § 25 Media Act (MedienG)</p>

            <p class="private-note">
                <strong>Note:</strong> This is a purely private, non-commercial website.
            </p>

            <div class="address-block">
                <strong>Celina Kammerhofe</strong><br>
                Innsbruck <br>
                Austria
            </div>

            <div class="contact-block">
                <h3>Contact</h3>
                <p>
                    Email: <a href="mailto:mail">mail</a>
                </p>
            </div>

            <div class="purpose-block">
                <h3>Purpose of the Website</h3>
                <p>
                    Personal portfolio and presentation of private coding projects.
                </p>
            </div>

            <div class="liability-block">
                <h3>Liability for Content</h3>
                <p>
                    The contents of this website have been created with the utmost care. However, I cannot guarantee the correctness, completeness, and up-to-dateness of the information provided.
                </p>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-block">
            <h2>Privacy Notice (Datenschutzerklärung)</h2>
            
            <h3>1. General Information</h3>
            <p>
                The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. This policy is based on the EU General Data Protection Regulation (GDPR / DSGVO).
            </p>

            <h3>2. Hosting</h3>
            <p>
                This website is hosted by an external service provider (Hoster). The personal data collected on this website is stored on the hoster's servers. This may include IP addresses, meta and communication data, website accesses, and other data generated via a website.
            </p>

            <h3>3. Data Collection on this Website</h3>
            <h4>Cookies</h4>
            <p>
                This website uses only technical cookies necessary for the operation of the site. No tracking or advertising cookies are used.
            </p>

            <h4>Contact via Email</h4>
            <p>
                If you contact me via email, your request, including all resulting personal data (name, request), will be stored and processed for the purpose of processing your request. This data will not be passed on without your consent.
            </p>

            <h3>4. Your Rights</h3>
            <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. You can contact me at any time at the email address given above. You also have the right to lodge a complaint with the competent supervisory authority (in Austria: Österreichische Datenschutzbehörde).
            </p>
        </div>
    </div>
</div>
<Navbar />
<Marquee items={['Design', 'Development', 'Photography', 'Branding', 'Illustration']} speed={30} />
<div id="kontakt">
    <Contact />
  </div>
  <Footer />
<style lang="scss">
    .legal-page {
        background-color: var(--color-white);
        color: var(--color-black);
        min-height: 100vh;
        /* Padding to clear fixed navbar and match project layout */
        padding: 150px 5vw 120px 5vw;
    }

    .nav-header {
        margin-bottom: var(--spacing-40);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--color-black);
        font-family: var(--font-heading);
        font-size: 20px;
        transition: opacity 0.3s ease;

        svg {
            display: block;
        }

        &:hover {
            opacity: 0.7;
        }
    }

    .legal-content {
        max-width: 800px;
        margin: 0 auto;
    }

    h1 {
        font-family: var(--font-heading);
        font-size: 80px; /* Matched to global h1 size */
        line-height: 1;
        margin-bottom: var(--spacing-80);
        color: var(--color-black);
    }

    .section-block {
        margin-bottom: var(--spacing-80);
    }

    h2 {
        font-family: var(--font-heading);
        font-size: 48px;
        margin-bottom: var(--spacing-40);
        color: var(--color-black);
    }

    h3 {
        font-family: var(--font-heading);
        font-size: 32px;
        margin-top: var(--spacing-40);
        margin-bottom: var(--spacing-20);
        color: var(--color-black);
    }

    h4 {
        font-family: var(--font-heading);
        font-size: 24px;
        margin-top: var(--spacing-20);
        margin-bottom: 10px;
        font-style: italic; /* Matching h4 global style */
    }

    p, .address-block {
        font-family: var(--font-reading);
        font-size: 18px;
        line-height: 1.6;
        color: var(--color-black);
        margin-bottom: 20px;
        opacity: 0.9;
    }

    .subtitle {
        font-style: italic;
        opacity: 0.6;
        margin-bottom: var(--spacing-40);
    }

    .private-note {
        background: rgba(0,0,0,0.03);
        padding: 20px;
        border-radius: var(--radius-full);
        font-size: 16px;
        margin-bottom: var(--spacing-40);
    }

    .address-block {
        border-left: 2px solid var(--color-purple); /* Using project purple accent */
        padding-left: 20px;
        margin-bottom: var(--spacing-40);
    }

    .legal-content a {
        color: var(--color-purple);
        text-decoration: underline;
        transition: color 0.2s ease;
        
        &:hover {
            color: var(--color-black);
            text-decoration: none;
        }
    }

    .divider {
        border: 0;
        height: 1px;
        background: rgba(0,0,0,0.1);
        margin: var(--spacing-80) 0;
    }

    @media (max-width: 768px) {
        .legal-page {
            padding: 100px 20px 80px 20px;
        }

        h1 {
            font-size: 48px;
        }

        h2 {
            font-size: 32px;
        }

        h3 {
            font-size: 24px;
        }
    }
</style>