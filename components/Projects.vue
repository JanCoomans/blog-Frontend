<template>
    <section class="px-7">
        <SectionTitle :title="'Projects'" :underline="true"></SectionTitle>
        <div class="max-w-5xl w-full mx-auto grid grid-cols-12 items-center">
            <!-- Image -->
            <section class="my-image col-start-1 col-end-13 md:col-end-7 lm:col-end-8  row-start-1 z-0">
                <img class="w-full" src="https://cdn.discordapp.com/attachments/561499394491285514/1064516296554844170/Image.jpg"
                    alt="mockup">
            </section>
            <!-- /Image -->
            <!-- Description -->
            <section class="col-start-1 md:col-start-5 lm:col-start-7 col-end-13 row-start-1 z-10 text-right">
                <div class="text-accent font-dmsans mb-1 text-sm">Featured</div>
                <h3 class="title-h3 mb-7">PERSONAL PORTFOLIO</h3>
                <article class="bg-primary-700 rounded-lg px-5 pt-5 pb-6 drop-shadow-right">
                    <p class="description">
                        My personal portfolio build from scratch. This website has a custom design which introduced me
                        to Figma. All content is dynamically managed by Strapi CMS.
                    </p>
                </article>
                <div class="mt-5 flex justify-end gap-7 tag">
                    <div>Tailwind CSS</div>
                    <div> Vue</div>
                    <div> Nuxt</div>
                    <div> Strapi</div>
                </div>
                <div class="mt-5 flex justify-end gap-4 h-6">
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
.my-image{
    position: relative;
 
    overflow: hidden;
}

.my-image img{
    mix-blend-mode: multiply;
    filter: grayscale(100%) brightness(90%);
    
    
}

.my-image::after{
    position: absolute;
    content: "";
    mix-blend-mode: overlay;
    background-color: var(--accent);
    width: 100%;
    height: 100%;
    top: 0;
    //filter: brightness(30%);
    //backdrop-filter: blur(100px);
}
</style>