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
<div class="p-4">
  <ol class="border-indigo-500 relative border-l dark:border-gray-300 text-gray-500 dark:text-neutral-400">
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
      <div class="w-28 h-8 border border-gray-500 dark:border-neutral-400 rounded-md flex items-center justify-center text-xs font-medium text-gray-400 dark:text-neutral-500">Download ZIP</div>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
  </ol>
</div>       
      `
    }
  }
};
</script>

<style></style>
