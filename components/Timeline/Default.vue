<template>
<!-- TYPE A  -->
<div class="p-4">
  <ol class="border-indigo-500 relative border-l dark:border-gray-300 dark:text-neutral-400">
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
      <div class="w-28 h-8 border rounded-md flex items-center justify-center text-xs font-medium text-gray-600">Download ZIP</div>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="absolute -left-2.5 h-5 w-5 bg-white rounded-full flex items-center justify-center"><div class="bg-sky-500 border-sky-500 h-3 w-3 rounded-full border"></div></div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
  </ol>
</div>

<!-- TYPE B  -->
<div class="p-4">
  <ol class="border-indigo-500 relative border-l dark:border-gray-600 dark:text-neutral-400">
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="bg-sky-500 border-sky-500 absolute text-xs h-5 w-5 text-white flex justify-center items-center font-medium rounded-full -left-2">A</div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-4">
      <!-- Circle -->
      <div class="bg-sky-500 border-sky-500 absolute text-xs h-5 w-5 text-white flex justify-center items-center font-medium rounded-full border -left-2">B</div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Date</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
  </ol>
</div>

</template>

<script>
export default {
  data() {
    return {
      items: [{}],
    };
  },
};
</script>

<style scoped></style>
