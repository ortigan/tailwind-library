<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="breadcrumbContainer">
          <Heading><template> Breadcrumb </template> </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Breadcrumb -->
          <section id="defaultBreadcrumb">
          <SubHeading>
            <template v-slot:subHeader>Default Breadcrumb</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_breadcrumb"
                @click.native="default_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="default_breadcrumb" class="transition-all">
            <DefaultBreadCrumbSnippet id="defaultBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end default Breadcrumb -->
          <!-- with arrow Breadcrumb -->
          <section id="withArrow">
          <SubHeading>
            <template v-slot:subHeader>With Arrow</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!arrow_breadcrumb"
                @click.native="arrow_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="arrow_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('arrowBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <ArrowBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="arrow_breadcrumb" class="transition-all">
            <ArrowBreadCrumbSnippet id="arrowBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end with arrow Breadcrumb -->
          <!-- with Icon Breadcrumb -->
          <section id="withIcon">
          <SubHeading>
            <template v-slot:subHeader>With Icon</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!icon_breadcrumb"
                @click.native="icon_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="icon_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('iconBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <IconBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="icon_breadcrumb" class="transition-all">
            <IconBreadCrumbSnippet id="iconBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end with Icon Breadcrumb -->
          <!-- Solid background Breadcrumb -->
          <section id="solidBackground">
          <SubHeading>
            <template v-slot:subHeader>Solid background</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!solid_breadcrumb"
                @click.native="solid_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="solid_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('solidBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <SolidBgBreadCrumb  />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="solid_breadcrumb" class="transition-all">
            <SolidBreadCrumbSnippet id="solidBreadcrumbComp"/>
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Solid background Breadcrumb -->
          <!-- Outline Breadcrumb -->
          <section id="outlineBreadcrumb">
          <SubHeading>
            <template v-slot:subHeader>Outline</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!outline_breadcrumb"
                @click.native="outline_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="outline_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('outlineBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <OutlineBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="outline_breadcrumb" class="transition-all">
            <OutlineBreadCrumbSnippet id="outlineBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Outline Breadcrumb -->
          <!-- Alignment Breadcrumb -->
          <section id="alignmentBreadcrumb">
          <SubHeading>
            <template v-slot:subHeader>Alignment</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!alignment_breadcrumb"
                @click.native="alignment_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="alignment_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('alignmentBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <AlignmentBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="alignment_breadcrumb" class="transition-all">
            <AlignmentBreadCrumbSnippet id="alignmentBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Alignment Breadcrumb -->
          <!-- Separator Breadcrumb -->
          <section id="separatorBreadcrumb">
          <SubHeading>
            <template v-slot:subHeader>Separator</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!separator_breadcrumb"
                @click.native="separator_breadcrumb = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="separator_breadcrumb = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('separatorBreadcrumbComp')"></CopyButton></template>
          </SubHeading>
          <ComponentPad>
            <template>
              <SeparatorBreadCrumb />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="separator_breadcrumb" class="transition-all">
            <SeparatorBreadCrumbSnippet id="separatorBreadcrumbComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Separator Breadcrumb -->
        </div>
      </div>
      <!-- right breadcrumb -->
      <div class="hidden lg:block">
        <div
          class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"
        >
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
            <div class="flex flex-col justify-start items-end space-y-2">
              <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultBreadcrumb')">
                Default Breadcrumb
              </button>
              <button @click="scrollToSection('withArrow')">
                With Arrow
              </button>
              <button @click="scrollToSection('withIcon')">
                WIth Icon
              </button>
              <button @click="scrollToSection('solidBackground')">
                Solid Background
              </button>
              <button @click="scrollToSection('outlineBreadcrumb')">
                Outline
              </button>
              <button @click="scrollToSection('alignmentBreadcrumb')">
                Alignment
              </button>
              <button @click="scrollToSection('separatorBreadcrumb')">
                Separator
              </button>
            </div>
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
import DefaultBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/DefaultBreadCrumbSnippet.vue";
import ArrowBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/ArrowBreadCrumbSnippet.vue";
import IconBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/IconBreadCrumbSnippet.vue";
import SolidBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/SolidBreadCrumbSnippet.vue";
import OutlineBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/OutlineBreadCrumbSnippet.vue";
import AlignmentBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/AlignmentBreadCrumbSnippet.vue";
import SeparatorBreadCrumbSnippet from "../components/BreadCrumb/CodeSnippet/SeparatorBreadCrumbSnippet.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Buttons",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
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
  data() {
    return {
      default_breadcrumb: false,
      arrow_breadcrumb: false,
      icon_breadcrumb: false,
      solid_breadcrumb: false,
      outline_breadcrumb: false,
      alignment_breadcrumb: false,
      separator_breadcrumb: false,
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("breadcrumbContainer").scrollTo({
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
