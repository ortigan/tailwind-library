<template>
  <div
    class="flex-row w-full  px-8 py-5 rounded-lg border text-gray-700 bg-white"
  >
    <div class="w-2/3 flex justify-center items-center ">
      <form action="" class="w-full">
        <div class=" ">
          <!-- Email -->
          <div class="w-full">
            <label for="" class="block text-sm font-semibold mb-2"
              >Email<sup class="text-sky-500">*</sup>
            </label>
            <input
              type="email"
              class="w-full rounded-lg bg-gray-50 border-gray-300 focus:border-sky-500"
            />
          </div>
          <!-- password -->
          <div class="w-full mt-6">
            <label for="" class="block text-sm font-semibold mb-2"
              >Password<sup class="text-sky-500">*</sup>
            </label>
            <input
              type="password"
              class="w-full rounded-lg bg-gray-50 border-gray-300 focus:border-sky-500"
            />
          </div>
          <!-- company size -->
          <div class="w-full mt-6">
            <label for="company-size" class="block text-sm font-semibold mb-2"
              >Company size</label
            >
            <div class="mt-1 ">
              <select
                name="company-size"
                id="company-size"
                class="w-full rounded-lg border border-gray-300 bg-gray-50 focus:border-sky-500"
              >
                <option value="" class="text-sm">Select company size</option>
                <option value="" class="">1 to 50 employees</option>
                <option value="" class="">51 to 100 employees</option>
                <option value="" class="">100+ employees</option>
              </select>
            </div>
          </div>
          <!-- remember me -->
          <div class="flex items-center gap-2 w-full mt-6">
            <input type="checkbox" name="" id="" class="rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0"/>
            <label for="" class="block text-sm font-semibold"
              >Remember me
            </label>
          </div>
          <!-- Login button -->
          <div class="w-1/4 mt-6">
              <div class="bg-sky-500 hover:bg-sky-600 text-center rounded-lg py-2 px-5">
                  <button class="text-white font-semibold  ">Login</button>
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
