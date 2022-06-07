<template>
  <div class="w-full">
    <span v-for="(item, index) in items" :key="index" >
      <div class="flex flex-col space-y-3">
        <div
          v-on:click="isOpen = !isOpen"
          role="accordion"
          :class="`p-4 text-sm ${item.textColor} ${item.bgColor} flex flex-row rounded-lg justify-between overflow-hidden cursor-pointer`"
        >
          <div class="font-medium">{{ item.type }} Accordion</div>
          <div>
            <span v-if="!isOpen"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                /></svg></span
            ><span v-else
              ><svg 
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 12H4"
                /></svg
            ></span>
          </div>
        </div>
       
        <div>
          <span
            class="w-full flex flex-row justify-between text-xs"
            :class="isOpen ? 'd-block' : 'hidden'"
          >
            <p
              class="rounded-lg"
              :class="`${item.bgColor2} ${item.textColor2} p-4 `"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur placeat incidunt ipsam alias similique sequi
              temporibus. Dicta odio obcaecati odit inventore, suscipit laborum
              sequi mollitia eligendi, repellendus, quas cupiditate amet.
            </p>
          </span>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        {
          id: 1,
          type: "Spaced",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
          bgColor2: "bg-gray-100",
          textColor2: "text-gray-900",
          border: "border-1",
          borderColor: "border-gray-900",
        },
      ],
    };
  },
};
</script>

<style>
</style>