<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="toastContainer">
          <HeadersHeading> Toast  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Start -->
          <section id="fontSize" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Size</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!font_size"
                  @click="font_size = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="font_size = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <TypographyFontsize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="font_size" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('fontSizeComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <TypographySnippetsFontSize id="fontSizeComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- Start -->
          <section id="fontWeight" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Weight</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!font_weight"
                  @click="font_weight = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="font_weight = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <TypographyFontWeight />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="font_weight" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('fontWeightComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <TypographySnippetsFontWeight id="fontWeightComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- Start -->
          <section id="tracking" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Tracking</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!tracking_typo"
                  @click="tracking_typo = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="tracking_typo = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <TypographyTracking />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="tracking_typo" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('trackingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <TypographySnippetsTracking id="trackingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- Start -->
          <section id="textDecoration" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Text Decoration</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!text_deco"
                  @click="text_deco = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="text_deco = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <TypographyTextDecoration />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="text_deco" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('textDecorationComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <TypographySnippetsTextDecoration id="textDecorationComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- Start -->
          <section id="textDecorationThickness" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Text Decoration Thickness</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!text_deco_thick"
                  @click="text_deco_thick = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="text_deco_thick = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <TypographyTextDecorationThickness />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="text_deco_thick" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('textDecorationThicknessComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <TypographySnippetsTextDecorationThickness id="textDecorationThicknessComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          
           
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div
          class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"
        >
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
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
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue";
import AlertInfo from "../components/Alert/AlertInfo.vue";
import Heading from "../components/Headers/Heading.vue";
export default {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      font_size: false,
      font_weight: false,
      tracking_typo: false,
      text_deco: false,
      text_deco_thick: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("toastContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.$bus.$emit("showToastNotification")
      this.$globalCopyFunc(id);
    },

  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
