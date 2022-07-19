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
<div class="group flex w-96 flex-col rounded-2xl bg-white px-6 pt-8 pb-6 shadow-lg">
  <div class="flex space-x-4">
    <div class="h-16 w-16 overflow-hidden rounded-lg"><img src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="" class="h-full w-full rounded-lg object-cover group-hover:scale-110" /></div>
    <div class="flex flex-col">
      <div class="text-lg font-bold text-cyan-800">Geneva Soto</div>
      <div class="flex items-center space-x-1">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-cyan-800">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <div class="text-tiny text-cyan-800">Maharashtra,India</div>
      </div>
    </div>
  </div>
  <div class="mt-8 flex items-center justify-center space-x-1 rounded-lg bg-cyan-800 py-2 hover:bg-cyan-900">
    <div>
      <svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white">
        <path d="M17 10H20M23 10H20M20 10V7M20 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    <div class="text-tiny text-white">Add friend</div>
  </div>
  <div class="mt-2 flex items-center justify-center space-x-2 rounded-lg border border-cyan-800 py-2">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-5 w-5 text-cyan-800"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    </div>
    <div class="text-tiny text-cyan-800">Message</div>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
