<script>
  import './app.css';
  import content from './lib/content.json';

  // Import Sections
  import Hero from './lib/components/Hero.svelte';
  import Services from './lib/components/Services.svelte';
  import AboutContact from './lib/components/AboutContact.svelte';
  import Reviews from './lib/components/Reviews.svelte';
</script>

<svelte:head>
  <title>{content.companyName} | Heating, Ventilation, and Air Conditioning</title>
</svelte:head>

<main>
  <Hero data={content.hero} />
  <Services data={content.services} />
  <Reviews />
  <AboutContact aboutData={content.about} contactData={content.contact} />
</main>

<style>
  /* Global Layout adjustments if any */
</style>
