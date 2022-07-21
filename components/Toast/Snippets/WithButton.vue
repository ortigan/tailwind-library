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
<div class="w-full">
  <!-- first type -->
  <div class="flex gap-3 rounded-lg bg-white px-4 py-3 text-gray-500 shadow-md dark:bg-zinc-800 dark:text-zinc-300 md:w-96">
    <div class="">
      <div class="rounded-md bg-red-100 p-1 text-red-500 dark:bg-red-700 dark:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="flex w-full flex-col">
      <div class="flex justify-between">
        <div class="font-semibold text-gray-700 dark:text-zinc-400">Saving document</div>
        <div>
          <div class="flex cursor-pointer rounded-lg p-1 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700 dark:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      <div class="font- text-xs text-gray-500 dark:text-zinc-500">Document couldn't be saved.</div>

      <div class="mt-2 w-24 cursor-pointer rounded-md bg-red-500 px-1.5 py-1.5 text-center text-xs font-medium text-white hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-500">View error</div>
    </div>
  </div>
  <!-- second type -->
  <div class="mt-6 rounded-lg bg-white px-4 py-4 text-gray-500 shadow-md dark:bg-zinc-800 dark:text-zinc-300 md:w-96">
    <div class="flex flex-col">
      <div class="flex items-center justify-between gap-1">
        <div class="flex items-center gap-1">
          <div class="rounded-md text-blue-500 dark:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div class="font-semibold text-gray-700 dark:text-zinc-400">Update available</div>
        </div>
        <div class="flex cursor-pointer rounded-lg p-1 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700 dark:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-zinc-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div class="text-xs font-medium text-gray-500 dark:text-zinc-500">A new software version is available for download</div>
      <div class="mt-2 flex items-center gap-2">
        <div class="cursor-pointer rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-500">Update</div>
        <div class="cursor-pointer rounded-md border dark:border-zinc-400 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:text-zinc-400 dark:hover:bg-zinc-100">Not now</div>
      </div>
    </div>
  </div>
  <!-- third method -->
  <div class="mt-6 flex justify-between gap-3 rounded-lg bg-white px-4 py-4 text-gray-500 shadow-md dark:bg-zinc-800 dark:text-zinc-300 md:w-96">
    <div class="">
      <div class="rounded-md bg-blue-100 p-2 text-blue-500 dark:bg-blue-700 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-14 md:w-14" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="font-semibold text-gray-700 dark:text-zinc-400">Click "Allow" to get notified</div>
      <div class="text-xs font-medium text-gray-500 dark:text-zinc-500">We will show you quick message like this when you're online and we have something great to share.</div>
      <div class="mt-2 flex items-center gap-2">
        <div class="cursor-pointer rounded-md border dark:border-zinc-400 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:text-zinc-400">Don't Allow</div>
        <div class="cursor-pointer rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-500">Allow</div>
      </div>
    </div>
  </div>
  <!-- Fourth method -->
  <div class="mt-6 flex gap-3 rounded-lg bg-white px-4 py-4 text-gray-500 shadow-md dark:bg-zinc-800 dark:text-zinc-300 md:w-96">
    <div class="relative mt-2 h-8 w-8">
      <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
      <div class="absolute -right-0 -bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400"></div>
    </div>

    <div class="flex w-full flex-col">
      <div class="flex justify-between">
        <div class="font-semibold text-gray-700 dark:text-zinc-400">Hanna ward</div>
        <div class="flex cursor-pointer rounded-lg p-1 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700 dark:text-zinc-500 dark:hover:bg-zinc-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div class="text-xs font-medium text-gray-500">Hi, When is the meeting scheduled?</div>
      <div class="mt-2 flex gap-2">
        <div class="cursor-pointer text-xs text-blue-500 dark:text-blue-700">Reply</div>
        <div class="cursor-pointer text-xs text-red-500 dark:text-red-700">Ignore</div>
      </div>
      <div></div>
    </div>
  </div>
  <!-- Fifth method (undo button) -->
  <div class="mt-6 flex items-center gap-2 rounded-lg bg-white px-4 py-4 text-gray-500 shadow-md dark:bg-zinc-800 md:w-96">
    <div>
      <div class="rounded-md p-1 text-blue-500 dark:text-blue-700">
        <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="flex w-full flex-col">
      <div class="flex justify-between">
        <div class="font-medium text-gray-500 dark:text-zinc-400">Item added to cart</div>
        <div class="flex items-center gap-1">
          <div class="cursor-pointer rounded-md px-2 py-1 text-sm font-medium text-blue-500 dark:text-blue-700">Undo</div>
          <div class="flex cursor-pointer rounded-lg p-1 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-700 dark:text-zinc-500 dark:hover:bg-zinc-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</div>
      `
    }
  }
};
</script>

<style></style>
