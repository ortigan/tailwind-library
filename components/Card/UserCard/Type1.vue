<template>
  <div class="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-6 space-y-3 lg:space-y-0 lg:justify-center lg:items-center">
      <span v-for="(item,index) in items" :key="index" class="w-full">
          <div :class="`w-full p-4 rounded-xl ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${item.divBorder} ${item.hoverTextColor} ${item.hoverBgColor}`">
              <div class="flex flex-col justify-center items-center w-full">
              <div class="flex text-2xl font-semibold justify-center rounded-full h-20 w-20 overflow-hidden"><img class="rounded-full object-cover w-full h-full hover:scale-105" :src="item.avatar" alt=""></div>
              <div class="flex justify-center text-base pt-2 font-semibold">{{item.title}}</div>
              <div :class="`flex justify-center text-xxs ${item.textColor} font-semibold`">{{item.subTitle}}</div>
              <div class="flex space-x-1 pt-4 items-center">
                  <div :class="`px-5 py-2 text-xs font-semibold ${item.buttonBgColor} ${item.hoverBgButtonColor} rounded-lg ${item.buttonTextColor}`">View profile</div>
                  <div :class="`px-5 py-2 text-xs font-semibold  ${item.messageBg} ${item.border} rounded-lg`">Message</div>
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
                avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg`,
                textColor:"text-gray-700",
                bgColor:"bg-white",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-inner",
                title:"Elvis ray",
                subTitle:"Ux designer",
                type:"Type 1",
                buttonTextColor:"text-gray-100",
                buttonBgColor:"bg-gray-800",
                hoverBgButtonColor:"hover:bg-gray-900",
                border:"border border-gray-800",
                messageBg:"hover:bg-gray-50"
                },
                {
                id: 2,
                avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg`,
                textColor:"text-gray-700",
                bgColor:"bg-white",
                title:"Elvis ray",
                subTitle:"HR",
                type:"Type 1",
                buttonTextColor:"text-gray-100",
                buttonBgColor:"bg-gray-800",
                hoverBgButtonColor:"hover:bg-gray-900",
                border:"border border-gray-800",
                divBorder:"border border-gray-800",
                messageBg:"hover:bg-gray-50"
                },
                {
                id: 3,
                avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1652163780/Tailwind-Component-library/Human%20avatar/pexels-mart-production-9558758_d7nfoq.jpg`,
                textColor:"text-gray-100 font-normal",
                bgColor:"bg-gray-700",
                hoverBgColor: "hover:bg-gray-800",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-inner",
                title:"John smith",
                subTitle:"Development lead",
                type:"Type 1",
                buttonTextColor:"text-gray-700",
                buttonBgColor:"bg-gray-100",
                hoverBgButtonColor:"hover:bg-gray-200",
                border:"border border-gray-100 font-normal",
                messageBg:"hover:bg-gray-800"
                },
             
            ]
        }
    }
}
</script>

<style>

</style>