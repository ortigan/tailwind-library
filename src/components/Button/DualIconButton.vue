<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`flex justify-around items-center space-x-2 px-4 py-2 text-sm rounded-lg mr-2 font-semibold ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`">
              <div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></div>
          <div>{{item.title}}</div>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </div>
          </div>
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
                title: "Clone",
                textColor: "text-white",
                bgColor: "bg-green-500",
                hoverTextColor:"",
                hoverBgColor:"hover:bg-green-400",
                hoverShadowColor:"hover:shadow-gray-200",

            },
            {
                id: 2,
                title: "Download",
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