<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="`py-0.5 px-2 flex items-center justify-between text-xs rounded-md mr-4 font-normal ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`"
      >
        <div class="pr-1" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
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
          title: "Info",
          textColor: "text-sky-700",
          bgColor: "bg-sky-100",
          hoverTextColor: "hover:text-sky-800",
          hoverBgColor: "hover:bg-sky-200",
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
