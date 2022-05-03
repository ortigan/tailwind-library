<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-2 text-xs rounded-lg mr-2 font-semibold ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`">{{item.title}}</div>
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
            
    ]
}
}
}
</script>

<style>

</style>