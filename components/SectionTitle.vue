<template>
    <div class="mx-auto text-center mb-20 sm:mb-24 md:mb-30">
        <h2 class="font-dmsans font-bold text-4xl2 xs:text-5xl md:text-title uppercase">{{ title }}</h2>
        <div v-if="underline" class="mx-auto bg-accent h-1 w-13 xs:w-14 sm:w-16 mt-5"></div>
    </div>
</template>

<script setup>
    const { title, underline } = defineProps(['title', 'underline'])
</script>

<style lang="scss" scoped>
</style>
