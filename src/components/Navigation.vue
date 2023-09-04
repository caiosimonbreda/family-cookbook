<script setup lang="ts">

</script>

<template>
  <!-- <div class="flex flex-col h-[100vh] w-full bg-red-400">
    <div class="h-14 w-full outline outline-2">
    </div>
    <div class="flex flex-row h-full justify-between">
      <div class="h-full w-14 bg-blue-200 outline outline-2">
        test
      </div>
      <div class="w-full h-[calc(100vh - 24px)]">test</div>
      <div class="h-full w-14 outline outline-2">
        test
      </div>
    </div>
    <div class="h-14 w-full outline outline-2">
    </div>
  </div> -->
  <div class="absolute outline outline-2 h-full w-16">
    <div class="flex flex-row ml-16 h-16 gap-8 items-center pl-8 mt-0.5">
      <RouterLink to="/" class="font-jost pb-1 text-xl cursor-pointer z-50">Recipes</RouterLink>
      <RouterLink to="/family" class="font-jost pb-1 text-xl cursor-pointer z-50">Family</RouterLink>
      <RouterLink to="/about" class="font-jost pb-1 text-xl cursor-pointer z-50">About</RouterLink>
    </div>

  </div>
  <div class="absolute outline outline-2 h-full w-16 right-0"></div>
  <div class="absolute outline outline-2 h-16 w-full"></div>
  <div class="absolute outline outline-2 h-16 w-full bottom-0"></div>
  <section class="absolute w-[calc(100%-128px)] h-[calc(100%-128px)] left-16 top-16">
    <slot></slot>
  </section>
</template>

<style scoped></style>
