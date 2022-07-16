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
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-white bg-gray-700">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Badge</div>
    </div>
    <!-- Primary badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-white bg-cyan-500">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Primary</div>
    </div>
    <!-- Ghost badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-500 bg-zinc-100">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Ghost</div>
    </div>
    <!-- Light badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-400 bg-gray-100">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Light</div>
    </div>
    <!-- Dark badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-100 bg-gray-900">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Dark</div>
    </div>
    <!-- Disabled badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-100 bg-gray-300">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Disabled</div>
    </div>
    <!-- Info badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-sky-700 bg-sky-100 hover:text-sky-800 hover:bg-sky-200">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Info</div>
    </div>
    <!-- Success badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-emerald-700 bg-emerald-100 hover:text-emerald-800 hover:bg-emerald-200">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Success</div>
    </div>
    <!-- Warning badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-amber-700 bg-yellow-100 hover:text-amber-800 hover:bg-yellow-200">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Warning</div>
    </div>
    <!-- Error badge -->
    <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-rose-700 hover:text-rose-800 bg-red-100 hover:bg-red-200">
    <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
    <div>Error</div>
    </div>
    </div>
    `,
    };
  },
};
</script>

<style></style>
