<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Projects from "./lib/Projects.svelte";
  import Skills from "./lib/Skills.svelte";

  const outer = "px-2 sm:py-4";
  const inner = "w-full max-w-xl mx-auto  py-4 space-y-4";
</script>

<Header {outer} {inner} />
<main class="{outer} flex-auto">
  <article class={inner}>
    <Skills />
    <Projects />
  </article>
</main>
<footer class={outer}>
  <div class={inner}>
    <Footer />
  </div>
</footer>
