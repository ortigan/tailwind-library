<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Footer
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
          <!-- Default Footer -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Footer</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultFooter />
            </template>
          </ComponentPad>
          <!-- end default Footer -->
          <!-- Footer with logo section -->
          <SubHeading>
            <template v-slot:subHeader
              >Footer</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <LogoSectionFooter />
            </template>
          </ComponentPad>
          <!-- end Footer with logo section -->


        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <FooterInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import FooterInfo from "../components/Footer/FooterInfo.vue";
import DefaultFooter from "../components/Footer/DefaultFooter.vue";
import LogoSectionFooter from "../components/Footer/LogoSectionFooter.vue";


export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    FooterInfo,
    DefaultFooter,
    LogoSectionFooter
   

  },
};
</script>

<style>

</style>
