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
      code: `
<div class="flex w-full">
  <ul class="w-56 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white">
    <a class="w-full rounded-t-lg border-b border-gray-200 py-2 px-4 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-700 dark:border-zinc-600 dark:hover:bg-sky-600 dark:focus:ring-sky-500"> An item </a>
    <a class="w-full border-b border-gray-200 py-2 px-4 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-700 dark:border-zinc-600 dark:hover:bg-sky-600 dark:focus:ring-sky-500"> A second item </a>
    <a class="w-full border-b border-gray-200 py-2 px-4 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-700 dark:border-zinc-600 dark:hover:bg-sky-600 dark:focus:ring-sky-500"> A third item </a>
    <a class="w-full rounded-b-lg py-2 px-4 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-700 dark:hover:bg-sky-600 dark:focus:ring-sky-500">A fourth item</a>
  </ul>
</div>
    `,
    };
  },
};
</script>

<style></style>
