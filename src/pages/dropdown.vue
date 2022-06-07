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
              <DefaultDropDead />
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
import DefaultDropDead from "../components/DropDowns/DefaultDropDead.vue"
export default {
    metaInfo: {
    title: 'Accordion'
  },
  components: {
      DefaultDropDead,    
}
}
</script>

<style>

</style>