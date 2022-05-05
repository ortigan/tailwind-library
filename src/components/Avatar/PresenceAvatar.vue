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
        rounded-lg
        bg-gray-100
        hover:bg-gray-200 relative
      "
    >
      <div class="text-base font-medium text-gray-700">P</div>
      <div class="h-2.5 w-2.5 bg-green-400 absolute border-2 border-white -right-1 -top-1 rounded-full"></div>
    </div>
   
    <!-- text -->
    <div
      class="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-lg
        bg-gray-100
        hover:bg-gray-200
        relative
      "
    >
      <div class="text-sm tracking-tight font-light text-gray-700">John</div>
      <div class="h-3 w-3 bg-red-400 absolute border-2 border-white -right-1 -top-1 rounded-full"></div>
    </div>
    <!-- Initials -->
    <div
      class="
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-lg
        bg-gray-100
        hover:bg-gray-200
        relative
      "
    >
      <div class="text-base font-normal text-gray-700">JD</div>
       <div class="h-3.5 w-3.5 bg-blue-400 absolute border-2 border-white -right-1 -bottom-1 rounded-full"></div>
    </div>
    <!-- Icon -->
    <div
      class="
        w-14
        h-14
        flex
        items-center
        justify-center
        bg-gray-100
        hover:bg-gray-200
        rounded-lg relative
      "
    >
      <svg
        class="text-gray-700"
        width="24"
        height="24"
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
             <div class="h-3.5 w-3.5 bg-purple-400 border-2 border-white absolute -right-1 bottom-0 rounded-full"></div>

    </div>
    <!-- Avatar -->
    <div
      class="
        w-16
        h-16
        flex
        items-center
        justify-center
        rounded-lg
        bg-teal-300
        hover:bg-teal-200 relative 
      "
    >
      <img
        class="w-full h-full object-cover rounded-lg pt-1"
        src="https://avatars.dicebear.com/api/avataaars/mv.m55re2.svg"
        alt=""
      />
        <div class="h-4 w-4 bg-green-400 absolute border-2 border-white -right-1 -top-1 rounded-full"></div>

    </div>
      <!-- image -->
    <div class="w-20 h-20 relative">
      <img
        class="w-full h-full object-cover rounded-2xl"
        src="https://res.cloudinary.com/pranav1421/image/upload/v1651744687/Tailwind-Component-library/matheus-ferrero-W7b3eDUb_2I-unsplash_hu3utv.jpg"
        alt=""
      />
      <div class="h-5 w-5 bg-sky-400 absolute border-2 border-white -right-2 -top-2 rounded-full"></div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style></style>
