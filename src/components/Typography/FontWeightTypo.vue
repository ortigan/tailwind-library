<template>
  <div class="flex w-full flex-col justify-start">
      <span v-for="(item,index) in items" :key="index" class="">
        <div class=" justify-start text-gray-700 font">
            <div :class="`text-lg ${item.FontWeight}`">Font Weight</div>
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
                    FontWeight:"font-thin",
                },
                {
                    id:2,
                    FontWeight:"font-extralight",
                },
                {
                    id:3,
                    FontWeight:"font-light",
                },
                {
                    id:4,
                    FontWeight:"font-normal",
                },
                {
                    id:5,
                    FontWeight:"font-medium",
                },
                {
                    id:6,
                    FontWeight:"font-semibold",
                },
                {
                    id:7,
                    FontWeight:"font-bold",
                },
                {
                    id:8,
                    FontWeight:"font-extrabold",
                },
                {
                    id:9,
                    FontWeight:"font-black",
                },
            ]
        }
    }
}
</script>

<style>

</style>