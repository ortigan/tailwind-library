<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4 pb-20" id="sidebarContainer">
          <Heading><template> Toast </template> </Heading>
          <div>
            <p class="text-base">
              The side-menu can be more useful for actions that a user will take
              more frequently.You can include multiple menu items, They’re not
              difficult to scale and change, All the element is noticeable, They
              adjust to all screen sizes.
            </p>
          </div>
          <!-- Default Sidebar -->
          <section id="defaultSidebar">
            <SubHeading>
              <template v-slot:subHeader>Default Sidebar</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!default_sidebar"
                  @click.native="default_sidebar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="default_sidebar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DefaultSidebar />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="default_sidebar" class="transition-all">
              <DefaultSidebarSnippet />
            </span>
          </section>
          <!-- code snippet end --->
          <!-- end default Sidebar -->
          <!-- Sidebar with badge -->
          <section id="sidebarWithBadge">
            <SubHeading>
              <template v-slot:subHeader>Sidebar with badge</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!badge_sidebar"
                  @click.native="badge_sidebar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="badge_sidebar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <SidebarWithBadge />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="badge_sidebar" class="transition-all">
              <SidebarBadgeSnippet />
            </span>
          </section>
          <!-- code snippet end --->
          <!-- end Sidebar with badge -->
          <!-- Sidebar with separator -->
          <section id="contentSeparator">
            <SubHeading>
              <template v-slot:subHeader
                >Sidebar with content separator</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!separator_sidebar"
                  @click.native="separator_sidebar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="separator_sidebar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <SeparatorSidebar />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="separator_sidebar" class="transition-all">
              <SeparatorSidebarSnippet />
            </span>
          </section>
          <!-- code snippet end --->
          <!-- end Sidebar with separator -->
          <!-- Sidebar with Sectioned -->
          <section id="contentSectionedAvatar">
            <SubHeading>
              <template v-slot:subHeader
                >Sidebar with content Sectioned and avatar</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!sectioned_sidebar"
                  @click.native="sectioned_sidebar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="sectioned_sidebar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <SectionedSidebar />
              </template>
            </ComponentPad>
            <!-- code snippet --->
            <span v-show="sectioned_sidebar" class="transition-all">
              <SectionedSidebarSnippet />
            </span>
          </section>
          <!-- code snippet end --->
          <!-- end Sidebar with Sectioned -->
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
              <button @click="scrollToSection('defaultSidebar')">
                Default Sidebar
              </button>
              <button @click="scrollToSection('sidebarWithBadge')">
                Sidebar With Badge
              </button>
              <button @click="scrollToSection('contentSeparator')">
                Content separator
              </button>
              <button @click="scrollToSection('contentSectionedAvatar')" class="text-right">
                Content Sectioned and avatar
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
import SidebarInfo from "../components/Sidebar/SidebarInfo.vue";
import DefaultSidebar from "../components/Sidebar/DefaultSidebar.vue";
import SidebarWithBadge from "../components/Sidebar/SidebarWithBadge.vue";
import SeparatorSidebar from "../components/Sidebar/SeparatorSidebar.vue";
import SectionedSidebar from "../components/Sidebar/SectionedSidebar.vue";
import DefaultSidebarSnippet from "../components/Sidebar/CodeSnippet/DefaultSidebarSnippet.vue";
import SidebarBadgeSnippet from "../components/Sidebar/CodeSnippet/SidebarBadgeSnippet.vue";
import SeparatorSidebarSnippet from "../components/Sidebar/CodeSnippet/SeparatorSidebarSnippet.vue";
import SectionedSidebarSnippet from "../components/Sidebar/CodeSnippet/SectionedSidebarSnippet.vue";

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    SidebarInfo,
    DefaultSidebar,
    SeparatorSidebar,
    SidebarWithBadge,
    SectionedSidebar,
    DefaultSidebarSnippet,
    SidebarBadgeSnippet,
    SeparatorSidebarSnippet,
    SectionedSidebarSnippet,
  },
  data() {
    return {
      default_sidebar: false,
      badge_sidebar: false,
      separator_sidebar: false,
      sectioned_sidebar: false,
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("sidebarContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
  },
};
</script>

<style></style>
