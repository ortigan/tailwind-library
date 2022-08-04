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
    <li class="w-full rounded-t-lg border-b border-gray-200 py-2 px-4 dark:border-zinc-600">An item</li>
    <li class="w-full border-b border-gray-200 py-2 px-4 dark:border-zinc-600">A second item</li>
    <li class="w-full border-b border-gray-200 py-2 px-4 dark:border-zinc-600">A third item</li>
    <li class="w-full rounded-b-lg py-2 px-4">A fourth item</li>
  </ul>
</div>
    `,
    };
  },
};
</script>

<style></style>
