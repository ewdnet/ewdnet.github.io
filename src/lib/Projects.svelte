<script lang="ts">
  import { FolderGitIcon } from "@lucide/svelte";
  import { fly, scale } from "svelte/transition";
  import Slider from "./projects/Slider.svelte";

  let title: boolean = false;
  let projects: boolean = false;
  setTimeout(() => {
    title = true;
  }, 2500);
  setTimeout(() => {
    projects = true;
  }, 2800);
</script>

<section>
  {#if title}
    <h2 class="h6 pb-6 text-primary-600" in:fly={{ x: 200, duration: 400 }}>
      <span class="icon"><FolderGitIcon class="size-6" /></span>
      Projects
    </h2>
  {/if}
  {#if projects}
    <div in:scale={{ duration: 400 }}>
      <Slider />
    </div>
  {/if}
</section>
