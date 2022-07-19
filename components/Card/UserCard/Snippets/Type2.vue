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
<div class="w-80 rounded-xl bg-white p-4 text-gray-700 shadow-lg hover:shadow-inner">
  <div class="flex w-full flex-row items-center justify-between">
    <div class="flex flex-row items-center justify-start space-x-2">
      <div class="flex h-20 w-20 justify-center overflow-hidden rounded-full text-2xl font-semibold"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg" alt="" class="h-full w-full rounded-full object-cover hover:scale-105" /></div>
      <div class="flex flex-col">
        <div class="flex justify-center pt-2 text-base font-semibold">Elvis ray</div>
        <div class="text-xxs flex justify-center font-semibold text-gray-500">UX designer</div>
      </div>
    </div>
    <div class="flex items-center hover:cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" class="h-6 w-6 text-gray-700"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
    </div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
