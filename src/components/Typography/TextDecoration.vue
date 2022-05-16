<template>
  <div class="flex w-full flex-col justify-start">
      <span v-for="(item,index) in items" :key="index" class="">
        <div class="flex w-full space-x-2 items-center justify-start text-gray-700 font">
            <div :class="`text-lg ${item.decoration} font-medium`">{{item.text}}</div> <div class="text-xxs font-normal text-sky-400">{{item.decoration}}</div>
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
                    decoration:"overline",
                    text:"This is overline!"
                },
                {
                    id:2,
                    decoration:"underline",
                    text:"This is underline!"
                },
                {
                    id:3,
                    decoration:"line-through",
                    text:"This is line-through!"
                },
                {
                    id:4,
                    decoration:"no-underline",
                    text:"Text with no underline"
                },
               
               
            ]
        }
    }
}
</script>

<style>

</style>