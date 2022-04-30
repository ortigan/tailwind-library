<template>
  <Layout>
      <div class="">

    <div class="flex p-4">
      <!-- content -->
      <div class="flex-1 min-h-screen">
          <Heading/>
          <div>
              <p class="text-lg">Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows</p>
          </div>
          <!-- basic buttons -->
          <div class="py-12 font-bold text-xl">Basic</div>
          <BasicButtons />
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
      </div>
  </Layout>
</template>

<script>
import BasicButtons from '../components/Button/BasicButtons.vue';
import ButtonInfo from "../components/Button/ButtonInfo.vue";
import Heading from '../components/Headers/Heading.vue';
export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    ButtonInfo,
    Heading,
    BasicButtons,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
