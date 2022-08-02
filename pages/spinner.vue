<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen lg:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="spinnerContainer">
          <HeadersHeading> Spinner  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start default-->
          <section id="defaultSpinner" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_spinner"
                  @click="default_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultSpinnerComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsDefault id="defaultSpinnerComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default -->
          <!-- start colors-->
          <section id="ColorSpinner" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Colors</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!colors_spinner"
                  @click="colors_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="colors_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerColors />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colors_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('ColorSpinnerComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsColors id="ColorSpinnerComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start Size-->
          <section id="SizeSpinner" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Size</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!size_spinner"
                  @click="size_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="size_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerSize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="size_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('SizeSpinnerComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsSize id="SizeSpinnerComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start Variants-->
          <section id="VariantSnipper" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Variants</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!variants_spinner"
                  @click="variants_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="variants_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerVariants />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="variants_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('VariantSnipperComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsVariants id="VariantSnipperComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  Button-->
          <!-- start Button-->
          <section id="ButtonSpinner" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Button</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!button_spinner"
                  @click="button_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="button_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerButton />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="button_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('ButtonSpinnerComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsButton id="ButtonSpinnerComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  Button-->
                  
           
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div
          class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"
        >
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
             <div class="flex flex-col justify-start items-end space-y-2">
            <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultSpinner')">
                Default Spinner
              </button>
              <button @click="scrollToSection('ColorSpinner')">
                Color Snipper
              </button>
              <button @click="scrollToSection('SizeSpinner')" class="text-right">
                Size Spinner
              </button>
              <button @click="scrollToSection('VariantSnipper')">
                Variant Snipper
              </button>
              <button @click="scrollToSection('ButtonSpinner')">
                Button Snipper
              </button>
                            
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
    title: "Rating",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      default_spinner: false,
      colors_spinner: false,
      size_spinner: false,
      variants_spinner: false,
      button_spinner: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("spinnerContainer").scrollTo({
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
