<script setup lang="ts">

const title = `'Sugar Plum Fairy' Prune Pie`

const ingredients = [
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

const instructions = [
    '1. Make a prune compote by pitting the plums and taking them to a stovetop to boil together with the syrup and 150 grams of sugar, and set aside.',
    '2. Dissolve the guava marmalade in half a cup of water, adding an optional tablespoon of sweet Martini if desired, then take it to the stovetop to boil. Set aside.',
    '3. Mix the butter with the sugar; then mix in the egg yolks, beating well. Next add the flour with the 3 teaspoons of baking powder mixed in, and don’t stop mixing. Add the condensed milk, then half the prune compote and half the goiabada. Lastly, mix in the egg whites (beaten to stiff peaks).',
    '4. Roast in a buttered and floured rectangular oven pan. The remaining goiabada and prune compote will serve as a filling for the pie.',
]





</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <section class="flex flex-col w-full min-h-[calc(100vh-128px)] max-h-[1000px] snap-center border-b-2 border-black">
            <h1 class="font-stinger text-[14vw] leading-[85%] p-8">{{ title }}</h1>

            <div class="flex flex-row w-full h-full items-end justify-end p-8">
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
            class="flex flex-col w-full p-10 min-h-[calc(100vh-128px)] snap-center overflow-scroll border-b-2 border-black bg-emerald-400 opacity-60"
            id="ingredients">
            <h2 class="font-stinger text-4xl font-bold mb-6 -mt-2">Ingredients</h2>
            <ol class="flex flex-col gap-6 font-jost text-xl flex-wrap">
                <li v-for="ingredient in ingredients">{{ ingredient }}</li>
            </ol>
        </section>
        <section class="flex flex-col w-full p-10 min-h-[calc(100vh-128px)] snap-center overflow-scroll border-b-2 border-black" id="#ingredients">
            <ol class="flex flex-col gap-8 font-jost text-xl flex-wrap w-2/3">
                <li v-for="step in instructions" class="leading-[150%]">{{ step }}</li>
            </ol>
        </section>
    </main>
</template>

<style scoped></style>
