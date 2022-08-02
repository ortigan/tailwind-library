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
<!-- TYPE icon  -->
<div class="p-4">
  <ol class="relative border-l border-gray-400 text-neutral-500 dark:border-gray-600 dark:text-neutral-400">
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-500 dark:text-blue-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 1</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-500 dark:text-blue-300" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 2</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-500 dark:text-blue-300" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 3</time>
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