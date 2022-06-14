<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4 pb-20">
          <Heading><template> Pagination </template> </Heading>
          <div>
            <p class="text-base">
              The side-menu can be more useful for actions that a user will take
              more frequently.You can include multiple menu items, They’re not
              difficult to scale and change, All the element is noticeable, They
              adjust to all screen sizes.
            </p>
          </div>
          <!-- Default Pagination -->
          <SubHeading>
            <template v-slot:subHeader>Default pagination</template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultPagination />
            </template>
          </ComponentPad>
          <!-- end default Pagination -->
          <!-- with arrow Pagination -->
          <SubHeading>
            <template v-slot:subHeader>With arrow pagination</template>
          </SubHeading>
          <ComponentPad>
            <template>
              <WithArrowPagination />
            </template>
          </ComponentPad>
          <!-- end with arrow Pagination -->
          <!-- <div class="line-numbers">
            <pre><code class="language-markup"><script type="prism-html-markup">
 <div class="">
    <ul class="bg-white inline-flex items-center -space-x-px font-medium">
        <li class="px-3 py-2.5 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 rounded-l-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">1</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">2</li>
        <li class="px-3 py-2 border text-blue-500 hover:text-blue-700 hover:cursor-pointer bg-blue-50 hover:bg-blue-100 border-gray-200">3</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">4</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">5</li>
        <li class="px-3 py-2.5 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200  rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </li>
    </ul>
  </div>
  </div>
 </script>
</code></pre>
          </div> -->
          <CodeHighlight>
            <template>
              <ul class="bg-white inline-flex items-center -space-x-px font-medium">
        <li class="px-3 py-2.5 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 rounded-l-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">1</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">2</li>
        <li class="px-3 py-2 border text-blue-500 hover:text-blue-700 hover:cursor-pointer bg-blue-50 hover:bg-blue-100 border-gray-200">3</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">4</li>
        <li class="px-3 py-2 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200 ">5</li>
        <li class="px-3 py-2.5 border hover:text-gray-700 hover:cursor-pointer hover:bg-gray-50 border-gray-200  rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </li>
    </ul>
            </template>
          </CodeHighlight>
        </div>
      </div>
      <!-- right Pagination -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <PaginationInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import PaginationInfo from "../components/Pagination/PaginationInfo.vue";
import DefaultPagination from "../components/Pagination/DefaultPagination.vue";
import WithArrowPagination from "../components/Pagination/WithArrowPagination.vue";
import CodeHighlight from '../components/CodeSnippet/CodeHighlight.vue';

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    PaginationInfo,
    DefaultPagination,
    WithArrowPagination,
    CodeHighlight
  },
};
</script>

<style></style>
