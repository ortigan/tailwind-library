<template>
<pre><code class="language-markup"><script type="prism-html-markup">
    <div class="flex flex-wrap p-4 space-x-4">
    <!-- Default badge -->
    <div class="py-0.5 px-2 flex items-center justify-between text-sm rounded-md font-normal gap-2 text-white bg-gray-700">
    <div>Badge</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Primary badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-white bg-cyan-500">
    <div>Primary</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Light badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-400 bg-gray-100">
    <div>Light</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Dark badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-100 bg-gray-900">
    <div>Dark</div>
    <div class="pl-1" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </div>
    </div>
    <!-- Disabled badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-100 bg-gray-300">
    <div>Disabled</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Info badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-sky-700 bg-sky-100 hover:text-sky-800 hover:bg-sky-200">
    <div>Info</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Success badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-emerald-700 bg-emerald-100 hover:text-emerald-800 hover:bg-emerald-200">
    <div>Success</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Warning badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-amber-700 bg-yellow-100 hover:text-amber-800 hover:bg-yellow-200">
    <div>Warning</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    <!-- Error badge -->
    <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-rose-700 hover:text-rose-800 bg-red-100 hover:bg-red-200">
    <div>Error</div>
    <div type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
    </div>
    </div>
        </script></code></pre>
</template>

<script>
export default {

}
</script>

<style>

</style>