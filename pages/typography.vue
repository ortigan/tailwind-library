<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="typoContainer">
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
          <section id="fontSize">
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
              ><CopyButton @click.native="copyToClipboard('fontSizeComp')"></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <FontsizeTypo />
            </template>
          </ComponentPad>
          <span v-show="font_size" class="transition-all">
          <FontSizeTypoCodeSnippet id="fontSizeComp" />
          </span>
          </section>
          <!-- end font size -->
          
          <!-- Font weight -->
          <section id="fontWeight">
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
              ><CopyButton @click.native="copyToClipboard('fontweightComp')"></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <FontWeightTypo />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="font_weight" class="transition-all">
          <FontWeightTypoCodeSnippet id="fontweightComp" />          
          </span> 
          </section>         
          <!-- end code snippet -->
          <!-- Tracking -->
          <section id="tracking">
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
              ><CopyButton @click.native="copyToClipboard('trackingTypoComp')"></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TrackingTypography />
            </template>
          </ComponentPad>
          <!-- code snippet --->   
          <span v-show="tracking_typo" class="transition-all">
          <TrackingTypoCodeSnippet id="trackingTypoComp" />          
          </span> 
          </section>      
          <!-- end code snippet -->
          <!-- end Tracking -->
          <!-- Text Decoration  -->
          <section id="textDecoration">
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
              ><CopyButton @click.native="copyToClipboard('textDecorationComp')"></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecoration />
            </template>
          </ComponentPad>
          <!-- code snippet ---> 
          <span v-show="text_deco" class="transition-all">
          <TextDecorationCodeSnippet id="textDecorationComp" />          
          </span>
          </section>         
          <!-- end of code snippet -->
          <!-- end Text Decoration  -->
          <!-- Text Decoration thickness -->
          <section id="textDecorationThickness">
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
              ><CopyButton @click.native="copyToClipboard('textDecorationThicknessComp')"></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TextDecorationThickness />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="text_deco_thick" class="transition-all">
          <TextDecorationThicknessCodeSnippet id="textDecorationThicknessComp" />          
          </span>
          </section>          
          <!-- end of code snippet -->
          <!-- end Text Decoration thickness -->
         
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2">
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
            <div class="flex flex-col justify-start items-end space-y-2">
            <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('fontSize')">
                Font Size
              </button>
              <button @click="scrollToSection('fontWeight')">
                Font Weight
              </button>
              <button @click="scrollToSection('tracking')">
                Tracking
              </button>
              <button @click="scrollToSection('textDecoration')">
                Text Decoration
              </button>
              <button @click="scrollToSection('textDecorationThickness')">
                Text Deco-Thickness
              </button>
                            
            </div>
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
  // GLOBAL MIXIN

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
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document
        .getElementById("typoContainer")
        .scrollTo({
          top: document.getElementById(`${section}`).offsetTop - 100,
          behavior: "smooth",
        });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.globalCopyFunc(id)
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
