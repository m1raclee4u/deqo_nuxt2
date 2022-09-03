<template>
    <div class="filter">
        <button>{{category.name}}</button>
    </div>
</template>

<script>
export default {
    name: "category",
     props: [
        "category"
    ],
}
</script>

<style lang="scss" scoped>
    button{
        padding: 10px 9px;
    }
</style>