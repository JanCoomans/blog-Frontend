<template>
    <div class="min-h-screen flex items-center justify-center bg-primary-900 p-7 text-slate-100">
        <div class="bg-secondary rounded-md shadow-xl-dark text-center p-7 h-80 aspect-square inline-flex flex-col items-center justify-center">
            <p class="text-5xl font-bold">Error: {{ error.statusCode }}</p>
            <p class="mt-4">{{ error.message }}</p>
            <button class="btn btn-accent mt-7 py-2 px-4" @click="handleClearError">Go home ...</button>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>
