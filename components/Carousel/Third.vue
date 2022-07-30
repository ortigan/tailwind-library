<template>
  <div class="relative flex sm:h-96 lg:h-96 lg:w-full flex-row items-end justify-end space-x-8 rounded-md bg-teal-800">
  <div class="absolute h-full w-full rounded-md bg-teal-500">
    <img src="https://res.cloudinary.com/ortigan/image/upload/v1658571502/Group_259_zb2zfh.png" alt="" class="h-full w-full rounded-md object-cover" />
  </div>
  <div class="relative flex h-full w-3/5 flex-col items-end justify-end overflow-hidden rounded-md py-5 px-6 lg:py-8 lg:px-12">
    <div class="absolute right-0 z-10 h-full w-3/5">
      <img src="https://res.cloudinary.com/ortigan/image/upload/v1658565228/Group_254_kajuve.png" alt="" class="h-full w-full object-cover" />
    </div>
    <div class="z-20 flex flex-col items-end">
      <div class="w-full">
        <p class="text-lg lg:text-3xl font-semibold text-teal-300 text-right">Why choose</p>
      </div>
      <div>
        <p class="text-lg lg:text-3xl font-semibold text-teal-300 text-right">Our Healthcare?</p>
      </div>
      <div class="lg:mt-4 flex flex-col items-start justify-start space-x-2 text-base lg:text-2xl font-semibold text-teal-300">
        <p>Heart?</p>
        <p class="text-xl"></p>
      </div>
      <div class="mt-3 mb-3 flex flex-row space-x-3">
        <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
        <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
        <p class="h-1 w-5 rounded-full bg-teal-300 p-1"></p>
        <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
        <p class="h-1 w-1 rounded-full bg-teal-500 p-1"></p>
      </div>
      <div class="w-full lg:w-3/5">
        <p class="text-right text-xxs lg:text-xs text-teal-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a...
          <span class="text-sm font-semibold">know more</span>
        </p>
      </div>
      <div class="mt-6 flex w-full lg:w-1/3 items-center justify-center rounded-md bg-teal-400 text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2 font-medium text-teal-800">
        <p>Know more</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style></style>
