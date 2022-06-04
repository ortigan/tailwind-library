<template>
  <div
    class="lg:flex-row w-full  px-8 py-5 rounded-lg shadow-lg text-gray-700 bg-white"
  >
  <!-- Ui reference Untitled UI  -->
   <div class="grid grid-cols-2 md:grid-cols-4 gap-y-8 font-medium mt-6">
    <!-- Product -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Product</div>
       <div class="text-gray-600 text-base">Overview</div>
       <div class="text-gray-600 text-base">Features</div>
       <div class="text-gray-600 text-base">Solutions</div>
       <div class="text-gray-600 text-base">Tutorials</div>
       <div class="text-gray-600 text-base">Pricing</div>
       <div class="text-gray-600 text-base">Releases</div>
     </div>
     <!-- Company -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Company</div>
       <div class="text-gray-600 text-base">About us</div>
       <div class="text-gray-600 text-base">Careers</div>
       <div class="text-gray-600 text-base">Press</div>
       <div class="text-gray-600 text-base">News</div>
       <div class="text-gray-600 text-base">Media kit</div>
       <div class="text-gray-600 text-base">Contact</div>
     </div>
     <!-- Resources -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Resources</div>
       <div class="text-gray-600 text-base">Blog</div>
       <div class="text-gray-600 text-base">Newsletter</div>
       <div class="text-gray-600 text-base">Events</div>
       <div class="text-gray-600 text-base">Help centre</div>
       <div class="text-gray-600 text-base">Tutorials</div>
       <div class="text-gray-600 text-base">Support</div>
     </div>
     <!-- User cases -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Use cases</div>
       <div class="text-gray-600 text-base">Startups</div>
       <div class="text-gray-600 text-base">Enerprise</div>
       <div class="text-gray-600 text-base">Government</div>
       <div class="text-gray-600 text-base">SaaS centre</div>
       <div class="text-gray-600 text-base">Marketplaces</div>
       <div class="text-gray-600 text-base">Ecommerce</div>
     </div>
     <!-- Services -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Services</div>
       <div class="text-gray-600 text-base">Branding</div>
       <div class="text-gray-600 text-base">LinkedIn</div>
       <div class="text-gray-600 text-base">Design</div>
       <div class="text-gray-600 text-base">Marketing</div>
       <div class="text-gray-600 text-base">Advertisement</div>
     </div>
     <!-- Social -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Social</div>
       <div class="text-gray-600 text-base">Twiiter</div>
       <div class="text-gray-600 text-base">LinkedIn</div>
       <div class="text-gray-600 text-base">Facebook</div>
       <div class="text-gray-600 text-base">Github</div>
       <div class="text-gray-600 text-base">AngelList</div>
       <div class="text-gray-600 text-base">Dribbble</div>
     </div>
     <!-- Legal -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Legal</div>
       <div class="text-gray-600 text-base">Terms</div>
       <div class="text-gray-600 text-base">Privacy</div>
       <div class="text-gray-600 text-base">Cookies</div>
       <div class="text-gray-600 text-base">Licenses</div>
       <div class="text-gray-600 text-base">Settings</div>
       <div class="text-gray-600 text-base">Contact</div>
     </div>
     <!-- Apps -->
     <div class="flex flex-col">
       <div class="text-gray-400 text-sm mb-2">Apps</div>
       <div class="text-gray-600 text-base">Mac</div>
       <div class="text-gray-600 text-base">Windows</div>
       <div class="text-gray-600 text-base">iPhone</div>
       <div class="text-gray-600 text-base">Android</div>

     </div>
     <!--  -->
     
   </div>
   <div class="flex flex-col md:flex-row justify-between md:items-center w-full py-2 border-t mt-12">
  <!-- logo -->
    <div class="flex items-center md:px-4">
      <div class="font-bold text-lg text-gray-700 flex items-center w-10 h-10">
        <img class="w-1/2 h-1/2 md:w-full md:h-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="">
        <span class="px-2 text-base">tailwindcss</span>
      </div>
      <div class="w-full flex justify-end">
       
      </div>
    </div>
    <!--  -->
    <div class="text-xxs md:text-sm text-gray-400">
      &#169; Tailwind component library, All rights reserved
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
