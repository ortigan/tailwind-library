<template>
  <NuxtLayout :name="layout">
    <div class="flex relative">
      <!-- content -->
      <div class="flex-1 w-full flex justify-center items-center h-screen">
        <div class="font-medium text-7xl">
          <span class="font-light"> AIR </span> COMPONENTS
        </div>
      </div>
      <div class="absolute bottom-5 right-5">
        <nuxt-link to="/alerts"> Get started >>> </nuxt-link>
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
