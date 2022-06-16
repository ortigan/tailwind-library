<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
          <div class="overflow-y-auto px-4">
            <Heading />
            <div>
          <p class="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam?</p>
            </div>
            <!-- icon with dropdown -->
            <SubHeading>
            <template v-slot:subHeader
              >Icon First Dropdown</template
            >
          </SubHeading>
            <!-- end icon with dropdown -->
            <ComponentPad>
              <template>
                <div class="flex flex-row space-x-4 w-full justify-around">
                  <div><DropdownWithIcon /></div>
                  <div><DropdownNoIcon /></div>
                  <div><OnlyHeadingD /></div>
                </div>
              </template>
            </ComponentPad>
            <!-- code snippet -->
          <pre><code class="language-markup">
            <script type="prism-html-markup">
            <!-- Default alert -->
            
            
          </script>
          </code></pre>
          <!-- code snippet end -->
            <!-- profile dropdown -->
            <SubHeading>
            <template v-slot:subHeader>
              <div>
                Profile dropdown(On-Click)</div></template>
            </SubHeading>
            <!-- profile dropdown -->
            <ComponentPad>
              <template>
                <ProfileDropdown />
              </template>
            </ComponentPad>

            <!-- icon first dropdown -->
            <SubHeading>
              <template v-slot:subHeader>Youtube dropdown</template>
            </SubHeading>
            <!-- end icon first dropdown -->
            <ComponentPad>
              <template><DefaultDropDead /></template>
            </ComponentPad>
          </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <DropDownInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DefaultDropDead from "../components/DropDowns/DefaultDropDead.vue"
import DropDownInfo from "../components/DropDowns/DropDownInfo.vue"
import DropdownWithIcon from '../components/DropDowns/DropdownWithIcon.vue'
import DropdownNoIcon from "../components/DropDowns/DropdownNoIcon.vue"
import OnlyHeadingD from "../components/DropDowns/OnlyHeadingD.vue"
import ProfileDropdown from "../components/DropDowns/ProfileDropdown.vue"
import SubHeading from "../components/Headers/SubHeading.vue"
import ComponentPad from "../components/Utils/ComponentPad.vue"
export default {
    metaInfo: {
    title: 'Dropdown'
  },
  components: {
    DefaultDropDead,
    DropDownInfo,
    DropdownWithIcon,
    DropdownNoIcon,
    OnlyHeadingD,
    ProfileDropdown,
    SubHeading,
    ComponentPad
}
}
</script>

<style>

</style>