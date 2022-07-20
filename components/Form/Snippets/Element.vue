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
<div class="w-full flex-row rounded-lg border bg-white px-8 py-5 text-gray-700 dark:bg-zinc-900 dark:text-zinc-500">
  <div class="flex w-2/3 items-center justify-center">
    <form action="" class="w-full">
      <div class=" ">
        <!-- small input -->
        <div class="w-full">
          <label for="" class="mb-2 block text-sm font-semibold">Small input </label>
          <input type="text" class="w-full rounded-lg border-gray-300 bg-gray-50 py-1 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800" />
        </div>
        <!-- Large input -->
        <div class="mt-6 w-full">
          <label for="" class="mb-2 block text-sm font-semibold">Base input </label>
          <input type="text" class="w-full rounded-lg border-gray-300 bg-gray-50 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800" />
        </div>
        <!-- Large input -->
        <div class="mt-6 w-full">
          <label for="" class="mb-2 block text-sm font-semibold">Large input </label>
          <input type="text" class="w-full rounded-lg border-gray-300 bg-gray-50 py-4 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800" />
        </div>
        <!-- checkbox -->
        <div class="mt-6 flex w-full items-center gap-2">
          <input type="checkbox" name="" id="" class="rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-0 dark:border-zinc-500 dark:bg-zinc-800" />
          <label for="" class="block text-sm font-semibold">Checkbox </label>
        </div>
        <!-- Radio -->
        <div class="mt-6 flex w-full items-center gap-2">
          <input type="radio" name="" id="" class="border border-gray-300 bg-gray-50 focus:outline-none focus:ring-0 dark:border-zinc-500 dark:bg-zinc-800" />
          <label for="" class="block text-sm font-semibold">Radio </label>
        </div>
      </div>
    </form>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
