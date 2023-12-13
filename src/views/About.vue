<script setup lang="ts">
const authorInfo = [
    { name: 'Amanda Lim', url: 'https://unsplash.com/@mandimelanie' },
    { name: 'American Heritage Chocolate', url: 'https://unsplash.com/@americanheritagechocolate' },
    { name: 'Bruno Oliveira', url: 'https://unsplash.com/@boliveira' },
    { name: 'Dani', url: 'https://unsplash.com/@frokz' },
    { name: 'Elena Leya', url: 'https://unsplash.com/@foodistika' },
    { name: 'Food Photographer', url: 'https://unsplash.com/@phototastyfood' },
    { name: 'Gábor Molnár', url: 'https://unsplash.com/@gabormolnar92' },
    { name: 'Gary Moreton-Jones', url: 'https://unsplash.com/@ptfoods' },
    { name: 'Girl with red hat', url: 'https://unsplash.com/@girlwithredhat' },
    { name: 'Glen Carrie', url: 'https://unsplash.com/@glencarrie' },
    { name: 'Henry Perks', url: 'https://unsplash.com/@hjkp' },
    { name: 'Iñigo De la Maza', url: 'https://unsplash.com/@idelamaza' },
    { name: 'Jen Theodore', url: 'https://unsplash.com/@jentheodore' },
    { name: 'Jordane Mathieu', url: 'https://unsplash.com/@mat_graphik' },
    { name: 'Kamala Bright', url: 'https://unsplash.com/@riosamba' },
    { name: 'Matheus Ferrero', url: 'https://unsplash.com/@matheusferrero' },
    { name: 'Nik', url: 'https://unsplash.com/@helloimnik' },
    { name: 'Pure Julia', url: 'https://unsplash.com/@purejulia' },
    { name: 'Scott Eckersley', url: 'https://unsplash.com/@scotteckersley' },
    { name: 'Max Griss', url: 'https://unsplash.com/@grissphoto' },
    { name: 'Marcie Douglass', url: 'https://unsplash.com/@marcied' },
    { name: 'Daniel Dan', url: 'https://unsplash.com/@outsideclick' }
];



</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth font-jost">
        <section
            class="flex flex-col w-full lg:h-[calc(100vh-128px)] overflow-none lg:overflow-y-auto snap-proximity snap-both">
            <div class="flex flex-col gap-7 w-full margin-auto min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)] snap-start p-8 md:p-12 overflow-scroll"
                id="a-family-matter" ref="aFamilyMatter">
                <h2 class="font-stinger text-[3.25rem] leading-[110%] font-bold mb-0.5 -mt-3">General Info</h2>
                <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
                    This project is a digital version of my family's old recipe notebook, created using Vue 3 + TS and
                    TailwindCSS. You can find me at <a class="underline" href="https://github.com/caiosimonbreda">Github</a> and <a class="underline" href="https://www.linkedin.com/in/caiosimonbreda/">LinkedIn</a>, or contact me through <a class="underline" href="mailto:caiosimonbreda@gmail.com">electronic mail</a>. 
                </p>
                <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
                    It's very much still a work in progress, and there's some quirks I'd still like to iron out
                    (opacity transitions are not supported on the filters I use in the author images, for one; and Safari
                    doesn't play well with those filters at all).
                </p>
                <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7] xl:w-2/3">
                    I'm also adding real pictures of the recipes as I cook them again – for the time being, I have used as
                    placeholders some Unsplash images from the following list of wonderful authors:
                </p>

                <ul class="flex flex-col gap-2 -mt-2 underline cursor-pointer w-fit">
                    <li class="text-xl md:text-lg hover:text-2xl hover:leading-[120%] transition-all duration-200 cursor-pointer" v-for="author in authorInfo"><a :href="author.url">{{ author.name }}</a></li>
                </ul>

            </div>

        </section>

    </main></template>

<style scoped></style>
