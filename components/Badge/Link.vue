<template>
  <div class="flex flex-wrap gap-2 md:gap-4">
    <span v-for="(item, index) in itmes" :key="index">
        <div :class="`py-0.5 px-2.5 flex items-center justify-between text-xs rounded-md font-normal hover:cursor-pointer ${item.textColor} ${item.hoverTextColor} ${item.border} ${item.hoverlink} ${item.hoverBgColor}  ${item.bgColor}`">

      <a href="#"
        
      >
        {{ item.title }}
      </a>
      <div class="pl-1" type="button">
<!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg> --> <span v-html="item.icon"></span>
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
        {
          id: 7,
          title: "Info",
          textColor: "text-sky-700",
          bgColor: "bg-sky-100",
          hoverTextColor: "",
          hoverBgColor: "",
          hoverShadowColor: "",
          outlineColor: "",
          icon:`<svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
},
        {
          id: 8,
          title: "Success",
          textColor: "text-emerald-700",
          bgColor: "bg-emerald-100",
          hoverTextColor: "",
          hoverBgColor: "",
          icon:`<svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
        },
        {
          id: 9,
          title: "Warning",
          textColor: "text-amber-700",
          bgColor: "bg-yellow-100",
          hoverTextColor: "",
          hoverBgColor: "",
          icon: `<svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="currentColor" stroke-linecap="round"/>
<path d="M12 9V13" stroke="currentColor" stroke-linecap="round"/>
<path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

        },
        {
          id: 10,
          title: "Error",
          textColor: "text-rose-700",
          bgColor: "bg-red-100",
          hoverTextColor: "",
          hoverBgColor: "",
          icon: `<svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
        },
      ],
    };
  },
};
</script>

<style></style>
