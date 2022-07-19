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
            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="currentColor" stroke-xmlns="http://www.w3.org/2000/svg"><path d="M21.0441 5.70436C21.4402 5.41246 22 5.69531 22 6.1874V17.8126C22 18.3047 21.4402 18.5875 21.0441 18.2956L13.1555 12.483C12.8301 12.2432 12.8301 11.7568 13.1555 11.517L21.0441 5.70436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.0441 5.70436C10.4402 5.41246 11 5.69531 11 6.1874V17.8126C11 18.3047 10.4402 18.5875 10.0441 18.2956L2.15555 12.483C1.8301 12.2432 1.8301 11.7568 2.15555 11.517L10.0441 5.70436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button class="inline-flex items-center gap-1 border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button class="inline-flex items-center gap-1 border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z" stroke="currentColor" stroke-width="1.5" /><path d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z" stroke="currentColor" stroke-width="1.5" /></svg>
        </button>
        <button class="inline-flex items-center gap-1 border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.95592 5.70436C2.55976 5.41246 2 5.69531 2 6.1874V17.8126C2 18.3047 2.55976 18.5875 2.95592 18.2956L10.8445 12.483C11.1699 12.2432 11.1699 11.7568 10.8445 11.517L2.95592 5.70436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.9559 5.70436C13.5598 5.41246 13 5.69531 13 6.1874V17.8126C13 18.3047 13.5598 18.5875 13.9559 18.2956L21.8445 12.483C22.1699 12.2432 22.1699 11.7568 21.8445 11.517L13.9559 5.70436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button class="inline-flex items-center gap-1 rounded-r-lg border border-gray-800 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:z-10 focus:bg-gray-900 focus:font-medium focus:text-gray-50 focus:ring-2 focus:ring-gray-500 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:focus:ring-gray-400">
            <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.99999C19 6.99999 13.5 6.99999 11.5 12.5C9.5 18 5 18 2 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M20 5C20 5 21.219 6.21895 22 7C21.219 7.78105 20 9 20 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M22 18C19 18 13.5 18 11.5 12.5C9.5 6.99999 5 7.00001 2 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M20 20C20 20 21.219 18.781 22 18C21.219 17.219 20 16 20 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        </div>
    </div>
`,
    };
  },
};
</script>

<style></style>
