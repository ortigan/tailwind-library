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
  <button class="text-xs mr-2 rounded-lg bg-gray-400 px-5 py-2 font-semibold text-white cursor-pointer">Gray</button>
  <button class="text-xs mr-2 rounded-lg bg-red-400 px-5 py-2 font-semibold text-white cursor-pointer">Red</button>
  <button class="text-xs mr-2 rounded-lg bg-orange-400 px-5 py-2 font-semibold text-white cursor-pointer">Orange</button>
  <button class="text-xs mr-2 rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-white cursor-pointer">Yellow</button>
  <button class="text-xs mr-2 rounded-lg bg-green-400 px-5 py-2 font-semibold text-white cursor-pointer">Green</button>
  <button class="text-xs mr-2 rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-white cursor-pointer">Cyan</button>
  <button class="text-xs mr-2 rounded-lg bg-violet-400 px-5 py-2 font-semibold text-white cursor-pointer">Violet</button>
  <button class="text-xs mr-2 rounded-lg bg-pink-400 px-5 py-2 font-semibold text-white cursor-pointer">Pink</button>
    `,
    };
  },
};
</script>

<style></style>
