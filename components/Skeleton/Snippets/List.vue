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
  <div class="w-64 animate-pulse space-y-4 divide-y divide-gray-300 rounded border border-gray-300 p-4 shadow dark:divide-zinc-700 dark:border-zinc-700 md:w-96 md:p-5">
    <div class="flex items-center justify-between">
      <div>
        <div class="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
        <div class="h-2 w-28 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
      </div>
      <div class="h-2 w-12 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    </div>

    <div class="flex items-center justify-between pt-4">
      <div>
        <div class="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
        <div class="h-2 w-28 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
      </div>
      <div class="h-2 w-12 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div>
        <div class="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
        <div class="h-2 w-28 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
      </div>
      <div class="h-2 w-12 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div>
        <div class="mb-2.5 h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
        <div class="h-2 w-28 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
      </div>
      <div class="h-2 w-12 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    </div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>
