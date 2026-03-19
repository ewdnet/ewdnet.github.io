<script lang="ts">
	import slides from '$lib/projects/slides';
	import { Carousel } from '@skeletonlabs/skeleton-svelte';
	import { Github } from '@lucide/svelte';

	const projects = $derived(slides);

	const splitLines = (text: string | null | undefined): string[] => {
		if (!text) return [];
		return text.split(/\r\n|\r|\n/);
	};
</script>

<Carousel slideCount={slides.length} slidesPerPage={1} allowMouseDrag autoplay loop>
	<Carousel.ItemGroup>
		{#each projects as { url, link, title, content }, i (i)}
			<Carousel.Item index={i}>
				<article class="mx-auto flex h-full max-w-xl flex-col">
					<header class="text-gray-200-800 border-b border-b-surface-300-700">
						<h3 class="px-4 py-2 text-center h4">{title}</h3>
					</header>
					<div class="flex-auto px-4 pb-4">
						<ul class="list-outside list-disc space-y-1 pl-6 text-sm">
							{#each splitLines(content) as line, index (index)}
								<li>{line}</li>
							{/each}
						</ul>
					</div>
					<footer class="border-t border-t-surface-300-700 px-4 pb-2">
						<p class="text-right text-xs">
							<a href={`https://github.com/${url}`} target="_blank" class="anchor" title={link}>
								code on
								<Github size={12} />
								github
							</a>
						</p>
					</footer>
				</article>
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup>
		<Carousel.Context>
			{#snippet children(carousel)}
				{#each carousel().pageSnapPoints as point, index (point)}
					<Carousel.Indicator {index} />
				{/each}
			{/snippet}
		</Carousel.Context>
	</Carousel.IndicatorGroup>
</Carousel>
