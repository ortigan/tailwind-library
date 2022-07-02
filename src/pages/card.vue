<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading />
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default card -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Card</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_card"
                @click.native="default_card = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_card = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultCards />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="default_card" class="transition-all">
          <DefaultCardsCodeSnippet />
         </span>
          <!-- code snippet end --->

          <!-- end default-cards -->
          <!-- CTA card -->
          <SubHeading>
            <template v-slot:subHeader
              >Card with CTA</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!cta_card"
                @click.native="cta_card = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="cta_card = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <CardCta />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="cta_card" class="transition-all">
          <CardCtaCodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end default-cards -->
          <!-- CTA card with link -->
          <SubHeading>
            <template v-slot:subHeader
              >Card with Link</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!link_card"
                @click.native="link_card = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="link_card = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>

          <ComponentPad>
            <template>
              <CardLink />
            </template>
          </ComponentPad>
          <!-- code snippet --->
                    <span v-show="link_card" class="transition-all">
          <CardLinkCodeSnippet />
</span>
          <!-- code snippet end --->
          <!-- end cta cards with link-->
          <!-- User profile cards start -->
          <!-- default user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >Default user card</template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_user_card"
                @click.native="default_user_card = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_user_card = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultUserCard />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="default_user_card" class="transition-all">
          <DefaultUserCardCodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- enddefault user cards -->
          <!-- type1 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-400">type 1</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card1"
                @click.native="user_card1 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card1 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard1 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card1" class="transition-all">
          <UserCard1CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- endtype1 user cards -->
          <!--  type2 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-400">type 2</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card2"
                @click.native="user_card2 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card2 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard2 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
           <span v-show="user_card2" class="transition-all">
          <UserCard2CodeSnippet />
           </span>
          <!-- code snippet end --->
          <!-- end type2 user cards -->
          <!--  type3 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-400">type 3</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card3"
                @click.native="user_card3 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card3 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard3 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card3" class="transition-all">
          <UserCard3CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type3 user cards -->
          <!--  type4 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-400">type 4</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card4"
                @click.native="user_card4 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card4 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard4 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card4" class="transition-all">
          <UsrCard4CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type4 user cards -->
          <!--  type5 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-500">type 5</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card5"
                @click.native="user_card5 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card5 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard5 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card5" class="transition-all">
          <UserCard5CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type5 user cards -->
          <!--  type6 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-500">type 6</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card6"
                @click.native="user_card6 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card6 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard6 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card6" class="transition-all">
          <UserCard6CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type6 user cards -->
          <!--  type7 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-500">type 7</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card7"
                @click.native="user_card7 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card7 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard7 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card7" class="transition-all">
          <UserCard7CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type7 user cards -->
          <!--  type8 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-500">type 8</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card8"
                @click.native="user_card8 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card8 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard8 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card8" class="transition-all">
          <UserCard8CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type8 user cards -->
          <!--  type9 user cards -->
          <SubHeading>
            <template v-slot:subHeader
              >User card
              <span class="font-normal text-gray-500">type 9</span></template
            >
            <template v-slot:code>
              <ShowCodeButton
                v-if="!user_card9"
                @click.native="user_card9 = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="user_card9 = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard9 />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="user_card9" class="transition-all">
          <UserCard9CodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end type9 user cards -->
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <CardInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import CardCta from "../components/Card/CardCta.vue";
import CardInfo from "../components/Card/CardInfo.vue";
import CardLink from "../components/Card/CardLink.vue";
import DefaultCards from "../components/Card/DefaultCards.vue";
import DefaultUserCard from "../components/Card/UserCard/DefaultUserCard.vue";
import UserCard1 from "../components/Card/UserCard/UserCard1.vue";
import UserCard3 from "../components/Card/UserCard/UserCard3.vue";
import UserCard2 from "../components/Card/UserCard/UserCard2.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import UserCard4 from "../components/Card/UserCard/UserCard4.vue";
import UserCard5 from "../components/Card/UserCard/UserCard5.vue";
import UserCard6 from "../components/Card/UserCard/UserCard6.vue";
import UserCard7 from "../components/Card/UserCard/UserCard7.vue";
import UserCard8 from "../components/Card/UserCard/UserCard8.vue";
import UserCard9 from "../components/Card/UserCard/UserCard9.vue";
import DefaultCardsCodeSnippet from "../components/Card/Code Snippets/DefaultCardsCodeSnippet.vue";
import CardCtaCodeSnippet from "../components/Card/Code Snippets/CardCtaCodeSnippet.vue";
import CardLinkCodeSnippet from "../components/Card/Code Snippets/CardLinkCodeSnippet.vue";
import UserCard1CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard1CodeSnippet.vue";
import UserCard2CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard2CodeSnippet.vue";
import UserCard3CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard3CodeSnippet.vue";
import UsrCard4CodeSnippet from "../components/Card/UserCard/Code Snippets/UsrCard4CodeSnippet.vue";
import UserCard5CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard5CodeSnippet.vue";
import UserCard6CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard6CodeSnippet.vue";
import UserCard7CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard7CodeSnippet.vue";
import UserCard8CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard8CodeSnippet.vue";
import UserCard9CodeSnippet from "../components/Card/UserCard/Code Snippets/UserCard9CodeSnippet.vue";
import DefaultUserCardCodeSnippet from "../components/Card/UserCard/Code Snippets/DefaultUserCardCodeSnippet.vue";

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    CardInfo,
    DefaultCards,
    CardCta,
    CardLink,
    DefaultUserCard,
    UserCard1,
    UserCard2,
    UserCard3,
    UserCard4,
    UserCard5,
    UserCard6,
    UserCard7,
    UserCard8,
    UserCard9,
    DefaultCardsCodeSnippet,
    CardCtaCodeSnippet,
    CardLinkCodeSnippet,
    UserCard1CodeSnippet,
    UserCard2CodeSnippet,
    UserCard3CodeSnippet,
    UsrCard4CodeSnippet,    
    UserCard5CodeSnippet,
    UserCard6CodeSnippet,
    UserCard7CodeSnippet,
    UserCard8CodeSnippet,
    UserCard9CodeSnippet,
    DefaultUserCardCodeSnippet,
  },
  data(){
    return{
      default_card: false,
      cta_card: false,
      link_card: false,
      default_user_card: false,
      user_card1: false,
      user_card2: false,
      user_card3: false,
      user_card4: false,
      user_card5: false,
      user_card6: false,
      user_card7: false,
      user_card8: false,
      user_card9: false,
      
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
