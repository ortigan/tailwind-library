<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4 pb-20">
          <Heading
            ><template>
              Alert
            </template>
          </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default alert -->
          <SubHeading>
            <template v-slot:subHeader
              >Default alert</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultAlert />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Default alert -->
            <div class="w-full p-4 rounded-lg text-sm text-gray-800 bg-gray-100" role="alert">
              <span class="font-medium">Default alert!</span> A simple Default alert message
            </div>
            <!-- Dark alert -->
            <div class="w-full p-4 rounded-lg text-sm text-gray-100 bg-gray-700" role="alert">
              <span class="font-medium">Default alert!</span> A simple Default alert message
            </div>
            <!-- Light alert -->
             <div class="w-full p-4 rounded-lg text-sm text-zinc-400 bg-zinc-100" role="alert">
              <span class="font-medium">Default alert!</span> A simple Default alert message
            </div>
          </script>
          </code></pre>
          <!-- code snippet end -->
          <!-- end default alert -->
          <!-- State alert -->
          <SubHeading>
            <template v-slot:subHeader
              >State color alert</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <StateAlert />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Info alert -->
            <div class="w-full p-4 rounded-lg text-sm text-sky-700 bg-sky-100" role="alert">
              <span class="font-medium">Info alert!</span> A simple Info alert message
            </div>
            <!-- Success alert -->
            <div class="w-full p-4 rounded-lg text-sm text-emerald-700 bg-emerald-100" role="alert">
              <span class="font-medium">Success alert!</span> A simple Success alert message
            </div>
            <!-- Warning alert -->
            <div class="w-full p-4 rounded-lg text-sm text-amber-700 bg-amber-100" role="alert">
              <span class="font-medium">Warning alert!</span> A simple Warning alert message
            </div>
            <!-- Danger alert -->
            <div class="w-full p-4 rounded-lg text-sm text-rose-700 bg-rose-100" role="alert">
              <span class="font-medium">Danger alert!</span> A simple Danger alert message
            </div>
            </script>
          </code></pre>
          <!-- code snippet end -->
          <!-- end state alert -->
          <!-- with button alert -->
          <SubHeading>
            <template v-slot:subHeader
              >With button alert</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <WithButtonAlert />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Default alert -->
            <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div>
                <span class="font-medium">Default alert!</span> A simple Default alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>            
            <!-- Dark alert -->
            <div class="flex justify-between rounded-lg bg-gray-700 p-4 text-sm text-gray-100" role="alert">
              <div>
                <span class="font-medium">Dark alert!</span> A simple Dark alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>
            <!-- Light alert -->
            <div class="flex justify-between rounded-lg bg-zinc-100 p-4 text-sm text-zinc-400" role="alert">
              <div>
                <span class="font-medium">Light alert!</span> A simple Light alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>
            
            </script>
          </code></pre>
          <!-- code snippet end -->
          <!-- end button alert -->
          <!-- alert with link-->
          <SubHeading>
            <template v-slot:subHeader
              >Alert with link</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <AlertWithLink />
            </template>
          </ComponentPad>
          <!-- code snippet -->
           <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Default alert -->
            <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div>
                <span class="font-medium">Default alert!</span> A simple Default alert message. 
                <a href="#" class="underline">Click here</a> to know more
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>            
            <!-- Dark alert -->
            <div class="flex justify-between rounded-lg bg-gray-700 p-4 text-sm text-gray-100" role="alert">
              <div>
                <span class="font-medium">Dark alert!</span> A simple Dark alert message. 
                <a href="#" class="underline">Click here</a> to know more
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>
            <!-- Light alert -->
            <div class="flex justify-between rounded-lg bg-zinc-100 p-4 text-sm text-zinc-400" role="alert">
              <div>
                <span class="font-medium">Light alert!</span> A simple Light alert message. 
                <a href="#" class="underline">Click here</a> to know more
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div> 
            </script>
          </code></pre>
          <!-- code snippet end -->
          <!--end alert with links -->
          <!-- alert with Icon-->
          <SubHeading>
            <template v-slot:subHeader
              >Alert with icon</template
            >
          </SubHeading>
          <div class="pb-4">
          <p>I have used <a href="https://heroicons.com/" class="text-sky-700">heroicons</a> for this component. You can user any icon according to the constraints. I have provided with code snippet only for one component as rest of the components are same, just have different colors. All the components hvae <span class="text-sky-900">text-'color'-700</span> and <span class="text-sky-900">bg-'color'-100</span> for all the components.
          You can refer <a href="https://tailwindcss.com/docs/customizing-colors" class="text-sky-700 ">Tailwind colors</a> to experiment with different colors. <span class="text-gray-800 italic">Same goes for following components.</span> </p>
          </div>
          <ComponentPad>
            <template>
              <AlertWithIcon />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Alert with icon -->
            <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div class="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium">Default alert!</span> A simple Default alert message.</div>
                </div>
                <div class="hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
             </div>
            </script>
          </code></pre>
          <!-- code snippet end--->
          <!--end alert with Icons -->
          <!-- Border alert-->
          <SubHeading>
            <template v-slot:subHeader
              >Alert with border</template
            >
          </SubHeading>
          <div class="pb-4">
          <p>This component has a top border of 2px. You can always increase border size and can change color as mentioned in above component info.</p>
          </div>
          <ComponentPad>
            <template>
              <BorderAlert />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Alert with border -->
            <div class="flex justify-between rounded-lg border-t-2 border-gray-700 bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div class="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium">Default alert!</span> A simple Default alert message.</div>
                </div>
                <div class="hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
             </div>
            </script>
          </code></pre>
          <!-- code snippet end--->
          <!--end Border alerts -->
          <!-- Border accent alert-->
          <SubHeading>
            <template v-slot:subHeader
              >Border left</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <BorderAccent />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Alert with border -->
            <div class="flex justify-between rounded-lg border-l-2 border-gray-700 bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div class="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span class="font-medium">Default alert!</span> A simple Default alert message.</div>
                </div>
                <div class="hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
             </div>
            </script>
          </code></pre>
          <!-- code snippet end--->
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
import SubHeading from "../components/Headers/SubHeading.vue";
import AlertInfo from "../components/Alert/AlertInfo.vue";
import AlertWithLink from "../components/Alert/AlertWithLink.vue";
import AlertWithIcon from "../components/Alert/AlertWithIcon.vue";
import DefaultAlert from "../components/Alert/DefaultAlert.vue";
import StateAlert from "../components/Alert/StateAlert.vue";
import WithButtonAlert from "../components/Alert/WithButtonAlert.vue";
import BorderAlert from "../components/Alert/BorderAlert.vue";
import Heading from "../components/Headers/Heading.vue";
import BorderAccent from "../components/Alert/BorderAccent.vue";
export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
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
