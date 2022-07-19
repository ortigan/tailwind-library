<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="alertContainer">
          <HeadersHeading> Button  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardCta />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultCard')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultCard" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default Card -->
          <!-- Cta Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>CTA</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultCta')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultCta" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Cta Card -->
          <!-- Link Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Link</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardLink />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultLink')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultLink" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Link Card -->
          <!-- DefaultUser Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default User</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardDefaultUser />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultDefaultUser')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultDefaultUser" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End DefaultUser Card -->
          <!-- Type1 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 1</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType1 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType1')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType1" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type1 Card -->
          <!-- Type2 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 2</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType2 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType2')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType2" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type2 Card -->
          <!-- Type3 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 3</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType3 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType3')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType3" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type3 Card -->
          <!-- Type4 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 4</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType4 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType4')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType4" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type4 Card -->
          <!-- Type5 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 5</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType5 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType5')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType5" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type5 Card -->
          <!-- Type6 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 6</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType6 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType6')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType6" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type6 Card -->
          <!-- Type7 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 7</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType7 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType7')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType7" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type7 Card -->
          <!-- Type8 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 8</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType8 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType8')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType8" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type8 Card -->
          <!-- Type9 Button -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 9</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_btn"
                  @click="default_btn = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_btn = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType9 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_btn" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultType9')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonSnippetsDefault id="defaultType9" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type9 Card -->
          
          
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
              <button @click="scrollToSection('defaultCard')">
                Card
              </button>
              <button @click="scrollToSection('cardWithCta')">
                CTA
              </button>
              <button @click="scrollToSection('cardWithLink')">
                Link
              </button>
              <button @click="scrollToSection('defaultUserCard')">
                User Card
              </button>
              <button @click="scrollToSection('type1')">
               Type 1
              </button>
              <button @click="scrollToSection('type2')">
                Type 2
              </button>
              <button @click="scrollToSection('type3')">
                Type 3
              </button>
              <button @click="scrollToSection('type4')">
                Type 4
              </button>
              <button @click="scrollToSection('type5')">
               Type 5
              </button>
              <button @click="scrollToSection('type6')">
                Type 6
              </button>
              <button @click="scrollToSection('type7')">
                Type 7
              </button>
              <button @click="scrollToSection('type8')">
                Type 8
              </button>
              <button @click="scrollToSection('type9')">
                Type 9
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
 default_btn: false,
      outline_btn: false,
      statecolor_btn: false,
      size_btn: false,
      dual_icon_btn: false,
      light_color_btn: false,
      dark_color_btn: false,
      gradient_btn: false,
      colored_shadow_btn: false,
      appsmith_btn: false,  
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
