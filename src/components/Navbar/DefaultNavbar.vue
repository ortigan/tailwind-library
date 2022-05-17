<template>
  <div class="flex w-full flex-col space-y-4 justify-center items-center">
         <span v-for="(item,index) in items" :key="index" class="flex w-full">
      
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
          textColor:"text-gray-600",
          bgColor:"",
          outline:"border-2 border-gray-600"
        },
       
      ],
    };
  },
};
</script>

<style scoped></style>
