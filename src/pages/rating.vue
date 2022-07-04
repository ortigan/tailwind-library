<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading />
            <div>
          <p class="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
            <!-- deafult rating -->
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
            <!-- code snippet end -->
            <!-- icon with dropdown -->
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
          <!-- code snippet end -->
            <!-- heart rating -->
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
            <!-- code snippet end -->
            <!-- Imdb rating -->
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
            <!-- code snippet end -->
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <DropDownInfo />
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
    ImdbRatingSnippet
},
data() {
    return {
         default_starrating: false,
         comp1_rating: false,
         heart_rating: false,
         imdb_rating: false,
    };
  },
}
</script>

<style>

</style>