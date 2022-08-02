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
  <div class="max-w-xs animate-pulse gap-3 md:max-w-full">
    <div class="flex w-full items-center gap-2">
      <div class="h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
      <div class="h-2.5 w-28 rounded-full bg-gray-200 dark:bg-zinc-600"></div>
      <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-zinc-500"></div>
    </div>
    <div class="mt-2 flex w-full items-center gap-2">
      <div class="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-zinc-500"></div>
      <div class="h-2.5 w-20 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
      <div class="h-2.5 w-36 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
    </div>
    <div class="mt-2 flex w-full items-center gap-2">
      <div class="h-2.5 w-96 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
      <div class="h-2.5 w-20 rounded-full bg-gray-300 dark:bg-zinc-500"></div>
      <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-zinc-600"></div>
    </div>
    <div class="mt-2 flex w-full items-center gap-2">
      <div class="h-2.5 w-56 rounded-full bg-gray-200 dark:bg-zinc-600"></div>
      <div class="h-2.5 w-20 rounded-full bg-gray-300 dark:bg-zinc-500"></div>
      <div class="h-2.5 w-20 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
    </div>
    <div class="mt-2 flex w-full items-center gap-2">
      <div class="h-2.5 w-48 rounded-full bg-gray-300 dark:bg-zinc-500"></div>
      <div class="h-2.5 w-52 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
    </div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>
