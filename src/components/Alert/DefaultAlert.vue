<template>
  <div class="w-full flex flex-col space-y-4" >
    <span v-for="(item,index) in items" :key="index">
      <div
        role="alert"
        :class="`p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`"
      >
        <span class="font-medium">{{item.type}} alert!</span> A simple {{item.type}} alert message
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
          id:1,
          type:"Default",
          textColor:"text-gray-800",
          bgColor:"bg-gray-100",
      },
          {
          id:2,
          type:"Dark",
          textColor:"text-gray-100",
          bgColor:"bg-gray-700",
      },
          {
          id:2,
          type:"Light",
          textColor:"text-zinc-400",
          bgColor:"bg-zinc-100",
      },
    //       {
    //       id:2,
    //       type:"Solid",
    //       textColor:"text-rose-700",
    //       bgColor:"bg-rose-100",
    //   },
      ],
    };
  },
};
</script>

<style></style>
