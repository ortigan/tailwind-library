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
             <!-- icon first accordion -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Icon first accordion</div>
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
            <!-- end icon first accordion -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-t-lg pt-10 px-10 flex justify-center items-center"
            >
              <IconFirstAcco />
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white px-10 flex justify-center items-center"
            >
              <PlusFirstAcco />
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-b-lg pb-10 px-10 flex justify-center items-center"
            >
              <UserIconAcco />
            </div>
             <!-- Default alert -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Default accordion</div>
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
            <!--End Default alert -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <AccordionSimple />
            </div>
            <!-- Accordion With Icon -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Accordion with Icon</div>
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
            <!--End Accordion With Icon -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <AccordionWithIcon />
            </div>
            <!-- Border accordion -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Border accordion</div>
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
            <!-- end border accordion -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-t-lg pt-10 p-5 px-10 flex justify-center items-center"
            >
              <BorderAcco />
            </div>
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-b-lg pb-10 px-10 flex justify-center items-center"
            >
              <BorderType2Acco />
            </div>
           
            
            <!-- list accordion -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">List Accordion</div>
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
            <!--End list accordion -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <ListAcco />
            </div>  
            <!-- open list accordion -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">List-Open-Until-closed-Accordion</div>
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
            <!--End list open accordion -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <ListOpenAcco />
            </div>  
            <!-- Spaced accordion -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Spaced accordion</div>
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
            <!-- end Spaced accordion -->
            <div
              class="pattern-dots-sm text-gray-100 bg-white rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <SpacedAcco />
            </div>
            <div
              class=" text-gray-100 bg-black rounded-lg py-10 px-10 flex justify-center items-center"
            >
              <GlassAcco />
            </div>      
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <AccordionInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AccordionSimple from '../components/Accordion/AccordionSimple.vue'
import AccordionInfo from '../components/Accordion/AccordionInfo.vue'
import AccordionWithIcon from '../components/Accordion/AccordionWithIcon.vue'
import BorderAcco from '../components/Accordion/BorderAcco.vue'
import SpacedAcco from '../components/Accordion/SpacedAcco.vue'
import GlassAcco from '../components/Accordion/GlassAcco.vue'
import ListAcco from '../components/Accordion/ListAcco.vue'
import IconFirstAcco from '../components/Accordion/IconFirstAcco.vue'
import PlusFirstAcco from '../components/Accordion/PlusFirstAcco.vue'
import UserIconAcco from '../components/Accordion/UserIconAcco.vue'
import BorderType2Acco from '../components/Accordion/BorderType2Acco.vue'
import ListOpenAcco from '../components/Accordion/ListOpenAcco.vue'

export default {
    metaInfo: {
    title: 'Accordion'
  },
  components: {
    AccordionSimple,
    AccordionInfo,
    AccordionWithIcon,
    BorderAcco,
    SpacedAcco,
    GlassAcco,
    ListAcco,
    IconFirstAcco,
    PlusFirstAcco,
    UserIconAcco,
    BorderType2Acco,
    ListOpenAcco
}
}
</script>

<style>

</style>