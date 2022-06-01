<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex-1 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading
            ><template>
              Form
            </template>
          </Heading>
          <div class="w-full">
            <p class="text-base">
            Need to install tailwindcss form plugin
            </p>
          </div>
          <!-- Default Form -->
          <SubHeading>
            <template v-slot:subHeader
              >Form elements</template
            >
          </SubHeading>
          
              <FormElement />
          
          <!-- end default Form -->
          <!-- Default Form -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Form</template
            >
          </SubHeading>
          
              <DefaultForm />
          
          <!-- end default Form -->
       


        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <FormInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import FormInfo from "../components/Form/FormInfo.vue";
import DefaultForm from "../components/Form/DefaultForm.vue";
import FormElement from "../components/Form/FormElement.vue";


export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    FormInfo,
    DefaultForm,
    FormElement
   
  },
};
</script>

<style>

</style>
