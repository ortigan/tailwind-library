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
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-auto">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-auto</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-from-font">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-from-font</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-0">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-0</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-1">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-1</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-2">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-2</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-4">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-4</div>
        </div>
        <!--  -->
        <div class="font flex w-full items-center justify-start space-x-2 text-gray-700 dark:text-gray-500">
          <div class="text-lg font-medium underline decoration-8">Lets see what text decoration is!</div>
          <div class="text-xxs font-normal text-sky-400">decoration-8</div>
        </div>
      `
    }
  }
};
</script>

<style></style>
