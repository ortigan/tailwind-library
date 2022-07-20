<template>
  <div :class="store.theme === 'light' ? 'light' : 'dark'" class="">
    <Header />
    <div class="dark:bg-[#121212] w-full dark:text-gray-100 flex">
      <div class="px-4 md:container w-full">
            <main class="w-full min-h-screen overflow-x-hidden">
              <slot />
            </main>
      </div>
    </div>
    <div class="">
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import { useStore } from "~/store/index";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  metaInfo: {
    title: "Ortigan - Tailwind Component!",
  },
  data() {
    return {
      theme: "dark",
      store: useStore(),
    };
  },
//   mounted() {
//     Prism.highlightAll(); // highlight your code on mount
//   },
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
.bgGradient {
  background-image: url();
}
</style>
