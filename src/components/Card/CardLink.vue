<template>
  <div class="flex w-full space-x-6 justify-center items-center">
    <span v-for="(item, index) in items" :key="index">
      <div
        :class="
          `p-6 rounded-lg ${item.shadowColor} ${item.hoverShadow} ${
            item.textColor
          } ${item.bgColor} ${item.border} ${item.hoverTextColor} ${
            item.hoverBgColor
          }`
        "
      >
        <div class="flex flex-col w-full">
          <div class="text-2xl font-semibold">{{ item.title }}</div>
          <div class="text-sm py-4 font-semibold">{{ item.type }}</div>
          <div class="mt-2 text-sm">
            <p>{{ item.para }}</p>
            <div :class="`${item.linkColor}`"><a href="#">Card link</a></div>
          </div>
          <div class="flex items-center mt-6 space-x-2">
            <div>
              <button
                :class="
                  `px-5 py-2 text-sm font-medium ${item.bgButtonColor} ${
                    item.buttonBorder
                  } ${item.buttonTextColor} rounded-md`
                "
              >
                Button
              </button>
            </div>
            <a href="#" :class="`text-sm ${item.linkColor}`">Another link</a>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
          linkColor: "text-sky-500",
          buttonTextColor: "text-gray-100",
          bgButtonColor: "bg-gray-700",
          shadowColor: "shadow-lg",
          hoverShadow: "hover:shadow-none",
          title: "Default card title",
          type: "Type 1",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",
        },
        {
          id: 2,
          textColor: "text-gray-700 dark:text-gray-500",
          bgColor: "",
          buttonTextColor: "text-gray-700 dark:text-gray-500",
          linkColor: "text-sky-500",
          buttonBorder: "border border-gray-700 dark:border-gray-500",
          hoverShadow: "hover:shadow-none",
          title: "Default card title",
          border: "border border-gray-700",
          type: "Type 2",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",
        },
        {
          id: 3,
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
          hoverTextColor: "hover:text-gray-200",
          hoverBgColor: "hover:bg-gray-800",
          linkColor: "text-sky-300",
          buttonTextColor: "text-gray-700",
          bgButtonColor: "bg-gray-100",
          shadowColor: "shadow-lg",
          hoverShadow: "hover:shadow-none",
          title: "Default card title",
          type: "Type 3",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.",
        },
      ],
    };
  },
};
</script>

<style></style>
