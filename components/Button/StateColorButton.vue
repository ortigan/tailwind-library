<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="
          `px-5 py-2 text-xs rounded-lg mr-2 mb-2 font-semibold  ${
            item.textColor
          } ${item.hoverTextColor} ${item.bgColor} ${item.hoverBgColor}`
        "
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
          title: "Info",
          textColor: "text-blue-700",
          bgColor: "bg-blue-100",
          hoverTextColor: "hover:text-blue-800",
          hoverBgColor: "hover:bg-blue-200",
          hoverShadowColor: "",
          outlineColor: "",
        },
        {
          id: 2,
          title: "Success",
          textColor: "text-emerald-700",
          bgColor: "bg-emerald-100",
          hoverTextColor: "hover:text-emerald-800",
          hoverBgColor: "hover:bg-emerald-200",
        },
        {
          id: 3,
          title: "Warning",
          textColor: "text-amber-700",
          bgColor: "bg-yellow-100",
          hoverTextColor: "hover:text-amber-800",
          hoverBgColor: "hover:bg-yellow-200",

        },
        {
          id: 4,
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
