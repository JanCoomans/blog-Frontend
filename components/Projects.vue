<template>
    <section class="px-7">
        <SectionTitle :title="data.attributes.head.title" :underline="data.attributes.head.underline"></SectionTitle>
        <div class="flex flex-col gap-24 md:gap-30 lg:gap-44">
            <div v-for="(project, index) in data.attributes.project_data.data" :key="project.id"
                :class="[index % 2 ? 'project-left' : 'project-right']"
                class="max-w-5xl w-full mx-auto grid grid-cols-12 items-center">
                <!-- Image -->
                <section class="project-image">
                    <img class="object-cover h-full min-w-full opacity-[.06] md:opacity-100"
                        :src="`${fileserver}${project.attributes.image.data.attributes.url}`"
                        :alt="project.attributes.image.data.attributes.alternativeText">
                </section>
                <!-- /Image -->
                <!-- Description -->
                <section class="project-body">
                    <div class="text-accent mb-1 tag">{{ data.attributes.overline }}</div>
                    <h3 class="title-h3 mb-3 md:mb-7 uppercase">{{ project.attributes.title }}</h3>
                    <article class="md:bg-primary-700 rounded-lg md:px-5 md:pt-5 md:pb-6 md:shadow-right">
                        <p class="description">
                            {{ project.attributes.description }}
                        </p>
                    </article>
                    <div class="mt-9 md:mt-5 flex flex-wrap gap-y-3 gap-x-7 tag project-tag">
                        <div v-for="entry in project.attributes.technologies.data" :key="entry.id">
                            {{ entry.attributes.short_tag }}
                        </div>
                    </div>
                    <div class="mt-6 flex gap-y-3 flex-wrap gap-x-4 project-tag">
                        <NuxtLink v-for="link in project.attributes.custom_links" :key="link.id" :to="link.URL"
                            target="_blank" class="h-6 w-6 cursor-pointer hover:color-filter-accent">
                            <img :src="`${fileserver}${link.icon.data.attributes.url}`"
                                :alt="link.icon.data.attributes.alternativeText">
                        </NuxtLink>
                    </div>
                </section>
                <!-- Description -->
            </div>
        </div>
    </section>
</template>

<script setup>
const { find } = useStrapi();
const { data } = await find('featured-project?populate=deep');
const { fileserver } = useRuntimeConfig();
</script>

<style lang="scss" scoped>

</style>