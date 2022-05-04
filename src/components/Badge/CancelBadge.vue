<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
        <div :class="`py-0.5 px-2 flex items-center justify-between text-xs rounded-md mr-4 font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`">

      <div
        
      >
        {{ item.title }}
      </div>
      <div class="pl-1" type="button">
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
      </div>
        </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itmes: [
        {
          id: 1,
          title: "Badge",
          textColor: "text-white",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 2,
          title: "Primary",
          textColor: "text-white",
          bgColor: "bg-cyan-500",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 3,
          title: "Ghost",
          textColor: "text-gray-500",
          bgColor: "bg-zinc-100",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 4,
          title: "Light",
          textColor: "text-gray-400",
          bgColor: "bg-gray-100",
          hoverTextColor: "",
          hoverBgColor: "bg-gray-300",
          hoverShadowColor: "shadow-gray-200",
        },
        {
          id: 5,
          title: "Dark",
          textColor: "text-white",
          bgColor: "bg-gray-900",
          hoverTextColor: "",
          hoverBgColor: "bg-gray-300",
          hoverShadowColor: "shadow-gray-200",
        },
        {
          id: 6,
          title: "Disabled",
          textColor: "text-gray-300",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "bg-gray-100",
          hoverShadowColor: "shadow-gray-200",
        },
        {
          id: 7,
          title: "Info",
          textColor: "text-sky-700",
          bgColor: "bg-sky-100",
          hoverTextColor: "hover:text-sky-800",
          hoverBgColor: "hover:bg-sky-200",
          hoverShadowColor: "",
          outlineColor: "",
        },
        {
          id: 8,
          title: "Success",
          textColor: "text-emerald-700",
          bgColor: "bg-emerald-100",
          hoverTextColor: "hover:text-emerald-800",
          hoverBgColor: "hover:bg-emerald-200",
        },
        {
          id: 9,
          title: "Warning",
          textColor: "text-amber-700",
          bgColor: "bg-yellow-100",
          hoverTextColor: "hover:text-amber-800",
          hoverBgColor: "hover:bg-yellow-200",

        },
        {
          id: 10,
          title: "Error",
          textColor: "text-rose-700",
          bgColor: "bg-red-100",
          hoverTextColor: "hover:text-rose-800",
          hoverBgColor: "hover:bg-red-200",
        },
      ],
    };
  },
};
</script>

<style></style>
