<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="footerContainer">
          <HeadersHeading> Rating  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start -->
          <section id="defaultFooter" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_footer"
                  @click="default_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <FooterDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultFooterComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <FooterSnippetsDefault id="defaultFooterComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="footerLogoAside" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Logo Aside</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!logoaside_footer"
                  @click="logoaside_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="logoaside_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <FooterLogoSection />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="logoaside_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('footerLogoAsideComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <FooterSnippetsLogoSection id="footerLogoAsideComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="footerWith2rows" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With 2 rows</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!tworows_footer"
                  @click="tworows_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="tworows_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <FooterTwoRow />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="tworows_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('footerWith2rowsComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <FooterSnippetsWFooterTwoRow id="footerWith2rowsComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="appsmithFooter" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Appsmith</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!appsmith_footer"
                  @click="appsmith_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="appsmith_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <FooterAppsmith />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="appsmith_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('appsmithFooterComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <FooterSnippetsAppsmith id="appsmithFooterComp" />
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
            <div class="flex flex-col justify-start items-end space-y-2">
              <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultFooter')">
                Default Footer
              </button>
              <button @click="scrollToSection('footerLogoAside')">
                Footer Logo Aside
              </button>
              <button @click="scrollToSection('footerWith2rows')">
                Footer With 2 rows
              </button>
              <button @click="scrollToSection('appsmithFooter')">
                Appsmith Footer
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
      default_footer: false,
      logoaside_footer: false,
      tworows_footer: false,
      appsmith_footer: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("footerContainer").scrollTo({
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
