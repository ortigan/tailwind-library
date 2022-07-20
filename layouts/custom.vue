<template>
  <div :class="store.theme === 'light' ? 'light' : 'dark'" class="relative">
  <transition name="fade">
    <div class="absolute top-4 right-4" v-if="showToast">
        <UtilsToast></UtilsToast>
    </div>
  </transition>
    <Header />
    <div class="dark:bg-[#121212] dark:text-gray-100 flex h-screen">
      <div class="px-4 md:container mt-20 h-screen">
        <div class="flex w-full flex-col h-screen">
          <div class="flex w-full h-screen">
            <!-- sidebar left -->
            <div class="md:w-44 flex flex-col h-screen overflow-y-hidden">
              <div class="overflow-y-auto hidden md:block">
                <div
                  class="flex flex-col text-base mt-6 space-y-1 text-slate-700 dark:text-gray-300"
                >
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
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import { useStore } from "~/store/index";
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
      store: useStore(),
      showToast: false,
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    window.Prism.highlightAll();
    window.Prism.plugins.NormalizeWhitespace.setDefaults({
      "remove-trailing": true,
      "remove-indent": true,
      "left-trim": true,
      "right-trim": true,
      // "break-lines": 80,
      // indent: 3,
      // "remove-initial-line-feed": false,
      // "tabs-to-spaces": 4,
      // "spaces-to-tabs": 4,
    });
    this.$bus.$on("showToastNotification", () => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    });
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
.bgGradient {
  background-image: url();
}
.fade-enter-active {
  animation: fade-in 0.2s;
}
.fade-leave-active {
  animation: fade-out 0.2s;
}
@keyframes fade-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes fade-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
