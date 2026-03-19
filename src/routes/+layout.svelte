<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import { Copyright, Github } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Page title</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content="A SvelteKit app" />
</svelte:head>

<header class="mx-4 py-4">
	<div
		class="mx-auto flex w-full max-w-xl justify-between rounded-lg preset-filled-surface-50-950 py-4 pl-4"
	>
		<div class="-mb-12 h-fit w-fit rounded-full border-6 border-surface-50-950 bg-surface-50-950">
			<Avatar>
				<Avatar.Image src="/ewd-logo@2x.svg" alt="Logo: ewdnet" />
			</Avatar>
		</div>
		<h1 class="text-2xl font-bold text-surface-contrast-50-950">ewdnet</h1>
	</div>
</header>
<main class="flex-auto py-4">
	{@render children()}
</main>
<footer class="preset-filled-surface-100-900 py-4">
	<p class="text-center">
		<span class="icon"><Copyright size={12} /></span>
		<small
			>{new Date().getFullYear()} |
			<span class="icon"><Github size={16} /></span> ewdnet.github.io</small
		>
	</p>
</footer>
