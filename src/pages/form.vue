<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4">
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
          <!--  Form elements -->
          <SubHeading>
            <template v-slot:subHeader
              >Form elements</template
            >
          </SubHeading>
          
              <FormElement />
          <!-- code snippet --->
          <FormElementCodeSnippet />
          <!-- code snippet end --->
          <!-- end  Form elements -->
          <!-- Default Form -->
          <SubHeading>
            <template v-slot:subHeader
              >Default Form</template
            >
          </SubHeading>
          
              <DefaultForm />
          <!-- code snippet --->
          <DefaultFormCodeSnippet />
          <!-- code snippet end --->              
          <!-- end default Form -->
          
          <!-- Floating Form -->
          <SubHeading>
            <template v-slot:subHeader
              >Floating Form</template
            >
          </SubHeading>
          
              <FloatinglabelForm />
          <!-- code snippet --->
          <FloatinglabelFormCodeSnippet />
          <!-- code snippet end --->
          <!-- end Floating Form -->
       


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
import FloatinglabelForm from "../components/Form/FloatinglabelForm.vue";
import FormElementCodeSnippet from "../components/Form/Code Snippets/FormElementCodeSnippet.vue";
import DefaultFormCodeSnippet from "../components/Form/Code Snippets/DefaultFormCodeSnippet.vue";
import FloatinglabelFormCodeSnippet from "../components/Form/Code Snippets/FloatinglabelFormCodeSnippet.vue";

export default {
  metaInfo: {
    title: "Buttons",
  },
  components: {
    SubHeading,
    Heading,
    FormInfo,
    DefaultForm,
    FormElement,
    FloatinglabelForm,
    FormElementCodeSnippet,
    DefaultFormCodeSnippet,
    FloatinglabelFormCodeSnippet,   
  },
};
</script>

<style>

</style>
