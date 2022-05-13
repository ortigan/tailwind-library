<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading><template>
              Breadcrumb
              </template> </Heading>
            <div>
          <p class="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
<!-- Default avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Default avatar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultBreadCrumb />
            </template>
          </ComponentPad>
          <!-- end default avatar -->


  
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <BreadCrumbInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BreadCrumbInfo from '../components/BreadCrumb/BreadCrumbInfo.vue';
import DefaultBreadCrumb from '../components/BreadCrumb/DefaultBreadCrumb.vue';
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";


export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    BreadCrumbInfo,
    DefaultBreadCrumb   
   
  },
};

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
