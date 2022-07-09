<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4 pb-20" id="paginationContainer">
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
          <section id="defaultPagination">
          <SubHeading>
            <template v-slot:subHeader>Default pagination</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_pagination"
                @click.native="default_pagination = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_pagination = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultPagination />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <span v-show="default_pagination" class="transition-all">
            <DefaultPaginationSnippet />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end default Pagination -->
          <!-- with arrow Pagination -->
          <section id="withArrowPagination">
          <SubHeading>
            <template v-slot:subHeader>With arrow pagination</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!arrow_pagination"
                @click.native="arrow_pagination = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="arrow_pagination = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <WithArrowPagination />
            </template>
          </ComponentPad>
          <span v-show="arrow_pagination" class="transition-all">
            <WithArrowPaginationSnippet />
          </span>
          </section>
          <!-- end with arrow Pagination -->
        </div>
      </div>
      <!-- right Pagination -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2">
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
            <div class="flex flex-col justify-start items-end space-y-2">
            <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultPagination')">
                Default Pagination
              </button>
              <button @click="scrollToSection('withArrowPagination')">
                With arrow pagination
              </button>
                            
            </div>
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
import DefaultPaginationSnippet from "../components/Pagination/CodeSnippet/DefaultPaginationSnippet.vue";
import WithArrowPaginationSnippet from "../components/Pagination/CodeSnippet/WithArrowPaginationSnippet.vue";

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
    DefaultPaginationSnippet,
    WithArrowPaginationSnippet
  },
  data(){
    return{
      default_pagination:false,
      arrow_pagination:false,
      
    }
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document
        .getElementById("paginationContainer")
        .scrollTo({
          top: document.getElementById(`${section}`).offsetTop - 100,
          behavior: "smooth",
        });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
  },
};
</script>

<style></style>
