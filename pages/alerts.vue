<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="alertContainer">
          <HeadersHeading> Alert  </HeadersHeading>
          <div>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut,
            </p>
          </div>
          <!-- Default alert -->
          <section id="defaultAlert" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default alert</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_alert"
                  @click="default_alert = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_alert = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertDefaultAlert />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_alert" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultAlertComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsDefaultAlert id="defaultAlertComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default alert -->
          <!-- stateColorAlert -->
          <section id="stateColorAlert  " class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>State color alert</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!statecolor_alert"
                  @click="statecolor_alert = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="statecolor_alert = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertStateAlert />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="statecolor_alert" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('stateColorAlertComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsStateAlert id="stateColorAlertComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End state color alert -->
           <!-- With button alert start -->
          <section id="withBtnAlert" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With button alert</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!with_button"
                  @click="with_button = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="with_button = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertWithButton />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="with_button" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('alertWithButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsWithButton id="alertWithButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End with button alert -->
           <!-- With Link alert -->
          <section id="withLink" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With Link</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!alert_wlink"
                  @click="alert_wlink = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="alert_wlink = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertWithLink />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="alert_wlink" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('alertWithLink')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsWithLink id="alertWithLink" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End with link alert -->
           <!-- alert With Icon -->
          <section id="stateColorAlert" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Alert with Icon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!alert_wicon"
                  @click="alert_wicon = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="alert_wicon = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <div class="pb-4">
              <p class="text-sm md:text-base">
                I have used
                <a href="https://heroicons.com/" class="text-sky-700 dark:text-sky-500"
                  >heroicons</a
                >
                for this component. You can user any icon according to the
                constraints. I have provided with code snippet only for one
                component as rest of the components are same, just have
                different colors. All the components hvae
                <span class="text-sky-900 dark:text-sky-600">text-'color'-700</span> and
                <span class="text-sky-900 dark:text-sky-600">bg-'color'-100</span> for all the
                components. You can refer
                <a
                  href="https://tailwindcss.com/docs/customizing-colors"
                  class="text-sky-700 dark:text-sky-500"
                  >Tailwind colors</a
                >
                to experiment with different colors.
                <span class="text-sky-800 dark:text-sky-500 italic"
                  >Same goes for following components.</span
                >
              </p>
            </div>
            <UtilsComponentPad>
              <AlertWithIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="alert_wicon" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('alertWithIcon')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsWithIcon id="alertWithIcon" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End with icon alert -->
           <!-- alert With border -->
          <section id="alertWithBorder" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With Border</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!alert_wborder"
                  @click="alert_wborder = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="alert_wborder = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
              <div class="pb-4">
              <p class="text-sm md:text-base">
                This component has a top border of 2px. You can always increase
                border size and can change color as mentioned in above component
                info.
              </p>
            </div>
            <UtilsComponentPad>
              <AlertWithBorder />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="alert_wborder" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('alertWithIcon')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsWithBorder id="alertWithIcon" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End with border alert -->
           <!-- alert With left border -->
          <section id="borderLeft" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With Left Border</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!alert_wleftborder"
                  @click="alert_wleftborder = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="alert_wleftborder = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertBorderLeft />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="alert_wleftborder" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('alertBorderLeft')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsBorderLeft id="alertBorderLeft" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End with left border alert -->
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
              <button @click="scrollToSection('defaultAlert')">
                Default Alert
              </button>
              <button @click="scrollToSection('stateColorAlert')">
                State Color Alert
              </button>
              <button @click="scrollToSection('withBtnAlert')">
                With Button Alert
              </button>
              <button @click="scrollToSection('withLink')">
                Alert With Link
              </button>
              <button @click="scrollToSection('alertWithIcon')">
                Alert With Icon
              </button>
              <button @click="scrollToSection('alertWithBorder')">
                Alert With Border
              </button>
              <button
                @click="scrollToSection('borderLeft')"
                class="flex flex-row"
              >
                Alert With Left-Border
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
      default_alert: false,
      statecolor_alert: false,
      with_button: false,
      alert_wlink: false,
      alert_wicon: false,
      alert_wborder: false,
      alert_wleftborder: false,
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
