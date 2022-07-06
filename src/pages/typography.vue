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
            <template v-slot:code>
              <ShowCodeButton
                v-if="!font_size"
                @click.native="font_size = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="font_size = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <FontsizeTypo />
            </template>
          </ComponentPad>
          <span v-show="font_size" class="transition-all">
          <FontSizeTypoCodeSnippet/>
          </span>
          <!-- end font size -->
          
          <!-- Font weight -->
          <SubHeading>
            <template v-slot:subHeader
              >Font weight</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!font_weight"
                @click.native="font_weight = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="font_weight = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <FontWeightTypo />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="font_weight" class="transition-all">
          <FontWeightTypoCodeSnippet/>          
          </span>          
          <!-- end code snippet -->
          <!-- Tracking -->
          <SubHeading>
            <template v-slot:subHeader
              >Tracking</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!tracking_typo"
                @click.native="tracking_typo = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="tracking_typo = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TrackingTypography />
            </template>
          </ComponentPad>
          <!-- code snippet --->   
          <span v-show="tracking_typo" class="transition-all">
          <TrackingTypoCodeSnippet/>          
          </span>       
          <!-- end code snippet -->
          <!-- end Tracking -->
          <!-- Text Decoration  -->
          <SubHeading>
            <template v-slot:subHeader
              >Text Decoration </template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!text_deco"
                @click.native="text_deco = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="text_deco = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecoration />
            </template>
          </ComponentPad>
          <!-- code snippet ---> 
          <span v-show="text_deco" class="transition-all">
          <TextDecorationCodeSnippet/>          
          </span>         
          <!-- end of code snippet -->
          <!-- end Text Decoration  -->
          <!-- Text Decoration thickness -->
          <SubHeading>
            <template v-slot:subHeader
              >Text Decoration thickness</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!text_deco_thick"
                @click.native="text_deco_thick = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="text_deco_thick = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecorationThickness />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="text_deco_thick" class="transition-all">
          <TextDecorationThicknessCodeSnippet/>          
          </span>          
          <!-- end of code snippet -->
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
import FontSizeTypoCodeSnippet from "../components/Typography/Code Snippets/FontSizeTypoCodeSnippet.vue"
import FontWeightTypoCodeSnippet from "../components/Typography/Code Snippets/FontWeightTypoCodeSnippet.vue";
import TextDecorationThicknessCodeSnippet from "../components/Typography/Code Snippets/TextDecorationThicknessCodeSnippet.vue";
import TextDecorationCodeSnippet from "../components/Typography/Code Snippets/TextDecorationCodeSnippet.vue";
import TrackingTypoCodeSnippet from "../components/Typography/Code Snippets/TrackingTypoCodeSnippet.vue";

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
    FontSizeTypoCodeSnippet,
    TextDecorationCodeSnippet,
    TextDecorationThicknessCodeSnippet,
    FontWeightTypoCodeSnippet,
    TrackingTypoCodeSnippet
},
  data() {
    return {
         font_size: false,
         font_weight: false,
         tracking_typo: false,
         text_deco: false,
         text_deco_thick: false,
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
