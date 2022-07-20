<template>
  <div
    class="flex flex-col lg:flex-row w-full justify-between lg:items-center px-6 py-5 rounded-lg shadow-lg dark:shadow-white/5 bg-white dark:bg-gray-900"
  >
    <!-- logo -->
    <div class="flex items-center">
      <div class="font-bold text-lg text-gray-700 dark:text-gray-500 flex items-center w-10 h-10">
        <img class="w-full h-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="">
        <span class="px-2">tailwindcss</span>
      </div>
      <div class="w-full flex justify-end">
        <a class="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700"
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
        <ul class="flex flex-col lg:flex-row text-gray-700 dark:text-gray-400 font-medium gap-2 lg:gap-4 mt-2 lg:mt-0">
          <li><a href="#" class="text-sky-700">Home</a></li>
          <li><a href="#" class="hover:text-sky-700">About</a></li>
          <li><a href="#" class="hover:text-sky-700">Services</a></li>
          <li><a href="#" class="hover:text-sky-700">Pricing</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="flex items-center space-x-1 hover:cursor-pointer">
        <div class="w-10 h-10 rounded-full relative">
      <img
        class="w-full h-full rounded-full object-cover"
        src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg"
        alt=""
      />
    </div>
      <div class="text-gray-700 dark:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
      </div>
      </div>
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
