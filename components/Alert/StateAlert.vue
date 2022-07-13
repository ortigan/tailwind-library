<template>
  <div class="w-full flex flex-col space-y-4">
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
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
      },
          {
          id:2,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
      },
          {
          id:2,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
      },
          {
          id:2,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
      },
      ],
    };
  },
};
</script>

<style></style>
