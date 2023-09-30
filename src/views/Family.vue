<script setup lang="ts">

</script>

<template>
    <main class="flex flex-col w-full h-full overflow-scroll snap-both snap-proximity scroll-smooth">
        <div class="flex flex-col w-full snap-start lg:flex-row h-full">
            <section class="flex flex-col w-full lg:w-9/12 h-[calc(100vh-128px)] overflow-y-auto scroll-smooth">
                <div class="flex flex-col w-full min-h-[calc(100vh-128px)] snap-center border-b-2 border-black">
                    <h1 class="jumbotitle font-stinger p-9 pt-5">Roots that run deep</h1>
                    <div class="flex flex-row w-full h-full items-end mb-24 md:mb-6">
                        <a href="#a-family-matter
                " class="relative w-fit mx-auto cursor-pointer animate-bounce mt-4"><span
                                class="material-symbols-outlined text-[60px] md:text-[75px] font-light">
                                expand_more
                            </span></a>
                    </div>
                </div>
                <div class="flex flex-col gap-7 w-2/3 margin-auto min-h-[calc(100vh-128px)] snap-center p-12"
                    id="a-family-matter">
                    <h2 class="font-stinger text-[52px] font-bold mb-0.5 -mt-5">A Family Matter</h2>
                    <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. In metus
                        vulputate eu scelerisque felis imperdiet proin fermentum. Parturient montes nascetur ridiculus mus
                        mauris vitae ultricies leo integer. Semper viverra nam libero justo laoreet sit amet cursus. Enim
                        neque volutpat ac tincidunt vitae semper quis lectus nulla.
                    </p>
                    <p class="hyphens-none text-xl md:text-lg leading-normal lg:leading-[1.7]">
                        Quis vel eros donec ac. Magna fringilla urna porttitor rhoncus dolor purus non. Tincidunt ornare
                        massa eget egestas purus viverra accumsan in nisl. Feugiat in fermentum posuere urna nec tincidunt.
                        Iaculis nunc sed augue lacus viverra vitae congue. Ornare quam viverra orci sagittis. Congue eu
                        consequat ac felis donec et.
                    </p>
                </div>
            </section>
            <section class="flex flex-col w-full lg:w-3/12 overflow-scroll scroll-smooth border-l-2 border-black">
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/lara.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/claudia.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/roland.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/andrea.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/lyscia.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/yvonne.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
                <figure
                    class="flex flex-col w-full h-auto mix-blend-luminosity z-10 opacity-80 border-black border-b-2">
                    <img src="/src/assets/authors/pedro.png" class="h-full w-full object-cover object-center" alt="">
                </figure>
            </section>
        </div>
    </main>
</template>

<style scoped></style>

<style scoped>
.jumbotitle {
    font-size: clamp(8em, 14vw, 18em);
    line-height: 85%;
    text-wrap: balance;
}
</style>