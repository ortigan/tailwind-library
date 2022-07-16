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
    <div class="flex flex-col gap-3">
    <!-- badge xxs -->
    <div class="flex space-x-2 items-center">
    <div class="text-xs font-medium text-gray-700">Heading</div>
    <div class="text-xs py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
    </div>
    <!-- badge xs -->
    <div class="flex space-x-2 items-center">
    <div class="text-base font-medium text-gray-700">Heading</div>
    <div class="text-xs py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
    </div>
    <!-- badge sm -->
    <div class="flex space-x-2 items-center">
    <div class="text-lg font-medium text-gray-700">Heading</div>
    <div class="text-sm py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
    </div>
    <!-- badge base -->
    <div class="flex space-x-2 items-center">
    <div class="text-2xl font-medium text-gray-700">Heading</div>
    <div class="text-base py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
    </div>
    <!-- badge base -->
    <div class="flex space-x-2 items-center">
    <div class="text-3xl font-medium text-gray-700">Heading</div>
    <div class="text-base py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
    </div>
    </div>
    `,
    };
  },
};
</script>

<style></style>
