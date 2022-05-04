<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="`py-0.5 px-2 text-xxs rounded-md mr-4 font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
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
      ],
    };
  },
};
</script>

<style></style>
