<template>
    <button class="todo" @click="log">
        Купить сейчас
    </button>
</template>

<script>
export default {
    methods:{
        log(){
            // console.log(filteredItem);
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        // font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */

        height: 60px;
        width: 100%;

        text-align: center;
        border: 2px solid #685F5F;
        border-radius: 4px;
        color: #685F5F;
    }
</style>