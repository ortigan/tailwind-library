<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex-1 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Toast
            </template>
          </Heading>
          <div>
            <p class="text-base">
              The side-menu can be more useful for actions that a user will take more frequently.
            </p>
          </div>
          <!-- Default Toast -->
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
          <!-- end default Toast -->
     
         
 

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



export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    SidebarInfo,
    DefaultSidebar,


  },
};
</script>

<style>

</style>
