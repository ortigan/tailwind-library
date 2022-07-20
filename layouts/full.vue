<template>
  <div :class="store.theme === 'light' ? 'light' : 'dark'" class="">
    <Header />
    <div class="dark:bg-[#121212] dark:text-gray-100 flex h-screen">
      <div class="px-2 md:container h-screen">
        <div class="flex w-full flex-col h-screen">
          <div class="flex w-full h-screen">
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
