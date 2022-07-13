<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4 pb-20" id="alertContainer">
          <Heading
            ><template>
              Alert
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
          <!-- Default alert -->
          <section id="defaultAlert">
            <SubHeading>
              <template v-slot:subHeader
                >Default alert</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!default_alertt"
                  @click.native="default_alertt = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="default_alertt = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('defaultAlertComp')"></CopyButton>
              </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DefaultAlert />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="default_alertt" class="transition-all">
              <DefaultAlertCodeSnippet id="defaultAlertComp" />
            </span>
            <!-- code snippet end -->
          </section>
          <!-- end default alert -->
          <section id="stateColorAlert">
            <!-- State alert -->
            <SubHeading>
              <template v-slot:subHeader
                >State color alert</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!statecolor_alertt"
                  @click.native="statecolor_alertt = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="statecolor_alertt = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('stateColorAlertComp')"></CopyButton>
              </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <StateAlert />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="statecolor_alertt" class="transition-all">
              <StateAlertCodeSnippet id="stateColorAlertComp" />
            </span>
            <!-- code snippet end -->
          </section>
          <!-- end state alert -->
          <!-- with button alert -->
          <section id="withBtnAlert">
            <SubHeading>
              <template v-slot:subHeader
                >With button alert</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!with_btn_alertt"
                  @click.native="with_btn_alertt = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="with_btn_alertt = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy 
                ><CopyButton @click.native="copyToClipboard('withButtonAlertcomp')"></CopyButton>
              </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <WithButtonAlert />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="with_btn_alertt" class="transition-all">
              <WithButtonAlertCodeSnippet id="withButtonAlertcomp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!-- end button alert -->
          <!-- alert with link-->
          <section id="alertWithLink">
            <SubHeading>
              <template v-slot:subHeader
                >Alert with link</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!alert_wlink"
                  @click.native="alert_wlink = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="alert_wlink = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('alertWithLinkComp')"></CopyButton>
              </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <AlertWithLink />
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="alert_wlink" class="transition-all">
              <AlertWithLinkCodeSnippet id="alertWithLinkComp" />
            </span>
          </section>
          <!-- code snippet end -->
          <!--end alert with links -->
          <!-- alert with Icon-->
          <section id="alertWithIcon">
            <SubHeading>
              <template v-slot:subHeader
                >Alert with icon</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!alert_wicon"
                  @click.native="alert_wicon = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="alert_wicon = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('alertWithIconComp')"></CopyButton>
              </template>
            </SubHeading>
            <div class="pb-4">
              <p>
                I have used
                <a href="https://heroicons.com/" class="text-sky-700"
                  >heroicons</a
                >
                for this component. You can user any icon according to the
                constraints. I have provided with code snippet only for one
                component as rest of the components are same, just have
                different colors. All the components hvae
                <span class="text-sky-900">text-'color'-700</span> and
                <span class="text-sky-900">bg-'color'-100</span> for all the
                components. You can refer
                <a
                  href="https://tailwindcss.com/docs/customizing-colors"
                  class="text-sky-700"
                  >Tailwind colors</a
                >
                to experiment with different colors.
                <span class="text-gray-800 italic"
                  >Same goes for following components.</span
                >
              </p>
            </div>
            <ComponentPad>
              <template>
                <AlertWithIcon />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="alert_wicon" class="transition-all">
              <AlertWithIconCodeSnippet id="alertWithIconComp" />
            </span>
          </section>
          <!-- code snippet end--->
          <!--end alert with Icons -->
          <!-- Border alert-->
          <section id="alertWithBorder">
            <SubHeading>
              <template v-slot:subHeader
                >Alert with border</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!alert_wborder"
                  @click.native="alert_wborder = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="alert_wborder = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('alertWithBorderComp')"></CopyButton>
              </template>
            </SubHeading>
            <div class="pb-4">
              <p>
                This component has a top border of 2px. You can always increase
                border size and can change color as mentioned in above component
                info.
              </p>
            </div>
            <ComponentPad>
              <template>
                <BorderAlert />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="alert_wborder" class="transition-all">
              <BorderAlertCodeSnippet id="alertWithBorderComp" />
            </span>
          </section>
          <!-- code snippet end--->
          <!--end Border alerts -->
          <!-- Border accent alert-->
          <section id="borderLeft">
            <SubHeading>
              <template v-slot:subHeader
                >Border left</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!alert_wleftborder"
                  @click.native="alert_wleftborder = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="alert_wleftborder = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy
                ><CopyButton @click.native="copyToClipboard('alertWithBorderLeftComp')"></CopyButton>
              </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <BorderAccent />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="alert_wleftborder" class="transition-all">
              <BorderAccentCodeSnippet id="alertWithBorderLeftComp" />
            </span>
          </section>
          <!-- code snippet end--->
          <!--end Border left alerts -->
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
  </Layout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue";
import AlertInfo from "../components/Alert/AlertInfo.vue";
import AlertWithLink from "../components/Alert/AlertWithLink.vue";
import AlertWithIcon from "../components/Alert/AlertWithIcon.vue";
import DefaultAlert from "../components/Alert/DefaultAlert.vue";
import StateAlert from "../components/Alert/StateAlert.vue";
import WithButtonAlert from "../components/Alert/WithButtonAlert.vue";
import BorderAlert from "../components/Alert/BorderAlert.vue";
import Heading from "../components/Headers/Heading.vue";
import BorderAccent from "../components/Alert/BorderAccent.vue";
import DefaultAlertCodeSnippet from "../components/Alert/Code Snippets/DefaultAlertCodeSnippet.vue";
import StateAlertCodeSnippet from "../components/Alert/Code Snippets/StateAlertCodeSnippet.vue";
import AlertWithIconCodeSnippet from "../components/Alert/Code Snippets/AlertWithIconCodeSnippet.vue";
import WithButtonAlertCodeSnippet from "../components/Alert/Code Snippets/WithButtonAlertCodeSnippet.vue";
import BorderAlertCodeSnippet from "../components/Alert/Code Snippets/BorderAlertCodeSnippet.vue";
import BorderAccentCodeSnippet from "../components/Alert/Code Snippets/BorderAccentCodeSnippet.vue";
import AlertWithLinkCodeSnippet from "../components/Alert/Code Snippets/AlertWithLinkCodeSnippet.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
  components: {
    AlertInfo,
    Heading,
    SubHeading,
    DefaultAlert,
    StateAlert,
    WithButtonAlert,
    AlertWithLink,
    AlertWithIcon,
    BorderAlert,
    BorderAccent,
    DefaultAlertCodeSnippet,
    StateAlertCodeSnippet,
    AlertWithIconCodeSnippet,
    WithButtonAlertCodeSnippet,
    BorderAlertCodeSnippet,
    BorderAccentCodeSnippet,
    AlertWithLinkCodeSnippet,
  },
  data() {
    return {
      default_alertt: false,
      statecolor_alertt: false,
      with_btn_alertt: false,
      alert_wlink: false,
      alert_wicon: false,
      alert_wborder: false,
      alert_wleftborder: false,
      // SCROLL
      activeScrollSection: "",
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
