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
<div class="sm:h-96 lg:h-96 lg:w-full flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-8">
    <div class="lg:h-full lg:w-2/3 sm:h-40 bg-teal-500 rounded-md"><img src="https://res.cloudinary.com/ortigan/image/upload/v1658564657/unsplash_brbF5FSnSgI_uleec5.png" alt="" class="h-full w-full object-cover rounded-md"></div>
    <div class="relative overflow-hidden sm:h-full sm:w-full lg:h-full lg:w-1/3 bg-teal-800 py-5 px-8 lg:py-8 lg:px-12 flex flex-col rounded-md justify-start">
    <div class="h-full absolute w-3/5 right-0">
      <img src="https://res.cloudinary.com/ortigan/image/upload/v1658565228/Group_254_kajuve.png" alt="" class="h-full w-full object-cover">      
    </div>
      <div><p class="text-lg lg:text-2xl font-semibold text-teal-300">Why choose</p></div>
      <div><p class="text-lg lg:text-2xl font-semibold text-teal-300"> Our Healthcare?</p></div>
      <div class="flex flex-col space-x-2 lg:mt-3 text-base lg:text-xl font-semibold text-teal-300 items-start justify-start"><p>Heart?</p><p class="text-xl"></p></div>
      <div class="flex flex-row space-x-3 mt-1 lg:mt-2 mb-3">
        <p class="h-1 w-1 bg-teal-500 rounded-full p-1"></p>
        <p class="h-1 w-1 bg-teal-500 rounded-full p-1"></p>
        <p class="h-1 w-5 bg-teal-300 rounded-full p-1"></p>
        <p class="h-1 w-1 bg-teal-500 rounded-full p-1"></p>
        <p class="h-1 w-1 bg-teal-500 rounded-full p-1"></p>
      </div>
      <div class="w-full lg:w-3/5"><p class="text-xxs lg:text-xs text-teal-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has... <span class="text-sm font-semibold">know more</span></p></div>
      <div class="w-1/2 lg:w-3/4 bg-teal-400 mt-2 lg:mt-6 rounded-md text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2 text-teal-800 font-medium flex justify-center items-center"><p>Know more</p></div>
    </div>
  </div>
    `,
    };
  },
};
</script>

<style></style>
