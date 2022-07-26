<template>
  <div class="flex w-full lg:w-80 justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
      <div class="w-full flex flex-col bg-white rounded-2xl shadow-lg px-6 pt-8 pb-6 group">
          <div class="flex space-x-4">
              <div class="h-16 w-16 overflow-hidden rounded-lg">
                  <img class="w-full h-full object-cover rounded-lg group-hover:scale-110" src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="">
              </div>
              <div class="flex flex-col">
                  <div class="font-bold text-lg text-cyan-800">Geneva Soto</div>
                  <div class="flex items-center space-x-1">
                      <div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
<div class="text-tiny text-cyan-800">Maharashtra,India</div>
                  </div>
              </div>
          </div>
          <!-- button -->
          <div class="flex space-x-1 bg-cyan-800 hover:bg-cyan-900 justify-center items-center py-2 rounded-lg mt-8">
              <div><svg class="text-white" width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10H20M23 10H20M20 10V7M20 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              <div class="text-white text-tiny">Add friend</div>
          </div>
          <!-- button 2 -->
          <div class="flex space-x-2 border border-cyan-800 justify-center items-center py-2 rounded-lg mt-2">
              <div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
</div>
              <div class="text-cyan-800 text-tiny">Message</div>
          </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          textColor: "text-gray-700",
          bgColor: "bg-white",
          shadowColor: "shadow-lg",
          hoverShadow: "hover:shadow-3xl",
          title: "Charles Green",
          subTitle: "Product photographer",
          collegeName: "Harvard University",
          type: "Type 7",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
