<template>
  <div class="w-full flex justify-between py-2 mt-12">
    <div class="font-bold text-xl"><slot name="subHeader" /></div>
    <div class="flex flex-row space-x-2">
      <p><slot name="code"></slot></p>
      <p><slot name="copy"></slot></p>
    
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
