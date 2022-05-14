<template>
  <div class="flex w-full flex-col justify-start">
      <span v-for="(item,index) in items" :key="index" class="">
        <div class=" justify-start text-gray-700 font">
            <div :class="`text-lg ${item.tracking} font-medium`">This is tracking</div>
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
                    tracking:"tracking-tighter",
                },
                {
                    id:2,
                    tracking:"tracking-tight",
                },
                {
                    id:3,
                    tracking:"tracking-normal",
                },
                {
                    id:4,
                    tracking:"tracking-wide",
                },
                {
                    id:5,
                    tracking:"tracking-wider",
                },
                {
                    id:6,
                    tracking:"tracking-widest",
                },
               
            ]
        }
    }
}
</script>

<style>

</style>