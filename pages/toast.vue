<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="toastContainer">
          <Heading><template> Toast </template> </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Toast -->
          <section id="defaultToast">
            <SubHeading>
              <template v-slot:subHeader>Default Toast</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!DefaultToast"
                  @click.native="DefaultToast = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="DefaultToast = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultToastComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DefaultToast />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="DefaultToast" class="transition-all">
              <DefaultToastCodeSnippet id="defaultToastComp" />
            </span>
          </section>
          <!-- code snippet end --->
          <!-- end default Toast -->
          <!-- StateColor Toast -->
          <section id="stateColorToast">
            <SubHeading>
              <template v-slot:subHeader>StateColor Toast</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!state_color_toast"
                  @click.native="state_color_toast = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="state_color_toast = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('stateColorToastComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <StateColorToast />
              </template>
            </ComponentPad>
            <span v-show="state_color_toast" class="transition-all">
              <StateColorToastCodeSnippet id="stateColorToastComp" />
            </span>
          </section>
          <!-- end StateColor Toast -->
          <!-- outline Toast -->
          <section id="toastWOutline">
            <SubHeading>
              <template v-slot:subHeader>Toast with outline</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!Toast_with_outline"
                  @click.native="Toast_with_outline = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="Toast_with_outline = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('ToastWithOutlineComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <OutlineToast />
              </template>
            </ComponentPad>
            <span v-show="Toast_with_outline" class="transition-all">
              <OutlineToastCodeSnippet id="ToastWithOutlineComp" />
            </span>
          </section>
          <!-- end outline Toast -->
          <!-- SolidColor Toast -->
          <section id="solidColorToast">
            <SubHeading>
              <template v-slot:subHeader>Solid Color toast</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!solid_color_toast"
                  @click.native="solid_color_toast = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="solid_color_toast = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('solidColorToastComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <SolidColorToast />
              </template>
            </ComponentPad>
            <span v-show="solid_color_toast" class="transition-all">
              <SolidColorToastCodeSnippet id="solidColorToastComp" />
            </span>
          </section>
          <!-- end SolidColor Toast -->
          <!-- button Toast -->
          <section id="toastWButtons">
            <SubHeading>
              <template v-slot:subHeader>Toast with buttons</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!with_btn_toast"
                  @click.native="with_btn_toast = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="with_btn_toast = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('withBtnToastComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <WithButtonToast />
              </template>
            </ComponentPad>
            <span v-show="with_btn_toast" class="transition-all">
              <WithButtonToastCodeSnippet id="withBtnToastComp" />
            </span>
          </section>
          <!-- end button Toast -->
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
  </Layout>
</template>

<script>
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ToastInfo from "../components/Toast/ToastInfo.vue";
import DefaultToast from "../components/Toast/DefaultToast.vue";
import StateColorToast from "../components/Toast/StateColorToast.vue";
import WithButtonToast from "../components/Toast/WithButtonToast.vue";
import OutlineToast from "../components/Toast/OutlineToast.vue";
import SolidColorToast from "../components/Toast/SolidColorToast.vue";
import DefaultToastCodeSnippet from "../components/Toast/Code Snippets/DefaultToastCodeSnippet.vue";
import WithButtonToastCodeSnippet from "../components/Toast/Code Snippets/WithButtonToastCodeSnippet.vue";
import OutlineToastCodeSnippet from "../components/Toast/Code Snippets/OutlineToastCodeSnippet.vue";
import SolidColorToastCodeSnippet from "../components/Toast/Code Snippets/SolidColorToastCodeSnippet.vue";
import StateColorToastCodeSnippet from "../components/Toast/Code Snippets/StateColorToastCodeSnippet.vue";


export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN

  components: {
    SubHeading,
    Heading,
    ToastInfo,
    DefaultToast,
    WithButtonToast,
    StateColorToast,
    SolidColorToast,
    OutlineToast,
    DefaultToastCodeSnippet,
    WithButtonToastCodeSnippet,
    OutlineToastCodeSnippet,
    SolidColorToastCodeSnippet,
    StateColorToastCodeSnippet,
  },
  data() {
    return {
      DefaultToast: false,
      state_color_toast: false,
      Toast_with_outline: false,
      solid_color_toast: false,
      with_btn_toast: false,
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
      this.globalCopyFunc(id)
    },
  },
};
</script>

<style>
</style>
