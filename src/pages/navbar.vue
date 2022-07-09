<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="navbarContainer">
          <Heading
            ><template>
              Navbar
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
              >Default Navbar</template
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
              <DefaultNavbar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="default_navbar" class="transition-all">
            <DefaultNavbarCodeSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end default navbar -->

          <!-- Dropdown Navbar -->
          <section id="dropdownNavbar">
          <SubHeading>
            <template v-slot:subHeader
              >Dropdown Navbar</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!dropdown_navbar"
                @click.native="dropdown_navbar = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="dropdown_navbar = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DropdownNavbar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="dropdown_navbar" class="transition-all">
            <DropdownNavbarCodeSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Dropdown navbar -->

          <!-- with Search Navbar -->
          <section id="navbarWithSearchBar">
          <SubHeading>
            <template v-slot:subHeader
              >Navbar with search bar</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!searchbar_navbar"
                @click.native="searchbar_navbar = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="searchbar_navbar = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <SearchNavbar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="searchbar_navbar" class="transition-all">
            <SearchNavbarCodeSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end with search bar -->
          <!-- with CTA -->
          <section id="NavbarWithCta">
          <SubHeading>
            <template v-slot:subHeader
              >Navbar with CTA</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!cta_navbar"
                @click.native="cta_navbar = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="cta_navbar = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <CtaNavbar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="cta_navbar" class="transition-all">
            <CtaNavbarCodeSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end with CTA -->
          <!-- with CTA -->
          <section id="gumroadNavbar">
          <SubHeading>
            <template v-slot:subHeader
              >Gumroad navbar</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!gumroad_navbar"
                @click.native="gumroad_navbar = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="gumroad_navbar = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <GumroadNavbar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
                    <span v-show="gumroad_navbar" class="transition-all">
          <GumroadNavbarCodeSnippet />
                    </span>
                    </section>
          <!-- code snippet end -->
          <!-- end with gumroad -->
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
import NavbarInfo from "../components/Navbar/NavbarInfo.vue";
import DefaultNavbar from "../components/Navbar/DefaultNavbar.vue";
import DropdownNavbar from "../components/Navbar/DropdownNavbar.vue";
import SearchNavbar from "../components/Navbar/SearchNavbar.vue";
import CtaNavbar from "../components/Navbar/CtaNavbar.vue";
import GumroadNavbar from "../components/Navbar/GumroadNavbar.vue";
import DropdownNavbarCodeSnippet from "../components/Navbar/CodeSnippets/DropdownNavbarCodeSnippet.vue";
import CtaNavbarCodeSnippet from "../components/Navbar/CodeSnippets/CtaNavbarCodeSnippet.vue";
import DefaultNavbarCodeSnippet from "../components/Navbar/CodeSnippets/DefaultNavbarCodeSnippet.vue";
import GumroadNavbarCodeSnippet from "../components/Navbar/CodeSnippets/GumroadNavbarCodeSnippet.vue";
import SearchNavbarCodeSnippet from "../components/Navbar/CodeSnippets/SearchNavbarCodeSnippet.vue";

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    NavbarInfo,
    DefaultNavbar,
    DropdownNavbar,
    SearchNavbar,
    CtaNavbar,
    GumroadNavbar,
    DropdownNavbarCodeSnippet,
    CtaNavbarCodeSnippet,
    DefaultNavbarCodeSnippet,
    GumroadNavbarCodeSnippet,
    SearchNavbarCodeSnippet,
  },
  data() {
    return {
      default_navbar: false,
      dropdown_navbar: false,
      searchbar_navbar: false,
      cta_navbar: false,
      gumroad_navbar: false,
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document
        .getElementById("navbarContainer")
        .scrollTo({
          top: document.getElementById(`${section}`).offsetTop - 100,
          behavior: "smooth",
        });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
  },
};
</script>

<style></style>
