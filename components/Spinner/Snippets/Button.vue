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
      code:` 
<div class="-my-3 flex w-full space-x-5">
  <button type="button" class="disabled inline items-center space-x-1 rounded bg-sky-500 px-3 py-1.5 focus:outline-none dark:bg-sky-500" disabled>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 animate-spin fill-white text-gray-300 dark:fill-gray-200 dark:text-sky-700"><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentFill" />
    </svg>
    <span class="text-sm font-medium dark:text-white">Loading...</span>
  </button>
  <!-- sync -->
  <button type="button" class="disabled inline-flex items-center space-x-1 rounded bg-emerald-500 px-3 py-1.5 focus:outline-none dark:bg-emerald-500" disabled>
    <svg class="h-3.5 w-3.5 animate-spin fill-white text-white" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g><path d="M96.1,103.6c-10.4,8.4-23.5,12.4-36.8,11.1c-10.5-1-20.3-5.1-28.2-11.8H44v-8H18v26h8v-11.9c9.1,7.7,20.4,12.5,32.6,13.6   c1.9,0.2,3.7,0.3,5.5,0.3c13.5,0,26.5-4.6,37-13.2c19.1-15.4,26.6-40.5,19.1-63.9l-7.6,2.4C119,68.6,112.6,90.3,96.1,103.6z" /><path d="M103,19.7c-21.2-18.7-53.5-20-76.1-1.6C7.9,33.5,0.4,58.4,7.7,81.7l7.6-2.4C9,59.2,15.5,37.6,31.9,24.4   C51.6,8.4,79.7,9.6,98,26H85v8h26V8h-8V19.7z" />
      </g>
    </svg>
    <span class="text-sm font-medium dark:text-white">Sync</span>
  </button>
  <!--  -->
  <!-- Submitting -->
  <button type="button" class="disabled inline-flex items-center space-x-1 rounded bg-indigo-500 px-3 py-1.5 focus:outline-none dark:bg-indigo-500" disabled>
    <svg class="h-5 w-5 animate-spin fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7zM7.67 14.5a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zM20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17zM7.67 9.5a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5z" />
    </svg>
    <span class="text-sm font-medium dark:text-white">Submitting</span>
  </button>
  <!--  -->
  <!-- Progress -->
  <button type="button" class="disabled inline-flex items-center space-x-1 rounded bg-amber-500 px-3 py-1.5 focus:outline-none dark:bg-amber-500" disabled>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="h-4 w-4 animate-spin fill-white text-white dark:fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor" /><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
    </svg>
    <span class="text-sm font-medium dark:text-white">Progress</span>
  </button>
  <!--  -->
</div>
      `
    }
  }
};
</script>

<style></style>
