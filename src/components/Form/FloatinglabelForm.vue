<template>
  <div
    class="flex-row w-full  px-8 py-8 rounded-lg border text-gray-700 bg-white"
  >
    <div class="w-2/3 flex justify-center items-center ">
      <form action="" class="w-full">
        <div class=" ">
          <!-- User name -->
          <div class="w-full flex relative items-center justify-center">
           

            <input
              type="text" id="email"
              class="flex-1 border-0 border-b-2 border-b-gray-300 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="email" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >User Name
            </label>
              
          </div>
          <!-- password -->
             <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="password" id="password"
              class="flex-1 border-0 border-b-2 border-b-gray-300 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="password" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >Password
            </label>
              
          </div>
          <!-- Confirm password -->
             <div class="w-full flex relative items-center justify-center mt-6">
           

            <input
              type="password" id="cpassword"
              class="flex-1 border-0 border-b-2 border-b-gray-300 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
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
              class="flex-1 border-0 border-b-2 border-b-gray-300 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
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
              class="flex-1 border-0 border-b-2 border-b-gray-300 focus:border-b-sky-500 focus:ring-0 focus:outline-none transition-colors peer" 
            />
            <label for="state" class="cursor-text absolute left-0 text-base font-normal text-gray-500 peer-focus:text-xxs peer-focus:-top-2 transition-all peer-focus:text-sky-600 duration-300"
              >State
            </label>
              
          </div>
              </div>
          </div>
          <!-- remember me -->
          <div class="flex items-center gap-2 w-full mt-6">
            <input type="checkbox" name="" id="" class="rounded bg-gray-50 border text-sky-500 border-gray-300 focus:outline-none focus:ring-0"/>
            <label for="" class="block text-sm font-semibold"
              >Remember me
            </label>
          </div>
          <!-- Login button -->
          <div class="w-1/4 mt-6">
              <div class="bg-sky-500 hover:bg-sky-600 text-center rounded-lg py-2 px-5">
                  <button class="text-white font-semibold  ">Submit</button>
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
