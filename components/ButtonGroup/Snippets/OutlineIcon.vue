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
    <div class="p-4">
      <div class="inline-flex -space-x-px font-medium">
        <button class="inline-flex items-center gap-1 rounded-l-lg border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Home
        </button>
        <button class="inline-flex items-center gap-1 border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Contact
        </button>
        <button class="inline-flex items-center gap-1 border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Profile
        </button>
        <button class="inline-flex items-center gap-1 rounded-r-lg border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
          <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Settings
        </button>
      </div>
    </div>
`,
    };
  },
};
</script>

<style></style>
