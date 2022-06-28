<template>
  <Layout>
    <div class="flex p-4 justify-between">
      <!-- content -->
      <div class="flex w-full h-screen px-4 overflow-y-hidden scrollBar">
        <div class="w-full overflow-y-auto px-4">
          <Heading><template> Form </template> </Heading>
          <div class="w-full">
            <p class="text-base">Need to install tailwindcss form plugin</p>
          </div>
          <!--  Form elements -->
          <SubHeading>
            <template v-slot:subHeader>Form elements</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!form_elements"
                @click.native="form_elements = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="form_elements = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>

          <FormElement />
          <!-- code snippet --->
          <span v-show="form_elements" class="transition-all">
            <FormElementCodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end  Form elements -->
          <!-- Default Form -->
          <SubHeading>
            <template v-slot:subHeader>Default Form</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_form"
                @click.native="default_form = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_form = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton></CopyButton> </template>
          </SubHeading>

          <DefaultForm />
          <!-- code snippet --->
          <span v-show="default_form" class="transition-all">
            <DefaultFormCodeSnippet />
          </span>
          <!-- code snippet end --->
          <!-- end default Form -->

          <!-- Floating Form -->
          <SubHeading>
            <template v-slot:subHeader>Floating Form
            </template>
                 <template v-slot:code>
              <ShowCodeButton
                v-if="!floating_form"
                @click.native="floating_form = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="floating_form = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy
              ><CopyButton></CopyButton>
            </template>
          </SubHeading>

          <FloatinglabelForm />
          <!-- code snippet --->
          <span v-show="floating_form" class="transition-all">
            <FloatinglabelFormCodeSnippet />
          </span>
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
  data() {
    return {
      form_elements: false,
      default_form: false,
      floating_form: false,
    };
  },
};
</script>

<style>
</style>
