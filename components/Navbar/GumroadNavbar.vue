<template>
  <div
    class="flex flex-col lg:flex-row w-full justify-between lg:items-center text-black border-2 border-gray-900 bg-white"
  >
  <!-- first half -->
    <div class="flex gap-4 py-4 px-6 text-base">
        <div class="hover:underline"><a href="#">Features</a></div>
        <div class="hover:underline"><a href="#">Pricing</a></div>
        <div class="hover:underline"><a href="#">University</a></div>
        <div class="hover:underline"><a href="#">Blog</a></div>
        <div class="hover:underline"><a href="#">Discover</a></div>
    </div>
    <!-- 2nd half -->
    <div class="flex">
        <div class="border-l-2 border-gray-900 py-4 px-6 hover:bg-[#FF90E8] ">Login</div>
        <div class="border-l-2 border-gray-900 py-4 px-6 bg-gray-900 text-white hover:bg-[#FF90E8] hover:text-black">Start selling</div>
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
