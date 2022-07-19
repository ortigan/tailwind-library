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
<!-- Code for 1st card -->
<div class="w-64 rounded-xl bg-white p-4 text-gray-700 shadow-lg hover:shadow-inner">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-16 w-16 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center text-base font-semibold">Elvis ray</div>
    <div class="text-xxs flex justify-center font-semibold text-gray-700">Software developer</div>
  </div>
</div>
<!-- Code for 2nd card -->
<div class="w-64 rounded-xl border border-gray-700 bg-white p-4 text-gray-700 hover:shadow-inner">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-16 w-16 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center text-base font-semibold">Elvis ray</div>
    <div class="text-xxs flex justify-center font-semibold text-gray-700">Product manager</div>
  </div>
</div>
<!-- Code for 3rd Card -->
<div class="w-64 rounded-xl bg-gray-700 p-4 font-normal text-gray-100 shadow-lg hover:bg-gray-800 hover:shadow-inner">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-16 w-16 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center text-base font-semibold">John smith</div>
    <div class="text-xxs flex justify-center font-normal text-gray-100">Backend developer</div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
