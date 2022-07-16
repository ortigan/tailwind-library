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
   <!-- Letter -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
    <div class="text-base font-medium text-gray-100">S</div>
    <div class="text-xxs absolute -right-2 -top-2 rounded-full border-2 border-white bg-cyan-600 px-1">3</div>
    </div>
    <!-- text -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
    <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821816/Tailwind-Component-library/Human%20avatar/pexels-andrea-piacquadio-3767410_kur6zy.jpg" alt="" />
    <div class="text-xxs absolute -right-2 -bottom-2 rounded-full border border-white bg-violet-500 px-0.5 font-medium">+99</div>
    </div>
    <!-- Icon -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200">
    <svg class="text-blue-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
    <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
    </div>
    </div>
    <!-- Avatar -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-pink-300">
    <img class="h-9 w-9 rounded-full object-cover pt-1 hover:h-10 hover:w-10" src="https://avatars.dicebear.com/api/avataaars/aoiprapre2.svg" alt="" />
    <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-rose-500 p-0.5">
        <svg class="text-white" width="12" height="12" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.27049 6.5C6.09277 7.10971 6 7.74975 6 8.4C6 15.8667 3 18 3 18H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.75732 3.87452C8.88254 2.67428 10.4087 2 12 2C13.5913 2 15.1174 2.67428 16.2426 3.87452C17.3678 5.07475 18 6.70261 18 8.4C18 15.8667 21 18 21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </div>
    </div>
    <!-- image -->
    <div class="relative h-10 w-10">
    <img class="h-full w-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651744687/Tailwind-Component-library/matheus-ferrero-W7b3eDUb_2I-unsplash_hu3utv.jpg" alt="" />
    <div class="text-xxs absolute -right-3 -top-2 rounded-full border border-white bg-gray-500 px-1 font-medium">Off</div>
    </div>
    <!-- text -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
    <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651818407/Tailwind-Component-library/Human%20avatar/pexels-italo-melo-2379004_nibpi3.jpg" alt="" />
    <div class="absolute -right-3 -top-2 text-xxs rounded-lg border border-white bg-green-500 px-0.5 font-medium tracking-tight">New</div>
    </div>
    <!-- Pen -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
    <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651818134/Tailwind-Component-library/Human%20avatar/pexels-rachel-claire-5490276_ahveoz.jpg" alt="" />
    <div class="text-xxs absolute -right-1 -bottom-1 rounded-full border border-white bg-cyan-500 p-0.5 font-medium tracking-tight">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
    </div>
    </div>
    <!-- text -->
    <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
    <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
    <div class="text-xxs absolute -right-2 -bottom-2 rounded-lg border-2 border-white bg-yellow-500 px-1 font-medium">16</div>
    </div>`,
    };
  },
};
</script>

<style></style>
