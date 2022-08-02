<template>
  <div
    class="py-10 md:py-20 w-full"
  >
 <div class="w-full flex flex-col">
    <div class="text-lg md:text-2xl font-semibold">
        Foundation components and style
    </div>
    <div>
        Icons, styles, design annotations— everything you need to build the foundation of a great Figma design system.
    </div>
 </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <!-- <div class="w-full h-64 border border-zinc-600 rounded-lg">
            <div class="h-4/5">

            </div>
            <div class="h-1/5 w-full flex items-center dark:bg-[#374151] p-4">
                <div class="">Colors</div>
            </div>
        </div> -->
        <span v-for="(item, index) in items" :key="index">
        <HomePageComponentShowcaseCompShowcasePad >
          <template v-slot:image>{{item.image}}</template>
          <template v-slot:title>{{item.title}}</template>
        </HomePageComponentShowcaseCompShowcasePad>
          </span>
   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
        id: 1,
        imageurl: "",
        title:"Colors"
      },
        {
        id: 2,
        imageurl: "",
        title:"Typography"
      },
        {
        id: 3,
        imageurl: "",
        title:"Layout"
      },
        {
        id: 4,
        imageurl: "",
        title:"Shadows"
      },
        {
        id: 5,
        imageurl: "",
        title:"Image effects"
      },
        {
        id: 6,
        imageurl: "",
        title:"Grids and spacing"
      },
        {
        id: 7,
        imageurl: "",
        title:"Logos"
      },
      ],
    };
  },
};
</script>

<style scoped></style>
