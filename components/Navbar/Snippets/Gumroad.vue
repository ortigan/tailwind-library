<template>
  <pre>
<code class="language-markup">
  {{code}}
</code>
</pre>
</template>

<script>
export default {
  data() {
    return {
      code: `
<div class="flex w-full flex-col justify-between border-2 border-gray-900 bg-white text-black lg:flex-row lg:items-center">
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
    <div class="border-l-2 border-gray-900 py-4 px-6 hover:bg-[#FF90E8]">Login</div>
    <div class="border-l-2 border-gray-900 bg-gray-900 py-4 px-6 text-white hover:bg-[#FF90E8] hover:text-black">Start selling</div>
  </div>
 </div>

    `,
    };
  },
};
</script>

<style></style>
