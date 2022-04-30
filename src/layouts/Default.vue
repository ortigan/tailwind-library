<template>
  <div>
    <Header />
    <div class="bg-gray-100">
      <div class="container bg-gray-100">
        <div class="flex w-full flex-col h-screen">
          <div class="flex w-full h-screen">
            <!-- sidebar left -->
            <div class="w-44 flex flex-col min-h-screen overflow-y-hidden">

              <div class="overflow-y-auto">
                <div class="flex flex-col mt-6 space-y-1">
                  <span v-for="(item,index) in menu" :key="index">
                    <div :class="getPath() == item.link ? 'font-extrabold':''">

                    <g-link :to="item.link">
                      {{item.title}}
                    </g-link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <!--  -->
            <main class="w-full">
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
    title: "Hello, world!",
  },
  data(){
    return {
      menu: MenuItems
    }
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
