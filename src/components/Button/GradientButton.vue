<template>
  <div class="flex flex-wrap">
    <span v-for="(item, index) in itmes" :key="index">
      <div
        :class="
          `px-5 py-2 text-xs rounded-lg mr-2 mb-2 font-semibold ${item.css}  ${
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
          title: "Blue to sky",
css:"bg-gradient-to-r from-blue-500 to-sky-300 text-white",
        },
        {
          id: 2,
          title: "Pink to indigo",
css:"bg-gradient-to-br from-pink-600 via-purple-400 to-indigo-300 text-white",
        },
        {
          id: 3,
          title: "Emerald to teal",
css:"bg-gradient-to-r from-emerald-400 to-teal-400 text-white",


        },
        {
          id: 4,
          title: "Neutral & white",
css:"bg-gradient-to-r from-neutral-200 dark:from-neutral-50 dark:to-neutral-500 text-black",
        },
        {
          id: 5,
          title: "Red to rose",
css:"bg-gradient-to-r from-red-300 to-rose-500 text-white",
        },
      ],
    };
  },
};
</script>

<style></style>
