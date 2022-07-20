<template>
  <div>
    <header class="w-full absolute top-0">
      <nav
        transition:fade
        class="fixed top-0 w-full bg-red-100 shadow-lg mb-6 z-10 f"
        id="mainNav"
        style="transition-duration: 0.5s; z-index: 999"
      >
        <div class="p-3 top-0 absolute w-full z-40 text-gray-300 uppercase">
          <div class="blurBg px-4 lg:container rounded-lg">
            <div class="flex items-center justify-between h-16 px-4 py-5">
              <div>
                <nuxt-link
                  to="/"
                  @click="moveTo('home')"
                  class="flex flex-row items-center font-normal tracking-wide uppercase text-primary"
                >
                  Air components
                </nuxt-link>
              </div>
              <div class="hidden md:block">
                <div
                  class="flex space-x-6 items-center font-light 2xl:text-2xl 3xl:text-2xl"
                >
                  <nuxt-link
                    to="/"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    @click="moveTo('home')"
                    ><p class="mr-4">Home</p></nuxt-link
                  >
                  <nuxt-link
                    to="/about"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/about'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">About</p></nuxt-link
                  >
                  <nuxt-link
                    to="/services"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/services'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">Services</p></nuxt-link
                  >
                  <nuxt-link
                    to="/contact"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/contact'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">Contact Us</p></nuxt-link
                  >
                  <nuxt-link
                    to="/collaborate"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/collaborate'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">Collaborate</p></nuxt-link
                  >
                  <nuxt-link
                    to="/blogs"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/blogs'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">Blogs</p></nuxt-link
                  >
                  <nuxt-link
                    to="/faqs"
                    class="text-tiny tracking-wider"
                    :class="
                      $route.path === '/faqs'
                        ? 'transition duration-500 ease-linear text-primary font-semibold'
                        : ''
                    "
                    ><p class="mr-4">FAQs</p></nuxt-link
                  >
                   <div>
                  <div
                    v-if="store.theme === 'dark'"
                    id="light"
                    @click="changeTheme('light')"
                    class="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div
                    v-else
                    id="dark"
                    @click="changeTheme('dark')"
                    class="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                </div>
                </div>
              </div>
              <div class="md:hidden flex flex-row">
                <div>
                  <div
                    v-if="store.theme === 'dark'"
                    id="light"
                    @click="changeTheme('light')"
                    class="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div
                    v-else
                    id="dark"
                    @click="changeTheme('dark')"
                    class="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <svg
                    @click="openNav()"
                    v-if="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    @click="closeNav()"
                    v-if="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              :class="
                isOpen == true
                  ? 'block flex justify-center h-screen'
                  : 'hidden flex justify-center h-screen'
              "
              class="border-b border-primary"
            >
              <transition name="fade">
                <div
                  class="flex flex-col space-y-2 pt-6 w-full text-primary border-t border-primary"
                  v-show="showItems"
                  @click="closeNav()"
                >
                  <nuxt-link
                    to="/"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >Home <br />
                    <p class="text-xxs font-light">Visit home page.</p>
                  </nuxt-link>
                  <nuxt-link
                    to="/about"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >About <br />
                    <p class="text-xxs font-light">Know more about us.</p>
                  </nuxt-link>
                  <nuxt-link
                    to="/services"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >Services <br />
                    <p class="text-xxs font-light">
                      Explore our suite of services.
                    </p>
                  </nuxt-link>
                  <nuxt-link
                    to="/contact"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >Contact us<br />
                    <p class="text-xxs font-light">Reach out to us.</p>
                  </nuxt-link>
                  <nuxt-link
                    to="/collaborate"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >Collaborate <br />
                    <p class="text-xxs font-light">
                      Like us? We'd love to have you on our team.
                    </p>
                  </nuxt-link>
                  <nuxt-link
                    to="/blogs"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >Blogs <br />
                    <p class="text-xxs font-light">
                      Read our blogs to better understand our thought process.
                    </p>
                  </nuxt-link>
                  <nuxt-link
                    to="/faqs"
                    class="px-2 py-1 text-darkPrimary font-semibold rounded navItem"
                    >FAQs <br />
                    <p class="text-xxs font-light">information repository.</p>
                  </nuxt-link>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { useStore } from "~/store/index";
export default {
  data() {
    return {
      isOpen: false,
      showItems: false,
      store: useStore(),
    };
  },
  methods: {
    moveTo(section) {
      const element = document.getElementById(`${section}`);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
    openNav() {
      this.isOpen = true;
      this.showItems = true;
      document.getElementById("mainNav").style.background = "#fff";
    },
    closeNav() {
      this.showItems = false;
      this.isOpen = false;
      document.getElementById("mainNav").style.background = "";
    },
    changeTheme(theme) {
      this.store.theme = theme;
    },
  },
};
</script>

<style></style>
