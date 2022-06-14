<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index" >
      <div ><div :class="`w-full ${item.bgColor2} rounded-lg`" >
        <div class="" @mouseover="isOpen = true"
          @mouseleave="isOpen = false">
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
             
              justify-between
            "
            :class="isOpen ? `d-block ${item.divider}` : 'hidden'"
          >
            <span v-for="(menuitem, index) in menuitems" :key="index">
              <div class="flex flex-row justify-between items-center p-4 ml-4">
              
              
                <div class="flex flex-col space-y-2 ">
                  <p
                    class=""
                    :class="`${item.bgColor2} ${item.textColor2} font-bold`"
                  >
                   {{menuitem.title}}
                  </p>
                  <p class="text-sm" :class="`${item.bgColor3} ${item.textColor3}`">{{menuitem.descr}}</p>
                </div>
                
              </div>
            </span>
          </span>
        </div>
      </div></div></div>
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
          textColor: "text-gray-400",
          bgColor: "bg-white",
          bgColor2: "bg-white",
          textColor2: "text-slate-600",
          textColor3: "text-slate-700",
          border: "border-1",
          borderColor: "border-slate-600",
          textColorActive: "text-slate-600",
          bgColorActive: "bg-white",
          divider: "divide-neutral-700",
        },
      ],
      menuitems:[
          {
              id: 1,
              title: "Discover",
              descr: "A marketplace for digital assets",
              leftimg: "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
              
          },
          {
              id: 2,
              title: "Graphics",
              descr: "Icons, Illustrations, Patterns, Textures...",
              leftimg: "https://res.cloudinary.com/ortigan/image/upload/v1654687958/Group_61_lelqjz.png",
             
          },
          {
              id: 3,
              title: "Fonts",
              descr: "Display, Script, Sans, Serif, Serif...",
              leftimg: "https://res.cloudinary.com/ortigan/image/upload/v1654688097/F_zoensv.png",
             
          },
      ]
    };
  },
}
</script>

<style>

</style>