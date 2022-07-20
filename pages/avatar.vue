<template>
  <NuxtLayout :name="layout">
    <div class="flex py-4 md:p-4">
      <!-- content -->
      <div class="flex pb-20 h-screen md:px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto w-full md:px-4 pb-20" id="alertContainer">
          <HeadersHeading> Avatar </HeadersHeading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default avatar -->
          <section id="defaultAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Default</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!default_avatar"
                  @click="default_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="default_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <div class="pb-4">
              <p>
                In the fifth component
                <a href="https://avatars.dicebear.com/" target="_blank" class="text-sky-500"> DiceBear avatars </a>
                are used
              </p>
            </div>
            <UtilsComponentPad>
              <AvatarDefault />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="default_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('defaultAvatar')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsDefault id="defaultAvatar" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End default avatar -->
          <!-- sizes avatar -->
          <section id="avatarSize" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Sizes</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!size_avatar"
                  @click="size_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="size_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
               <div class="pb-4">
              <p>
                Use height and width classes from
                <a href="https://tailwindcss.com/" class="text-sky-500 dark:text-sky-500"
                  >tailwindcss</a
                >
                for variable size components
              </p>
            </div>
            <UtilsComponentPad>
              <AvatarSize />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="size_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarSize')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsSize id="AvatarSize" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End sizes avatar -->
          <!-- Presence Indicator avatar -->
          <section id="avatarWithIndicator" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Presence Indicator</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!presence_avatar"
                  @click="presence_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="presence_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarPresence />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="presence_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarIndicator')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsPresence id="AvatarIndicator" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End presence indicator avatar -->
          <!-- Circle avatar -->
          <section id="circleAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Circle</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!circle_avatar"
                  @click="circle_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="circle_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarCircle />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="circle_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarCircle')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsCircle id="AvatarCircle" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Circle avatar -->
          <!-- Square avatar -->
          <section id="squareAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Square</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!square_avatar"
                  @click="square_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="square_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarSquare />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="square_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarSquare')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsSquare id="AvatarSquare" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Square avatar -->
          <!-- PresenceRing avatar -->
          <section id="avatarWithRing" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Presence Ring</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!presencering_avatar"
                  @click="presencering_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="presencering_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarPresenceRing />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="presencering_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarPresenceRing')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsPresenceRing id="AvatarPresenceRing" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Presence Ring avatar -->
          <!-- Color avatar -->
          <section id="colorAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Color</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!color_avatar"
                  @click="color_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="color_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarColor />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="color_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarColor')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsColor id="AvatarColor" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Color avatar -->
          <!-- Badge avatar -->
          <section id="badgeAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Badge</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!badge_avatar"
                  @click="badge_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="badge_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarBadge />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="badge_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarBadge')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsBadge id="AvatarBadge" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Badge avatar -->
          <!-- Shadow avatar -->
          <section id="shadowAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Shadow</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!shadow_avatar"
                  @click="shadow_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="shadow_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarShadow />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="shadow_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarShadow')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsShadow id="AvatarShadow" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Shadow avatar -->
          <!-- Group1 avatar -->
          <section id="group1" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Group1</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!group1_avatar"
                  @click="group1_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="group1_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarGroup1 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="group1_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarGroup1')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsGroup1 id="AvatarGroup1" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Group1 avatar -->
          <!-- Group2 avatar -->
          <section id="group2" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Group2</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!group2_avatar"
                  @click="group2_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="group2_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarGroup2 />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="group2_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarGroup2')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsGroup2 id="AvatarGroup2" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Group2 avatar -->
          <!-- Info avatar -->
          <section id="infoAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Info</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!info_avatar"
                  @click="info_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="info_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarInfo />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="info_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarInfo')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsInfo id="AvatarInfo" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End Info avatar -->
          <!-- DropDown avatar -->
          <section id="dropdownAvatar" class="w-full">
            <HeadersSubHeading>
              <template v-slot:subHeader>Drop Down</template>
              <template v-slot:code>
                <UtilsShowCodeButton
                  v-if="!dropdown_avatar"
                  @click="dropdown_avatar = true"
                ></UtilsShowCodeButton>
                <UtilsHideCodeButton
                  v-else
                  @click="dropdown_avatar = false"
                ></UtilsHideCodeButton>
              </template>
            </HeadersSubHeading>
            <UtilsComponentPad>
              <AvatarDropDown />
            </UtilsComponentPad>
            <!-- code snippet -->
            <transition name="fadeSnippet">
              <div
                v-show="dropdown_avatar"
                class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
              >
                <div class="flex justify-between px-2 pt-2">
                  <div>HTML</div>
                  <div>
                    <UtilsCopyButton
                      @click="copyToClipboard('AvatarDropDown')"
                    ></UtilsCopyButton>
                  </div>
                </div>
                <AvatarSnippetsDropDown id="AvatarDropDown" />
              </div>
            </transition>
            <!-- code snippet end -->
          </section>
          <!-- End DropDown avatar -->
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div
          class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"
        >
          <div class="overflow-y-auto">
            <!-- <AvatartInfo /> -->
            <div class="flex flex-col justify-start items-end space-y-2">
              <p class="text-normal font-bold">On This Page</p>
              <button @click="scrollToSection('defaultAvatar')">Default</button>
              <button @click="scrollToSection('avatarSize')">Sizes</button>
              <button @click="scrollToSection('avatarWithIndicator')">
                Presence indicator
              </button>
              <button @click="scrollToSection('circleAvatar')">Circle</button>
              <button @click="scrollToSection('squareAvatar')">Square</button>
              <button @click="scrollToSection('avatarWithRing')">
                Presence Ring
              </button>
              <button @click="scrollToSection('colorAvatar')">Color</button>
              <button @click="scrollToSection('badgeAvatar')">Badge</button>
              <button @click="scrollToSection('shadowAvatar')">Shadows</button>
              <button @click="scrollToSection('group1')">Group 1</button>
              <button @click="scrollToSection('group2')">Group 2</button>
              <button @click="scrollToSection('infoAvatar')">Info</button>
              <button @click="scrollToSection('dropdownAvatar')">
                Drop Down
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue";
import AlertInfo from "../components/Alert/AlertInfo.vue";
import Heading from "../components/Headers/Heading.vue";
export default {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    AlertInfo,
    Heading,
    SubHeading,
  },
  data() {
    return {
      layout: "custom",
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
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("alertContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.$bus.$emit("showToastNotification");
      this.$globalCopyFunc(id);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
