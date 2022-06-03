<template>
  <Layout>
    <div class="flex">
       <!-- content -->
            <div class="flex-1 mt-4 h-screen">
                <div>
                  LANDER
                </div>
            </div>
            <!-- right sidebar -->
            <div class="hidden lg:block">
           <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
              <div class="overflow-y-auto">
                <div class="flex flex-col mt-6 space-y-1">
                  <div class="font-medium">On this page</div>
                  <div class="text-base">Basic</div>
                  <div class="text-base">Button pills</div>
                  <div class="text-base">Gradient</div>
                  <div class="text-base">Rounded</div>
                  <div class="text-base">Social</div>
                  <div class="text-base">Payment</div>
                  <div class="text-base">Icon</div>
                  <div class="text-base">Loader</div>
                 
                </div>
              </div>
            </div>
            </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
