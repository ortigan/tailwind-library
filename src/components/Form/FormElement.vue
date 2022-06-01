<template>
  <div
    class="flex-row w-full  px-8 py-5 rounded-lg border text-gray-700 bg-white"
  >
    <div class="w-2/3 flex justify-center items-center ">
      <form action="" class="w-full">
        <div class=" ">
          <!-- small input -->
          <div class="w-full">
            <label for="" class="block text-sm font-semibold mb-2"
              >Small input
            </label>
            <input
              type="text"
              class="w-full rounded-lg bg-gray-50 border-gray-300 focus:border-sky-500 py-1"
            />
          </div>
          <!-- Large input -->
          <div class="w-full mt-6">
            <label for="" class="block text-sm font-semibold mb-2"
              >Base input
            </label>
            <input
              type="text"
              class="w-full rounded-lg bg-gray-50 border-gray-300 focus:border-sky-500"
            />
          </div>
          <!-- Large input -->
          <div class="w-full mt-6">
            <label for="" class="block text-sm font-semibold mb-2"
              >Large input
            </label>
            <input
              type="text"
              class="w-full rounded-lg bg-gray-50 border-gray-300 focus:border-sky-500 py-4"
            />
          </div>

          <!-- checkbox -->
          <div class="flex items-center gap-2 w-full mt-6">
            <input type="checkbox" name="" id="" class="rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0"/>
            <label for="" class="block text-sm font-semibold"
              >Checkbox
            </label>
          </div>
          <!-- Radio -->
          <div class="flex items-center gap-2 w-full mt-6">
            <input type="radio" name="" id="" class="bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0"/>
            <label for="" class="block text-sm font-semibold"
              >Radio 
            </label>
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
