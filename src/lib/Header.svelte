<script lang="ts">
  const { outer, inner } = $props()
  import { Avatar } from '@skeletonlabs/skeleton-svelte'
</script>

<header class={outer}>
  <div class="{inner} flex justify-between rounded-lg preset-filled-primary-100-900 p-4">
    <div class="-mb-10 border-5 border-primary-100-900 rounded-full w-fit h-fit">
      <Avatar>
        <Avatar.Image src="/ewd-logo@2x.svg" alt="Logo: EWDnet" />
      </Avatar>
    </div>
    <h1 class="text-2xl text-primary-600-400 font-bold">ewdnet</h1>
  </div>
</header>
