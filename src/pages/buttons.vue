<template>
  <Layout>
    <div class="">
      <div class="flex p-4">
        <!-- content -->
        <div class="flex h-screen pb-20 px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4" id="buttonsContainer">
            <Heading
            ><template>
              Buttons
            </template>
          </Heading>
            <div>
              <p class="text-base font-primary">
                Use the button component inside forms, as links, social login,
                payment options with support for multiple styles, colors, sizes,
                gradients, and shadows
              </p>
            </div>
            <!-- Default buttons -->
            <section id="defaultButton">
             <SubHeading>
            <template v-slot:subHeader
              >Default</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_btn"
                @click.native="default_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultBtnComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultButtons />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="default_btn" class="transition-all">
          <DefaultButtonSnippet id="defaultBtnComp" />
          </span>
            </section>
            <!-- code snippet end --->
            <!-- End of default buttons -->
            <!-- Outline buttons -->
            <section id="outlineButton">
            <SubHeading>
            <template v-slot:subHeader
              >Outline</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!outline_btn"
                @click.native="outline_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="outline_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('outlineBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <OutlineButton />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="outline_btn" class="transition-all">
            <OutlineButtonSnippet id="outlineBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!-- end or Outline Button -->
            <!-- OutlineState Button -->
            <section id="stateColor">
            <SubHeading>
            <template v-slot:subHeader
              >State color</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!state_color_btn"
                @click.native="state_color_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="state_color_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('stateColorBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <StateColorButton />
              </template>
            </ComponentPad>
              <!-- code snippet --->
              <span v-show="state_color_btn" class="transition-all">
            <StateColorButtonSnippet id="stateColorBtnComp" />
              </span>
              </section>
            <!-- code snippet end --->
            <!-- end or OutlineState Button -->
            <!-- Buttons sizes -->
            <section id="sizeButton">
            <SubHeading>
            <template v-slot:subHeader
              >Size</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!size_btn"
                @click.native="size_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="size_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('sizeBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <SizeButtons />
              </template>
            </ComponentPad>
             <!-- code snippet --->
             <span v-show="size_btn" class="transition-all">
            <SizeButtonsSnippet id="sizeBtnComp" />
             </span>
             </section>
            <!-- code snippet end --->
            <!--End Buttons sizes -->
            <!-- Dual icon buttons -->
            <section id="dualIcon">
            <SubHeading>
            <template v-slot:subHeader
              >Dual icon</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!dual_icon_btn"
                @click.native="dual_icon_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="dual_icon_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('dualIconBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <DualIconButton />
              </template>
            </ComponentPad>
              <!-- code snippet --->
            <span v-show="dual_icon_btn" class="transition-all">
            <DualIconSnippet id="dualIconBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End Dual icon buttons   -->
            <!-- Light color buttons -->
            <section id="lightColor">
            <SubHeading>
            <template v-slot:subHeader
              >Light color</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!light_color_btn"
                @click.native="light_color_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="light_color_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('lightColorBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <LightColorButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="light_color_btn" class="transition-all">
            <LightColorButtonsSnippet id="lightColorBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End Light color buttons -->
            <!-- Dark color buttons -->
            <section id="darkColor">
            <SubHeading>
            <template v-slot:subHeader
              >Dark color</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!dark_color_btn"
                @click.native="dark_color_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="dark_color_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('darkColorBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <DarkColorButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="dark_color_btn" class="transition-all">
            <DarkColorButtonsSnippet id="darkColorBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End Dark color buttons   -->
            <!-- colored_sdadow buttons -->
            <section id="coloredShadowBtn">
            <SubHeading>
            <template v-slot:subHeader
              >Colored shadow buttons</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!colored_shadow_btn"
                @click.native="colored_shadow_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="colored_shadow_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('coloredShadowBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <ColoredShadowButton />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="colored_shadow_btn" class="transition-all">
            <ColoredShadowButtonSnippet id="coloredShadowBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End colored_sdadow buttons   -->
            <!-- gradient buttons -->
            <section id="gradientBtn">
            <SubHeading>
            <template v-slot:subHeader
              >Gradient buttons</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!gradient_btn"
                @click.native="gradient_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="gradient_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('gradientBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <GradientButton />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="gradient_btn" class="transition-all">
            <GradientButtonSnippet id="gradientBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End gradient buttons   -->
            <!-- appsmith buttons -->
            <section id="appsmithButton">
            <SubHeading>
            <template v-slot:subHeader
              >Appsmith</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!appsmith_btn"
                @click.native="appsmith_btn = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="appsmith_btn = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('appsmithBtnComp')"></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <AppsmithButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="appsmith_btn" class="transition-all">
            <AppsmithButtonSnippet id="appsmithBtnComp" />
            </span>
            </section>
            <!-- code snippet end --->
            <!--End appsmith buttons   -->
         
            <!-- end -->
          </div>
        </div>

        <!-- right sidebar -->
        <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2">
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
                Colored shadow buttons
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
    </div>
  </Layout>
</template>

<script>
import DefaultButtons from "../components/Button/DefaultButtons.vue";
import LightColorButtons from "../components/Button/LightColorButtons.vue";
import DarkColorButtons from "../components/Button/DarkColorButtons.vue";
import OutlineButton from "../components/Button/OutlineButton.vue";
import StateColorButton from "../components/Button/StateColorButton.vue";
import SizeButtons from "../components/Button/SizeButtons.vue";
import GradientButton from "../components/Button/GradientButton.vue";
import ButtonInfo from "../components/Button/ButtonInfo.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import DualIconButton from "../components/Button/DualIconButton.vue";
import AppsmithButtons from "../components/Button/AppsmithButtons.vue";
import ColoredShadowButton from "../components/Button/ColoredShadowButton.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import DefaultButtonSnippet from "../components/Button/CodeSnippet/DefaultButtonSnippet.vue";
import OutlineButtonSnippet from "../components/Button/CodeSnippet/OutlineButtonSnippet.vue";
import StateColorButtonSnippet from "../components/Button/CodeSnippet/StateColorButtonSnippet.vue";
import SizeButtonsSnippet from "../components/Button/CodeSnippet/SizeButtonsSnippet.vue";
import DualIconSnippet from "../components/Button/CodeSnippet/DualIconSnippet.vue";
import LightColorButtonsSnippet from "../components/Button/CodeSnippet/LightColorButtonsSnippet.vue";
import DarkColorButtonsSnippet from "../components/Button/CodeSnippet/DarkColorButtonsSnippet.vue";
import AppsmithButtonSnippet from "../components/Button/CodeSnippet/AppsmithButtonSnippet.vue";
import GradientButtonSnippet from "../components/Button/CodeSnippet/GradientButtonSnippet.vue";
import ColoredShadowButtonSnippet from "../components/Button/CodeSnippet/ColoredShadowButtonSnippet.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
  components: {
    ButtonInfo,
    Heading,
    SubHeading,
    DefaultButtons,
    LightColorButtons,
    DarkColorButtons,
    OutlineButton,
    SizeButtons,
    DualIconButton,
    StateColorButton,
    GradientButton,
    ComponentPad,
    AppsmithButtons,
    ColoredShadowButton,
    DefaultButtonSnippet,
    OutlineButtonSnippet,
    StateColorButtonSnippet,
    SizeButtonsSnippet,
    DualIconSnippet,
    LightColorButtonsSnippet,
    DarkColorButtonsSnippet,
    AppsmithButtonSnippet,
    GradientButtonSnippet,
    ColoredShadowButtonSnippet,
  },
  data() {
    return {
      default_btn: false,
      outline_btn: false,
      state_color_btn: false,
      size_btn: false,
      dual_icon_btn: false,
      light_color_btn: false,
      dark_color_btn: false,
      gradient_btn: false,
      colored_shadow_btn: false,
      appsmith_btn: false,     
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document
        .getElementById("buttonsContainer")
        .scrollTo({
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
