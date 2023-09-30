<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation>
    <RouterView v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </Navigation>
</template>

<style>
.fade-enter-active {
  opacity: 0;
  transition-duration: 0.2s;
}

.fade-enter-to {
  opacity: 100;
}

.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.2s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transition-duration: 0.2s;
}

</style>