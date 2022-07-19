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
          <!-- tighter -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-tighter font-medium">This is tracking</div></div>
        <!-- tight -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-tight font-medium">This is tracking</div></div>
        <!-- normal -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-normal font-medium">This is tracking</div></div>
        <!-- wide -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-wide font-medium">This is tracking</div></div>
        <!-- wider -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-wider font-medium">This is tracking</div></div>
        <!-- widest -->
        <div class=" justify-start text-gray-700 dark:text-gray-500 font"><div class="text-lg tracking-widest font-medium">This is tracking</div></div>
      `
    }
  }
};
</script>

<style></style>
