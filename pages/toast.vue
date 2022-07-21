<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex md:pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="toastContainer">
          <HeadersHeading> Toast  </HeadersHeading>
          <div>
            <p class="w-full text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default alert -->
          <section id="defaultToast" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!DefaultToast"
                  @click="DefaultToast = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="DefaultToast = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ToastDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="DefaultToast" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultToastComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ToastSnippetsDefault id="defaultToastComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default alert -->
          <!-- state color toast -->
          <section id="stateColorToast" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>State Color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!state_color_toast"
                  @click="state_color_toast = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="state_color_toast = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ToastStateColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="state_color_toast" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('statecolorToastComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ToastSnippetsStateColor id="statecolorToastComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- end of state color toast -->
          <!--  -->
          <section id="toastWOutline" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With Outline</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!toast_with_outline"
                  @click="toast_with_outline = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="toast_with_outline = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ToastOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="toast_with_outline" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('toastWOutlineComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ToastSnippetsOutline id="toastWOutlineComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="solidColorToast" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Solid Color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!solid_color_toast"
                  @click="solid_color_toast = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="solid_color_toast = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ToastSolidColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="solid_color_toast" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('solidColorToastComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ToastSnippetsSolidColor id="solidColorToastComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="toastWButtons" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With Buttons</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!with_btn_toast"
                  @click="with_btn_toast = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="with_btn_toast = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ToastWithButton />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="with_btn_toast" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('toastWButtonsComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ToastSnippetsWithButton id="toastWButtonsComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
           
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
              <button @click="scrollToSection('defaultToast')">
                Default Toast
              </button>
              <button @click="scrollToSection('stateColorToast')">
                State Color Toast
              </button>
              <button
                @click="scrollToSection('toastWOutline')"
                class="text-right"
              >
                Toast With Outline
              </button>
              <button
                @click="scrollToSection('solidColorToast')"
                class="text-right"
              >
                Solid Color Toast
              </button>
              <button
                @click="scrollToSection('toastWButtons')"
                class="text-right"
              >
                Toast With Buttons
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
      DefaultToast: false,
      state_color_toast: false,
      toast_with_outline: false,
      solid_color_toast: false,
      with_btn_toast: false,
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
