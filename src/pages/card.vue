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
             <!-- Default card -->
             <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Default Card</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <DefaultCards />
            </div>
         
            <!-- end default-cards -->
             <!-- CTA card -->
             <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl ">Card with CTA</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <CardCta />
            </div>
         
            <!-- end default-cards -->
             <!-- CTA card with link -->
             <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl ">Card with Link</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <CardLink />
            </div>
         
            <!-- end cta cards with link-->
            <!-- User profile cards start -->
            <!-- default user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >Default user card</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultUserCard />
            </template>
          </ComponentPad>
            <!-- enddefault user cards -->
            <!-- type1 user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >User card <span class="font-normal text-gray-400">type 1</span></template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard1 />
            </template>
          </ComponentPad>
            <!-- endtype1 user cards -->
            <!--  type2 user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >User card <span class="font-normal text-gray-400">type 2</span></template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard2 />
            </template>
          </ComponentPad>
            <!-- end type2 user cards -->
            <!--  type3 user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >User card <span class="font-normal text-gray-400">type 3</span></template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard3 />
            </template>
          </ComponentPad>
            <!-- end type3 user cards -->
            <!--  type4 user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >User card <span class="font-normal text-gray-400">type 4</span></template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard4 />
            </template>
          </ComponentPad>
            <!-- end type4 user cards -->
            <!--  type4 user cards -->
            <SubHeading>
            <template v-slot:subHeader
              >User card <span class="font-normal text-gray-400">type 5</span></template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <UserCard5 />
            </template>
          </ComponentPad>
            <!-- end type4 user cards -->
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
import CardCta from '../components/Card/CardCta.vue';
import CardInfo from '../components/Card/CardInfo.vue';
import CardLink from '../components/Card/CardLink.vue';
import DefaultCards from '../components/Card/DefaultCards.vue';
import DefaultUserCard from '../components/Card/UserCard/DefaultUserCard.vue';
import UserCard1 from '../components/Card/UserCard/UserCard1.vue';
import UserCard3 from '../components/Card/UserCard/UserCard3.vue';
import UserCard2 from '../components/Card/UserCard/UserCard2.vue';
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import UserCard4 from '../components/Card/UserCard/UserCard4.vue';
import UserCard5 from '../components/Card/UserCard/UserCard5.vue';

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
  },
};

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
