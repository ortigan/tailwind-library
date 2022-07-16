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
        <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-sky-700 hover:text-sky-800 bg-sky-100 hover:bg-sky-200"> Info </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200"> Success </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-amber-700 hover:text-amber-800 bg-amber-100 hover:bg-yellow-200"> Warning </span>
        <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-rose-700 hover:text-rose-800 bg-rose-100 hover:bg-rose-200"> Error </span>
    `,
    };
  },
};
</script>

<style></style>
