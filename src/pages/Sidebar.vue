<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4 pb-20">
          <Heading
            ><template>
              Toast
            </template>
          </Heading>
          <div>
            <p class="text-base">
              The side-menu can be more useful for actions that a user will take more frequently.You can include multiple menu items, They’re not difficult to scale and change, All the element is noticeable, They adjust to all screen sizes.
            </p>
          </div>
          <!-- Default Sidebar -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Sidebar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultSidebar />
            </template>
          </ComponentPad>
          <!-- end default Sidebar -->
          <!-- Sidebar with badge -->
          <SubHeading>
            <template v-slot:subHeader
              >Sidebar with badge</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SidebarWithBadge />
            </template>
          </ComponentPad>
          <!-- end Sidebar with badge -->
          <!-- Sidebar with separator -->
          <SubHeading>
            <template v-slot:subHeader
              >Sidebar with content separator</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SeparatorSidebar />
            </template>
          </ComponentPad>
          <!-- end Sidebar with separator -->
     
         
 

        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <SidebarInfo />
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


  },
};
</script>

<style>

</style>
