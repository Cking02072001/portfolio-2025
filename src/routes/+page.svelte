<script>
    import Marquee from '$lib/components/Marquee.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Projects from '$lib/sections/Projects.svelte';
    import TextCenter from '$lib/sections/TextCenter.svelte';
    import AboutMe from '$lib/sections/AboutMe.svelte';
    import ImageWall from '$lib/sections/ImageWall.svelte';
    import Contact from '$lib/sections/Contact.svelte';
    import Experience from '$lib/sections/Experience.svelte';
    import Footer from '$lib/sections/Footer.svelte';
    import Hero from '$lib/sections/Hero.svelte';
    import WIP from '$lib/sections/WIP.svelte';
</script>
 
<div class="demo-container">
    <Navbar />
    <Hero />
    <Marquee items={['Design', 'Webdesign', 'UI/UX Deisgn', 'Branding & Logo', 'Illustration', "Social Media", "Grafik & Print"]} speed={30} />
    <ImageWall text="Trust me with your websites" />
    <div id="uber-mich">
      <AboutMe />
    </div>
    <Experience />
    <!-- <TextCenter /> -->
    <div id="meine-arbeiten">
    <Projects />
    </div>
    <WIP />
    <div id="kontakt">
      <Contact />
    </div>
    <Footer />

</div>

<style>
</style>