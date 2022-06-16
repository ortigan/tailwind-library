<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Breadcrumb
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
          <!-- Default Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Breadcrumb</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <DefaultBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end default Breadcrumb -->
          <!-- with arrow Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >With Arrow</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <ArrowBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <ArrowBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end with arrow Breadcrumb -->
          <!-- with Icon Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >With Icon</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <IconBreadCrumb />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <IconBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end with Icon Breadcrumb -->
          <!-- Solid background Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >Solid background</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SolidBgBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <SolidBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end Solid background Breadcrumb -->
          <!-- Outline Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >Outline</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <OutlineBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <OutlineBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end Outline Breadcrumb -->
          <!-- Alignment Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >Alignment</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <AlignmentBreadCrumb />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <AlignmentBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end Alignment Breadcrumb -->
          <!-- Separator Breadcrumb -->
          <SubHeading>
            <template v-slot:subHeader
              >Separator</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SeparatorBreadCrumb />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <SeparatorBreadCrumbSnippet />
          <!-- code snippet end --->
          <!-- end Separator Breadcrumb -->
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
import BreadCrumbInfo from "../components/BreadCrumb/BreadCrumbInfo.vue";
import DefaultBreadCrumb from "../components/BreadCrumb/DefaultBreadCrumb.vue";
import ArrowBreadCrumb from "../components/BreadCrumb/ArrowBreadCrumb.vue";
import IconBreadCrumb from "../components/BreadCrumb/IconBreadCrumb.vue";
import SolidBgBreadCrumb from "../components/BreadCrumb/SolidBgBreadCrumb.vue";
import AlignmentBreadCrumb from "../components/BreadCrumb/AlignmentBreadCrumb.vue";
import SeparatorBreadCrumb from "../components/BreadCrumb/SeparatorBreadCrumb.vue";
import OutlineBreadCrumb from "../components/BreadCrumb/OutlineBreadCrumb.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import DefaultBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/DefaultBreadCrumbSnippet.vue';
import ArrowBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/ArrowBreadCrumbSnippet.vue';
import IconBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/IconBreadCrumbSnippet.vue';
import SolidBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/SolidBreadCrumbSnippet.vue';
import OutlineBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/OutlineBreadCrumbSnippet.vue';
import AlignmentBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/AlignmentBreadCrumbSnippet.vue';
import SeparatorBreadCrumbSnippet from '../components/BreadCrumb/CodeSnippet/SeparatorBreadCrumbSnippet.vue';

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    BreadCrumbInfo,
    DefaultBreadCrumb,
    ArrowBreadCrumb,
    IconBreadCrumb,
    SolidBgBreadCrumb,
    AlignmentBreadCrumb,
    SeparatorBreadCrumb,
    OutlineBreadCrumb,
    DefaultBreadCrumbSnippet,
    ArrowBreadCrumbSnippet,
    IconBreadCrumbSnippet,
    SolidBreadCrumbSnippet,
    OutlineBreadCrumbSnippet,
    AlignmentBreadCrumbSnippet,
    SeparatorBreadCrumbSnippet,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
