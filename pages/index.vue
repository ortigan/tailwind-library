<template>
  <NuxtLayout :name="layout">
    <div class="flex relative">
      <!-- content -->
      <div class="flex-1 font-primary w-full flex justify-center -mt-20 items-center h-screen">
        <div class="font-medium flex flex-col w-full text-7xl ">
          <div class="flex">
            <div class="mr-4">Tailwind</div> 
            <div class="rotate-2 relative border border-white px-4"><span class="border border-white bg-[#0A0C25] h-5 w-5 absolute -left-2 -top-2"></span> <span class="border border-white bg-[#0A0C25] h-5 w-5 absolute -right-2 -top-2"></span><span class="border border-white bg-[#0A0C25] h-5 w-5 absolute -left-2 -bottom-2"></span><span class="border border-white bg-[#0A0C25] h-5 w-5 absolute -right-2 -bottom-2"></span> Components</div> 
          </div>
          <div>for your next project</div>
      <div class="w-fit text-base text-white bg-[#0A0C25]">
        <nuxt-link to="/alerts"> Get started </nuxt-link>
      </div>
        </div>
      </div>
      <!-- right sidebar -->
    </div>
  </NuxtLayout>
</template>

<script>
  import { useStore } from "~/store/index";
export default {
data() {
    return {
      theme: "",
      store: useStore(),
      layout: 'full'
    };
  },
}


</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
