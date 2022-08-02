<template>
<pre>
<code class="language-markup">
  {{code}}
</code>
</pre>
</template>

<script>
export default {
  data() {
    return {
      code:` 
<div class="flex w-full">
  <div class="max-w-md animate-pulse gap-3">
    <div class="mb-4 h-3 w-48 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="h-2 w-60 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 w-52 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 w-52 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>
