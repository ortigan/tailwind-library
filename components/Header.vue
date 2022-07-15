<template>
  <div class="border-b bg-white dark:bg-[#212121] dark:border-b-[#2D2D2D]">
    <div
      class="container h-16 w-full flex justify-between items-center dark:text-gray-300"
    >
      <!-- logo -->
      <div class="flex space-x-4 w-full">
        <div class="flex justify-center items-center">
        </div>
        <div class="font-semibold uppercase"> <nuxt-link to="/">
         <span class="font-normal"> Air </span> components</nuxt-link>
        </div>
      </div>
      <!--  -->
      <!-- <div>
        <div class="pl-4 pr-12 rounded-full bg-gray-100 py-1 flex">
          <p class="font-thin">Search component</p>  
          </div>
        </div> -->
      <!-- Nav items -->
      <div class="flex space-x-6">
        <div>Quickstart</div>
        <div>Components</div>
        <div>Templates</div>
        <div>Figma</div>
        <div>Faqs</div>
        <div v-if="store.theme === 'dark'" id="light" @click="changeTheme('light')" class="cursor-pointer">
          
          <svg
            width="20"
            height="20"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 12L23 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 2V1"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 23V22"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 20L19 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 4L19 5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 20L5 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 4L5 5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 12L2 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div v-else id="dark" @click="changeTheme('dark')" class="cursor-pointer">
          <svg
            width="20"
            height="20"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "~/store/index";
export default {
  data() {
    return {
      store: useStore(),
    };
  },
  methods:{
    changeTheme(theme) {
      this.store.theme = theme;
    }
  },
};
</script>

<style></style>
