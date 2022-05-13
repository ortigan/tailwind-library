<template>
  <div class="flex w-full justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
     <div class="flex items-center w-full space-x-2 font-medium text-gray-700">
       <div>Home</div>
       <div>/</div>
       <div>Account</div>
       <div>/</div>
       <div>Profile</div>
       <div>/</div>
       <div class="text-sky-600">Settings</div>
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
