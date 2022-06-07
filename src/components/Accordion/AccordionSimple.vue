<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item,index) in items" :key="index">
    <div :class="`${item.bgColor2} rounded-lg`">
      <div
        v-on:click="isOpen = !isOpen"
        role="accordion"
        :class="`p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg overflow-hidden cursor-pointer`"
      >
        <span class="font-medium">{{item.type}} Accordion</span>
      </div>
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
          type:"Default",
          textColor:"text-gray-700",
          bgColor:"bg-green-100",
          bgColor2: "bg-green-200",
          textColor2: "text-gray-900",
      },
      //     {
      //     id:2,
      //     type:"Dark",
      //     textColor:"text-gray-100",
      //     bgColor:"bg-gray-700",
      // },
      //     {
      //     id:2,
      //     type:"Light",
      //     textColor:"text-zinc-400",
      //     bgColor:"bg-zinc-100",
      // },

      ],
    };
  },
};
</script>

<style></style>
