<template>
  <Layout>
    <div class="flex p-4 pb-24">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="footerContainer">
          <Heading><template> Footer </template> </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Footer -->
          <section id="defaultFooter">
            <SubHeading>
              <template v-slot:subHeader>Default Footer</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!default_footer"
                  @click.native="default_footer = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="default_footer = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultFooterComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DefaultFooter />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="default_footer" class="transition-all">
              <DefaultFooterCodeSnippet id="defaultFooterComp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!-- end default Footer -->

          <!-- Footer with logo section -->
          <section id="footerLogoAside">
            <SubHeading>
              <template v-slot:subHeader>Footer logo aside</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!logoaside_footer"
                  @click.native="logoaside_footer = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="logoaside_footer = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('logoAsideFooterComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <LogoSectionFooter />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="logoaside_footer" class="transition-all">
              <LogoSectionFooterCodeSnippet id="logoAsideFooterComp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!-- end Footer with logo section -->
          <!-- Footer with logo section -->
          <section id="footerWith2rows">
            <SubHeading>
              <template v-slot:subHeader>Footer with 2 rows</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!tworows_footer"
                  @click.native="tworows_footer = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="tworows_footer = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('twoRowFooterComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <TwoRowFooter />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="tworows_footer" class="transition-all">
              <TwoRowFooterCodeSnippet id="twoRowFooterComp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!-- end Footer with logo section -->
          <!-- Footer with logo section -->
          <section id="appsmithFooter">
            <SubHeading>
              <template v-slot:subHeader>Appsmith's footer</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!appsmith_footer"
                  @click.native="appsmith_footer = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="appsmith_footer = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('appsmithFooterComp')"></CopyButton></template>
            </SubHeading>
            <div>
              <p class="text-base pb-2 font-primary">
                Footer desgin of
                <a
                  href="https://www.appsmith.com/"
                  target="_blank"
                  class="text-blue-500"
                >
                  appsmith</a
                >
                website
              </p>
            </div>
            <ComponentPad>
              <template>
                <AppsmithFooter />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="appsmith_footer" class="transition-all">
              <AppsmithFooterCodeSnippet id="appsmithFooterComp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!-- end Footer with logo section -->
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
  </Layout>
</template>

<script>
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import FooterInfo from "../components/Footer/FooterInfo.vue";
import DefaultFooter from "../components/Footer/DefaultFooter.vue";
import LogoSectionFooter from "../components/Footer/LogoSectionFooter.vue";
import TwoRowFooter from "../components/Footer/TwoRowFooter.vue";
import AppsmithFooter from "../components/Footer/AppsmithFooter.vue";
import DefaultFooterCodeSnippet from "../components/Footer/Code Snippets/DefaultFooterCodeSnippet.vue";
import AppsmithFooterCodeSnippet from "../components/Footer/Code Snippets/AppsmithFooterCodeSnippet.vue";
import TwoRowFooterCodeSnippet from "../components/Footer/Code Snippets/TwoRowFooterCodeSnippet.vue";
import LogoSectionFooterCodeSnippet from "../components/Footer/Code Snippets/LogoSectionFooterCodeSnippet.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
  components: {
    SubHeading,
    Heading,
    FooterInfo,
    DefaultFooter,
    LogoSectionFooter,
    TwoRowFooter,
    AppsmithFooter,
    DefaultFooterCodeSnippet,
    AppsmithFooterCodeSnippet,
    TwoRowFooterCodeSnippet,
    LogoSectionFooterCodeSnippet,
  },
  data() {
    return {
      default_footer: false,
      logoaside_footer: false,
      tworows_footer: false,
      appsmith_footer: false,
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
      this.globalCopyFunc(id)
    },
  },
};
</script>

<style></style>
