<template>
    <div class="breadcrumbs">
        <Nuxt-Link :to="`/`">Главная</Nuxt-Link>
        <!-- <Nuxt-Link :to="`/${item.category}/${item.name}`">
        <Nuxt-Link :to="`/${item.category}/${item.name}`"> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .breadcrumbs{
        display: flex;
        gap: 15px;
        height: 20px;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        a{
            text-decoration: none;
        }
    }
</style>