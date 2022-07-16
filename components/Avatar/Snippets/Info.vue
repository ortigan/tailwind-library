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
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="text-xs font-semibold text-gray-500">View profile</div>
    </div>
    </div>
    <!-- 2 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
        <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
    </div>
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="text-xs font-semibold text-gray-500">View profile</div>
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
    </div>
    </div>
    <!-- 4 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
        <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
    </div>
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="text-xs font-semibold text-green-500">Online</div>
    </div>
    </div>
    <!-- 5 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
        <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-gray-400"></div>
    </div>
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="text-xs font-semibold text-gray-500">5 min ago</div>
    </div>
    </div>
    <!-- 6 -->
    <div class="flex w-1/3 items-center space-x-2">
    <div class="relative h-12 w-12">
        <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
    </div>
    <div class="flex flex-col">
        <div class="text-base font-bold text-gray-700">Evans Rose</div>
        <div class="w-full text-xs font-semibold text-gray-500">Working 🚀</div>
    </div>
    </div>`,
    };
  },
};
</script>

<style></style>
