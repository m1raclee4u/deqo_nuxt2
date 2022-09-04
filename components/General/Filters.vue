<template>
    <div class="filter">
        <button>
            <i class="delete"></i>
            {{category.name}}
        </button>
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
    .delete{
        display: block;
        flex-shrink: 0;
        width: 11px;
        height: 11px;
        margin-right: 9px;
        background: url('../../assets/img/icons/delete.svg');
        background-size: cover;
        cursor: pointer;
    }
    button{
        display: flex;
        align-items: center;
        font-size: 11px;
        padding: 10px 9px;
        font-weight: 600;
    }
</style>