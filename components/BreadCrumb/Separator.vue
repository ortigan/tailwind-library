<template>
  <div class="flex w-full flex-col space-y-4 items-center">
    <span
      v-for="(item, index) in items"
      :key="index"
      class="flex w-full"
    >
      <div
        :class="
          `flex items-center justify-start shadow-md w-full space-x-2 text-xs md:text-sm font-normal  ${
            item.textColor
          } ${item.bgColor}  p-4 rounded-lg`
        "
      >
        <div class="flex items-center space-x-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
          </div>
          <div>Home</div>
        </div>
        
        <div class="flex item-center space-x-1">
            <div v-html="item.separator">
        
        </div>
          <div>Projects</div>
        </div>
     
        <div class="flex items-center space-x-1">
          <div v-html="item.separator">
            
          </div>
          <div>Task1</div>
        </div>
        <div>
         
        </div>
        <div :class="`${item.textColor} flex items-center space-x-1`">
          <div v-html="item.separator">
            
          </div>
          <div>Task2</div>
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
          textColor: "text-gray-600 dark:text-zinc-200",
          bgColor: "bg-white dark:bg-zinc-800",
          separator: `<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>`,
        },
        {
          id: 2,
          textColor: "text-gray-600 dark:text-zinc-200",
          bgColor: "bg-white dark:bg-zinc-800",
          separator: `<p class="mr-1">/ </p>`,
        },
        {
          id: 3,
          textColor: "text-gray-600 dark:text-zinc-200",
          bgColor: "bg-white dark:bg-zinc-800",
          separator: `<p class="mr-1">- </p>`,
        },
        {
          id: 4,
          textColor: "text-gray-600 dark:text-zinc-200",
          bgColor: "bg-white dark:bg-zinc-800",
          separator: `<p class="mr-1 font-semibold text-gray-400">|</p>`,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
