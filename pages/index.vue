<template>
    <div>
        <p>home page</p>
        <p>{{data}}</p>
    </div>
</template>

<script setup>
    const { find } = useStrapi()
    const { data } = await find('welcome-massage')
</script>

<style scoped>

</style>