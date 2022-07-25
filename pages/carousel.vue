<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen lg:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full px-4 pb-20" id="carouselContainer">
          <HeadersHeading> Carousel  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- start -->
          <section id="defaultCarousel" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_carousel"
                  @click="default_carousel = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_carousel = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CarouselDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_carousel" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('defaultCarouselComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <CarouselSnippetsDefault id="defaultCarouselComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="secondCarousel" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Type 2</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!second_carousel"
                  @click="second_carousel = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="second_carousel = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CarouselSecond />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="second_carousel" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('secondCarouselComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <CarouselSnippetsSecond id="secondCarouselComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
          <!-- start -->
          <section id="thirdCarousel" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Type 3</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!third_carousel"
                  @click="third_carousel = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="third_carousel = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <CarouselThird />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="third_carousel" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('thirdCarouselComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <CarouselSnippetsThird id="thirdCarouselComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End  -->
                   
                  
           
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
              <button @click="scrollToSection('defaultCarousel')">
                Default Carousel
              </button>
              <button @click="scrollToSection('secondCarousel')">
                Type 2
              </button>
              <button @click="scrollToSection('thirdCarousel')">
                Type 3
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
    title: "Rating",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
},
  data() {
    return {
      layout: "custom",
      default_carousel: false,
      second_carousel: false,
      third_carousel: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("carouselContainer").scrollTo({
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
