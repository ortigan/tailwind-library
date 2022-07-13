<template>
  <div :class="store.theme === 'light' ? 'light' : 'dark'" class="">
    <Header />
    <div class="dark:bg-[#121212] dark:text-gray-100 flex h-screen">
      <div class="container  h-screen">
        <div class="flex w-full flex-col h-screen">
          <div class="flex w-full h-screen">
            <!-- sidebar left -->
            <div class="w-44 flex flex-col h-screen overflow-y-hidden">
              <div class="overflow-y-auto  hidden md:block">
                <div class="flex flex-col text-base mt-6 space-y-1 text-slate-700 dark:text-gray-300">
                  <span v-for="(item, index) in menu" :key="index">
                    <div
                      :class="
                        getPath() == item.link
                          ? 'font-semibold text-sky-700 dark:text-sky-500'
                          : ''
                      "
                    >
                      <nuxt-link :to="item.link">
                        {{ item.title }}
                      </nuxt-link>
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
  <div class="">

    <Footer />
  </div>
  </div>
</template>

<script>
import {useStore} from '~/store/index';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MenuItems from "../components/Navigation/MenuItems";
export default {
  components: { Header, Footer },
  metaInfo: {
    title: "Component library!",
  
  },
  data() {
    return {
      menu: MenuItems,
      theme: "dark",
      store: useStore()
    };
  },
  mounted() {
    Prism.highlightAll(); // highlight your code on mount
  },
  methods: {
    getPath() {
      return this.$route.path;
    },
  },

};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.bgGradient{
  background-image: url();
}
</style>
