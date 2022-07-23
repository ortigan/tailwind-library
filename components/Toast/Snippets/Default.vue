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
<div class="w-full">
  <div class="flex w-1/3 items-center justify-between rounded-lg bg-white dark:bg-zinc-800 px-4 py-3 text-gray-500 dark:text-zinc-300 shadow-md">
    <div class="flex items-center space-x-2">
      <div class="rounded-lg bg-blue-100 dark:bg-zinc-700 p-1.5 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>This is a simple toast</div>
    </div>
    <div class="flex cursor-pointer rounded-lg p-1 text-gray-400 transition-all hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>
