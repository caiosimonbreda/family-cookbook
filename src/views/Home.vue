<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const recipeList = [
    {
        id: 1,
        title: "Sugar Plum Fairy Pie",
    },
    {
        id: 2,
        title: "Grandma's Gnocchi"
    },
    {
        id: 3,
        title: 'Bread Pudding',
    },
    {
        id: 4,
        title: 'Milk Pudding Type I',
    },
    {
        id: 5,
        title: 'Milk Pudding Type II',
    },
    {
        id: 7,
        title: "Carrot Cake"
    },
    {
        id: 8,
        title: "Mum's Glazed Orange Cake",
    },
    {
        id: 10,
        title: "Pao de Queijo",
    },
    {
        id: 14,
        title: "Cheese Pot Pie",
    },
    {
        id: 15,
        title: "Canapée Filling",
    },
    {
        id: 16,
        title: "Beer Biscuits"
    },
    {
        id: 18,
        title: "Creamy Cocada"
    },
    {
        id: 20,
        title: "Beijinho (Coconut Treats)"
    },
    {
        id: 22,
        title: "Chocolate Cake Type I"
    },
    {
        id: 23,
        title: "Pizza Dough Type I"
    },
    {
        id: 28,
        title: "'Gimme More' Cake"
    },
    {
        id: 34,
        title: "American Chocolate Cake"
    },
    {
        id: 36,
        title: "Cornstarch Cake"
    },
    {
        id: 39,
        title: "One, Two, Three, Four Cake"
    },
    {
        id: 41,
        title: "Coca-Cola Cake"
    },
    {
        id: 46,
        title: "Milk Pudding Type III"
    },
    {
        id: 50,
        title: "Brioche"
    },
    {
        id: 52,
        title: "'Flamingo Feed' Fake Shrimp Spread"
    },
    {
        id: 60,
        title: "Grape Surprises Type I"
    },
    {
        id: 65,
        title: "Grape Surprises Type II"
    },
    {
        id: 76,
        title: "Shrimp Bobo"
    },

    {
        id: 78,
        title: "Bananola"
    },

    {
        id: 85,
        title: "Grandma's 70s Cheesecake"
    },
    {
        id: 90,
        title: "Chocolate Cake Type II"
    },
    {
        id: 93,
        title: "White Bread Type I"
    },
    {
        id: 96,
        title: "Lasagna"
    },

    {
        id: 101,
        title: "Pavée Type II"
    },

    {
        id: 105,
        title: "'Macaxeira' Cake"
    },
    {
        id: 109,
        title: "Mum's Hearty Apple Pie"
    },
    {
        id: 111,
        title: "Wedding Cake"
    },
    {
        id: 117,
        title: "'Satin Pie' Guava Pavée"
    },

    {
        id: 125,
        title: "Coconut Cake"
    },

    {
        id: 127,
        title: "Goiabada"
    },

    {
        id: 129,
        title: "White Bread Type II"
    },
    {
        id: 150,
        title: "Mozzarella Cheese"
    },
    {
        id: 151,
        title: "Coalho Cheese Type II"
    },
    {
        id: 160,
        title: "Blender Pie"
    },
    {
        id: 176,
        title: "Grandma's Beef Pot Roast"
    },
    {
        id: 182,
        title: "Onion Cake"
    },
    {
        id: 188,
        title: "'Ant Mound' Pie"
    },
    {
        id: 208,
        title: "Portuguese Cod Roast"
    },
    {
        id: 209,
        title: "Jetstream Chicken"
    },
    {
        id: 219,
        title: "Chocolate Cake Type IV"
    },
    {
        id: 220,
        title: "Cow's Tongue (Grandma's Way)"
    },
    {
        id: 222,
        title: "Aunt Cynthia's Strawberry Tart"
    },
    {
        id: 232,
        title: "D. Mailda's Molten Cake"
    },
]

const goToRecipe = (recipe: typeof recipeList[0]) => {
    router.push(`/recipe/${recipe.id}`)
}

</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <section class="flex flex-col w-full min-h-[calc(100vh-128px)] max-h-[1000px] snap-center">
            <h1 class="font-stinger text-[16vw] md:text-[12.5vw] leading-[80%]  p-8">The family recipes that nurtured our
                love of food</h1>
            <!-- <a href="#recipe-list" class="absolute left-[50%] bottom-12 cursor-pointer animate-bounce"><span
                    class="material-symbols-outlined text-[90px] font-light">
                    expand_more
                </span></a> -->

            <div class="flex flex-row w-full h-full items-end">
                <a href="#recipe-list" class="relative w-fit left-[45%] cursor-pointer animate-bounce mt-4"><span
                        class="material-symbols-outlined text-[90px] font-light">
                        expand_more
                    </span></a>
            </div>
        </section>
        <section class="flex flex-row w-full snap-start" id="recipe-list">
            <ol class="flex flex-col gap-6 font-jost p-10 text-2xl flex-wrap">
                <li class="cursor-pointer" v-for="recipe in recipeList" @click="goToRecipe(recipe)">{{ `${recipe.id}.
                                    ${recipe.title}` }}</li>
            </ol>
        </section>

    </main>
</template>

<style scoped></style>
