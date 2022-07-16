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
      code: `<!-- Default alert -->
<div class="w-full p-4 rounded-lg text-sm text-gray-800 bg-gray-100" role="alert">
    <span class="font-medium">Default alert!</span> A simple Default alert message
</div>
<!-- Dark alert -->
<div class="w-full p-4 rounded-lg text-sm text-gray-100 bg-gray-700" role="alert">
    <span class="font-medium">Default alert!</span> A simple Default alert message
</div>
<!-- Light alert -->
<div class="w-full p-4 rounded-lg text-sm text-zinc-400 bg-zinc-100" role="alert">
  <span class="font-medium">Default alert!</span> A simple Default alert message
</div>`,
    };
  },
};
</script>

<style></style>
