<template>
  <div class="w-full">
    <!-- first type -->
    <div
      class="bg-white flex gap-3 px-4 py-3 rounded-lg text-gray-500 w-96 shadow-md"
    >
      <div class="">
        <div class="p-1 bg-red-100 text-red-500 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex w-full flex-col">
        <div class="flex justify-between">
          <div class="text-gray-700 font-semibold">Saving document</div>
          <div>
            <div
              class="flex cursor-pointer hover:bg-gray-200 rounded-lg p-1 text-gray-400 hover:text-gray-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="text-gray-500 text-xs font-">
          Document couldn't be saved.
        </div>
      
          <div
            class="mt-2 w-24 text-xs px-1.5 py-1.5 font-medium text-white bg-red-500 rounded-md hover:bg-red-600 cursor-pointer text-center"
          >
            View error
          </div>
   
      </div>
    </div>
    <!-- second type -->
    <div
      class="bg-white px-4 py-4 rounded-lg text-gray-500 w-96 shadow-md mt-6"
    >
      <div class="flex flex-col">
        <div class="flex items-center gap-1 justify-between">
          <div class="flex items-center gap-1">
            <div class="text-blue-500 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div class="text-gray-700 font-semibold">Update available</div>
          </div>
          <div
            class="flex cursor-pointer hover:bg-gray-200 rounded-lg p-1 text-gray-400 hover:text-gray-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div class="text-gray-500 text-xs font-medium">
          A new software version is available for download
        </div>
        <div class="mt-2 flex items-center gap-2">
          <div
            class="text-xs px-3 py-1 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Update
          </div>
          <div
            class="text-xs px-3 py-1 font-medium border text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            Not now
          </div>
        </div>
      </div>
    </div>
    <!-- third method -->
    <div
      class="bg-white flex gap-3 justify-between px-4 py-4 rounded-lg text-gray-500 w-96 shadow-md mt-6"
    >
      <div class="">
        <div class="p-2 bg-blue-100 text-blue-500 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-1h-14"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-gray-700 font-semibold">
          Click "Allow" to get notified
        </div>
        <div class="text-gray-500 text-xs font-medium">
          We will show you quick message like this when you're online and we
          have something great to share.
        </div>
        <div class="mt-2 flex items-center gap-2">
          <div
            class="text-xs px-3 py-1 font-medium text-gray-700 border hover:bg-gray-50 rounded-md cursor-pointer"
          >
            Don't Allow
          </div>
          <div
            class="text-xs px-3 py-1 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Allow
          </div>
        </div>
      </div>
    </div>
    <!-- Fourth method -->
    <div
      class="flex  gap-3 bg-white px-4 py-4 rounded-lg text-gray-500 w-96 shadow-md mt-6"
    >
   


         <div class="w-8 h-8 relative mt-2">
      <img
        class="w-full h-full object-cover rounded-full"
        src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg"
        alt=""
      />
              <div class="h-2.5 w-2.5 bg-green-400 absolute border-2 border-white -right-0 -bottom-0 rounded-full"></div>

        </div>
      
      <div class="flex w-full flex-col">
          <div class="flex justify-between">

        <div class="text-gray-700 font-semibold">
          Hanna ward
        </div>
         <div
            class="flex cursor-pointer hover:bg-gray-200 rounded-lg p-1 text-gray-400 hover:text-gray-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          </div> 
        <div class="text-gray-500 text-xs font-medium">
          Hi, When is the meeting scheduled?
        </div>
        <div class="flex gap-2 mt-2">

        <div class="text-xs text-blue-500 cursor-pointer">
            Reply
        </div>
        <div class="text-xs text-red-500 cursor-pointer">
            Ignore
        </div>
        </div>
        <div>

        </div>
    </div>
     

      </div>
    <!-- Fifth method (undo button) -->
    <div
      class="flex items-center gap-2 bg-white px-4 py-4 rounded-lg text-gray-500 w-96 shadow-md mt-6"
    >
    <div>
    <div class="p-1 text-blue-500 rounded-md">
          <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    </div>
      
      <div class="flex w-full flex-col">
          <div class="flex justify-between">

        <div class="text-gray-700 font-medium">
         Item added to cart
        </div>
       <div class="text-xs px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
           Undo
       </div>

          </div> 
        
      
        <div>

        </div>
    </div>
     

      </div>
   
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
