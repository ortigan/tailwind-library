<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4 pb-20">
                      <Heading><template> Alert </template> </Heading>

            <div>
          <p class="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
             <!-- Default alert -->
            <SubHeading>
            <template v-slot:subHeader>Default alert</template>
          </SubHeading>
             <ComponentPad>
            <template>
              <DefaultAlert />
            </template>
          </ComponentPad>
            <!-- State alert -->
            <SubHeading>
            <template v-slot:subHeader>State color alert</template>
          </SubHeading>
             <ComponentPad>
            <template>
              <StateAlert />
            </template>
          </ComponentPad>
            <!-- end state alert -->
            <!-- with button alert -->
              <SubHeading>
            <template v-slot:subHeader>With button alert</template>
          </SubHeading>
          
            <ComponentPad> 
              <template>
              <WithButtonAlert />
              </template>
            </ComponentPad>
            
            <!-- end button alert -->
            <!-- alert with link-->
               <SubHeading>
            <template v-slot:subHeader>Alert with link</template>
          </SubHeading>
          
            <ComponentPad> 
              <template>
              <AlertWithLink />
              </template>
            </ComponentPad>
            <!--end alert with links -->
            <!-- alert with Icon-->
                <SubHeading>
            <template v-slot:subHeader>Alert with icon</template>
          </SubHeading>
          
            <ComponentPad> 
              <template>
              <AlertWithIcon />
              </template>
            </ComponentPad>
            <!--end alert with Icons -->
            <!-- Border alert-->
                <SubHeading>
            <template v-slot:subHeader>Alert with border</template>
          </SubHeading>
          
            <ComponentPad> 
              <template>
              <BorderAlert />
              </template>
            </ComponentPad>
            <!--end Border alerts -->
            <!-- Border accent alert-->
                 <SubHeading>
            <template v-slot:subHeader>Border left</template>
          </SubHeading>
          
            <ComponentPad> 
              <template>
              <BorderAccent />
              </template>
            </ComponentPad>
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
