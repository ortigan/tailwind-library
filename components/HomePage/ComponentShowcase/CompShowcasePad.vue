<template>
<div>
    <div class="w-full h-56 md:h-64 border border-[#C2C2C2] dark:border-zinc-600 rounded-lg">
            <div class="h-4/5">
                <slot name="image" />
            </div>
            <div class="h-1/5 w-full flex items-center border border-t-[#C2C2C2] bg-[#F9FAFB] dark:border-zinc-600 dark:bg-[#374151] p-4">
                <div class="text-sm md:text-base"> <slot name="title" /></div>
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
