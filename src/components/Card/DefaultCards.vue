<template>
  <div class="flex w-full space-x-6 justify-center items-center">
      <span v-for="(item,index) in items" :key="index">
          <div :class="`p-6 rounded-lg ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${item.border} ${item.hoverTextColor} ${item.hoverBgColor}`">
              <div class="flex flex-col w-full">
              <div class="text-2xl font-semibold">{{item.title}}</div>
              <div class="text-xl font-semibold">{{item.type}}</div>
              <div class="mt-2 text-sm"><p>{{item.para}}</p></div>
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
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur suscipit nesciunt laudantium eius veritatis at facere soluta mollitia velit.",

                },
                {
                id: 2,
                textColor:"text-gray-700",
                bgColor:"",
                shadowColor:"",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                border:"border-2 border-gray-700",
                type:"Type 2",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur suscipit nesciunt laudantium eius veritatis at facere soluta mollitia velit.",

                },
                {
                id: 3,
                textColor:"text-gray-100",
                bgColor:"bg-gray-700",
                hoverTextColor:"hover:text-gray-200",
                hoverBgColor:"hover:bg-gray-800",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                type:"Type 3",
                para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur suscipit nesciunt laudantium eius veritatis at facere soluta mollitia velit.",

                },
            ]
        }
    }
}
</script>

<style>

</style>