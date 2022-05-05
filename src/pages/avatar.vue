<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4 mb-12">
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
         <!-- Default avatar -->
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
          <!-- end default avatar -->
         <!-- Default Sizes -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar sizes</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SizeAvatar />
            </template>
          </ComponentPad>
          <!-- end  avatar sizes -->
         <!-- Presence avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar with presence indicator</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <PresenceAvatar />
            </template>
          </ComponentPad>
          <!-- end presence avatar -->
         <!-- PresenceRing avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar with presence Ring</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <PresenceRingAvatar />
            </template>
          </ComponentPad>
          <!-- end presence Ring avatar -->
         <!-- Color avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Color</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <ColorAvatar />
            </template>
          </ComponentPad>
          <!-- end Color avatar -->
         <!-- Badge avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Badge</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeAvatar />
            </template>
          </ComponentPad>
          <!-- end Badge avatar -->

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
import SizeAvatar from '../components/Avatar/SizeAvatar.vue';
import PresenceAvatar from '../components/Avatar/PresenceAvatar.vue';
import PresenceRingAvatar from '../components/Avatar/PresenceRingAvatar.vue';
import CircleAvatar from '../components/Avatar/CircleAvatar.vue';
import ColorAvatar from '../components/Avatar/ColorAvatar.vue';
import BadgeAvatar from '../components/Avatar/BadgeAvatar.vue';

export default {
  metaInfo: {
    title: "Badges",
  },
  components: {
    Heading,
    ComponentPad,
    AvatarInfo,
    DefaultAvatar,
    SubHeading,
    SizeAvatar,
    PresenceAvatar,
    PresenceRingAvatar,
    CircleAvatar,
    ColorAvatar,
    BadgeAvatar,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
