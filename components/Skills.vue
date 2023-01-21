<template>
    <section class="max-w-8xl mx-auto w-full bg-dotted">
        <div class="py-24 px-7 inset-0 bg-radial-fade">
            <!-- Body -->
            <div class="max-w-7xl mx-auto py-10 xs:py-16 sm:py-19 md:py-32 sm:px-8 md:px-19 relative w-full">
                <!-- Decoration Top-Left -->
                <div class="absolute top-0 left-0 inline-block z-0 test">
                    <svg width="76" height="76" viewBox="0 0 80 80">
                        <path class="fill-accent"
                            d="M-4 5C-4 0.0294373 0.0294373 -4 5 -4H80V4H5C4.44772 4 4 4.44772 4 5H-4ZM80 80H0H80ZM-4 80V5C-4 0.0294373 0.0294373 -4 5 -4V4C4.44772 4 4 4.44772 4 5V80H-4ZM80 0V80V0Z" />
                    </svg>
                </div>


                <div class="w-full">
                    <SectionTitle :title="data.attributes.head.title" :underline="data.attributes.head.underline">
                    </SectionTitle>
                    <div class="flex flex-wrap justify-center gap-y-20 sm:gap-y-20">
                        <div class="skill-item" v-for="skill in data.attributes.technologies.data" :key="skill.id">
                            <img class="h-9 sm:h-12 mb-3 mx-auto" :src="`${fileserver}${skill.attributes.icon.data.attributes.url}`" :alt="skill.attributes.icon.data.attributes.alternativeText">
                            <h3>{{ skill.attributes.tag }}</h3>
                        </div>
                    </div>
                </div>


                <!-- Decoration Bottom-Right -->
                <div class="absolute bottom-0 right-0 inline-block z-0 test">
                    <svg width="76" height="76" viewBox="0 0 80 80">
                        <path class="fill-accent"
                            d="M84 75C84 79.9706 79.9706 84 75 84L0 84V76L75 76C75.5523 76 76 75.5523 76 75H84ZM0 0L80 0L0 0ZM84 0L84 75C84 79.9706 79.9706 84 75 84V76C75.5523 76 76 75.5523 76 75L76 0H84ZM0 80L0 0L0 80Z" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { find } = useStrapi();
    const { data } = await find('skill?populate=deep');
    const { fileserver } = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.bg-dotted {
    background-image:
        radial-gradient(var(--secondary) 3px, transparent 0);
    background-size: 40px 40px;
    background-position: left -25px right -25px;
}

.bg-radial-fade {
    background: radial-gradient(closest-side, rgba(var(--primary-900-rgb), 0.5), var(--primary-900) 95%);
}
</style>