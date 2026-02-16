<script>
  import { Github } from '@lucide/svelte';
  import { Pagination } from '@skeletonlabs/skeleton-svelte';
  import slides from './slides';
  import { fade, fly } from 'svelte/transition';
  const PAGE_SIZE = 1
  let page = $state(1);

  const start = $derived((page - 1) * PAGE_SIZE);
	const end = $derived(start + PAGE_SIZE);
	const paginatedProjects = $derived(slides.slice(start, end));
</script>

<div class="grid gap-4 w-full place-items-center">
{#each paginatedProjects as { url, link, title, content }}
  {#key page}
    <article class="text-sm rounded-xl preset-filled-surface-200-800" in:fly={{delay: 250, x: 200, duration: 200 }} out:fly={{ x: -200, duration: 200 }}>
      <header
        class="overflow-hidden rounded-t-xl mb-4 pt-10 pb-4 preset-filled-secondary-200-800 text-gray-200-800"
      >
        <h3 class="h4 px-4 py-2 text-center">{title}</h3>
      </header>
      <div class="px-4">
        {@html content}
      </div>
      <footer class="px-4 py-2 text-right">
        <a href={url} target="_blank" class="anchor text-xs" title={link}>
          code on
          <span class="icon"><Github size={12} /></span>
          github
        </a>
      </footer>
    </article>
  {/key}
{/each}

<Pagination count={slides.length} pageSize={PAGE_SIZE} {page} onPageChange={(event) => (page = event.page)}>
  <Pagination.Context>
    {#snippet children(pagination)}
      {#each pagination().pages as page, index (page)}
        {#if page.type === 'page'}
          <Pagination.Item {...page}>
            {page.value}
          </Pagination.Item>
        {:else}
          <Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>
</Pagination>
</div>