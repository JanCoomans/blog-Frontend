<template>
    <div class="mx-auto text-center mb-30">
        <h2 class="font-dmsans font-bold text-title uppercase">{{ title }}</h2>
        <div v-if="underline" class="mx-auto bg-accent h-1 w-16 mt-5"></div>
    </div>
</template>

<script setup>
    const { title, underline } = defineProps(['title', 'underline'])
</script>

<style lang="scss" scoped>
</style>
