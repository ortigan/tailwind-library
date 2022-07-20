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
      <a class="block lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg></a>
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
  <!-- 3rd element -->
  <div>
    <div class="rounded-lg bg-sky-600 px-5 py-2 hover:bg-sky-700">
      <div class="text-tiny cursor-pointer font-medium text-white" type="button">Get started</div>
    </div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
