<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="navbarContainer">
          <Heading
            ><template>
              Button group
            </template>
          </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Navbar -->
          <section id="defaultNavbar">
          <SubHeading>
            <template v-slot:subHeader
              >Default button group</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_navbar"
                @click.native="default_navbar = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_navbar = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultButtonGroup />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="default_navbar" class="transition-all">
           
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end default navbar -->


        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2">
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
  </Layout>
</template>

<script>

import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import DefaultButtonGroup from "../components/ButtonGroup/DefaultButtonGroup.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
  components: {
    Heading,
    SubHeading,
    ComponentPad,
    DefaultButtonGroup
    
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
      colored_shadow_btn    : false,
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
