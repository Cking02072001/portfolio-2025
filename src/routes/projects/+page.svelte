<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import ProjectDetail from "$lib/sections/ProjectDetail.svelte";
    import WIP from "$lib/sections/WIP.svelte";

</script>

<svelte:head>
  <title>Projekte — Celina Maria Kammerhofer</title>
  <meta name="description" content="Ausgewählte Design-Projekte von Celina Maria Kammerhofer — Branding, Webdesign, Social Media und Print." />
  <meta property="og:title" content="Projekte — Celina Maria Kammerhofer" />
  <meta property="og:description" content="Ausgewählte Design-Projekte von Celina Maria Kammerhofer — Branding, Webdesign, Social Media und Print." />
  <link rel="canonical" href="https://celina.design/projects" />
</svelte:head>

<Navbar />
<ProjectDetail />
<WIP />
<Footer />