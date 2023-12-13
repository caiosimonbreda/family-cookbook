<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import recipes from './assets/recipes.json'
import authors from './assets/authors/authors.json'
import { ref } from 'vue'
import { Recipe, Author } from '@/types/index'

const recipeList = ref<Recipe[]>([])
const authorsList = ref<Author[]>([])

recipeList.value = recipes.recipes
authorsList.value = authors.authors

</script>

<template>
  <Navigation>
    <RouterView v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" :recipes="recipeList" :authors="authorsList" />
      </transition>
    </RouterView>
  </Navigation>
</template>

<style>
.fade-enter-active {
  opacity: 0;
  transition-duration: 0.3s;
}

.fade-enter-to {
  opacity: 100;
}

.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transition-duration: 0.3s;
}

</style>@/types