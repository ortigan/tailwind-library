<template>
  <div class="flex flex-col space-y-1 items-center justify-end">
    <span v-for="(item, index) in itmes" :key="index">
        <div class="flex space-x-2 items-center justify-between">
            <div :class="`${item.headingSize} text-gray-700 font-medium`">Heading</div>
      <div
        :class="`${item.pad} ${item.textSize}  rounded-md mr-4 font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
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
          title: "New",
          headingSize:"text-xs",
          textColor: "text-white",
          pad:"py-0.5 px-1.5",
          textSize:"text-xxs",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 2,
          title: "New",
          headingSize:"text-base",
          textColor: "text-white",
          pad:"py-0.5 px-2",
          textSize:"text-xs",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 3,
          title: "New",
          headingSize:"text-lg",
          textColor: "text-white",
          pad:"py-0.5 px-1.5",
          textSize:"text-sm",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 4,
          title: "New",
          headingSize:"text-2xl",
          textColor: "text-white",
          pad:"py-0.5 px-2",
          textSize:"text-base",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
        },
        {
          id: 5,
          title: "New",
          headingSize:"text-3xl",
          textColor: "text-white",
          pad:"py-0.5 px-3",
          textSize:"text-base",
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
