<script>
    let { 
        title = "STUDIO",
        leftLinkText = "Impressum",
        leftLinkUrl = "/impressum",
        rightLinkText = "Datenschutz",
        rightLinkUrl = "/datenschutz"
    } = $props();
</script>

<footer class="site-footer">
    <div class="link-wrapper left">
        <a href={"http://www.sl1.at"}>Programmiert von SL</a>
    </div>

    <div class="title-wrapper">
        <h2>Celina K.</h2>
    </div>

    <div class="link-wrapper right">
        <a href={"/imprint"}>Impressum & Datenschutz</a>
    </div>
</footer>

<style lang="scss">
    .site-footer {
        width: 100vw;
        padding: 60px 5vw;
        background-color: var(--color-purple);
        display: flex;
        justify-content: space-between;
        align-items: baseline; 
    }

    .title-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    h2 {
        color: var(--color-white);
    }

    .link-wrapper {
        /* Fixed width ensures the H1 remains perfectly centered */
        width: 300px;
        
        a {
            font-family: var(--font-heading);
            font-size: 24px;
            color: var(--color-white);
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
                text-decoration: underline;
                color: var(--color-purple);
            }
        }

        &.left {
            text-align: left;
        }

        &.right {
            text-align: right;
        }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .site-footer {
            flex-direction: column;
            align-items: center;
            padding: 60px 20px;
            gap: 40px;
        }

        .link-wrapper {
            width: auto;
            text-align: center !important;
            

                a {
                font-size: 18px;
            }

            /* Add some spacing between the stacked links */
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }

        /* Order adjustment if you want links below title */
        .title-wrapper {
            margin-bottom: 20px;
        }

       
    }
</style>