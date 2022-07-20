<template>
  <div class="flex flex-wrap gap-2 md:gap-4">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="`py-0.5 px-2.5 text-xs rounded-full font-medium ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor} ${item.borderColor} ${item.bgColor}`"
      >
        {{ item.title }}
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
          borderColor:"border border-gray-700",
          textColor: "text-gray-700",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 2,
          title: "Primary",
          borderColor:"border border-cyan-500",
          textColor: "text-cyan-500",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 3,
          title: "Ghost",
          borderColor:"border border-gray-200",
          textColor: "text-gray-300",
          bgColor: "",
          hoverTextColor: "hover:text-gray-500",
          hoverBgColor: "",
        },
        {
          id: 4,
          title: "Light",
          borderColor:"border border-gray-400",
          textColor: "text-gray-400",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "",
        },
        {
          id: 5,
          title: "Dark",
          borderColor:"border border-gray-900",
          textColor: "text-gray-900",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "",
        },
        {
          id: 6,
          title: "Disabled",
          borderColor:"border border-gray-300",
          textColor: "text-gray-300",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "shadow-gray-200",
        },
        {
          id: 7,
          title: "Info",
          borderColor:"border border-sky-600",
          textColor: "text-sky-600",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "",
          outlineColor: "",
        },
        {
          id: 8,
          title: "Success",
          borderColor:"border border-emerald-600",
          textColor: "text-emerald-600",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 9,
          title: "Warning",
          borderColor:"border border-amber-600",
          textColor: "text-amber-600",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",

        },
        {
          id: 10,
          title: "Error",
          borderColor:"border border-amber-600",
          textColor: "text-rose-600",
          bgColor: "",
          hoverTextColor: "",
          hoverBgColor: "",
        },
      ],
    };
  },
};
</script>

<style></style>
