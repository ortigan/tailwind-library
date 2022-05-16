<template>
  <div class="flex w-full flex-col justify-start">
      <span v-for="(item,index) in items" :key="index" class="">
        <div class="flex w-full space-x-2 items-center justify-start text-gray-700 font">
            <div :class="`text-lg underline ${item.decoration} font-medium`">Lets see what text decoration is!</div> <div class="text-xxs font-normal text-sky-400">{{item.decoration}}</div>
        </div>
      </span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    id:1,
                    decoration:"decoration-auto",
                },
                {
                    id:2,
                    decoration:"decoration-from-font",
                },
                {
                    id:3,
                    decoration:"decoration-0",
                },
                {
                    id:4,
                    decoration:"decoration-1",
                },
                {
                    id:5,
                    decoration:"decoration-2",
                },
                {
                    id:6,
                    decoration:"decoration-4",
                },
                {
                    id:6,
                    decoration:"decoration-8",
                },
               
            ]
        }
    }
}
</script>

<style>

</style>