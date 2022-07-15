<template>
<pre><code class="language-markup">
<component :is="script" type="prism-html-markup">
<!-- Info alert -->
<div class="w-full p-4 rounded-lg text-sm text-sky-700 bg-sky-100" role="alert">
  <span class="font-medium">Info alert!</span> A simple Info alert message
</div>
<!-- Success alert -->
<div class="w-full p-4 rounded-lg text-sm text-emerald-700 bg-emerald-100" role="alert">
  <span class="font-medium">Success alert!</span> A simple Success alert message
</div>
<!-- Warning alert -->
<div class="w-full p-4 rounded-lg text-sm text-amber-700 bg-amber-100" role="alert">
  <span class="font-medium">Warning alert!</span> A simple Warning alert message
</div>
<!-- Danger alert -->
<div class="w-full p-4 rounded-lg text-sm text-rose-700 bg-rose-100" role="alert">
  <span class="font-medium">Danger alert!</span> A simple Danger alert message
</div>
</component>
</code></pre>
</template>

<script>
export default {};
</script>

<style></style>
