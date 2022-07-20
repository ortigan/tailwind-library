<template>
  <div class="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
      <span v-for="(item,index) in items" :key="index">
          <div :class="`w-72 md:w-full p-6 rounded-lg ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${item.border} ${item.hoverTextColor} ${item.hoverBgColor}`">
              <div class="flex flex-col w-full">
              <div class="text-2xl font-semibold">{{item.title}}</div>
              <div class="text-sm py-4 font-semibold">{{item.type}}</div>
              <div class="mt-2 text-sm w-full"><p>{{item.para}}</p></div>
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
                textColor:"text-gray-700 dark:text-gray-500",
                bgColor:"",
                shadowColor:"",
                hoverShadow:"hover:shadow-none",
                title:"Default card title",
                border:"border border-gray-700 dark:border-gray-500",
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