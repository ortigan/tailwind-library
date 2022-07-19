<template>
  <div>
      <div class="flex flex-col mt-6 space-y-1">
                  <div class="font-medium text-right">On this page</div>
                  <span v-for="(item,index) in itmes" :key="index">
                  <div class="text-base text-right">{{item.title}}</div>
                  </span>
                  <!-- <div class="text-base">Basic</div>
                  <div class="text-base">Button pills</div>
                  <div class="text-base">Gradient</div>
                  <div class="text-base">Rounded</div>
                  <div class="text-base">Social</div>
                  <div class="text-base">Payment</div>
                  <div class="text-base">Icon</div>
                  <div class="text-base">Loader</div> -->
                 
                </div>
  </div>
</template>

<script>
export default {
    data(){
return {
    items:[
            {
                id: 1,
                title: "Basic",
            },
            {
                id: 2,
                title: "Button pills",
            },
            {
                id: 3,
                title: "Gradient",
            },
            {
                id: 4,
                title: "Rounded",
            },
            {
                id: 5,
                title: "Social",
            },
            {
                id: 6,
                title: "Payment",
            },
            {
                id: 7,
                title: "Icon",
            },
            {
                id: 8,
                title: "Loader",
            },
    ]
}
}

}
</script>

<style>

</style>