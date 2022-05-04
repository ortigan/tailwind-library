<template>
  <div class="flex flex-wrap items-center">
    <span v-for="(item, index) in itmes" :key="index">
        <div class="flex space-x-2 ">
            <div :class="`${item.headingSize}  text-gray-700 font-medium`">Heading</div>
      <div
        :class="`${item.pad} ${item.textSize} rounded-md mr-4 font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
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
          headingSize:"text-sm",
          textColor: "text-white",
          pad:"py-0.5 px-2",
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
          textSize:"text-xxs",
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
