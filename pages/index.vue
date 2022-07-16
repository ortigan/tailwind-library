<template>
  <NuxtLayout :name="layout">
    <div class="flex relative">
      <!-- content -->
      <div class="flex-1 w-full flex justify-center items-center h-screen">
        <div class="font-medium flex flex-col w-full text-7xl">
          <div>Tailwind</div>
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

<script setup>
const layout = "full"
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
