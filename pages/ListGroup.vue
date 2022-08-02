<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex  h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 " id="alertContainer">
          <HeadersHeading> List group  </HeadersHeading>
          <div>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut,
            </p>
          </div>
          <!-- Default List -->
          <section id="defaultList" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_List"
                  @click="default_List = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_List = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ListGroupDefault />
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
          <!-- End default list -->
          <!-- Hover List -->
          <section id="defaultList" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default hover </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_List"
                  @click="default_List = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_List = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ListGroupHover />
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
          <!-- End Hover list -->
          <!-- Active List -->
          <section id="defaultList" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Active </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_List"
                  @click="default_List = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_List = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ListGroupActive />
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
          <!-- End Hover list -->
        
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
