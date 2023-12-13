<script setup lang="ts">
import { ref } from 'vue'
import { Recipe, Author } from '@/types/index'
import { useRouter, useRoute } from 'vue-router'

const [router, route] = [useRouter(), useRoute()]

const props = defineProps<{
  recipes: Recipe[]
  authors: Author[]
}>()

const recipeId = Number(route.params.recipeId)
const recipe = props.recipes.find(recipe => recipe.id === recipeId)!
const author = props.authors.find((author) => author.id === recipe.author)

const getRecipeImageUrl = (id: number) => {
  return new URL(`/src/assets/recipes/${id}.jpg`, import.meta.url).href;
}

const getAuthorImageUrl = (id: string) => {
  return new URL(`/src/assets/authors/${id}.png`, import.meta.url).href;
}

const ingredientsObj = recipe.ingredients.map((ing) => {
  return { name: ing, checked: false }
})
const ingredients = ref(ingredientsObj)


const instructionsObj = recipe.instructions.map((step) => {
  return { text: step, checked: false }
})
const instructions = ref(instructionsObj)

const moreRecipesByAuthor = props.recipes.filter((rec) => { return rec.author === author?.id && rec.id != recipeId })


const handleIngredientClick = (index: number) => {
  ingredients.value[index].checked = !ingredients.value[index].checked
}

const handleStepClick = (index: number) => {
  instructions.value[index].checked = !instructions.value[index].checked
}

// Loading animation:
const haveAllImagesLoaded = ref(false)
let imageLoadCounter = 0;

const onImageLoad = function () {
  imageLoadCounter++;
  setTimeout(() => {
    if (imageLoadCounter >= 2) {
      haveAllImagesLoaded.value = true
    }
  }, 300)
}

</script>

<template>
  <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
    <transition name="fade" mode="out-in">
      <section id="loading" v-if="!haveAllImagesLoaded" class="absolute flex flex-col w-full h-full">

        <div
          class="m-auto text-black inline-block h-24 w-24 animate-spin rounded-full border-2 border-solid border-current border-x-transparent align-[-0.125em] motion-reduce:animate-[spin_2s_linear_infinite]"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </section>
    </transition>
    <!-- Title -->
    <transition name="fade" mode="out-in">
      <section v-show="haveAllImagesLoaded"
        class="flex flex-col w-full min-h-[calc(100vh-62px)] md:min-h-[calc(100vh-128px)] snap-start border-b-2 border-black">
        <h1 class="font-stinger text-[22vw] hyphens-auto md:text-[14.5vw] leading-[85%] p-8 pt-4">{{
          recipe.recipeName
        }}
        </h1>
        <div class="flex flex-row w-full h-full items-end justify-end p-8 pb-24 md:p-8">
          <a href="#ingredients">
            <button class="flex font-jost outline outline-2 outline-black text-xl items-center px-4 py-2">
              Get Cooking
              <span class="material-symbols-outlined pl-2">
                arrow_downward
              </span>
            </button>
          </a>
        </div>
      </section>
    </transition>
    <!-- Presentation (image, story, info) -->
    <section v-show="haveAllImagesLoaded"
      class="flex relative flex-col lg:flex-row w-full min-h-[calc(100vh-62px)] lg:min-h-[calc(100vh-128px)] snap-start overflow-scroll border-b-2 border-black">
      <div class="flex relative w-full lg:w-2/3 h-full border-b-2 border-black lg:border-none">
        <figure
          class="flex absolute flex-col w-full h-full mix-blend-luminosity opacity-100 hover:opacity-0 transition-opacity duration-700 z-10">
          <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
          <img @load="onImageLoad" :src="getRecipeImageUrl(recipe.id)"
            class="h-full w-full object-cover object-center" alt="Recipe picture">
        </figure>
        <figure
          class="flex absolute flex-col w-full h-full opacity-0 hover:opacity-90 transition-opacity duration-700 z-20">
          <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
          <img :src="getRecipeImageUrl(recipe.id)" class="h-full w-full object-cover object-center" alt="Recipe image">
        </figure>
        <div class="flex w-full h-full z-0">
          <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
        </div>
      </div>
      <div
        class="flex flex-col w-full lg:w-1/3 h-full lg:border-l-2  border-black  p-8 md:p-9 md:pt-8 gap-4 font-jost text-xl md:text-lg overflow-scroll">
        <div class="flex flex-row gap-4">
          <span class="material-symbols-outlined">
            workspaces
          </span>
          <h5>Serves {{ recipe.servings }} people</h5>
        </div>
        <div class="flex flex-row gap-4">
          <span class="material-symbols-outlined">
            timer
          </span>
          <h5>Prep takes {{ recipe.prepTime }}</h5>
        </div>
        <div class="flex flex-row gap-4">
          <span class="material-symbols-outlined">
            hourglass_full
          </span>
          <h5>Ready in {{ recipe.totalTime }}</h5>
        </div>
        <p class="mt-5 hyphens-none lg:hyphens-auto text-xl md:text-lg">{{ recipe.story }}</p>
      </div>
    </section>
    <!-- Recipe content: -->
    <section class="flex flex-col scroll-smooth" v-show="haveAllImagesLoaded">
      <!-- Ingredients: -->
      <section
        class="flex flex-col w-full p-9 md:p-10 min-h-[calc(100vh-62px)] md:h-[calc(100vh-128px)] snap-start overflow-scroll border-b-2 border-black"
        id="ingredients">
        <h2 class="font-stinger text-[52px] font-bold mb-8 -mt-5">Ingredients</h2>
        <ol class="flex flex-col gap-4 font-jost text-xl flex-wrap">
          <li v-for="ingredient, idx in ingredients" :class="ingredient.checked ? 'line-through opacity-30' : ''"
            @click="handleIngredientClick(idx)">{{ ingredient.name }}</li>
        </ol>
      </section>
      <!-- Instructions -->
      <section v-if="haveAllImagesLoaded"
        class="flex flex-col w-full p-9 md:p-10 min-h-[calc(100vh-62px)] md:min-h-[calc(100vh-128px)] snap-start overflow-scroll border-b-2 border-black"
        id="#ingredients">
        <h2 class="font-stinger text-[52px] font-bold mb-8 -mt-5">Instructions</h2>
        <ol class="flex flex-col gap-8 font-jost text-xl flex-wrap w-full md:w-2/3">
          <li v-for="step, idx in instructions"
            :class="`leading-[150%] hyphens-auto md:hyphens-none ${step.checked ? 'line-through opacity-30' : ''}`"
            @click="handleStepClick(idx)">{{ `${idx + 1}. ${step.text}` }}</li>
        </ol>
      </section>
      <!-- Author: -->
      <section v-show="haveAllImagesLoaded"
        class="flex relative flex-col lg:flex-row w-full min-h-[calc(100vh-62px)] lg:min-h-[calc(100vh-128px)] snap-start overflow-scroll"
        id="#ingredients">
        <!-- Figure/Image -->
        <div class="flex relative w-full lg:w-7/12 h-full border-b-2 border-black lg:border-none">
          <figure class="flex absolute flex-col w-full h-full mix-blend-luminosity z-10 opacity-80">
            <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
            <img @load="onImageLoad" :src="getAuthorImageUrl(author!.id)"
              class="h-full w-full object-cover object-center" alt="Author picture">
          </figure>
        </div>
        <!-- Info -->
        <div
          class="flex flex-col w-full lg:w-5/12 h-full lg:border-l-2 border-black p-8 md:p-9 md:pt-8 gap-4 font-jost text-xl md:text-lg overflow-scroll">
          <p class="hyphens-none lg:hyphens-auto text-xl md:text-lg -mt-0.5">Recipe by</p>
          <h2 class="font-stinger text-[52px] leading-[1] font-bold mb-2 cursor-pointer"
            @click="router.push(`/author/${author?.id}`)">{{ author?.name }}</h2>
          <div class="flex flex-row gap-4 mt-0.5">
            <div class="flex flex-row gap-1 text-lg">
              <span class="material-symbols-outlined">
                star
              </span>
              <h5>{{ author?.birthYear }}</h5>
            </div>
            <div class="flex flex-row gap-1">
              <span class="material-symbols-outlined">
                summarize
              </span>
              <h5>{{ (moreRecipesByAuthor.length + 1) + (moreRecipesByAuthor.length === 0 ? ' recipe' :
                ' recipes') }}</h5>
            </div>
          </div>
          <p class="mt-4 hyphens-none lg:hyphens-auto text-xl md:text-lg">{{ author?.bio }}
          </p>
          <p v-if="moreRecipesByAuthor.length > 0" class="hyphens-none lg:hyphens-auto text-xl md:text-lg mt-3.5">
            Other recipes by {{ author?.name }}
            include:
          </p>
          <ul v-if="moreRecipesByAuthor.length > 0" class="flex flex-col gap-2 -mt-2 underline">
            <li class="hover:text-2xl hover:leading-[120%] transition-all duration-200 cursor-pointer"
              v-for="recipe in moreRecipesByAuthor" @click="router.push(`/recipe/${recipe.id}`)">{{
                recipe.recipeName }}</li>
          </ul>
        </div>
      </section>
    </section>

  </main>
</template>

<style scoped>
* {
  user-select: none;
}
</style>
@/types