<script>
export default {
    props:{
        colors: {
            
        }
    }
}
</script>

<template>
    <div class="productColors">
        <div class="colors">
            <div class="color"
            v-for="color in colors"
            :key="color.id"
            :style="{backgroundColor: color.value}"
            >
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.colors{
    display: flex;
    align-items: center;
    gap: 18px;
    .color{
        border-radius: 50%;
        width: 18px;
        height: 18px;
    }
}
</style>