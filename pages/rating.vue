<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="ratingContainer">
          <HeadersHeading> Rating  </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default alert -->
          <section id="starRating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default Star</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_starrating"
                  @click="default_starrating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_starrating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="default_starrating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('starRatingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsDefault id="starRatingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default alert -->
          <!--  -->
          <section id="Comp1Rating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Component 1</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!comp1_rating"
                  @click="comp1_rating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="comp1_rating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingOurCard />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="comp1_rating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('Comp1RatingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsOurCard id="Comp1RatingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="heartRating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Heart</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!heart_rating"
                  @click="heart_rating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="heart_rating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingHeart />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="heart_rating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('heartRatingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsHeart id="heartRatingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="imdbRating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Imdb</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!imdb_rating"
                  @click="imdb_rating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="imdb_rating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingImdb />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="imdb_rating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('imdbRatingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsImdb id="imdbRatingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="smileyRating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Smiley</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!smiley_rating"
                  @click="smiley_rating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="smiley_rating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingSmiley />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="smiley_rating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('smileyRatingCompe')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsSmiley id="smileyRatingCompe" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          <!--  -->
          <section id="yesornoRating" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Yes or No</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!yesorno_rating"
                  @click="yesorno_rating = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="yesorno_rating = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <RatingYesOrNo />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div v-show="yesorno_rating" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <div class="flex justify-between px-2 pt-2">
                  <div>
                    HTML
                  </div>
                  <div>
                    <UtilsCopyButton
                    @click="copyToClipboard('yesornoRatingComp')"
                  ></UtilsCopyButton>
                  </div>
                </div>
                <RatingSnippetsYesOrNo id="yesornoRatingComp" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!--  -->
          
           
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
              <button @click="scrollToSection('starRating')">
                Star Rating 
              </button>
              <button @click="scrollToSection('Comp1Rating')">
                Component-1 rating
              </button>
              <button @click="scrollToSection('heartRating')">
                Heart Rating
              </button>
              <button @click="scrollToSection('imdbRating')">
                Imdb Rating
              </button>                            
              <button @click="scrollToSection('smileyRating')">
                Smiley Rating
              </button>                            
              <button @click="scrollToSection('yesornoRating')">
                Yes or No Rating
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
         default_starrating: false,
         comp1_rating: false,
         heart_rating: false,
         imdb_rating: false,
         smiley_rating: false,
         yesorno_rating: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("ratingContainer").scrollTo({
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
