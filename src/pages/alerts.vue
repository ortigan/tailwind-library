<template>
  <Layout>
    <div class="flex">
      <!-- content -->
      <div class="flex-1 bg-green-100 h-screen">
          
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <ButtonInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ButtonInfo from "../components/Button/ButtonInfo.vue";
export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    ButtonInfo,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
