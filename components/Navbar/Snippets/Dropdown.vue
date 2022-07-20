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
<div class="flex w-full flex-col justify-between rounded-lg bg-white px-6 py-5 shadow-lg dark:bg-zinc-900 dark:shadow-black/5 lg:flex-row lg:items-center">
  <!-- logo -->
  <div class="flex items-center">
    <div class="flex h-10 w-10 items-center text-lg font-bold text-gray-700 dark:text-zinc-500">
      <img class="h-full w-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="" />
      <span class="px-2">tailwindcss</span>
    </div>
    <div class="flex w-full justify-end">
      <a class="block lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </a>
    </div>
  </div>
  <!-- nav items -->
  <div class="">
    <div class="" id="navigation">
      <ul class="mt-2 flex flex-col gap-2 font-medium text-gray-700 dark:text-zinc-400 lg:mt-0 lg:flex-row lg:gap-4">
        <li><a href="#" class="text-sky-700">Home</a></li>
        <li><a href="#" class="hover:text-sky-700">About</a></li>
        <li><a href="#" class="hover:text-sky-700">Services</a></li>
        <li><a href="#" class="hover:text-sky-700">Pricing</a></li>
      </ul>
    </div>
  </div>
  <div>
    <div class="flex items-center space-x-1 hover:cursor-pointer">
      <div class="relative h-10 w-10 rounded-full">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
      </div>
      <div class="text-gray-700 dark:text-zinc-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
      </div>
    </div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
