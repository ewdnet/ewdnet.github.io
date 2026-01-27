<script lang="ts">
  import { Copyright, Github } from "@lucide/svelte";
</script>

<p class="text-center">
  <span class="icon"><Copyright size={12} /></span>
  <small
    >{new Date().getFullYear()} |
    <span class="icon"><Github size={16} /></span> emil-devel.github.io</small
  >
</p>
