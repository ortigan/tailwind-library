<template>
  <div class="flex flex-wrap items-center gap-4">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="`relative ${item.pad} ${item.textSize} rounded-md font-semibold ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
      >
        {{ item.title }}
        <span
          :class="`text-xxs bg-red-500 rounded-full ml-1 ${item.normalCss}`"
          >{{ item.normalStat }}</span
        >
        <div
          :class="`absolute flex items-center text-xxs bg-red-500 rounded-full ${item.css}`"
        >
          {{ item.PositionedStat }}
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
          title: "Inbox",
          positionText: "",
          textColor: "text-white",
          bgColor: "bg-gray-700",
          css: "py-0.5 px-1.5 -top-3 -right-2",
          pad: "py-2 px-4",
          PositionedStat: "99+",
          textSize: "text-xs",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 2,
          title: "Inbox",
          positionText: "",
          textColor: "text-white",
          bgColor: "bg-gray-700",
          pad: "py-2 px-3",
          normalStat: "99+",
          normalCss: "py-0.5 px-1.5",
          textSize: "text-xs",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 3,
          title: "Inbox",
          textColor: "text-white",
          bgColor: "bg-gray-700",
          pad: "py-3 px-5",
          css: "py-0.5 px-1.5 -top-3 -right-2",
          PositionedStat: "99+",
          textSize: "text-base",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 4,
          title: "Inbox",
          textColor: "text-white",
          bgColor: "bg-gray-700",
          pad: "py-3 px-4",
          normalStat: "99+",
          normalCss: "py-0.5 px-1.5",
          textSize: "text-base",
          hoverTextColor: "",
          hoverBgColor: "",
        },
      ],
    };
  },
};
</script>

<style></style>
