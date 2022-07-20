<template>
  <div class="flex flex-wrap items-center gap-2 md:gap-4">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="`${item.pad} ${item.textSize} rounded-md font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
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
          pad:"py-0.5 px-2",
          textSize:"text-xxs",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 2,
          title: "Badge",
          textColor: "text-white",
          pad:"py-1 px-3",
          textSize:"text-sm",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 3,
          title: "Badge",
          textColor: "text-white",
          pad:"py-1 px-4",
          textSize:"text-base",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 4,
          title: "Badge",
          textColor: "text-white",
          pad:"py-1 px-4",
          textSize:"text-xl",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 5,
          title: "Badge",
          textColor: "text-white",
          pad:"py-1 px-4",
          textSize:"text-2xl",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        
      ],
    };
  },
};
</script>

<style></style>
