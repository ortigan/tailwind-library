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
    <ul class="inline-flex -space-x-px font-medium">
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700 rounded-l-lg">Previous</li>
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700 ">1</li>
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700 ">2</li>
            <li class="px-3 py-2 border text-blue-500 hover:text-blue-700 hover:cursor-pointer bg-blue-50 hover:bg-blue-100 border-zinc-200 dark:bg-zinc-700 dark:text-blue-700 dark:hover:bg-zinc-700 dark:border-zinc-700">3</li>
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700 ">4</li>
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-700 dark:border-zinc-700 ">5</li>
            <li class="px-3 py-2 bg-white border hover:text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:cursor-pointer hover:bg-zinc-50 border-gray-200 dark:hover:bg-zinc-700 dark:border-zinc-700  rounded-r-lg">Next</li>
    </ul>
      `
    }
  }
};
</script>

<style></style>
