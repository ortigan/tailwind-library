<template>
  <div class="flex flex-wrap justify-center items-center">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`rounded-lg mr-2 mb-2 font-semibold cursor-pointer ${item.textColor} ${item.hoverTextColor} ${item.bgColor} ${item.hoverBgColor} ${item.size} ${item.textSize}`">{{item.title}}</div>
      </span>
  </div>
</template>

<script>
export default {
    data(){
    return {
        itmes:[
            {
                id: 1,
                title: "Small",
                textColor: "text-white",
                bgColor: "bg-gray-800",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"",
                hoverShadowColor:"",
                outlineColor:"",
                size:"px-3 py-1",
                textSize: "text-xxs"

            },
            {
                id: 2,
                title: "Base",
                textColor: "text-white",
                bgColor: "bg-gray-800",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"",
                hoverShadowColor:"",
                outlineColor:"",
                size:"px-5 py-2",
                textSize: "text-xs"

            },
            {
                id: 3,
                title: "Medium",
                textColor: "text-white",
                bgColor: "bg-gray-800",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"",
                hoverShadowColor:"",
                outlineColor:"",
                size:"px-7 py-3",
                textSize: "text-md"

            },
            {
                id: 4,
                title: "Large",
                textColor: "text-white",
                bgColor: "bg-gray-800",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"",
                hoverShadowColor:"",
                outlineColor:"",
                size:"px-9 py-4",
                textSize: "text-lg"

            },           
                
    ]
}
}
}
</script>

<style>

</style>