<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="dropdownContainer">
          <Heading />
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- icon with dropdown -->
          <section id="iconFirstDropdown">
            <SubHeading>
              <template v-slot:subHeader>Icon First Dropdown</template>
            </SubHeading>
            <!-- end icon with dropdown -->
            <ComponentPad>
              <template>
                <div class="grid gri-flow-col grid-cols-3 gap-4 w-full">
                  <div><DropdownWithIcon /></div>
                  <div><DropdownNoIcon /></div>
                  <div><OnlyHeadingD /></div>
                </div>
              </template>
            </ComponentPad>
          </section>
          <!-- code snippet -->

          <!-- code snippet end -->
          <!-- profile dropdown -->
          <section id="profileDropdown">
            <SubHeading>
              <template v-slot:subHeader>
                <div>Profile dropdown(On-Click)</div></template
              >
            </SubHeading>
            <!-- profile dropdown -->
            <ComponentPad>
              <template>
                <ProfileDropdown />
              </template>
            </ComponentPad>
          </section>
          <!-- icon first dropdown -->
          <section id="ytDropdown">
            <SubHeading>
              <template v-slot:subHeader>Youtube dropdown</template>
            </SubHeading>
            <!-- end icon first dropdown -->
            <ComponentPad>
              <template><DefaultDropDead /></template>
            </ComponentPad>
          </section>
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
  </Layout>
</template>

<script>
import DefaultDropDead from "../components/DropDowns/DefaultDropDead.vue";
import DropDownInfo from "../components/DropDowns/DropDownInfo.vue";
import DropdownWithIcon from "../components/DropDowns/DropdownWithIcon.vue";
import DropdownNoIcon from "../components/DropDowns/DropdownNoIcon.vue";
import OnlyHeadingD from "../components/DropDowns/OnlyHeadingD.vue";
import ProfileDropdown from "../components/DropDowns/ProfileDropdown.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
export default {
  metaInfo: {
    title: "Dropdown",
  },
  components: {
    DefaultDropDead,
    DropDownInfo,
    DropdownWithIcon,
    DropdownNoIcon,
    OnlyHeadingD,
    ProfileDropdown,
    SubHeading,
    ComponentPad,
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
  },
};
</script>

<style>
</style>