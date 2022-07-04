<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Toast
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
          <!-- Default Toast -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Toast</template
            >
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultToast />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="DefaultToast" class="transition-all">
            <DefaultToastCodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end default Toast -->
          <!-- StateColor Toast -->
          <SubHeading>
            <template v-slot:subHeader
              >StateColor Toast</template
            >
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <StateColorToast />
            </template>
          </ComponentPad>
          <span v-show="state_color_toast" class="transition-all">
            <StateColorToastCodeSnippet />
          </span>
          <!-- end StateColor Toast -->
           <!-- outline Toast -->
          <SubHeading>
            <template v-slot:subHeader
              >Toast with outline</template
            >
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <OutlineToast />
            </template>
          </ComponentPad>
          <span v-show="Toast_with_outline" class="transition-all">
            <OutlineToastCodeSnippet />
          </span>
          <!-- end outline Toast -->
           <!-- SolidColor Toast -->
          <SubHeading>
            <template v-slot:subHeader
              >Solid Color toast</template
            >
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <SolidColorToast />
            </template>
          </ComponentPad>
          <span v-show="solid_color_toast" class="transition-all">
            <SolidColorToastCodeSnippet />
          </span>
          <!-- end SolidColor Toast -->
          <!-- button Toast -->
          <SubHeading>
            <template v-slot:subHeader
              >Toast with buttons</template
            >
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <WithButtonToast />
            </template>
          </ComponentPad>
          <span v-show="with_btn_toast" class="transition-all">
            <WithButtonToastCodeSnippet />
          </span>
          <!-- end button Toast -->
         
 

        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <ToastInfo />
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
};
</script>

<style>

</style>
