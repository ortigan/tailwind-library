<template>
  <div class="flex w-full flex-col justify-start -space-y-1">
      <span v-for="(item,index) in items" :key="index" class="">
        <div class=" justify-start text-gray-700 dark:text-gray-500">
            <div :class="`${item.textSize}`">Font size</div>
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
                    textSize:"text-xxs",
                },
                {
                    id:2,
                    textSize:"text-xs",
                },
                {
                    id:3,
                    textSize:"text-sm",
                },
                {
                    id:4,
                    textSize:"text-base",
                },
                {
                    id:5,
                    textSize:"text-lg",
                },
                {
                    id:6,
                    textSize:"text-xl",
                },
                {
                    id:7,
                    textSize:"text-2xl",
                },
                {
                    id:8,
                    textSize:"text-3xl",
                },
                {
                    id:9,
                    textSize:"text-4xl",
                },
                {
                    id:10,
                    textSize:"text-5xl",
                },
                {
                    id:11,
                    textSize:"text-6xl",
                },
            ]
        }
    }
}
</script>

<style>

</style>