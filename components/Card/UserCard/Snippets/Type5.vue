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
<div class="hover:shadow-3xl undefined undefined undefined group group flex h-full w-72 flex-col overflow-hidden rounded-3xl bg-white text-gray-700 shadow-lg">
  <div class="h-1/3 w-full bg-indigo-400 py-4">
    <div class="flex justify-between p-4">
      <div class="font-medium text-white">Profile</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6 cursor-pointer text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
      </div>
    </div>
  </div>
  <div class="flex h-full justify-center rounded-3xl bg-white">
    <div class="h-24 w-24 -translate-y-12 overflow-hidden rounded-full bg-indigo-200 p-0.5"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1652250432/Tailwind-Component-library/Human%20avatar/IMG_6355_xcaeag.png" alt="" class="h-full w-full object-cover group-hover:scale-110" /></div>
  </div>
  <div class="-mb-16 flex -translate-y-20 justify-between rounded-3xl px-4">
    <div class="flex flex-col items-center">
      <div class="text-xs font-semibold text-gray-500">Posts</div>
      <div class="font-bold">41</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-xs font-semibold text-gray-500">Followers</div>
      <div class="font-bold">289</div>
    </div>
  </div>
  <div class="flex w-full -translate-y-5 flex-col justify-between overflow-hidden rounded-xl">
    <div class="flex w-full flex-col items-center justify-between rounded-xl px-4">
      <div class="text-2xl font-semibold tracking-tighter text-gray-700">Charles Green</div>
      <div class="text-xxs font-normal text-gray-700">Product photographer</div>
    </div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
