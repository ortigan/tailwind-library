<template>
  <div class="flex w-full space-x-6 justify-center items-center">
      <span v-for="(item,index) in items" :key="index">
          <div :class="`p-6 ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor}`">
              <div class="flex flex-col w-full">
              <div class="text-3xl font-bold">{{item.title}}</div>
              <div class="text-xl font-bold">{{item.type}}</div>
              <div class="mt-2"><p>{{item.para}}</p></div>
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
                textColor:"text-gray-700",
                bgColor:"bg-gray-100",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                type:"Type 1",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",

                },
                {
                id: 2,
                textColor:"text-gray-700",
                bgColor:"bg-gray-100",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                type:"Type 2",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",

                },
                {
                id: 3,
                textColor:"text-gray-700",
                bgColor:"bg-gray-100",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                type:"Type 3",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",

                },
            ]
        }
    }
}
</script>

<style>

</style>