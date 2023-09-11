<script setup lang="ts">

</script>

<template>
  <div class="hidden md:flex absolute outline outline-2 h-full w-16 z-50"></div>
  <div class="hidden md:flex absolute outline outline-2 h-full w-16 right-0 z-50"></div>
  <div class="flex absolute outline outline-2 h-16 w-full z-50">
    <div class="flex flex-row ml-8 md:ml-16 h-16 gap-8 items-center md:pl-8 mt-0.5">
      <RouterLink to="/" class="font-jost pb-1 text-xl cursor-pointer z-50">Recipes</RouterLink>
      <RouterLink to="/family" class="font-jost pb-1 text-xl cursor-pointer z-50">Family</RouterLink>
      <RouterLink to="/about" class="font-jost pb-1 text-xl cursor-pointer z-50">About</RouterLink>
    </div>
  </div>
  <div class="hidden md:flex absolute outline outline-2 h-16 w-full bottom-0"></div>
  <section class="absolute w-full h-[calc(100%-64px)] md:w-[calc(100%-128px)] md:h-[calc(100%-128px)] md:left-16 top-16">
    <slot></slot>
  </section>
</template>

<style scoped></style>
