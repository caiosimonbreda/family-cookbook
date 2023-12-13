<script setup lang="ts">
import { ref } from 'vue'
import { Recipe, Author } from '@/types/global'
import { useRouter, useRoute } from 'vue-router'

const [router, route] = [useRouter(), useRoute()]

const props = defineProps<{
    recipes: Recipe[]
    authors: Author[]
}>()
const authorId = route.params.authorId
const author = ref<Author>(props.authors.find((author) => author.id === authorId)!)

const allRecipesByAuthor = props.recipes.filter((recipe) => { return recipe.author === author.value.id })

</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <section
            class="flex relative flex-col lg:flex-row w-full min-h-[calc(100vh-62px)] lg:min-h-[calc(100vh-128px)] snap-start overflow-scroll"
            id="#ingredients">
            <!-- Figure/Image -->
            <div class="flex relative w-full lg:w-7/12 h-full border-b-2 border-black lg:border-none">
                <figure class="flex absolute flex-col w-full h-full mix-blend-luminosity z-10 opacity-80">
                    <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
                    <img :src="`/src/assets/authors/${author?.id}.png`" class="h-full w-full object-cover object-center"
                        alt="Author image">
                </figure>
            </div>
            <!-- Info -->
            <div
                class="flex flex-col w-full lg:w-5/12 h-full lg:border-l-2 border-black p-8 md:p-9 md:pt-8 gap-4 font-jost text-xl md:text-lg overflow-scroll">
                <h2 class="font-stinger text-[52px] leading-[1] font-bold mb-2">{{ author?.name }}</h2>
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
                        <h5>{{ allRecipesByAuthor.length + (allRecipesByAuthor.length === 1 ? ' recipe' : ' recipes') }}</h5>
                    </div>
                </div>
                <p class="mt-4 hyphens-none lg:hyphens-auto text-xl md:text-lg">{{ author?.bio }}
                </p>
                <p class="hyphens-none lg:hyphens-auto text-xl md:text-lg mt-3.5">Recipes by {{ author?.name }}:
                </p>
                <ul class="flex flex-col gap-2 -mt-2 underline cursor-pointer">
                    <li class="hover:text-2xl hover:leading-[120%] transition-all duration-200 cursor-pointer" v-for="recipe in allRecipesByAuthor" @click="router.push(`/recipe/${recipe.id}`)">{{ recipe.recipeName }}</li>
                </ul>
            </div>
        </section>

    </main>
</template>

<style scoped>
* {
    user-select: none;
}
</style>
