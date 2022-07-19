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
<!-- Code for 1st Card -->
<div class="w-72 rounded-xl bg-white p-4 text-gray-700 shadow-lg hover:shadow-inner">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-20 w-20 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center pt-2 text-base font-semibold">Elvis ray</div>
    <div class="text-xxs flex justify-center font-semibold text-gray-700">Ux designer</div>
    <div class="flex items-center space-x-1 pt-4">
      <div class="rounded-lg bg-gray-800 px-5 py-2 text-xs font-semibold text-gray-100 hover:bg-gray-900">View profile</div>
      <div class="rounded-lg border border-gray-800 px-5 py-2 text-xs font-semibold hover:bg-gray-50">Message</div>
    </div>
  </div>
</div>
<!-- Code for 2nd Card -->
<div class="w-72 rounded-xl border border-gray-800 bg-white p-4 text-gray-700">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-20 w-20 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center pt-2 text-base font-semibold">Elvis ray</div>
    <div class="text-xxs flex justify-center font-semibold text-gray-700">HR</div>
    <div class="flex items-center space-x-1 pt-4">
      <div class="rounded-lg bg-gray-800 px-5 py-2 text-xs font-semibold text-gray-100 hover:bg-gray-900">View profile</div>
      <div class="rounded-lg border border-gray-800 px-5 py-2 text-xs font-semibold hover:bg-gray-50">Message</div>
    </div>
  </div>
</div>
<!-- Code for 3rd Card -->
<div class="undefined undefined w-full rounded-xl bg-gray-700 p-4 font-normal text-gray-100 shadow-lg hover:bg-gray-800 hover:shadow-inner">
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex h-20 w-20 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652163780/Tailwind-Component-library/Human%20avatar/pexels-mart-production-9558758_d7nfoq.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
    <div class="flex justify-center pt-2 text-base font-semibold">John smith</div>
    <div class="text-xxs flex justify-center font-normal text-gray-100">Development lead</div>
    <div class="flex items-center space-x-1 pt-4">
      <div class="rounded-lg bg-gray-100 px-5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200">View profile</div>
      <div class="rounded-lg border border-gray-100 px-5 py-2 text-xs font-semibold hover:bg-gray-800">Message</div>
    </div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
