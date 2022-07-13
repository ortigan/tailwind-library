<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4 mb-12" id="avatarContainer">
          <Heading><template> Avatar </template> </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default avatar -->
          <section id="defaultAvatar">
            <SubHeading>
              <template v-slot:subHeader>Default avatar</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!default_avatar"
                  @click.native="default_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="default_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('defaultAvatarComp')"></CopyButton></template>
            </SubHeading>
            <div class="pb-4">
              <p>
                In the fifth component
                <a href="https://avatars.dicebear.com/"> DiceBear avatars </a>
                are used
              </p>
            </div>
            <ComponentPad>
              <template>
                <DefaultAvatar />
              </template>
            </ComponentPad>
            <span v-show="default_avatar" class="transition-all">
              <DefaultAvatarSnippet id="defaultAvatarComp" />
            </span>
          </section>
          <!-- end default avatar -->
          <!-- Default Sizes -->
          <section id="avatarSize">
            <SubHeading>
              <template v-slot:subHeader>Avatar sizes</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!size_avatar"
                  @click.native="size_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="size_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('sizeAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <div class="pb-4">
              <p>
                Use height and width classes from
                <a href="https://tailwindcss.com/" class="text-sky-700"
                  >tailwindcss</a
                >
                for variable size components
              </p>
            </div>
            <ComponentPad>
              <template>
                <SizeAvatar />
              </template>
            </ComponentPad>
            <span v-show="size_avatar" class="transition-all">
              <SizeAvatarSnippet id="sizeAvatarComp" />
            </span>
          </section>
          <!-- end  avatar sizes -->
          <!-- Presence avatar -->
          <section id="avatarWithIndicator">
            <SubHeading>
              <template v-slot:subHeader
                >Avatar with presence indicator</template
              >
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!presence_avatar"
                  @click.native="presence_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="presence_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('presenceAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <PresenceAvatar />
              </template>
            </ComponentPad>
            <span v-show="presence_avatar" class="transition-all">
              <PresenceAvatarSnippet id="presenceAvatarComp" />
            </span>
          </section>
          <!-- end presence avatar -->
          <!-- Circle avatar -->
          <section id="circleAvatar">
            <SubHeading>
              <template v-slot:subHeader>Circle</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!circle_avatar"
                  @click.native="circle_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="circle_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('circleAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <CircleAvatar />
              </template>
            </ComponentPad>
            <span v-show="circle_avatar" class="transition-all">
              <CircleAvatarSnippet id="circleAvatarComp" />
            </span>
          </section>
          <!-- end Circle avatar -->
          <!-- Square avatar -->
          <section id="squareAvatar">
            <SubHeading>
              <template v-slot:subHeader>Square</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!square_avatar"
                  @click.native="square_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="square_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('squareAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <SquareAvatar />
              </template>
            </ComponentPad>
            <span v-show="square_avatar" class="transition-all">
              <SquareAvatarSnippet id="squareAvatarComp" />
            </span>
          </section>
          <!-- end Square avatar -->
          <!-- PresenceRing avatar -->
          <section id="avatarWithRing">
            <SubHeading>
              <template v-slot:subHeader>Avatar with presence Ring</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!presencering_avatar"
                  @click.native="presencering_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="presencering_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('avatarWithRingComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <PresenceRingAvatar />
              </template>
            </ComponentPad>
            <span v-show="presencering_avatar" class="transition-all">
              <PresenceRingAvatarSnippet id="avatarWithRingComp"  />
            </span>
          </section>
          <!-- end presence Ring avatar -->
          <!-- Color avatar -->
          <section id="colorAvatar">
            <SubHeading>
              <template v-slot:subHeader>Color</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!color_avatar"
                  @click.native="color_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="color_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('colorAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <ColorAvatar />
              </template>
            </ComponentPad>
            <span v-show="color_avatar" class="transition-all">
              <ColorAvatarSnippet id="colorAvatarComp" />
            </span>
          </section>
          <!-- end Color avatar -->
          <!-- Badge avatar -->
          <section id="badgeAvatar">
            <SubHeading>
              <template v-slot:subHeader>Badge</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!badge_avatar"
                  @click.native="badge_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="badge_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('badgeAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <BadgeAvatar />
              </template>
            </ComponentPad>
            <span v-show="badge_avatar" class="transition-all">
              <BadgeAvatarSnippet id="badgeAvatarComp" />
            </span>
          </section>
          <!-- end Badge avatar -->
          <!-- Shadows avatar -->
          <section id="shadowAvatar">
            <SubHeading>
              <template v-slot:subHeader>Shadows</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!shadow_avatar"
                  @click.native="shadow_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="shadow_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('shadowAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <ShadowsAvatar />
              </template>
            </ComponentPad>
            <span v-show="shadow_avatar" class="transition-all">
              <ShadowAvatarSnippet id="shadowAvatarComp" />
            </span>
          </section>
          <!-- end Shadows avatar -->
          <!-- Group 1 avatar -->
          <section id="group1">
            <SubHeading>
              <template v-slot:subHeader>Group 1</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!group1_avatar"
                  @click.native="group1_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="group1_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('group1AvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <GroupAvatar1 />
              </template>
            </ComponentPad>
            <span v-show="group1_avatar" class="transition-all">
              <Group1AvatarSnippet id="group1AvatarComp" />
            </span>
          </section>
          <!-- end Group 1 avatar -->
          <!-- Group 2 avatar -->
          <section id="group2">
            <SubHeading>
              <template v-slot:subHeader>Group 2</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!group2_avatar"
                  @click.native="group2_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="group2_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('group2AvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <GroupAvatar2 />
              </template>
            </ComponentPad>
            <span v-show="group2_avatar" class="transition-all">
              <Group2AvatarSnippet id="group2AvatarComp" />
            </span>
          </section>
          <!-- end Group 2 avatar -->
          <!-- Info avatar -->
          <section id="infoAvatar">
            <SubHeading>
              <template v-slot:subHeader>Info</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!info_avatar"
                  @click.native="info_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="info_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('infoAvatarComp')"></CopyButton> </template>
            </SubHeading>
            <ComponentPad>
              <template>
                <InfoAvatar />
              </template>
            </ComponentPad>
            <span v-show="info_avatar" class="transition-all">
              <InfoAvatarSnippet id="infoAvatarComp" />
            </span>
          </section>
          <!-- end Info avatar -->
          <!-- DropDown Avatar avatar -->
          <section id="dropdownAvatar">
            <SubHeading>
              <template v-slot:subHeader>Drop Down</template>
              <template v-slot:code>
                <ShowCodeButton
                  v-if="!dropdown_avatar"
                  @click.native="dropdown_avatar = true"
                ></ShowCodeButton>
                <HideCodeButton
                  v-else
                  @click.native="dropdown_avatar = false"
                ></HideCodeButton>
              </template>
              <template v-slot:copy><CopyButton @click.native="copyToClipboard('dropdownAvatarComp')"></CopyButton></template>
            </SubHeading>
            <ComponentPad>
              <template>
                <DropDownAvatar />
              </template>
            </ComponentPad>
            <span v-show="dropdown_avatar" class="transition-all">
              <DropDownAvatarSnippet id="dropdownAvatarComp" />
            </span>
          </section>
          <!-- end DropDownAvatar avatar -->
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
              <button @click="scrollToSection('defaultAvatar')">
                Default Avatar
              </button>
              <button @click="scrollToSection('avatarSize')">
                Avatar Sizes
              </button>
              <button @click="scrollToSection('avatarWithIndicator')">
                Avatar with Indicator
              </button>
              <button @click="scrollToSection('circleAvatar')">
                Circle Avatar
              </button>
              <button @click="scrollToSection('squareAvatar')">
                Square Avatar
              </button>
              <button @click="scrollToSection('avatarWithRing')">
                Avatar with Ring
              </button>
              <button @click="scrollToSection('colorAvatar')">
                Color Avatar
              </button>
              <button @click="scrollToSection('badgeAvatar')">
                Badge Avatar
              </button>
              <button @click="scrollToSection('shadowAvatar')">
                Shadows Avatar
              </button>
              <button @click="scrollToSection('group1')">Group 1 Avatar</button>
              <button @click="scrollToSection('group2')">Group 2 Avatar</button>
              <button @click="scrollToSection('infoAvatar')">
                Info Avatar
              </button>
              <button @click="scrollToSection('dropdownAvatar')">
                Drop Down Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AvatarInfo from "../components/Avatar/AvatarInfo.vue";
import DefaultAvatar from "../components/Avatar/DefaultAvatar.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import Heading from "../components/Headers/Heading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import SizeAvatar from "../components/Avatar/SizeAvatar.vue";
import PresenceAvatar from "../components/Avatar/PresenceAvatar.vue";
import PresenceRingAvatar from "../components/Avatar/PresenceRingAvatar.vue";
import CircleAvatar from "../components/Avatar/CircleAvatar.vue";
import ColorAvatar from "../components/Avatar/ColorAvatar.vue";
import BadgeAvatar from "../components/Avatar/BadgeAvatar.vue";
import ShadowsAvatar from "../components/Avatar/ShadowsAvatar.vue";
import SquareAvatar from "../components/Avatar/SquareAvatar.vue";
import GroupAvatar1 from "../components/Avatar/AvatarGroup/GroupAvatar1.vue";
import GroupAvatar2 from "../components/Avatar/AvatarGroup/GroupAvatar2.vue";
import InfoAvatar from "../components/Avatar/InfoAvatar.vue";
import DropDownAvatar from "../components/Avatar/DropDownAvatar.vue";
import DefaultAvatarSnippet from "../components/Avatar/CodeSnippet/DefaultAvatarSnippet.vue";
import SquareAvatarSnippet from "../components/Avatar/CodeSnippet/SquareAvatarSnippet.vue";
import PresenceRingAvatarSnippet from "../components/Avatar/CodeSnippet/PresenceRingAvatarSnippet.vue";
import CircleAvatarSnippet from "../components/Avatar/CodeSnippet/CircleAvatarSnippet.vue";
import SizeAvatarSnippet from "../components/Avatar/CodeSnippet/SizeAvatarSnippet.vue";
import PresenceAvatarSnippet from "../components/Avatar/CodeSnippet/PresenceAvatarSnippet.vue";
import ColorAvatarSnippet from "../components/Avatar/CodeSnippet/ColorAvatarSnippet.vue";
import BadgeAvatarSnippet from "../components/Avatar/CodeSnippet/BadgeAvatarSnippet.vue";
import ShadowAvatarSnippet from "../components/Avatar/CodeSnippet/ShadowAvatarSnippet.vue";
import Group1AvatarSnippet from "../components/Avatar/CodeSnippet/Group1AvatarSnippet.vue";
import Group2AvatarSnippet from "../components/Avatar/CodeSnippet/Group2AvatarSnippet.vue";
import InfoAvatarSnippet from "../components/Avatar/CodeSnippet/InfoAvatarSnippet.vue";
import DropDownAvatarSnippet from "../components/Avatar/CodeSnippet/DropDownAvatarSnippet.vue";


export default {
  metaInfo: {
    title: "Badges",
  },
  // GLOBAL MIXIN

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
    ShadowsAvatar,
    SquareAvatar,
    GroupAvatar1,
    GroupAvatar2,
    InfoAvatar,
    DropDownAvatar,
    DefaultAvatarSnippet,
    SquareAvatarSnippet,
    PresenceRingAvatarSnippet,
    CircleAvatarSnippet,
    SizeAvatarSnippet,
    PresenceAvatarSnippet,
    ColorAvatarSnippet,
    BadgeAvatarSnippet,
    ShadowAvatarSnippet,
    Group1AvatarSnippet,
    Group2AvatarSnippet,
    InfoAvatarSnippet,
    DropDownAvatarSnippet,
  },
  data() {
    return {
      square_avatar: false,
      presencering_avatar: false,
      circle_avatar: false,
      default_avatar: false,
      size_avatar: false,
      presence_avatar: false,
      color_avatar: false,
      badge_avatar: false,
      shadow_avatar: false,
      group1_avatar: false,
      group2_avatar: false,
      info_avatar: false,
      dropdown_avatar: false,
      // SCROLL
      activeScrollSection: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("avatarContainer").scrollTo({
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
