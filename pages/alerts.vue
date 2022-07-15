<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="alertContainer">
          <HeadersHeading> Alert  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default alert -->
          <section id="defaultAlert" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default alert</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_alertt"
                  @click="default_alertt = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_alertt = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertDefaultAlert />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_alertt" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <DefaultAlertCodeSnippet id="defaultAlertComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!-- stateColorAlert -->
          <section id="stateColorAlert  " class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>State color alert</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!statecolor_alertt"
                  @click="statecolor_alertt = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="statecolor_alertt = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AlertStateAlert />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="statecolor_alertt" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <StateAlertCodeSnippet id="stateColorAlertComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
           <!-- stateColorAlert -->
          <section id="stateColorAlert  " class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Border alert</template>
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
            <UtilsComponentPad>
              <AlertWithButtonAlert />
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
                    @click="copyToClipboard('alertWithBorder')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <AlertSnippetsWithButtonAlertCodeSnippet id="alertWithBorder" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
           <!-- alertWithIcon -->
          <section id="stateColorAlert  " class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Alert with Icon</template>
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
            <UtilsComponentPad>
              <AlertWithIcon />
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
                <AlertSnippetsWithIcon id="alertWithIcon" />
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
              <button @click="scrollToSection('defaultAlert')">
                Default Alert
              </button>
              <button @click="scrollToSection('stateColorAlert')">
                State Color Alert
              </button>
              <button @click="scrollToSection('withBtnAlert')">
                With Button Alert
              </button>
              <button @click="scrollToSection('alertWithLink')">
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
      default_alertt: false,
      statecolor_alertt: false,
      with_btn_alertt: false,
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
