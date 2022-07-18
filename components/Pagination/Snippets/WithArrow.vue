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
  <ul class="inline-flex items-center -space-x-px font-medium">
    <li class="rounded-l-lg border border-gray-200 px-3 py-2.5 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg></li>
    <li class="border border-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700">1</li>
    <li class="border border-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700">2</li>
    <li class="border border-gray-200 bg-blue-50 px-3 py-2 text-blue-500 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-700 dark:zinc-gray-700 dark:bg-zinc-700 dark:hover:bg-zinc-700">3</li>
    <li class="border border-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700">4</li>
    <li class="border border-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700">5</li>
    <li class="rounded-r-lg border border-gray-200 px-3 py-2.5 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700 dark:zinc-gray-700 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg></li>
  </ul>
      `
    }
  }
};
</script>

<style></style>
