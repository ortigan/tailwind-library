<template>
  <div class="flex flex-wrap gap-4">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="
          `py-0.5 px-2 flex items-center space-x-1 justify-between text-xxs rounded-md font-normal hover:cursor-pointer ${
            item.textColor
          } ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${
            item.hoverBgColor
          }  ${item.bgColor}`
        "
      >
        <div type="button">
          <span v-html="item.icon"></span>
        </div>
        <div class="font-medium">
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
          title: "24 hours ago",
          textColor: "text-sky-700",
          bgColor: "bg-sky-100",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "",
          outlineColor: "",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
</svg>
`,
        },
        {
          id: 2,
          title: "Fork",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
          hoverTextColor: "",
          hoverBgColor: "",
          icon: `<svg width="14" height="14" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
        },
        {
          id: 3,
          title: "Follow",
          textColor: "text-white",
          bgColor: "bg-blue-400",
          hoverTextColor: "",
          hoverBgColor: "",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
`,
        },
        {
          id: 4,
          title: "Working from home",
          textColor: "text-white",
          bgColor: "bg-black",
          hoverTextColor: "",
          hoverBgColor: "",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>
`,
        },
      ],
    };
  },
};
</script>

<style></style>
