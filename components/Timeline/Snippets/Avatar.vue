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
<div class="p-4">
  <ol class="relative border-l border-dashed border-gray-400 text-neutral-500 dark:border-gray-600 dark:text-neutral-400">
    <li class="mb-4 ml-5">
      <!-- Circle -->
      <div class="absolute -left-3 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <img src="https://res.cloudinary.com/ortigan/image/upload/v1655120909/IMG_20190909_205547_265_d8ir8r.jpg" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 1</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-5">
      <!-- Circle -->
      <div class="absolute -left-3 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <img src="https://res.cloudinary.com/ortigan/image/upload/v1658494606/unsplash_UIp163xCV6w_ibh2bi.png" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 2</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
    <li class="mb-4 ml-5">
      <!-- Circle -->
      <div class="absolute -left-3 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-sky-200 text-xs font-medium text-white dark:bg-zinc-600">
        <img src="https://res.cloudinary.com/ortigan/image/upload/v1653905347/girl2_p4z6yr.png" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- Data 1 -->
      <time class="mb-1 text-sm font-normal leading-none">Title 3</time>
      <!-- Data 2  -->
      <p class="mb-4 text-sm font-normal">Name <strong class="lowercase"> data</strong></p>
    </li>
  </ol>
</div>
      `
    }
  }
};
</script>

<style></style>