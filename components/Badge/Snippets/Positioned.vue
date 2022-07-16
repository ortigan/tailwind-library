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
        <div class="flex gap-4 p-4">
        <!-- 1st -->
        <div class="flex flex-wrap items-center gap-4">
            <div class="relative rounded-md bg-gray-700 py-2 px-4 text-xs font-semibold text-white">
            Inbox
            <div class="text-xxs  absolute -top-3 -right-2 flex items-center rounded-full bg-red-500 py-0.5 px-1.5">99+</div>
            </div>
        </div>
        <!-- 2nd -->
        <div class="flex flex-wrap items-center gap-4">
            <div class="relative rounded-md bg-gray-700 py-2 px-3 text-xs font-semibold text-white">
            Inbox
            <span class="text-xxs ml-1 rounded-full bg-red-500 py-0.5 px-1.5">99+</span>
            </div>
        </div>
        <!-- 3rd -->
        <div class="flex flex-wrap items-center gap-4">
            <div class="relative rounded-md bg-gray-700 py-2 px-4 text-base font-semibold text-white">
            Inbox
            <div class="absolute -top-3 -right-2 flex items-center rounded-full bg-red-500 py-0.5 px-1.5 text-xxs">99+</div>
            </div>
        </div>
        <!-- 4th -->
        <div class="flex flex-wrap items-center gap-4">
            <div class="relative rounded-md bg-gray-700 py-2 px-3 text-base font-semibold text-white">
            Inbox
            <span class="ml-1 rounded-full bg-red-500 py-0.5 px-1.5 text-xxs">99+</span>
            </div>
        </div>
        </div>
    `,
    };
  },
};
</script>

<style></style>
