<template>
  <div
    class="flex-row w-full  px-8 py-8 rounded-lg border text-gray-700 dark:text-gray-500 bg-white dark:bg-gray-900"
  >
    <div class="w-2/3 flex justify-center items-center ">
      <form action="" class="w-full">
        <div class=" ">
          <!-- User name -->
          <div class="w-full flex relative items-center justify-center">
           

            <input
              type="text" id="email"
              class="flex-1 border-0 border-b-2 bg-white dark:bg-gray-900 border-b-gray-300 dark:border-b-gray-500 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="email" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >User Name
            </label>
              
          </div>
          <!-- password -->
             <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="password" id="password"
              class="flex-1 border-0 border-b-2 bg-white dark:bg-gray-900 border-b-gray-300 dark:border-b-gray-500 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="password" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >Password
            </label>
              
          </div>
          <!-- Confirm password -->
             <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="password" id="cpassword"
              class="flex-1 border-0 border-b-2 bg-white dark:bg-gray-900 border-b-gray-300 dark:border-b-gray-500 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="cpassword" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >Confirm Password
            </label>
              
          </div>
          <!-- State and country -->
          <div class="w-full flex gap-4 mt-6">
              <div class="w-1/2">
   <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="text" id="country"
              class="flex-1 border-0 border-b-2 bg-white dark:bg-gray-900 border-b-gray-300 dark:border-b-gray-500 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="country" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >Country
            </label>
              
          </div>
              </div>
              <div class="w-1/2">
   <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="text" id="state"
              class="flex-1 border-0 border-b-2 bg-white dark:bg-gray-900 border-b-gray-300 dark:border-b-gray-500 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="state" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >State
            </label>
              
          </div>
              </div>
          </div>
          
          <!-- Login button -->
          <div class="w-1/4 mt-6">
              <div class="bg-sky-500 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-500 text-white dark:text-gray-300 hover:text-gray-50 dark:hover:text-gray-100 text-center rounded-lg py-2 px-5">
                  <button class="font-semibold">Submit</button>
              </div>
          </div>
        </div>
      </form>
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
