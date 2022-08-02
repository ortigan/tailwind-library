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
<div class="flex w-full animate-pulse flex-col items-center gap-3 md:flex-row">
  <div class="flex h-36 w-full items-center justify-center rounded-xl bg-gray-300 dark:bg-zinc-700 md:w-52">
    <svg class="h-10 w-10 dark:fill-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 21l-4.762-8.73L15 6l8 15h-7zM8 10l6 11H2l6-11zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  </div>
  <div class="max-w-md gap-3">
    <div class="mb-4 h-4 w-48 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="h-2 w-72 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 w-80 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 w-72 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 w-64 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
    <div class="mt-2.5 h-2 rounded-full bg-gray-300 dark:bg-zinc-700"></div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>