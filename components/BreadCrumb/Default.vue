<template>
  <div class="flex w-full">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
     <div class="flex items-center w-full space-x-2 font-normal text-xs md:text-sm text-gray-700 dark:text-gray-200">
       <div>Home</div>
       <div>/</div>
       <div>Account</div>
       <div>/</div>
       <div>Profile</div>
       <div>/</div>
       <div class="text-sky-600 dark:text-sky-400">Settings</div>
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
   
        },
      ],
    };
  },
};
</script>

<style scoped></style>
