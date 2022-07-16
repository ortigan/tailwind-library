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
       <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-700 border border-gray-700"> Badge </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-cyan-500 border border-cyan-500"> Primary </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 hover:text-gray-500 border border-gray-200"> Ghost </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-700 border border-gray-400"> Light </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-900 border border-gray-900"> Dark </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 border border-gray-300"> Disabled </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-sky-600 border border-sky-600"> Info </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-emerald-600 border border-emerald-600"> Success </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-amber-600 border border-amber-600"> Warning </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-600 border border-rose-600"> Error </span>        
    `,
    };
  },
};
</script>

<style></style>
