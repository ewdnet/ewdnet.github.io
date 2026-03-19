<script lang="ts">
	import { ClipboardList, GraduationCap } from '@lucide/svelte';
	import Carousel from '$lib/projects/Carousel.svelte';
	import Scills from '$lib/skills/Scills.svelte';
</script>

<article class="pt-8">
	<h2 class="mx-auto flex max-w-xl items-center justify-end gap-1 px-4 h4 sm:px-0">
		<ClipboardList /> <span>Projects</span>
	</h2>
	<div class="py-8">
		<Carousel />
	</div>
	<section class="mx-auto max-w-xl px-4 py-8">
		<h3 class="flex items-center gap-1 h5">
			<GraduationCap /> <span>Skills</span>
		</h3>
		<Scills />
	</section>
</article>
