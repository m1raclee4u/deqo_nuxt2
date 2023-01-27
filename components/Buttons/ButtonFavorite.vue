<template>
    <div class="buttonFavorite">
        <button class="like" v-if="!isProductAdded"
        @click.prevent="buyClickHandler"
        >
        </button>
            <button class="like added" v-else
        @click.prevent="addedClickHandler"
        >
        </button>
    </div>    
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    props: {
        item: {
        type: Object,
        required: true
        }
    },
    computed: {
        ...mapState({
        products: state => state.favorites.products
        }),
        isProductAdded () {
        return this.products.find(p => p.id === this.item.id)
        }
    },
    methods: {
        ...mapActions({
            addProduct: 'favorites/addProduct',
            removeProduct: 'favorites/removeProduct'
        }),
        buyClickHandler () {
            this.addProduct(this.item)
        },
        addedClickHandler () {
            this.removeProduct(this.item.id)
        }
    }
}
</script>


<style lang="scss" scoped>
    .buttonFavorite{
        position: absolute;
        top: 14px;
        right: 14px;
    }
    .added{
        background-image: url('../../assets/img/icons/heart_on.svg') !important;

    }
    .like{
        background-image: url('../../assets/img/icons/heart.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-color: unset;
        width: 30px;
        height: 30px;
        
        // border-radius: 50%;
        
        &:hover{
            background-image: url('../../assets/img/icons/heart_on.svg');
        }
}
</style>