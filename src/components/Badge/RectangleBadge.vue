<template>
  <div class="flex flex-wrap gap-2">
    <span v-for="(item, index) in itmes" :key="index">
      <div :class="`flex items-center gap-2 py-1 px-3 text-xs rounded-sm font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`">
        <div>

        <svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998"/></svg>
        </div>
      <div
      >
         {{ item.title }}
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
          hoverBgColor: "",
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
