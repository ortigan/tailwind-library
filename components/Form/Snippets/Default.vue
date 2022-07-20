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
<div class="w-full flex-row rounded-lg border bg-white px-8 py-5 text-gray-700 dark:bg-zinc-900 dark:text-zinc-500">
  <div class="flex w-2/3 items-center justify-center">
    <form action="" class="w-full">
      <div class=" ">
        <!-- Email -->
        <div class="w-full">
          <label for="" class="mb-2 block text-sm font-semibold">Email<sup class="text-sky-500">*</sup> </label>
          <input type="email" class="w-full rounded-lg border-gray-300 bg-gray-50 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800" />
        </div>
        <!-- password -->
        <div class="mt-6 w-full">
          <label for="" class="mb-2 block text-sm font-semibold">Password<sup class="text-sky-500">*</sup> </label>
          <input type="password" class="w-full rounded-lg border-gray-300 bg-gray-50 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800" />
        </div>
        <!-- company size -->
        <div class="mt-6 w-full">
          <label for="company-size" class="mb-2 block text-sm font-semibold">Company size</label>
          <div class="mt-1">
            <select name="company-size" id="company-size" class="w-full rounded-lg border border-gray-300 bg-gray-50 focus:border-sky-500 dark:border-zinc-500 dark:bg-zinc-800">
              <option value="" class="text-sm">Select company size</option>
              <option value="" class="">1 to 50 employees</option>
              <option value="" class="">51 to 100 employees</option>
              <option value="" class="">100+ employees</option>
            </select>
          </div>
        </div>
        <!-- remember me -->
        <div class="mt-6 flex w-full items-center gap-2">
          <input type="checkbox" name="" id="" class="rounded border border-gray-300 bg-gray-50 text-sky-500 focus:outline-none focus:ring-0 dark:border-zinc-500 dark:bg-zinc-800" />
          <label for="" class="block text-sm font-semibold">Remember me </label>
        </div>
        <!-- Login button -->
        <div class="mt-6 w-1/4">
          <div class="rounded-lg bg-sky-500 py-2 px-5 text-center text-white hover:bg-sky-600 hover:text-gray-50 dark:bg-sky-600 dark:text-zinc-300 dark:hover:bg-sky-500 dark:hover:text-zinc-100">
            <button class="font-semibold">Login</button>
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
