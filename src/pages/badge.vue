<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading />
            <div>
          <p class="text-base font-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
             <!-- Default badge -->
            <SubHeading > 
                <template v-slot:subHeader>Default badge</template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DefaultBadge />
              </template>
            </ComponentPad>
            <!-- end default badge -->
             <!-- Larger badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Larger badge
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <LargerBadge />
              </template>
            </ComponentPad>
            <!-- end Larger badge -->
             <!-- state color badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Badge State color
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <BadgeState />
              </template>
            </ComponentPad>
            <!-- end state color badge -->
             <!-- Outline badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Outline badge
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <OutlineBadge />
              </template>
            </ComponentPad>
            <!-- end outline badge -->
             <!-- Pill badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Pill badge 
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <PillBadge />
              </template>
            </ComponentPad>
            <!-- end Pill badge -->
             <!-- Pill outline badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Pill Outline badge 
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <PillOutlineBadge />
              </template>
            </ComponentPad>
            <!-- end Pill outline badge -->
             <!-- Rectange badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Rectangle badge 
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <RectangleBadge />
              </template>
            </ComponentPad>
            <!-- end Rectangle badge -->
             <!-- Cancel badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Badge with cancel button
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <CancelBadge />
              </template>
            </ComponentPad>
            <!-- end Cancel badge -->
             <!-- Link badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Badges as link
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <LinkBadge />
              </template>
            </ComponentPad>
            <!-- end Link badge -->
             <!-- Position Badge -->
            <SubHeading > 
                <template v-slot:subHeader>
                    Positioned badge
                </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <PositionBadge />
              </template>
            </ComponentPad>
            <!-- end Position Badge -->
        
            
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <BadgeInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BadgeInfo from "../components/Badge/BadgeInfo.vue";
import DefaultBadge from "../components/Badge/DefaultBadge.vue";
import LargerBadge from "../components/Badge/LargerBadge.vue";
import BadgeState from "../components/Badge/BadgeState.vue";
import CancelBadge from "../components/Badge/CancelBadge.vue";
import LinkBadge from "../components/Badge/LinkBadge.vue";
import PositionBadge from "../components/Badge/PositionBadge.vue";
import PillBadge from "../components/Badge/PillBadge.vue";
import PillOutlineBadge from "../components/Badge/PillOutlineBadge.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from '../components/Headers/SubHeading.vue';
import ComponentPad from "../components/Utils/ComponentPad.vue";
import OutlineBadge from '../components/Badge/OutlineBadge.vue';
import RectangleBadge from '../components/Badge/RectangleBadge.vue';
export default {
  metaInfo: {
    title: "Badges",
  },
  components: {
    BadgeInfo,
    Heading,
    ComponentPad,
    DefaultBadge,
    SubHeading,
    LargerBadge,
    BadgeState,
    PillBadge,
    PillOutlineBadge,
    OutlineBadge,
    CancelBadge,
    LinkBadge,
    RectangleBadge,
    PositionBadge,

  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
