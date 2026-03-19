<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { ShikiMagicMove } from 'shiki-magic-move/svelte';

	const highlighter = createHighlighter({
		themes: ['github-dark-dimmed'],
		langs: ['javascript', 'typescript']
	});

	let code = $state(`const skills = ['role', 'furtherEducation', 'base', 'preBase']`);

	$effect(() => {
		setTimeout(() => {
			code = `let skills = () => {
  role = 'Full Stack Web And App Developer',
  // Further Education Props
  furtherEducation = [
    'typescript', 'nodejs', 'react', 'sveltekit', 'svelte 5'
  ],
  // Base Props
  base = ['wordpress', 'typo3 cms', 'seo', 'ui/ux design'],
  // Pre Props
  preBase = ['html', 'css', 'javascript', 'php', 'sql'],
}: DeveloperProfile = $props();`;
		}, 1000);
	});
</script>

{#await highlighter then highlighter}
	<ShikiMagicMove
		class="overflow-hidden card border border-surface-400-600 preset-filled-surface-200-800 p-4 text-xs"
		lang="typescript"
		theme="github-dark-dimmed"
		{highlighter}
		{code}
		options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
	/>
{/await}
