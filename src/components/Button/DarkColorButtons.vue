<template>
  <div class="flex flex-wrap">
      <span v-for="(item,index) in itmes" :key="index">
          <div :class="`px-5 py-2 text-xs rounded-lg mr-2 mb-2 font-semibold ${item.textColor} ${item.bgColor}`">{{item.title}}</div>
      </span>
  </div>
</template>

<script>
export default {
    data(){
    return {
        itmes:[
            // {
            //     id: 1,
            //     title: "Slate",
            //     textColor: "text-white",
            //     bgColor: "bg-slate-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 2,
                title: "Gray",
                textColor: "text-white",
                bgColor: "bg-gray-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 3,
            //     title: "Zinc",
            //     textColor: "text-white",
            //     bgColor: "bg-zinc-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            // {
            //     id: 4,
            //     title: "Neutral",
            //     textColor: "text-white",
            //     bgColor: "bg-neutral-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            // {
            //     id: 5,
            //     title: "Stone",
            //     textColor: "text-white",
            //     bgColor: "bg-stone-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 6,
                title: "Red",
                textColor: "text-white",
                bgColor: "bg-red-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            {
                id: 7,
                title: "Orange",
                textColor: "text-white",
                bgColor: "bg-orange-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 8,
            //     title: "Amber",
            //     textColor: "text-white",
            //     bgColor: "bg-amber-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 9,
                title: "Yellow",
                textColor: "text-white",
                bgColor: "bg-yellow-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 10,
            //     title: "Lime",
            //     textColor: "text-white",
            //     bgColor: "bg-lime-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 11,
                title: "Green",
                textColor: "text-white",
                bgColor: "bg-green-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 12,
            //     title: "Emerald",
            //     textColor: "text-white",
            //     bgColor: "bg-emerald-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            // {
            //     id: 13,
            //     title: "Teal",
            //     textColor: "text-white",
            //     bgColor: "bg-teal-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 14,
                title: "Cyan",
                textColor: "text-white",
                bgColor: "bg-cyan-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 15,
            //     title: "Sky",
            //     textColor: "text-white",
            //     bgColor: "bg-sky-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            // {
            //     id: 16,
            //     title: "Blue",
            //     textColor: "text-white",
            //     bgColor: "bg-blue-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            // {
            //     id: 17,
            //     title: "Indigo",
            //     textColor: "text-white",
            //     bgColor: "bg-indigo-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 18,
                title: "Violet",
                textColor: "text-white",
                bgColor: "bg-violet-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 19,
            //     title: "Fuchsia",
            //     textColor: "text-white",
            //     bgColor: "bg-fuchsia-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            {
                id: 20,
                title: "Pink",
                textColor: "text-white",
                bgColor: "bg-pink-600",
                hoverTextColor:"",
                hoverBgColor:"",

            },
            // {
            //     id: 21,
            //     title: "Rose",
            //     textColor: "text-white",
            //     bgColor: "bg-rose-600",
            //     hoverTextColor:"",
            //     hoverBgColor:"",

            // },
            
    ]
}
}
}
</script>

<style>

</style>