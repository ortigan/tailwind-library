<template>
  <div
    class="lg:flex-row w-full  px-8 py-6 rounded-lg shadow-lg text-gray-700 bg-[#FAF5ED]"
  >
    <!--   -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 font-medium "
    >
      <!-- Product -->
      <div class="flex flex-col gap-2 font-montserrat text-[#2a2f3d] text-xs font-bold cursor-pointer">
        <div class=" text-xs mb-1 uppercase font-normal">Product</div>
        <div class="hover:text-[#ff6d2d]">Features</div>
        <div class="hover:text-[#ff6d2d]">Integrations</div>
        <div class="hover:text-[#ff6d2d]">Widgets</div>
        <div class="hover:text-[#ff6d2d]">Roadmap</div>
        <div class="hover:text-[#ff6d2d]">Change log</div>
        <div class="hover:text-[#ff6d2d]">Status</div>
        <div class="hover:text-[#ff6d2d]">Pricing</div>
      </div>
      <!-- Use cases -->
      <div class="flex flex-col gap-2 font-montserrat text-[#2a2f3d] text-xs font-bold cursor-pointer">
        <div class=" text-xs mb-1 uppercase font-normal">Use cases</div>
        <div class="hover:text-[#ff6d2d]">Templates</div>
        <div class="hover:text-[#ff6d2d]">Fundraising CRM</div>
        <div class="hover:text-[#ff6d2d]">Applicant tracker</div>
        <div class="hover:text-[#ff6d2d]">Marketing portal</div>
        <div class="hover:text-[#ff6d2d]">Customer support</div>
        <div class="hover:text-[#ff6d2d]">Social manager</div>
      </div>
      <!-- Resources -->
      <div class="flex flex-col gap-2 font-montserrat text-[#2a2f3d] text-xs font-bold cursor-pointer">
        <div class=" text-xs mb-1 uppercase font-normal">Resources</div>
        <div class="hover:text-[#ff6d2d]">Community</div>
        <div class="hover:text-[#ff6d2d]">Discord</div>
        <div class="hover:text-[#ff6d2d]">GitHub</div>
        <div class="hover:text-[#ff6d2d]">Case Studies</div>
        <div class="hover:text-[#ff6d2d]">Documentation</div>
        <div class="hover:text-[#ff6d2d]">Video tutorials</div>
      </div>
      <!-- Appsmith -->
      <div class="flex flex-col gap-2 font-montserrat text-[#2a2f3d] text-xs font-bold cursor-pointer">
        <div class=" text-xs mb-1 uppercase font-normal">Appsmith</div>
        <div class="hover:text-[#ff6d2d]">About</div>
        <div class="hover:text-[#ff6d2d]">News</div>
        <div class="hover:text-[#ff6d2d]">Blog</div>
        <div class="hover:text-[#ff6d2d]">
          Careers
          <span
            class="bg-[#ff6d2d] rounded-full text-white text-xxs font-normal px-1"
            >6</span
          >
        </div>
        <div class="text-xs font-bold hover:text-[#ff6d2d] cursor-pointer">Privacy</div>
      </div>

      <!-- Follow -->
      <div
        class="flex flex-col justify-between gap-2 font-montserrat text-[#2a2f3d]"
      >
        <div class="flex flex-col justify-between gap-2">
          <div class=" text-xs mb-1 uppercase">Follow</div>
          <div class="flex group items-center gap-1">
            <div>
              <svg
              class="group-hover:scale-110"
                width="16"
                height="16"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 12L10.5 14V10L14 12Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div class="text-xs font-bold group-hover:underline transition-all">Youtube</div>
          </div>
          <div class="flex group items-center gap-1">
            <div>
              <svg
                class="group-hover:scale-110"
                width="16"
                height="16"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="text-xs font-bold group-hover:underline transition-all">
              @theappsmith
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-col font-montserrat justify-between gap-2">
                      <div class=" text-xs mb-1 uppercase">Need help?</div>
                      <div class="text-xxs">Talk to us on <a href="" class="underline font-bold"> Discord</a> or mail <a href="" class="underline font-bold"> founders@appsmith.com</a></div>
        </div>
        <!--  -->
        <div class="font-montserrat font-bold">
            appsmith<span class="text-[#ff6d2d] font-bold">_</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{}],
    };
  },
};
</script>

<style scoped></style>
