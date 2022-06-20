<template>
  <div class="flex space-x-4 items-center">
      <!-- Letter -->
    <div
      class="
        w-8
        h-8
        flex
        items-center
        justify-center
        
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 relative
      "
    >
      <div class="text-base font-medium text-gray-700 dark:text-gray-400">P</div>
      <div class="h-2.5 w-2.5 bg-green-400 absolute border-2 border-white dark:border-gray-800 -right-1 -top-1 rounded-full"></div>
    </div>
   
    <!-- text -->
    <div
      class="
        w-10
        h-10
        flex
        items-center
        justify-center
        
        bg-gray-100
        hover:bg-gray-200 dark:bg-gray-800
        relative
      "
    >
      <div class="text-sm tracking-tight font-normal text-gray-700 dark:text-gray-400">John</div>
    </div>
    <!-- Initials -->
    <div
      class="
        w-12
        h-12
        flex
        items-center
        justify-center
        
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200
        relative ring-2 ring-green-400 border-2 border-white dark:border-gray-800
      "
    >
      <div class="text-base font-normal text-gray-700 dark:text-gray-400">JD</div>
    </div>
    <!-- Icon -->
    <div
      class="
        w-14
        h-14
        flex
        items-center
        justify-center
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200
         relative
      "
    >
      <svg
        class="text-gray-700 dark:text-gray-400"
        width="30"
        height="30"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
             <div class="h-3.5 w-3.5 bg-purple-400 border-2 border-white dark:border-gray-800 solid absolute -right-1 -bottom-1 rounded-full"></div>

    </div>
    <!-- Avatar -->
    <div
      class="
        w-16
        h-16
        flex
        items-center
        justify-center
        
        bg-red-300
        hover:bg-red-200 relative 
      "
    >
      <img
        class="w-full h-full object-cover  pt-1"
        src="https://avatars.dicebear.com/api/micah/yerm55re2.svg"
        alt=""
      />
        <div class="h-4 w-4 bg-green-400 absolute border-2 border-white -right-1 -bottom-1 rounded-full"></div>

    </div>
      <!-- image -->
    <div class="w-20 h-20  relative">
      <img
        class="w-full h-full  object-cover"
        src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg"
        alt=""
      />
      <div class="h-5 w-5 bg-red-400 absolute border-2 border-white -right-2 -top-1 rounded-full"></div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style></style>
