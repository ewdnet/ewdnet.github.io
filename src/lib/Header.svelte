<script lang="ts">
  const { outer, inner } = $props()
  import { Avatar } from '@skeletonlabs/skeleton-svelte/composed'
</script>

<header class={outer}>
  <div class="{inner} flex justify-between rounded-lg preset-filled-primary-300-700 p-4">
    <div class="mt-2 -mb-12 border-4 border-primary-300-700 rounded-full w-fit h-fit">
      <Avatar>
        <Avatar.Image src="/ewd-logo@2x.svg" alt="Logo: emil-devel" />
      </Avatar>
    </div>
    <h1 class="text-2xl text-primary-950">ewdnet</h1>
  </div>
</header>
