<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4 lg:py-4">
      <!-- content -->
      <div class="flex pb-20 h-screen lg:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="alertContainer">
          <HeadersHeading> Button  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default card -->
          <section id="defaultCard" class="w-full">
            <!-- <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_card"
                  @click="default_card = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_card = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardCta />
            </UtilsComponentPad> -->
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_card" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardSnippetsDefault id="defaultCard" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default Card -->
          <!-- Cta Button -->
          <section id="cardWithCta" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>CTA</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!cta_card"
                  @click="cta_card = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="cta_card = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="cta_card" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardSnippetsCta id="defaultCta" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Cta Card -->
          <!-- Link Button -->
          <section id="cardWithLink" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Link</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!link_card"
                  @click="link_card = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="link_card = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardLink />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="link_card" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardSnippetsLink id="defaultLink" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Link Card -->
          <!-- DefaultUser Button -->
          <section id="defaultUserCard" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default User</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_user_card"
                  @click="default_user_card = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_user_card = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardDefaultUser />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_user_card" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsDefaultUser id="defaultDefaultUser" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End DefaultUser Card -->
          <!-- Type1 Button -->
          <section id="type1" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 1</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card1"
                  @click="user_card1 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card1 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType1 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card1" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType1 id="defaultType1" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type1 Card -->
          <!-- Type2 Button -->
          <section id="type2" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 2</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card2"
                  @click="user_card2 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card2 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType2 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card2" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType2 id="defaultType2" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type2 Card -->
          <!-- Type3 Button -->
          <section id="type3" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 3</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card3"
                  @click="user_card3 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card3 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType3 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card3" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType3 id="defaultType3" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type3 Card -->
          <!-- Type4 Button -->
          <section id="type4" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 4</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card4"
                  @click="user_card4 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card4 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType4 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card4" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType4 id="defaultType4" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type4 Card -->
          <!-- Type5 Button -->
          <section id="type5" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 5</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card5"
                  @click="user_card5 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card5 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType5 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card5" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType5 id="defaultType5" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type5 Card -->
          <!-- Type6 Button -->
          <section id="type6" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 6</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card6"
                  @click="user_card6 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card6 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType6 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card6" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType6 id="defaultType6" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type6 Card -->
          <!-- Type7 Button -->
          <section id="type7" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 7</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card7"
                  @click="user_card7 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card7 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType7 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card7" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType7 id="defaultType7" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type7 Card -->
          <!-- Type8 Button -->
          <section id="type8" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 8</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card8"
                  @click="user_card8 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card8 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType8 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card8" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType8 id="defaultType8" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Type8 Card -->
          <!-- Type9 Button -->
          <section id="type9" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>User card <span class="font-normal text-gray-400">type 9</span></template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!user_card9"
                  @click="user_card9 = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="user_card9 = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CardUserCardType9 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="user_card9" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <CardUserCardSnippetsType9 id="defaultType9" />
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
 default_card: false,
      cta_card: false,
      link_card: false,
      default_user_card: false,
      user_card1: false,
      user_card2: false,
      user_card3: false,
      user_card4: false,
      user_card5: false,
      user_card6: false,
      user_card7: false,
      user_card8: false,
      user_card9: false,
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
