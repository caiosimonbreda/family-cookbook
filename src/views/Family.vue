<script setup lang="ts">
import { Recipe, Author } from '@/types/global'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const props = defineProps<{
  recipes: Recipe[]
  authors: Author[]
}>()

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
      <div v-show="haveAllImagesLoaded" class="flex flex-col w-full snap-start lg:flex-row h-full overflow-scroll scroll-smooth">
        <section
          class="flex flex-col w-full lg:w-9/12 lg:h-[calc(100vh-128px)] overflow-none lg:overflow-y-auto scroll-smooth snap-proximity snap-both">
          <div
            class="flex flex-col w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] snap-start border-b-2 border-black">
            <h1 class="jumbotitle font-stinger p-9 pt-5">Roots that run deep</h1>
            <div class="flex flex-row w-full h-full items-end mb-20 md:mb-6">
              <a href="#a-family-matter
                " class="relative w-fit mx-auto cursor-pointer animate-bounce mt-4"><span
                  class="material-symbols-outlined text-[4.5rem] md:text-[75px] font-light">
                  expand_more
                </span></a>
            </div>
          </div>
          <div
            class="flex flex-col gap-7 w-full xl:w-2/3 margin-auto min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] snap-start p-12"
            id="a-family-matter">
            <h2 class="font-stinger text-[3.25rem] leading-[110%] font-bold mb-0.5 -mt-3">A Family Matter</h2>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
              et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. In
              metus
              vulputate eu scelerisque felis imperdiet proin fermentum. Parturient montes nascetur ridiculus
              mus
              mauris vitae ultricies leo integer. Semper viverra nam libero justo laoreet sit amet cursus.
              Enim
              neque volutpat ac tincidunt vitae semper quis lectus nulla.
            </p>
            <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7]">
              Quis vel eros donec ac. Magna fringilla urna porttitor rhoncus dolor purus non. Tincidunt ornare
              massa eget egestas purus viverra accumsan in nisl. Feugiat in fermentum posuere urna nec
              tincidunt.
              Iaculis nunc sed augue lacus viverra vitae congue. Ornare quam viverra orci sagittis. Congue eu
              consequat ac felis donec et.
            </p>
          </div>
        </section>
        <section
          class="flex flex-none flex-col w-full lg:w-3/12 border-t-2 lg:border-l-2 border-black lg:overflow-scroll">
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
            <img @load="onImageLoad" :src="`/src/assets/authors/${author.id}.png`"
              class="h-full w-full object-cover object-center" alt="">
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
</style>