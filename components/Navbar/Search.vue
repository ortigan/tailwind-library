<template>
  <div
    class="flex flex-col lg:flex-row w-full justify-between lg:items-center px-6 py-5 rounded-lg shadow-lg bg-white dark:bg-zinc-900"
  >
    <!-- logo -->
    <div class="flex items-center">
      <div class="font-bold text-lg text-gray-700 dark:text-zinc-500 flex items-center w-10 h-10">
        <img class="w-full h-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="">
        <span class="px-2">tailwindcss</span>
      </div>
      <div class="w-full flex justify-end">
        <a class="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 dark:text-zinc-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </div>
    </div>
    <!-- nav items -->
    <div class="">
      
        <ul class="flex flex-col lg:flex-row text-gray-700 dark:text-zinc-400 font-medium gap-2 lg:gap-4 mt-2 lg:mt-0">
          <li><a href="#" class="text-sky-700">Home</a></li>
          <li><a href="#" class="hover:text-sky-700">About</a></li>
          <li><a href="#" class="hover:text-sky-700">Services</a></li>
          <li><a href="#" class="hover:text-sky-700">Pricing</a></li>
        </ul>
      
    </div>
    <!-- search bar -->
<div class="flex items-center relative">
            <input type="text" class="p-2 pl-10 placeholder:text-gray-400 bg-gray-50 dark:bg-zinc-700 rounded-xl border border-gray-300 dark:border-zinc-300 sm:text-sm focus:ring-sky-500 focus:border-sky-500 " placeholder="Search...">
    <div class="flex items-center absolute left-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg></div>
    </div>
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
