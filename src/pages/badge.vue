<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4" id="badgeContainer">
          <Heading>
            <template> Badge </template>
          </Heading>
          <div>
            <p class="text-base font-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default badge -->
          <section id="defaultBadge">
          <SubHeading>
            <template v-slot:subHeader>Default badge</template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!default_badge"
                @click.native="default_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="default_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="default_badge" class="transition-all">
            <DefaultBadgeSnippet id="defaultBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end default badge -->
          <!-- Larger badge -->
          <section id="largeBadge">
          <SubHeading>
            <template v-slot:subHeader> Larger badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!large_badge"
                @click.native="large_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="large_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('largeBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <LargerBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="large_badge" class="transition-all">
            <LargeBadgeSnippet id="largeBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Larger badge -->
          <!-- state color badge -->
          <section id="badgeStateColor">
          <SubHeading>
            <template v-slot:subHeader> Badge State color </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!statecolor_badge"
                @click.native="statecolor_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="statecolor_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('stateColorBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeState />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="statecolor_badge" class="transition-all">
            <BadgeStateSnippet id="stateColorBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end state color badge -->
          <!-- Outline badge -->
          <section id="outlineBadge">
          <SubHeading>
            <template v-slot:subHeader> Outline badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!outline_badge"
                @click.native="outline_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="outline_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('outlineBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <OutlineBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="outline_badge" class="transition-all">
            <OutlineBadgeSnippet id="outlineBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end outline badge -->
          <!-- Pill badge -->
          <section id="pillBadge">
          <SubHeading>
            <template v-slot:subHeader> Pill badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!pill_badge"
                @click.native="pill_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="pill_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('pillBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PillBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="pill_badge" class="transition-all">
            <PillBadgeSnippet id="pillBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Pill badge -->
          <!-- Pill outline badge -->
          <section id="pillBadgeOutline">
          <SubHeading>
            <template v-slot:subHeader> Pill Outline badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!pilloutline_badge"
                @click.native="pilloutline_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="pilloutline_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('pillOutlineBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PillOutlineBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="pilloutline_badge" class="transition-all">
            <PillOutlineBadgeSnippet id="pillOutlineBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Pill outline badge -->
          <!-- Rectange badge -->
          <section id="rectangleBadge">
          <SubHeading>
            <template v-slot:subHeader> Rectangle badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!rectangle_badge"
                @click.native="rectangle_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="rectangle_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('rectangleBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <RectangleBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <span v-show="rectangle_badge" class="transition-all">
            <RectangleBadgeSnippet id="rectangleBadgeComp" />
          </span>
          </section>
          <!-- code snippet end -->
          <!-- end Rectangle badge -->
          <!-- Cancel badge -->
          <section id="badgeWithCancelButton">
          <SubHeading>
            <template v-slot:subHeader> Badge with cancel button </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!cancelbutton_badge"
                @click.native="cancelbutton_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="cancelbutton_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('badgeWithCancelButtonComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <CancelBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="cancelbutton_badge" class="transition-all">
            <CancelBadgeSnippet id="badgeWithCancelButtonComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Cancel badge -->
          <!-- Link badge -->
          <section id="badgeAsLink">
          <SubHeading>
            <template v-slot:subHeader> Badges as link </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!link_badge"
                @click.native="link_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="link_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('linkBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <LinkBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="link_badge" class="transition-all">
            <LinkBadgeSnippet id="linkBadgeComp" />
          </span>
          </section>
          <!-- code snippet end--->
          <!-- end Link badge -->
          <!--  badge Sizes -->
          <section id="BadgeAsSizes">
          <SubHeading>
            <template v-slot:subHeader> Badges as Sizes </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!size_badge"
                @click.native="size_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="size_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('sizeBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeSizes />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="size_badge" class="transition-all">
            <BadgeSizeSnippet id="sizeBadgeComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end  badge Sizes -->
          <!-- Position Badge -->
          <section id="positionedBadge">
          <SubHeading>
            <template v-slot:subHeader> Positioned badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!positioned_badge"
                @click.native="positioned_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="positioned_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('positionedBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PositionBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="positioned_badge" class="transition-all">
            <PositionBadgeSnippet id="positionedBadgeComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end Position Badge -->
          <!-- Text Badge -->
          <section id="textBadge">
          <SubHeading>
            <template v-slot:subHeader> Text badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!text_badge"
                @click.native="text_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="text_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('textBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <TextBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="text_badge" class="transition-all">
            <TextBadgeSnippet id="textBadgeComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end text Badge -->
          <!-- Text Badge -->
          <section id="iconBadge">
          <SubHeading>
            <template v-slot:subHeader> Icon Badge </template>
            <template v-slot:code>
              <ShowCodeButton
                v-if="!icon_badge"
                @click.native="icon_badge = true"
              ></ShowCodeButton>
              <HideCodeButton
                v-else
                @click.native="icon_badge = false"
              ></HideCodeButton>
            </template>
            <template v-slot:copy><CopyButton @click.native="copyToClipboard('iconBadgeComp')"></CopyButton> </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <IconBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <span v-show="icon_badge" class="transition-all">
            <IconBadgeSnippet id="iconBadgeComp" />
          </span>
          </section>
          <!-- code snippet end --->
          <!-- end New Badge -->
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div
          class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"
        >
          <div class="overflow-y-auto">
            <!-- <AlertInfo /> -->
            <div class="flex flex-col justify-start items-end space-y-2">
              <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultBadge')">
                Default Badge
              </button>
              <button @click="scrollToSection('largeBadge')">
                Large Badge
              </button>
              <button @click="scrollToSection('badgeStateColor')">
                Badge State Color
              </button>
              <button @click="scrollToSection('outlineBadge')">
                Outline Badge
              </button>
              <button @click="scrollToSection('pillBadge')">
                Pill Badge
              </button>
              <button @click="scrollToSection('pillBadgeOutline')">
                Pill Outline Badge 
              </button>
              <button @click="scrollToSection('rectangleBadge')">
                Rectangle Badge 
              </button>
              <button @click="scrollToSection('badgeWithCancelButton')" class="text-right">
                Badge With Cancel Button
              </button>
              <button @click="scrollToSection('badgeAsLink')">
                Badge As Link 
              </button>
              <button @click="scrollToSection('BadgeAsSizes')">
                Badge As Sizes
              </button>
              <button @click="scrollToSection('positionedBadge')">
                Positioned badge
              </button>
              <button @click="scrollToSection('textBadge')">
                Text Badge
              </button>
              <button @click="scrollToSection('iconBadge')">
                Icon Badge
              </button>            
            </div>
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
import IconBadge from "../components/Badge/IconBadge.vue";
import TextBadge from "../components/Badge/TextBadge.vue";
import BadgeSizes from "../components/Badge/BadgeSizes.vue";
import PillOutlineBadge from "../components/Badge/PillOutlineBadge.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import OutlineBadge from "../components/Badge/OutlineBadge.vue";
import RectangleBadge from "../components/Badge/RectangleBadge.vue";
import DefaultBadgeSnippet from "../components/Badge/CodeSnippet/DefaultBadgeSnippet.vue";
import LargeBadgeSnippet from "../components/Badge/CodeSnippet/LargeBadgeSnippet.vue";
import BadgeStateSnippet from "../components/Badge/CodeSnippet/BadgeStateSnippet.vue";
import OutlineBadgeSnippet from "../components/Badge/CodeSnippet/OutlineBadgeSnippet.vue";
import PillBadgeSnippet from "../components/Badge/CodeSnippet/PillBadgeSnippet.vue";
import PillOutlineBadgeSnippet from "../components/Badge/CodeSnippet/PillOutlineBadgeSnippet.vue";
import RectangleBadgeSnippet from "../components/Badge/CodeSnippet/RectangleBadgeSnippet.vue";
import CancelBadgeSnippet from "../components/Badge/CodeSnippet/CancelBadgeSnippet.vue";
import LinkBadgeSnippet from "../components/Badge/CodeSnippet/LinkBadgeSnippet.vue";
import BadgeSizeSnippet from "../components/Badge/CodeSnippet/BadgeSizeSnippet.vue";
import PositionBadgeSnippet from "../components/Badge/CodeSnippet/PositionBadgeSnippet.vue";
import TextBadgeSnippet from "../components/Badge/CodeSnippet/TextBadgeSnippet.vue";
import IconBadgeSnippet from "../components/Badge/CodeSnippet/IconBadgeSnippet.vue";

import {UtilsMixin} from '../minins/utils.js'
export default {
  metaInfo: {
    title: "Badges",
  },
  // GLOBAL MIXIN
  mixins: [UtilsMixin],
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
    IconBadge,
    CancelBadge,
    LinkBadge,
    RectangleBadge,
    PositionBadge,
    BadgeSizes,
    TextBadge,
    DefaultBadgeSnippet,
    LargeBadgeSnippet,
    BadgeStateSnippet,
    OutlineBadgeSnippet,
    PillBadgeSnippet,
    PillOutlineBadgeSnippet,
    RectangleBadgeSnippet,
    CancelBadgeSnippet,
    LinkBadgeSnippet,
    BadgeSizeSnippet,
    PositionBadgeSnippet,
    TextBadgeSnippet,
    IconBadgeSnippet,
  },
  data() {
    return {
      default_badge: false,
      large_badge: false,
      outline_badge: false,
      statecolor_badge: false,
      pill_badge: false,
      pilloutline_badge: false,
      rectangle_badge: false,
      cancelbutton_badge: false,
      link_badge: false,
      size_badge: false,
      positioned_badge: false,
      text_badge: false,
      icon_badge: false,
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("badgeContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.globalCopyFunc(id)
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
