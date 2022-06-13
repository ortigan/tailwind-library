<template>
  <div class="">
    <Header />
    <div class=" flex h-screen">
      <div class="container  h-screen">
        <div class="flex w-full flex-col h-screen">
          <div class="flex w-full h-screen">
            <!-- sidebar left -->
            <div class="w-44 flex flex-col h-screen overflow-y-hidden">
              <div class="overflow-y-auto  hidden md:block">
                <div class="flex flex-col mt-6 space-y-1 text-slate-700">
                  <span v-for="(item,index) in menu" :key="index">
                    <div :class="getPath() == item.link ? 'font-semibold text-sky-700':''">

                    <g-link :to="item.link">
                      {{item.title}}
                    </g-link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <!-- Rest of the content -->
            <main class="w-full h-screen overflow-y-hidden">
              <slot />
            </main>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MenuItems from "../components/Navigation/MenuItems";
export default {
  components: { Header, Footer },
  metaInfo: {
    title: "Component library!",
  },
  data(){
    return {
      menu: MenuItems
    }
  },
   mounted() {
   
    Prism.highlightAll(); // highlight your code on mount
  },
  methods:{
    getPath(){
      return this.$route.path
    }
  }

};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
