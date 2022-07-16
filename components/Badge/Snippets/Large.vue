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
        <span class="mr-4 rounded-md bg-gray-700 py-0.5 px-2 text-sm font-normal text-white"> Badge </span>
        <span class="mr-4 rounded-md bg-cyan-500 py-0.5 px-2 text-sm font-normal text-white"> Primary </span>
        <span class="mr-4 rounded-md bg-zinc-100 py-0.5 px-2 text-sm font-normal text-gray-500"> Ghost </span>
        <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-sm font-normal text-gray-400"> Light </span>
        <span class="mr-4 rounded-md bg-gray-900 py-0.5 px-2 text-sm font-normal text-white"> Dark </span>
        <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-sm font-normal text-gray-300"> Disabled </span>
    `,
    };
  },
};
</script>

<style></style>
