<script setup lang="ts">
import { Recipe, Author } from '@/types/index'
import { useRouter } from 'vue-router';
import { ref, onUnmounted } from 'vue';

const router = useRouter()

const props = defineProps<{
  recipes: Recipe[]
  authors: Author[]
}>()

const getImageUrl = (id: string) => {
 return new URL(`/src/assets/authors/${id}.png`, import.meta.url).href;
};

// Loading animation:
const haveAllImagesLoaded = ref(false)
let imageLoadCounter = 0;

const onImageLoad = function () {
  imageLoadCounter++;
  setTimeout(() => {
    if (imageLoadCounter >= props.authors.length) {
      haveAllImagesLoaded.value = true
    }
  }, 300)
}

const authorcarousel = ref<HTMLDivElement>()

const isHoveringCarousel = ref<boolean>(false)

const scrollInterval = setInterval(() => {
  if (!isHoveringCarousel.value) {
    authorcarousel.value!.scrollTop += 1
  }
}, 40)

onUnmounted(() => {
  clearInterval(scrollInterval)
})

const aFamilyMatter = ref<HTMLDivElement>()

</script>

<template>
  <main class="flex flex-col w-full h-full overflow-scroll snap-both scroll-smooth">
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
    <transition name="fade" mode="out-in">
      <div v-show="haveAllImagesLoaded" class="flex flex-col w-full snap-start lg:flex-row h-full overflow-scroll">
        <section
          class="flex flex-col w-full lg:w-9/12 lg:h-[calc(100vh-128px)] overflow-none lg:overflow-y-auto snap-proximity snap-both">
          <div
            class="flex flex-col w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] snap-start border-b-2 border-black">
            <h1 class="jumbotitle font-stinger p-9 pt-5">Roots that run deep</h1>
            <div class="flex flex-row w-full h-full items-end mb-20 md:mb-6">
              <a @click="aFamilyMatter?.scrollIntoView({ behavior: 'smooth' })"
                class="relative w-fit mx-auto cursor-pointer animate-bounce mt-4"><span
                  class="material-symbols-outlined text-[4.5rem] md:text-[75px] font-light">
                  expand_more
                </span></a>
            </div>
          </div>
          <div
            class="flex flex-col gap-7 w-full margin-auto min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] snap-start p-8 md:p-12 overflow-scroll"
            id="a-family-matter" ref="aFamilyMatter">
            <h2 class="font-stinger text-[3.25rem] leading-[110%] font-bold mb-0.5 -mt-3">A Family Matter</h2>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
              On what may have been a beautiful day in the mid 1980s, my maternal grandmother picked up a plain-looking
              yellow notebook at the store during a grocery run at my aunt Claudia's request. My aunt, about 16
              years old at the time, wanted to start noting down her mum's recipes.
            </p>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
              The project caught traction, and adding recipes to the notebook became a collaborative effort between all
              four sisters with recipes of their own and, eventually, my grandmother joined in herself (though her
              handwriting wasn't nearly as neat. Sorry, gran). Recipes by family friends were also added, turning the
              bright yellow notebook into a compendium of the best recipes that ever made their way into grandma's
              kitchen.
            </p>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
              Through the course of its life, the yellow notebook got stained, torn and grimy, and each time it always got
              re-bound, glued, and taped together. It lives to this day – each descending household owns a copy, and the
              original rests safely in grandma's bedside drawer, away from the kitchen so as to avoid any further battle
              scars.
            </p>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
              With the passing of the years, the family has been growing larger, to which I've decided to create a digital
              repository for the contents of the yellow notebook that anyone can access. I'll also update it over time
              with new recipes that younger family members scavenge, create and perfect.
            </p>
            <!-- <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] opacity-40 xl:w-2/3">
              P.S.: You might notice an apparent lack of precision on the instructions in many of the entries. These
              recipes were shared between people with a lot of years under their aprons – the recipes are a product of
              their time and of the people who wrote them down, and I wouldn't dream of changing them.
            </p> -->
            <div class="flex justify-start">
              <img class="flex w-8/12 sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12 mt-6" src="/src/assets/authors/signature.webp"
                alt="Author's Signature: Caio Breda">
            </div>
          </div>

        </section>
        <section ref="authorcarousel" @mouseover="isHoveringCarousel = true" @mouseout="isHoveringCarousel = false"
          class="flex flex-none flex-col w-full lg:w-3/12 border-t-2 lg:border-l-2 border-black lg:overflow-scroll scroll-smooth">
          <figure v-for="author in authors"
            class="flex relative flex-col h-full w-auto lg:w-full lg:h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2 cursor-pointer"
            @click="router.push(`/author/${author.id}`)">
            <!-- author info overlay on hover -->
            <figcaption
              class="flex flex-col gap-2 xl:gap-2 text-white justify-end absolute w-full h-full opacity-0 hover:opacity-70 bg-black transition-opacity duration-200 p-8 pt-6">
              <h4 class="font-jost text-[2.2rem] font-semibold leading-[100%]">{{ author.name }}</h4>
              <!-- birth year and recipes -->
              <div class="flex flex-col xl:flex-row w-full gap-1.5 xl:gap-6">
                <div class="flex flex-row gap-1.5 items-center font-thin">
                  <span class="material-symbols-outlined text-2xl">
                    star
                  </span>
                  <p class="author-overlay-info">{{ author.birthYear }}</p>
                </div>
                <div class="flex flex-row gap-2 items-center">
                  <span class="material-symbols-outlined text-2xl font-bold">
                    summarize
                  </span>
                  <!-- <p class="author-overlay-info">{{ author.recipes.length + (author.recipes.length === 1 ? ' recipe' : ' recipes') }}</p> -->
                  <p class="author-overlay-info">{{ recipes.filter((rec) => rec.author ===
                    author.id).length + (recipes.filter((rec) => rec.author === author.id).length === 1
                      ? ' recipe' : ' recipes') }}</p>
                </div>
              </div>
            </figcaption>
            <img @load="onImageLoad" :src="getImageUrl(author.id)"
              class="h-full w-full object-cover object-center" alt="Author picture">
          </figure>
        </section>
      </div>
    </transition>
  </main>
</template>

<style scoped></style>

<style scoped>
.jumbotitle {
  font-size: clamp(8em, 14vw, 18em);
  line-height: 85%;
  text-wrap: balance;
}

.author-overlay-info {
  font-family: Jost, sans-serif;
  font-size: 1.2rem;
}
</style>@/types