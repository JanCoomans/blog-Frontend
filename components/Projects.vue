<template>
    <section class="px-7">
        <SectionTitle :title="'Projects'" :underline="true"></SectionTitle>
        <div class="max-w-5xl w-full mx-auto grid grid-cols-12 items-center">
            <!-- Image -->
            <section class="after:content-empty md:after:content-none after:absolute after:bg-primary-500 after:mix-blend-color after:inset-0 relative shadow-xl-dark md:shadow-none col-start-1 col-end-13 md:col-end-7 lm:col-end-8  row-start-1 z-0">
                <img class="w-full opacity-[.06] md:opacity-100" src="https://cdn.discordapp.com/attachments/561499394491285514/1064516296554844170/Image.jpg"
                    alt="mockup">
            </section>
            <!-- /Image -->
            <!-- Description -->
            <section class="p-10 md:p-0 col-start-1 md:col-start-5 lm:col-start-7 col-end-13 row-start-1 z-10 md:text-right">
                <div class="text-accent tag mb-1">Featured project</div>
                <h3 class="title-h3 mb-3 md:mb-7">PERSONAL PORTFOLIO</h3>
                <article class="md:bg-primary-700 rounded-lg md:px-5 md:pt-5 md:pb-6 md:shadow-right">
                    <p class="description">
                        My personal portfolio build from scratch. This website has a custom design which introduced me
                        to Figma. All content is dynamically managed by Strapi CMS.
                    </p>
                </article>
                <div class="mt-9 md:mt-5 flex md:justify-end gap-7 tag">
                    <div>Tailwind CSS</div>
                    <div> Vue</div>
                    <div> Nuxt</div>
                    <div> Strapi</div>
                </div>
                <div class="mt-3 md:mt-5 flex md:justify-end gap-4 h-6">
                    <div>icons</div>
                    <div>/</div>
                    <div>links</div>
                </div>
            </section>
            <!-- Description -->
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>