<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="
          ` text-xs rounded-lg mr-2 mb-2 font-semibold ${item.css}  ${
            item.textColor
          } `
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
          title: "Sky",
css:"rounded-lg bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-5 py-1.5 text-xs font-medium text-white shadow-lg shadow-sky-500/50 hover:bg-gradient-to-r dark:shadow-lg dark:shadow-sky-800/80",
        },
        {
          id: 2,
          title: "Rose",
css:"rounded-lg bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 px-5 py-1.5 text-xs font-medium text-white shadow-lg shadow-rose-500/40 hover:bg-gradient-to-r dark:shadow-lg dark:shadow-rose-800/80",
        },
        {
          id: 3,
          title: "Emerald",
css:"rounded-lg bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 px-5 py-1.5 text-center text-xs font-medium text-white shadow-lg shadow-emerald-500/50 hover:bg-gradient-to-r dark:shadow-lg dark:shadow-emerald-800/80",


        },
        {
          id: 4,
          title: "Amber",
css:"rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 px-5 py-1.5 text-center text-xs font-medium text-white shadow-lg shadow-amber-500/50 hover:bg-gradient-to-r dark:shadow-lg dark:shadow-amber-800/80",
        },
        {
          id: 5,
          title: "Fuchsia",
css:"rounded-lg bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 px-5 py-1.5 text-center text-xs font-medium text-white shadow-lg shadow-fuchsia-500/50 hover:bg-gradient-to-r dark:shadow-lg dark:shadow-fuchsia-800/80",
        },
      ],
    };
  },
};
</script>

<style></style>
