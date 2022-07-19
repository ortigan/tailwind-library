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
<div class="w-full flex-row rounded-lg border bg-white px-8 py-8 text-gray-700 dark:bg-zinc-900 dark:text-zinc-500">
  <div class="flex w-2/3 items-center justify-center">
    <form action="" class="w-full">
      <div class=" ">
        <!-- User name -->
        <div class="relative flex w-full items-center justify-center">
          <input type="text" id="email" class="peer flex-1 border-0 border-b-2 border-b-gray-300 bg-white transition-colors focus:border-b-sky-500 focus:outline-none focus:ring-0 dark:border-b-zinc-500 dark:bg-zinc-900" />
          <label for="email" class="peer-focus:text-xxs absolute left-0 cursor-text text-base font-normal text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sky-600">User Name </label>
        </div>
        <!-- password -->
        <div class="relative mt-6 flex w-full items-center justify-center">
          <input type="password" id="password" class="peer flex-1 border-0 border-b-2 border-b-gray-300 bg-white transition-colors focus:border-b-sky-500 focus:outline-none focus:ring-0 dark:border-b-zinc-500 dark:bg-zinc-900" />
          <label for="password" class="peer-focus:text-xxs absolute left-0 cursor-text text-base font-normal text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sky-600">Password </label>
        </div>
        <!-- Confirm password -->
        <div class="relative mt-6 flex w-full items-center justify-center">
          <input type="password" id="cpassword" class="peer flex-1 border-0 border-b-2 border-b-gray-300 bg-white transition-colors focus:border-b-sky-500 focus:outline-none focus:ring-0 dark:border-b-zinc-500 dark:bg-zinc-900" />
          <label for="cpassword" class="peer-focus:text-xxs absolute left-0 cursor-text text-base font-normal text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sky-600">Confirm Password </label>
        </div>
        <!-- State and country -->
        <div class="mt-6 flex w-full gap-4">
          <div class="w-1/2">
            <div class="relative mt-6 flex w-full items-center justify-center">
              <input type="text" id="country" class="peer flex-1 border-0 border-b-2 border-b-gray-300 bg-white transition-colors focus:border-b-sky-500 focus:outline-none focus:ring-0 dark:border-b-zinc-500 dark:bg-zinc-900" />
              <label for="country" class="peer-focus:text-xxs absolute left-0 cursor-text text-base font-normal text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sky-600">Country </label>
            </div>
          </div>
          <div class="w-1/2">
            <div class="relative mt-6 flex w-full items-center justify-center">
              <input type="text" id="state" class="peer flex-1 border-0 border-b-2 border-b-gray-300 bg-white transition-colors focus:border-b-sky-500 focus:outline-none focus:ring-0 dark:border-b-zinc-500 dark:bg-zinc-900" />
              <label for="state" class="peer-focus:text-xxs absolute left-0 cursor-text text-base font-normal text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sky-600">State </label>
            </div>
          </div>
        </div>
        <!-- Login button -->
        <div class="mt-6 w-1/4">
          <div class="rounded-lg bg-sky-500 py-2 px-5 text-center text-white hover:bg-sky-600 hover:text-gray-50 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-500 dark:hover:text-gray-100">
            <button class="font-semibold">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
    `,
    };
  },
};
</script>

<style></style>
