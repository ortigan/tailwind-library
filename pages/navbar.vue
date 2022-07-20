<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="navbarContainer">
          <HeadersHeading> Form  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start -->
          <section id="defaultNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_navbar"
                  @click="default_navbar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_navbar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <NavbarDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_navbar" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
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
                <NavbarSnippetsDefault id="defaultNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="dropdownNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Dropdown</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!dropdown_navbar"
                  @click="dropdown_navbar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="dropdown_navbar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <NavbarDropdown />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="dropdown_navbar" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('dropdownNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <NavbarSnippetsDropdown id="dropdownNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="navbarWithSearchBar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Searchbar</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!searchbar_navbar"
                  @click="searchbar_navbar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="searchbar_navbar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <NavbarSearch />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="searchbar_navbar" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('navbarWithSearchBarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <NavbarSnippetsSearch id="navbarWithSearchBarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="NavbarWithCta" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>CTA</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!cta_navbar"
                  @click="cta_navbar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="cta_navbar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <NavbarCta />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="cta_navbar" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('NavbarWithCtaComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <NavbarSnippetsCta id="NavbarWithCtaComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="gumroadNavbar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Gumroad</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!gumroad_navbar"
                  @click="gumroad_navbar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="gumroad_navbar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <NavbarGumroad />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="gumroad_navbar" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('gumroadNavbarComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <NavbarSnippetsGumroad id="gumroadNavbarComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->                
                  
           
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
      default_navbar: false,
      dropdown_navbar: false,
      searchbar_navbar: false,
      cta_navbar: false,
      gumroad_navbar: false,
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
