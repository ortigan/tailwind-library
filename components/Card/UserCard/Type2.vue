<template>
  <div class="flex w-full lg:w-80 lg:justify-center lg:items-center">
      <span v-for="(item,index) in items" :key="index" class="w-full">
          <div :class="`w-full p-4 rounded-xl ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${item.border} ${item.hoverTextColor} ${item.hoverBgColor}`">
              <div class="flex flex-row justify-between items-center w-full">
                  <div class="flex flex-row justify-start items-center space-x-2">

              <div class="flex text-2xl font-semibold justify-center rounded-full h-20 w-20 overflow-hidden"><img class="rounded-full object-cover w-full h-full hover:scale-105" :src="item.avatar" alt=""></div>
                <div class="flex flex-col">

              <div class="flex justify-center text-base pt-2 font-semibold">{{item.title}}</div>
              <div class="flex justify-center text-xxs text-gray-500 font-semibold">UX designer</div>
                </div>
                  </div>
                <div class="hover:cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
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
                type:"Type 1",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur suscipit nesciunt laudantium eius veritatis at facere soluta mollitia velit.",

                },
             
            ]
        }
    }
}
</script>

<style>

</style>