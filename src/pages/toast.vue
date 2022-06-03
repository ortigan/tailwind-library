<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Toast
            </template>
          </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Navbar -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Toast</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultToast />
            </template>
          </ComponentPad>
          <!-- end default navbar -->
 

        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <ToastInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ToastInfo from "../components/Toast/ToastInfo.vue";
import DefaultToast from "../components/Toast/DefaultToast.vue";


export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    ToastInfo,
    DefaultToast


  },
};
</script>

<style>

</style>
