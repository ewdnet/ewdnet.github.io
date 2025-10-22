<script lang="ts">
  import CodeBlock from './CodeBlock.svelte'
  const skills = `
  const skills: DeveloperProfile = () => {
    role = 'Fullstack Web And App Developer',
    // Base Style Props
    base = 'overflow-hidden',
    rounded = 'rounded-container',
    shadow = '',
    classes = '',
    // Pre Style Props
    preBase = '',
    prePadding = '[&>pre]:p-4',
    preClasses = '',
  }: CodeBlockProps = $props()
  `
</script>

<CodeBlock code={skills} lang="js" />
