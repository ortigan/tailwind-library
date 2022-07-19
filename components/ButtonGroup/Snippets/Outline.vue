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
    <div class="p-4">
    <div class="inline-flex -space-x-px font-medium">
        <button class="rounded-l-lg border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-gray-900 dark:text-zinc-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-400">Recent</button>
        <button class="rounded-r-lg border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-gray-900 dark:text-zinc-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-400">Popular</button>
    </div>
    </div>
`,
    };
  },
};
</script>

<style></style>
