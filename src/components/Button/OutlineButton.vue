<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-2 text-xs rounded-lg mr-2 mb-2 font-semibold ${item.textColor} ${item.hoverTextColor} ${item.bgColor} ${item.hoverBgColor} ${item.outlineColor} ${item.outlineColor} ${item.hoverOutlineColor}`">{{item.title}}</div>
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
                title: "Button",
                textColor: "text-gray-700",
                bgColor: "",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-gray-700",
                hoverShadowColor:"hover:shadow-gray-200",
                outlineColor:"border-2 border-gray-700"

            },
            {
                id: 2,
                title: "Primary",
                textColor: "text-cyan-500",
                bgColor: "",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-cyan-500",
                outlineColor:"border-2 border-cyan-500"

            },
            {
                id: 3,
                title: "Thin",
                textColor: "text-pink-500",
                bgColor: "",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-pink-500",
                border: "border",
                outlineColor:"border border-pink-500"

            },
                {
                    id: 4,
                    title: "Ghost",
                    textColor: "text-gray-500",
                    bgColor: "bg-white",
                    hoverTextColor:"",
                    hoverBgColor:"",
                    hoverShadowColor:"hover:shadow-gray-200",
                    hoverOutlineColor:"hover:border hover:border-gray-500"
    
                },
                {
                    id: 5,
                    title: "Light",
                    textColor: "text-gray-200",
                    bgColor: "",
                    hoverTextColor:"hover:text-gray-400",
                    hoverBgColor:"hover:bg-gray-200",
                    hoverShadowColor:"shadow-gray-200",
                    outlineColor:"border-2 border-gray-200"
    
                },
                {
                    id: 6,
                    title: "Dark",
                    textColor: "text-gray-900",
                    bgColor: "",
                    hoverTextColor:"hover:text-white",
                    hoverBgColor:"hover:bg-gray-900",
                    hoverShadowColor:"shadow-gray-200",
                    outlineColor:"border-2 border-gray-900"
    
                },
                {
                    id: 6,
                    title: "Disabled",
                    textColor: "text-gray-300",
                    bgColor: "",
                    hoverTextColor:"",
                    hoverBgColor:"",
                    hoverShadowColor:"shadow-gray-200",
                    outlineColor:"border-2 border-gray-100"
    
                },
                {
                    id: 6,
                    title: "Link",
                    textColor: "text-blue-500",
                    bgColor: "",
                    hoverTextColor:"",
                    hoverBgColor:"",
                    hoverShadowColor:"",
                    hoverLink:"no-underline hover:underline",
                    hoverOutlineColor:"hover:border hover:border-blue-500"
    
                },
    ]
}
}
}
</script>

<style>

</style>