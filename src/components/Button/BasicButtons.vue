<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-3 rounded-lg mr-2 font-semibold ${item.textColor} ${item.bgColor}`">{{item.title}}</div>
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
                title: "Primary",
                textColor: "text-white",
                bgColor: "bg-blue-700",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            {
                id: 2,
                title: "Yellow",
                textColor: "text-white",
                bgColor: "bg-yellow-300",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            {
                id: 3,
                title: "Green",
                textColor: "text-white",
                bgColor: "bg-green-500",
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