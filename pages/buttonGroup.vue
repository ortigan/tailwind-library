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
          <!-- Default ButtonGroup -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_buttonGroup"
                  @click="default_buttonGroup = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_buttonGroup = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonGroupDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_buttonGroup" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonGroupSnippetsDefault id="defaultButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default ButtonGroup -->
          <!-- outline ButtonGroup -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Outline</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!outline_buttonGroup"
                  @click="outline_buttonGroup = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="outline_buttonGroup = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonGroupOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="outline_buttonGroup" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('outlineButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonGroupSnippetsOutline id="outlineButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End outline ButtonGroup -->
          <!-- OutlineIcon ButtonGroup -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>OutlineIcon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!outlineicon_buttonGroup"
                  @click="outlineicon_buttonGroup = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="outlineicon_buttonGroup = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonGroupOutlineIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="outlineicon_buttonGroup" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('OutlineIcontButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonGroupSnippetsOutlineIcon id="OutlineIcontButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End OutlineIcon ButtonGroup -->
          <!-- Icon ButtonGroup -->
          <section id="defaultButton" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Icon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!icon_buttonGroup"
                  @click="icon_buttonGroup = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="icon_buttonGroup = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <ButtonGroupIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="icon_buttonGroup" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('IontButton')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <ButtonGroupSnippetsIcon id="IontButton" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Ion ButtonGroup -->
          
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
              <button @click="scrollToSection('defaultNavbar')">
                Default
              </button>
              <button @click="scrollToSection('dropdownNavbar')">
                Outline
              </button>
              <button @click="scrollToSection('navbarWithSearchBar')" class="text-right">
                Outline Icon
              </button>
              <button @click="scrollToSection('NavbarWithCta')">
                Icon
              </button>
              <button @click="scrollToSection('gumroadNavbar')">
                Gumroad Navbar
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
import Heading from "../components/Headers/Heading.vue";
export default {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      default_buttonGroup: false,
      outline_buttonGroup: false,
      outlineicon_buttonGroup: false,
      icon_buttonGroup: false,
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
