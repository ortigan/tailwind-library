<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="alertContainer">
          <HeadersHeading> BreadCrumb  </HeadersHeading>
          <div>
            <p class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default Badge -->
          <section id="defaultBreadcrumb" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_breadcrumb"
                  @click="default_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsDefault id="defaultBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default Badge -->
          <!-- Arrow Badge -->
          <section id="withArrow" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Arrow</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!arrow_breadcrumb"
                  @click="arrow_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="arrow_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbArrow />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="arrow_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('ArrowBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsArrow id="ArrowBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Arrow Badge -->
          <!-- Icon Badge -->
          <section id="withIcon" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Icon</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!icon_breadcrumb"
                  @click="icon_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="icon_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbIcon />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="icon_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('IconBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsIcon id="IconBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Icon Badge -->
          <!-- Solid Badge -->
          <section id="solidBackground" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Solid</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!solid_breadcrumb"
                  @click="solid_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="solid_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbSolid />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="solid_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('SolidBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsSolid id="SolidBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Solid Badge -->
          <!-- Outline Badge -->
          <section id="outlineBreadcrumb" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Outline</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!outline_breadcrumb"
                  @click="outline_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="outline_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbOutline />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="outline_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('OutlineBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsOutline id="OutlineBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Outline Badge -->
          <!-- Alignment Badge -->
          <section id="alignmentBreadcrumb" class="w-full hidden md:block">
            <HeadersSubHeading>
              <template v-slot:subHeader>Alignment</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!alignment_breadcrumb"
                  @click="alignment_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="alignment_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbAlignment />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="alignment_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('AlignmentBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsAlignment id="AlignmentBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Alignment Badge -->
          <!-- Separator Badge -->
          <section id="separatorBreadcrumb" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Separator</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!separator_breadcrumb"
                  @click="separator_breadcrumb = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="separator_breadcrumb = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <BreadCrumbSeparator />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="separator_breadcrumb" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('SeparatorBadge')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <BreadCrumbSnippetsSeparator id="SeparatorBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Separator Badge -->
          
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
  </NuxtLayout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue";
import AlertInfo from "../components/Alert/AlertInfo.vue";
import Heading from "../components/Headers/Heading.vue";
export default {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      default_breadcrumb: false,
      arrow_breadcrumb: false,
      icon_breadcrumb: false,
      solid_breadcrumb: false,
      outline_breadcrumb: false,
      alignment_breadcrumb: false,
      separator_breadcrumb: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("alertContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.$bus.$emit("showToastNotification")
      this.$globalCopyFunc(id);
    },

  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
