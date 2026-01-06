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
                <strong>Note:</strong> The content serves to showcase personal skills and visual works.
            </p>

            <div class="address-block">
                <strong>Media Proprietor & Publisher</strong><br>
                Celina Kammerhofer<br>
                Mandarfen 81 <br>
                6481 St. Leonhard <br>
                Austria
            </div>

            <div class="contact-block">
                <h3>Contact</h3>
                <p>
                    Email: <a href="mailto:hi@celina.design">hi@celina.design</a>
                </p>
            </div>

            <div class="purpose-block">
                <h3>Purpose of the Website</h3>
                <p>
                    Online portfolio for the presentation of design and coding projects. 
                </p>
            </div>

            <div class="liability-block">
                <h3>Liability for Content</h3>
                <p>
                    The content and works created by the site operator on these pages are subject to copyright law. Duplication, processing, distribution, and any kind of exploitation require the written consent of the respective author or creator. Third-party contents (e.g., projects realized with agencies) are marked as such.
                </p><br>
                <p>This portfolio contains links to external third-party websites. I have no influence on the contents of those websites, therefore I cannot assume any liability for these external contents.</p>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-block">
            <h2>Privacy Notice (Datenschutzerklärung)</h2>
            
            <h3>1. General Information</h3>
            <p>
                The following information provides a simple overview of what happens to your personal data when you visit this website. The operator of this website takes the protection of your personal data very seriously. I treat your personal data confidentially and in accordance with the statutory data protection regulations (GDPR/DSGVO).
            </p>

            <h3>2. Hosting</h3>
            <p>
                This website is hosted by an external service provider. The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. This includes: IP address, browser type/version, operating system, referrer URL, and time of the server request. This data is not merged with other data sources.
            </p>

            <h3>3. Data Collection on this Website</h3>
            <h4>Cookies</h4>
            <p>
                This website aims to use as few cookies as possible. Only technically necessary cookies are used to ensure the proper operation of the website. No advertising or tracking cookies are used.
            </p>

            <h4>Contact via Email</h4>
            <p>
                If you contact me via email, your inquiry, including all resulting personal data (name, email address, message), will be stored and processed by me for the purpose of processing your request. I do not pass on this data without your consent.
            </p>
            <h4>Fonts</h4>
            <p>To ensure a consistent display of fonts, this page uses web fonts. These are hosted locally on my server. When you access a page, your browser loads the required web fonts into your browser cache to display texts and fonts correctly. No connection to third-party servers (e.g., Google Fonts) is established for this purpose, and no personal data is transferred.</p>


            <h3>4. Your Rights</h3>
            <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. For this purpose, you can contact me at any time at the email address given in the imprint. You also have the right to lodge a complaint with the competent supervisory authority (Austrian Data Protection Authority).
            </p>
        </div>
    </div>
</div>
<Navbar />
<Marquee items={['UI/UX & Webdesign', 'Branding & Logo', 'Social Media & Marketing', 'Grafik, Illustration & Print', '3D & 2D Animation']} speed={30} />
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