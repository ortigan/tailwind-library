<template>
  <div class="flex w-full lg:w-80 justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
      <div class="flex flex-col group w-full h-full rounded-3xl shadow-lg p-4 text-gray-400 bg-white">
          <div class="flex justify-between">
              <div>
                  <svg width="24" height="24" class="text-gray-500" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <div :class="`${item.textColor} text-xs flex items-center justify-center cursor-pointer text-teal-400`">
                  Edit profile
              </div>
          </div>
          <!--  -->
          <div class="flex space-x-4 px-3 pt-6 items-center">
              <!-- avatar -->
              <div class="w-24 h-24 overflow-hidden rounded-3xl bg-teal-300">
                   <img
              class="w-full h-full object-cover group-hover:scale-105"
              src="https://avatars.dicebear.com/api/micah/helosdh1.svg"
              alt=""
            />
              </div>
              <!-- info -->
              <div>
              <div class="font-bold text-lg text-gray-700">
                  Helen Joe
              </div>
              <div class="text-xxs text-gray-500">@helenjoe</div>
              <div class="text-tiny text-gray-500 pt-2">Animator | Illustrator</div>
              </div>
          </div>
          <!-- Stats and cta -->
          <div class="flex justify-between px-3 pt-6">
               <div class="flex flex-col items-center">
            <div class="text-xs font-medium text-gray-500">
              Posts
            </div>
            <div class="font-bold text-tiny text-gray-700">41</div>
          </div>
               <div class="flex flex-col items-center">
            <div class="text-xs font-medium text-gray-500">
              Ratings
            </div>
            <div class="font-bold text-tiny text-gray-700">4.0</div>
          </div>
          <div class="flex items-center justify-center">

              <div class="px-4 py-2 rounded-lg text-tiny font-semibold bg-teal-400 hover:bg-teal-500 text-white">Button</div>
          </div>
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
          type: "Type 1",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
