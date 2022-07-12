<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4" id="ratingContainer">
            <Heading />
            <div>
          <p class="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
            <!-- deafult rating -->
            <section id="starRating">
            <SubHeading>
            <template v-slot:subHeader
              >Deafult star rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_starrating"
                @click.native="default_starrating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_starrating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end deafult rating -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><DefaultRating /></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="default_starrating" class="transition-all">
            <DefaultRatingSnippet />
            </span>
            </section>
            <!-- code snippet end -->
            <!-- icon with dropdown -->
            <section id="Comp1Rating">
            <SubHeading>
            <template v-slot:subHeader
              >Component-1 rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!comp1_rating"
                @click.native="comp1_rating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="comp1_rating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end icon with dropdown -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><OurCardRating /></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="comp1_rating" class="transition-all">
            <OurCardRatingSnippet />
            </span>
            </section>
          <!-- code snippet end -->
            <!-- heart rating -->
            <section id="heartRating">
            <SubHeading>
            <template v-slot:subHeader
              >Heart rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!heart_rating"
                @click.native="heart_rating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="heart_rating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end heart rating -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><HeartRating/></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="heart_rating" class="transition-all">
              <HeartRatingSnippet />
            </span>
            </section>
            <!-- code snippet end -->
            <!-- Imdb rating -->
            <section id="imdbRating">
            <SubHeading>
            <template v-slot:subHeader
              >Imdb rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!imdb_rating"
                @click.native="imdb_rating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="imdb_rating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end imdb rating -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><ImdbRating/></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="imdb_rating" class="transition-all">
              <ImdbRatingSnippet />
            </span>
            </section>
            <!-- code snippet end -->
            <!-- start of smiley rating -->
            <section id="smileyRating">
            <SubHeading>
            <template v-slot:subHeader
              >Smiley rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!smiley_rating"
                @click.native="smiley_rating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="smiley_rating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end imdb rating -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><SmileyRating/></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="smiley_rating" class="transition-all">
              <SmileyRatingCodeSnippet />
            </span>
            </section>
            <!-- end of smiley rating -->
            <!-- start of yes or no -->
            <section id="yesornoRating">
            <SubHeading>
            <template v-slot:subHeader
              >Yes/No rating</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!yesorno_rating"
                @click.native="yesorno_rating = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="yesorno_rating = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
            <!-- end imdb rating -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">          
                  <div><YesOrNoRating/></div>          
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
            <span v-show="yesorno_rating" class="transition-all">
              <YesOrNoCodeSnippet />
            </span>
            </section>
            <!-- end of yes or no -->
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2">
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
  </Layout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue"
import ComponentPad from "../components/Utils/ComponentPad.vue"
import OurCardRating from "../components/Rating/OurCardRating.vue"
import HeartRating from "../components/Rating/HeartRating.vue"
import DefaultRating from "../components/Rating/DefaultRating.vue"
import DefaultRatingSnippet from "../components/Rating/CodeSnippet/DefaultRatingSnippet.vue"
import OurCardRatingSnippet from "../components/Rating/CodeSnippet/OurCardRatingSnippet.vue"
import HeartRatingSnippet from "../components/Rating/CodeSnippet/HeartRatingSnippet.vue"
import ImdbRating from "../components/Rating/ImdbRating.vue"
import ImdbRatingSnippet from "../components/Rating/CodeSnippet/ImdbRatingSnippet.vue"
import SmileyRatingCodeSnippet from "../components/Rating/CodeSnippet/SmileyRatingCodeSnippet.vue"
import SmileyRating from "../components/Rating/SmileyRating.vue"
import YesOrNoRating from "../components/Rating/YesOrNoRating.vue"
import YesOrNoCodeSnippet from "../components/Rating/CodeSnippet/YesOrNoCodeSnippet.vue"
undefined
export default {
    metaInfo: {
    title: 'Dropdown'
  },
  components: {
    SubHeading,
    ComponentPad,
    OurCardRating,
    HeartRating,
    DefaultRating,
    DefaultRatingSnippet,
    OurCardRatingSnippet,
    HeartRatingSnippet,
    ImdbRating,
    ImdbRatingSnippet,
    SmileyRating,
    SmileyRatingCodeSnippet,
    YesOrNoCodeSnippet,
    YesOrNoRating
},
data() {
    return {
         default_starrating: false,
         comp1_rating: false,
         heart_rating: false,
         imdb_rating: false,
         smiley_rating: false,
         yesorno_rating: false,
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document
        .getElementById("ratingContainer")
        .scrollTo({
          top: document.getElementById(`${section}`).offsetTop - 100,
          behavior: "smooth",
        });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
  },
}
</script>

<style>

</style>