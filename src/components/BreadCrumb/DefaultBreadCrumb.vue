<template>
  <div class="flex w-80 justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
     hello
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
          type: "Type 7",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
