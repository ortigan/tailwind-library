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
        rounded-full
        bg-gray-100
        hover:bg-gray-200 relative
        ring-2 ring-green-300
      "
    >
      <div class="text-base font-medium text-gray-700">P</div>
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

        relative ring-2 ring-red-300
      "
    >
      <div class="text-sm tracking-tight font-light text-gray-700 hover:scale-105">Alen</div>
    </div>
    <!-- Initials -->
    <div
      class="
        w-12
        h-12
        flex
        items-center
        justify-center
       
        bg-gray-700
        hover:bg-gray-800
        relative ring-2 ring-sky-300 border
      "
    >
      <div class="text-base font-normal text-gray-100">JD</div>
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
        rounded-full relative ring-2 ring-indigo-400
      "
    >
      <svg
        class="text-gray-700"
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
             <div class="h-3.5 w-3.5 bg-indigo-400 border-2 border-white absolute -right-0 top-0 rounded-full"></div>

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
        bg-amber-300
         relative ring-2 ring-blue-300
      "
    >
      <img
        class="w-full h-full object-cover rounded-lg pt-2 border-2"
        src="https://avatars.dicebear.com/api/avataaars/pj9bbrv.more2.svg"
        alt=""
      />

    </div>
      <!-- image -->
    <div class="w-20 h-20 relative rounded-full ring-2 ring-red-400">
      <img
        class="w-full h-full object-cover rounded-full border-2"
        src="https://res.cloudinary.com/pranav1421/image/upload/v1651817165/Tailwind-Component-library/Human%20avatar/pexels-anastasia-shuraeva-5704720_lbcevs.jpg"
        alt=""
      />
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style></style>
