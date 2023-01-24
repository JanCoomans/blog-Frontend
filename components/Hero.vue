<template>
    <section
        class="bg-gradient-to-b from-primary-900 to-primary-700 h-auto px-7 pt-7 xs:pt-12 sm:pt-17 pb-24 xs:pb-28 lg:pb-35">
        <div class="max-w-7xl mx-auto relative">
            <div class="absolute top-0 right-0 inline-block z-0  opacity-80 md:opacity-100">
                <HeroDecorationTR></HeroDecorationTR>
            </div>
            <div class="absolute bottom-0 left-0 inline-block z-0 opacity-80 md:opacity-100">
                <HeroDecorationBL></HeroDecorationBL>
            </div>
            <div class="sm:px-19 pt-16 pb-18 xs:py-14 relative">
                <div
                    class="flex items-center gap-4 text-accent text-sm md:text-base font-dmmono mb-5 lg:mb-7 opacity-90">
                    <h4 class="w-min xs:w-auto">{{ hero.attributes.overline_one }}</h4>
                    <template v-if="hero.attributes.overline_two">
                        <div class="bg-slate-100 h-px w-9"></div>
                        <h4 class="w-min xs:w-auto">{{ hero.attributes.overline_two }}</h4>
                    </template>
                </div>
                <div id="heroHeadline" class="font-dmsans font-bold mb-7 xs:mb-8 md:mb-12">
                    <h1>
                        {{ hero.attributes.title_line_one }}
                        <br>
                        {{ hero.attributes.title_line_two }}
                    </h1>
                </div>
                <article class="max-w-5xl w-full md:mx-auto text-justify md:text-start">
                    <p id="heroDescription"
                        class="text-gray-300 opacity-80 lg:text-lg font-dmmono text-base font-light md:font:normal leading-6 mb-12 sm:mb-14">
                        {{ hero.attributes.description }}
                    </p>
                </article>
                <NuxtLink :to="hero.attributes.scroll_location.data.attributes.uri_path">
                    <div
                        class="py-2 sm:py-3 lg:py-4 w-36 sm:w-40 lg:w-48 mx-auto text-center btn-accent font-dmmono font-medium lg:text-lg">
                        <h3>{{ hero.attributes.scroll_button }}</h3>
                    </div>
                </NuxtLink>
                <div
                    class="absolute bottom-0 right-0 z-0 md:pr-inherit flex md:flex-col gap-5 md:gap-4 lg:gap-5 items-center">
                    <div class="hidden md:block w-3px h-20 lg:h-24 bg-accent mx-auto"></div>
                    <NuxtLink v-for="link in hero.attributes.links.data" :key="link.id" :to="link.attributes.URL"
                        target="_blank" class="h-7 w-7 cursor-pointer hover:color-filter-accent">
                        <img :src="`${fileserver}${link.attributes.icon.data.attributes.url}`"
                            :alt="link.attributes.icon.data.attributes.alternativeText">
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { find } = useStrapi();
const { data: hero } = await find('hero?populate=deep');
const { fileserver } = useRuntimeConfig();
</script>

<style lang="scss" scoped>
#heroHeadline {
    font-size: clamp(2rem, 6.5vw + 2rem, 5rem);
    line-height: calc(6vw + 2.5rem);
}

@media only screen and (min-width: 576px) {
    #heroHeadline {
        line-height: 5rem;
    }
}

@media only screen and (min-width: 640px) {
    #heroHeadline {
        font-size: clamp(3rem, 7vw + 1rem, 5rem);
        line-height: 5rem;
    }
}

@media only screen and (min-width: 768px) {
    #heroDescription {
        width: calc(50% + 80px);
    }

    #heroHeadline {
        font-size: calc(7.8vw + 1rem);
        line-height: 6.5rem;
    }
}

@media only screen and (min-width: 1024px) {
    #heroDescription {
        width: calc(50% + 96px); // Add 50% of the button width. 
    }

    #heroHeadline {
        font-size: 7rem;
        line-height: 9.5rem;
    }
}
</style>