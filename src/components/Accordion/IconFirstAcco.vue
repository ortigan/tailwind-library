<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item,index) in items" :key="index">
    <div :class="`${item.bgColor2} rounded-lg`">
      <div
        v-on:click="isOpen = !isOpen"
        role="accordion"
        :class="isOpen ? `p-4 text-sm ${item.textColorActive} ${item.bgColorActive} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer` : `p-4 text-sm ${item.textColor} ${item.bgColor} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer`"
      >
        <div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="isOpen ?``: 'transform -rotate-90'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
</svg></div>
        <div class="font-medium">{{item.type}} Accordion</div>         
      </div>
      <div class="px-4" :class="isOpen ? 'd-block': 'hidden'"><hr :class="`${item.border} ${item.borderColor}`"></div>
      <div>
        <span class="w-full flex flex-row justify-between text-xs" :class="isOpen ? 'd-block': 'hidden'" >
          <p class="rounded-lg" :class="`${item.bgColor2} ${item.textColor2} p-4 `">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat incidunt ipsam alias similique sequi temporibus. Dicta odio obcaecati odit inventore, suscipit laborum sequi mollitia eligendi, repellendus, quas cupiditate amet.</p>
        </span>
      </div>
      </div>
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
          id:1,
          type:"Border",
          textColor:"text-black",
          bgColor:"bg-white",
          bgColor2: "bg-white",
          textColor2: "text-black",
          border: "border-1",
          borderColor: "border-black",
          textColorActive: "text-black",
          bgColorActive: "bg-white"
      },
      
      ],
    };
  },
}
</script>

<style>

</style>