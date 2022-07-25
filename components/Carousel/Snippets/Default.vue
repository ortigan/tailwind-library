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
<div class="flex flex-col space-y-2 sm:h-96 lg:h-96 lg:w-full lg:flex-row lg:space-y-0 lg:space-x-8">
  <div class="rounded-md bg-teal-500 sm:h-40 lg:h-full lg:w-1/4"><img src="https://res.cloudinary.com/ortigan/image/upload/v1658494606/unsplash_UIp163xCV6w_ibh2bi.png" alt="" class="h-full w-full rounded-md object-cover" /></div>
  <div class="relative flex flex-col justify-start overflow-hidden rounded-md bg-teal-800 py-3 px-8 sm:h-full sm:w-full lg:h-full lg:w-3/4 lg:py-6 lg:px-12">
    <div class="absolute right-0 top-0 h-full w-3/5">
      <img src="https://res.cloudinary.com/ortigan/image/upload/v1658492241/cross_nxxcsp.svg" alt="" class="h-full w-full object-cover" />
    </div>
    <div><p class="text-lg font-semibold text-teal-300 lg:text-3xl">Why choose</p></div>
    <div><p class="text-lg font-semibold text-teal-300 lg:text-3xl">Our Healthcare?</p></div>
    <div class="flex flex-row items-center space-x-2 text-base font-semibold text-teal-300 lg:mt-2 lg:text-2xl">
      <p>Heart?</p>
      <p class="text-xl"></p>
    </div>
    <div class="mt-1 mb-3 flex flex-row space-x-3 lg:mt-2">
      <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
      <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
      <p class="h-1 w-5 rounded-full bg-teal-300 p-1"></p>
      <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
      <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
    </div>
    <div class="w:4/5 lg:w-3/5">
      <p class="text-xxs text-teal-300 lg:text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever... <span class="text-sm font-semibold">know more</span></p>
    </div>
    <div class="mt-2 flex w-1/2 items-center justify-center rounded-md bg-teal-400 px-2 py-1 text-xs font-medium text-teal-800 lg:mt-6 lg:w-1/4 lg:px-4 lg:py-2 lg:text-sm"><p>Know more</p></div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
