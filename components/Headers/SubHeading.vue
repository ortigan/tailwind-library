<template>
  <div class="w-full flex justify-between py-2 mt-12">
    <div class="font-bold text-xl"><slot name="subHeader" /></div>
    <div class="flex flex-row space-x-2">
      <div><slot name="code"></slot></div>
      <div><slot name="copy"></slot></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
