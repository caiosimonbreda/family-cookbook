<script setup lang="ts">
import { ref } from 'vue'

const title = `'Sugar Plum Fairy' Prune Pie`

const ingredientsRaw = [
    '1/2 can of condensed milk',
    '5 eggs',
    '250g butter',
    '250g flour',
    '250g sugar',
    '1 small can of prunes in sugar syrup',
    '1/2 wheel of guava marmalade',
    '3 teaspoons baking powder',
    '150g white sugar for prune compote',
]

const ingredientsObj = ingredientsRaw.map((ing) => {
    return { name: ing, checked: false }
})

const ingredients = ref(ingredientsObj)

const instructionsRaw = [
    '1. Make a prune compote by pitting the plums and taking them to a stovetop to boil together with the syrup and 150 grams of sugar, and set aside.',
    '2. Dissolve the guava marmalade in half a cup of water, adding an optional tablespoon of sweet Martini if desired, then take it to the stovetop to boil. Set aside.',
    '3. Mix the butter with the sugar; then mix in the egg yolks, beating well. Next add the flour with the 3 teaspoons of baking powder mixed in, and don’t stop mixing. Add the condensed milk, then half the prune compote and half the goiabada. Lastly, mix in the egg whites (beaten to stiff peaks).',
    '4. Roast in a buttered and floured rectangular oven pan. The remaining goiabada and prune compote will serve as a filling for the pie.',
]

const instructionsObj = instructionsRaw.map((step) => {
    return { text: step, checked: false }
})

const instructions = ref(instructionsObj)


const handleIngredientClick = (index: number) => {
    ingredients.value[index].checked = !ingredients.value[index].checked
}

const handleStepClick = (index: number) => {
    instructions.value[index].checked = !instructions.value[index].checked
}

</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <section
            class="flex flex-col w-full min-h-[calc(100vh-62px)] md:min-h-[calc(100vh-128px)] snap-start border-b-2 border-black">
            <h1 class="font-stinger text-[22vw] hyphens-auto md:text-[14.5vw] leading-[85%] p-8">{{ title }}</h1>
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
        <section
            class="flex relative flex-col lg:flex-row w-full min-h-[calc(100vh-62px)] lg:min-h-[calc(100vh-128px)] snap-start overflow-scroll border-b-2 border-black">
            <div class="flex relative w-full lg:w-2/3 h-full border-b-2 border-black lg:border-none">
                <div
                    class="flex absolute flex-col w-full h-full mix-blend-luminosity opacity-100 hover:opacity-0 transition-opacity duration-700 z-10">
                    <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
                    <img src="/src/assets/pot_roast.png" class="h-full w-full object-cover object-center" alt="">
                </div>
                <div
                    class="flex absolute flex-col w-full h-full opacity-0 hover:opacity-90 transition-opacity duration-700 z-20">
                    <!-- <div class="flex absolute h-full w-full bg-black opacity-5 top-0 left-0 z-50"></div> -->
                    <img src="/src/assets/pot_roast.png" class="h-full w-full object-cover object-center" alt="">
                </div>
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
                    <h5>Serves 6 people </h5>
                </div>
                <div class="flex flex-row gap-4">
                    <span class="material-symbols-outlined">
                        timer
                    </span>
                    <h5>Prep takes 1 hour </h5>
                </div>
                <div class="flex flex-row gap-4">
                    <span class="material-symbols-outlined">
                        hourglass_full
                    </span>
                    <h5>Ready in 2 hours </h5>
                </div>
                <p class="mt-5 hyphens-auto text-xl md:text-lg">This prune pie makes for a lovely treat, and is a great pairing to a
                    dessert wine that compliments its flavour profile. The only person less than pleased about this pie was
                    grandpa, whenever his personal stach of prunes on the side table next to his armchair got raided to aid
                    in its making whenever there weren't enough in the pantry.</p>
            </div>
        </section>
        <!-- Recipe content: -->
        <section class="flex flex-col scroll-smooth">
            <section
                class="flex flex-col w-full p-9 md:p-10 min-h-[calc(100vh-62px)] md:h-[calc(100vh-128px)] snap-start overflow-scroll border-b-2 border-black"
                id="ingredients">
                <h2 class="font-stinger text-4xl font-bold mb-8 -mt-2">Ingredients</h2>
                <ol class="flex flex-col gap-4 font-jost text-xl flex-wrap">
                    <li v-for="ingredient, idx in ingredients" :class="ingredient.checked ? 'line-through opacity-30' : ''"
                        @click="handleIngredientClick(idx)">{{ ingredient.name }}</li>
                </ol>
            </section>
            <section
                class="flex flex-col w-full p-9 md:p-10 min-h-[calc(100vh-62px)] md:min-h-[calc(100vh-128px)] snap-start overflow-scroll"
                id="#ingredients">
                <h2 class="font-stinger text-4xl font-bold mb-8 -mt-2">Instructions</h2>
                <ol class="flex flex-col gap-8 font-jost text-xl flex-wrap w-full md:w-2/3">
                    <li v-for="step, idx in instructions"
                        :class="`leading-[150%] hyphens-auto md:hyphens-none ${step.checked ? 'line-through opacity-30' : ''}`"
                        @click="handleStepClick(idx)">{{ step.text }}</li>
                </ol>
            </section>
        </section>

    </main>
</template>

<style scoped>* {
    user-select: none;
}</style>
