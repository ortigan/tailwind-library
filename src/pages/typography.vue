<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Typography
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
          <!-- Font size -->
          <SubHeading>
            <template v-slot:subHeader
              >Font size</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <FontsizeTypo />
            </template>
          </ComponentPad>
          <!-- end font size -->
          <!-- Font weight -->
          <SubHeading>
            <template v-slot:subHeader
              >Font weight</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <FontWeightTypo />
            </template>
          </ComponentPad>
          <!-- end font weight -->
          <!-- Tracking -->
          <SubHeading>
            <template v-slot:subHeader
              >Tracking</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <TrackingTypography />
            </template>
          </ComponentPad>
          <!-- end Tracking -->
          <!-- Text Decoration  -->
          <SubHeading>
            <template v-slot:subHeader
              >Text Decoration </template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecoration />
            </template>
          </ComponentPad>
          <!-- end Text Decoration  -->
          <!-- Text Decoration thickness -->
          <SubHeading>
            <template v-slot:subHeader
              >Text Decoration thickness</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecorationThickness />
            </template>
          </ComponentPad>
          <!-- end Text Decoration thickness -->
         
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <TypographyInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TypographyInfo from "../components/Typography/TypographyInfo.vue";
import FontsizeTypo from "../components/Typography/FontsizeTypo.vue";
import FontWeightTypo from "../components/Typography/FontWeightTypo.vue";
import TrackingTypography from "../components/Typography/TrackingTypography.vue";
import TextDecoration from "../components/Typography/TextDecoration.vue";
import TextDecorationThickness from "../components/Typography/TextDecorationThickness.vue";

import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    TypographyInfo,
    FontsizeTypo,
    FontWeightTypo,
    TrackingTypography,
    TextDecoration,
    TextDecorationThickness,
    
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
