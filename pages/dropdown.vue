<template>
  <NuxtLayout :name="layout">
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="dropdownContainer">
          <HeadersHeading> Dropdown  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start -->
          <section id="iconFirstDropdown" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_footer"
                  @click="default_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <div class="grid gri-flow-col grid-cols-3 gap-4 w-full">
                  <div><DropdownWithIcon /></div>
                  <div><DropdownNoIcon /></div>
                  <div><DropdownOnlyHeading /></div>
              </div>
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('iconFirstDropdownComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <DropdownSnippetsWithIcon id="iconFirstDropdownComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="profileDropdown" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_footer"
                  @click="default_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <DropdownProfile />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('profileDropdownComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <DropdownSnippetsProfile id="profileDropdownComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="ytDropdown" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_footer"
                  @click="default_footer = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_footer = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <DropdownDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_footer" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('ytDropdownComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <DropdownSnippetsDefault id="ytDropdownComp" />
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
              <button @click="scrollToSection('iconFirstDropdown')">
                Icon First Dropdown
              </button>
              <button @click="scrollToSection('profileDropdown')">
                Profile Dropdown
              </button>
              <button @click="scrollToSection('ytDropdown')">
                Youtube Dropdown
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
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("dropdownContainer").scrollTo({
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
