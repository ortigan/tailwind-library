<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="alertContainer">
          <HeadersHeading> Button  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default Button -->
          <!-- Outline Button -->
          <section id="outlineButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Outline</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!outline_btn"
                  @click="outline_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="outline_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="outline_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('OutlineButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsOutline id="OutlineButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Outline Button -->
          <!-- StateColor Button -->
          <section id="stateColor" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>State Color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!statecolor_btn"
                  @click="statecolor_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="statecolor_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonStateColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="statecolor_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('StateColorButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsStateColor id="StateColorButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End StateColor Button -->
          <!-- Size Button -->
          <section id="sizeButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Size</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!size_btn"
                  @click="size_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="size_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonSize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="size_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('SizeButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsSize id="SizeButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Size Button -->
          <!-- DualIcon Button -->
          <section id="dualIcon" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Dual Icon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!dual_icon_btn"
                  @click="dual_icon_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="dual_icon_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonDualIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="dual_icon_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('DualIconButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDualIcon id="DualIconButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End DualIcon Button -->
          <!-- LightColor Button -->
          <section id="lightColor" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Light color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!light_color_btn"
                  @click="light_color_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="light_color_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonLightColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="light_color_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('LightColorButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsLightColor id="LightColorButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End LightColor Button -->
          <!-- Dark Color Button -->
          <section id="darkColor" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Dark color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!dark_color_btn"
                  @click="dark_color_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="dark_color_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonDarkColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="dark_color_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('DarkColorButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDarkColor id="DarkColorButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End DarkColor Button -->
          <!-- ColoredShadow Button -->
          <section id="coloredShadowBtn" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Colored shadow</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!colored_shadow_btn"
                  @click="colored_shadow_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="colored_shadow_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonColoredShadow />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colored_shadow_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('ColoredShadowButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsColoredShadow id="ColoredShadowButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End ColoredShadow Button -->
          <!-- Gradient Button -->
          <section id="gradientBtn" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Gradient</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!gradient_btn"
                  @click="gradient_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="gradient_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonGradient />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="gradient_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('GradientButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsGradient id="GradientButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Gradient Button -->
          <!-- Appsmith Button -->
          <section id="appsmithButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Appsmith</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!appsmith_btn"
                  @click="appsmith_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="appsmith_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonAppsmith />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="appsmith_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('AppsmithButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsAppsmith id="AppsmithButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Appsmith Button -->
          
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
              <button @click="scrollToSection('defaultButton')">
                Default
              </button>
              <button @click="scrollToSection('outlineButton')">
                Outline
              </button>
              <button @click="scrollToSection('stateColor')">
                State Color
              </button>
              <button @click="scrollToSection('sizeButton')">
                Size
              </button>
              <button @click="scrollToSection('dualIcon')">
                Dual Icon
              </button>
              <button @click="scrollToSection('lightColor')">
                Light Color
              </button>
              <button @click="scrollToSection('darkColor')">
                Dark Color
              </button>
              <button @click="scrollToSection('coloredShadowBtn')" class="text-right">
                Colored shadow 
              </button>
              <button @click="scrollToSection('gradientBtn')">
                Gradient buttons
              </button>
              <button @click="scrollToSection('appsmithButton')">
                Appsmith
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
 default_btn: false,
      outline_btn: false,
      statecolor_btn: false,
      size_btn: false,
      dual_icon_btn: false,
      light_color_btn: false,
      dark_color_btn: false,
      gradient_btn: false,
      colored_shadow_btn: false,
      appsmith_btn: false,  
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("alertContainer").scrollTo({
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
