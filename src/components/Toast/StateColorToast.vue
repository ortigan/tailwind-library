<template>
  <div class="w-full">
    <span v-for="(item, index) in items" :key="index">
      <div
        class="bg-white flex justify-between items-center px-4 py-3 rounded-lg text-gray-500 w-1/3 shadow-md mb-2"
      >
        <div class="flex items-center space-x-2">
          <div :class="`p-1.5 ${item.bgcolor} ${item.iconcolor} rounded-lg`">
           <p v-html="item.icon">
               
               </p> 
          </div>
          <div>
            {{ item.text }}
          </div>
        </div>
        <div class="cursor-pointer hover:bg-gray-200 rounded-lg p-1 text-gray-400 hover:text-gray-700 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
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
          text: "A successful toast",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>`,
          bgcolor: "bg-green-100",
          iconcolor: "text-green-500",
        },
        {
          id: 2,
          text: "An info toast",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
</svg>`,
          bgcolor: "bg-sky-100",
          iconcolor: "text-sky-500",
        },
        {
          id: 3,
          text: "A warning toast",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>`,
          bgcolor: "bg-yellow-100",
          iconcolor: "text-yellow-500",
        },
        {
          id: 4,
          text: "A destructive toast",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
</svg>`,
          bgcolor: "bg-red-100",
          iconcolor: "text-red-500",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
