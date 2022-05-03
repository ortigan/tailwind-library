<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-2 text-xs rounded-lg mr-2 mb-2 font-semibold  ${item.textColor} ${item.hoverTextColor} ${item.bgColor} ${item.hoverBgColor}`">{{item.title}}</div>
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
                title: "Info",
                textColor: "text-white",
                bgColor: "bg-cyan-500",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-cyan-600",
                hoverShadowColor:"",
                outlineColor:""

            },
            {
                id: 2,
                title: "Success",
                textColor: "text-white",
                bgColor: "bg-green-500",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-green-600",
                outlineColor:"border-2 border-green-500"

            },
            {
                id: 3,
                title: "Warning",
                textColor: "text-white",
                bgColor: "bg-yellow-400",
                hoverTextColor:"hover:text-white",
                hoverBgColor:"hover:bg-yellow-500",
                border: "border",
                outlineColor:"border border-yellow-500"

            },
                {
                    id: 4,
                    title: "Error",
                    textColor: "text-white",
                    bgColor: "bg-red-500",
                    hoverTextColor:"",
                    hoverBgColor:"",
                    hoverShadowColor:"hover:shadow-red-200",
                    hoverOutlineColor:"hover:border hover:border-gray-500"
    
                },
                
    ]
}
}
}
</script>

<style>

</style>