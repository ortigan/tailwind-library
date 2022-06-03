<template>
  <div
    class="w-full"
  >
  <!-- first type -->
   <div class="bg-white flex gap-3 px-4 py-3 rounded-lg text-gray-500 w-1/3 shadow-md">
     <div class="">
        <div class="p-1 bg-red-100 text-red-500 rounded-md">

     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
</svg>
        </div>
    </div>
    <div class="flex w-full flex-col">
        <div class="flex justify-between">

        <div class="text-gray-700 font-medium">Saving document</div>
        <div>
             <div class="flex cursor-pointer hover:bg-gray-200 rounded-lg p-1 text-gray-400 hover:text-gray-700 transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
   </div>
        </div>
        </div>
        <div class="text-gray-500 text-xs font-medium">Document couldn't be saved.</div>
        <div class="mt-2">
            <div class="text-sm px-3 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600 cursor-pointer text-center">View error</div>
        </div>
    </div>
   </div>
   <!-- second method -->
   <div class="bg-white flex gap-3 justify-between px-4 py-4 rounded-lg text-gray-500 w-1/3 shadow-md mt-4">
    <div class="">
        <div class="p-2 bg-blue-100 text-blue-500 rounded-md">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-1h-14" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
</svg>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="text-gray-700 font-medium">Click "Allow" to get notified</div>
        <div class="text-gray-500 text-xs font-medium">We will show you quick message like this when you're online and we have something great to share.</div>
        <div class="mt-2 flex gap-2">
            <div class="text-sm px-3 py-1 font-medium text-blue-500 bg-blue-50 rounded-md cursor-pointer">Don't Allow</div>
            <div class="text-sm px-3 py-1 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer">Allow</div>
        </div>
    </div>
   </div>
   <!-- third type -->
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{}],
    };
  },
};
</script>

<style scoped></style>
