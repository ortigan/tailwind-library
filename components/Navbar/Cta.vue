<template>
  <div
    class="flex flex-col lg:flex-row w-full justify-between lg:items-center px-6 py-5 rounded-lg shadow-lg dark:shadow-black/5 bg-white dark:bg-zinc-900"
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
      <div class="" id="navigation">
        <ul class="flex flex-col lg:flex-row text-gray-700 dark:text-zinc-400 font-medium gap-2 lg:gap-4 mt-2 lg:mt-0">
          <li><a href="#" class="text-sky-700">Home</a></li>
          <li><a href="#" class="hover:text-sky-700">About</a></li>
          <li><a href="#" class="hover:text-sky-700">Services</a></li>
          <li><a href="#" class="hover:text-sky-700">Pricing</a></li>
        </ul>
      </div>
    </div>
    <!-- 3rd element -->
   <div class="px-3 py-1 md:px-5 md:py-2 bg-sky-600 hover:bg-sky-700 rounded-lg sm:mt-2 lg:mt-0">
       <div class="cursor-pointer text-white text-tiny font-medium" type="button">Get started</div>
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
