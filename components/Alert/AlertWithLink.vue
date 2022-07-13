<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index">
      <div :class="`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`">
        <div
          role="alert"
          :class="``"
        >
          <span class="font-medium">{{ item.type }} alert!</span> A simple
          {{ item.type }} alert message. <a href="#" class="underline">Click here</a> to know more
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
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
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
        },
        {
          id: 2,
          type: "Dark",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
        },
        {
          id: 2,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
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
