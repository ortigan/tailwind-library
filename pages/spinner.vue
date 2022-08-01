<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen lg:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="navbarContainer">
          <HeadersHeading> Spinner  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start default-->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_spinner"
                  @click="default_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsDefault id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default -->
          <!-- start colors-->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Colors</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!colors_spinner"
                  @click="colors_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="colors_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerColors />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colors_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsDefault id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start Size-->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Size</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!Size_spinner"
                  @click="Size_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="Size_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerSize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colors_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsDefault id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start Variants-->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Variants</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!variant_spinner"
                  @click="variant_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="variant_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerVariants />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colors_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsVariants id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  Button-->
          <!-- start Button-->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Button</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!Button_spinner"
                  @click="Button_spinner = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="Button_spinner = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <SpinnerButton />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="colors_spinner" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <SpinnerSnippetsDefault id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  Button-->
                  
           
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
                Default Navbar
              </button>
              <button @click="scrollToSection('dropdownNavbar')">
                Dropdown Navbar
              </button>
              <button @click="scrollToSection('navbarWithSearchBar')" class="text-right">
                Navbar With Search Bar
              </button>
              <button @click="scrollToSection('NavbarWithCta')">
                Navbar With CTA
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
import AlertInfo from "../components/Alert/AlertInfo.vue";
import Heading from "../components/Headers/Heading.vue";
export default {
  metaInfo: {
    title: "Rating",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      default_spinner: false,
      colors_spinner: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("navbarContainer").scrollTo({
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
