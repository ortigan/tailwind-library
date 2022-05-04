<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index">
      <div :class="`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} ${item.borderColor}`">
          <div class="flex space-x-2">
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>

        <div
          role="alert"
          class=""
        >
          <span class="font-medium">{{ item.type }} alert!</span> A simple
          {{ item.type }} alert message
        </div>
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
          borderColor:"border-l-2 border-gray-700"
        },
        // {
        //   id: 2,
        //   type: "Dark",
        //   textColor: "text-gray-100",
        //   bgColor: "bg-gray-700",
        //   borderColor:"border-2 border-gray-300"
        // },
        {
          id: 3,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
          borderColor:"Border-l-2 border-slate-900"
        },
         {
          id:4,
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
          borderColor:"border-l-2 border-sky-700"
      },
          {
          id:5,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
          borderColor:"border-l-2 border-emerald-700"
      },
          {
          id:6,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
          borderColor:"border-l-2 border-amber-700"
      },
          {
          id:7,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
          borderColor:"border-l-2 border-rose-700"
      },
        
      ],
    };
  },
};
</script>

<style></style>
