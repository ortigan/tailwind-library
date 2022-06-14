<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading />
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- icon first accordion -->
          <SubHeading>
            <template v-slot:subHeader
              >Icon First accordion</template
            >
          </SubHeading>
          <!-- end icon first accordion -->
          <ComponentPad>
            <template>
              <div class="w-full flex flex-col space-y-2 ">
                <IconFirstAcco />
                <PlusFirstAcco />
                <UserIconAcco />
              </div>
            </template>
          </ComponentPad>
          <!-- Default alert -->
          <SubHeading>
            <template v-slot:subHeader
              >Default accordion</template
            >
          </SubHeading>
          <!--End Default alert -->
          <ComponentPad>
            <template>
              <div class="w-full flex flex-col space-y-2 ">
                <AccordionSimple />
              </div>
            </template>
          </ComponentPad>            
         
          <!-- Accordion With Icon -->
          <SubHeading>
            <template v-slot:subHeader
              >Accordion with Icon</template
            >
          </SubHeading>
          <!--End Accordion With Icon -->
          <ComponentPad>
            <template>
              <div class="w-full flex flex-col space-y-2 ">
                <AccordionWithIcon />
              </div>
            </template>
          </ComponentPad> 
          <!-- Border accordion -->
          <SubHeading>
            <template v-slot:subHeader
              >Border accordion</template
            >
          </SubHeading>
          <!-- end border accordion -->

          <ComponentPad>
            <template>
              <div class="flex flex-col w-full space-y-5">
                <BorderAcco />
                <BorderType2Acco />
              </div>
            </template>
          </ComponentPad>

          <!-- list accordion -->
          <SubHeading>
            <template v-slot:subHeader
              >List Accordion</template
            >
          </SubHeading>
          <!--End list accordion -->
          <ComponentPad>
            <template>
              <div class="flex flex-col w-full space-y-5">
                <ListAcco />
              </div>
            </template>
          </ComponentPad>
          <!-- open list accordion -->
         <SubHeading>
            <template v-slot:subHeader
              >List-Open-Until-closed-Accordion</template
            >
          </SubHeading>
          <!--End list open accordion -->
         <ComponentPad>
            <template>
              <div class="flex flex-col w-full space-y-5">
                <ListOpenAcco />
              </div>
            </template>
          </ComponentPad>
          <!-- Spaced accordion -->
          <SubHeading>
            <template v-slot:subHeader
              >Spaced accordion</template
            >
          </SubHeading>
          <!-- end Spaced accordion -->
          <ComponentPad>
            <template>
              <div class="flex flex-col w-full space-y-5">
                <SpacedAcco /><GlassAcco />
              </div>
            </template>
          </ComponentPad>
          
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <AccordionInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SubHeading from "../components/Headers/SubHeading.vue";
import AccordionSimple from "../components/Accordion/AccordionSimple.vue";
import AccordionInfo from "../components/Accordion/AccordionInfo.vue";
import AccordionWithIcon from "../components/Accordion/AccordionWithIcon.vue";
import BorderAcco from "../components/Accordion/BorderAcco.vue";
import SpacedAcco from "../components/Accordion/SpacedAcco.vue";
import GlassAcco from "../components/Accordion/GlassAcco.vue";
import ListAcco from "../components/Accordion/ListAcco.vue";
import IconFirstAcco from "../components/Accordion/IconFirstAcco.vue";
import PlusFirstAcco from "../components/Accordion/PlusFirstAcco.vue";
import UserIconAcco from "../components/Accordion/UserIconAcco.vue";
import BorderType2Acco from "../components/Accordion/BorderType2Acco.vue";
import ListOpenAcco from "../components/Accordion/ListOpenAcco.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";

export default {
  metaInfo: {
    title: "Accordion",
  },
  components: {
    AccordionSimple,
    AccordionInfo,
    AccordionWithIcon,
    BorderAcco,
    SpacedAcco,
    GlassAcco,
    ListAcco,
    IconFirstAcco,
    PlusFirstAcco,
    UserIconAcco,
    BorderType2Acco,
    ListOpenAcco,
    ComponentPad,
    SubHeading
  },
};
</script>

<style>
</style>