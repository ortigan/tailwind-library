<template>
  <Layout>
    <div class="">
      <div class="flex p-4">
        <!-- content -->
        <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading />
            <div>
              <p class="text-base font-primary">
                Use the button component inside forms, as links, social login,
                payment options with support for multiple styles, colors, sizes,
                gradients, and shadows
              </p>
            </div>
            <!-- Default buttons -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Default</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <DefaultButtons />
            </div>
         
            
            <!-- End of default buttons -->
            <!-- Outline buttons -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Outline</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <ComponentPad>
              <template>
                <OutlineButton />
              </template>
            </ComponentPad>
            <!-- end or Outline Button -->
            <!-- OutlineState Button -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Buttons with state colors</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <ComponentPad>
              <template>
                <StateColorButton />
              </template>
            </ComponentPad>
            <!-- end or OutlineState Button -->
            <!-- Buttons sizes -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Sizes</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <ComponentPad>
              <template>
                <SizeButtons />
              </template>
            </ComponentPad>
            <!--End Buttons sizes -->
            <!-- Dual icon buttons -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Dual icon buttons</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <ComponentPad>
              <template>
                <DualIconButton />
              </template>
            </ComponentPad>
            <!--End Dual icon buttons   -->
            <!-- Light Color buttons -->
            <div class="py-4 font-bold text-xl">Light Color buttons</div>
            <div
              class=" pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <LightColorButtons />
            </div>
            <!-- Dark Color buttons -->
            <div class="py-4 font-bold text-xl">Dark Color buttons</div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <DarkColorButtons />
            </div>
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
import DualIconButton from "../components/Button/DualIconButton.vue";
import Heading from "../components/Headers/Heading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    ButtonInfo,
    Heading,
    DefaultButtons,
    LightColorButtons,
    DarkColorButtons,
    OutlineButton,
    SizeButtons,
    DualIconButton,
    StateColorButton,
    ComponentPad,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
