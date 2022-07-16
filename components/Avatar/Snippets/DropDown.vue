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
     <!-- 1 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
    </div>
    <a class="flex text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
    </a>
    </div>
    <!-- 2 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
        <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
    </div>
    <div class="flex space-x-2">
        <div class="text-base font-bold text-gray-700">Evans</div>
        <div class="text-xs font-semibold text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        </div>
    </div>
    </div>
    <!-- 3 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full border-2 border-white object-cover ring-2 ring-green-300" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
    </div>
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="text-xs font-semibold text-gray-500">View profile</div>
    </div>
    </div>`,
    };
  },
};
</script>

<style></style>
