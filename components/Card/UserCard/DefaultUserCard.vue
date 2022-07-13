<template>
  <div class="flex w-full space-x-6 items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full">
      <div
        :class="
          `w-full p-4 rounded-xl ${item.shadowColor} ${item.border} ${
            item.hoverShadow
          } ${item.textColor} ${item.bgColor} ${item.border} ${
            item.hoverTextColor
          } ${item.hoverBgColor}`
        "
      >
        <div class="flex flex-col justify-center items-center w-full">
          <div
            class="flex text-2xl font-semibold justify-center rounded-full h-16 w-16 overflow-hidden"
          >
            <img
              class="rounded-full object-cover w-full h-full hover:scale-105"
              :src="item.avatar"
              alt=""
            />
          </div>
          <div class="flex justify-center text-base font-semibold">
            {{ item.title }}
          </div>
          <div
            :class="
              `flex justify-center text-xxs font-semibold ${item.textColor}`
            "
          >
            {{ item.subTitle }}
          </div>
        </div>
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
          avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg`,
          textColor: "text-gray-700",
          bgColor: "bg-white",
          shadowColor: "shadow-lg",
          subTitle: "Software developer",
          hoverShadow: "hover:shadow-inner",
          title: "Elvis ray",
          type: "Type 1",
        },
        {
          id: 2,
          avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1652079933/Tailwind-Component-library/Human%20avatar/yash-mevawala-_hQfqHt0MTg-unsplash_u87uhe.jpg`,
          textColor: "text-gray-700",
          bgColor: "bg-white",
          border: "border border-gray-700",
          hoverShadow: "hover:shadow-inner",
          title: "Elvis ray",
          subTitle: "Product manager",

          type: "Type 1",
        },
        {
          id: 3,
          avatar: `https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg`,
          textColor: "text-gray-100 font-normal",
          bgColor: "bg-gray-700",
          hoverBgColor: "hover:bg-gray-800",
          shadowColor: "shadow-lg",
          hoverShadow: "hover:shadow-inner",
          title: "John smith",
          type: "Type 1",
          subTitle: "Backend developer",
        },
      ],
    };
  },
};
</script>

<style></style>
