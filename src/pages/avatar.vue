<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading><template>
              Avatar
              </template> </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
         <!-- Default badge -->
          <SubHeading>
            <template v-slot:subHeader
              >Default avatar</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultAvatar />
            </template>
          </ComponentPad>
          <!-- end default badge -->

        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <AvatarInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AvatarInfo from '../components/Avatar/AvatarInfo.vue';
import DefaultAvatar from '../components/Avatar/DefaultAvatar.vue';
import SubHeading from "../components/Headers/SubHeading.vue";
import Heading from "../components/Headers/Heading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";

export default {
  metaInfo: {
    title: "Badges",
  },
  components: {
    Heading,
    ComponentPad,
    AvatarInfo,
    DefaultAvatar,
    SubHeading
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
