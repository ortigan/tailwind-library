<template>
<pre><code class="language-markup"><script type="prism-html-markup">
<!--Green Toast  -->
<div class="mb-2 flex w-1/3 items-center justify-between rounded-lg border-2 border-green-200 bg-white px-4 py-3 text-gray-500">
  <div class="flex items-center space-x-2">
    <div class="rounded-lg bg-green-100 p-1.5 text-green-500">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </p>
    </div>
    <div>A successful toast</div>
  </div>
  <div class="cursor-pointer rounded-lg p-1 text-green-500 transition-all hover:bg-green-100 hover:text-green-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</div>
<!-- Blue Toast -->
<div class="mb-2 flex w-1/3 items-center justify-between rounded-lg border-2 border-sky-200 bg-white px-4 py-3 text-gray-500">
  <div class="flex items-center space-x-2">
    <div class="rounded-lg bg-sky-100 p-1.5 text-sky-500">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </p>
    </div>
    <div>An info toast</div>
  </div>
  <div class="cursor-pointer rounded-lg p-1 text-sky-500 transition-all hover:bg-sky-100 hover:text-sky-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</div>
<!-- Yellow Warning Toast -->
<div class="mb-2 flex w-1/3 items-center justify-between rounded-lg border-2 border-yellow-200 bg-white px-4 py-3 text-gray-500">
  <div class="flex items-center space-x-2">
    <div class="rounded-lg bg-yellow-100 p-1.5 text-yellow-500">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
      </p>
    </div>
    <div>A warning toast</div>
  </div>
  <div class="cursor-pointer rounded-lg p-1 text-yellow-500 transition-all hover:bg-yellow-100 hover:text-yellow-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</div>
<!-- Red destructive Toast -->
<div class="mb-2 flex w-1/3 items-center justify-between rounded-lg border-2 border-red-200 bg-white px-4 py-3 text-gray-500">
  <div class="flex items-center space-x-2">
    <div class="rounded-lg bg-red-100 p-1.5 text-red-500">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
      </p>
    </div>
    <div>A destructive toast</div>
  </div>
  <div class="cursor-pointer rounded-lg p-1 text-red-500 transition-all hover:bg-red-100 hover:text-red-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</div>
</script></code></pre>
</template>

<script>
export default {};
</script>

<style></style>
