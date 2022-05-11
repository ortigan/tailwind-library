<template>
  <div class="flex w-80 justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
      <div
        :class="
          `flex flex-col group overflow-hidden group w-full h-full rounded-3xl ${
            item.shadowColor
          } ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${
            item.border
          } ${item.hoverTextColor} ${item.hoverBgColor}`
        "
      >
        <div class="h-1/3 py-4 bg-indigo-400 w-full">
          <div class="flex justify-between p-4">
            <div class="font-medium text-white">Profile</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- avatar -->
        <div class="flex justify-center rounded-3xl bg-white h-full">
          <div
            class="
              w-24
              h-24
              p-0.5
              -translate-y-12
              bg-indigo-200
              rounded-full
              overflow-hidden
            "
          >
            <img
              class="w-full h-full object-cover group-hover:scale-110"
              src="https://res.cloudinary.com/pranav1421/image/upload/v1652250432/Tailwind-Component-library/Human%20avatar/IMG_6355_xcaeag.png"
              alt=""
            />
          </div>
        </div>
        <!-- end avatar -->
        <div class="flex justify-between -translate-y-20 px-4 -mb-16 rounded-3xl">
          <div class="flex flex-col items-center">
            <div class="text-xs font-semibold text-gray-500">
              Posts
            </div>
            <div class="font-bold">41</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-xs font-semibold text-gray-500">
              Followers
            </div>
            <div class="font-bold">289</div>
          </div>
        </div>
        <div
          class="
            flex flex-col
            justify-between
            w-full
            rounded-xl
            overflow-hidden
            -translate-y-5
          "
        >
          <div
            class="
              w-full
              flex flex-col
              items-center
              justify-between
              px-4
              rounded-xl
            "
          >
            <div :class="`text-2xl font-semibold tracking-tighter ${item.textColor}`">
              {{ item.title }}
            </div>
            <div :class="`text-xxs font-normal ${item.textColor}`">
              {{ item.subTitle }}
            </div>
          </div>
        </div>
        <!-- <div
          class="text-gray-100 w-full flex justify-center py-3 bg-indigo-400"
        >
          Button
        </div> -->
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          textColor: "text-gray-700",
          bgColor: "bg-white",
          shadowColor: "shadow-lg",
          hoverShadow: "hover:shadow-3xl",
          title: "Charles Green",
          subTitle: "Product photographer",
          collegeName: "Harvard University",
          type: "Type 1",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
