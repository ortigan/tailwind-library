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
    <div class="flex flex-wrap p-4 space-x-4">
    <!-- Default badge -->
    <div class="flex items-center gap-2 rounded-md py-0.5 px-2.5 text-xs font-normal text-white bg-gray-700">
    <a href="#">Badge</a>
    </div>
    <!-- Primary badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-white bg-cyan-500">
    <a href="#">Primary</a>
    </div>
    <!-- Ghost badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-500 bg-zinc-100">
    <a href="#">Ghost</a>
    </div>
    <!-- Light badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-400 bg-gray-100">
    <a href="#">Light</a>
    </div>
    <!-- Dark badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-100 bg-gray-900">
    <a href="#">Dark</a>
    <div class="pl-1" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Disabled badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-100 bg-gray-300">
    <a href="#">Disabled</a>
    </div>
    <!-- Info badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-sky-700 bg-sky-100">
    <a href="#">Info</a>
    <div type="button">
        <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>  
    </div>
    </div>
    <!-- Success badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-emerald-700 bg-emerald-100">
    <a href="#">Success</a>
    <div type="button">
        <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>    
    </div>
    </div>
    <!-- Warning badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-amber-700 bg-yellow-100">
    <a href="#">Warning</a>
    <div type="button">
        <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="currentColor" stroke-linecap="round"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round"/><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    </div>
    <!-- Error badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-rose-700 bg-red-100">
    <a href="#">Error</a>
    <div type="button">
        <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    </div>
    </div>
    `,
    };
  },
};
</script>

<style></style>
