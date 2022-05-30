<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
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
          <SubHeading>
            <template v-slot:subHeader
              >Default Navbar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultNavbar />
            </template>
          </ComponentPad>
          <!-- end default navbar -->
          <!-- Dropdown Navbar -->
          <SubHeading>
            <template v-slot:subHeader
              >Dropdown Navbar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DropdownNavbar />
            </template>
          </ComponentPad>
          <!-- end Dropdown navbar -->
          <!-- with Search Navbar -->
          <SubHeading>
            <template v-slot:subHeader
              >Navbar with search bar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SearchNavbar />
            </template>
          </ComponentPad>
          <!-- end with search bar -->
          <!-- with CTA -->
          <SubHeading>
            <template v-slot:subHeader
              >Navbar with CTA</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <CtaNavbar />
            </template>
          </ComponentPad>
          <!-- end with CTA -->

        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <NavbarInfo />
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
    CtaNavbar


  },
};
</script>

<style>

</style>
