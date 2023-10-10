<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Recipe, Author } from '@/types/global'

const router = useRouter()

const props = defineProps<{
  recipes: Recipe[]
  authors: Author[]
}>()

const goToRecipe = (recipe: typeof props.recipes[0]) => {
    router.push(`/recipe/${recipe.id}`)
}

</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <section
            class="flex flex-col w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] max-h-[1000px] snap-center">
            <!-- <h1 class="font-stinger text-[14vw] md:text-[12.5vw] leading-[85%] p-8">The family recipes that nurtured
                our
                love of food</h1> -->
            <h1 class="jumbotitle font-stinger leading-[85%] p-10 pt-5">The family recipes that nurtured
                our
                love of food</h1>
            <div class="flex flex-row w-full h-full items-end mb-24 md:mb-0">
                <a href="#recipe-list
                " class="relative w-fit mx-auto cursor-pointer animate-bounce mt-4"><span
                        class="material-symbols-outlined text-[60px] md:text-[80px] font-light">
                        expand_more
                    </span></a>
            </div>
        </section>
        <section class="flex flex-row w-full snap-start" id="recipe-list">
            <ol class="flex flex-col gap-6 font-jost p-10 pt-9 text-xl flex-wrap">
                <li class="hover:text-2xl hover:leading-[120%] transition-all duration-200 cursor-pointer" v-for="recipe in recipes" @click="goToRecipe(recipe)">{{
                    `${recipe.id}. ${recipe.recipeName}` }}</li>
            </ol>
        </section>

    </main>
</template>

<style scoped>

* {
    user-select: none;
}

@media screen and (max-width: 20000px) {
    .jumbotitle {
        font-size: clamp(8em, 20.5vh, 80em);
        line-height: 85%;
    }
}

@media screen and (max-width: 1400px) {
    .jumbotitle {
        font-size: clamp(8em, 20vh, 80em);
    }
}

@media screen and (max-width: 1200px) {
    .jumbotitle {
        font-size: clamp(8em, 12vh, 40em);
    }
}

@media screen and (max-width: 900px) {
    .jumbotitle {
        font-size: clamp(3rem, 16vh, 40em);
    }
}

@media screen and (max-width: 600px) {
    .jumbotitle {
        font-size: clamp(3rem, 12vh, 40em);
    }
}
</style>
