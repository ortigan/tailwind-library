<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="alertContainer">
          <HeadersHeading> Badge  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Badge -->
          <section id="defaultBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_badge"
                  @click="default_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsDefault id="defaultBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default Badge -->
          <!-- Large Badge -->
          <section id="largeBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Large</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!large_badge"
                  @click="large_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="large_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeLarge />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="large_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('LargeBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsLarge id="LargeBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Large Badge -->
          <!-- State Badge -->
          <section id="StateColor" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>State color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!state_badge"
                  @click="state_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="state_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeStateColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="state_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('StateBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsStateColor id="StateBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End State Badge -->
          <!-- Outline Badge -->
          <section id="outlineBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Outline </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!outline_badge"
                  @click="outline_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="outline_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="outline_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('OutlineBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsOutline id="OutlineBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Outline Badge -->
          <!-- Pill Badge -->
          <section id="pillBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Pill </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!pill_badge"
                  @click="pill_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="pill_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgePill />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="pill_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('PillBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsPill id="PillBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Pill Badge -->
          <!-- PillOutline Badge -->
          <section id="pillBadgeOutline" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>PillOutline </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!pilloutline_badge"
                  @click="pilloutline_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="pilloutline_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgePillOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="pilloutline_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('PillOutlineBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsPillOutline id="PillOutlineBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End PillOutline Badge -->
          <!-- Rectangle Badge -->
          <section id="rectangleBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Rectangle </template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!rectangle_badge"
                  @click="rectangle_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="rectangle_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeRectangle />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="rectangle_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('RectangleBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsRectangle id="RectangleBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Rectangle Badge -->
          <!-- Cancel Badge -->
          <section id="badgeWithCancelButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>With cancel button</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!cancel_badge"
                  @click="cancel_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="cancel_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeCancel />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="cancel_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('CancelBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsCancel id="CancelBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Cancel Badge -->
          <!-- Link Badge -->
          <section id="badgeAsLink" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Badges as link</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!link_badge"
                  @click="link_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="link_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeLink />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="link_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('LinkBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsLink id="LinkBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Link Badge -->
          <!-- Size Badge -->
          <section id="BadgeAsSizes" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Size</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!size_badge"
                  @click="size_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="size_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeSize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="size_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('SizeBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsSize id="SizeBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Size Badge -->
          <!-- Positioned Badge -->
          <section id="positionedBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Positioned</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!positioned_badge"
                  @click="positioned_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="positioned_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgePositioned />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="positioned_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('PositionedBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsPositioned id="PositionedBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Positioned Badge -->
          <!-- Text Badge -->
          <section id="textBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Text</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!text_badge"
                  @click="text_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="text_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeText />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="text_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('TextBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsText id="TextBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Text Badge -->
          <!-- Icon Badge -->
          <section id="iconBadge" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Icon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!icon_badge"
                  @click="icon_badge = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="icon_badge = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BadgeIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="icon_badge" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('IconBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BadgeSnippetsIcon id="IconBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Icon Badge -->

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
              <button @click="scrollToSection('defaultBadge')">
                Default Badge
              </button>
              <button @click="scrollToSection('largeBadge')">
                Large Badge
              </button>
              <button @click="scrollToSection('StateColor')">
                Badge State Color
              </button>
              <button @click="scrollToSection('outlineBadge')">
                Outline Badge
              </button>
              <button @click="scrollToSection('pillBadge')">
                Pill Badge
              </button>
              <button @click="scrollToSection('pillBadgeOutline')">
                Pill Outline Badge 
              </button>
              <button @click="scrollToSection('rectangleBadge')">
                Rectangle Badge 
              </button>
              <button @click="scrollToSection('badgeWithCancelButton')" class="text-right">
                Cancel Button
              </button>
              <button @click="scrollToSection('badgeAsLink')">
                Badge As Link 
              </button>
              <button @click="scrollToSection('BadgeAsSizes')">
                Badge As Sizes
              </button>
              <button @click="scrollToSection('positionedBadge')">
                Positioned badge
              </button>
              <button @click="scrollToSection('textBadge')">
                Text Badge
              </button>
              <button @click="scrollToSection('iconBadge')">
                Icon Badge
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
      default_badge: false,
      large_badge: false,
      outline_badge: false,
      state_badge: false,
      pill_badge: false,
      pilloutline_badge: false,
      rectangle_badge: false,
      cancel_badge: false,
      link_badge: false,
      size_badge: false,
      positioned_badge: false,
      text_badge: false,
      icon_badge: false,
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
