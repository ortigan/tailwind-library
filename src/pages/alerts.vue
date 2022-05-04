<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading />
            <div>
          <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
             <!-- Default alert -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Default alert</div>
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
              <DefaultAlert />
            </div>
            <!-- State alert -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">State color alert</div>
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
              <StateAlert />
            </div>
            <!-- end state alert -->
            <!-- with button alert -->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">With button alert</div>
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
              <WithButtonAlert />
            </div>
            <!-- end button alert -->
            <!-- alert with link-->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Alert with link</div>
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
              <AlertWithLink />
            </div>
            <!--end alert with links -->
            <!-- alert with Icon-->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Alert with Icon</div>
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
              <AlertWithIcon />
            </div>
            <!--end alert with Icons -->
            <!-- Border alert-->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Border alert</div>
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
              <BorderAlert />
            </div>
            <!--end Border alerts -->
            <!-- Border accent alert-->
            <div class="w-full flex justify-between py-2">
              <div class="font-bold text-xl">Border Left</div>
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
              <BorderAccent />
            </div>
            <!--end Border left alerts -->
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <AlertInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AlertInfo from "../components/Alert/AlertInfo.vue";
import AlertWithLink from '../components/Alert/AlertWithLink.vue';
import AlertWithIcon from '../components/Alert/AlertWithIcon.vue';
import DefaultAlert from "../components/Alert/DefaultAlert.vue";
import StateAlert from "../components/Alert/StateAlert.vue";
import WithButtonAlert from '../components/Alert/WithButtonAlert.vue';
import BorderAlert from '../components/Alert/BorderAlert.vue';
import Heading from "../components/Headers/Heading.vue";
import BorderAccent from '../components/Alert/BorderAccent.vue';
export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    AlertInfo,
    Heading,
    DefaultAlert,
    StateAlert,
    WithButtonAlert,
    AlertWithLink,
    AlertWithIcon,
    BorderAlert,
    BorderAccent,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
