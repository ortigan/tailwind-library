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
<button class="rounded bg-[#ff6d2d] px-8 py-3.5 font-bold hover:border-2 hover:border-[#ff6d2d] hover:bg-[#FAF5ED] hover:text-[#ff6d2d]">Try cloud</button>
    `,
    };
  },
};
</script>

<style></style>
