<template>
  <div
    class="py-10 md:py-20 w-full"
  >
 <div class="w-full flex flex-col">
    <div class="text-lg md:text-2xl font-semibold">
        Figma components
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
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
        <HomePageComponentShowcaseCompShowcasePad />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{}],
    };
  },
};
</script>

<style scoped></style>
