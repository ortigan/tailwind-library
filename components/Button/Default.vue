<template>
  <div class="flex flex-wrap gap-2 ">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-2 text-xs rounded-lg hover:cursor-pointer font-semibold ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor} ${item.bgColor}`">{{item.title}}</div>
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
                textColor: "text-white",
                bgColor: "bg-gray-700",
                hoverTextColor:"",
                hoverBgColor:"",
                hoverShadowColor:"hover:shadow-gray-200",

            },
            {
                id: 2,
                title: "Primary",
                textColor: "text-white",
                bgColor: "bg-cyan-500",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            {
                id: 3,
                title: "Alternate",
                textColor: "text-pink-500",
                bgColor: "",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-pink-500",
                border: "border border-pink-500",

            },
                {
                    id: 4,
                    title: "Ghost",
                    textColor: "text-gray-500",
                    bgColor: "bg-white",
                    hoverTextColor:"",
                    hoverBgColor:"hover:bg-gray-300",
                    hoverShadowColor:"hover:shadow-gray-200",
    
                },
                {
                    id: 5,
                    title: "Light",
                    textColor: "text-gray-500",
                    bgColor: "bg-gray-100",
                    hoverTextColor:"",
                    hoverBgColor:"hover:bg-gray-200",
                    hoverShadowColor:"shadow-gray-200",
    
                },
                {
                    id: 6,
                    title: "Dark",
                    textColor: "text-white",
                    bgColor: "bg-gray-900",
                    hoverTextColor:"",
                    hoverBgColor:"",
                    hoverShadowColor:"shadow-gray-200",
    
                },
                {
                    id: 6,
                    title: "Disabled",
                    textColor: "text-gray-300",
                    bgColor: "",
                    hoverTextColor:"",
                    hoverBgColor:"bg-gray-100",
                    hoverShadowColor:"shadow-gray-200 hover:cursor-default",
    
                },
                {
                    id: 6,
                    title: "Link",
                    textColor: "text-blue-500",
                    bgColor: "",
                    hoverTextColor:"",
                    hoverBgColor:"hover:underline",
                    hoverShadowColor:"",
    
                },
    ]
}
}
}
</script>

<style>

</style>