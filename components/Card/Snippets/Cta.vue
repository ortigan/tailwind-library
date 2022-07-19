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
<!-- Code for Type 1 card with CTA -->
<div class="w-64 rounded-lg bg-gray-100 p-6 text-gray-700 shadow-lg hover:shadow-none">
  <div class="flex w-full flex-col">
    <div class="text-2xl font-semibold">Default card title</div>
    <div class="py-4 text-sm font-semibold">Type 1</div>
    <div class="mt-2 text-sm"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.</p></div>
    <div><button class="mt-6 rounded-md bg-gray-700 px-5 py-2 text-sm font-medium text-gray-100">Button</button></div>
  </div>
</div>
<!-- Code for Type 2 card with CTA -->
<div class="w-64 rounded-lg border border-gray-700 dark:border-gray-500 p-6 text-gray-700 dark:text-gray-500 hover:shadow-none">
  <div class="flex w-full flex-col">
    <div class="text-2xl font-semibold">Default card title</div>
    <div class="py-4 text-sm font-semibold">Type 2</div>
    <div class="mt-2 text-sm"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.</p></div>
    <div><button class="mt-6 rounded-md border border-gray-700 dark:border-gray-500 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-500">Button</button></div>
  </div>
</div>
<!-- Code for Type 3 card with CTA -->
<div class="w-64 rounded-lg bg-gray-700 p-6 text-gray-100 shadow-lg hover:bg-gray-800 hover:text-gray-200 hover:shadow-none">
  <div class="flex w-full flex-col">
    <div class="text-2xl font-semibold">Default card title</div>
    <div class="py-4 text-sm font-semibold">Type 3</div>
    <div class="mt-2 text-sm"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores.</p></div>
    <div><button class="mt-6 rounded-md bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700">Button</button></div>
  </div>
</div>
    `,
    };
  },
};
</script>