<template>
    <section class="bg-secondary w-full px-7 pt-14 pb-24">
        <div class="max-w-7xl mx-auto">
            <SectionTitle :title="data.attributes.head.title" :underline="data.attributes.head.underline">
            </SectionTitle>

            <div class="max-w-3xl mx-auto flex flex-wrap justify-center gap-8">
                <div class="contact-item" v-for="link in data.attributes.tag_links.data" :key="link.id">
                    <div class="w-6 h-6 mr-4">
                        <img :src="`${fileserver}${link.attributes.icon.data.attributes.url}`"
                            :alt="link.attributes.icon.data.attributes.alternativeText">
                    </div>
                    <div class="contact-divide-line"></div>
                    <h4>{{ link.attributes.tag }}</h4>
                </div>
            </div>

            <div class="max-w-xs w-full mx-auto flex justify-around mt-16">
                <NuxtLink class="contact-social" v-for="link in data.attributes.links.data" :key="link.id"
                    :to="link.attributes.URL" target="_blank">
                    <img :src="`${fileserver}${link.attributes.icon.data.attributes.url}`"
                        :alt="link.attributes.icon.data.attributes.alternativeText">
                </NuxtLink>
            </div>
        </div>
    </section>

</template>

<script setup>
    const { find } = useStrapi();
    const { data } = await find('contact?populate=deep');
    const { fileserver } = useRuntimeConfig();
    /*
    if (!data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }
    */
</script>

<style lang="scss" scoped>

</style>