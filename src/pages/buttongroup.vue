<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-10 h-screen px-4 overflow-y-hidden scrollBar">
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
          <!-- Default buttonGroup -->
          <section id="defaultbuttonGroup">
          <SubHeading>
            <template v-slot:subHeader
              >Default button group</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_buttonGroup"
                @click.native="default_buttonGroup = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_buttonGroup = false"
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
          <span v-show="default_buttonGroup" class="transition-all">
           <DefaultButtonGroupSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end default buttonGroup -->
          <!-- Outline buttonGroup -->
          <section id="OutlinebuttonGroup">
          <SubHeading>
            <template v-slot:subHeader
              >Outlined button group</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!outline_buttonGroup"
                @click.native="outline_buttonGroup = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="outline_buttonGroup = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            
              <OutlineButtonGroup />
            
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="outline_buttonGroup" class="transition-all">
           <DefaultButtonGroupSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Outline buttonGroup -->
          <!-- Outline icon buttonGroup -->
          <section id="OutlinebuttonGroup">
          <SubHeading>
            <template v-slot:subHeader
              >Outlined with icon</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!outlineicon_buttonGroup"
                @click.native="outlineicon_buttonGroup = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="outlineicon_buttonGroup = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
              <OutlineIconButtonGroup />
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="outlineicon_buttonGroup" class="transition-all">
           <OutlineIconSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Outline icon buttonGroup -->
          <!-- icon buttonGroup -->
          <section id="iconbuttonGroup">
          <SubHeading>
            <template v-slot:subHeader
              >Icon</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!icon_buttonGroup"
                @click.native="icon_buttonGroup = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="icon_buttonGroup = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
              <IconButtonGroup />
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="icon_buttonGroup" class="transition-all">
           <IconButtonGroupsnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end icon buttonGroup -->


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
                Default button group
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
import OutlineButtonGroup from "../components/ButtonGroup/OutlineButtonGroup.vue";
import OutlineIconButtonGroup from "../components/ButtonGroup/OutlineIconButtonGroup.vue";
import IconButtonGroup from "../components/ButtonGroup/IconButtonGroup.vue";
import DefaultButtonGroupSnippet from "../components/ButtonGroup/CodeSnippet/DefaultButtonGroupSnippet.vue";
import OutlineButtonGroupSnippet from "../components/ButtonGroup/CodeSnippet/OutlineButtonGroupSnippet.vue";
import OutlineIconSnippet from "../components/ButtonGroup/CodeSnippet/OutlineIconSnippet.vue";
import IconButtonGroupsnippet from "../components/ButtonGroup/CodeSnippet/IconButtonGroupsnippet.vue";

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
    DefaultButtonGroup,
    OutlineButtonGroup,
    OutlineIconButtonGroup,
    IconButtonGroup,
    DefaultButtonGroupSnippet,
    OutlineButtonGroupSnippet,
    OutlineIconSnippet,
    IconButtonGroupsnippet,
    
  },
  data() {
    return {
      default_buttonGroup: false,
      outline_buttonGroup: false,
      outlineicon_buttonGroup: false,
      icon_buttonGroup: false,
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
