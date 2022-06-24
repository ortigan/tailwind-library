<template>
<pre><code class="language-markup"><script type="prism-html-markup">
<div class="flex w-full flex-col justify-between rounded-lg bg-white px-6 py-5 shadow-lg dark:bg-gray-900 lg:flex-row lg:items-center">
  <!-- logo -->
  <div class="flex items-center">
    <div class="flex h-10 w-10 items-center text-lg font-bold text-gray-700 dark:text-gray-500">
      <img class="h-full w-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="" />
      <span class="px-2">tailwindcss</span>
    </div>
    <div class="flex w-full justify-end">
      <a class="block lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></a>
    </div>
  </div>
  <!-- nav items -->
  <div class="">
    <ul class="mt-2 flex flex-col gap-2 font-medium text-gray-700 dark:text-gray-400 lg:mt-0 lg:flex-row lg:gap-4">
      <li><a href="#" class="text-sky-700">Home</a></li>
      <li><a href="#" class="hover:text-sky-700">About</a></li>
      <li><a href="#" class="hover:text-sky-700">Services</a></li>
      <li><a href="#" class="hover:text-sky-700">Pricing</a></li>
    </ul>
  </div>
  <!-- search bar -->
  <div class="relative flex items-center">
    <input type="text" class="rounded-xl border border-gray-300 bg-gray-50 p-2 pl-10 placeholder:text-gray-400 focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-700 sm:text-sm" placeholder="Search..." />
    <div class="absolute left-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg></div>
  </div>
</div>
</script></code></pre>
</template>

<script>
export default {};
</script>

<style></style>
