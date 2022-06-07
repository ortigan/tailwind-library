<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index">
      <div :class="`${item.bgColor2} rounded-lg`">
        <div
          @click="toggleAcco(item.id)"
          role="accordion"
          :class="`p-4 text-sm ${item.textColor} ${item.bgColor} flex flex-row rounded-lg justify-between overflow-hidden cursor-pointer`"
        >
          <div class="font-medium">Accordion {{ item.type }}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              :class="activeAccoID == item.id ? `transform rotate-180` : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div class="px-4" v-show="activeAccoIDs.includes(item.id)">
          <hr :class="`${item.border} ${item.borderColor}`" />
        </div>
        <div v-show="activeAccoIDs.includes(item.id)">
          <span class="w-full flex flex-row justify-between text-xs">
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
      activeAccoID: null,
      activeAccoIDs: [],
      items: [
        {
          id: 1,
          type: "1",
          textColor: "text-gray-700",
          bgColor: "bg-green-100",
          bgColor2: "bg-green-100",
          textColor2: "text-gray-900",
          border: "border-1",
          borderColor: "border-gray-900",
        },
        {
          id: 2,
          type: "2",
          textColor: "text-gray-700",
          bgColor: "bg-green-200",
          bgColor2: "bg-green-200",
          textColor2: "text-gray-900",
          border: "border-1",
          borderColor: "border-gray-900",
        },
      ],
    };
  },
  methods: {
    toggleAcco(id) {       
        if(this.activeAccoIDs.includes(id)) {
            const index = this.activeAccoIDs.indexOf(id);
            this.activeAccoIDs.splice(index, 1);
        } else {
            this.activeAccoIDs.push(id)
        }
    },
  },
}
</script>

<style>

</style>