<script lang="ts">
  import { createHighlighter } from "shiki";
  import { ShikiMagicMove } from "shiki-magic-move/svelte";

  import "shiki-magic-move/dist/style.css";
  import { scale } from "svelte/transition";

  const highlighter = createHighlighter({
    themes: ["dark-plus", "poimandres", "nord"],
    langs: ["javascript", "typescript"],
  });

  let code = $state(`const skills = [role, base, preBase]`);

  $effect(() => {
    setTimeout(() => {
      code = `const skills = () => {
  role = 'Full Stack Web Developer',
  // Base Props
  base = [typescript, svelte],
  // Pre Props
  preBase = [html, css, javascript],
}: DeveloperProfile = $props();`;
    }, 1000);
  });
</script>

{#await highlighter then highlighter}
  <section class="flex flex-row-reverse pt-8 pb-4" in:scale>
    <ShikiMagicMove
      class="p-4 rounded-container w-fit max-w-full text-xs"
      lang="ts"
      theme="poimandres"
      {highlighter}
      {code}
      options={{ duration: 800, stagger: 0.3, lineNumbers: false }}
    />
  </section>
{/await}
