<template>
  <Layout>
    <div class="">
      <div class="flex p-4">
        <!-- content -->
        <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultButtons />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="default_btn" class="transition-all">
          <DefaultButtonSnippet />
          </span>
          <!-- code snippet end --->
            <!-- End of default buttons -->
            <!-- Outline buttons -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <OutlineButton />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="outline_btn" class="transition-all">
            <OutlineButtonSnippet />
            </span>
            <!-- code snippet end --->
            <!-- end or Outline Button -->
            <!-- OutlineState Button -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <StateColorButton />
              </template>
            </ComponentPad>
              <!-- code snippet --->
              <span v-show="state_color_btn" class="transition-all">
            <StateColorButtonSnippet />
              </span>
            <!-- code snippet end --->
            <!-- end or OutlineState Button -->
            <!-- Buttons sizes -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <SizeButtons />
              </template>
            </ComponentPad>
             <!-- code snippet --->
             <span v-show="size_btn" class="transition-all">
            <SizeButtonsSnippet />
             </span>
            <!-- code snippet end --->
            <!--End Buttons sizes -->
            <!-- Dual icon buttons -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <DualIconButton />
              </template>
            </ComponentPad>
              <!-- code snippet --->
            <span v-show="dual_icon_btn" class="transition-all">
            <DualIconSnippet />
            </span>
            <!-- code snippet end --->
            <!--End Dual icon buttons   -->
            <!-- Light color buttons -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <LightColorButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="light_color_btn" class="transition-all">
            <LightColorButtonsSnippet />
            </span>
            <!-- code snippet end --->
            <!--End Light color buttons   -->
            <!-- Dark color buttons -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <DarkColorButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="dark_color_btn" class="transition-all">
            <DarkColorButtonsSnippet />
            </span>
            <!-- code snippet end --->
            <!--End Dark color buttons   -->
            <!-- Dark color buttons -->
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
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
            <ComponentPad>
              <template>
                <AppsmithButtons />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="appsmith_btn" class="transition-all">
            <AppsmithButtonSnippet />
            </span>
            <!-- code snippet end --->
            <!--End Dark color buttons   -->
         
            <!-- end -->
          </div>
        </div>

        <!-- right sidebar -->
        <div class="hidden lg:block">
          <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
            <div class="overflow-y-auto w-full flex justify-end">
              <ButtonInfo />
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
import ButtonInfo from "../components/Button/ButtonInfo.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import DualIconButton from "../components/Button/DualIconButton.vue";
import AppsmithButtons from "../components/Button/AppsmithButtons.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import DefaultButtonSnippet from "../components/Button/CodeSnippet/DefaultButtonSnippet.vue";
import OutlineButtonSnippet from "../components/Button/CodeSnippet/OutlineButtonSnippet.vue";
import StateColorButtonSnippet from "../components/Button/CodeSnippet/StateColorButtonSnippet.vue";
import SizeButtonsSnippet from "../components/Button/CodeSnippet/SizeButtonsSnippet.vue";
import DualIconSnippet from "../components/Button/CodeSnippet/DualIconSnippet.vue";
import LightColorButtonsSnippet from "../components/Button/CodeSnippet/LightColorButtonsSnippet.vue";
import DarkColorButtonsSnippet from "../components/Button/CodeSnippet/DarkColorButtonsSnippet.vue";
import AppsmithButtonSnippet from "../components/Button/CodeSnippet/AppsmithButtonSnippet.vue";
export default {
  metaInfo: {
    title: "Buttons",
  },
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
    ComponentPad,
    AppsmithButtons,
    DefaultButtonSnippet,
    OutlineButtonSnippet,
    StateColorButtonSnippet,
    SizeButtonsSnippet,
    DualIconSnippet,
    LightColorButtonsSnippet,
    DarkColorButtonsSnippet,
    AppsmithButtonSnippet
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
      appsmith_btn: false,
     
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
