<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index" >
      <div @mouseover="isOpen = true"
          @mouseleave="isOpen = false"
          :class="`w-3/4 ${item.bgColor2} rounded-lg`"
          ><div >
        <div
          role="accordion"
          :class="
            isOpen
              ? `p-4 text-sm ${item.textColorActive} ${item.bgColorActive} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer`
              : `p-4 text-sm ${item.textColor} ${item.bgColor} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer`
          "
        >
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
          </div>
          <div class="font-medium">{{item.type}} Notification</div>
        </div>

        <div>
          <span
            class="
              h-full
              w-full
              shadow
              grid grid-flow-row grid-cols-1
              divide-y
              justify-between
            "
            :class="isOpen ? `d-block ${item.divider}` : 'hidden'"
          >
            <span v-for="(menuitem, index) in menuitems" :key="index">
              <div class="flex flex-row justify-between items-center px-8 py-6">
              <div class="w-24">
                <div
                  class="h-16 w-16 bg-slate-300 rounded-full overflow-hidden"
                >
                  <img
                    :src="menuitem.leftimg"
                    alt=""
                  />
                </div>
              </div>
                <div class="flex flex-col space-y-2 w-3/4">
                  <p
                    class=""
                    :class="`${item.bgColor2} ${item.textColor2} font-medium `"
                  >
                   {{menuitem.title}}
                  </p>
                  <p class="text-sm" :class="`${item.bgColor3} ${item.textColor3}`">{{menuitem.time}}</p>
                </div>
                <div class="w-24"><div class="h-16 w-28 bg-slate-200 overflow-hidden">
                  <img
                    :src="menuitem.rightimg"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div></div>
              </div>
            </span>
          </span>
        </div>
      </div></div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-slate-400 dark:text-slate-200",
          bgColor: "bg-gray-50 dark:bg-gray-800",
          bgColor2: "bg-gray-50 dark:bg-gray-800",
          textColor2: "text-slate-400 dark:text-slate-200",
          textColor3: "text-gray-700 dark:text-gray-400",
          border: "border-1",
          borderColor: "border-slate-200",
          textColorActive: "text-slate-400 dark:text-slate-200",
          bgColorActive: "bg-gray-50 dark:bg-gray-800",
          divider: "divide-gray-700",
        },
      ],
      menuitems:[
          {
              id: 1,
              title: "Recommended: Fade Fan Beat Trailer//VALORANT okokkokkokoko",
              time: "3 hours ago",
              leftimg: "https://res.cloudinary.com/ortigan/image/upload/v1654599886/E27zoHJXEAEIIZf_k6kccg.png",
              rightimg: "https://res.cloudinary.com/ortigan/image/upload/v1654600760/maxresdefault_1_bijcx3.jpg",
          },
          {
              id: 2,
              title: "Recommended: Timepass 3 | Official Teaser | Hruta Durgule | Prathamesh Parab | Ravi Jadhav | Zee Studios",
              time: "1 day ago",
              leftimg: "",
              rightimg: "https://res.cloudinary.com/ortigan/image/upload/v1654603843/maxresdefault_2_alwq50.jpg",
          },
          {
              id: 3,
              title: "Recommended: Yelan & Eula with style",
              time: "2 days ago",
              leftimg: "",
              rightimg: "https://res.cloudinary.com/ortigan/image/upload/v1654690665/maxresdefault_live_zfacip.jpg",
          },
          {
              id: 4,
              title: "Recommended: NEW!!! FREEMOGEMS Rewards CLAIM NOW Before Expire HOYOVERSE Is Generous-Genshin Impact",
              time: "3 days ago",
              leftimg: "",
              rightimg: "https://res.cloudinary.com/ortigan/image/upload/v1654690770/Genshin-Impac_vx1gkd.png",
          }
      ]
    };
  },
};
</script>

<style>
</style>